import os
import platform
import subprocess
import glob
import sys
import optparse
import types
try:
    import json
except ImportError:
    import simplejson as json

from collections import defaultdict
from time import time as clock

from relpath import relpath
import killableprocess

base_path = os.path.abspath(os.path.join(os.path.split(os.path.abspath(__file__))[0], "../"))
default_test_path = os.path.abspath(os.path.join(base_path, "tests")) #relative to __file__
harness_path = os.path.abspath(os.path.join(base_path, "harness"))

default_pass_file = os.path.join(harness_path, "pass")
default_fail_file = os.path.join(harness_path, "fail")
default_skip_file = os.path.join(harness_path, "skip")
default_irrelevant_file = os.path.join(harness_path, "irrelevant")
default_skip_test_file = os.path.join(harness_path, "skiptests")

verbose = False
quiet = False
really_quiet = False
crashlistfile = None
timeoutlistfile = None
faillistfile = None

os_type = "unknown"
if "linux" in platform.system().lower():
    os_type = "unix"
elif "windows" in platform.system().lower():
    os_type = "windows"
elif "darwin" in platform.system().lower():
    os_type = "osx"

class Engine(object):
    def __init__(self, path):
        self.path = path
        self.args = []
    def make_command(self, filenames):
        return [self.path] + self.args + filenames

class Spidermonkey(Engine):
    def make_command(self, filenames):
        rv = [self.path] + self.args 
        for fn in filenames:
            rv.append("-f")
            rv.append(fn)
        return rv

class Carakan(Engine):
    def __init__(self, path):
        self.path = path
        self.args = ["-q"]

class CarakanNative(Engine):
    def __init__(self, path):
        self.path = path
        self.args = ["-q", "-np"]

class Squirrelfish(Engine):
    pass

class V8(Engine):
    pass

class CarakanNativeX87Shell(Engine):
    name = "carakan-nc-x87"
    exec_name = "jsshell-nc"
    def getCommand(self, filenames, *args):
        rv = [self.path, "-q", "-np", "-fpmode", "x87"]
        rv.extend(args + filenames)
        return rv

engines = {
    "carakan":Carakan,
    "spidermonkey":Spidermonkey,
    "squirrelfish":Squirrelfish,
    "v8":V8,
    "carakan-nc":CarakanNative,
    "carakan-nc-x87":CarakanNativeX87Shell
}

def runExternal(commandline, timeout=30):
    try:
        proc = killableprocess.Popen(commandline, stdout=subprocess.PIPE,
                                     stderr=subprocess.STDOUT, env=os.environ)
    except OSError:
        sys.stderr.write("Command %s failed\n Did you specify the correct path the the jsshell?\n"%" ".join(commandline))
        sys.exit(1)
    #This fails if we write too much data
    #But it is only a single test so hopefully that is not a problem
    returncode = proc.wait(timeout)
    return [proc.returncode, proc.stdout.read()]

def runOneTest(jsEngine, filename, skipdict, opts):
    filepath = os.path.join(default_test_path, filename)
    skiplist = skipdict[filepath]

    skip_path = os.path.join(os.path.join(harness_path, "skip.js"))
    skip_test_file = open(skip_path, "w")
    skip_test_file.write("gSkipTests = [%s]"%",".join(['"%s"'%item for item in 
                                                       skiplist]))
    skip_test_file.close()

    filenames = []

    #commandline += [ "-hardcore-gc" ]
    filenames += [ skip_path ]
    filenames += [ os.path.join(default_test_path, "shell.js") ]
    filenames += [ os.path.join(harness_path, "mozillatest.js") ]

    fileparpath = os.path.dirname(filepath)
    filegrandparpath = os.path.dirname(fileparpath)
    if os.path.exists(os.path.join(filegrandparpath, "shell.js")):
        filenames += [ os.path.join(filegrandparpath, "shell.js") ]
    if os.path.exists(os.path.join(fileparpath, "shell.js")):
        filenames += [ os.path.join(fileparpath, "shell.js") ]
    filenames += [ filepath ]

    commandline = engines[opts.engine](jsEngine).make_command(filenames)
    
    if not quiet: 
        print " ".join(commandline)
    return runExternal(commandline, opts.timeout) + [commandline[2:]]

def getTestsInFile(filename):
    list = []
    f = open(filename)
    lines = f.readlines()
    for x in lines:
        if '#' in x: x = x[:x.index("#")].strip()
        s = x.strip('\n')
        if len(s) > 0:
            list += [ s ]
    return list

def getTopDirs():
    return [ "ecma", "ecma_2", "ecma_3", "ecma_3_1", "js1_1", "js1_2", "js1_3", "js1_4", "js1_5", "js1_6", "js1_7", "js1_8", "js1_8_1" ]

def getSubDirs(path):
    # Get all the sub dirs to this dir.
    # Return as a list.
    subdirs = []
    dirs = os.listdir(path)
    dirs.sort()
    for x in dirs:
        xname = os.path.join(path, x)
        if os.path.isdir(xname):
            subdirs += [ xname ]
    return subdirs

def getTestFiles(path):
    # Get all js files that are not shell.js or browser.js
    # Return as a list.
    tests = []
    files = glob.glob(os.path.join(path, "*.js"))
    for x in files:
        if not x.endswith("browser.js") and not x.endswith("shell.js"):
            tests += [ x ]
    tests.sort()
    return tests

def createDictFromList(list):
    dict = {}
    for x in list:
        dict[x] = True
    return dict

def createDictFromListFirstElm(list):
    dict = {}
    for x in list:
        dict[x[0]] = True
    return dict

def writePassedList(path, passedlist):
    f = open(path, "w")
    for x in passedlist:
        f.write(x + "\n")
    f.close()

def writeFailList(path, faillist):
    f = open(path, "w")
    for x in faillist:
        f.write(x[0] + "\n")
    f.close()

def getSkipTestDict(opts):
    f = open(opts.skip_test_file)
    rv = defaultdict(list)
    for line in f:
        line = line.strip()
        if not line or line.startswith("#"):
            continue
        components = line.split("#", 1)
        rv[os.path.join(default_test_path, components[0])].append(components[1])
    return rv

def runTests(jsEngine, opts):
    skiplist = getTestsInFile(opts.skip_file)
    skipdict = createDictFromList(skiplist)
    oldirrelevantlist = getTestsInFile(opts.irrelevant_file)
    oldirrelevantdict = createDictFromList(oldirrelevantlist)
    oldpassedlist = getTestsInFile(opts.pass_file)
    oldfaillist = getTestsInFile(opts.fail_file)
    oldfaildict = createDictFromList(oldfaillist)

    ntests = len(oldirrelevantlist) + len(oldpassedlist) + len(oldfaillist)
    nrun = 0
    progress_width = 0
    progress_max = 79

    skiptests= getSkipTestDict(opts)

    # Find all top dirs, and sort them.
    topdirs = getTopDirs()
    skiplist = []
    irrelevantlist = []
    passedlist = []
    faillist = []
    crashlist = []
    timeoutlist = []

    #Having all the output code mixed in here is not good

    for x in topdirs:
        topdir = os.path.join(default_test_path, x)
        subdirs = getSubDirs(topdir)
        for y in subdirs:
            subdir =  relpath(y, default_test_path)
            testfiles = getTestFiles(y)
            for z in testfiles:
                # Find the short name.
                testname = relpath(z, default_test_path)
                if really_quiet:
                    pass
                else:
                    if not quiet:
                        print "--------------------"
                        print testname + ":"
                    else:
                        print testname + ": ",
                        sys.stdout.flush()

                if testname in skipdict:
                    skiplist += [ testname ]
                    if not really_quiet: print "skip"
                else:
                    before = clock()
                    res = runOneTest(jsEngine, z, skiptests, opts)
                    after = clock()

                    if after - before > 1:
                        timestring = " (%d ms)" % int(1000 * (after - before))
                    else:
                        timestring = ""

                    timed_out = res[0] == (127 if os_type == "windows" else -9)
                    crashed = not timed_out and res[0] < 0
                    irrelevant = testname in oldirrelevantdict
                    failed = res[0] > 0
                    if not crashed or timed_out:
                        a = res[1].split("\n")
                        for d in a:
                            if len(d) > 0:
                                failed = True
                        if os.path.splitext(z)[0][-2:] == "-n":
                            failed = not failed
                    if crashed or timed_out or failed:
                        if not irrelevant:
                            faillist += [ [ testname, res[0], res[1] ] ]
                        else:
                            irrelevantlist += [ testname ]

                        if crashed:
                            crashlist.append(testname)
                            if crashlistfile: print >>crashlistfile, " ".join(res[2])
                            resultstring = "crashed"
                        elif timed_out:
                            timeoutlist.append(testname)
                            if timeoutlistfile: print >>timeoutlistfile, " ".join(res[2])
                            resultstring = "timed out"
                        elif irrelevant:
                            resultstring = "irrelevant"
                        else:
                            if faillistfile: print >>faillistfile, " ".join(res[2])
                            resultstring = "fail"
                    else:
                        passedlist += [ testname ]
                        resultstring = "passed"

                    if not really_quiet: print "%s%s" % (resultstring, timestring)
                    else:
                        if timestring and not opts.really_quiet:
                            s = "%s: %s%s" % (testname, resultstring, timestring)
                            s += " " * (progress_max - len(s))
                            sys.stderr.write("\r%s\n%s" % (s, "=" * progress_width))
                        nrun += 1
                        expected_width = int(round(progress_max * float(nrun) / ntests))
                        sys.stderr.write("=" * (expected_width - progress_width))
                        sys.stderr.flush()
                        progress_width = expected_width


    regressions, newlypassedlist = check_changes(passedlist, faillist, irrelevantlist,
                                                 oldpassedlist, oldfaillist)
    if opts.buildbot:
        print_buildbot(passedlist, faillist, skiplist, irrelevantlist,
                       newlypassedlist, regressions, crashlist, timeoutlist)
    else:
        print_summary(passedlist, faillist, skiplist, irrelevantlist,
                      newlypassedlist, regressions, crashlist, timeoutlist)
    
    update_regression_list(newlypassedlist, oldpassedlist, passedlist, 
                           oldfaillist, faillist, regressions, irrelevantlist,
                           oldirrelevantlist, opts)

def check_changes(passedlist, faillist, irrelevantlist,
                  oldpassedlist, oldfaillist):
    passeddict = createDictFromList(passedlist)
    faildict = createDictFromListFirstElm(faillist)
    irrelevantdict = createDictFromList(irrelevantlist)
    oldpasseddict = createDictFromList(oldpassedlist)

    # Check for regressions.
    regressions = []

    for x in oldpassedlist:
        if not x in passeddict and not x in irrelevantdict:
            regressions += [ x ]

    newlypassedlist = []
    for x in passedlist:
        if x not in oldpasseddict:
            newlypassedlist += [ x ]

    return regressions, newlypassedlist

def update_regression_list(newlypassedlist, oldpassedlist, passedlist, 
                           oldfaillist, faillist, regressions, irrelevantlist,
                           oldirrelevantlist, opts):

    if (len(newlypassedlist) > 0 or len(oldpassedlist) != len(passedlist) 
        or len(oldfaillist) != len(faillist)) and len(regressions) == 0:
        writePassedList(opts.pass_file, passedlist)
        writeFailList(opts.fail_file, faillist)
        if not opts.buildbot:
            print "pass and fail files updated"

        if len(irrelevantlist) < len(oldirrelevantlist):
            oldlines = open(opts.irrelevant_file).readlines()
            lines = [line for line in oldlines if line.rstrip('\n') not in oldirrelevantlist or line.rstrip('\n') in irrelevantlist]
            open(opts.irrelevant_file, "wct").writelines(lines)
            if not opts.buildbot:
                print "irrelevant file updated"

def print_summary(passedlist, faillist, skiplist, irrelevantlist,
                  newlypassedlist, regressions, crashlist, timeoutlist):
    if really_quiet: print

    print "passed:", len(passedlist)
    print "fail: ", len(faillist)
    print "skip: ", len(skiplist)
    print "irrelevant: ", len(irrelevantlist)

    if len(newlypassedlist) > 0:
        print "We have", len(newlypassedlist), "newly passed tests"
        for x in newlypassedlist:
            print x

    if (len(regressions) > 0):
        print "We have", len(regressions), "regressions"
        for x in regressions:
            print x
    else:
        print "No regressions"

    if len(crashlist) > 0:
        print "We have", len(crashlist), "crashes"

    if len(timeoutlist) > 0:
        print "We have", len(timeoutlist), "timeouts"


def print_buildbot(passedlist, faillist, skiplist, irrelevantlist,
                  newlypassedlist, regressions, crashlist, timeoutlist):
    faillist = [item[0] for item in faillist]
    results_data = {"results":{}}
    for name, result_list in [("passed", passedlist),
                              ("failed", faillist),
                              ("crashed", crashlist),
                              ("regressions", regressions),
                              ("timed out", timeoutlist),]:
        results_data["results"][name] = list(item for item in sorted(result_list))
    
    print json.dumps(results_data, indent=0)

def makeOptions():
    usage = """usage: %prog [options] [/path/to/jsshell] path/to/tests*

mozilla test suite javascript test harness.

If the -s or --shell option is set, its argument is used as the path to the 
jsshell. Otherwise is the OP_JSSHELL environment variable is set that is used
as the path.
"""

    parser = optparse.OptionParser(usage=usage)
    parser.add_option("-v", "--verbose", action="store_true", dest="verbose",
                      default=False, help="Verbose output")
    parser.add_option("-q", "--quiet", action="store_true", dest="quiet",
                      default=False, help="Quite mode")
    parser.add_option("-Q", "--really-quiet", action="store_true", dest="really_quiet",
                      default=False, help="Quite mode")
    parser.add_option("--timeout", action="store", dest="timeout", type=int,
                      default=60, help="Test timeout")
    parser.add_option("--buildbot", action="store_true", dest="buildbot",
                      default=False, help="Output json for buildbot")
    parser.add_option("-s", "--shell", action="store", dest="shell",
                      default="", help="Path to jsshell")
    parser.add_option("-c", "--crash-list", action="store", dest="crashlist",
                      default="", help="Path to crash list file to output")
    parser.add_option("-t", "--timeout-list", action="store", dest="timeoutlist",
                      default="", help="Path to timeout list file to output")
    parser.add_option("-f", "--fail-list", action="store", dest="faillist",
                      default="", help="Path to fail list file to output")
    parser.add_option("--pass-file", action="store", dest="pass_file", 
                      default=default_pass_file)
    parser.add_option("--fail-file", action="store", dest="fail_file", 
                      default=default_fail_file)
    parser.add_option("--skip-file", action="store", dest="skip_file", 
                      default=default_skip_file)
    parser.add_option("--irrelevant-file", action="store", 
                      dest="irrelevant_file", 
                      default=default_irrelevant_file)
    parser.add_option("-e", "--engine", action="store", default="carakan",
                      dest="engine")
    parser.add_option("--skip-test-file", action="store", 
                      default=default_skip_test_file,
                      dest="skip_test_file")
    return parser


def normalise_options(opts):
    current_dir = os.path.abspath(".")
    for opt_name in ["pass_file", "fail_file", "skip_file", "irrelevant_file",
                     "skip_test_file"]:
        value = getattr(opts, opt_name)
        if not os.path.isabs(value):
            setattr(opts, opt_name, os.path.join(current_dir, value))
    if opts.buildbot:
        opts.really_quiet = True

def main():
    global quiet, really_quiet, verbose, crashlistfile, timeoutlistfile, faillistfile
    optParser = makeOptions()
    opts, args = optParser.parse_args()
    normalise_options(opts)
    if opts.shell:
        shell_path = opts.shell
    elif "OP_JS_SHELL" in os.environ:
        shell_path = os.environ["OP_JS_SHELL"]
    else:
        sys.stderr.write("Shell path not specified")
        sys.exit(1)
    verboes = opts.quiet
    quiet = opts.quiet or opts.really_quiet
    really_quiet = opts.really_quiet
    if args:
        skiptests= getSkipTestDict(opts)
        test_path = os.path.join(os.path.abspath("."), args[0])
        res = runOneTest(shell_path, args[0], skiptests, opts)
        crashed = res[0] < 0
        failed = res[0] > 0
        if not crashed:
            a = res[1].split("\n")
            for d in a:
                if len(d) > 0:
                    failed = True
        if os.path.splitext(args[0])[0][-2:] == "-n":
            failed = not failed
        if crashed:
            print "crashed"
        elif failed:
            print "failed"
            print res[1]
        else:
            print "pass"
    else:
        if opts.crashlist: crashlistfile = open(opts.crashlist, "wct")
        if opts.timeoutlist: timeoutlistfile = open(opts.timeoutlist, "wct")
        if opts.faillist: faillistfile = open(opts.faillist, "wct")
        runTests(shell_path, opts)

if __name__ == "__main__":
    main()
