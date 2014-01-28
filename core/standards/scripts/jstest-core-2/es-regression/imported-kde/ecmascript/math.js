// Constants
shouldBe("String()+Math.E", 2.718281828459045);
shouldBe("String()+Math.LN2", 0.6931471805599453);
shouldBe("String()+Math.LN10", 2.302585092994046);
shouldBe("String()+Math.LOG2E", 1.442695040888963);
shouldBe("String()+Math.LOG10E", "0.4342944819032518");
shouldBe("String()+Math.PI", 3.141592653589793);
shouldBe("String()+Math.SQRT1_2", 0.7071067811865476);
shouldBe("String()+Math.SQRT2", 1.414213562373095);

shouldBe("String()+Number.NaN", "'NaN'");
shouldBe("String()+Number.NEGATIVE_INFINITY", "'-Infinity'");
shouldBe("String()+Number.POSITIVE_INFINITY", "'Infinity'");

// Functions
shouldBe("Math.abs(-5)",5);
shouldBe("Math.acos(0)",Math.PI/2);
shouldBe("Math.acos(1)",0);
shouldBe("Math.ceil(1.1)",2);
shouldBe("String()+Math.sqrt(2)",String()+Math.SQRT2);
shouldBe("Math.ceil(1.6)",2);
shouldBe("Math.round(1.1)",1);
shouldBe("Math.round(1.6)",2);
shouldBeTrue("isNaN(Math.round())");
shouldBe("Math.round(-Infinity)", -Infinity);
shouldBe("Math.round(Infinity)", Infinity);

// Deleting/assigning
shouldBe("delete Math.abs", "true")
shouldBeUndefined("Math.abs");
shouldBe("delete Math.PI", "false")
shouldBe("Math.abs = Math.round, Math.abs(-5)", "-5");

shouldBe("Boolean(Math)", "true");
shouldBeTrue("isNaN(Number(Math));");

// Unicity
shouldBe("Math.abs==Math.abs", "true")
shouldBe("Math.abs==Math.round", "true")

// Iteration
list=""
for ( var i in Math ) { list += i + ','; }
shouldBe("list","'abs,'");

Math.myprop=true; // adding a custom property to the math object (why not?)
list=""
for ( var i in Math ) { list += i + ','; }
shouldBe("list","'abs,myprop,'");
