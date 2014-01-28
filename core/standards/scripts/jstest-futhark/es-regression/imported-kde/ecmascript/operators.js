// operator !
shouldBeTrue("!undefined");
shouldBeTrue("!null");
shouldBeTrue("!!true");
shouldBeTrue("!false");
shouldBeTrue("!!1");
shouldBeTrue("!0");
shouldBeTrue("!!'a'");
shouldBeTrue("!''");

// bitwise operators
shouldBe("~0", "-1");
shouldBe("~1", "-2");
shouldBe("~null", "-1");
shouldBe("3 & 1", "1");
shouldBe("2 | true", "3");
shouldBe("'3' ^ 1", "2");

shouldBe("1 << 2", "4");
shouldBe("8 >> 1", "4");
shouldBe("1 >> 2", "0");
shouldBe("-8 >> 24", "-1");
shouldBe("8 >>> 2", "2");
shouldBe("-8 >>> 24", "255");

// addition
shouldBe("1+2", "3");
shouldBe("'a'+'b'", "'ab'");
shouldBe("'a'+2", "'a2'");
shouldBe("'2'+'-1'", "'2-1'");
shouldBe("true+'a'", "'truea'");

// substraction
shouldBe("1-3", "-2");
shouldBe("isNaN('a'-3)", "true");
shouldBe("'3'-'-1'", "4");
shouldBe("'4'-2", "2");
shouldBe("true-false", "1");

// multiplication
shouldBe("2 * 3", "6");
shouldBe("true * 3", "3");
shouldBe("2 * '3'", "6");

// division
shouldBe("6 / 4", "1.5");
//shouldBe("true / false", "Inf");
shouldBe("'6' / '2'", "3");
shouldBeTrue("isNaN('x' / 1)");
shouldBeTrue("isNaN(1 / NaN)");
shouldBeTrue("isNaN(Infinity / Infinity)");
shouldBe("Infinity / 0", "Infinity");
shouldBe("-Infinity / 0", "-Infinity");
shouldBe("Infinity / 1", "Infinity");
shouldBe("-Infinity / 1", "-Infinity");
shouldBeTrue("1 / Infinity == +0");
shouldBeTrue("1 / -Infinity == -0"); // how to check ?
shouldBeTrue("isNaN(0/0)");
shouldBeTrue("0 / 1 === 0");
shouldBeTrue("0 / -1 === -0"); // how to check ?
shouldBe("1 / 0", "Infinity");
shouldBe("-1 / 0", "-Infinity");

// modulo
shouldBe("6 % 4", "2");
shouldBe("'-6' % 4", "-2");

shouldBe("2==2", "true");
shouldBe("1==2", "false");

shouldBe("1<2", "true");
shouldBe("1<=2", "true");
shouldBe("2<1", "false");
shouldBe("2<=1", "false");

shouldBe("2>1", "true");
shouldBe("2>=1", "true");
shouldBe("1>=2", "false");
shouldBe("1>2", "false");

shouldBe("'abc' == 'abc'", "true");
shouldBe("'abc' != 'xyz'", "true");

shouldBe("'abc' < 'abx'", "true");
shouldBe("'abc' < 'abcd'", "true");
shouldBe("'abc' < 'abc'", "false");
shouldBe("'abcd' < 'abcd'", "false");
shouldBe("'abx' < 'abc'", "false");

shouldBe("'abc' <= 'abc'", "true");
shouldBe("'abc' <= 'abx'", "true");
shouldBe("'abx' <= 'abc'", "false");
shouldBe("'abcd' <= 'abc'", "false");
shouldBe("'abc' <= 'abcd'", "true");

shouldBe("'abc' > 'abx'", "false");
shouldBe("'abc' > 'abc'", "false");
shouldBe("'abcd' > 'abc'", "true");
shouldBe("'abx' > 'abc'", "true");
shouldBe("'abc' > 'abcd'", "false");

shouldBe("'abc' >= 'abc'", "true");
shouldBe("'abcd' >= 'abc'", "true");
shouldBe("'abx' >= 'abc'", "true");
shouldBe("'abc' >= 'abx'", "false");
shouldBe("'abc' >= 'abx'", "false");
shouldBe("'abc' >= 'abcd'", "false");

// mixed strings and numbers - results validated in NS+moz+IE5
shouldBe("'abc' <= 0", false); // #35246
shouldBe("'' <= 0", true);
shouldBe("' ' <= 0", true);
shouldBe("null <= 0", true);
shouldBe("0 <= 'abc'", false);
shouldBe("0 <= ''", true);
shouldBe("0 <= null", true);
shouldBe("null <= null", true);
shouldBe("6 < '52'",true);
shouldBe("6 < '72'",true); // #36087
shouldBe("NaN < 0", "false");
shouldBe("NaN <= 0", "false");
shouldBe("NaN > 0", "false");
shouldBe("NaN >= 0", "false");

// strict comparison ===
shouldBe("0 === false", "false");
//shouldBe("undefined === undefined", "true"); // aborts in IE5 (undefined is not defined ;)
shouldBe("null === null", "true");
shouldBe("NaN === NaN", "false");
shouldBe("0.0 === 0", "true");
shouldBe("'abc' === 'abc'", "true");
shouldBe("'a' === 'x'", "false");
shouldBe("true === true", "true");
shouldBe("false === false", "true");
shouldBe("true === false", "false");
shouldBe("Math === Math", "true");
shouldBe("Math === Boolean", "false");
shouldBe("Infinity === Infinity", "true");

// !==
shouldBe("0 !== 0", "false");
shouldBe("0 !== 1", "true");

shouldBe("typeof undefined", "'undefined'");
shouldBe("typeof null", "'object'");
shouldBe("typeof true", "'boolean'");
shouldBe("typeof false", "'boolean'");
shouldBe("typeof 1", "'number'");
shouldBe("typeof 'a'", "'string'");
shouldBe("typeof shouldBe", "'function'");
shouldBe("typeof Number.NaN", "'number'");

shouldBe("11 && 22", "22");
shouldBe("null && true", "null");
shouldBe("11 || 22", "11");
shouldBe("null || 'a'", "'a'");

shouldBeUndefined("void 1");

// instanceof
// Those 2 lines don't parse in Netscape...
shouldBe("(new Boolean()) instanceof Boolean", "true");
shouldBe("(new Boolean()) instanceof Number", "false");

