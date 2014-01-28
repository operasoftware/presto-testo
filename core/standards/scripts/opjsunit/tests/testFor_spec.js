function testFor_0() {
  var j=0;
  for (var i=0; i<4; i++) {
    j++;
  }
  assertEquals(i, 4);
  assertEquals(j, 4);
}

function testFor_1() {
  var i=0;
  var j=0;
  var k=0;
  for (++i; j<3; ++k) {
    j++;
  }
  assertEquals(1,i);
  assertEquals(3,j);
  assertEquals(3,k);
}

function testFor_2() {
  var i=0;
  var j=0;
  var k=0;
  for (++i; ++j; ++k) {
    if (j == 3) {
      break;
    }
  }
  assertEquals(1,i);
  assertEquals(3,j);
  assertEquals(2,k);
}

function testFor_3() {
  var j=0;
  for(;;) {
    if (j==1) {
      break;
    }
    j++;
  }
  assertEquals(1,j);
}

function testFor_4() {
  var i=0;
  var j=0;
  for(i++;;) {
    if (j==3) {
      break;
    }
    j++;
  }
  assertEquals(1,i);
  assertEquals(3,j);
}

function testFor_5() {
  var i=0;
  var j=0;
  for(i++;;i++) {
    j++;
    if (j==3) {
      break;
    }
  }
  assertEquals(3,i);
  assertEquals(3,j);
}

function testFor_6() {
  function func() {
    for(var i=0; i<ijk; i++) {}
  }
  assertThrows(ReferenceError(), func);
}

function testFor_7() {
  label1:
  for(var i=0; i<5; i++) {
    break label1;
  }
  assertEquals(0, i);
}

function testFor_8() {
  label1:
  for(var i=0; i<5; i++) {
    break label1;
  }
  assertEquals(0, i);
}

function testFor_9() {
  label1:
  for(var i=0; i<5; i++) {
    label2:
    for (var j=0; j<5; j++) {
      break label1;
    }
  }
  assertEquals(0, i);
  assertEquals(0, j);
}

function testFor_10() {
  label1:
  for(var i=0; i<5; i++) {
    label2:
    for (var j=0; j<5; j++) {
      break label2;
    }
  }
  assertEquals(5, i);
  assertEquals(0, j);
}

function testFor_11() {
  label1:
  for(var i=0; i<5; i++) {
    label2:
    for (var j=0; j<5; j++) {
      break label2;
    }
  }
  assertEquals(5, i);
  assertEquals(0, j);
}

function testFor_12() {
  label1:
  for(var i=0; i<5; i++) {
    label2:
    for (var j=0; j<5; j++) {
      continue label1;
    }
  }
  assertEquals(5, i);
  assertEquals(0, j);
}

function testFor_13() {
  label1:
  for(var i=0; i<5; i++) {
    continue label1;
    label2:
    for (var j=0; j<5; j++) {
      continue label1;
    }
  }
  assertEquals(5, i);
  assertUndefined(j);
}

function testFor_14() {
  function func() {
    eval("a:\nb:\nfor(var i=0;i<10;i++){continue a}");
  }
  assertDoesNotThrow(func);
}
testFor_15.metadata = {
  bug:"CARAKAN-1101"
};

function testFor_15() {
  function func() {
    for (var i = 0; i < 10; ++i)
      function f() {
        return true;
      }

    return f();
  }
  assertEquals(true, func());
}
testFor_15.metadata = {
  bug:"CARAKAN-874"
};

function testFor_16() {
  function func() {
    function f() { return true; }

    for (var i = 0; i < 10; ++i);
    return f();
  }

  assertEquals(true, func());
}
testFor_16.metadata = {
  bug:"CARAKAN-874"
};

function testFor_17() {
    var y = 0;

    function test() {
        for (var i = 0; i <= 1; i++)
        {
        	y++;
        	if (2 < 1)
        	{
        		void(0);
        	}
        }
    }
    test();

    assertEquals(y, 2);
}
testFor_17.metadata = {
  bug:"CARAKAN-1100"
};

function testFor_18()
{
  var x = 10, y = 0;

  for (var i = 0; i < 3; ++i)
  {
    x < 15;

    if (x > 15)
      ++y;
  }

  assertEquals(0, y);
}
testFor_18.metadata = {
  bug:"CARAKAN-1100"
};

function testFor_19()
{
    new Function("var y = false, x = 10; if (x < 5) assertTrue(false); for (var i = 0; i < 10; ++i);");
}
testFor_19.metadata = {
    bug:"CARAKAN-1100"
};

function testFor_20()
{
    eval("for(var i = 0; i < 50; i++) {Math.random();}");
}
testFor_19.metadata = {
    bug:"CARAKAN-1103"
};

function testFor_21()
{
    var i;
    for(i=20; ~i; i--);
    assertEquals(-1, i);
}
testFor_21.metadata = {
    bug:"CORE-33965"
};

function testFor_22()
{
    var i;
    for(i=20; ~(i*1); i--);
    assertEquals(-1, i);
}
testFor_22.metadata = {
    bug:"CORE-33965"
};

function testFor_23()
{
    var i;
    for(i=20; ~(i+0); i--);
    assertEquals(-1, i);
}
testFor_23.metadata = {
    bug:"CORE-33965"
};

function testFor_24()
{
    var i, ar=[];
    for(i = 20; ~--i;) ar.push(i);
    assertArrayEquals([19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0], ar);
    assertEquals(-1, i);
}
testFor_24.metadata = {
    bug:"CORE-33965"
};

function testFor_25()
{
    var v = 0.1;
    for (var j = 0; j < 20; j++)
    {
	var sum = 0.0;
	var i = 4;
	var v1 = v;
	do {
	    var v2 = 1;
	    v1 += v;
	    sum += v1 * v2;
	} while (--i);
	assertEquals(1.4, sum);
    }
}
testFor_25.metadata = {
    bug:"CORE-32697"
};

function testFor_26() {
    function test()
    {
	var v1 = 0.1, v2 = 0.1, v3 = 0.1, v4 = 0.1, v5 = 0.1, v6 = 0.1, v7 = 0.1, v8 = 0.1, v9 = 0.1, v10 = 0.1, v11 = 0.1, v12 = 0.1, v13 = 0.1, v14 = 0.1, v15 = 0.1, v16 = 0.1;
	var i = 4;
	do
	    {
		v1 += 0.1;
		v2 += 0.1;
		v3 += 0.1;
		v4 += 0.1;
		v5 += 0.1;
		v6 += 0.1;
		v7 += 0.1;
		v8 += 0.1;
		v9 += 0.1;
		v10 += 0.1;
		v11 += 0.1;
		v12 += 0.1;
		v13 += 0.1;
		v14 += 0.1;
		v15 += 0.1;
		v16 += 0.1;
	    }
	while (--i);
	assertEquals(v1, v16);
	assertEquals(v1, 0.5);
    }
    for (var i = 0; i < 20; ++i)
	test();
}
testFor_26.metadata = {
    bug:"CORE-32697"
};

function testFor_27() {
    var prev = 1;

    function record(x) { return (x == ++prev); }
    function swizzle(i) { return record(false ? 1 : true ? (true ? 1+i : 2) : 3); }

    var passed = true;
    for (var i = 1; i < 35; i++)
	passed = passed && swizzle(i);

    assertTrue(passed);
}
testFor_27.metadata = {
    bug:"CORE-31298"
};
