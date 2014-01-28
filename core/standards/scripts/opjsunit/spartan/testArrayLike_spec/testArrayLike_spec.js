
var array_like_proto = {
  length:4,
  0:1,
  1:2,
  3:4
};
function ArrayLike(){};
ArrayLike.prototype = array_like_proto;

function testSort_0() {
  array = [1,2,,4];
  initial_array = [1,2,,4];
  array_like = new ArrayLike();
  var expected = array.sort();
  var actual = Array.prototype.sort.call(array_like);
//  if (expected instanceof Array) {
//    assertArrayEquals(expected,actual);
//  } else {
//    assertEquals(expected, actual);
//  }
  assertEquals(array.length, array_like.length);
  for (var p in array) {
    assertEquals(array[p], array_like[p]);
  }
}

function testMap_0() {
  array = [1,2,,4];
  initial_array = [1,2,,4];
  array_like = new ArrayLike();
  var expected = array.map(function(x) {return x});
  var actual = Array.prototype.map.call(array_like,function(x) {return x});
  if (expected instanceof Array) {
    assertArrayEquals(expected,actual);
  } else {
    assertEquals(expected, actual);
  }
  assertEquals(array.length, array_like.length);
  for (var p in array) {
    assertEquals(array[p], array_like[p]);
  }
}

function testSome_0() {
  array = [1,2,,4];
  initial_array = [1,2,,4];
  array_like = new ArrayLike();
  var expected = array.some(function() {return false});
  var actual = Array.prototype.some.call(array_like,function() {return false});
  if (expected instanceof Array) {
    assertArrayEquals(expected,actual);
  } else {
    assertEquals(expected, actual);
  }
  assertEquals(array.length, array_like.length);
  for (var p in array) {
    assertEquals(array[p], array_like[p]);
  }
}

function testSlice_0() {
  array = [1,2,,4];
  initial_array = [1,2,,4];
  array_like = new ArrayLike();
  var expected = array.slice();
  var actual = Array.prototype.slice.call(array_like);
  if (expected instanceof Array) {
    assertArrayEquals(expected,actual);
  } else {
    assertEquals(expected, actual);
  }
  assertEquals(array.length, array_like.length);
  for (var p in array) {
    assertEquals(array[p], array_like[p]);
  }
}

function testJoin_0() {
  array = [1,2,,4];
  initial_array = [1,2,,4];
  array_like = new ArrayLike();
  var expected = array.join(',');
  var actual = Array.prototype.join.call(array_like,',');
  if (expected instanceof Array) {
    assertArrayEquals(expected,actual);
  } else {
    assertEquals(expected, actual);
  }
  assertEquals(array.length, array_like.length);
  for (var p in array) {
    assertEquals(array[p], array_like[p]);
  }
}

function testJoin_1() {
  array = [1,2,,4];
  initial_array = [1,2,,4];
  array_like = new ArrayLike();
  var expected = array.join(undefined);
  var actual = Array.prototype.join.call(array_like,undefined);
  if (expected instanceof Array) {
    assertArrayEquals(expected,actual);
  } else {
    assertEquals(expected, actual);
  }
  assertEquals(array.length, array_like.length);
  for (var p in array) {
    assertEquals(array[p], array_like[p]);
  }
}

function testReduceright_0() {
  array = [1,2,,4];
  initial_array = [1,2,,4];
  array_like = new ArrayLike();
  var expected = array.reduceRight(function(x, y) {return x+y});
  var actual = Array.prototype.reduceRight.call(array_like,function(x, y) {return x+y});
  if (expected instanceof Array) {
    assertArrayEquals(expected,actual);
  } else {
    assertEquals(expected, actual);
  }
  assertEquals(array.length, array_like.length);
  for (var p in array) {
    assertEquals(array[p], array_like[p]);
  }
}

function testIndexof_0() {
  array = [1,2,,4];
  initial_array = [1,2,,4];
  array_like = new ArrayLike();
  var expected = array.indexOf(4);
  var actual = Array.prototype.indexOf.call(array_like,4);
  if (expected instanceof Array) {
    assertArrayEquals(expected,actual);
  } else {
    assertEquals(expected, actual);
  }
  assertEquals(array.length, array_like.length);
  for (var p in array) {
    assertEquals(array[p], array_like[p]);
  }
}

function testIndexof_1() {
  array = [1,2,,4];
  initial_array = [1,2,,4];
  array_like = new ArrayLike();
  var expected = array.indexOf(1,1);
  var actual = Array.prototype.indexOf.call(array_like,1,1);
  if (expected instanceof Array) {
    assertArrayEquals(expected,actual);
  } else {
    assertEquals(expected, actual);
  }
  assertEquals(array.length, array_like.length);
  for (var p in array) {
    assertEquals(array[p], array_like[p]);
  }
}

function testShift_0() {
  array = [1,2,,4];
  initial_array = [1,2,,4];
  array_like = new ArrayLike();
  var expected = array.shift();
  var actual = Array.prototype.shift.call(array_like);
  if (expected instanceof Array) {
    assertArrayEquals(expected,actual);
  } else {
    assertEquals(expected, actual);
  }
  assertEquals(array.length, array_like.length);
  for (var p in array) {
    assertEquals(array[p], array_like[p]);
  }
}

function testUnshift_0() {
  array = [1,2,,4];
  initial_array = [1,2,,4];
  array_like = new ArrayLike();
  var expected = array.unshift();
  var actual = Array.prototype.unshift.call(array_like);
  if (expected instanceof Array) {
    assertArrayEquals(expected,actual);
  } else {
    assertEquals(expected, actual);
  }
  assertEquals(array.length, array_like.length);
  for (var p in array) {
    assertEquals(array[p], array_like[p]);
  }
}

function testUnshift_1() {
  array = [1,2,,4];
  initial_array = [1,2,,4];
  array_like = new ArrayLike();
  var expected = array.unshift(3,4);
  var actual = Array.prototype.unshift.call(array_like,3,4);
  if (expected instanceof Array) {
    assertArrayEquals(expected,actual);
  } else {
    assertEquals(expected, actual);
  }
  assertEquals(array.length, array_like.length);
  for (var p in array) {
    assertEquals(array[p], array_like[p]);
  }
}

function testUnshift_2() {
  array = [1,2,,4];
  initial_array = [1,2,,4];
  array_like = new ArrayLike();
  var expected = array.unshift('a');
  var actual = Array.prototype.unshift.call(array_like,'a');
  if (expected instanceof Array) {
    assertArrayEquals(expected,actual);
  } else {
    assertEquals(expected, actual);
  }
  assertEquals(array.length, array_like.length);
  for (var p in array) {
    assertEquals(array[p], array_like[p]);
  }
}

function testPop_0() {
  array = [1,2,,4];
  initial_array = [1,2,,4];
  array_like = new ArrayLike();
  var expected = array.pop();
  var actual = Array.prototype.pop.call(array_like);
  if (expected instanceof Array) {
    assertArrayEquals(expected,actual);
  } else {
    assertEquals(expected, actual);
  }
  assertEquals(array.length, array_like.length);
  for (var p in array) {
    assertEquals(array[p], array_like[p]);
  }
}

function testReduce_0() {
  array = [1,2,,4];
  initial_array = [1,2,,4];
  array_like = new ArrayLike();
  var expected = array.reduce(function(x, y) {return x+y});
  var actual = Array.prototype.reduce.call(array_like,function(x, y) {return x+y});
  if (expected instanceof Array) {
    assertArrayEquals(expected,actual);
  } else {
    assertEquals(expected, actual);
  }
  assertEquals(array.length, array_like.length);
  for (var p in array) {
    assertEquals(array[p], array_like[p]);
  }
}

function testFilter_0() {
  array = [1,2,,4];
  initial_array = [1,2,,4];
  array_like = new ArrayLike();
  var expected = array.filter(function(x) {return x});
  var actual = Array.prototype.filter.call(array_like,function(x) {return x});
  if (expected instanceof Array) {
    assertArrayEquals(expected,actual);
  } else {
    assertEquals(expected, actual);
  }
  assertEquals(array.length, array_like.length);
  for (var p in array) {
    assertEquals(array[p], array_like[p]);
  }
}

function testEvery_0() {
  array = [1,2,,4];
  initial_array = [1,2,,4];
  array_like = new ArrayLike();
  var expected = array.every(function() {return true});
  var actual = Array.prototype.every.call(array_like,function() {return true});
  if (expected instanceof Array) {
    assertArrayEquals(expected,actual);
  } else {
    assertEquals(expected, actual);
  }
  assertEquals(array.length, array_like.length);
  for (var p in array) {
    assertEquals(array[p], array_like[p]);
  }
}

function testSplice_0() {
  array = [1,2,,4];
  initial_array = [1,2,,4];
  array_like = new ArrayLike();
  var expected = array.splice();
  var actual = Array.prototype.splice.call(array_like);
  if (expected instanceof Array) {
    assertArrayEquals(expected,actual);
  } else {
    assertEquals(expected, actual);
  }
  assertEquals(array.length, array_like.length);
  for (var p in array) {
    assertEquals(array[p], array_like[p]);
  }
}

function testSplice_1() {
  array = [1,2,,4];
  initial_array = [1,2,,4];
  array_like = new ArrayLike();
  var expected = array.splice(1,1);
  var actual = Array.prototype.splice.call(array_like,1,1);
  if (expected instanceof Array) {
    assertArrayEquals(expected,actual);
  } else {
    assertEquals(expected, actual);
  }
  assertEquals(array.length, array_like.length);
  for (var p in array) {
    assertEquals(array[p], array_like[p]);
  }
}

function testSplice_2() {
  array = [1,2,,4];
  initial_array = [1,2,,4];
  array_like = new ArrayLike();
  var expected = array.splice(0,2);
  var actual = Array.prototype.splice.call(array_like,0,2);
  if (expected instanceof Array) {
    assertArrayEquals(expected,actual);
  } else {
    assertEquals(expected, actual);
  }
  assertEquals(array.length, array_like.length);
  for (var p in array) {
    assertEquals(array[p], array_like[p]);
  }
}

function testPush_0() {
  array = [1,2,,4];
  initial_array = [1,2,,4];
  array_like = new ArrayLike();
  var expected = array.push(5);
  var actual = Array.prototype.push.call(array_like,5);
  if (expected instanceof Array) {
    assertArrayEquals(expected,actual);
  } else {
    assertEquals(expected, actual);
  }
  assertEquals(array.length, array_like.length);
  for (var p in array) {
    assertEquals(array[p], array_like[p]);
  }
}

function testLastindexof_0() {
  array = [1,2,,4];
  initial_array = [1,2,,4];
  array_like = new ArrayLike();
  var expected = array.lastIndexOf(4);
  var actual = Array.prototype.lastIndexOf.call(array_like,4);
  if (expected instanceof Array) {
    assertArrayEquals(expected,actual);
  } else {
    assertEquals(expected, actual);
  }
  assertEquals(array.length, array_like.length);
  for (var p in array) {
    assertEquals(array[p], array_like[p]);
  }
}

function testLastindexof_1() {
  array = [1,2,,4];
  initial_array = [1,2,,4];
  array_like = new ArrayLike();
  var expected = array.lastIndexOf(1,1);
  var actual = Array.prototype.lastIndexOf.call(array_like,1,1);
  if (expected instanceof Array) {
    assertArrayEquals(expected,actual);
  } else {
    assertEquals(expected, actual);
  }
  assertEquals(array.length, array_like.length);
  for (var p in array) {
    assertEquals(array[p], array_like[p]);
  }
}
