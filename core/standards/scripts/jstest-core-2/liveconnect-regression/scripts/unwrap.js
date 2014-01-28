/*
  Test if unwrapping JSObject works.
*/

var cvs = "$Id: unwrap.js 4838 2006-01-18 05:59:01Z hallvord $";

testmodule("Unwrap JSObject", cvs);

try {

testcase("Unwrap JSObject stored in java array")

  var js_obj = new Object();
  js_obj.prop = 42;
  var array = java.lang.reflect.Array.newInstance(java.lang.Object, 17);
  array[0] = js_obj;
  var js_obj2 = array[0];

  tdef("Unwrapped object defined", js_obj2);
  test("Check prop property of unwrapped object", js_obj2.prop, 42);
  test("Check if unwrapped object is the same as the one put into the array", js_obj2, js_obj);

} catch (e) { exception( e ); }

testmodule_finished();
