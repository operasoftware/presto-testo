//opjsunit: run_tests_individually

function testInstancePropertiesGlobal_1() {
  o = this;
  var p = "SyntaxError";
  assertDefined(o[p]);
  assertEquals(o.SyntaxError, o[p]);
  assertEquals(o["SyntaxError"], o[p]);
}

function testInstancePropertiesGlobal_2() {
  o = this;
  var p = "parseInt";
  assertDefined(o[p]);
  assertEquals(o.parseInt, o[p]);
  assertEquals(o["parseInt"], o[p]);
}

function testInstancePropertiesGlobal_3() {
  o = this;
  var p = "RegExp";
  assertDefined(o[p]);
  assertEquals(o.RegExp, o[p]);
  assertEquals(o["RegExp"], o[p]);
}

function testInstancePropertiesGlobal_4() {
  o = this;
  var p = "encodeURI";
  assertDefined(o[p]);
  assertEquals(o.encodeURI, o[p]);
  assertEquals(o["encodeURI"], o[p]);
}

function testInstancePropertiesGlobal_5() {
  o = this;
  var p = "Math";
  assertDefined(o[p]);
  assertEquals(o.Math, o[p]);
  assertEquals(o["Math"], o[p]);
}

function testInstancePropertiesGlobal_6() {
  o = this;
  var p = "Function";
  assertDefined(o[p]);
  assertEquals(o.Function, o[p]);
  assertEquals(o["Function"], o[p]);
}

function testInstancePropertiesGlobal_7() {
  o = this;
  var p = "isNaN";
  assertDefined(o[p]);
  assertEquals(o.isNaN, o[p]);
  assertEquals(o["isNaN"], o[p]);
}

function testInstancePropertiesGlobal_8() {
  o = this;
  var p = "Infinity";
  assertDefined(o[p]);
  assertEquals(o.Infinity, o[p]);
  assertEquals(o["Infinity"], o[p]);
}

function testInstancePropertiesGlobal_9() {
  o = this;
  var p = "String";
  assertDefined(o[p]);
  assertEquals(o.String, o[p]);
  assertEquals(o["String"], o[p]);
}

function testInstancePropertiesGlobal_10() {
  o = this;
  var p = "Object";
  assertDefined(o[p]);
  assertEquals(o.Object, o[p]);
  assertEquals(o["Object"], o[p]);
}

function testInstancePropertiesGlobal_11() {
  o = this;
  var p = "NaN";
  assertDefined(o[p]);
  assertEquals(o.NaN, o[p]);
  assertEquals(o["NaN"], o[p]);
}

function testInstancePropertiesGlobal_12() {
  o = this;
  var p = "ReferenceError";
  assertDefined(o[p]);
  assertEquals(o.ReferenceError, o[p]);
  assertEquals(o["ReferenceError"], o[p]);
}

function testInstancePropertiesGlobal_13() {
  o = this;
  var p = "RangeError";
  assertDefined(o[p]);
  assertEquals(o.RangeError, o[p]);
  assertEquals(o["RangeError"], o[p]);
}

function testInstancePropertiesGlobal_14() {
  o = this;
  var p = "Boolean";
  assertDefined(o[p]);
  assertEquals(o.Boolean, o[p]);
  assertEquals(o["Boolean"], o[p]);
}

function testInstancePropertiesGlobal_15() {
  o = this;
  var p = "Date";
  assertDefined(o[p]);
  assertEquals(o.Date, o[p]);
  assertEquals(o["Date"], o[p]);
}

function testInstancePropertiesGlobal_16() {
  o = this;
  var p = "parseFloat";
  assertDefined(o[p]);
  assertEquals(o.parseFloat, o[p]);
  assertEquals(o["parseFloat"], o[p]);
}

function testInstancePropertiesGlobal_17() {
  o = this;
  var p = "eval";
  assertDefined(o[p]);
  assertEquals(o.eval, o[p]);
  assertEquals(o["eval"], o[p]);
}

function testInstancePropertiesGlobal_18() {
  o = this;
  var p = "Error";
  assertDefined(o[p]);
  assertEquals(o.Error, o[p]);
  assertEquals(o["Error"], o[p]);
}

function testInstancePropertiesGlobal_19() {
  o = this;
  var p = "isFinite";
  assertDefined(o[p]);
  assertEquals(o.isFinite, o[p]);
  assertEquals(o["isFinite"], o[p]);
}

function testInstancePropertiesGlobal_20() {
  o = this;
  var p = "TypeError";
  assertDefined(o[p]);
  assertEquals(o.TypeError, o[p]);
  assertEquals(o["TypeError"], o[p]);
}

function testInstancePropertiesGlobal_21() {
  o = this;
  var p = "decodeURI";
  assertDefined(o[p]);
  assertEquals(o.decodeURI, o[p]);
  assertEquals(o["decodeURI"], o[p]);
}

function testInstancePropertiesGlobal_22() {
  o = this;
  var p = "Number";
  assertDefined(o[p]);
  assertEquals(o.Number, o[p]);
  assertEquals(o["Number"], o[p]);
}

function testInstancePropertiesGlobal_23() {
  o = this;
  var p = "decodeURIComponent";
  assertDefined(o[p]);
  assertEquals(o.decodeURIComponent, o[p]);
  assertEquals(o["decodeURIComponent"], o[p]);
}

function testInstancePropertiesGlobal_24() {
  o = this;
  var p = "EvalError";
  assertDefined(o[p]);
  assertEquals(o.EvalError, o[p]);
  assertEquals(o["EvalError"], o[p]);
}

function testInstancePropertiesGlobal_25() {
  o = this;
  var p = "Array";
  assertDefined(o[p]);
  assertEquals(o.Array, o[p]);
  assertEquals(o["Array"], o[p]);
}

function testInstancePropertiesGlobal_26() {
  o = this;
  var p = "encodeURIComponent";
  assertDefined(o[p]);
  assertEquals(o.encodeURIComponent, o[p]);
  assertEquals(o["encodeURIComponent"], o[p]);
}

function testInstancePropertiesGlobal_27() {
  o = this;
  var p = "URIError";
  assertDefined(o[p]);
  assertEquals(o.URIError, o[p]);
  assertEquals(o["URIError"], o[p]);
}

function testInstancePropertiesGlobal_28() {
  o = this;
  p = "SyntaxError";
  assertDefined(o[p]);
  assertEquals(o.SyntaxError, o[p]);
  assertEquals(o["SyntaxError"], o[p]);
}

function testInstancePropertiesGlobal_29() {
  o = this;
  p = "parseInt";
  assertDefined(o[p]);
  assertEquals(o.parseInt, o[p]);
  assertEquals(o["parseInt"], o[p]);
}

function testInstancePropertiesGlobal_30() {
  o = this;
  p = "RegExp";
  assertDefined(o[p]);
  assertEquals(o.RegExp, o[p]);
  assertEquals(o["RegExp"], o[p]);
}

function testInstancePropertiesGlobal_31() {
  o = this;
  p = "encodeURI";
  assertDefined(o[p]);
  assertEquals(o.encodeURI, o[p]);
  assertEquals(o["encodeURI"], o[p]);
}

function testInstancePropertiesGlobal_32() {
  o = this;
  p = "Math";
  assertDefined(o[p]);
  assertEquals(o.Math, o[p]);
  assertEquals(o["Math"], o[p]);
}

function testInstancePropertiesGlobal_33() {
  o = this;
  p = "Function";
  assertDefined(o[p]);
  assertEquals(o.Function, o[p]);
  assertEquals(o["Function"], o[p]);
}

function testInstancePropertiesGlobal_34() {
  o = this;
  p = "isNaN";
  assertDefined(o[p]);
  assertEquals(o.isNaN, o[p]);
  assertEquals(o["isNaN"], o[p]);
}

function testInstancePropertiesGlobal_35() {
  o = this;
  p = "Infinity";
  assertDefined(o[p]);
  assertEquals(o.Infinity, o[p]);
  assertEquals(o["Infinity"], o[p]);
}

function testInstancePropertiesGlobal_36() {
  o = this;
  p = "String";
  assertDefined(o[p]);
  assertEquals(o.String, o[p]);
  assertEquals(o["String"], o[p]);
}

function testInstancePropertiesGlobal_37() {
  o = this;
  p = "Object";
  assertDefined(o[p]);
  assertEquals(o.Object, o[p]);
  assertEquals(o["Object"], o[p]);
}

function testInstancePropertiesGlobal_38() {
  o = this;
  p = "NaN";
  assertDefined(o[p]);
  assertEquals(o.NaN, o[p]);
  assertEquals(o["NaN"], o[p]);
}

function testInstancePropertiesGlobal_39() {
  o = this;
  p = "ReferenceError";
  assertDefined(o[p]);
  assertEquals(o.ReferenceError, o[p]);
  assertEquals(o["ReferenceError"], o[p]);
}

function testInstancePropertiesGlobal_40() {
  o = this;
  p = "RangeError";
  assertDefined(o[p]);
  assertEquals(o.RangeError, o[p]);
  assertEquals(o["RangeError"], o[p]);
}

function testInstancePropertiesGlobal_41() {
  o = this;
  p = "Boolean";
  assertDefined(o[p]);
  assertEquals(o.Boolean, o[p]);
  assertEquals(o["Boolean"], o[p]);
}

function testInstancePropertiesGlobal_42() {
  o = this;
  p = "Date";
  assertDefined(o[p]);
  assertEquals(o.Date, o[p]);
  assertEquals(o["Date"], o[p]);
}

function testInstancePropertiesGlobal_43() {
  o = this;
  p = "parseFloat";
  assertDefined(o[p]);
  assertEquals(o.parseFloat, o[p]);
  assertEquals(o["parseFloat"], o[p]);
}

function testInstancePropertiesGlobal_44() {
  o = this;
  p = "eval";
  assertDefined(o[p]);
  assertEquals(o.eval, o[p]);
  assertEquals(o["eval"], o[p]);
}

function testInstancePropertiesGlobal_45() {
  o = this;
  p = "Error";
  assertDefined(o[p]);
  assertEquals(o.Error, o[p]);
  assertEquals(o["Error"], o[p]);
}

function testInstancePropertiesGlobal_46() {
  o = this;
  p = "isFinite";
  assertDefined(o[p]);
  assertEquals(o.isFinite, o[p]);
  assertEquals(o["isFinite"], o[p]);
}

function testInstancePropertiesGlobal_47() {
  o = this;
  p = "TypeError";
  assertDefined(o[p]);
  assertEquals(o.TypeError, o[p]);
  assertEquals(o["TypeError"], o[p]);
}

function testInstancePropertiesGlobal_48() {
  o = this;
  p = "decodeURI";
  assertDefined(o[p]);
  assertEquals(o.decodeURI, o[p]);
  assertEquals(o["decodeURI"], o[p]);
}

function testInstancePropertiesGlobal_49() {
  o = this;
  p = "Number";
  assertDefined(o[p]);
  assertEquals(o.Number, o[p]);
  assertEquals(o["Number"], o[p]);
}

function testInstancePropertiesGlobal_50() {
  o = this;
  p = "decodeURIComponent";
  assertDefined(o[p]);
  assertEquals(o.decodeURIComponent, o[p]);
  assertEquals(o["decodeURIComponent"], o[p]);
}

function testInstancePropertiesGlobal_51() {
  o = this;
  p = "EvalError";
  assertDefined(o[p]);
  assertEquals(o.EvalError, o[p]);
  assertEquals(o["EvalError"], o[p]);
}

function testInstancePropertiesGlobal_52() {
  o = this;
  p = "Array";
  assertDefined(o[p]);
  assertEquals(o.Array, o[p]);
  assertEquals(o["Array"], o[p]);
}

function testInstancePropertiesGlobal_53() {
  o = this;
  p = "encodeURIComponent";
  assertDefined(o[p]);
  assertEquals(o.encodeURIComponent, o[p]);
  assertEquals(o["encodeURIComponent"], o[p]);
}

function testInstancePropertiesGlobal_54() {
  o = this;
  p = "URIError";
  assertDefined(o[p]);
  assertEquals(o.URIError, o[p]);
  assertEquals(o["URIError"], o[p]);
}

function testPropertiesObject_1() {
  var p = "propertyIsEnumerable";
  assertDefined(Object.prototype[p]);
  assertEquals(Object.prototype.propertyIsEnumerable, Object.prototype[p]);
}

function testPropertiesObject_2() {
  var p = "toLocaleString";
  assertDefined(Object.prototype[p]);
  assertEquals(Object.prototype.toLocaleString, Object.prototype[p]);
}

function testPropertiesObject_3() {
  var p = "isPrototypeOf";
  assertDefined(Object.prototype[p]);
  assertEquals(Object.prototype.isPrototypeOf, Object.prototype[p]);
}

function testPropertiesObject_4() {
  var p = "valueOf";
  assertDefined(Object.prototype[p]);
  assertEquals(Object.prototype.valueOf, Object.prototype[p]);
}

function testPropertiesObject_5() {
  var p = "toString";
  assertDefined(Object.prototype[p]);
  assertEquals(Object.prototype.toString, Object.prototype[p]);
}

function testPropertiesObject_6() {
  var p = "hasOwnProperty";
  assertDefined(Object.prototype[p]);
  assertEquals(Object.prototype.hasOwnProperty, Object.prototype[p]);
}

function testPropertiesObject_7() {
  var p = "prototype";
  assertDefined(Object[p]);
  assertEquals(Object.prototype, Object[p]);
}

function testPropertiesObject_8() {
  p = "propertyIsEnumerable";
  assertDefined(Object.prototype[p]);
  assertEquals(Object.prototype.propertyIsEnumerable, Object.prototype[p]);
}

function testPropertiesObject_9() {
  p = "toLocaleString";
  assertDefined(Object.prototype[p]);
  assertEquals(Object.prototype.toLocaleString, Object.prototype[p]);
}

function testPropertiesObject_10() {
  p = "isPrototypeOf";
  assertDefined(Object.prototype[p]);
  assertEquals(Object.prototype.isPrototypeOf, Object.prototype[p]);
}

function testPropertiesObject_11() {
  p = "valueOf";
  assertDefined(Object.prototype[p]);
  assertEquals(Object.prototype.valueOf, Object.prototype[p]);
}

function testPropertiesObject_12() {
  p = "toString";
  assertDefined(Object.prototype[p]);
  assertEquals(Object.prototype.toString, Object.prototype[p]);
}

function testPropertiesObject_13() {
  p = "hasOwnProperty";
  assertDefined(Object.prototype[p]);
  assertEquals(Object.prototype.hasOwnProperty, Object.prototype[p]);
}

function testPropertiesObject_14() {
  p = "prototype";
  assertDefined(Object[p]);
  assertEquals(Object.prototype, Object[p]);
}

function testInstancePropertiesObject_1() {
  o = {};
  var p = "propertyIsEnumerable";
  assertDefined(o[p]);
  assertEquals(o.propertyIsEnumerable, o[p]);
  assertEquals(o["propertyIsEnumerable"], o[p]);
}

function testInstancePropertiesObject_2() {
  o = {};
  var p = "toLocaleString";
  assertDefined(o[p]);
  assertEquals(o.toLocaleString, o[p]);
  assertEquals(o["toLocaleString"], o[p]);
}

function testInstancePropertiesObject_3() {
  o = {};
  var p = "isPrototypeOf";
  assertDefined(o[p]);
  assertEquals(o.isPrototypeOf, o[p]);
  assertEquals(o["isPrototypeOf"], o[p]);
}

function testInstancePropertiesObject_4() {
  o = {};
  var p = "valueOf";
  assertDefined(o[p]);
  assertEquals(o.valueOf, o[p]);
  assertEquals(o["valueOf"], o[p]);
}

function testInstancePropertiesObject_5() {
  o = {};
  var p = "toString";
  assertDefined(o[p]);
  assertEquals(o.toString, o[p]);
  assertEquals(o["toString"], o[p]);
}

function testInstancePropertiesObject_6() {
  o = {};
  var p = "hasOwnProperty";
  assertDefined(o[p]);
  assertEquals(o.hasOwnProperty, o[p]);
  assertEquals(o["hasOwnProperty"], o[p]);
}

function testInstancePropertiesObject_7() {
  var o = {};
  assertUndefined(o["prototype"]);
}

function testInstancePropertiesObject_8() {
  o = {};
  p = "propertyIsEnumerable";
  assertDefined(o[p]);
  assertEquals(o.propertyIsEnumerable, o[p]);
  assertEquals(o["propertyIsEnumerable"], o[p]);
}

function testInstancePropertiesObject_9() {
  o = {};
  p = "toLocaleString";
  assertDefined(o[p]);
  assertEquals(o.toLocaleString, o[p]);
  assertEquals(o["toLocaleString"], o[p]);
}

function testInstancePropertiesObject_10() {
  o = {};
  p = "isPrototypeOf";
  assertDefined(o[p]);
  assertEquals(o.isPrototypeOf, o[p]);
  assertEquals(o["isPrototypeOf"], o[p]);
}

function testInstancePropertiesObject_11() {
  o = {};
  p = "valueOf";
  assertDefined(o[p]);
  assertEquals(o.valueOf, o[p]);
  assertEquals(o["valueOf"], o[p]);
}

function testInstancePropertiesObject_12() {
  o = {};
  p = "toString";
  assertDefined(o[p]);
  assertEquals(o.toString, o[p]);
  assertEquals(o["toString"], o[p]);
}

function testInstancePropertiesObject_13() {
  o = {};
  p = "hasOwnProperty";
  assertDefined(o[p]);
  assertEquals(o.hasOwnProperty, o[p]);
  assertEquals(o["hasOwnProperty"], o[p]);
}

function testInstancePropertiesObject_14() {
  o = {};
  assertUndefined(o["prototype"]);
}

function testPropertiesFunction_1() {
  var p = "call";
  assertDefined(Function.prototype[p]);
  assertEquals(Function.prototype.call, Function.prototype[p]);
}

function testPropertiesFunction_2() {
  var p = "apply";
  assertDefined(Function.prototype[p]);
  assertEquals(Function.prototype.apply, Function.prototype[p]);
}

function testPropertiesFunction_3() {
  var p = "constructor";
  assertDefined(Function.prototype[p]);
  assertEquals(Function.prototype.constructor, Function.prototype[p]);
}

function testPropertiesFunction_4() {
  var p = "toString";
  assertDefined(Function.prototype[p]);
  assertEquals(Function.prototype.toString, Function.prototype[p]);
}

function testPropertiesFunction_5() {
  var p = "length";
  assertDefined(Function[p]);
  assertEquals(Function.length, Function[p]);
}

function testPropertiesFunction_6() {
  var p = "prototype";
  assertDefined(Function[p]);
  assertEquals(Function.prototype, Function[p]);
}

function testPropertiesFunction_7() {
  p = "call";
  assertDefined(Function.prototype[p]);
  assertEquals(Function.prototype.call, Function.prototype[p]);
}

function testPropertiesFunction_8() {
  p = "apply";
  assertDefined(Function.prototype[p]);
  assertEquals(Function.prototype.apply, Function.prototype[p]);
}

function testPropertiesFunction_9() {
  p = "constructor";
  assertDefined(Function.prototype[p]);
  assertEquals(Function.prototype.constructor, Function.prototype[p]);
}

function testPropertiesFunction_10() {
  p = "toString";
  assertDefined(Function.prototype[p]);
  assertEquals(Function.prototype.toString, Function.prototype[p]);
}

function testPropertiesFunction_11() {
  p = "length";
  assertDefined(Function[p]);
  assertEquals(Function.length, Function[p]);
}

function testPropertiesFunction_12() {
  p = "prototype";
  assertDefined(Function[p]);
  assertEquals(Function.prototype, Function[p]);
}

function testInstancePropertiesFunction_1() {
  o = new Function();
  var p = "length";
  assertDefined(o[p]);
  assertEquals(o.length, o[p]);
  assertEquals(o["length"], o[p]);
}

function testInstancePropertiesFunction_2() {
  o = new Function();
  var p = "prototype";
  assertDefined(o[p]);
  assertEquals(o.prototype, o[p]);
  assertEquals(o["prototype"], o[p]);
}

function testInstancePropertiesFunction_3() {
  o = new Function();
  var p = "call";
  assertDefined(o[p]);
  assertEquals(o.call, o[p]);
  assertEquals(o["call"], o[p]);
}

function testInstancePropertiesFunction_4() {
  o = new Function();
  var p = "apply";
  assertDefined(o[p]);
  assertEquals(o.apply, o[p]);
  assertEquals(o["apply"], o[p]);
}

function testInstancePropertiesFunction_5() {
  o = new Function();
  var p = "constructor";
  assertDefined(o[p]);
  assertEquals(o.constructor, o[p]);
  assertEquals(o["constructor"], o[p]);
}

function testInstancePropertiesFunction_6() {
  o = new Function();
  var p = "toString";
  assertDefined(o[p]);
  assertEquals(o.toString, o[p]);
  assertEquals(o["toString"], o[p]);
}

function testInstancePropertiesFunction_9() {
  o = new Function();
  p = "length";
  assertDefined(o[p]);
  assertEquals(o.length, o[p]);
  assertEquals(o["length"], o[p]);
}

function testInstancePropertiesFunction_10() {
  o = new Function();
  p = "prototype";
  assertDefined(o[p]);
  assertEquals(o.prototype, o[p]);
  assertEquals(o["prototype"], o[p]);
}

function testInstancePropertiesFunction_11() {
  o = new Function();
  p = "call";
  assertDefined(o[p]);
  assertEquals(o.call, o[p]);
  assertEquals(o["call"], o[p]);
}

function testInstancePropertiesFunction_12() {
  o = new Function();
  p = "apply";
  assertDefined(o[p]);
  assertEquals(o.apply, o[p]);
  assertEquals(o["apply"], o[p]);
}

function testInstancePropertiesFunction_13() {
  o = new Function();
  p = "constructor";
  assertDefined(o[p]);
  assertEquals(o.constructor, o[p]);
  assertEquals(o["constructor"], o[p]);
}

function testInstancePropertiesFunction_14() {
  o = new Function();
  p = "toString";
  assertDefined(o[p]);
  assertEquals(o.toString, o[p]);
  assertEquals(o["toString"], o[p]);
}

function testPropertiesArray_1() {
  var p = "[[index]]";
  assertUndefined(Array[p]);
}

function testPropertiesArray_2() {
  var p = "toLocaleString";
  assertDefined(Array.prototype[p]);
  assertEquals(Array.prototype.toLocaleString, Array.prototype[p]);
}

function testPropertiesArray_3() {
  var p = "reduce";
  assertDefined(Array.prototype[p]);
  assertEquals(Array.prototype.reduce, Array.prototype[p]);
}

function testPropertiesArray_4() {
  var p = "pop";
  assertDefined(Array.prototype[p]);
  assertEquals(Array.prototype.pop, Array.prototype[p]);
}

function testPropertiesArray_5() {
  var p = "slice";
  assertDefined(Array.prototype[p]);
  assertEquals(Array.prototype.slice, Array.prototype[p]);
}

function testPropertiesArray_6() {
  var p = "unshift";
  assertDefined(Array.prototype[p]);
  assertEquals(Array.prototype.unshift, Array.prototype[p]);
}

function testPropertiesArray_7() {
  var p = "toString";
  assertDefined(Array.prototype[p]);
  assertEquals(Array.prototype.toString, Array.prototype[p]);
}

function testPropertiesArray_8() {
  var p = "sort";
  assertDefined(Array.prototype[p]);
  assertEquals(Array.prototype.sort, Array.prototype[p]);
}

function testPropertiesArray_9() {
  var p = "map";
  assertDefined(Array.prototype[p]);
  assertEquals(Array.prototype.map, Array.prototype[p]);
}

function testPropertiesArray_10() {
  var p = "lastIndexOf";
  assertDefined(Array.prototype[p]);
  assertEquals(Array.prototype.lastIndexOf, Array.prototype[p]);
}

function testPropertiesArray_11() {
  var p = "reduceRight";
  assertDefined(Array.prototype[p]);
  assertEquals(Array.prototype.reduceRight, Array.prototype[p]);
}

function testPropertiesArray_12() {
  var p = "indexOf";
  assertDefined(Array.prototype[p]);
  assertEquals(Array.prototype.indexOf, Array.prototype[p]);
}

function testPropertiesArray_13() {
  var p = "some";
  assertDefined(Array.prototype[p]);
  assertEquals(Array.prototype.some, Array.prototype[p]);
}

function testPropertiesArray_14() {
  var p = "every";
  assertDefined(Array.prototype[p]);
  assertEquals(Array.prototype.every, Array.prototype[p]);
}

function testPropertiesArray_15() {
  var p = "forEach";
  assertDefined(Array.prototype[p]);
  assertEquals(Array.prototype.forEach, Array.prototype[p]);
}

function testPropertiesArray_16() {
  var p = "splice";
  assertDefined(Array.prototype[p]);
  assertEquals(Array.prototype.splice, Array.prototype[p]);
}

function testPropertiesArray_17() {
  var p = "concat";
  assertDefined(Array.prototype[p]);
  assertEquals(Array.prototype.concat, Array.prototype[p]);
}

function testPropertiesArray_18() {
  var p = "join";
  assertDefined(Array.prototype[p]);
  assertEquals(Array.prototype.join, Array.prototype[p]);
}

function testPropertiesArray_19() {
  var p = "reverse";
  assertDefined(Array.prototype[p]);
  assertEquals(Array.prototype.reverse, Array.prototype[p]);
}

function testPropertiesArray_20() {
  var p = "shift";
  assertDefined(Array.prototype[p]);
  assertEquals(Array.prototype.shift, Array.prototype[p]);
}

function testPropertiesArray_21() {
  var p = "filter";
  assertDefined(Array.prototype[p]);
  assertEquals(Array.prototype.filter, Array.prototype[p]);
}

function testPropertiesArray_22() {
  var p = "constructor";
  assertDefined(Array.prototype[p]);
  assertEquals(Array.prototype.constructor, Array.prototype[p]);
}

function testPropertiesArray_23() {
  var p = "push";
  assertDefined(Array.prototype[p]);
  assertEquals(Array.prototype.push, Array.prototype[p]);
}

function testPropertiesArray_24() {
  var p = "isArray";
  assertDefined(Array[p]);
  assertEquals(Array.isArray, Array[p]);
}

function testPropertiesArray_25() {
  var p = "length";
  assertDefined(Array[p]);
  assertEquals(Array.length, Array[p]);
}

function testPropertiesArray_26() {
  var p = "prototype";
  assertDefined(Array[p]);
  assertEquals(Array.prototype, Array[p]);
}

function testPropertiesArray_27() {
  p = "[[index]]";
  assertUndefined(Array[p]);
}

function testPropertiesArray_28() {
  p = "toLocaleString";
  assertDefined(Array.prototype[p]);
  assertEquals(Array.prototype.toLocaleString, Array.prototype[p]);
}

function testPropertiesArray_29() {
  p = "reduce";
  assertDefined(Array.prototype[p]);
  assertEquals(Array.prototype.reduce, Array.prototype[p]);
}

function testPropertiesArray_30() {
  p = "pop";
  assertDefined(Array.prototype[p]);
  assertEquals(Array.prototype.pop, Array.prototype[p]);
}

function testPropertiesArray_31() {
  p = "slice";
  assertDefined(Array.prototype[p]);
  assertEquals(Array.prototype.slice, Array.prototype[p]);
}

function testPropertiesArray_32() {
  p = "unshift";
  assertDefined(Array.prototype[p]);
  assertEquals(Array.prototype.unshift, Array.prototype[p]);
}

function testPropertiesArray_33() {
  p = "toString";
  assertDefined(Array.prototype[p]);
  assertEquals(Array.prototype.toString, Array.prototype[p]);
}

function testPropertiesArray_34() {
  p = "sort";
  assertDefined(Array.prototype[p]);
  assertEquals(Array.prototype.sort, Array.prototype[p]);
}

function testPropertiesArray_35() {
  p = "map";
  assertDefined(Array.prototype[p]);
  assertEquals(Array.prototype.map, Array.prototype[p]);
}

function testPropertiesArray_36() {
  p = "lastIndexOf";
  assertDefined(Array.prototype[p]);
  assertEquals(Array.prototype.lastIndexOf, Array.prototype[p]);
}

function testPropertiesArray_37() {
  p = "reduceRight";
  assertDefined(Array.prototype[p]);
  assertEquals(Array.prototype.reduceRight, Array.prototype[p]);
}

function testPropertiesArray_38() {
  p = "indexOf";
  assertDefined(Array.prototype[p]);
  assertEquals(Array.prototype.indexOf, Array.prototype[p]);
}

function testPropertiesArray_39() {
  p = "some";
  assertDefined(Array.prototype[p]);
  assertEquals(Array.prototype.some, Array.prototype[p]);
}

function testPropertiesArray_40() {
  p = "every";
  assertDefined(Array.prototype[p]);
  assertEquals(Array.prototype.every, Array.prototype[p]);
}

function testPropertiesArray_41() {
  p = "forEach";
  assertDefined(Array.prototype[p]);
  assertEquals(Array.prototype.forEach, Array.prototype[p]);
}

function testPropertiesArray_42() {
  p = "splice";
  assertDefined(Array.prototype[p]);
  assertEquals(Array.prototype.splice, Array.prototype[p]);
}

function testPropertiesArray_43() {
  p = "concat";
  assertDefined(Array.prototype[p]);
  assertEquals(Array.prototype.concat, Array.prototype[p]);
}

function testPropertiesArray_44() {
  p = "join";
  assertDefined(Array.prototype[p]);
  assertEquals(Array.prototype.join, Array.prototype[p]);
}

function testPropertiesArray_45() {
  p = "reverse";
  assertDefined(Array.prototype[p]);
  assertEquals(Array.prototype.reverse, Array.prototype[p]);
}

function testPropertiesArray_46() {
  p = "shift";
  assertDefined(Array.prototype[p]);
  assertEquals(Array.prototype.shift, Array.prototype[p]);
}

function testPropertiesArray_47() {
  p = "filter";
  assertDefined(Array.prototype[p]);
  assertEquals(Array.prototype.filter, Array.prototype[p]);
}

function testPropertiesArray_48() {
  p = "constructor";
  assertDefined(Array.prototype[p]);
  assertEquals(Array.prototype.constructor, Array.prototype[p]);
}

function testPropertiesArray_49() {
  p = "push";
  assertDefined(Array.prototype[p]);
  assertEquals(Array.prototype.push, Array.prototype[p]);
}

function testPropertiesArray_50() {
  p = "isArray";
  assertDefined(Array[p]);
  assertEquals(Array.isArray, Array[p]);
}

function testPropertiesArray_51() {
  p = "length";
  assertDefined(Array[p]);
  assertEquals(Array.length, Array[p]);
}

function testPropertiesArray_52() {
  p = "prototype";
  assertDefined(Array[p]);
  assertEquals(Array.prototype, Array[p]);
}

function testInstancePropertiesArray_1() {
  var o = new Array(1,2,3);
  var p = "1";
  assertDefined(o[p]);
  assertEquals(o[1], o[p]);
}

function testInstancePropertiesArray_2() {
  o = new Array(1,2,3);
  var p = "length";
  assertDefined(o[p]);
  assertEquals(o.length, o[p]);
  assertEquals(o["length"], o[p]);
}

function testInstancePropertiesArray_3() {
  o = new Array(1,2,3);
  var p = "toLocaleString";
  assertDefined(o[p]);
  assertEquals(o.toLocaleString, o[p]);
  assertEquals(o["toLocaleString"], o[p]);
}

function testInstancePropertiesArray_4() {
  o = new Array(1,2,3);
  var p = "reduce";
  assertDefined(o[p]);
  assertEquals(o.reduce, o[p]);
  assertEquals(o["reduce"], o[p]);
}

function testInstancePropertiesArray_5() {
  o = new Array(1,2,3);
  var p = "pop";
  assertDefined(o[p]);
  assertEquals(o.pop, o[p]);
  assertEquals(o["pop"], o[p]);
}

function testInstancePropertiesArray_6() {
  o = new Array(1,2,3);
  var p = "slice";
  assertDefined(o[p]);
  assertEquals(o.slice, o[p]);
  assertEquals(o["slice"], o[p]);
}

function testInstancePropertiesArray_7() {
  o = new Array(1,2,3);
  var p = "unshift";
  assertDefined(o[p]);
  assertEquals(o.unshift, o[p]);
  assertEquals(o["unshift"], o[p]);
}

function testInstancePropertiesArray_8() {
  o = new Array(1,2,3);
  var p = "toString";
  assertDefined(o[p]);
  assertEquals(o.toString, o[p]);
  assertEquals(o["toString"], o[p]);
}

function testInstancePropertiesArray_9() {
  o = new Array(1,2,3);
  var p = "sort";
  assertDefined(o[p]);
  assertEquals(o.sort, o[p]);
  assertEquals(o["sort"], o[p]);
}

function testInstancePropertiesArray_10() {
  o = new Array(1,2,3);
  var p = "map";
  assertDefined(o[p]);
  assertEquals(o.map, o[p]);
  assertEquals(o["map"], o[p]);
}

function testInstancePropertiesArray_11() {
  o = new Array(1,2,3);
  var p = "lastIndexOf";
  assertDefined(o[p]);
  assertEquals(o.lastIndexOf, o[p]);
  assertEquals(o["lastIndexOf"], o[p]);
}

function testInstancePropertiesArray_12() {
  o = new Array(1,2,3);
  var p = "reduceRight";
  assertDefined(o[p]);
  assertEquals(o.reduceRight, o[p]);
  assertEquals(o["reduceRight"], o[p]);
}

function testInstancePropertiesArray_13() {
  o = new Array(1,2,3);
  var p = "indexOf";
  assertDefined(o[p]);
  assertEquals(o.indexOf, o[p]);
  assertEquals(o["indexOf"], o[p]);
}

function testInstancePropertiesArray_14() {
  o = new Array(1,2,3);
  var p = "some";
  assertDefined(o[p]);
  assertEquals(o.some, o[p]);
  assertEquals(o["some"], o[p]);
}

function testInstancePropertiesArray_15() {
  o = new Array(1,2,3);
  var p = "every";
  assertDefined(o[p]);
  assertEquals(o.every, o[p]);
  assertEquals(o["every"], o[p]);
}

function testInstancePropertiesArray_16() {
  o = new Array(1,2,3);
  var p = "forEach";
  assertDefined(o[p]);
  assertEquals(o.forEach, o[p]);
  assertEquals(o["forEach"], o[p]);
}

function testInstancePropertiesArray_17() {
  o = new Array(1,2,3);
  var p = "splice";
  assertDefined(o[p]);
  assertEquals(o.splice, o[p]);
  assertEquals(o["splice"], o[p]);
}

function testInstancePropertiesArray_18() {
  o = new Array(1,2,3);
  var p = "concat";
  assertDefined(o[p]);
  assertEquals(o.concat, o[p]);
  assertEquals(o["concat"], o[p]);
}

function testInstancePropertiesArray_19() {
  o = new Array(1,2,3);
  var p = "join";
  assertDefined(o[p]);
  assertEquals(o.join, o[p]);
  assertEquals(o["join"], o[p]);
}

function testInstancePropertiesArray_20() {
  o = new Array(1,2,3);
  var p = "reverse";
  assertDefined(o[p]);
  assertEquals(o.reverse, o[p]);
  assertEquals(o["reverse"], o[p]);
}

function testInstancePropertiesArray_21() {
  o = new Array(1,2,3);
  var p = "shift";
  assertDefined(o[p]);
  assertEquals(o.shift, o[p]);
  assertEquals(o["shift"], o[p]);
}

function testInstancePropertiesArray_22() {
  o = new Array(1,2,3);
  var p = "filter";
  assertDefined(o[p]);
  assertEquals(o.filter, o[p]);
  assertEquals(o["filter"], o[p]);
}

function testInstancePropertiesArray_23() {
  o = new Array(1,2,3);
  var p = "constructor";
  assertDefined(o[p]);
  assertEquals(o.constructor, o[p]);
  assertEquals(o["constructor"], o[p]);
}

function testInstancePropertiesArray_24() {
  o = new Array(1,2,3);
  var p = "push";
  assertDefined(o[p]);
  assertEquals(o.push, o[p]);
  assertEquals(o["push"], o[p]);
}

function testInstancePropertiesArray_25() {
  var o = new Array(1,2,3);
  assertUndefined(o["isArray"]);
}

function testInstancePropertiesArray_27() {
  var o = new Array(1,2,3);
  assertUndefined(o["prototype"]);
}

function testInstancePropertiesArray_28() {
  var o = [1,2,3];
  var p = "1";
  assertDefined(o[p]);
  assertEquals(o[1], o[p]);
}

function testInstancePropertiesArray_29() {
  o = [1,2,3];
  var p = "length";
  assertDefined(o[p]);
  assertEquals(o.length, o[p]);
  assertEquals(o["length"], o[p]);
}

function testInstancePropertiesArray_30() {
  o = [1,2,3];
  var p = "toLocaleString";
  assertDefined(o[p]);
  assertEquals(o.toLocaleString, o[p]);
  assertEquals(o["toLocaleString"], o[p]);
}

function testInstancePropertiesArray_31() {
  o = [1,2,3];
  var p = "reduce";
  assertDefined(o[p]);
  assertEquals(o.reduce, o[p]);
  assertEquals(o["reduce"], o[p]);
}

function testInstancePropertiesArray_32() {
  o = [1,2,3];
  var p = "pop";
  assertDefined(o[p]);
  assertEquals(o.pop, o[p]);
  assertEquals(o["pop"], o[p]);
}

function testInstancePropertiesArray_33() {
  o = [1,2,3];
  var p = "slice";
  assertDefined(o[p]);
  assertEquals(o.slice, o[p]);
  assertEquals(o["slice"], o[p]);
}

function testInstancePropertiesArray_34() {
  o = [1,2,3];
  var p = "unshift";
  assertDefined(o[p]);
  assertEquals(o.unshift, o[p]);
  assertEquals(o["unshift"], o[p]);
}

function testInstancePropertiesArray_35() {
  o = [1,2,3];
  var p = "toString";
  assertDefined(o[p]);
  assertEquals(o.toString, o[p]);
  assertEquals(o["toString"], o[p]);
}

function testInstancePropertiesArray_36() {
  o = [1,2,3];
  var p = "sort";
  assertDefined(o[p]);
  assertEquals(o.sort, o[p]);
  assertEquals(o["sort"], o[p]);
}

function testInstancePropertiesArray_37() {
  o = [1,2,3];
  var p = "map";
  assertDefined(o[p]);
  assertEquals(o.map, o[p]);
  assertEquals(o["map"], o[p]);
}

function testInstancePropertiesArray_38() {
  o = [1,2,3];
  var p = "lastIndexOf";
  assertDefined(o[p]);
  assertEquals(o.lastIndexOf, o[p]);
  assertEquals(o["lastIndexOf"], o[p]);
}

function testInstancePropertiesArray_39() {
  o = [1,2,3];
  var p = "reduceRight";
  assertDefined(o[p]);
  assertEquals(o.reduceRight, o[p]);
  assertEquals(o["reduceRight"], o[p]);
}

function testInstancePropertiesArray_40() {
  o = [1,2,3];
  var p = "indexOf";
  assertDefined(o[p]);
  assertEquals(o.indexOf, o[p]);
  assertEquals(o["indexOf"], o[p]);
}

function testInstancePropertiesArray_41() {
  o = [1,2,3];
  var p = "some";
  assertDefined(o[p]);
  assertEquals(o.some, o[p]);
  assertEquals(o["some"], o[p]);
}

function testInstancePropertiesArray_42() {
  o = [1,2,3];
  var p = "every";
  assertDefined(o[p]);
  assertEquals(o.every, o[p]);
  assertEquals(o["every"], o[p]);
}

function testInstancePropertiesArray_43() {
  o = [1,2,3];
  var p = "forEach";
  assertDefined(o[p]);
  assertEquals(o.forEach, o[p]);
  assertEquals(o["forEach"], o[p]);
}

function testInstancePropertiesArray_44() {
  o = [1,2,3];
  var p = "splice";
  assertDefined(o[p]);
  assertEquals(o.splice, o[p]);
  assertEquals(o["splice"], o[p]);
}

function testInstancePropertiesArray_45() {
  o = [1,2,3];
  var p = "concat";
  assertDefined(o[p]);
  assertEquals(o.concat, o[p]);
  assertEquals(o["concat"], o[p]);
}

function testInstancePropertiesArray_46() {
  o = [1,2,3];
  var p = "join";
  assertDefined(o[p]);
  assertEquals(o.join, o[p]);
  assertEquals(o["join"], o[p]);
}

function testInstancePropertiesArray_47() {
  o = [1,2,3];
  var p = "reverse";
  assertDefined(o[p]);
  assertEquals(o.reverse, o[p]);
  assertEquals(o["reverse"], o[p]);
}

function testInstancePropertiesArray_48() {
  o = [1,2,3];
  var p = "shift";
  assertDefined(o[p]);
  assertEquals(o.shift, o[p]);
  assertEquals(o["shift"], o[p]);
}

function testInstancePropertiesArray_49() {
  o = [1,2,3];
  var p = "filter";
  assertDefined(o[p]);
  assertEquals(o.filter, o[p]);
  assertEquals(o["filter"], o[p]);
}

function testInstancePropertiesArray_50() {
  o = [1,2,3];
  var p = "constructor";
  assertDefined(o[p]);
  assertEquals(o.constructor, o[p]);
  assertEquals(o["constructor"], o[p]);
}

function testInstancePropertiesArray_51() {
  o = [1,2,3];
  var p = "push";
  assertDefined(o[p]);
  assertEquals(o.push, o[p]);
  assertEquals(o["push"], o[p]);
}

function testInstancePropertiesArray_52() {
  var o = [1,2,3];
  assertUndefined(o["isArray"]);
}

function testInstancePropertiesArray_54() {
  var o = [1,2,3];
  assertUndefined(o["prototype"]);
}

function testInstancePropertiesArray_55() {
  var o = new Array(1,2,3);
  p = "1";
  assertDefined(o[p]);
  assertEquals(o[1], o[p]);
}

function testInstancePropertiesArray_56() {
  o = new Array(1,2,3);
  p = "length";
  assertDefined(o[p]);
  assertEquals(o.length, o[p]);
  assertEquals(o["length"], o[p]);
}

function testInstancePropertiesArray_57() {
  o = new Array(1,2,3);
  p = "toLocaleString";
  assertDefined(o[p]);
  assertEquals(o.toLocaleString, o[p]);
  assertEquals(o["toLocaleString"], o[p]);
}

function testInstancePropertiesArray_58() {
  o = new Array(1,2,3);
  p = "reduce";
  assertDefined(o[p]);
  assertEquals(o.reduce, o[p]);
  assertEquals(o["reduce"], o[p]);
}

function testInstancePropertiesArray_59() {
  o = new Array(1,2,3);
  p = "pop";
  assertDefined(o[p]);
  assertEquals(o.pop, o[p]);
  assertEquals(o["pop"], o[p]);
}

function testInstancePropertiesArray_60() {
  o = new Array(1,2,3);
  p = "slice";
  assertDefined(o[p]);
  assertEquals(o.slice, o[p]);
  assertEquals(o["slice"], o[p]);
}

function testInstancePropertiesArray_61() {
  o = new Array(1,2,3);
  p = "unshift";
  assertDefined(o[p]);
  assertEquals(o.unshift, o[p]);
  assertEquals(o["unshift"], o[p]);
}

function testInstancePropertiesArray_62() {
  o = new Array(1,2,3);
  p = "toString";
  assertDefined(o[p]);
  assertEquals(o.toString, o[p]);
  assertEquals(o["toString"], o[p]);
}

function testInstancePropertiesArray_63() {
  o = new Array(1,2,3);
  p = "sort";
  assertDefined(o[p]);
  assertEquals(o.sort, o[p]);
  assertEquals(o["sort"], o[p]);
}

function testInstancePropertiesArray_64() {
  o = new Array(1,2,3);
  p = "map";
  assertDefined(o[p]);
  assertEquals(o.map, o[p]);
  assertEquals(o["map"], o[p]);
}

function testInstancePropertiesArray_65() {
  o = new Array(1,2,3);
  p = "lastIndexOf";
  assertDefined(o[p]);
  assertEquals(o.lastIndexOf, o[p]);
  assertEquals(o["lastIndexOf"], o[p]);
}

function testInstancePropertiesArray_66() {
  o = new Array(1,2,3);
  p = "reduceRight";
  assertDefined(o[p]);
  assertEquals(o.reduceRight, o[p]);
  assertEquals(o["reduceRight"], o[p]);
}

function testInstancePropertiesArray_67() {
  o = new Array(1,2,3);
  p = "indexOf";
  assertDefined(o[p]);
  assertEquals(o.indexOf, o[p]);
  assertEquals(o["indexOf"], o[p]);
}

function testInstancePropertiesArray_68() {
  o = new Array(1,2,3);
  p = "some";
  assertDefined(o[p]);
  assertEquals(o.some, o[p]);
  assertEquals(o["some"], o[p]);
}

function testInstancePropertiesArray_69() {
  o = new Array(1,2,3);
  p = "every";
  assertDefined(o[p]);
  assertEquals(o.every, o[p]);
  assertEquals(o["every"], o[p]);
}

function testInstancePropertiesArray_70() {
  o = new Array(1,2,3);
  p = "forEach";
  assertDefined(o[p]);
  assertEquals(o.forEach, o[p]);
  assertEquals(o["forEach"], o[p]);
}

function testInstancePropertiesArray_71() {
  o = new Array(1,2,3);
  p = "splice";
  assertDefined(o[p]);
  assertEquals(o.splice, o[p]);
  assertEquals(o["splice"], o[p]);
}

function testInstancePropertiesArray_72() {
  o = new Array(1,2,3);
  p = "concat";
  assertDefined(o[p]);
  assertEquals(o.concat, o[p]);
  assertEquals(o["concat"], o[p]);
}

function testInstancePropertiesArray_73() {
  o = new Array(1,2,3);
  p = "join";
  assertDefined(o[p]);
  assertEquals(o.join, o[p]);
  assertEquals(o["join"], o[p]);
}

function testInstancePropertiesArray_74() {
  o = new Array(1,2,3);
  p = "reverse";
  assertDefined(o[p]);
  assertEquals(o.reverse, o[p]);
  assertEquals(o["reverse"], o[p]);
}

function testInstancePropertiesArray_75() {
  o = new Array(1,2,3);
  p = "shift";
  assertDefined(o[p]);
  assertEquals(o.shift, o[p]);
  assertEquals(o["shift"], o[p]);
}

function testInstancePropertiesArray_76() {
  o = new Array(1,2,3);
  p = "filter";
  assertDefined(o[p]);
  assertEquals(o.filter, o[p]);
  assertEquals(o["filter"], o[p]);
}

function testInstancePropertiesArray_77() {
  o = new Array(1,2,3);
  p = "constructor";
  assertDefined(o[p]);
  assertEquals(o.constructor, o[p]);
  assertEquals(o["constructor"], o[p]);
}

function testInstancePropertiesArray_78() {
  o = new Array(1,2,3);
  p = "push";
  assertDefined(o[p]);
  assertEquals(o.push, o[p]);
  assertEquals(o["push"], o[p]);
}

function testInstancePropertiesArray_79() {
  o = new Array(1,2,3);
  assertUndefined(o["isArray"]);
}

function testInstancePropertiesArray_81() {
  o = new Array(1,2,3);
  assertUndefined(o["prototype"]);
}

function testInstancePropertiesArray_82() {
  var o = [1,2,3];
  p = "1";
  assertDefined(o[p]);
  assertEquals(o[1], o[p]);
}

function testInstancePropertiesArray_83() {
  o = [1,2,3];
  p = "length";
  assertDefined(o[p]);
  assertEquals(o.length, o[p]);
  assertEquals(o["length"], o[p]);
}

function testInstancePropertiesArray_84() {
  o = [1,2,3];
  p = "toLocaleString";
  assertDefined(o[p]);
  assertEquals(o.toLocaleString, o[p]);
  assertEquals(o["toLocaleString"], o[p]);
}

function testInstancePropertiesArray_85() {
  o = [1,2,3];
  p = "reduce";
  assertDefined(o[p]);
  assertEquals(o.reduce, o[p]);
  assertEquals(o["reduce"], o[p]);
}

function testInstancePropertiesArray_86() {
  o = [1,2,3];
  p = "pop";
  assertDefined(o[p]);
  assertEquals(o.pop, o[p]);
  assertEquals(o["pop"], o[p]);
}

function testInstancePropertiesArray_87() {
  o = [1,2,3];
  p = "slice";
  assertDefined(o[p]);
  assertEquals(o.slice, o[p]);
  assertEquals(o["slice"], o[p]);
}

function testInstancePropertiesArray_88() {
  o = [1,2,3];
  p = "unshift";
  assertDefined(o[p]);
  assertEquals(o.unshift, o[p]);
  assertEquals(o["unshift"], o[p]);
}

function testInstancePropertiesArray_89() {
  o = [1,2,3];
  p = "toString";
  assertDefined(o[p]);
  assertEquals(o.toString, o[p]);
  assertEquals(o["toString"], o[p]);
}

function testInstancePropertiesArray_90() {
  o = [1,2,3];
  p = "sort";
  assertDefined(o[p]);
  assertEquals(o.sort, o[p]);
  assertEquals(o["sort"], o[p]);
}

function testInstancePropertiesArray_91() {
  o = [1,2,3];
  p = "map";
  assertDefined(o[p]);
  assertEquals(o.map, o[p]);
  assertEquals(o["map"], o[p]);
}

function testInstancePropertiesArray_92() {
  o = [1,2,3];
  p = "lastIndexOf";
  assertDefined(o[p]);
  assertEquals(o.lastIndexOf, o[p]);
  assertEquals(o["lastIndexOf"], o[p]);
}

function testInstancePropertiesArray_93() {
  o = [1,2,3];
  p = "reduceRight";
  assertDefined(o[p]);
  assertEquals(o.reduceRight, o[p]);
  assertEquals(o["reduceRight"], o[p]);
}

function testInstancePropertiesArray_94() {
  o = [1,2,3];
  p = "indexOf";
  assertDefined(o[p]);
  assertEquals(o.indexOf, o[p]);
  assertEquals(o["indexOf"], o[p]);
}

function testInstancePropertiesArray_95() {
  o = [1,2,3];
  p = "some";
  assertDefined(o[p]);
  assertEquals(o.some, o[p]);
  assertEquals(o["some"], o[p]);
}

function testInstancePropertiesArray_96() {
  o = [1,2,3];
  p = "every";
  assertDefined(o[p]);
  assertEquals(o.every, o[p]);
  assertEquals(o["every"], o[p]);
}

function testInstancePropertiesArray_97() {
  o = [1,2,3];
  p = "forEach";
  assertDefined(o[p]);
  assertEquals(o.forEach, o[p]);
  assertEquals(o["forEach"], o[p]);
}

function testInstancePropertiesArray_98() {
  o = [1,2,3];
  p = "splice";
  assertDefined(o[p]);
  assertEquals(o.splice, o[p]);
  assertEquals(o["splice"], o[p]);
}

function testInstancePropertiesArray_99() {
  o = [1,2,3];
  p = "concat";
  assertDefined(o[p]);
  assertEquals(o.concat, o[p]);
  assertEquals(o["concat"], o[p]);
}

function testInstancePropertiesArray_100() {
  o = [1,2,3];
  p = "join";
  assertDefined(o[p]);
  assertEquals(o.join, o[p]);
  assertEquals(o["join"], o[p]);
}

function testInstancePropertiesArray_101() {
  o = [1,2,3];
  p = "reverse";
  assertDefined(o[p]);
  assertEquals(o.reverse, o[p]);
  assertEquals(o["reverse"], o[p]);
}

function testInstancePropertiesArray_102() {
  o = [1,2,3];
  p = "shift";
  assertDefined(o[p]);
  assertEquals(o.shift, o[p]);
  assertEquals(o["shift"], o[p]);
}

function testInstancePropertiesArray_103() {
  o = [1,2,3];
  p = "filter";
  assertDefined(o[p]);
  assertEquals(o.filter, o[p]);
  assertEquals(o["filter"], o[p]);
}

function testInstancePropertiesArray_104() {
  o = [1,2,3];
  p = "constructor";
  assertDefined(o[p]);
  assertEquals(o.constructor, o[p]);
  assertEquals(o["constructor"], o[p]);
}

function testInstancePropertiesArray_105() {
  o = [1,2,3];
  p = "push";
  assertDefined(o[p]);
  assertEquals(o.push, o[p]);
  assertEquals(o["push"], o[p]);
}

function testInstancePropertiesArray_106() {
  o = [1,2,3];
  assertUndefined(o["isArray"]);
}

function testInstancePropertiesArray_108() {
  o = [1,2,3];
  assertUndefined(o["prototype"]);
}

function testPropertiesString_1() {
  var p = "[[index]]";
  assertUndefined(String[p]);
}

function testPropertiesString_2() {
  var p = "charAt";
  assertDefined(String.prototype[p]);
  assertEquals(String.prototype.charAt, String.prototype[p]);
}

function testPropertiesString_3() {
  var p = "indexOf";
  assertDefined(String.prototype[p]);
  assertEquals(String.prototype.indexOf, String.prototype[p]);
}

function testPropertiesString_4() {
  var p = "valueOf";
  assertDefined(String.prototype[p]);
  assertEquals(String.prototype.valueOf, String.prototype[p]);
}

function testPropertiesString_5() {
  var p = "charCodeAt";
  assertDefined(String.prototype[p]);
  assertEquals(String.prototype.charCodeAt, String.prototype[p]);
}

function testPropertiesString_6() {
  var p = "constructor";
  assertDefined(String.prototype[p]);
  assertEquals(String.prototype.constructor, String.prototype[p]);
}

function testPropertiesString_7() {
  var p = "concat";
  assertDefined(String.prototype[p]);
  assertEquals(String.prototype.concat, String.prototype[p]);
}

function testPropertiesString_8() {
  var p = "length";
  assertDefined(String[p]);
  assertEquals(String.length, String[p]);
}

function testPropertiesString_9() {
  var p = "prototype";
  assertDefined(String[p]);
  assertEquals(String.prototype, String[p]);
}

function testPropertiesString_10() {
  var p = "fromCharCode";
  assertDefined(String[p]);
  assertEquals(String.fromCharCode, String[p]);
}

function testPropertiesString_11() {
  p = "[[index]]";
  assertUndefined(String[p]);
}

function testPropertiesString_12() {
  p = "charAt";
  assertDefined(String.prototype[p]);
  assertEquals(String.prototype.charAt, String.prototype[p]);
}

function testPropertiesString_13() {
  p = "indexOf";
  assertDefined(String.prototype[p]);
  assertEquals(String.prototype.indexOf, String.prototype[p]);
}

function testPropertiesString_14() {
  p = "valueOf";
  assertDefined(String.prototype[p]);
  assertEquals(String.prototype.valueOf, String.prototype[p]);
}

function testPropertiesString_15() {
  p = "charCodeAt";
  assertDefined(String.prototype[p]);
  assertEquals(String.prototype.charCodeAt, String.prototype[p]);
}

function testPropertiesString_16() {
  p = "constructor";
  assertDefined(String.prototype[p]);
  assertEquals(String.prototype.constructor, String.prototype[p]);
}

function testPropertiesString_17() {
  p = "concat";
  assertDefined(String.prototype[p]);
  assertEquals(String.prototype.concat, String.prototype[p]);
}

function testPropertiesString_18() {
  p = "length";
  assertDefined(String[p]);
  assertEquals(String.length, String[p]);
}

function testPropertiesString_19() {
  p = "prototype";
  assertDefined(String[p]);
  assertEquals(String.prototype, String[p]);
}

function testPropertiesString_20() {
  p = "fromCharCode";
  assertDefined(String[p]);
  assertEquals(String.fromCharCode, String[p]);
}

function testInstancePropertiesString_1() {
  var o = new String('abc');
  var p = "1";
  assertDefined(o[p]);
  assertEquals(o[1], o[p]);
}

function testInstancePropertiesString_2() {
  o = new String('abc');
  var p = "length";
  assertDefined(o[p]);
  assertEquals(o.length, o[p]);
  assertEquals(o["length"], o[p]);
}

function testInstancePropertiesString_3() {
  o = new String('abc');
  var p = "charAt";
  assertDefined(o[p]);
  assertEquals(o.charAt, o[p]);
  assertEquals(o["charAt"], o[p]);
}

function testInstancePropertiesString_4() {
  o = new String('abc');
  var p = "indexOf";
  assertDefined(o[p]);
  assertEquals(o.indexOf, o[p]);
  assertEquals(o["indexOf"], o[p]);
}

function testInstancePropertiesString_5() {
  o = new String('abc');
  var p = "valueOf";
  assertDefined(o[p]);
  assertEquals(o.valueOf, o[p]);
  assertEquals(o["valueOf"], o[p]);
}

function testInstancePropertiesString_6() {
  o = new String('abc');
  var p = "charCodeAt";
  assertDefined(o[p]);
  assertEquals(o.charCodeAt, o[p]);
  assertEquals(o["charCodeAt"], o[p]);
}

function testInstancePropertiesString_7() {
  o = new String('abc');
  var p = "constructor";
  assertDefined(o[p]);
  assertEquals(o.constructor, o[p]);
  assertEquals(o["constructor"], o[p]);
}

function testInstancePropertiesString_8() {
  o = new String('abc');
  var p = "concat";
  assertDefined(o[p]);
  assertEquals(o.concat, o[p]);
  assertEquals(o["concat"], o[p]);
}

function testInstancePropertiesString_10() {
  var o = new String('abc');
  assertUndefined(o["prototype"]);
}

function testInstancePropertiesString_11() {
  var o = new String('abc');
  assertUndefined(o["fromCharCode"]);
}

function testInstancePropertiesString_12() {
  var o = "abc";
  var p = "1";
  assertDefined(o[p]);
  assertEquals(o[1], o[p]);
}

function testInstancePropertiesString_13() {
  o = "abc";
  var p = "length";
  assertDefined(o[p]);
  assertEquals(o.length, o[p]);
  assertEquals(o["length"], o[p]);
}

function testInstancePropertiesString_14() {
  o = "abc";
  var p = "charAt";
  assertDefined(o[p]);
  assertEquals(o.charAt, o[p]);
  assertEquals(o["charAt"], o[p]);
}

function testInstancePropertiesString_15() {
  o = "abc";
  var p = "indexOf";
  assertDefined(o[p]);
  assertEquals(o.indexOf, o[p]);
  assertEquals(o["indexOf"], o[p]);
}

function testInstancePropertiesString_16() {
  o = "abc";
  var p = "valueOf";
  assertDefined(o[p]);
  assertEquals(o.valueOf, o[p]);
  assertEquals(o["valueOf"], o[p]);
}

function testInstancePropertiesString_17() {
  o = "abc";
  var p = "charCodeAt";
  assertDefined(o[p]);
  assertEquals(o.charCodeAt, o[p]);
  assertEquals(o["charCodeAt"], o[p]);
}

function testInstancePropertiesString_18() {
  o = "abc";
  var p = "constructor";
  assertDefined(o[p]);
  assertEquals(o.constructor, o[p]);
  assertEquals(o["constructor"], o[p]);
}

function testInstancePropertiesString_19() {
  o = "abc";
  var p = "concat";
  assertDefined(o[p]);
  assertEquals(o.concat, o[p]);
  assertEquals(o["concat"], o[p]);
}

function testInstancePropertiesString_21() {
  var o = "abc";
  assertUndefined(o["prototype"]);
}

function testInstancePropertiesString_22() {
  var o = "abc";
  assertUndefined(o["fromCharCode"]);
}

function testInstancePropertiesString_23() {
  var o = new String('abc');
  p = "1";
  assertDefined(o[p]);
  assertEquals(o[1], o[p]);
}

function testInstancePropertiesString_24() {
  o = new String('abc');
  p = "length";
  assertDefined(o[p]);
  assertEquals(o.length, o[p]);
  assertEquals(o["length"], o[p]);
}

function testInstancePropertiesString_25() {
  o = new String('abc');
  p = "charAt";
  assertDefined(o[p]);
  assertEquals(o.charAt, o[p]);
  assertEquals(o["charAt"], o[p]);
}

function testInstancePropertiesString_26() {
  o = new String('abc');
  p = "indexOf";
  assertDefined(o[p]);
  assertEquals(o.indexOf, o[p]);
  assertEquals(o["indexOf"], o[p]);
}

function testInstancePropertiesString_27() {
  o = new String('abc');
  p = "valueOf";
  assertDefined(o[p]);
  assertEquals(o.valueOf, o[p]);
  assertEquals(o["valueOf"], o[p]);
}

function testInstancePropertiesString_28() {
  o = new String('abc');
  p = "charCodeAt";
  assertDefined(o[p]);
  assertEquals(o.charCodeAt, o[p]);
  assertEquals(o["charCodeAt"], o[p]);
}

function testInstancePropertiesString_29() {
  o = new String('abc');
  p = "constructor";
  assertDefined(o[p]);
  assertEquals(o.constructor, o[p]);
  assertEquals(o["constructor"], o[p]);
}

function testInstancePropertiesString_30() {
  o = new String('abc');
  p = "concat";
  assertDefined(o[p]);
  assertEquals(o.concat, o[p]);
  assertEquals(o["concat"], o[p]);
}

function testInstancePropertiesString_32() {
  o = new String('abc');
  assertUndefined(o["prototype"]);
}

function testInstancePropertiesString_33() {
  o = new String('abc');
  assertUndefined(o["fromCharCode"]);
}

function testInstancePropertiesString_34() {
  var o = "abc";
  p = "1";
  assertDefined(o[p]);
  assertEquals(o[1], o[p]);
}

function testInstancePropertiesString_35() {
  o = "abc";
  p = "length";
  assertDefined(o[p]);
  assertEquals(o.length, o[p]);
  assertEquals(o["length"], o[p]);
}

function testInstancePropertiesString_36() {
  o = "abc";
  p = "charAt";
  assertDefined(o[p]);
  assertEquals(o.charAt, o[p]);
  assertEquals(o["charAt"], o[p]);
}

function testInstancePropertiesString_37() {
  o = "abc";
  p = "indexOf";
  assertDefined(o[p]);
  assertEquals(o.indexOf, o[p]);
  assertEquals(o["indexOf"], o[p]);
}

function testInstancePropertiesString_38() {
  o = "abc";
  p = "valueOf";
  assertDefined(o[p]);
  assertEquals(o.valueOf, o[p]);
  assertEquals(o["valueOf"], o[p]);
}

function testInstancePropertiesString_39() {
  o = "abc";
  p = "charCodeAt";
  assertDefined(o[p]);
  assertEquals(o.charCodeAt, o[p]);
  assertEquals(o["charCodeAt"], o[p]);
}

function testInstancePropertiesString_40() {
  o = "abc";
  p = "constructor";
  assertDefined(o[p]);
  assertEquals(o.constructor, o[p]);
  assertEquals(o["constructor"], o[p]);
}

function testInstancePropertiesString_41() {
  o = "abc";
  p = "concat";
  assertDefined(o[p]);
  assertEquals(o.concat, o[p]);
  assertEquals(o["concat"], o[p]);
}

function testInstancePropertiesString_43() {
  o = "abc";
  assertUndefined(o["prototype"]);
}

function testInstancePropertiesString_44() {
  o = "abc";
  assertUndefined(o["fromCharCode"]);
}

function testPropertiesBoolean_1() {
  var p = "valueOf";
  assertDefined(Boolean.prototype[p]);
  assertEquals(Boolean.prototype.valueOf, Boolean.prototype[p]);
}

function testPropertiesBoolean_2() {
  var p = "toString";
  assertDefined(Boolean.prototype[p]);
  assertEquals(Boolean.prototype.toString, Boolean.prototype[p]);
}

function testPropertiesBoolean_3() {
  var p = "constructor";
  assertDefined(Boolean.prototype[p]);
  assertEquals(Boolean.prototype.constructor, Boolean.prototype[p]);
}

function testPropertiesBoolean_4() {
  var p = "prototype";
  assertDefined(Boolean[p]);
  assertEquals(Boolean.prototype, Boolean[p]);
}

function testPropertiesBoolean_5() {
  p = "valueOf";
  assertDefined(Boolean.prototype[p]);
  assertEquals(Boolean.prototype.valueOf, Boolean.prototype[p]);
}

function testPropertiesBoolean_6() {
  p = "toString";
  assertDefined(Boolean.prototype[p]);
  assertEquals(Boolean.prototype.toString, Boolean.prototype[p]);
}

function testPropertiesBoolean_7() {
  p = "constructor";
  assertDefined(Boolean.prototype[p]);
  assertEquals(Boolean.prototype.constructor, Boolean.prototype[p]);
}

function testPropertiesBoolean_8() {
  p = "prototype";
  assertDefined(Boolean[p]);
  assertEquals(Boolean.prototype, Boolean[p]);
}

function testInstancePropertiesBoolean_1() {
  o = new Boolean();
  var p = "valueOf";
  assertDefined(o[p]);
  assertEquals(o.valueOf, o[p]);
  assertEquals(o["valueOf"], o[p]);
}

function testInstancePropertiesBoolean_2() {
  o = new Boolean();
  var p = "toString";
  assertDefined(o[p]);
  assertEquals(o.toString, o[p]);
  assertEquals(o["toString"], o[p]);
}

function testInstancePropertiesBoolean_3() {
  o = new Boolean();
  var p = "constructor";
  assertDefined(o[p]);
  assertEquals(o.constructor, o[p]);
  assertEquals(o["constructor"], o[p]);
}

function testInstancePropertiesBoolean_4() {
  var o = new Boolean();
  assertUndefined(o["prototype"]);
}

function testInstancePropertiesBoolean_5() {
  o = true;
  var p = "valueOf";
  assertDefined(o[p]);
  assertEquals(o.valueOf, o[p]);
  assertEquals(o["valueOf"], o[p]);
}

function testInstancePropertiesBoolean_6() {
  o = true;
  var p = "toString";
  assertDefined(o[p]);
  assertEquals(o.toString, o[p]);
  assertEquals(o["toString"], o[p]);
}

function testInstancePropertiesBoolean_7() {
  o = true;
  var p = "constructor";
  assertDefined(o[p]);
  assertEquals(o.constructor, o[p]);
  assertEquals(o["constructor"], o[p]);
}

function testInstancePropertiesBoolean_8() {
  var o = true;
  assertUndefined(o["prototype"]);
}

function testInstancePropertiesBoolean_9() {
  o = new Boolean();
  p = "valueOf";
  assertDefined(o[p]);
  assertEquals(o.valueOf, o[p]);
  assertEquals(o["valueOf"], o[p]);
}

function testInstancePropertiesBoolean_10() {
  o = new Boolean();
  p = "toString";
  assertDefined(o[p]);
  assertEquals(o.toString, o[p]);
  assertEquals(o["toString"], o[p]);
}

function testInstancePropertiesBoolean_11() {
  o = new Boolean();
  p = "constructor";
  assertDefined(o[p]);
  assertEquals(o.constructor, o[p]);
  assertEquals(o["constructor"], o[p]);
}

function testInstancePropertiesBoolean_12() {
  o = new Boolean();
  assertUndefined(o["prototype"]);
}

function testInstancePropertiesBoolean_13() {
  o = true;
  p = "valueOf";
  assertDefined(o[p]);
  assertEquals(o.valueOf, o[p]);
  assertEquals(o["valueOf"], o[p]);
}

function testInstancePropertiesBoolean_14() {
  o = true;
  p = "toString";
  assertDefined(o[p]);
  assertEquals(o.toString, o[p]);
  assertEquals(o["toString"], o[p]);
}

function testInstancePropertiesBoolean_15() {
  o = true;
  p = "constructor";
  assertDefined(o[p]);
  assertEquals(o.constructor, o[p]);
  assertEquals(o["constructor"], o[p]);
}

function testInstancePropertiesBoolean_16() {
  o = true;
  assertUndefined(o["prototype"]);
}

function testPropertiesNumber_1() {
  var p = "toPrecision";
  assertDefined(Number.prototype[p]);
  assertEquals(Number.prototype.toPrecision, Number.prototype[p]);
}

function testPropertiesNumber_2() {
  var p = "toLocaleString";
  assertDefined(Number.prototype[p]);
  assertEquals(Number.prototype.toLocaleString, Number.prototype[p]);
}

function testPropertiesNumber_3() {
  var p = "toExponential";
  assertDefined(Number.prototype[p]);
  assertEquals(Number.prototype.toExponential, Number.prototype[p]);
}

function testPropertiesNumber_4() {
  var p = "valueOf";
  assertDefined(Number.prototype[p]);
  assertEquals(Number.prototype.valueOf, Number.prototype[p]);
}

function testPropertiesNumber_5() {
  var p = "toString";
  assertDefined(Number.prototype[p]);
  assertEquals(Number.prototype.toString, Number.prototype[p]);
}

function testPropertiesNumber_6() {
  var p = "constructor";
  assertDefined(Number.prototype[p]);
  assertEquals(Number.prototype.constructor, Number.prototype[p]);
}

function testPropertiesNumber_7() {
  var p = "toFixed";
  assertDefined(Number.prototype[p]);
  assertEquals(Number.prototype.toFixed, Number.prototype[p]);
}

function testPropertiesNumber_8() {
  var p = "MAX_VALUE";
  assertDefined(Number[p]);
  assertEquals(Number.MAX_VALUE, Number[p]);
}

function testPropertiesNumber_9() {
  var p = "MIN_VALUE";
  assertDefined(Number[p]);
  assertEquals(Number.MIN_VALUE, Number[p]);
}

function testPropertiesNumber_10() {
  var p = "NaN";
  assertDefined(Number[p]);
  assertEquals(Number.NaN, Number[p]);
}

function testPropertiesNumber_11() {
  var p = "NEGATIVE_INFINITY";
  assertDefined(Number[p]);
  assertEquals(Number.NEGATIVE_INFINITY, Number[p]);
}

function testPropertiesNumber_12() {
  var p = "POSITIVE_INFINITY";
  assertDefined(Number[p]);
  assertEquals(Number.POSITIVE_INFINITY, Number[p]);
}

function testPropertiesNumber_13() {
  var p = "prototype";
  assertDefined(Number[p]);
  assertEquals(Number.prototype, Number[p]);
}

function testPropertiesNumber_14() {
  p = "toPrecision";
  assertDefined(Number.prototype[p]);
  assertEquals(Number.prototype.toPrecision, Number.prototype[p]);
}

function testPropertiesNumber_15() {
  p = "toLocaleString";
  assertDefined(Number.prototype[p]);
  assertEquals(Number.prototype.toLocaleString, Number.prototype[p]);
}

function testPropertiesNumber_16() {
  p = "toExponential";
  assertDefined(Number.prototype[p]);
  assertEquals(Number.prototype.toExponential, Number.prototype[p]);
}

function testPropertiesNumber_17() {
  p = "valueOf";
  assertDefined(Number.prototype[p]);
  assertEquals(Number.prototype.valueOf, Number.prototype[p]);
}

function testPropertiesNumber_18() {
  p = "toString";
  assertDefined(Number.prototype[p]);
  assertEquals(Number.prototype.toString, Number.prototype[p]);
}

function testPropertiesNumber_19() {
  p = "constructor";
  assertDefined(Number.prototype[p]);
  assertEquals(Number.prototype.constructor, Number.prototype[p]);
}

function testPropertiesNumber_20() {
  p = "toFixed";
  assertDefined(Number.prototype[p]);
  assertEquals(Number.prototype.toFixed, Number.prototype[p]);
}

function testPropertiesNumber_21() {
  p = "MAX_VALUE";
  assertDefined(Number[p]);
  assertEquals(Number.MAX_VALUE, Number[p]);
}

function testPropertiesNumber_22() {
  p = "MIN_VALUE";
  assertDefined(Number[p]);
  assertEquals(Number.MIN_VALUE, Number[p]);
}

function testPropertiesNumber_23() {
  p = "NaN";
  assertDefined(Number[p]);
  assertEquals(Number.NaN, Number[p]);
}

function testPropertiesNumber_24() {
  p = "NEGATIVE_INFINITY";
  assertDefined(Number[p]);
  assertEquals(Number.NEGATIVE_INFINITY, Number[p]);
}

function testPropertiesNumber_25() {
  p = "POSITIVE_INFINITY";
  assertDefined(Number[p]);
  assertEquals(Number.POSITIVE_INFINITY, Number[p]);
}

function testPropertiesNumber_26() {
  p = "prototype";
  assertDefined(Number[p]);
  assertEquals(Number.prototype, Number[p]);
}

function testInstancePropertiesNumber_1() {
  o = new Number(1);
  var p = "toPrecision";
  assertDefined(o[p]);
  assertEquals(o.toPrecision, o[p]);
  assertEquals(o["toPrecision"], o[p]);
}

function testInstancePropertiesNumber_2() {
  o = new Number(1);
  var p = "toLocaleString";
  assertDefined(o[p]);
  assertEquals(o.toLocaleString, o[p]);
  assertEquals(o["toLocaleString"], o[p]);
}

function testInstancePropertiesNumber_3() {
  o = new Number(1);
  var p = "toExponential";
  assertDefined(o[p]);
  assertEquals(o.toExponential, o[p]);
  assertEquals(o["toExponential"], o[p]);
}

function testInstancePropertiesNumber_4() {
  o = new Number(1);
  var p = "valueOf";
  assertDefined(o[p]);
  assertEquals(o.valueOf, o[p]);
  assertEquals(o["valueOf"], o[p]);
}

function testInstancePropertiesNumber_5() {
  o = new Number(1);
  var p = "toString";
  assertDefined(o[p]);
  assertEquals(o.toString, o[p]);
  assertEquals(o["toString"], o[p]);
}

function testInstancePropertiesNumber_6() {
  o = new Number(1);
  var p = "constructor";
  assertDefined(o[p]);
  assertEquals(o.constructor, o[p]);
  assertEquals(o["constructor"], o[p]);
}

function testInstancePropertiesNumber_7() {
  o = new Number(1);
  var p = "toFixed";
  assertDefined(o[p]);
  assertEquals(o.toFixed, o[p]);
  assertEquals(o["toFixed"], o[p]);
}

function testInstancePropertiesNumber_8() {
  var o = new Number(1);
  assertUndefined(o["MAX_VALUE"]);
}

function testInstancePropertiesNumber_9() {
  var o = new Number(1);
  assertUndefined(o["MIN_VALUE"]);
}

function testInstancePropertiesNumber_10() {
  var o = new Number(1);
  assertUndefined(o["NaN"]);
}

function testInstancePropertiesNumber_11() {
  var o = new Number(1);
  assertUndefined(o["NEGATIVE_INFINITY"]);
}

function testInstancePropertiesNumber_12() {
  var o = new Number(1);
  assertUndefined(o["POSITIVE_INFINITY"]);
}

function testInstancePropertiesNumber_13() {
  var o = new Number(1);
  assertUndefined(o["prototype"]);
}

function testInstancePropertiesNumber_14() {
  o = 1;
  var p = "toPrecision";
  assertDefined(o[p]);
  assertEquals(o.toPrecision, o[p]);
  assertEquals(o["toPrecision"], o[p]);
}

function testInstancePropertiesNumber_15() {
  o = 1;
  var p = "toLocaleString";
  assertDefined(o[p]);
  assertEquals(o.toLocaleString, o[p]);
  assertEquals(o["toLocaleString"], o[p]);
}

function testInstancePropertiesNumber_16() {
  o = 1;
  var p = "toExponential";
  assertDefined(o[p]);
  assertEquals(o.toExponential, o[p]);
  assertEquals(o["toExponential"], o[p]);
}

function testInstancePropertiesNumber_17() {
  o = 1;
  var p = "valueOf";
  assertDefined(o[p]);
  assertEquals(o.valueOf, o[p]);
  assertEquals(o["valueOf"], o[p]);
}

function testInstancePropertiesNumber_18() {
  o = 1;
  var p = "toString";
  assertDefined(o[p]);
  assertEquals(o.toString, o[p]);
  assertEquals(o["toString"], o[p]);
}

function testInstancePropertiesNumber_19() {
  o = 1;
  var p = "constructor";
  assertDefined(o[p]);
  assertEquals(o.constructor, o[p]);
  assertEquals(o["constructor"], o[p]);
}

function testInstancePropertiesNumber_20() {
  o = 1;
  var p = "toFixed";
  assertDefined(o[p]);
  assertEquals(o.toFixed, o[p]);
  assertEquals(o["toFixed"], o[p]);
}

function testInstancePropertiesNumber_21() {
  var o = 1;
  assertUndefined(o["MAX_VALUE"]);
}

function testInstancePropertiesNumber_22() {
  var o = 1;
  assertUndefined(o["MIN_VALUE"]);
}

function testInstancePropertiesNumber_23() {
  var o = 1;
  assertUndefined(o["NaN"]);
}

function testInstancePropertiesNumber_24() {
  var o = 1;
  assertUndefined(o["NEGATIVE_INFINITY"]);
}

function testInstancePropertiesNumber_25() {
  var o = 1;
  assertUndefined(o["POSITIVE_INFINITY"]);
}

function testInstancePropertiesNumber_26() {
  var o = 1;
  assertUndefined(o["prototype"]);
}

function testInstancePropertiesNumber_27() {
  o = new Number(1);
  p = "toPrecision";
  assertDefined(o[p]);
  assertEquals(o.toPrecision, o[p]);
  assertEquals(o["toPrecision"], o[p]);
}

function testInstancePropertiesNumber_28() {
  o = new Number(1);
  p = "toLocaleString";
  assertDefined(o[p]);
  assertEquals(o.toLocaleString, o[p]);
  assertEquals(o["toLocaleString"], o[p]);
}

function testInstancePropertiesNumber_29() {
  o = new Number(1);
  p = "toExponential";
  assertDefined(o[p]);
  assertEquals(o.toExponential, o[p]);
  assertEquals(o["toExponential"], o[p]);
}

function testInstancePropertiesNumber_30() {
  o = new Number(1);
  p = "valueOf";
  assertDefined(o[p]);
  assertEquals(o.valueOf, o[p]);
  assertEquals(o["valueOf"], o[p]);
}

function testInstancePropertiesNumber_31() {
  o = new Number(1);
  p = "toString";
  assertDefined(o[p]);
  assertEquals(o.toString, o[p]);
  assertEquals(o["toString"], o[p]);
}

function testInstancePropertiesNumber_32() {
  o = new Number(1);
  p = "constructor";
  assertDefined(o[p]);
  assertEquals(o.constructor, o[p]);
  assertEquals(o["constructor"], o[p]);
}

function testInstancePropertiesNumber_33() {
  o = new Number(1);
  p = "toFixed";
  assertDefined(o[p]);
  assertEquals(o.toFixed, o[p]);
  assertEquals(o["toFixed"], o[p]);
}

function testInstancePropertiesNumber_34() {
  o = new Number(1);
  assertUndefined(o["MAX_VALUE"]);
}

function testInstancePropertiesNumber_35() {
  o = new Number(1);
  assertUndefined(o["MIN_VALUE"]);
}

function testInstancePropertiesNumber_36() {
  o = new Number(1);
  assertUndefined(o["NaN"]);
}

function testInstancePropertiesNumber_37() {
  o = new Number(1);
  assertUndefined(o["NEGATIVE_INFINITY"]);
}

function testInstancePropertiesNumber_38() {
  o = new Number(1);
  assertUndefined(o["POSITIVE_INFINITY"]);
}

function testInstancePropertiesNumber_39() {
  o = new Number(1);
  assertUndefined(o["prototype"]);
}

function testInstancePropertiesNumber_40() {
  o = 1;
  p = "toPrecision";
  assertDefined(o[p]);
  assertEquals(o.toPrecision, o[p]);
  assertEquals(o["toPrecision"], o[p]);
}

function testInstancePropertiesNumber_41() {
  o = 1;
  p = "toLocaleString";
  assertDefined(o[p]);
  assertEquals(o.toLocaleString, o[p]);
  assertEquals(o["toLocaleString"], o[p]);
}

function testInstancePropertiesNumber_42() {
  o = 1;
  p = "toExponential";
  assertDefined(o[p]);
  assertEquals(o.toExponential, o[p]);
  assertEquals(o["toExponential"], o[p]);
}

function testInstancePropertiesNumber_43() {
  o = 1;
  p = "valueOf";
  assertDefined(o[p]);
  assertEquals(o.valueOf, o[p]);
  assertEquals(o["valueOf"], o[p]);
}

function testInstancePropertiesNumber_44() {
  o = 1;
  p = "toString";
  assertDefined(o[p]);
  assertEquals(o.toString, o[p]);
  assertEquals(o["toString"], o[p]);
}

function testInstancePropertiesNumber_45() {
  o = 1;
  p = "constructor";
  assertDefined(o[p]);
  assertEquals(o.constructor, o[p]);
  assertEquals(o["constructor"], o[p]);
}

function testInstancePropertiesNumber_46() {
  o = 1;
  p = "toFixed";
  assertDefined(o[p]);
  assertEquals(o.toFixed, o[p]);
  assertEquals(o["toFixed"], o[p]);
}

function testInstancePropertiesNumber_47() {
  o = 1;
  assertUndefined(o["MAX_VALUE"]);
}

function testInstancePropertiesNumber_48() {
  o = 1;
  assertUndefined(o["MIN_VALUE"]);
}

function testInstancePropertiesNumber_49() {
  o = 1;
  assertUndefined(o["NaN"]);
}

function testInstancePropertiesNumber_50() {
  o = 1;
  assertUndefined(o["NEGATIVE_INFINITY"]);
}

function testInstancePropertiesNumber_51() {
  o = 1;
  assertUndefined(o["POSITIVE_INFINITY"]);
}

function testInstancePropertiesNumber_52() {
  o = 1;
  assertUndefined(o["prototype"]);
}

function testPropertiesDate_1() {
  var p = "getUTCDay";
  assertDefined(Date.prototype[p]);
  assertEquals(Date.prototype.getUTCDay, Date.prototype[p]);
}

function testPropertiesDate_2() {
  var p = "toLocaleString";
  assertDefined(Date.prototype[p]);
  assertEquals(Date.prototype.toLocaleString, Date.prototype[p]);
}

function testPropertiesDate_3() {
  var p = "getMinutes";
  assertDefined(Date.prototype[p]);
  assertEquals(Date.prototype.getMinutes, Date.prototype[p]);
}

function testPropertiesDate_4() {
  var p = "getSeconds";
  assertDefined(Date.prototype[p]);
  assertEquals(Date.prototype.getSeconds, Date.prototype[p]);
}

function testPropertiesDate_5() {
  var p = "getTime";
  assertDefined(Date.prototype[p]);
  assertEquals(Date.prototype.getTime, Date.prototype[p]);
}

function testPropertiesDate_6() {
  var p = "getHours";
  assertDefined(Date.prototype[p]);
  assertEquals(Date.prototype.getHours, Date.prototype[p]);
}

function testPropertiesDate_7() {
  var p = "valueOf";
  assertDefined(Date.prototype[p]);
  assertEquals(Date.prototype.valueOf, Date.prototype[p]);
}

function testPropertiesDate_8() {
  var p = "toLocaleDateString";
  assertDefined(Date.prototype[p]);
  assertEquals(Date.prototype.toLocaleDateString, Date.prototype[p]);
}

function testPropertiesDate_9() {
  var p = "setUTCMilliseconds";
  assertDefined(Date.prototype[p]);
  assertEquals(Date.prototype.setUTCMilliseconds, Date.prototype[p]);
}

function testPropertiesDate_10() {
  var p = "toTimeString";
  assertDefined(Date.prototype[p]);
  assertEquals(Date.prototype.toTimeString, Date.prototype[p]);
}

function testPropertiesDate_11() {
  var p = "setUTCMinutes";
  assertDefined(Date.prototype[p]);
  assertEquals(Date.prototype.setUTCMinutes, Date.prototype[p]);
}

function testPropertiesDate_12() {
  var p = "setMilliseconds";
  assertDefined(Date.prototype[p]);
  assertEquals(Date.prototype.setMilliseconds, Date.prototype[p]);
}

function testPropertiesDate_13() {
  var p = "getUTCDate";
  assertDefined(Date.prototype[p]);
  assertEquals(Date.prototype.getUTCDate, Date.prototype[p]);
}

function testPropertiesDate_14() {
  var p = "setSeconds";
  assertDefined(Date.prototype[p]);
  assertEquals(Date.prototype.setSeconds, Date.prototype[p]);
}

function testPropertiesDate_15() {
  var p = "getUTCMilliseconds";
  assertDefined(Date.prototype[p]);
  assertEquals(Date.prototype.getUTCMilliseconds, Date.prototype[p]);
}

function testPropertiesDate_16() {
  var p = "setUTCDate";
  assertDefined(Date.prototype[p]);
  assertEquals(Date.prototype.setUTCDate, Date.prototype[p]);
}

function testPropertiesDate_17() {
  var p = "getUTCMinutes";
  assertDefined(Date.prototype[p]);
  assertEquals(Date.prototype.getUTCMinutes, Date.prototype[p]);
}

function testPropertiesDate_18() {
  var p = "toDateString";
  assertDefined(Date.prototype[p]);
  assertEquals(Date.prototype.toDateString, Date.prototype[p]);
}

function testPropertiesDate_19() {
  var p = "toString";
  assertDefined(Date.prototype[p]);
  assertEquals(Date.prototype.toString, Date.prototype[p]);
}

function testPropertiesDate_20() {
  var p = "setDate";
  assertDefined(Date.prototype[p]);
  assertEquals(Date.prototype.setDate, Date.prototype[p]);
}

function testPropertiesDate_21() {
  var p = "setHours";
  assertDefined(Date.prototype[p]);
  assertEquals(Date.prototype.setHours, Date.prototype[p]);
}

function testPropertiesDate_22() {
  var p = "getMonth";
  assertDefined(Date.prototype[p]);
  assertEquals(Date.prototype.getMonth, Date.prototype[p]);
}

function testPropertiesDate_23() {
  var p = "setFullYear";
  assertDefined(Date.prototype[p]);
  assertEquals(Date.prototype.setFullYear, Date.prototype[p]);
}

function testPropertiesDate_24() {
  var p = "getUTCHours";
  assertDefined(Date.prototype[p]);
  assertEquals(Date.prototype.getUTCHours, Date.prototype[p]);
}

function testPropertiesDate_25() {
  var p = "toLocaleTimeString";
  assertDefined(Date.prototype[p]);
  assertEquals(Date.prototype.toLocaleTimeString, Date.prototype[p]);
}

function testPropertiesDate_26() {
  var p = "setUTCSeconds";
  assertDefined(Date.prototype[p]);
  assertEquals(Date.prototype.setUTCSeconds, Date.prototype[p]);
}

function testPropertiesDate_27() {
  var p = "setUTCMonth";
  assertDefined(Date.prototype[p]);
  assertEquals(Date.prototype.setUTCMonth, Date.prototype[p]);
}

function testPropertiesDate_28() {
  var p = "getFullYear";
  assertDefined(Date.prototype[p]);
  assertEquals(Date.prototype.getFullYear, Date.prototype[p]);
}

function testPropertiesDate_29() {
  var p = "setMinutes";
  assertDefined(Date.prototype[p]);
  assertEquals(Date.prototype.setMinutes, Date.prototype[p]);
}

function testPropertiesDate_30() {
  var p = "getDay";
  assertDefined(Date.prototype[p]);
  assertEquals(Date.prototype.getDay, Date.prototype[p]);
}

function testPropertiesDate_31() {
  var p = "getUTCSeconds";
  assertDefined(Date.prototype[p]);
  assertEquals(Date.prototype.getUTCSeconds, Date.prototype[p]);
}

function testPropertiesDate_32() {
  var p = "getUTCFullYear";
  assertDefined(Date.prototype[p]);
  assertEquals(Date.prototype.getUTCFullYear, Date.prototype[p]);
}

function testPropertiesDate_33() {
  var p = "setMonth";
  assertDefined(Date.prototype[p]);
  assertEquals(Date.prototype.setMonth, Date.prototype[p]);
}

function testPropertiesDate_34() {
  var p = "setUTCHours";
  assertDefined(Date.prototype[p]);
  assertEquals(Date.prototype.setUTCHours, Date.prototype[p]);
}

function testPropertiesDate_35() {
  var p = "getTimezoneOffset";
  assertDefined(Date.prototype[p]);
  assertEquals(Date.prototype.getTimezoneOffset, Date.prototype[p]);
}

function testPropertiesDate_36() {
  var p = "getUTCMonth";
  assertDefined(Date.prototype[p]);
  assertEquals(Date.prototype.getUTCMonth, Date.prototype[p]);
}

function testPropertiesDate_37() {
  var p = "setUTCFullYear";
  assertDefined(Date.prototype[p]);
  assertEquals(Date.prototype.setUTCFullYear, Date.prototype[p]);
}

function testPropertiesDate_38() {
  var p = "getMilliseconds";
  assertDefined(Date.prototype[p]);
  assertEquals(Date.prototype.getMilliseconds, Date.prototype[p]);
}

function testPropertiesDate_39() {
  var p = "constructor";
  assertDefined(Date.prototype[p]);
  assertEquals(Date.prototype.constructor, Date.prototype[p]);
}

function testPropertiesDate_40() {
  var p = "setTime";
  assertDefined(Date.prototype[p]);
  assertEquals(Date.prototype.setTime, Date.prototype[p]);
}

function testPropertiesDate_41() {
  var p = "getDate";
  assertDefined(Date.prototype[p]);
  assertEquals(Date.prototype.getDate, Date.prototype[p]);
}

function testPropertiesDate_42() {
  var p = "parse";
  assertDefined(Date[p]);
  assertEquals(Date.parse, Date[p]);
}

function testPropertiesDate_43() {
  var p = "UTC";
  assertDefined(Date[p]);
  assertEquals(Date.UTC, Date[p]);
}

function testPropertiesDate_44() {
  var p = "now";
  assertDefined(Date[p]);
  assertEquals(Date.now, Date[p]);
}

function testPropertiesDate_45() {
  var p = "prototype";
  assertDefined(Date[p]);
  assertEquals(Date.prototype, Date[p]);
}

function testPropertiesDate_46() {
  p = "getUTCDay";
  assertDefined(Date.prototype[p]);
  assertEquals(Date.prototype.getUTCDay, Date.prototype[p]);
}

function testPropertiesDate_47() {
  p = "toLocaleString";
  assertDefined(Date.prototype[p]);
  assertEquals(Date.prototype.toLocaleString, Date.prototype[p]);
}

function testPropertiesDate_48() {
  p = "getMinutes";
  assertDefined(Date.prototype[p]);
  assertEquals(Date.prototype.getMinutes, Date.prototype[p]);
}

function testPropertiesDate_49() {
  p = "getSeconds";
  assertDefined(Date.prototype[p]);
  assertEquals(Date.prototype.getSeconds, Date.prototype[p]);
}

function testPropertiesDate_50() {
  p = "getTime";
  assertDefined(Date.prototype[p]);
  assertEquals(Date.prototype.getTime, Date.prototype[p]);
}

function testPropertiesDate_51() {
  p = "getHours";
  assertDefined(Date.prototype[p]);
  assertEquals(Date.prototype.getHours, Date.prototype[p]);
}

function testPropertiesDate_52() {
  p = "valueOf";
  assertDefined(Date.prototype[p]);
  assertEquals(Date.prototype.valueOf, Date.prototype[p]);
}

function testPropertiesDate_53() {
  p = "toLocaleDateString";
  assertDefined(Date.prototype[p]);
  assertEquals(Date.prototype.toLocaleDateString, Date.prototype[p]);
}

function testPropertiesDate_54() {
  p = "setUTCMilliseconds";
  assertDefined(Date.prototype[p]);
  assertEquals(Date.prototype.setUTCMilliseconds, Date.prototype[p]);
}

function testPropertiesDate_55() {
  p = "toTimeString";
  assertDefined(Date.prototype[p]);
  assertEquals(Date.prototype.toTimeString, Date.prototype[p]);
}

function testPropertiesDate_56() {
  p = "setUTCMinutes";
  assertDefined(Date.prototype[p]);
  assertEquals(Date.prototype.setUTCMinutes, Date.prototype[p]);
}

function testPropertiesDate_57() {
  p = "setMilliseconds";
  assertDefined(Date.prototype[p]);
  assertEquals(Date.prototype.setMilliseconds, Date.prototype[p]);
}

function testPropertiesDate_58() {
  p = "getUTCDate";
  assertDefined(Date.prototype[p]);
  assertEquals(Date.prototype.getUTCDate, Date.prototype[p]);
}

function testPropertiesDate_59() {
  p = "setSeconds";
  assertDefined(Date.prototype[p]);
  assertEquals(Date.prototype.setSeconds, Date.prototype[p]);
}

function testPropertiesDate_60() {
  p = "getUTCMilliseconds";
  assertDefined(Date.prototype[p]);
  assertEquals(Date.prototype.getUTCMilliseconds, Date.prototype[p]);
}

function testPropertiesDate_61() {
  p = "setUTCDate";
  assertDefined(Date.prototype[p]);
  assertEquals(Date.prototype.setUTCDate, Date.prototype[p]);
}

function testPropertiesDate_62() {
  p = "getUTCMinutes";
  assertDefined(Date.prototype[p]);
  assertEquals(Date.prototype.getUTCMinutes, Date.prototype[p]);
}

function testPropertiesDate_63() {
  p = "toDateString";
  assertDefined(Date.prototype[p]);
  assertEquals(Date.prototype.toDateString, Date.prototype[p]);
}

function testPropertiesDate_64() {
  p = "toString";
  assertDefined(Date.prototype[p]);
  assertEquals(Date.prototype.toString, Date.prototype[p]);
}

function testPropertiesDate_65() {
  p = "setDate";
  assertDefined(Date.prototype[p]);
  assertEquals(Date.prototype.setDate, Date.prototype[p]);
}

function testPropertiesDate_66() {
  p = "setHours";
  assertDefined(Date.prototype[p]);
  assertEquals(Date.prototype.setHours, Date.prototype[p]);
}

function testPropertiesDate_67() {
  p = "getMonth";
  assertDefined(Date.prototype[p]);
  assertEquals(Date.prototype.getMonth, Date.prototype[p]);
}

function testPropertiesDate_68() {
  p = "setFullYear";
  assertDefined(Date.prototype[p]);
  assertEquals(Date.prototype.setFullYear, Date.prototype[p]);
}

function testPropertiesDate_69() {
  p = "getUTCHours";
  assertDefined(Date.prototype[p]);
  assertEquals(Date.prototype.getUTCHours, Date.prototype[p]);
}

function testPropertiesDate_70() {
  p = "toLocaleTimeString";
  assertDefined(Date.prototype[p]);
  assertEquals(Date.prototype.toLocaleTimeString, Date.prototype[p]);
}

function testPropertiesDate_71() {
  p = "setUTCSeconds";
  assertDefined(Date.prototype[p]);
  assertEquals(Date.prototype.setUTCSeconds, Date.prototype[p]);
}

function testPropertiesDate_72() {
  p = "setUTCMonth";
  assertDefined(Date.prototype[p]);
  assertEquals(Date.prototype.setUTCMonth, Date.prototype[p]);
}

function testPropertiesDate_73() {
  p = "getFullYear";
  assertDefined(Date.prototype[p]);
  assertEquals(Date.prototype.getFullYear, Date.prototype[p]);
}

function testPropertiesDate_74() {
  p = "setMinutes";
  assertDefined(Date.prototype[p]);
  assertEquals(Date.prototype.setMinutes, Date.prototype[p]);
}

function testPropertiesDate_75() {
  p = "getDay";
  assertDefined(Date.prototype[p]);
  assertEquals(Date.prototype.getDay, Date.prototype[p]);
}

function testPropertiesDate_76() {
  p = "getUTCSeconds";
  assertDefined(Date.prototype[p]);
  assertEquals(Date.prototype.getUTCSeconds, Date.prototype[p]);
}

function testPropertiesDate_77() {
  p = "getUTCFullYear";
  assertDefined(Date.prototype[p]);
  assertEquals(Date.prototype.getUTCFullYear, Date.prototype[p]);
}

function testPropertiesDate_78() {
  p = "setMonth";
  assertDefined(Date.prototype[p]);
  assertEquals(Date.prototype.setMonth, Date.prototype[p]);
}

function testPropertiesDate_79() {
  p = "setUTCHours";
  assertDefined(Date.prototype[p]);
  assertEquals(Date.prototype.setUTCHours, Date.prototype[p]);
}

function testPropertiesDate_80() {
  p = "getTimezoneOffset";
  assertDefined(Date.prototype[p]);
  assertEquals(Date.prototype.getTimezoneOffset, Date.prototype[p]);
}

function testPropertiesDate_81() {
  p = "getUTCMonth";
  assertDefined(Date.prototype[p]);
  assertEquals(Date.prototype.getUTCMonth, Date.prototype[p]);
}

function testPropertiesDate_82() {
  p = "setUTCFullYear";
  assertDefined(Date.prototype[p]);
  assertEquals(Date.prototype.setUTCFullYear, Date.prototype[p]);
}

function testPropertiesDate_83() {
  p = "getMilliseconds";
  assertDefined(Date.prototype[p]);
  assertEquals(Date.prototype.getMilliseconds, Date.prototype[p]);
}

function testPropertiesDate_84() {
  p = "constructor";
  assertDefined(Date.prototype[p]);
  assertEquals(Date.prototype.constructor, Date.prototype[p]);
}

function testPropertiesDate_85() {
  p = "setTime";
  assertDefined(Date.prototype[p]);
  assertEquals(Date.prototype.setTime, Date.prototype[p]);
}

function testPropertiesDate_86() {
  p = "getDate";
  assertDefined(Date.prototype[p]);
  assertEquals(Date.prototype.getDate, Date.prototype[p]);
}

function testPropertiesDate_87() {
  p = "parse";
  assertDefined(Date[p]);
  assertEquals(Date.parse, Date[p]);
}

function testPropertiesDate_88() {
  p = "UTC";
  assertDefined(Date[p]);
  assertEquals(Date.UTC, Date[p]);
}

function testPropertiesDate_89() {
  p = "now";
  assertDefined(Date[p]);
  assertEquals(Date.now, Date[p]);
}

function testPropertiesDate_90() {
  p = "prototype";
  assertDefined(Date[p]);
  assertEquals(Date.prototype, Date[p]);
}

function testInstancePropertiesDate_1() {
  o = new Date(2012, 05, 12);
  var p = "getUTCDay";
  assertDefined(o[p]);
  assertEquals(o.getUTCDay, o[p]);
  assertEquals(o["getUTCDay"], o[p]);
}

function testInstancePropertiesDate_2() {
  o = new Date(2012, 05, 12);
  var p = "toLocaleString";
  assertDefined(o[p]);
  assertEquals(o.toLocaleString, o[p]);
  assertEquals(o["toLocaleString"], o[p]);
}

function testInstancePropertiesDate_3() {
  o = new Date(2012, 05, 12);
  var p = "getMinutes";
  assertDefined(o[p]);
  assertEquals(o.getMinutes, o[p]);
  assertEquals(o["getMinutes"], o[p]);
}

function testInstancePropertiesDate_4() {
  o = new Date(2012, 05, 12);
  var p = "getSeconds";
  assertDefined(o[p]);
  assertEquals(o.getSeconds, o[p]);
  assertEquals(o["getSeconds"], o[p]);
}

function testInstancePropertiesDate_5() {
  o = new Date(2012, 05, 12);
  var p = "getTime";
  assertDefined(o[p]);
  assertEquals(o.getTime, o[p]);
  assertEquals(o["getTime"], o[p]);
}

function testInstancePropertiesDate_6() {
  o = new Date(2012, 05, 12);
  var p = "getHours";
  assertDefined(o[p]);
  assertEquals(o.getHours, o[p]);
  assertEquals(o["getHours"], o[p]);
}

function testInstancePropertiesDate_7() {
  o = new Date(2012, 05, 12);
  var p = "valueOf";
  assertDefined(o[p]);
  assertEquals(o.valueOf, o[p]);
  assertEquals(o["valueOf"], o[p]);
}

function testInstancePropertiesDate_8() {
  o = new Date(2012, 05, 12);
  var p = "toLocaleDateString";
  assertDefined(o[p]);
  assertEquals(o.toLocaleDateString, o[p]);
  assertEquals(o["toLocaleDateString"], o[p]);
}

function testInstancePropertiesDate_9() {
  o = new Date(2012, 05, 12);
  var p = "setUTCMilliseconds";
  assertDefined(o[p]);
  assertEquals(o.setUTCMilliseconds, o[p]);
  assertEquals(o["setUTCMilliseconds"], o[p]);
}

function testInstancePropertiesDate_10() {
  o = new Date(2012, 05, 12);
  var p = "toTimeString";
  assertDefined(o[p]);
  assertEquals(o.toTimeString, o[p]);
  assertEquals(o["toTimeString"], o[p]);
}

function testInstancePropertiesDate_11() {
  o = new Date(2012, 05, 12);
  var p = "setUTCMinutes";
  assertDefined(o[p]);
  assertEquals(o.setUTCMinutes, o[p]);
  assertEquals(o["setUTCMinutes"], o[p]);
}

function testInstancePropertiesDate_12() {
  o = new Date(2012, 05, 12);
  var p = "setMilliseconds";
  assertDefined(o[p]);
  assertEquals(o.setMilliseconds, o[p]);
  assertEquals(o["setMilliseconds"], o[p]);
}

function testInstancePropertiesDate_13() {
  o = new Date(2012, 05, 12);
  var p = "getUTCDate";
  assertDefined(o[p]);
  assertEquals(o.getUTCDate, o[p]);
  assertEquals(o["getUTCDate"], o[p]);
}

function testInstancePropertiesDate_14() {
  o = new Date(2012, 05, 12);
  var p = "setSeconds";
  assertDefined(o[p]);
  assertEquals(o.setSeconds, o[p]);
  assertEquals(o["setSeconds"], o[p]);
}

function testInstancePropertiesDate_15() {
  o = new Date(2012, 05, 12);
  var p = "getUTCMilliseconds";
  assertDefined(o[p]);
  assertEquals(o.getUTCMilliseconds, o[p]);
  assertEquals(o["getUTCMilliseconds"], o[p]);
}

function testInstancePropertiesDate_16() {
  o = new Date(2012, 05, 12);
  var p = "setUTCDate";
  assertDefined(o[p]);
  assertEquals(o.setUTCDate, o[p]);
  assertEquals(o["setUTCDate"], o[p]);
}

function testInstancePropertiesDate_17() {
  o = new Date(2012, 05, 12);
  var p = "getUTCMinutes";
  assertDefined(o[p]);
  assertEquals(o.getUTCMinutes, o[p]);
  assertEquals(o["getUTCMinutes"], o[p]);
}

function testInstancePropertiesDate_18() {
  o = new Date(2012, 05, 12);
  var p = "toDateString";
  assertDefined(o[p]);
  assertEquals(o.toDateString, o[p]);
  assertEquals(o["toDateString"], o[p]);
}

function testInstancePropertiesDate_19() {
  o = new Date(2012, 05, 12);
  var p = "toString";
  assertDefined(o[p]);
  assertEquals(o.toString, o[p]);
  assertEquals(o["toString"], o[p]);
}

function testInstancePropertiesDate_20() {
  o = new Date(2012, 05, 12);
  var p = "setDate";
  assertDefined(o[p]);
  assertEquals(o.setDate, o[p]);
  assertEquals(o["setDate"], o[p]);
}

function testInstancePropertiesDate_21() {
  o = new Date(2012, 05, 12);
  var p = "setHours";
  assertDefined(o[p]);
  assertEquals(o.setHours, o[p]);
  assertEquals(o["setHours"], o[p]);
}

function testInstancePropertiesDate_22() {
  o = new Date(2012, 05, 12);
  var p = "getMonth";
  assertDefined(o[p]);
  assertEquals(o.getMonth, o[p]);
  assertEquals(o["getMonth"], o[p]);
}

function testInstancePropertiesDate_23() {
  o = new Date(2012, 05, 12);
  var p = "setFullYear";
  assertDefined(o[p]);
  assertEquals(o.setFullYear, o[p]);
  assertEquals(o["setFullYear"], o[p]);
}

function testInstancePropertiesDate_24() {
  o = new Date(2012, 05, 12);
  var p = "getUTCHours";
  assertDefined(o[p]);
  assertEquals(o.getUTCHours, o[p]);
  assertEquals(o["getUTCHours"], o[p]);
}

function testInstancePropertiesDate_25() {
  o = new Date(2012, 05, 12);
  var p = "toLocaleTimeString";
  assertDefined(o[p]);
  assertEquals(o.toLocaleTimeString, o[p]);
  assertEquals(o["toLocaleTimeString"], o[p]);
}

function testInstancePropertiesDate_26() {
  o = new Date(2012, 05, 12);
  var p = "setUTCSeconds";
  assertDefined(o[p]);
  assertEquals(o.setUTCSeconds, o[p]);
  assertEquals(o["setUTCSeconds"], o[p]);
}

function testInstancePropertiesDate_27() {
  o = new Date(2012, 05, 12);
  var p = "setUTCMonth";
  assertDefined(o[p]);
  assertEquals(o.setUTCMonth, o[p]);
  assertEquals(o["setUTCMonth"], o[p]);
}

function testInstancePropertiesDate_28() {
  o = new Date(2012, 05, 12);
  var p = "getFullYear";
  assertDefined(o[p]);
  assertEquals(o.getFullYear, o[p]);
  assertEquals(o["getFullYear"], o[p]);
}

function testInstancePropertiesDate_29() {
  o = new Date(2012, 05, 12);
  var p = "setMinutes";
  assertDefined(o[p]);
  assertEquals(o.setMinutes, o[p]);
  assertEquals(o["setMinutes"], o[p]);
}

function testInstancePropertiesDate_30() {
  o = new Date(2012, 05, 12);
  var p = "getDay";
  assertDefined(o[p]);
  assertEquals(o.getDay, o[p]);
  assertEquals(o["getDay"], o[p]);
}

function testInstancePropertiesDate_31() {
  o = new Date(2012, 05, 12);
  var p = "getUTCSeconds";
  assertDefined(o[p]);
  assertEquals(o.getUTCSeconds, o[p]);
  assertEquals(o["getUTCSeconds"], o[p]);
}

function testInstancePropertiesDate_32() {
  o = new Date(2012, 05, 12);
  var p = "getUTCFullYear";
  assertDefined(o[p]);
  assertEquals(o.getUTCFullYear, o[p]);
  assertEquals(o["getUTCFullYear"], o[p]);
}

function testInstancePropertiesDate_33() {
  o = new Date(2012, 05, 12);
  var p = "setMonth";
  assertDefined(o[p]);
  assertEquals(o.setMonth, o[p]);
  assertEquals(o["setMonth"], o[p]);
}

function testInstancePropertiesDate_34() {
  o = new Date(2012, 05, 12);
  var p = "setUTCHours";
  assertDefined(o[p]);
  assertEquals(o.setUTCHours, o[p]);
  assertEquals(o["setUTCHours"], o[p]);
}

function testInstancePropertiesDate_35() {
  o = new Date(2012, 05, 12);
  var p = "getTimezoneOffset";
  assertDefined(o[p]);
  assertEquals(o.getTimezoneOffset, o[p]);
  assertEquals(o["getTimezoneOffset"], o[p]);
}

function testInstancePropertiesDate_36() {
  o = new Date(2012, 05, 12);
  var p = "getUTCMonth";
  assertDefined(o[p]);
  assertEquals(o.getUTCMonth, o[p]);
  assertEquals(o["getUTCMonth"], o[p]);
}

function testInstancePropertiesDate_37() {
  o = new Date(2012, 05, 12);
  var p = "setUTCFullYear";
  assertDefined(o[p]);
  assertEquals(o.setUTCFullYear, o[p]);
  assertEquals(o["setUTCFullYear"], o[p]);
}

function testInstancePropertiesDate_38() {
  o = new Date(2012, 05, 12);
  var p = "getMilliseconds";
  assertDefined(o[p]);
  assertEquals(o.getMilliseconds, o[p]);
  assertEquals(o["getMilliseconds"], o[p]);
}

function testInstancePropertiesDate_39() {
  o = new Date(2012, 05, 12);
  var p = "constructor";
  assertDefined(o[p]);
  assertEquals(o.constructor, o[p]);
  assertEquals(o["constructor"], o[p]);
}

function testInstancePropertiesDate_40() {
  o = new Date(2012, 05, 12);
  var p = "setTime";
  assertDefined(o[p]);
  assertEquals(o.setTime, o[p]);
  assertEquals(o["setTime"], o[p]);
}

function testInstancePropertiesDate_41() {
  o = new Date(2012, 05, 12);
  var p = "getDate";
  assertDefined(o[p]);
  assertEquals(o.getDate, o[p]);
  assertEquals(o["getDate"], o[p]);
}

function testInstancePropertiesDate_42() {
  var o = new Date(2012, 05, 12);
  assertUndefined(o["parse"]);
}

function testInstancePropertiesDate_43() {
  var o = new Date(2012, 05, 12);
  assertUndefined(o["UTC"]);
}

function testInstancePropertiesDate_44() {
  var o = new Date(2012, 05, 12);
  assertUndefined(o["now"]);
}

function testInstancePropertiesDate_45() {
  var o = new Date(2012, 05, 12);
  assertUndefined(o["prototype"]);
}

function testInstancePropertiesDate_46() {
  o = new Date(2012, 05, 12);
  p = "getUTCDay";
  assertDefined(o[p]);
  assertEquals(o.getUTCDay, o[p]);
  assertEquals(o["getUTCDay"], o[p]);
}

function testInstancePropertiesDate_47() {
  o = new Date(2012, 05, 12);
  p = "toLocaleString";
  assertDefined(o[p]);
  assertEquals(o.toLocaleString, o[p]);
  assertEquals(o["toLocaleString"], o[p]);
}

function testInstancePropertiesDate_48() {
  o = new Date(2012, 05, 12);
  p = "getMinutes";
  assertDefined(o[p]);
  assertEquals(o.getMinutes, o[p]);
  assertEquals(o["getMinutes"], o[p]);
}

function testInstancePropertiesDate_49() {
  o = new Date(2012, 05, 12);
  p = "getSeconds";
  assertDefined(o[p]);
  assertEquals(o.getSeconds, o[p]);
  assertEquals(o["getSeconds"], o[p]);
}

function testInstancePropertiesDate_50() {
  o = new Date(2012, 05, 12);
  p = "getTime";
  assertDefined(o[p]);
  assertEquals(o.getTime, o[p]);
  assertEquals(o["getTime"], o[p]);
}

function testInstancePropertiesDate_51() {
  o = new Date(2012, 05, 12);
  p = "getHours";
  assertDefined(o[p]);
  assertEquals(o.getHours, o[p]);
  assertEquals(o["getHours"], o[p]);
}

function testInstancePropertiesDate_52() {
  o = new Date(2012, 05, 12);
  p = "valueOf";
  assertDefined(o[p]);
  assertEquals(o.valueOf, o[p]);
  assertEquals(o["valueOf"], o[p]);
}

function testInstancePropertiesDate_53() {
  o = new Date(2012, 05, 12);
  p = "toLocaleDateString";
  assertDefined(o[p]);
  assertEquals(o.toLocaleDateString, o[p]);
  assertEquals(o["toLocaleDateString"], o[p]);
}

function testInstancePropertiesDate_54() {
  o = new Date(2012, 05, 12);
  p = "setUTCMilliseconds";
  assertDefined(o[p]);
  assertEquals(o.setUTCMilliseconds, o[p]);
  assertEquals(o["setUTCMilliseconds"], o[p]);
}

function testInstancePropertiesDate_55() {
  o = new Date(2012, 05, 12);
  p = "toTimeString";
  assertDefined(o[p]);
  assertEquals(o.toTimeString, o[p]);
  assertEquals(o["toTimeString"], o[p]);
}

function testInstancePropertiesDate_56() {
  o = new Date(2012, 05, 12);
  p = "setUTCMinutes";
  assertDefined(o[p]);
  assertEquals(o.setUTCMinutes, o[p]);
  assertEquals(o["setUTCMinutes"], o[p]);
}

function testInstancePropertiesDate_57() {
  o = new Date(2012, 05, 12);
  p = "setMilliseconds";
  assertDefined(o[p]);
  assertEquals(o.setMilliseconds, o[p]);
  assertEquals(o["setMilliseconds"], o[p]);
}

function testInstancePropertiesDate_58() {
  o = new Date(2012, 05, 12);
  p = "getUTCDate";
  assertDefined(o[p]);
  assertEquals(o.getUTCDate, o[p]);
  assertEquals(o["getUTCDate"], o[p]);
}

function testInstancePropertiesDate_59() {
  o = new Date(2012, 05, 12);
  p = "setSeconds";
  assertDefined(o[p]);
  assertEquals(o.setSeconds, o[p]);
  assertEquals(o["setSeconds"], o[p]);
}

function testInstancePropertiesDate_60() {
  o = new Date(2012, 05, 12);
  p = "getUTCMilliseconds";
  assertDefined(o[p]);
  assertEquals(o.getUTCMilliseconds, o[p]);
  assertEquals(o["getUTCMilliseconds"], o[p]);
}

function testInstancePropertiesDate_61() {
  o = new Date(2012, 05, 12);
  p = "setUTCDate";
  assertDefined(o[p]);
  assertEquals(o.setUTCDate, o[p]);
  assertEquals(o["setUTCDate"], o[p]);
}

function testInstancePropertiesDate_62() {
  o = new Date(2012, 05, 12);
  p = "getUTCMinutes";
  assertDefined(o[p]);
  assertEquals(o.getUTCMinutes, o[p]);
  assertEquals(o["getUTCMinutes"], o[p]);
}

function testInstancePropertiesDate_63() {
  o = new Date(2012, 05, 12);
  p = "toDateString";
  assertDefined(o[p]);
  assertEquals(o.toDateString, o[p]);
  assertEquals(o["toDateString"], o[p]);
}

function testInstancePropertiesDate_64() {
  o = new Date(2012, 05, 12);
  p = "toString";
  assertDefined(o[p]);
  assertEquals(o.toString, o[p]);
  assertEquals(o["toString"], o[p]);
}

function testInstancePropertiesDate_65() {
  o = new Date(2012, 05, 12);
  p = "setDate";
  assertDefined(o[p]);
  assertEquals(o.setDate, o[p]);
  assertEquals(o["setDate"], o[p]);
}

function testInstancePropertiesDate_66() {
  o = new Date(2012, 05, 12);
  p = "setHours";
  assertDefined(o[p]);
  assertEquals(o.setHours, o[p]);
  assertEquals(o["setHours"], o[p]);
}

function testInstancePropertiesDate_67() {
  o = new Date(2012, 05, 12);
  p = "getMonth";
  assertDefined(o[p]);
  assertEquals(o.getMonth, o[p]);
  assertEquals(o["getMonth"], o[p]);
}

function testInstancePropertiesDate_68() {
  o = new Date(2012, 05, 12);
  p = "setFullYear";
  assertDefined(o[p]);
  assertEquals(o.setFullYear, o[p]);
  assertEquals(o["setFullYear"], o[p]);
}

function testInstancePropertiesDate_69() {
  o = new Date(2012, 05, 12);
  p = "getUTCHours";
  assertDefined(o[p]);
  assertEquals(o.getUTCHours, o[p]);
  assertEquals(o["getUTCHours"], o[p]);
}

function testInstancePropertiesDate_70() {
  o = new Date(2012, 05, 12);
  p = "toLocaleTimeString";
  assertDefined(o[p]);
  assertEquals(o.toLocaleTimeString, o[p]);
  assertEquals(o["toLocaleTimeString"], o[p]);
}

function testInstancePropertiesDate_71() {
  o = new Date(2012, 05, 12);
  p = "setUTCSeconds";
  assertDefined(o[p]);
  assertEquals(o.setUTCSeconds, o[p]);
  assertEquals(o["setUTCSeconds"], o[p]);
}

function testInstancePropertiesDate_72() {
  o = new Date(2012, 05, 12);
  p = "setUTCMonth";
  assertDefined(o[p]);
  assertEquals(o.setUTCMonth, o[p]);
  assertEquals(o["setUTCMonth"], o[p]);
}

function testInstancePropertiesDate_73() {
  o = new Date(2012, 05, 12);
  p = "getFullYear";
  assertDefined(o[p]);
  assertEquals(o.getFullYear, o[p]);
  assertEquals(o["getFullYear"], o[p]);
}

function testInstancePropertiesDate_74() {
  o = new Date(2012, 05, 12);
  p = "setMinutes";
  assertDefined(o[p]);
  assertEquals(o.setMinutes, o[p]);
  assertEquals(o["setMinutes"], o[p]);
}

function testInstancePropertiesDate_75() {
  o = new Date(2012, 05, 12);
  p = "getDay";
  assertDefined(o[p]);
  assertEquals(o.getDay, o[p]);
  assertEquals(o["getDay"], o[p]);
}

function testInstancePropertiesDate_76() {
  o = new Date(2012, 05, 12);
  p = "getUTCSeconds";
  assertDefined(o[p]);
  assertEquals(o.getUTCSeconds, o[p]);
  assertEquals(o["getUTCSeconds"], o[p]);
}

function testInstancePropertiesDate_77() {
  o = new Date(2012, 05, 12);
  p = "getUTCFullYear";
  assertDefined(o[p]);
  assertEquals(o.getUTCFullYear, o[p]);
  assertEquals(o["getUTCFullYear"], o[p]);
}

function testInstancePropertiesDate_78() {
  o = new Date(2012, 05, 12);
  p = "setMonth";
  assertDefined(o[p]);
  assertEquals(o.setMonth, o[p]);
  assertEquals(o["setMonth"], o[p]);
}

function testInstancePropertiesDate_79() {
  o = new Date(2012, 05, 12);
  p = "setUTCHours";
  assertDefined(o[p]);
  assertEquals(o.setUTCHours, o[p]);
  assertEquals(o["setUTCHours"], o[p]);
}

function testInstancePropertiesDate_80() {
  o = new Date(2012, 05, 12);
  p = "getTimezoneOffset";
  assertDefined(o[p]);
  assertEquals(o.getTimezoneOffset, o[p]);
  assertEquals(o["getTimezoneOffset"], o[p]);
}

function testInstancePropertiesDate_81() {
  o = new Date(2012, 05, 12);
  p = "getUTCMonth";
  assertDefined(o[p]);
  assertEquals(o.getUTCMonth, o[p]);
  assertEquals(o["getUTCMonth"], o[p]);
}

function testInstancePropertiesDate_82() {
  o = new Date(2012, 05, 12);
  p = "setUTCFullYear";
  assertDefined(o[p]);
  assertEquals(o.setUTCFullYear, o[p]);
  assertEquals(o["setUTCFullYear"], o[p]);
}

function testInstancePropertiesDate_83() {
  o = new Date(2012, 05, 12);
  p = "getMilliseconds";
  assertDefined(o[p]);
  assertEquals(o.getMilliseconds, o[p]);
  assertEquals(o["getMilliseconds"], o[p]);
}

function testInstancePropertiesDate_84() {
  o = new Date(2012, 05, 12);
  p = "constructor";
  assertDefined(o[p]);
  assertEquals(o.constructor, o[p]);
  assertEquals(o["constructor"], o[p]);
}

function testInstancePropertiesDate_85() {
  o = new Date(2012, 05, 12);
  p = "setTime";
  assertDefined(o[p]);
  assertEquals(o.setTime, o[p]);
  assertEquals(o["setTime"], o[p]);
}

function testInstancePropertiesDate_86() {
  o = new Date(2012, 05, 12);
  p = "getDate";
  assertDefined(o[p]);
  assertEquals(o.getDate, o[p]);
  assertEquals(o["getDate"], o[p]);
}

function testInstancePropertiesDate_87() {
  o = new Date(2012, 05, 12);
  assertUndefined(o["parse"]);
}

function testInstancePropertiesDate_88() {
  o = new Date(2012, 05, 12);
  assertUndefined(o["UTC"]);
}

function testInstancePropertiesDate_89() {
  o = new Date(2012, 05, 12);
  assertUndefined(o["now"]);
}

function testInstancePropertiesDate_90() {
  o = new Date(2012, 05, 12);
  assertUndefined(o["prototype"]);
}

function testPropertiesRegExp_1() {
  var p = "ignoreCase";
  assertUndefined(RegExp[p]);
}

function testPropertiesRegExp_2() {
  var p = "source";
  assertUndefined(RegExp[p]);
}

function testPropertiesRegExp_3() {
  var p = "global";
  assertUndefined(RegExp[p]);
}

function testPropertiesRegExp_4() {
  var p = "lastIndex";
  assertUndefined(RegExp[p]);
}

function testPropertiesRegExp_5() {
  var p = "test";
  assertDefined(RegExp.prototype[p]);
  assertEquals(RegExp.prototype.test, RegExp.prototype[p]);
}

function testPropertiesRegExp_6() {
  var p = "constructor";
  assertDefined(RegExp.prototype[p]);
  assertEquals(RegExp.prototype.constructor, RegExp.prototype[p]);
}

function testPropertiesRegExp_7() {
  var p = "toString";
  assertDefined(RegExp.prototype[p]);
  assertEquals(RegExp.prototype.toString, RegExp.prototype[p]);
}

function testPropertiesRegExp_8() {
  var p = "exec";
  assertDefined(RegExp.prototype[p]);
  assertEquals(RegExp.prototype.exec, RegExp.prototype[p]);
}

function testPropertiesRegExp_9() {
  var p = "prototype";
  assertDefined(RegExp[p]);
  assertEquals(RegExp.prototype, RegExp[p]);
}

function testPropertiesRegExp_10() {
  var p = "multiline";
  assertDefined(RegExp[p]);
  assertEquals(RegExp.multiline, RegExp[p]);
}

function testPropertiesRegExp_11() {
  p = "ignoreCase";
  assertUndefined(RegExp[p]);
}

function testPropertiesRegExp_12() {
  p = "source";
  assertUndefined(RegExp[p]);
}

function testPropertiesRegExp_13() {
  p = "global";
  assertUndefined(RegExp[p]);
}

function testPropertiesRegExp_14() {
  p = "lastIndex";
  assertUndefined(RegExp[p]);
}

function testPropertiesRegExp_15() {
  p = "test";
  assertDefined(RegExp.prototype[p]);
  assertEquals(RegExp.prototype.test, RegExp.prototype[p]);
}

function testPropertiesRegExp_16() {
  p = "constructor";
  assertDefined(RegExp.prototype[p]);
  assertEquals(RegExp.prototype.constructor, RegExp.prototype[p]);
}

function testPropertiesRegExp_17() {
  p = "toString";
  assertDefined(RegExp.prototype[p]);
  assertEquals(RegExp.prototype.toString, RegExp.prototype[p]);
}

function testPropertiesRegExp_18() {
  p = "exec";
  assertDefined(RegExp.prototype[p]);
  assertEquals(RegExp.prototype.exec, RegExp.prototype[p]);
}

function testPropertiesRegExp_19() {
  p = "prototype";
  assertDefined(RegExp[p]);
  assertEquals(RegExp.prototype, RegExp[p]);
}

function testPropertiesRegExp_20() {
  p = "multiline";
  assertDefined(RegExp[p]);
  assertEquals(RegExp.multiline, RegExp[p]);
}

function testInstancePropertiesRegExp_1() {
  o = /abc/;
  var p = "ignoreCase";
  assertDefined(o[p]);
  assertEquals(o.ignoreCase, o[p]);
  assertEquals(o["ignoreCase"], o[p]);
}

function testInstancePropertiesRegExp_2() {
  o = /abc/;
  var p = "source";
  assertDefined(o[p]);
  assertEquals(o.source, o[p]);
  assertEquals(o["source"], o[p]);
}

function testInstancePropertiesRegExp_3() {
  o = /abc/;
  var p = "global";
  assertDefined(o[p]);
  assertEquals(o.global, o[p]);
  assertEquals(o["global"], o[p]);
}

function testInstancePropertiesRegExp_4() {
  o = /abc/;
  var p = "multiline";
  assertDefined(o[p]);
  assertEquals(o.multiline, o[p]);
  assertEquals(o["multiline"], o[p]);
}

function testInstancePropertiesRegExp_5() {
  o = /abc/;
  var p = "lastIndex";
  assertDefined(o[p]);
  assertEquals(o.lastIndex, o[p]);
  assertEquals(o["lastIndex"], o[p]);
}

function testInstancePropertiesRegExp_6() {
  o = /abc/;
  var p = "test";
  assertDefined(o[p]);
  assertEquals(o.test, o[p]);
  assertEquals(o["test"], o[p]);
}

function testInstancePropertiesRegExp_7() {
  o = /abc/;
  var p = "constructor";
  assertDefined(o[p]);
  assertEquals(o.constructor, o[p]);
  assertEquals(o["constructor"], o[p]);
}

function testInstancePropertiesRegExp_8() {
  o = /abc/;
  var p = "toString";
  assertDefined(o[p]);
  assertEquals(o.toString, o[p]);
  assertEquals(o["toString"], o[p]);
}

function testInstancePropertiesRegExp_9() {
  o = /abc/;
  var p = "exec";
  assertDefined(o[p]);
  assertEquals(o.exec, o[p]);
  assertEquals(o["exec"], o[p]);
}

function testInstancePropertiesRegExp_10() {
  var o = /abc/;
  assertUndefined(o["prototype"]);
}

function testInstancePropertiesRegExp_12() {
  o = new RegExp('abc');
  var p = "ignoreCase";
  assertDefined(o[p]);
  assertEquals(o.ignoreCase, o[p]);
  assertEquals(o["ignoreCase"], o[p]);
}

function testInstancePropertiesRegExp_13() {
  o = new RegExp('abc');
  var p = "source";
  assertDefined(o[p]);
  assertEquals(o.source, o[p]);
  assertEquals(o["source"], o[p]);
}

function testInstancePropertiesRegExp_14() {
  o = new RegExp('abc');
  var p = "global";
  assertDefined(o[p]);
  assertEquals(o.global, o[p]);
  assertEquals(o["global"], o[p]);
}

function testInstancePropertiesRegExp_15() {
  o = new RegExp('abc');
  var p = "multiline";
  assertDefined(o[p]);
  assertEquals(o.multiline, o[p]);
  assertEquals(o["multiline"], o[p]);
}

function testInstancePropertiesRegExp_16() {
  o = new RegExp('abc');
  var p = "lastIndex";
  assertDefined(o[p]);
  assertEquals(o.lastIndex, o[p]);
  assertEquals(o["lastIndex"], o[p]);
}

function testInstancePropertiesRegExp_17() {
  o = new RegExp('abc');
  var p = "test";
  assertDefined(o[p]);
  assertEquals(o.test, o[p]);
  assertEquals(o["test"], o[p]);
}

function testInstancePropertiesRegExp_18() {
  o = new RegExp('abc');
  var p = "constructor";
  assertDefined(o[p]);
  assertEquals(o.constructor, o[p]);
  assertEquals(o["constructor"], o[p]);
}

function testInstancePropertiesRegExp_19() {
  o = new RegExp('abc');
  var p = "toString";
  assertDefined(o[p]);
  assertEquals(o.toString, o[p]);
  assertEquals(o["toString"], o[p]);
}

function testInstancePropertiesRegExp_20() {
  o = new RegExp('abc');
  var p = "exec";
  assertDefined(o[p]);
  assertEquals(o.exec, o[p]);
  assertEquals(o["exec"], o[p]);
}

function testInstancePropertiesRegExp_21() {
  var o = new RegExp('abc');
  assertUndefined(o["prototype"]);
}

function testInstancePropertiesRegExp_23() {
  o = /abc/;
  p = "ignoreCase";
  assertDefined(o[p]);
  assertEquals(o.ignoreCase, o[p]);
  assertEquals(o["ignoreCase"], o[p]);
}

function testInstancePropertiesRegExp_24() {
  o = /abc/;
  p = "source";
  assertDefined(o[p]);
  assertEquals(o.source, o[p]);
  assertEquals(o["source"], o[p]);
}

function testInstancePropertiesRegExp_25() {
  o = /abc/;
  p = "global";
  assertDefined(o[p]);
  assertEquals(o.global, o[p]);
  assertEquals(o["global"], o[p]);
}

function testInstancePropertiesRegExp_26() {
  o = /abc/;
  p = "multiline";
  assertDefined(o[p]);
  assertEquals(o.multiline, o[p]);
  assertEquals(o["multiline"], o[p]);
}

function testInstancePropertiesRegExp_27() {
  o = /abc/;
  p = "lastIndex";
  assertDefined(o[p]);
  assertEquals(o.lastIndex, o[p]);
  assertEquals(o["lastIndex"], o[p]);
}

function testInstancePropertiesRegExp_28() {
  o = /abc/;
  p = "test";
  assertDefined(o[p]);
  assertEquals(o.test, o[p]);
  assertEquals(o["test"], o[p]);
}

function testInstancePropertiesRegExp_29() {
  o = /abc/;
  p = "constructor";
  assertDefined(o[p]);
  assertEquals(o.constructor, o[p]);
  assertEquals(o["constructor"], o[p]);
}

function testInstancePropertiesRegExp_30() {
  o = /abc/;
  p = "toString";
  assertDefined(o[p]);
  assertEquals(o.toString, o[p]);
  assertEquals(o["toString"], o[p]);
}

function testInstancePropertiesRegExp_31() {
  o = /abc/;
  p = "exec";
  assertDefined(o[p]);
  assertEquals(o.exec, o[p]);
  assertEquals(o["exec"], o[p]);
}

function testInstancePropertiesRegExp_32() {
  o = /abc/;
  assertUndefined(o["prototype"]);
}

function testInstancePropertiesRegExp_34() {
  o = new RegExp('abc');
  p = "ignoreCase";
  assertDefined(o[p]);
  assertEquals(o.ignoreCase, o[p]);
  assertEquals(o["ignoreCase"], o[p]);
}

function testInstancePropertiesRegExp_35() {
  o = new RegExp('abc');
  p = "source";
  assertDefined(o[p]);
  assertEquals(o.source, o[p]);
  assertEquals(o["source"], o[p]);
}

function testInstancePropertiesRegExp_36() {
  o = new RegExp('abc');
  p = "global";
  assertDefined(o[p]);
  assertEquals(o.global, o[p]);
  assertEquals(o["global"], o[p]);
}

function testInstancePropertiesRegExp_37() {
  o = new RegExp('abc');
  p = "multiline";
  assertDefined(o[p]);
  assertEquals(o.multiline, o[p]);
  assertEquals(o["multiline"], o[p]);
}

function testInstancePropertiesRegExp_38() {
  o = new RegExp('abc');
  p = "lastIndex";
  assertDefined(o[p]);
  assertEquals(o.lastIndex, o[p]);
  assertEquals(o["lastIndex"], o[p]);
}

function testInstancePropertiesRegExp_39() {
  o = new RegExp('abc');
  p = "test";
  assertDefined(o[p]);
  assertEquals(o.test, o[p]);
  assertEquals(o["test"], o[p]);
}

function testInstancePropertiesRegExp_40() {
  o = new RegExp('abc');
  p = "constructor";
  assertDefined(o[p]);
  assertEquals(o.constructor, o[p]);
  assertEquals(o["constructor"], o[p]);
}

function testInstancePropertiesRegExp_41() {
  o = new RegExp('abc');
  p = "toString";
  assertDefined(o[p]);
  assertEquals(o.toString, o[p]);
  assertEquals(o["toString"], o[p]);
}

function testInstancePropertiesRegExp_42() {
  o = new RegExp('abc');
  p = "exec";
  assertDefined(o[p]);
  assertEquals(o.exec, o[p]);
  assertEquals(o["exec"], o[p]);
}

function testInstancePropertiesRegExp_43() {
  o = new RegExp('abc');
  assertUndefined(o["prototype"]);
}

function testPropertiesError_1() {
  var p = "message";
  assertDefined(Error.prototype[p]);
  assertEquals(Error.prototype.message, Error.prototype[p]);
}

function testPropertiesError_2() {
  var p = "toString";
  assertDefined(Error.prototype[p]);
  assertEquals(Error.prototype.toString, Error.prototype[p]);
}

function testPropertiesError_3() {
  var p = "name";
  assertDefined(Error.prototype[p]);
  assertEquals(Error.prototype.name, Error.prototype[p]);
}

function testPropertiesError_4() {
  var p = "constructor";
  assertDefined(Error.prototype[p]);
  assertEquals(Error.prototype.constructor, Error.prototype[p]);
}

function testPropertiesError_5() {
  var p = "prototype";
  assertDefined(Error[p]);
  assertEquals(Error.prototype, Error[p]);
}

function testPropertiesError_6() {
  p = "message";
  assertDefined(Error.prototype[p]);
  assertEquals(Error.prototype.message, Error.prototype[p]);
}

function testPropertiesError_7() {
  p = "toString";
  assertDefined(Error.prototype[p]);
  assertEquals(Error.prototype.toString, Error.prototype[p]);
}

function testPropertiesError_8() {
  p = "name";
  assertDefined(Error.prototype[p]);
  assertEquals(Error.prototype.name, Error.prototype[p]);
}

function testPropertiesError_9() {
  p = "constructor";
  assertDefined(Error.prototype[p]);
  assertEquals(Error.prototype.constructor, Error.prototype[p]);
}

function testPropertiesError_10() {
  p = "prototype";
  assertDefined(Error[p]);
  assertEquals(Error.prototype, Error[p]);
}

function testInstancePropertiesError_1() {
  o = new Error();
  var p = "message";
  assertDefined(o[p]);
  assertEquals(o.message, o[p]);
  assertEquals(o["message"], o[p]);
}

function testInstancePropertiesError_2() {
  o = new Error();
  var p = "toString";
  assertDefined(o[p]);
  assertEquals(o.toString, o[p]);
  assertEquals(o["toString"], o[p]);
}

function testInstancePropertiesError_3() {
  o = new Error();
  var p = "name";
  assertDefined(o[p]);
  assertEquals(o.name, o[p]);
  assertEquals(o["name"], o[p]);
}

function testInstancePropertiesError_4() {
  o = new Error();
  var p = "constructor";
  assertDefined(o[p]);
  assertEquals(o.constructor, o[p]);
  assertEquals(o["constructor"], o[p]);
}

function testInstancePropertiesError_5() {
  var o = new Error();
  assertUndefined(o["prototype"]);
}

function testInstancePropertiesError_6() {
  o = new Error();
  p = "message";
  assertDefined(o[p]);
  assertEquals(o.message, o[p]);
  assertEquals(o["message"], o[p]);
}

function testInstancePropertiesError_7() {
  o = new Error();
  p = "toString";
  assertDefined(o[p]);
  assertEquals(o.toString, o[p]);
  assertEquals(o["toString"], o[p]);
}

function testInstancePropertiesError_8() {
  o = new Error();
  p = "name";
  assertDefined(o[p]);
  assertEquals(o.name, o[p]);
  assertEquals(o["name"], o[p]);
}

function testInstancePropertiesError_9() {
  o = new Error();
  p = "constructor";
  assertDefined(o[p]);
  assertEquals(o.constructor, o[p]);
  assertEquals(o["constructor"], o[p]);
}

function testInstancePropertiesError_10() {
  o = new Error();
  assertUndefined(o["prototype"]);
}

function testPropertiesEvalError_1() {
  var p = "message";
  assertDefined(EvalError.prototype[p]);
  assertEquals(EvalError.prototype.message, EvalError.prototype[p]);
}

function testPropertiesEvalError_2() {
  var p = "toString";
  assertDefined(EvalError.prototype[p]);
  assertEquals(EvalError.prototype.toString, EvalError.prototype[p]);
}

function testPropertiesEvalError_3() {
  var p = "name";
  assertDefined(EvalError.prototype[p]);
  assertEquals(EvalError.prototype.name, EvalError.prototype[p]);
}

function testPropertiesEvalError_4() {
  var p = "constructor";
  assertDefined(EvalError.prototype[p]);
  assertEquals(EvalError.prototype.constructor, EvalError.prototype[p]);
}

function testPropertiesEvalError_5() {
  var p = "prototype";
  assertDefined(EvalError[p]);
  assertEquals(EvalError.prototype, EvalError[p]);
}

function testPropertiesEvalError_6() {
  p = "message";
  assertDefined(EvalError.prototype[p]);
  assertEquals(EvalError.prototype.message, EvalError.prototype[p]);
}

function testPropertiesEvalError_7() {
  p = "toString";
  assertDefined(EvalError.prototype[p]);
  assertEquals(EvalError.prototype.toString, EvalError.prototype[p]);
}

function testPropertiesEvalError_8() {
  p = "name";
  assertDefined(EvalError.prototype[p]);
  assertEquals(EvalError.prototype.name, EvalError.prototype[p]);
}

function testPropertiesEvalError_9() {
  p = "constructor";
  assertDefined(EvalError.prototype[p]);
  assertEquals(EvalError.prototype.constructor, EvalError.prototype[p]);
}

function testPropertiesEvalError_10() {
  p = "prototype";
  assertDefined(EvalError[p]);
  assertEquals(EvalError.prototype, EvalError[p]);
}

function testInstancePropertiesEvalError_1() {
  o = new EvalError();
  var p = "message";
  assertDefined(o[p]);
  assertEquals(o.message, o[p]);
  assertEquals(o["message"], o[p]);
}

function testInstancePropertiesEvalError_2() {
  o = new EvalError();
  var p = "toString";
  assertDefined(o[p]);
  assertEquals(o.toString, o[p]);
  assertEquals(o["toString"], o[p]);
}

function testInstancePropertiesEvalError_3() {
  o = new EvalError();
  var p = "name";
  assertDefined(o[p]);
  assertEquals(o.name, o[p]);
  assertEquals(o["name"], o[p]);
}

function testInstancePropertiesEvalError_4() {
  o = new EvalError();
  var p = "constructor";
  assertDefined(o[p]);
  assertEquals(o.constructor, o[p]);
  assertEquals(o["constructor"], o[p]);
}

function testInstancePropertiesEvalError_5() {
  var o = new EvalError();
  assertUndefined(o["prototype"]);
}

function testInstancePropertiesEvalError_6() {
  o = new EvalError();
  p = "message";
  assertDefined(o[p]);
  assertEquals(o.message, o[p]);
  assertEquals(o["message"], o[p]);
}

function testInstancePropertiesEvalError_7() {
  o = new EvalError();
  p = "toString";
  assertDefined(o[p]);
  assertEquals(o.toString, o[p]);
  assertEquals(o["toString"], o[p]);
}

function testInstancePropertiesEvalError_8() {
  o = new EvalError();
  p = "name";
  assertDefined(o[p]);
  assertEquals(o.name, o[p]);
  assertEquals(o["name"], o[p]);
}

function testInstancePropertiesEvalError_9() {
  o = new EvalError();
  p = "constructor";
  assertDefined(o[p]);
  assertEquals(o.constructor, o[p]);
  assertEquals(o["constructor"], o[p]);
}

function testInstancePropertiesEvalError_10() {
  o = new EvalError();
  assertUndefined(o["prototype"]);
}

function testPropertiesRangeError_1() {
  var p = "message";
  assertDefined(RangeError.prototype[p]);
  assertEquals(RangeError.prototype.message, RangeError.prototype[p]);
}

function testPropertiesRangeError_2() {
  var p = "toString";
  assertDefined(RangeError.prototype[p]);
  assertEquals(RangeError.prototype.toString, RangeError.prototype[p]);
}

function testPropertiesRangeError_3() {
  var p = "name";
  assertDefined(RangeError.prototype[p]);
  assertEquals(RangeError.prototype.name, RangeError.prototype[p]);
}

function testPropertiesRangeError_4() {
  var p = "constructor";
  assertDefined(RangeError.prototype[p]);
  assertEquals(RangeError.prototype.constructor, RangeError.prototype[p]);
}

function testPropertiesRangeError_5() {
  var p = "prototype";
  assertDefined(RangeError[p]);
  assertEquals(RangeError.prototype, RangeError[p]);
}

function testPropertiesRangeError_6() {
  p = "message";
  assertDefined(RangeError.prototype[p]);
  assertEquals(RangeError.prototype.message, RangeError.prototype[p]);
}

function testPropertiesRangeError_7() {
  p = "toString";
  assertDefined(RangeError.prototype[p]);
  assertEquals(RangeError.prototype.toString, RangeError.prototype[p]);
}

function testPropertiesRangeError_8() {
  p = "name";
  assertDefined(RangeError.prototype[p]);
  assertEquals(RangeError.prototype.name, RangeError.prototype[p]);
}

function testPropertiesRangeError_9() {
  p = "constructor";
  assertDefined(RangeError.prototype[p]);
  assertEquals(RangeError.prototype.constructor, RangeError.prototype[p]);
}

function testPropertiesRangeError_10() {
  p = "prototype";
  assertDefined(RangeError[p]);
  assertEquals(RangeError.prototype, RangeError[p]);
}

function testInstancePropertiesRangeError_1() {
  o = new RangeError();
  var p = "message";
  assertDefined(o[p]);
  assertEquals(o.message, o[p]);
  assertEquals(o["message"], o[p]);
}

function testInstancePropertiesRangeError_2() {
  o = new RangeError();
  var p = "toString";
  assertDefined(o[p]);
  assertEquals(o.toString, o[p]);
  assertEquals(o["toString"], o[p]);
}

function testInstancePropertiesRangeError_3() {
  o = new RangeError();
  var p = "name";
  assertDefined(o[p]);
  assertEquals(o.name, o[p]);
  assertEquals(o["name"], o[p]);
}

function testInstancePropertiesRangeError_4() {
  o = new RangeError();
  var p = "constructor";
  assertDefined(o[p]);
  assertEquals(o.constructor, o[p]);
  assertEquals(o["constructor"], o[p]);
}

function testInstancePropertiesRangeError_5() {
  var o = new RangeError();
  assertUndefined(o["prototype"]);
}

function testInstancePropertiesRangeError_6() {
  o = new RangeError();
  p = "message";
  assertDefined(o[p]);
  assertEquals(o.message, o[p]);
  assertEquals(o["message"], o[p]);
}

function testInstancePropertiesRangeError_7() {
  o = new RangeError();
  p = "toString";
  assertDefined(o[p]);
  assertEquals(o.toString, o[p]);
  assertEquals(o["toString"], o[p]);
}

function testInstancePropertiesRangeError_8() {
  o = new RangeError();
  p = "name";
  assertDefined(o[p]);
  assertEquals(o.name, o[p]);
  assertEquals(o["name"], o[p]);
}

function testInstancePropertiesRangeError_9() {
  o = new RangeError();
  p = "constructor";
  assertDefined(o[p]);
  assertEquals(o.constructor, o[p]);
  assertEquals(o["constructor"], o[p]);
}

function testInstancePropertiesRangeError_10() {
  o = new RangeError();
  assertUndefined(o["prototype"]);
}

function testPropertiesReferenceError_1() {
  var p = "message";
  assertDefined(ReferenceError.prototype[p]);
  assertEquals(ReferenceError.prototype.message, ReferenceError.prototype[p]);
}

function testPropertiesReferenceError_2() {
  var p = "toString";
  assertDefined(ReferenceError.prototype[p]);
  assertEquals(ReferenceError.prototype.toString, ReferenceError.prototype[p]);
}

function testPropertiesReferenceError_3() {
  var p = "name";
  assertDefined(ReferenceError.prototype[p]);
  assertEquals(ReferenceError.prototype.name, ReferenceError.prototype[p]);
}

function testPropertiesReferenceError_4() {
  var p = "constructor";
  assertDefined(ReferenceError.prototype[p]);
  assertEquals(ReferenceError.prototype.constructor, ReferenceError.prototype[p]);
}

function testPropertiesReferenceError_5() {
  var p = "prototype";
  assertDefined(ReferenceError[p]);
  assertEquals(ReferenceError.prototype, ReferenceError[p]);
}

function testPropertiesReferenceError_6() {
  p = "message";
  assertDefined(ReferenceError.prototype[p]);
  assertEquals(ReferenceError.prototype.message, ReferenceError.prototype[p]);
}

function testPropertiesReferenceError_7() {
  p = "toString";
  assertDefined(ReferenceError.prototype[p]);
  assertEquals(ReferenceError.prototype.toString, ReferenceError.prototype[p]);
}

function testPropertiesReferenceError_8() {
  p = "name";
  assertDefined(ReferenceError.prototype[p]);
  assertEquals(ReferenceError.prototype.name, ReferenceError.prototype[p]);
}

function testPropertiesReferenceError_9() {
  p = "constructor";
  assertDefined(ReferenceError.prototype[p]);
  assertEquals(ReferenceError.prototype.constructor, ReferenceError.prototype[p]);
}

function testPropertiesReferenceError_10() {
  p = "prototype";
  assertDefined(ReferenceError[p]);
  assertEquals(ReferenceError.prototype, ReferenceError[p]);
}

function testInstancePropertiesReferenceError_1() {
  o = new ReferenceError();
  var p = "message";
  assertDefined(o[p]);
  assertEquals(o.message, o[p]);
  assertEquals(o["message"], o[p]);
}

function testInstancePropertiesReferenceError_2() {
  o = new ReferenceError();
  var p = "toString";
  assertDefined(o[p]);
  assertEquals(o.toString, o[p]);
  assertEquals(o["toString"], o[p]);
}

function testInstancePropertiesReferenceError_3() {
  o = new ReferenceError();
  var p = "name";
  assertDefined(o[p]);
  assertEquals(o.name, o[p]);
  assertEquals(o["name"], o[p]);
}

function testInstancePropertiesReferenceError_4() {
  o = new ReferenceError();
  var p = "constructor";
  assertDefined(o[p]);
  assertEquals(o.constructor, o[p]);
  assertEquals(o["constructor"], o[p]);
}

function testInstancePropertiesReferenceError_5() {
  var o = new ReferenceError();
  assertUndefined(o["prototype"]);
}

function testInstancePropertiesReferenceError_6() {
  o = new ReferenceError();
  p = "message";
  assertDefined(o[p]);
  assertEquals(o.message, o[p]);
  assertEquals(o["message"], o[p]);
}

function testInstancePropertiesReferenceError_7() {
  o = new ReferenceError();
  p = "toString";
  assertDefined(o[p]);
  assertEquals(o.toString, o[p]);
  assertEquals(o["toString"], o[p]);
}

function testInstancePropertiesReferenceError_8() {
  o = new ReferenceError();
  p = "name";
  assertDefined(o[p]);
  assertEquals(o.name, o[p]);
  assertEquals(o["name"], o[p]);
}

function testInstancePropertiesReferenceError_9() {
  o = new ReferenceError();
  p = "constructor";
  assertDefined(o[p]);
  assertEquals(o.constructor, o[p]);
  assertEquals(o["constructor"], o[p]);
}

function testInstancePropertiesReferenceError_10() {
  o = new ReferenceError();
  assertUndefined(o["prototype"]);
}

function testPropertiesSyntaxError_1() {
  var p = "message";
  assertDefined(SyntaxError.prototype[p]);
  assertEquals(SyntaxError.prototype.message, SyntaxError.prototype[p]);
}

function testPropertiesSyntaxError_2() {
  var p = "toString";
  assertDefined(SyntaxError.prototype[p]);
  assertEquals(SyntaxError.prototype.toString, SyntaxError.prototype[p]);
}

function testPropertiesSyntaxError_3() {
  var p = "name";
  assertDefined(SyntaxError.prototype[p]);
  assertEquals(SyntaxError.prototype.name, SyntaxError.prototype[p]);
}

function testPropertiesSyntaxError_4() {
  var p = "constructor";
  assertDefined(SyntaxError.prototype[p]);
  assertEquals(SyntaxError.prototype.constructor, SyntaxError.prototype[p]);
}

function testPropertiesSyntaxError_5() {
  var p = "prototype";
  assertDefined(SyntaxError[p]);
  assertEquals(SyntaxError.prototype, SyntaxError[p]);
}

function testPropertiesSyntaxError_6() {
  p = "message";
  assertDefined(SyntaxError.prototype[p]);
  assertEquals(SyntaxError.prototype.message, SyntaxError.prototype[p]);
}

function testPropertiesSyntaxError_7() {
  p = "toString";
  assertDefined(SyntaxError.prototype[p]);
  assertEquals(SyntaxError.prototype.toString, SyntaxError.prototype[p]);
}

function testPropertiesSyntaxError_8() {
  p = "name";
  assertDefined(SyntaxError.prototype[p]);
  assertEquals(SyntaxError.prototype.name, SyntaxError.prototype[p]);
}

function testPropertiesSyntaxError_9() {
  p = "constructor";
  assertDefined(SyntaxError.prototype[p]);
  assertEquals(SyntaxError.prototype.constructor, SyntaxError.prototype[p]);
}

function testPropertiesSyntaxError_10() {
  p = "prototype";
  assertDefined(SyntaxError[p]);
  assertEquals(SyntaxError.prototype, SyntaxError[p]);
}

function testInstancePropertiesSyntaxError_1() {
  o = new SyntaxError();
  var p = "message";
  assertDefined(o[p]);
  assertEquals(o.message, o[p]);
  assertEquals(o["message"], o[p]);
}

function testInstancePropertiesSyntaxError_2() {
  o = new SyntaxError();
  var p = "toString";
  assertDefined(o[p]);
  assertEquals(o.toString, o[p]);
  assertEquals(o["toString"], o[p]);
}

function testInstancePropertiesSyntaxError_3() {
  o = new SyntaxError();
  var p = "name";
  assertDefined(o[p]);
  assertEquals(o.name, o[p]);
  assertEquals(o["name"], o[p]);
}

function testInstancePropertiesSyntaxError_4() {
  o = new SyntaxError();
  var p = "constructor";
  assertDefined(o[p]);
  assertEquals(o.constructor, o[p]);
  assertEquals(o["constructor"], o[p]);
}

function testInstancePropertiesSyntaxError_5() {
  var o = new SyntaxError();
  assertUndefined(o["prototype"]);
}

function testInstancePropertiesSyntaxError_6() {
  o = new SyntaxError();
  p = "message";
  assertDefined(o[p]);
  assertEquals(o.message, o[p]);
  assertEquals(o["message"], o[p]);
}

function testInstancePropertiesSyntaxError_7() {
  o = new SyntaxError();
  p = "toString";
  assertDefined(o[p]);
  assertEquals(o.toString, o[p]);
  assertEquals(o["toString"], o[p]);
}

function testInstancePropertiesSyntaxError_8() {
  o = new SyntaxError();
  p = "name";
  assertDefined(o[p]);
  assertEquals(o.name, o[p]);
  assertEquals(o["name"], o[p]);
}

function testInstancePropertiesSyntaxError_9() {
  o = new SyntaxError();
  p = "constructor";
  assertDefined(o[p]);
  assertEquals(o.constructor, o[p]);
  assertEquals(o["constructor"], o[p]);
}

function testInstancePropertiesSyntaxError_10() {
  o = new SyntaxError();
  assertUndefined(o["prototype"]);
}

function testPropertiesTypeError_1() {
  var p = "message";
  assertDefined(TypeError.prototype[p]);
  assertEquals(TypeError.prototype.message, TypeError.prototype[p]);
}

function testPropertiesTypeError_2() {
  var p = "toString";
  assertDefined(TypeError.prototype[p]);
  assertEquals(TypeError.prototype.toString, TypeError.prototype[p]);
}

function testPropertiesTypeError_3() {
  var p = "name";
  assertDefined(TypeError.prototype[p]);
  assertEquals(TypeError.prototype.name, TypeError.prototype[p]);
}

function testPropertiesTypeError_4() {
  var p = "constructor";
  assertDefined(TypeError.prototype[p]);
  assertEquals(TypeError.prototype.constructor, TypeError.prototype[p]);
}

function testPropertiesTypeError_5() {
  var p = "prototype";
  assertDefined(TypeError[p]);
  assertEquals(TypeError.prototype, TypeError[p]);
}

function testPropertiesTypeError_6() {
  p = "message";
  assertDefined(TypeError.prototype[p]);
  assertEquals(TypeError.prototype.message, TypeError.prototype[p]);
}

function testPropertiesTypeError_7() {
  p = "toString";
  assertDefined(TypeError.prototype[p]);
  assertEquals(TypeError.prototype.toString, TypeError.prototype[p]);
}

function testPropertiesTypeError_8() {
  p = "name";
  assertDefined(TypeError.prototype[p]);
  assertEquals(TypeError.prototype.name, TypeError.prototype[p]);
}

function testPropertiesTypeError_9() {
  p = "constructor";
  assertDefined(TypeError.prototype[p]);
  assertEquals(TypeError.prototype.constructor, TypeError.prototype[p]);
}

function testPropertiesTypeError_10() {
  p = "prototype";
  assertDefined(TypeError[p]);
  assertEquals(TypeError.prototype, TypeError[p]);
}

function testInstancePropertiesTypeError_1() {
  o = new TypeError();
  var p = "message";
  assertDefined(o[p]);
  assertEquals(o.message, o[p]);
  assertEquals(o["message"], o[p]);
}

function testInstancePropertiesTypeError_2() {
  o = new TypeError();
  var p = "toString";
  assertDefined(o[p]);
  assertEquals(o.toString, o[p]);
  assertEquals(o["toString"], o[p]);
}

function testInstancePropertiesTypeError_3() {
  o = new TypeError();
  var p = "name";
  assertDefined(o[p]);
  assertEquals(o.name, o[p]);
  assertEquals(o["name"], o[p]);
}

function testInstancePropertiesTypeError_4() {
  o = new TypeError();
  var p = "constructor";
  assertDefined(o[p]);
  assertEquals(o.constructor, o[p]);
  assertEquals(o["constructor"], o[p]);
}

function testInstancePropertiesTypeError_5() {
  var o = new TypeError();
  assertUndefined(o["prototype"]);
}

function testInstancePropertiesTypeError_6() {
  o = new TypeError();
  p = "message";
  assertDefined(o[p]);
  assertEquals(o.message, o[p]);
  assertEquals(o["message"], o[p]);
}

function testInstancePropertiesTypeError_7() {
  o = new TypeError();
  p = "toString";
  assertDefined(o[p]);
  assertEquals(o.toString, o[p]);
  assertEquals(o["toString"], o[p]);
}

function testInstancePropertiesTypeError_8() {
  o = new TypeError();
  p = "name";
  assertDefined(o[p]);
  assertEquals(o.name, o[p]);
  assertEquals(o["name"], o[p]);
}

function testInstancePropertiesTypeError_9() {
  o = new TypeError();
  p = "constructor";
  assertDefined(o[p]);
  assertEquals(o.constructor, o[p]);
  assertEquals(o["constructor"], o[p]);
}

function testInstancePropertiesTypeError_10() {
  o = new TypeError();
  assertUndefined(o["prototype"]);
}

function testPropertiesURIError_1() {
  var p = "message";
  assertDefined(URIError.prototype[p]);
  assertEquals(URIError.prototype.message, URIError.prototype[p]);
}

function testPropertiesURIError_2() {
  var p = "toString";
  assertDefined(URIError.prototype[p]);
  assertEquals(URIError.prototype.toString, URIError.prototype[p]);
}

function testPropertiesURIError_3() {
  var p = "name";
  assertDefined(URIError.prototype[p]);
  assertEquals(URIError.prototype.name, URIError.prototype[p]);
}

function testPropertiesURIError_4() {
  var p = "constructor";
  assertDefined(URIError.prototype[p]);
  assertEquals(URIError.prototype.constructor, URIError.prototype[p]);
}

function testPropertiesURIError_5() {
  var p = "prototype";
  assertDefined(URIError[p]);
  assertEquals(URIError.prototype, URIError[p]);
}

function testPropertiesURIError_6() {
  p = "message";
  assertDefined(URIError.prototype[p]);
  assertEquals(URIError.prototype.message, URIError.prototype[p]);
}

function testPropertiesURIError_7() {
  p = "toString";
  assertDefined(URIError.prototype[p]);
  assertEquals(URIError.prototype.toString, URIError.prototype[p]);
}

function testPropertiesURIError_8() {
  p = "name";
  assertDefined(URIError.prototype[p]);
  assertEquals(URIError.prototype.name, URIError.prototype[p]);
}

function testPropertiesURIError_9() {
  p = "constructor";
  assertDefined(URIError.prototype[p]);
  assertEquals(URIError.prototype.constructor, URIError.prototype[p]);
}

function testPropertiesURIError_10() {
  p = "prototype";
  assertDefined(URIError[p]);
  assertEquals(URIError.prototype, URIError[p]);
}

function testInstancePropertiesURIError_1() {
  o = new URIError();
  var p = "message";
  assertDefined(o[p]);
  assertEquals(o.message, o[p]);
  assertEquals(o["message"], o[p]);
}

function testInstancePropertiesURIError_2() {
  o = new URIError();
  var p = "toString";
  assertDefined(o[p]);
  assertEquals(o.toString, o[p]);
  assertEquals(o["toString"], o[p]);
}

function testInstancePropertiesURIError_3() {
  o = new URIError();
  var p = "name";
  assertDefined(o[p]);
  assertEquals(o.name, o[p]);
  assertEquals(o["name"], o[p]);
}

function testInstancePropertiesURIError_4() {
  o = new URIError();
  var p = "constructor";
  assertDefined(o[p]);
  assertEquals(o.constructor, o[p]);
  assertEquals(o["constructor"], o[p]);
}

function testInstancePropertiesURIError_5() {
  var o = new URIError();
  assertUndefined(o["prototype"]);
}

function testInstancePropertiesURIError_6() {
  o = new URIError();
  p = "message";
  assertDefined(o[p]);
  assertEquals(o.message, o[p]);
  assertEquals(o["message"], o[p]);
}

function testInstancePropertiesURIError_7() {
  o = new URIError();
  p = "toString";
  assertDefined(o[p]);
  assertEquals(o.toString, o[p]);
  assertEquals(o["toString"], o[p]);
}

function testInstancePropertiesURIError_8() {
  o = new URIError();
  p = "name";
  assertDefined(o[p]);
  assertEquals(o.name, o[p]);
  assertEquals(o["name"], o[p]);
}

function testInstancePropertiesURIError_9() {
  o = new URIError();
  p = "constructor";
  assertDefined(o[p]);
  assertEquals(o.constructor, o[p]);
  assertEquals(o["constructor"], o[p]);
}

function testInstancePropertiesURIError_10() {
  o = new URIError();
  assertUndefined(o["prototype"]);
}
