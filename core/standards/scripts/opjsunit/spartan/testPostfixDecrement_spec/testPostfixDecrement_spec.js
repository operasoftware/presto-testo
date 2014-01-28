function testPostfixDecrement_0() {
  var x = 1;
  assertEquals(1, x--);
}

function testPostfixDecrement_1() {
  var x = 1;
  //Using eval because of bug that causes a syntax error here
  assertEquals(1, eval("(x)--"));
}
testPostfixDecrement_1.metadata = {
  bug:"CARAKAN-174"
};

function testPostfixDecrement_2() {
  var x = 1;
  var y = x--;
  assertEquals(1, y);
}

function testPostfixDecrement_3() {
  function func() {
    var a = 2;
    return a+=(a--);
  }
  assertEquals(4, func());
}
testPostfixDecrement_3.metadata = {
  bug:"CARAKAN-326"
};

function testPostfixDecrement_4() {
  function func(x,y) {
    eval("(x,y)--;");
  }
  assertThrows(ReferenceError(), func);
}
testPostfixDecrement_4.metadata = {
  bug:"CARAKAN-696"
};
