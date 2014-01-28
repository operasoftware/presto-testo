function testAndNull_0() {
  function foo(object) {
    return object != null && true;
  }
  assertFalse(foo(null));
}
testAndNull_0.metadata = {
  bug:"CARAKAN-524"
};

function testAndNull_1() {
  function foo(object) {
    return object == null && true;
  }
  assertTrue(foo(null));
}
testAndNull_1.metadata = {
  bug:"CARAKAN-524"
};

function testAndNull_2() {
  function foo(object) {
    return object != null && true;
  }
  assertFalse(foo(undefined));
}
testAndNull_2.metadata = {
  bug:"CARAKAN-524"
};

function testAndNull_3() {
  function foo(object) {
    return object == null && true;
  }
  assertTrue(foo(undefined));
}
testAndNull_3.metadata = {
  bug:"CARAKAN-524"
};

function testAndNull_4() {
  function foo(object) {
    return object != null && true;
  }
  assertTrue(foo(""));
}
testAndNull_4.metadata = {
  bug:"CARAKAN-524"
};

function testAndNull_5() {
  function foo(object) {
    return object == null && true;
  }
  assertFalse(foo(""));
}
testAndNull_5.metadata = {
  bug:"CARAKAN-524"
};

function testOrNull_0() {
  function foo(object) {
    return object != null || false;
  }
  assertFalse(foo(null));
}
testOrNull_0.metadata = {
  bug:"CARAKAN-524"
};

function testOrNull_1() {
  function foo(object) {
    return object == null || false;
  }
  assertTrue(foo(null));
}
testOrNull_1.metadata = {
  bug:"CARAKAN-524"
};

function testOrNull_2() {
  function foo(object) {
    return object != null || false;
  }
  assertFalse(foo(undefined));
}
testOrNull_2.metadata = {
  bug:"CARAKAN-524"
};

function testOrNull_3() {
  function foo(object) {
    return object == null || false;
  }
  assertTrue(foo(undefined));
}
testOrNull_3.metadata = {
  bug:"CARAKAN-524"
};

function testOrNull_4() {
  function foo(object) {
    return object != null || false;
  }
  assertTrue(foo(""));
}
testOrNull_4.metadata = {
  bug:"CARAKAN-524"
};

function testOrNull_5() {
  function foo(object) {
    return object == null || false;
  }
  assertFalse(foo(""));
}
testOrNull_5.metadata = {
  bug:"CARAKAN-524"
};

function testOr_0() {
    for (var i = 0; i < 100; i++)
    {
        var res = isNaN(3) || 2 < 3 || i >= 0;
	assertTrue(res);
    }
}
testOr_0.metadata = {
  bug:"CORE-39720"
};

function testAnd_0() {
    function f(b)
    {
       var d;
       if (b)
           d = 1;

       // looking to trigger a codegen crash; otherwise pass.
       if (1 & d)
          d = 1;
       if (d & 2)
          d = 1;

       return true;
    }
    for (var i = 0; i < 40; i++)
        assertTrue(f(i));
}
testAnd_0.metadata = {
  bug:"CORE-40177"
};
