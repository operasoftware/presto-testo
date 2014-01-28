delete Object.prototype.__proto__;

function customProtoTest(f) {
  var getter_calls = 0, setter_calls = 0;
  Object.defineProperty(Object.prototype, "__proto__", {
			  get: function() {
			    getter_calls++;
			  },
			  set: function() {
			    setter_calls++;
			  },
			  configurable: true
			});

  try {
    f();
  } finally {
    delete Object.prototype.__proto__;
  }

  return {
    "getter_calls": getter_calls,
    "setter_calls": setter_calls
  };
}

function testDeleted_0() {
  assertFalse(Object.prototype.hasOwnProperty("__proto__"));
  assertUndefined(Object.prototype.__proto__);
  assertUndefined({}.__proto__);
}

function testObjectLiteral_0() {
  var a = {};
  var b = {__proto__: a};
  assertEquals(a, Object.getPrototypeOf(b), Object.getPrototypeOf(b) === Object.prototype ? "got Object.prototype" : "got unknown object");
}

function testObjectLiteral_1() {
  var call_count = customProtoTest(testObjectLiteral_0);
  assertObjectEquals({"getter_calls": 0, "setter_calls": 0}, call_count);
}

function testAssignment_0() {
  var a = {}, b = {};
  a.__proto__ = b;
  assertEquals(Object.prototype, Object.getPrototypeOf(a));
  assertTrue(a.hasOwnProperty("__proto__"));
  assertEquals(b, a.__proto__);
}

function testAssignment_1() {
  var f = function() {
    var a = {}, b = {};
    a.__proto__ = b;
    assertEquals(Object.prototype, Object.getPrototypeOf(a));
    assertFalse(a.hasOwnProperty("__proto__"));
    assertUndefined(a.__proto__);
  };

  var call_count = customProtoTest(f);
  assertObjectEquals({"getter_calls": 1, "setter_calls": 1}, call_count);
}