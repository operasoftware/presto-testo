function testUnaryMinus_0() {
  assertNaN(-undefined);
}

function testUnaryMinus_1() {
  assertEquals(-0, -null);
}

function testUnaryMinus_2() {
  assertEquals(-1, -true);
}

function testUnaryMinus_3() {
  assertEquals(-0, -false);
}

function testUnaryMinus_4() {
  assertEquals(-42, -42);
}

function testUnaryMinus_5() {
  assertEquals(-12, -"12");
}

function testUnaryMinus_6() {
  assertEquals(-12, -"  12 ");
}

function testUnaryMinus_7() {
  assertEquals(-12, -"  1.2E1");
}

function testUnaryMinus_8() {
  assertEquals(-16, -"  0X10");
}

function testUnaryMinus_9() {
  assertEquals(10, -"  -10");
}

function testUnaryMinus_10() {
  var o = {
    valueOf:function() {
      return 3;
    }
  };
  assertEquals(-3, -o);
}

function testUnaryMinus_11() {
    var o = {
    toString:function() {
      return "3";
    }
  };
  assertEquals(-3, -o);
}

function testUnaryMinus_12() {
    var o = {
      valueOf:function() {
      return 4;
      },
    toString:function() {
      return "3";
    }
  };
  assertEquals(-4, -o);
}

function testUnaryMinus_13() {
  var o = {
    valueOf:function() {
      return true;
    }
  };
  assertEquals(-1, -o);
}