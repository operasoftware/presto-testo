function testBooleanPrototypeExistence_0() {
  assertDefined(Boolean.prototype);
}

function testBooleanPrototypeAttributes_0() {
  assertDontDelete(Boolean, "prototype");
}

function testBooleanPrototypeAttributes_1() {
  assertReadOnly(Boolean, "prototype");
}

function testBooleanPrototypeAttributes_2() {
  assertDontEnum(Boolean, "prototype");
}

function testBooleanPrototypeConstructorExistence_0() {
  assertDefined(Boolean.prototype.constructor);
}

function testBooleanPrototypeConstructorAttributes_0() {
  assertDelete(Boolean.prototype, "constructor");
}

function testBooleanPrototypeConstructorAttributes_1() {
  assertReadWrite(Boolean.prototype, "constructor");
}

function testBooleanPrototypeConstructorAttributes_2() {
  assertDontEnum(Boolean.prototype, "constructor");
}

function testBooleanPrototypeConstructorValue_0() {
  assertEquals(Boolean, Boolean.prototype.constructor);
}

function testBooleanPrototypeToStringExistence_0() {
  assertDefined(Boolean.prototype.toString);
}

function testBooleanPrototypeToStringAttributes_0() {
  assertDelete(Boolean.prototype, "toString");
}

function testBooleanPrototypeToStringAttributes_1() {
  assertReadWrite(Boolean.prototype, "toString");
}

function testBooleanPrototypeToStringAttributes_2() {
  assertDontEnum(Boolean.prototype, "toString");
}

function testBooleanPrototypeToStringPrototypeValue_0() {
  assertUndefined(Boolean.prototype.toString.prototype);
  assertFalse(Boolean.prototype.toString.hasOwnProperty("prototype"));
}

function testBooleanPrototypeToStringLength_0() {
  assertEquals(0, Boolean.prototype.toString.length);
}

function testBooleanPrototypeToStringLengthAttributes_0() {
  assertDontDelete(Boolean.prototype.toString, "length");
}

function testBooleanPrototypeToStringLengthAttributes_1() {
  assertReadOnly(Boolean.prototype.toString, "length");
}

function testBooleanPrototypeToStringLengthAttributes_2() {
  assertDontEnum(Boolean.prototype.toString, "length");
}

function testBooleanPrototypeValueOfExistence_0() {
  assertDefined(Boolean.prototype.valueOf);
}

function testBooleanPrototypeValueOfAttributes_0() {
  assertDelete(Boolean.prototype, "valueOf");
}

function testBooleanPrototypeValueOfAttributes_1() {
  assertReadWrite(Boolean.prototype, "valueOf");
}

function testBooleanPrototypeValueOfAttributes_2() {
  assertDontEnum(Boolean.prototype, "valueOf");
}

function testBooleanPrototypeValueOfPrototypeValue_0() {
  assertUndefined(Boolean.prototype.valueOf.prototype);
  assertFalse(Boolean.prototype.valueOf.hasOwnProperty("prototype"));
}

function testBooleanPrototypeValueOfLength_0() {
  assertEquals(0, Boolean.prototype.valueOf.length);
}

function testBooleanPrototypeValueOfLengthAttributes_0() {
  assertDontDelete(Boolean.prototype.valueOf, "length");
}

function testBooleanPrototypeValueOfLengthAttributes_1() {
  assertReadOnly(Boolean.prototype.valueOf, "length");
}

function testBooleanPrototypeValueOfLengthAttributes_2() {
  assertDontEnum(Boolean.prototype.valueOf, "length");
}