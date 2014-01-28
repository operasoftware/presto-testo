// Error constructor called as a function
shouldBe("Error('msg').message", "'msg'");

// Error Constructor called as part of a new expression
shouldBe("(new Error('msg')).message", "'msg'");
shouldBeUndefined("(new Error()).message");
shouldBe("(new Error('msg')).name", "'Error'");

