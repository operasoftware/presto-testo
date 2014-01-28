function testEscape_0() {
  var allowed = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@*_+-./".split('');
  for (var i=0; i<allowed.length; i++) {
    assertEquals(allowed[i], escape(allowed[i]));
  }
}

function testEscape_1() {
  //Check that no argument is handled correctly
  assertEquals("undefined", escape());
}
testEscape_1.metadata = {
  bug:"CARAKAN-192"
};

function testEscape_2() {
  for (var i=0; i<0x022; i++) {
    var expected = i.toString(16);
    while(expected.length < 2) {
      expected = "0" + expected;
    }
    expected = "%" + expected;
    expected = expected.toUpperCase();
    assertEquals(expected, escape(String.fromCharCode(i)));
  }
}

function testEscape_3() {
  assertEquals("%FF", escape(String.fromCharCode(0xFF)));
}

function testEscape_4() {
  assertEquals("%u0100", escape(String.fromCharCode(0x100)));
}

function testEscape_5() {
  //A selection of non-ascii characters
  for (var i=0x0FD4; i<0x10D7; i++) {
    var expected = i.toString(16);
    while(expected.length < 4) {
      expected = "0" + expected;
    }
    expected = expected.toUpperCase();
    expected = "%u" + expected;
    assertEquals(expected, escape(String.fromCharCode(i)));
  }
}

function testEscape_6() {
  assertEquals("undefined", escape(undefined));
}

function testEscape_7() {
  assertEquals("null", escape(null));
}

function testEscape_8() {
  assertEquals("true", escape(true));
}

function testEscape_9() {
  assertEquals("false", escape(false));
}

function testEscape_10() {
  assertEquals("NaN", escape(NaN));
}

function testEscape_11() {
  assertEquals("1e+21", escape(1E21));
}

function testEscape_12() {
  assertEquals("%5Bobject%20Object%5D", escape({}));
}

