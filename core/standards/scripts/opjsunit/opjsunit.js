function tests_to_treemodel(tree_root, data_root) {
  var names = [];

  if (data_root instanceof Array) {
    for (var i=0; i<data_root.length; i++) {
      var test = data_root[i];
      var tree_node = new TreeNode();
      tree_node.cols.push({"type":"boolean", "value":true});
      tree_node.cols.push({"type":"link", "value":test.name,
			   "href":test.href});
      tree_root.append(tree_node);
    }
  } else {
    var branch_names = [];

    for (var p in data_root) {
      branch_names.push(p);
    }

    branch_names.sort();

    for (var i=0; i<branch_names.length; i++) {
      var name = branch_names[i];
      var tree_node = new TreeNode();
      tree_node.cols.push({"type":"boolean", "value":true});
      tree_node.cols.push({"type":"text", "value":name});
      tree_root.append(tree_node);
      tests_to_treemodel(tree_node, data_root[name]);
    }
  }
}

function UI() {}

UI.prototype.toString = function() {
  return "[object UI]";
};

UI.prototype.init = function() {
  this.harness_element = document.getElementById("harness");
  this.controls_element = document.getElementById("controls");
  this.tree_element = document.getElementById("tree");
  this.results_element = document.getElementById("results");
  this.status_element = document.getElementById("status");

  this.load_test_data();

  var loading_text = document.createElement("i");
  loading_text.textContent = "Loading…";
  this.harness_element.appendChild(loading_text);

  this.init_tree();

  this.init_testsuite();

  this.harness_element.removeChild(loading_text);
  this.init_harness();

};

UI.prototype.load_test_data = function() {
  /*
   * Load the data for testing into a tree structure
   */
  this.test_data = new TreeNode();
  this.test_data.cols.push({"type":"boolean",
			    "value":true});
  this.test_data.cols.push({"type":"text",
			    "value":"Tests"});
  tests_to_treemodel(this.test_data, tests); //tests is a global
};

UI.prototype.init_tree = function() {
  this.tree = new TreeRenderer(document,
			      document.getElementById("tree"),
			      {"default_open_depth":1});
  this.tree.render(this.test_data);
};

UI.prototype.init_harness = function() {

  var control_button = document.getElementById("control_button");
  var ts = this;

  this.func_start_tests = function() {
    ts.init_status();
    ts.test_suite.run();
    control_button.value = "Stop";
    control_button.onclick = ts.func_stop_tests;
  };

  this.func_stop_tests = function() {
    ts.harness_window.close();
    ts.test_suite.stop();
    control_button.value = "Start";
    control_button.onclick = ts.func_start_tests;
    ts.set_status("");
  };
  control_button.onclick = this.func_start_tests;

  var load_controls = document.getElementById("load_controls");
  var load_button = document.getElementById("load_button");
  var hide_button = document.getElementById("hide_load_button");

  this.func_load = function(state) {
    //Dunno if this newline ending is consistent
    var test_names = document.getElementById("test_list").value.split("\r\n");
    var paths = {};
    for (var i=0; i<test_names.length; i++) {
      paths[ts.name_to_path(test_names[i])] = true;
    }
    var walker = new TreeWalker(this.tree.data);
    var node = walker.next();
    while(node != null) {
      if (node.is_leaf() && node.cols[1].href in paths) {
	node.cols[0].value = false;
	this.tree.refresh_row(node);
      }
      node = walker.next();
    }

    load_controls.setAttribute("hidden", "hidden");
    skip_list_button.disabled = false;
  };

  load_button.onclick = this.func_load;
  hide_button.onclick = function() {load_controls.setAttribute("hidden",
							       "hidden");
				    skip_list_button.disabled = false;
				   };

  this.func_click_skip_list = function() {
    load_controls.removeAttribute("hidden");
    load_button.onclick = function() {ts.func_load("skip");};
    skip_list_button.disabled = true;
  };


  var skip_list_button = document.getElementById("load_skip_button");
  skip_list_button.onclick = this.func_click_skip_list;

  this.func_select_all = function() {
    var walker = new TreeWalker(ts.tree.data);
    var node = walker.next();
    while (node !== null) {
      if (node.cols[0].type === "boolean") {
	node.cols[0].value = true;
//	ts.tree.refresh_row(node);
	//Hack because using refresh_row is slow
	var render_node = ts.tree.node_map[node.id];
	for (var i=0; i<render_node.childNodes.length; i++) {
	  var child = render_node.childNodes[i];
	  if (child.nodeType === child.ELEMENT_NODE &&
	      child.nodeName.toLowerCase() === "input" &&
	      child.getAttribute("type") === "checkbox") {
	    child.checked = true;
	  }
	}
      }
      node = walker.next();
    }
  };

  document.getElementById("select_all_button").addEventListener("click", this.func_select_all, false);

  this.controls_element.removeAttribute("hidden");
};

UI.prototype.init_results = function() {
  //This assumes that the status node is always the first child of results
  while (this.results_element.childNodes.length > 1) {
    this.results_element.removeChild(this.results_element.childNodes[1]);
  }
};

UI.prototype.init_testsuite = function() {
  var ts = this;
  function suite_done_callback(testsuite) {
    ts.write_results(testsuite);
    ts.cleanup_after_run();
  }

  function test_done_callback(test_node, testsuite) {
    ts.update_status(testsuite.tests_run);
    ts.tree.refresh_row(test_node);
  }

  this.test_suite = new TestSuite(this.test_data, 5000,
				  test_done_callback,
				  suite_done_callback);
};

UI.prototype.make_results_list = function(testsuite, status, format,
					  sorted) {

  sorted = sorted || false;
  var tests = testsuite.results[status];
  var test_names = new Array(tests.length);
  for (var i=0; i<tests.length; i++) {
    test_names[i] = this.path_to_name(tests[i].cols[1].href);
  }

  if (sorted) {
    test_names.sort();
  }

  if (format === "text") {
    return "data:text/plain," + encodeURIComponent(test_names.join("\n"));
  } else if (format === "html") {
    var rv = "data:text/html,";
    var node_strings = new Array(test_names.length);
    for (var j=0; j<test_names.length; j++) {
      //Create an absolute url using the fact that reflecting URL
      //attributes always return absolute URLs
      var temp = document.createElement("a");
      temp.href = tests[j].cols[1].href;
      node_strings[j] = "<p><a href='" + temp + "'>"+test_names[j] + "</a></p>";
    }
    return rv + encodeURIComponent(node_strings.join("\n"));
  } else {
    throw "unrecognised format";
  }
};

UI.prototype.path_to_name = function(path) {
  var path_components = (path.split(".").slice(0,-1).join(".")).split("/");
  return "tests/" + path_components.slice(1, -1).join("/") + ".js" + "#" + path_components[path_components.length-1];
};

UI.prototype.name_to_path = function(name) {
  return "spartan/" + (name.split(".").slice(0,-1).join(".") + ".htm").split("/").slice(1).join("/");
};

UI.prototype.write_results = function(testsuite) {
  var statuses = ["passed", "failed", "timed out"];

  for (var i=0; i<statuses.length; i++) {
    var status = statuses[i];
    var p = document.createElement("p");
    p.textContent = status[0].toUpperCase() + status.slice(1) + ": " + testsuite.results[status].length + " ";

    var a_text = document.createElement("a");
    a_text.href = this.make_results_list(testsuite, status, "text");
    a_text.textContent = "(list as text)";
    p.appendChild(a_text);

    this.results_element.appendChild(document.createTextNode(" "));

    var a_html = document.createElement("a");
    a_html.href = this.make_results_list(testsuite, status, "html");
    a_html.textContent = "(list as html)";
    p.appendChild(a_html);

    this.results_element.appendChild(p);
  }
};

UI.prototype.init_status = function() {
  this.total_tests = this.test_suite.count_tests();
  var status = this.status_element;
  status.textContent = "Running test ";
  status.appendChild(document.createElement("span"));
  status.appendChild(document.createTextNode(" of " + this.total_tests +
					    " estimated time remaining: "));
  status.appendChild(document.createElement("span"));
  document.getElementById("harness").appendChild(status);
  this.start_time = new Date();
};

UI.prototype.update_status = function(tests_complete) {
  this.status_element.childNodes[1].textContent = tests_complete;
  var tests_remaining = this.total_tests - tests_complete;

  if (tests_complete%10 === 1 || tests_remaining < 20) {
    var time_per_test = (new Date() - this.start_time) / tests_complete;
    var time_remaining = time_per_test * tests_remaining;
    var seconds_remaing = time_remaining / 1000;
    var minutes = Math.floor(seconds_remaing / 60);
    var seconds = Math.round(seconds_remaing - (minutes*60));
    var text = "";

    var display_seconds = minutes <= 2;

    if (!display_seconds && seconds > 30) {
      minutes += 1;
    }

    if (minutes != 0) {
      text += minutes + " minutes ";
    }
    if (display_seconds) {
      text += seconds + " seconds";
    }

    this.status_element.childNodes[3].textContent = text;
  }
};

UI.prototype.set_status = function(status) {
  this.status_element.textContent = status;
};

UI.prototype.cleanup_after_run = function() {

  var button = document.getElementById("control_button");
  button.value = "Start";
  button.onclick = this.func_start_tests;

  this.set_status("Tests complete");

  this.test_suite.close_harness_window();
};

function init() {
  var ui = new UI();
  ui.init();
}

window.addEventListener("DOMContentLoaded", init, false);