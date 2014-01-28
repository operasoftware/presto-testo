function testDefineGetter_0() {
  var a = {};
  a.__defineGetter__('i', function(){return 1;});
  assertEquals(1, a.i);
}

function testDefineGetter_1() {
  var a = {};
  a.__defineGetter__(undefined, function(){return 1;});
  assertEquals(1, a[undefined]);
}
testDefineGetter_1.metadata = {
  bug:"CARAKAN-249"
};

function testDefineGetter_2() {
  var a = {};
  a.__defineGetter__(null, function(){return 1;});
  assertEquals(1, a[null]);
}

function testDefineGetter_3() {
  var a = {};
  a.__defineGetter__(null, function(){return 1;});
  assertEquals(1, a[null]);
}

function testDefineGetter_4() {
  function func() {
    var a = {};
    a.__defineGetter__('a');
  }
  assertThrows(TypeError(), func);
}

function testDefineGetter_5() {
  function func() {
    var a = {};
    a.__defineGetter__();
  }
  assertThrows(TypeError(), func);
}

function testDefineGetter_6() {
  //Infinite loop
  function func() {
    var a = {};
    a.__defineGetter__("i", function() {return a.i;});
    return a.i;
  }
  assertThrows(RangeError(), func);
}

function testDefineGetter_7() {
  //Check for confusion between property cache and getters
  var j=0;
  var a = {};
  a.__defineGetter__('i', function() {return j++;});
  var b = {i:1};
  for(var i=0; i<100; i++) {
    assertEquals(a.i,i);
    assertEquals(b.i, 1);
  }
 }

function testDefineGetter_8() {
  var a = {};
  a.__defineGetter__('b', function() {return 1;});
  function c() {}
  c.prototype = a;
  var d = new c();
  assertEquals(1, d.b);
}

function testDefineGetter_9() {
  var a = {};
  a.__defineGetter__('b', function() {a.__defineGetter__('b', function(){return 1;}); return 0;});
  assertEquals(0, a.b);
  assertEquals(1, a.b);
  assertEquals(1, a.b);
}

function testDefineGetter_10() {
  //Should not raise an error when trying to define a getter on a non-Object
  function func() {
    var x = 42;
    x.__defineGetter__('foo', function f() {return 42;});
  }
  assertDoesNotThrow(func);
}
testDefineGetter_10.metadata = {
  bug:"CARAKAN-253"
};

function testDefineGetter_11() {
  //Should not raise an error when trying to define a getter on a non-Object
  function func() {
    var x = "abc";
    x.__defineGetter__('foo', function f() {return 42;});
  }
  assertDoesNotThrow(func);
}
testDefineGetter_11.metadata = {
  bug:"CARAKAN-253"
};

function testDefineGetter_12() {
  x = 10;

  function f() {
    return x;
  }
  assertEquals(10, f());

  this.__defineGetter__("x", function () {return 20;});
  assertEquals(20, f());
}
testDefineGetter_12.metadata = {
  bug:"CARAKAN-871"
};

function testDefineGetterInfiniteLoop_0() {
  function func() {
    var a = {};
    a.__defineGetter__("i", function() {return a.i;});
    return a.i;
  }
  assertThrows(RangeError(), func);
}
testDefineGetterInfiniteLoop_0.metadata = {
  bug:"CARAKAN-239"
};

function testGetNativePrototype_0() {
  Boolean.prototype.__defineGetter__("this", function() {
				       return this;
				     });
  var a = true;
  assertEquals(a, a["this"].valueOf());
}

function testGetNativePrototype_1() {
  Boolean.prototype.__defineGetter__("this", function() {
				       return this;
				     });
  var a = new Boolean(true);
  assertEquals(a, a["this"]);
}

function testGetNativePrototype_2() {
  Number.prototype.__defineGetter__("this", function() {
				       return this;
				     });
  var a = 1;
  assertEquals(a, a["this"].valueOf());
}

function testGetNativePrototype_3() {
  Number.prototype.__defineGetter__("this", function() {
				       return this;
				     });
  var a = new Number(1);
  assertEquals(a, a["this"]);
}

function testGetNativePrototype_4() {
  String.prototype.__defineGetter__("this", function() {
				       return this;
				     });
  var a = "abc";
  assertEquals(a, a["this"].valueOf());
}

function testGetNativePrototype_5() {
  String.prototype.__defineGetter__("this", function() {
				       return this;
				     });
  var a = new String("abc");
  assertEquals(a, a["this"]);
}

function testGetNativePrototype_6() {
  Object.prototype.__defineGetter__("this", function() {
				       return this;
				     });
  var a = {};
  assertEquals(a, a["this"]);
}

function testGetNativePrototype_6() {
  Object.prototype.__defineGetter__("this", function() {
				       return this;
				     });
  var a = {};
  assertEquals(a, a["this"]);
}

function testGetNativePrototype_7() {
  Object.prototype.__defineGetter__("this", function() {
				       return this;
				     });
  var a = new String("a");
  assertEquals(a, a["this"]);
}

function testLookupGetter_0() {
  var o = {};
  assertUndefined(o.__lookupGetter__('a'));
}
testLookupGetter_0.metadata = {
  bug:"CARAKAN-505"
};

function testLookupGetter_1() {
  var o = {get a() {return 1;}};
  assertEquals(1, o.__lookupGetter__("a")());
}

function testLookupGetter_2() {
  var o = {set a(foo) {this._a =1;}};
  assertUndefined(o.__lookupGetter__("a"));
}

function testLookupGetter_3() {
  var p = {get a() {return 1;}};
  function o(){
  }
  o.prototype = p;
  var i = new o;
  assertEquals(1, i.__lookupGetter__("a")());
};

function testLookupGetter_4() {
  var p = {get a() {return 1;}};
  var f = function() {};
  f.prototype = p;
  var i = new f;
  i.__defineGetter__("a", function() {
		       return 2;
		     });
  assertEquals(2, i.__lookupGetter__("a")());
};

function testLookupSetter_0() {
  var o = {};
  assertUndefined(o.__lookupGetter__('a'));
}
testLookupSetter_0.metadata = {
  bug:"CARAKAN-505"
};

function testLookupSetter_1() {
  var o = {get a() {return 1;}};
  assertUndefined(o.__lookupSetter__("a"));
}

function testLookupSetter_2() {
  var o = {
    _a:0,
    set a(value) {this._a=value;}
  };
  o.__lookupSetter__("a").call(o, 1);
  assertEquals(1, o._a);
}

function testLookupSetter_3() {
  var p = {get a() {return 1;}};
  function o(){
  }
  o.prototype = p;
  var i = new o;
  assertUndefined(i.__lookupSetter__("a"));
}

function testLookupSetter_4() {
  var p = {set a(value) {this._a = value;}};
  var f = function() {};
  f.prototype = p;
  var i = new f;
  i.__defineSetter__("a", function(value) {
		       this._a = 2*value;
		     });
  i.__lookupSetter__("a").call(i, 1);
  assertEquals(2, i._a);
};

function testGetterToString_0() {
  var obj = { get x() { return 37 },
	      set x(v) { return 37 } };
  assertMatches(/get\s+x\s*\(\)\s*{\s*return 37;?\s*}/,
		obj.__lookupGetter__("x"));
}

function testSetterToString_0() {
  var obj = { get x() { return 37 },
	      set x(v) { return 37 } };
  assertMatches(/set\s+x\s*\(\)\s*{\s*return 37;?\s*}/,
		obj.__lookupSetter__("x"));
}
