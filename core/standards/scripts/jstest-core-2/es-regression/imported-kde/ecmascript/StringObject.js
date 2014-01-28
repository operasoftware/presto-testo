// String object
shouldBe("'abc'.length", "3");
shouldBe("(new String('abcd')).length", "4");
shouldBe("String('abcde').length", "5");

// String.prototype.indexOf()
shouldBe("'ab'.indexOf('a')", "0");
shouldBe("'ab'.indexOf('b')", "1");
shouldBe("'ab'.indexOf('x')", "-1");
shouldBe("'ab'.indexOf('')", "0");
shouldBe("''.indexOf('')", "0");
shouldBe("'ab'.indexOf('a', -1)", "0");
shouldBe("'ab'.indexOf('b', 1)", "1");
shouldBe("'ab'.indexOf('a', 1)", "-1");
shouldBe("'  '.indexOf('', 1)", "1");

// String.prototype.search()
shouldBe("String('abc').search(/b/)", "1");
shouldBe("String('xyz').search(/b/)", "-1");

// String.prototype.match()
shouldBe("String('abcb').match(/b/)", "'b'");
shouldBe("typeof String('abc').match(/b/)", "'object'");
shouldBe("'xyz'.match(/b/)", "null");
shouldBe("'xyz'.match(/b/g)", "''"); // others disagree and return null
shouldBe("'aabab'.match(/ab/g)", "'ab,ab'");
shouldBe("'aabab'.match(/(a)(b)/)","'ab,a,b'");
shouldBe("'aabab'.match(/(a)(b)/g)","'ab,ab'");
shouldBe("'abc'.match(/./g)","'a,b,c'");
shouldBe("'abc'.match(/.*/g)","'abc,'");
 // correct ? always 0 in NS 4.7
shouldBe("var reg = /ab/g; 'aabab'.match(reg); reg.lastIndex", "3");
shouldBe("var reg = /ab/g; 'xxx'.match(reg); reg.lastIndex", "0");


// String.prototype.replace()
shouldBe("'abcd'.replace(/b./, 'xy')", "'axyd'");
shouldBe("'abcd'.replace('bc', 'x')", "'axd'");
shouldBe("'abcd'.replace('x', 'y')", "'abcd'");

// String.prototype.split()
shouldBe("'axb'.split('x').length", "2");
shouldBe("'axb'.split('x')[0]", "'a'");
shouldBe("'axb'.split('x')[1]", "'b'");
shouldBe("'abc'.split('')", "'a,b,c'");
shouldBe("'abc'.split(new RegExp())", "'a,b,c'");
shouldBe("''.split('').length", "0");
shouldBe("'axb'.split('x', 0).length", "0");
shouldBe("'axb'.split('x', 0)[0]", "undefined");
shouldBe("'axb'.split('x', 1).length", "1");
shouldBe("'axb'.split('x', 99).length", "2");
shouldBe("'axb'.split('y')", "'axb'");
shouldBe("'axb'.split('y').length", "1");
shouldBe("''.split('x')", "''");
shouldBe("'abc'.split()", "'abc'");
shouldBe("'axxb'.split(/x/)", "'a,,b'");
shouldBe("'axxb'.split(/x+/)", "'a,b'");
shouldBe("'axxb'.split(/x*/)", "'a,b'");  // NS 4.7 is wrong here
shouldBe("''.split(/.*/).length", "0");

shouldBe("'abC1'.toUpperCase()", "'ABC1'");
shouldBe("'AbC2'.toLowerCase()", "'abc2'");
