function testMultiplication_0() {
  assertNaN(NaN*0);
}

function testMultiplication_1() {
  assertNaN(NaN*1);
}

function testMultiplication_2() {
  assertNaN(NaN*Number.POSITIVE_INFINITY);
}

function testMultiplication_3() {
  assertNaN(0*NaN);
}

function testMultiplication_4() {
  assertNaN(1*NaN);
}

function testMultiplication_5() {
  assertNaN(Number.POSITIVE_INFINITY*NaN);
}

function testMultiplication_6() {
  assertNaN(0*Number.POSITIVE_INFINITY);
}

function testMultiplication_7() {
  assertNaN(-0*Number.POSITIVE_INFINITY);
}

function testMultiplication_7b() {
  assertNaN(0*Number.NEGATIVE_INFINITY);
}

function testMultiplication_8() {
  assertNaN(-0*Number.NEGATIVE_INFINITY);
}

function testMultiplication_9() {
  assertEquals(Number.POSITIVE_INFINITY, 1*Number.POSITIVE_INFINITY);
}

function testMultiplication_10() {
  assertEquals(Number.NEGATIVE_INFINITY, 45*Number.NEGATIVE_INFINITY);
}

function testMultiplication_11() {
  assertEquals(Number.NEGATIVE_INFINITY, -13.2*Number.POSITIVE_INFINITY);
}

function testMultiplication_12() {
  assertEquals(Number.POSITIVE_INFINITY, -12.8*Number.NEGATIVE_INFINITY);
}

function testMultiplication_14() {
  assertEquals(Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY*Number.POSITIVE_INFINITY);
}

function testMultiplication_15() {
  assertApproxEquals(1, 1E-16*1E16);
}

function testMultiplication_16() {
  assertEquals(6, 3*2);
}

function testMultiplication_17() {
  assertEquals(4, "2" * 2);
}

function testMultiplication_18() {
  assertEquals(4, "  2  " * 2);
}

function testMultiplication_19() {
  assertEquals(20, "0XA" * 2);
}

function testMultiplication_20() {
  assertEquals(20, "0xA" * 2);
}

function testMultiplication_21() {
  assertEquals(20, "010" * 2);
}

function testMultiplication_22() {
  assertEquals(4, 2 * "2");
}

function testMultiplication_23() {
  assertEquals(4, 2 * "  2  ");
}

function testMultiplication_24() {
  assertEquals(20, 2 * "0XA");
}

function testMultiplication_25() {
  assertEquals(20, 2 * "0xA");
}

function testMultiplication_26() {
  assertEquals(20, 2 * "010");
}

function testMultiplication_27() {
  assertEquals(2.20, 2 * "1.10");
}

function testMultiplication_28() {
  assertEquals(2E10, 2 * "1E10");
}

/*
 * IEE754 compilance
 *
 * Test 29 - 34, multiplying a negative number with 0 yields -0.
 */

function testMultiplication_29() {
  function f(a, b) { return a * b; }
  assertEquals(-0, f(-1, 0));
}

function testMultiplication_30() {
  function f(a, b) { return a * b; }
  assertEquals(-0, f(0, -1));
}

function testMultiplication_31() {
  function f(a) { return a * 0; }
  assertEquals(-0, f(-1));
}

function testMultiplication_32() {
  function f(a) { return 0 * a; }
  assertEquals(-0, f(-1));
}

function testMultiplication_33() {
  function f(a) { return a * -1; }
  assertEquals(-0, f(0));
}

function testMultiplication_34() {
  function f(a) { return -1 * a; }
  assertEquals(-0, f(0));
}

function testMultiplication_35() {
  var n1 = -539222987;
  var expected = (n1 * n1) | 0;

  function f(x, y, w)
  {
    for (var i = 0; i < 100; i++)
      assertEquals(w, (x*y)|0);
  }
  f(n1, n1, expected);
  f(n1, n1, expected);
}
testMultiplication_35.metadata = {
  bug: "CORE-49440"
};

function testMultiplication_36() {
  var n1 = -2147483647;
  var n2 = -4194304;
  var n3 = n2 - 1;
  var n4 = n2 + 1;
  var expected_1 = (n1 * n2) | 0;
  var expected_2 = (n1 * n3) | 0;
  var expected_3 = (n1 * n4) | 0;

  function f(x, w)
  {
    for (var i = 0; i < 100; i++)
      assertEquals(w, (x*-4194304)|0);
  }
  f(n1, expected_1);

  function g(x, w)
  {
    for (var i = 0; i < 100; i++)
      assertEquals(w, (x*-4194305)|0);
  }
  g(n1, expected_2);

  function h(x, w)
  {
    for (var i = 0; i < 100; i++)
      assertEquals(w, (x*-4194303)|0);
  }
  h(n1, expected_3);
}
testMultiplication_36.metadata = {
  bug: "CORE-49440"
};

/*Could really do with some more tests for IEE754 compilance here*/
