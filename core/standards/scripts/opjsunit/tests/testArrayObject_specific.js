function testSort_0() {
  function func() {
    var a = [2,3,1];
    a.sort(null);
  }
  assertThrows(TypeError(), func);
}

function testSort_1() {
  function func() {
    var a = [2,3,1];
    a.sort(true);
  }
  assertThrows(TypeError(), func);
}

function testSort_2() {
  function func() {
    var a = [2,3,1];
    a.sort(2);
  }
  assertThrows(TypeError(), func);
}

function testSort_3() {
  function func() {
    var a = [2,3,1];
    a.sort([]);
  }
  assertThrows(TypeError(), func);
}

function testSort_4() {
  function func() {
    var a = [2,3,1];
    a.sort({});
  }
  assertThrows(TypeError(), func);
}

function testSort_5() {
  //Really a test to see that nothing bad happens
  function func() {
    var a = [2,3,1];
    a.sort(eval);
  }
  assertDoesNotThrow(func);
}

function testSort_6() {
  function func() {
    eval("a = ['delete a', '2']");
    a.sort(eval);
  }
  assertDoesNotThrow(func);
}
testSort_6.metadata = {
  bug:"CARAKAN-226"
};

function testSort_7() {
  function func() {
    var a = [2,7,1,4];
    function cmp(b,c) {
      throw "Exception";
      return c-b;
    }
    a.sort(cmp);
  }
  assertThrows("Exception", func);
}

function testSort_8() {
  function func() {
    var a = ['delete a', '2'];
    a.sort(eval);
  }
  assertDoesNotThrow(func);
}
testSort_8.metadata = {
  bug:"CARAKAN-226"
};

function testSort_9() {
  //Just to check we can't cause an infinite loop or anything silly
  var a = [3,4,1,2,5,6];
  var b = [3,4,1,2,5,6];
  function cmp(c,d) {
    for (var i=0; i<b.length; i++) {
      b[i] = a[i];
    }
    return c-d;
  }
  b.sort(cmp);
}

function testSort_10() {
  function compare1(n, x, y)
  {
    var z0 = x + y;
    var z1 = x + z0;
    var z2 = x + z1;
    var z3 = x + z2;
    var z4 = x + z3;
    var z5 = x + z4;
    var z6 = x + z5;
    var z7 = x + z6;
    var z8 = x + z7;
    var z9 = x + z8;
    var z10 = x + z9;
    var z11 = x + z10;
    var z12 = x + z11;
    var z13 = x + z12;
    var z14 = x + z13;
    var z15 = x + z14;
    var z16 = x + z15;
    if (n == 30)
      return (x < y ? (-1) : x == y ? 0 : z != 0);
    else
      compare1(n+1, x, z8);
  }

  function compare(x,y)
  {
    return compare1(0, x, y);
  }

  function testcase()
  {
    var array_length = 28;
    var a = Array(array_length);
    for (var i = 0; i < array_length; i++)
      a[i] = 200 * Math.random();

    assertEquals(a.sort(compare).length, array_length);
  }
  for(var i = 0; i < 30; i++)
    testcase();
}
testSort_10.metadata = {
  bug:"CORE-44038"
};
