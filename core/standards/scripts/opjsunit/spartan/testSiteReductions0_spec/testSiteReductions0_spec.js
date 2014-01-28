function testMandelbrot_0() {
  /*
   * from http://nerget.com/mandelbrot.html
   */
  var limitSqr = 4;
  var size = 10;
  var output1 = [];
  var output2 = [];
  var scale = 2.0;
  for (var y = 0; y < size; ++y) {
    var ci = scale * (y / size - 0.5);
    for (var x = 0; x < size; ++x) {
      var zr = 0.0;
      var zi = 0.0;
      var zrSqr = 0.0;
      var ziSqr = 0.0;
      var cr = scale * (x / size - 0.5);

      for (var cnt = 0; cnt < 30; ++cnt) {
        var tr = zrSqr - ziSqr + cr;
        var ti = 2*zr*zi + ci;
	zr = tr;
        zi = ti;
        zrSqr = zr * zr;
        ziSqr = zi * zi;
	output1.push(tr);
	output2.push(ti);
        if ((zrSqr+ziSqr) > limitSqr) {
          break;
        }
      }
    }
  }
  var result1 = sum(output1);
  var result2 = sum(output2);

  function sum(a) {
  var rv = 0;
  for (var i=0; i<a.length;i++) {
    rv += a[i];
  }
  return rv;
  }

  assertEquals(-311.2055183690861, result1);
  assertEquals(-34.62616477247232, result2);
}

function testMandelbrot_1() {
  for (var y = 0; y < 50; ++y) {
    var cx = 0.5;
    var limit = 2.;
    var limitSqr = limit * limit;
    var zr = 0.0;
    var zi = 0.0;
    var zrSqr = 0.0;
    var ziSqr = 0.0;
    var cr = -1 - cx;

    for (var cnt = 0; cnt < 30; ++cnt) {
      var tr = zrSqr - ziSqr + cr;
      zi = 2*zr*zi - 0.6;
      zr = tr;
      zrSqr = zr * zr;
      ziSqr = zi * zi;
      if ((zrSqr+ziSqr) > limitSqr) {
	break;
      }
    }
  }
  assertEquals(16, Math.floor(cnt/31.*255));
}

function testMandelbrot_2() {
  var y, i, Ci, Zr, Zi, ZrN, ZiN, buf = 0;
  buf = new Array(200 * 200 * 4);
  for (y = 0; y < 200; y++) {
    Ci = y * 0.01 - 1;
    Zr = 0;
    Zi = 0;
    ZrN = 0;
    ZiN = 0;
    for (i = 20; i > 0 && ZiN + ZrN <= 4; --i) {
      Zi = 2 * Zr * Zi + Ci;
      Zr = ZrN - ZiN - 1.5;
      ZiN = Zi * Zi;
      ZrN = Zr * Zr;
    }
    if (i === 0) {
      buf[y * 200 * 4 + 3] = 255;
    }
  }
  assertEquals(255,
	       buf.reduce(function(prev, cur) {
			    return prev + (cur?cur:0);}, 0)
	      );
}

function testMandelbrot_3() {
  /* This is the same as testMandelbrot_1 but with an inner
   * function accessing a variable in the outer scope
   */
  for (var y = 0; y < 50; ++y) {
    var cx = 0.5;
    var limit = 2.;
    var limitSqr = limit * limit;
    var zr = 0.0;
    var zi = 0.0;
    var zrSqr = 0.0;
    var ziSqr = 0.0;
    var cr = -1 - cx;

    for (var cnt = 0; cnt < 30; ++cnt) {
      var tr = zrSqr - ziSqr + cr;
      zi = 2*zr*zi - 0.6;
      zr = tr;
      zrSqr = zr * zr;
      ziSqr = zi * zi;
      if ((zrSqr+ziSqr) > limitSqr) {
	break;
      }
    }
  }

  (function() {
     assertEquals(2, cnt);
   })();
}

function testMandelbrot_4() {
  /* This is the same as testMandelbrot_3 but with an inner
   * function *writing* a variable in the outer scope
   */
  for (var y = 0; y < 50; ++y) {
    var cx = 0.5;
    var limit = 2.;
    var limitSqr = limit * limit;
    var zr = 0.0;
    var zi = 0.0;
    var zrSqr = 0.0;
    var ziSqr = 0.0;
    var cr = -1 - cx;

    for (var cnt = 0; cnt < 30; ++cnt) {
      var tr = zrSqr - ziSqr + cr;
      zi = 2*zr*zi - 0.6;
      zr = tr;
      (function() {
	 zrSqr = zr * zr;
	 ziSqr = zi * zi;
       })();
      if ((zrSqr+ziSqr) > limitSqr) {
	break;
      }
    }
  }

  (function() {
     assertEquals(2, cnt);
   })();
}