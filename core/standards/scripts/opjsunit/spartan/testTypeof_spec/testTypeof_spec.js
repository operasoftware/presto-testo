function testTypeof_0() {
  assertEquals("undefined", typeof(undefined));
}

function testTypeof_1() {
  assertEquals("object", typeof(null));
}

function testTypeof_2() {
  assertEquals("boolean", typeof(true));
}

function testTypeof_3() {
  assertEquals("boolean", typeof(false));
}

function testTypeof_4() {
  assertEquals("string", typeof("abc"));
}

function testTypeof_5() {
  assertEquals("number", typeof(1));
}

function testTypeof_6() {
  assertEquals("object", typeof {});
}

function testTypeof_7() {
  assertEquals("object", typeof (new Object()));
}

function testTypeof_8() {
  assertEquals("object", typeof (new String()));
}

function testTypeof_9() {
  assertEquals("object", typeof (new Number()));
}

function testTypeof_10() {
  assertEquals("object", typeof (new Date()));
}

function testTypeof_11() {
  assertEquals("object", typeof (new RegExp()));
}

function testTypeof_12() {
  assertEquals("object", typeof (new Error()));
}

function testTypeof_13() {
  assertEquals("function", typeof (new Function()));
}

function testTypeof_14() {
  function a(){
  }
  assertEquals("function", typeof a);
}

function testTypeof_15() {
  var a = function b(){
  };
  assertEquals("function", typeof a);
}

function testTypeof_16() {
  assertEquals("undefined", typeof x);
}
testTypeof_16.metadata = {
  bug:"CARAKAN-184"
};