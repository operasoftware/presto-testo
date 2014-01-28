function testPrefixDecrement_0() {
  var x = 1;
  assertEquals(0, --x);
}

function testPrefixDecrement_1() {
  var x = 1;
  //Using eval because of bug that causes a syntax error here
  assertEquals(0, eval("--(x)"));
}
testPrefixDecrement_1.metadata = {
  bug:"CARAKAN-174"
};

function testPrefixDecrement_2() {
  var x = 1;
  var y = --x;
  assertEquals(0, y);
}

