/*
  Regression test for an ecmascript thread deadlock bug.
*/

var cvs = "$Id: es_deadlock.js 10655 2006-12-18 15:47:57Z hallvord $";

testmodule("Ecmascript-thread deadlock", cvs);

try {

testcase("call");

  ttrue("call #1", opener.deadlock_called);

testcase("eval");

  ttrue("eval #1", opener.deadlock2_called);

} catch (e) { exception( e ); }

testmodule_finished();
