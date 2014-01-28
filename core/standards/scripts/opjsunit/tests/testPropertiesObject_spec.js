function testObjectPrototypeExistence_0() {
  assertDefined(Object.prototype);
}

function testObjectPrototypeAttributes_0() {
  assertDontDelete(Object, "prototype");
}

function testObjectPrototypeAttributes_1() {
  assertReadOnly(Object, "prototype");
}

function testObjectPrototypeAttributes_2() {
  assertDontEnum(Object, "prototype");
}

function testObjectPrototypeConstructorExistence_0() {
  assertDefined(Object.prototype.constructor);
}

function testObjectPrototypeConstructorAttributes_0() {
  assertDelete(Object.prototype, "constructor");
}

function testObjectPrototypeConstructorAttributes_1() {
  assertReadWrite(Object.prototype, "constructor");
}

function testObjectPrototypeConstructorAttributes_2() {
  assertDontEnum(Object.prototype, "constructor");
}

function testObjectPrototypeConstructorValue_0() {
  assertEquals(Object, Object.prototype.constructor);
}

function testObjectPrototypeToStringExistence_0() {
  assertDefined(Object.prototype.toString);
}

function testObjectPrototypeToStringAttributes_0() {
  assertDelete(Object.prototype, "toString");
}

function testObjectPrototypeToStringAttributes_1() {
  assertReadWrite(Object.prototype, "toString");
}

function testObjectPrototypeToStringAttributes_2() {
  assertDontEnum(Object.prototype, "toString");
}

function testObjectPrototypeToStringPrototypeValue_0() {
  assertUndefined(Object.prototype.toString.prototype);
  assertFalse(Object.prototype.toString.hasOwnProperty("prototype"));
}

function testObjectPrototypeToStringLength_0() {
  assertEquals(0, Object.prototype.toString.length);
}

function testObjectPrototypeToStringLengthAttributes_0() {
  assertDontDelete(Object.prototype.toString, "length");
}

function testObjectPrototypeToStringLengthAttributes_1() {
  assertReadOnly(Object.prototype.toString, "length");
}

function testObjectPrototypeToStringLengthAttributes_2() {
  assertDontEnum(Object.prototype.toString, "length");
}

function testObjectPrototypeToLocaleStringExistence_0() {
  assertDefined(Object.prototype.toLocaleString);
}

function testObjectPrototypeToLocaleStringAttributes_0() {
  assertDelete(Object.prototype, "toLocaleString");
}

function testObjectPrototypeToLocaleStringAttributes_1() {
  assertReadWrite(Object.prototype, "toLocaleString");
}

function testObjectPrototypeToLocaleStringAttributes_2() {
  assertDontEnum(Object.prototype, "toLocaleString");
}

function testObjectPrototypeToLocaleStringPrototypeValue_0() {
  assertUndefined(Object.prototype.toLocaleString.prototype);
  assertFalse(Object.prototype.toLocaleString.hasOwnProperty("prototype"));
}

function testObjectPrototypeToLocaleStringLength_0() {
  assertEquals(0, Object.prototype.toLocaleString.length);
}

function testObjectPrototypeToLocaleStringLengthAttributes_0() {
  assertDontDelete(Object.prototype.toLocaleString, "length");
}

function testObjectPrototypeToLocaleStringLengthAttributes_1() {
  assertReadOnly(Object.prototype.toLocaleString, "length");
}

function testObjectPrototypeToLocaleStringLengthAttributes_2() {
  assertDontEnum(Object.prototype.toLocaleString, "length");
}

function testObjectPrototypeValueOfExistence_0() {
  assertDefined(Object.prototype.valueOf);
}

function testObjectPrototypeValueOfAttributes_0() {
  assertDelete(Object.prototype, "valueOf");
}

function testObjectPrototypeValueOfAttributes_1() {
  assertReadWrite(Object.prototype, "valueOf");
}

function testObjectPrototypeValueOfAttributes_2() {
  assertDontEnum(Object.prototype, "valueOf");
}

function testObjectPrototypeValueOfPrototypeValue_0() {
  assertUndefined(Object.prototype.valueOf.prototype);
  assertFalse(Object.prototype.valueOf.hasOwnProperty("prototype"));
}

function testObjectPrototypeValueOfLength_0() {
  assertEquals(0, Object.prototype.valueOf.length);
}

function testObjectPrototypeValueOfLengthAttributes_0() {
  assertDontDelete(Object.prototype.valueOf, "length");
}

function testObjectPrototypeValueOfLengthAttributes_1() {
  assertReadOnly(Object.prototype.valueOf, "length");
}

function testObjectPrototypeValueOfLengthAttributes_2() {
  assertDontEnum(Object.prototype.valueOf, "length");
}

function testObjectPrototypeHasOwnPropertyExistence_0() {
  assertDefined(Object.prototype.hasOwnProperty);
}

function testObjectPrototypeHasOwnPropertyAttributes_0() {
  assertDelete(Object.prototype, "hasOwnProperty");
}

function testObjectPrototypeHasOwnPropertyAttributes_1() {
  assertReadWrite(Object.prototype, "hasOwnProperty");
}

function testObjectPrototypeHasOwnPropertyAttributes_2() {
  assertDontEnum(Object.prototype, "hasOwnProperty");
}

function testObjectPrototypeHasOwnPropertyPrototypeValue_0() {
  assertUndefined(Object.prototype.hasOwnProperty.prototype);
  assertFalse(Object.prototype.hasOwnProperty.hasOwnProperty("prototype"));
}

function testObjectPrototypeHasOwnPropertyLength_0() {
  assertEquals(1, Object.prototype.hasOwnProperty.length);
}

function testObjectPrototypeHasOwnPropertyLengthAttributes_0() {
  assertDontDelete(Object.prototype.hasOwnProperty, "length");
}

function testObjectPrototypeHasOwnPropertyLengthAttributes_1() {
  assertReadOnly(Object.prototype.hasOwnProperty, "length");
}

function testObjectPrototypeHasOwnPropertyLengthAttributes_2() {
  assertDontEnum(Object.prototype.hasOwnProperty, "length");
}

function testObjectPrototypeIsPrototypeOfExistence_0() {
  assertDefined(Object.prototype.isPrototypeOf);
}

function testObjectPrototypeIsPrototypeOfAttributes_0() {
  assertDelete(Object.prototype, "isPrototypeOf");
}

function testObjectPrototypeIsPrototypeOfAttributes_1() {
  assertReadWrite(Object.prototype, "isPrototypeOf");
}

function testObjectPrototypeIsPrototypeOfAttributes_2() {
  assertDontEnum(Object.prototype, "isPrototypeOf");
}

function testObjectPrototypeIsPrototypeOfPrototypeValue_0() {
  assertUndefined(Object.prototype.isPrototypeOf.prototype);
  assertFalse(Object.prototype.isPrototypeOf.hasOwnProperty("prototype"));
}

function testObjectPrototypeIsPrototypeOfLength_0() {
  assertEquals(1, Object.prototype.isPrototypeOf.length);
}

function testObjectPrototypeIsPrototypeOfLengthAttributes_0() {
  assertDontDelete(Object.prototype.isPrototypeOf, "length");
}

function testObjectPrototypeIsPrototypeOfLengthAttributes_1() {
  assertReadOnly(Object.prototype.isPrototypeOf, "length");
}

function testObjectPrototypeIsPrototypeOfLengthAttributes_2() {
  assertDontEnum(Object.prototype.isPrototypeOf, "length");
}

function testObjectPrototypePropertyIsEnumerableExistence_0() {
  assertDefined(Object.prototype.propertyIsEnumerable);
}

function testObjectPrototypePropertyIsEnumerableAttributes_0() {
  assertDelete(Object.prototype, "propertyIsEnumerable");
}

function testObjectPrototypePropertyIsEnumerableAttributes_1() {
  assertReadWrite(Object.prototype, "propertyIsEnumerable");
}

function testObjectPrototypePropertyIsEnumerableAttributes_2() {
  assertDontEnum(Object.prototype, "propertyIsEnumerable");
}

function testObjectPrototypePropertyIsEnumerablePrototypeValue_0() {
  assertUndefined(Object.prototype.propertyIsEnumerable.prototype);
  assertFalse(Object.prototype.propertyIsEnumerable.hasOwnProperty("prototype"));
}

function testObjectPrototypePropertyIsEnumerableLength_0() {
  assertEquals(1, Object.prototype.propertyIsEnumerable.length);
}

function testObjectPrototypePropertyIsEnumerableLengthAttributes_0() {
  assertDontDelete(Object.prototype.propertyIsEnumerable, "length");
}

function testObjectPrototypePropertyIsEnumerableLengthAttributes_1() {
  assertReadOnly(Object.prototype.propertyIsEnumerable, "length");
}

function testObjectPrototypePropertyIsEnumerableLengthAttributes_2() {
  assertDontEnum(Object.prototype.propertyIsEnumerable, "length");
}