/* -*- mode: java; mode: font-lock; tab-width: 4; c-basic-offset: 4; c-file-style:"stroustrup"  -*- */

var cvs = "$Id: statements.js 4838 2006-01-18 05:59:01Z hallvord $";

testmodule( "statements", cvs );

testcase( "goto statement" );

       var i=0
       var s=""
again: s = s + i + " "
       i=i+1
       if (i >= 10) goto out
       goto again
out:   test( "basic goto loop", s, "0 1 2 3 4 5 6 7 8 9 " );

testcase( "for-loop regression tests" );

var s = "";
for ( var i=0 ; i < 10 ; i++ )
	s += i;

test( 'for ( var i=... ) #1', i, 10 );
test( 'for ( var i=... ) #2', s, '0123456789' );

var s = "";
for ( var i=0, j=10 ; i < 10 ; i++, j++ )
	s += i;

test( 'for ( var i=...,j=... ) #1', i, 10 );
test( 'for ( var i=...,j=... ) #2', j, 20 );
test( 'for ( var i=...,j=... ) #3', s, '0123456789' );

expect_exception( "undefined var in for loop header",
				  ReferenceError,
				  function () { for ( var i=0 ; i < ixxi ; i++ ) i++; } );

testcase( "for-in loop" );

var obj = { a: "name a", b: "name b", c: "name c" };
obj[0] = "name zero";
obj[5] = "name five";

function MyConstructor()
{
	this.a = "subname a";
	this.d = "name d from subclass";
	this[5] = "subname five";
}
MyConstructor.prototype = obj;

var i;
var s = "";
var myobj = new MyConstructor();
var shouldfind = [ ["a", "subname a", 0], ["b", "name b", 0], ["c", "name c", 0], ["d", "name d from subclass", 0],
				   [0, "name zero", 0], [5, "subname five", 0] ];
function search(i)
{
	for ( var k=0 ; k < shouldfind.length && shouldfind[k][0] != i ; k++ )
		;
	tdef( "shouldfind " + i, shouldfind[k] );
	return shouldfind[k];
}

for ( i in myobj )
{
	var x = search(i);
    x[2]++;
	test( "found value " + i, myobj[i], x[1] );
}

for ( i=0 ; i < shouldfind.length ; i++ )
	test( "found exactly once" + shouldfind[i][0], shouldfind[i][2], 1 );

// Enumerations across 'undefined' supposedly works in Mozilla 1.0 RC1, NS 4.7, and IE 6, but 
// is clearly wrong according to the ECMAScript spec
/* Opera is compatible with major browsers.
expect_exception( "enumerate undefined", TypeError,
				  function () { for(i in undefined) showfailure( "undefined has no fields" ); } );
*/

// Enumerations across 'null' supposedly works in Mozilla 1.0 RC1, NS 4.7, and IE 6, but 
// is clearly wrong according to the ECMAScript spec
/* Opera is compatible with major browsers.
expect_exception( "enumerate null", TypeError,
				  function () { for(i in null) showfailure( "null has no fields" ); } );
*/

// Regression, picked up from syntax.js 
// The problem is the for ( var ... in ... ), so don't change this to for ( ... in ... )

var x = new Object();
var x = {};
x.a = 1;
x.b = 2;
x.c = 3;
var j=0;
for ( var i in x )
	j = j+1;
test( 'preincrement in body of FOR-IN', j, 3 );

// Enumerations on HTML elements

var s = "";
var n = 0;
for ( i in document.getElementById("yow") )
{
	s += ' ' + i;
    n++;
}
// FIXME: what's the test here?
//alert( n + '\n' + s );

// From Martin

var shows = new Array();
shows['hej'] = 'hå';
var x=0;
for ( i in shows ) 
  if (shows[i] == 'hå') 
    x++;
test( "Regression from Martin #1", x, 1 );
test( "Regression from Martin #2", shows.length, 0 );

// Indices should be returned as string by for..in even if they
// are stored as numbers internally (#63432)

var theMenu = new Array();
theMenu[1] = new Array();
theMenu[1.1] = new Array();

for ( i in theMenu )
	test( "Bug #63432 regression", typeof i, "string" );

testcase( "break turns into return" );

// This catches a problem internally in the engine where break was
// not handled properly.  

var break_is_broken_v = 10;
function break_is_broken()
{
  c = 10;
  n = new Array("BMW", 0, 0, 0, 0, 0, "Else");
  old_make = "BMW";
  r = q = -1;

  for (i = 0; i <= c; i++)
  {
    if (n[i] == old_make && old_make != "")
      r = q = i;

    if (q != -1)
      {
        if (n[i] == 0)
          r = i;

        if (n[i] != old_make && n[i] != 0)
            break;  // This break would turn into a return
      }
  }
  break_is_broken_v = 100;
}
break_is_broken();

test( "regression 1", break_is_broken_v, 100 );

testcase( "for-in regressions" );

var s='';
for(a in this) 
  s+='\n'+a;

test( "for-in regression #156753", s.indexOf('.'), -1 ); // No .Txxxxxxx variables in the global scope

var ar = new Object; 
ar["aa"] = "aa"; 
ar["4444555566662222"] = "xx"; 
var s = "";
for (var i in ar)
	s = s + i;

test( "for-in regression #171102", s, "aa4444555566662222" );

testmodule_finished();
