function testFunction_0() {
  var x = Object();
  assertEquals("object", typeof x);
}

function testFunction_1() {
  var x = Object();
  assertTrue(x instanceof Object);
}

function testFunction_2() {
  var x = Object(3);
  assertTrue(Number.prototype.isPrototypeOf(x));
  assertEquals("3", x.toString());
}

function testFunction_3() {
  var x = Object(true);
  assertTrue(Boolean.prototype.isPrototypeOf(x));
  assertEquals("true", x.toString());
}

function testFunction_4() {
  var x = Object("Hello");
  assertTrue(String.prototype.isPrototypeOf(x));
  assertEquals("Hello", x.toString());
}

function testFunction_5() {
  var a = Object();
  var x = Object(a);
  assertEquals(a, x);
}

function testFunction_6() {
  var x = Object(null);
  assertTrue(Object.prototype.isPrototypeOf(x));
}

function testConstructor_0() {
  var x = new Object();
  assertTrue(Object.prototype.isPrototypeOf(x));
}

function testConstructor_1() {
  var a = new Object();
  var x = new Object(a);
  assertEquals(a, x);
}

function testConstructor_2() {
  var x = new Object(3);
  assertTrue(Number.prototype.isPrototypeOf(x));
  assertEquals(Number(3), x.valueOf());
}

function testConstructor_3() {
  var x = new Object(true);
  assertTrue(Boolean.prototype.isPrototypeOf(x));
  assertEquals("true", x.toString());
}

function testConstructor_0() {
  assertEquals(Object, Object.prototype.constructor);
}

function testPrototypeConstructor_0() {
  assertEquals(Object, Object.prototype.constructor);
}
testPrototypeConstructor_0.metadata = {
  bug:"CARAKAN-67"
};

function testToString_0() {
  assertEquals("[object Object]", Object.prototype.toString());
}

function testToString_1() {
  var foo = {};

  foo._Url = function(){
    var path = "a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a";
    var segs = path.split("/");
    for(var j = 0; j < segs.length; j++);
      };
  foo._Url.prototype.toString = function(){ return "magic"; };

  assertEquals("magic", (new foo._Url()).toString());
}

function testToLocaleString_0() {
  assertEquals(Object.prototype.toString(), Object.prototype.toLocaleString());
}

function testToLocaleString_1() {
  var x = new Object();
  x.toString = function() {return "foo";};
  assertEquals(x.toString(), x.toLocaleString());
}

function testToLocaleString_2() {
  var o = {toString: function() { return 'foo'; }};
  assertEquals(o.toString(), o.toLocaleString());
}
testToLocaleString_2.metadata = {
  bug:"CARAKAN-221"
};

function testToLocaleString_3() {
  var o = {toString: "foo"};
  assertThrows(TypeError(), function() {o.toLocaleString();});
}

function testValueOf_0() {
  var x = new Object();
  assertEquals(x, x.valueOf());
}

function testHasOwnProperty_0() {
  assertTrue(Object.hasOwnProperty("prototype"));
}

function testHasOwnProperty_1() {
  var x = new Object();
  x.foo = "7";
  assertTrue(x.hasOwnProperty("foo"));
}

function testHasOwnProperty_2() {
  var x = new Object();
  assertTrue(!(x.hasOwnProperty("foo")));
}

function testHasOwnProperty_3() {
  var x = new Object();
  assertTrue(!(x.hasOwnProperty("hasOwnProperty")));
}

function testHasOwnProperty_4() {
  var x = new Object();
  x["undefined"] = true;
  assertTrue(x.hasOwnProperty(undefined));
}

function testHasOwnProperty_5() {
  var x = new Object();
  x["null"] = true;
  assertTrue(x.hasOwnProperty(null));
}

function testHasOwnProperty_6() {
  var x = new Object();
  x["x"] = true;
  x.toString = function() {return "x";};
  assertTrue(x.hasOwnProperty(x));
}

function testHasOwnProperty_7() {
  var x = {};
  x[17] = 1;
  assertTrue(x.hasOwnProperty(17));
}
testHasOwnProperty_7.metadata = {
  bug:"CARAKAN-407"
};

function testHasOwnProperty_8() {
  var x = {};
  x["17"] = 1;
  assertTrue(x.hasOwnProperty("17"));
}
testHasOwnProperty_8.metadata = {
  bug:"CARAKAN-407"
};

function testHasOwnProperty_9() {
  var x = {};
  x[17] = 1;
  assertTrue(x.hasOwnProperty("17"));
}
testHasOwnProperty_9.metadata = {
  bug:"CARAKAN-407"
};

function testHasOwnProperty_10() {
  var x = {};
  x["17"] = 1;
  assertTrue(x.hasOwnProperty(17));
}
testHasOwnProperty_10.metadata = {
  bug:"CARAKAN-407"
};

function testHasOwnProperty_11() {
  assertTrue([0,1,2].hasOwnProperty(2));
}

function testHasOwnProperty_12() {
  assertFalse([0,1,2].hasOwnProperty(3));
}

function testHasOwnProperty_13() {
  assertTrue([0,1,2].hasOwnProperty("length"));
}

function testHasOwnProperty_14() {
  assertTrue("abc".hasOwnProperty(2));
}

function testHasOwnProperty_15() {
  assertFalse("abc".hasOwnProperty(3));
}

function testHasOwnProperty_16() {
  assertTrue("abc".hasOwnProperty("length"));
}

function testHasOwnProperty_17() {
  var x = 'length';
  var p = Array.prototype;

  function C() {}
  C.prototype = p;
  var o = new C();
  assertFalse(o.hasOwnProperty(x));
}
testHasOwnProperty_17.metadata = {
  bug: "CT-659"
};

function testHasOwnProperty_18() {
  var x = 'message';
  var p = Error.prototype;

  function C() {}
  C.prototype = p;
  var o = new C();
  assertFalse(o.hasOwnProperty(x));
}
testHasOwnProperty_18.metadata = {
  bug: "CT-659"
};

function testHasOwnProperty_19() {
  var x = 'lastIndex';
  var p = RegExp.prototype;

  function C() {}
  C.prototype = p;
  var o = new C();
  assertFalse(o.hasOwnProperty(x));
}
testHasOwnProperty_19.metadata = {
  bug: "CT-659"
};

function testHasOwnProperty_20() {
  var x = 'length';
  var p = String.prototype;

  function C() {}
  C.prototype = p;
  var o = new C();
  assertFalse(o.hasOwnProperty(x));
}
testHasOwnProperty_20.metadata = {
  bug: "CT-659"
};

function testIsPrototypeOf_0() {
  var x = Object();
  assertTrue(Object.prototype.isPrototypeOf(x));
}

function testIsPrototypeOf_1() {
  function a() {}
  var x = new a;
  assertTrue(a.prototype.isPrototypeOf(x));
}

function testPropertyIsEnumerable_0() {
  var x = new Object();
  assertTrue(!(x.propertyIsEnumerable('prototype')));
}

function testPropertyIsEnumerable_1() {
  var x = new Object();
  x.foo = "bar";
  assertTrue(x.propertyIsEnumerable('foo'));
}

function testPropertyIsEnumerable_2() {
  var x = new Object();
  assertTrue(!(x.propertyIsEnumerable('propertyIsEnumerable')));
}

function testPropertyIsEnumerable_3() {
  var x = new Object();
  x["true"] = "a";
  assertTrue(x.propertyIsEnumerable(true));
}

function testPropertyIsEnumerable_4() {
  var x = new Object();
  x["undefined"] = "a";
  assertTrue(x.propertyIsEnumerable(undefined));
}

function testPropertyIsEnumerable_5() {
  var x = new Object();
  x["null"] = "a";
  assertTrue(x.propertyIsEnumerable(null));
}

function testPropertyIsEnumerable_6() {
  var x = new Object();
  x["x"] = "a";
  x.toString = function () {return "x";};
  assertTrue(x.propertyIsEnumerable(x));
}

function testPropertyIsEnumerable_7() {
  var a = {};
  a.constructor = 42;
  assertTrue(a.propertyIsEnumerable("constructor"));
}
testPropertyIsEnumerable_7.metadata = {
  bug:"CARAKAN-134"
};

function testLiteral_0() {
  var x={ 1:1 };
  assertEquals(1, x[1]);
}
testLiteral_0.metadata = {
  bug:"CARAKAN-44"
};

function testLiteral_1() {
  var v = {p: 1,
	   p: 2};
  assertEquals(2, v["p"]);
}
testLiteral_1.metadata = {
  bug:"CARAKAN-246"
};

function testLiteral_2() {
  var passed = 'pass';
  var obj = { a: passed, b: (passed = 'fail', passed == 'fail')};
  assertEquals('fail', passed);
  assertEquals('pass', obj.a);
  assertTrue(obj.b);
}
testLiteral_2.metadata = {
  bug:"CORE-37125"
};

function testLiteral_3() {
  var v = [{}, null];

  function f(v) {
    return { x : v };
  }

  for (var i = 0; i < 100; ++i) {
    var ix = Math.floor(i / 40) % 2;
    assertEquals(v[ix], f(v[ix]).x);
  }
 }
testLiteral_3.metadata = {
  bug: "CT-1186"
};

function testLiteral_4() {
  var x = { 1.1:1, 1.1: 2 };
  assertEquals(2, x[1.1]);
}
testLiteral_4.metadata = {
  bug:"CORE-46988"
};

function testLiteral_5() {
  var x = { 1243041556911: false, 1243041556911: true };
  assertTrue(x[1243041556911]);
}
testLiteral_5.metadata = {
  bug:"CORE-46988"
};

function testPropertiesValueOf_0() {
  var a = {
    foo:9,
    valueOf:8
  };
  var b = {
    foo:7
  };
  var a_props = [];
  var b_props = [];
  for (var p in a) {
    a_props.push(p);
  }
  for (p in b) {
    b_props.push(p);
  }
  assertArrayEquals(["foo", "valueOf"], a_props);
  assertArrayEquals(["foo"], b_props);
}
testPropertiesValueOf_0.metadata = {
  bug:"CARAKAN-139"
};

function testDeleteProperties_0() {
  var obj = { '0': 0, '1': 1, 'ja': 'ja', 'nei': 'nei' };
  delete obj[0];
  delete obj['1'];
  delete obj.nei;
  delete obj['ja'];
  var props = [];
  for(var p in obj) {
    props.push(p);
  }
  assertArrayEquals([], props);
}
testDeleteProperties_0.metadata = {
  bug:"CARAKAN-409"
};

function testDeleteProperties_1() {
  var obj = {'ja': 'ja', 'nei': 'nei' };
  delete obj.nei;
  delete obj['ja'];
  var props = [];
  for(var p in obj) {
    props.push(p);
  }
  assertArrayEquals([], props);
}

function testPropertyRegression_0() {
  function t(o){
    return o.x;
  }
  var x='x',a={},b={}; b[x]=1;
  assertUndefined(t(a));
  assertEquals(1, t(b));
}

function testPropertyRegression_1() {
  function t(o) {
     o.x=2;
  }
  var x='x',a={},b={};
  b[x]=1;
  t(a);
  assertEquals(2, a.x);
  t(b);
  assertEquals(2, b.x);
}

function testPropertyRegression_2() {
  var w = this;
  w = w['foo'] = {};
  assertDefined(this.foo);
}
testPropertyRegression_2.metadata = {
  bug:"CARAKAN-510"
};

function testPropertyRegression_3() {
  var toString = "toString";

  function cacher(f, postprocessor) {
    return function newf() {
      var arg = Array.prototype.slice.call(arguments);
      newf.cache = {};
      return postprocessor(newf.cache[arg.valueOf()]);
    };
  }

  function pathClone() {
    var res = [[]];
    res[toString] = function() {
      this.join(",");
    };
    return res;
  };

  var pathToAbsolute = cacher(function() {}, pathClone);
  assertDoesNotThrow(function(){String(pathToAbsolute());});
}
testPropertyRegression_3.metadata = {
  bug:"CARAKAN-1035"
};

function testPropertyRegression_4() {
  var toString = "toString";
  var _path2string = function() {
    this.join(",");
  };
  function cacher(f, postprocessor) {
    function newf() {
      var arg = arguments[0];
      newf.cache = {};
      newf.cache[arg] = f(arg);
      return postprocessor(newf.cache[arg]);
    }
    return newf;
  }
  var pathClone = function(pathArray) {
    var res = [[]];
    res[toString] = _path2string;
    return res;
  };
  var pathToAbsolute = cacher(function(pathArray) {}, pathClone);

  var Element = function(svg) {
    this.attrs = {};
    this.translate = function() {
      pathToAbsolute(this.attrs.path);
    };
  };

  var Paper = function() {
    this.path = function(pathString) {
      var p = new Element(this);
      p.attrs.path = pathToAbsolute(pathString);
      String(p.attrs.path);
      return p;
    };
  };

  var canvas = new Paper();
  assertDoesNotThrow(function() {canvas.path().translate();});
}
testPropertyRegression_4.metadata = {
  bug:"CARAKAN-1035"
};

function testPropertyRegression_5() {
  function C() {}
  C.prototype.x = "FAIL";

  var oy = new C();
  oy[String.fromCharCode("y".charCodeAt(0))] = "PASS";
  var ox = new C();
  ox[String.fromCharCode("x".charCodeAt(0))] = "PASS";

  function func(o) { return o.x; }

  func(oy);

  for (var i = 0; i < 100; ++i) {
    func({ a: 0, x: 10 });
    func({ b: 0, x: 10 });
  }

  assertEquals("PASS", func(ox));
}
testPropertyRegression_5.metadata = {
  bug:"CARAKAN-1250"
};

function testPropertyRegression_6() {
  var str = "aa";
  assertEquals(str['leng'+'th'], str['leng'+'th']);
}
testPropertyRegression_6.metadata = {
  bug:"CORE-43597"
};

function testSyntaxRegression_0() {
  var a = {b:2};
  eval("(a.b)&=0;");
  assertEquals(0, a.b);
}
testSyntaxRegression_0.metadata = {
  bug:"CARAKAN-614"
};

function testPropertyLength_0() {
  function f(o) { return o.length; }
  for (var i = 0; i < 100; ++i) {
    f({ length: 10 });
    f(true); // crash here once f has been JIT:ed
  }
}

function testEnumeration_0() {
  for (var i = 0; i < 1000; ++i) {
    for (var n in this) {
      if (n == arguments.callee.name) {
	assertEquals(arguments.callee, this[n]);
      }
    }
  }
}

function testEnumeration_1() {
  var o = { get x() { return 10; } };

  for (var i = 0; i < 1000; ++i) {
    for (var n in o) {
      assertEquals(10, o[n]);
    }
  }
}

function testEnumeration_2() {
  var tests = [ "a", "b", "c", "d"];
  var tt = [];
  for (var i = 0; i < tests.length; i++)
    tt[tests[i]] = i;

  var a = [];
  for (var test in tt)
    a.push(tt[test]);

  // This loses 'c' in the next enumeration.
  tt['a'] = tt.a;
  tt['b'] = tt.b;

  var b = [];
  for (var test in tt)
    b.push(tt[test]);

  assertArrayEquals(a, b);
}
testEnumeration_2.metadata = {
  bug: "CT-999"
};

function testEnumeration_3() {
  var o = { x : 3.14 };
  for (var i = 0; i < 100; ++i) {
    for (var p in o) {
      if (i != 99) {
	o[p] = 3.14;
      } else {
	o[p] = 3;
      }
    }
  }

  for (var p in o) {
    assertEquals(3, o[p]);
  }
}
testEnumeration_3.metadata = {
  bug: "CT-571"
};
