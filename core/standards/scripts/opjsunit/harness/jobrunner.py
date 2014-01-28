import sys
import collections
import threading
import time
import platform

os_type = "unknown"
if "linux" in platform.system().lower():
    os_type = "unix"
elif "windows" in platform.system().lower():
    os_type = "windows"
elif "darwin" in platform.system().lower():
    os_type = "osx"

class JobRunner(object):
    def __init__(self, processes, display_progress = True, 
                 progress_max = 79, timeout=None):
        self.num_processes = processes
        self.job_queue = collections.deque([])
        self.running_procs = {}
        
        self.total_running_jobs = 0

        self.display_progress = display_progress
        self.num_done = 0
        self.progress_width = 0
        self.progress_max = progress_max

        self.timeout = timeout
        self.timers = {}

    def queue(self, iterable):
        self.job_queue.extend(iterable)

    def run(self):
        self.total_running_jobs = len(self.job_queue)
        while len(self.running_procs) < self.num_processes and self.job_queue:
            self.start_next()
        while self.job_queue:
            try:
                pid, rv = self.hold_for_finished_job()
            except KeyboardInterrupt: 
                break
            self.done(pid, rv)
            self.start_next()
        while self.running_procs:
            pid, rv = self.hold_for_finished_job()
            self.done(pid, rv)
        if self.display_progress:
            sys.stderr.write("\n")

    def hold_for_finished_job(self):
        if os_type == "linux":
            return os.wait()
        else:
            while True:
                for pid, (proc, callback, data) in self.running_procs.iteritems():
                    rv = proc.poll()
                    if rv != None:
                        return pid, rv
                time.sleep(0.05)

    def start_next(self):
        job = self.job_queue.popleft()
        
        proc, callback, timeout_multipler = job()
        timeout = self.timeout * timeout_multipler if timeout_multipler else self.timeout
        self.running_procs[proc.pid] = proc, callback, {"killed":False}
        if self.timeout is not None:
            self.timers[proc.pid] = threading.Timer(timeout, 
                                                    self.kill, 
                                                    (proc.pid, time.time()))
            self.timers[proc.pid].start()
            
    def done(self, pid, rv):
        proc, callback, metadata = self.running_procs[pid]
        if pid in self.timers:
            self.timers[pid].cancel()
            del self.timers[pid]
        try:
            del self.running_procs[pid]
        except KeyError:
            #Not sure what is going on here, just try logging for now
            sys.etderr.write("\nDeleting PID %i failed, PID not found"%int(pid))
            
        signal = rv & 0x00ff
        rv = (rv & 0xff00) >> 8

        killed = metadata["killed"]
        if callback is not None:
            callback(rv, signal, proc, killed)
        self.num_done += 1
        if self.display_progress:
            self.progress()

    def kill(self, pid, start_time):
        proc, callback, metadata = self.running_procs[pid]
        rv = proc.poll()
        if rv is not None:
            #The test is actually finished but we didn't notice for some reason
            self.done(pid, rv)
            return
        self.running_procs[pid][2]["killed"] = True
        rv = proc.kill()
        del self.timers[pid]
        

    def progress(self):
        expected_width = int(round(self.progress_max * float(self.num_done) / 
                                   self.total_running_jobs))
        sys.stderr.write("="*(expected_width - self.progress_width))
        self.progress_width = expected_width
