function testConstructor_0() {
  var r = new RegExp(".*");
  assertTrue(r instanceof RegExp);
  assertFalse(r.global);
  assertFalse(r.multiline);
  assertFalse(r.ignoreCase);
  assertEquals(0, r.lastIndex);
}

function testConstructor_1() {
  var r = new RegExp(".*", "g");
  assertTrue(r.global);
  assertFalse(r.multiline);
  assertFalse(r.ignoreCase);
  assertEquals(0, r.lastIndex);
}

function testConstructor_2() {
  var r = new RegExp(".*", "m");
  assertFalse(r.global);
  assertTrue(r.multiline);
  assertFalse(r.ignoreCase);
  assertEquals(0, r.lastIndex);
}

function testConstructor_3() {
  var r = new RegExp(".*", "i");
  assertFalse(r.global);
  assertFalse(r.multiline);
  assertTrue(r.ignoreCase);
  assertEquals(0, r.lastIndex);
}

function testConstructor_4() {
  var r = new RegExp(".*", "gm");
  assertTrue(r.global);
  assertTrue(r.multiline);
  assertFalse(r.ignoreCase);
  assertEquals(0, r.lastIndex);
}

function testConstructor_5() {
  var r = new RegExp(".*", "gmi");
  assertTrue(r.global);
  assertTrue(r.multiline);
  assertTrue(r.ignoreCase);
  assertEquals(0, r.lastIndex);
}

function testConstructor_6() {
  //repeated flag
  assertThrows(SyntaxError(), function() {new RegExp(".*", "mgmi");});
}

function testConstructor_7() {
  //repeated flag
  assertThrows(SyntaxError(), function() {new RegExp(".*", "mm");});
}

function testConstructor_8() {
  //unknown flag
  assertThrows(SyntaxError(), function() {new RegExp(".*", "me");});
}

function testConstructor_9() {
  //unknown flag
  assertThrows(SyntaxError(), function() {new RegExp(".*", "m ");});
}

function testConstructorFunction_0() {
  var r = RegExp(".*");
  assertTrue(r instanceof RegExp);
  assertFalse(r.global);
  assertFalse(r.multiline);
  assertFalse(r.ignoreCase);
  assertEquals(0, r.lastIndex);
}

function testConstructorFunction_1() {
  var r = RegExp(".*", "i");
  assertTrue(r instanceof RegExp);
  assertFalse(r.global);
  assertFalse(r.multiline);
  assertTrue(r.ignoreCase);
  assertEquals(0, r.lastIndex);
}

function testConstructorFunction_2() {
  var r = RegExp(".*", "gm");
  assertTrue(r instanceof RegExp);
  assertTrue(r.global);
  assertTrue(r.multiline);
  assertFalse(r.ignoreCase);
  assertEquals(0, r.lastIndex);
}

function testConstructorFunction_3() {
  assertThrows(SyntaxError(), function() {RegExp(".*", "mm");});
}

function testConstructorFunction_4() {
  assertThrows(SyntaxError(), function() {RegExp(".*", "meh");});
}

function testConstructorFunctionRegExp_0() {
   var r = RegExp(new RegExp(".*"));
  assertTrue(r instanceof RegExp);
  assertFalse(r.global);
  assertFalse(r.multiline);
  assertFalse(r.ignoreCase);
  assertEquals(0, r.lastIndex);
}

function testConstructorFunctionRegExp_1() {
  var r = RegExp(new RegExp(".*", "i"));
  assertTrue(r instanceof RegExp);
  assertFalse(r.global);
  assertFalse(r.multiline);
  assertTrue(r.ignoreCase);
  assertEquals(0, r.lastIndex);
}

function testConstructorFunctionRegExp_2() {
  var r = RegExp(new RegExp(".*", "gm"));
  assertTrue(r instanceof RegExp);
  assertTrue(r.global);
  assertTrue(r.multiline);
  assertFalse(r.ignoreCase);
  assertEquals(0, r.lastIndex);
}

function testConstructorFunctionRegExp_3() {
  var r = assertThrows(TypeError(),
		       function(){RegExp(new RegExp(".*", "m"), "m");});
}


function testConstructorRegexp_0() {
  var r = new RegExp(new RegExp(".*"));
  assertTrue(r instanceof RegExp);
  assertFalse(r.global);
  assertFalse(r.multiline);
  assertFalse(r.ignoreCase);
  assertEquals(0, r.lastIndex);
}

function testConstructorRegexp_1() {
  var r = new RegExp(new RegExp(".*", "g"));
  assertTrue(r instanceof RegExp);
  assertTrue(r.global);
  assertFalse(r.multiline);
  assertFalse(r.ignoreCase);
  assertEquals(0, r.lastIndex);
}

function testConstructorRegexp_2() {
  var r = new RegExp(new RegExp(".*", "m"));
  assertTrue(r instanceof RegExp);
  assertFalse(r.global);
  assertTrue(r.multiline);
  assertFalse(r.ignoreCase);
  assertEquals(0, r.lastIndex);
}

function testConstructorRegexp_3() {
  var r = new RegExp(new RegExp(".*", "i"));
  assertTrue(r instanceof RegExp);
  assertFalse(r.global);
  assertFalse(r.multiline);
  assertTrue(r.ignoreCase);
  assertEquals(0, r.lastIndex);
}

function testConstructorRegexp_4() {
  var r = new RegExp(new RegExp(".*", "im"));
  assertTrue(r instanceof RegExp);
  assertFalse(r.global);
  assertTrue(r.multiline);
  assertTrue(r.ignoreCase);
  assertEquals(0, r.lastIndex);
}

function testConstructorRegexp_5() {
  assertThrows(TypeError(), function() {new RegExp(new RegExp(".*", "im"), "im");});
}


function testPrototypeConstructor_0() {
  assertEquals(RegExp, RegExp.prototype.constructor);
}
testPrototypeConstructor_0.metadata = {
  bug:"CARAKAN-67"
};

function testSource_0() {
  assertEquals("abc", (new RegExp("abc")).source);
}

function testSource_1() {
  //technically there are many possibilities allowed by the spec here
  //but the important point is that "/" is not one of them
  assertEquals("\\/", RegExp("/").source);
}

function testSource_2() {
  assertEquals("\\/*", RegExp("/*").source);
}

function testMatch_0() {
  var string = '12345';
  var pattern = /\d\d\d/g;
  var actualmatch = string.match(pattern);
  assertEquals("123", actualmatch[0]);
}
testMatch_0.metadata = {
  bug:"CARAKAN-78"
};

function testMatch_1() {
  var string = "a";
  var pattern = /|a/;
  var actualmatch = string.match(pattern);
  assertEquals("", actualmatch[0]);
}
testMatch_1.metadata = {
  bug:"CARAKAN-79"
};

function testMatch_2() {
  var s1 = new String("this is a test string");
  var s2 = s1.match(/s.*s/);
  assertEquals("s is a test s", s2[0]);
}
testMatch_2.metadata = {
  bug:"CARAKAN-81"
};

function testMatch_3() {
  var s1 = 'abc'.match(new RegExp('a[^b]c'));
  assertEquals(null, s1);
}
testMatch_3.metadata = {
  bug:"CARAKAN-82"
};

function testMatch_4() {
  var s1 = 'abc'.match(new RegExp('a[^1-9]c'));
  assertEquals(1, s1.length);
  assertEquals("abc", s1[0]);
}
testMatch_4.metadata = {
  bug:"CARAKAN-82"
};


function testMatch_5() {
  var s1 = '1abc345'.match(new RegExp('[a-z][^1-9][a-z]'));
  assertEquals(1, s1.length);
  assertEquals("abc", s1[0]);
}
testMatch_5.metadata = {
  bug:"CARAKAN-82"
};

function testMatch_6() {
  var s = /3.{4}8/.exec('23 2 34 678 9 09');
  assertEquals(1, s.length);
  assertEquals("34 678", s[0]);
}
testMatch_6.metadata = {
  bug:"CARAKAN-83"
};

function testMatch_7() {
  //Null in regexp
  var str = "aa" + String.fromCharCode(0) + "bb";
  var pattern = RegExp(str);
  var match = str.match(pattern);
  assertEquals(str, match[0]);
}
testMatch_7.metadata = {
  bug:"CARAKAN-72"
};

function testMatch_8() {
  var x = 'Hi Bob'.match(new RegExp('(Rob)|(Bob)|(Robert)|(Bobby)'));
  var expected = ["Bob", undefined, "Bob", undefined, undefined];
  assertArrayEquals(expected, x);
}

function testMatch_9() {
  var x = "1234567890";
  assertEquals(2, x.match(3).index);
}
testMatch_9.metadata = {
  bug:"CARAKAN-170"
};

function testMatch_10() {
  var pattern = /(((aa){2})+)/;
  var string = 'aaaaaaaaaa';
  var actualmatch = string.match(pattern);
  var expectedmatch = Array('aaaaaaaa', 'aaaaaaaa', 'aaaa', 'aa');
  assertEquals(expectedmatch.toString(), actualmatch.toString());
}

function testMatch_11() {
  var pattern = /(((a{2}){2})+)/;
  var string = 'aaaaaaaaaa';
  var actualmatch = string.match(pattern);
  var expectedmatch = Array('aaaaaaaa', 'aaaaaaaa', 'aaaa', 'aa');
  assertEquals(expectedmatch.toString(), actualmatch.toString());
}

function testMatch12() {
  assertEquals(null, "".match(/x/g));
}

function testMatch_13() {
  for (var i = 0; i < 20; i++) {
    var p = /^(span)($)/,
        m = "span".match(p);
    assertEnum(m, "0");
    assertEnum(m, "1");
    assertEnum(m, "2");
  }
}
testMatch_13.metadata = {
  bug: "CARAKAN-662"
};

function testMatch_14() {
  var expression = 'span.span_wtf',
      e = expression,
      ps = /^\s*(span)/,
      le;
  while (e && le != e) {
    le = e;
    e.match(ps);
    e = ".span_wtf";
  }
  var e = expression,
      m = e.match(ps);
  assertEquals("span", m[1].toString());
}
testMatch_14.metadata = {
  bug: "CARAKAN-714"
};

function testMatch_15() {
  var x = "foo!abcdefghijkl!bar";
  assertEquals("foo()bar", x.replace( /!((...........)|(............))!/, "($2)" ));
  assertUndefined(x.match( /!((...........)|(............))!/)[2]);
}
testMatch_15.metadata = {
  bug: "CARAKAN-1297"
}

function testMatch_16() {
  assertEquals(2, "abra( cadabra (".match(/\b\s*(?=\()/g).length);
}

function testMatch_17() {
  var match = "ab".match(/^((a)|(ab))$/);
  var expected = ["ab", "ab", "", "ab"];
  assertArrayEquals(expected, match);
}
testMatch_17.metadata = {
  bug: "CARAKAN-1297"
}

function testMatch_18() {
  var match = "1234".match(/(\d{1,2}){2}/);
  var expected = ["1234", "34"];
  assertArrayEquals(expected, match);
}
testMatch_18.metadata = {
  bug: "CORE-30061"
}

function testMatch_19() {
  var match = '_abc_de'.match(/_[a-z]{2}$/);
  var expected = ['_de'];
  assertArrayEquals(expected, match);
}
testMatch_19.metadata = {
  bug: "CORE-30243"
};

function testMatch_20() {
  var match = 'ab'.match(/[ab]+./);
  var expected = ['ab'];
  assertArrayEquals(expected, match);
}
testMatch_20.metadata = {
  bug: "CORE-30248"
}

function testMatch_21() {
  var match = '\n\u1000'.match(/[\n\r]+./);
  var expected = ['\n\u1000'];
  assertArrayEquals(expected, match);
}

function testMatch_22() {
  var match = '\n\u1000'.match(/[\n\r\u1000]+./);
  var expected = ['\n\u1000'];
  assertArrayEquals(expected, match);
}

function testMatch_23() {
  var match = '\n\u1000'.match(/[^\x00-\x09\x0b\x0c\x0e-\xff]+./);
  var expected = ['\n\u1000'];
  assertArrayEquals(expected, match);
}

function testMatch_24() {
  var str = "";
  for (var i = 0x1000; i <= 0x3000; i++) {
    str += String.fromCharCode(i);
  }
  var match = str.match(/[\u2000\u1000-\u3000]/g);
  var expected = str.split("");
  assertArrayEquals(expected, match);
}
testMatch_24.metadata = {
  bug: "CORE-34598"
};

function testMatch_25() {
  var expected = ["aaa", ""];
  var re = /(a*){2}/
  assertArrayEquals(expected, "aaa".match(re));
}
testMatch_25.metadata = {
  bug: "CORE-29903"
};

function testMatch_26() {
  var expected = ["aaa", ""];
  var re = /(.*){2}/
  assertArrayEquals(expected, "aaa".match(re));
}
testMatch_26.metadata = {
  bug: "CORE-29903"
};

function testMatch_27() {
  var expected = ["bbb", ""];
  var re = /([b]*){2}/
  assertArrayEquals(expected, "bbb".match(re));
}
testMatch_27.metadata = {
  bug: "CORE-29903"
};

function testMatch_28() {
  var expected = ["aaa", "a"];
  var re =  /^(a{1,2}){3}$/;
  assertArrayEquals(expected, "aaa".match(re));
}
testMatch_28.metadata = {
  bug: "CORE-37527"
};

function testMatch_29() {
  var expected = ["abc", "c"];
  var re =  /^(.{1,2}){3}$/;
  assertArrayEquals(expected, "abc".match(re));
}
testMatch_29.metadata = {
  bug: "CORE-37527"
};

function testMatch_30() {
  var expected = ["aaa", "a"];
  var re =  /^([a]{1,2}){3}$/;
  assertArrayEquals(expected, "aaa".match(re));
}
testMatch_30.metadata = {
  bug: "CORE-37527"
};

function testSubstringMatch_0() {
  assertEquals("xy", "xyy".substring(0,2).match(/xy+/)[0]);
}

function testSubstringMatch_1() {
    assertEquals(null, "xyy".substring(0,2).match(/xyy/));
}

function testSubstringMatch_2() {
  assertEquals("x", "xyy".substring(0,1).match(/x*/)[0]);
}

function testSubstringMatch_4() {
  assertEquals("xy", "xyy".substring(0,2).match(/x.+/)[0]);
}

function testMatchNull_0() {
  var string = String.fromCharCode(0) + "abc";
  var result = string.match(new RegExp(string));
  assertEquals(string, result[0]);
}
testMatchNull_0.metadata = {
  bug:"CARAKAN-274",
  mozilla:"ecma_3/RegExp/octal-002.js"
};

function testMatchNull_1() {
  var string = "cba" + String.fromCharCode(0) + "abc";
  var result = string.match(new RegExp(string));
  assertEquals(string, result[0]);
}
testMatchNull_1.metadata = {
  bug:"CARAKAN-274",
  mozilla:"ecma_3/RegExp/octal-002.js"
};

function testMatchNull_2() {
  var string = "cba(\u0000)abc";
  var result = string.match(new RegExp(String.fromCharCode(0)));
  assertEquals(String.fromCharCode(0), result[0]);
}
testMatchNull_2.metadata = {
  bug:"CARAKAN-274",
  mozilla:"ecma_3/RegExp/octal-002.js"
};

function testReplace_0() {
  //pass condition is to not crash
  a = 1;
  'a'.replace(/a/g, eval);
}
testReplace_0.metadata = {
  bug:"CARAKAN-213"
};

function testReplace_1() {
  assertEquals('a', 'a'.replace(/^\0+/, ''));
}
testReplace_1.metadata = {
  bug:"CARAKAN-780"
};

function testReplace_2() {
  var str = "<span";
  var re = /([\<]|$)|([\w.$]*)|(\\?[\w|*$]?)/g;
  var matches = [];
  function replacer(match) {
    matches.push(match);
    return match;
  }
  str.replace(re, replacer);
  assertArrayEquals(["<", "span",""], matches);
}
testReplace_2.metadata = {
  bug:"CARAKAN-832"
};

function testReplace_3() {
  var parserx = /(a)|(\\?[?:])/g;

  var expected = [["a","a",undefined,0,"a?:"],
		  ["?",undefined,"?",1,"a?:"],
		  [":",undefined,":",2,"a?:"]];

  var count = 0;
  function parser() {
    assertArrayEquals(expected[count++],
		      Array.prototype.slice.call(arguments));
  }

  var str = "a?:";
  str.replace(parserx, parser);
}
testReplace_3.metadata = {
  bug:"CARAKAN-1019"
};

function testReplace_4() {
  var foo = "\\u0065pass";
  var regex = /\\(?:a|u[0-9]{4})/;
  assertEquals("pass", foo.replace(regex, ""));
}
testReplace_4.metadata = {
  bug:"CARAKAN-992"
};

function testReplace_5() {
  var foo = "123456789X";
  var regex = /(.)(.)(.)(.)(.)(.)(.)(.)(.)(.)/;
  assertEquals("10", foo.replace(regex,  "$010"));
}
testReplace_5.metadata = {
  bug:"CORE-37519"
};

function testLiteralIdentity_0() {
  assertFalse(/abc/ === /abc/);
}

function testLiteralIdentity_1() {
  function func() {
    return /abc/;
  }
  assertFalse(func() === func());
}

function testLiteralIdentity_2() {
  function func(a) {
    if (a == 0) {
      return /abc/;
    } else {
      return /abc/;
    }
  }
  assertFalse(func(0) === func(0));
  assertFalse(func(0) === func(1));
  assertFalse(func(1) === func(1));
}

function testInstanceOf_0() {
  assertTrue(/a/ instanceof RegExp);
}

function testInstanceOf_1() {
  function func(x) {
    assertTrue(x instanceof RegExp);
  }
  func(/a/);
}
testInstanceOf_1.metadata = {
  bug:"CARAKAN-415"
};

function testInstanceOf_2() {
  function func(x) {
    assertTrue(x instanceof RegExp);
  }
  func(new RegExp("a"));
}
testInstanceOf_2.metadata = {
  bug:"CARAKAN-415"
};


function testLastIndex_0() {
  assertEquals(0, /abc/.lastIndex);
}

function testLastIndex_1() {
  assertEquals(0, /abc/g.lastIndex);
}

function testLastIndex_2() {
  var re = /abc/g;
  re.exec("abc");
  assertEquals(3, re.lastIndex);
}

function testLastIndex_3() {
  var re = /abc/;
  re.exec("abc");
  assertEquals(0, re.lastIndex);
}

function testLastIndex_4() {
  var re = /abc/g;
  re.exec("abcabc");
  assertEquals(3, re.lastIndex);
}

function testLastIndex_5() {
  var re = /abc/g;
  re.exec("abcabc");
  re.exec("abcabc");
  assertEquals(6, re.lastIndex);
}

function testLastIndex_6() {
  var a;
  function f() {
    a = /abc/g;
    return a.exec("abcabc");
  }
  f();
  f();
  assertEquals(3, a.lastIndex);
}

function testLastIndex_7() {
  var re = /abc/g;
  re.exec("abcabc");
  re.lastIndex = 0;
  re.exec("abcabc");
  assertEquals(3, re.lastIndex);
}

function testLastIndex_8() {
  var a = "aababbabbbabbbb";
  var re = /ab*/g;
  re.exec(a);
  assertEquals(1, re.lastIndex);
}

function testLastIndex_9() {
  var a = "aababbabbbabbbb";
  var re = /ab*/g;
  re.exec(a);
  re.exec(a);
  assertEquals(3, re.lastIndex);
}

function testLastIndex_10() {
  var a = "aababbabbbabbbb";
  var re = /ab*/g;
  for (var i=0; i<5; i++) {
    re.exec(a);
  }
  assertEquals(15, re.lastIndex);
  assertEquals(null, re.exec(a));
  assertEquals(0, re.lastIndex);
  re.exec(a);
  assertEquals(1, re.lastIndex);
}

function testLastIndex_11() {
  var a = "aababbabbbabbbb";
  var re = /ab*/g;
  for (var i=0; i<3; i++) {
    re.exec(a);
  }
  assertEquals(6, re.lastIndex);
  re.lastIndex = 1;
  re.exec(a);
  assertEquals(3, re.lastIndex);
}

function testLastIndex_12() {
  var a = "aababbabbbabbbb";
  var re = /ab*/g;
  for (var i=0; i<3; i++) {
    re.exec(a);
  }
  assertEquals(6, re.lastIndex);
  re.lastIndex = -1;
  assertEquals(null, re.exec(a));
  assertEquals(0, re.lastIndex);
}

function testLastIndex_13() {
  var a = "aababbabbbabbbb";
  var re = /ab*/g;
  for (var i=0; i<3; i++) {
    re.exec(a);
  }
  assertEquals(6, re.lastIndex);
  re.lastIndex = 100;
  assertEquals(null, re.exec(a));
  assertEquals(0, re.lastIndex);
}

function testLastIndex_14() {
  var a = "aababbabbbabbbb";
  var re = /ab*/;
  re.exec(a);
  assertEquals(0, re.lastIndex);
}

function testLastIndex_15() {
  var a = "aababbabbbabbbb";
  var re = /ab*/;
  re.exec(a);
  re.exec(a);
  assertEquals(0, re.lastIndex);
}

function testLastIndex_16() {
  var a = "aababbabbbabbbb";
  var re = /a(b*)/;
  re.lastIndex = 4;
  var b = re.exec(a);
  assertEquals("", b[1]);
  assertEquals(4, re.lastIndex);
}

function testLastIndex_17() {
  var a = "aababbabbbabbbb";
  var re = /a(b*)/;
  re.lastIndex = -1;
  assertEquals("", re.exec(a)[1]);
  assertEquals(-1, re.lastIndex);
}

function testLastIndex_18() {
  var a = "aababbabbbabbbb";
  var re = /a(b*)/;
  re.lastIndex = 100;
  assertEquals("", re.exec(a)[1]);
  assertEquals(100, re.lastIndex);
}

function testLastIndex_19() {
  var a = "aababb";
  var b = "aababbabbbabbbb";
  var re = /ab*/g;
  for (var i=0; i<3; i++) {
    re.exec(a);
  }
  assertEquals(6, re.lastIndex);
  re.exec(b);
  assertEquals(10, re.lastIndex);
}

function testLastIndex_20() {
  var re = /abc/, called = false;
  re.lastIndex = {
    valueOf: function() {
      called = true;
      return 0;
    }
  };
  re.exec("abc");
  assertTrue(called);
}
testLastIndex_20.metadata = {
  bug: "CORE-33787"
};

function testLastIndex_21() {
  var re = /abc/, called = false;
  re.lastIndex = {
    toString: function() {
      called = true;
      return "0";
    }
  };
  re.exec("abc");
  assertTrue(called);
}
testLastIndex_21.metadata = {
  bug: "CORE-33787"
};

function testLastIndex_22() {
  var re = /abc/, called = false;
  re.lastIndex = {
    valueOf: function() {
      called = true;
      return 0;
    },
    toString: function() {
      assertUnreached();
    }
  };
  re.exec("abc");
  assertTrue(called);
}
testLastIndex_22.metadata = {
  bug: "CORE-33787"
};

function testExec_0() {
  var m = /abc/.exec("abc");
  assertArrayEquals(["abc"], m);
  assertEquals(0, m.index);
  assertEquals("abc", m.input);
}

function testExec_0a() {
  var re = /([\S]+([ \t]+[\S]+)*)[ \t]*=[ \t]*[\S]+/;
  var result = re.exec("Course_Creator = Test") + '';
  assertEquals("Course_Creator = Test,Course_Creator,", result);
}
testExec_0a.metadata = {
  bug:"CARAKAN-129"
};

function testExec_1() {
  var m = /abc/g.exec("abc");
  assertArrayEquals(["abc"], m);
  assertEquals(0, m.index);
  assertEquals("abc", m.input);
}

function testExec_2() {
  var m = /abc/g.exec("aabcabc");
  assertArrayEquals(["abc"], m);
  assertEquals(1, m.index);
  assertEquals("aabcabc", m.input);
}

function testExec_3() {
  var m = /(a)b(c)/g.exec("abc");
  assertArrayEquals(["abc", "a", "c"], m);
  assertEquals(0, m.index);
  assertEquals("abc", m.input);
}

function testExec_4() {
  assertArrayEquals(["ab"], /^(?:a(?:b|c)*)?$/.exec("ab"));
}
testExec_4.metadata = {
  bug:"CARAKAN-497"
};

function testExec_5() {
  var re = /(?:(\\.)|(S))/g,
      str = "S \\o";

  var match1 = re.exec(str);
  var match2 = re.exec(str);

  assertArrayEquals(match1, ["S", undefined, "S"]);
  assertArrayEquals(match2, ["\\o", "\\o", undefined]);
}
testExec_5.metadata = {
  bug:"CARAKAN-632"
};

function testExec_6() {
  var re = /:(-?[_a-z]+[-\w]*)(?:\({1}((-?[_a-z]+[-\w]*)?([-+\w_\[\]\.\|\*\'\(\)#:^~=$!"]*)*)?\){1})*/g;
  var token = "[type=checkbox]:not(:checked)";
  assertEquals(":not(:checked),not,:checked,,:checked", re.exec(token).toString());
}

function testExec_7()  {
  var r = /foo|(bar)/;

  r.exec("foo");
  r.exec("fum");

  assertEquals("", RegExp.$1);
}
testExec_7.metadata = {
  bug:"CARAKAN-889"
};

function testExec_8() {
  var reg = /(^\d{2})(-|@)(\d{4}$)/;
  assertArrayEquals(["02-2010","02","-","2010"], reg.exec("02-2010"))
}
testExec_8.metadata = {
  bug:"CARAKAN-1131"
}

function testExec_9() {
    function r(){
	return /(\w+)/;
    }
    var r1=r(),
    r2=r();
    print(r1.exec('foo'));
    print(r2.exec('bar'));
    print(r1.exec('foo'));
    assertTrue(false);
}

function testExec_10() {
  assertArrayEquals([""], /^"?/.exec(""));
}
testExec_10.metadata = {
  bug:"CARAKAN-1222"
}

function testExec_11() {
  var match = /(.*\.)*(0*\.00.0)/.exec("00.00.00.0");
  assertArrayEquals(["00.00.00.0", "00.", "00.00.0"], match);
}
testExec_11.metadata = {
  bug:"CORE-32656"
};

function testExec_12() {
  // The use of a global var is needed to crash c-i-30
  var match = /(.*\.)*(0*\.00.0)/.exec("00.00.00.0");
  testExec_12_global_var = match[1] + "a";
  assertEquals("00.a", testExec_12_global_var);
}
testExec_12.metadata = {
  bug:"CORE-32656"
};

function testTest_0() {
  var re = /abc/;
  assertTrue(re.test("abc"));
}

function testTest_1() {
  var re = /abc/;
  assertFalse(re.test("efg"));
}

function testTest_2() {
  var re = /abc/;
  assertTrue(re.test("aabc"));
}

function testTest_3() {
  var re = /abc/g;
  re.lastIndex = 1;
  assertFalse(re.test("abc"));
  assertEquals(0, re.lastIndex);
}
testTest_3.metadata = {
  bug:"CARAKAN-449"
};

function testTest_4() {
  var re = /abc/;
  re.lastIndex = 1;
  assertTrue(re.test("abc"));
}

function testTest_5() {
  var re = /abc/g;
  re.lastIndex = -1;
  assertFalse(re.test("abc"));
  assertEquals(0, re.lastIndex);
}
testTest_5.metadata = {
  bug:"CARAKAN-449"
};

function testTest_6() {
  var re = /abc/;
  re.lastIndex = -1;
  assertTrue(re.test("abc"));
}

function testTest_7() {
  assertTrue(/^(b+?|a){1,2}c$/.test("bbbac"));
}

function testTest_8() {
  assertTrue(/^(b+?|a){1,2}c$/.test("bbbbac"));
}

function testTest_9() {
  assertTrue(/^[\W\w]*\b\s*$/.test('a\r'));
}
testTest_2.metadata = {
  bug:"CARAKAN-1183"
};

function testTest_10() {
  //pass condition is to not crash
  /[\x00-\uffff]*$/.test("")
}
testTest_10.metadata = {
  bug:"CARAKAN-1222"
}

function testSplit_0() {
  assertArrayEquals([], "".split(/a*/));
  assertEquals(1, "".split(/a/).length);
}
testSplit_0.metadata = {
  bug:"CORE-35863"
}

function testTest_11() {
  assertTrue(/((?!(k+)+?)(?=h){0,2}|(?!$))|\cX/.test("kkkk"));
}
testTest_11.metadata = {
  bug:"CORE-37962"
}

function testTest_12() {
    var re = /^(11+?)\1+$/;
    s = '';
    for (var i = 0; i < 493; i++)
       s += '1';
    // 493 == 17 * 29 (and not a prime.)
    assertTrue(re.test(s));
}
testTest_12.metadata = {
  bug:"CORE-41306"
}

function testTest_13() {
    var re = /1{1}$|2a/;
    assertTrue(re.test("1"));
}
testTest_13.metadata = {
  bug:"CORE-41658"
}

function testTest_14() {
  var re = /\s/;
  assertTrue(re.test("\ufeff"));
}
testTest_14.metadata = {
  bug:"CORE-43146"
}

function testTest_15() {
  var re = /\S/;
  assertFalse(re.test("\ufeff"));
}
testTest_15.metadata = {
  bug:"CORE-43146"
}
