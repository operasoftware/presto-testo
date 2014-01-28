function testProperties_0() {
  assertDefined(Math.E);
}

function testProperties_1() {
  assertDefined(Math.LN10);
}

function testProperties_2() {
  assertDefined(Math.LN2);
}

function testProperties_3() {
  assertDefined(Math.LOG2E);
}

function testProperties_4() {
  assertDefined(Math.LOG10E);
}

function testProperties_5() {
  assertDefined(Math.PI);
}

function testProperties_6() {
  assertDefined(Math.SQRT1_2);
}

function testProperties_7() {
  assertDefined(Math.SQRT2);
}

function testProperties_8() {
  assertDefined(Math.abs);
}

function testProperties_9() {
  assertDefined(Math.acos);
}

function testProperties_10() {
  assertDefined(Math.asin);
}

function testProperties_11() {
  assertDefined(Math.atan);
}

function testProperties_12() {
  assertDefined(Math.atan2);
}

function testProperties_13() {
  assertDefined(Math.ceil);
}

function testProperties_14() {
  assertDefined(Math.cos);
}

function testProperties_15() {
  assertDefined(Math.exp);
}

function testProperties_16() {
  assertDefined(Math.floor);
}

function testProperties_17() {
  assertDefined(Math.log);
}

function testProperties_18() {
  assertDefined(Math.max);
}

function testProperties_19() {
  assertDefined(Math.min);
}

function testProperties_20() {
  assertDefined(Math.pow);
}

function testProperties_21() {
  assertDefined(Math.random);
}

function testProperties_22() {
  assertDefined(Math.round);
}

function testProperties_23() {
  assertDefined(Math.sin);
}

function testProperties_24() {
  assertDefined(Math.sqrt);
}

function testProperties_25() {
  assertDefined(Math.tan);
}

function testE_0() {
  assertDontEnum(Math, "E");
}

function testE_1() {
  assertDontDelete(Math, "E");
}

function testE_2() {
  assertReadOnly(Math, "E");
}

function testE_3() {
  assertApproxEquals(Math.exp(1), Math.E);
}

function testLN10_0() {
  assertDontEnum(Math, "LN10");
}

function testLN10_1() {
  assertDontDelete(Math, "LN10");
}

function testLN10_2() {
  assertReadOnly(Math, "LN10");
}

function testLN10_3() {
  assertApproxEquals(Math.log(10), Math.LN10);
}

function testLN2_0() {
  assertDontEnum(Math, "LN2");
}

function testLN2_1() {
  assertDontDelete(Math, "LN2");
}

function testLN2_2() {
  assertReadOnly(Math, "LN2");
}

function testLN2_3() {
  assertApproxEquals(Math.log(2), Math.LN2);
}



function testAbs_0() {
  assertEquals(1, Math.abs(-1));
}

function testAbs_1() {
  assertEquals(1, Math.abs(1));
}

function testAbs_2() {
  assertNaN(Math.abs(NaN));
}

function testAbs_3() {
  assertEquals(Number.POSITIVE_INFINITY,
	       Math.abs(Number.NEGATIVE_INFINITY));
}

function testAbs_4() {
  assertEquals(0, Math.abs(-0));
}

function testAcos_0() {
  assertEquals(0.0, Math.acos(1));
}

function testAcos_1() {
  assertApproxEquals(Math.PI/2, Math.acos(0));
}

function testAcos_2() {
  assertApproxEquals(Math.PI, Math.acos(-1));
}

function testAcos_3() {
  assertNaN(Math.acos(1.1));
}

function testAcos_4() {
  assertNaN(Math.acos(-1.1));
}

function testAsin_0() {
  assertApproxEquals(Math.PI/2.0, Math.asin(1));
}

function testAsin_1() {
  assertEquals(0, Math.asin(0));
}

function testAsin_2() {
  assertApproxEquals(-Math.PI/2., Math.asin(-1));
}

function testAsin_3() {
  assertNaN(Math.asin(NaN));
}

function testAsin_4() {
  assertNaN(Math.asin(1.1));
}

function testAsin_5() {
  assertNaN(Math.asin(-1.1));
}

function testAsin_6() {
  assertEquals(-0, Math.asin(-0));
}

function testAtan_0() {
  assertEquals(Math.PI/4, Math.atan(1));
}

function testAtan_1() {
  assertEquals(0, Math.atan(0));
}

function testAtan_2() {
  assertApproxEquals(Math.PI/2, Math.atan(Number.POSITIVE_INFINITY));
}

function testAtan_3() {
  assertApproxEquals(-Math.PI/2, Math.atan(Number.NEGATIVE_INFINITY));
}

function testAtan_4() {
  assertNaN(Math.atan(NaN));
}

function testAtan_5() {
  assertEquals(-0, Math.atan(-0));
}

function testAtan2_0() {
  assertEquals(Math.PI/4, Math.atan2(0.5,0.5));
}

function testAtan2_1() {
  assertNaN(Math.atan2(0, NaN));
}

function testAtan2_2() {
  assertNaN(Math.atan2(NaN, 1));
}

function testAtan2_3() {
  assertApproxEquals(Math.pi/2, Math.atan2(1, 0));
}

function testAtan2_4() {
  assertApproxEquals(Math.pi/2, Math.atan2(1E8, 0));
}

function testAtan2_4() {
  assertEquals(0, Math.atan2(0, 1));
}

function testAtan_5() {
  assertEquals(0, Math.atan2(0, 1E8));
}

function testAtan_6() {
  assertEquals(0, Math.atan2(0, 1E8));
}

function testAtan2_7() {
  assertEquals(0, Math.atan2(0, 1E8));
}

function testAtan2_8() {
  assertEquals(0, Math.atan2(0,0));
}

function testAtan2_9() {
  assertApproxEquals(Math.PI, Math.atan2(0,-0));
}

function testAtan2_10() {
  assertApproxEquals(Math.PI, Math.atan2(0,-1));
}

function testAtan2_11() {
  assertApproxEquals(Math.PI, Math.atan2(0,-1E8));
}

function testAtan2_12() {
  assertEquals(-0, Math.atan2(-0,1));
}

function testAtan2_13() {
  assertEquals(-0, Math.atan2(-0,0));
}

function testAtan2_14() {
  assertApproxEquals(-Math.PI, Math.atan2(-0,-0));
}

function testAtan2_15() {
  assertApproxEquals(-Math.PI, Math.atan2(-0,-3));
}

function testAtan2_16() {
  assertApproxEquals(-Math.PI, Math.atan2(-0,-3));
}

function testAtan2_17() {
  assertApproxEquals(-Math.pi/2., Math.atan2(-3, 0));
}

function testAtan2_18() {
  assertApproxEquals(-Math.pi/2., Math.atan2(-3, -0));
}

function testAtan2_19() {
  assertEquals(0, Math.atan2(1.7, Number.POSITIVE_INFINITY));
}

function testAtan2_20() {
  assertApproxEquals(Math.PI, Math.atan2(1.7, Number.NEGATIVE_INFINITY));
}

function testAtan2_21() {
  assertEquals(-0,
	       Math.atan2(-1.7, Number.POSITIVE_INFINITY));
}

function testAtan2_22() {
  assertApproxEquals(-Math.PI,
		     Math.atan2(-1.7, Number.NEGATIVE_INFINITY));
}

function testAtan2_23() {
  assertApproxEquals(Math.PI/2., Math.atan2(Number.POSITIVE_INFINITY,
					   42));
}

function testAtan2_24() {
  assertApproxEquals(-Math.PI/2., Math.atan2(Number.NEGATIVE_INFINITY,
					   42));
}

function testAtan2_25() {
  assertApproxEquals(Math.PI/4., Math.atan2(Number.POSITIVE_INFINITY,
					    Number.POSITIVE_INFINITY));
}

function testAtan2_26() {
  assertApproxEquals(3*Math.PI/4., Math.atan2(Number.POSITIVE_INFINITY,
					      Number.NEGATIVE_INFINITY));
}

function testAtan2_27() {
  assertApproxEquals(-Math.PI/4., Math.atan2(Number.NEGATIVE_INFINITY,
					     Number.POSITIVE_INFINITY));
}

function testAtan2_28() {
  assertApproxEquals(-3*Math.PI/4., Math.atan2(Number.NEGATIVE_INFINITY,
					       Number.NEGATIVE_INFINITY));
}

function testCeil_0() {
  assertEquals(1, Math.ceil(0.5));
}

function testCeil_1() {
  assertEquals(-0, Math.ceil(-0.5));
}

function testCeil_2() {
  assertNaN(Math.ceil(NaN));
}

function testCeil_3() {
  assertEquals(0, Math.ceil(0));
}

function testCeil_4() {
  assertEquals(-0, Math.ceil(-0));
}

function testCeil_5() {
  assertEquals(Number.POSITIVE_INFINITY, Math.ceil(Number.POSITIVE_INFINITY));
}

function testCeil_6() {
  assertEquals(Number.NEGATIVE_INFINITY, Math.ceil(Number.NEGATIVE_INFINITY));
}

function testCeil_7() {
  assertEquals(-0, Math.ceil(-0.8));
}

function testCos_0() {
  assertEquals(-1, Math.cos(Math.PI));
}

function testCos_1() {
  assertNaN(Math.cos(NaN));
}

function testCos_2() {
  assertEquals(1, Math.cos(0));
}

function testCos_2() {
  assertEquals(1, Math.cos(-0));
}

function testCos_3() {
  assertApproxEquals(0, Math.cos(Math.PI/2));
}

function testCos_4() {
  assertApproxEquals(-1, Math.cos(Math.PI));
}

function testCos_5() {
  assertNaN(Math.cos(Number.POSITIVE_INFINITY));
}

function testCos_6() {
  assertNaN(Math.cos(Number.NEGATIVE_INFINITY));
}

function testExp_0() {
  assertNaN(Math.exp(NaN));
}

function testExp_1() {
  assertEquals(1, Math.exp(0));
}

function testExp_2() {
  assertEquals(1, Math.exp(-0));
}

function testExp_3() {
  assertEquals(Number.POSITIVE_INFINITY, Math.exp(Number.POSITIVE_INFINITY));
}

function testExp_4() {
  assertEquals(0, Math.exp(Number.NEGATIVE_INFINITY));
}

function testFloor_0() {
  assertEquals(0.0, Math.floor(0.5));
}

function testFloor_1() {
  assertNaN(Math.floor(NaN));
}

function testFloor_2() {
  assertEquals(0, Math.floor(0));
}

function testFloor_3() {
  assertEquals(-0, Math.floor(-0));
}

function testFloor_4() {
  assertEquals(Number.POSITIVE_INFINITY, Math.floor(Number.POSITIVE_INFINITY));
}

function testFloor_5() {
  assertEquals(Number.NEGATIVE_INFINITY, Math.floor(Number.NEGATIVE_INFINITY));
}

function testFloor_6() {
  assertEquals(-1.0, Math.floor(-0.5));
}

function testLog_0() {
  assertApproxEquals(1, Math.log(Math.E));
}

function TestLog_1() {
  assertNaN(Math.log(NaN));
}

function testLog_2() {
  assertNaN(Math.log(-1E-5));
}

function testLog_3() {
  assertEquals(Number.NEGATIVE_INFINITY, Math.log(0));
}

function testLog_4() {
  assertEquals(Number.NEGATIVE_INFINITY, Math.log(-0));
}

function testLog_5() {
  assertEquals(0, Math.log(1));
}

function testLog_6() {
  assertEquals(Number.POSITIVE_INFINITY, Math.log(Number.POSITIVE_INFINITY));
}

function testMax_0() {
  assertEquals(-Infinity, Math.max());
}

function testMax_1() {
  assertEquals(10, Math.max(10));
}

function testMax_2() {
  assertEquals(1, Math.max(-1,0,1));
}

function testMax_3() {
  assertNaN(Math.max(10,NaN,15));
}

function testMax_4() {
  assertEquals(1, Math.max(1,-Infinity));
}

function testMax_5() {
  assertEquals(Infinity, Math.max(1,Infinity));
}

function testMax_6() {
  assertEquals(0, Math.max(0, -0));
}

function testMax_7() {
  assertEquals(Number.NEGATIVE_INFINITY, Math.max());
}

function testMax_8() {
  assertEquals(2, Math.max.length);
}

function testMax_9() {
  assertEquals(0, Math.max(-0, 0));
}

function testMax_10() {
  assertNaN(Math.max.apply(null, [/abc/, function(){}]));
}
testMax_10.metadata = {
  bug:"CORE-39723"
};

function testMax_11() {
  assertNaN(Math.max.apply(null, [function(){}, 1]));
}
testMax_11.metadata = {
  bug:"CORE-39723"
};

function testMax_12() {
  assertNaN(Math.max.apply(null, [1, function(){}]));
}
testMax_12.metadata = {
  bug:"CORE-39723"
};

function testMax_13() {
  assertNaN(Math.max(/abc/, function(){}));
}
testMax_13.metadata = {
  bug:"CORE-39723"
};

function testMax_14() {
  assertNaN(Math.max(function(){}, 1));
}
testMax_14.metadata = {
  bug:"CORE-39723"
};

function testMax_15() {
  assertNaN(Math.max(1, function(){}));
}
testMax_15.metadata = {
  bug:"CORE-39723"
};

function testMax_16() {
  assertNaN(Math.max.call(null, /abc/, function(){}));
}
testMax_16.metadata = {
  bug:"CORE-39723"
};

function testMax_17() {
  assertNaN(Math.max.call(null, function(){}, 1));
}
testMax_17.metadata = {
  bug:"CORE-39723"
};

function testMax_18() {
  assertNaN(Math.max.call(null, 1, function(){}));
}
testMax_18.metadata = {
  bug:"CORE-39723"
};

function testMin_0() {
  assertEquals(Infinity, Math.min());
}

function testMin_1() {
  assertEquals(10, Math.min(10));
}

function testMin_2() {
  assertEquals(-1, Math.min(-1,0,1));
}

function testMin_3() {
  assertNaN(Math.min(10,NaN,5));
}

function testMin_4() {
  assertEquals(1, Math.min(1,Infinity));
}

function testMin_5() {
  assertEquals(-Infinity, Math.min(1,-Infinity));
}

function testMin_6() {
  assertEquals(-0, Math.min(-0, 0));
}
testMin_6.metadata = {
  bug:"CARAKAN-145"
};

function testMin_7() {
  assertEquals(Number.POSITIVE_INFINITY, Math.min());
}

function testMin_8() {
  assertEquals(2, Math.min.length);
}

function testMin_9() {
  assertNaN(Math.min.apply(null, [/abc/, function(){}]));
}
testMin_9.metadata = {
  bug:"CORE-39723"
};

function testMin_10() {
  assertEquals(-0, Math.min(0, -0));
}

function testMin_11() {
  assertNaN(Math.min.apply(null, [function(){}, 1]));
}
testMin_11.metadata = {
  bug:"CORE-39723"
};

function testMin_12() {
  assertNaN(Math.min.apply(null, [1, function(){}]));
}
testMin_12.metadata = {
  bug:"CORE-39723"
};

function testMin_13() {
  assertNaN(Math.min(/abc/, function(){}));
}
testMin_13.metadata = {
  bug:"CORE-39723"
};

function testMin_14() {
  assertNaN(Math.min(function(){}, 1));
}
testMin_14.metadata = {
  bug:"CORE-39723"
};

function testMin_15() {
  assertNaN(Math.min(1, function(){}));
}
testMin_15.metadata = {
  bug:"CORE-39723"
};

function testMin_16() {
  assertNaN(Math.min.call(null, /abc/, function(){}));
}
testMin_16.metadata = {
  bug:"CORE-39723"
};

function testMin_17() {
  assertNaN(Math.min.call(null, function(){}, 1));
}
testMin_17.metadata = {
  bug:"CORE-39723"
};

function testMin_18() {
  assertNaN(Math.min.call(null, 1, function(){}));
}
testMin_18.metadata = {
  bug:"CORE-39723"
};

function testPow_0() {
  assertEquals(0x100000000, Math.pow(2,32));
}

function testPow_1() {
  assertNaN(Math.pow(1, NaN));
}
testPow_1.metadata = {
  bug:"CARAKAN-159"
};

function testPow_2() {
  assertEquals(1, Math.pow(17.3, 0));
}

function testPow_3() {
  assertEquals(1, Math.pow(NaN, 0));
}

function testPow_4() {
  assertEquals(1, Math.pow(Number.POSITIVE_INFINITY, 0));
}

function testPow_5() {
  assertEquals(1, Math.pow(Number.NEGATIVE_INFINITY, 0));
}

function testPow_6() {
  assertEquals(1, Math.pow(17.3, -0));
}

function testPow_7() {
  assertEquals(1, Math.pow(NaN, -0));
}

function testPow_8() {
  assertEquals(1, Math.pow(Number.POSITIVE_INFINITY, -0));
}

function testPow_9() {
  assertEquals(1, Math.pow(Number.NEGATIVE_INFINITY, -0));
}

function testPow_10() {
  assertNaN(Math.pow(NaN, 1));
}

function testPow_11() {
  assertNaN(Math.pow(NaN, Number.POSITIVE_INFINITY));
}

function testPow_12() {
  assertEquals(Number.POSITIVE_INFINITY, Math.pow(1.1, Number.POSITIVE_INFINITY));
}

function testPow_13() {
    assertEquals(0, Math.pow(1.1, Number.NEGATIVE_INFINITY));
}

function testPow_14() {
  assertNaN(Math.pow(1, Number.POSITIVE_INFINITY));
}
testPow_14.metadata = {
  bug:"CARAKAN-146"
};

function testPow_15() {
  assertNaN(Math.pow(-1, Number.POSITIVE_INFINITY));
}
testPow_14.metadata = {
  bug:"CARAKAN-146"
};

function testPow_16() {
  assertNaN(Math.pow(1, Number.NEGATIVE_INFINITY));
}
testPow_14.metadata = {
  bug:"CARAKAN-146"
};

function testPow_17() {
  assertNaN(Math.pow(-1, Number.NEGATIVE_INFINITY));
}
testPow_14.metadata = {
  bug:"CARAKAN-146"
};

function testPow_18() {
  assertEquals(0, Math.pow(0.9, Number.POSITIVE_INFINITY));
}

function testPow_19() {
  assertEquals(0, Math.pow(-0.9, Number.POSITIVE_INFINITY));
}

function testPow_20() {
  assertEquals(Number.POSITIVE_INFINITY,
	       Math.pow(0.9, Number.NEGATIVE_INFINITY));
}

function testPow_21() {
  assertEquals(Number.POSITIVE_INFINITY,
	       Math.pow(-0.9, Number.NEGATIVE_INFINITY));
}

function testPow_22() {
  assertEquals(Number.POSITIVE_INFINITY,
	       Math.pow(Number.POSITIVE_INFINITY, 0.1));
};

function testPow_23() {
  assertEquals(Number.NEGATIVE_INFINITY,
	       Math.pow(Number.NEGATIVE_INFINITY, 3));
}

function testPow_23() {
  assertEquals(Number.POSITIVE_INFINITY,
	       Math.pow(Number.NEGATIVE_INFINITY, 3.1));
}

function testPow_24() {
  assertEquals(Number.POSITIVE_INFINITY,
	       Math.pow(Number.NEGATIVE_INFINITY, 2));
}

function testPow_24() {
  assertEquals(Number.POSITIVE_INFINITY,
	       Math.pow(Number.NEGATIVE_INFINITY, 2));
}

function testPow_25() {
  assertEquals(0, Math.pow(0, 1));
}

function testPow_26() {
  assertEquals(Number.POSITIVE_INFINITY, Math.pow(0, -1));
}

function testPow_27() {
  assertEquals(-0, Math.pow(-0, 3));
}

function testPow_28() {
  assertEquals(0, Math.pow(-0, 2));
}

function testPow_29() {
  assertEquals(0, Math.pow(-0, 3.3));
}

function testPow_30() {
  assertNaN(Math.pow(-1, 2.1));
}

function testPow_31() {
  assertNaN(Math.pow(-0.5, Number.MIN_VALUE));
}

function testPow_32() {
  assertEquals(0.0, Math.pow(-0.5, Number.MAX_VALUE));
}

function testPow_33() {
  assertNaN(Math.pow(-1.12, Number.MIN_VALUE));
}

function testPow_34() {
  assertEquals(Infinity, Math.pow(-1.12, Number.MAX_VALUE));
}

function testPow_35() {
  assertEquals(-2147483648, -Math.pow(2, 31));
}
testPow_35.metadata = {
  bug:"DSK-319414"
};

function testRound_0() {
  assertEquals(2.0, Math.round(1.5));
}

function testRound_1() {
  assertEquals(1.0, Math.round(0.5));
}

function testRound_2() {
  assertEquals(-2.0, Math.round(-1.9));
}

function testRound_1() {
  assertNaN(Math.round(NaN));
}

function testRound_2() {
  assertEquals(0, Math.round(0));
}

function testRound_3() {
  assertEquals(-0, Math.round(-0));
}

function testRound_4() {
  assertEquals(Number.POSITIVE_INFINITY, Math.round(Number.POSITIVE_INFINITY));
}

function testRound_5() {
  assertEquals(Number.NEGATIVE_INFINITY,
	       Math.round(Number.NEGATIVE_INFINITY));
}

function testRound_6() {
  assertEquals(0, Math.round(0.4));
}

function testRound_7() {
  assertEquals(-0, Math.round(-0.4));
}

function testRound_8() {
  assertEquals(-3, Math.round(-3.5));
}

function testRound_9() {
  assertEquals(4, Math.round(3.5));
}

function testRound_10() {
  assertEquals(4503599627370497, Math.round(Math.pow(2,52) + 1));
  assertEquals(9007199254740992, Math.round(Math.pow(2,53)));
  assertEquals(9007199254740991, Math.round(Math.pow(2,53) - 1));
}
testRound_10.metadata = {
  bug:"CORE-49071"
};

function testSin_0() {
  assertEquals(1, Math.sin(Math.PI/2));
}

function testSin_1() {
  assertNaN(Math.sin(NaN));
}

function testSin_2() {
  assertEquals(0, Math.sin(0));
}

function testSin_3() {
  assertEquals(-0, Math.sin(-0));
}

function testSin_4() {
  assertNaN(Math.sin(Number.POSITIVE_INFINITY));
}

function testSin_5() {
  assertNaN(Math.sin(Number.NEGATIVE_INFINITY));
}

function testSin_6() {
  assertApproxEquals(1, Math.sin(Math.PI/2));
}

function testSin_7() {
  assertApproxEquals(0, Math.sin(Math.PI));
}

function testSin_8() {
  assertApproxEquals(-1, Math.sin(3*Math.PI/2.));
}

function testSqrt_0() {
  assertEquals(2, Math.sqrt(4));
}

function testSqrt_1() {
  assertNaN(Math.sqrt(NaN));
}

function testSqrt_2() {
  assertNaN(Math.sqrt(-1));
}

function testSqrt_3() {
  assertEquals(0, Math.sqrt(0));
}

function testSqrt_4() {
  assertEquals(-0, Math.sqrt(-0));
}

function testSqrt_5() {
  assertEquals(Number.POSITIVE_INFINITY,
	       Math.sqrt(Number.POSITIVE_INFINITY));
}

function testSqrt_6() {
  assertNaN(Math.sqrt(Number.NEGATIVE_INFINITY));
}

function testTan_0() {
  assertNaN(Math.tan(NaN));
}

function testTan_1() {
  assertEquals(0, Math.tan(0));
}

function testTan_2() {
  assertEquals(-0, Math.tan(-0));
}

function testTan_3() {
  assertNaN(Math.tan(Number.POSITIVE_INFINITY));
}

function testTan_4() {
  assertNaN(Math.tan(Number.NEGATIVE_INFINITY));
}

function testTan_5() {
  assertApproxEquals(1, Math.tan(Math.pi/4));
}
