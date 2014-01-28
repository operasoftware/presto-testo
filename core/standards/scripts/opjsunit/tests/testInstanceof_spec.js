function testInstanceOf_0() {
  function func() {

  };
  var x = new func();
  assertTrue(x instanceof func);
}

function testInstanceOf_1() {
  function func() {

  };
  function func2() {

  };
  var x = new func();
  assertFalse(x instanceof func2);
}

function testInstanceOf_2() {
  function func() {

  };
  function func2() {

  };
  func2.prototype = new func();
  var x = new func2();

  assertTrue(x instanceof func2);
  assertTrue(x instanceof func);
}

function testInstanceOf_3() {
  var a = new Object();
  function func() {
    return a instanceof {};
  }
  assertThrows(TypeError(), func);
}
testInstanceOf_3.metadata = {
  bug:"CARAKAN-232"
};

function testInstanceOf_4() {
  function func() {
    return 1 instanceof 1;
  }
  assertThrows(TypeError(), func);
}
testInstanceOf_4.metadata = {
  bug:"CARAKAN-232"
};

function testInstanceOf_5() {
  function func() {
    return "a" instanceof "abc";
  }
  assertThrows(TypeError(), func);
}
testInstanceOf_5.metadata = {
  bug:"CARAKAN-232"
};

function testInstanceOf_6() {
  function func() {
    return true instanceof false;
  }
  assertThrows(TypeError(), func);
}
testInstanceOf_6.metadata = {
  bug:"CARAKAN-232"
};


function testInstanceOf_7() {
  function func() {
    return true instanceof false;
  }
  assertThrows(TypeError(), func);
}
testInstanceOf_7.metadata = {
  bug:"CARAKAN-232"
};

function testInstanceOf_8() {
  function func() {
    var a = new Date();
    return (new Date()) instanceof a;
  }
  assertThrows(TypeError(), func);
}
testInstanceOf_8.metadata = {
  bug:"CARAKAN-232"
};

function testInstanceOf_9() {
  function func() {
    var a = new Date();
    return (new Date()) instanceof a;
  }
  assertThrows(TypeError(), func);
}
testInstanceOf_9.metadata = {
  bug:"CARAKAN-232"
};

function testInstanceOf_10() {
  function func() {
    var a = [];
    return a instanceof (new Array());
  }
  assertThrows(TypeError(), func);
}
testInstanceOf_10.metadata = {
  bug:"CARAKAN-232"
};

function testInstanceOf_11() {
  function func() {
    return "a" instanceof (new String());
  }
  assertThrows(TypeError(), func);
}
testInstanceOf_11.metadata = {
  bug:"CARAKAN-232"
};

function testInstanceOf_12() {
  function func() {
    return /aab/g instanceof (new RegExp());
  }
  assertThrows(TypeError(), func);
}
testInstanceOf_12.metadata = {
  bug:"CARAKAN-232"
};

function testInstanceOf_13() {
  function func() {}
  assertTrue(func instanceof Function);
}

function testInstanceOf_14() {
  var a = function() {};
  assertTrue(a instanceof Function);
}

function testInstanceOf_15() {
  var a = new Date();
  assertTrue(a instanceof Date);
}

function testInstanceOf_16() {
  assertTrue(/abc/ instanceof RegExp);
}

function testInstanceOf_17() {
  var a = {};
  var B = function() {};
  B.prototype = a;
  var b = new B();

  function F() {}
  F.prototype = a;

  assertTrue(b instanceof F);
  assertFalse(a instanceof F);
}

function testInstanceOf_18() {
  var a = {};
  var B = function() {};
  B.prototype = a;
  var b = new B();
  var C = function() {};
  C.prototype = b;
  var c = new B();

  function F() {}
  F.prototype = a;

  assertTrue(c instanceof F);
  assertTrue(b instanceof F);
  assertFalse(a instanceof F);
}

function testInstanceOf_19() {
  function F() {
  }
  F.prototype = 1;
  var a = {};
  assertThrows(TypeError(),
	       function() {
		 return a instanceof F;
	       }
	      );
}
testInstanceOf_19.metadata = {
  bug:"CARAKAN-393"
};

function testInstanceOf_20() {
  function F() {
  }
  F.prototype = null;
  var a = {};
  assertThrows(TypeError(),
	       function() {
		 return a instanceof F;
	       }
	      );
}
testInstanceOf_20.metadata = {
  bug:"CARAKAN-393"
};

function testInstanceOf_21() {
  function F() {
  }
  F.prototype = "abc";
  var a = {};
  assertThrows(TypeError(),
	       function() {
		 return a instanceof F;
	       }
	      );
}
testInstanceOf_21.metadata = {
  bug:"CARAKAN-393"
};

function testInstanceOf_22() {
  function F() {
  }
  F.prototype = true;
  var a = {};
  assertThrows(TypeError(),
	       function() {
		 return a instanceof F;
	       }
	      );
}
testInstanceOf_22.metadata = {
  bug:"CARAKAN-393"
};