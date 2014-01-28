function testAssignment_0() {
  var a = 1;
  assertEquals(1,a);
}

function testAssignment_1() {
  var a = 1+eval("2");
  assertEquals(3, a);
}

function testAssignment_2() {
  var x = { y: true };
  var a = true;

  function func1() {
    while (x.y = false, a) {
      assertEquals(false, x.y);
      return;
    }
  }

  function func2() {
    var a = "The length of this string is important.";
  }

  for (var i = 0; i < 100; i++) {
    func1();
    func2();
  }
}
testAssignment_2.metadata = {
  bug: "CORE-31631"
};

function testPlusAssignment_0() {
  var a = 1;
  a += 1;
  assertEquals(2,a);
}

function testPlusAssignment_1() {
  var a = 1;
  a += "1";
  assertEquals("11",a);
}

function testPlusAssignment_2() {
  function func() {
    var arr1 = [ [1, 2] ]; 
    var i = 0; 
    arr1[i--][1] += 1000;
    return arr1[0][1];
  }
  for (var i = 0; i < 100; i++)
    assertEquals(1002, func());
}
testPlusAssignment_2.metadata = {
  bug:"CORE-30620",
};

function testPlusAssignment_3() {
  function func() {
    var arr2 = [ { a: 2} ]; 
    var j = 0; 
    arr2[j--].a += 1000;
    return arr2[0].a;
  }
  for (var i = 0; i < 100; i++)
    assertEquals(1002, func());
}
testPlusAssignment_3.metadata = {
  bug:"CORE-30620",
};

function testMinusAssignment_0() {
  var a = 1;
  a -= 1;
  assertEquals(0, a);
}

function testMinusAssignment_1() {
  var a = "2";
  var b = "1";
  a -= b;
  assertEquals(a, 1);
}

function testMinusAssignment_2() {
  var a = "2";
  var b = 1;
  a -= b;
  assertEquals(a, 1);
}

function testMinusAssignment_3() {
  var a = null;
  a -= 2;
  assertEquals(-2, a);
}

function testMinusAssignment_4() {
  var a = undefined;
  a -= 2;
  assertNaN(a);
}

function testMinusAssignment_5() {
  var a = 2;
  a -= undefined;
  assertNaN(a);
}

function testMinusAssignment_6() {
  var a = 2;
  a -= true;
  assertEquals(1, a);
}

function testMultiplyAssignment_0() {
  var a = 2;
  a *=2;
  assertEquals(4,a);
}

function testMultiplyAssignment_1() {
  var a = "2";
  a *=2;
  assertEquals(4, a);
}

function testMultiplyAssignment_2() {
  var a = true;
  a *= 2;
  assertEquals(2,a);
}

function testMultiplyAssignment_3() {
  var a = "a";
  a *= 1;
  assertNaN(a);
}

function testMultiplyAssignment_4() {
  var a = {};
  a *= 2;
  assertNaN(a);
}

function testMultiplyAssignment_5() {
  var a = {valueOf:function(){return 2;}};
  a *= 2;
  assertEquals(4, a);
}

function testMultiplyAssignment_6() {
  var a = 1;
  a *= undefined;
  assertNaN(a);
}

function testDivideAssignment_0() {
  var a = 4;
  a /= 2;
  assertEquals(2,a);
}

function testDivideAssignment_1() {
  var a = "4";
  a /= 2;
  assertEquals(2, a);
}

function testDivideAssignment_2() {
  var a = true;
  a /= 2;
  assertEquals(0.5,a);
}

function testDivideAssignment_3() {
  var a = "a";
  a /= 1;
  assertNaN(a);
}

function testDivideAssignment_4() {
  var a = {};
  a /= 2;
  assertNaN(a);
}

function testDivideAssignment_5() {
  var a = {valueOf:function(){return 2;}};
  a /= 2;
  assertEquals(1, a);
}

function testDivideAssignment_6() {
  var a = 1;
  a /= undefined;
  assertNaN(a);
}

function testLogicalXorAssignment_0() {
  function func(x) {
    x ^= true;
    assertEquals(1, x);
  }
  func(false);
}

function testAssignTemp_0() {
  function TestObject() {
    this.test = "FAIL";
  }
  var testObject = new TestObject;
  var a = testObject;
  a.test = a = "PASS";
  assertEquals('PASS', testObject.test);
}

function testAssignTemp_1() {
  function TestObject() {
    this.test = "FAIL";
  }
  var testObject = new TestObject;
  var a = testObject;
  a["test"] = a = "PASS";
  assertEquals('PASS', testObject.test);
}

function testAssignTemp_2() {
  function TestObject() {
    this.test = "FAIL";
  }
  var testObject = new TestObject;
  var a = testObject;
  a[a = "test"] = "PASS";
  assertEquals('PASS', testObject.test);
}

function testAssignTemp_3() {
  function TestObject() {
    this.test = "FAIL";
  }
  var testObject = new TestObject;
  var a = testObject;
  a.test = (a = "FAIL", "PASS");
  assertEquals("PASS", testObject.test);
}


function testAssignTemp_4() {
  function TestObject() {
    this.test = "FAIL";
  }
  var testObject = new TestObject;
  var a = testObject;
  a["test"] = (a = "FAIL", "PASS");
  assertEquals("PASS", testObject.test);
}

function testAssignTemp_5() {
    var o = { b: 1 };
    var a = o;
    a.b += a = 2;
  assertEquals(3, o.b);
}

function testAssignTemp_6() {
  var o = { b: 1 };
  var a = o;
  a["b"] += a = 2;
  assertEquals(3, o["b"]);
}

function testAssignTemp_7() {
  var o = { b: 1 };
  var a = o;
  a[a = "b"] += a = 2;
  assertEquals(3, o["b"]);
}

function testAssignTemp_8() {
  var o = { b: 1 };
  var a = o;
  var b = "b";
  a[b] += a = 2;
  assertEquals(3, o["b"]);
}

function testAssignTemp_9() {
  var o = { b: 1 };
  var a = o;
  a.b += (a = 100, 2);
  assertEquals(3, o.b);
}

function testAssignTemp_10() {
  var o = { b: 1 };
  var a = o;
  a["b"] += (a = 100, 2);
  assertEquals(3, o["b"]);
}

function testAssignTemp_11() {
  var o = { b: 1 };
  var a = o;
  var b = "b";
  a[b] += (a = 100, 2);
  assertEquals(3, o["b"]);
}

function testAssignTemp_12() { 
  var o = { b: 1 }; 
  var a;
  o[a = "b"] += a = 2; 
  assertEquals(3, o["b"]);
}

function testAssignTemp_13() {
  var a = new Array(2);
  var l = a.length;
  while(l)
    a[--l] = a[--l] = 1;
  assertEquals(1, a[1]);
}
testAssignTemp_13.metadata = {
  bug:"CORE-31951",
};

function testAssignTemp_14() {
  var a = new Array(2);
  var b;
  a[b=0] = a[b=1] = 2;
  assertEquals(2, a[0]);
  assertEquals(2, a[1]);
}
testAssignTemp_14.metadata = {
  bug:"CORE-31951",
};


function testBracket_0() {
  var o = [-1];
  var a = o[++o];
  assertEquals(-1, a);
}

function testBracket_1() {
    var o = [1];
    var a = o[--o];
    assertEquals(1, a);
}

function testBracket_2() {
  var o = [0];
  var a = o[o++];
  assertEquals(0, a);
}

function testBracket_3() {
  var o = [0];
  var a = o[o--];
  assertEquals(0, a);
}

function testBracket_4() {
  var o = [1];
  var a = o[o ^= 1];
  assertEquals(1, a);
}

function testBracket_5() {
  var o = { b: 1 };
  var b = o[o = { b: 2 }, "b"];
  assertEquals(1, b);
}
