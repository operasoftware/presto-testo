var cvs = "$Id: js_area.js 4838 2006-01-18 05:59:01Z hallvord $";

testmodule( "JavaScript 1.3 area test", cvs );

var a1 = document.getElementById("a1");

testcase( "visible" );

tdef( 'visible #1', a1 );

testcase( "toString" );

// MSIE compatible interpretation of string representation
var s = a1 + "";
var t = "graphics/operalogo_100x105.gif";
test( 'toString #1', s.lastIndexOf(t)+t.length, s.length );

testmodule_finished();

