/* The 'x' accessor property makes sure the object literal expressions in tests
 0 through to 5 generate NEW_OBJECT + PUTN_IMM instead CONSTRUCT_OBJECT as it
 normally would.  CONSTRUCT_OBJECT doesn't have the problem. */

function testPut_0() {
  try {
    Object.defineProperty(Object.prototype, "y", { value: 10, writable: false, configurable: true });
    var o = { get x() {}, y: 20 };
    assertEquals(20, o.y);
  } finally {
    delete Object.prototype.y;
  }
}
testPut_0.metadata = {
  bug: "CORE-40358"
};

function testPut_1() {
  try {
    Object.defineProperty(Object.prototype, "y", { get: function () { return 10; },
                                                   set: function () { assertUnreached(); },
						   configurable: true });
    var o = { get x() {}, y: 20 };
    assertEquals(20, o.y);
  } finally {
    delete Object.prototype.y;
  }
}
testPut_1.metadata = {
  bug: "CORE-40358"
};

function testPut_2() {
  try {
    Object.defineProperty(Object.prototype, "y", { get: function() { return 10; }, configurable: true });
    var o = { get x() {}, y: 20 };
    assertEquals(20, o.y);
  } finally {
    delete Object.prototype.y;
  }
}
testPut_2.metadata = {
  bug: "CORE-40358"
};

function testPut_3() {
  try {
    Object.defineProperty(Object.prototype, "y", { value: 10, writable: false, configurable: true });
    var o = eval('({ get x() {}, y: 20 })');
    assertEquals(20, o.y);
  } finally {
    delete Object.prototype.y;
  }
}
testPut_3.metadata = {
  bug: "CORE-40358"
};

function testPut_4() {
  try {
    Object.defineProperty(Object.prototype, "y", { get: function () { return 10; },
                                                   set: function () { assertUnreached(); },
						   configurable: true });
    var o = eval('({ get x() {}, y: 20 })');
    assertEquals(20, o.y);
  } finally {
    delete Object.prototype.y;
  }
}
testPut_4.metadata = {
  bug: "CORE-40358"
};

function testPut_5() {
  try {
    Object.defineProperty(Object.prototype, "y", { get: function() { return 10; }, configurable: true });
    var o = eval('({ get x() {}, y: 20 })');
    assertEquals(20, o.y);
  } finally {
    delete Object.prototype.y;
  }
}
testPut_5.metadata = {
  bug: "CORE-40358"
};

function testPut_6() {
  try {
    Object.defineProperty(Object.prototype, "y", { value: 10, writable: false, configurable: true });
    var o = { y: 20 };
    assertEquals(20, o.y);
  } finally {
    delete Object.prototype.y;
  }
}

function testPut_7() {
  try {
    Object.defineProperty(Object.prototype, "y", { get: function () { return 10; },
                                                   set: function () { assertUnreached(); },
						   configurable: true });
    var o = { y: 20 };
    assertEquals(20, o.y);
  } finally {
    delete Object.prototype.y;
  }
}

function testPut_8() {
  try {
    Object.defineProperty(Object.prototype, "y", { get: function() { return 10; }, configurable: true });
    var o = { y: 20 };
    assertEquals(20, o.y);
  } finally {
    delete Object.prototype.y;
  }
}

function testPut_9() {
  try {
    Object.defineProperty(Object.prototype, "y", { value: 10, writable: false, configurable: true });
    var o = eval('({ y: 20 })');
    assertEquals(20, o.y);
  } finally {
    delete Object.prototype.y;
  }
}

function testPut_10() {
  try {
    Object.defineProperty(Object.prototype, "y", { get: function () { return 10; },
                                                   set: function () { assertUnreached(); },
						   configurable: true });
    var o = eval('({ y: 20 })');
    assertEquals(20, o.y);
  } finally {
    delete Object.prototype.y;
  }
}

function testPut_11() {
  try {
    Object.defineProperty(Object.prototype, "y", { get: function() { return 10; }, configurable: true });
    var o = eval('({ y: 20 })');
    assertEquals(20, o.y);
  } finally {
    delete Object.prototype.y;
  }
}

function testPut_12() {
  try {
    Object.defineProperty(Object.prototype, "0", { value: 10, writable: false, configurable: true });
    var o = { 0: 20 };
    assertEquals(20, o[0]);
  } finally {
    delete Object.prototype[0];
  }
}

function testPut_13() {
  try {
    Object.defineProperty(Object.prototype, "0", { get: function () { return 10; },
                                                   set: function () { assertUnreached(); },
						   configurable: true });
    var o = { 0: 20 };
    assertEquals(20, o[0]);
  } finally {
    delete Object.prototype[0];
  }
}

function testPut_14() {
  try {
    Object.defineProperty(Object.prototype, "0", { get: function() { return 10; }, configurable: true });
    var o = { 0: 20 };
    assertEquals(20, o[0]);
  } finally {
    delete Object.prototype[0];
  }
}

function testPut_15() {
  try {
    Object.defineProperty(Object.prototype, "0", { value: 10, writable: false, configurable: true });
    var o = eval('({ 0: 20 })');
    assertEquals(20, o[0]);
  } finally {
    delete Object.prototype[0];
  }
}

function testPut_16() {
  try {
    Object.defineProperty(Object.prototype, "0", { get: function () { return 10; },
                                                   set: function () { assertUnreached(); },
						   configurable: true });
    var o = eval('({ 0: 20 })');
    assertEquals(20, o[0]);
  } finally {
    delete Object.prototype[0];
  }
}

function testPut_17() {
  try {
    Object.defineProperty(Object.prototype, "0", { get: function() { return 10; }, configurable: true });
    var o = eval('({ 0: 20 })');
    assertEquals(20, o[0]);
  } finally {
    delete Object.prototype[0];
  }
}
