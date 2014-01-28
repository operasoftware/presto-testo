function testVoid_0() {
  assertUndefined(void(true));
}

function testVoid_1() {
  function func() {return 1;};
  assertUndefined(void(func()));
}

function testVoid_2() {
  var x = 1;
  assertUndefined(void(x));
}

function testVoid_3() {
  assertUndefined(void(null));
}

function testVoid_4() {
  function foo () { 
  if (void /x/g > 1.2e3) 
    var a = 1; 
  }

  for (var i = 0; i < 50; i++) 
    foo();
}
