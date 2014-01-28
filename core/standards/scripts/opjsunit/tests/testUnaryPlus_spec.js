function testUnaryPlus_0() {
  assertNaN(+undefined);
}

function testUnaryPlus_1() {
  assertEquals(0, +null);
}

function testUnaryPlus_2() {
  assertEquals(1, +true);
}

function testUnaryPlus_3() {
  assertEquals(0, +false);
}

function testUnaryPlus_4() {
  assertEquals(42, +42);
}

function testUnaryPlus_5() {
  assertEquals(12, +"12");
}

function testUnaryPlus_6() {
  assertEquals(12, +"  12 ");
}

function testUnaryPlus_7() {
  assertEquals(12, +"  1.2E1");
}

function testUnaryPlus_8() {
  assertEquals(16, +"  0X10");
}

function testUnaryPlus_9() {
  assertEquals(-10, +"  -10");
}

function testUnaryPlus_10() {
  var o = {
    valueOf:function() {
      return 3;
    }
  };
  assertEquals(3, +o);
}

function testUnaryPlus_11() {
    var o = {
    toString:function() {
      return "3";
    }
  };
  assertEquals(3, +o);
}

function testUnaryPlus_12() {
    var o = {
      valueOf:function() {
      return 4;
      },
    toString:function() {
      return "3";
    }
  };
  assertEquals(4, +o);
}

function testUnaryPlus_13() {
  var o = {
    valueOf:function() {
      return true;
    }
  };
  assertEquals(1, +o);
}

function testUnaryPlus_14() {
  assertEquals(1, +(String.fromCharCode(0XA) + 1));
}
testUnaryPlus_14.metadata = {
  bug:"CARAKAN-187"
};

function testUnaryPlus_15() {
  function func(y) {
    var j = 0, x = y;
 
    // "++x" below is not a typo.  It was a bug in the original
    // script, I'm sure, but is what triggers the bug.  :-)
    for (var i = 0; i < x.length; ++x) {
      j += x[i];
    }

    assertEquals(1, j);
  }
 
  for (var i = 0; i < 100; ++i)
    func([1,2,3]);
}
testUnaryPlus_15.metadata = {
  bug: "CORE-30188"
}
