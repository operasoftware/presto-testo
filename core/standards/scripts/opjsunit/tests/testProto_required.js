function testDefined_0() {
  var o = {};
  assertDefined(o.__proto__);
  assertEquals("object", typeof o.__proto__);
}

function testDefined_1() {
  assertDefined(Array.__proto__);
  assertEquals("function", typeof Array.__proto__);
}

function testDefined_2() {
  assertDefined("abc".__proto__);
  assertEquals("object", typeof "abc".__proto__);
}

function testDefined_3() {
  assertDefined(true.__proto__);
  assertEquals("object", typeof true.__proto__);
}

function testGet_0() {
  var a = new Object();
  assertEquals(Object.prototype, a.__proto__);
}

function testGet_1() {
  var a = new Array();
  assertEquals(Array.prototype, a.__proto__);
}

function testGet_2() {
  var a = new String();
  assertEquals(String.prototype, a.__proto__);
}

function testGet_3() {
  var a = function(){};
  assertEquals(Function.prototype, a.__proto__);
}

function testGet_4() {
  var a = new Boolean();
  assertEquals(Boolean.prototype, a.__proto__);
}

function testGet_5() {
  var a = new RegExp();
  assertEquals(RegExp.prototype, a.__proto__);
}

function testGet_6() {
  var p = {
    a:1
  };
  function o() {
    this.b = 1;
  }
  o.prototype = p;
  var a = new o();
  assertEquals(p, a.__proto__);
}

function testGet_7() {
  var q = {};
  var p = function(){};
  p.prototype = q;

  function o() {
    this.b = 1;
  }
  var o_p = new p();
  o.prototype = o_p;

  var a = new o();

  assertEquals(o_p, a.__proto__);
  assertEquals(q, a.__proto__.__proto__);
  assertEquals(Object.prototype, a.__proto__.__proto__.__proto__);
}

function testGet_8() {
  assertEquals(null, Object.prototype.__proto__);
}

function testGet_9() {
  assertEquals(Function.prototype, Array.__proto__);
}

function testSet_0() {
  var o = {
    "0":1,
    "1":2,
    "length":2
  };
  assertEquals(Object.prototype, o.__proto__);
  o.__proto__ = Array.prototype;
  assertEquals(Array.prototype, o.__proto__);
  assertEquals(2, o.pop());
}

function testSet_1() {
  var a = {
    i:0
  };
  var b = {
    i:1
  };
  var c = function(){};
  c.prototype = b;

  var o = new c();
  assertEquals(1, o.i);
  o.__proto__ = a;
  assertEquals(0, o.i);
}

function testSet_2() {
  var a = {
    i:0,
    k:-1
  };
  var b = {
    i:1,
    j:2
  };
  var c = function(){};
  c.prototype = a;

  var o = new c();
  o.__proto__ = b;

  var props = [];

  for (var p in o) {
    props.push(p);
  }

  assertArrayEquals(["i", "j"], props);
}

function testSet_3() {
  var a = new String("abc");
  a.__proto__ = Array.prototype;
  assertUndefined(a.charCodeAt);
  var b = a.concat("efg");
  assertEquals("a,b,c", b[0].toString());
  assertEquals("efg", b[1]);
  assertEquals(2, b.length);
}

function testSet_4() {
  assertTrue("__proto__" in {})
}

function testSet_5() {
  var e = {};
  e.__proto__ = null;
  assertUndefined(e.__proto__);
}

function testSet_6() {
  var a = Object.create(null);
  var b = Object.create(a);
  var c = {};
  // Invalidating previous prototype object (null),
  // elicited a crash. The update is here to test this.
  a.__proto__ = c;
  assertEquals(c, a.__proto__);
}
testSet_6.metadata = {
  bug: "CORE-40890"
};

function testSet_7() {
  var func = function() {
    "use strict";
    var a = Object.freeze({});
    a.__proto__ = {};
  };
  assertThrows(TypeError(), func);
}
testSet_7.metadata = {
  bug: "CORE-41342"
};

function testSet_8() {
  var func = function() {
    var a = Object.freeze({});
    a.__proto__ = {};
  };
  assertThrows(TypeError(), func);
}

function testSet_9() {
  var f = function(o) {
    return o.x;
  };

  var a = {x: 1};
  var b = Object.create(a);

  for (var i = 0; i < 100; i++)
    assertEquals(1, f(b));

  b.__proto__ = null;
  assertEquals(undefined, f(b));
}

function testSet_10() {
  var obj = {};
  obj.__proto__ = "x";
  assertType("object", Object.getPrototypeOf(obj));
  assertTrue(Object.getPrototypeOf(obj) instanceof String);
  assertEquals("x", Object.getPrototypeOf(obj).valueOf());
}

function testSet_11() {
  var obj = {};
  obj.__proto__ = 1;
  assertType("object", Object.getPrototypeOf(obj));
  assertTrue(Object.getPrototypeOf(obj) instanceof Number);
  assertEquals(1, Object.getPrototypeOf(obj).valueOf());
}

function testSet_12() {
  var obj = {};
  obj.__proto__ = true;
  assertType("object", Object.getPrototypeOf(obj));
  assertTrue(Object.getPrototypeOf(obj) instanceof Boolean);
  assertEquals(true, Object.getPrototypeOf(obj).valueOf());
}

function testSet_13() {
    /* This used to test that setting the prototype to a non-Object
       threw TypeError. That is not expected behaviour, but rather
       than confuse recorded results, turn this into something
       that passes. Like duplicating testSet_14().

       See testSet_17() for the updated test for this. */
/*
  var func = function() {
    var a = {};
    a.__proto__ = undefined;
  };
  assertThrows(TypeError(), func);
*/
  var a = {};
  a.__proto__ = null;
  assertNull(Object.getPrototypeOf(a));
}

function testSet_14() {
  var a = {};
  a.__proto__ = null;
  assertNull(Object.getPrototypeOf(a));
}

function testSet_15() {
  var new_proto = Object.create(null);
  Object.prototype.__proto__ = new_proto;
  assertEquals(new_proto, Object.getPrototypeOf(Object.prototype));
}

function testSet_16() {
    var obj = {a0: 1};
    var f = '1';
    obj["a" + f] = function() { return 1; };
    assertTrue(obj.hasOwnProperty("a1"));
    obj.__proto__ = {};
    assertEquals('function', typeof obj.a1);
    assertEquals(1, obj.a1());
    assertEquals(1, obj.a0);
}
testSet_16.metadata = {
  bug: "CORE-47615"
};

function testSet_17() {
  var e = {};
  var p = Object.getPrototypeOf(e);
  e.__proto__ = undefined;
  assertEquals(p, Object.getPrototypeOf(e));
}
testSet_17.metadata = {
  bug: "CORE-47438"
};

function testCyclic_0() {
  function func() {
    Object.prototype.__proto__ = new Object();
  }
  assertThrows(Error(), func);
}

function testCyclic_1() {
  function func() {
    function a() {}
    function b() {}
    b.prototype = new a();
    function c() {}
    c.prototype = new b();

    var o1 = new c();
    o1.__proto__.__proto__ = o1;
  }
  assertThrows(Error(), func);
}

function testCyclic_2() {
  function func() {
    function a() {}
    function b() {}
    var b_proto = new a();
    b.prototype = b_proto;
    function c() {}
    var c_proto = new b();
    c.prototype = c_proto;

    var o1 = new c();
    c_proto.__proto__ = o1;
  }
  assertThrows(Error(), func);
}

function testCycle_3()
{
    // Prototype chain loop (via class instance information.)
    var objA = {};
    var objB = {};
    var objC = {};
    var objD = {};

    objA.__proto__ = objB; // #1
    objB.__proto__ = objC; // #2
    try { objC.__proto__ = objA; } catch (e) {};
    // Above is not permitted, as objA.prototype.prototype == objC (a cycle.)

    objB.__proto__ = objD; // #3
    // Breaking the cycle by updating objB's prototype ought be fine & take care of the problem.

    // #1 made objB a prototype object + recorded objA's class as an instance of objA's prototype (objB.)
    // #2 recorded objC as an instance of objB.prototype's class + made objC itself a
    // prototype object. It also records objB's class as an instance of the prototype that is objC.
    // #3 changes the prototype object for objB's class to objD, and makes objB's class an
    // instance of objD.
    //
    // When objC.__proto__ is set to objA, objC is invalidated (it is a prototype
    // object.) Consequently, its class and prototype (objA) are invalidated and
    // as objA.prototype == objB, it will be invalidated also. objB is a prototype
    // object that records {objC.klass, objD.klass} as instances, which will proceed
    // to be invalidated. Which will lead back to objC and a loop has been entered.
    objC.__proto__ = objA;
}
testCycle_3.metadata = {
  bug: "CORE-37003"
};

function testInstanceOf_0() {
  var a = {};
  var b = {};
  b.__proto__ = a;
  function F() {}
  F.prototype = a;

  assertTrue(b instanceof F);
  assertFalse(a instanceof F);
}

function testInstanceOf_1() {
  var a = {};
  var b = {};
  var c = {};
  b.__proto__ = a;
  c.__proto__ = b;

  function F() {}
  F.prototype = a;

  assertTrue(c instanceof F);
  assertTrue(b instanceof F);
  assertFalse(a instanceof F);
}

function testDontEnum_0() {
  var a = new Object();
  assertDontEnum(Object.prototype, "__proto__");
}

function testDontEnum_1() {
  var a = new Array();
  assertDontEnum(Array.prototype, "__proto__");
}

function testDontEnum_2() {
  var a = new String();
  assertDontEnum(String.prototype, "__proto__");
}

function testDontEnum_3() {
  var a = function(){};
  assertDontEnum(Function.prototype, "__proto__");
}

function testDontEnum_4() {
  var a = new Boolean();
  assertDontEnum(Boolean.prototype, "__proto__");
}

function testDontEnum_5() {
  var a = new RegExp();
  assertDontEnum(RegExp.prototype, "__proto__");
}

function testDontEnum_6() {
  var obj = {
    x: 10,
    __proto__: null
  };

  assertDontEnum(obj, "__proto__");
}

function testObjectLiteral_0() {
  var a = {};
  var obj = {__proto__: a};
  assertEquals(a, Object.getPrototypeOf(obj));
}

function testGetter_0() {
  var desc = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__");
  assertEquals("function", typeof desc.get);
}

function testGetter_1() {
  var desc = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__");
  assertEquals(0, desc.get.length);
}

function testGetter_2() {
  var f = function(g) {
    g();
  };
  var desc = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__");
  assertThrows(TypeError(), f, desc.get);
}

function testGetter_3() {
  var desc = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__");
  assertEquals(Number.prototype, desc.get.call(1));
}

function testGetter_4() {
  var desc = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__");
  assertEquals(Object.getPrototypeOf(desc), desc.get("extra argument"));
}

function testSetter_0() {
  var desc = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__");
  assertThrows(TypeError, function(){desc.set;});
}
