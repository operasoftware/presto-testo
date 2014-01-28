/*
  Regression test for an ecmascript thread deadlock bug.
*/

var cvs = "$Id: es_deadlock.js 4838 2006-01-18 05:59:01Z hallvord $";

testmodule("Ecmascript-thread deadlock", cvs);

try {

testcase("call");

  ttrue("call #1", opener.deadlock_called);

testcase("eval");

  ttrue("eval #1", opener.deadlock2_called);

} catch (e) { exception( e ); }

testmodule_finished();
