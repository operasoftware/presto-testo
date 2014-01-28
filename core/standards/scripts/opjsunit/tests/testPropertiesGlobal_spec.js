function testNaNExistence_0() {
  assertDefined(NaN);
}

function testNaNAttributes_0() {
  assertDontDelete(this, "NaN");
}

function testNaNAttributes_1() {
  assertReadOnly(this, "NaN");
}

function testNaNAttributes_2() {
  assertDontEnum(this, "NaN");
}

function testInfinityExistence_0() {
  assertDefined(Infinity);
}

function testInfinityAttributes_0() {
  assertDontDelete(this, "Infinity");
}

function testInfinityAttributes_1() {
  assertReadOnly(this, "Infinity");
}

function testInfinityAttributes_2() {
  assertDontEnum(this, "Infinity");
}

function testUndefinedExistence_0() {
  assertDefined(undefined);
}

function testUndefinedAttributes_0() {
  assertDontDelete(this, "undefined");
}

function testUndefinedAttributes_1() {
  assertReadOnly(this, "undefined");
}

function testUndefinedAttributes_2() {
  assertDontEnum(this, "undefined");
}

function testEvalExistence_0() {
  assertDefined(eval);
}

function testEvalAttributes_0() {
  assertDelete(this, "eval");
}

function testEvalAttributes_1() {
  assertReadWrite(this, "eval");
}

function testEvalAttributes_2() {
  assertDontEnum(this, "eval");
}

function testEvalPrototypeValue_0() {
  assertUndefined(eval.prototype);
  assertFalse(eval.hasOwnProperty("prototype"));
}

function testEvalLength_0() {
  assertEquals(1, eval.length);
}

function testEvalLengthAttributes_0() {
  assertDontDelete(eval, "length");
}

function testEvalLengthAttributes_1() {
  assertReadOnly(eval, "length");
}

function testEvalLengthAttributes_2() {
  assertDontEnum(eval, "length");
}

function testParseIntExistence_0() {
  assertDefined(parseInt);
}

function testParseIntAttributes_0() {
  assertDelete(this, "parseInt");
}

function testParseIntAttributes_1() {
  assertReadWrite(this, "parseInt");
}

function testParseIntAttributes_2() {
  assertDontEnum(this, "parseInt");
}

function testParseIntPrototypeValue_0() {
  assertUndefined(parseInt.prototype);
  assertFalse(parseInt.hasOwnProperty("prototype"));
}

function testParseIntLength_0() {
  assertEquals(2, parseInt.length);
}

function testParseIntLengthAttributes_0() {
  assertDontDelete(parseInt, "length");
}

function testParseIntLengthAttributes_1() {
  assertReadOnly(parseInt, "length");
}

function testParseIntLengthAttributes_2() {
  assertDontEnum(parseInt, "length");
}

function testParseFloatExistence_0() {
  assertDefined(parseFloat);
}

function testParseFloatAttributes_0() {
  assertDelete(this, "parseFloat");
}

function testParseFloatAttributes_1() {
  assertReadWrite(this, "parseFloat");
}

function testParseFloatAttributes_2() {
  assertDontEnum(this, "parseFloat");
}

function testParseFloatPrototypeValue_0() {
  assertUndefined(parseFloat.prototype);
  assertFalse(parseFloat.hasOwnProperty("prototype"));
}

function testParseFloatLength_0() {
  assertEquals(1, parseFloat.length);
}

function testParseFloatLengthAttributes_0() {
  assertDontDelete(parseFloat, "length");
}

function testParseFloatLengthAttributes_1() {
  assertReadOnly(parseFloat, "length");
}

function testParseFloatLengthAttributes_2() {
  assertDontEnum(parseFloat, "length");
}

function testIsNaNExistence_0() {
  assertDefined(isNaN);
}

function testIsNaNAttributes_0() {
  assertDelete(this, "isNaN");
}

function testIsNaNAttributes_1() {
  assertReadWrite(this, "isNaN");
}

function testIsNaNAttributes_2() {
  assertDontEnum(this, "isNaN");
}

function testIsNaNPrototypeValue_0() {
  assertUndefined(isNaN.prototype);
  assertFalse(isNaN.hasOwnProperty("prototype"));
}

function testIsNaNLength_0() {
  assertEquals(1, isNaN.length);
}

function testIsNaNLengthAttributes_0() {
  assertDontDelete(isNaN, "length");
}

function testIsNaNLengthAttributes_1() {
  assertReadOnly(isNaN, "length");
}

function testIsNaNLengthAttributes_2() {
  assertDontEnum(isNaN, "length");
}

function testIsFiniteExistence_0() {
  assertDefined(isFinite);
}

function testIsFiniteAttributes_0() {
  assertDelete(this, "isFinite");
}

function testIsFiniteAttributes_1() {
  assertReadWrite(this, "isFinite");
}

function testIsFiniteAttributes_2() {
  assertDontEnum(this, "isFinite");
}

function testIsFinitePrototypeValue_0() {
  assertUndefined(isFinite.prototype);
  assertFalse(isFinite.hasOwnProperty("prototype"));
}

function testIsFiniteLength_0() {
  assertEquals(1, isFinite.length);
}

function testIsFiniteLengthAttributes_0() {
  assertDontDelete(isFinite, "length");
}

function testIsFiniteLengthAttributes_1() {
  assertReadOnly(isFinite, "length");
}

function testIsFiniteLengthAttributes_2() {
  assertDontEnum(isFinite, "length");
}

function testDecodeURIExistence_0() {
  assertDefined(decodeURI);
}

function testDecodeURIAttributes_0() {
  assertDelete(this, "decodeURI");
}

function testDecodeURIAttributes_1() {
  assertReadWrite(this, "decodeURI");
}

function testDecodeURIAttributes_2() {
  assertDontEnum(this, "decodeURI");
}

function testDecodeURIPrototypeValue_0() {
  assertUndefined(decodeURI.prototype);
  assertFalse(decodeURI.hasOwnProperty("prototype"));
}

function testDecodeURILength_0() {
  assertEquals(1, decodeURI.length);
}

function testDecodeURILengthAttributes_0() {
  assertDontDelete(decodeURI, "length");
}

function testDecodeURILengthAttributes_1() {
  assertReadOnly(decodeURI, "length");
}

function testDecodeURILengthAttributes_2() {
  assertDontEnum(decodeURI, "length");
}

function testDecodeURIComponentExistence_0() {
  assertDefined(decodeURIComponent);
}

function testDecodeURIComponentAttributes_0() {
  assertDelete(this, "decodeURIComponent");
}

function testDecodeURIComponentAttributes_1() {
  assertReadWrite(this, "decodeURIComponent");
}

function testDecodeURIComponentAttributes_2() {
  assertDontEnum(this, "decodeURIComponent");
}

function testDecodeURIComponentPrototypeValue_0() {
  assertUndefined(decodeURIComponent.prototype);
  assertFalse(decodeURIComponent.hasOwnProperty("prototype"));
}

function testDecodeURIComponentLength_0() {
  assertEquals(1, decodeURIComponent.length);
}

function testDecodeURIComponentLengthAttributes_0() {
  assertDontDelete(decodeURIComponent, "length");
}

function testDecodeURIComponentLengthAttributes_1() {
  assertReadOnly(decodeURIComponent, "length");
}

function testDecodeURIComponentLengthAttributes_2() {
  assertDontEnum(decodeURIComponent, "length");
}

function testEncodeURIExistence_0() {
  assertDefined(encodeURI);
}

function testEncodeURIAttributes_0() {
  assertDelete(this, "encodeURI");
}

function testEncodeURIAttributes_1() {
  assertReadWrite(this, "encodeURI");
}

function testEncodeURIAttributes_2() {
  assertDontEnum(this, "encodeURI");
}

function testEncodeURIPrototypeValue_0() {
  assertUndefined(encodeURI.prototype);
  assertFalse(encodeURI.hasOwnProperty("prototype"));
}

function testEncodeURILength_0() {
  assertEquals(1, encodeURI.length);
}

function testEncodeURILengthAttributes_0() {
  assertDontDelete(encodeURI, "length");
}

function testEncodeURILengthAttributes_1() {
  assertReadOnly(encodeURI, "length");
}

function testEncodeURILengthAttributes_2() {
  assertDontEnum(encodeURI, "length");
}

function testEncodeURIComponentExistence_0() {
  assertDefined(encodeURIComponent);
}

function testEncodeURIComponentAttributes_0() {
  assertDelete(this, "encodeURIComponent");
}

function testEncodeURIComponentAttributes_1() {
  assertReadWrite(this, "encodeURIComponent");
}

function testEncodeURIComponentAttributes_2() {
  assertDontEnum(this, "encodeURIComponent");
}

function testEncodeURIComponentPrototypeValue_0() {
  assertUndefined(encodeURIComponent.prototype);
  assertFalse(encodeURIComponent.hasOwnProperty("prototype"));
}

function testEncodeURIComponentLength_0() {
  assertEquals(1, encodeURIComponent.length);
}

function testEncodeURIComponentLengthAttributes_0() {
  assertDontDelete(encodeURIComponent, "length");
}

function testEncodeURIComponentLengthAttributes_1() {
  assertReadOnly(encodeURIComponent, "length");
}

function testEncodeURIComponentLengthAttributes_2() {
  assertDontEnum(encodeURIComponent, "length");
}

function testObjectExistence_0() {
  assertDefined(Object);
}

function testObjectAttributes_0() {
  assertDelete(this, "Object");
}

function testObjectAttributes_1() {
  assertReadWrite(this, "Object");
}

function testObjectAttributes_2() {
  assertDontEnum(this, "Object");
}

function testObjectPrototypeValue_0() {
  assertEquals(Object.prototype, Object.prototype);
}

function testObjectLength_0() {
  assertEquals(1, Object.length);
}

function testObjectLengthAttributes_0() {
  assertDontDelete(Object, "length");
}

function testObjectLengthAttributes_1() {
  assertReadOnly(Object, "length");
}

function testObjectLengthAttributes_2() {
  assertDontEnum(Object, "length");
}

function testFunctionExistence_0() {
  assertDefined(Function);
}

function testFunctionAttributes_0() {
  assertDelete(this, "Function");
}

function testFunctionAttributes_1() {
  assertReadWrite(this, "Function");
}

function testFunctionAttributes_2() {
  assertDontEnum(this, "Function");
}

function testFunctionPrototypeValue_0() {
  assertEquals(Function.prototype, Function.prototype);
}

function testFunctionLength_0() {
  assertEquals(1, Function.length);
}

function testFunctionLengthAttributes_0() {
  assertDontDelete(Function, "length");
}

function testFunctionLengthAttributes_1() {
  assertReadOnly(Function, "length");
}

function testFunctionLengthAttributes_2() {
  assertDontEnum(Function, "length");
}

function testArrayExistence_0() {
  assertDefined(Array);
}

function testArrayAttributes_0() {
  assertDelete(this, "Array");
}

function testArrayAttributes_1() {
  assertReadWrite(this, "Array");
}

function testArrayAttributes_2() {
  assertDontEnum(this, "Array");
}

function testArrayPrototypeValue_0() {
  assertEquals(Array.prototype, Array.prototype);
}

function testArrayLength_0() {
  assertEquals(1, Array.length);
}

function testArrayLengthAttributes_0() {
  assertDontDelete(Array, "length");
}

function testArrayLengthAttributes_1() {
  assertReadOnly(Array, "length");
}

function testArrayLengthAttributes_2() {
  assertDontEnum(Array, "length");
}

function testStringExistence_0() {
  assertDefined(String);
}

function testStringAttributes_0() {
  assertDelete(this, "String");
}

function testStringAttributes_1() {
  assertReadWrite(this, "String");
}

function testStringAttributes_2() {
  assertDontEnum(this, "String");
}

function testStringPrototypeValue_0() {
  assertEquals(String.prototype, String.prototype);
}

function testStringLength_0() {
  assertEquals(1, String.length);
}

function testStringLengthAttributes_0() {
  assertDontDelete(String, "length");
}

function testStringLengthAttributes_1() {
  assertReadOnly(String, "length");
}

function testStringLengthAttributes_2() {
  assertDontEnum(String, "length");
}

function testBooleanExistence_0() {
  assertDefined(Boolean);
}

function testBooleanAttributes_0() {
  assertDelete(this, "Boolean");
}

function testBooleanAttributes_1() {
  assertReadWrite(this, "Boolean");
}

function testBooleanAttributes_2() {
  assertDontEnum(this, "Boolean");
}

function testBooleanPrototypeValue_0() {
  assertEquals(Boolean.prototype, Boolean.prototype);
}

function testBooleanLength_0() {
  assertEquals(1, Boolean.length);
}

function testBooleanLengthAttributes_0() {
  assertDontDelete(Boolean, "length");
}

function testBooleanLengthAttributes_1() {
  assertReadOnly(Boolean, "length");
}

function testBooleanLengthAttributes_2() {
  assertDontEnum(Boolean, "length");
}

function testNumberExistence_0() {
  assertDefined(Number);
}

function testNumberAttributes_0() {
  assertDelete(this, "Number");
}

function testNumberAttributes_1() {
  assertReadWrite(this, "Number");
}

function testNumberAttributes_2() {
  assertDontEnum(this, "Number");
}

function testNumberPrototypeValue_0() {
  assertEquals(Number.prototype, Number.prototype);
}

function testNumberLength_0() {
  assertEquals(1, Number.length);
}

function testNumberLengthAttributes_0() {
  assertDontDelete(Number, "length");
}

function testNumberLengthAttributes_1() {
  assertReadOnly(Number, "length");
}

function testNumberLengthAttributes_2() {
  assertDontEnum(Number, "length");
}

function testDateExistence_0() {
  assertDefined(Date);
}

function testDateAttributes_0() {
  assertDelete(this, "Date");
}

function testDateAttributes_1() {
  assertReadWrite(this, "Date");
}

function testDateAttributes_2() {
  assertDontEnum(this, "Date");
}

function testDatePrototypeValue_0() {
  assertEquals(Date.prototype, Date.prototype);
}

function testDateLength_0() {
  assertEquals(7, Date.length);
}

function testDateLengthAttributes_0() {
  assertDontDelete(Date, "length");
}

function testDateLengthAttributes_1() {
  assertReadOnly(Date, "length");
}

function testDateLengthAttributes_2() {
  assertDontEnum(Date, "length");
}

function testRegExpExistence_0() {
  assertDefined(RegExp);
}

function testRegExpAttributes_0() {
  assertDelete(this, "RegExp");
}

function testRegExpAttributes_1() {
  assertReadWrite(this, "RegExp");
}

function testRegExpAttributes_2() {
  assertDontEnum(this, "RegExp");
}

function testRegExpPrototypeValue_0() {
  assertEquals(RegExp.prototype, RegExp.prototype);
}

function testRegExpLength_0() {
  assertEquals(2, RegExp.length);
}

function testRegExpLengthAttributes_0() {
  assertDontDelete(RegExp, "length");
}

function testRegExpLengthAttributes_1() {
  assertReadOnly(RegExp, "length");
}

function testRegExpLengthAttributes_2() {
  assertDontEnum(RegExp, "length");
}

function testErrorExistence_0() {
  assertDefined(Error);
}

function testErrorAttributes_0() {
  assertDelete(this, "Error");
}

function testErrorAttributes_1() {
  assertReadWrite(this, "Error");
}

function testErrorAttributes_2() {
  assertDontEnum(this, "Error");
}

function testErrorPrototypeValue_0() {
  assertEquals(Error.prototype, Error.prototype);
}

function testErrorLength_0() {
  assertEquals(1, Error.length);
}

function testErrorLengthAttributes_0() {
  assertDontDelete(Error, "length");
}

function testErrorLengthAttributes_1() {
  assertReadOnly(Error, "length");
}

function testErrorLengthAttributes_2() {
  assertDontEnum(Error, "length");
}

function testEvalErrorExistence_0() {
  assertDefined(EvalError);
}

function testEvalErrorAttributes_0() {
  assertDelete(this, "EvalError");
}

function testEvalErrorAttributes_1() {
  assertReadWrite(this, "EvalError");
}

function testEvalErrorAttributes_2() {
  assertDontEnum(this, "EvalError");
}

function testEvalErrorPrototypeValue_0() {
  assertEquals(EvalError.prototype, EvalError.prototype);
}

function testEvalErrorLength_0() {
  assertEquals(1, EvalError.length);
}

function testEvalErrorLengthAttributes_0() {
  assertDontDelete(EvalError, "length");
}

function testEvalErrorLengthAttributes_1() {
  assertReadOnly(EvalError, "length");
}

function testEvalErrorLengthAttributes_2() {
  assertDontEnum(EvalError, "length");
}

function testRangeErrorExistence_0() {
  assertDefined(RangeError);
}

function testRangeErrorAttributes_0() {
  assertDelete(this, "RangeError");
}

function testRangeErrorAttributes_1() {
  assertReadWrite(this, "RangeError");
}

function testRangeErrorAttributes_2() {
  assertDontEnum(this, "RangeError");
}

function testRangeErrorPrototypeValue_0() {
  assertEquals(RangeError.prototype, RangeError.prototype);
}

function testRangeErrorLength_0() {
  assertEquals(1, RangeError.length);
}

function testRangeErrorLengthAttributes_0() {
  assertDontDelete(RangeError, "length");
}

function testRangeErrorLengthAttributes_1() {
  assertReadOnly(RangeError, "length");
}

function testRangeErrorLengthAttributes_2() {
  assertDontEnum(RangeError, "length");
}

function testReferenceErrorExistence_0() {
  assertDefined(ReferenceError);
}

function testReferenceErrorAttributes_0() {
  assertDelete(this, "ReferenceError");
}

function testReferenceErrorAttributes_1() {
  assertReadWrite(this, "ReferenceError");
}

function testReferenceErrorAttributes_2() {
  assertDontEnum(this, "ReferenceError");
}

function testReferenceErrorPrototypeValue_0() {
  assertEquals(ReferenceError.prototype, ReferenceError.prototype);
}

function testReferenceErrorLength_0() {
  assertEquals(1, ReferenceError.length);
}

function testReferenceErrorLengthAttributes_0() {
  assertDontDelete(ReferenceError, "length");
}

function testReferenceErrorLengthAttributes_1() {
  assertReadOnly(ReferenceError, "length");
}

function testReferenceErrorLengthAttributes_2() {
  assertDontEnum(ReferenceError, "length");
}

function testSyntaxErrorExistence_0() {
  assertDefined(SyntaxError);
}

function testSyntaxErrorAttributes_0() {
  assertDelete(this, "SyntaxError");
}

function testSyntaxErrorAttributes_1() {
  assertReadWrite(this, "SyntaxError");
}

function testSyntaxErrorAttributes_2() {
  assertDontEnum(this, "SyntaxError");
}

function testSyntaxErrorPrototypeValue_0() {
  assertEquals(SyntaxError.prototype, SyntaxError.prototype);
}

function testSyntaxErrorLength_0() {
  assertEquals(1, SyntaxError.length);
}

function testSyntaxErrorLengthAttributes_0() {
  assertDontDelete(SyntaxError, "length");
}

function testSyntaxErrorLengthAttributes_1() {
  assertReadOnly(SyntaxError, "length");
}

function testSyntaxErrorLengthAttributes_2() {
  assertDontEnum(SyntaxError, "length");
}

function testTypeErrorExistence_0() {
  assertDefined(TypeError);
}

function testTypeErrorAttributes_0() {
  assertDelete(this, "TypeError");
}

function testTypeErrorAttributes_1() {
  assertReadWrite(this, "TypeError");
}

function testTypeErrorAttributes_2() {
  assertDontEnum(this, "TypeError");
}

function testTypeErrorPrototypeValue_0() {
  assertEquals(TypeError.prototype, TypeError.prototype);
}

function testTypeErrorLength_0() {
  assertEquals(1, TypeError.length);
}

function testTypeErrorLengthAttributes_0() {
  assertDontDelete(TypeError, "length");
}

function testTypeErrorLengthAttributes_1() {
  assertReadOnly(TypeError, "length");
}

function testTypeErrorLengthAttributes_2() {
  assertDontEnum(TypeError, "length");
}

function testURIErrorExistence_0() {
  assertDefined(URIError);
}

function testURIErrorAttributes_0() {
  assertDelete(this, "URIError");
}

function testURIErrorAttributes_1() {
  assertReadWrite(this, "URIError");
}

function testURIErrorAttributes_2() {
  assertDontEnum(this, "URIError");
}

function testURIErrorPrototypeValue_0() {
  assertEquals(URIError.prototype, URIError.prototype);
}

function testURIErrorLength_0() {
  assertEquals(1, URIError.length);
}

function testURIErrorLengthAttributes_0() {
  assertDontDelete(URIError, "length");
}

function testURIErrorLengthAttributes_1() {
  assertReadOnly(URIError, "length");
}

function testURIErrorLengthAttributes_2() {
  assertDontEnum(URIError, "length");
}