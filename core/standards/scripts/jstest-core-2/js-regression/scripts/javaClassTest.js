/* -*- mode: java -*- */

var cvs = "$Id: javaClassTest.js 4838 2006-01-18 05:59:01Z hallvord $";

testmodule( "JS java class test", cvs );

var l = Packages.java.lang.Boolean;
testcase( "properties exist, Boolean" );
try {
    testProperty( "TRUE", l.TRUE );
    testProperty( "FALSE", l.FALSE );
}
catch (e) { exception(e); }

testcase( "properties read as coherent values, Boolean" );
test( "TRUE", l.TRUE,  "true");
test( "FALSE", l.FALSE,  "false");

var l = Packages.java.lang.Character;
testcase( "properties exist, Character" );
try {
    testProperty( "MIN_VALUE", l.MIN_VALUE );
    testProperty( "MAX_VALUE", l.MAX_VALUE );
    testProperty( "MIN_RADIX", l.MIN_RADIX );
    testProperty( "MAX_RADIX", l.MAX_RADIX );
}
catch (e) { exception(e); }

testcase( "properties read as coherent values, Character" );
test( "MIN_VALUE", l.MIN_VALUE,  0x0000);
test( "MAX_VALUE", l.MAX_VALUE,  0xffff);
test( "MIN_RADIX", l.MIN_RADIX,  2);
test( "MAX_RADIX", l.MAX_RADIX,  36);

var l = Packages.java.lang.Integer;
testcase( "properties exist, Integer" );
try {
    testProperty( "MIN_VALUE", l.MIN_VALUE );
    testProperty( "MAX_VALUE", l.MAX_VALUE );
}
catch (e) { exception(e); }

testcase( "properties read as coherent values, Integer" );
test( "MIN_VALUE", l.MIN_VALUE,  -0x80000000);
test( "MAX_VALUE", l.MAX_VALUE,  0x7fffffff);

var l = Packages.java.lang.Long;
testcase( "properties exist, Long" );
try {
    testProperty( "MIN_VALUE", l.MIN_VALUE );
    testProperty( "MAX_VALUE", l.MAX_VALUE );
}
catch (e) { exception(e); }

testcase( "properties read as coherent values, Long" );
test( "MIN_VALUE", l.MIN_VALUE,  -0x8000000000000000);
test( "MAX_VALUE", l.MAX_VALUE,   0x7fffffffffffffff);

var l = Packages.java.lang.Float;
testcase( "properties exist, Float" );
try {
    testProperty( "MIN_VALUE", l.MIN_VALUE );
    testProperty( "MAX_VALUE", l.MAX_VALUE );
    testProperty( "NEGATIVE_INFINITY", l.NEGATIVE_INFINITY );
    testProperty( "POSITIVE_INFINITY", l.POSITIVE_INFINITY );
    testProperty( "NaN", l.NaN );
}
catch (e) { exception(e); }

testcase( "properties read as coherent values, Float" );
test_close( "MIN_VALUE", l.MIN_VALUE,  1.4e-45);
test_close( "MAX_VALUE", l.MAX_VALUE,   3.4028235e+38);
test( "NEGATIVE_INFINITY", l.NEGATIVE_INFINITY,   -1.0/0.0);
test( "POSITIVE_INFINITY", l.POSITIVE_INFINITY,   1.0/0.0);
test( "NaN", l.NaN,   0.0/0.0);

var l = Packages.java.lang.Double;
testcase( "properties exist, Double" );
try {
    testProperty( "MIN_VALUE", l.MIN_VALUE );
    testProperty( "MAX_VALUE", l.MAX_VALUE );
    testProperty( "NEGATIVE_INFINITY", l.NEGATIVE_INFINITY );
    testProperty( "POSITIVE_INFINITY", l.POSITIVE_INFINITY );
    testProperty( "NaN", l.NaN );
}
catch (e) { exception(e); }

testcase( "properties read as coherent values, Double" );
test( "MIN_VALUE", l.MIN_VALUE,  5e-324);
test( "MAX_VALUE", l.MAX_VALUE,   1.7976931348623157e+308);
test( "NEGATIVE_INFINITY", l.NEGATIVE_INFINITY,   -1.0/0.0);
test( "POSITIVE_INFINITY", l.POSITIVE_INFINITY,   1.0/0.0);
test( "NaN", l.NaN,   0.0/0.0);

var l = Packages.java.lang.Math;
testcase( "properties exist, Math" );
try {
    testProperty( "E", l.E );
    testProperty( "PI", l.PI );
}
catch (e) { exception(e); }

testcase( "properties read as coherent values, Math" );
test( "E", l.E,  2.7182818284590452354);
test( "PI", l.PI,   3.14159265358979323846);

var l = Packages.java.lang.Thread;
testcase( "properties exist, Threadh" );
try {
    testProperty( "MIN_PRIORITY", l.MIN_PRIORITY );
    testProperty( "MAX_PRIORITY", l.MAX_PRIORITY );
    testProperty( "NORM_PRIORITY",l.NORM_PRIORITY );
}
catch (e) { exception(e); }

testcase( "properties read as coherent values, Thread" );
test( "MIN_PRIORITY",  l.MIN_PRIORITY,   1);
test( "MAX_PRIORITY",  l.MAX_PRIORITY,   10);
test( "NORM_PRIORITY", l.NORM_PRIORITY,  5);

testmodule_finished();
