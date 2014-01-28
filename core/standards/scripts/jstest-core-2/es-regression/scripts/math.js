/* Regression tests for the Math object.
 *
 * 2001-04-03 / lth
 *
 * FIXME: Some of the number procedures have complex behavior that is not
 * yet well tested.
 */

var cvs = "$Id: math.js 4838 2006-01-18 05:59:01Z hallvord $";

testmodule( "math object", cvs );

try {

testcase( "Properties of the math object" );
 tdef( "Math.E", Math.E );
 tdef( "Math.LN10", Math.LN10 );
 tdef( "Math.LN2", Math.LN2 );
 tdef( "Math.LOG2E", Math.LOG2E );
 tdef( "Math.LOG10E", Math.LOG10E );
 tdef( "Math.PI", Math.PI );
 tdef( "Math.SQRT1_2", Math.SQRT1_2 );
 tdef( "Math.SQRT2", Math.SQRT2 );
 tdef( "Math.abs", Math.abs );
 tdef( "Math.acos", Math.acos );
 tdef( "Math.asin", Math.asin ),
 tdef( "Math.atan", Math.atan ),
 tdef( "Math.atan2", Math.atan2 );
 tdef( "Math.ceil", Math.ceil );
 tdef( "Math.cos", Math.cos );
 tdef( "Math.exp", Math.exp );
 tdef( "Math.floor", Math.floor );
 tdef( "Math.log", Math.log );
 tdef( "Math.max", Math.max );
 tdef( "Math.min", Math.min );
 tdef( "Math.pow", Math.pow );
 tdef( "Math.random", Math.random );
 tdef( "Math.round", Math.round );
 tdef( "Math.sin", Math.sin );
 tdef( "Math.sqrt", Math.sqrt );
 tdef( "Math.tan", Math.tan );
 test( "Math.min.length", Math.min.length, 2 );
 test( "Math.max.length", Math.max.length, 2 );

testcase( "Functionality of the function objects" );
 // Superficial.  Many of these have complex behavior around NaN and infty.
 test( "Math.abs(-1)", Math.abs(-1), 1 );
 test( "Math.abs(1)", Math.abs(1), 1 );
 test( "Math.acos(1)", Math.acos(1), 0.0 );
 test( "Math.asin(1)", Math.asin(1), Math.PI/2.0 );
 test( "Math.atan(0.5)", Math.atan(1), Math.PI/4 );
 test( "Math.atan(0.5,0.5)", Math.atan2(0.5,0.5), Math.PI/4 );
 test( "Math.ceil(0.5)", Math.ceil(0.5), 1.0 );
 test( "Math.ceil(-0.5)", Math.ceil(-0.5), 0.0 );
 test( "Math.cos(PI)", Math.cos(Math.PI), -1 );
 test( "Math.exp(2)", epsclose( Math.exp(2), Math.E*Math.E ), true );
 test( "Math.floor(0.5)", Math.floor(0.5), 0.0 );
 test( "Math.floor(-0.5)", Math.floor(-0.5), -1.0 );
 test( "Math.log(E)", Math.log(Math.E), 1 );
 test( "Math.max()", Math.max(), -Infinity );
 test( "Math.max(10)", Math.max(10), 10 );
 test( "Math.max(-1,0,1)", Math.max(-1,0,1), 1 );
 test( "Math.max(10,NaN,15)", Math.max(10,NaN,15), NaN );
 test( "Math.max(1,-Infinity)", Math.max(1,-Infinity), 1);
 test( "Math.max(1,Infinity)", Math.max(1,Infinity), Infinity);
 test( "Math.min()", Math.min(), Infinity );
 test( "Math.min(10)", Math.min(10), 10 );
 test( "Math.min(-1,0,1)", Math.min(-1,0,1), -1 );
 test( "Math.min(10,NaN,5)", Math.min(10,NaN,5), NaN ); 
 test( "Math.min(1,Infinity)", Math.min(1,Infinity), 1);
 test( "Math.min(1,-Infinity)", Math.min(1,-Infinity), -Infinity);
 test( "Math.pow(2,32)", Math.pow(2,32), 0x100000000 );
 var x = Math.random();
 test( "Math.random()", x >= 0 && x < 1, true );
 // Round has complex behavior around 0 as well.
 test( "Math.round(1.5)", Math.round(1.5), 2.0 );
 test( "Math.round(0.5)", Math.round(0.5), 1.0 );
 test( "Math.round(-1.9)", Math.round(-1.9), -2.0 );
 test( "Math.sin(PI/2)", Math.sin(Math.PI/2), 1 );
 test( "Math.sqrt(4)", Math.sqrt(4), 2 );
 test( "Math.tan(PI/4)", epsclose( Math.tan(Math.PI/4), 1 ), true );

} catch (e) { exception(e); }

testmodule_finished();

/* eof */

