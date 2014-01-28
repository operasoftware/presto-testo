function testIndex_0() {
  var a = "abcdef";
  for (var i=0; i<a.length; i++) {
    assertEquals(a.charAt(i), a[i]);
  }
}

function testIndex_1() {
  //Character indexes override properties
  var a = "abcdef";
  a[2] = 2;
  a[0] = 0;
  for (var i=0; i<a.length; i++) {
    assertEquals(a.charAt(i), a[i]);
  }
}

function testIndex_2() {
  var a = new String("abcdef");
  for (var i=0; i<a.length; i++) {
    assertEquals(a.charAt(i), a[i]);
  }
}

function testIndex_3() {
  //Character indexes override properties
  var a = new String("abcdef");
  a[2] = 2;
  a[0] = 0;
  for (var i=0; i<a.length; i++) {
    assertEquals(a.charAt(i), a[i]);
  }
}

function testIndex_4() {
  var a = "abc";
  assertEquals("d", a[0] = "d");
}

function testIndex_5() {
  var a = new String("abc");
  assertEquals("d", a[0] = "d");
}


function testIndexEnumeration_0() {
  var a = "abcdef";
  a[a.length] = "g";
  a[a.length+1] = "h";
  a[-1] = "z";
  a["foo"] = "bar";
  var props = [];
  for (p in a) {
    props.push(p);
  }
  assertArrayEquals(["0","1","2","3","4","5"], props);
}

function testIndexEnumeration_1() {
  var a = new String("abcdef");
  a[a.length] = "g";
  a[a.length+1] = "h";
  a[-1] = "z";
  a["foo"] = "bar";
  var props = [];
  for (p in a) {
    props.push(p);
  }
  var expected = ["0","1","2","3","4","5","6","7","-1", "foo"];
  //check all the properties exist
  assertEquals(props.length, expected.length);
  for (p in expected) {
    assertTrue(props.indexOf(expected[p]) > -1);
  }
  //Check the index properties are correctly ordered
  for (var i=1; i<6; i++) {
    assertEquals(props.indexOf("" + (i-1))+1, props.indexOf("" + i), "Property " + i + " incorrectly ordered");
  }
}

function testIndexProperties_0() {
  var a = "abcdef";
  function func() {
    return 0 in a;
  }
  assertThrows(TypeError, func);
}

function testIndexProperties_1() {
  var a = "abcdef";
  for (var i=0; i<a.length; i++) {
    assertTrue(a.hasOwnProperty(i));
  }
  assertFalse(a.hasOwnProperty(-1));
  assertFalse(a.hasOwnProperty(a.length));
}

function testIndexProperties_2() {
  var a = new String("abcdef");
  for (var i=0; i<a.length; i++) {
    assertTrue(i in a);
  }
  assertFalse(-1 in a);
  assertFalse(a.length in a);
}

function testIndexDelete_0() {
  var a = "abc";
  assertTrue(delete a[0]);
  assertEquals("abc", a);
}

function testIndexDelete_1() {
  var a = "abc";
  a[4] = 1;
  assertTrue(delete a[4]);
  assertEquals("abc", a);
}

function testIndexDelete_3() {
  var a = new String("abc");
  assertTrue(delete a[0]);
  assertEquals("abc", a.valueOf());
  var props = [];
  for (p in a) {
    props.push(p);
  }
  assertArrayEquals(["0","1","2"], props);
}

function testIndexDelete_4() {
  var a = new String("abc");
  a[4] = 1;
  assertTrue(delete a[4]);
  assertEquals("abc", a.valueOf());
  var props = [];
  for (p in a) {
    props.push(p);
  }
  assertArrayEquals(["0","1","2"], props);
}
