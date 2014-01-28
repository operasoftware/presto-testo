function testThrow_0() {
  function func() {
    throw "Cookies!";
  }
  assertThrows("Cookies!", func);
}

function testTryCatch_0() {
  function func() {
    var rv = 0;
    try {
      throw "Exception!";
    } catch(e) {
      rv = 1;
    }
    return rv;
  }
  assertEquals(1, func());
}

function testTryCatch_1() {
  var rv = 0;
  try {
    throw new ReferenceError;
    assertUnreached();
  } catch(e) {
    assertEquals("ReferenceError", e.name);
  }
}
testTryCatch_1.metadata = {
  bug:"CARAKAN-60"
};

function testTryCatch_2() {
  function func() {
    x;

    try {}
    catch (e) {}
  }
  assertThrows(ReferenceError(), func);
}
testTryCatch_1.metadata = {
  bug:"CARAKAN-80"
};

function testTryCatch_3() {
  //Scope of the catch blocks
  var a = function () {return 0;};
  try{
    throw "Exception";
  } catch(e) {
    var a = function() {return 1;};
  }
  assertEquals(1, a());
}

function testTryCatch_4() {
  //see https://mail.mozilla.org/pipermail/es5-discuss/2009-May/002574.html
  function func() {
    var f;
    for (var i = 0; i < 2; i++) {
      try {
        throw i;
      } catch (e) {
        if (i === 0) {
	  f = function() { return e; };
	}
      }
    }
    return f();
  }
  assertEquals(0, func());
}
testTryCatch_4.metadata = {
  bug:"CARAKAN-561"
};

function testTryCatch_5() {
  var e = 0;
  try{
    throw 1;
  } catch(e) {
    assertEquals(1,e);
  }
  assertEquals(0, e);
}


function testTryCatchFinally_0() {
  function func() {
    var rv = 0;
    try {
      throw "Exception!";
    } catch(e) {
      rv = 1;
    } finally {
      rv = 2;
    }
    return rv;
  }
  assertEquals(2, func());
}

function testTryCatchFinally_1() {
  var a = 1;
  function func() {
    try {
      throw "Exception";
    } catch(e) {
      return;
    } finally {
      a = 2;
    }
  }
  func();
  assertEquals(2, a);
}
testTryCatchFinally_1.metadata = {
  bug:"CARAKAN-211"
};

function testTryCatchFinally_2() {
  var a = 0;
  var b = 0;
  function func() {
    try {
      throw "Exception";
    } catch(e) {
      throw "Exception";
    } finally {
      b = 2;
    }
  }
  try {
    func();
  } catch(e) {
    a = 1;
  }
  assertEquals(1,a);
  assertEquals(2,b);
}

function testTryCatchFinally_3() {
  function func() {
  var bar = 1;
    try {
      return bar;
    }
    finally {
      bar = 2;
    }
  };
  assertEquals(1, func());
}

function testTryCatchFinally_4() {
  var bar = 1;
  function func() {
    try {
      return bar;
    }
    finally {
      bar = 2;
    }
  };
  assertEquals(1, func());
  assertEquals(2, bar);
}

function testTryCatchFinallyNested_0() {
  function func() {
    var rv = 1;
    try {
      try {
	rv *= 2;
	throw rv;
      } finally {
	rv /= 2;
      }
    } catch(e) {}
    return rv;
  }
  assertEquals(1, func());
}

function testTryCatchFinallyNested_1() {
  /*
   * Deeply nested try...finally
   */
  var calls = 0;
  var tmp = 0;
  function func() {
    try {
      /*
       * Initially build up the call count
       */
      if (++calls != 10) {
	throw "exception";
      } else {
	func();
      }
    }
    finally {
      /*
       * Then unwind the call count
       */
      --calls;
    }
  }
  try {
    func();
  } catch(e) {
    var captured = [e, calls];
  } finally {
    tmp = 1;
  }
  assertEquals(1, tmp);
  assertArrayEquals(["exception", 0], captured);
}

function testCatchAndRethrow_0() {
  var z = 37;
  try {
    try {
      z *= 2;
      throw "Cookies!";
    } catch(e) {
      z /= 2;
      throw (e+e);
    }
  } catch(e) {
    var captured = [e, z];
  }
  assertArrayEquals(["Cookies!Cookies!", 37], captured);
}

function testCatchandRethrow_1() {
  var captured = false;
  var zappa = 1;
  try {
    try {
      zappa *= 2;
      throw 'Cookies!';
    }
    catch (e) {
      throw (e+e);
    }
    finally {
      zappa /= 2;
      throw 'chicken mcnuggets!';
    }
  }
  catch (e) {
    captured = [ e, 1 ];
  }
  assertArrayEquals(['chicken mcnuggets!', 1], captured);
}

function testTryFinally_0() {
  var foo = "";
  function func() {
    var bar = 1;
    try {
      try {
        return bar;
      }
      finally {
        bar = 2;
        foo += "PA";
      }
      foo = "FAIL";
    }
    finally {
      bar = 3;
      foo += "SS";
    }
    foo = "FAIL";
  };
  assertEquals(1, func());
  assertEquals("PASS", foo);
}

function testTryFinally_1() {
  var foo = "";
  function func() {
    var bar = 1;
    while (true) {
      try {
        try {
          bar = bar << 1;
          break;
        }
        finally {
          bar = bar << 1;
          foo += "PA";
        }
        foo = "FAIL";
      }
      finally {
        bar = bar << 1;
        foo += "SS";
      }
      foo = "FAIL";
    }
    return bar;
  };
  assertEquals(8, func());
  assertEquals("PASS", foo);
}

function testTryFinally_2() {
  var foo = "PASS";
  function func() {
    while(true) {
      try {
        while (true) {
          break;
        }
        return false;
      }
      finally
      {
        return true;
      }
      foo = "FAIL";
    }
  };
  assertEquals(true, func());
  assertEquals("PASS", foo);
}

function testTryFinally_3() {
  var foo = "PASS";
  function func() {
    var b = true;
    while(b) {
      try {
        return false;
      }
      finally
      {
        b = true;
        break;
      }
    }
    return true;
  };
  assertEquals(true, func());
  assertEquals("PASS", foo);
}

function testTryFinally_4() {
  var foo = "";
  function func(b) {
    try {
      try {
        if (b)
          return b;
      }
      finally
      {
        foo += "PA";
      }
      if (!b)
        return;
      foo = "FAIL";
    }
    finally {
      foo += "SS";
    }
    foo = "FAIL";
  };
  assertArrayEquals([true, undefined, "PASSPASS"], [func(true), func(false), foo]);
}

function testTryFinally_5() {
    var last_scope = 0;
    function f()
    {
	try {
	    try {
		try {
		} finally {
		    last_scope = 1;
		}
	    } finally {
	    }
	} finally {
	}
    }
    assertUndefined(f());
    assertEquals(1, last_scope);
}
testTryFinally_5.metadata = {
  bug:"CORE-37556"
};

function testTryFinally_6() {
    var last_scope = 0;
    function f()
    {
	try {
	    try {
		try {
		} finally {
		    last_scope = 1;
		}
	    } finally {
		last_scope = 2;
	    }
	} finally {
	}
    }
    assertUndefined(f());
    assertEquals(2, last_scope);
}
testTryFinally_6.metadata = {
  bug:"CORE-37556"
};

function testTryFinally_7() {
    var last_scope = 0;
    function f()
    {
	try {
	    try {
		try {
		} finally {
		    last_scope = 1;
		    return 1;
		}
	    } finally {
		last_scope = 2;
	    }
	} finally {
	    last_scope = 3;
	}
    }
    assertEquals(1, f());
    assertEquals(3, last_scope);
}
testTryFinally_7.metadata = {
  bug:"CORE-37556"
};

function testTryFinally_8() {
    var last_scope = 0;
    function f()
    {
	try {
	    try {
		try {
		} finally {
		    last_scope = 1;
		    return 1;
		}
	    } finally {
		last_scope = 2;
		return;
	    }
	} finally {
	    last_scope = 3;
	}
    }
    assertUndefined(f());
    assertEquals(3, last_scope);
}
testTryFinally_8.metadata = {
  bug:"CORE-37556"
};

function testTryFinally_9() {
    var last_scope = 0;
    function f()
    {
	try {
	    try {
		try {
		} finally {
		    last_scope = 1;
		    return 1;
		}
	    } finally {
		last_scope = 2;
		return 2;
	    }
	} finally {
	    return;
	}
    }
    assertUndefined(f());
    assertEquals(2, last_scope);
}
testTryFinally_9.metadata = {
  bug:"CORE-37556"
};

function testTryFinally_10() {
    var last_scope = 0;
    function f()
    {
	try {
	    try {
		try {
		} finally {
		    last_scope = 1;
		    return 1;
		}
	    } finally {
	    }
	} finally {
	}
    }
    assertEquals(1, f());
    assertEquals(1, last_scope);
}
testTryFinally_10.metadata = {
  bug:"CORE-37556"
};

function testTryFinally_11() {
    var last_scope = 0;
    function f()
    {
	try {
	    try {
		try {
		    return 2;
		} finally {
		    if (last_scope == -2)
		    {
			last_scope = 1;
			return 1;
		    }
		}
	    } finally {
		last_scope = 2;
	    }
	} finally {
	}
    }
    assertEquals(2, f());
    assertEquals(2, last_scope);
}
testTryFinally_11.metadata = {
  bug:"CORE-37556"
};

function testTryFinally_12() {
    var last_scope = 0;
    function f()
    {
	try {
	    try {
		try {
		    last_scope = 1;
		} finally {
		}
	    } finally {
		last_scope = 2;
	    }
	} finally {
	}
	last_scope = 3;
    }

    assertUndefined(f());
    assertEquals(3, last_scope);
}
testTryFinally_12.metadata = {
  bug:"CORE-37556"
};

function testTryFinally_13() {
    var last_scope = 0;
    function f()
    {
	try {
	    try {
		try {
		    last_scope = 1;
		    return 2;
		} finally {
		    throw 5;
		}
            } catch (e) {
		last_scope = 2;
	    } finally {
		last_scope = 3;
	    }
	} finally {
	}
	last_scope = 4;
    }

    assertUndefined(f());
    assertEquals(4, last_scope);
}
testTryFinally_13.metadata = {
  bug:"CORE-37556"
};

function testTryFinally_14() {
    var x = "fail";
    var a = { a: x, b: x, c: x, d: x, e: x, f: x, g: x };
    var final = false;
    function f(p)
    {
	try {
	    if (p)
		return 10;
	} finally {
	    final = true;
	}
    }
    assertUndefined(f());
    assertTrue(final);
}
testTryFinally_14.metadata = {
  bug:"CORE-37556"
};

function testTryFinallyBreak_0() {
  var x = 0;
  try {
    while (x) {
      if (x > 5) {
	break;
      };
      x++;
      }
    } finally {
      x = 10;
    }
  assertEquals(10, x);
}

function testTryFinallyLabelledBreak_0() {
  var x = 0;
  var y = 0;
  out:
  while (x < 10) {
    try {
      while (y < 10) {
	if (y == 5) {
	  break out;
	}
	y++;
      }
      } finally {
	x = 100;
	y = 1000;
      }
    x++;
  }
  assertArrayEquals([100, 1000], [x,y]);
}

function testTry_0() {
  function func() {
    eval("try {}");
  }
  assertThrows(SyntaxError(), func);
}

function testReturnFromFinally_0() {
  function func() {
    var res = "WRONG";
    try {
      res = "RIGHT";
    }
    catch (e) {
      res = "FAILED";
    }
    finally {
      return res;
    }
    return false;
  }
  assertEquals("RIGHT", func());
}

function testReturnFromFinally_1() {
    function func() {
    var res = "WRONG";
    try {
      res = "WRONG";
      throw "food";
    }
    catch (e) {
      res = "RIGHT";
    }
    finally {
      return res;
    }
    return false;
  }
  assertEquals("RIGHT", func());
}

function testExceptionsInApply_0() {
  var res = "fail";

  function func() {
    throw "exception";
  }

  try {
    func.apply(this);
  } catch(e) {
    res = e;
  }
  assertEquals("exception", res);
}

function testExceptionsInApply_1() {
  var res = "fail";

  function func() {
    throw SyntaxError;
  }

  try {
    func.apply(this);
  } catch(e) {
    res = e;
  }
  assertEquals(SyntaxError, res);
}

function testExceptionsInCall_0() {
  var res = "fail";

  function func() {
    throw "exception";
  }

  try {
    func.call(this);
  } catch(e) {
    res = e;
  }
  assertEquals("exception", res);
}
testExceptionsInCall_0.metadata = {
  bug:"CARAKAN-42"
};

function testReferenceError_0() {
  function func() {
    missingVariable;
  }
  assertThrows(ReferenceError(), func);
}

function testTypeError_0() {
  var x = 1;
  function func() {
    new x();
  }
  assertThrows(TypeError(), func);
}

function testTypeError_1() {
  var x = 1;
  function func() {
    new x;
  }
  assertThrows(TypeError(), func);
}

function testTypeError_2() {
  /*
   * Call to non-function
   */
  function func() {
    var x = 3;
    x();
  }
  assertThrows(TypeError(), func);
}

function testTypeError_3() {
  /*
   * Call to non-function
   */
  function func() {
    var x = new Object();
    x();
  }
  assertThrows(TypeError(), func);
}

function testTypeError_4() {
  function func() {
    var x = 1;
    return String instanceof x;
  }
  assertThrows(TypeError(), func);
}

function testTypeError_5() {
  function func() {
    var x = new Object();
    //Does not implement [[Construct]]
    new x;
  }
  assertThrows(TypeError(), func);
}

function testTypeError_6() {
  function func() {
    var x = new Object();
    String instanceof x;
  }
  assertThrows(TypeError(), func);
}

function testTypeError_7() {
  function func() {
    return "foo" in 1;
  }
  assertThrows(TypeError(), func);
}

function testTypeError_8() {
  function func() {
    var x = new Object();
    x.toString = Function.prototype.toString;
    x.toString();
  }
  assertThrows(TypeError(), func);
}

function testTypeError_9() {
  //function.apply with .this not being a function
  function f(a) {
    assertEquals(1, a());
  };
  f.apply(new Object(), {0:function() {return 1;}, length:1});
}
function testWith_0() {
  var x = {
    e:function() {
      return 1;
    }
  };
  with (x) {
    try {
      throw e;
    } catch(e) {
      assertEquals(1, e());
    }
  }
}

function testWith_1() {
  var global = this;
  var x = {
    e:function() {
      return this;
    }
  };
  with (x) {
    try {
      throw e;
    } catch(e) {
      assertEquals(global, e());
    }
  }
}
testWith_1.metadata = {
  bug:"CARAKAN-381"
};

function testVariablePreservation_0() {
  var a = true;
  try {
    a = b;
  } catch(e) {}
  assertEquals(true, a);
}
testVariablePreservation_0.metadata = {
  bug:"CARAKAN-501"
};
