/* -*- mode: C++; tab-width: 4 -*-
 *
 * Functionality and regression tests -- Function objects
 *
 * Copyright (C) 2002 Opera Software AS.  All rights reserved.
 *
 * This file is part of the Opera web browser.  It may not be distributed
 * under any circumstances.
 */

var cvs = "$Id: function.js 12970 2007-03-27 21:48:59Z hallvord $";

testmodule( "Functions and Function objects", cvs );

var x;
try {

testcase( "Function construction" );
x = Function('x','y','return x+y;'),
	testinstance( "Function('x','y','return x+y;')", x, Function );
test( "#1 x(1,2)", x(1,2), 3 );
test( "#1 x.length", x.length, 2 );

x = Function('x,y','return x+y;'),
	testinstance( "Function('x,y','return x+y;')", x, Function );
test( "#2 x(1,2)", x(1,2), 3 );
test( "#2 x.length", x.length, 2 );

x = new Function('x','y','return x+y;'),
	testinstance( "new Function('x','y','return x+y;')", x, Function );
test( "#3 x(1,2)", x(1,2), 3 );
test( "#3 x.length", x.length, 2 );

var testvar = 37;
function f_returning_Function()
{
	var testvar = 42;
	return new Function( 'return testvar;' );
}
try {
	test( "scope of created functions", f_returning_Function()(), 37 );
}
catch (e) { exception(e); }

var failed = false;
try {
	Function( 'a','b,','return a+b;' );
} catch (e) { failed = e; }
ttrue( "Param list parsing #1", failed );
if (failed)
	testinstance( "Param list parsing #1 exception", failed, SyntaxError );

var x = 0;
try { // Not supported in all releases
	x = (new Function( '', 'return 37;' ))();
}
catch (e) {}
test( "Param list parsing #2", x, 37, "#127576" );

var failed = false;
try {
	Function( 'a','b','return a++b;' );
} catch (e) { failed = e; }
ttrue( "Body parsing", failed );
if (failed)
	testinstance( "Body parsing exception", failed, SyntaxError );


testcase( "Function and Function.prototype objects" );

tdef( "Function.prototype exists", Function.prototype );
test( "Function.prototype called", Function.prototype( 1,2,3,4 ), undefined );
tdef( "Function.prototype.constructor", Function.prototype.constructor );
tdef( "Function.prototype.toString", Function.prototype.toString );
tdef( "Function.prototype.apply", Function.prototype.apply );
tdef( "Function.prototype.call", Function.prototype.call );

testcase( "Properties of function instances" );

var x = new Function( "x", "return x;" );
test( "length", x.length, 1 );
tdef( "prototype", x.prototype );
test( "[[Call]]", x(1), 1 );
// [[Construct]] and [[HasInstance]]
var y = new Object();
x.prototype = y;
// This next line crashes Opera 5.11, but hopefully 5.12 will be OK
var z = new x();
// This is broken and halts execution!
// testinstance( "[[HasInstance]]", z, y );

// Used by call and apply tests
function f_being_called( a, b, c, d ) { return [ this, a, b, c, d ]; }
var a1=new Number(33);
var a2=new Array( 1, 2, 3 );

testcase( "Function.prototype.apply" );

test( "apply #1", f_being_called.apply( a1, a2 )[0] === a1, true );
test_deep( "apply #2", f_being_called.apply( a1, a2 ), [ a1, 1, 2, 3, undefined ] );

testcase( "Function.prototype.call" );

test( "call #1", f_being_called.call( a1, 1, 2, 3 )[0] === a1, true );
test_deep( "call #2", f_being_called.call( a1, 1, 2, 3 ), [ a1, 1, 2, 3, undefined ] );

testcase( "arguments.callee" );

var x=0;
function fn_callee() { if (++x < 10) return arguments.callee(); else return arguments.callee; }
test( "callee #1",  fn_callee(), fn_callee );
test( "callee #2",  x, 10 );

testcase( "Parameter conversion" );

if (document.implementation && document.implementation.hasFeature && isOpera(7))
{
	// Tests that String instances are converted to primitive string on the DOM interface.
	test("hasFeature HTML 1.0 #1", document.implementation.hasFeature(new String("HTML"), new String("1.0")), true);
	var x = new Number(1.0);
	x.toString = function () { return this.toFixed(1); }
	test("hasFeature HTML 1.0 #4", document.implementation.hasFeature(new String("HTML"), x), true);
}

testcase( "Function calls" );

function fcall_test( a, b, c )
{
	return a + b + c + this;
}

var x = [ fcall_test ];      x.toString = function () { return "X!" };
var y = { f: fcall_test, toString: function () { return "Y!" } };

test( "function call #1", x[0]("A","B","C"), "ABCX!" );
test( "function call #2", y.f("A","B","C"), "ABCY!" );

testcase( "Decompiler" );

if (! (isBytecoded() || decompilerRemoved()) )
{
test_spaceagnostic( 'fn.toString #1', (function (x) { return 1; }).toString(), "function (x) { return 1; }" );
test_spaceagnostic( 'fn.toString #2',
					(function (x,y) { function foo() { return 2; } return 1; }).toString(),
					"function (x,y) { function foo() { return 2; } return 1; }",
					82063 );
test_spaceagnostic( 'fn.toString #3', (function () { try {} catch (e) { j=e; } }).toString(),
					"function () { try {} catch (e) { j = e; } }",
					"#128890" );
// The following test the parenthesizing logic -- parentheses should be inserted when
// necessary, but not otherwise.
test_spaceagnostic( 'fn.toString #4', (function () { (x = 10) ? a : b; }).toString(),
					"function () { (x = 10) ? a : b; }" );
test_spaceagnostic( 'fn.toString #5', (function () { x = (10 ? a : b); }).toString(),
					"function () { x = 10 ? a : b; }" );
test_spaceagnostic( 'fn.toString #6', (function () { if ((x = foo()) != 10) g(); }).toString(),
					"function () { if ((x = foo()) != 10) g(); }" );
test_spaceagnostic( 'fn.toString #7', (function () { g( (1,2), 3); }).toString(),
					"function () { g((1,2),3); }" );
test_spaceagnostic( 'fn.toString #8', (function () { (function () {})(); }).toString(),
					"function () { (function () { } )(); }" );
test_spaceagnostic( 'fn.toString #9', (function () { x = a - (b - (c - d)); }).toString(),
					"function () { x = a - (b - (c - d)); }" );
test_spaceagnostic( 'fn.toString #10', (function () { x = a + (b + (c + d)); }).toString(),
					"function () { x = a + (b + (c + d)); }" );  // no reassociation!
test_spaceagnostic( 'fn.toString #11', (function () { x = (a / b) * (c % d); }).toString(),
					"function () { x = a / b * (c % d); }" );
test_spaceagnostic( 'fn.toString #12', (function () { x = a in b in c; }).toString(),
					"function () { x = a in b in c; }" );
test_spaceagnostic( 'fn.toString #13', (function () { x = a in (b in c); }).toString(),
					"function () { x = a in (b in c); }" );
}

testcase( "Use of 'this' in some contexts" );

// When _with_ is used on an object and a function is called and found in that
// object, then the object must be pushed as the this object during the call.

var testresult=null;
var q="wrong";

function myfunction()
{
	testresult="wrong";
}

function MyObject()
{
	this.q = "right";
	this.myfunction = function () { testresult=this.q; }
}

with (new MyObject()) myfunction();
test( "this #1", testresult, "right" );

} catch (e) { exception(e); }

/* Test cases for the 'arguments' optimization: If a function does not
   reference arguments, then it need not be created.  These tests
   should check that arguments *is* created when it is needed.

   The optimization looks at the code of the function body: if
   arguments is not referenced and eval is not referenced then
   arguments is not created.

   But there is a second complication, namely, function.arguments is
   also available (in JS 1.3).  So the arguments object must sometimes
   be resurrected when it is referenced.

   A third complication is that the arguments object and its contents
   are first-class -- they may outlive the function activation.  This
   interacts with the activation record optimization, which stack-allocates
   activation records when possible: the optimization must not break this
   property of the arguments object.
   */

testcase( "arguments object" );

var arguments=['GLOBAL'];

function usesarg1(x,y)  // receives three arguments
{
	test( "usesarg1 #1", arguments[0], 'USESARG1_1' );
	test( "usesarg1 #1", arguments.length, 3 );
}
usesarg1( 'USESARG1_1', 'USESARG2_1', 'USESARG3_1' );

function usesarg2(x,y) // receives three arguments
{
	test( "usesarg2 #1", eval("arguments")[0], 'USESARG2_1' );
	test( "usesarg2 #2", eval("arguments").length, 3 );
}
usesarg2( 'USESARG2_1', 'USESARG2_2', 'USESARG2_3' );

function usesarg3(x,y) // receives three arguments
{
	var z=arguments;

	test( "usesarg3 #1", z[0], 'USESARG3_1' );
	test( "usesarg3 #2", z.length, 3 );
}
usesarg3( 'USESARG3_1', 'USESARG3_2', 'USESARG3_3' );

function usesarg4(x,y) // receives three arguments
{
	with (arguments)
		test( "usesarg4 #1", length, 3 );
}
usesarg4( 'USESARG4_1', 'USESARG4_2', 'USESARG4_3' );

function usesarg_f( a, b )
{
	return usesarg_g();
}
function usesarg_g()
{
	return usesarg_f.arguments.length;
}
test( "arguments array function object", usesarg_f(1,2), 2 );

var x = Math.random();

function usesarg_i()
{
	return "arguments" in usesarg_i && arguments[0] == x;
}
test( "function.arguments is visible to 'in' operator", usesarg_i(x), true );

function usesarg_j()
{
	return usesarg_j["arguments"] == arguments;
}
test( "function.arguments can be clobbered by the script", usesarg_j(1,2,3), true );

function usesarg_k()
{
	return arguments;
}

var x=usesarg_k(new Number(10), new String("hei"));  // those objects only referenced from the arguments obj
opera.collect();                                     // try to force gc
test( "function.arguments are removed", usesarg_k.arguments === null, true);
test( "function.arguments content live on #1", x.length, 2 );
test( "function.arguments content live on #2", typeof x[0], "object" );
test( "function.arguments content live on #3", typeof x[0].valueOf(), "number" );
test( "function.arguments content live on #4", x[0].valueOf(), 10 );
test( "function.arguments content live on #5", typeof x[1], "object" );
test( "function.arguments content live on #6", typeof x[1].valueOf(), "string" );
test( "function.arguments content live on #7", x[1].valueOf(), "hei" )

// Bug in an early implementation, seen on excite.com: only the first call
// to makeArray had access to makeArray.arguments, the second would fail.

function makeArray()
{
  this[0] = makeArray.arguments.length;
  for (i = 0; i<makeArray.arguments.length; i++)
  {
    this[i+1] = makeArray.arguments[i];
  }
}
try {
  var daysofmonth    = new makeArray( 31, 28, 31, 30, 31, 30,31, 31, 30, 31, 30, 31);
  var daysofmonthLY  = new makeArray( 31, 29, 31, 30, 31, 30,31, 31, 30, 31, 30, 31);
}
catch(e) { exception(e); }

// Bug seen on www.apple.com/switch: with a local variable and more
// actuals than formals, and both the arguments and activation
// optimizations in effect, some of the elements of the arguments
// array were set to undefined.

function apple_switch(/* no formals */)
{
	var i=0;   // One actual
    test( "apple switch #1", apple_switch.arguments[0], 'a' );
    test( "apple switch #2", apple_switch.arguments[1], 'b' );
    test( "apple switch #3", apple_switch.arguments[2], 'c' );
    test( "apple switch #4", apple_switch.arguments[3], 'd' );
    test( "apple switch #5", apple_switch.arguments[4], 'e' );
}
apple_switch( 'a','b','c','d','e' );

// Bug 122536: various optimizations were not implemented correctly for
// the Function constructor, causing bugs.  For example, the result of the
// source analysis was not propagated, so the engine was not aware that
// the arguments array was used.

var f = new Function('return arguments[0];');
test( "#122536: parameters in optimized constructed function", f("hei"), "hei" );

// Bug 129055: a formal named 'arguments' would be overwritten by the
// arguments object, but this is almost certainly contrary to the
// spec (the spec says that the activation object is given an arguments
// property and *then* used for variable instantiation, which I take
// to mean even instantiating the formals).
//
// Test moved to bugs section because it caused an unhandleable stack
// overflow.

// Bug #79933: a crash bug, and improper handling of the arguments property
// on functions inside recursions.

function shouldBe(a, bv)
{
    var av = eval(a);
    test( "function.arguments inside recursion: " + a, av, bv )
}

var expected = [99,1,2,3,3,2,1,99,null];
var expno = 0;

var x = 0;
function mf(a,b)
{
  shouldBe("mf.arguments[0]",expected[expno++]);
  x++;
  if (x < 4)
    mf(x,1);
  shouldBe("mf.arguments[0]",expected[expno++]);
  return b;
}
mf(99);
shouldBe("mf.arguments",expected[expno++]);

// Bug #140380: formal called 'arguments' doesn't override builtin 'arguments'.

function fn_with_formal_called_arguments( i, arguments ) { return arguments; }
test( "Bug 140380", fn_with_formal_called_arguments( 1, 2 ), 2 );

// Test that the arguments array supports some of the more obscure
// array operations internally (SetIndexedProperty()).

function argarray_reverse(a,b,c,d)
{
   test("reversing the arguments array #1", arguments.reverse().toString(), "1,2,3,4");
   test("reversing the arguments array #2", ""+a+b+c+d, "1234");
}
argarray_reverse(4,3,2,1);

// Bug #186815: a local declaration of 'arguments' without an initializer
// should not override the existing value.

function arguments_declared()
{
	var arguments;
    return arguments;
}
var x = arguments_declared(1,2,3);
test( "locally declared arguments w/o init #1", x.length, 3 );
test( "locally declared arguments w/o init #2", x[1], 2 );

// Many more things to test here:
//   - probably more; all of this is not in place in the code yet.

testcase( "Compiler bugs -- regression testing" );

// Compiler bug (#156720): when a function contains compiler-generated temps,
// the address of 'arguments' is computed incorrectly and this function will
// throw an exception.

var menu = [];  // just a dummy

function hideallmenus_156720() {
	var level = arguments.length > 0 ? arguments[0] : 1;
	for (var a in menu) {
		var mnu = menu[a];
		if (mnu.level >= level && mnu.expanded == true) {
			showhidemenu(a, false);
		}
	}
}

var exn = false;
try {
	hideallmenus_156720(10);
}
catch (e)
{
	exn = true;
}
test( "Correct address of local arguments variable: ", exn, false, 156720 );

// Compiler bug (#156755): if a function has multiple formals with the same
// name, then references to this name from the body of the function are to
// the last formal with the name, not the first.

function returnSomeValue(a, b, a){
	return a;
}

test( "Correct formal chosen when there is a choice", returnSomeValue(1,2,3), 3, 156755 );

// Compiler bug (#156965): functions declared inside nonsimple functions were
// stored in the global scope.

var o = {
  test3: function(){
    eval(1)
    function onclick(event){alert("in onclick")}
  }
}
window.onclick = undefined;
o.test3();

test( "should be undefined: ", window.onclick, undefined, 156965 );

/* Compatibility matter (bug #21957): the function.arguments object should
   be DontEnum */

function test_enumerable_arguments_property()
{
	for(var l in test_enumerable_arguments_property)
		if( l == 'arguments' )
			return false;
	return true;
}
test( "function.arguments is not enumerable", test_enumerable_arguments_property(), true, 21957 );

/* RTS bug (#213623): scope objects in reified scopes should not
   have prototypes */
function test_prototypes_in_reified_scopes()
{
    with ( { toString : "hi there" } )
    {
        var g = function()
        {
            eval(1);  // force a "reified" scope, ie, an Object
            return toString;
        }
        return g();
    }
}

test( "reified scope objects do not have prototypes", test_prototypes_in_reified_scopes(), "hi there", 213623 );

testmodule_finished();

/* eof */
