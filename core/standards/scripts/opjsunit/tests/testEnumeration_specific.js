function testIndexArray_0() {
  var a = new Array(5);
  a[3] = 2;
  a[1] = 1;
  a[5] = 3;
  var res = [];
  for (p in a) {
    res.push(a[p]);
  }
  assertArrayEquals([1,2,3], res);
}

function testIndexArray_1() {
  var a = new Array(5);
  a[3] = 2;
  a[1] = 1;
  a[5] = 3;
  delete a[3];
  var res = [];
  for (p in a) {
    res.push(a[p]);
  }
  assertArrayEquals([1,3], res);
}

function testIndexArray_2() {
  var a = new Array(0xFFFFFFFF);
  a[0x88888888] = 2;
  a[1] = 1;
  a[0xFFFFFFFF-1] = 3;
  var res = [];
  for (p in a) {
    res.push(a[p]);
  }
  assertArrayEquals([1,2,3], res);
}

function testIndexArray_3() {
  var a = new Array(5);
  a[3] = 2;
  a[1] = 1;
  a[5] = 3;
  a.foo = 4;
  var res = [];
  for (p in a) {
    res.push(a[p]);
  }
  assertArrayEquals([1,2,3,4], res);
}

function testIndexArray_4() {
  var a = new Array(5);
  a[3] = 2;
  a[1] = 1;
  a[5] = 3;
  a.foo = 4;
  a.bar = 5;
  a.baz = 6;
  delete a.bar;
  var res = [];
  for (p in a) {
    res.push(a[p]);
  }
  assertArrayEquals([1,2,3,4,6], res);
}

function testIndexArray_5() {
  var a = new Array(5);
  a.foo = 4;
  a[3] = 2;
  a.bar = 5;
  a[1] = 1;
  a.baz = 6;
  a[5] = 3;
  var res = [];
  for (p in a) {
    res.push(a[p]);
  }
  assertArrayEquals([1,2,3,4,5,6], res);
}

function testIndexArray_6() {
  var a = new Array(0xFFFFFFFF);
  a[0x88888888] = 2;
  a[1] = 1;
  a[0xFFFFFFFF-1] = 3;
  a.foo = 4;
  a.bar = 5;
  a.baz = 6;
  var res = [];
  for (p in a) {
    res.push(a[p]);
  }
  assertArrayEquals([1,2,3,4,5,6], res);
}

function testIndexArray_7() {
  var a = new Array(0xFFFFFFFF);
  a[0x88888888] = 2;
  a[1] = 1;
  a[0xFFFFFFFF-1] = 3;
  a.foo = 4;
  a.bar = 5;
  a.baz = 6;
  delete a.bar;
  var res = [];
  for (p in a) {
    res.push(a[p]);
  }
  assertArrayEquals([1,2,3,4,6], res);
}

function testIndexArray_8() {
  var a = new Array(5);
  a[0xFFFFFFFF+2] = 2;
  a[0xFFFFFFFF+1] = 3;
  a[0xFFFFFFFF] = 4;
  a[1] = 1;
  a.bar = 5;
  delete a.bar;
  var res = [];
  for (p in a) {
    res.push(a[p]);
  }
  assertArrayEquals([1,2,3,4], res);
}

function testIndexObject_0() {
  var a = {};
  a[3] = 2;
  a[1] = 1;
  a[5] = 3;
  var res = [];
  for (p in a) {
    res.push(a[p]);
  }
  assertArrayEquals([1,2,3], res);
}

function testIndexObject_1() {
  var a = {3:2,
	   1:1,
	   5:3};
  var res = [];
  for (p in a) {
    res.push(a[p]);
  }
  assertArrayEquals([1,2,3], res);
}

function testIndexObject_2() {
  var a = {3:2,
	   1:1,
	   5:3};
  a[4] = 4;
  var res = [];
  for (p in a) {
    res.push(a[p]);
  }
  assertArrayEquals([1,2,4,3], res);
}

function testIndexObject_3() {
  var a = {3:2,
	   1:1,
	   5:3};
  a[4] = 4;
  delete a[3];
  var res = [];
  for (p in a) {
    res.push(a[p]);
  }
  assertArrayEquals([1,4,3], res);
}

function testIndexObject_4() {
  var a = {3:2,
	   1:1,
	   5:3};
  a[4] = 4;
  a.foo = 5;
  a.bar = 6;
  var res = [];
  for (p in a) {
    res.push(a[p]);
  }
  assertArrayEquals([1,2,4,3,5,6], res);
}

function testIndexObject_5() {
  var a = {3:2,
	   1:1,
	   5:3};
  a[4] = 4;
  a.foo = 5;
  a.bar = 6;
  delete a.foo;
  var res = [];
  for (p in a) {
    res.push(a[p]);
  }
  assertArrayEquals([1,2,4,3,6], res);
}

function testIndexObject_6() {
  var a = {3:2,
	   1:1,
	   5:3};
  a[4] = 4;
  a.foo = 5;
  a.bar = 6;
  delete a[3];
  delete a.foo;
  var res = [];
  for (p in a) {
    res.push(a[p]);
  }
  assertArrayEquals([1,4,3,6], res);
}

function testEnumFunctionConstructorPrototype_0(){ // per ES5 (ES3 differs)
  var ar=[];
  for( var property in Function ) ar.push(property);
  assertArrayEquals(ar, []);
}
testEnumFunctionConstructorPrototype_0.metadata = {
  bug:"CORE-36409"
};

function testEnumFunctionExpressionPrototype_0(){ // Perhaps not standardised?
  var ar=[];
  for( var property in function(){} ) ar.push(property);
  assertArrayEquals(ar, []);
}
testEnumFunctionExpressionPrototype_0.metadata = {
  bug:"CORE-36409"
};
