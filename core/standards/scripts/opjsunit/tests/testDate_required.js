function testUTC_0() {
  assertNaN(Date.UTC());
}
testUTC_0.metadata = {
  bug:"CARAKAN-354"
};

function testUTC_1() {
  assertNaN(Date.UTC(null));
}
testUTC_1.metadata = {
  bug:"CARAKAN-354"
};

function testUTC_2() {
  assertNaN(Date.UTC(undefined));
}
testUTC_2.metadata = {
  bug:"CARAKAN-354"
};

function testUTC_3() {
  assertNaN(Date.UTC(2007));
}
testUTC_3.metadata = {
  bug:"CARAKAN-354"
};

function testUTC_4() {
  assertNaN(Date.UTC("2007-01-01"));
}
testUTC_4.metadata = {
  bug:"CARAKAN-354"
};

function testToUTCString_0() {
  assertEquals("Invalid Date", Date.prototype.toUTCString());
}
testToUTCString_0.metadata = {
  bug:"CARAKAN-385"
};

function testSetTime_0() {
    var d = new Date(NaN);
    var val = {valueOf: function() { throw "Error"; }};
    assertThrows("Error", function () { d.setTime(val); });
    assertThrows("Error", function () { d.setUTCMilliseconds(val); });
    assertThrows("Error", function () { d.setSeconds(val); });
    assertThrows("Error", function () { d.setSeconds(0, val); });
    assertThrows("Error", function () { d.setUTCSeconds(val); });
    assertThrows("Error", function () { d.setUTCSeconds(0, val); });
    assertThrows("Error", function () { d.setMinutes(val, val, val); });
    assertThrows("Error", function () { d.setMinutes(0, val, val); });
    assertThrows("Error", function () { d.setMinutes(0, 0, val); });
    assertThrows("Error", function () { d.setUTCMinutes(val, val, val); });
    assertThrows("Error", function () { d.setUTCMinutes(0, val, val); });
    assertThrows("Error", function () { d.setUTCMinutes(0, 0, val); });
    assertThrows("Error", function () { d.setHours(val, val, val, val); });
    assertThrows("Error", function () { d.setHours(0, val, val, val); });
    assertThrows("Error", function () { d.setHours(0, 0, val, val); });
    assertThrows("Error", function () { d.setHours(0, 0, 0, val); });
    assertThrows("Error", function () { d.setUTCHours(val, val, val, val); });
    assertThrows("Error", function () { d.setUTCHours(0, val, val, val); });
    assertThrows("Error", function () { d.setUTCHours(0, 0, val, val); });
    assertThrows("Error", function () { d.setUTCHours(0, 0, 0, val); });
    assertThrows("Error", function () { d.setDate(val); });
    assertThrows("Error", function () { d.setUTCDate(val); });
    assertThrows("Error", function () { d.setMonth(val, val); });
    assertThrows("Error", function () { d.setMonth(0, val); });
    assertThrows("Error", function () { d.setUTCMonth(val, val); });
    assertThrows("Error", function () { d.setUTCMonth(0, val); });
    assertThrows("Error", function () { d.setYear(val); });
    assertThrows("Error", function () { d.setFullYear(val, val, val); });
    assertThrows("Error", function () { d.setFullYear(0, val, val); });
    assertThrows("Error", function () { d.setFullYear(0, 0, val); });
    assertThrows("Error", function () { d.setUTCFullYear(val, val, val); });
    assertThrows("Error", function () { d.setUTCFullYear(0, val, val); });
    assertThrows("Error", function () { d.setUTCFullYear(0, 0, val); });
}
testSetTime_0.metadata = {
  bug:"CORE-44916"
};

function testToJSON_0() {
  assertEquals("1970-01-01T00:00:00.000Z", (new Date(0)).toJSON());
  assertEquals(null, (new Date(NaN)).toJSON());
  assertEquals(null, (new Date(Infinity)).toJSON());
  assertEquals(40, Date.prototype.toJSON.call({valueOf: function () { return 4; }, toISOString: function() { return 40; }}));
  assertEquals(null, Date.prototype.toJSON.call({valueOf: function () { return NaN; }, toISOString: function() { return 40; }}));

  var f = Date.prototype.toISOString;
  Date.prototype.toISOString = function () { return 50; }
  assertEquals(50, (new Date(Date.now())).toJSON());
  Date.prototype.toISOString = f;
}
testToJSON_0.metadata = {
  bug: "CORE-45573"
};

function testParse_0() {
    // Implementation-dependent behaviour is allowed, but aligning
    // on that seems better. Allow flexible treatment of the fractional
    // seconds field.
    assertFalse(isNaN((new Date("1976-10-02T18:11:22.0")).getYear()));
    assertFalse(isNaN((new Date("1976-10-02T18:11:22.0Z")).getYear()));
    assertFalse(isNaN((new Date("1976-10-02T18:11:22.00Z")).getYear()));
    assertFalse(isNaN((new Date("1976-10-02T18:11:22.01Z")).getYear()));
    assertFalse(isNaN((new Date("1976-10-02T18:11:22.010Z")).getYear()));
    assertFalse(isNaN((new Date("1976-10-02T18:11:22.1022Z")).getYear()));
    assertFalse(isNaN((new Date("1976-10-02T18:11:22.1022Z")).getYear()));
    assertFalse(isNaN((new Date("1976-10-02T18:11:22.102200Z")).getYear()));
    assertFalse(isNaN((new Date("1976-10-02T18:11:22.1102200Z")).getYear()));
    assertEquals(110, (new Date("1976-10-02T18:11:22.1102200Z")).getUTCMilliseconds());
    assertEquals(110, (new Date("1976-10-02T18:11:22.110")).getUTCMilliseconds());
    assertEquals(110, (new Date("1976-10-02T18:11:22.1101")).getUTCMilliseconds());
    assertEquals(100, (new Date("1976-10-02T18:11:22.1")).getUTCMilliseconds());
    assertEquals(990, (new Date("1976-10-02T18:11:22.99Z")).getUTCMilliseconds());
    assertEquals(100, (new Date("1976-10-02T18:11:22.1000")).getUTCMilliseconds());
}
testParse_0.metadata = {
  bug: "CORE-46758"
};

function testParse_1() {
    // Check for some invalid Date strings involving trailing characters
    // after the timezone. Previously allowed, but for no known reason.
    assertTrue(isNaN((new Date("2005-01-01T21:22:23z")).getYear()));
    assertTrue(isNaN((new Date("2005-01-01T21:22:23U")).getYear()));
    assertTrue(isNaN((new Date("2005-01-01T21:22:23Z7")).getYear()));
    assertTrue(isNaN((new Date("2005-01-01T21:22:23MOON")).getYear()));
    assertTrue(isNaN((new Date("2005-01-01T21:22:23Z ")).getYear()));
    assertTrue(isNaN((new Date("2005-01-01T21:22:23 Z ")).getYear()));
    assertTrue(isNaN((new Date("2005-01-01T21:22:23Z\t\r\n ")).getYear()));
    assertTrue(isNaN((new Date("2005-01-01T21:22:23GMZ")).getYear()));
    assertTrue(isNaN((new Date("2005-01-01T21:22:23GMZ ")).getYear()));
    assertTrue(isNaN((new Date("2005-01-01T21:22:23GMT ")).getYear()));
}
testParse_1.metadata = {
  bug: "CORE-46960"
};

function testParse_2() {
    // Check for some invalid Date strings involving leading whitespace.
    // Also previously allowed, but for no known reason.
    assertTrue(isNaN((new Date("  2005-01-01T21:22:23Z")).getYear()));
    assertTrue(isNaN((new Date("\t2005-01-01T21:22:23Z")).getYear()));
    assertTrue(isNaN((new Date("\t\r\n  2005-01-01T21:22:23Z")).getYear()));
}
testParse_2.metadata = {
  bug: "CORE-46960"
};

function testParse_3() {
    // Check for some invalid Date strings involving leading whitespace.
    // Also previously allowed, but for no known reason.
    assertFalse(isNaN(new Date("2005-01-01T21:22:23+0100")));
    assertFalse(isNaN(new Date("2005-01-01T21:22:23-0100")));
    assertFalse(isNaN(new Date("2005-01-01T21:22:23-0233")));
    assertFalse(isNaN(new Date("2005-01-01T21:22:23+1033")));

    assertTrue(isNaN(new Date("2005-01-01T21:22:23+2500")));
    assertTrue(isNaN(new Date("2005-01-01T21:22:23-1164")));
    assertTrue(isNaN(new Date("2005-01-01T21:22:23+64")));
    assertTrue(isNaN(new Date("2005-01-01T21:22:23+0200x")));
}
testParse_3.metadata = {
  bug: "CORE-48573"
};
