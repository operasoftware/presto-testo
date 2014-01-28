/* -*- mode: C++; tab-width: 4; -*-
 *
 * Date.parse tests.
 *
 * Copyright (C) 2002-2006 Opera Software AS.  All rights reserved.
 *
 * This file is part of the Opera web browser.  It may not be distributed
 * under any circumstances.
 */

var cvs = "$Id: dateParseTest.js 66336 2010-03-30 15:39:19Z hallvord $";

testmodule( "dateparse", cvs );

try {
	expect(57);//number of tests - update this when tests are added!
	var D1999time  = new Date(1999, 0, 09, 10, 12, 14);
	var D1999time2 = new Date(1999, 0, 09, 10, 12,  0);
	var D1999time3 = new Date(1999, 0, 09, 10,  0,  0);
	var D1999time4 = new Date(1999, 0, 09, 0,  0,  0);

	var D1999time_UTC  = new Date( Date.UTC(1999, 0, 09, 09, 12, 14) );
	var D1999time2_UTC = new Date( Date.UTC(1999, 0, 09, 09, 12,  0) );
	var D1999time3_UTC = new Date( Date.UTC(1999, 0, 09, 09,  0,  0) );
	var D1999time4_UTC = new Date( Date.UTC(1999, 0, 09,  0,  0,  0) );

	var D1999      = new Date(1999, 0, 09,  0,  0,  0);
	var D1999_UTC      = new Date(Date.UTC(1999, 0, 09,  0,  0,  0));

	var D1965      = new Date(1965, 0, 09,  0,  0,  0);
	var D1901      = new Date(1901, 0, 09,  0,  0,  0);

	var D1999am1   = new Date(1999, 0, 09,  0, 40,  0);  // 12:40 AM == 00:40
	var D1999am2   = new Date(1999, 0, 09,  1, 40,  0);  //  1:40 AM == 01:40
	var D1999pm1   = new Date(1999, 0, 09, 12, 40,  0);  // 12:40 PM == 12:40
	var D1999pm2   = new Date(1999, 0, 09, 13, 40,  0);  //  1:40 PM == 13:40

	var InvalidDate = "NaN";

	function toDateAndBack(date_str)
	{
		var date = new Date(Date.parse(date_str));
		return date.toUTCString();
	}

	// most of these tests were written to "expect" the time zone GMT+1
	// new Date( .. ) syntax does not really support time zones well.
	// tests that are compared to the output of a new Date( year, month, day )  call should assume current time zone - so we "hardcode" it for some tests..
	var gmtPostfix = getRealGMTPostfix();

	testcase("testAllTZ");

	test ("testAllTZ #1",  toDateAndBack("January 09, 1999 10:12:14 "+gmtPostfix),     D1999time.toUTCString() );
	test ("testAllTZ #2",  toDateAndBack("January 09, 1999 "+gmtPostfix),              D1999.toUTCString() );
	test ("testAllTZ #3",  toDateAndBack("Wed, 09 January 1999 10:12:14 "+gmtPostfix), D1999time.toUTCString() );
	test ("testAllTZ #4",  toDateAndBack("1999-01-09 10:12:14 "+gmtPostfix),           D1999time.toUTCString() );
	test ("testAllTZ #5",  toDateAndBack("1999/01/09 10:12:14 "+gmtPostfix),           D1999time.toUTCString() );
	test ("testAllTZ #6",  toDateAndBack("1999/01/09 10:12 "+gmtPostfix),              D1999time2.toUTCString() );
	test ("testAllTZ #7",  toDateAndBack("1999/01/09 10: "+gmtPostfix),                D1999time3.toUTCString() );
	//(Expected result is changed,see T-46) test ("testAllTZ #8",  toDateAndBack("1999/01/09 10 "+gmtPostfix),                 D1999time4.toUTCString() );
	test ("testAllTZ #8",  toDateAndBack("1999/01/09 10 "+gmtPostfix),                 InvalidDate );
	test ("testAllTZ #9",  toDateAndBack("Jan 09 10:12:14 1999 "+gmtPostfix),          D1999time.toUTCString() );
	test ("testAllTZ #10", toDateAndBack("10:12:14 "+gmtPostfix+" 1999 January 09"),      D1999time.toUTCString() );

	test("testAllTZ #11", (new Date('Sat Jan 09 1999 20:12:14 GMT+1100')).getTime(), D1999time_UTC.getTime());
	test("testAllTZ #12", (new Date('Sat Jan 08 1999 23:12:14 GMT-1000')).getTime(), D1999time_UTC.getTime());


	testcase("testAllTZneg");

	test ("testAllTZneg #1", toDateAndBack("January 09, 1999 08:12:14 GMT-0100"),     D1999time_UTC.toUTCString() );
	test ("testAllTZneg #2", toDateAndBack("Wed, 09 January 1999 08:12:14 GMT-0100"), D1999time_UTC.toUTCString() );
	test ("testAllTZneg #3", toDateAndBack("1999-01-09 08:12:14 GMT-0100"),           D1999time_UTC.toUTCString() );
	test ("testAllTZneg #4", toDateAndBack("1999/01/09 8:12:14 GMT-0100"),            D1999time_UTC.toUTCString() );
	test ("testAllTZneg #5", toDateAndBack("1999/01/09 8:12 GMT-0100"),               D1999time2_UTC.toUTCString() );
	test ("testAllTZneg #6", toDateAndBack("1999/01/09 08: GMT-0100"),                D1999time3_UTC.toUTCString() );
	//(Expected result is changed,see T-46)  test ("testAllTZneg #7", toDateAndBack("1999/01/09 08 GMT-0100"),                 D1999time4_UTC.toUTCString() );
	test ("testAllTZneg #7", toDateAndBack("1999/01/09 08 GMT-0100"),                 InvalidDate );
	test ("testAllTZneg #8", toDateAndBack("Jan 09 08:12:14 1999 GMT-0100"),          D1999time_UTC.toUTCString() );
	test ("testAllTZneg #9", toDateAndBack("08:12:14 GMT-0100 1999 January 09"),      D1999time_UTC.toUTCString() );



	testcase("testAllTZ_UTC");

	test ("testAllTZ_UTC #1", toDateAndBack("January 09, 1999 09:12:14 UTC"),     D1999time_UTC.toUTCString() );
	test ("testAllTZ_UTC #2", toDateAndBack("Wed, 09 January 1999 09:12:14 UTC"), D1999time_UTC.toUTCString() );
	test ("testAllTZ_UTC #3", toDateAndBack("1999-01-09 09:12:14 UTC"),           D1999time_UTC.toUTCString() );
	test ("testAllTZ_UTC #4", toDateAndBack("1999/01/09 9:12:14 UTC"),            D1999time_UTC.toUTCString() );
	test ("testAllTZ_UTC #5", toDateAndBack("1999/01/09 9:12 UTC"),               D1999time2_UTC.toUTCString() );
	test ("testAllTZ_UTC #6", toDateAndBack("1999/01/09 09: UTC"),                D1999time3_UTC.toUTCString() );
	//(Expected result is changed,see T-46)  test ("testAllTZ_UTC #7", toDateAndBack("1999/01/09 09 UTC"),                 D1999time4_UTC.toUTCString() );
	test ("testAllTZ_UTC #7", toDateAndBack("1999/01/09 09 UTC"),                 InvalidDate);
	test ("testAllTZ_UTC #8", toDateAndBack("Jan 09 09:12:14 1999 UTC"),          D1999time_UTC.toUTCString() );
	test ("testAllTZ_UTC #9", toDateAndBack("09:12:14 UTC 1999 January 09"),      D1999time_UTC.toUTCString() );



	testcase("testAll");

	test ("testAll #1",  toDateAndBack("January 09, 1999 10:12:14"),     D1999time.toUTCString() );
	test ("testAll #2",  toDateAndBack("January 09, 1999"),              D1999.toUTCString() );
	test ("testAll #3",  toDateAndBack("Wed, 09 January 1999 10:12:14"), D1999time.toUTCString() );
	test ("testAll #4",  toDateAndBack("1999-01-09 10:12:14"),           D1999time.toUTCString() );
	test ("testAll #5",  toDateAndBack("1999/01/09 10:12:14"),           D1999time.toUTCString() );
	test ("testAll #6",  toDateAndBack("1999/1/09 10:12:14"),            D1999time.toUTCString() );
	test ("testAll #7",  toDateAndBack("1999/01/9 10:12:14"),            D1999time.toUTCString() );
	test ("testAll #8",  toDateAndBack("1999/1/9 10:12:14"),             D1999time.toUTCString() );
	test ("testAll #9",  toDateAndBack("1999/01/09 10:12:14"),           D1999time.toUTCString() );
	test ("testAll #10", toDateAndBack("1999/01/09 10:12"),              D1999time2.toUTCString() );
	test ("testAll #11", toDateAndBack("1999/01/09 10:"),                D1999time3.toUTCString() );
	//(Expected result is changed,see T-46)  test ("testAll #12", toDateAndBack("1999/01/09 10"),                 D1999time4.toUTCString() );
	test ("testAll #12", toDateAndBack("1999/01/09 10"),                 InvalidDate );
	test ("testAll #13", toDateAndBack("Jan 09 10:12:14 1999"),          D1999time.toUTCString() );
	test ("testAll #14", toDateAndBack("10:12:14 1999 January 09"),      D1999time.toUTCString() );



	testcase("testOther");

	test ("testOther #1",  toDateAndBack("1999-01-09"),          D1999.toUTCString() );
	test ("testOther #2",  toDateAndBack("1999/01/09"),          D1999.toUTCString() );
	test ("testOther #3",  toDateAndBack("01/09/1999"),          D1999.toUTCString() );
	test ("testOther #4",  toDateAndBack("01/09/99"),            D1999.toUTCString() );
	test ("testOther #5",  toDateAndBack("1/09/99"),             D1999.toUTCString() );
	test ("testOther #6",  toDateAndBack("01/9/99"),             D1999.toUTCString() );
	test ("testOther #7",  toDateAndBack("1/9/99"),              D1999.toUTCString() );
	test ("testOther #8",  toDateAndBack("01/09/65"),            D1965.toUTCString() );
	test ("testOther #9",  toDateAndBack("01/09/01"),            D1901.toUTCString() );
	test ("testOther #10", toDateAndBack("1999-01-09 12:40 AM"), D1999am1.toUTCString() );
	test ("testOther #11", toDateAndBack("1999-01-09  1:40am"),  D1999am2.toUTCString() );
	test ("testOther #12", toDateAndBack("1999-01-09 12:40 PM"), D1999pm1.toUTCString() );
	test ("testOther #13", toDateAndBack("1999-01-09 1:40 pm"),  D1999pm2.toUTCString() );


	// Date tests may need to know whether they are being run in a locale where Dayligh Saving Time affects the current time
	// Below method thanks to http://javascript.about.com/library/bldst.htm
	function isDST(date) {
		var jan = new Date(date.getFullYear(), 0, 1);
		var jul = new Date(date.getFullYear(), 6, 1);
		var stdTimezoneOffset = Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
		return date.getTimezoneOffset() < stdTimezoneOffset;
	}
	function getRealGMTPostfix(){
		// one option is to assume January 1st will always be non-DST (makes all tests wrong in much of the the Southern hemisphere) and do this:
		//return (new Date(2010, 1, 1)).toString().substr(-5);
		// another option that should work with the southern hemisphere too:
		var jan = new Date(2010, 0, 1);
		var jul = new Date(2010, 6, 1);
		return ( jul.getTimezoneOffset() < jan.getTimezoneOffset() ) ? jan.toString().substr(-5) : jul.toString().substr(-5);
	}

} catch (e) { exception(e); }

testmodule_finished();
