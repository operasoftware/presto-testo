//construction

function testConstructor_0() {
  /*
   * instanceof
   */
  var func = Function('x', 'y', 'return x + y');
  assertTrue(func instanceof Function);
}

function testConstructor_1() {
  var func = Function('x', 'y', 'return x + y');
  assertEquals(3, func(1,2));
}

function testConstructor_2() {
  var func = Function('x', 'y', 'return x + y');
  assertEquals(2, func.length);
}

function testConstructor_4() {
  var func = new Function('', 'return 37');
  assertTrue(func instanceof Function);
}

function testConstructor_5() {
  var func = new Function('', 'return 37');
  assertEquals(37, func());
}

function testConstructor_6() {
  var func = new Function();
  assertEquals("function", typeof func);
}
testConstructor_6.metadata = {
  bug:"CARAKAN-45"
};

function testConstructor_7() {
  var func = Function();
  assertTrue(func instanceof Function);
}
testConstructor_7.metadata = {
  bug:"CARAKAN-61"
};

function testConstructor_8() {
  function func() {
    new Function("/*");
  }
  assertThrows(SyntaxError(), func);
}
testConstructor_8.metadata = {
  bug:"CARAKAN-202"
};

function testConstructor_9() {
  function C1() {
    this.pass = true;
  }

  function C2(full) {
    if (full) {
      this.we = new C1();
    }
  }

  for (var i = 0; i < 1000; ++i);
  new C2(false);

  var did = new C2(true);
  assertTrue(did.we.pass);
}

function testConstructor_10() {
  function C() { this.b = this.a = 1; }
  function dummy(a) {}

  for (var i = 0; i < 1000; ++i);

  new C();

  dummy(2);

  var c = new C();

  assertEquals(1, c.a);
  assertEquals(1, c.b);
}
testConstructor_10.metadata = {
  bug:"CARAKAN-899"
};

function testConstructor_11() {
  function Ha(i) {
    this.bb = i;
  }

  function Gb() {
    function i(k) {
      return new Ha(k[0]);
    }

    function l(k) {
      k = k.split(",");
      for (var f = 0; f < k.length; ++f)
        i(k[f].split(":"));
    }

    this.T = l("daum:q,eniro:search_word,naver:query,images.google:q,google:q,yahoo:p,msn:q,bing:q,aol:query,aol:encquery,lycos:query,ask:q,altavista:q,netscape:query,cnn:query,about:terms,mamma:query,alltheweb:q,voila:rdata,virgilio:qs,live:q,baidu:wd,alice:qs,yandex:text,najdi:q,aol:q,mama:query,seznam:q,search:q,wp:szukaj,onet:qt,szukacz:q,yam:k,pchome:q,kvasir:q,sesam:q,ozu:q,terra:query,mynet:q,ekolay:q,rambler:words");
  }

  var c = new Gb;
}
testConstructor_11.metadata = {
  bug:"CARAKAN-919"
};

function testConstructor_12() {
  function f() {
    this.one = this.two = this.three = null;
    this.bar = {};
  }

  for (var i = 0; i < 100; i++) {
    var foo = new f();
    assertFalse(foo.bar.hasOwnProperty("whatever"));
    assertUndefined(foo.bar.whatever);
  }
}


//Scope of created functions (need more tests for variable scope somewhere)

var testGlobal = 37;

function testScope_0() {
  function f_returning_funtion() {
    var testGlobal = 42;
    return new Function('return testGlobal;');
  }
  assertEquals(37, f_returning_funtion()());
}

//Parameter list parsing
function testParsing_0() {
  /*
   * Invald parameter list
   */
  assertThrows(SyntaxError("Function constructor: failed to compile function"), Function, "a", "b,", "return 0");
}

function testParsing_1() {
  /*
   * Invalid body
   */
  assertThrows(SyntaxError("Function constructor: failed to compile function"), Function, "a", "b", "return a++b;");
}

function testParsing_2() {
  /*
   * Empty parameters
   */
  var func = new Function('', 'return 37;');
  assertEquals(37, func());
}

//Prototype objects

function testPrototype_0() {
  assertDefined(Function.prototype);
}

function testPrototype_1() {
  assertEquals(undefined, Function.prototype(1,2,3,4));
}

function testPrototype_2() {
  assertDefined(Function.prototype.constructor);
}

function testPrototype_3() {
  assertDefined(Function.prototype.toString);
}

function testPrototype_4() {
  assertDefined(Function.prototype.apply);
}

function testPrototype_5() {
  assertDefined(Function.prototype.call);
}

function testPrototype_6() {
  function f() {}
  assertDontEnum(f, "prototype");
}
testPrototype_6.metadata = {
  bug:"CARAKAN-229, CORE-36409"
};

function testInstance_0() {
  var func = new Function("x", "return x");
  assertEquals(func.length, 1);
}

//Not sure that this should live here
function testInstance_0() {
  var func = new Function("x", "return x");
  assertDefined(func.prototype);
}

function testInstance_1() {
  /*
   * Set prototype and create new instance
   */
  var func = new Function("x", "return x");
  var y = new Object();
  func.prototype = y;
  var z = new func;
  assertTrue(z instanceof func);
}

//apply

function testApply_0() {
  function func(a,b,c,d) {
    return [this, a,b,c,d];
  }
  var a = new Number(33);
  assertEquals(a, func.apply(a, [1,2,3])[0]);
}

function testApply_1() {
  function func(a,b,c,d) {
    return [this, a,b,c,d];
  }
  var a = new Number(33);
  assertArrayEquals([a, 1,2,3,undefined], func.apply(a, [1,2,3]));
}

function testApply_2() {
  function f0() {
    return this;
  }
  var x = f0.apply(this, new Array(248));
  assertEquals(this, x);
}
testApply_2.metadata = {
  bug:"CARAKAN-38"
};

function testApply_3() {
  function func1(arg) {
    assertEquals(arg, "foo");
  }
  function func() {
    func1.apply(this, arguments);
  }
  func("foo");
}
testApply_3.metadata = {
  bug:"CARAKAN-208"
};

function testApply_4() {
  function func1(arg) {
    assertEquals("foo", arg);
  }
  function func(arg) {
    func1.apply(this, arguments);
  }
  func("foo");
}
testApply_4.metadata = {
  bug:"CARAKAN-208"
};

function testApply_5() {
  this.a = "foo";
  function func() {
    assertEquals("foo", this.a);
  }
  func.apply(null);
}

function testApply_6() {
  this.a = "foo";
  function func() {
    assertEquals("foo", this.a);
  }
  func.apply(null);
}

function testApply_7() {
  function func() {
    assertEquals(3, this.valueOf());
  }
  func.apply(3);
}

function testApply_8() {
  function func() {
    assertEquals(true, this.valueOf());
  }
  func.apply(true);
}

function testApply_9() {
  function func() {
    assertEquals("foo", this.toString());
  }
  assertEquals(func.apply("foo"));
}

function testApply_10() {
  function func() {}
  assertThrows(TypeError(), func.apply, this, 1);
}

function testApply_10() {
  function func() {}
  assertThrows(TypeError(), func.apply, this, true);
}

function testApply_11() {
  function func() {}
  assertThrows(TypeError(), func.apply, this, "foo");
}

function testApply_12() {
  var obj = {
    "a":1
  };
  function func() {
    arguments[0]["a"] = 2;
  }
  func.apply(this, [obj]);
  assertEquals(2, obj.a);
}

function testApply_13() {
  function func() {
    assertEquals(this, arguments[0]);
  }
  func.apply(func, [func]);
}

function testApply_14() {
  this.a = 1;
  function func() {
    assertEquals(1, this.a);
  }
  eval("func.apply(this, [])");
}

function testApply_15() {
  function func() {
    eval("func2.apply(this, [1,2,3])");
  }
  function func2() {
    assertEquals(obj, this);
    assertEquals(1, arguments[0]);
    assertEquals(2, arguments[1]);
    assertEquals(3, arguments[2]);
  }
  var obj = {};
  func.apply(obj, ["foo"]);
}

function testApply_16() {
  var foo = function(name){
    this.name = name;
  }

  var bar = function(name){
    this.parent(name);
  }
  bar.prototype.parent = function(){
    var previous = foo;
    return previous.apply(this, arguments);
  };

  var magic = new bar('PASS');
  assertEquals("PASS", magic.name);
}

function testApply_17() {
  var foo = function(name){
    this.name = name;
  }

  var empty = function(){}

  var bar = function(){
    empty();
    return foo.apply(this, arguments);
  };

  var magic = new bar('PASS');
  assertEquals("PASS", magic.name);
}

function testApply_18() {
  var foo = function(name){
    this.name = name;
  }

  var bar = function(){
    (function(){})();
    return foo.apply(this, arguments);
  };

  var magic = new bar('PASS');
  assertEquals("PASS", magic.name);
}

function testApply_19() {
  var foo = function(name){
    this.name = name;
  }

  var bar = function(){
    var irrelevant = undefined;
    return foo.apply(this, arguments);
  };

  var magic = new bar('PASS');
  assertEquals("PASS", magic.name);
}

function testApply_20() {
  var foo = function(name){
    this.name = name;
  }

  var bar = function(){
    return foo.apply(this, arguments);
  };

  var magic = new bar('PASS');
  assertEquals("PASS", magic.name);
}

function testApply_21() {
  var foo = function(name){
    this.name = name;
  }

  var empty = function(){}

  var bar = function(){
    foo.apply(this, arguments);
    empty();
  };

  var magic = new bar('PASS');
  assertEquals("PASS", magic.name);
}

function testApply_22() {
  var foo = function(name){
    this.name = name;
  }

  var bar = function(){
    foo.apply(this, arguments);
    (function(){})();
  };

  var magic = new bar('PASS');
  assertEquals("PASS", magic.name);
}

function testApply_23() {
  var foo = function(name){
    this.name = name;
  }

  var bar = function(){
    foo.apply(this, arguments);
    var irrelevant = undefined;
  };

  var magic = new bar('PASS');
  assertEquals("PASS", magic.name);
}

function testApply_24() {
  var foo = function(name){
    this.name = name;
  }

  var irrelevant = function(){
    this.test = function(){};
  }
  var ir = new irrelevant();

  var bar = function(){
    ir.test();
    foo.apply(this, arguments);
  };

  var magic = new bar('PASS');
  assertEquals("PASS", magic.name);
}

function testApply_25() {
  var foo = function(name){
    this.name = name;
  }

  var irrelevant = function(){
    this.test = function(){};
  }
  var ir = new irrelevant();

  var bar = function(){
    foo.apply(this, arguments);
    ir.test();
  };

  var magic = new bar('PASS');
  assertEquals("PASS", magic.name);
}

function testApply_26() {
  var foo = function(name){
    this.name = name;
  }

  var bar = function(){
    if (true);
    foo.apply(this, arguments);
  };

  var magic = new bar('PASS');
  assertEquals("PASS", magic.name);
}

function testApply_27() {
  var foo = function(name){
    this.name = name;
  }

  var bar = function(){
    foo.apply(this, arguments);
    if (true);
  };

  var magic = new bar('PASS');
  assertEquals("PASS", magic.name);
}

function testApply_28() {
  var foo = function(name){
    this.name = name;
  }

  var bar = function(){
    for (var i = 0; i < 10; i++);
    foo.apply(this, arguments);
  };

  var magic = new bar('PASS');
  assertEquals("PASS", magic.name);
}

function testApply_29() {
  var foo = function(name){
    this.name = name;
  }

  var bar = function(){
    foo.apply(this, arguments);
    for (var i = 0; i < 10; i++);
  };

  var magic = new bar('PASS');
  assertEquals("PASS", magic.name);
}

function testApply_30() {
  var foo = function(name){
    this.name = name;
  }

  var bar = function(){
    while(true) break;
    foo.apply(this, arguments);
  };

  var magic = new bar('PASS');
  assertEquals("PASS", magic.name);
}

function testApply_31() {
  var foo = function(name){
    this.name = name;
  }

  var bar = function(){
    foo.apply(this, arguments);
    while(true) break;
  };

  var magic = new bar('PASS');
  assertEquals("PASS", magic.name);
}

function testApply_32() {
  var foo = function(name){
    this.name = name;
  }

  var bar = function(){
    with(this);
    foo.apply(this, arguments);
  };

  var magic = new bar('PASS');
  assertEquals("PASS", magic.name);
}

function testApply_33() {
  var foo = function(name){
    this.name = name;
  }

  var bar = function(){
    foo.apply(this, arguments);
    with(this);
  };

  var magic = new bar('PASS');
  assertEquals("PASS", magic.name);
}

function testApply_34() {
  assertThrows(Error, function(){
    var foo = function(name){
      this.name = name;
    };

    var bar = function(){
      throw new Error();
      foo.apply(this, arguments);
    };

    var magic = new bar('PASS');
  });
}

function testApply_35() {
  assertThrows(Error, function(){
    var foo = function(name){
      this.name = name;
    };

    var bar = function(){
      foo.apply(this, arguments);
      assertEquals("PASS", this.name);
      throw new Error();
    };

    var magic = new bar('PASS');
  });
}

function testApply_36() {
  function func() {
    return Array.apply(null, arguments).length;
  }
  assertEquals(4, func(4));
}
testApply_36.metadata = {
  bug:"CARAKAN-860"
};

function testApply_37() {
  var applyWrapperInner=function(func) {
    return func.apply(this, []);
  };

  function applyWrapperOuter(func){
    applyWrapperInner(function() {
			var e = [];
			e = func.apply(this, e); // throws here!
			return e;
		       });
    return true;
  }

  assertTrue(applyWrapperOuter(function (){
				 return true;
			       }));

}

function testApply_38() {
  var obj = {
    0:"a",
    1:"b",
    2:"c",
    length:3
  };
  var a = Array.apply(this, obj);
  assertEquals(Array, a.constructor);
  asertArrayEquals(["a", "b", "c"], a);
}

function testApply_39() {
  var obj = {
    0:"a",
    1:"b",
    2:"c",
    length:3
  };
  function func(a,b,c) {
    assertEquals("a", a);
    assertEquals("b", b);
    assertEquals("c", a);
  }
  func.apply(this, obj);
}

function testApply_40() {
  var obj = {
    0:"a",
    1:"b",
    2:"c",
    length:3
  };
  function func(a,b) {
    assertEquals("a", a);
    assertEquals("b", b);
    assertEquals("a", arguments[0]);
    assertEquals("b", arguments[1]);
    assertEquals("c", arguments[2]);
  }
  func.apply(this, obj);
}

function testApply_41() {
  function func(){
    var obj = {
      0:1,
      1:2
    };
    function inner() {}
    inner.call(this, obj);
  }
  assertThrows(TypeError(), func);
}

function testApply_42() {
  function func(){
    var obj = {
      0:1,
      1:2,
      length:null
    };
    function inner() {}
    inner.call(this, obj);
  }
  assertThrows(TypeError(), func);
}

function testApply_43() {
  function func(){
    var obj = {
      0:1,
      1:2,
      length:(Math.pow(2,32) + 1)
    };
    function inner() {}
    inner.call(this, obj);
  }
  assertThrows(TypeError(), func);
}

function testApply_44() {
  function func(){
    var obj = {
      0:1,
      1:2,
      length:-1
    };
    function inner() {}
    inner.call(this, obj);
  }
  assertThrows(TypeError(), func);
}

function testApply_45() {
  var obj = {
    0:"a",
    2:"c",
    length:3
  };
  function func(a,b,c) {
    assertEquals("a", a);
    assertUndefined(b);
    assertEquals("c", c);
  }
  func.call(this,obj);
}

function testApply_46() {
  function f(a) {
    return a;
  }

  var stored = null;

  f.apply = function (t, a) {
    if (a[0] == 0)
      a.x = "PASS";
    else
      a.x = a[0];
    stored = a;
  };

  function trampoline() {
    return f.apply(this, arguments);
  }

  for (var i = 0; i < 100; ++i)
    trampoline(0);

  var stored_stored = stored;

  trampoline("FAIL");

  assertEquals("PASS", stored_stored.x);
}

function testApply_47() {
  function func() {
      return Array.apply(null, {length: 6}).length;
  }
  assertEquals(6, func());
}
testApply_47.metadata = {
  bug:"CORE-33954"
};

function testApply_48() {
  "use strict";

  function f(x, y)
  {
      assertEquals(2, x);
      assertEquals(3, y);
  }
  function g()
  {
      return f.apply(this, arguments);
  }
  g(2, 3);
}
testApply_48.metadata = {
  bug:"CORE-41248"
};

function testApply_49() {
  assertNaN(Number.apply(null, [,]));
}
testApply_49.metadata = {
  bug:"CORE-45653"
};

function testApply_50() {
  var arr = Array.apply(null, [,]);
  var exp = [];
  for (var i in arr)
    exp.push(i);
  assertArrayEquals(["0"], exp);
}
testApply_50.metadata = {
  bug:"CORE-45653"
};

function testApply_51() {
    function f(a) { return function() { return a.apply(this, arguments);}}
    var g1 = f(function(a){return a;});
    var g2 = new g1(g1);
    assertEquals(1, g2(1));
}
testApply_51.metadata = {
  bug:"CORE-47339"
};

function testApply_52() {
    function f(a) { return function() { return a.apply(this, arguments);}}
    var g1 = f(function(a){return a;});
    var g2 = new g1(g1);
    assertEquals(1, g2(1,2,3,4,5,6,7,8,9,0));
}
testApply_52.metadata = {
  bug:"CORE-47339"
};

function testApply_53() {
    function f(a) { return function() { return a.apply(this, arguments);}}
    var g1 = f(function(a){return a;});
    var g2 = new g1(g1,2,3,4,5,6,7,8,9,0);
    assertEquals(1, g2(1,2,3,4,5,6,7,8,9,0));
}
testApply_53.metadata = {
  bug:"CORE-47339"
};

function testApply_54() {
    function f(a) { return function() { return a.apply(this, arguments);}}
    var g1 = f(function(a){return a;});
    var g2 = new g1(g1,2,3,4,5,6,7,8,9,0);
    assertEquals(1, g2(1));
}
testApply_54.metadata = {
  bug:"CORE-47339"
};

function testApply_55() {
  var EventChannelRegistry = function() {
    initialize.apply(this, arguments);
  }
  var initialize = function () {
    for (var i = 0; i < arguments.length; ++i) {
      this.updateAffectingProject = 1;
    }
  };
  for (var i = 0; i < 30; i++) {
    var events = new EventChannelRegistry("", "");
  }
  assertEquals(1, events.updateAffectingProject);
}
testApply_55.metadata = {
  bug:"CORE-47339"
};

function testApply_56() {
    function f(a) { return function() { return a.apply(this, arguments);}}
    var x = 0;
    var g1 = f(function(a){ if (x++ == 0) return; return a;});
    var g2 = new g1(g1,2,3,4,5,6,7,8,9,0);
    assertThrows(TypeError, function () {g2(1); });
}
testApply_56.metadata = {
  bug:"CORE-47339"
};

function testApply_57() {
    function f(a) { return function() { return a.apply(this, arguments);}}
    var x = 0;
    var g1 = f(function(a){ if (x++ == 1) return; return a;});
    var g2 = new g1(g1,2,3,4,5,6,7,8,9,0);
    assertUndefined(g2(1));
}
testApply_57.metadata = {
  bug:"CORE-47339"
};

function testApply_58() {
    function f(a) { return function() { return a.apply(this, arguments);}}
    var x = 0;
    var g1 = f(function(a){ if (x++ == 1) return; return a;});
    var g2 = new g1(g1);
    assertUndefined(g2(1));
}
testApply_58.metadata = {
  bug:"CORE-47339"
};

function testApply_59() {
    function test()
    {
      function C()
      {
        this.init.apply(this, arguments);
      }

      C.prototype.init = function () { return new String("FAIL"); };
      C.prototype.toString = function () { return "PASS"; };

      var result = String(new C());
      assertEquals("PASS", result);
    }
}
testApply_59.metadata = {
  bug:"CORE-47883"
};

function testApply_60() {
    function f(a) { return function() { return a.apply(this, arguments);}}
    var g1 = f(function(){ this.x = 2; return {y: 3};});
    for (var i = 0; i < 50; i++)
	assertUndefined((new g1(2)).x);
}
testApply_60.metadata = {
  bug:"CORE-47935"
};

function testApply_61() {
    function f(a) { return function() { return a.apply(this, arguments);}}
    var g1 = f(function(){ this.x = 2; return 5;});
    for (var i = 0; i < 50; i++)
	assertEquals(2, (new g1(2)).x);
}
testApply_61.metadata = {
  bug:"CORE-47935"
};

function testApply_62() {
    function h() { return {y:3}; }
    function f(a) { return function() { a.apply(this, arguments);}}
    var g1 = f(h);
    for (var i = 0; i < 50; i++)
	assertEquals(undefined, (new g1(2)).y);
}
testApply_62.metadata = {
  bug:"CORE-47935"
};

//call

function testCall_0() {
  function func(a,b,c,d) {
    return [this, a,b,c,d];
  }
  var a = new Number(33);
  assertEquals(a, func.call(a, 1, 2, 3)[0]);
}

function testCall_1() {
  function func(a,b,c,d) {
    return [this, a,b,c,d];
  }
  var a = new Number(33);
  assertArrayEquals([a, 1,2,3,undefined], func.call(a, 1, 2, 3));
}

function testCallee_0() {
  function func() {
    return arguments.callee;
  }
  assertEquals(func, func());
}

function testCallee_1() {
  /*
   * Recursion using arguments.callee
   */
  var x = 0;
  function func() {
    if (++x < 10) {
      return arguments.callee();
    }
    else {
      return arguments.callee;
    }
  }
  func();
  assertEquals(10, x);
}

function testCaller_0() {
  var passed = true;
  function foo() {
    assertEquals(bar, arguments.callee.caller);
  }
  function bar() { foo(); }
  for( var i = 0; i < 60; i++ ) {
    bar();
  }
}
testCaller_0.metadata = {
  bug:"CARAKAN-955"
};

function testCall_2() {
  this.a = 1;
  function func() {
    assertEquals(1, this.a);
  }
  func.call();
}

function testCall_3() {
  this.a = 1;
  function func() {
    assertEquals(1, this.a);
  }
  func.call(null);
}

function testCall_4() {
  function func() {
    assertEquals(true, this.valueOf());
  }
  func.call(true);
}

function testCall_5() {
  function func() {
    assertEquals(1, this.valueOf());
  }
  func.call(1);
}

function testCall_6() {
  function func() {
    assertEquals("foo", this.valueOf());
  }
  func.call("foo");
}

function testCall_7() {
  function func(a,b) {
    assertEquals(12, a*b);
  }
  func.call(this, 3,4);
}

function testCall_8() {
  function func() {
    assertEquals(12, arguments[0]*arguments[1]);
  }
  func.call(this, 3,4);
}

function testCall_9() {
  function a() {}
  a.prototype = {
    "b":1
  };
  function func() {
    assertEquals(1, this.b);
  }
  func.call(new a());
}

function testBind_0() {
  function ctor(args)
  {
    var f = Function.prototype.bind.apply(Date,[null].concat(args));
    return new f();
  }
  var f = ctor([1980,3,4]);
  assertTrue(f instanceof Date);
}
testBind_0.metadata = {
    bug:"CORE-41342"
};

function testBind_1() {
    function f() { return 2; }

    for (var i = 0; i < 50; i++)
	f();

    var fx = f.bind({});

    // Triggering the crashing condition; assert is secondary.
    for (var i = 0; i < 100; i++)
	assertType("object", new fx(2));
}
testBind_1.metadata = {
    bug:"CORE-46986"
};

//"Function calls"

function testFCall_0() {
  var func = function(a, b, c) {
    return a + b + c + this;
  };
  var x = [func];
  x.toString = function () {
    return "X!";
  };

  assertEquals("ABCX!", x[0]("A","B","C"));
}

function testFCall_1() {
  var func = function(a,b,c) {
    return a + b + c + this;
  };
  var y = { f: func,
	    toString: function () {
	      return "Y!";
	    }
	  };
  assertEquals("ABCY!", y.f("A","B","C"));
}

//XXX No decompiler tests

//Use of this

function testThis_0() {
  /*
   * When _with_ is used on an object and a function is called and found in
   * that object, then the object must be pushed as the this object during
   * the call.
   */
  var testresult = null;
  var q = "wrong";

  function myFunction() {
    testresult = "wrong";
  }

  function MyObject() {
    this.q = "right";
    this.myFunction = function () { testresult=this.q; };
  }

  with (new MyObject()) {
    myFunction();
  }
  assertEquals("right", testresult);
}

//arguments object

/*Some of this stuff is designed to test a specific optimisation (in futhark?)
 * that the arguments object is not created unless it is actually used. So
 * there are lots and lots of tests here
 */

//If we fix carakan-31 it will be easy to collapse these to a single test generator

function testArguments_0() {
  var func = function () {return arguments[0];};
  assertNull(func.arguments);
}
testArguments_0.metadata = {
  bug:"CARAKAN-191",
  version:"3.1"
};

function testArguments_1() {
  /*
   * Value of function.arguments after the function has been called
   * Not spec defined.
   */
  var func = function () {return arguments[0];};
  func("a");
  assertEquals(null, func.arguments);
}

function testArguments_2() {
  var func = function (i) {return arguments[0];};
  var x = func(2);
  assertEquals(2, x);
}
testArguments_2.metadata = {
  bug:"CARAKAN-35"
};

function testArguments_3() {
  function func(a) {
    arguments[0]++;
    return a;
  }
  assertEquals(2, func(1));
}
testArguments_3.metadata = {
  bug:"CARAKAN-203"
};

function testArguments_4() {
  function func(a) {
    a = "pass";
    return arguments[0];
  }
  assertUndefined(func());
}
testArguments_4.metadata = {
  bug:"CARAKAN-203"
};

function testArguments_5() {
  function func(arguments) {
    assertTrue(func.arguments instanceof Object);
  }
  func("fail");
}

function testArguments_6() {
  function func(x) {
    var arguments = "pass";
    return func.arguments;
  }
  assertEquals("pass", func("fail"));
}

function testArguments_7() {
  function func(arguments) {
    return arguments;
  }
  assertEquals("pass", func("pass"));
}

function testArguments_8() {
  function func(i) {
    var arguments = "pass";
    return arguments;
  }
  assertEquals("pass", func("fail"));
}

function testArguments_9() {
  function func() {
    assertTrue(arguments instanceof Object);
  }
  func();
}

function testArguments_10() {
  Function.prototype.extendsFrom = function(Super) {
    var self = this, func = function() {
      Super.apply(this, arguments);
      self.apply(this, arguments);
    };
      func.prototype = new Super();
      return func;
  };
  function Point() {}
  function PointController() {}
  function Shape() {}
  PointController = PointController.extendsFrom(Point);
  Shape = Shape.extendsFrom(PointController);
  assertDoesNotThrow(Shape.extendsFrom, "", PointController);
}

function testArguments_11() {
  /* BUG: Throwing out of a JIT:ed function with an arguments array didn't
     properly detach that arguments array, so if it was accessed later we'd read
     whatever value was then in the virtual register where the accessed formal
     parameter used to be stored.  This test sets things up so that there's a
     predictable value there (the string "FAIL") but in reality the effects of
     the bug were much more exciting. */

  var args;

  function pass(a, b, c, d, e, f, g, h, i, j, k, l, result) {
    args = arguments;

    /* This function needs to be JIT:ed; throwing out of a JIT:ed function is
       the trigger. */
    for (var i = 0; i < 1000; ++i);

    throw "never mind";
  }

  function fail(a, b, c, d, e, f, g, h, i, j, k, l, result) {}

  try { pass('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', "PASS"); } catch(okay) {}

  fail('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', "FAIL");

  assertEquals("PASS", args[12]);
}
testArguments_11.metadata = {
  "bug": "CORE-30500"
}

function testArguments_12() {
  /* BUG: Throwing out of a JIT:ed function with a variables object didn't
     properly detach that variable object, so if it was accessed later (via
     a long-lived nested function's lexical scope in this case) we'd read
     whatever value was then in the virtual register where the accessed
     local variable used to be stored.  This test sets things up so that
     there's a predictable value there (the string "FAIL") but in reality
     the effects of the bug were much more exciting. */

  var func;

  function pass() {
    var a, b, c, d, e, f, g, h, i, j, k, l, result = "PASS";

    func = function () { return result; };

    /* This function needs to be JIT:ed; throwing out of a JIT:ed function is
       the trigger. */
    for (var i = 0; i < 1000; ++i);

    throw "never mind";
  }

  function fail() {
    var a, b, c, d, e, f, g, h, i, j, k, l, result = "FAIL";
  }

  try { pass(); } catch(okay) {}

  fail();

  assertEquals("PASS", func());
}
testArguments_12.metadata = {
  "bug": "CORE-30500"
}

function testArguments_13()
{
  var args;

  function test()
  {
    /* We need have some "register frame padding". */
    var a, b, c, d, e, f, g, h;

    function func(a)
    {
      /* Store external reference to arguments array. */
      args = arguments;

      /* Loop to make this function JIT:ed. */
      for (var i = 0; i < 10000; ++i);

      /* Throw exception from eval() call: this triggers a direct call to
         ES_Execution_Context::ThrowFromMachineCode() from
         ES_Execution_Context::EvalFromMachineCode(), which (without the fix for
         CORE-30897) skips the stack unwind of the call to func() and the detach
         of the arguments array. */

      eval("throw new Error();");
    }

    try { func("pass"); } catch (e) {}

    /* Overwrite the register that func's first argument used to occupy, and
       that args[0] still references if the bug is unfixed. */
    (function () {})("fail", "fail", "fail", "fail", "fail");
  }

  test();

  assertEquals("pass", args[0]);
}
testArguments_13.metadata = {
  "bug": "CORE-30897"
}

function testArgumentsLength_0() {
  var func = function() {return arguments.length;};
  assertEquals(0, func());
}

function testArgumentsLength_1() {
  var func = function() {return arguments.length;};
  assertEquals(1, func(1));
}

function testArgumentsLength_2() {
  var func = function() {return arguments.length;};
  assertEquals(1, func(null));
}

function testArgumentsLength_3() {
  var func = function() {return arguments.length;};
  assertEquals(1, func(['a','b']));
}

function testArgumentsLength_4() {
  var func = function() {return arguments.length;};
  assertEquals(2, func('a', {}));
}

function testArgumentsLength_5() {
  var func = function() {return arguments.length;};
  assertEquals(2, func.apply(this, ['a', 'b']));
}

function testArgumentsLength_6() {
  var func = function() {return arguments.length;};
  assertEquals(2, func.apply(this, ['a', 'b']));
}

function testArgumentsLength_7() {
  var func = function() {return arguments.length;};
  assertEquals(10000, func.apply(this, new Array(10000)));
}

function testArgumentsLength_8() {
  var func = function() {return arguments.length;};
  assertEquals(3, func.call(this, ['a', 'b'], false, true));
}

function testArgumentsLength_9() {
  var func = function() {return func.arguments.length;};
  assertEquals(0, func());
}

function testArgumentsLength_10() {
  var func = function() {return func.arguments.length;};
  assertEquals(1, func('a'));
}

function testArgumentsLength_11() {
  /*
   * Function with a formal parameter
   */
  function func(i) {
    return arguments.length;
  }
  assertEquals(0, func());
}
testArgumentsLength_11.metadata = {
  bug:"CARAKAN-34"
};

function testArgumentsLength_12() {
  /*
   * Function with a formal parameter
   */
  function func(i) {
    return arguments.length;
  }
  assertEquals(1, func('a'));
}

function testForLoopOverArgs_0() {
  function func() {
    var s = '';
    for(var i=0;i<arguments.length;i++) {
      s += arguments[i];
    }
    return s;
  }
  assertEquals('', func());
}

function testForLoopOverArgs_1() {
  function func() {
    var s = '';
    for(var i=0;i<arguments.length;i++) {
      s += arguments[i];
    }
    return s;
  }
  assertEquals('abc', func('a', 'b', 'c'));
}

function testForLoopOverArgs_2() {
  function func() {
    var s = '';
    for(var i=0;i<arguments.length;i++) {
      s += arguments[i];
    }
    return s;
  }
  assertEquals(new Array(1000).join('undefined')+'undefined',
	       func.apply(this, new Array(1000)));
}

function testForInOverArguments_0() {
/*
 * arguments has all its properts marked DontEnum
 */
  function func() {
    var s = '';
    for(var p in arguments) {
      return false;
    }
    return true;
  }
  assertTrue(func());
}

function testForInOverArguments_1() {
  function func() {
    var s = '';
    var rv = [];
    for(var p in arguments) {
      rv.push(arguments[p]);
    }
    return rv;
  }
  assertArrayEquals(["a","b","c"], func('a', 'b', 'c'));
}

function testForInOverArguments_2() {
  function func() {
    var count = 0;
    for(var p in arguments) {
      count++;
      assertUndefined(arguments[p]);
    }
    return count;
  }
  assertEquals(1000, func.apply(this, new Array(1000)));
}

function testAssigningArguments_0() {
  function func() {
    var z = arguments;
    assertEquals(2, z.length);
    assertEquals("a", z[0]);
  }
  func("a", "b");
}

function testWithArguments_0() {
  function func() {
    with (arguments)  {
      assertEquals(3, length);
    }
  }
  func(1,2,3);
}

function testArgumentsInFunction_0() {
  /*
   * Arguments are visible to the in operator
   */
  function func() {
    assertTrue("arguments" in func);
  }
  func(1);
}

function testArgumentsClobbered_0() {
  /*
   * Arguments can be clobbered by the script
   */

  function func() {
    arguments = 2;
    return arguments;
  }

  assertEquals(2, func("a"));
}

//XXX Some tests here that really want to force a GC
function testArgumentsLiveOn_0() {
  function func() {
    return arguments;
  }
  var x = func(new Number(10), new String("hei"));
  assertEquals(2, x.length);
}

function testArgumentsLiveOn_1() {
  function func() {
    return arguments;
  }
  var x = func(new Number(10), new String("hei"));
  assertEquals("object", typeof x[0]);
  assertEquals("object", typeof x[1]);
}

function testArgumentsLiveOn_2() {
  function func() {
    return arguments;
  }
  var x = func(new Number(10), new String("hei"));
  assertEquals("number", typeof x[0].valueOf());
  assertEquals("string", typeof x[1].valueOf());
}

function testArgumentsLiveOn_3() {
  function func() {
    return arguments;
  }
  var x = func(new Number(10), new String("hei"));
  assertEquals(10, x[0].valueOf());
  assertEquals("hei", x[1].valueOf());
}

function testArgumentsLiveOn_4() {
  function b() {
    return a.arguments;
  }
  function a(x,y) {
    x = 2;
    var res = b();
    y = 3;
    return res;
  }
  assertArrayEquals([2,3], a(0,1));
}

function testArgumentsLiveOn_5() {
  function a(x,y) {
    x = 2;
    var res = arguments;
    y = 3;
    return res;
  }
  assertArrayEquals([2,3], a(0,1));
}

function testArgumentsConstructor() {
  var func = new Function("return arguments[0];");
  assertEquals(1, func(1));
}

function testArgumentsRegression_0() {
  //Pass condition is to not crash
  (function () {
     var target = arguments[0] || {};
     return target.x;
   })(true);
}

function testArgumentsProperties_0() {
  function func() {
    assertEnum(arguments, "0");
  }
  func("a");
}

function testArgumentsPrototype_0() {
  function func() {
    assertEquals(Object.prototype.toString, arguments.toString);
  }
  func();
}

function testArgumentsPrototype_1() {
  function func() {
    assertEquals(Object.prototype.valueOf, arguments.valueOf);
  }
  func();
}

function testArgumentsPrototype_2() {
  function func() {
    assertEquals(Object, arguments.constructor);
  }
  func();
}

function testArgumentsPrototype_3() {
  function func() {
    assertEquals(Object.prototype.hasOwnProperty, arguments.hasOwnProperty);
  }
  func();
}

function testArgumentsPrototype_4() {
  //This is strictly cheating as __proto__ is not in the spec
  function func() {
    assertEquals(Object.prototype, arguments.__proto__);
  }
  func();
}

function testArgumentsPrototype_5() {
  var o_p = Object.prototype;
  Object.prototype = {
    toString: function() {return "custom Object.prototype";}
  };
  function func() {
    assertEquals(o_p.toString, arguments.toString);
  }
  func();
}

function testArgumentsPrototype_6() {
  var o_p = Object.prototype;
  Object.prototype = {
    toString: function() {return "custom Object.prototype";}
  };
  function func() {
    assertEquals(o_p.constructor, arguments.constructor);
  }
  func();
}

function testArgumentsToString_0() {
  function func(a,b) {
    assertEquals("[object Arguments]", arguments.toString());
  }
  func("a", "b", "c");
}

function testFormalsModifiedViaArguments_0() {
  function f(a) {
    for (var i = 0; i < 1000; ++i); // make sure the function is JIT compiled
    a = a & 1; // we now know 'a' contains an int32
    g(); // this stores a boolean in 'a'
    return a; // when returning, we don't copy the type tag since we "know" it's an int32
  }

  function g() {
    f.arguments[0] = true; // do evil
  }

  assertEquals(true, f(2));
}
testFormalsModifiedViaArguments_0.metadata = {
  bug:"CARAKAN-904"
};

//XXX add tests for every, some, forEach, mao, reduce, reduceRight, etc.

function testMultipleFormals_0() {
  /*
   * Last formal parameter with a given name should be used
   */
  function func(a,b,a) {
    return a;
  }
  assertEquals(3, func(1,2,3));
}
testMultipleFormals_0.metadata = {
  bug:"CARAKAN-40, CARAKAN-99"
};

function testMultipleFormals_1() {
  function test2(a, a, b) {
    return function() {
      return b[0];
    };
  }
  var test2Closure = test2("a", "b", ["pass"]);
  assertEquals("pass", test2Closure());
}

function testFormalCalledArguments_0() {
  function func(i, arguments) {
    return arguments;
  }
  assertEquals(2, func(1, 2, 3));
}

function testArgumentsApply_0() {
  function sum() {
    var result = 0;
    for(var i=0; i<arguments.length; i++) {
      result += arguments[i];
    }
    return result;
  }
  assertEquals(6, sum.apply(this, [1,2,3]));
}
testArgumentsApply_0.metadata = {
  bug:"CARAKAN-36"
};

function testArgumentsCall_0() {
  function sum() {
    var result = 0;
    for(var i=0; i<arguments.length; i++) {
      result += arguments[i];
    }
    return result;
  }
  assertEquals(6, sum.call(this, 1, 2, 3));
}

//These tests are taken from regression tests so they are less well organised

function testMultipleCallsToFunctionWithArguments () {
  /*
   * Bug from excite.com: only the first call to makeArray had access to
   * makeArray.arguments, the second would fail.
   */

  function makeArray() {
    this[0] = makeArray.arguments.length;
    for (i = 0; i<makeArray.arguments.length; i++)
    {
      this[i+1] = makeArray.arguments[i];
    }
  }
  var daysofmonth = new makeArray( 31, 28, 31, 30, 31, 30,31, 31, 30, 31, 30, 31);
  var daysofmonthLY= new makeArray( 31, 29, 31, 30, 31, 30,31, 31, 30, 31, 30, 31);
  //Faliure to except is the pass condition
}

//Nonstandard stuff; Futhark seems to support extra properties on arguments


// function testArgumentsReverse() {
//   function func() {
//     return arguments.reverse().toString();
//   }
//   assertEquals("3,2,1", func(1,2,3));
// }

function testToString_0() {
  function func(x) {
    return x*x;
  }
  var original = func;
  eval(original.toString());
  assertEquals(original(16), func(16));
}
testToString_0.metadata = {
  bug:"CARAKAN-50"
};


function testFunctionInBlock_0() {
  assertEquals(1, func());
  if(false) {
    function func() {
      return 1;
    }
  }
}

function testFunctionInBlock_1() {
  function func() {
    return 0;
  }

  if(false) {
    function func() {
      return 1;
    }
  }
  assertEquals(1, func());
}

function testFunctionInBlock_2() {
  assertEquals(1, func());
  if(false) {
    function func() {
      return 1;
    }
  }
}

function testFunctionInBlock_3() {
  var x = {};
  assertEquals(1,func());
  with(x) {
    function func() {
      return 1;
    }
  }
}

function testFunctionInBlock_4() {
  assertEquals(1, func());
  var x = 0;
  switch(x) {
    case 1:
      function func() {
	return 1;
      }
      break;
    case 2:
      break;
    default:
      x = 1;
  }
  assertEquals(1, x);
}

function testFunctionInBlock_5() {
  assertEquals(1, func());
  try {
    function func() {
      return 1;
    }
  }
  catch(e) {

  }
}

function testFunctionInBlock_6() {
  assertEquals(1, func());
  try {
  }
  catch(e) {
    function func() {
      return 1;
    }
  }
}

function testFunctionInBlock_7() {
  assertEquals(1, func());
  try {
  }
  catch(e) {
  }
  finally {
    function func() {
      return 1;
    }
  }
}

function testInvalidReturn_0() {
  function func() {
    return new Function("return this=10");
  }
  assertThrows(ReferenceError(), func());
}

function testThisCallJitRegression_0() {
  //pass condition is to not crash
  function f(a) {
    var x = this;
  }

  for (var i = 0; i < 100; ++i) {
    f(1);
  }

  String.prototype.f = f;

  function g() {
    "foo".f(1, 2, 3, 4);
  }

  for (var i = 0; i < 100; ++i) {
    g();
  }
}

function testJitTypeRegression_0() {
  function func(n, m) {
    // JIT compile this function please.
    for (var i = 0; i < 1000; ++i) {}

    var x = "foo", loop = true;

    while (loop) {
      if (n == 3) {
	x = 1;
      }
      else if (n == 4) {
        x = 'bar';
      }

      loop = false;
    }

    return x;
  }

  assertEquals("number", typeof func(3));
}
testJitTypeRegression_0.metadata = {
  bug:"CARAKAN-667"
};

function testJitAssignmentRegression_0() {
  function GLc(){}
  function FLc(){}
  function NLc(b){
    return b;
  }
  var hash='#restored:wave:googlewave.com!w%2BFtI2-TGsB';

  _ = FLc.prototype = new GLc;
  _.xd=NLc;

  function ILc(g){
    (function(){
       for (var i=0; i<100; i++) {
	 var b, c=hash;
	 c.length>0&&(b=g.xd(hash));
	 assertDefined(b);
       }
     }
    )();
  }

  CJc=new FLc;
  ILc(CJc);
}
testJitAssignmentRegression_0.metadata = {
  bug:"CARAKAN-930"
};

function testJitAssignmentRegression_1() {
  var EventChannelRegistry = function() {
    initialize.apply(this, arguments);
  }
  var initialize = function () {
    for (var i = 0; i < arguments.length; ++i) {
      this.updateAffectingProject = 1;
    }
  };
  for (var i = 0; i < 30; i++) {
    var events = new EventChannelRegistry("", "", "", "", "", "", "", "", "", "");
  }
  assertEquals(1, events.updateAffectingProject);
}
testJitAssignmentRegression_1.metadata = {
  bug: "CARAKAN-1143"
};

function testJitAssignmentRegression_2() {
  function xMoveTo(el, tx, yu) {
    assertEquals(1, el);
    assertEquals(-3, tx);
    assertEquals(5, yu);
  }

  function item(parentObj) {
    parentObj(1, 2, 3);
  }

  function setPos(el, xu, yu) {
    var tx = -yu;
    var ty = yu;
    ty = ty + xu;
    xMoveTo(el, tx, ty);
  };

  function board() {
    for (var y = 0; y < 50; y++) {
      item(setPos);
    }
  }
  board();
}
testJitAssignmentRegression_2.metadata = {
  bug: "CORE-30053"
};

function testJitTrivialFunction_1()
{
   function trivial(arg) { return arg; }
   function t()
   {
       var x;

       x = trivial(1);
       x = trivial();

       assertUndefined(x);
   }
   for (var i = 0; i < 100; i++)
        t();
}
testJitTrivialFunction_1.metadata = {
  bug: "CORE-41237"
};

function testLexicalScope_0()
{
  function f()
  {
    var x = "pass";
    return function () { return x; };
  }

  assertEquals("pass", f()());
}

function testLexicalScope_1()
{
  function f()
  {
    var x = "fail";
    var f = function () { return x; };
    x = "pass";
    return f;
  }

  assertEquals("pass", f()());
}

function testLexicalScope_2()
{
  function f()
  {
    var x = "fail";
    (function () { x = "pass"; })();
    return x;
  }

  assertEquals("pass", f());
}

function testLexicalScope_3()
{
  function f()
  {
    var x = "fail";
    (function () { eval('x = "pass"'); })();
    return x;
  }

  assertEquals("pass", f());
}
