function testConditional_0() {
  var x = true?1:2;
  assertEquals(1, x);
}

function testConditional_1() {
  var x = false?1:2;
  assertEquals(2, x);
}

function testConditional_2() {
  var x = 1?0:1;
  assertEquals(0, x);
}

function testConditional_3() {
  var x = "a"||false?"a":"b";
  assertEquals("a", x);
}

function testConditional_4() {
  var x = true?true?"a":"b":"c";
  assertEquals(x, "a");
}

function testConditional_5() {
  var x = false?true?"a":"b":"c";
  assertEquals(x, "c");
}

function testConditional_6() {
  var x = true?false:true?false:true;
  assertEquals(false, x);
}

function testConditional_7() {
  var x = (true?false:true)?false:true;
  assertEquals(true, x);
}

function testConditional_8() {
  var count = 0;
  function a() {
    count++;
    return 1;
  }
  function b() {
    count++;
    return 2;
  }
  var x = true?a():b();
  assertEquals(1, x);
  assertEquals(1, count);
}

function testConditional_9() {
  var count = 0;
  function a() {
    count++;
    return 1;
  }
  function b() {
    count++;
    return 2;
  }
  var x = false?a():b();
  assertEquals(2, x);
  assertEquals(1, count);
}

function testConditional_10() {
  var a;
  true?a=1:a=2;
  assertEquals(1, a);
}

function testConditional_11() {
  var a = [];
  for (var i = 0; i < 100; ++i) {
    a[i] = "fail";
  }

  a[100] = "pass";

  function f(obj, top, b) {
    return obj[top+(b?1:0)];
  }

  for (var i = 0; i < 100; ++i){
    assertEquals(f(a,99,true), "pass");
  }

}
testConditional_11.metadata = {
  bug:"CARAKAN-638"
};

function testConditional_12() {
  for (var i=0; i < 100; i++) {
    button = 0, which=1;
    a = button ? assertUnreached() : (which ? which - 1 : assertUnreached());
    assertEquals(0,a);
  }
}

function testConditional_13() {
  function f() {
    return true ? {} || null : null;
  }
  for(var i=0; i<100; i++){
    assertObjectEquals({}, f());
  }
}
testConditional_13.metadata = {
  bug:"CARAKAN-1042"
};

function testConditional_14() {
  function f(a) {
    var d = '';
    d = a ? d + 'a' : d + 'b';
    return d;
  }
  assertEquals('b', f(0));
}
testConditional_14.metadata = {
  bug:"CORE-45915"
};
