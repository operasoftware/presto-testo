function testPrefixIncrement_0() {
  var x = 1;
  assertEquals(2, ++x);
}

function testPrefixIncrement_1() {
  var x = 1;
  //Using eval because of bug that causes a syntax error here
  assertEquals(2, eval("++(x)"));
}
testPrefixIncrement_1.metadata = {
  bug:"CARAKAN-174"
};

function testPrefixIncrement_2() {
  var x = 1;
  var y = ++x;
  assertEquals(2, y);
}

