/*
  Test for bug #77378. Set final fields.
*/

var cvs = "$Id: setfinalfield.js 10655 2006-12-18 15:47:57Z hallvord $";

testmodule("Set final fields", cvs);

try {

testcase("Set java.lang.Integer.MAX_VALUE")

  var old_max = java.lang.Integer.MAX_VALUE;

  testnot("MAX_VALUE has not already been changed.", old_max, 3);
  java.lang.Integer.MAX_VALUE = 3;
  var new_max = java.lang.Integer.MAX_VALUE;

  test("MAX_VALUE not changed", new_max, old_max);

} catch (e) { exception( e ); }

testmodule_finished();
