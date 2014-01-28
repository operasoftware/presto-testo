#!/usr/bin/env python

import os
import sys
import subprocess
import relpath
import optparse
import jsshells
from collections import defaultdict

base_path = os.path.split(os.path.abspath(__file__))[0]

pass_file = os.path.join(base_path, "pass")
fail_file = os.path.join(base_path, "fail")
skip_file = os.path.join(base_path, "skip")

default_engine = "carakan"

def check_expected_files():
    for fn in (pass_file, fail_file, skip_file):
        if not os.path.exists(fn):
            f = open(fn, "w")
            f.close()

def read_test_file(file_obj):
    out_set = set()
    for line in file_obj:
        line = line.strip()
        if line:
            if line.startswith("#"):
                continue
            out_set.add(line)
    return out_set

def write_test_file(out_file, test_set):
    out_data = list(test_set)
    out_data.sort()
    for item in out_data:
        out_file.write(item + "\n")

def get_all_tests():
    tests = set()
    for dirpath, dirnames, filenames in os.walk(base_path):
        if ".svn" in dirpath or "tools" in dirpath:
            continue

        for fn in filenames:
            if os.path.splitext(fn)[1] != ".js" or fn[0] in ("#", "."):
                continue

            if fn not in ("mjsunit.js", "harness.js"):
                full_path = os.path.join(dirpath, fn)
                tests.add(relpath.relpath(full_path, base_path))

    return tests

def run_tests(shell, tests, skip):
    results = {}
    for test in tests:
        if test in skip:
            continue
        else:
            result = run_test(shell, test)
            results[test] = result
    return results

def run_test(shell, test):

    result = {"rv":None,
              "output":None}

    args = (os.path.join(base_path, "harness.js"), 
            os.path.join(base_path, "mjsunit.js"), 
            os.path.join(base_path, test))

    rv, output = shell.runCommand(args)

    result["rv"] = rv
    result["output"] = output
    return result

def categorise_results(results):
    passes = set()
    fails = set()
    crashes = set()
    for test, result in results.iteritems():
        if result["rv"] == 0:
            passes.add(test)
        elif result["rv"] not in (0,1):
            crashes.add(test)
        else:
            fails.add(test)

    return passes, fails, crashes

def print_test_result(test, result):
    if result["rv"] == 0:
        print test + ": PASS"
    else:
        print test + ": FAIL"
        print "rv: %(rv)s\n%(output)s\n"%result 

def print_results(pass_set, fail_set, crash_set, regressions, new_passes,
                  results, opts):

    if regressions:
        print "There were %i regressions"%len(regressions)
        for test in regressions:
            print test
    else:
        if crash_set:
            print "%i tests crashed"%len(crash_set)
            for test in crash_set:
                print_test_result(test, results[test])


        print "%i tests passed"%len(pass_set)
        print "%i tests failed (but didn't crash)"%len(fail_set)

        if opts.print_fail:
            for test in fail_set:
                print_test_result(test, results[test])

        print "%i new passes"%len(new_passes)

def write_expected(pass_set, non_passing_set):
    write_test_file(open(pass_file, "w"), pass_set)
    write_test_file(open(fail_file, "w"), non_passing_set)

def get_options():
    parser = optparse.OptionParser()
    parser.add_option("--force-update", action="store_true", 
                      default=False, dest="force", 
                      help="Force update to the pass and fail files regardless of whatever else is going on")
    parser.add_option("-s", action="store", dest="shell", 
                      help="Path to shell")
    parser.add_option("-e", action="store", dest="engine", 
                      help="Path to shell")
    parser.add_option("--fail", action="store_true", 
                      default=False, dest="print_fail", 
                      help="Print details of all failing tests")
    return parser

def run_suite(shell, opts, args):
    expected_pass = read_test_file(open(pass_file))
    expected_fail = read_test_file(open(fail_file))
    skip_tests = read_test_file(open(skip_file))
    
    all_tests = get_all_tests()
    
    results = run_tests(shell, all_tests, skip_tests)
    
    pass_set, fail_set, crash_set = categorise_results(results)

    non_passing_set = fail_set | crash_set

    regressions = non_passing_set - expected_fail
    
    new_passes = pass_set - expected_pass

    print_results(pass_set, fail_set, crash_set, regressions, new_passes,
                  results, opts)
    
    if len(regressions) == 0 or opts.force:
        write_expected(pass_set, non_passing_set)

def run_individual_tests(shell, opts, args):
    results = {}
    for test in args:
        result = run_test(shell, test)
        results[test] = result

    for result in results:
        print_test_result(test, results[test])

def main():

    opts, args = get_options().parse_args()
    check_expected_files()

    if opts.engine:
        engine_name = opts.engine
    else:
        engine_name = default_engine

    if opts.shell:
        shell_path = opts.shell
    else:
        shell_path = None

    shell = jsshells.shells[engine_name](shell_path)

    if len(args) == 0:
        run_suite(shell, opts, args)

    else:
        run_individual_tests(shell, opts, args)

if __name__ == "__main__":
    main()
