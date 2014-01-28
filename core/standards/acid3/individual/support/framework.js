var notifications = {};
function notify(file) {
  // used in cross-file tests
  notifications[file] = 1;
}
function fail(message) {
  throw { message: message };
}
function assert(condition, message) {
  if (!condition)
    fail(message);
}
function assertEquals(expression, value, message) {
  if (expression != value) {
    expression = (""+expression).replace(/[\r\n]+/g, "\\n");
    value = (""+value).replace(/\r?\n/g, "\\n");
    fail("expected " + value + ", got: " + expression + " - " + message);
  }
}

function runTest() {
  try {
    var result = test();
    try{top.opener.rr(result);}catch(e){}
    if (result) {
      document.getElementById("result").innerHTML = "<span style='color:green;'>PASS</span>";
    } else {
	  document.getElementById("result").innerHTML = "<span style='color:red;'>FAIL</span>";
    }
  } catch (e) {
    var s = e.message.replace(/\s+$/, "");
    document.getElementById("result").innerHTML = "FAIL: " + s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace('\0', '\\0');
    try{top.opener.rr(false);}catch(e){}
  };
}
window.addEventListener("load", runTest, false);
