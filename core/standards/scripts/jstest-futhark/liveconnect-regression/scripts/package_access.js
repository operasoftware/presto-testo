/*
  Check package access.
*/

var cvs = "$Id: package_access.js 10655 2006-12-18 15:47:57Z hallvord $";

testmodule("Package access", cvs);

try {

testcase("Check sun package access");

  try {
    var utilClass = java.lang.Class.forName("sun.text.Utility");
  }
  catch (ex) {
    var utilClass = null;
  }
  test("Check sun.text.Utility access", utilClass, null);

} catch (e) { exception( e ); }

testmodule_finished();
