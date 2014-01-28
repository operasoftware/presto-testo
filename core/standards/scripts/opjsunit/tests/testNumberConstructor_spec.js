
function testConstructor_0() {
  var a =  Number("NaN");
  assertNaN(a);
}

function testConstructor_1() {
  var a =  Number("\n\f \tNaN");
  assertNaN(a);
}

function testConstructor_2() {
  var a =  Number("NaN\n\f \t");
  assertNaN(a);
}

function testConstructor_3() {
  var a =  Number("\n\f \tNaN\n\f \t");
  assertNaN(a);
}

function testConstructor_4() {
  var a =  Number("Infinity");
  assertEquals(Infinity, a);
}

function testConstructor_5() {
  var a =  Number("\n\f \tInfinity");
  assertEquals(Infinity, a);
}

function testConstructor_6() {
  var a =  Number("Infinity\n\f \t");
  assertEquals(Infinity, a);
}
testConstructor_6.metadata = {
  bug:"CARAKAN-383"
};

function testConstructor_7() {
  var a =  Number("\n\f \tInfinity\n\f \t");
  assertEquals(Infinity, a);
}
testConstructor_7.metadata = {
  bug:"CARAKAN-383"
};

function testConstructor_8() {
  var a =  Number("0");
  assertEquals(0, a);
}

function testConstructor_9() {
  var a =  Number("\n\f \t0");
  assertEquals(0, a);
}

function testConstructor_10() {
  var a =  Number("0\n\f \t");
  assertEquals(0, a);
}

function testConstructor_11() {
  var a =  Number("\n\f \t0\n\f \t");
  assertEquals(0, a);
}

function testConstructor_12() {
  var a =  Number("1");
  assertEquals(1, a);
}

function testConstructor_13() {
  var a =  Number("\n\f \t1");
  assertEquals(1, a);
}

function testConstructor_14() {
  var a =  Number("1\n\f \t");
  assertEquals(1, a);
}

function testConstructor_15() {
  var a =  Number("\n\f \t1\n\f \t");
  assertEquals(1, a);
}

function testConstructor_16() {
  var a =  Number("0.5");
  assertEquals(0.5, a);
}

function testConstructor_17() {
  var a =  Number("\n\f \t0.5");
  assertEquals(0.5, a);
}

function testConstructor_18() {
  var a =  Number("0.5\n\f \t");
  assertEquals(0.5, a);
}

function testConstructor_19() {
  var a =  Number("\n\f \t0.5\n\f \t");
  assertEquals(0.5, a);
}

function testConstructor_20() {
  var a =  Number("123");
  assertEquals(123, a);
}

function testConstructor_21() {
  var a =  Number("\n\f \t123");
  assertEquals(123, a);
}

function testConstructor_22() {
  var a =  Number("123\n\f \t");
  assertEquals(123, a);
}

function testConstructor_23() {
  var a =  Number("\n\f \t123\n\f \t");
  assertEquals(123, a);
}

function testConstructor_24() {
  var a =  Number("12.8");
  assertEquals(12.8, a);
}

function testConstructor_25() {
  var a =  Number("\n\f \t12.8");
  assertEquals(12.8, a);
}

function testConstructor_26() {
  var a =  Number("12.8\n\f \t");
  assertEquals(12.8, a);
}

function testConstructor_27() {
  var a =  Number("\n\f \t12.8\n\f \t");
  assertEquals(12.8, a);
}

function testConstructor_28() {
  var a =  Number("1.2e7");
  assertEquals(1.2e7, a);
}

function testConstructor_29() {
  var a =  Number("\n\f \t1.2e7");
  assertEquals(1.2e7, a);
}

function testConstructor_30() {
  var a =  Number("1.2e7\n\f \t");
  assertEquals(1.2e7, a);
}

function testConstructor_31() {
  var a =  Number("\n\f \t1.2e7\n\f \t");
  assertEquals(1.2e7, a);
}

function testConstructor_32() {
  var a =  Number("1e-7");
  assertEquals(1e-7, a);
}

function testConstructor_33() {
  var a =  Number("\n\f \t1e-7");
  assertEquals(1e-7, a);
}

function testConstructor_34() {
  var a =  Number("1e-7\n\f \t");
  assertEquals(1e-7, a);
}

function testConstructor_35() {
  var a =  Number("\n\f \t1e-7\n\f \t");
  assertEquals(1e-7, a);
}

function testConstructor_36() {
  var a =  Number("0.0000001e-1");
  assertEquals(0.0000001e-1, a);
}

function testConstructor_37() {
  var a =  Number("\n\f \t0.0000001e-1");
  assertEquals(0.0000001e-1, a);
}

function testConstructor_38() {
  var a =  Number("0.0000001e-1\n\f \t");
  assertEquals(0.0000001e-1, a);
}

function testConstructor_39() {
  var a =  Number("\n\f \t0.0000001e-1\n\f \t");
  assertEquals(0.0000001e-1, a);
}

function testConstructor_40() {
  var a =  Number("0.0000001e100");
  assertEquals(0.0000001e100, a);
}

function testConstructor_41() {
  var a =  Number("\n\f \t0.0000001e100");
  assertEquals(0.0000001e100, a);
}

function testConstructor_42() {
  var a =  Number("0.0000001e100\n\f \t");
  assertEquals(0.0000001e100, a);
}

function testConstructor_43() {
  var a =  Number("\n\f \t0.0000001e100\n\f \t");
  assertEquals(0.0000001e100, a);
}

function testConstructor_44() {
  var a =  Number(".0000001");
  assertEquals(.0000001, a);
}

function testConstructor_45() {
  var a =  Number("\n\f \t.0000001");
  assertEquals(.0000001, a);
}

function testConstructor_46() {
  var a =  Number(".0000001\n\f \t");
  assertEquals(.0000001, a);
}

function testConstructor_47() {
  var a =  Number("\n\f \t.0000001\n\f \t");
  assertEquals(.0000001, a);
}

function testConstructor_48() {
  var a =  Number(".000001e1");
  assertEquals(.000001e1, a);
}

function testConstructor_49() {
  var a =  Number("\n\f \t.000001e1");
  assertEquals(.000001e1, a);
}

function testConstructor_50() {
  var a =  Number(".000001e1\n\f \t");
  assertEquals(.000001e1, a);
}

function testConstructor_51() {
  var a =  Number("\n\f \t.000001e1\n\f \t");
  assertEquals(.000001e1, a);
}

function testConstructor_52() {
  var a =  Number("0xA");
  assertEquals(10, a);
}

function testConstructor_53() {
  var a =  Number("\n\f \t0xA");
  assertEquals(10, a);
}

function testConstructor_54() {
  var a =  Number("0xA\n\f \t");
  assertEquals(10, a);
}

function testConstructor_55() {
  var a =  Number("\n\f \t0xA\n\f \t");
  assertEquals(10, a);
}

function testConstructor_56() {
  var a =  Number("0xa");
  assertEquals(10, a);
}

function testConstructor_57() {
  var a =  Number("\n\f \t0xa");
  assertEquals(10, a);
}

function testConstructor_58() {
  var a =  Number("0xa\n\f \t");
  assertEquals(10, a);
}

function testConstructor_59() {
  var a =  Number("\n\f \t0xa\n\f \t");
  assertEquals(10, a);
}

function testConstructor_60() {
  var a =  Number("0Xa");
  assertEquals(10, a);
}

function testConstructor_61() {
  var a =  Number("\n\f \t0Xa");
  assertEquals(10, a);
}

function testConstructor_62() {
  var a =  Number("0Xa\n\f \t");
  assertEquals(10, a);
}

function testConstructor_63() {
  var a =  Number("\n\f \t0Xa\n\f \t");
  assertEquals(10, a);
}

function testConstructor_64() {
  var a =  Number("0XA");
  assertEquals(10, a);
}

function testConstructor_65() {
  var a =  Number("\n\f \t0XA");
  assertEquals(10, a);
}

function testConstructor_66() {
  var a =  Number("0XA\n\f \t");
  assertEquals(10, a);
}

function testConstructor_67() {
  var a =  Number("\n\f \t0XA\n\f \t");
  assertEquals(10, a);
}

function testConstructor_68() {
  var a =  Number("0X05");
  assertEquals(5, a);
}

function testConstructor_69() {
  var a =  Number("\n\f \t0X05");
  assertEquals(5, a);
}

function testConstructor_70() {
  var a =  Number("0X05\n\f \t");
  assertEquals(5, a);
}

function testConstructor_71() {
  var a =  Number("\n\f \t0X05\n\f \t");
  assertEquals(5, a);
}

function testConstructor_72() {
  var a =  Number("0X010");
  assertEquals(16, a);
}

function testConstructor_73() {
  var a =  Number("\n\f \t0X010");
  assertEquals(16, a);
}

function testConstructor_74() {
  var a =  Number("0X010\n\f \t");
  assertEquals(16, a);
}

function testConstructor_75() {
  var a =  Number("\n\f \t0X010\n\f \t");
  assertEquals(16, a);
}

function testConstructor_76() {
  var a =  Number("010");
  assertEquals(10, a);
}

function testConstructor_77() {
  var a =  Number("\n\f \t010");
  assertEquals(10, a);
}

function testConstructor_78() {
  var a =  Number("010\n\f \t");
  assertEquals(10, a);
}

function testConstructor_79() {
  var a =  Number("\n\f \t010\n\f \t");
  assertEquals(10, a);
}

function testConstructor_80() {
  var a =  Number("08");
  assertEquals(8, a);
}

function testConstructor_81() {
  var a =  Number("\n\f \t08");
  assertEquals(8, a);
}

function testConstructor_82() {
  var a =  Number("08\n\f \t");
  assertEquals(8, a);
}

function testConstructor_83() {
  var a =  Number("\n\f \t08\n\f \t");
  assertEquals(8, a);
}

function testConstructor_84() {
  var a =  Number("100junk");
  assertNaN(a);
}

function testConstructor_85() {
  var a =  Number("\n\f \t100junk");
  assertNaN(a);
}

function testConstructor_86() {
  var a =  Number("100junk\n\f \t");
  assertNaN(a);
}

function testConstructor_87() {
  var a =  Number("\n\f \t100junk\n\f \t");
  assertNaN(a);
}

function testConstructor_88() {
  var a =  Number("100ABC");
  assertNaN(a);
}

function testConstructor_89() {
  var a =  Number("\n\f \t100ABC");
  assertNaN(a);
}

function testConstructor_90() {
  var a =  Number("100ABC\n\f \t");
  assertNaN(a);
}

function testConstructor_91() {
  var a =  Number("\n\f \t100ABC\n\f \t");
  assertNaN(a);
}

function testConstructor_92() {
  var a =  Number("0x10junk");
  assertNaN(a);
}

function testConstructor_93() {
  var a =  Number("\n\f \t0x10junk");
  assertNaN(a);
}

function testConstructor_94() {
  var a =  Number("0x10junk\n\f \t");
  assertNaN(a);
}

function testConstructor_95() {
  var a =  Number("\n\f \t0x10junk\n\f \t");
  assertNaN(a);
}

function testConstructor_96() {
  var a =  Number("Infinityjunk");
  assertNaN(a);
}

function testConstructor_97() {
  var a =  Number("\n\f \tInfinityjunk");
  assertNaN(a);
}

function testConstructor_98() {
  var a =  Number("Infinityjunk\n\f \t");
  assertNaN(a);
}

function testConstructor_99() {
  var a =  Number("\n\f \tInfinityjunk\n\f \t");
  assertNaN(a);
}

function testConstructor_100() {
  var a =  Number("+NaN");
  assertNaN(a);
}

function testConstructor_101() {
  var a =  Number("\n\f \t+NaN");
  assertNaN(a);
}

function testConstructor_102() {
  var a =  Number("+NaN\n\f \t");
  assertNaN(a);
}

function testConstructor_103() {
  var a =  Number("\n\f \t+NaN\n\f \t");
  assertNaN(a);
}

function testConstructor_104() {
  var a =  Number("+Infinity");
  assertEquals(Infinity, a);
}

function testConstructor_105() {
  var a =  Number("\n\f \t+Infinity");
  assertEquals(Infinity, a);
}

function testConstructor_106() {
  var a =  Number("+Infinity\n\f \t");
  assertEquals(Infinity, a);
}
testConstructor_106.metadata = {
  bug:"CARAKAN-383"
};

function testConstructor_107() {
  var a =  Number("\n\f \t+Infinity\n\f \t");
  assertEquals(Infinity, a);
}
testConstructor_107.metadata = {
  bug:"CARAKAN-383"
};

function testConstructor_108() {
  var a =  Number("+0");
  assertEquals(0, a);
}

function testConstructor_109() {
  var a =  Number("\n\f \t+0");
  assertEquals(0, a);
}

function testConstructor_110() {
  var a =  Number("+0\n\f \t");
  assertEquals(0, a);
}

function testConstructor_111() {
  var a =  Number("\n\f \t+0\n\f \t");
  assertEquals(0, a);
}

function testConstructor_112() {
  var a =  Number("+1");
  assertEquals(1, a);
}

function testConstructor_113() {
  var a =  Number("\n\f \t+1");
  assertEquals(1, a);
}

function testConstructor_114() {
  var a =  Number("+1\n\f \t");
  assertEquals(1, a);
}

function testConstructor_115() {
  var a =  Number("\n\f \t+1\n\f \t");
  assertEquals(1, a);
}

function testConstructor_116() {
  var a =  Number("+0.5");
  assertEquals(0.5, a);
}

function testConstructor_117() {
  var a =  Number("\n\f \t+0.5");
  assertEquals(0.5, a);
}

function testConstructor_118() {
  var a =  Number("+0.5\n\f \t");
  assertEquals(0.5, a);
}

function testConstructor_119() {
  var a =  Number("\n\f \t+0.5\n\f \t");
  assertEquals(0.5, a);
}

function testConstructor_120() {
  var a =  Number("+123");
  assertEquals(123, a);
}

function testConstructor_121() {
  var a =  Number("\n\f \t+123");
  assertEquals(123, a);
}

function testConstructor_122() {
  var a =  Number("+123\n\f \t");
  assertEquals(123, a);
}

function testConstructor_123() {
  var a =  Number("\n\f \t+123\n\f \t");
  assertEquals(123, a);
}

function testConstructor_124() {
  var a =  Number("+12.8");
  assertEquals(12.8, a);
}

function testConstructor_125() {
  var a =  Number("\n\f \t+12.8");
  assertEquals(12.8, a);
}

function testConstructor_126() {
  var a =  Number("+12.8\n\f \t");
  assertEquals(12.8, a);
}

function testConstructor_127() {
  var a =  Number("\n\f \t+12.8\n\f \t");
  assertEquals(12.8, a);
}

function testConstructor_128() {
  var a =  Number("+1.2e7");
  assertEquals(1.2e7, a);
}

function testConstructor_129() {
  var a =  Number("\n\f \t+1.2e7");
  assertEquals(1.2e7, a);
}

function testConstructor_130() {
  var a =  Number("+1.2e7\n\f \t");
  assertEquals(1.2e7, a);
}

function testConstructor_131() {
  var a =  Number("\n\f \t+1.2e7\n\f \t");
  assertEquals(1.2e7, a);
}

function testConstructor_132() {
  var a =  Number("+1e-7");
  assertEquals(1e-7, a);
}

function testConstructor_133() {
  var a =  Number("\n\f \t+1e-7");
  assertEquals(1e-7, a);
}

function testConstructor_134() {
  var a =  Number("+1e-7\n\f \t");
  assertEquals(1e-7, a);
}

function testConstructor_135() {
  var a =  Number("\n\f \t+1e-7\n\f \t");
  assertEquals(1e-7, a);
}

function testConstructor_136() {
  var a =  Number("+0.0000001e-1");
  assertEquals(0.0000001e-1, a);
}

function testConstructor_137() {
  var a =  Number("\n\f \t+0.0000001e-1");
  assertEquals(0.0000001e-1, a);
}

function testConstructor_138() {
  var a =  Number("+0.0000001e-1\n\f \t");
  assertEquals(0.0000001e-1, a);
}

function testConstructor_139() {
  var a =  Number("\n\f \t+0.0000001e-1\n\f \t");
  assertEquals(0.0000001e-1, a);
}

function testConstructor_140() {
  var a =  Number("+0.0000001e100");
  assertEquals(0.0000001e100, a);
}

function testConstructor_141() {
  var a =  Number("\n\f \t+0.0000001e100");
  assertEquals(0.0000001e100, a);
}

function testConstructor_142() {
  var a =  Number("+0.0000001e100\n\f \t");
  assertEquals(0.0000001e100, a);
}

function testConstructor_143() {
  var a =  Number("\n\f \t+0.0000001e100\n\f \t");
  assertEquals(0.0000001e100, a);
}

function testConstructor_144() {
  var a =  Number("+.0000001");
  assertEquals(.0000001, a);
}

function testConstructor_145() {
  var a =  Number("\n\f \t+.0000001");
  assertEquals(.0000001, a);
}

function testConstructor_146() {
  var a =  Number("+.0000001\n\f \t");
  assertEquals(.0000001, a);
}

function testConstructor_147() {
  var a =  Number("\n\f \t+.0000001\n\f \t");
  assertEquals(.0000001, a);
}

function testConstructor_148() {
  var a =  Number("+.000001e1");
  assertEquals(.000001e1, a);
}

function testConstructor_149() {
  var a =  Number("\n\f \t+.000001e1");
  assertEquals(.000001e1, a);
}

function testConstructor_150() {
  var a =  Number("+.000001e1\n\f \t");
  assertEquals(.000001e1, a);
}

function testConstructor_151() {
  var a =  Number("\n\f \t+.000001e1\n\f \t");
  assertEquals(.000001e1, a);
}

function testConstructor_152() {
  var a =  Number("+0xA");
  assertEquals(10, a);
}

function testConstructor_153() {
  var a =  Number("\n\f \t+0xA");
  assertEquals(10, a);
}

function testConstructor_154() {
  var a =  Number("+0xA\n\f \t");
  assertEquals(10, a);
}

function testConstructor_155() {
  var a =  Number("\n\f \t+0xA\n\f \t");
  assertEquals(10, a);
}

function testConstructor_156() {
  var a =  Number("+0xa");
  assertEquals(10, a);
}

function testConstructor_157() {
  var a =  Number("\n\f \t+0xa");
  assertEquals(10, a);
}

function testConstructor_158() {
  var a =  Number("+0xa\n\f \t");
  assertEquals(10, a);
}

function testConstructor_159() {
  var a =  Number("\n\f \t+0xa\n\f \t");
  assertEquals(10, a);
}

function testConstructor_160() {
  var a =  Number("+0Xa");
  assertEquals(10, a);
}

function testConstructor_161() {
  var a =  Number("\n\f \t+0Xa");
  assertEquals(10, a);
}

function testConstructor_162() {
  var a =  Number("+0Xa\n\f \t");
  assertEquals(10, a);
}

function testConstructor_163() {
  var a =  Number("\n\f \t+0Xa\n\f \t");
  assertEquals(10, a);
}

function testConstructor_164() {
  var a =  Number("+0XA");
  assertEquals(10, a);
}

function testConstructor_165() {
  var a =  Number("\n\f \t+0XA");
  assertEquals(10, a);
}

function testConstructor_166() {
  var a =  Number("+0XA\n\f \t");
  assertEquals(10, a);
}

function testConstructor_167() {
  var a =  Number("\n\f \t+0XA\n\f \t");
  assertEquals(10, a);
}

function testConstructor_168() {
  var a =  Number("+0X05");
  assertEquals(5, a);
}

function testConstructor_169() {
  var a =  Number("\n\f \t+0X05");
  assertEquals(5, a);
}

function testConstructor_170() {
  var a =  Number("+0X05\n\f \t");
  assertEquals(5, a);
}

function testConstructor_171() {
  var a =  Number("\n\f \t+0X05\n\f \t");
  assertEquals(5, a);
}

function testConstructor_172() {
  var a =  Number("+0X010");
  assertEquals(16, a);
}

function testConstructor_173() {
  var a =  Number("\n\f \t+0X010");
  assertEquals(16, a);
}

function testConstructor_174() {
  var a =  Number("+0X010\n\f \t");
  assertEquals(16, a);
}

function testConstructor_175() {
  var a =  Number("\n\f \t+0X010\n\f \t");
  assertEquals(16, a);
}

function testConstructor_176() {
  var a =  Number("+010");
  assertEquals(10, a);
}

function testConstructor_177() {
  var a =  Number("\n\f \t+010");
  assertEquals(10, a);
}

function testConstructor_178() {
  var a =  Number("+010\n\f \t");
  assertEquals(10, a);
}

function testConstructor_179() {
  var a =  Number("\n\f \t+010\n\f \t");
  assertEquals(10, a);
}

function testConstructor_180() {
  var a =  Number("+08");
  assertEquals(8, a);
}

function testConstructor_181() {
  var a =  Number("\n\f \t+08");
  assertEquals(8, a);
}

function testConstructor_182() {
  var a =  Number("+08\n\f \t");
  assertEquals(8, a);
}

function testConstructor_183() {
  var a =  Number("\n\f \t+08\n\f \t");
  assertEquals(8, a);
}

function testConstructor_184() {
  var a =  Number("+100junk");
  assertNaN(a);
}

function testConstructor_185() {
  var a =  Number("\n\f \t+100junk");
  assertNaN(a);
}

function testConstructor_186() {
  var a =  Number("+100junk\n\f \t");
  assertNaN(a);
}

function testConstructor_187() {
  var a =  Number("\n\f \t+100junk\n\f \t");
  assertNaN(a);
}

function testConstructor_188() {
  var a =  Number("+100ABC");
  assertNaN(a);
}

function testConstructor_189() {
  var a =  Number("\n\f \t+100ABC");
  assertNaN(a);
}

function testConstructor_190() {
  var a =  Number("+100ABC\n\f \t");
  assertNaN(a);
}

function testConstructor_191() {
  var a =  Number("\n\f \t+100ABC\n\f \t");
  assertNaN(a);
}

function testConstructor_192() {
  var a =  Number("+0x10junk");
  assertNaN(a);
}

function testConstructor_193() {
  var a =  Number("\n\f \t+0x10junk");
  assertNaN(a);
}

function testConstructor_194() {
  var a =  Number("+0x10junk\n\f \t");
  assertNaN(a);
}

function testConstructor_195() {
  var a =  Number("\n\f \t+0x10junk\n\f \t");
  assertNaN(a);
}

function testConstructor_196() {
  var a =  Number("+Infinityjunk");
  assertNaN(a);
}

function testConstructor_197() {
  var a =  Number("\n\f \t+Infinityjunk");
  assertNaN(a);
}

function testConstructor_198() {
  var a =  Number("+Infinityjunk\n\f \t");
  assertNaN(a);
}

function testConstructor_199() {
  var a =  Number("\n\f \t+Infinityjunk\n\f \t");
  assertNaN(a);
}

function testConstructor_200() {
  var a =  Number("-NaN");
  assertNaN(a);
}

function testConstructor_201() {
  var a =  Number("\n\f \t-NaN");
  assertNaN(a);
}

function testConstructor_202() {
  var a =  Number("-NaN\n\f \t");
  assertNaN(a);
}

function testConstructor_203() {
  var a =  Number("\n\f \t-NaN\n\f \t");
  assertNaN(a);
}

function testConstructor_204() {
  var a =  Number("-Infinity");
  assertEquals(-Infinity, a);
}

function testConstructor_205() {
  var a =  Number("\n\f \t-Infinity");
  assertEquals(-Infinity, a);
}

function testConstructor_206() {
  var a =  Number("-Infinity\n\f \t");
  assertEquals(-Infinity, a);
}
testConstructor_206.metadata = {
  bug:"CARAKAN-383"
};

function testConstructor_207() {
  var a =  Number("\n\f \t-Infinity\n\f \t");
  assertEquals(-Infinity, a);
}
testConstructor_207.metadata = {
  bug:"CARAKAN-383"
};

function testConstructor_208() {
  var a =  Number("-0");
  assertEquals(-0, a);
}

function testConstructor_209() {
  var a =  Number("\n\f \t-0");
  assertEquals(-0, a);
}

function testConstructor_210() {
  var a =  Number("-0\n\f \t");
  assertEquals(-0, a);
}

function testConstructor_211() {
  var a =  Number("\n\f \t-0\n\f \t");
  assertEquals(-0, a);
}

function testConstructor_212() {
  var a =  Number("-1");
  assertEquals(-1, a);
}

function testConstructor_213() {
  var a =  Number("\n\f \t-1");
  assertEquals(-1, a);
}

function testConstructor_214() {
  var a =  Number("-1\n\f \t");
  assertEquals(-1, a);
}

function testConstructor_215() {
  var a =  Number("\n\f \t-1\n\f \t");
  assertEquals(-1, a);
}

function testConstructor_216() {
  var a =  Number("-0.5");
  assertEquals(-0.5, a);
}

function testConstructor_217() {
  var a =  Number("\n\f \t-0.5");
  assertEquals(-0.5, a);
}

function testConstructor_218() {
  var a =  Number("-0.5\n\f \t");
  assertEquals(-0.5, a);
}

function testConstructor_219() {
  var a =  Number("\n\f \t-0.5\n\f \t");
  assertEquals(-0.5, a);
}

function testConstructor_220() {
  var a =  Number("-123");
  assertEquals(-123, a);
}

function testConstructor_221() {
  var a =  Number("\n\f \t-123");
  assertEquals(-123, a);
}

function testConstructor_222() {
  var a =  Number("-123\n\f \t");
  assertEquals(-123, a);
}

function testConstructor_223() {
  var a =  Number("\n\f \t-123\n\f \t");
  assertEquals(-123, a);
}

function testConstructor_224() {
  var a =  Number("-12.8");
  assertEquals(-12.8, a);
}

function testConstructor_225() {
  var a =  Number("\n\f \t-12.8");
  assertEquals(-12.8, a);
}

function testConstructor_226() {
  var a =  Number("-12.8\n\f \t");
  assertEquals(-12.8, a);
}

function testConstructor_227() {
  var a =  Number("\n\f \t-12.8\n\f \t");
  assertEquals(-12.8, a);
}

function testConstructor_228() {
  var a =  Number("-1.2e7");
  assertEquals(-1.2e7, a);
}

function testConstructor_229() {
  var a =  Number("\n\f \t-1.2e7");
  assertEquals(-1.2e7, a);
}

function testConstructor_230() {
  var a =  Number("-1.2e7\n\f \t");
  assertEquals(-1.2e7, a);
}

function testConstructor_231() {
  var a =  Number("\n\f \t-1.2e7\n\f \t");
  assertEquals(-1.2e7, a);
}

function testConstructor_232() {
  var a =  Number("-1e-7");
  assertEquals(-1e-7, a);
}

function testConstructor_233() {
  var a =  Number("\n\f \t-1e-7");
  assertEquals(-1e-7, a);
}

function testConstructor_234() {
  var a =  Number("-1e-7\n\f \t");
  assertEquals(-1e-7, a);
}

function testConstructor_235() {
  var a =  Number("\n\f \t-1e-7\n\f \t");
  assertEquals(-1e-7, a);
}

function testConstructor_236() {
  var a =  Number("-0.0000001e-1");
  assertEquals(-0.0000001e-1, a);
}

function testConstructor_237() {
  var a =  Number("\n\f \t-0.0000001e-1");
  assertEquals(-0.0000001e-1, a);
}

function testConstructor_238() {
  var a =  Number("-0.0000001e-1\n\f \t");
  assertEquals(-0.0000001e-1, a);
}

function testConstructor_239() {
  var a =  Number("\n\f \t-0.0000001e-1\n\f \t");
  assertEquals(-0.0000001e-1, a);
}

function testConstructor_240() {
  var a =  Number("-0.0000001e100");
  assertEquals(-0.0000001e100, a);
}

function testConstructor_241() {
  var a =  Number("\n\f \t-0.0000001e100");
  assertEquals(-0.0000001e100, a);
}

function testConstructor_242() {
  var a =  Number("-0.0000001e100\n\f \t");
  assertEquals(-0.0000001e100, a);
}

function testConstructor_243() {
  var a =  Number("\n\f \t-0.0000001e100\n\f \t");
  assertEquals(-0.0000001e100, a);
}

function testConstructor_244() {
  var a =  Number("-.0000001");
  assertEquals(-.0000001, a);
}

function testConstructor_245() {
  var a =  Number("\n\f \t-.0000001");
  assertEquals(-.0000001, a);
}

function testConstructor_246() {
  var a =  Number("-.0000001\n\f \t");
  assertEquals(-.0000001, a);
}

function testConstructor_247() {
  var a =  Number("\n\f \t-.0000001\n\f \t");
  assertEquals(-.0000001, a);
}

function testConstructor_248() {
  var a =  Number("-.000001e1");
  assertEquals(-.000001e1, a);
}

function testConstructor_249() {
  var a =  Number("\n\f \t-.000001e1");
  assertEquals(-.000001e1, a);
}

function testConstructor_250() {
  var a =  Number("-.000001e1\n\f \t");
  assertEquals(-.000001e1, a);
}

function testConstructor_251() {
  var a =  Number("\n\f \t-.000001e1\n\f \t");
  assertEquals(-.000001e1, a);
}

function testConstructor_252() {
  var a =  Number("-0xA");
  assertEquals(-10, a);
}

function testConstructor_253() {
  var a =  Number("\n\f \t-0xA");
  assertEquals(-10, a);
}

function testConstructor_254() {
  var a =  Number("-0xA\n\f \t");
  assertEquals(-10, a);
}

function testConstructor_255() {
  var a =  Number("\n\f \t-0xA\n\f \t");
  assertEquals(-10, a);
}

function testConstructor_256() {
  var a =  Number("-0xa");
  assertEquals(-10, a);
}

function testConstructor_257() {
  var a =  Number("\n\f \t-0xa");
  assertEquals(-10, a);
}

function testConstructor_258() {
  var a =  Number("-0xa\n\f \t");
  assertEquals(-10, a);
}

function testConstructor_259() {
  var a =  Number("\n\f \t-0xa\n\f \t");
  assertEquals(-10, a);
}

function testConstructor_260() {
  var a =  Number("-0Xa");
  assertEquals(-10, a);
}

function testConstructor_261() {
  var a =  Number("\n\f \t-0Xa");
  assertEquals(-10, a);
}

function testConstructor_262() {
  var a =  Number("-0Xa\n\f \t");
  assertEquals(-10, a);
}

function testConstructor_263() {
  var a =  Number("\n\f \t-0Xa\n\f \t");
  assertEquals(-10, a);
}

function testConstructor_264() {
  var a =  Number("-0XA");
  assertEquals(-10, a);
}

function testConstructor_265() {
  var a =  Number("\n\f \t-0XA");
  assertEquals(-10, a);
}

function testConstructor_266() {
  var a =  Number("-0XA\n\f \t");
  assertEquals(-10, a);
}

function testConstructor_267() {
  var a =  Number("\n\f \t-0XA\n\f \t");
  assertEquals(-10, a);
}

function testConstructor_268() {
  var a =  Number("-0X05");
  assertEquals(-5, a);
}

function testConstructor_269() {
  var a =  Number("\n\f \t-0X05");
  assertEquals(-5, a);
}

function testConstructor_270() {
  var a =  Number("-0X05\n\f \t");
  assertEquals(-5, a);
}

function testConstructor_271() {
  var a =  Number("\n\f \t-0X05\n\f \t");
  assertEquals(-5, a);
}

function testConstructor_272() {
  var a =  Number("-0X010");
  assertEquals(-16, a);
}

function testConstructor_273() {
  var a =  Number("\n\f \t-0X010");
  assertEquals(-16, a);
}

function testConstructor_274() {
  var a =  Number("-0X010\n\f \t");
  assertEquals(-16, a);
}

function testConstructor_275() {
  var a =  Number("\n\f \t-0X010\n\f \t");
  assertEquals(-16, a);
}

function testConstructor_276() {
  var a =  Number("-010");
  assertEquals(-10, a);
}

function testConstructor_277() {
  var a =  Number("\n\f \t-010");
  assertEquals(-10, a);
}

function testConstructor_278() {
  var a =  Number("-010\n\f \t");
  assertEquals(-10, a);
}

function testConstructor_279() {
  var a =  Number("\n\f \t-010\n\f \t");
  assertEquals(-10, a);
}

function testConstructor_280() {
  var a =  Number("-08");
  assertEquals(-8, a);
}

function testConstructor_281() {
  var a =  Number("\n\f \t-08");
  assertEquals(-8, a);
}

function testConstructor_282() {
  var a =  Number("-08\n\f \t");
  assertEquals(-8, a);
}

function testConstructor_283() {
  var a =  Number("\n\f \t-08\n\f \t");
  assertEquals(-8, a);
}

function testConstructor_284() {
  var a =  Number("-100junk");
  assertNaN(a);
}

function testConstructor_285() {
  var a =  Number("\n\f \t-100junk");
  assertNaN(a);
}

function testConstructor_286() {
  var a =  Number("-100junk\n\f \t");
  assertNaN(a);
}

function testConstructor_287() {
  var a =  Number("\n\f \t-100junk\n\f \t");
  assertNaN(a);
}

function testConstructor_288() {
  var a =  Number("-100ABC");
  assertNaN(a);
}

function testConstructor_289() {
  var a =  Number("\n\f \t-100ABC");
  assertNaN(a);
}

function testConstructor_290() {
  var a =  Number("-100ABC\n\f \t");
  assertNaN(a);
}

function testConstructor_291() {
  var a =  Number("\n\f \t-100ABC\n\f \t");
  assertNaN(a);
}

function testConstructor_292() {
  var a =  Number("-0x10junk");
  assertNaN(a);
}

function testConstructor_293() {
  var a =  Number("\n\f \t-0x10junk");
  assertNaN(a);
}

function testConstructor_294() {
  var a =  Number("-0x10junk\n\f \t");
  assertNaN(a);
}

function testConstructor_295() {
  var a =  Number("\n\f \t-0x10junk\n\f \t");
  assertNaN(a);
}

function testConstructor_296() {
  var a =  Number("-Infinityjunk");
  assertNaN(a);
}

function testConstructor_297() {
  var a =  Number("\n\f \t-Infinityjunk");
  assertNaN(a);
}

function testConstructor_298() {
  var a =  Number("-Infinityjunk\n\f \t");
  assertNaN(a);
}

function testConstructor_299() {
  var a =  Number("\n\f \t-Infinityjunk\n\f \t");
  assertNaN(a);
}

function testConstructor_300() {
  var a = new Number("NaN");
  assertNaN(a.valueOf());
}

function testConstructor_301() {
  var a = new Number("\n\f \tNaN");
  assertNaN(a.valueOf());
}

function testConstructor_302() {
  var a = new Number("NaN\n\f \t");
  assertNaN(a.valueOf());
}

function testConstructor_303() {
  var a = new Number("\n\f \tNaN\n\f \t");
  assertNaN(a.valueOf());
}

function testConstructor_304() {
  var a = new Number("Infinity");
  assertEquals(Infinity, a.valueOf());
}

function testConstructor_305() {
  var a = new Number("\n\f \tInfinity");
  assertEquals(Infinity, a.valueOf());
}

function testConstructor_306() {
  var a = new Number("Infinity\n\f \t");
  assertEquals(Infinity, a.valueOf());
}
testConstructor_306.metadata = {
  bug:"CARAKAN-383"
};

function testConstructor_307() {
  var a = new Number("\n\f \tInfinity\n\f \t");
  assertEquals(Infinity, a.valueOf());
}
testConstructor_307.metadata = {
  bug:"CARAKAN-383"
};

function testConstructor_308() {
  var a = new Number("0");
  assertEquals(0, a.valueOf());
}

function testConstructor_309() {
  var a = new Number("\n\f \t0");
  assertEquals(0, a.valueOf());
}

function testConstructor_310() {
  var a = new Number("0\n\f \t");
  assertEquals(0, a.valueOf());
}

function testConstructor_311() {
  var a = new Number("\n\f \t0\n\f \t");
  assertEquals(0, a.valueOf());
}

function testConstructor_312() {
  var a = new Number("1");
  assertEquals(1, a.valueOf());
}

function testConstructor_313() {
  var a = new Number("\n\f \t1");
  assertEquals(1, a.valueOf());
}

function testConstructor_314() {
  var a = new Number("1\n\f \t");
  assertEquals(1, a.valueOf());
}

function testConstructor_315() {
  var a = new Number("\n\f \t1\n\f \t");
  assertEquals(1, a.valueOf());
}

function testConstructor_316() {
  var a = new Number("0.5");
  assertEquals(0.5, a.valueOf());
}

function testConstructor_317() {
  var a = new Number("\n\f \t0.5");
  assertEquals(0.5, a.valueOf());
}

function testConstructor_318() {
  var a = new Number("0.5\n\f \t");
  assertEquals(0.5, a.valueOf());
}

function testConstructor_319() {
  var a = new Number("\n\f \t0.5\n\f \t");
  assertEquals(0.5, a.valueOf());
}

function testConstructor_320() {
  var a = new Number("123");
  assertEquals(123, a.valueOf());
}

function testConstructor_321() {
  var a = new Number("\n\f \t123");
  assertEquals(123, a.valueOf());
}

function testConstructor_322() {
  var a = new Number("123\n\f \t");
  assertEquals(123, a.valueOf());
}

function testConstructor_323() {
  var a = new Number("\n\f \t123\n\f \t");
  assertEquals(123, a.valueOf());
}

function testConstructor_324() {
  var a = new Number("12.8");
  assertEquals(12.8, a.valueOf());
}

function testConstructor_325() {
  var a = new Number("\n\f \t12.8");
  assertEquals(12.8, a.valueOf());
}

function testConstructor_326() {
  var a = new Number("12.8\n\f \t");
  assertEquals(12.8, a.valueOf());
}

function testConstructor_327() {
  var a = new Number("\n\f \t12.8\n\f \t");
  assertEquals(12.8, a.valueOf());
}

function testConstructor_328() {
  var a = new Number("1.2e7");
  assertEquals(1.2e7, a.valueOf());
}

function testConstructor_329() {
  var a = new Number("\n\f \t1.2e7");
  assertEquals(1.2e7, a.valueOf());
}

function testConstructor_330() {
  var a = new Number("1.2e7\n\f \t");
  assertEquals(1.2e7, a.valueOf());
}

function testConstructor_331() {
  var a = new Number("\n\f \t1.2e7\n\f \t");
  assertEquals(1.2e7, a.valueOf());
}

function testConstructor_332() {
  var a = new Number("1e-7");
  assertEquals(1e-7, a.valueOf());
}

function testConstructor_333() {
  var a = new Number("\n\f \t1e-7");
  assertEquals(1e-7, a.valueOf());
}

function testConstructor_334() {
  var a = new Number("1e-7\n\f \t");
  assertEquals(1e-7, a.valueOf());
}

function testConstructor_335() {
  var a = new Number("\n\f \t1e-7\n\f \t");
  assertEquals(1e-7, a.valueOf());
}

function testConstructor_336() {
  var a = new Number("0.0000001e-1");
  assertEquals(0.0000001e-1, a.valueOf());
}

function testConstructor_337() {
  var a = new Number("\n\f \t0.0000001e-1");
  assertEquals(0.0000001e-1, a.valueOf());
}

function testConstructor_338() {
  var a = new Number("0.0000001e-1\n\f \t");
  assertEquals(0.0000001e-1, a.valueOf());
}

function testConstructor_339() {
  var a = new Number("\n\f \t0.0000001e-1\n\f \t");
  assertEquals(0.0000001e-1, a.valueOf());
}

function testConstructor_340() {
  var a = new Number("0.0000001e100");
  assertEquals(0.0000001e100, a.valueOf());
}

function testConstructor_341() {
  var a = new Number("\n\f \t0.0000001e100");
  assertEquals(0.0000001e100, a.valueOf());
}

function testConstructor_342() {
  var a = new Number("0.0000001e100\n\f \t");
  assertEquals(0.0000001e100, a.valueOf());
}

function testConstructor_343() {
  var a = new Number("\n\f \t0.0000001e100\n\f \t");
  assertEquals(0.0000001e100, a.valueOf());
}

function testConstructor_344() {
  var a = new Number(".0000001");
  assertEquals(.0000001, a.valueOf());
}

function testConstructor_345() {
  var a = new Number("\n\f \t.0000001");
  assertEquals(.0000001, a.valueOf());
}

function testConstructor_346() {
  var a = new Number(".0000001\n\f \t");
  assertEquals(.0000001, a.valueOf());
}

function testConstructor_347() {
  var a = new Number("\n\f \t.0000001\n\f \t");
  assertEquals(.0000001, a.valueOf());
}

function testConstructor_348() {
  var a = new Number(".000001e1");
  assertEquals(.000001e1, a.valueOf());
}

function testConstructor_349() {
  var a = new Number("\n\f \t.000001e1");
  assertEquals(.000001e1, a.valueOf());
}

function testConstructor_350() {
  var a = new Number(".000001e1\n\f \t");
  assertEquals(.000001e1, a.valueOf());
}

function testConstructor_351() {
  var a = new Number("\n\f \t.000001e1\n\f \t");
  assertEquals(.000001e1, a.valueOf());
}

function testConstructor_352() {
  var a = new Number("0xA");
  assertEquals(10, a.valueOf());
}

function testConstructor_353() {
  var a = new Number("\n\f \t0xA");
  assertEquals(10, a.valueOf());
}

function testConstructor_354() {
  var a = new Number("0xA\n\f \t");
  assertEquals(10, a.valueOf());
}

function testConstructor_355() {
  var a = new Number("\n\f \t0xA\n\f \t");
  assertEquals(10, a.valueOf());
}

function testConstructor_356() {
  var a = new Number("0xa");
  assertEquals(10, a.valueOf());
}

function testConstructor_357() {
  var a = new Number("\n\f \t0xa");
  assertEquals(10, a.valueOf());
}

function testConstructor_358() {
  var a = new Number("0xa\n\f \t");
  assertEquals(10, a.valueOf());
}

function testConstructor_359() {
  var a = new Number("\n\f \t0xa\n\f \t");
  assertEquals(10, a.valueOf());
}

function testConstructor_360() {
  var a = new Number("0Xa");
  assertEquals(10, a.valueOf());
}

function testConstructor_361() {
  var a = new Number("\n\f \t0Xa");
  assertEquals(10, a.valueOf());
}

function testConstructor_362() {
  var a = new Number("0Xa\n\f \t");
  assertEquals(10, a.valueOf());
}

function testConstructor_363() {
  var a = new Number("\n\f \t0Xa\n\f \t");
  assertEquals(10, a.valueOf());
}

function testConstructor_364() {
  var a = new Number("0XA");
  assertEquals(10, a.valueOf());
}

function testConstructor_365() {
  var a = new Number("\n\f \t0XA");
  assertEquals(10, a.valueOf());
}

function testConstructor_366() {
  var a = new Number("0XA\n\f \t");
  assertEquals(10, a.valueOf());
}

function testConstructor_367() {
  var a = new Number("\n\f \t0XA\n\f \t");
  assertEquals(10, a.valueOf());
}

function testConstructor_368() {
  var a = new Number("0X05");
  assertEquals(5, a.valueOf());
}

function testConstructor_369() {
  var a = new Number("\n\f \t0X05");
  assertEquals(5, a.valueOf());
}

function testConstructor_370() {
  var a = new Number("0X05\n\f \t");
  assertEquals(5, a.valueOf());
}

function testConstructor_371() {
  var a = new Number("\n\f \t0X05\n\f \t");
  assertEquals(5, a.valueOf());
}

function testConstructor_372() {
  var a = new Number("0X010");
  assertEquals(16, a.valueOf());
}

function testConstructor_373() {
  var a = new Number("\n\f \t0X010");
  assertEquals(16, a.valueOf());
}

function testConstructor_374() {
  var a = new Number("0X010\n\f \t");
  assertEquals(16, a.valueOf());
}

function testConstructor_375() {
  var a = new Number("\n\f \t0X010\n\f \t");
  assertEquals(16, a.valueOf());
}

function testConstructor_376() {
  var a = new Number("010");
  assertEquals(10, a.valueOf());
}

function testConstructor_377() {
  var a = new Number("\n\f \t010");
  assertEquals(10, a.valueOf());
}

function testConstructor_378() {
  var a = new Number("010\n\f \t");
  assertEquals(10, a.valueOf());
}

function testConstructor_379() {
  var a = new Number("\n\f \t010\n\f \t");
  assertEquals(10, a.valueOf());
}

function testConstructor_380() {
  var a = new Number("08");
  assertEquals(8, a.valueOf());
}

function testConstructor_381() {
  var a = new Number("\n\f \t08");
  assertEquals(8, a.valueOf());
}

function testConstructor_382() {
  var a = new Number("08\n\f \t");
  assertEquals(8, a.valueOf());
}

function testConstructor_383() {
  var a = new Number("\n\f \t08\n\f \t");
  assertEquals(8, a.valueOf());
}

function testConstructor_384() {
  var a = new Number("100junk");
  assertNaN(a.valueOf());
}

function testConstructor_385() {
  var a = new Number("\n\f \t100junk");
  assertNaN(a.valueOf());
}

function testConstructor_386() {
  var a = new Number("100junk\n\f \t");
  assertNaN(a.valueOf());
}

function testConstructor_387() {
  var a = new Number("\n\f \t100junk\n\f \t");
  assertNaN(a.valueOf());
}

function testConstructor_388() {
  var a = new Number("100ABC");
  assertNaN(a.valueOf());
}

function testConstructor_389() {
  var a = new Number("\n\f \t100ABC");
  assertNaN(a.valueOf());
}

function testConstructor_390() {
  var a = new Number("100ABC\n\f \t");
  assertNaN(a.valueOf());
}

function testConstructor_391() {
  var a = new Number("\n\f \t100ABC\n\f \t");
  assertNaN(a.valueOf());
}

function testConstructor_392() {
  var a = new Number("0x10junk");
  assertNaN(a.valueOf());
}

function testConstructor_393() {
  var a = new Number("\n\f \t0x10junk");
  assertNaN(a.valueOf());
}

function testConstructor_394() {
  var a = new Number("0x10junk\n\f \t");
  assertNaN(a.valueOf());
}

function testConstructor_395() {
  var a = new Number("\n\f \t0x10junk\n\f \t");
  assertNaN(a.valueOf());
}

function testConstructor_396() {
  var a = new Number("Infinityjunk");
  assertNaN(a.valueOf());
}

function testConstructor_397() {
  var a = new Number("\n\f \tInfinityjunk");
  assertNaN(a.valueOf());
}

function testConstructor_398() {
  var a = new Number("Infinityjunk\n\f \t");
  assertNaN(a.valueOf());
}

function testConstructor_399() {
  var a = new Number("\n\f \tInfinityjunk\n\f \t");
  assertNaN(a.valueOf());
}

function testConstructor_400() {
  var a = new Number("+NaN");
  assertNaN(a.valueOf());
}

function testConstructor_401() {
  var a = new Number("\n\f \t+NaN");
  assertNaN(a.valueOf());
}

function testConstructor_402() {
  var a = new Number("+NaN\n\f \t");
  assertNaN(a.valueOf());
}

function testConstructor_403() {
  var a = new Number("\n\f \t+NaN\n\f \t");
  assertNaN(a.valueOf());
}

function testConstructor_404() {
  var a = new Number("+Infinity");
  assertEquals(Infinity, a.valueOf());
}

function testConstructor_405() {
  var a = new Number("\n\f \t+Infinity");
  assertEquals(Infinity, a.valueOf());
}

function testConstructor_406() {
  var a = new Number("+Infinity\n\f \t");
  assertEquals(Infinity, a.valueOf());
}
testConstructor_406.metadata = {
  bug:"CARAKAN-383"
};

function testConstructor_407() {
  var a = new Number("\n\f \t+Infinity\n\f \t");
  assertEquals(Infinity, a.valueOf());
}
testConstructor_407.metadata = {
  bug:"CARAKAN-383"
};

function testConstructor_408() {
  var a = new Number("+0");
  assertEquals(0, a.valueOf());
}

function testConstructor_409() {
  var a = new Number("\n\f \t+0");
  assertEquals(0, a.valueOf());
}

function testConstructor_410() {
  var a = new Number("+0\n\f \t");
  assertEquals(0, a.valueOf());
}

function testConstructor_411() {
  var a = new Number("\n\f \t+0\n\f \t");
  assertEquals(0, a.valueOf());
}

function testConstructor_412() {
  var a = new Number("+1");
  assertEquals(1, a.valueOf());
}

function testConstructor_413() {
  var a = new Number("\n\f \t+1");
  assertEquals(1, a.valueOf());
}

function testConstructor_414() {
  var a = new Number("+1\n\f \t");
  assertEquals(1, a.valueOf());
}

function testConstructor_415() {
  var a = new Number("\n\f \t+1\n\f \t");
  assertEquals(1, a.valueOf());
}

function testConstructor_416() {
  var a = new Number("+0.5");
  assertEquals(0.5, a.valueOf());
}

function testConstructor_417() {
  var a = new Number("\n\f \t+0.5");
  assertEquals(0.5, a.valueOf());
}

function testConstructor_418() {
  var a = new Number("+0.5\n\f \t");
  assertEquals(0.5, a.valueOf());
}

function testConstructor_419() {
  var a = new Number("\n\f \t+0.5\n\f \t");
  assertEquals(0.5, a.valueOf());
}

function testConstructor_420() {
  var a = new Number("+123");
  assertEquals(123, a.valueOf());
}

function testConstructor_421() {
  var a = new Number("\n\f \t+123");
  assertEquals(123, a.valueOf());
}

function testConstructor_422() {
  var a = new Number("+123\n\f \t");
  assertEquals(123, a.valueOf());
}

function testConstructor_423() {
  var a = new Number("\n\f \t+123\n\f \t");
  assertEquals(123, a.valueOf());
}

function testConstructor_424() {
  var a = new Number("+12.8");
  assertEquals(12.8, a.valueOf());
}

function testConstructor_425() {
  var a = new Number("\n\f \t+12.8");
  assertEquals(12.8, a.valueOf());
}

function testConstructor_426() {
  var a = new Number("+12.8\n\f \t");
  assertEquals(12.8, a.valueOf());
}

function testConstructor_427() {
  var a = new Number("\n\f \t+12.8\n\f \t");
  assertEquals(12.8, a.valueOf());
}

function testConstructor_428() {
  var a = new Number("+1.2e7");
  assertEquals(1.2e7, a.valueOf());
}

function testConstructor_429() {
  var a = new Number("\n\f \t+1.2e7");
  assertEquals(1.2e7, a.valueOf());
}

function testConstructor_430() {
  var a = new Number("+1.2e7\n\f \t");
  assertEquals(1.2e7, a.valueOf());
}

function testConstructor_431() {
  var a = new Number("\n\f \t+1.2e7\n\f \t");
  assertEquals(1.2e7, a.valueOf());
}

function testConstructor_432() {
  var a = new Number("+1e-7");
  assertEquals(1e-7, a.valueOf());
}

function testConstructor_433() {
  var a = new Number("\n\f \t+1e-7");
  assertEquals(1e-7, a.valueOf());
}

function testConstructor_434() {
  var a = new Number("+1e-7\n\f \t");
  assertEquals(1e-7, a.valueOf());
}

function testConstructor_435() {
  var a = new Number("\n\f \t+1e-7\n\f \t");
  assertEquals(1e-7, a.valueOf());
}

function testConstructor_436() {
  var a = new Number("+0.0000001e-1");
  assertEquals(0.0000001e-1, a.valueOf());
}

function testConstructor_437() {
  var a = new Number("\n\f \t+0.0000001e-1");
  assertEquals(0.0000001e-1, a.valueOf());
}

function testConstructor_438() {
  var a = new Number("+0.0000001e-1\n\f \t");
  assertEquals(0.0000001e-1, a.valueOf());
}

function testConstructor_439() {
  var a = new Number("\n\f \t+0.0000001e-1\n\f \t");
  assertEquals(0.0000001e-1, a.valueOf());
}

function testConstructor_440() {
  var a = new Number("+0.0000001e100");
  assertEquals(0.0000001e100, a.valueOf());
}

function testConstructor_441() {
  var a = new Number("\n\f \t+0.0000001e100");
  assertEquals(0.0000001e100, a.valueOf());
}

function testConstructor_442() {
  var a = new Number("+0.0000001e100\n\f \t");
  assertEquals(0.0000001e100, a.valueOf());
}

function testConstructor_443() {
  var a = new Number("\n\f \t+0.0000001e100\n\f \t");
  assertEquals(0.0000001e100, a.valueOf());
}

function testConstructor_444() {
  var a = new Number("+.0000001");
  assertEquals(.0000001, a.valueOf());
}

function testConstructor_445() {
  var a = new Number("\n\f \t+.0000001");
  assertEquals(.0000001, a.valueOf());
}

function testConstructor_446() {
  var a = new Number("+.0000001\n\f \t");
  assertEquals(.0000001, a.valueOf());
}

function testConstructor_447() {
  var a = new Number("\n\f \t+.0000001\n\f \t");
  assertEquals(.0000001, a.valueOf());
}

function testConstructor_448() {
  var a = new Number("+.000001e1");
  assertEquals(.000001e1, a.valueOf());
}

function testConstructor_449() {
  var a = new Number("\n\f \t+.000001e1");
  assertEquals(.000001e1, a.valueOf());
}

function testConstructor_450() {
  var a = new Number("+.000001e1\n\f \t");
  assertEquals(.000001e1, a.valueOf());
}

function testConstructor_451() {
  var a = new Number("\n\f \t+.000001e1\n\f \t");
  assertEquals(.000001e1, a.valueOf());
}

function testConstructor_452() {
  var a = new Number("+0xA");
  assertEquals(10, a.valueOf());
}

function testConstructor_453() {
  var a = new Number("\n\f \t+0xA");
  assertEquals(10, a.valueOf());
}

function testConstructor_454() {
  var a = new Number("+0xA\n\f \t");
  assertEquals(10, a.valueOf());
}

function testConstructor_455() {
  var a = new Number("\n\f \t+0xA\n\f \t");
  assertEquals(10, a.valueOf());
}

function testConstructor_456() {
  var a = new Number("+0xa");
  assertEquals(10, a.valueOf());
}

function testConstructor_457() {
  var a = new Number("\n\f \t+0xa");
  assertEquals(10, a.valueOf());
}

function testConstructor_458() {
  var a = new Number("+0xa\n\f \t");
  assertEquals(10, a.valueOf());
}

function testConstructor_459() {
  var a = new Number("\n\f \t+0xa\n\f \t");
  assertEquals(10, a.valueOf());
}

function testConstructor_460() {
  var a = new Number("+0Xa");
  assertEquals(10, a.valueOf());
}

function testConstructor_461() {
  var a = new Number("\n\f \t+0Xa");
  assertEquals(10, a.valueOf());
}

function testConstructor_462() {
  var a = new Number("+0Xa\n\f \t");
  assertEquals(10, a.valueOf());
}

function testConstructor_463() {
  var a = new Number("\n\f \t+0Xa\n\f \t");
  assertEquals(10, a.valueOf());
}

function testConstructor_464() {
  var a = new Number("+0XA");
  assertEquals(10, a.valueOf());
}

function testConstructor_465() {
  var a = new Number("\n\f \t+0XA");
  assertEquals(10, a.valueOf());
}

function testConstructor_466() {
  var a = new Number("+0XA\n\f \t");
  assertEquals(10, a.valueOf());
}

function testConstructor_467() {
  var a = new Number("\n\f \t+0XA\n\f \t");
  assertEquals(10, a.valueOf());
}

function testConstructor_468() {
  var a = new Number("+0X05");
  assertEquals(5, a.valueOf());
}

function testConstructor_469() {
  var a = new Number("\n\f \t+0X05");
  assertEquals(5, a.valueOf());
}

function testConstructor_470() {
  var a = new Number("+0X05\n\f \t");
  assertEquals(5, a.valueOf());
}

function testConstructor_471() {
  var a = new Number("\n\f \t+0X05\n\f \t");
  assertEquals(5, a.valueOf());
}

function testConstructor_472() {
  var a = new Number("+0X010");
  assertEquals(16, a.valueOf());
}

function testConstructor_473() {
  var a = new Number("\n\f \t+0X010");
  assertEquals(16, a.valueOf());
}

function testConstructor_474() {
  var a = new Number("+0X010\n\f \t");
  assertEquals(16, a.valueOf());
}

function testConstructor_475() {
  var a = new Number("\n\f \t+0X010\n\f \t");
  assertEquals(16, a.valueOf());
}

function testConstructor_476() {
  var a = new Number("+010");
  assertEquals(10, a.valueOf());
}

function testConstructor_477() {
  var a = new Number("\n\f \t+010");
  assertEquals(10, a.valueOf());
}

function testConstructor_478() {
  var a = new Number("+010\n\f \t");
  assertEquals(10, a.valueOf());
}

function testConstructor_479() {
  var a = new Number("\n\f \t+010\n\f \t");
  assertEquals(10, a.valueOf());
}

function testConstructor_480() {
  var a = new Number("+08");
  assertEquals(8, a.valueOf());
}

function testConstructor_481() {
  var a = new Number("\n\f \t+08");
  assertEquals(8, a.valueOf());
}

function testConstructor_482() {
  var a = new Number("+08\n\f \t");
  assertEquals(8, a.valueOf());
}

function testConstructor_483() {
  var a = new Number("\n\f \t+08\n\f \t");
  assertEquals(8, a.valueOf());
}

function testConstructor_484() {
  var a = new Number("+100junk");
  assertNaN(a.valueOf());
}

function testConstructor_485() {
  var a = new Number("\n\f \t+100junk");
  assertNaN(a.valueOf());
}

function testConstructor_486() {
  var a = new Number("+100junk\n\f \t");
  assertNaN(a.valueOf());
}

function testConstructor_487() {
  var a = new Number("\n\f \t+100junk\n\f \t");
  assertNaN(a.valueOf());
}

function testConstructor_488() {
  var a = new Number("+100ABC");
  assertNaN(a.valueOf());
}

function testConstructor_489() {
  var a = new Number("\n\f \t+100ABC");
  assertNaN(a.valueOf());
}

function testConstructor_490() {
  var a = new Number("+100ABC\n\f \t");
  assertNaN(a.valueOf());
}

function testConstructor_491() {
  var a = new Number("\n\f \t+100ABC\n\f \t");
  assertNaN(a.valueOf());
}

function testConstructor_492() {
  var a = new Number("+0x10junk");
  assertNaN(a.valueOf());
}

function testConstructor_493() {
  var a = new Number("\n\f \t+0x10junk");
  assertNaN(a.valueOf());
}

function testConstructor_494() {
  var a = new Number("+0x10junk\n\f \t");
  assertNaN(a.valueOf());
}

function testConstructor_495() {
  var a = new Number("\n\f \t+0x10junk\n\f \t");
  assertNaN(a.valueOf());
}

function testConstructor_496() {
  var a = new Number("+Infinityjunk");
  assertNaN(a.valueOf());
}

function testConstructor_497() {
  var a = new Number("\n\f \t+Infinityjunk");
  assertNaN(a.valueOf());
}

function testConstructor_498() {
  var a = new Number("+Infinityjunk\n\f \t");
  assertNaN(a.valueOf());
}

function testConstructor_499() {
  var a = new Number("\n\f \t+Infinityjunk\n\f \t");
  assertNaN(a.valueOf());
}

function testConstructor_500() {
  var a = new Number("-NaN");
  assertNaN(a.valueOf());
}

function testConstructor_501() {
  var a = new Number("\n\f \t-NaN");
  assertNaN(a.valueOf());
}

function testConstructor_502() {
  var a = new Number("-NaN\n\f \t");
  assertNaN(a.valueOf());
}

function testConstructor_503() {
  var a = new Number("\n\f \t-NaN\n\f \t");
  assertNaN(a.valueOf());
}

function testConstructor_504() {
  var a = new Number("-Infinity");
  assertEquals(-Infinity, a.valueOf());
}

function testConstructor_505() {
  var a = new Number("\n\f \t-Infinity");
  assertEquals(-Infinity, a.valueOf());
}

function testConstructor_506() {
  var a = new Number("-Infinity\n\f \t");
  assertEquals(-Infinity, a.valueOf());
}
testConstructor_506.metadata = {
  bug:"CARAKAN-383"
};

function testConstructor_507() {
  var a = new Number("\n\f \t-Infinity\n\f \t");
  assertEquals(-Infinity, a.valueOf());
}
testConstructor_507.metadata = {
  bug:"CARAKAN-383"
};

function testConstructor_508() {
  var a = new Number("-0");
  assertEquals(-0, a.valueOf());
}

function testConstructor_509() {
  var a = new Number("\n\f \t-0");
  assertEquals(-0, a.valueOf());
}

function testConstructor_510() {
  var a = new Number("-0\n\f \t");
  assertEquals(-0, a.valueOf());
}

function testConstructor_511() {
  var a = new Number("\n\f \t-0\n\f \t");
  assertEquals(-0, a.valueOf());
}

function testConstructor_512() {
  var a = new Number("-1");
  assertEquals(-1, a.valueOf());
}

function testConstructor_513() {
  var a = new Number("\n\f \t-1");
  assertEquals(-1, a.valueOf());
}

function testConstructor_514() {
  var a = new Number("-1\n\f \t");
  assertEquals(-1, a.valueOf());
}

function testConstructor_515() {
  var a = new Number("\n\f \t-1\n\f \t");
  assertEquals(-1, a.valueOf());
}

function testConstructor_516() {
  var a = new Number("-0.5");
  assertEquals(-0.5, a.valueOf());
}

function testConstructor_517() {
  var a = new Number("\n\f \t-0.5");
  assertEquals(-0.5, a.valueOf());
}

function testConstructor_518() {
  var a = new Number("-0.5\n\f \t");
  assertEquals(-0.5, a.valueOf());
}

function testConstructor_519() {
  var a = new Number("\n\f \t-0.5\n\f \t");
  assertEquals(-0.5, a.valueOf());
}

function testConstructor_520() {
  var a = new Number("-123");
  assertEquals(-123, a.valueOf());
}

function testConstructor_521() {
  var a = new Number("\n\f \t-123");
  assertEquals(-123, a.valueOf());
}

function testConstructor_522() {
  var a = new Number("-123\n\f \t");
  assertEquals(-123, a.valueOf());
}

function testConstructor_523() {
  var a = new Number("\n\f \t-123\n\f \t");
  assertEquals(-123, a.valueOf());
}

function testConstructor_524() {
  var a = new Number("-12.8");
  assertEquals(-12.8, a.valueOf());
}

function testConstructor_525() {
  var a = new Number("\n\f \t-12.8");
  assertEquals(-12.8, a.valueOf());
}

function testConstructor_526() {
  var a = new Number("-12.8\n\f \t");
  assertEquals(-12.8, a.valueOf());
}

function testConstructor_527() {
  var a = new Number("\n\f \t-12.8\n\f \t");
  assertEquals(-12.8, a.valueOf());
}

function testConstructor_528() {
  var a = new Number("-1.2e7");
  assertEquals(-1.2e7, a.valueOf());
}

function testConstructor_529() {
  var a = new Number("\n\f \t-1.2e7");
  assertEquals(-1.2e7, a.valueOf());
}

function testConstructor_530() {
  var a = new Number("-1.2e7\n\f \t");
  assertEquals(-1.2e7, a.valueOf());
}

function testConstructor_531() {
  var a = new Number("\n\f \t-1.2e7\n\f \t");
  assertEquals(-1.2e7, a.valueOf());
}

function testConstructor_532() {
  var a = new Number("-1e-7");
  assertEquals(-1e-7, a.valueOf());
}

function testConstructor_533() {
  var a = new Number("\n\f \t-1e-7");
  assertEquals(-1e-7, a.valueOf());
}

function testConstructor_534() {
  var a = new Number("-1e-7\n\f \t");
  assertEquals(-1e-7, a.valueOf());
}

function testConstructor_535() {
  var a = new Number("\n\f \t-1e-7\n\f \t");
  assertEquals(-1e-7, a.valueOf());
}

function testConstructor_536() {
  var a = new Number("-0.0000001e-1");
  assertEquals(-0.0000001e-1, a.valueOf());
}

function testConstructor_537() {
  var a = new Number("\n\f \t-0.0000001e-1");
  assertEquals(-0.0000001e-1, a.valueOf());
}

function testConstructor_538() {
  var a = new Number("-0.0000001e-1\n\f \t");
  assertEquals(-0.0000001e-1, a.valueOf());
}

function testConstructor_539() {
  var a = new Number("\n\f \t-0.0000001e-1\n\f \t");
  assertEquals(-0.0000001e-1, a.valueOf());
}

function testConstructor_540() {
  var a = new Number("-0.0000001e100");
  assertEquals(-0.0000001e100, a.valueOf());
}

function testConstructor_541() {
  var a = new Number("\n\f \t-0.0000001e100");
  assertEquals(-0.0000001e100, a.valueOf());
}

function testConstructor_542() {
  var a = new Number("-0.0000001e100\n\f \t");
  assertEquals(-0.0000001e100, a.valueOf());
}

function testConstructor_543() {
  var a = new Number("\n\f \t-0.0000001e100\n\f \t");
  assertEquals(-0.0000001e100, a.valueOf());
}

function testConstructor_544() {
  var a = new Number("-.0000001");
  assertEquals(-.0000001, a.valueOf());
}

function testConstructor_545() {
  var a = new Number("\n\f \t-.0000001");
  assertEquals(-.0000001, a.valueOf());
}

function testConstructor_546() {
  var a = new Number("-.0000001\n\f \t");
  assertEquals(-.0000001, a.valueOf());
}

function testConstructor_547() {
  var a = new Number("\n\f \t-.0000001\n\f \t");
  assertEquals(-.0000001, a.valueOf());
}

function testConstructor_548() {
  var a = new Number("-.000001e1");
  assertEquals(-.000001e1, a.valueOf());
}

function testConstructor_549() {
  var a = new Number("\n\f \t-.000001e1");
  assertEquals(-.000001e1, a.valueOf());
}

function testConstructor_550() {
  var a = new Number("-.000001e1\n\f \t");
  assertEquals(-.000001e1, a.valueOf());
}

function testConstructor_551() {
  var a = new Number("\n\f \t-.000001e1\n\f \t");
  assertEquals(-.000001e1, a.valueOf());
}

function testConstructor_552() {
  var a = new Number("-0xA");
  assertEquals(-10, a.valueOf());
}

function testConstructor_553() {
  var a = new Number("\n\f \t-0xA");
  assertEquals(-10, a.valueOf());
}

function testConstructor_554() {
  var a = new Number("-0xA\n\f \t");
  assertEquals(-10, a.valueOf());
}

function testConstructor_555() {
  var a = new Number("\n\f \t-0xA\n\f \t");
  assertEquals(-10, a.valueOf());
}

function testConstructor_556() {
  var a = new Number("-0xa");
  assertEquals(-10, a.valueOf());
}

function testConstructor_557() {
  var a = new Number("\n\f \t-0xa");
  assertEquals(-10, a.valueOf());
}

function testConstructor_558() {
  var a = new Number("-0xa\n\f \t");
  assertEquals(-10, a.valueOf());
}

function testConstructor_559() {
  var a = new Number("\n\f \t-0xa\n\f \t");
  assertEquals(-10, a.valueOf());
}

function testConstructor_560() {
  var a = new Number("-0Xa");
  assertEquals(-10, a.valueOf());
}

function testConstructor_561() {
  var a = new Number("\n\f \t-0Xa");
  assertEquals(-10, a.valueOf());
}

function testConstructor_562() {
  var a = new Number("-0Xa\n\f \t");
  assertEquals(-10, a.valueOf());
}

function testConstructor_563() {
  var a = new Number("\n\f \t-0Xa\n\f \t");
  assertEquals(-10, a.valueOf());
}

function testConstructor_564() {
  var a = new Number("-0XA");
  assertEquals(-10, a.valueOf());
}

function testConstructor_565() {
  var a = new Number("\n\f \t-0XA");
  assertEquals(-10, a.valueOf());
}

function testConstructor_566() {
  var a = new Number("-0XA\n\f \t");
  assertEquals(-10, a.valueOf());
}

function testConstructor_567() {
  var a = new Number("\n\f \t-0XA\n\f \t");
  assertEquals(-10, a.valueOf());
}

function testConstructor_568() {
  var a = new Number("-0X05");
  assertEquals(-5, a.valueOf());
}

function testConstructor_569() {
  var a = new Number("\n\f \t-0X05");
  assertEquals(-5, a.valueOf());
}

function testConstructor_570() {
  var a = new Number("-0X05\n\f \t");
  assertEquals(-5, a.valueOf());
}

function testConstructor_571() {
  var a = new Number("\n\f \t-0X05\n\f \t");
  assertEquals(-5, a.valueOf());
}

function testConstructor_572() {
  var a = new Number("-0X010");
  assertEquals(-16, a.valueOf());
}

function testConstructor_573() {
  var a = new Number("\n\f \t-0X010");
  assertEquals(-16, a.valueOf());
}

function testConstructor_574() {
  var a = new Number("-0X010\n\f \t");
  assertEquals(-16, a.valueOf());
}

function testConstructor_575() {
  var a = new Number("\n\f \t-0X010\n\f \t");
  assertEquals(-16, a.valueOf());
}

function testConstructor_576() {
  var a = new Number("-010");
  assertEquals(-10, a.valueOf());
}

function testConstructor_577() {
  var a = new Number("\n\f \t-010");
  assertEquals(-10, a.valueOf());
}

function testConstructor_578() {
  var a = new Number("-010\n\f \t");
  assertEquals(-10, a.valueOf());
}

function testConstructor_579() {
  var a = new Number("\n\f \t-010\n\f \t");
  assertEquals(-10, a.valueOf());
}

function testConstructor_580() {
  var a = new Number("-08");
  assertEquals(-8, a.valueOf());
}

function testConstructor_581() {
  var a = new Number("\n\f \t-08");
  assertEquals(-8, a.valueOf());
}

function testConstructor_582() {
  var a = new Number("-08\n\f \t");
  assertEquals(-8, a.valueOf());
}

function testConstructor_583() {
  var a = new Number("\n\f \t-08\n\f \t");
  assertEquals(-8, a.valueOf());
}

function testConstructor_584() {
  var a = new Number("-100junk");
  assertNaN(a.valueOf());
}

function testConstructor_585() {
  var a = new Number("\n\f \t-100junk");
  assertNaN(a.valueOf());
}

function testConstructor_586() {
  var a = new Number("-100junk\n\f \t");
  assertNaN(a.valueOf());
}

function testConstructor_587() {
  var a = new Number("\n\f \t-100junk\n\f \t");
  assertNaN(a.valueOf());
}

function testConstructor_588() {
  var a = new Number("-100ABC");
  assertNaN(a.valueOf());
}

function testConstructor_589() {
  var a = new Number("\n\f \t-100ABC");
  assertNaN(a.valueOf());
}

function testConstructor_590() {
  var a = new Number("-100ABC\n\f \t");
  assertNaN(a.valueOf());
}

function testConstructor_591() {
  var a = new Number("\n\f \t-100ABC\n\f \t");
  assertNaN(a.valueOf());
}

function testConstructor_592() {
  var a = new Number("-0x10junk");
  assertNaN(a.valueOf());
}

function testConstructor_593() {
  var a = new Number("\n\f \t-0x10junk");
  assertNaN(a.valueOf());
}

function testConstructor_594() {
  var a = new Number("-0x10junk\n\f \t");
  assertNaN(a.valueOf());
}

function testConstructor_595() {
  var a = new Number("\n\f \t-0x10junk\n\f \t");
  assertNaN(a.valueOf());
}

function testConstructor_596() {
  var a = new Number("-Infinityjunk");
  assertNaN(a.valueOf());
}

function testConstructor_597() {
  var a = new Number("\n\f \t-Infinityjunk");
  assertNaN(a.valueOf());
}

function testConstructor_598() {
  var a = new Number("-Infinityjunk\n\f \t");
  assertNaN(a.valueOf());
}

function testConstructor_599() {
  var a = new Number("\n\f \t-Infinityjunk\n\f \t");
  assertNaN(a.valueOf());
}
