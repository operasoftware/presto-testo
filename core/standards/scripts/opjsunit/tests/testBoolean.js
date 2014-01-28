//casts

function testCast_0() {
  assertEquals(false, Boolean(undefined));
}

function testCast_1() {
  assertEquals(false, Boolean(null));
}

function testCast_2() {
  assertEquals(true, Boolean(true));
}

function testCast_3() {
  assertEquals(false, Boolean(false));
}

function testCast_4() {
  assertEquals(false, Boolean(0.0));
}

function testCast_5() {
  assertEquals(false, Boolean(-0.0));
}

function testCast_6() {
  assertEquals(false, Boolean(NaN));
}

function testCast_7() {
  assertEquals(true, Boolean(42));
}

function testCast_8() {
  assertEquals(false, Boolean(""));
}

function testCast_9() {
  assertEquals(true, Boolean("x"));
}

function testCast_10() {
  assertEquals(true, Boolean(Boolean));
}

//length

function testLength_0() {
  assertEquals(1, Boolean.length);
}

//valueOf

function testPrototypeValueOf_0() {
  assertEquals(false, Boolean.prototype.valueOf());
}

function testValueOf_0() {
  var x = new Boolean(true);
  assertEquals(true, x.valueOf());
}

function testValueOf_1() {
  var x = new Boolean(false);
  assertEquals(false, x.valueOf());
}

//properties

function testProperties_0() {
  assertDefined(Boolean.prototype.constructor);
}

function testProperties_1() {
  assertDefined(Boolean.prototype.toString);
}

function testProperties_2() {
  assertDefined(Boolean.prototype.valueOf);
}

//Constructor

function testConstructor_0() {
  var x = new Boolean(true);
  assertTrue(x instanceof Boolean);
}

function testPrototypeConstructor_0() {
  assertEquals(Boolean, Boolean.prototype.constructor);
}
testPrototypeConstructor_0.metadata = {
  bug:"CARAKAN-67"
};

function testPrototypeDelete_0() {
  assertFalse(delete(Boolean.prototype));
}
testPrototypeDelete_0.metadata = {
  bug:"CARAKAN-77"
};

//toString

function testToString_0() {
  var x = new Boolean(true);
  assertEquals("true", x.toString());
}

function testToString_1() {
  var x = new Boolean(false);
  assertEquals("false", x.toString());
}

function testToString_2() {
  assertEquals('string', typeof (new Boolean(1)).toString());
}

function testPrototypeToString_0() {
  Boolean.prototype.toString = Object.prototype.toString;
  assertEquals("[object Boolean]", Boolean.prototype.toString());
}
testPrototypeToString_0.metadata = {
  bug:"CARAKAN-133"
};

function testPrototypeValueOf_0() {
  assertFalse(Boolean.prototype.valueOf());
}
testPrototypeValueOf_0.metadata = {
  bug:"CARAKAN-132"
};

//comparisons

function testComparison_0() {
  assertTrue("" == false);
}

function testComparison_1() {
  assertEquals(false, "foo" == true);
}

// Relational operators..
function testRelational_0() {
  var x = new Date();
  /* Check that (<)'s ToPrimitive() usage translates LHS Date to a Number */  
  assertTrue(x < (2*x));
}
testRelational_0.metadata = {
  bug:"CORE-31025"
};
