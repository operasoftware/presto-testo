function testReturn_0() {
  function a() {
    return 2;
  }
  assertEquals(2, a());
}

function testReturn_1() {
  function a() {
    return
    2;
  }
  assertUndefined(a());
}

function testReturn_2() {
  function a() {
    eval("return");
  }
  assertThrows(SyntaxError(), a);
}
testReturn_2.metadata = {
  bug:"CARAKAN-199, CARAKAN-200"
};