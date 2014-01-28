var cvs = "$Id: js_anchor.js 4838 2006-01-18 05:59:01Z hallvord $";

testmodule( "JavaScript 1.3 anchor test", cvs );


var a1 = document.getElementById("a1");
var a2 = document.getElementById("a2");
var a3 = document.getElementById("a3");

testcase( "visible" );

tdef( 'visible #1', a1 );
tdef( 'visible #1', a2 );
tdef( 'visible #1', a3 );

testcase( "toString" );

// Seems reasonable to me but nobody else implements it either.
// test( 'toString #1', a1 + "", "[object HTMLAnchorElement]" );

testcase( "name" );

test( 'name #0', typeof(a1.name), "string" );
test( 'name #1', a1.name, "ThisIsMyAnchor" );
test( 'name #2', a2.name, "ThisIsAnotherAnchor" );

if( is_phase( 2 ) )
{
   testcase( "x and y" );

   test( 'x coord #0', typeof(a1.x), "number" );
   test( 'x coord #1', a1.x, 0 );
   test( 'x coord #2', a2.x, 0 );
   test( 'x coord #3', a3.x > a2.x, true );

   test( 'y coord #0', typeof(a1.y), "number" );
   test( 'y coord #1', a1.y, 0 );
   test( 'y coord #2', a2.y > a1.y, true );
   test( 'y coord #3', a3.y == a2.y, true );
}

testcase( "text" );

test( 'text #0', typeof(a1.text), "string" );
test( 'text #1', typeof(a3.text), "string" );
test( 'text #2', a1.text, "Anchor 1" );
// the test failed in Opera without the removeWhiteSpace().
test( 'text #3', removeWhiteSpace( a3.text ), "" ); 

// added by torstein
testcase( "changing property values" );

a1.name = "new name";

test( "name", a1.name, "new name" );

if( a1.text != undefined )
{
   a1.text = "new text";
   test( "text", a1.text, "new text" );
}

if( a1.text != undefined )
{
   a1.x = 1;
   test( "x", a1.x, 1 );
}

if( a1.text != undefined )
{
   a1.y = 1;
   test( "y", a1.y, 1 );
}


testmodule_finished();
