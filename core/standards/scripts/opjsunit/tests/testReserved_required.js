function testFutureReservedWords_0() {
  function func() {
    eval("abstract = 1");
  }
  assertDoesNotThrow(func);
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
  assertDoesNotThrow(func);
}

function testFutureReservedWords_3() {
  function func() {
    eval("short = 1");
  }
  assertDoesNotThrow(func);
}

function testFutureReservedWords_4() {
  function func() {
    eval("boolean = 1");
  }
  assertDoesNotThrow(func);
}

function testFutureReservedWords_6() {
  function func() {
    eval("interface = 1");
  }
  assertDoesNotThrow(func);
}

function testFutureReservedWords_7() {
  function func() {
    eval("static = 1");
  }
  assertDoesNotThrow(func);
}

function testFutureReservedWords_8() {
  function func() {
    eval("byte = 1");
  }
  assertDoesNotThrow(func);
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
  assertDoesNotThrow(func);
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
  assertDoesNotThrow(func);
}

function testFutureReservedWords_13() {
  function func() {
    eval("final = 1");
  }
  assertDoesNotThrow(func);
}

function testFutureReservedWords_14() {
  function func() {
    eval("native = 1");
  }
  assertDoesNotThrow(func);
}

function testFutureReservedWords_15() {
  function func() {
    eval("synchronized = 1");
  }
  assertDoesNotThrow(func);
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
  assertDoesNotThrow(func);
}

function testFutureReservedWords_18() {
  function func() {
    eval("package = 1");
  }
  assertDoesNotThrow(func);
}

function testFutureReservedWords_19() {
  function func() {
    eval("throws = 1");
  }
  assertDoesNotThrow(func);
}

function testFutureReservedWords_21() {
  function func() {
    eval("goto = 1");
  }
  assertDoesNotThrow(func);
}

function testFutureReservedWords_22() {
  function func() {
    eval("private = 1");
  }
  assertDoesNotThrow(func);
}

function testFutureReservedWords_23() {
  function func() {
    eval("transient = 1");
  }
  assertDoesNotThrow(func);
}

function testFutureReservedWords_25() {
  function func() {
    eval("implements = 1");
  }
  assertDoesNotThrow(func);
}

function testFutureReservedWords_26() {
  function func() {
    eval("protected = 1");
  }
  assertDoesNotThrow(func);
}

function testFutureReservedWords_27() {
  function func() {
    eval("volatile = 1");
  }
  assertDoesNotThrow(func);
}

function testFutureReservedWords_28() {
  function func() {
    eval("double = 1");
  }
  assertDoesNotThrow(func);
}

function testFutureReservedWords_29() {
  function func() {
    eval("public = 1");
  }
  assertDoesNotThrow(func);
}
