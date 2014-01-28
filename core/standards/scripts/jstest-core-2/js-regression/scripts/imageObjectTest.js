/* -*- mode: java -*- */

var cvs = "$Id: imageObjectTest.js 4838 2006-01-18 05:59:01Z hallvord $";

testmodule( "JS image element test", cvs );

var fn  =  "imageHelper.html";
var w=window.open(fn);

testcase( "properties exist" );
var l = w.document.getElementById("i2");
try {
    testProperty( "border", l.border );
    testProperty( "complete", l.complete );
    testProperty( "height", l.height );
    testProperty( "hspace", l.hspace );
    testProperty( "lowscr", l.lowscr );
    testProperty( "name", l.name );
    testProperty( "src", l.src );
    testProperty( "vspace", l.vspace );
    testProperty( "width", l.width );  
   
}
catch (e) { exception(e); }

testcase( "properties read as coherent values" );
var l = w.document.getElementById("i1");

test( 'border', l.border, 2 );
test( "complete", l.complete, true );
test( "height", l.height, 90 );
test( "hspace", l.hspace, 5 );
test( "lowscr", l.lowscr, "navn" );
test( "name", l.name,  "i1");
test( "src", l.src, get_protocol_and_host() + get_pathname("graphics/operalogo_100x105.gif"));
test( "vspace", l.vspace, 5 );
test( "width", l.width, 90 );

testcase( "properties read as coherent values, using defaults" );
var l = w.document.getElementById("i2");

test( 'border', l.border, 1 ); // Opera uses 1 as default border ?!?
test( "height", l.height, 105 );
test( "hspace", l.hspace, 0 );
test( "lowscr", l.lowscr, "" );
test( "name", l.name,  "");
test( "vspace", l.vspace, 0 );
test( "width", l.width, 100 );

testcase( "properties are writeable" );

//All properties are read-only.



w.close();

testmodule_finished();
