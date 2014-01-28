var cvs = "$Id: js_area.js 22548 2008-01-23 21:29:12Z hallvord $";

testmodule( "JavaScript 1.3 area test", cvs );

var a1 = document.getElementById("a1");

testcase( "visible" );

tdef( 'visible #1', a1 );
testcase( "properties" );
test( 'alt', a1.alt,  "This is my area" );
test( 'shape', a1.shape, "circle");
test( 'coords', a1.coords, "10,10,10");

testcase( "toString" );

// MSIE compatible interpretation of string representation
var s = a1 + "";
var t = "graphics/operalogo_100x105.gif";
test( 'toString #1', s.lastIndexOf(t)+t.length, s.length );



testmodule_finished();

