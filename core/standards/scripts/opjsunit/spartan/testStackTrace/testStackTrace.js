function testStackTrace_0()
{
  function fail() {}

  function AAA(x)
  {
    fail();
    throw Error('XXX');
    fail();
  }

  function BBB(x)
  {
    fail();
    AAA(1);
    fail();
  }

  function CCC(x)
  {
    fail();
    BBB(1);
    fail();
  }

  var res = [];

  try
  {
    fail();
    CCC(1);
    fail();
  }
  catch (e)
  {
    res.push(e.stacktrace.indexOf("AAA(x)"));
    res.push(e.stacktrace.indexOf("throw Error('XXX')"));
    res.push(e.stacktrace.indexOf("BBB(x)"));
    res.push(e.stacktrace.indexOf("AAA(1)"));
    res.push(e.stacktrace.indexOf("CCC(x)"));
    res.push(e.stacktrace.indexOf("BBB(1)"));
    res.push(e.stacktrace.indexOf("testStackTrace_0()"));
    res.push(e.stacktrace.indexOf("CCC(1)"));
  }

  res.reduce(function (p, c) { assertTrue(c != -1); assertTrue(p < c); return c; }, -1);
}

function testStackTrace_1()
{
  function fail() {}
  function read() {}

  function AAA(x)
  {
    fail();
    throw Error('XXX');
    fail();
  }

  var obj = {};

  obj.__defineGetter__("prop", AAA);

  function BBB(x)
  {
    fail();
    read(obj.prop);
    fail();
  }

  function CCC(x)
  {
    fail();
    BBB(1);
    fail();
  }

  var res = [];

  try
  {
    fail();
    CCC(1);
    fail();
  }
  catch (e)
  {
    res.push(e.stacktrace.indexOf("AAA(x)"));
    res.push(e.stacktrace.indexOf("throw Error('XXX')"));
    res.push(e.stacktrace.indexOf("BBB(x)"));
    res.push(e.stacktrace.indexOf("read(obj.prop)"));
    res.push(e.stacktrace.indexOf("CCC(x)"));
    res.push(e.stacktrace.indexOf("BBB(1)"));
    res.push(e.stacktrace.indexOf("testStackTrace_1()"));
    res.push(e.stacktrace.indexOf("CCC(1)"));
  }

  res.reduce(function (p, c) { assertTrue(c != -1); assertTrue(p < c); return c; }, -1);
}

function testStackTrace_2()
{
  function fail() {}
  function write() {}

  function AAA(x)
  {
    fail();
    throw Error('XXX');
    fail();
  }

  var obj = {};

  obj.__defineSetter__("prop", AAA);

  function BBB(x)
  {
    fail();
    write(obj.prop=x);
    fail();
  }

  function CCC(x)
  {
    fail();
    BBB(1);
    fail();
  }

  var res = [];

  try
  {
    fail();
    CCC(1);
    fail();
  }
  catch (e)
  {
    res.push(e.stacktrace.indexOf("AAA(x)"));
    res.push(e.stacktrace.indexOf("throw Error('XXX')"));
    res.push(e.stacktrace.indexOf("BBB(x)"));
    res.push(e.stacktrace.indexOf("write(obj.prop=x)"));
    res.push(e.stacktrace.indexOf("CCC(x)"));
    res.push(e.stacktrace.indexOf("BBB(1)"));
    res.push(e.stacktrace.indexOf("testStackTrace_2()"));
    res.push(e.stacktrace.indexOf("CCC(1)"));
  }

  res.reduce(function (p, c) { assertTrue(c != -1); assertTrue(p < c); return c; }, -1);
}

function testStackTrace_3()
{
  function fail() {}
  function convert() {}

  function AAA(x)
  {
    fail();
    throw Error('XXX');
    fail();
  }

  var obj = {};

  obj.toString = AAA;

  function BBB(x)
  {
    fail();
    convert(''+obj);
    fail();
  }

  function CCC(x)
  {
    fail();
    BBB(1);
    fail();
  }

  var res = [];

  try
  {
    fail();
    CCC(1);
    fail();
  }
  catch (e)
  {
    res.push(e.stacktrace.indexOf("AAA(x)"));
    res.push(e.stacktrace.indexOf("throw Error('XXX')"));
    res.push(e.stacktrace.indexOf("BBB(x)"));
    res.push(e.stacktrace.indexOf("convert(''+obj)"));
    res.push(e.stacktrace.indexOf("CCC(x)"));
    res.push(e.stacktrace.indexOf("BBB(1)"));
    res.push(e.stacktrace.indexOf("testStackTrace_3()"));
    res.push(e.stacktrace.indexOf("CCC(1)"));
  }

  res.reduce(function (p, c) { assertTrue(c != -1); assertTrue(p < c); return c; }, -1);
}

function testStackTrace_4()
{
  function fail() {}
  function convert() {}

  function AAA(x)
  {
    fail();
    throw Error('XXX');
    fail();
  }

  function BBB(x)
  {
    fail();
    new AAA(1);
    fail();
  }

  function CCC(x)
  {
    fail();
    BBB(1);
    fail();
  }

  var res = [];

  try
  {
    fail();
    CCC(1);
    fail();
  }
  catch (e)
  {
    res.push(e.stacktrace.indexOf("AAA(x)"));
    res.push(e.stacktrace.indexOf("throw Error('XXX')"));
    res.push(e.stacktrace.indexOf("BBB(x)"));
    res.push(e.stacktrace.indexOf("new AAA(1)"));
    res.push(e.stacktrace.indexOf("CCC(x)"));
    res.push(e.stacktrace.indexOf("BBB(1)"));
    res.push(e.stacktrace.indexOf("testStackTrace_4()"));
    res.push(e.stacktrace.indexOf("CCC(1)"));
  }

  res.reduce(function (p, c) { assertTrue(c != -1); assertTrue(p < c); return c; }, -1);
}

function testStackTrace_5()
{
  function fail() {}
  function convert() {}

  function AAA(x)
  {
    fail();
    throw Error('XXX');
    fail();
  }

  function BBB(x)
  {
    fail();
    AAA(1);
    fail();
  }

  function CCC(x)
  {
    fail();
    new BBB(1);
    fail();
  }

  var res = [];

  try
  {
    fail();
    CCC(1);
    fail();
  }
  catch (e)
  {
    res.push(e.stacktrace.indexOf("AAA(x)"));
    res.push(e.stacktrace.indexOf("throw Error('XXX')"));
    res.push(e.stacktrace.indexOf("BBB(x)"));
    res.push(e.stacktrace.indexOf("AAA(1)"));
    res.push(e.stacktrace.indexOf("CCC(x)"));
    res.push(e.stacktrace.indexOf("new BBB(1)"));
    res.push(e.stacktrace.indexOf("testStackTrace_5()"));
    res.push(e.stacktrace.indexOf("CCC(1)"));
  }

  res.reduce(function (p, c) { assertTrue(c != -1); assertTrue(p < c); return c; }, -1);
}

function testStackTrace_6() {
  function enhanceError() {
    var error = Error();
    error.stack;
    return error;
  };

  function throwException() {
    throw enhanceError();
  }
  
  try {
    throwException();
  } catch(e) {
    assertTrue(e.stack.indexOf("throwException") > -1);
  }
}
testStackTrace_6.metadata = {
  bug:"CARAKAN-1300"
};

function testStackTrace_7() {
  function enhanceError() {
    var error = Error();
    error.stacktrace;
    return error;
  };

  function throwException() {
    throw enhanceError();
  }
  
  try {
    throwException();
  } catch(e) {
    assertTrue(e.stacktrace.indexOf("throwException") > -1);
  }
}
testStackTrace_7.metadata = {
  bug:"CARAKAN-1300"
};

function testStackTrace_8() {
  function enhanceError() {
    var error = Error();
    error.stacktrace;
    return error;
  };

  function throwException() {
    throw enhanceError();
  }
  
  try {
    throwException();
  } catch(e) {
    assertTrue(e.stack.indexOf("throwException") > -1);
  }
}
testStackTrace_8.metadata = {
  bug:"CARAKAN-1300"
};

function testStackTrace_9() {
  function enhanceError() {
    var error = Error();
    error.stack;
    return error;
  };

  function throwException() {
    throw enhanceError();
  }
  
  try {
    throwException();
  } catch(e) {
    assertTrue(e.stacktrace.indexOf("throwException") > -1);
  }
}
testStackTrace_9.metadata = {
  bug:"CARAKAN-1300"
};

function testStackTrace_10() {
  var error = Error();
  assertTrue(error.stack);
}
testStackTrace_10.metadata = {
  bug:"CARAKAN-1301"
};

function testStackTrace_11() {
  var error = Error();
  assertTrue(error.stacktrace);
}
testStackTrace_11.metadata = {
  bug:"CARAKAN-1301"
};

function testStackTrace_12() {
  var throwException = function() {
    throw Error();
  };
  
  try {
    throwException();
  } catch(e) {
    assertTrue(e.stack !== e.stacktrace);
  }
}
testStackTrace_12.metadata = {
  bug:"CARAKAN-1299"
};

function testStackTrace_13() {
  var throwException = function() {
    throw Error();
  };
  
  try {
    throwException();
  } catch(e) {
    assertTrue(e.stacktrace !== e.stack);
  }
}
testStackTrace_13.metadata = {
  bug:"CARAKAN-1299"
};

function testStackTrace_14() {
  var e = Error();
  assertReadWrite(e, "stack");
}
testStackTrace_14.metadata = {
  bug:"CARAKAN-1302"
};

function testStackTrace_15() {
  var e = Error();
  assertReadWrite(e, "stacktrace");
}
testStackTrace_15.metadata = {
  bug:"CARAKAN-1302"
};

function testStackTrace_16() {
  var throwException = function() {
    throw Error();
  };
  
  try {
    throwException();
  } catch(e) {
    assertReadWrite(e, "stack");
  }
}
testStackTrace_16.metadata = {
  bug:"CARAKAN-1302"
};

function testStackTrace_17() {
  var throwException = function() {
    throw Error();
  };
  
  try {
    throwException();
  } catch(e) {
    assertReadWrite(e, "stacktrace");
  }
}
testStackTrace_17.metadata = {
  bug:"CARAKAN-1302"
};

function testStackTrace_18() {
    function f()
    {
	for(var p in {x:1})
	{
	    var x = 2;
	    if ('herald' in null)
		x = 3;
	}
}
  try {
    f();
  } catch(e) {
    assertTrue(e.stacktrace.indexOf('herald') >= 0);
  }
}
testStackTrace_18.metadata = {
  bug:"CORE-37583"
};
