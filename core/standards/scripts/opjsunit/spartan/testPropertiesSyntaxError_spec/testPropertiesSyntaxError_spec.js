function testSyntaxErrorPrototypeExistence_0() {
  assertDefined(SyntaxError.prototype);
}

function testSyntaxErrorPrototypeAttributes_0() {
  assertDontDelete(SyntaxError, "prototype");
}

function testSyntaxErrorPrototypeAttributes_1() {
  assertReadOnly(SyntaxError, "prototype");
}

function testSyntaxErrorPrototypeAttributes_2() {
  assertDontEnum(SyntaxError, "prototype");
}

function testSyntaxErrorPrototypeConstructorExistence_0() {
  assertDefined(SyntaxError.prototype.constructor);
}

function testSyntaxErrorPrototypeConstructorAttributes_0() {
  assertDelete(SyntaxError.prototype, "constructor");
}

function testSyntaxErrorPrototypeConstructorAttributes_1() {
  assertReadWrite(SyntaxError.prototype, "constructor");
}

function testSyntaxErrorPrototypeConstructorAttributes_2() {
  assertDontEnum(SyntaxError.prototype, "constructor");
}

function testSyntaxErrorPrototypeConstructorValue_0() {
  assertEquals(SyntaxError, SyntaxError.prototype.constructor);
}

function testSyntaxErrorPrototypeNameExistence_0() {
  assertDefined(SyntaxError.prototype.name);
}

function testSyntaxErrorPrototypeNameAttributes_0() {
  assertDelete(SyntaxError.prototype, "name");
}

function testSyntaxErrorPrototypeNameAttributes_1() {
  assertReadWrite(SyntaxError.prototype, "name");
}

function testSyntaxErrorPrototypeNameAttributes_2() {
  assertDontEnum(SyntaxError.prototype, "name");
}

function testSyntaxErrorPrototypeNameValue_0() {
  assertEquals("SyntaxError", SyntaxError.prototype.name);
}

function testSyntaxErrorPrototypeMessageExistence_0() {
  assertDefined(SyntaxError.prototype.message);
}

function testSyntaxErrorPrototypeMessageAttributes_0() {
  assertDelete(SyntaxError.prototype, "message");
}

function testSyntaxErrorPrototypeMessageAttributes_1() {
  assertReadWrite(SyntaxError.prototype, "message");
}

function testSyntaxErrorPrototypeMessageAttributes_2() {
  assertDontEnum(SyntaxError.prototype, "message");
}

function testSyntaxErrorPrototypeToStringExistence_0() {
  assertDefined(SyntaxError.prototype.toString);
}

function testSyntaxErrorPrototypeToStringAttributes_0() {
  assertDelete(SyntaxError.prototype, "toString");
}

function testSyntaxErrorPrototypeToStringAttributes_1() {
  assertReadWrite(SyntaxError.prototype, "toString");
}

function testSyntaxErrorPrototypeToStringAttributes_2() {
  assertDontEnum(SyntaxError.prototype, "toString");
}

function testSyntaxErrorPrototypeToStringPrototypeValue_0() {
  assertUndefined(SyntaxError.prototype.toString.prototype);
  assertFalse(SyntaxError.prototype.toString.hasOwnProperty("prototype"));
}

function testSyntaxErrorPrototypeToStringLength_0() {
  assertEquals(0, SyntaxError.prototype.toString.length);
}

function testSyntaxErrorPrototypeToStringLengthAttributes_0() {
  assertDontDelete(SyntaxError.prototype.toString, "length");
}

function testSyntaxErrorPrototypeToStringLengthAttributes_1() {
  assertReadOnly(SyntaxError.prototype.toString, "length");
}

function testSyntaxErrorPrototypeToStringLengthAttributes_2() {
  assertDontEnum(SyntaxError.prototype.toString, "length");
}