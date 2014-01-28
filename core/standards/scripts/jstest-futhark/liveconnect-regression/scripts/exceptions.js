/*
  Test if exception handling works.
*/

var cvs = "$Id: exceptions.js 10655 2006-12-18 15:47:57Z hallvord $";

testmodule("Exception handling", cvs);

try {

testcase("Catch Java exception in JavaScript");

  var did_except = false;

  try {
  	new java.net.URL("::http://www.opera.com");
  }
  catch(e2) {
	did_except = true;
	ex_msg = e2.toString();
  }

  ttrue("Malformed URL cause exception to be thrown", did_except);
  test("Malformed URL caused Malformed URL exception", ex_msg, "java.net.MalformedURLException: no protocol: ::http://www.opera.com");

} catch (e) { exception( e ); }

testmodule_finished();
