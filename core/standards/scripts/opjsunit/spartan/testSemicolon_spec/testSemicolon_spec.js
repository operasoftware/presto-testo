function testSemicolonRestricted_0() {
  var i=0;
  assertThrows(SyntaxError(), eval, "i\n++");
}

function testSemicolonRestricted_1() {
  var i=0;
  assertThrows(SyntaxError(), eval, "i\n--");
}

function testSemicolonRestricted_2() {
  foo:
  for(var i=0; i<2; i++) {
    assertThrows(SyntaxError(), eval, "continue\nfoo");
  }
}

function testSemicolonRestricted_3() {
  foo:
  for(var i=0; i<2; i++) {
    assertThrows(SyntaxError(), eval, "break\nfoo");
  }
}

function testSemicolonRestricted_4() {
  eval("function func() {return\n1;}");
  assertUndefined(func());
}

function testSemicolonRestricted_5() {
  try {
    assertThrows(SyntaxError(), eval, "throw\n'exception'");
  } catch(e) {
    assertUnreached();
  }
}

function testSemicolonInsertion_0() {
  assertEquals(3, eval("{1\n2} 3"));
}

function testSemicolonInsertion_1() {
  assertThrows(SyntaxError(), eval, "{1 2} 3");
}

function testSemicolonInsertion_2() {
  var a = 1;
  var b = 2;
  assertThrows(SyntaxError(), eval, "for(a; b\n){}");
}

function testSemicolonInsertion_3() {
  var b = 1;
  var c = function(x) {
    return x;
  };
  var d = 2;
  var e = 3;
  eval("a = b + c\n(d + e)");
  assertEquals(6, a);
}

function testSemicolonInsertion_4() {
  var a = 1;
  var b;
  var c = 1;
  eval("a=b\n++c");
  assertEquals(b,a);
  assertEquals(2, c);
}

function testSemicolonInsertion_5() {
  assertThrows(SyntaxError(), eval, "if(true)\nelse a=1\n");
}

function testSemicolonInsertion_6() {
  var a;
  var b = 4;
  var hi = 2;
  var g = {
    exec:function() {
      return 1;
    }
  };
  var c = "a";

  //There should be no automatic semicolon insertion in the following lines
  //so they should be treated as a single expression
  //a = b/hi/g.exec(c);

  a = b
  /hi/g.exec(c);

  assertEquals(2,a);
}