function testWhile_0() {
  var i = 0;
  while (i<3) {
    i++;
  }
  assertEquals(3, i);
}

function testWhile_1() {
  var x = true;
  var i = 0;
  while (x) {
    i++;
    if (i == 2) {
      x = false;
    }
  }
  assertEquals(2, i);
}

function testWhile_2() {
  var i=0;
  while (i < 10) {
    break;
    i++;
  }
  assertEquals(0, i);
}

function testWhile_3() {
  var i=0;
  label:
    while (i < 10) {
      break label;
      i++;
    }
  assertEquals(0, i);
}

function testWhile_4() {
  var i=0;
  var j=0;
  label1:
    while(i<10) {
      j=0;
      label2:
	while (j<10) {
	  j++;
	  break label1;
	}
      i++;
    }
  assertEquals(0, i);
  assertEquals(1, j);
}

function testWhile_5() {
  var i=0;
  var j=0;
  label1:
    while(i<10) {
      j=0;
      label2:
	while (j<10) {
	  j++;
	  break label2;
	}
      i++;
    }
  assertEquals(10, i);
  assertEquals(1, j);
}

function testWhile_6() {
  var i=0;
  var j=0;
  label1:
    while(i<10) {
      j=0;
      label2:
	while (j<10) {
	  j++;
	  break;
	}
      i++;
    }
  assertEquals(10, i);
  assertEquals(1, j);
}

function testWhile_7() {
  var i=0;
  var j=0;
  while(i<10) {
    j=0;
    while (j<10) {
      j++;
      break;
      }
    i++;
  }
  assertEquals(10, i);
  assertEquals(1, j);
}

function testWhile_8() {
  var i = 0;
  var j = 0;
  while(i < 3) {
    i++;
    continue;
    j++;
  }
  assertEquals(3, i);
  assertEquals(0, j);
}

function testWhile_9() {
  var i = 0;
  var j = 0;
  label1:
    while(i == 0) {
      while(i < 3) {
	i++;
	continue label1;
	j++;
      }
    }
  assertEquals(1, i);
  assertEquals(0, j);
}

function testWhile_10() {
  var i = 0;
  while (i++ < 1) {
    continue;
  }
}
testWhile_10.metadata = {bug: "CARAKAN-85"};

function testWhile_11() {
  //Pass condition is to not crash
  function foo() {
    with(foo) {
      this["insert"] = function(){};
    }
  function bar() {}
  }
}
testWhile_11.metadata = {
  bug:"CARAKAN-92"
};

function testWhile_12() {
    // Pass condition is no infinite loop
    var LengthPerTest = 30;

    function test() {
    	var startTime = new Date();
    	var now = new Date();
    	var time = 0;
    	while ((time = now.getTime()-startTime.getTime()) < LengthPerTest) {
    		now = new Date();
    		if (time > 50) throw "FAIL";
    	}
    }
    assertDoesNotThrow(test);
}
testWhile_12.metadata = {
  bug:"CARAKAN-1089"
};

function testWhile_13() {
    function f()
    {
        var x = 256;
        var r = 0;
        while (x > 1)
        {
            x = x / 2;
            r += x;
        }
        return r;
    }
    assertEquals(255, f());
}
testWhile_13.metadata = {
  bug:"CORE-47968"
};
