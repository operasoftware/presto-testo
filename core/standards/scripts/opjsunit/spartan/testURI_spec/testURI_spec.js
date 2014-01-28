var uri_reserved = [";", "/", "?", ":", "@", "&", "=", "+", "$", ","];
var uri_alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
		 "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x",
		 "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
		 "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V",
		 "W", "X", "Y", "Z"];
var decimal_digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var uri_mark = ["-", "_", ".", "!", "~", "*", "'", "(", ")"];
var uri_unescaped = [].concat(uri_alpha, decimal_digit, uri_mark);

function testEncodeURI_0() {
  //Check that all characters that are not supposed to be encoded are not
  var unencoded_characters = ["#"].concat(uri_reserved, uri_unescaped);
  for (var i=0; i<unencoded_characters.length; i++) {
    assertEquals(unencoded_characters[i], encodeURI(unencoded_characters[i]));
  }
}

function testEncodeURI_1() {
  assertEquals("%00", encodeURI("\u0000"));
}

function testEncodeURI_2() {
  assertEquals("%C3%A6", encodeURI("\u00E6"));
}

function testEncodeURI_3() {
  assertEquals("%C3%A6", encodeURI("\u00E6"));
}

function testEncodeURI_4() {
  assertEquals("%E1%A7%A0", encodeURI("\u19E0"));
}

function testEncodeURI_5() {
  assertEquals("%EF%AE%AD", encodeURI("\uFBAD"));
}

function testEncodeURI_6() {
  //Second part of a surrogate pair not preceeded by the first
  assertThrows(URIError(), encodeURI, "\uDC00\u1234");
}
testEncodeURI_6.metadata = {
  bug:"CARAKAN-115"
};

function testEncodeURI_7() {
  //Second part of a surrogate pair not preceeded by the first
  assertThrows(URIError(), encodeURI, "\uDFFF\u1234");
}
testEncodeURI_7.metadata = {
  bug:"CARAKAN-115"
};

function testEncodeURI_8() {
  //First part of a surrogate pair not followed by the second
  assertThrows(URIError(), encodeURI, "\uD800\u1234");
}
testEncodeURI_8.metadata = {
  bug:"CARAKAN-115"
};

function testEncodeURI_9() {
  //First part of a surrogate pair not followed by the second
  assertThrows(URIError(), encodeURI, "\uDBFF\u1234");
}
testEncodeURI_9.metadata = {
  bug:"CARAKAN-115"
};

function testEncodeURI_10() {
  //Real surrogate pair
  assertEquals("%F0%90%80%80", encodeURI("\uD800\uDC00"));
}

function testEncodeURI_11() {
  //Real surrogate pair
  assertEquals("%F0%90%8F%BF", encodeURI("\uD800\uDFFF"));
}

function testEncodeURI_12() {
  //Real surrogate pair
  assertEquals("%F4%8F%B0%80", encodeURI("\uDBFF\uDC00"));
}

function testEncodeURI_13() {
  //Real surrogate pair
  assertEquals("%F4%8F%BF%BF", encodeURI("\uDBFF\uDFFF"));
}

function testEncodeURI_14() {
  //Real surrogate pair
  assertEquals("", encodeURI(""));
}

function testEncodeURI_15() {
  assertEquals("undefined", encodeURI());
}
testEncodeURI_15.metadata = {
  bug:"CARAKAN-349"
};

function testEncodeURIComponent_0() {
  //Check that all characters that are not supposed to be encoded are not
  var unencoded_characters = uri_unescaped;
  for (var i=0; i<unencoded_characters.length; i++) {
    assertEquals(unencoded_characters[i],
		 encodeURIComponent(unencoded_characters[i]));
  }
}

function testEncodeURIComponent_1() {
  var encoded_characters = [].concat(uri_reserved);
  for (var i=0; i<encoded_characters.length; i++) {
    var expected = "%" + encoded_characters[i].charCodeAt(0).toString(16).toUpperCase();
    assertEquals(expected, encodeURIComponent(encoded_characters[i]));
  }
}

function testEncodeURIComponent_2() {
  assertEquals("%00", encodeURIComponent("\u0000"));
}

function testEncodeURIComponent_3() {
  assertEquals("%C3%A6", encodeURIComponent("\u00E6"));
}

function testEncodeURIComponent_4() {
  assertEquals("%C3%A6", encodeURIComponent("\u00E6"));
}

function testEncodeURIComponent_5() {
  assertEquals("%E1%A7%A0", encodeURIComponent("\u19E0"));
}

function testEncodeURIComponent_6() {
  assertEquals("%EF%AE%AD", encodeURIComponent("\uFBAD"));
}

function testEncodeURIComponent_7() {
  //Second part of a surrogate pair not preceeded by the first
  assertThrows(URIError(), encodeURIComponent, "\uDC00\u1234");
}
testEncodeURIComponent_7.metadata = {
  bug:"CARAKAN-115"
};

function testEncodeURIComponent_8() {
  //Second part of a surrogate pair not preceeded by the first
  assertThrows(URIError(), encodeURIComponent, "\uDFFF\u1234");
}
testEncodeURIComponent_8.metadata = {
  bug:"CARAKAN-115"
};

function testEncodeURIComponent_9() {
  //First part of a surrogate pair not followed by the second
  assertThrows(URIError(), encodeURIComponent, "\uD800\u1234");
}
testEncodeURIComponent_9.metadata = {
  bug:"CARAKAN-115"
};

function testEncodeURIComponent_10() {
  //First part of a surrogate pair not followed by the second
  assertThrows(URIError(), encodeURIComponent, "\uDBFF\u1234");
}
testEncodeURIComponent_10.metadata = {
  bug:"CARAKAN-115"
};

function testEncodeURIComponent_11() {
  //Real surrogate pair
  assertEquals("%F0%90%80%80", encodeURIComponent("\uD800\uDC00"));
}

function testEncodeURIComponent_12() {
  //Real surrogate pair
  assertEquals("%F0%90%8F%BF", encodeURIComponent("\uD800\uDFFF"));
}

function testEncodeURIComponent_13() {
  //Real surrogate pair
  assertEquals("%F4%8F%B0%80", encodeURIComponent("\uDBFF\uDC00"));
}

function testEncodeURIComponent_14() {
  //Real surrogate pair
  assertEquals("%F4%8F%BF%BF", encodeURIComponent("\uDBFF\uDFFF"));
}

function testEncodeURIComponent_15() {
  assertEquals("", encodeURIComponent(""));
}

function testEncodeURIComponent_16() {
  assertEquals("undefined", encodeURIComponent());
}
testEncodeURIComponent_16.metadata = {
  bug:"CARAKAN-349"
};

function testDecodeURI_0() {
  assertEquals("", decodeURI(""));
}

function testDecodeURI_1() {
  //characters in reserved_set do not get decoded
  var reserved_set = ["#"].concat(uri_reserved);
  for (var i=0; i < reserved_set.length; i++) {
    var character = reserved_set[i];
    var encoded = encodeURIComponent(character);
    assertEquals(encoded, decodeURI(encoded));
  }
}

function testDecodeURI_1() {
  //characters in uri_unescaped do get decoded
  for (var i=0; i < uri_unescaped.length; i++) {
    var character = uri_unescaped[i];
    var encoded = encodeURIComponent(character);
    assertEquals(character, decodeURI(encoded));
  }
}

function testDecodeURI_2() {
  //If the characters are not encoded to start with nothing bad happens
  for (var i=0; i < uri_unescaped.length; i++) {
    var character = uri_unescaped[i];
    assertEquals(character, decodeURI(character));
  }
}

function testDecodeURI_3() {
  assertThrows(URIError(), decodeURI, "%");
}

function testDecodeURI_4() {
  assertThrows(URIError(), decodeURI, "%2");
}

function testDecodeURI_5() {
  assertEquals("\u0000", decodeURI("%00"));
}

function testDecodeURI_6() {
  assertEquals("\u007F", decodeURI("%7f"));
}

function testDecodeURI_7() {
  assertEquals("\u007F", decodeURI("%7f"));
}

function testDecodeURI_8() {
  assertThrows(URIError(), decodeURI, "%7g");

}

function testDecodeURI_9() {
  //Can only be the second byte in a multi byte UTF-8 sequence
  assertThrows(URIError(), decodeURI, "%80");
}
testDecodeURI_9.metadata = {
  bug:"CARAKAN-126"
};

function testDecodeURI_10() {
  //First byte in 2 byte sequence not followed by second
  assertThrows(URIError(), decodeURI, "%C0");
}
testDecodeURI_10.metadata = {
  bug:"CARAKAN-126"
};


function testDecodeURI_11() {
  //First byte in 2 byte sequence followed by incorrect second
  assertThrows(URIError(), decodeURI, "%C0%7F");
}
testDecodeURI_11.metadata = {
  bug:"CARAKAN-126"
};

function testDecodeURI_12() {
  //First byte in 2 byte sequence followed by incorrect second
  assertThrows(URIError(), decodeURI, "%C0%C0");
}
testDecodeURI_12.metadata = {
  bug:"CARAKAN-126"
};

function testDecodeURI_13() {
  //Valid two-byte sequence
  assertEquals("\u018F", decodeURI("%C6%8F"));
}

function testDecodeURI_14() {
  assertEquals("\u07FF", decodeURI("%df%bf"));
}

function testDecodeURI_15() {
  //First byte in 3-byte UTF8 sequence not followed by second
  assertThrows(URIError(), decodeURI, "%e0");
}
testDecodeURI_15.metadata = {
  bug:"CARAKAN-126"
};

function testDecodeURI_16() {
  //First byte in 3-byte UTF8 sequence followed by second but not third
  assertThrows(URIError(), decodeURI, "%e0%80");
}
testDecodeURI_16.metadata = {
  bug:"CARAKAN-126"
};

function testDecodeURI_17() {
  //Valid 3 byte sequence
  assertEquals("\u0800", decodeURI("%e0%a0%80"));
}

function testDecodeURI_18() {
  //Valid 3 byte sequence
  assertEquals("\uD7FF", decodeURI("%ed%9f%bf"));
}

function testDecodeURI_19() {
  //Valid 3 byte sequence
  assertEquals("\uE000", decodeURI('%ee%80%80'));
}

function testDecodeURI_20() {
  //Valid 3 byte sequence
  assertEquals("\uFFFF", decodeURI('%ef%bf%bf'));
}

function testDecodeURI_21() {
  //First byte of a four byte sequence followed by nothing
  assertThrows(URIError(), decodeURI, "%f0");
}
testDecodeURI_21.metadata = {
  bug:"CARAKAN-126"
};

function testDecodeURI_22() {
  //First byte of a four byte sequence followed by one byte
  assertThrows(URIError(), decodeURI, "%f0%80");
}
testDecodeURI_22.metadata = {
  bug:"CARAKAN-126"
};

function testDecodeURI_23() {
  //First byte of a four byte sequence followed by two bytes
  assertThrows(URIError(), decodeURI, "%f0%80%80");
}
testDecodeURI_23.metadata = {
  bug:"CARAKAN-126"
};

function testDecodeURI_24() {
  //Valid four byte sequence
  assertEquals("\uDBC0\uDC00", decodeURI("%f4%80%80%80"));
}

function testDecodeURI_25() {
  //Valid four byte sequence
  assertEquals("\uDBFF\uDFFF", decodeURI("%f4%8f%bf%bf"));
}

function testDecodeURI_26() {
  //Too big utf-8 sequence
  assertThrows(URIError(), decodeURI, "%f7%bf%bf%bf");
}
testDecodeURI_26.metadata = {
  bug:"CARAKAN-126"
};

function testDecodeURI_27() {
  assertEquals("a", decodeURI("%61"));
}

function testDecodeURI_28() {
  //Invalid first byte
  assertThrows(URIError(), decodeURI, "%F1");
}
testDecodeURI_28.metadata = {
  bug:"CARAKAN-126"
};

function testDecodeURI_29() {
  //Invalid first byte
  assertThrows(URIError(), decodeURI, "%F1");
}
testDecodeURI_29.metadata = {
  bug:"CARAKAN-126"
};

function testDecodeURI_30() {
  assertEquals("undefined", decodeURI());
}
testDecodeURI_30.metadata = {
  bug:"CARAKAN-349"
};

function testDecodeURIComponent_0() {
  assertEquals("", decodeURIComponent(""));
}

function testDecodeURIComponent_1() {
  //characters in #, uri_reserved /do/ not get decoded
  var characters = ["#"].concat(uri_reserved);
  for (var i=0; i < characters.length; i++) {
    var character = characters[i];
    var encoded = encodeComponent(character);
    assertEquals(character, decodeURIComponent(encoded));
  }
}

function testDecodeURIComponent_1() {
  //characters in uri_unescaped do get decoded
  for (var i=0; i < uri_unescaped.length; i++) {
    var character = uri_unescaped[i];
    var encoded = encodeURIComponent(character);
    assertEquals(character, decodeURIComponent(encoded));
  }
}

function testDecodeURIComponent_2() {
  //If the characters are not encoded to start with nothing bad happens
  for (var i=0; i < uri_unescaped.length; i++) {
    var character = uri_unescaped[i];
    assertEquals(character, decodeURIComponent(character));
  }
}

function testDecodeURIComponent_3() {
  assertThrows(URIError(), decodeURIComponent, "%");
}

function testDecodeURIComponent_4() {
  assertThrows(URIError(), decodeURIComponent, "%2");
}

function testDecodeURIComponent_5() {
  assertEquals("\u0000", decodeURIComponent("%00"));
}

function testDecodeURIComponent_6() {
  assertEquals("\u007F", decodeURIComponent("%7f"));
}

function testDecodeURIComponent_7() {
  assertEquals("\u007F", decodeURIComponent("%7f"));
}

function testDecodeURIComponent_8() {
  assertThrows(URIError(), decodeURIComponent, "%7g");

}

function testDecodeURIComponent_9() {
  //Can only be the second byte in a multi byte UTF-8 sequence
  assertThrows(URIError(), decodeURIComponent, "%80");
}
testDecodeURIComponent_9.metadata = {
  bug:"CARAKAN-126"
};

function testDecodeURIComponent_10() {
  //First byte in 2 byte sequence not followed by second
  assertThrows(URIError(), decodeURIComponent, "%C0");
}
testDecodeURIComponent_10.metadata = {
  bug:"CARAKAN-126"
};


function testDecodeURIComponent_11() {
  //First byte in 2 byte sequence followed by incorrect second
  assertThrows(URIError(), decodeURIComponent, "%C0%7F");
}
testDecodeURIComponent_11.metadata = {
  bug:"CARAKAN-126"
};


function testDecodeURIComponent_12() {
  //First byte in 2 byte sequence followed by incorrect second
  assertThrows(URIError(), decodeURIComponent, "%C0%C0");
}
testDecodeURIComponent_12.metadata = {
  bug:"CARAKAN-126"
};

function testDecodeURIComponent_13() {
  //Valid two-byte sequence
  assertEquals("\u018F", decodeURIComponent("%C6%8F"));
}


function testDecodeURIComponent_14() {
  assertEquals("\u07FF", decodeURIComponent("%df%bf"));
}

function testDecodeURIComponent_15() {
  //First byte in 3-byte UTF8 sequence not followed by second
  assertThrows(URIError(), decodeURIComponent, "%e0");
}
testDecodeURIComponent_15.metadata = {
  bug:"CARAKAN-126"
};

function testDecodeURIComponent_16() {
  //First byte in 3-byte UTF8 sequence followed by second but not third
  assertThrows(URIError(), decodeURIComponent, "%e0%80");
}
testDecodeURIComponent_16.metadata = {
  bug:"CARAKAN-126"
};

function testDecodeURIComponent_17() {
  //Valid 3 byte sequence
  assertEquals("\u0800", decodeURIComponent("%e0%a0%80"));
}

function testDecodeURIComponent_18() {
  //Valid 3 byte sequence
  assertEquals("\uD7FF", decodeURIComponent("%ed%9f%bf"));
}

function testDecodeURIComponent_19() {
  //Valid 3 byte sequence
  assertEquals("\uE000", decodeURIComponent('%ee%80%80'));
}

function testDecodeURIComponent_20() {
  //Valid 3 byte sequence
  assertEquals("\uFFFF", decodeURIComponent('%ef%bf%bf'));
}

function testDecodeURIComponent_21() {
  //First byte of a four byte sequence followed by nothing
  assertThrows(URIError(), decodeURIComponent, "%f0");
}
testDecodeURIComponent_21.metadata = {
  bug:"CARAKAN-126"
};

function testDecodeURIComponent_22() {
  //First byte of a four byte sequence followed by one byte
  assertThrows(URIError(), decodeURIComponent, "%f0%80");
}
testDecodeURIComponent_22.metadata = {
  bug:"CARAKAN-126"
};

function testDecodeURIComponent_23() {
  //First byte of a four byte sequence followed by two bytes
  assertThrows(URIError(), decodeURIComponent, "%f0%80%80");
}
testDecodeURIComponent_23.metadata = {
  bug:"CARAKAN-126"
};

function testDecodeURIComponent_24() {
  //Valid four byte sequence
  assertEquals("\uDBC0\uDC00", decodeURIComponent("%f4%80%80%80"));
}

function testDecodeURIComponent_25() {
  //Valid four byte sequence
  assertEquals("\uDBFF\uDFFF", decodeURIComponent("%f4%8f%bf%bf"));
}

function testDecodeURIComponent_26() {
  //Too big utf-8 sequence
  assertThrows(URIError(), decodeURIComponent, "%f7%bf%bf%bf");
}
testDecodeURIComponent_26.metadata = {
  bug:"CARAKAN-126"
};

function testDecodeURIComponent_27() {
  assertEquals("a", decodeURIComponent("%61"));
}

function testDecodeURIComponent_28() {
  //Invalid first byte
  assertThrows(URIError(), decodeURI, "%F1");
}
testDecodeURIComponent_28.metadata = {
  bug:"CARAKAN-126"
};

function testDecodeURIComponent_29() {
  //Invalid first byte
  assertThrows(URIError(), decodeURI, "%F1");
}
testDecodeURIComponent_29.metadata = {
  bug:"CARAKAN-126"
};

function testDecodeURIComponent_30() {
  assertEquals("undefined", decodeURIComponent());
}
testDecodeURIComponent_30.metadata = {
  bug:"CARAKAN-349"
};