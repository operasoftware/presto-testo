function testEvalErrorPrototypeExistence_0() {
  assertDefined(EvalError.prototype);
}

function testEvalErrorPrototypeAttributes_0() {
  assertDontDelete(EvalError, "prototype");
}

function testEvalErrorPrototypeAttributes_1() {
  assertReadOnly(EvalError, "prototype");
}

function testEvalErrorPrototypeAttributes_2() {
  assertDontEnum(EvalError, "prototype");
}

function testEvalErrorPrototypeConstructorExistence_0() {
  assertDefined(EvalError.prototype.constructor);
}

function testEvalErrorPrototypeConstructorAttributes_0() {
  assertDelete(EvalError.prototype, "constructor");
}

function testEvalErrorPrototypeConstructorAttributes_1() {
  assertReadWrite(EvalError.prototype, "constructor");
}

function testEvalErrorPrototypeConstructorAttributes_2() {
  assertDontEnum(EvalError.prototype, "constructor");
}

function testEvalErrorPrototypeConstructorValue_0() {
  assertEquals(EvalError, EvalError.prototype.constructor);
}

function testEvalErrorPrototypeNameExistence_0() {
  assertDefined(EvalError.prototype.name);
}

function testEvalErrorPrototypeNameAttributes_0() {
  assertDelete(EvalError.prototype, "name");
}

function testEvalErrorPrototypeNameAttributes_1() {
  assertReadWrite(EvalError.prototype, "name");
}

function testEvalErrorPrototypeNameAttributes_2() {
  assertDontEnum(EvalError.prototype, "name");
}

function testEvalErrorPrototypeNameValue_0() {
  assertEquals("EvalError", EvalError.prototype.name);
}

function testEvalErrorPrototypeMessageExistence_0() {
  assertDefined(EvalError.prototype.message);
}

function testEvalErrorPrototypeMessageAttributes_0() {
  assertDelete(EvalError.prototype, "message");
}

function testEvalErrorPrototypeMessageAttributes_1() {
  assertReadWrite(EvalError.prototype, "message");
}

function testEvalErrorPrototypeMessageAttributes_2() {
  assertDontEnum(EvalError.prototype, "message");
}

function testEvalErrorPrototypeToStringExistence_0() {
  assertDefined(EvalError.prototype.toString);
}

function testEvalErrorPrototypeToStringAttributes_0() {
  assertDelete(EvalError.prototype, "toString");
}

function testEvalErrorPrototypeToStringAttributes_1() {
  assertReadWrite(EvalError.prototype, "toString");
}

function testEvalErrorPrototypeToStringAttributes_2() {
  assertDontEnum(EvalError.prototype, "toString");
}

function testEvalErrorPrototypeToStringPrototypeValue_0() {
  assertUndefined(EvalError.prototype.toString.prototype);
  assertFalse(EvalError.prototype.toString.hasOwnProperty("prototype"));
}

function testEvalErrorPrototypeToStringLength_0() {
  assertEquals(0, EvalError.prototype.toString.length);
}

function testEvalErrorPrototypeToStringLengthAttributes_0() {
  assertDontDelete(EvalError.prototype.toString, "length");
}

function testEvalErrorPrototypeToStringLengthAttributes_1() {
  assertReadOnly(EvalError.prototype.toString, "length");
}

function testEvalErrorPrototypeToStringLengthAttributes_2() {
  assertDontEnum(EvalError.prototype.toString, "length");
}