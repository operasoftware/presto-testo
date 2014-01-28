var d = new Date(1017492323515); // Sat Mar 30 13:45:23 GMT+0100 (CET) 2002
// shouldBe("d.getUTCHours()", "12");
// shouldBe("d.getHours()", "12");
shouldBe("d.getMinutes()", "45");
shouldBe("d.getUTCMinutes()", "45");
shouldBe("d.getDay()", "6");
shouldBe("d.getMonth()", "2");
shouldBe("d.getFullYear()", "2002");

// string/number conversions
shouldBe("Number(d)", "1017492323515");
shouldBe("Boolean(d)", "true");
shouldBe("(new Date(100)).valueOf()", "100");
shouldBe("typeof (new Date()).toString()", "'string'");
shouldBe("typeof ('' + new Date())", "'string'");
shouldBe("typeof (new Date() + new Date())", "'string'");
shouldBe("new Date(10001) - new Date(10000)", "1");
shouldBe("'' - new Date(10000)", "-10000");
shouldBe("2 * new Date(10000)", "20000");
shouldBe("var d = new Date(); d == String(d)", "true");
