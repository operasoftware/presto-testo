shouldBe("Boolean()", "false");
shouldBe("Boolean(true)", "true");
shouldBe("Boolean(false)", "false");
shouldBe("new Boolean(true)", "true");
shouldBe("new Boolean(false)", "false");
shouldBe("new Boolean(Boolean(true))", "true");
shouldBeTrue("true.valueOf() === true");
shouldBeTrue("false.toString() === 'false'");
