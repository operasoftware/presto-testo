function testFunctionInitiation_0() {
  function foo() {return 3;}
  assertEquals(3, foo());
}

function testFunctionInitiation_1() {
  assertEquals(3, foo());
  function foo() {return 3;}
}

function testFunctionInitiation_2() {
  /*
   * In a function expression the identifier cannot be referenced
   * from the enclosing scope
   */
  function testWrapper() {
    var a = function func() {};
    return func;
  }
  assertThrows(ReferenceError(), testWrapper);
}

function testFunctionInitiation_3() {
  /*
   * The identifier can be referenced from within the body of a
   * function expression
   */

  var a = function func(x) {
    x++;
    if (x < 3) {
      return func(x);
    } else {
      return x;
    }
  };
  assertEquals(3, a(0));
}
testFunctionInitiation_3.metadata = {
  bug:"CARAKAN-58"
};

function testFunctionInitiation_4() {
  /*
   * Identifier referenced within the body of a function expression
   */

  function func(x) {
    x++;
    if (x < 3) {
      return func(x);
    } else {
      return x;
    }
  };
  assertEquals(3, func(0));
}

function testFunctionInitiation_5() {
  /*
   * Function declerations override formals
   */
  function func(a) {
    return a();
    function a() {
      return 2;
    }
  }
  function b() {
    return 1;
  }
  assertEquals(2, func(b));
}

function testFunctionInitiation_6() {
  /*
   * variable declerations do not override function declerations
   */
  function func() {
    return a();
    function a() {
      return 2;
    }
    var a = 1;
  }
  assertEquals(2, func());
}

function testFunctionInitiation_7() {
  /*
   * Variables are initially undefined
   */
  function func() {
    return a;
    var a = 1;
  }
  assertEquals(undefined, func());
}

function testFunctionInitiation_8() {
  function func(a) {
  }
  assertEquals(1, func.length);
}

function testFunctionInitiation_9() {
  function func() {
  }
  assertEquals(0, func.length);
}

function testFunctionInitiation_10() {
  /*
   * this property of functions when they are called is always the
   * global object?
   */
  function func() {
    return this;
  }
  assertEquals(this, func());
}

function testFunctionInitiation_11() {
  function func() {
  }
  assertEquals(func, func.prototype.constructor);
}

function testFunctionConstruction_0() {
  function func() {
  }
  func.prototype.inner = function() {return this;};
  var x = new func();
  assertEquals(x,x.inner());
}

function testFunctionConstruction_1() {
  /*
   * Updating the prototype object updates the return value
   */
  function func() {
  }
  func.prototype.inner = function() {return 1;};
  var x = new func();
  func.prototype.inner = function() {return 2;};
  assertEquals(2, x.inner());
}

function testFunctionConstruction_2() {
  /*
   * Changing the parent prototype has no effect because
   * the prototype is copied
   */
  function func() {
  }
  func.prototype.inner = function() {return 1;};
  var x = new func();
  func.prototype = new Object();
  func.prototype.inner = function() {return 2;};
  assertEquals(1, x.inner());
}

function testFunctionConstruction_3() {
  /*
   * Creating an object from a constructor with a non-object prototype
   * gives the Object prototype
   */
  function func() {
  }
  func.prototype = null;
  var x = new func();
  assertEquals("[object Object]", x.toString());
}

function testFunctionConstruction_4() {
  /*
   * Creating an object from a constructor with a non-object prototype
   * gives the Object prototype
   */
  function func() {
  }
  func.prototype = null;
  var x = new func();
  assertEquals("[object Object]", x.toString());
}

function testFunctionConstruction_5() {
  function func() {
    return new Number(1);
  }
  var a = new func();
  assertEquals("1", a.toString());
}

function testFunctionConstruction_5() {
  function func() {
    return 1;
  }
  var a = new func();
  assertTrue(a != 1);
}

function testFunctionConstruction_6() {
  function func() {
    return null;
  }
  var a = new func();
  assertTrue(typeof a == "object");
}

function testFunctionConstruction_7() {
  function func() {
    this.a = 1;
  }
  var a = new func();
  assertEquals(1, a.a);
}
testFunctionConstruction_7.metadata = {
  bug:"CARAKAN-29"
};

function testFunctionConstruction_8() {
  function func(a) {
    this.a = a;
  }
  var a = new func(3);
  assertEquals(3, a.a);
}

function testFunctionConstruction_9() {
  function func(a) {
    throw "Error";
  }
  function wrapper() {
    return new func(3);
  }
  assertThrows("Error", wrapper);
}

function testForInThis_0() {
  //pass condition is to not crash
  var found = false;
  for (var x in this) {
    if (x == 'testForInThis_0') {
      found = true;
    }
  }
  assertTrue(found);
}
testForInThis_0.metadata = {
  bug:"CARAKAN-68"
};