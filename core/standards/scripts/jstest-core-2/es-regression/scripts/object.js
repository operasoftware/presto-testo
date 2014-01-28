/* -*- mode: c++ -*-

   ECMAScript test suite -- the Object object. 
   */

var cvs = "$Id: object.js 12978 2007-03-27 23:58:47Z hallvord $";

testmodule( "The Object object", cvs );

try {

    var x, y;

    testcase( "Object object" );

    tdef( 'window.Object', window.Object );
    test( 'Object.length', Object.length, 1 );
    tdef( 'Object.prototype', Object.prototype );
    test( 'Object.prototype is not enumerable', Object.propertyIsEnumerable("prototype"), false );
    test( 'Object.prototype cannot be deleted', delete Object.prototype, false );
    x = Object.prototype;
    Object.prototype = 10;
    test( 'Object.prototype is read-only', Object.prototype === x, true );

    testcase( "Object constructor" );

    test( "new Object()", (new Object()) instanceof Object, true );
    test( "new Object(null)", (new Object(null)) instanceof Object, true );
    test( "new Object(undefined)", (new Object(undefined)) instanceof Object, true );
    test( "new Object(5)", (new Object(5)) instanceof Number, true );
    test( "new Object(false)", (new Object(false)) instanceof Boolean, true );
    test( "new Object('geek')", (new Object('geek')) instanceof String, true );
    test( "new Object(Object)", (new Object(Object)) === Object, true );

    testcase( "Object cast" );

    x = undefined; test( 'Object(undefined)', Object(x) instanceof Object, true );
    x = null;      test( 'Object(null)', Object(x) instanceof Object, true );
    x = true;      test( 'Object(true)', Object(x) instanceof Boolean, true );
    x = 0.0;       test( 'Object(0.0)', Object(0.0) instanceof Number, true );
    x = "Foo";     test( 'Object("Foo")', Object(x) instanceof String, true );
    x = Object();  test( 'Object(new Object())', Object(x) === x, true );

    testcase( "Object prototype" );

    tdef( 'Object.prototype.constructor', Object.prototype.constructor );
    test( 'Object.prototype.constructor is Object', Object.prototype.constructor === Object, true );
    tdef( 'Object.prototype.toString', Object.prototype.toString );
    test( 'Object.prototype.toString length', Object.prototype.toString.length, 0 );
    tdef( 'Object.prototype.toLocaleString', Object.prototype.toLocaleString );
    test( 'Object.prototype.toLocaleString length', Object.prototype.toLocaleString.length, 0 );
    tdef( 'Object.prototype.valueOf', Object.prototype.valueOf );
    test( 'Object.prototype.valueOf length', Object.prototype.valueOf.length, 0 );
    tdef( 'Object.prototype.hasOwnProperty', Object.prototype.hasOwnProperty );
    test( 'Object.prototype.hasOwnProperty length', Object.prototype.hasOwnProperty.length, 1 );
    tdef( 'Object.prototype.isPrototypeOf', Object.prototype.isPrototypeOf );
    test( 'Object.prototype.isPrototypeOf length', Object.prototype.isPrototypeOf.length, 1 );
    tdef( 'Object.prototype.propertyIsEnumerable',Object.prototype.propertyIsEnumerable);
    test( 'Object.prototype.propertyIsEnumerable length',Object.prototype.propertyIsEnumerable.length, 1 );

    testcase( "Object.prototype.toString" );

    test( "Object()", Object().toString(), "[object Object]" );
    test( "Object(undefined)", Object(undefined).toString(), "[object Object]" );
    test( "Object(null)", Object(null).toString(), "[object Object]" );

    testcase( "Object.prototype.toLocaleString" );

    try { // IE hack
	test( "Object()", Object().toLocaleString(), "[object Object]" );
	test( "Object(undefined)", Object(undefined).toLocaleString(), "[object Object]" );
	test( "Object(null)", Object(null).toLocaleString(), "[object Object]" );
	test( "String('Foo')", String("Foo").toLocaleString(), "Foo" );  // Spec 15.2.4.3
    }
    catch (e) {exception(e); }

    testcase( "Object.prototype.valueOf" );

    x = new Object(); test( "Object()", x.valueOf() === x, true );

    testcase( "Object.prototype.hasOwnProperty" );

    try { // IE hack
	x = new Object();
	x.frobozz = 37;
	x[17] = "hi there";
	test( "#1 frobozz", x.hasOwnProperty("frobozz"), true );
	test( "#1 foobar", x.hasOwnProperty("foobar"), false );
	test( "#1 numeric", x.hasOwnProperty(17), true );
	test( "#1 numeric", x.hasOwnProperty(18), false );

	function myObj() { this.foobar = 42; }
	myObj.prototype = x;
	y = new myObj();
	test( "#2 frobozz", y.hasOwnProperty("frobozz"),false);
	test( "#2 foobar", y.hasOwnProperty("foobar"), true);
    }
    catch (e) { exception(e); }

    // Bug  168058
    var obj = { '1':'' };
    var passed = (  obj.hasOwnProperty(  '1'  )  ); 

    test( "hasOwnProperty converts primitive types", passed, true, "Bug #168058" );

    testcase( "Object.prototype.isPrototypeOf" );

    try { // IE hack
	test( "myObj", myObj.prototype.isPrototypeOf( new myObj() ), true );
	test( "Object", Object.prototype.isPrototypeOf( new Object() ), true );
	test( "myObj #2", myObj.prototype.isPrototypeOf( myObj ), false );
    }
    catch (e) { exception(e); }

    testcase( "Object.propertyIsEnumerable" );

    try { // IE hack
	test("prototype.valueOf", Object.prototype.propertyIsEnumerable( "valueOf" ),false);
	x = new Object(); x.frobozz = 42;
	test("frobozz", x.propertyIsEnumerable("frobozz"), true );
	test("replace #0", (new String("yadda")).hasOwnProperty("replace"), false);
	test("replace #1", String.prototype.hasOwnProperty("replace"), true );
	test("replace #2", String.prototype.propertyIsEnumerable("replace"), false);
    }
    catch (e) {exception(e); }

    prog='\
testcase( "Literal object syntax" );\
 var x = { 0: "zero", 1: "one", 2: "two", 3: "three" };\
 test( "Object syntax #2", x[0], "zero", 73932 );\
 test( "Object syntax #2", x[3], "three", 73932 );\
 var y = { "001": "yes", 1: "no" }; \
 test( "Object syntax #3", y["001"], "yes", "#127773" ); \
 test( "Object syntax #4", y[1], "no", "#127773" ); \
';
    if (!isExplorer())
	eval(prog);
    else
	showfailure( "Object syntax with indices", "IE does not support this." );


    testcase( "ToPrimitive" );

    var x = { toString: function () { return { toString: function () { return "7"; } } }, 
	      valueOf: function () { return 10; } };
    test( "toPrimitive #1", 1 + x, 11 );
    test( "toPrimitive #2", "1" + x, "110" );  // because toString does not return a string but an object
    var x = { toString: function () { return { toString: function () { return "7"; } } }, 
	      valueOf: function () { return {}; } };
    expect_exception( "toPrimitive #3", Error, function () { return "1" + x; } );

    // Bug 64022: Opera does not search prototype chain on [[HasInstance]]

    testcase( "HasInstance searches prototype chain (bug #64022)" );

    try { // IE hack

	function God (name)         { this.name = name; }
	function NetGod (name, url) { God.call(this, name); this.url=url; }
	NetGod.prototype = new God ('');
	var thor = new God ('Thor');
	var kibo = new NetGod ('Kibo', 'http://www.kibo.com/');

	testnotinstance( "Bug 64022 #1", thor, NetGod );
	testinstance( "Bug 64022 #2", thor, God );
	testinstance( "Bug 64022 #3", thor, Object );
	testinstance( "Bug 64022 #4", kibo, NetGod );
	testinstance( "Bug 64022 #5", kibo, God );
	testinstance( "Bug 64022 #6", kibo, Object );
    } 
    catch(e) { exception(e); }

    // Bug #88086: trying to change a read-only property fails, but silently

    testcase( "Read-only properties are read-only (bug #88086)" );

    // Case 1: fails silently, test that it fails
    try {
	var p = Function.prototype;
	Function.prototype = new Object();
	test( "cannot change read-only #1", Function.prototype, p );
    } catch (e) { /* ignore */ }

    // Case 2: fails silently, test that it is silent
    expect_exception_but_expect_failure( "cannot change read-only #2", 88086, Error, 
					 function () { Function.prototype = new Object(); } );

    // Bug reported by Dan Ragle (dragle@jupitermedia.com): wrong prototype object
    // is picked up when implicit constructor is called in thread originating in
    // other frame.

    testcase( "Properties of prototypes on implicit conversion (no bug#)" );

    String.prototype.isString=true;
    String.prototype.isNumber=false;
    Number.prototype.isString=false;
    Number.prototype.isNumber=true;

    function showPrototypeInfo(n,s) {
	return "" + n.isString + "," + n.isNumber + "," + s.isString + "," + s.isNumber;
    }

    if ($$mode == "STANDALONE")
    { /* This should be rewritten to skip test if popup is blocked */
        var result="";
        var myNewWin = window.open("object2.html","");

        test( "Correct prototype #1", showPrototypeInfo(0,'hello'), "false,true,true,false" );
        while (result == "")
    	    ;
        myNewWin.close();
        test( "Correct prototype #2", result, "false,true,true,false" );
    }

    if (! (isBytecoded() || decompilerRemoved() ))
    {
        // Bug #131861: property names in object literals must be decompiled with quotes if
        // they contain strange identifiers

	var myobj = function () { var x={ foo: 10, "foo bar":20, 10:30 }; };
	test_spaceagnostic( "Decompiling object literal",
			    myobj.toString(), 
			    "function () { var x = {foo: 10, \"foo bar\": 20, 10: 30}; }" );
    }

    var newobj = { "": 42 };
    for ( var i in newobj )
    {
	test( "empty string as property name #1", i, "" );
	test( "empty string as property name #2", newobj[i], 42 );
    }

    // The problem here is consistency: one part of the code interpreted '00'
    // as a number, another part as a name.  (Name is right.)

    testcase( "Numeric property name must be interpreted consistently" );

    var list = {'00' : ['TP000']};
    var result = "FAIL";

    for (var item in list)
     result = "PASS";

    test( "Regression #158567", result, "PASS" );

    // Bug #173495: after deleting all properties from an object with
    // an indexing structure ('indexed' properties), adding more
    // properties would crash Opera.
 
    testcase( "Deleting all properties from objects with an indexing structure" );

    var objects1 = [];  // for indexed props
    var objects2 = [];  // for named props

    function useSomeMemory() {
	for (var i = 0; i < 12; i++) {
	    objects1[objects1.length] = "";
	    objects2["xyzzy" + objects2.length] = "";
	}
    }

    function freeSomeMemory() {
	for (var i in objects1)
	    delete objects1[i];
	for (var i in objects2)
	    delete objects2[i];
    }

    useSomeMemory();
    freeSomeMemory();
    useSomeMemory();


    /* Bug #181729: certain integer-like property names that are not representable 
       as 32-bit unsigned integers would not be handled properly */

    var propname='1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890';
    var obj={ '1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890':true };
    test( "Bug #181729", obj[ propname ], true );

} catch (e) { exception(e); }

testmodule_finished();

/* eof */
