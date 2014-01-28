function testAddition_0() {
  assertNaN(NaN+1);
}

function testAddition_1() {
  assertNaN(NaN + Number.POSITIVE_INFINITY);
}

function testAddition_2() {
  assertEquals(Number.POSITIVE_INFINITY,
	       Number.POSITIVE_INFINITY+Number.POSITIVE_INFINITY);
}

function testAddition_3() {
  assertEquals(Number.NEGATIVE_INFINITY,
	       Number.NEGATIVE_INFINITY+Number.NEGATIVE_INFINITY);
}

function testAddition_4() {
  assertNaN(Number.NEGATIVE_INFINITY+Number.POSITIVE_INFINITY);
}

function testAddition_5() {
  assertEquals(Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY+1E8);
}

function testAddition_6() {
  assertEquals(Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY+1E8);
}

function testAddition_7() {
  assertEquals(-0, (-0)+(-0));
}

function testAddition_8() {
  assertEquals(0, 0+0);
}

function testAddition_9() {
  assertEquals(0, -0+0);
}

function testAddition_10() {
  assertEquals(17, -0+17);
}

function testAddition_11() {
  assertEquals(23, 0+23);
}

function testAddition_12() {
  assertEquals(0, -17+17);
}

function testAddition_13() {
  assertEquals(2E8, 1E8+1E8);
}

function testAddition_14() {
  assertEquals("33", "3" + 3);
}

function testAddition_15() {
  assertEquals("33", 3 + "3");
}

function testAddition_16() {
  assertEquals("33", (new String("3")) + 3);
}

function testAddition_17() {
  var valueOf = Object.prototype.valueOf;
  delete Object.prototype.valueOf;
  var a = {};
  //Now calling ToPrimitive should use toString rather than valueOf
  assertEquals("[object Object]3", a + 3);
  Object.prototype.valueOf = valueOf;
}

function testAddition_18() {
  var valueOf = Object.prototype.valueOf;
  var toString = Object.prototype.toString;
  delete Object.prototype.valueOf;
  delete Object.prototype.toString;

  function test() {
    var a = {};
    return a + 3;
  }

  assertThrows(TypeError(), test);
  Object.prototype.valueOf = valueOf;
  Object.prototype.toString = toString;
}

function testAddition_19() {
  function addOne() {
    var day = 10,
        wd;
    // This just needs to be something that splits any arithmetic block
    if (1 == 1) {
      day += 1;
      wd = day % 2;
    }
    return day;
  }
  
  for (var i = 0; i < 50; i++)
      assertEquals(11, addOne());
}
testAddition_19.metadata = {
  bug:"CARAKAN-703"
};

function testAddition_20() {
  var f = function(x) {
    return '[' + (x - 0.5) + ']';
  }

  for (var i = 0; i < 50; i++)
    assertEquals("[0]", f(0.5));
}

function testAddition_21() {
    var d = new Date();
    var x = '';
    x = '' + d + x;
    assertTrue(x==d);
    var str = "aa" + new Date() + "b";
    var passed = str.indexOf(':') > 0;
    assertTrue(passed);
}
testAddition_21.metadata = {
  bug:"CORE-31025"
};

function testAddition_22() {
    assertEquals(6, 1 + {valueOf:function(){ return 2; }} + 3);
    assertEquals('123', '1' + {valueOf:function(){ return 2; }} + 3);
    assertEquals('33', (1 + {valueOf:function(){ return 2; }} + '3'));
    assertEquals('123', ('1' + {valueOf:function(){ return 2; }} + '3'));
}
testAddition_22.metadata = {
  bug:"CORE-31025"
};
