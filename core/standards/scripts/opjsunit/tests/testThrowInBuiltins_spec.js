
function testExceptionPropogationMap_0() {
  var a = [1,2,3];
  var b = "initial";
  var thrown = false;
  try {
    b = a.map( function() {throw "Exception"} );
    assertUnreached();
  } catch(e) {
    assertEquals("Exception", e);
    thrown = true;
  }
  assertTrue(thrown);
  assertEquals("initial", b);
}

function testExceptionPropogationMap_1() {
  var a = [1,2,3];
  var b = "initial";
  var thrown = false;
  try {
    b = a.map( function() {throw "Exception"} , {});
    assertUnreached();
  } catch(e) {
    assertEquals("Exception", e);
    thrown = true;
  }
  assertTrue(thrown);
  assertEquals("initial", b);
}

function testExceptionPropogationForeach_0() {
  var a = [1,2,3];
  var b = "initial";
  var thrown = false;
  try {
    b = a.forEach( function() {throw "Exception"} );
    assertUnreached();
  } catch(e) {
    assertEquals("Exception", e);
    thrown = true;
  }
  assertTrue(thrown);
  assertEquals("initial", b);
}

function testExceptionPropogationForeach_1() {
  var a = [1,2,3];
  var b = "initial";
  var thrown = false;
  try {
    b = a.forEach( function() {throw "Exception"} , {});
    assertUnreached();
  } catch(e) {
    assertEquals("Exception", e);
    thrown = true;
  }
  assertTrue(thrown);
  assertEquals("initial", b);
}

function testExceptionPropogationReplace_0() {
  var a = "aaa";
  var b = "initial";
  var thrown = false;
  try {
    b = a.replace(/a/,  function() {throw "Exception"} );
    assertUnreached();
  } catch(e) {
    assertEquals("Exception", e);
    thrown = true;
  }
  assertTrue(thrown);
  assertEquals("initial", b);
}

function testExceptionPropogationEvery_0() {
  var a = [1,2,3];
  var b = "initial";
  var thrown = false;
  try {
    b = a.every( function() {throw "Exception"} );
    assertUnreached();
  } catch(e) {
    assertEquals("Exception", e);
    thrown = true;
  }
  assertTrue(thrown);
  assertEquals("initial", b);
}

function testExceptionPropogationEvery_1() {
  var a = [1,2,3];
  var b = "initial";
  var thrown = false;
  try {
    b = a.every( function() {throw "Exception"} , {});
    assertUnreached();
  } catch(e) {
    assertEquals("Exception", e);
    thrown = true;
  }
  assertTrue(thrown);
  assertEquals("initial", b);
}

function testExceptionPropogationReduceright_0() {
  var a = [1,2,3];
  var b = "initial";
  var thrown = false;
  try {
    b = a.reduceRight( function() {throw "Exception"} );
    assertUnreached();
  } catch(e) {
    assertEquals("Exception", e);
    thrown = true;
  }
  assertTrue(thrown);
  assertEquals("initial", b);
}

function testExceptionPropogationReduceright_1() {
  var a = [1,2,3];
  var b = "initial";
  var thrown = false;
  try {
    b = a.reduceRight( function() {throw "Exception"} , {});
    assertUnreached();
  } catch(e) {
    assertEquals("Exception", e);
    thrown = true;
  }
  assertTrue(thrown);
  assertEquals("initial", b);
}

function testExceptionPropogationReduce_0() {
  var a = [1,2,3];
  var b = "initial";
  var thrown = false;
  try {
    b = a.reduce( function() {throw "Exception"} );
    assertUnreached();
  } catch(e) {
    assertEquals("Exception", e);
    thrown = true;
  }
  assertTrue(thrown);
  assertEquals("initial", b);
}

function testExceptionPropogationReduce_1() {
  var a = [1,2,3];
  var b = "initial";
  var thrown = false;
  try {
    b = a.reduce( function() {throw "Exception"} , {});
    assertUnreached();
  } catch(e) {
    assertEquals("Exception", e);
    thrown = true;
  }
  assertTrue(thrown);
  assertEquals("initial", b);
}

function testExceptionPropogationFilter_0() {
  var a = [1,2,3];
  var b = "initial";
  var thrown = false;
  try {
    b = a.filter( function() {throw "Exception"} );
    assertUnreached();
  } catch(e) {
    assertEquals("Exception", e);
    thrown = true;
  }
  assertTrue(thrown);
  assertEquals("initial", b);
}

function testExceptionPropogationFilter_1() {
  var a = [1,2,3];
  var b = "initial";
  var thrown = false;
  try {
    b = a.filter( function() {throw "Exception"} , {});
    assertUnreached();
  } catch(e) {
    assertEquals("Exception", e);
    thrown = true;
  }
  assertTrue(thrown);
  assertEquals("initial", b);
}

function testExceptionPropogationSome_0() {
  var a = [1,2,3];
  var b = "initial";
  var thrown = false;
  try {
    b = a.some( function() {throw "Exception"} );
    assertUnreached();
  } catch(e) {
    assertEquals("Exception", e);
    thrown = true;
  }
  assertTrue(thrown);
  assertEquals("initial", b);
}

function testExceptionPropogationSome_1() {
  var a = [1,2,3];
  var b = "initial";
  var thrown = false;
  try {
    b = a.some( function() {throw "Exception"} , {});
    assertUnreached();
  } catch(e) {
    assertEquals("Exception", e);
    thrown = true;
  }
  assertTrue(thrown);
  assertEquals("initial", b);
}
