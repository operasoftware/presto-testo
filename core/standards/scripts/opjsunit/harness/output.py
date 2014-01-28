import re
import os
import sys

try:
    import json
except ImportError:
    import simplejson

def getUniqueFile(prefix, suffix):
    fn = prefix+suffix
    i = 0
    while os.path.exists(fn):
        i += 1
        fn = prefix + str(i) + suffix
    return open(fn, "w")

def formatCommandLine(command_line):
    """Format a command line for printing in output"""
    return " ".join(map(lambda s: (' ' in s or '\n' in s) and '"' + 
                        re.sub("\\s+", " ", s) + '"' or s, 
                        command_line))

def writeCommandLines(tests_by_id, results_set, engine, filename, 
                      include_executable = False):
    f = open(filename, "w")
    for test_id in results_set:
        test = tests_by_id[test_id]
        command = engine.getCommand(test.getReproductionCommand())
        if not include_executable:
            command = command[1:]
        f.write("# %s\n%s\n\n"%(test_id.name,
                                formatCommandLine(command)))

def writeCounts(comparison):
    results = comparison.results
    rv = []
    rv.append("Compile failed: %i files"%len(results["compile_failed"]))
    rv.append("Passed: %i tests"%len(results["pass"]))
    rv.append("Failed: %i tests"%len(results["fail"]))
    rv.append("Valgrind errors: %i tests"%len(results["valgrind"]))
    rv.append("Crashed: %i tests"%len(results["crash"]))
    rv.append("Timed out: %i tests"%len(results["timeout"]))
    rv.append("Missing: %i tests"%len(comparison.sets["missing"]))
    rv.append("New: %i tests"%len(comparison.sets["new"]))
    return rv

def writeTest(test, engine, verbose):
    bug = "" if not test.comment.strip() else "(%s)"%(test.comment.lstrip())
    output = []
    output.append("""-----
Test file:     %s
Function name: %s %s"""%(test.file.path, test.id.function, bug))
    if verbose:
            output.append("Command line: %s"%(
                    formatCommandLine(engine.getCommand(
                            test.getReproductionCommand()))))
    if test.killed:
        output.append("               ** killed by timeout ** ")
    elif test.crashed:
        output.append("               ** presumed crash ** ")
    elif not test.passed:
        output.append("Output:        %s"%test.output.rstrip())
    else:
        output.append("               passed ")
    output.append("-----\n")
    return "\n".join(output)

def outputBuildbot(tests_by_id, comparison, engine, opts):
    json_data = comparison.to_buildbot()
    return json.dumps(json_data, indent=0)

def outputDefault(tests_by_id, comparison, engine, opts):
    rv = []
    results = comparison.results
    if results["compile_failed"]:
        rv = ["Files that failed to compile:"]
        rv.extend(results["compile_failed"] + ["\n"])

    if results["crashed_files"]:
        rv.append("Files that has a crash or timeout (rerun without --fast):")
        rv.extend(results["crashed_files"] + ["\n"])
        return "\n".join(rv)

    for output, key, text in [(opts.write_pass, "pass", "Passes:"),
                              (opts.write_fail, "fail", "Fails:"),
                              (opts.write_valgrind, "valgrind", "Valgrind Errors:"),
                              (opts.write_crash, "crash", "Crashes:"),
                              (opts.write_timeout, "timeout", "Timeouts:")]:
        if output and results[key]:
            rv.append(text)
            rv.extend(writeTest(tests_by_id[result_id], engine, opts.verbose) for result_id in results[key])

    if opts.write_new:
        rv.append("New tests:")
        rv.extend(writeTest(tests_by_id[result_id], engine, opts.verbose) for result_id in comparison.sets["new"])

    if opts.write_missing:
        rv.append("Missing tests:")
        rv.extend(unicode(result_id) for result_id in comparison.sets["missing"])

    if opts.write_regressions and comparison.sets["regressions"]:
        rv.append("Regressions:")
        try:
            rv.extend(writeTest(tests_by_id[result_id], engine, opts.verbose) for result_id in comparison.sets["regressions"])
        except KeyError:
            print [unicode(key) for key in comparison.sets["regressions"]]
            print [key in tests_by_id for key in comparison.sets["regressions"]]
            raise

    if opts.write_fixes and comparison.sets["new pass"]:
        rv.append("Fixes:")
        try:
            rv.extend(writeTest(tests_by_id[result_id], engine, opts.verbose) for result_id in comparison.sets["new pass"])
        except KeyError:
            print [unicode(key) for key in comparison.sets["new pass"]]
            print [key in tests_by_id for key in comparison.sets["new pass"]]
            raise

    if opts.store_regressions:
        if opts.load:
            out_f = open(opts.load, "w")
        else:
            out_f = getUniqueFile("regressions", "")
        comparison.sets["regressions"].toFile(out_f)
        out_f.close()
        print "To rerun just the regressions tests type:"
        #This is not quite right, need to check for extra opts
        args = []
        if opts.shell:
            args.extend(["-s", opts.shell])
        print "%s %s --load=%s"%(sys.argv[0], " ".join(args), out_f.name)

    if opts.write_counts:
        rv.extend(writeCounts(comparison))

    return "\n".join(rv)


def outputNoRun(tests_by_id, comparison, engine, opts):
    rv = []
    results = comparison.results
    if results["compile failed"]:
        rv = ["Files that failed to compile:"]
        rv.extend(results["compile_failed"])
    
    return "\n".join(rv)
