function testPostfixIncrement_0() {
  var x = 1;
  assertEquals(1, x++);
}

function testPostfixIncrement_1() {
  var x = 1;
  //Using eval because of bug that causes a syntax error here
  assertEquals(1, eval("(x)++"));
}
testPostfixIncrement_1.metadata = {
  bug:"CARAKAN-174"
};

function testPostfixIncrement_2() {
  var x = 1;
  var y = x++;
  assertEquals(1, y);
}

function testPostfixIncrement_3() {
  function func() {
    var a = 1;
    return a+=(a++);
  }
  assertEquals(2, func());
}
testPostfixIncrement_3.metadata = {
  bug:"CARAKAN-326"
};

function testPostfixIncrement_4() {
  function func(x,y) {
    eval("(x,y)++;");
  }
  assertThrows(ReferenceError(), func);
}
testPostfixIncrement_4.metadata = {
  bug:"CARAKAN-696"
};

function testPostfixIncrement_5() {
  var Map = function() {
    this.foo = {};
  };
  Map.prototype.count = 0xD15EA5E;
  Map.prototype.set = function() {
    return this.count++;
  };
  var Set = function() {
    this.map = new Map();
  };
  Set.prototype.add = function() {
    return this.map.set();
  };
  function f() {
    return (new Set()).add();
  }
  for (var i = 0; i < 100; i++) 
    assertEquals(0xD15EA5E, f());
}
testPostfixIncrement_5.metadata = {
  bug:"CT-621"
};