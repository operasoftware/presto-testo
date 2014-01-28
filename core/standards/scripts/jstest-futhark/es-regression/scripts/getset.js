/* Regression tests for Opera's handling of FF/ES4 getters and setters.
 *
 * 2006-11-08 / lth
 */

var cvs = "$Id: getset.js 43149 2009-03-13 17:38:07Z hallvord $";

testmodule( "getters and setters", cvs );
expect(60);//number of tests - update this when tests are added!
/*-------------------------------------------------------------*/
testcase( "ES4 style getters and setters -- object properties" );

var wascalled = "";
var obj = { get x() { return 37 },
            set x(v) { wascalled=v },
            get one() { return 10 },
            get "one if by land"() { return "by land" },
            set "one if by land"(x) { wascalled=x },
            answer: "the answer",
            get 42() { return this.answer },
            set 42(x) { this.answer = x + "!" },
	    set wacky(x) { },
            get: 11,
            set: 12,
            y: 10 };

// Get and set are not magic if not followed by a property name

test("No discrimination by name #1", obj.get, 11);
test("No discrimination by name #2", obj.set, 12);

// Test the getters

test("Getter by prop", obj.x, 37);
test("Getter by name #3", obj["x"], 37);
test("Getter by name #4", obj["one if by land"], "by land");
test("Getter by name #5", obj[42], "the answer");

test("Getter by prop where only setter", obj.wacky, undefined);

// Test the setters

obj.x = "set x";
test("Setter by prop", wascalled, "set x");

var exn=undefined;
try {
    obj.one = 12;
}
catch (e) {
    exn=e;
}
test("Setter by prop where none defined", typeof exn, "object");
if (typeof exn == "object")
    test("Correct exception", exn.name, "TypeError");


obj[42] = "but what was the question?";
test("Setter that stores a value; getter that gets that", obj[42], "but what was the question?!");
test("Updated right property?", obj.answer, "but what was the question?!");

wascalled="was not";
obj["one if by land"] = 12;
test("Setter by string", wascalled, 12);

// Test that none of all of that affected other properties on the object

test("First, do no harm", obj.y, 10);


/*-------------------------------------------------------------*/
testcase( "No surprises" );

ttrue("Property present #6", "x" in obj );
ttrue("Property local #7", obj.hasOwnProperty("x") );

var xfound=false;
for ( var i in obj )
  if (i == "x")
    xfound=true;

ttrue("Property enumerable", xfound );

var z = obj.x = "quasi";
test("assigned value is result of assignment through setter", z, "quasi");

function G()
{
}

G.prototype = { get x() { return 13 } }

var g = new G();
g.y = 10;

ttrue("Property present #8", "x" in g);
ttrue("Property local #9", !g.hasOwnProperty("x"));

var xfound=false;
for ( var i in obj )
  if (i == "x")
    xfound=true;

ttrue("Property enumerable #10", xfound );


/*-------------------------------------------------------------*/
testcase( "WITH-bound variables that have getters and setters" );

wascalled="was not";
obj = { get x() { return 37 },
	set x(v) { wascalled=v } };
with( obj ) {
   test( "Get a getter-handled property through variable lookup", x, 37 );
   x = "phido";
   test( "Set a setter-handled property through variable lookup", wascalled, "phido" );
}


/*-------------------------------------------------------------*/
testcase( "__lookupGetter__ and __lookupSetter__ on static getters/setters" );

test( "__lookupGetter__ #11", obj.__lookupGetter__("x"), "function () { return 37 }" );
test( "__lookupGetter__ #12", obj.__lookupGetter__("y"), undefined );

test( "__lookupSetter__ #13", obj.__lookupSetter__("x"), "function (v) { wascalled=v }" );
test( "__lookupSetter__ #14", obj.__lookupSetter__("y"), undefined );

var obj={};
function f() { return 12; }
obj.__defineGetter__("x", f);
ttrue( "__lookupGetter__ #15", obj.__lookupGetter__("x") === f );

var obj={ get x() { this.y=10 } };
var v = {};

obj.__lookupGetter__("x").call(v);

test( "__lookupGetter__ #16", v.y, 10 );
test( "__lookupGetter__ #17", obj.y, undefined );

/* -- from bugs 164641 comments -- */
var fooarray=[], length;
try{
	length = fooarray.__lookupGetter__('length').call(fooarray);
}catch(e){}
ttrue('__lookupGetter__ on built-in property #15.1',  length==undefined);

/*-------------------------------------------------------------*/
testcase( "__defineGetter__ and __defineSetter__ on plain objects" );

var obj = { y: 10 };
obj.__defineGetter__("x", function() { return this.y*2 });
obj.__defineSetter__("x", function(v) { this.y=v/2 });

test("__defineGetter__ #18", obj.x, 20);
obj.x=30;
test("__defineSetter__ #19", obj.y, 15);
test("__defineSetter__ #20", obj.x, 30);

obj.__defineGetter__("x", function() { return 12 });  // overwrite
test("__defineGetter__ #21", obj.x, 12);

obj.__defineSetter__("x", function(v) { wascalled=v });  // overwrite
wascalled="";
obj.x = "foo";
test("__defineSetter__ #22", wascalled, "foo");


/*-------------------------------------------------------------*/
testcase( "Getter/setter in prototype object" );

function F()
{
}

var wascalled=undefined;
F.prototype = { myprop: 12,
                set foo(v) { this.myprop=v },
                get x() { return 13 },
                get t() { return this },
                set t(v) { wascalled=this } }

var zappa = new F();
zappa.myprop = 42;

test( "Get something from the prototype object", zappa.x, 13 );    // finding it?
test( "Get 'this'", zappa.t, zappa );                              // not F.prototype
test( "Set 'this'", (zappa.t = 10, wascalled), zappa );            // not F.prototype

zappa.foo = 44;                                                    // should invoke setter
test( "Set something on the object #23", zappa.foo, undefined );    // setter without getter
test( "Set something on the object #24", zappa.myprop, 44 );        // not 42
test( "Set something on the object #25", F.prototype.myprop, 12 );  // not 44

/*-------------------------------------------------------------*/
testcase( "Detect illegal property use" );

var exn=undefined;
try {
  eval("x={ i: 10, get i() { return 20 } }");
}
catch (e) {
  exn=e;
}
test("SyntaxError was thrown #26", typeof exn, "object");
if (typeof exn == "object")
    test("Correct exception #27", exn.name, "SyntaxError");

var exn=undefined;
try {
  eval("x={ get j() { return 20 }, j: 10 }");
}
catch (e) {
  exn=e;
}
test("SyntaxError was thrown #28", typeof exn, "object");
if (typeof exn == "object")
    test("Correct exception #29", exn.name, "SyntaxError");


/*-------------------------------------------------------------*/
testcase( "Delete" );

var obj={ get x() { return 12 } };

test( "delete #30", obj.x, 12 );

delete obj.x;
test( "delete #31", "x" in obj, false );
test( "delete #32", obj.x, undefined );

obj.x = 10;
test( "delete #33", obj.x, 10 ); // not 12

/*-------------------------------------------------------------*/
testcase( "Restrictions and error checks" );

function whippingpost() {}

// Not allowed on ReadOnly properties

var exn=undefined;
try {
  whippingpost.__defineGetter__("length", function () { return 3 });
}
catch (e) { exn=e }

test("TypeError was thrown #34", typeof exn, "object");
if (typeof exn == "object")
    test("Correct exception #35", exn.name, "TypeError");

// Not allowed on DontDelete properties

var exn=undefined;
try {
  whippingpost.__defineGetter__("prototype", function () { return null });
}
catch (e) { exn=e }

test("TypeError was thrown #36", typeof exn, "object");
if (typeof exn == "object")
    test("Correct exception #37", exn.name, "TypeError");

// Not allowed on host properties that can be read from other domains

var exn=undefined;
try {
  window.location.__defineGetter__("href", function () { return null });
}
catch (e) { exn=e }

test("TypeError was thrown #38", typeof exn, "object");
if (typeof exn == "object")
    test("Correct exception #39", exn.name, "TypeError");

// Security check on content from other domain

var exn=undefined;
if (document.getElementById('myframe')) {
  try {
    document.getElementById('myframe').contentWindow__defineGetter__("x", function () { return 3; });
  }
  catch (e) { exn=e };
  test("TypeError was thrown #40", typeof exn, "object");
  if (typeof exn == "object")
      test("Correct exception #41", exn.name, "TypeError");
}

// Setting something that isn't a function

var exn=undefined;
try {
  whippingpost.__defineGetter__("foo", 3);
}
catch (e) { exn=e }

test("SyntaxError was thrown #42", typeof exn, "object");
if (typeof exn == "object")
    test("Correct exception #43", exn.name, "SyntaxError");


testmodule_finished();

/* eof */
