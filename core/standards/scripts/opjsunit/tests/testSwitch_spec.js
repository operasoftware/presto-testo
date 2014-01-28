function testSwitch_0() {
  //Use strict comparison operator
  switch(undefined) {
  case null:
    var a = 1;
    break;
  case undefined:
    a = 2;
    break;
  }
  assertEquals(2,a);
}
testSwitch_0.metadata = {
  bug:"CARAKAN-222"
};

function testSwitch_1() {
  var i=0;
  switch(1) {
  case 1:
    i++;
  case 2:
    i++;
  case 3:
    i++;
  case 4:
    i++;
  case 5:
    i++;
  }
  assertEquals(5,i);
}

function testSwitch_2() {
  var i=0;
  switch(3) {
  case 1:
    i++;
  case 2:
    i++;
  case 3:
    i++;
  case 4:
    i++;
  case 5:
    i++;
  }
  assertEquals(3,i);
}

function testSwitch_3() {
  var a = 0;
  switch("a") {
  case true:
    a = 1;
    break;
  case false:
    a = 2;
    break;
  default:
    a = 3;
  }
  assertEquals(3,a);
}

function testSwitch_4() {
  eval("switch(null){}");
}
testSwitch_4.metadata = {
  bug:"CARAKAN-227"
};

function testSwitch_5() {
  //empty case clause
  var a = 0;
  switch(2) {
  case 1:
  case 2:
    a = 1;
    break;
  default:
    a = 2;
    break;
  }
  assertEquals(1,a);
}

function testSwitch_6() {
  //only empty case clause
  assertDoesNotThrow(eval, "switch(2) {case 1:}");
}

function testSwitch_7() {
  //Return from switch
  function func() {
    switch(3){
      case 1:
	return 1;
      case 3:
	return 3;
      case 5:
	return 5;
    }
  };
  assertEquals(3, func());
}

function testSwitch_8() {
  function func() {
    switch(null) {
    case 1:
      throw "E1";
    case 2:
      throw "E2";
    case null:
      throw "E3";
    default:
      throw "E4";
    }
  }
  assertThrows("E3", func);
}

function testSwitch_9() {
  //default not at the end
  var a = 0;
  switch(3) {
  case 1:
    a = 1;
  default:
    a = 2;
  case 3:
    a = 3;
  }
  assertEquals(3,a);
}

function testSwitch_10() {
  var a = 0;
  switch(3) {
  case 1:
    a = 1;
  default:
    a = 2;
  case 3:
    a++;
  case 4:
    a++;
  }
  assertEquals(2, a);
}

function testSwitch_11() {
  var a = 0;
  switch(8) {
  case 1:
    a = 1;
  default:
    a = 2;
  case 3:
    a++;
  case 4:
    a++;
  }
  assertEquals(4, a);
}

function testSwitch_12() {
  var a = 0;
  var b = 0;
  c = [a];
  switch(0){
  case ++a:
      b = 1;
  case ++a:
      b = 2;
  case --a:
      b = 3;
  case --a:
      b = 4;
  }
  assertEquals(0,a);
  assertEquals(4, b);
}

function testSwitch_13() {
  var a = 1;
  var b = 2;
  switch(a) {
  case 1:
    switch(b) {
    case 1:
      a = 7;
    case 2:
      a = 0;
    }
  case 2:
    b = 0;
  }
  assertEquals(0, a);
  assertEquals(0, b);
}

function testSwitch_14() {
  //Break out of the right place from a labelled switch statement
  var a = 0;
  var b = 0;
  var i = 0;
  foo:
    switch(a) {
    case 0:
      bar:
	switch(b) {
	  case 0:
	    break foo;
	  case 1:
	  i++;
	}
    case 1:
      i+=2;
  }
  assertEquals(0,i);
}

function testSwitch_15() {
  var a = {b:1};
  var b = 0;
  var c = 0;
  with(a) {
    switch(b) {
      case 0:
	c = 1;
	break;
      case 1:
	c = 2;
      break;
    }
  }
  assertEquals(2, c);
}

function testSwitch_16() {
  var a = {b:1, c:0};
  var b = 0;
  var c = 0;
  switch(b) {
    case 0:
      with(a) {
	c = 1;
	break;
      }
    case 1:
      c = 2;
      break;
  }
  c++;
  assertEquals(1, c);
  assertEquals(1,a.c);
}

function testSwitch_17() {
  var a = {b:1, c:0};
  var b = 0;
  var c = 0;
  switch(b) {
    case 0:
      with(a) {
	c = 1;
      }
    case 1:
      c = 2;
  }
  c++;
  assertEquals(3, c);
  assertEquals(1,a.c);
}

function testSwitch_18() {
  //Check that lack of case blocks works
  var a = 1;
  switch(null) {}
  var a = 2;
  assertEquals(2,a);
}

function testSwitch_19() {
 var a = {
    i:0,
    _b:0,
    get b() {
      this.i++;
      return this._b;
    },
    set b(value) {
      this._b = value;
    }
  };
  var b = 0;
  switch(a.b){
  case ++a.b:
      b = 1;
  case ++a.b:
      b = 2;
  case --a.b:
      b = 3;
  case --a.b:
      b = 4;
  }
  assertEquals(0,a.b);
  assertEquals(4, b);
  assertEquals(6, a.i);
 }

function testSwitch_20() {
  function foo() {
    switch (0) {
    case 0:
        break;
    default:
        break;
    }
  }
  //pass condition is to not crash
}
testSwitch_20.metadata = {
  bug:"CARAKAN-543"
};

function testSwitch_22() {
  new Function("switch(1.3){case 4:}");
  //pass condition is to not crash
}
testSwitch_22.metadata = {
  bug:"CARAKAN-537"
};

function testSwitch_23() {
  function rotateY(j,i,rot) {
    var py = "FAIL";
    switch (rot) {
      case 0:
      case 1:
	var py = 3; break;
      case 2:
	var py = 3-i; break;
      case 3:
	var py = j;break;
      }
    return py;
  }

  for (var i = 0; i < 100; ++i) {
    var x = rotateY(0, 0, 2);
    assertEquals(3, x);
  }
}
testSwitch_23.metadata = {
  bug:"CARAKAN-637"
};

function testSwitch_24() {
  function func() {
    eval("switch(1) { default: default: break; }");
  };
  assertThrows(SyntaxError(), func);
}
testSwitch_24.metadata = {
  bug:"CARAKAN-840"
};

function testSwitch_25() {
  //Pass condition is to not crash
  var f = function() {
    switch("") { case 1: break; }
  };

  for (var i = 0; i < 50; i++)
    f();
}
testSwitch_25.metadata = {
  bug:"CARAKAN-859"
};

function testSwitch_26() {
  //Pass condition is to not crash
  var f = function() {
    switch(/1/) { case 1: break; }
  };

  for (var i = 0; i < 50; i++)
    f();
}
testSwitch_26.metadata = {
  bug:"CARAKAN-859"
};

function testSwitch_27() {
  //Pass condition is to not crash
  var f = function() {
    switch({valueOf:1}) { case 1: break; }
  };

  for (var i = 0; i < 50; i++)
    f();
}
testSwitch_27.metadata = {
  bug:"CARAKAN-859"
};

function testSwitch_28() {
  //Pass condition is to not crash
  var f = function() {
    switch(true) { case 1: break; }
  };

  for (var i = 0; i < 50; i++)
    f();
}
testSwitch_28.metadata = {
  bug:"CARAKAN-859"
};

function testSwitch_29() {
  //Pass condition is to not crash
  var f = function() {
    switch(1) { case 1: break; }
  };

  for (var i = 0; i < 50; i++)
    f();
}
testSwitch_29.metadata = {
  bug:"CARAKAN-859"
};

function testSwitch_30() {
  //Pass condition is to not crash
  var f = function() {
    switch(undefined) { case 1: break; }
  };

  for (var i = 0; i < 50; i++)
    f();
}
testSwitch_30.metadata = {
  bug:"CARAKAN-859"
};

function testSwitch_31() {
  //Pass condition is to not crash
  var f = function() {
    switch(null) { case 1: break; }
  };

  for (var i = 0; i < 50; i++)
    f();
}
testSwitch_31.metadata = {
  bug:"CARAKAN-859"
};

function testSwitch_32() {
  //Pass condition is (also) to not crash.
  var f = function() {
    var y = 0;
    for (var i = 0; i < 10; ++i)
         y += 3;
    switch(3) {case 5: break;}
    return y;
  };

  for (var i = 0; i < 50; i++)
    f();
}
testSwitch_32.metadata = {
  bug:"CORE-36321"
};

function testSwitch_33() {
  // Pass condition is not crash.
  var f = function(x) {
    switch (x)
    {
    case -2147483647:
    case 2147483647:
       return false;
    }
    return true;
  };
  for (var i = 0; i < 32; i++)
    assertTrue(f(i));
}
testSwitch_33.metadata = {
  bug:"CORE-39693"
};

function testSwitch_34() {
    function f(x)
    {
	switch(x)
	{
	case -2147483648:
	    return 0;
	case -2147483647:
	    return 1;
	default:
	    return 2;
	}
    }
    for (var i = 0; i < 32; i++)
       assertEquals(2, f(Math.PI));
}
testSwitch_34.metadata = {
  bug:"CORE-41811"
};
