import killableprocess
import subprocess
import os

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

    def runCommand(self, filenames, async = False, timeout=10, *args):
        """Run the shell loading the files in filename and passing any extra 
        arguments in args. Returns a tuple of (success, stdout)"""
        commandline = self.getCommand(filenames, *args)
        if self.verbose:
            print " ".join(map(lambda s: (' ' in s or '\n' in s) and '"' + re.sub("\\s+", " ", s) + '"' or s, commandline))
        try:
            proc = killableprocess.Popen(commandline,
                                         stdout=subprocess.PIPE,
                                         stderr=subprocess.STDOUT, 
                                         env=os.environ,
                                         bufsize=-1)
        except:
            raise
            sys.stderr.write("Command %s failed\n Did you specify the correct path the the jsshell?\n"%" ".join(commandline))
            sys.exit(1)
        if async:
            return proc
        else:
            res = proc.wait(timeout)
            return res, proc.stdout.read()

class CarakanShell(JSShell):
    exec_name = "jsshell"
    def getCommand(self, filenames, *args):
        rv = [self.path, "-q"]
        rv.extend(args + filenames)
        return rv

class CarakanNativeShell(JSShell):
    exec_name = "jsshell-nc"
    def getCommand(self, filenames, *args):
        rv = [self.path, "-q", "-np"]
        rv.extend(args + filenames)
        return rv

class FutharkShell(JSShell):
    exec_name = "jsshell-futhark"
    def getCommand(self, filenames, *args):
        rv = [self.path, "-q"]
        rv.extend(args + filenames)
        return rv


class SpiderMonkeyShell(JSShell):
    exec_name = "js"
    def getCommand(self, filenames, *args):
        rv = [self.path] + list(args)
        for fn in filenames:
            rv.extend(["-f", fn])
        return rv

class SquirrelFishShell(JSShell):
    exec_name = "jsc"
    def getCommand(self, filenames, *args):
        rv = [self.path, "-s"] #I think I want -s here
        rv.extend(args + filenames)
        return rv

class V8Shell(JSShell):
    exec_name = "shell"
    def getCommand(self,filenames, *args):
        rv = [self.path]
        rv.extend(args + filenames)
        return rv

shells = {
    "carakan":CarakanShell,
    "carakan-native":CarakanNativeShell,
    "v8":V8Shell,
    "squirrelfish":SquirrelFishShell,
    "spidermonkey":SpiderMonkeyShell
}
