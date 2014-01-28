function testEquality_0() {
  assertTrue(undefined == undefined);
}

function testEquality_1() {
  var a = {};
  assertTrue(undefined == a.foo);
}

function testEquality_2() {
  assertTrue(null == null);
}

function testEquality_3() {
  assertTrue(!(NaN == NaN));
}

function testEquality_4() {
  assertTrue(!(3 == NaN));
}

function testEquality_5() {
  assertTrue(!(NaN == 3));
}

function testEquality_6() {
  assertTrue(3 == 3);
}

function testEquality_7() {
  assertTrue(3.0 == 3);
}

function testEquality_8() {
  assertTrue(3.0 == 3);
}

function testEquality_9() {
  assertTrue(+0 == -0);
}

function testEquality_10() {
  assertTrue(-0 == +0);
}

function testEquality_11() {
  assertTrue(!(3 == 4));
}

//Need some edge case tests for large numbers, etc.

function testEquality_12() {
  assertTrue("foo" == "foo");
}

function testEquality_13() {
  assertTrue(!("food" == "foo"));
}

function testEquality_14() {
  assertTrue(!("foo " == "foo"));
}

//More evil string tests?

function testEquality_15() {
  assertTrue(true == true);
}

function testEquality_16() {
  assertTrue(false == false);
}

function testEquality_17() {
  assertTrue(!(false == true));
}

function testEquality_18() {
  var a = new Object();
  var b = a;
  assertTrue(a == b);
}

function testEquality_19() {
  var a = new Object();
  var b = new Object();
  assertTrue(!(a == b));
}

function testEquality_20() {
  var a = function () {};
  assertTrue(!(new a() == new a()));
}

function testEquality_21() {
  var a = function () {};
  assertTrue(undefined == null);
}

function testEquality_22() {
  var a = function () {};
  assertTrue(null == undefined);
}

function testEquality_23() {
  assertTrue(3 == "3");
}

function testEquality_24() {
  assertTrue("3" == 3);
}

function testEquality_25() {
  assertTrue(!("30" == 3));
}

function testEquality_26() {
  assertTrue(!("0x30" == 30));
}

function testEquality_27() {
  assertTrue(true == 1);
}

function testEquality_28() {
  assertTrue(false == 0);
}

function testEquality_28() {
  assertTrue(!(true == 2));
}

function testEquality_29() {
  var a = function() {};
  a.prototype.toString = function (){return "1";};
  a.prototype.valueOf = function (){return 2;};
  var b = new a();
  assertTrue(2 == b);
}

function testEquality_30() {
  var a = function() {};
  a.prototype.toString = function (){return "1";};
  a.prototype.valueOf = function (){return 2;};
  var b = new a();
  assertTrue("2" == b);
}

function testEquality_31() {
  var a = function() {};
  a.prototype.toString = function (){return "1";};
  a.prototype.valueOf = function (){return 2;};
  var b = new a();
  assertTrue(!("1" == b));
}

function testEquality_32() {
  var a = function() {};
  a.prototype.toString = function (){return "1";};
  a.prototype.valueOf = function (){return 2;};
  var b = new a();
  assertTrue(!(1 == b));
}

function testEquality_33() {
  assertTrue(1.03 == "1.03");
}
testEquality_33.metadata = {
  bug:"CARAKAN-189"
};

function testEquality_34() {
  assertTrue(1E3 == "1E3");
}
testEquality_34.metadata = {
  bug:"CARAKAN-189"
};

function testEquality_35() {
  assertTrue("0XA" == 10);
}

function testEquality_36() {
  var whitespace_chars = [0x9, 0xA, 0x20, 0xA0, 0xC, 0xB, 0XD, 0x2028, 0x2029,
			  0x1680, 0X180E, 0X2000, 0X2001, 0x2002, 0X2003,
			  0X2004, 0X2005, 0X2006, 0X2007, 0X2008, 0X2009,
			  0X200A, 0X202F, 0X205F, 0X3000];
  for (var i=0; i < whitespace_chars.length; i++) {
    assertTrue(1.3 == String.fromCharCode(whitespace_chars[i]) + "1.3");
  }
}

function testEquality_37() {
  var a = null;
  assertTrue(a == null);
  assertTrue(null == a);
}

function testEquality_38() {
  var a = null;
  var b = null;
  assertTrue(a == b);
}

function testEquality_39() {
  var a = null;
  assertTrue(a == undefined);
  assertTrue(undefined == a);
}

function testEquality_40() {
  var a = null;
  var b = undefined;
  assertTrue(a == b);
  assertTrue(b == a);
}

function testEquality_41() {
  var a = undefined;
  assertTrue(a == null);
  assertTrue(null == a);
}

function testEquality_42() {
  var a = undefined;
  assertTrue(a == undefined);
  assertTrue(undefined == a);
}

function testEquality_43() {
  var a = undefined;
  var b = undefined;
  assertTrue(a == b);
}

function testEquality_43() {
  var valueOf = String.prototype.valueOf;
  delete String.prototype.valueOf;
  //Although String.valueOf is deleted, and ToPrimitive String("3") === "3"
  //we do the comparison "3" == 3 which is true
  assertTrue((new String("3")) == 3);
  String.prototype.valueOf = valueOf;
}

function testEquality_44() {
  var valueOf = String.prototype.valueOf;
  var toString = String.prototype.toString;
  delete String.prototype.valueOf;
  delete String.prototype.toString;
  //If we delete both toString and valueOf on String.prototype, we fall back
  //to the values on Object.prototype and the comparison fails
  assertFalse((new String("3")) == 3);
  String.prototype.valueOf = valueOf;
  String.prototype.toString = toString;
}

function testEquality_45() {
  assertTrue(0.1 == 0.1.toString());
}

function testStrictEquality_0() {
  assertTrue(undefined === undefined);
}

function testStrictEquality_1() {
  assertTrue(null === null);
}

function testStrictEquality_2() {
  assertTrue(!(null === undefined));
}

function testStrictEquality_3() {
  assertTrue(!(null === undefined));
}

function testStrictEquality_4() {
  assertTrue(!(NaN === NaN));
}

function testStrictEquality_5() {
  assertTrue(!(42 === NaN));
}

function testStrictEquality_6() {
  assertTrue(3 === 3);
}

function testStrictEquality_7() {
  assertTrue(+0 === -0);
}

function testStrictEquality_8() {
  assertTrue(-0 === +0);
}

function testStrictEquality_9() {
  assertTrue("bar" === "bar");
}

function testStrictEquality_10() {
  assertTrue(!("bar" === "ba"));
}

function testStrictEquality_11() {
  assertTrue(true === true);
}

function testStrictEquality_12() {
  assertTrue(false === false);
}

function testStrictEquality_13() {
  assertTrue(!(false === true));
}

function testStrictEquality_14() {
  var a = new Object();
  assertTrue(a === a);
}

function testStrictEquality_15() {
  var a = function foo(){};
  assertTrue(a === a);
}

function testStrictEquality_16() {
  var a = function foo(){};
  assertTrue(!(new a() === new a()));
}

function testStrictEquality_17() {
  var a = function() {};
  a.prototype.toString = function (){return "1";};
  a.prototype.valueOf = function (){return 2;};
  var b = new a();
  assertTrue(!("2" === b));
}

function testStrictEquality_18() {
  var a = function() {};
  a.prototype.toString = function (){return "1";};
  a.prototype.valueOf = function (){return 2;};
  var b = new a();
  assertTrue(!("1" === b));
}

function testStrictEquality_19() {
  var a = function() {};
  a.prototype.toString = function (){return "1";};
  a.prototype.valueOf = function (){return 2;};
  var b = new a();
  assertTrue(!(1 === b));
}

function testStrictEquality_20() {
  var a = function() {};
  a.prototype.toString = function (){return "1";};
  a.prototype.valueOf = function (){return 2;};
  var b = new a();
  assertTrue(!(2 === b));
}

function testStrictEquality_21() {
  var a = null;
  assertTrue(a === null);
  assertTrue(null === a);
}

function testStrictEquality_22() {
  var a = null;
  var b = null;
  assertTrue(a === b);
}

function testStrictEquality_23() {
  var a = null;
  assertFalse(a === undefined);
  assertFalse(undefined === a);
}

function testStrictEquality_24() {
  var a = null;
  var b = undefined;
  assertFalse(a === b);
  assertFalse(b === a);
}

function testStrictEquality_25() {
  var a = undefined;
  assertFalse(a === null);
  assertFalse(null === a);
}

function testStrictEquality_26() {
  var a = undefined;
  assertTrue(a === undefined);
  assertTrue(undefined === a);
}

function testStrictEquality_27() {
  var a = undefined;
  var b = undefined;
  assertTrue(a === b);
}

function testStrictEquality_28() {
  function $chk(obj, print) {
    return Boolean(obj === 0);
  }

  $chk({});
  for (var x=100; x>0; x--) {
    assertTrue($chk(-0));
  }
}
testStrictEquality_28.metadata = {
  bug:"CARAKAN-1093"
};

function testStrictEquality_29() {
  function div(a, b) {
    return a / b;
  }
  function cmp(b, a) {
    return a === b;
  }

  /* Make sure the division in div() has ever resulted in a double. */
  div(1, 3);

  /* Let cmp() see something that isn't a number, to avoid purely arithmetic code generation. */
  cmp("foo", "foo");

  for (var i = 0; i < 100; ++i) {
    assertTrue(cmp(1, div(2, 2)));
  }
}
testStrictEquality_29.metadata = {
  bug:"CARAKAN-1093"
};