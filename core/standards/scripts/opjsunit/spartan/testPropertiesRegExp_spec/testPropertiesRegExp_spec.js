function testRegExpPrototypeExistence_0() {
  assertDefined(RegExp.prototype);
}

function testRegExpPrototypeAttributes_0() {
  assertDontDelete(RegExp, "prototype");
}

function testRegExpPrototypeAttributes_1() {
  assertReadOnly(RegExp, "prototype");
}

function testRegExpPrototypeAttributes_2() {
  assertDontEnum(RegExp, "prototype");
}

function testRegExpPrototypeConstructorExistence_0() {
  assertDefined(RegExp.prototype.constructor);
}

function testRegExpPrototypeConstructorAttributes_0() {
  assertDelete(RegExp.prototype, "constructor");
}

function testRegExpPrototypeConstructorAttributes_1() {
  assertReadWrite(RegExp.prototype, "constructor");
}

function testRegExpPrototypeConstructorAttributes_2() {
  assertDontEnum(RegExp.prototype, "constructor");
}

function testRegExpPrototypeConstructorValue_0() {
  assertEquals(RegExp, RegExp.prototype.constructor);
}

function testRegExpPrototypeExecExistence_0() {
  assertDefined(RegExp.prototype.exec);
}

function testRegExpPrototypeExecAttributes_0() {
  assertDelete(RegExp.prototype, "exec");
}

function testRegExpPrototypeExecAttributes_1() {
  assertReadWrite(RegExp.prototype, "exec");
}

function testRegExpPrototypeExecAttributes_2() {
  assertDontEnum(RegExp.prototype, "exec");
}

function testRegExpPrototypeExecPrototypeValue_0() {
  assertUndefined(RegExp.prototype.exec.prototype);
  assertFalse(RegExp.prototype.exec.hasOwnProperty("prototype"));
}

function testRegExpPrototypeExecLength_0() {
  assertEquals(1, RegExp.prototype.exec.length);
}

function testRegExpPrototypeExecLengthAttributes_0() {
  assertDontDelete(RegExp.prototype.exec, "length");
}

function testRegExpPrototypeExecLengthAttributes_1() {
  assertReadOnly(RegExp.prototype.exec, "length");
}

function testRegExpPrototypeExecLengthAttributes_2() {
  assertDontEnum(RegExp.prototype.exec, "length");
}

function testRegExpPrototypeTestExistence_0() {
  assertDefined(RegExp.prototype.test);
}

function testRegExpPrototypeTestAttributes_0() {
  assertDelete(RegExp.prototype, "test");
}

function testRegExpPrototypeTestAttributes_1() {
  assertReadWrite(RegExp.prototype, "test");
}

function testRegExpPrototypeTestAttributes_2() {
  assertDontEnum(RegExp.prototype, "test");
}

function testRegExpPrototypeTestPrototypeValue_0() {
  assertUndefined(RegExp.prototype.test.prototype);
  assertFalse(RegExp.prototype.test.hasOwnProperty("prototype"));
}

function testRegExpPrototypeTestLength_0() {
  assertEquals(1, RegExp.prototype.test.length);
}

function testRegExpPrototypeTestLengthAttributes_0() {
  assertDontDelete(RegExp.prototype.test, "length");
}

function testRegExpPrototypeTestLengthAttributes_1() {
  assertReadOnly(RegExp.prototype.test, "length");
}

function testRegExpPrototypeTestLengthAttributes_2() {
  assertDontEnum(RegExp.prototype.test, "length");
}

function testRegExpPrototypeToStringExistence_0() {
  assertDefined(RegExp.prototype.toString);
}

function testRegExpPrototypeToStringAttributes_0() {
  assertDelete(RegExp.prototype, "toString");
}

function testRegExpPrototypeToStringAttributes_1() {
  assertReadWrite(RegExp.prototype, "toString");
}

function testRegExpPrototypeToStringAttributes_2() {
  assertDontEnum(RegExp.prototype, "toString");
}

function testRegExpPrototypeToStringPrototypeValue_0() {
  assertUndefined(RegExp.prototype.toString.prototype);
  assertFalse(RegExp.prototype.toString.hasOwnProperty("prototype"));
}

function testRegExpPrototypeToStringLength_0() {
  assertEquals(0, RegExp.prototype.toString.length);
}

function testRegExpPrototypeToStringLengthAttributes_0() {
  assertDontDelete(RegExp.prototype.toString, "length");
}

function testRegExpPrototypeToStringLengthAttributes_1() {
  assertReadOnly(RegExp.prototype.toString, "length");
}

function testRegExpPrototypeToStringLengthAttributes_2() {
  assertDontEnum(RegExp.prototype.toString, "length");
}