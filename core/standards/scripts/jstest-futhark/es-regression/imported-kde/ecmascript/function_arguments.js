// check value of arguments inside recursion

var expected = [null,99,1,2,3,3,2,1,99,null];
var expno = 0;

var x = 0;
shouldBe("mf.arguments",expected[expno++]);
function mf(a,b) {
  shouldBe("mf.arguments[0]",expected[expno++]);
  x++;
  if (x < 4)
    mf(x,1);
  shouldBe("mf.arguments[0]",expected[expno++]);
  return b;
}
mf(99);
shouldBe("mf.arguments",expected[expno++]);


// check internal properties of arguments

// Delete


// DontEnum
var foundArgs = false;

var ReadOnlyOK = false;
var DontDeleteOK = false;
var DontEnumOK = false;
function f(a,b,c) {

  // ReadOnly
  var newargs = new Object();
  var oldargs = f.arguments;
  f.arguments = newargs;
  ReadOnlyOK = (f.arguments == oldargs);

  // DontDelete
  DontDeleteOK = !delete(f.arguments);
  if (f.arguments != oldargs)
    DontDeleteOK = false;

  // DontEnum
  var foundArgs = false;
  for (i in f) {
    if (f == "arguments")
      foundArgs = true;
  }
  DontEnumOK = !foundArgs;
}
f(1,2,3);
shouldBe("ReadOnlyOK",true);
shouldBe("DontDeleteOK",true);
shouldBe("DontEnumOK",true);
