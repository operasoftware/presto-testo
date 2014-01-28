function testURIErrorPrototypeExistence_0() {
  assertDefined(URIError.prototype);
}

function testURIErrorPrototypeAttributes_0() {
  assertDontDelete(URIError, "prototype");
}

function testURIErrorPrototypeAttributes_1() {
  assertReadOnly(URIError, "prototype");
}

function testURIErrorPrototypeAttributes_2() {
  assertDontEnum(URIError, "prototype");
}

function testURIErrorPrototypeConstructorExistence_0() {
  assertDefined(URIError.prototype.constructor);
}

function testURIErrorPrototypeConstructorAttributes_0() {
  assertDelete(URIError.prototype, "constructor");
}

function testURIErrorPrototypeConstructorAttributes_1() {
  assertReadWrite(URIError.prototype, "constructor");
}

function testURIErrorPrototypeConstructorAttributes_2() {
  assertDontEnum(URIError.prototype, "constructor");
}

function testURIErrorPrototypeConstructorValue_0() {
  assertEquals(URIError, URIError.prototype.constructor);
}

function testURIErrorPrototypeNameExistence_0() {
  assertDefined(URIError.prototype.name);
}

function testURIErrorPrototypeNameAttributes_0() {
  assertDelete(URIError.prototype, "name");
}

function testURIErrorPrototypeNameAttributes_1() {
  assertReadWrite(URIError.prototype, "name");
}

function testURIErrorPrototypeNameAttributes_2() {
  assertDontEnum(URIError.prototype, "name");
}

function testURIErrorPrototypeNameValue_0() {
  assertEquals("URIError", URIError.prototype.name);
}

function testURIErrorPrototypeMessageExistence_0() {
  assertDefined(URIError.prototype.message);
}

function testURIErrorPrototypeMessageAttributes_0() {
  assertDelete(URIError.prototype, "message");
}

function testURIErrorPrototypeMessageAttributes_1() {
  assertReadWrite(URIError.prototype, "message");
}

function testURIErrorPrototypeMessageAttributes_2() {
  assertDontEnum(URIError.prototype, "message");
}

function testURIErrorPrototypeToStringExistence_0() {
  assertDefined(URIError.prototype.toString);
}

function testURIErrorPrototypeToStringAttributes_0() {
  assertDelete(URIError.prototype, "toString");
}

function testURIErrorPrototypeToStringAttributes_1() {
  assertReadWrite(URIError.prototype, "toString");
}

function testURIErrorPrototypeToStringAttributes_2() {
  assertDontEnum(URIError.prototype, "toString");
}

function testURIErrorPrototypeToStringPrototypeValue_0() {
  assertUndefined(URIError.prototype.toString.prototype);
  assertFalse(URIError.prototype.toString.hasOwnProperty("prototype"));
}

function testURIErrorPrototypeToStringLength_0() {
  assertEquals(0, URIError.prototype.toString.length);
}

function testURIErrorPrototypeToStringLengthAttributes_0() {
  assertDontDelete(URIError.prototype.toString, "length");
}

function testURIErrorPrototypeToStringLengthAttributes_1() {
  assertReadOnly(URIError.prototype.toString, "length");
}

function testURIErrorPrototypeToStringLengthAttributes_2() {
  assertDontEnum(URIError.prototype.toString, "length");
}