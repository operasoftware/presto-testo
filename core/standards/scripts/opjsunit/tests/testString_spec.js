function testFunction_0() {
  var x = String();
  assertEquals("", x);
}

function testFunction_1() {
  var x = String("foo");
  assertEquals("foo", x);
}

function testFunction_2() {
  var x = String(undefined);
  assertEquals("undefined", x);
}

function testFunction_3() {
  var x = String(null);
  assertEquals("null", x);
}

function testFunction_4() {
  var x = String(true);
  assertEquals("true", x);
}

function testFunction_5() {
  var x = String(false);
  assertEquals("false", x);
}

function testFunction_6() {
  var x = String(1);
  assertEquals("1", x);
}

function testFunction_7() {
  var x = String(Number.POSITIVE_INFINITY);
  assertEquals("Infinity", x);
}

function testFunction_8() {
  var x = String(-0);
  assertEquals("0", x);
}

function testFunction_9() {
  var x = String(0.0000001);
  assertEquals("1e-7", x);
}

function testFunction_10() {
  var x = new Object();
  x.toString = function () {return "3";};
  assertEquals("3", String(x));
}

function testFunction_11() {
  var x = new Object();
  x.toString = function () {return new Object;};
  x.valueOf = function () {return "2";};
  assertEquals("2", String(x));
}

function testConstructor_0() {
  var x = new String();
  assertTrue(String.prototype.isPrototypeOf(x));
  assertEquals("", x.toString());
}

function testConstructor_1() {
  var x = new String("a");
  assertTrue(String.prototype.isPrototypeOf(x));
  assertEquals("a", x.toString());
}

function testConstructor_2() {
  var x = new String(undefined);
  assertTrue(String.prototype.isPrototypeOf(x));
  assertEquals("undefined", x.toString());
}

function testConstructor_3() {
  var x = new String(null);
  assertTrue(String.prototype.isPrototypeOf(x));
  assertEquals("null", x.toString());
}

function testConstructor_4() {
  var x = new String(true);
  assertTrue(String.prototype.isPrototypeOf(x));
  assertEquals("true", x.toString());
}

function testConstructor_5() {
  var x = new String(false);
  assertTrue(String.prototype.isPrototypeOf(x));
  assertEquals("false", x.toString());
}

function testConstructor_6() {
  var x = new String(1);
  assertTrue(String.prototype.isPrototypeOf(x));
  assertEquals("1", x.toString());
}

function testConstructor_7() {
  var x = new String(Number.POSITIVE_INFINITY);
  assertTrue(String.prototype.isPrototypeOf(x));
  assertEquals("Infinity", x.toString());
}

function testConstructor_8() {
  var x = new String(-0);
  assertTrue(String.prototype.isPrototypeOf(x));
  assertEquals("0", x.toString());
}

function testConstructor_9() {
  var x = new String(0.0000001);
  assertTrue(String.prototype.isPrototypeOf(x));
  assertEquals("1e-7", x.toString());
}

function testConstructor_10() {
  var a = new Object();
  a.toString = function () {return "3";};
  var x = new String(a);
  assertTrue(String.prototype.isPrototypeOf(x));
  assertEquals("3", x.toString());
}

function testConstructor_11() {
  var a = new Object();
  a.toString = function () {return new Object;};
  a.valueOf = function () {return "2";};
  var x = new String(a);
  assertTrue(String.prototype.isPrototypeOf(x));
  assertEquals("2", x.toString());
}

function testConstructor_12() {
  assertEquals(1, String.length);
}

function testPrototype_0() {
  assertTrue(!(delete String.prototype));
}

function testFromCharCode_0() {
  assertEquals("", String.fromCharCode());
}

function testFromCharCode_1() {
  assertEquals("@", String.fromCharCode(0x0040));
}

function testFromCharCode_2() {
  assertEquals("\u305C", String.fromCharCode(0x305C));
}

function testFromCharCode_3() {
  assertEquals("Hello", String.fromCharCode(0x0048, 0x0065, 0x006C,
					    0x006C, 0x006F));
}

function testFromCharCode_4() {
  assertEquals("Hello", String.fromCharCode(0x0048, 0x0065, 0x006C,
					    0x006C, 0x006F));
}

function testFromCharCode_5() {
  var x = String.fromCharCode(0x0079, 0x0308);
  assertEquals(2, x.length);
}

function testFromCharCode_6() {
  var x = String.fromCharCode(0x100025);
  assertEquals("%", x);
}

function testFromCharCode_7() {
  var x = String.fromCharCode(0xD950,  0xDF21);
  assertEquals(2, x.length);
}

function testFromCharCode_8() {
  var x = String.fromCharCode(0xD950);
  assertEquals(1, x.length);
}

function testFromCharCode_9() {
  var x = String.fromCharCode(0xD834, 0xDD1E);
  assertEquals(2, x.length);
}

function testFromCharCode_10() {
  var x = String.fromCharCode(0);
  assertEquals(1, x.length);
}

function testFromCharCode_11() {
  var x = String.fromCharCode(4, 0, 8);
  assertEquals(3, x.length);
}

function testFromCharCodeJIT_1() {
    function f()
    {
       var y = '';
       for (var i = 32; i < 126; i++)
           y += String.fromCharCode(i);
       return y;
    }
    function checkIfSame(xs)
    {
	for (var i = 32; i < 126; i++)
	    assertEquals(i, xs.charCodeAt(i - 32));
    }
    checkIfSame(f());
}
testFromCharCodeJIT_1.metadata = {
  bug:"CORE-41193"
};

function testFromCharCodeJIT_2() {
    function f()
    {
       var y = '';
       for (var i = 32; i < 226; i++)
           y += String.fromCharCode(i < 110 ? i : (-i));
       return y;
    }
    function checkIfSame(xs)
    {
	for (var i = 32; i < 126; i++)
	    assertEquals(i < 110 ? i : (65536 - i), xs.charCodeAt(i - 32));
    }
    checkIfSame(f());
}
testFromCharCodeJIT_2.metadata = {
  bug:"CORE-41193"
};

function testFromCharCodeJIT_3() {
    function f()
    {
       var y = '';
       for (var i = 0; i < 100; i++)
           y += String.fromCharCode(i + 10 + 10 * Math.sin(i));
       return y;
    }
    function checkIfSame(xs)
    {
	for (var i = 0; i < 100; i++)
	    assertEquals((i + 10 + 10 * Math.sin(i)) >> 0, xs.charCodeAt(i));
    }
    checkIfSame(f());
}
testFromCharCodeJIT_3.metadata = {
  bug:"CORE-41193"
};

function testFromCharCodeJIT_4() {
    function f()
    {
       var passed = true;
       for (var i = 0; i < 100; i++)
           passed = passed && String.fromCharCode(127) > String.fromCharCode(i);
       return passed;
    }
    assertTrue(f());
}
testFromCharCodeJIT_4.metadata = {
  bug:"CORE-45057"
};

function testFromCharCodeJIT_5() {
    function f(a, b)
    {
	var y = [];
	for (var i = 0; i < 200; i++)
	    y.push(String.fromCharCode(a, b)[1]);
	return y[y.length - 1];
    }
    assertEquals(String.fromCharCode(49), f(48, 49));
}
testFromCharCodeJIT_5.metadata = {
  bug:"CORE-45193"
};

function testPrototypeConstructor_0() {
  assertEquals(String, String.prototype.constructor);
}
testPrototypeConstructor_0.metadata = {
  bug:"CARAKAN-67"
};

function testToString_0() {
  var x = new String("foo");
  assertEquals("foo", x.toString());
}

function testToString_1() {
  //Method is not generic
  var x = new Object();
  x.toString = String.prototype.toString;
  assertThrows(TypeError(), function() {x.toString();});
}

function testToLocaleString_0() {
  var a = new String("foo");
  assertEquals("foo", a.toLocaleString());
}

function testToLocaleString_1() {
  var a = "foo";
  assertEquals("foo", a.toLocaleString());
}
testToLocaleString_1.metadata = {
  bug:"CARAKAN-406"
};

function testValueOf_0() {
  var x = new String("foo");
  assertEquals("foo", x.valueOf());
}

function testValueOf_1() {
  var x = new Object();
  x.valueOf = String.prototype.valueOf;
  assertThrows(TypeError(), function() {x.valueOf();});
}

function testToString_1() {
  //Method is not generic
  var x = new Object();
  x.valueOf = String.prototype.valueOf;
  assertThrows(TypeError(), function() {x.valueOf();});
}

function testCharAt_0() {
  var x = new String("foa");
  assertEquals("f", x.charAt(0));
}

function testCharAt_1() {
  var x = new String("foo");
  assertEquals("", x.charAt(3));
}

function testCharAt_2() {
  var x = new String("foo");
  assertEquals("", x.charAt(-1));
}

function testCharAt_3() {
  var x = new Number(141);
  x.charAt = String.prototype.charAt;
  assertEquals("4", x.charAt(1));
}

function testCharAt_4() {
  var x = new Boolean(true);
  x.charAt = String.prototype.charAt;
  assertEquals("t", x.charAt(0));
}

function testCharAt_5() {
  var x = new String("abc");
  assertEquals("a", x.charAt(undefined));
}

function testCharAt_6() {
  var x = new String("abc");
  assertEquals("a", x.charAt());
}

function testCharAt_7() {
  var x = new String("abc");
  assertEquals("b", x.charAt(true));
}

function testCharAt_8() {
  var x = new String("abcd");
  assertEquals("d", x.charAt("3.141"));
}

function testCharAt_8() {
  var x = new String("abcd");
  assertEquals("", x.charAt(Number.POSITIVE_INFINITY));
}

function testCharAt_9() {
  var x = new String("abcd");
  var a = new Object();
  a.valueOf = function() {
    return 3;
  };
  assertEquals("d", x.charAt(a));
}

function testCharAt_10() {
  var x = new Object();
  x.toString = function() {return ("abcd");};
  x.charAt = String.prototype.charAt;
  assertEquals("c", x.charAt(2));
}

function testCharAt_11() {
  var x = new String("abc");
  for (var i = 0; i < 100; i++)
    assertEquals("a", x.charAt());
}
testCharAt_11.metadata = {
  bug: "CORE-39488"
};

function testCharCodeAt_0() {
  var x = new String("abc");
  assertEquals(0x0061, x.charCodeAt(0));
}

function testCharCodeAt_1() {
  var x = new String("abc");
  assertNaN(x.charCodeAt(3));
}

function testCharCodeAt_2() {
  var x = new String("abc");
  assertNaN(x.charCodeAt(-1));
}

function testCharCodeAt_3() {
  var x = new String("abc");
  assertNaN(x.charCodeAt(-1));
}

function testCharCodeAt_4() {
  var x = new String("abc");
  for (var i = 0; i < 100; i++)
    assertEquals(0x0061, x.charCodeAt());
}
testCharCodeAt_4.metadata = {
  bug: "CORE-39488"
};

function testCharCodeAt_5() {
  var f = String.prototype.charCodeAt.bind("abc");
  assertEquals(97, f({valueOf: function() {return 0;}}));
  assertNaN(f({valueOf: function() {return 6;}}));
}
testCharCodeAt_5.metadata = {
  bug: "CORE-48068"
};

//XX More tests needed here.

function testBind_0() {
  var f = String.prototype.split.bind("ababa");
  var a = f({toString: function(){ return "b";}});
  assertType("object", a);
  assertEquals(3, a.length);
  assertEquals(a[0], a[1]);
}
testBind_0.metadata = {
  bug: "CORE-48068"
};

//XXX More tests really needed here.

function testConcat_0() {
  assertEquals("ab", String.prototype.concat("ab"));
}

function testConcat_1() {
  //These tests actually assume that the concat object is generic
  assertEquals("", String.prototype.concat());
}

function testConcat_2() {
  assertEquals("abcd", String.prototype.concat("ab", "cd"));
}

function testConcat_3() {
  assertEquals("abcd", String.prototype.concat("ab", "cd"));
}

function testConcat_3() {
  assertEquals("abcd", String.prototype.concat("ab", "cd"));
}

function testConcat_4() {
  var x = new String("ab");
  assertEquals("ab", x.concat());
}


function testConcat_5() {
  var x = new String("ab");
  assertEquals("abcd", x.concat("cd"));
}

function testConcat_6() {
  var x = new String("ab");
  assertEquals("ab1", x.concat(1));
}

function testConcat_6() {
  var x = new String("ab");
  assertEquals("abtrue", x.concat(true));
}

function testConcat_7() {
  var x = new String("ab");
  var y = new Object();
  y.toString = function() {
    return "cd";
  };
  assertEquals("abcd", x.concat(y));
}

function testConcat_8() {
  var x = new String("ab");
  var y = new Object();
  y.toString = function() {
    return "cd";
  };
  assertEquals("abcd", x.concat(y));
}

function testConcat_9() {
  var x = new String("ab");
  assertEquals("abcd", x.concat("c", "d"));
}

function testConcat_9() {
  var x = new String("ab");
  var y = String.fromCharCode(0);
  x = x.concat(y);
  assertEquals(3, x.length);
  assertEquals(String.fromCharCode(0), x.charAt(2));
}

function testConcat_9() {
  var x = new String("ab");
  var y = String.fromCharCode(0);
  var z = new String("cd");
  x = x.concat(y, z);
  assertEquals(5, x.length);
  assertEquals(String.fromCharCode(0), x.charAt(2));
}

function testConcat_10() {
  var x = new Object();
  x.concat = String.prototype.concat;
  x.toString = function () {return "ab";};
  assertEquals("abab", x.concat(x));
}

function testIndexOf_0() {
  assertEquals(1, String("abc").indexOf("b"));
}

function testIndexOf_1() {
  assertEquals(2, String("abac").indexOf("ac"));
}

function testIndexOf_2() {
  assertEquals(1, String("ababab").indexOf("b"));
}

function testIndexOf_3() {
  assertEquals(2, String("ababab").indexOf("a", 2));
}

function testIndexOf_4() {
  assertEquals(3, String("ababab").indexOf("b", 2));
}

function testIndexOf_5() {
  assertEquals(-1, String("ababab").indexOf("abc"));
}

function testIndexOf_6() {
  assertEquals(0, String("ababab").indexOf("a", -2));
}

function testIndexOf_7() {
  assertEquals(-1, String("ababab").indexOf("a", 7));
}

function testIndexOf_8() {
  assertEquals(2, "abc".indexOf("c"));
}

function testIndexOf_9() {
  assertEquals(1, "abb".indexOf("b", NaN));
}

function testIndexOf_10() {
  assertEquals(0, String.fromCharCode(0).indexOf("\u0000"));
}

function testIndexOf_11() {
  assertEquals(2, "ab2cd".indexOf(2));
}

function testIndexOf_12() {
  var x = new Object();
  x.toString = function() {
    return "2";
  };
  assertEquals(2, "ab2cd".indexOf(x));
}

function testIndexOf_13() {
  var x = new Object;
  x.valueOf = function () {
    return 2;
  };
  assertEquals(3, "ababab".indexOf("b", x));
}

function testLastIndexOf_0() {
  assertEquals(1, "abc".lastIndexOf("b"));
}

function testLastIndexOf_1() {
  assertEquals(1, (new String("abc")).lastIndexOf("b"));
}

function testLastIndexOf_2() {
  assertEquals(3, (new String("abab")).lastIndexOf("b"));
}

function testLastIndexOf_3() {
  assertEquals(2, (new String("ababab")).lastIndexOf("a", 2));
}

function testLastIndexOf_4() {
  assertEquals(1, (new String("ababab")).lastIndexOf("b", 2));
}

function testLastIndexOf_5() {
  assertEquals(1, "\u0000\u0000".lastIndexOf(String.fromCharCode(0)));
}

function testLastIndexOf_6() {
  assertEquals(-1, "abab".lastIndexOf("c"));
}

function testLastIndexOf_7() {
  assertEquals(-1, "abab".lastIndexOf("b", 0));
}

function testLastIndexOf_7() {
  assertEquals(3, "abab".lastIndexOf("b", 10));
}

function testLastIndexOf_8() {
  assertEquals(2, "abb".lastIndexOf("b", NaN));
}

function testLastIndexOf_9() {
  assertEquals(3, "2ab2cd".lastIndexOf(2));
}

function testLastIndexOf_10() {
  var x = new Object();
  x.toString = function() {
    return "2";
  };
  assertEquals(2, "ab2cd".lastIndexOf(x));
}

function testLastIndexOf_11() {
  var x = new Object();
  x.valueOf = function() {
    return 2;
  };
  assertEquals(1, "ab2ab".lastIndexOf("b", x));
}

//Almost no spec-testable conditions for localeCompare

function testLocaleCompare_0() {
  //This is not strictly required by the spec...
  assertEquals(0, "abc".localeCompare("abc"));
}

//Add some tests for differet object types converted to string here


/*Everything regexp related will be tested elsewhere*/


function testSlice_0() {
  assertEquals(2, String.prototype.slice.length);
}

function testSlice_1() {
  assertEquals("a", "abc".slice(0,1));
}

function testSlice_2() {
  assertEquals("bc", "abc".slice(1,3));
}

function testSlice_3() {
  assertEquals("bc", "abc".slice(1));
}

function testSlice_4() {
  assertEquals("abc", "abc".slice());
}

function testSlice_5() {
  assertEquals("", "abc".slice(3, 1));
}

function testSlice_6() {
  assertEquals("c", "abc".slice(-1));
}

function testSlice_7() {
  assertEquals("b", (new String("abc").slice(1,2)));
}

function testSlice_8() {
  assertEquals("b", (new String("abc").slice(1,2)));
}

function testSlice_9() {
  assertEquals("b", "abc".slice(-2, -1));
}

function testSlice_10() {
  assertEquals("ab", "abc".slice(-10, -1));
}

function testSlice_11() {
  assertEquals("", "abc".slice(-1, -2));
}

function testSlice_12() {
  assertEquals("b", "abc".slice(-2, 2));
}

function testSlice_12() {
  assertEquals("abc", "abc".slice(-10, 10));
}

function testSlice_13() {
  var x = new Object();
  x.toString = function(){return "abc";};
  x.slice = String.prototype.slice;
  assertEquals("bc", x.slice(-2, 10));
}

function testSlice_14() {
  var x = new Object();
  x.valueOf = function () {
    return 2;
  };
  assertEquals("c", "abc".slice(x));
}

function testSlice_15() {
  var x = new Object();
  x.valueOf = function () {
    return 2;
  };
  assertEquals("bc", "abc".slice("1", "3"));
}

function testSlice_16() {
  var x = new Object();
  x.valueOf = function () {
    return 2;
  };
  assertEquals("bc", "abc".slice("1", Number.POSITIVE_INFINITY));
}

//test split-with-regexp elsewhere

function testSplit_0() {
  assertArrayEquals(["abc"], "abc".split());
}

function testSplit_1() {
  assertArrayEquals(["a", "c"], "abc".split("b"));
}

function testSplit_2() {
  assertArrayEquals(["abc"], "abc".split(undefined));
}

function testSplit_3() {
  // This is not strictly per spec (to treat an undefined arg as splitting
  // with the "undefined" string) but does seem to have the best compat
  // story [2012/01 - *Monkey and IE now follow spec, so switch away
  // from previous and also follow spec.]
  var str = "abcundefinedef";
  assertArrayEquals([str], str.split(undefined));
}
testSplit_3.metadata = {
  bug: "CORE-43926"
};

function testSplit_4() {
  assertArrayEquals(["abcundefinedef"], "abcundefinedef".split());
}

function testSplit_5() {
  assertArrayEquals(["abc", "ef"], "abcnullef".split(null));
}

function testSplit_6() {
  assertArrayEquals(["abc", "ef"], "abctrueef".split(true));
}

function testSplit_7() {
  assertArrayEquals(["abc", "ef"], "abcfalseef".split(false));
}

function testSplit_8() {
  assertArrayEquals(["abc", "ef"], "abc0ef".split(0));
}

function testSplit_9() {
  assertArrayEquals(["abc", "ef"], "abc10ef".split(10));
}

function testSplit_10() {
  assertArrayEquals(["abc", "ef"], "abc10ef".split(1E1));
}

function testSplit_10() {
  assertArrayEquals(["abc", "ef"], "abc16ef".split(0x10));
}

function testSplit_11() {
  assertArrayEquals(["abc", "ef"], "abc8ef".split(010));
}

function testSplit_12() {
  assertArrayEquals(["abc", "ef"], "abc[object Object]ef".split({}));
}

function testSplit_13() {
  var a = {
    toString:function() {
      return "d";
    }
  };
  assertArrayEquals(["abc", "ef"], "abcdef".split(a));
}

function testSplit_14() {
  var a = {
    toString:undefined,
    valueOf:function() {
      return "d";
    }
  };
  assertArrayEquals(["abc", "ef"], "abcdef".split(a));
}

function testSplit_15() {
  assertArrayEquals(["a", "b", "c", "d", "e", "f"], "abcdef".split(""));
}

function testSplit_16() {
  assertArrayEquals(["abc", "def"], "abcNaNdef".split(NaN));
}

function testSplit_17() {
  assertArrayEquals(["abc", "def"], "abcInfinitydef".split(Infinity));
}

function testSplit_18() {
  assertArrayEquals(["abc", "def"],
		    "abc-Infinitydef".split(Number.NEGATIVE_INFINITY));
}

function testSplit_19() {
  assertArrayEquals(["abc", "def"],
		    "abc1e+22def".split(1E22));
}

function testSplit_20() {
  assertArrayEquals(["a", "a", "a"],
		    "ababa".split("b"));
}

function testSplit_21() {
  assertArrayEquals(["a", "a", "a",""],
		    "ababab".split("b"));
}

function testSplit_22() {
  assertArrayEquals(["","a", "a", "a",""],
		    "bababab".split("b"));
}

function testSplit_23() {
  assertArrayEquals(["","a", "", "", "a",""],
		    "babbbab".split("b"));
}

function testSplit_24() {
  assertArrayEquals(["a"],"abab".split("b", 1));
}
testSplit_24.metadata = {
  bug:"CARAKAN-260"
};

function testSplit_25() {
  assertArrayEquals(["a", "a"],"abab".split("b", 2));
}
testSplit_25.metadata = {
  bug:"CARAKAN-260"
};

function testSplit_26() {
  assertArrayEquals(["a", "a"],"abab".split("b", 2));
}
testSplit_26.metadata = {
  bug:"CARAKAN-260"
};

function testSplit_27() {
  assertArrayEquals(["a", "a", ""],"abab".split("b", undefined));
}
testSplit_27.metadata = {
  bug:"CARAKAN-260"
};

function testSplit_28() {
  assertArrayEquals([],"abab".split("b", null));
}
testSplit_28.metadata = {
  bug:"CARAKAN-260"
};

function testSplit_29() {
  assertArrayEquals(["a"],"abab".split("b", true));
}
testSplit_29.metadata = {
  bug:"CARAKAN-260"
};

function testSplit_30() {
  assertArrayEquals([],"abab".split("b", false));
}
testSplit_30.metadata = {
  bug:"CARAKAN-260"
};

function testSplit_31() {
  assertArrayEquals(["a", "a"],"abab".split("b", "2"));
}
testSplit_31.metadata = {
  bug:"CARAKAN-260"
};

function testSplit_32() {
  assertArrayEquals(["a", "a"],"abab".split("b", " \t\n  2"));
}
testSplit_32.metadata = {
  bug:"CARAKAN-260"
};

function testSplit_33() {
  assertArrayEquals(["a", "a"],"abab".split("b", "2 \t\n  "));
}
testSplit_33.metadata = {
  bug:"CARAKAN-260"
};

function testSplit_34() {
  assertArrayEquals(["a", "a", "a", "a", "a", "a", "a", "a", "a", "a"],
		    "abababababababababababababababab".split("b",
							     "  0xA \t\n  "));
}

testSplit_34.metadata = {
  bug:"CARAKAN-260"
};

function testSplit_35() {
  assertArrayEquals(["a", "a", "a", "a", "a", "a", "a", "a", "a", "a"],
		    "abababababababababababababababab".split("b",
							     "1E+1"));
}
testSplit_35.metadata = {
  bug:"CARAKAN-260"
};

function testSplit_36() {
  assertArrayEquals(["a", "a", "a", "a", "a", "a", "a", "a", "a", "a"],
		    "abababababababababababababababab".split("b",
							     10.1));
}
testSplit_36.metadata = {
  bug:"CARAKAN-260"
};

function testSplit_37() {
  assertArrayEquals([], "abc".split(undefined, 0));
}
testSplit_37.metadata = {
  bug:"CARAKAN-356"
};

function testSplit_38() {
  assertArrayEquals([], "abc".split(undefined, null));
}
testSplit_38.metadata = {
  bug:"CARAKAN-356"
};

function testSplit_39() {
  assertArrayEquals([], "abc".split(undefined, Infinity));
}
testSplit_39.metadata = {
  bug:"CARAKAN-356"
};

function testSplit_40() {
  assertArrayEquals([], "abc".split(undefined, -Infinity));
}
testSplit_40.metadata = {
  bug:"CARAKAN-356"
};

function testSplit_41() {
  assertArrayEquals([], "abc".split(undefined, NaN));
}
testSplit_41.metadata = {
  bug:"CARAKAN-356"
};

function testSubstring_0() {
  assertEquals("ab", "abc".substring(0,2));
}

function testSubstring_1() {
  assertEquals("b", "abc".substring(1,2));
}

function testSubstring_2() {
  assertEquals("bc", "abc".substring(1));
}

function testSubstring_3() {
  assertEquals("abc", "abc".substring(-1));
}

function testSubstring_5() {
  assertEquals("b", "abc".substring(2,1));
}

function testSubstring_6() {
  assertEquals("bc", "abc".substring(7,1));
}

function testSubstring_7() {
  assertEquals("ab", "abc".substring(2,-1));
}

function testSubstring_8() {
  assertEquals("c", "abc".substring(2,Number.POSITIVE_INFINITY));
}

function testSubstring_9() {
  assertEquals("bc", (new String("abc")).substring(1));
}

function testSubstring_10() {
  assertEquals("ab", "abc".substring("0", "2"));
}

function testSubstring_10() {
  var x = new Object();
  x.valueOf = function() {
    return 1;
  };
  assertEquals("a", "abc".substring("0", x));
}

function testSubstring_11() {
  var x = new Object();
  x.valueOf = function() {
    return 1;
  };
  assertEquals("a", "abc".substring("0", x));
}

function testSubstring_12() {
  var x = new Object();
  x.toString = function() {
    return "abc";
  };
  x.substring = String.prototype.substring;
  assertEquals("a", x.substring(0, 1));
}

function testSubstring_13() {
  assertEquals(2, String.prototype.substring.length);
}

function testToLowerCase_0() {
  assertEquals("a", "a".toLowerCase());
}

function testToLowerCase_1() {
  assertEquals("a", "A".toLowerCase());
}

function testToLowerCase_2() {
  //SpecialCasings.txt
  assertEquals("\u0069\u0307", "\u0130".toLowerCase());
}
testToLowerCase_2.metadata = {
  bug:"CARAKAN-94"
};

function testToLowerCase_3() {
  //Example special case but only for uppercasing
  assertEquals("\uFB00", "\uFB00".toLowerCase());
}

function testToLowerCase_4() {
  assertEquals("\u2d00", "\u10A0".toLowerCase());
}

/*
 * The spec is unclear on what should happen for greek capital letter
 * sigma at the end of a word under lowercasing. Per unicode it should map to
 * GREEK SMALL LETTER FINAL SIGMA (03A3) rather than 03A2. However one
 * interpretation of "the characters are translated one by one" is that such
 * conditional rules do not apply (another is simply that no normalisation
 * occurs which gives the wrong answer for YPOGEGRAMMENI (0345)).
 *
 * This also applies to several tr,az characters under toLocale*Case
 *
 */

function testToLowerCase_5() {
  assertEquals("abc", "ABC".toLowerCase());
}

function testToLowerCase_6() {
  var a = new String("ABC");
  assertEquals("abc", a.toLowerCase());
}

function testToLowerCase_7() {
  var a = new Object();
  a.toString = function() {
    return "ABC";
  };
  a.toLowerCase = String.prototype.toLowerCase;
  assertEquals("abc", a.toLowerCase());
}

function testToLowerCase_8() {
  var a = new Object();
  a.toString = function() {
    return 1;
  };
  a.toLowerCase = String.prototype.toLowerCase;
  assertEquals("1", a.toLowerCase());
}

function testToUpperCase_0() {
  assertEquals("A", "a".toUpperCase());
}

function testToUpperCase_1() {
  assertEquals("A", "A".toUpperCase());
}

function testToUpperCase_2() {
  assertEquals("\u0053\u0053", "\u00DF".toUpperCase());
}
testToUpperCase_2.metadata = {
  bug:"CARAKAN-94"
};

function testToUpperCase_3() {
  assertEquals("\u0046\u0046\u0049", "\uFB03".toUpperCase());
}
testToUpperCase_3.metadata = {
  bug:"CARAKAN-94"
};


function testToUpperCase_4() {
  assertEquals("\u1F08\u0399", "\u1F80".toUpperCase());
}
testToUpperCase_4.metadata = {
  bug:"CARAKAN-94"
};


function testToUpperCase_5() {
  assertEquals("\u0391\u0342\u0399", "\u1FB7".toUpperCase());
}
testToUpperCase_5.metadata = {
  bug:"CARAKAN-94"
};


function testToUppercase_6() {
  assertEquals("ABC", "abc".toUpperCase());
}

function testToUpperCase_7() {
  var a = new Object();
  a.toString = function() {
    return "abc";
  };
  a.toUpperCase = String.prototype.toUpperCase;
  assertEquals("ABC", a.toUpperCase());
}

function testToUpperCase_8() {
  var a = new Object();
  a.toString = function() {
    return 1;
  };
  a.toUpperCase = String.prototype.toUpperCase;
  assertEquals("1", a.toUpperCase());
}

/*
 * No tests for toLocale*Case because we can't change the host
 * environment's current locale
 */

function testLength_0() {
  var a = new String("abc");
  assertEquals(3, a.length);
}

function testLength_1() {
  var a = new String("abc");
  assertTrue(!(delete a.length));
}

function testLength_2() {
  var a = new String("abc");
  a.length = 4;
  assertEquals(3, a.length);
}

function testLength_3() {
  var a = new String("abc");
  a.length = 2;
  assertEquals(3, a.length);
}

function testLength_4() {
  var a = new String("abc");
  for(var prop in a) {
    if (prop === "length") {
      assertTrue(false);
    }
  }
}

function testLength_5() {
  var a = "abc";
  var b = "length";
  assertEquals(3, a[b]);
}
testLength_5.metadata = {
  "bug":"CARAKAN-375"
};

function testLength_6() {
  var a = new String("abc");
  var b = "length";
  assertEquals(3, a[b]);
}

function testLength_7() {
  var foo = function(getlen) {
    var len = getlen.length;
    if (i & 1)
      assertEquals(1, len);
    else
      assertEquals(undefined, len);
  };

  for (var i = 0; i < 10; i++) {
    if (i & 1)
      foo('a');
    else
      foo(/./);
  }
}
testLength_7.metadata = {
  "bug":"CARAKAN-607"
};

function testSubstr_0() {
  var a = "abc";
  assertEquals("abc", a.substr());
}

function testSubStr_1() {
  var a = "abc";
  assertEquals("abc", a.substr(undefined, undefined));
}

function testSubStr_2() {
  var a = "abc";
  assertEquals("", a.substr(null, null));
}

function testSubStr_3() {
  var a = "abc";
  assertEquals("abc", a.substr(null, undefined));
}

function testSubStr_4() {
  var a = "abc";
  assertEquals("b", a.substr(true, true));
}

function testSubStr_5() {
  var a = "abc";
  assertEquals("bc", a.substr(true));
}

function testSubStr_6() {
  var a = "abc";
  assertEquals("bc", a.substr(true));
}

function testSubStr_7() {
  var a = "abc";
  assertEquals("b", a.substr("1", "1"));
}

function testSubStr_8() {
  var a = "abc";
  assertEquals("c", a.substr("0x2", "1"));
}

function testSubStr_9() {
  var a = "abc";
  assertEquals("ab", a.substr("0", "0x2"));
}

function testSubStr_10() {
  var a = "abc";
  assertEquals("ab", a.substr(0, "  \t\n 0x2   \t\n"));
}

function testSubStr_11() {
  var a = "abc";
  assertEquals("c", a.substr("  \t\n 0x2   \t\n", 1));
}

function testSubStr_12() {
  var a = "abc";
  assertEquals("a", a.substr("aab", 1));
}

function testSubStr_13() {
  var a = "abc";
  assertEquals("", a.substr(1, "ccd"));
}

function testSubStr_14() {
  var a = "abc";
  assertEquals("", a.substr(1, NaN));
}

function testSubStr_15() {
  var a = "abc";
  assertEquals("c", a.substr(-1, 1));
}

function testSubStr_16() {
  var a = "abc";
  assertEquals("", a.substr(1, -1));
}

function testSubStr_17() {
  var a = "abc";
  assertEquals("", a.substr(1, -1));
}

function testSubStr_17b() {
  var a = "abc";
  assertEquals("abc", a.substr(Number.NEGATIVE_INFINITY,
			       Number.POSITIVE_INFINITY));
}

function testGetOwnProperty_0() {
  var a = 'abc';
  assertArrayEquals(['a', 'b', 'c'], [a[0], a[1], a[2]]);
}

function testGetOwnProperty_1() {
  var a = 'abc';
  a[0] = 1;
  assertEquals('abc', a);
  assertEquals("a", a[0]);
}


function testGetOwnProperty_2() {
  var a = '123';
  assertUndefined(a['a']);
}

function testGetOwnProperty_3() {
  var a = '123';
  assertUndefined(a[-1]);
}

function testGetOwnProperty_4() {
  var a = '123';
  assertUndefined(a[3]);
}

function testEnumeration_0() {
  var a = "abc";
  var properties = [];
  for (var p in a) {
    properties.push(p);
  }
  assertArrayEquals(["0","1","2"], properties);
}
testEnumeration_0.metadata = {
  bug:"CARAKAN-332"
};

//Only non-regexp versions of replace go here

function testReplace_0() {
  assertEquals("Zabc", "abc".replace("", "Z"));
}
testReplace_0.metadata = {
  bug:"CARAKAN-210"
};

function testReplace_1() {
  assertEquals("Bbc", "abc".replace("a", "B"));
}

function testReplace_2() {
  assertEquals("aab", "bab".replace("b", "a"));
}

function testReplace_3() {
  assertEquals("bbb", "bab".replace("a", "b"));
}

function testReplace_4() {
  assertEquals("bbb", "ab".replace("a", "bb"));
}

function testReplace_5() {
  function replacer(m, offset, str) {
    assertEquals("b", m);
    assertEquals(1, offset);
    assertEquals("ab", str);
    return str;
  }
  assertEquals("aab", "ab".replace("b", replacer));
}

function testReplace_6() {
  function replacer(m, offset, str) {
    assertEquals("b", m);
    assertEquals(2, offset);
    assertEquals("anber", str);
    return null;
  }
  assertEquals("annuller", "anber".replace("b", replacer));
}

function testReplace_7() {
  //pass conditon is to not crash
  function f() {
    var a = {};

    function rep(b) {
      return a[b];
    }
    return rep;
  }

  var s = "";
  s.replace(/MSEMBED[0-9]+/, f());
}
testReplace_7.metadata = {
  bug:"CARAKAN-812"
};

function testPropertyAccess_0() {
  function f(k) {
    return "abc"[k];
  }
  assertEquals(3, f("length"));
}
testPropertyAccess_0.metadata = {
  bug:"CARAKAN-391"
};

function testPropertyAccess_1() {
  function f(k) {
    return "abc"[k];
  }
  assertEquals("b", f("1"));
}
testPropertyAccess_1.metadata = {
  bug:"CARAKAN-391"
};

function testPropertyAccess_2() {
  var x = 1;
  assertEquals("b", "abc"[x]);
}

function testPropertyAccess_3() {
  this.x = 1;
  assertEquals("b", "abc"[x]);
}

function testPropertyAccess_4() {
  var x = "1";
  assertEquals("b", "abc"[x]);
}

function testPropertyAccess_5() {
  this.x = "1";
  assertEquals("b", "abc"[x]);
}

function testSegmented_0() {
  var a = "qmw";
  a = a.split("").join("");
  a = a.replace("m","mqqm");
  assertEquals("qmqqmw", a);
}
testSegmented_0.metadata = {
  bug:"CARAKAN-567"
};

function testSegmented_1() {
  var c = "abc";
  c = (c.split()).join();
  c = c.substring(1);
  assertEquals("bc", c);
}
testSegmented_1.metadata = {
  bug:"CARAKAN-544"
};

function testSegmented_2() {
  var c = "a";
  c = c + 'b' + "bbbbbbbbbbbbbb" ;
  c = c.substring(0, 3) + 'xxxxxxxxxxxx' + 'x';
  assertEquals("abbxxxxxxxxxxxxx", c);
}
testSegmented_2.metadata = {
  bug:"CARAKAN-544"
};

function testSegmented_3() {
  var c = "Xabc";
  c = c.split("X").join("x");
  c = c.substring(0, 1) + c.substring(2);
  assertEquals("xbc", c);
}
testSegmented_3.metadata = {
  bug:"CARAKAN-544"
};

function testSegmented_4() {
  var a = "qm";
  a = a.split("").join("");
  a = a.substring(1);
  a = a.replace("m","a");
  assertEquals("a", a);
}
testSegmented_4.metadata = {
  bug:"CARAKAN-544"
};

function testSegmented_5() {
  //Pass condition is to not crash
  function strip(str1, delimiter) {
    var messbit = [];
    var beg = -1;
    var end = str1.indexOf(delimiter);
    while (end != -1) {
        messbit.push(str1.substring(beg, end));
        beg = end + 1;
        end = str1.indexOf(delimiter, beg);
        if (end == '')
           return messbit;
    };
    return messbit;
  }
  function displayPage(pageRef) {
    var s = "K~1~1~#~".split('#').join("");
    var itemNo = strip(s, '~');
    unescape(itemNo[3]);
  }
  displayPage();
}
testSegmented_5.metadata = {
  bug:"CARAKAN-978"
};

function testSegmented_6() {
  var a = "0xdaffidaff";
  var b = a.split("i").join("i");
  b = b.replace('i', function (e) { return (e == 'i' ? 'e' : 'E'); });
  assertEquals("0xdaffedaff", b);
}
testSegmented_6.metadata = {
  bug:"CORE-36447"
};

function testSegmentedHash_0() {
  var a = "agfrhgijh";
  var b = a.split("h").join("h");
  var o = new Object();
  for (var i=0; i<100;i++) {
    o[i] = i+1;
  }
  o[a] = "pass";
  assertEquals("pass", o[b]);
}

function testSegmentedAssert_0() {
  //Pass condition is to not assert or crash
  var s = "'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'";
  s.replace(/b/, function () { return ''; });
}
testSegmentedAssert_0.metadata = {
  bug:"CARAKAN-915"
};

function testSearch_0() {
  assertEquals(5, "foo,bar".split(",").join().search("a"));
}

function testSearch_1() {
  assertEquals(0, "".search(""));
}
