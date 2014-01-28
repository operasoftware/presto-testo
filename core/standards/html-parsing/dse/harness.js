function clear() {
  set_status("");
  var progress =
  ["progress", "details"].forEach(function(x) {
                                    var old_node = document.getElementById(x);
                                    var new_node = old_node.cloneNode(false);
                                    old_node.parentNode.replaceChild(new_node, old_node);
                                  });
}

function set_status(text) {
  var status = document.getElementById("status");
  status.textContent = text;
  if ("opera" in this) {
    opera.postError(text);
  }
}

var done;

function run_tests(file_names, filters, min_index, max_index) {
  function on_result(tests) {
    var passed = tests[0].status === 0;
    process_result(passed);
    if (tests_remaining.length > 0 && done === false) {
      setTimeout(run_next, 0);
    } else {
      setTimeout(function() {make_summary();
                             make_details();}, 0);
    }
  };
  window.completion_callback = on_result;

  done = false;
  var start_time = new Date();
  var tests_remaining;
  if (filters.length > 0) {
    tests_remaining = file_names.filter(function(test) {
                                          return filters.every(function(filter) {
                                                                 filter.lastIndex = 0;
                                                                 var rv = filter.test(test);
                                                                 return rv;
                                                               });
                                             });
  } else {
    tests_remaining = file_names;
  }
  tests_remaining = tests_remaining.slice(min_index, max_index);
  var test_iframe = null;
  var tests_run = [];
  var current_test = null;

  var counter = 0;
  function run_next() {
    if (test_iframe !== null) {
      document.body.removeChild(test_iframe);
    }

    test_iframe = document.createElement("iframe");
    test_iframe.style.display = "None";
    document.body.appendChild(test_iframe);
    current_test = tests_remaining.shift();
    set_status(counter++ + " " + current_test);
    test_iframe.src = current_test;
  }

  function process_result(passed) {
    var doc = test_iframe.contentDocument;
    var progress_node = document.createElement("a");
    progress_node.href = current_test;
    var progress_text = document.createTextNode(passed ? ". " : "F ");
    progress_node.appendChild(progress_text);
    document.getElementById("progress").appendChild(progress_node);

    if (!passed) {
      var input = doc.querySelector("#input > pre > code").textContent;
      var expected = doc.querySelector("#expected > pre > code").textContent;
      var actual = doc.querySelector("#actual > pre > code").textContent;
      var innerHTML_element = doc.querySelector("#container > pre > code");
      var container = innerHTML_element ? innerHTML_element.textContent : null;
    } else {
      var input = null;
      var expected = null;
      var actual = null;
      var container = null;
    }
    tests_run.push({test:current_test, passed:passed, input:input,
                    expected:expected, actual:actual, container:container});
  };

  function make_summary() {
    var passes = tests_run.filter(function(x){return x.passed;});
    var fails = tests_run.filter(function(x){return !x.passed;});
    var status = "Ran " + tests_run.length + " tests in " + Math.round((new Date() - start_time)/1000.) + "s, " + passes.length + " passed " + fails.length + " failed";
    if (fails.length === 0 && !done && min_index === max_index === undefined) {
      status += " Yay! All the tests pass! Geoffrey now owes you one (1) fully functioning Unicorn (pink).";
    }
    set_status(status);
  }

  function mark_diffs(expected, actual) {
    var expected_lines = expected.split("\n");
    var actual_lines = actual.split("\n");

    var max_length = Math.max(expected_lines.length, actual_lines.length);

    var expected_diff = ["code", {}];
    var actual_diff = ["code", {}];

    for (var i=0; i<max_length; i++) {
      if (expected_lines[i] === actual_lines[i]) {
	expected_diff.push(expected_lines[i] + "\n");
	actual_diff.push(actual_lines[i] + "\n");
      } else {
	if (expected_lines[i]) {
	  expected_diff.push(["span", {style:"color:red"}, expected_lines[i] + "\n"]);
	}
	if (actual_lines[i]) {
	  actual_diff.push(["span", {style:"color:red"}, actual_lines[i] + "\n"]);
	}
      }
    }
    return [expected_diff, actual_diff];
  }

  function make_details() {
    var fails = tests_run.filter(function(x){return !x.passed;});
    var details = document.getElementById("details");

    var template = ["div", {"class":"result_detail"},
		    ["div", {"class":"input"},
		     ["h3", {}, "Input"],
		     ["pre", {},
		      ["code", {}, "${input}"]]],
                    function(vars) {
                      if (vars.container !== null) {
                        return ["div", {"class":"container"},
                                ["h3", {}, "innerHTML Container"],
                                ["pre", {}, vars.container]];
                      } else {
                        return null;
                      }
                    },
		    ["div", {"class":"expected"},
		     ["h3", {}, "Expected"],
		     ["pre", {},
		      "${expected}"]],
		    ["div", {"class":"actual"},
		     ["h3", {}, "Actual"],
		     ["pre", {},
		      "${actual}"]],
                    ["a", {href:"${path}"}, "${path}"],
                    ["hr", {}]
		   ];

    fails.forEach(function(result) {
		    var diffs = mark_diffs(result.expected, result.actual);
		    var node = window.template.render(template,
                                                      {path:result.test,
                                                      container:result.container,
				                      input:result.input,
				                      expected:diffs[0],
				                      actual:diffs[1]}
				               );
		    details.appendChild(node);
		  });
  };

  run_next();

}