//This is a general dumping ground for arithmetic regression tests
//found by the arithmetic fuzzer

function testArithmetic_0() {
  function func() {
    var a=0xcf1f8;
    return a%a;
  }
  assertEquals(0, func());
}

function testArithmetic_1() {
 function f(a, b, c) {
   a < b && ++c;
   return c;
 }
 assertEquals(0, f(1, 0, 0));
}

function testArithmetic_2() {
  function func(x) {
    assertEquals(3, x);
  }

  var x = 0;
  assertEquals(0, x);
  func(++x + (x = 2));
  assertEquals(2, x);
}

function testArithmetic_3() {
  function func(x1, x2) {
    assertEquals(1, x1);
    assertEquals(2, x2);
  }

  var x = 0;
  // I just want a funciton call to break up an arithmetic block...
  assertEquals(0, x);
  // 'x + 1' is here so that '++x' isn't the last thing in its arithmetic block
  func(++x, x + 1);
  assertEquals(1, x);
}

function testArithmetic_4() {
  function func() {
    var cutoff = 3;
    (cutoff + 1) % 7;
    (cutoff + 2) % 7;
    cutoff % 7;
  };

  for (var i = 0; i < 1000; ++i) {
    func();
  }
}

function testArithmetic_5() {
  var b=0;
  var y=-33;
  for(var x=-33;33>++x;) {
    b+=((399/Math.sqrt(x*x+y*y)+33)^(Math.atan2(y,x)*20.4+33))&8?0:1;
  }
  assertEquals(32, b);
}

function testArithmetic_6() {
  //Real pass condition is not to timeout
  function f() {
    var a = 0, n = 1;
    do {
      a += 1.2;
    } while(--n);
    return a;
  }
  for (var i=0;i<60; i++) {
    assertEquals(1.2, f());
  }
}
testArithmetic_6.metadata = {
  bug:"CARAKAN-555"
};

function testArithmetic_7() {
  //Pass condition is to not crash
  var oi = new o();
  function o( ) {
    this.s = 10;
    this.f = function ( a ) {
      this.s * (1 ? a: 1 );
    };
  }
  for (var x = 0;x<50;x++) {
    oi.f(.1);
  }
}
testArithmetic_7.metadata = {
  bug:"CARAKAN-965"
};

function testArithmetic_8() {
  function EasterWestern(eYear) {
    var p = 0,
        g = eYear % 19;
    p = 2009 + Math.floor(2009 / 4);
    esdMonth = "Apr";
    efrDay = p + 2;
  }

  function setVarHolidays(theYear) {
    EasterWestern(theYear);
    var testDate = new Date(i + ' Jun ' + theYear);
  }

  for (var i = 0; i < 50; i++)
    setVarHolidays(2009);
}
testArithmetic_8.metadata = {
  bug:"CARAKAN-1097"
}

function testArithmetic_9() {
  var a48 = -1 >>> 16;
  var b48 = -0x80000000 >>> 16;
  var c48 = 0;
  c48 += a48 + b48;
  c48 &= 0xFFFF;
  assertEquals(0x7FFF, c48);
}
testArithmetic_9.metadata = {
  bug:"CARAKAN-1271"
}

function testArithmetic_10() {
  function testArithmetic() {
    var a48 = 5;
    var c48 = 6;
    c48 += a48 + 7;
    return c48;
  }

  for (var i = 0; i < 50; i++)
    assertEquals(18, testArithmetic());
}
testArithmetic_10.metadata = {
  bug:"CARAKAN-1271"
}

function testArithmetic_11() {
  function testArithmetic() {
    var a = 5;
    var b = 6;
    var c = 7;

    c = a + c;
    b = b + c;
    return b;
  }

  for (var i = 0; i < 50; i++)
    assertEquals(18, testArithmetic());
}
testArithmetic_11.metadata = {
  bug:"CARAKAN-1271"
}

function testArithmetic_12() {
  function testArithmetic() {
    var c32 = 0xFFFE + 0xFFFF0001;
    c32 &= 0xFFFF;
    assertEquals(0xFFFF, c32);
  }

  for (var i = 0; i < 100; i++)
    testArithmetic();
}
testArithmetic_12.metadata = {
  bug: "CORE-30766"
};

function testArithmetic_13() {
  function testArithmetic() {
    var a = -1;
    var b = a >>> 0;
    return b;
  }

  for (var i = 0; i < 100; i++)
    assertEquals(0xFFFFFFFF, testArithmetic());
}
testArithmetic_13.metadata = {
  bug: "CORE-30773"
};

function testArithmetic_14() {
  function func() {
    var a = 0xFFFF;
    return a * a / a;
  }

  for (var i = 0; i < 100; i++)
    assertEquals(0xFFFF, func());
}
testArithmetic_14.metadata = {
  bug: "CORE-31292"
};

function testArithmetic_15() {
  function func(x) {
  	var y = x & 0xF;
  	var z = y * 1.1;
  	return y + 1;
  }

  assertEquals(5, func(4, 0));
}
testArithmetic_15.metadata = {
  bug: "CORE-30766"
};

function testArithmetic_16() {
  function func(x) {
    var y = x * 100.5;
    var a1 = x * 1.1, a2 = x * 1.2, a3 = x * 1.3, a4 = x * 1.4, a5 = x * 1.5, a6 = x * 1.6, a7 = x * 1.7, a8 = x * 1.8;
    var a9 = x * 1.9, a10 = x * 2.1, a11 = x * 2.2, a12 = x * 2.3, a13 = x * 2.4, a14 = x * 2.5, a15 = x * 2.6, a16 = x * 2.7;
    var z = y & 0xf;
    return a1 + a2 + a3 + a4 + a5 + a6 + a7 + a8 + a9 + a10 + a11 + a12 + a13 + a14 + a15 + a16;
  }

  assertEquals(121.2, func(4));
}
testArithmetic_16.metadata = {
  bug: "CORE-30766"
};


function testArithmetic_17() {
  var expr = "1 + (";
  for (var i = 0; i < 4096; i++)
    expr += "1+";
  expr += "1);";

  try {
    var x = eval(expr);
    assertEquals(4098, x);
  } catch (e) {
    assertEquals(1, e);
  }
}
testArithmetic_17.metadata = {
  bug: "CORE-31389"
};

function testArithmetic_18() {
  function f(v) {
    return (v > 1 || false);
  }

  for (var i = 0; i < 100; i++) {
    assertFalse(f(NaN));
  }
}
testArithmetic_18.metadata = {
  bug: "CORE-32607"
};

function testArithmetic_19() {
  function f() {
    return Math.cos(0) >> 0;
  }

  for (var i = 0; i < 100; i++)
    assertEquals(1, f());
}
testArithmetic_19.metadata = {
  bug: "CORE-35440"
};

function testArithmetic_20() {
  function f() {
    var A = NaN, B = 0;
    for (var i = 0; i < 100; i++) {
      B = A + 1;
      A = B = B << 1;
    }
    return B + "";
  }

  assertEquals("-2", f());
}
testArithmetic_20.metadata = {
  bug: "CORE-36864"
};

function testArithmetic_21() {
  function f(a, b) {
    var x = 0.0005;
    if (a * b < x)
      return true;
    else
      return false;
  }

  for (var i = 0; i < 100; i++)
    assertFalse(f(1.2, 1.3));
}
testArithmetic_21.metadata = {
  bug: "CORE-36997"
};

function testArithmetic_22() {
    Number.prototype.toHex = function (min)
    {
        var h = '0123456789ABCDEF';
        var n = this;
        var s = '';
        do
	{
	    s = h.charAt(n & 15) + s;
	    n = n >>> 4;
        } while ((--min > 0) || (n > 0));
        return s;
    }
    for (var i = 0; i < 64; i++)
       assertEquals(parseInt(i.toHex(2), 16), i);
}
testArithmetic_22.metadata = {
  bug: "CORE-37199"
};

function testArithmetic_23() {
  var x = 2147483647;
  assertEquals(2147483648, x + true);
}
testArithmetic_23.metadata = {
  bug: "CORE-43684"
};

function testArithmetic_24() {
  var x = Object.create(null);
  assertThrows(TypeError(), function () { return x - 2; });
}
testArithmetic_24.metadata = {
  bug: "CORE-46136"
};

function testArithmetic_25() {
  var x = 25;
  for (var i = 0; i < 50; i++)
       assertEquals(1, x % 3);
}
testArithmetic_25.metadata = {
  bug: "CORE-46168"
};

function testArithmetic_26() {
  function d(x,y)
  {
    x = x / 0.3 - 2;
    y = y / 0.3 - 1;
    var x2y2=(x*x+y*y);
    return '' + y;
  }
   for (var x = 0; x < 40; x++)
       assertEquals('9', d(x, 3));
}
testArithmetic_26.metadata = {
  bug: "CORE-48006"
};
