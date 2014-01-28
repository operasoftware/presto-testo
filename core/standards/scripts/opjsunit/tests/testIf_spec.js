function testIf_0() {
  var x = 0;
  if(true) {
    x = 1;
  }
  assertEquals(1,x);
}

function testIf_1() {
  var x = 0;
  if(true)
    x = 1;
  assertEquals(1,x);
}

function testIf_2() {
  var x=0;
  if (false)
    x=1;
  else
    x=2;
  assertEquals(2,x);
}

function testIf_3() {
  var x=0;
  if (true)
    x=1;
  else
    x=2;
  assertEquals(1,x);
}

function testIf_4() {
  var x=1;
  var y=0;
  if (x == 0) {
    y=1;
  } else if (x == 1) {
    y=2;
  } else {
    y=3;
  }
  assertEquals(2,y);
}

function testIf_5() {
  var x="foo";
  var y=0;
  if (x == 0)
    y=1;
  else if (x == 1)
    y=2;
  else
    y=3;
  assertEquals(3,y);
}

function testIf_6() {
  if (null) {
    assertTrue(false);
  } else {
    assertTrue(true);
  }
}

function testIf_7() {
  if (undefined) {
    assertTrue(false);
  } else {
    assertTrue(true);
  }
}

function testIf_8() {
  if (0) {
    assertTrue(false);
  } else {
    assertTrue(true);
  }
}

function testIf_9() {
  if (NaN) {
    assertTrue(false);
  } else {
    assertTrue(true);
  }
}

function testIf_10() {
  if (Number.NEGATIVE_INFINITY) {
    assertTrue(true);
  } else {
    assertTrue(false);
  }
}

function testIf_11() {
  if (1) {
    assertTrue(true);
  } else {
    assertTrue(false);
  }
}

function testIf_12() {
  if ("a") {
    assertTrue(true);
  } else {
    assertTrue(false);
  }
}

function testIf_12() {
  if ("") {
    assertTrue(false);
  } else {
    assertTrue(true);
  }
}

function testIf_13() {
  var x = new Object();
  x.valueOf = function() {
    return false;
  };
  if (x) {
    assertTrue(true);
  } else {
    assertTrue(false);
  }
}

function testIf_14() {
  var x = 0;
  foo:
    if (true) {
      break foo;
      x = 2;
    }
  assertEquals(0, x);
}

function testIf_15() {
  function func(i) {
    for(var y = 0; y < 100; y++) {
      i = (y < 5 ? undefined : 0) + 1;
      if (i) {
      } else {
	if (i) {
	  assertUnreached();
	}
      }
    }
  };
  assertUndefined(func(6));
}
testIf_15.metadata = {
  bug:"CARAKAN-1176"
};

function testIf_16()
	{
 	var s = 'bar';
	String.prototype[s] = function(){};

	function func(o)
		{
		if(o.bar)
			{
			return null;
			}
		for(var p in o)
			{
			func(o[p]);
			}
		};

	var param = {
		foo: 'bar'
		};
	assertUndefined(func(param));
	}
testIf_16.metadata = {
  bug:"CORE-32612"
};

function testIf_17()
{
    function g(b,c){
	var a="PA";
	if(typeof c === 'undefined') {
	    return a+b;
	}else if(c===true){
	    return a+b;
	}
	return "";
    }
    assertEquals("PASS", g('SS', true));
}
testIf_17.metadata = {
  bug:"CORE-47586"
};

function testIf_18()
{
    var one = 1;

    (function ()
    {
	var passed = 1;
	if (one == 1)
	    ;
	else
	    passed = 0;

	assertTrue(passed === 1);
    })();
}
testIf_18.metadata = {
  bug:"CORE-48873"
};
