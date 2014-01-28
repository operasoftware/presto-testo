function testVar_0() {
  var x;
  assertEquals(undefined, x);
}

function testVar_1() {
  var x,y;
  assertEquals(undefined, x);
  assertEquals(undefined, y);
}

function testVar_1() {
  var x,y;
  assertEquals(undefined, x);
  assertEquals(undefined, y);
}

function testVar_2() {
  var x=1;
  assertEquals(1, x);
}

function testVar_3() {
  var x,y=2;
  assertEquals(undefined, x);
  assertEquals(2, y);
}

function testVar_4() {
  var x,y=2;
  assertEquals(undefined, x);
  assertEquals(2, y);
}

function testVar_5() {
  var x=1,y=2;
  assertEquals(1, x);
  assertEquals(2, y);
}

function testVar_6() {
  {var x = 1;}
  assertEquals(1, x);
}

var g = 1;

function testVar_7() {
  assertEquals(1, g);
}

function testVar_8() {
  assertTrue(!(delete this.g));
}

function testVarRegression_0() {
  function f(x,y) {}

  function g(x) {
    var y;
    if (x) {
      y = "also wrong";
    }
    assertUndefined(y);
  }

  f("dummy", "wrong");
  g(false);
}
