/*
  Test of accessing an applet object from javascript.
*/

var cvs = "$Id: lcapplet.js 10655 2006-12-18 15:47:57Z hallvord $";

testmodule("LCApplet", cvs);

try {

  var applet = opener.document.getElementById('LCApplet');

testcase("Existence");

  tdef("Applet object defined", applet);
  tdef("field1 defined", applet.field1);
  tdef("field2 defined", applet.field2);
  tdef("method1 defined", applet.method1);
  tdef("method2 defined", applet.method2);

testcase("Get field");

  test("Get field1", applet.field1, 17);
  test("Get field2", applet.field2.getClass(), "class java.lang.Object");

testcase("Call method");

  test("Call method1", applet.method1(), "Method1 result");
  ttrue("Call method2", applet.method2());

testcase("Set field");

  applet.field1 = 13;
  applet.field2 = 32;

  test("Set field1", applet.getField1(), 13);
  test("Set field2", applet.getField2(), 32);

testcase("Set arbitrary ecmascript object member");

  applet.arbitrary = "passed";

  test("Set arbitrary named ecmascript member of dom element for applet", applet.arbitrary, "passed");

} catch (e) { exception( e ); }

testmodule_finished();
