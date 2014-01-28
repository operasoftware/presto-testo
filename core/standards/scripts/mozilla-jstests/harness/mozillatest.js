if (!("writeln" in this)) {
  if("print" in this) {
    writeln = print;
  } else if ("alert" in this) {
    writeln = function(str) {
      alert(str + "\n");
    };
  }
}

print = function (s){};

if (!("gc" in this))
  gc = function() {};

function version(v)
{
}

function reportFailure (msg)
{
    var lines = msg.split ("\n");
    var l;
    var funcName = currentFunc();
    var prefix = (funcName) ? "[reported from " + funcName + "] ": "";
    for (var i=0; i<lines.length; i++)
        writeln(FAILED + prefix + lines[i]);
}

function writeFormattedResult( expect, actual, string, passed )
{
    if (!passed)
    {
        var s = FAILED + string + ' expected: ' + expect;
        writeln(s);
    }
    return passed;
}


function array_contains(array, item) {
  for (var i=0; i<array.length; i++) {
    if (array[i] == item) {
      return true;
    }
  }
  return false;
}

function overwriteTestFunction() {
  var original_test_function = test;
  this.test = function() {
    var testcases = [];
    for (var i=0; i<gTestcases.length; i++) {
      if (!(array_contains(gSkipTests, gTestcases[i].description))) {
	testcases.push(gTestcases[i]);
      }
    }
    gTestcases = testcases;
    var args = Array.prototype.slice.call(arguments);
    return original_test_function.apply(this, args);
  };
}

function overwriteBigOFunction() {
  BigO = function() {
    return 0;
  };
}

overwriteTestFunction();
overwriteBigOFunction();
