  var cvs = "$Id: date-parser.js 8992 2006-10-11 03:00:03Z hallvord $";
  var D1999time = new Date (1999, 0, 09, 10, 12, 14);
  var D1999time2 = new Date (1999, 0, 09, 10, 12, 0);
  var D1999time3 = new Date (1999, 0, 09, 10, 0, 0);

  var D1999 = new Date (1999, 0, 09, 0, 0, 0);
  var D1965 = new Date (1965, 0, 09, 0, 0, 0);
  var D1901 = new Date (1901, 0, 09, 0, 0, 0);

  var D1999am1 = new Date(1999, 0, 09,  0, 40, 0);  // 12:40 AM == 00:40
  var D1999am2 = new Date(1999, 0, 09,  1, 40, 0);  //  1:40 AM == 01:40
  var D1999pm1 = new Date(1999, 0, 09, 12, 40, 0);  // 12:40 PM == 12:40
  var D1999pm2 = new Date(1999, 0, 09, 13, 40, 0);  //  1:40 PM == 13:40

  function validate (str, date)
  {
    var t, d, p;
    t = Date.parse (str);
    d = new Date (t);
    p = (d.toString () == date.toString ());

    document.writeln ("<div class='" + (p ? "correct" : "incorrect") + "'>");
    document.writeln (str);
    document.writeln ("</div>");

    if (!p)
    {
      document.writeln ("<div class='indented'>");
      document.writeln ("<b>Result:</b> " + d.toString () + "<br>");
      document.writeln ("<b>Correct:</b> " + date.toString () + "<br>");
      document.writeln ("</div>");
      _tests_failed++;
    }
    else
      _tests_passed++;
  }

  function testAllTZ ()
  {
    validate ("January 09, 1999 10:12:14 GMT+0100", D1999time);
    validate ("January 09, 1999 GMT+0100", D1999);
    validate ("Wed, 09 January 1999 10:12:14 GMT+0100", D1999time);
    validate ("1999-01-09 10:12:14 GMT+0100", D1999time);
    validate ("1999/01/09 10:12:14 GMT+0100", D1999time);
    validate ("1999/01/09 10:12 GMT+0100", D1999time2);
    validate ("1999/01/09 10: GMT+0100", D1999time3);
    validate ("1999/01/09 10 GMT+0100", D1999time3);
    validate ("Jan 09 10:12:14 1999 GMT+0100", D1999time);
    validate ("10:12:14 GMT+0100 1999 January 09", D1999time);
  }

  function testAllTZneg ()
  {
    validate ("January 09, 1999 08:12:14 GMT-0100", D1999time);
    validate ("Wed, 09 January 1999 08:12:14 GMT-0100", D1999time);
    validate ("1999-01-09 08:12:14 GMT-0100", D1999time);
    validate ("1999/01/09 8:12:14 GMT-0100", D1999time);
    validate ("1999/01/09 8:12 GMT-0100", D1999time2);
    validate ("1999/01/09 08: GMT-0100", D1999time3);
    validate ("1999/01/09 08 GMT-0100", D1999time3);
    validate ("Jan 09 08:12:14 1999 GMT-0100", D1999time);
    validate ("08:12:14 GMT-0100 1999 January 09", D1999time);
  }

  function testAllTZ_UTC ()
  {
    validate ("January 09, 1999 09:12:14 UTC", D1999time);
    validate ("Wed, 09 January 1999 09:12:14 UTC", D1999time);
    validate ("1999-01-09 09:12:14 UTC", D1999time);
    validate ("1999/01/09 9:12:14 UTC", D1999time);
    validate ("1999/01/09 9:12 UTC", D1999time2);
    validate ("1999/01/09 09: UTC", D1999time3);
    validate ("1999/01/09 09 UTC", D1999time3);
    validate ("Jan 09 09:12:14 1999 UTC", D1999time);
    validate ("09:12:14 UTC 1999 January 09", D1999time);
  }

  function testAll ()
  {
    validate ("January 09, 1999 10:12:14", D1999time);
    validate ("January 09, 1999", D1999);
    validate ("Wed, 09 January 1999 10:12:14", D1999time);
    validate ("1999-01-09 10:12:14", D1999time);
    validate ("1999/01/09 10:12:14", D1999time);
    validate ("1999/1/09 10:12:14", D1999time);
    validate ("1999/01/9 10:12:14", D1999time);
    validate ("1999/1/9 10:12:14", D1999time);
    validate ("1999/01/09 10:12:14", D1999time);
    validate ("1999/01/09 10:12", D1999time2);
    validate ("1999/01/09 10:", D1999time3);
    validate ("1999/01/09 10", D1999time3);
    validate ("Jan 09 10:12:14 1999", D1999time);
    validate ("10:12:14 1999 January 09", D1999time);
  }

  function testOther ()
  {
    validate ("1999-01-09", D1999);
    validate ("1999/01/09", D1999);
    validate ("01/09/1999", D1999);
    validate ("01/09/99", D1999);
    validate ("1/09/99", D1999);
    validate ("01/9/99", D1999);
    validate ("1/9/99", D1999);
    validate ("01/09/65", D1965);
    validate ("01/09/01", D1901);
    validate ("1999-01-09 12:40 AM", D1999am1 );
    validate ("1999-01-09  1:40am", D1999am2 );
    validate ("1999-01-09 12:40 PM", D1999pm1 );
    validate ("1999-01-09 1:40 pm", D1999pm2 );
  }

  function testIncomplete ()
  {
/* Commented test out because it is not correct during daylight savings time.  FIXME.
    date = new Date();
    hour = 9 - date.getTimezoneOffset()/60;
    min = 12 - date.getTimezoneOffset()%60;

    date.setHours(hour, min, 14, 0);

    validate ("10:12:14", date);
*/
  }

  function testMain ()
  {
    document.open ();
    document.writeln ("<body>");
    testmodule( "dateparse", cvs );
    testAllTZ ();
    testAllTZneg ();
    testAllTZ_UTC ();
    testAll ();
    testOther ();
    testIncomplete ();
    testmodule_finished();
    document.writeln ("</body>");
    document.close ();
  }
