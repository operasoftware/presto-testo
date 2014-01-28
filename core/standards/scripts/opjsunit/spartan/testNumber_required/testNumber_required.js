function testToFixed_0() {
  var a = new Object();
  a.toValue = function () {
    return 3;
  };
  a.toFixed = Number.prototype.toFixed;
  assertThrows(TypeError(), a.toFixed, 21);
}


function testToPrecision_0() {
  /*
   * As far as I can tell the text of the spec requires this to be
   * 1.e-7 but no engine does that
   */
  assertEquals("1e-7", (1E-7).toPrecision(1));
}

function testConstructor_0() {
  var a = new Number(3);
  assertTrue(a instanceof Number);
}

function testToString_0() {
  assertEquals("123", (123).toString());
}

function testToString_1() {
  assertEquals("123.456", (123.456).toString());
}

function testToString_2() {
  assertEquals("0.456", (0.456).toString());
}

function testToString_3() {
  assertEquals("1.1e+21", (1.1E21).toString());
}

function testToString_4() {
  assertEquals("110000000000000000000", 1.1E20.toString());
}

function testToString_5() {
  assertEquals("0.0000011", (1.1E-6).toString());
}

function testToString_6() {
  assertEquals("1.1e-7", (1.1E-7).toString());
}

function testToString_7() {
  assertEquals("16", (0x10).toString());
}

function testToString_8() {
  assertEquals("8", (010).toString());
}

function testToString_9() {
  assertEquals("8", (010).toString());
}

function testToString_10() {
  assertEquals("-10", (-10).toString());
}

function testToString_11() {
  assertEquals("-1.00001", (-1.00001).toString());
}

function testToString_12() {
  assertEquals("-1.00001e-7", (-1.00001E-7).toString());
}

function testToString_13() {
  assertEquals("1", (1.000000000000000001).toString());
}

function testToString_14() {
  function func() {(1234.567).toString(0)}
  assertThrows(RangeError(), func);
}


function testToString_15() {
  function func() {(1234.567).toString(1)}
  assertThrows(RangeError(), func);
}


function testToString_16() {
  assertEquals("10011010010.1001000100100110111010010111100011010101", (1234.567).toString(2));
}


function testToString_17() {
  assertEquals("1200201.120022100021001021021002202", (1234.567).toString(3));
}


function testToString_18() {
  assertEquals("103102.21010212322113203111", (1234.567).toString(4));
}


function testToString_19() {
  assertEquals("14414.240414141414141414", (1234.567).toString(5));
}


function testToString_20() {
  assertEquals("5414.32224554134430233", (1234.567).toString(6));
}


function testToString_21() {
  assertEquals("3412.365323661111653", (1234.567).toString(7));
}


function testToString_22() {
  assertEquals("2322.44223351361524", (1234.567).toString(8));
}


function testToString_23() {
  assertEquals("1621.50830703723265", (1234.567).toString(9));
}


function testToString_24() {
  assertEquals("1234.567", (1234.567).toString(10));
}


function testToString_25() {
  assertEquals("a22.62674a0a5885", (1234.567).toString(11));
}


function testToString_26() {
  assertEquals("86a.697938b17701", (1234.567).toString(12));
}


function testToString_27() {
  assertEquals("73c.74a91191a65", (1234.567).toString(13));
}


function testToString_28() {
  assertEquals("642.7d1bc2caa757", (1234.567).toString(14));
}


function testToString_29() {
  assertEquals("574.87895959596", (1234.567).toString(15));
}


function testToString_30() {
  assertEquals("4d2.9126e978d5", (1234.567).toString(16));
}


function testToString_31() {
  assertEquals("44a.9aeb6faa0da", (1234.567).toString(17));
}


function testToString_32() {
  assertEquals("3ea.a3cd7102ac", (1234.567).toString(18));
}


function testToString_33() {
  assertEquals("37i.aed102a04d", (1234.567).toString(19));
}


function testToString_34() {
  assertEquals("31e.b6g", (1234.567).toString(20));
}


function testToString_35() {
  assertEquals("2gg.bj0kf5cfe9", (1234.567).toString(21));
}


function testToString_36() {
  assertEquals("2c2.ca9937cak", (1234.567).toString(22));
}


function testToString_37() {
  assertEquals("27f.d0lfjb1a7c", (1234.567).toString(23));
}


function testToString_38() {
  assertEquals("23a.dee4nj99j", (1234.567).toString(24));
}


function testToString_39() {
  assertEquals("1o9.e49999999", (1234.567).toString(25));
}


function testToString_40() {
  assertEquals("1lc.ej7fa4pkf", (1234.567).toString(26));
}


function testToString_41() {
  assertEquals("1ij.f8971772k", (1234.567).toString(27));
}


function testToString_42() {
  assertEquals("1g2.foelqia8e", (1234.567).toString(28));
}


function testToString_43() {
  assertEquals("1dg.gcog9e05q", (1234.567).toString(29));
}


function testToString_44() {
  assertEquals("1b4.h09", (1234.567).toString(30));
}


function testToString_45() {
  assertEquals("18p.hhrfcj3t", (1234.567).toString(31));
}


function testToString_46() {
  assertEquals("16i.i4jeiu6l", (1234.567).toString(32));
}


function testToString_47() {
  assertEquals("14d.inf96rdvm", (1234.567).toString(33));
}


function testToString_48() {
  assertEquals("12a.j9fchdtm", (1234.567).toString(34));
}


function testToString_49() {
  assertEquals("109.jtk4d4d4e", (1234.567).toString(35));
}


function testToString_50() {
  assertEquals("ya.kety9sifl", (1234.567).toString(36));
}


function testToString_51() {
  function func() {(1234.567).toString(37);}
  assertThrows(RangeError(), func);
}


function testToString_52() {
  function func() {(1234.567).toString(38);}
  assertThrows(RangeError(), func);
}


function testToString_53() {
  function func() {(1234.567).toString(39);}
  assertThrows(RangeError(), func);
}

function testToString_54() {
  assertEquals("-4d2.9126e978d5", (-1234.567).toString(16));
}

function testToString_55() {
  assertEquals("2d182c32eb130a0000000000000000000000000000000000000000000000000000000000000000000000000", (101E102).toString(16));
}

function testToString_56() {
    assertEquals("0.0001100110011001100110011001100110011001100110011001101", 0.1.toString(2));
    assertEquals("0.00000010100011110101110000101000111101011100001010001111011", 0.01.toString(2));
    assertEquals("0.000000000100000110001001001101110100101111000110101001111111", 0.001.toString(2));
    assertEquals("0.00000000000000000010001101000100000001010111000100001011101110010111101", 0.000002102.toString(2));
    assertEquals("10000000000000000000.0303031", (Math.pow(2,38) + 0.2).toString(4));
}
testToString_56.metadata = {
  bug:"CORE-34220"
};

function testToString_57() {
  assertEquals("-10000000000000000000000000000000", (1<<31).toString(2));
}
testToString_57.metadata = {
  bug: "CORE-44263"
};
