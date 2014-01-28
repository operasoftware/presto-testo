function testIn_0() {
  var a = {foo:1};
  assertTrue("foo" in a);
}
testIn_0.metadata = {
  bug:"CARAKAN-138"
};

function testIn_1() {
  var a = {1:2};
  assertTrue(1 in a);
}
testIn_1.metadata = {
  bug:"CARAKAN-138"
};

function testIn_2() {
  var a = {};
  assertFalse(1 in a);
}

function testIn_3() {
  var a = {};
  assertFalse('foo' in a);
}

function testIn_4() {
  var a = {};
  assertTrue('toString' in a);
}

function testIn_5() {
  function func() {}
  func.prototype = {
    foo:"bar"
  };
  var a = new func();
  assertTrue('foo' in a);
}

function testIn_6() {
  function func() {}
  func.prototype = {};
  var a = new func();
  func.prototype['b'] = 1;
  assertTrue('b' in a);
}

function testIn_7() {
  function a() {this.foo="bar";}
  function b() {}
  function c() {}
  b.prototype = new a();
  c.prototype = new b();
  var x = new c();
  assertTrue("foo" in x);
}

function testIn_8() {
  var o = {
    toString:function () {
      return "foo";
    }
  };
  var x = new Object();
  x.foo = "bar";
  assertTrue(o in x);
}

function testIn_9() {
  var x = new Object();
  x.foo = 1;
  assertTrue("foo" in x);
}

function testIn_10() {
  var x = new Object();
  x['foo'] = 1;
  assertTrue("foo" in x);
}

function testIn_11() {
  var a = ["a","b"];
  assertTrue(1 in a);
}

function testIn_12() {
  var a = ["a","b"];
  assertFalse(2 in a);
}

function testIn_13() {
  var a = new Array("a","b");
  assertTrue(1 in a);
}

function testIn_14() {
  var a = new Array("a","b");
  assertFalse(2 in a);
}
