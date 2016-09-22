function test_date(input_string, year, month, day, hour, minute, second) {
  var date = new Date(Date.parse(input_string));
  var message = "";
  var passed;
  try {
    assertEquals(date.getUTCFullYear(), year, "years did not match");
    assertEquals(date.getUTCMonth(), month, "months did not match");
    assertEquals(date.getUTCDate(), day, "day of month did not match");
    assertEquals(date.getUTCHours(), hour, "hours did not match");
    assertEquals(date.getUTCMinutes(), minute, "minutes did not match");
    assertEquals(date.getUTCSeconds(), second, "seconds did not match");
    passed = true;
  } catch(e) {
    message = e.message;
    passed = false;
  }
  write_result(input_string, passed, message);
  report_result(passed);
}

function test_date_invalid(input_string, expected) {
  var date = Date.parse(input_string);
  var passed;
  try {
    assertEquals(NaN, date, "Invalid date did not match");
    passed = true;
  } catch(e) {
    passed = false;
    var message = e.message;
  }
  write_result(passed, message);
  report_result(passed);
}

function assertEquals(actual, expected, message) {
  if (expected !== expected) {
    //NaN case
    if (actual === actual) {
      throw new FailError(message + " expected: NaN got: " + actual);
    }
  } else {
    if (expected !== actual) {
      throw new FailError(message + " expected: " + expected + " got: " + actual);
    }
  }
}

function FailError(message) {
  this.message = message;
}

function write_result(input_string, passed, message) {
  var out_elem = document.getElementsByTagName("p")[0];
  out_elem.style.color = passed?"green":"red";
  if (passed) {
    out_elem.textContent = input_string + " PASS";
  } else {
    out_elem.textContent = input_string + " FAIL (" + message + ")";
  }
}

function report_result(passed) {
   try {
     top.opener.rr(passed);
   } catch(e) {
     //pass
   }
}