function testSplice_0() {
  var a = [1,2,3,4];
  var b = a.splice(undefined);
  assertArrayEquals([1,2,3,4], b);
  assertArrayEquals([], a);
}
testSplice_0.metadata = {
  bug:"CARAKAN-355"
};

function testSplice_1() {
  var a = [1,2,3,4];
  var b = a.splice(2);
  assertArrayEquals([3,4], b);
  assertArrayEquals([1,2], a);
}
testSplice_1.metadata = {
  bug:"CARAKAN-355"
};

function testSplice_2() {
  var a = [1,2,3,4];
  var b = a.splice(5);
  assertArrayEquals([], b);
  assertArrayEquals([1,2,3,4], a);
}
testSplice_2.metadata = {
  bug:"CARAKAN-355"
};

function testSplice_3() {
  var a = {
    0:1,
    1:2,
    2:3,
    length:3
  };
  var b = Array.prototype.splice.call(a, 1);
  assertArrayEquals([2,3], b);
  assertArrayEquals([1], a);
}
testSplice_3.metadata = {
  bug:"CARAKAN-355"
};

function testEvery_1() {
  // based on ch15/15.4/15.4.4/15.4.4.16/15.4.4.16-7-5.js in the test262 testsuite.
  function callbackfn(val, Idx, obj)
  {
    arr[1000] = 3;
    if(1 || val < 3)
       return true;
    else
       return false;
  }

  var arr = new Array(10);
  arr[1] = 1;
  arr[2] = 2;

  assertTrue(arr.every(callbackfn));
}
testEvery_1.metadata = {
  bug:"CORE-43894"
};
