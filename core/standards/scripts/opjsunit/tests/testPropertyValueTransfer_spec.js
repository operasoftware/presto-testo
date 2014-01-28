//opjsunit: run_tests_individually
var x;
function testPropertyValueTransfer_0() {
  /* Instructions: ESI_GET, ESI_GET. */
  var x;
  x = {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    assertEquals(1, x[a][b]);
  }
}

function testPropertyValueTransfer_1() {
  /* Instructions: ESI_GET, ESI_GET. */
  /* Failure: non-object at depth 1. */
  function test(){
    var x;
    x = {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      var b = i % 2;
      if (i === 99) {
        x = null;
      }
      x[a][b];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_2() {
  /* Instructions: ESI_GET, ESI_GET. */
  /* Failure: non-object at depth 2. */
  function test(){
    var x;
    x = {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      var b = i % 2;
      if (i === 99) {
        x[a] = null;
      }
      x[a][b];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_3() {
  /* Instructions: ESI_GET, ESI_GET. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    var x;
    x = {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      var b = i % 2;
      if (i === 99) {
        delete x[a];
      }
      x[a][b];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_4() {
  /* Instructions: ESI_GET, ESI_GET. */
  /* Failure: property-no-longer-exists at depth 3. */
  var x;
  x = {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    if (i === 99) {
      delete x[a][b];
    }
    assertEquals(i === 99 ? undefined : 1, x[a][b]);
  }
}

function testPropertyValueTransfer_5() {
  /* Instructions: ESI_GET, ESI_GET. */
  /* Failure: class-changed at depth 1. */
  var x;
  x = {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    if (i === 99) {
      delete x.c;
    }
    assertEquals(1, x[a][b]);
  }
}

function testPropertyValueTransfer_6() {
  /* Instructions: ESI_GET, ESI_GET. */
  /* Failure: class-changed at depth 2. */
  var x;
  x = {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    if (i === 99) {
      delete x[a].c;
    }
    assertEquals(1, x[a][b]);
  }
}

function testPropertyValueTransfer_7() {
  /* Instructions: ESI_GET, ESI_GET. */
  /* Failure: becomes-sparse at depth 1. */
  var x;
  x = {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    if (i === 99) {
      x[10000] = 2;
    }
    assertEquals(1, x[a][b]);
  }
}

function testPropertyValueTransfer_8() {
  /* Instructions: ESI_GET, ESI_GET. */
  /* Failure: becomes-sparse at depth 2. */
  var x;
  x = {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    if (i === 99) {
      x[a][10000] = 2;
    }
    assertEquals(1, x[a][b]);
  }
}

function testPropertyValueTransfer_9() {
  /* Instructions: ESI_GET, ESI_GETI_IMM. */
  var x;
  x = {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    assertEquals(1, x[a]["0"]);
  }
}

function testPropertyValueTransfer_10() {
  /* Instructions: ESI_GET, ESI_GETI_IMM. */
  /* Failure: non-object at depth 1. */
  function test(){
    var x;
    x = {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x = null;
      }
      x[a]["0"];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_11() {
  /* Instructions: ESI_GET, ESI_GETI_IMM. */
  /* Failure: non-object at depth 2. */
  function test(){
    var x;
    x = {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x[a] = null;
      }
      x[a]["0"];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_12() {
  /* Instructions: ESI_GET, ESI_GETI_IMM. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    var x;
    x = {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        delete x[a];
      }
      x[a]["0"];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_13() {
  /* Instructions: ESI_GET, ESI_GETI_IMM. */
  /* Failure: property-no-longer-exists at depth 3. */
  var x;
  x = {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x[a]["0"];
    }
    assertEquals(i === 99 ? undefined : 1, x[a]["0"]);
  }
}

function testPropertyValueTransfer_14() {
  /* Instructions: ESI_GET, ESI_GETI_IMM. */
  /* Failure: class-changed at depth 1. */
  var x;
  x = {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x.c;
    }
    assertEquals(1, x[a]["0"]);
  }
}

function testPropertyValueTransfer_15() {
  /* Instructions: ESI_GET, ESI_GETI_IMM. */
  /* Failure: class-changed at depth 2. */
  var x;
  x = {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x[a].c;
    }
    assertEquals(1, x[a]["0"]);
  }
}

function testPropertyValueTransfer_16() {
  /* Instructions: ESI_GET, ESI_GETI_IMM. */
  /* Failure: becomes-sparse at depth 1. */
  var x;
  x = {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      x[10000] = 2;
    }
    assertEquals(1, x[a]["0"]);
  }
}

function testPropertyValueTransfer_17() {
  /* Instructions: ESI_GET, ESI_GETI_IMM. */
  /* Failure: becomes-sparse at depth 2. */
  var x;
  x = {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      x[a][10000] = 2;
    }
    assertEquals(1, x[a]["0"]);
  }
}

function testPropertyValueTransfer_18() {
  /* Instructions: ESI_GET, ESI_GETN_IMM. */
  var x;
  x = {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    assertEquals(1, x[a].a);
  }
}

function testPropertyValueTransfer_19() {
  /* Instructions: ESI_GET, ESI_GETN_IMM. */
  /* Failure: non-object at depth 1. */
  function test(){
    var x;
    x = {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x = null;
      }
      x[a].a;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_20() {
  /* Instructions: ESI_GET, ESI_GETN_IMM. */
  /* Failure: non-object at depth 2. */
  function test(){
    var x;
    x = {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x[a] = null;
      }
      x[a].a;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_21() {
  /* Instructions: ESI_GET, ESI_GETN_IMM. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    var x;
    x = {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        delete x[a];
      }
      x[a].a;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_22() {
  /* Instructions: ESI_GET, ESI_GETN_IMM. */
  /* Failure: property-no-longer-exists at depth 3. */
  var x;
  x = {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x[a].a;
    }
    assertEquals(i === 99 ? undefined : 1, x[a].a);
  }
}

function testPropertyValueTransfer_23() {
  /* Instructions: ESI_GET, ESI_GETN_IMM. */
  /* Failure: class-changed at depth 1. */
  var x;
  x = {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x.c;
    }
    assertEquals(1, x[a].a);
  }
}

function testPropertyValueTransfer_24() {
  /* Instructions: ESI_GET, ESI_GETN_IMM. */
  /* Failure: class-changed at depth 2. */
  var x;
  x = {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x[a].c;
    }
    assertEquals(1, x[a].a);
  }
}

function testPropertyValueTransfer_25() {
  /* Instructions: ESI_GET, ESI_GETN_IMM. */
  /* Failure: becomes-sparse at depth 1. */
  var x;
  x = {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      x[10000] = 2;
    }
    assertEquals(1, x[a].a);
  }
}

function testPropertyValueTransfer_26() {
  /* Instructions: ESI_GET, ESI_PUT. */
  var x;
  x = {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    x[a][b] = 42;
    assertEquals(42, x[a][b]);
  }
}

function testPropertyValueTransfer_27() {
  /* Instructions: ESI_GET, ESI_PUT. */
  /* Failure: non-object at depth 1. */
  function test(){
    var x;
    x = {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      var b = i % 2;
      if (i === 99) {
        x = null;
      }
      x[a][b] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_28() {
  /* Instructions: ESI_GET, ESI_PUT. */
  /* Failure: non-object at depth 2. */
  function test(){
    var x;
    x = {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      var b = i % 2;
      if (i === 99) {
        x[a] = null;
      }
      x[a][b] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_29() {
  /* Instructions: ESI_GET, ESI_PUT. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    var x;
    x = {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      var b = i % 2;
      if (i === 99) {
        delete x[a];
      }
      x[a][b] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_30() {
  /* Instructions: ESI_GET, ESI_PUT. */
  /* Failure: property-no-longer-exists at depth 3. */
  var x;
  x = {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    if (i === 99) {
      delete x[a][b];
    }
    x[a][b] = 42;
    assertEquals(42, x[a][b]);
  }
}

function testPropertyValueTransfer_31() {
  /* Instructions: ESI_GET, ESI_PUT. */
  /* Failure: class-changed at depth 1. */
  var x;
  x = {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    if (i === 99) {
      delete x.c;
    }
    x[a][b] = 42;
    assertEquals(42, x[a][b]);
  }
}

function testPropertyValueTransfer_32() {
  /* Instructions: ESI_GET, ESI_PUT. */
  /* Failure: class-changed at depth 2. */
  var x;
  x = {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    if (i === 99) {
      delete x[a].c;
    }
    x[a][b] = 42;
    assertEquals(42, x[a][b]);
  }
}

function testPropertyValueTransfer_33() {
  /* Instructions: ESI_GET, ESI_PUT. */
  /* Failure: becomes-sparse at depth 1. */
  var x;
  x = {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    if (i === 99) {
      x[10000] = 2;
    }
    x[a][b] = 42;
    assertEquals(42, x[a][b]);
  }
}

function testPropertyValueTransfer_34() {
  /* Instructions: ESI_GET, ESI_PUTI_IMM. */
  var x;
  x = {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    x[a]["0"] = 42;
    assertEquals(42, x[a]["0"]);
  }
}

function testPropertyValueTransfer_35() {
  /* Instructions: ESI_GET, ESI_PUTI_IMM. */
  /* Failure: non-object at depth 1. */
  function test(){
    var x;
    x = {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x = null;
      }
      x[a]["0"] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_36() {
  /* Instructions: ESI_GET, ESI_PUTI_IMM. */
  /* Failure: non-object at depth 2. */
  function test(){
    var x;
    x = {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x[a] = null;
      }
      x[a]["0"] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_37() {
  /* Instructions: ESI_GET, ESI_PUTI_IMM. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    var x;
    x = {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        delete x[a];
      }
      x[a]["0"] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_38() {
  /* Instructions: ESI_GET, ESI_PUTI_IMM. */
  /* Failure: property-no-longer-exists at depth 3. */
  var x;
  x = {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x[a]["0"];
    }
    x[a]["0"] = 42;
    assertEquals(42, x[a]["0"]);
  }
}

function testPropertyValueTransfer_39() {
  /* Instructions: ESI_GET, ESI_PUTI_IMM. */
  /* Failure: class-changed at depth 1. */
  var x;
  x = {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x.c;
    }
    x[a]["0"] = 42;
    assertEquals(42, x[a]["0"]);
  }
}

function testPropertyValueTransfer_40() {
  /* Instructions: ESI_GET, ESI_PUTI_IMM. */
  /* Failure: class-changed at depth 2. */
  var x;
  x = {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x[a].c;
    }
    x[a]["0"] = 42;
    assertEquals(42, x[a]["0"]);
  }
}

function testPropertyValueTransfer_41() {
  /* Instructions: ESI_GET, ESI_PUTI_IMM. */
  /* Failure: becomes-sparse at depth 1. */
  var x;
  x = {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      x[10000] = 2;
    }
    x[a]["0"] = 42;
    assertEquals(42, x[a]["0"]);
  }
}

function testPropertyValueTransfer_42() {
  /* Instructions: ESI_GET, ESI_PUTN_IMM. */
  var x;
  x = {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    x[a].a = 42;
    assertEquals(42, x[a].a);
  }
}

function testPropertyValueTransfer_43() {
  /* Instructions: ESI_GET, ESI_PUTN_IMM. */
  /* Failure: non-object at depth 1. */
  function test(){
    var x;
    x = {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x = null;
      }
      x[a].a = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_44() {
  /* Instructions: ESI_GET, ESI_PUTN_IMM. */
  /* Failure: non-object at depth 2. */
  function test(){
    var x;
    x = {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x[a] = null;
      }
      x[a].a = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_45() {
  /* Instructions: ESI_GET, ESI_PUTN_IMM. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    var x;
    x = {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        delete x[a];
      }
      x[a].a = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_46() {
  /* Instructions: ESI_GET, ESI_PUTN_IMM. */
  /* Failure: property-no-longer-exists at depth 3. */
  var x;
  x = {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x[a].a;
    }
    x[a].a = 42;
    assertEquals(42, x[a].a);
  }
}

function testPropertyValueTransfer_47() {
  /* Instructions: ESI_GET, ESI_PUTN_IMM. */
  /* Failure: class-changed at depth 1. */
  var x;
  x = {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x.c;
    }
    x[a].a = 42;
    assertEquals(42, x[a].a);
  }
}

function testPropertyValueTransfer_48() {
  /* Instructions: ESI_GET, ESI_PUTN_IMM. */
  /* Failure: class-changed at depth 2. */
  var x;
  x = {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x[a].c;
    }
    x[a].a = 42;
    assertEquals(42, x[a].a);
  }
}

function testPropertyValueTransfer_49() {
  /* Instructions: ESI_GET, ESI_PUTN_IMM. */
  /* Failure: becomes-sparse at depth 1. */
  var x;
  x = {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      x[10000] = 2;
    }
    x[a].a = 42;
    assertEquals(42, x[a].a);
  }
}

function testPropertyValueTransfer_50() {
  /* Instructions: ESI_GETI_IMM, ESI_GET. */
  var x;
  x = {"0": {"1": 1, "0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    assertEquals(1, x["0"][a]);
  }
}

function testPropertyValueTransfer_51() {
  /* Instructions: ESI_GETI_IMM, ESI_GET. */
  /* Failure: non-object at depth 1. */
  function test(){
    var x;
    x = {"0": {"1": 1, "0": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x = null;
      }
      x["0"][a];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_52() {
  /* Instructions: ESI_GETI_IMM, ESI_GET. */
  /* Failure: non-object at depth 2. */
  function test(){
    var x;
    x = {"0": {"1": 1, "0": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x["0"] = null;
      }
      x["0"][a];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_53() {
  /* Instructions: ESI_GETI_IMM, ESI_GET. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    var x;
    x = {"0": {"1": 1, "0": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        delete x["0"];
      }
      x["0"][a];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_54() {
  /* Instructions: ESI_GETI_IMM, ESI_GET. */
  /* Failure: property-no-longer-exists at depth 3. */
  var x;
  x = {"0": {"1": 1, "0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x["0"][a];
    }
    assertEquals(i === 99 ? undefined : 1, x["0"][a]);
  }
}

function testPropertyValueTransfer_55() {
  /* Instructions: ESI_GETI_IMM, ESI_GET. */
  /* Failure: class-changed at depth 1. */
  var x;
  x = {"0": {"1": 1, "0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x.c;
    }
    assertEquals(1, x["0"][a]);
  }
}

function testPropertyValueTransfer_56() {
  /* Instructions: ESI_GETI_IMM, ESI_GET. */
  /* Failure: class-changed at depth 2. */
  var x;
  x = {"0": {"1": 1, "0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x["0"].c;
    }
    assertEquals(1, x["0"][a]);
  }
}

function testPropertyValueTransfer_57() {
  /* Instructions: ESI_GETI_IMM, ESI_GET. */
  /* Failure: becomes-sparse at depth 1. */
  var x;
  x = {"0": {"1": 1, "0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      x[10000] = 2;
    }
    assertEquals(1, x["0"][a]);
  }
}

function testPropertyValueTransfer_58() {
  /* Instructions: ESI_GETI_IMM, ESI_GET. */
  /* Failure: becomes-sparse at depth 2. */
  var x;
  x = {"0": {"1": 1, "0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      x["0"][10000] = 2;
    }
    assertEquals(1, x["0"][a]);
  }
}

function testPropertyValueTransfer_59() {
  /* Instructions: ESI_GETI_IMM, ESI_GETI_IMM. */
  var x;
  x = {"0": {"0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    assertEquals(1, x["0"]["0"]);
  }
}

function testPropertyValueTransfer_60() {
  /* Instructions: ESI_GETI_IMM, ESI_GETI_IMM. */
  /* Failure: non-object at depth 1. */
  function test(){
    var x;
    x = {"0": {"0": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        x = null;
      }
      x["0"]["0"];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_61() {
  /* Instructions: ESI_GETI_IMM, ESI_GETI_IMM. */
  /* Failure: non-object at depth 2. */
  function test(){
    var x;
    x = {"0": {"0": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        x["0"] = null;
      }
      x["0"]["0"];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_62() {
  /* Instructions: ESI_GETI_IMM, ESI_GETI_IMM. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    var x;
    x = {"0": {"0": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        delete x["0"];
      }
      x["0"]["0"];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_63() {
  /* Instructions: ESI_GETI_IMM, ESI_GETI_IMM. */
  /* Failure: property-no-longer-exists at depth 3. */
  var x;
  x = {"0": {"0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x["0"]["0"];
    }
    assertEquals(i === 99 ? undefined : 1, x["0"]["0"]);
  }
}

function testPropertyValueTransfer_64() {
  /* Instructions: ESI_GETI_IMM, ESI_GETI_IMM. */
  /* Failure: class-changed at depth 1. */
  var x;
  x = {"0": {"0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x.c;
    }
    assertEquals(1, x["0"]["0"]);
  }
}

function testPropertyValueTransfer_65() {
  /* Instructions: ESI_GETI_IMM, ESI_GETI_IMM. */
  /* Failure: class-changed at depth 2. */
  var x;
  x = {"0": {"0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x["0"].c;
    }
    assertEquals(1, x["0"]["0"]);
  }
}

function testPropertyValueTransfer_66() {
  /* Instructions: ESI_GETI_IMM, ESI_GETI_IMM. */
  /* Failure: becomes-sparse at depth 1. */
  var x;
  x = {"0": {"0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      x[10000] = 2;
    }
    assertEquals(1, x["0"]["0"]);
  }
}

function testPropertyValueTransfer_67() {
  /* Instructions: ESI_GETI_IMM, ESI_GETI_IMM. */
  /* Failure: becomes-sparse at depth 2. */
  var x;
  x = {"0": {"0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      x["0"][10000] = 2;
    }
    assertEquals(1, x["0"]["0"]);
  }
}

function testPropertyValueTransfer_68() {
  /* Instructions: ESI_GETI_IMM, ESI_GETN_IMM. */
  var x;
  x = {"0": {"a": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    assertEquals(1, x["0"].a);
  }
}

function testPropertyValueTransfer_69() {
  /* Instructions: ESI_GETI_IMM, ESI_GETN_IMM. */
  /* Failure: non-object at depth 1. */
  function test(){
    var x;
    x = {"0": {"a": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        x = null;
      }
      x["0"].a;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_70() {
  /* Instructions: ESI_GETI_IMM, ESI_GETN_IMM. */
  /* Failure: non-object at depth 2. */
  function test(){
    var x;
    x = {"0": {"a": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        x["0"] = null;
      }
      x["0"].a;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_71() {
  /* Instructions: ESI_GETI_IMM, ESI_GETN_IMM. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    var x;
    x = {"0": {"a": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        delete x["0"];
      }
      x["0"].a;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_72() {
  /* Instructions: ESI_GETI_IMM, ESI_GETN_IMM. */
  /* Failure: property-no-longer-exists at depth 3. */
  var x;
  x = {"0": {"a": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x["0"].a;
    }
    assertEquals(i === 99 ? undefined : 1, x["0"].a);
  }
}

function testPropertyValueTransfer_73() {
  /* Instructions: ESI_GETI_IMM, ESI_GETN_IMM. */
  /* Failure: class-changed at depth 1. */
  var x;
  x = {"0": {"a": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x.c;
    }
    assertEquals(1, x["0"].a);
  }
}

function testPropertyValueTransfer_74() {
  /* Instructions: ESI_GETI_IMM, ESI_GETN_IMM. */
  /* Failure: class-changed at depth 2. */
  var x;
  x = {"0": {"a": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x["0"].c;
    }
    assertEquals(1, x["0"].a);
  }
}

function testPropertyValueTransfer_75() {
  /* Instructions: ESI_GETI_IMM, ESI_GETN_IMM. */
  /* Failure: becomes-sparse at depth 1. */
  var x;
  x = {"0": {"a": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      x[10000] = 2;
    }
    assertEquals(1, x["0"].a);
  }
}

function testPropertyValueTransfer_76() {
  /* Instructions: ESI_GETI_IMM, ESI_PUT. */
  var x;
  x = {"0": {"1": 1, "0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    x["0"][a] = 42;
    assertEquals(42, x["0"][a]);
  }
}

function testPropertyValueTransfer_77() {
  /* Instructions: ESI_GETI_IMM, ESI_PUT. */
  /* Failure: non-object at depth 1. */
  function test(){
    var x;
    x = {"0": {"1": 1, "0": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x = null;
      }
      x["0"][a] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_78() {
  /* Instructions: ESI_GETI_IMM, ESI_PUT. */
  /* Failure: non-object at depth 2. */
  function test(){
    var x;
    x = {"0": {"1": 1, "0": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x["0"] = null;
      }
      x["0"][a] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_79() {
  /* Instructions: ESI_GETI_IMM, ESI_PUT. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    var x;
    x = {"0": {"1": 1, "0": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        delete x["0"];
      }
      x["0"][a] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_80() {
  /* Instructions: ESI_GETI_IMM, ESI_PUT. */
  /* Failure: property-no-longer-exists at depth 3. */
  var x;
  x = {"0": {"1": 1, "0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x["0"][a];
    }
    x["0"][a] = 42;
    assertEquals(42, x["0"][a]);
  }
}

function testPropertyValueTransfer_81() {
  /* Instructions: ESI_GETI_IMM, ESI_PUT. */
  /* Failure: class-changed at depth 1. */
  var x;
  x = {"0": {"1": 1, "0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x.c;
    }
    x["0"][a] = 42;
    assertEquals(42, x["0"][a]);
  }
}

function testPropertyValueTransfer_82() {
  /* Instructions: ESI_GETI_IMM, ESI_PUT. */
  /* Failure: class-changed at depth 2. */
  var x;
  x = {"0": {"1": 1, "0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x["0"].c;
    }
    x["0"][a] = 42;
    assertEquals(42, x["0"][a]);
  }
}

function testPropertyValueTransfer_83() {
  /* Instructions: ESI_GETI_IMM, ESI_PUT. */
  /* Failure: becomes-sparse at depth 1. */
  var x;
  x = {"0": {"1": 1, "0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      x[10000] = 2;
    }
    x["0"][a] = 42;
    assertEquals(42, x["0"][a]);
  }
}

function testPropertyValueTransfer_84() {
  /* Instructions: ESI_GETI_IMM, ESI_PUTI_IMM. */
  var x;
  x = {"0": {"0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    x["0"]["0"] = 42;
    assertEquals(42, x["0"]["0"]);
  }
}

function testPropertyValueTransfer_85() {
  /* Instructions: ESI_GETI_IMM, ESI_PUTI_IMM. */
  /* Failure: non-object at depth 1. */
  function test(){
    var x;
    x = {"0": {"0": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        x = null;
      }
      x["0"]["0"] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_86() {
  /* Instructions: ESI_GETI_IMM, ESI_PUTI_IMM. */
  /* Failure: non-object at depth 2. */
  function test(){
    var x;
    x = {"0": {"0": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        x["0"] = null;
      }
      x["0"]["0"] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_87() {
  /* Instructions: ESI_GETI_IMM, ESI_PUTI_IMM. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    var x;
    x = {"0": {"0": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        delete x["0"];
      }
      x["0"]["0"] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_88() {
  /* Instructions: ESI_GETI_IMM, ESI_PUTI_IMM. */
  /* Failure: property-no-longer-exists at depth 3. */
  var x;
  x = {"0": {"0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x["0"]["0"];
    }
    x["0"]["0"] = 42;
    assertEquals(42, x["0"]["0"]);
  }
}

function testPropertyValueTransfer_89() {
  /* Instructions: ESI_GETI_IMM, ESI_PUTI_IMM. */
  /* Failure: class-changed at depth 1. */
  var x;
  x = {"0": {"0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x.c;
    }
    x["0"]["0"] = 42;
    assertEquals(42, x["0"]["0"]);
  }
}

function testPropertyValueTransfer_90() {
  /* Instructions: ESI_GETI_IMM, ESI_PUTI_IMM. */
  /* Failure: class-changed at depth 2. */
  var x;
  x = {"0": {"0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x["0"].c;
    }
    x["0"]["0"] = 42;
    assertEquals(42, x["0"]["0"]);
  }
}

function testPropertyValueTransfer_91() {
  /* Instructions: ESI_GETI_IMM, ESI_PUTI_IMM. */
  /* Failure: becomes-sparse at depth 1. */
  var x;
  x = {"0": {"0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      x[10000] = 2;
    }
    x["0"]["0"] = 42;
    assertEquals(42, x["0"]["0"]);
  }
}

function testPropertyValueTransfer_92() {
  /* Instructions: ESI_GETI_IMM, ESI_PUTN_IMM. */
  var x;
  x = {"0": {"a": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    x["0"].a = 42;
    assertEquals(42, x["0"].a);
  }
}

function testPropertyValueTransfer_93() {
  /* Instructions: ESI_GETI_IMM, ESI_PUTN_IMM. */
  /* Failure: non-object at depth 1. */
  function test(){
    var x;
    x = {"0": {"a": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        x = null;
      }
      x["0"].a = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_94() {
  /* Instructions: ESI_GETI_IMM, ESI_PUTN_IMM. */
  /* Failure: non-object at depth 2. */
  function test(){
    var x;
    x = {"0": {"a": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        x["0"] = null;
      }
      x["0"].a = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_95() {
  /* Instructions: ESI_GETI_IMM, ESI_PUTN_IMM. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    var x;
    x = {"0": {"a": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        delete x["0"];
      }
      x["0"].a = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_96() {
  /* Instructions: ESI_GETI_IMM, ESI_PUTN_IMM. */
  /* Failure: property-no-longer-exists at depth 3. */
  var x;
  x = {"0": {"a": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x["0"].a;
    }
    x["0"].a = 42;
    assertEquals(42, x["0"].a);
  }
}

function testPropertyValueTransfer_97() {
  /* Instructions: ESI_GETI_IMM, ESI_PUTN_IMM. */
  /* Failure: class-changed at depth 1. */
  var x;
  x = {"0": {"a": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x.c;
    }
    x["0"].a = 42;
    assertEquals(42, x["0"].a);
  }
}

function testPropertyValueTransfer_98() {
  /* Instructions: ESI_GETI_IMM, ESI_PUTN_IMM. */
  /* Failure: class-changed at depth 2. */
  var x;
  x = {"0": {"a": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x["0"].c;
    }
    x["0"].a = 42;
    assertEquals(42, x["0"].a);
  }
}

function testPropertyValueTransfer_99() {
  /* Instructions: ESI_GETI_IMM, ESI_PUTN_IMM. */
  /* Failure: becomes-sparse at depth 1. */
  var x;
  x = {"0": {"a": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      x[10000] = 2;
    }
    x["0"].a = 42;
    assertEquals(42, x["0"].a);
  }
}

function testPropertyValueTransfer_100() {
  /* Instructions: ESI_GETN_IMM, ESI_GET. */
  var x;
  x = {"a": {"1": 1, "0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    assertEquals(1, x.a[a]);
  }
}

function testPropertyValueTransfer_101() {
  /* Instructions: ESI_GETN_IMM, ESI_GET. */
  /* Failure: non-object at depth 1. */
  function test(){
    var x;
    x = {"a": {"1": 1, "0": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x = null;
      }
      x.a[a];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_102() {
  /* Instructions: ESI_GETN_IMM, ESI_GET. */
  /* Failure: non-object at depth 2. */
  function test(){
    var x;
    x = {"a": {"1": 1, "0": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x.a = null;
      }
      x.a[a];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_103() {
  /* Instructions: ESI_GETN_IMM, ESI_GET. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    var x;
    x = {"a": {"1": 1, "0": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        delete x.a;
      }
      x.a[a];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_104() {
  /* Instructions: ESI_GETN_IMM, ESI_GET. */
  /* Failure: property-no-longer-exists at depth 3. */
  var x;
  x = {"a": {"1": 1, "0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x.a[a];
    }
    assertEquals(i === 99 ? undefined : 1, x.a[a]);
  }
}

function testPropertyValueTransfer_105() {
  /* Instructions: ESI_GETN_IMM, ESI_GET. */
  /* Failure: class-changed at depth 1. */
  var x;
  x = {"a": {"1": 1, "0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x.c;
    }
    assertEquals(1, x.a[a]);
  }
}

function testPropertyValueTransfer_106() {
  /* Instructions: ESI_GETN_IMM, ESI_GET. */
  /* Failure: class-changed at depth 2. */
  var x;
  x = {"a": {"1": 1, "0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x.a.c;
    }
    assertEquals(1, x.a[a]);
  }
}

function testPropertyValueTransfer_107() {
  /* Instructions: ESI_GETN_IMM, ESI_GET. */
  /* Failure: becomes-sparse at depth 2. */
  var x;
  x = {"a": {"1": 1, "0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      x.a[10000] = 2;
    }
    assertEquals(1, x.a[a]);
  }
}

function testPropertyValueTransfer_108() {
  /* Instructions: ESI_GETN_IMM, ESI_GETI_IMM. */
  var x;
  x = {"a": {"0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    assertEquals(1, x.a["0"]);
  }
}

function testPropertyValueTransfer_109() {
  /* Instructions: ESI_GETN_IMM, ESI_GETI_IMM. */
  /* Failure: non-object at depth 1. */
  function test(){
    var x;
    x = {"a": {"0": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        x = null;
      }
      x.a["0"];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_110() {
  /* Instructions: ESI_GETN_IMM, ESI_GETI_IMM. */
  /* Failure: non-object at depth 2. */
  function test(){
    var x;
    x = {"a": {"0": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        x.a = null;
      }
      x.a["0"];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_111() {
  /* Instructions: ESI_GETN_IMM, ESI_GETI_IMM. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    var x;
    x = {"a": {"0": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        delete x.a;
      }
      x.a["0"];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_112() {
  /* Instructions: ESI_GETN_IMM, ESI_GETI_IMM. */
  /* Failure: property-no-longer-exists at depth 3. */
  var x;
  x = {"a": {"0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x.a["0"];
    }
    assertEquals(i === 99 ? undefined : 1, x.a["0"]);
  }
}

function testPropertyValueTransfer_113() {
  /* Instructions: ESI_GETN_IMM, ESI_GETI_IMM. */
  /* Failure: class-changed at depth 1. */
  var x;
  x = {"a": {"0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x.c;
    }
    assertEquals(1, x.a["0"]);
  }
}

function testPropertyValueTransfer_114() {
  /* Instructions: ESI_GETN_IMM, ESI_GETI_IMM. */
  /* Failure: class-changed at depth 2. */
  var x;
  x = {"a": {"0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x.a.c;
    }
    assertEquals(1, x.a["0"]);
  }
}

function testPropertyValueTransfer_115() {
  /* Instructions: ESI_GETN_IMM, ESI_GETI_IMM. */
  /* Failure: becomes-sparse at depth 2. */
  var x;
  x = {"a": {"0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      x.a[10000] = 2;
    }
    assertEquals(1, x.a["0"]);
  }
}

function testPropertyValueTransfer_116() {
  /* Instructions: ESI_GETN_IMM, ESI_GETN_IMM. */
  var x;
  x = {"a": {"a": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    assertEquals(1, x.a.a);
  }
}

function testPropertyValueTransfer_117() {
  /* Instructions: ESI_GETN_IMM, ESI_GETN_IMM. */
  /* Failure: non-object at depth 1. */
  function test(){
    var x;
    x = {"a": {"a": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        x = null;
      }
      x.a.a;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_118() {
  /* Instructions: ESI_GETN_IMM, ESI_GETN_IMM. */
  /* Failure: non-object at depth 2. */
  function test(){
    var x;
    x = {"a": {"a": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        x.a = null;
      }
      x.a.a;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_119() {
  /* Instructions: ESI_GETN_IMM, ESI_GETN_IMM. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    var x;
    x = {"a": {"a": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        delete x.a;
      }
      x.a.a;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_120() {
  /* Instructions: ESI_GETN_IMM, ESI_GETN_IMM. */
  /* Failure: property-no-longer-exists at depth 3. */
  var x;
  x = {"a": {"a": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x.a.a;
    }
    assertEquals(i === 99 ? undefined : 1, x.a.a);
  }
}

function testPropertyValueTransfer_121() {
  /* Instructions: ESI_GETN_IMM, ESI_GETN_IMM. */
  /* Failure: class-changed at depth 1. */
  var x;
  x = {"a": {"a": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x.c;
    }
    assertEquals(1, x.a.a);
  }
}

function testPropertyValueTransfer_122() {
  /* Instructions: ESI_GETN_IMM, ESI_GETN_IMM. */
  /* Failure: class-changed at depth 2. */
  var x;
  x = {"a": {"a": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x.a.c;
    }
    assertEquals(1, x.a.a);
  }
}

function testPropertyValueTransfer_123() {
  /* Instructions: ESI_GETN_IMM, ESI_PUT. */
  var x;
  x = {"a": {"1": 1, "0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    x.a[a] = 42;
    assertEquals(42, x.a[a]);
  }
}

function testPropertyValueTransfer_124() {
  /* Instructions: ESI_GETN_IMM, ESI_PUT. */
  /* Failure: non-object at depth 1. */
  function test(){
    var x;
    x = {"a": {"1": 1, "0": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x = null;
      }
      x.a[a] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_125() {
  /* Instructions: ESI_GETN_IMM, ESI_PUT. */
  /* Failure: non-object at depth 2. */
  function test(){
    var x;
    x = {"a": {"1": 1, "0": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x.a = null;
      }
      x.a[a] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_126() {
  /* Instructions: ESI_GETN_IMM, ESI_PUT. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    var x;
    x = {"a": {"1": 1, "0": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        delete x.a;
      }
      x.a[a] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_127() {
  /* Instructions: ESI_GETN_IMM, ESI_PUT. */
  /* Failure: property-no-longer-exists at depth 3. */
  var x;
  x = {"a": {"1": 1, "0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x.a[a];
    }
    x.a[a] = 42;
    assertEquals(42, x.a[a]);
  }
}

function testPropertyValueTransfer_128() {
  /* Instructions: ESI_GETN_IMM, ESI_PUT. */
  /* Failure: class-changed at depth 1. */
  var x;
  x = {"a": {"1": 1, "0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x.c;
    }
    x.a[a] = 42;
    assertEquals(42, x.a[a]);
  }
}

function testPropertyValueTransfer_129() {
  /* Instructions: ESI_GETN_IMM, ESI_PUT. */
  /* Failure: class-changed at depth 2. */
  var x;
  x = {"a": {"1": 1, "0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x.a.c;
    }
    x.a[a] = 42;
    assertEquals(42, x.a[a]);
  }
}

function testPropertyValueTransfer_130() {
  /* Instructions: ESI_GETN_IMM, ESI_PUTI_IMM. */
  var x;
  x = {"a": {"0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    x.a["0"] = 42;
    assertEquals(42, x.a["0"]);
  }
}

function testPropertyValueTransfer_131() {
  /* Instructions: ESI_GETN_IMM, ESI_PUTI_IMM. */
  /* Failure: non-object at depth 1. */
  function test(){
    var x;
    x = {"a": {"0": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        x = null;
      }
      x.a["0"] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_132() {
  /* Instructions: ESI_GETN_IMM, ESI_PUTI_IMM. */
  /* Failure: non-object at depth 2. */
  function test(){
    var x;
    x = {"a": {"0": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        x.a = null;
      }
      x.a["0"] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_133() {
  /* Instructions: ESI_GETN_IMM, ESI_PUTI_IMM. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    var x;
    x = {"a": {"0": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        delete x.a;
      }
      x.a["0"] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_134() {
  /* Instructions: ESI_GETN_IMM, ESI_PUTI_IMM. */
  /* Failure: property-no-longer-exists at depth 3. */
  var x;
  x = {"a": {"0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x.a["0"];
    }
    x.a["0"] = 42;
    assertEquals(42, x.a["0"]);
  }
}

function testPropertyValueTransfer_135() {
  /* Instructions: ESI_GETN_IMM, ESI_PUTI_IMM. */
  /* Failure: class-changed at depth 1. */
  var x;
  x = {"a": {"0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x.c;
    }
    x.a["0"] = 42;
    assertEquals(42, x.a["0"]);
  }
}

function testPropertyValueTransfer_136() {
  /* Instructions: ESI_GETN_IMM, ESI_PUTI_IMM. */
  /* Failure: class-changed at depth 2. */
  var x;
  x = {"a": {"0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x.a.c;
    }
    x.a["0"] = 42;
    assertEquals(42, x.a["0"]);
  }
}

function testPropertyValueTransfer_137() {
  /* Instructions: ESI_GETN_IMM, ESI_PUTN_IMM. */
  var x;
  x = {"a": {"a": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    x.a.a = 42;
    assertEquals(42, x.a.a);
  }
}

function testPropertyValueTransfer_138() {
  /* Instructions: ESI_GETN_IMM, ESI_PUTN_IMM. */
  /* Failure: non-object at depth 1. */
  function test(){
    var x;
    x = {"a": {"a": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        x = null;
      }
      x.a.a = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_139() {
  /* Instructions: ESI_GETN_IMM, ESI_PUTN_IMM. */
  /* Failure: non-object at depth 2. */
  function test(){
    var x;
    x = {"a": {"a": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        x.a = null;
      }
      x.a.a = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_140() {
  /* Instructions: ESI_GETN_IMM, ESI_PUTN_IMM. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    var x;
    x = {"a": {"a": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        delete x.a;
      }
      x.a.a = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_141() {
  /* Instructions: ESI_GETN_IMM, ESI_PUTN_IMM. */
  /* Failure: property-no-longer-exists at depth 3. */
  var x;
  x = {"a": {"a": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x.a.a;
    }
    x.a.a = 42;
    assertEquals(42, x.a.a);
  }
}

function testPropertyValueTransfer_142() {
  /* Instructions: ESI_GETN_IMM, ESI_PUTN_IMM. */
  /* Failure: class-changed at depth 1. */
  var x;
  x = {"a": {"a": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x.c;
    }
    x.a.a = 42;
    assertEquals(42, x.a.a);
  }
}

function testPropertyValueTransfer_143() {
  /* Instructions: ESI_GETN_IMM, ESI_PUTN_IMM. */
  /* Failure: class-changed at depth 2. */
  var x;
  x = {"a": {"a": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x.a.c;
    }
    x.a.a = 42;
    assertEquals(42, x.a.a);
  }
}

function testPropertyValueTransfer_144() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GET. */
  var x;
  x = {"1": 1, "0": 1, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      assertEquals(1, x[a]);
    }
  })();
}

function testPropertyValueTransfer_145() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GET. */
  /* Failure: non-object at depth 1. */
  function test(){
    var x;
    x = {"1": 1, "0": 1, "c": 2};
    (function(){
      for (var i = 0; i < 100; i++) {
        var a = i % 2;
        if (i === 99) {
          x = null;
        }
        x[a];
      }
    })();
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_146() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GET. */
  /* Failure: property-no-longer-exists at depth 2. */
  var x;
  x = {"1": 1, "0": 1, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        delete x[a];
      }
      assertEquals(i === 99 ? undefined : 1, x[a]);
    }
  })();
}

function testPropertyValueTransfer_147() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GET. */
  /* Failure: class-changed at depth 1. */
  var x;
  x = {"1": 1, "0": 1, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        delete x.c;
      }
      assertEquals(1, x[a]);
    }
  })();
}

function testPropertyValueTransfer_148() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GET. */
  /* Failure: becomes-sparse at depth 1. */
  var x;
  x = {"1": 1, "0": 1, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x[10000] = 2;
      }
      assertEquals(1, x[a]);
    }
  })();
}

function testPropertyValueTransfer_149() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GETI_IMM. */
  var x;
  x = {"0": 1, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      assertEquals(1, x["0"]);
    }
  })();
}

function testPropertyValueTransfer_150() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GETI_IMM. */
  /* Failure: non-object at depth 1. */
  function test(){
    var x;
    x = {"0": 1, "c": 2};
    (function(){
      for (var i = 0; i < 100; i++) {
        if (i === 99) {
          x = null;
        }
        x["0"];
      }
    })();
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_151() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GETI_IMM. */
  /* Failure: property-no-longer-exists at depth 2. */
  var x;
  x = {"0": 1, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        delete x["0"];
      }
      assertEquals(i === 99 ? undefined : 1, x["0"]);
    }
  })();
}

function testPropertyValueTransfer_152() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GETI_IMM. */
  /* Failure: class-changed at depth 1. */
  var x;
  x = {"0": 1, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        delete x.c;
      }
      assertEquals(1, x["0"]);
    }
  })();
}

function testPropertyValueTransfer_153() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GETI_IMM. */
  /* Failure: becomes-sparse at depth 1. */
  var x;
  x = {"0": 1, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        x[10000] = 2;
      }
      assertEquals(1, x["0"]);
    }
  })();
}

function testPropertyValueTransfer_154() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GETN_IMM. */
  var x;
  x = {"a": 1, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      assertEquals(1, x.a);
    }
  })();
}

function testPropertyValueTransfer_155() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GETN_IMM. */
  /* Failure: non-object at depth 1. */
  function test(){
    var x;
    x = {"a": 1, "c": 2};
    (function(){
      for (var i = 0; i < 100; i++) {
        if (i === 99) {
          x = null;
        }
        x.a;
      }
    })();
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_156() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GETN_IMM. */
  /* Failure: property-no-longer-exists at depth 2. */
  var x;
  x = {"a": 1, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        delete x.a;
      }
      assertEquals(i === 99 ? undefined : 1, x.a);
    }
  })();
}

function testPropertyValueTransfer_157() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GETN_IMM. */
  /* Failure: class-changed at depth 1. */
  var x;
  x = {"a": 1, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        delete x.c;
      }
      assertEquals(1, x.a);
    }
  })();
}

function testPropertyValueTransfer_158() {
  /* Instructions: ESI_GET_LEXICAL, ESI_PUT. */
  var x;
  x = {"1": 1, "0": 1, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      x[a] = 42;
      assertEquals(42, x[a]);
    }
  })();
}

function testPropertyValueTransfer_159() {
  /* Instructions: ESI_GET_LEXICAL, ESI_PUT. */
  /* Failure: non-object at depth 1. */
  function test(){
    var x;
    x = {"1": 1, "0": 1, "c": 2};
    (function(){
      for (var i = 0; i < 100; i++) {
        var a = i % 2;
        if (i === 99) {
          x = null;
        }
        x[a] = 42;
      }
    })();
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_160() {
  /* Instructions: ESI_GET_LEXICAL, ESI_PUT. */
  /* Failure: property-no-longer-exists at depth 2. */
  var x;
  x = {"1": 1, "0": 1, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        delete x[a];
      }
      x[a] = 42;
      assertEquals(42, x[a]);
    }
  })();
}

function testPropertyValueTransfer_161() {
  /* Instructions: ESI_GET_LEXICAL, ESI_PUT. */
  /* Failure: class-changed at depth 1. */
  var x;
  x = {"1": 1, "0": 1, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        delete x.c;
      }
      x[a] = 42;
      assertEquals(42, x[a]);
    }
  })();
}

function testPropertyValueTransfer_162() {
  /* Instructions: ESI_GET_LEXICAL, ESI_PUTI_IMM. */
  var x;
  x = {"0": 1, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      x["0"] = 42;
      assertEquals(42, x["0"]);
    }
  })();
}

function testPropertyValueTransfer_163() {
  /* Instructions: ESI_GET_LEXICAL, ESI_PUTI_IMM. */
  /* Failure: non-object at depth 1. */
  function test(){
    var x;
    x = {"0": 1, "c": 2};
    (function(){
      for (var i = 0; i < 100; i++) {
        if (i === 99) {
          x = null;
        }
        x["0"] = 42;
      }
    })();
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_164() {
  /* Instructions: ESI_GET_LEXICAL, ESI_PUTI_IMM. */
  /* Failure: property-no-longer-exists at depth 2. */
  var x;
  x = {"0": 1, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        delete x["0"];
      }
      x["0"] = 42;
      assertEquals(42, x["0"]);
    }
  })();
}

function testPropertyValueTransfer_165() {
  /* Instructions: ESI_GET_LEXICAL, ESI_PUTI_IMM. */
  /* Failure: class-changed at depth 1. */
  var x;
  x = {"0": 1, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        delete x.c;
      }
      x["0"] = 42;
      assertEquals(42, x["0"]);
    }
  })();
}

function testPropertyValueTransfer_166() {
  /* Instructions: ESI_GET_LEXICAL, ESI_PUTN_IMM. */
  var x;
  x = {"a": 1, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      x.a = 42;
      assertEquals(42, x.a);
    }
  })();
}

function testPropertyValueTransfer_167() {
  /* Instructions: ESI_GET_LEXICAL, ESI_PUTN_IMM. */
  /* Failure: non-object at depth 1. */
  function test(){
    var x;
    x = {"a": 1, "c": 2};
    (function(){
      for (var i = 0; i < 100; i++) {
        if (i === 99) {
          x = null;
        }
        x.a = 42;
      }
    })();
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_168() {
  /* Instructions: ESI_GET_LEXICAL, ESI_PUTN_IMM. */
  /* Failure: property-no-longer-exists at depth 2. */
  var x;
  x = {"a": 1, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        delete x.a;
      }
      x.a = 42;
      assertEquals(42, x.a);
    }
  })();
}

function testPropertyValueTransfer_169() {
  /* Instructions: ESI_GET_LEXICAL, ESI_PUTN_IMM. */
  /* Failure: class-changed at depth 1. */
  var x;
  x = {"a": 1, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        delete x.c;
      }
      x.a = 42;
      assertEquals(42, x.a);
    }
  })();
}

function testPropertyValueTransfer_170() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GET. */
  x = {"1": 1, "0": 1, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    assertEquals(1, x[a]);
  }
}

function testPropertyValueTransfer_171() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GET. */
  /* Failure: non-object at depth 1. */
  function test(){
    x = {"1": 1, "0": 1, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x = null;
      }
      x[a];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_172() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GET. */
  /* Failure: property-no-longer-exists at depth 2. */
  x = {"1": 1, "0": 1, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x[a];
    }
    assertEquals(i === 99 ? undefined : 1, x[a]);
  }
}

function testPropertyValueTransfer_173() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GET. */
  /* Failure: class-changed at depth 1. */
  x = {"1": 1, "0": 1, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x.c;
    }
    assertEquals(1, x[a]);
  }
}

function testPropertyValueTransfer_174() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GET. */
  /* Failure: becomes-sparse at depth 1. */
  x = {"1": 1, "0": 1, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      x[10000] = 2;
    }
    assertEquals(1, x[a]);
  }
}

function testPropertyValueTransfer_175() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GETI_IMM. */
  x = {"0": 1, "c": 2};
  for (var i = 0; i < 100; i++) {
    assertEquals(1, x["0"]);
  }
}

function testPropertyValueTransfer_176() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GETI_IMM. */
  /* Failure: non-object at depth 1. */
  function test(){
    x = {"0": 1, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        x = null;
      }
      x["0"];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_177() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GETI_IMM. */
  /* Failure: property-no-longer-exists at depth 2. */
  x = {"0": 1, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x["0"];
    }
    assertEquals(i === 99 ? undefined : 1, x["0"]);
  }
}

function testPropertyValueTransfer_178() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GETI_IMM. */
  /* Failure: class-changed at depth 1. */
  x = {"0": 1, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x.c;
    }
    assertEquals(1, x["0"]);
  }
}

function testPropertyValueTransfer_179() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GETI_IMM. */
  /* Failure: becomes-sparse at depth 1. */
  x = {"0": 1, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      x[10000] = 2;
    }
    assertEquals(1, x["0"]);
  }
}

function testPropertyValueTransfer_180() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GETN_IMM. */
  x = {"a": 1, "c": 2};
  for (var i = 0; i < 100; i++) {
    assertEquals(1, x.a);
  }
}

function testPropertyValueTransfer_181() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GETN_IMM. */
  /* Failure: non-object at depth 1. */
  function test(){
    x = {"a": 1, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        x = null;
      }
      x.a;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_182() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GETN_IMM. */
  /* Failure: property-no-longer-exists at depth 2. */
  x = {"a": 1, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x.a;
    }
    assertEquals(i === 99 ? undefined : 1, x.a);
  }
}

function testPropertyValueTransfer_183() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GETN_IMM. */
  /* Failure: class-changed at depth 1. */
  x = {"a": 1, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x.c;
    }
    assertEquals(1, x.a);
  }
}

function testPropertyValueTransfer_184() {
  /* Instructions: ESI_GET_GLOBAL, ESI_PUT. */
  x = {"1": 1, "0": 1, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    x[a] = 42;
    assertEquals(42, x[a]);
  }
}

function testPropertyValueTransfer_185() {
  /* Instructions: ESI_GET_GLOBAL, ESI_PUT. */
  /* Failure: non-object at depth 1. */
  function test(){
    x = {"1": 1, "0": 1, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x = null;
      }
      x[a] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_186() {
  /* Instructions: ESI_GET_GLOBAL, ESI_PUT. */
  /* Failure: property-no-longer-exists at depth 2. */
  x = {"1": 1, "0": 1, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x[a];
    }
    x[a] = 42;
    assertEquals(42, x[a]);
  }
}

function testPropertyValueTransfer_187() {
  /* Instructions: ESI_GET_GLOBAL, ESI_PUT. */
  /* Failure: class-changed at depth 1. */
  x = {"1": 1, "0": 1, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x.c;
    }
    x[a] = 42;
    assertEquals(42, x[a]);
  }
}

function testPropertyValueTransfer_188() {
  /* Instructions: ESI_GET_GLOBAL, ESI_PUTI_IMM. */
  x = {"0": 1, "c": 2};
  for (var i = 0; i < 100; i++) {
    x["0"] = 42;
    assertEquals(42, x["0"]);
  }
}

function testPropertyValueTransfer_189() {
  /* Instructions: ESI_GET_GLOBAL, ESI_PUTI_IMM. */
  /* Failure: non-object at depth 1. */
  function test(){
    x = {"0": 1, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        x = null;
      }
      x["0"] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_190() {
  /* Instructions: ESI_GET_GLOBAL, ESI_PUTI_IMM. */
  /* Failure: property-no-longer-exists at depth 2. */
  x = {"0": 1, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x["0"];
    }
    x["0"] = 42;
    assertEquals(42, x["0"]);
  }
}

function testPropertyValueTransfer_191() {
  /* Instructions: ESI_GET_GLOBAL, ESI_PUTI_IMM. */
  /* Failure: class-changed at depth 1. */
  x = {"0": 1, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x.c;
    }
    x["0"] = 42;
    assertEquals(42, x["0"]);
  }
}

function testPropertyValueTransfer_192() {
  /* Instructions: ESI_GET_GLOBAL, ESI_PUTN_IMM. */
  x = {"a": 1, "c": 2};
  for (var i = 0; i < 100; i++) {
    x.a = 42;
    assertEquals(42, x.a);
  }
}

function testPropertyValueTransfer_193() {
  /* Instructions: ESI_GET_GLOBAL, ESI_PUTN_IMM. */
  /* Failure: non-object at depth 1. */
  function test(){
    x = {"a": 1, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        x = null;
      }
      x.a = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_194() {
  /* Instructions: ESI_GET_GLOBAL, ESI_PUTN_IMM. */
  /* Failure: property-no-longer-exists at depth 2. */
  x = {"a": 1, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x.a;
    }
    x.a = 42;
    assertEquals(42, x.a);
  }
}

function testPropertyValueTransfer_195() {
  /* Instructions: ESI_GET_GLOBAL, ESI_PUTN_IMM. */
  /* Failure: class-changed at depth 1. */
  x = {"a": 1, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x.c;
    }
    x.a = 42;
    assertEquals(42, x.a);
  }
}

function testPropertyValueTransfer_196() {
  /* Instructions: ESI_GET, ESI_GET, ESI_GET. */
  var x;
  x = {"1": {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "0": {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    var c = i % 2;
    assertEquals(1, x[a][b][c]);
  }
}

function testPropertyValueTransfer_197() {
  /* Instructions: ESI_GET, ESI_GET, ESI_GET. */
  /* Failure: non-object at depth 1. */
  function test(){
    var x;
    x = {"1": {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "0": {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      var b = i % 2;
      var c = i % 2;
      if (i === 99) {
        x = null;
      }
      x[a][b][c];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_198() {
  /* Instructions: ESI_GET, ESI_GET, ESI_GET. */
  /* Failure: non-object at depth 2. */
  function test(){
    var x;
    x = {"1": {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "0": {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      var b = i % 2;
      var c = i % 2;
      if (i === 99) {
        x[a] = null;
      }
      x[a][b][c];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_199() {
  /* Instructions: ESI_GET, ESI_GET, ESI_GET. */
  /* Failure: non-object at depth 3. */
  function test(){
    var x;
    x = {"1": {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "0": {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      var b = i % 2;
      var c = i % 2;
      if (i === 99) {
        x[a][b] = null;
      }
      x[a][b][c];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_200() {
  /* Instructions: ESI_GET, ESI_GET, ESI_GET. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    var x;
    x = {"1": {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "0": {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      var b = i % 2;
      var c = i % 2;
      if (i === 99) {
        delete x[a];
      }
      x[a][b][c];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_201() {
  /* Instructions: ESI_GET, ESI_GET, ESI_GET. */
  /* Failure: property-no-longer-exists at depth 3. */
  function test(){
    var x;
    x = {"1": {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "0": {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      var b = i % 2;
      var c = i % 2;
      if (i === 99) {
        delete x[a][b];
      }
      x[a][b][c];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_202() {
  /* Instructions: ESI_GET, ESI_GET, ESI_GET. */
  /* Failure: property-no-longer-exists at depth 4. */
  var x;
  x = {"1": {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "0": {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    var c = i % 2;
    if (i === 99) {
      delete x[a][b][c];
    }
    assertEquals(i === 99 ? undefined : 1, x[a][b][c]);
  }
}

function testPropertyValueTransfer_203() {
  /* Instructions: ESI_GET, ESI_GET, ESI_GET. */
  /* Failure: class-changed at depth 1. */
  var x;
  x = {"1": {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "0": {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    var c = i % 2;
    if (i === 99) {
      delete x.c;
    }
    assertEquals(1, x[a][b][c]);
  }
}

function testPropertyValueTransfer_204() {
  /* Instructions: ESI_GET, ESI_GET, ESI_GET. */
  /* Failure: class-changed at depth 2. */
  var x;
  x = {"1": {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "0": {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    var c = i % 2;
    if (i === 99) {
      delete x[a].c;
    }
    assertEquals(1, x[a][b][c]);
  }
}

function testPropertyValueTransfer_205() {
  /* Instructions: ESI_GET, ESI_GET, ESI_GET. */
  /* Failure: class-changed at depth 3. */
  var x;
  x = {"1": {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "0": {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    var c = i % 2;
    if (i === 99) {
      delete x[a][b].c;
    }
    assertEquals(1, x[a][b][c]);
  }
}

function testPropertyValueTransfer_206() {
  /* Instructions: ESI_GET, ESI_GET, ESI_GET. */
  /* Failure: becomes-sparse at depth 1. */
  var x;
  x = {"1": {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "0": {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    var c = i % 2;
    if (i === 99) {
      x[10000] = 2;
    }
    assertEquals(1, x[a][b][c]);
  }
}

function testPropertyValueTransfer_207() {
  /* Instructions: ESI_GET, ESI_GET, ESI_GET. */
  /* Failure: becomes-sparse at depth 2. */
  var x;
  x = {"1": {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "0": {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    var c = i % 2;
    if (i === 99) {
      x[a][10000] = 2;
    }
    assertEquals(1, x[a][b][c]);
  }
}

function testPropertyValueTransfer_208() {
  /* Instructions: ESI_GET, ESI_GET, ESI_GET. */
  /* Failure: becomes-sparse at depth 3. */
  var x;
  x = {"1": {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "0": {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    var c = i % 2;
    if (i === 99) {
      x[a][b][10000] = 2;
    }
    assertEquals(1, x[a][b][c]);
  }
}

function testPropertyValueTransfer_209() {
  /* Instructions: ESI_GET, ESI_GET, ESI_GETI_IMM. */
  var x;
  x = {"1": {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2}, "0": {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    assertEquals(1, x[a][b]["0"]);
  }
}

function testPropertyValueTransfer_210() {
  /* Instructions: ESI_GET, ESI_GET, ESI_GETI_IMM. */
  /* Failure: non-object at depth 1. */
  function test(){
    var x;
    x = {"1": {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2}, "0": {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      var b = i % 2;
      if (i === 99) {
        x = null;
      }
      x[a][b]["0"];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_211() {
  /* Instructions: ESI_GET, ESI_GET, ESI_GETI_IMM. */
  /* Failure: non-object at depth 2. */
  function test(){
    var x;
    x = {"1": {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2}, "0": {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      var b = i % 2;
      if (i === 99) {
        x[a] = null;
      }
      x[a][b]["0"];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_212() {
  /* Instructions: ESI_GET, ESI_GET, ESI_GETI_IMM. */
  /* Failure: non-object at depth 3. */
  function test(){
    var x;
    x = {"1": {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2}, "0": {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      var b = i % 2;
      if (i === 99) {
        x[a][b] = null;
      }
      x[a][b]["0"];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_213() {
  /* Instructions: ESI_GET, ESI_GET, ESI_GETI_IMM. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    var x;
    x = {"1": {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2}, "0": {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      var b = i % 2;
      if (i === 99) {
        delete x[a];
      }
      x[a][b]["0"];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_214() {
  /* Instructions: ESI_GET, ESI_GET, ESI_GETI_IMM. */
  /* Failure: property-no-longer-exists at depth 3. */
  function test(){
    var x;
    x = {"1": {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2}, "0": {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      var b = i % 2;
      if (i === 99) {
        delete x[a][b];
      }
      x[a][b]["0"];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_215() {
  /* Instructions: ESI_GET, ESI_GET, ESI_GETI_IMM. */
  /* Failure: property-no-longer-exists at depth 4. */
  var x;
  x = {"1": {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2}, "0": {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    if (i === 99) {
      delete x[a][b]["0"];
    }
    assertEquals(i === 99 ? undefined : 1, x[a][b]["0"]);
  }
}

function testPropertyValueTransfer_216() {
  /* Instructions: ESI_GET, ESI_GET, ESI_GETI_IMM. */
  /* Failure: class-changed at depth 1. */
  var x;
  x = {"1": {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2}, "0": {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    if (i === 99) {
      delete x.c;
    }
    assertEquals(1, x[a][b]["0"]);
  }
}

function testPropertyValueTransfer_217() {
  /* Instructions: ESI_GET, ESI_GET, ESI_GETI_IMM. */
  /* Failure: class-changed at depth 2. */
  var x;
  x = {"1": {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2}, "0": {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    if (i === 99) {
      delete x[a].c;
    }
    assertEquals(1, x[a][b]["0"]);
  }
}

function testPropertyValueTransfer_218() {
  /* Instructions: ESI_GET, ESI_GET, ESI_GETI_IMM. */
  /* Failure: class-changed at depth 3. */
  var x;
  x = {"1": {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2}, "0": {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    if (i === 99) {
      delete x[a][b].c;
    }
    assertEquals(1, x[a][b]["0"]);
  }
}

function testPropertyValueTransfer_219() {
  /* Instructions: ESI_GET, ESI_GET, ESI_GETI_IMM. */
  /* Failure: becomes-sparse at depth 1. */
  var x;
  x = {"1": {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2}, "0": {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    if (i === 99) {
      x[10000] = 2;
    }
    assertEquals(1, x[a][b]["0"]);
  }
}

function testPropertyValueTransfer_220() {
  /* Instructions: ESI_GET, ESI_GET, ESI_GETI_IMM. */
  /* Failure: becomes-sparse at depth 2. */
  var x;
  x = {"1": {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2}, "0": {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    if (i === 99) {
      x[a][10000] = 2;
    }
    assertEquals(1, x[a][b]["0"]);
  }
}

function testPropertyValueTransfer_221() {
  /* Instructions: ESI_GET, ESI_GET, ESI_GETI_IMM. */
  /* Failure: becomes-sparse at depth 3. */
  var x;
  x = {"1": {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2}, "0": {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    if (i === 99) {
      x[a][b][10000] = 2;
    }
    assertEquals(1, x[a][b]["0"]);
  }
}

function testPropertyValueTransfer_222() {
  /* Instructions: ESI_GET, ESI_GET, ESI_GETN_IMM. */
  var x;
  x = {"1": {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2}, "0": {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    assertEquals(1, x[a][b].a);
  }
}

function testPropertyValueTransfer_223() {
  /* Instructions: ESI_GET, ESI_GET, ESI_GETN_IMM. */
  /* Failure: non-object at depth 1. */
  function test(){
    var x;
    x = {"1": {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2}, "0": {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      var b = i % 2;
      if (i === 99) {
        x = null;
      }
      x[a][b].a;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_224() {
  /* Instructions: ESI_GET, ESI_GET, ESI_GETN_IMM. */
  /* Failure: non-object at depth 2. */
  function test(){
    var x;
    x = {"1": {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2}, "0": {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      var b = i % 2;
      if (i === 99) {
        x[a] = null;
      }
      x[a][b].a;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_225() {
  /* Instructions: ESI_GET, ESI_GET, ESI_GETN_IMM. */
  /* Failure: non-object at depth 3. */
  function test(){
    var x;
    x = {"1": {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2}, "0": {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      var b = i % 2;
      if (i === 99) {
        x[a][b] = null;
      }
      x[a][b].a;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_226() {
  /* Instructions: ESI_GET, ESI_GET, ESI_GETN_IMM. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    var x;
    x = {"1": {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2}, "0": {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      var b = i % 2;
      if (i === 99) {
        delete x[a];
      }
      x[a][b].a;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_227() {
  /* Instructions: ESI_GET, ESI_GET, ESI_GETN_IMM. */
  /* Failure: property-no-longer-exists at depth 3. */
  function test(){
    var x;
    x = {"1": {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2}, "0": {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      var b = i % 2;
      if (i === 99) {
        delete x[a][b];
      }
      x[a][b].a;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_228() {
  /* Instructions: ESI_GET, ESI_GET, ESI_GETN_IMM. */
  /* Failure: property-no-longer-exists at depth 4. */
  var x;
  x = {"1": {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2}, "0": {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    if (i === 99) {
      delete x[a][b].a;
    }
    assertEquals(i === 99 ? undefined : 1, x[a][b].a);
  }
}

function testPropertyValueTransfer_229() {
  /* Instructions: ESI_GET, ESI_GET, ESI_GETN_IMM. */
  /* Failure: class-changed at depth 1. */
  var x;
  x = {"1": {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2}, "0": {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    if (i === 99) {
      delete x.c;
    }
    assertEquals(1, x[a][b].a);
  }
}

function testPropertyValueTransfer_230() {
  /* Instructions: ESI_GET, ESI_GET, ESI_GETN_IMM. */
  /* Failure: class-changed at depth 2. */
  var x;
  x = {"1": {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2}, "0": {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    if (i === 99) {
      delete x[a].c;
    }
    assertEquals(1, x[a][b].a);
  }
}

function testPropertyValueTransfer_231() {
  /* Instructions: ESI_GET, ESI_GET, ESI_GETN_IMM. */
  /* Failure: class-changed at depth 3. */
  var x;
  x = {"1": {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2}, "0": {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    if (i === 99) {
      delete x[a][b].c;
    }
    assertEquals(1, x[a][b].a);
  }
}

function testPropertyValueTransfer_232() {
  /* Instructions: ESI_GET, ESI_GET, ESI_GETN_IMM. */
  /* Failure: becomes-sparse at depth 1. */
  var x;
  x = {"1": {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2}, "0": {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    if (i === 99) {
      x[10000] = 2;
    }
    assertEquals(1, x[a][b].a);
  }
}

function testPropertyValueTransfer_233() {
  /* Instructions: ESI_GET, ESI_GET, ESI_GETN_IMM. */
  /* Failure: becomes-sparse at depth 2. */
  var x;
  x = {"1": {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2}, "0": {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    if (i === 99) {
      x[a][10000] = 2;
    }
    assertEquals(1, x[a][b].a);
  }
}

function testPropertyValueTransfer_234() {
  /* Instructions: ESI_GET, ESI_GET, ESI_PUT. */
  var x;
  x = {"1": {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "0": {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    var c = i % 2;
    x[a][b][c] = 42;
    assertEquals(42, x[a][b][c]);
  }
}

function testPropertyValueTransfer_235() {
  /* Instructions: ESI_GET, ESI_GET, ESI_PUT. */
  /* Failure: non-object at depth 1. */
  function test(){
    var x;
    x = {"1": {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "0": {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      var b = i % 2;
      var c = i % 2;
      if (i === 99) {
        x = null;
      }
      x[a][b][c] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_236() {
  /* Instructions: ESI_GET, ESI_GET, ESI_PUT. */
  /* Failure: non-object at depth 2. */
  function test(){
    var x;
    x = {"1": {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "0": {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      var b = i % 2;
      var c = i % 2;
      if (i === 99) {
        x[a] = null;
      }
      x[a][b][c] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_237() {
  /* Instructions: ESI_GET, ESI_GET, ESI_PUT. */
  /* Failure: non-object at depth 3. */
  function test(){
    var x;
    x = {"1": {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "0": {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      var b = i % 2;
      var c = i % 2;
      if (i === 99) {
        x[a][b] = null;
      }
      x[a][b][c] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_238() {
  /* Instructions: ESI_GET, ESI_GET, ESI_PUT. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    var x;
    x = {"1": {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "0": {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      var b = i % 2;
      var c = i % 2;
      if (i === 99) {
        delete x[a];
      }
      x[a][b][c] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_239() {
  /* Instructions: ESI_GET, ESI_GET, ESI_PUT. */
  /* Failure: property-no-longer-exists at depth 3. */
  function test(){
    var x;
    x = {"1": {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "0": {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      var b = i % 2;
      var c = i % 2;
      if (i === 99) {
        delete x[a][b];
      }
      x[a][b][c] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_240() {
  /* Instructions: ESI_GET, ESI_GET, ESI_PUT. */
  /* Failure: property-no-longer-exists at depth 4. */
  var x;
  x = {"1": {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "0": {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    var c = i % 2;
    if (i === 99) {
      delete x[a][b][c];
    }
    x[a][b][c] = 42;
    assertEquals(42, x[a][b][c]);
  }
}

function testPropertyValueTransfer_241() {
  /* Instructions: ESI_GET, ESI_GET, ESI_PUT. */
  /* Failure: class-changed at depth 1. */
  var x;
  x = {"1": {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "0": {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    var c = i % 2;
    if (i === 99) {
      delete x.c;
    }
    x[a][b][c] = 42;
    assertEquals(42, x[a][b][c]);
  }
}

function testPropertyValueTransfer_242() {
  /* Instructions: ESI_GET, ESI_GET, ESI_PUT. */
  /* Failure: class-changed at depth 2. */
  var x;
  x = {"1": {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "0": {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    var c = i % 2;
    if (i === 99) {
      delete x[a].c;
    }
    x[a][b][c] = 42;
    assertEquals(42, x[a][b][c]);
  }
}

function testPropertyValueTransfer_243() {
  /* Instructions: ESI_GET, ESI_GET, ESI_PUT. */
  /* Failure: class-changed at depth 3. */
  var x;
  x = {"1": {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "0": {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    var c = i % 2;
    if (i === 99) {
      delete x[a][b].c;
    }
    x[a][b][c] = 42;
    assertEquals(42, x[a][b][c]);
  }
}

function testPropertyValueTransfer_244() {
  /* Instructions: ESI_GET, ESI_GET, ESI_PUT. */
  /* Failure: becomes-sparse at depth 1. */
  var x;
  x = {"1": {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "0": {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    var c = i % 2;
    if (i === 99) {
      x[10000] = 2;
    }
    x[a][b][c] = 42;
    assertEquals(42, x[a][b][c]);
  }
}

function testPropertyValueTransfer_245() {
  /* Instructions: ESI_GET, ESI_GET, ESI_PUT. */
  /* Failure: becomes-sparse at depth 2. */
  var x;
  x = {"1": {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "0": {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    var c = i % 2;
    if (i === 99) {
      x[a][10000] = 2;
    }
    x[a][b][c] = 42;
    assertEquals(42, x[a][b][c]);
  }
}

function testPropertyValueTransfer_246() {
  /* Instructions: ESI_GET, ESI_GET, ESI_PUTI_IMM. */
  var x;
  x = {"1": {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2}, "0": {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    x[a][b]["0"] = 42;
    assertEquals(42, x[a][b]["0"]);
  }
}

function testPropertyValueTransfer_247() {
  /* Instructions: ESI_GET, ESI_GET, ESI_PUTI_IMM. */
  /* Failure: non-object at depth 1. */
  function test(){
    var x;
    x = {"1": {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2}, "0": {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      var b = i % 2;
      if (i === 99) {
        x = null;
      }
      x[a][b]["0"] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_248() {
  /* Instructions: ESI_GET, ESI_GET, ESI_PUTI_IMM. */
  /* Failure: non-object at depth 2. */
  function test(){
    var x;
    x = {"1": {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2}, "0": {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      var b = i % 2;
      if (i === 99) {
        x[a] = null;
      }
      x[a][b]["0"] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_249() {
  /* Instructions: ESI_GET, ESI_GET, ESI_PUTI_IMM. */
  /* Failure: non-object at depth 3. */
  function test(){
    var x;
    x = {"1": {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2}, "0": {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      var b = i % 2;
      if (i === 99) {
        x[a][b] = null;
      }
      x[a][b]["0"] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_250() {
  /* Instructions: ESI_GET, ESI_GET, ESI_PUTI_IMM. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    var x;
    x = {"1": {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2}, "0": {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      var b = i % 2;
      if (i === 99) {
        delete x[a];
      }
      x[a][b]["0"] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_251() {
  /* Instructions: ESI_GET, ESI_GET, ESI_PUTI_IMM. */
  /* Failure: property-no-longer-exists at depth 3. */
  function test(){
    var x;
    x = {"1": {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2}, "0": {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      var b = i % 2;
      if (i === 99) {
        delete x[a][b];
      }
      x[a][b]["0"] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_252() {
  /* Instructions: ESI_GET, ESI_GET, ESI_PUTI_IMM. */
  /* Failure: property-no-longer-exists at depth 4. */
  var x;
  x = {"1": {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2}, "0": {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    if (i === 99) {
      delete x[a][b]["0"];
    }
    x[a][b]["0"] = 42;
    assertEquals(42, x[a][b]["0"]);
  }
}

function testPropertyValueTransfer_253() {
  /* Instructions: ESI_GET, ESI_GET, ESI_PUTI_IMM. */
  /* Failure: class-changed at depth 1. */
  var x;
  x = {"1": {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2}, "0": {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    if (i === 99) {
      delete x.c;
    }
    x[a][b]["0"] = 42;
    assertEquals(42, x[a][b]["0"]);
  }
}

function testPropertyValueTransfer_254() {
  /* Instructions: ESI_GET, ESI_GET, ESI_PUTI_IMM. */
  /* Failure: class-changed at depth 2. */
  var x;
  x = {"1": {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2}, "0": {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    if (i === 99) {
      delete x[a].c;
    }
    x[a][b]["0"] = 42;
    assertEquals(42, x[a][b]["0"]);
  }
}

function testPropertyValueTransfer_255() {
  /* Instructions: ESI_GET, ESI_GET, ESI_PUTI_IMM. */
  /* Failure: class-changed at depth 3. */
  var x;
  x = {"1": {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2}, "0": {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    if (i === 99) {
      delete x[a][b].c;
    }
    x[a][b]["0"] = 42;
    assertEquals(42, x[a][b]["0"]);
  }
}

function testPropertyValueTransfer_256() {
  /* Instructions: ESI_GET, ESI_GET, ESI_PUTI_IMM. */
  /* Failure: becomes-sparse at depth 1. */
  var x;
  x = {"1": {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2}, "0": {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    if (i === 99) {
      x[10000] = 2;
    }
    x[a][b]["0"] = 42;
    assertEquals(42, x[a][b]["0"]);
  }
}

function testPropertyValueTransfer_257() {
  /* Instructions: ESI_GET, ESI_GET, ESI_PUTI_IMM. */
  /* Failure: becomes-sparse at depth 2. */
  var x;
  x = {"1": {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2}, "0": {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    if (i === 99) {
      x[a][10000] = 2;
    }
    x[a][b]["0"] = 42;
    assertEquals(42, x[a][b]["0"]);
  }
}

function testPropertyValueTransfer_258() {
  /* Instructions: ESI_GET, ESI_GET, ESI_PUTN_IMM. */
  var x;
  x = {"1": {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2}, "0": {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    x[a][b].a = 42;
    assertEquals(42, x[a][b].a);
  }
}

function testPropertyValueTransfer_259() {
  /* Instructions: ESI_GET, ESI_GET, ESI_PUTN_IMM. */
  /* Failure: non-object at depth 1. */
  function test(){
    var x;
    x = {"1": {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2}, "0": {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      var b = i % 2;
      if (i === 99) {
        x = null;
      }
      x[a][b].a = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_260() {
  /* Instructions: ESI_GET, ESI_GET, ESI_PUTN_IMM. */
  /* Failure: non-object at depth 2. */
  function test(){
    var x;
    x = {"1": {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2}, "0": {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      var b = i % 2;
      if (i === 99) {
        x[a] = null;
      }
      x[a][b].a = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_261() {
  /* Instructions: ESI_GET, ESI_GET, ESI_PUTN_IMM. */
  /* Failure: non-object at depth 3. */
  function test(){
    var x;
    x = {"1": {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2}, "0": {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      var b = i % 2;
      if (i === 99) {
        x[a][b] = null;
      }
      x[a][b].a = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_262() {
  /* Instructions: ESI_GET, ESI_GET, ESI_PUTN_IMM. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    var x;
    x = {"1": {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2}, "0": {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      var b = i % 2;
      if (i === 99) {
        delete x[a];
      }
      x[a][b].a = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_263() {
  /* Instructions: ESI_GET, ESI_GET, ESI_PUTN_IMM. */
  /* Failure: property-no-longer-exists at depth 3. */
  function test(){
    var x;
    x = {"1": {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2}, "0": {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      var b = i % 2;
      if (i === 99) {
        delete x[a][b];
      }
      x[a][b].a = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_264() {
  /* Instructions: ESI_GET, ESI_GET, ESI_PUTN_IMM. */
  /* Failure: property-no-longer-exists at depth 4. */
  var x;
  x = {"1": {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2}, "0": {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    if (i === 99) {
      delete x[a][b].a;
    }
    x[a][b].a = 42;
    assertEquals(42, x[a][b].a);
  }
}

function testPropertyValueTransfer_265() {
  /* Instructions: ESI_GET, ESI_GET, ESI_PUTN_IMM. */
  /* Failure: class-changed at depth 1. */
  var x;
  x = {"1": {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2}, "0": {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    if (i === 99) {
      delete x.c;
    }
    x[a][b].a = 42;
    assertEquals(42, x[a][b].a);
  }
}

function testPropertyValueTransfer_266() {
  /* Instructions: ESI_GET, ESI_GET, ESI_PUTN_IMM. */
  /* Failure: class-changed at depth 2. */
  var x;
  x = {"1": {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2}, "0": {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    if (i === 99) {
      delete x[a].c;
    }
    x[a][b].a = 42;
    assertEquals(42, x[a][b].a);
  }
}

function testPropertyValueTransfer_267() {
  /* Instructions: ESI_GET, ESI_GET, ESI_PUTN_IMM. */
  /* Failure: class-changed at depth 3. */
  var x;
  x = {"1": {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2}, "0": {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    if (i === 99) {
      delete x[a][b].c;
    }
    x[a][b].a = 42;
    assertEquals(42, x[a][b].a);
  }
}

function testPropertyValueTransfer_268() {
  /* Instructions: ESI_GET, ESI_GET, ESI_PUTN_IMM. */
  /* Failure: becomes-sparse at depth 1. */
  var x;
  x = {"1": {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2}, "0": {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    if (i === 99) {
      x[10000] = 2;
    }
    x[a][b].a = 42;
    assertEquals(42, x[a][b].a);
  }
}

function testPropertyValueTransfer_269() {
  /* Instructions: ESI_GET, ESI_GET, ESI_PUTN_IMM. */
  /* Failure: becomes-sparse at depth 2. */
  var x;
  x = {"1": {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2}, "0": {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    if (i === 99) {
      x[a][10000] = 2;
    }
    x[a][b].a = 42;
    assertEquals(42, x[a][b].a);
  }
}

function testPropertyValueTransfer_270() {
  /* Instructions: ESI_GET, ESI_GETI_IMM, ESI_GET. */
  var x;
  x = {"1": {"0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "0": {"0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    assertEquals(1, x[a]["0"][b]);
  }
}

function testPropertyValueTransfer_271() {
  /* Instructions: ESI_GET, ESI_GETI_IMM, ESI_GET. */
  /* Failure: non-object at depth 1. */
  function test(){
    var x;
    x = {"1": {"0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "0": {"0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      var b = i % 2;
      if (i === 99) {
        x = null;
      }
      x[a]["0"][b];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_272() {
  /* Instructions: ESI_GET, ESI_GETI_IMM, ESI_GET. */
  /* Failure: non-object at depth 2. */
  function test(){
    var x;
    x = {"1": {"0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "0": {"0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      var b = i % 2;
      if (i === 99) {
        x[a] = null;
      }
      x[a]["0"][b];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_273() {
  /* Instructions: ESI_GET, ESI_GETI_IMM, ESI_GET. */
  /* Failure: non-object at depth 3. */
  function test(){
    var x;
    x = {"1": {"0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "0": {"0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      var b = i % 2;
      if (i === 99) {
        x[a]["0"] = null;
      }
      x[a]["0"][b];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_274() {
  /* Instructions: ESI_GET, ESI_GETI_IMM, ESI_GET. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    var x;
    x = {"1": {"0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "0": {"0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      var b = i % 2;
      if (i === 99) {
        delete x[a];
      }
      x[a]["0"][b];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_275() {
  /* Instructions: ESI_GET, ESI_GETI_IMM, ESI_GET. */
  /* Failure: property-no-longer-exists at depth 3. */
  function test(){
    var x;
    x = {"1": {"0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "0": {"0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      var b = i % 2;
      if (i === 99) {
        delete x[a]["0"];
      }
      x[a]["0"][b];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_276() {
  /* Instructions: ESI_GET, ESI_GETI_IMM, ESI_GET. */
  /* Failure: property-no-longer-exists at depth 4. */
  var x;
  x = {"1": {"0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "0": {"0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    if (i === 99) {
      delete x[a]["0"][b];
    }
    assertEquals(i === 99 ? undefined : 1, x[a]["0"][b]);
  }
}

function testPropertyValueTransfer_277() {
  /* Instructions: ESI_GET, ESI_GETI_IMM, ESI_GET. */
  /* Failure: class-changed at depth 1. */
  var x;
  x = {"1": {"0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "0": {"0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    if (i === 99) {
      delete x.c;
    }
    assertEquals(1, x[a]["0"][b]);
  }
}

function testPropertyValueTransfer_278() {
  /* Instructions: ESI_GET, ESI_GETI_IMM, ESI_GET. */
  /* Failure: class-changed at depth 2. */
  var x;
  x = {"1": {"0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "0": {"0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    if (i === 99) {
      delete x[a].c;
    }
    assertEquals(1, x[a]["0"][b]);
  }
}

function testPropertyValueTransfer_279() {
  /* Instructions: ESI_GET, ESI_GETI_IMM, ESI_GET. */
  /* Failure: class-changed at depth 3. */
  var x;
  x = {"1": {"0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "0": {"0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    if (i === 99) {
      delete x[a]["0"].c;
    }
    assertEquals(1, x[a]["0"][b]);
  }
}

function testPropertyValueTransfer_280() {
  /* Instructions: ESI_GET, ESI_GETI_IMM, ESI_GET. */
  /* Failure: becomes-sparse at depth 1. */
  var x;
  x = {"1": {"0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "0": {"0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    if (i === 99) {
      x[10000] = 2;
    }
    assertEquals(1, x[a]["0"][b]);
  }
}

function testPropertyValueTransfer_281() {
  /* Instructions: ESI_GET, ESI_GETI_IMM, ESI_GET. */
  /* Failure: becomes-sparse at depth 2. */
  var x;
  x = {"1": {"0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "0": {"0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    if (i === 99) {
      x[a][10000] = 2;
    }
    assertEquals(1, x[a]["0"][b]);
  }
}

function testPropertyValueTransfer_282() {
  /* Instructions: ESI_GET, ESI_GETI_IMM, ESI_GET. */
  /* Failure: becomes-sparse at depth 3. */
  var x;
  x = {"1": {"0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "0": {"0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    if (i === 99) {
      x[a]["0"][10000] = 2;
    }
    assertEquals(1, x[a]["0"][b]);
  }
}

function testPropertyValueTransfer_283() {
  /* Instructions: ESI_GET, ESI_GETI_IMM, ESI_GETI_IMM. */
  var x;
  x = {"1": {"0": {"0": 1, "c": 2}, "c": 2}, "0": {"0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    assertEquals(1, x[a]["0"]["0"]);
  }
}

function testPropertyValueTransfer_284() {
  /* Instructions: ESI_GET, ESI_GETI_IMM, ESI_GETI_IMM. */
  /* Failure: non-object at depth 1. */
  function test(){
    var x;
    x = {"1": {"0": {"0": 1, "c": 2}, "c": 2}, "0": {"0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x = null;
      }
      x[a]["0"]["0"];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_285() {
  /* Instructions: ESI_GET, ESI_GETI_IMM, ESI_GETI_IMM. */
  /* Failure: non-object at depth 2. */
  function test(){
    var x;
    x = {"1": {"0": {"0": 1, "c": 2}, "c": 2}, "0": {"0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x[a] = null;
      }
      x[a]["0"]["0"];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_286() {
  /* Instructions: ESI_GET, ESI_GETI_IMM, ESI_GETI_IMM. */
  /* Failure: non-object at depth 3. */
  function test(){
    var x;
    x = {"1": {"0": {"0": 1, "c": 2}, "c": 2}, "0": {"0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x[a]["0"] = null;
      }
      x[a]["0"]["0"];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_287() {
  /* Instructions: ESI_GET, ESI_GETI_IMM, ESI_GETI_IMM. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    var x;
    x = {"1": {"0": {"0": 1, "c": 2}, "c": 2}, "0": {"0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        delete x[a];
      }
      x[a]["0"]["0"];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_288() {
  /* Instructions: ESI_GET, ESI_GETI_IMM, ESI_GETI_IMM. */
  /* Failure: property-no-longer-exists at depth 3. */
  function test(){
    var x;
    x = {"1": {"0": {"0": 1, "c": 2}, "c": 2}, "0": {"0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        delete x[a]["0"];
      }
      x[a]["0"]["0"];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_289() {
  /* Instructions: ESI_GET, ESI_GETI_IMM, ESI_GETI_IMM. */
  /* Failure: property-no-longer-exists at depth 4. */
  var x;
  x = {"1": {"0": {"0": 1, "c": 2}, "c": 2}, "0": {"0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x[a]["0"]["0"];
    }
    assertEquals(i === 99 ? undefined : 1, x[a]["0"]["0"]);
  }
}

function testPropertyValueTransfer_290() {
  /* Instructions: ESI_GET, ESI_GETI_IMM, ESI_GETI_IMM. */
  /* Failure: class-changed at depth 1. */
  var x;
  x = {"1": {"0": {"0": 1, "c": 2}, "c": 2}, "0": {"0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x.c;
    }
    assertEquals(1, x[a]["0"]["0"]);
  }
}

function testPropertyValueTransfer_291() {
  /* Instructions: ESI_GET, ESI_GETI_IMM, ESI_GETI_IMM. */
  /* Failure: class-changed at depth 2. */
  var x;
  x = {"1": {"0": {"0": 1, "c": 2}, "c": 2}, "0": {"0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x[a].c;
    }
    assertEquals(1, x[a]["0"]["0"]);
  }
}

function testPropertyValueTransfer_292() {
  /* Instructions: ESI_GET, ESI_GETI_IMM, ESI_GETI_IMM. */
  /* Failure: class-changed at depth 3. */
  var x;
  x = {"1": {"0": {"0": 1, "c": 2}, "c": 2}, "0": {"0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x[a]["0"].c;
    }
    assertEquals(1, x[a]["0"]["0"]);
  }
}

function testPropertyValueTransfer_293() {
  /* Instructions: ESI_GET, ESI_GETI_IMM, ESI_GETI_IMM. */
  /* Failure: becomes-sparse at depth 1. */
  var x;
  x = {"1": {"0": {"0": 1, "c": 2}, "c": 2}, "0": {"0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      x[10000] = 2;
    }
    assertEquals(1, x[a]["0"]["0"]);
  }
}

function testPropertyValueTransfer_294() {
  /* Instructions: ESI_GET, ESI_GETI_IMM, ESI_GETI_IMM. */
  /* Failure: becomes-sparse at depth 2. */
  var x;
  x = {"1": {"0": {"0": 1, "c": 2}, "c": 2}, "0": {"0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      x[a][10000] = 2;
    }
    assertEquals(1, x[a]["0"]["0"]);
  }
}

function testPropertyValueTransfer_295() {
  /* Instructions: ESI_GET, ESI_GETI_IMM, ESI_GETI_IMM. */
  /* Failure: becomes-sparse at depth 3. */
  var x;
  x = {"1": {"0": {"0": 1, "c": 2}, "c": 2}, "0": {"0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      x[a]["0"][10000] = 2;
    }
    assertEquals(1, x[a]["0"]["0"]);
  }
}

function testPropertyValueTransfer_296() {
  /* Instructions: ESI_GET, ESI_GETI_IMM, ESI_GETN_IMM. */
  var x;
  x = {"1": {"0": {"a": 1, "c": 2}, "c": 2}, "0": {"0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    assertEquals(1, x[a]["0"].a);
  }
}

function testPropertyValueTransfer_297() {
  /* Instructions: ESI_GET, ESI_GETI_IMM, ESI_GETN_IMM. */
  /* Failure: non-object at depth 1. */
  function test(){
    var x;
    x = {"1": {"0": {"a": 1, "c": 2}, "c": 2}, "0": {"0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x = null;
      }
      x[a]["0"].a;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_298() {
  /* Instructions: ESI_GET, ESI_GETI_IMM, ESI_GETN_IMM. */
  /* Failure: non-object at depth 2. */
  function test(){
    var x;
    x = {"1": {"0": {"a": 1, "c": 2}, "c": 2}, "0": {"0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x[a] = null;
      }
      x[a]["0"].a;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_299() {
  /* Instructions: ESI_GET, ESI_GETI_IMM, ESI_GETN_IMM. */
  /* Failure: non-object at depth 3. */
  function test(){
    var x;
    x = {"1": {"0": {"a": 1, "c": 2}, "c": 2}, "0": {"0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x[a]["0"] = null;
      }
      x[a]["0"].a;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_300() {
  /* Instructions: ESI_GET, ESI_GETI_IMM, ESI_GETN_IMM. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    var x;
    x = {"1": {"0": {"a": 1, "c": 2}, "c": 2}, "0": {"0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        delete x[a];
      }
      x[a]["0"].a;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_301() {
  /* Instructions: ESI_GET, ESI_GETI_IMM, ESI_GETN_IMM. */
  /* Failure: property-no-longer-exists at depth 3. */
  function test(){
    var x;
    x = {"1": {"0": {"a": 1, "c": 2}, "c": 2}, "0": {"0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        delete x[a]["0"];
      }
      x[a]["0"].a;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_302() {
  /* Instructions: ESI_GET, ESI_GETI_IMM, ESI_GETN_IMM. */
  /* Failure: property-no-longer-exists at depth 4. */
  var x;
  x = {"1": {"0": {"a": 1, "c": 2}, "c": 2}, "0": {"0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x[a]["0"].a;
    }
    assertEquals(i === 99 ? undefined : 1, x[a]["0"].a);
  }
}

function testPropertyValueTransfer_303() {
  /* Instructions: ESI_GET, ESI_GETI_IMM, ESI_GETN_IMM. */
  /* Failure: class-changed at depth 1. */
  var x;
  x = {"1": {"0": {"a": 1, "c": 2}, "c": 2}, "0": {"0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x.c;
    }
    assertEquals(1, x[a]["0"].a);
  }
}

function testPropertyValueTransfer_304() {
  /* Instructions: ESI_GET, ESI_GETI_IMM, ESI_GETN_IMM. */
  /* Failure: class-changed at depth 2. */
  var x;
  x = {"1": {"0": {"a": 1, "c": 2}, "c": 2}, "0": {"0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x[a].c;
    }
    assertEquals(1, x[a]["0"].a);
  }
}

function testPropertyValueTransfer_305() {
  /* Instructions: ESI_GET, ESI_GETI_IMM, ESI_GETN_IMM. */
  /* Failure: class-changed at depth 3. */
  var x;
  x = {"1": {"0": {"a": 1, "c": 2}, "c": 2}, "0": {"0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x[a]["0"].c;
    }
    assertEquals(1, x[a]["0"].a);
  }
}

function testPropertyValueTransfer_306() {
  /* Instructions: ESI_GET, ESI_GETI_IMM, ESI_GETN_IMM. */
  /* Failure: becomes-sparse at depth 1. */
  var x;
  x = {"1": {"0": {"a": 1, "c": 2}, "c": 2}, "0": {"0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      x[10000] = 2;
    }
    assertEquals(1, x[a]["0"].a);
  }
}

function testPropertyValueTransfer_307() {
  /* Instructions: ESI_GET, ESI_GETI_IMM, ESI_GETN_IMM. */
  /* Failure: becomes-sparse at depth 2. */
  var x;
  x = {"1": {"0": {"a": 1, "c": 2}, "c": 2}, "0": {"0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      x[a][10000] = 2;
    }
    assertEquals(1, x[a]["0"].a);
  }
}

function testPropertyValueTransfer_308() {
  /* Instructions: ESI_GET, ESI_GETI_IMM, ESI_PUT. */
  var x;
  x = {"1": {"0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "0": {"0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    x[a]["0"][b] = 42;
    assertEquals(42, x[a]["0"][b]);
  }
}

function testPropertyValueTransfer_309() {
  /* Instructions: ESI_GET, ESI_GETI_IMM, ESI_PUT. */
  /* Failure: non-object at depth 1. */
  function test(){
    var x;
    x = {"1": {"0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "0": {"0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      var b = i % 2;
      if (i === 99) {
        x = null;
      }
      x[a]["0"][b] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_310() {
  /* Instructions: ESI_GET, ESI_GETI_IMM, ESI_PUT. */
  /* Failure: non-object at depth 2. */
  function test(){
    var x;
    x = {"1": {"0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "0": {"0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      var b = i % 2;
      if (i === 99) {
        x[a] = null;
      }
      x[a]["0"][b] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_311() {
  /* Instructions: ESI_GET, ESI_GETI_IMM, ESI_PUT. */
  /* Failure: non-object at depth 3. */
  function test(){
    var x;
    x = {"1": {"0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "0": {"0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      var b = i % 2;
      if (i === 99) {
        x[a]["0"] = null;
      }
      x[a]["0"][b] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_312() {
  /* Instructions: ESI_GET, ESI_GETI_IMM, ESI_PUT. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    var x;
    x = {"1": {"0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "0": {"0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      var b = i % 2;
      if (i === 99) {
        delete x[a];
      }
      x[a]["0"][b] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_313() {
  /* Instructions: ESI_GET, ESI_GETI_IMM, ESI_PUT. */
  /* Failure: property-no-longer-exists at depth 3. */
  function test(){
    var x;
    x = {"1": {"0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "0": {"0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      var b = i % 2;
      if (i === 99) {
        delete x[a]["0"];
      }
      x[a]["0"][b] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_314() {
  /* Instructions: ESI_GET, ESI_GETI_IMM, ESI_PUT. */
  /* Failure: property-no-longer-exists at depth 4. */
  var x;
  x = {"1": {"0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "0": {"0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    if (i === 99) {
      delete x[a]["0"][b];
    }
    x[a]["0"][b] = 42;
    assertEquals(42, x[a]["0"][b]);
  }
}

function testPropertyValueTransfer_315() {
  /* Instructions: ESI_GET, ESI_GETI_IMM, ESI_PUT. */
  /* Failure: class-changed at depth 1. */
  var x;
  x = {"1": {"0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "0": {"0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    if (i === 99) {
      delete x.c;
    }
    x[a]["0"][b] = 42;
    assertEquals(42, x[a]["0"][b]);
  }
}

function testPropertyValueTransfer_316() {
  /* Instructions: ESI_GET, ESI_GETI_IMM, ESI_PUT. */
  /* Failure: class-changed at depth 2. */
  var x;
  x = {"1": {"0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "0": {"0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    if (i === 99) {
      delete x[a].c;
    }
    x[a]["0"][b] = 42;
    assertEquals(42, x[a]["0"][b]);
  }
}

function testPropertyValueTransfer_317() {
  /* Instructions: ESI_GET, ESI_GETI_IMM, ESI_PUT. */
  /* Failure: class-changed at depth 3. */
  var x;
  x = {"1": {"0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "0": {"0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    if (i === 99) {
      delete x[a]["0"].c;
    }
    x[a]["0"][b] = 42;
    assertEquals(42, x[a]["0"][b]);
  }
}

function testPropertyValueTransfer_318() {
  /* Instructions: ESI_GET, ESI_GETI_IMM, ESI_PUT. */
  /* Failure: becomes-sparse at depth 1. */
  var x;
  x = {"1": {"0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "0": {"0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    if (i === 99) {
      x[10000] = 2;
    }
    x[a]["0"][b] = 42;
    assertEquals(42, x[a]["0"][b]);
  }
}

function testPropertyValueTransfer_319() {
  /* Instructions: ESI_GET, ESI_GETI_IMM, ESI_PUT. */
  /* Failure: becomes-sparse at depth 2. */
  var x;
  x = {"1": {"0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "0": {"0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    if (i === 99) {
      x[a][10000] = 2;
    }
    x[a]["0"][b] = 42;
    assertEquals(42, x[a]["0"][b]);
  }
}

function testPropertyValueTransfer_320() {
  /* Instructions: ESI_GET, ESI_GETI_IMM, ESI_PUTI_IMM. */
  var x;
  x = {"1": {"0": {"0": 1, "c": 2}, "c": 2}, "0": {"0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    x[a]["0"]["0"] = 42;
    assertEquals(42, x[a]["0"]["0"]);
  }
}

function testPropertyValueTransfer_321() {
  /* Instructions: ESI_GET, ESI_GETI_IMM, ESI_PUTI_IMM. */
  /* Failure: non-object at depth 1. */
  function test(){
    var x;
    x = {"1": {"0": {"0": 1, "c": 2}, "c": 2}, "0": {"0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x = null;
      }
      x[a]["0"]["0"] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_322() {
  /* Instructions: ESI_GET, ESI_GETI_IMM, ESI_PUTI_IMM. */
  /* Failure: non-object at depth 2. */
  function test(){
    var x;
    x = {"1": {"0": {"0": 1, "c": 2}, "c": 2}, "0": {"0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x[a] = null;
      }
      x[a]["0"]["0"] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_323() {
  /* Instructions: ESI_GET, ESI_GETI_IMM, ESI_PUTI_IMM. */
  /* Failure: non-object at depth 3. */
  function test(){
    var x;
    x = {"1": {"0": {"0": 1, "c": 2}, "c": 2}, "0": {"0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x[a]["0"] = null;
      }
      x[a]["0"]["0"] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_324() {
  /* Instructions: ESI_GET, ESI_GETI_IMM, ESI_PUTI_IMM. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    var x;
    x = {"1": {"0": {"0": 1, "c": 2}, "c": 2}, "0": {"0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        delete x[a];
      }
      x[a]["0"]["0"] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_325() {
  /* Instructions: ESI_GET, ESI_GETI_IMM, ESI_PUTI_IMM. */
  /* Failure: property-no-longer-exists at depth 3. */
  function test(){
    var x;
    x = {"1": {"0": {"0": 1, "c": 2}, "c": 2}, "0": {"0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        delete x[a]["0"];
      }
      x[a]["0"]["0"] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_326() {
  /* Instructions: ESI_GET, ESI_GETI_IMM, ESI_PUTI_IMM. */
  /* Failure: property-no-longer-exists at depth 4. */
  var x;
  x = {"1": {"0": {"0": 1, "c": 2}, "c": 2}, "0": {"0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x[a]["0"]["0"];
    }
    x[a]["0"]["0"] = 42;
    assertEquals(42, x[a]["0"]["0"]);
  }
}

function testPropertyValueTransfer_327() {
  /* Instructions: ESI_GET, ESI_GETI_IMM, ESI_PUTI_IMM. */
  /* Failure: class-changed at depth 1. */
  var x;
  x = {"1": {"0": {"0": 1, "c": 2}, "c": 2}, "0": {"0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x.c;
    }
    x[a]["0"]["0"] = 42;
    assertEquals(42, x[a]["0"]["0"]);
  }
}

function testPropertyValueTransfer_328() {
  /* Instructions: ESI_GET, ESI_GETI_IMM, ESI_PUTI_IMM. */
  /* Failure: class-changed at depth 2. */
  var x;
  x = {"1": {"0": {"0": 1, "c": 2}, "c": 2}, "0": {"0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x[a].c;
    }
    x[a]["0"]["0"] = 42;
    assertEquals(42, x[a]["0"]["0"]);
  }
}

function testPropertyValueTransfer_329() {
  /* Instructions: ESI_GET, ESI_GETI_IMM, ESI_PUTI_IMM. */
  /* Failure: class-changed at depth 3. */
  var x;
  x = {"1": {"0": {"0": 1, "c": 2}, "c": 2}, "0": {"0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x[a]["0"].c;
    }
    x[a]["0"]["0"] = 42;
    assertEquals(42, x[a]["0"]["0"]);
  }
}

function testPropertyValueTransfer_330() {
  /* Instructions: ESI_GET, ESI_GETI_IMM, ESI_PUTI_IMM. */
  /* Failure: becomes-sparse at depth 1. */
  var x;
  x = {"1": {"0": {"0": 1, "c": 2}, "c": 2}, "0": {"0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      x[10000] = 2;
    }
    x[a]["0"]["0"] = 42;
    assertEquals(42, x[a]["0"]["0"]);
  }
}

function testPropertyValueTransfer_331() {
  /* Instructions: ESI_GET, ESI_GETI_IMM, ESI_PUTI_IMM. */
  /* Failure: becomes-sparse at depth 2. */
  var x;
  x = {"1": {"0": {"0": 1, "c": 2}, "c": 2}, "0": {"0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      x[a][10000] = 2;
    }
    x[a]["0"]["0"] = 42;
    assertEquals(42, x[a]["0"]["0"]);
  }
}

function testPropertyValueTransfer_332() {
  /* Instructions: ESI_GET, ESI_GETI_IMM, ESI_PUTN_IMM. */
  var x;
  x = {"1": {"0": {"a": 1, "c": 2}, "c": 2}, "0": {"0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    x[a]["0"].a = 42;
    assertEquals(42, x[a]["0"].a);
  }
}

function testPropertyValueTransfer_333() {
  /* Instructions: ESI_GET, ESI_GETI_IMM, ESI_PUTN_IMM. */
  /* Failure: non-object at depth 1. */
  function test(){
    var x;
    x = {"1": {"0": {"a": 1, "c": 2}, "c": 2}, "0": {"0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x = null;
      }
      x[a]["0"].a = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_334() {
  /* Instructions: ESI_GET, ESI_GETI_IMM, ESI_PUTN_IMM. */
  /* Failure: non-object at depth 2. */
  function test(){
    var x;
    x = {"1": {"0": {"a": 1, "c": 2}, "c": 2}, "0": {"0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x[a] = null;
      }
      x[a]["0"].a = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_335() {
  /* Instructions: ESI_GET, ESI_GETI_IMM, ESI_PUTN_IMM. */
  /* Failure: non-object at depth 3. */
  function test(){
    var x;
    x = {"1": {"0": {"a": 1, "c": 2}, "c": 2}, "0": {"0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x[a]["0"] = null;
      }
      x[a]["0"].a = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_336() {
  /* Instructions: ESI_GET, ESI_GETI_IMM, ESI_PUTN_IMM. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    var x;
    x = {"1": {"0": {"a": 1, "c": 2}, "c": 2}, "0": {"0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        delete x[a];
      }
      x[a]["0"].a = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_337() {
  /* Instructions: ESI_GET, ESI_GETI_IMM, ESI_PUTN_IMM. */
  /* Failure: property-no-longer-exists at depth 3. */
  function test(){
    var x;
    x = {"1": {"0": {"a": 1, "c": 2}, "c": 2}, "0": {"0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        delete x[a]["0"];
      }
      x[a]["0"].a = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_338() {
  /* Instructions: ESI_GET, ESI_GETI_IMM, ESI_PUTN_IMM. */
  /* Failure: property-no-longer-exists at depth 4. */
  var x;
  x = {"1": {"0": {"a": 1, "c": 2}, "c": 2}, "0": {"0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x[a]["0"].a;
    }
    x[a]["0"].a = 42;
    assertEquals(42, x[a]["0"].a);
  }
}

function testPropertyValueTransfer_339() {
  /* Instructions: ESI_GET, ESI_GETI_IMM, ESI_PUTN_IMM. */
  /* Failure: class-changed at depth 1. */
  var x;
  x = {"1": {"0": {"a": 1, "c": 2}, "c": 2}, "0": {"0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x.c;
    }
    x[a]["0"].a = 42;
    assertEquals(42, x[a]["0"].a);
  }
}

function testPropertyValueTransfer_340() {
  /* Instructions: ESI_GET, ESI_GETI_IMM, ESI_PUTN_IMM. */
  /* Failure: class-changed at depth 2. */
  var x;
  x = {"1": {"0": {"a": 1, "c": 2}, "c": 2}, "0": {"0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x[a].c;
    }
    x[a]["0"].a = 42;
    assertEquals(42, x[a]["0"].a);
  }
}

function testPropertyValueTransfer_341() {
  /* Instructions: ESI_GET, ESI_GETI_IMM, ESI_PUTN_IMM. */
  /* Failure: class-changed at depth 3. */
  var x;
  x = {"1": {"0": {"a": 1, "c": 2}, "c": 2}, "0": {"0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x[a]["0"].c;
    }
    x[a]["0"].a = 42;
    assertEquals(42, x[a]["0"].a);
  }
}

function testPropertyValueTransfer_342() {
  /* Instructions: ESI_GET, ESI_GETI_IMM, ESI_PUTN_IMM. */
  /* Failure: becomes-sparse at depth 1. */
  var x;
  x = {"1": {"0": {"a": 1, "c": 2}, "c": 2}, "0": {"0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      x[10000] = 2;
    }
    x[a]["0"].a = 42;
    assertEquals(42, x[a]["0"].a);
  }
}

function testPropertyValueTransfer_343() {
  /* Instructions: ESI_GET, ESI_GETI_IMM, ESI_PUTN_IMM. */
  /* Failure: becomes-sparse at depth 2. */
  var x;
  x = {"1": {"0": {"a": 1, "c": 2}, "c": 2}, "0": {"0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      x[a][10000] = 2;
    }
    x[a]["0"].a = 42;
    assertEquals(42, x[a]["0"].a);
  }
}

function testPropertyValueTransfer_344() {
  /* Instructions: ESI_GET, ESI_GETN_IMM, ESI_GET. */
  var x;
  x = {"1": {"a": {"1": 1, "0": 1, "c": 2}, "c": 2}, "0": {"a": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    assertEquals(1, x[a].a[b]);
  }
}

function testPropertyValueTransfer_345() {
  /* Instructions: ESI_GET, ESI_GETN_IMM, ESI_GET. */
  /* Failure: non-object at depth 1. */
  function test(){
    var x;
    x = {"1": {"a": {"1": 1, "0": 1, "c": 2}, "c": 2}, "0": {"a": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      var b = i % 2;
      if (i === 99) {
        x = null;
      }
      x[a].a[b];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_346() {
  /* Instructions: ESI_GET, ESI_GETN_IMM, ESI_GET. */
  /* Failure: non-object at depth 2. */
  function test(){
    var x;
    x = {"1": {"a": {"1": 1, "0": 1, "c": 2}, "c": 2}, "0": {"a": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      var b = i % 2;
      if (i === 99) {
        x[a] = null;
      }
      x[a].a[b];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_347() {
  /* Instructions: ESI_GET, ESI_GETN_IMM, ESI_GET. */
  /* Failure: non-object at depth 3. */
  function test(){
    var x;
    x = {"1": {"a": {"1": 1, "0": 1, "c": 2}, "c": 2}, "0": {"a": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      var b = i % 2;
      if (i === 99) {
        x[a].a = null;
      }
      x[a].a[b];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_348() {
  /* Instructions: ESI_GET, ESI_GETN_IMM, ESI_GET. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    var x;
    x = {"1": {"a": {"1": 1, "0": 1, "c": 2}, "c": 2}, "0": {"a": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      var b = i % 2;
      if (i === 99) {
        delete x[a];
      }
      x[a].a[b];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_349() {
  /* Instructions: ESI_GET, ESI_GETN_IMM, ESI_GET. */
  /* Failure: property-no-longer-exists at depth 3. */
  function test(){
    var x;
    x = {"1": {"a": {"1": 1, "0": 1, "c": 2}, "c": 2}, "0": {"a": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      var b = i % 2;
      if (i === 99) {
        delete x[a].a;
      }
      x[a].a[b];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_350() {
  /* Instructions: ESI_GET, ESI_GETN_IMM, ESI_GET. */
  /* Failure: property-no-longer-exists at depth 4. */
  var x;
  x = {"1": {"a": {"1": 1, "0": 1, "c": 2}, "c": 2}, "0": {"a": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    if (i === 99) {
      delete x[a].a[b];
    }
    assertEquals(i === 99 ? undefined : 1, x[a].a[b]);
  }
}

function testPropertyValueTransfer_351() {
  /* Instructions: ESI_GET, ESI_GETN_IMM, ESI_GET. */
  /* Failure: class-changed at depth 1. */
  var x;
  x = {"1": {"a": {"1": 1, "0": 1, "c": 2}, "c": 2}, "0": {"a": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    if (i === 99) {
      delete x.c;
    }
    assertEquals(1, x[a].a[b]);
  }
}

function testPropertyValueTransfer_352() {
  /* Instructions: ESI_GET, ESI_GETN_IMM, ESI_GET. */
  /* Failure: class-changed at depth 2. */
  var x;
  x = {"1": {"a": {"1": 1, "0": 1, "c": 2}, "c": 2}, "0": {"a": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    if (i === 99) {
      delete x[a].c;
    }
    assertEquals(1, x[a].a[b]);
  }
}

function testPropertyValueTransfer_353() {
  /* Instructions: ESI_GET, ESI_GETN_IMM, ESI_GET. */
  /* Failure: class-changed at depth 3. */
  var x;
  x = {"1": {"a": {"1": 1, "0": 1, "c": 2}, "c": 2}, "0": {"a": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    if (i === 99) {
      delete x[a].a.c;
    }
    assertEquals(1, x[a].a[b]);
  }
}

function testPropertyValueTransfer_354() {
  /* Instructions: ESI_GET, ESI_GETN_IMM, ESI_GET. */
  /* Failure: becomes-sparse at depth 1. */
  var x;
  x = {"1": {"a": {"1": 1, "0": 1, "c": 2}, "c": 2}, "0": {"a": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    if (i === 99) {
      x[10000] = 2;
    }
    assertEquals(1, x[a].a[b]);
  }
}

function testPropertyValueTransfer_355() {
  /* Instructions: ESI_GET, ESI_GETN_IMM, ESI_GET. */
  /* Failure: becomes-sparse at depth 3. */
  var x;
  x = {"1": {"a": {"1": 1, "0": 1, "c": 2}, "c": 2}, "0": {"a": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    if (i === 99) {
      x[a].a[10000] = 2;
    }
    assertEquals(1, x[a].a[b]);
  }
}

function testPropertyValueTransfer_356() {
  /* Instructions: ESI_GET, ESI_GETN_IMM, ESI_GETI_IMM. */
  var x;
  x = {"1": {"a": {"0": 1, "c": 2}, "c": 2}, "0": {"a": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    assertEquals(1, x[a].a["0"]);
  }
}

function testPropertyValueTransfer_357() {
  /* Instructions: ESI_GET, ESI_GETN_IMM, ESI_GETI_IMM. */
  /* Failure: non-object at depth 1. */
  function test(){
    var x;
    x = {"1": {"a": {"0": 1, "c": 2}, "c": 2}, "0": {"a": {"0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x = null;
      }
      x[a].a["0"];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_358() {
  /* Instructions: ESI_GET, ESI_GETN_IMM, ESI_GETI_IMM. */
  /* Failure: non-object at depth 2. */
  function test(){
    var x;
    x = {"1": {"a": {"0": 1, "c": 2}, "c": 2}, "0": {"a": {"0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x[a] = null;
      }
      x[a].a["0"];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_359() {
  /* Instructions: ESI_GET, ESI_GETN_IMM, ESI_GETI_IMM. */
  /* Failure: non-object at depth 3. */
  function test(){
    var x;
    x = {"1": {"a": {"0": 1, "c": 2}, "c": 2}, "0": {"a": {"0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x[a].a = null;
      }
      x[a].a["0"];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_360() {
  /* Instructions: ESI_GET, ESI_GETN_IMM, ESI_GETI_IMM. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    var x;
    x = {"1": {"a": {"0": 1, "c": 2}, "c": 2}, "0": {"a": {"0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        delete x[a];
      }
      x[a].a["0"];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_361() {
  /* Instructions: ESI_GET, ESI_GETN_IMM, ESI_GETI_IMM. */
  /* Failure: property-no-longer-exists at depth 3. */
  function test(){
    var x;
    x = {"1": {"a": {"0": 1, "c": 2}, "c": 2}, "0": {"a": {"0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        delete x[a].a;
      }
      x[a].a["0"];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_362() {
  /* Instructions: ESI_GET, ESI_GETN_IMM, ESI_GETI_IMM. */
  /* Failure: property-no-longer-exists at depth 4. */
  var x;
  x = {"1": {"a": {"0": 1, "c": 2}, "c": 2}, "0": {"a": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x[a].a["0"];
    }
    assertEquals(i === 99 ? undefined : 1, x[a].a["0"]);
  }
}

function testPropertyValueTransfer_363() {
  /* Instructions: ESI_GET, ESI_GETN_IMM, ESI_GETI_IMM. */
  /* Failure: class-changed at depth 1. */
  var x;
  x = {"1": {"a": {"0": 1, "c": 2}, "c": 2}, "0": {"a": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x.c;
    }
    assertEquals(1, x[a].a["0"]);
  }
}

function testPropertyValueTransfer_364() {
  /* Instructions: ESI_GET, ESI_GETN_IMM, ESI_GETI_IMM. */
  /* Failure: class-changed at depth 2. */
  var x;
  x = {"1": {"a": {"0": 1, "c": 2}, "c": 2}, "0": {"a": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x[a].c;
    }
    assertEquals(1, x[a].a["0"]);
  }
}

function testPropertyValueTransfer_365() {
  /* Instructions: ESI_GET, ESI_GETN_IMM, ESI_GETI_IMM. */
  /* Failure: class-changed at depth 3. */
  var x;
  x = {"1": {"a": {"0": 1, "c": 2}, "c": 2}, "0": {"a": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x[a].a.c;
    }
    assertEquals(1, x[a].a["0"]);
  }
}

function testPropertyValueTransfer_366() {
  /* Instructions: ESI_GET, ESI_GETN_IMM, ESI_GETI_IMM. */
  /* Failure: becomes-sparse at depth 1. */
  var x;
  x = {"1": {"a": {"0": 1, "c": 2}, "c": 2}, "0": {"a": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      x[10000] = 2;
    }
    assertEquals(1, x[a].a["0"]);
  }
}

function testPropertyValueTransfer_367() {
  /* Instructions: ESI_GET, ESI_GETN_IMM, ESI_GETI_IMM. */
  /* Failure: becomes-sparse at depth 3. */
  var x;
  x = {"1": {"a": {"0": 1, "c": 2}, "c": 2}, "0": {"a": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      x[a].a[10000] = 2;
    }
    assertEquals(1, x[a].a["0"]);
  }
}

function testPropertyValueTransfer_368() {
  /* Instructions: ESI_GET, ESI_GETN_IMM, ESI_GETN_IMM. */
  var x;
  x = {"1": {"a": {"a": 1, "c": 2}, "c": 2}, "0": {"a": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    assertEquals(1, x[a].a.a);
  }
}

function testPropertyValueTransfer_369() {
  /* Instructions: ESI_GET, ESI_GETN_IMM, ESI_GETN_IMM. */
  /* Failure: non-object at depth 1. */
  function test(){
    var x;
    x = {"1": {"a": {"a": 1, "c": 2}, "c": 2}, "0": {"a": {"a": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x = null;
      }
      x[a].a.a;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_370() {
  /* Instructions: ESI_GET, ESI_GETN_IMM, ESI_GETN_IMM. */
  /* Failure: non-object at depth 2. */
  function test(){
    var x;
    x = {"1": {"a": {"a": 1, "c": 2}, "c": 2}, "0": {"a": {"a": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x[a] = null;
      }
      x[a].a.a;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_371() {
  /* Instructions: ESI_GET, ESI_GETN_IMM, ESI_GETN_IMM. */
  /* Failure: non-object at depth 3. */
  function test(){
    var x;
    x = {"1": {"a": {"a": 1, "c": 2}, "c": 2}, "0": {"a": {"a": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x[a].a = null;
      }
      x[a].a.a;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_372() {
  /* Instructions: ESI_GET, ESI_GETN_IMM, ESI_GETN_IMM. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    var x;
    x = {"1": {"a": {"a": 1, "c": 2}, "c": 2}, "0": {"a": {"a": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        delete x[a];
      }
      x[a].a.a;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_373() {
  /* Instructions: ESI_GET, ESI_GETN_IMM, ESI_GETN_IMM. */
  /* Failure: property-no-longer-exists at depth 3. */
  function test(){
    var x;
    x = {"1": {"a": {"a": 1, "c": 2}, "c": 2}, "0": {"a": {"a": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        delete x[a].a;
      }
      x[a].a.a;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_374() {
  /* Instructions: ESI_GET, ESI_GETN_IMM, ESI_GETN_IMM. */
  /* Failure: property-no-longer-exists at depth 4. */
  var x;
  x = {"1": {"a": {"a": 1, "c": 2}, "c": 2}, "0": {"a": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x[a].a.a;
    }
    assertEquals(i === 99 ? undefined : 1, x[a].a.a);
  }
}

function testPropertyValueTransfer_375() {
  /* Instructions: ESI_GET, ESI_GETN_IMM, ESI_GETN_IMM. */
  /* Failure: class-changed at depth 1. */
  var x;
  x = {"1": {"a": {"a": 1, "c": 2}, "c": 2}, "0": {"a": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x.c;
    }
    assertEquals(1, x[a].a.a);
  }
}

function testPropertyValueTransfer_376() {
  /* Instructions: ESI_GET, ESI_GETN_IMM, ESI_GETN_IMM. */
  /* Failure: class-changed at depth 2. */
  var x;
  x = {"1": {"a": {"a": 1, "c": 2}, "c": 2}, "0": {"a": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x[a].c;
    }
    assertEquals(1, x[a].a.a);
  }
}

function testPropertyValueTransfer_377() {
  /* Instructions: ESI_GET, ESI_GETN_IMM, ESI_GETN_IMM. */
  /* Failure: class-changed at depth 3. */
  var x;
  x = {"1": {"a": {"a": 1, "c": 2}, "c": 2}, "0": {"a": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x[a].a.c;
    }
    assertEquals(1, x[a].a.a);
  }
}

function testPropertyValueTransfer_378() {
  /* Instructions: ESI_GET, ESI_GETN_IMM, ESI_GETN_IMM. */
  /* Failure: becomes-sparse at depth 1. */
  var x;
  x = {"1": {"a": {"a": 1, "c": 2}, "c": 2}, "0": {"a": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      x[10000] = 2;
    }
    assertEquals(1, x[a].a.a);
  }
}

function testPropertyValueTransfer_379() {
  /* Instructions: ESI_GET, ESI_GETN_IMM, ESI_PUT. */
  var x;
  x = {"1": {"a": {"1": 1, "0": 1, "c": 2}, "c": 2}, "0": {"a": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    x[a].a[b] = 42;
    assertEquals(42, x[a].a[b]);
  }
}

function testPropertyValueTransfer_380() {
  /* Instructions: ESI_GET, ESI_GETN_IMM, ESI_PUT. */
  /* Failure: non-object at depth 1. */
  function test(){
    var x;
    x = {"1": {"a": {"1": 1, "0": 1, "c": 2}, "c": 2}, "0": {"a": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      var b = i % 2;
      if (i === 99) {
        x = null;
      }
      x[a].a[b] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_381() {
  /* Instructions: ESI_GET, ESI_GETN_IMM, ESI_PUT. */
  /* Failure: non-object at depth 2. */
  function test(){
    var x;
    x = {"1": {"a": {"1": 1, "0": 1, "c": 2}, "c": 2}, "0": {"a": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      var b = i % 2;
      if (i === 99) {
        x[a] = null;
      }
      x[a].a[b] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_382() {
  /* Instructions: ESI_GET, ESI_GETN_IMM, ESI_PUT. */
  /* Failure: non-object at depth 3. */
  function test(){
    var x;
    x = {"1": {"a": {"1": 1, "0": 1, "c": 2}, "c": 2}, "0": {"a": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      var b = i % 2;
      if (i === 99) {
        x[a].a = null;
      }
      x[a].a[b] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_383() {
  /* Instructions: ESI_GET, ESI_GETN_IMM, ESI_PUT. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    var x;
    x = {"1": {"a": {"1": 1, "0": 1, "c": 2}, "c": 2}, "0": {"a": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      var b = i % 2;
      if (i === 99) {
        delete x[a];
      }
      x[a].a[b] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_384() {
  /* Instructions: ESI_GET, ESI_GETN_IMM, ESI_PUT. */
  /* Failure: property-no-longer-exists at depth 3. */
  function test(){
    var x;
    x = {"1": {"a": {"1": 1, "0": 1, "c": 2}, "c": 2}, "0": {"a": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      var b = i % 2;
      if (i === 99) {
        delete x[a].a;
      }
      x[a].a[b] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_385() {
  /* Instructions: ESI_GET, ESI_GETN_IMM, ESI_PUT. */
  /* Failure: property-no-longer-exists at depth 4. */
  var x;
  x = {"1": {"a": {"1": 1, "0": 1, "c": 2}, "c": 2}, "0": {"a": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    if (i === 99) {
      delete x[a].a[b];
    }
    x[a].a[b] = 42;
    assertEquals(42, x[a].a[b]);
  }
}

function testPropertyValueTransfer_386() {
  /* Instructions: ESI_GET, ESI_GETN_IMM, ESI_PUT. */
  /* Failure: class-changed at depth 1. */
  var x;
  x = {"1": {"a": {"1": 1, "0": 1, "c": 2}, "c": 2}, "0": {"a": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    if (i === 99) {
      delete x.c;
    }
    x[a].a[b] = 42;
    assertEquals(42, x[a].a[b]);
  }
}

function testPropertyValueTransfer_387() {
  /* Instructions: ESI_GET, ESI_GETN_IMM, ESI_PUT. */
  /* Failure: class-changed at depth 2. */
  var x;
  x = {"1": {"a": {"1": 1, "0": 1, "c": 2}, "c": 2}, "0": {"a": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    if (i === 99) {
      delete x[a].c;
    }
    x[a].a[b] = 42;
    assertEquals(42, x[a].a[b]);
  }
}

function testPropertyValueTransfer_388() {
  /* Instructions: ESI_GET, ESI_GETN_IMM, ESI_PUT. */
  /* Failure: class-changed at depth 3. */
  var x;
  x = {"1": {"a": {"1": 1, "0": 1, "c": 2}, "c": 2}, "0": {"a": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    if (i === 99) {
      delete x[a].a.c;
    }
    x[a].a[b] = 42;
    assertEquals(42, x[a].a[b]);
  }
}

function testPropertyValueTransfer_389() {
  /* Instructions: ESI_GET, ESI_GETN_IMM, ESI_PUT. */
  /* Failure: becomes-sparse at depth 1. */
  var x;
  x = {"1": {"a": {"1": 1, "0": 1, "c": 2}, "c": 2}, "0": {"a": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    if (i === 99) {
      x[10000] = 2;
    }
    x[a].a[b] = 42;
    assertEquals(42, x[a].a[b]);
  }
}

function testPropertyValueTransfer_390() {
  /* Instructions: ESI_GET, ESI_GETN_IMM, ESI_PUTI_IMM. */
  var x;
  x = {"1": {"a": {"0": 1, "c": 2}, "c": 2}, "0": {"a": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    x[a].a["0"] = 42;
    assertEquals(42, x[a].a["0"]);
  }
}

function testPropertyValueTransfer_391() {
  /* Instructions: ESI_GET, ESI_GETN_IMM, ESI_PUTI_IMM. */
  /* Failure: non-object at depth 1. */
  function test(){
    var x;
    x = {"1": {"a": {"0": 1, "c": 2}, "c": 2}, "0": {"a": {"0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x = null;
      }
      x[a].a["0"] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_392() {
  /* Instructions: ESI_GET, ESI_GETN_IMM, ESI_PUTI_IMM. */
  /* Failure: non-object at depth 2. */
  function test(){
    var x;
    x = {"1": {"a": {"0": 1, "c": 2}, "c": 2}, "0": {"a": {"0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x[a] = null;
      }
      x[a].a["0"] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_393() {
  /* Instructions: ESI_GET, ESI_GETN_IMM, ESI_PUTI_IMM. */
  /* Failure: non-object at depth 3. */
  function test(){
    var x;
    x = {"1": {"a": {"0": 1, "c": 2}, "c": 2}, "0": {"a": {"0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x[a].a = null;
      }
      x[a].a["0"] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_394() {
  /* Instructions: ESI_GET, ESI_GETN_IMM, ESI_PUTI_IMM. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    var x;
    x = {"1": {"a": {"0": 1, "c": 2}, "c": 2}, "0": {"a": {"0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        delete x[a];
      }
      x[a].a["0"] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_395() {
  /* Instructions: ESI_GET, ESI_GETN_IMM, ESI_PUTI_IMM. */
  /* Failure: property-no-longer-exists at depth 3. */
  function test(){
    var x;
    x = {"1": {"a": {"0": 1, "c": 2}, "c": 2}, "0": {"a": {"0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        delete x[a].a;
      }
      x[a].a["0"] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_396() {
  /* Instructions: ESI_GET, ESI_GETN_IMM, ESI_PUTI_IMM. */
  /* Failure: property-no-longer-exists at depth 4. */
  var x;
  x = {"1": {"a": {"0": 1, "c": 2}, "c": 2}, "0": {"a": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x[a].a["0"];
    }
    x[a].a["0"] = 42;
    assertEquals(42, x[a].a["0"]);
  }
}

function testPropertyValueTransfer_397() {
  /* Instructions: ESI_GET, ESI_GETN_IMM, ESI_PUTI_IMM. */
  /* Failure: class-changed at depth 1. */
  var x;
  x = {"1": {"a": {"0": 1, "c": 2}, "c": 2}, "0": {"a": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x.c;
    }
    x[a].a["0"] = 42;
    assertEquals(42, x[a].a["0"]);
  }
}

function testPropertyValueTransfer_398() {
  /* Instructions: ESI_GET, ESI_GETN_IMM, ESI_PUTI_IMM. */
  /* Failure: class-changed at depth 2. */
  var x;
  x = {"1": {"a": {"0": 1, "c": 2}, "c": 2}, "0": {"a": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x[a].c;
    }
    x[a].a["0"] = 42;
    assertEquals(42, x[a].a["0"]);
  }
}

function testPropertyValueTransfer_399() {
  /* Instructions: ESI_GET, ESI_GETN_IMM, ESI_PUTI_IMM. */
  /* Failure: class-changed at depth 3. */
  var x;
  x = {"1": {"a": {"0": 1, "c": 2}, "c": 2}, "0": {"a": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x[a].a.c;
    }
    x[a].a["0"] = 42;
    assertEquals(42, x[a].a["0"]);
  }
}

function testPropertyValueTransfer_400() {
  /* Instructions: ESI_GET, ESI_GETN_IMM, ESI_PUTI_IMM. */
  /* Failure: becomes-sparse at depth 1. */
  var x;
  x = {"1": {"a": {"0": 1, "c": 2}, "c": 2}, "0": {"a": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      x[10000] = 2;
    }
    x[a].a["0"] = 42;
    assertEquals(42, x[a].a["0"]);
  }
}

function testPropertyValueTransfer_401() {
  /* Instructions: ESI_GET, ESI_GETN_IMM, ESI_PUTN_IMM. */
  var x;
  x = {"1": {"a": {"a": 1, "c": 2}, "c": 2}, "0": {"a": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    x[a].a.a = 42;
    assertEquals(42, x[a].a.a);
  }
}

function testPropertyValueTransfer_402() {
  /* Instructions: ESI_GET, ESI_GETN_IMM, ESI_PUTN_IMM. */
  /* Failure: non-object at depth 1. */
  function test(){
    var x;
    x = {"1": {"a": {"a": 1, "c": 2}, "c": 2}, "0": {"a": {"a": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x = null;
      }
      x[a].a.a = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_403() {
  /* Instructions: ESI_GET, ESI_GETN_IMM, ESI_PUTN_IMM. */
  /* Failure: non-object at depth 2. */
  function test(){
    var x;
    x = {"1": {"a": {"a": 1, "c": 2}, "c": 2}, "0": {"a": {"a": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x[a] = null;
      }
      x[a].a.a = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_404() {
  /* Instructions: ESI_GET, ESI_GETN_IMM, ESI_PUTN_IMM. */
  /* Failure: non-object at depth 3. */
  function test(){
    var x;
    x = {"1": {"a": {"a": 1, "c": 2}, "c": 2}, "0": {"a": {"a": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x[a].a = null;
      }
      x[a].a.a = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_405() {
  /* Instructions: ESI_GET, ESI_GETN_IMM, ESI_PUTN_IMM. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    var x;
    x = {"1": {"a": {"a": 1, "c": 2}, "c": 2}, "0": {"a": {"a": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        delete x[a];
      }
      x[a].a.a = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_406() {
  /* Instructions: ESI_GET, ESI_GETN_IMM, ESI_PUTN_IMM. */
  /* Failure: property-no-longer-exists at depth 3. */
  function test(){
    var x;
    x = {"1": {"a": {"a": 1, "c": 2}, "c": 2}, "0": {"a": {"a": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        delete x[a].a;
      }
      x[a].a.a = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_407() {
  /* Instructions: ESI_GET, ESI_GETN_IMM, ESI_PUTN_IMM. */
  /* Failure: property-no-longer-exists at depth 4. */
  var x;
  x = {"1": {"a": {"a": 1, "c": 2}, "c": 2}, "0": {"a": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x[a].a.a;
    }
    x[a].a.a = 42;
    assertEquals(42, x[a].a.a);
  }
}

function testPropertyValueTransfer_408() {
  /* Instructions: ESI_GET, ESI_GETN_IMM, ESI_PUTN_IMM. */
  /* Failure: class-changed at depth 1. */
  var x;
  x = {"1": {"a": {"a": 1, "c": 2}, "c": 2}, "0": {"a": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x.c;
    }
    x[a].a.a = 42;
    assertEquals(42, x[a].a.a);
  }
}

function testPropertyValueTransfer_409() {
  /* Instructions: ESI_GET, ESI_GETN_IMM, ESI_PUTN_IMM. */
  /* Failure: class-changed at depth 2. */
  var x;
  x = {"1": {"a": {"a": 1, "c": 2}, "c": 2}, "0": {"a": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x[a].c;
    }
    x[a].a.a = 42;
    assertEquals(42, x[a].a.a);
  }
}

function testPropertyValueTransfer_410() {
  /* Instructions: ESI_GET, ESI_GETN_IMM, ESI_PUTN_IMM. */
  /* Failure: class-changed at depth 3. */
  var x;
  x = {"1": {"a": {"a": 1, "c": 2}, "c": 2}, "0": {"a": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x[a].a.c;
    }
    x[a].a.a = 42;
    assertEquals(42, x[a].a.a);
  }
}

function testPropertyValueTransfer_411() {
  /* Instructions: ESI_GET, ESI_GETN_IMM, ESI_PUTN_IMM. */
  /* Failure: becomes-sparse at depth 1. */
  var x;
  x = {"1": {"a": {"a": 1, "c": 2}, "c": 2}, "0": {"a": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      x[10000] = 2;
    }
    x[a].a.a = 42;
    assertEquals(42, x[a].a.a);
  }
}

function testPropertyValueTransfer_412() {
  /* Instructions: ESI_GETI_IMM, ESI_GET, ESI_GET. */
  var x;
  x = {"0": {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    assertEquals(1, x["0"][a][b]);
  }
}

function testPropertyValueTransfer_413() {
  /* Instructions: ESI_GETI_IMM, ESI_GET, ESI_GET. */
  /* Failure: non-object at depth 1. */
  function test(){
    var x;
    x = {"0": {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      var b = i % 2;
      if (i === 99) {
        x = null;
      }
      x["0"][a][b];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_414() {
  /* Instructions: ESI_GETI_IMM, ESI_GET, ESI_GET. */
  /* Failure: non-object at depth 2. */
  function test(){
    var x;
    x = {"0": {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      var b = i % 2;
      if (i === 99) {
        x["0"] = null;
      }
      x["0"][a][b];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_415() {
  /* Instructions: ESI_GETI_IMM, ESI_GET, ESI_GET. */
  /* Failure: non-object at depth 3. */
  function test(){
    var x;
    x = {"0": {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      var b = i % 2;
      if (i === 99) {
        x["0"][a] = null;
      }
      x["0"][a][b];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_416() {
  /* Instructions: ESI_GETI_IMM, ESI_GET, ESI_GET. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    var x;
    x = {"0": {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      var b = i % 2;
      if (i === 99) {
        delete x["0"];
      }
      x["0"][a][b];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_417() {
  /* Instructions: ESI_GETI_IMM, ESI_GET, ESI_GET. */
  /* Failure: property-no-longer-exists at depth 3. */
  function test(){
    var x;
    x = {"0": {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      var b = i % 2;
      if (i === 99) {
        delete x["0"][a];
      }
      x["0"][a][b];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_418() {
  /* Instructions: ESI_GETI_IMM, ESI_GET, ESI_GET. */
  /* Failure: property-no-longer-exists at depth 4. */
  var x;
  x = {"0": {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    if (i === 99) {
      delete x["0"][a][b];
    }
    assertEquals(i === 99 ? undefined : 1, x["0"][a][b]);
  }
}

function testPropertyValueTransfer_419() {
  /* Instructions: ESI_GETI_IMM, ESI_GET, ESI_GET. */
  /* Failure: class-changed at depth 1. */
  var x;
  x = {"0": {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    if (i === 99) {
      delete x.c;
    }
    assertEquals(1, x["0"][a][b]);
  }
}

function testPropertyValueTransfer_420() {
  /* Instructions: ESI_GETI_IMM, ESI_GET, ESI_GET. */
  /* Failure: class-changed at depth 2. */
  var x;
  x = {"0": {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    if (i === 99) {
      delete x["0"].c;
    }
    assertEquals(1, x["0"][a][b]);
  }
}

function testPropertyValueTransfer_421() {
  /* Instructions: ESI_GETI_IMM, ESI_GET, ESI_GET. */
  /* Failure: class-changed at depth 3. */
  var x;
  x = {"0": {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    if (i === 99) {
      delete x["0"][a].c;
    }
    assertEquals(1, x["0"][a][b]);
  }
}

function testPropertyValueTransfer_422() {
  /* Instructions: ESI_GETI_IMM, ESI_GET, ESI_GET. */
  /* Failure: becomes-sparse at depth 1. */
  var x;
  x = {"0": {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    if (i === 99) {
      x[10000] = 2;
    }
    assertEquals(1, x["0"][a][b]);
  }
}

function testPropertyValueTransfer_423() {
  /* Instructions: ESI_GETI_IMM, ESI_GET, ESI_GET. */
  /* Failure: becomes-sparse at depth 2. */
  var x;
  x = {"0": {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    if (i === 99) {
      x["0"][10000] = 2;
    }
    assertEquals(1, x["0"][a][b]);
  }
}

function testPropertyValueTransfer_424() {
  /* Instructions: ESI_GETI_IMM, ESI_GET, ESI_GET. */
  /* Failure: becomes-sparse at depth 3. */
  var x;
  x = {"0": {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    if (i === 99) {
      x["0"][a][10000] = 2;
    }
    assertEquals(1, x["0"][a][b]);
  }
}

function testPropertyValueTransfer_425() {
  /* Instructions: ESI_GETI_IMM, ESI_GET, ESI_GETI_IMM. */
  var x;
  x = {"0": {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    assertEquals(1, x["0"][a]["0"]);
  }
}

function testPropertyValueTransfer_426() {
  /* Instructions: ESI_GETI_IMM, ESI_GET, ESI_GETI_IMM. */
  /* Failure: non-object at depth 1. */
  function test(){
    var x;
    x = {"0": {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x = null;
      }
      x["0"][a]["0"];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_427() {
  /* Instructions: ESI_GETI_IMM, ESI_GET, ESI_GETI_IMM. */
  /* Failure: non-object at depth 2. */
  function test(){
    var x;
    x = {"0": {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x["0"] = null;
      }
      x["0"][a]["0"];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_428() {
  /* Instructions: ESI_GETI_IMM, ESI_GET, ESI_GETI_IMM. */
  /* Failure: non-object at depth 3. */
  function test(){
    var x;
    x = {"0": {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x["0"][a] = null;
      }
      x["0"][a]["0"];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_429() {
  /* Instructions: ESI_GETI_IMM, ESI_GET, ESI_GETI_IMM. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    var x;
    x = {"0": {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        delete x["0"];
      }
      x["0"][a]["0"];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_430() {
  /* Instructions: ESI_GETI_IMM, ESI_GET, ESI_GETI_IMM. */
  /* Failure: property-no-longer-exists at depth 3. */
  function test(){
    var x;
    x = {"0": {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        delete x["0"][a];
      }
      x["0"][a]["0"];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_431() {
  /* Instructions: ESI_GETI_IMM, ESI_GET, ESI_GETI_IMM. */
  /* Failure: property-no-longer-exists at depth 4. */
  var x;
  x = {"0": {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x["0"][a]["0"];
    }
    assertEquals(i === 99 ? undefined : 1, x["0"][a]["0"]);
  }
}

function testPropertyValueTransfer_432() {
  /* Instructions: ESI_GETI_IMM, ESI_GET, ESI_GETI_IMM. */
  /* Failure: class-changed at depth 1. */
  var x;
  x = {"0": {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x.c;
    }
    assertEquals(1, x["0"][a]["0"]);
  }
}

function testPropertyValueTransfer_433() {
  /* Instructions: ESI_GETI_IMM, ESI_GET, ESI_GETI_IMM. */
  /* Failure: class-changed at depth 2. */
  var x;
  x = {"0": {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x["0"].c;
    }
    assertEquals(1, x["0"][a]["0"]);
  }
}

function testPropertyValueTransfer_434() {
  /* Instructions: ESI_GETI_IMM, ESI_GET, ESI_GETI_IMM. */
  /* Failure: class-changed at depth 3. */
  var x;
  x = {"0": {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x["0"][a].c;
    }
    assertEquals(1, x["0"][a]["0"]);
  }
}

function testPropertyValueTransfer_435() {
  /* Instructions: ESI_GETI_IMM, ESI_GET, ESI_GETI_IMM. */
  /* Failure: becomes-sparse at depth 1. */
  var x;
  x = {"0": {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      x[10000] = 2;
    }
    assertEquals(1, x["0"][a]["0"]);
  }
}

function testPropertyValueTransfer_436() {
  /* Instructions: ESI_GETI_IMM, ESI_GET, ESI_GETI_IMM. */
  /* Failure: becomes-sparse at depth 2. */
  var x;
  x = {"0": {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      x["0"][10000] = 2;
    }
    assertEquals(1, x["0"][a]["0"]);
  }
}

function testPropertyValueTransfer_437() {
  /* Instructions: ESI_GETI_IMM, ESI_GET, ESI_GETI_IMM. */
  /* Failure: becomes-sparse at depth 3. */
  var x;
  x = {"0": {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      x["0"][a][10000] = 2;
    }
    assertEquals(1, x["0"][a]["0"]);
  }
}

function testPropertyValueTransfer_438() {
  /* Instructions: ESI_GETI_IMM, ESI_GET, ESI_GETN_IMM. */
  var x;
  x = {"0": {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    assertEquals(1, x["0"][a].a);
  }
}

function testPropertyValueTransfer_439() {
  /* Instructions: ESI_GETI_IMM, ESI_GET, ESI_GETN_IMM. */
  /* Failure: non-object at depth 1. */
  function test(){
    var x;
    x = {"0": {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x = null;
      }
      x["0"][a].a;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_440() {
  /* Instructions: ESI_GETI_IMM, ESI_GET, ESI_GETN_IMM. */
  /* Failure: non-object at depth 2. */
  function test(){
    var x;
    x = {"0": {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x["0"] = null;
      }
      x["0"][a].a;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_441() {
  /* Instructions: ESI_GETI_IMM, ESI_GET, ESI_GETN_IMM. */
  /* Failure: non-object at depth 3. */
  function test(){
    var x;
    x = {"0": {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x["0"][a] = null;
      }
      x["0"][a].a;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_442() {
  /* Instructions: ESI_GETI_IMM, ESI_GET, ESI_GETN_IMM. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    var x;
    x = {"0": {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        delete x["0"];
      }
      x["0"][a].a;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_443() {
  /* Instructions: ESI_GETI_IMM, ESI_GET, ESI_GETN_IMM. */
  /* Failure: property-no-longer-exists at depth 3. */
  function test(){
    var x;
    x = {"0": {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        delete x["0"][a];
      }
      x["0"][a].a;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_444() {
  /* Instructions: ESI_GETI_IMM, ESI_GET, ESI_GETN_IMM. */
  /* Failure: property-no-longer-exists at depth 4. */
  var x;
  x = {"0": {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x["0"][a].a;
    }
    assertEquals(i === 99 ? undefined : 1, x["0"][a].a);
  }
}

function testPropertyValueTransfer_445() {
  /* Instructions: ESI_GETI_IMM, ESI_GET, ESI_GETN_IMM. */
  /* Failure: class-changed at depth 1. */
  var x;
  x = {"0": {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x.c;
    }
    assertEquals(1, x["0"][a].a);
  }
}

function testPropertyValueTransfer_446() {
  /* Instructions: ESI_GETI_IMM, ESI_GET, ESI_GETN_IMM. */
  /* Failure: class-changed at depth 2. */
  var x;
  x = {"0": {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x["0"].c;
    }
    assertEquals(1, x["0"][a].a);
  }
}

function testPropertyValueTransfer_447() {
  /* Instructions: ESI_GETI_IMM, ESI_GET, ESI_GETN_IMM. */
  /* Failure: class-changed at depth 3. */
  var x;
  x = {"0": {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x["0"][a].c;
    }
    assertEquals(1, x["0"][a].a);
  }
}

function testPropertyValueTransfer_448() {
  /* Instructions: ESI_GETI_IMM, ESI_GET, ESI_GETN_IMM. */
  /* Failure: becomes-sparse at depth 1. */
  var x;
  x = {"0": {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      x[10000] = 2;
    }
    assertEquals(1, x["0"][a].a);
  }
}

function testPropertyValueTransfer_449() {
  /* Instructions: ESI_GETI_IMM, ESI_GET, ESI_GETN_IMM. */
  /* Failure: becomes-sparse at depth 2. */
  var x;
  x = {"0": {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      x["0"][10000] = 2;
    }
    assertEquals(1, x["0"][a].a);
  }
}

function testPropertyValueTransfer_450() {
  /* Instructions: ESI_GETI_IMM, ESI_GET, ESI_PUT. */
  var x;
  x = {"0": {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    x["0"][a][b] = 42;
    assertEquals(42, x["0"][a][b]);
  }
}

function testPropertyValueTransfer_451() {
  /* Instructions: ESI_GETI_IMM, ESI_GET, ESI_PUT. */
  /* Failure: non-object at depth 1. */
  function test(){
    var x;
    x = {"0": {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      var b = i % 2;
      if (i === 99) {
        x = null;
      }
      x["0"][a][b] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_452() {
  /* Instructions: ESI_GETI_IMM, ESI_GET, ESI_PUT. */
  /* Failure: non-object at depth 2. */
  function test(){
    var x;
    x = {"0": {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      var b = i % 2;
      if (i === 99) {
        x["0"] = null;
      }
      x["0"][a][b] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_453() {
  /* Instructions: ESI_GETI_IMM, ESI_GET, ESI_PUT. */
  /* Failure: non-object at depth 3. */
  function test(){
    var x;
    x = {"0": {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      var b = i % 2;
      if (i === 99) {
        x["0"][a] = null;
      }
      x["0"][a][b] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_454() {
  /* Instructions: ESI_GETI_IMM, ESI_GET, ESI_PUT. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    var x;
    x = {"0": {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      var b = i % 2;
      if (i === 99) {
        delete x["0"];
      }
      x["0"][a][b] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_455() {
  /* Instructions: ESI_GETI_IMM, ESI_GET, ESI_PUT. */
  /* Failure: property-no-longer-exists at depth 3. */
  function test(){
    var x;
    x = {"0": {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      var b = i % 2;
      if (i === 99) {
        delete x["0"][a];
      }
      x["0"][a][b] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_456() {
  /* Instructions: ESI_GETI_IMM, ESI_GET, ESI_PUT. */
  /* Failure: property-no-longer-exists at depth 4. */
  var x;
  x = {"0": {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    if (i === 99) {
      delete x["0"][a][b];
    }
    x["0"][a][b] = 42;
    assertEquals(42, x["0"][a][b]);
  }
}

function testPropertyValueTransfer_457() {
  /* Instructions: ESI_GETI_IMM, ESI_GET, ESI_PUT. */
  /* Failure: class-changed at depth 1. */
  var x;
  x = {"0": {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    if (i === 99) {
      delete x.c;
    }
    x["0"][a][b] = 42;
    assertEquals(42, x["0"][a][b]);
  }
}

function testPropertyValueTransfer_458() {
  /* Instructions: ESI_GETI_IMM, ESI_GET, ESI_PUT. */
  /* Failure: class-changed at depth 2. */
  var x;
  x = {"0": {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    if (i === 99) {
      delete x["0"].c;
    }
    x["0"][a][b] = 42;
    assertEquals(42, x["0"][a][b]);
  }
}

function testPropertyValueTransfer_459() {
  /* Instructions: ESI_GETI_IMM, ESI_GET, ESI_PUT. */
  /* Failure: class-changed at depth 3. */
  var x;
  x = {"0": {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    if (i === 99) {
      delete x["0"][a].c;
    }
    x["0"][a][b] = 42;
    assertEquals(42, x["0"][a][b]);
  }
}

function testPropertyValueTransfer_460() {
  /* Instructions: ESI_GETI_IMM, ESI_GET, ESI_PUT. */
  /* Failure: becomes-sparse at depth 1. */
  var x;
  x = {"0": {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    if (i === 99) {
      x[10000] = 2;
    }
    x["0"][a][b] = 42;
    assertEquals(42, x["0"][a][b]);
  }
}

function testPropertyValueTransfer_461() {
  /* Instructions: ESI_GETI_IMM, ESI_GET, ESI_PUT. */
  /* Failure: becomes-sparse at depth 2. */
  var x;
  x = {"0": {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    if (i === 99) {
      x["0"][10000] = 2;
    }
    x["0"][a][b] = 42;
    assertEquals(42, x["0"][a][b]);
  }
}

function testPropertyValueTransfer_462() {
  /* Instructions: ESI_GETI_IMM, ESI_GET, ESI_PUTI_IMM. */
  var x;
  x = {"0": {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    x["0"][a]["0"] = 42;
    assertEquals(42, x["0"][a]["0"]);
  }
}

function testPropertyValueTransfer_463() {
  /* Instructions: ESI_GETI_IMM, ESI_GET, ESI_PUTI_IMM. */
  /* Failure: non-object at depth 1. */
  function test(){
    var x;
    x = {"0": {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x = null;
      }
      x["0"][a]["0"] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_464() {
  /* Instructions: ESI_GETI_IMM, ESI_GET, ESI_PUTI_IMM. */
  /* Failure: non-object at depth 2. */
  function test(){
    var x;
    x = {"0": {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x["0"] = null;
      }
      x["0"][a]["0"] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_465() {
  /* Instructions: ESI_GETI_IMM, ESI_GET, ESI_PUTI_IMM. */
  /* Failure: non-object at depth 3. */
  function test(){
    var x;
    x = {"0": {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x["0"][a] = null;
      }
      x["0"][a]["0"] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_466() {
  /* Instructions: ESI_GETI_IMM, ESI_GET, ESI_PUTI_IMM. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    var x;
    x = {"0": {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        delete x["0"];
      }
      x["0"][a]["0"] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_467() {
  /* Instructions: ESI_GETI_IMM, ESI_GET, ESI_PUTI_IMM. */
  /* Failure: property-no-longer-exists at depth 3. */
  function test(){
    var x;
    x = {"0": {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        delete x["0"][a];
      }
      x["0"][a]["0"] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_468() {
  /* Instructions: ESI_GETI_IMM, ESI_GET, ESI_PUTI_IMM. */
  /* Failure: property-no-longer-exists at depth 4. */
  var x;
  x = {"0": {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x["0"][a]["0"];
    }
    x["0"][a]["0"] = 42;
    assertEquals(42, x["0"][a]["0"]);
  }
}

function testPropertyValueTransfer_469() {
  /* Instructions: ESI_GETI_IMM, ESI_GET, ESI_PUTI_IMM. */
  /* Failure: class-changed at depth 1. */
  var x;
  x = {"0": {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x.c;
    }
    x["0"][a]["0"] = 42;
    assertEquals(42, x["0"][a]["0"]);
  }
}

function testPropertyValueTransfer_470() {
  /* Instructions: ESI_GETI_IMM, ESI_GET, ESI_PUTI_IMM. */
  /* Failure: class-changed at depth 2. */
  var x;
  x = {"0": {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x["0"].c;
    }
    x["0"][a]["0"] = 42;
    assertEquals(42, x["0"][a]["0"]);
  }
}

function testPropertyValueTransfer_471() {
  /* Instructions: ESI_GETI_IMM, ESI_GET, ESI_PUTI_IMM. */
  /* Failure: class-changed at depth 3. */
  var x;
  x = {"0": {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x["0"][a].c;
    }
    x["0"][a]["0"] = 42;
    assertEquals(42, x["0"][a]["0"]);
  }
}

function testPropertyValueTransfer_472() {
  /* Instructions: ESI_GETI_IMM, ESI_GET, ESI_PUTI_IMM. */
  /* Failure: becomes-sparse at depth 1. */
  var x;
  x = {"0": {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      x[10000] = 2;
    }
    x["0"][a]["0"] = 42;
    assertEquals(42, x["0"][a]["0"]);
  }
}

function testPropertyValueTransfer_473() {
  /* Instructions: ESI_GETI_IMM, ESI_GET, ESI_PUTI_IMM. */
  /* Failure: becomes-sparse at depth 2. */
  var x;
  x = {"0": {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      x["0"][10000] = 2;
    }
    x["0"][a]["0"] = 42;
    assertEquals(42, x["0"][a]["0"]);
  }
}

function testPropertyValueTransfer_474() {
  /* Instructions: ESI_GETI_IMM, ESI_GET, ESI_PUTN_IMM. */
  var x;
  x = {"0": {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    x["0"][a].a = 42;
    assertEquals(42, x["0"][a].a);
  }
}

function testPropertyValueTransfer_475() {
  /* Instructions: ESI_GETI_IMM, ESI_GET, ESI_PUTN_IMM. */
  /* Failure: non-object at depth 1. */
  function test(){
    var x;
    x = {"0": {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x = null;
      }
      x["0"][a].a = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_476() {
  /* Instructions: ESI_GETI_IMM, ESI_GET, ESI_PUTN_IMM. */
  /* Failure: non-object at depth 2. */
  function test(){
    var x;
    x = {"0": {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x["0"] = null;
      }
      x["0"][a].a = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_477() {
  /* Instructions: ESI_GETI_IMM, ESI_GET, ESI_PUTN_IMM. */
  /* Failure: non-object at depth 3. */
  function test(){
    var x;
    x = {"0": {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x["0"][a] = null;
      }
      x["0"][a].a = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_478() {
  /* Instructions: ESI_GETI_IMM, ESI_GET, ESI_PUTN_IMM. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    var x;
    x = {"0": {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        delete x["0"];
      }
      x["0"][a].a = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_479() {
  /* Instructions: ESI_GETI_IMM, ESI_GET, ESI_PUTN_IMM. */
  /* Failure: property-no-longer-exists at depth 3. */
  function test(){
    var x;
    x = {"0": {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        delete x["0"][a];
      }
      x["0"][a].a = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_480() {
  /* Instructions: ESI_GETI_IMM, ESI_GET, ESI_PUTN_IMM. */
  /* Failure: property-no-longer-exists at depth 4. */
  var x;
  x = {"0": {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x["0"][a].a;
    }
    x["0"][a].a = 42;
    assertEquals(42, x["0"][a].a);
  }
}

function testPropertyValueTransfer_481() {
  /* Instructions: ESI_GETI_IMM, ESI_GET, ESI_PUTN_IMM. */
  /* Failure: class-changed at depth 1. */
  var x;
  x = {"0": {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x.c;
    }
    x["0"][a].a = 42;
    assertEquals(42, x["0"][a].a);
  }
}

function testPropertyValueTransfer_482() {
  /* Instructions: ESI_GETI_IMM, ESI_GET, ESI_PUTN_IMM. */
  /* Failure: class-changed at depth 2. */
  var x;
  x = {"0": {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x["0"].c;
    }
    x["0"][a].a = 42;
    assertEquals(42, x["0"][a].a);
  }
}

function testPropertyValueTransfer_483() {
  /* Instructions: ESI_GETI_IMM, ESI_GET, ESI_PUTN_IMM. */
  /* Failure: class-changed at depth 3. */
  var x;
  x = {"0": {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x["0"][a].c;
    }
    x["0"][a].a = 42;
    assertEquals(42, x["0"][a].a);
  }
}

function testPropertyValueTransfer_484() {
  /* Instructions: ESI_GETI_IMM, ESI_GET, ESI_PUTN_IMM. */
  /* Failure: becomes-sparse at depth 1. */
  var x;
  x = {"0": {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      x[10000] = 2;
    }
    x["0"][a].a = 42;
    assertEquals(42, x["0"][a].a);
  }
}

function testPropertyValueTransfer_485() {
  /* Instructions: ESI_GETI_IMM, ESI_GET, ESI_PUTN_IMM. */
  /* Failure: becomes-sparse at depth 2. */
  var x;
  x = {"0": {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      x["0"][10000] = 2;
    }
    x["0"][a].a = 42;
    assertEquals(42, x["0"][a].a);
  }
}

function testPropertyValueTransfer_486() {
  /* Instructions: ESI_GETI_IMM, ESI_GETI_IMM, ESI_GET. */
  var x;
  x = {"0": {"0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    assertEquals(1, x["0"]["0"][a]);
  }
}

function testPropertyValueTransfer_487() {
  /* Instructions: ESI_GETI_IMM, ESI_GETI_IMM, ESI_GET. */
  /* Failure: non-object at depth 1. */
  function test(){
    var x;
    x = {"0": {"0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x = null;
      }
      x["0"]["0"][a];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_488() {
  /* Instructions: ESI_GETI_IMM, ESI_GETI_IMM, ESI_GET. */
  /* Failure: non-object at depth 2. */
  function test(){
    var x;
    x = {"0": {"0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x["0"] = null;
      }
      x["0"]["0"][a];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_489() {
  /* Instructions: ESI_GETI_IMM, ESI_GETI_IMM, ESI_GET. */
  /* Failure: non-object at depth 3. */
  function test(){
    var x;
    x = {"0": {"0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x["0"]["0"] = null;
      }
      x["0"]["0"][a];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_490() {
  /* Instructions: ESI_GETI_IMM, ESI_GETI_IMM, ESI_GET. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    var x;
    x = {"0": {"0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        delete x["0"];
      }
      x["0"]["0"][a];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_491() {
  /* Instructions: ESI_GETI_IMM, ESI_GETI_IMM, ESI_GET. */
  /* Failure: property-no-longer-exists at depth 3. */
  function test(){
    var x;
    x = {"0": {"0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        delete x["0"]["0"];
      }
      x["0"]["0"][a];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_492() {
  /* Instructions: ESI_GETI_IMM, ESI_GETI_IMM, ESI_GET. */
  /* Failure: property-no-longer-exists at depth 4. */
  var x;
  x = {"0": {"0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x["0"]["0"][a];
    }
    assertEquals(i === 99 ? undefined : 1, x["0"]["0"][a]);
  }
}

function testPropertyValueTransfer_493() {
  /* Instructions: ESI_GETI_IMM, ESI_GETI_IMM, ESI_GET. */
  /* Failure: class-changed at depth 1. */
  var x;
  x = {"0": {"0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x.c;
    }
    assertEquals(1, x["0"]["0"][a]);
  }
}

function testPropertyValueTransfer_494() {
  /* Instructions: ESI_GETI_IMM, ESI_GETI_IMM, ESI_GET. */
  /* Failure: class-changed at depth 2. */
  var x;
  x = {"0": {"0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x["0"].c;
    }
    assertEquals(1, x["0"]["0"][a]);
  }
}

function testPropertyValueTransfer_495() {
  /* Instructions: ESI_GETI_IMM, ESI_GETI_IMM, ESI_GET. */
  /* Failure: class-changed at depth 3. */
  var x;
  x = {"0": {"0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x["0"]["0"].c;
    }
    assertEquals(1, x["0"]["0"][a]);
  }
}

function testPropertyValueTransfer_496() {
  /* Instructions: ESI_GETI_IMM, ESI_GETI_IMM, ESI_GET. */
  /* Failure: becomes-sparse at depth 1. */
  var x;
  x = {"0": {"0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      x[10000] = 2;
    }
    assertEquals(1, x["0"]["0"][a]);
  }
}

function testPropertyValueTransfer_497() {
  /* Instructions: ESI_GETI_IMM, ESI_GETI_IMM, ESI_GET. */
  /* Failure: becomes-sparse at depth 2. */
  var x;
  x = {"0": {"0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      x["0"][10000] = 2;
    }
    assertEquals(1, x["0"]["0"][a]);
  }
}

function testPropertyValueTransfer_498() {
  /* Instructions: ESI_GETI_IMM, ESI_GETI_IMM, ESI_GET. */
  /* Failure: becomes-sparse at depth 3. */
  var x;
  x = {"0": {"0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      x["0"]["0"][10000] = 2;
    }
    assertEquals(1, x["0"]["0"][a]);
  }
}

function testPropertyValueTransfer_499() {
  /* Instructions: ESI_GETI_IMM, ESI_GETI_IMM, ESI_GETI_IMM. */
  var x;
  x = {"0": {"0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    assertEquals(1, x["0"]["0"]["0"]);
  }
}

function testPropertyValueTransfer_500() {
  /* Instructions: ESI_GETI_IMM, ESI_GETI_IMM, ESI_GETI_IMM. */
  /* Failure: non-object at depth 1. */
  function test(){
    var x;
    x = {"0": {"0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        x = null;
      }
      x["0"]["0"]["0"];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_501() {
  /* Instructions: ESI_GETI_IMM, ESI_GETI_IMM, ESI_GETI_IMM. */
  /* Failure: non-object at depth 2. */
  function test(){
    var x;
    x = {"0": {"0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        x["0"] = null;
      }
      x["0"]["0"]["0"];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_502() {
  /* Instructions: ESI_GETI_IMM, ESI_GETI_IMM, ESI_GETI_IMM. */
  /* Failure: non-object at depth 3. */
  function test(){
    var x;
    x = {"0": {"0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        x["0"]["0"] = null;
      }
      x["0"]["0"]["0"];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_503() {
  /* Instructions: ESI_GETI_IMM, ESI_GETI_IMM, ESI_GETI_IMM. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    var x;
    x = {"0": {"0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        delete x["0"];
      }
      x["0"]["0"]["0"];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_504() {
  /* Instructions: ESI_GETI_IMM, ESI_GETI_IMM, ESI_GETI_IMM. */
  /* Failure: property-no-longer-exists at depth 3. */
  function test(){
    var x;
    x = {"0": {"0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        delete x["0"]["0"];
      }
      x["0"]["0"]["0"];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_505() {
  /* Instructions: ESI_GETI_IMM, ESI_GETI_IMM, ESI_GETI_IMM. */
  /* Failure: property-no-longer-exists at depth 4. */
  var x;
  x = {"0": {"0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x["0"]["0"]["0"];
    }
    assertEquals(i === 99 ? undefined : 1, x["0"]["0"]["0"]);
  }
}

function testPropertyValueTransfer_506() {
  /* Instructions: ESI_GETI_IMM, ESI_GETI_IMM, ESI_GETI_IMM. */
  /* Failure: class-changed at depth 1. */
  var x;
  x = {"0": {"0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x.c;
    }
    assertEquals(1, x["0"]["0"]["0"]);
  }
}

function testPropertyValueTransfer_507() {
  /* Instructions: ESI_GETI_IMM, ESI_GETI_IMM, ESI_GETI_IMM. */
  /* Failure: class-changed at depth 2. */
  var x;
  x = {"0": {"0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x["0"].c;
    }
    assertEquals(1, x["0"]["0"]["0"]);
  }
}

function testPropertyValueTransfer_508() {
  /* Instructions: ESI_GETI_IMM, ESI_GETI_IMM, ESI_GETI_IMM. */
  /* Failure: class-changed at depth 3. */
  var x;
  x = {"0": {"0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x["0"]["0"].c;
    }
    assertEquals(1, x["0"]["0"]["0"]);
  }
}

function testPropertyValueTransfer_509() {
  /* Instructions: ESI_GETI_IMM, ESI_GETI_IMM, ESI_GETI_IMM. */
  /* Failure: becomes-sparse at depth 1. */
  var x;
  x = {"0": {"0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      x[10000] = 2;
    }
    assertEquals(1, x["0"]["0"]["0"]);
  }
}

function testPropertyValueTransfer_510() {
  /* Instructions: ESI_GETI_IMM, ESI_GETI_IMM, ESI_GETI_IMM. */
  /* Failure: becomes-sparse at depth 2. */
  var x;
  x = {"0": {"0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      x["0"][10000] = 2;
    }
    assertEquals(1, x["0"]["0"]["0"]);
  }
}

function testPropertyValueTransfer_511() {
  /* Instructions: ESI_GETI_IMM, ESI_GETI_IMM, ESI_GETI_IMM. */
  /* Failure: becomes-sparse at depth 3. */
  var x;
  x = {"0": {"0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      x["0"]["0"][10000] = 2;
    }
    assertEquals(1, x["0"]["0"]["0"]);
  }
}

function testPropertyValueTransfer_512() {
  /* Instructions: ESI_GETI_IMM, ESI_GETI_IMM, ESI_GETN_IMM. */
  var x;
  x = {"0": {"0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    assertEquals(1, x["0"]["0"].a);
  }
}

function testPropertyValueTransfer_513() {
  /* Instructions: ESI_GETI_IMM, ESI_GETI_IMM, ESI_GETN_IMM. */
  /* Failure: non-object at depth 1. */
  function test(){
    var x;
    x = {"0": {"0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        x = null;
      }
      x["0"]["0"].a;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_514() {
  /* Instructions: ESI_GETI_IMM, ESI_GETI_IMM, ESI_GETN_IMM. */
  /* Failure: non-object at depth 2. */
  function test(){
    var x;
    x = {"0": {"0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        x["0"] = null;
      }
      x["0"]["0"].a;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_515() {
  /* Instructions: ESI_GETI_IMM, ESI_GETI_IMM, ESI_GETN_IMM. */
  /* Failure: non-object at depth 3. */
  function test(){
    var x;
    x = {"0": {"0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        x["0"]["0"] = null;
      }
      x["0"]["0"].a;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_516() {
  /* Instructions: ESI_GETI_IMM, ESI_GETI_IMM, ESI_GETN_IMM. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    var x;
    x = {"0": {"0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        delete x["0"];
      }
      x["0"]["0"].a;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_517() {
  /* Instructions: ESI_GETI_IMM, ESI_GETI_IMM, ESI_GETN_IMM. */
  /* Failure: property-no-longer-exists at depth 3. */
  function test(){
    var x;
    x = {"0": {"0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        delete x["0"]["0"];
      }
      x["0"]["0"].a;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_518() {
  /* Instructions: ESI_GETI_IMM, ESI_GETI_IMM, ESI_GETN_IMM. */
  /* Failure: property-no-longer-exists at depth 4. */
  var x;
  x = {"0": {"0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x["0"]["0"].a;
    }
    assertEquals(i === 99 ? undefined : 1, x["0"]["0"].a);
  }
}

function testPropertyValueTransfer_519() {
  /* Instructions: ESI_GETI_IMM, ESI_GETI_IMM, ESI_GETN_IMM. */
  /* Failure: class-changed at depth 1. */
  var x;
  x = {"0": {"0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x.c;
    }
    assertEquals(1, x["0"]["0"].a);
  }
}

function testPropertyValueTransfer_520() {
  /* Instructions: ESI_GETI_IMM, ESI_GETI_IMM, ESI_GETN_IMM. */
  /* Failure: class-changed at depth 2. */
  var x;
  x = {"0": {"0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x["0"].c;
    }
    assertEquals(1, x["0"]["0"].a);
  }
}

function testPropertyValueTransfer_521() {
  /* Instructions: ESI_GETI_IMM, ESI_GETI_IMM, ESI_GETN_IMM. */
  /* Failure: class-changed at depth 3. */
  var x;
  x = {"0": {"0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x["0"]["0"].c;
    }
    assertEquals(1, x["0"]["0"].a);
  }
}

function testPropertyValueTransfer_522() {
  /* Instructions: ESI_GETI_IMM, ESI_GETI_IMM, ESI_GETN_IMM. */
  /* Failure: becomes-sparse at depth 1. */
  var x;
  x = {"0": {"0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      x[10000] = 2;
    }
    assertEquals(1, x["0"]["0"].a);
  }
}

function testPropertyValueTransfer_523() {
  /* Instructions: ESI_GETI_IMM, ESI_GETI_IMM, ESI_GETN_IMM. */
  /* Failure: becomes-sparse at depth 2. */
  var x;
  x = {"0": {"0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      x["0"][10000] = 2;
    }
    assertEquals(1, x["0"]["0"].a);
  }
}

function testPropertyValueTransfer_524() {
  /* Instructions: ESI_GETI_IMM, ESI_GETI_IMM, ESI_PUT. */
  var x;
  x = {"0": {"0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    x["0"]["0"][a] = 42;
    assertEquals(42, x["0"]["0"][a]);
  }
}

function testPropertyValueTransfer_525() {
  /* Instructions: ESI_GETI_IMM, ESI_GETI_IMM, ESI_PUT. */
  /* Failure: non-object at depth 1. */
  function test(){
    var x;
    x = {"0": {"0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x = null;
      }
      x["0"]["0"][a] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_526() {
  /* Instructions: ESI_GETI_IMM, ESI_GETI_IMM, ESI_PUT. */
  /* Failure: non-object at depth 2. */
  function test(){
    var x;
    x = {"0": {"0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x["0"] = null;
      }
      x["0"]["0"][a] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_527() {
  /* Instructions: ESI_GETI_IMM, ESI_GETI_IMM, ESI_PUT. */
  /* Failure: non-object at depth 3. */
  function test(){
    var x;
    x = {"0": {"0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x["0"]["0"] = null;
      }
      x["0"]["0"][a] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_528() {
  /* Instructions: ESI_GETI_IMM, ESI_GETI_IMM, ESI_PUT. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    var x;
    x = {"0": {"0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        delete x["0"];
      }
      x["0"]["0"][a] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_529() {
  /* Instructions: ESI_GETI_IMM, ESI_GETI_IMM, ESI_PUT. */
  /* Failure: property-no-longer-exists at depth 3. */
  function test(){
    var x;
    x = {"0": {"0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        delete x["0"]["0"];
      }
      x["0"]["0"][a] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_530() {
  /* Instructions: ESI_GETI_IMM, ESI_GETI_IMM, ESI_PUT. */
  /* Failure: property-no-longer-exists at depth 4. */
  var x;
  x = {"0": {"0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x["0"]["0"][a];
    }
    x["0"]["0"][a] = 42;
    assertEquals(42, x["0"]["0"][a]);
  }
}

function testPropertyValueTransfer_531() {
  /* Instructions: ESI_GETI_IMM, ESI_GETI_IMM, ESI_PUT. */
  /* Failure: class-changed at depth 1. */
  var x;
  x = {"0": {"0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x.c;
    }
    x["0"]["0"][a] = 42;
    assertEquals(42, x["0"]["0"][a]);
  }
}

function testPropertyValueTransfer_532() {
  /* Instructions: ESI_GETI_IMM, ESI_GETI_IMM, ESI_PUT. */
  /* Failure: class-changed at depth 2. */
  var x;
  x = {"0": {"0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x["0"].c;
    }
    x["0"]["0"][a] = 42;
    assertEquals(42, x["0"]["0"][a]);
  }
}

function testPropertyValueTransfer_533() {
  /* Instructions: ESI_GETI_IMM, ESI_GETI_IMM, ESI_PUT. */
  /* Failure: class-changed at depth 3. */
  var x;
  x = {"0": {"0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x["0"]["0"].c;
    }
    x["0"]["0"][a] = 42;
    assertEquals(42, x["0"]["0"][a]);
  }
}

function testPropertyValueTransfer_534() {
  /* Instructions: ESI_GETI_IMM, ESI_GETI_IMM, ESI_PUT. */
  /* Failure: becomes-sparse at depth 1. */
  var x;
  x = {"0": {"0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      x[10000] = 2;
    }
    x["0"]["0"][a] = 42;
    assertEquals(42, x["0"]["0"][a]);
  }
}

function testPropertyValueTransfer_535() {
  /* Instructions: ESI_GETI_IMM, ESI_GETI_IMM, ESI_PUT. */
  /* Failure: becomes-sparse at depth 2. */
  var x;
  x = {"0": {"0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      x["0"][10000] = 2;
    }
    x["0"]["0"][a] = 42;
    assertEquals(42, x["0"]["0"][a]);
  }
}

function testPropertyValueTransfer_536() {
  /* Instructions: ESI_GETI_IMM, ESI_GETI_IMM, ESI_PUTI_IMM. */
  var x;
  x = {"0": {"0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    x["0"]["0"]["0"] = 42;
    assertEquals(42, x["0"]["0"]["0"]);
  }
}

function testPropertyValueTransfer_537() {
  /* Instructions: ESI_GETI_IMM, ESI_GETI_IMM, ESI_PUTI_IMM. */
  /* Failure: non-object at depth 1. */
  function test(){
    var x;
    x = {"0": {"0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        x = null;
      }
      x["0"]["0"]["0"] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_538() {
  /* Instructions: ESI_GETI_IMM, ESI_GETI_IMM, ESI_PUTI_IMM. */
  /* Failure: non-object at depth 2. */
  function test(){
    var x;
    x = {"0": {"0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        x["0"] = null;
      }
      x["0"]["0"]["0"] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_539() {
  /* Instructions: ESI_GETI_IMM, ESI_GETI_IMM, ESI_PUTI_IMM. */
  /* Failure: non-object at depth 3. */
  function test(){
    var x;
    x = {"0": {"0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        x["0"]["0"] = null;
      }
      x["0"]["0"]["0"] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_540() {
  /* Instructions: ESI_GETI_IMM, ESI_GETI_IMM, ESI_PUTI_IMM. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    var x;
    x = {"0": {"0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        delete x["0"];
      }
      x["0"]["0"]["0"] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_541() {
  /* Instructions: ESI_GETI_IMM, ESI_GETI_IMM, ESI_PUTI_IMM. */
  /* Failure: property-no-longer-exists at depth 3. */
  function test(){
    var x;
    x = {"0": {"0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        delete x["0"]["0"];
      }
      x["0"]["0"]["0"] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_542() {
  /* Instructions: ESI_GETI_IMM, ESI_GETI_IMM, ESI_PUTI_IMM. */
  /* Failure: property-no-longer-exists at depth 4. */
  var x;
  x = {"0": {"0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x["0"]["0"]["0"];
    }
    x["0"]["0"]["0"] = 42;
    assertEquals(42, x["0"]["0"]["0"]);
  }
}

function testPropertyValueTransfer_543() {
  /* Instructions: ESI_GETI_IMM, ESI_GETI_IMM, ESI_PUTI_IMM. */
  /* Failure: class-changed at depth 1. */
  var x;
  x = {"0": {"0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x.c;
    }
    x["0"]["0"]["0"] = 42;
    assertEquals(42, x["0"]["0"]["0"]);
  }
}

function testPropertyValueTransfer_544() {
  /* Instructions: ESI_GETI_IMM, ESI_GETI_IMM, ESI_PUTI_IMM. */
  /* Failure: class-changed at depth 2. */
  var x;
  x = {"0": {"0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x["0"].c;
    }
    x["0"]["0"]["0"] = 42;
    assertEquals(42, x["0"]["0"]["0"]);
  }
}

function testPropertyValueTransfer_545() {
  /* Instructions: ESI_GETI_IMM, ESI_GETI_IMM, ESI_PUTI_IMM. */
  /* Failure: class-changed at depth 3. */
  var x;
  x = {"0": {"0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x["0"]["0"].c;
    }
    x["0"]["0"]["0"] = 42;
    assertEquals(42, x["0"]["0"]["0"]);
  }
}

function testPropertyValueTransfer_546() {
  /* Instructions: ESI_GETI_IMM, ESI_GETI_IMM, ESI_PUTI_IMM. */
  /* Failure: becomes-sparse at depth 1. */
  var x;
  x = {"0": {"0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      x[10000] = 2;
    }
    x["0"]["0"]["0"] = 42;
    assertEquals(42, x["0"]["0"]["0"]);
  }
}

function testPropertyValueTransfer_547() {
  /* Instructions: ESI_GETI_IMM, ESI_GETI_IMM, ESI_PUTI_IMM. */
  /* Failure: becomes-sparse at depth 2. */
  var x;
  x = {"0": {"0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      x["0"][10000] = 2;
    }
    x["0"]["0"]["0"] = 42;
    assertEquals(42, x["0"]["0"]["0"]);
  }
}

function testPropertyValueTransfer_548() {
  /* Instructions: ESI_GETI_IMM, ESI_GETI_IMM, ESI_PUTN_IMM. */
  var x;
  x = {"0": {"0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    x["0"]["0"].a = 42;
    assertEquals(42, x["0"]["0"].a);
  }
}

function testPropertyValueTransfer_549() {
  /* Instructions: ESI_GETI_IMM, ESI_GETI_IMM, ESI_PUTN_IMM. */
  /* Failure: non-object at depth 1. */
  function test(){
    var x;
    x = {"0": {"0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        x = null;
      }
      x["0"]["0"].a = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_550() {
  /* Instructions: ESI_GETI_IMM, ESI_GETI_IMM, ESI_PUTN_IMM. */
  /* Failure: non-object at depth 2. */
  function test(){
    var x;
    x = {"0": {"0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        x["0"] = null;
      }
      x["0"]["0"].a = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_551() {
  /* Instructions: ESI_GETI_IMM, ESI_GETI_IMM, ESI_PUTN_IMM. */
  /* Failure: non-object at depth 3. */
  function test(){
    var x;
    x = {"0": {"0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        x["0"]["0"] = null;
      }
      x["0"]["0"].a = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_552() {
  /* Instructions: ESI_GETI_IMM, ESI_GETI_IMM, ESI_PUTN_IMM. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    var x;
    x = {"0": {"0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        delete x["0"];
      }
      x["0"]["0"].a = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_553() {
  /* Instructions: ESI_GETI_IMM, ESI_GETI_IMM, ESI_PUTN_IMM. */
  /* Failure: property-no-longer-exists at depth 3. */
  function test(){
    var x;
    x = {"0": {"0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        delete x["0"]["0"];
      }
      x["0"]["0"].a = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_554() {
  /* Instructions: ESI_GETI_IMM, ESI_GETI_IMM, ESI_PUTN_IMM. */
  /* Failure: property-no-longer-exists at depth 4. */
  var x;
  x = {"0": {"0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x["0"]["0"].a;
    }
    x["0"]["0"].a = 42;
    assertEquals(42, x["0"]["0"].a);
  }
}

function testPropertyValueTransfer_555() {
  /* Instructions: ESI_GETI_IMM, ESI_GETI_IMM, ESI_PUTN_IMM. */
  /* Failure: class-changed at depth 1. */
  var x;
  x = {"0": {"0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x.c;
    }
    x["0"]["0"].a = 42;
    assertEquals(42, x["0"]["0"].a);
  }
}

function testPropertyValueTransfer_556() {
  /* Instructions: ESI_GETI_IMM, ESI_GETI_IMM, ESI_PUTN_IMM. */
  /* Failure: class-changed at depth 2. */
  var x;
  x = {"0": {"0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x["0"].c;
    }
    x["0"]["0"].a = 42;
    assertEquals(42, x["0"]["0"].a);
  }
}

function testPropertyValueTransfer_557() {
  /* Instructions: ESI_GETI_IMM, ESI_GETI_IMM, ESI_PUTN_IMM. */
  /* Failure: class-changed at depth 3. */
  var x;
  x = {"0": {"0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x["0"]["0"].c;
    }
    x["0"]["0"].a = 42;
    assertEquals(42, x["0"]["0"].a);
  }
}

function testPropertyValueTransfer_558() {
  /* Instructions: ESI_GETI_IMM, ESI_GETI_IMM, ESI_PUTN_IMM. */
  /* Failure: becomes-sparse at depth 1. */
  var x;
  x = {"0": {"0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      x[10000] = 2;
    }
    x["0"]["0"].a = 42;
    assertEquals(42, x["0"]["0"].a);
  }
}

function testPropertyValueTransfer_559() {
  /* Instructions: ESI_GETI_IMM, ESI_GETI_IMM, ESI_PUTN_IMM. */
  /* Failure: becomes-sparse at depth 2. */
  var x;
  x = {"0": {"0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      x["0"][10000] = 2;
    }
    x["0"]["0"].a = 42;
    assertEquals(42, x["0"]["0"].a);
  }
}

function testPropertyValueTransfer_560() {
  /* Instructions: ESI_GETI_IMM, ESI_GETN_IMM, ESI_GET. */
  var x;
  x = {"0": {"a": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    assertEquals(1, x["0"].a[a]);
  }
}

function testPropertyValueTransfer_561() {
  /* Instructions: ESI_GETI_IMM, ESI_GETN_IMM, ESI_GET. */
  /* Failure: non-object at depth 1. */
  function test(){
    var x;
    x = {"0": {"a": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x = null;
      }
      x["0"].a[a];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_562() {
  /* Instructions: ESI_GETI_IMM, ESI_GETN_IMM, ESI_GET. */
  /* Failure: non-object at depth 2. */
  function test(){
    var x;
    x = {"0": {"a": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x["0"] = null;
      }
      x["0"].a[a];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_563() {
  /* Instructions: ESI_GETI_IMM, ESI_GETN_IMM, ESI_GET. */
  /* Failure: non-object at depth 3. */
  function test(){
    var x;
    x = {"0": {"a": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x["0"].a = null;
      }
      x["0"].a[a];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_564() {
  /* Instructions: ESI_GETI_IMM, ESI_GETN_IMM, ESI_GET. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    var x;
    x = {"0": {"a": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        delete x["0"];
      }
      x["0"].a[a];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_565() {
  /* Instructions: ESI_GETI_IMM, ESI_GETN_IMM, ESI_GET. */
  /* Failure: property-no-longer-exists at depth 3. */
  function test(){
    var x;
    x = {"0": {"a": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        delete x["0"].a;
      }
      x["0"].a[a];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_566() {
  /* Instructions: ESI_GETI_IMM, ESI_GETN_IMM, ESI_GET. */
  /* Failure: property-no-longer-exists at depth 4. */
  var x;
  x = {"0": {"a": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x["0"].a[a];
    }
    assertEquals(i === 99 ? undefined : 1, x["0"].a[a]);
  }
}

function testPropertyValueTransfer_567() {
  /* Instructions: ESI_GETI_IMM, ESI_GETN_IMM, ESI_GET. */
  /* Failure: class-changed at depth 1. */
  var x;
  x = {"0": {"a": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x.c;
    }
    assertEquals(1, x["0"].a[a]);
  }
}

function testPropertyValueTransfer_568() {
  /* Instructions: ESI_GETI_IMM, ESI_GETN_IMM, ESI_GET. */
  /* Failure: class-changed at depth 2. */
  var x;
  x = {"0": {"a": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x["0"].c;
    }
    assertEquals(1, x["0"].a[a]);
  }
}

function testPropertyValueTransfer_569() {
  /* Instructions: ESI_GETI_IMM, ESI_GETN_IMM, ESI_GET. */
  /* Failure: class-changed at depth 3. */
  var x;
  x = {"0": {"a": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x["0"].a.c;
    }
    assertEquals(1, x["0"].a[a]);
  }
}

function testPropertyValueTransfer_570() {
  /* Instructions: ESI_GETI_IMM, ESI_GETN_IMM, ESI_GET. */
  /* Failure: becomes-sparse at depth 1. */
  var x;
  x = {"0": {"a": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      x[10000] = 2;
    }
    assertEquals(1, x["0"].a[a]);
  }
}

function testPropertyValueTransfer_571() {
  /* Instructions: ESI_GETI_IMM, ESI_GETN_IMM, ESI_GET. */
  /* Failure: becomes-sparse at depth 3. */
  var x;
  x = {"0": {"a": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      x["0"].a[10000] = 2;
    }
    assertEquals(1, x["0"].a[a]);
  }
}

function testPropertyValueTransfer_572() {
  /* Instructions: ESI_GETI_IMM, ESI_GETN_IMM, ESI_GETI_IMM. */
  var x;
  x = {"0": {"a": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    assertEquals(1, x["0"].a["0"]);
  }
}

function testPropertyValueTransfer_573() {
  /* Instructions: ESI_GETI_IMM, ESI_GETN_IMM, ESI_GETI_IMM. */
  /* Failure: non-object at depth 1. */
  function test(){
    var x;
    x = {"0": {"a": {"0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        x = null;
      }
      x["0"].a["0"];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_574() {
  /* Instructions: ESI_GETI_IMM, ESI_GETN_IMM, ESI_GETI_IMM. */
  /* Failure: non-object at depth 2. */
  function test(){
    var x;
    x = {"0": {"a": {"0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        x["0"] = null;
      }
      x["0"].a["0"];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_575() {
  /* Instructions: ESI_GETI_IMM, ESI_GETN_IMM, ESI_GETI_IMM. */
  /* Failure: non-object at depth 3. */
  function test(){
    var x;
    x = {"0": {"a": {"0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        x["0"].a = null;
      }
      x["0"].a["0"];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_576() {
  /* Instructions: ESI_GETI_IMM, ESI_GETN_IMM, ESI_GETI_IMM. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    var x;
    x = {"0": {"a": {"0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        delete x["0"];
      }
      x["0"].a["0"];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_577() {
  /* Instructions: ESI_GETI_IMM, ESI_GETN_IMM, ESI_GETI_IMM. */
  /* Failure: property-no-longer-exists at depth 3. */
  function test(){
    var x;
    x = {"0": {"a": {"0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        delete x["0"].a;
      }
      x["0"].a["0"];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_578() {
  /* Instructions: ESI_GETI_IMM, ESI_GETN_IMM, ESI_GETI_IMM. */
  /* Failure: property-no-longer-exists at depth 4. */
  var x;
  x = {"0": {"a": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x["0"].a["0"];
    }
    assertEquals(i === 99 ? undefined : 1, x["0"].a["0"]);
  }
}

function testPropertyValueTransfer_579() {
  /* Instructions: ESI_GETI_IMM, ESI_GETN_IMM, ESI_GETI_IMM. */
  /* Failure: class-changed at depth 1. */
  var x;
  x = {"0": {"a": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x.c;
    }
    assertEquals(1, x["0"].a["0"]);
  }
}

function testPropertyValueTransfer_580() {
  /* Instructions: ESI_GETI_IMM, ESI_GETN_IMM, ESI_GETI_IMM. */
  /* Failure: class-changed at depth 2. */
  var x;
  x = {"0": {"a": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x["0"].c;
    }
    assertEquals(1, x["0"].a["0"]);
  }
}

function testPropertyValueTransfer_581() {
  /* Instructions: ESI_GETI_IMM, ESI_GETN_IMM, ESI_GETI_IMM. */
  /* Failure: class-changed at depth 3. */
  var x;
  x = {"0": {"a": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x["0"].a.c;
    }
    assertEquals(1, x["0"].a["0"]);
  }
}

function testPropertyValueTransfer_582() {
  /* Instructions: ESI_GETI_IMM, ESI_GETN_IMM, ESI_GETI_IMM. */
  /* Failure: becomes-sparse at depth 1. */
  var x;
  x = {"0": {"a": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      x[10000] = 2;
    }
    assertEquals(1, x["0"].a["0"]);
  }
}

function testPropertyValueTransfer_583() {
  /* Instructions: ESI_GETI_IMM, ESI_GETN_IMM, ESI_GETI_IMM. */
  /* Failure: becomes-sparse at depth 3. */
  var x;
  x = {"0": {"a": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      x["0"].a[10000] = 2;
    }
    assertEquals(1, x["0"].a["0"]);
  }
}

function testPropertyValueTransfer_584() {
  /* Instructions: ESI_GETI_IMM, ESI_GETN_IMM, ESI_GETN_IMM. */
  var x;
  x = {"0": {"a": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    assertEquals(1, x["0"].a.a);
  }
}

function testPropertyValueTransfer_585() {
  /* Instructions: ESI_GETI_IMM, ESI_GETN_IMM, ESI_GETN_IMM. */
  /* Failure: non-object at depth 1. */
  function test(){
    var x;
    x = {"0": {"a": {"a": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        x = null;
      }
      x["0"].a.a;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_586() {
  /* Instructions: ESI_GETI_IMM, ESI_GETN_IMM, ESI_GETN_IMM. */
  /* Failure: non-object at depth 2. */
  function test(){
    var x;
    x = {"0": {"a": {"a": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        x["0"] = null;
      }
      x["0"].a.a;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_587() {
  /* Instructions: ESI_GETI_IMM, ESI_GETN_IMM, ESI_GETN_IMM. */
  /* Failure: non-object at depth 3. */
  function test(){
    var x;
    x = {"0": {"a": {"a": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        x["0"].a = null;
      }
      x["0"].a.a;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_588() {
  /* Instructions: ESI_GETI_IMM, ESI_GETN_IMM, ESI_GETN_IMM. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    var x;
    x = {"0": {"a": {"a": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        delete x["0"];
      }
      x["0"].a.a;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_589() {
  /* Instructions: ESI_GETI_IMM, ESI_GETN_IMM, ESI_GETN_IMM. */
  /* Failure: property-no-longer-exists at depth 3. */
  function test(){
    var x;
    x = {"0": {"a": {"a": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        delete x["0"].a;
      }
      x["0"].a.a;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_590() {
  /* Instructions: ESI_GETI_IMM, ESI_GETN_IMM, ESI_GETN_IMM. */
  /* Failure: property-no-longer-exists at depth 4. */
  var x;
  x = {"0": {"a": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x["0"].a.a;
    }
    assertEquals(i === 99 ? undefined : 1, x["0"].a.a);
  }
}

function testPropertyValueTransfer_591() {
  /* Instructions: ESI_GETI_IMM, ESI_GETN_IMM, ESI_GETN_IMM. */
  /* Failure: class-changed at depth 1. */
  var x;
  x = {"0": {"a": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x.c;
    }
    assertEquals(1, x["0"].a.a);
  }
}

function testPropertyValueTransfer_592() {
  /* Instructions: ESI_GETI_IMM, ESI_GETN_IMM, ESI_GETN_IMM. */
  /* Failure: class-changed at depth 2. */
  var x;
  x = {"0": {"a": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x["0"].c;
    }
    assertEquals(1, x["0"].a.a);
  }
}

function testPropertyValueTransfer_593() {
  /* Instructions: ESI_GETI_IMM, ESI_GETN_IMM, ESI_GETN_IMM. */
  /* Failure: class-changed at depth 3. */
  var x;
  x = {"0": {"a": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x["0"].a.c;
    }
    assertEquals(1, x["0"].a.a);
  }
}

function testPropertyValueTransfer_594() {
  /* Instructions: ESI_GETI_IMM, ESI_GETN_IMM, ESI_GETN_IMM. */
  /* Failure: becomes-sparse at depth 1. */
  var x;
  x = {"0": {"a": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      x[10000] = 2;
    }
    assertEquals(1, x["0"].a.a);
  }
}

function testPropertyValueTransfer_595() {
  /* Instructions: ESI_GETI_IMM, ESI_GETN_IMM, ESI_PUT. */
  var x;
  x = {"0": {"a": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    x["0"].a[a] = 42;
    assertEquals(42, x["0"].a[a]);
  }
}

function testPropertyValueTransfer_596() {
  /* Instructions: ESI_GETI_IMM, ESI_GETN_IMM, ESI_PUT. */
  /* Failure: non-object at depth 1. */
  function test(){
    var x;
    x = {"0": {"a": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x = null;
      }
      x["0"].a[a] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_597() {
  /* Instructions: ESI_GETI_IMM, ESI_GETN_IMM, ESI_PUT. */
  /* Failure: non-object at depth 2. */
  function test(){
    var x;
    x = {"0": {"a": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x["0"] = null;
      }
      x["0"].a[a] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_598() {
  /* Instructions: ESI_GETI_IMM, ESI_GETN_IMM, ESI_PUT. */
  /* Failure: non-object at depth 3. */
  function test(){
    var x;
    x = {"0": {"a": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x["0"].a = null;
      }
      x["0"].a[a] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_599() {
  /* Instructions: ESI_GETI_IMM, ESI_GETN_IMM, ESI_PUT. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    var x;
    x = {"0": {"a": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        delete x["0"];
      }
      x["0"].a[a] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_600() {
  /* Instructions: ESI_GETI_IMM, ESI_GETN_IMM, ESI_PUT. */
  /* Failure: property-no-longer-exists at depth 3. */
  function test(){
    var x;
    x = {"0": {"a": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        delete x["0"].a;
      }
      x["0"].a[a] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_601() {
  /* Instructions: ESI_GETI_IMM, ESI_GETN_IMM, ESI_PUT. */
  /* Failure: property-no-longer-exists at depth 4. */
  var x;
  x = {"0": {"a": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x["0"].a[a];
    }
    x["0"].a[a] = 42;
    assertEquals(42, x["0"].a[a]);
  }
}

function testPropertyValueTransfer_602() {
  /* Instructions: ESI_GETI_IMM, ESI_GETN_IMM, ESI_PUT. */
  /* Failure: class-changed at depth 1. */
  var x;
  x = {"0": {"a": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x.c;
    }
    x["0"].a[a] = 42;
    assertEquals(42, x["0"].a[a]);
  }
}

function testPropertyValueTransfer_603() {
  /* Instructions: ESI_GETI_IMM, ESI_GETN_IMM, ESI_PUT. */
  /* Failure: class-changed at depth 2. */
  var x;
  x = {"0": {"a": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x["0"].c;
    }
    x["0"].a[a] = 42;
    assertEquals(42, x["0"].a[a]);
  }
}

function testPropertyValueTransfer_604() {
  /* Instructions: ESI_GETI_IMM, ESI_GETN_IMM, ESI_PUT. */
  /* Failure: class-changed at depth 3. */
  var x;
  x = {"0": {"a": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x["0"].a.c;
    }
    x["0"].a[a] = 42;
    assertEquals(42, x["0"].a[a]);
  }
}

function testPropertyValueTransfer_605() {
  /* Instructions: ESI_GETI_IMM, ESI_GETN_IMM, ESI_PUT. */
  /* Failure: becomes-sparse at depth 1. */
  var x;
  x = {"0": {"a": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      x[10000] = 2;
    }
    x["0"].a[a] = 42;
    assertEquals(42, x["0"].a[a]);
  }
}

function testPropertyValueTransfer_606() {
  /* Instructions: ESI_GETI_IMM, ESI_GETN_IMM, ESI_PUTI_IMM. */
  var x;
  x = {"0": {"a": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    x["0"].a["0"] = 42;
    assertEquals(42, x["0"].a["0"]);
  }
}

function testPropertyValueTransfer_607() {
  /* Instructions: ESI_GETI_IMM, ESI_GETN_IMM, ESI_PUTI_IMM. */
  /* Failure: non-object at depth 1. */
  function test(){
    var x;
    x = {"0": {"a": {"0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        x = null;
      }
      x["0"].a["0"] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_608() {
  /* Instructions: ESI_GETI_IMM, ESI_GETN_IMM, ESI_PUTI_IMM. */
  /* Failure: non-object at depth 2. */
  function test(){
    var x;
    x = {"0": {"a": {"0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        x["0"] = null;
      }
      x["0"].a["0"] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_609() {
  /* Instructions: ESI_GETI_IMM, ESI_GETN_IMM, ESI_PUTI_IMM. */
  /* Failure: non-object at depth 3. */
  function test(){
    var x;
    x = {"0": {"a": {"0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        x["0"].a = null;
      }
      x["0"].a["0"] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_610() {
  /* Instructions: ESI_GETI_IMM, ESI_GETN_IMM, ESI_PUTI_IMM. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    var x;
    x = {"0": {"a": {"0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        delete x["0"];
      }
      x["0"].a["0"] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_611() {
  /* Instructions: ESI_GETI_IMM, ESI_GETN_IMM, ESI_PUTI_IMM. */
  /* Failure: property-no-longer-exists at depth 3. */
  function test(){
    var x;
    x = {"0": {"a": {"0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        delete x["0"].a;
      }
      x["0"].a["0"] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_612() {
  /* Instructions: ESI_GETI_IMM, ESI_GETN_IMM, ESI_PUTI_IMM. */
  /* Failure: property-no-longer-exists at depth 4. */
  var x;
  x = {"0": {"a": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x["0"].a["0"];
    }
    x["0"].a["0"] = 42;
    assertEquals(42, x["0"].a["0"]);
  }
}

function testPropertyValueTransfer_613() {
  /* Instructions: ESI_GETI_IMM, ESI_GETN_IMM, ESI_PUTI_IMM. */
  /* Failure: class-changed at depth 1. */
  var x;
  x = {"0": {"a": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x.c;
    }
    x["0"].a["0"] = 42;
    assertEquals(42, x["0"].a["0"]);
  }
}

function testPropertyValueTransfer_614() {
  /* Instructions: ESI_GETI_IMM, ESI_GETN_IMM, ESI_PUTI_IMM. */
  /* Failure: class-changed at depth 2. */
  var x;
  x = {"0": {"a": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x["0"].c;
    }
    x["0"].a["0"] = 42;
    assertEquals(42, x["0"].a["0"]);
  }
}

function testPropertyValueTransfer_615() {
  /* Instructions: ESI_GETI_IMM, ESI_GETN_IMM, ESI_PUTI_IMM. */
  /* Failure: class-changed at depth 3. */
  var x;
  x = {"0": {"a": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x["0"].a.c;
    }
    x["0"].a["0"] = 42;
    assertEquals(42, x["0"].a["0"]);
  }
}

function testPropertyValueTransfer_616() {
  /* Instructions: ESI_GETI_IMM, ESI_GETN_IMM, ESI_PUTI_IMM. */
  /* Failure: becomes-sparse at depth 1. */
  var x;
  x = {"0": {"a": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      x[10000] = 2;
    }
    x["0"].a["0"] = 42;
    assertEquals(42, x["0"].a["0"]);
  }
}

function testPropertyValueTransfer_617() {
  /* Instructions: ESI_GETI_IMM, ESI_GETN_IMM, ESI_PUTN_IMM. */
  var x;
  x = {"0": {"a": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    x["0"].a.a = 42;
    assertEquals(42, x["0"].a.a);
  }
}

function testPropertyValueTransfer_618() {
  /* Instructions: ESI_GETI_IMM, ESI_GETN_IMM, ESI_PUTN_IMM. */
  /* Failure: non-object at depth 1. */
  function test(){
    var x;
    x = {"0": {"a": {"a": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        x = null;
      }
      x["0"].a.a = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_619() {
  /* Instructions: ESI_GETI_IMM, ESI_GETN_IMM, ESI_PUTN_IMM. */
  /* Failure: non-object at depth 2. */
  function test(){
    var x;
    x = {"0": {"a": {"a": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        x["0"] = null;
      }
      x["0"].a.a = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_620() {
  /* Instructions: ESI_GETI_IMM, ESI_GETN_IMM, ESI_PUTN_IMM. */
  /* Failure: non-object at depth 3. */
  function test(){
    var x;
    x = {"0": {"a": {"a": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        x["0"].a = null;
      }
      x["0"].a.a = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_621() {
  /* Instructions: ESI_GETI_IMM, ESI_GETN_IMM, ESI_PUTN_IMM. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    var x;
    x = {"0": {"a": {"a": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        delete x["0"];
      }
      x["0"].a.a = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_622() {
  /* Instructions: ESI_GETI_IMM, ESI_GETN_IMM, ESI_PUTN_IMM. */
  /* Failure: property-no-longer-exists at depth 3. */
  function test(){
    var x;
    x = {"0": {"a": {"a": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        delete x["0"].a;
      }
      x["0"].a.a = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_623() {
  /* Instructions: ESI_GETI_IMM, ESI_GETN_IMM, ESI_PUTN_IMM. */
  /* Failure: property-no-longer-exists at depth 4. */
  var x;
  x = {"0": {"a": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x["0"].a.a;
    }
    x["0"].a.a = 42;
    assertEquals(42, x["0"].a.a);
  }
}

function testPropertyValueTransfer_624() {
  /* Instructions: ESI_GETI_IMM, ESI_GETN_IMM, ESI_PUTN_IMM. */
  /* Failure: class-changed at depth 1. */
  var x;
  x = {"0": {"a": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x.c;
    }
    x["0"].a.a = 42;
    assertEquals(42, x["0"].a.a);
  }
}

function testPropertyValueTransfer_625() {
  /* Instructions: ESI_GETI_IMM, ESI_GETN_IMM, ESI_PUTN_IMM. */
  /* Failure: class-changed at depth 2. */
  var x;
  x = {"0": {"a": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x["0"].c;
    }
    x["0"].a.a = 42;
    assertEquals(42, x["0"].a.a);
  }
}

function testPropertyValueTransfer_626() {
  /* Instructions: ESI_GETI_IMM, ESI_GETN_IMM, ESI_PUTN_IMM. */
  /* Failure: class-changed at depth 3. */
  var x;
  x = {"0": {"a": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x["0"].a.c;
    }
    x["0"].a.a = 42;
    assertEquals(42, x["0"].a.a);
  }
}

function testPropertyValueTransfer_627() {
  /* Instructions: ESI_GETI_IMM, ESI_GETN_IMM, ESI_PUTN_IMM. */
  /* Failure: becomes-sparse at depth 1. */
  var x;
  x = {"0": {"a": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      x[10000] = 2;
    }
    x["0"].a.a = 42;
    assertEquals(42, x["0"].a.a);
  }
}

function testPropertyValueTransfer_628() {
  /* Instructions: ESI_GETN_IMM, ESI_GET, ESI_GET. */
  var x;
  x = {"a": {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    assertEquals(1, x.a[a][b]);
  }
}

function testPropertyValueTransfer_629() {
  /* Instructions: ESI_GETN_IMM, ESI_GET, ESI_GET. */
  /* Failure: non-object at depth 1. */
  function test(){
    var x;
    x = {"a": {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      var b = i % 2;
      if (i === 99) {
        x = null;
      }
      x.a[a][b];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_630() {
  /* Instructions: ESI_GETN_IMM, ESI_GET, ESI_GET. */
  /* Failure: non-object at depth 2. */
  function test(){
    var x;
    x = {"a": {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      var b = i % 2;
      if (i === 99) {
        x.a = null;
      }
      x.a[a][b];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_631() {
  /* Instructions: ESI_GETN_IMM, ESI_GET, ESI_GET. */
  /* Failure: non-object at depth 3. */
  function test(){
    var x;
    x = {"a": {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      var b = i % 2;
      if (i === 99) {
        x.a[a] = null;
      }
      x.a[a][b];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_632() {
  /* Instructions: ESI_GETN_IMM, ESI_GET, ESI_GET. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    var x;
    x = {"a": {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      var b = i % 2;
      if (i === 99) {
        delete x.a;
      }
      x.a[a][b];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_633() {
  /* Instructions: ESI_GETN_IMM, ESI_GET, ESI_GET. */
  /* Failure: property-no-longer-exists at depth 3. */
  function test(){
    var x;
    x = {"a": {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      var b = i % 2;
      if (i === 99) {
        delete x.a[a];
      }
      x.a[a][b];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_634() {
  /* Instructions: ESI_GETN_IMM, ESI_GET, ESI_GET. */
  /* Failure: property-no-longer-exists at depth 4. */
  var x;
  x = {"a": {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    if (i === 99) {
      delete x.a[a][b];
    }
    assertEquals(i === 99 ? undefined : 1, x.a[a][b]);
  }
}

function testPropertyValueTransfer_635() {
  /* Instructions: ESI_GETN_IMM, ESI_GET, ESI_GET. */
  /* Failure: class-changed at depth 1. */
  var x;
  x = {"a": {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    if (i === 99) {
      delete x.c;
    }
    assertEquals(1, x.a[a][b]);
  }
}

function testPropertyValueTransfer_636() {
  /* Instructions: ESI_GETN_IMM, ESI_GET, ESI_GET. */
  /* Failure: class-changed at depth 2. */
  var x;
  x = {"a": {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    if (i === 99) {
      delete x.a.c;
    }
    assertEquals(1, x.a[a][b]);
  }
}

function testPropertyValueTransfer_637() {
  /* Instructions: ESI_GETN_IMM, ESI_GET, ESI_GET. */
  /* Failure: class-changed at depth 3. */
  var x;
  x = {"a": {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    if (i === 99) {
      delete x.a[a].c;
    }
    assertEquals(1, x.a[a][b]);
  }
}

function testPropertyValueTransfer_638() {
  /* Instructions: ESI_GETN_IMM, ESI_GET, ESI_GET. */
  /* Failure: becomes-sparse at depth 2. */
  var x;
  x = {"a": {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    if (i === 99) {
      x.a[10000] = 2;
    }
    assertEquals(1, x.a[a][b]);
  }
}

function testPropertyValueTransfer_639() {
  /* Instructions: ESI_GETN_IMM, ESI_GET, ESI_GET. */
  /* Failure: becomes-sparse at depth 3. */
  var x;
  x = {"a": {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    if (i === 99) {
      x.a[a][10000] = 2;
    }
    assertEquals(1, x.a[a][b]);
  }
}

function testPropertyValueTransfer_640() {
  /* Instructions: ESI_GETN_IMM, ESI_GET, ESI_GETI_IMM. */
  var x;
  x = {"a": {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    assertEquals(1, x.a[a]["0"]);
  }
}

function testPropertyValueTransfer_641() {
  /* Instructions: ESI_GETN_IMM, ESI_GET, ESI_GETI_IMM. */
  /* Failure: non-object at depth 1. */
  function test(){
    var x;
    x = {"a": {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x = null;
      }
      x.a[a]["0"];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_642() {
  /* Instructions: ESI_GETN_IMM, ESI_GET, ESI_GETI_IMM. */
  /* Failure: non-object at depth 2. */
  function test(){
    var x;
    x = {"a": {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x.a = null;
      }
      x.a[a]["0"];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_643() {
  /* Instructions: ESI_GETN_IMM, ESI_GET, ESI_GETI_IMM. */
  /* Failure: non-object at depth 3. */
  function test(){
    var x;
    x = {"a": {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x.a[a] = null;
      }
      x.a[a]["0"];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_644() {
  /* Instructions: ESI_GETN_IMM, ESI_GET, ESI_GETI_IMM. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    var x;
    x = {"a": {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        delete x.a;
      }
      x.a[a]["0"];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_645() {
  /* Instructions: ESI_GETN_IMM, ESI_GET, ESI_GETI_IMM. */
  /* Failure: property-no-longer-exists at depth 3. */
  function test(){
    var x;
    x = {"a": {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        delete x.a[a];
      }
      x.a[a]["0"];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_646() {
  /* Instructions: ESI_GETN_IMM, ESI_GET, ESI_GETI_IMM. */
  /* Failure: property-no-longer-exists at depth 4. */
  var x;
  x = {"a": {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x.a[a]["0"];
    }
    assertEquals(i === 99 ? undefined : 1, x.a[a]["0"]);
  }
}

function testPropertyValueTransfer_647() {
  /* Instructions: ESI_GETN_IMM, ESI_GET, ESI_GETI_IMM. */
  /* Failure: class-changed at depth 1. */
  var x;
  x = {"a": {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x.c;
    }
    assertEquals(1, x.a[a]["0"]);
  }
}

function testPropertyValueTransfer_648() {
  /* Instructions: ESI_GETN_IMM, ESI_GET, ESI_GETI_IMM. */
  /* Failure: class-changed at depth 2. */
  var x;
  x = {"a": {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x.a.c;
    }
    assertEquals(1, x.a[a]["0"]);
  }
}

function testPropertyValueTransfer_649() {
  /* Instructions: ESI_GETN_IMM, ESI_GET, ESI_GETI_IMM. */
  /* Failure: class-changed at depth 3. */
  var x;
  x = {"a": {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x.a[a].c;
    }
    assertEquals(1, x.a[a]["0"]);
  }
}

function testPropertyValueTransfer_650() {
  /* Instructions: ESI_GETN_IMM, ESI_GET, ESI_GETI_IMM. */
  /* Failure: becomes-sparse at depth 2. */
  var x;
  x = {"a": {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      x.a[10000] = 2;
    }
    assertEquals(1, x.a[a]["0"]);
  }
}

function testPropertyValueTransfer_651() {
  /* Instructions: ESI_GETN_IMM, ESI_GET, ESI_GETI_IMM. */
  /* Failure: becomes-sparse at depth 3. */
  var x;
  x = {"a": {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      x.a[a][10000] = 2;
    }
    assertEquals(1, x.a[a]["0"]);
  }
}

function testPropertyValueTransfer_652() {
  /* Instructions: ESI_GETN_IMM, ESI_GET, ESI_GETN_IMM. */
  var x;
  x = {"a": {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    assertEquals(1, x.a[a].a);
  }
}

function testPropertyValueTransfer_653() {
  /* Instructions: ESI_GETN_IMM, ESI_GET, ESI_GETN_IMM. */
  /* Failure: non-object at depth 1. */
  function test(){
    var x;
    x = {"a": {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x = null;
      }
      x.a[a].a;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_654() {
  /* Instructions: ESI_GETN_IMM, ESI_GET, ESI_GETN_IMM. */
  /* Failure: non-object at depth 2. */
  function test(){
    var x;
    x = {"a": {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x.a = null;
      }
      x.a[a].a;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_655() {
  /* Instructions: ESI_GETN_IMM, ESI_GET, ESI_GETN_IMM. */
  /* Failure: non-object at depth 3. */
  function test(){
    var x;
    x = {"a": {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x.a[a] = null;
      }
      x.a[a].a;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_656() {
  /* Instructions: ESI_GETN_IMM, ESI_GET, ESI_GETN_IMM. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    var x;
    x = {"a": {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        delete x.a;
      }
      x.a[a].a;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_657() {
  /* Instructions: ESI_GETN_IMM, ESI_GET, ESI_GETN_IMM. */
  /* Failure: property-no-longer-exists at depth 3. */
  function test(){
    var x;
    x = {"a": {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        delete x.a[a];
      }
      x.a[a].a;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_658() {
  /* Instructions: ESI_GETN_IMM, ESI_GET, ESI_GETN_IMM. */
  /* Failure: property-no-longer-exists at depth 4. */
  var x;
  x = {"a": {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x.a[a].a;
    }
    assertEquals(i === 99 ? undefined : 1, x.a[a].a);
  }
}

function testPropertyValueTransfer_659() {
  /* Instructions: ESI_GETN_IMM, ESI_GET, ESI_GETN_IMM. */
  /* Failure: class-changed at depth 1. */
  var x;
  x = {"a": {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x.c;
    }
    assertEquals(1, x.a[a].a);
  }
}

function testPropertyValueTransfer_660() {
  /* Instructions: ESI_GETN_IMM, ESI_GET, ESI_GETN_IMM. */
  /* Failure: class-changed at depth 2. */
  var x;
  x = {"a": {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x.a.c;
    }
    assertEquals(1, x.a[a].a);
  }
}

function testPropertyValueTransfer_661() {
  /* Instructions: ESI_GETN_IMM, ESI_GET, ESI_GETN_IMM. */
  /* Failure: class-changed at depth 3. */
  var x;
  x = {"a": {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x.a[a].c;
    }
    assertEquals(1, x.a[a].a);
  }
}

function testPropertyValueTransfer_662() {
  /* Instructions: ESI_GETN_IMM, ESI_GET, ESI_GETN_IMM. */
  /* Failure: becomes-sparse at depth 2. */
  var x;
  x = {"a": {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      x.a[10000] = 2;
    }
    assertEquals(1, x.a[a].a);
  }
}

function testPropertyValueTransfer_663() {
  /* Instructions: ESI_GETN_IMM, ESI_GET, ESI_PUT. */
  var x;
  x = {"a": {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    x.a[a][b] = 42;
    assertEquals(42, x.a[a][b]);
  }
}

function testPropertyValueTransfer_664() {
  /* Instructions: ESI_GETN_IMM, ESI_GET, ESI_PUT. */
  /* Failure: non-object at depth 1. */
  function test(){
    var x;
    x = {"a": {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      var b = i % 2;
      if (i === 99) {
        x = null;
      }
      x.a[a][b] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_665() {
  /* Instructions: ESI_GETN_IMM, ESI_GET, ESI_PUT. */
  /* Failure: non-object at depth 2. */
  function test(){
    var x;
    x = {"a": {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      var b = i % 2;
      if (i === 99) {
        x.a = null;
      }
      x.a[a][b] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_666() {
  /* Instructions: ESI_GETN_IMM, ESI_GET, ESI_PUT. */
  /* Failure: non-object at depth 3. */
  function test(){
    var x;
    x = {"a": {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      var b = i % 2;
      if (i === 99) {
        x.a[a] = null;
      }
      x.a[a][b] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_667() {
  /* Instructions: ESI_GETN_IMM, ESI_GET, ESI_PUT. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    var x;
    x = {"a": {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      var b = i % 2;
      if (i === 99) {
        delete x.a;
      }
      x.a[a][b] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_668() {
  /* Instructions: ESI_GETN_IMM, ESI_GET, ESI_PUT. */
  /* Failure: property-no-longer-exists at depth 3. */
  function test(){
    var x;
    x = {"a": {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      var b = i % 2;
      if (i === 99) {
        delete x.a[a];
      }
      x.a[a][b] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_669() {
  /* Instructions: ESI_GETN_IMM, ESI_GET, ESI_PUT. */
  /* Failure: property-no-longer-exists at depth 4. */
  var x;
  x = {"a": {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    if (i === 99) {
      delete x.a[a][b];
    }
    x.a[a][b] = 42;
    assertEquals(42, x.a[a][b]);
  }
}

function testPropertyValueTransfer_670() {
  /* Instructions: ESI_GETN_IMM, ESI_GET, ESI_PUT. */
  /* Failure: class-changed at depth 1. */
  var x;
  x = {"a": {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    if (i === 99) {
      delete x.c;
    }
    x.a[a][b] = 42;
    assertEquals(42, x.a[a][b]);
  }
}

function testPropertyValueTransfer_671() {
  /* Instructions: ESI_GETN_IMM, ESI_GET, ESI_PUT. */
  /* Failure: class-changed at depth 2. */
  var x;
  x = {"a": {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    if (i === 99) {
      delete x.a.c;
    }
    x.a[a][b] = 42;
    assertEquals(42, x.a[a][b]);
  }
}

function testPropertyValueTransfer_672() {
  /* Instructions: ESI_GETN_IMM, ESI_GET, ESI_PUT. */
  /* Failure: class-changed at depth 3. */
  var x;
  x = {"a": {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    if (i === 99) {
      delete x.a[a].c;
    }
    x.a[a][b] = 42;
    assertEquals(42, x.a[a][b]);
  }
}

function testPropertyValueTransfer_673() {
  /* Instructions: ESI_GETN_IMM, ESI_GET, ESI_PUT. */
  /* Failure: becomes-sparse at depth 2. */
  var x;
  x = {"a": {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    if (i === 99) {
      x.a[10000] = 2;
    }
    x.a[a][b] = 42;
    assertEquals(42, x.a[a][b]);
  }
}

function testPropertyValueTransfer_674() {
  /* Instructions: ESI_GETN_IMM, ESI_GET, ESI_PUTI_IMM. */
  var x;
  x = {"a": {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    x.a[a]["0"] = 42;
    assertEquals(42, x.a[a]["0"]);
  }
}

function testPropertyValueTransfer_675() {
  /* Instructions: ESI_GETN_IMM, ESI_GET, ESI_PUTI_IMM. */
  /* Failure: non-object at depth 1. */
  function test(){
    var x;
    x = {"a": {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x = null;
      }
      x.a[a]["0"] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_676() {
  /* Instructions: ESI_GETN_IMM, ESI_GET, ESI_PUTI_IMM. */
  /* Failure: non-object at depth 2. */
  function test(){
    var x;
    x = {"a": {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x.a = null;
      }
      x.a[a]["0"] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_677() {
  /* Instructions: ESI_GETN_IMM, ESI_GET, ESI_PUTI_IMM. */
  /* Failure: non-object at depth 3. */
  function test(){
    var x;
    x = {"a": {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x.a[a] = null;
      }
      x.a[a]["0"] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_678() {
  /* Instructions: ESI_GETN_IMM, ESI_GET, ESI_PUTI_IMM. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    var x;
    x = {"a": {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        delete x.a;
      }
      x.a[a]["0"] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_679() {
  /* Instructions: ESI_GETN_IMM, ESI_GET, ESI_PUTI_IMM. */
  /* Failure: property-no-longer-exists at depth 3. */
  function test(){
    var x;
    x = {"a": {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        delete x.a[a];
      }
      x.a[a]["0"] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_680() {
  /* Instructions: ESI_GETN_IMM, ESI_GET, ESI_PUTI_IMM. */
  /* Failure: property-no-longer-exists at depth 4. */
  var x;
  x = {"a": {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x.a[a]["0"];
    }
    x.a[a]["0"] = 42;
    assertEquals(42, x.a[a]["0"]);
  }
}

function testPropertyValueTransfer_681() {
  /* Instructions: ESI_GETN_IMM, ESI_GET, ESI_PUTI_IMM. */
  /* Failure: class-changed at depth 1. */
  var x;
  x = {"a": {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x.c;
    }
    x.a[a]["0"] = 42;
    assertEquals(42, x.a[a]["0"]);
  }
}

function testPropertyValueTransfer_682() {
  /* Instructions: ESI_GETN_IMM, ESI_GET, ESI_PUTI_IMM. */
  /* Failure: class-changed at depth 2. */
  var x;
  x = {"a": {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x.a.c;
    }
    x.a[a]["0"] = 42;
    assertEquals(42, x.a[a]["0"]);
  }
}

function testPropertyValueTransfer_683() {
  /* Instructions: ESI_GETN_IMM, ESI_GET, ESI_PUTI_IMM. */
  /* Failure: class-changed at depth 3. */
  var x;
  x = {"a": {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x.a[a].c;
    }
    x.a[a]["0"] = 42;
    assertEquals(42, x.a[a]["0"]);
  }
}

function testPropertyValueTransfer_684() {
  /* Instructions: ESI_GETN_IMM, ESI_GET, ESI_PUTI_IMM. */
  /* Failure: becomes-sparse at depth 2. */
  var x;
  x = {"a": {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      x.a[10000] = 2;
    }
    x.a[a]["0"] = 42;
    assertEquals(42, x.a[a]["0"]);
  }
}

function testPropertyValueTransfer_685() {
  /* Instructions: ESI_GETN_IMM, ESI_GET, ESI_PUTN_IMM. */
  var x;
  x = {"a": {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    x.a[a].a = 42;
    assertEquals(42, x.a[a].a);
  }
}

function testPropertyValueTransfer_686() {
  /* Instructions: ESI_GETN_IMM, ESI_GET, ESI_PUTN_IMM. */
  /* Failure: non-object at depth 1. */
  function test(){
    var x;
    x = {"a": {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x = null;
      }
      x.a[a].a = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_687() {
  /* Instructions: ESI_GETN_IMM, ESI_GET, ESI_PUTN_IMM. */
  /* Failure: non-object at depth 2. */
  function test(){
    var x;
    x = {"a": {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x.a = null;
      }
      x.a[a].a = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_688() {
  /* Instructions: ESI_GETN_IMM, ESI_GET, ESI_PUTN_IMM. */
  /* Failure: non-object at depth 3. */
  function test(){
    var x;
    x = {"a": {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x.a[a] = null;
      }
      x.a[a].a = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_689() {
  /* Instructions: ESI_GETN_IMM, ESI_GET, ESI_PUTN_IMM. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    var x;
    x = {"a": {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        delete x.a;
      }
      x.a[a].a = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_690() {
  /* Instructions: ESI_GETN_IMM, ESI_GET, ESI_PUTN_IMM. */
  /* Failure: property-no-longer-exists at depth 3. */
  function test(){
    var x;
    x = {"a": {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        delete x.a[a];
      }
      x.a[a].a = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_691() {
  /* Instructions: ESI_GETN_IMM, ESI_GET, ESI_PUTN_IMM. */
  /* Failure: property-no-longer-exists at depth 4. */
  var x;
  x = {"a": {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x.a[a].a;
    }
    x.a[a].a = 42;
    assertEquals(42, x.a[a].a);
  }
}

function testPropertyValueTransfer_692() {
  /* Instructions: ESI_GETN_IMM, ESI_GET, ESI_PUTN_IMM. */
  /* Failure: class-changed at depth 1. */
  var x;
  x = {"a": {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x.c;
    }
    x.a[a].a = 42;
    assertEquals(42, x.a[a].a);
  }
}

function testPropertyValueTransfer_693() {
  /* Instructions: ESI_GETN_IMM, ESI_GET, ESI_PUTN_IMM. */
  /* Failure: class-changed at depth 2. */
  var x;
  x = {"a": {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x.a.c;
    }
    x.a[a].a = 42;
    assertEquals(42, x.a[a].a);
  }
}

function testPropertyValueTransfer_694() {
  /* Instructions: ESI_GETN_IMM, ESI_GET, ESI_PUTN_IMM. */
  /* Failure: class-changed at depth 3. */
  var x;
  x = {"a": {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x.a[a].c;
    }
    x.a[a].a = 42;
    assertEquals(42, x.a[a].a);
  }
}

function testPropertyValueTransfer_695() {
  /* Instructions: ESI_GETN_IMM, ESI_GET, ESI_PUTN_IMM. */
  /* Failure: becomes-sparse at depth 2. */
  var x;
  x = {"a": {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      x.a[10000] = 2;
    }
    x.a[a].a = 42;
    assertEquals(42, x.a[a].a);
  }
}

function testPropertyValueTransfer_696() {
  /* Instructions: ESI_GETN_IMM, ESI_GETI_IMM, ESI_GET. */
  var x;
  x = {"a": {"0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    assertEquals(1, x.a["0"][a]);
  }
}

function testPropertyValueTransfer_697() {
  /* Instructions: ESI_GETN_IMM, ESI_GETI_IMM, ESI_GET. */
  /* Failure: non-object at depth 1. */
  function test(){
    var x;
    x = {"a": {"0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x = null;
      }
      x.a["0"][a];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_698() {
  /* Instructions: ESI_GETN_IMM, ESI_GETI_IMM, ESI_GET. */
  /* Failure: non-object at depth 2. */
  function test(){
    var x;
    x = {"a": {"0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x.a = null;
      }
      x.a["0"][a];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_699() {
  /* Instructions: ESI_GETN_IMM, ESI_GETI_IMM, ESI_GET. */
  /* Failure: non-object at depth 3. */
  function test(){
    var x;
    x = {"a": {"0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x.a["0"] = null;
      }
      x.a["0"][a];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_700() {
  /* Instructions: ESI_GETN_IMM, ESI_GETI_IMM, ESI_GET. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    var x;
    x = {"a": {"0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        delete x.a;
      }
      x.a["0"][a];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_701() {
  /* Instructions: ESI_GETN_IMM, ESI_GETI_IMM, ESI_GET. */
  /* Failure: property-no-longer-exists at depth 3. */
  function test(){
    var x;
    x = {"a": {"0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        delete x.a["0"];
      }
      x.a["0"][a];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_702() {
  /* Instructions: ESI_GETN_IMM, ESI_GETI_IMM, ESI_GET. */
  /* Failure: property-no-longer-exists at depth 4. */
  var x;
  x = {"a": {"0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x.a["0"][a];
    }
    assertEquals(i === 99 ? undefined : 1, x.a["0"][a]);
  }
}

function testPropertyValueTransfer_703() {
  /* Instructions: ESI_GETN_IMM, ESI_GETI_IMM, ESI_GET. */
  /* Failure: class-changed at depth 1. */
  var x;
  x = {"a": {"0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x.c;
    }
    assertEquals(1, x.a["0"][a]);
  }
}

function testPropertyValueTransfer_704() {
  /* Instructions: ESI_GETN_IMM, ESI_GETI_IMM, ESI_GET. */
  /* Failure: class-changed at depth 2. */
  var x;
  x = {"a": {"0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x.a.c;
    }
    assertEquals(1, x.a["0"][a]);
  }
}

function testPropertyValueTransfer_705() {
  /* Instructions: ESI_GETN_IMM, ESI_GETI_IMM, ESI_GET. */
  /* Failure: class-changed at depth 3. */
  var x;
  x = {"a": {"0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x.a["0"].c;
    }
    assertEquals(1, x.a["0"][a]);
  }
}

function testPropertyValueTransfer_706() {
  /* Instructions: ESI_GETN_IMM, ESI_GETI_IMM, ESI_GET. */
  /* Failure: becomes-sparse at depth 2. */
  var x;
  x = {"a": {"0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      x.a[10000] = 2;
    }
    assertEquals(1, x.a["0"][a]);
  }
}

function testPropertyValueTransfer_707() {
  /* Instructions: ESI_GETN_IMM, ESI_GETI_IMM, ESI_GET. */
  /* Failure: becomes-sparse at depth 3. */
  var x;
  x = {"a": {"0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      x.a["0"][10000] = 2;
    }
    assertEquals(1, x.a["0"][a]);
  }
}

function testPropertyValueTransfer_708() {
  /* Instructions: ESI_GETN_IMM, ESI_GETI_IMM, ESI_GETI_IMM. */
  var x;
  x = {"a": {"0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    assertEquals(1, x.a["0"]["0"]);
  }
}

function testPropertyValueTransfer_709() {
  /* Instructions: ESI_GETN_IMM, ESI_GETI_IMM, ESI_GETI_IMM. */
  /* Failure: non-object at depth 1. */
  function test(){
    var x;
    x = {"a": {"0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        x = null;
      }
      x.a["0"]["0"];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_710() {
  /* Instructions: ESI_GETN_IMM, ESI_GETI_IMM, ESI_GETI_IMM. */
  /* Failure: non-object at depth 2. */
  function test(){
    var x;
    x = {"a": {"0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        x.a = null;
      }
      x.a["0"]["0"];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_711() {
  /* Instructions: ESI_GETN_IMM, ESI_GETI_IMM, ESI_GETI_IMM. */
  /* Failure: non-object at depth 3. */
  function test(){
    var x;
    x = {"a": {"0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        x.a["0"] = null;
      }
      x.a["0"]["0"];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_712() {
  /* Instructions: ESI_GETN_IMM, ESI_GETI_IMM, ESI_GETI_IMM. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    var x;
    x = {"a": {"0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        delete x.a;
      }
      x.a["0"]["0"];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_713() {
  /* Instructions: ESI_GETN_IMM, ESI_GETI_IMM, ESI_GETI_IMM. */
  /* Failure: property-no-longer-exists at depth 3. */
  function test(){
    var x;
    x = {"a": {"0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        delete x.a["0"];
      }
      x.a["0"]["0"];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_714() {
  /* Instructions: ESI_GETN_IMM, ESI_GETI_IMM, ESI_GETI_IMM. */
  /* Failure: property-no-longer-exists at depth 4. */
  var x;
  x = {"a": {"0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x.a["0"]["0"];
    }
    assertEquals(i === 99 ? undefined : 1, x.a["0"]["0"]);
  }
}

function testPropertyValueTransfer_715() {
  /* Instructions: ESI_GETN_IMM, ESI_GETI_IMM, ESI_GETI_IMM. */
  /* Failure: class-changed at depth 1. */
  var x;
  x = {"a": {"0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x.c;
    }
    assertEquals(1, x.a["0"]["0"]);
  }
}

function testPropertyValueTransfer_716() {
  /* Instructions: ESI_GETN_IMM, ESI_GETI_IMM, ESI_GETI_IMM. */
  /* Failure: class-changed at depth 2. */
  var x;
  x = {"a": {"0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x.a.c;
    }
    assertEquals(1, x.a["0"]["0"]);
  }
}

function testPropertyValueTransfer_717() {
  /* Instructions: ESI_GETN_IMM, ESI_GETI_IMM, ESI_GETI_IMM. */
  /* Failure: class-changed at depth 3. */
  var x;
  x = {"a": {"0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x.a["0"].c;
    }
    assertEquals(1, x.a["0"]["0"]);
  }
}

function testPropertyValueTransfer_718() {
  /* Instructions: ESI_GETN_IMM, ESI_GETI_IMM, ESI_GETI_IMM. */
  /* Failure: becomes-sparse at depth 2. */
  var x;
  x = {"a": {"0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      x.a[10000] = 2;
    }
    assertEquals(1, x.a["0"]["0"]);
  }
}

function testPropertyValueTransfer_719() {
  /* Instructions: ESI_GETN_IMM, ESI_GETI_IMM, ESI_GETI_IMM. */
  /* Failure: becomes-sparse at depth 3. */
  var x;
  x = {"a": {"0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      x.a["0"][10000] = 2;
    }
    assertEquals(1, x.a["0"]["0"]);
  }
}

function testPropertyValueTransfer_720() {
  /* Instructions: ESI_GETN_IMM, ESI_GETI_IMM, ESI_GETN_IMM. */
  var x;
  x = {"a": {"0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    assertEquals(1, x.a["0"].a);
  }
}

function testPropertyValueTransfer_721() {
  /* Instructions: ESI_GETN_IMM, ESI_GETI_IMM, ESI_GETN_IMM. */
  /* Failure: non-object at depth 1. */
  function test(){
    var x;
    x = {"a": {"0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        x = null;
      }
      x.a["0"].a;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_722() {
  /* Instructions: ESI_GETN_IMM, ESI_GETI_IMM, ESI_GETN_IMM. */
  /* Failure: non-object at depth 2. */
  function test(){
    var x;
    x = {"a": {"0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        x.a = null;
      }
      x.a["0"].a;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_723() {
  /* Instructions: ESI_GETN_IMM, ESI_GETI_IMM, ESI_GETN_IMM. */
  /* Failure: non-object at depth 3. */
  function test(){
    var x;
    x = {"a": {"0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        x.a["0"] = null;
      }
      x.a["0"].a;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_724() {
  /* Instructions: ESI_GETN_IMM, ESI_GETI_IMM, ESI_GETN_IMM. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    var x;
    x = {"a": {"0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        delete x.a;
      }
      x.a["0"].a;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_725() {
  /* Instructions: ESI_GETN_IMM, ESI_GETI_IMM, ESI_GETN_IMM. */
  /* Failure: property-no-longer-exists at depth 3. */
  function test(){
    var x;
    x = {"a": {"0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        delete x.a["0"];
      }
      x.a["0"].a;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_726() {
  /* Instructions: ESI_GETN_IMM, ESI_GETI_IMM, ESI_GETN_IMM. */
  /* Failure: property-no-longer-exists at depth 4. */
  var x;
  x = {"a": {"0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x.a["0"].a;
    }
    assertEquals(i === 99 ? undefined : 1, x.a["0"].a);
  }
}

function testPropertyValueTransfer_727() {
  /* Instructions: ESI_GETN_IMM, ESI_GETI_IMM, ESI_GETN_IMM. */
  /* Failure: class-changed at depth 1. */
  var x;
  x = {"a": {"0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x.c;
    }
    assertEquals(1, x.a["0"].a);
  }
}

function testPropertyValueTransfer_728() {
  /* Instructions: ESI_GETN_IMM, ESI_GETI_IMM, ESI_GETN_IMM. */
  /* Failure: class-changed at depth 2. */
  var x;
  x = {"a": {"0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x.a.c;
    }
    assertEquals(1, x.a["0"].a);
  }
}

function testPropertyValueTransfer_729() {
  /* Instructions: ESI_GETN_IMM, ESI_GETI_IMM, ESI_GETN_IMM. */
  /* Failure: class-changed at depth 3. */
  var x;
  x = {"a": {"0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x.a["0"].c;
    }
    assertEquals(1, x.a["0"].a);
  }
}

function testPropertyValueTransfer_730() {
  /* Instructions: ESI_GETN_IMM, ESI_GETI_IMM, ESI_GETN_IMM. */
  /* Failure: becomes-sparse at depth 2. */
  var x;
  x = {"a": {"0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      x.a[10000] = 2;
    }
    assertEquals(1, x.a["0"].a);
  }
}

function testPropertyValueTransfer_731() {
  /* Instructions: ESI_GETN_IMM, ESI_GETI_IMM, ESI_PUT. */
  var x;
  x = {"a": {"0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    x.a["0"][a] = 42;
    assertEquals(42, x.a["0"][a]);
  }
}

function testPropertyValueTransfer_732() {
  /* Instructions: ESI_GETN_IMM, ESI_GETI_IMM, ESI_PUT. */
  /* Failure: non-object at depth 1. */
  function test(){
    var x;
    x = {"a": {"0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x = null;
      }
      x.a["0"][a] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_733() {
  /* Instructions: ESI_GETN_IMM, ESI_GETI_IMM, ESI_PUT. */
  /* Failure: non-object at depth 2. */
  function test(){
    var x;
    x = {"a": {"0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x.a = null;
      }
      x.a["0"][a] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_734() {
  /* Instructions: ESI_GETN_IMM, ESI_GETI_IMM, ESI_PUT. */
  /* Failure: non-object at depth 3. */
  function test(){
    var x;
    x = {"a": {"0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x.a["0"] = null;
      }
      x.a["0"][a] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_735() {
  /* Instructions: ESI_GETN_IMM, ESI_GETI_IMM, ESI_PUT. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    var x;
    x = {"a": {"0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        delete x.a;
      }
      x.a["0"][a] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_736() {
  /* Instructions: ESI_GETN_IMM, ESI_GETI_IMM, ESI_PUT. */
  /* Failure: property-no-longer-exists at depth 3. */
  function test(){
    var x;
    x = {"a": {"0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        delete x.a["0"];
      }
      x.a["0"][a] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_737() {
  /* Instructions: ESI_GETN_IMM, ESI_GETI_IMM, ESI_PUT. */
  /* Failure: property-no-longer-exists at depth 4. */
  var x;
  x = {"a": {"0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x.a["0"][a];
    }
    x.a["0"][a] = 42;
    assertEquals(42, x.a["0"][a]);
  }
}

function testPropertyValueTransfer_738() {
  /* Instructions: ESI_GETN_IMM, ESI_GETI_IMM, ESI_PUT. */
  /* Failure: class-changed at depth 1. */
  var x;
  x = {"a": {"0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x.c;
    }
    x.a["0"][a] = 42;
    assertEquals(42, x.a["0"][a]);
  }
}

function testPropertyValueTransfer_739() {
  /* Instructions: ESI_GETN_IMM, ESI_GETI_IMM, ESI_PUT. */
  /* Failure: class-changed at depth 2. */
  var x;
  x = {"a": {"0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x.a.c;
    }
    x.a["0"][a] = 42;
    assertEquals(42, x.a["0"][a]);
  }
}

function testPropertyValueTransfer_740() {
  /* Instructions: ESI_GETN_IMM, ESI_GETI_IMM, ESI_PUT. */
  /* Failure: class-changed at depth 3. */
  var x;
  x = {"a": {"0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x.a["0"].c;
    }
    x.a["0"][a] = 42;
    assertEquals(42, x.a["0"][a]);
  }
}

function testPropertyValueTransfer_741() {
  /* Instructions: ESI_GETN_IMM, ESI_GETI_IMM, ESI_PUT. */
  /* Failure: becomes-sparse at depth 2. */
  var x;
  x = {"a": {"0": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      x.a[10000] = 2;
    }
    x.a["0"][a] = 42;
    assertEquals(42, x.a["0"][a]);
  }
}

function testPropertyValueTransfer_742() {
  /* Instructions: ESI_GETN_IMM, ESI_GETI_IMM, ESI_PUTI_IMM. */
  var x;
  x = {"a": {"0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    x.a["0"]["0"] = 42;
    assertEquals(42, x.a["0"]["0"]);
  }
}

function testPropertyValueTransfer_743() {
  /* Instructions: ESI_GETN_IMM, ESI_GETI_IMM, ESI_PUTI_IMM. */
  /* Failure: non-object at depth 1. */
  function test(){
    var x;
    x = {"a": {"0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        x = null;
      }
      x.a["0"]["0"] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_744() {
  /* Instructions: ESI_GETN_IMM, ESI_GETI_IMM, ESI_PUTI_IMM. */
  /* Failure: non-object at depth 2. */
  function test(){
    var x;
    x = {"a": {"0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        x.a = null;
      }
      x.a["0"]["0"] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_745() {
  /* Instructions: ESI_GETN_IMM, ESI_GETI_IMM, ESI_PUTI_IMM. */
  /* Failure: non-object at depth 3. */
  function test(){
    var x;
    x = {"a": {"0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        x.a["0"] = null;
      }
      x.a["0"]["0"] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_746() {
  /* Instructions: ESI_GETN_IMM, ESI_GETI_IMM, ESI_PUTI_IMM. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    var x;
    x = {"a": {"0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        delete x.a;
      }
      x.a["0"]["0"] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_747() {
  /* Instructions: ESI_GETN_IMM, ESI_GETI_IMM, ESI_PUTI_IMM. */
  /* Failure: property-no-longer-exists at depth 3. */
  function test(){
    var x;
    x = {"a": {"0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        delete x.a["0"];
      }
      x.a["0"]["0"] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_748() {
  /* Instructions: ESI_GETN_IMM, ESI_GETI_IMM, ESI_PUTI_IMM. */
  /* Failure: property-no-longer-exists at depth 4. */
  var x;
  x = {"a": {"0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x.a["0"]["0"];
    }
    x.a["0"]["0"] = 42;
    assertEquals(42, x.a["0"]["0"]);
  }
}

function testPropertyValueTransfer_749() {
  /* Instructions: ESI_GETN_IMM, ESI_GETI_IMM, ESI_PUTI_IMM. */
  /* Failure: class-changed at depth 1. */
  var x;
  x = {"a": {"0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x.c;
    }
    x.a["0"]["0"] = 42;
    assertEquals(42, x.a["0"]["0"]);
  }
}

function testPropertyValueTransfer_750() {
  /* Instructions: ESI_GETN_IMM, ESI_GETI_IMM, ESI_PUTI_IMM. */
  /* Failure: class-changed at depth 2. */
  var x;
  x = {"a": {"0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x.a.c;
    }
    x.a["0"]["0"] = 42;
    assertEquals(42, x.a["0"]["0"]);
  }
}

function testPropertyValueTransfer_751() {
  /* Instructions: ESI_GETN_IMM, ESI_GETI_IMM, ESI_PUTI_IMM. */
  /* Failure: class-changed at depth 3. */
  var x;
  x = {"a": {"0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x.a["0"].c;
    }
    x.a["0"]["0"] = 42;
    assertEquals(42, x.a["0"]["0"]);
  }
}

function testPropertyValueTransfer_752() {
  /* Instructions: ESI_GETN_IMM, ESI_GETI_IMM, ESI_PUTI_IMM. */
  /* Failure: becomes-sparse at depth 2. */
  var x;
  x = {"a": {"0": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      x.a[10000] = 2;
    }
    x.a["0"]["0"] = 42;
    assertEquals(42, x.a["0"]["0"]);
  }
}

function testPropertyValueTransfer_753() {
  /* Instructions: ESI_GETN_IMM, ESI_GETI_IMM, ESI_PUTN_IMM. */
  var x;
  x = {"a": {"0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    x.a["0"].a = 42;
    assertEquals(42, x.a["0"].a);
  }
}

function testPropertyValueTransfer_754() {
  /* Instructions: ESI_GETN_IMM, ESI_GETI_IMM, ESI_PUTN_IMM. */
  /* Failure: non-object at depth 1. */
  function test(){
    var x;
    x = {"a": {"0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        x = null;
      }
      x.a["0"].a = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_755() {
  /* Instructions: ESI_GETN_IMM, ESI_GETI_IMM, ESI_PUTN_IMM. */
  /* Failure: non-object at depth 2. */
  function test(){
    var x;
    x = {"a": {"0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        x.a = null;
      }
      x.a["0"].a = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_756() {
  /* Instructions: ESI_GETN_IMM, ESI_GETI_IMM, ESI_PUTN_IMM. */
  /* Failure: non-object at depth 3. */
  function test(){
    var x;
    x = {"a": {"0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        x.a["0"] = null;
      }
      x.a["0"].a = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_757() {
  /* Instructions: ESI_GETN_IMM, ESI_GETI_IMM, ESI_PUTN_IMM. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    var x;
    x = {"a": {"0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        delete x.a;
      }
      x.a["0"].a = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_758() {
  /* Instructions: ESI_GETN_IMM, ESI_GETI_IMM, ESI_PUTN_IMM. */
  /* Failure: property-no-longer-exists at depth 3. */
  function test(){
    var x;
    x = {"a": {"0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        delete x.a["0"];
      }
      x.a["0"].a = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_759() {
  /* Instructions: ESI_GETN_IMM, ESI_GETI_IMM, ESI_PUTN_IMM. */
  /* Failure: property-no-longer-exists at depth 4. */
  var x;
  x = {"a": {"0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x.a["0"].a;
    }
    x.a["0"].a = 42;
    assertEquals(42, x.a["0"].a);
  }
}

function testPropertyValueTransfer_760() {
  /* Instructions: ESI_GETN_IMM, ESI_GETI_IMM, ESI_PUTN_IMM. */
  /* Failure: class-changed at depth 1. */
  var x;
  x = {"a": {"0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x.c;
    }
    x.a["0"].a = 42;
    assertEquals(42, x.a["0"].a);
  }
}

function testPropertyValueTransfer_761() {
  /* Instructions: ESI_GETN_IMM, ESI_GETI_IMM, ESI_PUTN_IMM. */
  /* Failure: class-changed at depth 2. */
  var x;
  x = {"a": {"0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x.a.c;
    }
    x.a["0"].a = 42;
    assertEquals(42, x.a["0"].a);
  }
}

function testPropertyValueTransfer_762() {
  /* Instructions: ESI_GETN_IMM, ESI_GETI_IMM, ESI_PUTN_IMM. */
  /* Failure: class-changed at depth 3. */
  var x;
  x = {"a": {"0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x.a["0"].c;
    }
    x.a["0"].a = 42;
    assertEquals(42, x.a["0"].a);
  }
}

function testPropertyValueTransfer_763() {
  /* Instructions: ESI_GETN_IMM, ESI_GETI_IMM, ESI_PUTN_IMM. */
  /* Failure: becomes-sparse at depth 2. */
  var x;
  x = {"a": {"0": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      x.a[10000] = 2;
    }
    x.a["0"].a = 42;
    assertEquals(42, x.a["0"].a);
  }
}

function testPropertyValueTransfer_764() {
  /* Instructions: ESI_GETN_IMM, ESI_GETN_IMM, ESI_GET. */
  var x;
  x = {"a": {"a": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    assertEquals(1, x.a.a[a]);
  }
}

function testPropertyValueTransfer_765() {
  /* Instructions: ESI_GETN_IMM, ESI_GETN_IMM, ESI_GET. */
  /* Failure: non-object at depth 1. */
  function test(){
    var x;
    x = {"a": {"a": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x = null;
      }
      x.a.a[a];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_766() {
  /* Instructions: ESI_GETN_IMM, ESI_GETN_IMM, ESI_GET. */
  /* Failure: non-object at depth 2. */
  function test(){
    var x;
    x = {"a": {"a": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x.a = null;
      }
      x.a.a[a];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_767() {
  /* Instructions: ESI_GETN_IMM, ESI_GETN_IMM, ESI_GET. */
  /* Failure: non-object at depth 3. */
  function test(){
    var x;
    x = {"a": {"a": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x.a.a = null;
      }
      x.a.a[a];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_768() {
  /* Instructions: ESI_GETN_IMM, ESI_GETN_IMM, ESI_GET. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    var x;
    x = {"a": {"a": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        delete x.a;
      }
      x.a.a[a];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_769() {
  /* Instructions: ESI_GETN_IMM, ESI_GETN_IMM, ESI_GET. */
  /* Failure: property-no-longer-exists at depth 3. */
  function test(){
    var x;
    x = {"a": {"a": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        delete x.a.a;
      }
      x.a.a[a];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_770() {
  /* Instructions: ESI_GETN_IMM, ESI_GETN_IMM, ESI_GET. */
  /* Failure: property-no-longer-exists at depth 4. */
  var x;
  x = {"a": {"a": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x.a.a[a];
    }
    assertEquals(i === 99 ? undefined : 1, x.a.a[a]);
  }
}

function testPropertyValueTransfer_771() {
  /* Instructions: ESI_GETN_IMM, ESI_GETN_IMM, ESI_GET. */
  /* Failure: class-changed at depth 1. */
  var x;
  x = {"a": {"a": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x.c;
    }
    assertEquals(1, x.a.a[a]);
  }
}

function testPropertyValueTransfer_772() {
  /* Instructions: ESI_GETN_IMM, ESI_GETN_IMM, ESI_GET. */
  /* Failure: class-changed at depth 2. */
  var x;
  x = {"a": {"a": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x.a.c;
    }
    assertEquals(1, x.a.a[a]);
  }
}

function testPropertyValueTransfer_773() {
  /* Instructions: ESI_GETN_IMM, ESI_GETN_IMM, ESI_GET. */
  /* Failure: class-changed at depth 3. */
  var x;
  x = {"a": {"a": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x.a.a.c;
    }
    assertEquals(1, x.a.a[a]);
  }
}

function testPropertyValueTransfer_774() {
  /* Instructions: ESI_GETN_IMM, ESI_GETN_IMM, ESI_GET. */
  /* Failure: becomes-sparse at depth 3. */
  var x;
  x = {"a": {"a": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      x.a.a[10000] = 2;
    }
    assertEquals(1, x.a.a[a]);
  }
}

function testPropertyValueTransfer_775() {
  /* Instructions: ESI_GETN_IMM, ESI_GETN_IMM, ESI_GETI_IMM. */
  var x;
  x = {"a": {"a": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    assertEquals(1, x.a.a["0"]);
  }
}

function testPropertyValueTransfer_776() {
  /* Instructions: ESI_GETN_IMM, ESI_GETN_IMM, ESI_GETI_IMM. */
  /* Failure: non-object at depth 1. */
  function test(){
    var x;
    x = {"a": {"a": {"0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        x = null;
      }
      x.a.a["0"];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_777() {
  /* Instructions: ESI_GETN_IMM, ESI_GETN_IMM, ESI_GETI_IMM. */
  /* Failure: non-object at depth 2. */
  function test(){
    var x;
    x = {"a": {"a": {"0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        x.a = null;
      }
      x.a.a["0"];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_778() {
  /* Instructions: ESI_GETN_IMM, ESI_GETN_IMM, ESI_GETI_IMM. */
  /* Failure: non-object at depth 3. */
  function test(){
    var x;
    x = {"a": {"a": {"0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        x.a.a = null;
      }
      x.a.a["0"];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_779() {
  /* Instructions: ESI_GETN_IMM, ESI_GETN_IMM, ESI_GETI_IMM. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    var x;
    x = {"a": {"a": {"0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        delete x.a;
      }
      x.a.a["0"];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_780() {
  /* Instructions: ESI_GETN_IMM, ESI_GETN_IMM, ESI_GETI_IMM. */
  /* Failure: property-no-longer-exists at depth 3. */
  function test(){
    var x;
    x = {"a": {"a": {"0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        delete x.a.a;
      }
      x.a.a["0"];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_781() {
  /* Instructions: ESI_GETN_IMM, ESI_GETN_IMM, ESI_GETI_IMM. */
  /* Failure: property-no-longer-exists at depth 4. */
  var x;
  x = {"a": {"a": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x.a.a["0"];
    }
    assertEquals(i === 99 ? undefined : 1, x.a.a["0"]);
  }
}

function testPropertyValueTransfer_782() {
  /* Instructions: ESI_GETN_IMM, ESI_GETN_IMM, ESI_GETI_IMM. */
  /* Failure: class-changed at depth 1. */
  var x;
  x = {"a": {"a": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x.c;
    }
    assertEquals(1, x.a.a["0"]);
  }
}

function testPropertyValueTransfer_783() {
  /* Instructions: ESI_GETN_IMM, ESI_GETN_IMM, ESI_GETI_IMM. */
  /* Failure: class-changed at depth 2. */
  var x;
  x = {"a": {"a": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x.a.c;
    }
    assertEquals(1, x.a.a["0"]);
  }
}

function testPropertyValueTransfer_784() {
  /* Instructions: ESI_GETN_IMM, ESI_GETN_IMM, ESI_GETI_IMM. */
  /* Failure: class-changed at depth 3. */
  var x;
  x = {"a": {"a": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x.a.a.c;
    }
    assertEquals(1, x.a.a["0"]);
  }
}

function testPropertyValueTransfer_785() {
  /* Instructions: ESI_GETN_IMM, ESI_GETN_IMM, ESI_GETI_IMM. */
  /* Failure: becomes-sparse at depth 3. */
  var x;
  x = {"a": {"a": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      x.a.a[10000] = 2;
    }
    assertEquals(1, x.a.a["0"]);
  }
}

function testPropertyValueTransfer_786() {
  /* Instructions: ESI_GETN_IMM, ESI_GETN_IMM, ESI_GETN_IMM. */
  var x;
  x = {"a": {"a": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    assertEquals(1, x.a.a.a);
  }
}

function testPropertyValueTransfer_787() {
  /* Instructions: ESI_GETN_IMM, ESI_GETN_IMM, ESI_GETN_IMM. */
  /* Failure: non-object at depth 1. */
  function test(){
    var x;
    x = {"a": {"a": {"a": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        x = null;
      }
      x.a.a.a;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_788() {
  /* Instructions: ESI_GETN_IMM, ESI_GETN_IMM, ESI_GETN_IMM. */
  /* Failure: non-object at depth 2. */
  function test(){
    var x;
    x = {"a": {"a": {"a": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        x.a = null;
      }
      x.a.a.a;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_789() {
  /* Instructions: ESI_GETN_IMM, ESI_GETN_IMM, ESI_GETN_IMM. */
  /* Failure: non-object at depth 3. */
  function test(){
    var x;
    x = {"a": {"a": {"a": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        x.a.a = null;
      }
      x.a.a.a;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_790() {
  /* Instructions: ESI_GETN_IMM, ESI_GETN_IMM, ESI_GETN_IMM. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    var x;
    x = {"a": {"a": {"a": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        delete x.a;
      }
      x.a.a.a;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_791() {
  /* Instructions: ESI_GETN_IMM, ESI_GETN_IMM, ESI_GETN_IMM. */
  /* Failure: property-no-longer-exists at depth 3. */
  function test(){
    var x;
    x = {"a": {"a": {"a": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        delete x.a.a;
      }
      x.a.a.a;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_792() {
  /* Instructions: ESI_GETN_IMM, ESI_GETN_IMM, ESI_GETN_IMM. */
  /* Failure: property-no-longer-exists at depth 4. */
  var x;
  x = {"a": {"a": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x.a.a.a;
    }
    assertEquals(i === 99 ? undefined : 1, x.a.a.a);
  }
}

function testPropertyValueTransfer_793() {
  /* Instructions: ESI_GETN_IMM, ESI_GETN_IMM, ESI_GETN_IMM. */
  /* Failure: class-changed at depth 1. */
  var x;
  x = {"a": {"a": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x.c;
    }
    assertEquals(1, x.a.a.a);
  }
}

function testPropertyValueTransfer_794() {
  /* Instructions: ESI_GETN_IMM, ESI_GETN_IMM, ESI_GETN_IMM. */
  /* Failure: class-changed at depth 2. */
  var x;
  x = {"a": {"a": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x.a.c;
    }
    assertEquals(1, x.a.a.a);
  }
}

function testPropertyValueTransfer_795() {
  /* Instructions: ESI_GETN_IMM, ESI_GETN_IMM, ESI_GETN_IMM. */
  /* Failure: class-changed at depth 3. */
  var x;
  x = {"a": {"a": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x.a.a.c;
    }
    assertEquals(1, x.a.a.a);
  }
}

function testPropertyValueTransfer_796() {
  /* Instructions: ESI_GETN_IMM, ESI_GETN_IMM, ESI_PUT. */
  var x;
  x = {"a": {"a": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    x.a.a[a] = 42;
    assertEquals(42, x.a.a[a]);
  }
}

function testPropertyValueTransfer_797() {
  /* Instructions: ESI_GETN_IMM, ESI_GETN_IMM, ESI_PUT. */
  /* Failure: non-object at depth 1. */
  function test(){
    var x;
    x = {"a": {"a": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x = null;
      }
      x.a.a[a] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_798() {
  /* Instructions: ESI_GETN_IMM, ESI_GETN_IMM, ESI_PUT. */
  /* Failure: non-object at depth 2. */
  function test(){
    var x;
    x = {"a": {"a": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x.a = null;
      }
      x.a.a[a] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_799() {
  /* Instructions: ESI_GETN_IMM, ESI_GETN_IMM, ESI_PUT. */
  /* Failure: non-object at depth 3. */
  function test(){
    var x;
    x = {"a": {"a": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x.a.a = null;
      }
      x.a.a[a] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_800() {
  /* Instructions: ESI_GETN_IMM, ESI_GETN_IMM, ESI_PUT. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    var x;
    x = {"a": {"a": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        delete x.a;
      }
      x.a.a[a] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_801() {
  /* Instructions: ESI_GETN_IMM, ESI_GETN_IMM, ESI_PUT. */
  /* Failure: property-no-longer-exists at depth 3. */
  function test(){
    var x;
    x = {"a": {"a": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        delete x.a.a;
      }
      x.a.a[a] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_802() {
  /* Instructions: ESI_GETN_IMM, ESI_GETN_IMM, ESI_PUT. */
  /* Failure: property-no-longer-exists at depth 4. */
  var x;
  x = {"a": {"a": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x.a.a[a];
    }
    x.a.a[a] = 42;
    assertEquals(42, x.a.a[a]);
  }
}

function testPropertyValueTransfer_803() {
  /* Instructions: ESI_GETN_IMM, ESI_GETN_IMM, ESI_PUT. */
  /* Failure: class-changed at depth 1. */
  var x;
  x = {"a": {"a": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x.c;
    }
    x.a.a[a] = 42;
    assertEquals(42, x.a.a[a]);
  }
}

function testPropertyValueTransfer_804() {
  /* Instructions: ESI_GETN_IMM, ESI_GETN_IMM, ESI_PUT. */
  /* Failure: class-changed at depth 2. */
  var x;
  x = {"a": {"a": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x.a.c;
    }
    x.a.a[a] = 42;
    assertEquals(42, x.a.a[a]);
  }
}

function testPropertyValueTransfer_805() {
  /* Instructions: ESI_GETN_IMM, ESI_GETN_IMM, ESI_PUT. */
  /* Failure: class-changed at depth 3. */
  var x;
  x = {"a": {"a": {"1": 1, "0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x.a.a.c;
    }
    x.a.a[a] = 42;
    assertEquals(42, x.a.a[a]);
  }
}

function testPropertyValueTransfer_806() {
  /* Instructions: ESI_GETN_IMM, ESI_GETN_IMM, ESI_PUTI_IMM. */
  var x;
  x = {"a": {"a": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    x.a.a["0"] = 42;
    assertEquals(42, x.a.a["0"]);
  }
}

function testPropertyValueTransfer_807() {
  /* Instructions: ESI_GETN_IMM, ESI_GETN_IMM, ESI_PUTI_IMM. */
  /* Failure: non-object at depth 1. */
  function test(){
    var x;
    x = {"a": {"a": {"0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        x = null;
      }
      x.a.a["0"] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_808() {
  /* Instructions: ESI_GETN_IMM, ESI_GETN_IMM, ESI_PUTI_IMM. */
  /* Failure: non-object at depth 2. */
  function test(){
    var x;
    x = {"a": {"a": {"0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        x.a = null;
      }
      x.a.a["0"] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_809() {
  /* Instructions: ESI_GETN_IMM, ESI_GETN_IMM, ESI_PUTI_IMM. */
  /* Failure: non-object at depth 3. */
  function test(){
    var x;
    x = {"a": {"a": {"0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        x.a.a = null;
      }
      x.a.a["0"] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_810() {
  /* Instructions: ESI_GETN_IMM, ESI_GETN_IMM, ESI_PUTI_IMM. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    var x;
    x = {"a": {"a": {"0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        delete x.a;
      }
      x.a.a["0"] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_811() {
  /* Instructions: ESI_GETN_IMM, ESI_GETN_IMM, ESI_PUTI_IMM. */
  /* Failure: property-no-longer-exists at depth 3. */
  function test(){
    var x;
    x = {"a": {"a": {"0": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        delete x.a.a;
      }
      x.a.a["0"] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_812() {
  /* Instructions: ESI_GETN_IMM, ESI_GETN_IMM, ESI_PUTI_IMM. */
  /* Failure: property-no-longer-exists at depth 4. */
  var x;
  x = {"a": {"a": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x.a.a["0"];
    }
    x.a.a["0"] = 42;
    assertEquals(42, x.a.a["0"]);
  }
}

function testPropertyValueTransfer_813() {
  /* Instructions: ESI_GETN_IMM, ESI_GETN_IMM, ESI_PUTI_IMM. */
  /* Failure: class-changed at depth 1. */
  var x;
  x = {"a": {"a": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x.c;
    }
    x.a.a["0"] = 42;
    assertEquals(42, x.a.a["0"]);
  }
}

function testPropertyValueTransfer_814() {
  /* Instructions: ESI_GETN_IMM, ESI_GETN_IMM, ESI_PUTI_IMM. */
  /* Failure: class-changed at depth 2. */
  var x;
  x = {"a": {"a": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x.a.c;
    }
    x.a.a["0"] = 42;
    assertEquals(42, x.a.a["0"]);
  }
}

function testPropertyValueTransfer_815() {
  /* Instructions: ESI_GETN_IMM, ESI_GETN_IMM, ESI_PUTI_IMM. */
  /* Failure: class-changed at depth 3. */
  var x;
  x = {"a": {"a": {"0": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x.a.a.c;
    }
    x.a.a["0"] = 42;
    assertEquals(42, x.a.a["0"]);
  }
}

function testPropertyValueTransfer_816() {
  /* Instructions: ESI_GETN_IMM, ESI_GETN_IMM, ESI_PUTN_IMM. */
  var x;
  x = {"a": {"a": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    x.a.a.a = 42;
    assertEquals(42, x.a.a.a);
  }
}

function testPropertyValueTransfer_817() {
  /* Instructions: ESI_GETN_IMM, ESI_GETN_IMM, ESI_PUTN_IMM. */
  /* Failure: non-object at depth 1. */
  function test(){
    var x;
    x = {"a": {"a": {"a": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        x = null;
      }
      x.a.a.a = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_818() {
  /* Instructions: ESI_GETN_IMM, ESI_GETN_IMM, ESI_PUTN_IMM. */
  /* Failure: non-object at depth 2. */
  function test(){
    var x;
    x = {"a": {"a": {"a": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        x.a = null;
      }
      x.a.a.a = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_819() {
  /* Instructions: ESI_GETN_IMM, ESI_GETN_IMM, ESI_PUTN_IMM. */
  /* Failure: non-object at depth 3. */
  function test(){
    var x;
    x = {"a": {"a": {"a": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        x.a.a = null;
      }
      x.a.a.a = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_820() {
  /* Instructions: ESI_GETN_IMM, ESI_GETN_IMM, ESI_PUTN_IMM. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    var x;
    x = {"a": {"a": {"a": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        delete x.a;
      }
      x.a.a.a = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_821() {
  /* Instructions: ESI_GETN_IMM, ESI_GETN_IMM, ESI_PUTN_IMM. */
  /* Failure: property-no-longer-exists at depth 3. */
  function test(){
    var x;
    x = {"a": {"a": {"a": 1, "c": 2}, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        delete x.a.a;
      }
      x.a.a.a = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_822() {
  /* Instructions: ESI_GETN_IMM, ESI_GETN_IMM, ESI_PUTN_IMM. */
  /* Failure: property-no-longer-exists at depth 4. */
  var x;
  x = {"a": {"a": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x.a.a.a;
    }
    x.a.a.a = 42;
    assertEquals(42, x.a.a.a);
  }
}

function testPropertyValueTransfer_823() {
  /* Instructions: ESI_GETN_IMM, ESI_GETN_IMM, ESI_PUTN_IMM. */
  /* Failure: class-changed at depth 1. */
  var x;
  x = {"a": {"a": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x.c;
    }
    x.a.a.a = 42;
    assertEquals(42, x.a.a.a);
  }
}

function testPropertyValueTransfer_824() {
  /* Instructions: ESI_GETN_IMM, ESI_GETN_IMM, ESI_PUTN_IMM. */
  /* Failure: class-changed at depth 2. */
  var x;
  x = {"a": {"a": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x.a.c;
    }
    x.a.a.a = 42;
    assertEquals(42, x.a.a.a);
  }
}

function testPropertyValueTransfer_825() {
  /* Instructions: ESI_GETN_IMM, ESI_GETN_IMM, ESI_PUTN_IMM. */
  /* Failure: class-changed at depth 3. */
  var x;
  x = {"a": {"a": {"a": 1, "c": 2}, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x.a.a.c;
    }
    x.a.a.a = 42;
    assertEquals(42, x.a.a.a);
  }
}

function testPropertyValueTransfer_826() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GET, ESI_GET. */
  var x;
  x = {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      var b = i % 2;
      assertEquals(1, x[a][b]);
    }
  })();
}

function testPropertyValueTransfer_827() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GET, ESI_GET. */
  /* Failure: non-object at depth 1. */
  function test(){
    var x;
    x = {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2};
    (function(){
      for (var i = 0; i < 100; i++) {
        var a = i % 2;
        var b = i % 2;
        if (i === 99) {
          x = null;
        }
        x[a][b];
      }
    })();
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_828() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GET, ESI_GET. */
  /* Failure: non-object at depth 2. */
  function test(){
    var x;
    x = {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2};
    (function(){
      for (var i = 0; i < 100; i++) {
        var a = i % 2;
        var b = i % 2;
        if (i === 99) {
          x[a] = null;
        }
        x[a][b];
      }
    })();
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_829() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GET, ESI_GET. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    var x;
    x = {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2};
    (function(){
      for (var i = 0; i < 100; i++) {
        var a = i % 2;
        var b = i % 2;
        if (i === 99) {
          delete x[a];
        }
        x[a][b];
      }
    })();
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_830() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GET, ESI_GET. */
  /* Failure: property-no-longer-exists at depth 3. */
  var x;
  x = {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      var b = i % 2;
      if (i === 99) {
        delete x[a][b];
      }
      assertEquals(i === 99 ? undefined : 1, x[a][b]);
    }
  })();
}

function testPropertyValueTransfer_831() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GET, ESI_GET. */
  /* Failure: class-changed at depth 1. */
  var x;
  x = {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      var b = i % 2;
      if (i === 99) {
        delete x.c;
      }
      assertEquals(1, x[a][b]);
    }
  })();
}

function testPropertyValueTransfer_832() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GET, ESI_GET. */
  /* Failure: class-changed at depth 2. */
  var x;
  x = {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      var b = i % 2;
      if (i === 99) {
        delete x[a].c;
      }
      assertEquals(1, x[a][b]);
    }
  })();
}

function testPropertyValueTransfer_833() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GET, ESI_GET. */
  /* Failure: becomes-sparse at depth 1. */
  var x;
  x = {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      var b = i % 2;
      if (i === 99) {
        x[10000] = 2;
      }
      assertEquals(1, x[a][b]);
    }
  })();
}

function testPropertyValueTransfer_834() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GET, ESI_GET. */
  /* Failure: becomes-sparse at depth 2. */
  var x;
  x = {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      var b = i % 2;
      if (i === 99) {
        x[a][10000] = 2;
      }
      assertEquals(1, x[a][b]);
    }
  })();
}

function testPropertyValueTransfer_835() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GET, ESI_GETI_IMM. */
  var x;
  x = {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      assertEquals(1, x[a]["0"]);
    }
  })();
}

function testPropertyValueTransfer_836() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GET, ESI_GETI_IMM. */
  /* Failure: non-object at depth 1. */
  function test(){
    var x;
    x = {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2};
    (function(){
      for (var i = 0; i < 100; i++) {
        var a = i % 2;
        if (i === 99) {
          x = null;
        }
        x[a]["0"];
      }
    })();
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_837() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GET, ESI_GETI_IMM. */
  /* Failure: non-object at depth 2. */
  function test(){
    var x;
    x = {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2};
    (function(){
      for (var i = 0; i < 100; i++) {
        var a = i % 2;
        if (i === 99) {
          x[a] = null;
        }
        x[a]["0"];
      }
    })();
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_838() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GET, ESI_GETI_IMM. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    var x;
    x = {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2};
    (function(){
      for (var i = 0; i < 100; i++) {
        var a = i % 2;
        if (i === 99) {
          delete x[a];
        }
        x[a]["0"];
      }
    })();
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_839() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GET, ESI_GETI_IMM. */
  /* Failure: property-no-longer-exists at depth 3. */
  var x;
  x = {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        delete x[a]["0"];
      }
      assertEquals(i === 99 ? undefined : 1, x[a]["0"]);
    }
  })();
}

function testPropertyValueTransfer_840() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GET, ESI_GETI_IMM. */
  /* Failure: class-changed at depth 1. */
  var x;
  x = {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        delete x.c;
      }
      assertEquals(1, x[a]["0"]);
    }
  })();
}

function testPropertyValueTransfer_841() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GET, ESI_GETI_IMM. */
  /* Failure: class-changed at depth 2. */
  var x;
  x = {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        delete x[a].c;
      }
      assertEquals(1, x[a]["0"]);
    }
  })();
}

function testPropertyValueTransfer_842() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GET, ESI_GETI_IMM. */
  /* Failure: becomes-sparse at depth 1. */
  var x;
  x = {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x[10000] = 2;
      }
      assertEquals(1, x[a]["0"]);
    }
  })();
}

function testPropertyValueTransfer_843() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GET, ESI_GETI_IMM. */
  /* Failure: becomes-sparse at depth 2. */
  var x;
  x = {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x[a][10000] = 2;
      }
      assertEquals(1, x[a]["0"]);
    }
  })();
}

function testPropertyValueTransfer_844() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GET, ESI_GETN_IMM. */
  var x;
  x = {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      assertEquals(1, x[a].a);
    }
  })();
}

function testPropertyValueTransfer_845() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GET, ESI_GETN_IMM. */
  /* Failure: non-object at depth 1. */
  function test(){
    var x;
    x = {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2};
    (function(){
      for (var i = 0; i < 100; i++) {
        var a = i % 2;
        if (i === 99) {
          x = null;
        }
        x[a].a;
      }
    })();
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_846() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GET, ESI_GETN_IMM. */
  /* Failure: non-object at depth 2. */
  function test(){
    var x;
    x = {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2};
    (function(){
      for (var i = 0; i < 100; i++) {
        var a = i % 2;
        if (i === 99) {
          x[a] = null;
        }
        x[a].a;
      }
    })();
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_847() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GET, ESI_GETN_IMM. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    var x;
    x = {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2};
    (function(){
      for (var i = 0; i < 100; i++) {
        var a = i % 2;
        if (i === 99) {
          delete x[a];
        }
        x[a].a;
      }
    })();
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_848() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GET, ESI_GETN_IMM. */
  /* Failure: property-no-longer-exists at depth 3. */
  var x;
  x = {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        delete x[a].a;
      }
      assertEquals(i === 99 ? undefined : 1, x[a].a);
    }
  })();
}

function testPropertyValueTransfer_849() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GET, ESI_GETN_IMM. */
  /* Failure: class-changed at depth 1. */
  var x;
  x = {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        delete x.c;
      }
      assertEquals(1, x[a].a);
    }
  })();
}

function testPropertyValueTransfer_850() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GET, ESI_GETN_IMM. */
  /* Failure: class-changed at depth 2. */
  var x;
  x = {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        delete x[a].c;
      }
      assertEquals(1, x[a].a);
    }
  })();
}

function testPropertyValueTransfer_851() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GET, ESI_GETN_IMM. */
  /* Failure: becomes-sparse at depth 1. */
  var x;
  x = {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x[10000] = 2;
      }
      assertEquals(1, x[a].a);
    }
  })();
}

function testPropertyValueTransfer_852() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GET, ESI_PUT. */
  var x;
  x = {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      var b = i % 2;
      x[a][b] = 42;
      assertEquals(42, x[a][b]);
    }
  })();
}

function testPropertyValueTransfer_853() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GET, ESI_PUT. */
  /* Failure: non-object at depth 1. */
  function test(){
    var x;
    x = {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2};
    (function(){
      for (var i = 0; i < 100; i++) {
        var a = i % 2;
        var b = i % 2;
        if (i === 99) {
          x = null;
        }
        x[a][b] = 42;
      }
    })();
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_854() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GET, ESI_PUT. */
  /* Failure: non-object at depth 2. */
  function test(){
    var x;
    x = {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2};
    (function(){
      for (var i = 0; i < 100; i++) {
        var a = i % 2;
        var b = i % 2;
        if (i === 99) {
          x[a] = null;
        }
        x[a][b] = 42;
      }
    })();
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_855() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GET, ESI_PUT. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    var x;
    x = {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2};
    (function(){
      for (var i = 0; i < 100; i++) {
        var a = i % 2;
        var b = i % 2;
        if (i === 99) {
          delete x[a];
        }
        x[a][b] = 42;
      }
    })();
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_856() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GET, ESI_PUT. */
  /* Failure: property-no-longer-exists at depth 3. */
  var x;
  x = {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      var b = i % 2;
      if (i === 99) {
        delete x[a][b];
      }
      x[a][b] = 42;
      assertEquals(42, x[a][b]);
    }
  })();
}

function testPropertyValueTransfer_857() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GET, ESI_PUT. */
  /* Failure: class-changed at depth 1. */
  var x;
  x = {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      var b = i % 2;
      if (i === 99) {
        delete x.c;
      }
      x[a][b] = 42;
      assertEquals(42, x[a][b]);
    }
  })();
}

function testPropertyValueTransfer_858() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GET, ESI_PUT. */
  /* Failure: class-changed at depth 2. */
  var x;
  x = {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      var b = i % 2;
      if (i === 99) {
        delete x[a].c;
      }
      x[a][b] = 42;
      assertEquals(42, x[a][b]);
    }
  })();
}

function testPropertyValueTransfer_859() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GET, ESI_PUT. */
  /* Failure: becomes-sparse at depth 1. */
  var x;
  x = {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      var b = i % 2;
      if (i === 99) {
        x[10000] = 2;
      }
      x[a][b] = 42;
      assertEquals(42, x[a][b]);
    }
  })();
}

function testPropertyValueTransfer_860() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GET, ESI_PUTI_IMM. */
  var x;
  x = {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      x[a]["0"] = 42;
      assertEquals(42, x[a]["0"]);
    }
  })();
}

function testPropertyValueTransfer_861() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GET, ESI_PUTI_IMM. */
  /* Failure: non-object at depth 1. */
  function test(){
    var x;
    x = {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2};
    (function(){
      for (var i = 0; i < 100; i++) {
        var a = i % 2;
        if (i === 99) {
          x = null;
        }
        x[a]["0"] = 42;
      }
    })();
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_862() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GET, ESI_PUTI_IMM. */
  /* Failure: non-object at depth 2. */
  function test(){
    var x;
    x = {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2};
    (function(){
      for (var i = 0; i < 100; i++) {
        var a = i % 2;
        if (i === 99) {
          x[a] = null;
        }
        x[a]["0"] = 42;
      }
    })();
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_863() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GET, ESI_PUTI_IMM. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    var x;
    x = {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2};
    (function(){
      for (var i = 0; i < 100; i++) {
        var a = i % 2;
        if (i === 99) {
          delete x[a];
        }
        x[a]["0"] = 42;
      }
    })();
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_864() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GET, ESI_PUTI_IMM. */
  /* Failure: property-no-longer-exists at depth 3. */
  var x;
  x = {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        delete x[a]["0"];
      }
      x[a]["0"] = 42;
      assertEquals(42, x[a]["0"]);
    }
  })();
}

function testPropertyValueTransfer_865() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GET, ESI_PUTI_IMM. */
  /* Failure: class-changed at depth 1. */
  var x;
  x = {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        delete x.c;
      }
      x[a]["0"] = 42;
      assertEquals(42, x[a]["0"]);
    }
  })();
}

function testPropertyValueTransfer_866() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GET, ESI_PUTI_IMM. */
  /* Failure: class-changed at depth 2. */
  var x;
  x = {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        delete x[a].c;
      }
      x[a]["0"] = 42;
      assertEquals(42, x[a]["0"]);
    }
  })();
}

function testPropertyValueTransfer_867() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GET, ESI_PUTI_IMM. */
  /* Failure: becomes-sparse at depth 1. */
  var x;
  x = {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x[10000] = 2;
      }
      x[a]["0"] = 42;
      assertEquals(42, x[a]["0"]);
    }
  })();
}

function testPropertyValueTransfer_868() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GET, ESI_PUTN_IMM. */
  var x;
  x = {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      x[a].a = 42;
      assertEquals(42, x[a].a);
    }
  })();
}

function testPropertyValueTransfer_869() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GET, ESI_PUTN_IMM. */
  /* Failure: non-object at depth 1. */
  function test(){
    var x;
    x = {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2};
    (function(){
      for (var i = 0; i < 100; i++) {
        var a = i % 2;
        if (i === 99) {
          x = null;
        }
        x[a].a = 42;
      }
    })();
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_870() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GET, ESI_PUTN_IMM. */
  /* Failure: non-object at depth 2. */
  function test(){
    var x;
    x = {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2};
    (function(){
      for (var i = 0; i < 100; i++) {
        var a = i % 2;
        if (i === 99) {
          x[a] = null;
        }
        x[a].a = 42;
      }
    })();
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_871() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GET, ESI_PUTN_IMM. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    var x;
    x = {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2};
    (function(){
      for (var i = 0; i < 100; i++) {
        var a = i % 2;
        if (i === 99) {
          delete x[a];
        }
        x[a].a = 42;
      }
    })();
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_872() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GET, ESI_PUTN_IMM. */
  /* Failure: property-no-longer-exists at depth 3. */
  var x;
  x = {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        delete x[a].a;
      }
      x[a].a = 42;
      assertEquals(42, x[a].a);
    }
  })();
}

function testPropertyValueTransfer_873() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GET, ESI_PUTN_IMM. */
  /* Failure: class-changed at depth 1. */
  var x;
  x = {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        delete x.c;
      }
      x[a].a = 42;
      assertEquals(42, x[a].a);
    }
  })();
}

function testPropertyValueTransfer_874() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GET, ESI_PUTN_IMM. */
  /* Failure: class-changed at depth 2. */
  var x;
  x = {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        delete x[a].c;
      }
      x[a].a = 42;
      assertEquals(42, x[a].a);
    }
  })();
}

function testPropertyValueTransfer_875() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GET, ESI_PUTN_IMM. */
  /* Failure: becomes-sparse at depth 1. */
  var x;
  x = {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x[10000] = 2;
      }
      x[a].a = 42;
      assertEquals(42, x[a].a);
    }
  })();
}

function testPropertyValueTransfer_876() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GETI_IMM, ESI_GET. */
  var x;
  x = {"0": {"1": 1, "0": 1, "c": 2}, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      assertEquals(1, x["0"][a]);
    }
  })();
}

function testPropertyValueTransfer_877() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GETI_IMM, ESI_GET. */
  /* Failure: non-object at depth 1. */
  function test(){
    var x;
    x = {"0": {"1": 1, "0": 1, "c": 2}, "c": 2};
    (function(){
      for (var i = 0; i < 100; i++) {
        var a = i % 2;
        if (i === 99) {
          x = null;
        }
        x["0"][a];
      }
    })();
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_878() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GETI_IMM, ESI_GET. */
  /* Failure: non-object at depth 2. */
  function test(){
    var x;
    x = {"0": {"1": 1, "0": 1, "c": 2}, "c": 2};
    (function(){
      for (var i = 0; i < 100; i++) {
        var a = i % 2;
        if (i === 99) {
          x["0"] = null;
        }
        x["0"][a];
      }
    })();
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_879() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GETI_IMM, ESI_GET. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    var x;
    x = {"0": {"1": 1, "0": 1, "c": 2}, "c": 2};
    (function(){
      for (var i = 0; i < 100; i++) {
        var a = i % 2;
        if (i === 99) {
          delete x["0"];
        }
        x["0"][a];
      }
    })();
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_880() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GETI_IMM, ESI_GET. */
  /* Failure: property-no-longer-exists at depth 3. */
  var x;
  x = {"0": {"1": 1, "0": 1, "c": 2}, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        delete x["0"][a];
      }
      assertEquals(i === 99 ? undefined : 1, x["0"][a]);
    }
  })();
}

function testPropertyValueTransfer_881() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GETI_IMM, ESI_GET. */
  /* Failure: class-changed at depth 1. */
  var x;
  x = {"0": {"1": 1, "0": 1, "c": 2}, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        delete x.c;
      }
      assertEquals(1, x["0"][a]);
    }
  })();
}

function testPropertyValueTransfer_882() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GETI_IMM, ESI_GET. */
  /* Failure: class-changed at depth 2. */
  var x;
  x = {"0": {"1": 1, "0": 1, "c": 2}, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        delete x["0"].c;
      }
      assertEquals(1, x["0"][a]);
    }
  })();
}

function testPropertyValueTransfer_883() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GETI_IMM, ESI_GET. */
  /* Failure: becomes-sparse at depth 1. */
  var x;
  x = {"0": {"1": 1, "0": 1, "c": 2}, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x[10000] = 2;
      }
      assertEquals(1, x["0"][a]);
    }
  })();
}

function testPropertyValueTransfer_884() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GETI_IMM, ESI_GET. */
  /* Failure: becomes-sparse at depth 2. */
  var x;
  x = {"0": {"1": 1, "0": 1, "c": 2}, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x["0"][10000] = 2;
      }
      assertEquals(1, x["0"][a]);
    }
  })();
}

function testPropertyValueTransfer_885() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GETI_IMM, ESI_GETI_IMM. */
  var x;
  x = {"0": {"0": 1, "c": 2}, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      assertEquals(1, x["0"]["0"]);
    }
  })();
}

function testPropertyValueTransfer_886() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GETI_IMM, ESI_GETI_IMM. */
  /* Failure: non-object at depth 1. */
  function test(){
    var x;
    x = {"0": {"0": 1, "c": 2}, "c": 2};
    (function(){
      for (var i = 0; i < 100; i++) {
        if (i === 99) {
          x = null;
        }
        x["0"]["0"];
      }
    })();
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_887() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GETI_IMM, ESI_GETI_IMM. */
  /* Failure: non-object at depth 2. */
  function test(){
    var x;
    x = {"0": {"0": 1, "c": 2}, "c": 2};
    (function(){
      for (var i = 0; i < 100; i++) {
        if (i === 99) {
          x["0"] = null;
        }
        x["0"]["0"];
      }
    })();
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_888() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GETI_IMM, ESI_GETI_IMM. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    var x;
    x = {"0": {"0": 1, "c": 2}, "c": 2};
    (function(){
      for (var i = 0; i < 100; i++) {
        if (i === 99) {
          delete x["0"];
        }
        x["0"]["0"];
      }
    })();
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_889() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GETI_IMM, ESI_GETI_IMM. */
  /* Failure: property-no-longer-exists at depth 3. */
  var x;
  x = {"0": {"0": 1, "c": 2}, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        delete x["0"]["0"];
      }
      assertEquals(i === 99 ? undefined : 1, x["0"]["0"]);
    }
  })();
}

function testPropertyValueTransfer_890() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GETI_IMM, ESI_GETI_IMM. */
  /* Failure: class-changed at depth 1. */
  var x;
  x = {"0": {"0": 1, "c": 2}, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        delete x.c;
      }
      assertEquals(1, x["0"]["0"]);
    }
  })();
}

function testPropertyValueTransfer_891() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GETI_IMM, ESI_GETI_IMM. */
  /* Failure: class-changed at depth 2. */
  var x;
  x = {"0": {"0": 1, "c": 2}, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        delete x["0"].c;
      }
      assertEquals(1, x["0"]["0"]);
    }
  })();
}

function testPropertyValueTransfer_892() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GETI_IMM, ESI_GETI_IMM. */
  /* Failure: becomes-sparse at depth 1. */
  var x;
  x = {"0": {"0": 1, "c": 2}, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        x[10000] = 2;
      }
      assertEquals(1, x["0"]["0"]);
    }
  })();
}

function testPropertyValueTransfer_893() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GETI_IMM, ESI_GETI_IMM. */
  /* Failure: becomes-sparse at depth 2. */
  var x;
  x = {"0": {"0": 1, "c": 2}, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        x["0"][10000] = 2;
      }
      assertEquals(1, x["0"]["0"]);
    }
  })();
}

function testPropertyValueTransfer_894() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GETI_IMM, ESI_GETN_IMM. */
  var x;
  x = {"0": {"a": 1, "c": 2}, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      assertEquals(1, x["0"].a);
    }
  })();
}

function testPropertyValueTransfer_895() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GETI_IMM, ESI_GETN_IMM. */
  /* Failure: non-object at depth 1. */
  function test(){
    var x;
    x = {"0": {"a": 1, "c": 2}, "c": 2};
    (function(){
      for (var i = 0; i < 100; i++) {
        if (i === 99) {
          x = null;
        }
        x["0"].a;
      }
    })();
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_896() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GETI_IMM, ESI_GETN_IMM. */
  /* Failure: non-object at depth 2. */
  function test(){
    var x;
    x = {"0": {"a": 1, "c": 2}, "c": 2};
    (function(){
      for (var i = 0; i < 100; i++) {
        if (i === 99) {
          x["0"] = null;
        }
        x["0"].a;
      }
    })();
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_897() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GETI_IMM, ESI_GETN_IMM. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    var x;
    x = {"0": {"a": 1, "c": 2}, "c": 2};
    (function(){
      for (var i = 0; i < 100; i++) {
        if (i === 99) {
          delete x["0"];
        }
        x["0"].a;
      }
    })();
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_898() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GETI_IMM, ESI_GETN_IMM. */
  /* Failure: property-no-longer-exists at depth 3. */
  var x;
  x = {"0": {"a": 1, "c": 2}, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        delete x["0"].a;
      }
      assertEquals(i === 99 ? undefined : 1, x["0"].a);
    }
  })();
}

function testPropertyValueTransfer_899() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GETI_IMM, ESI_GETN_IMM. */
  /* Failure: class-changed at depth 1. */
  var x;
  x = {"0": {"a": 1, "c": 2}, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        delete x.c;
      }
      assertEquals(1, x["0"].a);
    }
  })();
}

function testPropertyValueTransfer_900() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GETI_IMM, ESI_GETN_IMM. */
  /* Failure: class-changed at depth 2. */
  var x;
  x = {"0": {"a": 1, "c": 2}, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        delete x["0"].c;
      }
      assertEquals(1, x["0"].a);
    }
  })();
}

function testPropertyValueTransfer_901() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GETI_IMM, ESI_GETN_IMM. */
  /* Failure: becomes-sparse at depth 1. */
  var x;
  x = {"0": {"a": 1, "c": 2}, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        x[10000] = 2;
      }
      assertEquals(1, x["0"].a);
    }
  })();
}

function testPropertyValueTransfer_902() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GETI_IMM, ESI_PUT. */
  var x;
  x = {"0": {"1": 1, "0": 1, "c": 2}, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      x["0"][a] = 42;
      assertEquals(42, x["0"][a]);
    }
  })();
}

function testPropertyValueTransfer_903() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GETI_IMM, ESI_PUT. */
  /* Failure: non-object at depth 1. */
  function test(){
    var x;
    x = {"0": {"1": 1, "0": 1, "c": 2}, "c": 2};
    (function(){
      for (var i = 0; i < 100; i++) {
        var a = i % 2;
        if (i === 99) {
          x = null;
        }
        x["0"][a] = 42;
      }
    })();
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_904() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GETI_IMM, ESI_PUT. */
  /* Failure: non-object at depth 2. */
  function test(){
    var x;
    x = {"0": {"1": 1, "0": 1, "c": 2}, "c": 2};
    (function(){
      for (var i = 0; i < 100; i++) {
        var a = i % 2;
        if (i === 99) {
          x["0"] = null;
        }
        x["0"][a] = 42;
      }
    })();
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_905() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GETI_IMM, ESI_PUT. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    var x;
    x = {"0": {"1": 1, "0": 1, "c": 2}, "c": 2};
    (function(){
      for (var i = 0; i < 100; i++) {
        var a = i % 2;
        if (i === 99) {
          delete x["0"];
        }
        x["0"][a] = 42;
      }
    })();
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_906() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GETI_IMM, ESI_PUT. */
  /* Failure: property-no-longer-exists at depth 3. */
  var x;
  x = {"0": {"1": 1, "0": 1, "c": 2}, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        delete x["0"][a];
      }
      x["0"][a] = 42;
      assertEquals(42, x["0"][a]);
    }
  })();
}

function testPropertyValueTransfer_907() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GETI_IMM, ESI_PUT. */
  /* Failure: class-changed at depth 1. */
  var x;
  x = {"0": {"1": 1, "0": 1, "c": 2}, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        delete x.c;
      }
      x["0"][a] = 42;
      assertEquals(42, x["0"][a]);
    }
  })();
}

function testPropertyValueTransfer_908() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GETI_IMM, ESI_PUT. */
  /* Failure: class-changed at depth 2. */
  var x;
  x = {"0": {"1": 1, "0": 1, "c": 2}, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        delete x["0"].c;
      }
      x["0"][a] = 42;
      assertEquals(42, x["0"][a]);
    }
  })();
}

function testPropertyValueTransfer_909() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GETI_IMM, ESI_PUT. */
  /* Failure: becomes-sparse at depth 1. */
  var x;
  x = {"0": {"1": 1, "0": 1, "c": 2}, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x[10000] = 2;
      }
      x["0"][a] = 42;
      assertEquals(42, x["0"][a]);
    }
  })();
}

function testPropertyValueTransfer_910() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GETI_IMM, ESI_PUTI_IMM. */
  var x;
  x = {"0": {"0": 1, "c": 2}, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      x["0"]["0"] = 42;
      assertEquals(42, x["0"]["0"]);
    }
  })();
}

function testPropertyValueTransfer_911() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GETI_IMM, ESI_PUTI_IMM. */
  /* Failure: non-object at depth 1. */
  function test(){
    var x;
    x = {"0": {"0": 1, "c": 2}, "c": 2};
    (function(){
      for (var i = 0; i < 100; i++) {
        if (i === 99) {
          x = null;
        }
        x["0"]["0"] = 42;
      }
    })();
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_912() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GETI_IMM, ESI_PUTI_IMM. */
  /* Failure: non-object at depth 2. */
  function test(){
    var x;
    x = {"0": {"0": 1, "c": 2}, "c": 2};
    (function(){
      for (var i = 0; i < 100; i++) {
        if (i === 99) {
          x["0"] = null;
        }
        x["0"]["0"] = 42;
      }
    })();
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_913() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GETI_IMM, ESI_PUTI_IMM. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    var x;
    x = {"0": {"0": 1, "c": 2}, "c": 2};
    (function(){
      for (var i = 0; i < 100; i++) {
        if (i === 99) {
          delete x["0"];
        }
        x["0"]["0"] = 42;
      }
    })();
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_914() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GETI_IMM, ESI_PUTI_IMM. */
  /* Failure: property-no-longer-exists at depth 3. */
  var x;
  x = {"0": {"0": 1, "c": 2}, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        delete x["0"]["0"];
      }
      x["0"]["0"] = 42;
      assertEquals(42, x["0"]["0"]);
    }
  })();
}

function testPropertyValueTransfer_915() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GETI_IMM, ESI_PUTI_IMM. */
  /* Failure: class-changed at depth 1. */
  var x;
  x = {"0": {"0": 1, "c": 2}, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        delete x.c;
      }
      x["0"]["0"] = 42;
      assertEquals(42, x["0"]["0"]);
    }
  })();
}

function testPropertyValueTransfer_916() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GETI_IMM, ESI_PUTI_IMM. */
  /* Failure: class-changed at depth 2. */
  var x;
  x = {"0": {"0": 1, "c": 2}, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        delete x["0"].c;
      }
      x["0"]["0"] = 42;
      assertEquals(42, x["0"]["0"]);
    }
  })();
}

function testPropertyValueTransfer_917() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GETI_IMM, ESI_PUTI_IMM. */
  /* Failure: becomes-sparse at depth 1. */
  var x;
  x = {"0": {"0": 1, "c": 2}, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        x[10000] = 2;
      }
      x["0"]["0"] = 42;
      assertEquals(42, x["0"]["0"]);
    }
  })();
}

function testPropertyValueTransfer_918() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GETI_IMM, ESI_PUTN_IMM. */
  var x;
  x = {"0": {"a": 1, "c": 2}, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      x["0"].a = 42;
      assertEquals(42, x["0"].a);
    }
  })();
}

function testPropertyValueTransfer_919() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GETI_IMM, ESI_PUTN_IMM. */
  /* Failure: non-object at depth 1. */
  function test(){
    var x;
    x = {"0": {"a": 1, "c": 2}, "c": 2};
    (function(){
      for (var i = 0; i < 100; i++) {
        if (i === 99) {
          x = null;
        }
        x["0"].a = 42;
      }
    })();
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_920() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GETI_IMM, ESI_PUTN_IMM. */
  /* Failure: non-object at depth 2. */
  function test(){
    var x;
    x = {"0": {"a": 1, "c": 2}, "c": 2};
    (function(){
      for (var i = 0; i < 100; i++) {
        if (i === 99) {
          x["0"] = null;
        }
        x["0"].a = 42;
      }
    })();
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_921() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GETI_IMM, ESI_PUTN_IMM. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    var x;
    x = {"0": {"a": 1, "c": 2}, "c": 2};
    (function(){
      for (var i = 0; i < 100; i++) {
        if (i === 99) {
          delete x["0"];
        }
        x["0"].a = 42;
      }
    })();
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_922() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GETI_IMM, ESI_PUTN_IMM. */
  /* Failure: property-no-longer-exists at depth 3. */
  var x;
  x = {"0": {"a": 1, "c": 2}, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        delete x["0"].a;
      }
      x["0"].a = 42;
      assertEquals(42, x["0"].a);
    }
  })();
}

function testPropertyValueTransfer_923() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GETI_IMM, ESI_PUTN_IMM. */
  /* Failure: class-changed at depth 1. */
  var x;
  x = {"0": {"a": 1, "c": 2}, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        delete x.c;
      }
      x["0"].a = 42;
      assertEquals(42, x["0"].a);
    }
  })();
}

function testPropertyValueTransfer_924() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GETI_IMM, ESI_PUTN_IMM. */
  /* Failure: class-changed at depth 2. */
  var x;
  x = {"0": {"a": 1, "c": 2}, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        delete x["0"].c;
      }
      x["0"].a = 42;
      assertEquals(42, x["0"].a);
    }
  })();
}

function testPropertyValueTransfer_925() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GETI_IMM, ESI_PUTN_IMM. */
  /* Failure: becomes-sparse at depth 1. */
  var x;
  x = {"0": {"a": 1, "c": 2}, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        x[10000] = 2;
      }
      x["0"].a = 42;
      assertEquals(42, x["0"].a);
    }
  })();
}

function testPropertyValueTransfer_926() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GETN_IMM, ESI_GET. */
  var x;
  x = {"a": {"1": 1, "0": 1, "c": 2}, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      assertEquals(1, x.a[a]);
    }
  })();
}

function testPropertyValueTransfer_927() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GETN_IMM, ESI_GET. */
  /* Failure: non-object at depth 1. */
  function test(){
    var x;
    x = {"a": {"1": 1, "0": 1, "c": 2}, "c": 2};
    (function(){
      for (var i = 0; i < 100; i++) {
        var a = i % 2;
        if (i === 99) {
          x = null;
        }
        x.a[a];
      }
    })();
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_928() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GETN_IMM, ESI_GET. */
  /* Failure: non-object at depth 2. */
  function test(){
    var x;
    x = {"a": {"1": 1, "0": 1, "c": 2}, "c": 2};
    (function(){
      for (var i = 0; i < 100; i++) {
        var a = i % 2;
        if (i === 99) {
          x.a = null;
        }
        x.a[a];
      }
    })();
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_929() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GETN_IMM, ESI_GET. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    var x;
    x = {"a": {"1": 1, "0": 1, "c": 2}, "c": 2};
    (function(){
      for (var i = 0; i < 100; i++) {
        var a = i % 2;
        if (i === 99) {
          delete x.a;
        }
        x.a[a];
      }
    })();
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_930() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GETN_IMM, ESI_GET. */
  /* Failure: property-no-longer-exists at depth 3. */
  var x;
  x = {"a": {"1": 1, "0": 1, "c": 2}, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        delete x.a[a];
      }
      assertEquals(i === 99 ? undefined : 1, x.a[a]);
    }
  })();
}

function testPropertyValueTransfer_931() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GETN_IMM, ESI_GET. */
  /* Failure: class-changed at depth 1. */
  var x;
  x = {"a": {"1": 1, "0": 1, "c": 2}, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        delete x.c;
      }
      assertEquals(1, x.a[a]);
    }
  })();
}

function testPropertyValueTransfer_932() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GETN_IMM, ESI_GET. */
  /* Failure: class-changed at depth 2. */
  var x;
  x = {"a": {"1": 1, "0": 1, "c": 2}, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        delete x.a.c;
      }
      assertEquals(1, x.a[a]);
    }
  })();
}

function testPropertyValueTransfer_933() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GETN_IMM, ESI_GET. */
  /* Failure: becomes-sparse at depth 2. */
  var x;
  x = {"a": {"1": 1, "0": 1, "c": 2}, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x.a[10000] = 2;
      }
      assertEquals(1, x.a[a]);
    }
  })();
}

function testPropertyValueTransfer_934() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GETN_IMM, ESI_GETI_IMM. */
  var x;
  x = {"a": {"0": 1, "c": 2}, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      assertEquals(1, x.a["0"]);
    }
  })();
}

function testPropertyValueTransfer_935() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GETN_IMM, ESI_GETI_IMM. */
  /* Failure: non-object at depth 1. */
  function test(){
    var x;
    x = {"a": {"0": 1, "c": 2}, "c": 2};
    (function(){
      for (var i = 0; i < 100; i++) {
        if (i === 99) {
          x = null;
        }
        x.a["0"];
      }
    })();
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_936() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GETN_IMM, ESI_GETI_IMM. */
  /* Failure: non-object at depth 2. */
  function test(){
    var x;
    x = {"a": {"0": 1, "c": 2}, "c": 2};
    (function(){
      for (var i = 0; i < 100; i++) {
        if (i === 99) {
          x.a = null;
        }
        x.a["0"];
      }
    })();
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_937() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GETN_IMM, ESI_GETI_IMM. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    var x;
    x = {"a": {"0": 1, "c": 2}, "c": 2};
    (function(){
      for (var i = 0; i < 100; i++) {
        if (i === 99) {
          delete x.a;
        }
        x.a["0"];
      }
    })();
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_938() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GETN_IMM, ESI_GETI_IMM. */
  /* Failure: property-no-longer-exists at depth 3. */
  var x;
  x = {"a": {"0": 1, "c": 2}, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        delete x.a["0"];
      }
      assertEquals(i === 99 ? undefined : 1, x.a["0"]);
    }
  })();
}

function testPropertyValueTransfer_939() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GETN_IMM, ESI_GETI_IMM. */
  /* Failure: class-changed at depth 1. */
  var x;
  x = {"a": {"0": 1, "c": 2}, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        delete x.c;
      }
      assertEquals(1, x.a["0"]);
    }
  })();
}

function testPropertyValueTransfer_940() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GETN_IMM, ESI_GETI_IMM. */
  /* Failure: class-changed at depth 2. */
  var x;
  x = {"a": {"0": 1, "c": 2}, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        delete x.a.c;
      }
      assertEquals(1, x.a["0"]);
    }
  })();
}

function testPropertyValueTransfer_941() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GETN_IMM, ESI_GETI_IMM. */
  /* Failure: becomes-sparse at depth 2. */
  var x;
  x = {"a": {"0": 1, "c": 2}, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        x.a[10000] = 2;
      }
      assertEquals(1, x.a["0"]);
    }
  })();
}

function testPropertyValueTransfer_942() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GETN_IMM, ESI_GETN_IMM. */
  var x;
  x = {"a": {"a": 1, "c": 2}, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      assertEquals(1, x.a.a);
    }
  })();
}

function testPropertyValueTransfer_943() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GETN_IMM, ESI_GETN_IMM. */
  /* Failure: non-object at depth 1. */
  function test(){
    var x;
    x = {"a": {"a": 1, "c": 2}, "c": 2};
    (function(){
      for (var i = 0; i < 100; i++) {
        if (i === 99) {
          x = null;
        }
        x.a.a;
      }
    })();
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_944() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GETN_IMM, ESI_GETN_IMM. */
  /* Failure: non-object at depth 2. */
  function test(){
    var x;
    x = {"a": {"a": 1, "c": 2}, "c": 2};
    (function(){
      for (var i = 0; i < 100; i++) {
        if (i === 99) {
          x.a = null;
        }
        x.a.a;
      }
    })();
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_945() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GETN_IMM, ESI_GETN_IMM. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    var x;
    x = {"a": {"a": 1, "c": 2}, "c": 2};
    (function(){
      for (var i = 0; i < 100; i++) {
        if (i === 99) {
          delete x.a;
        }
        x.a.a;
      }
    })();
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_946() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GETN_IMM, ESI_GETN_IMM. */
  /* Failure: property-no-longer-exists at depth 3. */
  var x;
  x = {"a": {"a": 1, "c": 2}, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        delete x.a.a;
      }
      assertEquals(i === 99 ? undefined : 1, x.a.a);
    }
  })();
}

function testPropertyValueTransfer_947() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GETN_IMM, ESI_GETN_IMM. */
  /* Failure: class-changed at depth 1. */
  var x;
  x = {"a": {"a": 1, "c": 2}, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        delete x.c;
      }
      assertEquals(1, x.a.a);
    }
  })();
}

function testPropertyValueTransfer_948() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GETN_IMM, ESI_GETN_IMM. */
  /* Failure: class-changed at depth 2. */
  var x;
  x = {"a": {"a": 1, "c": 2}, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        delete x.a.c;
      }
      assertEquals(1, x.a.a);
    }
  })();
}

function testPropertyValueTransfer_949() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GETN_IMM, ESI_PUT. */
  var x;
  x = {"a": {"1": 1, "0": 1, "c": 2}, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      x.a[a] = 42;
      assertEquals(42, x.a[a]);
    }
  })();
}

function testPropertyValueTransfer_950() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GETN_IMM, ESI_PUT. */
  /* Failure: non-object at depth 1. */
  function test(){
    var x;
    x = {"a": {"1": 1, "0": 1, "c": 2}, "c": 2};
    (function(){
      for (var i = 0; i < 100; i++) {
        var a = i % 2;
        if (i === 99) {
          x = null;
        }
        x.a[a] = 42;
      }
    })();
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_951() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GETN_IMM, ESI_PUT. */
  /* Failure: non-object at depth 2. */
  function test(){
    var x;
    x = {"a": {"1": 1, "0": 1, "c": 2}, "c": 2};
    (function(){
      for (var i = 0; i < 100; i++) {
        var a = i % 2;
        if (i === 99) {
          x.a = null;
        }
        x.a[a] = 42;
      }
    })();
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_952() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GETN_IMM, ESI_PUT. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    var x;
    x = {"a": {"1": 1, "0": 1, "c": 2}, "c": 2};
    (function(){
      for (var i = 0; i < 100; i++) {
        var a = i % 2;
        if (i === 99) {
          delete x.a;
        }
        x.a[a] = 42;
      }
    })();
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_953() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GETN_IMM, ESI_PUT. */
  /* Failure: property-no-longer-exists at depth 3. */
  var x;
  x = {"a": {"1": 1, "0": 1, "c": 2}, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        delete x.a[a];
      }
      x.a[a] = 42;
      assertEquals(42, x.a[a]);
    }
  })();
}

function testPropertyValueTransfer_954() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GETN_IMM, ESI_PUT. */
  /* Failure: class-changed at depth 1. */
  var x;
  x = {"a": {"1": 1, "0": 1, "c": 2}, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        delete x.c;
      }
      x.a[a] = 42;
      assertEquals(42, x.a[a]);
    }
  })();
}

function testPropertyValueTransfer_955() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GETN_IMM, ESI_PUT. */
  /* Failure: class-changed at depth 2. */
  var x;
  x = {"a": {"1": 1, "0": 1, "c": 2}, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        delete x.a.c;
      }
      x.a[a] = 42;
      assertEquals(42, x.a[a]);
    }
  })();
}

function testPropertyValueTransfer_956() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GETN_IMM, ESI_PUTI_IMM. */
  var x;
  x = {"a": {"0": 1, "c": 2}, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      x.a["0"] = 42;
      assertEquals(42, x.a["0"]);
    }
  })();
}

function testPropertyValueTransfer_957() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GETN_IMM, ESI_PUTI_IMM. */
  /* Failure: non-object at depth 1. */
  function test(){
    var x;
    x = {"a": {"0": 1, "c": 2}, "c": 2};
    (function(){
      for (var i = 0; i < 100; i++) {
        if (i === 99) {
          x = null;
        }
        x.a["0"] = 42;
      }
    })();
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_958() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GETN_IMM, ESI_PUTI_IMM. */
  /* Failure: non-object at depth 2. */
  function test(){
    var x;
    x = {"a": {"0": 1, "c": 2}, "c": 2};
    (function(){
      for (var i = 0; i < 100; i++) {
        if (i === 99) {
          x.a = null;
        }
        x.a["0"] = 42;
      }
    })();
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_959() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GETN_IMM, ESI_PUTI_IMM. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    var x;
    x = {"a": {"0": 1, "c": 2}, "c": 2};
    (function(){
      for (var i = 0; i < 100; i++) {
        if (i === 99) {
          delete x.a;
        }
        x.a["0"] = 42;
      }
    })();
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_960() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GETN_IMM, ESI_PUTI_IMM. */
  /* Failure: property-no-longer-exists at depth 3. */
  var x;
  x = {"a": {"0": 1, "c": 2}, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        delete x.a["0"];
      }
      x.a["0"] = 42;
      assertEquals(42, x.a["0"]);
    }
  })();
}

function testPropertyValueTransfer_961() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GETN_IMM, ESI_PUTI_IMM. */
  /* Failure: class-changed at depth 1. */
  var x;
  x = {"a": {"0": 1, "c": 2}, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        delete x.c;
      }
      x.a["0"] = 42;
      assertEquals(42, x.a["0"]);
    }
  })();
}

function testPropertyValueTransfer_962() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GETN_IMM, ESI_PUTI_IMM. */
  /* Failure: class-changed at depth 2. */
  var x;
  x = {"a": {"0": 1, "c": 2}, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        delete x.a.c;
      }
      x.a["0"] = 42;
      assertEquals(42, x.a["0"]);
    }
  })();
}

function testPropertyValueTransfer_963() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GETN_IMM, ESI_PUTN_IMM. */
  var x;
  x = {"a": {"a": 1, "c": 2}, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      x.a.a = 42;
      assertEquals(42, x.a.a);
    }
  })();
}

function testPropertyValueTransfer_964() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GETN_IMM, ESI_PUTN_IMM. */
  /* Failure: non-object at depth 1. */
  function test(){
    var x;
    x = {"a": {"a": 1, "c": 2}, "c": 2};
    (function(){
      for (var i = 0; i < 100; i++) {
        if (i === 99) {
          x = null;
        }
        x.a.a = 42;
      }
    })();
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_965() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GETN_IMM, ESI_PUTN_IMM. */
  /* Failure: non-object at depth 2. */
  function test(){
    var x;
    x = {"a": {"a": 1, "c": 2}, "c": 2};
    (function(){
      for (var i = 0; i < 100; i++) {
        if (i === 99) {
          x.a = null;
        }
        x.a.a = 42;
      }
    })();
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_966() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GETN_IMM, ESI_PUTN_IMM. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    var x;
    x = {"a": {"a": 1, "c": 2}, "c": 2};
    (function(){
      for (var i = 0; i < 100; i++) {
        if (i === 99) {
          delete x.a;
        }
        x.a.a = 42;
      }
    })();
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_967() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GETN_IMM, ESI_PUTN_IMM. */
  /* Failure: property-no-longer-exists at depth 3. */
  var x;
  x = {"a": {"a": 1, "c": 2}, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        delete x.a.a;
      }
      x.a.a = 42;
      assertEquals(42, x.a.a);
    }
  })();
}

function testPropertyValueTransfer_968() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GETN_IMM, ESI_PUTN_IMM. */
  /* Failure: class-changed at depth 1. */
  var x;
  x = {"a": {"a": 1, "c": 2}, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        delete x.c;
      }
      x.a.a = 42;
      assertEquals(42, x.a.a);
    }
  })();
}

function testPropertyValueTransfer_969() {
  /* Instructions: ESI_GET_LEXICAL, ESI_GETN_IMM, ESI_PUTN_IMM. */
  /* Failure: class-changed at depth 2. */
  var x;
  x = {"a": {"a": 1, "c": 2}, "c": 2};
  (function(){
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        delete x.a.c;
      }
      x.a.a = 42;
      assertEquals(42, x.a.a);
    }
  })();
}

function testPropertyValueTransfer_970() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GET, ESI_GET. */
  x = {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    assertEquals(1, x[a][b]);
  }
}

function testPropertyValueTransfer_971() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GET, ESI_GET. */
  /* Failure: non-object at depth 1. */
  function test(){
    x = {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      var b = i % 2;
      if (i === 99) {
        x = null;
      }
      x[a][b];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_972() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GET, ESI_GET. */
  /* Failure: non-object at depth 2. */
  function test(){
    x = {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      var b = i % 2;
      if (i === 99) {
        x[a] = null;
      }
      x[a][b];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_973() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GET, ESI_GET. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    x = {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      var b = i % 2;
      if (i === 99) {
        delete x[a];
      }
      x[a][b];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_974() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GET, ESI_GET. */
  /* Failure: property-no-longer-exists at depth 3. */
  x = {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    if (i === 99) {
      delete x[a][b];
    }
    assertEquals(i === 99 ? undefined : 1, x[a][b]);
  }
}

function testPropertyValueTransfer_975() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GET, ESI_GET. */
  /* Failure: class-changed at depth 1. */
  x = {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    if (i === 99) {
      delete x.c;
    }
    assertEquals(1, x[a][b]);
  }
}

function testPropertyValueTransfer_976() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GET, ESI_GET. */
  /* Failure: class-changed at depth 2. */
  x = {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    if (i === 99) {
      delete x[a].c;
    }
    assertEquals(1, x[a][b]);
  }
}

function testPropertyValueTransfer_977() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GET, ESI_GET. */
  /* Failure: becomes-sparse at depth 1. */
  x = {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    if (i === 99) {
      x[10000] = 2;
    }
    assertEquals(1, x[a][b]);
  }
}

function testPropertyValueTransfer_978() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GET, ESI_GET. */
  /* Failure: becomes-sparse at depth 2. */
  x = {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    if (i === 99) {
      x[a][10000] = 2;
    }
    assertEquals(1, x[a][b]);
  }
}

function testPropertyValueTransfer_979() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GET, ESI_GETI_IMM. */
  x = {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    assertEquals(1, x[a]["0"]);
  }
}

function testPropertyValueTransfer_980() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GET, ESI_GETI_IMM. */
  /* Failure: non-object at depth 1. */
  function test(){
    x = {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x = null;
      }
      x[a]["0"];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_981() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GET, ESI_GETI_IMM. */
  /* Failure: non-object at depth 2. */
  function test(){
    x = {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x[a] = null;
      }
      x[a]["0"];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_982() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GET, ESI_GETI_IMM. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    x = {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        delete x[a];
      }
      x[a]["0"];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_983() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GET, ESI_GETI_IMM. */
  /* Failure: property-no-longer-exists at depth 3. */
  x = {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x[a]["0"];
    }
    assertEquals(i === 99 ? undefined : 1, x[a]["0"]);
  }
}

function testPropertyValueTransfer_984() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GET, ESI_GETI_IMM. */
  /* Failure: class-changed at depth 1. */
  x = {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x.c;
    }
    assertEquals(1, x[a]["0"]);
  }
}

function testPropertyValueTransfer_985() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GET, ESI_GETI_IMM. */
  /* Failure: class-changed at depth 2. */
  x = {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x[a].c;
    }
    assertEquals(1, x[a]["0"]);
  }
}

function testPropertyValueTransfer_986() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GET, ESI_GETI_IMM. */
  /* Failure: becomes-sparse at depth 1. */
  x = {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      x[10000] = 2;
    }
    assertEquals(1, x[a]["0"]);
  }
}

function testPropertyValueTransfer_987() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GET, ESI_GETI_IMM. */
  /* Failure: becomes-sparse at depth 2. */
  x = {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      x[a][10000] = 2;
    }
    assertEquals(1, x[a]["0"]);
  }
}

function testPropertyValueTransfer_988() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GET, ESI_GETN_IMM. */
  x = {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    assertEquals(1, x[a].a);
  }
}

function testPropertyValueTransfer_989() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GET, ESI_GETN_IMM. */
  /* Failure: non-object at depth 1. */
  function test(){
    x = {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x = null;
      }
      x[a].a;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_990() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GET, ESI_GETN_IMM. */
  /* Failure: non-object at depth 2. */
  function test(){
    x = {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x[a] = null;
      }
      x[a].a;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_991() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GET, ESI_GETN_IMM. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    x = {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        delete x[a];
      }
      x[a].a;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_992() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GET, ESI_GETN_IMM. */
  /* Failure: property-no-longer-exists at depth 3. */
  x = {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x[a].a;
    }
    assertEquals(i === 99 ? undefined : 1, x[a].a);
  }
}

function testPropertyValueTransfer_993() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GET, ESI_GETN_IMM. */
  /* Failure: class-changed at depth 1. */
  x = {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x.c;
    }
    assertEquals(1, x[a].a);
  }
}

function testPropertyValueTransfer_994() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GET, ESI_GETN_IMM. */
  /* Failure: class-changed at depth 2. */
  x = {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x[a].c;
    }
    assertEquals(1, x[a].a);
  }
}

function testPropertyValueTransfer_995() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GET, ESI_GETN_IMM. */
  /* Failure: becomes-sparse at depth 1. */
  x = {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      x[10000] = 2;
    }
    assertEquals(1, x[a].a);
  }
}

function testPropertyValueTransfer_996() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GET, ESI_PUT. */
  x = {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    x[a][b] = 42;
    assertEquals(42, x[a][b]);
  }
}

function testPropertyValueTransfer_997() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GET, ESI_PUT. */
  /* Failure: non-object at depth 1. */
  function test(){
    x = {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      var b = i % 2;
      if (i === 99) {
        x = null;
      }
      x[a][b] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_998() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GET, ESI_PUT. */
  /* Failure: non-object at depth 2. */
  function test(){
    x = {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      var b = i % 2;
      if (i === 99) {
        x[a] = null;
      }
      x[a][b] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_999() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GET, ESI_PUT. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    x = {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      var b = i % 2;
      if (i === 99) {
        delete x[a];
      }
      x[a][b] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_1000() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GET, ESI_PUT. */
  /* Failure: property-no-longer-exists at depth 3. */
  x = {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    if (i === 99) {
      delete x[a][b];
    }
    x[a][b] = 42;
    assertEquals(42, x[a][b]);
  }
}

function testPropertyValueTransfer_1001() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GET, ESI_PUT. */
  /* Failure: class-changed at depth 1. */
  x = {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    if (i === 99) {
      delete x.c;
    }
    x[a][b] = 42;
    assertEquals(42, x[a][b]);
  }
}

function testPropertyValueTransfer_1002() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GET, ESI_PUT. */
  /* Failure: class-changed at depth 2. */
  x = {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    if (i === 99) {
      delete x[a].c;
    }
    x[a][b] = 42;
    assertEquals(42, x[a][b]);
  }
}

function testPropertyValueTransfer_1003() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GET, ESI_PUT. */
  /* Failure: becomes-sparse at depth 1. */
  x = {"1": {"1": 1, "0": 1, "c": 2}, "0": {"1": 1, "0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    var b = i % 2;
    if (i === 99) {
      x[10000] = 2;
    }
    x[a][b] = 42;
    assertEquals(42, x[a][b]);
  }
}

function testPropertyValueTransfer_1004() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GET, ESI_PUTI_IMM. */
  x = {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    x[a]["0"] = 42;
    assertEquals(42, x[a]["0"]);
  }
}

function testPropertyValueTransfer_1005() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GET, ESI_PUTI_IMM. */
  /* Failure: non-object at depth 1. */
  function test(){
    x = {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x = null;
      }
      x[a]["0"] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_1006() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GET, ESI_PUTI_IMM. */
  /* Failure: non-object at depth 2. */
  function test(){
    x = {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x[a] = null;
      }
      x[a]["0"] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_1007() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GET, ESI_PUTI_IMM. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    x = {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        delete x[a];
      }
      x[a]["0"] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_1008() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GET, ESI_PUTI_IMM. */
  /* Failure: property-no-longer-exists at depth 3. */
  x = {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x[a]["0"];
    }
    x[a]["0"] = 42;
    assertEquals(42, x[a]["0"]);
  }
}

function testPropertyValueTransfer_1009() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GET, ESI_PUTI_IMM. */
  /* Failure: class-changed at depth 1. */
  x = {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x.c;
    }
    x[a]["0"] = 42;
    assertEquals(42, x[a]["0"]);
  }
}

function testPropertyValueTransfer_1010() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GET, ESI_PUTI_IMM. */
  /* Failure: class-changed at depth 2. */
  x = {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x[a].c;
    }
    x[a]["0"] = 42;
    assertEquals(42, x[a]["0"]);
  }
}

function testPropertyValueTransfer_1011() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GET, ESI_PUTI_IMM. */
  /* Failure: becomes-sparse at depth 1. */
  x = {"1": {"0": 1, "c": 2}, "0": {"0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      x[10000] = 2;
    }
    x[a]["0"] = 42;
    assertEquals(42, x[a]["0"]);
  }
}

function testPropertyValueTransfer_1012() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GET, ESI_PUTN_IMM. */
  x = {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    x[a].a = 42;
    assertEquals(42, x[a].a);
  }
}

function testPropertyValueTransfer_1013() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GET, ESI_PUTN_IMM. */
  /* Failure: non-object at depth 1. */
  function test(){
    x = {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x = null;
      }
      x[a].a = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_1014() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GET, ESI_PUTN_IMM. */
  /* Failure: non-object at depth 2. */
  function test(){
    x = {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x[a] = null;
      }
      x[a].a = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_1015() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GET, ESI_PUTN_IMM. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    x = {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        delete x[a];
      }
      x[a].a = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_1016() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GET, ESI_PUTN_IMM. */
  /* Failure: property-no-longer-exists at depth 3. */
  x = {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x[a].a;
    }
    x[a].a = 42;
    assertEquals(42, x[a].a);
  }
}

function testPropertyValueTransfer_1017() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GET, ESI_PUTN_IMM. */
  /* Failure: class-changed at depth 1. */
  x = {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x.c;
    }
    x[a].a = 42;
    assertEquals(42, x[a].a);
  }
}

function testPropertyValueTransfer_1018() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GET, ESI_PUTN_IMM. */
  /* Failure: class-changed at depth 2. */
  x = {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x[a].c;
    }
    x[a].a = 42;
    assertEquals(42, x[a].a);
  }
}

function testPropertyValueTransfer_1019() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GET, ESI_PUTN_IMM. */
  /* Failure: becomes-sparse at depth 1. */
  x = {"1": {"a": 1, "c": 2}, "0": {"a": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      x[10000] = 2;
    }
    x[a].a = 42;
    assertEquals(42, x[a].a);
  }
}

function testPropertyValueTransfer_1020() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GETI_IMM, ESI_GET. */
  x = {"0": {"1": 1, "0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    assertEquals(1, x["0"][a]);
  }
}

function testPropertyValueTransfer_1021() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GETI_IMM, ESI_GET. */
  /* Failure: non-object at depth 1. */
  function test(){
    x = {"0": {"1": 1, "0": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x = null;
      }
      x["0"][a];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_1022() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GETI_IMM, ESI_GET. */
  /* Failure: non-object at depth 2. */
  function test(){
    x = {"0": {"1": 1, "0": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x["0"] = null;
      }
      x["0"][a];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_1023() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GETI_IMM, ESI_GET. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    x = {"0": {"1": 1, "0": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        delete x["0"];
      }
      x["0"][a];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_1024() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GETI_IMM, ESI_GET. */
  /* Failure: property-no-longer-exists at depth 3. */
  x = {"0": {"1": 1, "0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x["0"][a];
    }
    assertEquals(i === 99 ? undefined : 1, x["0"][a]);
  }
}

function testPropertyValueTransfer_1025() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GETI_IMM, ESI_GET. */
  /* Failure: class-changed at depth 1. */
  x = {"0": {"1": 1, "0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x.c;
    }
    assertEquals(1, x["0"][a]);
  }
}

function testPropertyValueTransfer_1026() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GETI_IMM, ESI_GET. */
  /* Failure: class-changed at depth 2. */
  x = {"0": {"1": 1, "0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x["0"].c;
    }
    assertEquals(1, x["0"][a]);
  }
}

function testPropertyValueTransfer_1027() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GETI_IMM, ESI_GET. */
  /* Failure: becomes-sparse at depth 1. */
  x = {"0": {"1": 1, "0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      x[10000] = 2;
    }
    assertEquals(1, x["0"][a]);
  }
}

function testPropertyValueTransfer_1028() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GETI_IMM, ESI_GET. */
  /* Failure: becomes-sparse at depth 2. */
  x = {"0": {"1": 1, "0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      x["0"][10000] = 2;
    }
    assertEquals(1, x["0"][a]);
  }
}

function testPropertyValueTransfer_1029() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GETI_IMM, ESI_GETI_IMM. */
  x = {"0": {"0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    assertEquals(1, x["0"]["0"]);
  }
}

function testPropertyValueTransfer_1030() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GETI_IMM, ESI_GETI_IMM. */
  /* Failure: non-object at depth 1. */
  function test(){
    x = {"0": {"0": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        x = null;
      }
      x["0"]["0"];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_1031() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GETI_IMM, ESI_GETI_IMM. */
  /* Failure: non-object at depth 2. */
  function test(){
    x = {"0": {"0": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        x["0"] = null;
      }
      x["0"]["0"];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_1032() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GETI_IMM, ESI_GETI_IMM. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    x = {"0": {"0": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        delete x["0"];
      }
      x["0"]["0"];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_1033() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GETI_IMM, ESI_GETI_IMM. */
  /* Failure: property-no-longer-exists at depth 3. */
  x = {"0": {"0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x["0"]["0"];
    }
    assertEquals(i === 99 ? undefined : 1, x["0"]["0"]);
  }
}

function testPropertyValueTransfer_1034() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GETI_IMM, ESI_GETI_IMM. */
  /* Failure: class-changed at depth 1. */
  x = {"0": {"0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x.c;
    }
    assertEquals(1, x["0"]["0"]);
  }
}

function testPropertyValueTransfer_1035() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GETI_IMM, ESI_GETI_IMM. */
  /* Failure: class-changed at depth 2. */
  x = {"0": {"0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x["0"].c;
    }
    assertEquals(1, x["0"]["0"]);
  }
}

function testPropertyValueTransfer_1036() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GETI_IMM, ESI_GETI_IMM. */
  /* Failure: becomes-sparse at depth 1. */
  x = {"0": {"0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      x[10000] = 2;
    }
    assertEquals(1, x["0"]["0"]);
  }
}

function testPropertyValueTransfer_1037() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GETI_IMM, ESI_GETI_IMM. */
  /* Failure: becomes-sparse at depth 2. */
  x = {"0": {"0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      x["0"][10000] = 2;
    }
    assertEquals(1, x["0"]["0"]);
  }
}

function testPropertyValueTransfer_1038() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GETI_IMM, ESI_GETN_IMM. */
  x = {"0": {"a": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    assertEquals(1, x["0"].a);
  }
}

function testPropertyValueTransfer_1039() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GETI_IMM, ESI_GETN_IMM. */
  /* Failure: non-object at depth 1. */
  function test(){
    x = {"0": {"a": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        x = null;
      }
      x["0"].a;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_1040() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GETI_IMM, ESI_GETN_IMM. */
  /* Failure: non-object at depth 2. */
  function test(){
    x = {"0": {"a": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        x["0"] = null;
      }
      x["0"].a;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_1041() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GETI_IMM, ESI_GETN_IMM. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    x = {"0": {"a": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        delete x["0"];
      }
      x["0"].a;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_1042() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GETI_IMM, ESI_GETN_IMM. */
  /* Failure: property-no-longer-exists at depth 3. */
  x = {"0": {"a": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x["0"].a;
    }
    assertEquals(i === 99 ? undefined : 1, x["0"].a);
  }
}

function testPropertyValueTransfer_1043() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GETI_IMM, ESI_GETN_IMM. */
  /* Failure: class-changed at depth 1. */
  x = {"0": {"a": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x.c;
    }
    assertEquals(1, x["0"].a);
  }
}

function testPropertyValueTransfer_1044() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GETI_IMM, ESI_GETN_IMM. */
  /* Failure: class-changed at depth 2. */
  x = {"0": {"a": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x["0"].c;
    }
    assertEquals(1, x["0"].a);
  }
}

function testPropertyValueTransfer_1045() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GETI_IMM, ESI_GETN_IMM. */
  /* Failure: becomes-sparse at depth 1. */
  x = {"0": {"a": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      x[10000] = 2;
    }
    assertEquals(1, x["0"].a);
  }
}

function testPropertyValueTransfer_1046() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GETI_IMM, ESI_PUT. */
  x = {"0": {"1": 1, "0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    x["0"][a] = 42;
    assertEquals(42, x["0"][a]);
  }
}

function testPropertyValueTransfer_1047() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GETI_IMM, ESI_PUT. */
  /* Failure: non-object at depth 1. */
  function test(){
    x = {"0": {"1": 1, "0": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x = null;
      }
      x["0"][a] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_1048() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GETI_IMM, ESI_PUT. */
  /* Failure: non-object at depth 2. */
  function test(){
    x = {"0": {"1": 1, "0": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x["0"] = null;
      }
      x["0"][a] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_1049() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GETI_IMM, ESI_PUT. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    x = {"0": {"1": 1, "0": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        delete x["0"];
      }
      x["0"][a] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_1050() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GETI_IMM, ESI_PUT. */
  /* Failure: property-no-longer-exists at depth 3. */
  x = {"0": {"1": 1, "0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x["0"][a];
    }
    x["0"][a] = 42;
    assertEquals(42, x["0"][a]);
  }
}

function testPropertyValueTransfer_1051() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GETI_IMM, ESI_PUT. */
  /* Failure: class-changed at depth 1. */
  x = {"0": {"1": 1, "0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x.c;
    }
    x["0"][a] = 42;
    assertEquals(42, x["0"][a]);
  }
}

function testPropertyValueTransfer_1052() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GETI_IMM, ESI_PUT. */
  /* Failure: class-changed at depth 2. */
  x = {"0": {"1": 1, "0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x["0"].c;
    }
    x["0"][a] = 42;
    assertEquals(42, x["0"][a]);
  }
}

function testPropertyValueTransfer_1053() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GETI_IMM, ESI_PUT. */
  /* Failure: becomes-sparse at depth 1. */
  x = {"0": {"1": 1, "0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      x[10000] = 2;
    }
    x["0"][a] = 42;
    assertEquals(42, x["0"][a]);
  }
}

function testPropertyValueTransfer_1054() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GETI_IMM, ESI_PUTI_IMM. */
  x = {"0": {"0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    x["0"]["0"] = 42;
    assertEquals(42, x["0"]["0"]);
  }
}

function testPropertyValueTransfer_1055() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GETI_IMM, ESI_PUTI_IMM. */
  /* Failure: non-object at depth 1. */
  function test(){
    x = {"0": {"0": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        x = null;
      }
      x["0"]["0"] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_1056() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GETI_IMM, ESI_PUTI_IMM. */
  /* Failure: non-object at depth 2. */
  function test(){
    x = {"0": {"0": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        x["0"] = null;
      }
      x["0"]["0"] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_1057() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GETI_IMM, ESI_PUTI_IMM. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    x = {"0": {"0": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        delete x["0"];
      }
      x["0"]["0"] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_1058() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GETI_IMM, ESI_PUTI_IMM. */
  /* Failure: property-no-longer-exists at depth 3. */
  x = {"0": {"0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x["0"]["0"];
    }
    x["0"]["0"] = 42;
    assertEquals(42, x["0"]["0"]);
  }
}

function testPropertyValueTransfer_1059() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GETI_IMM, ESI_PUTI_IMM. */
  /* Failure: class-changed at depth 1. */
  x = {"0": {"0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x.c;
    }
    x["0"]["0"] = 42;
    assertEquals(42, x["0"]["0"]);
  }
}

function testPropertyValueTransfer_1060() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GETI_IMM, ESI_PUTI_IMM. */
  /* Failure: class-changed at depth 2. */
  x = {"0": {"0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x["0"].c;
    }
    x["0"]["0"] = 42;
    assertEquals(42, x["0"]["0"]);
  }
}

function testPropertyValueTransfer_1061() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GETI_IMM, ESI_PUTI_IMM. */
  /* Failure: becomes-sparse at depth 1. */
  x = {"0": {"0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      x[10000] = 2;
    }
    x["0"]["0"] = 42;
    assertEquals(42, x["0"]["0"]);
  }
}

function testPropertyValueTransfer_1062() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GETI_IMM, ESI_PUTN_IMM. */
  x = {"0": {"a": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    x["0"].a = 42;
    assertEquals(42, x["0"].a);
  }
}

function testPropertyValueTransfer_1063() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GETI_IMM, ESI_PUTN_IMM. */
  /* Failure: non-object at depth 1. */
  function test(){
    x = {"0": {"a": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        x = null;
      }
      x["0"].a = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_1064() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GETI_IMM, ESI_PUTN_IMM. */
  /* Failure: non-object at depth 2. */
  function test(){
    x = {"0": {"a": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        x["0"] = null;
      }
      x["0"].a = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_1065() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GETI_IMM, ESI_PUTN_IMM. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    x = {"0": {"a": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        delete x["0"];
      }
      x["0"].a = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_1066() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GETI_IMM, ESI_PUTN_IMM. */
  /* Failure: property-no-longer-exists at depth 3. */
  x = {"0": {"a": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x["0"].a;
    }
    x["0"].a = 42;
    assertEquals(42, x["0"].a);
  }
}

function testPropertyValueTransfer_1067() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GETI_IMM, ESI_PUTN_IMM. */
  /* Failure: class-changed at depth 1. */
  x = {"0": {"a": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x.c;
    }
    x["0"].a = 42;
    assertEquals(42, x["0"].a);
  }
}

function testPropertyValueTransfer_1068() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GETI_IMM, ESI_PUTN_IMM. */
  /* Failure: class-changed at depth 2. */
  x = {"0": {"a": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x["0"].c;
    }
    x["0"].a = 42;
    assertEquals(42, x["0"].a);
  }
}

function testPropertyValueTransfer_1069() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GETI_IMM, ESI_PUTN_IMM. */
  /* Failure: becomes-sparse at depth 1. */
  x = {"0": {"a": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      x[10000] = 2;
    }
    x["0"].a = 42;
    assertEquals(42, x["0"].a);
  }
}

function testPropertyValueTransfer_1070() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GETN_IMM, ESI_GET. */
  x = {"a": {"1": 1, "0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    assertEquals(1, x.a[a]);
  }
}

function testPropertyValueTransfer_1071() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GETN_IMM, ESI_GET. */
  /* Failure: non-object at depth 1. */
  function test(){
    x = {"a": {"1": 1, "0": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x = null;
      }
      x.a[a];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_1072() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GETN_IMM, ESI_GET. */
  /* Failure: non-object at depth 2. */
  function test(){
    x = {"a": {"1": 1, "0": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x.a = null;
      }
      x.a[a];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_1073() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GETN_IMM, ESI_GET. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    x = {"a": {"1": 1, "0": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        delete x.a;
      }
      x.a[a];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_1074() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GETN_IMM, ESI_GET. */
  /* Failure: property-no-longer-exists at depth 3. */
  x = {"a": {"1": 1, "0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x.a[a];
    }
    assertEquals(i === 99 ? undefined : 1, x.a[a]);
  }
}

function testPropertyValueTransfer_1075() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GETN_IMM, ESI_GET. */
  /* Failure: class-changed at depth 1. */
  x = {"a": {"1": 1, "0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x.c;
    }
    assertEquals(1, x.a[a]);
  }
}

function testPropertyValueTransfer_1076() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GETN_IMM, ESI_GET. */
  /* Failure: class-changed at depth 2. */
  x = {"a": {"1": 1, "0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x.a.c;
    }
    assertEquals(1, x.a[a]);
  }
}

function testPropertyValueTransfer_1077() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GETN_IMM, ESI_GET. */
  /* Failure: becomes-sparse at depth 2. */
  x = {"a": {"1": 1, "0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      x.a[10000] = 2;
    }
    assertEquals(1, x.a[a]);
  }
}

function testPropertyValueTransfer_1078() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GETN_IMM, ESI_GETI_IMM. */
  x = {"a": {"0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    assertEquals(1, x.a["0"]);
  }
}

function testPropertyValueTransfer_1079() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GETN_IMM, ESI_GETI_IMM. */
  /* Failure: non-object at depth 1. */
  function test(){
    x = {"a": {"0": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        x = null;
      }
      x.a["0"];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_1080() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GETN_IMM, ESI_GETI_IMM. */
  /* Failure: non-object at depth 2. */
  function test(){
    x = {"a": {"0": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        x.a = null;
      }
      x.a["0"];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_1081() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GETN_IMM, ESI_GETI_IMM. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    x = {"a": {"0": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        delete x.a;
      }
      x.a["0"];
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_1082() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GETN_IMM, ESI_GETI_IMM. */
  /* Failure: property-no-longer-exists at depth 3. */
  x = {"a": {"0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x.a["0"];
    }
    assertEquals(i === 99 ? undefined : 1, x.a["0"]);
  }
}

function testPropertyValueTransfer_1083() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GETN_IMM, ESI_GETI_IMM. */
  /* Failure: class-changed at depth 1. */
  x = {"a": {"0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x.c;
    }
    assertEquals(1, x.a["0"]);
  }
}

function testPropertyValueTransfer_1084() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GETN_IMM, ESI_GETI_IMM. */
  /* Failure: class-changed at depth 2. */
  x = {"a": {"0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x.a.c;
    }
    assertEquals(1, x.a["0"]);
  }
}

function testPropertyValueTransfer_1085() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GETN_IMM, ESI_GETI_IMM. */
  /* Failure: becomes-sparse at depth 2. */
  x = {"a": {"0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      x.a[10000] = 2;
    }
    assertEquals(1, x.a["0"]);
  }
}

function testPropertyValueTransfer_1086() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GETN_IMM, ESI_GETN_IMM. */
  x = {"a": {"a": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    assertEquals(1, x.a.a);
  }
}

function testPropertyValueTransfer_1087() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GETN_IMM, ESI_GETN_IMM. */
  /* Failure: non-object at depth 1. */
  function test(){
    x = {"a": {"a": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        x = null;
      }
      x.a.a;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_1088() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GETN_IMM, ESI_GETN_IMM. */
  /* Failure: non-object at depth 2. */
  function test(){
    x = {"a": {"a": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        x.a = null;
      }
      x.a.a;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_1089() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GETN_IMM, ESI_GETN_IMM. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    x = {"a": {"a": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        delete x.a;
      }
      x.a.a;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_1090() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GETN_IMM, ESI_GETN_IMM. */
  /* Failure: property-no-longer-exists at depth 3. */
  x = {"a": {"a": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x.a.a;
    }
    assertEquals(i === 99 ? undefined : 1, x.a.a);
  }
}

function testPropertyValueTransfer_1091() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GETN_IMM, ESI_GETN_IMM. */
  /* Failure: class-changed at depth 1. */
  x = {"a": {"a": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x.c;
    }
    assertEquals(1, x.a.a);
  }
}

function testPropertyValueTransfer_1092() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GETN_IMM, ESI_GETN_IMM. */
  /* Failure: class-changed at depth 2. */
  x = {"a": {"a": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x.a.c;
    }
    assertEquals(1, x.a.a);
  }
}

function testPropertyValueTransfer_1093() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GETN_IMM, ESI_PUT. */
  x = {"a": {"1": 1, "0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    x.a[a] = 42;
    assertEquals(42, x.a[a]);
  }
}

function testPropertyValueTransfer_1094() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GETN_IMM, ESI_PUT. */
  /* Failure: non-object at depth 1. */
  function test(){
    x = {"a": {"1": 1, "0": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x = null;
      }
      x.a[a] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_1095() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GETN_IMM, ESI_PUT. */
  /* Failure: non-object at depth 2. */
  function test(){
    x = {"a": {"1": 1, "0": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        x.a = null;
      }
      x.a[a] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_1096() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GETN_IMM, ESI_PUT. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    x = {"a": {"1": 1, "0": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      var a = i % 2;
      if (i === 99) {
        delete x.a;
      }
      x.a[a] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_1097() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GETN_IMM, ESI_PUT. */
  /* Failure: property-no-longer-exists at depth 3. */
  x = {"a": {"1": 1, "0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x.a[a];
    }
    x.a[a] = 42;
    assertEquals(42, x.a[a]);
  }
}

function testPropertyValueTransfer_1098() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GETN_IMM, ESI_PUT. */
  /* Failure: class-changed at depth 1. */
  x = {"a": {"1": 1, "0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x.c;
    }
    x.a[a] = 42;
    assertEquals(42, x.a[a]);
  }
}

function testPropertyValueTransfer_1099() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GETN_IMM, ESI_PUT. */
  /* Failure: class-changed at depth 2. */
  x = {"a": {"1": 1, "0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    var a = i % 2;
    if (i === 99) {
      delete x.a.c;
    }
    x.a[a] = 42;
    assertEquals(42, x.a[a]);
  }
}

function testPropertyValueTransfer_1100() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GETN_IMM, ESI_PUTI_IMM. */
  x = {"a": {"0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    x.a["0"] = 42;
    assertEquals(42, x.a["0"]);
  }
}

function testPropertyValueTransfer_1101() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GETN_IMM, ESI_PUTI_IMM. */
  /* Failure: non-object at depth 1. */
  function test(){
    x = {"a": {"0": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        x = null;
      }
      x.a["0"] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_1102() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GETN_IMM, ESI_PUTI_IMM. */
  /* Failure: non-object at depth 2. */
  function test(){
    x = {"a": {"0": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        x.a = null;
      }
      x.a["0"] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_1103() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GETN_IMM, ESI_PUTI_IMM. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    x = {"a": {"0": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        delete x.a;
      }
      x.a["0"] = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_1104() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GETN_IMM, ESI_PUTI_IMM. */
  /* Failure: property-no-longer-exists at depth 3. */
  x = {"a": {"0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x.a["0"];
    }
    x.a["0"] = 42;
    assertEquals(42, x.a["0"]);
  }
}

function testPropertyValueTransfer_1105() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GETN_IMM, ESI_PUTI_IMM. */
  /* Failure: class-changed at depth 1. */
  x = {"a": {"0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x.c;
    }
    x.a["0"] = 42;
    assertEquals(42, x.a["0"]);
  }
}

function testPropertyValueTransfer_1106() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GETN_IMM, ESI_PUTI_IMM. */
  /* Failure: class-changed at depth 2. */
  x = {"a": {"0": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x.a.c;
    }
    x.a["0"] = 42;
    assertEquals(42, x.a["0"]);
  }
}

function testPropertyValueTransfer_1107() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GETN_IMM, ESI_PUTN_IMM. */
  x = {"a": {"a": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    x.a.a = 42;
    assertEquals(42, x.a.a);
  }
}

function testPropertyValueTransfer_1108() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GETN_IMM, ESI_PUTN_IMM. */
  /* Failure: non-object at depth 1. */
  function test(){
    x = {"a": {"a": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        x = null;
      }
      x.a.a = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_1109() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GETN_IMM, ESI_PUTN_IMM. */
  /* Failure: non-object at depth 2. */
  function test(){
    x = {"a": {"a": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        x.a = null;
      }
      x.a.a = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_1110() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GETN_IMM, ESI_PUTN_IMM. */
  /* Failure: property-no-longer-exists at depth 2. */
  function test(){
    x = {"a": {"a": 1, "c": 2}, "c": 2};
    for (var i = 0; i < 100; i++) {
      if (i === 99) {
        delete x.a;
      }
      x.a.a = 42;
    }
  }
  assertThrows(TypeError, test);
}

function testPropertyValueTransfer_1111() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GETN_IMM, ESI_PUTN_IMM. */
  /* Failure: property-no-longer-exists at depth 3. */
  x = {"a": {"a": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x.a.a;
    }
    x.a.a = 42;
    assertEquals(42, x.a.a);
  }
}

function testPropertyValueTransfer_1112() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GETN_IMM, ESI_PUTN_IMM. */
  /* Failure: class-changed at depth 1. */
  x = {"a": {"a": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x.c;
    }
    x.a.a = 42;
    assertEquals(42, x.a.a);
  }
}

function testPropertyValueTransfer_1113() {
  /* Instructions: ESI_GET_GLOBAL, ESI_GETN_IMM, ESI_PUTN_IMM. */
  /* Failure: class-changed at depth 2. */
  x = {"a": {"a": 1, "c": 2}, "c": 2};
  for (var i = 0; i < 100; i++) {
    if (i === 99) {
      delete x.a.c;
    }
    x.a.a = 42;
    assertEquals(42, x.a.a);
  }
}

function testPropertyValueTransfer_1114() {
  function test2(x, i)
  {
      if (i < 99)
        x.a.b = {};
      else
      {
        var rule = "aa";
        x.a.b = rule;
      }
  }
  function test()
  {
    var x = {"a": {}, "c": 2};
    for (var i = 0; i < 100; i++)
    {
      test2(x, i);
      assertTrue(typeof x.a.b != "string" || x.a.b == "aa");
    }
  }
  test();
}
testPropertyValueTransfer_1114.metadata = {
  bug: "CORE-40895"
};

function testPropertyValueTransfer_1115() {
    function f() {
	var c = [{ u: { p: "bb" } }, { u: "aa" } ];
    
	var d = {};
	for (var i = 0; i < c.length; i++)
	    c[i].u.p;
    }

    for (var i = 0; i < 30; i++)
	f();
}
testPropertyValueTransfer_1115.metadata = {
  bug: "CORE-41026"
};
