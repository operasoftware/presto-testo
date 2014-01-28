function testPrototypeConstructor_0() {
  assertEquals(Error, Error.prototype.constructor);
}
testPrototypeConstructor_0.metadata = {
  bug:"CARAKAN-67"
};

function testConstructor_0() {
  function func() {
    var x = new Object();
    x.toString = function() {y};
    new Error(x);
  }
  assertThrows(ReferenceError(), func);
}
testConstructor_0.metadata = {
  bug:"CARAKAN-89"
};

function testConstructor_1() {
  assertTrue((new Error()) instanceof Error);
}

function testConstructor_2() {
  assertTrue(Error() instanceof Error);
}

function testConstructor_3() {
  var e = new Error("xxx");
  assertEquals("xxx", e.message);
}

function testConstructor_4() {
  var e = Error("xxx");
  assertEquals("xxx", e.message);
}

function testConstructor_5() {
  var x = {
    toString:function() {
      return "I am an error";
    }
  };
  var e = Error(x);
  assertEquals("I am an error", e.message);
}

function testConstructor_6() {
  var e = new Error();
  assertEquals("", e.message);
}
testConstructor_6.metadata = {
  bug:"CARAKAN-448"
};

function testPrototypeConstructor_0() {
  assertEquals(Error, Error.prototype.constructor);
}

function testPrototypeName_0() {
  assertEquals("Error", Error.prototype.name);
}

function testPrototypeMessage_0() {
  assertEquals("string", typeof Error.prototype.message);
}

function testPrototypeMessage_1() {
  assertEquals("", Error.prototype.message);
}

function testPrototypeToString_0() {
  assertEquals("string", typeof Error.prototype.toString());
}

function testEvalErrorFunction_0() {
  assertTrue(EvalError() instanceof Error);
}

function testEvalErrorFunction_1() {
  var e = EvalError("xxx");
  assertEquals("xxx", e.message);
}

function testEvalErrorConstructor_0() {
  assertTrue((new EvalError()) instanceof Error);
}

function testEvalErrorConstructor_1() {
  var e = new EvalError("xxx");
  assertEquals("xxx", e.message);
}

function testEvalErrorPrototypeConstructor_0() {
  assertEquals(EvalError, EvalError.prototype.constructor);
}

function testEvalErrorPrototypeName_0() {
  assertEquals("EvalError", EvalError.prototype.name);
}

function testEvalErrorPrototypeMessage_0() {
  assertEquals("string", typeof EvalError.prototype.message);
}

function testEvalErrorPrototypeMessage_1() {
  assertEquals("", EvalError.prototype.message);
}

function testRangeErrorFunction_0() {
  assertTrue(RangeError() instanceof Error);
}

function testRangeErrorFunction_1() {
  var e = RangeError("xxx");
  assertEquals("xxx", e.message);
}

function testRangeErrorConstructor_0() {
  assertTrue((new RangeError()) instanceof Error);
}

function testRangeErrorConstructor_1() {
  var e = new RangeError("xxx");
  assertEquals("xxx", e.message);
}

function testRangeErrorPrototypeConstructor_0() {
  assertEquals(RangeError, RangeError.prototype.constructor);
}

function testRangeErrorPrototypeName_0() {
  assertEquals("RangeError", RangeError.prototype.name);
}

function testRangeErrorPrototypeMessage_0() {
  assertEquals("string", typeof RangeError.prototype.message);
}

function testRangeErrorPrototypeMessage_1() {
  assertEquals("", RangeError.prototype.message);
}

function testReferenceErrorFunction_0() {
  assertTrue(ReferenceError() instanceof Error);
}

function testReferenceErrorFunction_1() {
  var e = ReferenceError("xxx");
  assertEquals("xxx", e.message);
}

function testReferenceErrorConstructor_0() {
  assertTrue((new ReferenceError()) instanceof Error);
}

function testReferenceErrorConstructor_1() {
  var e = new ReferenceError("xxx");
  assertEquals("xxx", e.message);
}

function testReferenceErrorPrototypeConstructor_0() {
  assertEquals(ReferenceError, ReferenceError.prototype.constructor);
}

function testReferenceErrorPrototypeName_0() {
  assertEquals("ReferenceError", ReferenceError.prototype.name);
}

function testReferenceErrorPrototypeMessage_0() {
  assertEquals("string", typeof ReferenceError.prototype.message);
}

function testReferenceErrorPrototypeMessage_1() {
  assertEquals("", ReferenceError.prototype.message);
}


function testSyntaxErrorFunction_0() {
  assertTrue(SyntaxError() instanceof Error);
}

function testSyntaxErrorFunction_1() {
  var e = SyntaxError("xxx");
  assertEquals("xxx", e.message);
}

function testSyntaxErrorConstructor_0() {
  assertTrue((new SyntaxError()) instanceof Error);
}

function testSyntaxErrorConstructor_1() {
  var e = new SyntaxError("xxx");
  assertEquals("xxx", e.message);
}

function testSyntaxErrorPrototypeConstructor_0() {
  assertEquals(SyntaxError, SyntaxError.prototype.constructor);
}

function testSyntaxErrorPrototypeName_0() {
  assertEquals("SyntaxError", SyntaxError.prototype.name);
}

function testSyntaxErrorPrototypeMessage_0() {
  assertEquals("string", typeof SyntaxError.prototype.message);
}

function testSyntaxErrorPrototypeMessage_1() {
  assertEquals("", SyntaxError.prototype.message);
}

function testTypeErrorFunction_0() {
  assertTrue(TypeError() instanceof Error);
}

function testTypeErrorFunction_1() {
  var e = TypeError("xxx");
  assertEquals("xxx", e.message);
}

function testTypeErrorConstructor_0() {
  assertTrue((new TypeError()) instanceof Error);
}

function testTypeErrorConstructor_1() {
  var e = new TypeError("xxx");
  assertEquals("xxx", e.message);
}

function testTypeErrorPrototypeConstructor_0() {
  assertEquals(TypeError, TypeError.prototype.constructor);
}

function testTypeErrorPrototypeName_0() {
  assertEquals("TypeError", TypeError.prototype.name);
}

function testTypeErrorPrototypeMessage_0() {
  assertEquals("string", typeof TypeError.prototype.message);
}

function testTypeErrorPrototypeMessage_1() {
  assertEquals("", TypeError.prototype.message);
}

function testURIErrorFunction_0() {
  assertTrue(URIError() instanceof Error);
}

function testURIErrorFunction_1() {
  var e = URIError("xxx");
  assertEquals("xxx", e.message);
}

function testURIErrorConstructor_0() {
  assertTrue((new URIError()) instanceof Error);
}

function testURIErrorConstructor_1() {
  var e = new URIError("xxx");
  assertEquals("xxx", e.message);
}

function testURIErrorPrototypeConstructor_0() {
  assertEquals(URIError, URIError.prototype.constructor);
}

function testURIErrorPrototypeName_0() {
  assertEquals("URIError", URIError.prototype.name);
}

function testURIErrorPrototypeMessage_0() {
  assertEquals("string", typeof URIError.prototype.message);
}

function testURIErrorPrototypeMessage_1() {
  assertEquals("", URIError.prototype.message);
}

function testMessage_0() {
  assertFalse((new Error()).hasOwnProperty("message"));
}
testMessage_0.metadata = {
  bug:"CARAKAN-382"
};

function testMessage_1() {
  assertFalse((new Error()).hasOwnProperty("name"));
}
testMessage_1.metadata = {
  bug:"CARAKAN-382"
};
