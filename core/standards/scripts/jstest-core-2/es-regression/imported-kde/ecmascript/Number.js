shouldBe("Number()", "0");
shouldBe("Number(1)", "1");
shouldBe("Number(1.1)", "1.1");
shouldBe("Number('1.2')", "1.2");
shouldBe("isNaN(Number('a'))", "true");

shouldBe("new Number()", "0");
shouldBe("new Number(.4)", "0.4");
shouldBe("new Number('1.')", "1");
shouldBe("isNaN(new Number('a'))", "true");

shouldBe("isNaN(Number.NaN)", "true");
shouldBe("Number.NEGATIVE_INFINITY", "-Infinity");
shouldBe("Number.POSITIVE_INFINITY", "Infinity");
// with (Number)
//   shouldBe("POSITIVE_INFINITY", "Infinity");

shouldBe("(1).toString()", "1");
shouldBe("typeof (1).toString()", "'string'");
shouldBe("(1).valueOf()", "1");
shouldBe("typeof (1).valueOf()", "'number'");
