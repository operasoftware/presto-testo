function testEndHTMLComment() {
  new Function("-->\n");
}
testEndHTMLComment.metadata = {
  bug:"CARAKAN-1124"
};

function testArrayParse_1() {
  var str = '["this", "is", (function(){})("test"]';
  var passed = false;
  try {
    eval(str);
  } catch (e) {
    passed = e instanceof SyntaxError;
  }
  assertTrue(passed);
}
testArrayParse_1.metadata = {
  bug:"CORE-29833"
};

function testArrayParse_2() {
  var str = '[1, new Date(]';
  var passed = false;
  try {
    eval("var x = " + str);
  } catch (e) {
    passed = e instanceof SyntaxError;
  }
  assertTrue(passed);
}
testArrayParse_2.metadata = {
  bug:"CORE-29833"
};

function testArrayParse_3() {
  var arr11 = [,,3,,,,,,,,11,];
  assertEquals(11, arr11.length);
  var arr12 = [,,3,,,,,,,,11,,];
  assertEquals(12, arr12.length);
  var arr13 = [/*1*/, /*2*/, /*3*/, /*4*/, /*5*/, /*6*/,];
  assertEquals(6, arr13.length);
  var arr14 = [/*1*/, /*2*/, /*3*/, /*4*/, /*5*/, /*6*/,,];
  assertEquals(7, arr14.length);
}
testArrayParse_3.metadata = {
  bug:"CORE-29833"
};

function testArrayParse_3() {
  var arr11 = [,,3,,,,,,,,11,];
  assertEquals(11, arr11.length);
  var arr12 = [,,3,,,,,,,,11,,];
  assertEquals(12, arr12.length);
}
testArrayParse_3.metadata = {
  bug:"CORE-29833"
};

function testIdentifierPart_0() {
  var result = [];
  var expected = ["200c", "200d"];
  for (var i = 0; i < expected.length; ++i) {
    try {
      result.push(eval("var a\\u"+expected[i]+" = '" + expected[i] + "';a\\u"+expected[i]));
    } catch(e) {
    }
  }
  assertArrayEquals(expected, result);
}
testIdentifierPart_0.metadata = {
  bug:"CORE-44659"
};
