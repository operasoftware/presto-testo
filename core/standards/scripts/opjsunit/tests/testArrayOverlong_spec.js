function make_array(start_value, filled_length, length) {
  var rv = new Array()
  for (var i=0; i<filled_length; i++) {
    rv[i] = start_value + i;
  }
  rv.length = length;
  return rv;
}

function testShift_0() {
  var a = make_array(1, 128, 256);
  a.shift();
  assertArrayEquals(make_array(2,127,255), a);
}

function testShift_1() {
  var a = make_array(1, 128, 256);
  for (var i=0; i<a.length; i++) {
    a.shift();
  }
  assertArrayEquals(new Array(128), a);
}

function testUnshift_0() {
  var a = make_array(1, 128, 256);
  a.unshift(0);
  assertArrayEquals(make_array(0,129,257), a);
}

function testUnshift_1() {
  var a = make_array(129, 128, 256);
  var shift_elements = make_array(1,128,128);
  Array.prototype.unshift.apply(a, shift_elements);
  assertArrayEquals(make_array(1,256,384), a);
}

function testSplice_0() {
  var a = make_array(1,128, 256);
  a.splice(1,128);
  assertArrayEquals(make_array(1,1, 128), a);
}

function testSplice_1() {
  var a = make_array(1,128,256);
  a.splice(0,128);
  assertArrayEquals(new Array(128), a);
}

function testSplice_2() {
  var a = make_array(1,128,256);
  a.splice(0,128);
  assertArrayEquals(new Array(128), a);
}

function testSplice_3() {
  var a = make_array(1,128,256);
  a.splice(129,2);
  assertArrayEquals(make_array(1,128,254), a);
}
