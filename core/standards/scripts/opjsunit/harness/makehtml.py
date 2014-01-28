import os
import optparse
import glob
import shutil

import genshi
from genshi.template import  MarkupTemplate
import relpath
import simplejson

import opjsunit
from opjsunit import JobRunner
from jsshells import *


engine = CarakanShell("jsshell")
default_output_path = os.path.join(opjsunit.base_path, "spartan")

def makeOptions():
    usage = """usage: %prog [options] [/path/to/jsshell]*

Generate html versions of the tests in opjsunit
"""

    parser = optparse.OptionParser(usage=usage)
    return parser

class TestFile(opjsunit.TestFile):
    def _get_name(self):
        return os.path.splitext(os.path.split(self.path)[1])[0]
    name = property(_get_name)

def get_test_list():
    test_files = []
    for filename in glob.glob(os.path.join(opjsunit.test_path, "test*.js")):
        if "_" in filename and filename.rsplit("_", 1)[1] == "hostobject.js":
            continue
        test_file = TestFile(filename)
        test_files.append(test_file)

    compiled_files = []
    uncompiled_files = []

    def get_job(test_file):
        def get_tests():
            def callback(rv, signal, proc, killed):
                test_file.updateTestLists(rv)
                if test_file.compile_failed:
                    uncompiled_files.append(test_file)
                else:
                    compiled_files.append(test_file)
            return test_file.getTests(engine), callback, None
        return get_tests

    test_finder = JobRunner(4, timeout=2)

    for test_file in test_files:
        test_finder.queue([get_job(test_file)])

    test_finder.run()

    return compiled_files

def make_harness_code(test, iterations):
    code = """
function test() {
  var passed = false;
  var error = "";
  var output_element = document.getElementsByTagName("p")[0];
  try {
    for (var count=0; count<%(iterations)i; count++) {
      %(test_func)s();
    }
    passed = true;
  } catch(e) {
    error = e.message;
  }
  try {top.opener.rr(passed)} catch(e){}
  if (passed) {
    output_element.textContent = "PASS"
    output_element.style.color = "green";
  } else {
    output_element.textContent = "FAIL: " + error + " (failed on iteration " + count + ")"
  
    output_element.style.color = "red";
  }
}
window.addEventListener("load", test, false);
"""%{"iterations":iterations, "test_func":test.id.function}
    return code

def make_tests(test_list, opts):
    shutil.copy(os.path.join(opjsunit.harness_path, "opjsunit.js"),
                os.path.join(default_output_path, "opjsunit.js"))
    
    test_data = {}
    for test_file in test_list:
        current_test_data = test_data
        filename = os.path.split(test_file.path)[1]
        dir_name = os.path.join(default_output_path, 
                                os.path.splitext(filename)[0])
        out_path = os.path.join(dir_name, filename)

        components = [item for item in os.path.splitext(filename)[0][4:].split("_")]

        if len(components) == 1:
            components.append("other")

        for i, component in enumerate(components):
            if component not in current_test_data:
                if i == len(components) - 1:
                    current_test_data[component] = []
                else:
                    current_test_data[component] = {}
            current_test_data = current_test_data[component]

        if not('write_tests' in opts) or opts.write_tests:
            if not os.path.exists(dir_name):
                os.mkdir(dir_name)
            assert os.path.isdir(dir_name)

            shutil.copy(test_file.path, out_path)

        tests = opjsunit.TestSet(test_file.iterkeys())

        for i, test_id in enumerate(tests.iterByName()): 
            test = test_file[unicode(test_id)]
            code_filename = os.path.split(out_path)[1]
            make_test(test, i, dir_name, code_filename, opts)
            props = {
                "name":test.id.function,
                "href":relpath.relpath(os.path.join(default_output_path,
                                                    test.rel_path),
                                       opjsunit.base_path)
                }
            current_test_data.append(props)
    return test_data

def make_test(test, file_number, out_dir, code_filename, opts):
    harness_code = make_harness_code(test, opts.iterations)
    filename = test.id.function + ".htm"

                

    test.rel_path = os.path.join(relpath.relpath(out_dir,
                                                 default_output_path),
                                 filename)

    if not('write_tests' in opts) or opts.write_tests:

        out_f = open(os.path.join(out_dir, filename), "w")
        template = MarkupTemplate(open(os.path.join(opjsunit.harness_path, "test.xml")))
    
        stream = template.generate(harness_code = harness_code,
                                   title = str(test.id.name),
                                   test_filename=code_filename,
                                   run_individually=test.file.run_tests_individually,
                                   function_code=test.function_code)
        out_f.write(stream.render('html', doctype='html5', 
                                  encoding="utf-8"))

        out_f.close()

def make_index(test_files, opts):
    template = MarkupTemplate(open(os.path.join(opjsunit.harness_path, "index.xml")))
    test_lists = {}
    for item in test_files:
        test_lists[item.name] = opjsunit.TestSet(
            [test.id for test in item.itervalues()])
    stream = template.generate(
        test_files = sorted(test_files, key=lambda test_file: test_file.name),
        test_lists = test_lists)
    out_f = open(os.path.join(default_output_path, "index.html"), "w")
    out_f.write(stream.render('html', doctype='html5', 
                              encoding="utf-8"))
    out_f.close()

def write_harness_index(test_index):
    f = open(os.path.join(opjsunit.base_path, "tests.js"), "w")
    f.write("var tests = %s"%simplejson.JSONEncoder(sort_keys=True, indent=True).encode(test_index))

class Opts(dict):
    def __getattr__(self, key):
        return dict.__getitem__(self, key)
    def __setattr(self, key, value):
        dict.__setitem__(self, key, value)

def main():
    if not (os.path.exists(default_output_path)):
        os.mkdir(default_output_path)
    opts = Opts(iterations=100, write_tests=True, recursive=False)
    opjsunit.opts = opts
    test_list = get_test_list()
    test_data = make_tests(test_list, opts)
    write_harness_index(test_data)
    make_index(test_list, opts)

if __name__ == "__main__":
    main()
