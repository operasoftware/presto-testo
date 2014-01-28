/*
 * Use of eval other than as a direct reference to a function named eval
 */

/*
 * Generally we want these cases to behave as if the eval were occuring in
 * the global scope (this matches V8 and squirrelfish but not Spidermonkey
 * or IE (IE seems to use the local scope whereas Spidermonkey does
 * something odd; it seems to use globals if they exist and otherwise
 * traverse the scope chain in the normal way))
 */

function testEvalRenamed_0() {
  i = 0;
  function func() {
    var e = eval;
    var i = 0;
    e("i++");
    assertEquals(0, i);
  }
  func();
  assertEquals(1,i);
}

function testEvalRenamed_1() {
  i = 0;
  function func() {
    var i = 0;
    var g = this.eval;
    g("i++");
    assertEquals(0, i);
  }
  func();
  assertEquals(1,i);
}

function testEvalRenamed_2() {
  i = 0;
  function func() {
    var i=1;
    function inner() {
      var i=2;
      var e = eval;
      e("i++");
      assertEquals(2,i);
    }
    inner();
    assertEquals(1,i);
  }
  func();
  assertEquals(1,i);
}

function testEvalRenamed_3() {
  assertFalse('i' in this);
  function func() {
    var i=1;
    function inner() {
      var i = 2;
      var e = eval;
      e("i++");
      assertEquals(2,i);
    }
    inner();
    assertEquals(1,i);
  }

  assertThrows(ReferenceError(), func);
}

function testEvalRenamed_4() {
  i = 0;
  function Obj() {
    this.i = 1;
    var f = eval;
    f("i++");
    assertEquals(1, this.i);
  }
  new Obj();
  assertEquals(1, i);
}

function testEvalRenamed_5() {
  i = 0;
  function Obj() {
    this.i = 0;
    var f = eval;
    f("this.i++");
    assertEquals(0, this.i);
  }
  new Obj();
  assertEquals(1, i);
}
testEvalRenamed_4.metadata = {
  bug:"CARAKAN-313"
};

function testEvalCallRenamed_0() {
  i = 0;
  var o = {f:eval};
  function func() {
    var i=0;
    this.f("i++");
    assertEquals(0, i);
  }
  function test() {
    func.call(o);
  }
  // CORE-48963 reversed pass condition.
  assertDoesNotThrow(test);
}

//Scope of the this variable when eval is called with a different name

function testEvalRenamedThis_0() {
  x = 0;
  function test() {
    var o = {x:1};
    function func() {f = eval; f("x++; this.x++");}
    func.call(o);
    assertEquals(1,o.x);
  }
  test();
  assertEquals(2,x);
}

function testEvalThis_0() {
  i = 0;
  function func() {
    var i = 0;
    this.eval("i++");
    assertEquals(0, i);
  }
  func();
  assertEquals(1,i);
}

function testEvalThis_1() {
  i = 0;
  function func() {
    var i = 0;
    this.eval("i++");
    assertEquals(0, i);
  }
  func.call(this, "i++");
  assertEquals(1,i);
}

function testEvalThis_2() {
  i = 0;
  function func() {
    this.eval("i++");
    assertEquals(0, i);
  }
  function test() {
    func.call({}, "i++");
  }
  assertThrows(TypeError(), test);
}

function testEvalReturn_0() {
  i = 0;
  function func() {
    return eval;
  }
  function test() {
    var i = 0;
    func()("i++");
    assertEquals(0, i);
  }
  test();
  assertEquals(1, i);
}

function testEvalCall_0() {
  i = 0;
  function func() {
    var i = 0;
    eval.call(this, "i++");
    assertEquals(0,i);
  }
  func();
  assertEquals(1,i);
}

function testEvalCall_1() {
  i = 0;
  function func() {
    var i = 0;
    eval.call(null, "i++");
    assertEquals(0,i);
  }
  func();
  assertEquals(1,i);
}

function testEvalCall_2() {
  i = 0;
  function func() {
    var i = 0;
    eval.call(undefined, "i++");
    assertEquals(0,i);
  }
  func();
  assertEquals(1,i);
}


function testEvalCall_3() {
  i = 0;
  function func() {
    eval.call({}, "i++");
  }
  // CORE-48963 reversed pass condition.
  assertDoesNotThrow(func);
}

function testEvalApply_0() {
  i = 0;
  function func() {
    var i = 0;
    eval.apply(this, ["i++"]);
    assertEquals(0,i);
  }
  func();
  assertEquals(1,i);
}

function testEvalApply_1() {
  i = 0;
  function func() {
    var i = 0;
    eval.apply(null, ["i++"]);
    assertEquals(0,i);
  }
  func();
  assertEquals(1,i);
}

function testEvalApply_2() {
  i = 0;
  function func() {
    var i = 0;
    eval.apply(undefined, ["i++"]);
    assertEquals(0,i);
  }
  func();
  assertEquals(1,i);
}

function testEvalApply_3() {
  i = 0;
  function func() {
    eval.apply({}, ["i++"]);
  }
  // CORE-48963 reversed pass condition.
  assertDoesNotThrow(func);
}

function testNewEval_0() {
  function func() {
    new eval();
  }
  assertThrows(TypeError(), func);
}
testNewEval_0.metadata = {
  bug:"CARAKAN-217"
};

function testNewEval_1() {
  function func() {
    var f = eval;
    new f();
  }
  assertThrows(TypeError(), func);
}

function testNewEval_2() {
  var f = eval;
  function func() {
    new f();
  }
  assertThrows(TypeError(), func);
}

function testEvalObject_0() {
  var o = new Object();
  o.f = eval;
  // CORE-48963 reversed pass condition.
  assertDoesNotThrow(function() {
		 o.f("37");
	       });
}
testEvalObject_0.metadata = {
  bug:"CARAKAN-404"
};

function testEvalObject_1() {
  var o = new Object();
  o.eval = eval;
  // CORE-48963 reversed pass condition.
  assertDoesNotThrow(function() {
		 o.eval("37");
	       });
}
testEvalObject_1.metadata = {
  bug:"CARAKAN-404"
};

function testEvalConfigurable_0() {
    var funs = [];

    funs.push(function () {
	var res = 0;
	eval("var x = 0; delete x; try { x + 1; } catch (e) { res = 1; }");
	assertEquals(1, res);
    });
    var outer = 3;
    funs.push(function () {
	var res = 0;
	eval("var x = 0; var z = outer; delete x; res = outer;");
	assertEquals(3, res);
    });
    var outer1 = 5;
    funs.push(function () {
	var res = 0;
	eval("var x = 0; var z = outer1; delete outer1; res = z;");
	assertEquals(5, res);
	assertEquals(5, outer1);
    });
    funs.push(function () {
	var res = 0;
	eval("var x = 0; delete y; try { x + 1; res = 1; } catch (e) { res = 2; }");
	assertEquals(1, res);
    });
    funs.push(function () {
	var ev = eval;
	ev("var y = 0; delete y; try { res2 = y; } catch (e) { res2 = 1; }");
	assertEquals(1, res2);
    });

    for (var i = 0; i < funs.length; i++)
	funs[i]();
}
testEvalConfigurable_0.metadata = {
  bug:"CORE-31511"
};

function testEvalIndirect_0() {
  var _this = this;
  var o = { get_this: function () { return ( 1, eval )( '"use strict";this' ); } }
  assertEquals(_this, o.get_this());
}
testEvalIndirect_0.metadata = {
  bug:"CORE-46333"
};

function testStrictEval_0() {
    "use strict";
    var y = 0;
    var str = 'for (var i = 0; i < 40; i++) { y = i + 1; }';
    for (var i = 0; i < 40; i++)
    {
	eval(str);
	assertEquals(40, y);
    }
}
testStrictEval_0.metadata = {
  bug:"CORE-47533"
};
