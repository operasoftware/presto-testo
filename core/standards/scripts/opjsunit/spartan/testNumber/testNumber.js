function testProperties_0() {
  assertDefined(Number.prototype.constructor);
}

function testInstance_0() {
  var n = new Number(128);
  assertTrue(n instanceof Number);
}

function testToString_0() {
  var n = new Number(128);
  assertEquals("128", n.toString());
}

function testToString_1() {
  var n = new Number(NaN);
  assertEquals("NaN", n.toString());
}

function testToString_2() {
  var n = new Number(NaN);
  assertEquals("NaN", n.toString(16));
}

function testToString_3() {
  var n = new Number(Number.NEGATIVE_INFINITY);
  assertEquals("-Infinity", n.toString());
  assertEquals("-Infinity", n.toString(8));
}

function testToString_4() {
  var n = new Number(Number.NEGATIVE_INFINITY);
  assertEquals("-Infinity", n.toString());
  assertEquals("-Infinity", n.toString(8));
}

function testToString_5() {
  var n = new Number(Number.POSITIVE_INFINITY);
  assertEquals("Infinity", n.toString());
  assertEquals("Infinity", n.toString(7));
}

function testToString_6() {
  var n = new Number(128);
  assertEquals("128", n.toString());
}

function testToString_7() {
  var n = new Number(128);
  assertEquals("128", n.toString(undefined));
}

/*Per sepc any string may be returned when radix != 10 or undefined
 * but I assume that returning the string representation of the number
 * expressed with base radix is desirable. Also there is no clue on how to
 * handle invalid values for radix
 */


function testToString_8() {
  var n = new Number(128);
  assertEquals("10000000", n.toString(2));
}

function testToString_9() {
  var n = new Number(128);
  assertEquals("200", n.toString(8));
}

function testToString_10() {
  var n = new Number(128);
  assertEquals("128", n.toString(10));
}

function testToString_10() {
  var n = new Number(128);
  assertEquals("80", n.toString(16));
}

function testToString_11() {
  var n = new Number(128);
  assertEquals("40", n.toString(32));
}

function testToString_12() {
  var n = new Number(128);
  assertEquals("3k", n.toString(36));
}

//Number too large to fit in a 32bit int but smaller than a double
function testToString_13() {
  var n = new Number(1234567890123);
  assertEquals("1234567890123", n.toString());
}

function testToString_14() {
  var n = new Number(1234567890123);
  assertEquals("1234567890123", n.toString(undefined));
}

function testToString_15() {
  var n = new Number(1234567890123);
  assertEquals("21756176602313", n.toString(8));
}

function testToString_16() {
  var n = new Number(1234567890123);
  assertEquals("1234567890123", n.toString(10));
}

function testToString_17() {
  var n = new Number(1234567890123);
  assertEquals("11f71fb04cb", n.toString(16));
}

function testToString_18() {
  var n = new Number(1234567890123);
  assertEquals("13tovm16b", n.toString(32));
}

function testToString_19() {
  var n = new Number(1234567890123);
  assertEquals("13tovm16b", n.toString(32));
}

function testToString_20() {
  var n = new Number(1234567890123);
  assertEquals("13tovm16b", n.toString(32));
}

function testToString_22() {
  var n = new Number(1234567890123);
  assertEquals("fr5hugnf", n.toString(36));
}

function testToString_23() {
  var n = new Number(1234567890123);
  assertEquals("fr5hugnf", n.toString(36));
}

// Integers not representable in a double
function testToString_24() {
  var n = new Number(12345678901231234567890123);
  assertEquals("1.2345678901231235e+25", n.toString());
}

function testToString_25() {
  var n = new Number(12345678901231234567890123);
  assertEquals("1.2345678901231235e+25", n.toString(undefined));
}

function testToString_26() {
  var n = new Number(12345678901231234567890123);
  assertEquals("5066231140423672120000000000", n.toString(8));
}

function testToString_27() {
  var n = new Number(12345678901231234567890123);
  assertEquals("1.2345678901231235e+25", n.toString(10));
}

function testToString_28() {
  var n = new Number(12345678901231234567890123);
  assertEquals("a364c98227ba280000000", n.toString(16));
}

function testToString_29() {
  var n = new Number(12345678901231234567890123);
  assertEquals("a6p69g8jrka000000", n.toString(32));
}

function testToString_30() {
  //This test is maybe unfair could just test that parseInt(n.toString) has
  //a sensible value
  var n = new Number(12345678901231234567890123);
  assertEquals("1judzchqv80ao7q4g", n.toString(36));
}

function tetsToString_31() {
  var n = new Number(-128);
  assertEquals("-128", n.toString());
}

function tetsToString_32() {
  var n = new Number(-128);
  assertEquals("-128", n.toString(undefined));
}

function tetsToString_33() {
  var n = new Number(-128);
  assertEquals("-10000000", n.toString(2));
}

function tetsToString_34() {
  var n = new Number(-128);
  assertEquals("-200", n.toString(8));
}

function tetsToString_35() {
  var n = new Number(-128);
  assertEquals("-80", n.toString(16));
}

function tetsToString_35() {
  var n = new Number(-128);
  assertEquals("-40", n.toString(32));
}

function tetsToString_36() {
  var n = new Number(-128);
  assertEquals("-3k", n.toString(32));
}

function tetsToString_37() {
  var n = new Number(-0.0);
  assertEquals("0", n.toString());
}

function tetsToString_38() {
  var n = new Number(0.0);
  assertEquals("0", n.toString());
}

function tetsToString_38() {
  var n = new Number(0.0);
  assertEquals("0", n.toString(17));
}

/*
 * At this point it would be really nice to write some tests for what happens
 * if the radix is out of the range 2-36. However SpiderMonkey throws Error,
 * futhark assumes radix=10 and Squirrelfish throws RangeError
 */

function testToString_39() {
  var n = new Number(128);
  try {
    n.toString(37);
  } catch(e) {

  }
  //the pass condition is not crashing :(
}

function testToString_40() {
  var n = new Number(128);
  try {
    n.toString(0);
  } catch(e) {

  }
  //the pass condition is not crashing :(
}

function testToString_41() {
  var n = new Number(128);
  try {
    n.toString(-1);
  } catch(e) {

  }
  //the pass condition is not crashing :(
}

function testToString_42() {
  var n = new Number(128);
  var r = new Number(32);
  assertEquals("40", n.toString(r));
}

function testToString_43() {
  //toString is not generic
  var x = new Object();
  x.toString = Number.prototype.toString();
  assertThrows(TypeError(), x.toString);
}

function testToString_44() {
  assertEquals("1e+23", 1e23.toString());
}
testToString_44.metadata = {
  bug:"CARAKAN-214"
};

function testToString_45() {
  assertEquals("1e-23", 1E-23.toString());
}

/*
 * Some simple cases that should have been near the top
 */



function testToString_46() {
  assertEquals("1", (1).toString());
}

function testToString_47() {
  assertEquals("100", (100).toString());
}

function testToString_48() {
  assertEquals("1.2", (1.2).toString());
}

function testToString_49() {
  assertEquals("1.23", (1.23).toString());
}

function testToString_50() {
  assertEquals("1.203", (1.203).toString());
}

function testToString_51() {
  assertEquals("1.2345", (1.2345).toString());
}

function testToString_52() {
  assertEquals("1.23456789", (1.23456789).toString());
}

function testToString_53() {
  assertEquals("1.000000000000001", (1.000000000000001).toString());
}

function testToString_54() {
  assertEquals("-1", (-1).toString());
}

function testToString_55() {
  assertEquals("-100", (-100).toString());
}

function testToString_56() {
  assertEquals("-1.2", (-1.2).toString());
}

function testToString_57() {
  assertEquals("-1.23", (-1.23).toString());
}

function testToString_58() {
  assertEquals("-1.203", (-1.203).toString());
}

function testToString_59() {
  assertEquals("-1.2345", (-1.2345).toString());
}

function testToString_60() {
  assertEquals("-1.23456789", (-1.23456789).toString());
}

function testToString_61() {
  assertEquals("-1.000000000000001", (-1.000000000000001).toString());
}

function testToString_62() {
  assertEquals("0.1", (0.1).toString());
}

function testToString_64() {
  assertEquals("0.12", (0.12).toString());
}

function testToString_65() {
  assertEquals("0.123", (0.123).toString());
}

function testToString_66() {
  assertEquals("0.123456789", (0.123456789).toString());
}

function testToString_67() {
  assertEquals("0.00001", (0.00001).toString());
}

function testToString_68() {
  assertEquals("-0.1", (-0.1).toString());
}

function testToString_69() {
  assertEquals("-0.12", (-0.12).toString());
}

function testToString_70() {
  assertEquals("-0.123", (-0.123).toString());
}

function testToString_71() {
  assertEquals("-0.123456789", (-0.123456789).toString());
}

function testToString_72() {
  assertEquals("-0.00001", (-0.00001).toString());
}

function testToString_73() {
  assertEquals("1e-7", (0.0000001).toString());
}

function testToString_74() {
  assertEquals("1.2e-7", (0.00000012).toString());
}

function testToString_75() {
  assertEquals("1.23e-7", (0.000000123).toString());
}

function testToString_76() {
  assertEquals("-1e-7", (-0.0000001).toString());
}

function testToString_77() {
  assertEquals("-1.2e-7", (-0.00000012).toString());
}

function testToString_78() {
  assertEquals("-1.23e-7", (-0.000000123).toString());
}


/*
 * Brosers support string radixes
 */

function testToStringStringRadix_0() {
    var n = new Number(10);
    assertEquals("20", n.toString("5"));
}

function testToStringStringRadix_1() {
    var n = new Number(10);
    assertEquals("a", n.toString("0x10"));
}

function testToStringStringRadix_2() {
  var n = new Number(10);
  var r = new String("16");
  assertEquals("a", n.toString(r));
}

/*
 * Spidermonkey, Squirrelfish, V8 have the behaviour that
 * any object with .toString defined can be passed as a radix. futhark
 * assumes these objects are equivalent to base 10
 */

function testToStringObjectRadix_0() {
  function a() {
    this.value = "2";
  }
  a.prototype = new Object();
  a.prototype.toString = function () {
    return this.value;
  };
  var n = new Number(8);
  var b = new a();
  assertEquals("1000", n.toString(b));
}

function testToStringObjectRadix_1() {
  function a() {
    this.value = "0x20";
  }
  a.prototype = new Object();
  a.prototype.toString = function () {
    return this.value;
  };
  var n = new Number(32);
  var b = new a();
  assertEquals("10", n.toString(b));
}

/*
 * Radixes with a fractional part are converted to int in Spidermonkey, futhark
 * v8, Squirrelfish
 */

function testToStringFractionalRadix_0() {
  var n = new Number(10);
  assertEquals("20", n.toString(5.5));
}

function testToStringFractionalRadix_1() {
  var n = new Number(10);
  assertEquals("20", n.toString(5.999999999));
}

function testValueOf_0() {
  var n = new Number(Math.PI);
  assertEquals(Math.PI, n.valueOf());
}

function testValueOf_1() {
  var x = new Object();
  x.valueOf = Number.prototype.valueOf;
  assertThrows(TypeError(), x.valueOf);
}