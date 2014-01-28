#!/usr/bin/env python

# You need jsshell and a directory with tests to run this script
import os
import glob
import sys
import optparse
import types
import time
from collections import defaultdict
import random
import subprocess
import re
import platform
try:
    import json
except ImportError:
    import simplejson as json

import jsshells
import regression
from jobrunner import JobRunner
import output

from relpath import relpath
    
#Hack to make paths work under Windows wwhen running cygwin python
if platform.system().startswith("CYGWIN"):
    import ntpath
    os.path = ntpath
    #This is a total hack
    file_parts = os.path.abspath(__file__).split("\\")
    file_name = file_parts[2] + ":\\" + os.path.sep.join(file_parts[3:])
    __file__ = file_name

base_path = os.path.abspath(os.path.join(os.path.split(os.path.abspath(__file__))[0], "../"))
test_path = os.path.abspath(os.path.join(base_path, "tests"))
harness_path = os.path.abspath(os.path.join(base_path, "harness"))

default_engine = "carakan"
update_engines = frozenset(["carakan", "carakan-nc"])

host_object_engines = ("carakan", "carakan-gc", "carakan-nc", "carakan-nc-x87")

default_results_file = os.path.join(test_path, "results")

default_recursive_depth = 1500

class TestFile(dict):
    def __init__(self, path):
        if not os.path.exists(path):
            print "Test file %s not found"%path
            sys.exit(1)
        self.path = path
        self.compile_failed = None
        self.get_tests_output = None
        self.tests_to_run = []
        self.crashed = False #Did the current file crash (fast mode only)
        self.relative_path = relpath(path, test_path)
        self.run_tests_individually = False
        self.read_options()

    def read_options(self):
        f = open(self.path)

        run_tests_re = re.compile("^//opjsunit:\s*run_tests_individually\s*$")

        for line in f:
            if run_tests_re.match(line):
                self.run_tests_individually = True
                break

    def getTests(self, engine):
        proc = engine.runCommand((os.path.join(harness_path, "utils.js"), 
                                  self.path, 
                                  os.path.join(harness_path, "gettests.js")),
                                 [],
                                 async = True,
                                 use_temp_file=True)
        
        self.proc = proc
        return proc

    def updateTestLists(self, rv):
        self.proc.stdout.seek(0)

        output = self.proc.stdout.read()
        self.compile_failed = not (rv == 0)
        self.get_tests_output = output
        if self.compile_failed:
            return
        i = 0
        output.replace("\r\n", "\n")
        output.replace("\r", "\n")
        output = output.strip()

        if output.split("\n")[-1] != "##opjsunit: function end##":
            print "end:" + output.split("\n")[-1]
            self.compile_failed = True
            return

        testcases = [item.strip() for item in 
                     output.split("##opjsunit: function end##") if item]

        for i, testcase in enumerate(testcases):
            lines = testcase.split("\n")
            i = 0;
            if not lines[i].startswith("test"):
                print "lines[0]:", lines
                self.compile_failed = True
                return
            else:
                name = lines[i].strip()
            #skip blank lines
            while True:
                i += 1
                if lines[i].strip():
                    break
            
            if not lines[i].startswith("comment: "):
                print "lines[%i]"%i, lines[i]
                self.compile_failed = True
                return
            else:
                comment = lines[i][len("comment: "):]
            #skip blank lines
            while True:
                i += 1
                if lines[i].strip():
                    break

            function_code = "\n".join(lines[i:])
            test = Test(name, self, opts.recursive, comment=comment,
                        function_code=function_code, index=i+1)
            self[unicode(test)] = test


    def setTests(self, tests_to_run=None):
        """Set the list of tests to run"""
        if tests_to_run is None or None in tests_to_run:
            self.tests_to_run = self.keys()
        else:
            for name in tests_to_run:
                assert name in self.keys(), "Test %s not found in file %s %s"%(name, self.path, self.keys())
            self.tests_to_run = tests_to_run

        return [self[name] for name in self.tests_to_run]

    def runFile(self, engine):
        """Run a whole file worth of tests without restarting the engine"""
        s = []
        for test_id in self.tests_to_run:
            test = self[test_id]
            s.append(test.harnessCode(opts.repetitions))

        s = "\n".join(s)
        while True:
            self.testrunner_fn = os.path.join(harness_path, 
                                              "testrunner_%i.js"%
                                              random.randint(0, 2**32-1))
            if not(os.path.exists(self.testrunner_fn)):
                #paranoia
                break

        f = open(self.testrunner_fn, 'w')
        f.write(s)
        f.close()
        proc = engine.runCommand((os.path.join(harness_path, "utils.js"), 
                                  os.path.join(harness_path, "opjsunit.js"), 
                                  self.path, self.testrunner_fn),
                                 async=True, valgrind=opts.valgrind)
        self.proc = proc
        return proc
            

    def setTestsStatus(self, rv, signal, proc, killed):
        """Callback to set the status of all tests when run in fast mode"""
        assert proc is self.proc
        output = self.parseTestOutput(self.proc.stdout.read())

        printed = False
        for test_id in self.tests_to_run:
            test = self[test_id]
            test.passed = test_id in output and output[test_id]["passed"]
            test.output = test_id in output and output[test_id]["messages"] or ""
            if not test_id in output:
                self.crashed = True
            test.crashed = not killed and ((test_id not in output and rv != 0)
                                           or
                                           (test_id in output and not 
                                            output[test_id]["full"]))
            test.killed = test_id not in output and killed
            if test.killed and not printed:
                print test
                printed = True

        #Get rid of the reference to the process so that file handles can 
        #be closed
        self.proc = None

    def parseTestOutput(self, output):
        start_re = re.compile("##opjsunit: (.+)##")
        rv = {}
        item_template = {"passed":False,
                         "full":False,
                         "messages":""}
        current_output = ""
        for line in output.split("\n"):
            if line.endswith("\r"):
                line = line[:-1]
            if not line:
                continue
            start_match = start_re.match(line)
            if start_match is not None:
                current_item = start_match.groups()[0]
                rv[current_item] = item_template.copy()
            elif line == "--opjsunit:passed--":
                assert current_item is not None
                rv[current_item]["full"] = True
                rv[current_item]["passed"] = True
                current_item = None
            elif line == "--opjsunit:failed--":
                assert current_item is not None
                rv[current_item]["full"] = True
            else:
                if current_item is None:
                    #This probably indicates a crash that truncated  
                    #output
                    break
                else:
                    rv[current_item]["messages"] += line + "\n"
        return rv

    def testsRun(self):
        rv = TestSet([test.id for test in self.itervalues()
                       if test.passed is not None])
        return rv

    def testsFailed(self):
        rv = TestSet([test.id for test in self.itervalues()
                       if test.passed == False])
        return rv

    def testsPassed(self):
        rv = TestSet([test.id for test in self.itervalues()
                       if test.passed == True])
        return rv

    def testsValgrind(self):
        rv = TestSet([test.id for test in self.itervalues()
                      if test.valgrind == True])
        return rv

    def testsCrashed(self):
        rv = TestSet([test.id for test in self.itervalues() 
                       if test.crashed == True])
        return rv

    def testsTimedOut(self):
        rv = TestSet([test.id for test in self.itervalues() 
                       if test.killed == True])
        return rv

class Test(object):
    def __init__(self, name, test_file, recursive, comment=None,
                 function_code=None, index=None):
        test_id_str = test_file.path + "#" + name
        self.id = TestId(test_file.path, name, index=index)
        self.comment = comment
        self.file = test_file
        self.passed = None
        self.output = None
        self.valgrind = False
        self.crashed = False
        self.killed = False
        self.proc = None
        self.testrunner_fn = None
        self.test_code_fn = None
        self.recursive = recursive
        self.function_code = function_code
        timeout_match = re.search(r" timeout multipler: ([0-9]+(?:\.[0-9]+))", self.comment)
        if timeout_match:
            self.timeout_multipler = float(timeout_match.group(1))
        else:
            self.timeout_multipler = 1.0
        if recursive:
            self.harnessCode = self.harnessCodeRecursive
        else:
            self.harnessCode = self.harnessCodeIterative

    def __unicode__(self):
        return unicode(self.id)

    #the harnessCode method is set at runtime depending on the value
    #of opts.recursive

    def harnessCodeIterative(self, repetitions):
        rv = """
try {
  writeln('##opjsunit: %s##'); 
  for (var opjsunit_count=0; opjsunit_count<%i; opjsunit_count++) {
    %s();
  }
  writeln('--opjsunit:passed--')
} 
catch (e) { 
  writeln(%se); 
  writeln('--opjsunit:failed--')
}
"""%(unicode(self), repetitions, self.id.function, 
     repetitions > 1 and 
     "'At repetition ' + opjsunit_count + ': ' + " or "")

        return rv

    def harnessCodeRecursive(self, repetitions):
        rv = """
try {
  writeln('##opjsunit: %s##'); 
  var opjsunit_count = 0;
  function f() {
    try {
      %s();
      opjsunit_count++;
      if (opjsunit_count < %i) {
        f();
      }
    }
    catch(e) {
      if (e instanceof RangeError) {
        writeln('Too deep recursion with --recursive')
      } else {
        throw e;
      }
    }
  }
  f();
  writeln('--opjsunit:passed--')
}
catch (e) { 
  writeln(%se); 
  writeln('--opjsunit:failed--')
}
"""%(unicode(self), self.id.function, repetitions, 
     repetitions > 1 and 
     "'At repetition ' + opjsunit_count + ': ' + " or "")

        return rv

    def get_temp_filename(self, format="%i.js"):
        while True:
            rv = os.path.join(harness_path, 
                              format%random.randint(0, 2**32-1))
            if not(os.path.exists(rv)):
                #paranoia
                break
        return rv

    def run(self, engine, args):
        #is_carakan = engine.name.startswith("carakan")
        command_line = [os.path.join(harness_path, "utils.js"), 
                        os.path.join(harness_path, "opjsunit.js")]

        if (self.file.run_tests_individually and 
            not opts.no_run_individually):
            s = "\n".join((self.function_code,
                           self.harnessCode(opts.repetitions)))
        else:
            s = self.harnessCode(opts.repetitions)
            command_line.append(self.id.filename)


        self.testrunner_fn = self.get_temp_filename("testrunner_%i.js")
        f = open(self.testrunner_fn, 'w')
        f.write(s)
        f.close()
        command_line.append(self.testrunner_fn)

        command_line = tuple(command_line)

        proc = engine.runCommand(command_line, args, async=True,
                                 use_temp_file = False, valgrind=opts.valgrind)
        self.proc = proc
        return proc

    def getReproductionCommand(self):
        #Command line for reproducing tests in gdb or
        #from the shell
        command_line = [os.path.join(harness_path, "utils.js"), 
                        os.path.join(harness_path, "opjsunit.js")]

        s = self.harnessCode(opts.repetitions)
        
        command_line.append(self.id.filename)
        command_line.extend(["-e", s])
        
        return tuple(command_line)

    def setStatus(self, rv, signal, proc, killed):
        assert proc is self.proc
        output = self.parseResult(self.proc.stdout.read())
        
        success = (rv == 0 and signal == 0 and killed == False)

        self.passed = success and output["passed"]
        self.output = output["messages"]
        self.valgrind = not success and not killed and rv == 0 and signal == 102
        self.killed = killed
        self.crashed = not output["full"] and not success and not killed and not self.valgrind
        #Get rid of the reference to the process so that file handles can 
        #be closed
        self.proc = None

    def parseResult(self, output):
        start_re = re.compile("##opjsunit: (.+)##")
        rv = {"passed":False,
              "full":False,
              "messages":""}

        for line in output.split("\n"):
            if line.endswith("\r"):
                line = line[:-1]
            if not line:
                continue
            start_match = start_re.match(line)
            if start_match is not None:
                #We have found the start of the output
                pass
            elif line == "--opjsunit:failed--":
                rv["full"] = True
            elif line == "--opjsunit:passed--":
                rv["passed"] = True
                rv["full"] = True
            else:
                rv["messages"] += line + "\n"
        return rv

class TestId(object):
    """An object representing a testcase. Each testcase has a filename
    and a function name. These are immutable properties that determine
    comparisons between different testcase objects. They may also have
    a comment and in index (used to e.g. store the relative position
    of a particular testcase in its file). 
    """


    def __init__(self, filename, function=None, index = None):
        self._filename = filename
        self._function = function
        self._relative_path = relpath(filename, test_path)
        self.name = unicode(self)
        self.index = index

    filename = property(lambda self:self._filename)
    function = property(lambda self:self._function)

    def __eq__(self, other):
        return (self.name == other.name)

    def __hash__(self):
        return hash(self.name)

    def __unicode__(self):
        name = unicode(self._relative_path) if self.function is None else u"%s#%s"%(self._relative_path, self.function)
        return name

    @classmethod
    def fromString(cls, name, index=None):
        components = name.split("#")
        if not os.path.isabs(components[0]):
            filename = os.path.join(test_path, components[0])
        else:
            filename = components[0]

        if len(components) > 1:
            function = components[1]
        else:
            function = None

        return cls(filename, function, index)


class TestSet(set):
    def __init__(self, values=None):
        if values is not None:
            self.fromIter(values)
        
    def iterByName(self):
        """Iterator that always returns entries sorted by filename and in
        alphabetical order"""
        test_list = list(set.__iter__(self))
        def cmp(x, y):
            x_name = x.name
            y_name = y.name
            if x_name == y_name:
                return 0
            else:
                return x_name > y_name and 1 or -1

        test_list.sort(cmp)
        for item  in test_list:
            yield item

    def iterByIndex(self):
        """Returns an iterator over all the TestIds in the set, sorted by 
        index. This is mainly useful for printing things in file order
        rather than in alphabetical order"""
        test_list = list(set.__iter__(self))
        def cmp(x, y):
            if x.filename == y.filename:
                if x.index is None:
                    return -1
                elif y.index is None:
                    return 1
                return x.index - y.index
            else:
                return x.filename > y.filename and 1 or -1

        test_list.sort(cmp)
        for item in test_list:
            yield item

    def fromIter(self, iterable):
        for i, item in enumerate(iterable):
            if type(item) in types.StringTypes:
                test_id = TestId.fromString(item, i)
            else:
                #Strictly bad form
                assert isinstance(item, TestId)
                test_id = item
            set.add(self, test_id)
        return self

    @classmethod
    def fromFile(cls, file_name, limit_to=None):
        tests = []
        try:
            f = open(file_name)
        except IOError:
            raise
        for i, line in enumerate(f):
            line = line.strip()
            if not line:
                continue
            test_id = TestId.fromString(line, i)
            if limit_to is None or None in limit_to or unicode(test_id) in limit_to:
                tests.append(test_id)
        return cls(tests)

    def toFile(self, file_obj):
        for item in self.iterByName():
            file_obj.write(unicode(item).encode("utf-8") + "\n")

    def filterByPaths(self, file_paths):
        return TestSet([item for item in self if item.filename in file_paths])
    
    def uniqueFiles(self):
        rv = set([item.filename for item in self])
        return rv

class TestRunner(object):
    def __init__(self, engine, test_paths, processes):
        self.engine = engine

        self.all_files = []

        #Test files that have successfully compiled
        self.compiled_files = []
        #Test files that have not successfully compiled
        self.uncompiled_files = []
        
        self.setTests(test_paths)

        self.num_processes = processes

    def setTests(self, test_paths):
        """Set the tests to be run.

        test_paths - an iterable here each item is either the name of a 
                     directory containing tests to be run, the name of a 
                     file containing tests to be run or the name of a 
                     specific test within a file"""
        tests = {}
        test_cases = defaultdict(set)
        test_files = []

        for path in test_paths:
            #Convert everything to absolute paths here
            path = os.path.abspath(path)
            if os.path.isdir(path):
                files = glob.glob(os.path.join(path, "*.js"))
                if self.engine.name not in host_object_engines:
                    files = [fn for fn in files if
                             not fn.endswith("_hostobject.js")]
                test_files.extend(files)
            else:
                test_files.append(path)

        for path in test_files:
            components = path.split("#")
            if components[0] not in tests:
                tests[components[0]] = TestFile(components[0])
                
            if len(components) > 1:
                test_cases[components[0]].add(os.path.split(path)[1])
            else:
                test_cases[components[0]].add(None)

        self.test_cases = test_cases
        self.tests = tests

    def readTestFunctions(self):
        """For each TestFile we are running tests in, load the list of
        test functions in that file"""
        #XXX TODO - error handling if a test is specified that does not exist

        sys.stderr.write("Finding tests...\n")

        def get_job(test_file):
            def get_tests():
                def callback(rv, signal, proc, killed):
                    test_file.updateTestLists(rv)
                    if test_file.compile_failed:
                        self.uncompiled_files.append(test_file)
                    else:
                        self.compiled_files.append(test_file)
                return test_file.getTests(self.engine), callback, None
            return get_tests

        test_finder = JobRunner(self.num_processes, timeout=30)
        
        for path, test_file in self.tests.iteritems():
            self.all_files.append(relpath(path, test_path))
            test_finder.queue([get_job(test_file)])

        test_finder.run()

    def run(self):
        self.readTestFunctions()

        if opts.no_run:
            return Results(self.engine.name,
                           set([]),
                           set([]),
                           set([]),
                           set([]),
                           loaded_files = self.all_files,
                           compile_failed = [f.relative_path for f in 
                                             self.uncompiled_files])
        else:
            return self.runTests()

    def runTests(self):
        all_tests = TestSet()
        passed = TestSet()
        failed = TestSet()
        valgrind = TestSet()
        crashed = TestSet()
        timed_out = TestSet() 

        def get_job(test):
            def run_job():
                def callback(rv, signal, proc, killed):
                    test.setStatus(rv, signal, proc, killed)
                    #This is cleanup code that should perhaps be elsewhere
                    if test.testrunner_fn is not None:
                        os.unlink(test.testrunner_fn)
                    if test.test_code_fn is not None:
                        os.unlink(test.test_code_fn)
                    test.testrunner_fn = None
                return test.run(self.engine, opts.engine_args), callback, test.timeout_multipler
            return run_job

        def get_job_fast(test_file):
            def run_job():
                def callback(rv, signal, proc, killed):
                    test_file.setTestsStatus(rv, signal, proc, killed)
                    #This is cleanup code that should perhaps be elsewhere
                    if test_file.testrunner_fn is not None:
                        os.unlink(test_file.testrunner_fn)
                    test_file.testrunner_fn = None
                return test_file.runFile(self.engine, opts.engine_args), callback, None
            return run_job

        sys.stderr.write("Running tests...\n")

        if opts.fast:
            timeout = 10
        elif opts.valgrind:
            timeout = 30*50
        else:
            timeout = 30

        test_runner = JobRunner(self.num_processes, timeout=timeout)

        if opts.fast:
            for test_file in self.compiled_files:
                test_names = self.test_cases[test_file.path]
                test_file.setTests(test_names)
                test_runner.queue([get_job_fast(test_file)])
        else:
            for test_file in self.compiled_files:
                test_names = self.test_cases[test_file.path]
                test_runner.queue([get_job(item) for item in 
                                   test_file.setTests(test_names)])
            
        test_runner.run()

        crashed_files = []

        for test_file in self.compiled_files:
            if opts.fast and test_file.crashed:
                crashed_files.append(test_file)
                continue
            all_tests |= test_file.testsRun()
            passed |= test_file.testsPassed()
            failed |= test_file.testsFailed()
            valgrind |= test_file.testsValgrind()
            crashed |= test_file.testsCrashed()
            timed_out |= test_file.testsTimedOut()

        results = regression.Results(getEngineName(self.engine),
                                     passed, failed, valgrind, crashed, timed_out,
                                     loaded_files=self.all_files,
                                     compile_failed=[f.relative_path for f in 
                                                     self.uncompiled_files],
                                     crashed_files=[f.relative_path for f in crashed_files])
        tests_by_id = {}
        for test_file in self.tests.itervalues():
            for test in test_file.itervalues():
                tests_by_id[test.id] = test


        return tests_by_id, results

def makeOptions():
    usage = """usage: %prog [options] path/to/tests*

opjsunit javascript test harness.

If the -s or --shell option is set, its argument is used as the path to the 
jsshell. Otherwise is the OP_JSSHELL environment variable is set that is used
as the path. All other positional arguments are paths either to 
individual test files or to directories containing test files. Recursion into 
subdirectories is not yet supported.
"""

    parser = optparse.OptionParser(usage=usage)
    #parser.add_option("-v", "--verbose", action="store_true", dest="verbose",
    #                  default=False, help="Verbose output")

    parser.add_option("-s", "--shell", action="store", dest="shell",
                      default="", help="Path to the javascript shell")

    #Maybe change this to an enum later or something
    parser.add_option("-e", "--engine", action="store", dest="engine",
                      type="choice", choices=("carakan", "futhark", 
                                              "spidermonkey", "V8",
                                              "squirrelfish", "es4", 
                                              "carakan-nc", "carakan-gc",
                                              "carakan-nc-x87"),
                      default=default_engine, 
                      help="Select the javascript interpreter to use")

    parser.add_option("--valgrind", default=False, action="store_true",
                      dest="valgrind", help="Run tests in valgrind")

    parser.add_option("--buildbot", default=False,
                      action="store_true", dest="buildbot", help="Run in buildbot mode")
    parser.add_option("--pass", action="store_true", default=False, 
                      dest="write_pass", help="Output tests that pass")

    parser.add_option("--fail", action="store_true", default=False, 
                      dest="write_fail", help="Output tests that fail")

    parser.add_option("--valgrind-errors", action="store_true", default=False,
                      dest="write_valgrind", help="Output tests that give valgrind errors")

    parser.add_option("--new", action="store_true", default=False,
                      dest="write_new", 
                      help="Output only new tests since last checkout (implies --pass and --fail if neither are specified)")

    parser.add_option("--regressions", action="store_true", default=False,
                      dest="write_regressions", 
                      help="Output a list of regressions")

    parser.add_option("--fixes", action="store_true", default=False,
                      dest="write_fixes", 
                      help="Output a list of fixes")

    parser.add_option("--store-regressions", action="store_true", default=False,
                      dest="store_regressions", 
                      help="Save the list of regressions to a file so they can be easilly rerun")

    parser.add_option("--missing", action="store_true", default=False,
                      dest="write_missing", 
                      help="Output missing tests (those in the pass/fail files but not run)")

    parser.add_option("--count", action="store_true", default=False,
                      dest="write_counts", 
                      help="Output a count of the number of tests that pass and the number that fail")

    parser.add_option("--crash", action="store_true", default=False,
                      dest="write_crash", 
                      help="Output tests that crashed")

    parser.add_option("--timeout", action="store_true", default=False,
                      dest="write_timeout", 
                      help="Output tests that timed out")

    parser.add_option("--force-update", action="store_true", default=False,
                      dest="force_update", 
                      help="Force an update of the pass and fail files based on the currently run tests with the currently run engine. All safety checks are off!")

    parser.add_option("--results-file", action="store", dest="results_file", 
                      default=default_results_file, help="Used to specify a results file for regression analysis")

    parser.add_option("--load", action="store", type="string", default="",
                      dest="load",
                       help="Load file containing a list of test cases")

    parser.add_option("-p", "--processes", action="store", type="int",
                      default=4, dest="processes", 
                      help="Number of distinct processes to use")

    parser.add_option("--profile", action="store_true", default=False, 
                      dest="profile", help=optparse.SUPPRESS_HELP)

    parser.add_option("--optional", action="store_true", default=False,
                      dest="optional", help="load optional test files")

    parser.add_option("--update-with-non-default-shell", 
                      action="store_true", default=False,
                      dest="update_with_non_default_shell", 
                      help="Update the test files even if a non-default shell is being used")
    parser.add_option("-v", "--verbose", action="store_true", default=False,
                      help="Verbose output")

    parser.add_option("--fast", action="store_true", default=False,
                      help="Run the tests without restarting the interpreter. Faster but less accurate. Not for full regression runs.")

    parser.add_option("--repetitions", "-r", action="store", default=None,
                      help="Number of times to call each test function")

    parser.add_option("--recursive", action="store_true", 
                      default=False, help="Run test function inside a recursive function")

    parser.add_option("--fail-list", action="store",
                      dest="fail_list_file", default=None, 
                      help="File name to write command lines of failing tests to")

    parser.add_option("--regression-list", action="store",
                      dest="regression_list_file", default=None, 
                      help="File name to write command lines of regressed tests to")

    parser.add_option("--crash-list", action="store",
                      dest="crash_list_file", default=None, 
                      help="File name to write command lines of crashing tests to")

    parser.add_option("--no-run-individually", action="store_true",
                      dest="no_run_individually", default=False, 
                      help="Never run tests individually; always load the whole file")

    parser.add_option("--no-run", action="store_true",
                      dest="no_run", default=False, 
                      help="Just look for tests don't try to run them (useful for testing the compiler)")

    parser.add_option("--generate-baseline", action="store",
                      dest="generate_baseline", default=None, 
                      help="Generate baseline results for current profile into specified file")

    parser.add_option("--engine-arg", action="append",
                      dest="engine_args", default=[],
                      help="Extra per-test arguments to supply the engine's jsshell")

    return parser

def setOptionDependencies():

    #Things that happen after here cannot use the distinction between 
    #default and developer
    if not (opts.write_pass or opts.write_fail or opts.write_valgrind
            or opts.write_new or opts.write_regressions or opts.write_fixes
            or opts.write_crash or opts.write_missing or opts.write_counts):
        opts.write_valgrind = True
        opts.write_crash = True
        opts.write_timeout = True
        opts.write_regressions = True
        opts.write_fixes = True
        opts.write_counts = True

def loadExpected(test_data_filename, profile_name):
    """Load the expected results of the tests i.e. the results from previous
    runs of the test suite."""
    test_data = regression.TestData.from_file(test_data_filename)
    expected = regression.Expected(profile_name, test_data, test_id_class=TestId)
    #Now convert the sets to TestSet objects
    for result_type, test_names in expected.iteritems():
            test_list = TestSet(test_names)
            expected[result_type] = test_list
    return expected

def loadTestList(filename):
    f = open(filename)
    tests = [os.path.join(test_path, item.split()[0].strip()) 
             for item in f.read().split("\n") if item.strip()]
    return tests


def run(engine, test_paths, opts):
    test_runner = TestRunner(engine, test_paths, opts.processes)
    tests_by_id, results = test_runner.run()
    expected = loadExpected(opts.results_file, getEngineName(engine))
    comparison = regression.ResultsComparison(expected, results)

    return tests_by_id, comparison

def printOutput(tests_by_id, comparison, engine, opts):
    if opts.buildbot:
        outputFunction = output.outputBuildbot
    elif opts.no_run:
        outputFunction = output.outputNoRun
    else:
        outputFunction = output.outputDefault
    print outputFunction(tests_by_id, comparison, engine, opts)

def updateExpected(tests_by_id, comparison, results_file):
    new_test_data = comparison.updated_test_data()
    #Now need to update the metadata
    for test_id, test in tests_by_id.iteritems():
        if test.comment:
            new_test_data[unicode(test_id)]["comment"] = test.comment
    json.dump(new_test_data, open(results_file, "w"), indent=2)

def getEngineName(engine):
    if opts.valgrind:
        return "%s-valgrind" % engine.name
    else:
        return engine.name

def main():
    test_paths = args

    if opts.load:
        #Load a list of tests to run from a file
        test_paths.extend(loadTestList(opts.load))

    if not test_paths:
        #We are running the full testsuite
        test_paths = [test_path]
        opts.allow_regression_update = True
    else:
        #we are running some specific tests
        opts.allow_regression_update = False

    if opts.valgrind:
        opts.fast = False

    setOptionDependencies()

    engine_class = jsshells.shells[opts.engine.lower()]

    if (opts.engine.lower() not in update_engines and 
        not opts.update_with_non_default_shell or
        opts.fast):
        opts.allow_regression_update = False

    #setup the path to the jsshell
    if opts.shell:
        shell_path = opts.shell
    elif "OP_JS_SHELL" in os.environ:
        shell_path = os.environ["OP_JS_SHELL"]
    else:
        shell_path = os.path.join(os.path.curdir, engine_class.exec_name)

    engine = engine_class(shell_path)

    #Set the number of times to repeat each test
    if opts.repetitions is not None:
        opts.repetitions = int(opts.repetitions)
    else:
        if opts.recursive:
            opts.repetitions = default_recursive_depth
        else:
            opts.repetitions = engine.default_repetitions

    tests_by_id, comparison = run(engine, test_paths, opts)

    printOutput(tests_by_id, comparison, engine, opts)

    if opts.allow_regression_update:
        updateExpected(tests_by_id, comparison, opts.results_file)

    if opts.fail_list_file:
        output.writeCommandLines(tests_by_id, comparison.results["fail"], 
                                 engine, opts.fail_list_file)

    if opts.regression_list_file:
        output.writeCommandLines(tests_by_id, comparison.sets["regressions"], 
                                 engine, opts.regression_list_file)

    if opts.crash_list_file:
        output.writeCommandLines(tests_by_id, comparison.results["crash"], 
                                 engine, opts.crash_list_file)

    if opts.generate_baseline:
        comparison.generate_baseline(opts.generate_baseline)

if __name__ == "__main__":
    t0 = time.time()
    optParser = makeOptions()
    opts, args = optParser.parse_args()
    if not opts.profile:
        main()
    else:
        import cProfile
        import pstats
        cProfile.run("main()", "profile.dat")
        p = pstats.Stats("profile.dat")
        p.strip_dirs().sort_stats('time').print_stats()
    if not opts.buildbot:
        print "Run took " + str(time.time() - t0)
