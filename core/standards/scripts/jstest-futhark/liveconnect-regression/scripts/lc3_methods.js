/*
  Test LC3 Method resolution.
*/

var cvs = "$Id: lc3_methods.js 10655 2006-12-18 15:47:57Z hallvord $";

testmodule("LiveConnect3 method resolving", cvs);

try {

  var app = opener.document.getElementById('applet_id');

testcase("Tests")

  var javaObject = new java.lang.Object();
  var javaString = new java.lang.String('hey');
  var javaDouble = new java.lang.Double(10);

  test("Tests #1", app.Method1(), "Method1");

  test("Tests #2", app.ObjectOrString(javaString), "String");
  test("Tests #3", app.ObjectOrString(javaObject), "Object");

  var ex4_str;
  try {
    app.ObjectOrString(undefined);
  }
  catch (ex4) {
    ex4_str = ex4.toString();
  }

  test("Tests #4", ex4_str, "Ambiguous call to overloaded method: ObjectOrString");

  test("Tests #5", app.NumberMethod(javaObject, 10), "Object+double");
  test("Tests #6", app.NumberMethod(javaObject, javaDouble), "Object+Double");
  test("Tests #7", app.NumberMethod(javaString, 10), "String+double");

  var ex8_str;
  try {
    app.NumberMethod(javaString, javaDouble);
  }
  catch (ex8) {
    ex8_str = ex8.toString();
  }
  test("Tests #8", ex8_str, "Ambiguous call to overloaded method: NumberMethod");

  var ex9_str;
  try {
    app.NumberMethod(undefined, 10);
  }
  catch (ex9) {
    ex9_str = ex9.toString();
  }
  test("Tests #9", ex9_str, "Ambiguous call to overloaded method: NumberMethod");
  test("Tests #10", app.NumberMethod(undefined, javaDouble), "Object+Double");

  var ex11_str;
  try {
    new Packages.LC3Methods(undefined);
  }
  catch (ex11) {
    ex11_str = ex11.toString();
  }
  test("Tests #11", ex11_str, "Ambiguous call to overloaded constructor for class: LC3Methods");

} catch (e) { exception( e ); }

testmodule_finished();

