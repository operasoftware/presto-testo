var numtests = 0;

function test(name, actual, expected)
{
	++numtests;
    if (expected !== actual) {
	    alert("FAILED " + name + ":\n");
		alert("Expected " + expected + "\n");
		alert("Got " + actual + "\n" );
	}
	else
		alert("AOK: " + name + "\n");
}

var obj = { get x() { return 37 }, 
			get one() { return 10 },
            set x(v) { alert(v) },
			get "one if by land"() { return "by land" },
			get 42() { return "the answer" },
			get: 11,
			set: 12,
			y: 10 };

test("No discrimination by name #1", obj.get, 11);
test("No discrimination by name #2", obj.set, 12);

test("Getter by prop", obj.x, 37);
test("Getter by name #1", obj["x"], 37);
test("Getter by name #2", obj["one if by land"], "by land");
test("Getter by name #3", obj[42], "the answer");

test("First, do no harm", obj.y, 10);

alert("Done: " + numtests + " tests run.\n" );
