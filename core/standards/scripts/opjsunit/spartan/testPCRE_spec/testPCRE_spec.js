//opjsunit: run_tests_individually

function testRegexpPCRE_0() {
  var regexp = /abc/i;
  assertEquals("abc", regexp.exec("abc").toString()); //test 0
}

function testRegexpPCRE_1() {
  var regexp = /abc/i;
  assertEquals("abc", regexp.exec("defabc").toString()); //test 1
}

function testRegexpPCRE_2() {
  var regexp = /abc/i;
  assertEquals("abc", regexp.exec("Aabc").toString()); //test 2
}

function testRegexpPCRE_3() {
  var regexp = /abc/i;
  assertEquals(null, regexp.exec("*** Failers")); //test 3
}

function testRegexpPCRE_4() {
  var regexp = /abc/i;
  assertEquals("abc", regexp.exec("Adefabc").toString()); //test 4
}

function testRegexpPCRE_5() {
  var regexp = /abc/i;
  assertEquals("ABC", regexp.exec("ABC").toString()); //test 5
}

function testRegexpPCRE_6() {
  var regexp = /^abc/i;
  assertEquals("abc", regexp.exec("abc").toString()); //test 6
}

function testRegexpPCRE_7() {
  var regexp = /^abc/i;
  assertEquals(null, regexp.exec("Aabc")); //test 7
}

function testRegexpPCRE_8() {
  var regexp = /^abc/i;
  assertEquals(null, regexp.exec("*** Failers")); //test 8
}

function testRegexpPCRE_9() {
  var regexp = /^abc/i;
  assertEquals(null, regexp.exec("defabc")); //test 9
}

function testRegexpPCRE_10() {
  var regexp = /^abc/i;
  assertEquals(null, regexp.exec("Adefabc")); //test 10
}

function testRegexpPCRE_11() {
  var regexp = /^abc$/i;
  assertEquals("abc", regexp.exec("abc").toString()); //test 11
}

function testRegexpPCRE_12() {
  var regexp = /^abc$/i;
  assertEquals(null, regexp.exec("*** Failers")); //test 12
}

function testRegexpPCRE_13() {
  var regexp = /^abc$/i;
  assertEquals(null, regexp.exec("def\nabc")); //test 13
}

function testRegexpPCRE_14() {
  assertThrows(SyntaxError, eval, "var re = /x{5,4}/;"); //test 14
}


function testRegexpPCRE_15() {
  assertThrows(SyntaxError, eval, "var re = /[abcd/;"); //test 15
}


function testRegexpPCRE_16() {
  assertThrows(SyntaxError, eval, "var re = /[z-a]/;"); //test 16
}


function testRegexpPCRE_17() {
  assertThrows(SyntaxError, eval, "var re = /^*/;"); //test 17
}


function testRegexpPCRE_18() {
  assertThrows(SyntaxError, eval, "var re = /(abc/;"); //test 18
}


function testRegexpPCRE_19() {
  assertThrows(SyntaxError, eval, "var re = /(?# abc/;"); //test 19
}


function testRegexpPCRE_20() {
  var regexp = /cat|dog|elephant/i;
  assertEquals("cat", regexp.exec("this sentence eventually mentions a cat").toString()); //test 20
}

function testRegexpPCRE_21() {
  var regexp = /cat|dog|elephant/i;
  assertEquals("elephant", regexp.exec("this sentences rambles on and on for a while and then reaches elephant").toString()); //test 21
}

function testRegexpPCRE_22() {
  var regexp = /cat|dog|elephant/i;
  assertEquals("cat", regexp.exec("this sentence eventually mentions a cat").toString()); //test 22
}

function testRegexpPCRE_23() {
  var regexp = /cat|dog|elephant/i;
  assertEquals("elephant", regexp.exec("this sentences rambles on and on for a while and then reaches elephant").toString()); //test 23
}

function testRegexpPCRE_24() {
  var regexp = /cat|dog|elephant/i;
  assertEquals("CAT", regexp.exec("this sentence eventually mentions a CAT cat").toString()); //test 24
}

function testRegexpPCRE_25() {
  var regexp = /cat|dog|elephant/i;
  assertEquals("elephant", regexp.exec("this sentences rambles on and on for a while to elephant ElePhant").toString()); //test 25
}

function testRegexpPCRE_26() {
  assertThrows(SyntaxError, eval, "var re = /{4,5}abc/;"); //test 26
}


function testRegexpPCRE_27() {
  var regexp = /(a)(b)(c)\2/i;
  assertEquals("abcb,a,b,c", regexp.exec("abcb").toString()); //test 27
}

function testRegexpPCRE_28() {
  var regexp = /(a)(b)(c)\2/i;
  assertEquals("abcb,a,b,c", regexp.exec("O0abcb").toString()); //test 28
}

function testRegexpPCRE_29() {
  var regexp = /(a)(b)(c)\2/i;
  assertEquals("abcb,a,b,c", regexp.exec("O3abcb").toString()); //test 29
}

function testRegexpPCRE_30() {
  var regexp = /(a)(b)(c)\2/i;
  assertEquals("abcb,a,b,c", regexp.exec("O6abcb").toString()); //test 30
}

function testRegexpPCRE_31() {
  var regexp = /(a)(b)(c)\2/i;
  assertEquals("abcb,a,b,c", regexp.exec("O9abcb").toString()); //test 31
}

function testRegexpPCRE_32() {
  var regexp = /(a)(b)(c)\2/i;
  assertEquals("abcb,a,b,c", regexp.exec("O12abcb").toString()); //test 32
}

function testRegexpPCRE_33() {
  var regexp = /(a)bc|(a)(b)\2/i;
  assertEquals("abc,a,,", regexp.exec("abc").toString()); //test 33
}

function testRegexpPCRE_34() {
  var regexp = /(a)bc|(a)(b)\2/i;
  assertEquals("abc,a,,", regexp.exec("O0abc").toString()); //test 34
}

function testRegexpPCRE_35() {
  var regexp = /(a)bc|(a)(b)\2/i;
  assertEquals("abc,a,,", regexp.exec("O3abc").toString()); //test 35
}

function testRegexpPCRE_36() {
  var regexp = /(a)bc|(a)(b)\2/i;
  assertEquals("abc,a,,", regexp.exec("O6abc").toString()); //test 36
}

function testRegexpPCRE_37() {
  var regexp = /(a)bc|(a)(b)\2/i;
  assertEquals("aba,,a,b", regexp.exec("aba").toString()); //test 37
}

function testRegexpPCRE_38() {
  var regexp = /(a)bc|(a)(b)\2/i;
  assertEquals("aba,,a,b", regexp.exec("O0aba").toString()); //test 38
}

function testRegexpPCRE_39() {
  var regexp = /(a)bc|(a)(b)\2/i;
  assertEquals("aba,,a,b", regexp.exec("O3aba").toString()); //test 39
}

function testRegexpPCRE_40() {
  var regexp = /(a)bc|(a)(b)\2/i;
  assertEquals("aba,,a,b", regexp.exec("O6aba").toString()); //test 40
}

function testRegexpPCRE_41() {
  var regexp = /(a)bc|(a)(b)\2/i;
  assertEquals("aba,,a,b", regexp.exec("O9aba").toString()); //test 41
}

function testRegexpPCRE_42() {
  var regexp = /(a)bc|(a)(b)\2/i;
  assertEquals("aba,,a,b", regexp.exec("O12aba").toString()); //test 42
}

function testRegexpPCRE_43() {
  var regexp = /abc$/i;
  assertEquals("abc", regexp.exec("abc").toString()); //test 43
}

function testRegexpPCRE_44() {
  var regexp = /abc$/i;
  assertEquals(null, regexp.exec("*** Failers")); //test 44
}

function testRegexpPCRE_45() {
  var regexp = /abc$/i;
  assertEquals(null, regexp.exec("abc\n")); //test 45
}

function testRegexpPCRE_46() {
  var regexp = /abc$/i;
  assertEquals(null, regexp.exec("abc\ndef")); //test 46
}

function testRegexpPCRE_47() {
  var regexp = /the quick brown fox/i;
  assertEquals("the quick brown fox", regexp.exec("the quick brown fox").toString()); //test 47
}

function testRegexpPCRE_48() {
  var regexp = /the quick brown fox/i;
  assertEquals("the quick brown fox", regexp.exec("this is a line with the quick brown fox").toString()); //test 48
}

function testRegexpPCRE_49() {
  var regexp = /^abc|def/i;
  assertEquals("abc", regexp.exec("abcdef").toString()); //test 49
}

function testRegexpPCRE_50() {
  var regexp = /^abc|def/i;
  assertEquals("abc", regexp.exec("abcdefB").toString()); //test 50
}

function testRegexpPCRE_51() {
  var regexp = /.*((abc)$|(def))/i;
  assertEquals("defabc,abc,abc,", regexp.exec("defabc").toString()); //test 51
}

function testRegexpPCRE_52() {
  var regexp = /.*((abc)$|(def))/i;
  assertEquals("Zdefabc,abc,abc,", regexp.exec("Zdefabc").toString()); //test 52
}

function testRegexpPCRE_53() {
  var regexp = /abc/i;
  assertEquals("abc", regexp.exec("abc").toString()); //test 53
}

function testRegexpPCRE_54() {
  var regexp = /abc/i;
  assertEquals(null, regexp.exec("*** Failers")); //test 54
}

function testRegexpPCRE_55() {
  var regexp = /^abc|def/i;
  assertEquals("abc", regexp.exec("abcdef").toString()); //test 55
}

function testRegexpPCRE_56() {
  var regexp = /^abc|def/i;
  assertEquals("abc", regexp.exec("abcdefB").toString()); //test 56
}

function testRegexpPCRE_57() {
  var regexp = /.*((abc)$|(def))/i;
  assertEquals("defabc,abc,abc,", regexp.exec("defabc").toString()); //test 57
}

function testRegexpPCRE_58() {
  var regexp = /.*((abc)$|(def))/i;
  assertEquals("Zdefabc,abc,abc,", regexp.exec("Zdefabc").toString()); //test 58
}

function testRegexpPCRE_59() {
  var regexp = /the quick brown fox/i;
  assertEquals("the quick brown fox", regexp.exec("the quick brown fox").toString()); //test 59
}

function testRegexpPCRE_60() {
  var regexp = /the quick brown fox/i;
  assertEquals(null, regexp.exec("*** Failers")); //test 60
}

function testRegexpPCRE_61() {
  var regexp = /the quick brown fox/i;
  assertEquals("The Quick Brown Fox", regexp.exec("The Quick Brown Fox").toString()); //test 61
}

function testRegexpPCRE_62() {
  var regexp = /the quick brown fox/i;
  assertEquals("the quick brown fox", regexp.exec("the quick brown fox").toString()); //test 62
}

function testRegexpPCRE_63() {
  var regexp = /the quick brown fox/i;
  assertEquals("The Quick Brown Fox", regexp.exec("The Quick Brown Fox").toString()); //test 63
}

function testRegexpPCRE_64() {
  var regexp = /abc.def/i;
  assertEquals(null, regexp.exec("*** Failers")); //test 64
}

function testRegexpPCRE_65() {
  var regexp = /abc.def/i;
  assertEquals(null, regexp.exec("abc\ndef")); //test 65
}

function testRegexpPCRE_66() {
  var regexp = /abc$/i;
  assertEquals("abc", regexp.exec("abc").toString()); //test 66
}

function testRegexpPCRE_67() {
  var regexp = /abc$/i;
  assertEquals(null, regexp.exec("abc\n")); //test 67
}

function testRegexpPCRE_68() {
  var regexp = /(abc\1)/i;
  assertEquals("abc,abc", regexp.exec("abc").toString()); //test 68
}

function testRegexpPCRE_69() {
  assertThrows(SyntaxError, eval, "var re = /)/;"); //test 69
}


function testRegexpPCRE_70() {
  var regexp = /[^aeiou ]{3,}/i;
  assertEquals("-pr", regexp.exec("co-processors, and for").toString()); //test 70
}

function testRegexpPCRE_71() {
  var regexp = /<.*>/i;
  assertEquals("<def>ghi<klm>", regexp.exec("abc<def>ghi<klm>nop").toString()); //test 71
}

function testRegexpPCRE_72() {
  var regexp = /<.*?>/i;
  assertEquals("<def>", regexp.exec("abc<def>ghi<klm>nop").toString()); //test 72
}

function testRegexpPCRE_73() {
  var regexp = /<.*?>/i;
  assertEquals("<def>", regexp.exec("abc<def>ghi<klm>nop").toString()); //test 73
}

function testRegexpPCRE_74() {
  var regexp = /<.*?>/i;
  assertEquals(null, regexp.exec("abc========def")); //test 74
}

function testRegexpPCRE_75() {
  var regexp = /<.*?>/i;
  assertEquals(null, regexp.exec("foo")); //test 75
}

function testRegexpPCRE_76() {
  var regexp = /<.*?>/i;
  assertEquals(null, regexp.exec("catfoo")); //test 76
}

function testRegexpPCRE_77() {
  var regexp = /<.*?>/i;
  assertEquals(null, regexp.exec("*** Failers")); //test 77
}

function testRegexpPCRE_78() {
  var regexp = /<.*?>/i;
  assertEquals(null, regexp.exec("the barfoo")); //test 78
}

function testRegexpPCRE_79() {
  var regexp = /<.*?>/i;
  assertEquals(null, regexp.exec("and cattlefoo")); //test 79
}

function testRegexpPCRE_80() {
  var regexp = /a$/i;
  assertEquals("a", regexp.exec("a").toString()); //test 80
}

function testRegexpPCRE_81() {
  var regexp = /a$/i;
  assertEquals(null, regexp.exec("a\n")); //test 81
}

function testRegexpPCRE_82() {
  var regexp = /a$/i;
  assertEquals(null, regexp.exec("*** Failers")); //test 82
}

function testRegexpPCRE_83() {
  var regexp = /a$/i;
  assertEquals("a", regexp.exec("Za").toString()); //test 83
}

function testRegexpPCRE_84() {
  var regexp = /a$/i;
  assertEquals(null, regexp.exec("Za\n")); //test 84
}

function testRegexpPCRE_85() {
  var regexp = /a$/im;
  assertEquals("a", regexp.exec("a").toString()); //test 85
}

function testRegexpPCRE_86() {
  var regexp = /a$/im;
  assertEquals("a", regexp.exec("a\n").toString()); //test 86
}

function testRegexpPCRE_87() {
  var regexp = /a$/im;
  assertEquals("a", regexp.exec("Za\n").toString()); //test 87
}

function testRegexpPCRE_88() {
  var regexp = /a$/im;
  assertEquals(null, regexp.exec("*** Failers")); //test 88
}

function testRegexpPCRE_89() {
  var regexp = /a$/im;
  assertEquals("a", regexp.exec("Za").toString()); //test 89
}

function testRegexpPCRE_90() {
  var regexp = /(?!alphabet)[ab]/i;
  assertEquals("b", regexp.exec("foo\nbarbar").toString()); //test 90
}

function testRegexpPCRE_91() {
  var regexp = /(?!alphabet)[ab]/i;
  assertEquals("a", regexp.exec("***Failers").toString()); //test 91
}

function testRegexpPCRE_92() {
  var regexp = /(?!alphabet)[ab]/i;
  assertEquals("b", regexp.exec("rhubarb").toString()); //test 92
}

function testRegexpPCRE_93() {
  var regexp = /(?!alphabet)[ab]/i;
  assertEquals("b", regexp.exec("barbell").toString()); //test 93
}

function testRegexpPCRE_94() {
  var regexp = /(?!alphabet)[ab]/i;
  assertEquals("a", regexp.exec("abc\nbarton").toString()); //test 94
}

function testRegexpPCRE_95() {
  var regexp = /(?!alphabet)[ab]/i;
  assertEquals("b", regexp.exec("foo\nbarbar").toString()); //test 95
}

function testRegexpPCRE_96() {
  var regexp = /(?!alphabet)[ab]/i;
  assertEquals("a", regexp.exec("***Failers").toString()); //test 96
}

function testRegexpPCRE_97() {
  var regexp = /(?!alphabet)[ab]/i;
  assertEquals("b", regexp.exec("rhubarb").toString()); //test 97
}

function testRegexpPCRE_98() {
  var regexp = /(?!alphabet)[ab]/i;
  assertEquals("b", regexp.exec("barbell").toString()); //test 98
}

function testRegexpPCRE_99() {
  var regexp = /(?!alphabet)[ab]/i;
  assertEquals("a", regexp.exec("abc\nbarton").toString()); //test 99
}

function testRegexpPCRE_100() {
  var regexp = /(?!alphabet)[ab]/i;
  assertEquals("a", regexp.exec("abc").toString()); //test 100
}

function testRegexpPCRE_101() {
  var regexp = /(?!alphabet)[ab]/i;
  assertEquals("a", regexp.exec("def\nabc").toString()); //test 101
}

function testRegexpPCRE_102() {
  var regexp = /(?!alphabet)[ab]/i;
  assertEquals("a", regexp.exec("*** Failers").toString()); //test 102
}

function testRegexpPCRE_103() {
  var regexp = /(?!alphabet)[ab]/i;
  assertEquals("a", regexp.exec("defabc").toString()); //test 103
}

function testRegexpPCRE_104() {
  var regexp = /The next three are in testinput2 because they have variable length branches/;
  assertEquals(null, regexp.exec("the bullock-cart")); //test 104
}

function testRegexpPCRE_105() {
  var regexp = /The next three are in testinput2 because they have variable length branches/;
  assertEquals(null, regexp.exec("a donkey-cart race")); //test 105
}

function testRegexpPCRE_106() {
  var regexp = /The next three are in testinput2 because they have variable length branches/;
  assertEquals(null, regexp.exec("*** Failers")); //test 106
}

function testRegexpPCRE_107() {
  var regexp = /The next three are in testinput2 because they have variable length branches/;
  assertEquals(null, regexp.exec("cart")); //test 107
}

function testRegexpPCRE_108() {
  var regexp = /The next three are in testinput2 because they have variable length branches/;
  assertEquals(null, regexp.exec("horse-and-cart")); //test 108
}

function testRegexpPCRE_109() {
  var regexp = /The next three are in testinput2 because they have variable length branches/;
  assertEquals(null, regexp.exec("alphabetabcd")); //test 109
}

function testRegexpPCRE_110() {
  var regexp = /The next three are in testinput2 because they have variable length branches/;
  assertEquals(null, regexp.exec("endingxyz")); //test 110
}

function testRegexpPCRE_111() {
  var regexp = /The next three are in testinput2 because they have variable length branches/;
  assertEquals(null, regexp.exec("abxyZZ")); //test 111
}

function testRegexpPCRE_112() {
  var regexp = /The next three are in testinput2 because they have variable length branches/;
  assertEquals(null, regexp.exec("abXyZZ")); //test 112
}

function testRegexpPCRE_113() {
  var regexp = /The next three are in testinput2 because they have variable length branches/;
  assertEquals(null, regexp.exec("ZZZ")); //test 113
}

function testRegexpPCRE_114() {
  var regexp = /The next three are in testinput2 because they have variable length branches/;
  assertEquals(null, regexp.exec("zZZ")); //test 114
}

function testRegexpPCRE_115() {
  var regexp = /The next three are in testinput2 because they have variable length branches/;
  assertEquals(null, regexp.exec("bZZ")); //test 115
}

function testRegexpPCRE_116() {
  var regexp = /The next three are in testinput2 because they have variable length branches/;
  assertEquals(null, regexp.exec("BZZ")); //test 116
}

function testRegexpPCRE_117() {
  var regexp = /The next three are in testinput2 because they have variable length branches/;
  assertEquals(null, regexp.exec("*** Failers")); //test 117
}

function testRegexpPCRE_118() {
  var regexp = /The next three are in testinput2 because they have variable length branches/;
  assertEquals(null, regexp.exec("ZZ")); //test 118
}

function testRegexpPCRE_119() {
  var regexp = /The next three are in testinput2 because they have variable length branches/;
  assertEquals(null, regexp.exec("abXYZZ")); //test 119
}

function testRegexpPCRE_120() {
  var regexp = /The next three are in testinput2 because they have variable length branches/;
  assertEquals(null, regexp.exec("zzz")); //test 120
}

function testRegexpPCRE_121() {
  var regexp = /The next three are in testinput2 because they have variable length branches/;
  assertEquals(null, regexp.exec("bzz")); //test 121
}

function testRegexpPCRE_122() {
  var regexp = /The next three are in testinput2 because they have variable length branches/;
  assertEquals(null, regexp.exec("bar")); //test 122
}

function testRegexpPCRE_123() {
  var regexp = /The next three are in testinput2 because they have variable length branches/;
  assertEquals(null, regexp.exec("foobbar")); //test 123
}

function testRegexpPCRE_124() {
  var regexp = /The next three are in testinput2 because they have variable length branches/;
  assertEquals(null, regexp.exec("*** Failers")); //test 124
}

function testRegexpPCRE_125() {
  var regexp = /The next three are in testinput2 because they have variable length branches/;
  assertEquals(null, regexp.exec("fooabar")); //test 125
}

function testRegexpPCRE_126() {
  var regexp = /This one is here because Perl 5.005_02 doesn't fail it/i;
  assertEquals(null, regexp.exec("*** Failers")); //test 126
}

function testRegexpPCRE_127() {
  var regexp = /This one is here because Perl 5.005_02 doesn't fail it/i;
  assertEquals(null, regexp.exec("a")); //test 127
}

function testRegexpPCRE_128() {
  var regexp = /^(a\1?){4}$/i;
  assertEquals(null, regexp.exec("aaaaaa")); //test 128
}

function testRegexpPCRE_129() {
  assertThrows(SyntaxError, eval, "var re = /a[b-a]/;"); //test 129
}


function testRegexpPCRE_130() {
  assertThrows(SyntaxError, eval, "var re = /a[/;"); //test 130
}


function testRegexpPCRE_131() {
  assertThrows(SyntaxError, eval, "var re = /*a/;"); //test 131
}


function testRegexpPCRE_132() {
  assertThrows(SyntaxError, eval, "var re = /abc)/;"); //test 132
}


function testRegexpPCRE_133() {
  assertThrows(SyntaxError, eval, "var re = /(abc/;"); //test 133
}


function testRegexpPCRE_134() {
  assertThrows(SyntaxError, eval, "var re = /a**/;"); //test 134
}


function testRegexpPCRE_135() {
  assertThrows(SyntaxError, eval, "var re = /)(/;"); //test 135
}


function testRegexpPCRE_136() {
  assertThrows(SyntaxError, eval, "var re = /a[b-a]/;"); //test 136
}


function testRegexpPCRE_137() {
  assertThrows(SyntaxError, eval, "var re = /a[/;"); //test 137
}


function testRegexpPCRE_138() {
  assertThrows(SyntaxError, eval, "var re = /*a/;"); //test 138
}


function testRegexpPCRE_139() {
  assertThrows(SyntaxError, eval, "var re = /abc)/;"); //test 139
}


function testRegexpPCRE_140() {
  assertThrows(SyntaxError, eval, "var re = /(abc/;"); //test 140
}


function testRegexpPCRE_141() {
  assertThrows(SyntaxError, eval, "var re = /a**/;"); //test 141
}


function testRegexpPCRE_142() {
  assertThrows(SyntaxError, eval, "var re = /)(/;"); //test 142
}


function testRegexpPCRE_143() {
  assertThrows(SyntaxError, eval, "var re = /:(?:/;"); //test 143
}


function testRegexpPCRE_144() {
  assertThrows(SyntaxError, eval, "var re = /a(?{)b/;"); //test 144
}


function testRegexpPCRE_145() {
  assertThrows(SyntaxError, eval, "var re = /a(?{{})b/;"); //test 145
}


function testRegexpPCRE_146() {
  assertThrows(SyntaxError, eval, "var re = /a(?{}})b/;"); //test 146
}


function testRegexpPCRE_147() {
  assertThrows(SyntaxError, eval, "var re = /a(?{\"{\"})b/;"); //test 147
}


function testRegexpPCRE_148() {
  assertThrows(SyntaxError, eval, "var re = /a(?{\"{\"}})b/;"); //test 148
}


function testRegexpPCRE_149() {
  assertThrows(SyntaxError, eval, "var re = /[a[:xyz:/;"); //test 149
}


function testRegexpPCRE_150() {
  assertThrows(SyntaxError, eval, "var re = /a{37,17}/;"); //test 150
}


function testRegexpPCRE_151() {
  var regexp = /(a)bc(d)/i;
  assertEquals("abcd,a,d", regexp.exec("abcd").toString()); //test 151
}

function testRegexpPCRE_152() {
  var regexp = /(a)bc(d)/i;
  assertEquals("abcd,a,d", regexp.exec("abcdC2").toString()); //test 152
}

function testRegexpPCRE_153() {
  var regexp = /(a)bc(d)/i;
  assertEquals("abcd,a,d", regexp.exec("abcdC5").toString()); //test 153
}

function testRegexpPCRE_154() {
  var regexp = /(.{20})/i;
  assertEquals("abcdefghijklmnopqrst,abcdefghijklmnopqrst", regexp.exec("abcdefghijklmnopqrstuvwxyz").toString()); //test 154
}

function testRegexpPCRE_155() {
  var regexp = /(.{20})/i;
  assertEquals("abcdefghijklmnopqrst,abcdefghijklmnopqrst", regexp.exec("abcdefghijklmnopqrstuvwxyzC1").toString()); //test 155
}

function testRegexpPCRE_156() {
  var regexp = /(.{20})/i;
  assertEquals("abcdefghijklmnopqrst,abcdefghijklmnopqrst", regexp.exec("abcdefghijklmnopqrstuvwxyzG1").toString()); //test 156
}

function testRegexpPCRE_157() {
  var regexp = /(.{15})/i;
  assertEquals("abcdefghijklmno,abcdefghijklmno", regexp.exec("abcdefghijklmnopqrstuvwxyz").toString()); //test 157
}

function testRegexpPCRE_158() {
  var regexp = /(.{15})/i;
  assertEquals("abcdefghijklmno,abcdefghijklmno", regexp.exec("abcdefghijklmnopqrstuvwxyzC1G1").toString()); //test 158
}

function testRegexpPCRE_159() {
  var regexp = /(.{16})/i;
  assertEquals("abcdefghijklmnop,abcdefghijklmnop", regexp.exec("abcdefghijklmnopqrstuvwxyz").toString()); //test 159
}

function testRegexpPCRE_160() {
  var regexp = /(.{16})/i;
  assertEquals("abcdefghijklmnop,abcdefghijklmnop", regexp.exec("abcdefghijklmnopqrstuvwxyzC1G1L").toString()); //test 160
}

function testRegexpPCRE_161() {
  var regexp = /^(a|(bc))de(f)/i;
  assertEquals("adef,a,,f", regexp.exec("adefG1G2G3G4L").toString()); //test 161
}

function testRegexpPCRE_162() {
  var regexp = /^(a|(bc))de(f)/i;
  assertEquals("bcdef,bc,bc,f", regexp.exec("bcdefG1G2G3G4L").toString()); //test 162
}

function testRegexpPCRE_163() {
  var regexp = /^(a|(bc))de(f)/i;
  assertEquals("adef,a,,f", regexp.exec("adefghijkC0").toString()); //test 163
}

function testRegexpPCRE_164() {
  var regexp = /^abc\00def/i;
  assertEquals("abc\x00def", regexp.exec("abc\x00defLC0").toString()); //test 164
}

function testRegexpPCRE_165() {
  var regexp = /\Biss\B/i;
  assertEquals("iss", regexp.exec("Mississippi").toString()); //test 165
}

function testRegexpPCRE_166() {
  var regexp = /\Biss\B/i;
  assertEquals("iss", regexp.exec("Mississippi").toString()); //test 166
}

function testRegexpPCRE_167() {
  var regexp = /iss/ig;
  assertEquals("iss", regexp.exec("Mississippi").toString()); //test 167
}

function testRegexpPCRE_168() {
  var regexp = /\Biss\B/ig;
  assertEquals("iss", regexp.exec("Mississippi").toString()); //test 168
}

function testRegexpPCRE_169() {
  var regexp = /\Biss\B/ig;
  assertEquals("iss", regexp.exec("Mississippi").toString()); //test 169
  assertEquals(null, regexp.exec("*** Failers")); //test 170
  assertEquals("iss", regexp.exec("MississippiA").toString()); //test 171
  assertEquals("iss", regexp.exec("Mississippi").toString()); //test 172
  assertEquals(null, regexp.exec("Mississippi")); //test 173
}

function testRegexpPCRE_170() {
  var regexp = /^iss/ig;
  assertEquals("iss", regexp.exec("ississippi").toString()); //test 174
}

function testRegexpPCRE_171() {
  var regexp = /.*iss/ig;
  assertEquals("abciss", regexp.exec("abciss\nxyzisspqr").toString()); //test 175
}

function testRegexpPCRE_172() {
  var regexp = /.i./ig;
  assertEquals("Mis", regexp.exec("Mississippi").toString()); //test 176
  assertEquals("sis", regexp.exec("MississippiA").toString()); //test 177
  assertEquals("ri ", regexp.exec("Missouri river").toString()); //test 178
  assertEquals("riv", regexp.exec("Missouri riverA").toString()); //test 179
}

function testRegexpPCRE_173() {
  var regexp = /^.is/ig;
  assertEquals("Mis", regexp.exec("Mississippi").toString()); //test 180
}

function testRegexpPCRE_174() {
  var regexp = /^ab\n/ig;
  assertEquals("ab\n", regexp.exec("ab\nab\ncd").toString()); //test 181
}

function testRegexpPCRE_175() {
  var regexp = /^ab\n/img;
  assertEquals("ab\n", regexp.exec("ab\nab\ncd").toString()); //test 182
}

function testRegexpPCRE_176() {
  var regexp = /a?b?/i;
  assertEquals("a", regexp.exec("a").toString()); //test 183
}

function testRegexpPCRE_177() {
  var regexp = /a?b?/i;
  assertEquals("b", regexp.exec("b").toString()); //test 184
}

function testRegexpPCRE_178() {
  var regexp = /a?b?/i;
  assertEquals("ab", regexp.exec("ab").toString()); //test 185
}

function testRegexpPCRE_179() {
  var regexp = /a?b?/i;
  assertEquals("", regexp.exec("\\").toString()); //test 186
}

function testRegexpPCRE_180() {
  var regexp = /a?b?/i;
  assertEquals("", regexp.exec("*** Failers").toString()); //test 187
}

function testRegexpPCRE_181() {
  var regexp = /a?b?/i;
  assertEquals("", regexp.exec("N").toString()); //test 188
}

function testRegexpPCRE_182() {
  var regexp = /|-/i;
  assertEquals("", regexp.exec("abcd").toString()); //test 189
}

function testRegexpPCRE_183() {
  var regexp = /|-/i;
  assertEquals("", regexp.exec("-abc").toString()); //test 190
}

function testRegexpPCRE_184() {
  var regexp = /|-/i;
  assertEquals("", regexp.exec("Nab-c").toString()); //test 191
}

function testRegexpPCRE_185() {
  var regexp = /|-/i;
  assertEquals("", regexp.exec("*** Failers").toString()); //test 192
}

function testRegexpPCRE_186() {
  var regexp = /|-/i;
  assertEquals("", regexp.exec("Nabc").toString()); //test 193
}

function testRegexpPCRE_187() {
  var regexp = /a*(b+)(z)(z)/i;
  assertEquals("aaaabbbbzz,bbbb,z,z", regexp.exec("aaaabbbbzzzz").toString()); //test 194
}

function testRegexpPCRE_188() {
  var regexp = /a*(b+)(z)(z)/i;
  assertEquals("aaaabbbbzz,bbbb,z,z", regexp.exec("aaaabbbbzzzzO0").toString()); //test 195
}

function testRegexpPCRE_189() {
  var regexp = /a*(b+)(z)(z)/i;
  assertEquals("aaaabbbbzz,bbbb,z,z", regexp.exec("aaaabbbbzzzzO1").toString()); //test 196
}

function testRegexpPCRE_190() {
  var regexp = /a*(b+)(z)(z)/i;
  assertEquals("aaaabbbbzz,bbbb,z,z", regexp.exec("aaaabbbbzzzzO2").toString()); //test 197
}

function testRegexpPCRE_191() {
  var regexp = /a*(b+)(z)(z)/i;
  assertEquals("aaaabbbbzz,bbbb,z,z", regexp.exec("aaaabbbbzzzzO3").toString()); //test 198
}

function testRegexpPCRE_192() {
  var regexp = /a*(b+)(z)(z)/i;
  assertEquals("aaaabbbbzz,bbbb,z,z", regexp.exec("aaaabbbbzzzzO4").toString()); //test 199
}

function testRegexpPCRE_193() {
  var regexp = /a*(b+)(z)(z)/i;
  assertEquals("aaaabbbbzz,bbbb,z,z", regexp.exec("aaaabbbbzzzzO5").toString()); //test 200
}

function testRegexpPCRE_194() {
  var regexp = /^.?abcd/i;
  assertEquals("(abcd", regexp.exec("(abcd)").toString()); //test 201
}

function testRegexpPCRE_195() {
  var regexp = /^.?abcd/i;
  assertEquals("(abcd", regexp.exec("(abcd)xyz").toString()); //test 202
}

function testRegexpPCRE_196() {
  var regexp = /^.?abcd/i;
  assertEquals(null, regexp.exec("xyz(abcd)")); //test 203
}

function testRegexpPCRE_197() {
  var regexp = /^.?abcd/i;
  assertEquals(null, regexp.exec("(ab(xy)cd)pqr")); //test 204
}

function testRegexpPCRE_198() {
  var regexp = /^.?abcd/i;
  assertEquals(null, regexp.exec("(ab(xycd)pqr")); //test 205
}

function testRegexpPCRE_199() {
  var regexp = /^.?abcd/i;
  assertEquals(null, regexp.exec("() abc ()")); //test 206
}

function testRegexpPCRE_200() {
  var regexp = /^.?abcd/i;
  assertEquals(null, regexp.exec("12(abcde(fsh)xyz(foo(bar))lmno)89")); //test 207
}

function testRegexpPCRE_201() {
  var regexp = /^.?abcd/i;
  assertEquals(null, regexp.exec("*** Failers")); //test 208
}

function testRegexpPCRE_202() {
  var regexp = /^.?abcd/i;
  assertEquals("abcd", regexp.exec("abcd").toString()); //test 209
}

function testRegexpPCRE_203() {
  var regexp = /^.?abcd/i;
  assertEquals("abcd", regexp.exec("abcd)").toString()); //test 210
}

function testRegexpPCRE_204() {
  var regexp = /^.?abcd/i;
  assertEquals("(abcd", regexp.exec("(abcd").toString()); //test 211
}

function testRegexpPCRE_205() {
  var regexp = /^.?abcd/i;
  assertEquals(null, regexp.exec("(ab(xy)cd)pqr")); //test 212
}

function testRegexpPCRE_206() {
  var regexp = /^.?abcd/i;
  assertEquals(null, regexp.exec("1(abcd)(x(y)z)pqr")); //test 213
}

function testRegexpPCRE_207() {
  var regexp = /^.?abcd/i;
  assertEquals("(abcd", regexp.exec("(abcd)").toString()); //test 214
}

function testRegexpPCRE_208() {
  var regexp = /^.?abcd/i;
  assertEquals(null, regexp.exec("(ab(xy)cd)")); //test 215
}

function testRegexpPCRE_209() {
  var regexp = /^.?abcd/i;
  assertEquals(null, regexp.exec("(a(b(c)d)e)")); //test 216
}

function testRegexpPCRE_210() {
  var regexp = /^.?abcd/i;
  assertEquals(null, regexp.exec("((ab))")); //test 217
}

function testRegexpPCRE_211() {
  var regexp = /^.?abcd/i;
  assertEquals(null, regexp.exec("*** Failers")); //test 218
}

function testRegexpPCRE_212() {
  var regexp = /^.?abcd/i;
  assertEquals(null, regexp.exec("()")); //test 219
}

function testRegexpPCRE_213() {
  var regexp = /^.?abcd/i;
  assertEquals(null, regexp.exec("()")); //test 220
}

function testRegexpPCRE_214() {
  var regexp = /^.?abcd/i;
  assertEquals(null, regexp.exec("12(abcde(fsh)xyz(foo(bar))lmno)89")); //test 221
}

function testRegexpPCRE_215() {
  var regexp = /^.?abcd/i;
  assertEquals(null, regexp.exec("(ab(xy)cd)")); //test 222
}

function testRegexpPCRE_216() {
  var regexp = /^.?abcd/i;
  assertEquals(null, regexp.exec("(ab(xy)cd)")); //test 223
}

function testRegexpPCRE_217() {
  var regexp = /^.?abcd/i;
  assertEquals(null, regexp.exec("(ab(xy)cd)")); //test 224
}

function testRegexpPCRE_218() {
  var regexp = /^.?abcd/i;
  assertEquals(null, regexp.exec("(123ab(xy)cd)")); //test 225
}

function testRegexpPCRE_219() {
  var regexp = /^.?abcd/i;
  assertEquals(null, regexp.exec("(ab(xy)cd)")); //test 226
}

function testRegexpPCRE_220() {
  var regexp = /^.?abcd/i;
  assertEquals(null, regexp.exec("(123ab(xy)cd)")); //test 227
}

function testRegexpPCRE_221() {
  var regexp = /^.?abcd/i;
  assertEquals(null, regexp.exec("(ab(xy)cd)")); //test 228
}

function testRegexpPCRE_222() {
  var regexp = /^.?abcd/i;
  assertEquals("(abcd", regexp.exec("(abcd(xyz<p>qrs)123)").toString()); //test 229
}

function testRegexpPCRE_223() {
  var regexp = /^.?abcd/i;
  assertEquals(null, regexp.exec("(ab(cd)ef)")); //test 230
}

function testRegexpPCRE_224() {
  var regexp = /^.?abcd/i;
  assertEquals(null, regexp.exec("(ab(cd(ef)gh)ij)")); //test 231
}

function testRegexpPCRE_225() {
  var regexp = /[[:upper:]]/i;
  assertEquals(null, regexp.exec("A")); //test 232
}

function testRegexpPCRE_226() {
  var regexp = /[[:upper:]]/i;
  assertEquals(null, regexp.exec("a")); //test 233
}

function testRegexpPCRE_227() {
  var regexp = /[[:lower:]]/i;
  assertEquals(null, regexp.exec("A")); //test 234
}

function testRegexpPCRE_228() {
  var regexp = /[[:lower:]]/i;
  assertEquals(null, regexp.exec("a")); //test 235
}

function testRegexpPCRE_229() {
  var regexp = /[[:lower:]]/i;
  assertEquals(null, regexp.exec("ab")); //test 236
}

function testRegexpPCRE_230() {
  var regexp = /[[:lower:]]/i;
  assertEquals(null, regexp.exec("aB")); //test 237
}

function testRegexpPCRE_231() {
  var regexp = /[[:lower:]]/i;
  assertEquals(null, regexp.exec("*** Failers")); //test 238
}

function testRegexpPCRE_232() {
  var regexp = /[[:lower:]]/i;
  assertEquals(null, regexp.exec("Ab")); //test 239
}

function testRegexpPCRE_233() {
  var regexp = /[[:lower:]]/i;
  assertEquals(null, regexp.exec("AB")); //test 240
}

function testRegexpPCRE_234() {
  assertThrows(SyntaxError, eval, "var re = /[\\200-\\110]/;"); //test 241
}


function testRegexpPCRE_235() {
  var regexp = /(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\d+(?:\s|$))(\w+)\s+(\270)/i;
  assertEquals("1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 80 81 82 83 84 85 86 87 88 89 90 91 92 93 94 95 96 97 98 99 100 101 102 103 104 105 106 107 108 109 110 111 112 113 114 115 116 117 118 119 120 121 122 123 124 125 126 127 128 129 130 131 132 133 134 135 136 137 138 139 140 141 142 143 144 145 146 147 148 149 150 151 152 153 154 155 156 157 158 159 160 161 162 163 164 165 166 167 168 169 170 171 172 173 174 175 176 177 178 179 180 181 182 183 184 185 186 187 188 189 190 191 192 193 194 195 196 197 198 199 200 201 202 203 204 205 206 207 208 209 210 211 212 213 214 215 216 217 218 219 220 221 222 223 224 225 226 227 228 229 230 231 232 233 234 235 236 237 238 239 240 241 242 243 244 245 246 247 248 249 250 251 252 253 254 255 256 257 258 259 260 261 262 263 264 265 266 267 268 269 ABC ABC,1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,10 ,11 ,12 ,13 ,14 ,15 ,16 ,17 ,18 ,19 ,20 ,21 ,22 ,23 ,24 ,25 ,26 ,27 ,28 ,29 ,30 ,31 ,32 ,33 ,34 ,35 ,36 ,37 ,38 ,39 ,40 ,41 ,42 ,43 ,44 ,45 ,46 ,47 ,48 ,49 ,50 ,51 ,52 ,53 ,54 ,55 ,56 ,57 ,58 ,59 ,60 ,61 ,62 ,63 ,64 ,65 ,66 ,67 ,68 ,69 ,70 ,71 ,72 ,73 ,74 ,75 ,76 ,77 ,78 ,79 ,80 ,81 ,82 ,83 ,84 ,85 ,86 ,87 ,88 ,89 ,90 ,91 ,92 ,93 ,94 ,95 ,96 ,97 ,98 ,99 ,100 ,101 ,102 ,103 ,104 ,105 ,106 ,107 ,108 ,109 ,110 ,111 ,112 ,113 ,114 ,115 ,116 ,117 ,118 ,119 ,120 ,121 ,122 ,123 ,124 ,125 ,126 ,127 ,128 ,129 ,130 ,131 ,132 ,133 ,134 ,135 ,136 ,137 ,138 ,139 ,140 ,141 ,142 ,143 ,144 ,145 ,146 ,147 ,148 ,149 ,150 ,151 ,152 ,153 ,154 ,155 ,156 ,157 ,158 ,159 ,160 ,161 ,162 ,163 ,164 ,165 ,166 ,167 ,168 ,169 ,170 ,171 ,172 ,173 ,174 ,175 ,176 ,177 ,178 ,179 ,180 ,181 ,182 ,183 ,184 ,185 ,186 ,187 ,188 ,189 ,190 ,191 ,192 ,193 ,194 ,195 ,196 ,197 ,198 ,199 ,200 ,201 ,202 ,203 ,204 ,205 ,206 ,207 ,208 ,209 ,210 ,211 ,212 ,213 ,214 ,215 ,216 ,217 ,218 ,219 ,220 ,221 ,222 ,223 ,224 ,225 ,226 ,227 ,228 ,229 ,230 ,231 ,232 ,233 ,234 ,235 ,236 ,237 ,238 ,239 ,240 ,241 ,242 ,243 ,244 ,245 ,246 ,247 ,248 ,249 ,250 ,251 ,252 ,253 ,254 ,255 ,256 ,257 ,258 ,259 ,260 ,261 ,262 ,263 ,264 ,265 ,266 ,267 ,268 ,269 ,ABC,ABC", regexp.exec("O900 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 80 81 82 83 84 85 86 87 88 89 90 91 92 93 94 95 96 97 98 99 100 101 102 103 104 105 106 107 108 109 110 111 112 113 114 115 116 117 118 119 120 121 122 123 124 125 126 127 128 129 130 131 132 133 134 135 136 137 138 139 140 141 142 143 144 145 146 147 148 149 150 151 152 153 154 155 156 157 158 159 160 161 162 163 164 165 166 167 168 169 170 171 172 173 174 175 176 177 178 179 180 181 182 183 184 185 186 187 188 189 190 191 192 193 194 195 196 197 198 199 200 201 202 203 204 205 206 207 208 209 210 211 212 213 214 215 216 217 218 219 220 221 222 223 224 225 226 227 228 229 230 231 232 233 234 235 236 237 238 239 240 241 242 243 244 245 246 247 248 249 250 251 252 253 254 255 256 257 258 259 260 261 262 263 264 265 266 267 268 269 ABC ABC").toString()); //test 242
}

function testRegexpPCRE_236() {
  var regexp = /(main(O)?)+/i;
  assertEquals("mainmain,main,", regexp.exec("mainmain").toString()); //test 243
}

function testRegexpPCRE_237() {
  var regexp = /(main(O)?)+/i;
  assertEquals("mainOmain,main,", regexp.exec("mainOmain").toString()); //test 244
}

function testRegexpPCRE_238() {
  var regexp = /^(a(b)?)+$/i;
  assertEquals("aba,a,", regexp.exec("aba").toString()); //test 245
}

function testRegexpPCRE_239() {
  var regexp = /^(aa(bb)?)+$/i;
  assertEquals("aabbaa,aa,", regexp.exec("aabbaa").toString()); //test 246
}

function testRegexpPCRE_240() {
  var regexp = /^(aa|aa(bb))+$/i;
  assertEquals("aabbaa,aa,", regexp.exec("aabbaa").toString()); //test 247
}

function testRegexpPCRE_241() {
  var regexp = /^(aa(bb)??)+$/i;
  assertEquals("aabbaa,aa,", regexp.exec("aabbaa").toString()); //test 248
}

function testRegexpPCRE_242() {
  var regexp = /^(?:aa(bb)?)+$/i;
  assertEquals("aabbaa,", regexp.exec("aabbaa").toString()); //test 249
}

function testRegexpPCRE_243() {
  var regexp = /^(aa(b(b))?)+$/i;
  assertEquals("aabbaa,aa,,", regexp.exec("aabbaa").toString()); //test 250
}

function testRegexpPCRE_244() {
  var regexp = /^(?:aa(b(b))?)+$/i;
  assertEquals("aabbaa,,", regexp.exec("aabbaa").toString()); //test 251
}

function testRegexpPCRE_245() {
  var regexp = /^(?:aa(b(?:b))?)+$/i;
  assertEquals("aabbaa,", regexp.exec("aabbaa").toString()); //test 252
}

function testRegexpPCRE_246() {
  var regexp = /^(?:aa(bb(?:b))?)+$/i;
  assertEquals("aabbbaa,", regexp.exec("aabbbaa").toString()); //test 253
}

function testRegexpPCRE_247() {
  var regexp = /^(?:aa(b(?:bb))?)+$/i;
  assertEquals("aabbbaa,", regexp.exec("aabbbaa").toString()); //test 254
}

function testRegexpPCRE_248() {
  var regexp = /^(?:aa(?:b(b))?)+$/i;
  assertEquals("aabbaa,", regexp.exec("aabbaa").toString()); //test 255
}

function testRegexpPCRE_249() {
  var regexp = /^(?:aa(?:b(bb))?)+$/i;
  assertEquals("aabbbaa,", regexp.exec("aabbbaa").toString()); //test 256
}

function testRegexpPCRE_250() {
  var regexp = /^(aa(b(bb))?)+$/i;
  assertEquals("aabbbaa,aa,,", regexp.exec("aabbbaa").toString()); //test 257
}

function testRegexpPCRE_251() {
  var regexp = /^(aa(bb(bb))?)+$/i;
  assertEquals("aabbbbaa,aa,,", regexp.exec("aabbbbaa").toString()); //test 258
}

function testRegexpPCRE_252() {
  assertThrows(SyntaxError, eval, "var re = //;"); //test 259
}


function testRegexpPCRE_253() {
  var regexp = /[\S]/;
  assertEquals("a", regexp.exec("ab").toString()); //test 260
}

function testRegexpPCRE_254() {
  var regexp = /[\S]/;
  assertEquals("a", regexp.exec("aB").toString()); //test 261
}

function testRegexpPCRE_255() {
  var regexp = /[\S]/;
  assertEquals("*", regexp.exec("*** Failers").toString()); //test 262
}

function testRegexpPCRE_256() {
  var regexp = /[\S]/;
  assertEquals("A", regexp.exec("AB").toString()); //test 263
}

function testRegexpPCRE_257() {
  var regexp = /[\S]/;
  assertEquals("a", regexp.exec("ab").toString()); //test 264
}

function testRegexpPCRE_258() {
  var regexp = /[\S]/;
  assertEquals("a", regexp.exec("aB").toString()); //test 265
}

function testRegexpPCRE_259() {
  var regexp = /[\S]/;
  assertEquals("*", regexp.exec("*** Failers").toString()); //test 266
}

function testRegexpPCRE_260() {
  var regexp = /[\S]/;
  assertEquals("A", regexp.exec("AB").toString()); //test 267
}

function testRegexpPCRE_261() {
  var regexp = /\Q\E/;
  assertEquals(null, regexp.exec("\\")); //test 268
}

function testRegexpPCRE_262() {
  var regexp = /\Q\Eabc/;
  assertEquals(null, regexp.exec("*** Failers")); //test 269
}

function testRegexpPCRE_263() {
  var regexp = /\Q\Eabc/;
  assertEquals(null, regexp.exec("xxxxx")); //test 270
}

function testRegexpPCRE_264() {
  var regexp = /\Q\Eabc/;
  assertEquals(null, regexp.exec("now is the time for all good men to come to the aid of the party")); //test 271
}

function testRegexpPCRE_265() {
  var regexp = /\Q\Eabc/;
  assertEquals(null, regexp.exec("*** Failers")); //test 272
}

function testRegexpPCRE_266() {
  var regexp = /\Q\Eabc/;
  assertEquals(null, regexp.exec("this is not a line with only words and spaces!")); //test 273
}

function testRegexpPCRE_267() {
  var regexp = /\Q\Eabc/;
  assertEquals(null, regexp.exec("12345a")); //test 274
}

function testRegexpPCRE_268() {
  var regexp = /\Q\Eabc/;
  assertEquals(null, regexp.exec("*** Failers")); //test 275
}

function testRegexpPCRE_269() {
  var regexp = /\Q\Eabc/;
  assertEquals(null, regexp.exec("12345+")); //test 276
}

function testRegexpPCRE_270() {
  var regexp = /\Q\Eabc/;
  assertEquals(null, regexp.exec("aaab")); //test 277
}

function testRegexpPCRE_271() {
  var regexp = /\Q\Eabc/;
  assertEquals(null, regexp.exec("aaab")); //test 278
}

function testRegexpPCRE_272() {
  var regexp = /\Q\Eabc/;
  assertEquals(null, regexp.exec("aaab")); //test 279
}

function testRegexpPCRE_273() {
  var regexp = /\Q\Eabc/;
  assertEquals(null, regexp.exec("((abc(ade)ufh()()x")); //test 280
}

function testRegexpPCRE_274() {
  var regexp = /\Q\Eabc/;
  assertEquals(null, regexp.exec("(abc)")); //test 281
}

function testRegexpPCRE_275() {
  var regexp = /\Q\Eabc/;
  assertEquals(null, regexp.exec("(abc(def)xyz)")); //test 282
}

function testRegexpPCRE_276() {
  var regexp = /\Q\Eabc/;
  assertEquals(null, regexp.exec("*** Failers")); //test 283
}

function testRegexpPCRE_277() {
  var regexp = /\Q\Eabc/;
  assertEquals(null, regexp.exec("((()aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")); //test 284
}

function testRegexpPCRE_278() {
  var regexp = /\Q\Eabc/;
  assertEquals(null, regexp.exec("xaaaab")); //test 285
}

function testRegexpPCRE_279() {
  var regexp = /\Q\Eabc/;
  assertEquals(null, regexp.exec("xaaaab")); //test 286
}

function testRegexpPCRE_280() {
  assertThrows(SyntaxError, eval, "var re = /[/;"); //test 287
}


function testRegexpPCRE_281() {
  assertThrows(SyntaxError, eval, "var re = /[a-/;"); //test 288
}


function testRegexpPCRE_282() {
  var regexp = /[[:space:]abcde]/i;
  assertEquals(null, regexp.exec("<>")); //test 289
}

function testRegexpPCRE_283() {
  var regexp = /[[:space:]abcde]/i;
  assertEquals(null, regexp.exec("<abcd>")); //test 290
}

function testRegexpPCRE_284() {
  var regexp = /[[:space:]abcde]/i;
  assertEquals(null, regexp.exec("<abc <123> hij>")); //test 291
}

function testRegexpPCRE_285() {
  var regexp = /[[:space:]abcde]/i;
  assertEquals(null, regexp.exec("<abc <def> hij>")); //test 292
}

function testRegexpPCRE_286() {
  var regexp = /[[:space:]abcde]/i;
  assertEquals(null, regexp.exec("<abc<>def>")); //test 293
}

function testRegexpPCRE_287() {
  var regexp = /[[:space:]abcde]/i;
  assertEquals(null, regexp.exec("<abc<>")); //test 294
}

function testRegexpPCRE_288() {
  var regexp = /[[:space:]abcde]/i;
  assertEquals(null, regexp.exec("*** Failers")); //test 295
}

function testRegexpPCRE_289() {
  var regexp = /[[:space:]abcde]/i;
  assertEquals(null, regexp.exec("<abc")); //test 296
}

function testRegexpPCRE_290() {
  var regexp = /((.*))\d+\1/i;
  assertEquals("bc123bc,bc,bc", regexp.exec("abc123bc").toString()); //test 297
}

function testRegexpPCRE_291() {
  var regexp = /c|abc/i;
  assertEquals("abc", regexp.exec("abcdef").toString()); //test 298
}

function testRegexpPCRE_292() {
  var regexp = /c|abc/i;
  assertEquals("abc", regexp.exec("1234abcdef").toString()); //test 299
}

function testRegexpPCRE_293() {
  var regexp = /c|abc/i;
  assertEquals(null, regexp.exec("*** Failers")); //test 300
}

function testRegexpPCRE_294() {
  var regexp = /c|abc/i;
  assertEquals("abc", regexp.exec("abcxyz").toString()); //test 301
}

function testRegexpPCRE_295() {
  var regexp = /c|abc/i;
  assertEquals("abc", regexp.exec("abcxyzf").toString()); //test 302
}

function testRegexpPCRE_296() {
  var regexp = /c|abc/i;
  assertEquals("abc", regexp.exec("123abcdef").toString()); //test 303
}

function testRegexpPCRE_297() {
  var regexp = /c|abc/i;
  assertEquals("abc", regexp.exec("1234abcdef").toString()); //test 304
}

function testRegexpPCRE_298() {
  var regexp = /c|abc/i;
  assertEquals(null, regexp.exec("*** Failers")); //test 305
}

function testRegexpPCRE_299() {
  var regexp = /c|abc/i;
  assertEquals("abc", regexp.exec("abcdef").toString()); //test 306
}

function testRegexpPCRE_300() {
  var regexp = /c|abc/i;
  assertEquals(null, regexp.exec("*** Failers")); //test 307
}

function testRegexpPCRE_301() {
  var regexp = /c|abc/i;
  assertEquals("abc", regexp.exec("\x83x0abcdef").toString()); //test 308
}

function testRegexpPCRE_302() {
  var regexp = /c|abc/i;
  assertEquals("abc", regexp.exec("123abcdef").toString()); //test 309
}

function testRegexpPCRE_303() {
  var regexp = /c|abc/i;
  assertEquals("abc", regexp.exec("123abcdefC+").toString()); //test 310
}

function testRegexpPCRE_304() {
  var regexp = /c|abc/i;
  assertEquals("abc", regexp.exec("123abcdefC-").toString()); //test 311
}

function testRegexpPCRE_305() {
  var regexp = /c|abc/i;
  assertEquals(null, regexp.exec("*** Failers")); //test 312
}

function testRegexpPCRE_306() {
  var regexp = /c|abc/i;
  assertEquals("abc", regexp.exec("123abcdefC!1").toString()); //test 313
}

function testRegexpPCRE_307() {
  var regexp = /c|abc/i;
  assertEquals("abc", regexp.exec("abcabcabc").toString()); //test 314
}

function testRegexpPCRE_308() {
  var regexp = /c|abc/i;
  assertEquals("abc", regexp.exec("abcabcC!1!3").toString()); //test 315
}

function testRegexpPCRE_309() {
  var regexp = /c|abc/i;
  assertEquals(null, regexp.exec("*** Failers")); //test 316
}

function testRegexpPCRE_310() {
  var regexp = /c|abc/i;
  assertEquals("abc", regexp.exec("abcabcabcC!1!3").toString()); //test 317
}

function testRegexpPCRE_311() {
  var regexp = /c|abc/i;
  assertEquals("C", regexp.exec("123C+").toString()); //test 318
}

function testRegexpPCRE_312() {
  var regexp = /c|abc/i;
  assertEquals("C", regexp.exec("123456C+").toString()); //test 319
}

function testRegexpPCRE_313() {
  var regexp = /c|abc/i;
  assertEquals("C", regexp.exec("123456789C+").toString()); //test 320
}

function testRegexpPCRE_314() {
  var regexp = /c|abc/i;
  assertEquals("abc", regexp.exec("xyzabcC+").toString()); //test 321
}

function testRegexpPCRE_315() {
  var regexp = /c|abc/i;
  assertEquals("abc", regexp.exec("XxyzabcC+").toString()); //test 322
}

function testRegexpPCRE_316() {
  var regexp = /c|abc/i;
  assertEquals("abc", regexp.exec("abcdefC+").toString()); //test 323
}

function testRegexpPCRE_317() {
  var regexp = /c|abc/i;
  assertEquals("abc", regexp.exec("abcxyzC+").toString()); //test 324
}

function testRegexpPCRE_318() {
  var regexp = /c|abc/i;
  assertEquals("c", regexp.exec("abbbbbcccC*1").toString()); //test 325
}

function testRegexpPCRE_319() {
  var regexp = /c|abc/i;
  assertEquals("c", regexp.exec("abbbbbcccC*1").toString()); //test 326
}

function testRegexpPCRE_320() {
  var regexp = /c|abc/i;
  assertEquals(null, regexp.exec("xab")); //test 327
}

function testRegexpPCRE_321() {
  var regexp = /c|abc/i;
  assertEquals("c", regexp.exec("xbc").toString()); //test 328
}

function testRegexpPCRE_322() {
  var regexp = /c|abc/i;
  assertEquals(null, regexp.exec("xde")); //test 329
}

function testRegexpPCRE_323() {
  var regexp = /c|abc/i;
  assertEquals(null, regexp.exec("xxab")); //test 330
}

function testRegexpPCRE_324() {
  var regexp = /c|abc/i;
  assertEquals(null, regexp.exec("xxxab")); //test 331
}

function testRegexpPCRE_325() {
  var regexp = /c|abc/i;
  assertEquals(null, regexp.exec("*** Failers")); //test 332
}

function testRegexpPCRE_326() {
  var regexp = /c|abc/i;
  assertEquals(null, regexp.exec("xyab")); //test 333
}

function testRegexpPCRE_327() {
  var regexp = /c|abc/i;
  assertEquals("abc", regexp.exec("abc").toString()); //test 334
}

function testRegexpPCRE_328() {
  var regexp = /c|abc/i;
  assertEquals("c", regexp.exec("a(b)c").toString()); //test 335
}

function testRegexpPCRE_329() {
  var regexp = /c|abc/i;
  assertEquals("c", regexp.exec("a(b(c))d").toString()); //test 336
}

function testRegexpPCRE_330() {
  var regexp = /c|abc/i;
  assertEquals(null, regexp.exec("*** Failers)")); //test 337
}

function testRegexpPCRE_331() {
  var regexp = /c|abc/i;
  assertEquals("c", regexp.exec("a(b(c)d").toString()); //test 338
}

function testRegexpPCRE_332() {
  var regexp = /c|abc/i;
  assertEquals(null, regexp.exec("1221")); //test 339
}

function testRegexpPCRE_333() {
  var regexp = /c|abc/i;
  assertEquals("c", regexp.exec("Satan, oscillate my metallic sonatas!").toString()); //test 340
}

function testRegexpPCRE_334() {
  var regexp = /c|abc/i;
  assertEquals("c", regexp.exec("A man, a plan, a canal: Panama!").toString()); //test 341
}

function testRegexpPCRE_335() {
  var regexp = /c|abc/i;
  assertEquals(null, regexp.exec("Able was I ere I saw Elba.")); //test 342
}

function testRegexpPCRE_336() {
  var regexp = /c|abc/i;
  assertEquals(null, regexp.exec("*** Failers")); //test 343
}

function testRegexpPCRE_337() {
  var regexp = /c|abc/i;
  assertEquals("c", regexp.exec("The quick brown fox").toString()); //test 344
}

function testRegexpPCRE_338() {
  var regexp = /c|abc/i;
  assertEquals(null, regexp.exec("12")); //test 345
}

function testRegexpPCRE_339() {
  var regexp = /c|abc/i;
  assertEquals(null, regexp.exec("(((2+2)*-3)-7)")); //test 346
}

function testRegexpPCRE_340() {
  var regexp = /c|abc/i;
  assertEquals(null, regexp.exec("-12")); //test 347
}

function testRegexpPCRE_341() {
  var regexp = /c|abc/i;
  assertEquals(null, regexp.exec("*** Failers")); //test 348
}

function testRegexpPCRE_342() {
  var regexp = /c|abc/i;
  assertEquals(null, regexp.exec("((2+2)*-3)-7)")); //test 349
}

function testRegexpPCRE_343() {
  var regexp = /c|abc/i;
  assertEquals(null, regexp.exec("xyz")); //test 350
}

function testRegexpPCRE_344() {
  var regexp = /c|abc/i;
  assertEquals(null, regexp.exec("xxyzxyzz")); //test 351
}

function testRegexpPCRE_345() {
  var regexp = /c|abc/i;
  assertEquals(null, regexp.exec("*** Failers")); //test 352
}

function testRegexpPCRE_346() {
  var regexp = /c|abc/i;
  assertEquals(null, regexp.exec("xxyzz")); //test 353
}

function testRegexpPCRE_347() {
  var regexp = /c|abc/i;
  assertEquals(null, regexp.exec("xxyzxyzxyzz")); //test 354
}

function testRegexpPCRE_348() {
  var regexp = /c|abc/i;
  assertEquals(null, regexp.exec("<>")); //test 355
}

function testRegexpPCRE_349() {
  var regexp = /c|abc/i;
  assertEquals("abc", regexp.exec("<abcd>").toString()); //test 356
}

function testRegexpPCRE_350() {
  var regexp = /c|abc/i;
  assertEquals("abc", regexp.exec("<abc <123> hij>").toString()); //test 357
}

function testRegexpPCRE_351() {
  var regexp = /c|abc/i;
  assertEquals("abc", regexp.exec("<abc <def> hij>").toString()); //test 358
}

function testRegexpPCRE_352() {
  var regexp = /c|abc/i;
  assertEquals("abc", regexp.exec("<abc<>def>").toString()); //test 359
}

function testRegexpPCRE_353() {
  var regexp = /c|abc/i;
  assertEquals("abc", regexp.exec("<abc<>").toString()); //test 360
}

function testRegexpPCRE_354() {
  var regexp = /c|abc/i;
  assertEquals(null, regexp.exec("*** Failers")); //test 361
}

function testRegexpPCRE_355() {
  var regexp = /c|abc/i;
  assertEquals("abc", regexp.exec("<abc").toString()); //test 362
}

function testRegexpPCRE_356() {
  var regexp = /c|abc/i;
  assertEquals("abc", regexp.exec("abcdefabc").toString()); //test 363
}

function testRegexpPCRE_357() {
  var regexp = /c|abc/i;
  assertEquals(null, regexp.exec("a=a")); //test 364
}

function testRegexpPCRE_358() {
  var regexp = /c|abc/i;
  assertEquals(null, regexp.exec("a=b")); //test 365
}

function testRegexpPCRE_359() {
  var regexp = /c|abc/i;
  assertEquals("c", regexp.exec("a=bc").toString()); //test 366
}

function testRegexpPCRE_360() {
  var regexp = /c|abc/i;
  assertEquals(null, regexp.exec("a=a")); //test 367
}

function testRegexpPCRE_361() {
  var regexp = /c|abc/i;
  assertEquals(null, regexp.exec("a=b")); //test 368
}

function testRegexpPCRE_362() {
  var regexp = /c|abc/i;
  assertEquals("c", regexp.exec("a=bc").toString()); //test 369
}

function testRegexpPCRE_363() {
  var regexp = /c|abc/i;
  assertEquals(null, regexp.exec("abde")); //test 370
}

function testRegexpPCRE_364() {
  var regexp = /c|abc/i;
  assertEquals("c", regexp.exec("acde").toString()); //test 371
}

function testRegexpPCRE_365() {
  var regexp = /c|abc/i;
  assertEquals(null, regexp.exec("1221")); //test 372
}

function testRegexpPCRE_366() {
  var regexp = /c|abc/i;
  assertEquals("c", regexp.exec("Satan, oscillate my metallic sonatas!").toString()); //test 373
}

function testRegexpPCRE_367() {
  var regexp = /c|abc/i;
  assertEquals("c", regexp.exec("A man, a plan, a canal: Panama!").toString()); //test 374
}

function testRegexpPCRE_368() {
  var regexp = /c|abc/i;
  assertEquals(null, regexp.exec("Able was I ere I saw Elba.")); //test 375
}

function testRegexpPCRE_369() {
  var regexp = /c|abc/i;
  assertEquals(null, regexp.exec("*** Failers")); //test 376
}

function testRegexpPCRE_370() {
  var regexp = /c|abc/i;
  assertEquals("c", regexp.exec("The quick brown fox").toString()); //test 377
}

function testRegexpPCRE_371() {
  var regexp = /(a+)*zz/i;
  assertEquals(null, regexp.exec("abcdefgh")); //test 378
}

function testRegexpPCRE_372() {
  var regexp = /(a+)*zz/i;
  assertEquals(null, regexp.exec("abcdefghC1Gtwo")); //test 379
}

function testRegexpPCRE_373() {
  var regexp = /(a+)*zz/i;
  assertEquals(null, regexp.exec("abcdefghConeCtwo")); //test 380
}

function testRegexpPCRE_374() {
  var regexp = /(a+)*zz/i;
  assertEquals(null, regexp.exec("abcdefghCthree")); //test 381
}

function testRegexpPCRE_375() {
  var regexp = /(a+)*zz/i;
  assertEquals("zz,", regexp.exec("zzaaCZ").toString()); //test 382
}

function testRegexpPCRE_376() {
  var regexp = /(a+)*zz/i;
  assertEquals("zz,", regexp.exec("zzaaCA").toString()); //test 383
}

function testRegexpPCRE_377() {
  var regexp = /(a+)*zz/i;
  assertEquals(null, regexp.exec("[10,20,30,5,5,4,4,2,43,23,4234]")); //test 384
}

function testRegexpPCRE_378() {
  var regexp = /(a+)*zz/i;
  assertEquals(null, regexp.exec("*** Failers")); //test 385
}

function testRegexpPCRE_379() {
  var regexp = /(a+)*zz/i;
  assertEquals(null, regexp.exec("[]")); //test 386
}

function testRegexpPCRE_380() {
  var regexp = /(a+)*zz/i;
  assertEquals(null, regexp.exec("[10,20,30,5,5,4,4,2,43,23,4234]")); //test 387
}

function testRegexpPCRE_381() {
  var regexp = /(a+)*zz/i;
  assertEquals(null, regexp.exec("[]")); //test 388
}

function testRegexpPCRE_382() {
  var regexp = /((w\/|-|with)*(free|immediate)*.*?shipping\s*[!.-]*)/i;
  assertEquals(" Baby Bjorn Active Carrier - With free SHIPPING!!, Baby Bjorn Active Carrier - With free SHIPPING!!,,", regexp.exec(" Baby Bjorn Active Carrier - With free SHIPPING!!").toString()); //test 389
}

function testRegexpPCRE_383() {
  var regexp = /((w\/|-|with)*(free|immediate)*.*?shipping\s*[!.-]*)/i;
  assertEquals(" Baby Bjorn Active Carrier - With free SHIPPING!!, Baby Bjorn Active Carrier - With free SHIPPING!!,,", regexp.exec(" Baby Bjorn Active Carrier - With free SHIPPING!!").toString()); //test 390
}

function testRegexpPCRE_384() {
  var regexp = /([ab]{,4}c|xy)/i;
  assertEquals(null, regexp.exec("Note: that { does NOT introduce a quantifier")); //test 391
}

function testRegexpPCRE_385() {
  var regexp = /([ab]{1,4}c|xy){4,5}?123/i;
  assertEquals("aacaacaacaacaac123,aac", regexp.exec("aacaacaacaacaac123").toString()); //test 392
}

function testRegexpPCRE_386() {
  var regexp = /abcde/i;
  assertEquals(null, regexp.exec("abP")); //test 393
}

function testRegexpPCRE_387() {
  var regexp = /abcde/i;
  assertEquals(null, regexp.exec("abcP")); //test 394
}

function testRegexpPCRE_388() {
  var regexp = /abcde/i;
  assertEquals(null, regexp.exec("abcdP")); //test 395
}

function testRegexpPCRE_389() {
  var regexp = /abcde/i;
  assertEquals("abcde", regexp.exec("abcdeP").toString()); //test 396
}

function testRegexpPCRE_390() {
  var regexp = /abcde/i;
  assertEquals(null, regexp.exec("the quick brown abcP")); //test 397
}

function testRegexpPCRE_391() {
  var regexp = /abcde/i;
  assertEquals(null, regexp.exec("** FailersP")); //test 398
}

function testRegexpPCRE_392() {
  var regexp = /abcde/i;
  assertEquals(null, regexp.exec("the quick brown abxyz foxP")); //test 399
}

function testRegexpPCRE_393() {
  var regexp = /abcde/i;
  assertEquals(null, regexp.exec("13/05/04P")); //test 400
}

function testRegexpPCRE_394() {
  var regexp = /abcde/i;
  assertEquals(null, regexp.exec("13/5/2004P")); //test 401
}

function testRegexpPCRE_395() {
  var regexp = /abcde/i;
  assertEquals(null, regexp.exec("02/05/09P")); //test 402
}

function testRegexpPCRE_396() {
  var regexp = /abcde/i;
  assertEquals(null, regexp.exec("1P")); //test 403
}

function testRegexpPCRE_397() {
  var regexp = /abcde/i;
  assertEquals(null, regexp.exec("1/2P")); //test 404
}

function testRegexpPCRE_398() {
  var regexp = /abcde/i;
  assertEquals(null, regexp.exec("1/2/0P")); //test 405
}

function testRegexpPCRE_399() {
  var regexp = /abcde/i;
  assertEquals(null, regexp.exec("1/2/04P")); //test 406
}

function testRegexpPCRE_400() {
  var regexp = /abcde/i;
  assertEquals(null, regexp.exec("0P")); //test 407
}

function testRegexpPCRE_401() {
  var regexp = /abcde/i;
  assertEquals(null, regexp.exec("02/P")); //test 408
}

function testRegexpPCRE_402() {
  var regexp = /abcde/i;
  assertEquals(null, regexp.exec("02/0P")); //test 409
}

function testRegexpPCRE_403() {
  var regexp = /abcde/i;
  assertEquals(null, regexp.exec("02/1P")); //test 410
}

function testRegexpPCRE_404() {
  var regexp = /abcde/i;
  assertEquals(null, regexp.exec("** FailersP")); //test 411
}

function testRegexpPCRE_405() {
  var regexp = /abcde/i;
  assertEquals(null, regexp.exec("P")); //test 412
}

function testRegexpPCRE_406() {
  var regexp = /abcde/i;
  assertEquals(null, regexp.exec("123P")); //test 413
}

function testRegexpPCRE_407() {
  var regexp = /abcde/i;
  assertEquals(null, regexp.exec("33/4/04P")); //test 414
}

function testRegexpPCRE_408() {
  var regexp = /abcde/i;
  assertEquals(null, regexp.exec("3/13/04P")); //test 415
}

function testRegexpPCRE_409() {
  var regexp = /abcde/i;
  assertEquals(null, regexp.exec("0/1/2003P")); //test 416
}

function testRegexpPCRE_410() {
  var regexp = /abcde/i;
  assertEquals(null, regexp.exec("0/P")); //test 417
}

function testRegexpPCRE_411() {
  var regexp = /abcde/i;
  assertEquals(null, regexp.exec("02/0/P")); //test 418
}

function testRegexpPCRE_412() {
  var regexp = /abcde/i;
  assertEquals(null, regexp.exec("02/13P")); //test 419
}

function testRegexpPCRE_413() {
  var regexp = /[abc]?123/i;
  assertEquals("123", regexp.exec("123P").toString()); //test 420
}

function testRegexpPCRE_414() {
  var regexp = /[abc]?123/i;
  assertEquals(null, regexp.exec("aP")); //test 421
}

function testRegexpPCRE_415() {
  var regexp = /[abc]?123/i;
  assertEquals(null, regexp.exec("bP")); //test 422
}

function testRegexpPCRE_416() {
  var regexp = /[abc]?123/i;
  assertEquals(null, regexp.exec("cP")); //test 423
}

function testRegexpPCRE_417() {
  var regexp = /[abc]?123/i;
  assertEquals(null, regexp.exec("c12P")); //test 424
}

function testRegexpPCRE_418() {
  var regexp = /[abc]?123/i;
  assertEquals("c123", regexp.exec("c123P").toString()); //test 425
}

function testRegexpPCRE_419() {
  var regexp = /^(?:\d){3,5}X/i;
  assertEquals(null, regexp.exec("1P")); //test 426
}

function testRegexpPCRE_420() {
  var regexp = /^(?:\d){3,5}X/i;
  assertEquals(null, regexp.exec("123P")); //test 427
}

function testRegexpPCRE_421() {
  var regexp = /^(?:\d){3,5}X/i;
  assertEquals("123X", regexp.exec("123X").toString()); //test 428
}

function testRegexpPCRE_422() {
  var regexp = /^(?:\d){3,5}X/i;
  assertEquals(null, regexp.exec("1234P")); //test 429
}

function testRegexpPCRE_423() {
  var regexp = /^(?:\d){3,5}X/i;
  assertEquals("1234X", regexp.exec("1234X").toString()); //test 430
}

function testRegexpPCRE_424() {
  var regexp = /^(?:\d){3,5}X/i;
  assertEquals(null, regexp.exec("12345P")); //test 431
}

function testRegexpPCRE_425() {
  var regexp = /^(?:\d){3,5}X/i;
  assertEquals("12345X", regexp.exec("12345X").toString()); //test 432
}

function testRegexpPCRE_426() {
  var regexp = /^(?:\d){3,5}X/i;
  assertEquals(null, regexp.exec("*** Failers")); //test 433
}

function testRegexpPCRE_427() {
  var regexp = /^(?:\d){3,5}X/i;
  assertEquals(null, regexp.exec("1X")); //test 434
}

function testRegexpPCRE_428() {
  var regexp = /^(?:\d){3,5}X/i;
  assertEquals(null, regexp.exec("123456P")); //test 435
}

function testRegexpPCRE_429() {
  var regexp = /^(?:\d){3,5}X/i;
  assertEquals(null, regexp.exec("abc")); //test 436
}

function testRegexpPCRE_430() {
  var regexp = /^(?:\d){3,5}X/i;
  assertEquals(null, regexp.exec("** Failers")); //test 437
}

function testRegexpPCRE_431() {
  var regexp = /^(?:\d){3,5}X/i;
  assertEquals(null, regexp.exec("bca")); //test 438
}

function testRegexpPCRE_432() {
  var regexp = /^(?:\d){3,5}X/i;
  assertEquals(null, regexp.exec("abc")); //test 439
}

function testRegexpPCRE_433() {
  var regexp = /^(?:\d){3,5}X/i;
  assertEquals(null, regexp.exec("** Failers")); //test 440
}

function testRegexpPCRE_434() {
  var regexp = /^(?:\d){3,5}X/i;
  assertEquals(null, regexp.exec("bca")); //test 441
}

function testRegexpPCRE_435() {
  var regexp = /^(?:\d){3,5}X/i;
  assertEquals(null, regexp.exec("abc")); //test 442
}

function testRegexpPCRE_436() {
  var regexp = /^(?:\d){3,5}X/i;
  assertEquals(null, regexp.exec("** Failers")); //test 443
}

function testRegexpPCRE_437() {
  var regexp = /^(?:\d){3,5}X/i;
  assertEquals(null, regexp.exec("def")); //test 444
}

function testRegexpPCRE_438() {
  var regexp = /^(?:\d){3,5}X/i;
  assertEquals(null, regexp.exec("abc")); //test 445
}

function testRegexpPCRE_439() {
  var regexp = /^(?:\d){3,5}X/i;
  assertEquals(null, regexp.exec("** Failers")); //test 446
}

function testRegexpPCRE_440() {
  var regexp = /^(?:\d){3,5}X/i;
  assertEquals(null, regexp.exec("def")); //test 447
}

function testRegexpPCRE_441() {
  var regexp = /^(?:\d){3,5}X/i;
  assertEquals(null, regexp.exec("<!DOCTYPE seite SYSTEM \"http://www.lco.lineas.de/xmlCms.dtd\">\n<seite>\n<dokumenteninformation>\n<seitentitel>Partner der LCO</seitentitel>\n<sprache>de</sprache>\n<seitenbeschreibung>Partner der LINEAS Consulting\nGmbH</seitenbeschreibung>\n<schluesselworte>LINEAS Consulting GmbH Hamburg\nPartnerfirmen</schluesselworte>\n<revisit>30 days</revisit>\n<robots>index,follow</robots>\n<menueinformation>\n<aktiv>ja</aktiv>\n<menueposition>3</menueposition>\n<menuetext>Partner</menuetext>\n</menueinformation>\n<lastedited>\n<autor>LCO</autor>\n<firma>LINEAS Consulting</firma>\n<datum>15.10.2003</datum>\n</lastedited>\n</dokumenteninformation>\n<inhalt>\n\n<absatzueberschrift>Die Partnerfirmen der LINEAS Consulting\nGmbH</absatzueberschrift>\n\n<absatz><link ziel=\"http://www.ca.com/\" zielfenster=\"_blank\">\n<bild name=\"logo_ca.gif\" rahmen=\"no\"/></link> <link\nziel=\"http://www.ey.com/\" zielfenster=\"_blank\"><bild\nname=\"logo_euy.gif\" rahmen=\"no\"/></link>\n</absatz>\n\n<absatz><link ziel=\"http://www.cisco.de/\" zielfenster=\"_blank\">\n<bild name=\"logo_cisco.gif\" rahmen=\"ja\"/></link></absatz>\n\n<absatz><link ziel=\"http://www.atelion.de/\"\nzielfenster=\"_blank\"><bild\nname=\"logo_atelion.gif\" rahmen=\"no\"/></link>\n</absatz>\n\n<absatz><link ziel=\"http://www.line-information.de/\"\nzielfenster=\"_blank\">\n<bild name=\"logo_line_information.gif\" rahmen=\"no\"/></link>\n</absatz>\n\n<absatz><bild name=\"logo_aw.gif\" rahmen=\"no\"/></absatz>\n\n<absatz><link ziel=\"http://www.incognis.de/\"\nzielfenster=\"_blank\"><bild\nname=\"logo_incognis.gif\" rahmen=\"no\"/></link></absatz>\n\n<absatz><link ziel=\"http://www.addcraft.com/\"\nzielfenster=\"_blank\"><bild\nname=\"logo_addcraft.gif\" rahmen=\"no\"/></link></absatz>\n\n<absatz><link ziel=\"http://www.comendo.com/\"\nzielfenster=\"_blank\"><bild\nname=\"logo_comendo.gif\" rahmen=\"no\"/></link></absatz>\n\n</inhalt>\n</seite>")); //test 448
}

function testRegexpPCRE_442() {
  var regexp = /line\nbreak/i;
  assertEquals("line\nbreak", regexp.exec("this is a line\nbreak").toString()); //test 449
}

function testRegexpPCRE_443() {
  var regexp = /line\nbreak/i;
  assertEquals("line\nbreak", regexp.exec("line one\nthis is a line\nbreak in the second line").toString()); //test 450
}

function testRegexpPCRE_444() {
  var regexp = /line\nbreak/i;
  assertEquals("line\nbreak", regexp.exec("this is a line\nbreak").toString()); //test 451
}

function testRegexpPCRE_445() {
  var regexp = /line\nbreak/i;
  assertEquals(null, regexp.exec("** Failers")); //test 452
}

function testRegexpPCRE_446() {
  var regexp = /line\nbreak/i;
  assertEquals("line\nbreak", regexp.exec("line one\nthis is a line\nbreak in the second line").toString()); //test 453
}

function testRegexpPCRE_447() {
  var regexp = /line\nbreak/im;
  assertEquals("line\nbreak", regexp.exec("this is a line\nbreak").toString()); //test 454
}

function testRegexpPCRE_448() {
  var regexp = /line\nbreak/im;
  assertEquals(null, regexp.exec("** Failers")); //test 455
}

function testRegexpPCRE_449() {
  var regexp = /line\nbreak/im;
  assertEquals("line\nbreak", regexp.exec("line one\nthis is a line\nbreak in the second line").toString()); //test 456
}

function testRegexpPCRE_450() {
  var regexp = /ab.cd/i;
  assertEquals("ab-cd", regexp.exec("ab-cd").toString()); //test 457
}

function testRegexpPCRE_451() {
  var regexp = /ab.cd/i;
  assertEquals("ab=cd", regexp.exec("ab=cd").toString()); //test 458
}

function testRegexpPCRE_452() {
  var regexp = /ab.cd/i;
  assertEquals(null, regexp.exec("** Failers")); //test 459
}

function testRegexpPCRE_453() {
  var regexp = /ab.cd/i;
  assertEquals(null, regexp.exec("ab\ncd")); //test 460
}

function testRegexpPCRE_454() {
  var regexp = /ab.cd/i;
  assertEquals("ab-cd", regexp.exec("ab-cd").toString()); //test 461
}

function testRegexpPCRE_455() {
  var regexp = /ab.cd/i;
  assertEquals("ab=cd", regexp.exec("ab=cd").toString()); //test 462
}

function testRegexpPCRE_456() {
  var regexp = /ab.cd/i;
  assertEquals(null, regexp.exec("ab\ncd")); //test 463
}

function testRegexpPCRE_457() {
  var regexp = /ab.cd/i;
  assertEquals(null, regexp.exec("AbCd")); //test 464
}

function testRegexpPCRE_458() {
  var regexp = /ab.cd/i;
  assertEquals(null, regexp.exec("** Failers")); //test 465
}

function testRegexpPCRE_459() {
  var regexp = /ab.cd/i;
  assertEquals(null, regexp.exec("abcd")); //test 466
}

function testRegexpPCRE_460() {
  var regexp = /ab.cd/i;
  assertEquals(null, regexp.exec("abcdefghijklAkB")); //test 467
}

function testRegexpPCRE_461() {
  var regexp = /ab.cd/i;
  assertEquals(null, regexp.exec("abcdefghijklAkB")); //test 468
}

function testRegexpPCRE_462() {
  var regexp = /ab.cd/i;
  assertEquals(null, regexp.exec("abcdefghijklAkB")); //test 469
}

function testRegexpPCRE_463() {
  var regexp = /ab.cd/i;
  assertEquals(null, regexp.exec("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")); //test 470
}

function testRegexpPCRE_464() {
  var regexp = /ab.cd/i;
  assertEquals(null, regexp.exec("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")); //test 471
}

function testRegexpPCRE_465() {
  var regexp = /ab.cd/i;
  assertEquals(null, regexp.exec("(this(and)that")); //test 472
}

function testRegexpPCRE_466() {
  var regexp = /ab.cd/i;
  assertEquals(null, regexp.exec("(this(and)that)")); //test 473
}

function testRegexpPCRE_467() {
  var regexp = /ab.cd/i;
  assertEquals(null, regexp.exec("(this(and)that)stuff")); //test 474
}

function testRegexpPCRE_468() {
  var regexp = /ab.cd/i;
  assertEquals(null, regexp.exec("(this(and)that")); //test 475
}

function testRegexpPCRE_469() {
  var regexp = /ab.cd/i;
  assertEquals(null, regexp.exec("(this(and)that)")); //test 476
}

function testRegexpPCRE_470() {
  var regexp = /ab.cd/i;
  assertEquals(null, regexp.exec("(this(and)that")); //test 477
}

function testRegexpPCRE_471() {
  var regexp = /ab.cd/i;
  assertEquals(null, regexp.exec("(this(and)that)")); //test 478
}

function testRegexpPCRE_472() {
  var regexp = /ab.cd/i;
  assertEquals(null, regexp.exec("(this(and)that")); //test 479
}

function testRegexpPCRE_473() {
  var regexp = /ab.cd/i;
  assertEquals(null, regexp.exec("(this(and)that)")); //test 480
}

function testRegexpPCRE_474() {
  var regexp = /ab.cd/i;
  assertEquals(null, regexp.exec("((this))")); //test 481
}

function testRegexpPCRE_475() {
  var regexp = /ab.cd/i;
  assertEquals(null, regexp.exec("(this(and)that")); //test 482
}

function testRegexpPCRE_476() {
  var regexp = /ab.cd/i;
  assertEquals(null, regexp.exec("(this(and)that)")); //test 483
}

function testRegexpPCRE_477() {
  var regexp = /ab.cd/i;
  assertEquals(null, regexp.exec("(this)")); //test 484
}

function testRegexpPCRE_478() {
  var regexp = /ab.cd/i;
  assertEquals(null, regexp.exec("((this))")); //test 485
}

function testRegexpPCRE_479() {
  var regexp = /a(b)c/i;
  assertEquals("abc,b", regexp.exec("abc").toString()); //test 486
}

function testRegexpPCRE_480() {
  var regexp = /a(b)c/i;
  assertEquals("abc,b", regexp.exec("abc").toString()); //test 487
}

function testRegexpPCRE_481() {
  var regexp = /a(b)c/i;
  assertEquals(null, regexp.exec("a1bCA")); //test 488
}

function testRegexpPCRE_482() {
  var regexp = /a(b)c/i;
  assertEquals(null, regexp.exec("a2bCA")); //test 489
}

function testRegexpPCRE_483() {
  var regexp = /Inthisnexttest,Jisnotsetattheouterlevel;consequentlyitisn'tsetinthepattern'soptions;consequentlypcre_get_named_substring()producesarandomvalue./i;
  assertEquals(null, regexp.exec("a bc dCACBCC")); //test 490
}

function testRegexpPCRE_484() {
  var regexp = /Inthisnexttest,Jisnotsetattheouterlevel;consequentlyitisn'tsetinthepattern'soptions;consequentlypcre_get_named_substring()producesarandomvalue./i;
  assertEquals(null, regexp.exec("aabc")); //test 491
}

function testRegexpPCRE_485() {
  var regexp = /Inthisnexttest,Jisnotsetattheouterlevel;consequentlyitisn'tsetinthepattern'soptions;consequentlypcre_get_named_substring()producesarandomvalue./i;
  assertEquals(null, regexp.exec("bc")); //test 492
}

function testRegexpPCRE_486() {
  var regexp = /Inthisnexttest,Jisnotsetattheouterlevel;consequentlyitisn'tsetinthepattern'soptions;consequentlypcre_get_named_substring()producesarandomvalue./i;
  assertEquals(null, regexp.exec("** Failers")); //test 493
}

function testRegexpPCRE_487() {
  var regexp = /Inthisnexttest,Jisnotsetattheouterlevel;consequentlyitisn'tsetinthepattern'soptions;consequentlypcre_get_named_substring()producesarandomvalue./i;
  assertEquals(null, regexp.exec("abc")); //test 494
}

function testRegexpPCRE_488() {
  var regexp = /Inthisnexttest,Jisnotsetattheouterlevel;consequentlyitisn'tsetinthepattern'soptions;consequentlypcre_get_named_substring()producesarandomvalue./i;
  assertEquals(null, regexp.exec("bXaX")); //test 495
}

function testRegexpPCRE_489() {
  var regexp = /Inthisnexttest,Jisnotsetattheouterlevel;consequentlyitisn'tsetinthepattern'soptions;consequentlypcre_get_named_substring()producesarandomvalue./i;
  assertEquals(null, regexp.exec("bbXaaX")); //test 496
}

function testRegexpPCRE_490() {
  var regexp = /Inthisnexttest,Jisnotsetattheouterlevel;consequentlyitisn'tsetinthepattern'soptions;consequentlypcre_get_named_substring()producesarandomvalue./i;
  assertEquals(null, regexp.exec("(b)\\Xa\\X")); //test 497
}

function testRegexpPCRE_491() {
  var regexp = /Inthisnexttest,Jisnotsetattheouterlevel;consequentlyitisn'tsetinthepattern'soptions;consequentlypcre_get_named_substring()producesarandomvalue./i;
  assertEquals(null, regexp.exec("bXXaYYaY")); //test 498
}

function testRegexpPCRE_492() {
  var regexp = /Inthisnexttest,Jisnotsetattheouterlevel;consequentlyitisn'tsetinthepattern'soptions;consequentlypcre_get_named_substring()producesarandomvalue./i;
  assertEquals(null, regexp.exec("bXYaXXaX")); //test 499
}

function testRegexpPCRE_493() {
  var regexp = /Inthisnexttest,Jisnotsetattheouterlevel;consequentlyitisn'tsetinthepattern'soptions;consequentlypcre_get_named_substring()producesarandomvalue./i;
  assertEquals(null, regexp.exec("bXXaYYaY")); //test 500
}

function testRegexpPCRE_494() {
  var regexp = /\s*,\s*/i;
  assertEquals("\x0b,\x0b", regexp.exec("\x0b,\x0b").toString()); //test 501
}

function testRegexpPCRE_495() {
  var regexp = /\s*,\s*/i;
  assertEquals("\x0c,\x0d", regexp.exec("\x0c,\x0d").toString()); //test 502
}

function testRegexpPCRE_496() {
  var regexp = /^abc/im;
  assertEquals("abc", regexp.exec("xyz\nabc").toString()); //test 503
}

function testRegexpPCRE_497() {
  var regexp = /^abc/im;
  assertEquals("abc", regexp.exec("xyz\nabc<lf>").toString()); //test 504
}

function testRegexpPCRE_498() {
  var regexp = /^abc/im;
  assertEquals("abc", regexp.exec("xyz\x0d\nabc<lf>").toString()); //test 505
}

function testRegexpPCRE_499() {
  var regexp = /^abc/im;
  assertEquals("abc", regexp.exec("xyz\x0dabc<cr>").toString()); //test 506
}

function testRegexpPCRE_500() {
  var regexp = /^abc/im;
  assertEquals("abc", regexp.exec("xyz\x0d\nabc<crlf>").toString()); //test 507
}

function testRegexpPCRE_501() {
  var regexp = /^abc/im;
  assertEquals(null, regexp.exec("** Failers")); //test 508
}

function testRegexpPCRE_502() {
  var regexp = /^abc/im;
  assertEquals("abc", regexp.exec("xyz\nabc<cr>").toString()); //test 509
}

function testRegexpPCRE_503() {
  var regexp = /^abc/im;
  assertEquals("abc", regexp.exec("xyz\x0d\nabc<cr>").toString()); //test 510
}

function testRegexpPCRE_504() {
  var regexp = /^abc/im;
  assertEquals("abc", regexp.exec("xyz\nabc<crlf>").toString()); //test 511
}

function testRegexpPCRE_505() {
  var regexp = /^abc/im;
  assertEquals("abc", regexp.exec("xyz\x0dabc<crlf>").toString()); //test 512
}

function testRegexpPCRE_506() {
  var regexp = /^abc/im;
  assertEquals("abc", regexp.exec("xyz\x0dabc<lf>").toString()); //test 513
}

function testRegexpPCRE_507() {
  var regexp = /abc$/im;
  assertEquals("abc", regexp.exec("xyzabc").toString()); //test 514
}

function testRegexpPCRE_508() {
  var regexp = /abc$/im;
  assertEquals("abc", regexp.exec("xyzabc\n").toString()); //test 515
}

function testRegexpPCRE_509() {
  var regexp = /abc$/im;
  assertEquals("abc", regexp.exec("xyzabc\npqr").toString()); //test 516
}

function testRegexpPCRE_510() {
  var regexp = /abc$/im;
  assertEquals("abc", regexp.exec("xyzabc\x0d<cr>").toString()); //test 517
}

function testRegexpPCRE_511() {
  var regexp = /abc$/im;
  assertEquals("abc", regexp.exec("xyzabc\x0dpqr<cr>").toString()); //test 518
}

function testRegexpPCRE_512() {
  var regexp = /abc$/im;
  assertEquals("abc", regexp.exec("xyzabc\x0d\n<crlf>").toString()); //test 519
}

function testRegexpPCRE_513() {
  var regexp = /abc$/im;
  assertEquals("abc", regexp.exec("xyzabc\x0d\npqr<crlf>").toString()); //test 520
}

function testRegexpPCRE_514() {
  var regexp = /abc$/im;
  assertEquals(null, regexp.exec("** Failers")); //test 521
}

function testRegexpPCRE_515() {
  var regexp = /abc$/im;
  assertEquals("abc", regexp.exec("xyzabc\x0d").toString()); //test 522
}

function testRegexpPCRE_516() {
  var regexp = /abc$/im;
  assertEquals("abc", regexp.exec("xyzabc\x0dpqr").toString()); //test 523
}

function testRegexpPCRE_517() {
  var regexp = /abc$/im;
  assertEquals("abc", regexp.exec("xyzabc\x0d\n").toString()); //test 524
}

function testRegexpPCRE_518() {
  var regexp = /abc$/im;
  assertEquals("abc", regexp.exec("xyzabc\x0d\npqr").toString()); //test 525
}

function testRegexpPCRE_519() {
  var regexp = /^abc/im;
  assertEquals("abc", regexp.exec("xyz\x0dabcdef").toString()); //test 526
}

function testRegexpPCRE_520() {
  var regexp = /^abc/im;
  assertEquals("abc", regexp.exec("xyz\nabcdef<lf>").toString()); //test 527
}

function testRegexpPCRE_521() {
  var regexp = /^abc/im;
  assertEquals(null, regexp.exec("** Failers")); //test 528
}

function testRegexpPCRE_522() {
  var regexp = /^abc/im;
  assertEquals("abc", regexp.exec("xyz\nabcdef").toString()); //test 529
}

function testRegexpPCRE_523() {
  var regexp = /^abc/im;
  assertEquals("abc", regexp.exec("xyz\nabcdef").toString()); //test 530
}

function testRegexpPCRE_524() {
  var regexp = /^abc/im;
  assertEquals("abc", regexp.exec("xyz\x0dabcdef<cr>").toString()); //test 531
}

function testRegexpPCRE_525() {
  var regexp = /^abc/im;
  assertEquals(null, regexp.exec("** Failers")); //test 532
}

function testRegexpPCRE_526() {
  var regexp = /^abc/im;
  assertEquals("abc", regexp.exec("xyz\x0dabcdef").toString()); //test 533
}

function testRegexpPCRE_527() {
  var regexp = /^abc/im;
  assertEquals("abc", regexp.exec("xyz\x0d\nabcdef").toString()); //test 534
}

function testRegexpPCRE_528() {
  var regexp = /^abc/im;
  assertEquals("abc", regexp.exec("xyz\x0dabcdef<cr>").toString()); //test 535
}

function testRegexpPCRE_529() {
  var regexp = /^abc/im;
  assertEquals(null, regexp.exec("** Failers")); //test 536
}

function testRegexpPCRE_530() {
  var regexp = /^abc/im;
  assertEquals("abc", regexp.exec("xyz\x0dabcdef").toString()); //test 537
}

function testRegexpPCRE_531() {
  var regexp = /abc/i;
  assertEquals("abc", regexp.exec("xyz\x0dabc<bad>").toString()); //test 538
}

function testRegexpPCRE_532() {
  var regexp = /abc/i;
  assertEquals("abc", regexp.exec("abc").toString()); //test 539
}

function testRegexpPCRE_533() {
  var regexp = /.*/i;
  assertEquals("abc", regexp.exec("abc\ndef").toString()); //test 540
}

function testRegexpPCRE_534() {
  var regexp = /.*/i;
  assertEquals("abc", regexp.exec("abc\x0ddef").toString()); //test 541
}

function testRegexpPCRE_535() {
  var regexp = /.*/i;
  assertEquals("abc", regexp.exec("abc\x0d\ndef").toString()); //test 542
}

function testRegexpPCRE_536() {
  var regexp = /.*/i;
  assertEquals("<cr>abc", regexp.exec("<cr>abc\ndef").toString()); //test 543
}

function testRegexpPCRE_537() {
  var regexp = /.*/i;
  assertEquals("<cr>abc", regexp.exec("<cr>abc\x0ddef").toString()); //test 544
}

function testRegexpPCRE_538() {
  var regexp = /.*/i;
  assertEquals("<cr>abc", regexp.exec("<cr>abc\x0d\ndef").toString()); //test 545
}

function testRegexpPCRE_539() {
  var regexp = /.*/i;
  assertEquals("<crlf>abc", regexp.exec("<crlf>abc\ndef").toString()); //test 546
}

function testRegexpPCRE_540() {
  var regexp = /.*/i;
  assertEquals("<crlf>abc", regexp.exec("<crlf>abc\x0ddef").toString()); //test 547
}

function testRegexpPCRE_541() {
  var regexp = /.*/i;
  assertEquals("<crlf>abc", regexp.exec("<crlf>abc\x0d\ndef").toString()); //test 548
}

function testRegexpPCRE_542() {
  var regexp = /\w+(.)(.)?def/i;
  assertEquals(null, regexp.exec("abc\ndef")); //test 549
}

function testRegexpPCRE_543() {
  var regexp = /\w+(.)(.)?def/i;
  assertEquals(null, regexp.exec("abc\x0ddef")); //test 550
}

function testRegexpPCRE_544() {
  var regexp = /\w+(.)(.)?def/i;
  assertEquals(null, regexp.exec("abc\x0d\ndef")); //test 551
}

function testRegexpPCRE_545() {
  var regexp = /()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()(.(.))/i;
  assertEquals("XY,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,XY,Y", regexp.exec("XYO400").toString()); //test 552
}

function testRegexpPCRE_546() {
  var regexp = /^a+A\d/;
  assertEquals("aaaA5", regexp.exec("aaaA5").toString()); //test 553
}

function testRegexpPCRE_547() {
  var regexp = /^a+A\d/;
  assertEquals(null, regexp.exec("** Failers")); //test 554
}

function testRegexpPCRE_548() {
  var regexp = /^a+A\d/;
  assertEquals(null, regexp.exec("aaaa5")); //test 555
}

function testRegexpPCRE_549() {
  var regexp = /^a*A\d/i;
  assertEquals("aaaA5", regexp.exec("aaaA5").toString()); //test 556
}

function testRegexpPCRE_550() {
  var regexp = /^a*A\d/i;
  assertEquals("aaaa5", regexp.exec("aaaa5").toString()); //test 557
}

function testRegexpPCRE_551() {
  var regexp = /a*[^a]/;
  assertEquals("x", regexp.exec("xyCabcCxyz").toString()); //test 558
}

function testRegexpPCRE_552() {
  var regexp = /a*[^a]/;
  assertEquals("x", regexp.exec("xyCabcCxyz").toString()); //test 559
}

function testRegexpPCRE_553() {
  var regexp = /a*[^a]/;
  assertEquals("b", regexp.exec("bXaX").toString()); //test 560
}

function testRegexpPCRE_554() {
  var regexp = /a*[^a]/;
  assertEquals("b", regexp.exec("bXbX").toString()); //test 561
}

function testRegexpPCRE_555() {
  var regexp = /a*[^a]/;
  assertEquals("*", regexp.exec("** Failers").toString()); //test 562
}

function testRegexpPCRE_556() {
  var regexp = /a*[^a]/;
  assertEquals("aX", regexp.exec("aXaX").toString()); //test 563
}

function testRegexpPCRE_557() {
  var regexp = /a*[^a]/;
  assertEquals("aX", regexp.exec("aXbX").toString()); //test 564
}

function testRegexpPCRE_558() {
  var regexp = /a*[^a]/;
  assertEquals("x", regexp.exec("xx").toString()); //test 565
}

function testRegexpPCRE_559() {
  var regexp = /a*[^a]/;
  assertEquals("x", regexp.exec("xy").toString()); //test 566
}

function testRegexpPCRE_560() {
  var regexp = /a*[^a]/;
  assertEquals("y", regexp.exec("yy").toString()); //test 567
}

function testRegexpPCRE_561() {
  var regexp = /a*[^a]/;
  assertEquals("y", regexp.exec("yx").toString()); //test 568
}

function testRegexpPCRE_562() {
  var regexp = /a*[^a]/;
  assertEquals("x", regexp.exec("xx").toString()); //test 569
}

function testRegexpPCRE_563() {
  var regexp = /a*[^a]/;
  assertEquals("x", regexp.exec("xy").toString()); //test 570
}

function testRegexpPCRE_564() {
  var regexp = /a*[^a]/;
  assertEquals("y", regexp.exec("yy").toString()); //test 571
}

function testRegexpPCRE_565() {
  var regexp = /a*[^a]/;
  assertEquals("y", regexp.exec("yx").toString()); //test 572
}

function testRegexpPCRE_566() {
  var regexp = /a*[^a]/;
  assertEquals("b", regexp.exec("bxay").toString()); //test 573
}

function testRegexpPCRE_567() {
  var regexp = /a*[^a]/;
  assertEquals("b", regexp.exec("bxby").toString()); //test 574
}

function testRegexpPCRE_568() {
  var regexp = /a*[^a]/;
  assertEquals("*", regexp.exec("** Failers").toString()); //test 575
}

function testRegexpPCRE_569() {
  var regexp = /a*[^a]/;
  assertEquals("ax", regexp.exec("axby").toString()); //test 576
}

function testRegexpPCRE_570() {
  var regexp = /a*[^a]/;
  assertEquals("X", regexp.exec("XxXxxx").toString()); //test 577
}

function testRegexpPCRE_571() {
  var regexp = /a*[^a]/;
  assertEquals("X", regexp.exec("XxXyyx").toString()); //test 578
}

function testRegexpPCRE_572() {
  var regexp = /a*[^a]/;
  assertEquals("X", regexp.exec("XxXyxx").toString()); //test 579
}

function testRegexpPCRE_573() {
  var regexp = /a*[^a]/;
  assertEquals("*", regexp.exec("** Failers").toString()); //test 580
}

function testRegexpPCRE_574() {
  var regexp = /a*[^a]/;
  assertEquals("x", regexp.exec("x").toString()); //test 581
}

function testRegexpPCRE_575() {
  var regexp = /a*[^a]/;
  assertEquals("ab", regexp.exec("abcabc").toString()); //test 582
}

function testRegexpPCRE_576() {
  var regexp = /^(?:(?:\1|X)(a|b))+/;
  assertEquals("Xaaa,a", regexp.exec("Xaaa").toString()); //test 583
}

function testRegexpPCRE_577() {
  var regexp = /^(?:(?:\1|X)(a|b))+/;
  assertEquals("Xaba,a", regexp.exec("Xaba").toString()); //test 584
}

function testRegexpPCRE_578() {
  assertThrows(SyntaxError, eval, "var re = /^[a-\\Q\\E]/;"); //test 585
}


function testRegexpPCRE_579() {
  var regexp = /^[a\Q]bc\E]/;
  assertEquals(null, regexp.exec("(xy)x")); //test 586
}

function testRegexpPCRE_580() {
  var regexp = /^[a\Q]bc\E]/;
  assertEquals(null, regexp.exec("1221")); //test 587
}

function testRegexpPCRE_581() {
  var regexp = /^[a\Q]bc\E]/;
  assertEquals(null, regexp.exec("Satan, oscillate my metallic sonatas!")); //test 588
}

function testRegexpPCRE_582() {
  var regexp = /^[a\Q]bc\E]/;
  assertEquals(null, regexp.exec("A man, a plan, a canal: Panama!")); //test 589
}

function testRegexpPCRE_583() {
  var regexp = /^[a\Q]bc\E]/;
  assertEquals(null, regexp.exec("Able was I ere I saw Elba.")); //test 590
}

function testRegexpPCRE_584() {
  var regexp = /^[a\Q]bc\E]/;
  assertEquals(null, regexp.exec("*** Failers")); //test 591
}

function testRegexpPCRE_585() {
  var regexp = /^[a\Q]bc\E]/;
  assertEquals(null, regexp.exec("The quick brown fox")); //test 592
}

function testRegexpPCRE_586() {
  var regexp = /(?=(\w+))\1:/i;
  assertEquals("abcd:,abcd", regexp.exec("abcd:").toString()); //test 593
}

function testRegexpPCRE_587() {
  var regexp = /(?=(\w+))\1:/i;
  assertEquals("abcd:,abcd", regexp.exec("abcd:").toString()); //test 594
}

function testRegexpPCRE_588() {
  var regexp = /(?=(\w+))\1:/i;
  assertEquals("a:,a", regexp.exec("a:aaxyz").toString()); //test 595
}

function testRegexpPCRE_589() {
  var regexp = /(?=(\w+))\1:/i;
  assertEquals("ab:,ab", regexp.exec("ab:ababxyz").toString()); //test 596
}

function testRegexpPCRE_590() {
  var regexp = /(?=(\w+))\1:/i;
  assertEquals(null, regexp.exec("** Failers")); //test 597
}

function testRegexpPCRE_591() {
  var regexp = /(?=(\w+))\1:/i;
  assertEquals("a:,a", regexp.exec("a:axyz").toString()); //test 598
}

function testRegexpPCRE_592() {
  var regexp = /(?=(\w+))\1:/i;
  assertEquals("ab:,ab", regexp.exec("ab:abxyz").toString()); //test 599
}

function testRegexpPCRE_593() {
  var regexp = /(?=(\w+))\1:/i;
  assertEquals(null, regexp.exec("abd")); //test 600
}

function testRegexpPCRE_594() {
  var regexp = /(?=(\w+))\1:/i;
  assertEquals(null, regexp.exec("ce")); //test 601
}

function testRegexpPCRE_595() {
  var regexp = /(?=(\w+))\1:/i;
  assertEquals(null, regexp.exec("abcabc1Xabc2XabcXabcabc")); //test 602
}

function testRegexpPCRE_596() {
  var regexp = /(?=(\w+))\1:/i;
  assertEquals(null, regexp.exec("abcabc1Xabc2XabcXabcabc")); //test 603
}

function testRegexpPCRE_597() {
  var regexp = /(?=(\w+))\1:/i;
  assertEquals(null, regexp.exec("abcabc1Xabc2XabcXabcabc")); //test 604
}

function testRegexpPCRE_598() {
  var regexp = /(?=(\w+))\1:/i;
  assertEquals(null, regexp.exec("abcd")); //test 605
}

function testRegexpPCRE_599() {
  var regexp = /(?=(\w+))\1:/i;
  assertEquals(null, regexp.exec("metcalfe 33")); //test 606
}

function testRegexpPCRE_600() {
  var regexp = /^a.b/;
  assertEquals(null, regexp.exec("a\x0db")); //test 607
}

function testRegexpPCRE_601() {
  var regexp = /^a.b/;
  assertEquals(null, regexp.exec("a\nb<cr>")); //test 608
}

function testRegexpPCRE_602() {
  var regexp = /^a.b/;
  assertEquals("a\x85b", regexp.exec("a\x85b<anycrlf> ").toString()); //test 609
}

function testRegexpPCRE_603() {
  var regexp = /^a.b/;
  assertEquals(null, regexp.exec("** Failers")); //test 610
}

function testRegexpPCRE_604() {
  var regexp = /^a.b/;
  assertEquals(null, regexp.exec("a\nb")); //test 611
}

function testRegexpPCRE_605() {
  var regexp = /^a.b/;
  assertEquals(null, regexp.exec("a\nb<any>")); //test 612
}

function testRegexpPCRE_606() {
  var regexp = /^a.b/;
  assertEquals(null, regexp.exec("a\x0db<cr>")); //test 613
}

function testRegexpPCRE_607() {
  var regexp = /^a.b/;
  assertEquals(null, regexp.exec("a\x0db<any>")); //test 614
}

function testRegexpPCRE_608() {
  var regexp = /^a.b/;
  assertEquals("a\x85b", regexp.exec("a\x85b<any> ").toString()); //test 615
}

function testRegexpPCRE_609() {
  var regexp = /^a.b/;
  assertEquals(null, regexp.exec("a\x0db<anycrlf>")); //test 616
}

function testRegexpPCRE_610() {
  var regexp = /^abc./mg;
  assertEquals("abc1", regexp.exec("abc1 \nabc2 \x0babc3xx \x0cabc4 \x0dabc5xx \x0d\nabc6 \x85abc7 JUNK").toString()); //test 617
}

function testRegexpPCRE_611() {
  var regexp = /abc.$/mg;
  assertEquals("abc1", regexp.exec("abc1\n abc2\x0b abc3\x0c abc4\x0d abc5\x0d\n abc6\x85 abc7 abc9").toString()); //test 618
}

function testRegexpPCRE_612() {
  var regexp = /^a\Rb/i;
  assertEquals(null, regexp.exec("a\nb")); //test 619
}

function testRegexpPCRE_613() {
  var regexp = /^a\Rb/i;
  assertEquals(null, regexp.exec("a\x0db")); //test 620
}

function testRegexpPCRE_614() {
  var regexp = /^a\Rb/i;
  assertEquals(null, regexp.exec("a\x0d\nb")); //test 621
}

function testRegexpPCRE_615() {
  var regexp = /^a\Rb/i;
  assertEquals(null, regexp.exec("a\x0bb")); //test 622
}

function testRegexpPCRE_616() {
  var regexp = /^a\Rb/i;
  assertEquals(null, regexp.exec("a\x0cb")); //test 623
}

function testRegexpPCRE_617() {
  var regexp = /^a\Rb/i;
  assertEquals(null, regexp.exec("a\x85b")); //test 624
}

function testRegexpPCRE_618() {
  var regexp = /^a\Rb/i;
  assertEquals(null, regexp.exec("** Failers")); //test 625
}

function testRegexpPCRE_619() {
  var regexp = /^a\Rb/i;
  assertEquals(null, regexp.exec("a\n\x0db")); //test 626
}

function testRegexpPCRE_620() {
  var regexp = /^a\R*b/i;
  assertEquals("ab", regexp.exec("ab").toString()); //test 627
}

function testRegexpPCRE_621() {
  var regexp = /^a\R*b/i;
  assertEquals(null, regexp.exec("a\nb")); //test 628
}

function testRegexpPCRE_622() {
  var regexp = /^a\R*b/i;
  assertEquals(null, regexp.exec("a\x0db")); //test 629
}

function testRegexpPCRE_623() {
  var regexp = /^a\R*b/i;
  assertEquals(null, regexp.exec("a\x0d\nb")); //test 630
}

function testRegexpPCRE_624() {
  var regexp = /^a\R*b/i;
  assertEquals(null, regexp.exec("a\x0bb")); //test 631
}

function testRegexpPCRE_625() {
  var regexp = /^a\R*b/i;
  assertEquals(null, regexp.exec("a\x0cb")); //test 632
}

function testRegexpPCRE_626() {
  var regexp = /^a\R*b/i;
  assertEquals(null, regexp.exec("a\x85b")); //test 633
}

function testRegexpPCRE_627() {
  var regexp = /^a\R*b/i;
  assertEquals(null, regexp.exec("a\n\x0db")); //test 634
}

function testRegexpPCRE_628() {
  var regexp = /^a\R*b/i;
  assertEquals(null, regexp.exec("a\n\x0d\x85\x0cb")); //test 635
}

function testRegexpPCRE_629() {
  var regexp = /^a\R+b/i;
  assertEquals(null, regexp.exec("a\nb")); //test 636
}

function testRegexpPCRE_630() {
  var regexp = /^a\R+b/i;
  assertEquals(null, regexp.exec("a\x0db")); //test 637
}

function testRegexpPCRE_631() {
  var regexp = /^a\R+b/i;
  assertEquals(null, regexp.exec("a\x0d\nb")); //test 638
}

function testRegexpPCRE_632() {
  var regexp = /^a\R+b/i;
  assertEquals(null, regexp.exec("a\x0bb")); //test 639
}

function testRegexpPCRE_633() {
  var regexp = /^a\R+b/i;
  assertEquals(null, regexp.exec("a\x0cb")); //test 640
}

function testRegexpPCRE_634() {
  var regexp = /^a\R+b/i;
  assertEquals(null, regexp.exec("a\x85b")); //test 641
}

function testRegexpPCRE_635() {
  var regexp = /^a\R+b/i;
  assertEquals(null, regexp.exec("a\n\x0db")); //test 642
}

function testRegexpPCRE_636() {
  var regexp = /^a\R+b/i;
  assertEquals(null, regexp.exec("a\n\x0d\x85\x0cb")); //test 643
}

function testRegexpPCRE_637() {
  var regexp = /^a\R+b/i;
  assertEquals(null, regexp.exec("** Failers")); //test 644
}

function testRegexpPCRE_638() {
  var regexp = /^a\R+b/i;
  assertEquals(null, regexp.exec("ab")); //test 645
}

function testRegexpPCRE_639() {
  var regexp = /^a\R{1,3}b/i;
  assertEquals(null, regexp.exec("a\nb")); //test 646
}

function testRegexpPCRE_640() {
  var regexp = /^a\R{1,3}b/i;
  assertEquals(null, regexp.exec("a\n\x0db")); //test 647
}

function testRegexpPCRE_641() {
  var regexp = /^a\R{1,3}b/i;
  assertEquals(null, regexp.exec("a\n\x0d\x85b")); //test 648
}

function testRegexpPCRE_642() {
  var regexp = /^a\R{1,3}b/i;
  assertEquals(null, regexp.exec("a\x0d\n\x0d\nb")); //test 649
}

function testRegexpPCRE_643() {
  var regexp = /^a\R{1,3}b/i;
  assertEquals(null, regexp.exec("a\x0d\n\x0d\n\x0d\nb")); //test 650
}

function testRegexpPCRE_644() {
  var regexp = /^a\R{1,3}b/i;
  assertEquals(null, regexp.exec("a\n\x0d\n\x0db")); //test 651
}

function testRegexpPCRE_645() {
  var regexp = /^a\R{1,3}b/i;
  assertEquals(null, regexp.exec("a\n\n\x0d\nb")); //test 652
}

function testRegexpPCRE_646() {
  var regexp = /^a\R{1,3}b/i;
  assertEquals(null, regexp.exec("** Failers")); //test 653
}

function testRegexpPCRE_647() {
  var regexp = /^a\R{1,3}b/i;
  assertEquals(null, regexp.exec("a\n\n\n\x0db")); //test 654
}

function testRegexpPCRE_648() {
  var regexp = /^a\R{1,3}b/i;
  assertEquals(null, regexp.exec("a\x0d")); //test 655
}

function testRegexpPCRE_649() {
  var regexp = /^a[\R]b/i;
  assertEquals("aRb", regexp.exec("aRb").toString()); //test 656
}

function testRegexpPCRE_650() {
  var regexp = /^a[\R]b/i;
  assertEquals(null, regexp.exec("** Failers")); //test 657
}

function testRegexpPCRE_651() {
  var regexp = /^a[\R]b/i;
  assertEquals(null, regexp.exec("a\nb")); //test 658
}

function testRegexpPCRE_652() {
  var regexp = /^a[\R]b/i;
  assertEquals(null, regexp.exec("abcPXP123")); //test 659
}

function testRegexpPCRE_653() {
  var regexp = /^a[\R]b/i;
  assertEquals(null, regexp.exec("abcPXP123")); //test 660
}

function testRegexpPCRE_654() {
  var regexp = /^a[\R]b/i;
  assertEquals(null, regexp.exec("1.2.3.4")); //test 661
}

function testRegexpPCRE_655() {
  var regexp = /^a[\R]b/i;
  assertEquals(null, regexp.exec("131.111.10.206")); //test 662
}

function testRegexpPCRE_656() {
  var regexp = /^a[\R]b/i;
  assertEquals(null, regexp.exec("10.0.0.0")); //test 663
}

function testRegexpPCRE_657() {
  var regexp = /^a[\R]b/i;
  assertEquals(null, regexp.exec("** Failers")); //test 664
}

function testRegexpPCRE_658() {
  var regexp = /^a[\R]b/i;
  assertEquals(null, regexp.exec("10.6")); //test 665
}

function testRegexpPCRE_659() {
  var regexp = /^a[\R]b/i;
  assertEquals(null, regexp.exec("455.3.4.5")); //test 666
}

function testRegexpPCRE_660() {
  var regexp = /^a[\R]b/i;
  assertEquals(null, regexp.exec("1.2.3.4")); //test 667
}

function testRegexpPCRE_661() {
  var regexp = /^a[\R]b/i;
  assertEquals(null, regexp.exec("131.111.10.206")); //test 668
}

function testRegexpPCRE_662() {
  var regexp = /^a[\R]b/i;
  assertEquals(null, regexp.exec("10.0.0.0")); //test 669
}

function testRegexpPCRE_663() {
  var regexp = /^a[\R]b/i;
  assertEquals(null, regexp.exec("** Failers")); //test 670
}

function testRegexpPCRE_664() {
  var regexp = /^a[\R]b/i;
  assertEquals(null, regexp.exec("10.6")); //test 671
}

function testRegexpPCRE_665() {
  var regexp = /^a[\R]b/i;
  assertEquals(null, regexp.exec("455.3.4.5")); //test 672
}

function testRegexpPCRE_666() {
  var regexp = /^a[\R]b/i;
  assertEquals(null, regexp.exec("123axbaxbaxbx456")); //test 673
}

function testRegexpPCRE_667() {
  var regexp = /^a[\R]b/i;
  assertEquals(null, regexp.exec("123axbaxbaxb456")); //test 674
}

function testRegexpPCRE_668() {
  var regexp = /^a[\R]b/i;
  assertEquals(null, regexp.exec("123axbaxbaxbx456")); //test 675
}

function testRegexpPCRE_669() {
  var regexp = /^a[\R]b/i;
  assertEquals(null, regexp.exec("123axbaxbaxbx456")); //test 676
}

function testRegexpPCRE_670() {
  var regexp = /^a[\R]b/i;
  assertEquals(null, regexp.exec("123axbaxbaxbx456")); //test 677
}

function testRegexpPCRE_671() {
  var regexp = /^(a(b))\1\g1\g{1}\g-1\g{-1}\g{-02}Z/;
  assertEquals(null, regexp.exec("ababababbbabZXXXX")); //test 678
}

function testRegexpPCRE_672() {
  var regexp = /^a.b/;
  assertEquals(null, regexp.exec("a\x0db")); //test 679
}

function testRegexpPCRE_673() {
  var regexp = /^a.b/;
  assertEquals(null, regexp.exec("*** Failers")); //test 680
}

function testRegexpPCRE_674() {
  var regexp = /^a.b/;
  assertEquals(null, regexp.exec("a\nb")); //test 681
}

function testRegexpPCRE_675() {
  var regexp = /.+foo/;
  assertEquals("afoo", regexp.exec("afoo").toString()); //test 682
}

function testRegexpPCRE_676() {
  var regexp = /.+foo/;
  assertEquals(null, regexp.exec("** Failers")); //test 683
}

function testRegexpPCRE_677() {
  var regexp = /.+foo/;
  assertEquals(null, regexp.exec("\x0d\nfoo")); //test 684
}

function testRegexpPCRE_678() {
  var regexp = /.+foo/;
  assertEquals(null, regexp.exec("\nfoo")); //test 685
}

function testRegexpPCRE_679() {
  var regexp = /.+foo/;
  assertEquals("afoo", regexp.exec("afoo").toString()); //test 686
}

function testRegexpPCRE_680() {
  var regexp = /.+foo/;
  assertEquals(null, regexp.exec("\nfoo")); //test 687
}

function testRegexpPCRE_681() {
  var regexp = /.+foo/;
  assertEquals(null, regexp.exec("** Failers")); //test 688
}

function testRegexpPCRE_682() {
  var regexp = /.+foo/;
  assertEquals(null, regexp.exec("\x0d\nfoo")); //test 689
}

function testRegexpPCRE_683() {
  var regexp = /.+foo/;
  assertEquals("afoo", regexp.exec("afoo").toString()); //test 690
}

function testRegexpPCRE_684() {
  var regexp = /.+foo/;
  assertEquals(null, regexp.exec("** Failers")); //test 691
}

function testRegexpPCRE_685() {
  var regexp = /.+foo/;
  assertEquals(null, regexp.exec("\nfoo")); //test 692
}

function testRegexpPCRE_686() {
  var regexp = /.+foo/;
  assertEquals(null, regexp.exec("\x0d\nfoo")); //test 693
}

function testRegexpPCRE_687() {
  var regexp = /.+foo/;
  assertEquals("afoo", regexp.exec("afoo").toString()); //test 694
}

function testRegexpPCRE_688() {
  var regexp = /.+foo/;
  assertEquals(null, regexp.exec("\x0d\nfoo")); //test 695
}

function testRegexpPCRE_689() {
  var regexp = /.+foo/;
  assertEquals(null, regexp.exec("\nfoo")); //test 696
}

function testRegexpPCRE_690() {
  var regexp = /^$/mg;
  assertEquals("", regexp.exec("abc\x0d\x0dxyz").toString()); //test 697
  assertEquals("", regexp.exec("abc\n\x0dxyz  ").toString()); //test 698
  assertEquals(null, regexp.exec("** Failers ")); //test 699
  assertEquals("", regexp.exec("abc\x0d\nxyz").toString()); //test 700
  assertEquals("", regexp.exec("abc\x0d\n\x0d\n").toString()); //test 701
  assertEquals("", regexp.exec("abc\x0d\n\x0d\n").toString()); //test 702
  assertEquals("", regexp.exec("abc\x0d\n\x0d\n").toString()); //test 703
}

function testRegexpPCRE_691() {
  var regexp = /abc.$/mg;
  assertEquals("abc1", regexp.exec("abc1\n abc2\x0b abc3\x0c abc4\x0d abc5\x0d\n abc6\x85 abc9").toString()); //test 704
}

function testRegexpPCRE_692() {
  var regexp = /^X/m;
  assertEquals("X", regexp.exec("XABC").toString()); //test 705
}

function testRegexpPCRE_693() {
  var regexp = /^X/m;
  assertEquals(null, regexp.exec("** Failers ")); //test 706
}

function testRegexpPCRE_694() {
  var regexp = /^X/m;
  assertEquals("X", regexp.exec("XABCB").toString()); //test 707
}

function testRegexpPCRE_695() {
  var regexp = /^X/m;
  assertEquals(null, regexp.exec("abc")); //test 708
}

function testRegexpPCRE_696() {
  var regexp = /^X/m;
  assertEquals(null, regexp.exec("xyabcabc")); //test 709
}

function testRegexpPCRE_697() {
  var regexp = /^X/m;
  assertEquals(null, regexp.exec("** Failers")); //test 710
}

function testRegexpPCRE_698() {
  var regexp = /^X/m;
  assertEquals(null, regexp.exec("xyabc  ")); //test 711
}

function testRegexpPCRE_699() {
  var regexp = /^X/m;
  assertEquals(null, regexp.exec("abcX")); //test 712
}

function testRegexpPCRE_700() {
  var regexp = /^X/m;
  assertEquals(null, regexp.exec("Y")); //test 713
}

function testRegexpPCRE_701() {
  var regexp = /^X/m;
  assertEquals(null, regexp.exec("** Failers")); //test 714
}

function testRegexpPCRE_702() {
  var regexp = /^X/m;
  assertEquals(null, regexp.exec("abcY   ")); //test 715
}

function testRegexpPCRE_703() {
  var regexp = /^X/m;
  assertEquals(null, regexp.exec("YabcXabc")); //test 716
}

function testRegexpPCRE_704() {
  var regexp = /^X/m;
  assertEquals(null, regexp.exec("YabcXabcXabc")); //test 717
}

function testRegexpPCRE_705() {
  var regexp = /^X/m;
  assertEquals(null, regexp.exec("** Failers")); //test 718
}

function testRegexpPCRE_706() {
  var regexp = /^X/m;
  assertEquals("X", regexp.exec("XabcXabc  ").toString()); //test 719
}

function testRegexpPCRE_707() {
  var regexp = /^X/m;
  assertEquals(null, regexp.exec("Y!")); //test 720
}

function testRegexpPCRE_708() {
  assertThrows(SyntaxError, eval, "var re = /(ab|c)(?-1)/;"); //test 721
}


function testRegexpPCRE_709() {
  assertThrows(SyntaxError, eval, "var re = /x(?-0)y/;"); //test 722
}


function testRegexpPCRE_710() {
  assertThrows(SyntaxError, eval, "var re = /x(?-1)y/;"); //test 723
}


function testRegexpPCRE_711() {
  var regexp = /(foo)\Kbar/;
  assertEquals(null, regexp.exec("foobar")); //test 724
}

function testRegexpPCRE_712() {
  var regexp = /(foo)(\Kbar|baz)/;
  assertEquals(null, regexp.exec("foobar")); //test 725
}

function testRegexpPCRE_713() {
  var regexp = /(foo)(\Kbar|baz)/;
  assertEquals("foobaz,foo,baz", regexp.exec("foobaz ").toString()); //test 726
}

function testRegexpPCRE_714() {
  var regexp = /(foo\Kbar)baz/;
  assertEquals(null, regexp.exec("foobarbaz")); //test 727
}

function testRegexpPCRE_715() {
  var regexp = /(foo\Kbar)baz/;
  assertEquals(null, regexp.exec("tom-tom")); //test 728
}

function testRegexpPCRE_716() {
  var regexp = /(foo\Kbar)baz/;
  assertEquals(null, regexp.exec("bon-bon ")); //test 729
}

function testRegexpPCRE_717() {
  var regexp = /(foo\Kbar)baz/;
  assertEquals(null, regexp.exec("** Failers")); //test 730
}

function testRegexpPCRE_718() {
  var regexp = /(foo\Kbar)baz/;
  assertEquals(null, regexp.exec("tom-bon  ")); //test 731
}

function testRegexpPCRE_719() {
  var regexp = /(foo\Kbar)baz/;
  assertEquals(null, regexp.exec("tom-tom")); //test 732
}

function testRegexpPCRE_720() {
  var regexp = /(foo\Kbar)baz/;
  assertEquals(null, regexp.exec("bon-bon ")); //test 733
}

function testRegexpPCRE_721() {
  assertThrows(SyntaxError, eval, "var re = /(?|(abc)|(xyz))/;"); //test 734
}


function testRegexpPCRE_722() {
  assertThrows(SyntaxError, eval, "var re = /(x)(?|(abc)|(xyz))(x)/;"); //test 735
}


function testRegexpPCRE_723() {
  var regexp = /\g{A/;
  assertEquals(null, regexp.exec("xabcx")); //test 736
}

function testRegexpPCRE_724() {
  var regexp = /\g{A/;
  assertEquals(null, regexp.exec("xxyzx ")); //test 737
}

function testRegexpPCRE_725() {
  var regexp = /\g{A/;
  assertEquals(null, regexp.exec("xabcpqrx")); //test 738
}

function testRegexpPCRE_726() {
  var regexp = /\g{A/;
  assertEquals(null, regexp.exec("xxyzx ")); //test 739
}

function testRegexpPCRE_727() {
  var regexp = /\g{A/;
  assertEquals(null, regexp.exec("abcabc")); //test 740
}

function testRegexpPCRE_728() {
  var regexp = /\g{A/;
  assertEquals(null, regexp.exec("xyzxyz ")); //test 741
}

function testRegexpPCRE_729() {
  var regexp = /\g{A/;
  assertEquals(null, regexp.exec("** Failers")); //test 742
}

function testRegexpPCRE_730() {
  var regexp = /\g{A/;
  assertEquals(null, regexp.exec("abcxyz")); //test 743
}

function testRegexpPCRE_731() {
  var regexp = /\g{A/;
  assertEquals(null, regexp.exec("xyzabc   ")); //test 744
}

function testRegexpPCRE_732() {
  var regexp = /\g{A/;
  assertEquals(null, regexp.exec("abcabc")); //test 745
}

function testRegexpPCRE_733() {
  var regexp = /\g{A/;
  assertEquals(null, regexp.exec("xyzabc ")); //test 746
}

function testRegexpPCRE_734() {
  var regexp = /\g{A/;
  assertEquals(null, regexp.exec("** Failers ")); //test 747
}

function testRegexpPCRE_735() {
  var regexp = /\g{A/;
  assertEquals(null, regexp.exec("xyzxyz ")); //test 748
}

function testRegexpPCRE_736() {
  assertThrows(SyntaxError, eval, "var re = /(x)(?|(abc)(pqr)|(xyz))(x)/;"); //test 749
}


function testRegexpPCRE_737() {
  assertThrows(SyntaxError, eval, "var re = /(?|(abc)|(xyz))\\1/;"); //test 750
}


function testRegexpPCRE_738() {
  var regexp = /\H\h\V\v/;
  assertEquals(null, regexp.exec("X X\n")); //test 751
}

function testRegexpPCRE_739() {
  var regexp = /\H\h\V\v/;
  assertEquals(null, regexp.exec("X\x09X\x0b")); //test 752
}

function testRegexpPCRE_740() {
  var regexp = /\H\h\V\v/;
  assertEquals(null, regexp.exec("** Failers")); //test 753
}

function testRegexpPCRE_741() {
  var regexp = /\H\h\V\v/;
  assertEquals(null, regexp.exec("\xa0 X\n   ")); //test 754
}

function testRegexpPCRE_742() {
  var regexp = /\H*\h+\V?\v{3,4}/;
  assertEquals(null, regexp.exec("\x09 \xa0X\n\x0b\x0c\x0d\n")); //test 755
}

function testRegexpPCRE_743() {
  var regexp = /\H*\h+\V?\v{3,4}/;
  assertEquals(null, regexp.exec("\x09 \xa0\n\x0b\x0c\x0d\n")); //test 756
}

function testRegexpPCRE_744() {
  var regexp = /\H*\h+\V?\v{3,4}/;
  assertEquals(null, regexp.exec("\x09 \xa0\n\x0b\x0c")); //test 757
}

function testRegexpPCRE_745() {
  var regexp = /\H*\h+\V?\v{3,4}/;
  assertEquals(null, regexp.exec("** Failers ")); //test 758
}

function testRegexpPCRE_746() {
  var regexp = /\H*\h+\V?\v{3,4}/;
  assertEquals(null, regexp.exec("\x09 \xa0\n\x0b")); //test 759
}

function testRegexpPCRE_747() {
  var regexp = /\H*\h+\V?\v{3,4}/;
  assertEquals(null, regexp.exec(" ")); //test 760
}

function testRegexpPCRE_748() {
  var regexp = /\H{3,4}/;
  assertEquals(null, regexp.exec("XY  ABCDE")); //test 761
}

function testRegexpPCRE_749() {
  var regexp = /\H{3,4}/;
  assertEquals(null, regexp.exec("XY  PQR ST ")); //test 762
}

function testRegexpPCRE_750() {
  var regexp = /.\h{3,4}./;
  assertEquals(null, regexp.exec("XY  AB    PQRS")); //test 763
}

function testRegexpPCRE_751() {
  var regexp = /\h*X\h?\H+Y\H?Z/;
  assertEquals(null, regexp.exec(">XNNNYZ")); //test 764
}

function testRegexpPCRE_752() {
  var regexp = /\h*X\h?\H+Y\H?Z/;
  assertEquals(null, regexp.exec(">  X NYQZ")); //test 765
}

function testRegexpPCRE_753() {
  var regexp = /\h*X\h?\H+Y\H?Z/;
  assertEquals(null, regexp.exec("** Failers")); //test 766
}

function testRegexpPCRE_754() {
  var regexp = /\h*X\h?\H+Y\H?Z/;
  assertEquals(null, regexp.exec(">XYZ   ")); //test 767
}

function testRegexpPCRE_755() {
  var regexp = /\h*X\h?\H+Y\H?Z/;
  assertEquals(null, regexp.exec(">  X NY Z")); //test 768
}

function testRegexpPCRE_756() {
  var regexp = /\v*X\v?Y\v+Z\V*\x0a\V+\x0b\V{2,3}\x0c/;
  assertEquals(null, regexp.exec(">XY\nZ\nA\x0bNN\x0c")); //test 769
}

function testRegexpPCRE_757() {
  var regexp = /\v*X\v?Y\v+Z\V*\x0a\V+\x0b\V{2,3}\x0c/;
  assertEquals(null, regexp.exec(">\n\x0dX\nY\n\x0bZZZ\nAAA\x0bNNN\x0c")); //test 770
}

function testRegexpPCRE_758() {
  var regexp = /[\h]/;
  assertEquals(null, regexp.exec(">\x09<")); //test 771
}

function testRegexpPCRE_759() {
  var regexp = /[\h]+/;
  assertEquals(null, regexp.exec(">\x09 \xa0<")); //test 772
}

function testRegexpPCRE_760() {
  var regexp = /[\x0a\V]/;
  assertEquals(null, regexp.exec("** Failers")); //test 773
}

function testRegexpPCRE_761() {
  var regexp = /[\x0a\V]/;
  assertEquals(null, regexp.exec("XXXX")); //test 774
}

function testRegexpPCRE_762() {
  var regexp = /\H+\hY/;
  assertEquals(null, regexp.exec("XXXX Y ")); //test 775
}

function testRegexpPCRE_763() {
  var regexp = /[\Q\E^]AAA/;
  assertEquals(null, regexp.exec("aaaaaa")); //test 776
}

function testRegexpPCRE_764() {
  var regexp = /[\Q\E^]AAA/;
  assertEquals(null, regexp.exec("aaabccc")); //test 777
}

function testRegexpPCRE_765() {
  var regexp = /[\Q\E^]AAA/;
  assertEquals(null, regexp.exec("aaabccc")); //test 778
}

function testRegexpPCRE_766() {
  var regexp = /[\Q\E^]AAA/;
  assertEquals(null, regexp.exec("aaabccc")); //test 779
}

function testRegexpPCRE_767() {
  var regexp = /[\Q\E^]AAA/;
  assertEquals(null, regexp.exec("aaabcccaaabccc")); //test 780
}

function testRegexpPCRE_768() {
  var regexp = /[\Q\E^]AAA/;
  assertEquals(null, regexp.exec("aaaxxxxxx")); //test 781
}

function testRegexpPCRE_769() {
  var regexp = /[\Q\E^]AAA/;
  assertEquals(null, regexp.exec("aaa++++++ ")); //test 782
}

function testRegexpPCRE_770() {
  var regexp = /[\Q\E^]AAA/;
  assertEquals(null, regexp.exec("bbbxxxxx")); //test 783
}

function testRegexpPCRE_771() {
  var regexp = /[\Q\E^]AAA/;
  assertEquals(null, regexp.exec("bbb+++++ ")); //test 784
}

function testRegexpPCRE_772() {
  var regexp = /[\Q\E^]AAA/;
  assertEquals(null, regexp.exec("cccxxxx")); //test 785
}

function testRegexpPCRE_773() {
  var regexp = /[\Q\E^]AAA/;
  assertEquals(null, regexp.exec("ccc++++ ")); //test 786
}

function testRegexpPCRE_774() {
  var regexp = /[\Q\E^]AAA/;
  assertEquals(null, regexp.exec("dddddddd   ")); //test 787
}

function testRegexpPCRE_775() {
  var regexp = /[\Q\E^]AAA/;
  assertEquals(null, regexp.exec("aaaxxxxxx")); //test 788
}

function testRegexpPCRE_776() {
  var regexp = /[\Q\E^]AAA/;
  assertEquals(null, regexp.exec("aaa++++++ ")); //test 789
}

function testRegexpPCRE_777() {
  var regexp = /[\Q\E^]AAA/;
  assertEquals(null, regexp.exec("bbbxxxxx")); //test 790
}

function testRegexpPCRE_778() {
  var regexp = /[\Q\E^]AAA/;
  assertEquals(null, regexp.exec("bbb+++++ ")); //test 791
}

function testRegexpPCRE_779() {
  var regexp = /[\Q\E^]AAA/;
  assertEquals(null, regexp.exec("cccxxxx")); //test 792
}

function testRegexpPCRE_780() {
  var regexp = /[\Q\E^]AAA/;
  assertEquals(null, regexp.exec("ccc++++ ")); //test 793
}

function testRegexpPCRE_781() {
  var regexp = /[\Q\E^]AAA/;
  assertEquals(null, regexp.exec("dddddddd   ")); //test 794
}

function testRegexpPCRE_782() {
  var regexp = /[\Q\E^]AAA/;
  assertEquals(null, regexp.exec("aaabccc")); //test 795
}

function testRegexpPCRE_783() {
  var regexp = /[\Q\E^]AAA/;
  assertEquals(null, regexp.exec("ABX")); //test 796
}

function testRegexpPCRE_784() {
  var regexp = /[\Q\E^]AAA/;
  assertEquals(null, regexp.exec("AADE")); //test 797
}

function testRegexpPCRE_785() {
  var regexp = /[\Q\E^]AAA/;
  assertEquals(null, regexp.exec("ACDE")); //test 798
}

function testRegexpPCRE_786() {
  var regexp = /[\Q\E^]AAA/;
  assertEquals(null, regexp.exec("** Failers")); //test 799
}

function testRegexpPCRE_787() {
  var regexp = /[\Q\E^]AAA/;
  assertEquals(null, regexp.exec("AD ")); //test 800
}

function testRegexpPCRE_788() {
  var regexp = /[\Q\E^]AAA/;
  assertEquals(null, regexp.exec("    ")); //test 801
}

function testRegexpPCRE_789() {
  var regexp = /[\Q\E^]AAA/;
  assertEquals(null, regexp.exec("aaaaaa")); //test 802
}

function testRegexpPCRE_790() {
  var regexp = /[\Q\E^]AAA/;
  assertEquals(null, regexp.exec("aaabccc")); //test 803
}

function testRegexpPCRE_791() {
  var regexp = /[\Q\E^]AAA/;
  assertEquals(null, regexp.exec("aaabccc")); //test 804
}

function testRegexpPCRE_792() {
  var regexp = /[\Q\E^]AAA/;
  assertEquals(null, regexp.exec("aaabccc")); //test 805
}

function testRegexpPCRE_793() {
  var regexp = /[\Q\E^]AAA/;
  assertEquals(null, regexp.exec("aaabcccaaabccc")); //test 806
}

function testRegexpPCRE_794() {
  var regexp = /[\Q\E^]AAA/;
  assertEquals(null, regexp.exec("aaabccc")); //test 807
}

function testRegexpPCRE_795() {
  var regexp = /.+A/;
  assertEquals(null, regexp.exec("\x0d\nA")); //test 808
}

function testRegexpPCRE_796() {
  var regexp = /\nA/;
  assertEquals("\nA", regexp.exec("\x0d\nA ").toString()); //test 809
}

function testRegexpPCRE_797() {
  var regexp = /[\r\n]A/;
  assertEquals("\nA", regexp.exec("\x0d\nA ").toString()); //test 810
}

function testRegexpPCRE_798() {
  var regexp = /(\r|\n)A/;
  assertEquals("\nA,\n", regexp.exec("\x0d\nA ").toString()); //test 811
}

function testRegexpPCRE_799() {
  var regexp = /(\r|\n)A/;
  assertEquals(null, regexp.exec("a\nb")); //test 812
}

function testRegexpPCRE_800() {
  var regexp = /(\r|\n)A/;
  assertEquals(null, regexp.exec("** Failers")); //test 813
}

function testRegexpPCRE_801() {
  var regexp = /(\r|\n)A/;
  assertEquals(null, regexp.exec("a\x0db  ")); //test 814
}

function testRegexpPCRE_802() {
  var regexp = /(\r|\n)A/;
  assertEquals(null, regexp.exec("a\nb")); //test 815
}

function testRegexpPCRE_803() {
  var regexp = /(\r|\n)A/;
  assertEquals(null, regexp.exec("** Failers")); //test 816
}

function testRegexpPCRE_804() {
  var regexp = /(\r|\n)A/;
  assertEquals(null, regexp.exec("a\x0db  ")); //test 817
}

function testRegexpPCRE_805() {
  var regexp = /(\r|\n)A/;
  assertEquals(null, regexp.exec("a\x0db")); //test 818
}

function testRegexpPCRE_806() {
  var regexp = /(\r|\n)A/;
  assertEquals(null, regexp.exec("** Failers")); //test 819
}

function testRegexpPCRE_807() {
  var regexp = /(\r|\n)A/;
  assertEquals(null, regexp.exec("a\nb  ")); //test 820
}

function testRegexpPCRE_808() {
  var regexp = /(\r|\n)A/;
  assertEquals(null, regexp.exec("a\x0db")); //test 821
}

function testRegexpPCRE_809() {
  var regexp = /(\r|\n)A/;
  assertEquals(null, regexp.exec("a\nb  ")); //test 822
}

function testRegexpPCRE_810() {
  var regexp = /(\r|\n)A/;
  assertEquals(null, regexp.exec("** Failers")); //test 823
}

function testRegexpPCRE_811() {
  var regexp = /(\r|\n)A/;
  assertEquals(null, regexp.exec("a\x0d\nb  ")); //test 824
}

function testRegexpPCRE_812() {
  var regexp = /(\r|\n)A/;
  assertEquals(null, regexp.exec("** Failers")); //test 825
}

function testRegexpPCRE_813() {
  var regexp = /(\r|\n)A/;
  assertEquals(null, regexp.exec("a\x0db")); //test 826
}

function testRegexpPCRE_814() {
  var regexp = /(\r|\n)A/;
  assertEquals(null, regexp.exec("a\nb  ")); //test 827
}

function testRegexpPCRE_815() {
  var regexp = /(\r|\n)A/;
  assertEquals(null, regexp.exec("a\x0d\nb  ")); //test 828
}

function testRegexpPCRE_816() {
  var regexp = /(\r|\n)A/;
  assertEquals(null, regexp.exec("** Failers")); //test 829
}

function testRegexpPCRE_817() {
  var regexp = /(\r|\n)A/;
  assertEquals(null, regexp.exec("a\x0db")); //test 830
}

function testRegexpPCRE_818() {
  var regexp = /(\r|\n)A/;
  assertEquals(null, regexp.exec("a\nb  ")); //test 831
}

function testRegexpPCRE_819() {
  var regexp = /(\r|\n)A/;
  assertEquals(null, regexp.exec("a\x0d\nb  ")); //test 832
}

function testRegexpPCRE_820() {
  var regexp = /(\r|\n)A/;
  assertEquals(null, regexp.exec("a\x85b ")); //test 833
}

function testRegexpPCRE_821() {
  var regexp = /a\Rb/i;
  assertEquals(null, regexp.exec("a\x0db")); //test 834
}

function testRegexpPCRE_822() {
  var regexp = /a\Rb/i;
  assertEquals(null, regexp.exec("a\nb")); //test 835
}

function testRegexpPCRE_823() {
  var regexp = /a\Rb/i;
  assertEquals(null, regexp.exec("a\x0d\nb")); //test 836
}

function testRegexpPCRE_824() {
  var regexp = /a\Rb/i;
  assertEquals(null, regexp.exec("** Failers")); //test 837
}

function testRegexpPCRE_825() {
  var regexp = /a\Rb/i;
  assertEquals(null, regexp.exec("a\x85b")); //test 838
}

function testRegexpPCRE_826() {
  var regexp = /a\Rb/i;
  assertEquals(null, regexp.exec("a\x0bb     ")); //test 839
}

function testRegexpPCRE_827() {
  var regexp = /a\Rb/i;
  assertEquals(null, regexp.exec("a\x0db")); //test 840
}

function testRegexpPCRE_828() {
  var regexp = /a\Rb/i;
  assertEquals(null, regexp.exec("a\nb")); //test 841
}

function testRegexpPCRE_829() {
  var regexp = /a\Rb/i;
  assertEquals(null, regexp.exec("a\x0d\nb")); //test 842
}

function testRegexpPCRE_830() {
  var regexp = /a\Rb/i;
  assertEquals(null, regexp.exec("a\x85b")); //test 843
}

function testRegexpPCRE_831() {
  var regexp = /a\Rb/i;
  assertEquals(null, regexp.exec("a\x0bb     ")); //test 844
}

function testRegexpPCRE_832() {
  var regexp = /a\Rb/i;
  assertEquals(null, regexp.exec("** Failers ")); //test 845
}

function testRegexpPCRE_833() {
  var regexp = /a\Rb/i;
  assertEquals(null, regexp.exec("a\x85b<bsr_anycrlf>")); //test 846
}

function testRegexpPCRE_834() {
  var regexp = /a\Rb/i;
  assertEquals(null, regexp.exec("a\x0bb<bsr_anycrlf>")); //test 847
}

function testRegexpPCRE_835() {
  var regexp = /a\R?b/i;
  assertEquals(null, regexp.exec("a\x0db")); //test 848
}

function testRegexpPCRE_836() {
  var regexp = /a\R?b/i;
  assertEquals(null, regexp.exec("a\nb")); //test 849
}

function testRegexpPCRE_837() {
  var regexp = /a\R?b/i;
  assertEquals(null, regexp.exec("a\x0d\nb")); //test 850
}

function testRegexpPCRE_838() {
  var regexp = /a\R?b/i;
  assertEquals(null, regexp.exec("** Failers")); //test 851
}

function testRegexpPCRE_839() {
  var regexp = /a\R?b/i;
  assertEquals(null, regexp.exec("a\x85b")); //test 852
}

function testRegexpPCRE_840() {
  var regexp = /a\R?b/i;
  assertEquals(null, regexp.exec("a\x0bb     ")); //test 853
}

function testRegexpPCRE_841() {
  var regexp = /a\R?b/i;
  assertEquals(null, regexp.exec("a\x0db")); //test 854
}

function testRegexpPCRE_842() {
  var regexp = /a\R?b/i;
  assertEquals(null, regexp.exec("a\nb")); //test 855
}

function testRegexpPCRE_843() {
  var regexp = /a\R?b/i;
  assertEquals(null, regexp.exec("a\x0d\nb")); //test 856
}

function testRegexpPCRE_844() {
  var regexp = /a\R?b/i;
  assertEquals(null, regexp.exec("a\x85b")); //test 857
}

function testRegexpPCRE_845() {
  var regexp = /a\R?b/i;
  assertEquals(null, regexp.exec("a\x0bb     ")); //test 858
}

function testRegexpPCRE_846() {
  var regexp = /a\R?b/i;
  assertEquals(null, regexp.exec("** Failers ")); //test 859
}

function testRegexpPCRE_847() {
  var regexp = /a\R?b/i;
  assertEquals(null, regexp.exec("a\x85b<bsr_anycrlf>")); //test 860
}

function testRegexpPCRE_848() {
  var regexp = /a\R?b/i;
  assertEquals(null, regexp.exec("a\x0bb<bsr_anycrlf>")); //test 861
}

function testRegexpPCRE_849() {
  var regexp = /a\R{2,4}b/i;
  assertEquals(null, regexp.exec("a\x0d\n\nb")); //test 862
}

function testRegexpPCRE_850() {
  var regexp = /a\R{2,4}b/i;
  assertEquals(null, regexp.exec("a\n\x0d\x0db")); //test 863
}

function testRegexpPCRE_851() {
  var regexp = /a\R{2,4}b/i;
  assertEquals(null, regexp.exec("a\x0d\n\x0d\n\x0d\n\x0d\nb")); //test 864
}

function testRegexpPCRE_852() {
  var regexp = /a\R{2,4}b/i;
  assertEquals(null, regexp.exec("** Failers")); //test 865
}

function testRegexpPCRE_853() {
  var regexp = /a\R{2,4}b/i;
  assertEquals(null, regexp.exec("a\x8585b")); //test 866
}

function testRegexpPCRE_854() {
  var regexp = /a\R{2,4}b/i;
  assertEquals(null, regexp.exec("a\x0b\x00bb     ")); //test 867
}

function testRegexpPCRE_855() {
  var regexp = /a\R{2,4}b/i;
  assertEquals(null, regexp.exec("a\x0d\x0db")); //test 868
}

function testRegexpPCRE_856() {
  var regexp = /a\R{2,4}b/i;
  assertEquals(null, regexp.exec("a\n\n\nb")); //test 869
}

function testRegexpPCRE_857() {
  var regexp = /a\R{2,4}b/i;
  assertEquals(null, regexp.exec("a\x0d\n\n\x0d\x0db")); //test 870
}

function testRegexpPCRE_858() {
  var regexp = /a\R{2,4}b/i;
  assertEquals(null, regexp.exec("a\x8585b")); //test 871
}

function testRegexpPCRE_859() {
  var regexp = /a\R{2,4}b/i;
  assertEquals(null, regexp.exec("a\x0b\x00bb     ")); //test 872
}

function testRegexpPCRE_860() {
  var regexp = /a\R{2,4}b/i;
  assertEquals(null, regexp.exec("** Failers ")); //test 873
}

function testRegexpPCRE_861() {
  var regexp = /a\R{2,4}b/i;
  assertEquals(null, regexp.exec("a\x0d\x0d\x0d\x0d\x0db ")); //test 874
}

function testRegexpPCRE_862() {
  var regexp = /a\R{2,4}b/i;
  assertEquals(null, regexp.exec("a\x8585b<bsr_anycrlf>")); //test 875
}

function testRegexpPCRE_863() {
  var regexp = /a\R{2,4}b/i;
  assertEquals(null, regexp.exec("a\x0b\x00bb<bsr_anycrlf>")); //test 876
}

function testRegexpPCRE_864() {
  var regexp = /a\R{2,4}b/i;
  assertEquals(null, regexp.exec("a\nb")); //test 877
}

function testRegexpPCRE_865() {
  var regexp = /a\R{2,4}b/i;
  assertEquals(null, regexp.exec("a\x0db ")); //test 878
}

function testRegexpPCRE_866() {
  var regexp = /a\R{2,4}b/i;
  assertEquals(null, regexp.exec("a\x85b")); //test 879
}

function testRegexpPCRE_867() {
  var regexp = /a\R{2,4}b/i;
  assertEquals(null, regexp.exec("a\nb")); //test 880
}

function testRegexpPCRE_868() {
  var regexp = /a\R{2,4}b/i;
  assertEquals(null, regexp.exec("a\x0db ")); //test 881
}

function testRegexpPCRE_869() {
  var regexp = /a\R{2,4}b/i;
  assertEquals(null, regexp.exec("a\x85b")); //test 882
}

function testRegexpPCRE_870() {
  assertThrows(SyntaxError, eval, "var re = /(?-+a)/;"); //test 883
}


function testRegexpPCRE_871() {
  var regexp = /[[:a\dz:]]/;
  assertEquals(null, regexp.exec("aaaa")); //test 884
}

function testRegexpPCRE_872() {
  var regexp = /[[:a\dz:]]/;
  assertEquals(null, regexp.exec("bacxxx")); //test 885
}

function testRegexpPCRE_873() {
  var regexp = /[[:a\dz:]]/;
  assertEquals(null, regexp.exec("bbaccxxx ")); //test 886
}

function testRegexpPCRE_874() {
  var regexp = /[[:a\dz:]]/;
  assertEquals(null, regexp.exec("bbbacccxx")); //test 887
}

function testRegexpPCRE_875() {
  var regexp = /[[:a\dz:]]/;
  assertEquals(null, regexp.exec("aaaa")); //test 888
}

function testRegexpPCRE_876() {
  var regexp = /[[:a\dz:]]/;
  assertEquals(null, regexp.exec("bacxxx")); //test 889
}

function testRegexpPCRE_877() {
  var regexp = /[[:a\dz:]]/;
  assertEquals(null, regexp.exec("bbaccxxx ")); //test 890
}

function testRegexpPCRE_878() {
  var regexp = /[[:a\dz:]]/;
  assertEquals(null, regexp.exec("bbbacccxx")); //test 891
}

function testRegexpPCRE_879() {
  var regexp = /^(a|b\g<1>c)/;
  assertEquals("a,a", regexp.exec("aaaa").toString()); //test 892
}

function testRegexpPCRE_880() {
  var regexp = /^(a|b\g<1>c)/;
  assertEquals(null, regexp.exec("bacxxx")); //test 893
}

function testRegexpPCRE_881() {
  var regexp = /^(a|b\g<1>c)/;
  assertEquals(null, regexp.exec("bbaccxxx ")); //test 894
}

function testRegexpPCRE_882() {
  var regexp = /^(a|b\g<1>c)/;
  assertEquals(null, regexp.exec("bbbacccxx")); //test 895
}

function testRegexpPCRE_883() {
  var regexp = /^(a|b\g'1'c)/;
  assertEquals("a,a", regexp.exec("aaaa").toString()); //test 896
}

function testRegexpPCRE_884() {
  var regexp = /^(a|b\g'1'c)/;
  assertEquals(null, regexp.exec("bacxxx")); //test 897
}

function testRegexpPCRE_885() {
  var regexp = /^(a|b\g'1'c)/;
  assertEquals(null, regexp.exec("bbaccxxx ")); //test 898
}

function testRegexpPCRE_886() {
  var regexp = /^(a|b\g'1'c)/;
  assertEquals(null, regexp.exec("bbbacccxx")); //test 899
}

function testRegexpPCRE_887() {
  var regexp = /^(a|b\g'-1'c)/;
  assertEquals("a,a", regexp.exec("aaaa").toString()); //test 900
}

function testRegexpPCRE_888() {
  var regexp = /^(a|b\g'-1'c)/;
  assertEquals(null, regexp.exec("bacxxx")); //test 901
}

function testRegexpPCRE_889() {
  var regexp = /^(a|b\g'-1'c)/;
  assertEquals(null, regexp.exec("bbaccxxx ")); //test 902
}

function testRegexpPCRE_890() {
  var regexp = /^(a|b\g'-1'c)/;
  assertEquals(null, regexp.exec("bbbacccxx")); //test 903
}

function testRegexpPCRE_891() {
  var regexp = /(^(a|b\g<-1>c))/;
  assertEquals("a,a,a", regexp.exec("aaaa").toString()); //test 904
}

function testRegexpPCRE_892() {
  var regexp = /(^(a|b\g<-1>c))/;
  assertEquals(null, regexp.exec("bacxxx")); //test 905
}

function testRegexpPCRE_893() {
  var regexp = /(^(a|b\g<-1>c))/;
  assertEquals(null, regexp.exec("bbaccxxx ")); //test 906
}

function testRegexpPCRE_894() {
  var regexp = /(^(a|b\g<-1>c))/;
  assertEquals(null, regexp.exec("bbbacccxx")); //test 907
}

function testRegexpPCRE_895() {
  var regexp = /(^(a|b\g{-1}))/;
  assertEquals(null, regexp.exec("bacxxx")); //test 908
}

function testRegexpPCRE_896() {
  var regexp = /(^(a|b\g{-1}))/;
  assertEquals(null, regexp.exec("XaaX")); //test 909
}

function testRegexpPCRE_897() {
  var regexp = /(^(a|b\g{-1}))/;
  assertEquals(null, regexp.exec("XAAX ")); //test 910
}

function testRegexpPCRE_898() {
  var regexp = /(^(a|b\g{-1}))/;
  assertEquals(null, regexp.exec("XaaX")); //test 911
}

function testRegexpPCRE_899() {
  var regexp = /(^(a|b\g{-1}))/;
  assertEquals(null, regexp.exec("** Failers ")); //test 912
}

function testRegexpPCRE_900() {
  var regexp = /(^(a|b\g{-1}))/;
  assertEquals(null, regexp.exec("XAAX ")); //test 913
}

function testRegexpPCRE_901() {
  var regexp = /(^(a|b\g{-1}))/;
  assertEquals(null, regexp.exec("XaaX")); //test 914
}

function testRegexpPCRE_902() {
  var regexp = /(^(a|b\g{-1}))/;
  assertEquals(null, regexp.exec("XAAX ")); //test 915
}

function testRegexpPCRE_903() {
  var regexp = /(^(a|b\g{-1}))/;
  assertEquals(null, regexp.exec("xzxx")); //test 916
}

function testRegexpPCRE_904() {
  var regexp = /(^(a|b\g{-1}))/;
  assertEquals(null, regexp.exec("yzyy ")); //test 917
}

function testRegexpPCRE_905() {
  var regexp = /(^(a|b\g{-1}))/;
  assertEquals(null, regexp.exec("** Failers")); //test 918
}

function testRegexpPCRE_906() {
  var regexp = /(^(a|b\g{-1}))/;
  assertEquals(null, regexp.exec("xxz  ")); //test 919
}

function testRegexpPCRE_907() {
  var regexp = /(\3)(\1)(a)/;
  assertEquals("a,,,a", regexp.exec("cat").toString()); //test 920
}

function testRegexpPCRE_908() {
  var regexp = /(\3)(\1)(a)/;
  assertEquals("a,,,a", regexp.exec("cat").toString()); //test 921
}

function testRegexpPCRE_909() {
  var regexp = /TA]/;
  assertEquals("TA]", regexp.exec("The ACTA] comes ").toString()); //test 922
}

function testRegexpPCRE_910() {
  var regexp = /TA]/;
  assertEquals("TA]", regexp.exec("The ACTA] comes ").toString()); //test 923
}

function testRegexpPCRE_911() {
  var regexp = /TA]/;
  assertEquals(null, regexp.exec("abcbabc")); //test 924
}

function testRegexpPCRE_912() {
  var regexp = /TA]/;
  assertEquals(null, regexp.exec("abcbabc")); //test 925
}

function testRegexpPCRE_913() {
  var regexp = /TA]/;
  assertEquals(null, regexp.exec("abcbabc")); //test 926
}

function testRegexpPCRE_914() {
  var regexp = /TA]/;
  assertEquals(null, regexp.exec("** Failers ")); //test 927
}

function testRegexpPCRE_915() {
  var regexp = /TA]/;
  assertEquals(null, regexp.exec("abcXabc")); //test 928
}

function testRegexpPCRE_916() {
  var regexp = /TA]/;
  assertEquals(null, regexp.exec("abcXabc")); //test 929
}

function testRegexpPCRE_917() {
  var regexp = /TA]/;
  assertEquals(null, regexp.exec("** Failers ")); //test 930
}

function testRegexpPCRE_918() {
  var regexp = /TA]/;
  assertEquals(null, regexp.exec("abcbabc")); //test 931
}

function testRegexpPCRE_919() {
  var regexp = /TA]/;
  assertEquals(null, regexp.exec("xyzbabcxyz")); //test 932
}

function testRegexpPCRE_920() {
  var regexp = /a[]b/;
  assertEquals(null, regexp.exec("** Failers")); //test 933
}

function testRegexpPCRE_921() {
  var regexp = /a[]b/;
  assertEquals(null, regexp.exec("ab")); //test 934
}

function testRegexpPCRE_922() {
  var regexp = /a[]+b/;
  assertEquals(null, regexp.exec("** Failers")); //test 935
}

function testRegexpPCRE_923() {
  var regexp = /a[]+b/;
  assertEquals(null, regexp.exec("ab ")); //test 936
}

function testRegexpPCRE_924() {
  var regexp = /a[]+b/;
  assertEquals(null, regexp.exec("** Failers")); //test 937
}

function testRegexpPCRE_925() {
  var regexp = /a[]+b/;
  assertEquals(null, regexp.exec("ab ")); //test 938
}

function testRegexpPCRE_926() {
  var regexp = /a[^]b/;
  assertEquals("aXb", regexp.exec("aXb").toString()); //test 939
}

function testRegexpPCRE_927() {
  var regexp = /a[^]b/;
  assertEquals("a\nb", regexp.exec("a\nb ").toString()); //test 940
}

function testRegexpPCRE_928() {
  var regexp = /a[^]b/;
  assertEquals(null, regexp.exec("** Failers")); //test 941
}

function testRegexpPCRE_929() {
  var regexp = /a[^]b/;
  assertEquals(null, regexp.exec("ab  ")); //test 942
}

function testRegexpPCRE_930() {
  var regexp = /a[^]+b/;
  assertEquals("aXb", regexp.exec("aXb").toString()); //test 943
}

function testRegexpPCRE_931() {
  var regexp = /a[^]+b/;
  assertEquals("a\nX\nXb", regexp.exec("a\nX\nXb ").toString()); //test 944
}

function testRegexpPCRE_932() {
  var regexp = /a[^]+b/;
  assertEquals(null, regexp.exec("** Failers")); //test 945
}

function testRegexpPCRE_933() {
  var regexp = /a[^]+b/;
  assertEquals(null, regexp.exec("ab  ")); //test 946
}

function testRegexpPCRE_934() {
  var regexp = /a.b/;
  assertEquals("acb", regexp.exec("acb").toString()); //test 947
}

function testRegexpPCRE_935() {
  var regexp = /a.b/;
  assertEquals("ab", regexp.exec("ab").toString()); //test 948
}

function testRegexpPCRE_936() {
  var regexp = /a.b/;
  assertEquals(null, regexp.exec("ax{100}b ")); //test 949
}

function testRegexpPCRE_937() {
  var regexp = /a.b/;
  assertEquals(null, regexp.exec("*** Failers")); //test 950
}

function testRegexpPCRE_938() {
  var regexp = /a.b/;
  assertEquals(null, regexp.exec("a\nb  ")); //test 951
}

function testRegexpPCRE_939() {
  var regexp = /a(.{3})b/;
  assertEquals(null, regexp.exec("ax{4000}xyb ")); //test 952
}

function testRegexpPCRE_940() {
  var regexp = /a(.{3})b/;
  assertEquals(null, regexp.exec("ax{4000}yb ")); //test 953
}

function testRegexpPCRE_941() {
  var regexp = /a(.{3})b/;
  assertEquals(null, regexp.exec("ax{4000}x{100}yb ")); //test 954
}

function testRegexpPCRE_942() {
  var regexp = /a(.{3})b/;
  assertEquals(null, regexp.exec("*** Failers")); //test 955
}

function testRegexpPCRE_943() {
  var regexp = /a(.{3})b/;
  assertEquals(null, regexp.exec("ax{4000}b ")); //test 956
}

function testRegexpPCRE_944() {
  var regexp = /a(.{3})b/;
  assertEquals(null, regexp.exec("ac\ncb ")); //test 957
}

function testRegexpPCRE_945() {
  var regexp = /a(.*?)(.)/;
  assertEquals("a\xc0,,\xc0", regexp.exec("a\xc0\x88b").toString()); //test 958
}

function testRegexpPCRE_946() {
  var regexp = /a(.*?)(.)/;
  assertEquals("ax,,x", regexp.exec("ax{100}b").toString()); //test 959
}

function testRegexpPCRE_947() {
  var regexp = /a(.*)(.)/;
  assertEquals("a\xc0\x88b,\xc0\x88,b", regexp.exec("a\xc0\x88b").toString()); //test 960
}

function testRegexpPCRE_948() {
  var regexp = /a(.*)(.)/;
  assertEquals("ax{100}b,x{100},b", regexp.exec("ax{100}b").toString()); //test 961
}

function testRegexpPCRE_949() {
  var regexp = /a(.)(.)/;
  assertEquals("a\xc0\x92,\xc0,\x92", regexp.exec("a\xc0\x92bcd").toString()); //test 962
}

function testRegexpPCRE_950() {
  var regexp = /a(.)(.)/;
  assertEquals("ax{,x,{", regexp.exec("ax{240}bcd").toString()); //test 963
}

function testRegexpPCRE_951() {
  var regexp = /a(.?)(.)/;
  assertEquals("a\xc0\x92,\xc0,\x92", regexp.exec("a\xc0\x92bcd").toString()); //test 964
}

function testRegexpPCRE_952() {
  var regexp = /a(.?)(.)/;
  assertEquals("ax{,x,{", regexp.exec("ax{240}bcd").toString()); //test 965
}

function testRegexpPCRE_953() {
  var regexp = /a(.??)(.)/;
  assertEquals("a\xc0,,\xc0", regexp.exec("a\xc0\x92bcd").toString()); //test 966
}

function testRegexpPCRE_954() {
  var regexp = /a(.??)(.)/;
  assertEquals("ax,,x", regexp.exec("ax{240}bcd").toString()); //test 967
}

function testRegexpPCRE_955() {
  var regexp = /a(.{3})b/;
  assertEquals(null, regexp.exec("ax{1234}xyb ")); //test 968
}

function testRegexpPCRE_956() {
  var regexp = /a(.{3})b/;
  assertEquals(null, regexp.exec("ax{1234}x{4321}yb ")); //test 969
}

function testRegexpPCRE_957() {
  var regexp = /a(.{3})b/;
  assertEquals(null, regexp.exec("ax{1234}x{4321}x{3412}b ")); //test 970
}

function testRegexpPCRE_958() {
  var regexp = /a(.{3})b/;
  assertEquals(null, regexp.exec("*** Failers")); //test 971
}

function testRegexpPCRE_959() {
  var regexp = /a(.{3})b/;
  assertEquals(null, regexp.exec("ax{1234}b ")); //test 972
}

function testRegexpPCRE_960() {
  var regexp = /a(.{3})b/;
  assertEquals(null, regexp.exec("ac\ncb ")); //test 973
}

function testRegexpPCRE_961() {
  var regexp = /a(.{3,})b/;
  assertEquals("ax{1234}xyb,x{1234}xy", regexp.exec("ax{1234}xyb ").toString()); //test 974
}

function testRegexpPCRE_962() {
  var regexp = /a(.{3,})b/;
  assertEquals("ax{1234}x{4321}yb,x{1234}x{4321}y", regexp.exec("ax{1234}x{4321}yb ").toString()); //test 975
}

function testRegexpPCRE_963() {
  var regexp = /a(.{3,})b/;
  assertEquals("ax{1234}x{4321}x{3412}b,x{1234}x{4321}x{3412}", regexp.exec("ax{1234}x{4321}x{3412}b ").toString()); //test 976
}

function testRegexpPCRE_964() {
  var regexp = /a(.{3,})b/;
  assertEquals("axxxxbcdefghijb,xxxxbcdefghij", regexp.exec("axxxxbcdefghijb ").toString()); //test 977
}

function testRegexpPCRE_965() {
  var regexp = /a(.{3,})b/;
  assertEquals("ax{1234}x{4321}x{3412}x{3421}b,x{1234}x{4321}x{3412}x{3421}", regexp.exec("ax{1234}x{4321}x{3412}x{3421}b ").toString()); //test 978
}

function testRegexpPCRE_966() {
  var regexp = /a(.{3,})b/;
  assertEquals(null, regexp.exec("*** Failers")); //test 979
}

function testRegexpPCRE_967() {
  var regexp = /a(.{3,})b/;
  assertEquals("ax{1234}b,x{1234}", regexp.exec("ax{1234}b ").toString()); //test 980
}

function testRegexpPCRE_968() {
  var regexp = /a(.{3,}?)b/;
  assertEquals("ax{1234}xyb,x{1234}xy", regexp.exec("ax{1234}xyb ").toString()); //test 981
}

function testRegexpPCRE_969() {
  var regexp = /a(.{3,}?)b/;
  assertEquals("ax{1234}x{4321}yb,x{1234}x{4321}y", regexp.exec("ax{1234}x{4321}yb ").toString()); //test 982
}

function testRegexpPCRE_970() {
  var regexp = /a(.{3,}?)b/;
  assertEquals("ax{1234}x{4321}x{3412}b,x{1234}x{4321}x{3412}", regexp.exec("ax{1234}x{4321}x{3412}b ").toString()); //test 983
}

function testRegexpPCRE_971() {
  var regexp = /a(.{3,}?)b/;
  assertEquals("axxxxb,xxxx", regexp.exec("axxxxbcdefghijb ").toString()); //test 984
}

function testRegexpPCRE_972() {
  var regexp = /a(.{3,}?)b/;
  assertEquals("ax{1234}x{4321}x{3412}x{3421}b,x{1234}x{4321}x{3412}x{3421}", regexp.exec("ax{1234}x{4321}x{3412}x{3421}b ").toString()); //test 985
}

function testRegexpPCRE_973() {
  var regexp = /a(.{3,}?)b/;
  assertEquals(null, regexp.exec("*** Failers")); //test 986
}

function testRegexpPCRE_974() {
  var regexp = /a(.{3,}?)b/;
  assertEquals("ax{1234}b,x{1234}", regexp.exec("ax{1234}b ").toString()); //test 987
}

function testRegexpPCRE_975() {
  var regexp = /a(.{3,5})b/;
  assertEquals(null, regexp.exec("ax{1234}xyb ")); //test 988
}

function testRegexpPCRE_976() {
  var regexp = /a(.{3,5})b/;
  assertEquals(null, regexp.exec("ax{1234}x{4321}yb ")); //test 989
}

function testRegexpPCRE_977() {
  var regexp = /a(.{3,5})b/;
  assertEquals(null, regexp.exec("ax{1234}x{4321}x{3412}b ")); //test 990
}

function testRegexpPCRE_978() {
  var regexp = /a(.{3,5})b/;
  assertEquals("axxxxb,xxxx", regexp.exec("axxxxbcdefghijb ").toString()); //test 991
}

function testRegexpPCRE_979() {
  var regexp = /a(.{3,5})b/;
  assertEquals(null, regexp.exec("ax{1234}x{4321}x{3412}x{3421}b ")); //test 992
}

function testRegexpPCRE_980() {
  var regexp = /a(.{3,5})b/;
  assertEquals("axbxxb,xbxx", regexp.exec("axbxxbcdefghijb ").toString()); //test 993
}

function testRegexpPCRE_981() {
  var regexp = /a(.{3,5})b/;
  assertEquals("axxxxxb,xxxxx", regexp.exec("axxxxxbcdefghijb ").toString()); //test 994
}

function testRegexpPCRE_982() {
  var regexp = /a(.{3,5})b/;
  assertEquals(null, regexp.exec("*** Failers")); //test 995
}

function testRegexpPCRE_983() {
  var regexp = /a(.{3,5})b/;
  assertEquals(null, regexp.exec("ax{1234}b ")); //test 996
}

function testRegexpPCRE_984() {
  var regexp = /a(.{3,5})b/;
  assertEquals(null, regexp.exec("axxxxxxbcdefghijb ")); //test 997
}

function testRegexpPCRE_985() {
  var regexp = /a(.{3,5}?)b/;
  assertEquals(null, regexp.exec("ax{1234}xyb ")); //test 998
}

function testRegexpPCRE_986() {
  var regexp = /a(.{3,5}?)b/;
  assertEquals(null, regexp.exec("ax{1234}x{4321}yb ")); //test 999
}

function testRegexpPCRE_987() {
  var regexp = /a(.{3,5}?)b/;
  assertEquals(null, regexp.exec("ax{1234}x{4321}x{3412}b ")); //test 1000
}

function testRegexpPCRE_988() {
  var regexp = /a(.{3,5}?)b/;
  assertEquals("axxxxb,xxxx", regexp.exec("axxxxbcdefghijb ").toString()); //test 1001
}

function testRegexpPCRE_989() {
  var regexp = /a(.{3,5}?)b/;
  assertEquals(null, regexp.exec("ax{1234}x{4321}x{3412}x{3421}b ")); //test 1002
}

function testRegexpPCRE_990() {
  var regexp = /a(.{3,5}?)b/;
  assertEquals("axbxxb,xbxx", regexp.exec("axbxxbcdefghijb ").toString()); //test 1003
}

function testRegexpPCRE_991() {
  var regexp = /a(.{3,5}?)b/;
  assertEquals("axxxxxb,xxxxx", regexp.exec("axxxxxbcdefghijb ").toString()); //test 1004
}

function testRegexpPCRE_992() {
  var regexp = /a(.{3,5}?)b/;
  assertEquals(null, regexp.exec("*** Failers")); //test 1005
}

function testRegexpPCRE_993() {
  var regexp = /a(.{3,5}?)b/;
  assertEquals(null, regexp.exec("ax{1234}b ")); //test 1006
}

function testRegexpPCRE_994() {
  var regexp = /a(.{3,5}?)b/;
  assertEquals(null, regexp.exec("axxxxxxbcdefghijb ")); //test 1007
}

function testRegexpPCRE_995() {
  var regexp = /a(.{3,5}?)b/;
  assertEquals(null, regexp.exec("*** Failers")); //test 1008
}

function testRegexpPCRE_996() {
  var regexp = /a(.{3,5}?)b/;
  assertEquals(null, regexp.exec("x{100}")); //test 1009
}

function testRegexpPCRE_997() {
  var regexp = /a(.{3,5}?)b/;
  assertEquals(null, regexp.exec("aXbcd")); //test 1010
}

function testRegexpPCRE_998() {
  var regexp = /a(.{3,5}?)b/;
  assertEquals(null, regexp.exec("ax{100}bcd")); //test 1011
}

function testRegexpPCRE_999() {
  var regexp = /a(.{3,5}?)b/;
  assertEquals(null, regexp.exec("ax{100000}bcd")); //test 1012
}

function testRegexpPCRE_1000() {
  var regexp = /a(.{3,5}?)b/;
  assertEquals(null, regexp.exec("x{100}x{100}x{100}b")); //test 1013
}

function testRegexpPCRE_1001() {
  var regexp = /a(.{3,5}?)b/;
  assertEquals(null, regexp.exec("*** Failers ")); //test 1014
}

function testRegexpPCRE_1002() {
  var regexp = /a(.{3,5}?)b/;
  assertEquals(null, regexp.exec("x{100}x{100}b")); //test 1015
}

function testRegexpPCRE_1003() {
  var regexp = /a(.{3,5}?)b/;
  assertEquals(null, regexp.exec("x{ab} ")); //test 1016
}

function testRegexpPCRE_1004() {
  var regexp = /a(.{3,5}?)b/;
  assertEquals(null, regexp.exec("\xc2\xab")); //test 1017
}

function testRegexpPCRE_1005() {
  var regexp = /a(.{3,5}?)b/;
  assertEquals(null, regexp.exec("*** Failers ")); //test 1018
}

function testRegexpPCRE_1006() {
  var regexp = /a(.{3,5}?)b/;
  assertEquals(null, regexp.exec("\x00{ab}")); //test 1019
}

function testRegexpPCRE_1007() {
  var regexp = /a(.{3,5}?)b/;
  assertEquals(null, regexp.exec("WXYZ")); //test 1020
}

function testRegexpPCRE_1008() {
  var regexp = /a(.{3,5}?)b/;
  assertEquals(null, regexp.exec("x{256}XYZ ")); //test 1021
}

function testRegexpPCRE_1009() {
  var regexp = /a(.{3,5}?)b/;
  assertEquals(null, regexp.exec("*** Failers")); //test 1022
}

function testRegexpPCRE_1010() {
  var regexp = /a(.{3,5}?)b/;
  assertEquals(null, regexp.exec("XYZ ")); //test 1023
}

function testRegexpPCRE_1011() {
  var regexp = /X(\C{3})/;
  assertEquals(null, regexp.exec("Xx{1234}")); //test 1024
}

function testRegexpPCRE_1012() {
  var regexp = /X(\C{4})/;
  assertEquals(null, regexp.exec("Xx{1234}YZ")); //test 1025
}

function testRegexpPCRE_1013() {
  var regexp = /X\C*/;
  assertEquals("X", regexp.exec("XYZabcdce").toString()); //test 1026
}

function testRegexpPCRE_1014() {
  var regexp = /X\C*?/;
  assertEquals("X", regexp.exec("XYZabcde").toString()); //test 1027
}

function testRegexpPCRE_1015() {
  var regexp = /X\C{3,5}/;
  assertEquals(null, regexp.exec("Xabcdefg   ")); //test 1028
}

function testRegexpPCRE_1016() {
  var regexp = /X\C{3,5}/;
  assertEquals(null, regexp.exec("Xx{1234} ")); //test 1029
}

function testRegexpPCRE_1017() {
  var regexp = /X\C{3,5}/;
  assertEquals(null, regexp.exec("Xx{1234}YZ")); //test 1030
}

function testRegexpPCRE_1018() {
  var regexp = /X\C{3,5}/;
  assertEquals(null, regexp.exec("Xx{1234}x{512}  ")); //test 1031
}

function testRegexpPCRE_1019() {
  var regexp = /X\C{3,5}/;
  assertEquals(null, regexp.exec("Xx{1234}x{512}YZ")); //test 1032
}

function testRegexpPCRE_1020() {
  var regexp = /X\C{3,5}?/;
  assertEquals(null, regexp.exec("Xabcdefg   ")); //test 1033
}

function testRegexpPCRE_1021() {
  var regexp = /X\C{3,5}?/;
  assertEquals(null, regexp.exec("Xx{1234} ")); //test 1034
}

function testRegexpPCRE_1022() {
  var regexp = /X\C{3,5}?/;
  assertEquals(null, regexp.exec("Xx{1234}YZ")); //test 1035
}

function testRegexpPCRE_1023() {
  var regexp = /X\C{3,5}?/;
  assertEquals(null, regexp.exec("Xx{1234}x{512}  ")); //test 1036
}

function testRegexpPCRE_1024() {
  var regexp = /[^a]+/g;
  assertEquals("bcd", regexp.exec("bcd").toString()); //test 1037
  assertEquals("00}", regexp.exec("x{100}aYx{256}Z ").toString()); //test 1038
}

function testRegexpPCRE_1025() {
  var regexp = /^[^a]{2}/;
  assertEquals("x{", regexp.exec("x{100}bc").toString()); //test 1039
}

function testRegexpPCRE_1026() {
  var regexp = /^[^a]{2,}/;
  assertEquals("x{100}bcA", regexp.exec("x{100}bcAa").toString()); //test 1040
}

function testRegexpPCRE_1027() {
  var regexp = /^[^a]{2,}?/;
  assertEquals("x{", regexp.exec("x{100}bca").toString()); //test 1041
}

function testRegexpPCRE_1028() {
  var regexp = /[^a]+/ig;
  assertEquals("bcd", regexp.exec("bcd").toString()); //test 1042
  assertEquals("00}", regexp.exec("x{100}aYx{256}Z ").toString()); //test 1043
}

function testRegexpPCRE_1029() {
  var regexp = /^[^a]{2}/i;
  assertEquals("x{", regexp.exec("x{100}bc").toString()); //test 1044
}

function testRegexpPCRE_1030() {
  var regexp = /^[^a]{2,}/i;
  assertEquals("x{100}bc", regexp.exec("x{100}bcAa").toString()); //test 1045
}

function testRegexpPCRE_1031() {
  var regexp = /^[^a]{2,}?/i;
  assertEquals("x{", regexp.exec("x{100}bca").toString()); //test 1046
}

function testRegexpPCRE_1032() {
  var regexp = /^[^a]{2,}?/i;
  assertEquals(null, regexp.exec("abcd")); //test 1047
}

function testRegexpPCRE_1033() {
  var regexp = /^[^a]{2,}?/i;
  assertEquals(null, regexp.exec("abcd")); //test 1048
}

function testRegexpPCRE_1034() {
  var regexp = /^[^a]{2,}?/i;
  assertEquals("x{", regexp.exec("x{100}x{100} ").toString()); //test 1049
}

function testRegexpPCRE_1035() {
  var regexp = /^[^a]{2,}?/i;
  assertEquals("x{", regexp.exec("x{100}x{100} ").toString()); //test 1050
}

function testRegexpPCRE_1036() {
  var regexp = /^[^a]{2,}?/i;
  assertEquals("x{", regexp.exec("x{100}x{100}x{100}x{100} ").toString()); //test 1051
}

function testRegexpPCRE_1037() {
  var regexp = /^[^a]{2,}?/i;
  assertEquals(null, regexp.exec("abce")); //test 1052
}

function testRegexpPCRE_1038() {
  var regexp = /^[^a]{2,}?/i;
  assertEquals("x{", regexp.exec("x{100}x{100}x{100}x{100} ").toString()); //test 1053
}

function testRegexpPCRE_1039() {
  var regexp = /^[^a]{2,}?/i;
  assertEquals(null, regexp.exec("abcdx{100}x{100}x{100}x{100} ")); //test 1054
}

function testRegexpPCRE_1040() {
  var regexp = /^[^a]{2,}?/i;
  assertEquals(null, regexp.exec("abcdx{100}x{100}x{100}x{100} ")); //test 1055
}

function testRegexpPCRE_1041() {
  var regexp = /^[^a]{2,}?/i;
  assertEquals(null, regexp.exec("abcdx{100}x{100}x{100}x{100} ")); //test 1056
}

function testRegexpPCRE_1042() {
  var regexp = /^[^a]{2,}?/i;
  assertEquals(null, regexp.exec("abcdx{100}x{100}x{100}XX")); //test 1057
}

function testRegexpPCRE_1043() {
  var regexp = /^[^a]{2,}?/i;
  assertEquals(null, regexp.exec("abcdx{100}x{100}x{100}x{100}x{100}x{100}x{100}XX")); //test 1058
}

function testRegexpPCRE_1044() {
  var regexp = /^[^a]{2,}?/i;
  assertEquals(null, regexp.exec("abcdx{100}x{100}x{100}x{100}x{100}x{100}x{100}XX")); //test 1059
}

function testRegexpPCRE_1045() {
  var regexp = /^[^a]{2,}?/i;
  assertEquals("Xy", regexp.exec("Xyyyax{100}x{100}bXzzz").toString()); //test 1060
}

function testRegexpPCRE_1046() {
  var regexp = /\D/;
  assertEquals("X", regexp.exec("1X2").toString()); //test 1061
}

function testRegexpPCRE_1047() {
  var regexp = /\D/;
  assertEquals("x", regexp.exec("1x{100}2 ").toString()); //test 1062
}

function testRegexpPCRE_1048() {
  var regexp = />\S/;
  assertEquals(">X", regexp.exec("> >X Y").toString()); //test 1063
}

function testRegexpPCRE_1049() {
  var regexp = />\S/;
  assertEquals(">x", regexp.exec("> >x{100} Y").toString()); //test 1064
}

function testRegexpPCRE_1050() {
  var regexp = /\d/;
  assertEquals("1", regexp.exec("x{100}3").toString()); //test 1065
}

function testRegexpPCRE_1051() {
  var regexp = /\s/;
  assertEquals(" ", regexp.exec("x{100} X").toString()); //test 1066
}

function testRegexpPCRE_1052() {
  var regexp = /\D+/;
  assertEquals("abcd", regexp.exec("12abcd34").toString()); //test 1067
}

function testRegexpPCRE_1053() {
  var regexp = /\D+/;
  assertEquals("*** Failers", regexp.exec("*** Failers").toString()); //test 1068
}

function testRegexpPCRE_1054() {
  var regexp = /\D+/;
  assertEquals("  ", regexp.exec("1234  ").toString()); //test 1069
}

function testRegexpPCRE_1055() {
  var regexp = /\D{2,3}/;
  assertEquals("abc", regexp.exec("12abcd34").toString()); //test 1070
}

function testRegexpPCRE_1056() {
  var regexp = /\D{2,3}/;
  assertEquals("ab", regexp.exec("12ab34").toString()); //test 1071
}

function testRegexpPCRE_1057() {
  var regexp = /\D{2,3}/;
  assertEquals("***", regexp.exec("*** Failers  ").toString()); //test 1072
}

function testRegexpPCRE_1058() {
  var regexp = /\D{2,3}/;
  assertEquals(null, regexp.exec("1234")); //test 1073
}

function testRegexpPCRE_1059() {
  var regexp = /\D{2,3}/;
  assertEquals("  ", regexp.exec("12a34  ").toString()); //test 1074
}

function testRegexpPCRE_1060() {
  var regexp = /\D{2,3}?/;
  assertEquals("ab", regexp.exec("12abcd34").toString()); //test 1075
}

function testRegexpPCRE_1061() {
  var regexp = /\D{2,3}?/;
  assertEquals("ab", regexp.exec("12ab34").toString()); //test 1076
}

function testRegexpPCRE_1062() {
  var regexp = /\D{2,3}?/;
  assertEquals("**", regexp.exec("*** Failers  ").toString()); //test 1077
}

function testRegexpPCRE_1063() {
  var regexp = /\D{2,3}?/;
  assertEquals(null, regexp.exec("1234")); //test 1078
}

function testRegexpPCRE_1064() {
  var regexp = /\D{2,3}?/;
  assertEquals("  ", regexp.exec("12a34  ").toString()); //test 1079
}

function testRegexpPCRE_1065() {
  var regexp = /\d+/;
  assertEquals("12", regexp.exec("12abcd34").toString()); //test 1080
}

function testRegexpPCRE_1066() {
  var regexp = /\d+/;
  assertEquals(null, regexp.exec("*** Failers")); //test 1081
}

function testRegexpPCRE_1067() {
  var regexp = /\d{2,3}/;
  assertEquals("12", regexp.exec("12abcd34").toString()); //test 1082
}

function testRegexpPCRE_1068() {
  var regexp = /\d{2,3}/;
  assertEquals("123", regexp.exec("1234abcd").toString()); //test 1083
}

function testRegexpPCRE_1069() {
  var regexp = /\d{2,3}/;
  assertEquals(null, regexp.exec("*** Failers  ")); //test 1084
}

function testRegexpPCRE_1070() {
  var regexp = /\d{2,3}/;
  assertEquals(null, regexp.exec("1.4 ")); //test 1085
}

function testRegexpPCRE_1071() {
  var regexp = /\d{2,3}?/;
  assertEquals("12", regexp.exec("12abcd34").toString()); //test 1086
}

function testRegexpPCRE_1072() {
  var regexp = /\d{2,3}?/;
  assertEquals("12", regexp.exec("1234abcd").toString()); //test 1087
}

function testRegexpPCRE_1073() {
  var regexp = /\d{2,3}?/;
  assertEquals(null, regexp.exec("*** Failers  ")); //test 1088
}

function testRegexpPCRE_1074() {
  var regexp = /\d{2,3}?/;
  assertEquals(null, regexp.exec("1.4 ")); //test 1089
}

function testRegexpPCRE_1075() {
  var regexp = /\S+/;
  assertEquals("12abcd34", regexp.exec("12abcd34").toString()); //test 1090
}

function testRegexpPCRE_1076() {
  var regexp = /\S+/;
  assertEquals("***", regexp.exec("*** Failers").toString()); //test 1091
}

function testRegexpPCRE_1077() {
  var regexp = /\S+/;
  assertEquals(null, regexp.exec("     ")); //test 1092
}

function testRegexpPCRE_1078() {
  var regexp = /\S{2,3}/;
  assertEquals("12a", regexp.exec("12abcd34").toString()); //test 1093
}

function testRegexpPCRE_1079() {
  var regexp = /\S{2,3}/;
  assertEquals("123", regexp.exec("1234abcd").toString()); //test 1094
}

function testRegexpPCRE_1080() {
  var regexp = /\S{2,3}/;
  assertEquals("***", regexp.exec("*** Failers").toString()); //test 1095
}

function testRegexpPCRE_1081() {
  var regexp = /\S{2,3}/;
  assertEquals(null, regexp.exec("       ")); //test 1096
}

function testRegexpPCRE_1082() {
  var regexp = /\S{2,3}?/;
  assertEquals("12", regexp.exec("12abcd34").toString()); //test 1097
}

function testRegexpPCRE_1083() {
  var regexp = /\S{2,3}?/;
  assertEquals("12", regexp.exec("1234abcd").toString()); //test 1098
}

function testRegexpPCRE_1084() {
  var regexp = /\S{2,3}?/;
  assertEquals("**", regexp.exec("*** Failers").toString()); //test 1099
}

function testRegexpPCRE_1085() {
  var regexp = /\S{2,3}?/;
  assertEquals(null, regexp.exec("       ")); //test 1100
}

function testRegexpPCRE_1086() {
  var regexp = />\s+</;
  assertEquals(">      <", regexp.exec("12>      <34").toString()); //test 1101
}

function testRegexpPCRE_1087() {
  var regexp = />\s+</;
  assertEquals(null, regexp.exec("*** Failers")); //test 1102
}

function testRegexpPCRE_1088() {
  var regexp = />\s{2,3}</;
  assertEquals(">  <", regexp.exec("ab>  <cd").toString()); //test 1103
}

function testRegexpPCRE_1089() {
  var regexp = />\s{2,3}</;
  assertEquals(">   <", regexp.exec("ab>   <ce").toString()); //test 1104
}

function testRegexpPCRE_1090() {
  var regexp = />\s{2,3}</;
  assertEquals(null, regexp.exec("*** Failers")); //test 1105
}

function testRegexpPCRE_1091() {
  var regexp = />\s{2,3}</;
  assertEquals(null, regexp.exec("ab>    <cd ")); //test 1106
}

function testRegexpPCRE_1092() {
  var regexp = />\s{2,3}?</;
  assertEquals(">  <", regexp.exec("ab>  <cd").toString()); //test 1107
}

function testRegexpPCRE_1093() {
  var regexp = />\s{2,3}?</;
  assertEquals(">   <", regexp.exec("ab>   <ce").toString()); //test 1108
}

function testRegexpPCRE_1094() {
  var regexp = />\s{2,3}?</;
  assertEquals(null, regexp.exec("*** Failers")); //test 1109
}

function testRegexpPCRE_1095() {
  var regexp = />\s{2,3}?</;
  assertEquals(null, regexp.exec("ab>    <cd ")); //test 1110
}

function testRegexpPCRE_1096() {
  var regexp = /\w+/;
  assertEquals("12", regexp.exec("12      34").toString()); //test 1111
}

function testRegexpPCRE_1097() {
  var regexp = /\w+/;
  assertEquals("Failers", regexp.exec("*** Failers").toString()); //test 1112
}

function testRegexpPCRE_1098() {
  var regexp = /\w+/;
  assertEquals(null, regexp.exec("+++=*! ")); //test 1113
}

function testRegexpPCRE_1099() {
  var regexp = /\w{2,3}/;
  assertEquals("ab", regexp.exec("ab  cd").toString()); //test 1114
}

function testRegexpPCRE_1100() {
  var regexp = /\w{2,3}/;
  assertEquals("abc", regexp.exec("abcd ce").toString()); //test 1115
}

function testRegexpPCRE_1101() {
  var regexp = /\w{2,3}/;
  assertEquals("Fai", regexp.exec("*** Failers").toString()); //test 1116
}

function testRegexpPCRE_1102() {
  var regexp = /\w{2,3}/;
  assertEquals(null, regexp.exec("a.b.c")); //test 1117
}

function testRegexpPCRE_1103() {
  var regexp = /\w{2,3}?/;
  assertEquals("ab", regexp.exec("ab  cd").toString()); //test 1118
}

function testRegexpPCRE_1104() {
  var regexp = /\w{2,3}?/;
  assertEquals("ab", regexp.exec("abcd ce").toString()); //test 1119
}

function testRegexpPCRE_1105() {
  var regexp = /\w{2,3}?/;
  assertEquals("Fa", regexp.exec("*** Failers").toString()); //test 1120
}

function testRegexpPCRE_1106() {
  var regexp = /\w{2,3}?/;
  assertEquals(null, regexp.exec("a.b.c")); //test 1121
}

function testRegexpPCRE_1107() {
  var regexp = /\W+/;
  assertEquals("====", regexp.exec("12====34").toString()); //test 1122
}

function testRegexpPCRE_1108() {
  var regexp = /\W+/;
  assertEquals("*** ", regexp.exec("*** Failers").toString()); //test 1123
}

function testRegexpPCRE_1109() {
  var regexp = /\W+/;
  assertEquals(" ", regexp.exec("abcd ").toString()); //test 1124
}

function testRegexpPCRE_1110() {
  var regexp = /\W{2,3}/;
  assertEquals("===", regexp.exec("ab====cd").toString()); //test 1125
}

function testRegexpPCRE_1111() {
  var regexp = /\W{2,3}/;
  assertEquals("==", regexp.exec("ab==cd").toString()); //test 1126
}

function testRegexpPCRE_1112() {
  var regexp = /\W{2,3}/;
  assertEquals("***", regexp.exec("*** Failers").toString()); //test 1127
}

function testRegexpPCRE_1113() {
  var regexp = /\W{2,3}/;
  assertEquals(null, regexp.exec("a.b.c")); //test 1128
}

function testRegexpPCRE_1114() {
  var regexp = /\W{2,3}?/;
  assertEquals("==", regexp.exec("ab====cd").toString()); //test 1129
}

function testRegexpPCRE_1115() {
  var regexp = /\W{2,3}?/;
  assertEquals("==", regexp.exec("ab==cd").toString()); //test 1130
}

function testRegexpPCRE_1116() {
  var regexp = /\W{2,3}?/;
  assertEquals("**", regexp.exec("*** Failers").toString()); //test 1131
}

function testRegexpPCRE_1117() {
  var regexp = /\W{2,3}?/;
  assertEquals(null, regexp.exec("a.b.c")); //test 1132
}

function testRegexpPCRE_1118() {
  var regexp = /\W{2,3}?/;
  assertEquals(null, regexp.exec("x{100}")); //test 1133
}

function testRegexpPCRE_1119() {
  var regexp = /\W{2,3}?/;
  assertEquals(null, regexp.exec("Zx{100}")); //test 1134
}

function testRegexpPCRE_1120() {
  var regexp = /\W{2,3}?/;
  assertEquals(null, regexp.exec("x{100}Z")); //test 1135
}

function testRegexpPCRE_1121() {
  var regexp = /\W{2,3}?/;
  assertEquals("**", regexp.exec("*** Failers ").toString()); //test 1136
}

function testRegexpPCRE_1122() {
  var regexp = /\W{2,3}?/;
  assertEquals(null, regexp.exec("Zx{100}")); //test 1137
}

function testRegexpPCRE_1123() {
  var regexp = /\W{2,3}?/;
  assertEquals(null, regexp.exec("x{100}")); //test 1138
}

function testRegexpPCRE_1124() {
  var regexp = /\W{2,3}?/;
  assertEquals(null, regexp.exec("x{100}Z")); //test 1139
}

function testRegexpPCRE_1125() {
  var regexp = /\W{2,3}?/;
  assertEquals("**", regexp.exec("*** Failers ").toString()); //test 1140
}

function testRegexpPCRE_1126() {
  var regexp = /\W{2,3}?/;
  assertEquals(null, regexp.exec("abcx{200}X")); //test 1141
}

function testRegexpPCRE_1127() {
  var regexp = /\W{2,3}?/;
  assertEquals(null, regexp.exec("abcx{100}X ")); //test 1142
}

function testRegexpPCRE_1128() {
  var regexp = /\W{2,3}?/;
  assertEquals("**", regexp.exec("*** Failers").toString()); //test 1143
}

function testRegexpPCRE_1129() {
  var regexp = /\W{2,3}?/;
  assertEquals("  ", regexp.exec("X  ").toString()); //test 1144
}

function testRegexpPCRE_1130() {
  var regexp = /\W{2,3}?/;
  assertEquals(null, regexp.exec("abcx{200}X")); //test 1145
}

function testRegexpPCRE_1131() {
  var regexp = /\W{2,3}?/;
  assertEquals(null, regexp.exec("abcx{100}X ")); //test 1146
}

function testRegexpPCRE_1132() {
  var regexp = /\W{2,3}?/;
  assertEquals(null, regexp.exec("abQX ")); //test 1147
}

function testRegexpPCRE_1133() {
  var regexp = /\W{2,3}?/;
  assertEquals("**", regexp.exec("*** Failers").toString()); //test 1148
}

function testRegexpPCRE_1134() {
  var regexp = /\W{2,3}?/;
  assertEquals("  ", regexp.exec("X  ").toString()); //test 1149
}

function testRegexpPCRE_1135() {
  var regexp = /\W{2,3}?/;
  assertEquals(null, regexp.exec("abcx{100}x{200}x{100}X")); //test 1150
}

function testRegexpPCRE_1136() {
  var regexp = /\W{2,3}?/;
  assertEquals("**", regexp.exec("*** Failers").toString()); //test 1151
}

function testRegexpPCRE_1137() {
  var regexp = /\W{2,3}?/;
  assertEquals(null, regexp.exec("abcx{200}X")); //test 1152
}

function testRegexpPCRE_1138() {
  var regexp = /\W{2,3}?/;
  assertEquals("  ", regexp.exec("X  ").toString()); //test 1153
}

function testRegexpPCRE_1139() {
  var regexp = /\W{2,3}?/;
  assertEquals(null, regexp.exec("AX")); //test 1154
}

function testRegexpPCRE_1140() {
  var regexp = /\W{2,3}?/;
  assertEquals(null, regexp.exec("x{150}X")); //test 1155
}

function testRegexpPCRE_1141() {
  var regexp = /\W{2,3}?/;
  assertEquals(null, regexp.exec("x{500}X ")); //test 1156
}

function testRegexpPCRE_1142() {
  var regexp = /\W{2,3}?/;
  assertEquals("**", regexp.exec("*** Failers").toString()); //test 1157
}

function testRegexpPCRE_1143() {
  var regexp = /\W{2,3}?/;
  assertEquals(null, regexp.exec("x{100}X")); //test 1158
}

function testRegexpPCRE_1144() {
  var regexp = /\W{2,3}?/;
  assertEquals("  ", regexp.exec("x{200}X   ").toString()); //test 1159
}

function testRegexpPCRE_1145() {
  var regexp = /\W{2,3}?/;
  assertEquals(null, regexp.exec("AX")); //test 1160
}

function testRegexpPCRE_1146() {
  var regexp = /\W{2,3}?/;
  assertEquals(null, regexp.exec("x{150}X")); //test 1161
}

function testRegexpPCRE_1147() {
  var regexp = /\W{2,3}?/;
  assertEquals(null, regexp.exec("x{500}X ")); //test 1162
}

function testRegexpPCRE_1148() {
  var regexp = /\W{2,3}?/;
  assertEquals("**", regexp.exec("*** Failers").toString()); //test 1163
}

function testRegexpPCRE_1149() {
  var regexp = /\W{2,3}?/;
  assertEquals(null, regexp.exec("x{100}X")); //test 1164
}

function testRegexpPCRE_1150() {
  var regexp = /\W{2,3}?/;
  assertEquals("  ", regexp.exec("x{200}X   ").toString()); //test 1165
}

function testRegexpPCRE_1151() {
  var regexp = /\W{2,3}?/;
  assertEquals(null, regexp.exec("QX ")); //test 1166
}

function testRegexpPCRE_1152() {
  var regexp = /\W{2,3}?/;
  assertEquals(null, regexp.exec("AX")); //test 1167
}

function testRegexpPCRE_1153() {
  var regexp = /\W{2,3}?/;
  assertEquals(null, regexp.exec("x{500}X ")); //test 1168
}

function testRegexpPCRE_1154() {
  var regexp = /\W{2,3}?/;
  assertEquals("**", regexp.exec("*** Failers").toString()); //test 1169
}

function testRegexpPCRE_1155() {
  var regexp = /\W{2,3}?/;
  assertEquals(null, regexp.exec("x{100}X")); //test 1170
}

function testRegexpPCRE_1156() {
  var regexp = /\W{2,3}?/;
  assertEquals(null, regexp.exec("x{150}X")); //test 1171
}

function testRegexpPCRE_1157() {
  var regexp = /\W{2,3}?/;
  assertEquals("  ", regexp.exec("x{200}X   ").toString()); //test 1172
}

function testRegexpPCRE_1158() {
  var regexp = /a\Cb/;
  assertEquals(null, regexp.exec("aXb")); //test 1173
}

function testRegexpPCRE_1159() {
  var regexp = /a\Cb/;
  assertEquals(null, regexp.exec("a\nb")); //test 1174
}

function testRegexpPCRE_1160() {
  var regexp = /a\Cb/;
  assertEquals(null, regexp.exec("aXb")); //test 1175
}

function testRegexpPCRE_1161() {
  var regexp = /a\Cb/;
  assertEquals(null, regexp.exec("a\nb")); //test 1176
}

function testRegexpPCRE_1162() {
  var regexp = /a\Cb/;
  assertEquals(null, regexp.exec("*** Failers ")); //test 1177
}

function testRegexpPCRE_1163() {
  var regexp = /a\Cb/;
  assertEquals(null, regexp.exec("ax{100}b ")); //test 1178
}

function testRegexpPCRE_1164() {
  var regexp = /a\Cb/;
  assertEquals(null, regexp.exec("z")); //test 1179
}

function testRegexpPCRE_1165() {
  var regexp = /a\Cb/;
  assertEquals(null, regexp.exec("Z ")); //test 1180
}

function testRegexpPCRE_1166() {
  var regexp = /a\Cb/;
  assertEquals(null, regexp.exec("x{100}")); //test 1181
}

function testRegexpPCRE_1167() {
  var regexp = /a\Cb/;
  assertEquals(null, regexp.exec("*** Failers")); //test 1182
}

function testRegexpPCRE_1168() {
  var regexp = /a\Cb/;
  assertEquals(null, regexp.exec("x{102}")); //test 1183
}

function testRegexpPCRE_1169() {
  var regexp = /a\Cb/;
  assertEquals(null, regexp.exec("y    ")); //test 1184
}

function testRegexpPCRE_1170() {
  var regexp = /[\xFF]/;
  assertEquals("\xff", regexp.exec(">\xff<").toString()); //test 1185
}

function testRegexpPCRE_1171() {
  var regexp = /[\xff]/;
  assertEquals(null, regexp.exec(">x{ff}<")); //test 1186
}

function testRegexpPCRE_1172() {
  var regexp = /[^\xFF]/;
  assertEquals("X", regexp.exec("XYZ").toString()); //test 1187
}

function testRegexpPCRE_1173() {
  var regexp = /[^\xff]/;
  assertEquals("X", regexp.exec("XYZ").toString()); //test 1188
}

function testRegexpPCRE_1174() {
  var regexp = /[^\xff]/;
  assertEquals("x", regexp.exec("x{123} ").toString()); //test 1189
}

function testRegexpPCRE_1175() {
  var regexp = /(|a)/g;
  assertEquals(",", regexp.exec("catac").toString()); //test 1190
  assertEquals(",", regexp.exec("ax{256}a ").toString()); //test 1191
  assertEquals(",", regexp.exec("x{85}").toString()); //test 1192
  assertEquals(",", regexp.exec("\u1234 ").toString()); //test 1193
  assertEquals(",", regexp.exec("\u1234 ").toString()); //test 1194
  assertEquals(",", regexp.exec("abcdefg").toString()); //test 1195
  assertEquals(",", regexp.exec("ab").toString()); //test 1196
  assertEquals(",", regexp.exec("a ").toString()); //test 1197
}

function testRegexpPCRE_1176() {
  var regexp = /\S\S/g;
  assertEquals("Ax", regexp.exec("Ax{a3}BC").toString()); //test 1198
}

function testRegexpPCRE_1177() {
  var regexp = /\S{2}/g;
  assertEquals("Ax", regexp.exec("Ax{a3}BC").toString()); //test 1199
}

function testRegexpPCRE_1178() {
  var regexp = /\W\W/g;
  assertEquals("}=", regexp.exec("+x{a3}== ").toString()); //test 1200
}

function testRegexpPCRE_1179() {
  var regexp = /\W{2}/g;
  assertEquals("}=", regexp.exec("+x{a3}== ").toString()); //test 1201
}

function testRegexpPCRE_1180() {
  var regexp = /\S/g;
  assertEquals("x", regexp.exec("x{442}x{435}x{441}x{442}").toString()); //test 1202
}

function testRegexpPCRE_1181() {
  var regexp = /[\S]/g;
  assertEquals("x", regexp.exec("x{442}x{435}x{441}x{442}").toString()); //test 1203
}

function testRegexpPCRE_1182() {
  var regexp = /\D/g;
  assertEquals("x", regexp.exec("x{442}x{435}x{441}x{442}").toString()); //test 1204
}

function testRegexpPCRE_1183() {
  var regexp = /[\D]/g;
  assertEquals("x", regexp.exec("x{442}x{435}x{441}x{442}").toString()); //test 1205
}

function testRegexpPCRE_1184() {
  var regexp = /\W/g;
  assertEquals("{", regexp.exec("x{2442}x{2435}x{2441}x{2442}").toString()); //test 1206
}

function testRegexpPCRE_1185() {
  var regexp = /[\W]/g;
  assertEquals("{", regexp.exec("x{2442}x{2435}x{2441}x{2442}").toString()); //test 1207
}

function testRegexpPCRE_1186() {
  var regexp = /[\S\s]*/;
  assertEquals("abc\n\x0dx{442}x{435}x{441}x{442}xyz ", regexp.exec("abc\n\x0dx{442}x{435}x{441}x{442}xyz ").toString()); //test 1208
}

function testRegexpPCRE_1187() {
  var regexp = /[\S\s]*/;
  assertEquals("x{442}x{435}x{441}x{442}", regexp.exec("x{442}x{435}x{441}x{442}").toString()); //test 1209
}

function testRegexpPCRE_1188() {
  var regexp = /.[^\S]./g;
  assertEquals("c d", regexp.exec("abc defx{442}x{443}xyz\npqr").toString()); //test 1210
}

function testRegexpPCRE_1189() {
  var regexp = /.[^\S\n]./g;
  assertEquals("c d", regexp.exec("abc defx{442}x{443}xyz\npqr").toString()); //test 1211
}

function testRegexpPCRE_1190() {
  var regexp = /[[:^alnum:]]/g;
  assertEquals(null, regexp.exec("+x{2442}")); //test 1212
}

function testRegexpPCRE_1191() {
  var regexp = /[[:^alpha:]]/g;
  assertEquals(null, regexp.exec("+x{2442}")); //test 1213
}

function testRegexpPCRE_1192() {
  var regexp = /[[:^ascii:]]/g;
  assertEquals(null, regexp.exec("Ax{442}")); //test 1214
}

function testRegexpPCRE_1193() {
  var regexp = /[[:^blank:]]/g;
  assertEquals(null, regexp.exec("Ax{442}")); //test 1215
}

function testRegexpPCRE_1194() {
  var regexp = /[[:^cntrl:]]/g;
  assertEquals(null, regexp.exec("Ax{442}")); //test 1216
}

function testRegexpPCRE_1195() {
  var regexp = /[[:^digit:]]/g;
  assertEquals(null, regexp.exec("Ax{442}")); //test 1217
}

function testRegexpPCRE_1196() {
  var regexp = /[[:^graph:]]/g;
  assertEquals(null, regexp.exec("\x19x{e01ff}")); //test 1218
}

function testRegexpPCRE_1197() {
  var regexp = /[[:^lower:]]/g;
  assertEquals(null, regexp.exec("Ax{422}")); //test 1219
}

function testRegexpPCRE_1198() {
  var regexp = /[[:^print:]]/g;
  assertEquals(null, regexp.exec("x{19}x{e01ff}")); //test 1220
}

function testRegexpPCRE_1199() {
  var regexp = /[[:^punct:]]/g;
  assertEquals(null, regexp.exec("Ax{442}")); //test 1221
}

function testRegexpPCRE_1200() {
  var regexp = /[[:^space:]]/g;
  assertEquals(null, regexp.exec("Ax{442}")); //test 1222
}

function testRegexpPCRE_1201() {
  var regexp = /[[:^upper:]]/g;
  assertEquals(null, regexp.exec("ax{442}")); //test 1223
}

function testRegexpPCRE_1202() {
  var regexp = /[[:^word:]]/g;
  assertEquals(null, regexp.exec("+x{2442}")); //test 1224
}

function testRegexpPCRE_1203() {
  var regexp = /[[:^xdigit:]]/g;
  assertEquals(null, regexp.exec("Mx{442}")); //test 1225
}

function testRegexpPCRE_1204() {
  var regexp = /^[^d]*?$/;
  assertEquals("abc", regexp.exec("abc").toString()); //test 1226
}

function testRegexpPCRE_1205() {
  var regexp = /^[^d]*?$/;
  assertEquals("abc", regexp.exec("abc").toString()); //test 1227
}

function testRegexpPCRE_1206() {
  var regexp = /^[^d]*?$/i;
  assertEquals("abc", regexp.exec("abc").toString()); //test 1228
}

function testRegexpPCRE_1207() {
  var regexp = /^[^d]*?$/i;
  assertEquals("abc", regexp.exec("abc").toString()); //test 1229
}

function testRegexpPCRE_1208() {
  var regexp = / End of testinput4 /;
  assertEquals(null, regexp.exec("x{100}ax{1234}bcd")); //test 1230
}

function testRegexpPCRE_1209() {
  var regexp = /\xff/;
  assertEquals(null, regexp.exec("x{0041}x{2262}x{0391}x{002e}")); //test 1231
}

function testRegexpPCRE_1210() {
  var regexp = /\xff/;
  assertEquals(null, regexp.exec("x{D55c}x{ad6d}x{C5B4} ")); //test 1232
}

function testRegexpPCRE_1211() {
  var regexp = /\xff/;
  assertEquals(null, regexp.exec("x{65e5}x{672c}x{8a9e}")); //test 1233
}

function testRegexpPCRE_1212() {
  var regexp = /.{3,5}X/;
  assertEquals("{861}X", regexp.exec("x{212ab}x{212ab}x{212ab}x{861}X").toString()); //test 1234
}

function testRegexpPCRE_1213() {
  var regexp = /.{3,5}?/;
  assertEquals("x{2", regexp.exec("x{212ab}x{212ab}x{212ab}x{861}").toString()); //test 1235
}

function testRegexpPCRE_1214() {
  var regexp = /.{3,5}?/;
  assertEquals("x{c", regexp.exec("x{c0}b").toString()); //test 1236
}

function testRegexpPCRE_1215() {
  var regexp = /.{3,5}?/;
  assertEquals("ax{", regexp.exec("ax{c0}aaaa/ ").toString()); //test 1237
}

function testRegexpPCRE_1216() {
  var regexp = /.{3,5}?/;
  assertEquals("ax{", regexp.exec("ax{c0}aaaa/ ").toString()); //test 1238
}

function testRegexpPCRE_1217() {
  var regexp = /.{3,5}?/;
  assertEquals("ax{", regexp.exec("ax{c0}ax{c0}aaa/ ").toString()); //test 1239
}

function testRegexpPCRE_1218() {
  var regexp = /.{3,5}?/;
  assertEquals("ax{", regexp.exec("ax{c0}aaaa/ ").toString()); //test 1240
}

function testRegexpPCRE_1219() {
  var regexp = /.{3,5}?/;
  assertEquals("ax{", regexp.exec("ax{c0}ax{c0}aaa/ ").toString()); //test 1241
}

function testRegexpPCRE_1220() {
  var regexp = /.{3,5}?/;
  assertEquals("ax{", regexp.exec("ax{c0}aaaa/ ").toString()); //test 1242
}

function testRegexpPCRE_1221() {
  var regexp = /.{3,5}?/;
  assertEquals("ax{", regexp.exec("ax{c0}ax{c0}aaa/ ").toString()); //test 1243
}

function testRegexpPCRE_1222() {
  var regexp = /.{3,5}?/;
  assertEquals("Sho", regexp.exec("Should produce an error diagnostic").toString()); //test 1244
}

function testRegexpPCRE_1223() {
  var regexp = /X(\C)(.*)/;
  assertEquals(null, regexp.exec("Xx{1234}")); //test 1245
}

function testRegexpPCRE_1224() {
  var regexp = /X(\C)(.*)/;
  assertEquals(null, regexp.exec("X\nabc ")); //test 1246
}

function testRegexpPCRE_1225() {
  var regexp = /^[ab]/;
  assertEquals("b", regexp.exec("bar").toString()); //test 1247
}

function testRegexpPCRE_1226() {
  var regexp = /^[ab]/;
  assertEquals(null, regexp.exec("*** Failers")); //test 1248
}

function testRegexpPCRE_1227() {
  var regexp = /^[ab]/;
  assertEquals(null, regexp.exec("c")); //test 1249
}

function testRegexpPCRE_1228() {
  var regexp = /^[ab]/;
  assertEquals(null, regexp.exec("x{ff}")); //test 1250
}

function testRegexpPCRE_1229() {
  var regexp = /^[ab]/;
  assertEquals(null, regexp.exec("x{100}  ")); //test 1251
}

function testRegexpPCRE_1230() {
  var regexp = /^[^ab]/;
  assertEquals("c", regexp.exec("c").toString()); //test 1252
}

function testRegexpPCRE_1231() {
  var regexp = /^[^ab]/;
  assertEquals("x", regexp.exec("x{ff}").toString()); //test 1253
}

function testRegexpPCRE_1232() {
  var regexp = /^[^ab]/;
  assertEquals("x", regexp.exec("x{100}  ").toString()); //test 1254
}

function testRegexpPCRE_1233() {
  var regexp = /^[^ab]/;
  assertEquals("*", regexp.exec("*** Failers ").toString()); //test 1255
}

function testRegexpPCRE_1234() {
  var regexp = /^[^ab]/;
  assertEquals(null, regexp.exec("aaa")); //test 1256
}

function testRegexpPCRE_1235() {
  var regexp = /[^ab\xC0-\xF0]/;
  assertEquals("x", regexp.exec("x{f1}").toString()); //test 1257
}

function testRegexpPCRE_1236() {
  var regexp = /[^ab\xC0-\xF0]/;
  assertEquals("x", regexp.exec("x{bf}").toString()); //test 1258
}

function testRegexpPCRE_1237() {
  var regexp = /[^ab\xC0-\xF0]/;
  assertEquals("x", regexp.exec("x{100}").toString()); //test 1259
}

function testRegexpPCRE_1238() {
  var regexp = /[^ab\xC0-\xF0]/;
  assertEquals("x", regexp.exec("x{1000}   ").toString()); //test 1260
}

function testRegexpPCRE_1239() {
  var regexp = /[^ab\xC0-\xF0]/;
  assertEquals("*", regexp.exec("*** Failers").toString()); //test 1261
}

function testRegexpPCRE_1240() {
  var regexp = /[^ab\xC0-\xF0]/;
  assertEquals("x", regexp.exec("x{c0} ").toString()); //test 1262
}

function testRegexpPCRE_1241() {
  var regexp = /[^ab\xC0-\xF0]/;
  assertEquals("x", regexp.exec("x{f0} ").toString()); //test 1263
}

function testRegexpPCRE_1242() {
  var regexp = /[^ab\xC0-\xF0]/;
  assertEquals("1", regexp.exec("1234").toString()); //test 1264
}

function testRegexpPCRE_1243() {
  var regexp = /[^ab\xC0-\xF0]/;
  assertEquals("\"", regexp.exec("\"1234\" ").toString()); //test 1265
}

function testRegexpPCRE_1244() {
  var regexp = /[^ab\xC0-\xF0]/;
  assertEquals("x", regexp.exec("x{100}1234").toString()); //test 1266
}

function testRegexpPCRE_1245() {
  var regexp = /[^ab\xC0-\xF0]/;
  assertEquals("\"", regexp.exec("\"x{100}1234\"  ").toString()); //test 1267
}

function testRegexpPCRE_1246() {
  var regexp = /[^ab\xC0-\xF0]/;
  assertEquals("x", regexp.exec("x{100}x{100}12ab ").toString()); //test 1268
}

function testRegexpPCRE_1247() {
  var regexp = /[^ab\xC0-\xF0]/;
  assertEquals("x", regexp.exec("x{100}x{100}\"12\" ").toString()); //test 1269
}

function testRegexpPCRE_1248() {
  var regexp = /[^ab\xC0-\xF0]/;
  assertEquals("*", regexp.exec("*** Failers ").toString()); //test 1270
}

function testRegexpPCRE_1249() {
  var regexp = /[^ab\xC0-\xF0]/;
  assertEquals("x", regexp.exec("x{100}x{100}abcd").toString()); //test 1271
}

function testRegexpPCRE_1250() {
  var regexp = /[^ab\xC0-\xF0]/;
  assertEquals("A", regexp.exec("A").toString()); //test 1272
}

function testRegexpPCRE_1251() {
  var regexp = /[^ab\xC0-\xF0]/;
  assertEquals("x", regexp.exec("x{100}").toString()); //test 1273
}

function testRegexpPCRE_1252() {
  var regexp = /[^ab\xC0-\xF0]/;
  assertEquals("Z", regexp.exec("Zx{100}").toString()); //test 1274
}

function testRegexpPCRE_1253() {
  var regexp = /[^ab\xC0-\xF0]/;
  assertEquals("x", regexp.exec("x{100}Z").toString()); //test 1275
}

function testRegexpPCRE_1254() {
  var regexp = /[^ab\xC0-\xF0]/;
  assertEquals("*", regexp.exec("*** Failers ").toString()); //test 1276
}

function testRegexpPCRE_1255() {
  var regexp = /[^ab\xC0-\xF0]/;
  assertEquals("Z", regexp.exec("Zx{100}").toString()); //test 1277
}

function testRegexpPCRE_1256() {
  var regexp = /[^ab\xC0-\xF0]/;
  assertEquals("x", regexp.exec("x{100}").toString()); //test 1278
}

function testRegexpPCRE_1257() {
  var regexp = /[^ab\xC0-\xF0]/;
  assertEquals("x", regexp.exec("x{100}Z").toString()); //test 1279
}

function testRegexpPCRE_1258() {
  var regexp = /[^ab\xC0-\xF0]/;
  assertEquals("*", regexp.exec("*** Failers ").toString()); //test 1280
}

function testRegexpPCRE_1259() {
  var regexp = /[^ab\xC0-\xF0]/;
  assertEquals("x", regexp.exec("x{100}").toString()); //test 1281
}

function testRegexpPCRE_1260() {
  var regexp = /[^ab\xC0-\xF0]/;
  assertEquals("x", regexp.exec("x{104}").toString()); //test 1282
}

function testRegexpPCRE_1261() {
  var regexp = /[^ab\xC0-\xF0]/;
  assertEquals("*", regexp.exec("*** Failers").toString()); //test 1283
}

function testRegexpPCRE_1262() {
  var regexp = /[^ab\xC0-\xF0]/;
  assertEquals("x", regexp.exec("x{105}").toString()); //test 1284
}

function testRegexpPCRE_1263() {
  var regexp = /[^ab\xC0-\xF0]/;
  assertEquals("x", regexp.exec("x{ff}    ").toString()); //test 1285
}

function testRegexpPCRE_1264() {
  var regexp = /[^ab\xC0-\xF0]/;
  assertEquals("x", regexp.exec("x{100}").toString()); //test 1286
}

function testRegexpPCRE_1265() {
  var regexp = /[^ab\xC0-\xF0]/;
  assertEquals("\u0100", regexp.exec("\u0100 ").toString()); //test 1287
}

function testRegexpPCRE_1266() {
  var regexp = /[\xFF]/;
  assertEquals("\xff", regexp.exec(">\xff<").toString()); //test 1288
}

function testRegexpPCRE_1267() {
  var regexp = /[\xff]/;
  assertEquals(null, regexp.exec(">x{ff}<")); //test 1289
}

function testRegexpPCRE_1268() {
  var regexp = /[^\xff]/;
  assertEquals("\xd6", regexp.exec("\xd6 # Matches without Study").toString()); //test 1290
}

function testRegexpPCRE_1269() {
  var regexp = /[^\xff]/;
  assertEquals("x", regexp.exec("x{d6}").toString()); //test 1291
}

function testRegexpPCRE_1270() {
  var regexp = /[^\xff]/;
  assertEquals("\xd6", regexp.exec("\xd6 <-- Same with Study").toString()); //test 1292
}

function testRegexpPCRE_1271() {
  var regexp = /[^\xff]/;
  assertEquals("x", regexp.exec("x{d6}").toString()); //test 1293
}

function testRegexpPCRE_1272() {
  var regexp = /[^\xff]/;
  assertEquals("\xd6", regexp.exec("\xd6 # Matches without Study").toString()); //test 1294
}

function testRegexpPCRE_1273() {
  var regexp = /[^\xff]/;
  assertEquals("x", regexp.exec("x{d6} ").toString()); //test 1295
}

function testRegexpPCRE_1274() {
  var regexp = /[^\xff]/;
  assertEquals("\xd6", regexp.exec("\xd6 <-- Same with Study").toString()); //test 1296
}

function testRegexpPCRE_1275() {
  var regexp = /[^\xff]/;
  assertEquals("x", regexp.exec("x{d6} ").toString()); //test 1297
}

function testRegexpPCRE_1276() {
  var regexp = /[^\xff]/;
  assertEquals("\ufffd", regexp.exec("\ufffd]").toString()); //test 1298
}

function testRegexpPCRE_1277() {
  var regexp = /[^\xff]/;
  assertEquals("\ufffd", regexp.exec("\ufffd").toString()); //test 1299
}

function testRegexpPCRE_1278() {
  var regexp = /[^\xff]/;
  assertEquals("\ufffd", regexp.exec("\ufffd\ufffd\ufffd").toString()); //test 1300
}

function testRegexpPCRE_1279() {
  var regexp = /[^\xff]/;
  assertEquals("\ufffd", regexp.exec("\ufffd\ufffd\ufffd?").toString()); //test 1301
}

function testRegexpPCRE_1280() {
  var regexp = /anything/;
  assertEquals(null, regexp.exec("\xc0\x80")); //test 1302
}

function testRegexpPCRE_1281() {
  var regexp = /anything/;
  assertEquals(null, regexp.exec("\xc1\x8f ")); //test 1303
}

function testRegexpPCRE_1282() {
  var regexp = /anything/;
  assertEquals(null, regexp.exec("\xe0\x9f\x80")); //test 1304
}

function testRegexpPCRE_1283() {
  var regexp = /anything/;
  assertEquals(null, regexp.exec("\xf0\x8f\x80\x80 ")); //test 1305
}

function testRegexpPCRE_1284() {
  var regexp = /anything/;
  assertEquals(null, regexp.exec("\xf8\x87\x80\x80\x80  ")); //test 1306
}

function testRegexpPCRE_1285() {
  var regexp = /anything/;
  assertEquals(null, regexp.exec("\xfc\x83\x80\x80\x80\x80")); //test 1307
}

function testRegexpPCRE_1286() {
  var regexp = /anything/;
  assertEquals(null, regexp.exec("\xfe\x80\x80\x80\x80\x80  ")); //test 1308
}

function testRegexpPCRE_1287() {
  var regexp = /anything/;
  assertEquals(null, regexp.exec("\xff\x80\x80\x80\x80\x80  ")); //test 1309
}

function testRegexpPCRE_1288() {
  var regexp = /anything/;
  assertEquals(null, regexp.exec("\xc3\x8f")); //test 1310
}

function testRegexpPCRE_1289() {
  var regexp = /anything/;
  assertEquals(null, regexp.exec("\xe0\xaf\x80")); //test 1311
}

function testRegexpPCRE_1290() {
  var regexp = /anything/;
  assertEquals(null, regexp.exec("\xe1\x80\x80")); //test 1312
}

function testRegexpPCRE_1291() {
  var regexp = /anything/;
  assertEquals(null, regexp.exec("\xf0\x9f\x80\x80 ")); //test 1313
}

function testRegexpPCRE_1292() {
  var regexp = /anything/;
  assertEquals(null, regexp.exec("\xf1\x8f\x80\x80 ")); //test 1314
}

function testRegexpPCRE_1293() {
  var regexp = /anything/;
  assertEquals(null, regexp.exec("\xf8\x88\x80\x80\x80  ")); //test 1315
}

function testRegexpPCRE_1294() {
  var regexp = /anything/;
  assertEquals(null, regexp.exec("\xf9\x87\x80\x80\x80  ")); //test 1316
}

function testRegexpPCRE_1295() {
  var regexp = /anything/;
  assertEquals(null, regexp.exec("\xfc\x84\x80\x80\x80\x80")); //test 1317
}

function testRegexpPCRE_1296() {
  var regexp = /anything/;
  assertEquals(null, regexp.exec("\xfd\x83\x80\x80\x80\x80")); //test 1318
}

function testRegexpPCRE_1297() {
  var regexp = /anything/;
  assertEquals(null, regexp.exec("?\xf8\x88\x80\x80\x80  ")); //test 1319
}

function testRegexpPCRE_1298() {
  var regexp = /anything/;
  assertEquals(null, regexp.exec("?\xf9\x87\x80\x80\x80  ")); //test 1320
}

function testRegexpPCRE_1299() {
  var regexp = /anything/;
  assertEquals(null, regexp.exec("?\xfc\x84\x80\x80\x80\x80")); //test 1321
}

function testRegexpPCRE_1300() {
  var regexp = /anything/;
  assertEquals(null, regexp.exec("?\xfd\x83\x80\x80\x80\x80")); //test 1322
}

function testRegexpPCRE_1301() {
  var regexp = /\W/;
  assertEquals(".", regexp.exec("A.B").toString()); //test 1323
}

function testRegexpPCRE_1302() {
  var regexp = /\W/;
  assertEquals("{", regexp.exec("Ax{100}B ").toString()); //test 1324
}

function testRegexpPCRE_1303() {
  var regexp = /\w/;
  assertEquals("x", regexp.exec("x{100}X   ").toString()); //test 1325
}

function testRegexpPCRE_1304() {
  var regexp = /\w/;
  assertEquals("a", regexp.exec("ax{1234}b").toString()); //test 1326
}

function testRegexpPCRE_1305() {
  var regexp = /\777/i;
  assertEquals(null, regexp.exec("AxxB     ")); //test 1327
}

function testRegexpPCRE_1306() {
  var regexp = /^abc./mg;
  assertEquals("abc1", regexp.exec("abc1 \nabc2 \x0babc3xx \x0cabc4 \x0dabc5xx \x0d\nabc6 x{0085}abc7 x{2028}abc8 x{2029}abc9 JUNK").toString()); //test 1328
}

function testRegexpPCRE_1307() {
  var regexp = /abc.$/mg;
  assertEquals("abc1", regexp.exec("abc1\n abc2\x0b abc3\x0c abc4\x0d abc5\x0d\n abc6x{0085} abc7x{2028} abc8x{2029} abc9").toString()); //test 1329
}

function testRegexpPCRE_1308() {
  var regexp = /^a\Rb/i;
  assertEquals(null, regexp.exec("a\nb")); //test 1330
}

function testRegexpPCRE_1309() {
  var regexp = /^a\Rb/i;
  assertEquals(null, regexp.exec("a\x0db")); //test 1331
}

function testRegexpPCRE_1310() {
  var regexp = /^a\Rb/i;
  assertEquals(null, regexp.exec("a\x0d\nb")); //test 1332
}

function testRegexpPCRE_1311() {
  var regexp = /^a\Rb/i;
  assertEquals(null, regexp.exec("a\x0bb")); //test 1333
}

function testRegexpPCRE_1312() {
  var regexp = /^a\Rb/i;
  assertEquals(null, regexp.exec("a\x0cb")); //test 1334
}

function testRegexpPCRE_1313() {
  var regexp = /^a\Rb/i;
  assertEquals(null, regexp.exec("ax{85}b   ")); //test 1335
}

function testRegexpPCRE_1314() {
  var regexp = /^a\Rb/i;
  assertEquals(null, regexp.exec("ax{2028}b ")); //test 1336
}

function testRegexpPCRE_1315() {
  var regexp = /^a\Rb/i;
  assertEquals(null, regexp.exec("ax{2029}b ")); //test 1337
}

function testRegexpPCRE_1316() {
  var regexp = /^a\Rb/i;
  assertEquals(null, regexp.exec("** Failers")); //test 1338
}

function testRegexpPCRE_1317() {
  var regexp = /^a\Rb/i;
  assertEquals(null, regexp.exec("a\n\x0db    ")); //test 1339
}

function testRegexpPCRE_1318() {
  var regexp = /^a\R*b/i;
  assertEquals("ab", regexp.exec("ab").toString()); //test 1340
}

function testRegexpPCRE_1319() {
  var regexp = /^a\R*b/i;
  assertEquals(null, regexp.exec("a\nb")); //test 1341
}

function testRegexpPCRE_1320() {
  var regexp = /^a\R*b/i;
  assertEquals(null, regexp.exec("a\x0db")); //test 1342
}

function testRegexpPCRE_1321() {
  var regexp = /^a\R*b/i;
  assertEquals(null, regexp.exec("a\x0d\nb")); //test 1343
}

function testRegexpPCRE_1322() {
  var regexp = /^a\R*b/i;
  assertEquals(null, regexp.exec("a\x0bb")); //test 1344
}

function testRegexpPCRE_1323() {
  var regexp = /^a\R*b/i;
  assertEquals(null, regexp.exec("a\x0cx{2028}x{2029}b")); //test 1345
}

function testRegexpPCRE_1324() {
  var regexp = /^a\R*b/i;
  assertEquals(null, regexp.exec("ax{85}b   ")); //test 1346
}

function testRegexpPCRE_1325() {
  var regexp = /^a\R*b/i;
  assertEquals(null, regexp.exec("a\n\x0db    ")); //test 1347
}

function testRegexpPCRE_1326() {
  var regexp = /^a\R*b/i;
  assertEquals(null, regexp.exec("a\n\x0dx{85}\x0cb ")); //test 1348
}

function testRegexpPCRE_1327() {
  var regexp = /^a\R+b/i;
  assertEquals(null, regexp.exec("a\nb")); //test 1349
}

function testRegexpPCRE_1328() {
  var regexp = /^a\R+b/i;
  assertEquals(null, regexp.exec("a\x0db")); //test 1350
}

function testRegexpPCRE_1329() {
  var regexp = /^a\R+b/i;
  assertEquals(null, regexp.exec("a\x0d\nb")); //test 1351
}

function testRegexpPCRE_1330() {
  var regexp = /^a\R+b/i;
  assertEquals(null, regexp.exec("a\x0bb")); //test 1352
}

function testRegexpPCRE_1331() {
  var regexp = /^a\R+b/i;
  assertEquals(null, regexp.exec("a\x0cx{2028}x{2029}b")); //test 1353
}

function testRegexpPCRE_1332() {
  var regexp = /^a\R+b/i;
  assertEquals(null, regexp.exec("ax{85}b   ")); //test 1354
}

function testRegexpPCRE_1333() {
  var regexp = /^a\R+b/i;
  assertEquals(null, regexp.exec("a\n\x0db    ")); //test 1355
}

function testRegexpPCRE_1334() {
  var regexp = /^a\R+b/i;
  assertEquals(null, regexp.exec("a\n\x0dx{85}\x0cb ")); //test 1356
}

function testRegexpPCRE_1335() {
  var regexp = /^a\R+b/i;
  assertEquals(null, regexp.exec("** Failers")); //test 1357
}

function testRegexpPCRE_1336() {
  var regexp = /^a\R+b/i;
  assertEquals(null, regexp.exec("ab  ")); //test 1358
}

function testRegexpPCRE_1337() {
  var regexp = /^a\R{1,3}b/i;
  assertEquals(null, regexp.exec("a\nb")); //test 1359
}

function testRegexpPCRE_1338() {
  var regexp = /^a\R{1,3}b/i;
  assertEquals(null, regexp.exec("a\n\x0db")); //test 1360
}

function testRegexpPCRE_1339() {
  var regexp = /^a\R{1,3}b/i;
  assertEquals(null, regexp.exec("a\n\x0dx{85}b")); //test 1361
}

function testRegexpPCRE_1340() {
  var regexp = /^a\R{1,3}b/i;
  assertEquals(null, regexp.exec("a\x0d\n\x0d\nb ")); //test 1362
}

function testRegexpPCRE_1341() {
  var regexp = /^a\R{1,3}b/i;
  assertEquals(null, regexp.exec("a\x0d\n\x0d\n\x0d\nb ")); //test 1363
}

function testRegexpPCRE_1342() {
  var regexp = /^a\R{1,3}b/i;
  assertEquals(null, regexp.exec("a\n\x0d\n\x0db")); //test 1364
}

function testRegexpPCRE_1343() {
  var regexp = /^a\R{1,3}b/i;
  assertEquals(null, regexp.exec("a\n\n\x0d\nb ")); //test 1365
}

function testRegexpPCRE_1344() {
  var regexp = /^a\R{1,3}b/i;
  assertEquals(null, regexp.exec("** Failers")); //test 1366
}

function testRegexpPCRE_1345() {
  var regexp = /^a\R{1,3}b/i;
  assertEquals(null, regexp.exec("a\n\n\n\x0db")); //test 1367
}

function testRegexpPCRE_1346() {
  var regexp = /^a\R{1,3}b/i;
  assertEquals(null, regexp.exec("a\x0d")); //test 1368
}

function testRegexpPCRE_1347() {
  var regexp = /\H\h\V\v/;
  assertEquals(null, regexp.exec("X X\n")); //test 1369
}

function testRegexpPCRE_1348() {
  var regexp = /\H\h\V\v/;
  assertEquals(null, regexp.exec("X\x09X\x0b")); //test 1370
}

function testRegexpPCRE_1349() {
  var regexp = /\H\h\V\v/;
  assertEquals(null, regexp.exec("** Failers")); //test 1371
}

function testRegexpPCRE_1350() {
  var regexp = /\H\h\V\v/;
  assertEquals(null, regexp.exec("x{a0} X\n   ")); //test 1372
}

function testRegexpPCRE_1351() {
  var regexp = /\H*\h+\V?\v{3,4}/;
  assertEquals(null, regexp.exec("\x09 x{a0}X\n\x0b\x0c\x0d\n")); //test 1373
}

function testRegexpPCRE_1352() {
  var regexp = /\H*\h+\V?\v{3,4}/;
  assertEquals(null, regexp.exec("\x09 x{a0}\n\x0b\x0c\x0d\n")); //test 1374
}

function testRegexpPCRE_1353() {
  var regexp = /\H*\h+\V?\v{3,4}/;
  assertEquals(null, regexp.exec("\x09 x{a0}\n\x0b\x0c")); //test 1375
}

function testRegexpPCRE_1354() {
  var regexp = /\H*\h+\V?\v{3,4}/;
  assertEquals(null, regexp.exec("** Failers ")); //test 1376
}

function testRegexpPCRE_1355() {
  var regexp = /\H*\h+\V?\v{3,4}/;
  assertEquals(null, regexp.exec("\x09 x{a0}\n\x0b")); //test 1377
}

function testRegexpPCRE_1356() {
  var regexp = /\H*\h+\V?\v{3,4}/;
  assertEquals(null, regexp.exec(" ")); //test 1378
}

function testRegexpPCRE_1357() {
  var regexp = /\H\h\V\v/;
  assertEquals(null, regexp.exec("x{3001}x{3000}x{2030}x{2028}")); //test 1379
}

function testRegexpPCRE_1358() {
  var regexp = /\H\h\V\v/;
  assertEquals(null, regexp.exec("Xx{180e}Xx{85}")); //test 1380
}

function testRegexpPCRE_1359() {
  var regexp = /\H\h\V\v/;
  assertEquals(null, regexp.exec("** Failers")); //test 1381
}

function testRegexpPCRE_1360() {
  var regexp = /\H\h\V\v/;
  assertEquals(null, regexp.exec("x{2009} X\n   ")); //test 1382
}

function testRegexpPCRE_1361() {
  var regexp = /\H*\h+\V?\v{3,4}/;
  assertEquals(null, regexp.exec("x{1680}x{180e}x{2007}Xx{2028}x{2029}\x0c\x0d\n")); //test 1383
}

function testRegexpPCRE_1362() {
  var regexp = /\H*\h+\V?\v{3,4}/;
  assertEquals(null, regexp.exec("\x09x{205f}x{a0}\nx{2029}\x0cx{2028}\n")); //test 1384
}

function testRegexpPCRE_1363() {
  var regexp = /\H*\h+\V?\v{3,4}/;
  assertEquals(null, regexp.exec("\x09 x{202f}\n\x0b\x0c")); //test 1385
}

function testRegexpPCRE_1364() {
  var regexp = /\H*\h+\V?\v{3,4}/;
  assertEquals(null, regexp.exec("** Failers ")); //test 1386
}

function testRegexpPCRE_1365() {
  var regexp = /\H*\h+\V?\v{3,4}/;
  assertEquals(null, regexp.exec("\x09x{200a}x{a0}x{2028}\x0b")); //test 1387
}

function testRegexpPCRE_1366() {
  var regexp = /\H*\h+\V?\v{3,4}/;
  assertEquals(null, regexp.exec(" ")); //test 1388
}

function testRegexpPCRE_1367() {
  var regexp = /[\h]/;
  assertEquals(null, regexp.exec(">x{1680}")); //test 1389
}

function testRegexpPCRE_1368() {
  var regexp = /[\h]{3,}/;
  assertEquals(null, regexp.exec(">x{1680}x{180e}x{2000}x{2003}x{200a}x{202f}x{205f}x{3000}<")); //test 1390
}

function testRegexpPCRE_1369() {
  var regexp = /.*$/;
  assertEquals("x{1ec5} ", regexp.exec("x{1ec5} ").toString()); //test 1391
}

function testRegexpPCRE_1370() {
  var regexp = /X/;
  assertEquals(null, regexp.exec("x{0}x{d7ff}x{e000}x{10ffff}")); //test 1392
}

function testRegexpPCRE_1371() {
  var regexp = /X/;
  assertEquals(null, regexp.exec("x{d800}")); //test 1393
}

function testRegexpPCRE_1372() {
  var regexp = /X/;
  assertEquals(null, regexp.exec("x{d800}?")); //test 1394
}

function testRegexpPCRE_1373() {
  var regexp = /X/;
  assertEquals(null, regexp.exec("x{da00}")); //test 1395
}

function testRegexpPCRE_1374() {
  var regexp = /X/;
  assertEquals(null, regexp.exec("x{da00}?")); //test 1396
}

function testRegexpPCRE_1375() {
  var regexp = /X/;
  assertEquals(null, regexp.exec("x{dfff}")); //test 1397
}

function testRegexpPCRE_1376() {
  var regexp = /X/;
  assertEquals(null, regexp.exec("x{dfff}?")); //test 1398
}

function testRegexpPCRE_1377() {
  var regexp = /X/;
  assertEquals(null, regexp.exec("x{110000}    ")); //test 1399
}

function testRegexpPCRE_1378() {
  var regexp = /X/;
  assertEquals(null, regexp.exec("x{110000}?    ")); //test 1400
}

function testRegexpPCRE_1379() {
  var regexp = /X/;
  assertEquals(null, regexp.exec("x{2000000} ")); //test 1401
}

function testRegexpPCRE_1380() {
  var regexp = /X/;
  assertEquals(null, regexp.exec("x{2000000}? ")); //test 1402
}

function testRegexpPCRE_1381() {
  var regexp = /X/;
  assertEquals(null, regexp.exec("x{7fffffff} ")); //test 1403
}

function testRegexpPCRE_1382() {
  var regexp = /X/;
  assertEquals(null, regexp.exec("x{7fffffff}? ")); //test 1404
}

function testRegexpPCRE_1383() {
  var regexp = /a\Rb/i;
  assertEquals(null, regexp.exec("a\x0db")); //test 1405
}

function testRegexpPCRE_1384() {
  var regexp = /a\Rb/i;
  assertEquals(null, regexp.exec("a\nb")); //test 1406
}

function testRegexpPCRE_1385() {
  var regexp = /a\Rb/i;
  assertEquals(null, regexp.exec("a\x0d\nb")); //test 1407
}

function testRegexpPCRE_1386() {
  var regexp = /a\Rb/i;
  assertEquals(null, regexp.exec("** Failers")); //test 1408
}

function testRegexpPCRE_1387() {
  var regexp = /a\Rb/i;
  assertEquals(null, regexp.exec("ax{85}b")); //test 1409
}

function testRegexpPCRE_1388() {
  var regexp = /a\Rb/i;
  assertEquals(null, regexp.exec("a\x0bb     ")); //test 1410
}

function testRegexpPCRE_1389() {
  var regexp = /a\Rb/i;
  assertEquals(null, regexp.exec("a\x0db")); //test 1411
}

function testRegexpPCRE_1390() {
  var regexp = /a\Rb/i;
  assertEquals(null, regexp.exec("a\nb")); //test 1412
}

function testRegexpPCRE_1391() {
  var regexp = /a\Rb/i;
  assertEquals(null, regexp.exec("a\x0d\nb")); //test 1413
}

function testRegexpPCRE_1392() {
  var regexp = /a\Rb/i;
  assertEquals(null, regexp.exec("ax{85}b")); //test 1414
}

function testRegexpPCRE_1393() {
  var regexp = /a\Rb/i;
  assertEquals(null, regexp.exec("a\x0bb     ")); //test 1415
}

function testRegexpPCRE_1394() {
  var regexp = /a\Rb/i;
  assertEquals(null, regexp.exec("** Failers ")); //test 1416
}

function testRegexpPCRE_1395() {
  var regexp = /a\Rb/i;
  assertEquals(null, regexp.exec("ax{85}b<bsr_anycrlf>")); //test 1417
}

function testRegexpPCRE_1396() {
  var regexp = /a\Rb/i;
  assertEquals(null, regexp.exec("a\x0bb<bsr_anycrlf>")); //test 1418
}

function testRegexpPCRE_1397() {
  var regexp = /a\R?b/i;
  assertEquals(null, regexp.exec("a\x0db")); //test 1419
}

function testRegexpPCRE_1398() {
  var regexp = /a\R?b/i;
  assertEquals(null, regexp.exec("a\nb")); //test 1420
}

function testRegexpPCRE_1399() {
  var regexp = /a\R?b/i;
  assertEquals(null, regexp.exec("a\x0d\nb")); //test 1421
}

function testRegexpPCRE_1400() {
  var regexp = /a\R?b/i;
  assertEquals(null, regexp.exec("** Failers")); //test 1422
}

function testRegexpPCRE_1401() {
  var regexp = /a\R?b/i;
  assertEquals(null, regexp.exec("ax{85}b")); //test 1423
}

function testRegexpPCRE_1402() {
  var regexp = /a\R?b/i;
  assertEquals(null, regexp.exec("a\x0bb     ")); //test 1424
}

function testRegexpPCRE_1403() {
  var regexp = /a\R?b/i;
  assertEquals(null, regexp.exec("a\x0db")); //test 1425
}

function testRegexpPCRE_1404() {
  var regexp = /a\R?b/i;
  assertEquals(null, regexp.exec("a\nb")); //test 1426
}

function testRegexpPCRE_1405() {
  var regexp = /a\R?b/i;
  assertEquals(null, regexp.exec("a\x0d\nb")); //test 1427
}

function testRegexpPCRE_1406() {
  var regexp = /a\R?b/i;
  assertEquals(null, regexp.exec("ax{85}b")); //test 1428
}

function testRegexpPCRE_1407() {
  var regexp = /a\R?b/i;
  assertEquals(null, regexp.exec("a\x0bb     ")); //test 1429
}

function testRegexpPCRE_1408() {
  var regexp = /a\R?b/i;
  assertEquals(null, regexp.exec("** Failers ")); //test 1430
}

function testRegexpPCRE_1409() {
  var regexp = /a\R?b/i;
  assertEquals(null, regexp.exec("ax{85}b<bsr_anycrlf>")); //test 1431
}

function testRegexpPCRE_1410() {
  var regexp = /a\R?b/i;
  assertEquals(null, regexp.exec("a\x0bb<bsr_anycrlf>")); //test 1432
}

function testRegexpPCRE_1411() {
  var regexp = /.*a.*=.b.*/;
  assertEquals("QQQx{2029}ABCaXYZ=!bPQR", regexp.exec("QQQx{2029}ABCaXYZ=!bPQR").toString()); //test 1433
}

function testRegexpPCRE_1412() {
  var regexp = /.*a.*=.b.*/;
  assertEquals(null, regexp.exec("** Failers")); //test 1434
}

function testRegexpPCRE_1413() {
  var regexp = /.*a.*=.b.*/;
  assertEquals(null, regexp.exec("ax{2029}b")); //test 1435
}

function testRegexpPCRE_1414() {
  var regexp = /.*a.*=.b.*/;
  assertEquals(null, regexp.exec("a\xe2\x80\xa9b ")); //test 1436
}

function testRegexpPCRE_1415() {
  var regexp = /a[^]b/;
  assertEquals(null, regexp.exec("ax{1234}b")); //test 1437
}

function testRegexpPCRE_1416() {
  var regexp = /a[^]b/;
  assertEquals("a\nb", regexp.exec("a\nb ").toString()); //test 1438
}

function testRegexpPCRE_1417() {
  var regexp = /a[^]b/;
  assertEquals(null, regexp.exec("** Failers")); //test 1439
}

function testRegexpPCRE_1418() {
  var regexp = /a[^]b/;
  assertEquals(null, regexp.exec("ab  ")); //test 1440
}

function testRegexpPCRE_1419() {
  var regexp = /a[^]+b/;
  assertEquals("aXb", regexp.exec("aXb").toString()); //test 1441
}

function testRegexpPCRE_1420() {
  var regexp = /a[^]+b/;
  assertEquals("a\nX\nXx{1234}b", regexp.exec("a\nX\nXx{1234}b ").toString()); //test 1442
}

function testRegexpPCRE_1421() {
  var regexp = /a[^]+b/;
  assertEquals(null, regexp.exec("** Failers")); //test 1443
}

function testRegexpPCRE_1422() {
  var regexp = /a[^]+b/;
  assertEquals(null, regexp.exec("ab  ")); //test 1444
}

function testRegexpPCRE_1423() {
  var regexp = /a[^]+b/;
  assertEquals(null, regexp.exec("x{de}x{de}")); //test 1445
}

function testRegexpPCRE_1424() {
  var regexp = /a[^]+b/;
  assertEquals(null, regexp.exec("x{123} ")); //test 1446
}

function testRegexpPCRE_1425() {
  var regexp = /X/;
  assertEquals("X", regexp.exec("Ax{1ec5}ABCXYZ").toString()); //test 1447
}

function testRegexpPCRE_1426() {
  var regexp = /^\pC\pL\pM\pN\pP\pS\pZ</;
  assertEquals(null, regexp.exec("x{c0}x{30f}x{660}x{66c}x{f01}x{1680}<")); //test 1448
}

function testRegexpPCRE_1427() {
  var regexp = /^\pC\pL\pM\pN\pP\pS\pZ</;
  assertEquals(null, regexp.exec("\npx{300}9!$ < ")); //test 1449
}

function testRegexpPCRE_1428() {
  var regexp = /^\pC\pL\pM\pN\pP\pS\pZ</;
  assertEquals(null, regexp.exec("** Failers ")); //test 1450
}

function testRegexpPCRE_1429() {
  var regexp = /^\pC\pL\pM\pN\pP\pS\pZ</;
  assertEquals(null, regexp.exec("apx{300}9!$ < ")); //test 1451
}

function testRegexpPCRE_1430() {
  var regexp = /^\PC/;
  assertEquals(null, regexp.exec("X")); //test 1452
}

function testRegexpPCRE_1431() {
  var regexp = /^\PC/;
  assertEquals(null, regexp.exec("** Failers ")); //test 1453
}

function testRegexpPCRE_1432() {
  var regexp = /^\PC/;
  assertEquals(null, regexp.exec("")); //test 1454
}

function testRegexpPCRE_1433() {
  var regexp = /^\PL/;
  assertEquals(null, regexp.exec("9")); //test 1455
}

function testRegexpPCRE_1434() {
  var regexp = /^\PL/;
  assertEquals(null, regexp.exec("** Failers ")); //test 1456
}

function testRegexpPCRE_1435() {
  var regexp = /^\PL/;
  assertEquals(null, regexp.exec("x{c0}")); //test 1457
}

function testRegexpPCRE_1436() {
  var regexp = /^\PM/;
  assertEquals(null, regexp.exec("X")); //test 1458
}

function testRegexpPCRE_1437() {
  var regexp = /^\PM/;
  assertEquals(null, regexp.exec("** Failers ")); //test 1459
}

function testRegexpPCRE_1438() {
  var regexp = /^\PM/;
  assertEquals(null, regexp.exec("x{30f}")); //test 1460
}

function testRegexpPCRE_1439() {
  var regexp = /^\PN/;
  assertEquals(null, regexp.exec("X")); //test 1461
}

function testRegexpPCRE_1440() {
  var regexp = /^\PN/;
  assertEquals(null, regexp.exec("** Failers ")); //test 1462
}

function testRegexpPCRE_1441() {
  var regexp = /^\PN/;
  assertEquals(null, regexp.exec("x{660}")); //test 1463
}

function testRegexpPCRE_1442() {
  var regexp = /^\PP/;
  assertEquals(null, regexp.exec("X")); //test 1464
}

function testRegexpPCRE_1443() {
  var regexp = /^\PP/;
  assertEquals(null, regexp.exec("** Failers ")); //test 1465
}

function testRegexpPCRE_1444() {
  var regexp = /^\PP/;
  assertEquals(null, regexp.exec("x{66c}")); //test 1466
}

function testRegexpPCRE_1445() {
  var regexp = /^\PS/;
  assertEquals(null, regexp.exec("X")); //test 1467
}

function testRegexpPCRE_1446() {
  var regexp = /^\PS/;
  assertEquals(null, regexp.exec("** Failers ")); //test 1468
}

function testRegexpPCRE_1447() {
  var regexp = /^\PS/;
  assertEquals(null, regexp.exec("x{f01}")); //test 1469
}

function testRegexpPCRE_1448() {
  var regexp = /^\PZ/;
  assertEquals(null, regexp.exec("X")); //test 1470
}

function testRegexpPCRE_1449() {
  var regexp = /^\PZ/;
  assertEquals(null, regexp.exec("** Failers ")); //test 1471
}

function testRegexpPCRE_1450() {
  var regexp = /^\PZ/;
  assertEquals(null, regexp.exec("x{1680}")); //test 1472
}

function testRegexpPCRE_1451() {
  var regexp = /^\p{Cc}/;
  assertEquals(null, regexp.exec("x{017}")); //test 1473
}

function testRegexpPCRE_1452() {
  var regexp = /^\p{Cc}/;
  assertEquals(null, regexp.exec("x{09f} ")); //test 1474
}

function testRegexpPCRE_1453() {
  var regexp = /^\p{Cc}/;
  assertEquals(null, regexp.exec("** Failers")); //test 1475
}

function testRegexpPCRE_1454() {
  var regexp = /^\p{Cc}/;
  assertEquals(null, regexp.exec("x{0600} ")); //test 1476
}

function testRegexpPCRE_1455() {
  var regexp = /^\p{Cf}/;
  assertEquals(null, regexp.exec("x{601}")); //test 1477
}

function testRegexpPCRE_1456() {
  var regexp = /^\p{Cf}/;
  assertEquals(null, regexp.exec("** Failers")); //test 1478
}

function testRegexpPCRE_1457() {
  var regexp = /^\p{Cf}/;
  assertEquals(null, regexp.exec("x{09f} ")); //test 1479
}

function testRegexpPCRE_1458() {
  var regexp = /^\p{Cn}/;
  assertEquals(null, regexp.exec("x{e0000}")); //test 1480
}

function testRegexpPCRE_1459() {
  var regexp = /^\p{Cn}/;
  assertEquals(null, regexp.exec("** Failers")); //test 1481
}

function testRegexpPCRE_1460() {
  var regexp = /^\p{Cn}/;
  assertEquals(null, regexp.exec("x{09f} ")); //test 1482
}

function testRegexpPCRE_1461() {
  var regexp = /^\p{Co}/;
  assertEquals(null, regexp.exec("x{f8ff}")); //test 1483
}

function testRegexpPCRE_1462() {
  var regexp = /^\p{Co}/;
  assertEquals(null, regexp.exec("** Failers")); //test 1484
}

function testRegexpPCRE_1463() {
  var regexp = /^\p{Co}/;
  assertEquals(null, regexp.exec("x{09f} ")); //test 1485
}

function testRegexpPCRE_1464() {
  var regexp = /^\p{Cs}/;
  assertEquals(null, regexp.exec("?x{dfff}")); //test 1486
}

function testRegexpPCRE_1465() {
  var regexp = /^\p{Cs}/;
  assertEquals(null, regexp.exec("** Failers")); //test 1487
}

function testRegexpPCRE_1466() {
  var regexp = /^\p{Cs}/;
  assertEquals(null, regexp.exec("x{09f} ")); //test 1488
}

function testRegexpPCRE_1467() {
  var regexp = /^\p{Ll}/;
  assertEquals(null, regexp.exec("a")); //test 1489
}

function testRegexpPCRE_1468() {
  var regexp = /^\p{Ll}/;
  assertEquals(null, regexp.exec("** Failers ")); //test 1490
}

function testRegexpPCRE_1469() {
  var regexp = /^\p{Ll}/;
  assertEquals(null, regexp.exec("Z")); //test 1491
}

function testRegexpPCRE_1470() {
  var regexp = /^\p{Ll}/;
  assertEquals(null, regexp.exec("x{e000}  ")); //test 1492
}

function testRegexpPCRE_1471() {
  var regexp = /^\p{Lm}/;
  assertEquals(null, regexp.exec("x{2b0}")); //test 1493
}

function testRegexpPCRE_1472() {
  var regexp = /^\p{Lm}/;
  assertEquals(null, regexp.exec("** Failers")); //test 1494
}

function testRegexpPCRE_1473() {
  var regexp = /^\p{Lm}/;
  assertEquals(null, regexp.exec("a ")); //test 1495
}

function testRegexpPCRE_1474() {
  var regexp = /^\p{Lo}/;
  assertEquals(null, regexp.exec("x{1bb}")); //test 1496
}

function testRegexpPCRE_1475() {
  var regexp = /^\p{Lo}/;
  assertEquals(null, regexp.exec("x{3400}")); //test 1497
}

function testRegexpPCRE_1476() {
  var regexp = /^\p{Lo}/;
  assertEquals(null, regexp.exec("x{3401}")); //test 1498
}

function testRegexpPCRE_1477() {
  var regexp = /^\p{Lo}/;
  assertEquals(null, regexp.exec("x{4d00}")); //test 1499
}

function testRegexpPCRE_1478() {
  var regexp = /^\p{Lo}/;
  assertEquals(null, regexp.exec("x{4db4}")); //test 1500
}

function testRegexpPCRE_1479() {
  var regexp = /^\p{Lo}/;
  assertEquals(null, regexp.exec("x{4db5}     ")); //test 1501
}

function testRegexpPCRE_1480() {
  var regexp = /^\p{Lo}/;
  assertEquals(null, regexp.exec("** Failers")); //test 1502
}

function testRegexpPCRE_1481() {
  var regexp = /^\p{Lo}/;
  assertEquals(null, regexp.exec("a ")); //test 1503
}

function testRegexpPCRE_1482() {
  var regexp = /^\p{Lo}/;
  assertEquals(null, regexp.exec("x{2b0}")); //test 1504
}

function testRegexpPCRE_1483() {
  var regexp = /^\p{Lo}/;
  assertEquals(null, regexp.exec("x{4db6} ")); //test 1505
}

function testRegexpPCRE_1484() {
  var regexp = /^\p{Lt}/;
  assertEquals(null, regexp.exec("x{1c5}")); //test 1506
}

function testRegexpPCRE_1485() {
  var regexp = /^\p{Lt}/;
  assertEquals(null, regexp.exec("** Failers")); //test 1507
}

function testRegexpPCRE_1486() {
  var regexp = /^\p{Lt}/;
  assertEquals(null, regexp.exec("a ")); //test 1508
}

function testRegexpPCRE_1487() {
  var regexp = /^\p{Lt}/;
  assertEquals(null, regexp.exec("x{2b0}")); //test 1509
}

function testRegexpPCRE_1488() {
  var regexp = /^\p{Lu}/;
  assertEquals(null, regexp.exec("A")); //test 1510
}

function testRegexpPCRE_1489() {
  var regexp = /^\p{Lu}/;
  assertEquals(null, regexp.exec("** Failers")); //test 1511
}

function testRegexpPCRE_1490() {
  var regexp = /^\p{Lu}/;
  assertEquals(null, regexp.exec("x{2b0}")); //test 1512
}

function testRegexpPCRE_1491() {
  var regexp = /^\p{Mc}/;
  assertEquals(null, regexp.exec("x{903}")); //test 1513
}

function testRegexpPCRE_1492() {
  var regexp = /^\p{Mc}/;
  assertEquals(null, regexp.exec("** Failers")); //test 1514
}

function testRegexpPCRE_1493() {
  var regexp = /^\p{Mc}/;
  assertEquals(null, regexp.exec("X")); //test 1515
}

function testRegexpPCRE_1494() {
  var regexp = /^\p{Mc}/;
  assertEquals(null, regexp.exec("x{300}")); //test 1516
}

function testRegexpPCRE_1495() {
  var regexp = /^\p{Mc}/;
  assertEquals(null, regexp.exec("   ")); //test 1517
}

function testRegexpPCRE_1496() {
  var regexp = /^\p{Me}/;
  assertEquals(null, regexp.exec("x{488}")); //test 1518
}

function testRegexpPCRE_1497() {
  var regexp = /^\p{Me}/;
  assertEquals(null, regexp.exec("** Failers")); //test 1519
}

function testRegexpPCRE_1498() {
  var regexp = /^\p{Me}/;
  assertEquals(null, regexp.exec("X")); //test 1520
}

function testRegexpPCRE_1499() {
  var regexp = /^\p{Me}/;
  assertEquals(null, regexp.exec("x{903}")); //test 1521
}

function testRegexpPCRE_1500() {
  var regexp = /^\p{Me}/;
  assertEquals(null, regexp.exec("x{300}")); //test 1522
}

function testRegexpPCRE_1501() {
  var regexp = /^\p{Mn}/;
  assertEquals(null, regexp.exec("x{300}")); //test 1523
}

function testRegexpPCRE_1502() {
  var regexp = /^\p{Mn}/;
  assertEquals(null, regexp.exec("** Failers")); //test 1524
}

function testRegexpPCRE_1503() {
  var regexp = /^\p{Mn}/;
  assertEquals(null, regexp.exec("X")); //test 1525
}

function testRegexpPCRE_1504() {
  var regexp = /^\p{Mn}/;
  assertEquals(null, regexp.exec("x{903}")); //test 1526
}

function testRegexpPCRE_1505() {
  var regexp = /^\p{Mn}/;
  assertEquals(null, regexp.exec("0123456789x{660}x{661}x{662}x{663}x{664}x{665}x{666}x{667}x{668}x{669}x{66a}")); //test 1527
}

function testRegexpPCRE_1506() {
  var regexp = /^\p{Mn}/;
  assertEquals(null, regexp.exec("x{6f0}x{6f1}x{6f2}x{6f3}x{6f4}x{6f5}x{6f6}x{6f7}x{6f8}x{6f9}x{6fa}")); //test 1528
}

function testRegexpPCRE_1507() {
  var regexp = /^\p{Mn}/;
  assertEquals(null, regexp.exec("x{966}x{967}x{968}x{969}x{96a}x{96b}x{96c}x{96d}x{96e}x{96f}x{970}")); //test 1529
}

function testRegexpPCRE_1508() {
  var regexp = /^\p{Mn}/;
  assertEquals(null, regexp.exec("** Failers")); //test 1530
}

function testRegexpPCRE_1509() {
  var regexp = /^\p{Mn}/;
  assertEquals(null, regexp.exec("X")); //test 1531
}

function testRegexpPCRE_1510() {
  var regexp = /^\p{Nl}/;
  assertEquals(null, regexp.exec("x{16ee}")); //test 1532
}

function testRegexpPCRE_1511() {
  var regexp = /^\p{Nl}/;
  assertEquals(null, regexp.exec("** Failers")); //test 1533
}

function testRegexpPCRE_1512() {
  var regexp = /^\p{Nl}/;
  assertEquals(null, regexp.exec("X")); //test 1534
}

function testRegexpPCRE_1513() {
  var regexp = /^\p{Nl}/;
  assertEquals(null, regexp.exec("x{966}")); //test 1535
}

function testRegexpPCRE_1514() {
  var regexp = /^\p{No}/;
  assertEquals(null, regexp.exec("x{b2}")); //test 1536
}

function testRegexpPCRE_1515() {
  var regexp = /^\p{No}/;
  assertEquals(null, regexp.exec("x{b3}")); //test 1537
}

function testRegexpPCRE_1516() {
  var regexp = /^\p{No}/;
  assertEquals(null, regexp.exec("** Failers")); //test 1538
}

function testRegexpPCRE_1517() {
  var regexp = /^\p{No}/;
  assertEquals(null, regexp.exec("X")); //test 1539
}

function testRegexpPCRE_1518() {
  var regexp = /^\p{No}/;
  assertEquals(null, regexp.exec("x{16ee}")); //test 1540
}

function testRegexpPCRE_1519() {
  var regexp = /^\p{Pc}/;
  assertEquals(null, regexp.exec("_")); //test 1541
}

function testRegexpPCRE_1520() {
  var regexp = /^\p{Pc}/;
  assertEquals(null, regexp.exec("x{203f}")); //test 1542
}

function testRegexpPCRE_1521() {
  var regexp = /^\p{Pc}/;
  assertEquals(null, regexp.exec("** Failers")); //test 1543
}

function testRegexpPCRE_1522() {
  var regexp = /^\p{Pc}/;
  assertEquals(null, regexp.exec("X")); //test 1544
}

function testRegexpPCRE_1523() {
  var regexp = /^\p{Pc}/;
  assertEquals(null, regexp.exec("-")); //test 1545
}

function testRegexpPCRE_1524() {
  var regexp = /^\p{Pc}/;
  assertEquals(null, regexp.exec("x{58a}")); //test 1546
}

function testRegexpPCRE_1525() {
  var regexp = /^\p{Pd}/;
  assertEquals(null, regexp.exec("-")); //test 1547
}

function testRegexpPCRE_1526() {
  var regexp = /^\p{Pd}/;
  assertEquals(null, regexp.exec("x{58a}")); //test 1548
}

function testRegexpPCRE_1527() {
  var regexp = /^\p{Pd}/;
  assertEquals(null, regexp.exec("** Failers")); //test 1549
}

function testRegexpPCRE_1528() {
  var regexp = /^\p{Pd}/;
  assertEquals(null, regexp.exec("X")); //test 1550
}

function testRegexpPCRE_1529() {
  var regexp = /^\p{Pd}/;
  assertEquals(null, regexp.exec("x{203f}")); //test 1551
}

function testRegexpPCRE_1530() {
  var regexp = /^\p{Pe}/;
  assertEquals(null, regexp.exec(")")); //test 1552
}

function testRegexpPCRE_1531() {
  var regexp = /^\p{Pe}/;
  assertEquals(null, regexp.exec("]")); //test 1553
}

function testRegexpPCRE_1532() {
  var regexp = /^\p{Pe}/;
  assertEquals(null, regexp.exec("}")); //test 1554
}

function testRegexpPCRE_1533() {
  var regexp = /^\p{Pe}/;
  assertEquals(null, regexp.exec("x{f3b}")); //test 1555
}

function testRegexpPCRE_1534() {
  var regexp = /^\p{Pe}/;
  assertEquals(null, regexp.exec("** Failers")); //test 1556
}

function testRegexpPCRE_1535() {
  var regexp = /^\p{Pe}/;
  assertEquals(null, regexp.exec("X")); //test 1557
}

function testRegexpPCRE_1536() {
  var regexp = /^\p{Pe}/;
  assertEquals(null, regexp.exec("x{203f}")); //test 1558
}

function testRegexpPCRE_1537() {
  var regexp = /^\p{Pe}/;
  assertEquals(null, regexp.exec("(")); //test 1559
}

function testRegexpPCRE_1538() {
  var regexp = /^\p{Pe}/;
  assertEquals(null, regexp.exec("[")); //test 1560
}

function testRegexpPCRE_1539() {
  var regexp = /^\p{Pe}/;
  assertEquals(null, regexp.exec("{")); //test 1561
}

function testRegexpPCRE_1540() {
  var regexp = /^\p{Pe}/;
  assertEquals(null, regexp.exec("x{f3c}")); //test 1562
}

function testRegexpPCRE_1541() {
  var regexp = /^\p{Pf}/;
  assertEquals(null, regexp.exec("x{bb}")); //test 1563
}

function testRegexpPCRE_1542() {
  var regexp = /^\p{Pf}/;
  assertEquals(null, regexp.exec("x{2019}")); //test 1564
}

function testRegexpPCRE_1543() {
  var regexp = /^\p{Pf}/;
  assertEquals(null, regexp.exec("** Failers")); //test 1565
}

function testRegexpPCRE_1544() {
  var regexp = /^\p{Pf}/;
  assertEquals(null, regexp.exec("X")); //test 1566
}

function testRegexpPCRE_1545() {
  var regexp = /^\p{Pf}/;
  assertEquals(null, regexp.exec("x{203f}")); //test 1567
}

function testRegexpPCRE_1546() {
  var regexp = /^\p{Pi}/;
  assertEquals(null, regexp.exec("x{ab}")); //test 1568
}

function testRegexpPCRE_1547() {
  var regexp = /^\p{Pi}/;
  assertEquals(null, regexp.exec("x{2018}")); //test 1569
}

function testRegexpPCRE_1548() {
  var regexp = /^\p{Pi}/;
  assertEquals(null, regexp.exec("** Failers")); //test 1570
}

function testRegexpPCRE_1549() {
  var regexp = /^\p{Pi}/;
  assertEquals(null, regexp.exec("X")); //test 1571
}

function testRegexpPCRE_1550() {
  var regexp = /^\p{Pi}/;
  assertEquals(null, regexp.exec("x{203f}")); //test 1572
}

function testRegexpPCRE_1551() {
  var regexp = /^\p{Po}/;
  assertEquals(null, regexp.exec("!")); //test 1573
}

function testRegexpPCRE_1552() {
  var regexp = /^\p{Po}/;
  assertEquals(null, regexp.exec("x{37e}")); //test 1574
}

function testRegexpPCRE_1553() {
  var regexp = /^\p{Po}/;
  assertEquals(null, regexp.exec("** Failers")); //test 1575
}

function testRegexpPCRE_1554() {
  var regexp = /^\p{Po}/;
  assertEquals(null, regexp.exec("X")); //test 1576
}

function testRegexpPCRE_1555() {
  var regexp = /^\p{Po}/;
  assertEquals(null, regexp.exec("x{203f}")); //test 1577
}

function testRegexpPCRE_1556() {
  var regexp = /^\p{Ps}/;
  assertEquals(null, regexp.exec("(")); //test 1578
}

function testRegexpPCRE_1557() {
  var regexp = /^\p{Ps}/;
  assertEquals(null, regexp.exec("[")); //test 1579
}

function testRegexpPCRE_1558() {
  var regexp = /^\p{Ps}/;
  assertEquals(null, regexp.exec("{")); //test 1580
}

function testRegexpPCRE_1559() {
  var regexp = /^\p{Ps}/;
  assertEquals(null, regexp.exec("x{f3c}")); //test 1581
}

function testRegexpPCRE_1560() {
  var regexp = /^\p{Ps}/;
  assertEquals(null, regexp.exec("** Failers")); //test 1582
}

function testRegexpPCRE_1561() {
  var regexp = /^\p{Ps}/;
  assertEquals(null, regexp.exec("X")); //test 1583
}

function testRegexpPCRE_1562() {
  var regexp = /^\p{Ps}/;
  assertEquals(null, regexp.exec(")")); //test 1584
}

function testRegexpPCRE_1563() {
  var regexp = /^\p{Ps}/;
  assertEquals(null, regexp.exec("]")); //test 1585
}

function testRegexpPCRE_1564() {
  var regexp = /^\p{Ps}/;
  assertEquals(null, regexp.exec("}")); //test 1586
}

function testRegexpPCRE_1565() {
  var regexp = /^\p{Ps}/;
  assertEquals(null, regexp.exec("x{f3b}")); //test 1587
}

function testRegexpPCRE_1566() {
  var regexp = /^\p{Ps}/;
  assertEquals(null, regexp.exec("$x{a2}x{a3}x{a4}x{a5}x{a6}")); //test 1588
}

function testRegexpPCRE_1567() {
  var regexp = /^\p{Ps}/;
  assertEquals(null, regexp.exec("x{9f2}")); //test 1589
}

function testRegexpPCRE_1568() {
  var regexp = /^\p{Ps}/;
  assertEquals(null, regexp.exec("** Failers")); //test 1590
}

function testRegexpPCRE_1569() {
  var regexp = /^\p{Ps}/;
  assertEquals(null, regexp.exec("X")); //test 1591
}

function testRegexpPCRE_1570() {
  var regexp = /^\p{Ps}/;
  assertEquals(null, regexp.exec("x{2c2}")); //test 1592
}

function testRegexpPCRE_1571() {
  var regexp = /^\p{Sk}/;
  assertEquals(null, regexp.exec("x{2c2}")); //test 1593
}

function testRegexpPCRE_1572() {
  var regexp = /^\p{Sk}/;
  assertEquals(null, regexp.exec("** Failers")); //test 1594
}

function testRegexpPCRE_1573() {
  var regexp = /^\p{Sk}/;
  assertEquals(null, regexp.exec("X")); //test 1595
}

function testRegexpPCRE_1574() {
  var regexp = /^\p{Sk}/;
  assertEquals(null, regexp.exec("x{9f2}")); //test 1596
}

function testRegexpPCRE_1575() {
  var regexp = /^\p{Sk}/;
  assertEquals(null, regexp.exec("+<|~x{ac}x{2044}")); //test 1597
}

function testRegexpPCRE_1576() {
  var regexp = /^\p{Sk}/;
  assertEquals(null, regexp.exec("** Failers")); //test 1598
}

function testRegexpPCRE_1577() {
  var regexp = /^\p{Sk}/;
  assertEquals(null, regexp.exec("X")); //test 1599
}

function testRegexpPCRE_1578() {
  var regexp = /^\p{Sk}/;
  assertEquals(null, regexp.exec("x{9f2}")); //test 1600
}

function testRegexpPCRE_1579() {
  var regexp = /^\p{So}/;
  assertEquals(null, regexp.exec("x{a6}")); //test 1601
}

function testRegexpPCRE_1580() {
  var regexp = /^\p{So}/;
  assertEquals(null, regexp.exec("x{482} ")); //test 1602
}

function testRegexpPCRE_1581() {
  var regexp = /^\p{So}/;
  assertEquals(null, regexp.exec("** Failers")); //test 1603
}

function testRegexpPCRE_1582() {
  var regexp = /^\p{So}/;
  assertEquals(null, regexp.exec("X")); //test 1604
}

function testRegexpPCRE_1583() {
  var regexp = /^\p{So}/;
  assertEquals(null, regexp.exec("x{9f2}")); //test 1605
}

function testRegexpPCRE_1584() {
  var regexp = /^\p{Zl}/;
  assertEquals(null, regexp.exec("x{2028}")); //test 1606
}

function testRegexpPCRE_1585() {
  var regexp = /^\p{Zl}/;
  assertEquals(null, regexp.exec("** Failers")); //test 1607
}

function testRegexpPCRE_1586() {
  var regexp = /^\p{Zl}/;
  assertEquals(null, regexp.exec("X")); //test 1608
}

function testRegexpPCRE_1587() {
  var regexp = /^\p{Zl}/;
  assertEquals(null, regexp.exec("x{2029}")); //test 1609
}

function testRegexpPCRE_1588() {
  var regexp = /^\p{Zp}/;
  assertEquals(null, regexp.exec("x{2029}")); //test 1610
}

function testRegexpPCRE_1589() {
  var regexp = /^\p{Zp}/;
  assertEquals(null, regexp.exec("** Failers")); //test 1611
}

function testRegexpPCRE_1590() {
  var regexp = /^\p{Zp}/;
  assertEquals(null, regexp.exec("X")); //test 1612
}

function testRegexpPCRE_1591() {
  var regexp = /^\p{Zp}/;
  assertEquals(null, regexp.exec("x{2028}")); //test 1613
}

function testRegexpPCRE_1592() {
  var regexp = /^\p{Zs}/;
  assertEquals(null, regexp.exec("\\ \\")); //test 1614
}

function testRegexpPCRE_1593() {
  var regexp = /^\p{Zs}/;
  assertEquals(null, regexp.exec("x{a0}")); //test 1615
}

function testRegexpPCRE_1594() {
  var regexp = /^\p{Zs}/;
  assertEquals(null, regexp.exec("x{1680}")); //test 1616
}

function testRegexpPCRE_1595() {
  var regexp = /^\p{Zs}/;
  assertEquals(null, regexp.exec("x{180e}")); //test 1617
}

function testRegexpPCRE_1596() {
  var regexp = /^\p{Zs}/;
  assertEquals(null, regexp.exec("x{2000}")); //test 1618
}

function testRegexpPCRE_1597() {
  var regexp = /^\p{Zs}/;
  assertEquals(null, regexp.exec("x{2001}     ")); //test 1619
}

function testRegexpPCRE_1598() {
  var regexp = /^\p{Zs}/;
  assertEquals(null, regexp.exec("** Failers")); //test 1620
}

function testRegexpPCRE_1599() {
  var regexp = /^\p{Zs}/;
  assertEquals(null, regexp.exec("x{2028}")); //test 1621
}

function testRegexpPCRE_1600() {
  var regexp = /^\p{Zs}/;
  assertEquals(null, regexp.exec("x{200d} ")); //test 1622
}

function testRegexpPCRE_1601() {
  var regexp = /^\p{Zs}/;
  assertEquals(null, regexp.exec("  x{660}x{661}x{662}ABC")); //test 1623
}

function testRegexpPCRE_1602() {
  var regexp = /^\p{Zs}/;
  assertEquals(null, regexp.exec("  x{660}x{661}x{662}ABC")); //test 1624
}

function testRegexpPCRE_1603() {
  var regexp = /\p{Nd}{2,}(..)/;
  assertEquals(null, regexp.exec("  x{660}x{661}x{662}ABC")); //test 1625
}

function testRegexpPCRE_1604() {
  var regexp = /\p{Nd}{2,}?(..)/;
  assertEquals(null, regexp.exec("  x{660}x{661}x{662}ABC")); //test 1626
}

function testRegexpPCRE_1605() {
  var regexp = /\p{Nd}*(..)/;
  assertEquals(null, regexp.exec("  x{660}x{661}x{662}ABC")); //test 1627
}

function testRegexpPCRE_1606() {
  var regexp = /\p{Nd}*?(..)/;
  assertEquals(null, regexp.exec("  x{660}x{661}x{662}ABC")); //test 1628
}

function testRegexpPCRE_1607() {
  var regexp = /\p{Nd}{2}(..)/;
  assertEquals(null, regexp.exec("  x{660}x{661}x{662}ABC")); //test 1629
}

function testRegexpPCRE_1608() {
  var regexp = /\p{Nd}{2,3}(..)/;
  assertEquals(null, regexp.exec("  x{660}x{661}x{662}ABC")); //test 1630
}

function testRegexpPCRE_1609() {
  var regexp = /\p{Nd}{2,3}?(..)/;
  assertEquals(null, regexp.exec("  x{660}x{661}x{662}ABC")); //test 1631
}

function testRegexpPCRE_1610() {
  var regexp = /\p{Nd}?(..)/;
  assertEquals(null, regexp.exec("  x{660}x{661}x{662}ABC")); //test 1632
}

function testRegexpPCRE_1611() {
  var regexp = /\p{Nd}??(..)/;
  assertEquals(null, regexp.exec("  x{660}x{661}x{662}ABC")); //test 1633
}

function testRegexpPCRE_1612() {
  var regexp = /\p{Nd}??(..)/;
  assertEquals(null, regexp.exec("  x{660}x{661}x{662}ABC")); //test 1634
}

function testRegexpPCRE_1613() {
  var regexp = /\p{Nd}??(..)/;
  assertEquals(null, regexp.exec("  x{660}x{661}x{662}ABC")); //test 1635
}

function testRegexpPCRE_1614() {
  var regexp = /\p{Nd}??(..)/;
  assertEquals(null, regexp.exec("  ** Failers")); //test 1636
}

function testRegexpPCRE_1615() {
  var regexp = /\p{Nd}??(..)/;
  assertEquals(null, regexp.exec("  x{660}x{661}x{662}ABC")); //test 1637
}

function testRegexpPCRE_1616() {
  var regexp = /\p{Lu}/i;
  assertEquals(null, regexp.exec("A")); //test 1638
}

function testRegexpPCRE_1617() {
  var regexp = /\p{Lu}/i;
  assertEquals(null, regexp.exec("ax{10a0}B ")); //test 1639
}

function testRegexpPCRE_1618() {
  var regexp = /\p{Lu}/i;
  assertEquals(null, regexp.exec("** Failers ")); //test 1640
}

function testRegexpPCRE_1619() {
  var regexp = /\p{Lu}/i;
  assertEquals(null, regexp.exec("a")); //test 1641
}

function testRegexpPCRE_1620() {
  var regexp = /\p{Lu}/i;
  assertEquals(null, regexp.exec("x{1d00}  ")); //test 1642
}

function testRegexpPCRE_1621() {
  var regexp = /\p{^Lu}/i;
  assertEquals(null, regexp.exec("1234")); //test 1643
}

function testRegexpPCRE_1622() {
  var regexp = /\p{^Lu}/i;
  assertEquals(null, regexp.exec("** Failers")); //test 1644
}

function testRegexpPCRE_1623() {
  var regexp = /\p{^Lu}/i;
  assertEquals(null, regexp.exec("ABC ")); //test 1645
}

function testRegexpPCRE_1624() {
  var regexp = /\P{Lu}/i;
  assertEquals(null, regexp.exec("1234")); //test 1646
}

function testRegexpPCRE_1625() {
  var regexp = /\P{Lu}/i;
  assertEquals(null, regexp.exec("** Failers")); //test 1647
}

function testRegexpPCRE_1626() {
  var regexp = /\P{Lu}/i;
  assertEquals(null, regexp.exec("ABC ")); //test 1648
}

function testRegexpPCRE_1627() {
  var regexp = /\P{Lu}/i;
  assertEquals(null, regexp.exec("A2XYZ")); //test 1649
}

function testRegexpPCRE_1628() {
  var regexp = /\P{Lu}/i;
  assertEquals(null, regexp.exec("123A5XYZPQR")); //test 1650
}

function testRegexpPCRE_1629() {
  var regexp = /\P{Lu}/i;
  assertEquals(null, regexp.exec("ABAx{660}XYZpqr")); //test 1651
}

function testRegexpPCRE_1630() {
  var regexp = /\P{Lu}/i;
  assertEquals(null, regexp.exec("** Failers")); //test 1652
}

function testRegexpPCRE_1631() {
  var regexp = /\P{Lu}/i;
  assertEquals(null, regexp.exec("AXYZ")); //test 1653
}

function testRegexpPCRE_1632() {
  var regexp = /\P{Lu}/i;
  assertEquals(null, regexp.exec("XYZ     ")); //test 1654
}

function testRegexpPCRE_1633() {
  var regexp = /\P{Lu}/i;
  assertEquals(null, regexp.exec("1XYZ")); //test 1655
}

function testRegexpPCRE_1634() {
  var regexp = /\P{Lu}/i;
  assertEquals(null, regexp.exec("AB=XYZ.. ")); //test 1656
}

function testRegexpPCRE_1635() {
  var regexp = /\P{Lu}/i;
  assertEquals(null, regexp.exec("XYZ ")); //test 1657
}

function testRegexpPCRE_1636() {
  var regexp = /\P{Lu}/i;
  assertEquals(null, regexp.exec("** Failers")); //test 1658
}

function testRegexpPCRE_1637() {
  var regexp = /\P{Lu}/i;
  assertEquals(null, regexp.exec("WXYZ ")); //test 1659
}

function testRegexpPCRE_1638() {
  var regexp = /[\p{Nd}]/;
  assertEquals(null, regexp.exec("1234")); //test 1660
}

function testRegexpPCRE_1639() {
  var regexp = /[\p{Nd}]/;
  assertEquals(null, regexp.exec("1234")); //test 1661
}

function testRegexpPCRE_1640() {
  var regexp = /[\p{Nd}]/;
  assertEquals(null, regexp.exec("12-34")); //test 1662
}

function testRegexpPCRE_1641() {
  var regexp = /[\p{Nd}]/;
  assertEquals("{", regexp.exec("12+x{661}-34  ").toString()); //test 1663
}

function testRegexpPCRE_1642() {
  var regexp = /[\p{Nd}]/;
  assertEquals(null, regexp.exec("** Failers")); //test 1664
}

function testRegexpPCRE_1643() {
  var regexp = /[\p{Nd}]/;
  assertEquals("d", regexp.exec("abcd  ").toString()); //test 1665
}

function testRegexpPCRE_1644() {
  var regexp = /[\P{Nd}]+/;
  assertEquals("d", regexp.exec("abcd").toString()); //test 1666
}

function testRegexpPCRE_1645() {
  var regexp = /[\P{Nd}]+/;
  assertEquals(null, regexp.exec("** Failers")); //test 1667
}

function testRegexpPCRE_1646() {
  var regexp = /[\P{Nd}]+/;
  assertEquals(null, regexp.exec("1234")); //test 1668
}

function testRegexpPCRE_1647() {
  var regexp = /\D+/;
  assertEquals(null, regexp.exec("11111111111111111111111111111111111111111111111111111111111111111111111")); //test 1669
}

function testRegexpPCRE_1648() {
  var regexp = /\D+/;
  assertEquals("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", regexp.exec("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa").toString()); //test 1670
}

function testRegexpPCRE_1649() {
  var regexp = /\D+/;
  assertEquals(" ", regexp.exec(" ").toString()); //test 1671
}

function testRegexpPCRE_1650() {
  var regexp = /\D+/;
  assertEquals(null, regexp.exec("11111111111111111111111111111111111111111111111111111111111111111111111")); //test 1672
}

function testRegexpPCRE_1651() {
  var regexp = /\D+/;
  assertEquals("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", regexp.exec("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa").toString()); //test 1673
}

function testRegexpPCRE_1652() {
  var regexp = /[\D]+/;
  assertEquals(null, regexp.exec("11111111111111111111111111111111111111111111111111111111111111111111111")); //test 1674
}

function testRegexpPCRE_1653() {
  var regexp = /[\D]+/;
  assertEquals("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", regexp.exec("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa").toString()); //test 1675
}

function testRegexpPCRE_1654() {
  var regexp = /[\P{Nd}]+/;
  assertEquals(null, regexp.exec("11111111111111111111111111111111111111111111111111111111111111111111111")); //test 1676
}

function testRegexpPCRE_1655() {
  var regexp = /[\P{Nd}]+/;
  assertEquals(null, regexp.exec("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")); //test 1677
}

function testRegexpPCRE_1656() {
  var regexp = /[\D\P{Nd}]+/;
  assertEquals(null, regexp.exec("11111111111111111111111111111111111111111111111111111111111111111111111")); //test 1678
}

function testRegexpPCRE_1657() {
  var regexp = /[\D\P{Nd}]+/;
  assertEquals("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", regexp.exec("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa").toString()); //test 1679
}

function testRegexpPCRE_1658() {
  var regexp = /\pL/;
  assertEquals(null, regexp.exec("a")); //test 1680
}

function testRegexpPCRE_1659() {
  var regexp = /\pL/;
  assertEquals(null, regexp.exec("A ")); //test 1681
}

function testRegexpPCRE_1660() {
  var regexp = /\pL/i;
  assertEquals(null, regexp.exec("a")); //test 1682
}

function testRegexpPCRE_1661() {
  var regexp = /\pL/i;
  assertEquals(null, regexp.exec("A ")); //test 1683
}

function testRegexpPCRE_1662() {
  var regexp = /\p{Lu}/;
  assertEquals(null, regexp.exec("A")); //test 1684
}

function testRegexpPCRE_1663() {
  var regexp = /\p{Lu}/;
  assertEquals(null, regexp.exec("aZ")); //test 1685
}

function testRegexpPCRE_1664() {
  var regexp = /\p{Lu}/;
  assertEquals(null, regexp.exec("** Failers")); //test 1686
}

function testRegexpPCRE_1665() {
  var regexp = /\p{Lu}/;
  assertEquals(null, regexp.exec("abc   ")); //test 1687
}

function testRegexpPCRE_1666() {
  var regexp = /\p{Lu}/i;
  assertEquals(null, regexp.exec("A")); //test 1688
}

function testRegexpPCRE_1667() {
  var regexp = /\p{Lu}/i;
  assertEquals(null, regexp.exec("aZ")); //test 1689
}

function testRegexpPCRE_1668() {
  var regexp = /\p{Lu}/i;
  assertEquals(null, regexp.exec("** Failers")); //test 1690
}

function testRegexpPCRE_1669() {
  var regexp = /\p{Lu}/i;
  assertEquals(null, regexp.exec("abc   ")); //test 1691
}

function testRegexpPCRE_1670() {
  var regexp = /\p{Ll}/;
  assertEquals(null, regexp.exec("a")); //test 1692
}

function testRegexpPCRE_1671() {
  var regexp = /\p{Ll}/;
  assertEquals(null, regexp.exec("Az")); //test 1693
}

function testRegexpPCRE_1672() {
  var regexp = /\p{Ll}/;
  assertEquals(null, regexp.exec("** Failers")); //test 1694
}

function testRegexpPCRE_1673() {
  var regexp = /\p{Ll}/;
  assertEquals(null, regexp.exec("ABC   ")); //test 1695
}

function testRegexpPCRE_1674() {
  var regexp = /\p{Ll}/i;
  assertEquals(null, regexp.exec("a")); //test 1696
}

function testRegexpPCRE_1675() {
  var regexp = /\p{Ll}/i;
  assertEquals(null, regexp.exec("Az")); //test 1697
}

function testRegexpPCRE_1676() {
  var regexp = /\p{Ll}/i;
  assertEquals(null, regexp.exec("** Failers")); //test 1698
}

function testRegexpPCRE_1677() {
  var regexp = /\p{Ll}/i;
  assertEquals(null, regexp.exec("ABC   ")); //test 1699
}

function testRegexpPCRE_1678() {
  var regexp = /\p{Ll}/i;
  assertEquals(null, regexp.exec("x{c0}")); //test 1700
}

function testRegexpPCRE_1679() {
  var regexp = /\p{Ll}/i;
  assertEquals(null, regexp.exec("x{e0} ")); //test 1701
}

function testRegexpPCRE_1680() {
  var regexp = /\p{Ll}/i;
  assertEquals(null, regexp.exec("x{c0}")); //test 1702
}

function testRegexpPCRE_1681() {
  var regexp = /\p{Ll}/i;
  assertEquals(null, regexp.exec("x{e0} ")); //test 1703
}

function testRegexpPCRE_1682() {
  var regexp = /\p{Ll}/i;
  assertEquals(null, regexp.exec("Ax{391}x{10427}x{ff3a}x{1fb0}")); //test 1704
}

function testRegexpPCRE_1683() {
  var regexp = /\p{Ll}/i;
  assertEquals(null, regexp.exec("** Failers")); //test 1705
}

function testRegexpPCRE_1684() {
  var regexp = /\p{Ll}/i;
  assertEquals(null, regexp.exec("ax{391}x{10427}x{ff3a}x{1fb0}   ")); //test 1706
}

function testRegexpPCRE_1685() {
  var regexp = /\p{Ll}/i;
  assertEquals(null, regexp.exec("Ax{3b1}x{10427}x{ff3a}x{1fb0}")); //test 1707
}

function testRegexpPCRE_1686() {
  var regexp = /\p{Ll}/i;
  assertEquals(null, regexp.exec("Ax{391}x{1044F}x{ff3a}x{1fb0}")); //test 1708
}

function testRegexpPCRE_1687() {
  var regexp = /\p{Ll}/i;
  assertEquals(null, regexp.exec("Ax{391}x{10427}x{ff5a}x{1fb0}")); //test 1709
}

function testRegexpPCRE_1688() {
  var regexp = /\p{Ll}/i;
  assertEquals(null, regexp.exec("Ax{391}x{10427}x{ff3a}x{1fb8}")); //test 1710
}

function testRegexpPCRE_1689() {
  var regexp = /\p{Ll}/i;
  assertEquals(null, regexp.exec("Ax{391}x{10427}x{ff3a}x{1fb0}")); //test 1711
}

function testRegexpPCRE_1690() {
  var regexp = /\p{Ll}/i;
  assertEquals(null, regexp.exec("ax{391}x{10427}x{ff3a}x{1fb0}   ")); //test 1712
}

function testRegexpPCRE_1691() {
  var regexp = /\p{Ll}/i;
  assertEquals(null, regexp.exec("Ax{3b1}x{10427}x{ff3a}x{1fb0}")); //test 1713
}

function testRegexpPCRE_1692() {
  var regexp = /\p{Ll}/i;
  assertEquals(null, regexp.exec("Ax{391}x{1044F}x{ff3a}x{1fb0}")); //test 1714
}

function testRegexpPCRE_1693() {
  var regexp = /\p{Ll}/i;
  assertEquals(null, regexp.exec("Ax{391}x{10427}x{ff5a}x{1fb0}")); //test 1715
}

function testRegexpPCRE_1694() {
  var regexp = /\p{Ll}/i;
  assertEquals(null, regexp.exec("Ax{391}x{10427}x{ff3a}x{1fb8}")); //test 1716
}

function testRegexpPCRE_1695() {
  var regexp = /\p{Ll}/i;
  assertEquals(null, regexp.exec("x{391}x{3b1}x{3b1}x{3b1}x{391}")); //test 1717
}

function testRegexpPCRE_1696() {
  var regexp = /\p{Ll}/i;
  assertEquals(null, regexp.exec("x{391}x{3b1}x{3b1}x{3b1}x{391}X")); //test 1718
}

function testRegexpPCRE_1697() {
  var regexp = /\p{Ll}/i;
  assertEquals(null, regexp.exec("x{391}x{3b1}x{3b1}x{3b1}x{391}X")); //test 1719
}

function testRegexpPCRE_1698() {
  var regexp = /\p{Ll}/i;
  assertEquals(null, regexp.exec("x{391}")); //test 1720
}

function testRegexpPCRE_1699() {
  var regexp = /\p{Ll}/i;
  assertEquals(null, regexp.exec("x{ff3a}")); //test 1721
}

function testRegexpPCRE_1700() {
  var regexp = /\p{Ll}/i;
  assertEquals(null, regexp.exec("x{3b1}")); //test 1722
}

function testRegexpPCRE_1701() {
  var regexp = /\p{Ll}/i;
  assertEquals(null, regexp.exec("x{ff5a}   ")); //test 1723
}

function testRegexpPCRE_1702() {
  var regexp = /\p{Ll}/i;
  assertEquals(null, regexp.exec("x{c0}")); //test 1724
}

function testRegexpPCRE_1703() {
  var regexp = /\p{Ll}/i;
  assertEquals(null, regexp.exec("x{e0} ")); //test 1725
}

function testRegexpPCRE_1704() {
  var regexp = /\p{Ll}/i;
  assertEquals(null, regexp.exec("x{104}")); //test 1726
}

function testRegexpPCRE_1705() {
  var regexp = /\p{Ll}/i;
  assertEquals(null, regexp.exec("x{105}")); //test 1727
}

function testRegexpPCRE_1706() {
  var regexp = /\p{Ll}/i;
  assertEquals(null, regexp.exec("x{109}  ")); //test 1728
}

function testRegexpPCRE_1707() {
  var regexp = /\p{Ll}/i;
  assertEquals(null, regexp.exec("** Failers")); //test 1729
}

function testRegexpPCRE_1708() {
  var regexp = /\p{Ll}/i;
  assertEquals(null, regexp.exec("x{100}")); //test 1730
}

function testRegexpPCRE_1709() {
  var regexp = /\p{Ll}/i;
  assertEquals(null, regexp.exec("x{10a} ")); //test 1731
}

function testRegexpPCRE_1710() {
  var regexp = /\p{Ll}/i;
  assertEquals(null, regexp.exec("Z")); //test 1732
}

function testRegexpPCRE_1711() {
  var regexp = /\p{Ll}/i;
  assertEquals(null, regexp.exec("z")); //test 1733
}

function testRegexpPCRE_1712() {
  var regexp = /\p{Ll}/i;
  assertEquals(null, regexp.exec("x{39c}")); //test 1734
}

function testRegexpPCRE_1713() {
  var regexp = /\p{Ll}/i;
  assertEquals(null, regexp.exec("x{178}")); //test 1735
}

function testRegexpPCRE_1714() {
  var regexp = /\p{Ll}/i;
  assertEquals(null, regexp.exec("|")); //test 1736
}

function testRegexpPCRE_1715() {
  var regexp = /\p{Ll}/i;
  assertEquals(null, regexp.exec("x{80}")); //test 1737
}

function testRegexpPCRE_1716() {
  var regexp = /\p{Ll}/i;
  assertEquals(null, regexp.exec("x{ff}")); //test 1738
}

function testRegexpPCRE_1717() {
  var regexp = /\p{Ll}/i;
  assertEquals(null, regexp.exec("x{100}")); //test 1739
}

function testRegexpPCRE_1718() {
  var regexp = /\p{Ll}/i;
  assertEquals(null, regexp.exec("x{101} ")); //test 1740
}

function testRegexpPCRE_1719() {
  var regexp = /\p{Ll}/i;
  assertEquals(null, regexp.exec("** Failers")); //test 1741
}

function testRegexpPCRE_1720() {
  var regexp = /\p{Ll}/i;
  assertEquals(null, regexp.exec("x{102}")); //test 1742
}

function testRegexpPCRE_1721() {
  var regexp = /\p{Ll}/i;
  assertEquals(null, regexp.exec("Y")); //test 1743
}

function testRegexpPCRE_1722() {
  var regexp = /\p{Ll}/i;
  assertEquals(null, regexp.exec("y           ")); //test 1744
}

function testRegexpPCRE_1723() {
  var regexp = /^\X/;
  assertEquals(null, regexp.exec("A")); //test 1745
}

function testRegexpPCRE_1724() {
  var regexp = /^\X/;
  assertEquals(null, regexp.exec("Ax{300}BC ")); //test 1746
}

function testRegexpPCRE_1725() {
  var regexp = /^\X/;
  assertEquals(null, regexp.exec("Ax{300}x{301}x{302}BC ")); //test 1747
}

function testRegexpPCRE_1726() {
  var regexp = /^\X/;
  assertEquals(null, regexp.exec("*** Failers")); //test 1748
}

function testRegexpPCRE_1727() {
  var regexp = /^\X/;
  assertEquals(null, regexp.exec("x{300}  ")); //test 1749
}

function testRegexpPCRE_1728() {
  var regexp = /^[\X]/;
  assertEquals("X", regexp.exec("X123").toString()); //test 1750
}

function testRegexpPCRE_1729() {
  var regexp = /^[\X]/;
  assertEquals(null, regexp.exec("*** Failers")); //test 1751
}

function testRegexpPCRE_1730() {
  var regexp = /^[\X]/;
  assertEquals(null, regexp.exec("AXYZ")); //test 1752
}

function testRegexpPCRE_1731() {
  var regexp = /^(\X*)C/;
  assertEquals(null, regexp.exec("Ax{300}x{301}x{302}BCAx{300}x{301} ")); //test 1753
}

function testRegexpPCRE_1732() {
  var regexp = /^(\X*)C/;
  assertEquals(null, regexp.exec("Ax{300}x{301}x{302}BCAx{300}x{301}C ")); //test 1754
}

function testRegexpPCRE_1733() {
  var regexp = /^(\X*?)C/;
  assertEquals(null, regexp.exec("Ax{300}x{301}x{302}BCAx{300}x{301} ")); //test 1755
}

function testRegexpPCRE_1734() {
  var regexp = /^(\X*?)C/;
  assertEquals(null, regexp.exec("Ax{300}x{301}x{302}BCAx{300}x{301}C ")); //test 1756
}

function testRegexpPCRE_1735() {
  var regexp = /^(\X*)(.)/;
  assertEquals("A,,A", regexp.exec("Ax{300}x{301}x{302}BCAx{300}x{301} ").toString()); //test 1757
}

function testRegexpPCRE_1736() {
  var regexp = /^(\X*)(.)/;
  assertEquals("A,,A", regexp.exec("Ax{300}x{301}x{302}BCAx{300}x{301}C ").toString()); //test 1758
}

function testRegexpPCRE_1737() {
  var regexp = /^(\X*?)(.)/;
  assertEquals("A,,A", regexp.exec("Ax{300}x{301}x{302}BCAx{300}x{301} ").toString()); //test 1759
}

function testRegexpPCRE_1738() {
  var regexp = /^(\X*?)(.)/;
  assertEquals("A,,A", regexp.exec("Ax{300}x{301}x{302}BCAx{300}x{301}C ").toString()); //test 1760
}

function testRegexpPCRE_1739() {
  var regexp = /^\X(.)/;
  assertEquals(null, regexp.exec("*** Failers")); //test 1761
}

function testRegexpPCRE_1740() {
  var regexp = /^\X(.)/;
  assertEquals(null, regexp.exec("Ax{300}x{301}x{302}")); //test 1762
}

function testRegexpPCRE_1741() {
  var regexp = /^\X{2,3}(.)/;
  assertEquals(null, regexp.exec("Ax{300}x{301}Bx{300}X")); //test 1763
}

function testRegexpPCRE_1742() {
  var regexp = /^\X{2,3}(.)/;
  assertEquals(null, regexp.exec("Ax{300}x{301}Bx{300}Cx{300}x{301}")); //test 1764
}

function testRegexpPCRE_1743() {
  var regexp = /^\X{2,3}(.)/;
  assertEquals(null, regexp.exec("Ax{300}x{301}Bx{300}Cx{300}x{301}X")); //test 1765
}

function testRegexpPCRE_1744() {
  var regexp = /^\X{2,3}(.)/;
  assertEquals(null, regexp.exec("Ax{300}x{301}Bx{300}Cx{300}x{301}DAx{300}X")); //test 1766
}

function testRegexpPCRE_1745() {
  var regexp = /^\X{2,3}?(.)/;
  assertEquals(null, regexp.exec("Ax{300}x{301}Bx{300}X")); //test 1767
}

function testRegexpPCRE_1746() {
  var regexp = /^\X{2,3}?(.)/;
  assertEquals(null, regexp.exec("Ax{300}x{301}Bx{300}Cx{300}x{301}")); //test 1768
}

function testRegexpPCRE_1747() {
  var regexp = /^\X{2,3}?(.)/;
  assertEquals(null, regexp.exec("Ax{300}x{301}Bx{300}Cx{300}x{301}X")); //test 1769
}

function testRegexpPCRE_1748() {
  var regexp = /^\X{2,3}?(.)/;
  assertEquals(null, regexp.exec("Ax{300}x{301}Bx{300}Cx{300}x{301}DAx{300}X")); //test 1770
}

function testRegexpPCRE_1749() {
  var regexp = /^\X{2,3}?(.)/;
  assertEquals(null, regexp.exec("x{2e81}x{3007}x{2f804}x{31a0}")); //test 1771
}

function testRegexpPCRE_1750() {
  var regexp = /^\X{2,3}?(.)/;
  assertEquals(null, regexp.exec("** Failers")); //test 1772
}

function testRegexpPCRE_1751() {
  var regexp = /^\X{2,3}?(.)/;
  assertEquals(null, regexp.exec("x{2e7f}  ")); //test 1773
}

function testRegexpPCRE_1752() {
  var regexp = /^\X{2,3}?(.)/;
  assertEquals(null, regexp.exec("x{3105}")); //test 1774
}

function testRegexpPCRE_1753() {
  var regexp = /^\X{2,3}?(.)/;
  assertEquals(null, regexp.exec("** Failers")); //test 1775
}

function testRegexpPCRE_1754() {
  var regexp = /^\X{2,3}?(.)/;
  assertEquals(null, regexp.exec("x{30ff}  ")); //test 1776
}

function testRegexpPCRE_1755() {
  var regexp = /^[\p{Arabic}]/;
  assertEquals(null, regexp.exec("x{06e9}")); //test 1777
}

function testRegexpPCRE_1756() {
  var regexp = /^[\p{Arabic}]/;
  assertEquals(null, regexp.exec("x{060b}")); //test 1778
}

function testRegexpPCRE_1757() {
  var regexp = /^[\p{Arabic}]/;
  assertEquals(null, regexp.exec("** Failers")); //test 1779
}

function testRegexpPCRE_1758() {
  var regexp = /^[\p{Arabic}]/;
  assertEquals(null, regexp.exec("Xx{06e9}   ")); //test 1780
}

function testRegexpPCRE_1759() {
  var regexp = /^[\P{Yi}]/;
  assertEquals(null, regexp.exec("x{2f800}")); //test 1781
}

function testRegexpPCRE_1760() {
  var regexp = /^[\P{Yi}]/;
  assertEquals(null, regexp.exec("** Failers")); //test 1782
}

function testRegexpPCRE_1761() {
  var regexp = /^[\P{Yi}]/;
  assertEquals(null, regexp.exec("x{a014}")); //test 1783
}

function testRegexpPCRE_1762() {
  var regexp = /^[\P{Yi}]/;
  assertEquals(null, regexp.exec("x{a4c6}   ")); //test 1784
}

function testRegexpPCRE_1763() {
  var regexp = /^\p{Any}X/;
  assertEquals(null, regexp.exec("AXYZ")); //test 1785
}

function testRegexpPCRE_1764() {
  var regexp = /^\p{Any}X/;
  assertEquals(null, regexp.exec("x{1234}XYZ ")); //test 1786
}

function testRegexpPCRE_1765() {
  var regexp = /^\p{Any}X/;
  assertEquals(null, regexp.exec("** Failers")); //test 1787
}

function testRegexpPCRE_1766() {
  var regexp = /^\p{Any}X/;
  assertEquals(null, regexp.exec("X  ")); //test 1788
}

function testRegexpPCRE_1767() {
  var regexp = /^\P{Any}X/;
  assertEquals(null, regexp.exec("** Failers")); //test 1789
}

function testRegexpPCRE_1768() {
  var regexp = /^\P{Any}X/;
  assertEquals(null, regexp.exec("AX")); //test 1790
}

function testRegexpPCRE_1769() {
  var regexp = /^\p{Any}?X/;
  assertEquals(null, regexp.exec("XYZ")); //test 1791
}

function testRegexpPCRE_1770() {
  var regexp = /^\p{Any}?X/;
  assertEquals(null, regexp.exec("AXYZ")); //test 1792
}

function testRegexpPCRE_1771() {
  var regexp = /^\p{Any}?X/;
  assertEquals(null, regexp.exec("x{1234}XYZ ")); //test 1793
}

function testRegexpPCRE_1772() {
  var regexp = /^\p{Any}?X/;
  assertEquals(null, regexp.exec("** Failers")); //test 1794
}

function testRegexpPCRE_1773() {
  var regexp = /^\p{Any}?X/;
  assertEquals(null, regexp.exec("ABXYZ   ")); //test 1795
}

function testRegexpPCRE_1774() {
  var regexp = /^\P{Any}?X/;
  assertEquals(null, regexp.exec("XYZ")); //test 1796
}

function testRegexpPCRE_1775() {
  var regexp = /^\P{Any}?X/;
  assertEquals(null, regexp.exec("** Failers")); //test 1797
}

function testRegexpPCRE_1776() {
  var regexp = /^\P{Any}?X/;
  assertEquals(null, regexp.exec("AXYZ")); //test 1798
}

function testRegexpPCRE_1777() {
  var regexp = /^\P{Any}?X/;
  assertEquals(null, regexp.exec("x{1234}XYZ ")); //test 1799
}

function testRegexpPCRE_1778() {
  var regexp = /^\P{Any}?X/;
  assertEquals(null, regexp.exec("ABXYZ   ")); //test 1800
}

function testRegexpPCRE_1779() {
  var regexp = /^\P{Any}?X/;
  assertEquals(null, regexp.exec("AXYZ")); //test 1801
}

function testRegexpPCRE_1780() {
  var regexp = /^\P{Any}?X/;
  assertEquals(null, regexp.exec("x{1234}XYZ")); //test 1802
}

function testRegexpPCRE_1781() {
  var regexp = /^\P{Any}?X/;
  assertEquals(null, regexp.exec("Ax{1234}XYZ")); //test 1803
}

function testRegexpPCRE_1782() {
  var regexp = /^\P{Any}?X/;
  assertEquals(null, regexp.exec("** Failers")); //test 1804
}

function testRegexpPCRE_1783() {
  var regexp = /^\P{Any}?X/;
  assertEquals(null, regexp.exec("XYZ")); //test 1805
}

function testRegexpPCRE_1784() {
  var regexp = /^\P{Any}?X/;
  assertEquals(null, regexp.exec("** Failers")); //test 1806
}

function testRegexpPCRE_1785() {
  var regexp = /^\P{Any}?X/;
  assertEquals(null, regexp.exec("AXYZ")); //test 1807
}

function testRegexpPCRE_1786() {
  var regexp = /^\P{Any}?X/;
  assertEquals(null, regexp.exec("x{1234}XYZ")); //test 1808
}

function testRegexpPCRE_1787() {
  var regexp = /^\P{Any}?X/;
  assertEquals(null, regexp.exec("Ax{1234}XYZ")); //test 1809
}

function testRegexpPCRE_1788() {
  var regexp = /^\P{Any}?X/;
  assertEquals(null, regexp.exec("XYZ")); //test 1810
}

function testRegexpPCRE_1789() {
  var regexp = /^\p{Any}*X/;
  assertEquals(null, regexp.exec("XYZ")); //test 1811
}

function testRegexpPCRE_1790() {
  var regexp = /^\p{Any}*X/;
  assertEquals(null, regexp.exec("AXYZ")); //test 1812
}

function testRegexpPCRE_1791() {
  var regexp = /^\p{Any}*X/;
  assertEquals(null, regexp.exec("x{1234}XYZ")); //test 1813
}

function testRegexpPCRE_1792() {
  var regexp = /^\p{Any}*X/;
  assertEquals(null, regexp.exec("Ax{1234}XYZ")); //test 1814
}

function testRegexpPCRE_1793() {
  var regexp = /^\p{Any}*X/;
  assertEquals(null, regexp.exec("** Failers")); //test 1815
}

function testRegexpPCRE_1794() {
  var regexp = /^\P{Any}*X/;
  assertEquals(null, regexp.exec("XYZ")); //test 1816
}

function testRegexpPCRE_1795() {
  var regexp = /^\P{Any}*X/;
  assertEquals(null, regexp.exec("** Failers")); //test 1817
}

function testRegexpPCRE_1796() {
  var regexp = /^\P{Any}*X/;
  assertEquals(null, regexp.exec("AXYZ")); //test 1818
}

function testRegexpPCRE_1797() {
  var regexp = /^\P{Any}*X/;
  assertEquals(null, regexp.exec("x{1234}XYZ")); //test 1819
}

function testRegexpPCRE_1798() {
  var regexp = /^\P{Any}*X/;
  assertEquals(null, regexp.exec("Ax{1234}XYZ")); //test 1820
}

function testRegexpPCRE_1799() {
  var regexp = /^[\p{Any}]X/;
  assertEquals("AX", regexp.exec("AXYZ").toString()); //test 1821
}

function testRegexpPCRE_1800() {
  var regexp = /^[\p{Any}]X/;
  assertEquals(null, regexp.exec("x{1234}XYZ ")); //test 1822
}

function testRegexpPCRE_1801() {
  var regexp = /^[\p{Any}]X/;
  assertEquals(null, regexp.exec("** Failers")); //test 1823
}

function testRegexpPCRE_1802() {
  var regexp = /^[\p{Any}]X/;
  assertEquals(null, regexp.exec("X  ")); //test 1824
}

function testRegexpPCRE_1803() {
  var regexp = /^[\P{Any}]X/;
  assertEquals(null, regexp.exec("** Failers")); //test 1825
}

function testRegexpPCRE_1804() {
  var regexp = /^[\P{Any}]X/;
  assertEquals("AX", regexp.exec("AX").toString()); //test 1826
}

function testRegexpPCRE_1805() {
  var regexp = /^[\p{Any}]?X/;
  assertEquals("X", regexp.exec("XYZ").toString()); //test 1827
}

function testRegexpPCRE_1806() {
  var regexp = /^[\p{Any}]?X/;
  assertEquals("AX", regexp.exec("AXYZ").toString()); //test 1828
}

function testRegexpPCRE_1807() {
  var regexp = /^[\p{Any}]?X/;
  assertEquals(null, regexp.exec("x{1234}XYZ ")); //test 1829
}

function testRegexpPCRE_1808() {
  var regexp = /^[\p{Any}]?X/;
  assertEquals(null, regexp.exec("** Failers")); //test 1830
}

function testRegexpPCRE_1809() {
  var regexp = /^[\p{Any}]?X/;
  assertEquals(null, regexp.exec("ABXYZ   ")); //test 1831
}

function testRegexpPCRE_1810() {
  var regexp = /^[\P{Any}]?X/;
  assertEquals("X", regexp.exec("XYZ").toString()); //test 1832
}

function testRegexpPCRE_1811() {
  var regexp = /^[\P{Any}]?X/;
  assertEquals(null, regexp.exec("** Failers")); //test 1833
}

function testRegexpPCRE_1812() {
  var regexp = /^[\P{Any}]?X/;
  assertEquals("AX", regexp.exec("AXYZ").toString()); //test 1834
}

function testRegexpPCRE_1813() {
  var regexp = /^[\P{Any}]?X/;
  assertEquals(null, regexp.exec("x{1234}XYZ ")); //test 1835
}

function testRegexpPCRE_1814() {
  var regexp = /^[\P{Any}]?X/;
  assertEquals(null, regexp.exec("ABXYZ   ")); //test 1836
}

function testRegexpPCRE_1815() {
  var regexp = /^[\p{Any}]+X/;
  assertEquals("AX", regexp.exec("AXYZ").toString()); //test 1837
}

function testRegexpPCRE_1816() {
  var regexp = /^[\p{Any}]+X/;
  assertEquals(null, regexp.exec("x{1234}XYZ")); //test 1838
}

function testRegexpPCRE_1817() {
  var regexp = /^[\p{Any}]+X/;
  assertEquals(null, regexp.exec("Ax{1234}XYZ")); //test 1839
}

function testRegexpPCRE_1818() {
  var regexp = /^[\p{Any}]+X/;
  assertEquals(null, regexp.exec("** Failers")); //test 1840
}

function testRegexpPCRE_1819() {
  var regexp = /^[\p{Any}]+X/;
  assertEquals(null, regexp.exec("XYZ")); //test 1841
}

function testRegexpPCRE_1820() {
  var regexp = /^[\P{Any}]+X/;
  assertEquals(null, regexp.exec("** Failers")); //test 1842
}

function testRegexpPCRE_1821() {
  var regexp = /^[\P{Any}]+X/;
  assertEquals("AX", regexp.exec("AXYZ").toString()); //test 1843
}

function testRegexpPCRE_1822() {
  var regexp = /^[\P{Any}]+X/;
  assertEquals(null, regexp.exec("x{1234}XYZ")); //test 1844
}

function testRegexpPCRE_1823() {
  var regexp = /^[\P{Any}]+X/;
  assertEquals(null, regexp.exec("Ax{1234}XYZ")); //test 1845
}

function testRegexpPCRE_1824() {
  var regexp = /^[\P{Any}]+X/;
  assertEquals(null, regexp.exec("XYZ")); //test 1846
}

function testRegexpPCRE_1825() {
  var regexp = /^[\p{Any}]*X/;
  assertEquals("X", regexp.exec("XYZ").toString()); //test 1847
}

function testRegexpPCRE_1826() {
  var regexp = /^[\p{Any}]*X/;
  assertEquals("AX", regexp.exec("AXYZ").toString()); //test 1848
}

function testRegexpPCRE_1827() {
  var regexp = /^[\p{Any}]*X/;
  assertEquals(null, regexp.exec("x{1234}XYZ")); //test 1849
}

function testRegexpPCRE_1828() {
  var regexp = /^[\p{Any}]*X/;
  assertEquals(null, regexp.exec("Ax{1234}XYZ")); //test 1850
}

function testRegexpPCRE_1829() {
  var regexp = /^[\p{Any}]*X/;
  assertEquals(null, regexp.exec("** Failers")); //test 1851
}

function testRegexpPCRE_1830() {
  var regexp = /^[\P{Any}]*X/;
  assertEquals("X", regexp.exec("XYZ").toString()); //test 1852
}

function testRegexpPCRE_1831() {
  var regexp = /^[\P{Any}]*X/;
  assertEquals(null, regexp.exec("** Failers")); //test 1853
}

function testRegexpPCRE_1832() {
  var regexp = /^[\P{Any}]*X/;
  assertEquals("AX", regexp.exec("AXYZ").toString()); //test 1854
}

function testRegexpPCRE_1833() {
  var regexp = /^[\P{Any}]*X/;
  assertEquals(null, regexp.exec("x{1234}XYZ")); //test 1855
}

function testRegexpPCRE_1834() {
  var regexp = /^[\P{Any}]*X/;
  assertEquals(null, regexp.exec("Ax{1234}XYZ")); //test 1856
}

function testRegexpPCRE_1835() {
  var regexp = /^\p{Any}{3,5}?/;
  assertEquals(null, regexp.exec("abcdefgh")); //test 1857
}

function testRegexpPCRE_1836() {
  var regexp = /^\p{Any}{3,5}?/;
  assertEquals(null, regexp.exec("x{1234}\n\x0dx{3456}xyz ")); //test 1858
}

function testRegexpPCRE_1837() {
  var regexp = /^\p{Any}{3,5}/;
  assertEquals(null, regexp.exec("abcdefgh")); //test 1859
}

function testRegexpPCRE_1838() {
  var regexp = /^\p{Any}{3,5}/;
  assertEquals(null, regexp.exec("x{1234}\n\x0dx{3456}xyz ")); //test 1860
}

function testRegexpPCRE_1839() {
  var regexp = /^\P{Any}{3,5}?/;
  assertEquals(null, regexp.exec("** Failers")); //test 1861
}

function testRegexpPCRE_1840() {
  var regexp = /^\P{Any}{3,5}?/;
  assertEquals(null, regexp.exec("abcdefgh")); //test 1862
}

function testRegexpPCRE_1841() {
  var regexp = /^\P{Any}{3,5}?/;
  assertEquals(null, regexp.exec("x{1234}\n\x0dx{3456}xyz ")); //test 1863
}

function testRegexpPCRE_1842() {
  var regexp = /^\p{L&}X/;
  assertEquals(null, regexp.exec(" AXY")); //test 1864
}

function testRegexpPCRE_1843() {
  var regexp = /^\p{L&}X/;
  assertEquals(null, regexp.exec(" aXY")); //test 1865
}

function testRegexpPCRE_1844() {
  var regexp = /^\p{L&}X/;
  assertEquals(null, regexp.exec(" x{1c5}XY")); //test 1866
}

function testRegexpPCRE_1845() {
  var regexp = /^\p{L&}X/;
  assertEquals(null, regexp.exec(" ** Failers")); //test 1867
}

function testRegexpPCRE_1846() {
  var regexp = /^\p{L&}X/;
  assertEquals(null, regexp.exec(" x{1bb}XY")); //test 1868
}

function testRegexpPCRE_1847() {
  var regexp = /^\p{L&}X/;
  assertEquals(null, regexp.exec(" x{2b0}XY")); //test 1869
}

function testRegexpPCRE_1848() {
  var regexp = /^\p{L&}X/;
  assertEquals(null, regexp.exec(" !XY      ")); //test 1870
}

function testRegexpPCRE_1849() {
  var regexp = /^[\p{L&}]X/;
  assertEquals(null, regexp.exec(" AXY")); //test 1871
}

function testRegexpPCRE_1850() {
  var regexp = /^[\p{L&}]X/;
  assertEquals(null, regexp.exec(" aXY")); //test 1872
}

function testRegexpPCRE_1851() {
  var regexp = /^[\p{L&}]X/;
  assertEquals(null, regexp.exec(" x{1c5}XY")); //test 1873
}

function testRegexpPCRE_1852() {
  var regexp = /^[\p{L&}]X/;
  assertEquals(null, regexp.exec(" ** Failers")); //test 1874
}

function testRegexpPCRE_1853() {
  var regexp = /^[\p{L&}]X/;
  assertEquals(null, regexp.exec(" x{1bb}XY")); //test 1875
}

function testRegexpPCRE_1854() {
  var regexp = /^[\p{L&}]X/;
  assertEquals(null, regexp.exec(" x{2b0}XY")); //test 1876
}

function testRegexpPCRE_1855() {
  var regexp = /^[\p{L&}]X/;
  assertEquals(null, regexp.exec(" !XY      ")); //test 1877
}

function testRegexpPCRE_1856() {
  var regexp = /^[\p{L&}]X/;
  assertEquals(null, regexp.exec(" AXY")); //test 1878
}

function testRegexpPCRE_1857() {
  var regexp = /^[\p{L&}]X/;
  assertEquals(null, regexp.exec(" aXY")); //test 1879
}

function testRegexpPCRE_1858() {
  var regexp = /^[\p{L&}]X/;
  assertEquals(null, regexp.exec(" AbcdeXyz ")); //test 1880
}

function testRegexpPCRE_1859() {
  var regexp = /^[\p{L&}]X/;
  assertEquals(null, regexp.exec(" x{1c5}AbXY")); //test 1881
}

function testRegexpPCRE_1860() {
  var regexp = /^[\p{L&}]X/;
  assertEquals(null, regexp.exec(" abcDEXypqreXlmn ")); //test 1882
}

function testRegexpPCRE_1861() {
  var regexp = /^[\p{L&}]X/;
  assertEquals(null, regexp.exec(" ** Failers")); //test 1883
}

function testRegexpPCRE_1862() {
  var regexp = /^[\p{L&}]X/;
  assertEquals(null, regexp.exec(" x{1bb}XY")); //test 1884
}

function testRegexpPCRE_1863() {
  var regexp = /^[\p{L&}]X/;
  assertEquals(null, regexp.exec(" x{2b0}XY")); //test 1885
}

function testRegexpPCRE_1864() {
  var regexp = /^[\p{L&}]X/;
  assertEquals(null, regexp.exec(" !XY      ")); //test 1886
}

function testRegexpPCRE_1865() {
  var regexp = /^[\p{L&}]+X/;
  assertEquals(null, regexp.exec(" AXY")); //test 1887
}

function testRegexpPCRE_1866() {
  var regexp = /^[\p{L&}]+X/;
  assertEquals(null, regexp.exec(" aXY")); //test 1888
}

function testRegexpPCRE_1867() {
  var regexp = /^[\p{L&}]+X/;
  assertEquals(null, regexp.exec(" AbcdeXyz ")); //test 1889
}

function testRegexpPCRE_1868() {
  var regexp = /^[\p{L&}]+X/;
  assertEquals(null, regexp.exec(" x{1c5}AbXY")); //test 1890
}

function testRegexpPCRE_1869() {
  var regexp = /^[\p{L&}]+X/;
  assertEquals(null, regexp.exec(" abcDEXypqreXlmn ")); //test 1891
}

function testRegexpPCRE_1870() {
  var regexp = /^[\p{L&}]+X/;
  assertEquals(null, regexp.exec(" ** Failers")); //test 1892
}

function testRegexpPCRE_1871() {
  var regexp = /^[\p{L&}]+X/;
  assertEquals(null, regexp.exec(" x{1bb}XY")); //test 1893
}

function testRegexpPCRE_1872() {
  var regexp = /^[\p{L&}]+X/;
  assertEquals(null, regexp.exec(" x{2b0}XY")); //test 1894
}

function testRegexpPCRE_1873() {
  var regexp = /^[\p{L&}]+X/;
  assertEquals(null, regexp.exec(" !XY      ")); //test 1895
}

function testRegexpPCRE_1874() {
  var regexp = /^[\p{L&}]+X/;
  assertEquals(null, regexp.exec(" AXY")); //test 1896
}

function testRegexpPCRE_1875() {
  var regexp = /^[\p{L&}]+X/;
  assertEquals(null, regexp.exec(" aXY")); //test 1897
}

function testRegexpPCRE_1876() {
  var regexp = /^[\p{L&}]+X/;
  assertEquals(null, regexp.exec(" AbcdeXyz ")); //test 1898
}

function testRegexpPCRE_1877() {
  var regexp = /^[\p{L&}]+X/;
  assertEquals(null, regexp.exec(" x{1c5}AbXY")); //test 1899
}

function testRegexpPCRE_1878() {
  var regexp = /^[\p{L&}]+X/;
  assertEquals(null, regexp.exec(" abcDEXypqreXlmn ")); //test 1900
}

function testRegexpPCRE_1879() {
  var regexp = /^[\p{L&}]+X/;
  assertEquals(null, regexp.exec(" ** Failers")); //test 1901
}

function testRegexpPCRE_1880() {
  var regexp = /^[\p{L&}]+X/;
  assertEquals(null, regexp.exec(" x{1bb}XY")); //test 1902
}

function testRegexpPCRE_1881() {
  var regexp = /^[\p{L&}]+X/;
  assertEquals(null, regexp.exec(" x{2b0}XY")); //test 1903
}

function testRegexpPCRE_1882() {
  var regexp = /^[\p{L&}]+X/;
  assertEquals(null, regexp.exec(" !XY      ")); //test 1904
}

function testRegexpPCRE_1883() {
  var regexp = /^[\p{L&}]+?X/;
  assertEquals(null, regexp.exec(" AXY")); //test 1905
}

function testRegexpPCRE_1884() {
  var regexp = /^[\p{L&}]+?X/;
  assertEquals(null, regexp.exec(" aXY")); //test 1906
}

function testRegexpPCRE_1885() {
  var regexp = /^[\p{L&}]+?X/;
  assertEquals(null, regexp.exec(" AbcdeXyz ")); //test 1907
}

function testRegexpPCRE_1886() {
  var regexp = /^[\p{L&}]+?X/;
  assertEquals(null, regexp.exec(" x{1c5}AbXY")); //test 1908
}

function testRegexpPCRE_1887() {
  var regexp = /^[\p{L&}]+?X/;
  assertEquals(null, regexp.exec(" abcDEXypqreXlmn ")); //test 1909
}

function testRegexpPCRE_1888() {
  var regexp = /^[\p{L&}]+?X/;
  assertEquals(null, regexp.exec(" ** Failers")); //test 1910
}

function testRegexpPCRE_1889() {
  var regexp = /^[\p{L&}]+?X/;
  assertEquals(null, regexp.exec(" x{1bb}XY")); //test 1911
}

function testRegexpPCRE_1890() {
  var regexp = /^[\p{L&}]+?X/;
  assertEquals(null, regexp.exec(" x{2b0}XY")); //test 1912
}

function testRegexpPCRE_1891() {
  var regexp = /^[\p{L&}]+?X/;
  assertEquals(null, regexp.exec(" !XY      ")); //test 1913
}

function testRegexpPCRE_1892() {
  var regexp = /^\P{L&}X/;
  assertEquals(null, regexp.exec(" !XY")); //test 1914
}

function testRegexpPCRE_1893() {
  var regexp = /^\P{L&}X/;
  assertEquals(null, regexp.exec(" x{1bb}XY")); //test 1915
}

function testRegexpPCRE_1894() {
  var regexp = /^\P{L&}X/;
  assertEquals(null, regexp.exec(" x{2b0}XY")); //test 1916
}

function testRegexpPCRE_1895() {
  var regexp = /^\P{L&}X/;
  assertEquals(null, regexp.exec(" ** Failers")); //test 1917
}

function testRegexpPCRE_1896() {
  var regexp = /^\P{L&}X/;
  assertEquals(null, regexp.exec(" x{1c5}XY")); //test 1918
}

function testRegexpPCRE_1897() {
  var regexp = /^\P{L&}X/;
  assertEquals(null, regexp.exec(" AXY      ")); //test 1919
}

function testRegexpPCRE_1898() {
  var regexp = /^[\P{L&}]X/;
  assertEquals(null, regexp.exec(" !XY")); //test 1920
}

function testRegexpPCRE_1899() {
  var regexp = /^[\P{L&}]X/;
  assertEquals(null, regexp.exec(" x{1bb}XY")); //test 1921
}

function testRegexpPCRE_1900() {
  var regexp = /^[\P{L&}]X/;
  assertEquals(null, regexp.exec(" x{2b0}XY")); //test 1922
}

function testRegexpPCRE_1901() {
  var regexp = /^[\P{L&}]X/;
  assertEquals(null, regexp.exec(" ** Failers")); //test 1923
}

function testRegexpPCRE_1902() {
  var regexp = /^[\P{L&}]X/;
  assertEquals(null, regexp.exec(" x{1c5}XY")); //test 1924
}

function testRegexpPCRE_1903() {
  var regexp = /^[\P{L&}]X/;
  assertEquals(null, regexp.exec(" AXY      ")); //test 1925
}

function testRegexpPCRE_1904() {
  var regexp = /^(\p{Z}[^\p{C}\p{Z}]+)*$/;
  assertEquals(null, regexp.exec("\xa0!")); //test 1926
}

function testRegexpPCRE_1905() {
  var regexp = /^(\p{Z}[^\p{C}\p{Z}]+)*$/;
  assertEquals(null, regexp.exec("AabcabcYZ    ")); //test 1927
}

function testRegexpPCRE_1906() {
  var regexp = /([\pL]=(abc))*X/;
  assertEquals("L=abcX,L=abc,abc", regexp.exec("L=abcX").toString()); //test 1928
}

function testRegexpPCRE_1907() {
  var regexp = /([\pL]=(abc))*X/;
  assertEquals(null, regexp.exec("x{c0}")); //test 1929
}

function testRegexpPCRE_1908() {
  var regexp = /([\pL]=(abc))*X/;
  assertEquals(null, regexp.exec("x{e0} ")); //test 1930
}

function testRegexpPCRE_1909() {
  var regexp = /([\pL]=(abc))*X/;
  assertEquals(null, regexp.exec("x{c0}")); //test 1931
}

function testRegexpPCRE_1910() {
  var regexp = /([\pL]=(abc))*X/;
  assertEquals(null, regexp.exec("x{e0} ")); //test 1932
}

function testRegexpPCRE_1911() {
  var regexp = /^\p{Balinese}\p{Cuneiform}\p{Nko}\p{Phags_Pa}\p{Phoenician}/;
  assertEquals(null, regexp.exec("x{1b00}x{12000}x{7c0}x{a840}x{10900}")); //test 1933
}

function testRegexpPCRE_1912() {
  var regexp = /\p{L}{4}/;
  assertEquals(null, regexp.exec("123abcdefg")); //test 1934
}

function testRegexpPCRE_1913() {
  var regexp = /\p{L}{4}/;
  assertEquals(null, regexp.exec("123abc\xc4\xc5zz")); //test 1935
}

function testRegexpPCRE_1914() {
  var regexp = /[\PPP\x8a]{1,}\x80/;
  assertEquals(null, regexp.exec("A\x80")); //test 1936
}

function testRegexpPCRE_1915() {
  var regexp = /^[\p{Arabic}]/;
  assertEquals(null, regexp.exec("x{60e} ")); //test 1937
}

function testRegexpPCRE_1916() {
  var regexp = /^[\p{Arabic}]/;
  assertEquals(null, regexp.exec("x{656} ")); //test 1938
}

function testRegexpPCRE_1917() {
  var regexp = /^[\p{Arabic}]/;
  assertEquals(null, regexp.exec("x{657} ")); //test 1939
}

function testRegexpPCRE_1918() {
  var regexp = /^[\p{Arabic}]/;
  assertEquals(null, regexp.exec("x{658} ")); //test 1940
}

function testRegexpPCRE_1919() {
  var regexp = /^[\p{Arabic}]/;
  assertEquals(null, regexp.exec("x{659} ")); //test 1941
}

function testRegexpPCRE_1920() {
  var regexp = /^[\p{Arabic}]/;
  assertEquals(null, regexp.exec("x{65a} ")); //test 1942
}

function testRegexpPCRE_1921() {
  var regexp = /^[\p{Arabic}]/;
  assertEquals(null, regexp.exec("x{65b} ")); //test 1943
}

function testRegexpPCRE_1922() {
  var regexp = /^[\p{Arabic}]/;
  assertEquals(null, regexp.exec("x{65c} ")); //test 1944
}

function testRegexpPCRE_1923() {
  var regexp = /^[\p{Arabic}]/;
  assertEquals(null, regexp.exec("x{65d} ")); //test 1945
}

function testRegexpPCRE_1924() {
  var regexp = /^[\p{Arabic}]/;
  assertEquals(null, regexp.exec("x{65e} ")); //test 1946
}

function testRegexpPCRE_1925() {
  var regexp = /^[\p{Arabic}]/;
  assertEquals(null, regexp.exec("x{66a} ")); //test 1947
}

function testRegexpPCRE_1926() {
  var regexp = /^[\p{Arabic}]/;
  assertEquals(null, regexp.exec("x{6e9} ")); //test 1948
}

function testRegexpPCRE_1927() {
  var regexp = /^[\p{Arabic}]/;
  assertEquals(null, regexp.exec("x{6ef}")); //test 1949
}

function testRegexpPCRE_1928() {
  var regexp = /^[\p{Arabic}]/;
  assertEquals(null, regexp.exec("x{6fa}  ")); //test 1950
}

function testRegexpPCRE_1929() {
  var regexp = /^[\p{Arabic}]/;
  assertEquals(null, regexp.exec("** Failers")); //test 1951
}

function testRegexpPCRE_1930() {
  var regexp = /^[\p{Arabic}]/;
  assertEquals(null, regexp.exec("x{600}")); //test 1952
}

function testRegexpPCRE_1931() {
  var regexp = /^[\p{Arabic}]/;
  assertEquals(null, regexp.exec("x{650}")); //test 1953
}

function testRegexpPCRE_1932() {
  var regexp = /^[\p{Arabic}]/;
  assertEquals(null, regexp.exec("x{651}  ")); //test 1954
}

function testRegexpPCRE_1933() {
  var regexp = /^[\p{Arabic}]/;
  assertEquals(null, regexp.exec("x{652}  ")); //test 1955
}

function testRegexpPCRE_1934() {
  var regexp = /^[\p{Arabic}]/;
  assertEquals(null, regexp.exec("x{653}  ")); //test 1956
}

function testRegexpPCRE_1935() {
  var regexp = /^[\p{Arabic}]/;
  assertEquals(null, regexp.exec("x{654} ")); //test 1957
}

function testRegexpPCRE_1936() {
  var regexp = /^[\p{Arabic}]/;
  assertEquals(null, regexp.exec("x{655} ")); //test 1958
}

function testRegexpPCRE_1937() {
  var regexp = /^[\p{Arabic}]/;
  assertEquals(null, regexp.exec("x{65f}  ")); //test 1959
}

function testRegexpPCRE_1938() {
  var regexp = /^\p{Cyrillic}/;
  assertEquals(null, regexp.exec("x{1d2b} ")); //test 1960
}

function testRegexpPCRE_1939() {
  var regexp = /^\p{Common}/;
  assertEquals(null, regexp.exec("x{589}")); //test 1961
}

function testRegexpPCRE_1940() {
  var regexp = /^\p{Common}/;
  assertEquals(null, regexp.exec("x{60c}")); //test 1962
}

function testRegexpPCRE_1941() {
  var regexp = /^\p{Common}/;
  assertEquals(null, regexp.exec("x{61f}  ")); //test 1963
}

function testRegexpPCRE_1942() {
  var regexp = /^\p{Common}/;
  assertEquals(null, regexp.exec("x{964}")); //test 1964
}

function testRegexpPCRE_1943() {
  var regexp = /^\p{Common}/;
  assertEquals(null, regexp.exec("x{965}  ")); //test 1965
}

function testRegexpPCRE_1944() {
  var regexp = /^\p{Common}/;
  assertEquals(null, regexp.exec("x{970}  ")); //test 1966
}

function testRegexpPCRE_1945() {
  var regexp = /^\p{Inherited}/;
  assertEquals(null, regexp.exec("x{64b}")); //test 1967
}

function testRegexpPCRE_1946() {
  var regexp = /^\p{Inherited}/;
  assertEquals(null, regexp.exec("x{654}")); //test 1968
}

function testRegexpPCRE_1947() {
  var regexp = /^\p{Inherited}/;
  assertEquals(null, regexp.exec("x{655}")); //test 1969
}

function testRegexpPCRE_1948() {
  var regexp = /^\p{Inherited}/;
  assertEquals(null, regexp.exec("x{200c} ")); //test 1970
}

function testRegexpPCRE_1949() {
  var regexp = /^\p{Inherited}/;
  assertEquals(null, regexp.exec("** Failers")); //test 1971
}

function testRegexpPCRE_1950() {
  var regexp = /^\p{Inherited}/;
  assertEquals(null, regexp.exec("x{64a}")); //test 1972
}

function testRegexpPCRE_1951() {
  var regexp = /^\p{Inherited}/;
  assertEquals(null, regexp.exec("x{656}     ")); //test 1973
}

function testRegexpPCRE_1952() {
  var regexp = /^\p{Shavian}/;
  assertEquals(null, regexp.exec("x{10450}")); //test 1974
}

function testRegexpPCRE_1953() {
  var regexp = /^\p{Shavian}/;
  assertEquals(null, regexp.exec("x{1047f}")); //test 1975
}

function testRegexpPCRE_1954() {
  var regexp = /^\p{Deseret}/;
  assertEquals(null, regexp.exec("x{10400}")); //test 1976
}

function testRegexpPCRE_1955() {
  var regexp = /^\p{Deseret}/;
  assertEquals(null, regexp.exec("x{1044f}")); //test 1977
}

function testRegexpPCRE_1956() {
  var regexp = /^\p{Osmanya}/;
  assertEquals(null, regexp.exec("x{10480}")); //test 1978
}

function testRegexpPCRE_1957() {
  var regexp = /^\p{Osmanya}/;
  assertEquals(null, regexp.exec("x{1049d}")); //test 1979
}

function testRegexpPCRE_1958() {
  var regexp = /^\p{Osmanya}/;
  assertEquals(null, regexp.exec("x{104a0}")); //test 1980
}

function testRegexpPCRE_1959() {
  var regexp = /^\p{Osmanya}/;
  assertEquals(null, regexp.exec("x{104a9}")); //test 1981
}

function testRegexpPCRE_1960() {
  var regexp = /^\p{Osmanya}/;
  assertEquals(null, regexp.exec("** Failers")); //test 1982
}

function testRegexpPCRE_1961() {
  var regexp = /^\p{Osmanya}/;
  assertEquals(null, regexp.exec("x{1049e}")); //test 1983
}

function testRegexpPCRE_1962() {
  var regexp = /^\p{Osmanya}/;
  assertEquals(null, regexp.exec("x{1049f}")); //test 1984
}

function testRegexpPCRE_1963() {
  var regexp = /^\p{Osmanya}/;
  assertEquals(null, regexp.exec("x{104aa}           ")); //test 1985
}

function testRegexpPCRE_1964() {
  var regexp = /^\p{Osmanya}/;
  assertEquals(null, regexp.exec("\xe2\x80\xa8\xe2\x80\xa8")); //test 1986
}

function testRegexpPCRE_1965() {
  var regexp = /^\p{Osmanya}/;
  assertEquals(null, regexp.exec("x{2028}x{2028}x{2028}")); //test 1987
}

function testRegexpPCRE_1966() {
  var regexp = /\p{Zl}/;
  assertEquals(null, regexp.exec("x{c0}x{e0}x{116}x{117}")); //test 1988
}

function testRegexpPCRE_1967() {
  var regexp = /\p{Zl}/;
  assertEquals(null, regexp.exec("x{c0}x{e0}x{116}x{117}")); //test 1989
}

function testRegexpPCRE_1968() {
  var regexp = /\p{Carian}\p{Cham}\p{Kayah_Li}\p{Lepcha}\p{Lycian}\p{Lydian}\p{Ol_Chiki}\p{Rejang}\p{Saurashtra}\p{Sundanese}\p{Vai}/;
  assertEquals(null, regexp.exec("x{102A4}x{AA52}x{A91D}x{1C46}x{10283}x{1092E}x{1C6B}x{A93B}x{A8BF}x{1BA0}x{A50A}====")); //test 1990
}

function testRegexpPCRE_1969() {
  var regexp = /\p{Carian}\p{Cham}\p{Kayah_Li}\p{Lepcha}\p{Lycian}\p{Lydian}\p{Ol_Chiki}\p{Rejang}\p{Saurashtra}\p{Sundanese}\p{Vai}/;
  assertEquals(null, regexp.exec("x{a77d}x{1d79}")); //test 1991
}

function testRegexpPCRE_1970() {
  var regexp = /\p{Carian}\p{Cham}\p{Kayah_Li}\p{Lepcha}\p{Lycian}\p{Lydian}\p{Ol_Chiki}\p{Rejang}\p{Saurashtra}\p{Sundanese}\p{Vai}/;
  assertEquals(null, regexp.exec("x{1d79}x{a77d} ")); //test 1992
}

function testRegexpPCRE_1971() {
  var regexp = /\p{Carian}\p{Cham}\p{Kayah_Li}\p{Lepcha}\p{Lycian}\p{Lydian}\p{Ol_Chiki}\p{Rejang}\p{Saurashtra}\p{Sundanese}\p{Vai}/;
  assertEquals(null, regexp.exec("x{a77d}x{1d79}")); //test 1993
}

function testRegexpPCRE_1972() {
  var regexp = /\p{Carian}\p{Cham}\p{Kayah_Li}\p{Lepcha}\p{Lycian}\p{Lydian}\p{Ol_Chiki}\p{Rejang}\p{Saurashtra}\p{Sundanese}\p{Vai}/;
  assertEquals(null, regexp.exec("** Failers ")); //test 1994
}

function testRegexpPCRE_1973() {
  var regexp = /\p{Carian}\p{Cham}\p{Kayah_Li}\p{Lepcha}\p{Lycian}\p{Lydian}\p{Ol_Chiki}\p{Rejang}\p{Saurashtra}\p{Sundanese}\p{Vai}/;
  assertEquals(null, regexp.exec("x{1d79}x{a77d} ")); //test 1995
}

function testRegexpPCRE_1974() {
  var regexp = /(A)\1/i;
  assertEquals("AA,A", regexp.exec("AA").toString()); //test 1996
}

function testRegexpPCRE_1975() {
  var regexp = /(A)\1/i;
  assertEquals("Aa,A", regexp.exec("Aa").toString()); //test 1997
}

function testRegexpPCRE_1976() {
  var regexp = /(A)\1/i;
  assertEquals("aa,a", regexp.exec("aa").toString()); //test 1998
}

function testRegexpPCRE_1977() {
  var regexp = /(A)\1/i;
  assertEquals("aA,a", regexp.exec("aA").toString()); //test 1999
}

function testRegexpPCRE_1978() {
  var regexp = /(A)\1/i;
  assertEquals(null, regexp.exec("x{de}x{de}")); //test 2000
}

function testRegexpPCRE_1979() {
  var regexp = /(A)\1/i;
  assertEquals(null, regexp.exec("x{de}x{fe}")); //test 2001
}

function testRegexpPCRE_1980() {
  var regexp = /(A)\1/i;
  assertEquals(null, regexp.exec("x{fe}x{fe}")); //test 2002
}

function testRegexpPCRE_1981() {
  var regexp = /(A)\1/i;
  assertEquals(null, regexp.exec("x{fe}x{de}")); //test 2003
}

function testRegexpPCRE_1982() {
  var regexp = /(A)\1/i;
  assertEquals(null, regexp.exec("x{10a}x{10a}")); //test 2004
}

function testRegexpPCRE_1983() {
  var regexp = /(A)\1/i;
  assertEquals(null, regexp.exec("x{10a}x{10b}")); //test 2005
}

function testRegexpPCRE_1984() {
  var regexp = /(A)\1/i;
  assertEquals(null, regexp.exec("x{10b}x{10b}")); //test 2006
}

function testRegexpPCRE_1985() {
  var regexp = /(A)\1/i;
  assertEquals(null, regexp.exec("x{10b}x{10a}")); //test 2007
}

function testRegexpPCRE_1986() {
  var regexp = /abc/;
  assertEquals("abc", regexp.exec("abc").toString()); //test 2008
}

function testRegexpPCRE_1987() {
  var regexp = /ab*c/;
  assertEquals("abc", regexp.exec("abc").toString()); //test 2009
}

function testRegexpPCRE_1988() {
  var regexp = /ab*c/;
  assertEquals("abbbbc", regexp.exec("abbbbc").toString()); //test 2010
}

function testRegexpPCRE_1989() {
  var regexp = /ab*c/;
  assertEquals("ac", regexp.exec("ac").toString()); //test 2011
}

function testRegexpPCRE_1990() {
  var regexp = /ab+c/;
  assertEquals("abc", regexp.exec("abc").toString()); //test 2012
}

function testRegexpPCRE_1991() {
  var regexp = /ab+c/;
  assertEquals("abbbbbbc", regexp.exec("abbbbbbc").toString()); //test 2013
}

function testRegexpPCRE_1992() {
  var regexp = /ab+c/;
  assertEquals(null, regexp.exec("*** Failers ")); //test 2014
}

function testRegexpPCRE_1993() {
  var regexp = /ab+c/;
  assertEquals(null, regexp.exec("ac")); //test 2015
}

function testRegexpPCRE_1994() {
  var regexp = /ab+c/;
  assertEquals(null, regexp.exec("ab")); //test 2016
}

function testRegexpPCRE_1995() {
  var regexp = /a*/;
  assertEquals("a", regexp.exec("a").toString()); //test 2017
}

function testRegexpPCRE_1996() {
  var regexp = /a*/;
  assertEquals("aaaaaaaaaaaaaaaaa", regexp.exec("aaaaaaaaaaaaaaaaa").toString()); //test 2018
}

function testRegexpPCRE_1997() {
  var regexp = /a*/;
  assertEquals("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", regexp.exec("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa ").toString()); //test 2019
}

function testRegexpPCRE_1998() {
  var regexp = /a*/;
  assertEquals("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", regexp.exec("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaF ").toString()); //test 2020
}

function testRegexpPCRE_1999() {
  var regexp = /(a|abcd|african)/;
  assertEquals("a,a", regexp.exec("a").toString()); //test 2021
}

function testRegexpPCRE_2000() {
  var regexp = /(a|abcd|african)/;
  assertEquals("a,a", regexp.exec("abcd").toString()); //test 2022
}

function testRegexpPCRE_2001() {
  var regexp = /(a|abcd|african)/;
  assertEquals("a,a", regexp.exec("african").toString()); //test 2023
}

function testRegexpPCRE_2002() {
  var regexp = /^abc/;
  assertEquals("abc", regexp.exec("abcdef").toString()); //test 2024
}

function testRegexpPCRE_2003() {
  var regexp = /^abc/;
  assertEquals(null, regexp.exec("*** Failers")); //test 2025
}

function testRegexpPCRE_2004() {
  var regexp = /^abc/;
  assertEquals(null, regexp.exec("xyzabc")); //test 2026
}

function testRegexpPCRE_2005() {
  var regexp = /^abc/;
  assertEquals(null, regexp.exec("xyz\nabc    ")); //test 2027
}

function testRegexpPCRE_2006() {
  var regexp = /^abc/m;
  assertEquals("abc", regexp.exec("abcdef").toString()); //test 2028
}

function testRegexpPCRE_2007() {
  var regexp = /^abc/m;
  assertEquals("abc", regexp.exec("xyz\nabc    ").toString()); //test 2029
}

function testRegexpPCRE_2008() {
  var regexp = /^abc/m;
  assertEquals(null, regexp.exec("*** Failers")); //test 2030
}

function testRegexpPCRE_2009() {
  var regexp = /^abc/m;
  assertEquals(null, regexp.exec("xyzabc")); //test 2031
}

function testRegexpPCRE_2010() {
  var regexp = /\Aabc/;
  assertEquals(null, regexp.exec("abcdef")); //test 2032
}

function testRegexpPCRE_2011() {
  var regexp = /\Aabc/;
  assertEquals(null, regexp.exec("*** Failers")); //test 2033
}

function testRegexpPCRE_2012() {
  var regexp = /\Aabc/;
  assertEquals(null, regexp.exec("xyzabc")); //test 2034
}

function testRegexpPCRE_2013() {
  var regexp = /\Aabc/;
  assertEquals(null, regexp.exec("xyz\nabc    ")); //test 2035
}

function testRegexpPCRE_2014() {
  var regexp = /\Aabc/m;
  assertEquals(null, regexp.exec("abcdef")); //test 2036
}

function testRegexpPCRE_2015() {
  var regexp = /\Aabc/m;
  assertEquals(null, regexp.exec("*** Failers")); //test 2037
}

function testRegexpPCRE_2016() {
  var regexp = /\Aabc/m;
  assertEquals(null, regexp.exec("xyzabc")); //test 2038
}

function testRegexpPCRE_2017() {
  var regexp = /\Aabc/m;
  assertEquals(null, regexp.exec("xyz\nabc    ")); //test 2039
}

function testRegexpPCRE_2018() {
  var regexp = /\Gabc/;
  assertEquals(null, regexp.exec("abcdef")); //test 2040
}

function testRegexpPCRE_2019() {
  var regexp = /\Gabc/;
  assertEquals(null, regexp.exec("xyzabc>3")); //test 2041
}

function testRegexpPCRE_2020() {
  var regexp = /\Gabc/;
  assertEquals(null, regexp.exec("*** Failers")); //test 2042
}

function testRegexpPCRE_2021() {
  var regexp = /\Gabc/;
  assertEquals(null, regexp.exec("xyzabc    ")); //test 2043
}

function testRegexpPCRE_2022() {
  var regexp = /\Gabc/;
  assertEquals(null, regexp.exec("xyzabc>2 ")); //test 2044
}

function testRegexpPCRE_2023() {
  var regexp = /x\dy\Dz/;
  assertEquals("x9yzz", regexp.exec("x9yzz").toString()); //test 2045
}

function testRegexpPCRE_2024() {
  var regexp = /x\dy\Dz/;
  assertEquals("x0y+z", regexp.exec("x0y+z").toString()); //test 2046
}

function testRegexpPCRE_2025() {
  var regexp = /x\dy\Dz/;
  assertEquals(null, regexp.exec("*** Failers")); //test 2047
}

function testRegexpPCRE_2026() {
  var regexp = /x\dy\Dz/;
  assertEquals(null, regexp.exec("xyz")); //test 2048
}

function testRegexpPCRE_2027() {
  var regexp = /x\dy\Dz/;
  assertEquals(null, regexp.exec("xxy0z     ")); //test 2049
}

function testRegexpPCRE_2028() {
  var regexp = /x\sy\Sz/;
  assertEquals("x yzz", regexp.exec("x yzz").toString()); //test 2050
}

function testRegexpPCRE_2029() {
  var regexp = /x\sy\Sz/;
  assertEquals("x y+z", regexp.exec("x y+z").toString()); //test 2051
}

function testRegexpPCRE_2030() {
  var regexp = /x\sy\Sz/;
  assertEquals(null, regexp.exec("*** Failers")); //test 2052
}

function testRegexpPCRE_2031() {
  var regexp = /x\sy\Sz/;
  assertEquals(null, regexp.exec("xyz")); //test 2053
}

function testRegexpPCRE_2032() {
  var regexp = /x\sy\Sz/;
  assertEquals(null, regexp.exec("xxyyz")); //test 2054
}

function testRegexpPCRE_2033() {
  var regexp = /x\wy\Wz/;
  assertEquals("xxy+z", regexp.exec("xxy+z").toString()); //test 2055
}

function testRegexpPCRE_2034() {
  var regexp = /x\wy\Wz/;
  assertEquals(null, regexp.exec("*** Failers")); //test 2056
}

function testRegexpPCRE_2035() {
  var regexp = /x\wy\Wz/;
  assertEquals(null, regexp.exec("xxy0z")); //test 2057
}

function testRegexpPCRE_2036() {
  var regexp = /x\wy\Wz/;
  assertEquals(null, regexp.exec("x+y+z         ")); //test 2058
}

function testRegexpPCRE_2037() {
  var regexp = /x.y/;
  assertEquals("x+y", regexp.exec("x+y").toString()); //test 2059
}

function testRegexpPCRE_2038() {
  var regexp = /x.y/;
  assertEquals("x-y", regexp.exec("x-y").toString()); //test 2060
}

function testRegexpPCRE_2039() {
  var regexp = /x.y/;
  assertEquals(null, regexp.exec("*** Failers")); //test 2061
}

function testRegexpPCRE_2040() {
  var regexp = /x.y/;
  assertEquals(null, regexp.exec("x\ny")); //test 2062
}

function testRegexpPCRE_2041() {
  var regexp = /x.y/;
  assertEquals("x+y", regexp.exec("x+y").toString()); //test 2063
}

function testRegexpPCRE_2042() {
  var regexp = /x.y/;
  assertEquals("x-y", regexp.exec("x-y").toString()); //test 2064
}

function testRegexpPCRE_2043() {
  var regexp = /x.y/;
  assertEquals(null, regexp.exec("x\ny")); //test 2065
}

function testRegexpPCRE_2044() {
  var regexp = /x.y/;
  assertEquals(null, regexp.exec("a+bc+dp+q")); //test 2066
}

function testRegexpPCRE_2045() {
  var regexp = /x.y/;
  assertEquals(null, regexp.exec("a+bc\ndp+q")); //test 2067
}

function testRegexpPCRE_2046() {
  var regexp = /x.y/;
  assertEquals(null, regexp.exec("x\nyp+q ")); //test 2068
}

function testRegexpPCRE_2047() {
  var regexp = /x.y/;
  assertEquals(null, regexp.exec("*** Failers ")); //test 2069
}

function testRegexpPCRE_2048() {
  var regexp = /x.y/;
  assertEquals(null, regexp.exec("a\nbc\ndp+q")); //test 2070
}

function testRegexpPCRE_2049() {
  var regexp = /x.y/;
  assertEquals(null, regexp.exec("a+bc\ndp\nq")); //test 2071
}

function testRegexpPCRE_2050() {
  var regexp = /x.y/;
  assertEquals(null, regexp.exec("x\nyp\nq ")); //test 2072
}

function testRegexpPCRE_2051() {
  var regexp = /a\d\z/;
  assertEquals(null, regexp.exec("ba0")); //test 2073
}

function testRegexpPCRE_2052() {
  var regexp = /a\d\z/;
  assertEquals(null, regexp.exec("*** Failers")); //test 2074
}

function testRegexpPCRE_2053() {
  var regexp = /a\d\z/;
  assertEquals(null, regexp.exec("ba0\n")); //test 2075
}

function testRegexpPCRE_2054() {
  var regexp = /a\d\z/;
  assertEquals(null, regexp.exec("ba0\ncd   ")); //test 2076
}

function testRegexpPCRE_2055() {
  var regexp = /a\d\z/m;
  assertEquals(null, regexp.exec("ba0")); //test 2077
}

function testRegexpPCRE_2056() {
  var regexp = /a\d\z/m;
  assertEquals(null, regexp.exec("*** Failers")); //test 2078
}

function testRegexpPCRE_2057() {
  var regexp = /a\d\z/m;
  assertEquals(null, regexp.exec("ba0\n")); //test 2079
}

function testRegexpPCRE_2058() {
  var regexp = /a\d\z/m;
  assertEquals(null, regexp.exec("ba0\ncd   ")); //test 2080
}

function testRegexpPCRE_2059() {
  var regexp = /a\d\Z/;
  assertEquals(null, regexp.exec("ba0")); //test 2081
}

function testRegexpPCRE_2060() {
  var regexp = /a\d\Z/;
  assertEquals(null, regexp.exec("ba0\n")); //test 2082
}

function testRegexpPCRE_2061() {
  var regexp = /a\d\Z/;
  assertEquals(null, regexp.exec("*** Failers")); //test 2083
}

function testRegexpPCRE_2062() {
  var regexp = /a\d\Z/;
  assertEquals(null, regexp.exec("ba0\ncd   ")); //test 2084
}

function testRegexpPCRE_2063() {
  var regexp = /a\d\Z/m;
  assertEquals(null, regexp.exec("ba0")); //test 2085
}

function testRegexpPCRE_2064() {
  var regexp = /a\d\Z/m;
  assertEquals(null, regexp.exec("ba0\n")); //test 2086
}

function testRegexpPCRE_2065() {
  var regexp = /a\d\Z/m;
  assertEquals(null, regexp.exec("*** Failers")); //test 2087
}

function testRegexpPCRE_2066() {
  var regexp = /a\d\Z/m;
  assertEquals(null, regexp.exec("ba0\ncd   ")); //test 2088
}

function testRegexpPCRE_2067() {
  var regexp = /a\d$/;
  assertEquals("a0", regexp.exec("ba0").toString()); //test 2089
}

function testRegexpPCRE_2068() {
  var regexp = /a\d$/;
  assertEquals(null, regexp.exec("ba0\n")); //test 2090
}

function testRegexpPCRE_2069() {
  var regexp = /a\d$/;
  assertEquals(null, regexp.exec("*** Failers")); //test 2091
}

function testRegexpPCRE_2070() {
  var regexp = /a\d$/;
  assertEquals(null, regexp.exec("ba0\ncd   ")); //test 2092
}

function testRegexpPCRE_2071() {
  var regexp = /a\d$/m;
  assertEquals("a0", regexp.exec("ba0").toString()); //test 2093
}

function testRegexpPCRE_2072() {
  var regexp = /a\d$/m;
  assertEquals("a0", regexp.exec("ba0\n").toString()); //test 2094
}

function testRegexpPCRE_2073() {
  var regexp = /a\d$/m;
  assertEquals("a0", regexp.exec("ba0\ncd   ").toString()); //test 2095
}

function testRegexpPCRE_2074() {
  var regexp = /a\d$/m;
  assertEquals(null, regexp.exec("*** Failers")); //test 2096
}

function testRegexpPCRE_2075() {
  var regexp = /abc/i;
  assertEquals("abc", regexp.exec("abc").toString()); //test 2097
}

function testRegexpPCRE_2076() {
  var regexp = /abc/i;
  assertEquals("aBc", regexp.exec("aBc").toString()); //test 2098
}

function testRegexpPCRE_2077() {
  var regexp = /abc/i;
  assertEquals("ABC", regexp.exec("ABC").toString()); //test 2099
}

function testRegexpPCRE_2078() {
  var regexp = /[^a]/;
  assertEquals("b", regexp.exec("abcd").toString()); //test 2100
}

function testRegexpPCRE_2079() {
  var regexp = /ab?\w/;
  assertEquals("abz", regexp.exec("abz").toString()); //test 2101
}

function testRegexpPCRE_2080() {
  var regexp = /ab?\w/;
  assertEquals("abb", regexp.exec("abbz").toString()); //test 2102
}

function testRegexpPCRE_2081() {
  var regexp = /ab?\w/;
  assertEquals("az", regexp.exec("azz  ").toString()); //test 2103
}

function testRegexpPCRE_2082() {
  var regexp = /x{0,3}yz/;
  assertEquals("yz", regexp.exec("ayzq").toString()); //test 2104
}

function testRegexpPCRE_2083() {
  var regexp = /x{0,3}yz/;
  assertEquals("xyz", regexp.exec("axyzq").toString()); //test 2105
}

function testRegexpPCRE_2084() {
  var regexp = /x{0,3}yz/;
  assertEquals("xxyz", regexp.exec("axxyz").toString()); //test 2106
}

function testRegexpPCRE_2085() {
  var regexp = /x{0,3}yz/;
  assertEquals("xxxyz", regexp.exec("axxxyzq").toString()); //test 2107
}

function testRegexpPCRE_2086() {
  var regexp = /x{0,3}yz/;
  assertEquals("xxxyz", regexp.exec("axxxxyzq").toString()); //test 2108
}

function testRegexpPCRE_2087() {
  var regexp = /x{0,3}yz/;
  assertEquals(null, regexp.exec("*** Failers")); //test 2109
}

function testRegexpPCRE_2088() {
  var regexp = /x{0,3}yz/;
  assertEquals(null, regexp.exec("ax")); //test 2110
}

function testRegexpPCRE_2089() {
  var regexp = /x{0,3}yz/;
  assertEquals(null, regexp.exec("axx     ")); //test 2111
}

function testRegexpPCRE_2090() {
  var regexp = /x{0,3}yz/;
  assertEquals(null, regexp.exec("  ")); //test 2112
}

function testRegexpPCRE_2091() {
  var regexp = /x{3}yz/;
  assertEquals("xxxyz", regexp.exec("axxxyzq").toString()); //test 2113
}

function testRegexpPCRE_2092() {
  var regexp = /x{3}yz/;
  assertEquals("xxxyz", regexp.exec("axxxxyzq").toString()); //test 2114
}

function testRegexpPCRE_2093() {
  var regexp = /x{3}yz/;
  assertEquals(null, regexp.exec("*** Failers")); //test 2115
}

function testRegexpPCRE_2094() {
  var regexp = /x{3}yz/;
  assertEquals(null, regexp.exec("ax")); //test 2116
}

function testRegexpPCRE_2095() {
  var regexp = /x{3}yz/;
  assertEquals(null, regexp.exec("axx     ")); //test 2117
}

function testRegexpPCRE_2096() {
  var regexp = /x{3}yz/;
  assertEquals(null, regexp.exec("ayzq")); //test 2118
}

function testRegexpPCRE_2097() {
  var regexp = /x{3}yz/;
  assertEquals(null, regexp.exec("axyzq")); //test 2119
}

function testRegexpPCRE_2098() {
  var regexp = /x{3}yz/;
  assertEquals(null, regexp.exec("axxyz")); //test 2120
}

function testRegexpPCRE_2099() {
  var regexp = /x{3}yz/;
  assertEquals(null, regexp.exec("  ")); //test 2121
}

function testRegexpPCRE_2100() {
  var regexp = /x{2,3}yz/;
  assertEquals("xxyz", regexp.exec("axxyz").toString()); //test 2122
}

function testRegexpPCRE_2101() {
  var regexp = /x{2,3}yz/;
  assertEquals("xxxyz", regexp.exec("axxxyzq").toString()); //test 2123
}

function testRegexpPCRE_2102() {
  var regexp = /x{2,3}yz/;
  assertEquals("xxxyz", regexp.exec("axxxxyzq").toString()); //test 2124
}

function testRegexpPCRE_2103() {
  var regexp = /x{2,3}yz/;
  assertEquals(null, regexp.exec("*** Failers")); //test 2125
}

function testRegexpPCRE_2104() {
  var regexp = /x{2,3}yz/;
  assertEquals(null, regexp.exec("ax")); //test 2126
}

function testRegexpPCRE_2105() {
  var regexp = /x{2,3}yz/;
  assertEquals(null, regexp.exec("axx     ")); //test 2127
}

function testRegexpPCRE_2106() {
  var regexp = /x{2,3}yz/;
  assertEquals(null, regexp.exec("ayzq")); //test 2128
}

function testRegexpPCRE_2107() {
  var regexp = /x{2,3}yz/;
  assertEquals(null, regexp.exec("axyzq")); //test 2129
}

function testRegexpPCRE_2108() {
  var regexp = /x{2,3}yz/;
  assertEquals(null, regexp.exec("  ")); //test 2130
}

function testRegexpPCRE_2109() {
  var regexp = /[^a]+/;
  assertEquals("b", regexp.exec("bac").toString()); //test 2131
}

function testRegexpPCRE_2110() {
  var regexp = /[^a]+/;
  assertEquals("bcdef", regexp.exec("bcdefax").toString()); //test 2132
}

function testRegexpPCRE_2111() {
  var regexp = /[^a]+/;
  assertEquals("*** F", regexp.exec("*** Failers").toString()); //test 2133
}

function testRegexpPCRE_2112() {
  var regexp = /[^a]+/;
  assertEquals("   ", regexp.exec("aaaaa   ").toString()); //test 2134
}

function testRegexpPCRE_2113() {
  var regexp = /[^a]*/;
  assertEquals("b", regexp.exec("bac").toString()); //test 2135
}

function testRegexpPCRE_2114() {
  var regexp = /[^a]*/;
  assertEquals("bcdef", regexp.exec("bcdefax").toString()); //test 2136
}

function testRegexpPCRE_2115() {
  var regexp = /[^a]*/;
  assertEquals("*** F", regexp.exec("*** Failers").toString()); //test 2137
}

function testRegexpPCRE_2116() {
  var regexp = /[^a]*/;
  assertEquals("", regexp.exec("aaaaa   ").toString()); //test 2138
}

function testRegexpPCRE_2117() {
  var regexp = /[^a]{3,5}/;
  assertEquals("xyz", regexp.exec("xyz").toString()); //test 2139
}

function testRegexpPCRE_2118() {
  var regexp = /[^a]{3,5}/;
  assertEquals("wxyz", regexp.exec("awxyza").toString()); //test 2140
}

function testRegexpPCRE_2119() {
  var regexp = /[^a]{3,5}/;
  assertEquals("bcdef", regexp.exec("abcdefa").toString()); //test 2141
}

function testRegexpPCRE_2120() {
  var regexp = /[^a]{3,5}/;
  assertEquals("bcdef", regexp.exec("abcdefghijk").toString()); //test 2142
}

function testRegexpPCRE_2121() {
  var regexp = /[^a]{3,5}/;
  assertEquals("*** F", regexp.exec("*** Failers").toString()); //test 2143
}

function testRegexpPCRE_2122() {
  var regexp = /[^a]{3,5}/;
  assertEquals(null, regexp.exec("axya")); //test 2144
}

function testRegexpPCRE_2123() {
  var regexp = /[^a]{3,5}/;
  assertEquals(null, regexp.exec("axa")); //test 2145
}

function testRegexpPCRE_2124() {
  var regexp = /[^a]{3,5}/;
  assertEquals("     ", regexp.exec("aaaaa         ").toString()); //test 2146
}

function testRegexpPCRE_2125() {
  var regexp = /\d*/;
  assertEquals("1234", regexp.exec("1234b567").toString()); //test 2147
}

function testRegexpPCRE_2126() {
  var regexp = /\d*/;
  assertEquals("", regexp.exec("xyz").toString()); //test 2148
}

function testRegexpPCRE_2127() {
  var regexp = /\D*/;
  assertEquals("a", regexp.exec("a1234b567").toString()); //test 2149
}

function testRegexpPCRE_2128() {
  var regexp = /\D*/;
  assertEquals("xyz", regexp.exec("xyz").toString()); //test 2150
}

function testRegexpPCRE_2129() {
  var regexp = /\D*/;
  assertEquals(" ", regexp.exec(" ").toString()); //test 2151
}

function testRegexpPCRE_2130() {
  var regexp = /\d+/;
  assertEquals("1234", regexp.exec("ab1234c56").toString()); //test 2152
}

function testRegexpPCRE_2131() {
  var regexp = /\d+/;
  assertEquals(null, regexp.exec("*** Failers")); //test 2153
}

function testRegexpPCRE_2132() {
  var regexp = /\d+/;
  assertEquals(null, regexp.exec("xyz")); //test 2154
}

function testRegexpPCRE_2133() {
  var regexp = /\D+/;
  assertEquals("ab", regexp.exec("ab123c56").toString()); //test 2155
}

function testRegexpPCRE_2134() {
  var regexp = /\D+/;
  assertEquals("*** Failers", regexp.exec("*** Failers").toString()); //test 2156
}

function testRegexpPCRE_2135() {
  var regexp = /\D+/;
  assertEquals(null, regexp.exec("789")); //test 2157
}

function testRegexpPCRE_2136() {
  var regexp = /\d?A/;
  assertEquals("5A", regexp.exec("045ABC").toString()); //test 2158
}

function testRegexpPCRE_2137() {
  var regexp = /\d?A/;
  assertEquals("A", regexp.exec("ABC").toString()); //test 2159
}

function testRegexpPCRE_2138() {
  var regexp = /\d?A/;
  assertEquals(null, regexp.exec("*** Failers")); //test 2160
}

function testRegexpPCRE_2139() {
  var regexp = /\d?A/;
  assertEquals(null, regexp.exec("XYZ")); //test 2161
}

function testRegexpPCRE_2140() {
  var regexp = /\D?A/;
  assertEquals("A", regexp.exec("ABC").toString()); //test 2162
}

function testRegexpPCRE_2141() {
  var regexp = /\D?A/;
  assertEquals("BA", regexp.exec("BAC").toString()); //test 2163
}

function testRegexpPCRE_2142() {
  var regexp = /\D?A/;
  assertEquals("A", regexp.exec("9ABC             ").toString()); //test 2164
}

function testRegexpPCRE_2143() {
  var regexp = /\D?A/;
  assertEquals(null, regexp.exec("*** Failers")); //test 2165
}

function testRegexpPCRE_2144() {
  var regexp = /a+/;
  assertEquals("aaaa", regexp.exec("aaaa").toString()); //test 2166
}

function testRegexpPCRE_2145() {
  var regexp = /^.*xyz/;
  assertEquals("xyz", regexp.exec("xyz").toString()); //test 2167
}

function testRegexpPCRE_2146() {
  var regexp = /^.*xyz/;
  assertEquals("ggggggggxyz", regexp.exec("ggggggggxyz").toString()); //test 2168
}

function testRegexpPCRE_2147() {
  var regexp = /^.+xyz/;
  assertEquals("abcdxyz", regexp.exec("abcdxyz").toString()); //test 2169
}

function testRegexpPCRE_2148() {
  var regexp = /^.+xyz/;
  assertEquals("axyz", regexp.exec("axyz").toString()); //test 2170
}

function testRegexpPCRE_2149() {
  var regexp = /^.+xyz/;
  assertEquals(null, regexp.exec("*** Failers")); //test 2171
}

function testRegexpPCRE_2150() {
  var regexp = /^.+xyz/;
  assertEquals(null, regexp.exec("xyz")); //test 2172
}

function testRegexpPCRE_2151() {
  var regexp = /^.?xyz/;
  assertEquals("xyz", regexp.exec("xyz").toString()); //test 2173
}

function testRegexpPCRE_2152() {
  var regexp = /^.?xyz/;
  assertEquals("cxyz", regexp.exec("cxyz       ").toString()); //test 2174
}

function testRegexpPCRE_2153() {
  var regexp = /^\d{2,3}X/;
  assertEquals("12X", regexp.exec("12X").toString()); //test 2175
}

function testRegexpPCRE_2154() {
  var regexp = /^\d{2,3}X/;
  assertEquals("123X", regexp.exec("123X").toString()); //test 2176
}

function testRegexpPCRE_2155() {
  var regexp = /^\d{2,3}X/;
  assertEquals(null, regexp.exec("*** Failers")); //test 2177
}

function testRegexpPCRE_2156() {
  var regexp = /^\d{2,3}X/;
  assertEquals(null, regexp.exec("X")); //test 2178
}

function testRegexpPCRE_2157() {
  var regexp = /^\d{2,3}X/;
  assertEquals(null, regexp.exec("1X")); //test 2179
}

function testRegexpPCRE_2158() {
  var regexp = /^\d{2,3}X/;
  assertEquals(null, regexp.exec("1234X     ")); //test 2180
}

function testRegexpPCRE_2159() {
  var regexp = /^[abcd]\d/;
  assertEquals("a4", regexp.exec("a45").toString()); //test 2181
}

function testRegexpPCRE_2160() {
  var regexp = /^[abcd]\d/;
  assertEquals("b9", regexp.exec("b93").toString()); //test 2182
}

function testRegexpPCRE_2161() {
  var regexp = /^[abcd]\d/;
  assertEquals("c9", regexp.exec("c99z").toString()); //test 2183
}

function testRegexpPCRE_2162() {
  var regexp = /^[abcd]\d/;
  assertEquals("d0", regexp.exec("d04").toString()); //test 2184
}

function testRegexpPCRE_2163() {
  var regexp = /^[abcd]\d/;
  assertEquals(null, regexp.exec("*** Failers")); //test 2185
}

function testRegexpPCRE_2164() {
  var regexp = /^[abcd]\d/;
  assertEquals(null, regexp.exec("e45")); //test 2186
}

function testRegexpPCRE_2165() {
  var regexp = /^[abcd]\d/;
  assertEquals(null, regexp.exec("abcd      ")); //test 2187
}

function testRegexpPCRE_2166() {
  var regexp = /^[abcd]\d/;
  assertEquals(null, regexp.exec("abcd1234")); //test 2188
}

function testRegexpPCRE_2167() {
  var regexp = /^[abcd]\d/;
  assertEquals(null, regexp.exec("1234  ")); //test 2189
}

function testRegexpPCRE_2168() {
  var regexp = /^[abcd]*\d/;
  assertEquals("a4", regexp.exec("a45").toString()); //test 2190
}

function testRegexpPCRE_2169() {
  var regexp = /^[abcd]*\d/;
  assertEquals("b9", regexp.exec("b93").toString()); //test 2191
}

function testRegexpPCRE_2170() {
  var regexp = /^[abcd]*\d/;
  assertEquals("c9", regexp.exec("c99z").toString()); //test 2192
}

function testRegexpPCRE_2171() {
  var regexp = /^[abcd]*\d/;
  assertEquals("d0", regexp.exec("d04").toString()); //test 2193
}

function testRegexpPCRE_2172() {
  var regexp = /^[abcd]*\d/;
  assertEquals("abcd1", regexp.exec("abcd1234").toString()); //test 2194
}

function testRegexpPCRE_2173() {
  var regexp = /^[abcd]*\d/;
  assertEquals("1", regexp.exec("1234  ").toString()); //test 2195
}

function testRegexpPCRE_2174() {
  var regexp = /^[abcd]*\d/;
  assertEquals(null, regexp.exec("*** Failers")); //test 2196
}

function testRegexpPCRE_2175() {
  var regexp = /^[abcd]*\d/;
  assertEquals(null, regexp.exec("e45")); //test 2197
}

function testRegexpPCRE_2176() {
  var regexp = /^[abcd]*\d/;
  assertEquals(null, regexp.exec("abcd      ")); //test 2198
}

function testRegexpPCRE_2177() {
  var regexp = /^[abcd]+\d/;
  assertEquals("a4", regexp.exec("a45").toString()); //test 2199
}

function testRegexpPCRE_2178() {
  var regexp = /^[abcd]+\d/;
  assertEquals("b9", regexp.exec("b93").toString()); //test 2200
}

function testRegexpPCRE_2179() {
  var regexp = /^[abcd]+\d/;
  assertEquals("c9", regexp.exec("c99z").toString()); //test 2201
}

function testRegexpPCRE_2180() {
  var regexp = /^[abcd]+\d/;
  assertEquals("d0", regexp.exec("d04").toString()); //test 2202
}

function testRegexpPCRE_2181() {
  var regexp = /^[abcd]+\d/;
  assertEquals("abcd1", regexp.exec("abcd1234").toString()); //test 2203
}

function testRegexpPCRE_2182() {
  var regexp = /^[abcd]+\d/;
  assertEquals(null, regexp.exec("*** Failers")); //test 2204
}

function testRegexpPCRE_2183() {
  var regexp = /^[abcd]+\d/;
  assertEquals(null, regexp.exec("1234  ")); //test 2205
}

function testRegexpPCRE_2184() {
  var regexp = /^[abcd]+\d/;
  assertEquals(null, regexp.exec("e45")); //test 2206
}

function testRegexpPCRE_2185() {
  var regexp = /^[abcd]+\d/;
  assertEquals(null, regexp.exec("abcd      ")); //test 2207
}

function testRegexpPCRE_2186() {
  var regexp = /^a+X/;
  assertEquals("aX", regexp.exec("aX").toString()); //test 2208
}

function testRegexpPCRE_2187() {
  var regexp = /^a+X/;
  assertEquals("aaX", regexp.exec("aaX ").toString()); //test 2209
}

function testRegexpPCRE_2188() {
  var regexp = /^[abcd]?\d/;
  assertEquals("a4", regexp.exec("a45").toString()); //test 2210
}

function testRegexpPCRE_2189() {
  var regexp = /^[abcd]?\d/;
  assertEquals("b9", regexp.exec("b93").toString()); //test 2211
}

function testRegexpPCRE_2190() {
  var regexp = /^[abcd]?\d/;
  assertEquals("c9", regexp.exec("c99z").toString()); //test 2212
}

function testRegexpPCRE_2191() {
  var regexp = /^[abcd]?\d/;
  assertEquals("d0", regexp.exec("d04").toString()); //test 2213
}

function testRegexpPCRE_2192() {
  var regexp = /^[abcd]?\d/;
  assertEquals("1", regexp.exec("1234  ").toString()); //test 2214
}

function testRegexpPCRE_2193() {
  var regexp = /^[abcd]?\d/;
  assertEquals(null, regexp.exec("*** Failers")); //test 2215
}

function testRegexpPCRE_2194() {
  var regexp = /^[abcd]?\d/;
  assertEquals(null, regexp.exec("abcd1234")); //test 2216
}

function testRegexpPCRE_2195() {
  var regexp = /^[abcd]?\d/;
  assertEquals(null, regexp.exec("e45")); //test 2217
}

function testRegexpPCRE_2196() {
  var regexp = /^[abcd]{2,3}\d/;
  assertEquals("ab4", regexp.exec("ab45").toString()); //test 2218
}

function testRegexpPCRE_2197() {
  var regexp = /^[abcd]{2,3}\d/;
  assertEquals("bcd9", regexp.exec("bcd93").toString()); //test 2219
}

function testRegexpPCRE_2198() {
  var regexp = /^[abcd]{2,3}\d/;
  assertEquals(null, regexp.exec("*** Failers")); //test 2220
}

function testRegexpPCRE_2199() {
  var regexp = /^[abcd]{2,3}\d/;
  assertEquals(null, regexp.exec("1234 ")); //test 2221
}

function testRegexpPCRE_2200() {
  var regexp = /^[abcd]{2,3}\d/;
  assertEquals(null, regexp.exec("a36 ")); //test 2222
}

function testRegexpPCRE_2201() {
  var regexp = /^[abcd]{2,3}\d/;
  assertEquals(null, regexp.exec("abcd1234")); //test 2223
}

function testRegexpPCRE_2202() {
  var regexp = /^[abcd]{2,3}\d/;
  assertEquals(null, regexp.exec("ee45")); //test 2224
}

function testRegexpPCRE_2203() {
  var regexp = /^(abc)*\d/;
  assertEquals("abc4,abc", regexp.exec("abc45").toString()); //test 2225
}

function testRegexpPCRE_2204() {
  var regexp = /^(abc)*\d/;
  assertEquals("abcabcabc4,abc", regexp.exec("abcabcabc45").toString()); //test 2226
}

function testRegexpPCRE_2205() {
  var regexp = /^(abc)*\d/;
  assertEquals("4,", regexp.exec("42xyz ").toString()); //test 2227
}

function testRegexpPCRE_2206() {
  var regexp = /^(abc)*\d/;
  assertEquals(null, regexp.exec("*** Failers")); //test 2228
}

function testRegexpPCRE_2207() {
  var regexp = /^(abc)+\d/;
  assertEquals("abc4,abc", regexp.exec("abc45").toString()); //test 2229
}

function testRegexpPCRE_2208() {
  var regexp = /^(abc)+\d/;
  assertEquals("abcabcabc4,abc", regexp.exec("abcabcabc45").toString()); //test 2230
}

function testRegexpPCRE_2209() {
  var regexp = /^(abc)+\d/;
  assertEquals(null, regexp.exec("*** Failers")); //test 2231
}

function testRegexpPCRE_2210() {
  var regexp = /^(abc)+\d/;
  assertEquals(null, regexp.exec("42xyz ")); //test 2232
}

function testRegexpPCRE_2211() {
  var regexp = /^(abc)?\d/;
  assertEquals("abc4,abc", regexp.exec("abc45").toString()); //test 2233
}

function testRegexpPCRE_2212() {
  var regexp = /^(abc)?\d/;
  assertEquals("4,", regexp.exec("42xyz ").toString()); //test 2234
}

function testRegexpPCRE_2213() {
  var regexp = /^(abc)?\d/;
  assertEquals(null, regexp.exec("*** Failers")); //test 2235
}

function testRegexpPCRE_2214() {
  var regexp = /^(abc)?\d/;
  assertEquals(null, regexp.exec("abcabcabc45")); //test 2236
}

function testRegexpPCRE_2215() {
  var regexp = /^(abc){2,3}\d/;
  assertEquals("abcabc4,abc", regexp.exec("abcabc45").toString()); //test 2237
}

function testRegexpPCRE_2216() {
  var regexp = /^(abc){2,3}\d/;
  assertEquals("abcabcabc4,abc", regexp.exec("abcabcabc45").toString()); //test 2238
}

function testRegexpPCRE_2217() {
  var regexp = /^(abc){2,3}\d/;
  assertEquals(null, regexp.exec("*** Failers")); //test 2239
}

function testRegexpPCRE_2218() {
  var regexp = /^(abc){2,3}\d/;
  assertEquals(null, regexp.exec("abcabcabcabc45")); //test 2240
}

function testRegexpPCRE_2219() {
  var regexp = /^(abc){2,3}\d/;
  assertEquals(null, regexp.exec("abc45")); //test 2241
}

function testRegexpPCRE_2220() {
  var regexp = /^(abc){2,3}\d/;
  assertEquals(null, regexp.exec("42xyz ")); //test 2242
}

function testRegexpPCRE_2221() {
  var regexp = /^(abc){2,3}\d/;
  assertEquals(null, regexp.exec("1abc2abc3456")); //test 2243
}

function testRegexpPCRE_2222() {
  var regexp = /^(abc){2,3}\d/;
  assertEquals(null, regexp.exec("1abc2xyz3456 ")); //test 2244
}

function testRegexpPCRE_2223() {
  var regexp = /^(a*\w|ab)=(a*\w|ab)/;
  assertEquals("ab=ab,ab,ab", regexp.exec("ab=ab").toString()); //test 2245
}

function testRegexpPCRE_2224() {
  var regexp = /^(a*\w|ab)=(a*\w|ab)/;
  assertEquals("ab=ab,ab,ab", regexp.exec("ab=ab").toString()); //test 2246
}

function testRegexpPCRE_2225() {
  var regexp = /^(a*\w|ab)=(a*\w|ab)/;
  assertEquals(null, regexp.exec("abc")); //test 2247
}

function testRegexpPCRE_2226() {
  var regexp = /^(a*\w|ab)=(a*\w|ab)/;
  assertEquals(null, regexp.exec("a(b)c")); //test 2248
}

function testRegexpPCRE_2227() {
  var regexp = /^(a*\w|ab)=(a*\w|ab)/;
  assertEquals(null, regexp.exec("a(b(c))d  ")); //test 2249
}

function testRegexpPCRE_2228() {
  var regexp = /^(a*\w|ab)=(a*\w|ab)/;
  assertEquals(null, regexp.exec("*** Failers)")); //test 2250
}

function testRegexpPCRE_2229() {
  var regexp = /^(a*\w|ab)=(a*\w|ab)/;
  assertEquals(null, regexp.exec("a(b(c)d  ")); //test 2251
}

function testRegexpPCRE_2230() {
  var regexp = /^(a*\w|ab)=(a*\w|ab)/;
  assertEquals(null, regexp.exec(">abc>123<xyz<")); //test 2252
}

function testRegexpPCRE_2231() {
  var regexp = /^(a*\w|ab)=(a*\w|ab)/;
  assertEquals(null, regexp.exec(">abc>1(2)3<xyz<")); //test 2253
}

function testRegexpPCRE_2232() {
  var regexp = /^(a*\w|ab)=(a*\w|ab)/;
  assertEquals(null, regexp.exec(">abc>(1(2)3)<xyz<")); //test 2254
}

function testRegexpPCRE_2233() {
  var regexp = /^(a*\w|ab)=(a*\w|ab)/;
  assertEquals(null, regexp.exec("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa9876")); //test 2255
}

function testRegexpPCRE_2234() {
  var regexp = /^(a*\w|ab)=(a*\w|ab)/;
  assertEquals(null, regexp.exec("*** Failers ")); //test 2256
}

function testRegexpPCRE_2235() {
  var regexp = /^(a*\w|ab)=(a*\w|ab)/;
  assertEquals(null, regexp.exec("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")); //test 2257
}

function testRegexpPCRE_2236() {
  var regexp = /^(a*\w|ab)=(a*\w|ab)/;
  assertEquals(null, regexp.exec("<>")); //test 2258
}

function testRegexpPCRE_2237() {
  var regexp = /^(a*\w|ab)=(a*\w|ab)/;
  assertEquals(null, regexp.exec("<abcd>")); //test 2259
}

function testRegexpPCRE_2238() {
  var regexp = /^(a*\w|ab)=(a*\w|ab)/;
  assertEquals(null, regexp.exec("<abc <123> hij>")); //test 2260
}

function testRegexpPCRE_2239() {
  var regexp = /^(a*\w|ab)=(a*\w|ab)/;
  assertEquals(null, regexp.exec("<abc <def> hij>")); //test 2261
}

function testRegexpPCRE_2240() {
  var regexp = /^(a*\w|ab)=(a*\w|ab)/;
  assertEquals(null, regexp.exec("<abc<>def> ")); //test 2262
}

function testRegexpPCRE_2241() {
  var regexp = /^(a*\w|ab)=(a*\w|ab)/;
  assertEquals(null, regexp.exec("<abc<>      ")); //test 2263
}

function testRegexpPCRE_2242() {
  var regexp = /^(a*\w|ab)=(a*\w|ab)/;
  assertEquals(null, regexp.exec("*** Failers")); //test 2264
}

function testRegexpPCRE_2243() {
  var regexp = /^(a*\w|ab)=(a*\w|ab)/;
  assertEquals(null, regexp.exec("<abc")); //test 2265
}

function testRegexpPCRE_2244() {
  var regexp = /^(a*\w|ab)=(a*\w|ab)/;
  assertEquals(null, regexp.exec("abc:                          ")); //test 2266
}

function testRegexpPCRE_2245() {
  var regexp = /^(a*\w|ab)=(a*\w|ab)/;
  assertEquals(null, regexp.exec("12                             ")); //test 2267
}

function testRegexpPCRE_2246() {
  var regexp = /^(a*\w|ab)=(a*\w|ab)/;
  assertEquals(null, regexp.exec("*** Failers                     ")); //test 2268
}

function testRegexpPCRE_2247() {
  var regexp = /^(a*\w|ab)=(a*\w|ab)/;
  assertEquals(null, regexp.exec("123                       ")); //test 2269
}

function testRegexpPCRE_2248() {
  var regexp = /^(a*\w|ab)=(a*\w|ab)/;
  assertEquals(null, regexp.exec("xyz                        ")); //test 2270
}

function testRegexpPCRE_2249() {
  var regexp = /^(a*\w|ab)=(a*\w|ab)/;
  assertEquals(null, regexp.exec("                            ")); //test 2271
}

function testRegexpPCRE_2250() {
  var regexp = /^(a*\w|ab)=(a*\w|ab)/;
  assertEquals(null, regexp.exec("abc:                        ")); //test 2272
}

function testRegexpPCRE_2251() {
  var regexp = /^(a*\w|ab)=(a*\w|ab)/;
  assertEquals(null, regexp.exec("12         ")); //test 2273
}

function testRegexpPCRE_2252() {
  var regexp = /^(a*\w|ab)=(a*\w|ab)/;
  assertEquals(null, regexp.exec("*** Failers")); //test 2274
}

function testRegexpPCRE_2253() {
  var regexp = /^(a*\w|ab)=(a*\w|ab)/;
  assertEquals(null, regexp.exec("123")); //test 2275
}

function testRegexpPCRE_2254() {
  var regexp = /^(a*\w|ab)=(a*\w|ab)/;
  assertEquals(null, regexp.exec("xyz    ")); //test 2276
}

function testRegexpPCRE_2255() {
  var regexp = /^(?=abc)\w{5}:$/;
  assertEquals(null, regexp.exec("abcde:                          ")); //test 2277
}

function testRegexpPCRE_2256() {
  var regexp = /^(?=abc)\w{5}:$/;
  assertEquals(null, regexp.exec("*** Failers                     ")); //test 2278
}

function testRegexpPCRE_2257() {
  var regexp = /^(?=abc)\w{5}:$/;
  assertEquals(null, regexp.exec("abc.. ")); //test 2279
}

function testRegexpPCRE_2258() {
  var regexp = /^(?=abc)\w{5}:$/;
  assertEquals(null, regexp.exec("123                       ")); //test 2280
}

function testRegexpPCRE_2259() {
  var regexp = /^(?=abc)\w{5}:$/;
  assertEquals(null, regexp.exec("vwxyz                        ")); //test 2281
}

function testRegexpPCRE_2260() {
  var regexp = /^(?=abc)\w{5}:$/;
  assertEquals(null, regexp.exec("                            ")); //test 2282
}

function testRegexpPCRE_2261() {
  var regexp = /^(?!abc)\d\d$/;
  assertEquals(null, regexp.exec("12         ")); //test 2283
}

function testRegexpPCRE_2262() {
  var regexp = /^(?!abc)\d\d$/;
  assertEquals(null, regexp.exec("*** Failers")); //test 2284
}

function testRegexpPCRE_2263() {
  var regexp = /^(?!abc)\d\d$/;
  assertEquals(null, regexp.exec("abcde:")); //test 2285
}

function testRegexpPCRE_2264() {
  var regexp = /^(?!abc)\d\d$/;
  assertEquals(null, regexp.exec("abc..  ")); //test 2286
}

function testRegexpPCRE_2265() {
  var regexp = /^(?!abc)\d\d$/;
  assertEquals(null, regexp.exec("123")); //test 2287
}

function testRegexpPCRE_2266() {
  var regexp = /^(?!abc)\d\d$/;
  assertEquals(null, regexp.exec("vwxyz    ")); //test 2288
}

function testRegexpPCRE_2267() {
  var regexp = /^(?!abc)\d\d$/;
  assertEquals(null, regexp.exec("abc12345")); //test 2289
}

function testRegexpPCRE_2268() {
  var regexp = /^(?!abc)\d\d$/;
  assertEquals(null, regexp.exec("wxy123z")); //test 2290
}

function testRegexpPCRE_2269() {
  var regexp = /^(?!abc)\d\d$/;
  assertEquals(null, regexp.exec("*** Failers")); //test 2291
}

function testRegexpPCRE_2270() {
  var regexp = /^(?!abc)\d\d$/;
  assertEquals(null, regexp.exec("123abc")); //test 2292
}

function testRegexpPCRE_2271() {
  var regexp = /^(?!abc)\d\d$/;
  assertEquals(null, regexp.exec("123abc")); //test 2293
}

function testRegexpPCRE_2272() {
  var regexp = /^(?!abc)\d\d$/;
  assertEquals(null, regexp.exec("mno123456 ")); //test 2294
}

function testRegexpPCRE_2273() {
  var regexp = /^(?!abc)\d\d$/;
  assertEquals(null, regexp.exec("*** Failers")); //test 2295
}

function testRegexpPCRE_2274() {
  var regexp = /^(?!abc)\d\d$/;
  assertEquals(null, regexp.exec("abc12345")); //test 2296
}

function testRegexpPCRE_2275() {
  var regexp = /^(?!abc)\d\d$/;
  assertEquals(null, regexp.exec("wxy123z")); //test 2297
}

function testRegexpPCRE_2276() {
  var regexp = /^(?!abc)\d\d$/;
  assertEquals(null, regexp.exec("abcxyz")); //test 2298
}

function testRegexpPCRE_2277() {
  var regexp = /^(?!abc)\d\d$/;
  assertEquals(null, regexp.exec("123abcxyz999 ")); //test 2299
}

function testRegexpPCRE_2278() {
  var regexp = /^abc/;
  assertEquals("abc", regexp.exec("abcdef").toString()); //test 2300
}

function testRegexpPCRE_2279() {
  var regexp = /^abc/;
  assertEquals(null, regexp.exec("*** Failers")); //test 2301
}

function testRegexpPCRE_2280() {
  var regexp = /^abc/;
  assertEquals("abc", regexp.exec("abcdefB  ").toString()); //test 2302
}

function testRegexpPCRE_2281() {
  var regexp = /^(a*|xyz)/;
  assertEquals(",", regexp.exec("bcd").toString()); //test 2303
}

function testRegexpPCRE_2282() {
  var regexp = /^(a*|xyz)/;
  assertEquals("aaa,aaa", regexp.exec("aaabcd").toString()); //test 2304
}

function testRegexpPCRE_2283() {
  var regexp = /^(a*|xyz)/;
  assertEquals(",", regexp.exec("xyz").toString()); //test 2305
}

function testRegexpPCRE_2284() {
  var regexp = /^(a*|xyz)/;
  assertEquals(",", regexp.exec("xyzN  ").toString()); //test 2306
}

function testRegexpPCRE_2285() {
  var regexp = /^(a*|xyz)/;
  assertEquals(",", regexp.exec("*** Failers").toString()); //test 2307
}

function testRegexpPCRE_2286() {
  var regexp = /^(a*|xyz)/;
  assertEquals(",", regexp.exec("bcdN   ").toString()); //test 2308
}

function testRegexpPCRE_2287() {
  var regexp = /xyz$/;
  assertEquals("xyz", regexp.exec("xyz").toString()); //test 2309
}

function testRegexpPCRE_2288() {
  var regexp = /xyz$/;
  assertEquals(null, regexp.exec("xyz\n")); //test 2310
}

function testRegexpPCRE_2289() {
  var regexp = /xyz$/;
  assertEquals(null, regexp.exec("*** Failers")); //test 2311
}

function testRegexpPCRE_2290() {
  var regexp = /xyz$/;
  assertEquals(null, regexp.exec("xyzZ")); //test 2312
}

function testRegexpPCRE_2291() {
  var regexp = /xyz$/;
  assertEquals(null, regexp.exec("xyz\nZ    ")); //test 2313
}

function testRegexpPCRE_2292() {
  var regexp = /xyz$/m;
  assertEquals("xyz", regexp.exec("xyz").toString()); //test 2314
}

function testRegexpPCRE_2293() {
  var regexp = /xyz$/m;
  assertEquals("xyz", regexp.exec("xyz\n ").toString()); //test 2315
}

function testRegexpPCRE_2294() {
  var regexp = /xyz$/m;
  assertEquals("xyz", regexp.exec("abcxyz\npqr ").toString()); //test 2316
}

function testRegexpPCRE_2295() {
  var regexp = /xyz$/m;
  assertEquals("xyz", regexp.exec("abcxyz\npqrZ ").toString()); //test 2317
}

function testRegexpPCRE_2296() {
  var regexp = /xyz$/m;
  assertEquals("xyz", regexp.exec("xyz\nZ    ").toString()); //test 2318
}

function testRegexpPCRE_2297() {
  var regexp = /xyz$/m;
  assertEquals(null, regexp.exec("*** Failers")); //test 2319
}

function testRegexpPCRE_2298() {
  var regexp = /xyz$/m;
  assertEquals(null, regexp.exec("xyzZ")); //test 2320
}

function testRegexpPCRE_2299() {
  var regexp = /\Gabc/;
  assertEquals(null, regexp.exec("abcdef")); //test 2321
}

function testRegexpPCRE_2300() {
  var regexp = /\Gabc/;
  assertEquals(null, regexp.exec("defabcxyz>3 ")); //test 2322
}

function testRegexpPCRE_2301() {
  var regexp = /\Gabc/;
  assertEquals(null, regexp.exec("*** Failers ")); //test 2323
}

function testRegexpPCRE_2302() {
  var regexp = /\Gabc/;
  assertEquals(null, regexp.exec("defabcxyz")); //test 2324
}

function testRegexpPCRE_2303() {
  var regexp = /^abcdef/;
  assertEquals(null, regexp.exec("abP")); //test 2325
}

function testRegexpPCRE_2304() {
  var regexp = /^abcdef/;
  assertEquals(null, regexp.exec("abcdeP")); //test 2326
}

function testRegexpPCRE_2305() {
  var regexp = /^abcdef/;
  assertEquals("abcdef", regexp.exec("abcdefP").toString()); //test 2327
}

function testRegexpPCRE_2306() {
  var regexp = /^abcdef/;
  assertEquals(null, regexp.exec("*** Failers")); //test 2328
}

function testRegexpPCRE_2307() {
  var regexp = /^abcdef/;
  assertEquals(null, regexp.exec("abxP    ")); //test 2329
}

function testRegexpPCRE_2308() {
  var regexp = /^a{2,4}\d+z/;
  assertEquals(null, regexp.exec("aP")); //test 2330
}

function testRegexpPCRE_2309() {
  var regexp = /^a{2,4}\d+z/;
  assertEquals(null, regexp.exec("aaP")); //test 2331
}

function testRegexpPCRE_2310() {
  var regexp = /^a{2,4}\d+z/;
  assertEquals(null, regexp.exec("aa2P ")); //test 2332
}

function testRegexpPCRE_2311() {
  var regexp = /^a{2,4}\d+z/;
  assertEquals(null, regexp.exec("aaaP")); //test 2333
}

function testRegexpPCRE_2312() {
  var regexp = /^a{2,4}\d+z/;
  assertEquals(null, regexp.exec("aaa23P ")); //test 2334
}

function testRegexpPCRE_2313() {
  var regexp = /^a{2,4}\d+z/;
  assertEquals(null, regexp.exec("aaaa12345P")); //test 2335
}

function testRegexpPCRE_2314() {
  var regexp = /^a{2,4}\d+z/;
  assertEquals("aa0z", regexp.exec("aa0zP").toString()); //test 2336
}

function testRegexpPCRE_2315() {
  var regexp = /^a{2,4}\d+z/;
  assertEquals("aaaa4444444444444z", regexp.exec("aaaa4444444444444zP ").toString()); //test 2337
}

function testRegexpPCRE_2316() {
  var regexp = /^a{2,4}\d+z/;
  assertEquals(null, regexp.exec("*** Failers")); //test 2338
}

function testRegexpPCRE_2317() {
  var regexp = /^a{2,4}\d+z/;
  assertEquals(null, regexp.exec("azP ")); //test 2339
}

function testRegexpPCRE_2318() {
  var regexp = /^a{2,4}\d+z/;
  assertEquals(null, regexp.exec("aaaaaP ")); //test 2340
}

function testRegexpPCRE_2319() {
  var regexp = /^a{2,4}\d+z/;
  assertEquals(null, regexp.exec("a56P ")); //test 2341
}

function testRegexpPCRE_2320() {
  var regexp = /(ab*(cd|ef))+X/;
  assertEquals(null, regexp.exec("adfadadaklhlkalkajhlkjahdfasdfasdfladsfjkjPZ")); //test 2342
}

function testRegexpPCRE_2321() {
  var regexp = /(ab*(cd|ef))+X/;
  assertEquals(null, regexp.exec("lkjhlkjhlkjhlkjhabbbbbbcdaefabbbbbbbefaPBZ")); //test 2343
}

function testRegexpPCRE_2322() {
  var regexp = /(ab*(cd|ef))+X/;
  assertEquals(null, regexp.exec("cdabbbbbbbbPRBZ")); //test 2344
}

function testRegexpPCRE_2323() {
  var regexp = /(ab*(cd|ef))+X/;
  assertEquals(null, regexp.exec("efabbbbbbbbbbbbbbbbPRBZ")); //test 2345
}

function testRegexpPCRE_2324() {
  var regexp = /(ab*(cd|ef))+X/;
  assertEquals(null, regexp.exec("bbbbbbbbbbbbcdXyasdfadfPRBZ    ")); //test 2346
}

function testRegexpPCRE_2325() {
  var regexp = /(ab*(cd|ef))+X/;
  assertEquals(null, regexp.exec("abc")); //test 2347
}

function testRegexpPCRE_2326() {
  var regexp = /(ab*(cd|ef))+X/;
  assertEquals(null, regexp.exec("** Failers")); //test 2348
}

function testRegexpPCRE_2327() {
  var regexp = /(ab*(cd|ef))+X/;
  assertEquals(null, regexp.exec("def  ")); //test 2349
}

function testRegexpPCRE_2328() {
  var regexp = /the quick brown fox/;
  assertEquals("the quick brown fox", regexp.exec("the quick brown fox").toString()); //test 2350
}

function testRegexpPCRE_2329() {
  var regexp = /the quick brown fox/;
  assertEquals(null, regexp.exec("The quick brown FOX")); //test 2351
}

function testRegexpPCRE_2330() {
  var regexp = /the quick brown fox/;
  assertEquals("the quick brown fox", regexp.exec("What do you know about the quick brown fox?").toString()); //test 2352
}

function testRegexpPCRE_2331() {
  var regexp = /the quick brown fox/;
  assertEquals(null, regexp.exec("What do you know about THE QUICK BROWN FOX?")); //test 2353
}

function testRegexpPCRE_2332() {
  var regexp = /The quick brown fox/i;
  assertEquals("the quick brown fox", regexp.exec("the quick brown fox").toString()); //test 2354
}

function testRegexpPCRE_2333() {
  var regexp = /The quick brown fox/i;
  assertEquals("The quick brown FOX", regexp.exec("The quick brown FOX").toString()); //test 2355
}

function testRegexpPCRE_2334() {
  var regexp = /The quick brown fox/i;
  assertEquals("the quick brown fox", regexp.exec("What do you know about the quick brown fox?").toString()); //test 2356
}

function testRegexpPCRE_2335() {
  var regexp = /The quick brown fox/i;
  assertEquals("THE QUICK BROWN FOX", regexp.exec("What do you know about THE QUICK BROWN FOX?").toString()); //test 2357
}

function testRegexpPCRE_2336() {
  var regexp = /abcd\t\n\r\f\a\e\071\x3b\$\\\?caxyz/;
  assertEquals("abcd\x09\n\x0d\x0cae9;$\\?caxyz", regexp.exec("abcd\x09\n\x0d\x0cae9;$\\?caxyz").toString()); //test 2358
}

function testRegexpPCRE_2337() {
  var regexp = /a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz/;
  assertEquals("abxyzpqrrrabbxyyyypqAzz", regexp.exec("abxyzpqrrrabbxyyyypqAzz").toString()); //test 2359
}

function testRegexpPCRE_2338() {
  var regexp = /a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz/;
  assertEquals("abxyzpqrrrabbxyyyypqAzz", regexp.exec("abxyzpqrrrabbxyyyypqAzz").toString()); //test 2360
}

function testRegexpPCRE_2339() {
  var regexp = /a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz/;
  assertEquals("aabxyzpqrrrabbxyyyypqAzz", regexp.exec("aabxyzpqrrrabbxyyyypqAzz").toString()); //test 2361
}

function testRegexpPCRE_2340() {
  var regexp = /a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz/;
  assertEquals("aaabxyzpqrrrabbxyyyypqAzz", regexp.exec("aaabxyzpqrrrabbxyyyypqAzz").toString()); //test 2362
}

function testRegexpPCRE_2341() {
  var regexp = /a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz/;
  assertEquals("aaaabxyzpqrrrabbxyyyypqAzz", regexp.exec("aaaabxyzpqrrrabbxyyyypqAzz").toString()); //test 2363
}

function testRegexpPCRE_2342() {
  var regexp = /a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz/;
  assertEquals("abcxyzpqrrrabbxyyyypqAzz", regexp.exec("abcxyzpqrrrabbxyyyypqAzz").toString()); //test 2364
}

function testRegexpPCRE_2343() {
  var regexp = /a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz/;
  assertEquals("aabcxyzpqrrrabbxyyyypqAzz", regexp.exec("aabcxyzpqrrrabbxyyyypqAzz").toString()); //test 2365
}

function testRegexpPCRE_2344() {
  var regexp = /a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz/;
  assertEquals("aaabcxyzpqrrrabbxyyyypAzz", regexp.exec("aaabcxyzpqrrrabbxyyyypAzz").toString()); //test 2366
}

function testRegexpPCRE_2345() {
  var regexp = /a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz/;
  assertEquals("aaabcxyzpqrrrabbxyyyypqAzz", regexp.exec("aaabcxyzpqrrrabbxyyyypqAzz").toString()); //test 2367
}

function testRegexpPCRE_2346() {
  var regexp = /a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz/;
  assertEquals("aaabcxyzpqrrrabbxyyyypqqAzz", regexp.exec("aaabcxyzpqrrrabbxyyyypqqAzz").toString()); //test 2368
}

function testRegexpPCRE_2347() {
  var regexp = /a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz/;
  assertEquals("aaabcxyzpqrrrabbxyyyypqqqAzz", regexp.exec("aaabcxyzpqrrrabbxyyyypqqqAzz").toString()); //test 2369
}

function testRegexpPCRE_2348() {
  var regexp = /a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz/;
  assertEquals("aaabcxyzpqrrrabbxyyyypqqqqAzz", regexp.exec("aaabcxyzpqrrrabbxyyyypqqqqAzz").toString()); //test 2370
}

function testRegexpPCRE_2349() {
  var regexp = /a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz/;
  assertEquals("aaabcxyzpqrrrabbxyyyypqqqqqAzz", regexp.exec("aaabcxyzpqrrrabbxyyyypqqqqqAzz").toString()); //test 2371
}

function testRegexpPCRE_2350() {
  var regexp = /a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz/;
  assertEquals("aaabcxyzpqrrrabbxyyyypqqqqqqAzz", regexp.exec("aaabcxyzpqrrrabbxyyyypqqqqqqAzz").toString()); //test 2372
}

function testRegexpPCRE_2351() {
  var regexp = /a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz/;
  assertEquals("aaaabcxyzpqrrrabbxyyyypqAzz", regexp.exec("aaaabcxyzpqrrrabbxyyyypqAzz").toString()); //test 2373
}

function testRegexpPCRE_2352() {
  var regexp = /a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz/;
  assertEquals("abxyzzpqrrrabbxyyyypqAzz", regexp.exec("abxyzzpqrrrabbxyyyypqAzz").toString()); //test 2374
}

function testRegexpPCRE_2353() {
  var regexp = /a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz/;
  assertEquals("aabxyzzzpqrrrabbxyyyypqAzz", regexp.exec("aabxyzzzpqrrrabbxyyyypqAzz").toString()); //test 2375
}

function testRegexpPCRE_2354() {
  var regexp = /a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz/;
  assertEquals("aaabxyzzzzpqrrrabbxyyyypqAzz", regexp.exec("aaabxyzzzzpqrrrabbxyyyypqAzz").toString()); //test 2376
}

function testRegexpPCRE_2355() {
  var regexp = /a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz/;
  assertEquals("aaaabxyzzzzpqrrrabbxyyyypqAzz", regexp.exec("aaaabxyzzzzpqrrrabbxyyyypqAzz").toString()); //test 2377
}

function testRegexpPCRE_2356() {
  var regexp = /a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz/;
  assertEquals("abcxyzzpqrrrabbxyyyypqAzz", regexp.exec("abcxyzzpqrrrabbxyyyypqAzz").toString()); //test 2378
}

function testRegexpPCRE_2357() {
  var regexp = /a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz/;
  assertEquals("aabcxyzzzpqrrrabbxyyyypqAzz", regexp.exec("aabcxyzzzpqrrrabbxyyyypqAzz").toString()); //test 2379
}

function testRegexpPCRE_2358() {
  var regexp = /a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz/;
  assertEquals("aaabcxyzzzzpqrrrabbxyyyypqAzz", regexp.exec("aaabcxyzzzzpqrrrabbxyyyypqAzz").toString()); //test 2380
}

function testRegexpPCRE_2359() {
  var regexp = /a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz/;
  assertEquals("aaaabcxyzzzzpqrrrabbxyyyypqAzz", regexp.exec("aaaabcxyzzzzpqrrrabbxyyyypqAzz").toString()); //test 2381
}

function testRegexpPCRE_2360() {
  var regexp = /a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz/;
  assertEquals("aaaabcxyzzzzpqrrrabbbxyyyypqAzz", regexp.exec("aaaabcxyzzzzpqrrrabbbxyyyypqAzz").toString()); //test 2382
}

function testRegexpPCRE_2361() {
  var regexp = /a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz/;
  assertEquals("aaaabcxyzzzzpqrrrabbbxyyyyypqAzz", regexp.exec("aaaabcxyzzzzpqrrrabbbxyyyyypqAzz").toString()); //test 2383
}

function testRegexpPCRE_2362() {
  var regexp = /a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz/;
  assertEquals("aaabcxyzpqrrrabbxyyyypABzz", regexp.exec("aaabcxyzpqrrrabbxyyyypABzz").toString()); //test 2384
}

function testRegexpPCRE_2363() {
  var regexp = /a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz/;
  assertEquals("aaabcxyzpqrrrabbxyyyypABBzz", regexp.exec("aaabcxyzpqrrrabbxyyyypABBzz").toString()); //test 2385
}

function testRegexpPCRE_2364() {
  var regexp = /a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz/;
  assertEquals("aaabxyzpqrrrabbxyyyypqAzz", regexp.exec(">>>aaabxyzpqrrrabbxyyyypqAzz").toString()); //test 2386
}

function testRegexpPCRE_2365() {
  var regexp = /a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz/;
  assertEquals("aaaabxyzpqrrrabbxyyyypqAzz", regexp.exec(">aaaabxyzpqrrrabbxyyyypqAzz").toString()); //test 2387
}

function testRegexpPCRE_2366() {
  var regexp = /a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz/;
  assertEquals("abcxyzpqrrrabbxyyyypqAzz", regexp.exec(">>>>abcxyzpqrrrabbxyyyypqAzz").toString()); //test 2388
}

function testRegexpPCRE_2367() {
  var regexp = /a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz/;
  assertEquals(null, regexp.exec("*** Failers")); //test 2389
}

function testRegexpPCRE_2368() {
  var regexp = /a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz/;
  assertEquals(null, regexp.exec("abxyzpqrrabbxyyyypqAzz")); //test 2390
}

function testRegexpPCRE_2369() {
  var regexp = /a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz/;
  assertEquals(null, regexp.exec("abxyzpqrrrrabbxyyyypqAzz")); //test 2391
}

function testRegexpPCRE_2370() {
  var regexp = /a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz/;
  assertEquals(null, regexp.exec("abxyzpqrrrabxyyyypqAzz")); //test 2392
}

function testRegexpPCRE_2371() {
  var regexp = /a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz/;
  assertEquals(null, regexp.exec("aaaabcxyzzzzpqrrrabbbxyyyyyypqAzz")); //test 2393
}

function testRegexpPCRE_2372() {
  var regexp = /a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz/;
  assertEquals(null, regexp.exec("aaaabcxyzzzzpqrrrabbbxyyypqAzz")); //test 2394
}

function testRegexpPCRE_2373() {
  var regexp = /a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz/;
  assertEquals(null, regexp.exec("aaabcxyzpqrrrabbxyyyypqqqqqqqAzz")); //test 2395
}

function testRegexpPCRE_2374() {
  var regexp = /^(abc){1,2}zz/;
  assertEquals("abczz,abc", regexp.exec("abczz").toString()); //test 2396
}

function testRegexpPCRE_2375() {
  var regexp = /^(abc){1,2}zz/;
  assertEquals("abcabczz,abc", regexp.exec("abcabczz").toString()); //test 2397
}

function testRegexpPCRE_2376() {
  var regexp = /^(abc){1,2}zz/;
  assertEquals(null, regexp.exec("*** Failers")); //test 2398
}

function testRegexpPCRE_2377() {
  var regexp = /^(abc){1,2}zz/;
  assertEquals(null, regexp.exec("zz")); //test 2399
}

function testRegexpPCRE_2378() {
  var regexp = /^(abc){1,2}zz/;
  assertEquals(null, regexp.exec("abcabcabczz")); //test 2400
}

function testRegexpPCRE_2379() {
  var regexp = /^(abc){1,2}zz/;
  assertEquals(null, regexp.exec(">>abczz")); //test 2401
}

function testRegexpPCRE_2380() {
  var regexp = /^(b+?|a){1,2}?c/;
  assertEquals("bc,b", regexp.exec("bc").toString()); //test 2402
}

function testRegexpPCRE_2381() {
  var regexp = /^(b+?|a){1,2}?c/;
  assertEquals("bbc,b", regexp.exec("bbc").toString()); //test 2403
}

function testRegexpPCRE_2382() {
  var regexp = /^(b+?|a){1,2}?c/;
  assertEquals("bbbc,bb", regexp.exec("bbbc").toString()); //test 2404
}

function testRegexpPCRE_2383() {
  var regexp = /^(b+?|a){1,2}?c/;
  assertEquals("bac,a", regexp.exec("bac").toString()); //test 2405
}

function testRegexpPCRE_2384() {
  var regexp = /^(b+?|a){1,2}?c/;
  assertEquals("bbac,a", regexp.exec("bbac").toString()); //test 2406
}

function testRegexpPCRE_2385() {
  var regexp = /^(b+?|a){1,2}?c/;
  assertEquals("aac,a", regexp.exec("aac").toString()); //test 2407
}

function testRegexpPCRE_2386() {
  var regexp = /^(b+?|a){1,2}?c/;
  assertEquals("abbbbbbbbbbbc,bbbbbbbbbbb", regexp.exec("abbbbbbbbbbbc").toString()); //test 2408
}

function testRegexpPCRE_2387() {
  var regexp = /^(b+?|a){1,2}?c/;
  assertEquals("bbbbbbbbbbbac,a", regexp.exec("bbbbbbbbbbbac").toString()); //test 2409
}

function testRegexpPCRE_2388() {
  var regexp = /^(b+?|a){1,2}?c/;
  assertEquals(null, regexp.exec("*** Failers")); //test 2410
}

function testRegexpPCRE_2389() {
  var regexp = /^(b+?|a){1,2}?c/;
  assertEquals(null, regexp.exec("aaac")); //test 2411
}

function testRegexpPCRE_2390() {
  var regexp = /^(b+?|a){1,2}?c/;
  assertEquals(null, regexp.exec("abbbbbbbbbbbac")); //test 2412
}

function testRegexpPCRE_2391() {
  var regexp = /^(b+|a){1,2}c/;
  assertEquals("bc,b", regexp.exec("bc").toString()); //test 2413
}

function testRegexpPCRE_2392() {
  var regexp = /^(b+|a){1,2}c/;
  assertEquals("bbc,bb", regexp.exec("bbc").toString()); //test 2414
}

function testRegexpPCRE_2393() {
  var regexp = /^(b+|a){1,2}c/;
  assertEquals("bbbc,bbb", regexp.exec("bbbc").toString()); //test 2415
}

function testRegexpPCRE_2394() {
  var regexp = /^(b+|a){1,2}c/;
  assertEquals("bac,a", regexp.exec("bac").toString()); //test 2416
}

function testRegexpPCRE_2395() {
  var regexp = /^(b+|a){1,2}c/;
  assertEquals("bbac,a", regexp.exec("bbac").toString()); //test 2417
}

function testRegexpPCRE_2396() {
  var regexp = /^(b+|a){1,2}c/;
  assertEquals("aac,a", regexp.exec("aac").toString()); //test 2418
}

function testRegexpPCRE_2397() {
  var regexp = /^(b+|a){1,2}c/;
  assertEquals("abbbbbbbbbbbc,bbbbbbbbbbb", regexp.exec("abbbbbbbbbbbc").toString()); //test 2419
}

function testRegexpPCRE_2398() {
  var regexp = /^(b+|a){1,2}c/;
  assertEquals("bbbbbbbbbbbac,a", regexp.exec("bbbbbbbbbbbac").toString()); //test 2420
}

function testRegexpPCRE_2399() {
  var regexp = /^(b+|a){1,2}c/;
  assertEquals(null, regexp.exec("*** Failers")); //test 2421
}

function testRegexpPCRE_2400() {
  var regexp = /^(b+|a){1,2}c/;
  assertEquals(null, regexp.exec("aaac")); //test 2422
}

function testRegexpPCRE_2401() {
  var regexp = /^(b+|a){1,2}c/;
  assertEquals(null, regexp.exec("abbbbbbbbbbbac")); //test 2423
}

function testRegexpPCRE_2402() {
  var regexp = /^(b+|a){1,2}c/;
  assertEquals("bbc,bb", regexp.exec("bbc").toString()); //test 2424
}

function testRegexpPCRE_2403() {
  var regexp = /^(b*|ba){1,2}?bc/;
  assertEquals("babc,ba", regexp.exec("babc").toString()); //test 2425
}

function testRegexpPCRE_2404() {
  var regexp = /^(b*|ba){1,2}?bc/;
  assertEquals("bbabc,ba", regexp.exec("bbabc").toString()); //test 2426
}

function testRegexpPCRE_2405() {
  var regexp = /^(b*|ba){1,2}?bc/;
  assertEquals("bababc,ba", regexp.exec("bababc").toString()); //test 2427
}

function testRegexpPCRE_2406() {
  var regexp = /^(b*|ba){1,2}?bc/;
  assertEquals(null, regexp.exec("*** Failers")); //test 2428
}

function testRegexpPCRE_2407() {
  var regexp = /^(b*|ba){1,2}?bc/;
  assertEquals(null, regexp.exec("bababbc")); //test 2429
}

function testRegexpPCRE_2408() {
  var regexp = /^(b*|ba){1,2}?bc/;
  assertEquals(null, regexp.exec("babababc")); //test 2430
}

function testRegexpPCRE_2409() {
  var regexp = /^(ba|b*){1,2}?bc/;
  assertEquals("babc,ba", regexp.exec("babc").toString()); //test 2431
}

function testRegexpPCRE_2410() {
  var regexp = /^(ba|b*){1,2}?bc/;
  assertEquals("bbabc,ba", regexp.exec("bbabc").toString()); //test 2432
}

function testRegexpPCRE_2411() {
  var regexp = /^(ba|b*){1,2}?bc/;
  assertEquals("bababc,ba", regexp.exec("bababc").toString()); //test 2433
}

function testRegexpPCRE_2412() {
  var regexp = /^(ba|b*){1,2}?bc/;
  assertEquals(null, regexp.exec("*** Failers")); //test 2434
}

function testRegexpPCRE_2413() {
  var regexp = /^(ba|b*){1,2}?bc/;
  assertEquals(null, regexp.exec("bababbc")); //test 2435
}

function testRegexpPCRE_2414() {
  var regexp = /^(ba|b*){1,2}?bc/;
  assertEquals(null, regexp.exec("babababc")); //test 2436
}

function testRegexpPCRE_2415() {
  var regexp = /^(ba|b*){1,2}?bc/;
  assertEquals(null, regexp.exec("\x01\x01e;z")); //test 2437
}

function testRegexpPCRE_2416() {
  assertThrows(SyntaxError, eval, "var re = /^\\ca\\cA\\c[\\c{\\c:/;"); //test 2438
}


function testRegexpPCRE_2417() {
  var regexp = /^[ab\]cde]/;
  assertEquals("a", regexp.exec("athing").toString()); //test 2439
}

function testRegexpPCRE_2418() {
  var regexp = /^[ab\]cde]/;
  assertEquals("b", regexp.exec("bthing").toString()); //test 2440
}

function testRegexpPCRE_2419() {
  var regexp = /^[ab\]cde]/;
  assertEquals("]", regexp.exec("]thing").toString()); //test 2441
}

function testRegexpPCRE_2420() {
  var regexp = /^[ab\]cde]/;
  assertEquals("c", regexp.exec("cthing").toString()); //test 2442
}

function testRegexpPCRE_2421() {
  var regexp = /^[ab\]cde]/;
  assertEquals("d", regexp.exec("dthing").toString()); //test 2443
}

function testRegexpPCRE_2422() {
  var regexp = /^[ab\]cde]/;
  assertEquals("e", regexp.exec("ething").toString()); //test 2444
}

function testRegexpPCRE_2423() {
  var regexp = /^[ab\]cde]/;
  assertEquals(null, regexp.exec("*** Failers")); //test 2445
}

function testRegexpPCRE_2424() {
  var regexp = /^[ab\]cde]/;
  assertEquals(null, regexp.exec("fthing")); //test 2446
}

function testRegexpPCRE_2425() {
  var regexp = /^[ab\]cde]/;
  assertEquals(null, regexp.exec("[thing")); //test 2447
}

function testRegexpPCRE_2426() {
  var regexp = /^[ab\]cde]/;
  assertEquals(null, regexp.exec("\\thing")); //test 2448
}

function testRegexpPCRE_2427() {
  var regexp = /^[]cde]/;
  assertEquals(null, regexp.exec("]thing")); //test 2449
}

function testRegexpPCRE_2428() {
  var regexp = /^[]cde]/;
  assertEquals(null, regexp.exec("cthing")); //test 2450
}

function testRegexpPCRE_2429() {
  var regexp = /^[]cde]/;
  assertEquals(null, regexp.exec("dthing")); //test 2451
}

function testRegexpPCRE_2430() {
  var regexp = /^[]cde]/;
  assertEquals(null, regexp.exec("ething")); //test 2452
}

function testRegexpPCRE_2431() {
  var regexp = /^[]cde]/;
  assertEquals(null, regexp.exec("*** Failers")); //test 2453
}

function testRegexpPCRE_2432() {
  var regexp = /^[]cde]/;
  assertEquals(null, regexp.exec("athing")); //test 2454
}

function testRegexpPCRE_2433() {
  var regexp = /^[]cde]/;
  assertEquals(null, regexp.exec("fthing")); //test 2455
}

function testRegexpPCRE_2434() {
  var regexp = /^[^ab\]cde]/;
  assertEquals("f", regexp.exec("fthing").toString()); //test 2456
}

function testRegexpPCRE_2435() {
  var regexp = /^[^ab\]cde]/;
  assertEquals("[", regexp.exec("[thing").toString()); //test 2457
}

function testRegexpPCRE_2436() {
  var regexp = /^[^ab\]cde]/;
  assertEquals("\\", regexp.exec("\\thing").toString()); //test 2458
}

function testRegexpPCRE_2437() {
  var regexp = /^[^ab\]cde]/;
  assertEquals("*", regexp.exec("*** Failers").toString()); //test 2459
}

function testRegexpPCRE_2438() {
  var regexp = /^[^ab\]cde]/;
  assertEquals(null, regexp.exec("athing")); //test 2460
}

function testRegexpPCRE_2439() {
  var regexp = /^[^ab\]cde]/;
  assertEquals(null, regexp.exec("bthing")); //test 2461
}

function testRegexpPCRE_2440() {
  var regexp = /^[^ab\]cde]/;
  assertEquals(null, regexp.exec("]thing")); //test 2462
}

function testRegexpPCRE_2441() {
  var regexp = /^[^ab\]cde]/;
  assertEquals(null, regexp.exec("cthing")); //test 2463
}

function testRegexpPCRE_2442() {
  var regexp = /^[^ab\]cde]/;
  assertEquals(null, regexp.exec("dthing")); //test 2464
}

function testRegexpPCRE_2443() {
  var regexp = /^[^ab\]cde]/;
  assertEquals(null, regexp.exec("ething")); //test 2465
}

function testRegexpPCRE_2444() {
  var regexp = /^[^]cde]/;
  assertEquals(null, regexp.exec("athing")); //test 2466
}

function testRegexpPCRE_2445() {
  var regexp = /^[^]cde]/;
  assertEquals(null, regexp.exec("fthing")); //test 2467
}

function testRegexpPCRE_2446() {
  var regexp = /^[^]cde]/;
  assertEquals(null, regexp.exec("*** Failers")); //test 2468
}

function testRegexpPCRE_2447() {
  var regexp = /^[^]cde]/;
  assertEquals(null, regexp.exec("]thing")); //test 2469
}

function testRegexpPCRE_2448() {
  var regexp = /^[^]cde]/;
  assertEquals(null, regexp.exec("cthing")); //test 2470
}

function testRegexpPCRE_2449() {
  var regexp = /^[^]cde]/;
  assertEquals(null, regexp.exec("dthing")); //test 2471
}

function testRegexpPCRE_2450() {
  var regexp = /^[^]cde]/;
  assertEquals(null, regexp.exec("ething")); //test 2472
}

function testRegexpPCRE_2451() {
  var regexp = /^[^]cde]/;
  assertEquals(null, regexp.exec("\ufffd")); //test 2473
}

function testRegexpPCRE_2452() {
  var regexp = /^[^]cde]/;
  assertEquals(null, regexp.exec("\ufffd")); //test 2474
}

function testRegexpPCRE_2453() {
  var regexp = /^[0-9]+$/;
  assertEquals("0", regexp.exec("0").toString()); //test 2475
}

function testRegexpPCRE_2454() {
  var regexp = /^[0-9]+$/;
  assertEquals("1", regexp.exec("1").toString()); //test 2476
}

function testRegexpPCRE_2455() {
  var regexp = /^[0-9]+$/;
  assertEquals("2", regexp.exec("2").toString()); //test 2477
}

function testRegexpPCRE_2456() {
  var regexp = /^[0-9]+$/;
  assertEquals("3", regexp.exec("3").toString()); //test 2478
}

function testRegexpPCRE_2457() {
  var regexp = /^[0-9]+$/;
  assertEquals("4", regexp.exec("4").toString()); //test 2479
}

function testRegexpPCRE_2458() {
  var regexp = /^[0-9]+$/;
  assertEquals("5", regexp.exec("5").toString()); //test 2480
}

function testRegexpPCRE_2459() {
  var regexp = /^[0-9]+$/;
  assertEquals("6", regexp.exec("6").toString()); //test 2481
}

function testRegexpPCRE_2460() {
  var regexp = /^[0-9]+$/;
  assertEquals("7", regexp.exec("7").toString()); //test 2482
}

function testRegexpPCRE_2461() {
  var regexp = /^[0-9]+$/;
  assertEquals("8", regexp.exec("8").toString()); //test 2483
}

function testRegexpPCRE_2462() {
  var regexp = /^[0-9]+$/;
  assertEquals("9", regexp.exec("9").toString()); //test 2484
}

function testRegexpPCRE_2463() {
  var regexp = /^[0-9]+$/;
  assertEquals("10", regexp.exec("10").toString()); //test 2485
}

function testRegexpPCRE_2464() {
  var regexp = /^[0-9]+$/;
  assertEquals("100", regexp.exec("100").toString()); //test 2486
}

function testRegexpPCRE_2465() {
  var regexp = /^[0-9]+$/;
  assertEquals(null, regexp.exec("*** Failers")); //test 2487
}

function testRegexpPCRE_2466() {
  var regexp = /^[0-9]+$/;
  assertEquals(null, regexp.exec("abc")); //test 2488
}

function testRegexpPCRE_2467() {
  var regexp = /^.*nter/;
  assertEquals("enter", regexp.exec("enter").toString()); //test 2489
}

function testRegexpPCRE_2468() {
  var regexp = /^.*nter/;
  assertEquals("inter", regexp.exec("inter").toString()); //test 2490
}

function testRegexpPCRE_2469() {
  var regexp = /^.*nter/;
  assertEquals("uponter", regexp.exec("uponter").toString()); //test 2491
}

function testRegexpPCRE_2470() {
  var regexp = /^xxx[0-9]+$/;
  assertEquals("xxx0", regexp.exec("xxx0").toString()); //test 2492
}

function testRegexpPCRE_2471() {
  var regexp = /^xxx[0-9]+$/;
  assertEquals("xxx1234", regexp.exec("xxx1234").toString()); //test 2493
}

function testRegexpPCRE_2472() {
  var regexp = /^xxx[0-9]+$/;
  assertEquals(null, regexp.exec("*** Failers")); //test 2494
}

function testRegexpPCRE_2473() {
  var regexp = /^xxx[0-9]+$/;
  assertEquals(null, regexp.exec("xxx")); //test 2495
}

function testRegexpPCRE_2474() {
  var regexp = /^.+[0-9][0-9][0-9]$/;
  assertEquals("x123", regexp.exec("x123").toString()); //test 2496
}

function testRegexpPCRE_2475() {
  var regexp = /^.+[0-9][0-9][0-9]$/;
  assertEquals("xx123", regexp.exec("xx123").toString()); //test 2497
}

function testRegexpPCRE_2476() {
  var regexp = /^.+[0-9][0-9][0-9]$/;
  assertEquals("123456", regexp.exec("123456").toString()); //test 2498
}

function testRegexpPCRE_2477() {
  var regexp = /^.+[0-9][0-9][0-9]$/;
  assertEquals(null, regexp.exec("*** Failers")); //test 2499
}

function testRegexpPCRE_2478() {
  var regexp = /^.+[0-9][0-9][0-9]$/;
  assertEquals(null, regexp.exec("123")); //test 2500
}

function testRegexpPCRE_2479() {
  var regexp = /^.+[0-9][0-9][0-9]$/;
  assertEquals("x1234", regexp.exec("x1234").toString()); //test 2501
}

function testRegexpPCRE_2480() {
  var regexp = /^.+?[0-9][0-9][0-9]$/;
  assertEquals("x123", regexp.exec("x123").toString()); //test 2502
}

function testRegexpPCRE_2481() {
  var regexp = /^.+?[0-9][0-9][0-9]$/;
  assertEquals("xx123", regexp.exec("xx123").toString()); //test 2503
}

function testRegexpPCRE_2482() {
  var regexp = /^.+?[0-9][0-9][0-9]$/;
  assertEquals("123456", regexp.exec("123456").toString()); //test 2504
}

function testRegexpPCRE_2483() {
  var regexp = /^.+?[0-9][0-9][0-9]$/;
  assertEquals(null, regexp.exec("*** Failers")); //test 2505
}

function testRegexpPCRE_2484() {
  var regexp = /^.+?[0-9][0-9][0-9]$/;
  assertEquals(null, regexp.exec("123")); //test 2506
}

function testRegexpPCRE_2485() {
  var regexp = /^.+?[0-9][0-9][0-9]$/;
  assertEquals("x1234", regexp.exec("x1234").toString()); //test 2507
}

function testRegexpPCRE_2486() {
  var regexp = /^([^!]+)!(.+)=apquxz\.ixr\.zzz\.ac\.uk$/;
  assertEquals("abc!pqr=apquxz.ixr.zzz.ac.uk,abc,pqr", regexp.exec("abc!pqr=apquxz.ixr.zzz.ac.uk").toString()); //test 2508
}

function testRegexpPCRE_2487() {
  var regexp = /^([^!]+)!(.+)=apquxz\.ixr\.zzz\.ac\.uk$/;
  assertEquals(null, regexp.exec("*** Failers")); //test 2509
}

function testRegexpPCRE_2488() {
  var regexp = /^([^!]+)!(.+)=apquxz\.ixr\.zzz\.ac\.uk$/;
  assertEquals(null, regexp.exec("!pqr=apquxz.ixr.zzz.ac.uk")); //test 2510
}

function testRegexpPCRE_2489() {
  var regexp = /^([^!]+)!(.+)=apquxz\.ixr\.zzz\.ac\.uk$/;
  assertEquals(null, regexp.exec("abc!=apquxz.ixr.zzz.ac.uk")); //test 2511
}

function testRegexpPCRE_2490() {
  var regexp = /^([^!]+)!(.+)=apquxz\.ixr\.zzz\.ac\.uk$/;
  assertEquals(null, regexp.exec("abc!pqr=apquxz:ixr.zzz.ac.uk")); //test 2512
}

function testRegexpPCRE_2491() {
  var regexp = /^([^!]+)!(.+)=apquxz\.ixr\.zzz\.ac\.uk$/;
  assertEquals(null, regexp.exec("abc!pqr=apquxz.ixr.zzz.ac.ukk")); //test 2513
}

function testRegexpPCRE_2492() {
  var regexp = /:/;
  assertEquals(":", regexp.exec("Well, we need a colon: somewhere").toString()); //test 2514
}

function testRegexpPCRE_2493() {
  var regexp = /:/;
  assertEquals(null, regexp.exec("*** Fail if we don't")); //test 2515
}

function testRegexpPCRE_2494() {
  var regexp = /([\da-f:]+)$/i;
  assertEquals("0abc,0abc", regexp.exec("0abc").toString()); //test 2516
}

function testRegexpPCRE_2495() {
  var regexp = /([\da-f:]+)$/i;
  assertEquals("abc,abc", regexp.exec("abc").toString()); //test 2517
}

function testRegexpPCRE_2496() {
  var regexp = /([\da-f:]+)$/i;
  assertEquals("fed,fed", regexp.exec("fed").toString()); //test 2518
}

function testRegexpPCRE_2497() {
  var regexp = /([\da-f:]+)$/i;
  assertEquals("E,E", regexp.exec("E").toString()); //test 2519
}

function testRegexpPCRE_2498() {
  var regexp = /([\da-f:]+)$/i;
  assertEquals("::,::", regexp.exec("::").toString()); //test 2520
}

function testRegexpPCRE_2499() {
  var regexp = /([\da-f:]+)$/i;
  assertEquals("5f03:12C0::932e,5f03:12C0::932e", regexp.exec("5f03:12C0::932e").toString()); //test 2521
}

function testRegexpPCRE_2500() {
  var regexp = /([\da-f:]+)$/i;
  assertEquals("def,def", regexp.exec("fed def").toString()); //test 2522
}

function testRegexpPCRE_2501() {
  var regexp = /([\da-f:]+)$/i;
  assertEquals("ff,ff", regexp.exec("Any old stuff").toString()); //test 2523
}

function testRegexpPCRE_2502() {
  var regexp = /([\da-f:]+)$/i;
  assertEquals(null, regexp.exec("*** Failers")); //test 2524
}

function testRegexpPCRE_2503() {
  var regexp = /([\da-f:]+)$/i;
  assertEquals(null, regexp.exec("0zzz")); //test 2525
}

function testRegexpPCRE_2504() {
  var regexp = /([\da-f:]+)$/i;
  assertEquals(null, regexp.exec("gzzz")); //test 2526
}

function testRegexpPCRE_2505() {
  var regexp = /([\da-f:]+)$/i;
  assertEquals(null, regexp.exec("fed ")); //test 2527
}

function testRegexpPCRE_2506() {
  var regexp = /([\da-f:]+)$/i;
  assertEquals(null, regexp.exec("Any old rubbish")); //test 2528
}

function testRegexpPCRE_2507() {
  var regexp = /^.*\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/;
  assertEquals(".1.2.3,1,2,3", regexp.exec(".1.2.3").toString()); //test 2529
}

function testRegexpPCRE_2508() {
  var regexp = /^.*\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/;
  assertEquals("A.12.123.0,12,123,0", regexp.exec("A.12.123.0").toString()); //test 2530
}

function testRegexpPCRE_2509() {
  var regexp = /^.*\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/;
  assertEquals(null, regexp.exec("*** Failers")); //test 2531
}

function testRegexpPCRE_2510() {
  var regexp = /^.*\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/;
  assertEquals(null, regexp.exec(".1.2.3333")); //test 2532
}

function testRegexpPCRE_2511() {
  var regexp = /^.*\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/;
  assertEquals(null, regexp.exec("1.2.3")); //test 2533
}

function testRegexpPCRE_2512() {
  var regexp = /^.*\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/;
  assertEquals(null, regexp.exec("1234.2.3")); //test 2534
}

function testRegexpPCRE_2513() {
  var regexp = /^(\d+)\s+IN\s+SOA\s+(\S+)\s+(\S+)\s*\(\s*$/;
  assertEquals("1 IN SOA non-sp1 non-sp2(,1,non-sp1,non-sp2", regexp.exec("1 IN SOA non-sp1 non-sp2(").toString()); //test 2535
}

function testRegexpPCRE_2514() {
  var regexp = /^(\d+)\s+IN\s+SOA\s+(\S+)\s+(\S+)\s*\(\s*$/;
  assertEquals("1    IN    SOA    non-sp1    non-sp2   (,1,non-sp1,non-sp2", regexp.exec("1    IN    SOA    non-sp1    non-sp2   (").toString()); //test 2536
}

function testRegexpPCRE_2515() {
  var regexp = /^(\d+)\s+IN\s+SOA\s+(\S+)\s+(\S+)\s*\(\s*$/;
  assertEquals(null, regexp.exec("*** Failers")); //test 2537
}

function testRegexpPCRE_2516() {
  var regexp = /^(\d+)\s+IN\s+SOA\s+(\S+)\s+(\S+)\s*\(\s*$/;
  assertEquals(null, regexp.exec("1IN SOA non-sp1 non-sp2(")); //test 2538
}

function testRegexpPCRE_2517() {
  var regexp = /^[a-zA-Z\d][a-zA-Z\d\-]*(\.[a-zA-Z\d][a-zA-z\d\-]*)*\.$/;
  assertEquals("a.,", regexp.exec("a.").toString()); //test 2539
}

function testRegexpPCRE_2518() {
  var regexp = /^[a-zA-Z\d][a-zA-Z\d\-]*(\.[a-zA-Z\d][a-zA-z\d\-]*)*\.$/;
  assertEquals("Z.,", regexp.exec("Z.").toString()); //test 2540
}

function testRegexpPCRE_2519() {
  var regexp = /^[a-zA-Z\d][a-zA-Z\d\-]*(\.[a-zA-Z\d][a-zA-z\d\-]*)*\.$/;
  assertEquals("2.,", regexp.exec("2.").toString()); //test 2541
}

function testRegexpPCRE_2520() {
  var regexp = /^[a-zA-Z\d][a-zA-Z\d\-]*(\.[a-zA-Z\d][a-zA-z\d\-]*)*\.$/;
  assertEquals("ab-c.pq-r.,.pq-r", regexp.exec("ab-c.pq-r.").toString()); //test 2542
}

function testRegexpPCRE_2521() {
  var regexp = /^[a-zA-Z\d][a-zA-Z\d\-]*(\.[a-zA-Z\d][a-zA-z\d\-]*)*\.$/;
  assertEquals("sxk.zzz.ac.uk.,.uk", regexp.exec("sxk.zzz.ac.uk.").toString()); //test 2543
}

function testRegexpPCRE_2522() {
  var regexp = /^[a-zA-Z\d][a-zA-Z\d\-]*(\.[a-zA-Z\d][a-zA-z\d\-]*)*\.$/;
  assertEquals("x-.y-.,.y-", regexp.exec("x-.y-.").toString()); //test 2544
}

function testRegexpPCRE_2523() {
  var regexp = /^[a-zA-Z\d][a-zA-Z\d\-]*(\.[a-zA-Z\d][a-zA-z\d\-]*)*\.$/;
  assertEquals(null, regexp.exec("*** Failers")); //test 2545
}

function testRegexpPCRE_2524() {
  var regexp = /^[a-zA-Z\d][a-zA-Z\d\-]*(\.[a-zA-Z\d][a-zA-z\d\-]*)*\.$/;
  assertEquals(null, regexp.exec("-abc.peq.")); //test 2546
}

function testRegexpPCRE_2525() {
  var regexp = /^\*\.[a-z]([a-z\-\d]*[a-z\d]+)?(\.[a-z]([a-z\-\d]*[a-z\d]+)?)*$/;
  assertEquals("*.a,,,", regexp.exec("*.a").toString()); //test 2547
}

function testRegexpPCRE_2526() {
  var regexp = /^\*\.[a-z]([a-z\-\d]*[a-z\d]+)?(\.[a-z]([a-z\-\d]*[a-z\d]+)?)*$/;
  assertEquals("*.b0-a,0-a,,", regexp.exec("*.b0-a").toString()); //test 2548
}

function testRegexpPCRE_2527() {
  var regexp = /^\*\.[a-z]([a-z\-\d]*[a-z\d]+)?(\.[a-z]([a-z\-\d]*[a-z\d]+)?)*$/;
  assertEquals("*.c3-b.c,3-b,.c,", regexp.exec("*.c3-b.c").toString()); //test 2549
}

function testRegexpPCRE_2528() {
  var regexp = /^\*\.[a-z]([a-z\-\d]*[a-z\d]+)?(\.[a-z]([a-z\-\d]*[a-z\d]+)?)*$/;
  assertEquals("*.c-a.b-c,-a,.b-c,-c", regexp.exec("*.c-a.b-c").toString()); //test 2550
}

function testRegexpPCRE_2529() {
  var regexp = /^\*\.[a-z]([a-z\-\d]*[a-z\d]+)?(\.[a-z]([a-z\-\d]*[a-z\d]+)?)*$/;
  assertEquals(null, regexp.exec("*** Failers")); //test 2551
}

function testRegexpPCRE_2530() {
  var regexp = /^\*\.[a-z]([a-z\-\d]*[a-z\d]+)?(\.[a-z]([a-z\-\d]*[a-z\d]+)?)*$/;
  assertEquals(null, regexp.exec("*.0")); //test 2552
}

function testRegexpPCRE_2531() {
  var regexp = /^\*\.[a-z]([a-z\-\d]*[a-z\d]+)?(\.[a-z]([a-z\-\d]*[a-z\d]+)?)*$/;
  assertEquals(null, regexp.exec("*.a-")); //test 2553
}

function testRegexpPCRE_2532() {
  var regexp = /^\*\.[a-z]([a-z\-\d]*[a-z\d]+)?(\.[a-z]([a-z\-\d]*[a-z\d]+)?)*$/;
  assertEquals(null, regexp.exec("*.a-b.c-")); //test 2554
}

function testRegexpPCRE_2533() {
  var regexp = /^\*\.[a-z]([a-z\-\d]*[a-z\d]+)?(\.[a-z]([a-z\-\d]*[a-z\d]+)?)*$/;
  assertEquals(null, regexp.exec("*.c-a.0-c")); //test 2555
}

function testRegexpPCRE_2534() {
  var regexp = /^(?=ab(de))(abd)(e)/;
  assertEquals("abde,de,abd,e", regexp.exec("abde").toString()); //test 2556
}

function testRegexpPCRE_2535() {
  var regexp = /^(?!(ab)de|x)(abd)(f)/;
  assertEquals("abdf,,abd,f", regexp.exec("abdf").toString()); //test 2557
}

function testRegexpPCRE_2536() {
  var regexp = /^(?=(ab(cd)))(ab)/;
  assertEquals("ab,abcd,cd,ab", regexp.exec("abcd").toString()); //test 2558
}

function testRegexpPCRE_2537() {
  var regexp = /^[\da-f](\.[\da-f])*$/i;
  assertEquals("a.b.c.d,.d", regexp.exec("a.b.c.d").toString()); //test 2559
}

function testRegexpPCRE_2538() {
  var regexp = /^[\da-f](\.[\da-f])*$/i;
  assertEquals("A.B.C.D,.D", regexp.exec("A.B.C.D").toString()); //test 2560
}

function testRegexpPCRE_2539() {
  var regexp = /^[\da-f](\.[\da-f])*$/i;
  assertEquals("a.b.c.1.2.3.C,.C", regexp.exec("a.b.c.1.2.3.C").toString()); //test 2561
}

function testRegexpPCRE_2540() {
  var regexp = /^\".*\"\s*(;.*)?$/;
  assertEquals("\"1234\",", regexp.exec("\"1234\"").toString()); //test 2562
}

function testRegexpPCRE_2541() {
  var regexp = /^\".*\"\s*(;.*)?$/;
  assertEquals("\"abcd\" ;,;", regexp.exec("\"abcd\" ;").toString()); //test 2563
}

function testRegexpPCRE_2542() {
  var regexp = /^\".*\"\s*(;.*)?$/;
  assertEquals("\"\" ; rhubarb,; rhubarb", regexp.exec("\"\" ; rhubarb").toString()); //test 2564
}

function testRegexpPCRE_2543() {
  var regexp = /^\".*\"\s*(;.*)?$/;
  assertEquals(null, regexp.exec("*** Failers")); //test 2565
}

function testRegexpPCRE_2544() {
  var regexp = /^\".*\"\s*(;.*)?$/;
  assertEquals(null, regexp.exec("\"1234\" : things")); //test 2566
}

function testRegexpPCRE_2545() {
  var regexp = /^$/;
  assertEquals(null, regexp.exec("\\")); //test 2567
}

function testRegexpPCRE_2546() {
  var regexp = /^$/;
  assertEquals(null, regexp.exec("*** Failers")); //test 2568
}

function testRegexpPCRE_2547() {
  var regexp = /^ab\sc$/;
  assertEquals("ab c", regexp.exec("ab c").toString()); //test 2569
}

function testRegexpPCRE_2548() {
  var regexp = /^ab\sc$/;
  assertEquals(null, regexp.exec("*** Failers")); //test 2570
}

function testRegexpPCRE_2549() {
  var regexp = /^ab\sc$/;
  assertEquals(null, regexp.exec("abc")); //test 2571
}

function testRegexpPCRE_2550() {
  var regexp = /^ab\sc$/;
  assertEquals(null, regexp.exec("ab cde")); //test 2572
}

function testRegexpPCRE_2551() {
  var regexp = /^ab\sc$/;
  assertEquals("ab c", regexp.exec("ab c").toString()); //test 2573
}

function testRegexpPCRE_2552() {
  var regexp = /^ab\sc$/;
  assertEquals(null, regexp.exec("*** Failers")); //test 2574
}

function testRegexpPCRE_2553() {
  var regexp = /^ab\sc$/;
  assertEquals(null, regexp.exec("abc")); //test 2575
}

function testRegexpPCRE_2554() {
  var regexp = /^ab\sc$/;
  assertEquals(null, regexp.exec("ab cde")); //test 2576
}

function testRegexpPCRE_2555() {
  var regexp = /^a\ b[c]d$/;
  assertEquals("a bcd", regexp.exec("a bcd").toString()); //test 2577
}

function testRegexpPCRE_2556() {
  var regexp = /^a\ b[c]d$/;
  assertEquals(null, regexp.exec("a b d")); //test 2578
}

function testRegexpPCRE_2557() {
  var regexp = /^a\ b[c]d$/;
  assertEquals(null, regexp.exec("*** Failers")); //test 2579
}

function testRegexpPCRE_2558() {
  var regexp = /^a\ b[c]d$/;
  assertEquals(null, regexp.exec("abcd")); //test 2580
}

function testRegexpPCRE_2559() {
  var regexp = /^a\ b[c]d$/;
  assertEquals(null, regexp.exec("ab d")); //test 2581
}

function testRegexpPCRE_2560() {
  var regexp = /^(a(b(c)))(d(e(f)))(h(i(j)))(k(l(m)))$/;
  assertEquals("abcdefhijklm,abc,bc,c,def,ef,f,hij,ij,j,klm,lm,m", regexp.exec("abcdefhijklm").toString()); //test 2582
}

function testRegexpPCRE_2561() {
  var regexp = /^(?:a(b(c)))(?:d(e(f)))(?:h(i(j)))(?:k(l(m)))$/;
  assertEquals("abcdefhijklm,bc,c,ef,f,ij,j,lm,m", regexp.exec("abcdefhijklm").toString()); //test 2583
}

function testRegexpPCRE_2562() {
  var regexp = /^[\w][\W][\s][\S][\d][\D][\b][\n][\c]][\022]/;
  assertEquals(null, regexp.exec("a+ Z0+\x08\n\x1d\x12")); //test 2584
}

function testRegexpPCRE_2563() {
  var regexp = /^[\w][\W][\s][\S][\d][\D][\b][\n][\c]][\022]/;
  assertEquals(null, regexp.exec(".^$(*+)|{?,?}")); //test 2585
}

function testRegexpPCRE_2564() {
  var regexp = /^a*\w/;
  assertEquals("z", regexp.exec("z").toString()); //test 2586
}

function testRegexpPCRE_2565() {
  var regexp = /^a*\w/;
  assertEquals("az", regexp.exec("az").toString()); //test 2587
}

function testRegexpPCRE_2566() {
  var regexp = /^a*\w/;
  assertEquals("aaaz", regexp.exec("aaaz").toString()); //test 2588
}

function testRegexpPCRE_2567() {
  var regexp = /^a*\w/;
  assertEquals("a", regexp.exec("a").toString()); //test 2589
}

function testRegexpPCRE_2568() {
  var regexp = /^a*\w/;
  assertEquals("aa", regexp.exec("aa").toString()); //test 2590
}

function testRegexpPCRE_2569() {
  var regexp = /^a*\w/;
  assertEquals("aaaa", regexp.exec("aaaa").toString()); //test 2591
}

function testRegexpPCRE_2570() {
  var regexp = /^a*\w/;
  assertEquals("a", regexp.exec("a+").toString()); //test 2592
}

function testRegexpPCRE_2571() {
  var regexp = /^a*\w/;
  assertEquals("aa", regexp.exec("aa+").toString()); //test 2593
}

function testRegexpPCRE_2572() {
  var regexp = /^a*?\w/;
  assertEquals("z", regexp.exec("z").toString()); //test 2594
}

function testRegexpPCRE_2573() {
  var regexp = /^a*?\w/;
  assertEquals("a", regexp.exec("az").toString()); //test 2595
}

function testRegexpPCRE_2574() {
  var regexp = /^a*?\w/;
  assertEquals("a", regexp.exec("aaaz").toString()); //test 2596
}

function testRegexpPCRE_2575() {
  var regexp = /^a*?\w/;
  assertEquals("a", regexp.exec("a").toString()); //test 2597
}

function testRegexpPCRE_2576() {
  var regexp = /^a*?\w/;
  assertEquals("a", regexp.exec("aa").toString()); //test 2598
}

function testRegexpPCRE_2577() {
  var regexp = /^a*?\w/;
  assertEquals("a", regexp.exec("aaaa").toString()); //test 2599
}

function testRegexpPCRE_2578() {
  var regexp = /^a*?\w/;
  assertEquals("a", regexp.exec("a+").toString()); //test 2600
}

function testRegexpPCRE_2579() {
  var regexp = /^a*?\w/;
  assertEquals("a", regexp.exec("aa+").toString()); //test 2601
}

function testRegexpPCRE_2580() {
  var regexp = /^a+\w/;
  assertEquals("az", regexp.exec("az").toString()); //test 2602
}

function testRegexpPCRE_2581() {
  var regexp = /^a+\w/;
  assertEquals("aaaz", regexp.exec("aaaz").toString()); //test 2603
}

function testRegexpPCRE_2582() {
  var regexp = /^a+\w/;
  assertEquals("aa", regexp.exec("aa").toString()); //test 2604
}

function testRegexpPCRE_2583() {
  var regexp = /^a+\w/;
  assertEquals("aaaa", regexp.exec("aaaa").toString()); //test 2605
}

function testRegexpPCRE_2584() {
  var regexp = /^a+\w/;
  assertEquals("aa", regexp.exec("aa+").toString()); //test 2606
}

function testRegexpPCRE_2585() {
  var regexp = /^a+?\w/;
  assertEquals("az", regexp.exec("az").toString()); //test 2607
}

function testRegexpPCRE_2586() {
  var regexp = /^a+?\w/;
  assertEquals("aa", regexp.exec("aaaz").toString()); //test 2608
}

function testRegexpPCRE_2587() {
  var regexp = /^a+?\w/;
  assertEquals("aa", regexp.exec("aa").toString()); //test 2609
}

function testRegexpPCRE_2588() {
  var regexp = /^a+?\w/;
  assertEquals("aa", regexp.exec("aaaa").toString()); //test 2610
}

function testRegexpPCRE_2589() {
  var regexp = /^a+?\w/;
  assertEquals("aa", regexp.exec("aa+").toString()); //test 2611
}

function testRegexpPCRE_2590() {
  var regexp = /^\d{8}\w{2,}/;
  assertEquals("1234567890", regexp.exec("1234567890").toString()); //test 2612
}

function testRegexpPCRE_2591() {
  var regexp = /^\d{8}\w{2,}/;
  assertEquals("12345678ab", regexp.exec("12345678ab").toString()); //test 2613
}

function testRegexpPCRE_2592() {
  var regexp = /^\d{8}\w{2,}/;
  assertEquals("12345678__", regexp.exec("12345678__").toString()); //test 2614
}

function testRegexpPCRE_2593() {
  var regexp = /^\d{8}\w{2,}/;
  assertEquals(null, regexp.exec("*** Failers")); //test 2615
}

function testRegexpPCRE_2594() {
  var regexp = /^\d{8}\w{2,}/;
  assertEquals(null, regexp.exec("1234567")); //test 2616
}

function testRegexpPCRE_2595() {
  var regexp = /^[aeiou\d]{4,5}$/;
  assertEquals("uoie", regexp.exec("uoie").toString()); //test 2617
}

function testRegexpPCRE_2596() {
  var regexp = /^[aeiou\d]{4,5}$/;
  assertEquals("1234", regexp.exec("1234").toString()); //test 2618
}

function testRegexpPCRE_2597() {
  var regexp = /^[aeiou\d]{4,5}$/;
  assertEquals("12345", regexp.exec("12345").toString()); //test 2619
}

function testRegexpPCRE_2598() {
  var regexp = /^[aeiou\d]{4,5}$/;
  assertEquals("aaaaa", regexp.exec("aaaaa").toString()); //test 2620
}

function testRegexpPCRE_2599() {
  var regexp = /^[aeiou\d]{4,5}$/;
  assertEquals(null, regexp.exec("*** Failers")); //test 2621
}

function testRegexpPCRE_2600() {
  var regexp = /^[aeiou\d]{4,5}$/;
  assertEquals(null, regexp.exec("123456")); //test 2622
}

function testRegexpPCRE_2601() {
  var regexp = /^[aeiou\d]{4,5}?/;
  assertEquals("uoie", regexp.exec("uoie").toString()); //test 2623
}

function testRegexpPCRE_2602() {
  var regexp = /^[aeiou\d]{4,5}?/;
  assertEquals("1234", regexp.exec("1234").toString()); //test 2624
}

function testRegexpPCRE_2603() {
  var regexp = /^[aeiou\d]{4,5}?/;
  assertEquals("1234", regexp.exec("12345").toString()); //test 2625
}

function testRegexpPCRE_2604() {
  var regexp = /^[aeiou\d]{4,5}?/;
  assertEquals("aaaa", regexp.exec("aaaaa").toString()); //test 2626
}

function testRegexpPCRE_2605() {
  var regexp = /^[aeiou\d]{4,5}?/;
  assertEquals("1234", regexp.exec("123456").toString()); //test 2627
}

function testRegexpPCRE_2606() {
  var regexp = /^From +([^ ]+) +[a-zA-Z][a-zA-Z][a-zA-Z] +[a-zA-Z][a-zA-Z][a-zA-Z] +[0-9]?[0-9] +[0-9][0-9]:[0-9][0-9]/;
  assertEquals("From abcd  Mon Sep 01 12:33,abcd", regexp.exec("From abcd  Mon Sep 01 12:33:02 1997").toString()); //test 2628
}

function testRegexpPCRE_2607() {
  var regexp = /^From\s+\S+\s+([a-zA-Z]{3}\s+){2}\d{1,2}\s+\d\d:\d\d/;
  assertEquals("From abcd  Mon Sep 01 12:33,Sep ", regexp.exec("From abcd  Mon Sep 01 12:33:02 1997").toString()); //test 2629
}

function testRegexpPCRE_2608() {
  var regexp = /^From\s+\S+\s+([a-zA-Z]{3}\s+){2}\d{1,2}\s+\d\d:\d\d/;
  assertEquals("From abcd  Mon Sep  1 12:33,Sep  ", regexp.exec("From abcd  Mon Sep  1 12:33:02 1997").toString()); //test 2630
}

function testRegexpPCRE_2609() {
  var regexp = /^From\s+\S+\s+([a-zA-Z]{3}\s+){2}\d{1,2}\s+\d\d:\d\d/;
  assertEquals(null, regexp.exec("*** Failers")); //test 2631
}

function testRegexpPCRE_2610() {
  var regexp = /^From\s+\S+\s+([a-zA-Z]{3}\s+){2}\d{1,2}\s+\d\d:\d\d/;
  assertEquals(null, regexp.exec("From abcd  Sep 01 12:33:02 1997")); //test 2632
}

function testRegexpPCRE_2611() {
  var regexp = /^12.34/;
  assertEquals(null, regexp.exec("12\n34")); //test 2633
}

function testRegexpPCRE_2612() {
  var regexp = /^12.34/;
  assertEquals(null, regexp.exec("12\x0d34")); //test 2634
}

function testRegexpPCRE_2613() {
  var regexp = /\w+(?=\t)/;
  assertEquals("brown", regexp.exec("the quick brown\x09 fox").toString()); //test 2635
}

function testRegexpPCRE_2614() {
  var regexp = /foo(?!bar)(.*)/;
  assertEquals("foolish see?,lish see?", regexp.exec("foobar is foolish see?").toString()); //test 2636
}

function testRegexpPCRE_2615() {
  var regexp = /(?:(?!foo)...|^.{0,2})bar(.*)/;
  assertEquals("rowbar etc, etc", regexp.exec("foobar crowbar etc").toString()); //test 2637
}

function testRegexpPCRE_2616() {
  var regexp = /(?:(?!foo)...|^.{0,2})bar(.*)/;
  assertEquals("barrel,rel", regexp.exec("barrel").toString()); //test 2638
}

function testRegexpPCRE_2617() {
  var regexp = /(?:(?!foo)...|^.{0,2})bar(.*)/;
  assertEquals("2barrel,rel", regexp.exec("2barrel").toString()); //test 2639
}

function testRegexpPCRE_2618() {
  var regexp = /(?:(?!foo)...|^.{0,2})bar(.*)/;
  assertEquals("A barrel,rel", regexp.exec("A barrel").toString()); //test 2640
}

function testRegexpPCRE_2619() {
  var regexp = /^(\D*)(?=\d)(?!123)/;
  assertEquals("abc,abc", regexp.exec("abc456").toString()); //test 2641
}

function testRegexpPCRE_2620() {
  var regexp = /^(\D*)(?=\d)(?!123)/;
  assertEquals(null, regexp.exec("*** Failers")); //test 2642
}

function testRegexpPCRE_2621() {
  var regexp = /^(\D*)(?=\d)(?!123)/;
  assertEquals(null, regexp.exec("abc123")); //test 2643
}

function testRegexpPCRE_2622() {
  var regexp = /^1234/;
  assertEquals("1234", regexp.exec("1234").toString()); //test 2644
}

function testRegexpPCRE_2623() {
  var regexp = /^1234/;
  assertEquals("1234", regexp.exec("1234").toString()); //test 2645
}

function testRegexpPCRE_2624() {
  var regexp = /abcd/;
  assertEquals("abcd", regexp.exec("abcd").toString()); //test 2646
}

function testRegexpPCRE_2625() {
  var regexp = /^abcd/;
  assertEquals("abcd", regexp.exec("abcd").toString()); //test 2647
}

function testRegexpPCRE_2626() {
  var regexp = /(?!^)abc/;
  assertEquals("abc", regexp.exec("the abc").toString()); //test 2648
}

function testRegexpPCRE_2627() {
  var regexp = /(?!^)abc/;
  assertEquals(null, regexp.exec("*** Failers")); //test 2649
}

function testRegexpPCRE_2628() {
  var regexp = /(?!^)abc/;
  assertEquals(null, regexp.exec("abc")); //test 2650
}

function testRegexpPCRE_2629() {
  var regexp = /(?=^)abc/;
  assertEquals("abc", regexp.exec("abc").toString()); //test 2651
}

function testRegexpPCRE_2630() {
  var regexp = /(?=^)abc/;
  assertEquals(null, regexp.exec("*** Failers")); //test 2652
}

function testRegexpPCRE_2631() {
  var regexp = /(?=^)abc/;
  assertEquals(null, regexp.exec("the abc")); //test 2653
}

function testRegexpPCRE_2632() {
  var regexp = /^[ab]{1,3}(ab*|b)/;
  assertEquals("aabb,b", regexp.exec("aabbbbb").toString()); //test 2654
}

function testRegexpPCRE_2633() {
  var regexp = /^[ab]{1,3}?(ab*|b)/;
  assertEquals("aabbbbb,abbbbb", regexp.exec("aabbbbb").toString()); //test 2655
}

function testRegexpPCRE_2634() {
  var regexp = /^[ab]{1,3}?(ab*?|b)/;
  assertEquals("aa,a", regexp.exec("aabbbbb").toString()); //test 2656
}

function testRegexpPCRE_2635() {
  var regexp = /^[ab]{1,3}(ab*?|b)/;
  assertEquals("aabb,b", regexp.exec("aabbbbb").toString()); //test 2657
}

function testRegexpPCRE_2636() {
  var regexp = /(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|"(?:[^\\\x80-\xff\n\015"]|\\[^\x80-\xff])*")(?:(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*\.(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|"(?:[^\\\x80-\xff\n\015"]|\\[^\x80-\xff])*"))*(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*@(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])(?:(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*\.(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\]))*|(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|"(?:[^\\\x80-\xff\n\015"]|\\[^\x80-\xff])*")(?:[^()<>@,;:".\\\[\]\x80-\xff\000-\010\012-\037]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\)|"(?:[^\\\x80-\xff\n\015"]|\\[^\x80-\xff])*")*<(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:@(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])(?:(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*\.(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\]))*(?:(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*,(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*@(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])(?:(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*\.(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\]))*)*:(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*)?(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|"(?:[^\\\x80-\xff\n\015"]|\\[^\x80-\xff])*")(?:(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*\.(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|"(?:[^\\\x80-\xff\n\015"]|\\[^\x80-\xff])*"))*(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*@(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])(?:(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*\.(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\]))*(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*>)(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*/;
  assertEquals("Alan Other <user@dom.ain>", regexp.exec("Alan Other <user@dom.ain>").toString()); //test 2658
}

function testRegexpPCRE_2637() {
  var regexp = /(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|"(?:[^\\\x80-\xff\n\015"]|\\[^\x80-\xff])*")(?:(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*\.(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|"(?:[^\\\x80-\xff\n\015"]|\\[^\x80-\xff])*"))*(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*@(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])(?:(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*\.(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\]))*|(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|"(?:[^\\\x80-\xff\n\015"]|\\[^\x80-\xff])*")(?:[^()<>@,;:".\\\[\]\x80-\xff\000-\010\012-\037]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\)|"(?:[^\\\x80-\xff\n\015"]|\\[^\x80-\xff])*")*<(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:@(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])(?:(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*\.(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\]))*(?:(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*,(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*@(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])(?:(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*\.(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\]))*)*:(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*)?(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|"(?:[^\\\x80-\xff\n\015"]|\\[^\x80-\xff])*")(?:(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*\.(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|"(?:[^\\\x80-\xff\n\015"]|\\[^\x80-\xff])*"))*(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*@(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])(?:(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*\.(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\]))*(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*>)(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*/;
  assertEquals("user@dom.ain", regexp.exec("<user@dom.ain>").toString()); //test 2659
}

function testRegexpPCRE_2638() {
  var regexp = /(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|"(?:[^\\\x80-\xff\n\015"]|\\[^\x80-\xff])*")(?:(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*\.(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|"(?:[^\\\x80-\xff\n\015"]|\\[^\x80-\xff])*"))*(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*@(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])(?:(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*\.(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\]))*|(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|"(?:[^\\\x80-\xff\n\015"]|\\[^\x80-\xff])*")(?:[^()<>@,;:".\\\[\]\x80-\xff\000-\010\012-\037]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\)|"(?:[^\\\x80-\xff\n\015"]|\\[^\x80-\xff])*")*<(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:@(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])(?:(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*\.(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\]))*(?:(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*,(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*@(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])(?:(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*\.(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\]))*)*:(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*)?(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|"(?:[^\\\x80-\xff\n\015"]|\\[^\x80-\xff])*")(?:(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*\.(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|"(?:[^\\\x80-\xff\n\015"]|\\[^\x80-\xff])*"))*(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*@(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])(?:(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*\.(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\]))*(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*>)(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*/;
  assertEquals("user@dom.ain", regexp.exec("user@dom.ain").toString()); //test 2660
}

function testRegexpPCRE_2639() {
  var regexp = /(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|"(?:[^\\\x80-\xff\n\015"]|\\[^\x80-\xff])*")(?:(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*\.(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|"(?:[^\\\x80-\xff\n\015"]|\\[^\x80-\xff])*"))*(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*@(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])(?:(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*\.(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\]))*|(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|"(?:[^\\\x80-\xff\n\015"]|\\[^\x80-\xff])*")(?:[^()<>@,;:".\\\[\]\x80-\xff\000-\010\012-\037]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\)|"(?:[^\\\x80-\xff\n\015"]|\\[^\x80-\xff])*")*<(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:@(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])(?:(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*\.(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\]))*(?:(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*,(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*@(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])(?:(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*\.(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\]))*)*:(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*)?(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|"(?:[^\\\x80-\xff\n\015"]|\\[^\x80-\xff])*")(?:(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*\.(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|"(?:[^\\\x80-\xff\n\015"]|\\[^\x80-\xff])*"))*(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*@(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])(?:(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*\.(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\]))*(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*>)(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*/;
  assertEquals("\"A. Other\" <user.1234@dom.ain> (a comment)", regexp.exec("\"A. Other\" <user.1234@dom.ain> (a comment)").toString()); //test 2661
}

function testRegexpPCRE_2640() {
  var regexp = /(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|"(?:[^\\\x80-\xff\n\015"]|\\[^\x80-\xff])*")(?:(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*\.(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|"(?:[^\\\x80-\xff\n\015"]|\\[^\x80-\xff])*"))*(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*@(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])(?:(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*\.(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\]))*|(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|"(?:[^\\\x80-\xff\n\015"]|\\[^\x80-\xff])*")(?:[^()<>@,;:".\\\[\]\x80-\xff\000-\010\012-\037]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\)|"(?:[^\\\x80-\xff\n\015"]|\\[^\x80-\xff])*")*<(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:@(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])(?:(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*\.(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\]))*(?:(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*,(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*@(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])(?:(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*\.(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\]))*)*:(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*)?(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|"(?:[^\\\x80-\xff\n\015"]|\\[^\x80-\xff])*")(?:(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*\.(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|"(?:[^\\\x80-\xff\n\015"]|\\[^\x80-\xff])*"))*(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*@(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])(?:(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*\.(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\]))*(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*>)(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*/;
  assertEquals(" Other <user.1234@dom.ain> (a comment)", regexp.exec("A. Other <user.1234@dom.ain> (a comment)").toString()); //test 2662
}

function testRegexpPCRE_2641() {
  var regexp = /(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|"(?:[^\\\x80-\xff\n\015"]|\\[^\x80-\xff])*")(?:(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*\.(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|"(?:[^\\\x80-\xff\n\015"]|\\[^\x80-\xff])*"))*(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*@(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])(?:(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*\.(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\]))*|(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|"(?:[^\\\x80-\xff\n\015"]|\\[^\x80-\xff])*")(?:[^()<>@,;:".\\\[\]\x80-\xff\000-\010\012-\037]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\)|"(?:[^\\\x80-\xff\n\015"]|\\[^\x80-\xff])*")*<(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:@(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])(?:(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*\.(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\]))*(?:(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*,(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*@(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])(?:(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*\.(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\]))*)*:(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*)?(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|"(?:[^\\\x80-\xff\n\015"]|\\[^\x80-\xff])*")(?:(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*\.(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|"(?:[^\\\x80-\xff\n\015"]|\\[^\x80-\xff])*"))*(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*@(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])(?:(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*\.(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\]))*(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*>)(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*/;
  assertEquals("\"/s=user/ou=host/o=place/prmd=uu.yy/admd= /c=gb/\"@x400-re.lay", regexp.exec("\"/s=user/ou=host/o=place/prmd=uu.yy/admd= /c=gb/\"@x400-re.lay").toString()); //test 2663
}

function testRegexpPCRE_2642() {
  var regexp = /(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|"(?:[^\\\x80-\xff\n\015"]|\\[^\x80-\xff])*")(?:(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*\.(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|"(?:[^\\\x80-\xff\n\015"]|\\[^\x80-\xff])*"))*(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*@(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])(?:(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*\.(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\]))*|(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|"(?:[^\\\x80-\xff\n\015"]|\\[^\x80-\xff])*")(?:[^()<>@,;:".\\\[\]\x80-\xff\000-\010\012-\037]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\)|"(?:[^\\\x80-\xff\n\015"]|\\[^\x80-\xff])*")*<(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:@(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])(?:(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*\.(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\]))*(?:(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*,(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*@(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])(?:(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*\.(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\]))*)*:(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*)?(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|"(?:[^\\\x80-\xff\n\015"]|\\[^\x80-\xff])*")(?:(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*\.(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|"(?:[^\\\x80-\xff\n\015"]|\\[^\x80-\xff])*"))*(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*@(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])(?:(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*\.(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\]))*(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*>)(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*/;
  assertEquals("user@some.where", regexp.exec("A missing angle <user@some.where").toString()); //test 2664
}

function testRegexpPCRE_2643() {
  var regexp = /(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|"(?:[^\\\x80-\xff\n\015"]|\\[^\x80-\xff])*")(?:(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*\.(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|"(?:[^\\\x80-\xff\n\015"]|\\[^\x80-\xff])*"))*(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*@(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])(?:(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*\.(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\]))*|(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|"(?:[^\\\x80-\xff\n\015"]|\\[^\x80-\xff])*")(?:[^()<>@,;:".\\\[\]\x80-\xff\000-\010\012-\037]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\)|"(?:[^\\\x80-\xff\n\015"]|\\[^\x80-\xff])*")*<(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:@(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])(?:(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*\.(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\]))*(?:(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*,(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*@(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])(?:(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*\.(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\]))*)*:(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*)?(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|"(?:[^\\\x80-\xff\n\015"]|\\[^\x80-\xff])*")(?:(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*\.(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|"(?:[^\\\x80-\xff\n\015"]|\\[^\x80-\xff])*"))*(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*@(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])(?:(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*\.(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\]))*(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*>)(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*/;
  assertEquals(null, regexp.exec("*** Failers")); //test 2665
}

function testRegexpPCRE_2644() {
  var regexp = /(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|"(?:[^\\\x80-\xff\n\015"]|\\[^\x80-\xff])*")(?:(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*\.(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|"(?:[^\\\x80-\xff\n\015"]|\\[^\x80-\xff])*"))*(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*@(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])(?:(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*\.(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\]))*|(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|"(?:[^\\\x80-\xff\n\015"]|\\[^\x80-\xff])*")(?:[^()<>@,;:".\\\[\]\x80-\xff\000-\010\012-\037]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\)|"(?:[^\\\x80-\xff\n\015"]|\\[^\x80-\xff])*")*<(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:@(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])(?:(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*\.(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\]))*(?:(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*,(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*@(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])(?:(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*\.(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\]))*)*:(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*)?(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|"(?:[^\\\x80-\xff\n\015"]|\\[^\x80-\xff])*")(?:(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*\.(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|"(?:[^\\\x80-\xff\n\015"]|\\[^\x80-\xff])*"))*(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*@(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])(?:(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*\.(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\]))*(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*>)(?:[\040\t]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff]|\((?:[^\\\x80-\xff\n\015()]|\\[^\x80-\xff])*\))*\))*/;
  assertEquals(null, regexp.exec("The quick brown fox")); //test 2666
}

function testRegexpPCRE_2645() {
  var regexp = /[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|"[^\\\x80-\xff\n\015"]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015"]*)*")[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:\.[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|"[^\\\x80-\xff\n\015"]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015"]*)*")[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*)*@[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:\.[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*)*|(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|"[^\\\x80-\xff\n\015"]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015"]*)*")[^()<>@,;:".\\\[\]\x80-\xff\000-\010\012-\037]*(?:(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)|"[^\\\x80-\xff\n\015"]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015"]*)*")[^()<>@,;:".\\\[\]\x80-\xff\000-\010\012-\037]*)*<[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:@[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:\.[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*)*(?:,[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*@[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:\.[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*)*)*:[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*)?(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|"[^\\\x80-\xff\n\015"]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015"]*)*")[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:\.[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|"[^\\\x80-\xff\n\015"]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015"]*)*")[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*)*@[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:\.[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*)*>)/;
  assertEquals("Alan Other <user@dom.ain>", regexp.exec("Alan Other <user@dom.ain>").toString()); //test 2667
}

function testRegexpPCRE_2646() {
  var regexp = /[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|"[^\\\x80-\xff\n\015"]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015"]*)*")[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:\.[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|"[^\\\x80-\xff\n\015"]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015"]*)*")[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*)*@[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:\.[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*)*|(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|"[^\\\x80-\xff\n\015"]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015"]*)*")[^()<>@,;:".\\\[\]\x80-\xff\000-\010\012-\037]*(?:(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)|"[^\\\x80-\xff\n\015"]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015"]*)*")[^()<>@,;:".\\\[\]\x80-\xff\000-\010\012-\037]*)*<[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:@[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:\.[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*)*(?:,[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*@[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:\.[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*)*)*:[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*)?(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|"[^\\\x80-\xff\n\015"]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015"]*)*")[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:\.[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|"[^\\\x80-\xff\n\015"]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015"]*)*")[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*)*@[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:\.[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*)*>)/;
  assertEquals("user@dom.ain", regexp.exec("<user@dom.ain>").toString()); //test 2668
}

function testRegexpPCRE_2647() {
  var regexp = /[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|"[^\\\x80-\xff\n\015"]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015"]*)*")[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:\.[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|"[^\\\x80-\xff\n\015"]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015"]*)*")[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*)*@[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:\.[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*)*|(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|"[^\\\x80-\xff\n\015"]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015"]*)*")[^()<>@,;:".\\\[\]\x80-\xff\000-\010\012-\037]*(?:(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)|"[^\\\x80-\xff\n\015"]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015"]*)*")[^()<>@,;:".\\\[\]\x80-\xff\000-\010\012-\037]*)*<[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:@[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:\.[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*)*(?:,[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*@[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:\.[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*)*)*:[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*)?(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|"[^\\\x80-\xff\n\015"]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015"]*)*")[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:\.[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|"[^\\\x80-\xff\n\015"]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015"]*)*")[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*)*@[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:\.[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*)*>)/;
  assertEquals("user@dom.ain", regexp.exec("user@dom.ain").toString()); //test 2669
}

function testRegexpPCRE_2648() {
  var regexp = /[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|"[^\\\x80-\xff\n\015"]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015"]*)*")[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:\.[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|"[^\\\x80-\xff\n\015"]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015"]*)*")[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*)*@[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:\.[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*)*|(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|"[^\\\x80-\xff\n\015"]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015"]*)*")[^()<>@,;:".\\\[\]\x80-\xff\000-\010\012-\037]*(?:(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)|"[^\\\x80-\xff\n\015"]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015"]*)*")[^()<>@,;:".\\\[\]\x80-\xff\000-\010\012-\037]*)*<[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:@[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:\.[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*)*(?:,[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*@[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:\.[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*)*)*:[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*)?(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|"[^\\\x80-\xff\n\015"]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015"]*)*")[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:\.[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|"[^\\\x80-\xff\n\015"]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015"]*)*")[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*)*@[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:\.[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*)*>)/;
  assertEquals("\"A. Other\" <user.1234@dom.ain>", regexp.exec("\"A. Other\" <user.1234@dom.ain> (a comment)").toString()); //test 2670
}

function testRegexpPCRE_2649() {
  var regexp = /[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|"[^\\\x80-\xff\n\015"]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015"]*)*")[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:\.[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|"[^\\\x80-\xff\n\015"]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015"]*)*")[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*)*@[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:\.[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*)*|(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|"[^\\\x80-\xff\n\015"]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015"]*)*")[^()<>@,;:".\\\[\]\x80-\xff\000-\010\012-\037]*(?:(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)|"[^\\\x80-\xff\n\015"]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015"]*)*")[^()<>@,;:".\\\[\]\x80-\xff\000-\010\012-\037]*)*<[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:@[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:\.[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*)*(?:,[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*@[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:\.[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*)*)*:[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*)?(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|"[^\\\x80-\xff\n\015"]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015"]*)*")[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:\.[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|"[^\\\x80-\xff\n\015"]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015"]*)*")[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*)*@[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:\.[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*)*>)/;
  assertEquals(" Other <user.1234@dom.ain>", regexp.exec("A. Other <user.1234@dom.ain> (a comment)").toString()); //test 2671
}

function testRegexpPCRE_2650() {
  var regexp = /[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|"[^\\\x80-\xff\n\015"]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015"]*)*")[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:\.[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|"[^\\\x80-\xff\n\015"]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015"]*)*")[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*)*@[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:\.[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*)*|(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|"[^\\\x80-\xff\n\015"]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015"]*)*")[^()<>@,;:".\\\[\]\x80-\xff\000-\010\012-\037]*(?:(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)|"[^\\\x80-\xff\n\015"]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015"]*)*")[^()<>@,;:".\\\[\]\x80-\xff\000-\010\012-\037]*)*<[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:@[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:\.[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*)*(?:,[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*@[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:\.[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*)*)*:[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*)?(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|"[^\\\x80-\xff\n\015"]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015"]*)*")[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:\.[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|"[^\\\x80-\xff\n\015"]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015"]*)*")[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*)*@[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:\.[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*)*>)/;
  assertEquals("\"/s=user/ou=host/o=place/prmd=uu.yy/admd= /c=gb/\"@x400-re.lay", regexp.exec("\"/s=user/ou=host/o=place/prmd=uu.yy/admd= /c=gb/\"@x400-re.lay").toString()); //test 2672
}

function testRegexpPCRE_2651() {
  var regexp = /[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|"[^\\\x80-\xff\n\015"]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015"]*)*")[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:\.[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|"[^\\\x80-\xff\n\015"]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015"]*)*")[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*)*@[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:\.[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*)*|(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|"[^\\\x80-\xff\n\015"]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015"]*)*")[^()<>@,;:".\\\[\]\x80-\xff\000-\010\012-\037]*(?:(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)|"[^\\\x80-\xff\n\015"]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015"]*)*")[^()<>@,;:".\\\[\]\x80-\xff\000-\010\012-\037]*)*<[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:@[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:\.[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*)*(?:,[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*@[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:\.[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*)*)*:[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*)?(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|"[^\\\x80-\xff\n\015"]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015"]*)*")[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:\.[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|"[^\\\x80-\xff\n\015"]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015"]*)*")[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*)*@[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:\.[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*)*>)/;
  assertEquals("user@some.where", regexp.exec("A missing angle <user@some.where").toString()); //test 2673
}

function testRegexpPCRE_2652() {
  var regexp = /[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|"[^\\\x80-\xff\n\015"]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015"]*)*")[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:\.[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|"[^\\\x80-\xff\n\015"]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015"]*)*")[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*)*@[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:\.[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*)*|(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|"[^\\\x80-\xff\n\015"]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015"]*)*")[^()<>@,;:".\\\[\]\x80-\xff\000-\010\012-\037]*(?:(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)|"[^\\\x80-\xff\n\015"]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015"]*)*")[^()<>@,;:".\\\[\]\x80-\xff\000-\010\012-\037]*)*<[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:@[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:\.[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*)*(?:,[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*@[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:\.[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*)*)*:[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*)?(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|"[^\\\x80-\xff\n\015"]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015"]*)*")[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:\.[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|"[^\\\x80-\xff\n\015"]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015"]*)*")[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*)*@[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:\.[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*)*>)/;
  assertEquals(null, regexp.exec("*** Failers")); //test 2674
}

function testRegexpPCRE_2653() {
  var regexp = /[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|"[^\\\x80-\xff\n\015"]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015"]*)*")[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:\.[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|"[^\\\x80-\xff\n\015"]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015"]*)*")[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*)*@[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:\.[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*)*|(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|"[^\\\x80-\xff\n\015"]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015"]*)*")[^()<>@,;:".\\\[\]\x80-\xff\000-\010\012-\037]*(?:(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)|"[^\\\x80-\xff\n\015"]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015"]*)*")[^()<>@,;:".\\\[\]\x80-\xff\000-\010\012-\037]*)*<[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:@[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:\.[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*)*(?:,[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*@[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:\.[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*)*)*:[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*)?(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|"[^\\\x80-\xff\n\015"]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015"]*)*")[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:\.[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|"[^\\\x80-\xff\n\015"]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015"]*)*")[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*)*@[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:\.[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*)*>)/;
  assertEquals(null, regexp.exec("The quick brown fox")); //test 2675
}

function testRegexpPCRE_2654() {
  var regexp = /[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|"[^\\\x80-\xff\n\015"]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015"]*)*")[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:\.[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|"[^\\\x80-\xff\n\015"]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015"]*)*")[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*)*@[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:\.[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*)*|(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|"[^\\\x80-\xff\n\015"]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015"]*)*")[^()<>@,;:".\\\[\]\x80-\xff\000-\010\012-\037]*(?:(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)|"[^\\\x80-\xff\n\015"]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015"]*)*")[^()<>@,;:".\\\[\]\x80-\xff\000-\010\012-\037]*)*<[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:@[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:\.[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*)*(?:,[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*@[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:\.[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*)*)*:[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*)?(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|"[^\\\x80-\xff\n\015"]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015"]*)*")[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:\.[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|"[^\\\x80-\xff\n\015"]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015"]*)*")[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*)*@[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:\.[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*)*>)/;
  assertEquals(null, regexp.exec("abc\x00def\x00pqr\x00xyz\x000AB")); //test 2676
}

function testRegexpPCRE_2655() {
  var regexp = /[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|"[^\\\x80-\xff\n\015"]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015"]*)*")[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:\.[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|"[^\\\x80-\xff\n\015"]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015"]*)*")[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*)*@[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:\.[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*)*|(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|"[^\\\x80-\xff\n\015"]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015"]*)*")[^()<>@,;:".\\\[\]\x80-\xff\000-\010\012-\037]*(?:(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)|"[^\\\x80-\xff\n\015"]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015"]*)*")[^()<>@,;:".\\\[\]\x80-\xff\000-\010\012-\037]*)*<[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:@[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:\.[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*)*(?:,[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*@[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:\.[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*)*)*:[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*)?(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|"[^\\\x80-\xff\n\015"]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015"]*)*")[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:\.[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|"[^\\\x80-\xff\n\015"]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015"]*)*")[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*)*@[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:\.[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*(?:[^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff]+(?![^(\040)<>@,;:".\\\[\]\000-\037\x80-\xff])|\[(?:[^\\\x80-\xff\n\015\[\]]|\\[^\x80-\xff])*\])[\040\t]*(?:\([^\\\x80-\xff\n\015()]*(?:(?:\\[^\x80-\xff]|\([^\\\x80-\xff\n\015()]*(?:\\[^\x80-\xff][^\\\x80-\xff\n\015()]*)*\))[^\\\x80-\xff\n\015()]*)*\)[\040\t]*)*)*>)/;
  assertEquals(null, regexp.exec("abc456 abc\x00def\x00pqr\x00xyz\x000ABCDE")); //test 2677
}

function testRegexpPCRE_2656() {
  var regexp = /abc\x0def\x00pqr\x000xyz\x0000AB/;
  assertEquals("abc\x0def\x00pqr\x000xyz\x0000AB", regexp.exec("abc\x0def\x00pqr\x000xyz\x0000AB").toString()); //test 2678
}

function testRegexpPCRE_2657() {
  var regexp = /abc\x0def\x00pqr\x000xyz\x0000AB/;
  assertEquals("abc\x0def\x00pqr\x000xyz\x0000AB", regexp.exec("abc456 abc\x0def\x00pqr\x000xyz\x0000ABCDE").toString()); //test 2679
}

function testRegexpPCRE_2658() {
  var regexp = /^[\000-\037]/;
  assertEquals("\x00", regexp.exec("\x00A").toString()); //test 2680
}

function testRegexpPCRE_2659() {
  var regexp = /^[\000-\037]/;
  assertEquals("\x01", regexp.exec("\x01B").toString()); //test 2681
}

function testRegexpPCRE_2660() {
  var regexp = /^[\000-\037]/;
  assertEquals("\x1f", regexp.exec("\x1fC").toString()); //test 2682
}

function testRegexpPCRE_2661() {
  var regexp = /\0*/;
  assertEquals("\x00\x00\x00\x00", regexp.exec("\x00\x00\x00\x00").toString()); //test 2683
}

function testRegexpPCRE_2662() {
  var regexp = /A\x0{2,3}Z/;
  assertEquals(null, regexp.exec("The Ax0x0Z")); //test 2684
}

function testRegexpPCRE_2663() {
  var regexp = /A\x0{2,3}Z/;
  assertEquals(null, regexp.exec("An A\x00x0\x00Z")); //test 2685
}

function testRegexpPCRE_2664() {
  var regexp = /A\x0{2,3}Z/;
  assertEquals(null, regexp.exec("*** Failers")); //test 2686
}

function testRegexpPCRE_2665() {
  var regexp = /A\x0{2,3}Z/;
  assertEquals(null, regexp.exec("A\x00Z")); //test 2687
}

function testRegexpPCRE_2666() {
  var regexp = /A\x0{2,3}Z/;
  assertEquals(null, regexp.exec("A\x00x0\x00x0Z")); //test 2688
}

function testRegexpPCRE_2667() {
  var regexp = /^\s/;
  assertEquals(" ", regexp.exec(" abc").toString()); //test 2689
}

function testRegexpPCRE_2668() {
  var regexp = /^\s/;
  assertEquals("\x0c", regexp.exec("\x0cabc").toString()); //test 2690
}

function testRegexpPCRE_2669() {
  var regexp = /^\s/;
  assertEquals("\n", regexp.exec("\nabc").toString()); //test 2691
}

function testRegexpPCRE_2670() {
  var regexp = /^\s/;
  assertEquals("\x0d", regexp.exec("\x0dabc").toString()); //test 2692
}

function testRegexpPCRE_2671() {
  var regexp = /^\s/;
  assertEquals("\x09", regexp.exec("\x09abc").toString()); //test 2693
}

function testRegexpPCRE_2672() {
  var regexp = /^\s/;
  assertEquals(null, regexp.exec("*** Failers")); //test 2694
}

function testRegexpPCRE_2673() {
  var regexp = /^\s/;
  assertEquals(null, regexp.exec("abc")); //test 2695
}

function testRegexpPCRE_2674() {
  var regexp = /^abc/;
  assertEquals("abc", regexp.exec("abc").toString()); //test 2696
}

function testRegexpPCRE_2675() {
  var regexp = /ab{1,3}bc/;
  assertEquals("abbbbc", regexp.exec("abbbbc").toString()); //test 2697
}

function testRegexpPCRE_2676() {
  var regexp = /ab{1,3}bc/;
  assertEquals("abbbc", regexp.exec("abbbc").toString()); //test 2698
}

function testRegexpPCRE_2677() {
  var regexp = /ab{1,3}bc/;
  assertEquals("abbc", regexp.exec("abbc").toString()); //test 2699
}

function testRegexpPCRE_2678() {
  var regexp = /ab{1,3}bc/;
  assertEquals(null, regexp.exec("*** Failers")); //test 2700
}

function testRegexpPCRE_2679() {
  var regexp = /ab{1,3}bc/;
  assertEquals(null, regexp.exec("abc")); //test 2701
}

function testRegexpPCRE_2680() {
  var regexp = /ab{1,3}bc/;
  assertEquals(null, regexp.exec("abbbbbc")); //test 2702
}

function testRegexpPCRE_2681() {
  var regexp = /([^.]*)\.([^:]*):[T ]+(.*)/;
  assertEquals("track1.title:TBlah blah blah,track1,title,Blah blah blah", regexp.exec("track1.title:TBlah blah blah").toString()); //test 2703
}

function testRegexpPCRE_2682() {
  var regexp = /([^.]*)\.([^:]*):[T ]+(.*)/i;
  assertEquals("track1.title:TBlah blah blah,track1,title,Blah blah blah", regexp.exec("track1.title:TBlah blah blah").toString()); //test 2704
}

function testRegexpPCRE_2683() {
  var regexp = /([^.]*)\.([^:]*):[t ]+(.*)/i;
  assertEquals("track1.title:TBlah blah blah,track1,title,Blah blah blah", regexp.exec("track1.title:TBlah blah blah").toString()); //test 2705
}

function testRegexpPCRE_2684() {
  var regexp = /^[W-c]+$/;
  assertEquals("WXY_^abc", regexp.exec("WXY_^abc").toString()); //test 2706
}

function testRegexpPCRE_2685() {
  var regexp = /^[W-c]+$/;
  assertEquals(null, regexp.exec("*** Failers")); //test 2707
}

function testRegexpPCRE_2686() {
  var regexp = /^[W-c]+$/;
  assertEquals(null, regexp.exec("wxy")); //test 2708
}

function testRegexpPCRE_2687() {
  var regexp = /^[W-c]+$/i;
  assertEquals("WXY_^abc", regexp.exec("WXY_^abc").toString()); //test 2709
}

function testRegexpPCRE_2688() {
  var regexp = /^[W-c]+$/i;
  assertEquals("wxy_^ABC", regexp.exec("wxy_^ABC").toString()); //test 2710
}

function testRegexpPCRE_2689() {
  var regexp = /^[\x3f-\x5F]+$/i;
  assertEquals("WXY_^abc", regexp.exec("WXY_^abc").toString()); //test 2711
}

function testRegexpPCRE_2690() {
  var regexp = /^[\x3f-\x5F]+$/i;
  assertEquals("wxy_^ABC", regexp.exec("wxy_^ABC").toString()); //test 2712
}

function testRegexpPCRE_2691() {
  var regexp = /^abc$/m;
  assertEquals("abc", regexp.exec("abc").toString()); //test 2713
}

function testRegexpPCRE_2692() {
  var regexp = /^abc$/m;
  assertEquals("abc", regexp.exec("qqq\nabc").toString()); //test 2714
}

function testRegexpPCRE_2693() {
  var regexp = /^abc$/m;
  assertEquals("abc", regexp.exec("abc\nzzz").toString()); //test 2715
}

function testRegexpPCRE_2694() {
  var regexp = /^abc$/m;
  assertEquals("abc", regexp.exec("qqq\nabc\nzzz").toString()); //test 2716
}

function testRegexpPCRE_2695() {
  var regexp = /^abc$/;
  assertEquals("abc", regexp.exec("abc").toString()); //test 2717
}

function testRegexpPCRE_2696() {
  var regexp = /^abc$/;
  assertEquals(null, regexp.exec("*** Failers")); //test 2718
}

function testRegexpPCRE_2697() {
  var regexp = /^abc$/;
  assertEquals(null, regexp.exec("qqq\nabc")); //test 2719
}

function testRegexpPCRE_2698() {
  var regexp = /^abc$/;
  assertEquals(null, regexp.exec("abc\nzzz")); //test 2720
}

function testRegexpPCRE_2699() {
  var regexp = /^abc$/;
  assertEquals(null, regexp.exec("qqq\nabc\nzzz")); //test 2721
}

function testRegexpPCRE_2700() {
  var regexp = /\Aabc\Z/m;
  assertEquals(null, regexp.exec("abc")); //test 2722
}

function testRegexpPCRE_2701() {
  var regexp = /\Aabc\Z/m;
  assertEquals(null, regexp.exec("abc\n ")); //test 2723
}

function testRegexpPCRE_2702() {
  var regexp = /\Aabc\Z/m;
  assertEquals(null, regexp.exec("*** Failers")); //test 2724
}

function testRegexpPCRE_2703() {
  var regexp = /\Aabc\Z/m;
  assertEquals(null, regexp.exec("qqq\nabc")); //test 2725
}

function testRegexpPCRE_2704() {
  var regexp = /\Aabc\Z/m;
  assertEquals(null, regexp.exec("abc\nzzz")); //test 2726
}

function testRegexpPCRE_2705() {
  var regexp = /\Aabc\Z/m;
  assertEquals(null, regexp.exec("qqq\nabc\nzzz")); //test 2727
}

function testRegexpPCRE_2706() {
  var regexp = /\A(.)*\Z/;
  assertEquals(null, regexp.exec("abc\ndef")); //test 2728
}

function testRegexpPCRE_2707() {
  var regexp = /\A(.)*\Z/m;
  assertEquals(null, regexp.exec("*** Failers")); //test 2729
}

function testRegexpPCRE_2708() {
  var regexp = /\A(.)*\Z/m;
  assertEquals(null, regexp.exec("abc\ndef")); //test 2730
}

function testRegexpPCRE_2709() {
  var regexp = /(?:b)|(?::+)/;
  assertEquals("b", regexp.exec("b::c").toString()); //test 2731
}

function testRegexpPCRE_2710() {
  var regexp = /(?:b)|(?::+)/;
  assertEquals("::", regexp.exec("c::b").toString()); //test 2732
}

function testRegexpPCRE_2711() {
  var regexp = /[-az]+/;
  assertEquals("az-", regexp.exec("az-").toString()); //test 2733
}

function testRegexpPCRE_2712() {
  var regexp = /[-az]+/;
  assertEquals("a", regexp.exec("*** Failers").toString()); //test 2734
}

function testRegexpPCRE_2713() {
  var regexp = /[-az]+/;
  assertEquals(null, regexp.exec("b")); //test 2735
}

function testRegexpPCRE_2714() {
  var regexp = /[az-]+/;
  assertEquals("za-", regexp.exec("za-").toString()); //test 2736
}

function testRegexpPCRE_2715() {
  var regexp = /[az-]+/;
  assertEquals("a", regexp.exec("*** Failers").toString()); //test 2737
}

function testRegexpPCRE_2716() {
  var regexp = /[az-]+/;
  assertEquals(null, regexp.exec("b")); //test 2738
}

function testRegexpPCRE_2717() {
  var regexp = /[a\-z]+/;
  assertEquals("a-z", regexp.exec("a-z").toString()); //test 2739
}

function testRegexpPCRE_2718() {
  var regexp = /[a\-z]+/;
  assertEquals("a", regexp.exec("*** Failers").toString()); //test 2740
}

function testRegexpPCRE_2719() {
  var regexp = /[a\-z]+/;
  assertEquals(null, regexp.exec("b")); //test 2741
}

function testRegexpPCRE_2720() {
  var regexp = /[a-z]+/;
  assertEquals("abcdxyz", regexp.exec("abcdxyz").toString()); //test 2742
}

function testRegexpPCRE_2721() {
  var regexp = /[\d-]+/;
  assertEquals("12-34", regexp.exec("12-34").toString()); //test 2743
}

function testRegexpPCRE_2722() {
  var regexp = /[\d-]+/;
  assertEquals(null, regexp.exec("*** Failers")); //test 2744
}

function testRegexpPCRE_2723() {
  var regexp = /[\d-]+/;
  assertEquals(null, regexp.exec("aaa")); //test 2745
}

function testRegexpPCRE_2724() {
  var regexp = /[\d-z]+/;
  assertEquals("12-34z", regexp.exec("12-34z").toString()); //test 2746
}

function testRegexpPCRE_2725() {
  var regexp = /[\d-z]+/;
  assertEquals(null, regexp.exec("*** Failers")); //test 2747
}

function testRegexpPCRE_2726() {
  var regexp = /[\d-z]+/;
  assertEquals(null, regexp.exec("aaa")); //test 2748
}

function testRegexpPCRE_2727() {
  var regexp = /\x5c/;
  assertEquals("\\", regexp.exec("\\\\").toString()); //test 2749
}

function testRegexpPCRE_2728() {
  var regexp = /\x20Z/;
  assertEquals(" Z", regexp.exec("the Zoo").toString()); //test 2750
}

function testRegexpPCRE_2729() {
  var regexp = /\x20Z/;
  assertEquals(null, regexp.exec("*** Failers")); //test 2751
}

function testRegexpPCRE_2730() {
  var regexp = /\x20Z/;
  assertEquals(null, regexp.exec("Zulu")); //test 2752
}

function testRegexpPCRE_2731() {
  var regexp = /ab{3cd/;
  assertEquals("ab{3cd", regexp.exec("ab{3cd").toString()); //test 2753
}

function testRegexpPCRE_2732() {
  var regexp = /ab{3,cd/;
  assertEquals("ab{3,cd", regexp.exec("ab{3,cd").toString()); //test 2754
}

function testRegexpPCRE_2733() {
  var regexp = /ab{3,4a}cd/;
  assertEquals("ab{3,4a}cd", regexp.exec("ab{3,4a}cd").toString()); //test 2755
}

function testRegexpPCRE_2734() {
  var regexp = /{4,5a}bc/;
  assertEquals("{4,5a}bc", regexp.exec("{4,5a}bc").toString()); //test 2756
}

function testRegexpPCRE_2735() {
  var regexp = /^a.b/;
  assertEquals(null, regexp.exec("a\x0db")); //test 2757
}

function testRegexpPCRE_2736() {
  var regexp = /^a.b/;
  assertEquals(null, regexp.exec("*** Failers")); //test 2758
}

function testRegexpPCRE_2737() {
  var regexp = /^a.b/;
  assertEquals(null, regexp.exec("a\nb")); //test 2759
}

function testRegexpPCRE_2738() {
  var regexp = /abc$/;
  assertEquals("abc", regexp.exec("abc").toString()); //test 2760
}

function testRegexpPCRE_2739() {
  var regexp = /abc$/;
  assertEquals(null, regexp.exec("abc\n")); //test 2761
}

function testRegexpPCRE_2740() {
  var regexp = /abc$/;
  assertEquals(null, regexp.exec("*** Failers")); //test 2762
}

function testRegexpPCRE_2741() {
  var regexp = /abc$/;
  assertEquals(null, regexp.exec("abc\ndef")); //test 2763
}

function testRegexpPCRE_2742() {
  var regexp = /(abc)\123/;
  assertEquals("abcS,abc", regexp.exec("abcS").toString()); //test 2764
}

function testRegexpPCRE_2743() {
  var regexp = /(abc)\223/;
  assertEquals("abc\x93,abc", regexp.exec("abc\x93").toString()); //test 2765
}

function testRegexpPCRE_2744() {
  var regexp = /(abc)\323/;
  assertEquals("abc\xd3,abc", regexp.exec("abc\xd3").toString()); //test 2766
}

function testRegexpPCRE_2745() {
  var regexp = /(abc)\100/;
  assertEquals("abc@,abc", regexp.exec("abc@").toString()); //test 2767
}

function testRegexpPCRE_2746() {
  var regexp = /(abc)\100/;
  assertEquals("abc@,abc", regexp.exec("abc@").toString()); //test 2768
}

function testRegexpPCRE_2747() {
  var regexp = /(abc)\100/;
  assertEquals("abc@,abc", regexp.exec("abc@0").toString()); //test 2769
}

function testRegexpPCRE_2748() {
  var regexp = /(abc)\100/;
  assertEquals("abc@,abc", regexp.exec("abc@0").toString()); //test 2770
}

function testRegexpPCRE_2749() {
  var regexp = /(abc)\100/;
  assertEquals("abc@,abc", regexp.exec("abc@0").toString()); //test 2771
}

function testRegexpPCRE_2750() {
  var regexp = /(abc)\100/;
  assertEquals("abc@,abc", regexp.exec("abc@0").toString()); //test 2772
}

function testRegexpPCRE_2751() {
  var regexp = /(abc)\100/;
  assertEquals("abc@,abc", regexp.exec("abc@0").toString()); //test 2773
}

function testRegexpPCRE_2752() {
  var regexp = /(abc)\100/;
  assertEquals("abc@,abc", regexp.exec("abc@0").toString()); //test 2774
}

function testRegexpPCRE_2753() {
  var regexp = /abc\81/;
  assertEquals(null, regexp.exec("abc\x0081")); //test 2775
}

function testRegexpPCRE_2754() {
  var regexp = /abc\81/;
  assertEquals(null, regexp.exec("abc\x0081")); //test 2776
}

function testRegexpPCRE_2755() {
  var regexp = /abc\91/;
  assertEquals(null, regexp.exec("abc\x0091")); //test 2777
}

function testRegexpPCRE_2756() {
  var regexp = /abc\91/;
  assertEquals(null, regexp.exec("abc\x0091")); //test 2778
}

function testRegexpPCRE_2757() {
  var regexp = /(a)(b)(c)(d)(e)(f)(g)(h)(i)(j)(k)\12\123/;
  assertEquals("abcdefghijk\nS,a,b,c,d,e,f,g,h,i,j,k", regexp.exec("abcdefghijk\nS").toString()); //test 2779
}

function testRegexpPCRE_2758() {
  var regexp = /ab\idef/;
  assertEquals("abidef", regexp.exec("abidef").toString()); //test 2780
}

function testRegexpPCRE_2759() {
  var regexp = /a{0}bc/;
  assertEquals("bc", regexp.exec("bc").toString()); //test 2781
}

function testRegexpPCRE_2760() {
  var regexp = /(a|(bc)){0,0}?xyz/;
  assertEquals("xyz,,", regexp.exec("xyz").toString()); //test 2782
}

function testRegexpPCRE_2761() {
  var regexp = /abc[\10]de/;
  assertEquals("abc\x08de", regexp.exec("abc\x08de").toString()); //test 2783
}

function testRegexpPCRE_2762() {
  var regexp = /abc[\1]de/;
  assertEquals("abc\x01de", regexp.exec("abc\x01de").toString()); //test 2784
}

function testRegexpPCRE_2763() {
  var regexp = /(abc)[\1]de/;
  assertEquals("abc\x01de,abc", regexp.exec("abc\x01de").toString()); //test 2785
}

function testRegexpPCRE_2764() {
  var regexp = /(abc)[\1]de/;
  assertEquals(null, regexp.exec("a\nb")); //test 2786
}

function testRegexpPCRE_2765() {
  var regexp = /^([^a])([^\b])([^c]*)([^d]{3,4})/;
  assertEquals("baNOTcccc,b,a,NOT,cccc", regexp.exec("baNOTccccd").toString()); //test 2787
}

function testRegexpPCRE_2766() {
  var regexp = /^([^a])([^\b])([^c]*)([^d]{3,4})/;
  assertEquals("baNOTccc,b,a,NOT,ccc", regexp.exec("baNOTcccd").toString()); //test 2788
}

function testRegexpPCRE_2767() {
  var regexp = /^([^a])([^\b])([^c]*)([^d]{3,4})/;
  assertEquals("baNOTcc,b,a,NO,Tcc", regexp.exec("baNOTccd").toString()); //test 2789
}

function testRegexpPCRE_2768() {
  var regexp = /^([^a])([^\b])([^c]*)([^d]{3,4})/;
  assertEquals("baccc,b,a,,ccc", regexp.exec("bacccd").toString()); //test 2790
}

function testRegexpPCRE_2769() {
  var regexp = /^([^a])([^\b])([^c]*)([^d]{3,4})/;
  assertEquals("*** Failers,*,*,* Fail,ers", regexp.exec("*** Failers").toString()); //test 2791
}

function testRegexpPCRE_2770() {
  var regexp = /^([^a])([^\b])([^c]*)([^d]{3,4})/;
  assertEquals(null, regexp.exec("anything")); //test 2792
}

function testRegexpPCRE_2771() {
  var regexp = /^([^a])([^\b])([^c]*)([^d]{3,4})/;
  assertEquals(null, regexp.exec("b\x08c   ")); //test 2793
}

function testRegexpPCRE_2772() {
  var regexp = /^([^a])([^\b])([^c]*)([^d]{3,4})/;
  assertEquals(null, regexp.exec("baccd")); //test 2794
}

function testRegexpPCRE_2773() {
  var regexp = /[^a]/;
  assertEquals("A", regexp.exec("Abc").toString()); //test 2795
}

function testRegexpPCRE_2774() {
  var regexp = /[^a]/i;
  assertEquals("b", regexp.exec("Abc ").toString()); //test 2796
}

function testRegexpPCRE_2775() {
  var regexp = /[^a]+/;
  assertEquals("AAA", regexp.exec("AAAaAbc").toString()); //test 2797
}

function testRegexpPCRE_2776() {
  var regexp = /[^a]+/i;
  assertEquals("bc ", regexp.exec("AAAaAbc ").toString()); //test 2798
}

function testRegexpPCRE_2777() {
  var regexp = /[^a]+/;
  assertEquals("bbb\nccc", regexp.exec("bbb\nccc").toString()); //test 2799
}

function testRegexpPCRE_2778() {
  var regexp = /[^k]$/;
  assertEquals("c", regexp.exec("abc").toString()); //test 2800
}

function testRegexpPCRE_2779() {
  var regexp = /[^k]$/;
  assertEquals("s", regexp.exec("*** Failers").toString()); //test 2801
}

function testRegexpPCRE_2780() {
  var regexp = /[^k]$/;
  assertEquals(" ", regexp.exec("abk   ").toString()); //test 2802
}

function testRegexpPCRE_2781() {
  var regexp = /[^k]{2,3}$/;
  assertEquals("abc", regexp.exec("abc").toString()); //test 2803
}

function testRegexpPCRE_2782() {
  var regexp = /[^k]{2,3}$/;
  assertEquals("bc", regexp.exec("kbc").toString()); //test 2804
}

function testRegexpPCRE_2783() {
  var regexp = /[^k]{2,3}$/;
  assertEquals("bc ", regexp.exec("kabc ").toString()); //test 2805
}

function testRegexpPCRE_2784() {
  var regexp = /[^k]{2,3}$/;
  assertEquals("ers", regexp.exec("*** Failers").toString()); //test 2806
}

function testRegexpPCRE_2785() {
  var regexp = /[^k]{2,3}$/;
  assertEquals(null, regexp.exec("abk")); //test 2807
}

function testRegexpPCRE_2786() {
  var regexp = /[^k]{2,3}$/;
  assertEquals(null, regexp.exec("akb")); //test 2808
}

function testRegexpPCRE_2787() {
  var regexp = /[^k]{2,3}$/;
  assertEquals(null, regexp.exec("akk ")); //test 2809
}

function testRegexpPCRE_2788() {
  var regexp = /^\d{8,}\@.+[^k]$/;
  assertEquals("12345678@a.b.c.d", regexp.exec("12345678@a.b.c.d").toString()); //test 2810
}

function testRegexpPCRE_2789() {
  var regexp = /^\d{8,}\@.+[^k]$/;
  assertEquals("123456789@x.y.z", regexp.exec("123456789@x.y.z").toString()); //test 2811
}

function testRegexpPCRE_2790() {
  var regexp = /^\d{8,}\@.+[^k]$/;
  assertEquals(null, regexp.exec("*** Failers")); //test 2812
}

function testRegexpPCRE_2791() {
  var regexp = /^\d{8,}\@.+[^k]$/;
  assertEquals(null, regexp.exec("12345678@x.y.uk")); //test 2813
}

function testRegexpPCRE_2792() {
  var regexp = /^\d{8,}\@.+[^k]$/;
  assertEquals(null, regexp.exec("1234567@a.b.c.d       ")); //test 2814
}

function testRegexpPCRE_2793() {
  var regexp = /[^a]/;
  assertEquals("b", regexp.exec("aaaabcd").toString()); //test 2815
}

function testRegexpPCRE_2794() {
  var regexp = /[^a]/;
  assertEquals("A", regexp.exec("aaAabcd ").toString()); //test 2816
}

function testRegexpPCRE_2795() {
  var regexp = /[^a]/i;
  assertEquals("b", regexp.exec("aaaabcd").toString()); //test 2817
}

function testRegexpPCRE_2796() {
  var regexp = /[^a]/i;
  assertEquals("b", regexp.exec("aaAabcd ").toString()); //test 2818
}

function testRegexpPCRE_2797() {
  var regexp = /[^az]/;
  assertEquals("b", regexp.exec("aaaabcd").toString()); //test 2819
}

function testRegexpPCRE_2798() {
  var regexp = /[^az]/;
  assertEquals("A", regexp.exec("aaAabcd ").toString()); //test 2820
}

function testRegexpPCRE_2799() {
  var regexp = /[^az]/i;
  assertEquals("b", regexp.exec("aaaabcd").toString()); //test 2821
}

function testRegexpPCRE_2800() {
  var regexp = /[^az]/i;
  assertEquals("b", regexp.exec("aaAabcd ").toString()); //test 2822
}

function testRegexpPCRE_2801() {
  var regexp = /P[^*]TAIRE[^*]{1,6}?LL/;
  assertEquals("PSTAIREISLL", regexp.exec("xxxxxxxxxxxPSTAIREISLLxxxxxxxxx").toString()); //test 2823
}

function testRegexpPCRE_2802() {
  var regexp = /P[^*]TAIRE[^*]{1,}?LL/;
  assertEquals("PSTAIREISLL", regexp.exec("xxxxxxxxxxxPSTAIREISLLxxxxxxxxx").toString()); //test 2824
}

function testRegexpPCRE_2803() {
  var regexp = /(\.\d\d[1-9]?)\d+/;
  assertEquals(".230003938,.23", regexp.exec("1.230003938").toString()); //test 2825
}

function testRegexpPCRE_2804() {
  var regexp = /(\.\d\d[1-9]?)\d+/;
  assertEquals(".875000282,.875", regexp.exec("1.875000282   ").toString()); //test 2826
}

function testRegexpPCRE_2805() {
  var regexp = /(\.\d\d[1-9]?)\d+/;
  assertEquals(".235,.23", regexp.exec("1.235  ").toString()); //test 2827
}

function testRegexpPCRE_2806() {
  var regexp = /(\.\d\d[1-9]?)\d+/;
  assertEquals(null, regexp.exec("              ")); //test 2828
}

function testRegexpPCRE_2807() {
  var regexp = /(\.\d\d((?=0)|\d(?=\d)))/;
  assertEquals(".23,.23,", regexp.exec("1.230003938      ").toString()); //test 2829
}

function testRegexpPCRE_2808() {
  var regexp = /(\.\d\d((?=0)|\d(?=\d)))/;
  assertEquals(".875,.875,5", regexp.exec("1.875000282").toString()); //test 2830
}

function testRegexpPCRE_2809() {
  var regexp = /(\.\d\d((?=0)|\d(?=\d)))/;
  assertEquals(null, regexp.exec("*** Failers ")); //test 2831
}

function testRegexpPCRE_2810() {
  var regexp = /(\.\d\d((?=0)|\d(?=\d)))/;
  assertEquals(null, regexp.exec("1.235 ")); //test 2832
}

function testRegexpPCRE_2811() {
  var regexp = /(\.\d\d((?=0)|\d(?=\d)))/;
  assertEquals(null, regexp.exec("ab ")); //test 2833
}

function testRegexpPCRE_2812() {
  assertThrows(SyntaxError, eval, "var re = /a(?)b/;"); //test 2834
}


function testRegexpPCRE_2813() {
  var regexp = /\b(foo)\s+(\w+)/i;
  assertEquals("foo table,foo,table", regexp.exec("Food is on the foo table").toString()); //test 2835
}

function testRegexpPCRE_2814() {
  var regexp = /foo(.*)bar/;
  assertEquals("food is under the bar in the bar,d is under the bar in the ", regexp.exec("The food is under the bar in the barn.").toString()); //test 2836
}

function testRegexpPCRE_2815() {
  var regexp = /foo(.*?)bar/;
  assertEquals("food is under the bar,d is under the ", regexp.exec("The food is under the bar in the barn.").toString()); //test 2837
}

function testRegexpPCRE_2816() {
  var regexp = /(.*)(\d*)/;
  assertEquals("I have 2 numbers: 53147,I have 2 numbers: 53147,", regexp.exec("I have 2 numbers: 53147").toString()); //test 2838
}

function testRegexpPCRE_2817() {
  var regexp = /(.*)(\d+)/;
  assertEquals("I have 2 numbers: 53147,I have 2 numbers: 5314,7", regexp.exec("I have 2 numbers: 53147").toString()); //test 2839
}

function testRegexpPCRE_2818() {
  var regexp = /(.*?)(\d*)/;
  assertEquals(",,", regexp.exec("I have 2 numbers: 53147").toString()); //test 2840
}

function testRegexpPCRE_2819() {
  var regexp = /(.*?)(\d+)/;
  assertEquals("I have 2,I have ,2", regexp.exec("I have 2 numbers: 53147").toString()); //test 2841
}

function testRegexpPCRE_2820() {
  var regexp = /(.*)(\d+)$/;
  assertEquals("I have 2 numbers: 53147,I have 2 numbers: 5314,7", regexp.exec("I have 2 numbers: 53147").toString()); //test 2842
}

function testRegexpPCRE_2821() {
  var regexp = /(.*?)(\d+)$/;
  assertEquals("I have 2 numbers: 53147,I have 2 numbers: ,53147", regexp.exec("I have 2 numbers: 53147").toString()); //test 2843
}

function testRegexpPCRE_2822() {
  var regexp = /(.*)\b(\d+)$/;
  assertEquals("I have 2 numbers: 53147,I have 2 numbers: ,53147", regexp.exec("I have 2 numbers: 53147").toString()); //test 2844
}

function testRegexpPCRE_2823() {
  var regexp = /(.*\D)(\d+)$/;
  assertEquals("I have 2 numbers: 53147,I have 2 numbers: ,53147", regexp.exec("I have 2 numbers: 53147").toString()); //test 2845
}

function testRegexpPCRE_2824() {
  var regexp = /^\D*(?!123)/;
  assertEquals("AB", regexp.exec("ABC123").toString()); //test 2846
}

function testRegexpPCRE_2825() {
  var regexp = /^\D*(?!123)/;
  assertEquals(" ", regexp.exec(" ").toString()); //test 2847
}

function testRegexpPCRE_2826() {
  var regexp = /^(\D*)(?=\d)(?!123)/;
  assertEquals("ABC,ABC", regexp.exec("ABC445").toString()); //test 2848
}

function testRegexpPCRE_2827() {
  var regexp = /^(\D*)(?=\d)(?!123)/;
  assertEquals(null, regexp.exec("*** Failers")); //test 2849
}

function testRegexpPCRE_2828() {
  var regexp = /^(\D*)(?=\d)(?!123)/;
  assertEquals(null, regexp.exec("ABC123")); //test 2850
}

function testRegexpPCRE_2829() {
  var regexp = /^[W-]46]/;
  assertEquals("W46]", regexp.exec("W46]789 ").toString()); //test 2851
}

function testRegexpPCRE_2830() {
  var regexp = /^[W-]46]/;
  assertEquals("-46]", regexp.exec("-46]789").toString()); //test 2852
}

function testRegexpPCRE_2831() {
  var regexp = /^[W-]46]/;
  assertEquals(null, regexp.exec("*** Failers")); //test 2853
}

function testRegexpPCRE_2832() {
  var regexp = /^[W-]46]/;
  assertEquals(null, regexp.exec("Wall")); //test 2854
}

function testRegexpPCRE_2833() {
  var regexp = /^[W-]46]/;
  assertEquals(null, regexp.exec("Zebra")); //test 2855
}

function testRegexpPCRE_2834() {
  var regexp = /^[W-]46]/;
  assertEquals(null, regexp.exec("42")); //test 2856
}

function testRegexpPCRE_2835() {
  var regexp = /^[W-]46]/;
  assertEquals(null, regexp.exec("[abcd] ")); //test 2857
}

function testRegexpPCRE_2836() {
  var regexp = /^[W-]46]/;
  assertEquals(null, regexp.exec("]abcd[")); //test 2858
}

function testRegexpPCRE_2837() {
  var regexp = /^[W-]46]/;
  assertEquals(null, regexp.exec("   ")); //test 2859
}

function testRegexpPCRE_2838() {
  var regexp = /^[W-\]46]/;
  assertEquals("W", regexp.exec("W46]789 ").toString()); //test 2860
}

function testRegexpPCRE_2839() {
  var regexp = /^[W-\]46]/;
  assertEquals("W", regexp.exec("Wall").toString()); //test 2861
}

function testRegexpPCRE_2840() {
  var regexp = /^[W-\]46]/;
  assertEquals("Z", regexp.exec("Zebra").toString()); //test 2862
}

function testRegexpPCRE_2841() {
  var regexp = /^[W-\]46]/;
  assertEquals("X", regexp.exec("Xylophone  ").toString()); //test 2863
}

function testRegexpPCRE_2842() {
  var regexp = /^[W-\]46]/;
  assertEquals("4", regexp.exec("42").toString()); //test 2864
}

function testRegexpPCRE_2843() {
  var regexp = /^[W-\]46]/;
  assertEquals("[", regexp.exec("[abcd] ").toString()); //test 2865
}

function testRegexpPCRE_2844() {
  var regexp = /^[W-\]46]/;
  assertEquals("]", regexp.exec("]abcd[").toString()); //test 2866
}

function testRegexpPCRE_2845() {
  var regexp = /^[W-\]46]/;
  assertEquals("\\", regexp.exec("\\backslash ").toString()); //test 2867
}

function testRegexpPCRE_2846() {
  var regexp = /^[W-\]46]/;
  assertEquals(null, regexp.exec("*** Failers")); //test 2868
}

function testRegexpPCRE_2847() {
  var regexp = /^[W-\]46]/;
  assertEquals(null, regexp.exec("-46]789")); //test 2869
}

function testRegexpPCRE_2848() {
  var regexp = /^[W-\]46]/;
  assertEquals(null, regexp.exec("well")); //test 2870
}

function testRegexpPCRE_2849() {
  var regexp = /\d\d\/\d\d\/\d\d\d\d/;
  assertEquals("01/01/2000", regexp.exec("01/01/2000").toString()); //test 2871
}

function testRegexpPCRE_2850() {
  var regexp = /^(a){0,0}/;
  assertEquals(",", regexp.exec("bcd").toString()); //test 2872
}

function testRegexpPCRE_2851() {
  var regexp = /^(a){0,0}/;
  assertEquals(",", regexp.exec("abc").toString()); //test 2873
}

function testRegexpPCRE_2852() {
  var regexp = /^(a){0,0}/;
  assertEquals(",", regexp.exec("aab     ").toString()); //test 2874
}

function testRegexpPCRE_2853() {
  var regexp = /^(a){0,1}/;
  assertEquals(",", regexp.exec("bcd").toString()); //test 2875
}

function testRegexpPCRE_2854() {
  var regexp = /^(a){0,1}/;
  assertEquals("a,a", regexp.exec("abc").toString()); //test 2876
}

function testRegexpPCRE_2855() {
  var regexp = /^(a){0,1}/;
  assertEquals("a,a", regexp.exec("aab  ").toString()); //test 2877
}

function testRegexpPCRE_2856() {
  var regexp = /^(a){0,2}/;
  assertEquals(",", regexp.exec("bcd").toString()); //test 2878
}

function testRegexpPCRE_2857() {
  var regexp = /^(a){0,2}/;
  assertEquals("a,a", regexp.exec("abc").toString()); //test 2879
}

function testRegexpPCRE_2858() {
  var regexp = /^(a){0,2}/;
  assertEquals("aa,a", regexp.exec("aab  ").toString()); //test 2880
}

function testRegexpPCRE_2859() {
  var regexp = /^(a){0,3}/;
  assertEquals(",", regexp.exec("bcd").toString()); //test 2881
}

function testRegexpPCRE_2860() {
  var regexp = /^(a){0,3}/;
  assertEquals("a,a", regexp.exec("abc").toString()); //test 2882
}

function testRegexpPCRE_2861() {
  var regexp = /^(a){0,3}/;
  assertEquals("aa,a", regexp.exec("aab").toString()); //test 2883
}

function testRegexpPCRE_2862() {
  var regexp = /^(a){0,3}/;
  assertEquals("aaa,a", regexp.exec("aaa   ").toString()); //test 2884
}

function testRegexpPCRE_2863() {
  var regexp = /^(a){0,}/;
  assertEquals(",", regexp.exec("bcd").toString()); //test 2885
}

function testRegexpPCRE_2864() {
  var regexp = /^(a){0,}/;
  assertEquals("a,a", regexp.exec("abc").toString()); //test 2886
}

function testRegexpPCRE_2865() {
  var regexp = /^(a){0,}/;
  assertEquals("aa,a", regexp.exec("aab").toString()); //test 2887
}

function testRegexpPCRE_2866() {
  var regexp = /^(a){0,}/;
  assertEquals("aaa,a", regexp.exec("aaa").toString()); //test 2888
}

function testRegexpPCRE_2867() {
  var regexp = /^(a){0,}/;
  assertEquals("aaaaaaaa,a", regexp.exec("aaaaaaaa    ").toString()); //test 2889
}

function testRegexpPCRE_2868() {
  var regexp = /^(a){1,1}/;
  assertEquals(null, regexp.exec("bcd")); //test 2890
}

function testRegexpPCRE_2869() {
  var regexp = /^(a){1,1}/;
  assertEquals("a,a", regexp.exec("abc").toString()); //test 2891
}

function testRegexpPCRE_2870() {
  var regexp = /^(a){1,1}/;
  assertEquals("a,a", regexp.exec("aab  ").toString()); //test 2892
}

function testRegexpPCRE_2871() {
  var regexp = /^(a){1,2}/;
  assertEquals(null, regexp.exec("bcd")); //test 2893
}

function testRegexpPCRE_2872() {
  var regexp = /^(a){1,2}/;
  assertEquals("a,a", regexp.exec("abc").toString()); //test 2894
}

function testRegexpPCRE_2873() {
  var regexp = /^(a){1,2}/;
  assertEquals("aa,a", regexp.exec("aab  ").toString()); //test 2895
}

function testRegexpPCRE_2874() {
  var regexp = /^(a){1,3}/;
  assertEquals(null, regexp.exec("bcd")); //test 2896
}

function testRegexpPCRE_2875() {
  var regexp = /^(a){1,3}/;
  assertEquals("a,a", regexp.exec("abc").toString()); //test 2897
}

function testRegexpPCRE_2876() {
  var regexp = /^(a){1,3}/;
  assertEquals("aa,a", regexp.exec("aab").toString()); //test 2898
}

function testRegexpPCRE_2877() {
  var regexp = /^(a){1,3}/;
  assertEquals("aaa,a", regexp.exec("aaa   ").toString()); //test 2899
}

function testRegexpPCRE_2878() {
  var regexp = /^(a){1,}/;
  assertEquals(null, regexp.exec("bcd")); //test 2900
}

function testRegexpPCRE_2879() {
  var regexp = /^(a){1,}/;
  assertEquals("a,a", regexp.exec("abc").toString()); //test 2901
}

function testRegexpPCRE_2880() {
  var regexp = /^(a){1,}/;
  assertEquals("aa,a", regexp.exec("aab").toString()); //test 2902
}

function testRegexpPCRE_2881() {
  var regexp = /^(a){1,}/;
  assertEquals("aaa,a", regexp.exec("aaa").toString()); //test 2903
}

function testRegexpPCRE_2882() {
  var regexp = /^(a){1,}/;
  assertEquals("aaaaaaaa,a", regexp.exec("aaaaaaaa    ").toString()); //test 2904
}

function testRegexpPCRE_2883() {
  var regexp = /.*\.gif/;
  assertEquals("bib.gif", regexp.exec("borfle\nbib.gif\nno").toString()); //test 2905
}

function testRegexpPCRE_2884() {
  var regexp = /.{0,}\.gif/;
  assertEquals("bib.gif", regexp.exec("borfle\nbib.gif\nno").toString()); //test 2906
}

function testRegexpPCRE_2885() {
  var regexp = /.*\.gif/m;
  assertEquals("bib.gif", regexp.exec("borfle\nbib.gif\nno").toString()); //test 2907
}

function testRegexpPCRE_2886() {
  var regexp = /.*\.gif/;
  assertEquals("bib.gif", regexp.exec("borfle\nbib.gif\nno").toString()); //test 2908
}

function testRegexpPCRE_2887() {
  var regexp = /.*\.gif/m;
  assertEquals("bib.gif", regexp.exec("borfle\nbib.gif\nno").toString()); //test 2909
}

function testRegexpPCRE_2888() {
  var regexp = /.*$/;
  assertEquals("no", regexp.exec("borfle\nbib.gif\nno").toString()); //test 2910
}

function testRegexpPCRE_2889() {
  var regexp = /.*$/m;
  assertEquals("borfle", regexp.exec("borfle\nbib.gif\nno").toString()); //test 2911
}

function testRegexpPCRE_2890() {
  var regexp = /.*$/;
  assertEquals("no", regexp.exec("borfle\nbib.gif\nno").toString()); //test 2912
}

function testRegexpPCRE_2891() {
  var regexp = /.*$/m;
  assertEquals("borfle", regexp.exec("borfle\nbib.gif\nno").toString()); //test 2913
}

function testRegexpPCRE_2892() {
  var regexp = /.*$/;
  assertEquals("", regexp.exec("borfle\nbib.gif\nno\n").toString()); //test 2914
}

function testRegexpPCRE_2893() {
  var regexp = /.*$/m;
  assertEquals("borfle", regexp.exec("borfle\nbib.gif\nno\n").toString()); //test 2915
}

function testRegexpPCRE_2894() {
  var regexp = /.*$/;
  assertEquals("", regexp.exec("borfle\nbib.gif\nno\n").toString()); //test 2916
}

function testRegexpPCRE_2895() {
  var regexp = /.*$/m;
  assertEquals("borfle", regexp.exec("borfle\nbib.gif\nno\n").toString()); //test 2917
}

function testRegexpPCRE_2896() {
  var regexp = /(.*X|^B)/;
  assertEquals("1234X,1234X", regexp.exec("abcde\n1234Xyz").toString()); //test 2918
}

function testRegexpPCRE_2897() {
  var regexp = /(.*X|^B)/;
  assertEquals("B,B", regexp.exec("BarFoo ").toString()); //test 2919
}

function testRegexpPCRE_2898() {
  var regexp = /(.*X|^B)/;
  assertEquals(null, regexp.exec("*** Failers")); //test 2920
}

function testRegexpPCRE_2899() {
  var regexp = /(.*X|^B)/;
  assertEquals(null, regexp.exec("abcde\nBar  ")); //test 2921
}

function testRegexpPCRE_2900() {
  var regexp = /(.*X|^B)/m;
  assertEquals("1234X,1234X", regexp.exec("abcde\n1234Xyz").toString()); //test 2922
}

function testRegexpPCRE_2901() {
  var regexp = /(.*X|^B)/m;
  assertEquals("B,B", regexp.exec("BarFoo ").toString()); //test 2923
}

function testRegexpPCRE_2902() {
  var regexp = /(.*X|^B)/m;
  assertEquals("B,B", regexp.exec("abcde\nBar  ").toString()); //test 2924
}

function testRegexpPCRE_2903() {
  var regexp = /(.*X|^B)/;
  assertEquals("1234X,1234X", regexp.exec("abcde\n1234Xyz").toString()); //test 2925
}

function testRegexpPCRE_2904() {
  var regexp = /(.*X|^B)/;
  assertEquals("B,B", regexp.exec("BarFoo ").toString()); //test 2926
}

function testRegexpPCRE_2905() {
  var regexp = /(.*X|^B)/;
  assertEquals(null, regexp.exec("*** Failers")); //test 2927
}

function testRegexpPCRE_2906() {
  var regexp = /(.*X|^B)/;
  assertEquals(null, regexp.exec("abcde\nBar  ")); //test 2928
}

function testRegexpPCRE_2907() {
  var regexp = /(.*X|^B)/m;
  assertEquals("1234X,1234X", regexp.exec("abcde\n1234Xyz").toString()); //test 2929
}

function testRegexpPCRE_2908() {
  var regexp = /(.*X|^B)/m;
  assertEquals("B,B", regexp.exec("BarFoo ").toString()); //test 2930
}

function testRegexpPCRE_2909() {
  var regexp = /(.*X|^B)/m;
  assertEquals("B,B", regexp.exec("abcde\nBar  ").toString()); //test 2931
}

function testRegexpPCRE_2910() {
  var regexp = /(.*X|^B)/m;
  assertEquals("1234X,1234X", regexp.exec("abcde\n1234Xyz").toString()); //test 2932
}

function testRegexpPCRE_2911() {
  var regexp = /(.*X|^B)/m;
  assertEquals("B,B", regexp.exec("BarFoo ").toString()); //test 2933
}

function testRegexpPCRE_2912() {
  var regexp = /(.*X|^B)/m;
  assertEquals(null, regexp.exec("*** Failers ")); //test 2934
}

function testRegexpPCRE_2913() {
  var regexp = /(.*X|^B)/m;
  assertEquals("B,B", regexp.exec("abcde\nBar  ").toString()); //test 2935
}

function testRegexpPCRE_2914() {
  var regexp = /(.*X|^B)/m;
  assertEquals("1234X,1234X", regexp.exec("abcde\n1234Xyz").toString()); //test 2936
}

function testRegexpPCRE_2915() {
  var regexp = /(.*X|^B)/m;
  assertEquals("B,B", regexp.exec("BarFoo ").toString()); //test 2937
}

function testRegexpPCRE_2916() {
  var regexp = /(.*X|^B)/m;
  assertEquals(null, regexp.exec("*** Failers ")); //test 2938
}

function testRegexpPCRE_2917() {
  var regexp = /(.*X|^B)/m;
  assertEquals("B,B", regexp.exec("abcde\nBar  ").toString()); //test 2939
}

function testRegexpPCRE_2918() {
  var regexp = /^.*B/;
  assertEquals(null, regexp.exec("**** Failers")); //test 2940
}

function testRegexpPCRE_2919() {
  var regexp = /^.*B/;
  assertEquals(null, regexp.exec("abc\nB")); //test 2941
}

function testRegexpPCRE_2920() {
  var regexp = /^.*B/;
  assertEquals(null, regexp.exec(" ")); //test 2942
}

function testRegexpPCRE_2921() {
  var regexp = /^.*B/;
  assertEquals(null, regexp.exec("abc\nB")); //test 2943
}

function testRegexpPCRE_2922() {
  var regexp = /^.*B/;
  assertEquals(null, regexp.exec("abc\nB")); //test 2944
}

function testRegexpPCRE_2923() {
  var regexp = /^.*B/;
  assertEquals(null, regexp.exec(" ")); //test 2945
}

function testRegexpPCRE_2924() {
  var regexp = /^.*B/;
  assertEquals(null, regexp.exec("abc\nB")); //test 2946
}

function testRegexpPCRE_2925() {
  var regexp = /^.*B/;
  assertEquals(null, regexp.exec("abc\nB")); //test 2947
}

function testRegexpPCRE_2926() {
  var regexp = /^.*B/;
  assertEquals("B", regexp.exec("B\n").toString()); //test 2948
}

function testRegexpPCRE_2927() {
  var regexp = /^[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]/;
  assertEquals("123456654321", regexp.exec("123456654321").toString()); //test 2949
}

function testRegexpPCRE_2928() {
  var regexp = /^\d\d\d\d\d\d\d\d\d\d\d\d/;
  assertEquals("123456654321", regexp.exec("123456654321 ").toString()); //test 2950
}

function testRegexpPCRE_2929() {
  var regexp = /^[\d][\d][\d][\d][\d][\d][\d][\d][\d][\d][\d][\d]/;
  assertEquals("123456654321", regexp.exec("123456654321").toString()); //test 2951
}

function testRegexpPCRE_2930() {
  var regexp = /^[abc]{12}/;
  assertEquals("abcabcabcabc", regexp.exec("abcabcabcabc").toString()); //test 2952
}

function testRegexpPCRE_2931() {
  var regexp = /^[a-c]{12}/;
  assertEquals("abcabcabcabc", regexp.exec("abcabcabcabc").toString()); //test 2953
}

function testRegexpPCRE_2932() {
  var regexp = /^(a|b|c){12}/;
  assertEquals("abcabcabcabc,c", regexp.exec("abcabcabcabc ").toString()); //test 2954
}

function testRegexpPCRE_2933() {
  var regexp = /^[abcdefghijklmnopqrstuvwxy0123456789]/;
  assertEquals("n", regexp.exec("n").toString()); //test 2955
}

function testRegexpPCRE_2934() {
  var regexp = /^[abcdefghijklmnopqrstuvwxy0123456789]/;
  assertEquals(null, regexp.exec("*** Failers ")); //test 2956
}

function testRegexpPCRE_2935() {
  var regexp = /^[abcdefghijklmnopqrstuvwxy0123456789]/;
  assertEquals(null, regexp.exec("z ")); //test 2957
}

function testRegexpPCRE_2936() {
  var regexp = /abcde{0,0}/;
  assertEquals("abcd", regexp.exec("abcd").toString()); //test 2958
}

function testRegexpPCRE_2937() {
  var regexp = /abcde{0,0}/;
  assertEquals(null, regexp.exec("*** Failers")); //test 2959
}

function testRegexpPCRE_2938() {
  var regexp = /abcde{0,0}/;
  assertEquals(null, regexp.exec("abce  ")); //test 2960
}

function testRegexpPCRE_2939() {
  var regexp = /ab[cd]{0,0}e/;
  assertEquals("abe", regexp.exec("abe").toString()); //test 2961
}

function testRegexpPCRE_2940() {
  var regexp = /ab[cd]{0,0}e/;
  assertEquals(null, regexp.exec("*** Failers")); //test 2962
}

function testRegexpPCRE_2941() {
  var regexp = /ab[cd]{0,0}e/;
  assertEquals(null, regexp.exec("abcde ")); //test 2963
}

function testRegexpPCRE_2942() {
  var regexp = /ab(c){0,0}d/;
  assertEquals("abd,", regexp.exec("abd").toString()); //test 2964
}

function testRegexpPCRE_2943() {
  var regexp = /ab(c){0,0}d/;
  assertEquals(null, regexp.exec("*** Failers")); //test 2965
}

function testRegexpPCRE_2944() {
  var regexp = /ab(c){0,0}d/;
  assertEquals(null, regexp.exec("abcd   ")); //test 2966
}

function testRegexpPCRE_2945() {
  var regexp = /a(b*)/;
  assertEquals("a,", regexp.exec("a").toString()); //test 2967
}

function testRegexpPCRE_2946() {
  var regexp = /a(b*)/;
  assertEquals("ab,b", regexp.exec("ab").toString()); //test 2968
}

function testRegexpPCRE_2947() {
  var regexp = /a(b*)/;
  assertEquals("abbbb,bbbb", regexp.exec("abbbb").toString()); //test 2969
}

function testRegexpPCRE_2948() {
  var regexp = /a(b*)/;
  assertEquals("a,", regexp.exec("*** Failers").toString()); //test 2970
}

function testRegexpPCRE_2949() {
  var regexp = /a(b*)/;
  assertEquals(null, regexp.exec("bbbbb    ")); //test 2971
}

function testRegexpPCRE_2950() {
  var regexp = /ab\d{0}e/;
  assertEquals("abe", regexp.exec("abe").toString()); //test 2972
}

function testRegexpPCRE_2951() {
  var regexp = /ab\d{0}e/;
  assertEquals(null, regexp.exec("*** Failers")); //test 2973
}

function testRegexpPCRE_2952() {
  var regexp = /ab\d{0}e/;
  assertEquals(null, regexp.exec("ab1e   ")); //test 2974
}

function testRegexpPCRE_2953() {
  var regexp = /"([^\\"]+|\\.)*"/;
  assertEquals("\"quick\",quick", regexp.exec("the \"quick\" brown fox").toString()); //test 2975
}

function testRegexpPCRE_2954() {
  var regexp = /"([^\\"]+|\\.)*"/;
  assertEquals("\"the \\\"quick\\\" brown fox\", brown fox", regexp.exec("\"the \\\"quick\\\" brown fox\" ").toString()); //test 2976
}

function testRegexpPCRE_2955() {
  var regexp = /.*?/g;
  assertEquals("", regexp.exec("abc").toString()); //test 2977
}

function testRegexpPCRE_2956() {
  var regexp = /\b/g;
  assertEquals("", regexp.exec("abc ").toString()); //test 2978
}

function testRegexpPCRE_2957() {
  var regexp = /\b/g;
  assertEquals("", regexp.exec("abc ").toString()); //test 2979
  assertEquals("", regexp.exec("abc").toString()); //test 2980
}

function testRegexpPCRE_2958() {
  assertThrows(SyntaxError, eval, "var re = //;"); //test 2981
}


function testRegexpPCRE_2959() {
  var regexp = /a[^a]b/;
  assertEquals("acb", regexp.exec("acb").toString()); //test 2982
}

function testRegexpPCRE_2960() {
  var regexp = /a[^a]b/;
  assertEquals("a\nb", regexp.exec("a\nb").toString()); //test 2983
}

function testRegexpPCRE_2961() {
  var regexp = /a.b/;
  assertEquals("acb", regexp.exec("acb").toString()); //test 2984
}

function testRegexpPCRE_2962() {
  var regexp = /a.b/;
  assertEquals(null, regexp.exec("*** Failers ")); //test 2985
}

function testRegexpPCRE_2963() {
  var regexp = /a.b/;
  assertEquals(null, regexp.exec("a\nb   ")); //test 2986
}

function testRegexpPCRE_2964() {
  var regexp = /a[^a]b/;
  assertEquals("acb", regexp.exec("acb").toString()); //test 2987
}

function testRegexpPCRE_2965() {
  var regexp = /a[^a]b/;
  assertEquals("a\nb", regexp.exec("a\nb  ").toString()); //test 2988
}

function testRegexpPCRE_2966() {
  var regexp = /a.b/;
  assertEquals("acb", regexp.exec("acb").toString()); //test 2989
}

function testRegexpPCRE_2967() {
  var regexp = /a.b/;
  assertEquals(null, regexp.exec("a\nb  ")); //test 2990
}

function testRegexpPCRE_2968() {
  var regexp = /^(b+?|a){1,2}?c/;
  assertEquals("bac,a", regexp.exec("bac").toString()); //test 2991
}

function testRegexpPCRE_2969() {
  var regexp = /^(b+?|a){1,2}?c/;
  assertEquals("bbac,a", regexp.exec("bbac").toString()); //test 2992
}

function testRegexpPCRE_2970() {
  var regexp = /^(b+?|a){1,2}?c/;
  assertEquals("bbbac,a", regexp.exec("bbbac").toString()); //test 2993
}

function testRegexpPCRE_2971() {
  var regexp = /^(b+?|a){1,2}?c/;
  assertEquals("bbbbac,a", regexp.exec("bbbbac").toString()); //test 2994
}

function testRegexpPCRE_2972() {
  var regexp = /^(b+?|a){1,2}?c/;
  assertEquals("bbbbbac,a", regexp.exec("bbbbbac ").toString()); //test 2995
}

function testRegexpPCRE_2973() {
  var regexp = /^(b+|a){1,2}?c/;
  assertEquals("bac,a", regexp.exec("bac").toString()); //test 2996
}

function testRegexpPCRE_2974() {
  var regexp = /^(b+|a){1,2}?c/;
  assertEquals("bbac,a", regexp.exec("bbac").toString()); //test 2997
}

function testRegexpPCRE_2975() {
  var regexp = /^(b+|a){1,2}?c/;
  assertEquals("bbbac,a", regexp.exec("bbbac").toString()); //test 2998
}

function testRegexpPCRE_2976() {
  var regexp = /^(b+|a){1,2}?c/;
  assertEquals("bbbbac,a", regexp.exec("bbbbac").toString()); //test 2999
}

function testRegexpPCRE_2977() {
  var regexp = /^(b+|a){1,2}?c/;
  assertEquals("bbbbbac,a", regexp.exec("bbbbbac ").toString()); //test 3000
}

function testRegexpPCRE_2978() {
  var regexp = /(?!\A)x/m;
  assertEquals("x", regexp.exec("x\nb\n").toString()); //test 3001
}

function testRegexpPCRE_2979() {
  var regexp = /(?!\A)x/m;
  assertEquals("x", regexp.exec("a\x08x\n  ").toString()); //test 3002
}

function testRegexpPCRE_2980() {
  var regexp = /\x0{ab}/;
  assertEquals(null, regexp.exec("\x00{ab} ")); //test 3003
}

function testRegexpPCRE_2981() {
  var regexp = /(A|B)*?CD/;
  assertEquals("CD,", regexp.exec("CD ").toString()); //test 3004
}

function testRegexpPCRE_2982() {
  var regexp = /(A|B)*CD/;
  assertEquals("CD,", regexp.exec("CD ").toString()); //test 3005
}

function testRegexpPCRE_2983() {
  var regexp = /(A|B)*CD/;
  assertEquals(null, regexp.exec("foo")); //test 3006
}

function testRegexpPCRE_2984() {
  var regexp = /(A|B)*CD/;
  assertEquals(null, regexp.exec("catfood")); //test 3007
}

function testRegexpPCRE_2985() {
  var regexp = /(A|B)*CD/;
  assertEquals(null, regexp.exec("arfootle")); //test 3008
}

function testRegexpPCRE_2986() {
  var regexp = /(A|B)*CD/;
  assertEquals(null, regexp.exec("rfoosh")); //test 3009
}

function testRegexpPCRE_2987() {
  var regexp = /(A|B)*CD/;
  assertEquals(null, regexp.exec("*** Failers")); //test 3010
}

function testRegexpPCRE_2988() {
  var regexp = /(A|B)*CD/;
  assertEquals(null, regexp.exec("barfoo")); //test 3011
}

function testRegexpPCRE_2989() {
  var regexp = /(A|B)*CD/;
  assertEquals(null, regexp.exec("towbarfoo")); //test 3012
}

function testRegexpPCRE_2990() {
  var regexp = /(A|B)*CD/;
  assertEquals(null, regexp.exec("catfood")); //test 3013
}

function testRegexpPCRE_2991() {
  var regexp = /(A|B)*CD/;
  assertEquals(null, regexp.exec("*** Failers")); //test 3014
}

function testRegexpPCRE_2992() {
  var regexp = /(A|B)*CD/;
  assertEquals(null, regexp.exec("foo")); //test 3015
}

function testRegexpPCRE_2993() {
  var regexp = /(A|B)*CD/;
  assertEquals(null, regexp.exec("barfoo")); //test 3016
}

function testRegexpPCRE_2994() {
  var regexp = /(A|B)*CD/;
  assertEquals(null, regexp.exec("towbarfoo")); //test 3017
}

function testRegexpPCRE_2995() {
  var regexp = /(A|B)*CD/;
  assertEquals(null, regexp.exec("fooabar")); //test 3018
}

function testRegexpPCRE_2996() {
  var regexp = /(A|B)*CD/;
  assertEquals(null, regexp.exec("*** Failers")); //test 3019
}

function testRegexpPCRE_2997() {
  var regexp = /(A|B)*CD/;
  assertEquals(null, regexp.exec("bar")); //test 3020
}

function testRegexpPCRE_2998() {
  var regexp = /(A|B)*CD/;
  assertEquals(null, regexp.exec("foobbar")); //test 3021
}

function testRegexpPCRE_2999() {
  var regexp = /(A|B)*CD/;
  assertEquals(null, regexp.exec("  ")); //test 3022
}

function testRegexpPCRE_3000() {
  var regexp = /\Aabc\z/m;
  assertEquals(null, regexp.exec("abc")); //test 3023
}

function testRegexpPCRE_3001() {
  var regexp = /\Aabc\z/m;
  assertEquals(null, regexp.exec("*** Failers")); //test 3024
}

function testRegexpPCRE_3002() {
  var regexp = /\Aabc\z/m;
  assertEquals(null, regexp.exec("abc\n   ")); //test 3025
}

function testRegexpPCRE_3003() {
  var regexp = /\Aabc\z/m;
  assertEquals(null, regexp.exec("qqq\nabc")); //test 3026
}

function testRegexpPCRE_3004() {
  var regexp = /\Aabc\z/m;
  assertEquals(null, regexp.exec("abc\nzzz")); //test 3027
}

function testRegexpPCRE_3005() {
  var regexp = /\Aabc\z/m;
  assertEquals(null, regexp.exec("qqq\nabc\nzzz")); //test 3028
}

function testRegexpPCRE_3006() {
  var regexp = /\Aabc\z/m;
  assertEquals(null, regexp.exec("/this/is/a/very/long/line/in/deed/with/very/many/slashes/in/it/you/see/")); //test 3029
}

function testRegexpPCRE_3007() {
  var regexp = /\Aabc\z/m;
  assertEquals(null, regexp.exec("/this/is/a/very/long/line/in/deed/with/very/many/slashes/in/and/foo")); //test 3030
}

function testRegexpPCRE_3008() {
  var regexp = /\Aabc\z/m;
  assertEquals(null, regexp.exec("1.230003938")); //test 3031
}

function testRegexpPCRE_3009() {
  var regexp = /\Aabc\z/m;
  assertEquals(null, regexp.exec("1.875000282")); //test 3032
}

function testRegexpPCRE_3010() {
  var regexp = /\Aabc\z/m;
  assertEquals(null, regexp.exec("*** Failers ")); //test 3033
}

function testRegexpPCRE_3011() {
  var regexp = /\Aabc\z/m;
  assertEquals(null, regexp.exec("1.235 ")); //test 3034
}

function testRegexpPCRE_3012() {
  var regexp = /\Aabc\z/m;
  assertEquals(null, regexp.exec("now is the time for all good men to come to the aid of the party")); //test 3035
}

function testRegexpPCRE_3013() {
  var regexp = /\Aabc\z/m;
  assertEquals(null, regexp.exec("*** Failers")); //test 3036
}

function testRegexpPCRE_3014() {
  var regexp = /\Aabc\z/m;
  assertEquals(null, regexp.exec("this is not a line with only words and spaces!")); //test 3037
}

function testRegexpPCRE_3015() {
  var regexp = /(\d+)(\w)/;
  assertEquals("12345a,12345,a", regexp.exec("12345a").toString()); //test 3038
}

function testRegexpPCRE_3016() {
  var regexp = /(\d+)(\w)/;
  assertEquals("12345,1234,5", regexp.exec("12345+ ").toString()); //test 3039
}

function testRegexpPCRE_3017() {
  var regexp = /(\d+)(\w)/;
  assertEquals("12345a,12345,a", regexp.exec("12345a").toString()); //test 3040
}

function testRegexpPCRE_3018() {
  var regexp = /(\d+)(\w)/;
  assertEquals(null, regexp.exec("*** Failers")); //test 3041
}

function testRegexpPCRE_3019() {
  var regexp = /(\d+)(\w)/;
  assertEquals("12345,1234,5", regexp.exec("12345+ ").toString()); //test 3042
}

function testRegexpPCRE_3020() {
  var regexp = /(\d+)(\w)/;
  assertEquals(null, regexp.exec("aaab")); //test 3043
}

function testRegexpPCRE_3021() {
  var regexp = /(\d+)(\w)/;
  assertEquals(null, regexp.exec("aaab")); //test 3044
}

function testRegexpPCRE_3022() {
  var regexp = /(\d+)(\w)/;
  assertEquals(null, regexp.exec("aaab")); //test 3045
}

function testRegexpPCRE_3023() {
  var regexp = /(\d+)(\w)/;
  assertEquals(null, regexp.exec("aaabbbccc")); //test 3046
}

function testRegexpPCRE_3024() {
  var regexp = /(\d+)(\w)/;
  assertEquals(null, regexp.exec("aaabbbbccccd")); //test 3047
}

function testRegexpPCRE_3025() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals("aaabbbbcccc,ccc", regexp.exec("aaabbbbccccd").toString()); //test 3048
}

function testRegexpPCRE_3026() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals("abc,b", regexp.exec("((abc(ade)ufh()()x").toString()); //test 3049
}

function testRegexpPCRE_3027() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals(null, regexp.exec("")); //test 3050
}

function testRegexpPCRE_3028() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals("abc,b", regexp.exec("(abc)").toString()); //test 3051
}

function testRegexpPCRE_3029() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals("abc,b", regexp.exec("(abc(def)xyz)").toString()); //test 3052
}

function testRegexpPCRE_3030() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals(null, regexp.exec("*** Failers")); //test 3053
}

function testRegexpPCRE_3031() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals(null, regexp.exec("ab")); //test 3054
}

function testRegexpPCRE_3032() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals(null, regexp.exec("Ab")); //test 3055
}

function testRegexpPCRE_3033() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals(null, regexp.exec("*** Failers ")); //test 3056
}

function testRegexpPCRE_3034() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals(null, regexp.exec("aB")); //test 3057
}

function testRegexpPCRE_3035() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals(null, regexp.exec("AB")); //test 3058
}

function testRegexpPCRE_3036() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals(null, regexp.exec("    ")); //test 3059
}

function testRegexpPCRE_3037() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals("bc,b", regexp.exec("a bcd e").toString()); //test 3060
}

function testRegexpPCRE_3038() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals(null, regexp.exec("*** Failers")); //test 3061
}

function testRegexpPCRE_3039() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals("c,", regexp.exec("a b cd e").toString()); //test 3062
}

function testRegexpPCRE_3040() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals("abc,b", regexp.exec("abcd e   ").toString()); //test 3063
}

function testRegexpPCRE_3041() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals("bc,b", regexp.exec("a bcde ").toString()); //test 3064
}

function testRegexpPCRE_3042() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals("bc,b", regexp.exec("a bcde f").toString()); //test 3065
}

function testRegexpPCRE_3043() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals(null, regexp.exec("*** Failers")); //test 3066
}

function testRegexpPCRE_3044() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals("abc,b", regexp.exec("abcdef  ").toString()); //test 3067
}

function testRegexpPCRE_3045() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals("abc,b", regexp.exec("abc").toString()); //test 3068
}

function testRegexpPCRE_3046() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals("c,", regexp.exec("aBc").toString()); //test 3069
}

function testRegexpPCRE_3047() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals(null, regexp.exec("*** Failers")); //test 3070
}

function testRegexpPCRE_3048() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals(null, regexp.exec("abC")); //test 3071
}

function testRegexpPCRE_3049() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals(null, regexp.exec("aBC  ")); //test 3072
}

function testRegexpPCRE_3050() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals("bc,b", regexp.exec("Abc").toString()); //test 3073
}

function testRegexpPCRE_3051() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals("c,", regexp.exec("ABc").toString()); //test 3074
}

function testRegexpPCRE_3052() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals(null, regexp.exec("ABC")); //test 3075
}

function testRegexpPCRE_3053() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals(null, regexp.exec("AbC")); //test 3076
}

function testRegexpPCRE_3054() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals(null, regexp.exec("")); //test 3077
}

function testRegexpPCRE_3055() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals("abc,b", regexp.exec("abc").toString()); //test 3078
}

function testRegexpPCRE_3056() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals("c,", regexp.exec("aBc").toString()); //test 3079
}

function testRegexpPCRE_3057() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals(null, regexp.exec("*** Failers ")); //test 3080
}

function testRegexpPCRE_3058() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals(null, regexp.exec("ABC")); //test 3081
}

function testRegexpPCRE_3059() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals(null, regexp.exec("abC")); //test 3082
}

function testRegexpPCRE_3060() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals(null, regexp.exec("aBC")); //test 3083
}

function testRegexpPCRE_3061() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals(null, regexp.exec("")); //test 3084
}

function testRegexpPCRE_3062() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals("c,", regexp.exec("aBc").toString()); //test 3085
}

function testRegexpPCRE_3063() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals("c,", regexp.exec("aBBc").toString()); //test 3086
}

function testRegexpPCRE_3064() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals(null, regexp.exec("*** Failers ")); //test 3087
}

function testRegexpPCRE_3065() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals(null, regexp.exec("aBC")); //test 3088
}

function testRegexpPCRE_3066() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals(null, regexp.exec("aBBC")); //test 3089
}

function testRegexpPCRE_3067() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals(null, regexp.exec("")); //test 3090
}

function testRegexpPCRE_3068() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals("abc,b", regexp.exec("abcd").toString()); //test 3091
}

function testRegexpPCRE_3069() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals(null, regexp.exec("abCd")); //test 3092
}

function testRegexpPCRE_3070() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals(null, regexp.exec("*** Failers")); //test 3093
}

function testRegexpPCRE_3071() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals(null, regexp.exec("aBCd")); //test 3094
}

function testRegexpPCRE_3072() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals("abc,b", regexp.exec("abcD     ").toString()); //test 3095
}

function testRegexpPCRE_3073() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals(null, regexp.exec("")); //test 3096
}

function testRegexpPCRE_3074() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals(null, regexp.exec("more than million")); //test 3097
}

function testRegexpPCRE_3075() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals(null, regexp.exec("more than MILLION")); //test 3098
}

function testRegexpPCRE_3076() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals(null, regexp.exec("more \n than Million ")); //test 3099
}

function testRegexpPCRE_3077() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals(null, regexp.exec("*** Failers")); //test 3100
}

function testRegexpPCRE_3078() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals(null, regexp.exec("MORE THAN MILLION    ")); //test 3101
}

function testRegexpPCRE_3079() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals(null, regexp.exec("more \n than \n million ")); //test 3102
}

function testRegexpPCRE_3080() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals(null, regexp.exec("more than million")); //test 3103
}

function testRegexpPCRE_3081() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals(null, regexp.exec("more than MILLION")); //test 3104
}

function testRegexpPCRE_3082() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals(null, regexp.exec("more \n than Million ")); //test 3105
}

function testRegexpPCRE_3083() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals(null, regexp.exec("*** Failers")); //test 3106
}

function testRegexpPCRE_3084() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals(null, regexp.exec("MORE THAN MILLION    ")); //test 3107
}

function testRegexpPCRE_3085() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals(null, regexp.exec("more \n than \n million ")); //test 3108
}

function testRegexpPCRE_3086() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals(null, regexp.exec("")); //test 3109
}

function testRegexpPCRE_3087() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals("abc,b", regexp.exec("abc").toString()); //test 3110
}

function testRegexpPCRE_3088() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals("bc,b", regexp.exec("aBbc").toString()); //test 3111
}

function testRegexpPCRE_3089() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals("c,", regexp.exec("aBBc ").toString()); //test 3112
}

function testRegexpPCRE_3090() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals(null, regexp.exec("*** Failers")); //test 3113
}

function testRegexpPCRE_3091() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals("bc,b", regexp.exec("Abc").toString()); //test 3114
}

function testRegexpPCRE_3092() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals(null, regexp.exec("abAb    ")); //test 3115
}

function testRegexpPCRE_3093() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals(null, regexp.exec("abbC ")); //test 3116
}

function testRegexpPCRE_3094() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals(null, regexp.exec("")); //test 3117
}

function testRegexpPCRE_3095() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals("abc,b", regexp.exec("abc").toString()); //test 3118
}

function testRegexpPCRE_3096() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals("c,", regexp.exec("aBc").toString()); //test 3119
}

function testRegexpPCRE_3097() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals(null, regexp.exec("*** Failers")); //test 3120
}

function testRegexpPCRE_3098() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals(null, regexp.exec("Ab ")); //test 3121
}

function testRegexpPCRE_3099() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals(null, regexp.exec("abC")); //test 3122
}

function testRegexpPCRE_3100() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals(null, regexp.exec("aBC     ")); //test 3123
}

function testRegexpPCRE_3101() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals(null, regexp.exec("")); //test 3124
}

function testRegexpPCRE_3102() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals("c,", regexp.exec("abxxc").toString()); //test 3125
}

function testRegexpPCRE_3103() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals("c,", regexp.exec("aBxxc").toString()); //test 3126
}

function testRegexpPCRE_3104() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals(null, regexp.exec("*** Failers")); //test 3127
}

function testRegexpPCRE_3105() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals("c,", regexp.exec("Abxxc").toString()); //test 3128
}

function testRegexpPCRE_3106() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals("c,", regexp.exec("ABxxc").toString()); //test 3129
}

function testRegexpPCRE_3107() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals(null, regexp.exec("abxxC      ")); //test 3130
}

function testRegexpPCRE_3108() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals("abc,b", regexp.exec("abc:").toString()); //test 3131
}

function testRegexpPCRE_3109() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals(null, regexp.exec("12")); //test 3132
}

function testRegexpPCRE_3110() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals(null, regexp.exec("*** Failers")); //test 3133
}

function testRegexpPCRE_3111() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals(null, regexp.exec("123")); //test 3134
}

function testRegexpPCRE_3112() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals(null, regexp.exec("xyz    ")); //test 3135
}

function testRegexpPCRE_3113() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals("abc,b", regexp.exec("abc:").toString()); //test 3136
}

function testRegexpPCRE_3114() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals(null, regexp.exec("12")); //test 3137
}

function testRegexpPCRE_3115() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals(null, regexp.exec("*** Failers")); //test 3138
}

function testRegexpPCRE_3116() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals(null, regexp.exec("123")); //test 3139
}

function testRegexpPCRE_3117() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals(null, regexp.exec("xyz    ")); //test 3140
}

function testRegexpPCRE_3118() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals(null, regexp.exec("")); //test 3141
}

function testRegexpPCRE_3119() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals(null, regexp.exec("foobar")); //test 3142
}

function testRegexpPCRE_3120() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals("c,", regexp.exec("cat").toString()); //test 3143
}

function testRegexpPCRE_3121() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals("c,", regexp.exec("fcat").toString()); //test 3144
}

function testRegexpPCRE_3122() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals("c,", regexp.exec("focat   ").toString()); //test 3145
}

function testRegexpPCRE_3123() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals(null, regexp.exec("*** Failers")); //test 3146
}

function testRegexpPCRE_3124() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals("c,", regexp.exec("foocat  ").toString()); //test 3147
}

function testRegexpPCRE_3125() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals(null, regexp.exec("foobar")); //test 3148
}

function testRegexpPCRE_3126() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals("c,", regexp.exec("cat").toString()); //test 3149
}

function testRegexpPCRE_3127() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals("c,", regexp.exec("fcat").toString()); //test 3150
}

function testRegexpPCRE_3128() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals("c,", regexp.exec("focat   ").toString()); //test 3151
}

function testRegexpPCRE_3129() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals(null, regexp.exec("*** Failers")); //test 3152
}

function testRegexpPCRE_3130() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals("c,", regexp.exec("foocat  ").toString()); //test 3153
}

function testRegexpPCRE_3131() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals(null, regexp.exec("a")); //test 3154
}

function testRegexpPCRE_3132() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals(null, regexp.exec("aa")); //test 3155
}

function testRegexpPCRE_3133() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals(null, regexp.exec("aaaa")); //test 3156
}

function testRegexpPCRE_3134() {
  var regexp = /(a+|b+|c+)*c/;
  assertEquals(null, regexp.exec("")); //test 3157
}

function testRegexpPCRE_3135() {
  var regexp = /(abc|)+/;
  assertEquals("abc,abc", regexp.exec("abc").toString()); //test 3158
}

function testRegexpPCRE_3136() {
  var regexp = /(abc|)+/;
  assertEquals("abcabc,abc", regexp.exec("abcabc").toString()); //test 3159
}

function testRegexpPCRE_3137() {
  var regexp = /(abc|)+/;
  assertEquals("abcabcabc,abc", regexp.exec("abcabcabc").toString()); //test 3160
}

function testRegexpPCRE_3138() {
  var regexp = /(abc|)+/;
  assertEquals(",", regexp.exec("xyz      ").toString()); //test 3161
}

function testRegexpPCRE_3139() {
  var regexp = /([a]*)*/;
  assertEquals("a,a", regexp.exec("a").toString()); //test 3162
}

function testRegexpPCRE_3140() {
  var regexp = /([a]*)*/;
  assertEquals("aaaaa,aaaaa", regexp.exec("aaaaa ").toString()); //test 3163
}

function testRegexpPCRE_3141() {
  var regexp = /([ab]*)*/;
  assertEquals("a,a", regexp.exec("a").toString()); //test 3164
}

function testRegexpPCRE_3142() {
  var regexp = /([ab]*)*/;
  assertEquals("b,b", regexp.exec("b").toString()); //test 3165
}

function testRegexpPCRE_3143() {
  var regexp = /([ab]*)*/;
  assertEquals("ababab,ababab", regexp.exec("ababab").toString()); //test 3166
}

function testRegexpPCRE_3144() {
  var regexp = /([ab]*)*/;
  assertEquals("aaaab,aaaab", regexp.exec("aaaabcde").toString()); //test 3167
}

function testRegexpPCRE_3145() {
  var regexp = /([ab]*)*/;
  assertEquals("bbbb,bbbb", regexp.exec("bbbb    ").toString()); //test 3168
}

function testRegexpPCRE_3146() {
  var regexp = /([^a]*)*/;
  assertEquals("b,b", regexp.exec("b").toString()); //test 3169
}

function testRegexpPCRE_3147() {
  var regexp = /([^a]*)*/;
  assertEquals("bbbb,bbbb", regexp.exec("bbbb").toString()); //test 3170
}

function testRegexpPCRE_3148() {
  var regexp = /([^a]*)*/;
  assertEquals(",", regexp.exec("aaa   ").toString()); //test 3171
}

function testRegexpPCRE_3149() {
  var regexp = /([^ab]*)*/;
  assertEquals("cccc,cccc", regexp.exec("cccc").toString()); //test 3172
}

function testRegexpPCRE_3150() {
  var regexp = /([^ab]*)*/;
  assertEquals(",", regexp.exec("abab  ").toString()); //test 3173
}

function testRegexpPCRE_3151() {
  var regexp = /([a]*?)*/;
  assertEquals("a,a", regexp.exec("a").toString()); //test 3174
}

function testRegexpPCRE_3152() {
  var regexp = /([a]*?)*/;
  assertEquals("aaaa,a", regexp.exec("aaaa ").toString()); //test 3175
}

function testRegexpPCRE_3153() {
  var regexp = /([ab]*?)*/;
  assertEquals("a,a", regexp.exec("a").toString()); //test 3176
}

function testRegexpPCRE_3154() {
  var regexp = /([ab]*?)*/;
  assertEquals("b,b", regexp.exec("b").toString()); //test 3177
}

function testRegexpPCRE_3155() {
  var regexp = /([ab]*?)*/;
  assertEquals("abab,b", regexp.exec("abab").toString()); //test 3178
}

function testRegexpPCRE_3156() {
  var regexp = /([ab]*?)*/;
  assertEquals("baba,a", regexp.exec("baba   ").toString()); //test 3179
}

function testRegexpPCRE_3157() {
  var regexp = /([^a]*?)*/;
  assertEquals("b,b", regexp.exec("b").toString()); //test 3180
}

function testRegexpPCRE_3158() {
  var regexp = /([^a]*?)*/;
  assertEquals("bbbb,b", regexp.exec("bbbb").toString()); //test 3181
}

function testRegexpPCRE_3159() {
  var regexp = /([^a]*?)*/;
  assertEquals(",", regexp.exec("aaa   ").toString()); //test 3182
}

function testRegexpPCRE_3160() {
  var regexp = /([^ab]*?)*/;
  assertEquals("c,c", regexp.exec("c").toString()); //test 3183
}

function testRegexpPCRE_3161() {
  var regexp = /([^ab]*?)*/;
  assertEquals("cccc,c", regexp.exec("cccc").toString()); //test 3184
}

function testRegexpPCRE_3162() {
  var regexp = /([^ab]*?)*/;
  assertEquals(",", regexp.exec("baba   ").toString()); //test 3185
}

function testRegexpPCRE_3163() {
  var regexp = /([^ab]*?)*/;
  assertEquals(",", regexp.exec("a").toString()); //test 3186
}

function testRegexpPCRE_3164() {
  var regexp = /([^ab]*?)*/;
  assertEquals(",", regexp.exec("aaabcde ").toString()); //test 3187
}

function testRegexpPCRE_3165() {
  var regexp = /([^ab]*?)*/;
  assertEquals(",", regexp.exec("aaaaa").toString()); //test 3188
}

function testRegexpPCRE_3166() {
  var regexp = /([^ab]*?)*/;
  assertEquals(",", regexp.exec("aabbaa ").toString()); //test 3189
}

function testRegexpPCRE_3167() {
  var regexp = /([^ab]*?)*/;
  assertEquals(",", regexp.exec("aaaaa").toString()); //test 3190
}

function testRegexpPCRE_3168() {
  var regexp = /([^ab]*?)*/;
  assertEquals(",", regexp.exec("aabbaa ").toString()); //test 3191
}

function testRegexpPCRE_3169() {
  var regexp = /([^ab]*?)*/;
  assertEquals("12-sep-98,8", regexp.exec("12-sep-98").toString()); //test 3192
}

function testRegexpPCRE_3170() {
  var regexp = /([^ab]*?)*/;
  assertEquals("12-09-98,8", regexp.exec("12-09-98").toString()); //test 3193
}

function testRegexpPCRE_3171() {
  var regexp = /([^ab]*?)*/;
  assertEquals("*** F,F", regexp.exec("*** Failers").toString()); //test 3194
}

function testRegexpPCRE_3172() {
  var regexp = /([^ab]*?)*/;
  assertEquals("sep-12-98,8", regexp.exec("sep-12-98").toString()); //test 3195
}

function testRegexpPCRE_3173() {
  var regexp = /([^ab]*?)*/;
  assertEquals("    , ", regexp.exec("    ").toString()); //test 3196
}

function testRegexpPCRE_3174() {
  var regexp = /([^ab]*?)*/;
  assertEquals("s,s", regexp.exec("saturday").toString()); //test 3197
}

function testRegexpPCRE_3175() {
  var regexp = /([^ab]*?)*/;
  assertEquals("sund,d", regexp.exec("sunday").toString()); //test 3198
}

function testRegexpPCRE_3176() {
  var regexp = /([^ab]*?)*/;
  assertEquals("S,S", regexp.exec("Saturday").toString()); //test 3199
}

function testRegexpPCRE_3177() {
  var regexp = /([^ab]*?)*/;
  assertEquals("Sund,d", regexp.exec("Sunday").toString()); //test 3200
}

function testRegexpPCRE_3178() {
  var regexp = /([^ab]*?)*/;
  assertEquals("SATURDAY,Y", regexp.exec("SATURDAY").toString()); //test 3201
}

function testRegexpPCRE_3179() {
  var regexp = /([^ab]*?)*/;
  assertEquals("SUNDAY,Y", regexp.exec("SUNDAY").toString()); //test 3202
}

function testRegexpPCRE_3180() {
  var regexp = /([^ab]*?)*/;
  assertEquals("SunD,D", regexp.exec("SunDay").toString()); //test 3203
}

function testRegexpPCRE_3181() {
  var regexp = /([^ab]*?)*/;
  assertEquals(",", regexp.exec("abcx").toString()); //test 3204
}

function testRegexpPCRE_3182() {
  var regexp = /([^ab]*?)*/;
  assertEquals(",", regexp.exec("aBCx").toString()); //test 3205
}

function testRegexpPCRE_3183() {
  var regexp = /([^ab]*?)*/;
  assertEquals(",", regexp.exec("bbx").toString()); //test 3206
}

function testRegexpPCRE_3184() {
  var regexp = /([^ab]*?)*/;
  assertEquals("BBx,x", regexp.exec("BBx").toString()); //test 3207
}

function testRegexpPCRE_3185() {
  var regexp = /([^ab]*?)*/;
  assertEquals("*** F,F", regexp.exec("*** Failers").toString()); //test 3208
}

function testRegexpPCRE_3186() {
  var regexp = /([^ab]*?)*/;
  assertEquals(",", regexp.exec("abcX").toString()); //test 3209
}

function testRegexpPCRE_3187() {
  var regexp = /([^ab]*?)*/;
  assertEquals(",", regexp.exec("aBCX").toString()); //test 3210
}

function testRegexpPCRE_3188() {
  var regexp = /([^ab]*?)*/;
  assertEquals(",", regexp.exec("bbX").toString()); //test 3211
}

function testRegexpPCRE_3189() {
  var regexp = /([^ab]*?)*/;
  assertEquals("BBX               , ", regexp.exec("BBX               ").toString()); //test 3212
}

function testRegexpPCRE_3190() {
  var regexp = /([^ab]*?)*/;
  assertEquals(",", regexp.exec("ac").toString()); //test 3213
}

function testRegexpPCRE_3191() {
  var regexp = /([^ab]*?)*/;
  assertEquals(",", regexp.exec("aC").toString()); //test 3214
}

function testRegexpPCRE_3192() {
  var regexp = /([^ab]*?)*/;
  assertEquals(",", regexp.exec("bD").toString()); //test 3215
}

function testRegexpPCRE_3193() {
  var regexp = /([^ab]*?)*/;
  assertEquals("eleph,h", regexp.exec("elephant").toString()); //test 3216
}

function testRegexpPCRE_3194() {
  var regexp = /([^ab]*?)*/;
  assertEquals("Europe , ", regexp.exec("Europe ").toString()); //test 3217
}

function testRegexpPCRE_3195() {
  var regexp = /([^ab]*?)*/;
  assertEquals("frog,g", regexp.exec("frog").toString()); //test 3218
}

function testRegexpPCRE_3196() {
  var regexp = /([^ab]*?)*/;
  assertEquals("Fr,r", regexp.exec("France").toString()); //test 3219
}

function testRegexpPCRE_3197() {
  var regexp = /([^ab]*?)*/;
  assertEquals("*** F,F", regexp.exec("*** Failers").toString()); //test 3220
}

function testRegexpPCRE_3198() {
  var regexp = /([^ab]*?)*/;
  assertEquals("Afric,c", regexp.exec("Africa     ").toString()); //test 3221
}

function testRegexpPCRE_3199() {
  var regexp = /([^ab]*?)*/;
  assertEquals(",", regexp.exec("ab").toString()); //test 3222
}

function testRegexpPCRE_3200() {
  var regexp = /([^ab]*?)*/;
  assertEquals(",", regexp.exec("aBd").toString()); //test 3223
}

function testRegexpPCRE_3201() {
  var regexp = /([^ab]*?)*/;
  assertEquals("xy,y", regexp.exec("xy").toString()); //test 3224
}

function testRegexpPCRE_3202() {
  var regexp = /([^ab]*?)*/;
  assertEquals("xY,Y", regexp.exec("xY").toString()); //test 3225
}

function testRegexpPCRE_3203() {
  var regexp = /([^ab]*?)*/;
  assertEquals("ze,e", regexp.exec("zebra").toString()); //test 3226
}

function testRegexpPCRE_3204() {
  var regexp = /([^ab]*?)*/;
  assertEquals("Z,Z", regexp.exec("Zambesi").toString()); //test 3227
}

function testRegexpPCRE_3205() {
  var regexp = /([^ab]*?)*/;
  assertEquals("*** F,F", regexp.exec("*** Failers").toString()); //test 3228
}

function testRegexpPCRE_3206() {
  var regexp = /([^ab]*?)*/;
  assertEquals(",", regexp.exec("aCD  ").toString()); //test 3229
}

function testRegexpPCRE_3207() {
  var regexp = /([^ab]*?)*/;
  assertEquals("XY  , ", regexp.exec("XY  ").toString()); //test 3230
}

function testRegexpPCRE_3208() {
  var regexp = /([^ab]*?)*/;
  assertEquals("foo\n,\n", regexp.exec("foo\nbar").toString()); //test 3231
}

function testRegexpPCRE_3209() {
  var regexp = /([^ab]*?)*/;
  assertEquals("*** F,F", regexp.exec("*** Failers").toString()); //test 3232
}

function testRegexpPCRE_3210() {
  var regexp = /([^ab]*?)*/;
  assertEquals(",", regexp.exec("bar").toString()); //test 3233
}

function testRegexpPCRE_3211() {
  var regexp = /([^ab]*?)*/;
  assertEquals(",", regexp.exec("baz\nbar   ").toString()); //test 3234
}

function testRegexpPCRE_3212() {
  var regexp = /([^ab]*?)*/;
  assertEquals(",", regexp.exec("barbaz").toString()); //test 3235
}

function testRegexpPCRE_3213() {
  var regexp = /([^ab]*?)*/;
  assertEquals(",", regexp.exec("barbarbaz ").toString()); //test 3236
}

function testRegexpPCRE_3214() {
  var regexp = /([^ab]*?)*/;
  assertEquals("koo,o", regexp.exec("koobarbaz ").toString()); //test 3237
}

function testRegexpPCRE_3215() {
  var regexp = /([^ab]*?)*/;
  assertEquals("*** F,F", regexp.exec("*** Failers").toString()); //test 3238
}

function testRegexpPCRE_3216() {
  var regexp = /([^ab]*?)*/;
  assertEquals(",", regexp.exec("baz").toString()); //test 3239
}

function testRegexpPCRE_3217() {
  var regexp = /([^ab]*?)*/;
  assertEquals("foo,o", regexp.exec("foobarbaz ").toString()); //test 3240
}

function testRegexpPCRE_3218() {
  var regexp = /abc/;
  assertEquals("abc", regexp.exec("abc").toString()); //test 3241
}

function testRegexpPCRE_3219() {
  var regexp = /abc/;
  assertEquals("abc", regexp.exec("xabcy").toString()); //test 3242
}

function testRegexpPCRE_3220() {
  var regexp = /abc/;
  assertEquals("abc", regexp.exec("ababc").toString()); //test 3243
}

function testRegexpPCRE_3221() {
  var regexp = /abc/;
  assertEquals(null, regexp.exec("*** Failers")); //test 3244
}

function testRegexpPCRE_3222() {
  var regexp = /abc/;
  assertEquals(null, regexp.exec("xbc")); //test 3245
}

function testRegexpPCRE_3223() {
  var regexp = /abc/;
  assertEquals(null, regexp.exec("axc")); //test 3246
}

function testRegexpPCRE_3224() {
  var regexp = /abc/;
  assertEquals(null, regexp.exec("abx")); //test 3247
}

function testRegexpPCRE_3225() {
  var regexp = /ab*c/;
  assertEquals("abc", regexp.exec("abc").toString()); //test 3248
}

function testRegexpPCRE_3226() {
  var regexp = /ab*bc/;
  assertEquals("abc", regexp.exec("abc").toString()); //test 3249
}

function testRegexpPCRE_3227() {
  var regexp = /ab*bc/;
  assertEquals("abbc", regexp.exec("abbc").toString()); //test 3250
}

function testRegexpPCRE_3228() {
  var regexp = /ab*bc/;
  assertEquals("abbbbc", regexp.exec("abbbbc").toString()); //test 3251
}

function testRegexpPCRE_3229() {
  var regexp = /.{1}/;
  assertEquals("a", regexp.exec("abbbbc").toString()); //test 3252
}

function testRegexpPCRE_3230() {
  var regexp = /.{3,4}/;
  assertEquals("abbb", regexp.exec("abbbbc").toString()); //test 3253
}

function testRegexpPCRE_3231() {
  var regexp = /ab{0,}bc/;
  assertEquals("abbbbc", regexp.exec("abbbbc").toString()); //test 3254
}

function testRegexpPCRE_3232() {
  var regexp = /ab+bc/;
  assertEquals("abbc", regexp.exec("abbc").toString()); //test 3255
}

function testRegexpPCRE_3233() {
  var regexp = /ab+bc/;
  assertEquals(null, regexp.exec("*** Failers")); //test 3256
}

function testRegexpPCRE_3234() {
  var regexp = /ab+bc/;
  assertEquals(null, regexp.exec("abc")); //test 3257
}

function testRegexpPCRE_3235() {
  var regexp = /ab+bc/;
  assertEquals(null, regexp.exec("abq")); //test 3258
}

function testRegexpPCRE_3236() {
  var regexp = /ab+bc/;
  assertEquals("abbbbc", regexp.exec("abbbbc").toString()); //test 3259
}

function testRegexpPCRE_3237() {
  var regexp = /ab{1,}bc/;
  assertEquals("abbbbc", regexp.exec("abbbbc").toString()); //test 3260
}

function testRegexpPCRE_3238() {
  var regexp = /ab{1,3}bc/;
  assertEquals("abbbbc", regexp.exec("abbbbc").toString()); //test 3261
}

function testRegexpPCRE_3239() {
  var regexp = /ab{3,4}bc/;
  assertEquals("abbbbc", regexp.exec("abbbbc").toString()); //test 3262
}

function testRegexpPCRE_3240() {
  var regexp = /ab{4,5}bc/;
  assertEquals(null, regexp.exec("*** Failers")); //test 3263
}

function testRegexpPCRE_3241() {
  var regexp = /ab{4,5}bc/;
  assertEquals(null, regexp.exec("abq")); //test 3264
}

function testRegexpPCRE_3242() {
  var regexp = /ab{4,5}bc/;
  assertEquals(null, regexp.exec("abbbbc")); //test 3265
}

function testRegexpPCRE_3243() {
  var regexp = /ab?bc/;
  assertEquals("abbc", regexp.exec("abbc").toString()); //test 3266
}

function testRegexpPCRE_3244() {
  var regexp = /ab?bc/;
  assertEquals("abc", regexp.exec("abc").toString()); //test 3267
}

function testRegexpPCRE_3245() {
  var regexp = /ab{0,1}bc/;
  assertEquals("abc", regexp.exec("abc").toString()); //test 3268
}

function testRegexpPCRE_3246() {
  var regexp = /ab?c/;
  assertEquals("abc", regexp.exec("abc").toString()); //test 3269
}

function testRegexpPCRE_3247() {
  var regexp = /ab{0,1}c/;
  assertEquals("abc", regexp.exec("abc").toString()); //test 3270
}

function testRegexpPCRE_3248() {
  var regexp = /^abc$/;
  assertEquals("abc", regexp.exec("abc").toString()); //test 3271
}

function testRegexpPCRE_3249() {
  var regexp = /^abc$/;
  assertEquals(null, regexp.exec("*** Failers")); //test 3272
}

function testRegexpPCRE_3250() {
  var regexp = /^abc$/;
  assertEquals(null, regexp.exec("abbbbc")); //test 3273
}

function testRegexpPCRE_3251() {
  var regexp = /^abc$/;
  assertEquals(null, regexp.exec("abcc")); //test 3274
}

function testRegexpPCRE_3252() {
  var regexp = /^abc/;
  assertEquals("abc", regexp.exec("abcc").toString()); //test 3275
}

function testRegexpPCRE_3253() {
  var regexp = /abc$/;
  assertEquals("abc", regexp.exec("aabc").toString()); //test 3276
}

function testRegexpPCRE_3254() {
  var regexp = /abc$/;
  assertEquals(null, regexp.exec("*** Failers")); //test 3277
}

function testRegexpPCRE_3255() {
  var regexp = /abc$/;
  assertEquals("abc", regexp.exec("aabc").toString()); //test 3278
}

function testRegexpPCRE_3256() {
  var regexp = /abc$/;
  assertEquals(null, regexp.exec("aabcd")); //test 3279
}

function testRegexpPCRE_3257() {
  var regexp = /^/;
  assertEquals("", regexp.exec("abc").toString()); //test 3280
}

function testRegexpPCRE_3258() {
  var regexp = /$/;
  assertEquals("", regexp.exec("abc").toString()); //test 3281
}

function testRegexpPCRE_3259() {
  var regexp = /a.c/;
  assertEquals("abc", regexp.exec("abc").toString()); //test 3282
}

function testRegexpPCRE_3260() {
  var regexp = /a.c/;
  assertEquals("axc", regexp.exec("axc").toString()); //test 3283
}

function testRegexpPCRE_3261() {
  var regexp = /a.*c/;
  assertEquals("axyzc", regexp.exec("axyzc").toString()); //test 3284
}

function testRegexpPCRE_3262() {
  var regexp = /a[bc]d/;
  assertEquals("abd", regexp.exec("abd").toString()); //test 3285
}

function testRegexpPCRE_3263() {
  var regexp = /a[bc]d/;
  assertEquals(null, regexp.exec("*** Failers")); //test 3286
}

function testRegexpPCRE_3264() {
  var regexp = /a[bc]d/;
  assertEquals(null, regexp.exec("axyzd")); //test 3287
}

function testRegexpPCRE_3265() {
  var regexp = /a[bc]d/;
  assertEquals(null, regexp.exec("abc")); //test 3288
}

function testRegexpPCRE_3266() {
  var regexp = /a[b-d]e/;
  assertEquals("ace", regexp.exec("ace").toString()); //test 3289
}

function testRegexpPCRE_3267() {
  var regexp = /a[b-d]/;
  assertEquals("ac", regexp.exec("aac").toString()); //test 3290
}

function testRegexpPCRE_3268() {
  var regexp = /a[-b]/;
  assertEquals("a-", regexp.exec("a-").toString()); //test 3291
}

function testRegexpPCRE_3269() {
  var regexp = /a[b-]/;
  assertEquals("a-", regexp.exec("a-").toString()); //test 3292
}

function testRegexpPCRE_3270() {
  var regexp = /a]/;
  assertEquals("a]", regexp.exec("a]").toString()); //test 3293
}

function testRegexpPCRE_3271() {
  var regexp = /a[]]b/;
  assertEquals(null, regexp.exec("a]b")); //test 3294
}

function testRegexpPCRE_3272() {
  var regexp = /a[^bc]d/;
  assertEquals("aed", regexp.exec("aed").toString()); //test 3295
}

function testRegexpPCRE_3273() {
  var regexp = /a[^bc]d/;
  assertEquals(null, regexp.exec("*** Failers")); //test 3296
}

function testRegexpPCRE_3274() {
  var regexp = /a[^bc]d/;
  assertEquals(null, regexp.exec("abd")); //test 3297
}

function testRegexpPCRE_3275() {
  var regexp = /a[^bc]d/;
  assertEquals(null, regexp.exec("abd")); //test 3298
}

function testRegexpPCRE_3276() {
  var regexp = /a[^-b]c/;
  assertEquals("adc", regexp.exec("adc").toString()); //test 3299
}

function testRegexpPCRE_3277() {
  var regexp = /a[^]b]c/;
  assertEquals(null, regexp.exec("adc")); //test 3300
}

function testRegexpPCRE_3278() {
  var regexp = /a[^]b]c/;
  assertEquals(null, regexp.exec("*** Failers")); //test 3301
}

function testRegexpPCRE_3279() {
  var regexp = /a[^]b]c/;
  assertEquals(null, regexp.exec("a-c")); //test 3302
}

function testRegexpPCRE_3280() {
  var regexp = /a[^]b]c/;
  assertEquals(null, regexp.exec("a]c")); //test 3303
}

function testRegexpPCRE_3281() {
  var regexp = /\ba\b/;
  assertEquals("a", regexp.exec("a-").toString()); //test 3304
}

function testRegexpPCRE_3282() {
  var regexp = /\ba\b/;
  assertEquals("a", regexp.exec("-a").toString()); //test 3305
}

function testRegexpPCRE_3283() {
  var regexp = /\ba\b/;
  assertEquals("a", regexp.exec("-a-").toString()); //test 3306
}

function testRegexpPCRE_3284() {
  var regexp = /\by\b/;
  assertEquals(null, regexp.exec("*** Failers")); //test 3307
}

function testRegexpPCRE_3285() {
  var regexp = /\by\b/;
  assertEquals(null, regexp.exec("xy")); //test 3308
}

function testRegexpPCRE_3286() {
  var regexp = /\by\b/;
  assertEquals(null, regexp.exec("yz")); //test 3309
}

function testRegexpPCRE_3287() {
  var regexp = /\by\b/;
  assertEquals(null, regexp.exec("xyz")); //test 3310
}

function testRegexpPCRE_3288() {
  var regexp = /\Ba\B/;
  assertEquals("a", regexp.exec("*** Failers").toString()); //test 3311
}

function testRegexpPCRE_3289() {
  var regexp = /\Ba\B/;
  assertEquals(null, regexp.exec("a-")); //test 3312
}

function testRegexpPCRE_3290() {
  var regexp = /\Ba\B/;
  assertEquals(null, regexp.exec("-a")); //test 3313
}

function testRegexpPCRE_3291() {
  var regexp = /\Ba\B/;
  assertEquals(null, regexp.exec("-a-")); //test 3314
}

function testRegexpPCRE_3292() {
  var regexp = /\By\b/;
  assertEquals("y", regexp.exec("xy").toString()); //test 3315
}

function testRegexpPCRE_3293() {
  var regexp = /\by\B/;
  assertEquals("y", regexp.exec("yz").toString()); //test 3316
}

function testRegexpPCRE_3294() {
  var regexp = /\By\B/;
  assertEquals("y", regexp.exec("xyz").toString()); //test 3317
}

function testRegexpPCRE_3295() {
  var regexp = /\w/;
  assertEquals("a", regexp.exec("a").toString()); //test 3318
}

function testRegexpPCRE_3296() {
  var regexp = /\W/;
  assertEquals("-", regexp.exec("-").toString()); //test 3319
}

function testRegexpPCRE_3297() {
  var regexp = /\W/;
  assertEquals("*", regexp.exec("*** Failers").toString()); //test 3320
}

function testRegexpPCRE_3298() {
  var regexp = /\W/;
  assertEquals("-", regexp.exec("-").toString()); //test 3321
}

function testRegexpPCRE_3299() {
  var regexp = /\W/;
  assertEquals(null, regexp.exec("a")); //test 3322
}

function testRegexpPCRE_3300() {
  var regexp = /a\sb/;
  assertEquals("a b", regexp.exec("a b").toString()); //test 3323
}

function testRegexpPCRE_3301() {
  var regexp = /a\Sb/;
  assertEquals("a-b", regexp.exec("a-b").toString()); //test 3324
}

function testRegexpPCRE_3302() {
  var regexp = /a\Sb/;
  assertEquals(null, regexp.exec("*** Failers")); //test 3325
}

function testRegexpPCRE_3303() {
  var regexp = /a\Sb/;
  assertEquals("a-b", regexp.exec("a-b").toString()); //test 3326
}

function testRegexpPCRE_3304() {
  var regexp = /a\Sb/;
  assertEquals(null, regexp.exec("a b")); //test 3327
}

function testRegexpPCRE_3305() {
  var regexp = /\d/;
  assertEquals("1", regexp.exec("1").toString()); //test 3328
}

function testRegexpPCRE_3306() {
  var regexp = /\D/;
  assertEquals("-", regexp.exec("-").toString()); //test 3329
}

function testRegexpPCRE_3307() {
  var regexp = /\D/;
  assertEquals("*", regexp.exec("*** Failers").toString()); //test 3330
}

function testRegexpPCRE_3308() {
  var regexp = /\D/;
  assertEquals("-", regexp.exec("-").toString()); //test 3331
}

function testRegexpPCRE_3309() {
  var regexp = /\D/;
  assertEquals(null, regexp.exec("1")); //test 3332
}

function testRegexpPCRE_3310() {
  var regexp = /[\w]/;
  assertEquals("a", regexp.exec("a").toString()); //test 3333
}

function testRegexpPCRE_3311() {
  var regexp = /[\W]/;
  assertEquals("-", regexp.exec("-").toString()); //test 3334
}

function testRegexpPCRE_3312() {
  var regexp = /[\W]/;
  assertEquals("*", regexp.exec("*** Failers").toString()); //test 3335
}

function testRegexpPCRE_3313() {
  var regexp = /[\W]/;
  assertEquals("-", regexp.exec("-").toString()); //test 3336
}

function testRegexpPCRE_3314() {
  var regexp = /[\W]/;
  assertEquals(null, regexp.exec("a")); //test 3337
}

function testRegexpPCRE_3315() {
  var regexp = /a[\s]b/;
  assertEquals("a b", regexp.exec("a b").toString()); //test 3338
}

function testRegexpPCRE_3316() {
  var regexp = /a[\S]b/;
  assertEquals("a-b", regexp.exec("a-b").toString()); //test 3339
}

function testRegexpPCRE_3317() {
  var regexp = /a[\S]b/;
  assertEquals(null, regexp.exec("*** Failers")); //test 3340
}

function testRegexpPCRE_3318() {
  var regexp = /a[\S]b/;
  assertEquals("a-b", regexp.exec("a-b").toString()); //test 3341
}

function testRegexpPCRE_3319() {
  var regexp = /a[\S]b/;
  assertEquals(null, regexp.exec("a b")); //test 3342
}

function testRegexpPCRE_3320() {
  var regexp = /[\d]/;
  assertEquals("1", regexp.exec("1").toString()); //test 3343
}

function testRegexpPCRE_3321() {
  var regexp = /[\D]/;
  assertEquals("-", regexp.exec("-").toString()); //test 3344
}

function testRegexpPCRE_3322() {
  var regexp = /[\D]/;
  assertEquals("*", regexp.exec("*** Failers").toString()); //test 3345
}

function testRegexpPCRE_3323() {
  var regexp = /[\D]/;
  assertEquals("-", regexp.exec("-").toString()); //test 3346
}

function testRegexpPCRE_3324() {
  var regexp = /[\D]/;
  assertEquals(null, regexp.exec("1")); //test 3347
}

function testRegexpPCRE_3325() {
  var regexp = /ab|cd/;
  assertEquals("ab", regexp.exec("abc").toString()); //test 3348
}

function testRegexpPCRE_3326() {
  var regexp = /ab|cd/;
  assertEquals("ab", regexp.exec("abcd").toString()); //test 3349
}

function testRegexpPCRE_3327() {
  var regexp = /()ef/;
  assertEquals("ef,", regexp.exec("def").toString()); //test 3350
}

function testRegexpPCRE_3328() {
  var regexp = /a\(b/;
  assertEquals("a(b", regexp.exec("a(b").toString()); //test 3351
}

function testRegexpPCRE_3329() {
  var regexp = /a\(b/;
  assertEquals(null, regexp.exec("ab")); //test 3352
}

function testRegexpPCRE_3330() {
  var regexp = /a\(b/;
  assertEquals(null, regexp.exec("a((b")); //test 3353
}

function testRegexpPCRE_3331() {
  var regexp = /a\\b/;
  assertEquals(null, regexp.exec("a\x08")); //test 3354
}

function testRegexpPCRE_3332() {
  var regexp = /((a))/;
  assertEquals("a,a,a", regexp.exec("abc").toString()); //test 3355
}

function testRegexpPCRE_3333() {
  var regexp = /(a)b(c)/;
  assertEquals("abc,a,c", regexp.exec("abc").toString()); //test 3356
}

function testRegexpPCRE_3334() {
  var regexp = /a+b+c/;
  assertEquals("abc", regexp.exec("aabbabc").toString()); //test 3357
}

function testRegexpPCRE_3335() {
  var regexp = /a{1,}b{1,}c/;
  assertEquals("abc", regexp.exec("aabbabc").toString()); //test 3358
}

function testRegexpPCRE_3336() {
  var regexp = /a.+?c/;
  assertEquals("abc", regexp.exec("abcabc").toString()); //test 3359
}

function testRegexpPCRE_3337() {
  var regexp = /(a+|b)*/;
  assertEquals("ab,b", regexp.exec("ab").toString()); //test 3360
}

function testRegexpPCRE_3338() {
  var regexp = /(a+|b){0,}/;
  assertEquals("ab,b", regexp.exec("ab").toString()); //test 3361
}

function testRegexpPCRE_3339() {
  var regexp = /(a+|b)+/;
  assertEquals("ab,b", regexp.exec("ab").toString()); //test 3362
}

function testRegexpPCRE_3340() {
  var regexp = /(a+|b){1,}/;
  assertEquals("ab,b", regexp.exec("ab").toString()); //test 3363
}

function testRegexpPCRE_3341() {
  var regexp = /(a+|b)?/;
  assertEquals("a,a", regexp.exec("ab").toString()); //test 3364
}

function testRegexpPCRE_3342() {
  var regexp = /(a+|b){0,1}/;
  assertEquals("a,a", regexp.exec("ab").toString()); //test 3365
}

function testRegexpPCRE_3343() {
  var regexp = /[^ab]*/;
  assertEquals("cde", regexp.exec("cde").toString()); //test 3366
}

function testRegexpPCRE_3344() {
  var regexp = /abc/;
  assertEquals(null, regexp.exec("*** Failers")); //test 3367
}

function testRegexpPCRE_3345() {
  var regexp = /abc/;
  assertEquals(null, regexp.exec("b")); //test 3368
}

function testRegexpPCRE_3346() {
  var regexp = /([abc])*d/;
  assertEquals("abbbcd,c", regexp.exec("abbbcd").toString()); //test 3369
}

function testRegexpPCRE_3347() {
  var regexp = /([abc])*bcd/;
  assertEquals("abcd,a", regexp.exec("abcd").toString()); //test 3370
}

function testRegexpPCRE_3348() {
  var regexp = /a|b|c|d|e/;
  assertEquals("e", regexp.exec("e").toString()); //test 3371
}

function testRegexpPCRE_3349() {
  var regexp = /(a|b|c|d|e)f/;
  assertEquals("ef,e", regexp.exec("ef").toString()); //test 3372
}

function testRegexpPCRE_3350() {
  var regexp = /abcd*efg/;
  assertEquals("abcdefg", regexp.exec("abcdefg").toString()); //test 3373
}

function testRegexpPCRE_3351() {
  var regexp = /ab*/;
  assertEquals("ab", regexp.exec("xabyabbbz").toString()); //test 3374
}

function testRegexpPCRE_3352() {
  var regexp = /ab*/;
  assertEquals("a", regexp.exec("xayabbbz").toString()); //test 3375
}

function testRegexpPCRE_3353() {
  var regexp = /(ab|cd)e/;
  assertEquals("cde,cd", regexp.exec("abcde").toString()); //test 3376
}

function testRegexpPCRE_3354() {
  var regexp = /[abhgefdc]ij/;
  assertEquals("hij", regexp.exec("hij").toString()); //test 3377
}

function testRegexpPCRE_3355() {
  var regexp = /(abc|)ef/;
  assertEquals("ef,", regexp.exec("abcdef").toString()); //test 3378
}

function testRegexpPCRE_3356() {
  var regexp = /(a|b)c*d/;
  assertEquals("bcd,b", regexp.exec("abcd").toString()); //test 3379
}

function testRegexpPCRE_3357() {
  var regexp = /(ab|ab*)bc/;
  assertEquals("abc,a", regexp.exec("abc").toString()); //test 3380
}

function testRegexpPCRE_3358() {
  var regexp = /a([bc]*)c*/;
  assertEquals("abc,bc", regexp.exec("abc").toString()); //test 3381
}

function testRegexpPCRE_3359() {
  var regexp = /a([bc]*)(c*d)/;
  assertEquals("abcd,bc,d", regexp.exec("abcd").toString()); //test 3382
}

function testRegexpPCRE_3360() {
  var regexp = /a([bc]+)(c*d)/;
  assertEquals("abcd,bc,d", regexp.exec("abcd").toString()); //test 3383
}

function testRegexpPCRE_3361() {
  var regexp = /a([bc]*)(c+d)/;
  assertEquals("abcd,b,cd", regexp.exec("abcd").toString()); //test 3384
}

function testRegexpPCRE_3362() {
  var regexp = /a[bcd]*dcdcde/;
  assertEquals("adcdcde", regexp.exec("adcdcde").toString()); //test 3385
}

function testRegexpPCRE_3363() {
  var regexp = /a[bcd]+dcdcde/;
  assertEquals(null, regexp.exec("*** Failers")); //test 3386
}

function testRegexpPCRE_3364() {
  var regexp = /a[bcd]+dcdcde/;
  assertEquals(null, regexp.exec("abcde")); //test 3387
}

function testRegexpPCRE_3365() {
  var regexp = /a[bcd]+dcdcde/;
  assertEquals(null, regexp.exec("adcdcde")); //test 3388
}

function testRegexpPCRE_3366() {
  var regexp = /(ab|a)b*c/;
  assertEquals("abc,ab", regexp.exec("abc").toString()); //test 3389
}

function testRegexpPCRE_3367() {
  var regexp = /((a)(b)c)(d)/;
  assertEquals("abcd,abc,a,b,d", regexp.exec("abcd").toString()); //test 3390
}

function testRegexpPCRE_3368() {
  var regexp = /[a-zA-Z_][a-zA-Z0-9_]*/;
  assertEquals("alpha", regexp.exec("alpha").toString()); //test 3391
}

function testRegexpPCRE_3369() {
  var regexp = /^a(bc+|b[eh])g|.h$/;
  assertEquals("bh,", regexp.exec("abh").toString()); //test 3392
}

function testRegexpPCRE_3370() {
  var regexp = /(bc+d$|ef*g.|h?i(j|k))/;
  assertEquals("effgz,effgz,", regexp.exec("effgz").toString()); //test 3393
}

function testRegexpPCRE_3371() {
  var regexp = /(bc+d$|ef*g.|h?i(j|k))/;
  assertEquals("ij,ij,j", regexp.exec("ij").toString()); //test 3394
}

function testRegexpPCRE_3372() {
  var regexp = /(bc+d$|ef*g.|h?i(j|k))/;
  assertEquals("effgz,effgz,", regexp.exec("reffgz").toString()); //test 3395
}

function testRegexpPCRE_3373() {
  var regexp = /(bc+d$|ef*g.|h?i(j|k))/;
  assertEquals(null, regexp.exec("*** Failers")); //test 3396
}

function testRegexpPCRE_3374() {
  var regexp = /(bc+d$|ef*g.|h?i(j|k))/;
  assertEquals(null, regexp.exec("effg")); //test 3397
}

function testRegexpPCRE_3375() {
  var regexp = /(bc+d$|ef*g.|h?i(j|k))/;
  assertEquals(null, regexp.exec("bcdd")); //test 3398
}

function testRegexpPCRE_3376() {
  var regexp = /((((((((((a))))))))))/;
  assertEquals("a,a,a,a,a,a,a,a,a,a,a", regexp.exec("a").toString()); //test 3399
}

function testRegexpPCRE_3377() {
  var regexp = /(((((((((a)))))))))/;
  assertEquals("a,a,a,a,a,a,a,a,a,a", regexp.exec("a").toString()); //test 3400
}

function testRegexpPCRE_3378() {
  var regexp = /multiple words of text/;
  assertEquals(null, regexp.exec("*** Failers")); //test 3401
}

function testRegexpPCRE_3379() {
  var regexp = /multiple words of text/;
  assertEquals(null, regexp.exec("aa")); //test 3402
}

function testRegexpPCRE_3380() {
  var regexp = /multiple words of text/;
  assertEquals(null, regexp.exec("uh-uh")); //test 3403
}

function testRegexpPCRE_3381() {
  var regexp = /multiple words/;
  assertEquals("multiple words", regexp.exec("multiple words, yeah").toString()); //test 3404
}

function testRegexpPCRE_3382() {
  var regexp = /(.*)c(.*)/;
  assertEquals("abcde,ab,de", regexp.exec("abcde").toString()); //test 3405
}

function testRegexpPCRE_3383() {
  var regexp = /\((.*), (.*)\)/;
  assertEquals("(a, b),a,b", regexp.exec("(a, b)").toString()); //test 3406
}

function testRegexpPCRE_3384() {
  var regexp = /abcd/;
  assertEquals("abcd", regexp.exec("abcd").toString()); //test 3407
}

function testRegexpPCRE_3385() {
  var regexp = /a(bc)d/;
  assertEquals("abcd,bc", regexp.exec("abcd").toString()); //test 3408
}

function testRegexpPCRE_3386() {
  var regexp = /a[-]?c/;
  assertEquals("ac", regexp.exec("ac").toString()); //test 3409
}

function testRegexpPCRE_3387() {
  var regexp = /abc/i;
  assertEquals("ABC", regexp.exec("ABC").toString()); //test 3410
}

function testRegexpPCRE_3388() {
  var regexp = /abc/i;
  assertEquals("ABC", regexp.exec("XABCY").toString()); //test 3411
}

function testRegexpPCRE_3389() {
  var regexp = /abc/i;
  assertEquals("ABC", regexp.exec("ABABC").toString()); //test 3412
}

function testRegexpPCRE_3390() {
  var regexp = /abc/i;
  assertEquals(null, regexp.exec("*** Failers")); //test 3413
}

function testRegexpPCRE_3391() {
  var regexp = /abc/i;
  assertEquals(null, regexp.exec("aaxabxbaxbbx")); //test 3414
}

function testRegexpPCRE_3392() {
  var regexp = /abc/i;
  assertEquals(null, regexp.exec("XBC")); //test 3415
}

function testRegexpPCRE_3393() {
  var regexp = /abc/i;
  assertEquals(null, regexp.exec("AXC")); //test 3416
}

function testRegexpPCRE_3394() {
  var regexp = /abc/i;
  assertEquals(null, regexp.exec("ABX")); //test 3417
}

function testRegexpPCRE_3395() {
  var regexp = /ab*c/i;
  assertEquals("ABC", regexp.exec("ABC").toString()); //test 3418
}

function testRegexpPCRE_3396() {
  var regexp = /ab*bc/i;
  assertEquals("ABC", regexp.exec("ABC").toString()); //test 3419
}

function testRegexpPCRE_3397() {
  var regexp = /ab*bc/i;
  assertEquals("ABBC", regexp.exec("ABBC").toString()); //test 3420
}

function testRegexpPCRE_3398() {
  var regexp = /ab*?bc/i;
  assertEquals("ABBBBC", regexp.exec("ABBBBC").toString()); //test 3421
}

function testRegexpPCRE_3399() {
  var regexp = /ab{0,}?bc/i;
  assertEquals("ABBBBC", regexp.exec("ABBBBC").toString()); //test 3422
}

function testRegexpPCRE_3400() {
  var regexp = /ab+?bc/i;
  assertEquals("ABBC", regexp.exec("ABBC").toString()); //test 3423
}

function testRegexpPCRE_3401() {
  var regexp = /ab+bc/i;
  assertEquals(null, regexp.exec("*** Failers")); //test 3424
}

function testRegexpPCRE_3402() {
  var regexp = /ab+bc/i;
  assertEquals(null, regexp.exec("ABC")); //test 3425
}

function testRegexpPCRE_3403() {
  var regexp = /ab+bc/i;
  assertEquals(null, regexp.exec("ABQ")); //test 3426
}

function testRegexpPCRE_3404() {
  var regexp = /ab+bc/i;
  assertEquals("ABBBBC", regexp.exec("ABBBBC").toString()); //test 3427
}

function testRegexpPCRE_3405() {
  var regexp = /ab{1,}?bc/i;
  assertEquals("ABBBBC", regexp.exec("ABBBBC").toString()); //test 3428
}

function testRegexpPCRE_3406() {
  var regexp = /ab{1,3}?bc/i;
  assertEquals("ABBBBC", regexp.exec("ABBBBC").toString()); //test 3429
}

function testRegexpPCRE_3407() {
  var regexp = /ab{3,4}?bc/i;
  assertEquals("ABBBBC", regexp.exec("ABBBBC").toString()); //test 3430
}

function testRegexpPCRE_3408() {
  var regexp = /ab{4,5}?bc/i;
  assertEquals(null, regexp.exec("*** Failers")); //test 3431
}

function testRegexpPCRE_3409() {
  var regexp = /ab{4,5}?bc/i;
  assertEquals(null, regexp.exec("ABQ")); //test 3432
}

function testRegexpPCRE_3410() {
  var regexp = /ab{4,5}?bc/i;
  assertEquals(null, regexp.exec("ABBBBC")); //test 3433
}

function testRegexpPCRE_3411() {
  var regexp = /ab??bc/i;
  assertEquals("ABBC", regexp.exec("ABBC").toString()); //test 3434
}

function testRegexpPCRE_3412() {
  var regexp = /ab??bc/i;
  assertEquals("ABC", regexp.exec("ABC").toString()); //test 3435
}

function testRegexpPCRE_3413() {
  var regexp = /ab{0,1}?bc/i;
  assertEquals("ABC", regexp.exec("ABC").toString()); //test 3436
}

function testRegexpPCRE_3414() {
  var regexp = /ab??c/i;
  assertEquals("ABC", regexp.exec("ABC").toString()); //test 3437
}

function testRegexpPCRE_3415() {
  var regexp = /ab{0,1}?c/i;
  assertEquals("ABC", regexp.exec("ABC").toString()); //test 3438
}

function testRegexpPCRE_3416() {
  var regexp = /^abc$/i;
  assertEquals("ABC", regexp.exec("ABC").toString()); //test 3439
}

function testRegexpPCRE_3417() {
  var regexp = /^abc$/i;
  assertEquals(null, regexp.exec("*** Failers")); //test 3440
}

function testRegexpPCRE_3418() {
  var regexp = /^abc$/i;
  assertEquals(null, regexp.exec("ABBBBC")); //test 3441
}

function testRegexpPCRE_3419() {
  var regexp = /^abc$/i;
  assertEquals(null, regexp.exec("ABCC")); //test 3442
}

function testRegexpPCRE_3420() {
  var regexp = /^abc/i;
  assertEquals("ABC", regexp.exec("ABCC").toString()); //test 3443
}

function testRegexpPCRE_3421() {
  var regexp = /abc$/i;
  assertEquals("ABC", regexp.exec("AABC").toString()); //test 3444
}

function testRegexpPCRE_3422() {
  var regexp = /^/i;
  assertEquals("", regexp.exec("ABC").toString()); //test 3445
}

function testRegexpPCRE_3423() {
  var regexp = /$/i;
  assertEquals("", regexp.exec("ABC").toString()); //test 3446
}

function testRegexpPCRE_3424() {
  var regexp = /a.c/i;
  assertEquals("ABC", regexp.exec("ABC").toString()); //test 3447
}

function testRegexpPCRE_3425() {
  var regexp = /a.c/i;
  assertEquals("AXC", regexp.exec("AXC").toString()); //test 3448
}

function testRegexpPCRE_3426() {
  var regexp = /a.*?c/i;
  assertEquals("AXYZC", regexp.exec("AXYZC").toString()); //test 3449
}

function testRegexpPCRE_3427() {
  var regexp = /a.*c/i;
  assertEquals(null, regexp.exec("*** Failers")); //test 3450
}

function testRegexpPCRE_3428() {
  var regexp = /a.*c/i;
  assertEquals("AABC", regexp.exec("AABC").toString()); //test 3451
}

function testRegexpPCRE_3429() {
  var regexp = /a.*c/i;
  assertEquals(null, regexp.exec("AXYZD")); //test 3452
}

function testRegexpPCRE_3430() {
  var regexp = /a[bc]d/i;
  assertEquals("ABD", regexp.exec("ABD").toString()); //test 3453
}

function testRegexpPCRE_3431() {
  var regexp = /a[b-d]e/i;
  assertEquals("ACE", regexp.exec("ACE").toString()); //test 3454
}

function testRegexpPCRE_3432() {
  var regexp = /a[b-d]e/i;
  assertEquals(null, regexp.exec("*** Failers")); //test 3455
}

function testRegexpPCRE_3433() {
  var regexp = /a[b-d]e/i;
  assertEquals(null, regexp.exec("ABC")); //test 3456
}

function testRegexpPCRE_3434() {
  var regexp = /a[b-d]e/i;
  assertEquals(null, regexp.exec("ABD")); //test 3457
}

function testRegexpPCRE_3435() {
  var regexp = /a[b-d]/i;
  assertEquals("AC", regexp.exec("AAC").toString()); //test 3458
}

function testRegexpPCRE_3436() {
  var regexp = /a[-b]/i;
  assertEquals("A-", regexp.exec("A-").toString()); //test 3459
}

function testRegexpPCRE_3437() {
  var regexp = /a[b-]/i;
  assertEquals("A-", regexp.exec("A-").toString()); //test 3460
}

function testRegexpPCRE_3438() {
  var regexp = /a]/i;
  assertEquals("A]", regexp.exec("A]").toString()); //test 3461
}

function testRegexpPCRE_3439() {
  var regexp = /a[]]b/i;
  assertEquals(null, regexp.exec("A]B")); //test 3462
}

function testRegexpPCRE_3440() {
  var regexp = /a[^bc]d/i;
  assertEquals("AED", regexp.exec("AED").toString()); //test 3463
}

function testRegexpPCRE_3441() {
  var regexp = /a[^-b]c/i;
  assertEquals("ADC", regexp.exec("ADC").toString()); //test 3464
}

function testRegexpPCRE_3442() {
  var regexp = /a[^-b]c/i;
  assertEquals(null, regexp.exec("*** Failers")); //test 3465
}

function testRegexpPCRE_3443() {
  var regexp = /a[^-b]c/i;
  assertEquals(null, regexp.exec("ABD")); //test 3466
}

function testRegexpPCRE_3444() {
  var regexp = /a[^-b]c/i;
  assertEquals(null, regexp.exec("A-C")); //test 3467
}

function testRegexpPCRE_3445() {
  var regexp = /a[^]b]c/i;
  assertEquals(null, regexp.exec("ADC")); //test 3468
}

function testRegexpPCRE_3446() {
  var regexp = /ab|cd/i;
  assertEquals("AB", regexp.exec("ABC").toString()); //test 3469
}

function testRegexpPCRE_3447() {
  var regexp = /ab|cd/i;
  assertEquals("AB", regexp.exec("ABCD").toString()); //test 3470
}

function testRegexpPCRE_3448() {
  var regexp = /()ef/i;
  assertEquals("EF,", regexp.exec("DEF").toString()); //test 3471
}

function testRegexpPCRE_3449() {
  var regexp = /$b/i;
  assertEquals(null, regexp.exec("*** Failers")); //test 3472
}

function testRegexpPCRE_3450() {
  var regexp = /$b/i;
  assertEquals(null, regexp.exec("A]C")); //test 3473
}

function testRegexpPCRE_3451() {
  var regexp = /$b/i;
  assertEquals(null, regexp.exec("B")); //test 3474
}

function testRegexpPCRE_3452() {
  var regexp = /a\(b/i;
  assertEquals("A(B", regexp.exec("A(B").toString()); //test 3475
}

function testRegexpPCRE_3453() {
  var regexp = /a\(b/i;
  assertEquals(null, regexp.exec("AB")); //test 3476
}

function testRegexpPCRE_3454() {
  var regexp = /a\(b/i;
  assertEquals(null, regexp.exec("A((B")); //test 3477
}

function testRegexpPCRE_3455() {
  var regexp = /a\\b/i;
  assertEquals(null, regexp.exec("AB")); //test 3478
}

function testRegexpPCRE_3456() {
  var regexp = /((a))/i;
  assertEquals("A,A,A", regexp.exec("ABC").toString()); //test 3479
}

function testRegexpPCRE_3457() {
  var regexp = /(a)b(c)/i;
  assertEquals("ABC,A,C", regexp.exec("ABC").toString()); //test 3480
}

function testRegexpPCRE_3458() {
  var regexp = /a+b+c/i;
  assertEquals("ABC", regexp.exec("AABBABC").toString()); //test 3481
}

function testRegexpPCRE_3459() {
  var regexp = /a{1,}b{1,}c/i;
  assertEquals("ABC", regexp.exec("AABBABC").toString()); //test 3482
}

function testRegexpPCRE_3460() {
  var regexp = /a.+?c/i;
  assertEquals("ABC", regexp.exec("ABCABC").toString()); //test 3483
}

function testRegexpPCRE_3461() {
  var regexp = /a.*?c/i;
  assertEquals("ABC", regexp.exec("ABCABC").toString()); //test 3484
}

function testRegexpPCRE_3462() {
  var regexp = /a.{0,5}?c/i;
  assertEquals("ABC", regexp.exec("ABCABC").toString()); //test 3485
}

function testRegexpPCRE_3463() {
  var regexp = /(a+|b)*/i;
  assertEquals("AB,B", regexp.exec("AB").toString()); //test 3486
}

function testRegexpPCRE_3464() {
  var regexp = /(a+|b){0,}/i;
  assertEquals("AB,B", regexp.exec("AB").toString()); //test 3487
}

function testRegexpPCRE_3465() {
  var regexp = /(a+|b)+/i;
  assertEquals("AB,B", regexp.exec("AB").toString()); //test 3488
}

function testRegexpPCRE_3466() {
  var regexp = /(a+|b){1,}/i;
  assertEquals("AB,B", regexp.exec("AB").toString()); //test 3489
}

function testRegexpPCRE_3467() {
  var regexp = /(a+|b)?/i;
  assertEquals("A,A", regexp.exec("AB").toString()); //test 3490
}

function testRegexpPCRE_3468() {
  var regexp = /(a+|b){0,1}/i;
  assertEquals("A,A", regexp.exec("AB").toString()); //test 3491
}

function testRegexpPCRE_3469() {
  var regexp = /(a+|b){0,1}?/i;
  assertEquals(",", regexp.exec("AB").toString()); //test 3492
}

function testRegexpPCRE_3470() {
  var regexp = /[^ab]*/i;
  assertEquals("CDE", regexp.exec("CDE").toString()); //test 3493
}

function testRegexpPCRE_3471() {
  var regexp = /([abc])*d/i;
  assertEquals("ABBBCD,C", regexp.exec("ABBBCD").toString()); //test 3494
}

function testRegexpPCRE_3472() {
  var regexp = /([abc])*bcd/i;
  assertEquals("ABCD,A", regexp.exec("ABCD").toString()); //test 3495
}

function testRegexpPCRE_3473() {
  var regexp = /a|b|c|d|e/i;
  assertEquals("E", regexp.exec("E").toString()); //test 3496
}

function testRegexpPCRE_3474() {
  var regexp = /(a|b|c|d|e)f/i;
  assertEquals("EF,E", regexp.exec("EF").toString()); //test 3497
}

function testRegexpPCRE_3475() {
  var regexp = /abcd*efg/i;
  assertEquals("ABCDEFG", regexp.exec("ABCDEFG").toString()); //test 3498
}

function testRegexpPCRE_3476() {
  var regexp = /ab*/i;
  assertEquals("AB", regexp.exec("XABYABBBZ").toString()); //test 3499
}

function testRegexpPCRE_3477() {
  var regexp = /ab*/i;
  assertEquals("A", regexp.exec("XAYABBBZ").toString()); //test 3500
}

function testRegexpPCRE_3478() {
  var regexp = /(ab|cd)e/i;
  assertEquals("CDE,CD", regexp.exec("ABCDE").toString()); //test 3501
}

function testRegexpPCRE_3479() {
  var regexp = /[abhgefdc]ij/i;
  assertEquals("HIJ", regexp.exec("HIJ").toString()); //test 3502
}

function testRegexpPCRE_3480() {
  var regexp = /^(ab|cd)e/i;
  assertEquals(null, regexp.exec("ABCDE")); //test 3503
}

function testRegexpPCRE_3481() {
  var regexp = /(abc|)ef/i;
  assertEquals("EF,", regexp.exec("ABCDEF").toString()); //test 3504
}

function testRegexpPCRE_3482() {
  var regexp = /(a|b)c*d/i;
  assertEquals("BCD,B", regexp.exec("ABCD").toString()); //test 3505
}

function testRegexpPCRE_3483() {
  var regexp = /(ab|ab*)bc/i;
  assertEquals("ABC,A", regexp.exec("ABC").toString()); //test 3506
}

function testRegexpPCRE_3484() {
  var regexp = /a([bc]*)c*/i;
  assertEquals("ABC,BC", regexp.exec("ABC").toString()); //test 3507
}

function testRegexpPCRE_3485() {
  var regexp = /a([bc]*)(c*d)/i;
  assertEquals("ABCD,BC,D", regexp.exec("ABCD").toString()); //test 3508
}

function testRegexpPCRE_3486() {
  var regexp = /a([bc]+)(c*d)/i;
  assertEquals("ABCD,BC,D", regexp.exec("ABCD").toString()); //test 3509
}

function testRegexpPCRE_3487() {
  var regexp = /a([bc]*)(c+d)/i;
  assertEquals("ABCD,B,CD", regexp.exec("ABCD").toString()); //test 3510
}

function testRegexpPCRE_3488() {
  var regexp = /a[bcd]*dcdcde/i;
  assertEquals("ADCDCDE", regexp.exec("ADCDCDE").toString()); //test 3511
}

function testRegexpPCRE_3489() {
  var regexp = /(ab|a)b*c/i;
  assertEquals("ABC,AB", regexp.exec("ABC").toString()); //test 3512
}

function testRegexpPCRE_3490() {
  var regexp = /((a)(b)c)(d)/i;
  assertEquals("ABCD,ABC,A,B,D", regexp.exec("ABCD").toString()); //test 3513
}

function testRegexpPCRE_3491() {
  var regexp = /[a-zA-Z_][a-zA-Z0-9_]*/i;
  assertEquals("ALPHA", regexp.exec("ALPHA").toString()); //test 3514
}

function testRegexpPCRE_3492() {
  var regexp = /^a(bc+|b[eh])g|.h$/i;
  assertEquals("BH,", regexp.exec("ABH").toString()); //test 3515
}

function testRegexpPCRE_3493() {
  var regexp = /(bc+d$|ef*g.|h?i(j|k))/i;
  assertEquals("EFFGZ,EFFGZ,", regexp.exec("EFFGZ").toString()); //test 3516
}

function testRegexpPCRE_3494() {
  var regexp = /(bc+d$|ef*g.|h?i(j|k))/i;
  assertEquals("IJ,IJ,J", regexp.exec("IJ").toString()); //test 3517
}

function testRegexpPCRE_3495() {
  var regexp = /(bc+d$|ef*g.|h?i(j|k))/i;
  assertEquals("EFFGZ,EFFGZ,", regexp.exec("REFFGZ").toString()); //test 3518
}

function testRegexpPCRE_3496() {
  var regexp = /(bc+d$|ef*g.|h?i(j|k))/i;
  assertEquals(null, regexp.exec("*** Failers")); //test 3519
}

function testRegexpPCRE_3497() {
  var regexp = /(bc+d$|ef*g.|h?i(j|k))/i;
  assertEquals(null, regexp.exec("ADCDCDE")); //test 3520
}

function testRegexpPCRE_3498() {
  var regexp = /(bc+d$|ef*g.|h?i(j|k))/i;
  assertEquals(null, regexp.exec("EFFG")); //test 3521
}

function testRegexpPCRE_3499() {
  var regexp = /(bc+d$|ef*g.|h?i(j|k))/i;
  assertEquals(null, regexp.exec("BCDD")); //test 3522
}

function testRegexpPCRE_3500() {
  var regexp = /((((((((((a))))))))))/i;
  assertEquals("A,A,A,A,A,A,A,A,A,A,A", regexp.exec("A").toString()); //test 3523
}

function testRegexpPCRE_3501() {
  var regexp = /(((((((((a)))))))))/i;
  assertEquals("A,A,A,A,A,A,A,A,A,A", regexp.exec("A").toString()); //test 3524
}

function testRegexpPCRE_3502() {
  var regexp = /(?:(?:(?:(?:(?:(?:(?:(?:(?:(a))))))))))/i;
  assertEquals("A,A", regexp.exec("A").toString()); //test 3525
}

function testRegexpPCRE_3503() {
  var regexp = /(?:(?:(?:(?:(?:(?:(?:(?:(?:(a|b|c))))))))))/i;
  assertEquals("C,C", regexp.exec("C").toString()); //test 3526
}

function testRegexpPCRE_3504() {
  var regexp = /multiple words of text/i;
  assertEquals(null, regexp.exec("*** Failers")); //test 3527
}

function testRegexpPCRE_3505() {
  var regexp = /multiple words of text/i;
  assertEquals(null, regexp.exec("AA")); //test 3528
}

function testRegexpPCRE_3506() {
  var regexp = /multiple words of text/i;
  assertEquals(null, regexp.exec("UH-UH")); //test 3529
}

function testRegexpPCRE_3507() {
  var regexp = /multiple words/i;
  assertEquals("MULTIPLE WORDS", regexp.exec("MULTIPLE WORDS, YEAH").toString()); //test 3530
}

function testRegexpPCRE_3508() {
  var regexp = /(.*)c(.*)/i;
  assertEquals("ABCDE,AB,DE", regexp.exec("ABCDE").toString()); //test 3531
}

function testRegexpPCRE_3509() {
  var regexp = /\((.*), (.*)\)/i;
  assertEquals("(A, B),A,B", regexp.exec("(A, B)").toString()); //test 3532
}

function testRegexpPCRE_3510() {
  var regexp = /abcd/i;
  assertEquals("ABCD", regexp.exec("ABCD").toString()); //test 3533
}

function testRegexpPCRE_3511() {
  var regexp = /a(bc)d/i;
  assertEquals("ABCD,BC", regexp.exec("ABCD").toString()); //test 3534
}

function testRegexpPCRE_3512() {
  var regexp = /a[-]?c/i;
  assertEquals("AC", regexp.exec("AC").toString()); //test 3535
}

function testRegexpPCRE_3513() {
  var regexp = /a(?!b)./;
  assertEquals("ad", regexp.exec("abad").toString()); //test 3536
}

function testRegexpPCRE_3514() {
  var regexp = /a(?=d)./;
  assertEquals("ad", regexp.exec("abad").toString()); //test 3537
}

function testRegexpPCRE_3515() {
  var regexp = /a(?=c|d)./;
  assertEquals("ad", regexp.exec("abad").toString()); //test 3538
}

function testRegexpPCRE_3516() {
  var regexp = /a(?:b|c|d)(.)/;
  assertEquals("ace,e", regexp.exec("ace").toString()); //test 3539
}

function testRegexpPCRE_3517() {
  var regexp = /a(?:b|c|d)*(.)/;
  assertEquals("ace,e", regexp.exec("ace").toString()); //test 3540
}

function testRegexpPCRE_3518() {
  var regexp = /a(?:b|c|d)+?(.)/;
  assertEquals("ace,e", regexp.exec("ace").toString()); //test 3541
}

function testRegexpPCRE_3519() {
  var regexp = /a(?:b|c|d)+?(.)/;
  assertEquals("acd,d", regexp.exec("acdbcdbe").toString()); //test 3542
}

function testRegexpPCRE_3520() {
  var regexp = /a(?:b|c|d)+(.)/;
  assertEquals("acdbcdbe,e", regexp.exec("acdbcdbe").toString()); //test 3543
}

function testRegexpPCRE_3521() {
  var regexp = /a(?:b|c|d){2}(.)/;
  assertEquals("acdb,b", regexp.exec("acdbcdbe").toString()); //test 3544
}

function testRegexpPCRE_3522() {
  var regexp = /a(?:b|c|d){4,5}(.)/;
  assertEquals("acdbcdb,b", regexp.exec("acdbcdbe").toString()); //test 3545
}

function testRegexpPCRE_3523() {
  var regexp = /a(?:b|c|d){4,5}?(.)/;
  assertEquals("acdbcd,d", regexp.exec("acdbcdbe").toString()); //test 3546
}

function testRegexpPCRE_3524() {
  var regexp = /((foo)|(bar))*/;
  assertEquals("foobar,bar,,bar", regexp.exec("foobar").toString()); //test 3547
}

function testRegexpPCRE_3525() {
  var regexp = /a(?:b|c|d){6,7}(.)/;
  assertEquals("acdbcdbe,e", regexp.exec("acdbcdbe").toString()); //test 3548
}

function testRegexpPCRE_3526() {
  var regexp = /a(?:b|c|d){6,7}?(.)/;
  assertEquals("acdbcdbe,e", regexp.exec("acdbcdbe").toString()); //test 3549
}

function testRegexpPCRE_3527() {
  var regexp = /a(?:b|c|d){5,6}(.)/;
  assertEquals("acdbcdbe,e", regexp.exec("acdbcdbe").toString()); //test 3550
}

function testRegexpPCRE_3528() {
  var regexp = /a(?:b|c|d){5,6}?(.)/;
  assertEquals("acdbcdb,b", regexp.exec("acdbcdbe").toString()); //test 3551
}

function testRegexpPCRE_3529() {
  var regexp = /a(?:b|c|d){5,7}(.)/;
  assertEquals("acdbcdbe,e", regexp.exec("acdbcdbe").toString()); //test 3552
}

function testRegexpPCRE_3530() {
  var regexp = /a(?:b|c|d){5,7}?(.)/;
  assertEquals("acdbcdb,b", regexp.exec("acdbcdbe").toString()); //test 3553
}

function testRegexpPCRE_3531() {
  var regexp = /a(?:b|(c|e){1,2}?|d)+?(.)/;
  assertEquals("ace,c,e", regexp.exec("ace").toString()); //test 3554
}

function testRegexpPCRE_3532() {
  var regexp = /^(.+)?B/;
  assertEquals("AB,A", regexp.exec("AB").toString()); //test 3555
}

function testRegexpPCRE_3533() {
  var regexp = /^([^a-z])|(\^)$/;
  assertEquals(".,.,", regexp.exec(".").toString()); //test 3556
}

function testRegexpPCRE_3534() {
  var regexp = /^[<>]&/;
  assertEquals("<&", regexp.exec("<&OUT").toString()); //test 3557
}

function testRegexpPCRE_3535() {
  var regexp = /(?:(f)(o)(o)|(b)(a)(r))*/;
  assertEquals("foobar,,,,b,a,r", regexp.exec("foobar").toString()); //test 3558
}

function testRegexpPCRE_3536() {
  var regexp = /(?:(f)(o)(o)|(b)(a)(r))*/;
  assertEquals(",,,,,,", regexp.exec("ab").toString()); //test 3559
}

function testRegexpPCRE_3537() {
  var regexp = /(?:(f)(o)(o)|(b)(a)(r))*/;
  assertEquals(",,,,,,", regexp.exec("*** Failers").toString()); //test 3560
}

function testRegexpPCRE_3538() {
  var regexp = /(?:(f)(o)(o)|(b)(a)(r))*/;
  assertEquals(",,,,,,", regexp.exec("cb").toString()); //test 3561
}

function testRegexpPCRE_3539() {
  var regexp = /(?:(f)(o)(o)|(b)(a)(r))*/;
  assertEquals(",,,,,,", regexp.exec("b").toString()); //test 3562
}

function testRegexpPCRE_3540() {
  var regexp = /(?:(f)(o)(o)|(b)(a)(r))*/;
  assertEquals(",,,,,,", regexp.exec("ab").toString()); //test 3563
}

function testRegexpPCRE_3541() {
  var regexp = /(?:(f)(o)(o)|(b)(a)(r))*/;
  assertEquals(",,,,,,", regexp.exec("b").toString()); //test 3564
}

function testRegexpPCRE_3542() {
  var regexp = /(?:(f)(o)(o)|(b)(a)(r))*/;
  assertEquals(",,,,,,", regexp.exec("b").toString()); //test 3565
}

function testRegexpPCRE_3543() {
  var regexp = /(?:..)*a/;
  assertEquals("aba", regexp.exec("aba").toString()); //test 3566
}

function testRegexpPCRE_3544() {
  var regexp = /(?:..)*?a/;
  assertEquals("a", regexp.exec("aba").toString()); //test 3567
}

function testRegexpPCRE_3545() {
  var regexp = /^(){3,5}/;
  assertEquals(",", regexp.exec("abc").toString()); //test 3568
}

function testRegexpPCRE_3546() {
  var regexp = /^(a+)*ax/;
  assertEquals("aax,a", regexp.exec("aax").toString()); //test 3569
}

function testRegexpPCRE_3547() {
  var regexp = /^((a|b)+)*ax/;
  assertEquals("aax,a,a", regexp.exec("aax").toString()); //test 3570
}

function testRegexpPCRE_3548() {
  var regexp = /^((a|bc)+)*ax/;
  assertEquals("aax,a,a", regexp.exec("aax").toString()); //test 3571
}

function testRegexpPCRE_3549() {
  var regexp = /(a|x)*ab/;
  assertEquals("ab,", regexp.exec("cab").toString()); //test 3572
}

function testRegexpPCRE_3550() {
  var regexp = /(a)*ab/;
  assertEquals("ab,", regexp.exec("cab").toString()); //test 3573
}

function testRegexpPCRE_3551() {
  var regexp = /(a)*ab/;
  assertEquals("ab,", regexp.exec("ab").toString()); //test 3574
}

function testRegexpPCRE_3552() {
  var regexp = /(a)*ab/;
  assertEquals("ab,", regexp.exec("ab").toString()); //test 3575
}

function testRegexpPCRE_3553() {
  var regexp = /(a)*ab/;
  assertEquals(null, regexp.exec("Ab")); //test 3576
}

function testRegexpPCRE_3554() {
  var regexp = /(a)*ab/;
  assertEquals(null, regexp.exec("Ab")); //test 3577
}

function testRegexpPCRE_3555() {
  var regexp = /(a)*ab/;
  assertEquals(null, regexp.exec("*** Failers")); //test 3578
}

function testRegexpPCRE_3556() {
  var regexp = /(a)*ab/;
  assertEquals(null, regexp.exec("cb")); //test 3579
}

function testRegexpPCRE_3557() {
  var regexp = /(a)*ab/;
  assertEquals(null, regexp.exec("aB")); //test 3580
}

function testRegexpPCRE_3558() {
  var regexp = /(a)*ab/;
  assertEquals("ab,", regexp.exec("ab").toString()); //test 3581
}

function testRegexpPCRE_3559() {
  var regexp = /(a)*ab/;
  assertEquals("ab,", regexp.exec("ab").toString()); //test 3582
}

function testRegexpPCRE_3560() {
  var regexp = /(a)*ab/;
  assertEquals(null, regexp.exec("Ab")); //test 3583
}

function testRegexpPCRE_3561() {
  var regexp = /(a)*ab/;
  assertEquals(null, regexp.exec("Ab")); //test 3584
}

function testRegexpPCRE_3562() {
  var regexp = /(a)*ab/;
  assertEquals(null, regexp.exec("*** Failers")); //test 3585
}

function testRegexpPCRE_3563() {
  var regexp = /(a)*ab/;
  assertEquals(null, regexp.exec("aB")); //test 3586
}

function testRegexpPCRE_3564() {
  var regexp = /(a)*ab/;
  assertEquals(null, regexp.exec("aB")); //test 3587
}

function testRegexpPCRE_3565() {
  var regexp = /(a)*ab/;
  assertEquals("ab,", regexp.exec("ab").toString()); //test 3588
}

function testRegexpPCRE_3566() {
  var regexp = /(a)*ab/;
  assertEquals("ab,", regexp.exec("ab").toString()); //test 3589
}

function testRegexpPCRE_3567() {
  var regexp = /(a)*ab/;
  assertEquals(null, regexp.exec("aB")); //test 3590
}

function testRegexpPCRE_3568() {
  var regexp = /(a)*ab/;
  assertEquals(null, regexp.exec("aB")); //test 3591
}

function testRegexpPCRE_3569() {
  var regexp = /(a)*ab/;
  assertEquals(null, regexp.exec("*** Failers")); //test 3592
}

function testRegexpPCRE_3570() {
  var regexp = /(a)*ab/;
  assertEquals(null, regexp.exec("aB")); //test 3593
}

function testRegexpPCRE_3571() {
  var regexp = /(a)*ab/;
  assertEquals(null, regexp.exec("Ab")); //test 3594
}

function testRegexpPCRE_3572() {
  var regexp = /(a)*ab/;
  assertEquals(null, regexp.exec("aB")); //test 3595
}

function testRegexpPCRE_3573() {
  var regexp = /(a)*ab/;
  assertEquals(null, regexp.exec("aB")); //test 3596
}

function testRegexpPCRE_3574() {
  var regexp = /(a)*ab/;
  assertEquals(null, regexp.exec("*** Failers")); //test 3597
}

function testRegexpPCRE_3575() {
  var regexp = /(a)*ab/;
  assertEquals(null, regexp.exec("Ab")); //test 3598
}

function testRegexpPCRE_3576() {
  var regexp = /(a)*ab/;
  assertEquals(null, regexp.exec("AB")); //test 3599
}

function testRegexpPCRE_3577() {
  var regexp = /(a)*ab/;
  assertEquals("ab,", regexp.exec("ab").toString()); //test 3600
}

function testRegexpPCRE_3578() {
  var regexp = /(a)*ab/;
  assertEquals("ab,", regexp.exec("ab").toString()); //test 3601
}

function testRegexpPCRE_3579() {
  var regexp = /(a)*ab/;
  assertEquals(null, regexp.exec("aB")); //test 3602
}

function testRegexpPCRE_3580() {
  var regexp = /(a)*ab/;
  assertEquals(null, regexp.exec("aB")); //test 3603
}

function testRegexpPCRE_3581() {
  var regexp = /(a)*ab/;
  assertEquals(null, regexp.exec("*** Failers")); //test 3604
}

function testRegexpPCRE_3582() {
  var regexp = /(a)*ab/;
  assertEquals(null, regexp.exec("AB")); //test 3605
}

function testRegexpPCRE_3583() {
  var regexp = /(a)*ab/;
  assertEquals(null, regexp.exec("Ab")); //test 3606
}

function testRegexpPCRE_3584() {
  var regexp = /(a)*ab/;
  assertEquals(null, regexp.exec("aB")); //test 3607
}

function testRegexpPCRE_3585() {
  var regexp = /(a)*ab/;
  assertEquals(null, regexp.exec("aB")); //test 3608
}

function testRegexpPCRE_3586() {
  var regexp = /(a)*ab/;
  assertEquals(null, regexp.exec("*** Failers")); //test 3609
}

function testRegexpPCRE_3587() {
  var regexp = /(a)*ab/;
  assertEquals(null, regexp.exec("Ab")); //test 3610
}

function testRegexpPCRE_3588() {
  var regexp = /(a)*ab/;
  assertEquals(null, regexp.exec("AB")); //test 3611
}

function testRegexpPCRE_3589() {
  var regexp = /(a)*ab/;
  assertEquals(null, regexp.exec("*** Failers")); //test 3612
}

function testRegexpPCRE_3590() {
  var regexp = /(a)*ab/;
  assertEquals(null, regexp.exec("AB")); //test 3613
}

function testRegexpPCRE_3591() {
  var regexp = /(a)*ab/;
  assertEquals(null, regexp.exec("a\nB")); //test 3614
}

function testRegexpPCRE_3592() {
  var regexp = /(a)*ab/;
  assertEquals(null, regexp.exec("a\nB")); //test 3615
}

function testRegexpPCRE_3593() {
  var regexp = /(?:c|d)(?:)(?:a(?:)(?:b)(?:b(?:))(?:b(?:)(?:b)))/;
  assertEquals("cabbbb", regexp.exec("cabbbb").toString()); //test 3616
}

function testRegexpPCRE_3594() {
  var regexp = /(?:c|d)(?:)(?:aaaaaaaa(?:)(?:bbbbbbbb)(?:bbbbbbbb(?:))(?:bbbbbbbb(?:)(?:bbbbbbbb)))/;
  assertEquals("caaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb", regexp.exec("caaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb").toString()); //test 3617
}

function testRegexpPCRE_3595() {
  var regexp = /foo\w*\d{4}baz/;
  assertEquals("foobar1234baz", regexp.exec("foobar1234baz").toString()); //test 3618
}

function testRegexpPCRE_3596() {
  var regexp = /x(~~)*(?:(?:F)?)?/;
  assertEquals("x~~,~~", regexp.exec("x~~").toString()); //test 3619
}

function testRegexpPCRE_3597() {
  var regexp = /^a{3}c/;
  assertEquals("aaac", regexp.exec("aaac").toString()); //test 3620
}

function testRegexpPCRE_3598() {
  var regexp = /^a{3}c/;
  assertEquals("aaac", regexp.exec("aaac").toString()); //test 3621
}

function testRegexpPCRE_3599() {
  var regexp = /^a{3}c/;
  assertEquals(null, regexp.exec("*** Failers")); //test 3622
}

function testRegexpPCRE_3600() {
  var regexp = /^a{3}c/;
  assertEquals(null, regexp.exec("B\nB")); //test 3623
}

function testRegexpPCRE_3601() {
  var regexp = /^a{3}c/;
  assertEquals(null, regexp.exec("dbcb")); //test 3624
}

function testRegexpPCRE_3602() {
  var regexp = /^a{3}c/;
  assertEquals(null, regexp.exec("dbaacb")); //test 3625
}

function testRegexpPCRE_3603() {
  var regexp = /^a{3}c/;
  assertEquals(null, regexp.exec("dbaacb")); //test 3626
}

function testRegexpPCRE_3604() {
  var regexp = /^a{3}c/;
  assertEquals(null, regexp.exec("cdaccb")); //test 3627
}

function testRegexpPCRE_3605() {
  var regexp = /^(?:a?b?)*$/;
  assertEquals(null, regexp.exec("*** Failers")); //test 3628
}

function testRegexpPCRE_3606() {
  var regexp = /^(?:a?b?)*$/;
  assertEquals(null, regexp.exec("dbcb")); //test 3629
}

function testRegexpPCRE_3607() {
  var regexp = /^(?:a?b?)*$/;
  assertEquals(null, regexp.exec("a--")); //test 3630
}

function testRegexpPCRE_3608() {
  var regexp = /^(?:a?b?)*$/;
  assertEquals(null, regexp.exec("a\nb\nc\n")); //test 3631
}

function testRegexpPCRE_3609() {
  var regexp = /^(?:a?b?)*$/;
  assertEquals(null, regexp.exec("a\nb\nc\n")); //test 3632
}

function testRegexpPCRE_3610() {
  var regexp = /^(?:a?b?)*$/;
  assertEquals(null, regexp.exec("a\nb\n")); //test 3633
}

function testRegexpPCRE_3611() {
  var regexp = /^(?:a?b?)*$/;
  assertEquals(null, regexp.exec("a\nb\n")); //test 3634
}

function testRegexpPCRE_3612() {
  var regexp = /^(?:a?b?)*$/;
  assertEquals(null, regexp.exec("a\nb\n")); //test 3635
}

function testRegexpPCRE_3613() {
  var regexp = /^(?:a?b?)*$/;
  assertEquals(null, regexp.exec("a\nb\n")); //test 3636
}

function testRegexpPCRE_3614() {
  var regexp = /^(?:a?b?)*$/;
  assertEquals(null, regexp.exec("a\nb\nc\n")); //test 3637
}

function testRegexpPCRE_3615() {
  var regexp = /^(?:a?b?)*$/;
  assertEquals(null, regexp.exec("a\nb\nc\n")); //test 3638
}

function testRegexpPCRE_3616() {
  var regexp = /^(?:a?b?)*$/;
  assertEquals(null, regexp.exec("a\nb\nc\n")); //test 3639
}

function testRegexpPCRE_3617() {
  var regexp = /^(?:a?b?)*$/;
  assertEquals(null, regexp.exec("a\nb\nc\n")); //test 3640
}

function testRegexpPCRE_3618() {
  var regexp = /()^b/;
  assertEquals(null, regexp.exec("*** Failers")); //test 3641
}

function testRegexpPCRE_3619() {
  var regexp = /()^b/;
  assertEquals(null, regexp.exec("a\nb\nc\n")); //test 3642
}

function testRegexpPCRE_3620() {
  var regexp = /()^b/;
  assertEquals(null, regexp.exec("a\nb\nc\n")); //test 3643
}

function testRegexpPCRE_3621() {
  var regexp = /()^b/;
  assertEquals(null, regexp.exec("a\nb\nc\n")); //test 3644
}

function testRegexpPCRE_3622() {
  var regexp = /()^b/;
  assertEquals(null, regexp.exec("a")); //test 3645
}

function testRegexpPCRE_3623() {
  var regexp = /()^b/;
  assertEquals(null, regexp.exec("*** Failers")); //test 3646
}

function testRegexpPCRE_3624() {
  var regexp = /()^b/;
  assertEquals(null, regexp.exec("a")); //test 3647
}

function testRegexpPCRE_3625() {
  var regexp = /()^b/;
  assertEquals(null, regexp.exec("a")); //test 3648
}

function testRegexpPCRE_3626() {
  var regexp = /()^b/;
  assertEquals(null, regexp.exec("a")); //test 3649
}

function testRegexpPCRE_3627() {
  var regexp = /(\w+:)+/;
  assertEquals("one:,one:", regexp.exec("one:").toString()); //test 3650
}

function testRegexpPCRE_3628() {
  var regexp = /(\w+:)+/;
  assertEquals(null, regexp.exec("a")); //test 3651
}

function testRegexpPCRE_3629() {
  var regexp = /([\w:]+::)?(\w+)$/;
  assertEquals("abcd,,abcd", regexp.exec("abcd").toString()); //test 3652
}

function testRegexpPCRE_3630() {
  var regexp = /([\w:]+::)?(\w+)$/;
  assertEquals("xy:z:::abcd,xy:z:::,abcd", regexp.exec("xy:z:::abcd").toString()); //test 3653
}

function testRegexpPCRE_3631() {
  var regexp = /^[^bcd]*(c+)/;
  assertEquals("aexyc,c", regexp.exec("aexycd").toString()); //test 3654
}

function testRegexpPCRE_3632() {
  var regexp = /(a*)b+/;
  assertEquals("aab,aa", regexp.exec("caab").toString()); //test 3655
}

function testRegexpPCRE_3633() {
  var regexp = /([\w:]+::)?(\w+)$/;
  assertEquals("abcd,,abcd", regexp.exec("abcd").toString()); //test 3656
}

function testRegexpPCRE_3634() {
  var regexp = /([\w:]+::)?(\w+)$/;
  assertEquals("xy:z:::abcd,xy:z:::,abcd", regexp.exec("xy:z:::abcd").toString()); //test 3657
}

function testRegexpPCRE_3635() {
  var regexp = /([\w:]+::)?(\w+)$/;
  assertEquals("Failers,,Failers", regexp.exec("*** Failers").toString()); //test 3658
}

function testRegexpPCRE_3636() {
  var regexp = /([\w:]+::)?(\w+)$/;
  assertEquals(null, regexp.exec("abcd:")); //test 3659
}

function testRegexpPCRE_3637() {
  var regexp = /([\w:]+::)?(\w+)$/;
  assertEquals(null, regexp.exec("abcd:")); //test 3660
}

function testRegexpPCRE_3638() {
  var regexp = /^[^bcd]*(c+)/;
  assertEquals("aexyc,c", regexp.exec("aexycd").toString()); //test 3661
}

function testRegexpPCRE_3639() {
  var regexp = /(>a+)ab/;
  assertEquals(null, regexp.exec("aaab")); //test 3662
}

function testRegexpPCRE_3640() {
  var regexp = /([[:]+)/;
  assertEquals(":[,:[", regexp.exec("a:[b]:").toString()); //test 3663
}

function testRegexpPCRE_3641() {
  var regexp = /([[=]+)/;
  assertEquals("=[,=[", regexp.exec("a=[b]=").toString()); //test 3664
}

function testRegexpPCRE_3642() {
  var regexp = /([[.]+)/;
  assertEquals(".[,.[", regexp.exec("a.[b].").toString()); //test 3665
}

function testRegexpPCRE_3643() {
  var regexp = /([[.]+)/;
  assertEquals(null, regexp.exec("aaab")); //test 3666
}

function testRegexpPCRE_3644() {
  var regexp = /([[.]+)/;
  assertEquals(null, regexp.exec("aaab")); //test 3667
}

function testRegexpPCRE_3645() {
  var regexp = /([[.]+)/;
  assertEquals(null, regexp.exec("((abc(ade)ufh()()x")); //test 3668
}

function testRegexpPCRE_3646() {
  var regexp = /a\Z/;
  assertEquals(null, regexp.exec("*** Failers")); //test 3669
}

function testRegexpPCRE_3647() {
  var regexp = /a\Z/;
  assertEquals(null, regexp.exec("aaab")); //test 3670
}

function testRegexpPCRE_3648() {
  var regexp = /a\Z/;
  assertEquals(null, regexp.exec("a\nb\n")); //test 3671
}

function testRegexpPCRE_3649() {
  var regexp = /b\Z/;
  assertEquals(null, regexp.exec("a\nb\n")); //test 3672
}

function testRegexpPCRE_3650() {
  var regexp = /b\Z/;
  assertEquals(null, regexp.exec("a\nb")); //test 3673
}

function testRegexpPCRE_3651() {
  var regexp = /b\z/;
  assertEquals(null, regexp.exec("a\nb")); //test 3674
}

function testRegexpPCRE_3652() {
  var regexp = /b\z/;
  assertEquals(null, regexp.exec("*** Failers")); //test 3675
}

function testRegexpPCRE_3653() {
  var regexp = /b\z/;
  assertEquals(null, regexp.exec("alphabetabcd")); //test 3676
}

function testRegexpPCRE_3654() {
  var regexp = /b\z/;
  assertEquals(null, regexp.exec("endingwxyz")); //test 3677
}

function testRegexpPCRE_3655() {
  var regexp = /b\z/;
  assertEquals(null, regexp.exec("*** Failers")); //test 3678
}

function testRegexpPCRE_3656() {
  var regexp = /b\z/;
  assertEquals(null, regexp.exec("a rather long string that doesn't end with one of them")); //test 3679
}

function testRegexpPCRE_3657() {
  var regexp = /b\z/;
  assertEquals(null, regexp.exec("word cat dog elephant mussel cow horse canary baboon snake shark otherword")); //test 3680
}

function testRegexpPCRE_3658() {
  var regexp = /b\z/;
  assertEquals(null, regexp.exec("word cat dog elephant mussel cow horse canary baboon snake shark")); //test 3681
}

function testRegexpPCRE_3659() {
  var regexp = /b\z/;
  assertEquals(null, regexp.exec("word cat dog elephant mussel cow horse canary baboon snake shark the quick brown fox and the lazy dog and several other words getting close to thirty by now I hope")); //test 3682
}

function testRegexpPCRE_3660() {
  var regexp = /b\z/;
  assertEquals(null, regexp.exec("999foo")); //test 3683
}

function testRegexpPCRE_3661() {
  var regexp = /b\z/;
  assertEquals(null, regexp.exec("123999foo ")); //test 3684
}

function testRegexpPCRE_3662() {
  var regexp = /b\z/;
  assertEquals(null, regexp.exec("*** Failers")); //test 3685
}

function testRegexpPCRE_3663() {
  var regexp = /b\z/;
  assertEquals(null, regexp.exec("123abcfoo")); //test 3686
}

function testRegexpPCRE_3664() {
  var regexp = /b\z/;
  assertEquals(null, regexp.exec("999foo")); //test 3687
}

function testRegexpPCRE_3665() {
  var regexp = /b\z/;
  assertEquals(null, regexp.exec("123999foo ")); //test 3688
}

function testRegexpPCRE_3666() {
  var regexp = /b\z/;
  assertEquals(null, regexp.exec("*** Failers")); //test 3689
}

function testRegexpPCRE_3667() {
  var regexp = /b\z/;
  assertEquals(null, regexp.exec("123abcfoo")); //test 3690
}

function testRegexpPCRE_3668() {
  var regexp = /b\z/;
  assertEquals(null, regexp.exec("123abcfoo")); //test 3691
}

function testRegexpPCRE_3669() {
  var regexp = /b\z/;
  assertEquals(null, regexp.exec("123456foo ")); //test 3692
}

function testRegexpPCRE_3670() {
  var regexp = /b\z/;
  assertEquals(null, regexp.exec("*** Failers")); //test 3693
}

function testRegexpPCRE_3671() {
  var regexp = /b\z/;
  assertEquals(null, regexp.exec("123999foo  ")); //test 3694
}

function testRegexpPCRE_3672() {
  var regexp = /b\z/;
  assertEquals(null, regexp.exec("123abcfoo   ")); //test 3695
}

function testRegexpPCRE_3673() {
  var regexp = /b\z/;
  assertEquals(null, regexp.exec("123456foo ")); //test 3696
}

function testRegexpPCRE_3674() {
  var regexp = /b\z/;
  assertEquals(null, regexp.exec("*** Failers")); //test 3697
}

function testRegexpPCRE_3675() {
  var regexp = /b\z/;
  assertEquals(null, regexp.exec("123999foo  ")); //test 3698
}

function testRegexpPCRE_3676() {
  var regexp = /((Z)+|A)*/;
  assertEquals("ZA,A,", regexp.exec("ZABCDEFG").toString()); //test 3699
}

function testRegexpPCRE_3677() {
  var regexp = /(Z()|A)*/;
  assertEquals("ZA,A,", regexp.exec("ZABCDEFG").toString()); //test 3700
}

function testRegexpPCRE_3678() {
  var regexp = /(Z(())|A)*/;
  assertEquals("ZA,A,,", regexp.exec("ZABCDEFG").toString()); //test 3701
}

function testRegexpPCRE_3679() {
  var regexp = /(Z(())|A)*/;
  assertEquals("ZA,A,,", regexp.exec("ZABCDEFG").toString()); //test 3702
}

function testRegexpPCRE_3680() {
  var regexp = /(Z(())|A)*/;
  assertEquals("ZA,A,,", regexp.exec("ZABCDEFG").toString()); //test 3703
}

function testRegexpPCRE_3681() {
  var regexp = /a*/g;
  assertEquals("a", regexp.exec("abbab").toString()); //test 3704
  assertEquals("", regexp.exec("abcde").toString()); //test 3705
  assertEquals("", regexp.exec("-things").toString()); //test 3706
  assertEquals("", regexp.exec("0digit").toString()); //test 3707
  assertEquals("", regexp.exec("*** Failers").toString()); //test 3708
  assertEquals("", regexp.exec("bcdef    ").toString()); //test 3709
}

function testRegexpPCRE_3682() {
  var regexp = /^[\d-a]/;
  assertEquals("a", regexp.exec("abcde").toString()); //test 3710
}

function testRegexpPCRE_3683() {
  var regexp = /^[\d-a]/;
  assertEquals("-", regexp.exec("-things").toString()); //test 3711
}

function testRegexpPCRE_3684() {
  var regexp = /^[\d-a]/;
  assertEquals("0", regexp.exec("0digit").toString()); //test 3712
}

function testRegexpPCRE_3685() {
  var regexp = /^[\d-a]/;
  assertEquals(null, regexp.exec("*** Failers")); //test 3713
}

function testRegexpPCRE_3686() {
  var regexp = /^[\d-a]/;
  assertEquals(null, regexp.exec("bcdef    ")); //test 3714
}

function testRegexpPCRE_3687() {
  var regexp = /[[:space:]]+/;
  assertEquals(null, regexp.exec("> \x09\n\x0c\x0d\x0b<")); //test 3715
}

function testRegexpPCRE_3688() {
  var regexp = /[[:space:]]+/;
  assertEquals(null, regexp.exec(" ")); //test 3716
}

function testRegexpPCRE_3689() {
  var regexp = /[[:blank:]]+/;
  assertEquals(null, regexp.exec("> \x09\n\x0c\x0d\x0b<")); //test 3717
}

function testRegexpPCRE_3690() {
  var regexp = /[[:blank:]]+/;
  assertEquals(null, regexp.exec(" ")); //test 3718
}

function testRegexpPCRE_3691() {
  var regexp = /[\s]+/;
  assertEquals(" \x09\n\x0c\x0d\x0b", regexp.exec("> \x09\n\x0c\x0d\x0b<").toString()); //test 3719
}

function testRegexpPCRE_3692() {
  var regexp = /[\s]+/;
  assertEquals(" ", regexp.exec(" ").toString()); //test 3720
}

function testRegexpPCRE_3693() {
  var regexp = /\s+/;
  assertEquals(" \x09\n\x0c\x0d\x0b", regexp.exec("> \x09\n\x0c\x0d\x0b<").toString()); //test 3721
}

function testRegexpPCRE_3694() {
  var regexp = /\s+/;
  assertEquals(" ", regexp.exec(" ").toString()); //test 3722
}

function testRegexpPCRE_3695() {
  var regexp = /ab/;
  assertEquals(null, regexp.exec("ab")); //test 3723
}

function testRegexpPCRE_3696() {
  var regexp = /abc\Qabc\Eabc/;
  assertEquals(null, regexp.exec("abcabcabc")); //test 3724
}

function testRegexpPCRE_3697() {
  var regexp = /abc\Qabc\Eabc/;
  assertEquals(null, regexp.exec("abc(*+|abc ")); //test 3725
}

function testRegexpPCRE_3698() {
  var regexp = /abc\Qabc\Eabc/;
  assertEquals(null, regexp.exec("abc abcabc")); //test 3726
}

function testRegexpPCRE_3699() {
  var regexp = /abc\Qabc\Eabc/;
  assertEquals(null, regexp.exec("*** Failers")); //test 3727
}

function testRegexpPCRE_3700() {
  var regexp = /abc\Qabc\Eabc/;
  assertEquals(null, regexp.exec("abcabcabc  ")); //test 3728
}

function testRegexpPCRE_3701() {
  var regexp = /abc\Qliteral\E/;
  assertEquals(null, regexp.exec("abc#not comment\n    literal     ")); //test 3729
}

function testRegexpPCRE_3702() {
  var regexp = /abc\Qliteral/;
  assertEquals(null, regexp.exec("abc#not comment\n    literal     ")); //test 3730
}

function testRegexpPCRE_3703() {
  var regexp = /abc\Qliteral\E/;
  assertEquals(null, regexp.exec("abc#not comment\n    literal     ")); //test 3731
}

function testRegexpPCRE_3704() {
  var regexp = /abc\Qliteral\E/;
  assertEquals(null, regexp.exec("abc#not comment\n    literal     ")); //test 3732
}

function testRegexpPCRE_3705() {
  var regexp = /\Qabc\$xyz\E/;
  assertEquals(null, regexp.exec("abc\\$xyz")); //test 3733
}

function testRegexpPCRE_3706() {
  var regexp = /\Qabc\E\$\Qxyz\E/;
  assertEquals(null, regexp.exec("abc$xyz")); //test 3734
}

function testRegexpPCRE_3707() {
  var regexp = /\Gabc/;
  assertEquals(null, regexp.exec("abc")); //test 3735
}

function testRegexpPCRE_3708() {
  var regexp = /\Gabc/;
  assertEquals(null, regexp.exec("*** Failers")); //test 3736
}

function testRegexpPCRE_3709() {
  var regexp = /\Gabc/;
  assertEquals(null, regexp.exec("xyzabc  ")); //test 3737
}

function testRegexpPCRE_3710() {
  var regexp = /\Gabc./g;
  assertEquals(null, regexp.exec("abc1abc2xyzabc3")); //test 3738
}

function testRegexpPCRE_3711() {
  var regexp = /abc./g;
  assertEquals("abc1", regexp.exec("abc1abc2xyzabc3 ").toString()); //test 3739
  assertEquals(null, regexp.exec("XabcdY")); //test 3740
  assertEquals(null, regexp.exec("*** Failers ")); //test 3741
  assertEquals(null, regexp.exec("Xa b c d Y ")); //test 3742
  assertEquals("abcY", regexp.exec("XabcY").toString()); //test 3743
  assertEquals(null, regexp.exec("AxyzB ")); //test 3744
  assertEquals(null, regexp.exec("XabCY")); //test 3745
  assertEquals(null, regexp.exec("*** Failers")); //test 3746
  assertEquals("abcY", regexp.exec("XabcY  ").toString()); //test 3747
  assertEquals(null, regexp.exec("abCE")); //test 3748
  assertEquals(null, regexp.exec("DE")); //test 3749
  assertEquals(null, regexp.exec("*** Failers")); //test 3750
  assertEquals("abcE", regexp.exec("abcE").toString()); //test 3751
  assertEquals(null, regexp.exec("abCe  ")); //test 3752
  assertEquals(null, regexp.exec("dE")); //test 3753
  assertEquals(null, regexp.exec("De    ")); //test 3754
}

function testRegexpPCRE_3712() {
  var regexp = /[z\Qa-d]\E]/;
  assertEquals(null, regexp.exec("z")); //test 3755
}

function testRegexpPCRE_3713() {
  var regexp = /[z\Qa-d]\E]/;
  assertEquals(null, regexp.exec("a")); //test 3756
}

function testRegexpPCRE_3714() {
  var regexp = /[z\Qa-d]\E]/;
  assertEquals(null, regexp.exec("-")); //test 3757
}

function testRegexpPCRE_3715() {
  var regexp = /[z\Qa-d]\E]/;
  assertEquals(null, regexp.exec("d")); //test 3758
}

function testRegexpPCRE_3716() {
  var regexp = /[z\Qa-d]\E]/;
  assertEquals(null, regexp.exec("] ")); //test 3759
}

function testRegexpPCRE_3717() {
  var regexp = /[z\Qa-d]\E]/;
  assertEquals(null, regexp.exec("*** Failers")); //test 3760
}

function testRegexpPCRE_3718() {
  var regexp = /[z\Qa-d]\E]/;
  assertEquals(null, regexp.exec("b     ")); //test 3761
}

function testRegexpPCRE_3719() {
  var regexp = /[\z\C]/;
  assertEquals("z", regexp.exec("z").toString()); //test 3762
}

function testRegexpPCRE_3720() {
  var regexp = /[\z\C]/;
  assertEquals("C", regexp.exec("C ").toString()); //test 3763
}

function testRegexpPCRE_3721() {
  var regexp = /\M/;
  assertEquals("M", regexp.exec("M ").toString()); //test 3764
}

function testRegexpPCRE_3722() {
  var regexp = /(a+)*b/;
  assertEquals(null, regexp.exec("")); //test 3765
}

function testRegexpPCRE_3723() {
  var regexp = /(a+)*b/;
  assertEquals(null, regexp.exec("REGular")); //test 3766
}

function testRegexpPCRE_3724() {
  var regexp = /(a+)*b/;
  assertEquals(null, regexp.exec("regulaer")); //test 3767
}

function testRegexpPCRE_3725() {
  var regexp = /(a+)*b/;
  assertEquals(null, regexp.exec("Regex  ")); //test 3768
}

function testRegexpPCRE_3726() {
  var regexp = /(a+)*b/;
  assertEquals(null, regexp.exec("regul\ufffdr ")); //test 3769
}

function testRegexpPCRE_3727() {
  var regexp = /(a+)*b/;
  assertEquals(null, regexp.exec("\ufffd\ufffd\ufffd\ufffd\ufffd")); //test 3770
}

function testRegexpPCRE_3728() {
  var regexp = /(a+)*b/;
  assertEquals(null, regexp.exec("\ufffd\ufffd\ufffd\ufffd\ufffd")); //test 3771
}

function testRegexpPCRE_3729() {
  var regexp = /(a+)*b/;
  assertEquals(null, regexp.exec("\ufffd\ufffd\ufffd\ufffd\ufffd")); //test 3772
}

function testRegexpPCRE_3730() {
  var regexp = /(a+)*b/;
  assertEquals(null, regexp.exec("\ufffd\ufffd\ufffd\ufffd\ufffd")); //test 3773
}

function testRegexpPCRE_3731() {
  var regexp = /(a+)*b/;
  assertEquals(null, regexp.exec("\x84XAZXB")); //test 3774
}

function testRegexpPCRE_3732() {
  var regexp = /(a+)*b/;
  assertEquals(null, regexp.exec("123a")); //test 3775
}

function testRegexpPCRE_3733() {
  var regexp = /(a+)*b/;
  assertEquals(null, regexp.exec("ac")); //test 3776
}

function testRegexpPCRE_3734() {
  var regexp = /(a+)*b/;
  assertEquals("b,", regexp.exec("bbbbc").toString()); //test 3777
}

function testRegexpPCRE_3735() {
  var regexp = /(a+)*b/;
  assertEquals("ab,a", regexp.exec("abc").toString()); //test 3778
}

function testRegexpPCRE_3736() {
  var regexp = /(a+)*b/;
  assertEquals(null, regexp.exec("*** Failers")); //test 3779
}

function testRegexpPCRE_3737() {
  var regexp = /(a+)*b/;
  assertEquals("b,", regexp.exec("bca").toString()); //test 3780
}

function testRegexpPCRE_3738() {
  var regexp = /(a+)*b/;
  assertEquals(null, regexp.exec("")); //test 3781
}

function testRegexpPCRE_3739() {
  var regexp = /(a+)*b/;
  assertEquals("ab,a", regexp.exec("abc").toString()); //test 3782
}

function testRegexpPCRE_3740() {
  var regexp = /(a+)*b/;
  assertEquals(null, regexp.exec("*** Failers")); //test 3783
}

function testRegexpPCRE_3741() {
  var regexp = /(a+)*b/;
  assertEquals("b,", regexp.exec("bca").toString()); //test 3784
}

function testRegexpPCRE_3742() {
  var regexp = /(a+)*b/;
  assertEquals("ab,a", regexp.exec("abc").toString()); //test 3785
}

function testRegexpPCRE_3743() {
  var regexp = /(a+)*b/;
  assertEquals(null, regexp.exec("*** Failers")); //test 3786
}

function testRegexpPCRE_3744() {
  var regexp = /(a+)*b/;
  assertEquals(null, regexp.exec("def  ")); //test 3787
}

function testRegexpPCRE_3745() {
  var regexp = /(a+)*b/;
  assertEquals(null, regexp.exec("")); //test 3788
}

function testRegexpPCRE_3746() {
  var regexp = /(a+)*b/;
  assertEquals("ab,a", regexp.exec("abc").toString()); //test 3789
}

function testRegexpPCRE_3747() {
  var regexp = /(a+)*b/;
  assertEquals(null, regexp.exec("*** Failers")); //test 3790
}

function testRegexpPCRE_3748() {
  var regexp = /(a+)*b/;
  assertEquals(null, regexp.exec("def  ")); //test 3791
}

function testRegexpPCRE_3749() {
  var regexp = /(a+)*b/;
  assertEquals(null, regexp.exec("")); //test 3792
}

function testRegexpPCRE_3750() {
  var regexp = /line\nbreak/;
  assertEquals("line\nbreak", regexp.exec("this is a line\nbreak").toString()); //test 3793
}

function testRegexpPCRE_3751() {
  var regexp = /line\nbreak/;
  assertEquals("line\nbreak", regexp.exec("line one\nthis is a line\nbreak in the second line ").toString()); //test 3794
}

function testRegexpPCRE_3752() {
  var regexp = /line\nbreak/;
  assertEquals("line\nbreak", regexp.exec("this is a line\nbreak").toString()); //test 3795
}

function testRegexpPCRE_3753() {
  var regexp = /line\nbreak/;
  assertEquals(null, regexp.exec("** Failers ")); //test 3796
}

function testRegexpPCRE_3754() {
  var regexp = /line\nbreak/;
  assertEquals("line\nbreak", regexp.exec("line one\nthis is a line\nbreak in the second line ").toString()); //test 3797
}

function testRegexpPCRE_3755() {
  var regexp = /line\nbreak/m;
  assertEquals("line\nbreak", regexp.exec("this is a line\nbreak").toString()); //test 3798
}

function testRegexpPCRE_3756() {
  var regexp = /line\nbreak/m;
  assertEquals(null, regexp.exec("** Failers ")); //test 3799
}

function testRegexpPCRE_3757() {
  var regexp = /line\nbreak/m;
  assertEquals("line\nbreak", regexp.exec("line one\nthis is a line\nbreak in the second line ").toString()); //test 3800
}

function testRegexpPCRE_3758() {
  var regexp = /1234/;
  assertEquals(null, regexp.exec("123P")); //test 3801
}

function testRegexpPCRE_3759() {
  var regexp = /1234/;
  assertEquals(null, regexp.exec("a4PR")); //test 3802
}

function testRegexpPCRE_3760() {
  var regexp = /1234/;
  assertEquals(null, regexp.exec("123P")); //test 3803
}

function testRegexpPCRE_3761() {
  var regexp = /1234/;
  assertEquals(null, regexp.exec("4PR")); //test 3804
}

function testRegexpPCRE_3762() {
  var regexp = /^/mg;
  assertEquals("", regexp.exec("a\nb\nc\n").toString()); //test 3805
  assertEquals("", regexp.exec(" ").toString()); //test 3806
  assertEquals("", regexp.exec("A\nC\nC\n ").toString()); //test 3807
  assertEquals("", regexp.exec("AB").toString()); //test 3808
  assertEquals("", regexp.exec("aB  ").toString()); //test 3809
  assertEquals("", regexp.exec("AB").toString()); //test 3810
  assertEquals("", regexp.exec("aB  ").toString()); //test 3811
  assertEquals("", regexp.exec("AB").toString()); //test 3812
  assertEquals("", regexp.exec("aB  ").toString()); //test 3813
  assertEquals("", regexp.exec("AB").toString()); //test 3814
  assertEquals("", regexp.exec("aB  ").toString()); //test 3815
}

function testRegexpPCRE_3763() {
  var regexp = /Content-Type\x3A[^\r\n]{6,}/;
  assertEquals("Content-Type:xxxxxyyy ", regexp.exec("Content-Type:xxxxxyyy ").toString()); //test 3816
}

function testRegexpPCRE_3764() {
  var regexp = /Content-Type\x3A[^\r\n]{6,}z/;
  assertEquals("Content-Type:xxxxxyyyz", regexp.exec("Content-Type:xxxxxyyyz").toString()); //test 3817
}

function testRegexpPCRE_3765() {
  var regexp = /Content-Type\x3A[^a]{6,}/;
  assertEquals("Content-Type:xxxyyy ", regexp.exec("Content-Type:xxxyyy ").toString()); //test 3818
}

function testRegexpPCRE_3766() {
  var regexp = /Content-Type\x3A[^a]{6,}z/;
  assertEquals("Content-Type:xxxyyyz", regexp.exec("Content-Type:xxxyyyz").toString()); //test 3819
}

function testRegexpPCRE_3767() {
  var regexp = /^abc/m;
  assertEquals("abc", regexp.exec("xyz\nabc").toString()); //test 3820
}

function testRegexpPCRE_3768() {
  var regexp = /^abc/m;
  assertEquals("abc", regexp.exec("xyz\nabc<lf>").toString()); //test 3821
}

function testRegexpPCRE_3769() {
  var regexp = /^abc/m;
  assertEquals("abc", regexp.exec("xyz\x0d\nabc<lf>").toString()); //test 3822
}

function testRegexpPCRE_3770() {
  var regexp = /^abc/m;
  assertEquals("abc", regexp.exec("xyz\x0dabc<cr>").toString()); //test 3823
}

function testRegexpPCRE_3771() {
  var regexp = /^abc/m;
  assertEquals("abc", regexp.exec("xyz\x0d\nabc<crlf>").toString()); //test 3824
}

function testRegexpPCRE_3772() {
  var regexp = /^abc/m;
  assertEquals(null, regexp.exec("** Failers ")); //test 3825
}

function testRegexpPCRE_3773() {
  var regexp = /^abc/m;
  assertEquals("abc", regexp.exec("xyz\nabc<cr>").toString()); //test 3826
}

function testRegexpPCRE_3774() {
  var regexp = /^abc/m;
  assertEquals("abc", regexp.exec("xyz\x0d\nabc<cr>").toString()); //test 3827
}

function testRegexpPCRE_3775() {
  var regexp = /^abc/m;
  assertEquals("abc", regexp.exec("xyz\nabc<crlf>").toString()); //test 3828
}

function testRegexpPCRE_3776() {
  var regexp = /^abc/m;
  assertEquals("abc", regexp.exec("xyz\x0dabc<crlf>").toString()); //test 3829
}

function testRegexpPCRE_3777() {
  var regexp = /^abc/m;
  assertEquals("abc", regexp.exec("xyz\x0dabc<lf>").toString()); //test 3830
}

function testRegexpPCRE_3778() {
  var regexp = /abc$/m;
  assertEquals("abc", regexp.exec("xyzabc").toString()); //test 3831
}

function testRegexpPCRE_3779() {
  var regexp = /abc$/m;
  assertEquals("abc", regexp.exec("xyzabc\n ").toString()); //test 3832
}

function testRegexpPCRE_3780() {
  var regexp = /abc$/m;
  assertEquals("abc", regexp.exec("xyzabc\npqr ").toString()); //test 3833
}

function testRegexpPCRE_3781() {
  var regexp = /abc$/m;
  assertEquals("abc", regexp.exec("xyzabc\x0d<cr> ").toString()); //test 3834
}

function testRegexpPCRE_3782() {
  var regexp = /abc$/m;
  assertEquals("abc", regexp.exec("xyzabc\x0dpqr<cr> ").toString()); //test 3835
}

function testRegexpPCRE_3783() {
  var regexp = /abc$/m;
  assertEquals("abc", regexp.exec("xyzabc\x0d\n<crlf> ").toString()); //test 3836
}

function testRegexpPCRE_3784() {
  var regexp = /abc$/m;
  assertEquals("abc", regexp.exec("xyzabc\x0d\npqr<crlf> ").toString()); //test 3837
}

function testRegexpPCRE_3785() {
  var regexp = /abc$/m;
  assertEquals(null, regexp.exec("** Failers")); //test 3838
}

function testRegexpPCRE_3786() {
  var regexp = /abc$/m;
  assertEquals("abc", regexp.exec("xyzabc\x0d ").toString()); //test 3839
}

function testRegexpPCRE_3787() {
  var regexp = /abc$/m;
  assertEquals("abc", regexp.exec("xyzabc\x0dpqr ").toString()); //test 3840
}

function testRegexpPCRE_3788() {
  var regexp = /abc$/m;
  assertEquals("abc", regexp.exec("xyzabc\x0d\n ").toString()); //test 3841
}

function testRegexpPCRE_3789() {
  var regexp = /abc$/m;
  assertEquals("abc", regexp.exec("xyzabc\x0d\npqr ").toString()); //test 3842
}

function testRegexpPCRE_3790() {
  var regexp = /^abc/m;
  assertEquals("abc", regexp.exec("xyz\x0dabcdef").toString()); //test 3843
}

function testRegexpPCRE_3791() {
  var regexp = /^abc/m;
  assertEquals("abc", regexp.exec("xyz\nabcdef<lf>").toString()); //test 3844
}

function testRegexpPCRE_3792() {
  var regexp = /^abc/m;
  assertEquals(null, regexp.exec("** Failers  ")); //test 3845
}

function testRegexpPCRE_3793() {
  var regexp = /^abc/m;
  assertEquals("abc", regexp.exec("xyz\nabcdef").toString()); //test 3846
}

function testRegexpPCRE_3794() {
  var regexp = /^abc/m;
  assertEquals(null, regexp.exec("   ")); //test 3847
}

function testRegexpPCRE_3795() {
  var regexp = /^abc/m;
  assertEquals("abc", regexp.exec("xyz\nabcdef").toString()); //test 3848
}

function testRegexpPCRE_3796() {
  var regexp = /^abc/m;
  assertEquals("abc", regexp.exec("xyz\x0dabcdef<cr>").toString()); //test 3849
}

function testRegexpPCRE_3797() {
  var regexp = /^abc/m;
  assertEquals(null, regexp.exec("** Failers  ")); //test 3850
}

function testRegexpPCRE_3798() {
  var regexp = /^abc/m;
  assertEquals("abc", regexp.exec("xyz\x0dabcdef").toString()); //test 3851
}

function testRegexpPCRE_3799() {
  var regexp = /^abc/m;
  assertEquals(null, regexp.exec("   ")); //test 3852
}

function testRegexpPCRE_3800() {
  var regexp = /^abc/m;
  assertEquals("abc", regexp.exec("xyz\x0d\nabcdef").toString()); //test 3853
}

function testRegexpPCRE_3801() {
  var regexp = /^abc/m;
  assertEquals("abc", regexp.exec("xyz\x0dabcdef<cr>").toString()); //test 3854
}

function testRegexpPCRE_3802() {
  var regexp = /^abc/m;
  assertEquals(null, regexp.exec("** Failers  ")); //test 3855
}

function testRegexpPCRE_3803() {
  var regexp = /^abc/m;
  assertEquals("abc", regexp.exec("xyz\x0dabcdef").toString()); //test 3856
}

function testRegexpPCRE_3804() {
  var regexp = /.*/;
  assertEquals("abc", regexp.exec("abc\ndef").toString()); //test 3857
}

function testRegexpPCRE_3805() {
  var regexp = /.*/;
  assertEquals("abc", regexp.exec("abc\x0ddef").toString()); //test 3858
}

function testRegexpPCRE_3806() {
  var regexp = /.*/;
  assertEquals("abc", regexp.exec("abc\x0d\ndef").toString()); //test 3859
}

function testRegexpPCRE_3807() {
  var regexp = /.*/;
  assertEquals("<cr>abc", regexp.exec("<cr>abc\ndef").toString()); //test 3860
}

function testRegexpPCRE_3808() {
  var regexp = /.*/;
  assertEquals("<cr>abc", regexp.exec("<cr>abc\x0ddef").toString()); //test 3861
}

function testRegexpPCRE_3809() {
  var regexp = /.*/;
  assertEquals("<cr>abc", regexp.exec("<cr>abc\x0d\ndef").toString()); //test 3862
}

function testRegexpPCRE_3810() {
  var regexp = /.*/;
  assertEquals("<crlf>abc", regexp.exec("<crlf>abc\ndef").toString()); //test 3863
}

function testRegexpPCRE_3811() {
  var regexp = /.*/;
  assertEquals("<crlf>abc", regexp.exec("<crlf>abc\x0ddef").toString()); //test 3864
}

function testRegexpPCRE_3812() {
  var regexp = /.*/;
  assertEquals("<crlf>abc", regexp.exec("<crlf>abc\x0d\ndef").toString()); //test 3865
}

function testRegexpPCRE_3813() {
  var regexp = /\w+(.)(.)?def/;
  assertEquals(null, regexp.exec("abc\ndef")); //test 3866
}

function testRegexpPCRE_3814() {
  var regexp = /\w+(.)(.)?def/;
  assertEquals(null, regexp.exec("abc\x0ddef")); //test 3867
}

function testRegexpPCRE_3815() {
  var regexp = /\w+(.)(.)?def/;
  assertEquals(null, regexp.exec("abc\x0d\ndef")); //test 3868
}

function testRegexpPCRE_3816() {
  var regexp = /^\w+=.*(\\\n.*)*/;
  assertEquals("abc=xyz\\,", regexp.exec("abc=xyz\\\npqr").toString()); //test 3869
}

function testRegexpPCRE_3817() {
  var regexp = /^(a()*)*/;
  assertEquals("aaaa,a,", regexp.exec("aaaa").toString()); //test 3870
}

function testRegexpPCRE_3818() {
  var regexp = /^(?:a(?:(?:))*)*/;
  assertEquals("aaaa", regexp.exec("aaaa").toString()); //test 3871
}

function testRegexpPCRE_3819() {
  var regexp = /^(a()+)+/;
  assertEquals("aaaa,a,", regexp.exec("aaaa").toString()); //test 3872
}

function testRegexpPCRE_3820() {
  var regexp = /^(?:a(?:(?:))+)+/;
  assertEquals("aaaa", regexp.exec("aaaa").toString()); //test 3873
}

function testRegexpPCRE_3821() {
  var regexp = /^a.b/;
  assertEquals(null, regexp.exec("a\x0db")); //test 3874
}

function testRegexpPCRE_3822() {
  var regexp = /^a.b/;
  assertEquals(null, regexp.exec("a\nb<cr> ")); //test 3875
}

function testRegexpPCRE_3823() {
  var regexp = /^a.b/;
  assertEquals(null, regexp.exec("** Failers")); //test 3876
}

function testRegexpPCRE_3824() {
  var regexp = /^a.b/;
  assertEquals(null, regexp.exec("a\nb")); //test 3877
}

function testRegexpPCRE_3825() {
  var regexp = /^a.b/;
  assertEquals(null, regexp.exec("a\nb<any>")); //test 3878
}

function testRegexpPCRE_3826() {
  var regexp = /^a.b/;
  assertEquals(null, regexp.exec("a\x0db<cr>   ")); //test 3879
}

function testRegexpPCRE_3827() {
  var regexp = /^a.b/;
  assertEquals(null, regexp.exec("a\x0db<any>   ")); //test 3880
}

function testRegexpPCRE_3828() {
  var regexp = /^abc./mg;
  assertEquals("abc1", regexp.exec("abc1 \nabc2 \x0babc3xx \x0cabc4 \x0dabc5xx \x0d\nabc6 \x85abc7 JUNK").toString()); //test 3881
}

function testRegexpPCRE_3829() {
  var regexp = /abc.$/mg;
  assertEquals("abc1", regexp.exec("abc1\n abc2\x0b abc3\x0c abc4\x0d abc5\x0d\n abc6\x85 abc9").toString()); //test 3882
}

function testRegexpPCRE_3830() {
  var regexp = /^a\Rb/i;
  assertEquals(null, regexp.exec("a\nb")); //test 3883
}

function testRegexpPCRE_3831() {
  var regexp = /^a\Rb/i;
  assertEquals(null, regexp.exec("a\x0db")); //test 3884
}

function testRegexpPCRE_3832() {
  var regexp = /^a\Rb/i;
  assertEquals(null, regexp.exec("a\x0d\nb")); //test 3885
}

function testRegexpPCRE_3833() {
  var regexp = /^a\Rb/i;
  assertEquals(null, regexp.exec("a\x0bb")); //test 3886
}

function testRegexpPCRE_3834() {
  var regexp = /^a\Rb/i;
  assertEquals(null, regexp.exec("a\x0cb")); //test 3887
}

function testRegexpPCRE_3835() {
  var regexp = /^a\Rb/i;
  assertEquals(null, regexp.exec("a\x85b   ")); //test 3888
}

function testRegexpPCRE_3836() {
  var regexp = /^a\Rb/i;
  assertEquals(null, regexp.exec("** Failers")); //test 3889
}

function testRegexpPCRE_3837() {
  var regexp = /^a\Rb/i;
  assertEquals(null, regexp.exec("a\n\x0db    ")); //test 3890
}

function testRegexpPCRE_3838() {
  var regexp = /^a\R*b/i;
  assertEquals("ab", regexp.exec("ab").toString()); //test 3891
}

function testRegexpPCRE_3839() {
  var regexp = /^a\R*b/i;
  assertEquals(null, regexp.exec("a\nb")); //test 3892
}

function testRegexpPCRE_3840() {
  var regexp = /^a\R*b/i;
  assertEquals(null, regexp.exec("a\x0db")); //test 3893
}

function testRegexpPCRE_3841() {
  var regexp = /^a\R*b/i;
  assertEquals(null, regexp.exec("a\x0d\nb")); //test 3894
}

function testRegexpPCRE_3842() {
  var regexp = /^a\R*b/i;
  assertEquals(null, regexp.exec("a\x0bb")); //test 3895
}

function testRegexpPCRE_3843() {
  var regexp = /^a\R*b/i;
  assertEquals(null, regexp.exec("a\x0cb")); //test 3896
}

function testRegexpPCRE_3844() {
  var regexp = /^a\R*b/i;
  assertEquals(null, regexp.exec("a\x85b   ")); //test 3897
}

function testRegexpPCRE_3845() {
  var regexp = /^a\R*b/i;
  assertEquals(null, regexp.exec("a\n\x0db    ")); //test 3898
}

function testRegexpPCRE_3846() {
  var regexp = /^a\R*b/i;
  assertEquals(null, regexp.exec("a\n\x0d\x85\x0cb ")); //test 3899
}

function testRegexpPCRE_3847() {
  var regexp = /^a\R+b/i;
  assertEquals(null, regexp.exec("a\nb")); //test 3900
}

function testRegexpPCRE_3848() {
  var regexp = /^a\R+b/i;
  assertEquals(null, regexp.exec("a\x0db")); //test 3901
}

function testRegexpPCRE_3849() {
  var regexp = /^a\R+b/i;
  assertEquals(null, regexp.exec("a\x0d\nb")); //test 3902
}

function testRegexpPCRE_3850() {
  var regexp = /^a\R+b/i;
  assertEquals(null, regexp.exec("a\x0bb")); //test 3903
}

function testRegexpPCRE_3851() {
  var regexp = /^a\R+b/i;
  assertEquals(null, regexp.exec("a\x0cb")); //test 3904
}

function testRegexpPCRE_3852() {
  var regexp = /^a\R+b/i;
  assertEquals(null, regexp.exec("a\x85b   ")); //test 3905
}

function testRegexpPCRE_3853() {
  var regexp = /^a\R+b/i;
  assertEquals(null, regexp.exec("a\n\x0db    ")); //test 3906
}

function testRegexpPCRE_3854() {
  var regexp = /^a\R+b/i;
  assertEquals(null, regexp.exec("a\n\x0d\x85\x0cb ")); //test 3907
}

function testRegexpPCRE_3855() {
  var regexp = /^a\R+b/i;
  assertEquals(null, regexp.exec("** Failers")); //test 3908
}

function testRegexpPCRE_3856() {
  var regexp = /^a\R+b/i;
  assertEquals(null, regexp.exec("ab  ")); //test 3909
}

function testRegexpPCRE_3857() {
  var regexp = /^a\R{1,3}b/i;
  assertEquals(null, regexp.exec("a\nb")); //test 3910
}

function testRegexpPCRE_3858() {
  var regexp = /^a\R{1,3}b/i;
  assertEquals(null, regexp.exec("a\n\x0db")); //test 3911
}

function testRegexpPCRE_3859() {
  var regexp = /^a\R{1,3}b/i;
  assertEquals(null, regexp.exec("a\n\x0d\x85b")); //test 3912
}

function testRegexpPCRE_3860() {
  var regexp = /^a\R{1,3}b/i;
  assertEquals(null, regexp.exec("a\x0d\n\x0d\nb ")); //test 3913
}

function testRegexpPCRE_3861() {
  var regexp = /^a\R{1,3}b/i;
  assertEquals(null, regexp.exec("a\x0d\n\x0d\n\x0d\nb ")); //test 3914
}

function testRegexpPCRE_3862() {
  var regexp = /^a\R{1,3}b/i;
  assertEquals(null, regexp.exec("a\n\x0d\n\x0db")); //test 3915
}

function testRegexpPCRE_3863() {
  var regexp = /^a\R{1,3}b/i;
  assertEquals(null, regexp.exec("a\n\n\x0d\nb ")); //test 3916
}

function testRegexpPCRE_3864() {
  var regexp = /^a\R{1,3}b/i;
  assertEquals(null, regexp.exec("** Failers")); //test 3917
}

function testRegexpPCRE_3865() {
  var regexp = /^a\R{1,3}b/i;
  assertEquals(null, regexp.exec("a\n\n\n\x0db")); //test 3918
}

function testRegexpPCRE_3866() {
  var regexp = /^a\R{1,3}b/i;
  assertEquals(null, regexp.exec("a\x0d")); //test 3919
}

function testRegexpPCRE_3867() {
  var regexp = /^a[\R]b/i;
  assertEquals("aRb", regexp.exec("aRb").toString()); //test 3920
}

function testRegexpPCRE_3868() {
  var regexp = /^a[\R]b/i;
  assertEquals(null, regexp.exec("** Failers")); //test 3921
}

function testRegexpPCRE_3869() {
  var regexp = /^a[\R]b/i;
  assertEquals(null, regexp.exec("a\nb  ")); //test 3922
}

function testRegexpPCRE_3870() {
  var regexp = /.+foo/;
  assertEquals("afoo", regexp.exec("afoo").toString()); //test 3923
}

function testRegexpPCRE_3871() {
  var regexp = /.+foo/;
  assertEquals(null, regexp.exec("** Failers ")); //test 3924
}

function testRegexpPCRE_3872() {
  var regexp = /.+foo/;
  assertEquals(null, regexp.exec("\x0d\nfoo ")); //test 3925
}

function testRegexpPCRE_3873() {
  var regexp = /.+foo/;
  assertEquals(null, regexp.exec("\nfoo ")); //test 3926
}

function testRegexpPCRE_3874() {
  var regexp = /.+foo/;
  assertEquals("afoo", regexp.exec("afoo").toString()); //test 3927
}

function testRegexpPCRE_3875() {
  var regexp = /.+foo/;
  assertEquals(null, regexp.exec("\nfoo ")); //test 3928
}

function testRegexpPCRE_3876() {
  var regexp = /.+foo/;
  assertEquals(null, regexp.exec("** Failers ")); //test 3929
}

function testRegexpPCRE_3877() {
  var regexp = /.+foo/;
  assertEquals(null, regexp.exec("\x0d\nfoo ")); //test 3930
}

function testRegexpPCRE_3878() {
  var regexp = /.+foo/;
  assertEquals("afoo", regexp.exec("afoo").toString()); //test 3931
}

function testRegexpPCRE_3879() {
  var regexp = /.+foo/;
  assertEquals(null, regexp.exec("** Failers ")); //test 3932
}

function testRegexpPCRE_3880() {
  var regexp = /.+foo/;
  assertEquals(null, regexp.exec("\nfoo ")); //test 3933
}

function testRegexpPCRE_3881() {
  var regexp = /.+foo/;
  assertEquals(null, regexp.exec("\x0d\nfoo ")); //test 3934
}

function testRegexpPCRE_3882() {
  var regexp = /.+foo/;
  assertEquals("afoo", regexp.exec("afoo").toString()); //test 3935
}

function testRegexpPCRE_3883() {
  var regexp = /.+foo/;
  assertEquals(null, regexp.exec("\x0d\nfoo ")); //test 3936
}

function testRegexpPCRE_3884() {
  var regexp = /.+foo/;
  assertEquals(null, regexp.exec("\nfoo ")); //test 3937
}

function testRegexpPCRE_3885() {
  var regexp = /^$/mg;
  assertEquals("", regexp.exec("abc\x0d\x0dxyz").toString()); //test 3938
  assertEquals("", regexp.exec("abc\n\x0dxyz  ").toString()); //test 3939
  assertEquals(null, regexp.exec("** Failers ")); //test 3940
  assertEquals("", regexp.exec("abc\x0d\nxyz").toString()); //test 3941
}

function testRegexpPCRE_3886() {
  var regexp = /^X/m;
  assertEquals("X", regexp.exec("XABC").toString()); //test 3942
}

function testRegexpPCRE_3887() {
  var regexp = /^X/m;
  assertEquals(null, regexp.exec("** Failers ")); //test 3943
}

function testRegexpPCRE_3888() {
  var regexp = /^X/m;
  assertEquals("X", regexp.exec("XABCB").toString()); //test 3944
}

function testRegexpPCRE_3889() {
  var regexp = /^X/m;
  assertEquals(null, regexp.exec("abc\x0d\n\x0d\n")); //test 3945
}

function testRegexpPCRE_3890() {
  var regexp = /^X/m;
  assertEquals(null, regexp.exec("abc\x0d\n\x0d\n")); //test 3946
}

function testRegexpPCRE_3891() {
  var regexp = /^X/m;
  assertEquals(null, regexp.exec("abc\x0d\n\x0d\n")); //test 3947
}

function testRegexpPCRE_3892() {
  var regexp = /^X/m;
  assertEquals(null, regexp.exec("xabcx")); //test 3948
}

function testRegexpPCRE_3893() {
  var regexp = /^X/m;
  assertEquals(null, regexp.exec("xxyzx ")); //test 3949
}

function testRegexpPCRE_3894() {
  var regexp = /^X/m;
  assertEquals(null, regexp.exec("xabcpqrx")); //test 3950
}

function testRegexpPCRE_3895() {
  var regexp = /^X/m;
  assertEquals(null, regexp.exec("xxyzx ")); //test 3951
}

function testRegexpPCRE_3896() {
  var regexp = /^X/m;
  assertEquals(null, regexp.exec("abcabc")); //test 3952
}

function testRegexpPCRE_3897() {
  var regexp = /^X/m;
  assertEquals(null, regexp.exec("xyzabc ")); //test 3953
}

function testRegexpPCRE_3898() {
  var regexp = /^X/m;
  assertEquals(null, regexp.exec("** Failers ")); //test 3954
}

function testRegexpPCRE_3899() {
  var regexp = /^X/m;
  assertEquals(null, regexp.exec("xyzxyz ")); //test 3955
}

function testRegexpPCRE_3900() {
  assertThrows(SyntaxError, eval, "var re = /(?|(abc)|(xyz))/;"); //test 3956
}


function testRegexpPCRE_3901() {
  assertThrows(SyntaxError, eval, "var re = /(x)(?|(abc)|(xyz))(x)/;"); //test 3957
}


function testRegexpPCRE_3902() {
  assertThrows(SyntaxError, eval, "var re = /(x)(?|(abc)(pqr)|(xyz))(x)/;"); //test 3958
}


function testRegexpPCRE_3903() {
  var regexp = /\H\h\V\v/;
  assertEquals(null, regexp.exec("X X\n")); //test 3959
}

function testRegexpPCRE_3904() {
  var regexp = /\H\h\V\v/;
  assertEquals(null, regexp.exec("X\x09X\x0b")); //test 3960
}

function testRegexpPCRE_3905() {
  var regexp = /\H\h\V\v/;
  assertEquals(null, regexp.exec("** Failers")); //test 3961
}

function testRegexpPCRE_3906() {
  var regexp = /\H\h\V\v/;
  assertEquals(null, regexp.exec("\xa0 X\n   ")); //test 3962
}

function testRegexpPCRE_3907() {
  var regexp = /\H*\h+\V?\v{3,4}/;
  assertEquals(null, regexp.exec("\x09 \xa0X\n\x0b\x0c\x0d\n")); //test 3963
}

function testRegexpPCRE_3908() {
  var regexp = /\H*\h+\V?\v{3,4}/;
  assertEquals(null, regexp.exec("\x09 \xa0\n\x0b\x0c\x0d\n")); //test 3964
}

function testRegexpPCRE_3909() {
  var regexp = /\H*\h+\V?\v{3,4}/;
  assertEquals(null, regexp.exec("\x09 \xa0\n\x0b\x0c")); //test 3965
}

function testRegexpPCRE_3910() {
  var regexp = /\H*\h+\V?\v{3,4}/;
  assertEquals(null, regexp.exec("** Failers ")); //test 3966
}

function testRegexpPCRE_3911() {
  var regexp = /\H*\h+\V?\v{3,4}/;
  assertEquals(null, regexp.exec("\x09 \xa0\n\x0b")); //test 3967
}

function testRegexpPCRE_3912() {
  var regexp = /\H*\h+\V?\v{3,4}/;
  assertEquals(null, regexp.exec(" ")); //test 3968
}

function testRegexpPCRE_3913() {
  var regexp = /\H{3,4}/;
  assertEquals(null, regexp.exec("XY  ABCDE")); //test 3969
}

function testRegexpPCRE_3914() {
  var regexp = /\H{3,4}/;
  assertEquals(null, regexp.exec("XY  PQR ST ")); //test 3970
}

function testRegexpPCRE_3915() {
  var regexp = /.\h{3,4}./;
  assertEquals(null, regexp.exec("XY  AB    PQRS")); //test 3971
}

function testRegexpPCRE_3916() {
  var regexp = /\h*X\h?\H+Y\H?Z/;
  assertEquals(null, regexp.exec(">XNNNYZ")); //test 3972
}

function testRegexpPCRE_3917() {
  var regexp = /\h*X\h?\H+Y\H?Z/;
  assertEquals(null, regexp.exec(">  X NYQZ")); //test 3973
}

function testRegexpPCRE_3918() {
  var regexp = /\h*X\h?\H+Y\H?Z/;
  assertEquals(null, regexp.exec("** Failers")); //test 3974
}

function testRegexpPCRE_3919() {
  var regexp = /\h*X\h?\H+Y\H?Z/;
  assertEquals(null, regexp.exec(">XYZ   ")); //test 3975
}

function testRegexpPCRE_3920() {
  var regexp = /\h*X\h?\H+Y\H?Z/;
  assertEquals(null, regexp.exec(">  X NY Z")); //test 3976
}

function testRegexpPCRE_3921() {
  var regexp = /\v*X\v?Y\v+Z\V*\x0a\V+\x0b\V{2,3}\x0c/;
  assertEquals(null, regexp.exec(">XY\nZ\nA\x0bNN\x0c")); //test 3977
}

function testRegexpPCRE_3922() {
  var regexp = /\v*X\v?Y\v+Z\V*\x0a\V+\x0b\V{2,3}\x0c/;
  assertEquals(null, regexp.exec(">\n\x0dX\nY\n\x0bZZZ\nAAA\x0bNNN\x0c")); //test 3978
}

function testRegexpPCRE_3923() {
  var regexp = /.+A/;
  assertEquals(null, regexp.exec("\x0d\nA")); //test 3979
}

function testRegexpPCRE_3924() {
  var regexp = /\nA/;
  assertEquals("\nA", regexp.exec("\x0d\nA ").toString()); //test 3980
}

function testRegexpPCRE_3925() {
  var regexp = /[\r\n]A/;
  assertEquals("\nA", regexp.exec("\x0d\nA ").toString()); //test 3981
}

function testRegexpPCRE_3926() {
  var regexp = /(\r|\n)A/;
  assertEquals("\nA,\n", regexp.exec("\x0d\nA ").toString()); //test 3982
}

function testRegexpPCRE_3927() {
  var regexp = /a\Rb/i;
  assertEquals(null, regexp.exec("a\x0db")); //test 3983
}

function testRegexpPCRE_3928() {
  var regexp = /a\Rb/i;
  assertEquals(null, regexp.exec("a\nb")); //test 3984
}

function testRegexpPCRE_3929() {
  var regexp = /a\Rb/i;
  assertEquals(null, regexp.exec("a\x0d\nb")); //test 3985
}

function testRegexpPCRE_3930() {
  var regexp = /a\Rb/i;
  assertEquals(null, regexp.exec("** Failers")); //test 3986
}

function testRegexpPCRE_3931() {
  var regexp = /a\Rb/i;
  assertEquals(null, regexp.exec("a\x85b")); //test 3987
}

function testRegexpPCRE_3932() {
  var regexp = /a\Rb/i;
  assertEquals(null, regexp.exec("a\x0bb     ")); //test 3988
}

function testRegexpPCRE_3933() {
  var regexp = /a\Rb/i;
  assertEquals(null, regexp.exec("a\x0db")); //test 3989
}

function testRegexpPCRE_3934() {
  var regexp = /a\Rb/i;
  assertEquals(null, regexp.exec("a\nb")); //test 3990
}

function testRegexpPCRE_3935() {
  var regexp = /a\Rb/i;
  assertEquals(null, regexp.exec("a\x0d\nb")); //test 3991
}

function testRegexpPCRE_3936() {
  var regexp = /a\Rb/i;
  assertEquals(null, regexp.exec("a\x85b")); //test 3992
}

function testRegexpPCRE_3937() {
  var regexp = /a\Rb/i;
  assertEquals(null, regexp.exec("a\x0bb     ")); //test 3993
}

function testRegexpPCRE_3938() {
  var regexp = /a\Rb/i;
  assertEquals(null, regexp.exec("** Failers ")); //test 3994
}

function testRegexpPCRE_3939() {
  var regexp = /a\Rb/i;
  assertEquals(null, regexp.exec("a\x85b<bsr_anycrlf>")); //test 3995
}

function testRegexpPCRE_3940() {
  var regexp = /a\Rb/i;
  assertEquals(null, regexp.exec("a\x0bb<bsr_anycrlf>")); //test 3996
}

function testRegexpPCRE_3941() {
  var regexp = /a\R?b/i;
  assertEquals(null, regexp.exec("a\x0db")); //test 3997
}

function testRegexpPCRE_3942() {
  var regexp = /a\R?b/i;
  assertEquals(null, regexp.exec("a\nb")); //test 3998
}

function testRegexpPCRE_3943() {
  var regexp = /a\R?b/i;
  assertEquals(null, regexp.exec("a\x0d\nb")); //test 3999
}

function testRegexpPCRE_3944() {
  var regexp = /a\R?b/i;
  assertEquals(null, regexp.exec("** Failers")); //test 4000
}

function testRegexpPCRE_3945() {
  var regexp = /a\R?b/i;
  assertEquals(null, regexp.exec("a\x85b")); //test 4001
}

function testRegexpPCRE_3946() {
  var regexp = /a\R?b/i;
  assertEquals(null, regexp.exec("a\x0bb     ")); //test 4002
}

function testRegexpPCRE_3947() {
  var regexp = /a\R?b/i;
  assertEquals(null, regexp.exec("a\x0db")); //test 4003
}

function testRegexpPCRE_3948() {
  var regexp = /a\R?b/i;
  assertEquals(null, regexp.exec("a\nb")); //test 4004
}

function testRegexpPCRE_3949() {
  var regexp = /a\R?b/i;
  assertEquals(null, regexp.exec("a\x0d\nb")); //test 4005
}

function testRegexpPCRE_3950() {
  var regexp = /a\R?b/i;
  assertEquals(null, regexp.exec("a\x85b")); //test 4006
}

function testRegexpPCRE_3951() {
  var regexp = /a\R?b/i;
  assertEquals(null, regexp.exec("a\x0bb     ")); //test 4007
}

function testRegexpPCRE_3952() {
  var regexp = /a\R?b/i;
  assertEquals(null, regexp.exec("** Failers ")); //test 4008
}

function testRegexpPCRE_3953() {
  var regexp = /a\R?b/i;
  assertEquals(null, regexp.exec("a\x85b<bsr_anycrlf>")); //test 4009
}

function testRegexpPCRE_3954() {
  var regexp = /a\R?b/i;
  assertEquals(null, regexp.exec("a\x0bb<bsr_anycrlf>")); //test 4010
}

function testRegexpPCRE_3955() {
  var regexp = /a\R{2,4}b/i;
  assertEquals(null, regexp.exec("a\x0d\n\nb")); //test 4011
}

function testRegexpPCRE_3956() {
  var regexp = /a\R{2,4}b/i;
  assertEquals(null, regexp.exec("a\n\x0d\x0db")); //test 4012
}

function testRegexpPCRE_3957() {
  var regexp = /a\R{2,4}b/i;
  assertEquals(null, regexp.exec("a\x0d\n\x0d\n\x0d\n\x0d\nb")); //test 4013
}

function testRegexpPCRE_3958() {
  var regexp = /a\R{2,4}b/i;
  assertEquals(null, regexp.exec("** Failers")); //test 4014
}

function testRegexpPCRE_3959() {
  var regexp = /a\R{2,4}b/i;
  assertEquals(null, regexp.exec("a\x8585b")); //test 4015
}

function testRegexpPCRE_3960() {
  var regexp = /a\R{2,4}b/i;
  assertEquals(null, regexp.exec("a\x0b\x00bb     ")); //test 4016
}

function testRegexpPCRE_3961() {
  var regexp = /a\R{2,4}b/i;
  assertEquals(null, regexp.exec("a\x0d\x0db")); //test 4017
}

function testRegexpPCRE_3962() {
  var regexp = /a\R{2,4}b/i;
  assertEquals(null, regexp.exec("a\n\n\nb")); //test 4018
}

function testRegexpPCRE_3963() {
  var regexp = /a\R{2,4}b/i;
  assertEquals(null, regexp.exec("a\x0d\n\n\x0d\x0db")); //test 4019
}

function testRegexpPCRE_3964() {
  var regexp = /a\R{2,4}b/i;
  assertEquals(null, regexp.exec("a\x8585b")); //test 4020
}

function testRegexpPCRE_3965() {
  var regexp = /a\R{2,4}b/i;
  assertEquals(null, regexp.exec("a\x0b\x00bb     ")); //test 4021
}

function testRegexpPCRE_3966() {
  var regexp = /a\R{2,4}b/i;
  assertEquals(null, regexp.exec("** Failers ")); //test 4022
}

function testRegexpPCRE_3967() {
  var regexp = /a\R{2,4}b/i;
  assertEquals(null, regexp.exec("a\x0d\x0d\x0d\x0d\x0db ")); //test 4023
}

function testRegexpPCRE_3968() {
  var regexp = /a\R{2,4}b/i;
  assertEquals(null, regexp.exec("a\x8585b<bsr_anycrlf>")); //test 4024
}

function testRegexpPCRE_3969() {
  var regexp = /a\R{2,4}b/i;
  assertEquals(null, regexp.exec("a\x0b\x00bb<bsr_anycrlf>")); //test 4025
}

function testRegexpPCRE_3970() {
  var regexp = /a(?!)|\wbc/;
  assertEquals("abc", regexp.exec("abc ").toString()); //test 4026
}

function testRegexpPCRE_3971() {
  var regexp = /a[]b/;
  assertEquals(null, regexp.exec("** Failers")); //test 4027
}

function testRegexpPCRE_3972() {
  var regexp = /a[]b/;
  assertEquals(null, regexp.exec("ab")); //test 4028
}

function testRegexpPCRE_3973() {
  var regexp = /a[]+b/;
  assertEquals(null, regexp.exec("** Failers")); //test 4029
}

function testRegexpPCRE_3974() {
  var regexp = /a[]+b/;
  assertEquals(null, regexp.exec("ab ")); //test 4030
}

function testRegexpPCRE_3975() {
  var regexp = /a[]+b/;
  assertEquals(null, regexp.exec("** Failers")); //test 4031
}

function testRegexpPCRE_3976() {
  var regexp = /a[]+b/;
  assertEquals(null, regexp.exec("ab ")); //test 4032
}

function testRegexpPCRE_3977() {
  var regexp = /a[^]b/;
  assertEquals("aXb", regexp.exec("aXb").toString()); //test 4033
}

function testRegexpPCRE_3978() {
  var regexp = /a[^]b/;
  assertEquals("a\nb", regexp.exec("a\nb ").toString()); //test 4034
}

function testRegexpPCRE_3979() {
  var regexp = /a[^]b/;
  assertEquals(null, regexp.exec("** Failers")); //test 4035
}

function testRegexpPCRE_3980() {
  var regexp = /a[^]b/;
  assertEquals(null, regexp.exec("ab  ")); //test 4036
}

function testRegexpPCRE_3981() {
  var regexp = /a[^]+b/;
  assertEquals("aXb", regexp.exec("aXb").toString()); //test 4037
}

function testRegexpPCRE_3982() {
  var regexp = /a[^]+b/;
  assertEquals("a\nX\nXb", regexp.exec("a\nX\nXb ").toString()); //test 4038
}

function testRegexpPCRE_3983() {
  var regexp = /a[^]+b/;
  assertEquals(null, regexp.exec("** Failers")); //test 4039
}

function testRegexpPCRE_3984() {
  var regexp = /a[^]+b/;
  assertEquals(null, regexp.exec("ab  ")); //test 4040
}

function testRegexpPCRE_3985() {
  var regexp = / End of testinput7 /;
  assertEquals(null, regexp.exec("ab")); //test 4041
}

function testRegexpPCRE_3986() {
  var regexp = / End of testinput7 /;
  assertEquals(null, regexp.exec("ax{100}b  ")); //test 4042
}

function testRegexpPCRE_3987() {
  var regexp = / End of testinput7 /;
  assertEquals(null, regexp.exec("ax{100}x{100}b  ")); //test 4043
}

function testRegexpPCRE_3988() {
  var regexp = / End of testinput7 /;
  assertEquals(null, regexp.exec("ax{100}b  ")); //test 4044
}

function testRegexpPCRE_3989() {
  var regexp = / End of testinput7 /;
  assertEquals(null, regexp.exec("ax{100}x{100}b  ")); //test 4045
}

function testRegexpPCRE_3990() {
  var regexp = / End of testinput7 /;
  assertEquals(null, regexp.exec("*** Failers ")); //test 4046
}

function testRegexpPCRE_3991() {
  var regexp = / End of testinput7 /;
  assertEquals(null, regexp.exec("ab")); //test 4047
}

function testRegexpPCRE_3992() {
  var regexp = / End of testinput7 /;
  assertEquals(null, regexp.exec(" ")); //test 4048
}

function testRegexpPCRE_3993() {
  var regexp = /\bX/;
  assertEquals("X", regexp.exec("Xoanon").toString()); //test 4049
}

function testRegexpPCRE_3994() {
  var regexp = /\bX/;
  assertEquals("X", regexp.exec("+Xoanon").toString()); //test 4050
}

function testRegexpPCRE_3995() {
  var regexp = /\bX/;
  assertEquals("X", regexp.exec("x{300}Xoanon ").toString()); //test 4051
}

function testRegexpPCRE_3996() {
  var regexp = /\bX/;
  assertEquals(null, regexp.exec("*** Failers ")); //test 4052
}

function testRegexpPCRE_3997() {
  var regexp = /\bX/;
  assertEquals(null, regexp.exec("YXoanon  ")); //test 4053
}

function testRegexpPCRE_3998() {
  var regexp = /\BX/;
  assertEquals("X", regexp.exec("YXoanon").toString()); //test 4054
}

function testRegexpPCRE_3999() {
  var regexp = /\BX/;
  assertEquals(null, regexp.exec("*** Failers")); //test 4055
}

function testRegexpPCRE_4000() {
  var regexp = /\BX/;
  assertEquals(null, regexp.exec("Xoanon")); //test 4056
}

function testRegexpPCRE_4001() {
  var regexp = /\BX/;
  assertEquals(null, regexp.exec("+Xoanon    ")); //test 4057
}

function testRegexpPCRE_4002() {
  var regexp = /\BX/;
  assertEquals(null, regexp.exec("x{300}Xoanon ")); //test 4058
}

function testRegexpPCRE_4003() {
  var regexp = /X\b/;
  assertEquals("X", regexp.exec("X+oanon").toString()); //test 4059
}

function testRegexpPCRE_4004() {
  var regexp = /X\b/;
  assertEquals(null, regexp.exec("ZXx{300}oanon ")); //test 4060
}

function testRegexpPCRE_4005() {
  var regexp = /X\b/;
  assertEquals("X", regexp.exec("FAX ").toString()); //test 4061
}

function testRegexpPCRE_4006() {
  var regexp = /X\b/;
  assertEquals(null, regexp.exec("*** Failers ")); //test 4062
}

function testRegexpPCRE_4007() {
  var regexp = /X\b/;
  assertEquals(null, regexp.exec("Xoanon  ")); //test 4063
}

function testRegexpPCRE_4008() {
  var regexp = /X\B/;
  assertEquals("X", regexp.exec("Xoanon  ").toString()); //test 4064
}

function testRegexpPCRE_4009() {
  var regexp = /X\B/;
  assertEquals(null, regexp.exec("*** Failers")); //test 4065
}

function testRegexpPCRE_4010() {
  var regexp = /X\B/;
  assertEquals(null, regexp.exec("X+oanon")); //test 4066
}

function testRegexpPCRE_4011() {
  var regexp = /X\B/;
  assertEquals("X", regexp.exec("ZXx{300}oanon ").toString()); //test 4067
}

function testRegexpPCRE_4012() {
  var regexp = /X\B/;
  assertEquals(null, regexp.exec("FAX ")); //test 4068
}

function testRegexpPCRE_4013() {
  var regexp = /[^a]/;
  assertEquals("b", regexp.exec("abcd").toString()); //test 4069
}

function testRegexpPCRE_4014() {
  var regexp = /[^a]/;
  assertEquals("x", regexp.exec("ax{100}   ").toString()); //test 4070
}

function testRegexpPCRE_4015() {
  var regexp = /[^a]/;
  assertEquals("b", regexp.exec("ab99").toString()); //test 4071
}

function testRegexpPCRE_4016() {
  var regexp = /[^a]/;
  assertEquals("x", regexp.exec("x{123}x{123}45").toString()); //test 4072
}

function testRegexpPCRE_4017() {
  var regexp = /[^a]/;
  assertEquals("x", regexp.exec("x{400}x{401}x{402}6  ").toString()); //test 4073
}

function testRegexpPCRE_4018() {
  var regexp = /[^a]/;
  assertEquals("*", regexp.exec("*** Failers").toString()); //test 4074
}

function testRegexpPCRE_4019() {
  var regexp = /[^a]/;
  assertEquals("d", regexp.exec("d99").toString()); //test 4075
}

function testRegexpPCRE_4020() {
  var regexp = /[^a]/;
  assertEquals("x", regexp.exec("x{123}x{122}4   ").toString()); //test 4076
}

function testRegexpPCRE_4021() {
  var regexp = /[^a]/;
  assertEquals("x", regexp.exec("x{400}x{403}6  ").toString()); //test 4077
}

function testRegexpPCRE_4022() {
  var regexp = /[^a]/;
  assertEquals("x", regexp.exec("x{400}x{401}x{402}x{402}6  ").toString()); //test 4078
}

function testRegexpPCRE_4023() {
  var regexp = /abc/;
  assertEquals(null, regexp.exec("\ufffd]")); //test 4079
}

function testRegexpPCRE_4024() {
  var regexp = /abc/;
  assertEquals(null, regexp.exec("\ufffd")); //test 4080
}

function testRegexpPCRE_4025() {
  var regexp = /abc/;
  assertEquals(null, regexp.exec("\ufffd\ufffd\ufffd")); //test 4081
}

function testRegexpPCRE_4026() {
  var regexp = /abc/;
  assertEquals(null, regexp.exec("\ufffd\ufffd\ufffd?")); //test 4082
}

function testRegexpPCRE_4027() {
  var regexp = /a.b/;
  assertEquals("acb", regexp.exec("acb").toString()); //test 4083
}

function testRegexpPCRE_4028() {
  var regexp = /a.b/;
  assertEquals("ab", regexp.exec("ab").toString()); //test 4084
}

function testRegexpPCRE_4029() {
  var regexp = /a.b/;
  assertEquals(null, regexp.exec("ax{100}b ")); //test 4085
}

function testRegexpPCRE_4030() {
  var regexp = /a.b/;
  assertEquals(null, regexp.exec("*** Failers")); //test 4086
}

function testRegexpPCRE_4031() {
  var regexp = /a.b/;
  assertEquals(null, regexp.exec("a\nb  ")); //test 4087
}

function testRegexpPCRE_4032() {
  var regexp = /a(.{3})b/;
  assertEquals(null, regexp.exec("ax{4000}xyb ")); //test 4088
}

function testRegexpPCRE_4033() {
  var regexp = /a(.{3})b/;
  assertEquals(null, regexp.exec("ax{4000}yb ")); //test 4089
}

function testRegexpPCRE_4034() {
  var regexp = /a(.{3})b/;
  assertEquals(null, regexp.exec("ax{4000}x{100}yb ")); //test 4090
}

function testRegexpPCRE_4035() {
  var regexp = /a(.{3})b/;
  assertEquals(null, regexp.exec("*** Failers")); //test 4091
}

function testRegexpPCRE_4036() {
  var regexp = /a(.{3})b/;
  assertEquals(null, regexp.exec("ax{4000}b ")); //test 4092
}

function testRegexpPCRE_4037() {
  var regexp = /a(.{3})b/;
  assertEquals(null, regexp.exec("ac\ncb ")); //test 4093
}

function testRegexpPCRE_4038() {
  var regexp = /a(.*?)(.)/;
  assertEquals("a\xc0,,\xc0", regexp.exec("a\xc0\x88b").toString()); //test 4094
}

function testRegexpPCRE_4039() {
  var regexp = /a(.*?)(.)/;
  assertEquals("ax,,x", regexp.exec("ax{100}b").toString()); //test 4095
}

function testRegexpPCRE_4040() {
  var regexp = /a(.*)(.)/;
  assertEquals("a\xc0\x88b,\xc0\x88,b", regexp.exec("a\xc0\x88b").toString()); //test 4096
}

function testRegexpPCRE_4041() {
  var regexp = /a(.*)(.)/;
  assertEquals("ax{100}b,x{100},b", regexp.exec("ax{100}b").toString()); //test 4097
}

function testRegexpPCRE_4042() {
  var regexp = /a(.)(.)/;
  assertEquals("a\xc0\x92,\xc0,\x92", regexp.exec("a\xc0\x92bcd").toString()); //test 4098
}

function testRegexpPCRE_4043() {
  var regexp = /a(.)(.)/;
  assertEquals("ax{,x,{", regexp.exec("ax{240}bcd").toString()); //test 4099
}

function testRegexpPCRE_4044() {
  var regexp = /a(.?)(.)/;
  assertEquals("a\xc0\x92,\xc0,\x92", regexp.exec("a\xc0\x92bcd").toString()); //test 4100
}

function testRegexpPCRE_4045() {
  var regexp = /a(.?)(.)/;
  assertEquals("ax{,x,{", regexp.exec("ax{240}bcd").toString()); //test 4101
}

function testRegexpPCRE_4046() {
  var regexp = /a(.??)(.)/;
  assertEquals("a\xc0,,\xc0", regexp.exec("a\xc0\x92bcd").toString()); //test 4102
}

function testRegexpPCRE_4047() {
  var regexp = /a(.??)(.)/;
  assertEquals("ax,,x", regexp.exec("ax{240}bcd").toString()); //test 4103
}

function testRegexpPCRE_4048() {
  var regexp = /a(.{3})b/;
  assertEquals(null, regexp.exec("ax{1234}xyb ")); //test 4104
}

function testRegexpPCRE_4049() {
  var regexp = /a(.{3})b/;
  assertEquals(null, regexp.exec("ax{1234}x{4321}yb ")); //test 4105
}

function testRegexpPCRE_4050() {
  var regexp = /a(.{3})b/;
  assertEquals(null, regexp.exec("ax{1234}x{4321}x{3412}b ")); //test 4106
}

function testRegexpPCRE_4051() {
  var regexp = /a(.{3})b/;
  assertEquals(null, regexp.exec("*** Failers")); //test 4107
}

function testRegexpPCRE_4052() {
  var regexp = /a(.{3})b/;
  assertEquals(null, regexp.exec("ax{1234}b ")); //test 4108
}

function testRegexpPCRE_4053() {
  var regexp = /a(.{3})b/;
  assertEquals(null, regexp.exec("ac\ncb ")); //test 4109
}

function testRegexpPCRE_4054() {
  var regexp = /a(.{3,})b/;
  assertEquals("ax{1234}xyb,x{1234}xy", regexp.exec("ax{1234}xyb ").toString()); //test 4110
}

function testRegexpPCRE_4055() {
  var regexp = /a(.{3,})b/;
  assertEquals("ax{1234}x{4321}yb,x{1234}x{4321}y", regexp.exec("ax{1234}x{4321}yb ").toString()); //test 4111
}

function testRegexpPCRE_4056() {
  var regexp = /a(.{3,})b/;
  assertEquals("ax{1234}x{4321}x{3412}b,x{1234}x{4321}x{3412}", regexp.exec("ax{1234}x{4321}x{3412}b ").toString()); //test 4112
}

function testRegexpPCRE_4057() {
  var regexp = /a(.{3,})b/;
  assertEquals("axxxxbcdefghijb,xxxxbcdefghij", regexp.exec("axxxxbcdefghijb ").toString()); //test 4113
}

function testRegexpPCRE_4058() {
  var regexp = /a(.{3,})b/;
  assertEquals("ax{1234}x{4321}x{3412}x{3421}b,x{1234}x{4321}x{3412}x{3421}", regexp.exec("ax{1234}x{4321}x{3412}x{3421}b ").toString()); //test 4114
}

function testRegexpPCRE_4059() {
  var regexp = /a(.{3,})b/;
  assertEquals(null, regexp.exec("*** Failers")); //test 4115
}

function testRegexpPCRE_4060() {
  var regexp = /a(.{3,})b/;
  assertEquals("ax{1234}b,x{1234}", regexp.exec("ax{1234}b ").toString()); //test 4116
}

function testRegexpPCRE_4061() {
  var regexp = /a(.{3,}?)b/;
  assertEquals("ax{1234}xyb,x{1234}xy", regexp.exec("ax{1234}xyb ").toString()); //test 4117
}

function testRegexpPCRE_4062() {
  var regexp = /a(.{3,}?)b/;
  assertEquals("ax{1234}x{4321}yb,x{1234}x{4321}y", regexp.exec("ax{1234}x{4321}yb ").toString()); //test 4118
}

function testRegexpPCRE_4063() {
  var regexp = /a(.{3,}?)b/;
  assertEquals("ax{1234}x{4321}x{3412}b,x{1234}x{4321}x{3412}", regexp.exec("ax{1234}x{4321}x{3412}b ").toString()); //test 4119
}

function testRegexpPCRE_4064() {
  var regexp = /a(.{3,}?)b/;
  assertEquals("axxxxb,xxxx", regexp.exec("axxxxbcdefghijb ").toString()); //test 4120
}

function testRegexpPCRE_4065() {
  var regexp = /a(.{3,}?)b/;
  assertEquals("ax{1234}x{4321}x{3412}x{3421}b,x{1234}x{4321}x{3412}x{3421}", regexp.exec("ax{1234}x{4321}x{3412}x{3421}b ").toString()); //test 4121
}

function testRegexpPCRE_4066() {
  var regexp = /a(.{3,}?)b/;
  assertEquals(null, regexp.exec("*** Failers")); //test 4122
}

function testRegexpPCRE_4067() {
  var regexp = /a(.{3,}?)b/;
  assertEquals("ax{1234}b,x{1234}", regexp.exec("ax{1234}b ").toString()); //test 4123
}

function testRegexpPCRE_4068() {
  var regexp = /a(.{3,5})b/;
  assertEquals(null, regexp.exec("ax{1234}xyb ")); //test 4124
}

function testRegexpPCRE_4069() {
  var regexp = /a(.{3,5})b/;
  assertEquals(null, regexp.exec("ax{1234}x{4321}yb ")); //test 4125
}

function testRegexpPCRE_4070() {
  var regexp = /a(.{3,5})b/;
  assertEquals(null, regexp.exec("ax{1234}x{4321}x{3412}b ")); //test 4126
}

function testRegexpPCRE_4071() {
  var regexp = /a(.{3,5})b/;
  assertEquals("axxxxb,xxxx", regexp.exec("axxxxbcdefghijb ").toString()); //test 4127
}

function testRegexpPCRE_4072() {
  var regexp = /a(.{3,5})b/;
  assertEquals(null, regexp.exec("ax{1234}x{4321}x{3412}x{3421}b ")); //test 4128
}

function testRegexpPCRE_4073() {
  var regexp = /a(.{3,5})b/;
  assertEquals("axbxxb,xbxx", regexp.exec("axbxxbcdefghijb ").toString()); //test 4129
}

function testRegexpPCRE_4074() {
  var regexp = /a(.{3,5})b/;
  assertEquals("axxxxxb,xxxxx", regexp.exec("axxxxxbcdefghijb ").toString()); //test 4130
}

function testRegexpPCRE_4075() {
  var regexp = /a(.{3,5})b/;
  assertEquals(null, regexp.exec("*** Failers")); //test 4131
}

function testRegexpPCRE_4076() {
  var regexp = /a(.{3,5})b/;
  assertEquals(null, regexp.exec("ax{1234}b ")); //test 4132
}

function testRegexpPCRE_4077() {
  var regexp = /a(.{3,5})b/;
  assertEquals(null, regexp.exec("axxxxxxbcdefghijb ")); //test 4133
}

function testRegexpPCRE_4078() {
  var regexp = /a(.{3,5}?)b/;
  assertEquals(null, regexp.exec("ax{1234}xyb ")); //test 4134
}

function testRegexpPCRE_4079() {
  var regexp = /a(.{3,5}?)b/;
  assertEquals(null, regexp.exec("ax{1234}x{4321}yb ")); //test 4135
}

function testRegexpPCRE_4080() {
  var regexp = /a(.{3,5}?)b/;
  assertEquals(null, regexp.exec("ax{1234}x{4321}x{3412}b ")); //test 4136
}

function testRegexpPCRE_4081() {
  var regexp = /a(.{3,5}?)b/;
  assertEquals("axxxxb,xxxx", regexp.exec("axxxxbcdefghijb ").toString()); //test 4137
}

function testRegexpPCRE_4082() {
  var regexp = /a(.{3,5}?)b/;
  assertEquals(null, regexp.exec("ax{1234}x{4321}x{3412}x{3421}b ")); //test 4138
}

function testRegexpPCRE_4083() {
  var regexp = /a(.{3,5}?)b/;
  assertEquals("axbxxb,xbxx", regexp.exec("axbxxbcdefghijb ").toString()); //test 4139
}

function testRegexpPCRE_4084() {
  var regexp = /a(.{3,5}?)b/;
  assertEquals("axxxxxb,xxxxx", regexp.exec("axxxxxbcdefghijb ").toString()); //test 4140
}

function testRegexpPCRE_4085() {
  var regexp = /a(.{3,5}?)b/;
  assertEquals(null, regexp.exec("*** Failers")); //test 4141
}

function testRegexpPCRE_4086() {
  var regexp = /a(.{3,5}?)b/;
  assertEquals(null, regexp.exec("ax{1234}b ")); //test 4142
}

function testRegexpPCRE_4087() {
  var regexp = /a(.{3,5}?)b/;
  assertEquals(null, regexp.exec("axxxxxxbcdefghijb ")); //test 4143
}

function testRegexpPCRE_4088() {
  var regexp = /a(.{3,5}?)b/;
  assertEquals(null, regexp.exec("*** Failers")); //test 4144
}

function testRegexpPCRE_4089() {
  var regexp = /a(.{3,5}?)b/;
  assertEquals(null, regexp.exec("x{100}")); //test 4145
}

function testRegexpPCRE_4090() {
  var regexp = /a(.{3,5}?)b/;
  assertEquals(null, regexp.exec("aXbcd")); //test 4146
}

function testRegexpPCRE_4091() {
  var regexp = /a(.{3,5}?)b/;
  assertEquals(null, regexp.exec("ax{100}bcd")); //test 4147
}

function testRegexpPCRE_4092() {
  var regexp = /a(.{3,5}?)b/;
  assertEquals(null, regexp.exec("ax{100000}bcd")); //test 4148
}

function testRegexpPCRE_4093() {
  var regexp = /a(.{3,5}?)b/;
  assertEquals(null, regexp.exec("x{100}x{100}x{100}b")); //test 4149
}

function testRegexpPCRE_4094() {
  var regexp = /a(.{3,5}?)b/;
  assertEquals(null, regexp.exec("*** Failers ")); //test 4150
}

function testRegexpPCRE_4095() {
  var regexp = /a(.{3,5}?)b/;
  assertEquals(null, regexp.exec("x{100}x{100}b")); //test 4151
}

function testRegexpPCRE_4096() {
  var regexp = /a(.{3,5}?)b/;
  assertEquals(null, regexp.exec("x{ab} ")); //test 4152
}

function testRegexpPCRE_4097() {
  var regexp = /a(.{3,5}?)b/;
  assertEquals(null, regexp.exec("\xc2\xab")); //test 4153
}

function testRegexpPCRE_4098() {
  var regexp = /a(.{3,5}?)b/;
  assertEquals(null, regexp.exec("*** Failers ")); //test 4154
}

function testRegexpPCRE_4099() {
  var regexp = /a(.{3,5}?)b/;
  assertEquals(null, regexp.exec("\x00{ab}")); //test 4155
}

function testRegexpPCRE_4100() {
  var regexp = /a(.{3,5}?)b/;
  assertEquals(null, regexp.exec("WXYZ")); //test 4156
}

function testRegexpPCRE_4101() {
  var regexp = /a(.{3,5}?)b/;
  assertEquals(null, regexp.exec("x{256}XYZ ")); //test 4157
}

function testRegexpPCRE_4102() {
  var regexp = /a(.{3,5}?)b/;
  assertEquals(null, regexp.exec("*** Failers")); //test 4158
}

function testRegexpPCRE_4103() {
  var regexp = /a(.{3,5}?)b/;
  assertEquals(null, regexp.exec("XYZ ")); //test 4159
}

function testRegexpPCRE_4104() {
  var regexp = /[^a]+/g;
  assertEquals("bcd", regexp.exec("bcd").toString()); //test 4160
  assertEquals("00}", regexp.exec("x{100}aYx{256}Z ").toString()); //test 4161
}

function testRegexpPCRE_4105() {
  var regexp = /^[^a]{2}/;
  assertEquals("x{", regexp.exec("x{100}bc").toString()); //test 4162
}

function testRegexpPCRE_4106() {
  var regexp = /^[^a]{2,}/;
  assertEquals("x{100}bcA", regexp.exec("x{100}bcAa").toString()); //test 4163
}

function testRegexpPCRE_4107() {
  var regexp = /^[^a]{2,}?/;
  assertEquals("x{", regexp.exec("x{100}bca").toString()); //test 4164
}

function testRegexpPCRE_4108() {
  var regexp = /[^a]+/ig;
  assertEquals("bcd", regexp.exec("bcd").toString()); //test 4165
  assertEquals("00}", regexp.exec("x{100}aYx{256}Z ").toString()); //test 4166
}

function testRegexpPCRE_4109() {
  var regexp = /^[^a]{2}/i;
  assertEquals("x{", regexp.exec("x{100}bc").toString()); //test 4167
}

function testRegexpPCRE_4110() {
  var regexp = /^[^a]{2,}/i;
  assertEquals("x{100}bc", regexp.exec("x{100}bcAa").toString()); //test 4168
}

function testRegexpPCRE_4111() {
  var regexp = /^[^a]{2,}?/i;
  assertEquals("x{", regexp.exec("x{100}bca").toString()); //test 4169
}

function testRegexpPCRE_4112() {
  var regexp = /^[^a]{2,}?/i;
  assertEquals(null, regexp.exec("abcd")); //test 4170
}

function testRegexpPCRE_4113() {
  var regexp = /^[^a]{2,}?/i;
  assertEquals(null, regexp.exec("abcd")); //test 4171
}

function testRegexpPCRE_4114() {
  var regexp = /^[^a]{2,}?/i;
  assertEquals("x{", regexp.exec("x{100}x{100} ").toString()); //test 4172
}

function testRegexpPCRE_4115() {
  var regexp = /^[^a]{2,}?/i;
  assertEquals("x{", regexp.exec("x{100}x{100} ").toString()); //test 4173
}

function testRegexpPCRE_4116() {
  var regexp = /^[^a]{2,}?/i;
  assertEquals("x{", regexp.exec("x{100}x{100}x{100}x{100} ").toString()); //test 4174
}

function testRegexpPCRE_4117() {
  var regexp = /^[^a]{2,}?/i;
  assertEquals(null, regexp.exec("abce")); //test 4175
}

function testRegexpPCRE_4118() {
  var regexp = /^[^a]{2,}?/i;
  assertEquals("x{", regexp.exec("x{100}x{100}x{100}x{100} ").toString()); //test 4176
}

function testRegexpPCRE_4119() {
  var regexp = /^[^a]{2,}?/i;
  assertEquals(null, regexp.exec("abcdx{100}x{100}x{100}x{100} ")); //test 4177
}

function testRegexpPCRE_4120() {
  var regexp = /^[^a]{2,}?/i;
  assertEquals(null, regexp.exec("abcdx{100}x{100}x{100}x{100} ")); //test 4178
}

function testRegexpPCRE_4121() {
  var regexp = /^[^a]{2,}?/i;
  assertEquals(null, regexp.exec("abcdx{100}x{100}x{100}x{100} ")); //test 4179
}

function testRegexpPCRE_4122() {
  var regexp = /^[^a]{2,}?/i;
  assertEquals(null, regexp.exec("abcdx{100}x{100}x{100}XX")); //test 4180
}

function testRegexpPCRE_4123() {
  var regexp = /^[^a]{2,}?/i;
  assertEquals(null, regexp.exec("abcdx{100}x{100}x{100}x{100}x{100}x{100}x{100}XX")); //test 4181
}

function testRegexpPCRE_4124() {
  var regexp = /^[^a]{2,}?/i;
  assertEquals(null, regexp.exec("abcdx{100}x{100}x{100}x{100}x{100}x{100}x{100}XX")); //test 4182
}

function testRegexpPCRE_4125() {
  var regexp = /^[^a]{2,}?/i;
  assertEquals("Xy", regexp.exec("Xyyyax{100}x{100}bXzzz").toString()); //test 4183
}

function testRegexpPCRE_4126() {
  var regexp = /\D/;
  assertEquals("X", regexp.exec("1X2").toString()); //test 4184
}

function testRegexpPCRE_4127() {
  var regexp = /\D/;
  assertEquals("x", regexp.exec("1x{100}2 ").toString()); //test 4185
}

function testRegexpPCRE_4128() {
  var regexp = />\S/;
  assertEquals(">X", regexp.exec("> >X Y").toString()); //test 4186
}

function testRegexpPCRE_4129() {
  var regexp = />\S/;
  assertEquals(">x", regexp.exec("> >x{100} Y").toString()); //test 4187
}

function testRegexpPCRE_4130() {
  var regexp = /\d/;
  assertEquals("1", regexp.exec("x{100}3").toString()); //test 4188
}

function testRegexpPCRE_4131() {
  var regexp = /\s/;
  assertEquals(" ", regexp.exec("x{100} X").toString()); //test 4189
}

function testRegexpPCRE_4132() {
  var regexp = /\D+/;
  assertEquals("abcd", regexp.exec("12abcd34").toString()); //test 4190
}

function testRegexpPCRE_4133() {
  var regexp = /\D+/;
  assertEquals("*** Failers", regexp.exec("*** Failers").toString()); //test 4191
}

function testRegexpPCRE_4134() {
  var regexp = /\D+/;
  assertEquals("  ", regexp.exec("1234  ").toString()); //test 4192
}

function testRegexpPCRE_4135() {
  var regexp = /\D{2,3}/;
  assertEquals("abc", regexp.exec("12abcd34").toString()); //test 4193
}

function testRegexpPCRE_4136() {
  var regexp = /\D{2,3}/;
  assertEquals("ab", regexp.exec("12ab34").toString()); //test 4194
}

function testRegexpPCRE_4137() {
  var regexp = /\D{2,3}/;
  assertEquals("***", regexp.exec("*** Failers  ").toString()); //test 4195
}

function testRegexpPCRE_4138() {
  var regexp = /\D{2,3}/;
  assertEquals(null, regexp.exec("1234")); //test 4196
}

function testRegexpPCRE_4139() {
  var regexp = /\D{2,3}/;
  assertEquals("  ", regexp.exec("12a34  ").toString()); //test 4197
}

function testRegexpPCRE_4140() {
  var regexp = /\D{2,3}?/;
  assertEquals("ab", regexp.exec("12abcd34").toString()); //test 4198
}

function testRegexpPCRE_4141() {
  var regexp = /\D{2,3}?/;
  assertEquals("ab", regexp.exec("12ab34").toString()); //test 4199
}

function testRegexpPCRE_4142() {
  var regexp = /\D{2,3}?/;
  assertEquals("**", regexp.exec("*** Failers  ").toString()); //test 4200
}

function testRegexpPCRE_4143() {
  var regexp = /\D{2,3}?/;
  assertEquals(null, regexp.exec("1234")); //test 4201
}

function testRegexpPCRE_4144() {
  var regexp = /\D{2,3}?/;
  assertEquals("  ", regexp.exec("12a34  ").toString()); //test 4202
}

function testRegexpPCRE_4145() {
  var regexp = /\d+/;
  assertEquals("12", regexp.exec("12abcd34").toString()); //test 4203
}

function testRegexpPCRE_4146() {
  var regexp = /\d+/;
  assertEquals(null, regexp.exec("*** Failers")); //test 4204
}

function testRegexpPCRE_4147() {
  var regexp = /\d{2,3}/;
  assertEquals("12", regexp.exec("12abcd34").toString()); //test 4205
}

function testRegexpPCRE_4148() {
  var regexp = /\d{2,3}/;
  assertEquals("123", regexp.exec("1234abcd").toString()); //test 4206
}

function testRegexpPCRE_4149() {
  var regexp = /\d{2,3}/;
  assertEquals(null, regexp.exec("*** Failers  ")); //test 4207
}

function testRegexpPCRE_4150() {
  var regexp = /\d{2,3}/;
  assertEquals(null, regexp.exec("1.4 ")); //test 4208
}

function testRegexpPCRE_4151() {
  var regexp = /\d{2,3}?/;
  assertEquals("12", regexp.exec("12abcd34").toString()); //test 4209
}

function testRegexpPCRE_4152() {
  var regexp = /\d{2,3}?/;
  assertEquals("12", regexp.exec("1234abcd").toString()); //test 4210
}

function testRegexpPCRE_4153() {
  var regexp = /\d{2,3}?/;
  assertEquals(null, regexp.exec("*** Failers  ")); //test 4211
}

function testRegexpPCRE_4154() {
  var regexp = /\d{2,3}?/;
  assertEquals(null, regexp.exec("1.4 ")); //test 4212
}

function testRegexpPCRE_4155() {
  var regexp = /\S+/;
  assertEquals("12abcd34", regexp.exec("12abcd34").toString()); //test 4213
}

function testRegexpPCRE_4156() {
  var regexp = /\S+/;
  assertEquals("***", regexp.exec("*** Failers").toString()); //test 4214
}

function testRegexpPCRE_4157() {
  var regexp = /\S+/;
  assertEquals(null, regexp.exec("     ")); //test 4215
}

function testRegexpPCRE_4158() {
  var regexp = /\S{2,3}/;
  assertEquals("12a", regexp.exec("12abcd34").toString()); //test 4216
}

function testRegexpPCRE_4159() {
  var regexp = /\S{2,3}/;
  assertEquals("123", regexp.exec("1234abcd").toString()); //test 4217
}

function testRegexpPCRE_4160() {
  var regexp = /\S{2,3}/;
  assertEquals("***", regexp.exec("*** Failers").toString()); //test 4218
}

function testRegexpPCRE_4161() {
  var regexp = /\S{2,3}/;
  assertEquals(null, regexp.exec("       ")); //test 4219
}

function testRegexpPCRE_4162() {
  var regexp = /\S{2,3}?/;
  assertEquals("12", regexp.exec("12abcd34").toString()); //test 4220
}

function testRegexpPCRE_4163() {
  var regexp = /\S{2,3}?/;
  assertEquals("12", regexp.exec("1234abcd").toString()); //test 4221
}

function testRegexpPCRE_4164() {
  var regexp = /\S{2,3}?/;
  assertEquals("**", regexp.exec("*** Failers").toString()); //test 4222
}

function testRegexpPCRE_4165() {
  var regexp = /\S{2,3}?/;
  assertEquals(null, regexp.exec("       ")); //test 4223
}

function testRegexpPCRE_4166() {
  var regexp = />\s+</;
  assertEquals(">      <", regexp.exec("12>      <34").toString()); //test 4224
}

function testRegexpPCRE_4167() {
  var regexp = />\s+</;
  assertEquals(null, regexp.exec("*** Failers")); //test 4225
}

function testRegexpPCRE_4168() {
  var regexp = />\s{2,3}</;
  assertEquals(">  <", regexp.exec("ab>  <cd").toString()); //test 4226
}

function testRegexpPCRE_4169() {
  var regexp = />\s{2,3}</;
  assertEquals(">   <", regexp.exec("ab>   <ce").toString()); //test 4227
}

function testRegexpPCRE_4170() {
  var regexp = />\s{2,3}</;
  assertEquals(null, regexp.exec("*** Failers")); //test 4228
}

function testRegexpPCRE_4171() {
  var regexp = />\s{2,3}</;
  assertEquals(null, regexp.exec("ab>    <cd ")); //test 4229
}

function testRegexpPCRE_4172() {
  var regexp = />\s{2,3}?</;
  assertEquals(">  <", regexp.exec("ab>  <cd").toString()); //test 4230
}

function testRegexpPCRE_4173() {
  var regexp = />\s{2,3}?</;
  assertEquals(">   <", regexp.exec("ab>   <ce").toString()); //test 4231
}

function testRegexpPCRE_4174() {
  var regexp = />\s{2,3}?</;
  assertEquals(null, regexp.exec("*** Failers")); //test 4232
}

function testRegexpPCRE_4175() {
  var regexp = />\s{2,3}?</;
  assertEquals(null, regexp.exec("ab>    <cd ")); //test 4233
}

function testRegexpPCRE_4176() {
  var regexp = /\w+/;
  assertEquals("12", regexp.exec("12      34").toString()); //test 4234
}

function testRegexpPCRE_4177() {
  var regexp = /\w+/;
  assertEquals("Failers", regexp.exec("*** Failers").toString()); //test 4235
}

function testRegexpPCRE_4178() {
  var regexp = /\w+/;
  assertEquals(null, regexp.exec("+++=*! ")); //test 4236
}

function testRegexpPCRE_4179() {
  var regexp = /\w{2,3}/;
  assertEquals("ab", regexp.exec("ab  cd").toString()); //test 4237
}

function testRegexpPCRE_4180() {
  var regexp = /\w{2,3}/;
  assertEquals("abc", regexp.exec("abcd ce").toString()); //test 4238
}

function testRegexpPCRE_4181() {
  var regexp = /\w{2,3}/;
  assertEquals("Fai", regexp.exec("*** Failers").toString()); //test 4239
}

function testRegexpPCRE_4182() {
  var regexp = /\w{2,3}/;
  assertEquals(null, regexp.exec("a.b.c")); //test 4240
}

function testRegexpPCRE_4183() {
  var regexp = /\w{2,3}?/;
  assertEquals("ab", regexp.exec("ab  cd").toString()); //test 4241
}

function testRegexpPCRE_4184() {
  var regexp = /\w{2,3}?/;
  assertEquals("ab", regexp.exec("abcd ce").toString()); //test 4242
}

function testRegexpPCRE_4185() {
  var regexp = /\w{2,3}?/;
  assertEquals("Fa", regexp.exec("*** Failers").toString()); //test 4243
}

function testRegexpPCRE_4186() {
  var regexp = /\w{2,3}?/;
  assertEquals(null, regexp.exec("a.b.c")); //test 4244
}

function testRegexpPCRE_4187() {
  var regexp = /\W+/;
  assertEquals("====", regexp.exec("12====34").toString()); //test 4245
}

function testRegexpPCRE_4188() {
  var regexp = /\W+/;
  assertEquals("*** ", regexp.exec("*** Failers").toString()); //test 4246
}

function testRegexpPCRE_4189() {
  var regexp = /\W+/;
  assertEquals(" ", regexp.exec("abcd ").toString()); //test 4247
}

function testRegexpPCRE_4190() {
  var regexp = /\W{2,3}/;
  assertEquals("===", regexp.exec("ab====cd").toString()); //test 4248
}

function testRegexpPCRE_4191() {
  var regexp = /\W{2,3}/;
  assertEquals("==", regexp.exec("ab==cd").toString()); //test 4249
}

function testRegexpPCRE_4192() {
  var regexp = /\W{2,3}/;
  assertEquals("***", regexp.exec("*** Failers").toString()); //test 4250
}

function testRegexpPCRE_4193() {
  var regexp = /\W{2,3}/;
  assertEquals(null, regexp.exec("a.b.c")); //test 4251
}

function testRegexpPCRE_4194() {
  var regexp = /\W{2,3}?/;
  assertEquals("==", regexp.exec("ab====cd").toString()); //test 4252
}

function testRegexpPCRE_4195() {
  var regexp = /\W{2,3}?/;
  assertEquals("==", regexp.exec("ab==cd").toString()); //test 4253
}

function testRegexpPCRE_4196() {
  var regexp = /\W{2,3}?/;
  assertEquals("**", regexp.exec("*** Failers").toString()); //test 4254
}

function testRegexpPCRE_4197() {
  var regexp = /\W{2,3}?/;
  assertEquals(null, regexp.exec("a.b.c")); //test 4255
}

function testRegexpPCRE_4198() {
  var regexp = /\W{2,3}?/;
  assertEquals(null, regexp.exec("x{100}")); //test 4256
}

function testRegexpPCRE_4199() {
  var regexp = /\W{2,3}?/;
  assertEquals(null, regexp.exec("Zx{100}")); //test 4257
}

function testRegexpPCRE_4200() {
  var regexp = /\W{2,3}?/;
  assertEquals(null, regexp.exec("x{100}Z")); //test 4258
}

function testRegexpPCRE_4201() {
  var regexp = /\W{2,3}?/;
  assertEquals("**", regexp.exec("*** Failers ").toString()); //test 4259
}

function testRegexpPCRE_4202() {
  var regexp = /\W{2,3}?/;
  assertEquals(null, regexp.exec("Zx{100}")); //test 4260
}

function testRegexpPCRE_4203() {
  var regexp = /\W{2,3}?/;
  assertEquals(null, regexp.exec("x{100}")); //test 4261
}

function testRegexpPCRE_4204() {
  var regexp = /\W{2,3}?/;
  assertEquals(null, regexp.exec("x{100}Z")); //test 4262
}

function testRegexpPCRE_4205() {
  var regexp = /\W{2,3}?/;
  assertEquals("**", regexp.exec("*** Failers ").toString()); //test 4263
}

function testRegexpPCRE_4206() {
  var regexp = /\W{2,3}?/;
  assertEquals(null, regexp.exec("abcx{200}X")); //test 4264
}

function testRegexpPCRE_4207() {
  var regexp = /\W{2,3}?/;
  assertEquals(null, regexp.exec("abcx{100}X ")); //test 4265
}

function testRegexpPCRE_4208() {
  var regexp = /\W{2,3}?/;
  assertEquals("**", regexp.exec("*** Failers").toString()); //test 4266
}

function testRegexpPCRE_4209() {
  var regexp = /\W{2,3}?/;
  assertEquals("  ", regexp.exec("X  ").toString()); //test 4267
}

function testRegexpPCRE_4210() {
  var regexp = /\W{2,3}?/;
  assertEquals(null, regexp.exec("abcx{200}X")); //test 4268
}

function testRegexpPCRE_4211() {
  var regexp = /\W{2,3}?/;
  assertEquals(null, regexp.exec("abcx{100}X ")); //test 4269
}

function testRegexpPCRE_4212() {
  var regexp = /\W{2,3}?/;
  assertEquals(null, regexp.exec("abQX ")); //test 4270
}

function testRegexpPCRE_4213() {
  var regexp = /\W{2,3}?/;
  assertEquals("**", regexp.exec("*** Failers").toString()); //test 4271
}

function testRegexpPCRE_4214() {
  var regexp = /\W{2,3}?/;
  assertEquals("  ", regexp.exec("X  ").toString()); //test 4272
}

function testRegexpPCRE_4215() {
  var regexp = /\W{2,3}?/;
  assertEquals(null, regexp.exec("abcx{100}x{200}x{100}X")); //test 4273
}

function testRegexpPCRE_4216() {
  var regexp = /\W{2,3}?/;
  assertEquals("**", regexp.exec("*** Failers").toString()); //test 4274
}

function testRegexpPCRE_4217() {
  var regexp = /\W{2,3}?/;
  assertEquals(null, regexp.exec("abcx{200}X")); //test 4275
}

function testRegexpPCRE_4218() {
  var regexp = /\W{2,3}?/;
  assertEquals("  ", regexp.exec("X  ").toString()); //test 4276
}

function testRegexpPCRE_4219() {
  var regexp = /\W{2,3}?/;
  assertEquals(null, regexp.exec("AX")); //test 4277
}

function testRegexpPCRE_4220() {
  var regexp = /\W{2,3}?/;
  assertEquals(null, regexp.exec("x{150}X")); //test 4278
}

function testRegexpPCRE_4221() {
  var regexp = /\W{2,3}?/;
  assertEquals(null, regexp.exec("x{500}X ")); //test 4279
}

function testRegexpPCRE_4222() {
  var regexp = /\W{2,3}?/;
  assertEquals("**", regexp.exec("*** Failers").toString()); //test 4280
}

function testRegexpPCRE_4223() {
  var regexp = /\W{2,3}?/;
  assertEquals(null, regexp.exec("x{100}X")); //test 4281
}

function testRegexpPCRE_4224() {
  var regexp = /\W{2,3}?/;
  assertEquals("  ", regexp.exec("x{200}X   ").toString()); //test 4282
}

function testRegexpPCRE_4225() {
  var regexp = /\W{2,3}?/;
  assertEquals(null, regexp.exec("AX")); //test 4283
}

function testRegexpPCRE_4226() {
  var regexp = /\W{2,3}?/;
  assertEquals(null, regexp.exec("x{150}X")); //test 4284
}

function testRegexpPCRE_4227() {
  var regexp = /\W{2,3}?/;
  assertEquals(null, regexp.exec("x{500}X ")); //test 4285
}

function testRegexpPCRE_4228() {
  var regexp = /\W{2,3}?/;
  assertEquals("**", regexp.exec("*** Failers").toString()); //test 4286
}

function testRegexpPCRE_4229() {
  var regexp = /\W{2,3}?/;
  assertEquals(null, regexp.exec("x{100}X")); //test 4287
}

function testRegexpPCRE_4230() {
  var regexp = /\W{2,3}?/;
  assertEquals("  ", regexp.exec("x{200}X   ").toString()); //test 4288
}

function testRegexpPCRE_4231() {
  var regexp = /\W{2,3}?/;
  assertEquals(null, regexp.exec("QX ")); //test 4289
}

function testRegexpPCRE_4232() {
  var regexp = /\W{2,3}?/;
  assertEquals(null, regexp.exec("AX")); //test 4290
}

function testRegexpPCRE_4233() {
  var regexp = /\W{2,3}?/;
  assertEquals(null, regexp.exec("x{500}X ")); //test 4291
}

function testRegexpPCRE_4234() {
  var regexp = /\W{2,3}?/;
  assertEquals("**", regexp.exec("*** Failers").toString()); //test 4292
}

function testRegexpPCRE_4235() {
  var regexp = /\W{2,3}?/;
  assertEquals(null, regexp.exec("x{100}X")); //test 4293
}

function testRegexpPCRE_4236() {
  var regexp = /\W{2,3}?/;
  assertEquals(null, regexp.exec("x{150}X")); //test 4294
}

function testRegexpPCRE_4237() {
  var regexp = /\W{2,3}?/;
  assertEquals("  ", regexp.exec("x{200}X   ").toString()); //test 4295
}

function testRegexpPCRE_4238() {
  var regexp = /\W{2,3}?/;
  assertEquals(null, regexp.exec("z")); //test 4296
}

function testRegexpPCRE_4239() {
  var regexp = /\W{2,3}?/;
  assertEquals(null, regexp.exec("Z ")); //test 4297
}

function testRegexpPCRE_4240() {
  var regexp = /\W{2,3}?/;
  assertEquals(null, regexp.exec("x{100}")); //test 4298
}

function testRegexpPCRE_4241() {
  var regexp = /\W{2,3}?/;
  assertEquals("**", regexp.exec("*** Failers").toString()); //test 4299
}

function testRegexpPCRE_4242() {
  var regexp = /\W{2,3}?/;
  assertEquals(null, regexp.exec("x{102}")); //test 4300
}

function testRegexpPCRE_4243() {
  var regexp = /\W{2,3}?/;
  assertEquals("  ", regexp.exec("y    ").toString()); //test 4301
}

function testRegexpPCRE_4244() {
  var regexp = /[\xFF]/;
  assertEquals("\xff", regexp.exec(">\xff<").toString()); //test 4302
}

function testRegexpPCRE_4245() {
  var regexp = /[\xff]/;
  assertEquals(null, regexp.exec(">x{ff}<")); //test 4303
}

function testRegexpPCRE_4246() {
  var regexp = /[^\xFF]/;
  assertEquals("X", regexp.exec("XYZ").toString()); //test 4304
}

function testRegexpPCRE_4247() {
  var regexp = /[^\xff]/;
  assertEquals("X", regexp.exec("XYZ").toString()); //test 4305
}

function testRegexpPCRE_4248() {
  var regexp = /[^\xff]/;
  assertEquals("x", regexp.exec("x{123} ").toString()); //test 4306
}

function testRegexpPCRE_4249() {
  var regexp = /(|a)/g;
  assertEquals(",", regexp.exec("catac").toString()); //test 4307
  assertEquals(",", regexp.exec("ax{256}a ").toString()); //test 4308
  assertEquals(",", regexp.exec("x{85}").toString()); //test 4309
}

function testRegexpPCRE_4250() {
  var regexp = /^abc./mg;
  assertEquals("abc1", regexp.exec("abc1 \nabc2 \x0babc3xx \x0cabc4 \x0dabc5xx \x0d\nabc6 x{0085}abc7 x{2028}abc8 x{2029}abc9 JUNK").toString()); //test 4310
}

function testRegexpPCRE_4251() {
  var regexp = /abc.$/mg;
  assertEquals("abc1", regexp.exec("abc1\n abc2\x0b abc3\x0c abc4\x0d abc5\x0d\n abc6x{0085} abc7x{2028} abc8x{2029} abc9").toString()); //test 4311
}

function testRegexpPCRE_4252() {
  var regexp = /^a\Rb/i;
  assertEquals(null, regexp.exec("a\nb")); //test 4312
}

function testRegexpPCRE_4253() {
  var regexp = /^a\Rb/i;
  assertEquals(null, regexp.exec("a\x0db")); //test 4313
}

function testRegexpPCRE_4254() {
  var regexp = /^a\Rb/i;
  assertEquals(null, regexp.exec("a\x0d\nb")); //test 4314
}

function testRegexpPCRE_4255() {
  var regexp = /^a\Rb/i;
  assertEquals(null, regexp.exec("a\x0bb")); //test 4315
}

function testRegexpPCRE_4256() {
  var regexp = /^a\Rb/i;
  assertEquals(null, regexp.exec("a\x0cb")); //test 4316
}

function testRegexpPCRE_4257() {
  var regexp = /^a\Rb/i;
  assertEquals(null, regexp.exec("ax{85}b   ")); //test 4317
}

function testRegexpPCRE_4258() {
  var regexp = /^a\Rb/i;
  assertEquals(null, regexp.exec("ax{2028}b ")); //test 4318
}

function testRegexpPCRE_4259() {
  var regexp = /^a\Rb/i;
  assertEquals(null, regexp.exec("ax{2029}b ")); //test 4319
}

function testRegexpPCRE_4260() {
  var regexp = /^a\Rb/i;
  assertEquals(null, regexp.exec("** Failers")); //test 4320
}

function testRegexpPCRE_4261() {
  var regexp = /^a\Rb/i;
  assertEquals(null, regexp.exec("a\n\x0db    ")); //test 4321
}

function testRegexpPCRE_4262() {
  var regexp = /^a\R*b/i;
  assertEquals("ab", regexp.exec("ab").toString()); //test 4322
}

function testRegexpPCRE_4263() {
  var regexp = /^a\R*b/i;
  assertEquals(null, regexp.exec("a\nb")); //test 4323
}

function testRegexpPCRE_4264() {
  var regexp = /^a\R*b/i;
  assertEquals(null, regexp.exec("a\x0db")); //test 4324
}

function testRegexpPCRE_4265() {
  var regexp = /^a\R*b/i;
  assertEquals(null, regexp.exec("a\x0d\nb")); //test 4325
}

function testRegexpPCRE_4266() {
  var regexp = /^a\R*b/i;
  assertEquals(null, regexp.exec("a\x0bb")); //test 4326
}

function testRegexpPCRE_4267() {
  var regexp = /^a\R*b/i;
  assertEquals(null, regexp.exec("a\x0cx{2028}x{2029}b")); //test 4327
}

function testRegexpPCRE_4268() {
  var regexp = /^a\R*b/i;
  assertEquals(null, regexp.exec("ax{85}b   ")); //test 4328
}

function testRegexpPCRE_4269() {
  var regexp = /^a\R*b/i;
  assertEquals(null, regexp.exec("a\n\x0db    ")); //test 4329
}

function testRegexpPCRE_4270() {
  var regexp = /^a\R*b/i;
  assertEquals(null, regexp.exec("a\n\x0dx{85}\x0cb ")); //test 4330
}

function testRegexpPCRE_4271() {
  var regexp = /^a\R+b/i;
  assertEquals(null, regexp.exec("a\nb")); //test 4331
}

function testRegexpPCRE_4272() {
  var regexp = /^a\R+b/i;
  assertEquals(null, regexp.exec("a\x0db")); //test 4332
}

function testRegexpPCRE_4273() {
  var regexp = /^a\R+b/i;
  assertEquals(null, regexp.exec("a\x0d\nb")); //test 4333
}

function testRegexpPCRE_4274() {
  var regexp = /^a\R+b/i;
  assertEquals(null, regexp.exec("a\x0bb")); //test 4334
}

function testRegexpPCRE_4275() {
  var regexp = /^a\R+b/i;
  assertEquals(null, regexp.exec("a\x0cx{2028}x{2029}b")); //test 4335
}

function testRegexpPCRE_4276() {
  var regexp = /^a\R+b/i;
  assertEquals(null, regexp.exec("ax{85}b   ")); //test 4336
}

function testRegexpPCRE_4277() {
  var regexp = /^a\R+b/i;
  assertEquals(null, regexp.exec("a\n\x0db    ")); //test 4337
}

function testRegexpPCRE_4278() {
  var regexp = /^a\R+b/i;
  assertEquals(null, regexp.exec("a\n\x0dx{85}\x0cb ")); //test 4338
}

function testRegexpPCRE_4279() {
  var regexp = /^a\R+b/i;
  assertEquals(null, regexp.exec("** Failers")); //test 4339
}

function testRegexpPCRE_4280() {
  var regexp = /^a\R+b/i;
  assertEquals(null, regexp.exec("ab  ")); //test 4340
}

function testRegexpPCRE_4281() {
  var regexp = /^a\R{1,3}b/i;
  assertEquals(null, regexp.exec("a\nb")); //test 4341
}

function testRegexpPCRE_4282() {
  var regexp = /^a\R{1,3}b/i;
  assertEquals(null, regexp.exec("a\n\x0db")); //test 4342
}

function testRegexpPCRE_4283() {
  var regexp = /^a\R{1,3}b/i;
  assertEquals(null, regexp.exec("a\n\x0dx{85}b")); //test 4343
}

function testRegexpPCRE_4284() {
  var regexp = /^a\R{1,3}b/i;
  assertEquals(null, regexp.exec("a\x0d\n\x0d\nb ")); //test 4344
}

function testRegexpPCRE_4285() {
  var regexp = /^a\R{1,3}b/i;
  assertEquals(null, regexp.exec("a\x0d\n\x0d\n\x0d\nb ")); //test 4345
}

function testRegexpPCRE_4286() {
  var regexp = /^a\R{1,3}b/i;
  assertEquals(null, regexp.exec("a\n\x0d\n\x0db")); //test 4346
}

function testRegexpPCRE_4287() {
  var regexp = /^a\R{1,3}b/i;
  assertEquals(null, regexp.exec("a\n\n\x0d\nb ")); //test 4347
}

function testRegexpPCRE_4288() {
  var regexp = /^a\R{1,3}b/i;
  assertEquals(null, regexp.exec("** Failers")); //test 4348
}

function testRegexpPCRE_4289() {
  var regexp = /^a\R{1,3}b/i;
  assertEquals(null, regexp.exec("a\n\n\n\x0db")); //test 4349
}

function testRegexpPCRE_4290() {
  var regexp = /^a\R{1,3}b/i;
  assertEquals(null, regexp.exec("a\x0d")); //test 4350
}

function testRegexpPCRE_4291() {
  var regexp = /\h+\V?\v{3,4}/;
  assertEquals(null, regexp.exec("\x09 x{a0}X\n\x0b\x0c\x0d\n")); //test 4351
}

function testRegexpPCRE_4292() {
  var regexp = /\V?\v{3,4}/;
  assertEquals(null, regexp.exec(" x{a0}X\n\x0b\x0c\x0d\n")); //test 4352
}

function testRegexpPCRE_4293() {
  var regexp = /\h+\V?\v{3,4}/;
  assertEquals(null, regexp.exec(">\x09 x{a0}X\n\n\n<")); //test 4353
}

function testRegexpPCRE_4294() {
  var regexp = /\V?\v{3,4}/;
  assertEquals(null, regexp.exec(">\x09 x{a0}X\n\n\n<")); //test 4354
}

function testRegexpPCRE_4295() {
  var regexp = /\H\h\V\v/;
  assertEquals(null, regexp.exec("X X\n")); //test 4355
}

function testRegexpPCRE_4296() {
  var regexp = /\H\h\V\v/;
  assertEquals(null, regexp.exec("X\x09X\x0b")); //test 4356
}

function testRegexpPCRE_4297() {
  var regexp = /\H\h\V\v/;
  assertEquals(null, regexp.exec("** Failers")); //test 4357
}

function testRegexpPCRE_4298() {
  var regexp = /\H\h\V\v/;
  assertEquals(null, regexp.exec("x{a0} X\n   ")); //test 4358
}

function testRegexpPCRE_4299() {
  var regexp = /\H*\h+\V?\v{3,4}/;
  assertEquals(null, regexp.exec("\x09 x{a0}X\n\x0b\x0c\x0d\n")); //test 4359
}

function testRegexpPCRE_4300() {
  var regexp = /\H*\h+\V?\v{3,4}/;
  assertEquals(null, regexp.exec("\x09 x{a0}\n\x0b\x0c\x0d\n")); //test 4360
}

function testRegexpPCRE_4301() {
  var regexp = /\H*\h+\V?\v{3,4}/;
  assertEquals(null, regexp.exec("\x09 x{a0}\n\x0b\x0c")); //test 4361
}

function testRegexpPCRE_4302() {
  var regexp = /\H*\h+\V?\v{3,4}/;
  assertEquals(null, regexp.exec("** Failers ")); //test 4362
}

function testRegexpPCRE_4303() {
  var regexp = /\H*\h+\V?\v{3,4}/;
  assertEquals(null, regexp.exec("\x09 x{a0}\n\x0b")); //test 4363
}

function testRegexpPCRE_4304() {
  var regexp = /\H*\h+\V?\v{3,4}/;
  assertEquals(null, regexp.exec(" ")); //test 4364
}

function testRegexpPCRE_4305() {
  var regexp = /\H\h\V\v/;
  assertEquals(null, regexp.exec("x{3001}x{3000}x{2030}x{2028}")); //test 4365
}

function testRegexpPCRE_4306() {
  var regexp = /\H\h\V\v/;
  assertEquals(null, regexp.exec("Xx{180e}Xx{85}")); //test 4366
}

function testRegexpPCRE_4307() {
  var regexp = /\H\h\V\v/;
  assertEquals(null, regexp.exec("** Failers")); //test 4367
}

function testRegexpPCRE_4308() {
  var regexp = /\H\h\V\v/;
  assertEquals(null, regexp.exec("x{2009} X\n   ")); //test 4368
}

function testRegexpPCRE_4309() {
  var regexp = /\H*\h+\V?\v{3,4}/;
  assertEquals(null, regexp.exec("x{1680}x{180e}x{2007}Xx{2028}x{2029}\x0c\x0d\n")); //test 4369
}

function testRegexpPCRE_4310() {
  var regexp = /\H*\h+\V?\v{3,4}/;
  assertEquals(null, regexp.exec("\x09x{205f}x{a0}\nx{2029}\x0cx{2028}\n")); //test 4370
}

function testRegexpPCRE_4311() {
  var regexp = /\H*\h+\V?\v{3,4}/;
  assertEquals(null, regexp.exec("\x09 x{202f}\n\x0b\x0c")); //test 4371
}

function testRegexpPCRE_4312() {
  var regexp = /\H*\h+\V?\v{3,4}/;
  assertEquals(null, regexp.exec("** Failers ")); //test 4372
}

function testRegexpPCRE_4313() {
  var regexp = /\H*\h+\V?\v{3,4}/;
  assertEquals(null, regexp.exec("\x09x{200a}x{a0}x{2028}\x0b")); //test 4373
}

function testRegexpPCRE_4314() {
  var regexp = /\H*\h+\V?\v{3,4}/;
  assertEquals(null, regexp.exec(" ")); //test 4374
}

function testRegexpPCRE_4315() {
  var regexp = /a\Rb/i;
  assertEquals(null, regexp.exec("a\x0db")); //test 4375
}

function testRegexpPCRE_4316() {
  var regexp = /a\Rb/i;
  assertEquals(null, regexp.exec("a\nb")); //test 4376
}

function testRegexpPCRE_4317() {
  var regexp = /a\Rb/i;
  assertEquals(null, regexp.exec("a\x0d\nb")); //test 4377
}

function testRegexpPCRE_4318() {
  var regexp = /a\Rb/i;
  assertEquals(null, regexp.exec("** Failers")); //test 4378
}

function testRegexpPCRE_4319() {
  var regexp = /a\Rb/i;
  assertEquals(null, regexp.exec("ax{85}b")); //test 4379
}

function testRegexpPCRE_4320() {
  var regexp = /a\Rb/i;
  assertEquals(null, regexp.exec("a\x0bb     ")); //test 4380
}

function testRegexpPCRE_4321() {
  var regexp = /a\Rb/i;
  assertEquals(null, regexp.exec("a\x0db")); //test 4381
}

function testRegexpPCRE_4322() {
  var regexp = /a\Rb/i;
  assertEquals(null, regexp.exec("a\nb")); //test 4382
}

function testRegexpPCRE_4323() {
  var regexp = /a\Rb/i;
  assertEquals(null, regexp.exec("a\x0d\nb")); //test 4383
}

function testRegexpPCRE_4324() {
  var regexp = /a\Rb/i;
  assertEquals(null, regexp.exec("ax{85}b")); //test 4384
}

function testRegexpPCRE_4325() {
  var regexp = /a\Rb/i;
  assertEquals(null, regexp.exec("a\x0bb     ")); //test 4385
}

function testRegexpPCRE_4326() {
  var regexp = /a\Rb/i;
  assertEquals(null, regexp.exec("** Failers ")); //test 4386
}

function testRegexpPCRE_4327() {
  var regexp = /a\Rb/i;
  assertEquals(null, regexp.exec("ax{85}b<bsr_anycrlf>")); //test 4387
}

function testRegexpPCRE_4328() {
  var regexp = /a\Rb/i;
  assertEquals(null, regexp.exec("a\x0bb<bsr_anycrlf>")); //test 4388
}

function testRegexpPCRE_4329() {
  var regexp = /a\R?b/i;
  assertEquals(null, regexp.exec("a\x0db")); //test 4389
}

function testRegexpPCRE_4330() {
  var regexp = /a\R?b/i;
  assertEquals(null, regexp.exec("a\nb")); //test 4390
}

function testRegexpPCRE_4331() {
  var regexp = /a\R?b/i;
  assertEquals(null, regexp.exec("a\x0d\nb")); //test 4391
}

function testRegexpPCRE_4332() {
  var regexp = /a\R?b/i;
  assertEquals(null, regexp.exec("** Failers")); //test 4392
}

function testRegexpPCRE_4333() {
  var regexp = /a\R?b/i;
  assertEquals(null, regexp.exec("ax{85}b")); //test 4393
}

function testRegexpPCRE_4334() {
  var regexp = /a\R?b/i;
  assertEquals(null, regexp.exec("a\x0bb     ")); //test 4394
}

function testRegexpPCRE_4335() {
  var regexp = /a\R?b/i;
  assertEquals(null, regexp.exec("a\x0db")); //test 4395
}

function testRegexpPCRE_4336() {
  var regexp = /a\R?b/i;
  assertEquals(null, regexp.exec("a\nb")); //test 4396
}

function testRegexpPCRE_4337() {
  var regexp = /a\R?b/i;
  assertEquals(null, regexp.exec("a\x0d\nb")); //test 4397
}

function testRegexpPCRE_4338() {
  var regexp = /a\R?b/i;
  assertEquals(null, regexp.exec("ax{85}b")); //test 4398
}

function testRegexpPCRE_4339() {
  var regexp = /a\R?b/i;
  assertEquals(null, regexp.exec("a\x0bb     ")); //test 4399
}

function testRegexpPCRE_4340() {
  var regexp = /a\R?b/i;
  assertEquals(null, regexp.exec("** Failers ")); //test 4400
}

function testRegexpPCRE_4341() {
  var regexp = /a\R?b/i;
  assertEquals(null, regexp.exec("ax{85}b<bsr_anycrlf>")); //test 4401
}

function testRegexpPCRE_4342() {
  var regexp = /a\R?b/i;
  assertEquals(null, regexp.exec("a\x0bb<bsr_anycrlf>")); //test 4402
}

function testRegexpPCRE_4343() {
  var regexp = /X/;
  assertEquals("X", regexp.exec("Ax{1ec5}ABCXYZ").toString()); //test 4403
}

function testRegexpPCRE_4344() {
  var regexp = /\pL\P{Nd}/;
  assertEquals(null, regexp.exec("AB")); //test 4404
}

function testRegexpPCRE_4345() {
  var regexp = /\pL\P{Nd}/;
  assertEquals(null, regexp.exec("*** Failers")); //test 4405
}

function testRegexpPCRE_4346() {
  var regexp = /\pL\P{Nd}/;
  assertEquals(null, regexp.exec("A0")); //test 4406
}

function testRegexpPCRE_4347() {
  var regexp = /\pL\P{Nd}/;
  assertEquals(null, regexp.exec("00   ")); //test 4407
}

function testRegexpPCRE_4348() {
  var regexp = /\X./;
  assertEquals(null, regexp.exec("AB")); //test 4408
}

function testRegexpPCRE_4349() {
  var regexp = /\X./;
  assertEquals(null, regexp.exec("Ax{300}BC ")); //test 4409
}

function testRegexpPCRE_4350() {
  var regexp = /\X./;
  assertEquals(null, regexp.exec("Ax{300}x{301}x{302}BC ")); //test 4410
}

function testRegexpPCRE_4351() {
  var regexp = /\X./;
  assertEquals(null, regexp.exec("*** Failers")); //test 4411
}

function testRegexpPCRE_4352() {
  var regexp = /\X./;
  assertEquals(null, regexp.exec("x{300}  ")); //test 4412
}

function testRegexpPCRE_4353() {
  var regexp = /\X\X/;
  assertEquals(null, regexp.exec("ABC")); //test 4413
}

function testRegexpPCRE_4354() {
  var regexp = /\X\X/;
  assertEquals(null, regexp.exec("Ax{300}Bx{300}x{301}C ")); //test 4414
}

function testRegexpPCRE_4355() {
  var regexp = /\X\X/;
  assertEquals(null, regexp.exec("Ax{300}x{301}x{302}BC ")); //test 4415
}

function testRegexpPCRE_4356() {
  var regexp = /\X\X/;
  assertEquals(null, regexp.exec("*** Failers")); //test 4416
}

function testRegexpPCRE_4357() {
  var regexp = /\X\X/;
  assertEquals(null, regexp.exec("x{300}  ")); //test 4417
}

function testRegexpPCRE_4358() {
  var regexp = /^\pL+/;
  assertEquals(null, regexp.exec("abcd")); //test 4418
}

function testRegexpPCRE_4359() {
  var regexp = /^\pL+/;
  assertEquals(null, regexp.exec("a ")); //test 4419
}

function testRegexpPCRE_4360() {
  var regexp = /^\pL+/;
  assertEquals(null, regexp.exec("*** Failers ")); //test 4420
}

function testRegexpPCRE_4361() {
  var regexp = /^\PL+/;
  assertEquals(null, regexp.exec("1234")); //test 4421
}

function testRegexpPCRE_4362() {
  var regexp = /^\PL+/;
  assertEquals(null, regexp.exec("= ")); //test 4422
}

function testRegexpPCRE_4363() {
  var regexp = /^\PL+/;
  assertEquals(null, regexp.exec("*** Failers ")); //test 4423
}

function testRegexpPCRE_4364() {
  var regexp = /^\PL+/;
  assertEquals(null, regexp.exec("abcd ")); //test 4424
}

function testRegexpPCRE_4365() {
  var regexp = /^\X+/;
  assertEquals(null, regexp.exec("abcdAx{300}x{301}x{302}")); //test 4425
}

function testRegexpPCRE_4366() {
  var regexp = /^\X+/;
  assertEquals(null, regexp.exec("Ax{300}x{301}x{302}")); //test 4426
}

function testRegexpPCRE_4367() {
  var regexp = /^\X+/;
  assertEquals(null, regexp.exec("Ax{300}x{301}x{302}Ax{300}x{301}x{302}")); //test 4427
}

function testRegexpPCRE_4368() {
  var regexp = /^\X+/;
  assertEquals(null, regexp.exec("a ")); //test 4428
}

function testRegexpPCRE_4369() {
  var regexp = /^\X+/;
  assertEquals(null, regexp.exec("*** Failers ")); //test 4429
}

function testRegexpPCRE_4370() {
  var regexp = /^\X+/;
  assertEquals(null, regexp.exec("x{300}x{301}x{302}")); //test 4430
}

function testRegexpPCRE_4371() {
  var regexp = /\X?abc/;
  assertEquals("abc", regexp.exec("abc").toString()); //test 4431
}

function testRegexpPCRE_4372() {
  var regexp = /\X?abc/;
  assertEquals("abc", regexp.exec("Ax{300}abc").toString()); //test 4432
}

function testRegexpPCRE_4373() {
  var regexp = /\X?abc/;
  assertEquals("abc", regexp.exec("Ax{300}x{301}x{302}Ax{300}Ax{300}Ax{300}abcxyz").toString()); //test 4433
}

function testRegexpPCRE_4374() {
  var regexp = /\X?abc/;
  assertEquals("abc", regexp.exec("x{300}abc  ").toString()); //test 4434
}

function testRegexpPCRE_4375() {
  var regexp = /\X?abc/;
  assertEquals(null, regexp.exec("*** Failers")); //test 4435
}

function testRegexpPCRE_4376() {
  var regexp = /^\X?abc/;
  assertEquals("abc", regexp.exec("abc").toString()); //test 4436
}

function testRegexpPCRE_4377() {
  var regexp = /^\X?abc/;
  assertEquals(null, regexp.exec("Ax{300}abc")); //test 4437
}

function testRegexpPCRE_4378() {
  var regexp = /^\X?abc/;
  assertEquals(null, regexp.exec("*** Failers")); //test 4438
}

function testRegexpPCRE_4379() {
  var regexp = /^\X?abc/;
  assertEquals(null, regexp.exec("Ax{300}x{301}x{302}Ax{300}Ax{300}Ax{300}abcxyz")); //test 4439
}

function testRegexpPCRE_4380() {
  var regexp = /^\X?abc/;
  assertEquals(null, regexp.exec("x{300}abc  ")); //test 4440
}

function testRegexpPCRE_4381() {
  var regexp = /\X*abc/;
  assertEquals("abc", regexp.exec("abc").toString()); //test 4441
}

function testRegexpPCRE_4382() {
  var regexp = /\X*abc/;
  assertEquals("abc", regexp.exec("Ax{300}abc").toString()); //test 4442
}

function testRegexpPCRE_4383() {
  var regexp = /\X*abc/;
  assertEquals("abc", regexp.exec("Ax{300}x{301}x{302}Ax{300}Ax{300}Ax{300}abcxyz").toString()); //test 4443
}

function testRegexpPCRE_4384() {
  var regexp = /\X*abc/;
  assertEquals("abc", regexp.exec("x{300}abc  ").toString()); //test 4444
}

function testRegexpPCRE_4385() {
  var regexp = /\X*abc/;
  assertEquals(null, regexp.exec("*** Failers")); //test 4445
}

function testRegexpPCRE_4386() {
  var regexp = /^\X*abc/;
  assertEquals("abc", regexp.exec("abc").toString()); //test 4446
}

function testRegexpPCRE_4387() {
  var regexp = /^\X*abc/;
  assertEquals(null, regexp.exec("Ax{300}abc")); //test 4447
}

function testRegexpPCRE_4388() {
  var regexp = /^\X*abc/;
  assertEquals(null, regexp.exec("Ax{300}x{301}x{302}Ax{300}Ax{300}Ax{300}abcxyz")); //test 4448
}

function testRegexpPCRE_4389() {
  var regexp = /^\X*abc/;
  assertEquals(null, regexp.exec("*** Failers")); //test 4449
}

function testRegexpPCRE_4390() {
  var regexp = /^\X*abc/;
  assertEquals(null, regexp.exec("x{300}abc  ")); //test 4450
}

function testRegexpPCRE_4391() {
  var regexp = /^\pL?=./;
  assertEquals(null, regexp.exec("A=b")); //test 4451
}

function testRegexpPCRE_4392() {
  var regexp = /^\pL?=./;
  assertEquals(null, regexp.exec("=c ")); //test 4452
}

function testRegexpPCRE_4393() {
  var regexp = /^\pL?=./;
  assertEquals(null, regexp.exec("*** Failers")); //test 4453
}

function testRegexpPCRE_4394() {
  var regexp = /^\pL?=./;
  assertEquals(null, regexp.exec("1=2 ")); //test 4454
}

function testRegexpPCRE_4395() {
  var regexp = /^\pL?=./;
  assertEquals(null, regexp.exec("AAAA=b  ")); //test 4455
}

function testRegexpPCRE_4396() {
  var regexp = /^\pL*=./;
  assertEquals(null, regexp.exec("AAAA=b")); //test 4456
}

function testRegexpPCRE_4397() {
  var regexp = /^\pL*=./;
  assertEquals(null, regexp.exec("=c ")); //test 4457
}

function testRegexpPCRE_4398() {
  var regexp = /^\pL*=./;
  assertEquals(null, regexp.exec("*** Failers")); //test 4458
}

function testRegexpPCRE_4399() {
  var regexp = /^\pL*=./;
  assertEquals(null, regexp.exec("1=2  ")); //test 4459
}

function testRegexpPCRE_4400() {
  var regexp = /^\X{2,3}X/;
  assertEquals(null, regexp.exec("Ax{300}x{301}x{302}Ax{300}x{301}x{302}X")); //test 4460
}

function testRegexpPCRE_4401() {
  var regexp = /^\X{2,3}X/;
  assertEquals(null, regexp.exec("Ax{300}x{301}x{302}Ax{300}x{301}x{302}Ax{300}x{301}x{302}X ")); //test 4461
}

function testRegexpPCRE_4402() {
  var regexp = /^\X{2,3}X/;
  assertEquals(null, regexp.exec("*** Failers")); //test 4462
}

function testRegexpPCRE_4403() {
  var regexp = /^\X{2,3}X/;
  assertEquals(null, regexp.exec("X")); //test 4463
}

function testRegexpPCRE_4404() {
  var regexp = /^\X{2,3}X/;
  assertEquals(null, regexp.exec("Ax{300}x{301}x{302}X")); //test 4464
}

function testRegexpPCRE_4405() {
  var regexp = /^\X{2,3}X/;
  assertEquals(null, regexp.exec("Ax{300}x{301}x{302}Ax{300}x{301}x{302}Ax{300}x{301}x{302}Ax{300}x{301}x{302}X")); //test 4465
}

function testRegexpPCRE_4406() {
  var regexp = /^\pC\pL\pM\pN\pP\pS\pZ</;
  assertEquals(null, regexp.exec("x{c0}x{30f}x{660}x{66c}x{f01}x{1680}<")); //test 4466
}

function testRegexpPCRE_4407() {
  var regexp = /^\pC\pL\pM\pN\pP\pS\pZ</;
  assertEquals(null, regexp.exec("\npx{300}9!$ < ")); //test 4467
}

function testRegexpPCRE_4408() {
  var regexp = /^\pC\pL\pM\pN\pP\pS\pZ</;
  assertEquals(null, regexp.exec("** Failers ")); //test 4468
}

function testRegexpPCRE_4409() {
  var regexp = /^\pC\pL\pM\pN\pP\pS\pZ</;
  assertEquals(null, regexp.exec("apx{300}9!$ < ")); //test 4469
}

function testRegexpPCRE_4410() {
  var regexp = /^\PC/;
  assertEquals(null, regexp.exec("X")); //test 4470
}

function testRegexpPCRE_4411() {
  var regexp = /^\PC/;
  assertEquals(null, regexp.exec("** Failers ")); //test 4471
}

function testRegexpPCRE_4412() {
  var regexp = /^\PC/;
  assertEquals(null, regexp.exec("")); //test 4472
}

function testRegexpPCRE_4413() {
  var regexp = /^\PL/;
  assertEquals(null, regexp.exec("9")); //test 4473
}

function testRegexpPCRE_4414() {
  var regexp = /^\PL/;
  assertEquals(null, regexp.exec("** Failers ")); //test 4474
}

function testRegexpPCRE_4415() {
  var regexp = /^\PL/;
  assertEquals(null, regexp.exec("x{c0}")); //test 4475
}

function testRegexpPCRE_4416() {
  var regexp = /^\PM/;
  assertEquals(null, regexp.exec("X")); //test 4476
}

function testRegexpPCRE_4417() {
  var regexp = /^\PM/;
  assertEquals(null, regexp.exec("** Failers ")); //test 4477
}

function testRegexpPCRE_4418() {
  var regexp = /^\PM/;
  assertEquals(null, regexp.exec("x{30f}")); //test 4478
}

function testRegexpPCRE_4419() {
  var regexp = /^\PN/;
  assertEquals(null, regexp.exec("X")); //test 4479
}

function testRegexpPCRE_4420() {
  var regexp = /^\PN/;
  assertEquals(null, regexp.exec("** Failers ")); //test 4480
}

function testRegexpPCRE_4421() {
  var regexp = /^\PN/;
  assertEquals(null, regexp.exec("x{660}")); //test 4481
}

function testRegexpPCRE_4422() {
  var regexp = /^\PP/;
  assertEquals(null, regexp.exec("X")); //test 4482
}

function testRegexpPCRE_4423() {
  var regexp = /^\PP/;
  assertEquals(null, regexp.exec("** Failers ")); //test 4483
}

function testRegexpPCRE_4424() {
  var regexp = /^\PP/;
  assertEquals(null, regexp.exec("x{66c}")); //test 4484
}

function testRegexpPCRE_4425() {
  var regexp = /^\PS/;
  assertEquals(null, regexp.exec("X")); //test 4485
}

function testRegexpPCRE_4426() {
  var regexp = /^\PS/;
  assertEquals(null, regexp.exec("** Failers ")); //test 4486
}

function testRegexpPCRE_4427() {
  var regexp = /^\PS/;
  assertEquals(null, regexp.exec("x{f01}")); //test 4487
}

function testRegexpPCRE_4428() {
  var regexp = /^\PZ/;
  assertEquals(null, regexp.exec("X")); //test 4488
}

function testRegexpPCRE_4429() {
  var regexp = /^\PZ/;
  assertEquals(null, regexp.exec("** Failers ")); //test 4489
}

function testRegexpPCRE_4430() {
  var regexp = /^\PZ/;
  assertEquals(null, regexp.exec("x{1680}")); //test 4490
}

function testRegexpPCRE_4431() {
  var regexp = /^\p{Cc}/;
  assertEquals(null, regexp.exec("x{017}")); //test 4491
}

function testRegexpPCRE_4432() {
  var regexp = /^\p{Cc}/;
  assertEquals(null, regexp.exec("x{09f} ")); //test 4492
}

function testRegexpPCRE_4433() {
  var regexp = /^\p{Cc}/;
  assertEquals(null, regexp.exec("** Failers")); //test 4493
}

function testRegexpPCRE_4434() {
  var regexp = /^\p{Cc}/;
  assertEquals(null, regexp.exec("x{0600} ")); //test 4494
}

function testRegexpPCRE_4435() {
  var regexp = /^\p{Cf}/;
  assertEquals(null, regexp.exec("x{601}")); //test 4495
}

function testRegexpPCRE_4436() {
  var regexp = /^\p{Cf}/;
  assertEquals(null, regexp.exec("** Failers")); //test 4496
}

function testRegexpPCRE_4437() {
  var regexp = /^\p{Cf}/;
  assertEquals(null, regexp.exec("x{09f} ")); //test 4497
}

function testRegexpPCRE_4438() {
  var regexp = /^\p{Cn}/;
  assertEquals(null, regexp.exec("** Failers")); //test 4498
}

function testRegexpPCRE_4439() {
  var regexp = /^\p{Cn}/;
  assertEquals(null, regexp.exec("x{09f} ")); //test 4499
}

function testRegexpPCRE_4440() {
  var regexp = /^\p{Co}/;
  assertEquals(null, regexp.exec("x{f8ff}")); //test 4500
}

function testRegexpPCRE_4441() {
  var regexp = /^\p{Co}/;
  assertEquals(null, regexp.exec("** Failers")); //test 4501
}

function testRegexpPCRE_4442() {
  var regexp = /^\p{Co}/;
  assertEquals(null, regexp.exec("x{09f} ")); //test 4502
}

function testRegexpPCRE_4443() {
  var regexp = /^\p{Cs}/;
  assertEquals(null, regexp.exec("?x{dfff}")); //test 4503
}

function testRegexpPCRE_4444() {
  var regexp = /^\p{Cs}/;
  assertEquals(null, regexp.exec("** Failers")); //test 4504
}

function testRegexpPCRE_4445() {
  var regexp = /^\p{Cs}/;
  assertEquals(null, regexp.exec("x{09f} ")); //test 4505
}

function testRegexpPCRE_4446() {
  var regexp = /^\p{Ll}/;
  assertEquals(null, regexp.exec("a")); //test 4506
}

function testRegexpPCRE_4447() {
  var regexp = /^\p{Ll}/;
  assertEquals(null, regexp.exec("** Failers ")); //test 4507
}

function testRegexpPCRE_4448() {
  var regexp = /^\p{Ll}/;
  assertEquals(null, regexp.exec("Z")); //test 4508
}

function testRegexpPCRE_4449() {
  var regexp = /^\p{Ll}/;
  assertEquals(null, regexp.exec("x{e000}  ")); //test 4509
}

function testRegexpPCRE_4450() {
  var regexp = /^\p{Lm}/;
  assertEquals(null, regexp.exec("x{2b0}")); //test 4510
}

function testRegexpPCRE_4451() {
  var regexp = /^\p{Lm}/;
  assertEquals(null, regexp.exec("** Failers")); //test 4511
}

function testRegexpPCRE_4452() {
  var regexp = /^\p{Lm}/;
  assertEquals(null, regexp.exec("a ")); //test 4512
}

function testRegexpPCRE_4453() {
  var regexp = /^\p{Lo}/;
  assertEquals(null, regexp.exec("x{1bb}")); //test 4513
}

function testRegexpPCRE_4454() {
  var regexp = /^\p{Lo}/;
  assertEquals(null, regexp.exec("** Failers")); //test 4514
}

function testRegexpPCRE_4455() {
  var regexp = /^\p{Lo}/;
  assertEquals(null, regexp.exec("a ")); //test 4515
}

function testRegexpPCRE_4456() {
  var regexp = /^\p{Lo}/;
  assertEquals(null, regexp.exec("x{2b0}")); //test 4516
}

function testRegexpPCRE_4457() {
  var regexp = /^\p{Lt}/;
  assertEquals(null, regexp.exec("x{1c5}")); //test 4517
}

function testRegexpPCRE_4458() {
  var regexp = /^\p{Lt}/;
  assertEquals(null, regexp.exec("** Failers")); //test 4518
}

function testRegexpPCRE_4459() {
  var regexp = /^\p{Lt}/;
  assertEquals(null, regexp.exec("a ")); //test 4519
}

function testRegexpPCRE_4460() {
  var regexp = /^\p{Lt}/;
  assertEquals(null, regexp.exec("x{2b0}")); //test 4520
}

function testRegexpPCRE_4461() {
  var regexp = /^\p{Lu}/;
  assertEquals(null, regexp.exec("A")); //test 4521
}

function testRegexpPCRE_4462() {
  var regexp = /^\p{Lu}/;
  assertEquals(null, regexp.exec("** Failers")); //test 4522
}

function testRegexpPCRE_4463() {
  var regexp = /^\p{Lu}/;
  assertEquals(null, regexp.exec("x{2b0}")); //test 4523
}

function testRegexpPCRE_4464() {
  var regexp = /^\p{Mc}/;
  assertEquals(null, regexp.exec("x{903}")); //test 4524
}

function testRegexpPCRE_4465() {
  var regexp = /^\p{Mc}/;
  assertEquals(null, regexp.exec("** Failers")); //test 4525
}

function testRegexpPCRE_4466() {
  var regexp = /^\p{Mc}/;
  assertEquals(null, regexp.exec("X")); //test 4526
}

function testRegexpPCRE_4467() {
  var regexp = /^\p{Mc}/;
  assertEquals(null, regexp.exec("x{300}")); //test 4527
}

function testRegexpPCRE_4468() {
  var regexp = /^\p{Mc}/;
  assertEquals(null, regexp.exec("   ")); //test 4528
}

function testRegexpPCRE_4469() {
  var regexp = /^\p{Me}/;
  assertEquals(null, regexp.exec("x{488}")); //test 4529
}

function testRegexpPCRE_4470() {
  var regexp = /^\p{Me}/;
  assertEquals(null, regexp.exec("** Failers")); //test 4530
}

function testRegexpPCRE_4471() {
  var regexp = /^\p{Me}/;
  assertEquals(null, regexp.exec("X")); //test 4531
}

function testRegexpPCRE_4472() {
  var regexp = /^\p{Me}/;
  assertEquals(null, regexp.exec("x{903}")); //test 4532
}

function testRegexpPCRE_4473() {
  var regexp = /^\p{Me}/;
  assertEquals(null, regexp.exec("x{300}")); //test 4533
}

function testRegexpPCRE_4474() {
  var regexp = /^\p{Mn}/;
  assertEquals(null, regexp.exec("x{300}")); //test 4534
}

function testRegexpPCRE_4475() {
  var regexp = /^\p{Mn}/;
  assertEquals(null, regexp.exec("** Failers")); //test 4535
}

function testRegexpPCRE_4476() {
  var regexp = /^\p{Mn}/;
  assertEquals(null, regexp.exec("X")); //test 4536
}

function testRegexpPCRE_4477() {
  var regexp = /^\p{Mn}/;
  assertEquals(null, regexp.exec("x{903}")); //test 4537
}

function testRegexpPCRE_4478() {
  var regexp = /^\p{Mn}/;
  assertEquals(null, regexp.exec("0123456789x{660}x{661}x{662}x{663}x{664}x{665}x{666}x{667}x{668}x{669}x{66a}")); //test 4538
}

function testRegexpPCRE_4479() {
  var regexp = /^\p{Mn}/;
  assertEquals(null, regexp.exec("x{6f0}x{6f1}x{6f2}x{6f3}x{6f4}x{6f5}x{6f6}x{6f7}x{6f8}x{6f9}x{6fa}")); //test 4539
}

function testRegexpPCRE_4480() {
  var regexp = /^\p{Mn}/;
  assertEquals(null, regexp.exec("x{966}x{967}x{968}x{969}x{96a}x{96b}x{96c}x{96d}x{96e}x{96f}x{970}")); //test 4540
}

function testRegexpPCRE_4481() {
  var regexp = /^\p{Mn}/;
  assertEquals(null, regexp.exec("** Failers")); //test 4541
}

function testRegexpPCRE_4482() {
  var regexp = /^\p{Mn}/;
  assertEquals(null, regexp.exec("X")); //test 4542
}

function testRegexpPCRE_4483() {
  var regexp = /^\p{Nl}/;
  assertEquals(null, regexp.exec("x{16ee}")); //test 4543
}

function testRegexpPCRE_4484() {
  var regexp = /^\p{Nl}/;
  assertEquals(null, regexp.exec("** Failers")); //test 4544
}

function testRegexpPCRE_4485() {
  var regexp = /^\p{Nl}/;
  assertEquals(null, regexp.exec("X")); //test 4545
}

function testRegexpPCRE_4486() {
  var regexp = /^\p{Nl}/;
  assertEquals(null, regexp.exec("x{966}")); //test 4546
}

function testRegexpPCRE_4487() {
  var regexp = /^\p{No}/;
  assertEquals(null, regexp.exec("x{b2}")); //test 4547
}

function testRegexpPCRE_4488() {
  var regexp = /^\p{No}/;
  assertEquals(null, regexp.exec("x{b3}")); //test 4548
}

function testRegexpPCRE_4489() {
  var regexp = /^\p{No}/;
  assertEquals(null, regexp.exec("** Failers")); //test 4549
}

function testRegexpPCRE_4490() {
  var regexp = /^\p{No}/;
  assertEquals(null, regexp.exec("X")); //test 4550
}

function testRegexpPCRE_4491() {
  var regexp = /^\p{No}/;
  assertEquals(null, regexp.exec("x{16ee}")); //test 4551
}

function testRegexpPCRE_4492() {
  var regexp = /^\p{Pc}/;
  assertEquals(null, regexp.exec("_")); //test 4552
}

function testRegexpPCRE_4493() {
  var regexp = /^\p{Pc}/;
  assertEquals(null, regexp.exec("x{203f}")); //test 4553
}

function testRegexpPCRE_4494() {
  var regexp = /^\p{Pc}/;
  assertEquals(null, regexp.exec("** Failers")); //test 4554
}

function testRegexpPCRE_4495() {
  var regexp = /^\p{Pc}/;
  assertEquals(null, regexp.exec("X")); //test 4555
}

function testRegexpPCRE_4496() {
  var regexp = /^\p{Pc}/;
  assertEquals(null, regexp.exec("-")); //test 4556
}

function testRegexpPCRE_4497() {
  var regexp = /^\p{Pc}/;
  assertEquals(null, regexp.exec("x{58a}")); //test 4557
}

function testRegexpPCRE_4498() {
  var regexp = /^\p{Pd}/;
  assertEquals(null, regexp.exec("-")); //test 4558
}

function testRegexpPCRE_4499() {
  var regexp = /^\p{Pd}/;
  assertEquals(null, regexp.exec("x{58a}")); //test 4559
}

function testRegexpPCRE_4500() {
  var regexp = /^\p{Pd}/;
  assertEquals(null, regexp.exec("** Failers")); //test 4560
}

function testRegexpPCRE_4501() {
  var regexp = /^\p{Pd}/;
  assertEquals(null, regexp.exec("X")); //test 4561
}

function testRegexpPCRE_4502() {
  var regexp = /^\p{Pd}/;
  assertEquals(null, regexp.exec("x{203f}")); //test 4562
}

function testRegexpPCRE_4503() {
  var regexp = /^\p{Pe}/;
  assertEquals(null, regexp.exec(")")); //test 4563
}

function testRegexpPCRE_4504() {
  var regexp = /^\p{Pe}/;
  assertEquals(null, regexp.exec("]")); //test 4564
}

function testRegexpPCRE_4505() {
  var regexp = /^\p{Pe}/;
  assertEquals(null, regexp.exec("}")); //test 4565
}

function testRegexpPCRE_4506() {
  var regexp = /^\p{Pe}/;
  assertEquals(null, regexp.exec("x{f3b}")); //test 4566
}

function testRegexpPCRE_4507() {
  var regexp = /^\p{Pe}/;
  assertEquals(null, regexp.exec("** Failers")); //test 4567
}

function testRegexpPCRE_4508() {
  var regexp = /^\p{Pe}/;
  assertEquals(null, regexp.exec("X")); //test 4568
}

function testRegexpPCRE_4509() {
  var regexp = /^\p{Pe}/;
  assertEquals(null, regexp.exec("x{203f}")); //test 4569
}

function testRegexpPCRE_4510() {
  var regexp = /^\p{Pe}/;
  assertEquals(null, regexp.exec("(")); //test 4570
}

function testRegexpPCRE_4511() {
  var regexp = /^\p{Pe}/;
  assertEquals(null, regexp.exec("[")); //test 4571
}

function testRegexpPCRE_4512() {
  var regexp = /^\p{Pe}/;
  assertEquals(null, regexp.exec("{")); //test 4572
}

function testRegexpPCRE_4513() {
  var regexp = /^\p{Pe}/;
  assertEquals(null, regexp.exec("x{f3c}")); //test 4573
}

function testRegexpPCRE_4514() {
  var regexp = /^\p{Pf}/;
  assertEquals(null, regexp.exec("x{bb}")); //test 4574
}

function testRegexpPCRE_4515() {
  var regexp = /^\p{Pf}/;
  assertEquals(null, regexp.exec("x{2019}")); //test 4575
}

function testRegexpPCRE_4516() {
  var regexp = /^\p{Pf}/;
  assertEquals(null, regexp.exec("** Failers")); //test 4576
}

function testRegexpPCRE_4517() {
  var regexp = /^\p{Pf}/;
  assertEquals(null, regexp.exec("X")); //test 4577
}

function testRegexpPCRE_4518() {
  var regexp = /^\p{Pf}/;
  assertEquals(null, regexp.exec("x{203f}")); //test 4578
}

function testRegexpPCRE_4519() {
  var regexp = /^\p{Pi}/;
  assertEquals(null, regexp.exec("x{ab}")); //test 4579
}

function testRegexpPCRE_4520() {
  var regexp = /^\p{Pi}/;
  assertEquals(null, regexp.exec("x{2018}")); //test 4580
}

function testRegexpPCRE_4521() {
  var regexp = /^\p{Pi}/;
  assertEquals(null, regexp.exec("** Failers")); //test 4581
}

function testRegexpPCRE_4522() {
  var regexp = /^\p{Pi}/;
  assertEquals(null, regexp.exec("X")); //test 4582
}

function testRegexpPCRE_4523() {
  var regexp = /^\p{Pi}/;
  assertEquals(null, regexp.exec("x{203f}")); //test 4583
}

function testRegexpPCRE_4524() {
  var regexp = /^\p{Po}/;
  assertEquals(null, regexp.exec("!")); //test 4584
}

function testRegexpPCRE_4525() {
  var regexp = /^\p{Po}/;
  assertEquals(null, regexp.exec("x{37e}")); //test 4585
}

function testRegexpPCRE_4526() {
  var regexp = /^\p{Po}/;
  assertEquals(null, regexp.exec("** Failers")); //test 4586
}

function testRegexpPCRE_4527() {
  var regexp = /^\p{Po}/;
  assertEquals(null, regexp.exec("X")); //test 4587
}

function testRegexpPCRE_4528() {
  var regexp = /^\p{Po}/;
  assertEquals(null, regexp.exec("x{203f}")); //test 4588
}

function testRegexpPCRE_4529() {
  var regexp = /^\p{Ps}/;
  assertEquals(null, regexp.exec("(")); //test 4589
}

function testRegexpPCRE_4530() {
  var regexp = /^\p{Ps}/;
  assertEquals(null, regexp.exec("[")); //test 4590
}

function testRegexpPCRE_4531() {
  var regexp = /^\p{Ps}/;
  assertEquals(null, regexp.exec("{")); //test 4591
}

function testRegexpPCRE_4532() {
  var regexp = /^\p{Ps}/;
  assertEquals(null, regexp.exec("x{f3c}")); //test 4592
}

function testRegexpPCRE_4533() {
  var regexp = /^\p{Ps}/;
  assertEquals(null, regexp.exec("** Failers")); //test 4593
}

function testRegexpPCRE_4534() {
  var regexp = /^\p{Ps}/;
  assertEquals(null, regexp.exec("X")); //test 4594
}

function testRegexpPCRE_4535() {
  var regexp = /^\p{Ps}/;
  assertEquals(null, regexp.exec(")")); //test 4595
}

function testRegexpPCRE_4536() {
  var regexp = /^\p{Ps}/;
  assertEquals(null, regexp.exec("]")); //test 4596
}

function testRegexpPCRE_4537() {
  var regexp = /^\p{Ps}/;
  assertEquals(null, regexp.exec("}")); //test 4597
}

function testRegexpPCRE_4538() {
  var regexp = /^\p{Ps}/;
  assertEquals(null, regexp.exec("x{f3b}")); //test 4598
}

function testRegexpPCRE_4539() {
  var regexp = /^\p{Ps}/;
  assertEquals(null, regexp.exec("$x{a2}x{a3}x{a4}x{a5}x{a6}")); //test 4599
}

function testRegexpPCRE_4540() {
  var regexp = /^\p{Ps}/;
  assertEquals(null, regexp.exec("x{9f2}")); //test 4600
}

function testRegexpPCRE_4541() {
  var regexp = /^\p{Ps}/;
  assertEquals(null, regexp.exec("** Failers")); //test 4601
}

function testRegexpPCRE_4542() {
  var regexp = /^\p{Ps}/;
  assertEquals(null, regexp.exec("X")); //test 4602
}

function testRegexpPCRE_4543() {
  var regexp = /^\p{Ps}/;
  assertEquals(null, regexp.exec("x{2c2}")); //test 4603
}

function testRegexpPCRE_4544() {
  var regexp = /^\p{Sk}/;
  assertEquals(null, regexp.exec("x{2c2}")); //test 4604
}

function testRegexpPCRE_4545() {
  var regexp = /^\p{Sk}/;
  assertEquals(null, regexp.exec("** Failers")); //test 4605
}

function testRegexpPCRE_4546() {
  var regexp = /^\p{Sk}/;
  assertEquals(null, regexp.exec("X")); //test 4606
}

function testRegexpPCRE_4547() {
  var regexp = /^\p{Sk}/;
  assertEquals(null, regexp.exec("x{9f2}")); //test 4607
}

function testRegexpPCRE_4548() {
  var regexp = /^\p{Sk}/;
  assertEquals(null, regexp.exec("+<|~x{ac}x{2044}")); //test 4608
}

function testRegexpPCRE_4549() {
  var regexp = /^\p{Sk}/;
  assertEquals(null, regexp.exec("** Failers")); //test 4609
}

function testRegexpPCRE_4550() {
  var regexp = /^\p{Sk}/;
  assertEquals(null, regexp.exec("X")); //test 4610
}

function testRegexpPCRE_4551() {
  var regexp = /^\p{Sk}/;
  assertEquals(null, regexp.exec("x{9f2}")); //test 4611
}

function testRegexpPCRE_4552() {
  var regexp = /^\p{So}/;
  assertEquals(null, regexp.exec("x{a6}")); //test 4612
}

function testRegexpPCRE_4553() {
  var regexp = /^\p{So}/;
  assertEquals(null, regexp.exec("x{482} ")); //test 4613
}

function testRegexpPCRE_4554() {
  var regexp = /^\p{So}/;
  assertEquals(null, regexp.exec("** Failers")); //test 4614
}

function testRegexpPCRE_4555() {
  var regexp = /^\p{So}/;
  assertEquals(null, regexp.exec("X")); //test 4615
}

function testRegexpPCRE_4556() {
  var regexp = /^\p{So}/;
  assertEquals(null, regexp.exec("x{9f2}")); //test 4616
}

function testRegexpPCRE_4557() {
  var regexp = /^\p{Zl}/;
  assertEquals(null, regexp.exec("x{2028}")); //test 4617
}

function testRegexpPCRE_4558() {
  var regexp = /^\p{Zl}/;
  assertEquals(null, regexp.exec("** Failers")); //test 4618
}

function testRegexpPCRE_4559() {
  var regexp = /^\p{Zl}/;
  assertEquals(null, regexp.exec("X")); //test 4619
}

function testRegexpPCRE_4560() {
  var regexp = /^\p{Zl}/;
  assertEquals(null, regexp.exec("x{2029}")); //test 4620
}

function testRegexpPCRE_4561() {
  var regexp = /^\p{Zp}/;
  assertEquals(null, regexp.exec("x{2029}")); //test 4621
}

function testRegexpPCRE_4562() {
  var regexp = /^\p{Zp}/;
  assertEquals(null, regexp.exec("** Failers")); //test 4622
}

function testRegexpPCRE_4563() {
  var regexp = /^\p{Zp}/;
  assertEquals(null, regexp.exec("X")); //test 4623
}

function testRegexpPCRE_4564() {
  var regexp = /^\p{Zp}/;
  assertEquals(null, regexp.exec("x{2028}")); //test 4624
}

function testRegexpPCRE_4565() {
  var regexp = /^\p{Zs}/;
  assertEquals(null, regexp.exec("\\ \\")); //test 4625
}

function testRegexpPCRE_4566() {
  var regexp = /^\p{Zs}/;
  assertEquals(null, regexp.exec("x{a0}")); //test 4626
}

function testRegexpPCRE_4567() {
  var regexp = /^\p{Zs}/;
  assertEquals(null, regexp.exec("x{1680}")); //test 4627
}

function testRegexpPCRE_4568() {
  var regexp = /^\p{Zs}/;
  assertEquals(null, regexp.exec("x{180e}")); //test 4628
}

function testRegexpPCRE_4569() {
  var regexp = /^\p{Zs}/;
  assertEquals(null, regexp.exec("x{2000}")); //test 4629
}

function testRegexpPCRE_4570() {
  var regexp = /^\p{Zs}/;
  assertEquals(null, regexp.exec("x{2001}     ")); //test 4630
}

function testRegexpPCRE_4571() {
  var regexp = /^\p{Zs}/;
  assertEquals(null, regexp.exec("** Failers")); //test 4631
}

function testRegexpPCRE_4572() {
  var regexp = /^\p{Zs}/;
  assertEquals(null, regexp.exec("x{2028}")); //test 4632
}

function testRegexpPCRE_4573() {
  var regexp = /^\p{Zs}/;
  assertEquals(null, regexp.exec("x{200d} ")); //test 4633
}

function testRegexpPCRE_4574() {
  var regexp = /^\p{Zs}/;
  assertEquals(null, regexp.exec("  x{660}x{661}x{662}ABC")); //test 4634
}

function testRegexpPCRE_4575() {
  var regexp = /^\p{Zs}/;
  assertEquals(null, regexp.exec("  x{660}x{661}x{662}ABC")); //test 4635
}

function testRegexpPCRE_4576() {
  var regexp = /\p{Nd}{2,}(..)/;
  assertEquals(null, regexp.exec("  x{660}x{661}x{662}ABC")); //test 4636
}

function testRegexpPCRE_4577() {
  var regexp = /\p{Nd}{2,}?(..)/;
  assertEquals(null, regexp.exec("  x{660}x{661}x{662}ABC")); //test 4637
}

function testRegexpPCRE_4578() {
  var regexp = /\p{Nd}*(..)/;
  assertEquals(null, regexp.exec("  x{660}x{661}x{662}ABC")); //test 4638
}

function testRegexpPCRE_4579() {
  var regexp = /\p{Nd}*?(..)/;
  assertEquals(null, regexp.exec("  x{660}x{661}x{662}ABC")); //test 4639
}

function testRegexpPCRE_4580() {
  var regexp = /\p{Nd}{2}(..)/;
  assertEquals(null, regexp.exec("  x{660}x{661}x{662}ABC")); //test 4640
}

function testRegexpPCRE_4581() {
  var regexp = /\p{Nd}{2,3}(..)/;
  assertEquals(null, regexp.exec("  x{660}x{661}x{662}ABC")); //test 4641
}

function testRegexpPCRE_4582() {
  var regexp = /\p{Nd}{2,3}?(..)/;
  assertEquals(null, regexp.exec("  x{660}x{661}x{662}ABC")); //test 4642
}

function testRegexpPCRE_4583() {
  var regexp = /\p{Nd}?(..)/;
  assertEquals(null, regexp.exec("  x{660}x{661}x{662}ABC")); //test 4643
}

function testRegexpPCRE_4584() {
  var regexp = /\p{Nd}??(..)/;
  assertEquals(null, regexp.exec("  x{660}x{661}x{662}ABC")); //test 4644
}

function testRegexpPCRE_4585() {
  var regexp = /\p{Nd}??(..)/;
  assertEquals(null, regexp.exec("  x{660}x{661}x{662}ABC")); //test 4645
}

function testRegexpPCRE_4586() {
  var regexp = /\p{Nd}??(..)/;
  assertEquals(null, regexp.exec("  x{660}x{661}x{662}ABC")); //test 4646
}

function testRegexpPCRE_4587() {
  var regexp = /\p{Nd}??(..)/;
  assertEquals(null, regexp.exec("  ** Failers")); //test 4647
}

function testRegexpPCRE_4588() {
  var regexp = /\p{Nd}??(..)/;
  assertEquals(null, regexp.exec("  x{660}x{661}x{662}ABC")); //test 4648
}

function testRegexpPCRE_4589() {
  var regexp = /\p{Lu}/i;
  assertEquals(null, regexp.exec("A")); //test 4649
}

function testRegexpPCRE_4590() {
  var regexp = /\p{Lu}/i;
  assertEquals(null, regexp.exec("ax{10a0}B ")); //test 4650
}

function testRegexpPCRE_4591() {
  var regexp = /\p{Lu}/i;
  assertEquals(null, regexp.exec("** Failers ")); //test 4651
}

function testRegexpPCRE_4592() {
  var regexp = /\p{Lu}/i;
  assertEquals(null, regexp.exec("a")); //test 4652
}

function testRegexpPCRE_4593() {
  var regexp = /\p{Lu}/i;
  assertEquals(null, regexp.exec("x{1d00}  ")); //test 4653
}

function testRegexpPCRE_4594() {
  var regexp = /\p{^Lu}/i;
  assertEquals(null, regexp.exec("1234")); //test 4654
}

function testRegexpPCRE_4595() {
  var regexp = /\p{^Lu}/i;
  assertEquals(null, regexp.exec("** Failers")); //test 4655
}

function testRegexpPCRE_4596() {
  var regexp = /\p{^Lu}/i;
  assertEquals(null, regexp.exec("ABC ")); //test 4656
}

function testRegexpPCRE_4597() {
  var regexp = /\P{Lu}/i;
  assertEquals(null, regexp.exec("1234")); //test 4657
}

function testRegexpPCRE_4598() {
  var regexp = /\P{Lu}/i;
  assertEquals(null, regexp.exec("** Failers")); //test 4658
}

function testRegexpPCRE_4599() {
  var regexp = /\P{Lu}/i;
  assertEquals(null, regexp.exec("ABC ")); //test 4659
}

function testRegexpPCRE_4600() {
  var regexp = /\P{Lu}/i;
  assertEquals(null, regexp.exec("A2XYZ")); //test 4660
}

function testRegexpPCRE_4601() {
  var regexp = /\P{Lu}/i;
  assertEquals(null, regexp.exec("123A5XYZPQR")); //test 4661
}

function testRegexpPCRE_4602() {
  var regexp = /\P{Lu}/i;
  assertEquals(null, regexp.exec("ABAx{660}XYZpqr")); //test 4662
}

function testRegexpPCRE_4603() {
  var regexp = /\P{Lu}/i;
  assertEquals(null, regexp.exec("** Failers")); //test 4663
}

function testRegexpPCRE_4604() {
  var regexp = /\P{Lu}/i;
  assertEquals(null, regexp.exec("AXYZ")); //test 4664
}

function testRegexpPCRE_4605() {
  var regexp = /\P{Lu}/i;
  assertEquals(null, regexp.exec("XYZ     ")); //test 4665
}

function testRegexpPCRE_4606() {
  var regexp = /\P{Lu}/i;
  assertEquals(null, regexp.exec("1XYZ")); //test 4666
}

function testRegexpPCRE_4607() {
  var regexp = /\P{Lu}/i;
  assertEquals(null, regexp.exec("AB=XYZ.. ")); //test 4667
}

function testRegexpPCRE_4608() {
  var regexp = /\P{Lu}/i;
  assertEquals(null, regexp.exec("XYZ ")); //test 4668
}

function testRegexpPCRE_4609() {
  var regexp = /\P{Lu}/i;
  assertEquals(null, regexp.exec("** Failers")); //test 4669
}

function testRegexpPCRE_4610() {
  var regexp = /\P{Lu}/i;
  assertEquals(null, regexp.exec("WXYZ ")); //test 4670
}

function testRegexpPCRE_4611() {
  var regexp = /[\p{Nd}]/;
  assertEquals(null, regexp.exec("1234")); //test 4671
}

function testRegexpPCRE_4612() {
  var regexp = /[\p{Nd}]/;
  assertEquals(null, regexp.exec("1234")); //test 4672
}

function testRegexpPCRE_4613() {
  var regexp = /[\p{Nd}]/;
  assertEquals(null, regexp.exec("12-34")); //test 4673
}

function testRegexpPCRE_4614() {
  var regexp = /[\p{Nd}]/;
  assertEquals("{", regexp.exec("12+x{661}-34  ").toString()); //test 4674
}

function testRegexpPCRE_4615() {
  var regexp = /[\p{Nd}]/;
  assertEquals(null, regexp.exec("** Failers")); //test 4675
}

function testRegexpPCRE_4616() {
  var regexp = /[\p{Nd}]/;
  assertEquals("d", regexp.exec("abcd  ").toString()); //test 4676
}

function testRegexpPCRE_4617() {
  var regexp = /[\P{Nd}]+/;
  assertEquals("d", regexp.exec("abcd").toString()); //test 4677
}

function testRegexpPCRE_4618() {
  var regexp = /[\P{Nd}]+/;
  assertEquals(null, regexp.exec("** Failers")); //test 4678
}

function testRegexpPCRE_4619() {
  var regexp = /[\P{Nd}]+/;
  assertEquals(null, regexp.exec("1234")); //test 4679
}

function testRegexpPCRE_4620() {
  var regexp = /\D+/;
  assertEquals(null, regexp.exec("11111111111111111111111111111111111111111111111111111111111111111111111")); //test 4680
}

function testRegexpPCRE_4621() {
  var regexp = /\D+/;
  assertEquals("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", regexp.exec("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa").toString()); //test 4681
}

function testRegexpPCRE_4622() {
  var regexp = /\D+/;
  assertEquals(" ", regexp.exec(" ").toString()); //test 4682
}

function testRegexpPCRE_4623() {
  var regexp = /\D+/;
  assertEquals(null, regexp.exec("11111111111111111111111111111111111111111111111111111111111111111111111")); //test 4683
}

function testRegexpPCRE_4624() {
  var regexp = /\D+/;
  assertEquals("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", regexp.exec("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa").toString()); //test 4684
}

function testRegexpPCRE_4625() {
  var regexp = /[\D]+/;
  assertEquals(null, regexp.exec("11111111111111111111111111111111111111111111111111111111111111111111111")); //test 4685
}

function testRegexpPCRE_4626() {
  var regexp = /[\D]+/;
  assertEquals("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", regexp.exec("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa").toString()); //test 4686
}

function testRegexpPCRE_4627() {
  var regexp = /[\P{Nd}]+/;
  assertEquals(null, regexp.exec("11111111111111111111111111111111111111111111111111111111111111111111111")); //test 4687
}

function testRegexpPCRE_4628() {
  var regexp = /[\P{Nd}]+/;
  assertEquals(null, regexp.exec("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")); //test 4688
}

function testRegexpPCRE_4629() {
  var regexp = /[\D\P{Nd}]+/;
  assertEquals(null, regexp.exec("11111111111111111111111111111111111111111111111111111111111111111111111")); //test 4689
}

function testRegexpPCRE_4630() {
  var regexp = /[\D\P{Nd}]+/;
  assertEquals("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", regexp.exec("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa").toString()); //test 4690
}

function testRegexpPCRE_4631() {
  var regexp = /\pL/;
  assertEquals(null, regexp.exec("a")); //test 4691
}

function testRegexpPCRE_4632() {
  var regexp = /\pL/;
  assertEquals(null, regexp.exec("A ")); //test 4692
}

function testRegexpPCRE_4633() {
  var regexp = /\pL/i;
  assertEquals(null, regexp.exec("a")); //test 4693
}

function testRegexpPCRE_4634() {
  var regexp = /\pL/i;
  assertEquals(null, regexp.exec("A ")); //test 4694
}

function testRegexpPCRE_4635() {
  var regexp = /\p{Lu}/;
  assertEquals(null, regexp.exec("A")); //test 4695
}

function testRegexpPCRE_4636() {
  var regexp = /\p{Lu}/;
  assertEquals(null, regexp.exec("aZ")); //test 4696
}

function testRegexpPCRE_4637() {
  var regexp = /\p{Lu}/;
  assertEquals(null, regexp.exec("** Failers")); //test 4697
}

function testRegexpPCRE_4638() {
  var regexp = /\p{Lu}/;
  assertEquals(null, regexp.exec("abc   ")); //test 4698
}

function testRegexpPCRE_4639() {
  var regexp = /\p{Lu}/i;
  assertEquals(null, regexp.exec("A")); //test 4699
}

function testRegexpPCRE_4640() {
  var regexp = /\p{Lu}/i;
  assertEquals(null, regexp.exec("aZ")); //test 4700
}

function testRegexpPCRE_4641() {
  var regexp = /\p{Lu}/i;
  assertEquals(null, regexp.exec("** Failers")); //test 4701
}

function testRegexpPCRE_4642() {
  var regexp = /\p{Lu}/i;
  assertEquals(null, regexp.exec("abc   ")); //test 4702
}

function testRegexpPCRE_4643() {
  var regexp = /\p{Ll}/;
  assertEquals(null, regexp.exec("a")); //test 4703
}

function testRegexpPCRE_4644() {
  var regexp = /\p{Ll}/;
  assertEquals(null, regexp.exec("Az")); //test 4704
}

function testRegexpPCRE_4645() {
  var regexp = /\p{Ll}/;
  assertEquals(null, regexp.exec("** Failers")); //test 4705
}

function testRegexpPCRE_4646() {
  var regexp = /\p{Ll}/;
  assertEquals(null, regexp.exec("ABC   ")); //test 4706
}

function testRegexpPCRE_4647() {
  var regexp = /\p{Ll}/i;
  assertEquals(null, regexp.exec("a")); //test 4707
}

function testRegexpPCRE_4648() {
  var regexp = /\p{Ll}/i;
  assertEquals(null, regexp.exec("Az")); //test 4708
}

function testRegexpPCRE_4649() {
  var regexp = /\p{Ll}/i;
  assertEquals(null, regexp.exec("** Failers")); //test 4709
}

function testRegexpPCRE_4650() {
  var regexp = /\p{Ll}/i;
  assertEquals(null, regexp.exec("ABC   ")); //test 4710
}

function testRegexpPCRE_4651() {
  var regexp = /\p{Ll}/i;
  assertEquals(null, regexp.exec("x{c0}")); //test 4711
}

function testRegexpPCRE_4652() {
  var regexp = /\p{Ll}/i;
  assertEquals(null, regexp.exec("x{e0} ")); //test 4712
}

function testRegexpPCRE_4653() {
  var regexp = /\p{Ll}/i;
  assertEquals(null, regexp.exec("x{c0}")); //test 4713
}

function testRegexpPCRE_4654() {
  var regexp = /\p{Ll}/i;
  assertEquals(null, regexp.exec("x{e0} ")); //test 4714
}

function testRegexpPCRE_4655() {
  var regexp = /\p{Ll}/i;
  assertEquals(null, regexp.exec("Ax{391}x{10427}x{ff3a}x{1fb0}")); //test 4715
}

function testRegexpPCRE_4656() {
  var regexp = /\p{Ll}/i;
  assertEquals(null, regexp.exec("** Failers")); //test 4716
}

function testRegexpPCRE_4657() {
  var regexp = /\p{Ll}/i;
  assertEquals(null, regexp.exec("ax{391}x{10427}x{ff3a}x{1fb0}   ")); //test 4717
}

function testRegexpPCRE_4658() {
  var regexp = /\p{Ll}/i;
  assertEquals(null, regexp.exec("Ax{3b1}x{10427}x{ff3a}x{1fb0}")); //test 4718
}

function testRegexpPCRE_4659() {
  var regexp = /\p{Ll}/i;
  assertEquals(null, regexp.exec("Ax{391}x{1044F}x{ff3a}x{1fb0}")); //test 4719
}

function testRegexpPCRE_4660() {
  var regexp = /\p{Ll}/i;
  assertEquals(null, regexp.exec("Ax{391}x{10427}x{ff5a}x{1fb0}")); //test 4720
}

function testRegexpPCRE_4661() {
  var regexp = /\p{Ll}/i;
  assertEquals(null, regexp.exec("Ax{391}x{10427}x{ff3a}x{1fb8}")); //test 4721
}

function testRegexpPCRE_4662() {
  var regexp = /\p{Ll}/i;
  assertEquals(null, regexp.exec("Ax{391}x{10427}x{ff3a}x{1fb0}")); //test 4722
}

function testRegexpPCRE_4663() {
  var regexp = /\p{Ll}/i;
  assertEquals(null, regexp.exec("ax{391}x{10427}x{ff3a}x{1fb0}   ")); //test 4723
}

function testRegexpPCRE_4664() {
  var regexp = /\p{Ll}/i;
  assertEquals(null, regexp.exec("Ax{3b1}x{10427}x{ff3a}x{1fb0}")); //test 4724
}

function testRegexpPCRE_4665() {
  var regexp = /\p{Ll}/i;
  assertEquals(null, regexp.exec("Ax{391}x{1044F}x{ff3a}x{1fb0}")); //test 4725
}

function testRegexpPCRE_4666() {
  var regexp = /\p{Ll}/i;
  assertEquals(null, regexp.exec("Ax{391}x{10427}x{ff5a}x{1fb0}")); //test 4726
}

function testRegexpPCRE_4667() {
  var regexp = /\p{Ll}/i;
  assertEquals(null, regexp.exec("Ax{391}x{10427}x{ff3a}x{1fb8}")); //test 4727
}

function testRegexpPCRE_4668() {
  var regexp = /\p{Ll}/i;
  assertEquals(null, regexp.exec("x{391}x{3b1}x{3b1}x{3b1}x{391}")); //test 4728
}

function testRegexpPCRE_4669() {
  var regexp = /\p{Ll}/i;
  assertEquals(null, regexp.exec("x{391}x{3b1}x{3b1}x{3b1}x{391}X")); //test 4729
}

function testRegexpPCRE_4670() {
  var regexp = /\p{Ll}/i;
  assertEquals(null, regexp.exec("x{391}x{3b1}x{3b1}x{3b1}x{391}X")); //test 4730
}

function testRegexpPCRE_4671() {
  var regexp = /\p{Ll}/i;
  assertEquals(null, regexp.exec("x{391}")); //test 4731
}

function testRegexpPCRE_4672() {
  var regexp = /\p{Ll}/i;
  assertEquals(null, regexp.exec("x{ff3a}")); //test 4732
}

function testRegexpPCRE_4673() {
  var regexp = /\p{Ll}/i;
  assertEquals(null, regexp.exec("x{3b1}")); //test 4733
}

function testRegexpPCRE_4674() {
  var regexp = /\p{Ll}/i;
  assertEquals(null, regexp.exec("x{ff5a}   ")); //test 4734
}

function testRegexpPCRE_4675() {
  var regexp = /\p{Ll}/i;
  assertEquals(null, regexp.exec("x{c0}")); //test 4735
}

function testRegexpPCRE_4676() {
  var regexp = /\p{Ll}/i;
  assertEquals(null, regexp.exec("x{e0} ")); //test 4736
}

function testRegexpPCRE_4677() {
  var regexp = /\p{Ll}/i;
  assertEquals(null, regexp.exec("x{104}")); //test 4737
}

function testRegexpPCRE_4678() {
  var regexp = /\p{Ll}/i;
  assertEquals(null, regexp.exec("x{105}")); //test 4738
}

function testRegexpPCRE_4679() {
  var regexp = /\p{Ll}/i;
  assertEquals(null, regexp.exec("x{109}  ")); //test 4739
}

function testRegexpPCRE_4680() {
  var regexp = /\p{Ll}/i;
  assertEquals(null, regexp.exec("** Failers")); //test 4740
}

function testRegexpPCRE_4681() {
  var regexp = /\p{Ll}/i;
  assertEquals(null, regexp.exec("x{100}")); //test 4741
}

function testRegexpPCRE_4682() {
  var regexp = /\p{Ll}/i;
  assertEquals(null, regexp.exec("x{10a} ")); //test 4742
}

function testRegexpPCRE_4683() {
  var regexp = /\p{Ll}/i;
  assertEquals(null, regexp.exec("Z")); //test 4743
}

function testRegexpPCRE_4684() {
  var regexp = /\p{Ll}/i;
  assertEquals(null, regexp.exec("z")); //test 4744
}

function testRegexpPCRE_4685() {
  var regexp = /\p{Ll}/i;
  assertEquals(null, regexp.exec("x{39c}")); //test 4745
}

function testRegexpPCRE_4686() {
  var regexp = /\p{Ll}/i;
  assertEquals(null, regexp.exec("x{178}")); //test 4746
}

function testRegexpPCRE_4687() {
  var regexp = /\p{Ll}/i;
  assertEquals(null, regexp.exec("|")); //test 4747
}

function testRegexpPCRE_4688() {
  var regexp = /\p{Ll}/i;
  assertEquals(null, regexp.exec("x{80}")); //test 4748
}

function testRegexpPCRE_4689() {
  var regexp = /\p{Ll}/i;
  assertEquals(null, regexp.exec("x{ff}")); //test 4749
}

function testRegexpPCRE_4690() {
  var regexp = /\p{Ll}/i;
  assertEquals(null, regexp.exec("x{100}")); //test 4750
}

function testRegexpPCRE_4691() {
  var regexp = /\p{Ll}/i;
  assertEquals(null, regexp.exec("x{101} ")); //test 4751
}

function testRegexpPCRE_4692() {
  var regexp = /\p{Ll}/i;
  assertEquals(null, regexp.exec("** Failers")); //test 4752
}

function testRegexpPCRE_4693() {
  var regexp = /\p{Ll}/i;
  assertEquals(null, regexp.exec("x{102}")); //test 4753
}

function testRegexpPCRE_4694() {
  var regexp = /\p{Ll}/i;
  assertEquals(null, regexp.exec("Y")); //test 4754
}

function testRegexpPCRE_4695() {
  var regexp = /\p{Ll}/i;
  assertEquals(null, regexp.exec("y           ")); //test 4755
}

function testRegexpPCRE_4696() {
  var regexp = /^\X/;
  assertEquals(null, regexp.exec("A")); //test 4756
}

function testRegexpPCRE_4697() {
  var regexp = /^\X/;
  assertEquals(null, regexp.exec("Ax{300}BC ")); //test 4757
}

function testRegexpPCRE_4698() {
  var regexp = /^\X/;
  assertEquals(null, regexp.exec("Ax{300}x{301}x{302}BC ")); //test 4758
}

function testRegexpPCRE_4699() {
  var regexp = /^\X/;
  assertEquals(null, regexp.exec("*** Failers")); //test 4759
}

function testRegexpPCRE_4700() {
  var regexp = /^\X/;
  assertEquals(null, regexp.exec("x{300}  ")); //test 4760
}

function testRegexpPCRE_4701() {
  var regexp = /^[\X]/;
  assertEquals("X", regexp.exec("X123").toString()); //test 4761
}

function testRegexpPCRE_4702() {
  var regexp = /^[\X]/;
  assertEquals(null, regexp.exec("*** Failers")); //test 4762
}

function testRegexpPCRE_4703() {
  var regexp = /^[\X]/;
  assertEquals(null, regexp.exec("AXYZ")); //test 4763
}

function testRegexpPCRE_4704() {
  var regexp = /^(\X*)C/;
  assertEquals(null, regexp.exec("Ax{300}x{301}x{302}BCAx{300}x{301} ")); //test 4764
}

function testRegexpPCRE_4705() {
  var regexp = /^(\X*)C/;
  assertEquals(null, regexp.exec("Ax{300}x{301}x{302}BCAx{300}x{301}C ")); //test 4765
}

function testRegexpPCRE_4706() {
  var regexp = /^(\X*?)C/;
  assertEquals(null, regexp.exec("Ax{300}x{301}x{302}BCAx{300}x{301} ")); //test 4766
}

function testRegexpPCRE_4707() {
  var regexp = /^(\X*?)C/;
  assertEquals(null, regexp.exec("Ax{300}x{301}x{302}BCAx{300}x{301}C ")); //test 4767
}

function testRegexpPCRE_4708() {
  var regexp = /^(\X*)(.)/;
  assertEquals("A,,A", regexp.exec("Ax{300}x{301}x{302}BCAx{300}x{301} ").toString()); //test 4768
}

function testRegexpPCRE_4709() {
  var regexp = /^(\X*)(.)/;
  assertEquals("A,,A", regexp.exec("Ax{300}x{301}x{302}BCAx{300}x{301}C ").toString()); //test 4769
}

function testRegexpPCRE_4710() {
  var regexp = /^(\X*?)(.)/;
  assertEquals("A,,A", regexp.exec("Ax{300}x{301}x{302}BCAx{300}x{301} ").toString()); //test 4770
}

function testRegexpPCRE_4711() {
  var regexp = /^(\X*?)(.)/;
  assertEquals("A,,A", regexp.exec("Ax{300}x{301}x{302}BCAx{300}x{301}C ").toString()); //test 4771
}

function testRegexpPCRE_4712() {
  var regexp = /^\X(.)/;
  assertEquals(null, regexp.exec("*** Failers")); //test 4772
}

function testRegexpPCRE_4713() {
  var regexp = /^\X(.)/;
  assertEquals(null, regexp.exec("Ax{300}x{301}x{302}")); //test 4773
}

function testRegexpPCRE_4714() {
  var regexp = /^\X{2,3}(.)/;
  assertEquals(null, regexp.exec("Ax{300}x{301}Bx{300}X")); //test 4774
}

function testRegexpPCRE_4715() {
  var regexp = /^\X{2,3}(.)/;
  assertEquals(null, regexp.exec("Ax{300}x{301}Bx{300}Cx{300}x{301}")); //test 4775
}

function testRegexpPCRE_4716() {
  var regexp = /^\X{2,3}(.)/;
  assertEquals(null, regexp.exec("Ax{300}x{301}Bx{300}Cx{300}x{301}X")); //test 4776
}

function testRegexpPCRE_4717() {
  var regexp = /^\X{2,3}(.)/;
  assertEquals(null, regexp.exec("Ax{300}x{301}Bx{300}Cx{300}x{301}DAx{300}X")); //test 4777
}

function testRegexpPCRE_4718() {
  var regexp = /^\X{2,3}?(.)/;
  assertEquals(null, regexp.exec("Ax{300}x{301}Bx{300}X")); //test 4778
}

function testRegexpPCRE_4719() {
  var regexp = /^\X{2,3}?(.)/;
  assertEquals(null, regexp.exec("Ax{300}x{301}Bx{300}Cx{300}x{301}")); //test 4779
}

function testRegexpPCRE_4720() {
  var regexp = /^\X{2,3}?(.)/;
  assertEquals(null, regexp.exec("Ax{300}x{301}Bx{300}Cx{300}x{301}X")); //test 4780
}

function testRegexpPCRE_4721() {
  var regexp = /^\X{2,3}?(.)/;
  assertEquals(null, regexp.exec("Ax{300}x{301}Bx{300}Cx{300}x{301}DAx{300}X")); //test 4781
}

function testRegexpPCRE_4722() {
  var regexp = /^\pN{2,3}X/;
  assertEquals(null, regexp.exec("12X")); //test 4782
}

function testRegexpPCRE_4723() {
  var regexp = /^\pN{2,3}X/;
  assertEquals(null, regexp.exec("123X")); //test 4783
}

function testRegexpPCRE_4724() {
  var regexp = /^\pN{2,3}X/;
  assertEquals(null, regexp.exec("*** Failers")); //test 4784
}

function testRegexpPCRE_4725() {
  var regexp = /^\pN{2,3}X/;
  assertEquals(null, regexp.exec("X")); //test 4785
}

function testRegexpPCRE_4726() {
  var regexp = /^\pN{2,3}X/;
  assertEquals(null, regexp.exec("1X")); //test 4786
}

function testRegexpPCRE_4727() {
  var regexp = /^\pN{2,3}X/;
  assertEquals(null, regexp.exec("1234X     ")); //test 4787
}

function testRegexpPCRE_4728() {
  var regexp = /^\pN{2,3}X/;
  assertEquals(null, regexp.exec("x{100}   ")); //test 4788
}

function testRegexpPCRE_4729() {
  var regexp = /^\pN{2,3}X/;
  assertEquals(null, regexp.exec("x{101} ")); //test 4789
}

function testRegexpPCRE_4730() {
  var regexp = /^\pN{2,3}X/;
  assertEquals(null, regexp.exec("x{2e81}x{3007}x{2f804}x{31a0}")); //test 4790
}

function testRegexpPCRE_4731() {
  var regexp = /^\pN{2,3}X/;
  assertEquals(null, regexp.exec("** Failers")); //test 4791
}

function testRegexpPCRE_4732() {
  var regexp = /^\pN{2,3}X/;
  assertEquals(null, regexp.exec("x{2e7f}  ")); //test 4792
}

function testRegexpPCRE_4733() {
  var regexp = /^\pN{2,3}X/;
  assertEquals(null, regexp.exec("x{3105}")); //test 4793
}

function testRegexpPCRE_4734() {
  var regexp = /^\pN{2,3}X/;
  assertEquals(null, regexp.exec("** Failers")); //test 4794
}

function testRegexpPCRE_4735() {
  var regexp = /^\pN{2,3}X/;
  assertEquals(null, regexp.exec("x{30ff}  ")); //test 4795
}

function testRegexpPCRE_4736() {
  var regexp = /^[\p{Arabic}]/;
  assertEquals(null, regexp.exec("x{06e9}")); //test 4796
}

function testRegexpPCRE_4737() {
  var regexp = /^[\p{Arabic}]/;
  assertEquals(null, regexp.exec("x{060b}")); //test 4797
}

function testRegexpPCRE_4738() {
  var regexp = /^[\p{Arabic}]/;
  assertEquals(null, regexp.exec("** Failers")); //test 4798
}

function testRegexpPCRE_4739() {
  var regexp = /^[\p{Arabic}]/;
  assertEquals(null, regexp.exec("Xx{06e9}   ")); //test 4799
}

function testRegexpPCRE_4740() {
  var regexp = /^[\P{Yi}]/;
  assertEquals(null, regexp.exec("x{2f800}")); //test 4800
}

function testRegexpPCRE_4741() {
  var regexp = /^[\P{Yi}]/;
  assertEquals(null, regexp.exec("** Failers")); //test 4801
}

function testRegexpPCRE_4742() {
  var regexp = /^[\P{Yi}]/;
  assertEquals(null, regexp.exec("x{a014}")); //test 4802
}

function testRegexpPCRE_4743() {
  var regexp = /^[\P{Yi}]/;
  assertEquals(null, regexp.exec("x{a4c6}   ")); //test 4803
}

function testRegexpPCRE_4744() {
  var regexp = /^\p{Any}X/;
  assertEquals(null, regexp.exec("AXYZ")); //test 4804
}

function testRegexpPCRE_4745() {
  var regexp = /^\p{Any}X/;
  assertEquals(null, regexp.exec("x{1234}XYZ ")); //test 4805
}

function testRegexpPCRE_4746() {
  var regexp = /^\p{Any}X/;
  assertEquals(null, regexp.exec("** Failers")); //test 4806
}

function testRegexpPCRE_4747() {
  var regexp = /^\p{Any}X/;
  assertEquals(null, regexp.exec("X  ")); //test 4807
}

function testRegexpPCRE_4748() {
  var regexp = /^\P{Any}X/;
  assertEquals(null, regexp.exec("** Failers")); //test 4808
}

function testRegexpPCRE_4749() {
  var regexp = /^\P{Any}X/;
  assertEquals(null, regexp.exec("AX")); //test 4809
}

function testRegexpPCRE_4750() {
  var regexp = /^\p{Any}?X/;
  assertEquals(null, regexp.exec("XYZ")); //test 4810
}

function testRegexpPCRE_4751() {
  var regexp = /^\p{Any}?X/;
  assertEquals(null, regexp.exec("AXYZ")); //test 4811
}

function testRegexpPCRE_4752() {
  var regexp = /^\p{Any}?X/;
  assertEquals(null, regexp.exec("x{1234}XYZ ")); //test 4812
}

function testRegexpPCRE_4753() {
  var regexp = /^\p{Any}?X/;
  assertEquals(null, regexp.exec("** Failers")); //test 4813
}

function testRegexpPCRE_4754() {
  var regexp = /^\p{Any}?X/;
  assertEquals(null, regexp.exec("ABXYZ   ")); //test 4814
}

function testRegexpPCRE_4755() {
  var regexp = /^\P{Any}?X/;
  assertEquals(null, regexp.exec("XYZ")); //test 4815
}

function testRegexpPCRE_4756() {
  var regexp = /^\P{Any}?X/;
  assertEquals(null, regexp.exec("** Failers")); //test 4816
}

function testRegexpPCRE_4757() {
  var regexp = /^\P{Any}?X/;
  assertEquals(null, regexp.exec("AXYZ")); //test 4817
}

function testRegexpPCRE_4758() {
  var regexp = /^\P{Any}?X/;
  assertEquals(null, regexp.exec("x{1234}XYZ ")); //test 4818
}

function testRegexpPCRE_4759() {
  var regexp = /^\P{Any}?X/;
  assertEquals(null, regexp.exec("ABXYZ   ")); //test 4819
}

function testRegexpPCRE_4760() {
  var regexp = /^\P{Any}?X/;
  assertEquals(null, regexp.exec("AXYZ")); //test 4820
}

function testRegexpPCRE_4761() {
  var regexp = /^\P{Any}?X/;
  assertEquals(null, regexp.exec("x{1234}XYZ")); //test 4821
}

function testRegexpPCRE_4762() {
  var regexp = /^\P{Any}?X/;
  assertEquals(null, regexp.exec("Ax{1234}XYZ")); //test 4822
}

function testRegexpPCRE_4763() {
  var regexp = /^\P{Any}?X/;
  assertEquals(null, regexp.exec("** Failers")); //test 4823
}

function testRegexpPCRE_4764() {
  var regexp = /^\P{Any}?X/;
  assertEquals(null, regexp.exec("XYZ")); //test 4824
}

function testRegexpPCRE_4765() {
  var regexp = /^\P{Any}?X/;
  assertEquals(null, regexp.exec("** Failers")); //test 4825
}

function testRegexpPCRE_4766() {
  var regexp = /^\P{Any}?X/;
  assertEquals(null, regexp.exec("AXYZ")); //test 4826
}

function testRegexpPCRE_4767() {
  var regexp = /^\P{Any}?X/;
  assertEquals(null, regexp.exec("x{1234}XYZ")); //test 4827
}

function testRegexpPCRE_4768() {
  var regexp = /^\P{Any}?X/;
  assertEquals(null, regexp.exec("Ax{1234}XYZ")); //test 4828
}

function testRegexpPCRE_4769() {
  var regexp = /^\P{Any}?X/;
  assertEquals(null, regexp.exec("XYZ")); //test 4829
}

function testRegexpPCRE_4770() {
  var regexp = /^\p{Any}*X/;
  assertEquals(null, regexp.exec("XYZ")); //test 4830
}

function testRegexpPCRE_4771() {
  var regexp = /^\p{Any}*X/;
  assertEquals(null, regexp.exec("AXYZ")); //test 4831
}

function testRegexpPCRE_4772() {
  var regexp = /^\p{Any}*X/;
  assertEquals(null, regexp.exec("x{1234}XYZ")); //test 4832
}

function testRegexpPCRE_4773() {
  var regexp = /^\p{Any}*X/;
  assertEquals(null, regexp.exec("Ax{1234}XYZ")); //test 4833
}

function testRegexpPCRE_4774() {
  var regexp = /^\p{Any}*X/;
  assertEquals(null, regexp.exec("** Failers")); //test 4834
}

function testRegexpPCRE_4775() {
  var regexp = /^\P{Any}*X/;
  assertEquals(null, regexp.exec("XYZ")); //test 4835
}

function testRegexpPCRE_4776() {
  var regexp = /^\P{Any}*X/;
  assertEquals(null, regexp.exec("** Failers")); //test 4836
}

function testRegexpPCRE_4777() {
  var regexp = /^\P{Any}*X/;
  assertEquals(null, regexp.exec("AXYZ")); //test 4837
}

function testRegexpPCRE_4778() {
  var regexp = /^\P{Any}*X/;
  assertEquals(null, regexp.exec("x{1234}XYZ")); //test 4838
}

function testRegexpPCRE_4779() {
  var regexp = /^\P{Any}*X/;
  assertEquals(null, regexp.exec("Ax{1234}XYZ")); //test 4839
}

function testRegexpPCRE_4780() {
  var regexp = /^[\p{Any}]X/;
  assertEquals("AX", regexp.exec("AXYZ").toString()); //test 4840
}

function testRegexpPCRE_4781() {
  var regexp = /^[\p{Any}]X/;
  assertEquals(null, regexp.exec("x{1234}XYZ ")); //test 4841
}

function testRegexpPCRE_4782() {
  var regexp = /^[\p{Any}]X/;
  assertEquals(null, regexp.exec("** Failers")); //test 4842
}

function testRegexpPCRE_4783() {
  var regexp = /^[\p{Any}]X/;
  assertEquals(null, regexp.exec("X  ")); //test 4843
}

function testRegexpPCRE_4784() {
  var regexp = /^[\P{Any}]X/;
  assertEquals(null, regexp.exec("** Failers")); //test 4844
}

function testRegexpPCRE_4785() {
  var regexp = /^[\P{Any}]X/;
  assertEquals("AX", regexp.exec("AX").toString()); //test 4845
}

function testRegexpPCRE_4786() {
  var regexp = /^[\p{Any}]?X/;
  assertEquals("X", regexp.exec("XYZ").toString()); //test 4846
}

function testRegexpPCRE_4787() {
  var regexp = /^[\p{Any}]?X/;
  assertEquals("AX", regexp.exec("AXYZ").toString()); //test 4847
}

function testRegexpPCRE_4788() {
  var regexp = /^[\p{Any}]?X/;
  assertEquals(null, regexp.exec("x{1234}XYZ ")); //test 4848
}

function testRegexpPCRE_4789() {
  var regexp = /^[\p{Any}]?X/;
  assertEquals(null, regexp.exec("** Failers")); //test 4849
}

function testRegexpPCRE_4790() {
  var regexp = /^[\p{Any}]?X/;
  assertEquals(null, regexp.exec("ABXYZ   ")); //test 4850
}

function testRegexpPCRE_4791() {
  var regexp = /^[\P{Any}]?X/;
  assertEquals("X", regexp.exec("XYZ").toString()); //test 4851
}

function testRegexpPCRE_4792() {
  var regexp = /^[\P{Any}]?X/;
  assertEquals(null, regexp.exec("** Failers")); //test 4852
}

function testRegexpPCRE_4793() {
  var regexp = /^[\P{Any}]?X/;
  assertEquals("AX", regexp.exec("AXYZ").toString()); //test 4853
}

function testRegexpPCRE_4794() {
  var regexp = /^[\P{Any}]?X/;
  assertEquals(null, regexp.exec("x{1234}XYZ ")); //test 4854
}

function testRegexpPCRE_4795() {
  var regexp = /^[\P{Any}]?X/;
  assertEquals(null, regexp.exec("ABXYZ   ")); //test 4855
}

function testRegexpPCRE_4796() {
  var regexp = /^[\p{Any}]+X/;
  assertEquals("AX", regexp.exec("AXYZ").toString()); //test 4856
}

function testRegexpPCRE_4797() {
  var regexp = /^[\p{Any}]+X/;
  assertEquals(null, regexp.exec("x{1234}XYZ")); //test 4857
}

function testRegexpPCRE_4798() {
  var regexp = /^[\p{Any}]+X/;
  assertEquals(null, regexp.exec("Ax{1234}XYZ")); //test 4858
}

function testRegexpPCRE_4799() {
  var regexp = /^[\p{Any}]+X/;
  assertEquals(null, regexp.exec("** Failers")); //test 4859
}

function testRegexpPCRE_4800() {
  var regexp = /^[\p{Any}]+X/;
  assertEquals(null, regexp.exec("XYZ")); //test 4860
}

function testRegexpPCRE_4801() {
  var regexp = /^[\P{Any}]+X/;
  assertEquals(null, regexp.exec("** Failers")); //test 4861
}

function testRegexpPCRE_4802() {
  var regexp = /^[\P{Any}]+X/;
  assertEquals("AX", regexp.exec("AXYZ").toString()); //test 4862
}

function testRegexpPCRE_4803() {
  var regexp = /^[\P{Any}]+X/;
  assertEquals(null, regexp.exec("x{1234}XYZ")); //test 4863
}

function testRegexpPCRE_4804() {
  var regexp = /^[\P{Any}]+X/;
  assertEquals(null, regexp.exec("Ax{1234}XYZ")); //test 4864
}

function testRegexpPCRE_4805() {
  var regexp = /^[\P{Any}]+X/;
  assertEquals(null, regexp.exec("XYZ")); //test 4865
}

function testRegexpPCRE_4806() {
  var regexp = /^[\p{Any}]*X/;
  assertEquals("X", regexp.exec("XYZ").toString()); //test 4866
}

function testRegexpPCRE_4807() {
  var regexp = /^[\p{Any}]*X/;
  assertEquals("AX", regexp.exec("AXYZ").toString()); //test 4867
}

function testRegexpPCRE_4808() {
  var regexp = /^[\p{Any}]*X/;
  assertEquals(null, regexp.exec("x{1234}XYZ")); //test 4868
}

function testRegexpPCRE_4809() {
  var regexp = /^[\p{Any}]*X/;
  assertEquals(null, regexp.exec("Ax{1234}XYZ")); //test 4869
}

function testRegexpPCRE_4810() {
  var regexp = /^[\p{Any}]*X/;
  assertEquals(null, regexp.exec("** Failers")); //test 4870
}

function testRegexpPCRE_4811() {
  var regexp = /^[\P{Any}]*X/;
  assertEquals("X", regexp.exec("XYZ").toString()); //test 4871
}

function testRegexpPCRE_4812() {
  var regexp = /^[\P{Any}]*X/;
  assertEquals(null, regexp.exec("** Failers")); //test 4872
}

function testRegexpPCRE_4813() {
  var regexp = /^[\P{Any}]*X/;
  assertEquals("AX", regexp.exec("AXYZ").toString()); //test 4873
}

function testRegexpPCRE_4814() {
  var regexp = /^[\P{Any}]*X/;
  assertEquals(null, regexp.exec("x{1234}XYZ")); //test 4874
}

function testRegexpPCRE_4815() {
  var regexp = /^[\P{Any}]*X/;
  assertEquals(null, regexp.exec("Ax{1234}XYZ")); //test 4875
}

function testRegexpPCRE_4816() {
  var regexp = /^\p{Any}{3,5}?/;
  assertEquals(null, regexp.exec("abcdefgh")); //test 4876
}

function testRegexpPCRE_4817() {
  var regexp = /^\p{Any}{3,5}?/;
  assertEquals(null, regexp.exec("x{1234}\n\x0dx{3456}xyz ")); //test 4877
}

function testRegexpPCRE_4818() {
  var regexp = /^\p{Any}{3,5}/;
  assertEquals(null, regexp.exec("abcdefgh")); //test 4878
}

function testRegexpPCRE_4819() {
  var regexp = /^\p{Any}{3,5}/;
  assertEquals(null, regexp.exec("x{1234}\n\x0dx{3456}xyz ")); //test 4879
}

function testRegexpPCRE_4820() {
  var regexp = /^\P{Any}{3,5}?/;
  assertEquals(null, regexp.exec("** Failers")); //test 4880
}

function testRegexpPCRE_4821() {
  var regexp = /^\P{Any}{3,5}?/;
  assertEquals(null, regexp.exec("abcdefgh")); //test 4881
}

function testRegexpPCRE_4822() {
  var regexp = /^\P{Any}{3,5}?/;
  assertEquals(null, regexp.exec("x{1234}\n\x0dx{3456}xyz ")); //test 4882
}

function testRegexpPCRE_4823() {
  var regexp = /^\p{L&}X/;
  assertEquals(null, regexp.exec(" AXY")); //test 4883
}

function testRegexpPCRE_4824() {
  var regexp = /^\p{L&}X/;
  assertEquals(null, regexp.exec(" aXY")); //test 4884
}

function testRegexpPCRE_4825() {
  var regexp = /^\p{L&}X/;
  assertEquals(null, regexp.exec(" x{1c5}XY")); //test 4885
}

function testRegexpPCRE_4826() {
  var regexp = /^\p{L&}X/;
  assertEquals(null, regexp.exec(" ** Failers")); //test 4886
}

function testRegexpPCRE_4827() {
  var regexp = /^\p{L&}X/;
  assertEquals(null, regexp.exec(" x{1bb}XY")); //test 4887
}

function testRegexpPCRE_4828() {
  var regexp = /^\p{L&}X/;
  assertEquals(null, regexp.exec(" x{2b0}XY")); //test 4888
}

function testRegexpPCRE_4829() {
  var regexp = /^\p{L&}X/;
  assertEquals(null, regexp.exec(" !XY      ")); //test 4889
}

function testRegexpPCRE_4830() {
  var regexp = /^[\p{L&}]X/;
  assertEquals(null, regexp.exec(" AXY")); //test 4890
}

function testRegexpPCRE_4831() {
  var regexp = /^[\p{L&}]X/;
  assertEquals(null, regexp.exec(" aXY")); //test 4891
}

function testRegexpPCRE_4832() {
  var regexp = /^[\p{L&}]X/;
  assertEquals(null, regexp.exec(" x{1c5}XY")); //test 4892
}

function testRegexpPCRE_4833() {
  var regexp = /^[\p{L&}]X/;
  assertEquals(null, regexp.exec(" ** Failers")); //test 4893
}

function testRegexpPCRE_4834() {
  var regexp = /^[\p{L&}]X/;
  assertEquals(null, regexp.exec(" x{1bb}XY")); //test 4894
}

function testRegexpPCRE_4835() {
  var regexp = /^[\p{L&}]X/;
  assertEquals(null, regexp.exec(" x{2b0}XY")); //test 4895
}

function testRegexpPCRE_4836() {
  var regexp = /^[\p{L&}]X/;
  assertEquals(null, regexp.exec(" !XY      ")); //test 4896
}

function testRegexpPCRE_4837() {
  var regexp = /^[\p{L&}]X/;
  assertEquals(null, regexp.exec(" AXY")); //test 4897
}

function testRegexpPCRE_4838() {
  var regexp = /^[\p{L&}]X/;
  assertEquals(null, regexp.exec(" aXY")); //test 4898
}

function testRegexpPCRE_4839() {
  var regexp = /^[\p{L&}]X/;
  assertEquals(null, regexp.exec(" AbcdeXyz ")); //test 4899
}

function testRegexpPCRE_4840() {
  var regexp = /^[\p{L&}]X/;
  assertEquals(null, regexp.exec(" x{1c5}AbXY")); //test 4900
}

function testRegexpPCRE_4841() {
  var regexp = /^[\p{L&}]X/;
  assertEquals(null, regexp.exec(" abcDEXypqreXlmn ")); //test 4901
}

function testRegexpPCRE_4842() {
  var regexp = /^[\p{L&}]X/;
  assertEquals(null, regexp.exec(" ** Failers")); //test 4902
}

function testRegexpPCRE_4843() {
  var regexp = /^[\p{L&}]X/;
  assertEquals(null, regexp.exec(" x{1bb}XY")); //test 4903
}

function testRegexpPCRE_4844() {
  var regexp = /^[\p{L&}]X/;
  assertEquals(null, regexp.exec(" x{2b0}XY")); //test 4904
}

function testRegexpPCRE_4845() {
  var regexp = /^[\p{L&}]X/;
  assertEquals(null, regexp.exec(" !XY      ")); //test 4905
}

function testRegexpPCRE_4846() {
  var regexp = /^[\p{L&}]+X/;
  assertEquals(null, regexp.exec(" AXY")); //test 4906
}

function testRegexpPCRE_4847() {
  var regexp = /^[\p{L&}]+X/;
  assertEquals(null, regexp.exec(" aXY")); //test 4907
}

function testRegexpPCRE_4848() {
  var regexp = /^[\p{L&}]+X/;
  assertEquals(null, regexp.exec(" AbcdeXyz ")); //test 4908
}

function testRegexpPCRE_4849() {
  var regexp = /^[\p{L&}]+X/;
  assertEquals(null, regexp.exec(" x{1c5}AbXY")); //test 4909
}

function testRegexpPCRE_4850() {
  var regexp = /^[\p{L&}]+X/;
  assertEquals(null, regexp.exec(" abcDEXypqreXlmn ")); //test 4910
}

function testRegexpPCRE_4851() {
  var regexp = /^[\p{L&}]+X/;
  assertEquals(null, regexp.exec(" ** Failers")); //test 4911
}

function testRegexpPCRE_4852() {
  var regexp = /^[\p{L&}]+X/;
  assertEquals(null, regexp.exec(" x{1bb}XY")); //test 4912
}

function testRegexpPCRE_4853() {
  var regexp = /^[\p{L&}]+X/;
  assertEquals(null, regexp.exec(" x{2b0}XY")); //test 4913
}

function testRegexpPCRE_4854() {
  var regexp = /^[\p{L&}]+X/;
  assertEquals(null, regexp.exec(" !XY      ")); //test 4914
}

function testRegexpPCRE_4855() {
  var regexp = /^[\p{L&}]+X/;
  assertEquals(null, regexp.exec(" AXY")); //test 4915
}

function testRegexpPCRE_4856() {
  var regexp = /^[\p{L&}]+X/;
  assertEquals(null, regexp.exec(" aXY")); //test 4916
}

function testRegexpPCRE_4857() {
  var regexp = /^[\p{L&}]+X/;
  assertEquals(null, regexp.exec(" AbcdeXyz ")); //test 4917
}

function testRegexpPCRE_4858() {
  var regexp = /^[\p{L&}]+X/;
  assertEquals(null, regexp.exec(" x{1c5}AbXY")); //test 4918
}

function testRegexpPCRE_4859() {
  var regexp = /^[\p{L&}]+X/;
  assertEquals(null, regexp.exec(" abcDEXypqreXlmn ")); //test 4919
}

function testRegexpPCRE_4860() {
  var regexp = /^[\p{L&}]+X/;
  assertEquals(null, regexp.exec(" ** Failers")); //test 4920
}

function testRegexpPCRE_4861() {
  var regexp = /^[\p{L&}]+X/;
  assertEquals(null, regexp.exec(" x{1bb}XY")); //test 4921
}

function testRegexpPCRE_4862() {
  var regexp = /^[\p{L&}]+X/;
  assertEquals(null, regexp.exec(" x{2b0}XY")); //test 4922
}

function testRegexpPCRE_4863() {
  var regexp = /^[\p{L&}]+X/;
  assertEquals(null, regexp.exec(" !XY      ")); //test 4923
}

function testRegexpPCRE_4864() {
  var regexp = /^[\p{L&}]+?X/;
  assertEquals(null, regexp.exec(" AXY")); //test 4924
}

function testRegexpPCRE_4865() {
  var regexp = /^[\p{L&}]+?X/;
  assertEquals(null, regexp.exec(" aXY")); //test 4925
}

function testRegexpPCRE_4866() {
  var regexp = /^[\p{L&}]+?X/;
  assertEquals(null, regexp.exec(" AbcdeXyz ")); //test 4926
}

function testRegexpPCRE_4867() {
  var regexp = /^[\p{L&}]+?X/;
  assertEquals(null, regexp.exec(" x{1c5}AbXY")); //test 4927
}

function testRegexpPCRE_4868() {
  var regexp = /^[\p{L&}]+?X/;
  assertEquals(null, regexp.exec(" abcDEXypqreXlmn ")); //test 4928
}

function testRegexpPCRE_4869() {
  var regexp = /^[\p{L&}]+?X/;
  assertEquals(null, regexp.exec(" ** Failers")); //test 4929
}

function testRegexpPCRE_4870() {
  var regexp = /^[\p{L&}]+?X/;
  assertEquals(null, regexp.exec(" x{1bb}XY")); //test 4930
}

function testRegexpPCRE_4871() {
  var regexp = /^[\p{L&}]+?X/;
  assertEquals(null, regexp.exec(" x{2b0}XY")); //test 4931
}

function testRegexpPCRE_4872() {
  var regexp = /^[\p{L&}]+?X/;
  assertEquals(null, regexp.exec(" !XY      ")); //test 4932
}

function testRegexpPCRE_4873() {
  var regexp = /^\P{L&}X/;
  assertEquals(null, regexp.exec(" !XY")); //test 4933
}

function testRegexpPCRE_4874() {
  var regexp = /^\P{L&}X/;
  assertEquals(null, regexp.exec(" x{1bb}XY")); //test 4934
}

function testRegexpPCRE_4875() {
  var regexp = /^\P{L&}X/;
  assertEquals(null, regexp.exec(" x{2b0}XY")); //test 4935
}

function testRegexpPCRE_4876() {
  var regexp = /^\P{L&}X/;
  assertEquals(null, regexp.exec(" ** Failers")); //test 4936
}

function testRegexpPCRE_4877() {
  var regexp = /^\P{L&}X/;
  assertEquals(null, regexp.exec(" x{1c5}XY")); //test 4937
}

function testRegexpPCRE_4878() {
  var regexp = /^\P{L&}X/;
  assertEquals(null, regexp.exec(" AXY      ")); //test 4938
}

function testRegexpPCRE_4879() {
  var regexp = /^[\P{L&}]X/;
  assertEquals(null, regexp.exec(" !XY")); //test 4939
}

function testRegexpPCRE_4880() {
  var regexp = /^[\P{L&}]X/;
  assertEquals(null, regexp.exec(" x{1bb}XY")); //test 4940
}

function testRegexpPCRE_4881() {
  var regexp = /^[\P{L&}]X/;
  assertEquals(null, regexp.exec(" x{2b0}XY")); //test 4941
}

function testRegexpPCRE_4882() {
  var regexp = /^[\P{L&}]X/;
  assertEquals(null, regexp.exec(" ** Failers")); //test 4942
}

function testRegexpPCRE_4883() {
  var regexp = /^[\P{L&}]X/;
  assertEquals(null, regexp.exec(" x{1c5}XY")); //test 4943
}

function testRegexpPCRE_4884() {
  var regexp = /^[\P{L&}]X/;
  assertEquals(null, regexp.exec(" AXY      ")); //test 4944
}

function testRegexpPCRE_4885() {
  var regexp = /^[\P{L&}]X/;
  assertEquals(null, regexp.exec("x{c0}x{e0}x{116}x{117}")); //test 4945
}

function testRegexpPCRE_4886() {
  var regexp = /^[\P{L&}]X/;
  assertEquals(null, regexp.exec("x{c0}x{e0}x{116}x{117}")); //test 4946
}

function testRegexpPCRE_4887() {
  var regexp = /\p{L}{4}/;
  assertEquals(null, regexp.exec("123abcdefg")); //test 4947
}

function testRegexpPCRE_4888() {
  var regexp = /\p{L}{4}/;
  assertEquals(null, regexp.exec("123abc\xc4\xc5zz")); //test 4948
}

function testRegexpPCRE_4889() {
  var regexp = /\p{Carian}\p{Cham}\p{Kayah_Li}\p{Lepcha}\p{Lycian}\p{Lydian}\p{Ol_Chiki}\p{Rejang}\p{Saurashtra}\p{Sundanese}\p{Vai}/;
  assertEquals(null, regexp.exec("x{102A4}x{AA52}x{A91D}x{1C46}x{10283}x{1092E}x{1C6B}x{A93B}x{A8BF}x{1BA0}x{A50A}====")); //test 4949
}

function testRegexpPCRE_4890() {
  var regexp = /\p{Carian}\p{Cham}\p{Kayah_Li}\p{Lepcha}\p{Lycian}\p{Lydian}\p{Ol_Chiki}\p{Rejang}\p{Saurashtra}\p{Sundanese}\p{Vai}/;
  assertEquals(null, regexp.exec("x{a77d}x{1d79}")); //test 4950
}

function testRegexpPCRE_4891() {
  var regexp = /\p{Carian}\p{Cham}\p{Kayah_Li}\p{Lepcha}\p{Lycian}\p{Lydian}\p{Ol_Chiki}\p{Rejang}\p{Saurashtra}\p{Sundanese}\p{Vai}/;
  assertEquals(null, regexp.exec("x{1d79}x{a77d} ")); //test 4951
}

function testRegexpPCRE_4892() {
  var regexp = /\p{Carian}\p{Cham}\p{Kayah_Li}\p{Lepcha}\p{Lycian}\p{Lydian}\p{Ol_Chiki}\p{Rejang}\p{Saurashtra}\p{Sundanese}\p{Vai}/;
  assertEquals(null, regexp.exec("x{a77d}x{1d79}")); //test 4952
}

function testRegexpPCRE_4893() {
  var regexp = /\p{Carian}\p{Cham}\p{Kayah_Li}\p{Lepcha}\p{Lycian}\p{Lydian}\p{Ol_Chiki}\p{Rejang}\p{Saurashtra}\p{Sundanese}\p{Vai}/;
  assertEquals(null, regexp.exec("** Failers ")); //test 4953
}

function testRegexpPCRE_4894() {
  var regexp = /\p{Carian}\p{Cham}\p{Kayah_Li}\p{Lepcha}\p{Lycian}\p{Lydian}\p{Ol_Chiki}\p{Rejang}\p{Saurashtra}\p{Sundanese}\p{Vai}/;
  assertEquals(null, regexp.exec("x{1d79}x{a77d} ")); //test 4954
}

function testRegexpPCRE_4895() {
  assertThrows(SyntaxError, eval, "var re = //;"); //test 4955
}

