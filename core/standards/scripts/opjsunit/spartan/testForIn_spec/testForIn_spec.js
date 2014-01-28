/*
 * Also have basic tests for enumeration of properties here since that
 * relies on for...in under the hood
 */

function testEnum_0() {
  var o = {
    x:0
  };
  assertEnum(o, "x");
}

function testEnum_1() {
  function func() {
    this.x = 0;
  }
  var o = new func();
  assertEnum(o, "x");
}

function testEnum_2() {
  function func() {
    this.x = 0;
  }
  func.prototype = {
    y:1
  };
  var o = new func();
  assertEnum(o, "y");
}
testEnum_2.metadata = {
  bug:"CARAKAN-102"
};

function testEnum_3() {
  function grandparent() {
    this.x = 0;
  }
  function parent() {
    this.y = 0;
  }
  parent.prototype = new grandparent();
  function child() {
    this.z = 0;
  }
  child.prototype = new parent();

  var o = new child();

  assertEnum(o, "x");
  assertEnum(o, "y");
  assertEnum(o, "z");
}
testEnum_2.metadata = {
  bug:"CARAKAN-102"
};

function testEnum_4() {
  var x = {
    a:1,
    b:2,
    c:3
  };
  var i = 0;
  for (var name in x) {
    if ('b' in x) {
      delete x['b'];
    }
    i++;
  }
  assertEquals(2,i);
}

function testEnum_5() {
  var x = {
    a:1,
    b:2,
    c:3
  };
  var i = 0;
  for (var name in x) {
    for (var prop in x) {
      delete x[prop];
    }
    i++;
  }
  assertEquals(1,i);
}

function testEnum_6() {
  var x = {};
  x.constructor = 42;
  assertEnum(x, "constructor");
}
testEnum_6.metadata = {
  bug:"CARAKAN-134"
};

function testForIn_0() {
  var i = 0;
  for (var x in {}) {
    i++;
  }
  assertEquals(0, i);
}

/*
 * Note the behaviour for the next two tests changed in ES3.1 to match the
 * de-facto  required behaviour
 */

function testForIn_1() {
  var i = 0;
  function func() {
    for (var x in undefined) {i++;}
  }
  assertDoesNotThrow(func);
  assertEquals(0, i);
}
testForIn_1.metadata = {
  bug:"CARAKAN-104",
  version:"3.1"
};


function testForIn_2() {
  var i = 0;
  function func() {
    for (var x in null) {i++;}
  }
  assertDoesNotThrow(func);
  assertEquals(0, i);
}
testForIn_2.metadata = {
  bug:"CARAKAN-104",
  version:"3.1"
};

function testFonIn_3() {
  var o = {x:0, y:1, z:2};
  var i = 0;
  for (var name in o) {
    if (o[name]%2 == 0) {
      continue;
    }
    i++;
  }
  assertEquals(1, i);
}

function testForIn_4() {
  var o = {x:0, y:1, z:2};
  var i = 0;
  for (var name in o) {
    if (o[name]%2 == 0) {
      continue;
    }
    i++;
  }
  assertEquals(1, i);
}

function testForIn_5() {
  var o = {x:0, y:1, z:2};
  var p = {a:0, b:1, c:2};
  var i = 0;
  a:
  for (var n in p) {
    i += p[n];
    b:
      for (var name in o) {
	if (o[name]%2 == 1) {
	  continue a;
	}
	i++;
      }
  }
  assertEquals(6, i);
}

function testForIn_6() {
  var o = {x:0, y:1, z:2};
  var p = {a:0, b:1, c:2};
  var i = 0;
  a:
  for (var n in p) {
    i += p[n];
    b:
      for (var name in o) {
	if (o[name]%2 == 1) {
	  continue b;
	}
	i++;
      }
  }
  assertEquals(9, i);
}

function testForIn_7() {
  var i=0;
  var o = {x:0, y:1, z:2};
   for (var name in o) {
    if (o[name]%2 == 0) {
      break;
    }
    i++;
  }
  assertEquals(0, i);
}

function testForIn_8() {
  var o = {x:0, y:1, z:2};
  var p = {a:0, b:1, c:2};
  var i = 0;
  a:
  for (var n in p) {
    i += p[n];
    b:
      for (var name in o) {
	if (o[name]%2 == 1) {
	  break a;
	}
	i++;
      }
  }
  assertEquals(1, i);
}

function testForIn_9() {
  var o = {x:0, y:1, z:2};
  var p = {a:0, b:1, c:2};
  var i = 0;
  a:
  for (var n in p) {
    i += p[n];
    b:
      for (var name in o) {
	if (o[name]%2 == 1) {
	  break b;
	}
	i++;
      }
  }
  assertEquals(6, i);
}

function testForIn_10() {
  var x = {
    a:1
  };
  for (var name in x) {
    delete x[name];
    var is_gone = !(name in x);
  }
  assertTrue(is_gone);
}

/*
 * ES3.1 makes it clear that we must not enumerate over properties themselves
 * added during enumeration
 */

function testForIn_11() {
  var x = {
    a:0
  };
  var i = 0;
  for(name in x) {
    x['b'] = 1;
    i++;
  }
  assertEquals(1, i);
}

function testForIn_12() {
  var x = {
    a:1
  };
  var y = {
    b:null
  };
  for (y.b in x) {}
  assertEquals('a', y.b);
}

function testForIn_13() {
  var x = {
    a:1
  };
  var y = {
    b:null
  };
  for (y['b'] in x) {}
  assertEquals('a', y.b);
}

/* The below (14 to 25) are a whole bunch of tests from an otherwise irrelevant
 * Mozilla jstest. */

function f1(o) {
  for(var x in o);
  return x;
}

function f2(o){
  with(this)
    for(var x in o);
  return x;
}

function f2novar(o) {
  with(this)
    for(x in o);
  return x;
}

function f3(i, o) {
  for(var x = i in o);
  return x;
}

function f4(i, o) {
  with(this)
    for(var x = i in o);
  return x;
}

function testForIn_14() {
  assertEquals(undefined, f1([]))
}

function testForIn_15() {
  assertEquals("0", f1(['first']))
}

function testForIn_16() {
  assertEquals(undefined, f2([]))
}

function testForIn_17() {
  assertEquals("0", f2(['first']))
}

function testForIn_18() {
  assertEquals(42, f3(42, []))
}

function testForIn_19() {
  assertEquals("0", f3(42, ['first']))
}

function testForIn_20() {
  assertEquals(42, f4(42, []))
}

function testForIn_21() {
  assertEquals("0", f4(42, ['first']))
}

function testForIn_22() {
  this.x = 41;
  assertEquals(undefined, f2([]))
}

function testForIn_23() {
  this.x = 41;
  assertEquals(41, f2novar([]))
}

function testForIn_24() {
  this.x = 41;
  assertEquals(undefined, f2(['first']))
}

function testForIn_25() {
  this.x = 41;
  assertEquals("0", f2novar(['first']))
}

// The above was the final one from that block of Mozilla jstests.

function testForIn_26() {
  function setObject(object, property){
    object[property] = "1";
  }

  var obj = {};
  setObject(obj, "a");
  setObject(obj, "b");
  obj.b = "2";

  var properties = [];
  for (var prop in obj) properties.push(prop);
  assertArrayEquals(["a", "b"], properties);
}

function testForIn_27() {
  function setObject(property){
    obj[property] = "1";
  }

  var obj = {};
  setObject("a");
  setObject("b");
  obj.b = "2";

  var properties = [];
  for (var prop in obj) properties.push(prop);
  assertArrayEquals(["a", "b"], properties);
}

function testForIn_28()
{
    function f()
    {
        var a = [];
        a[0] = 1;
        a[1] = 2;
        a[2] = 3;

        var o = { a: a };

        for (var i in o.a)
        {
             if (i == 1)
                 delete a[1];

	     // Irrelevant, access needed to trigger crash (or not.)
	     assertTrue(o.a[i] == undefined || (i & 1) == 0);
       }
    }
    for (var i = 0; i < 100; i ++)
         f();
}
testForIn_28.metadata = {
  bug:"CORE-40587"
};

function testForIn_29() {
  function C() {
    this.a = 0;
    this.b = 0;
    this.c = 0;
    this.d = 0;
    this.e = 0;
    this.f = 0;
    this.g = 0;
    this.h = 0;
    this.i = 0;
    this.j = 0;
    this.k = 0;
  }

  var o = new C();
  o.l = 42;
  var p = new C();

  for (var x in p) {
    assertFalse(p.hasOwnProperty('l'));
  }
}
testForIn_29.metadata = {
  bug:"CORE-46166"
};
