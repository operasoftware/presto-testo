/* -*- mode: C++; tab-width: 4; -*- 
 *
 * Date.parse tests.
 *
 * Copyright (C) 2002-2006 Opera Software AS.  All rights reserved.
 *
 * This file is part of the Opera web browser.  It may not be distributed
 * under any circumstances.
 */

var cvs = "$Id: dateParseTest.js 9522 2006-11-07 03:00:03Z hallvord $";

testmodule( "dateparse", cvs );

try {

	var D1999time  = new Date(1999, 0, 09, 10, 12, 14).toString ();
	var D1999time2 = new Date(1999, 0, 09, 10, 12,  0).toString ();
	var D1999time3 = new Date(1999, 0, 09, 10,  0,  0).toString ();

	var D1999      = new Date(1999, 0, 09,  0,  0,  0).toString();
	var D1965      = new Date(1965, 0, 09,  0,  0,  0).toString();
	var D1901      = new Date(1901, 0, 09,  0,  0,  0).toString();

	var D1999am1   = new Date(1999, 0, 09,  0, 40,  0).toString();  // 12:40 AM == 00:40
	var D1999am2   = new Date(1999, 0, 09,  1, 40,  0).toString();  //  1:40 AM == 01:40
	var D1999pm1   = new Date(1999, 0, 09, 12, 40,  0).toString();  // 12:40 PM == 12:40
	var D1999pm2   = new Date(1999, 0, 09, 13, 40,  0).toString();  //  1:40 PM == 13:40


	function toDateAndBack(date_str)
	{
		var date = new Date(Date.parse(date_str));
		return date.toString();
	}



	testcase("testAllTZ");

	test ("testAllTZ #1",  toDateAndBack("January 09, 1999 10:12:14 GMT+0100"),     D1999time );
	test ("testAllTZ #2",  toDateAndBack("January 09, 1999 GMT+0100"),              D1999     );
	test ("testAllTZ #3",  toDateAndBack("Wed, 09 January 1999 10:12:14 GMT+0100"), D1999time );
	test ("testAllTZ #4",  toDateAndBack("1999-01-09 10:12:14 GMT+0100"),           D1999time );
	test ("testAllTZ #5",  toDateAndBack("1999/01/09 10:12:14 GMT+0100"),           D1999time );
	test ("testAllTZ #6",  toDateAndBack("1999/01/09 10:12 GMT+0100"),              D1999time2);
	test ("testAllTZ #7",  toDateAndBack("1999/01/09 10: GMT+0100"),                D1999time3);
	test ("testAllTZ #8",  toDateAndBack("1999/01/09 10 GMT+0100"),                 D1999time3);
	test ("testAllTZ #9",  toDateAndBack("Jan 09 10:12:14 1999 GMT+0100"),          D1999time );
	test ("testAllTZ #10", toDateAndBack("10:12:14 GMT+0100 1999 January 09"),      D1999time );



	testcase("testAllTZneg");

	test ("testAllTZneg #1", toDateAndBack("January 09, 1999 08:12:14 GMT-0100"),     D1999time );
	test ("testAllTZneg #2", toDateAndBack("Wed, 09 January 1999 08:12:14 GMT-0100"), D1999time );
	test ("testAllTZneg #3", toDateAndBack("1999-01-09 08:12:14 GMT-0100"),           D1999time );
	test ("testAllTZneg #4", toDateAndBack("1999/01/09 8:12:14 GMT-0100"),            D1999time );
	test ("testAllTZneg #5", toDateAndBack("1999/01/09 8:12 GMT-0100"),               D1999time2);
	test ("testAllTZneg #6", toDateAndBack("1999/01/09 08: GMT-0100"),                D1999time3);
	test ("testAllTZneg #7", toDateAndBack("1999/01/09 08 GMT-0100"),                 D1999time3);
	test ("testAllTZneg #8", toDateAndBack("Jan 09 08:12:14 1999 GMT-0100"),          D1999time );
	test ("testAllTZneg #9", toDateAndBack("08:12:14 GMT-0100 1999 January 09"),      D1999time );



	testcase("testAllTZ_UTC");

	test ("testAllTZ_UTC #1", toDateAndBack("January 09, 1999 09:12:14 UTC"),     D1999time );
	test ("testAllTZ_UTC #2", toDateAndBack("Wed, 09 January 1999 09:12:14 UTC"), D1999time );
	test ("testAllTZ_UTC #3", toDateAndBack("1999-01-09 09:12:14 UTC"),           D1999time );
	test ("testAllTZ_UTC #4", toDateAndBack("1999/01/09 9:12:14 UTC"),            D1999time );
	test ("testAllTZ_UTC #5", toDateAndBack("1999/01/09 9:12 UTC"),               D1999time2);
	test ("testAllTZ_UTC #6", toDateAndBack("1999/01/09 09: UTC"),                D1999time3);
	test ("testAllTZ_UTC #7", toDateAndBack("1999/01/09 09 UTC"),                 D1999time3);
	test ("testAllTZ_UTC #8", toDateAndBack("Jan 09 09:12:14 1999 UTC"),          D1999time );
	test ("testAllTZ_UTC #9", toDateAndBack("09:12:14 UTC 1999 January 09"),      D1999time );



	testcase("testAll");

	test ("testAll #1",  toDateAndBack("January 09, 1999 10:12:14"),     D1999time );
	test ("testAll #2",  toDateAndBack("January 09, 1999"),              D1999     );
	test ("testAll #3",  toDateAndBack("Wed, 09 January 1999 10:12:14"), D1999time );
	test ("testAll #4",  toDateAndBack("1999-01-09 10:12:14"),           D1999time );
	test ("testAll #5",  toDateAndBack("1999/01/09 10:12:14"),           D1999time );
	test ("testAll #6",  toDateAndBack("1999/1/09 10:12:14"),            D1999time );
	test ("testAll #7",  toDateAndBack("1999/01/9 10:12:14"),            D1999time );
	test ("testAll #8",  toDateAndBack("1999/1/9 10:12:14"),             D1999time );
	test ("testAll #9",  toDateAndBack("1999/01/09 10:12:14"),           D1999time );
	test ("testAll #10", toDateAndBack("1999/01/09 10:12"),              D1999time2);
	test ("testAll #11", toDateAndBack("1999/01/09 10:"),                D1999time3);
	test ("testAll #12", toDateAndBack("1999/01/09 10"),                 D1999time3);
	test ("testAll #13", toDateAndBack("Jan 09 10:12:14 1999"),          D1999time );
	test ("testAll #14", toDateAndBack("10:12:14 1999 January 09"),      D1999time );



	testcase("testOther");

	test ("testOther #1",  toDateAndBack("1999-01-09"),          D1999   );
	test ("testOther #2",  toDateAndBack("1999/01/09"),          D1999   );
	test ("testOther #3",  toDateAndBack("01/09/1999"),          D1999   );
	test ("testOther #4",  toDateAndBack("01/09/99"),            D1999   );
	test ("testOther #5",  toDateAndBack("1/09/99"),             D1999   );
	test ("testOther #6",  toDateAndBack("01/9/99"),             D1999   );
	test ("testOther #7",  toDateAndBack("1/9/99"),              D1999   );
	test ("testOther #8",  toDateAndBack("01/09/65"),            D1965   );
	test ("testOther #9",  toDateAndBack("01/09/01"),            D1901   );
	test ("testOther #10", toDateAndBack("1999-01-09 12:40 AM"), D1999am1);
	test ("testOther #11", toDateAndBack("1999-01-09  1:40am"),  D1999am2);
	test ("testOther #12", toDateAndBack("1999-01-09 12:40 PM"), D1999pm1);
	test ("testOther #13", toDateAndBack("1999-01-09 1:40 pm"),  D1999pm2);



	////  Commented test out because it is not correct during daylight savings time.  FIXME.
	//  date = new Date();
	//  hour = 9 - date.getTimezoneOffset()/60;
	//  min = 12 - date.getTimezoneOffset()%60;
	//  
	//  date.setHours(hour, min, 14, 0);
	//  
	//  test ("???", "10:12:14", date);

} catch (e) { exception(e); }

testmodule_finished();
