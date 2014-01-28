function testTypeConversion_0() {
  //Undefined converts to NaN
  assertNaN(1+undefined);
}

function testTypeConversion_1() {
  //null converts to 0
  assertEquals(1, 1+null);
}

function testTypeConversion_2() {
  //true converts to 1
  assertEquals(2, 1+true);
}

function testTypeConversion_3() {
  //false converts to +0
  assertEquals(1, 1+false);
}

function testTypeConversion_4() {
  assertEquals(1, "1"/1);
}

function testTypeConversion_5() {
  assertEquals(Number.POSITIVE_INFINITY, "Infinity"/1);
}

function testTypeConversion_6() {
  assertEquals(-6, "-6"/1);
}

function testTypeConversion_7() {
  assertEquals(1.7E6, "1.7E6"/1);
}

function testTypeConversion_8() {
  assertEquals(1E-6, "0.001E-3"/1);
}

function testTypeConversion_9() {
  assertEquals(1E-6, ".001E-3"/1);
}

function testTypeConversion_10() {
  assertEquals(16, "0x10"/1);
}

function testTypeConversion_11() {
  assertEquals(32, "0X20"/1);
}

function testTypeConversion_12() {
  assertEquals(15, "0XF"/1);
}

function testTypeConversion_13() {
  assertEquals(0, "  "/1);
}

function testTypeConversion_14() {
  assertEquals(0, ""/1);
}

function testTypeConversion_15() {
  assertEquals(1, "+0001"/1);
}

function testTypeConversion_16() {
  assertEquals(-1.01e4, "-01.01e4"/1);
}

function testTypeConversion_17() {
  assertEquals(-0, "-0"/1);
}

function testTypeConversion_18() {
  var x = new Object();
  x.valueOf = function () {return 3;};
  assertEquals(4, 1 + x);
}

function testTypeConversion_19() {
  var x = new Object();
  assertThrows(TypeError(), 1 + x);
}

function testTypeConversion_20() {
  var x = new Object();
  x.toString = function() { return "3"; };
  assertEquals(3, x/1);
}

function testTypeConversion_21() {
  var x = new Object();
  x.toValue = function() { };
  assertNaN(x/1);
}

function testToFixed_0() {
  var x = new Number(10/3);
  assertEquals("3", x.toFixed());
}

function testToFixed_1() {
  var x = new Number(10/3);
  assertEquals("3.3", x.toFixed(1));
}

function testToFixed_1() {
  var x = new Number(NaN);
  assertEquals("NaN", x.toFixed());
}

function testToFixed_2() {
  var x = new Number(-10/3);
  assertEquals("-3", x.toFixed());
}

function testToFixed_3() {
  var x = new Number(20/3);
  assertEquals("6.7", x.toFixed(1));
}

function testToFixed_4() {
  var x = new Number(1);
  assertEquals("1.000", x.toFixed(3));
}

function testToFixed_5() {
  var x = new Number(1E-6);
  assertEquals("0.000", x.toFixed(3));
}

function testToFixed_6() {
  var x = new Number(1000000000000000128);
  assertEquals("1000000000000000128", x.toFixed(0));
}

function testToFixed_7() {
  assertEquals("Infinity", Number.POSITIVE_INFINITY.toFixed(10));
}

function testToFixed_8() {
  assertEquals("-Infinity", Number.NEGATIVE_INFINITY.toFixed(10));
}

function testToFixed_9() {
  var x = new Number(1E21);
  assertEquals((1e21).toString(), x.toFixed(10));
}

function testToFixed_10() {
  var x = new Number(-1E21);
  assertEquals((-1e21).toString(), x.toFixed(10));
}

function testToFixed_11() {
  var x = new Number(0.01);
  assertEquals("0.0100", x.toFixed(4));
}

function testToFixed_12() {
  var x = new Number(0.01);
  assertEquals("0", x.toFixed(0));
}

function testToFixed_13() {
  var x = new Number(1E6);
  assertEquals("1000000.0", x.toFixed(1));
}

function testToFixed_14() {
  var x = new Number(10);
  assertEquals("10.0", x.toFixed(true));
}

function testToFixed_15() {
  var x = new Number(10);
  var f = new Object();
  f.valueOf = function () {
    return 3;
  };
  assertEquals("10.000", x.toFixed(f));
}

function testToFixed_15() {
  var x = new Number(10);
  assertEquals("10", x.toFixed(null));
}

function testToFixed_16() {
  var x = new Number(12.5);
  assertEquals("13", x.toFixed());
}

function testToFixed_17() {
  var x = new Number(12.05);
  assertEquals("12.1", x.toFixed(1));
}

function testToFixed_18() {
  var x = new Number(-12.5);
  assertEquals("-13", x.toFixed());
}

function testToFixed_19() {
  var x = new Number(-12.05);
  assertEquals("-12.1", x.toFixed(1));
}

//Can't test for range error here because implementations are allowed to
//accept larger ranges

function testToExponential_0() {
  assertEquals("NaN", (NaN).toExponential(10));
}

function testToExponential_1() {
  assertEquals("Infinity", Number.POSITIVE_INFINITY.toExponential(10));
}

function testToExponential_2() {
  assertEquals("-Infinity", Number.NEGATIVE_INFINITY.toExponential(10));
}

function testToExponential_3() {
  assertEquals("3e+0", (3).toExponential());
}

function testToExponential_4() {
  assertEquals("3e+0", (3).toExponential());
}

function testToExponential_5() {
  assertEquals("3.0000e+0", (3).toExponential(4));
}

function testToExponential_6() {
  assertEquals("3e+1", (31.4159).toExponential(0));
}

function testToExponential_7() {
  assertEquals("3.1416e+1", (31.4159).toExponential(4));
}

function testToExponential_8() {
  assertEquals("3.1416e+1", (31.4165).toExponential(4));
}

function testToExponential_9() {
  assertEquals("1.2346e+9", (1234567890).toExponential(4));
}

function testToExponential_10() {
  assertEquals("2.0000e+300", (2e300).toExponential(4));
}

function testToExponential_11() {
  assertEquals("5e-2", (0.05).toExponential(0));
}

function testToExponential_12() {
  assertEquals("5.051e-2", (0.05050505).toExponential(3));
}

function testToExponential_13() {
  assertEquals("5.050505e-2", (0.05050505).toExponential(undefined));
}

function testToExponential_14() {
  assertEquals("1.1e+1", (11.2).toExponential(true));
}

function testToExponential_15() {
  assertEquals("1e+1", (11.2).toExponential(null));
}

function testToExponential_16() {
  var x = new Object();
  x.valueOf = function() {
    return 3;
  };
  assertEquals("1.121e+1", (11.206).toExponential(x));
}

function testToExponential_17() {
  assertEquals(1, Number.prototype.toExponential.length);
}

function testToExponential_18() {
  assertEquals("-1.10e+0", (-1.1).toExponential(2));
}
testToExponential_18.metadata = {
  bug:"CARAKAN-351"
};

function testToExponential_19() {
  assertEquals("-1.00e+0", (-1).toExponential(2));
}
testToExponential_19.metadata = {
  bug:"CARAKAN-351"
};

function testToExponential_20() {
  var x = new Number(12.5);
  assertEquals("1.3e+1", x.toExponential(1));
}

function testToExponential_21() {
  var x = new Number(12.05);
  assertEquals("1.21e+1", x.toExponential(2));
}

function testToExponential_22() {
  var x = new Number(-12.5);
  assertEquals("-1.3e+1", x.toExponential(1));
}

function testToExponential_21() {
  var x = new Number(-12.05);
  assertEquals("-1.21e+1", x.toExponential(2));
}

function testToPrecision_0() {
  var x = 3.001;
  assertEquals(x.toString(), x.toPrecision());
}

function testToPrecision_1() {
  var x = 3.5671E23;
  assertEquals(x.toString(), x.toPrecision());
}

function testToPrecision_2() {
  var x = NaN;
  assertEquals("NaN", x.toPrecision());
}

function testToPrecision_3() {
  var x = Number.POSITIVE_INFINITY;
  assertEquals("Infinity", x.toPrecision());
}

function testToPrecision_4() {
  var x = Number.NEGATIVE_INFINITY;
  assertEquals("-Infinity", x.toPrecision());
}

function testToPrecision_5() {
  var x = 0;
  assertEquals("0.000000000", x.toPrecision(10));
}

function testToPrecision_6() {
  var x = 0;
  assertEquals("0", x.toPrecision(1));
}

function testToPrecision_7() {
  var x = 0;
  assertEquals("0", x.toPrecision(1));
}

function testToPrecision_8() {
  assertEquals("3.1e+2", (314.159).toPrecision(2));
}

function testToPrecision_9() {
  assertEquals("314.2", (314.159).toPrecision(4));
}

function testToPrecision_10() {
  assertEquals("0.00001", (1E-5).toPrecision(1));
}

function testToPrecision_11() {
  assertEquals("3e+2", (314.159).toPrecision(1));
}

function testToPrecision_12() {
  assertEquals("3.1e+2", (314.159).toPrecision(2));
}

function testToPrecision_13() {
  assertEquals("3.141590001", (3.1415900009).toPrecision(10));
}

function testToPrecision_14() {
  assertEquals("3.141590000", (3.14159000009).toPrecision(10));
}

function testToPrecision_15() {
  assertEquals("31", (3.1e1).toPrecision(2));
}

function testToPrecision_16() {
  assertEquals("3.141590000e+20", (3.14159e20).toPrecision(10));
}

function testPrecision_17() {
  var x = 3.1093E20;
  assertEquals(x.toString(), x.toPrecision(undefined));
}

function testPrecision_18() {
  var x = new Object();
  x.valueOf = function () {
    return 2;
  };
  assertEquals("31", (31).toPrecision(x));
}

function testToPrecision_19() {
  var x = 3.1093E20;
  assertEquals("3e+20", x.toPrecision(true));
}

function testToPrecision_20() {
  assertEquals("-1.0", (-1).toPrecision(2));
}

function testToPrecision_21() {
  assertEquals("-1.100", (-1.1).toPrecision(4));
}

function testToPrecision_22() {
  assertEquals("12.1", (12.05).toPrecision(3));
}

function testToPrecision_23() {
  assertEquals("-12.1", (-12.05).toPrecision(3));
}

function testToPrecision_24() {
  assertEquals("0.3780", (0.378).toPrecision(4));
  assertEquals("0.378000", (0.378).toPrecision(6));
}
testToPrecision_23.metadata = {
  bug:"CORE-32309"
};

function testToPrecision_24() {
  assertEquals("0.0007", (0.0006999999999999999999999).toPrecision());
}
testToPrecision_24.metadata = {
  bug:"CORE-42841"
};

function testConstructor_0() {
  var a = Number(3);
  assertEquals(3,a);
}

function testConstructor_1() {
  var a = Number("3");
  assertEquals(3,a);
}

function testConstructor_2() {
  var o = new Object();
  o.valueOf = function() {
    return 3;
  };
  var a = Number(o);
  assertEquals(3,a);
}

function testPrototypeConstructor_0() {
  assertEquals(Number, Number.prototype.constructor);
}
testPrototypeConstructor_0.metadata = {
  bug:"CARAKAN-67"
};
