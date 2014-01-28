function testInequality_0() {
  assertFalse(undefined != undefined);
}

function testInequality_1() {
  var a = {};
  assertFalse(undefined != a.foo);
}

function testInequality_2() {
  assertFalse(null != null);
}

function testInequality_3() {
  assertTrue(NaN != NaN);
}

function testInequality_4() {
  assertTrue(3 != NaN);
}

function testInequality_5() {
  assertTrue(NaN != 3);
}

function testInequality_6() {
  assertFalse(3 != 3);
}

function testInequality_7() {
  assertFalse(3.0 != 3);
}

function testInequality_8() {
  assertFalse(3.0 != 3);
}

function testInequality_9() {
  assertFalse(+0 != -0);
}

function testInequality_10() {
  assertFalse(-0 != +0);
}

function testInequality_11() {
  assertTrue(3 != 4);
}

//Need some edge case tests for large numbers, etc.

function testInequality_12() {
  assertFalse("foo" != "foo");
}

function testInequality_13() {
  assertTrue("food" != "foo");
}

function testInequality_14() {
  assertTrue("foo " != "foo");
}

//More evil string tests?

function testInequality_15() {
  assertFalse(true != true);
}

function testInequality_16() {
  assertFalse(false != false);
}

function testInequality_17() {
  assertTrue(false != true);
}

function testInequality_18() {
  var a = new Object();
  var b = a;
  assertFalse(a != b);
}

function testInequality_19() {
  var a = new Object();
  var b = new Object();
  assertTrue(a != b);
}

function testInequality_20() {
  var a = function () {};
  assertTrue(new a() != new a());
}

function testInequality_21() {
  var a = function () {};
  assertFalse(undefined != null);
}

function testInequality_22() {
  var a = function () {};
  assertFalse(null != undefined);
}

function testInequality_23() {
  assertFalse(3 != "3");
}

function testInequality_24() {
  assertFalse("3" != 3);
}

function testInequality_25() {
  assertTrue("30" != 3);
}

function testInequality_26() {
  assertTrue("0x30" != 30);
}

function testInequality_27() {
  assertFalse(true != 1);
}

function testInequality_28() {
  assertFalse(false != 0);
}

function testInequality_28() {
  assertTrue(true != 2);
}

function testInequality_29() {
  var a = function() {};
  a.prototype.toString = function (){return "1";};
  a.prototype.valueOf = function (){return 2;};
  var b = new a();
  assertFalse(2 != b);
}

function testInequality_30() {
  var a = function() {};
  a.prototype.toString = function (){return "1";};
  a.prototype.valueOf = function (){return 2;};
  var b = new a();
  assertFalse("2" != b);
}

function testInequality_31() {
  var a = function() {};
  a.prototype.toString = function (){return "1";};
  a.prototype.valueOf = function (){return 2;};
  var b = new a();
  assertTrue("1" != b);
}

function testInequality_32() {
  var a = function() {};
  a.prototype.toString = function (){return "1";};
  a.prototype.valueOf = function (){return 2;};
  var b = new a();
  assertTrue(1 != b);
}

function testInequality_33() {
  assertFalse(1.03 != "1.03");
}
testInequality_33.metadata = {
  bug:"CARAKAN-189"
};

function testInequality_34() {
  assertFalse(1E3 != "1E3");
}
testInequality_34.metadata = {
  bug:"CARAKAN-189"
};

function testInequality_35() {
  assertFalse("0XA" != 10);
}

function testInequality_36() {
  var whitespace_chars = [0x9, 0xA, 0x20, 0xA0, 0xC, 0xB, 0XD, 0x2028, 0x2029,
			  0x1680, 0X180E, 0X2000, 0X2001, 0x2002, 0X2003,
			  0X2004, 0X2005, 0X2006, 0X2007, 0X2008, 0X2009,
			  0X200A, 0X202F, 0X205F, 0X3000];
  for (var i=0; i < whitespace_chars.length; i++) {
    assertFalse(1.3 != String.fromCharCode(whitespace_chars[i]) + "1.3");
  }
}

function testInequality_37() {
  var a = null;
  assertFalse(a != null);
  assertFalse(null != a);
}

function testInequality_38() {
  var a = null;
  var b = null;
  assertFalse(a != b);
}

function testInequality_39() {
  var a = null;
  assertFalse(a != undefined);
  assertFalse(undefined != a);
}

function testInequality_40() {
  var a = null;
  var b = undefined;
  assertFalse(a != b);
  assertFalse(b != a);
}

function testInequality_41() {
  var a = undefined;
  assertFalse(a != null);
  assertFalse(null != a);
}

function testInequality_42() {
  var a = undefined;
  assertFalse(a != undefined);
  assertFalse(undefined != a);
}

function testInequality_43() {
  var a = undefined;
  var b = undefined;
  assertFalse(a != b);
}

function testStrictInequality_0() {
  assertFalse(undefined !== undefined);
}

function testStrictInequality_1() {
  assertFalse(null !== null);
}

function testStrictInequality_2() {
  assertTrue(null !== undefined);
}

function testStrictInequality_3() {
  assertTrue(null !== undefined);
}

function testStrictInequality_4() {
  assertTrue(NaN !== NaN);
}

function testStrictInequality_5() {
  assertTrue(42 !== NaN);
}

function testStrictInequality_6() {
  assertFalse(3 !== 3);
}

function testStrictInequality_7() {
  assertFalse(+0 !== -0);
}

function testStrictInequality_8() {
  assertFalse(-0 !== +0);
}

function testStrictInequality_9() {
  assertFalse("bar" !== "bar");
}

function testStrictInequality_10() {
  assertTrue("bar" !== "ba");
}

function testStrictInequality_11() {
  assertFalse(true !== true);
}

function testStrictInequality_12() {
  assertFalse(false !== false);
}

function testStrictInequality_13() {
  assertTrue(false !== true);
}

function testStrictInequality_14() {
  var a = new Object();
  assertFalse(a !== a);
}

function testStrictInequality_15() {
  var a = function foo(){};
  assertFalse(a !== a);
}

function testStrictInequality_16() {
  var a = function foo(){};
  assertTrue(new a() !== new a());
}

function testStrictInequality_17() {
  var a = function() {};
  a.prototype.toString = function (){return "1";};
  a.prototype.valueOf = function (){return 2;};
  var b = new a();
  assertTrue("2" !== b);
}

function testStrictInequality_18() {
  var a = function() {};
  a.prototype.toString = function (){return "1";};
  a.prototype.valueOf = function (){return 2;};
  var b = new a();
  assertTrue("1" !== b);
}

function testStrictInequality_19() {
  var a = function() {};
  a.prototype.toString = function (){return "1";};
  a.prototype.valueOf = function (){return 2;};
  var b = new a();
  assertTrue(1 !== b);
}

function testStrictInequality_20() {
  var a = function() {};
  a.prototype.toString = function (){return "1";};
  a.prototype.valueOf = function (){return 2;};
  var b = new a();
  assertTrue(2 !== b);
}

function testStrictInequality_21() {
  var a = null;
  assertFalse(a !== null);
  assertFalse(null !== a);
}

function testStrictInequality_22() {
  var a = null;
  var b = null;
  assertFalse(a !== b);
}

function testStrictInequality_23() {
  var a = null;
  assertTrue(a !== undefined);
  assertTrue(undefined !== a);
}

function testStrictInequality_24() {
  var a = null;
  var b = undefined;
  assertTrue(a !== b);
  assertTrue(b !== a);
}

function testStrictInequality_25() {
  var a = undefined;
  assertTrue(a !== null);
  assertTrue(null !== a);
}

function testStrictInequality_26() {
  var a = undefined;
  assertFalse(a !== undefined);
  assertFalse(undefined !== a);
}

function testStrictInequality_27() {
  var a = undefined;
  var b = undefined;
  assertFalse(a !== b);
}