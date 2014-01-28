function testNew_0() {
  function func() {
    new 2;
  }
  assertThrows(TypeError(), func);
}

function testNew_1() {
  function func() {
    new undefined;
  }
  assertThrows(TypeError(), func);
}

function testNew_2() {
  function func() {
    var a = Object();
    new a;
  }
  assertThrows(TypeError(), func);
}

function testNew_3() {
  function func() {
    assertEquals(0, arguments.length);
  }
  new func;
}

function testNew_4() {
  function func() {
    assertEquals(2, arguments.length);
  }
  new func(1,2);
}

function testNew_5() {
  function func() {
    assertEquals(2, arguments.length);
  }
  new func(1,2);
}

function testNew_6() {
  function func() {
    new func;
  }
  assertEquals(func, (new func).constructor);
}

function testNew_7() {
  function func() {
    return 1;
  }
  assertEquals(1, new func());
}

function testNew_8() {
  function func(a) {
    if (a) {
      return 1;
    }
  };
  assertEquals(1, new func(true));
  assertEquals("object", typeof (new func(false)));
  assertEquals(func, (new func(false)).constructor);
}

function testNew_9() {
  function func() {
    return {};
  }
  assertEquals(Object, (new func()).constructor);
}
