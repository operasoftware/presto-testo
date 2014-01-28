var g = new Object();

function testDelete_0() {
  var x = 0;
  assertTrue(!(delete x));
}

function testDelete_1() {
  //this should maybe go in some special eval tests somewhere
  //need to check that es 3.1 doesn't change this
  assertTrue(eval("var y=0; delete y"));
}

function testDelete_2() {
  var x = Object();
  x.foo = "bar";
  assertTrue(delete x.foo);
}

function testDelete_3() {
  var x = Object();
  x.foo = "bar";
  assertTrue(delete x['foo']);
}

function testDelete_4() {
  var x = Object();
  x.foo = "bar";
  assertTrue(delete x['baz']);
}

function testDelete_5() {
  assertTrue(delete 5);
}

function testDelete_6() {
  assertTrue(delete "The World");
}

function testDelete_7() {
  assertTrue(!(delete NaN));
}
testDelete_7.metadata = {
  bug:"CARAKAN-57"
};

function testDelete_8() {
  assertTrue(!(delete undefined));
}

function testDelete_9() {
  assertTrue(!(delete Infinity));
}

function testDelete_10() {
  assertTrue(!(delete arguments));
}

function testDelete_11() {
  assertTrue(!(delete g));
}

function testDelete_12() {
  try {
    throw "Exception";
  } catch (e) {
    assertTrue(!(delete e));
    return;
  }
  assertTrue(false);
}

//Could be complete here, loop over all properties of all builtins
function testDelete_13() {
  var a = new Array();
  assertTrue(!(delete a.length));
}

function testDelete_14() {
  var a = new Array();
  assertDelete(eval);
}

function testDelete_15() {
  assertTrue(!(delete Object.prototype));
}

function testDelete_16() {
  assertTrue(!(delete Function.prototype));
}

function testDelete_17() {
  function func(a,b) {
  }
  assertTrue(!(delete func.length));
}

function testDelete_17() {
  function func(a,b) {
  }
  assertTrue(!(delete func.prototype));
}

//These are a bunch more things that are marked DontDelete, should maybe
//test those when testing the relevant objects?

//Tests that deleted things really are gone

function testDelete_18() {
  var x = {
    'foo':'bar'
  };
  delete x.foo;
  assertEquals(undefined, x.foo);
}

function testDelete_19() {
  var x = new Object();
  x.foo = "bar";
  delete x['foo'];
  assertEquals(undefined, x.foo);
}

function testDelete_20() {
  assertTrue(delete missing);
}
testDelete_20.metadata = {
  bugs:"CARAKAN-320"
};

function testDelete_21() {
  aa = 0;
  qx = {};
  function define (name) {
    var passed = qx ? 1 : 2;
    if (passed != 1) {
      return [passed, (qx ? 2 : 1)];
    }
    else {
      return [passed];
    }
  };
  define("a");
  delete aa;
  assertArrayEquals([1], define("b"));
}

function testDelete_22() {
  function C() {}
  C.prototype = {};
  var a = new C();
  var o = C.prototype;
  
  o.x = Math.PI;
  o.y = 42;
  delete o.x;
  assertEquals(42, o.y);
}
testDelete_22.metadata = {
  bug: "CT-984"
};