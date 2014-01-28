function testDatePrototypeExistence_0() {
  assertDefined(Date.prototype);
}

function testDatePrototypeAttributes_0() {
  assertDontDelete(Date, "prototype");
}

function testDatePrototypeAttributes_1() {
  assertReadOnly(Date, "prototype");
}

function testDatePrototypeAttributes_2() {
  assertDontEnum(Date, "prototype");
}

function testDateParseExistence_0() {
  assertDefined(Date.parse);
}

function testDateParseAttributes_0() {
  assertDelete(Date, "parse");
}

function testDateParseAttributes_1() {
  assertReadWrite(Date, "parse");
}

function testDateParseAttributes_2() {
  assertDontEnum(Date, "parse");
}

function testDateParsePrototypeValue_0() {
  assertUndefined(Date.parse.prototype);
  assertFalse(Date.parse.hasOwnProperty("prototype"));
}

function testDateParseLength_0() {
  assertEquals(1, Date.parse.length);
}

function testDateParseLengthAttributes_0() {
  assertDontDelete(Date.parse, "length");
}

function testDateParseLengthAttributes_1() {
  assertReadOnly(Date.parse, "length");
}

function testDateParseLengthAttributes_2() {
  assertDontEnum(Date.parse, "length");
}

function testDateUTCExistence_0() {
  assertDefined(Date.UTC);
}

function testDateUTCAttributes_0() {
  assertDelete(Date, "UTC");
}

function testDateUTCAttributes_1() {
  assertReadWrite(Date, "UTC");
}

function testDateUTCAttributes_2() {
  assertDontEnum(Date, "UTC");
}

function testDateUTCPrototypeValue_0() {
  assertUndefined(Date.UTC.prototype);
  assertFalse(Date.UTC.hasOwnProperty("prototype"));
}

function testDateUTCLength_0() {
  assertEquals(7, Date.UTC.length);
}

function testDateUTCLengthAttributes_0() {
  assertDontDelete(Date.UTC, "length");
}

function testDateUTCLengthAttributes_1() {
  assertReadOnly(Date.UTC, "length");
}

function testDateUTCLengthAttributes_2() {
  assertDontEnum(Date.UTC, "length");
}

function testDatePrototypeConstructorExistence_0() {
  assertDefined(Date.prototype.constructor);
}

function testDatePrototypeConstructorAttributes_0() {
  assertDelete(Date.prototype, "constructor");
}

function testDatePrototypeConstructorAttributes_1() {
  assertReadWrite(Date.prototype, "constructor");
}

function testDatePrototypeConstructorAttributes_2() {
  assertDontEnum(Date.prototype, "constructor");
}

function testDatePrototypeConstructorValue_0() {
  assertEquals(Date, Date.prototype.constructor);
}

function testDatePrototypeToStringExistence_0() {
  assertDefined(Date.prototype.toString);
}

function testDatePrototypeToStringAttributes_0() {
  assertDelete(Date.prototype, "toString");
}

function testDatePrototypeToStringAttributes_1() {
  assertReadWrite(Date.prototype, "toString");
}

function testDatePrototypeToStringAttributes_2() {
  assertDontEnum(Date.prototype, "toString");
}

function testDatePrototypeToStringPrototypeValue_0() {
  assertUndefined(Date.prototype.toString.prototype);
  assertFalse(Date.prototype.toString.hasOwnProperty("prototype"));
}

function testDatePrototypeToStringLength_0() {
  assertEquals(0, Date.prototype.toString.length);
}

function testDatePrototypeToStringLengthAttributes_0() {
  assertDontDelete(Date.prototype.toString, "length");
}

function testDatePrototypeToStringLengthAttributes_1() {
  assertReadOnly(Date.prototype.toString, "length");
}

function testDatePrototypeToStringLengthAttributes_2() {
  assertDontEnum(Date.prototype.toString, "length");
}

function testDatePrototypeToDateStringExistence_0() {
  assertDefined(Date.prototype.toDateString);
}

function testDatePrototypeToDateStringAttributes_0() {
  assertDelete(Date.prototype, "toDateString");
}

function testDatePrototypeToDateStringAttributes_1() {
  assertReadWrite(Date.prototype, "toDateString");
}

function testDatePrototypeToDateStringAttributes_2() {
  assertDontEnum(Date.prototype, "toDateString");
}

function testDatePrototypeToDateStringPrototypeValue_0() {
  assertUndefined(Date.prototype.toDateString.prototype);
  assertFalse(Date.prototype.toDateString.hasOwnProperty("prototype"));
}

function testDatePrototypeToDateStringLength_0() {
  assertEquals(0, Date.prototype.toDateString.length);
}

function testDatePrototypeToDateStringLengthAttributes_0() {
  assertDontDelete(Date.prototype.toDateString, "length");
}

function testDatePrototypeToDateStringLengthAttributes_1() {
  assertReadOnly(Date.prototype.toDateString, "length");
}

function testDatePrototypeToDateStringLengthAttributes_2() {
  assertDontEnum(Date.prototype.toDateString, "length");
}

function testDatePrototypeToTimeStringExistence_0() {
  assertDefined(Date.prototype.toTimeString);
}

function testDatePrototypeToTimeStringAttributes_0() {
  assertDelete(Date.prototype, "toTimeString");
}

function testDatePrototypeToTimeStringAttributes_1() {
  assertReadWrite(Date.prototype, "toTimeString");
}

function testDatePrototypeToTimeStringAttributes_2() {
  assertDontEnum(Date.prototype, "toTimeString");
}

function testDatePrototypeToTimeStringPrototypeValue_0() {
  assertUndefined(Date.prototype.toTimeString.prototype);
  assertFalse(Date.prototype.toTimeString.hasOwnProperty("prototype"));
}

function testDatePrototypeToTimeStringLength_0() {
  assertEquals(0, Date.prototype.toTimeString.length);
}

function testDatePrototypeToTimeStringLengthAttributes_0() {
  assertDontDelete(Date.prototype.toTimeString, "length");
}

function testDatePrototypeToTimeStringLengthAttributes_1() {
  assertReadOnly(Date.prototype.toTimeString, "length");
}

function testDatePrototypeToTimeStringLengthAttributes_2() {
  assertDontEnum(Date.prototype.toTimeString, "length");
}

function testDatePrototypeToLocaleStringExistence_0() {
  assertDefined(Date.prototype.toLocaleString);
}

function testDatePrototypeToLocaleStringAttributes_0() {
  assertDelete(Date.prototype, "toLocaleString");
}

function testDatePrototypeToLocaleStringAttributes_1() {
  assertReadWrite(Date.prototype, "toLocaleString");
}

function testDatePrototypeToLocaleStringAttributes_2() {
  assertDontEnum(Date.prototype, "toLocaleString");
}

function testDatePrototypeToLocaleStringPrototypeValue_0() {
  assertUndefined(Date.prototype.toLocaleString.prototype);
  assertFalse(Date.prototype.toLocaleString.hasOwnProperty("prototype"));
}

function testDatePrototypeToLocaleStringLength_0() {
  assertEquals(0, Date.prototype.toLocaleString.length);
}

function testDatePrototypeToLocaleStringLengthAttributes_0() {
  assertDontDelete(Date.prototype.toLocaleString, "length");
}

function testDatePrototypeToLocaleStringLengthAttributes_1() {
  assertReadOnly(Date.prototype.toLocaleString, "length");
}

function testDatePrototypeToLocaleStringLengthAttributes_2() {
  assertDontEnum(Date.prototype.toLocaleString, "length");
}

function testDatePrototypeToLocaleDateStringExistence_0() {
  assertDefined(Date.prototype.toLocaleDateString);
}

function testDatePrototypeToLocaleDateStringAttributes_0() {
  assertDelete(Date.prototype, "toLocaleDateString");
}

function testDatePrototypeToLocaleDateStringAttributes_1() {
  assertReadWrite(Date.prototype, "toLocaleDateString");
}

function testDatePrototypeToLocaleDateStringAttributes_2() {
  assertDontEnum(Date.prototype, "toLocaleDateString");
}

function testDatePrototypeToLocaleDateStringPrototypeValue_0() {
  assertUndefined(Date.prototype.toLocaleDateString.prototype);
  assertFalse(Date.prototype.toLocaleDateString.hasOwnProperty("prototype"));
}

function testDatePrototypeToLocaleDateStringLength_0() {
  assertEquals(0, Date.prototype.toLocaleDateString.length);
}

function testDatePrototypeToLocaleDateStringLengthAttributes_0() {
  assertDontDelete(Date.prototype.toLocaleDateString, "length");
}

function testDatePrototypeToLocaleDateStringLengthAttributes_1() {
  assertReadOnly(Date.prototype.toLocaleDateString, "length");
}

function testDatePrototypeToLocaleDateStringLengthAttributes_2() {
  assertDontEnum(Date.prototype.toLocaleDateString, "length");
}

function testDatePrototypeToLocaleTimeStringExistence_0() {
  assertDefined(Date.prototype.toLocaleTimeString);
}

function testDatePrototypeToLocaleTimeStringAttributes_0() {
  assertDelete(Date.prototype, "toLocaleTimeString");
}

function testDatePrototypeToLocaleTimeStringAttributes_1() {
  assertReadWrite(Date.prototype, "toLocaleTimeString");
}

function testDatePrototypeToLocaleTimeStringAttributes_2() {
  assertDontEnum(Date.prototype, "toLocaleTimeString");
}

function testDatePrototypeToLocaleTimeStringPrototypeValue_0() {
  assertUndefined(Date.prototype.toLocaleTimeString.prototype);
  assertFalse(Date.prototype.toLocaleTimeString.hasOwnProperty("prototype"));
}

function testDatePrototypeToLocaleTimeStringLength_0() {
  assertEquals(0, Date.prototype.toLocaleTimeString.length);
}

function testDatePrototypeToLocaleTimeStringLengthAttributes_0() {
  assertDontDelete(Date.prototype.toLocaleTimeString, "length");
}

function testDatePrototypeToLocaleTimeStringLengthAttributes_1() {
  assertReadOnly(Date.prototype.toLocaleTimeString, "length");
}

function testDatePrototypeToLocaleTimeStringLengthAttributes_2() {
  assertDontEnum(Date.prototype.toLocaleTimeString, "length");
}

function testDatePrototypeValueOfExistence_0() {
  assertDefined(Date.prototype.valueOf);
}

function testDatePrototypeValueOfAttributes_0() {
  assertDelete(Date.prototype, "valueOf");
}

function testDatePrototypeValueOfAttributes_1() {
  assertReadWrite(Date.prototype, "valueOf");
}

function testDatePrototypeValueOfAttributes_2() {
  assertDontEnum(Date.prototype, "valueOf");
}

function testDatePrototypeValueOfPrototypeValue_0() {
  assertUndefined(Date.prototype.valueOf.prototype);
  assertFalse(Date.prototype.valueOf.hasOwnProperty("prototype"));
}

function testDatePrototypeValueOfLength_0() {
  assertEquals(0, Date.prototype.valueOf.length);
}

function testDatePrototypeValueOfLengthAttributes_0() {
  assertDontDelete(Date.prototype.valueOf, "length");
}

function testDatePrototypeValueOfLengthAttributes_1() {
  assertReadOnly(Date.prototype.valueOf, "length");
}

function testDatePrototypeValueOfLengthAttributes_2() {
  assertDontEnum(Date.prototype.valueOf, "length");
}

function testDatePrototypeGetTimeExistence_0() {
  assertDefined(Date.prototype.getTime);
}

function testDatePrototypeGetTimeAttributes_0() {
  assertDelete(Date.prototype, "getTime");
}

function testDatePrototypeGetTimeAttributes_1() {
  assertReadWrite(Date.prototype, "getTime");
}

function testDatePrototypeGetTimeAttributes_2() {
  assertDontEnum(Date.prototype, "getTime");
}

function testDatePrototypeGetTimePrototypeValue_0() {
  assertUndefined(Date.prototype.getTime.prototype);
  assertFalse(Date.prototype.getTime.hasOwnProperty("prototype"));
}

function testDatePrototypeGetTimeLength_0() {
  assertEquals(0, Date.prototype.getTime.length);
}

function testDatePrototypeGetTimeLengthAttributes_0() {
  assertDontDelete(Date.prototype.getTime, "length");
}

function testDatePrototypeGetTimeLengthAttributes_1() {
  assertReadOnly(Date.prototype.getTime, "length");
}

function testDatePrototypeGetTimeLengthAttributes_2() {
  assertDontEnum(Date.prototype.getTime, "length");
}

function testDatePrototypeGetFullYearExistence_0() {
  assertDefined(Date.prototype.getFullYear);
}

function testDatePrototypeGetFullYearAttributes_0() {
  assertDelete(Date.prototype, "getFullYear");
}

function testDatePrototypeGetFullYearAttributes_1() {
  assertReadWrite(Date.prototype, "getFullYear");
}

function testDatePrototypeGetFullYearAttributes_2() {
  assertDontEnum(Date.prototype, "getFullYear");
}

function testDatePrototypeGetFullYearPrototypeValue_0() {
  assertUndefined(Date.prototype.getFullYear.prototype);
  assertFalse(Date.prototype.getFullYear.hasOwnProperty("prototype"));
}

function testDatePrototypeGetFullYearLength_0() {
  assertEquals(0, Date.prototype.getFullYear.length);
}

function testDatePrototypeGetFullYearLengthAttributes_0() {
  assertDontDelete(Date.prototype.getFullYear, "length");
}

function testDatePrototypeGetFullYearLengthAttributes_1() {
  assertReadOnly(Date.prototype.getFullYear, "length");
}

function testDatePrototypeGetFullYearLengthAttributes_2() {
  assertDontEnum(Date.prototype.getFullYear, "length");
}

function testDatePrototypeGetUTCFullYearExistence_0() {
  assertDefined(Date.prototype.getUTCFullYear);
}

function testDatePrototypeGetUTCFullYearAttributes_0() {
  assertDelete(Date.prototype, "getUTCFullYear");
}

function testDatePrototypeGetUTCFullYearAttributes_1() {
  assertReadWrite(Date.prototype, "getUTCFullYear");
}

function testDatePrototypeGetUTCFullYearAttributes_2() {
  assertDontEnum(Date.prototype, "getUTCFullYear");
}

function testDatePrototypeGetUTCFullYearPrototypeValue_0() {
  assertUndefined(Date.prototype.getUTCFullYear.prototype);
  assertFalse(Date.prototype.getUTCFullYear.hasOwnProperty("prototype"));
}

function testDatePrototypeGetUTCFullYearLength_0() {
  assertEquals(0, Date.prototype.getUTCFullYear.length);
}

function testDatePrototypeGetUTCFullYearLengthAttributes_0() {
  assertDontDelete(Date.prototype.getUTCFullYear, "length");
}

function testDatePrototypeGetUTCFullYearLengthAttributes_1() {
  assertReadOnly(Date.prototype.getUTCFullYear, "length");
}

function testDatePrototypeGetUTCFullYearLengthAttributes_2() {
  assertDontEnum(Date.prototype.getUTCFullYear, "length");
}

function testDatePrototypeGetMonthExistence_0() {
  assertDefined(Date.prototype.getMonth);
}

function testDatePrototypeGetMonthAttributes_0() {
  assertDelete(Date.prototype, "getMonth");
}

function testDatePrototypeGetMonthAttributes_1() {
  assertReadWrite(Date.prototype, "getMonth");
}

function testDatePrototypeGetMonthAttributes_2() {
  assertDontEnum(Date.prototype, "getMonth");
}

function testDatePrototypeGetMonthPrototypeValue_0() {
  assertUndefined(Date.prototype.getMonth.prototype);
  assertFalse(Date.prototype.getMonth.hasOwnProperty("prototype"));
}

function testDatePrototypeGetMonthLength_0() {
  assertEquals(0, Date.prototype.getMonth.length);
}

function testDatePrototypeGetMonthLengthAttributes_0() {
  assertDontDelete(Date.prototype.getMonth, "length");
}

function testDatePrototypeGetMonthLengthAttributes_1() {
  assertReadOnly(Date.prototype.getMonth, "length");
}

function testDatePrototypeGetMonthLengthAttributes_2() {
  assertDontEnum(Date.prototype.getMonth, "length");
}

function testDatePrototypeGetUTCMonthExistence_0() {
  assertDefined(Date.prototype.getUTCMonth);
}

function testDatePrototypeGetUTCMonthAttributes_0() {
  assertDelete(Date.prototype, "getUTCMonth");
}

function testDatePrototypeGetUTCMonthAttributes_1() {
  assertReadWrite(Date.prototype, "getUTCMonth");
}

function testDatePrototypeGetUTCMonthAttributes_2() {
  assertDontEnum(Date.prototype, "getUTCMonth");
}

function testDatePrototypeGetUTCMonthPrototypeValue_0() {
  assertUndefined(Date.prototype.getUTCMonth.prototype);
  assertFalse(Date.prototype.getUTCMonth.hasOwnProperty("prototype"));
}

function testDatePrototypeGetUTCMonthLength_0() {
  assertEquals(0, Date.prototype.getUTCMonth.length);
}

function testDatePrototypeGetUTCMonthLengthAttributes_0() {
  assertDontDelete(Date.prototype.getUTCMonth, "length");
}

function testDatePrototypeGetUTCMonthLengthAttributes_1() {
  assertReadOnly(Date.prototype.getUTCMonth, "length");
}

function testDatePrototypeGetUTCMonthLengthAttributes_2() {
  assertDontEnum(Date.prototype.getUTCMonth, "length");
}

function testDatePrototypeGetDateExistence_0() {
  assertDefined(Date.prototype.getDate);
}

function testDatePrototypeGetDateAttributes_0() {
  assertDelete(Date.prototype, "getDate");
}

function testDatePrototypeGetDateAttributes_1() {
  assertReadWrite(Date.prototype, "getDate");
}

function testDatePrototypeGetDateAttributes_2() {
  assertDontEnum(Date.prototype, "getDate");
}

function testDatePrototypeGetDatePrototypeValue_0() {
  assertUndefined(Date.prototype.getDate.prototype);
  assertFalse(Date.prototype.getDate.hasOwnProperty("prototype"));
}

function testDatePrototypeGetDateLength_0() {
  assertEquals(0, Date.prototype.getDate.length);
}

function testDatePrototypeGetDateLengthAttributes_0() {
  assertDontDelete(Date.prototype.getDate, "length");
}

function testDatePrototypeGetDateLengthAttributes_1() {
  assertReadOnly(Date.prototype.getDate, "length");
}

function testDatePrototypeGetDateLengthAttributes_2() {
  assertDontEnum(Date.prototype.getDate, "length");
}

function testDatePrototypeGetUTCDateExistence_0() {
  assertDefined(Date.prototype.getUTCDate);
}

function testDatePrototypeGetUTCDateAttributes_0() {
  assertDelete(Date.prototype, "getUTCDate");
}

function testDatePrototypeGetUTCDateAttributes_1() {
  assertReadWrite(Date.prototype, "getUTCDate");
}

function testDatePrototypeGetUTCDateAttributes_2() {
  assertDontEnum(Date.prototype, "getUTCDate");
}

function testDatePrototypeGetUTCDatePrototypeValue_0() {
  assertUndefined(Date.prototype.getUTCDate.prototype);
  assertFalse(Date.prototype.getUTCDate.hasOwnProperty("prototype"));
}

function testDatePrototypeGetUTCDateLength_0() {
  assertEquals(0, Date.prototype.getUTCDate.length);
}

function testDatePrototypeGetUTCDateLengthAttributes_0() {
  assertDontDelete(Date.prototype.getUTCDate, "length");
}

function testDatePrototypeGetUTCDateLengthAttributes_1() {
  assertReadOnly(Date.prototype.getUTCDate, "length");
}

function testDatePrototypeGetUTCDateLengthAttributes_2() {
  assertDontEnum(Date.prototype.getUTCDate, "length");
}

function testDatePrototypeGetDayExistence_0() {
  assertDefined(Date.prototype.getDay);
}

function testDatePrototypeGetDayAttributes_0() {
  assertDelete(Date.prototype, "getDay");
}

function testDatePrototypeGetDayAttributes_1() {
  assertReadWrite(Date.prototype, "getDay");
}

function testDatePrototypeGetDayAttributes_2() {
  assertDontEnum(Date.prototype, "getDay");
}

function testDatePrototypeGetDayPrototypeValue_0() {
  assertUndefined(Date.prototype.getDay.prototype);
  assertFalse(Date.prototype.getDay.hasOwnProperty("prototype"));
}

function testDatePrototypeGetDayLength_0() {
  assertEquals(0, Date.prototype.getDay.length);
}

function testDatePrototypeGetDayLengthAttributes_0() {
  assertDontDelete(Date.prototype.getDay, "length");
}

function testDatePrototypeGetDayLengthAttributes_1() {
  assertReadOnly(Date.prototype.getDay, "length");
}

function testDatePrototypeGetDayLengthAttributes_2() {
  assertDontEnum(Date.prototype.getDay, "length");
}

function testDatePrototypeGetUTCDayExistence_0() {
  assertDefined(Date.prototype.getUTCDay);
}

function testDatePrototypeGetUTCDayAttributes_0() {
  assertDelete(Date.prototype, "getUTCDay");
}

function testDatePrototypeGetUTCDayAttributes_1() {
  assertReadWrite(Date.prototype, "getUTCDay");
}

function testDatePrototypeGetUTCDayAttributes_2() {
  assertDontEnum(Date.prototype, "getUTCDay");
}

function testDatePrototypeGetUTCDayPrototypeValue_0() {
  assertUndefined(Date.prototype.getUTCDay.prototype);
  assertFalse(Date.prototype.getUTCDay.hasOwnProperty("prototype"));
}

function testDatePrototypeGetUTCDayLength_0() {
  assertEquals(0, Date.prototype.getUTCDay.length);
}

function testDatePrototypeGetUTCDayLengthAttributes_0() {
  assertDontDelete(Date.prototype.getUTCDay, "length");
}

function testDatePrototypeGetUTCDayLengthAttributes_1() {
  assertReadOnly(Date.prototype.getUTCDay, "length");
}

function testDatePrototypeGetUTCDayLengthAttributes_2() {
  assertDontEnum(Date.prototype.getUTCDay, "length");
}

function testDatePrototypeGetHoursExistence_0() {
  assertDefined(Date.prototype.getHours);
}

function testDatePrototypeGetHoursAttributes_0() {
  assertDelete(Date.prototype, "getHours");
}

function testDatePrototypeGetHoursAttributes_1() {
  assertReadWrite(Date.prototype, "getHours");
}

function testDatePrototypeGetHoursAttributes_2() {
  assertDontEnum(Date.prototype, "getHours");
}

function testDatePrototypeGetHoursPrototypeValue_0() {
  assertUndefined(Date.prototype.getHours.prototype);
  assertFalse(Date.prototype.getHours.hasOwnProperty("prototype"));
}

function testDatePrototypeGetHoursLength_0() {
  assertEquals(0, Date.prototype.getHours.length);
}

function testDatePrototypeGetHoursLengthAttributes_0() {
  assertDontDelete(Date.prototype.getHours, "length");
}

function testDatePrototypeGetHoursLengthAttributes_1() {
  assertReadOnly(Date.prototype.getHours, "length");
}

function testDatePrototypeGetHoursLengthAttributes_2() {
  assertDontEnum(Date.prototype.getHours, "length");
}

function testDatePrototypeGetUTCHoursExistence_0() {
  assertDefined(Date.prototype.getUTCHours);
}

function testDatePrototypeGetUTCHoursAttributes_0() {
  assertDelete(Date.prototype, "getUTCHours");
}

function testDatePrototypeGetUTCHoursAttributes_1() {
  assertReadWrite(Date.prototype, "getUTCHours");
}

function testDatePrototypeGetUTCHoursAttributes_2() {
  assertDontEnum(Date.prototype, "getUTCHours");
}

function testDatePrototypeGetUTCHoursPrototypeValue_0() {
  assertUndefined(Date.prototype.getUTCHours.prototype);
  assertFalse(Date.prototype.getUTCHours.hasOwnProperty("prototype"));
}

function testDatePrototypeGetUTCHoursLength_0() {
  assertEquals(0, Date.prototype.getUTCHours.length);
}

function testDatePrototypeGetUTCHoursLengthAttributes_0() {
  assertDontDelete(Date.prototype.getUTCHours, "length");
}

function testDatePrototypeGetUTCHoursLengthAttributes_1() {
  assertReadOnly(Date.prototype.getUTCHours, "length");
}

function testDatePrototypeGetUTCHoursLengthAttributes_2() {
  assertDontEnum(Date.prototype.getUTCHours, "length");
}

function testDatePrototypeGetMinutesExistence_0() {
  assertDefined(Date.prototype.getMinutes);
}

function testDatePrototypeGetMinutesAttributes_0() {
  assertDelete(Date.prototype, "getMinutes");
}

function testDatePrototypeGetMinutesAttributes_1() {
  assertReadWrite(Date.prototype, "getMinutes");
}

function testDatePrototypeGetMinutesAttributes_2() {
  assertDontEnum(Date.prototype, "getMinutes");
}

function testDatePrototypeGetMinutesPrototypeValue_0() {
  assertUndefined(Date.prototype.getMinutes.prototype);
  assertFalse(Date.prototype.getMinutes.hasOwnProperty("prototype"));
}

function testDatePrototypeGetMinutesLength_0() {
  assertEquals(0, Date.prototype.getMinutes.length);
}

function testDatePrototypeGetMinutesLengthAttributes_0() {
  assertDontDelete(Date.prototype.getMinutes, "length");
}

function testDatePrototypeGetMinutesLengthAttributes_1() {
  assertReadOnly(Date.prototype.getMinutes, "length");
}

function testDatePrototypeGetMinutesLengthAttributes_2() {
  assertDontEnum(Date.prototype.getMinutes, "length");
}

function testDatePrototypeGetUTCMinutesExistence_0() {
  assertDefined(Date.prototype.getUTCMinutes);
}

function testDatePrototypeGetUTCMinutesAttributes_0() {
  assertDelete(Date.prototype, "getUTCMinutes");
}

function testDatePrototypeGetUTCMinutesAttributes_1() {
  assertReadWrite(Date.prototype, "getUTCMinutes");
}

function testDatePrototypeGetUTCMinutesAttributes_2() {
  assertDontEnum(Date.prototype, "getUTCMinutes");
}

function testDatePrototypeGetUTCMinutesPrototypeValue_0() {
  assertUndefined(Date.prototype.getUTCMinutes.prototype);
  assertFalse(Date.prototype.getUTCMinutes.hasOwnProperty("prototype"));
}

function testDatePrototypeGetUTCMinutesLength_0() {
  assertEquals(0, Date.prototype.getUTCMinutes.length);
}

function testDatePrototypeGetUTCMinutesLengthAttributes_0() {
  assertDontDelete(Date.prototype.getUTCMinutes, "length");
}

function testDatePrototypeGetUTCMinutesLengthAttributes_1() {
  assertReadOnly(Date.prototype.getUTCMinutes, "length");
}

function testDatePrototypeGetUTCMinutesLengthAttributes_2() {
  assertDontEnum(Date.prototype.getUTCMinutes, "length");
}

function testDatePrototypeGetSecondsExistence_0() {
  assertDefined(Date.prototype.getSeconds);
}

function testDatePrototypeGetSecondsAttributes_0() {
  assertDelete(Date.prototype, "getSeconds");
}

function testDatePrototypeGetSecondsAttributes_1() {
  assertReadWrite(Date.prototype, "getSeconds");
}

function testDatePrototypeGetSecondsAttributes_2() {
  assertDontEnum(Date.prototype, "getSeconds");
}

function testDatePrototypeGetSecondsPrototypeValue_0() {
  assertUndefined(Date.prototype.getSeconds.prototype);
  assertFalse(Date.prototype.getSeconds.hasOwnProperty("prototype"));
}

function testDatePrototypeGetSecondsLength_0() {
  assertEquals(0, Date.prototype.getSeconds.length);
}

function testDatePrototypeGetSecondsLengthAttributes_0() {
  assertDontDelete(Date.prototype.getSeconds, "length");
}

function testDatePrototypeGetSecondsLengthAttributes_1() {
  assertReadOnly(Date.prototype.getSeconds, "length");
}

function testDatePrototypeGetSecondsLengthAttributes_2() {
  assertDontEnum(Date.prototype.getSeconds, "length");
}

function testDatePrototypeGetUTCSecondsExistence_0() {
  assertDefined(Date.prototype.getUTCSeconds);
}

function testDatePrototypeGetUTCSecondsAttributes_0() {
  assertDelete(Date.prototype, "getUTCSeconds");
}

function testDatePrototypeGetUTCSecondsAttributes_1() {
  assertReadWrite(Date.prototype, "getUTCSeconds");
}

function testDatePrototypeGetUTCSecondsAttributes_2() {
  assertDontEnum(Date.prototype, "getUTCSeconds");
}

function testDatePrototypeGetUTCSecondsPrototypeValue_0() {
  assertUndefined(Date.prototype.getUTCSeconds.prototype);
  assertFalse(Date.prototype.getUTCSeconds.hasOwnProperty("prototype"));
}

function testDatePrototypeGetUTCSecondsLength_0() {
  assertEquals(0, Date.prototype.getUTCSeconds.length);
}

function testDatePrototypeGetUTCSecondsLengthAttributes_0() {
  assertDontDelete(Date.prototype.getUTCSeconds, "length");
}

function testDatePrototypeGetUTCSecondsLengthAttributes_1() {
  assertReadOnly(Date.prototype.getUTCSeconds, "length");
}

function testDatePrototypeGetUTCSecondsLengthAttributes_2() {
  assertDontEnum(Date.prototype.getUTCSeconds, "length");
}

function testDatePrototypeGetMillisecondsExistence_0() {
  assertDefined(Date.prototype.getMilliseconds);
}

function testDatePrototypeGetMillisecondsAttributes_0() {
  assertDelete(Date.prototype, "getMilliseconds");
}

function testDatePrototypeGetMillisecondsAttributes_1() {
  assertReadWrite(Date.prototype, "getMilliseconds");
}

function testDatePrototypeGetMillisecondsAttributes_2() {
  assertDontEnum(Date.prototype, "getMilliseconds");
}

function testDatePrototypeGetMillisecondsPrototypeValue_0() {
  assertUndefined(Date.prototype.getMilliseconds.prototype);
  assertFalse(Date.prototype.getMilliseconds.hasOwnProperty("prototype"));
}

function testDatePrototypeGetMillisecondsLength_0() {
  assertEquals(0, Date.prototype.getMilliseconds.length);
}

function testDatePrototypeGetMillisecondsLengthAttributes_0() {
  assertDontDelete(Date.prototype.getMilliseconds, "length");
}

function testDatePrototypeGetMillisecondsLengthAttributes_1() {
  assertReadOnly(Date.prototype.getMilliseconds, "length");
}

function testDatePrototypeGetMillisecondsLengthAttributes_2() {
  assertDontEnum(Date.prototype.getMilliseconds, "length");
}

function testDatePrototypeGetUTCMillisecondsExistence_0() {
  assertDefined(Date.prototype.getUTCMilliseconds);
}

function testDatePrototypeGetUTCMillisecondsAttributes_0() {
  assertDelete(Date.prototype, "getUTCMilliseconds");
}

function testDatePrototypeGetUTCMillisecondsAttributes_1() {
  assertReadWrite(Date.prototype, "getUTCMilliseconds");
}

function testDatePrototypeGetUTCMillisecondsAttributes_2() {
  assertDontEnum(Date.prototype, "getUTCMilliseconds");
}

function testDatePrototypeGetUTCMillisecondsPrototypeValue_0() {
  assertUndefined(Date.prototype.getUTCMilliseconds.prototype);
  assertFalse(Date.prototype.getUTCMilliseconds.hasOwnProperty("prototype"));
}

function testDatePrototypeGetUTCMillisecondsLength_0() {
  assertEquals(0, Date.prototype.getUTCMilliseconds.length);
}

function testDatePrototypeGetUTCMillisecondsLengthAttributes_0() {
  assertDontDelete(Date.prototype.getUTCMilliseconds, "length");
}

function testDatePrototypeGetUTCMillisecondsLengthAttributes_1() {
  assertReadOnly(Date.prototype.getUTCMilliseconds, "length");
}

function testDatePrototypeGetUTCMillisecondsLengthAttributes_2() {
  assertDontEnum(Date.prototype.getUTCMilliseconds, "length");
}

function testDatePrototypeGetTimezoneOffsetExistence_0() {
  assertDefined(Date.prototype.getTimezoneOffset);
}

function testDatePrototypeGetTimezoneOffsetAttributes_0() {
  assertDelete(Date.prototype, "getTimezoneOffset");
}

function testDatePrototypeGetTimezoneOffsetAttributes_1() {
  assertReadWrite(Date.prototype, "getTimezoneOffset");
}

function testDatePrototypeGetTimezoneOffsetAttributes_2() {
  assertDontEnum(Date.prototype, "getTimezoneOffset");
}

function testDatePrototypeGetTimezoneOffsetPrototypeValue_0() {
  assertUndefined(Date.prototype.getTimezoneOffset.prototype);
  assertFalse(Date.prototype.getTimezoneOffset.hasOwnProperty("prototype"));
}

function testDatePrototypeGetTimezoneOffsetLength_0() {
  assertEquals(0, Date.prototype.getTimezoneOffset.length);
}

function testDatePrototypeGetTimezoneOffsetLengthAttributes_0() {
  assertDontDelete(Date.prototype.getTimezoneOffset, "length");
}

function testDatePrototypeGetTimezoneOffsetLengthAttributes_1() {
  assertReadOnly(Date.prototype.getTimezoneOffset, "length");
}

function testDatePrototypeGetTimezoneOffsetLengthAttributes_2() {
  assertDontEnum(Date.prototype.getTimezoneOffset, "length");
}

function testDatePrototypeSetTimeExistence_0() {
  assertDefined(Date.prototype.setTime);
}

function testDatePrototypeSetTimeAttributes_0() {
  assertDelete(Date.prototype, "setTime");
}

function testDatePrototypeSetTimeAttributes_1() {
  assertReadWrite(Date.prototype, "setTime");
}

function testDatePrototypeSetTimeAttributes_2() {
  assertDontEnum(Date.prototype, "setTime");
}

function testDatePrototypeSetTimePrototypeValue_0() {
  assertUndefined(Date.prototype.setTime.prototype);
  assertFalse(Date.prototype.setTime.hasOwnProperty("prototype"));
}

function testDatePrototypeSetTimeLength_0() {
  assertEquals(1, Date.prototype.setTime.length);
}

function testDatePrototypeSetTimeLengthAttributes_0() {
  assertDontDelete(Date.prototype.setTime, "length");
}

function testDatePrototypeSetTimeLengthAttributes_1() {
  assertReadOnly(Date.prototype.setTime, "length");
}

function testDatePrototypeSetTimeLengthAttributes_2() {
  assertDontEnum(Date.prototype.setTime, "length");
}

function testDatePrototypeSetMillisecondsExistence_0() {
  assertDefined(Date.prototype.setMilliseconds);
}

function testDatePrototypeSetMillisecondsAttributes_0() {
  assertDelete(Date.prototype, "setMilliseconds");
}

function testDatePrototypeSetMillisecondsAttributes_1() {
  assertReadWrite(Date.prototype, "setMilliseconds");
}

function testDatePrototypeSetMillisecondsAttributes_2() {
  assertDontEnum(Date.prototype, "setMilliseconds");
}

function testDatePrototypeSetMillisecondsPrototypeValue_0() {
  assertUndefined(Date.prototype.setMilliseconds.prototype);
  assertFalse(Date.prototype.setMilliseconds.hasOwnProperty("prototype"));
}

function testDatePrototypeSetMillisecondsLength_0() {
  assertEquals(1, Date.prototype.setMilliseconds.length);
}

function testDatePrototypeSetMillisecondsLengthAttributes_0() {
  assertDontDelete(Date.prototype.setMilliseconds, "length");
}

function testDatePrototypeSetMillisecondsLengthAttributes_1() {
  assertReadOnly(Date.prototype.setMilliseconds, "length");
}

function testDatePrototypeSetMillisecondsLengthAttributes_2() {
  assertDontEnum(Date.prototype.setMilliseconds, "length");
}

function testDatePrototypeSetUTCMillisecondsExistence_0() {
  assertDefined(Date.prototype.setUTCMilliseconds);
}

function testDatePrototypeSetUTCMillisecondsAttributes_0() {
  assertDelete(Date.prototype, "setUTCMilliseconds");
}

function testDatePrototypeSetUTCMillisecondsAttributes_1() {
  assertReadWrite(Date.prototype, "setUTCMilliseconds");
}

function testDatePrototypeSetUTCMillisecondsAttributes_2() {
  assertDontEnum(Date.prototype, "setUTCMilliseconds");
}

function testDatePrototypeSetUTCMillisecondsPrototypeValue_0() {
  assertUndefined(Date.prototype.setUTCMilliseconds.prototype);
  assertFalse(Date.prototype.setUTCMilliseconds.hasOwnProperty("prototype"));
}

function testDatePrototypeSetUTCMillisecondsLength_0() {
  assertEquals(1, Date.prototype.setUTCMilliseconds.length);
}

function testDatePrototypeSetUTCMillisecondsLengthAttributes_0() {
  assertDontDelete(Date.prototype.setUTCMilliseconds, "length");
}

function testDatePrototypeSetUTCMillisecondsLengthAttributes_1() {
  assertReadOnly(Date.prototype.setUTCMilliseconds, "length");
}

function testDatePrototypeSetUTCMillisecondsLengthAttributes_2() {
  assertDontEnum(Date.prototype.setUTCMilliseconds, "length");
}

function testDatePrototypeSetSecondsExistence_0() {
  assertDefined(Date.prototype.setSeconds);
}

function testDatePrototypeSetSecondsAttributes_0() {
  assertDelete(Date.prototype, "setSeconds");
}

function testDatePrototypeSetSecondsAttributes_1() {
  assertReadWrite(Date.prototype, "setSeconds");
}

function testDatePrototypeSetSecondsAttributes_2() {
  assertDontEnum(Date.prototype, "setSeconds");
}

function testDatePrototypeSetSecondsPrototypeValue_0() {
  assertUndefined(Date.prototype.setSeconds.prototype);
  assertFalse(Date.prototype.setSeconds.hasOwnProperty("prototype"));
}

function testDatePrototypeSetSecondsLength_0() {
  assertEquals(2, Date.prototype.setSeconds.length);
}

function testDatePrototypeSetSecondsLengthAttributes_0() {
  assertDontDelete(Date.prototype.setSeconds, "length");
}

function testDatePrototypeSetSecondsLengthAttributes_1() {
  assertReadOnly(Date.prototype.setSeconds, "length");
}

function testDatePrototypeSetSecondsLengthAttributes_2() {
  assertDontEnum(Date.prototype.setSeconds, "length");
}

function testDatePrototypeSetUTCSecondsExistence_0() {
  assertDefined(Date.prototype.setUTCSeconds);
}

function testDatePrototypeSetUTCSecondsAttributes_0() {
  assertDelete(Date.prototype, "setUTCSeconds");
}

function testDatePrototypeSetUTCSecondsAttributes_1() {
  assertReadWrite(Date.prototype, "setUTCSeconds");
}

function testDatePrototypeSetUTCSecondsAttributes_2() {
  assertDontEnum(Date.prototype, "setUTCSeconds");
}

function testDatePrototypeSetUTCSecondsPrototypeValue_0() {
  assertUndefined(Date.prototype.setUTCSeconds.prototype);
  assertFalse(Date.prototype.setUTCSeconds.hasOwnProperty("prototype"));
}

function testDatePrototypeSetUTCSecondsLength_0() {
  assertEquals(2, Date.prototype.setUTCSeconds.length);
}

function testDatePrototypeSetUTCSecondsLengthAttributes_0() {
  assertDontDelete(Date.prototype.setUTCSeconds, "length");
}

function testDatePrototypeSetUTCSecondsLengthAttributes_1() {
  assertReadOnly(Date.prototype.setUTCSeconds, "length");
}

function testDatePrototypeSetUTCSecondsLengthAttributes_2() {
  assertDontEnum(Date.prototype.setUTCSeconds, "length");
}

function testDatePrototypeSetMinutesExistence_0() {
  assertDefined(Date.prototype.setMinutes);
}

function testDatePrototypeSetMinutesAttributes_0() {
  assertDelete(Date.prototype, "setMinutes");
}

function testDatePrototypeSetMinutesAttributes_1() {
  assertReadWrite(Date.prototype, "setMinutes");
}

function testDatePrototypeSetMinutesAttributes_2() {
  assertDontEnum(Date.prototype, "setMinutes");
}

function testDatePrototypeSetMinutesPrototypeValue_0() {
  assertUndefined(Date.prototype.setMinutes.prototype);
  assertFalse(Date.prototype.setMinutes.hasOwnProperty("prototype"));
}

function testDatePrototypeSetMinutesLength_0() {
  assertEquals(3, Date.prototype.setMinutes.length);
}

function testDatePrototypeSetMinutesLengthAttributes_0() {
  assertDontDelete(Date.prototype.setMinutes, "length");
}

function testDatePrototypeSetMinutesLengthAttributes_1() {
  assertReadOnly(Date.prototype.setMinutes, "length");
}

function testDatePrototypeSetMinutesLengthAttributes_2() {
  assertDontEnum(Date.prototype.setMinutes, "length");
}

function testDatePrototypeSetUTCMinutesExistence_0() {
  assertDefined(Date.prototype.setUTCMinutes);
}

function testDatePrototypeSetUTCMinutesAttributes_0() {
  assertDelete(Date.prototype, "setUTCMinutes");
}

function testDatePrototypeSetUTCMinutesAttributes_1() {
  assertReadWrite(Date.prototype, "setUTCMinutes");
}

function testDatePrototypeSetUTCMinutesAttributes_2() {
  assertDontEnum(Date.prototype, "setUTCMinutes");
}

function testDatePrototypeSetUTCMinutesPrototypeValue_0() {
  assertUndefined(Date.prototype.setUTCMinutes.prototype);
  assertFalse(Date.prototype.setUTCMinutes.hasOwnProperty("prototype"));
}

function testDatePrototypeSetUTCMinutesLength_0() {
  assertEquals(3, Date.prototype.setUTCMinutes.length);
}

function testDatePrototypeSetUTCMinutesLengthAttributes_0() {
  assertDontDelete(Date.prototype.setUTCMinutes, "length");
}

function testDatePrototypeSetUTCMinutesLengthAttributes_1() {
  assertReadOnly(Date.prototype.setUTCMinutes, "length");
}

function testDatePrototypeSetUTCMinutesLengthAttributes_2() {
  assertDontEnum(Date.prototype.setUTCMinutes, "length");
}

function testDatePrototypeSetHoursExistence_0() {
  assertDefined(Date.prototype.setHours);
}

function testDatePrototypeSetHoursAttributes_0() {
  assertDelete(Date.prototype, "setHours");
}

function testDatePrototypeSetHoursAttributes_1() {
  assertReadWrite(Date.prototype, "setHours");
}

function testDatePrototypeSetHoursAttributes_2() {
  assertDontEnum(Date.prototype, "setHours");
}

function testDatePrototypeSetHoursPrototypeValue_0() {
  assertUndefined(Date.prototype.setHours.prototype);
  assertFalse(Date.prototype.setHours.hasOwnProperty("prototype"));
}

function testDatePrototypeSetHoursLength_0() {
  assertEquals(4, Date.prototype.setHours.length);
}

function testDatePrototypeSetHoursLengthAttributes_0() {
  assertDontDelete(Date.prototype.setHours, "length");
}

function testDatePrototypeSetHoursLengthAttributes_1() {
  assertReadOnly(Date.prototype.setHours, "length");
}

function testDatePrototypeSetHoursLengthAttributes_2() {
  assertDontEnum(Date.prototype.setHours, "length");
}

function testDatePrototypeSetUTCHoursExistence_0() {
  assertDefined(Date.prototype.setUTCHours);
}

function testDatePrototypeSetUTCHoursAttributes_0() {
  assertDelete(Date.prototype, "setUTCHours");
}

function testDatePrototypeSetUTCHoursAttributes_1() {
  assertReadWrite(Date.prototype, "setUTCHours");
}

function testDatePrototypeSetUTCHoursAttributes_2() {
  assertDontEnum(Date.prototype, "setUTCHours");
}

function testDatePrototypeSetUTCHoursPrototypeValue_0() {
  assertUndefined(Date.prototype.setUTCHours.prototype);
  assertFalse(Date.prototype.setUTCHours.hasOwnProperty("prototype"));
}

function testDatePrototypeSetUTCHoursLength_0() {
  assertEquals(4, Date.prototype.setUTCHours.length);
}

function testDatePrototypeSetUTCHoursLengthAttributes_0() {
  assertDontDelete(Date.prototype.setUTCHours, "length");
}

function testDatePrototypeSetUTCHoursLengthAttributes_1() {
  assertReadOnly(Date.prototype.setUTCHours, "length");
}

function testDatePrototypeSetUTCHoursLengthAttributes_2() {
  assertDontEnum(Date.prototype.setUTCHours, "length");
}

function testDatePrototypeSetDateExistence_0() {
  assertDefined(Date.prototype.setDate);
}

function testDatePrototypeSetDateAttributes_0() {
  assertDelete(Date.prototype, "setDate");
}

function testDatePrototypeSetDateAttributes_1() {
  assertReadWrite(Date.prototype, "setDate");
}

function testDatePrototypeSetDateAttributes_2() {
  assertDontEnum(Date.prototype, "setDate");
}

function testDatePrototypeSetDatePrototypeValue_0() {
  assertUndefined(Date.prototype.setDate.prototype);
  assertFalse(Date.prototype.setDate.hasOwnProperty("prototype"));
}

function testDatePrototypeSetDateLength_0() {
  assertEquals(1, Date.prototype.setDate.length);
}

function testDatePrototypeSetDateLengthAttributes_0() {
  assertDontDelete(Date.prototype.setDate, "length");
}

function testDatePrototypeSetDateLengthAttributes_1() {
  assertReadOnly(Date.prototype.setDate, "length");
}

function testDatePrototypeSetDateLengthAttributes_2() {
  assertDontEnum(Date.prototype.setDate, "length");
}

function testDatePrototypeSetUTCDateExistence_0() {
  assertDefined(Date.prototype.setUTCDate);
}

function testDatePrototypeSetUTCDateAttributes_0() {
  assertDelete(Date.prototype, "setUTCDate");
}

function testDatePrototypeSetUTCDateAttributes_1() {
  assertReadWrite(Date.prototype, "setUTCDate");
}

function testDatePrototypeSetUTCDateAttributes_2() {
  assertDontEnum(Date.prototype, "setUTCDate");
}

function testDatePrototypeSetUTCDatePrototypeValue_0() {
  assertUndefined(Date.prototype.setUTCDate.prototype);
  assertFalse(Date.prototype.setUTCDate.hasOwnProperty("prototype"));
}

function testDatePrototypeSetUTCDateLength_0() {
  assertEquals(1, Date.prototype.setUTCDate.length);
}

function testDatePrototypeSetUTCDateLengthAttributes_0() {
  assertDontDelete(Date.prototype.setUTCDate, "length");
}

function testDatePrototypeSetUTCDateLengthAttributes_1() {
  assertReadOnly(Date.prototype.setUTCDate, "length");
}

function testDatePrototypeSetUTCDateLengthAttributes_2() {
  assertDontEnum(Date.prototype.setUTCDate, "length");
}

function testDatePrototypeSetMonthExistence_0() {
  assertDefined(Date.prototype.setMonth);
}

function testDatePrototypeSetMonthAttributes_0() {
  assertDelete(Date.prototype, "setMonth");
}

function testDatePrototypeSetMonthAttributes_1() {
  assertReadWrite(Date.prototype, "setMonth");
}

function testDatePrototypeSetMonthAttributes_2() {
  assertDontEnum(Date.prototype, "setMonth");
}

function testDatePrototypeSetMonthPrototypeValue_0() {
  assertUndefined(Date.prototype.setMonth.prototype);
  assertFalse(Date.prototype.setMonth.hasOwnProperty("prototype"));
}

function testDatePrototypeSetMonthLength_0() {
  assertEquals(2, Date.prototype.setMonth.length);
}

function testDatePrototypeSetMonthLengthAttributes_0() {
  assertDontDelete(Date.prototype.setMonth, "length");
}

function testDatePrototypeSetMonthLengthAttributes_1() {
  assertReadOnly(Date.prototype.setMonth, "length");
}

function testDatePrototypeSetMonthLengthAttributes_2() {
  assertDontEnum(Date.prototype.setMonth, "length");
}

function testDatePrototypeSetUTCMonthExistence_0() {
  assertDefined(Date.prototype.setUTCMonth);
}

function testDatePrototypeSetUTCMonthAttributes_0() {
  assertDelete(Date.prototype, "setUTCMonth");
}

function testDatePrototypeSetUTCMonthAttributes_1() {
  assertReadWrite(Date.prototype, "setUTCMonth");
}

function testDatePrototypeSetUTCMonthAttributes_2() {
  assertDontEnum(Date.prototype, "setUTCMonth");
}

function testDatePrototypeSetUTCMonthPrototypeValue_0() {
  assertUndefined(Date.prototype.setUTCMonth.prototype);
  assertFalse(Date.prototype.setUTCMonth.hasOwnProperty("prototype"));
}

function testDatePrototypeSetUTCMonthLength_0() {
  assertEquals(2, Date.prototype.setUTCMonth.length);
}

function testDatePrototypeSetUTCMonthLengthAttributes_0() {
  assertDontDelete(Date.prototype.setUTCMonth, "length");
}

function testDatePrototypeSetUTCMonthLengthAttributes_1() {
  assertReadOnly(Date.prototype.setUTCMonth, "length");
}

function testDatePrototypeSetUTCMonthLengthAttributes_2() {
  assertDontEnum(Date.prototype.setUTCMonth, "length");
}

function testDatePrototypeSetFullYearExistence_0() {
  assertDefined(Date.prototype.setFullYear);
}

function testDatePrototypeSetFullYearAttributes_0() {
  assertDelete(Date.prototype, "setFullYear");
}

function testDatePrototypeSetFullYearAttributes_1() {
  assertReadWrite(Date.prototype, "setFullYear");
}

function testDatePrototypeSetFullYearAttributes_2() {
  assertDontEnum(Date.prototype, "setFullYear");
}

function testDatePrototypeSetFullYearPrototypeValue_0() {
  assertUndefined(Date.prototype.setFullYear.prototype);
  assertFalse(Date.prototype.setFullYear.hasOwnProperty("prototype"));
}

function testDatePrototypeSetFullYearLength_0() {
  assertEquals(3, Date.prototype.setFullYear.length);
}

function testDatePrototypeSetFullYearLengthAttributes_0() {
  assertDontDelete(Date.prototype.setFullYear, "length");
}

function testDatePrototypeSetFullYearLengthAttributes_1() {
  assertReadOnly(Date.prototype.setFullYear, "length");
}

function testDatePrototypeSetFullYearLengthAttributes_2() {
  assertDontEnum(Date.prototype.setFullYear, "length");
}

function testDatePrototypeSetUTCFullYearExistence_0() {
  assertDefined(Date.prototype.setUTCFullYear);
}

function testDatePrototypeSetUTCFullYearAttributes_0() {
  assertDelete(Date.prototype, "setUTCFullYear");
}

function testDatePrototypeSetUTCFullYearAttributes_1() {
  assertReadWrite(Date.prototype, "setUTCFullYear");
}

function testDatePrototypeSetUTCFullYearAttributes_2() {
  assertDontEnum(Date.prototype, "setUTCFullYear");
}

function testDatePrototypeSetUTCFullYearPrototypeValue_0() {
  assertUndefined(Date.prototype.setUTCFullYear.prototype);
  assertFalse(Date.prototype.setUTCFullYear.hasOwnProperty("prototype"));
}

function testDatePrototypeSetUTCFullYearLength_0() {
  assertEquals(3, Date.prototype.setUTCFullYear.length);
}

function testDatePrototypeSetUTCFullYearLengthAttributes_0() {
  assertDontDelete(Date.prototype.setUTCFullYear, "length");
}

function testDatePrototypeSetUTCFullYearLengthAttributes_1() {
  assertReadOnly(Date.prototype.setUTCFullYear, "length");
}

function testDatePrototypeSetUTCFullYearLengthAttributes_2() {
  assertDontEnum(Date.prototype.setUTCFullYear, "length");
}

function testDatePrototypeToUTCStringExistence_0() {
  assertDefined(Date.prototype.toUTCString);
}

function testDatePrototypeToUTCStringAttributes_0() {
  assertDelete(Date.prototype, "toUTCString");
}

function testDatePrototypeToUTCStringAttributes_1() {
  assertReadWrite(Date.prototype, "toUTCString");
}

function testDatePrototypeToUTCStringAttributes_2() {
  assertDontEnum(Date.prototype, "toUTCString");
}

function testDatePrototypeToUTCStringPrototypeValue_0() {
  assertUndefined(Date.prototype.toUTCString.prototype);
  assertFalse(Date.prototype.toUTCString.hasOwnProperty("prototype"));
}

function testDatePrototypeToUTCStringLength_0() {
  assertEquals(0, Date.prototype.toUTCString.length);
}

function testDatePrototypeToUTCStringLengthAttributes_0() {
  assertDontDelete(Date.prototype.toUTCString, "length");
}

function testDatePrototypeToUTCStringLengthAttributes_1() {
  assertReadOnly(Date.prototype.toUTCString, "length");
}

function testDatePrototypeToUTCStringLengthAttributes_2() {
  assertDontEnum(Date.prototype.toUTCString, "length");
}