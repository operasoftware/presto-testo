/*
  Check package access.
*/

var cvs = "$Id: package_access.js 4838 2006-01-18 05:59:01Z hallvord $";

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
