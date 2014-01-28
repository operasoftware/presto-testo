/* -*- mode: C++; tab-width: 4; -*-
 *
 * Operator tests.
 *
 * Copyright (C) 2002 Opera Software AS.  All rights reserved.
 *
 * This file is part of the Opera web browser.  It may not be distributed
 * under any circumstances.
 */

var cvs = "$Id: operators.js 43149 2009-03-13 17:38:07Z hallvord $";

testmodule( "Operators", cvs );

function main() {
try {

	testcase( "Operator typeof");
	expect( decompilerRemoved()?174:198);//number of tests - update this when tests are added!
	var w = { f: 1 };
	var x = 5;
	var y = [ 1 ];

	test( 'typeof #1', typeof x, "number" );
	test( 'typeof #2', typeof undefined_x, "undefined" );
	test( 'typeof #3', typeof w.f, "number" );
	test( 'typeof #4', typeof w.undefined_f, "undefined" );
	test( 'typeof #5', typeof y[0], "number" );
	test( 'typeof #6', typeof y[1], "undefined" );
	if (! (isBytecoded() || decompilerRemoved() ))
	{
		test_spaceagnostic( 'typeof #7',
							(function () { return typeof x; }).toString(),
							"function () {return typeof x;}" );
	}
	test( 'typeof #8', typeof null, "object", 159574 );
	test( 'typeof #9', typeof test, "function" );
	test( 'typeof #10', typeof window, "object" );
	test( 'typeof #11', typeof true, "boolean" );
	test( 'typeof #12', typeof false, "boolean" );
	test( 'typeof #13', typeof "fnord", "string" );

	testcase( "Operator delete" );

	var w = { f: 1 };
	var x = 5;
	var y = [ 1 ];

	test( 'delete #1', delete x, false, 75150 );        // Can't delete variables, §12.2
	try {
		// if deletion succeeds (it shouldn't), then this should throw an exception
		(function () { return x; })();
	} catch (e) { exception(e); }

	blookie = 42;  // important that there be no 'var' here.

	// Can't delete variables defined by 'var' definition §12.2
	// But all the other browsers allow deletion of implicitly defined var(s) (don't ask me why)
	test( 'delete #1.5', delete blookie, true, 75150 );
	try {
		// if deletion succeeds (it shouldn't), then this should throw an exception
		(function () { return x; })();
	} catch (e) { exception(e); }

	test( 'delete #2', delete undefined_x, true );
	test( 'delete #3', delete w.f, true );
	test( 'delete #4', delete w.undefined_f, true );
	test( 'delete #5', delete y[0], true );
	test( 'delete #6', delete y[1], true );
	test( 'delete #7', (function (fisk) { return delete fisk; })(1), false,
		  75150 );  // Can't delete variables
	test( 'delete #8', (function () { return delete arguments; })(), false,
		  75150 );  // Can't delete 'arguments'
    if (! (isBytecoded() || decompilerRemoved() ))
	{
		test_spaceagnostic( 'delete #9',
							(function () { return delete x; }).toString(),
							"\nfunction () {\nreturn delete x;\n}\n" );
	}

    // Tests a bug we had where an internal property cache was not cleared

	var x = { foo: 10 };
	delete x.foo;
	var y = x.foo;
	test( 'delete #10', y===undefined, true );

    // delete named properties on object, this did not work in linear_a_2_final.

	var obj = { '0': 0, '1': 1, 'ja': 'ja', 'nei': 'nei' };
	delete obj[0];
	delete obj['1'];
	delete obj.nei;
	delete obj['ja'];
	var s="";
	for (var i in obj)
		s += i;
	test( "delete #11", s, "" );

    // Delete non-references, see bug #135439

	var here=false;
	function delfn()
		{
			here=true;
		}
	test( "delete #12", delete delfn(), true, 135439 );
	test( "delete #13", here, true );                    // make sure it was evaluated

    // This should not throw a syntax error, but don't call it.  Bug #135439.

	function aol_test() {
		if(this.branch)delete this.owner._allBranchNodes.remove(this);
	}

	// This should not throw an exception, bug #157653
	var r=false;
	try {
		r=delete ''.y; // an empty string literal has no y property, should return true
	} catch(e) { r=e; }
	test( "Deleting property from property-less object", r, true, 157653 );

	testcase( "referencing undefined variables" );

	expect_exception( 'undefined var #1', ReferenceError, function () { return undefined_x; } );

	testcase( "lvalues are not syntactic" );

	expect_exception( "lvalue #1", ReferenceError, function(){ eval( "(new Object()) = 13;" ); } );
	expect_exception( "lvalue #2", ReferenceError, function(){ eval( "3 = 13;" ); } );
	expect_exception( "lvalue #3", ReferenceError, function(){ eval( "'foo' += 'bar';" ); } );

	testcase( "global simple assignment" );

	var x = 0;
	var w = { x: 0 };
	var a = [ 0 ];

	x = 10;              test( 'assignment #1', x, 10 );
	undefined_x = 10;    test( 'assignment #2', undefined_x, 10 );
	w.x = 10;            test( 'assignment #3', w.x, 10 );
	w.undefined_x = 10;  test( 'assignment #4', w.undefined_x, 10 );
	a[0] = 10;           test( 'assignment #5', a[0], 10 );
	a[1] = 10;           test( 'assignment #6', a[1], 10 );

	testcase( "assignment with conversion (regression test)" );

	if (window.opera && opera.debugMode)
	{
		opera.putWillConvert = new Number(4);
		test( "convert-on-put #1", typeof opera.putWillConvert, "number" );
		test( "convert-on-put #2", opera.putWillConvert, 4 );
	}

	testcase( "lexical simple assignment" );

	(function () {
		var x = 0;
		var w = { x: 0 };
		var a = [ 0 ];

		x = 10;              test( 'assignment #1', x, 10 );
		undefined_y = 10;    test( 'assignment #2', undefined_y, 10 );
		w.x = 10;            test( 'assignment #3', w.x, 10 );
		w.undefined_y = 10;  test( 'assignment #4', w.undefined_y, 10 );
		a[0] = 10;           test( 'assignment #5', a[0], 10 );
		a[1] = 10;           test( 'assignment #6', a[1], 10 );
	})();

	test( 'assignment #7', undefined_y, 10 );

	testcase( "Compound assignment operators" );

	var x = 1;
	var y = "foo";
	var z1 = true;
	var z2 = true;
	var w = { f: 3 };
	var a = [ 5 ];

	x += 2;      test( '+= #1', x, 3 );
	y += "bar";  test( '+= #2', y, "foobar" );
	z1 += 2;     test( '+= #3', z1, 3 );
	z2 += "bar"; test( '+= #4', z2, "truebar" );
	w.f += 3;    test( '+= #5', w.f, 6 );
	a[0] += 3;   test( '+= #6', a[0], 8 );
	a += 3;      test( '+= #7', a, "83" );    // Convert to string, then string concat
    if (! (isBytecoded() || decompilerRemoved() ))
		test_spaceagnostic( '+= #8',
							(function(){ x += 5; }).toString(),
							"function(){ x += 5; }" );

	var x = 2;
	var y = "33";
	var z = { valueOf: function () { return 5; } };
	var w = { f: 3 };
	var a = [ 5 ];

	x -= 3;      test( '-= #1', x, -1 );
	y -= 3;      test( '-= #2', y, 30 );
	z -= 3;      test( '-= #3', z, 2 );
	w.f -= 3;    test( '-= #4', w.f, 0 );
	a[0] -= 3;   test( '-= #5', a[0], 2 );
	a -= 3;      test( '-= #6', a, -1 );      // Convert to string, then to number, then subtract
    if (! (isBytecoded() || decompilerRemoved() ))
		test_spaceagnostic( '-= #7',
							(function(){ x -= 5; }).toString(),
							"function(){ x -= 5; }" );

	var x = 2;
	var y = "33";
	var z = { valueOf: function () { return 5; } };
	var w = { f: 3 };
	var a = [ 5 ];

	x *= 3;      test( '*= #1', x, 6 );
	y *= 3;      test( '*= #2', y, 99 );
	z *= 3;      test( '*= #3', z, 15 );
	w.f *= 3;    test( '*= #4', w.f, 9 );
	a[0] *= 3;   test( '*= #5', a[0], 15 );
	a *= 3;      test( '*= #6', a, 45 );

    //  Must test /=  %=  <<= >>= >>>= &= |= ^=, just to exercise the computation code

	show( "No tests for operators <tt>/=  %=  &lt;&lt;= >>= >>>= &= |= ^=</tt>",
		  "No tests for these operators." );
	show( "" );

	testcase( "Undefined variables or values as operands" );

	var w = { f: 1 };
	var y = [ 1 ];

	expect_exception( 'undefined var #2', ReferenceError, function () { undefined_zappa += 3; } );

	w.undefined_f *= 3;  test( 'undefined var #3', w.undefined_f, NaN );
	y[1] -= 3;           test( 'undefined var #4', y[1], NaN );

	var c;  c += 3;      test( 'defined var with undefined value #1', c, NaN );
	var b;               test( 'defined var with undefined value #2', b, undefined );
	test( 'defined var with undefined value #3',
		  (function () { var zappa; return zappa + 1; })(),
		  NaN );

	testcase( "prefix/postfix increment/decrement" );

	var x=1;
	++x;     test( 'prefix ++ #1', x, 2 );
	test( 'prefix ++ #2', ++x, 3 );
	--x;     test( 'prefix -- #1', x, 2 );
	test( 'prefix -- #2', --x, 1 );
	expect_exception( 'undefined var #5', ReferenceError, function(){ ++yow; } );

	x++;     test( 'postfix ++ #1', x, 2 );
	test( 'postfix ++ #2', x++, 2 );
	x--;     test( 'postfix -- #1', x, 2 );
	test( 'postfix -- #2', x--, 2 );
	expect_exception( 'undefined var #6', ReferenceError, function(){ yow++; } );

	var x = { y: 1 };
	++x.y;   test( 'prefix ++ #3', x.y, 2 );
	test( 'prefix ++ #4', ++x.y, 3 );
	--x.y;   test( 'prefix -- #3', x.y, 2 );
	test( 'prefix -- #4', --x.y, 1 );
	test( 'undefined var #7', ++x.yow1, NaN );
	test( 'undefined var #8', --x.yow2, NaN );

	x.y++;   test( 'postfix ++ #3', x.y, 2 );
	test( 'postfix ++ #4', x.y++, 2 );
	x.y--;   test( 'postfix -- #3', x.y, 2 );
	test( 'postfix -- #4', x.y--, 2 );
	test( 'undefined var #9', x.yow3--, NaN );   // Subtle, see §11.3.1 for why not undefined
	test( 'undefined var #10', x.yow4--, NaN );  // Ditto

    // Bug: operator would pick up garbage during object conversion

	var x = new Number(314159);
	test( 'regression for #111733: postfix ++ on object', ++x, 314160 );

    if (! (isBytecoded() || decompilerRemoved() ))
	{
		test_spaceagnostic( 'prefix/postfix decompile #1',
							(function(){x++;}).toString(), "function(){x++;}" );
		test_spaceagnostic( 'prefix/postfix decompile #2',
							(function(){x--;}).toString(), "function(){x--;}" );
		test_spaceagnostic( 'prefix/postfix decompile #3',
							(function(){++x;}).toString(), "function(){++x;}" );
		test_spaceagnostic( 'prefix/postfix decompile #4',
							(function(){--x;}).toString(), "function(){--x;}" );
	}

	testcase( 'string comparison' );

	test( 'regression for #87441', "~" < "\u0109", true );   // Used to fail on little endian systems

	testcase( 'arguments array' );

	function test_arguments(how, x, y, z) {
		switch (how)
		{
		case 1:  // Exact amount
			test( 'arguments #1.1', arguments.length, 4 );
			test( 'arguments #1.2', arguments[1], 'zero' );
			test( 'arguments #1.3', arguments[3], 'two' );
			// Test that deleting array element decouples variable and element

			delete arguments[2];
			test( 'arguments #1.4.1', arguments[2], undefined );
			test( 'arguments #1.4.2', y, 'one' );
			arguments[2] = 'foo';
			test( 'arguments #1.4.3', arguments[2], 'foo' );
			test( 'arguments #1.4.4', y, 'one' );
			y = 'fizzle';
			test( 'arguments #1.4.5', arguments[2], 'foo' );
			// Test that updating var updates array
			x = 'bar';
			test( 'arguments #1.6', arguments[1], 'bar' );
			// Test that updating array updates var
			arguments[3] = 'bum';
			test( 'arguments #1.7', z, 'bum' );
			// Sanity check on toString
			arguments[4] = 'quux';
			arguments.length++;     // Remember, not an Array, so length not magically updated
			test_deep( 'arguments #1.8', [ how, x, y, z ], [ 1, 'bar', 'fizzle', 'bum' ] );

			// Mozilla 0.99 disagrees about #1.9, preferring to report [Object object]
			// for arguments.toString()

			// According to the spec, the arguments object is an Object, and Object.toString should not
			// perform an Array.join if the object looks like an array.

			test( 'arguments #1.9',
				  arguments.toString(),
				  [ 1, 'bar', 'foo', 'bum', 'quux' ].toString() );
			tdef( 'arguments #1.10', arguments.callee );
			break;

		case 2:  // More than formals
			test( 'arguments #2.1', arguments.length, 7 );
			break;

		case 3:  // Less than formals
			test( 'arguments #3.1', arguments.length, 2 );
			z = 'foo';
			test( 'arguments #3.2', arguments[4], undefined );
			test( 'arguments #3.3', y, undefined );
		}
	}

	test_arguments( 1, 'zero', 'one', 'two' );
	test_arguments( 2, 'zero', 'one', 'two', 'three', 'four', 'five' );
	test_arguments( 3, 'zero' );

	testcase( "function and method calls" );

	(function () { test( 'function #1', this, window ); })();
	(function () { var w = { f: function () { 'method #1', this, w; } }; w.f(); })();
	(function () { var w = { f: function () {
		                          (function () { test( 'function #2', this, window ); }); } };
	               w.f(); })();

	var y;
	var w = { f: function (x) { test( 'method #2.' + x, this.x, y ); } };

	y = 1;  w.x = y;  w.f(1);
	y = w;  w.x = w;  w.f(2);

	var a = [ function (x) { test( 'method #3.' + x, this[1], y ); } ];

	y = 1;  a[1] = y;  a[0](1);
	y = w;  a[1] = w;  a[0](2);

	var w = {f:0};
	var a = [0];
	expect_exception( "method #4", TypeError, function () { w.f(); } );
	expect_exception( "method #5", TypeError, function () { a[0](); } );

    /* Standard IEEE arithmetic properties are violated on some some systems
       and there is special code in the engine to handle those systems.  These
       tests try to determine whether you've enabled all the right switches
       on your system.
    */
	testcase( "NaN properties" );
	test( "NaN #1", NaN === NaN, false );
	test( "NaN #2", NaN == NaN, false );
	test( "NaN #3a", NaN === 37, false );
	test( "NaN #3b", 37 === NaN, false );
	test( "NaN #4", NaN == 37, false );
	test( "NaN #5", NaN < 10, false );
	test( "NaN #6a", NaN > 314159e200, false );
	test( "NaN #6b", 314159e200 < NaN, false );
	test( "NaN #7", NaN === Number.POSITIVE_INFINITY, false );
	test( "NaN #8", NaN >= Number.POSITIVE_INFINITY, false );
	test( "NaN #9", NaN != Number.POSITIVE_INFINITY, true );
	test( "NaN #10a", NaN !== Number.POSITIVE_INFINITY, true );
	test( "NaN #10b", Number.POSITIVE_INFINITY !== NaN, true );
	test( "NaN #11", NaN !== 37, true );
	test( "NaN #12", NaN < NaN, false );
	test( "NaN #13", NaN >= NaN, false );
	test( "NaN #14", NaN < 37, false );
	test( "NaN #15", NaN > 37, false );

	testcase( "void properties" );
	test( "void #1", (void 0) === undefined, true );
	test( "void #2", void 0 === undefined, true );
	test( "void #3", void 0 >> 1, 0 );
	test( "void #4", (function (a,x,b) { return x === undefined; })(1,void 0,1), true );

	testcase( "arithmetic on Date object" );

	test( "date arithmetic #1", isNaN(new Date()-0), false );     // Regression test
	test( "date arithmetic #2", typeof(new Date()+0), "string" );
	var d = new Date();
	test( "date arithmetic #3", (d+0), d.toString() + '0' );

	testcase( "decompiling (regression)" );
    if (! (isBytecoded() || decompilerRemoved() ))
	{
		test_spaceagnostic( "decompiling +", (function () { x + y; }).toString(), "function () { x + y; }" );
		test_spaceagnostic( "decompiling -", (function () { x - y; }).toString(), "function () { x - y; }" );
		test_spaceagnostic( "decompiling &&", (function () { x && y; }).toString(), "function () { x && y; }" );
		test_spaceagnostic( "decompiling ||", (function () { x || y; }).toString(), "function () { x || y; }" );

		test_spaceagnostic( "decompiling string #1",
							(function () { return "Abracadabra"; }).toString(),
							"function () { return \"Abracadabra\"; }" );
		test_spaceagnostic( "decompiling string #2",
							(function () { return "Ab\u1234rac\"ad'abra\ts\nim\x17sala\\bim"; }).toString(),
							"function () { return \"Ab\\u1234rac\\\"ad'abra\\ts\\nim\\x17sala\\\\bim\"; }" );
	}

	testcase( "decompiling (hard cases easy to get wrong)" );
	if (! (isBytecoded() || decompilerRemoved() ))
	{
		// Group subexpression with operator of lesser precedence
		test_spaceagnostic( "decompiling expr #1", (function () { (x + y) * z; }).toString(),
							"function () { (x + y) * z; }" );
		// Group subexpression with operator of lesser precedence
		test_spaceagnostic( "decompiling expr #2", (function () { x * (y + z); }).toString(),
							"function () { x * (y + z); }" );
		// Do not reassociate on the same level
		test_spaceagnostic( "decompiling expr #3", (function () { x / (y * z); }).toString(),
							"function () { x / (y * z); }" );
		// Do not reassociate on the same level even for "associative" operators
		test_spaceagnostic( "decompiling expr #4", (function () { x * (y * z); }).toString(),
							"function () { x * (y * z); }" );
		// Do not insert unnecessary parentheses
		test_spaceagnostic( "decompiling expr #5", (function () { x / y * z; }).toString(),
							"function () { x / y * z; }" );
		// Parentheses around item that would otherwise cause syntax error
		test_spaceagnostic( "decompiling expr #6", (function () { (10).toString(); }).toString(),
							"function () { (10).toString(); }" );
		// Property names that are large integers
		test_spaceagnostic( "decompiling expr #7", (function () { x={4000000000: "x"}; } ).toString(),
							"function () { x = {4000000000: \"x\"}; }" );

		// Parentheses around object literal on in expression stmt
		test_spaceagnostic( "decompiling stmt #1", (function () { ({a:1, b:2}); }).toString(),
							"function () { ({a: 1, b: 2}); }" );
		// ... but not in expression context
		test_spaceagnostic( "decompiling stmt #2", (function () { var x={a:1, b:2}; }).toString(),
							"function () { var x = {a: 1, b: 2}; }" );
		// Parentheses around function literals in expression stmt
		test_spaceagnostic( "decompiling stmt #3", (function () { (function () { function x() { } return x; } )(); }).toString(),
							"function () { (function () { function x() { } return x; } )(); }" );

	}

	testcase( "regression #96462" );

    // #96462 was specific to linear_a_2_beta_8, and cannot be provoked
    // reliably.  Adding this test here seems to trigger the bug in one
    // of the string tests that follow, however.

	test( "string<?", "0" < "00", true, 96462 );

	testcase( "simple relational operators on strings" );

	test( "string<? #1", "0" < "1", true );
	test( "string<? #2", "0" < "0", false );
	test( "string<? #3", "00" < "00", false );
	test( "string<? #4", "00" < "01", true );

	test( "string<=? #1", "0" <= "1", true );
	test( "string<=? #2", "0" <= "0", true );
	test( "string<=? #3", "00" <= "00", true );
	test( "string<=? #4", "1" <= "0", false );
	test( "string<=? #5", "01" <= "00", false );

	test( "string>? #1", "0" > "1", false );
	test( "string>? #2", "0" > "0", false );
	test( "string>? #3", "00" > "00", false );
	test( "string>? #4", "1" > "0", true );
	test( "string>? #5", "01" > "00", true );

	test( "string>=? #1", "0" >= "1", false );
	test( "string>=? #2", "0" >= "0", true );
	test( "string>=? #3", "00" >= "00", true );
	test( "string>=? #4", "0" >= "1", false );
	test( "string>=? #5", "01" >= "00", true );

	test( "string==? #1", "0" == "1", false );
	test( "string==? #2", "0" == "0", true );
	test( "string==? #3", "00" == "00", true );
	test( "string==? #4", "01" == "00", false );

	test( "string!=? #1", "0" != "1", true );
	test( "string!=? #2", "0" != "0", false );
	test( "string!=? #3", "00" != "00", false );
	test( "string!=? #4", "01" != "00", true );

	var a="x";
	var b="y";

	test( "string===? #1", a === a, true );
	test( "string===? #2", a === b, false );

	test( "string!==? #1", a !== a, false );
	test( "string!==? #2", a !== b, true );

    testcase( "Property names (bug 156316)" );

    var a=[];
	a["0"] = 10;
	a[1] = 20;
	test( 'property set', a[0], 10 );
	test( 'property get', a["1"], 20 );

} catch (e) { exception(e); }
}

main();

testmodule_finished();
