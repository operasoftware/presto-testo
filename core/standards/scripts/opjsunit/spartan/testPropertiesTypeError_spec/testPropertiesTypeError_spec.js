function testTypeErrorPrototypeExistence_0() {
  assertDefined(TypeError.prototype);
}

function testTypeErrorPrototypeAttributes_0() {
  assertDontDelete(TypeError, "prototype");
}

function testTypeErrorPrototypeAttributes_1() {
  assertReadOnly(TypeError, "prototype");
}

function testTypeErrorPrototypeAttributes_2() {
  assertDontEnum(TypeError, "prototype");
}

function testTypeErrorPrototypeConstructorExistence_0() {
  assertDefined(TypeError.prototype.constructor);
}

function testTypeErrorPrototypeConstructorAttributes_0() {
  assertDelete(TypeError.prototype, "constructor");
}

function testTypeErrorPrototypeConstructorAttributes_1() {
  assertReadWrite(TypeError.prototype, "constructor");
}

function testTypeErrorPrototypeConstructorAttributes_2() {
  assertDontEnum(TypeError.prototype, "constructor");
}

function testTypeErrorPrototypeConstructorValue_0() {
  assertEquals(TypeError, TypeError.prototype.constructor);
}

function testTypeErrorPrototypeNameExistence_0() {
  assertDefined(TypeError.prototype.name);
}

function testTypeErrorPrototypeNameAttributes_0() {
  assertDelete(TypeError.prototype, "name");
}

function testTypeErrorPrototypeNameAttributes_1() {
  assertReadWrite(TypeError.prototype, "name");
}

function testTypeErrorPrototypeNameAttributes_2() {
  assertDontEnum(TypeError.prototype, "name");
}

function testTypeErrorPrototypeNameValue_0() {
  assertEquals("TypeError", TypeError.prototype.name);
}

function testTypeErrorPrototypeMessageExistence_0() {
  assertDefined(TypeError.prototype.message);
}

function testTypeErrorPrototypeMessageAttributes_0() {
  assertDelete(TypeError.prototype, "message");
}

function testTypeErrorPrototypeMessageAttributes_1() {
  assertReadWrite(TypeError.prototype, "message");
}

function testTypeErrorPrototypeMessageAttributes_2() {
  assertDontEnum(TypeError.prototype, "message");
}

function testTypeErrorPrototypeToStringExistence_0() {
  assertDefined(TypeError.prototype.toString);
}

function testTypeErrorPrototypeToStringAttributes_0() {
  assertDelete(TypeError.prototype, "toString");
}

function testTypeErrorPrototypeToStringAttributes_1() {
  assertReadWrite(TypeError.prototype, "toString");
}

function testTypeErrorPrototypeToStringAttributes_2() {
  assertDontEnum(TypeError.prototype, "toString");
}

function testTypeErrorPrototypeToStringPrototypeValue_0() {
  assertUndefined(TypeError.prototype.toString.prototype);
  assertFalse(TypeError.prototype.toString.hasOwnProperty("prototype"));
}

function testTypeErrorPrototypeToStringLength_0() {
  assertEquals(0, TypeError.prototype.toString.length);
}

function testTypeErrorPrototypeToStringLengthAttributes_0() {
  assertDontDelete(TypeError.prototype.toString, "length");
}

function testTypeErrorPrototypeToStringLengthAttributes_1() {
  assertReadOnly(TypeError.prototype.toString, "length");
}

function testTypeErrorPrototypeToStringLengthAttributes_2() {
  assertDontEnum(TypeError.prototype.toString, "length");
}