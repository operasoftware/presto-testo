// 15.4 Array Objects
// (c) 2001 Harri Porten <porten@kde.org>

shouldBe("Array().length", "0");
shouldBe("(new Array()).length", "0");
shouldBe("(new Array(3)).length", "3");
shouldBe("(new Array(11, 22)).length", "2");
shouldBe("(new Array(11, 22))[0]", "11");
shouldBe("Array(11, 22)[1]", "22");
shouldBeUndefined("(new Array(11, 22))[3]");
shouldBe("new Array(11, 22)", "'11,22'");
shouldBe("var a = []; a[0] = 33; a[0]", "33");
shouldBe("var a = []; a[0] = 33; a.length", "1");
shouldBe("var a = [11, 22]; a.length = 1; a;", "'11'");
shouldBeUndefined("var a = [11, 22]; a.length = 1; a[1];");
shouldBe("Array().toString()", "''");
shouldBe("Array(3).toString()", "',,'");
shouldBe("Array(11, 22).toString()", "'11,22'");
shouldBe("Array(11, 22).concat(33)", "'11,22,33'");
shouldBe("Array(2).concat(33, 44)", "',,33,44'");
shouldBe("Array(2).concat(Array(2))", "',,,'");
shouldBe("Array(11,22).concat(Array(33,44))", "'11,22,33,44'");
shouldBe("Array(1,2).concat(3,Array(4,5))", "'1,2,3,4,5'");
shouldBe("var a = new Array(1,2,3); delete a[1]; a.concat(4)", "'1,,3,4'");

// 2nd set.
shouldBe("(new Array('a')).length", "1");
shouldBe("(new Array('a'))[0]", "'a'");
shouldBeUndefined("(new Array('a'))[1]");

shouldBe("Array('a').length", "1");
shouldBe("Array('a')[0]", "'a'");

shouldBe("Array()", "''");
shouldBe("Array('a','b')", "'a,b'");

shouldBe("[].length", "0");
shouldBe("['a'].length", "1");
shouldBe("['a'][0]", "'a'");
shouldBe("['a',,'c'][2]", "'c'");

function forInSum(_a) {
  var s = '';
  for (i in _a)
    s += _a[i];
  return s;
}

shouldBe("forInSum([])", "''");
shouldBe("forInSum(Array())", "''");
shouldBe("forInSum(Array('a'))", "'a'");

var a0 = [];
shouldBe("forInSum(a0)", "''");

var a1 = [ 'a' ];
shouldBe("forInSum(a1)", "'a'");

shouldBe("[3,1,'2'].sort()", "'1,2,3'");
shouldBe("[,'x','aa'].sort()", "'aa,x,'"); // don't assume 'x'>undefined !
