function testMathEExistence_0() {
  assertDefined(Math.E);
}

function testMathEAttributes_0() {
  assertDontDelete(Math, "E");
}

function testMathEAttributes_1() {
  assertReadOnly(Math, "E");
}

function testMathEAttributes_2() {
  assertDontEnum(Math, "E");
}

function testMathLN10Existence_0() {
  assertDefined(Math.LN10);
}

function testMathLN10Attributes_0() {
  assertDontDelete(Math, "LN10");
}

function testMathLN10Attributes_1() {
  assertReadOnly(Math, "LN10");
}

function testMathLN10Attributes_2() {
  assertDontEnum(Math, "LN10");
}

function testMathLN2Existence_0() {
  assertDefined(Math.LN2);
}

function testMathLN2Attributes_0() {
  assertDontDelete(Math, "LN2");
}

function testMathLN2Attributes_1() {
  assertReadOnly(Math, "LN2");
}

function testMathLN2Attributes_2() {
  assertDontEnum(Math, "LN2");
}

function testMathLOG2EExistence_0() {
  assertDefined(Math.LOG2E);
}

function testMathLOG2EAttributes_0() {
  assertDontDelete(Math, "LOG2E");
}

function testMathLOG2EAttributes_1() {
  assertReadOnly(Math, "LOG2E");
}

function testMathLOG2EAttributes_2() {
  assertDontEnum(Math, "LOG2E");
}

function testMathLOG10EExistence_0() {
  assertDefined(Math.LOG10E);
}

function testMathLOG10EAttributes_0() {
  assertDontDelete(Math, "LOG10E");
}

function testMathLOG10EAttributes_1() {
  assertReadOnly(Math, "LOG10E");
}

function testMathLOG10EAttributes_2() {
  assertDontEnum(Math, "LOG10E");
}

function testMathPIExistence_0() {
  assertDefined(Math.PI);
}

function testMathPIAttributes_0() {
  assertDontDelete(Math, "PI");
}

function testMathPIAttributes_1() {
  assertReadOnly(Math, "PI");
}

function testMathPIAttributes_2() {
  assertDontEnum(Math, "PI");
}

function testMathSQRT1_2Existence_0() {
  assertDefined(Math.SQRT1_2);
}

function testMathSQRT1_2Attributes_0() {
  assertDontDelete(Math, "SQRT1_2");
}

function testMathSQRT1_2Attributes_1() {
  assertReadOnly(Math, "SQRT1_2");
}

function testMathSQRT1_2Attributes_2() {
  assertDontEnum(Math, "SQRT1_2");
}

function testMathSQRT2Existence_0() {
  assertDefined(Math.SQRT2);
}

function testMathSQRT2Attributes_0() {
  assertDontDelete(Math, "SQRT2");
}

function testMathSQRT2Attributes_1() {
  assertReadOnly(Math, "SQRT2");
}

function testMathSQRT2Attributes_2() {
  assertDontEnum(Math, "SQRT2");
}

function testMathAbsExistence_0() {
  assertDefined(Math.abs);
}

function testMathAbsAttributes_0() {
  assertDelete(Math, "abs");
}

function testMathAbsAttributes_1() {
  assertReadWrite(Math, "abs");
}

function testMathAbsAttributes_2() {
  assertDontEnum(Math, "abs");
}

function testMathAbsPrototypeValue_0() {
  assertUndefined(Math.abs.prototype);
  assertFalse(Math.abs.hasOwnProperty("prototype"));
}

function testMathAbsLength_0() {
  assertEquals(1, Math.abs.length);
}

function testMathAbsLengthAttributes_0() {
  assertDontDelete(Math.abs, "length");
}

function testMathAbsLengthAttributes_1() {
  assertReadOnly(Math.abs, "length");
}

function testMathAbsLengthAttributes_2() {
  assertDontEnum(Math.abs, "length");
}

function testMathAcosExistence_0() {
  assertDefined(Math.acos);
}

function testMathAcosAttributes_0() {
  assertDelete(Math, "acos");
}

function testMathAcosAttributes_1() {
  assertReadWrite(Math, "acos");
}

function testMathAcosAttributes_2() {
  assertDontEnum(Math, "acos");
}

function testMathAcosPrototypeValue_0() {
  assertUndefined(Math.acos.prototype);
  assertFalse(Math.acos.hasOwnProperty("prototype"));
}

function testMathAcosLength_0() {
  assertEquals(1, Math.acos.length);
}

function testMathAcosLengthAttributes_0() {
  assertDontDelete(Math.acos, "length");
}

function testMathAcosLengthAttributes_1() {
  assertReadOnly(Math.acos, "length");
}

function testMathAcosLengthAttributes_2() {
  assertDontEnum(Math.acos, "length");
}

function testMathAsinExistence_0() {
  assertDefined(Math.asin);
}

function testMathAsinAttributes_0() {
  assertDelete(Math, "asin");
}

function testMathAsinAttributes_1() {
  assertReadWrite(Math, "asin");
}

function testMathAsinAttributes_2() {
  assertDontEnum(Math, "asin");
}

function testMathAsinPrototypeValue_0() {
  assertUndefined(Math.asin.prototype);
  assertFalse(Math.asin.hasOwnProperty("prototype"));
}

function testMathAsinLength_0() {
  assertEquals(1, Math.asin.length);
}

function testMathAsinLengthAttributes_0() {
  assertDontDelete(Math.asin, "length");
}

function testMathAsinLengthAttributes_1() {
  assertReadOnly(Math.asin, "length");
}

function testMathAsinLengthAttributes_2() {
  assertDontEnum(Math.asin, "length");
}

function testMathAtanExistence_0() {
  assertDefined(Math.atan);
}

function testMathAtanAttributes_0() {
  assertDelete(Math, "atan");
}

function testMathAtanAttributes_1() {
  assertReadWrite(Math, "atan");
}

function testMathAtanAttributes_2() {
  assertDontEnum(Math, "atan");
}

function testMathAtanPrototypeValue_0() {
  assertUndefined(Math.atan.prototype);
  assertFalse(Math.atan.hasOwnProperty("prototype"));
}

function testMathAtanLength_0() {
  assertEquals(1, Math.atan.length);
}

function testMathAtanLengthAttributes_0() {
  assertDontDelete(Math.atan, "length");
}

function testMathAtanLengthAttributes_1() {
  assertReadOnly(Math.atan, "length");
}

function testMathAtanLengthAttributes_2() {
  assertDontEnum(Math.atan, "length");
}

function testMathAtan2Existence_0() {
  assertDefined(Math.atan2);
}

function testMathAtan2Attributes_0() {
  assertDelete(Math, "atan2");
}

function testMathAtan2Attributes_1() {
  assertReadWrite(Math, "atan2");
}

function testMathAtan2Attributes_2() {
  assertDontEnum(Math, "atan2");
}

function testMathAtan2PrototypeValue_0() {
  assertUndefined(Math.atan2.prototype);
  assertFalse(Math.atan2.hasOwnProperty("prototype"));
}

function testMathAtan2Length_0() {
  assertEquals(2, Math.atan2.length);
}

function testMathAtan2LengthAttributes_0() {
  assertDontDelete(Math.atan2, "length");
}

function testMathAtan2LengthAttributes_1() {
  assertReadOnly(Math.atan2, "length");
}

function testMathAtan2LengthAttributes_2() {
  assertDontEnum(Math.atan2, "length");
}

function testMathCeilExistence_0() {
  assertDefined(Math.ceil);
}

function testMathCeilAttributes_0() {
  assertDelete(Math, "ceil");
}

function testMathCeilAttributes_1() {
  assertReadWrite(Math, "ceil");
}

function testMathCeilAttributes_2() {
  assertDontEnum(Math, "ceil");
}

function testMathCeilPrototypeValue_0() {
  assertUndefined(Math.ceil.prototype);
  assertFalse(Math.ceil.hasOwnProperty("prototype"));
}

function testMathCeilLength_0() {
  assertEquals(1, Math.ceil.length);
}

function testMathCeilLengthAttributes_0() {
  assertDontDelete(Math.ceil, "length");
}

function testMathCeilLengthAttributes_1() {
  assertReadOnly(Math.ceil, "length");
}

function testMathCeilLengthAttributes_2() {
  assertDontEnum(Math.ceil, "length");
}

function testMathCosExistence_0() {
  assertDefined(Math.cos);
}

function testMathCosAttributes_0() {
  assertDelete(Math, "cos");
}

function testMathCosAttributes_1() {
  assertReadWrite(Math, "cos");
}

function testMathCosAttributes_2() {
  assertDontEnum(Math, "cos");
}

function testMathCosPrototypeValue_0() {
  assertUndefined(Math.cos.prototype);
  assertFalse(Math.cos.hasOwnProperty("prototype"));
}

function testMathCosLength_0() {
  assertEquals(1, Math.cos.length);
}

function testMathCosLengthAttributes_0() {
  assertDontDelete(Math.cos, "length");
}

function testMathCosLengthAttributes_1() {
  assertReadOnly(Math.cos, "length");
}

function testMathCosLengthAttributes_2() {
  assertDontEnum(Math.cos, "length");
}

function testMathExpExistence_0() {
  assertDefined(Math.exp);
}

function testMathExpAttributes_0() {
  assertDelete(Math, "exp");
}

function testMathExpAttributes_1() {
  assertReadWrite(Math, "exp");
}

function testMathExpAttributes_2() {
  assertDontEnum(Math, "exp");
}

function testMathExpPrototypeValue_0() {
  assertUndefined(Math.exp.prototype);
  assertFalse(Math.exp.hasOwnProperty("prototype"));
}

function testMathExpLength_0() {
  assertEquals(1, Math.exp.length);
}

function testMathExpLengthAttributes_0() {
  assertDontDelete(Math.exp, "length");
}

function testMathExpLengthAttributes_1() {
  assertReadOnly(Math.exp, "length");
}

function testMathExpLengthAttributes_2() {
  assertDontEnum(Math.exp, "length");
}

function testMathFloorExistence_0() {
  assertDefined(Math.floor);
}

function testMathFloorAttributes_0() {
  assertDelete(Math, "floor");
}

function testMathFloorAttributes_1() {
  assertReadWrite(Math, "floor");
}

function testMathFloorAttributes_2() {
  assertDontEnum(Math, "floor");
}

function testMathFloorPrototypeValue_0() {
  assertUndefined(Math.floor.prototype);
  assertFalse(Math.floor.hasOwnProperty("prototype"));
}

function testMathFloorLength_0() {
  assertEquals(1, Math.floor.length);
}

function testMathFloorLengthAttributes_0() {
  assertDontDelete(Math.floor, "length");
}

function testMathFloorLengthAttributes_1() {
  assertReadOnly(Math.floor, "length");
}

function testMathFloorLengthAttributes_2() {
  assertDontEnum(Math.floor, "length");
}

function testMathLogExistence_0() {
  assertDefined(Math.log);
}

function testMathLogAttributes_0() {
  assertDelete(Math, "log");
}

function testMathLogAttributes_1() {
  assertReadWrite(Math, "log");
}

function testMathLogAttributes_2() {
  assertDontEnum(Math, "log");
}

function testMathLogPrototypeValue_0() {
  assertUndefined(Math.log.prototype);
  assertFalse(Math.log.hasOwnProperty("prototype"));
}

function testMathLogLength_0() {
  assertEquals(1, Math.log.length);
}

function testMathLogLengthAttributes_0() {
  assertDontDelete(Math.log, "length");
}

function testMathLogLengthAttributes_1() {
  assertReadOnly(Math.log, "length");
}

function testMathLogLengthAttributes_2() {
  assertDontEnum(Math.log, "length");
}

function testMathMaxExistence_0() {
  assertDefined(Math.max);
}

function testMathMaxAttributes_0() {
  assertDelete(Math, "max");
}

function testMathMaxAttributes_1() {
  assertReadWrite(Math, "max");
}

function testMathMaxAttributes_2() {
  assertDontEnum(Math, "max");
}

function testMathMaxPrototypeValue_0() {
  assertUndefined(Math.max.prototype);
  assertFalse(Math.max.hasOwnProperty("prototype"));
}

function testMathMaxLength_0() {
  assertEquals(2, Math.max.length);
}

function testMathMaxLengthAttributes_0() {
  assertDontDelete(Math.max, "length");
}

function testMathMaxLengthAttributes_1() {
  assertReadOnly(Math.max, "length");
}

function testMathMaxLengthAttributes_2() {
  assertDontEnum(Math.max, "length");
}

function testMathMinExistence_0() {
  assertDefined(Math.min);
}

function testMathMinAttributes_0() {
  assertDelete(Math, "min");
}

function testMathMinAttributes_1() {
  assertReadWrite(Math, "min");
}

function testMathMinAttributes_2() {
  assertDontEnum(Math, "min");
}

function testMathMinPrototypeValue_0() {
  assertUndefined(Math.min.prototype);
  assertFalse(Math.min.hasOwnProperty("prototype"));
}

function testMathMinLength_0() {
  assertEquals(2, Math.min.length);
}

function testMathMinLengthAttributes_0() {
  assertDontDelete(Math.min, "length");
}

function testMathMinLengthAttributes_1() {
  assertReadOnly(Math.min, "length");
}

function testMathMinLengthAttributes_2() {
  assertDontEnum(Math.min, "length");
}

function testMathPowExistence_0() {
  assertDefined(Math.pow);
}

function testMathPowAttributes_0() {
  assertDelete(Math, "pow");
}

function testMathPowAttributes_1() {
  assertReadWrite(Math, "pow");
}

function testMathPowAttributes_2() {
  assertDontEnum(Math, "pow");
}

function testMathPowPrototypeValue_0() {
  assertUndefined(Math.pow.prototype);
  assertFalse(Math.pow.hasOwnProperty("prototype"));
}

function testMathPowLength_0() {
  assertEquals(2, Math.pow.length);
}

function testMathPowLengthAttributes_0() {
  assertDontDelete(Math.pow, "length");
}

function testMathPowLengthAttributes_1() {
  assertReadOnly(Math.pow, "length");
}

function testMathPowLengthAttributes_2() {
  assertDontEnum(Math.pow, "length");
}

function testMathRandomExistence_0() {
  assertDefined(Math.random);
}

function testMathRandomAttributes_0() {
  assertDelete(Math, "random");
}

function testMathRandomAttributes_1() {
  assertReadWrite(Math, "random");
}

function testMathRandomAttributes_2() {
  assertDontEnum(Math, "random");
}

function testMathRandomPrototypeValue_0() {
  assertUndefined(Math.random.prototype);
  assertFalse(Math.random.hasOwnProperty("prototype"));
}

function testMathRandomLength_0() {
  assertEquals(0, Math.random.length);
}

function testMathRandomLengthAttributes_0() {
  assertDontDelete(Math.random, "length");
}

function testMathRandomLengthAttributes_1() {
  assertReadOnly(Math.random, "length");
}

function testMathRandomLengthAttributes_2() {
  assertDontEnum(Math.random, "length");
}

function testMathRoundExistence_0() {
  assertDefined(Math.round);
}

function testMathRoundAttributes_0() {
  assertDelete(Math, "round");
}

function testMathRoundAttributes_1() {
  assertReadWrite(Math, "round");
}

function testMathRoundAttributes_2() {
  assertDontEnum(Math, "round");
}

function testMathRoundPrototypeValue_0() {
  assertUndefined(Math.round.prototype);
  assertFalse(Math.round.hasOwnProperty("prototype"));
}

function testMathRoundLength_0() {
  assertEquals(1, Math.round.length);
}

function testMathRoundLengthAttributes_0() {
  assertDontDelete(Math.round, "length");
}

function testMathRoundLengthAttributes_1() {
  assertReadOnly(Math.round, "length");
}

function testMathRoundLengthAttributes_2() {
  assertDontEnum(Math.round, "length");
}

function testMathSinExistence_0() {
  assertDefined(Math.sin);
}

function testMathSinAttributes_0() {
  assertDelete(Math, "sin");
}

function testMathSinAttributes_1() {
  assertReadWrite(Math, "sin");
}

function testMathSinAttributes_2() {
  assertDontEnum(Math, "sin");
}

function testMathSinPrototypeValue_0() {
  assertUndefined(Math.sin.prototype);
  assertFalse(Math.sin.hasOwnProperty("prototype"));
}

function testMathSinLength_0() {
  assertEquals(1, Math.sin.length);
}

function testMathSinLengthAttributes_0() {
  assertDontDelete(Math.sin, "length");
}

function testMathSinLengthAttributes_1() {
  assertReadOnly(Math.sin, "length");
}

function testMathSinLengthAttributes_2() {
  assertDontEnum(Math.sin, "length");
}

function testMathSqrtExistence_0() {
  assertDefined(Math.sqrt);
}

function testMathSqrtAttributes_0() {
  assertDelete(Math, "sqrt");
}

function testMathSqrtAttributes_1() {
  assertReadWrite(Math, "sqrt");
}

function testMathSqrtAttributes_2() {
  assertDontEnum(Math, "sqrt");
}

function testMathSqrtPrototypeValue_0() {
  assertUndefined(Math.sqrt.prototype);
  assertFalse(Math.sqrt.hasOwnProperty("prototype"));
}

function testMathSqrtLength_0() {
  assertEquals(1, Math.sqrt.length);
}

function testMathSqrtLengthAttributes_0() {
  assertDontDelete(Math.sqrt, "length");
}

function testMathSqrtLengthAttributes_1() {
  assertReadOnly(Math.sqrt, "length");
}

function testMathSqrtLengthAttributes_2() {
  assertDontEnum(Math.sqrt, "length");
}

function testMathTanExistence_0() {
  assertDefined(Math.tan);
}

function testMathTanAttributes_0() {
  assertDelete(Math, "tan");
}

function testMathTanAttributes_1() {
  assertReadWrite(Math, "tan");
}

function testMathTanAttributes_2() {
  assertDontEnum(Math, "tan");
}

function testMathTanPrototypeValue_0() {
  assertUndefined(Math.tan.prototype);
  assertFalse(Math.tan.hasOwnProperty("prototype"));
}

function testMathTanLength_0() {
  assertEquals(1, Math.tan.length);
}

function testMathTanLengthAttributes_0() {
  assertDontDelete(Math.tan, "length");
}

function testMathTanLengthAttributes_1() {
  assertReadOnly(Math.tan, "length");
}

function testMathTanLengthAttributes_2() {
  assertDontEnum(Math.tan, "length");
}