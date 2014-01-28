/*
  Test if string conversion works.
*/

var cvs = "$Id: string_conv.js 10655 2006-12-18 15:47:57Z hallvord $";

testmodule("String conversion", cvs);

try {

testcase("Conversion between JavaObject and ecmascript string")

  var obj = new java.lang.Double(5.0);
  var str = obj.toString();
  var strstr = str.toString();

  test("Check type of java.lang.Double object", typeof obj, "object");
  test("Convert Double object to string", obj, "5.0");
  test("Check type of java.lang.Double.toString() result", typeof str, "object");
  test("Convert Double.toString() result to string", str, "5.0");
  test("Check type of java.lang.Double.toString().toString() result", typeof strstr, "object");
  test("Convert Double.toString().toString() result to string", strstr, "5.0");
  test("Check ToPrimitive for java.lang.Double object", 10.0+obj, "105.0");
  test("obj.toString().charAt(0)", obj.toString().charAt(1), 46);
  test("typeof java.lang.String.length", typeof str.length, "function");

} catch (e) { exception( e ); }

testmodule_finished();
