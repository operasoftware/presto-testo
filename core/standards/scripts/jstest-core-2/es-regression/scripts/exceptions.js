/* Regression tests for ECMAScript exceptions.
 */

var cvs = "$Id: exceptions.js 8647 2006-09-20 16:30:25Z hallvord $";

testmodule( "Exceptions", cvs );

testcase("Basic catch/throw");

 //  Basic catch/throw on the user level

 expect_exception_value( "Basic #1", 'Cookies!', function(){ throw 'Cookies!'; } );

 // Try/catch/finally

 var zappa=1;
 try {
   zappa=2;
   throw 'Cookies!';
 } 
 catch (e) {}
 finally {
   zappa=1;
 }
 test( "Basic #2", zappa, 1 );

 // Nested try/catch + try/finally

 captured = false;
 zappa=1;
 try {
   try {
     zappa *= 2;
     throw zappa;
   }
   finally {
     zappa /= 2;
   }
 }
 catch (e) {}
 test( "Basic #3", zappa, 1 );

 // catch and re-throw

 zappa=37;
 try {
   try {
     zappa *= 2;
     throw 'Cookies!';
   }
   catch (e) {
     throw (e+e);
   }
   finally {
     zappa /= 2;
   }
 }
 catch (e) {
   captured = [ e, 37 ];
 }
 test_deep( "Basic #4", captured, [ 'Cookies!Cookies!', zappa ] );

 // catch and re-throw, but throw in finally clause should take
 // precedence

 captured = false;
 zappa=1;
 try {
   try {
     zappa *= 2;
     throw 'Cookies!';
   }
   catch (e) {
     throw (e+e);
   }
   finally {
     zappa /= 2;
     throw 'chicken mcnuggets!';
   }
 }
 catch (e) {
   captured = [ e, 1 ];
 }
 test_deep( "Basic #5", captured, [ 'chicken mcnuggets!', 1 ] );

 // A deep throw that un-nests a bunch of FINALLYs

 captured = false;
 var tmp = 'failure';
 zappa=10
 try {
   function f() 
   {
     try { 
       if (!--zappa) 
         throw 'zapata'; 
       else
         f();
     } 
     finally { ++zappa; } 
   }
   f();
 }
 catch (e) {
   captured = [ e, 10 ];
 }
 finally {
   tmp = zappa;
 }
 test_deep( "Basic #6", captured, [ 'zapata', tmp ] );

 // Mixed nonlocal control flow: BREAK out of a TRY-FINALLY

 zappa=10;
 out:
 while (zappa > 0) {
   while (zappa > 0) {
     try {
       do {
         if (--zappa == 5)
           break out;
       } while (zappa);
     }
     finally {
       zappa=100;
     }
   }
   bomb();
 }
 test( "Basic #7", zappa, 100 );

// Bug 167420: return from a finally clause

function return_from_finally()
{
    var res = "WRONG";
    try {
      res = "RIGHT";
    }
    catch (e) {
      res = "FAILED";
    }
    finally {
      return res;
    }
    return false;
}

test( "Return from within finally", return_from_finally(), "RIGHT", 167420 );  

//////////////////////////////
//////////////////////////////

// Common for the following tests

var x = 1;

// ReferenceError (§8.7.1, §8.7.2)

expect_exception( "ReferenceError #1 (bogus rvalue)", ReferenceError, function(){show(unlikelyvariablename);} );
  
// Does new of a non-object throw a TypeError (§11.2.2)

expect_exception( "TypeError #1", TypeError, function(){ new x(); } );
expect_exception( "TypeError #2", TypeError, function(){ new x; } );

var myobj = new Object();  // does not implement [[Construct]]

expect_exception( "TypeError #3", TypeError, function(){ new myobj(); } );

// Does call to a non-function throw a TypeError (§11.2.3)

expect_exception( "TypeError #4", TypeError, function(){ x(7); } );
expect_exception( "TypeError #5", TypeError, function(){ (new Object())(7); } );

// Does 'instanceof' throw the right errors (§11.8.6)

// Should fail because x is not an object.

expect_exception( "TypeError #6", TypeError, function(){ return String instanceof x; } );

// Should fail because an instance of Object does not
// implement [[HasInstance]] (§8.6.2)  See also below, §15.3.5.3

expect_exception( "TypeError #7", TypeError, function(){ return String instanceof (new Object()); } );

// Does 'in' throw the right errors (§11.8.7)

// MSIE5 can't parse 'in' correctly (maybe it doesn't know it as an operator?)
if (!isExplorer())
  eval( 'expect_exception( "TypeError #8", TypeError, function(){ return "foo" in x; } );' );

// Does [[DefaultValue]] throw the right error?
//
// [[DefaultValue]] is called by ToPrimitive(), which is called
// by ToNumber() and ToString().  It should throw an exception if
// it can't convert the object to a number of string.
// §8.6.2.6, §9.1

var o = new Object();
o.toString = 1;
o.valueOf = 2;

expect_exception( "TypeError #9", TypeError, function(){ show(1+o); } );             // ToNumber() should fail
expect_exception( "TypeError #10", TypeError, function(){ show( String( o ) ); });   // ToString() should fail

// Function.toString on something that isn't a function should
// throw a type error §15.3.4.2

expect_exception( "TypeError #12", TypeError, 
		  function()
                  {
                    var x=new Object(); 
		    x.toString = Function.prototype.toString; 
		    x.toString(); 
                  } );

// Function::apply should barf if _this_ is not a function; that
// is caught elsewhere.  It should also barf if the second argument
// is not an array or arguments object.  §15.3.4.3

expect_exception_but_expect_failure( "TypeError #13", 79972, TypeError,
		  function(){  var f = (function () { return 1; });
                               f.apply( (new Object()), (function () { this.foo = 33; }) );
                  } );

// Ditto, Function::call should barf if _this_ is not a function;
// that is caught elsewhere.  §15.3.4.4

// [[HasInstance]]: prototype must be an object.  §15.3.5.3

function HIfun() {}
HIfun.prototype = 1;

expect_exception( "TypeError #14", TypeError, function () { return (new Object()) instanceof HIfun; } );

// §15.9.5.9, §15.9.5.27

function DateSpoofer(){}
DateSpoofer.prototype = new Date();

expect_exception( "TypeError #15", TypeError, function(){ (new DateSpoofer()).getTime(); } );
expect_exception( "TypeError #16", TypeError, function(){ (new DateSpoofer()).setTime(0); } );

// FIXME
expect_exception( "TypeError #17", TypeError, function(){ var r = /.* /; (new RegExp( r, "g" )); } );

// Syntax error on eval

zappa = "this is an invalid program";
expect_exception( "SyntaxError #1", SyntaxError, function(){ eval( zappa ); } );

// Does new Function() throw SyntaxError?  §15.3.2.1

var bad_arglist = "a,b*"
var ok_arglist = "a,b"
var bad_body = "a+b*"
var ok_body = "a+b"

expect_exception( "SyntaxError #2", SyntaxError, function(){ new Function( bad_arglist, ok_body ); });
expect_exception( "SyntaxError #3", SyntaxError, function(){ new Function( ok_arglist, bad_body ); });

// §15.10.2.2, §15.10.4.1

expect_exception( "SyntaxError #4", SyntaxError, function(){ (new RegExp( "$^((" )); } );
expect_exception( "SyntaxError #5", SyntaxError, function(){ (new RegExp( ".*", "gh" )); } );

// Does URI parsing throw URIError?  §15.1.3

expect_exception_but_expect_failure( "URIError #1", 79973, URIError, function(){ decodeURI( "http://%dc%91.com" ); } );

// Setting array.length with range beyond 2^32-1 may throw RangeError

var o = new Array();
expect_exception( "RangeError #1", RangeError, function(){ o.length = 4294967296; } );  // 4294967296 = 2^32

// §15.7.4.5

if (Number.toFixed)  		// Not in Opera 6
{
  expect_exception( "RangeError #2", RangeError, function(){ (3.14159).toFixed( -8 ); } );
  expect_exception( "RangeError #3", RangeError, function(){ (3.14159).toFixed( 21 ); } );
}

// §15.7.4.6

if (Number.toExponential)	// Not in Opera 6
{
  expect_exception( "RangeError #4", RangeError, function(){ (3.14159).toExponential( -8 ); } );
  expect_exception( "RangeError #5", RangeError, function(){ (3.14159).toExponential( 21 ); } );
}

// §15.7.4.7

if (Number.toPrecision)		// Not in Opera 6
{
  expect_exception( "RangeError #6", RangeError, function(){ (3.14159).toPrecision( 0 ); } );
  expect_exception( "RangeError #7", RangeError, function(){ (3.14159).toPrecision( 22 ); } );
}

// Regression tests

// Bug #unknown
// 'throw' out of eval() should propagate the exception

expect_exception( "UserError #1", Error, function(){ eval( "throw new Error();" ) } );

// Bug #48391, modified to actually show the bug.

testcase("Bug #48391");
var first_this = null;
var second_this = null;
var third_this = null;

function A() { this.a = a; }
function B() { this.b = b; }

function a() 
{ 
  second_this = this;
  throw new Error(); 
}

function b(x)
{
  try {
    first_this = this;
    x.a();
  }
  catch( ex ) {
    third_this = this;
  }
}

(new B()).b(new A());

var x = first_this == second_this;
var y = second_this == third_this;
var z = third_this == first_this;

test( "Throwing an exception in a call restores 'this'." + x + " " + y + " " + z,
      z,
      true );

// Same test, apparently!

var result = "";
var obj1 = { x: "inner", f: function () { throw 0; } }

function scopetest()
{
    this.x = "outer";
    try
    {
	result += this.x;
	obj1.f();
    }
    catch( ex )
    {
	result += this.x;
    }
    test( "Testing that exception unwinds 'this' stack.", result, "outerouter" );
}

scopetest();

// Bug 227582: compiler would crash when compiling this function.
// A WITH pushed by a catch would be conflated with a WITH pushed
// by the program, leading to incorrect behavior in the latter case.
// The bug only appears if there's a TRY..FINALLY without a CATCH, 
// with a surrounding WITH.

var frotz = 42;

function test227582() {
    var sc_frame = new Object();
    with(sc_frame) {
	try {
	    return 'done';
	} finally {
	    frotz = 37;
	}
    }
}
test( "exception handling inside with", test227582() + frotz, "done37", 
      "#227582" );

testmodule_finished();

// eof
