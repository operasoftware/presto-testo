function testNumberPrototypeExistence_0() {
  assertDefined(Number.prototype);
}

function testNumberPrototypeAttributes_0() {
  assertDontDelete(Number, "prototype");
}

function testNumberPrototypeAttributes_1() {
  assertReadOnly(Number, "prototype");
}

function testNumberPrototypeAttributes_2() {
  assertDontEnum(Number, "prototype");
}

function testNumberMAX_VALUEExistence_0() {
  assertDefined(Number.MAX_VALUE);
}

function testNumberMAX_VALUEAttributes_0() {
  assertDontDelete(Number, "MAX_VALUE");
}

function testNumberMAX_VALUEAttributes_1() {
  assertReadOnly(Number, "MAX_VALUE");
}

function testNumberMAX_VALUEAttributes_2() {
  assertDontEnum(Number, "MAX_VALUE");
}

function testNumberMIN_VALUEExistence_0() {
  assertDefined(Number.MIN_VALUE);
}

function testNumberMIN_VALUEAttributes_0() {
  assertDontDelete(Number, "MIN_VALUE");
}

function testNumberMIN_VALUEAttributes_1() {
  assertReadOnly(Number, "MIN_VALUE");
}

function testNumberMIN_VALUEAttributes_2() {
  assertDontEnum(Number, "MIN_VALUE");
}

function testNumberNaNExistence_0() {
  assertDefined(Number.NaN);
}

function testNumberNaNAttributes_0() {
  assertDontDelete(Number, "NaN");
}

function testNumberNaNAttributes_1() {
  assertReadOnly(Number, "NaN");
}

function testNumberNaNAttributes_2() {
  assertDontEnum(Number, "NaN");
}

function testNumberNEGATIVE_INFINITYExistence_0() {
  assertDefined(Number.NEGATIVE_INFINITY);
}

function testNumberNEGATIVE_INFINITYAttributes_0() {
  assertDontDelete(Number, "NEGATIVE_INFINITY");
}

function testNumberNEGATIVE_INFINITYAttributes_1() {
  assertReadOnly(Number, "NEGATIVE_INFINITY");
}

function testNumberNEGATIVE_INFINITYAttributes_2() {
  assertDontEnum(Number, "NEGATIVE_INFINITY");
}

function testNumberPOSITIVE_INFINITYExistence_0() {
  assertDefined(Number.POSITIVE_INFINITY);
}

function testNumberPOSITIVE_INFINITYAttributes_0() {
  assertDontDelete(Number, "POSITIVE_INFINITY");
}

function testNumberPOSITIVE_INFINITYAttributes_1() {
  assertReadOnly(Number, "POSITIVE_INFINITY");
}

function testNumberPOSITIVE_INFINITYAttributes_2() {
  assertDontEnum(Number, "POSITIVE_INFINITY");
}

function testNumberPrototypeConstructorExistence_0() {
  assertDefined(Number.prototype.constructor);
}

function testNumberPrototypeConstructorAttributes_0() {
  assertDelete(Number.prototype, "constructor");
}

function testNumberPrototypeConstructorAttributes_1() {
  assertReadWrite(Number.prototype, "constructor");
}

function testNumberPrototypeConstructorAttributes_2() {
  assertDontEnum(Number.prototype, "constructor");
}

function testNumberPrototypeConstructorValue_0() {
  assertEquals(Number, Number.prototype.constructor);
}

function testNumberPrototypeToStringExistence_0() {
  assertDefined(Number.prototype.toString);
}

function testNumberPrototypeToStringAttributes_0() {
  assertDelete(Number.prototype, "toString");
}

function testNumberPrototypeToStringAttributes_1() {
  assertReadWrite(Number.prototype, "toString");
}

function testNumberPrototypeToStringAttributes_2() {
  assertDontEnum(Number.prototype, "toString");
}

function testNumberPrototypeToStringPrototypeValue_0() {
  assertUndefined(Number.prototype.toString.prototype);
  assertFalse(Number.prototype.toString.hasOwnProperty("prototype"));
}

function testNumberPrototypeToStringLength_0() {
  assertEquals(1, Number.prototype.toString.length);
}

function testNumberPrototypeToStringLengthAttributes_0() {
  assertDontDelete(Number.prototype.toString, "length");
}

function testNumberPrototypeToStringLengthAttributes_1() {
  assertReadOnly(Number.prototype.toString, "length");
}

function testNumberPrototypeToStringLengthAttributes_2() {
  assertDontEnum(Number.prototype.toString, "length");
}

function testNumberPrototypeToLocaleStringExistence_0() {
  assertDefined(Number.prototype.toLocaleString);
}

function testNumberPrototypeToLocaleStringAttributes_0() {
  assertDelete(Number.prototype, "toLocaleString");
}

function testNumberPrototypeToLocaleStringAttributes_1() {
  assertReadWrite(Number.prototype, "toLocaleString");
}

function testNumberPrototypeToLocaleStringAttributes_2() {
  assertDontEnum(Number.prototype, "toLocaleString");
}

function testNumberPrototypeToLocaleStringPrototypeValue_0() {
  assertUndefined(Number.prototype.toLocaleString.prototype);
  assertFalse(Number.prototype.toLocaleString.hasOwnProperty("prototype"));
}

function testNumberPrototypeToLocaleStringLength_0() {
  assertEquals(0, Number.prototype.toLocaleString.length);
}

function testNumberPrototypeToLocaleStringLengthAttributes_0() {
  assertDontDelete(Number.prototype.toLocaleString, "length");
}

function testNumberPrototypeToLocaleStringLengthAttributes_1() {
  assertReadOnly(Number.prototype.toLocaleString, "length");
}

function testNumberPrototypeToLocaleStringLengthAttributes_2() {
  assertDontEnum(Number.prototype.toLocaleString, "length");
}

function testNumberPrototypeValueOfExistence_0() {
  assertDefined(Number.prototype.valueOf);
}

function testNumberPrototypeValueOfAttributes_0() {
  assertDelete(Number.prototype, "valueOf");
}

function testNumberPrototypeValueOfAttributes_1() {
  assertReadWrite(Number.prototype, "valueOf");
}

function testNumberPrototypeValueOfAttributes_2() {
  assertDontEnum(Number.prototype, "valueOf");
}

function testNumberPrototypeValueOfPrototypeValue_0() {
  assertUndefined(Number.prototype.valueOf.prototype);
  assertFalse(Number.prototype.valueOf.hasOwnProperty("prototype"));
}

function testNumberPrototypeValueOfLength_0() {
  assertEquals(0, Number.prototype.valueOf.length);
}

function testNumberPrototypeValueOfLengthAttributes_0() {
  assertDontDelete(Number.prototype.valueOf, "length");
}

function testNumberPrototypeValueOfLengthAttributes_1() {
  assertReadOnly(Number.prototype.valueOf, "length");
}

function testNumberPrototypeValueOfLengthAttributes_2() {
  assertDontEnum(Number.prototype.valueOf, "length");
}

function testNumberPrototypeToFixedExistence_0() {
  assertDefined(Number.prototype.toFixed);
}

function testNumberPrototypeToFixedAttributes_0() {
  assertDelete(Number.prototype, "toFixed");
}

function testNumberPrototypeToFixedAttributes_1() {
  assertReadWrite(Number.prototype, "toFixed");
}

function testNumberPrototypeToFixedAttributes_2() {
  assertDontEnum(Number.prototype, "toFixed");
}

function testNumberPrototypeToFixedPrototypeValue_0() {
  assertUndefined(Number.prototype.toFixed.prototype);
  assertFalse(Number.prototype.toFixed.hasOwnProperty("prototype"));
}

function testNumberPrototypeToFixedLength_0() {
  assertEquals(1, Number.prototype.toFixed.length);
}

function testNumberPrototypeToFixedLengthAttributes_0() {
  assertDontDelete(Number.prototype.toFixed, "length");
}

function testNumberPrototypeToFixedLengthAttributes_1() {
  assertReadOnly(Number.prototype.toFixed, "length");
}

function testNumberPrototypeToFixedLengthAttributes_2() {
  assertDontEnum(Number.prototype.toFixed, "length");
}

function testNumberPrototypeToExponentialExistence_0() {
  assertDefined(Number.prototype.toExponential);
}

function testNumberPrototypeToExponentialAttributes_0() {
  assertDelete(Number.prototype, "toExponential");
}

function testNumberPrototypeToExponentialAttributes_1() {
  assertReadWrite(Number.prototype, "toExponential");
}

function testNumberPrototypeToExponentialAttributes_2() {
  assertDontEnum(Number.prototype, "toExponential");
}

function testNumberPrototypeToExponentialPrototypeValue_0() {
  assertUndefined(Number.prototype.toExponential.prototype);
  assertFalse(Number.prototype.toExponential.hasOwnProperty("prototype"));
}

function testNumberPrototypeToExponentialLength_0() {
  assertEquals(1, Number.prototype.toExponential.length);
}

function testNumberPrototypeToExponentialLengthAttributes_0() {
  assertDontDelete(Number.prototype.toExponential, "length");
}

function testNumberPrototypeToExponentialLengthAttributes_1() {
  assertReadOnly(Number.prototype.toExponential, "length");
}

function testNumberPrototypeToExponentialLengthAttributes_2() {
  assertDontEnum(Number.prototype.toExponential, "length");
}

function testNumberPrototypeToPrecisionExistence_0() {
  assertDefined(Number.prototype.toPrecision);
}

function testNumberPrototypeToPrecisionAttributes_0() {
  assertDelete(Number.prototype, "toPrecision");
}

function testNumberPrototypeToPrecisionAttributes_1() {
  assertReadWrite(Number.prototype, "toPrecision");
}

function testNumberPrototypeToPrecisionAttributes_2() {
  assertDontEnum(Number.prototype, "toPrecision");
}

function testNumberPrototypeToPrecisionPrototypeValue_0() {
  assertUndefined(Number.prototype.toPrecision.prototype);
  assertFalse(Number.prototype.toPrecision.hasOwnProperty("prototype"));
}

function testNumberPrototypeToPrecisionLength_0() {
  assertEquals(1, Number.prototype.toPrecision.length);
}

function testNumberPrototypeToPrecisionLengthAttributes_0() {
  assertDontDelete(Number.prototype.toPrecision, "length");
}

function testNumberPrototypeToPrecisionLengthAttributes_1() {
  assertReadOnly(Number.prototype.toPrecision, "length");
}

function testNumberPrototypeToPrecisionLengthAttributes_2() {
  assertDontEnum(Number.prototype.toPrecision, "length");
}