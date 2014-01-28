/*
  Test for bug #80378. Converting char to ES number values.
*/

var cvs = "$Id: char2number.js 10655 2006-12-18 15:47:57Z hallvord $";


testmodule("Convert char to number", cvs);

try {

testcase("java.lang.Character.forDigit() returns number")

  var c = java.lang.Character.forDigit(3, 10);

  test("forDigit(3, 10) returns 51", c, 51);

testcase("Conversion of java character to ecmascript number");

  test("java.lang.Character.MAX_VALUE", java.lang.Character.MAX_VALUE, 65535);

} catch (e) { exception( e ); }

testmodule_finished();