/*
 * HostObject defines 5 host object properties:
 *
 *   alpha - r/w, define getter/setters, override on native object.
 *   beta  - r/o, define getter/setters, override on native object.
 *   gamma - r/w, no getter/setters, override on native object.
 *   delta - r/w, getter/setters, no override on native object.
 *   zeta  - r/w, no getter/setters, no override on native object.
 */

function testConstructor_0() {
  assertEquals("alpha", HostObject().alpha);
}

function testConstructor_1() {
  assertEquals("beta", (new HostObject()).beta);
}

function testReadOnly_0() {
  var obj = new HostObject();
  assertReadOnly(obj, "beta");
};

function testReadOnly_1() {
  var obj = new HostObject();
  assertEquals('beta', obj.beta);
};

function testReadOnly_2() {
  var obj = new HostObject();
  obj.__defineGetter__('beta', function() { return 'beta-getter' });
  assertEquals('beta-getter', obj.beta);
};

function testReadOnly_3() {
  var obj = new HostObject();
  obj.__defineGetter__('beta', function() { return obj._beta; });
  obj.__defineSetter__('beta', function(v) { obj._beta = v; return v; });
  obj.beta = '4';
  assertEquals('4', obj.beta);
};

function testNoGetterSetter_0() {
  var obj = new HostObject();
  try {
    obj.__defineGetter__('gamma', function() { return 'gamma-getter'; });
    assertEquals('gamma', obj.gamma);
  } catch(e) {
    assertTrue(true);
  }
};

function testNoGetterSetter_1() {
  var obj = new HostObject();
  try {
    obj.__defineSetter__('gamma', function(_v) { return 'g'; });
    obj.gamma = '3';
    assertEquals('gamma', obj.gamma);
  } catch(e) {
    assertTrue(true);
  }
};
