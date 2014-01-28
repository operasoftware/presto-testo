function rr(passed) {
  setTimeout(function() {gTestsuite.record_result(passed);}, 0);
}

var gTestsuite = null;

function TestSuite(tests, timeout, test_done_callback,
		   suite_done_callback) {
  if (gTestsuite != null) {
    throw "Tried to create two testsuites";
  }
  gTestsuite = this;
  this.tests = tests;
  this.test_walker = null;

  this.timeout = timeout;
  this.test_done_callback = test_done_callback;
  this.suite_done_callback = suite_done_callback;
  this.harness_window = null;
  this.reset();
}

TestSuite.prototype.toString = function() {
  return "[object TestSuite]";
};

TestSuite.prototype.reset = function() {
  this.tests_run = 0;
  this.test_walker = new TreeWalker(this.tests);
  this.current_test = null;
  this.results = {
    "passed":[],
    "failed":[],
    "timed out":[]
  };
  this.test_timeout_id = null;

  if (this.harness_window !== null) {
    this.close_harness_window();
  }
};

TestSuite.prototype.run = function() {
  this.reset();
  this.open_harness_window();
};

TestSuite.prototype.start_callback = function(test_frame) {
  /*
   * This is called from the harness file when it wants to
   * start running
   */
  this.test_frame = test_frame;
  this.run_next_test();
};

TestSuite.prototype.open_harness_window = function() {
  this.harness_window = window.open("harness.html");
};

TestSuite.prototype.close_harness_window = function() {
  this.harness_window.close();
  this.harness_window = null;
};

TestSuite.prototype.run_next_test = function() {
  while (true) {
    var test_node = this.test_walker.next();
    if (test_node === null) {
      return this.done();
    } else if (test_node.is_leaf() && test_node.cols[0].value) {
      break;
    }
  }
  this.current_test = test_node;
  if (this.timeout > 0) {
    var ts = this;
    this.test_timeout_id = setTimeout(
      function() {
	clearTimeout(ts.test_timeout_id);
	ts.test_timeout_id = null;
	/*
	 * If we have a test that times out we want to stop it running
	 * Unfortunatley it seems that trying to just set the iframe
	 * source doesn't actually do anything; it gets caught in the
	 * event loop behind the running script. However deleting the
	 * whole iframe and replacing it with a new one works just fine
	 */
        var new_frame = ts.test_frame.ownerDocument.createElement("iframe");
	ts.test_frame.parentNode.replaceChild(new_frame, ts.test_frame);
	ts.test_frame = new_frame;
	ts.record_result("timeout");
      }, this.timeout);
  }

  if (!this.test_frame) {
    this.stop();
  } else {
    //Try deleting the iframe on each iteration in case it helps reduce memory usage
    var new_frame = ts.test_frame.ownerDocument.createElement("iframe");
    this.test_frame.parentNode.replaceChild(new_frame, ts.test_frame);
    this.test_frame = new_frame;
    this.test_frame.contentWindow.location = test_node.cols[1]["href"];
  }
};

TestSuite.prototype.stop = function() {
  clearTimeout(this.test_timeout_id);
  this.test_timeout_id = null;
  this.close_harness_window();
  this.test_frame = null;
};

TestSuite.prototype.record_result = function(result, stop) {
  if (stop === undefined) {
    stop = false;
  }
  var test_node = this.current_test;

  if (this.test_timeout_id !== null) {
    clearTimeout(this.test_timeout_id);
  }

  var result_col = {
    "type":"text",
    "value":"",
    "attrib":{}
  };


  if (result === "timeout") {
    result_col.value = "timed out";
    result_col.attrib["class"] = "result timeout";
    this.results["timed out"].push(test_node);
  } else if (result === true) {
    result_col.value = "passed";
    this.results["passed"].push(test_node);
    result_col.attrib["class"] = "result pass";
  } else if(result === false) {
    result_col.value = "failed";
    this.results["failed"].push(test_node);
    result_col.attrib["class"] = "result fail";
  } else {
    throw new HarnessError("Unexpected test result");
  }

  test_node.cols.push(result_col);

  this.tests_run += 1;

  this.test_done_callback(test_node, this);

  var ts = this;
  if (!stop) {
    setTimeout(function () {ts.run_next_test();}, 0);
  }
};

TestSuite.prototype.done = function() {
  return this.suite_done_callback(this);
};

TestSuite.prototype.count_tests = function() {
  var walker = new TreeWalker(this.tests);
  var count = 0;
  while (true) {
    var test_node = walker.next();
    if (test_node === null) {
      break;
    } else if (test_node.is_leaf() && test_node.cols[0].value) {
      count++;
    }
  }
  return count;
};

function HarnessError(message) {
  this.message = message;
}