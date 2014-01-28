/* -*- mode: java -*- */

var cvs = "$Id: javaArrayTest.js 4838 2006-01-18 05:59:01Z hallvord $";

testmodule( "JS java array test", cvs );

var size  = 5;
var l = java.lang.reflect.Array.newInstance(Packages.java.lang.Boolean,size);

testcase( "properties exist" );
try {
    testProperty( "length", l.length );
}
catch (e) { exception(e); }

testcase( "properties read as coherent values" );

test( "length", l.length,  size);


testcase( "properties are writeable" );

//All properties are read-only.


testmodule_finished();
