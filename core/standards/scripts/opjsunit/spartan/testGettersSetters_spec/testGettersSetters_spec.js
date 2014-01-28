/*
 * ES3.1 getters and setters
 */

function testGet_0() {
  //Pass condition is to not crash
  eval("function func() {var a = {get j() {}};}");
}
testGet_0.metadata = {
  bug:"CARAKAN-228"
};

function testGet_1() {
  function func() {
    eval("var o = {i:0,get i() {return 1;}};");
  }
  assertThrows(SyntaxError(), func);

}
testGet_1.metadata = {
  bug:"CARAKAN-230"
};

function testGet_2() {
  var o = {
    _i:1,
    get i() {
      return ++this._i;
    }
  };
  assertEquals(2, o.i);
}

function testGet_3() {
  var o = {
    get i() {}
  };
  assertTrue('i' in o);
}

function testGet_4() {
  //get not magic when not followed by a property name
  var o = {
    get:1
  };
  assertEquals(1, o.get);
}

function testGet_5() {
  function func() {
      eval("var x = {get i() {return 0;}, i:1};");
  }
  assertThrows(SyntaxError(), func);
}
testGet_5.metadata = {

}

function testGet_6() {
  function func() {
    eval("var x = {i:1, get i() {return 0;}};");
  }
  assertThrows(SyntaxError(), func);
}
testGet_6.metadata = {

};


//end of ones that should be checked

function testGet_7() {
  var o = {
    foo:12,
    get bar() {
      return this.foo;
    }
  };
  assertEquals(12, o.bar);
}

function testGet_8() {
  var o = {
    foo:12,
    get 12() {
      return this.foo;
    }
  };
  assertEquals(12, o[12]);
}

function testGet_9() {
  function func() {
      eval("var x = {get i() {return 0;}, get i() {return 1}};");
  }
  assertThrows(SyntaxError(), func);
}

function testGet_10() {
  function func() {
    eval("var o = {get i(value) {}}");
  }
  assertThrows(SyntaxError(), func);
}

function testGetObject_0() {
var o = {
  get value (){
    return {a:5};
  }
};
assertEquals(5, o.value["a"]);
}

function testGetObject_1() {
var o = {
  get value (){
    return {a:function() {return 5;}};
  }
};
assertEquals(5, o.value["a"]());
}
testGetObject_1.metadata = {
  bug:"CARAKAN-419"
};

function testGetObject_2() {
var o = {
  get value (){
    return {get a() {return 5;}};
  }
};
assertEquals(5, o.value["a"]);
}
testGetObject_1.metadata = {
  bug:"CARAKAN-419"
};

function testGetPrimitive_0() {
  Object.defineProperty(String.prototype, "a", {configurable: true,
						get: function(){
						  "use strict";
						  return (typeof this);
						}});
  assertEquals("string", "a".a);
}

function testGetPrimitive_1() {
  Object.defineProperty(String.prototype, "a", {configurable: true,
						get: function(){
						  return (typeof this);
						}});
  assertEquals("object", "a".a);
}

function testGetPrimitive_2() {
  Object.defineProperty(Number.prototype, "a", {configurable: true,
						get: function(){
						  "use strict";
						  return (typeof this);
						}});
  assertEquals("number", (1).a);
}

function testGetPrimitive_3() {
  Object.defineProperty(Number.prototype, "a", {configurable: true,
						get: function(){
						  return (typeof this);
						}});
  assertEquals("object", (1).a);
}

function testGetPrimitive_4() {
  Object.defineProperty(Boolean.prototype, "a", {configurable: true,
						 get: function(){
						   "use strict";
						   return (typeof this);
						 }});
  assertEquals("boolean", true.a);
}

function testGetPrimitive_5() {
  Object.defineProperty(Boolean.prototype, "a", {configurable: true,
						 get: function(){
						   return (typeof this);
						 }});
  assertEquals("object", true.a);
}

function testSet_0() {
  //Pass condition is to not crash
  eval("function func() {var a = {set j() {}};}");
}
testSet_0.metadata = {
  bug:"CARAKAN-228"
};

function testSet_1() {
  function func() {
    eval("var o = {i:0,set i() {return 1;}};");
  }
  assertThrows(SyntaxError(), func);
}

function testSet_2() {
  function func() {
    eval("var o = {set i() {return 1;}, i:0};");
  }
  assertThrows(SyntaxError(), func);
}

function testSet_4() {
  //set not magic when not followed by a property name
  var o = {
    set:1
  };
  assertEquals(1, o.set);
}

function testSet_6() {
  var o = {
    set i(value) {
      this.a = 1;
    }
  };
  assertUndefined(o.i);
  o.i = 1;
  assertEquals(1, o.a);
}

function testSet_7() {
  var o = {
    set a(value) {
      this.b = value;
    },
    set b(value) {
      this.c = value;
    },
    c:0
  };
  o.a = 42;
  assertEquals(42, o.c);
  assertUndefined(o.a);
  assertUndefined(o.b);
}

function testSet_8() {
  var o = {
    set a(foo) {}
  };
  assertTrue(o.hasOwnProperty("a"));
}

function testSet_9() {
  var o = {
    _a:0,
    set a(foo) {
      this._a = 1;
    }
  };
  o.__defineSetter__('a', function() {
		       this._a = 2;
		     });
  o.a = null;
  assertEquals(o._a, 2);
}

function testSet_10() {
  function func() {
      eval("var o = {set i(value) {return 0;}, set i(value) {return 1}};");
  }
  assertThrows(SyntaxError(), func);
}

function testSet_11() {
  function func() {
    eval("var o = {set i(value) {}}");
  }
  assertDoesNotThrow(func);
}

function testSetPrimitive_0() {
  var type;
  Object.defineProperty(String.prototype, "a", {configurable: true,
						set: function(){
						  "use strict";
						  type = typeof this;
						}});
  "a".a = 1;
  assertEquals("string", type);
}

function testSetPrimitive_1() {
  var type;
  Object.defineProperty(String.prototype, "a", {configurable: true,
						set: function(){
						  type = typeof this;
						}});
  "a".a = 1;
  assertEquals("object", type);
}

function testSetPrimitive_2() {
  var type;
  Object.defineProperty(Number.prototype, "a", {configurable: true,
						set: function(){
						  "use strict";
						  type = typeof this;
						}});
  (1).a = 1;
  assertEquals("number", type);
}

function testSetPrimitive_3() {
  var type;
  Object.defineProperty(Number.prototype, "a", {configurable: true,
						set: function(){
						  type = typeof this;
						}});
  (1).a = 1;
  assertEquals("object", type);
}

function testSetPrimitive_4() {
  var type;
  Object.defineProperty(Boolean.prototype, "a", {configurable: true,
						 set: function(){
						   "use strict";
						   type = typeof this;
						 }});
  true.a = 1;
  assertEquals("boolean", type);
}

function testSetPrimitive_5() {
  var type;
  Object.defineProperty(Boolean.prototype, "a", {configurable: true,
						set: function(){
						  type = typeof this;
						}});
  true.a = 1;
  assertEquals("object", type);
}

function testGetset_0() {
  function func() {
    eval("var o = {get i() {}, set i(value) {}}");
  }
  assertDoesNotThrow(func);
}


function testPropertyNames_0() {
  eval("var o = {get 2() {return 1;}};");
  assertEquals(1, o["2"]);
}
testPropertyNames_0.metadata = {
  bug:"CARAKAN-246"
};

function testPropertyNames_1() {
  eval("var o = {get 'abc'() {return 1;}};");
  assertEquals(o["abc"], 1);
}
testPropertyNames_1.metadata = {
  bug:"CARAKAN-246"
};

function testPropertyNames_2() {
  eval("var o = {get 'abc efg'() {return 1;}};");
  assertEquals(1, o["abc efg"]);
}
testPropertyNames_2.metadata = {
  bug:"CARAKAN-246"
};

function testPropertyNames_3() {
  eval("var o = {get 0x10() {return 1;}};");
  assertEquals(1, o[16]);
}
testPropertyNames_3.metadata = {
  bug:"CARAKAN-246"
};

function testPropertyNames_4() {
  eval("var o = {get 010() {return 1;}};");
  assertEquals(1, o[8]);
}
testPropertyNames_4.metadata = {
  bug:"CARAKAN-246"
};

function testPropertyNames_5() {
  eval("var o = {a:1, set 2(value) {this.a = value;}};");
  o["2"] = 2;
  assertEquals(2, o.a);
}
testPropertyNames_5.metadata = {
  bug:"CARAKAN-246"
};

function testPropertyNames_6() {
  eval("var o = {a:1, set 'abc'(value) {this.a = value;}};");
  o["abc"] = 2;
  assertEquals(2, o.a);
}
testPropertyNames_6.metadata = {
  bug:"CARAKAN-246"
};

function testPropertyNames_7() {
  eval("var o = {a:1, set 'abc efg'(value) {this.a = value;}};");
  o["abc efg"] = 2;
  assertEquals(2, o.a);
}
testPropertyNames_7.metadata = {
  bug:"CARAKAN-246"
};

function testPropertyNames_8() {
  eval("var o = {a:1, set 0x10(value) {this.a = value;}};");
  o[16] = 2;
  assertEquals(2, o.a);
}
testPropertyNames_8.metadata = {
  bug:"CARAKAN-246"
};

function testPropertyNames_9() {
  eval("var o = {a:1, set 010(value) {this.a = value;}};");
  o[8] = 2;
  assertEquals(2, o.a);
}
testPropertyNames_9.metadata = {
  bug:"CARAKAN-246"
};

function testPropertyNames_10() {
  eval("var o = {get _() {return 1;}};");
  assertEquals(1, o["_"]);
}

function testPropertyNames_11() {
  eval("var o = {a:1, set _(value) {this.a = value}}");
  o["_"] = 2;
  assertEquals(2, o.a);
}

function testGetReplacement_0() {
  var i = 0;

  var o = {
    get a() {
      if (i >= 100) {
	delete this.a;
	this.a = i;
	return this.a;
      }
      return "A";
    },
    set a(foo) {
      i++;
    }
  };
  for (i=0; i<100; i++) {
    assertEquals("A", o.a);
    o.a = Math.random();
  }
  assertEquals(100, o.a);
}


function testThis_0() {

  function F() {
    this.y = 87;
  }

  // Add a setter for y by changing the prototype of f and make sure
  // that gets called too.
  var result;

  var proto = new Object();
  proto.__defineSetter__('y', function (value) { result = value; });

  var f = new F();
  delete f.y;
  f.__proto__ = proto;

  F.call(f);

  assertEquals(87, result);
  assertTrue(typeof f.y == 'undefined');

}

function testThis_1() {
  function func() {
    this.x = 1;
  }

  var result = 0;

  var o = {
    set x(value) {
      result = value;
    }
  };

  func.call(o);
  assertEquals(1,result);
}

function testCaching_0() {
  var x = new Object();
  x.a = 42;
  var y = new Object();
  y.__defineGetter__('a', function() { return 42; });

  function f(o, p)  {
    assertTrue(o.a == p.a);
  }

  f(x, x);
  f(x, y);
}
testCaching_0.metadata = {
  bug:"CARAKAN-1018"
};

function testCaching_1() {
  var x = new Object();
  x.a = 42;
  var y = new Object();
  y.a = "I'm going to be overwritten soon";
  y.__defineGetter__('a', function() { return 42; });

  function f(o, p) {
    assertTrue(o.a == p.a);
  }

  f(x, x);
  f(x, y);
}
testCaching_1.metadata = {
  bug:"CARAKAN-1018"
};

function testCaching_2() {
  var x = new Object();
  x.before = null;
  x.a = 42;
  x.after = null;
  var y = new Object();
  y.before = null;
  y.a = "I'm going to be overwritten soon";
  y.after = null;
  y.__defineGetter__('a', function() { return 42; });

  function f(o, p) {
    assertTrue(o.a == p.a);
  }

  f(x, x);
  f(x, y);

  assertFalse(!y.hasOwnProperty('before') || !y.hasOwnProperty('after'));
}
testCaching_2.metadata = {
  bug:"CARAKAN-1018"
};

