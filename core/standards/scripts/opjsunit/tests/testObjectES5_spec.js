//opjsunit: run_tests_individually

function testGetPrototypeOf_0()
{
    assertEquals(Array.prototype, Object.getPrototypeOf([]));
}

function testGetPrototypeOf_1()
{
    assertThrows(TypeError, function () { Object.getPrototypeOf(); });
}

function testGetPrototypeOf_2()
{
    assertThrows(TypeError, function () { Object.getPrototypeOf(""); });
}

function testGetOwnPropertyDescriptor_0()
{
    assertThrows(TypeError, function () { Object.getOwnPropertyDescriptor(); });
}

function testGetOwnPropertyDescriptor_1()
{
    assertThrows(TypeError, function () { Object.getOwnPropertyDescriptor(null); });
}

function testGetOwnPropertyDescriptor_2()
{
    assertThrows(TypeError, function () { Object.getOwnPropertyDescriptor(10); });
}

function testGetOwnPropertyDescriptor_3()
{
    assertUndefined(Object.getOwnPropertyDescriptor({}, "x"));
}

function testGetOwnPropertyDescriptor_4()
{
    assertUndefined(Object.getOwnPropertyDescriptor([], 0));
}

function testGetOwnPropertyDescriptor_5()
{
    assertUndefined(Object.getOwnPropertyDescriptor([], "0"));
}

function testGetOwnPropertyDescriptor_6()
{
    assertObjectEquals({ value: 10, writable: true, enumerable: true, configurable: true },
                       Object.getOwnPropertyDescriptor({ x: 10 }, "x"));
}

function testGetOwnPropertyDescriptor_7()
{
    assertObjectEquals({ value: 10, writable: true, enumerable: true, configurable: true },
                       Object.getOwnPropertyDescriptor([10], 0));
}

function testGetOwnPropertyDescriptor_8()
{
    var o = { get x() { return 10; } };
    assertObjectEquals({ get: o.__lookupGetter__("x"), set: undefined, enumerable: true, configurable: true },
                       Object.getOwnPropertyDescriptor(o, "x"));
}

function testGetOwnPropertyDescriptor_9()
{
    var o = { set x(a) {} };
    assertObjectEquals({ get: undefined, set: o.__lookupSetter__("x"), enumerable: true, configurable: true },
                       Object.getOwnPropertyDescriptor(o, "x"));
}

function testGetOwnPropertyDescriptor_10()
{
    var o = { get x() { return 10; }, set x(a) {} };
    assertObjectEquals({ get: o.__lookupGetter__("x"), set: o.__lookupSetter__("x"), enumerable: true, configurable: true },
                       Object.getOwnPropertyDescriptor(o, "x"));
}

function testGetOwnPropertyDescriptor_11()
{
    var o = [];
    var g = function () { return 10; };
    o.__defineGetter__(0, g);
    assertObjectEquals({ get: g, set: undefined, enumerable: true, configurable: true },
                       Object.getOwnPropertyDescriptor(o, "0"));
}

function testGetOwnPropertyDescriptor_12()
{
    var o = [];
    var s = function (a) {};
    o.__defineSetter__(0, s);
    assertObjectEquals({ get: undefined, set: s, enumerable: true, configurable: true },
                       Object.getOwnPropertyDescriptor(o, "0"));
}

function testGetOwnPropertyDescriptor_13()
{
    var o = [];
    var g = function () { return 10; };
    var s = function (a) {};
    o.__defineGetter__(0, g);
    o.__defineSetter__(0, s);
    assertObjectEquals({ get: g, set: s, enumerable: true, configurable: true },
                       Object.getOwnPropertyDescriptor(o, "0"));
}

function testGetOwnPropertyDescriptor_14()
{
    assertObjectEquals({ value: 0, writable: true, enumerable: false, configurable: false },
                       Object.getOwnPropertyDescriptor([], "length"));
}

function testGetOwnPropertyDescriptor_15()
{
    assertObjectEquals({ value: 1, writable: false, enumerable: false, configurable: false },
                       Object.getOwnPropertyDescriptor([].push, "length"));
}

function testGetOwnPropertyNames_0()
{
    assertThrows(TypeError, function () { Object.getOwnPropertyNames(); });
}

function testGetOwnPropertyNames_1()
{
    assertThrows(TypeError, function () { Object.getOwnPropertyNames(""); });
}

function testGetOwnPropertyNames_2()
{
    assertArrayEquals([ "x", "y", "z" ], Object.getOwnPropertyNames({ x: 10, y: 20, z: 30 }));
}

function testGetOwnPropertyNames_3()
{
    assertArrayEquals([ "0", "1", "2", "length" ], Object.getOwnPropertyNames([ "a", "b", "c" ]));
}

function testGetOwnPropertyNames_4()
{
    assertArrayEquals([ "length", "name", "arguments", "caller" ], Object.getOwnPropertyNames([].push));
}

function testDefineProperty_0()
{
    assertThrows(TypeError, function () { Object.defineProperty(); });
}

function testDefineProperty_1()
{
    assertThrows(TypeError, function () { Object.defineProperty(""); });
}

function testDefineProperty_2()
{
    assertThrows(TypeError, function () { Object.defineProperty({}, "x"); });
}

function testDefineProperty_3()
{
    assertThrows(TypeError, function () { Object.defineProperty({}, "x", ""); });
}

function testDefineProperty_4()
{
    var o = {};
    assertEquals(o, Object.defineProperty(o, "x", { writable: true, enumerable: true, configurable: true }));
    assertTrue("x" in o);
    assertEnum(o, "x");
    assertUndefined(o.x);
    o.x = 10;
    assertEquals(10, o.x);
    assertTrue(delete o.x);
    assertFalse("x" in o);
}

function testDefineProperty_5()
{
    var o = {};
    assertEquals(o, Object.defineProperty(o, "x", { value: 5, writable: true, enumerable: true, configurable: true }));
    assertTrue("x" in o);
    assertEnum(o, "x");
    assertEquals(5, o.x);
    o.x = 10;
    assertEquals(10, o.x);
    assertTrue(delete o.x);
    assertFalse("x" in o);
}

function testDefineProperty_6()
{
    var o = {};
    assertEquals(o, Object.defineProperty(o, "x", { value: 5, writable: false, enumerable: true, configurable: true }));
    assertTrue("x" in o);
    assertEnum(o, "x");
    assertEquals(5, o.x);
    o.x = 10;
    assertEquals(5, o.x);
    assertTrue(delete o.x);
    assertFalse("x" in o);
}

function testDefineProperty_7()
{
    var o = {};
    assertEquals(o, Object.defineProperty(o, "x", { value: 5, writable: true, enumerable: false, configurable: true }));
    assertTrue("x" in o);
    assertDontEnum(o, "x");
    assertEquals(5, o.x);
    o.x = 10;
    assertEquals(10, o.x);
    assertTrue(delete o.x);
    assertFalse("x" in o);
}

function testDefineProperty_8()
{
    var o = {};
    assertEquals(o, Object.defineProperty(o, "x", { value: 5, writable: true, enumerable: true, configurable: false }));
    assertTrue("x" in o);
    assertEnum(o, "x");
    assertEquals(5, o.x);
    o.x = 10;
    assertEquals(10, o.x);
    assertFalse(delete o.x);
    assertTrue("x" in o);
}

function testDefineProperty_9()
{
    var o = { a: 1, b: 2, c: 3 };
    assertEquals(o, Object.defineProperty(o, "b", { value: "new" }));
    assertObjectEquals({ a: 1, b: "new", c: 3 }, o);
    assertEnum(o, "b");
    assertEquals("new", o.b);
    o.b = 5;
    assertEquals(5, o.b);
    assertTrue(delete o.b);
    assertFalse("b" in o);
}

function testDefineProperty_10()
{
    var o = { a: 1, b: 2, c: 3 };
    assertEquals(o, Object.defineProperty(o, "b", { value: "new", writable: false }));
    assertObjectEquals({ a: 1, b: "new", c: 3 }, o);
    assertEnum(o, "b");
    assertEquals("new", o.b);
    o.b = 5;
    assertEquals("new", o.b);
    assertTrue(delete o.b);
    assertFalse("b" in o);
}

function testDefineProperty_11()
{
    var o = { a: 1, b: 2, c: 3 };
    assertEquals(o, Object.defineProperty(o, "b", { value: "new", enumerable: false }));
    assertObjectEquals({ a: 1, b: "new", c: 3 }, o);
    assertDontEnum(o, "b");
    assertEquals("new", o.b);
    o.b = 5;
    assertEquals(5, o.b);
    assertTrue(delete o.b);
    assertFalse("b" in o);
}

function testDefineProperty_12()
{
    var o = { a: 1, b: 2, c: 3 };
    assertEquals(o, Object.defineProperty(o, "b", { value: "new", configurable: false }));
    assertObjectEquals({ a: 1, b: "new", c: 3 }, o);
    assertEnum(o, "b");
    assertEquals("new", o.b);
    o.b = 5;
    assertEquals(5, o.b);
    assertFalse(delete o.b);
    assertTrue("b" in o);
}

function testDefineProperty_13()
{
    var o = { a: 1, b: 2, c: 3 };
    var g = function () { return "new"; };
    assertEquals(o, Object.defineProperty(o, "b", { get: g, enumerable: true, configurable: true }));
    assertObjectEquals({ a: 1, b: "new", c: 3 }, o);
    assertEnum(o, "b");
    assertEquals("new", o.b);
    o.b = 5;
    assertEquals("new", o.b);
    assertTrue(delete o.b);
    assertFalse("b" in o);
}

function testDefineProperty_14()
{
    var o = { a: 1, b: 2, c: 3 }, x = "wrong";
    var g = function () { return "new"; };
    var s = function (y) { x = y; };
    assertEquals(o, Object.defineProperty(o, "b", { get: g, set: s, enumerable: true, configurable: true }));
    assertObjectEquals({ a: 1, b: "new", c: 3 }, o);
    assertEnum(o, "b");
    assertEquals("new", o.b);
    o.b = 5;
    assertEquals("new", o.b);
    assertEquals(5, x);
    assertTrue(delete o.b);
    assertFalse("b" in o);
}

function testDefineProperty_15()
{
    var o = { a: 1, b: 2, c: 3 }, x = "wrong";
    var g = function () { return "new"; };
    var s = function (y) { x = y; };
    assertEquals(o, Object.defineProperty(o, "b", { get: g, set: s, enumerable: false, configurable: true }));
    assertObjectEquals({ a: 1, b: "new", c: 3 }, o);
    assertDontEnum(o, "b");
    assertEquals("new", o.b);
    o.b = 5;
    assertEquals("new", o.b);
    assertEquals(5, x);
    assertTrue(delete o.b);
    assertFalse("b" in o);
}

function testDefineProperty_16()
{
    var o = { a: 1, b: 2, c: 3 }, x = "wrong";
    var g = function () { return "new"; };
    var s = function (y) { x = y; };
    assertEquals(o, Object.defineProperty(o, "b", { get: g, set: s, enumerable: true, configurable: false }));
    assertObjectEquals({ a: 1, b: "new", c: 3 }, o);
    assertEnum(o, "b");
    assertEquals("new", o.b);
    o.b = 5;
    assertEquals("new", o.b);
    assertEquals(5, x);
    assertFalse(delete o.b);
    assertTrue("b" in o);
}

function testDefineProperty_17()
{
    var o = {};
    assertEquals(o, Object.defineProperty(o, "0", { writable: true, enumerable: true, configurable: true }));
    assertTrue("0" in o);
    assertEnum(o, "0");
    assertUndefined(o[0]);
    assertObjectEquals({ value: undefined, writable: true, enumerable: true, configurable: true }, Object.getOwnPropertyDescriptor(o, "0"));
    o[0] = 10;
    assertEquals(10, o[0]);
    assertTrue(delete o[0]);
    assertFalse("0" in o);
}

function testDefineProperty_18()
{
    var o = {};
    assertEquals(o, Object.defineProperty(o, "0", { value: 5, writable: true, enumerable: true, configurable: true }));
    assertTrue("0" in o);
    assertEnum(o, "0");
    assertEquals(5, o[0]);
    assertObjectEquals({ value: 5, writable: true, enumerable: true, configurable: true }, Object.getOwnPropertyDescriptor(o, "0"));
    o[0] = 10;
    assertEquals(10, o[0]);
    assertTrue(delete o[0]);
    assertFalse("0" in o);
}

function testDefineProperty_19()
{
    var o = {};
    assertEquals(o, Object.defineProperty(o, "0", { value: 5, writable: false, enumerable: true, configurable: true }));
    assertTrue("0" in o, "property exists");
    assertEnum(o, "0");
    assertEquals(5, o[0]);
    assertObjectEquals({ value: 5, writable: false, enumerable: true, configurable: true }, Object.getOwnPropertyDescriptor(o, "0"));
    o[0] = 10;
    assertEquals(5, o[0]);
    assertTrue(delete o[0], "property deleted");
    assertFalse("0" in o, "property doesn't exist");
}

function testDefineProperty_20()
{
    var o = {};
    assertEquals(o, Object.defineProperty(o, "0", { value: 5, writable: true, enumerable: false, configurable: true }));
    assertTrue("0" in o);
    assertDontEnum(o, "0");
    assertEquals(5, o[0]);
    assertObjectEquals({ value: 5, writable: true, enumerable: false, configurable: true }, Object.getOwnPropertyDescriptor(o, "0"));
    o[0] = 10;
    assertEquals(10, o[0]);
    assertTrue(delete o[0]);
    assertFalse("0" in o);
}

function testDefineProperty_21()
{
    var o = {};
    assertEquals(o, Object.defineProperty(o, "0", { value: 5, writable: true, enumerable: true, configurable: false }));
    assertTrue("0" in o);
    assertEnum(o, "0");
    assertEquals(5, o[0]);
    assertObjectEquals({ value: 5, writable: true, enumerable: true, configurable: false }, Object.getOwnPropertyDescriptor(o, "0"));
    o[0] = 10;
    assertEquals(10, o[0]);
    assertFalse(delete o[0], "property not deleted");
    assertTrue("0" in o);
}

function testDefineProperty_22()
{
    var o = { a: 1, b: 2, c: 3 };
    var g = function () { return "new"; };
    assertEquals(o, Object.defineProperty(o, "b", { get: g }));
    assertObjectEquals({ a: 1, b: "new", c: 3 }, o);
    assertEnum(o, "b");
    assertEquals("new", o.b);
    o.b = 5;
    assertEquals("new", o.b);
    assertTrue(delete o.b);
    assertFalse("b" in o);
}

function testDefineProperty_23()
{
    var o = { a: 1, b: 2, c: 3 }, x = "wrong";
    var g = function () { return "new"; };
    var s = function (y) { x = y; };
    assertEquals(o, Object.defineProperty(o, "b", { get: g, set: s }));
    assertObjectEquals({ a: 1, b: "new", c: 3 }, o);
    assertEnum(o, "b");
    assertEquals("new", o.b);
    o.b = 5;
    assertEquals("new", o.b);
    assertEquals(5, x);
    assertTrue(delete o.b);
    assertFalse("b" in o);
}

function testDefineProperty_24()
{
    var o = { a: 1, b: 2, c: 3 }, x = "wrong";
    var g = function () { return "new"; };
    var s = function (y) { x = y; };
    assertEquals(o, Object.defineProperty(o, "b", { get: g, set: s, enumerable: false }));
    assertObjectEquals({ a: 1, b: "new", c: 3 }, o);
    assertDontEnum(o, "b");
    assertEquals("new", o.b);
    o.b = 5;
    assertEquals("new", o.b);
    assertEquals(5, x);
    assertTrue(delete o.b);
    assertFalse("b" in o);
}

function testDefineProperty_25()
{
    var o = { a: 1, b: 2, c: 3 }, x = "wrong";
    var g = function () { return "new"; };
    var s = function (y) { x = y; };
    assertEquals(o, Object.defineProperty(o, "b", { get: g, set: s, configurable: false }));
    assertObjectEquals({ a: 1, b: "new", c: 3 }, o);
    assertEnum(o, "b");
    assertEquals("new", o.b);
    o.b = 5;
    assertEquals("new", o.b);
    assertEquals(5, x);
    assertFalse(delete o.b);
    assertTrue("b" in o);
}

function testDefineProperty_26()
{
    /* The 'function' attribute must track */
    /* that of the value put when defining */
    /* a property. */
    var x = {f : function() {;}};
    Object.defineProperty(x,"f", {value: 2});
    assertEquals(x.f, 2);
}
testDefineProperty_26.metadata = {
  bug:"CORE-41974"
};

function testDefineProperty_27()
{
    /* (Re)defining a property stored in a hash table. */
    function put(o, n, v) { o[n] = v; };
    var obj = {a:2};
    put(obj, "b", 5);
    Object.defineProperty(obj,"b", {value: 4, enumerable: false});
    assertEquals(obj.b, 4);
}
testDefineProperty_27.metadata = {
  bug:"CORE-41974"
};

function testDefineProperty_28()
{
    Object.defineProperty(RegExp,"lastParen", {value: 4});
    assertEquals(RegExp.lastParen, 4);
}
testDefineProperty_28.metadata = {
  bug:"CORE-45547"
};

function testDefineProperty_29()
{
    function foo() {};
    Object.defineProperty(foo, 'prototype', { value: {} });
    assertEquals(foo.prototype, Object.getOwnPropertyDescriptor(foo, 'prototype').value);
}
testDefineProperty_29.metadata = {
  bug:"CORE-46358"
};

function testSeal_0()
{
    assertThrows(TypeError, function () { Object.seal(); });
}

function testSeal_1()
{
    assertThrows(TypeError, function () { Object.seal(""); });
}

function testSeal_2()
{
    var o = { a: 1, b: 2, c: 3 };
    Object.seal(o);
    assertFalse(delete o.a);
    assertFalse(delete o.b);
    assertFalse(delete o.c);
    assertObjectEquals({ a: 1, b: 2, c: 3 }, o);
    o.d = 4;
    assertFalse("d" in o, "o.d doesn't exist");
    assertUndefined(o.d);
    assertDontEnum(o, "d");
}

function testSeal_3()
{
    var o = { a: 1, b: 2, c: 3 };
    Object.seal(o);
    assertThrows(TypeError, function () { Object.defineProperty(o, "a", { configurable: true }); });
    assertThrows(TypeError, function () { Object.defineProperty(o, "b", { configurable: false, enumerable: false }); });
    Object.defineProperty(o, "c", { value: "new", configurable: false });
    assertEquals("new", o.c);
    assertThrows(TypeError, function () { Object.defineProperty(o, "d", {}); });
}

function testSeal_4()
{
    var o = [ "a", "b", "c" ];
    Object.seal(o);
    assertFalse(delete o[0]);
    assertFalse(delete o[1]);
    assertFalse(delete o[2]);
    assertArrayEquals([ "a", "b", "c" ], o);
    o[3] = "d";
    assertFalse("3" in o, "o[3] doesn't exist");
    assertUndefined(o[3]);
    assertDontEnum(o, "3");
}

function testSeal_5()
{
    var o = [ "a", "b", "c" ];
    Object.seal(o);
    assertThrows(TypeError, function () { Object.defineProperty(o, "0", { configurable: true }); }, "a");
    assertThrows(TypeError, function () { Object.defineProperty(o, "1", { configurable: false, enumerable: false }); });
    Object.defineProperty(o, "2", { value: "new", configurable: false });
    assertEquals("new", o[2]);
    assertThrows(TypeError, function () { Object.defineProperty(o, "3", {}); });
}

function testSeal_6()
{
    function g(named)
    {
	"use strict";
	var o, name;

	name = 'd';
	o = {};
	Object.seal(o);
	if (named)
	    o[name] = 3;
	else
	    o.f = 3;
    }
    assertThrows(TypeError, function () { "use strict"; g(true); });
    assertThrows(TypeError, function () { "use strict"; g(false); });
}
testSeal_6.metadata = {
  bug:"CORE-49443"
};

function testSeal_7()
{
    var o = null;

    w = eval("this");
    if ("HostObject" in w)
	o = new HostObject();
    else if ("console" in w)
	o = console;

    assertTrue(o != null, "cannot locate host object");
    Object.seal(o);
    assertThrows(TypeError, function () { "use strict"; o.d = 3; });
    assertThrows(TypeError, function () { "use strict"; o['d'] = 3; });
}
testSeal_7.metadata = {
  bug:"CORE-49443"
};


function testFreeze_0()
{
    assertThrows(TypeError, function () { Object.freeze(); });
}

function testFreeze_1()
{
    assertThrows(TypeError, function () { Object.freeze(""); });
}

function testFreeze_2()
{
    var o = { a: 1, b: 2, c: 3 };
    Object.freeze(o);
    assertFalse(delete o.a);
    assertFalse(delete o.b);
    assertFalse(delete o.c);
    assertObjectEquals({ a: 1, b: 2, c: 3 }, o);
    o.a = "new";
    o.b = "new";
    o.c = "new";
    o.d = 4;
    assertObjectEquals({ a: 1, b: 2, c: 3 }, o);
    assertFalse("d" in o, "o.d doesn't exist");
    assertUndefined(o.d);
    assertDontEnum(o, "d");
}

function testFreeze_3()
{
    var o = { a: 1, b: 2, c: 3 };
    Object.freeze(o);
    assertThrows(TypeError, function () { Object.defineProperty(o, "a", { configurable: true }); });
    assertThrows(TypeError, function () { Object.defineProperty(o, "b", { configurable: false, enumerable: false }); });
    assertThrows(TypeError, function () { Object.defineProperty(o, "b", { configurable: false, writable: true }); });
    assertThrows(TypeError, function () { Object.defineProperty(o, "c", { value: "new", configurable: false, writable: false }); });
    assertObjectEquals({ a: 1, b: 2, c: 3 }, o);
    assertThrows(TypeError, function () { Object.defineProperty(o, "d", {}); });
}

function testFreeze_4()
{
    var o = [ "a", "b", "c" ];
    Object.freeze(o);
    assertFalse(delete o[0]);
    assertFalse(delete o[1]);
    assertFalse(delete o[2]);
    assertArrayEquals([ "a", "b", "c" ], o);
    o[0] = "new";
    o[1] = "new";
    o[2] = "new";
    o[3] = "d";
    assertArrayEquals([ "a", "b", "c" ], o);
    assertFalse("3" in o, "o[3] doesn't exist");
    assertUndefined(o[3]);
    assertDontEnum(o, "3");
}

function testFreeze_5()
{
    var o = [ "a", "b", "c" ];
    Object.freeze(o);
    assertThrows(TypeError, function () { Object.defineProperty(o, "0", { configurable: true }); }, "a");
    assertThrows(TypeError, function () { Object.defineProperty(o, "1", { configurable: false, enumerable: false }); });
    assertThrows(TypeError, function () { Object.defineProperty(o, "1", { configurable: false, writable: true }); });
    assertThrows(TypeError, function () { Object.defineProperty(o, "2", { value: "new", configurable: false, writable: false }); });
    assertArrayEquals([ "a", "b", "c" ], o);
    assertThrows(TypeError, function () { Object.defineProperty(o, "3", {}); });
}

function testKeys_0()
{
    assertThrows(TypeError, function () { Object.keys(); });
}

function testKeys_1()
{
    assertThrows(TypeError, function () { Object.keys(""); });
}

function testKeys_2()
{
    assertArrayEquals([ "x", "y", "z" ], Object.keys({ x: 10, y: 20, z: 30 }));
}

function testKeys_3()
{
    assertArrayEquals([ "0", "1", "2" ], Object.keys([ "a", "b", "c" ]));
}

function testKeys_4()
{
    assertArrayEquals([], Object.keys([].push));
}

/* Verify that attributes on indexed properties survive conversion
   from compact to sparse representation. */
function testIndexedAttributes_0()
{
    var a = [];

    Object.defineProperties(a, [{ value: 0, writable: false, enumerable: true, configurable: true },
                                { value: 1, writable: true, enumerable: false, configurable: true },
                                { value: 2, writable: true, enumerable: true, configurable: false }]);

    assertArrayEquals([0, 1, 2], a);

    a[1000000] = 1000000;

    assertObjectEquals({ value: 0, writable: false, enumerable: true, configurable: true }, Object.getOwnPropertyDescriptor(a, 0));
    assertObjectEquals({ value: 1, writable: true, enumerable: false, configurable: true }, Object.getOwnPropertyDescriptor(a, 1));
    assertObjectEquals({ value: 2, writable: true, enumerable: true, configurable: false }, Object.getOwnPropertyDescriptor(a, 2));
}

/* Verify that attributes on indexed properties survive compact
   representation growth. */
function testIndexedAttributes_1()
{
    var a = [];

    Object.defineProperties(a, [{ value: 0, writable: false, enumerable: true, configurable: true },
                                { value: 1, writable: true, enumerable: false, configurable: true },
                                { value: 2, writable: true, enumerable: true, configurable: false }]);

    assertArrayEquals([0, 1, 2], a);

    for (var i = 0; i < 1000; ++i)
        a.push("foo");

    assertObjectEquals({ value: 0, writable: false, enumerable: true, configurable: true }, Object.getOwnPropertyDescriptor(a, 0));
    assertObjectEquals({ value: 1, writable: true, enumerable: false, configurable: true }, Object.getOwnPropertyDescriptor(a, 1));
    assertObjectEquals({ value: 2, writable: true, enumerable: true, configurable: false }, Object.getOwnPropertyDescriptor(a, 2));
}

/* Verify that attributes on indexed properties survive compact
   representation growth. */
function testIndexedAttributes_2()
{
    var a = [];

    Object.defineProperties(a, [{ value: 0, writable: false, enumerable: true, configurable: true },
                                { value: 1, writable: true, enumerable: false, configurable: true },
                                { value: 2, writable: true, enumerable: true, configurable: false }]);

    assertArrayEquals([0, 1, 2], a);

    a[1000] = "bar";

    for (var i = 3; i < 1000; ++i)
        a[i] = "foo";

    assertObjectEquals({ value: 0, writable: false, enumerable: true, configurable: true }, Object.getOwnPropertyDescriptor(a, 0));
    assertObjectEquals({ value: 1, writable: true, enumerable: false, configurable: true }, Object.getOwnPropertyDescriptor(a, 1));
    assertObjectEquals({ value: 2, writable: true, enumerable: true, configurable: false }, Object.getOwnPropertyDescriptor(a, 2));
}
