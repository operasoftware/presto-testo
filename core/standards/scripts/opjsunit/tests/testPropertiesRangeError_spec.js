function testRangeErrorPrototypeExistence_0() {
  assertDefined(RangeError.prototype);
}

function testRangeErrorPrototypeAttributes_0() {
  assertDontDelete(RangeError, "prototype");
}

function testRangeErrorPrototypeAttributes_1() {
  assertReadOnly(RangeError, "prototype");
}

function testRangeErrorPrototypeAttributes_2() {
  assertDontEnum(RangeError, "prototype");
}

function testRangeErrorPrototypeConstructorExistence_0() {
  assertDefined(RangeError.prototype.constructor);
}

function testRangeErrorPrototypeConstructorAttributes_0() {
  assertDelete(RangeError.prototype, "constructor");
}

function testRangeErrorPrototypeConstructorAttributes_1() {
  assertReadWrite(RangeError.prototype, "constructor");
}

function testRangeErrorPrototypeConstructorAttributes_2() {
  assertDontEnum(RangeError.prototype, "constructor");
}

function testRangeErrorPrototypeConstructorValue_0() {
  assertEquals(RangeError, RangeError.prototype.constructor);
}

function testRangeErrorPrototypeNameExistence_0() {
  assertDefined(RangeError.prototype.name);
}

function testRangeErrorPrototypeNameAttributes_0() {
  assertDelete(RangeError.prototype, "name");
}

function testRangeErrorPrototypeNameAttributes_1() {
  assertReadWrite(RangeError.prototype, "name");
}

function testRangeErrorPrototypeNameAttributes_2() {
  assertDontEnum(RangeError.prototype, "name");
}

function testRangeErrorPrototypeNameValue_0() {
  assertEquals("RangeError", RangeError.prototype.name);
}

function testRangeErrorPrototypeMessageExistence_0() {
  assertDefined(RangeError.prototype.message);
}

function testRangeErrorPrototypeMessageAttributes_0() {
  assertDelete(RangeError.prototype, "message");
}

function testRangeErrorPrototypeMessageAttributes_1() {
  assertReadWrite(RangeError.prototype, "message");
}

function testRangeErrorPrototypeMessageAttributes_2() {
  assertDontEnum(RangeError.prototype, "message");
}

function testRangeErrorPrototypeToStringExistence_0() {
  assertDefined(RangeError.prototype.toString);
}

function testRangeErrorPrototypeToStringAttributes_0() {
  assertDelete(RangeError.prototype, "toString");
}

function testRangeErrorPrototypeToStringAttributes_1() {
  assertReadWrite(RangeError.prototype, "toString");
}

function testRangeErrorPrototypeToStringAttributes_2() {
  assertDontEnum(RangeError.prototype, "toString");
}

function testRangeErrorPrototypeToStringPrototypeValue_0() {
  assertUndefined(RangeError.prototype.toString.prototype);
  assertFalse(RangeError.prototype.toString.hasOwnProperty("prototype"));
}

function testRangeErrorPrototypeToStringLength_0() {
  assertEquals(0, RangeError.prototype.toString.length);
}

function testRangeErrorPrototypeToStringLengthAttributes_0() {
  assertDontDelete(RangeError.prototype.toString, "length");
}

function testRangeErrorPrototypeToStringLengthAttributes_1() {
  assertReadOnly(RangeError.prototype.toString, "length");
}

function testRangeErrorPrototypeToStringLengthAttributes_2() {
  assertDontEnum(RangeError.prototype.toString, "length");
}