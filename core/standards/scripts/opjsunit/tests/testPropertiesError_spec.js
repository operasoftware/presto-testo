function testErrorPrototypeExistence_0() {
  assertDefined(Error.prototype);
}

function testErrorPrototypeAttributes_0() {
  assertDontDelete(Error, "prototype");
}

function testErrorPrototypeAttributes_1() {
  assertReadOnly(Error, "prototype");
}

function testErrorPrototypeAttributes_2() {
  assertDontEnum(Error, "prototype");
}

function testErrorPrototypeConstructorExistence_0() {
  assertDefined(Error.prototype.constructor);
}

function testErrorPrototypeConstructorAttributes_0() {
  assertDelete(Error.prototype, "constructor");
}

function testErrorPrototypeConstructorAttributes_1() {
  assertReadWrite(Error.prototype, "constructor");
}

function testErrorPrototypeConstructorAttributes_2() {
  assertDontEnum(Error.prototype, "constructor");
}

function testErrorPrototypeConstructorValue_0() {
  assertEquals(Error, Error.prototype.constructor);
}

function testErrorPrototypeNameExistence_0() {
  assertDefined(Error.prototype.name);
}

function testErrorPrototypeNameAttributes_0() {
  assertDelete(Error.prototype, "name");
}

function testErrorPrototypeNameAttributes_1() {
  assertReadWrite(Error.prototype, "name");
}

function testErrorPrototypeNameAttributes_2() {
  assertDontEnum(Error.prototype, "name");
}

function testErrorPrototypeNameValue_0() {
  assertEquals("Error", Error.prototype.name);
}

function testErrorPrototypeMessageExistence_0() {
  assertDefined(Error.prototype.message);
}

function testErrorPrototypeMessageAttributes_0() {
  assertDelete(Error.prototype, "message");
}

function testErrorPrototypeMessageAttributes_1() {
  assertReadWrite(Error.prototype, "message");
}

function testErrorPrototypeMessageAttributes_2() {
  assertDontEnum(Error.prototype, "message");
}

function testErrorPrototypeToStringExistence_0() {
  assertDefined(Error.prototype.toString);
}

function testErrorPrototypeToStringAttributes_0() {
  assertDelete(Error.prototype, "toString");
}

function testErrorPrototypeToStringAttributes_1() {
  assertReadWrite(Error.prototype, "toString");
}

function testErrorPrototypeToStringAttributes_2() {
  assertDontEnum(Error.prototype, "toString");
}

function testErrorPrototypeToStringPrototypeValue_0() {
  assertUndefined(Error.prototype.toString.prototype);
  assertFalse(Error.prototype.toString.hasOwnProperty("prototype"));
}

function testErrorPrototypeToStringLength_0() {
  assertEquals(0, Error.prototype.toString.length);
}

function testErrorPrototypeToStringLengthAttributes_0() {
  assertDontDelete(Error.prototype.toString, "length");
}

function testErrorPrototypeToStringLengthAttributes_1() {
  assertReadOnly(Error.prototype.toString, "length");
}

function testErrorPrototypeToStringLengthAttributes_2() {
  assertDontEnum(Error.prototype.toString, "length");
}