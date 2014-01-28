shouldBe("typeof Object()", "'object'");
shouldBe("var o = Object(); o.x = 11; o.x;", "11"); // wanted behaviour ?
// shouldBe("Object(undefined)", ???);
// shouldBe("Object(null)", ???);
shouldBe("Object(1)", "1");
shouldBe("Object(true)", "true");
shouldBe("Object('s')", "'s'");

shouldBe("typeof (new Object())", "'object'");
// shouldBe("new Object(undefined)", ???);
// shouldBe("new Object(null)", ???);
shouldBe("new Object(1)", "1");
shouldBe("new Object(true)", "true");
shouldBe("new Object('s')", "'s'");

shouldBe("String(Object())", "'[object Object]'");
shouldBe("Object()", "'[object Object]'");
shouldBe("Object().toString()", "'[object Object]'");
shouldBe("Object().valueOf()", "'[object Object]'");
