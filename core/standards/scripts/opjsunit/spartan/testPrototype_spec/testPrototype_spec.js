function testReadonly_0 () {
  var F = this["Error"];
  var orig = F.prototype;
  F.prototype = new Object();
  assertEquals(orig, F.prototype);
}
testReadonly_0.metadata = {
  bug:"CARAKAN-48"
};

function testReadonly_1 () {
  var F = this["Array"];
  var orig = F.prototype;
  F.prototype = new Object();
  assertEquals(orig, F.prototype);
}
testReadonly_1.metadata = {
  bug:"CARAKAN-48"
};

function testReadonly_2 () {
  var F = this["String"];
  var orig = F.prototype;
  F.prototype = new Object();
  assertEquals(orig, F.prototype);
}
testReadonly_2.metadata = {
  bug:"CARAKAN-48"
};

function testUndefined_0() {
  //Pass condition is to not crash
  function func() {

  }
  func.prototype = undefined;
  var a = new func();
}

function testUndefined_1() {
  //Pass condition is to not crash
  function func() {

  }
  func.prototype = undefined;
  var a = new func();
  var b = new func();
}

function testWeirdRegression_0() {
  function f() {}
  function C() {}

  C.prototype = f;

  new C;

  var o = f.prototype;

  f.prototype = {};
}

function testChangePrototype_0() {
  function C() {
    this.y = "foo";
  };
  C.prototype = { x : 42 };

  var o;
  for (var i = 0; i < 100; ++i) {
    if (i == 99)
      C.prototype = { x : 24 };
    o = new C();
    assertEquals(i == 99 ? 24 : 42, o.x);
  }
}
testChangePrototype_0.metadata = {
  bug: "CORE-36639"
};

function testChangePrototype_1() {

    var o = {};
    o.__proto__ = eval("'use strict'; function f() { var o = {a: 2, b: 3};  return o;}f();");

    /* Need a way to 'reliably' force a GC here. */
    this.b = "aa";
    for (var i = 0; i < 100000; i++)
	this.b = this.b + i;

    /* Force invalidation of Object.prototype's instances. */
    Object.prototype.f = "a";
    assertEquals("a", Object.prototype.f);
}
testChangePrototype_1.metadata = {
  bug: "CORE-47866"
};
