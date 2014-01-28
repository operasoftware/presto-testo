function testArrayPrototypeExistence_0() {
  assertDefined(Array.prototype);
}

function testArrayPrototypeAttributes_0() {
  assertDontDelete(Array, "prototype");
}

function testArrayPrototypeAttributes_1() {
  assertReadOnly(Array, "prototype");
}

function testArrayPrototypeAttributes_2() {
  assertDontEnum(Array, "prototype");
}

function testArrayPrototypeConstructorExistence_0() {
  assertDefined(Array.prototype.constructor);
}

function testArrayPrototypeConstructorAttributes_0() {
  assertDelete(Array.prototype, "constructor");
}

function testArrayPrototypeConstructorAttributes_1() {
  assertReadWrite(Array.prototype, "constructor");
}

function testArrayPrototypeConstructorAttributes_2() {
  assertDontEnum(Array.prototype, "constructor");
}

function testArrayPrototypeConstructorValue_0() {
  assertEquals(Array, Array.prototype.constructor);
}

function testArrayPrototypeToStringExistence_0() {
  assertDefined(Array.prototype.toString);
}

function testArrayPrototypeToStringAttributes_0() {
  assertDelete(Array.prototype, "toString");
}

function testArrayPrototypeToStringAttributes_1() {
  assertReadWrite(Array.prototype, "toString");
}

function testArrayPrototypeToStringAttributes_2() {
  assertDontEnum(Array.prototype, "toString");
}

function testArrayPrototypeToStringPrototypeValue_0() {
  assertUndefined(Array.prototype.toString.prototype);
  assertFalse(Array.prototype.toString.hasOwnProperty("prototype"));
}

function testArrayPrototypeToStringLength_0() {
  assertEquals(0, Array.prototype.toString.length);
}

function testArrayPrototypeToStringLengthAttributes_0() {
  assertDontDelete(Array.prototype.toString, "length");
}

function testArrayPrototypeToStringLengthAttributes_1() {
  assertReadOnly(Array.prototype.toString, "length");
}

function testArrayPrototypeToStringLengthAttributes_2() {
  assertDontEnum(Array.prototype.toString, "length");
}

function testArrayPrototypeToLocaleStringExistence_0() {
  assertDefined(Array.prototype.toLocaleString);
}

function testArrayPrototypeToLocaleStringAttributes_0() {
  assertDelete(Array.prototype, "toLocaleString");
}

function testArrayPrototypeToLocaleStringAttributes_1() {
  assertReadWrite(Array.prototype, "toLocaleString");
}

function testArrayPrototypeToLocaleStringAttributes_2() {
  assertDontEnum(Array.prototype, "toLocaleString");
}

function testArrayPrototypeToLocaleStringPrototypeValue_0() {
  assertUndefined(Array.prototype.toLocaleString.prototype);
  assertFalse(Array.prototype.toLocaleString.hasOwnProperty("prototype"));
}

function testArrayPrototypeToLocaleStringLength_0() {
  assertEquals(0, Array.prototype.toLocaleString.length);
}

function testArrayPrototypeToLocaleStringLengthAttributes_0() {
  assertDontDelete(Array.prototype.toLocaleString, "length");
}

function testArrayPrototypeToLocaleStringLengthAttributes_1() {
  assertReadOnly(Array.prototype.toLocaleString, "length");
}

function testArrayPrototypeToLocaleStringLengthAttributes_2() {
  assertDontEnum(Array.prototype.toLocaleString, "length");
}

function testArrayPrototypeConcatExistence_0() {
  assertDefined(Array.prototype.concat);
}

function testArrayPrototypeConcatAttributes_0() {
  assertDelete(Array.prototype, "concat");
}

function testArrayPrototypeConcatAttributes_1() {
  assertReadWrite(Array.prototype, "concat");
}

function testArrayPrototypeConcatAttributes_2() {
  assertDontEnum(Array.prototype, "concat");
}

function testArrayPrototypeConcatPrototypeValue_0() {
  assertUndefined(Array.prototype.concat.prototype);
  assertFalse(Array.prototype.concat.hasOwnProperty("prototype"));
}

function testArrayPrototypeConcatLength_0() {
  assertEquals(1, Array.prototype.concat.length);
}

function testArrayPrototypeConcatLengthAttributes_0() {
  assertDontDelete(Array.prototype.concat, "length");
}

function testArrayPrototypeConcatLengthAttributes_1() {
  assertReadOnly(Array.prototype.concat, "length");
}

function testArrayPrototypeConcatLengthAttributes_2() {
  assertDontEnum(Array.prototype.concat, "length");
}

function testArrayPrototypeJoinExistence_0() {
  assertDefined(Array.prototype.join);
}

function testArrayPrototypeJoinAttributes_0() {
  assertDelete(Array.prototype, "join");
}

function testArrayPrototypeJoinAttributes_1() {
  assertReadWrite(Array.prototype, "join");
}

function testArrayPrototypeJoinAttributes_2() {
  assertDontEnum(Array.prototype, "join");
}

function testArrayPrototypeJoinPrototypeValue_0() {
  assertUndefined(Array.prototype.join.prototype);
  assertFalse(Array.prototype.join.hasOwnProperty("prototype"));
}

function testArrayPrototypeJoinLength_0() {
  assertEquals(1, Array.prototype.join.length);
}

function testArrayPrototypeJoinLengthAttributes_0() {
  assertDontDelete(Array.prototype.join, "length");
}

function testArrayPrototypeJoinLengthAttributes_1() {
  assertReadOnly(Array.prototype.join, "length");
}

function testArrayPrototypeJoinLengthAttributes_2() {
  assertDontEnum(Array.prototype.join, "length");
}

function testArrayPrototypePopExistence_0() {
  assertDefined(Array.prototype.pop);
}

function testArrayPrototypePopAttributes_0() {
  assertDelete(Array.prototype, "pop");
}

function testArrayPrototypePopAttributes_1() {
  assertReadWrite(Array.prototype, "pop");
}

function testArrayPrototypePopAttributes_2() {
  assertDontEnum(Array.prototype, "pop");
}

function testArrayPrototypePopPrototypeValue_0() {
  assertUndefined(Array.prototype.pop.prototype);
  assertFalse(Array.prototype.pop.hasOwnProperty("prototype"));
}

function testArrayPrototypePopLength_0() {
  assertEquals(0, Array.prototype.pop.length);
}

function testArrayPrototypePopLengthAttributes_0() {
  assertDontDelete(Array.prototype.pop, "length");
}

function testArrayPrototypePopLengthAttributes_1() {
  assertReadOnly(Array.prototype.pop, "length");
}

function testArrayPrototypePopLengthAttributes_2() {
  assertDontEnum(Array.prototype.pop, "length");
}

function testArrayPrototypePushExistence_0() {
  assertDefined(Array.prototype.push);
}

function testArrayPrototypePushAttributes_0() {
  assertDelete(Array.prototype, "push");
}

function testArrayPrototypePushAttributes_1() {
  assertReadWrite(Array.prototype, "push");
}

function testArrayPrototypePushAttributes_2() {
  assertDontEnum(Array.prototype, "push");
}

function testArrayPrototypePushPrototypeValue_0() {
  assertUndefined(Array.prototype.push.prototype);
  assertFalse(Array.prototype.push.hasOwnProperty("prototype"));
}

function testArrayPrototypePushLength_0() {
  assertEquals(1, Array.prototype.push.length);
}

function testArrayPrototypePushLengthAttributes_0() {
  assertDontDelete(Array.prototype.push, "length");
}

function testArrayPrototypePushLengthAttributes_1() {
  assertReadOnly(Array.prototype.push, "length");
}

function testArrayPrototypePushLengthAttributes_2() {
  assertDontEnum(Array.prototype.push, "length");
}

function testArrayPrototypeReverseExistence_0() {
  assertDefined(Array.prototype.reverse);
}

function testArrayPrototypeReverseAttributes_0() {
  assertDelete(Array.prototype, "reverse");
}

function testArrayPrototypeReverseAttributes_1() {
  assertReadWrite(Array.prototype, "reverse");
}

function testArrayPrototypeReverseAttributes_2() {
  assertDontEnum(Array.prototype, "reverse");
}

function testArrayPrototypeReversePrototypeValue_0() {
  assertUndefined(Array.prototype.reverse.prototype);
  assertFalse(Array.prototype.reverse.hasOwnProperty("prototype"));
}

function testArrayPrototypeReverseLength_0() {
  assertEquals(0, Array.prototype.reverse.length);
}

function testArrayPrototypeReverseLengthAttributes_0() {
  assertDontDelete(Array.prototype.reverse, "length");
}

function testArrayPrototypeReverseLengthAttributes_1() {
  assertReadOnly(Array.prototype.reverse, "length");
}

function testArrayPrototypeReverseLengthAttributes_2() {
  assertDontEnum(Array.prototype.reverse, "length");
}

function testArrayPrototypeShiftExistence_0() {
  assertDefined(Array.prototype.shift);
}

function testArrayPrototypeShiftAttributes_0() {
  assertDelete(Array.prototype, "shift");
}

function testArrayPrototypeShiftAttributes_1() {
  assertReadWrite(Array.prototype, "shift");
}

function testArrayPrototypeShiftAttributes_2() {
  assertDontEnum(Array.prototype, "shift");
}

function testArrayPrototypeShiftPrototypeValue_0() {
  assertUndefined(Array.prototype.shift.prototype);
  assertFalse(Array.prototype.shift.hasOwnProperty("prototype"));
}

function testArrayPrototypeShiftLength_0() {
  assertEquals(0, Array.prototype.shift.length);
}

function testArrayPrototypeShiftLengthAttributes_0() {
  assertDontDelete(Array.prototype.shift, "length");
}

function testArrayPrototypeShiftLengthAttributes_1() {
  assertReadOnly(Array.prototype.shift, "length");
}

function testArrayPrototypeShiftLengthAttributes_2() {
  assertDontEnum(Array.prototype.shift, "length");
}

function testArrayPrototypeSliceExistence_0() {
  assertDefined(Array.prototype.slice);
}

function testArrayPrototypeSliceAttributes_0() {
  assertDelete(Array.prototype, "slice");
}

function testArrayPrototypeSliceAttributes_1() {
  assertReadWrite(Array.prototype, "slice");
}

function testArrayPrototypeSliceAttributes_2() {
  assertDontEnum(Array.prototype, "slice");
}

function testArrayPrototypeSlicePrototypeValue_0() {
  assertUndefined(Array.prototype.slice.prototype);
  assertFalse(Array.prototype.slice.hasOwnProperty("prototype"));
}

function testArrayPrototypeSliceLength_0() {
  assertEquals(2, Array.prototype.slice.length);
}

function testArrayPrototypeSliceLengthAttributes_0() {
  assertDontDelete(Array.prototype.slice, "length");
}

function testArrayPrototypeSliceLengthAttributes_1() {
  assertReadOnly(Array.prototype.slice, "length");
}

function testArrayPrototypeSliceLengthAttributes_2() {
  assertDontEnum(Array.prototype.slice, "length");
}

function testArrayPrototypeSortExistence_0() {
  assertDefined(Array.prototype.sort);
}

function testArrayPrototypeSortAttributes_0() {
  assertDelete(Array.prototype, "sort");
}

function testArrayPrototypeSortAttributes_1() {
  assertReadWrite(Array.prototype, "sort");
}

function testArrayPrototypeSortAttributes_2() {
  assertDontEnum(Array.prototype, "sort");
}

function testArrayPrototypeSortPrototypeValue_0() {
  assertUndefined(Array.prototype.sort.prototype);
  assertFalse(Array.prototype.sort.hasOwnProperty("prototype"));
}

function testArrayPrototypeSortLength_0() {
  assertEquals(1, Array.prototype.sort.length);
}

function testArrayPrototypeSortLengthAttributes_0() {
  assertDontDelete(Array.prototype.sort, "length");
}

function testArrayPrototypeSortLengthAttributes_1() {
  assertReadOnly(Array.prototype.sort, "length");
}

function testArrayPrototypeSortLengthAttributes_2() {
  assertDontEnum(Array.prototype.sort, "length");
}

function testArrayPrototypeSpliceExistence_0() {
  assertDefined(Array.prototype.splice);
}

function testArrayPrototypeSpliceAttributes_0() {
  assertDelete(Array.prototype, "splice");
}

function testArrayPrototypeSpliceAttributes_1() {
  assertReadWrite(Array.prototype, "splice");
}

function testArrayPrototypeSpliceAttributes_2() {
  assertDontEnum(Array.prototype, "splice");
}

function testArrayPrototypeSplicePrototypeValue_0() {
  assertUndefined(Array.prototype.splice.prototype);
  assertFalse(Array.prototype.splice.hasOwnProperty("prototype"));
}

function testArrayPrototypeSpliceLength_0() {
  assertEquals(2, Array.prototype.splice.length);
}

function testArrayPrototypeSpliceLengthAttributes_0() {
  assertDontDelete(Array.prototype.splice, "length");
}

function testArrayPrototypeSpliceLengthAttributes_1() {
  assertReadOnly(Array.prototype.splice, "length");
}

function testArrayPrototypeSpliceLengthAttributes_2() {
  assertDontEnum(Array.prototype.splice, "length");
}

function testArrayPrototypeUnshiftExistence_0() {
  assertDefined(Array.prototype.unshift);
}

function testArrayPrototypeUnshiftAttributes_0() {
  assertDelete(Array.prototype, "unshift");
}

function testArrayPrototypeUnshiftAttributes_1() {
  assertReadWrite(Array.prototype, "unshift");
}

function testArrayPrototypeUnshiftAttributes_2() {
  assertDontEnum(Array.prototype, "unshift");
}

function testArrayPrototypeUnshiftPrototypeValue_0() {
  assertUndefined(Array.prototype.unshift.prototype);
  assertFalse(Array.prototype.unshift.hasOwnProperty("prototype"));
}

function testArrayPrototypeUnshiftLength_0() {
  assertEquals(1, Array.prototype.unshift.length);
}

function testArrayPrototypeUnshiftLengthAttributes_0() {
  assertDontDelete(Array.prototype.unshift, "length");
}

function testArrayPrototypeUnshiftLengthAttributes_1() {
  assertReadOnly(Array.prototype.unshift, "length");
}

function testArrayPrototypeUnshiftLengthAttributes_2() {
  assertDontEnum(Array.prototype.unshift, "length");
}