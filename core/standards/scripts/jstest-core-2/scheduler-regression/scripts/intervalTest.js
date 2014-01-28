/* Tests for scheduling of timeouts */

var cvs = "$Id: intervalTest.js 4838 2006-01-18 05:59:01Z hallvord $";

testmodule ("Scheduler, intervals", cvs);

try {

  var interval1_id;
  var interval1_count = 0;
  var interval1_period = 1000;

  var interval2_id;
  var interval2_count = 0;
  var interval2_period = 1500;

  function interval1 ()
  {
testcase ("1 second interval");

    var now = (new Date ()).getTime ();
    interval1_count += 1;

    test ("clearing failed", interval1_count > 3, false);

    test ("too early, repetition " + interval1_count,
          (now - start) < (interval1_period * interval1_count), false,
          "" + ((now - start) / 1000) + " seconds");

    test ("too late, repetition " + interval1_count,
          (now - start) > ((interval1_period + 50) * interval1_count), false,
          "" + ((now - start) / 1000) + " seconds, not critical");

    if (interval1_count == 3)
      clearInterval (interval1_id);
  }

  function interval2 ()
  {
testcase ("1.5 second interval");

    var now = (new Date ()).getTime ();
    interval2_count += 1;

    test ("clearing failed", interval2_count > 3, false);

    test ("too early, repetition " + interval2_count,
          (now - start) < (interval2_period * interval2_count), false,
          "" + ((now - start) / 1000) + " seconds");

    test ("too late, repetition " + interval2_count,
          (now - start) > ((interval2_period + 50) * interval2_count), false,
          "" + ((now - start) / 1000) + " seconds, not critical");

    if (interval2_count == 3)
      clearInterval (interval2_id);
  }

  function timeout7 ()
  {
testcase ("wrap up");

    test ("1 second interval, finished", interval1_count, 3);
    test ("1.5 second interval, finished", interval2_count, 3);

testmodule_finished ();
  }

  var start = (new Date ()).getTime ();

  interval1_id = setInterval (interval1, 1000);
  interval2_id = setInterval (interval2, 1500);
  setTimeout (timeout7, 7000);

} catch (e) { exception (e); }

/* eof */
