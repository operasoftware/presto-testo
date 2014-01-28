function testWith_0() {
  var a = new Object();
  a.b = 1;
  with(a) {
    assertEquals(1, b);
  }
}

function testWith_1() {
  var a = 1;
  with(a) {
    assertEquals(1, valueOf());
  }
}

function testWith_2() {
  var a = "foo";
  with(a) {
    assertEquals("foo", valueOf());
  }
}

function testWith_3() {
  with(true) {
    assertEquals(true, valueOf());
  }
}

function testWith_4() {
  function func() {
    with(undefined) {
      assertTrue(false); //we should never make it here
    }
  }
  assertThrows(TypeError(), func);
}

function testWith_5() {
  function func() {
    with(null) {
      assertTrue(false); //we should never make it here
    }
  }
  assertThrows(TypeError(), func);
}

function testWith_6() {

  function func() {
    with(Object) {
      throw "Exception";
    }
  }
  assertThrows("Exception", func);
}

function testWith_7() {
  assertEquals(undefined, b);
  with (Object) {
    var b = 1;
  }

  assertEquals(1, b);
}

function testWith_8() {
  function func() {return 1;}
  function other() {return 2;}
  var a = new Object();
  a.func = other;

  assertEquals(1,func());
  with(a) {
    assertEquals(2, func());
  }
  assertEquals(1,func());
}

function testWith_9() {
  function func() {return 1;}
  function other() {return 2;}
  var a = new Object();
  a.func = other;

  assertEquals(1,func());
  try {
    with(a) {
      assertEquals(2, func());
      throw "Exception";
    }
    } catch (e) {
	assertEquals(1,func());
    }
}

function testWith_10() {
  function foo() {return 2;};
  var a = new Object();
  a.foo = function() {
    return 1;
  };
  label:
    with(a) {
      assertEquals(1, foo());
      break label;
      assertTrue(false);
    }
  assertEquals(2,foo());
}

function testWith_11() {
  with(1) {
    assertEquals(1, valueOf());
  }
}
testWith_11.metadata = {
  bug:"CARAKAN-62"
};

function testWith_12() {
  var a = {
    b:1
  };
  var b = 2;

  try {
    with(a) {
      b = 3;
      throw Error();
    }
  } catch(e) {}

  assertEquals(2,b);
}

function testWith_13() {
  var a = {
    b:1
  };
  var b = 2;
  with(a) {
    delete b;
  }
  assertEquals(2,b);
  assertUndefined(a.b);
}

function testWith_14() {
  //shouldn't be able to delete a here anyway
  //but it's a useful sanity check
  var a = {
    b:1
  };
  with (a) {
    with (this) {
      delete a;
    }
    assertEquals(b, 1);
  }
}

function testWith_15() {
  //Variables created in eval don't have DontDelete set
  function func() {
    eval("a = {b:1}; with (a){with(this) {delete a}; b}");
  }
  assertDoesNotThrow(func);
}

function testWith_16() {
  //Variables created in eval don't have DontDelete set
  function func() {
    eval("a = {b:1}; with (a){with(this) {delete a}; b}; a");
  }
  assertThrows(ReferenceError(), func);
}

function testWith_17() {
  //pass condition is to not crash
  var i = 0;
  with(1){i;}
}
testWith_17.metadata = {
  bug:"CARAKAN-128"
};

function testWith_18() {
  var obj = { value: 3 };
  with (obj) {
    var x = eval("value");
  }
  assertEquals(3, x);
}
testWith_18.metadata = {
  bug:"CARAKAN-148"
};


function testWith_19() {
  var obj = {
    eval:"3"
  };

  with (this) {
    with (obj) {
      var x = eval;
    }
  }
  assertEquals("3", x);
}
testWith_19.metadata = {
  bug:"CARAKAN-140"
};

function testWith_20() {
  with({a:"b"}) {
    assertEquals("b", eval("a"));
  }
}
testWith_20.metadata = {
  bug:"CARAKAN-182"
};

function testWith_21() {
  var obj = {a:2};
  var a = 1;
  with(obj) {
    var f = function () {
      return a;
    };
    assertEquals(2, f());
  }
}
testWith_21.metadata = {
  bug:"CARAKAN-219"
};

function testWith_22() {
  var a = 1;
  var obj = {a:2};
  with (obj) {
    var f = function() {
      assertEquals(2, a);
    };
    f();
  }
}

function testWith_23() {
  var a = 1;
  var obj = {a:2};
  function func() {
    assertEquals(1,a);
  }
  with(obj) {
    func();
  }
}

function testWith_24() {
  var a = 1;
  var obj = {a:2};
  with (obj) {
    eval("var f = function() {assertEquals(2, a);};");
    f();
  }
}

function testWith_25() {
  var a = 1;
  var obj = {a:2};
  with(obj) {
    var f = function() {return a;};
  }
  assertFalse(delete obj); //This doesn't do anything because obj is don't delete
  assertEquals(2, f());
}

function testWith_26() {
  a = 1;
  obj = {a:2};
  with(obj) {
    f = function() {return a;};
  }
  assertTrue(delete obj);
  assertEquals(2, f());
}

function testWith_27() {
  var g = this;
  function f() {
    var o = {};
    var x = function() {
      assertEquals(g, this);
    };
    with (o) {
      x();
    }
  };
  f();
}

function testWith_28() {
  var str = "abc";
  var a;
  with(str){
    a = function(){return substring(0);}();
  }
  assertEquals("abc", a);
}

function testWith_29() {
  var o = {};
  var count = 0;
  with(o) {
    o.main = function() {
      o.data = "pass";
      function draw() {
	assertEquals("pass", data);
	count++;
      }
      draw();
    };
  }
  o.main();
  assertEquals(1, count);
}
testWith_29.metadata = {

};

function testWith_30() {
  var count = 0;

  var foo = function () {
    this.bar = function() {
      count++;
    }
    eval('with(this){[1].forEach(function(){bar();});}');
  }

  tc = new foo();
  assertEquals(1, count);
}

function testWith_31() {
  //pass condition is to not crash
  function f(){
    var res = new String();
    for(var i = 0; i < 1; i++) {
      with ({}) {
	res += "";
      }
    }
    write(res);
  }
  for (var i = 0; i < 50; i++) {
    f();
  }
}
testWith_31.metadata = {
  bug:"CARAKAN-1063"
};

function testWith_32() {
    function func() {
      var x = false;
      with ({}) {
	x += 1;
      }
      return x;
    }
  for (var i=0; i<50; i++) {
    assertEquals(1, func());
  }
}
testWith_32.metadata = {
  bug:"CARAKAN-1063"
}

function testWithSetProperty_0() {
  var x = { f:0, g:0 };
  with (x) {
    f = 1;
  }
  assertEquals(1, x.f);
}

function testWithSetProperty_1() {
  var x = { f:0, g:0 };
  with (x) {
    var f = 1;
  }
  assertEquals(1, x.f);
}

function testWithSetProperty_2() {
  var x = { f:0, g:0 };
  with (x) {
    function f() {}
  }
  assertEquals(0, x.f);
}

function testWithSetProperty_3() {
  var x = { f:0, g:0 };
  with (x) {
    var g = function () {return 1;};
  }
  assertEquals(0, x.f);
  assertEquals("function", typeof x.g);
  assertEquals(1,x.g());
}

function testWithSetProperty_4() {
  var x = { f:0, g:0 };
  with (x) {
    g = function () {return 1;};
  }
  assertEquals(0, x.f);
  assertEquals("function", typeof x.g);
  assertEquals(1,x.g());
}

function testWithSetProperty_5() {
  var f = 2;
  var x = {f:0};
  with (x) {
    var f = 1;
  }
  assertEquals(2,f);
  assertEquals(1, x.f);
}

function testWithSetProperty_6() {
  var x = {f:0};
  var f = 1;
  function func() {
    with (x) {
      var f = 2;
      assertEquals(2, f);
    }
    assertUndefined(f);
  }
  func();
  assertEquals(1, f);
  assertEquals(2, x.f);
}

function testWithSetProperty_7() {
  var x = {f:0};
  function func() {
    with (x) {
      var g = 1;
      assertEquals(1,g);
    }
    assertEquals(1,g);
    assertUndefined(x.g);
  }
}

function testWithSetProperty_8() {
  var x = {f:0};
  function func() {
    with (x) {
      g = 1;
      assertEquals(1,g);
    }
    assertEquals(1,g);
    assertUndefined(x.g);
  }
}
