function testGet_0() {
    var ta = new Uint8Array([42]);
    assertEquals(42, ta[0]);
}

function testGet_1() {
    var ta = new Int8Array([42]);
    assertEquals(42, ta[0]);
}

function testGet_2() {
    var ta = new Uint16Array([42]);
    assertEquals(42, ta[0]);
}

function testGet_3() {
    var ta = new Int16Array([42]);
    assertEquals(42, ta[0]);
}

function testGet_4() {
    var ta = new Uint32Array([42]);
    assertEquals(42, ta[0]);
}

function testGet_5() {
    var ta = new Int32Array([42]);
    assertEquals(42, ta[0]);
}

function testGet_6() {
    var ta = new Float32Array([42]);
    assertEquals(42, ta[0]);
}

function testGet_7() {
    var ta = new Float64Array([42]);
    assertEquals(42, ta[0]);
}

function testGet_8() {
    var ta = new Uint8Array([Math.PI]);
    assertEquals(3, ta[0]);
}

function testGet_9() {
    var ta = new Int8Array([Math.PI]);
    assertEquals(3, ta[0]);
}

function testGet_10() {
    var ta = new Uint16Array([Math.PI]);
    assertEquals(3, ta[0]);
}

function testGet_11() {
    var ta = new Int16Array([Math.PI]);
    assertEquals(3, ta[0]);
}

function testGet_12() {
    var ta = new Uint32Array([Math.PI]);
    assertEquals(3, ta[0]);
}

function testGet_13() {
    var ta = new Int32Array([Math.PI]);
    assertEquals(3, ta[0]);
}

function testGet_14() {
    var ta = new Float32Array([Math.PI]);
    assertEquals(3.1415927410125732, ta[0]);
}

function testGet_15() {
    var ta = new Float64Array([Math.PI]);
    assertEquals(Math.PI, ta[0]);
}

function testGet_16() {
    var ta = new Uint8Array([1337, 42]);
    assertEquals(42, ta[1]);
}

function testGet_17() {
    var ta = new Int8Array([1337, 42]);
    assertEquals(42, ta[1]);
}

function testGet_18() {
    var ta = new Uint16Array([1337, 42]);
    assertEquals(42, ta[1]);
}

function testGet_19() {
    var ta = new Int16Array([1337, 42]);
    assertEquals(42, ta[1]);
}

function testGet_20() {
    var ta = new Uint32Array([1337, 42]);
    assertEquals(42, ta[1]);
}

function testGet_21() {
    var ta = new Int32Array([1337, 42]);
    assertEquals(42, ta[1]);
}

function testGet_22() {
    var ta = new Float32Array([1337, 42]);
    assertEquals(42, ta[1]);
}

function testGet_23() {
    var ta = new Float64Array([1337, 42]);
    assertEquals(42, ta[1]);
}

function testGet_24() {
    var ta = new Uint8Array([1337, Math.PI]);
    assertEquals(3, ta[1]);
}

function testGet_25() {
    var ta = new Int8Array([1337, Math.PI]);
    assertEquals(3, ta[1]);
}

function testGet_26() {
    var ta = new Uint16Array([1337, Math.PI]);
    assertEquals(3, ta[1]);
}

function testGet_27() {
    var ta = new Int16Array([1337, Math.PI]);
    assertEquals(3, ta[1]);
}

function testGet_28() {
    var ta = new Uint32Array([1337, Math.PI]);
    assertEquals(3, ta[1]);
}

function testGet_29() {
    var ta = new Int32Array([1337, Math.PI]);
    assertEquals(3, ta[1]);
}

function testGet_30() {
    var ta = new Float32Array([1337, Math.PI]);
    assertEquals(3.1415927410125732, ta[1]);
}

function testGet_31() {
    var ta = new Float64Array([1337, Math.PI]);
    assertEquals(Math.PI, ta[1]);
}

function testGet_32() {
    var ta = new Uint8Array([(1 << 8) + 1]);
    assertEquals(1, ta[0]);
}

function testGet_33() {
    var ta = new Int8Array([(1 << 8) + 1]);
    assertEquals(1, ta[0]);
}

function testGet_34() {
    var ta = new Uint16Array([(1 << 16) + 1]);
    assertEquals(1, ta[0]);
}

function testGet_35() {
    var ta = new Int16Array([(1 << 16) + 1]);
    assertEquals(1, ta[0]);
}

function testGet_36() {
    var ta = new Uint32Array([1 << 31 + 1]);
    assertEquals(1 << 31 + 1, ta[0]);
}

function testGet_37() {
    var ta = new Int32Array([(1 << 31) - 1]);
    assertEquals(0x7fffffff, ta[0]);
}


function polyGetHelper(array_ctor, v, f) {   
    for (var i = 0; i < 100; ++i) {
	for (var j = 0; j < array_ctor.length; ++j) {
	    assertEquals(v, f(new array_ctor[j]([v])));
	}
    }
}

function testGetPoly_0() {
    polyGetHelper([Int8Array, Uint8Array],
	       42,
	       function (a) {
		   return a[0];
	       });
}

function testGetPoly_1() {
    polyGetHelper([Int8Array, Int16Array],
	       42,
	       function (a) {
		   return a[0];
	       });
}

function testGetPoly_2() {
    polyGetHelper([Int8Array, Uint16Array],
	       42,
	       function (a) {
		   return a[0];
	       });
}

function testGetPoly_3() {
    polyGetHelper([Int8Array, Int32Array],
	       42,
	       function (a) {
		   return a[0];
	       });
}

function testGetPoly_4() {
    polyGetHelper([Int8Array, Uint32Array],
	       42,
	       function (a) {
		   return a[0];
	       });
}

function testGetPoly_5() {
    polyGetHelper([Int8Array, Float32Array],
	       42,
	       function (a) {
		   return a[0];
	       });
}

function testGetPoly_6() {
    polyGetHelper([Int8Array, Float64Array],
	       42,
	       function (a) {
		   return a[0];
	       });
}

function testGetPoly_7() {
    polyGetHelper([Uint8Array, Int16Array],
	       42,
	       function (a) {
		   return a[0];
	       });
}

function testGetPoly_8() {
    polyGetHelper([Uint8Array, Uint16Array],
	       42,
	       function (a) {
		   return a[0];
	       });
}

function testGetPoly_9() {
    polyGetHelper([Uint8Array, Int32Array],
	       42,
	       function (a) {
		   return a[0];
	       });
}

function testGetPoly_10() {
    polyGetHelper([Uint8Array, Uint32Array],
	       42,
	       function (a) {
		   return a[0];
	       });
}

function testGetPoly_11() {
    polyGetHelper([Uint8Array, Float32Array],
	       42,
	       function (a) {
		   return a[0];
	       });
}

function testGetPoly_12() {
    polyGetHelper([Uint8Array, Float64Array],
	       42,
	       function (a) {
		   return a[0];
	       });
}

function testGetPoly_13() {
    polyGetHelper([Int16Array, Uint16Array],
	       42,
	       function (a) {
		   return a[0];
	       });
}

function testGetPoly_14() {
    polyGetHelper([Int16Array, Int32Array],
	       42,
	       function (a) {
		   return a[0];
	       });
}

function testGetPoly_15() {
    polyGetHelper([Int16Array, Uint32Array],
	       42,
	       function (a) {
		   return a[0];
	       });
}

function testGetPoly_16() {
    polyGetHelper([Int16Array, Float32Array],
	       42,
	       function (a) {
		   return a[0];
	       });
}

function testGetPoly_17() {
    polyGetHelper([Int16Array, Float64Array],
	       42,
	       function (a) {
		   return a[0];
	       });
}

function testGetPoly_18() {
    polyGetHelper([Uint16Array, Int32Array],
	       42,
	       function (a) {
		   return a[0];
	       });
}

function testGetPoly_19() {
    polyGetHelper([Uint16Array, Uint32Array],
	       42,
	       function (a) {
		   return a[0];
	       });
}

function testGetPoly_20() {
    polyGetHelper([Uint16Array, Float32Array],
	       42,
	       function (a) {
		   return a[0];
	       });
}

function testGetPoly_21() {
    polyGetHelper([Uint16Array, Float64Array],
	       42,
	       function (a) {
		   return a[0];
	       });
}

function testGetPoly_22() {
    polyGetHelper([Int32Array, Uint32Array],
	       42,
	       function (a) {
		   return a[0];
	       });
}

function testGetPoly_23() {
    polyGetHelper([Int32Array, Float32Array],
	       42,
	       function (a) {
		   return a[0];
	       });
}

function testGetPoly_24() {
    polyGetHelper([Int32Array, Float64Array],
	       42,
	       function (a) {
		   return a[0];
	       });
}

function testGetPoly_25() {
    polyGetHelper([Uint32Array, Float32Array],
	       42,
	       function (a) {
		   return a[0];
	       });
}

function testGetPoly_26() {
    polyGetHelper([Uint32Array, Float64Array],
	       42,
	       function (a) {
		   return a[0];
	       });
}

function testGetPoly_27() {
    polyGetHelper([Float32Array, Float64Array],
	       42,
	       function (a) {
		   return a[0];
	       });
}

function testPutKnownValue_0() {
    var ta = new Uint8Array(1);
    ta[0] = 42;
    assertEquals(42, ta[0]);    
}

function testPutKnownValue_1() {
    var ta = new Int8Array(1);
    ta[0] = 42;
    assertEquals(42, ta[0]);    
}

function testPutKnownValue_2() {
    var ta = new Uint16Array(1);
    ta[0] = 42;
    assertEquals(42, ta[0]);    
}

function testPutKnownValue_3() {
    var ta = new Int16Array(1);
    ta[0] = 42;
    assertEquals(42, ta[0]);    
}

function testPutKnownValue_4() {
    var ta = new Uint32Array(1);
    ta[0] = 42;
    assertEquals(42, ta[0]);    
}

function testPutKnownValue_5() {
    var ta = new Int32Array(1);
    ta[0] = 42;
    assertEquals(42, ta[0]);    
}

function testPutKnownValue_6() {
    var ta = new Float32Array(1);
    ta[0] = 42;
    assertEquals(42, ta[0]);    
}

function testPutKnownValue_7() {
    var ta = new Float64Array(1);
    ta[0] = 42;
    assertEquals(42, ta[0]);    
}

function testPutKnownValue_8() {
    var ta = new Uint8Array(1);
    ta[0] = 3.141592653589793;
    assertEquals(3, ta[0]);    
}

function testPutKnownValue_9() {
    var ta = new Int8Array(1);
    ta[0] = 3.141592653589793;
    assertEquals(3, ta[0]);    
}

function testPutKnownValue_10() {
    var ta = new Uint16Array(1);
    ta[0] = 3.141592653589793;
    assertEquals(3, ta[0]);    
}

function testPutKnownValue_11() {
    var ta = new Int16Array(1);
    ta[0] = 3.141592653589793;
    assertEquals(3, ta[0]);    
}

function testPutKnownValue_12() {
    var ta = new Uint32Array(1);
    ta[0] = 3.141592653589793;
    assertEquals(3, ta[0]);    
}

function testPutKnownValue_13() {
    var ta = new Int32Array(1);
    ta[0] = 3.141592653589793;
    assertEquals(3, ta[0]);    
}

function testPutKnownValue_14() {
    var ta = new Float32Array(1);
    ta[0] = 3.141592653589793;
    assertEquals(3.1415927410125732, ta[0]);    
}

function testPutKnownValue_15() {
    var ta = new Float64Array(1);
    ta[0] = 3.141592653589793;
    assertEquals(Math.PI, ta[0]);    
}

function testPutKnownValue_16() {
    var ta = new Uint8Array(2);
    ta[1] = 42;
    assertEquals(42, ta[1]);    
}

function testPutKnownValue_17() {
    var ta = new Int8Array(2);
    ta[1] = 42;
    assertEquals(42, ta[1]);    
}

function testPutKnownValue_18() {
    var ta = new Uint16Array(2);
    ta[1] = 42;
    assertEquals(42, ta[1]);    
}

function testPutKnownValue_19() {
    var ta = new Int16Array(2);
    ta[1] = 42;
    assertEquals(42, ta[1]);    
}

function testPutKnownValue_20() {
    var ta = new Uint32Array(2);
    ta[1] = 42;
    assertEquals(42, ta[1]);    
}

function testPutKnownValue_21() {
    var ta = new Int32Array(2);
    ta[1] = 42;
    assertEquals(42, ta[1]);    
}

function testPutKnownValue_22() {
    var ta = new Float32Array(2);
    ta[1] = 42;
    assertEquals(42, ta[1]);    
}

function testPutKnownValue_23() {
    var ta = new Float64Array(2);
    ta[1] = 42;
    assertEquals(42, ta[1]);    
}

function testPutKnownValue_24() {
    var ta = new Uint8Array(2);
    ta[1] = 3.141592653589793;
    assertEquals(3, ta[1]);    
}

function testPutKnownValue_25() {
    var ta = new Int8Array(2);
    ta[1] = 3.141592653589793;
    assertEquals(3, ta[1]);    
}

function testPutKnownValue_26() {
    var ta = new Uint16Array(2);
    ta[1] = 3.141592653589793;
    assertEquals(3, ta[1]);    
}

function testPutKnownValue_27() {
    var ta = new Int16Array(2);
    ta[1] = 3.141592653589793;
    assertEquals(3, ta[1]);    
}

function testPutKnownValue_28() {
    var ta = new Uint32Array(2);
    ta[1] = 3.141592653589793;
    assertEquals(3, ta[1]);    
}

function testPutKnownValue_29() {
    var ta = new Int32Array(2);
    ta[1] = 3.141592653589793;
    assertEquals(3, ta[1]);    
}

function testPutKnownValue_30() {
    var ta = new Float32Array(2);
    ta[1] = 3.141592653589793;
    assertEquals(3.1415927410125732, ta[1]);    
}

function testPutKnownValue_31() {
    var ta = new Float64Array(2);
    ta[1] = 3.141592653589793;
    assertEquals(Math.PI, ta[1]);    
}

function testPutKnownValue_32() {
    var ta = new Uint8Array(1);
    ta[0] = 0x10001;
    assertEquals(1, ta[0]);
}

function testPutKnownValue_33() {
    var ta = new Int8Array(1);
    ta[0] = 0x101;
    assertEquals(1, ta[0]);
}

function testPutKnownValue_34() {
    var ta = new Uint16Array(1);
    ta[0] = 0x10001;
    assertEquals(1, ta[0]);
}

function testPutKnownValue_35() {
    var ta = new Int16Array(1);
    ta[0] = 0x10001;
    assertEquals(1, ta[0]);
}

function testPutKnownValue_36() {
    var ta = new Uint32Array(1);
    ta[0] = 0x100000001;
    assertEquals(1, ta[0]);
}

function testPutKnownValue_37() {
    var ta = new Int32Array(1);
    ta[0] = 0x100000001;
    assertEquals(1, ta[0]);
}

function testPutKnownValue_38() {
    var ta = new Int32Array(1);
    ta[0] = 0xffffffff;
    assertEquals(-1, ta[0]);
}

function testPutUnknownValue_0() {
    var ta = new Uint8Array(1);
    var o = { v : 42 };
    ta[0] = o.v;
    assertEquals(42, ta[0]);    
}

function testPutUnknownValue_1() {
    var ta = new Int8Array(1);
    var o = { v : 42 };
    ta[0] = o.v;
    assertEquals(42, ta[0]);    
}

function testPutUnknownValue_2() {
    var ta = new Uint16Array(1);
    var o = { v : 42 };
    ta[0] = o.v;
    assertEquals(42, ta[0]);    
}

function testPutUnknownValue_3() {
    var ta = new Int16Array(1);
    var o = { v : 42 };
    ta[0] = o.v;
    assertEquals(42, ta[0]);    
}

function testPutUnknownValue_4() {
    var ta = new Uint32Array(1);
    var o = { v : 42 };
    ta[0] = o.v;
    assertEquals(42, ta[0]);    
}

function testPutUnknownValue_5() {
    var ta = new Int32Array(1);
    var o = { v : 42 };
    ta[0] = o.v;
    assertEquals(42, ta[0]);    
}

function testPutUnknownValue_6() {
    var ta = new Float32Array(1);
    var o = { v : 42 };
    ta[0] = o.v;
    assertEquals(42, ta[0]);    
}

function testPutUnknownValue_7() {
    var ta = new Float64Array(1);
    var o = { v : 42 };
    ta[0] = o.v;
    assertEquals(42, ta[0]);    
}

function testPutUnknownValue_8() {
    var ta = new Uint8Array(1);
    ta[0] = Math.PI;
    assertEquals(3, ta[0]);    
}

function testPutUnknownValue_9() {
    var ta = new Int8Array(1);
    ta[0] = Math.PI;
    assertEquals(3, ta[0]);    
}

function testPutUnknownValue_10() {
    var ta = new Uint16Array(1);
    ta[0] = Math.PI;
    assertEquals(3, ta[0]);    
}

function testPutUnknownValue_11() {
    var ta = new Int16Array(1);
    ta[0] = Math.PI;
    assertEquals(3, ta[0]);    
}

function testPutUnknownValue_12() {
    var ta = new Uint32Array(1);
    ta[0] = Math.PI;
    assertEquals(3, ta[0]);    
}

function testPutUnknownValue_13() {
    var ta = new Int32Array(1);
    ta[0] = Math.PI;
    assertEquals(3, ta[0]);    
}

function testPutUnknownValue_14() {
    var ta = new Float32Array(1);
    ta[0] = Math.PI;
    assertEquals(3.1415927410125732, ta[0]);    
}

function testPutUnknownValue_15() {
    var ta = new Float64Array(1);
    ta[0] = Math.PI;
    assertEquals(Math.PI, ta[0]);    
}

function testPutUnknownValue_16() {
    var ta = new Uint8Array(2);
    var o = { v : 42 };
    ta[1] = o.v;
    assertEquals(42, ta[1]);    
}

function testPutUnknownValue_17() {
    var ta = new Int8Array(2);
    var o = { v : 42 };
    ta[1] = o.v;
    assertEquals(42, ta[1]);    
}

function testPutUnknownValue_18() {
    var ta = new Uint16Array(2);
    var o = { v : 42 };
    ta[1] = o.v;
    assertEquals(42, ta[1]);    
}

function testPutUnknownValue_19() {
    var ta = new Int16Array(2);
    var o = { v : 42 };
    ta[1] = o.v;
    assertEquals(42, ta[1]);    
}

function testPutUnknownValue_20() {
    var ta = new Uint32Array(2);
    var o = { v : 42 };
    ta[1] = o.v;
    assertEquals(42, ta[1]);    
}

function testPutUnknownValue_21() {
    var ta = new Int32Array(2);
    var o = { v : 42 };
    ta[1] = o.v;
    assertEquals(42, ta[1]);    
}

function testPutUnknownValue_22() {
    var ta = new Float32Array(2);
    var o = { v : 42 };
    ta[1] = o.v;
    assertEquals(42, ta[1]);    
}

function testPutUnknownValue_23() {
    var ta = new Float64Array(2);
    var o = { v : 42 };
    ta[1] = o.v;
    assertEquals(42, ta[1]);    
}

function testPutUnknownValue_24() {
    var ta = new Uint8Array(2);
    ta[1] = Math.PI;
    assertEquals(3, ta[1]);    
}

function testPutUnknownValue_25() {
    var ta = new Int8Array(2);
    ta[1] = Math.PI;
    assertEquals(3, ta[1]);    
}

function testPutUnknownValue_26() {
    var ta = new Uint16Array(2);
    ta[1] = Math.PI;
    assertEquals(3, ta[1]);    
}

function testPutUnknownValue_27() {
    var ta = new Int16Array(2);
    ta[1] = Math.PI;
    assertEquals(3, ta[1]);    
}

function testPutUnknownValue_28() {
    var ta = new Uint32Array(2);
    ta[1] = Math.PI;
    assertEquals(3, ta[1]);    
}

function testPutUnknownValue_29() {
    var ta = new Int32Array(2);
    ta[1] = Math.PI;
    assertEquals(3, ta[1]);    
}

function testPutUnknownValue_30() {
    var ta = new Float32Array(2);
    ta[1] = Math.PI;
    assertEquals(3.1415927410125732, ta[1]);    
}

function testPutUnknownValue_31() {
    var ta = new Float64Array(2);
    ta[1] = Math.PI;
    assertEquals(Math.PI, ta[1]);    
}

function testPutUnknownValue_32() {
    var ta = new Uint8Array(1);
    var o = { v : 0x101 };
    ta[0] = o.v;
    assertEquals(1, ta[0]);
}

function testPutUnknownValue_33() {
    var ta = new Int8Array(1);
    var o = { v : 0x101 };
    ta[0] = (1 << 8) + 1;
    assertEquals(1, ta[0]);
}

function testPutUnknownValue_34() {
    var ta = new Uint16Array(1);
    var o = { v : 0x10001 };
    ta[0] = o.v;
    assertEquals(1, ta[0]);
}

function testPutUnknownValue_35() {
    var ta = new Int16Array(1);
    var o = { v : 0x10001 };
    ta[0] = o.v;
    assertEquals(1, ta[0]);
}

function testPutUnknownValue_36() {
    var ta = new Uint32Array(1);
    var o = { v : 0x100000001 };
    ta[0] = o.v;
    assertEquals(1 << 31 + 1, ta[0]);
}

function testPutUnknownValue_37() {
    var ta = new Int32Array(1);
    var o = { v : 0x100000001 };
    ta[0] = o.v;
    assertEquals(1, ta[0]);
}

function testPutUnknownValue_38() {
    var ta = new Int32Array(1);
    var o = { v : 0xffffffff };
    ta[0] = o.v;
    assertEquals(-1, ta[0]);
}

function polyPutHelper(array_ctor, v, expected, f) {   
    for (var i = 0; i < 100; ++i) {
	for (var j = 0; j < array_ctor.length; ++j) {
	    assertEquals(expected, f(new array_ctor[j](1), v));
	}
    }
}

function testPutPoly_0() {
    polyPutHelper([Int8Array, Uint8Array],
	       42, 42,
	       function (a, v) {
		   a[0] = v;
		   return a[0];
	       });
}

function testPutPoly_1() {
    polyPutHelper([Int8Array, Int16Array],
	       42, 42,	
	       function (a, v) {
		   a[0] = v;
		   return a[0];
	       });
}

function testPutPoly_2() {
    polyPutHelper([Int8Array, Uint16Array],
	       42, 42,
	       function (a, v) {
		   a[0] = v;
		   return a[0];
	       });
}

function testPutPoly_3() {
    polyPutHelper([Int8Array, Int32Array],
	       42, 42,
	       function (a, v) {
		   a[0] = v;
		   return a[0];
	       });
}

function testPutPoly_4() {
    polyPutHelper([Int8Array, Uint32Array],
	       42, 42,
               function (a, v) {
		   a[0] = v;
		   return a[0];
	       });
}

function testPutPoly_5() {
    polyPutHelper([Int8Array, Float32Array],
	       42, 42,
	       function (a, v) {
		   a[0] = v;
		   return a[0];
	       });
}

function testPutPoly_6() {
    polyPutHelper([Int8Array, Float64Array],
	       42, 42,
	       function (a, v) {
		   a[0] = v;
		   return a[0];
	       });
}

function testPutPoly_7() {
    polyPutHelper([Uint8Array, Int16Array],
	       42, 42,
	       function (a, v) {
		   a[0] = v;
		   return a[0];
	       });
}

function testPutPoly_8() {
    polyPutHelper([Uint8Array, Uint16Array],
	       42, 42,
	       function (a, v) {
		   a[0] = v;
		   return a[0];
	       });
}

function testPutPoly_9() {
    polyPutHelper([Uint8Array, Int32Array],
	       42, 42, 
	       function (a, v) {
		   a[0] = v;
		   return a[0];
	       });
}

function testPutPoly_10() {
    polyPutHelper([Uint8Array, Uint32Array],
	       42, 42,
	       function (a, v) {
		   a[0] = v;
		   return a[0];
	       });
}

function testPutPoly_11() {
    polyPutHelper([Uint8Array, Float32Array],
	       42, 42,
	       function (a, v) {
		   a[0] = v;
		   return a[0];
	       });
}

function testPutPoly_12() {
    polyPutHelper([Uint8Array, Float64Array],
	       42, 42,
	       function (a, v) {
		   a[0] = v;
		   return a[0];
	       });
}

function testPutPoly_13() {
    polyPutHelper([Int16Array, Uint16Array],
	       42, 42,
	       function (a, v) {
		   a[0] = v;
		   return a[0];
	       });
}

function testPutPoly_14() {
    polyPutHelper([Int16Array, Int32Array],
	       42, 42,
	       function (a, v) {
		   a[0] = v;
		   return a[0];
	       });
}

function testPutPoly_15() {
    polyPutHelper([Int16Array, Uint32Array],
	       42, 42,
	       function (a, v) {
		   a[0] = v;
		   return a[0];
	       });
}

function testPutPoly_16() {
    polyPutHelper([Int16Array, Float32Array],
	       42, 42,
	       function (a, v) {
		   a[0] = v;
		   return a[0];
	       });
}

function testPutPoly_17() {
    polyPutHelper([Int16Array, Float64Array],
	       42, 42,
	       function (a, v) {
		   a[0] = v;
		   return a[0];
	       });
}

function testPutPoly_18() {
    polyPutHelper([Uint16Array, Int32Array],
	       42, 42,
	       function (a, v) {
		   a[0] = v;
		   return a[0];
	       });
}

function testPutPoly_19() {
    polyPutHelper([Uint16Array, Uint32Array],
	       42, 42,
	       function (a, v) {
		   a[0] = v;
		   return a[0];
	       });
}

function testPutPoly_20() {
    polyPutHelper([Uint16Array, Float32Array],
	       42, 42,
	       function (a, v) {
		   a[0] = v;
		   return a[0];
	       });
}

function testPutPoly_21() {
    polyPutHelper([Uint16Array, Float64Array],
	       42, 42,
	       function (a, v) {
		   a[0] = v;
		   return a[0];
	       });
}

function testPutPoly_22() {
    polyPutHelper([Int32Array, Uint32Array],
	       42, 42,
	       function (a, v) {
		   a[0] = v;
		   return a[0];
	       });
}

function testPutPoly_23() {
    polyPutHelper([Int32Array, Float32Array],
	       42, 42,
	       function (a, v) {
		   a[0] = v;
		   return a[0];
	       });
}

function testPutPoly_24() {
    polyPutHelper([Int32Array, Float64Array],
	       42, 42,
	       function (a, v) {
		   a[0] = v;
		   return a[0];
	       });
}

function testPutPoly_25() {
    polyPutHelper([Uint32Array, Float32Array],
	       42, 42,
	       function (a, v) {
		   a[0] = v;
		   return a[0];
	       });
}

function testPutPoly_26() {
    polyPutHelper([Uint32Array, Float64Array],
	       42, 42,
	       function (a, v) {
		   a[0] = v;
		   return a[0];
	       });
}

function testPutPoly_27() {
    polyPutHelper([Float32Array, Float64Array],
	       42, 42,
	       function (a, v) {	   
		   a[0] = v;
		   return a[0];
	       });
}

function testPutPoly_28() {
    polyPutHelper([Uint8Array, Int8Array, Uint16Array, Int16Array, Uint32Array, Int32Array],
	       "foo", 0,
	       function (a, v) {	   
		   a[0] = v;
		   return a[0];
	       });
}

function testPutPoly_29() {
    polyPutHelper([Uint8Array, Int8Array, Uint16Array, Int16Array, Uint32Array, Int32Array],
	       NaN, 0,
	       function (a, v) {	   
		   a[0] = v;
		   return a[0];
	       });
}

function testPutPoly_30() {
    polyPutHelper([Float32Array, Float64Array],
	       "foo", NaN,
	       function (a, v) {	   
		   a[0] = v;
		   return a[0];
	       });
}

function testPutPoly_31() {
    polyPutHelper([Float32Array, Float64Array],
	       NaN, NaN,
	       function (a, v) {	   
		   a[0] = v;
		   return a[0];
	       });
}

