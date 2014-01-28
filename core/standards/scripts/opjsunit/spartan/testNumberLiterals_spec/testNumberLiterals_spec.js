//The octal stuff is in an appendix. Some of the specific rules here are
//ill defined by the spec

/*
 * The spec we are following for this is:
 * 1. Let /input/ be the number literal being parsed.
 *    /input/ is assumed to start with a 0
 * 2. Let /c/ be the character at position /i/ in input (/i/ is zero based)
 * 3. If /input/ has length 1 return 0
 * 4. Let /i/ be 1. if /c/ is . e or E reparse /input/ as decimal
 * 5. If /c/ is x or X reparse /input/ as hex
 * 7. While i < the length of input:
 *    7.1 if /c/ is an octal digit append /c/ to output
 *    7.2 otherwise if /c/ is a decimal digit abort this algorithm and
 *        reparse /input/ as decimal
 *    7.3 otherwise if /c/ is . or any other non-decimal, non octal character,
 *        throw a SyntaxError
 *    7.4 increase /i/ by 1
 * 8. Return /output/ interpreted as an octal number
 */

function testOctal_0() {
  //This is interpreted as decimal
  assertEquals(9, 09);
}

function testOctal_1() {
  assertEquals(8, 010);
}

function testOctal_2() {
  assertEquals(022, 18);
}

function testOctal_3() {
  assertEquals(92, 092);
}

function testOctal_4() {
  assertEquals(0, 0E+2);
}

function testOctal_5() {
  assertEquals(0, 0e-2);
}

function testOctal_6() {
  assertEquals(29, 029);
}

function testOctal_7() {
  assertEquals(93.23, 093.23);
}

function testOctal_8() {
  assertThrows(SyntaxError(), eval, "023.23" );
}

function testOctal_10() {
  assertEquals(0.33, 0.33);
}

function testOctal_11() {
  assertEquals(0.99, 0.99);
}

function testHex_0() {
  assertEquals(1, 0x1);
}

function testHex_1() {
  assertEquals(0, 0x0);
}

function testHex_2() {
  assertEquals(10, 0xA);
}

function testHex_3() {
  assertEquals(11, 0xB);
}

function testHex_4() {
  assertEquals(12, 0xC);
}

function testHex_6() {
  assertEquals(13, 0xD);
}

function testHex_8() {
  assertEquals(14, 0xE);
}

function testHex_9() {
  assertEquals(15, 0xF);
}

function testHex_10() {
  assertEquals(16, 0x10);
}

function testHex_11() {
  assertEquals(16, 0X10);
}

function testHex_12() {
  assertThrows(SyntaxError(), eval, "0y10");
}

function testHex_13() {
    assertThrows(SyntaxError(), eval, "0x10.0");
}

function testHex_14() {
  assertThrows(SyntaxError(), eval, "0x");
}