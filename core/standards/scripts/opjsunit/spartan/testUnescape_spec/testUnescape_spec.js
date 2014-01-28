function testUnescape_0() {
  //No change for any ordinary cases
  for (var i=0; i<0xFF; i++) {
    var chr = String.fromCharCode(i);
    assertEquals(chr, unescape(chr));
  }
}

function testUnescape_1() {
  //No change in some non-ascii cases
  for (var i=0x2500; i<0x25FF; i++) {
    var chr = String.fromCharCode(i);
    assertEquals(chr, unescape(chr));
  }
}

function testUnescape_2() {
  for (var i=0; i<0xFF; i++) {
    var chr = String.fromCharCode(i);
    assertEquals(chr, unescape(escape(chr)));
  }
}

function testUnescape_3() {
  for (var i=0x2500; i<0x25FF; i++) {
    var chr = String.fromCharCode(i);
    assertEquals(chr, unescape(escape(chr)));
  }
}

function testUnescape_4() {
  assertEquals("%1", unescape("%1"));
}

function testUnescape_5() {
  assertEquals("%1G", unescape("%1G"));
}

function testUnescape_6() {
  assertEquals("%u", unescape("%u"));
}

function testUnescape_7() {
  assertEquals("%u123", unescape("%u123"));
}

function testUnescape_8() {
  assertEquals("%u123G", unescape("%u123G"));
}

function testUnescape_9() {
  assertEquals("undefined", unescape());
}
testUnescape_9.metadata = {
  bug:"CARAKAN-193"
};

function testUnescape_10() {
  assertEquals("undefined", unescape(undefined));
}

function testUnescape_11() {
  assertEquals("null", unescape(null));
}

function testUnescape_12() {
  assertEquals("true", unescape(true));
}

function testUnescape_12() {
  assertEquals("false", unescape(false));
}

function testUnescape_12() {
  assertEquals("0.1", unescape(1E-1));
}

function testUnescape_12() {
  assertEquals("[object Object]", unescape({}));
}