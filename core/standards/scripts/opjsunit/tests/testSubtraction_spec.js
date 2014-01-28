function testSubtraction_0() {
  assertNaN(NaN-1);
}

function testSubtraction_1() {
  assertNaN(NaN - Number.POSITIVE_INFINITY);
}

function testSubtraction_2() {
  assertNaN(Number.POSITIVE_INFINITY-Number.POSITIVE_INFINITY);
}

function testSubtraction_3() {
  assertNaN(Number.NEGATIVE_INFINITY-Number.NEGATIVE_INFINITY);
}

function testSubtraction_4() {
  assertEquals(Number.NEGATIVE_INFINITY,
	    Number.NEGATIVE_INFINITY-Number.POSITIVE_INFINITY);
}

function testSubtraction_5() {
  assertEquals(Number.POSITIVE_INFINITY,
	    Number.POSITIVE_INFINITY-Number.NEGATIVE_INFINITY);
}

function testSubtraction_5() {
  assertEquals(Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY-1E8);
}

function testSubtraction_6() {
  assertEquals(Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY-1E8);
}

function testSubtraction_7() {
  assertEquals(0, (-0)-(-0));
}

function testSubtraction_8() {
  assertEquals(0, 0-0);
}

function testSubtraction_9() {
  assertEquals(-0, -0-0);
}

function testSubtraction_10() {
  assertEquals(-17, -0-17);
}

function testSubtraction_11() {
  assertEquals(-23, 0-23);
}

function testSubtraction_12() {
  assertEquals(-34, -17-17);
}

function testSubtraction_13() {
  assertEquals(0, 1E8-1E8);
}