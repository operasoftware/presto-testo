/*
  Test of accessing an applet object from javascript.
*/

var cvs = "$Id: applet_reset.js 10655 2006-12-18 15:47:57Z hallvord $";

testmodule("Applet reset", cvs);

try {

  var applet = opener.document.getElementById('LCApplet');

testcase("Preconditions");

  test("Get field1 #1", applet.field1, 17);
  test("Get field1 #2", applet.getField1(), 17);

  applet.field1 = 13;

  test("Set field1 #1", applet.field1, 13);
  test("Set field1 #2", applet.getField1(), 13);

testcase("Visibility change");

  applet.style.visibility = "hidden";
  applet.style.visibility = "visible";

  test("Get field1 #3", applet.field1, 13);
  test("Get field1 #4", applet.getField1(), 13);

} catch (e) { exception( e ); }

testmodule_finished();
