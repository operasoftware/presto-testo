function testFunction_0() {
  var now = Date();
  assertEquals("string", typeof now);
}

function testFunction_1() {
  var now = Date();
  assertEquals((new Date()).toString(), now);
}

function testFunction_2() {
  var now = Date(1066, 12, 25);
  assertEquals((new Date()).toString(), now);
}

function testFunction_3() {
  var now = Date(1066, 13, 25, 23, 66);
  assertEquals((new Date()).toString(), now);
}

function testConstructor_1() {
  var d = new Date();
  assertEquals("number", typeof d.valueOf());
}

function testConstructor_2() {
  var d = new Date();
  assertEquals("number", typeof d.valueOf());
}

function testConstructor_3() {
  var d = new Date(0);
  assertEquals(0, d.valueOf());
}

function testConstructor_4() {
  var x = Number(0);
  var d = new Date(x);
  assertEquals((new Date(0)).toString(), d.toString());
}

function testConstrutor_5() {
  var d = new Date(Number.POSITIVE_INFINITY);
  assertNaN(d.valueOf());
}

function testConstrutor_6() {
  var d = new Date(8.6401E15);
  assertNaN(d.valueOf());
}

function testConstuctor_7() {
  var x = new Date(1234567);
  assertEquals(x.toString(), (new Date(x.toString())).toString());
}

function testConstuctor_8() {
  var x = new Date(1234567);
  assertEquals(x.toString(), (new Date(x.toUTCString())).toString());
}

function testConstuctor_9() {
  //Need to set the milliseconds amount here to 0
  var x = new Date(1234000);
  assertEquals(x.valueOf(), (new Date(x.toString())).valueOf());
}

function testConstructor_10() {
  var x = new Date(2009, 10);
  assertEquals(2009, x.getFullYear());
  assertEquals(10, x.getMonth());
  assertEquals(1, x.getDate());
  assertEquals(0, x.getHours());
  assertEquals(0, x.getMinutes());
  assertEquals(0, x.getSeconds());
  assertEquals(0, x.getMilliseconds());
}

function testConstructor_11() {
  var x = new Date(2010, 11, 12, 13, 14, 15, 16);
  assertEquals(2010, x.getFullYear());
  assertEquals(11, x.getMonth());
  assertEquals(12, x.getDate());
  assertEquals(13, x.getHours());
  assertEquals(14, x.getMinutes());
  assertEquals(15, x.getSeconds());
  assertEquals(16, x.getMilliseconds());
}

function testConstructor_12() {
  var x = new Date(99, 11, 30);
  assertEquals(1999, x.getFullYear());
}

function testConstructor_13() {
  var x = new Date(NaN);
  assertNaN(x.valueOf());
}

function testConstructor_14() {
  var x = new Date(NaN, NaN, NaN, NaN, NaN, NaN, NaN);
  assertNaN(x.valueOf());
}

function testConstructor_15() {
  var x = new Date(2009, 11, 1, Number.POSITIVE_INFINITY);
  assertNaN(x.valueOf());
}

function testConstructor_16() {
  var x = new Date(2009.5, 11.1, 1.9, 12.4, 13.8, 14.6, 23.4);
  assertEquals(2009, x.getFullYear());
  assertEquals(11, x.getMonth());
  assertEquals(1, x.getDate());
  assertEquals(12, x.getHours());
  assertEquals(13, x.getMinutes());
  assertEquals(14, x.getSeconds());
  assertEquals(23, x.getMilliseconds());
}

function testConstructor_17() {
  var x = new Date(2000, 25);
  assertEquals(2002, x.getFullYear());
  assertEquals(1, x.getMonth());
}

function testConstructor_18() {
  var x = new Date(0, 0, 0, 30, 100, 120, 1200);
  assertEquals(7, x.getHours());
  assertEquals(42, x.getMinutes());
  assertEquals(1, x.getSeconds());
  assertEquals(200, x.getMilliseconds());
}

function testConstructor_19() {
  var x = new Date(-1, -1, -1);
  assertEquals(-2, x.getFullYear());
  assertEquals(10, x.getMonth());
  assertEquals(29, x.getDate());
}

function testConstructor_20() {
  var x = new Date(0, 0, 0, -1, -1, -1, -1);
  assertEquals(1899, x.getFullYear());
  assertEquals(11, x.getMonth());
  assertEquals(30, x.getDate());
  assertEquals(22, x.getHours());
  assertEquals(58, x.getMinutes());
  assertEquals(58, x.getSeconds());
  assertEquals(999, x.getMilliseconds());
}

function testConstructor_21() {
  var x = new Date("2012", "6", "7");
  assertEquals(2012, x.getFullYear());
  assertEquals(6, x.getMonth());
  assertEquals(7, x.getDate());
}

function testConstructor_22() {
  var x = new Date("2012", "6", "7", "11", "12", "13", "14");
  assertEquals(2012, x.getFullYear());
  assertEquals(6, x.getMonth());
  assertEquals(7, x.getDate());
  assertEquals(11, x.getHours());
  assertEquals(12, x.getMinutes());
  assertEquals(13, x.getSeconds());
  assertEquals(14, x.getMilliseconds());
}

function testPrototypeConstructor_0() {
  assertEquals(Date, Date.prototype.constructor);
}
testPrototypeConstructor_0.metadata = {
  bug:"CARAKAN-67"
};

function testPrototype_1() {
  assertFalse(delete Date.prototype);
}

function testPrototype_1() {
  assertDontEnum(Date, "prototype");
}

function testPrototype_2() {
  var original = Date.prototype;
  Date.prototype = function() {};
  assertEquals(original, Date.prototype);
}

function testParse_0() {
  var d = new Date(1234, 56, 78, 90, 10, 11, 0);
  assertEquals(d.valueOf(), Date.parse(d.toString()).valueOf());
}

function testParse_1() {
  var d = new Date(1234, 56, 78, 90, 10, 11, 0);
  assertEquals(d.valueOf(), Date.parse(d.toUTCString()).valueOf());
}


function testUTC_0() {
  assertEquals(7, Date.UTC.length);
}

function testUTC_1() {
  assertEquals(1, Date.UTC(1970,0,1,0,0,0,1));
}

function testUTC_2() {
  assertEquals(1000, Date.UTC(1970,0,1,0,0,1,0));
}

function testUTC_3() {
  assertEquals(60000, Date.UTC(1970,0,1,0,1,0,0));
}

function testUTC_4() {
  assertEquals(60*60000, Date.UTC(1970,0,1,1,0,0,0));
}

function testUTC_5() {
  assertEquals(24*60*60000, Date.UTC(1970,0,2,0,0,0,0));
}

function testUTC_6() {
  assertEquals(31*24*60*60000, Date.UTC(1970,1,1,0,0,0,0));
}

function testUTC_7() {
  assertEquals(365*24*60*60000, Date.UTC(1971,0,1,0,0,0,0));
}

function testUTC_8() {
  assertNaN(Date.UTC(1971,0,NaN,0,0,0,0));
}

function testUTC_8() {
  //1972 is a leap year
  assertEquals((366+2*365)*24*60*60000,  Date.UTC(1973,0,1,0,0,0,0));
}

function testUTC_9() {
  //Yesr 2000 is a leap year
  assertEquals(978307200000,  Date.UTC(2001,0,1,0,0,0,0));
}

function testUTC_10() {
  //Year 2100 is not a leap year
  assertEquals(4133980800000,  Date.UTC(2101,0,1,0,0,0,0));
}

function testUTC_11() {
  assertEquals(-1001,  Date.UTC(1970,0,1,0,0,-1,-1));
}

function testUTC_12() {
  assertEquals(978307200000, Date.UTC("2001", 0));
}

function testToString_0() {
  var a = new Date()
  assertEquals("string", typeof a.toString());
}

function testToTimeString_0() {
  var a = new Date()
  assertEquals("string", typeof a.toTimeString());
}

function testToLocaleString_0() {
  var a = new Date()
  assertEquals("string", typeof a.toLocaleString());
}

function testToLocaleString_1() {
  var a = new Date();
  var s = a.toLocaleString();

  // check that the year isn't last..
  var ms = s.match(/.* (\d+)$/);
  assertTrue(ms === null || ms[1] != a.getFullYear().toString());
}
testToLocaleString_1.metadata={
  bug:'CORE-48742'
}

function testToLocaleDateString_0() {
  var a = new Date()
  assertEquals("string", typeof a.toLocaleDateString());
}

function testToLocaleTimeString_0() {
  var a = new Date()
  assertEquals("string", typeof a.toLocaleTimeString());
}

function testValueOf_0() {
  var a = new Date(0)
  assertEquals(0, a.valueOf());
}

function testValueOf_1() {
  var a = new Date(Date.UTC(1970, 0, 1, 0, 0, 1));
  assertEquals(1000, a.valueOf());
}

function testGetTime_0() {
  var a = new Date(0)
  assertEquals(0, a.getTime());
}

function testGetTime_1() {
  var a = new Date(Date.UTC(1970, 0, 1, 0, 0, 1));
  assertEquals(1000, a.getTime());
}

function testDateConstructorLength_0(){
  assertEquals( 7, Date.length );
}
testDateConstructorLength_0.metadata={
  bug:'CORE-16214'
}

function testDateConstructor_0(){
  assertTrue((new Date(-3509827290000001)).toString().indexOf("Jan") >= 0);
}
testDateConstructor_0.metadata={
  bug:'CORE-45645'
};

function testToISOString_0() {
  var a = new Date(1968, 1, 1, 1, 1, 1, -15);
  assertEquals("1968-02-01T00:01:00.985Z", a.toISOString());

  a = new Date(-1);
  assertEquals("1969-12-31T23:59:59.999Z", a.toISOString());
}
testToISOString_0.metadata = {
  bug: 'CORE-48164'
};

function testToISOString_1() {
  var a = new Date(-8.64e15);
  assertEquals("-271821-04-20T00:00:00.000Z", a.toISOString());

  a = new Date(8.64e15);
  assertEquals("+275760-09-13T00:00:00.000Z", a.toISOString());

  a = new Date(-621987552e5);
  assertEquals("-000001-01-01T00:00:00.000Z", a.toISOString());
}
testToISOString_1.metadata = {
  bug: 'CORE-48164'
};
