function testKeywords_0() {
  function func() {
    eval("break = 1");
  }
  assertThrows(SyntaxError(), func);
}

function testKeywords_1() {
  function func() {
    eval("else = 1");
  }
  assertThrows(SyntaxError(), func);
}

function testKeywords_2() {
  function func() {
    eval("new = 1");
  }
  assertThrows(SyntaxError(), func);
}

function testKeywords_3() {
  function func() {
    eval("var = 1");
  }
  assertThrows(SyntaxError(), func);
}

function testKeywords_4() {
  function func() {
    eval("case = 1");
  }
  assertThrows(SyntaxError(), func);
}

function testKeywords_5() {
  function func() {
    eval("finally = 1");
  }
  assertThrows(SyntaxError(), func);
}

function testKeywords_6() {
  function func() {
    eval("return = 1");
  }
  assertThrows(SyntaxError(), func);
}

function testKeywords_7() {
  function func() {
    eval("void = 1");
  }
  assertThrows(SyntaxError(), func);
}

function testKeywords_8() {
  function func() {
    eval("catch = 1");
  }
  assertThrows(SyntaxError(), func);
}

function testKeywords_9() {
  function func() {
    eval("for = 1");
  }
  assertThrows(SyntaxError(), func);
}

function testKeywords_10() {
  function func() {
    eval("switch = 1");
  }
  assertThrows(SyntaxError(), func);
}

function testKeywords_11() {
  function func() {
    eval("while = 1");
  }
  assertThrows(SyntaxError(), func);
}

function testKeywords_12() {
  function func() {
    eval("continue = 1");
  }
  assertThrows(SyntaxError(), func);
}

function testKeywords_13() {
  function func() {
    eval("function = 1");
  }
  assertThrows(SyntaxError(), func);
}

function testKeywords_14() {
  function func() {
    eval("this = 1");
  }
  assertThrows(ReferenceError(), func);
}

function testKeywords_15() {
  function func() {
    eval("with = 1");
  }
  assertThrows(SyntaxError(), func);
}

function testKeywords_16() {
  function func() {
    eval("default = 1");
  }
  assertThrows(SyntaxError(), func);
}

function testKeywords_17() {
  function func() {
    eval("if = 1");
  }
  assertThrows(SyntaxError(), func);
}

function testKeywords_18() {
  function func() {
    eval("throw = 1");
  }
  assertThrows(SyntaxError(), func);
}

function testKeywords_19() {
  function func() {
    eval("delete = 1");
  }
  assertThrows(SyntaxError(), func);
}

function testKeywords_20() {
  function func() {
    eval("in = 1");
  }
  assertThrows(SyntaxError(), func);
}

function testKeywords_21() {
  function func() {
    eval("try = 1");
  }
  assertThrows(SyntaxError(), func);
}

function testKeywords_22() {
  function func() {
    eval("do = 1");
  }
  assertThrows(SyntaxError(), func);
}

function testKeywords_23() {
  function func() {
    eval("instanceof = 1");
  }
  assertThrows(SyntaxError(), func);
}

function testKeywords_24() {
  function func() {
    eval("typeof = 1");
  }
  assertThrows(SyntaxError(), func);
}

/*
 * Commented out cases should throw per spec but do not in actual engines.
 * This is needed for compatibility, so the converse tests have been placed
 * in testReserved_required.js
 */

/*function testFutureReservedWords_0() {
  function func() {
    eval("abstract = 1");
  }
  assertThrows(SyntaxError(), func);
}

function testFutureReservedWords_1() {
  function func() {
    eval("enum = 1");
  }
  assertThrows(SyntaxError(), func);
}

function testFutureReservedWords_2() {
  function func() {
    eval("int = 1");
  }
  assertThrows(SyntaxError(), func);
}

function testFutureReservedWords_3() {
  function func() {
    eval("short = 1");
  }
  assertThrows(SyntaxError(), func);
}

function testFutureReservedWords_4() {
  function func() {
    eval("boolean = 1");
  }
  assertThrows(SyntaxError(), func);
}*/

function testFutureReservedWords_5() {
  function func() {
    eval("export = 1");
  }
  assertThrows(SyntaxError(), func);
}

/*function testFutureReservedWords_6() {
  function func() {
    eval("interface = 1");
  }
  assertThrows(SyntaxError(), func);
}

function testFutureReservedWords_7() {
  function func() {
    eval("static = 1");
  }
  assertThrows(SyntaxError(), func);
}

function testFutureReservedWords_8() {
  function func() {
    eval("byte = 1");
  }
  assertThrows(SyntaxError(), func);
}

function testFutureReservedWords_9() {
  function func() {
    eval("extends = 1");
  }
  assertThrows(SyntaxError(), func);
}

function testFutureReservedWords_10() {
  function func() {
    eval("long = 1");
  }
  assertThrows(SyntaxError(), func);
}

function testFutureReservedWords_11() {
  function func() {
    eval("super = 1");
  }
  assertThrows(SyntaxError(), func);
}

function testFutureReservedWords_12() {
  function func() {
    eval("char = 1");
  }
  assertThrows(SyntaxError(), func);
}

function testFutureReservedWords_13() {
  function func() {
    eval("final = 1");
  }
  assertThrows(SyntaxError(), func);
}

function testFutureReservedWords_14() {
  function func() {
    eval("native = 1");
  }
  assertThrows(SyntaxError(), func);
}

function testFutureReservedWords_15() {
  function func() {
    eval("synchronized = 1");
  }
  assertThrows(SyntaxError(), func);
}

function testFutureReservedWords_16() {
  function func() {
    eval("class = 1");
  }
  assertThrows(SyntaxError(), func);
}

function testFutureReservedWords_17() {
  function func() {
    eval("float = 1");
  }
  assertThrows(SyntaxError(), func);
}

function testFutureReservedWords_18() {
  function func() {
    eval("package = 1");
  }
  assertThrows(SyntaxError(), func);
}

function testFutureReservedWords_19() {
  function func() {
    eval("throws = 1");
  }
  assertThrows(SyntaxError(), func);
}*/

function testFutureReservedWords_20() {
  function func() {
    eval("const = 1");
  }
  assertThrows(SyntaxError(), func);
}

/*function testFutureReservedWords_21() {
  function func() {
    eval("goto = 1");
  }
  assertThrows(SyntaxError(), func);
}

function testFutureReservedWords_22() {
  function func() {
    eval("private = 1");
  }
  assertThrows(SyntaxError(), func);
}

function testFutureReservedWords_23() {
  function func() {
    eval("transient = 1");
  }
  assertThrows(SyntaxError(), func);
}*/

function testFutureReservedWords_24() {
  function func() {
    eval("debugger = 1");
  }
  assertThrows(SyntaxError(), func);
}

/*function testFutureReservedWords_25() {
  function func() {
    eval("implements = 1");
  }
  assertThrows(SyntaxError(), func);
}

function testFutureReservedWords_26() {
  function func() {
    eval("protected = 1");
  }
  assertThrows(SyntaxError(), func);
}

function testFutureReservedWords_27() {
  function func() {
    eval("volatile = 1");
  }
  assertThrows(SyntaxError(), func);
}

function testFutureReservedWords_28() {
  function func() {
    eval("double = 1");
  }
  assertThrows(SyntaxError(), func);
}*/

function testFutureReservedWords_29() {
  function func() {
    eval("import = 1");
  }
  assertThrows(SyntaxError(), func);
}

/*function testFutureReservedWords_30() {
  function func() {
    eval("public = 1");
  }
  assertThrows(SyntaxError(), func);
}*/

function testLiterals_0() {
  function func() {
    eval("null = 1");
  }
  assertThrows(ReferenceError(), func);
}

function testLiterals_1() {
  function func() {
    eval("true = 1");
  }
  assertThrows(ReferenceError(), func);
}

function testLiterals_2() {
  function func() {
    eval("false = 1");
  }
  assertThrows(ReferenceError(), func);
}

