function testFunctionPrototypeExistence_0() {
  assertDefined(Function.prototype);
}

function testFunctionPrototypeAttributes_0() {
  assertDontDelete(Function, "prototype");
}

function testFunctionPrototypeAttributes_1() {
  assertReadOnly(Function, "prototype");
}

function testFunctionPrototypeAttributes_2() {
  assertDontEnum(Function, "prototype");
}

function testFunctionPrototypeConstructorExistence_0() {
  assertDefined(Function.prototype.constructor);
}

function testFunctionPrototypeConstructorAttributes_0() {
  assertDelete(Function.prototype, "constructor");
}

function testFunctionPrototypeConstructorAttributes_1() {
  assertReadWrite(Function.prototype, "constructor");
}

function testFunctionPrototypeConstructorAttributes_2() {
  assertDontEnum(Function.prototype, "constructor");
}

function testFunctionPrototypeConstructorValue_0() {
  assertEquals(Function, Function.prototype.constructor);
}

function testFunctionPrototypeToStringExistence_0() {
  assertDefined(Function.prototype.toString);
}

function testFunctionPrototypeToStringAttributes_0() {
  assertDelete(Function.prototype, "toString");
}

function testFunctionPrototypeToStringAttributes_1() {
  assertReadWrite(Function.prototype, "toString");
}

function testFunctionPrototypeToStringAttributes_2() {
  assertDontEnum(Function.prototype, "toString");
}

function testFunctionPrototypeToStringPrototypeValue_0() {
  assertUndefined(Function.prototype.toString.prototype);
  assertFalse(Function.prototype.toString.hasOwnProperty("prototype"));
}

function testFunctionPrototypeToStringLength_0() {
  assertEquals(0, Function.prototype.toString.length);
}

function testFunctionPrototypeToStringLengthAttributes_0() {
  assertDontDelete(Function.prototype.toString, "length");
}

function testFunctionPrototypeToStringLengthAttributes_1() {
  assertReadOnly(Function.prototype.toString, "length");
}

function testFunctionPrototypeToStringLengthAttributes_2() {
  assertDontEnum(Function.prototype.toString, "length");
}

function testFunctionPrototypeApplyExistence_0() {
  assertDefined(Function.prototype.apply);
}

function testFunctionPrototypeApplyAttributes_0() {
  assertDelete(Function.prototype, "apply");
}

function testFunctionPrototypeApplyAttributes_1() {
  assertReadWrite(Function.prototype, "apply");
}

function testFunctionPrototypeApplyAttributes_2() {
  assertDontEnum(Function.prototype, "apply");
}

function testFunctionPrototypeApplyPrototypeValue_0() {
  assertUndefined(Function.prototype.apply.prototype);
  assertFalse(Function.prototype.apply.hasOwnProperty("prototype"));
}

function testFunctionPrototypeApplyLength_0() {
  assertEquals(2, Function.prototype.apply.length);
}

function testFunctionPrototypeApplyLengthAttributes_0() {
  assertDontDelete(Function.prototype.apply, "length");
}

function testFunctionPrototypeApplyLengthAttributes_1() {
  assertReadOnly(Function.prototype.apply, "length");
}

function testFunctionPrototypeApplyLengthAttributes_2() {
  assertDontEnum(Function.prototype.apply, "length");
}

function testFunctionPrototypeCallExistence_0() {
  assertDefined(Function.prototype.call);
}

function testFunctionPrototypeCallAttributes_0() {
  assertDelete(Function.prototype, "call");
}

function testFunctionPrototypeCallAttributes_1() {
  assertReadWrite(Function.prototype, "call");
}

function testFunctionPrototypeCallAttributes_2() {
  assertDontEnum(Function.prototype, "call");
}

function testFunctionPrototypeCallPrototypeValue_0() {
  assertUndefined(Function.prototype.call.prototype);
  assertFalse(Function.prototype.call.hasOwnProperty("prototype"));
}

function testFunctionPrototypeCallLength_0() {
  assertEquals(1, Function.prototype.call.length);
}

function testFunctionPrototypeCallLengthAttributes_0() {
  assertDontDelete(Function.prototype.call, "length");
}

function testFunctionPrototypeCallLengthAttributes_1() {
  assertReadOnly(Function.prototype.call, "length");
}

function testFunctionPrototypeCallLengthAttributes_2() {
  assertDontEnum(Function.prototype.call, "length");
}