/* -*- mode: java -*- */

var cvs = "$Id: javaObjectTest.js 19486 2007-10-08 13:12:39Z hallvord $";

testmodule( "JS java pacage test", cvs );

var l = Packages.java.lang;
testcase( "properties exist, lang" );
try {
    testProperty( "Boolean", l.Boolean );
}
catch (e) { exception(e); }

testcase( "properties read as coherent values, lang" );
test( "Boolean", l.Boolean,  Packages.java.lang.Boolean);

var l = Packages.java;
testcase( "properties exist, java" );
try {
    testProperty( "lang", l.lang );
}
catch (e) { exception(e); }

testcase( "properties read as coherent values, java" );
test( "lang", l.lang,  Packages.java.lang);

testmodule_finished();
