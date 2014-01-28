function testDivision_0() {
  assertNaN(1/NaN);
}

function testDivision_1() {
  assertNaN(0/NaN);
}

function testDivision_2() {
  assertNaN(Number.POSITIVE_INFINITY/NaN);
}

function testDivision_3() {
  assertNaN(NaN/2);
}

function testDivision_4() {
  assertNaN(NaN/Number.POSITIVE_INFINITY);
}

function testDivision_5() {
  assertNaN(Number.POSITIVE_INFINITY/Number.POSITIVE_INFINITY);
}

function testDivision_6() {
  assertNaN(Number.POSITIVE_INFINITY/Number.NEGATIVE_INFINITY);
}

function testDivision_7() {
  assertEquals(Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY/0);
}

function testDivision_8() {
  assertEquals(Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY/-0);
}

function testDivision_9() {
  assertEquals(Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY/0);
}

function testDivision_10() {
  assertEquals(Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY/-0);
}

function testDivision_11() {
  assertEquals(Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY/2);
}

function testDivision_12() {
  assertEquals(Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY/-2);
}

function testDivision_13() {
  assertEquals(Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY/2);
}

function testDivision_14() {
  assertEquals(Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY/-2);
}

function testDivision_16() {
  assertEquals(0, 2/Number.POSITIVE_INFINITY);
}

function testDivision_17() {
  assertEquals(-0, -2/Number.POSITIVE_INFINITY);
}

function testDivision_18() {
  assertEquals(-0, 2/Number.NEGATIVE_INFINITY);
}

function testDivision_19() {
  assertEquals(0, -2/Number.NEGATIVE_INFINITY);
}

function testDivision_20() {
  assertNaN(0/0);
}

function testDivision_21() {
  assertNaN(0/-0);
}

function testDivision_22() {
  assertEquals(0, 0/10);
}

function testDivision_23() {
  assertEquals(-0, -0/10);
}

function testDivision_24() {
  assertEquals(-0, 0/-10);
}

function testDivision_25() {
  assertEquals(0, -0/-10);
}

function testDivision_26() {
  assertEquals(Number.POSITIVE_INFINITY, 1/0);
}

function testDivision_27() {
  assertEquals(Number.NEGATIVE_INFINITY, 1/-0);
}
testDivision_27.metadata = {
  bug:"CARAKAN-164"
};

function testDivision_28() {
  assertEquals(Number.NEGATIVE_INFINITY, -1/0);
}

function testDivision_28() {
  assertEquals(Number.POSITIVE_INFINITY, -1/-0);
}

function testDivision_29() {
  assertEquals(1.5, 3/2);
}

function testDivision_30() {
  assertEquals(-1.5, -3/2);
}

function testDivision_31() {
  assertEquals(-1.5, 3/-2);
}

function testDivision_32() {
  assertEquals(1.5, -3/-2);
}

function testDivision_33() {
  assertEquals(0, 0/Number.POSITIVE_INFINITY);
}

function testDivision_34() {
  assertEquals(-0, -0/Number.POSITIVE_INFINITY);
}

function testDivision_35() {
  assertEquals(-0, 0/Number.NEGATIVE_INFINITY);
}

function testDivision_36() {
  assertEquals(0, -0/Number.NEGATIVE_INFINITY);
}