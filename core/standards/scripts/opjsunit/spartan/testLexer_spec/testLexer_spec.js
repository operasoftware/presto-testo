function testLineTerminator() {
  var result = [];
  var expected = [10, 13, 44, 46, 59, 8232, 8233]; // LF CR , . ; LINE_SEPARATOR PARAGRAPH_SEPARATOR
  for (var i = 0; i < expected.length; ++i) {
    try {
      eval("x = \"\"" + String.fromCharCode(expected[i]) + "x = 1");
      result.push(expected[i]);
    } catch(e) {
    }
  }
  assertEquals('' + expected, '' + result);
}

function testMultiLineComment() {
  var result = [];
  var expected = [10, 13, 8232, 8233];
  for (var i = 0; i < expected.length; ++i) {
    try {
      eval("x = \"\"/*" + String.fromCharCode(expected[i]) + "*/x = 1");
      result.push(expected[i]);
    } catch(e) {
    }
  }
  assertEquals('' + expected, '' + result);
}

function testBOM() {
  var log = [];
  var xy;

  function _test(s, shouldThrow) {
    try {
      xy = 0;
      eval(s);
      if (xy != 1)
        log.push("'" + s + "' should give 1");
    } catch(e) {
      if (!shouldThrow)
        log.push("'" + s + "' should not throw");
    }
  }

  // in keyword
  _test('va\uFEFFr xy = 1', true);
  _test('va\u200Br xy = 1', true);

  // after keyword
  _test('var\uFEFF xy = 1', false);
  _test('var\u200B xy = 1', false);

  // in token
  _test('var x\uFEFFy = 1', true);
  _test('var x\u200By = 1', true);

  // after token
  _test('var xy; xy \uFEFF = 1', false);
  _test('var xy; xy \u200B = 1', false);

  // act as whitespace?
  _test('var xy = 1; xy+\uFEFF+ ""', false);
  _test('var xy = 1; xy+\u200B+ ""', false);

  assertTrue(log.length == 0);
}

function testWhitespace() {
  var result = [];
  // Expected are according to ECMA-262 5th revision - Dec 2009 / Unicode 5.10
  // (Unicode 3.0 is baseline for ECMA, implementations are free to recognise whitespace characters
  // from later editions of Unicode.)
  var exp_in   = [0x0009, 0x000A, 0x000B, 0x000C, 0x000D,
                  0x0020, 0x0085, 0x00A0, 0x1680, 0x180E,
                  0x2000, 0x2001, 0x2002, 0x2003, 0x2004,
                  0x2005, 0x2006, 0x2007, 0x2008, 0x2009,
                  0x200A, 0x200B, 0x2028, 0x2029, 0x202F,
                  0x205F, 0x3000, 0xFEFF];
  var expected = [0x0009, 0x000A, 0x000B, 0x000C, 0x000D,
                  0x0020, 0x00A0, 0x1680, 0x180E,
                  0x2000, 0x2001, 0x2002, 0x2003, 0x2004,
                  0x2005, 0x2006, 0x2007, 0x2008, 0x2009,
                  0x200A, 0x200B, 0x2028, 0x2029, 0x202F,
                  0x205F, 0x3000, 0xFEFF];
  for (var i = 0; i < exp_in.length; ++i) {
    var s;
    try {
      eval("var" + String.fromCharCode(exp_in[i]) + "x" + exp_in[i] + "=\"\"; s = x" + exp_in[i] + "+" + exp_in[i]);
      result.push(s);
    } catch(e) {
    }
  }
  assertEquals("" + expected, "" + result);
}

function testFormatControlCharacters_0() {
  //ES5 and existing implementations, Cf characters are not
  //stripped
  var a = "‭abc‬";
  assertFalse("abc" == a);
  assertEquals(5, a.length);
}

function testEOF_0()
{
  var a = "PASS";
  var a1 = "FAIL";
  var x = eval("\\u0061");
  assertEquals("PASS", x);
}
testEOF_0.metadata={
  bug:'CORE-37907'
};

//more comprehensive tests here?

function testASI_0() {
  var result = eval("(function () { a: for (;;) { for (;;) { break/*\n*/a; } return 1; } return 2; })()");
  assertEquals(2, result);
}
testASI_0.metadata = {
  bug: "CORE-16859"
};

function testASI_1() {
  var result = eval("(function () { a: for (;;) { for (;;) { break//\na; } return 1; } return 2; })()");
  assertEquals(1, result);
}
testASI_1.metadata = {
  bug: "CORE-16859"
};

function testIdentifier_0() {
  var log = [];
  var tests = ["v\\u0061r", "cas\\u0065", "\\0066or"];
  for (var i = 0; i < tests.length; ++i) {
    try {
      eval("var " + tests[i]);
      log.push(tests[i] + " is an illegal identifier");
    } catch(e) {
      if (!e instanceof SyntaxError)
        log.push("Got exception, not SyntaxError for "+tests[i]);
    }
  }
  assertTrue(log.length == 0);
}
testIdentifier_0.metadata = {
  bug:"CORE-47441"
};

function testUseStrictASI_0() {
  var program = [ "(function (arguments) {"
		, "    'use strict'"
		, "})()"];

  assertThrows(SyntaxError(), function () {eval(program.join("\n"))});
}
testUseStrictASI_0.metadata = {
  bug:"CORE-49380"
};
