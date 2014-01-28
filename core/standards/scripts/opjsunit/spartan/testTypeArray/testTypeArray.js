function testTypeArray_0()
{
    function f(a,x)
    {
	return a[x];
    }
    var x = new Float32Array([0, 1]);
    // pass if no crash.
    for (var i = 0 ; i < 100; i++)
	assertEquals(i % 2, f(x,i % 2));
}
testTypeArray_0.metadata = {
  bug:"CORE-41605"
};

function testTypeArray_1()
{
    var x = new Uint8Array(255);
    function f(i) { x[i] = 240; }
    for (var i = 0; i < 255; i++)
	f(i);
    for (var i = 0; i < 255; i++)
	assertEquals(240, x[i]);
}
testTypeArray_1.metadata = {
    bug:"CORE-42012"
};

function testTypeArray_2()
{
    var x = new Uint8Array(255);
    // Not too interesting, catches out an assert
    // when using an 127 immediate.
    function f(i) { x[i] = 127; }
    for (var i = 0; i < 255; i++)
	f(i);
    for (var i = 0; i < 255; i++)
	assertEquals(127, x[i]);
}
testTypeArray_2.metadata = {
    bug:"CORE-43088"
};

function testTypeArray_3()
{
    var ab = new ArrayBuffer(8); // Create an 8 byte array
    var fb = new Float32Array(ab, 4); // View the array as floats from 4 bytes in
    fb[0] = 0.5; // Set first float
    var fb2 = new Float32Array(ab);
    assertEquals(0.5, fb2[1]);
}
testTypeArray_3.metadata = {
    bug:"CORE-43173"
};

function testTypeArray_4()
{
    function Matrix4x3()
    {
	this.d = new Float32Array(16);
    }

    Matrix4x3.prototype =
    {
	make : function(x1) { this.d[0] = x1; return this;},
	multiply : function() { this.make(this.d[0]*2); return this;}
    };

    var modelMatrix = new Matrix4x3();

    for (var i = 0; i < 164; i++)
	modelMatrix.multiply();
    assertEquals(modelMatrix.d[0], 0);
}
testTypeArray_4.metadata = {
    bug:"CORE-43648"
};

function testTypeArray_5()
{
    var i8 = new Int8Array(20);
    for (var i = 0; i < i8.length; i++)
	i8[i] = i;

    var u8 = new Uint8Array(i8);
    assertEquals(u8.length, i8.length);
    for (var i = 0; i < u8.length; i++)
	assertEquals(i8[i], u8[i]);

    var f32 = new Float32Array(40);
    for (var i = 0; i < f32.length; i++)
	f32[i] = i + 0.24;

    var u32 = new Uint32Array(f32);
    assertEquals(u32.length, f32.length);
    for (var i = 0; i < u32.length; i++)
	assertEquals(Math.round(f32[i]), u32[i]);

}
testTypeArray_5.metadata = {
    bug:"CORE-43886"
};

function testArrayBuffer_1() {
    function f() {
	var a = new ArrayBuffer(127);
	for (var i = 0; i < a.length; i++)
            a[i] = i;
	for (var i = 0; i < a.length; i++)
            assertEquals(a[i], i);
    }
    f();
}
testArrayBuffer_1.metadata = {
    bug:"CORE-41492"
};
