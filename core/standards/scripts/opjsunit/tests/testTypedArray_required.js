function testJITSameSizeInteger_0() {
    function f() {
        var count = 1000000;
	var a = new Int8Array(1);
	for (var i = 0; i < count; ++i)
            a[0] = 1;
    }

    function g() {
	var count = 1000000;
	var a = new Uint8Array(1);
	for (var i = 0; i < count; ++i)
            a[0] = 1;
    }

    var d0 = new Date();
    f();
    var diff0 = (new Date()) - d0;

    var d1 = new Date();
    g();
    var diff1 = (new Date()) - d1;

    var large = Math.max(diff0, diff1);
    var small = Math.min(diff0, diff1);

    assertFalse((Math.abs(large - small) / large) > 0.9);
}

function testJITSameSizeInteger_1() {
    function f() {
        var count = 1000000;
	var a = new Int16Array(1);
	for (var i = 0; i < count; ++i)
            a[0] = 1;
    }

    function g() {
	var count = 1000000;
	var a = new Uint16Array(1);
	for (var i = 0; i < count; ++i)
            a[0] = 1;
    }

    var d0 = new Date();
    f();
    var diff0 = (new Date()) - d0;

    var d1 = new Date();
    g();
    var diff1 = (new Date()) - d1;

    var large = Math.max(diff0, diff1);
    var small = Math.min(diff0, diff1);

    assertFalse((Math.abs(large - small) / large) > 0.9);
}

function testJITSameSizeInteger_2() {
    function f() {
        var count = 1000000;
	var a = new Int32Array(1);
	for (var i = 0; i < count; ++i)
            a[0] = 1;
    }

    function g() {
	var count = 1000000;
	var a = new Uint32Array(1);
	for (var i = 0; i < count; ++i)
            a[0] = 1;
    }

    var d0 = new Date();
    f();
    var diff0 = (new Date()) - d0;

    var d1 = new Date();
    g();
    var diff1 = (new Date()) - d1;

    var large = Math.max(diff0, diff1);
    var small = Math.min(diff0, diff1);

    assertFalse((Math.abs(large - small) / large) > 0.9);
}

function testSubarray_0() {
    function testArray(type) {
	var array = new type([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
	var subarray1 = array.subarray(3, 5);
	var subarray2 = subarray1.subarray(-2, 10);

	assertEquals(2, subarray2.length);
	assertEquals(3, subarray2[0]);
	assertEquals(4, subarray2[1]);
    }

    testArray(Int8Array);
    testArray(Uint8Array);
    testArray(Int16Array);
    testArray(Uint16Array);
    testArray(Int32Array);
    testArray(Uint32Array);
    testArray(Float32Array);
    testArray(Float64Array);
}
testSubarray_0.metadata = {
  bug:"CORE-44941"
};

function testMixedPut_0() {
    function update(arr) {
	for (var i=0; i<arr.length; i++)
	    arr[i] = i + 1;
    }

    function test() {
	var sz = 24;
	var b = new ArrayBuffer(sz);
	var a = new Int16Array(b);
	update(a, sz/2);
	var a = new Int8Array(b);
	update(a, sz/1);
	var a = new Uint8Array(b);
	update(a, sz/1);
	for (var i = 0; i < a.length; i++)
	  assertEquals(i + 1, a[i]);
    }
    test();
}
testMixedPut_0.metadata = {
  bug:"CORE-45114"
};

function testMixedPut_1() {
    function update(arr) {
	for (var i=0; i<arr.length; i++)
	    arr[i] = 300 + i + 1;
    }

    function test() {
	var sz = 80;
	var a = new Uint8Array(sz);
	update(a);
	var b = new Uint8ClampedArray(sz);
	update(b);
	for (var i = 0; i < a.length; i++)
	  assertEquals((300 + i + 1) % 256, a[i]);
	for (var i = 0; i < b.length; i++)
	  assertEquals(255, b[i]);
    }
    test();
}
testMixedPut_1.metadata = {
  bug:"CORE-45159"
};

function testMixedPut_2() {
    function update(arr) {
	for (var i=0; i<arr.length; i++)
	    arr[i] = 300 + i + 1;
    }

    function test() {
	var sz = 80;
	var b = new Uint8ClampedArray(sz);
	update(b);
	var a = new Uint8Array(sz);
	update(a);
	for (var i = 0; i < a.length; i++)
	  assertEquals((300 + i + 1) % 256, a[i]);
	for (var i = 0; i < b.length; i++)
	  assertEquals(255, b[i]);
    }
    test();
}
testMixedPut_2.metadata = {
  bug:"CORE-45159"
};

function testSlice_0() {
  function test(subBuf, starts, size) {
    byteLength = size;
    subBuffer = eval(subBuf);
    var subArray = new Int8Array(subBuffer);
    assertEquals(subBuffer.byteLength, byteLength);
    for (var i = 0; i < size; ++i)
      assertEquals(starts + i, subArray[i]);
  }

  var buffer = new ArrayBuffer(32);
  var array = new Int8Array(buffer);
  for (var i = 0; i < 32; ++i)
      array[i] = i;

  test("buffer.slice(0)", 0, 32);
  test("buffer.slice(16)", 16, 16);
  test("buffer.slice(24)", 24, 8);
  test("buffer.slice(32)", 32, 0);
  test("buffer.slice(40)", 32, 0);
  test("buffer.slice(80)", 32, 0);

  test("buffer.slice(-8)", 24, 8);
  test("buffer.slice(-16)", 16, 16);
  test("buffer.slice(-24)", 8, 24);
  test("buffer.slice(-32)", 0, 32);
  test("buffer.slice(-40)", 0, 32);
  test("buffer.slice(-80)", 0, 32);

  test("buffer.slice(0, 32)", 0, 32);
  test("buffer.slice(0, 16)", 0, 16);
  test("buffer.slice(8, 24)", 8, 16);
  test("buffer.slice(16, 32)", 16, 16);
  test("buffer.slice(24, 16)", 24, 0);

  test("buffer.slice(16, -8)", 16, 8);
  test("buffer.slice(-20, 30)", 12, 18);

  test("buffer.slice(-8, -20)", 24, 0);
  test("buffer.slice(-20, -8)", 12, 12);
  test("buffer.slice(-40, 16)", 0, 16);
  test("buffer.slice(-40, 40)", 0, 32);
}
testSlice_0.metadata = {
  bug:"CORE-45517"
};

function testSet_0() {
    a = new Float64Array(8);
    a[0] = 2;
    a[1] = 43;

    b = new Uint8Array(a.buffer, 0, 8);
    var exp = 5.447603722011605e-270;
    for (var i = 0; i < b.length; i++)
       b[i] = i + 1;

    assertEquals(exp, a[0]);

    a.set(b);
    assertEquals(1, a[0]);
    assertEquals(2, a[1]);
}
testSet_0.metadata = {
  bug:"CORE-45650"
};

function testSet_1() {
    a = new Uint16Array(8);
    a[0] = 2;
    a[1] = -43;

    b = new Int16Array(a.buffer, 0, 8);
    for (var i = 0; i < b.length; i++)
       b[i] = -(i+1);

    assertEquals(65535, a[0]);

    a.set(b, 0);

    assertEquals(65535, a[0]);
    assertEquals(65534, a[1]);
}
testSet_1.metadata = {
  bug:"CORE-45650"
};

function testSet_2() {
    a = new Uint16Array(8);

    b = new Uint8Array(a.buffer, 0, 2);
    b[0] = 0x05;
    b[1] = 0x05;

    assertEquals(0x0505, a[0]);

    a.set(b);

    assertEquals(5, a[0]);
    assertEquals(5, a[1]);
}
testSet_2.metadata = {
  bug:"CORE-45650"
};

function testSet_3() {
    /* Exercise the setting of an array with a view
       that's offset into the target. */
    var arr = new ArrayBuffer(32);
    var a1 = new Uint16Array(arr, 8);
    assertEquals(12, a1.length);
    for (var i = 0; i < a1.length; i++)
       a1[i] = (i+1);

    assertEquals(3, a1[2]);
    assertEquals(9, a1[8]);

    var a2 = new Uint16Array(arr);
    assertEquals(16, a2.length);
    for (var i = 0; i < a2.length; i++)
       a2[i] = (i+100);

    assertEquals(100, a2[0]);
    assertEquals(102, a2[2]);
    assertEquals(104, a1[0]);
    assertEquals(105, a1[1]);
    assertEquals(106, a1[2]);

    a2.set(a1);
    assertEquals(104, a2[0]);
    assertEquals(105, a2[1]);
    assertEquals(106, a2[2]);
    assertEquals(110, a1[2]);
}
testSet_3.metadata = {
  bug:"CORE-45650"
};

function testSet_4() {
    /* This time the source is before the target. */
    var arr = new ArrayBuffer(32);
    var a1 = new Uint16Array(arr, 0, 4);
    assertEquals(4, a1.length);
    for (var i = 0; i < a1.length; i++)
       a1[i] = (i+1);

    assertEquals(3, a1[2]);
    assertEquals(4, a1[3]);

    var a2 = new Uint16Array(arr, 4);
    assertEquals(14, a2.length);
    for (var i = 0; i < a2.length; i++)
       a2[i] = (i+100);

    assertEquals(100, a2[0]);
    assertEquals(102, a2[2]);
    assertEquals(1, a1[0]);
    assertEquals(2, a1[1]);
    assertEquals(100, a1[2]);
    assertEquals(101, a1[3]);

    a2.set(a1);
    assertEquals(1, a2[0]);
    assertEquals(2, a2[1]);
    assertEquals(100, a2[2]);
    assertEquals(1, a1[2]);
    assertEquals(2, a1[3]);
}
testSet_4.metadata = {
  bug:"CORE-45650"
};

function testSet_5() {
    var arr = new ArrayBuffer(32);
    for (var i = 0; i < arr.length; i++)
       arr[i] = i;

    /* Create singleton arrays & then use them in set() */
    var tas = [];
    for (var i = 0; i < arr.length; i++)
       tas.push(new Uint8Array(arr, i, 1));

    assertEquals(4, tas[4][0]);
    assertEquals(10, tas[10][0]);
    tas[10].set(tas[8]);
    assertEquals(8, tas[10][0]);
    tas[10].set(tas[9]);
    assertEquals(9, tas[10][0]);
    tas[10].set(tas[10]);
    assertEquals(9, tas[10][0]);
    assertEquals(4, tas[4][0]);

    var u = new Uint32Array(arr);
    assertEquals(0x03020100, u[0]);
    u.set(tas[1]);
    assertEquals(0x1, u[0]);

    var u1 = new Uint32Array(arr, 8, 1);
    assertEquals(0x0b090908, u1[0]);

    u1[0] += 1;
    tas[4].set(u1);
    assertEquals(0x09, tas[4][0]);
}
testSet_5.metadata = {
  bug:"CORE-45650"
};

function testJoin_0() {
  var a = new ArrayBuffer(3);
  for (var i = 0; i < a.length; i++)
     a[i] = i;
  assertEquals("0|1|2", Array.prototype.join.call(a, "|"));
}

function testJoin_1() {
  var a = new Int16Array(3);
  for (var i = 0; i < a.length; i++)
     a[i] = -i;
  assertEquals("0|-1|-2", Array.prototype.join.call(a, "|"));
}

function testJoin_2() {
  var a = new ArrayBuffer(3);
  for (var i = 0; i < a.length; i++)
     a[i] = i;
  assertEquals("0,1,2", Array.prototype.join.call(a));
}

function testJoin_3() {
  var a = new Float64Array(3);
  for (var i = 0; i < a.length; i++)
     a[i] = (i + 1) / 2;

  assertEquals("0.5,1,1.5", Array.prototype.join.call(a, undefined));
}

function testPop_0() {
  var a1 = new ArrayBuffer(3);
  assertThrows(TypeError(), function() {Array.prototype.pop.call(a1);});
  var a2 = new Uint8Array(5);
  assertThrows(TypeError(), function() {Array.prototype.pop.call(a2);});
}

function testPush_0() {
  var a1 = new ArrayBuffer(3);
  assertThrows(TypeError(), function() {Array.prototype.push.call(a1, 3);});
  var a2 = new Uint32Array(3);
  assertThrows(TypeError(), function() {Array.prototype.push.call(a2, 3);});
}

function testPush_1() {
  var a1 = new ArrayBuffer(3);
  assertThrows(TypeError(), function() {Array.prototype.push.call(a1);});
  var a2 = new Uint32Array(3);
  assertThrows(TypeError(), function() {Array.prototype.push.call(a2);});
}

function testReverse_0() {
  var a = new ArrayBuffer(3);
  for (var i = 0; i < a.length; i++)
     a[i] = i;
  assertArrayEquals([2, 1, 0], Array.prototype.reverse.call(a));
}

function testReverse_0() {
  var a = new Float32Array(3);
  for (var i = 0; i < a.length; i++)
     a[i] = i;
  assertArrayEquals([2, 1, 0], Array.prototype.reverse.call(a));
}

function testShift_0() {
  var a1 = new ArrayBuffer(3);
  assertThrows(TypeError(), function(){Array.prototype.shift.call(a1);});
  var a2 = new Uint8ClampedArray(3);
  assertThrows(TypeError(), function(){Array.prototype.shift.call(a2);});
}

function testSlice_0() {
  var a = new ArrayBuffer(3);
  for (var i = 0; i < a.length; i++)
     a[i] = i;
  assertArrayEquals([0, 1, 2], Array.prototype.slice.call(a));
}

function testSlice_1() {
  var a = new Int8Array(3);
  for (var i = 0; i < a.length; i++)
     a[i] = i;
  assertArrayEquals([0, 1, 2], Array.prototype.slice.call(a));
}

function testSlice_2() {
  var a = new ArrayBuffer(3);
  for (var i = 0; i < a.length; i++)
     a[i] = i;
  assertArrayEquals([1, 2], Array.prototype.slice.call(a, 1));
}

function testSlice_3() {
  var a = new Uint8Array(3);
  for (var i = 0; i < a.length; i++)
     a[i] = i;
  assertArrayEquals([1, 2], Array.prototype.slice.call(a, 1));
}

function testSlice_4() {
  var a = new Int8Array(3);
  for (var i = 0; i < a.length; i++)
     a[i] = i;
  assertArrayEquals([0, 1], Array.prototype.slice.call(a, undefined, 2));
}


function testSlice_5() {
  var a = new Int16Array(3);
  for (var i = 0; i < a.length; i++)
     a[i] = i;
  assertArrayEquals([1, 2], Array.prototype.slice.call(a, 1, undefined));
}

function testSort_0() {
  //pass condition is to not crash
  var a = new Int16Array(3);
  for (var i = 0; i < a.length; i++)
     a[i] = i;
  a[0] = 3;
  Array.prototype.sort.call(a);
  assertArrayEquals([1,2,3], a);
}

function testUnshift_0() {
  //This should throw when setting the length
  var a = new Int8Array(3);
  for (var i = 0; i < a.length; i++)
     a[i] = i;
  assertThrows(TypeError(), function() { Array.prototype.unshift.call(a, 1);});
}

function testUnshift_1() {
  //This should throw when setting the length (but it should work first)
  var a = new Int32Array(3);
  for (var i = 0; i < a.length; i++)
     a[i] = i;
  assertThrows(TypeError(), function() {Array.prototype.unshift.call(a, 4, 3);});
  assertObjectEquals({0:4,1:3,2:2,length:3}, a);
}

function testIndexOf_0() {
  var a = new Uint32Array(3);
  for (var i = 0; i < a.length; i++)
     a[i] = i;
  a[3] = 1;
  assertEquals(1, Array.prototype.indexOf.call(a, 1));
}

function testIndexOf_1() {
  var a = new Uint8Array(4);
  for (var i = 0; i < a.length; i++)
     a[i] = i;
  assertEquals(-1, Array.prototype.indexOf.call(a, 5));
}

function testLastIndexOf_0() {
  var a = new Uint8Array(4);
  for (var i = 0; i < a.length; i++)
     a[i] = i;
  a[2] = 1;
  assertEquals(2, Array.prototype.lastIndexOf.call(a, 1));
}

function testLastIndexOf_1() {
  var a = new Float64Array(4);
  for (var i = 0; i < a.length; i++)
     a[i] = i;

  assertEquals(-1, Array.prototype.lastIndexOf.call(a, 5));
}

function testDataView_0() {
  assertThrows(TypeError, function () { var x = new DataView({}, 2, 3); });
}
testDataView_0.metadata = {
  bug:"CORE-47088"
};
