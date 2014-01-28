/* This is a separate file to keep the iteration count down a bit. */
var d0 = new Date();
var c = new Uint8Array(1);
for (var i = 0; i < 1000000; ++i) {
  c[0] = i;
}

var diff0 = (new Date()) - d0;

var diff1 = 1;

function f() {
    var d1 = new Date();
    for (var i = 0; i < 1000000; ++i) {
	c[0] = i;
    }
    return (new Date()) - d1;
}

for (var i = 0; i < 100; ++i) {
    diff1 = f();
}


function testCore44501_0() {
    var large = Math.max(diff0, diff1);
    var small = Math.min(diff0, diff1);
    assertTrue(large / small < 10);
}

testCore44501_0.metadata = {
  bug: "CORE-44501"
}
