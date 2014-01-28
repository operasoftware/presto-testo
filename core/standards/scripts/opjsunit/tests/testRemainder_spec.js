function testRemainder_0() {
  assertNaN(NaN%3);
}

function testRemainder_1() {
  assertNaN(56%NaN);
}

function testRemainder_2() {
  assertEquals(3, 3%Number.POSITIVE_INFINITY);
}

function testRemainder_4() {
  assertEquals(3, 3%Number.NEGATIVE_INFINITY);
}

function testRemainder_5() {
  assertEquals(0, 0%3);
}

function testRemainder_6() {
  assertEquals(-0, -0%3);
}

function testRemainder_7() {
  assertEquals(0, 0%Number.POSITIVE_INFINITY);
}

function testRemainder_8() {
  assertEquals(0, 0%Number.NEGATIVE_INFINITY);
}

function testRemainder_9() {
  assertEquals(0, 2%2);
}

function testRemainder_10() {
  assertEquals(1, 3%2);
}

function testRemainder_11() {
  assertEquals(-1, -3%2);
}

function testRemainder_12() {
  assertEquals(-1, -3%-2);
}

function testRemainder_12() {
  assertEquals(1, 5%-2);
}

function testRemainder_13() {
  assertNaN(42%0);
}

function testRemainder_14() {
  assertNaN(42%-0);
}

function testRemainder_15() {
  assertNaN(Number.POSITIVE_INFINITY%13);
}

function testRemainder_16() {
  assertNaN(Number.NEGATIVE_INFINITY%13);
}

/* check that zero sign is preserved with finite divisors */
function testRemainder_17() {
  assertEquals(-0, -0 % Number.MAX_VALUE);
}

function testRemainder_18() {
  assertEquals(0, 0 % Number.MAX_VALUE);
}

function testRemainder_19() {
  assertEquals(-0, -0 % Number.MIN_VALUE);
}

function testRemainder_20() {
  assertEquals(0, 0 % Number.MIN_VALUE);
}

function testRemainder_21() {
  assertEquals(NaN, null % undefined);
}

function testRemainder_22() {
  assertEquals(NaN, -0 % undefined);
}

function testRemainder_23() {
  var x;
  x = 0;
  x %= null;
  assertEquals(NaN, x);
}

function testRemainder_24() {
    function f(x, y) { return ((x % y)|0); }

    for (var i = 0; i < 10; i++)
       assertEquals(0, f(0, i|0));
}
testRemainder_24.metadata = {
  bug:"CORE-46935"
};
