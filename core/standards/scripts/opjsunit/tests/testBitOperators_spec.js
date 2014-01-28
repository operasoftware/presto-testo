function testBitwiseNot_0() {
  assertEquals(0, ~0xFFFFFFFF);
}

function testBitwiseNot_1() {
  assertEquals(-1, ~0);
}

function testBitwiseNot_2() {
  assertEquals(0x55555555, ~0xAAAAAAAA);
}

function testBitwiseNot_3() {
  assertEquals(0x55555555, ~0xAAAAAAAA);
}

function testBitwiseNot_4() {
  assertEquals( 0x5555AAAA, ~0xAAAA5555);
}

function testBitwiseNot_5() {
  assertEquals(-1, ~0x100000000);
}
//feel like there should be more edge cases in here

function testBitwiseLeftShift_0() {
  assertEquals(2, 1 << 1);
}

function testBitwiseLeftShift_1() {
  assertEquals(4, 1 << 2);
}

function testBitwiseLeftShift_3() {
  assertEquals(2, 1 << 65);
}

function testBitwiseLeftShift_4() {
  assertEquals(-2, Math.pow(2,31)-1 << 1);
}

function testBitwiseLeftShift_5() {
  assertEquals(-Math.pow(2, 31), Math.pow(2,31)-1 << 31);
}


function testBitwiseLeftShift_6() {
  assertEquals(0, -Math.pow(2,31) << 31);
}

function testBitwiseLeftShift_7() {
  assertEquals(-Math.pow(2, 31), 1 << 31);
}

function testBitwiseLeftShift_8() {
  assertEquals(-Math.pow(2, 31), 1 << -1);
}

function testBitwiseLeftShift_9() {
  assertEquals(8, "4" << 1);
}

function testBitwiseLeftShift_10() {
  var a = function(){};
  a.prototype.valueOf = function() {return 4;};
  var b = new a();
  assertEquals(8, b << 1);
}

function testBitwiseLeftShift_11() {
  var a = function(){};
  a.prototype.valueOf = function() {return Math.pow(2, 31);};
  var b = new a();
  assertEquals(0, b << 31);
}

function testBitwiseLeftShift_12() {
  assertEquals(1, 1 << undefined);
}

function testBitwiseLeftShift_13() {
  assertEquals(1, 1 << null);
}

function testBitwiseLeftShift_14() {
  assertEquals(2, 1 << true);
}

function testBitwiseLeftShift_15() {
  assertEquals(1, 1 << 32);
}

function testBitwiseLeftShift_16() {
  assertEquals(2, 2 << null);
}

function testBitwiseLeftShift_17() {
  assertEquals(2, 2 << undefined);
}

function testBitwiseLeftShift_18() {
  assertEquals(4, 1 << 34);
}

function testBitwiseLeftShift_19() {
  assertEquals(0, 2 << -1);
}

function testBitwiseLeftShift_20() {
  var x = Object.create(null);
  assertThrows(TypeError(), function () { return x << 1; });
}
testBitwiseLeftShift_20.metadata = {
  bug: "CORE-46136"
};

function testBitwiseRightShift_0() {
  assertEquals(0, 1>>1);
}

function testBitwiseRightShift_1() {
  assertEquals(1, 2>>1);
}

function testBitwiseRightShift_2() {
  assertEquals(-Math.pow(2,30), Math.pow(2,31) >> 1);
}

function testBitwiseRightShift_3() {
  assertEquals(0x01111111, 0x111111111 >> 4);
}

function testBitwiseRightShift_4() {
  assertEquals(-Math.pow(2,30), Math.pow(2,31) >> 1);
}


function testBitwiseRightShift_5() {
  assertEquals(1, (Math.pow(2,31)-1) >> 30);
}

function testBitwiseRightShift_6() {
  assertEquals(-1, Math.pow(2,31) >> 31);
}

function testBitwiseRightShift_7() {
  assertEquals(-1, Math.pow(2,31) >> -1);
}

function testBitwiseRightShift_7() {
  assertEquals(-1, Math.pow(2,31) >> -1);
}

function testBitwiseRightShift_8() {
  assertEquals(2, "4" >> 1);
}

function testBitwiseRightShift_8() {
  var a = function(){};
  a.prototype.valueOf = function() {return 4;};
  var b = new a();
  assertEquals(2, b >> 1);
}

function testBitwiseRightShift_9() {
  var a = function(){};
  a.prototype.valueOf = function() {return Math.pow(2, 31);};
  var b = new a();
  assertEquals(-1, b >> 31);
}

function testBitwiseRightShift_10() {
  assertEquals(1, 1 >> undefined);
}

function testBitwiseRightShift_11() {
  assertEquals(1, 1 >> null);
}

function testBitwiseRightShift_12() {
  assertEquals(0, 1 >> true);
}

function testBitwiseRightShift_13() {
  assertEquals(1, 1 >> 32);
}

function testBitwiseRightShift_14() {
  assertEquals(2, 2 >> null);
}

function testBitwiseRightShift_15() {
  assertEquals(2, 2 >> undefined);
}

function testBitwiseRightShift_16() {
  assertEquals(1, 4 >> 34);
}

function testBitwiseRightShift_17() {
  var x = Object.create(null);
  assertThrows(TypeError(), function () { return x >> 1; });
}
testBitwiseRightShift_17.metadata = {
  bug: "CORE-46136"
};

function testUnsignedRightShift_0() {
  assertEquals(2, 4 >>> 1);
}

function testUnsignedRightShift_1() {
  assertEquals(Math.pow(2, 30), Math.pow(2,31) >>> 1);
}

function testUnsignedRightShift_2() {
  assertEquals(1 , -1 >>> -1);
}

function testUnsignedRightShift_3() {
  assertEquals(Math.pow(2, 32)-1 , -1 >>> 0);
}

function testUnsignedRightShift_4() {
  assertEquals(Math.pow(2, 31) - 1 , Math.pow(2, 32) - 1 >>> 1);
}

function testUnsignedRightShift_5() {
  assertEquals(Math.pow(2,31)-1 , (Math.pow(2, 32) - 1) >>> 33);
}

function testUnsignedRightShift_6() {
  assertEquals(1, 1 >> 32);
}

function testUnsignedRightShift_7() {
  assertEquals(2, 2 >> null);
}

function testUnsignedRightShift_8() {
  assertEquals(2, 2 >> undefined);
}

function testUnsignedRightShift_9() {
  assertEquals(1, 4 >> 34);
}

function testUnsignedRightShift_10()
{
  function f()
  {
     var s = '';
     for (var i = 0; i < 100; i++)
     {
	 var x3 = s + '';
	 var x2 = false >>> x3;
	 if (0 != x2) {
	     return false;
	 }
     }
     return true;
  }
  assertTrue(f());
}
testUnsignedRightShift_10.metadata = {
  bug: "CORE-39721"
};

function testUnsignedRightShift_11()
{
  function f()
  {
     var s = '';
     for (var i = 0; i < 100; i++)
     {
	 var x3 = s + '';
	 var x2 = x3 >>> x3;
	 if (0 != x2) {
	     return false;
	 }
     }
     return true;
  }
  assertTrue(f());
}
testUnsignedRightShift_11.metadata = {
  bug: "CORE-39721"
};

function testBitwiseUnsignedRightShift_12() {
  var x = Object.create(null);
  assertThrows(TypeError(), function () { return x >>> 1; });
}
testBitwiseUnsignedRightShift_12.metadata = {
  bug: "CORE-46136"
};

function testBitwiseUnsignedRightShift_13() {
 function f(x)
 {
   for (var i = 0; i < 100; i++)
     assertTrue((x >>> 0) > 0);
 }
 f(1 << 31);
}
testBitwiseUnsignedRightShift_13.metadata = {
  bug: "CORE-46713"
};


function testBitwiseUnsignedRightShift_14() {
 function f(x, y, w)
 {
   for (var i = 0; i < 100; i++)
     assertEquals(w, x >>> y);
 }
 f(-1, 0, 4294967295);
 f(-9, 0, 4294967287);
}
testBitwiseUnsignedRightShift_14.metadata = {
  bug: "CORE-49440"
};

function testXor_0() {
  function bar(runTest){
    if (runTest) {
      // Neither of the operands can be immediates
      return (Object ^ ('a'.indexOf('b') !== -1)) === 0;
    }
  };

  for (var i = 0; i < 100; i++){
    bar(false);
  }

  assertTrue(bar(true));
}
testXor_0.metadata = {
  bug: "CORE-33887"
};

function testXor_1() {
  var x = Object.create(null);
  assertThrows(TypeError(), function () { return x ^ 0x0f; });
}
testXor_1.metadata = {
  bug: "CORE-46136"
};

function testBitAnd_0() {
    // Somewhat loose connection to "bit operators"..
    // checking if register conversion of a double value
    // into a target integer register compiles OK
    // (OK == no crash.)
    function f(type, y) {
	type = type === undefined ? 0xffffffff : type;
	for (var i = 0; i < 20; i++)
	    if (this.x() & type)
		return true;
	return false;
    }
    for (var i = 0; i < 200; i++)
	assertTrue(f.call({x: function() { return 2; }}, 2.4));
}
testBitAnd_0.metadata = {
  bug: "CORE-41866"
};

function testBitAnd_1() {
  var x = Object.create(null);
  assertThrows(TypeError(), function () { return x & 8; });
}
testBitAnd_1.metadata = {
  bug: "CORE-46136"
};

function testBitOr_0() {
  var x = Object.create(null);
  assertThrows(TypeError(), function () { return x | 0x0f; });
}
testBitOr_0.metadata = {
  bug: "CORE-46136"
};
