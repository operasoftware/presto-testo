function testToFixed_0() {
  var x = new Number(10);
  function func(y) {
    x.toFixed(y);
  }
  assertThrows(RangeError(), func, 21);
}

function testToFixed_1() {
  var x = new Number(10);
  function func(y) {
    x.toFixed(y);
  }
  assertThrows(RangeError(), func, -1);
}

function testToExponential_0() {
  var x = new Number(10);
  function func(y) {
    x.toExponential(y);
  }
  assertThrows(RangeError(), func, 21);
}

function testToExponential_1() {
  var x = new Number(10);
  function func(y) {
    x.toExponential(y);
  }
  assertThrows(RangeError(), func, -1);
}

function testToPrecision_0() {
  var x = new Number(10);
  function func(y) {
    x.toPrecision(y);
  }
  assertThrows(RangeError(), func, 22);
}

function testToPrecision_1() {
  var x = new Number(10);
  function func(y) {
    x.toPrecision(y);
  }
  assertThrows(RangeError(), func, 0);
}