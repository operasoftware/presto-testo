function testStackDontEnum_0() {
  try {
    throw new Error();
  } catch(e) {
    assertDontEnum(e, "stack");
  }
}

function testStackDontEnum_1() {
  try {
    throw new Error("foobar");
  } catch(e) {
    assertDontEnum(e, "stack");
  }
}

function testStacktraceDontEnum_0() {
  try {
    throw new Error();
  } catch(e) {
    assertDontEnum(e, "stacktrace");
  }
}

function testStacktraceDontEnum_1() {
  try {
    throw new Error("foobar");
  } catch(e) {
    assertDontEnum(e, "stacktrace");
  }
}
function testStackIsString_0() {
  try {
    throw new Error();
  } catch(e) {
    assertEquals("string", typeof e.stack);
  }
}

function testStackIsString_1() {
  try {
    throw new Error("foobar");
  } catch(e) {
    assertEquals("string", typeof e.stack);
  }
}

function testStacktraceIsString_0() {
  try {
    throw new Error();
  } catch(e) {
    assertEquals("string", typeof e.stacktrace);
  }
}

function testStacktraceIsString_1() {
  try {
    throw new Error("foobar");
  } catch(e) {
    assertEquals("string", typeof e.stacktrace);
  }
}

function testDebugRecordInfo_1()
{
   var x = {};
   var y = {};
   var passed = false;

   try {
       x.a[y.b];
   } catch (e) {
       passed = String(e).indexOf('x.a') >= 0;
   }
   assertTrue(passed);
}

testDebugRecordInfo_1.metadata = {
  bug:"CORE-31885"
};
