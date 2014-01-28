function testAnalyzer_1()
{
  /* Testing inferred type (on copy) propagated through jumps.  On failure, the
     function incorrectly returns null, because we incorrectly conclude that
     'callback' contains null when the function returns.

     Reduced from YUI's async-queue.js, function next().

     Fix: fff3135e3be22a2581721692885bfac6d834a5fb */

  function func(x)
  {
      var callback = 10;
      if (x)
        callback = null;
      return callback || null;
  }

  assertEquals(10, func(false));
}

function testAnalyzer_2()
{
  /* Testing tracking of known values in the case of multiple jumps to the same
     location (the 'return y;' statement, in this case.)  Known values are
     represented as the codeword index of the instruction that produces the
     value.  In this test, there are 3 instructions that store 10 in 'y', and
     any one of them is a valid representation of the fact that we know that 'y'
     is 10 when returning from the function.  A bug in the analyzer caused
     oscillation by representing the same known value using the index of
     different instructions and mistaking the change for a real change.

     Caused problem at unknown location in Dojo.

     Fix: d0bc28a799668fd1520f9c7c51676d91ac1e72ed */

  function func(x)
  {
    var y = 10;
    do
    {
      if (x == 1)
      {
        y = 10;
        break;
      }
      if (x == 2)
      {
        y = 10;
        break;
      }
    }
    while (x);
    return y;
  }

  assertEquals(10, func(false));
}

function testAnalyzer_3()
{
  /* Testing handling of situations where a local variable's value
     might be trampled via the lexical scope of a nested function. */

  var f = 2;

  function func()
  {
    var F = 0;

    [1, 2, 3].forEach(function (x) { F += x; });

    return F * f;
  }

  assertEquals(12, func());
}
testAnalyzer_3.metadata = {
  bug: "CORE-37430"
};

function testAnalyzer_4()
{
  var f = 2;

  function update()
  {
    func.arguments[0] = 6;
  }

  function func(F)
  {
    F = 0;

    update();

    return F * f;
  }

  assertEquals(12, func(1));
}
testAnalyzer_4.metadata = {
  bug: "CORE-37430"
};

function testAnalyzer_5()
{
    /* Not so much "Analyzer" as code generator (IA32) */
    function g(n, b) { return n >> b; }
    function f(i, k) {return (k + g(i, 1) + i / 3 & 1) == 0; }

    for (var i = 0; i < 100; i++)
       f(i, 0);
}
testAnalyzer_5.metadata = {
  bug: "CORE-45998"
};

function testAnalyzer_6()
{
    /* Pass condition is no "engine assert" / crash / freeze */
    var sortDirection = 1;

    $rows = [{k: 40.7}, {k: 33.3}, {k: 39.0}, {k: 35.7}, {k: 31.0}, {k: 27.3}, {k: 27.0},
	     {k: 33.0}, {k: 29.0}, {k: 21.0}, {k: 22.0}, {k: 16.7}, {k: 28.0}, {k: 21.3}];

    for (var i = 0; i < 2; i++)
    {
	$rows.sort(function(a, b) {
	    if (sortDirection == 1) {
		return a.k - b.k;
	    } else {
		return b.k - a.k;
	    }
	    return 0;
	});
	sortDirection = -sortDirection;
    }
}
testAnalyzer_6.metadata = {
  bug: "CORE-46541"
};

function testAnalyzer_7() {
    function f(b)
    {
        var d = 32;
        var g = b;
        var h = this.iborder = 10;
        var v = {x: -(h + g * d / 2),
                 width: h * 2 + g * d,
                 height: h * 2 + g * d};
        if (b)
            this._X = function () { ; }
    }
    for (var i = 0; i < 100; i++)
        f(10.2);
}
testAnalyzer_7.metadata = {
  bug: "CORE-47255"
};

function testAnalyzer_8() {
    /* Arguably a 'codegen' issue, not analyzer. */
    function test(b,e,f,m)
    {
	var s = 2;
	var v, t, x, C, J = C = x = m = e = 0, T = 0;
	return T;
    };
    assertEquals(0, test());
}
testAnalyzer_8.metadata = {
  bug: "CORE-47964"
};

function testAnalyzer_9() {
    /* Arguably a 'codegen' issue, not analyzer. */
    function test(b,e,f,m)
    {
	var s = 2;
	var v, t, x, C, J = C = x = m = e = 1, T = 0;
	return C;
    };
    assertEquals(1, test());
}
testAnalyzer_9.metadata = {
  bug: "CORE-47964"
};

function testAnalyzer_10() {
    /* Arguably a 'codegen' issue, not analyzer. */
    function test(b,e,f,m)
    {
	var s = 2;
	var x, C, J = C = x = m = e = 2.3, T = 0;
	return T;
    };
    assertEquals(0, test());
}
testAnalyzer_10.metadata = {
  bug: "CORE-47964"
};

function testCodegen_0() {
    function bar()
    {
	var one = 1;
	(function()
	{
	    assertEquals(4.91, one + 1 * (1 + 1 * (1 + 1 * (1 + 1 * Math.pow(0.1, 2) - 0.1 * one))) + one);
	})();
    }
    bar();
}
testCodegen_0.metadata = {
  bug: "CORE-48891"
};

function testCodegen_1() {
    function f(value)
    {
        var _i;
        var prev;
        for (var i = _i = 0; _i < value; i = ++_i)
        {
            assertTrue(!prev || i == prev + 1);
            prev = i;
        }
    }
    f(80);
}
testCodegen_1.metadata = {
  bug: "ITVSDK-8478"
};
