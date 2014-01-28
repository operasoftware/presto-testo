/* Basic test. */
function testGetProperty_1() {
  function func(obj) { return obj.property; }

  var obj = { property: "pass" };

  for (var i = 0; i < 100; ++i)
    assertEquals("pass", func(obj));
}

/* Test caching with two different objects. */
function testGetProperty_2() {
  function func(obj) { return obj.property; }

  var objs = [ { property: "pass" },
         { dummy: 0, property: "pass" } ];

  for (var i = 0; i < 100; ++i)
    for (var j = 0; j < objs.length; ++j)
      assertEquals("pass", func(objs[j]));
}

/* Test caching with two different objects.  This test differs from _2 primarily
   with native code; in _2 the native dispatcher typically starts out with no
   cache, and then when it updates, updates to support both objects while in
   this test the native dispatcher is first updated to support the first object
   only, then is updated again later to support both. */
function testGetProperty_3() {
  function func(obj) { return obj.property; }

  var objs = [ { property: "pass" },
         { dummy: 0, property: "pass" } ];

  for (var j = 0; j < objs.length; ++j)
    for (var i = 0; i < 100; ++i)
      assertEquals("pass", func(objs[j]));
}

/* Test reading property from prototype. */
function testGetProperty_4() {
  function cls() { this.dummy = 0; }

  cls.prototype.property = "pass";

  function func(obj) { return obj.property; }

  var obj = new cls();

  for (var i = 0; i < 100; ++i)
    assertEquals("pass", func(obj));
}

/* Test reading property from prototype on different objects with same
   prototype. */
function testGetProperty_5() {
  function cls() { this.dummy = "fail"; }

  cls.prototype.property = "pass";

  function func(obj) { return obj.property; }

  var objs = [ new cls(), new cls() ];

  objs[0].first = 0;
  objs[1].second = 0;

  for (var i = 0; i < 100; ++i)
    for (var j = 0; j < objs.length; ++j)
      assertEquals("pass", func(objs[j]));
}

/* Test reading property from different prototypes on different objects. */
function testGetProperty_6() {
  function cls1() { this.dummy = "fail"; }
  function cls2() { this.dummy = "fail"; }

  cls1.prototype.property = "pass";
  cls2.prototype.property = "pass";

  function func(obj) { return obj.property; }

  var objs = [ new cls1(), new cls2() ];

  for (var i = 0; i < 100; ++i)
    for (var j = 0; j < objs.length; ++j)
      assertEquals("pass", func(objs[j]));
}

/* Test reading property from prototype on one object and directly from object
   on another. */
function testGetProperty_7() {
  function cls() { this.dummy = "fail"; }

  cls.prototype.property = 0;

  function func(obj) { return obj.property; }

  var objs = [ new cls(), new cls() ];

  objs[1].property = 1;

  for (var i = 0; i < 100; ++i)
    for (var j = 0; j < objs.length; ++j)
      assertEquals(j, func(objs[j]));
}

function testGetProperty_8() {
  var Matrix2D = function (arg) {
    if (arg instanceof Array) {
      var matrix = new Matrix2D(arg[0]);
      this.xx = matrix.xx;
      this.yx = matrix.yx;
    } else {
      for (name in arg) {
        this[name] = arg[name];
      }
    }
  };
  Matrix2D.prototype.xx = 1;
  Matrix2D.prototype.yx = 0;

  new Matrix2D([{foobar:1}]);
  for (var i = 0; i < 50; i++) {
    var a = new Matrix2D([{xx:0,yx:1}]);
    assertEquals(0, a.xx);
    assertEquals(1, a.yx);
  }
}
testGetProperty_8.metadata = {
  bug:"CARAKAN-704"
};

function testGetProperty_9() {
  var _modulePrefixes = {
    dojo: { value: "PASS" }
  };

  function _getModulePrefix(module) {
    return _modulePrefixes[module].value;
  }

  for (var i = 0; i < 50; i++) {
    assertEquals("PASS", _getModulePrefix("dojo"));
  }
}
testGetProperty_9.metadata = {
  bug: "CORE-30090"
};

function testGetProperty_10() {
  function func(a, b, c) { return (a ? b : c).x.f(); }

  var a = true;
  var b = { x: { f: function () { return this; }, result: "pass" }, result: "fail" };
  var c = null;

  for (var i = 0; i < 100; ++i)
    assertEquals("pass", func(a, b, c).result);
}
testGetProperty_10.metadata = {
  bug: "CORE-33335"
};

function testGetProperty_11() {
  function C(o) {
    this.x = o;
  }

  function f(o) {
    return o.x;
  }

  var v = {};
  var p = "p";

  // create two objects with the same class and value
  // the type of x is 'object'
  var o1 = new C(v);
  var o2 = new C(v);

  // make sure to set up caches in f
  assertEquals(f(o1), v);
  assertEquals(f(o2), v);

  // make o1 have a hash class
  o1[p] = 1337;

  // that should not change anything
  assertEquals(f(o1), v);
  assertEquals(f(o2), v);

  // change the type of x to 'object?'
  o2.x = null;

  // assert that the value hasn't changed
  assertEquals(f(o1), v);
  // and that this has changed
  assertNull(f(o2));

  // change the type here as well, but here we bump into trouble
  // since we already have changed the type of the property in the
  // actual class, so we need to make sure that we've invalidated
  // the hash class of o1 as well!
  o1.x = null;

  assertNull(f(o1));
}
testGetProperty_11.metadata = {
  bug: "CT-617"
};

function testGetProperty_12() {
  function C() {
    this.x = 42;
    this.y = "foo";
  }

  C.prototype = {
    f: function f() {
      return this.z;
    },
    g: function g() {
      return this.f();
    }
  };

  C.prototype.z = Math.PI;

  var o = new C();

  assertFalse(o.hasOwnProperty('z'));
  o.f(o);
  o.z = Math.PI;

  for (var i = 0; i < 100; ++i) {
    assertEquals(o.g(), Math.PI);
  }
}
testGetProperty_12.metadata = {
  bug: "CT-639"
};

function testGetProperty_13() {
  var o = {
    foo: function foo() {
      return 1 + 4;
    }
  };

  function g() {
    for (var i = 0; i < 100; ++i) {
      o.foo();
      if (i == 98)
	o.foo = null;
    }
  }

  assertThrows(TypeError, g);
}
testGetProperty_13.metadata = {
  bug: "CT-801"
};

function testGetProperty_14() {
  var o = {
    foo: function foo() {
      return 1 + 4;
    }
  };

  function g() {
    for (var i = 0; i < 100; ++i) {
      o.foo();
      if (i == 98)
	o.foo = {};
    }
  }

  assertThrows(TypeError, g);
}
testGetProperty_14.metadata = {
  bug: "CT-801"
};

/* Test invalidation of negative property caches on objects with
   built-in prototypes. */

function testGetProperty_15()
{
  function func(o) { return o.x; }
  assertUndefined(func(new Array));
  Object.prototype.x = 10;
  assertEquals(10, func(new Array));
  delete Object.prototype.x;
}
testGetProperty_15.metadata = {
  bug: "CORE-39947"
};

function testGetProperty_16()
{
  function func(o) { return o.x; }
  assertUndefined(func(new String));
  Object.prototype.x = 10;
  assertEquals(10, func(new String));
  delete Object.prototype.x;
}
testGetProperty_16.metadata = {
  bug: "CORE-39947"
};

function testGetProperty_17()
{
  function func(o) { return o.x; }
  assertUndefined(func(new Number));
  Object.prototype.x = 10;
  assertEquals(10, func(new Number));
  delete Object.prototype.x;
}
testGetProperty_17.metadata = {
  bug: "CORE-39947"
};

function testGetProperty_18()
{
  function func(o) { return o.x; }
  assertUndefined(func(new Boolean));
  Object.prototype.x = 10;
  assertEquals(10, func(new Boolean));
  delete Object.prototype.x;
}
testGetProperty_18.metadata = {
  bug: "CORE-39947"
};

function testGetProperty_19()
{
  function func(o) { return o.x; }
  assertUndefined(func(new RegExp));
  Object.prototype.x = 10;
  assertEquals(10, func(new RegExp));
  delete Object.prototype.x;
}
testGetProperty_19.metadata = {
  bug: "CORE-39947"
};

function testGetProperty_20()
{
  function func(o) { return o.x; }
  assertUndefined(func(new Error));
  Object.prototype.x = 10;
  assertEquals(10, func(new Error));
  delete Object.prototype.x;
}
testGetProperty_20.metadata = {
  bug: "CORE-39947"
};

function testGetProperty_21()
{
  function func(o) { return o.x; }
  assertUndefined(func(new EvalError));
  Error.prototype.x = 10;
  assertEquals(10, func(new EvalError));
  delete Error.prototype.x;
}
testGetProperty_21.metadata = {
  bug: "CORE-39947"
};

function testGetProperty_22()
{
  function func(o) { return o.x; }
  assertUndefined(func(new RangeError));
  Error.prototype.x = 10;
  assertEquals(10, func(new RangeError));
  delete Error.prototype.x;
}
testGetProperty_22.metadata = {
  bug: "CORE-39947"
};

function testGetProperty_23()
{
  function func(o) { return o.x; }
  assertUndefined(func(new ReferenceError));
  Error.prototype.x = 10;
  assertEquals(10, func(new ReferenceError));
  delete Error.prototype.x;
}
testGetProperty_23.metadata = {
  bug: "CORE-39947"
};

function testGetProperty_24()
{
  function func(o) { return o.x; }
  assertUndefined(func(new SyntaxError));
  Error.prototype.x = 10;
  assertEquals(10, func(new SyntaxError));
  delete Error.prototype.x;
}
testGetProperty_24.metadata = {
  bug: "CORE-39947"
};

function testGetProperty_25()
{
  function func(o) { return o.x; }
  assertUndefined(func(new TypeError));
  Error.prototype.x = 10;
  assertEquals(10, func(new TypeError));
  delete Error.prototype.x;
}
testGetProperty_25.metadata = {
  bug: "CORE-39947"
};

function testGetProperty_26()
{
  function func(o) { return o.x; }
  assertUndefined(func(new URIError));
  Error.prototype.x = 10;
  assertEquals(10, func(new URIError));
  delete Error.prototype.x;
}
testGetProperty_26.metadata = {
  bug: "CORE-39947"
};

function testGetProperty_27()
{
   function g(i)
   {
       if(this.a == null || !this.a[i])
	   return null;
   }

   var obj = {a: {}};
   obj.__proto__.g = g;
   var j = 0;
   for (var i = 0; i < 200; i++)
   {
       if (obj.g())
          j++;
       if (i == 50)
	   obj.a = null;
   }
   assertEquals(0, j);
}
testGetProperty_27.metadata = {
  bug: "CORE-40836"
};

function testSetProperty_0() {
  try {
    Object.defineProperty(Array.prototype, 0, { value: 10, writable: false });

    var a = [];
    a[0] = 20;

    assertEquals(10, a[0]);
  } finally {
    delete Array.prototype[0];
  }
}

function testSetProperty_1() {
  try {
    var calls = 0;

    Object.defineProperty(Array.prototype, 0, { get: function () { return 10; },
					        set: function () { calls++; }});

    var a = [];
    a[0] = 20;

    assertEquals(1, calls);
    assertEquals(10, a[0]);
  } finally {
    delete Array.prototype[0];
  }
}

function testSetProperty_2() {
  try {
    Object.defineProperty(Array.prototype, 0, { get: function () { return 10; }});

    var a = [];
    a[0] = 20;

    assertEquals(10, a[0]);
  } finally {
    delete Array.prototype[0];
  }
}

function testSetProperty_3() {
  try {
    Object.defineProperty(Array.prototype, 0, { value: 10, writable: false });

    var a = [];

    assertThrows(TypeError, function() {
		   "use strict";
		   a[0] = 20;
		 });

    assertEquals(10, a[0]);
  } finally {
    delete Array.prototype[0];
  }
}

function testSetProperty_4() {
  try {
    Object.defineProperty(Array.prototype, 0, { get: function() { return 10; } });

    var a = [];

    assertThrows(TypeError, function() {
		   "use strict";
		   a[0] = 20;
		 });

    assertEquals(10, a[0]);
  } finally {
    delete Array.prototype[0];
  }
}

function testSetProperty_5() {
  try {
    Object.defineProperty(Object.prototype, 0, { value: 10, writable: false });

    var a = [];
    a[0] = 20;

    assertEquals(10, a[0]);
  } finally {
    delete Object.prototype[0];
  }
}

function testSetProperty_6() {
  try {
    var calls = 0;

    Object.defineProperty(Object.prototype, 0, { get: function () { return 10; },
					        set: function () { calls++; }});

    var a = [];
    a[0] = 20;

    assertEquals(1, calls);
    assertEquals(10, a[0]);
  } finally {
    delete Object.prototype[0];
  }
}

function testSetProperty_7() {
  try {
    Object.defineProperty(Object.prototype, 0, { get: function () { return 10; }});

    var a = [];
    a[0] = 20;

    assertEquals(10, a[0]);
  } finally {
    delete Object.prototype[0];
  }
}

function testSetProperty_8() {
  try {
    Object.defineProperty(Object.prototype, 0, { value: 10, writable: false });

    var a = [];

    assertThrows(TypeError, function() {
		   "use strict";
		   a[0] = 20;
		 });

    assertEquals(10, a[0]);
  } finally {
    delete Object.prototype[0];
  }
}

function testSetProperty_9() {
  try {
    Object.defineProperty(Object.prototype, 0, { get: function() { return 10; } });

    var a = [];

    assertThrows(TypeError, function() {
		   "use strict";
		   a[0] = 20;
		 });

    assertEquals(10, a[0]);
  } finally {
    delete Object.prototype[0];
  }
}

function testSetProperty_10() {
  var C = function() {};
  Object.defineProperty(C.prototype, 0, { value: 10, writable: false });

  var a = new C();
  a[0] = 20;

  assertEquals(10, a[0]);
}

function testSetProperty_11() {
  var calls = 0;

  var C = function() {};
  C.prototype = { get 0() { return 10; },
		  set 0(a) { calls++; } };

  var a = new C();
  a[0] = 20;

  assertEquals(1, calls);
  assertEquals(10, a[0]);
}

function testSetProperty_12() {
  var C = function() {};
  C.prototype = { get 0() { return 10; } };

  var a = new C();
  a[0] = 20;

  assertEquals(10, a[0]);
}

/* Test reading property from prototype of string. */
function testGetPropertyFromBuiltin_1() {
  function func(obj) { return obj.toString; }

  for (var i = 0; i < 100; ++i)
    assertEquals(String.prototype.toString, func("pass" + i));
}

/* Test reading property from prototype of number. */
function testGetPropertyFromBuiltin_2() {
  function func(obj) { return obj.toString; }

  for (var i = 0; i < 100; ++i)
    assertEquals(Number.prototype.toString, func(i));
}

/* Test reading property from prototype of boolean. */
function testGetPropertyFromBuiltin_3() {
  function func(obj) { return obj.toString; }

  for (var i = 0; i < 100; ++i)
    assertEquals(Boolean.prototype.toString, func(i < 50));
}

function testGetPropertyFromBuiltin_4()
{
  var o = {name: "foo"};
  String.prototype.foo = o;
  var s = "";

  function f(s)
  {
     if (s.foo)
       if (s.foo.name == "foo")
          return s.foo.name;
     return "foo";
  }

  for (var i = 0; i < 100; i++)
      assertEquals("foo", f(s));
}
testGetPropertyFromBuiltin_4.metadata = {
  bug: "CORE-40159"
};

