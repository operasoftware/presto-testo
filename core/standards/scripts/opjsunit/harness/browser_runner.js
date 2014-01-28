function getTests(url) {

  var frame = element("iframe");
  var test_functions = [];

  frame.src = url;

  frame.onload = function() {
    var names = "";
    for (var name in frame_window) {
      if (typeof frame_window[name] === 'function' &&
	  name.slice(0,4) === "test") {
	var func = frame_window[name];
	if (!('name' in func)) {
	  func.name = name;
	}
	test_functions.push(func);
      }
    }
    var test_map = {};
    forEach(test_functions,
            function(func) {
	      var test_url = url + "?testfunc=" + encodeURIComponent(func.name);
	      test_map[test_url] = func;
	    });
    frame.parentNode.removeChild(frame);
    startTests(test_map);
  };

  document.body.appendChild(frame);
  var frame_window = window[0];
};

function runTest(func) {
  var passed;
  var exception = null;
  try {
    func();
    passed = true;
  } catch(e) {
    passed = false;
    exception = e;
  }
  return [passed, exception];
}

function runTests(testlist, callback) {
  var results = [];
  var all_passed = true;

  forEach(testlist,
	  function(test) {
	    var res = runTest(test);
	    results.push([test, res]);
	    var passed = res[0], exception=res[1];
	    callback(test, passed, exception);
	    all_passed = all_passed && passed;
	  });

  return [all_passed, results];
}

function displayResult(url, test, passed, message) {
  var class_name = passed?"pass":"fail";

  var output = document.getElementById("output");
  var source = makeSource(test);

  var heading = element("h2", {}, element("a", {"href":url}, test.name));
  var result = element("p", {'class':class_name},
		       passed?"pass":"fail");

  var section = element("section", {'class':"result"},
			[heading, result], output.lastChild);

  if (!passed) {
    section.appendChild(element("pre", {}, message));
  }
  section.appendChild(source);

}

function makeSource(test) {
  var dd = element("dd", {"style":"display:none"},
		   element("pre", {}, test.toString()));
  var dt = element("dt", {"class":"legend"}, "Source");
  var details = element("details", {}, [dt, dd]);
  if (details.open === undefined) {
    dt.textContent +=  " ▶";
    dt.addEventListener("click", function() {
			  if (dd.style.display == "block") {
			    dd.style.display = "none";
			    dt.textContent = "Source ▶";
			  } else {
			    dd.style.display = "block";
			    dt.textContent = "Source ▼";
			  }
			}, false);
    }


  return details;
}

function element(name, attributes, children, parent) {
  var element = document.createElement(name);

  if (attributes) {
    for (p in attributes) {
      if (attributes.hasOwnProperty(p)) {
	element.setAttribute(p, attributes[p]);
      }
    }
  }

  function addChild(child) {
    if (child instanceof Node) {
      element.appendChild(child);
    } else {
      var text = document.createTextNode(child.toString());
      element.appendChild(text);
    }
  }

  if (children) {
    if (typeof children === 'object' && 'length' in children) {
      forEach(children, addChild);
    }
    else {
      addChild(children);
    }
  }

  if (parent) {
    parent.appendChild(element);
  }

  return element;
}

function setupDocument() {
  element("div", {id:"output"}, null, document.body);
}



function main() {
  setupDocument();

  var test_urls = ["../browser/testGettersSetters_required/001.htm"];
  forEach(test_urls, function(test_url) {
            var heading = element("h1", {}, test_url);
            element("section", {}, heading,
                    document.getElementById("output"));
            //This will call startTests once it has the test list
            getTests(test_url);
          });
}

function startTests(test_map) {
  var test_runner = new TestsuiteRunner(
    keys(test_map),
    {
      "OnTestResult":function(e) {
	var func = test_map[e.url];
	displayResult(e.url, func, e.result, e.message);
      },
      "OnTestTimeout":function(e) {
	var func = test_map[e.url];
	displayResult(e.url, func, false, "Timed out");
      }
    }
  );
  test_runner.startTestRun();
}



function forEach(obj, callback, thisArg) {
  if (!thisArg) {
    thisArg = this;
  }
  for (var i=0; i<obj.length; i++) {
    callback.call(thisArg, obj[i], i, obj);
  }
}

function keys(obj) {
  var rv = [];
  for (p in obj) {
    if (obj.hasOwnProperty(p)) {
      rv.push(p);
    }
  }
  return rv;
}

var log_count = 0;
function log(data) {
  log_count++;
  var out = document.getElementById("log");
  out.appendChild(document.createTextNode(log_count + ": " + data + "\n"));
}

window.onload = main;
