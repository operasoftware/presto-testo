/* Regression tests for Opera's handling of JS numbers and Number objects.
 *
 * The numbers module in Opera doesn't make much sense without IEEE floating
 * point support.  So for the most part, I assume IEEE support below.  However,
 * some systems (at least EPOC) do not support operations on NaN, and may not
 * be able to run this test without tweaking.  Obviously, we cannot claim full
 * conformance on a system that does not support NaN completely.
 *
 * FIXME: test most arithmetic and arithmetic assignment operators
 * FIXME: test toLocaleString.
 */

var cvs = "$Id: number.js 105263 2011-11-16 09:21:53Z hallvord $";

testmodule( "numbers and Number objects", cvs );
expect(216);//number of tests - update this when tests are added!
var n, x;

try {

testcase( "Number and Number.prototype objects" );

 tdef( 'Number.prototype.constructor', Number.prototype.constructor );
 tdef( 'Number.prototype.toString', Number.prototype.toString );
 tdef( 'Number.prototype.toLocaleString', Number.prototype.toLocaleString );
 tdef( 'Number.prototype.valueOf', Number.prototype.valueOf );
 tdef( 'Number.prototype.toFixed', Number.prototype.toFixed );              // Bug 71872
 tdef( 'Number.prototype.toExponential', Number.prototype.toExponential );  // ditto
 tdef( 'Number.prototype.toPrecision', Number.prototype.toPrecision );      // ditto

 tdef( 'Number.MAX_VALUE', Number.MAX_VALUE );
 tdef( 'Number.MIN_VALUE', Number.MIN_VALUE );
 tdef( 'Number.NaN', Number.NaN );
 tdef( 'Number.NEGATIVE_INFINITY', Number.NEGATIVE_INFINITY );
 tdef( 'Number.POSITIVE_INFINITY', Number.POSITIVE_INFINITY );

 n = new Number(128);
 testinstance( 'new Number() instanceof Number', n, Number );

testcase( "Number.prototype.toString()" );
 n = new Number(Number.NaN);
 test( '#1 toString()', n.toString(), "NaN" );
 test( '#1 toString(16)',  n.toString(16), "NaN" );

 n = new Number(Number.POSITIVE_INFINITY);
 test( '#2 toString()', n.toString(), "Infinity" );
 test( '#2 toString(16)', n.toString(16), "Infinity" );

 n = new Number(Number.NEGATIVE_INFINITY);
 test( '#3 toString()', n.toString(), "-Infinity" );
 test( '#3 toString(16)', n.toString(16), "-Infinity" );

 // Integers, small and large, positive and negative
 n = new Number(128);
 test( '#4 toString()', n.toString(), "128" );
 test( '#4 toString(undefined)', n.toString(undefined), "128" );
 test( '#4 toString(2)', n.toString(2), "10000000" );
 test( '#4 toString(8)', n.toString(8), "200" );
 test( '#4 toString(10)', n.toString(10), "128" );
 test( '#4 toString(16)', n.toString(16), "80" );
 test( '#4 toString(32)', n.toString(32), "40" );
 test( '#4 toString(36)', n.toString(36), "3k" );

 // Representable in a double but larger than a 32-bit int
 n = new Number(1234567890123);
 test( '#5 toString()', n.toString(), "1234567890123" );
 test( '#5 toString(undefined)', n.toString(undefined), "1234567890123" );
 test( '#5 toString(8)', n.toString(8), "21756176602313" );
 test( '#5 toString(10)', n.toString(10), "1234567890123" );
 test( '#5 toString(16)', n.toString(16), "11f71fb04cb" );
 test( '#5 toString(32)', n.toString(32), "13tovm16b" );
 test( '#5 toString(36)', n.toString(36), "fr5hugnf" );

 // Integers not representable in a double
 n = new Number(12345678901231234567890123);
 test( '#6 toString()', n.toString(), "1.2345678901231235e+25" );
 test( '#6 toString(undefined)', n.toString(undefined), "1.2345678901231235e+25" );
 test( '#6 toString(8)', n.toString(8), "5066231140423672120000000000" );
 test( '#6 toString(10)', n.toString(10), "1.2345678901231235e+25" );
 test( '#6 toString(16)', n.toString(16), "a364c98227ba280000000" );
 test( '#6 toString(32)', n.toString(32), "a6p69g8jrka000000" );
 test_expect_failure( '#6 toString(36)', 79964, n.toString(36), "1judzchqv80ao7q4g" );

 // Note, the implementation is allowed to choose other representations
 // for negative numbers, so this is specific to Opera.
 n = new Number(-128);
 test( '#7 toString()', n.toString(), "-128" );
 test( '#7 toString(undefined)', n.toString(undefined), "-128" );
 test( '#7 toString(2)', n.toString(2), "-10000000" );
 test( '#7 toString(8)', n.toString(8), "-200" );
 test( '#7 toString(10)', n.toString(10), "-128" );
 test( '#7 toString(16)', n.toString(16), "-80" );
 test( '#7 toString(32)', n.toString(32), "-40" );
 test( '#7 toString(36)', n.toString(36), "-3k" );

 // Zero
 n = new Number(-0.0);
 test( "#8 toString()", n.toString(), "0" ); // Not -0, see 9.8.1
 n = new Number(0.0);
 test( "#9 toString()", n.toString(), "0" );

 expect_exception( "toString not generic #1", TypeError,
                   function ()
                   {
                     var x = new Object();
                     x.toString = Number.prototype.toString;
                     x.toString();
                   } );

 // Integers with other radices
 // Bug #68750
 var zero=0, one=1, five=5, result0="", result1="", result5="", x;
 for (var i=2;i<=36;i++)
 {
   x = zero.toString(i);
   result0 += x == "" ? ("(" + i + ")") : x;
   x = one.toString(i);
   result1 += x == "" ? ("(" + i + ")") : x;
   x = five.toString(i);
   result5 += x == "" ? ("(" + i + ")") : x;
 }
 test( "#10 toString zero", "@" + result0, "@00000000000000000000000000000000000" );
 test( "#10 toString one",  "@" + result1, "@11111111111111111111111111111111111" );
 test( "#10 toString five", "@" + result5, "@1011211105555555555555555555555555555555" );

 // Using an object to denote the radix...
 var x = new Number(65535);
 test( "#11 toString", x.toString(new Number(16)), "ffff" );
 test( "#12 toString", x.toString("16"), "ffff" );
 test( "#13 toString", x.toString(new String("16")), "ffff" );
// if (isExplorer())
   expect_exception( "#14 toString", RangeError,
		     function () { x.toString(new Boolean(true)) } );
// else
 //  test( "#14 toString", x.toString(new Boolean(true)), "65535" );
 test( "#15 toString", (1000000000000000128).toString(), "1000000000000000100" );  // §15.7.4.5

testcase( "valueOf" );
 n = new Number(Math.PI);
 test( "valueOf", n.valueOf(), Math.PI );

 expect_exception( "valueOf is not generic", TypeError,
                   function ()
                   {
                     var x = new Object();
                     x.valueOf = Number.prototype.valueOf;
                     x.valueOf();
                   } );

testcase( "Conversion from string" );
 test( "string->number #1", 2+""/1, 2 );
 test( "string->number #2", typeof(""/3), "number" );

testcase( "toFixed" );
  if (Number.prototype.toFixed) {
  test( "toFixed #0", Number.prototype.toFixed.length, 1 );
  test( "toFixed #1", (10/3).toFixed(10), "3.3333333333" );
  test( "toFixed #2", (3).toFixed(10), "3.0000000000" );
  test( "toFixed #3", (NaN).toFixed(10), "NaN" );
  test( "toFixed #4", (Number.POSITIVE_INFINITY).toFixed(10), (Number.POSITIVE_INFINITY).toString() );
  test( "toFixed #5", (Number.NEGATIVE_INFINITY).toFixed(10), (Number.NEGATIVE_INFINITY).toString() );
  test( "toFixed #6", (10/8).toFixed(20), "1.25000000000000000000" );
  test( "toFixed #7", (10/-8).toFixed(20), "-1.25000000000000000000" );
  test( "toFixed #8", (1000000000000000128).toFixed(0), "1000000000000000128" );
  test( "toFixed #9a", (1e21).toFixed(1), (1e21).toString() );
  test( "toFixed #9b", (-1e21).toFixed(1), (-1e21).toString() );
  test( "toFixed #10", (512.314).toFixed(0), "512" );
  test( "toFixed #11", (-512.314).toFixed(),  "-512" );
  test( "toFixed #12", (0.00123).toFixed(7), "0.0012300" );
  test( "toFixed #13", (0.00123).toFixed(), "0" );
  expect_exception( "toFixed #14", RangeError, function () { return (10/3).toFixed( -1 ); } );
  expect_exception( "toFixed #15", RangeError, function () { return (10/3).toFixed( 21 ); } );
  expect_exception( "toFixed #16", TypeError, // toFixed can only be applied to Number objects
                    function () {
                       var x=new Object();
                       x.toFixed = Number.prototype.toFixed;
                       return x.toFixed(10);
                    } );
  }

testcase( "toExponential" );
  if (Number.prototype.toExponential) {
  test( "toExponential #0", Number.prototype.toExponential.length, 1 );
  expect_exception( "toExponential #1", RangeError, function () { return (10/3).toExponential( -1 ); } );
  expect_exception( "toExponential #2", RangeError, function () { return (10/3).toExponential( 21 ); } );
  expect_exception( "toExponential #3", RangeError, function () { return (1).toExponential( -2147483648 ); } );
  expect_exception( "toExponential #4", TypeError, // toExponential can only be applied to Number objects
                    function () {
                       var x=new Object();
                       x.toExponential = Number.prototype.toExponential;
                       return x.toExponential(10);
                    } );
  test( "toExponential #5", (NaN).toExponential(10), "NaN" );
  test( "toExponential #6", (Number.POSITIVE_INFINITY).toExponential(10), "Infinity" );
  test( "toExponential #7", (Number.NEGATIVE_INFINITY).toExponential(10), "-Infinity" );
  test( "toExponential #8", (3).toExponential(), "3e+0" );
  test( "toExponential #9", (3).toExponential(4), "3.0000e+0" );
  test( "toExponential #10a", (31.4159).toExponential(4), "3.1416e+1" );
  test( "toExponential #10b", (31.4165).toExponential(4), "3.1416e+1" );  // Round to even
  test( "toExponential #11", (1234567890).toExponential(5), "1.23457e+9" );
  test( "toExponential #12", (2e300).toExponential(4), "2.0000e+300" );
  test( "toExponential #13", (0.05).toExponential(3), "5.000e-2" );
  test( "toExponential #14", (0.05050505).toExponential(3), "5.051e-2" );
  test( "toExponential #15", (0.05050505).toExponential(NaN), "5e-2" );  // NaN -> 0
  expect_exception( "toExponential #16", RangeError, function(){ (0.05050505).toExponential(Number.NEGATIVE_INFINITY)} );
  test( "toExponential #17", (3.14159).toExponential(0), "3e+0" );
  test( "toExponential #18", (3.14159).toExponential(), "3.14159e+0" );
  test( "toExponential #19", (3.14159).toExponential(undefined), "3.14159e+0" );
  }

testcase( "toPrecision" );
  if (Number.prototype.toPrecision) {
  test( "toPrecision #0", Number.prototype.toPrecision.length, 1 );
  expect_exception( "toPrecision #1", RangeError, function () { return (10/3).toPrecision( 0 ); } );
  expect_exception( "toPrecision #2", RangeError, function () { return (10/3).toPrecision( 22 ); } );
  expect_exception( "toPrecision #3", TypeError, // toPrecision can only be applied to Number objects
                    function () {
                       var x=new Object();
                       x.toPrecision = Number.prototype.toPrecision;
                       return x.toPrecision(10);
                    } );
  test( "toPrecision #4", (NaN).toPrecision(10), "NaN" );
  test( "toPrecision #5", (Number.POSITIVE_INFINITY).toPrecision(10), "Infinity" );
  test( "toPrecision #6", (Number.NEGATIVE_INFINITY).toPrecision(10), "-Infinity" );
  test( "toPrecision #7", (3.14159).toPrecision(), (3.14159).toString() );
  test( "toPrecision #8", (3.14159).toPrecision(undefined), (3.14159).toString() );
  test( "toPrecision #9", (3.14159e14).toPrecision(undefined), (3.14159e14).toString() );
  test( "toPrecision #10", (314.159).toPrecision(2), "3.1e+2" );
  test( "toPrecision #11", (314.159).toPrecision(3), "314" );
  test( "toPrecision #12", (31.4159).toPrecision(3), "31.4" );
  test( "toPrecision #13", (3.1415900009).toPrecision(10), "3.141590001" );  // 9 digits after the point
  test( "toPrecision #14", (3.14159000009).toPrecision(10), "3.141590000" ); // 9 digits after the point
  test( "toPrecision #15", (3.14159e20).toPrecision(10), "3.141590000e+20" );
  test( "toPrecision #16", (31415.9).toPrecision(1), "3e+4" );
  }

testcase( "Arithmetic" );
 // Note, not binary + on strings.
 // +, -, *, /, %
 // unary +, -
 test( "ADD #1", 1+1, 2 );
 ttrue( "ADD #2", isNaN(Infinity + -Infinity) );
 test( "ADD #3", Infinity + Infinity, Infinity );
 test( "ADD #4", -Infinity + -Infinity, -Infinity );
 test( "ADD #5", Infinity + 7, Infinity );
 ttrue( "ADD #6", isNegativeZero( -0 + -0 ) );
 ttrue( "ADD #7", isPositiveZero( 0 + -0 ) );
 test( "ADD #8", 0 + 1.0e-307, 1.0e-307 );
 test( "ADD #9", -1.0e-307 + 1.0e-307, 0 );

 // Test: overflow
 // Test: rounding
 // Test: gradual underflow

testcase( "INT32 boundary conditions" );

 // The peephole optimizer may be a problem here -- it will reduce some of
 // these operations to constants.

 test( "INT32 unminus #1", -(-2147483647), 2147483647 );        // INT32 all the way
 test( "INT32 unminus #2", -(-2147483648), 2147483648 );        // double => INT32 => double

 test( "INT32 bitnot #1", ~2147483648, 2147483647 );
 test( "INT32 bitnot #2", ~2147483647, -2147483648 );

 test( "INT32 + overflow #1", 2147483647 + 1, 2147483648 );  // INT32 + INT32 => double
 test( "INT32 + overflow #2", 2147483647 + 3, 2147483650 );  // ditto
 test( "INT32 + underflow", -2147483648 + -1, -2147483649 ); // ditto

 test( "INT32 - underflow #1", -2147483648 - 1, -2147483649 );
 test( "INT32 - underflow #2", -2147483647 - 3, -2147483650 );
 test( "INT32 - overflow #1", -2147483648 + 1, -2147483647 );
 test( "INT32 - overflow #2", -2147483648 + 3, -2147483645 );

 test( "INT32 * overflow #1", 65536 * 65536, 4294967296 );      // INT32 * INT32 => double
 test( "INT32 * overflow #2", -65536 * 65536, -4294967296 );      // INT32 * INT32 => double
 test( "INT32 * overflow #3", -65536 * -65536, 4294967296 );      // INT32 * INT32 => double

 test( "INT32 * nonoverflow #1", 32768 * 32768, 1073741824 );      // INT32 * INT32 => INT32
 test( "INT32 * nonoverflow #2", 2 * 65536, 131072 );              // INT32 * INT32 => INT32 via double
 test( "INT32 * nonoverflow #3", -2 * 65536, -131072 );              // INT32 * INT32 => INT32 via double


testcase( "Arithmetic assignment operators" );
 // Note, not += on strings.
 // +, -, *, /, %
 // unary ++, --


testcase( "Remainder (%) operator" );  // §11.5.3
 test( "NaN operand #1", NaN % 1, NaN );
 test( "NaN operand #2", 1 % NaN, NaN );
 test( "Infty operand #1", Number.POSITIVE_INFINITY % 1, NaN );
 test( "Infty operand #2", Number.NEGATIVE_INFINITY % 1, NaN );
 test( "Infty operand #3", Number.NEGATIVE_INFINITY % 0, NaN );
 test( "Infty operand #4", 426 % Number.NEGATIVE_INFINITY, 426 );
 test( "Zero dividend", 0 % 37, 0 );
 test( "Zero divisor", 37 % 0, NaN );
 test( "Other #1", 10 % 20, 10 );
 test( "Other #2", 16 % 3, 1 );
 test( "Other #3", -16 % 3, -1 );
 test( "Other #4", 16 % -3, 1 );
 test( "Other #5", -16 % -3, -1 );
 test( "Other #6", 3.5 % 2, 1.5 );

testcase( "Bitwise operators and basic int32 properties" );
 // &, |, ^, ~
 test( "Positive is positive #1", 0xFFFFFFFF, Math.pow(2,32)-1 );
 test( "INT32-to-double conversion", 0xFFFFFFFF | 0, -1 );
 test( "double-to-INT32 conversion", -1 & 0xFFFFFFFF, -1 );
 test( "bit-and #1", 0xFFFF & 0xAAAA, 0xAAAA );
 test( "bit-xor #1", 0xFFFF ^ 0xAAAA, 0x5555 );
 test( "bit-or #1", 0x5555 | 0xAAAA, 0xFFFF );
 test( "complement #1", ~0xFFFFFFFF, 0 );
 test( "complement #2", ~-1, 0 );
 test( "complement #3", ~0xAAAA5555, 0x5555AAAA );
 test( "complement #4", ~0x5555AAAA, 0xAAAA5555 | 0 );
 test( "complement #5", (~0x5555AAAA == 0xAAAA5555), false );
 test( "IOR mod32 conversion", 0x100000000 | 0, 0 );
 test( "AND mod32 conversion", -0x80000000 & 0x80000000, -0x80000000 );
 test( "XOR mod32 conversion", -0x8FFFFFFF ^ 0x81111111, 0x70000001 ^ 0x81111111 );

testcase( "Bitwise assignment operators" );
 // &=, |=, ^=
 x = 0x100000000;  test( "IOR mod32 conversion", x |= 0, 0 );
 x = 0x5555AAAA;   test( "IOR", x |= 0x22224444, 0x7777EEEE );
 x = -0x80000000;  test( "AND mod32 conversion", x &= 0x80000000, -0x80000000 );
 x = -0x8FFFFFFF;  test( "XOR mod32 conversion", x ^= 0x81111111,
			 0x70000001 ^ 0x81111111 );

testcase( "Shift operators" );
 // <<, >>, >>>
 test( "Left shift #1", 0xFFFFFFFF << 2, 0xFFFFFFFC | 0 );
 test( "Left shift #2", 0x5555AAAA << 1, 0xAAAB5554 | 0 );
 test( "Left shift #3", 0x111111111 << 0, 0x11111111 );
 test( "Left shift #4", 0x1 << 31, 0x80000000 | 0 );
 test( "Left shift #5", 0x1 << 32, 0x01 );
 test( "Left shift #6", 0x1 << -1, 0x80000000 | 0 );

 test( "Right shift #1", 0xFFFFFFFF >> 2, 0xFFFFFFFF | 0 );
 test( "Right shift #2", 0xAAAA5555 >> 1, 0xD5552AAA | 0 );
 test( "Right shift #3", 0x111111111 >> 4, 0x01111111 );
 test( "Right shift #4", 0x80000000 >> 31, 0xFFFFFFFF | 0 );
 test( "Right shift #5", 0x80000000 >> 32, 0x80000000 | 0 );
 test( "Right shift #6", 0x80000000 >> -1, 0xFFFFFFFF | 0 );

 test( "Unsigned right shift #1", 0xFFFFFFFF >>> 2, 0x3FFFFFFF );
 test( "Unsigned right shift #2", 0xAAAA5555 >>> 1, 0x55552AAA );
 test( "Unsigned right shift #3", 0x111111111 >>> 4, 0x01111111 );
 test( "Unsigned right shift #4", 0x80000000 >>> 31, 1 );
 test( "Unsigned right shift #5", 0x80000000 >>> 32, 0x80000000 );
 test( "Unsigned right shift #6", -1 >>> 0, 0xFFFFFFFF );
 test( "Unsigned right shift #7", -1 >>> -1, 1 );

testcase( "Shift assignment operators" );
 // <<= >>= >>>=
 x = 0xFFFFFFFF;  test( "Left shift #1", x <<= 2, 0xFFFFFFFC | 0 );
 x = 0x5555AAAA;  test( "Left shift #2", x <<= 1, 0xAAAB5554 | 0 );
 x = 0x111111111; test( "Left shift #3", x <<= 0, 0x11111111 );
 x = 0x01;        test( "Left shift #4", x <<= 31, 0x80000000 | 0 );
 x = 0x01;        test( "Left shift #5", x <<= 32, 0x01 );
 x = 0x01;        test( "Left shift #6", x <<= -1, 0x80000000 | 0 );

 x = 0xFFFFFFFF;  test( "Right shift #1", x >>= 2, 0xFFFFFFFF | 0 );
 x = 0xAAAA5555;  test( "Right shift #2", x >>= 1, 0xD5552AAA | 0 );
 x = 0x111111111; test( "Right shift #3", x >>= 4, 0x01111111 );
 x = 0x80000000;  test( "Right shift #4", x >>= 31, 0xFFFFFFFF | 0 );
 x = 0x80000000;  test( "Right shift #5", x >>= 32, 0x80000000 | 0 );
 x = 0x80000000;  test( "Right shift #6", x >>= -1, 0xFFFFFFFF | 0 );

 x = 0xFFFFFFFF;  test( "Unsigned right shift #1", x >>>= 2, 0x3FFFFFFF );
 x = 0xAAAA5555;  test( "Unsigned right shift #2", x >>>= 1, 0x55552AAA );
 x = 0x111111111; test( "Unsigned right shift #3", x >>>= 4, 0x01111111 );
 x = 0x80000000;  test( "Unsigned right shift #4", x >>>= 31, 1 );
 x = 0x80000000;  test( "Unsigned right shift #5", x >>>= 32, 0x80000000 );
 x = -1;          test( "Unsigned right shift #6", x >>>= 0, 0xFFFFFFFF );
 x = -1;          test( "Unsigned right shift #7", x >>>= -1, 1 );

} catch (e) { exception( e ); }

testmodule_finished();

/* eof */

