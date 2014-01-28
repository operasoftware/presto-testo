function testConstructor_0() {
  assertEquals(0, HostArray().length);
}

function testConstructor_1() {
  assertEquals(0, (new HostArray()).length);
}

function testIndexes_0() {
  var a = new HostArray(1,2,3);
  assertEquals(1, a[0]);
}

function testIndexes_1() {
  var a = new HostArray(3);
  a[0] = 1;
  a[1] = 2;
  a[2] = 3;
  assertEquals(1, a[0]);
  assertEquals(2, a[1]);
  assertEquals(3, a[2]);
}

function testIndexes_2() {
  var a = new HostArray(1,2,3);
  assertEquals(1, a[0]);
  var idx = 423244;
  a[idx] = 3;
  assertEquals(3, a[idx]);
  assertEquals(idx + 1, a.length);
  assertUndefined(a[4]);
}

function testAlterProperties_0() {
  var a = new HostArray(1,2,3);
  a[1] = "b";
  assertEquals("b", a[1]);
}

function testDelete_0() {
  var a = new HostArray(1,2,3);
  assertTrue(delete a[1]);
  assertEquals(1, a[0]);
  assertUndefined(a[1]);
  assertEquals(3, a[2]);
}

function testToString_0() {
  var a = new HostArray("a", "b", "c");
  assertEquals("a,b,c", a.toString());
}

function testToString_1() {
  var a = new HostArray("a", "b", []);
  a[2].push(a);
  assertEquals("a,b,", a.toString());
}

//concat is more complex so come back to it

function testJoin_0() {
  var a = new HostArray("a", "b", "c");
  assertEquals("a|b|c", a.join("|"));
}

function testJoin_1() {
  var a = new HostArray("a", "b", "c");
  assertEquals("a,b,c", a.join());
}

function testJoin_2() {
  var a = new HostArray("a", "b", "c");
  assertEquals("a,b,c", a.join(undefined));
}

function testPop_0() {
  var a = new HostArray("a", "b", "c");
  assertArrayEquals(["a", "b", "c"], a);
  assertEquals("c", a.pop());
  assertArrayEquals(["a", "b"], a);
}

function testPush_0() {
  var a = new HostArray("a", "b", "c");
  assertArrayEquals(["a", "b", "c"], a);
  assertEquals(4, a.push("d"));
  assertArrayEquals(["a", "b", "c", "d"], a);
}

function testPush_1() {
  var a = new HostArray("a", "b", "c");
  assertArrayEquals(["a", "b", "c"], a);
  assertEquals(3, a.push());
  assertArrayEquals(["a", "b", "c"], a);
}

function testReverse_0() {
  var a = new HostArray("a", "b", "c");
  assertThrows(TypeError(), function(){a.reverse()});
}

function testShift_0() {
  var a = new HostArray("a", "b", "c");
  assertEquals("a", a.shift());
}

function testSlice_0() {
  var a = new HostArray("a", "b", "c");
  assertArrayEquals(["a", "b", "c"], a.slice());
}

function testSlice_1() {
  var a = new HostArray("a", "b", "c");
  assertArrayEquals(["b", "c"], a.slice(1));
}

function testSlice_2() {
  var a = new HostArray("a", "b", "c");
  assertArrayEquals(["b"], a.slice(1, 2));
}

function testSlice_3() {
  var a = new HostArray("a", "b", "c");
  assertArrayEquals(["a", "b"], a.slice(undefined, 2));
}

function testSlice_4() {
  var a = new HostArray("a", "b", "c");
  assertArrayEquals(["b", "c"], a.slice(1, undefined));
}

//sort has implementation defined behaviour, not sure what we want
function testSort_0() {
  //pass condition is to not crash
  var a = new HostArray("a", "c", "b");
  a.sort();
  assertEquals(3, a.length);
}

function testSplice_0() {
  var a = new HostArray("a", "b", "c");
  assertArrayEquals([], a.splice());
}

function testSplice_1() {
  var a = new HostArray("a", "b", "c");
  assertArrayEquals(["b", "c"], a.splice(1));
}

function testSplice_2() {
  var a = new HostArray("a", "b", "c");
  assertArrayEquals(["b", "c"], a.splice(1, 2));
}

function testUnshift_0() {
  var a = new HostArray("a", "b", "c");
  assertEquals(3, a.unshift());
  assertArrayEquals(["a", "b", "c"], a);
}

function testUnshift_1() {
  var a = new HostArray("a", "b", "c");
  assertEquals(4, a.unshift("0"));
  assertArrayEquals(["0", "a", "b", "c"], a);
}

function testIndexOf_0() {
  var a = new HostArray("a", "b", "c", "b");
  assertEquals(1, a.indexOf("b"));
}

function testLastIndexOf_0() {
  var a = new HostArray("a", "b", "c", "b");
  assertEquals(3, a.lastIndexOf("b"));
}
