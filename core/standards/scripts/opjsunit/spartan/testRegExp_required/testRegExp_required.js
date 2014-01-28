function testInfiniteRecursion_0() {
  var foo = {
    toString: function() {
      //re.test recursively calls toString in its input
      if (this.re.test(this)) {
	return "";
      }
      return this.value;
    },
    value: "foo",
    re: /bar/
  };
  function func() {
    foo.toString();
  }
  assertThrows(RangeError(), func);
}
testInfiniteRecursion_0.metadata = {
  bug:"CARAKAN-243"
};

function testDollar_0() {
  /(a)(b)/.test('ab');
  assertEquals("a", RegExp.$1);
  assertEquals("b", RegExp.$2);
  assertEquals("",  RegExp.$3);
}
testDollar_0.metadata = {
  bug:"CARAKAN-254",
  mozilla: "js1_2/regexp/RegExp_dollar_number.js"
};

function testDollar_1() {
  /(a)(b)(c)(d)(e)(f)(g)(h)(i)(j)/.test('abcdefghij');
  assertEquals("a", RegExp.$1);
  assertEquals("i", RegExp.$9);
  assertUndefined(RegExp.$10);
}
testDollar_1.metadata = {
  bug:"CARAKAN-254",
  mozilla: "js1_2/regexp/RegExp_dollar_number.js"
};

function testDollar_2() {
  /(a)(b)(c)(d)(e)(f)(g)(h)(i)(j)/.test('abcdefghij');
  /([^(]*)\((.*)\)/.test('function(foo, bar)');
  assertEquals("function", RegExp.$1);
  assertEquals("foo, bar", RegExp.$2);
  assertEquals("", RegExp.$3);
}
testDollar_2.metadata = {
  bug:"CARAKAN-254",
  mozilla: "js1_2/regexp/RegExp_dollar_number.js"
};

function testDollar_3() {
  /(a)(b)/.test('ab');
  with(RegExp) {
    assertEquals("a", $1);
  }
}
testDollar_3.metadata = {
  bug:"CARAKAN-254",
  mozilla: "js1_2/regexp/RegExp_dollar_number.js"
};

function testTestNoArguments_0() {
  function func() {
    return /undefined/.test();
  }
  // Specification changed: first argument is just converted to a string.
  //assertThrows(TypeError(), func);
  assertTrue(func());
}
testTestNoArguments_0.metadata = {
  bug:"CARAKAN-373, CT-1347"
};

function testTestTwoArguments_0() {
  function func() {
    /a/.test('a', 'i');
  }
  assertDoesNotThrow(func, '');
}
testTestTwoArguments_0.metadata = {
  bug:"DSK-242170"
};

function testExecNoArguments_0() {
  function func() {
    return /undefined/.exec();
  }
  // Specification changed: first argument is just converted to a string.
  //assertThrows(TypeError(), func);
  assertArrayEquals(["undefined"], func());
}
testExecNoArguments_0.metadata = {
  bug:"CARAKAN-373, CT-1347"
};

function testMatchEnumOrder_0() {
  for (var i = 0; i < 20; i++) {
    var p = /^(span)($)/,
        m = "span".match(p);
    var properties = [];
    for (var prop in m)
      properties.push(prop);
    assertArrayEquals(["0","1","2","index","input"], properties);
  }
}
testMatchEnumOrder_0.metadata = {
  bug: "CARAKAN-663"
};


/* Coverage for compile(), lastMatch, rightContext, leftContext could certainly be improved upon.. :) */

function testLastMatch_0() {
    /* PASS is not crashing really, rather than exercise lastMatch/compile functionality */
    var s = "currentpage=2";
    var regEx = new RegExp();
    regEx.compile("currentpage=[0-9]{1,2}");
    regEx.exec(s);
    regEx.compile("[0-9]{1,2}$");
    regEx.exec(RegExp.lastMatch);
    assertEquals("2", RegExp.lastMatch);
}
testLastMatch_0.metadata = {
    bug: "CORE-32191"
};

function testRightContext_0() {
    var s = "currentpage=2 after";
    var regEx = new RegExp();
    regEx.compile("currentpage=[0-9]{1,2}");
    regEx.exec(s);
    regEx.compile("[0-9]{1,2}$");
    assertEquals(" after", RegExp.rightContext);
}
testRightContext_0.metadata = {
    bug: "CORE-32191"
};

function testLeftContext_0() {
    var s = "left currentpage=2";
    var regEx = new RegExp();
    regEx.compile("currentpage=[0-9]{1,2}");
    regEx.exec(s);
    regEx.compile("[0-9]{1,2}$");
    assertEquals("left ", RegExp.leftContext);
}
testLeftContext_0.metadata = {
    bug: "CORE-32191"
};

function testNotCallable_1() {
    assertThrows(TypeError(), function () { return /a/("b"); } );
}
testNotCallable_1.metadata = {
    bug: "CORE-38223"
};

function testCompile_0() {
    var foo = /a/;
    var bar = /b/;
    foo.compile(bar);
    assertEquals("/b/", foo.toString());
    assertFalse(foo == bar);
    assertEquals(foo.toString(), bar.toString());
}
testCompile_0.metadata = {
    bug: "CORE-39487"
};

function testCompile_1() {
    function checkProperties(re)
    {
	assertDefined(re.lastIndex);
	assertDefined(re.source);
	assertDefined(re.global);
	assertDefined(re.ignoreCase);
	assertDefined(re.multiline);
	assertDefined(re.constructor);
	assertDefined(re.toString);
	assertDefined(re.test);
	assertDefined(re.exec);
	assertDefined(re.compile);
    }
    function testCompile(re)
    {
	checkProperties(re);
	re.compile("a");
	checkProperties(re);
	re.exec("a");
	checkProperties(re);
    }
    testCompile(/./);
    testCompile(RegExp.prototype);
}
testCompile_1.metadata = {
    bug: "CORE-40735"
};

function testCompile_2() {
    var foo = /a/;
    var bar = "*";
    assertThrows(SyntaxError(), function () { foo.compile(bar); } );
}
testCompile_2.metadata = {
    bug: "CORE-43585"
};

function testEmptyMatcher_0() {
    var str = "(?:)?";
    var r = new RegExp(str);
    assertEquals(r.toString(), '/' + str + '/');
    str = "(?:)*";
    r = new RegExp(str);
    assertEquals(r.toString(), '/' + str + '/');
    str = "(?:){1,3}";
    r = new RegExp(str);
    assertEquals(r.toString(), '/' + str + '/');
    str = "(?:){,3}";
    r = new RegExp(str);
    assertEquals(r.toString(), '/' + str + '/');
    assertThrows(SyntaxError(), function () { new RegExp("(?:*)"); } );
    assertThrows(SyntaxError(), function () { new RegExp("(?:?)"); } );
    assertThrows(SyntaxError(), function () { new RegExp("(?:{2,3})"); } );
    assertThrows(SyntaxError(), function () { new RegExp("?"); } );
    assertThrows(SyntaxError(), function () { new RegExp("??"); } );
    assertThrows(SyntaxError(), function () { new RegExp("{2,3}{2,3}"); } );
}
testEmptyMatcher_0.metadata = {
    bug: "CORE-46657"
};

function testClass_0() {
    assertThrows(SyntaxError(), function () { new RegExp("^a[b-c"); } );
    assertThrows(SyntaxError(), function () { new RegExp("^a[b-c$"); } );
    assertThrows(SyntaxError(), function () { new RegExp("^a[b-"); } );
    assertThrows(SyntaxError(), function () { new RegExp("^a[-b"); } );
};
testClass_0.metadata = {
    bug: "CORE-46728"
};

