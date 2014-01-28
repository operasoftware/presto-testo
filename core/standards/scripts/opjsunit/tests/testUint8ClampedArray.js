function testUint8ClampedArray_0()
{
    var a = new Uint8ClampedArray(200);
    for (var i = 0; i < 200; i++)
	a[i] = 255 + i;

    for (var i = 0; i < 200; i++)
	assertEquals(a[i], 255);
}

function testUint8ClampedArray_1()
{
    var a = new Uint8ClampedArray(200);
    for (var i = 0; i < 200; i++)
	a[i] = i - 255;

    for (var i = 0; i < 200; i++)
	assertEquals(a[i], 0);
}

function testUint8ClampedArray_2()
{
    var a = new Uint8Array(200);
    var a1 = new Uint8ClampedArray(a);
    for (var i = 0; i < 200; i++)
	a[i] = 256 + i;

    for (var i = 0; i < 200; i++)
    {
	assertEquals(a1[i], i);
	assertEquals(a[i], i);
    }
}

function testUint8ClampedArray_3()
{
    var a = new Uint8Array(200);
    var a1 = new Uint8ClampedArray(a);
    for (var i = 0; i < 200; i++)
	a1[i] = 255 + i;

    for (var i = 0; i < 200; i++)
    {
	assertEquals(a1[i], 255);
	assertEquals(a[i], 255);
    }
}

function testUint8ClampedArray_4()
{
    var a = new Uint8ClampedArray([300, 400, 500, 600]);
    for (var i = 0; i < a.length; i++)
	assertEquals(a[i], 255);
}

function testUint8ClampedArray_5()
{
    var a = new Uint8ClampedArray(200);
    for (var i = 0; i < a.length; i++)
	a[i] = -1;

    for (var i = 0; i < a.length; i++)
	assertEquals(a[i], 0);

    for (var i = 0; i < a.length; i++)
	a[i] = 1;

    for (var i = 0; i < a.length; i++)
	assertEquals(a[i], 1);

    for (var i = 0; i < a.length; i++)
	a[i] = 256;

    for (var i = 0; i < a.length; i++)
	assertEquals(a[i], 255);
}

function testUint8ClampedArray_6()
{
    var a = new Uint8ClampedArray([2 + Math.pow(2,32), NaN, 1/0, -1/0]);
    var exp = [255, 0, 255, 0];
    for (var i = 0; i < a.length; i++)
	assertEquals(a[i], exp[i]);
}
testUint8ClampedArray_6.metadata = {
  bug: "CT-2315"
};

function testUint8ClampedArray_7()
{
    var a = new Uint8ClampedArray(200);
    for (var i = 0; i < 200; i++)
	a[i] = i + 0.6;

    for (var i = 0; i < a.length; i++)
	assertEquals(i + 1, a[i]);

    a = new Uint8Array(200);
    for (var i = 0; i < 200; i++)
	a[i] = i + 0.6;

    for (var i = 0; i < a.length; i++)
	assertEquals(i, a[i]);
}
testUint8ClampedArray_7.metadata = {
  bug: "CORE-45529"
};

function testUint8ClampedArray_8()
{
    function test(a, d)
    {
	for (var i = 0; i < a.length; i++)
	    assertEquals(i + d, a[i]);
    }

    var a = new Uint8ClampedArray(200);
    for (var i = 0; i < 200; i++)
	a[i] = i + 0.6;
    test(a, 1);

    a = new Uint32Array(200);
    for (var i = 0; i < 200; i++)
	a[i] = i + 0.6;
    test(a, 0);
}
testUint8ClampedArray_8.metadata = {
  bug: "CORE-45529"
};

function testUint8ClampedArray_9()
{
    function f(x)
    {
	var arr = new Uint8ClampedArray(1);
	arr[0] = x;
	return arr[0];
    }
    for (var i = 0; i < 60; i++)
	assertEquals(255, f(267.5));
}
testUint8ClampedArray_9.metadata = {
  bug: "CORE-46238"
};
function testUint8ClampedArray_10()
{
    function f(x)
    {
	var arr = new Uint8ClampedArray(1);
	arr[0] = x;
	return arr[0];
    }
    for (var i = 0; i < 60; i++)
	assertEquals(26, f(26.5));
}
testUint8ClampedArray_10.metadata = {
  bug: "CORE-46238"
};

function testUint8ClampedArray_11()
{
    function f() {
	var u8c = new Uint8ClampedArray(1);
	u8c[0] = 345.67;
	return u8c[0];
    }
    assertEquals(255, f());
}
testUint8ClampedArray_11.metadata = {
  bug: "CORE-46587"
};
