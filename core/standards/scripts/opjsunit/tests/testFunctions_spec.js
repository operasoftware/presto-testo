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
  assertThrows(ReferenceError("Undefined variable: func"), testWrapper);
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
  //Uses eval because the bug does not occur in function scope
  var x = eval("function a(){return 1}; var a; a()");
  assertEquals(1, x);
}
testFunctionInitiation_11.metadata = {
  bug:"CARAKAN-18"
};

function testFunctionInitiation_12() {
  function func() {
  }
  assertEquals(func, func.prototype.constructor);
}

function testFunctionInitiation_13() {
  var f = Function();
  assertEquals(f, f.prototype.constructor);
}
testFunctionInitiation_13.metadata = {
  bug:"CARAKAN-190"
};

function testFunctionInitiation_14() {
  var x = 10;

  function func()
  {
    return eval("(function(){return x;})");
  }

  assertEquals(10, func()());
}
testFunctionInitiation_14.metadata = {
  bug: "CARAKAN-918"
}

function testFunctionInitiation_15() {
  var x = 10;

  function func()
  {
    with({})
      return eval("(function(){return x;})");
  }

  assertEquals(10, func()());
}

function testFunctionInitiation_16() {
  var x = 20;

  function func()
  {
    var a = {x: 10};
    with(a)
      return eval("(function(){return x;})");
  }

  assertEquals(10, func()());
}

function testFunctionInitiation_17() {
  var x = 10;

  function func()
  {
    return (function() { return x });
  }

  assertEquals(10, func()());
}

function testFunctionInitiation_18() {
  var x = 10;

  function func()
  {
    with({})
      return (function() { return x });
  }

  assertEquals(10, func()());
}

function testFunctionInitiation_19() {
  var x = 20;

  function func()
  {
    var a = {x: 10};
    with(a)
      return (function() { return x });
  }

  assertEquals(10, func()());
}

function testFunctionInitaliation_20() {
  "use strict";

  var a = function () {};
  a.prototype = {};
  var b = function () {};
  assertType("object", b.prototype);
}
testFunctionInitaliation_20.metadata = {
  bug: "CT-1402"
};

function testFunctionIdentifier_0() {
  /* Function identifier should be ReadOnly in a FunctionExpression. */
  var a = function func() {
    func = 1;
    func += 1;
    func &= 1;
    func++;
    return func;
  };
  var b = a();
  assertTrue(typeof b == "function");
}

function testFunctionIdentifier_1() {
  /* Function identifier should not be ReadOnly in a FunctionDeclaration. */
  function __func785288() {
    __func785288 = 1;
    assertTrue(typeof __func785288 == "number");
  };
  __func785288();
  assertTrue(typeof __func785288 == "number");
}

function testFunctionIdentifier_2() {
  /* Local variable should shadow function identifier. */
  var a = function func() {
    var func = 1;
    return func;
  };
  var f = a();
  assertTrue(typeof f == "number");
}

/* Repeat the tests with unknown scopes. */

function testFunctionIdentifier_3() {
  var a = function func() {
    eval();
    func = 1;
    func += 1;
    func &= 1;
    func++;
    return func;
  };
  var b = a();
  assertTrue(typeof b == "function");
}

function testFunctionIdentifier_4() {
  function __func785288() {
    eval();
    __func785288 = 1;
    assertTrue(typeof __func785288 == "number");
  };
  __func785288();
  assertTrue(typeof __func785288 == "number");
}

function testFunctionIdentifier_5() {
  var a = function func() {
    eval();
    var func = 1;
    return func;
  };
  var f = a();
  assertTrue(typeof f == "number");
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

function testPrototypeConstructor_0() {
  assertEquals(Function, Function.prototype.constructor);
}
testPrototypeConstructor_0.metadata = {
  bug:"CARAKAN-67"
};

function testCustomPrototypeProperties_0() {
  //Pass condition is to not crash
  test();

  function test() {
    Function["prototype"].inherits=function(a){};
    function foo(){};
  }
}
testCustomPrototypeProperties_0.metadata = {
  bug:"CARAKAN-93"
};

function testToString_0() {
  function func() {
    function A() {}
    A.prototype.toString = function() { return x; };
    var a = new A();
    a.toString();
  }
  assertThrows(ReferenceError(), func);
}
testToString_0.metadata = {
  bug:"CARAKAN-87"
};

function testMisc_0() {
  //The pass condition is to not crash
  function func(title) {
    var x = new Array();
    x.title = title;
  }
  func("a");
  func("a");
}
testMisc_0.metadata = {
  bug:"CARAKAN-91"
};


function testCaller_0() {
  function func() {}
  assertNull(func.caller);
}
testCaller_0.metadata = {
  bug:"CARAKAN-191"
};

function testCaller_1() {
  assertNull(testCaller_2.caller);
}

function testCaller_2() {
  function func() {
    assertEquals(testCaller_2, func.caller);
  }
  func();
}

function testCaller_3() {
  function func() {
    assertFalse(func.caller == func.caller.caller);
  }
  func();
}

function testCaller_4() {
  function func() {
    eval("function a() {}");
    assertEquals(testCaller_4, func.caller);
  }
  func();
}

function testCaller_5() {
  function func() {
    try{var a = 1;} catch(e){}
    assertEquals(testCaller_5, func.caller);
  }
  func();
}

function testCaller_6() {
  function func() {
    eval("assertEquals(testCaller_6, func.caller)");
  }
  func();
}

function testCaller_7() {
  function func() {
    try {
      assertEquals(testCaller_7, func.caller);
    } catch(e) {
      assertUnreached();
    }
  }
  func();
}

function testCaller_8() {
  function func() {
    with(func) {
      assertEquals(testCaller_8, caller);
    }
  }
  func();
}

function testCaller_9() {
  var i;
  function func() {
    if (i==0) {
      i++;
      func();
    }
    else {
      assertEquals(func, func.caller);
      assertEquals(testCaller_9, func.caller.caller);
    }
  }
}

function testCaller_10() {
  function func() {
    assertEquals(a, func.caller);
  }
  var a = function() {
    func();
  };
  a();
}

function testCaller_11() {
  var a = function() {
    b();
  };
  var b = function() {
    assertEquals(a, b.caller);
  };
  a();
}

function testCaller_12() {
  var i = 0;
  var b = function() {
    if (i==0) {
      i++;
      b();
    } else  {
      assertEquals(b, b.caller);
    }
  };
  b();
}

function testCaller_13() {
  eval("function func() {a()}");
  function a() {
    assertEquals(func, a.caller);
  }
  func();
}

function testCaller_14() {
  eval("a()");
  function a() {
    assertEquals(testCaller_14, a.caller);
  }
}

function testCaller_15() {
  eval("b(); function a(){assertEquals(b,a.caller)} function b(){a()}");
}

function testCaller_16() {
  function a(n) {
    assertEquals(b, a.caller);
    b(n-1);
  }
  function b(n) {
    if (n == 4) {
      assertEquals(testCaller_16, b.caller);
    } else {
      assertEquals(a, b.caller);
      assertEquals(b, b.caller.caller);
    }
    if (n > 0) {
      a(n);
    }
  }
  b(4);
}

function testCaller_17() {
    function f()
    {
        return f.caller;
    }
    function func()
    {
       "use strict";
       return f();
    }
    assertThrows(TypeError(), func);
}
testCaller_17.metadata = {
  bug:"CORE-45671"
};

function testCaller_18() {
    function f()
    {
        return f.caller;
    }
    assertTrue(eval("\"use strict\";\nf();").toString().indexOf("testCaller_18") >= 0);
}
testCaller_18.metadata = {
  bug:"CORE-45671"
};

function testCaller_19() {
    function f()
    {
        return f.caller;
    }
    function func()
    {
       "use strict";
       return eval("\"use strict\";\nf();");
    }
    assertThrows(TypeError(), func);
}
testCaller_19.metadata = {
  bug:"CORE-45671"
};

function testCaller_20() {
  function f() {}
  assertDontDelete(f, "caller");
}

function testCaller_21() {
  function f() {}
  assertDontEnum(f, "caller");
}

function testCaller_22() {
  function f() {}
  assertReadOnly(f, "caller");
}

function testPrototypeProperties_0() {
  function runtest(s) {
    function A() {}
    A.prototype[s] = function() {
      return true;
    };

    if(!A.prototype.bar) {
      A.prototype.bar = function() {
	return false;
      };
    }

    return A;
  }
  var foo1 = runtest('foo');
  var foo2 = runtest('bar');
  var foo3 = new foo2();
  assertTrue(foo3.bar());
}
testPrototypeProperties_0.metadata = {
  bug:"CARAKAN-517"
};

function testPrototypeProperties_1() {
  var foo = 'foo';
  Array.prototype[foo] = null;
  Array.prototype.bar = function() {
    return false;
  };
  assertDefined(Array.prototype.bar);
}
testPrototypeProperties_0.metadata = {
  bug:"CARAKAN-522"
};

function testRecursion_0() {
  var _makeCtor = function () {
    return function () {
      var c = arguments.callee,
          s = c.superclass,
          ct = s && s.constructor;
      if (ct)
        ct();
    };
  };

  var callback = function() {
    var summary = new ChildFunction();
    summary.run();
  }

  var calls = 0;
  var ParentFunction = _makeCtor();
  ParentFunction.prototype.run = function(){
    calls++
    if (calls > 30) return "PASS";
    callback();
  }

  var ChildFunction = _makeCtor();
  ChildFunction.superclass = ParentFunction.prototype;
  ChildFunction.prototype = ParentFunction.prototype;

  assertEquals("PASS", (new ParentFunction()).run());
}
testRecursion_0.metadata = {
  bug:"CARAKAN-646"
};

function testRecursion_1() {
  /* When called as a constructor, this will return undefined instead of
   *  the constructed object if 'f' has been JIT:ed. */
  function C() {
    f();
  }

/* Purpose: a simple function that will be JIT:ed.  But we need to make
 * sure that it's not inlined where it's called, so we declare it as a
 *  variable rather than using a function declaration. */
  var f = function f() {
    return 10;
  };

/* Purpose: trigger JIT of 'C' as a regular function, and of 'f'.  The
   try/finally statement prevents 'g' itself from being JIT:ed. */
  function g() {
    try {
      for (var i = 0; i < 100; ++i) {
	C();
	f();
      }
    }
    finally {}
  }

  /* JIT 'C' and 'f'. */
  g();

  /* 'new C()' will return undefined, because it switches over to JIT mode
   *  when it calls 'f', and then accidently transforms into a regular
   *  call.  And since 'C' has no explicit return statement, it returns
   * undefined. */
  assertEquals("object", typeof new C());
}
testRecursion_1.metadata = {
  bug:"CARAKAN-646"
};

function testScope_0() {
  var count = 0;
  (function func(recurse) {
     print(recurse);
     count++;
     recurse = (recurse === undefined)?true:recurse;
     if (!recurse) {
       return;
     }
     intermediate("a", function() {
		    func(false);
		  });
   })();

  function intermediate(script, callback) {
    callback(script);
  }
  assertEquals(2, count);
}
testScope_0.metadata = {
  bug:"CARAKAN-962"
};

function testScope_1() {
  function outer(argument) {
    (function func(recurse) {
       assertTrue(argument);
       function a(){}
   })();
  }
  outer(true);
}
testScope_1.metadata = {
  bug:"CARAKAN-962"
};

function testScope_2() {
  // test 93: FunctionExpression semantics
  var functest;
  var vartest = 0;

  var value = (function functest(arg) {
    if (arg) {
      return 1;
    }
    vartest = 1;
    functest = function (arg) { return 2; }; // this line does nothing as 'functest' is ReadOnly here
    return functest(true); // this is therefore tail recursion and returns 1
  })(false);

  assertEquals(1, vartest, "rules in 10.1.4 not followed in FunctionBody");
  assertEquals(1, value, "semantics of FunctionExpression: function Identifier ... not followed");
  assertUndefined(functest, "Property in step 4 of FunctionExpression: function Identifier ... leaked to parent scope");
}

function testScope_3() {
  var f = null;
  new function(_) {
    var fun = function() { assertEquals("abc", y); };
    var y = "abc";
    f = fun;
    eval("function g(){};");
  }();

  (function () { f(); })();
}
testScope_3.metadata = {
  bug:"CARAKAN-1004"
};

function testScope_4() {
  var passed = false;

  eval("(function foo(recursive){ \
    if (recursive) {\
      passed = true;\
    } else {\
      (function(){\
        foo(true);\
      })();\
    }\
  })();");

  assertEquals(true, passed);
}
testScope_4.metadata = {
  bug: "CARAKAN-1265"
};

function testScope_5() {
  var passed = false;

  (function foo(recursive){
    if (recursive) {
      passed = true;
    } else {
      (function(){
        foo(true);
      })();
    }
  })();

  assertEquals(true, passed);
}
testScope_5.metadata = {
  bug: "CARAKAN-1265"
};

function testRegisterFrame_0() {
  var a = { b: 0 }, b = "b";

  function f(a, b) {
    return a[b];
  }

  /* Make sure 'f' is JIT:ed. */
  try {
    for (var i = 0; i < 1000; ++i) {
      f(a, b);
    }
  }
  catch(e) {}

  function g(call_f) {
    if (call_f) {
      h();
      f(a, b, 0, 0);
    }
    else
      /* Make sure 'g' is JIT:ed. */
      for (var i = 0; i < 1000; ++i); {}
  }

  function h() {
    try {
      g(false);
    } catch(e) {}
  }

  g(true);

  function test(a,b) {
    assertTrue(a);
  }
  test(true, false);

}

function testNamedExpression_0() {
  var y = null;

  var x = function y() {
    return (function () {
	      return x === y;
	    })();
  };
  assertTrue(x());
}
testNamedExpression_0.metadata = {
  bug:"CARAKAN-962"
};

function testDelegating_0() {
  /*
   * Test is actually for not-well-specified behaviour
   */
  function origtest(name, bar) {
    this.name = name;
    this.bar = bar;
  }

  function Monty(id, name, bar) {
    this.id = id;
    this.base = origtest;
    this.base(name, bar);
  }

  Monty.prototype = origtest;

  function testtwo(notNamedName, bar) {
    this.name = notNamedName;
    this.bar = bar;
  }

  function Python(id, notNamedName, bar) {
    this.id = id;
    this.base = origtest;
    this.base(notNamedName, bar);
  }

  Python.prototype = testtwo;

  var foo = new Monty(1, 'my name', 'sna!');
  var manchu = new Python(1, 'my name', 'sna!');
  assertEquals('my name:my name', foo.name + ':' + manchu.name);
}
testDelegating_0.metadata = {
  bug:"CARAKAN-908"
};


function testDelegating_2() {
  /*
   * Test is actually for not-well-specified behaviour
   */
  function testshared() {}
  assertEquals(false, testshared.hasOwnProperty('arguments'));
  assertEquals(false, testshared.hasOwnProperty('caller'));
  assertEquals(false, testshared.hasOwnProperty('arity'));
  assertEquals(false, testshared.hasOwnProperty('name'));
  assertEquals(true, testshared.hasOwnProperty('length'));
}

function testDelegating_2() {
  function Parent() {
    this.arguments = 'oarguments';
    this.caller = 'ocaller';
    this.arity = 'oarity';
    this.length = 'olength';
    this.name = 'oname';
  }

  function Child() {
    this.base = Parent;
    this.base();
  }

  Child.prototype = Parent;

  Child.prototype.value = function() {
    return this.arguments + ',' + this.caller + ',' + this.arity + ',0,' + this.name;
  };

  var child = new Child();

  var actual = child.value();
  assertEquals('oarguments,ocaller,oarity,0,oname', actual);
}
testDelegating_2.metadata = {
  bug:"CARAKAN-908"
};

function testDeepNesting_0() {
  function f(){}
  f.prototype.runtest = function (a,b) {
    a+=b;
    return a;
  };
  var o = new f();

  var result = "FAIL";
  for(var i=0;i<100;i++) {
    result = o.runtest(o.runtest(o.runtest(o.runtest(o.runtest(o.runtest(o.runtest(o.runtest(o.runtest(o.runtest('','P'),'A'),'S'),'S'),''),''),''),''),''),'');
  }
  assertEquals("PASS", result);
}
testDeepNesting_0.metadata = {
  bug:"CARAKAN-1057"
};

function testConstructor_0() {
  function C(n) {
    var s = Math.sqrt;
    for (var i = 0; i < n; ++i) {
      s(0.5);
    }
    return 0;
  }

  for (var i = 0; i < 1000; ++i) {}

  function TypeOf(x) {
    return typeof x;
  }

  var a = new C(0);
  assertEquals("object", TypeOf(a));

  var b = new C(100);
  assertEquals("object", TypeOf(b));
}
testConstructor_0.metadata = {
  bug:"CARAKAN-759"
};

function testConstructor_1() {
  function f(o) { return o.x.y; }

  function C() {}

  C.prototype.x = function() {};
  C.prototype.x.y = 10;

  var o = new C;

  for (var i = 0; i < 1000; ++i) {
    f(o);
  }
}
testConstructor_1.metadata = {
  bug:"CARAKAN-1165"
};

function testLength_0() {
  function f(x) { return o; }
  function g() {}

  assertEquals(1, f.length);
  assertEquals(0, g.length);
  f.length = g.length = 2;
  assertEquals(1, f.length);
  assertEquals(0, g.length);
}
testLength_0.metadata = {
  bug:"CORE-47199"
};

function testLength_1() {
  function test()
  {
      "use strict";
      function f(x) { return o; }
      function g() {}

      assertEquals(1, f.length);
      assertEquals(0, g.length);
      assertThrows(TypeError, function () { f.length = g.length = 2; });
      assertEquals(1, f.length);
      assertEquals(0, g.length);
  }
  test();
}
testLength_1.metadata = {
  bug:"CORE-47199"
};
