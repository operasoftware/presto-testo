/* Tests for scheduling of timeouts */

var cvs = "$Id: timeoutTest.js 4838 2006-01-18 05:59:01Z hallvord $";

testmodule ("Scheduler, timeouts", cvs);

try {

  var timeout4_id;
  var timeout6_id;
  var flag4 = false;
  var flag6 = false;

  function timeout3 ()
  {
testcase ("3 second timeout");

    var end = (new Date ()).getTime ();
    test ("too early", (end - start) < 3000, false, "" + ((end - start) / 1000) + " seconds");
    test ("too late", (end - start) > 3050, false, "" + ((end - start) / 1000) + " seconds, possibly not critical");

    clearTimeout (timeout4_id);
  }

  function timeout4 ()
  {
    flag4 = true;
  }

  function timeout5 ()
  {
testcase ("4 second timeout");

    test ("cancelled", flag4, false);

testcase ("5 second timeout");

    var end = (new Date ()).getTime ();
    test ("too early", (end - start) < 5000, false, "" + ((end - start) / 1000) + " seconds");
    test ("too late", (end - start) > 5050, false, "" + ((end - start) / 1000) + " seconds, possibly not critical");

    clearTimeout (timeout6_id);
  }

  function timeout6 ()
  {
    flag6 = true;
  }

  function timeout7 ()
  {
testcase ("6 second timeout");

    test ("cancelled", flag6, false);

testcase ("7 second timeout");

    var end = (new Date ()).getTime ();
    test ("too early", (end - start) < 7000, false, "" + ((end - start) / 1000) + " seconds");
    test ("too late", (end - start) > 7050, false, "" + ((end - start) / 1000) + " seconds, possibly not critical");

testmodule_finished ();
  }

  var start = (new Date ()).getTime ();

  setTimeout (timeout3, 3000);
  timeout4_id = setTimeout (timeout4, 4000);
  setTimeout (timeout5, 5000);
  timeout6_id = setTimeout (timeout6, 6000);
  setTimeout (timeout7, 7000);

} catch (e) { exception (e); }

/* eof */
