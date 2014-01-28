import killableprocess
import subprocess
import os
import tempfile

class JSShell(object):
    exec_name = None #Default name of the shell executable
    default_repetitions = 1
    def __init__(self, path, verbose=False):
        self.path = path
        self.verbose = verbose

    def getCommand(self, filenames, *args):
        """Return a list of [path, *arguments] sutiable for passing to
        killableprocess.Popen objects

        filenames - a list of filenames to run
        args - extra arguments to pass to the command
        """
        raise NotImplementedError

    def runCommand(self, filenames, args, async = False, use_temp_file=False, valgrind=False):
        """Run the shell loading the files in filename and passing any extra 
        arguments in args. Returns a tuple of (success, stdout)"""
        commandline = self.getCommand(filenames, *args)

        if valgrind:
            commandline = ["valgrind", "--smc-check=all", "--leak-check=yes", "--error-exitcode=102"] + commandline # 102 is fairly random

        if use_temp_file:
            stdout = tempfile.TemporaryFile()
        else:
            stdout = subprocess.PIPE

        if self.verbose:
            print " ".join(map(lambda s: (' ' in s or '\n' in s) and '"' + re.sub("\\s+", " ", s) + '"' or s, commandline))
        try:
            proc = killableprocess.Popen(commandline,
                                         stdout=stdout, 
                                         stderr=subprocess.STDOUT, 
                                         env=os.environ
                                         )
            if use_temp_file:
                proc.stdout = stdout
        except:
            raise
            sys.stderr.write("Command %s failed\n Did you specify the correct path the the jsshell?\n"%" ".join(commandline))
            sys.exit(1)
        if async:
            return proc
        else:
            res = proc.wait(timeout)
            return res == 0, proc.stdout.read()

class CarakanShell(JSShell):
    name = "carakan"
    exec_name = "jsshell"
    default_repetitions = 2
    def getCommand(self, filenames, *args):
        rv = [self.path, "-q"]
        rv.extend(args)
        rv.extend(filenames)
        return rv

class CarakanGCShell(JSShell):
    name = "carakan-gc"
    exec_name = "jsshell"
    default_repetitions = 2
    def getCommand(self, filenames, *args):
        rv = [self.path, "-q", "-gc"]
        rv.extend(args)
        rv.extend(filenames)
        return rv

class CarakanNativeShell(JSShell):
    name = "carakan-nc"
    exec_name = "jsshell-nc"
    default_repetitions = 100
    def getCommand(self, filenames, *args):
        rv = [self.path, "-q", "-np"]
        rv.extend(args)
        rv.extend(filenames)
        return rv

class CarakanNativeX87Shell(JSShell):
    name = "carakan-nc-x87"
    exec_name = "jsshell-nc"
    default_repetitions = 100
    def getCommand(self, filenames, *args):
        rv = [self.path, "-q", "-np", "-fpmode", "x87"]
        rv.extend(args)
        rv.extend(filenames)
        return rv

class FutharkShell(JSShell):
    name = "futhark"
    exec_name = "jsshell-futhark"
    def getCommand(self, filenames, *args):
        rv = [self.path, "-q"]
        rv.extend(args)
        rv.extend(filenames)
        return rv

class SpiderMonkeyShell(JSShell):
    name = "spidermonkey"
    exec_name = "js"
    def getCommand(self, filenames, *args):
        rv = [self.path, "-m"] + list(args)
        for fn in filenames:
            rv.extend(["-f", fn])
        return rv

class SquirrelFishShell(JSShell):
    name = "squirrelfish"
    exec_name = "jsc"
    def getCommand(self, filenames, *args):
        rv = [self.path, "-s"] #I think I want -s here
        rv.extend(args)
        rv.extend(filenames)
        return rv

class V8Shell(JSShell):
    name = "v8"
    exec_name = "shell"
    def getCommand(self,filenames, *args):
        rv = [self.path]
        rv.extend(args)
        rv.extend(filenames)
        return rv

shells = {
    "carakan":CarakanShell,
    "carakan-gc":CarakanGCShell,
    "carakan-nc":CarakanNativeShell,
    "carakan-nc-x87":CarakanNativeX87Shell,
    "v8":V8Shell,
    "squirrelfish":SquirrelFishShell,
    "spidermonkey":SpiderMonkeyShell
}
