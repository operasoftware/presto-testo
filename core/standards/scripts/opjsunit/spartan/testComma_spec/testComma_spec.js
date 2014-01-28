function testComma_0() {
  var a = (1,2);
  assertEquals(2,a);
}

function testComma_1() {
  var a;
  a = 1,2;
  assertEquals(1,a);
}

function testComma_2() {
  var a=0, b=1;
  assertEquals(0, a);
  assertEquals(1, b);
}

function testComma_3() {
  for (var i=0,j=0; i<10; i++, j+=2) {}
  assertEquals(10, i);
  assertEquals(20, j);
}

function testComma_4() {
  function func() {
    return 1,2;
  };
  assertEquals(2, func());
}


function testComma_5() {
  var a = (2>1,4<3);
  assertEquals(false, a);
}