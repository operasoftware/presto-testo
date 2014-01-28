function testDo_0() {
  var i=0;
  do {i++;} while (i<10);
  assertEquals(10, i);
}

function testDo_1() {
  var i=0,j=0;
  do {i++; continue; j++;} while(i<10)
  assertEquals(j,0);
}

function testDo_2() {
  var i=0,j=0;
  do {i++; break; j++;} while(i<10)
  assertEquals(1,i);
  assertEquals(j,0);
}

function testDo_3() {
  var a = {};
  var i = 0;
  do  {
    i++;
    if (i == 10) {
      break;
    }
  } while (a)
  assertEquals(10, i);
}

function testDo_4() {
  var i = 0;
  do {
    i++;
    if (i == 10) {
      break;
    }
  } while (null)
  assertEquals(1, i);
}

function testDo_5() {
  var i = 0;
  var a = undefined;
  do {
    i++;
    if (i == 10) {
      break;
    }
  } while (a)
  assertEquals(1, i);
}

function testDo_6() {
  var i = 0;
  var a = undefined;
  do {
    i++;
    if (i == 10) {
      break;
    }
  } while (0)
  assertEquals(1, i);
}

function testDo_6() {
  var i = 0;
  var a = undefined;
  do {
    i++;
    if (i == 10) {
      break;
    }
  }  while (-0)
  assertEquals(1, i);
}

function testDo_7() {
  var i = 0;
  do {
    i++;
    if (i == 10) {
      break;
    }
  } while (NaN)
  assertEquals(1, i);
}

function testDo_8() {
  var i = 0;
  do {
    i++;
    if (i == 10) {
      break;
    }
  } while (Number.POSITIVE_INFINITY)
  assertEquals(10, i);
}

function testDo_9() {
  var i = 0;
  do {
    i++;
    if (i == 10) {
      break;
    }
  } while ("")
  assertEquals(1, i);
}

function testDo_10() {
  var i = 0;
  do {
    i++;
    if (i == 10) {
      break;
    }
  } while ("Hello World")
  assertEquals(10, i);
}

function testDo_11() {
  var i = 0;
  var j = 0;
  var z = 0;
  do{
    i++;
    do {
      j++;
      z++;
    } while (z<5);
    z = 0;
  } while(i<10);
  assertEquals(10,i);
  assertEquals(50,j);
}

function testDo_12() {
  var i = 0;
  var j = 0;
  var z = 0;
  label1:
  do{
    i++;
    label2:
    do {
      j++;
      continue label1;
      z++;
    } while (z<5);
    z = 0;
  } while(i<10);
  assertEquals(10,i);
  assertEquals(10,j);
}

function testDo_13() {
  var i = 0;
  var j = 0;
  var z = 0;
  label1:
  do{
    i++;
    label2:
    do {
      j++;
      break label1;
      z++;
    } while (z<5);
    z = 0;
  } while(i<10);
  assertEquals(1,i);
  assertEquals(1,j);
}

function testDo_14() {
  var i = 0;
  var j = 0;
  var z = 0;
  label1:
  do{
    i++;
    label2:
    do {
      j++;
      break label2;
      z++;
    } while (z<5);
    z = 0;
  } while(i<10);
  assertEquals(10,i);
  assertEquals(10,j);
}

function testDo_15() {
  var i=0;
  try {
    do {
      do {
	throw "Exception";
      } while (true)
    } while (true)
  } catch(e) {
    i = 1;
  }
  assertEquals(1,i);
}

function testDo_16()
{
  try
  {
    eval("do{void(10);}while(false)\nvoid(20);");
  }
  catch (e)
  {
    assertUnreached();
  }
}

function testDo_17()
{
  try
  {
    eval("do{void(10);}while(false);void(20);");
  }
  catch (e)
  {
    assertUnreached();
  }
}

function testDo_18()
{
  try
  {
    eval("do{void(10);}while(false)void(20);");
  }
  catch (e)
  {
    assertUnreached();
  }
}

function testDo_19()
{
  try
  {
    eval("if(true)do{void(10);}while(false);else void(20);");
  }
  catch (e)
  {
    assertUnreached();
  }
}

function testDo_20()
{
  try
  {
    eval("if(true)do{void(10);}while(false)\n;else void(20);");
  }
  catch (e)
  {
    assertUnreached();
  }
}

function testDo_21()
{
    var t = 2;
    var o = 1;
    var A;
    var B;
    var i = 0;
    do {
	A = o;
	B = t * 0.5;
	o = B;
    }
    while(A > 0 && ++i < 33);
    assertEquals(1,A);
}
testDo_21.metadata = {
   bug: "CORE-35688"
};

function testDo_22()
{
    function testcase()
    {
	var bogus = 1, // removing this variable passes the test
	    v1,
	    v2,
	    v3 = 0.9,
	    v4 = 0;
	do
	{
	    v4++;
	    v1 = 1 / Math.ceil(1 - (v3 * v3) + 0);
	    v2 = 1 / Math.ceil(1 - (v1 * v1) + 0);
	    v2 = 1 / Math.ceil(1 - (v1 * v1) + 0); // removing this line passes the test
            v3 = v2;
	} while (v4 < 2);
	return 1 - (v3 * v3) + 0;
    }
    for (var i = 0; i < 40; i++)
	assertEquals(0, testcase());
}
testDo_22.metadata = {
   bug: "CORE-35688"
};
