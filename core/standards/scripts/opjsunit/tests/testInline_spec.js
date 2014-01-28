function testInline_0() {

  function C() {}

  C.prototype.bar = function () { return 42; };

  var o = new C();

  var expected = 42;

  function t()
  {
    for (var i = 0; i < 100; ++i)
    {
      if (i == 50)
      {
        C.prototype.bar = function () { return 24; };
        expected = 24;
      }
      var v = o.bar();
      assertEquals(v, expected);
    }
  }

  t();
}

function foo() { return 42; };

function testInline_1() {
  var expected = 42;
  var orig_foo = foo;
  function t() {
    for (var i = 0; i < 100; ++i) {
      if (i == 100) {
        foo = function () { return 24; };
        expected = 24;
      }
      var v = foo();
      assertEquals(v, expected);
    }
  }
  t();
  //now reset everything
  foo = orig_foo;
}


function testInline_2() {
  var expected = 42;

  var baz = function () { return 42; };

  function t()
  {
    for (var i = 0; i < 100; ++i)
    {
      if (i == 50)
      {
        baz = function () { return 24; };
        expected = 24;
      }
      var v = baz();
      assertEquals(v, expected);
    }
  }

  t();
}

function testInline_3() {
  /* The purpose of the function 'f' is to be inlined where it is called.  We
   inline two types of functions: global functions (top-level function
   declarations) and functions found via a cached property access that found the
   property in a prototype of the instance object.  We chose the latter, hence
   the constructor 'C' and the function 'f'. */

  function C() {}
  C.prototype.f = function f() { return true; };

  /* CARAKAN-680 occured when switching to JIT mode at a call to a JIT:ed function
   from the bytecode engine, when the calling function had previously been
   JIT:ed itself (but wasn't currently executing in JIT mode.)  This situation
   mainly occurs in the case of recursion.

   In this TC, 'g' is the function that will execute in bytecode even though
   it's been JIT:ed; this is accomplished by calling 'h' which recursively calls
   'g' with a high 'n', causing 'g' to loop a lot and become JIT:ed.

   We then want the initial call to 'g' to switch over to JIT mode, and this is
   accomplished by calling 'f', which has been JIT:ed earlier.  We always try to
   switch the currently executing function over into JIT mode if it has been
   JIT:ed already and calls a JIT:ed function.

   Finally, the bug occurs because the very call that causes us to switch over
   to JIT mode was inlined, which is why the call to 'f' is a "member function."
   Also, to have the call to 'f' inlined, we need to make sure that the call has
   been executed at least once before 'g' is JIT:ed, which we're reasonably sure
   of since we call it before the loop that causes 'g' to be JIT:ed. */

   function g(o, n) {
     if (n == 0) {
       h(o);
     }

     o.f();

     for (var i = 0; i < n; ++i);
   }

  /* Trampoline function used to call 'g' recursively.  The reason it has a
   try/finally block is that this prevents 'h' itself from being JIT:ed, which
   further prevents us from converting the whole call stack into JIT mode when
   'g' is first JIT:ed (in the loop during the recursive call.)

   Note though that 'h' would typically not have been JIT:ed anyway: it's only
   called once during the test, and doesn't loop itself. */

  function h(o) {
    try {
      g(o, 1000);
    }
    finally {}
  }

  var o = new C;

  /* The purpose of the function 'i' is to call 'f' enough so that 'f' is JIT:ed
   before the the main part of the test. */

  function i() {
    for (var i = 0; i < 100; ++i)
      o.f();
  }
  i();

  /* Now crash! */
  g(o, 0);
}
testInline_3.metadata = {
  bug:"CARAKAN-680"
};

function testInline_4() {
  String.prototype.tS = function() {
    return this;
  }

  var objconstruct = function() {
    this.b = 10;
  }
  objconstruct.prototype.tS = function() {
    return "" + this.b;
  }

  var func = function(a) {
    return a.tS();
  }

  for (var i = 0; i < 50; i++) {
    // The call to String is here to turn the String object to a literal, it
    // can't be in String.prototype.tS as then this isn't the bug we had.
    assertEquals("a", String(func("a")));
  }
  assertEquals("10", func(new objconstruct));
}
testInline_4.metadata = {
  bug: "CARAKAN-799"
}

function testInline_5()
{
  function C()
  {
  }

  C.prototype.toString = function () { return "FAIL"; }

  function func(a)
  {
    return a.toString();
  }

  var c = new C();

  for (var i = 0; i < 100; ++i)
    func(c);

  assertEquals("PASS", func("PASS"));
}
testInline_5.metadata = {
  bug: "CARAKAN-799"
}

function testInline_6() {
  function C() {}

  C.prototype.f = function f(a) { return a; };

  var c = new C();

  for (var j = 0; j < 2; ++j) {
    assertEquals(10, c.f(10));
    for (var i = 0; i < 1000; ++i);
  }
}
testInline_6.metadata = {
  bug:"CARAKAN-930"
};

function testInline_7() {
  function C() {}

  C.prototype.f = function f(a) { return a; };

  var c = new C(), x = testInline_7.length;

  for (var j = 10; j < 12; ++j) {
    assertEquals(j, c.f(j << x));
    for (var i = 0; i < 1000; ++i);
  }
}
testInline_7.metadata = {
  bug:"CARAKAN-930"
};

function testInline_8() {
  function f(o, p) {
    if (p)
      return o.g();
    else
      return 42;
  }

  function C() {}

  C.prototype.dummy = 0;
  C.prototype.g = function g() { return 42; };

  var o = new C();

  f(o, true);

  C.prototype.dummy = undefined;

  for (var i = 0; i < 100; ++i) {
    assertEquals(42, f(o, false));
  }
}
testInline_8.metadata = {
  bug: "CT-356"
};

function testInline_9() {
  function C()
  {
  }

  function func(a,p)
  {
    /* To be fair, hasOwnProperty doesn't (yet) get inlined. This it
     * to check the semi-inlining where hasOwnProperty is called
     * directly from JIT and not from a slow-case call. */
    return a.hasOwnProperty(p);
  }

  var c = new C();

  for (var i = 0; i < 100; ++i)
      func(c, "PASS");

  c.PASS = true;

  assertTrue(func(c,"PASS"));
}

function testInline_10() {
  function func()
  {
    for (var i = 0; i < 100; ++i)
      Math.abs(1,2);
    return true;
  }

  assertTrue(func());
}

function testInline_11() {
    function C(d)
    {
	this.data = d;
    }

    C.prototype.get = function (a) { return this.data[a]; };

    function f(o, p, a)
    {
	return o.get(1) + p.get(a.x);
    }

    var o = new C([0,1,2,3]);
    var p = {};

    p["get".toLowerCase()] = function (n) { return n; };

    for (var i = 0; i < 100; ++i)
	assertEquals(2, f(o, p, { x: 1 }));

    for (var i = 0; i < 100; ++i)
	assertEquals(3, f(o, p, { y: 1, x: 2 }));
}
testInline_11.metadata = {
  bug:"CORE-43184"
};


function testInline_12() {
    // No asserts in this test since it is a pass if it doesn't crash
    var tmp0, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, tmp68, tmp69, tmp70, tmp71, tmp72, tmp73, tmp74, tmp75, tmp76, tmp77, tmp78, tmp79, tmp80, tmp81, tmp82, tmp83, tmp84, tmp85, tmp86, tmp87, tmp88, tmp89, tmp90, tmp91, tmp92, tmp93, tmp94, tmp95, tmp96, tmp97, tmp98, tmp99, tmp100, tmp101, tmp102, tmp103, tmp104, tmp105, tmp106, tmp107, tmp108, tmp109, tmp110, tmp111, tmp112, tmp113, tmp114, tmp115, tmp116, tmp117, tmp118, tmp119, tmp120, tmp121, tmp122, tmp123, tmp124, tmp125, tmp126, tmp127, tmp128, tmp129, tmp130, tmp131, tmp132, tmp133, tmp134, tmp135, tmp136, tmp137, tmp138, tmp139, tmp140, tmp141, tmp142, tmp143, tmp144, tmp145, tmp146, tmp147, tmp148, tmp149, tmp150, tmp151, tmp152, tmp153, tmp154, tmp155, tmp156, tmp157, tmp158, tmp159, tmp160, tmp161, tmp162, tmp163, tmp164, tmp165, tmp166, tmp167, tmp168, tmp169, tmp170, tmp171, tmp172, tmp173, tmp174, tmp175;

    var C = function () {};
    C.prototype.f = function f(x) {
        return x * 2;
    }

    var o = new C();;

    for (var j = 0; j < 300; ++j) {

        if (j > 100 && j < 200)
            o.f(j);
        else if (j > 200)
            o.f(j + 2);
        else
            continue;
    }

}
testInline_12.metadata = {
  bug: "CORE-44825"
};
