shouldBe("(new RegExp()).source", "''");
shouldBe("Boolean(new RegExp())", "true");
shouldBeTrue("isNaN(Number(new RegExp()))");

// RegExp constructor called as a function
shouldBe("/* unclear */ RegExp(/x/).source", "'x'");
shouldBe("RegExp(/x/, 'g').source", "'/x/'");
shouldBe("RegExp(/x/, 'g').global", "true");
shouldBe("RegExp('x').source", "'x'");

// RegExp constructor
shouldBe("new RegExp('x').source", "'x'");

shouldBe("Boolean(/a/.test)", "true");
shouldBe("/(b)c/.exec('abcd')", "'bc,b'");
shouldBe("/(b)c/.exec('abcd').length", "2");
shouldBe("/(b)c/.exec('abcd').index", "1");
shouldBe("/(b)c/.exec('abcd').input", "'abcd'");

shouldBe("var r = new RegExp(/x/); r.global=true; r.lastIndex = -1; typeof r.test('a')", "'boolean'");

shouldBe("'abcdefghi'.match(/(abc)def(ghi)/)","'abcdefghi,abc,ghi'");
shouldBe("/(abc)def(ghi)/.exec('abcdefghi')","'abcdefghi,abc,ghi'");
shouldBe("RegExp.$1","'abc'");
shouldBe("RegExp.$2","'ghi'");
shouldBe("RegExp.$3","''");

shouldBe("'abcdefghi'.match(/(a(b(c(d(e)f)g)h)i)/)", "'abcdefghi,abcdefghi,bcdefgh,cdefg,def,e'");
shouldBe("RegExp.$1","'abcdefghi'");
shouldBe("RegExp.$2","'bcdefgh'");
shouldBe("RegExp.$3","'cdefg'");
shouldBe("RegExp.$4","'def'");
shouldBe("RegExp.$5","'e'");
shouldBe("RegExp.$6","''");

shouldBe("'(100px 200px 150px 15px)'.match(/\\((\\d+)(px)* (\\d+)(px)* (\\d+)(px)* (\\d+)(px)*\\)/)","'(100px 200px 150px 15px),100,px,200,px,150,px,15,px'");
shouldBe("RegExp.$1","'100'");
shouldBe("RegExp.$3","'200'");
shouldBe("RegExp.$5","'150'");
shouldBe("RegExp.$7","'15'");
shouldBe("''.match(/\((\\d+)(px)* (\\d+)(px)* (\\d+)(px)* (\\d+)(px)*\)/)","null");
shouldBe("RegExp.$1","''");
shouldBe("RegExp.$3","''");
shouldBe("RegExp.$5","''");
shouldBe("RegExp.$7","''");

shouldBe("'test1test2'.replace('test','X')","'X1test2'");
shouldBe("'test1test2'.replace(/\\d/,'X')","'testXtest2'");
shouldBe("'1test2test3'.replace(/\\d/,'')","'test2test3'");
shouldBe("'test1test2'.replace(/test/g,'X')","'X1X2'");
shouldBe("'1test2test3'.replace(/\\d/g,'')","'testtest'");
shouldBe("'1test2test3'.replace(/x/g,'')","'1test2test3'");
shouldBe("'test1test2'.replace(/(te)(st)/g,'$2$1')","'stte1stte2'");
// shouldBe("'foo+bar'.replace(/+/g,'%2B')", "'foo%2Bbar'"); // crashed/hung in KDE 3.0
shouldBe("'foo'.replace(/z?/g,'x')", "'xfxoxox'");

shouldBe("'1test2test3blah'.split(/test/)","'1,2,3blah'");
var reg = /(\d\d )/g;
var str = new String('98 76 blah');
shouldBe("reg.exec(str)","'98 ,98 '");
shouldBe("reg.lastIndex","3");
shouldBe("RegExp.$1","'98'");
shouldBe("RegExp.$2","''");

shouldBe("reg.exec(str)","'76 ,76 '");
shouldBe("reg.lastIndex","6");
shouldBe("RegExp.$1","76");
shouldBe("RegExp.$2","''");

shouldBe("reg.exec(str)","null");
shouldBe("reg.lastIndex","0");

reg = /^u/i;
shouldBeTrue("reg.ignoreCase == true");
shouldBeTrue("reg.global === false");
shouldBeTrue("reg.multiline === false");
shouldBeTrue("reg.test('UGO')");

// regexp are writable ?
shouldBe("reg.x = 1; reg.x", "1");
// shared data ?
shouldBe("var r2 = reg; r2.x = 2; reg.x", "2");
