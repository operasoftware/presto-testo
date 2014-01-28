function testReferenceErrorPrototypeExistence_0() {
  assertDefined(ReferenceError.prototype);
}

function testReferenceErrorPrototypeAttributes_0() {
  assertDontDelete(ReferenceError, "prototype");
}

function testReferenceErrorPrototypeAttributes_1() {
  assertReadOnly(ReferenceError, "prototype");
}

function testReferenceErrorPrototypeAttributes_2() {
  assertDontEnum(ReferenceError, "prototype");
}

function testReferenceErrorPrototypeConstructorExistence_0() {
  assertDefined(ReferenceError.prototype.constructor);
}

function testReferenceErrorPrototypeConstructorAttributes_0() {
  assertDelete(ReferenceError.prototype, "constructor");
}

function testReferenceErrorPrototypeConstructorAttributes_1() {
  assertReadWrite(ReferenceError.prototype, "constructor");
}

function testReferenceErrorPrototypeConstructorAttributes_2() {
  assertDontEnum(ReferenceError.prototype, "constructor");
}

function testReferenceErrorPrototypeConstructorValue_0() {
  assertEquals(ReferenceError, ReferenceError.prototype.constructor);
}

function testReferenceErrorPrototypeNameExistence_0() {
  assertDefined(ReferenceError.prototype.name);
}

function testReferenceErrorPrototypeNameAttributes_0() {
  assertDelete(ReferenceError.prototype, "name");
}

function testReferenceErrorPrototypeNameAttributes_1() {
  assertReadWrite(ReferenceError.prototype, "name");
}

function testReferenceErrorPrototypeNameAttributes_2() {
  assertDontEnum(ReferenceError.prototype, "name");
}

function testReferenceErrorPrototypeNameValue_0() {
  assertEquals("ReferenceError", ReferenceError.prototype.name);
}

function testReferenceErrorPrototypeMessageExistence_0() {
  assertDefined(ReferenceError.prototype.message);
}

function testReferenceErrorPrototypeMessageAttributes_0() {
  assertDelete(ReferenceError.prototype, "message");
}

function testReferenceErrorPrototypeMessageAttributes_1() {
  assertReadWrite(ReferenceError.prototype, "message");
}

function testReferenceErrorPrototypeMessageAttributes_2() {
  assertDontEnum(ReferenceError.prototype, "message");
}

function testReferenceErrorPrototypeToStringExistence_0() {
  assertDefined(ReferenceError.prototype.toString);
}

function testReferenceErrorPrototypeToStringAttributes_0() {
  assertDelete(ReferenceError.prototype, "toString");
}

function testReferenceErrorPrototypeToStringAttributes_1() {
  assertReadWrite(ReferenceError.prototype, "toString");
}

function testReferenceErrorPrototypeToStringAttributes_2() {
  assertDontEnum(ReferenceError.prototype, "toString");
}

function testReferenceErrorPrototypeToStringPrototypeValue_0() {
  assertUndefined(ReferenceError.prototype.toString.prototype);
  assertFalse(ReferenceError.prototype.toString.hasOwnProperty("prototype"));
}

function testReferenceErrorPrototypeToStringLength_0() {
  assertEquals(0, ReferenceError.prototype.toString.length);
}

function testReferenceErrorPrototypeToStringLengthAttributes_0() {
  assertDontDelete(ReferenceError.prototype.toString, "length");
}

function testReferenceErrorPrototypeToStringLengthAttributes_1() {
  assertReadOnly(ReferenceError.prototype.toString, "length");
}

function testReferenceErrorPrototypeToStringLengthAttributes_2() {
  assertDontEnum(ReferenceError.prototype.toString, "length");
}