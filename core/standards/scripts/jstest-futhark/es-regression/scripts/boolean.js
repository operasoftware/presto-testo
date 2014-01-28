/* Regression tests for Opera's handling of JS booleans and Boolean objects.
 *
 * 2001-04-04 / lth
 */

var cvs = "$Id: boolean.js 43149 2009-03-13 17:38:07Z hallvord $";

testmodule( "booleans and Boolean objects", cvs );
expect(24);//number of tests - update this when tests are added!
try {

var x, y;

testcase( "Boolean cast" );
 x = undefined; test( 'Boolean(undefined)', Boolean(x), false );
 x = null;      test( 'Boolean(null)', Boolean(x), false );
 x = true;      test( 'Boolean(true)', Boolean(x), true );
 x = false;     test( 'Boolean(false)', Boolean(x), false );
 x = 0.0;       test( 'Boolean(+0.0)', Boolean(x), false );
 x = -0.0;      test( 'Boolean(-0.0)', Boolean(x), false );
 x = NaN;       test( 'Boolean(NaN)', Boolean(x), false );
 x = 42;        test( 'Boolean(42)', Boolean(x), true );
 x = "";        test( 'Boolean("")', Boolean(x), false );
 x = "x";       test( 'Boolean("x")', Boolean(x), true );
 x = Boolean;   test( 'Boolean(Boolean)', Boolean(x), true );
 test( 'length', Boolean.length, 1 );

testcase( "Boolean prototype" );
 test( 'Boolean.prototype.valueOf() is false', Boolean.prototype.valueOf(), false );
 tdef( 'Boolean.prototype.constructor', Boolean.prototype.constructor );
 tdef( 'Boolean.prototype.toString', Boolean.prototype.toString );
 tdef( 'Boolean.prototype.valueOf', Boolean.prototype.valueOf );

testcase( "construction and value extraction" );
 x = new Boolean(true);
 y = new Boolean(false);
 test( 'Boolean object is instance of Boolean', x instanceof Boolean, true );
 test( 'valueOf() #1', x.valueOf(), true );
 test( 'valueOf() #2', y.valueOf(), false );
 test( 'toString() #3', x.toString(), "true" );
 test( 'toString() #4', y.toString(), "false" );
 test( 'toString() #5', typeof (new Boolean(1)).toString(), 'string' );

testcase( "comparisons among various types" );
 test( 'false == empty string', false == "", true );
 test( 'false == nonempty string', false == "foo", false );

} catch (e) { exception( e ); }

testmodule_finished();

/* eof */

