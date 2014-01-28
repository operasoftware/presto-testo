//opjsunit: run_tests_individually

function testJITCallEvalEvalNoPrototype_0() {
  var expr = undefined;
  var func = eval("(function(){return eval(\"undefined\");})");
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++)
    assertEquals(expr, func());

  var obj = new func();
  assertEquals("[object Object]", Object.prototype.toString.call(obj));
  assertEquals(Object.prototype, obj.__proto__);
}

function testJITCallEvalEvalNoPrototype_1() {
  var expr = null;
  var func = eval("(function(){return eval(\"null\");})");
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++)
    assertEquals(expr, func());

  var obj = new func();
  assertEquals("[object Object]", Object.prototype.toString.call(obj));
  assertEquals(Object.prototype, obj.__proto__);
}

function testJITCallEvalEvalNoPrototype_2() {
  var expr = 'foo';
  var func = eval("(function(){return eval(\"'foo'\");})");
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++)
    assertEquals(expr, func());

  var obj = new func();
  assertEquals("[object Object]", Object.prototype.toString.call(obj));
  assertEquals(Object.prototype, obj.__proto__);
}

function testJITCallEvalEvalNoPrototype_3() {
  var expr = 1;
  var func = eval("(function(){return eval(\"1\");})");
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++)
    assertEquals(expr, func());

  var obj = new func();
  assertEquals("[object Object]", Object.prototype.toString.call(obj));
  assertEquals(Object.prototype, obj.__proto__);
}

function testJITCallEvalEvalNoPrototype_4() {
  var expr = 0;
  var func = eval("(function(){return eval(\"0\");})");
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++)
    assertEquals(expr, func());

  var obj = new func();
  assertEquals("[object Object]", Object.prototype.toString.call(obj));
  assertEquals(Object.prototype, obj.__proto__);
}

function testJITCallEvalEvalNoPrototype_5() {
  var expr = NaN;
  var func = eval("(function(){return eval(\"NaN\");})");
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++)
    assertEquals(expr, func());

  var obj = new func();
  assertEquals("[object Object]", Object.prototype.toString.call(obj));
  assertEquals(Object.prototype, obj.__proto__);
}

function testJITCallEvalEvalNoPrototype_6() {
  var expr = +Infinity;
  var func = eval("(function(){return eval(\"+Infinity\");})");
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++)
    assertEquals(expr, func());

  var obj = new func();
  assertEquals("[object Object]", Object.prototype.toString.call(obj));
  assertEquals(Object.prototype, obj.__proto__);
}

function testJITCallEvalEvalNoPrototype_7() {
  var expr = +Infinity;
  var func = eval("(function(){return eval(\"+Infinity\");})");
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++)
    assertEquals(expr, func());

  var obj = new func();
  assertEquals("[object Object]", Object.prototype.toString.call(obj));
  assertEquals(Object.prototype, obj.__proto__);
}

function testJITCallEvalEvalNoPrototype_8() {
  var expr = true;
  var func = eval("(function(){return eval(\"true\");})");
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++)
    assertEquals(expr, func());

  var obj = new func();
  assertEquals("[object Object]", Object.prototype.toString.call(obj));
  assertEquals(Object.prototype, obj.__proto__);
}

function testJITCallEvalEvalNoPrototype_9() {
  var expr = false;
  var func = eval("(function(){return eval(\"false\");})");
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++)
    assertEquals(expr, func());

  var obj = new func();
  assertEquals("[object Object]", Object.prototype.toString.call(obj));
  assertEquals(Object.prototype, obj.__proto__);
}

function testJITCallEvalEvalNoPrototype_10() {
  var expr = Number();
  var func = eval("(function(){return eval(\"Number()\");})");
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++)
    assertEquals(expr, func());

  var obj = new func();
  assertEquals("[object Object]", Object.prototype.toString.call(obj));
  assertEquals(Object.prototype, obj.__proto__);
}

function testJITCallEvalEvalNoPrototype_11() {
  var expr = Number(42);
  var func = eval("(function(){return eval(\"Number(42)\");})");
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++)
    assertEquals(expr, func());

  var obj = new func();
  assertEquals("[object Object]", Object.prototype.toString.call(obj));
  assertEquals(Object.prototype, obj.__proto__);
}

function testJITCallEvalEvalNoPrototype_12() {
  var expr = String();
  var func = eval("(function(){return eval(\"String()\");})");
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++)
    assertEquals(expr, func());

  var obj = new func();
  assertEquals("[object Object]", Object.prototype.toString.call(obj));
  assertEquals(Object.prototype, obj.__proto__);
}

function testJITCallEvalEvalNoPrototype_13() {
  var expr = String('a');
  var func = eval("(function(){return eval(\"String('a')\");})");
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++)
    assertEquals(expr, func());

  var obj = new func();
  assertEquals("[object Object]", Object.prototype.toString.call(obj));
  assertEquals(Object.prototype, obj.__proto__);
}

function testJITCallEvalEvalPrototype_0() {
  var expr = undefined;
  var func = eval("(function(){return eval(\"undefined\");})");
  
  for (var i = 0; i < 50; i++)
    assertEquals(expr, func());

  var obj = new func();
  assertEquals("[object Object]", Object.prototype.toString.call(obj));
  assertEquals(func.prototype, obj.__proto__);
}

function testJITCallEvalEvalPrototype_1() {
  var expr = null;
  var func = eval("(function(){return eval(\"null\");})");
  
  for (var i = 0; i < 50; i++)
    assertEquals(expr, func());

  var obj = new func();
  assertEquals("[object Object]", Object.prototype.toString.call(obj));
  assertEquals(func.prototype, obj.__proto__);
}

function testJITCallEvalEvalPrototype_2() {
  var expr = 'foo';
  var func = eval("(function(){return eval(\"'foo'\");})");
  
  for (var i = 0; i < 50; i++)
    assertEquals(expr, func());

  var obj = new func();
  assertEquals("[object Object]", Object.prototype.toString.call(obj));
  assertEquals(func.prototype, obj.__proto__);
}

function testJITCallEvalEvalPrototype_3() {
  var expr = 1;
  var func = eval("(function(){return eval(\"1\");})");
  
  for (var i = 0; i < 50; i++)
    assertEquals(expr, func());

  var obj = new func();
  assertEquals("[object Object]", Object.prototype.toString.call(obj));
  assertEquals(func.prototype, obj.__proto__);
}

function testJITCallEvalEvalPrototype_4() {
  var expr = 0;
  var func = eval("(function(){return eval(\"0\");})");
  
  for (var i = 0; i < 50; i++)
    assertEquals(expr, func());

  var obj = new func();
  assertEquals("[object Object]", Object.prototype.toString.call(obj));
  assertEquals(func.prototype, obj.__proto__);
}

function testJITCallEvalEvalPrototype_5() {
  var expr = NaN;
  var func = eval("(function(){return eval(\"NaN\");})");
  
  for (var i = 0; i < 50; i++)
    assertEquals(expr, func());

  var obj = new func();
  assertEquals("[object Object]", Object.prototype.toString.call(obj));
  assertEquals(func.prototype, obj.__proto__);
}

function testJITCallEvalEvalPrototype_6() {
  var expr = +Infinity;
  var func = eval("(function(){return eval(\"+Infinity\");})");
  
  for (var i = 0; i < 50; i++)
    assertEquals(expr, func());

  var obj = new func();
  assertEquals("[object Object]", Object.prototype.toString.call(obj));
  assertEquals(func.prototype, obj.__proto__);
}

function testJITCallEvalEvalPrototype_7() {
  var expr = +Infinity;
  var func = eval("(function(){return eval(\"+Infinity\");})");
  
  for (var i = 0; i < 50; i++)
    assertEquals(expr, func());

  var obj = new func();
  assertEquals("[object Object]", Object.prototype.toString.call(obj));
  assertEquals(func.prototype, obj.__proto__);
}

function testJITCallEvalEvalPrototype_8() {
  var expr = true;
  var func = eval("(function(){return eval(\"true\");})");
  
  for (var i = 0; i < 50; i++)
    assertEquals(expr, func());

  var obj = new func();
  assertEquals("[object Object]", Object.prototype.toString.call(obj));
  assertEquals(func.prototype, obj.__proto__);
}

function testJITCallEvalEvalPrototype_9() {
  var expr = false;
  var func = eval("(function(){return eval(\"false\");})");
  
  for (var i = 0; i < 50; i++)
    assertEquals(expr, func());

  var obj = new func();
  assertEquals("[object Object]", Object.prototype.toString.call(obj));
  assertEquals(func.prototype, obj.__proto__);
}

function testJITCallEvalEvalPrototype_10() {
  var expr = Number();
  var func = eval("(function(){return eval(\"Number()\");})");
  
  for (var i = 0; i < 50; i++)
    assertEquals(expr, func());

  var obj = new func();
  assertEquals("[object Object]", Object.prototype.toString.call(obj));
  assertEquals(func.prototype, obj.__proto__);
}

function testJITCallEvalEvalPrototype_11() {
  var expr = Number(42);
  var func = eval("(function(){return eval(\"Number(42)\");})");
  
  for (var i = 0; i < 50; i++)
    assertEquals(expr, func());

  var obj = new func();
  assertEquals("[object Object]", Object.prototype.toString.call(obj));
  assertEquals(func.prototype, obj.__proto__);
}

function testJITCallEvalEvalPrototype_12() {
  var expr = String();
  var func = eval("(function(){return eval(\"String()\");})");
  
  for (var i = 0; i < 50; i++)
    assertEquals(expr, func());

  var obj = new func();
  assertEquals("[object Object]", Object.prototype.toString.call(obj));
  assertEquals(func.prototype, obj.__proto__);
}

function testJITCallEvalEvalPrototype_13() {
  var expr = String('a');
  var func = eval("(function(){return eval(\"String('a')\");})");
  
  for (var i = 0; i < 50; i++)
    assertEquals(expr, func());

  var obj = new func();
  assertEquals("[object Object]", Object.prototype.toString.call(obj));
  assertEquals(func.prototype, obj.__proto__);
}

function testJITCallEvalEvalPrototype_14() {
  var expr = ({});
  var func = eval("(function(){return eval(\"({})\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallEvalEvalPrototype_15() {
  var expr = ({a: 'b'});
  var func = eval("(function(){return eval(\"({a: 'b'})\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallEvalEvalPrototype_16() {
  var expr = (function(){return arguments;})();
  var func = eval("(function(){return eval(\"(function(){return arguments;})()\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallEvalEvalPrototype_17() {
  var expr = [];
  var func = eval("(function(){return eval(\"[]\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallEvalEvalPrototype_18() {
  var expr = [0];
  var func = eval("(function(){return eval(\"[0]\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallEvalEvalPrototype_19() {
  var expr = [0,1];
  var func = eval("(function(){return eval(\"[0,1]\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallEvalEvalPrototype_20() {
  var expr = [1,2];
  var func = eval("(function(){return eval(\"[1,2]\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallEvalEvalPrototype_21() {
  var expr = new Boolean(0);
  var func = eval("(function(){return eval(\"new Boolean(0)\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallEvalEvalPrototype_22() {
  var expr = new Boolean(1);
  var func = eval("(function(){return eval(\"new Boolean(1)\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallEvalEvalPrototype_23() {
  var expr = new Date(2010, 1);
  var func = eval("(function(){return eval(\"new Date(2010, 1)\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallEvalEvalPrototype_24() {
  var expr = new Date(NaN, 1);
  var func = eval("(function(){return eval(\"new Date(NaN, 1)\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallEvalEvalPrototype_25() {
  var expr = new Date(NaN, NaN);
  var func = eval("(function(){return eval(\"new Date(NaN, NaN)\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallEvalEvalPrototype_26() {
  var expr = new Date(0);
  var func = eval("(function(){return eval(\"new Date(0)\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallEvalEvalPrototype_27() {
  var expr = JSON;
  var func = eval("(function(){return eval(\"JSON\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallEvalEvalPrototype_28() {
  var expr = Math;
  var func = eval("(function(){return eval(\"Math\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallEvalEvalPrototype_29() {
  var expr = new Number();
  var func = eval("(function(){return eval(\"new Number()\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallEvalEvalPrototype_30() {
  var expr = new Number(42);
  var func = eval("(function(){return eval(\"new Number(42)\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallEvalEvalPrototype_31() {
  var expr = Object();
  var func = eval("(function(){return eval(\"Object()\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallEvalEvalPrototype_32() {
  var expr = Object(null);
  var func = eval("(function(){return eval(\"Object(null)\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallEvalEvalPrototype_33() {
  var expr = Object(undefined);
  var func = eval("(function(){return eval(\"Object(undefined)\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallEvalEvalPrototype_34() {
  var expr = Object('foo');
  var func = eval("(function(){return eval(\"Object('foo')\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallEvalEvalPrototype_35() {
  var expr = Object(0);
  var func = eval("(function(){return eval(\"Object(0)\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallEvalEvalPrototype_36() {
  var expr = Object(1);
  var func = eval("(function(){return eval(\"Object(1)\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallEvalEvalPrototype_37() {
  var expr = Object(NaN);
  var func = eval("(function(){return eval(\"Object(NaN)\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallEvalEvalPrototype_38() {
  var expr = Object(+Infinity);
  var func = eval("(function(){return eval(\"Object(+Infinity)\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallEvalEvalPrototype_39() {
  var expr = Object(-Infinity);
  var func = eval("(function(){return eval(\"Object(-Infinity)\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallEvalEvalPrototype_40() {
  var expr = Object(true);
  var func = eval("(function(){return eval(\"Object(true)\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallEvalEvalPrototype_41() {
  var expr = Object(false);
  var func = eval("(function(){return eval(\"Object(false)\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallEvalEvalPrototype_42() {
  var expr = new Object();
  var func = eval("(function(){return eval(\"new Object()\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallEvalEvalPrototype_43() {
  var expr = new Object(null);
  var func = eval("(function(){return eval(\"new Object(null)\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallEvalEvalPrototype_44() {
  var expr = new Object(undefined);
  var func = eval("(function(){return eval(\"new Object(undefined)\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallEvalEvalPrototype_45() {
  var expr = new Object('foo');
  var func = eval("(function(){return eval(\"new Object('foo')\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallEvalEvalPrototype_46() {
  var expr = new Object(0);
  var func = eval("(function(){return eval(\"new Object(0)\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallEvalEvalPrototype_47() {
  var expr = new Object(1);
  var func = eval("(function(){return eval(\"new Object(1)\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallEvalEvalPrototype_48() {
  var expr = new Object(NaN);
  var func = eval("(function(){return eval(\"new Object(NaN)\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallEvalEvalPrototype_49() {
  var expr = new Object(+Infinity);
  var func = eval("(function(){return eval(\"new Object(+Infinity)\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallEvalEvalPrototype_50() {
  var expr = new Object(-Infinity);
  var func = eval("(function(){return eval(\"new Object(-Infinity)\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallEvalEvalPrototype_51() {
  var expr = new Object(true);
  var func = eval("(function(){return eval(\"new Object(true)\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallEvalEvalPrototype_52() {
  var expr = new Object(false);
  var func = eval("(function(){return eval(\"new Object(false)\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallEvalEvalPrototype_53() {
  var expr = /a/;
  var func = eval("(function(){return eval(\"/a/\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallEvalEvalPrototype_54() {
  var expr = RegExp('a');
  var func = eval("(function(){return eval(\"RegExp('a')\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallEvalEvalPrototype_55() {
  var expr = RegExp(/a/);
  var func = eval("(function(){return eval(\"RegExp(/a/)\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallEvalEvalPrototype_56() {
  var expr = new RegExp();
  var func = eval("(function(){return eval(\"new RegExp()\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallEvalEvalPrototype_57() {
  var expr = new RegExp(/a/);
  var func = eval("(function(){return eval(\"new RegExp(/a/)\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallEvalEvalPrototype_58() {
  var expr = new RegExp('a');
  var func = eval("(function(){return eval(\"new RegExp('a')\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallEvalEvalPrototype_59() {
  var expr = new String();
  var func = eval("(function(){return eval(\"new String()\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallEvalEvalPrototype_60() {
  var expr = new String('a');
  var func = eval("(function(){return eval(\"new String('a')\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallEvalEvalPrototype_61() {
  var expr = (function(){});
  expr.prototype = undefined;
  var func = eval("(function(){return eval(\"(function(){})\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  obj.prototype = undefined;
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertObjectEquals(expr, obj);
}

function testJITCallEvalEvalPrototype_62() {
  var expr = (function(){return 1});
  expr.prototype = undefined;
  var func = eval("(function(){return eval(\"(function(){return 1})\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  obj.prototype = undefined;
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertObjectEquals(expr, obj);
}

function testJITCallEvalEvalPrototype_63() {
  var expr = (function(a){return a});
  expr.prototype = undefined;
  var func = eval("(function(){return eval(\"(function(a){return a})\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  obj.prototype = undefined;
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertObjectEquals(expr, obj);
}

function testJITCallEvalEvalPrototype_64() {
  var expr = Function();
  expr.prototype = undefined;
  var func = eval("(function(){return eval(\"Function()\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  obj.prototype = undefined;
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertObjectEquals(expr, obj);
}

function testJITCallEvalEvalPrototype_65() {
  var expr = Function('return 1');
  expr.prototype = undefined;
  var func = eval("(function(){return eval(\"Function('return 1')\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  obj.prototype = undefined;
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertObjectEquals(expr, obj);
}

function testJITCallEvalEvalPrototype_66() {
  var expr = Function('a', 'return a');
  expr.prototype = undefined;
  var func = eval("(function(){return eval(\"Function('a', 'return a')\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  obj.prototype = undefined;
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertObjectEquals(expr, obj);
}

function testJITCallEvalEvalPrototype_67() {
  var expr = new Function();
  expr.prototype = undefined;
  var func = eval("(function(){return eval(\"new Function()\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  obj.prototype = undefined;
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertObjectEquals(expr, obj);
}

function testJITCallEvalEvalPrototype_68() {
  var expr = new Function('return 1');
  expr.prototype = undefined;
  var func = eval("(function(){return eval(\"new Function('return 1')\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  obj.prototype = undefined;
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertObjectEquals(expr, obj);
}

function testJITCallEvalEvalPrototype_69() {
  var expr = new Function('a', 'return a');
  expr.prototype = undefined;
  var func = eval("(function(){return eval(\"new Function('a', 'return a')\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  obj.prototype = undefined;
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertObjectEquals(expr, obj);
}

function testJITCallEvalNoPrototype_0() {
  var expr = undefined;
  var func = eval("(function(){return undefined;})");
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++)
    assertEquals(expr, func());

  var obj = new func();
  assertEquals("[object Object]", Object.prototype.toString.call(obj));
  assertEquals(Object.prototype, obj.__proto__);
}

function testJITCallEvalNoPrototype_1() {
  var expr = null;
  var func = eval("(function(){return null;})");
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++)
    assertEquals(expr, func());

  var obj = new func();
  assertEquals("[object Object]", Object.prototype.toString.call(obj));
  assertEquals(Object.prototype, obj.__proto__);
}

function testJITCallEvalNoPrototype_2() {
  var expr = 'foo';
  var func = eval("(function(){return 'foo';})");
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++)
    assertEquals(expr, func());

  var obj = new func();
  assertEquals("[object Object]", Object.prototype.toString.call(obj));
  assertEquals(Object.prototype, obj.__proto__);
}

function testJITCallEvalNoPrototype_3() {
  var expr = 1;
  var func = eval("(function(){return 1;})");
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++)
    assertEquals(expr, func());

  var obj = new func();
  assertEquals("[object Object]", Object.prototype.toString.call(obj));
  assertEquals(Object.prototype, obj.__proto__);
}

function testJITCallEvalNoPrototype_4() {
  var expr = 0;
  var func = eval("(function(){return 0;})");
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++)
    assertEquals(expr, func());

  var obj = new func();
  assertEquals("[object Object]", Object.prototype.toString.call(obj));
  assertEquals(Object.prototype, obj.__proto__);
}

function testJITCallEvalNoPrototype_5() {
  var expr = NaN;
  var func = eval("(function(){return NaN;})");
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++)
    assertEquals(expr, func());

  var obj = new func();
  assertEquals("[object Object]", Object.prototype.toString.call(obj));
  assertEquals(Object.prototype, obj.__proto__);
}

function testJITCallEvalNoPrototype_6() {
  var expr = +Infinity;
  var func = eval("(function(){return +Infinity;})");
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++)
    assertEquals(expr, func());

  var obj = new func();
  assertEquals("[object Object]", Object.prototype.toString.call(obj));
  assertEquals(Object.prototype, obj.__proto__);
}

function testJITCallEvalNoPrototype_7() {
  var expr = +Infinity;
  var func = eval("(function(){return +Infinity;})");
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++)
    assertEquals(expr, func());

  var obj = new func();
  assertEquals("[object Object]", Object.prototype.toString.call(obj));
  assertEquals(Object.prototype, obj.__proto__);
}

function testJITCallEvalNoPrototype_8() {
  var expr = true;
  var func = eval("(function(){return true;})");
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++)
    assertEquals(expr, func());

  var obj = new func();
  assertEquals("[object Object]", Object.prototype.toString.call(obj));
  assertEquals(Object.prototype, obj.__proto__);
}

function testJITCallEvalNoPrototype_9() {
  var expr = false;
  var func = eval("(function(){return false;})");
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++)
    assertEquals(expr, func());

  var obj = new func();
  assertEquals("[object Object]", Object.prototype.toString.call(obj));
  assertEquals(Object.prototype, obj.__proto__);
}

function testJITCallEvalNoPrototype_10() {
  var expr = Number();
  var func = eval("(function(){return Number();})");
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++)
    assertEquals(expr, func());

  var obj = new func();
  assertEquals("[object Object]", Object.prototype.toString.call(obj));
  assertEquals(Object.prototype, obj.__proto__);
}

function testJITCallEvalNoPrototype_11() {
  var expr = Number(42);
  var func = eval("(function(){return Number(42);})");
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++)
    assertEquals(expr, func());

  var obj = new func();
  assertEquals("[object Object]", Object.prototype.toString.call(obj));
  assertEquals(Object.prototype, obj.__proto__);
}

function testJITCallEvalNoPrototype_12() {
  var expr = String();
  var func = eval("(function(){return String();})");
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++)
    assertEquals(expr, func());

  var obj = new func();
  assertEquals("[object Object]", Object.prototype.toString.call(obj));
  assertEquals(Object.prototype, obj.__proto__);
}

function testJITCallEvalNoPrototype_13() {
  var expr = String('a');
  var func = eval("(function(){return String('a');})");
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++)
    assertEquals(expr, func());

  var obj = new func();
  assertEquals("[object Object]", Object.prototype.toString.call(obj));
  assertEquals(Object.prototype, obj.__proto__);
}

function testJITCallEvalPrototype_0() {
  var expr = undefined;
  var func = eval("(function(){return undefined;})");
  
  for (var i = 0; i < 50; i++)
    assertEquals(expr, func());

  var obj = new func();
  assertEquals("[object Object]", Object.prototype.toString.call(obj));
  assertEquals(func.prototype, obj.__proto__);
}

function testJITCallEvalPrototype_1() {
  var expr = null;
  var func = eval("(function(){return null;})");
  
  for (var i = 0; i < 50; i++)
    assertEquals(expr, func());

  var obj = new func();
  assertEquals("[object Object]", Object.prototype.toString.call(obj));
  assertEquals(func.prototype, obj.__proto__);
}

function testJITCallEvalPrototype_2() {
  var expr = 'foo';
  var func = eval("(function(){return 'foo';})");
  
  for (var i = 0; i < 50; i++)
    assertEquals(expr, func());

  var obj = new func();
  assertEquals("[object Object]", Object.prototype.toString.call(obj));
  assertEquals(func.prototype, obj.__proto__);
}

function testJITCallEvalPrototype_3() {
  var expr = 1;
  var func = eval("(function(){return 1;})");
  
  for (var i = 0; i < 50; i++)
    assertEquals(expr, func());

  var obj = new func();
  assertEquals("[object Object]", Object.prototype.toString.call(obj));
  assertEquals(func.prototype, obj.__proto__);
}

function testJITCallEvalPrototype_4() {
  var expr = 0;
  var func = eval("(function(){return 0;})");
  
  for (var i = 0; i < 50; i++)
    assertEquals(expr, func());

  var obj = new func();
  assertEquals("[object Object]", Object.prototype.toString.call(obj));
  assertEquals(func.prototype, obj.__proto__);
}

function testJITCallEvalPrototype_5() {
  var expr = NaN;
  var func = eval("(function(){return NaN;})");
  
  for (var i = 0; i < 50; i++)
    assertEquals(expr, func());

  var obj = new func();
  assertEquals("[object Object]", Object.prototype.toString.call(obj));
  assertEquals(func.prototype, obj.__proto__);
}

function testJITCallEvalPrototype_6() {
  var expr = +Infinity;
  var func = eval("(function(){return +Infinity;})");
  
  for (var i = 0; i < 50; i++)
    assertEquals(expr, func());

  var obj = new func();
  assertEquals("[object Object]", Object.prototype.toString.call(obj));
  assertEquals(func.prototype, obj.__proto__);
}

function testJITCallEvalPrototype_7() {
  var expr = +Infinity;
  var func = eval("(function(){return +Infinity;})");
  
  for (var i = 0; i < 50; i++)
    assertEquals(expr, func());

  var obj = new func();
  assertEquals("[object Object]", Object.prototype.toString.call(obj));
  assertEquals(func.prototype, obj.__proto__);
}

function testJITCallEvalPrototype_8() {
  var expr = true;
  var func = eval("(function(){return true;})");
  
  for (var i = 0; i < 50; i++)
    assertEquals(expr, func());

  var obj = new func();
  assertEquals("[object Object]", Object.prototype.toString.call(obj));
  assertEquals(func.prototype, obj.__proto__);
}

function testJITCallEvalPrototype_9() {
  var expr = false;
  var func = eval("(function(){return false;})");
  
  for (var i = 0; i < 50; i++)
    assertEquals(expr, func());

  var obj = new func();
  assertEquals("[object Object]", Object.prototype.toString.call(obj));
  assertEquals(func.prototype, obj.__proto__);
}

function testJITCallEvalPrototype_10() {
  var expr = Number();
  var func = eval("(function(){return Number();})");
  
  for (var i = 0; i < 50; i++)
    assertEquals(expr, func());

  var obj = new func();
  assertEquals("[object Object]", Object.prototype.toString.call(obj));
  assertEquals(func.prototype, obj.__proto__);
}

function testJITCallEvalPrototype_11() {
  var expr = Number(42);
  var func = eval("(function(){return Number(42);})");
  
  for (var i = 0; i < 50; i++)
    assertEquals(expr, func());

  var obj = new func();
  assertEquals("[object Object]", Object.prototype.toString.call(obj));
  assertEquals(func.prototype, obj.__proto__);
}

function testJITCallEvalPrototype_12() {
  var expr = String();
  var func = eval("(function(){return String();})");
  
  for (var i = 0; i < 50; i++)
    assertEquals(expr, func());

  var obj = new func();
  assertEquals("[object Object]", Object.prototype.toString.call(obj));
  assertEquals(func.prototype, obj.__proto__);
}

function testJITCallEvalPrototype_13() {
  var expr = String('a');
  var func = eval("(function(){return String('a');})");
  
  for (var i = 0; i < 50; i++)
    assertEquals(expr, func());

  var obj = new func();
  assertEquals("[object Object]", Object.prototype.toString.call(obj));
  assertEquals(func.prototype, obj.__proto__);
}

function testJITCallEvalPrototype_14() {
  var expr = ({});
  var func = eval("(function(){return ({});})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallEvalPrototype_15() {
  var expr = ({a: 'b'});
  var func = eval("(function(){return ({a: 'b'});})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallEvalPrototype_16() {
  var expr = (function(){return arguments;})();
  var func = eval("(function(){return (function(){return arguments;})();})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallEvalPrototype_17() {
  var expr = [];
  var func = eval("(function(){return [];})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallEvalPrototype_18() {
  var expr = [0];
  var func = eval("(function(){return [0];})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallEvalPrototype_19() {
  var expr = [0,1];
  var func = eval("(function(){return [0,1];})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallEvalPrototype_20() {
  var expr = [1,2];
  var func = eval("(function(){return [1,2];})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallEvalPrototype_21() {
  var expr = new Boolean(0);
  var func = eval("(function(){return new Boolean(0);})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallEvalPrototype_22() {
  var expr = new Boolean(1);
  var func = eval("(function(){return new Boolean(1);})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallEvalPrototype_23() {
  var expr = new Date(2010, 1);
  var func = eval("(function(){return new Date(2010, 1);})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallEvalPrototype_24() {
  var expr = new Date(NaN, 1);
  var func = eval("(function(){return new Date(NaN, 1);})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallEvalPrototype_25() {
  var expr = new Date(NaN, NaN);
  var func = eval("(function(){return new Date(NaN, NaN);})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallEvalPrototype_26() {
  var expr = new Date(0);
  var func = eval("(function(){return new Date(0);})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallEvalPrototype_27() {
  var expr = JSON;
  var func = eval("(function(){return JSON;})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallEvalPrototype_28() {
  var expr = Math;
  var func = eval("(function(){return Math;})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallEvalPrototype_29() {
  var expr = new Number();
  var func = eval("(function(){return new Number();})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallEvalPrototype_30() {
  var expr = new Number(42);
  var func = eval("(function(){return new Number(42);})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallEvalPrototype_31() {
  var expr = Object();
  var func = eval("(function(){return Object();})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallEvalPrototype_32() {
  var expr = Object(null);
  var func = eval("(function(){return Object(null);})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallEvalPrototype_33() {
  var expr = Object(undefined);
  var func = eval("(function(){return Object(undefined);})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallEvalPrototype_34() {
  var expr = Object('foo');
  var func = eval("(function(){return Object('foo');})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallEvalPrototype_35() {
  var expr = Object(0);
  var func = eval("(function(){return Object(0);})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallEvalPrototype_36() {
  var expr = Object(1);
  var func = eval("(function(){return Object(1);})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallEvalPrototype_37() {
  var expr = Object(NaN);
  var func = eval("(function(){return Object(NaN);})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallEvalPrototype_38() {
  var expr = Object(+Infinity);
  var func = eval("(function(){return Object(+Infinity);})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallEvalPrototype_39() {
  var expr = Object(-Infinity);
  var func = eval("(function(){return Object(-Infinity);})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallEvalPrototype_40() {
  var expr = Object(true);
  var func = eval("(function(){return Object(true);})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallEvalPrototype_41() {
  var expr = Object(false);
  var func = eval("(function(){return Object(false);})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallEvalPrototype_42() {
  var expr = new Object();
  var func = eval("(function(){return new Object();})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallEvalPrototype_43() {
  var expr = new Object(null);
  var func = eval("(function(){return new Object(null);})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallEvalPrototype_44() {
  var expr = new Object(undefined);
  var func = eval("(function(){return new Object(undefined);})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallEvalPrototype_45() {
  var expr = new Object('foo');
  var func = eval("(function(){return new Object('foo');})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallEvalPrototype_46() {
  var expr = new Object(0);
  var func = eval("(function(){return new Object(0);})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallEvalPrototype_47() {
  var expr = new Object(1);
  var func = eval("(function(){return new Object(1);})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallEvalPrototype_48() {
  var expr = new Object(NaN);
  var func = eval("(function(){return new Object(NaN);})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallEvalPrototype_49() {
  var expr = new Object(+Infinity);
  var func = eval("(function(){return new Object(+Infinity);})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallEvalPrototype_50() {
  var expr = new Object(-Infinity);
  var func = eval("(function(){return new Object(-Infinity);})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallEvalPrototype_51() {
  var expr = new Object(true);
  var func = eval("(function(){return new Object(true);})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallEvalPrototype_52() {
  var expr = new Object(false);
  var func = eval("(function(){return new Object(false);})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallEvalPrototype_53() {
  var expr = /a/;
  var func = eval("(function(){return /a/;})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallEvalPrototype_54() {
  var expr = RegExp('a');
  var func = eval("(function(){return RegExp('a');})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallEvalPrototype_55() {
  var expr = RegExp(/a/);
  var func = eval("(function(){return RegExp(/a/);})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallEvalPrototype_56() {
  var expr = new RegExp();
  var func = eval("(function(){return new RegExp();})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallEvalPrototype_57() {
  var expr = new RegExp(/a/);
  var func = eval("(function(){return new RegExp(/a/);})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallEvalPrototype_58() {
  var expr = new RegExp('a');
  var func = eval("(function(){return new RegExp('a');})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallEvalPrototype_59() {
  var expr = new String();
  var func = eval("(function(){return new String();})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallEvalPrototype_60() {
  var expr = new String('a');
  var func = eval("(function(){return new String('a');})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallEvalPrototype_61() {
  var expr = (function(){});
  expr.prototype = undefined;
  var func = eval("(function(){return (function(){});})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  obj.prototype = undefined;
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertObjectEquals(expr, obj);
}

function testJITCallEvalPrototype_62() {
  var expr = (function(){return 1});
  expr.prototype = undefined;
  var func = eval("(function(){return (function(){return 1});})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  obj.prototype = undefined;
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertObjectEquals(expr, obj);
}

function testJITCallEvalPrototype_63() {
  var expr = (function(a){return a});
  expr.prototype = undefined;
  var func = eval("(function(){return (function(a){return a});})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  obj.prototype = undefined;
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertObjectEquals(expr, obj);
}

function testJITCallEvalPrototype_64() {
  var expr = Function();
  expr.prototype = undefined;
  var func = eval("(function(){return Function();})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  obj.prototype = undefined;
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertObjectEquals(expr, obj);
}

function testJITCallEvalPrototype_65() {
  var expr = Function('return 1');
  expr.prototype = undefined;
  var func = eval("(function(){return Function('return 1');})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  obj.prototype = undefined;
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertObjectEquals(expr, obj);
}

function testJITCallEvalPrototype_66() {
  var expr = Function('a', 'return a');
  expr.prototype = undefined;
  var func = eval("(function(){return Function('a', 'return a');})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  obj.prototype = undefined;
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertObjectEquals(expr, obj);
}

function testJITCallEvalPrototype_67() {
  var expr = new Function();
  expr.prototype = undefined;
  var func = eval("(function(){return new Function();})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  obj.prototype = undefined;
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertObjectEquals(expr, obj);
}

function testJITCallEvalPrototype_68() {
  var expr = new Function('return 1');
  expr.prototype = undefined;
  var func = eval("(function(){return new Function('return 1');})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  obj.prototype = undefined;
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertObjectEquals(expr, obj);
}

function testJITCallEvalPrototype_69() {
  var expr = new Function('a', 'return a');
  expr.prototype = undefined;
  var func = eval("(function(){return new Function('a', 'return a');})");
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  obj.prototype = undefined;
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertObjectEquals(expr, obj);
}

function testJITCallNoPrototype_0() {
  var expr = undefined;
  var func = function() {
    return undefined;
  };
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++)
    assertEquals(expr, func());

  var obj = new func();
  assertEquals("[object Object]", Object.prototype.toString.call(obj));
  assertEquals(Object.prototype, obj.__proto__);
}

function testJITCallNoPrototype_1() {
  var expr = null;
  var func = function() {
    return null;
  };
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++)
    assertEquals(expr, func());

  var obj = new func();
  assertEquals("[object Object]", Object.prototype.toString.call(obj));
  assertEquals(Object.prototype, obj.__proto__);
}

function testJITCallNoPrototype_2() {
  var expr = 'foo';
  var func = function() {
    return 'foo';
  };
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++)
    assertEquals(expr, func());

  var obj = new func();
  assertEquals("[object Object]", Object.prototype.toString.call(obj));
  assertEquals(Object.prototype, obj.__proto__);
}

function testJITCallNoPrototype_3() {
  var expr = 1;
  var func = function() {
    return 1;
  };
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++)
    assertEquals(expr, func());

  var obj = new func();
  assertEquals("[object Object]", Object.prototype.toString.call(obj));
  assertEquals(Object.prototype, obj.__proto__);
}

function testJITCallNoPrototype_4() {
  var expr = 0;
  var func = function() {
    return 0;
  };
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++)
    assertEquals(expr, func());

  var obj = new func();
  assertEquals("[object Object]", Object.prototype.toString.call(obj));
  assertEquals(Object.prototype, obj.__proto__);
}

function testJITCallNoPrototype_5() {
  var expr = NaN;
  var func = function() {
    return NaN;
  };
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++)
    assertEquals(expr, func());

  var obj = new func();
  assertEquals("[object Object]", Object.prototype.toString.call(obj));
  assertEquals(Object.prototype, obj.__proto__);
}

function testJITCallNoPrototype_6() {
  var expr = +Infinity;
  var func = function() {
    return +Infinity;
  };
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++)
    assertEquals(expr, func());

  var obj = new func();
  assertEquals("[object Object]", Object.prototype.toString.call(obj));
  assertEquals(Object.prototype, obj.__proto__);
}

function testJITCallNoPrototype_7() {
  var expr = +Infinity;
  var func = function() {
    return +Infinity;
  };
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++)
    assertEquals(expr, func());

  var obj = new func();
  assertEquals("[object Object]", Object.prototype.toString.call(obj));
  assertEquals(Object.prototype, obj.__proto__);
}

function testJITCallNoPrototype_8() {
  var expr = true;
  var func = function() {
    return true;
  };
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++)
    assertEquals(expr, func());

  var obj = new func();
  assertEquals("[object Object]", Object.prototype.toString.call(obj));
  assertEquals(Object.prototype, obj.__proto__);
}

function testJITCallNoPrototype_9() {
  var expr = false;
  var func = function() {
    return false;
  };
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++)
    assertEquals(expr, func());

  var obj = new func();
  assertEquals("[object Object]", Object.prototype.toString.call(obj));
  assertEquals(Object.prototype, obj.__proto__);
}

function testJITCallNoPrototype_10() {
  var expr = Number();
  var func = function() {
    return Number();
  };
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++)
    assertEquals(expr, func());

  var obj = new func();
  assertEquals("[object Object]", Object.prototype.toString.call(obj));
  assertEquals(Object.prototype, obj.__proto__);
}

function testJITCallNoPrototype_11() {
  var expr = Number(42);
  var func = function() {
    return Number(42);
  };
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++)
    assertEquals(expr, func());

  var obj = new func();
  assertEquals("[object Object]", Object.prototype.toString.call(obj));
  assertEquals(Object.prototype, obj.__proto__);
}

function testJITCallNoPrototype_12() {
  var expr = String();
  var func = function() {
    return String();
  };
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++)
    assertEquals(expr, func());

  var obj = new func();
  assertEquals("[object Object]", Object.prototype.toString.call(obj));
  assertEquals(Object.prototype, obj.__proto__);
}

function testJITCallNoPrototype_13() {
  var expr = String('a');
  var func = function() {
    return String('a');
  };
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++)
    assertEquals(expr, func());

  var obj = new func();
  assertEquals("[object Object]", Object.prototype.toString.call(obj));
  assertEquals(Object.prototype, obj.__proto__);
}

function testJITCallPrototype_0() {
  var expr = undefined;
  var func = function() {
    return undefined;
  };
  
  for (var i = 0; i < 50; i++)
    assertEquals(expr, func());

  var obj = new func();
  assertEquals("[object Object]", Object.prototype.toString.call(obj));
  assertEquals(func.prototype, obj.__proto__);
}

function testJITCallPrototype_1() {
  var expr = null;
  var func = function() {
    return null;
  };
  
  for (var i = 0; i < 50; i++)
    assertEquals(expr, func());

  var obj = new func();
  assertEquals("[object Object]", Object.prototype.toString.call(obj));
  assertEquals(func.prototype, obj.__proto__);
}

function testJITCallPrototype_2() {
  var expr = 'foo';
  var func = function() {
    return 'foo';
  };
  
  for (var i = 0; i < 50; i++)
    assertEquals(expr, func());

  var obj = new func();
  assertEquals("[object Object]", Object.prototype.toString.call(obj));
  assertEquals(func.prototype, obj.__proto__);
}

function testJITCallPrototype_3() {
  var expr = 1;
  var func = function() {
    return 1;
  };
  
  for (var i = 0; i < 50; i++)
    assertEquals(expr, func());

  var obj = new func();
  assertEquals("[object Object]", Object.prototype.toString.call(obj));
  assertEquals(func.prototype, obj.__proto__);
}

function testJITCallPrototype_4() {
  var expr = 0;
  var func = function() {
    return 0;
  };
  
  for (var i = 0; i < 50; i++)
    assertEquals(expr, func());

  var obj = new func();
  assertEquals("[object Object]", Object.prototype.toString.call(obj));
  assertEquals(func.prototype, obj.__proto__);
}

function testJITCallPrototype_5() {
  var expr = NaN;
  var func = function() {
    return NaN;
  };
  
  for (var i = 0; i < 50; i++)
    assertEquals(expr, func());

  var obj = new func();
  assertEquals("[object Object]", Object.prototype.toString.call(obj));
  assertEquals(func.prototype, obj.__proto__);
}

function testJITCallPrototype_6() {
  var expr = +Infinity;
  var func = function() {
    return +Infinity;
  };
  
  for (var i = 0; i < 50; i++)
    assertEquals(expr, func());

  var obj = new func();
  assertEquals("[object Object]", Object.prototype.toString.call(obj));
  assertEquals(func.prototype, obj.__proto__);
}

function testJITCallPrototype_7() {
  var expr = +Infinity;
  var func = function() {
    return +Infinity;
  };
  
  for (var i = 0; i < 50; i++)
    assertEquals(expr, func());

  var obj = new func();
  assertEquals("[object Object]", Object.prototype.toString.call(obj));
  assertEquals(func.prototype, obj.__proto__);
}

function testJITCallPrototype_8() {
  var expr = true;
  var func = function() {
    return true;
  };
  
  for (var i = 0; i < 50; i++)
    assertEquals(expr, func());

  var obj = new func();
  assertEquals("[object Object]", Object.prototype.toString.call(obj));
  assertEquals(func.prototype, obj.__proto__);
}

function testJITCallPrototype_9() {
  var expr = false;
  var func = function() {
    return false;
  };
  
  for (var i = 0; i < 50; i++)
    assertEquals(expr, func());

  var obj = new func();
  assertEquals("[object Object]", Object.prototype.toString.call(obj));
  assertEquals(func.prototype, obj.__proto__);
}

function testJITCallPrototype_10() {
  var expr = Number();
  var func = function() {
    return Number();
  };
  
  for (var i = 0; i < 50; i++)
    assertEquals(expr, func());

  var obj = new func();
  assertEquals("[object Object]", Object.prototype.toString.call(obj));
  assertEquals(func.prototype, obj.__proto__);
}

function testJITCallPrototype_11() {
  var expr = Number(42);
  var func = function() {
    return Number(42);
  };
  
  for (var i = 0; i < 50; i++)
    assertEquals(expr, func());

  var obj = new func();
  assertEquals("[object Object]", Object.prototype.toString.call(obj));
  assertEquals(func.prototype, obj.__proto__);
}

function testJITCallPrototype_12() {
  var expr = String();
  var func = function() {
    return String();
  };
  
  for (var i = 0; i < 50; i++)
    assertEquals(expr, func());

  var obj = new func();
  assertEquals("[object Object]", Object.prototype.toString.call(obj));
  assertEquals(func.prototype, obj.__proto__);
}

function testJITCallPrototype_13() {
  var expr = String('a');
  var func = function() {
    return String('a');
  };
  
  for (var i = 0; i < 50; i++)
    assertEquals(expr, func());

  var obj = new func();
  assertEquals("[object Object]", Object.prototype.toString.call(obj));
  assertEquals(func.prototype, obj.__proto__);
}

function testJITCallPrototype_14() {
  var expr = ({});
  var func = function() {
    return ({});
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallPrototype_15() {
  var expr = ({a: 'b'});
  var func = function() {
    return ({a: 'b'});
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallPrototype_16() {
  var expr = (function(){return arguments;})();
  var func = function() {
    return (function(){return arguments;})();
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallPrototype_17() {
  var expr = [];
  var func = function() {
    return [];
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallPrototype_18() {
  var expr = [0];
  var func = function() {
    return [0];
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallPrototype_19() {
  var expr = [0,1];
  var func = function() {
    return [0,1];
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallPrototype_20() {
  var expr = [1,2];
  var func = function() {
    return [1,2];
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallPrototype_21() {
  var expr = new Boolean(0);
  var func = function() {
    return new Boolean(0);
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallPrototype_22() {
  var expr = new Boolean(1);
  var func = function() {
    return new Boolean(1);
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallPrototype_23() {
  var expr = new Date(2010, 1);
  var func = function() {
    return new Date(2010, 1);
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallPrototype_24() {
  var expr = new Date(NaN, 1);
  var func = function() {
    return new Date(NaN, 1);
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallPrototype_25() {
  var expr = new Date(NaN, NaN);
  var func = function() {
    return new Date(NaN, NaN);
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallPrototype_26() {
  var expr = new Date(0);
  var func = function() {
    return new Date(0);
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallPrototype_27() {
  var expr = JSON;
  var func = function() {
    return JSON;
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallPrototype_28() {
  var expr = Math;
  var func = function() {
    return Math;
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallPrototype_29() {
  var expr = new Number();
  var func = function() {
    return new Number();
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallPrototype_30() {
  var expr = new Number(42);
  var func = function() {
    return new Number(42);
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallPrototype_31() {
  var expr = Object();
  var func = function() {
    return Object();
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallPrototype_32() {
  var expr = Object(null);
  var func = function() {
    return Object(null);
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallPrototype_33() {
  var expr = Object(undefined);
  var func = function() {
    return Object(undefined);
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallPrototype_34() {
  var expr = Object('foo');
  var func = function() {
    return Object('foo');
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallPrototype_35() {
  var expr = Object(0);
  var func = function() {
    return Object(0);
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallPrototype_36() {
  var expr = Object(1);
  var func = function() {
    return Object(1);
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallPrototype_37() {
  var expr = Object(NaN);
  var func = function() {
    return Object(NaN);
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallPrototype_38() {
  var expr = Object(+Infinity);
  var func = function() {
    return Object(+Infinity);
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallPrototype_39() {
  var expr = Object(-Infinity);
  var func = function() {
    return Object(-Infinity);
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallPrototype_40() {
  var expr = Object(true);
  var func = function() {
    return Object(true);
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallPrototype_41() {
  var expr = Object(false);
  var func = function() {
    return Object(false);
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallPrototype_42() {
  var expr = new Object();
  var func = function() {
    return new Object();
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallPrototype_43() {
  var expr = new Object(null);
  var func = function() {
    return new Object(null);
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallPrototype_44() {
  var expr = new Object(undefined);
  var func = function() {
    return new Object(undefined);
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallPrototype_45() {
  var expr = new Object('foo');
  var func = function() {
    return new Object('foo');
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallPrototype_46() {
  var expr = new Object(0);
  var func = function() {
    return new Object(0);
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallPrototype_47() {
  var expr = new Object(1);
  var func = function() {
    return new Object(1);
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallPrototype_48() {
  var expr = new Object(NaN);
  var func = function() {
    return new Object(NaN);
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallPrototype_49() {
  var expr = new Object(+Infinity);
  var func = function() {
    return new Object(+Infinity);
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallPrototype_50() {
  var expr = new Object(-Infinity);
  var func = function() {
    return new Object(-Infinity);
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallPrototype_51() {
  var expr = new Object(true);
  var func = function() {
    return new Object(true);
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallPrototype_52() {
  var expr = new Object(false);
  var func = function() {
    return new Object(false);
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallPrototype_53() {
  var expr = /a/;
  var func = function() {
    return /a/;
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallPrototype_54() {
  var expr = RegExp('a');
  var func = function() {
    return RegExp('a');
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallPrototype_55() {
  var expr = RegExp(/a/);
  var func = function() {
    return RegExp(/a/);
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallPrototype_56() {
  var expr = new RegExp();
  var func = function() {
    return new RegExp();
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallPrototype_57() {
  var expr = new RegExp(/a/);
  var func = function() {
    return new RegExp(/a/);
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallPrototype_58() {
  var expr = new RegExp('a');
  var func = function() {
    return new RegExp('a');
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallPrototype_59() {
  var expr = new String();
  var func = function() {
    return new String();
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallPrototype_60() {
  var expr = new String('a');
  var func = function() {
    return new String('a');
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITCallPrototype_61() {
  var expr = (function(){});
  expr.prototype = undefined;
  var func = function() {
    return (function(){});
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  obj.prototype = undefined;
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertObjectEquals(expr, obj);
}

function testJITCallPrototype_62() {
  var expr = (function(){return 1});
  expr.prototype = undefined;
  var func = function() {
    return (function(){return 1});
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  obj.prototype = undefined;
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertObjectEquals(expr, obj);
}

function testJITCallPrototype_63() {
  var expr = (function(a){return a});
  expr.prototype = undefined;
  var func = function() {
    return (function(a){return a});
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  obj.prototype = undefined;
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertObjectEquals(expr, obj);
}

function testJITCallPrototype_64() {
  var expr = Function();
  expr.prototype = undefined;
  var func = function() {
    return Function();
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  obj.prototype = undefined;
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertObjectEquals(expr, obj);
}

function testJITCallPrototype_65() {
  var expr = Function('return 1');
  expr.prototype = undefined;
  var func = function() {
    return Function('return 1');
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  obj.prototype = undefined;
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertObjectEquals(expr, obj);
}

function testJITCallPrototype_66() {
  var expr = Function('a', 'return a');
  expr.prototype = undefined;
  var func = function() {
    return Function('a', 'return a');
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  obj.prototype = undefined;
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertObjectEquals(expr, obj);
}

function testJITCallPrototype_67() {
  var expr = new Function();
  expr.prototype = undefined;
  var func = function() {
    return new Function();
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  obj.prototype = undefined;
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertObjectEquals(expr, obj);
}

function testJITCallPrototype_68() {
  var expr = new Function('return 1');
  expr.prototype = undefined;
  var func = function() {
    return new Function('return 1');
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  obj.prototype = undefined;
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertObjectEquals(expr, obj);
}

function testJITCallPrototype_69() {
  var expr = new Function('a', 'return a');
  expr.prototype = undefined;
  var func = function() {
    return new Function('a', 'return a');
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
  }

  var obj = new func();
  obj.prototype = undefined;
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalEvalNoPrototype_0() {
  var expr = undefined;
  var func = eval("(function(){return eval(\"undefined\");})");
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(Object.prototype, obj.__proto__);
  }
  assertEquals(expr, func());
}

function testJITConstructEvalEvalNoPrototype_1() {
  var expr = null;
  var func = eval("(function(){return eval(\"null\");})");
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(Object.prototype, obj.__proto__);
  }
  assertEquals(expr, func());
}

function testJITConstructEvalEvalNoPrototype_2() {
  var expr = 'foo';
  var func = eval("(function(){return eval(\"'foo'\");})");
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(Object.prototype, obj.__proto__);
  }
  assertEquals(expr, func());
}

function testJITConstructEvalEvalNoPrototype_3() {
  var expr = 1;
  var func = eval("(function(){return eval(\"1\");})");
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(Object.prototype, obj.__proto__);
  }
  assertEquals(expr, func());
}

function testJITConstructEvalEvalNoPrototype_4() {
  var expr = 0;
  var func = eval("(function(){return eval(\"0\");})");
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(Object.prototype, obj.__proto__);
  }
  assertEquals(expr, func());
}

function testJITConstructEvalEvalNoPrototype_5() {
  var expr = NaN;
  var func = eval("(function(){return eval(\"NaN\");})");
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(Object.prototype, obj.__proto__);
  }
  assertEquals(expr, func());
}

function testJITConstructEvalEvalNoPrototype_6() {
  var expr = +Infinity;
  var func = eval("(function(){return eval(\"+Infinity\");})");
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(Object.prototype, obj.__proto__);
  }
  assertEquals(expr, func());
}

function testJITConstructEvalEvalNoPrototype_7() {
  var expr = +Infinity;
  var func = eval("(function(){return eval(\"+Infinity\");})");
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(Object.prototype, obj.__proto__);
  }
  assertEquals(expr, func());
}

function testJITConstructEvalEvalNoPrototype_8() {
  var expr = true;
  var func = eval("(function(){return eval(\"true\");})");
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(Object.prototype, obj.__proto__);
  }
  assertEquals(expr, func());
}

function testJITConstructEvalEvalNoPrototype_9() {
  var expr = false;
  var func = eval("(function(){return eval(\"false\");})");
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(Object.prototype, obj.__proto__);
  }
  assertEquals(expr, func());
}

function testJITConstructEvalEvalNoPrototype_10() {
  var expr = Number();
  var func = eval("(function(){return eval(\"Number()\");})");
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(Object.prototype, obj.__proto__);
  }
  assertEquals(expr, func());
}

function testJITConstructEvalEvalNoPrototype_11() {
  var expr = Number(42);
  var func = eval("(function(){return eval(\"Number(42)\");})");
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(Object.prototype, obj.__proto__);
  }
  assertEquals(expr, func());
}

function testJITConstructEvalEvalNoPrototype_12() {
  var expr = String();
  var func = eval("(function(){return eval(\"String()\");})");
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(Object.prototype, obj.__proto__);
  }
  assertEquals(expr, func());
}

function testJITConstructEvalEvalNoPrototype_13() {
  var expr = String('a');
  var func = eval("(function(){return eval(\"String('a')\");})");
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(Object.prototype, obj.__proto__);
  }
  assertEquals(expr, func());
}

function testJITConstructEvalEvalPrototype_0() {
  var expr = undefined;
  var func = eval("(function(){return eval(\"undefined\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(func.prototype, obj.__proto__);
  }
  assertEquals(expr, func());
}

function testJITConstructEvalEvalPrototype_1() {
  var expr = null;
  var func = eval("(function(){return eval(\"null\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(func.prototype, obj.__proto__);
  }
  assertEquals(expr, func());
}

function testJITConstructEvalEvalPrototype_2() {
  var expr = 'foo';
  var func = eval("(function(){return eval(\"'foo'\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(func.prototype, obj.__proto__);
  }
  assertEquals(expr, func());
}

function testJITConstructEvalEvalPrototype_3() {
  var expr = 1;
  var func = eval("(function(){return eval(\"1\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(func.prototype, obj.__proto__);
  }
  assertEquals(expr, func());
}

function testJITConstructEvalEvalPrototype_4() {
  var expr = 0;
  var func = eval("(function(){return eval(\"0\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(func.prototype, obj.__proto__);
  }
  assertEquals(expr, func());
}

function testJITConstructEvalEvalPrototype_5() {
  var expr = NaN;
  var func = eval("(function(){return eval(\"NaN\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(func.prototype, obj.__proto__);
  }
  assertEquals(expr, func());
}

function testJITConstructEvalEvalPrototype_6() {
  var expr = +Infinity;
  var func = eval("(function(){return eval(\"+Infinity\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(func.prototype, obj.__proto__);
  }
  assertEquals(expr, func());
}

function testJITConstructEvalEvalPrototype_7() {
  var expr = +Infinity;
  var func = eval("(function(){return eval(\"+Infinity\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(func.prototype, obj.__proto__);
  }
  assertEquals(expr, func());
}

function testJITConstructEvalEvalPrototype_8() {
  var expr = true;
  var func = eval("(function(){return eval(\"true\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(func.prototype, obj.__proto__);
  }
  assertEquals(expr, func());
}

function testJITConstructEvalEvalPrototype_9() {
  var expr = false;
  var func = eval("(function(){return eval(\"false\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(func.prototype, obj.__proto__);
  }
  assertEquals(expr, func());
}

function testJITConstructEvalEvalPrototype_10() {
  var expr = Number();
  var func = eval("(function(){return eval(\"Number()\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(func.prototype, obj.__proto__);
  }
  assertEquals(expr, func());
}

function testJITConstructEvalEvalPrototype_11() {
  var expr = Number(42);
  var func = eval("(function(){return eval(\"Number(42)\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(func.prototype, obj.__proto__);
  }
  assertEquals(expr, func());
}

function testJITConstructEvalEvalPrototype_12() {
  var expr = String();
  var func = eval("(function(){return eval(\"String()\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(func.prototype, obj.__proto__);
  }
  assertEquals(expr, func());
}

function testJITConstructEvalEvalPrototype_13() {
  var expr = String('a');
  var func = eval("(function(){return eval(\"String('a')\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(func.prototype, obj.__proto__);
  }
  assertEquals(expr, func());
}

function testJITConstructEvalEvalPrototype_14() {
  var expr = ({});
  var func = eval("(function(){return eval(\"({})\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalEvalPrototype_15() {
  var expr = ({a: 'b'});
  var func = eval("(function(){return eval(\"({a: 'b'})\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalEvalPrototype_16() {
  var expr = (function(){return arguments;})();
  var func = eval("(function(){return eval(\"(function(){return arguments;})()\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalEvalPrototype_17() {
  var expr = [];
  var func = eval("(function(){return eval(\"[]\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalEvalPrototype_18() {
  var expr = [0];
  var func = eval("(function(){return eval(\"[0]\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalEvalPrototype_19() {
  var expr = [0,1];
  var func = eval("(function(){return eval(\"[0,1]\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalEvalPrototype_20() {
  var expr = [1,2];
  var func = eval("(function(){return eval(\"[1,2]\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalEvalPrototype_21() {
  var expr = new Boolean(0);
  var func = eval("(function(){return eval(\"new Boolean(0)\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalEvalPrototype_22() {
  var expr = new Boolean(1);
  var func = eval("(function(){return eval(\"new Boolean(1)\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalEvalPrototype_23() {
  var expr = new Date(2010, 1);
  var func = eval("(function(){return eval(\"new Date(2010, 1)\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalEvalPrototype_24() {
  var expr = new Date(NaN, 1);
  var func = eval("(function(){return eval(\"new Date(NaN, 1)\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalEvalPrototype_25() {
  var expr = new Date(NaN, NaN);
  var func = eval("(function(){return eval(\"new Date(NaN, NaN)\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalEvalPrototype_26() {
  var expr = new Date(0);
  var func = eval("(function(){return eval(\"new Date(0)\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalEvalPrototype_27() {
  var expr = JSON;
  var func = eval("(function(){return eval(\"JSON\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalEvalPrototype_28() {
  var expr = Math;
  var func = eval("(function(){return eval(\"Math\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalEvalPrototype_29() {
  var expr = new Number();
  var func = eval("(function(){return eval(\"new Number()\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalEvalPrototype_30() {
  var expr = new Number(42);
  var func = eval("(function(){return eval(\"new Number(42)\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalEvalPrototype_31() {
  var expr = Object();
  var func = eval("(function(){return eval(\"Object()\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalEvalPrototype_32() {
  var expr = Object(null);
  var func = eval("(function(){return eval(\"Object(null)\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalEvalPrototype_33() {
  var expr = Object(undefined);
  var func = eval("(function(){return eval(\"Object(undefined)\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalEvalPrototype_34() {
  var expr = Object('foo');
  var func = eval("(function(){return eval(\"Object('foo')\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalEvalPrototype_35() {
  var expr = Object(0);
  var func = eval("(function(){return eval(\"Object(0)\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalEvalPrototype_36() {
  var expr = Object(1);
  var func = eval("(function(){return eval(\"Object(1)\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalEvalPrototype_37() {
  var expr = Object(NaN);
  var func = eval("(function(){return eval(\"Object(NaN)\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalEvalPrototype_38() {
  var expr = Object(+Infinity);
  var func = eval("(function(){return eval(\"Object(+Infinity)\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalEvalPrototype_39() {
  var expr = Object(-Infinity);
  var func = eval("(function(){return eval(\"Object(-Infinity)\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalEvalPrototype_40() {
  var expr = Object(true);
  var func = eval("(function(){return eval(\"Object(true)\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalEvalPrototype_41() {
  var expr = Object(false);
  var func = eval("(function(){return eval(\"Object(false)\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalEvalPrototype_42() {
  var expr = new Object();
  var func = eval("(function(){return eval(\"new Object()\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalEvalPrototype_43() {
  var expr = new Object(null);
  var func = eval("(function(){return eval(\"new Object(null)\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalEvalPrototype_44() {
  var expr = new Object(undefined);
  var func = eval("(function(){return eval(\"new Object(undefined)\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalEvalPrototype_45() {
  var expr = new Object('foo');
  var func = eval("(function(){return eval(\"new Object('foo')\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalEvalPrototype_46() {
  var expr = new Object(0);
  var func = eval("(function(){return eval(\"new Object(0)\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalEvalPrototype_47() {
  var expr = new Object(1);
  var func = eval("(function(){return eval(\"new Object(1)\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalEvalPrototype_48() {
  var expr = new Object(NaN);
  var func = eval("(function(){return eval(\"new Object(NaN)\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalEvalPrototype_49() {
  var expr = new Object(+Infinity);
  var func = eval("(function(){return eval(\"new Object(+Infinity)\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalEvalPrototype_50() {
  var expr = new Object(-Infinity);
  var func = eval("(function(){return eval(\"new Object(-Infinity)\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalEvalPrototype_51() {
  var expr = new Object(true);
  var func = eval("(function(){return eval(\"new Object(true)\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalEvalPrototype_52() {
  var expr = new Object(false);
  var func = eval("(function(){return eval(\"new Object(false)\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalEvalPrototype_53() {
  var expr = /a/;
  var func = eval("(function(){return eval(\"/a/\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalEvalPrototype_54() {
  var expr = RegExp('a');
  var func = eval("(function(){return eval(\"RegExp('a')\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalEvalPrototype_55() {
  var expr = RegExp(/a/);
  var func = eval("(function(){return eval(\"RegExp(/a/)\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalEvalPrototype_56() {
  var expr = new RegExp();
  var func = eval("(function(){return eval(\"new RegExp()\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalEvalPrototype_57() {
  var expr = new RegExp(/a/);
  var func = eval("(function(){return eval(\"new RegExp(/a/)\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalEvalPrototype_58() {
  var expr = new RegExp('a');
  var func = eval("(function(){return eval(\"new RegExp('a')\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalEvalPrototype_59() {
  var expr = new String();
  var func = eval("(function(){return eval(\"new String()\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalEvalPrototype_60() {
  var expr = new String('a');
  var func = eval("(function(){return eval(\"new String('a')\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalEvalPrototype_61() {
  var expr = (function(){});
  expr.prototype = undefined;
  var func = eval("(function(){return eval(\"(function(){})\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  obj.prototype = undefined;
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalEvalPrototype_62() {
  var expr = (function(){return 1});
  expr.prototype = undefined;
  var func = eval("(function(){return eval(\"(function(){return 1})\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  obj.prototype = undefined;
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalEvalPrototype_63() {
  var expr = (function(a){return a});
  expr.prototype = undefined;
  var func = eval("(function(){return eval(\"(function(a){return a})\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  obj.prototype = undefined;
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalEvalPrototype_64() {
  var expr = Function();
  expr.prototype = undefined;
  var func = eval("(function(){return eval(\"Function()\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  obj.prototype = undefined;
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalEvalPrototype_65() {
  var expr = Function('return 1');
  expr.prototype = undefined;
  var func = eval("(function(){return eval(\"Function('return 1')\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  obj.prototype = undefined;
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalEvalPrototype_66() {
  var expr = Function('a', 'return a');
  expr.prototype = undefined;
  var func = eval("(function(){return eval(\"Function('a', 'return a')\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  obj.prototype = undefined;
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalEvalPrototype_67() {
  var expr = new Function();
  expr.prototype = undefined;
  var func = eval("(function(){return eval(\"new Function()\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  obj.prototype = undefined;
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalEvalPrototype_68() {
  var expr = new Function('return 1');
  expr.prototype = undefined;
  var func = eval("(function(){return eval(\"new Function('return 1')\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  obj.prototype = undefined;
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalEvalPrototype_69() {
  var expr = new Function('a', 'return a');
  expr.prototype = undefined;
  var func = eval("(function(){return eval(\"new Function('a', 'return a')\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  obj.prototype = undefined;
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalNoPrototype_0() {
  var expr = undefined;
  var func = eval("(function(){return undefined;})");
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(Object.prototype, obj.__proto__);
  }
  assertEquals(expr, func());
}

function testJITConstructEvalNoPrototype_1() {
  var expr = null;
  var func = eval("(function(){return null;})");
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(Object.prototype, obj.__proto__);
  }
  assertEquals(expr, func());
}

function testJITConstructEvalNoPrototype_2() {
  var expr = 'foo';
  var func = eval("(function(){return 'foo';})");
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(Object.prototype, obj.__proto__);
  }
  assertEquals(expr, func());
}

function testJITConstructEvalNoPrototype_3() {
  var expr = 1;
  var func = eval("(function(){return 1;})");
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(Object.prototype, obj.__proto__);
  }
  assertEquals(expr, func());
}

function testJITConstructEvalNoPrototype_4() {
  var expr = 0;
  var func = eval("(function(){return 0;})");
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(Object.prototype, obj.__proto__);
  }
  assertEquals(expr, func());
}

function testJITConstructEvalNoPrototype_5() {
  var expr = NaN;
  var func = eval("(function(){return NaN;})");
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(Object.prototype, obj.__proto__);
  }
  assertEquals(expr, func());
}

function testJITConstructEvalNoPrototype_6() {
  var expr = +Infinity;
  var func = eval("(function(){return +Infinity;})");
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(Object.prototype, obj.__proto__);
  }
  assertEquals(expr, func());
}

function testJITConstructEvalNoPrototype_7() {
  var expr = +Infinity;
  var func = eval("(function(){return +Infinity;})");
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(Object.prototype, obj.__proto__);
  }
  assertEquals(expr, func());
}

function testJITConstructEvalNoPrototype_8() {
  var expr = true;
  var func = eval("(function(){return true;})");
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(Object.prototype, obj.__proto__);
  }
  assertEquals(expr, func());
}

function testJITConstructEvalNoPrototype_9() {
  var expr = false;
  var func = eval("(function(){return false;})");
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(Object.prototype, obj.__proto__);
  }
  assertEquals(expr, func());
}

function testJITConstructEvalNoPrototype_10() {
  var expr = Number();
  var func = eval("(function(){return Number();})");
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(Object.prototype, obj.__proto__);
  }
  assertEquals(expr, func());
}

function testJITConstructEvalNoPrototype_11() {
  var expr = Number(42);
  var func = eval("(function(){return Number(42);})");
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(Object.prototype, obj.__proto__);
  }
  assertEquals(expr, func());
}

function testJITConstructEvalNoPrototype_12() {
  var expr = String();
  var func = eval("(function(){return String();})");
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(Object.prototype, obj.__proto__);
  }
  assertEquals(expr, func());
}

function testJITConstructEvalNoPrototype_13() {
  var expr = String('a');
  var func = eval("(function(){return String('a');})");
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(Object.prototype, obj.__proto__);
  }
  assertEquals(expr, func());
}

function testJITConstructEvalPrototype_0() {
  var expr = undefined;
  var func = eval("(function(){return undefined;})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(func.prototype, obj.__proto__);
  }
  assertEquals(expr, func());
}

function testJITConstructEvalPrototype_1() {
  var expr = null;
  var func = eval("(function(){return null;})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(func.prototype, obj.__proto__);
  }
  assertEquals(expr, func());
}

function testJITConstructEvalPrototype_2() {
  var expr = 'foo';
  var func = eval("(function(){return 'foo';})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(func.prototype, obj.__proto__);
  }
  assertEquals(expr, func());
}

function testJITConstructEvalPrototype_3() {
  var expr = 1;
  var func = eval("(function(){return 1;})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(func.prototype, obj.__proto__);
  }
  assertEquals(expr, func());
}

function testJITConstructEvalPrototype_4() {
  var expr = 0;
  var func = eval("(function(){return 0;})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(func.prototype, obj.__proto__);
  }
  assertEquals(expr, func());
}

function testJITConstructEvalPrototype_5() {
  var expr = NaN;
  var func = eval("(function(){return NaN;})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(func.prototype, obj.__proto__);
  }
  assertEquals(expr, func());
}

function testJITConstructEvalPrototype_6() {
  var expr = +Infinity;
  var func = eval("(function(){return +Infinity;})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(func.prototype, obj.__proto__);
  }
  assertEquals(expr, func());
}

function testJITConstructEvalPrototype_7() {
  var expr = +Infinity;
  var func = eval("(function(){return +Infinity;})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(func.prototype, obj.__proto__);
  }
  assertEquals(expr, func());
}

function testJITConstructEvalPrototype_8() {
  var expr = true;
  var func = eval("(function(){return true;})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(func.prototype, obj.__proto__);
  }
  assertEquals(expr, func());
}

function testJITConstructEvalPrototype_9() {
  var expr = false;
  var func = eval("(function(){return false;})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(func.prototype, obj.__proto__);
  }
  assertEquals(expr, func());
}

function testJITConstructEvalPrototype_10() {
  var expr = Number();
  var func = eval("(function(){return Number();})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(func.prototype, obj.__proto__);
  }
  assertEquals(expr, func());
}

function testJITConstructEvalPrototype_11() {
  var expr = Number(42);
  var func = eval("(function(){return Number(42);})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(func.prototype, obj.__proto__);
  }
  assertEquals(expr, func());
}

function testJITConstructEvalPrototype_12() {
  var expr = String();
  var func = eval("(function(){return String();})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(func.prototype, obj.__proto__);
  }
  assertEquals(expr, func());
}

function testJITConstructEvalPrototype_13() {
  var expr = String('a');
  var func = eval("(function(){return String('a');})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(func.prototype, obj.__proto__);
  }
  assertEquals(expr, func());
}

function testJITConstructEvalPrototype_14() {
  var expr = ({});
  var func = eval("(function(){return ({});})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalPrototype_15() {
  var expr = ({a: 'b'});
  var func = eval("(function(){return ({a: 'b'});})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalPrototype_16() {
  var expr = (function(){return arguments;})();
  var func = eval("(function(){return (function(){return arguments;})();})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalPrototype_17() {
  var expr = [];
  var func = eval("(function(){return [];})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalPrototype_18() {
  var expr = [0];
  var func = eval("(function(){return [0];})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalPrototype_19() {
  var expr = [0,1];
  var func = eval("(function(){return [0,1];})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalPrototype_20() {
  var expr = [1,2];
  var func = eval("(function(){return [1,2];})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalPrototype_21() {
  var expr = new Boolean(0);
  var func = eval("(function(){return new Boolean(0);})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalPrototype_22() {
  var expr = new Boolean(1);
  var func = eval("(function(){return new Boolean(1);})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalPrototype_23() {
  var expr = new Date(2010, 1);
  var func = eval("(function(){return new Date(2010, 1);})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalPrototype_24() {
  var expr = new Date(NaN, 1);
  var func = eval("(function(){return new Date(NaN, 1);})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalPrototype_25() {
  var expr = new Date(NaN, NaN);
  var func = eval("(function(){return new Date(NaN, NaN);})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalPrototype_26() {
  var expr = new Date(0);
  var func = eval("(function(){return new Date(0);})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalPrototype_27() {
  var expr = JSON;
  var func = eval("(function(){return JSON;})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalPrototype_28() {
  var expr = Math;
  var func = eval("(function(){return Math;})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalPrototype_29() {
  var expr = new Number();
  var func = eval("(function(){return new Number();})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalPrototype_30() {
  var expr = new Number(42);
  var func = eval("(function(){return new Number(42);})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalPrototype_31() {
  var expr = Object();
  var func = eval("(function(){return Object();})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalPrototype_32() {
  var expr = Object(null);
  var func = eval("(function(){return Object(null);})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalPrototype_33() {
  var expr = Object(undefined);
  var func = eval("(function(){return Object(undefined);})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalPrototype_34() {
  var expr = Object('foo');
  var func = eval("(function(){return Object('foo');})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalPrototype_35() {
  var expr = Object(0);
  var func = eval("(function(){return Object(0);})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalPrototype_36() {
  var expr = Object(1);
  var func = eval("(function(){return Object(1);})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalPrototype_37() {
  var expr = Object(NaN);
  var func = eval("(function(){return Object(NaN);})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalPrototype_38() {
  var expr = Object(+Infinity);
  var func = eval("(function(){return Object(+Infinity);})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalPrototype_39() {
  var expr = Object(-Infinity);
  var func = eval("(function(){return Object(-Infinity);})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalPrototype_40() {
  var expr = Object(true);
  var func = eval("(function(){return Object(true);})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalPrototype_41() {
  var expr = Object(false);
  var func = eval("(function(){return Object(false);})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalPrototype_42() {
  var expr = new Object();
  var func = eval("(function(){return new Object();})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalPrototype_43() {
  var expr = new Object(null);
  var func = eval("(function(){return new Object(null);})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalPrototype_44() {
  var expr = new Object(undefined);
  var func = eval("(function(){return new Object(undefined);})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalPrototype_45() {
  var expr = new Object('foo');
  var func = eval("(function(){return new Object('foo');})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalPrototype_46() {
  var expr = new Object(0);
  var func = eval("(function(){return new Object(0);})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalPrototype_47() {
  var expr = new Object(1);
  var func = eval("(function(){return new Object(1);})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalPrototype_48() {
  var expr = new Object(NaN);
  var func = eval("(function(){return new Object(NaN);})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalPrototype_49() {
  var expr = new Object(+Infinity);
  var func = eval("(function(){return new Object(+Infinity);})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalPrototype_50() {
  var expr = new Object(-Infinity);
  var func = eval("(function(){return new Object(-Infinity);})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalPrototype_51() {
  var expr = new Object(true);
  var func = eval("(function(){return new Object(true);})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalPrototype_52() {
  var expr = new Object(false);
  var func = eval("(function(){return new Object(false);})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalPrototype_53() {
  var expr = /a/;
  var func = eval("(function(){return /a/;})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalPrototype_54() {
  var expr = RegExp('a');
  var func = eval("(function(){return RegExp('a');})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalPrototype_55() {
  var expr = RegExp(/a/);
  var func = eval("(function(){return RegExp(/a/);})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalPrototype_56() {
  var expr = new RegExp();
  var func = eval("(function(){return new RegExp();})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalPrototype_57() {
  var expr = new RegExp(/a/);
  var func = eval("(function(){return new RegExp(/a/);})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalPrototype_58() {
  var expr = new RegExp('a');
  var func = eval("(function(){return new RegExp('a');})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalPrototype_59() {
  var expr = new String();
  var func = eval("(function(){return new String();})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalPrototype_60() {
  var expr = new String('a');
  var func = eval("(function(){return new String('a');})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalPrototype_61() {
  var expr = (function(){});
  expr.prototype = undefined;
  var func = eval("(function(){return (function(){});})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  obj.prototype = undefined;
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalPrototype_62() {
  var expr = (function(){return 1});
  expr.prototype = undefined;
  var func = eval("(function(){return (function(){return 1});})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  obj.prototype = undefined;
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalPrototype_63() {
  var expr = (function(a){return a});
  expr.prototype = undefined;
  var func = eval("(function(){return (function(a){return a});})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  obj.prototype = undefined;
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalPrototype_64() {
  var expr = Function();
  expr.prototype = undefined;
  var func = eval("(function(){return Function();})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  obj.prototype = undefined;
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalPrototype_65() {
  var expr = Function('return 1');
  expr.prototype = undefined;
  var func = eval("(function(){return Function('return 1');})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  obj.prototype = undefined;
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalPrototype_66() {
  var expr = Function('a', 'return a');
  expr.prototype = undefined;
  var func = eval("(function(){return Function('a', 'return a');})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  obj.prototype = undefined;
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalPrototype_67() {
  var expr = new Function();
  expr.prototype = undefined;
  var func = eval("(function(){return new Function();})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  obj.prototype = undefined;
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalPrototype_68() {
  var expr = new Function('return 1');
  expr.prototype = undefined;
  var func = eval("(function(){return new Function('return 1');})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  obj.prototype = undefined;
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertObjectEquals(expr, obj);
}

function testJITConstructEvalPrototype_69() {
  var expr = new Function('a', 'return a');
  expr.prototype = undefined;
  var func = eval("(function(){return new Function('a', 'return a');})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  obj.prototype = undefined;
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertObjectEquals(expr, obj);
}

function testJITConstructNoPrototype_0() {
  var expr = undefined;
  var func = function() {
    return undefined;
  };
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(Object.prototype, obj.__proto__);
  }
  assertEquals(expr, func());
}

function testJITConstructNoPrototype_1() {
  var expr = null;
  var func = function() {
    return null;
  };
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(Object.prototype, obj.__proto__);
  }
  assertEquals(expr, func());
}

function testJITConstructNoPrototype_2() {
  var expr = 'foo';
  var func = function() {
    return 'foo';
  };
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(Object.prototype, obj.__proto__);
  }
  assertEquals(expr, func());
}

function testJITConstructNoPrototype_3() {
  var expr = 1;
  var func = function() {
    return 1;
  };
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(Object.prototype, obj.__proto__);
  }
  assertEquals(expr, func());
}

function testJITConstructNoPrototype_4() {
  var expr = 0;
  var func = function() {
    return 0;
  };
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(Object.prototype, obj.__proto__);
  }
  assertEquals(expr, func());
}

function testJITConstructNoPrototype_5() {
  var expr = NaN;
  var func = function() {
    return NaN;
  };
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(Object.prototype, obj.__proto__);
  }
  assertEquals(expr, func());
}

function testJITConstructNoPrototype_6() {
  var expr = +Infinity;
  var func = function() {
    return +Infinity;
  };
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(Object.prototype, obj.__proto__);
  }
  assertEquals(expr, func());
}

function testJITConstructNoPrototype_7() {
  var expr = +Infinity;
  var func = function() {
    return +Infinity;
  };
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(Object.prototype, obj.__proto__);
  }
  assertEquals(expr, func());
}

function testJITConstructNoPrototype_8() {
  var expr = true;
  var func = function() {
    return true;
  };
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(Object.prototype, obj.__proto__);
  }
  assertEquals(expr, func());
}

function testJITConstructNoPrototype_9() {
  var expr = false;
  var func = function() {
    return false;
  };
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(Object.prototype, obj.__proto__);
  }
  assertEquals(expr, func());
}

function testJITConstructNoPrototype_10() {
  var expr = Number();
  var func = function() {
    return Number();
  };
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(Object.prototype, obj.__proto__);
  }
  assertEquals(expr, func());
}

function testJITConstructNoPrototype_11() {
  var expr = Number(42);
  var func = function() {
    return Number(42);
  };
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(Object.prototype, obj.__proto__);
  }
  assertEquals(expr, func());
}

function testJITConstructNoPrototype_12() {
  var expr = String();
  var func = function() {
    return String();
  };
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(Object.prototype, obj.__proto__);
  }
  assertEquals(expr, func());
}

function testJITConstructNoPrototype_13() {
  var expr = String('a');
  var func = function() {
    return String('a');
  };
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(Object.prototype, obj.__proto__);
  }
  assertEquals(expr, func());
}

function testJITConstructPrototype_0() {
  var expr = undefined;
  var func = function() {
    return undefined;
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(func.prototype, obj.__proto__);
  }
  assertEquals(expr, func());
}

function testJITConstructPrototype_1() {
  var expr = null;
  var func = function() {
    return null;
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(func.prototype, obj.__proto__);
  }
  assertEquals(expr, func());
}

function testJITConstructPrototype_2() {
  var expr = 'foo';
  var func = function() {
    return 'foo';
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(func.prototype, obj.__proto__);
  }
  assertEquals(expr, func());
}

function testJITConstructPrototype_3() {
  var expr = 1;
  var func = function() {
    return 1;
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(func.prototype, obj.__proto__);
  }
  assertEquals(expr, func());
}

function testJITConstructPrototype_4() {
  var expr = 0;
  var func = function() {
    return 0;
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(func.prototype, obj.__proto__);
  }
  assertEquals(expr, func());
}

function testJITConstructPrototype_5() {
  var expr = NaN;
  var func = function() {
    return NaN;
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(func.prototype, obj.__proto__);
  }
  assertEquals(expr, func());
}

function testJITConstructPrototype_6() {
  var expr = +Infinity;
  var func = function() {
    return +Infinity;
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(func.prototype, obj.__proto__);
  }
  assertEquals(expr, func());
}

function testJITConstructPrototype_7() {
  var expr = +Infinity;
  var func = function() {
    return +Infinity;
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(func.prototype, obj.__proto__);
  }
  assertEquals(expr, func());
}

function testJITConstructPrototype_8() {
  var expr = true;
  var func = function() {
    return true;
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(func.prototype, obj.__proto__);
  }
  assertEquals(expr, func());
}

function testJITConstructPrototype_9() {
  var expr = false;
  var func = function() {
    return false;
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(func.prototype, obj.__proto__);
  }
  assertEquals(expr, func());
}

function testJITConstructPrototype_10() {
  var expr = Number();
  var func = function() {
    return Number();
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(func.prototype, obj.__proto__);
  }
  assertEquals(expr, func());
}

function testJITConstructPrototype_11() {
  var expr = Number(42);
  var func = function() {
    return Number(42);
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(func.prototype, obj.__proto__);
  }
  assertEquals(expr, func());
}

function testJITConstructPrototype_12() {
  var expr = String();
  var func = function() {
    return String();
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(func.prototype, obj.__proto__);
  }
  assertEquals(expr, func());
}

function testJITConstructPrototype_13() {
  var expr = String('a');
  var func = function() {
    return String('a');
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(func.prototype, obj.__proto__);
  }
  assertEquals(expr, func());
}

function testJITConstructPrototype_14() {
  var expr = ({});
  var func = function() {
    return ({});
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructPrototype_15() {
  var expr = ({a: 'b'});
  var func = function() {
    return ({a: 'b'});
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructPrototype_16() {
  var expr = (function(){return arguments;})();
  var func = function() {
    return (function(){return arguments;})();
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructPrototype_17() {
  var expr = [];
  var func = function() {
    return [];
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructPrototype_18() {
  var expr = [0];
  var func = function() {
    return [0];
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructPrototype_19() {
  var expr = [0,1];
  var func = function() {
    return [0,1];
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructPrototype_20() {
  var expr = [1,2];
  var func = function() {
    return [1,2];
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructPrototype_21() {
  var expr = new Boolean(0);
  var func = function() {
    return new Boolean(0);
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructPrototype_22() {
  var expr = new Boolean(1);
  var func = function() {
    return new Boolean(1);
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructPrototype_23() {
  var expr = new Date(2010, 1);
  var func = function() {
    return new Date(2010, 1);
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructPrototype_24() {
  var expr = new Date(NaN, 1);
  var func = function() {
    return new Date(NaN, 1);
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructPrototype_25() {
  var expr = new Date(NaN, NaN);
  var func = function() {
    return new Date(NaN, NaN);
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructPrototype_26() {
  var expr = new Date(0);
  var func = function() {
    return new Date(0);
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructPrototype_27() {
  var expr = JSON;
  var func = function() {
    return JSON;
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructPrototype_28() {
  var expr = Math;
  var func = function() {
    return Math;
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructPrototype_29() {
  var expr = new Number();
  var func = function() {
    return new Number();
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructPrototype_30() {
  var expr = new Number(42);
  var func = function() {
    return new Number(42);
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructPrototype_31() {
  var expr = Object();
  var func = function() {
    return Object();
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructPrototype_32() {
  var expr = Object(null);
  var func = function() {
    return Object(null);
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructPrototype_33() {
  var expr = Object(undefined);
  var func = function() {
    return Object(undefined);
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructPrototype_34() {
  var expr = Object('foo');
  var func = function() {
    return Object('foo');
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructPrototype_35() {
  var expr = Object(0);
  var func = function() {
    return Object(0);
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructPrototype_36() {
  var expr = Object(1);
  var func = function() {
    return Object(1);
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructPrototype_37() {
  var expr = Object(NaN);
  var func = function() {
    return Object(NaN);
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructPrototype_38() {
  var expr = Object(+Infinity);
  var func = function() {
    return Object(+Infinity);
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructPrototype_39() {
  var expr = Object(-Infinity);
  var func = function() {
    return Object(-Infinity);
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructPrototype_40() {
  var expr = Object(true);
  var func = function() {
    return Object(true);
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructPrototype_41() {
  var expr = Object(false);
  var func = function() {
    return Object(false);
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructPrototype_42() {
  var expr = new Object();
  var func = function() {
    return new Object();
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructPrototype_43() {
  var expr = new Object(null);
  var func = function() {
    return new Object(null);
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructPrototype_44() {
  var expr = new Object(undefined);
  var func = function() {
    return new Object(undefined);
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructPrototype_45() {
  var expr = new Object('foo');
  var func = function() {
    return new Object('foo');
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructPrototype_46() {
  var expr = new Object(0);
  var func = function() {
    return new Object(0);
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructPrototype_47() {
  var expr = new Object(1);
  var func = function() {
    return new Object(1);
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructPrototype_48() {
  var expr = new Object(NaN);
  var func = function() {
    return new Object(NaN);
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructPrototype_49() {
  var expr = new Object(+Infinity);
  var func = function() {
    return new Object(+Infinity);
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructPrototype_50() {
  var expr = new Object(-Infinity);
  var func = function() {
    return new Object(-Infinity);
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructPrototype_51() {
  var expr = new Object(true);
  var func = function() {
    return new Object(true);
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructPrototype_52() {
  var expr = new Object(false);
  var func = function() {
    return new Object(false);
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructPrototype_53() {
  var expr = /a/;
  var func = function() {
    return /a/;
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructPrototype_54() {
  var expr = RegExp('a');
  var func = function() {
    return RegExp('a');
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructPrototype_55() {
  var expr = RegExp(/a/);
  var func = function() {
    return RegExp(/a/);
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructPrototype_56() {
  var expr = new RegExp();
  var func = function() {
    return new RegExp();
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructPrototype_57() {
  var expr = new RegExp(/a/);
  var func = function() {
    return new RegExp(/a/);
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructPrototype_58() {
  var expr = new RegExp('a');
  var func = function() {
    return new RegExp('a');
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructPrototype_59() {
  var expr = new String();
  var func = function() {
    return new String();
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructPrototype_60() {
  var expr = new String('a');
  var func = function() {
    return new String('a');
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertEquals(expr.__proto__, obj.__proto__);
  assertObjectEquals(expr, obj);
}

function testJITConstructPrototype_61() {
  var expr = (function(){});
  expr.prototype = undefined;
  var func = function() {
    return (function(){});
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  obj.prototype = undefined;
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertObjectEquals(expr, obj);
}

function testJITConstructPrototype_62() {
  var expr = (function(){return 1});
  expr.prototype = undefined;
  var func = function() {
    return (function(){return 1});
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  obj.prototype = undefined;
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertObjectEquals(expr, obj);
}

function testJITConstructPrototype_63() {
  var expr = (function(a){return a});
  expr.prototype = undefined;
  var func = function() {
    return (function(a){return a});
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  obj.prototype = undefined;
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertObjectEquals(expr, obj);
}

function testJITConstructPrototype_64() {
  var expr = Function();
  expr.prototype = undefined;
  var func = function() {
    return Function();
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  obj.prototype = undefined;
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertObjectEquals(expr, obj);
}

function testJITConstructPrototype_65() {
  var expr = Function('return 1');
  expr.prototype = undefined;
  var func = function() {
    return Function('return 1');
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  obj.prototype = undefined;
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertObjectEquals(expr, obj);
}

function testJITConstructPrototype_66() {
  var expr = Function('a', 'return a');
  expr.prototype = undefined;
  var func = function() {
    return Function('a', 'return a');
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  obj.prototype = undefined;
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertObjectEquals(expr, obj);
}

function testJITConstructPrototype_67() {
  var expr = new Function();
  expr.prototype = undefined;
  var func = function() {
    return new Function();
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  obj.prototype = undefined;
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertObjectEquals(expr, obj);
}

function testJITConstructPrototype_68() {
  var expr = new Function('return 1');
  expr.prototype = undefined;
  var func = function() {
    return new Function('return 1');
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  obj.prototype = undefined;
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertObjectEquals(expr, obj);
}

function testJITConstructPrototype_69() {
  var expr = new Function('a', 'return a');
  expr.prototype = undefined;
  var func = function() {
    return new Function('a', 'return a');
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
  }
  var obj = func();
  obj.prototype = undefined;
  assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
  assertObjectEquals(expr, obj);
}

function testJITMixedEvalEvalNoPrototype_0() {
  var expr = undefined;
  var func = eval("(function(){return eval(\"undefined\");})");
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(Object.prototype, obj.__proto__);
    assertEquals(expr, func());
  }
}

function testJITMixedEvalEvalNoPrototype_1() {
  var expr = null;
  var func = eval("(function(){return eval(\"null\");})");
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(Object.prototype, obj.__proto__);
    assertEquals(expr, func());
  }
}

function testJITMixedEvalEvalNoPrototype_2() {
  var expr = 'foo';
  var func = eval("(function(){return eval(\"'foo'\");})");
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(Object.prototype, obj.__proto__);
    assertEquals(expr, func());
  }
}

function testJITMixedEvalEvalNoPrototype_3() {
  var expr = 1;
  var func = eval("(function(){return eval(\"1\");})");
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(Object.prototype, obj.__proto__);
    assertEquals(expr, func());
  }
}

function testJITMixedEvalEvalNoPrototype_4() {
  var expr = 0;
  var func = eval("(function(){return eval(\"0\");})");
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(Object.prototype, obj.__proto__);
    assertEquals(expr, func());
  }
}

function testJITMixedEvalEvalNoPrototype_5() {
  var expr = NaN;
  var func = eval("(function(){return eval(\"NaN\");})");
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(Object.prototype, obj.__proto__);
    assertEquals(expr, func());
  }
}

function testJITMixedEvalEvalNoPrototype_6() {
  var expr = +Infinity;
  var func = eval("(function(){return eval(\"+Infinity\");})");
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(Object.prototype, obj.__proto__);
    assertEquals(expr, func());
  }
}

function testJITMixedEvalEvalNoPrototype_7() {
  var expr = +Infinity;
  var func = eval("(function(){return eval(\"+Infinity\");})");
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(Object.prototype, obj.__proto__);
    assertEquals(expr, func());
  }
}

function testJITMixedEvalEvalNoPrototype_8() {
  var expr = true;
  var func = eval("(function(){return eval(\"true\");})");
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(Object.prototype, obj.__proto__);
    assertEquals(expr, func());
  }
}

function testJITMixedEvalEvalNoPrototype_9() {
  var expr = false;
  var func = eval("(function(){return eval(\"false\");})");
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(Object.prototype, obj.__proto__);
    assertEquals(expr, func());
  }
}

function testJITMixedEvalEvalNoPrototype_10() {
  var expr = Number();
  var func = eval("(function(){return eval(\"Number()\");})");
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(Object.prototype, obj.__proto__);
    assertEquals(expr, func());
  }
}

function testJITMixedEvalEvalNoPrototype_11() {
  var expr = Number(42);
  var func = eval("(function(){return eval(\"Number(42)\");})");
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(Object.prototype, obj.__proto__);
    assertEquals(expr, func());
  }
}

function testJITMixedEvalEvalNoPrototype_12() {
  var expr = String();
  var func = eval("(function(){return eval(\"String()\");})");
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(Object.prototype, obj.__proto__);
    assertEquals(expr, func());
  }
}

function testJITMixedEvalEvalNoPrototype_13() {
  var expr = String('a');
  var func = eval("(function(){return eval(\"String('a')\");})");
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(Object.prototype, obj.__proto__);
    assertEquals(expr, func());
  }
}

function testJITMixedEvalEvalPrototype_0() {
  var expr = undefined;
  var func = eval("(function(){return eval(\"undefined\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(func.prototype, obj.__proto__);
    assertEquals(expr, func());
  }
}

function testJITMixedEvalEvalPrototype_1() {
  var expr = null;
  var func = eval("(function(){return eval(\"null\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(func.prototype, obj.__proto__);
    assertEquals(expr, func());
  }
}

function testJITMixedEvalEvalPrototype_2() {
  var expr = 'foo';
  var func = eval("(function(){return eval(\"'foo'\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(func.prototype, obj.__proto__);
    assertEquals(expr, func());
  }
}

function testJITMixedEvalEvalPrototype_3() {
  var expr = 1;
  var func = eval("(function(){return eval(\"1\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(func.prototype, obj.__proto__);
    assertEquals(expr, func());
  }
}

function testJITMixedEvalEvalPrototype_4() {
  var expr = 0;
  var func = eval("(function(){return eval(\"0\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(func.prototype, obj.__proto__);
    assertEquals(expr, func());
  }
}

function testJITMixedEvalEvalPrototype_5() {
  var expr = NaN;
  var func = eval("(function(){return eval(\"NaN\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(func.prototype, obj.__proto__);
    assertEquals(expr, func());
  }
}

function testJITMixedEvalEvalPrototype_6() {
  var expr = +Infinity;
  var func = eval("(function(){return eval(\"+Infinity\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(func.prototype, obj.__proto__);
    assertEquals(expr, func());
  }
}

function testJITMixedEvalEvalPrototype_7() {
  var expr = +Infinity;
  var func = eval("(function(){return eval(\"+Infinity\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(func.prototype, obj.__proto__);
    assertEquals(expr, func());
  }
}

function testJITMixedEvalEvalPrototype_8() {
  var expr = true;
  var func = eval("(function(){return eval(\"true\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(func.prototype, obj.__proto__);
    assertEquals(expr, func());
  }
}

function testJITMixedEvalEvalPrototype_9() {
  var expr = false;
  var func = eval("(function(){return eval(\"false\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(func.prototype, obj.__proto__);
    assertEquals(expr, func());
  }
}

function testJITMixedEvalEvalPrototype_10() {
  var expr = Number();
  var func = eval("(function(){return eval(\"Number()\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(func.prototype, obj.__proto__);
    assertEquals(expr, func());
  }
}

function testJITMixedEvalEvalPrototype_11() {
  var expr = Number(42);
  var func = eval("(function(){return eval(\"Number(42)\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(func.prototype, obj.__proto__);
    assertEquals(expr, func());
  }
}

function testJITMixedEvalEvalPrototype_12() {
  var expr = String();
  var func = eval("(function(){return eval(\"String()\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(func.prototype, obj.__proto__);
    assertEquals(expr, func());
  }
}

function testJITMixedEvalEvalPrototype_13() {
  var expr = String('a');
  var func = eval("(function(){return eval(\"String('a')\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(func.prototype, obj.__proto__);
    assertEquals(expr, func());
  }
}

function testJITMixedEvalEvalPrototype_14() {
  var expr = ({});
  var func = eval("(function(){return eval(\"({})\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalEvalPrototype_15() {
  var expr = ({a: 'b'});
  var func = eval("(function(){return eval(\"({a: 'b'})\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalEvalPrototype_16() {
  var expr = (function(){return arguments;})();
  var func = eval("(function(){return eval(\"(function(){return arguments;})()\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalEvalPrototype_17() {
  var expr = [];
  var func = eval("(function(){return eval(\"[]\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalEvalPrototype_18() {
  var expr = [0];
  var func = eval("(function(){return eval(\"[0]\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalEvalPrototype_19() {
  var expr = [0,1];
  var func = eval("(function(){return eval(\"[0,1]\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalEvalPrototype_20() {
  var expr = [1,2];
  var func = eval("(function(){return eval(\"[1,2]\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalEvalPrototype_21() {
  var expr = new Boolean(0);
  var func = eval("(function(){return eval(\"new Boolean(0)\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalEvalPrototype_22() {
  var expr = new Boolean(1);
  var func = eval("(function(){return eval(\"new Boolean(1)\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalEvalPrototype_23() {
  var expr = new Date(2010, 1);
  var func = eval("(function(){return eval(\"new Date(2010, 1)\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalEvalPrototype_24() {
  var expr = new Date(NaN, 1);
  var func = eval("(function(){return eval(\"new Date(NaN, 1)\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalEvalPrototype_25() {
  var expr = new Date(NaN, NaN);
  var func = eval("(function(){return eval(\"new Date(NaN, NaN)\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalEvalPrototype_26() {
  var expr = new Date(0);
  var func = eval("(function(){return eval(\"new Date(0)\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalEvalPrototype_27() {
  var expr = JSON;
  var func = eval("(function(){return eval(\"JSON\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalEvalPrototype_28() {
  var expr = Math;
  var func = eval("(function(){return eval(\"Math\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalEvalPrototype_29() {
  var expr = new Number();
  var func = eval("(function(){return eval(\"new Number()\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalEvalPrototype_30() {
  var expr = new Number(42);
  var func = eval("(function(){return eval(\"new Number(42)\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalEvalPrototype_31() {
  var expr = Object();
  var func = eval("(function(){return eval(\"Object()\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalEvalPrototype_32() {
  var expr = Object(null);
  var func = eval("(function(){return eval(\"Object(null)\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalEvalPrototype_33() {
  var expr = Object(undefined);
  var func = eval("(function(){return eval(\"Object(undefined)\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalEvalPrototype_34() {
  var expr = Object('foo');
  var func = eval("(function(){return eval(\"Object('foo')\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalEvalPrototype_35() {
  var expr = Object(0);
  var func = eval("(function(){return eval(\"Object(0)\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalEvalPrototype_36() {
  var expr = Object(1);
  var func = eval("(function(){return eval(\"Object(1)\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalEvalPrototype_37() {
  var expr = Object(NaN);
  var func = eval("(function(){return eval(\"Object(NaN)\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalEvalPrototype_38() {
  var expr = Object(+Infinity);
  var func = eval("(function(){return eval(\"Object(+Infinity)\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalEvalPrototype_39() {
  var expr = Object(-Infinity);
  var func = eval("(function(){return eval(\"Object(-Infinity)\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalEvalPrototype_40() {
  var expr = Object(true);
  var func = eval("(function(){return eval(\"Object(true)\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalEvalPrototype_41() {
  var expr = Object(false);
  var func = eval("(function(){return eval(\"Object(false)\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalEvalPrototype_42() {
  var expr = new Object();
  var func = eval("(function(){return eval(\"new Object()\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalEvalPrototype_43() {
  var expr = new Object(null);
  var func = eval("(function(){return eval(\"new Object(null)\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalEvalPrototype_44() {
  var expr = new Object(undefined);
  var func = eval("(function(){return eval(\"new Object(undefined)\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalEvalPrototype_45() {
  var expr = new Object('foo');
  var func = eval("(function(){return eval(\"new Object('foo')\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalEvalPrototype_46() {
  var expr = new Object(0);
  var func = eval("(function(){return eval(\"new Object(0)\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalEvalPrototype_47() {
  var expr = new Object(1);
  var func = eval("(function(){return eval(\"new Object(1)\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalEvalPrototype_48() {
  var expr = new Object(NaN);
  var func = eval("(function(){return eval(\"new Object(NaN)\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalEvalPrototype_49() {
  var expr = new Object(+Infinity);
  var func = eval("(function(){return eval(\"new Object(+Infinity)\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalEvalPrototype_50() {
  var expr = new Object(-Infinity);
  var func = eval("(function(){return eval(\"new Object(-Infinity)\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalEvalPrototype_51() {
  var expr = new Object(true);
  var func = eval("(function(){return eval(\"new Object(true)\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalEvalPrototype_52() {
  var expr = new Object(false);
  var func = eval("(function(){return eval(\"new Object(false)\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalEvalPrototype_53() {
  var expr = /a/;
  var func = eval("(function(){return eval(\"/a/\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalEvalPrototype_54() {
  var expr = RegExp('a');
  var func = eval("(function(){return eval(\"RegExp('a')\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalEvalPrototype_55() {
  var expr = RegExp(/a/);
  var func = eval("(function(){return eval(\"RegExp(/a/)\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalEvalPrototype_56() {
  var expr = new RegExp();
  var func = eval("(function(){return eval(\"new RegExp()\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalEvalPrototype_57() {
  var expr = new RegExp(/a/);
  var func = eval("(function(){return eval(\"new RegExp(/a/)\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalEvalPrototype_58() {
  var expr = new RegExp('a');
  var func = eval("(function(){return eval(\"new RegExp('a')\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalEvalPrototype_59() {
  var expr = new String();
  var func = eval("(function(){return eval(\"new String()\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalEvalPrototype_60() {
  var expr = new String('a');
  var func = eval("(function(){return eval(\"new String('a')\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalEvalPrototype_61() {
  var expr = (function(){});
  expr.prototype = undefined;
  var func = eval("(function(){return eval(\"(function(){})\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
    var obj = func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalEvalPrototype_62() {
  var expr = (function(){return 1});
  expr.prototype = undefined;
  var func = eval("(function(){return eval(\"(function(){return 1})\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
    var obj = func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalEvalPrototype_63() {
  var expr = (function(a){return a});
  expr.prototype = undefined;
  var func = eval("(function(){return eval(\"(function(a){return a})\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
    var obj = func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalEvalPrototype_64() {
  var expr = Function();
  expr.prototype = undefined;
  var func = eval("(function(){return eval(\"Function()\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
    var obj = func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalEvalPrototype_65() {
  var expr = Function('return 1');
  expr.prototype = undefined;
  var func = eval("(function(){return eval(\"Function('return 1')\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
    var obj = func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalEvalPrototype_66() {
  var expr = Function('a', 'return a');
  expr.prototype = undefined;
  var func = eval("(function(){return eval(\"Function('a', 'return a')\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
    var obj = func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalEvalPrototype_67() {
  var expr = new Function();
  expr.prototype = undefined;
  var func = eval("(function(){return eval(\"new Function()\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
    var obj = func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalEvalPrototype_68() {
  var expr = new Function('return 1');
  expr.prototype = undefined;
  var func = eval("(function(){return eval(\"new Function('return 1')\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
    var obj = func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalEvalPrototype_69() {
  var expr = new Function('a', 'return a');
  expr.prototype = undefined;
  var func = eval("(function(){return eval(\"new Function('a', 'return a')\");})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
    var obj = func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalNoPrototype_0() {
  var expr = undefined;
  var func = eval("(function(){return undefined;})");
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(Object.prototype, obj.__proto__);
    assertEquals(expr, func());
  }
}

function testJITMixedEvalNoPrototype_1() {
  var expr = null;
  var func = eval("(function(){return null;})");
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(Object.prototype, obj.__proto__);
    assertEquals(expr, func());
  }
}

function testJITMixedEvalNoPrototype_2() {
  var expr = 'foo';
  var func = eval("(function(){return 'foo';})");
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(Object.prototype, obj.__proto__);
    assertEquals(expr, func());
  }
}

function testJITMixedEvalNoPrototype_3() {
  var expr = 1;
  var func = eval("(function(){return 1;})");
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(Object.prototype, obj.__proto__);
    assertEquals(expr, func());
  }
}

function testJITMixedEvalNoPrototype_4() {
  var expr = 0;
  var func = eval("(function(){return 0;})");
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(Object.prototype, obj.__proto__);
    assertEquals(expr, func());
  }
}

function testJITMixedEvalNoPrototype_5() {
  var expr = NaN;
  var func = eval("(function(){return NaN;})");
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(Object.prototype, obj.__proto__);
    assertEquals(expr, func());
  }
}

function testJITMixedEvalNoPrototype_6() {
  var expr = +Infinity;
  var func = eval("(function(){return +Infinity;})");
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(Object.prototype, obj.__proto__);
    assertEquals(expr, func());
  }
}

function testJITMixedEvalNoPrototype_7() {
  var expr = +Infinity;
  var func = eval("(function(){return +Infinity;})");
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(Object.prototype, obj.__proto__);
    assertEquals(expr, func());
  }
}

function testJITMixedEvalNoPrototype_8() {
  var expr = true;
  var func = eval("(function(){return true;})");
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(Object.prototype, obj.__proto__);
    assertEquals(expr, func());
  }
}

function testJITMixedEvalNoPrototype_9() {
  var expr = false;
  var func = eval("(function(){return false;})");
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(Object.prototype, obj.__proto__);
    assertEquals(expr, func());
  }
}

function testJITMixedEvalNoPrototype_10() {
  var expr = Number();
  var func = eval("(function(){return Number();})");
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(Object.prototype, obj.__proto__);
    assertEquals(expr, func());
  }
}

function testJITMixedEvalNoPrototype_11() {
  var expr = Number(42);
  var func = eval("(function(){return Number(42);})");
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(Object.prototype, obj.__proto__);
    assertEquals(expr, func());
  }
}

function testJITMixedEvalNoPrototype_12() {
  var expr = String();
  var func = eval("(function(){return String();})");
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(Object.prototype, obj.__proto__);
    assertEquals(expr, func());
  }
}

function testJITMixedEvalNoPrototype_13() {
  var expr = String('a');
  var func = eval("(function(){return String('a');})");
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(Object.prototype, obj.__proto__);
    assertEquals(expr, func());
  }
}

function testJITMixedEvalPrototype_0() {
  var expr = undefined;
  var func = eval("(function(){return undefined;})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(func.prototype, obj.__proto__);
    assertEquals(expr, func());
  }
}

function testJITMixedEvalPrototype_1() {
  var expr = null;
  var func = eval("(function(){return null;})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(func.prototype, obj.__proto__);
    assertEquals(expr, func());
  }
}

function testJITMixedEvalPrototype_2() {
  var expr = 'foo';
  var func = eval("(function(){return 'foo';})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(func.prototype, obj.__proto__);
    assertEquals(expr, func());
  }
}

function testJITMixedEvalPrototype_3() {
  var expr = 1;
  var func = eval("(function(){return 1;})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(func.prototype, obj.__proto__);
    assertEquals(expr, func());
  }
}

function testJITMixedEvalPrototype_4() {
  var expr = 0;
  var func = eval("(function(){return 0;})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(func.prototype, obj.__proto__);
    assertEquals(expr, func());
  }
}

function testJITMixedEvalPrototype_5() {
  var expr = NaN;
  var func = eval("(function(){return NaN;})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(func.prototype, obj.__proto__);
    assertEquals(expr, func());
  }
}

function testJITMixedEvalPrototype_6() {
  var expr = +Infinity;
  var func = eval("(function(){return +Infinity;})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(func.prototype, obj.__proto__);
    assertEquals(expr, func());
  }
}

function testJITMixedEvalPrototype_7() {
  var expr = +Infinity;
  var func = eval("(function(){return +Infinity;})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(func.prototype, obj.__proto__);
    assertEquals(expr, func());
  }
}

function testJITMixedEvalPrototype_8() {
  var expr = true;
  var func = eval("(function(){return true;})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(func.prototype, obj.__proto__);
    assertEquals(expr, func());
  }
}

function testJITMixedEvalPrototype_9() {
  var expr = false;
  var func = eval("(function(){return false;})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(func.prototype, obj.__proto__);
    assertEquals(expr, func());
  }
}

function testJITMixedEvalPrototype_10() {
  var expr = Number();
  var func = eval("(function(){return Number();})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(func.prototype, obj.__proto__);
    assertEquals(expr, func());
  }
}

function testJITMixedEvalPrototype_11() {
  var expr = Number(42);
  var func = eval("(function(){return Number(42);})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(func.prototype, obj.__proto__);
    assertEquals(expr, func());
  }
}

function testJITMixedEvalPrototype_12() {
  var expr = String();
  var func = eval("(function(){return String();})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(func.prototype, obj.__proto__);
    assertEquals(expr, func());
  }
}

function testJITMixedEvalPrototype_13() {
  var expr = String('a');
  var func = eval("(function(){return String('a');})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(func.prototype, obj.__proto__);
    assertEquals(expr, func());
  }
}

function testJITMixedEvalPrototype_14() {
  var expr = ({});
  var func = eval("(function(){return ({});})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalPrototype_15() {
  var expr = ({a: 'b'});
  var func = eval("(function(){return ({a: 'b'});})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalPrototype_16() {
  var expr = (function(){return arguments;})();
  var func = eval("(function(){return (function(){return arguments;})();})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalPrototype_17() {
  var expr = [];
  var func = eval("(function(){return [];})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalPrototype_18() {
  var expr = [0];
  var func = eval("(function(){return [0];})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalPrototype_19() {
  var expr = [0,1];
  var func = eval("(function(){return [0,1];})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalPrototype_20() {
  var expr = [1,2];
  var func = eval("(function(){return [1,2];})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalPrototype_21() {
  var expr = new Boolean(0);
  var func = eval("(function(){return new Boolean(0);})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalPrototype_22() {
  var expr = new Boolean(1);
  var func = eval("(function(){return new Boolean(1);})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalPrototype_23() {
  var expr = new Date(2010, 1);
  var func = eval("(function(){return new Date(2010, 1);})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalPrototype_24() {
  var expr = new Date(NaN, 1);
  var func = eval("(function(){return new Date(NaN, 1);})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalPrototype_25() {
  var expr = new Date(NaN, NaN);
  var func = eval("(function(){return new Date(NaN, NaN);})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalPrototype_26() {
  var expr = new Date(0);
  var func = eval("(function(){return new Date(0);})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalPrototype_27() {
  var expr = JSON;
  var func = eval("(function(){return JSON;})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalPrototype_28() {
  var expr = Math;
  var func = eval("(function(){return Math;})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalPrototype_29() {
  var expr = new Number();
  var func = eval("(function(){return new Number();})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalPrototype_30() {
  var expr = new Number(42);
  var func = eval("(function(){return new Number(42);})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalPrototype_31() {
  var expr = Object();
  var func = eval("(function(){return Object();})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalPrototype_32() {
  var expr = Object(null);
  var func = eval("(function(){return Object(null);})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalPrototype_33() {
  var expr = Object(undefined);
  var func = eval("(function(){return Object(undefined);})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalPrototype_34() {
  var expr = Object('foo');
  var func = eval("(function(){return Object('foo');})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalPrototype_35() {
  var expr = Object(0);
  var func = eval("(function(){return Object(0);})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalPrototype_36() {
  var expr = Object(1);
  var func = eval("(function(){return Object(1);})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalPrototype_37() {
  var expr = Object(NaN);
  var func = eval("(function(){return Object(NaN);})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalPrototype_38() {
  var expr = Object(+Infinity);
  var func = eval("(function(){return Object(+Infinity);})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalPrototype_39() {
  var expr = Object(-Infinity);
  var func = eval("(function(){return Object(-Infinity);})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalPrototype_40() {
  var expr = Object(true);
  var func = eval("(function(){return Object(true);})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalPrototype_41() {
  var expr = Object(false);
  var func = eval("(function(){return Object(false);})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalPrototype_42() {
  var expr = new Object();
  var func = eval("(function(){return new Object();})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalPrototype_43() {
  var expr = new Object(null);
  var func = eval("(function(){return new Object(null);})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalPrototype_44() {
  var expr = new Object(undefined);
  var func = eval("(function(){return new Object(undefined);})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalPrototype_45() {
  var expr = new Object('foo');
  var func = eval("(function(){return new Object('foo');})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalPrototype_46() {
  var expr = new Object(0);
  var func = eval("(function(){return new Object(0);})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalPrototype_47() {
  var expr = new Object(1);
  var func = eval("(function(){return new Object(1);})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalPrototype_48() {
  var expr = new Object(NaN);
  var func = eval("(function(){return new Object(NaN);})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalPrototype_49() {
  var expr = new Object(+Infinity);
  var func = eval("(function(){return new Object(+Infinity);})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalPrototype_50() {
  var expr = new Object(-Infinity);
  var func = eval("(function(){return new Object(-Infinity);})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalPrototype_51() {
  var expr = new Object(true);
  var func = eval("(function(){return new Object(true);})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalPrototype_52() {
  var expr = new Object(false);
  var func = eval("(function(){return new Object(false);})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalPrototype_53() {
  var expr = /a/;
  var func = eval("(function(){return /a/;})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalPrototype_54() {
  var expr = RegExp('a');
  var func = eval("(function(){return RegExp('a');})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalPrototype_55() {
  var expr = RegExp(/a/);
  var func = eval("(function(){return RegExp(/a/);})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalPrototype_56() {
  var expr = new RegExp();
  var func = eval("(function(){return new RegExp();})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalPrototype_57() {
  var expr = new RegExp(/a/);
  var func = eval("(function(){return new RegExp(/a/);})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalPrototype_58() {
  var expr = new RegExp('a');
  var func = eval("(function(){return new RegExp('a');})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalPrototype_59() {
  var expr = new String();
  var func = eval("(function(){return new String();})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalPrototype_60() {
  var expr = new String('a');
  var func = eval("(function(){return new String('a');})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalPrototype_61() {
  var expr = (function(){});
  expr.prototype = undefined;
  var func = eval("(function(){return (function(){});})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
    var obj = func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalPrototype_62() {
  var expr = (function(){return 1});
  expr.prototype = undefined;
  var func = eval("(function(){return (function(){return 1});})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
    var obj = func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalPrototype_63() {
  var expr = (function(a){return a});
  expr.prototype = undefined;
  var func = eval("(function(){return (function(a){return a});})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
    var obj = func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalPrototype_64() {
  var expr = Function();
  expr.prototype = undefined;
  var func = eval("(function(){return Function();})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
    var obj = func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalPrototype_65() {
  var expr = Function('return 1');
  expr.prototype = undefined;
  var func = eval("(function(){return Function('return 1');})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
    var obj = func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalPrototype_66() {
  var expr = Function('a', 'return a');
  expr.prototype = undefined;
  var func = eval("(function(){return Function('a', 'return a');})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
    var obj = func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalPrototype_67() {
  var expr = new Function();
  expr.prototype = undefined;
  var func = eval("(function(){return new Function();})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
    var obj = func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalPrototype_68() {
  var expr = new Function('return 1');
  expr.prototype = undefined;
  var func = eval("(function(){return new Function('return 1');})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
    var obj = func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedEvalPrototype_69() {
  var expr = new Function('a', 'return a');
  expr.prototype = undefined;
  var func = eval("(function(){return new Function('a', 'return a');})");
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
    var obj = func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedNoPrototype_0() {
  var expr = undefined;
  var func = function() {
    return undefined;
  };
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(Object.prototype, obj.__proto__);
    assertEquals(expr, func());
  }
}

function testJITMixedNoPrototype_1() {
  var expr = null;
  var func = function() {
    return null;
  };
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(Object.prototype, obj.__proto__);
    assertEquals(expr, func());
  }
}

function testJITMixedNoPrototype_2() {
  var expr = 'foo';
  var func = function() {
    return 'foo';
  };
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(Object.prototype, obj.__proto__);
    assertEquals(expr, func());
  }
}

function testJITMixedNoPrototype_3() {
  var expr = 1;
  var func = function() {
    return 1;
  };
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(Object.prototype, obj.__proto__);
    assertEquals(expr, func());
  }
}

function testJITMixedNoPrototype_4() {
  var expr = 0;
  var func = function() {
    return 0;
  };
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(Object.prototype, obj.__proto__);
    assertEquals(expr, func());
  }
}

function testJITMixedNoPrototype_5() {
  var expr = NaN;
  var func = function() {
    return NaN;
  };
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(Object.prototype, obj.__proto__);
    assertEquals(expr, func());
  }
}

function testJITMixedNoPrototype_6() {
  var expr = +Infinity;
  var func = function() {
    return +Infinity;
  };
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(Object.prototype, obj.__proto__);
    assertEquals(expr, func());
  }
}

function testJITMixedNoPrototype_7() {
  var expr = +Infinity;
  var func = function() {
    return +Infinity;
  };
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(Object.prototype, obj.__proto__);
    assertEquals(expr, func());
  }
}

function testJITMixedNoPrototype_8() {
  var expr = true;
  var func = function() {
    return true;
  };
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(Object.prototype, obj.__proto__);
    assertEquals(expr, func());
  }
}

function testJITMixedNoPrototype_9() {
  var expr = false;
  var func = function() {
    return false;
  };
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(Object.prototype, obj.__proto__);
    assertEquals(expr, func());
  }
}

function testJITMixedNoPrototype_10() {
  var expr = Number();
  var func = function() {
    return Number();
  };
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(Object.prototype, obj.__proto__);
    assertEquals(expr, func());
  }
}

function testJITMixedNoPrototype_11() {
  var expr = Number(42);
  var func = function() {
    return Number(42);
  };
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(Object.prototype, obj.__proto__);
    assertEquals(expr, func());
  }
}

function testJITMixedNoPrototype_12() {
  var expr = String();
  var func = function() {
    return String();
  };
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(Object.prototype, obj.__proto__);
    assertEquals(expr, func());
  }
}

function testJITMixedNoPrototype_13() {
  var expr = String('a');
  var func = function() {
    return String('a');
  };
  func.prototype = undefined;
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(Object.prototype, obj.__proto__);
    assertEquals(expr, func());
  }
}

function testJITMixedPrototype_0() {
  var expr = undefined;
  var func = function() {
    return undefined;
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(func.prototype, obj.__proto__);
    assertEquals(expr, func());
  }
}

function testJITMixedPrototype_1() {
  var expr = null;
  var func = function() {
    return null;
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(func.prototype, obj.__proto__);
    assertEquals(expr, func());
  }
}

function testJITMixedPrototype_2() {
  var expr = 'foo';
  var func = function() {
    return 'foo';
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(func.prototype, obj.__proto__);
    assertEquals(expr, func());
  }
}

function testJITMixedPrototype_3() {
  var expr = 1;
  var func = function() {
    return 1;
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(func.prototype, obj.__proto__);
    assertEquals(expr, func());
  }
}

function testJITMixedPrototype_4() {
  var expr = 0;
  var func = function() {
    return 0;
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(func.prototype, obj.__proto__);
    assertEquals(expr, func());
  }
}

function testJITMixedPrototype_5() {
  var expr = NaN;
  var func = function() {
    return NaN;
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(func.prototype, obj.__proto__);
    assertEquals(expr, func());
  }
}

function testJITMixedPrototype_6() {
  var expr = +Infinity;
  var func = function() {
    return +Infinity;
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(func.prototype, obj.__proto__);
    assertEquals(expr, func());
  }
}

function testJITMixedPrototype_7() {
  var expr = +Infinity;
  var func = function() {
    return +Infinity;
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(func.prototype, obj.__proto__);
    assertEquals(expr, func());
  }
}

function testJITMixedPrototype_8() {
  var expr = true;
  var func = function() {
    return true;
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(func.prototype, obj.__proto__);
    assertEquals(expr, func());
  }
}

function testJITMixedPrototype_9() {
  var expr = false;
  var func = function() {
    return false;
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(func.prototype, obj.__proto__);
    assertEquals(expr, func());
  }
}

function testJITMixedPrototype_10() {
  var expr = Number();
  var func = function() {
    return Number();
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(func.prototype, obj.__proto__);
    assertEquals(expr, func());
  }
}

function testJITMixedPrototype_11() {
  var expr = Number(42);
  var func = function() {
    return Number(42);
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(func.prototype, obj.__proto__);
    assertEquals(expr, func());
  }
}

function testJITMixedPrototype_12() {
  var expr = String();
  var func = function() {
    return String();
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(func.prototype, obj.__proto__);
    assertEquals(expr, func());
  }
}

function testJITMixedPrototype_13() {
  var expr = String('a');
  var func = function() {
    return String('a');
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals("[object Object]", Object.prototype.toString.call(obj));
    assertEquals(func.prototype, obj.__proto__);
    assertEquals(expr, func());
  }
}

function testJITMixedPrototype_14() {
  var expr = ({});
  var func = function() {
    return ({});
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedPrototype_15() {
  var expr = ({a: 'b'});
  var func = function() {
    return ({a: 'b'});
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedPrototype_16() {
  var expr = (function(){return arguments;})();
  var func = function() {
    return (function(){return arguments;})();
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedPrototype_17() {
  var expr = [];
  var func = function() {
    return [];
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedPrototype_18() {
  var expr = [0];
  var func = function() {
    return [0];
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedPrototype_19() {
  var expr = [0,1];
  var func = function() {
    return [0,1];
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedPrototype_20() {
  var expr = [1,2];
  var func = function() {
    return [1,2];
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedPrototype_21() {
  var expr = new Boolean(0);
  var func = function() {
    return new Boolean(0);
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedPrototype_22() {
  var expr = new Boolean(1);
  var func = function() {
    return new Boolean(1);
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedPrototype_23() {
  var expr = new Date(2010, 1);
  var func = function() {
    return new Date(2010, 1);
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedPrototype_24() {
  var expr = new Date(NaN, 1);
  var func = function() {
    return new Date(NaN, 1);
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedPrototype_25() {
  var expr = new Date(NaN, NaN);
  var func = function() {
    return new Date(NaN, NaN);
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedPrototype_26() {
  var expr = new Date(0);
  var func = function() {
    return new Date(0);
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedPrototype_27() {
  var expr = JSON;
  var func = function() {
    return JSON;
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedPrototype_28() {
  var expr = Math;
  var func = function() {
    return Math;
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedPrototype_29() {
  var expr = new Number();
  var func = function() {
    return new Number();
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedPrototype_30() {
  var expr = new Number(42);
  var func = function() {
    return new Number(42);
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedPrototype_31() {
  var expr = Object();
  var func = function() {
    return Object();
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedPrototype_32() {
  var expr = Object(null);
  var func = function() {
    return Object(null);
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedPrototype_33() {
  var expr = Object(undefined);
  var func = function() {
    return Object(undefined);
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedPrototype_34() {
  var expr = Object('foo');
  var func = function() {
    return Object('foo');
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedPrototype_35() {
  var expr = Object(0);
  var func = function() {
    return Object(0);
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedPrototype_36() {
  var expr = Object(1);
  var func = function() {
    return Object(1);
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedPrototype_37() {
  var expr = Object(NaN);
  var func = function() {
    return Object(NaN);
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedPrototype_38() {
  var expr = Object(+Infinity);
  var func = function() {
    return Object(+Infinity);
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedPrototype_39() {
  var expr = Object(-Infinity);
  var func = function() {
    return Object(-Infinity);
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedPrototype_40() {
  var expr = Object(true);
  var func = function() {
    return Object(true);
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedPrototype_41() {
  var expr = Object(false);
  var func = function() {
    return Object(false);
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedPrototype_42() {
  var expr = new Object();
  var func = function() {
    return new Object();
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedPrototype_43() {
  var expr = new Object(null);
  var func = function() {
    return new Object(null);
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedPrototype_44() {
  var expr = new Object(undefined);
  var func = function() {
    return new Object(undefined);
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedPrototype_45() {
  var expr = new Object('foo');
  var func = function() {
    return new Object('foo');
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedPrototype_46() {
  var expr = new Object(0);
  var func = function() {
    return new Object(0);
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedPrototype_47() {
  var expr = new Object(1);
  var func = function() {
    return new Object(1);
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedPrototype_48() {
  var expr = new Object(NaN);
  var func = function() {
    return new Object(NaN);
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedPrototype_49() {
  var expr = new Object(+Infinity);
  var func = function() {
    return new Object(+Infinity);
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedPrototype_50() {
  var expr = new Object(-Infinity);
  var func = function() {
    return new Object(-Infinity);
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedPrototype_51() {
  var expr = new Object(true);
  var func = function() {
    return new Object(true);
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedPrototype_52() {
  var expr = new Object(false);
  var func = function() {
    return new Object(false);
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedPrototype_53() {
  var expr = /a/;
  var func = function() {
    return /a/;
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedPrototype_54() {
  var expr = RegExp('a');
  var func = function() {
    return RegExp('a');
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedPrototype_55() {
  var expr = RegExp(/a/);
  var func = function() {
    return RegExp(/a/);
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedPrototype_56() {
  var expr = new RegExp();
  var func = function() {
    return new RegExp();
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedPrototype_57() {
  var expr = new RegExp(/a/);
  var func = function() {
    return new RegExp(/a/);
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedPrototype_58() {
  var expr = new RegExp('a');
  var func = function() {
    return new RegExp('a');
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedPrototype_59() {
  var expr = new String();
  var func = function() {
    return new String();
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedPrototype_60() {
  var expr = new String('a');
  var func = function() {
    return new String('a');
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
    var obj = func();
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertEquals(expr.__proto__, obj.__proto__);
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedPrototype_61() {
  var expr = (function(){});
  expr.prototype = undefined;
  var func = function() {
    return (function(){});
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
    var obj = func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedPrototype_62() {
  var expr = (function(){return 1});
  expr.prototype = undefined;
  var func = function() {
    return (function(){return 1});
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
    var obj = func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedPrototype_63() {
  var expr = (function(a){return a});
  expr.prototype = undefined;
  var func = function() {
    return (function(a){return a});
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
    var obj = func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedPrototype_64() {
  var expr = Function();
  expr.prototype = undefined;
  var func = function() {
    return Function();
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
    var obj = func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedPrototype_65() {
  var expr = Function('return 1');
  expr.prototype = undefined;
  var func = function() {
    return Function('return 1');
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
    var obj = func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedPrototype_66() {
  var expr = Function('a', 'return a');
  expr.prototype = undefined;
  var func = function() {
    return Function('a', 'return a');
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
    var obj = func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedPrototype_67() {
  var expr = new Function();
  expr.prototype = undefined;
  var func = function() {
    return new Function();
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
    var obj = func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedPrototype_68() {
  var expr = new Function('return 1');
  expr.prototype = undefined;
  var func = function() {
    return new Function('return 1');
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
    var obj = func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
  }
}

function testJITMixedPrototype_69() {
  var expr = new Function('a', 'return a');
  expr.prototype = undefined;
  var func = function() {
    return new Function('a', 'return a');
  };
  
  for (var i = 0; i < 50; i++) {
    var obj = new func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
    var obj = func();
    obj.prototype = undefined;
    assertEquals(Object.prototype.toString.call(expr), Object.prototype.toString.call(obj));
    assertObjectEquals(expr, obj);
  }
}
