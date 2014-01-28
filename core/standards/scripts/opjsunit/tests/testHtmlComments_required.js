function testStartComment_0() {
  var a = 0;
  eval("<!-- a++");
  assertEquals(0,a);
}

function testStartComment_1() {
  var a = 0;
  eval("a++ <!-- a++");
  assertEquals(1,a);
}

function testStartComment_2() {
  var a = 0;
  eval("a++;<!-- a++");
  assertEquals(1,a);
}

function testStartComment_3() {
  assertThrows(SyntaxError(), eval, "< !--");
}

function testStartComment_4() {
  assertThrows(SyntaxError(), eval, "<! --");
}

function testEndComment_0() {
  //really checking we don't throw
  var a = 0;
  eval("-->");
  assertEquals(0,a);
}

function testEndComment_1() {
  //really checking we don't throw
  var a = 0;
  eval("  -->");
  assertEquals(0,a);
}

function testEndComment_2() {
  //really checking we don't throw
  var a = 0;
  eval("\t -->");
  assertEquals(0,a);
}

function testEndComment_3() {
  var a = 2;
  assertTrue(eval("a--> 0"));
}

function testEndComment_4() {
  var a = 2;
  assertTrue(eval("    a  --> 0"));
}

function testEndComment_4() {
  var a = 2;
  assertTrue(eval("    a  --> 0"));
}