function testParseInt_0() {
  assertEquals(10, parseInt('10'));
}

function testParseInt_1() {
  assertEquals(-10, parseInt('-10'));
}

function testParseInt_2() {
  assertEquals(10, parseInt('  \n\t  10'));
}

function testParseInt_3() {
  assertEquals(-10, parseInt('  \n\t  -10'));
}

function testParseInt_4() {
  assertEquals(-10, parseInt('  \n\t -10    '));
}

function testParseInt_5() {
  assertEquals(10, parseInt('10aab0'));
}

function testParseInt_6() {
  assertEquals(10, parseInt('10 0'));
}

function testParseInt_7() {
  assertNaN(parseInt('a10 0'));
}

function testParseInt_8() {
  assertNaN(parseInt('-a10 0'));
}

function testParseInt_9() {
  assertNaN(parseInt(''));
}

function testParseInt_10() {
  assertNaN(parseInt(undefined));
}

function testParseInt_11() {
  assertNaN(parseInt(NaN));
}

function testParseInt_12() {
  assertNaN(parseInt(true));
}

function testParseInt_12() {
  assertEquals(0, parseInt(-0));
}

function testParseInt_13() {
  assertNaN(parseInt(Number.POSITIVE_INFINITY));
}

function testParseInt_14() {
  assertNaN(parseInt(Number.NEGATIVE_INFINITY));
}

function testParseInt_15() {
  var x = new Object();
  x.toString = function () {return "3";};
  assertEquals(3, parseInt(x));
}

function testParseInt_16() {
  var x = new Object();
  x.toString = undefined;
  x.valueOf = function () {return 3;};
  assertEquals(3, parseInt(x));
}

function testParseInt_17() {
  var x = new Object();
  x.toString = function () {return 1;};
  x.valueOf = function () {return 2;};
  assertEquals(1, parseInt(x));
}

function testParseInt_18() {
  var x = new Object();
  x.toString = "1";
  x.valueOf = function () {return 2;};
  assertEquals(2, parseInt(x));
}

function testParseInt_20() {
  assertEquals(3, parseInt("3.14"));
}

function testParseInt_21() {
  assertEquals(3, parseInt("3.14"));
}

function testParseInt_22() {
  assertEquals(16, parseInt("0x10"));
}

function testParseInt_23() {
  assertEquals(16, parseInt("0X10"));
}

function testParseInt_24() {
  assertEquals(16, parseInt("10", 16));
}

function testParseInt_25() {
  assertEquals(-16, parseInt("-10", 16));
}

function testParseInt_26() {
  assertEquals(15, parseInt("F", 16));
}

function testParseInt_27() {
  assertEquals(10, parseInt("10", undefined));
}

function testParseInt_28() {
  assertEquals(10, parseInt("10", 0));
}

function testParseInt_29() {
  assertEquals(10, parseInt("10", NaN));
}

function testParseInt_30() {
  assertEquals(10, parseInt("10", Number.POSITIVE_INFINITY));
}

function testParseInt_31() {
  assertEquals(9, parseInt("10", "009"));
}

function testParseInt_32() {
  assertEquals(10, parseInt("10", ""));
}

function testParseInt_33() {
  assertEquals(2, parseInt(10, Math.pow(2,32)+2));
}

function testParseInt_34() {
  assertNaN(parseInt(10, -1));
}

function testParseInt_35() {
  var x = new Object();
  x.valueOf = function() {return 2;};
  assertEquals(2, parseInt(10, x));
}

function testParseInt_36() {
  assertEquals(17, parseInt("189", 9));
}

function testParseInt_37() {
  assertEquals(69, parseInt("1yz", 35));
}

function testParseInt_38() {
  assertEquals(0, parseInt("0x10", 9));
}

function testParseInt_39() {
  assertEquals(42804, parseInt("0x10", 36));
}

function testParseInt_40() {
  assertEquals(86464843759093, parseInt(undefined, 36));
}

function testParseInt_41() {
  assertEquals(1112745, parseInt(null, 36));
}

function testParseInt_42() {
  assertNaN(parseInt("0X"));
}

function testParseInt_43() {
  assertEquals(0, parseInt("0Y"));
}

function testParseInt_44() {
  assertNaN(parseInt("0XY"));
}

function testParseInt_45() {
  assertEquals(0, parseInt("0X0Y"));
}

function testParseInt_46() {
  assertNaN(parseInt());
}
testParseInt_46.metadata = {
  bug:"CARAKAN-153"
};

function testParseInt_47() {
  assertNaN(parseInt(parseInt));
}
testParseInt_47.metadata = {
  bug:"CARAKAN-171"
};

function testParseInt_48() {
  assertEquals(1, parseInt("1e1"));
}
testParseInt_48.metadata = {
  bug:"CARAKAN-372"
};

function testParseInt_49() {
  assertEquals(1, parseInt("1e+21"));
}
testParseInt_49.metadata = {
  bug:"CARAKAN-372"
};

function testParseInt_50() {
  assertEquals(-1, parseInt("-1e+21"));
}
testParseInt_50.metadata = {
  bug:"CARAKAN-372"
};

function testParseInt_51() {
  assertEquals(12, parseInt("12e11"));
}
testParseInt_51.metadata = {
  bug:"CARAKAN-372"
};

function testParseInt_52() {
  assertEquals(1, parseInt("1E+21"));
}
testParseInt_52.metadata = {
  bug:"CARAKAN-372"
};

function testParseInt_53() {
  assertEquals(-12, parseInt("-12E+21"));
}
testParseInt_53.metadata = {
  bug:"CARAKAN-372"
};

function testParseInt_54() {
  var val = 3 * Math.pow(10,-6);
  assertTrue(null === val.toString().match('[eE]'));
  assertTrue(0 == parseInt(val));
  var val = 3 * Math.pow(10,-7);
  assertTrue(null !== val.toString().match('[eE]'));
  assertTrue(3 == parseInt(val));

  var val = 3 * Math.pow(10,20);
  assertTrue(null === val.toString().match('[eE]'));
  assertTrue(val == parseInt(val));
  var val = 3 * Math.pow(10,21);
  assertTrue(null !== val.toString().match('[eE]'));
  assertTrue(3 == parseInt(val));
}
testParseInt_54.metadata = {
  bug:"CORE-40742"
};

function testParseFloat_0() {
  assertEquals(3.14, parseFloat("3.14"));
}

function testParseFloat_1() {
  assertEquals(3.14, parseFloat("    \n \t 3.14"));
}

function testParseFloat_2() {
  assertEquals(3.14, parseFloat("    \n \t 3.14a"));
}

function testParseFloat_3() {
  assertEquals(3.14, parseFloat("    \n \t 3.14a"));
}

function testParseFloat_4() {
  assertEquals(3.14, parseFloat("03.14a"));
}

function testParseFloat_5() {
  assertEquals(3.14, parseFloat("03.14a"));
}

function testParseFloat_5() {
  assertNaN(parseFloat(undefined));
}

function testParseFloat_6() {
  assertEquals(-3.14, parseFloat("-03.14"));
}

function testParseFloat_7() {
  assertEquals(0, parseFloat("0x10"));
}

function testParseFloat_8() {
  assertEquals(101, parseFloat("10.1E1"));
}

function testParseFloat_9() {
  assertEquals(101, parseFloat("10.1E+1"));
}

function testParseFloat_10() {
  assertEquals(1.01, parseFloat("10.1E-1"));
}

function testParseFloat_11() {
  assertEquals(1.01, parseFloat("10.1e-1"));
}

function testParseFloat_12() {
  assertEquals(0.1, parseFloat(".1"));
}

function testParseFloat_13() {
  assertEquals(1, parseFloat(".1E1"));
}

function testParseFloat_14() {
  assertEquals(Number.POSITIVE_INFINITY, parseFloat("Infinity"));
}

function testParseFloat_15() {
  assertEquals(Number.POSITIVE_INFINITY, parseFloat("+Infinity"));
}

function testParseFloat_16() {
  assertEquals(Number.NEGATIVE_INFINITY, parseFloat("-Infinity"));
}

function testParseFloat_17() {
  assertEquals(10, parseFloat("1.E1"));
}

function testParseFloat_18() {
  var x = new Object();
  x.toString = function() {
    return "3";
  };
  assertEquals(3, parseFloat(x));
}

function testParseFloat_19() {
  var x = new Object();
  x.toString = function() {
    return "3";
  };
  assertEquals(3, parseFloat(x));
}

function testParseFloat_20() {
  var x = new Object();
  x.toString = "2";
  x.valueOf = function() {
    return "3";
  };
  assertEquals(3, parseFloat(x));
}

function testParseFloat_21() {
  var x = new Object();
  x.toString = "2";
  x.valueOf = 3;
  assertThrows(TypeError(), parseFloat, x);
}

function testParseFloat_22() {
  assertNaN(parseFloat());
}
testParseFloat_22.metadata = {
  bug:"CARAKAN-153"
};

function testParseFloat_23() {
  assertEquals("string", typeof parseFloat.toString());
}
testParseFloat_23.metadata = {
  bug:"CARAKAN-171"
};

function testParseFloat_24() {
  assertEquals(Number.MIN_VALUE, parseFloat(Number.MIN_VALUE));
}
testParseFloat_24.metadata = {
  bug:"CARAKAN-518"
};

function testIsNaN_0() {
  assertTrue(isNaN(NaN));
}

function testIsNaN_1() {
  assertTrue(!isNaN(0));
}

function testIsNaN_2() {
  assertTrue(!isNaN(null));
}

function testIsNaN_3() {
  assertTrue(isNaN(undefined));
}

function testIsNaN_4() {
  assertTrue(!isNaN(true));
}

function testIsNaN_5() {
  assertTrue(!isNaN(false));
}

function testIsNaN_5() {
  assertTrue(!isNaN("23"));
}

function testIsNaN_6() {
  assertTrue(!isNaN("23E3"));
}

function testIsNaN_7() {
  assertTrue(!isNaN("  2.3E3"));
}

function testIsNaN_8() {
  assertTrue(isNaN("a"));
}

function testIsNaN_8() {
  assertTrue(!isNaN("0x1A"));
}

function testIsNaN_9() {
  var x = new Object();
  x.toString = function(){return "3";};
  assertTrue(!isNaN(x));
}

function testIsNaN_10() {
  var x = new Object();
  x.toString = function(){return "3";};
  assertTrue(!isNaN(x));
}

function testIsNaN_11() {
  assertTrue(isNaN());
}
testIsNaN_11.metadata = {
  bug:"CARAKAN-154"
};

function testIsFinite_0() {
  assertTrue(isFinite(0));
}

function testIsFinite_1() {
  assertTrue(isFinite(1));
}

function testIsFinite_2() {
  assertTrue(!isFinite(NaN));
}

function testIsFinite_3() {
  assertTrue(!isFinite(Number.POSITIVE_INFINITY));
}

function testIsFinite_4() {
  assertTrue(!isFinite(Number.NEGATIVE_INFINITY));
}

function testIsFinite_5() {
  assertTrue(isFinite(null));
}

function testIsFinite_6() {
  assertTrue(!isFinite(undefined));
}

function testIsFinite_7() {
  assertTrue(isFinite(true));
}

function testIsFinite_8() {
  assertTrue(isFinite(false));
}

function testIsFinite_9() {
  assertTrue(isFinite("23"));
}

function testIsFinite_10() {
  assertTrue(isFinite("0xA1"));
}

function testIsFinite_11() {
  assertTrue(isFinite(""));
}

function testIsFinite_12() {
  assertTrue(!isFinite("aa"));
}

function testIsFinite_13() {
  assertTrue(!isFinite("Infinity"));
}

function testIsFinite_14() {
  assertTrue(!isFinite("-Infinity"));
}

function testIsFinite_15() {
  var x = new Object();
  x.toString = function() {
    return "3";
  };
  assertTrue(isFinite(x));
}

function testIsFinite_16() {
  var x = new Object();
  x.valueOf = function() {
    return 3;
  };
  assertTrue(isFinite(x));
}

