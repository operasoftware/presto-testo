function testEval_0() {
  //Pass condition is to not crash
  function foo() {}

  eval("var barr = Array(); barr.getGo = foo; barr.getGo()");
  eval("var arr = Array(); arr.getGo = foo; arr.getGo();");
}
testEval_0.metadata = {
  bug:"CARAKAN-55"
};

function testEval_1() {
  var x = eval("0");
  assertEquals(0, x);
}
testEval_1.metadata = {
  bug:"CARAKAN-74"
};

//Does Section 16 allow us to throw something other than a SyntaxError here?

function testEval_2() {
  //Pass condition is to not crash
  function func() {
    var x = eval("\"\" = 1");
  }
  assertThrows(ReferenceError(), func);
}
testEval_2.metadata = {
  bug:"CARAKAN-28"
};

function testEval_3() {
  function func() {
    eval('1=2');
  }
  assertThrows(ReferenceError(), func);
}
testEval_3.metadata = {
  bug:"CARAKAN-46"
};

function testEval_5() {
  function func() {
    eval('return /;');
  }
  assertThrows(SyntaxError(), func);
}
testEval_0.metadata = {
  bug:"CARAKAN-95"
};


function testEval_6() {
  //Large array
  var test_string = "var x = new Array(";
  var expected = [];
  var max = 0x00FF;
  for (var i = 0; i < max; i++) {
    test_string += i;
    if (i < max - 1) {
      test_string += ",";
    }
    expected.push(i);
  }
  test_string += ")";
  eval(test_string);
  assertArrayEquals(expected, x);
}
testEval_6.metadata = {
  bug:"CARAKAN-105"
};

function testEval_7() {
  //Large array literal
  var test_string = "x = [";
  var expected = [];
  var max = 0x00FF;
  for (var i = 0; i < max; i++) {
    test_string += i;
    if (i < max - 1) {
      test_string += ",";
    }
    expected.push(i);
  }
  test_string += "]";
  eval(test_string);
  assertArrayEquals(expected, x);
}

function testEval_8() {
  eval("function t() {return 1}");
  assertEquals(1, t());
}
testEval_8.metadata = {
  bug:"CARAKAN-147"
};

function testEval_9() {
  var x = eval("0x10");
  assertEquals(16, x);
}
testEval_9.metadata = {
  bug:"CARAKAN-155"
};

function testEval_10() {
  if (typeof version != 'undefined') {}

  var y = eval("var x");
  assertUndefined(y);
}
testEval_10.metadata = {
  bug:"CARAKAN-167"
};

function testEval_11() {
  var x;
  function func(code) {
    x = 1;
    eval(code);
    assertEquals(2,x);
  }
  func('x=2;');
}
testEval_11.metadata = {
  bug:'CARAKAN-177'
};

function testEval_12() {
  var va = 10;
  eval('var va = 20; assertEquals(va, 20)');
  assertEquals(va, 20);
  assertEquals(typeof this.va, "undefined");
}
testEval_12.metadata = {
  bug:"CARAKAN-169"
};

function testEval_13() {
  var vb = 10;
  this.eval('var vb = 20; assertEquals(vb, 20)');
  assertEquals(vb, 10);
  assertEquals(typeof this.vb, "number");
  assertEquals(typeof this.vc, "undefined");
}
testEval_13.metadata = {
  bug:"CARAKAN-169"
};

function testEval_14() {
  var vc = 10;
  eval('vc = 20; assertEquals(vc, 20)');
  assertEquals(vc, 20);
}
testEval_14.metadata = {
  bug:"CARAKAN-169"
};

function testEval_15() {
  var vd = 10;
  this.eval('vd = 20; assertEquals(vd, 20)');
  assertEquals(vd, 10);
  assertEquals(typeof this.vd, "number");
}
testEval_15.metadata = {
  bug:"CARAKAN-169"
};

function testEval_16() {
  eval('var ve = 20; assertEquals(typeof ve, "number")');
  assertEquals(typeof ve, "number");
  assertEquals(typeof this.ve, "undefined");
}
testEval_16.metadata = {
  bug:"CARAKAN-169"
};

function testEval_17() {
  this.eval('var vf = 20; assertEquals(typeof vf, "number")');
  assertEquals(typeof vf, "number");
  assertEquals(typeof this.vf, "number");
}
testEval_17.metadata = {
  bug:"CARAKAN-169"
};

function testEval_18() {
  eval('vg = 20; assertEquals(typeof vg, "number")');
  assertEquals(typeof vg, "number");
}
testEval_18.metadata = {
  bug:"CARAKAN-169"
};

function testEval_18() {
  eval('vg = 20; assertEquals(typeof vg, "number")');
  assertEquals(typeof vg, "number");
  assertEquals(typeof this.vg, "number");
}
testEval_18.metadata = {
  bug:"CARAKAN-169"
};

function testEval_19() {
  this.eval('vh = 20; assertEquals(typeof vh, "number")');
  assertEquals(typeof vh, "number");
  assertEquals(typeof this.vh, "number");
}
testEval_19.metadata = {
    bug:"CARAKAN-169"
};

function testEval_20() {
  assertNaN(eval("var i; i++;"));
}
testEval_20.metadata = {
  bug:"CARAKAN-183"
};

function testEval_21() {
  var i=0;
  eval("function func() {a()}");
  function a() {
    i++;
  }
  func();
  assertEquals(1,i);
}
testEval_21.metadata = {
  bug:"CARAKAN-207"
};

function testEval_22() {
  var i=0;
  eval("function a() {i=1}");
  eval("a(); function a() {i=2}");
  assertEquals(2,i);
}

function testEval_23() {
  var i=0;
  eval("function a() {i++}; a()");
  assertEquals(1,i);
}

function testEval_24() {
  var i=0;
  eval("a(); function a() {i=1};");
  function a() {
    i=2;
  }
  assertEquals(1,i);
}

function testEval_25() {
  var i=0;
  eval("function a() {}; delete a; a();");
  function a() {
    i=1;
  }
  assertEquals(0,i);
}

function testEval_26() {
  var i=0;
  function func() {
    var i = 1;
    eval("var a = function() {return i}");
    return a;
  }
  assertEquals(1, func()());
}

function testEval_29() {
  var i=0;
  var source = "i++; if(i<100) {eval(source);}";
  eval(source);
  assertEquals(i, 100);
}

function testEval_30() {
  eval("function func(){}");
  assertEquals('function', typeof func);
}
testEval_30.metadata = {
  bug:"CARAKAN-220"
};


function testEval_32() {
  //Real pass condition is to not crash
  function func() {
    eval("(function(){{\0}})");
  }
  assertThrows(SyntaxError(), func);
}
testEval_32.metadata = {
  bug:"CARAKAN-235"
};

function testEval_33() {
  var x = 0;
  eval('function x() { return true; }');
  assertEquals("function", typeof x);
}
testEval_33.metadata = {
  bug:"CARAKAN-220"
};

function testEval_34() {
  function func() {
    var b = "a";
    eval("var q = 100");
    assertEquals("a", b);
    return function() {assertEquals("a", b);};
  }
  func()();
}
testEval_34.metadata = {
  bug:"CARAKAN-578"
};

function testEval_35() {
  var foo = eval("(function(){return true ? 1e-81 : 1;})");
  for (var i = 0; i < 50; i++)
    assertEquals(1e-81, foo());
}
testEval_35.metadata = {
  bug:"CARAKAN-1062"
};

function testEval_36() {
  //pass condition is to not hang
  function func() {
    for(var i=0; i<100; i++){}
    var j;
    eval("for(var j=100;--j>=0;){print(i)}");
  }
  func();
}

function testEvalShadowing_0() {
  var i=0;
  function eval(x) {
    return x;
  }
  assertEquals("i++", eval("i++"));
  assertEquals(0,i);
}
testEvalShadowing_0.metadata = {
  bug:"CARAKAN-311"
};

function testEvalShadowing_1() {
  var i=0;
  var eval = function(x) {
    return x;
  };
  assertEquals("i++", eval("i++"));
  assertEquals(0,i);
}
testEvalShadowing_1.metadata = {
  bug:"CARAKAN-311"
};

function testEvalShadowing_2() {
  var i=0;
  var j=0;
  var a = function eval(x) {
    j++;
    if (j == 1) {
      eval(x);
    }
    return x;
  };
  assertEquals("i++", a("i++"));
  assertEquals(0,i);
  assertEquals(2,j);
}
testEvalShadowing_2.metadata = {
  bug:"CARAKAN-311"
};

function testEvalShadowing_3() {
  function eval(x) {
    return x;
  }
  function func(x) {
    return eval(x);
  }
  var i = 0;
  assertEquals("i++", func("i++"));
  assertEquals(0, i);
}
testEvalShadowing_3.metadata = {
  bug:"CARAKAN-311"
};

function testEvalShadowing_4() {
  var eval = function(x) {
    return x;
  };
  function func(x) {
    return eval(x);
  }
  var i = 0;
  assertEquals("i++", func("i++"));
  assertEquals(0, i);
}
testEvalShadowing_4.metadata = {
  bug:"CARAKAN-311"
};

function testEvalShadowing_5() {
  var j=0;
  var a = function eval(x) {
    j++;
    if (j==1) {
      eval(x);
    }
    return x;
  };
  function func(x) {
    return a(x);
  }
  var i = 0;
  assertEquals("i++", func("i++"));
  assertEquals(0, i);
}
testEvalShadowing_5.metadata = {
  bug:"CARAKAN-311"
};

function testEvalShadowing_6() {
  var i=0;
  function eval(x) {
    return x;
  }
  assertEquals("i++", eval.call(this, "i++"));
  assertEquals(0, i);
}

function testEvalShadowing_7() {
  var i=0;
  function eval(x) {
    return x;
  }
  assertEquals("i++", eval.call({}, "i++"));
  assertEquals(0, i);
}

function testEvalShadowing_8() {
  var i=0;
  var eval = function eval(x) {
    return x;
  };
  assertEquals("i++", eval.call(this, "i++"));
  assertEquals(0, i);
}

function testEvalShadowing_9() {
  var i=0;
  var eval = function(x) {
    return x;
  };
  assertEquals("i++", eval.apply({}, ["i++"]));
  assertEquals(0, i);
}

function testEvalShadowing_10() {
  var i=0;
  function eval(x) {
    return x;
  }
  assertEquals("i++", eval.apply(this, ["i++"]));
  assertEquals(0, i);
}

function testEvalShadowing_11() {
  var i=0;
  function eval(x) {
    return x;
  }
  assertEquals("i++", eval.apply({}, ["i++"]));
  assertEquals(0, i);
}

function testEvalShadowing_12() {
  var i=0;
  var eval = function eval(x) {
    return x;
  };
  assertEquals("i++", eval.apply(this, ["i++"]));
  assertEquals(0, i);
}

function testEvalShadowing_13() {
  var i=0;
  var eval = function(x) {
    return x;
  };
  assertEquals("i++", eval.apply({}, ["i++"]));
  assertEquals(0, i);
}

function testEvalShadowing_14() {
  var i = 0;
  function eval(x) {
    this.x = x;
  }
  var o = new eval("i++");
  assertEquals("i++", o.x);
  assertEquals(0,i);
}

function testShadowing_15() {
  var i = 0;
  var eval = function(x) {
    this.x = x;
  };
  var o = new eval("i++");
  assertEquals("i++", o.x);
  assertEquals(0,i);
}

function testShadowing_15() {
  var i = 0;
  var j = 0;
  var res;
  var a = function eval(x) {
    this.x = x;
    j++;
    if (j == 1) {
      res = new eval(x);
    }
  };
  var o = a("i++");
  assertEquals("i++", res.x);
  assertEquals(0,i);
  assertEquals("i++", x);
}

function testEvalVar_0() {
  var a = 1;
  eval("var a");
  assertEquals(1,a);
}

function testEvalVar_1() {
  function func(a) {
    eval("var a");
    assertEquals(1,a);
  }
  func(1);
}

function testEvalInWith_0() {
  this.x = 0;
  with ({x:1}) {
    eval("assertEquals(1, x)");
  }
}

function testEvalInWith_1() {
  this.x = 0;
  with ({x:1}) {
    eval("function f() {assertEquals(1, x)}; f()");
  }
}

function testEvalInWith_2() {
  this.x = 0;
  with ({x:1}) {
    eval("function g() {function f() {assertEquals(1, x)}; f()}; g()");
  }
}

function testEvalInWith_3() {
  this.x = 0;
  with ({x:1}) {
    eval("function h() {function g() {function f() {assertEquals(1, x)}; f()}; g()}; h()");
  }
}

function testEvalFunctionExpression_0() {
  var a = eval("function() {return 1}");
  assertEquals(1, a());
}

function testEvalScopeRegression_0() {
    var x = 0;
    function g() { x = 1; }
    eval('y = 0');
    g();
    assertEquals(1, x);
}

function testEvalScopeRegression_1() {
  var x = 0;
  function g() { x = 1; }
  eval('var y = 0');
  g();
  assertEquals(1, x);
}

function testEvalScopeRegression_2() {
  var count = 0;
  var c;
  function a() {
    function b() {
      count++;
    };
    c = eval("(function() {return {init:function(){b()}}})()");
  }
  a();
  c.init();
  assertEquals(1, count);
}
testEvalScopeRegression_2.metadata = {
  bug:"CARAKAN-559"
};

function testEvalScopeRegression_3() {
  function f() {
    var a = 2;
    var code = "return {render : function() {return 1/a;}}";
    function update(code) {
      presetObject = eval("(function(){" + code + "})()");
      return presetObject.render();
    }
    return update(code);
  };
  assertEquals(0.5, f());
}
testEvalScopeRegression_3.metadata = {
  bug:"CARAKAN-633"
};

function testEvalScopeRegression_4() {
  this.h = undefined;

  function f() {
    /* Register frame in this function:
     0: global object
     1: f
     2: arguments array (because eval() is used)
     3: a
     4-: temporaries */

    var a = "PASS";

    /* eval creates an internal "variables object" with a property 'a' that is a
     magic reference to the register containing a's value and a property 'b'
     that is a normal property with the value undefined */
    eval('var b;');

    /* this internal "variables object" is stored in h's scope chain, and thus
     lives on after f returns */
    h = function () { return a; };

    /* when f returns, the magic property 'a' on the variables object should be
     un-magiced, but isn't (until CARAKAN-625 is fixed) */
  }

  function g() {
    /* Register frame in this function:
     0: global object
     1: g
     2: x
     3: y
     4-: temporaries */

    var x, y = "FAIL";

    assertEquals("PASS", h());
  }

  /* f and g will be called with register frames allocated at the same place, so
   that register N in both function calls share physical storage. this means
   f's 'a' and g's 'y' are stored in the same place, and the "FAIL" in 'y'
   overwrites the "PASS" in 'a' */

  f();
  g();
}

function testEvalScopeRegression_5() {
  var result = eval("var z = 6; var x = eval('(function(a,b){ return a + b + z; })'); x(3,4)");
  assertEquals(13, result);
}
testEvalScopeRegression_5.metadata = {
  bug:"CARAKAN-879"
};

function testEvalLargeRegisterFrame_0() {
  var a = 10;
  eval("a = 20; Array(0" + Array(600).join(",0") + ");");
  assertEquals(20, a);
}
testEvalLargeRegisterFrame_0.metadata = {
  bug:"CARAKAN-643"
};

function testEvalLargeRegisterFrame_1() {
  var a = 10;

  function func() {
    return a;
  }

  assertEquals(20, eval("a = 20; Array(0" + Array(600).join(",0") + "); func();"));
}
testEvalLargeRegisterFrame_1.metadata = {
  bug:"CARAKAN-643"
};

function testEvalLargeRegisterFrame_2() {
  var a = 10;

  function func() {
    return a;
  }

  assertEquals(20, eval("var c; a = 20; Array(0" + Array(600).join(",0") + "); func();"));
}
testEvalLargeRegisterFrame_2.metadata = {
  bug:"CARAKAN-643"
};

function testEvalLargeRegisterFrame_3() {
  var a = 10;

  function func() {
    return a;
  }

  assertEquals(20, eval("var c; a = 20; Array(0" + Array(600).join(",0") + "); func();"));
  a = 30;
  assertEquals(30, func());
}
testEvalLargeRegisterFrame_3.metadata = {
  bug:"CARAKAN-643"
};

function testEvalLargeRegisterFrame_4() {
    function func(a) {
      return eval("Array(0" + Array(600).join(",0") + "); a = 20; arguments[0];");
  }

  assertEquals(20, func(10));
}
testEvalLargeRegisterFrame_4.metadata = {
  bug:"CARAKAN-643"
};

function testEvalLargeRegisterFrame_5() {
  var a = 10;
  eval("a = 20; Array(0" + Array(2048).join(",0") + ");");
  assertEquals(20, a);
}
testEvalLargeRegisterFrame_5.metadata = {
  bug:"CARAKAN-643"
};

function testEvalLargeRegisterFrame_6() {
  var a = 10;

  function func() {
    return a;
  }

  assertEquals(20, eval("a = 20; Array(0" + Array(2048).join(",0") + "); func();"));
}
testEvalLargeRegisterFrame_6.metadata = {
  bug:"CARAKAN-643"
};

function testEvalLargeRegisterFrame_7() {
  var a = 10;

  function func() {
    return a;
  }

  assertEquals(20, eval("var c; a = 20; Array(0" + Array(2048).join(",0") + "); func();"));
}
testEvalLargeRegisterFrame_7.metadata = {
  bug:"CARAKAN-643"
};

function testEvalLargeRegisterFrame_8() {
  var a = 10;

  function func() {
    return a;
  }

  assertEquals(20, eval("var c; a = 20; Array(0" + Array(2048).join(",0") + "); func();"));
}
testEvalLargeRegisterFrame_8.metadata = {
  bug:"CARAKAN-643"
};

function testEvalLargeRegisterFrame_9() {
    function func(a) {
      return eval("Array(0" + Array(2048).join(",0") + "); a = 20; arguments[0];");
  }

  assertEquals(20, func(10));
}
testEvalLargeRegisterFrame_9.metadata = {
  bug:"CARAKAN-643"
};

function testEvalArray_0() {
  var a = eval("[]");
  assertArrayEquals([], a);
}
testEvalArray_0.metadata = {
  bug:"CARAKAN-694"
};

function testEvalArray_1() {
  var a = eval("[1]");
  assertEquals(1, a.length);
}

function testEvalArray_2() {
  var a = eval("[[], 1]");
  assertEquals(2, a.length);
  assertEquals(0, a[0].length);
}

function testEvalArray_3() {
  var a = eval("[[1], 1]");
  assertEquals(2, a.length);
  assertEquals(1, a[0].length);
}

function testEvalArray_4() {
  var a = eval("[1, []]");
  assertEquals(2, a.length);
  assertEquals(0, a[1].length);
}

function testEvalArray_5() {
  var a = eval("[1, [1]]");
  assertEquals(2, a.length);
  assertEquals(1, a[1].length);
}

function testEvalArray_6() {
  var arr = eval('([{a:null,c:"PA"},{a:null,b:null,c:"SS"}])');
  var out = '';
  for (var i=0; i<arr.length; i++) {
    out += arr[i].c;
  }
  assertEquals("PASS", out);
}
testEvalArray_6.metadata = {
  bug:"CARAKAN-811"
};

function testEvalObject_0() {
  var o = eval('({"1":"PASS"})');
  assertDefined(o[1]);
  assertDefined(o[1]);
  assertEquals("PASS", o[1]);
}
testEvalObject_0.metadata = {
  bug:"CARAKAN-912"
};

function testEvalObject_1() {
  var o = eval('({"a":"PASS"})');
  assertDefined(o["a"]);
  assertDefined(o["a"]);
  assertEquals("PASS", o["a"]);
}

function testEvalStrict_0() {
  var vd = eval('"use strict"; (function(){function f(){}})(); 2');
  assertEquals(vd, 2);
}
testEvalStrict_0.metadata = {
  bug:"CORE-40645"
};

function testEvalStrict_1() {
  (function (global) {
    function t()
    {
        (1,eval)('"use strict"; var ___global_test_variable___ = 88;');
        if ('___global_test_variable___' in global) {
            delete global.___global_test_variable___;
            return false;
        }
        return true;
    }
    assertTrue(t());
  })(this);
}
testEvalStrict_1.metadata = {
  bug:"CORE-41342"
};

