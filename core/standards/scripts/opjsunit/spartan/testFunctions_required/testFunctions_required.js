function testInfiniteRecursion_0() {
  function func() {
    func();
  }
  assertThrows(RangeError(), func);
}

function testInfiniteRecursion_1() {
  function func(i) {
    if (i == 0)
      return 1;
    return i*func(i-1);
  }
  assertThrows(RangeError(), func);
}