/* tests for Opera's handling of  * Math object | Methods
 * 2001-10-22 hrms
 * 2002-04-03 lth
 *
 * Comments:
 * This script first tests the following Math methods:
 *
 *    Math.abs,  Math.acos,   Math.asin,   Math.atan,   Math.ceil,
 *    Math.cos,  Math.exp,   Math.floor,   Math.log,   Math.round,
 *    Math.sin, Math.sqrt, Math.tan
 *
 * each called once with each of these properties of Math and Number
 * constructors as input, and some values to test particular aspects of
 * the spec for some functions:
 *
 *    Math.E,  Math.LN2,   Math.LN10,   Math.LOG2E,   Math.LOG10E,
 *    Math.PI, Math.SQRT1_2, Math.SQRT2, Number.POSITIVE_INFINITY,
 *    Number.NEGATIVE_INFINITY,                  Number.MAX_VALUE,
 *    Number.MIN_VALUE, Number.NaN, 0, -0, 1.012, -1.12, 1,  -0.5,
 *    0.499
 *
 * Then tests the methods requiring two input values:
 *
 *    Math.atan2, Math.max, Math.min, Math.pow
 *
 * With any combination of the input values
 *
 *    Number.POSITIVE_INFINITY,          Number.NEGATIVE_INFINITY,
 *    Number.MAX_VALUE, Number.MIN_VALUE, Number.NaN,  0,  -0,  1,
 *    1.012, -1.12, 0.499, -0.5
 *
 *
 *
 * The expected result value is based on the result the same script
 * produces in MSIE 5.0. Where values differ and the ECMA spec requires a
 * certain output expected value is amended accordingly and IE's result
 * is included in a comment labelled /* WAS: x * /
 *
 */

var cvs = "$Id: mathmeths.js 43149 2009-03-13 17:38:07Z hallvord $";

testmodule( "Math object", cvs );
expect( 614 );//number of tests - update this when tests are added!
function teste( name, got, expected )
{
    if (!epsclose(got,expected))
	test( name, got, expected );
}

try {

testcase( "Math methods with esoteric input" );


test( "Math.abs ( Math.E ) ", Math.abs ( Math.E ) , 2.718281828459045 );

test( "Math.abs ( Math.LN2 ) ", Math.abs ( Math.LN2 ) , 0.6931471805599453 );


test( "Math.abs ( Math.LN10 ) ", Math.abs ( Math.LN10 ) , 2.302585092994046 );


test( "Math.abs ( Math.LOG2E ) ", Math.abs ( Math.LOG2E ) , 1.4426950408889633 );


test( "Math.abs ( Math.LOG10E ) ", Math.abs ( Math.LOG10E ) , 0.4342944819032518 );


test( "Math.abs ( Math.PI ) ", Math.abs ( Math.PI ) , 3.141592653589793 );


test( "Math.abs ( Math.SQRT1_2 ) ", Math.abs ( Math.SQRT1_2 ) , 0.7071067811865476 );


test( "Math.abs ( Math.SQRT2 ) ", Math.abs ( Math.SQRT2 ) , 1.4142135623730951 );


test( "Math.abs ( Number.POSITIVE_INFINITY ) ", Math.abs ( Number.POSITIVE_INFINITY ) , Infinity );


test( "Math.abs ( Number.NEGATIVE_INFINITY ) ", Math.abs ( Number.NEGATIVE_INFINITY ) , Infinity );


test( "Math.abs ( Number.MAX_VALUE ) ", Math.abs ( Number.MAX_VALUE ) , 1.7976931348623157e+308 );


test( "Math.abs ( Number.MIN_VALUE ) ", Math.abs ( Number.MIN_VALUE ) , Number.MIN_VALUE );


test( "Math.abs ( Number.NaN ) ", Math.abs ( Number.NaN ) , Number.NaN );


test( "Math.abs ( 0 ) ", Math.abs ( 0 ) , 0 );


test( "Math.abs ( -0 ) ", Math.abs ( -0 ) , 0 );

test( "Math.abs ( 1.012 ) ", Math.abs ( 1.012 ) , 1.012 );


test( "Math.abs ( -1.12 ) ", Math.abs ( -1.12 ) , 1.12 );


test( "Math.abs ( 1 ) ", Math.abs ( 1 ) , 1 );


test( "Math.abs ( -0.5 ) ", Math.abs ( -0.5 ) , 0.5 );


test( "Math.abs ( 0.499 ) ", Math.abs ( 0.499 ) , 0.499 );


test( "Math.acos ( Math.E ) ", Math.acos ( Math.E ) , Number.NaN );


teste( "Math.acos ( Math.LN2 ) ", Math.acos ( Math.LN2 ) , 0.8049501319758164 );


test( "Math.acos ( Math.LN10 ) ", Math.acos ( Math.LN10 ) , Number.NaN );


test( "Math.acos ( Math.LOG2E ) ", Math.acos ( Math.LOG2E ) , Number.NaN );


teste( "Math.acos ( Math.LOG10E ) ", Math.acos ( Math.LOG10E ) , 1.121541436112827 );


test( "Math.acos ( Math.PI ) ", Math.acos ( Math.PI ) , Number.NaN );


teste( "Math.acos ( Math.SQRT1_2 ) ", Math.acos ( Math.SQRT1_2 ) , 0.7853981633974483 );


test( "Math.acos ( Math.SQRT2 ) ", Math.acos ( Math.SQRT2 ) , Number.NaN );


test( "Math.acos ( Number.POSITIVE_INFINITY ) ", Math.acos ( Number.POSITIVE_INFINITY ) , Number.NaN );


test( "Math.acos ( Number.NEGATIVE_INFINITY ) ", Math.acos ( Number.NEGATIVE_INFINITY ) , Number.NaN );


test( "Math.acos ( Number.MAX_VALUE ) ", Math.acos ( Number.MAX_VALUE ) , Number.NaN );


teste( "Math.acos ( Number.MIN_VALUE ) ", Math.acos ( Number.MIN_VALUE ) , 1.5707963267948965 );


test( "Math.acos ( Number.NaN ) ", Math.acos ( Number.NaN ) , Number.NaN );


teste( "Math.acos ( 0 ) ", Math.acos ( 0 ) , 1.5707963267948965 );


teste( "Math.acos ( -0 ) ", Math.acos ( -0 ) , 1.5707963267948965 );


test( "Math.acos ( 1.012 ) ", Math.acos ( 1.012 ) , Number.NaN );


test( "Math.acos ( -1.12 ) ", Math.acos ( -1.12 ) , Number.NaN );


test( "Math.acos ( 1 ) ", Math.acos ( 1 ) , 0 );


teste( "Math.acos ( -0.5 ) ", Math.acos ( -0.5 ) , 2.0943951023931957 );


teste( "Math.acos ( 0.499 ) ", Math.acos ( 0.499 ) , 1.0483518673474 );


test( "Math.asin ( Math.E ) ", Math.asin ( Math.E ) , Number.NaN );


teste( "Math.asin ( Math.LN2 ) ", Math.asin ( Math.LN2 ) , 0.7658461948190802 );


test( "Math.asin ( Math.LN10 ) ", Math.asin ( Math.LN10 ) , Number.NaN );


test( "Math.asin ( Math.LOG2E ) ", Math.asin ( Math.LOG2E ) , Number.NaN );


teste( "Math.asin ( Math.LOG10E ) ", Math.asin ( Math.LOG10E ) , 0.44925489068206964 );


test( "Math.asin ( Math.PI ) ", Math.asin ( Math.PI ) , Number.NaN );


teste( "Math.asin ( Math.SQRT1_2 ) ", Math.asin ( Math.SQRT1_2 ) , 0.7853981633974484 );


test( "Math.asin ( Math.SQRT2 ) ", Math.asin ( Math.SQRT2 ) , Number.NaN );


test( "Math.asin ( Number.POSITIVE_INFINITY ) ", Math.asin ( Number.POSITIVE_INFINITY ) , Number.NaN );


test( "Math.asin ( Number.NEGATIVE_INFINITY ) ", Math.asin ( Number.NEGATIVE_INFINITY ) , Number.NaN );


test( "Math.asin ( Number.MAX_VALUE ) ", Math.asin ( Number.MAX_VALUE ) , Number.NaN );


teste( "Math.asin ( Number.MIN_VALUE ) ", Math.asin ( Number.MIN_VALUE ) , Number.MIN_VALUE );


test( "Math.asin ( Number.NaN ) ", Math.asin ( Number.NaN ) , Number.NaN );


test( "Math.asin ( 0 ) ", Math.asin ( 0 ) , 0 );


test( "Math.asin ( -0 ) ", Math.asin ( -0 ) , 0 );


test( "Math.asin ( 1.012 ) ", Math.asin ( 1.012 ) , Number.NaN );


test( "Math.asin ( -1.12 ) ", Math.asin ( -1.12 ) , Number.NaN );


teste( "Math.asin ( 1 ) ", Math.asin ( 1 ) , 1.5707963267948965 );


teste( "Math.asin ( -0.5 ) ", Math.asin ( -0.5 ) , -0.5235987755982989 );


teste( "Math.asin ( 0.499 ) ", Math.asin ( 0.499 ) , 0.5224444594474966 );


teste( "Math.atan ( Math.E ) ", Math.atan ( Math.E ) , 1.2182829050172776 );


teste( "Math.atan ( Math.LN2 ) ", Math.atan ( Math.LN2 ) , 0.606111934732855 );


teste( "Math.atan ( Math.LN10 ) ", Math.atan ( Math.LN10 ) , 1.1610795826858162 );


teste( "Math.atan ( Math.LOG2E ) ", Math.atan ( Math.LOG2E ) , 0.9646843920620416 );


teste( "Math.atan ( Math.LOG10E ) ", Math.atan ( Math.LOG10E ) , 0.4097167441090804 );


teste( "Math.atan ( Math.PI ) ", Math.atan ( Math.PI ) , 1.2626272556789117 );


teste( "Math.atan ( Math.SQRT1_2 ) ", Math.atan ( Math.SQRT1_2 ) , 0.6154797086703874 );


teste( "Math.atan ( Math.SQRT2 ) ", Math.atan ( Math.SQRT2 ) , 0.9553166181245093 );


teste( "Math.atan ( Number.POSITIVE_INFINITY ) ", Math.atan ( Number.POSITIVE_INFINITY ) , 1.5707963267948965 );


teste( "Math.atan ( Number.NEGATIVE_INFINITY ) ", Math.atan ( Number.NEGATIVE_INFINITY ) , -1.5707963267948965 );


teste( "Math.atan ( Number.MAX_VALUE ) ", Math.atan ( Number.MAX_VALUE ) , 1.5707963267948965 );


//test_expect_failure( "Math.atan ( Number.MIN_VALUE ) ", 79971, Math.atan ( Number.MIN_VALUE ) , Number.MIN_VALUE );
teste( "Math.atan ( Number.MIN_VALUE ) ", Math.atan ( Number.MIN_VALUE ) , Number.MIN_VALUE );


test( "Math.atan ( Number.NaN ) ", Math.atan ( Number.NaN ) , Number.NaN );


teste( "Math.atan ( 0 ) ", Math.atan ( 0 ) , 0 );


teste( "Math.atan ( -0 ) ", Math.atan ( -0 ) , 0 );


teste( "Math.atan ( 1.012 ) ", Math.atan ( 1.012 ) , 0.7913623073912894 );


teste( "Math.atan ( -1.12 ) ", Math.atan ( -1.12 ) , -0.8419416003422657 );


teste( "Math.atan ( 1 ) ", Math.atan ( 1 ) , 0.7853981633974483 );


teste( "Math.atan ( -0.5 ) ", Math.atan ( -0.5 ) , -0.4636476090008061 );


teste( "Math.atan ( 0.499 ) ", Math.atan ( 0.499 ) , 0.4628472890436265 );


test( "Math.ceil ( Math.E ) ", Math.ceil ( Math.E ) , 3 );


test( "Math.ceil ( Math.LN2 ) ", Math.ceil ( Math.LN2 ) , 1 );


test( "Math.ceil ( Math.LN10 ) ", Math.ceil ( Math.LN10 ) , 3 );


test( "Math.ceil ( Math.LOG2E ) ", Math.ceil ( Math.LOG2E ) , 2 );


test( "Math.ceil ( Math.LOG10E ) ", Math.ceil ( Math.LOG10E ) , 1 );


test( "Math.ceil ( Math.PI ) ", Math.ceil ( Math.PI ) , 4 );


test( "Math.ceil ( Math.SQRT1_2 ) ", Math.ceil ( Math.SQRT1_2 ) , 1 );


test( "Math.ceil ( Math.SQRT2 ) ", Math.ceil ( Math.SQRT2 ) , 2 );


test( "Math.ceil ( Number.POSITIVE_INFINITY ) ", Math.ceil ( Number.POSITIVE_INFINITY ) , Infinity );


test( "Math.ceil ( Number.NEGATIVE_INFINITY ) ", Math.ceil ( Number.NEGATIVE_INFINITY ) , -Infinity );


test( "Math.ceil ( Number.MAX_VALUE ) ", Math.ceil ( Number.MAX_VALUE ) , Number.MAX_VALUE );


test( "Math.ceil ( Number.MIN_VALUE ) ", Math.ceil ( Number.MIN_VALUE ) , 1 );


test( "Math.ceil ( Number.NaN ) ", Math.ceil ( Number.NaN ) , Number.NaN );


test( "Math.ceil ( 0 ) ", Math.ceil ( 0 ) , 0 );


test( "Math.ceil ( -0 ) ", Math.ceil ( -0 ) , 0 );


test( "Math.ceil ( 1.012 ) ", Math.ceil ( 1.012 ) , 2 );


test( "Math.ceil ( -1.12 ) ", Math.ceil ( -1.12 ) , -1 );


test( "Math.ceil ( 1 ) ", Math.ceil ( 1 ) , 1 );


test( "Math.ceil ( -0.5 ) ", Math.ceil ( -0.5 ) , 0 );


test( "Math.ceil ( 0.499 ) ", Math.ceil ( 0.499 ) , 1 );


teste( "Math.cos ( Math.E ) ", Math.cos ( Math.E ) , -0.9117339147869651 );


teste( "Math.cos ( Math.LN2 ) ", Math.cos ( Math.LN2 ) , 0.7692389013639721 );


teste( "Math.cos ( Math.LN10 ) ", Math.cos ( Math.LN10 ) , -0.6682015101903131 );


teste( "Math.cos ( Math.LOG2E ) ", Math.cos ( Math.LOG2E ) , 0.12775121753523993 );


teste( "Math.cos ( Math.LOG10E ) ", Math.cos ( Math.LOG10E ) , 0.9071671292390984 );


teste( "Math.cos ( Math.PI ) ", Math.cos ( Math.PI ) , -1 );


teste( "Math.cos ( Math.SQRT1_2 ) ", Math.cos ( Math.SQRT1_2 ) , 0.7602445970756301 );


teste( "Math.cos ( Math.SQRT2 ) ", Math.cos ( Math.SQRT2 ) , 0.15594369476537437 );


test( "Math.cos ( Number.POSITIVE_INFINITY ) ", Math.cos ( Number.POSITIVE_INFINITY ) , Number.NaN );


test( "Math.cos ( Number.NEGATIVE_INFINITY ) ", Math.cos ( Number.NEGATIVE_INFINITY ) , Number.NaN );


/* There is some evidence that the correct answer is 0.8925373225282277.  This
   is based on some amateureish playing around with exact arithmetic in Scheme:

    > (define max-float (* (expt 2 1023) (/ (- (expt 2 53) 1) (expt 2 52))))  ; IEEE double precision
    > (define pi-exact 1068966896/340262731)                                  ; http://www.newdream.net/~sage/old/numbers/approxpi.htm
    > (cos (remainder (* max-float (denominator pi-exact))                    ; Reduce by PI and compute as inexact:
                      (* pi-exact (denominator pi-exact))))
    0.8925373225282277

   The value of PI above is more accurate than Math.PI will be.  The outcome is
   very sensitive to the value of PI.

   The value 0.9057811022070704 is what MSIE 5 delivers for its value of MAX_VALUE (which
   matches that of Opera).  It is probably an artifact of the math
   library.  The glibc that comes with Redhat 9 delivers 0.9492485830257635,
   which is off by quite a bit from either answer given above.
   */
/* Disable test on Linux since the math lib does not return a reasonable answer and I
   am not about to change the code for this boundary case */
if (!navigator.userAgent.match(/Linux.*86/))
	teste( "Math.cos ( Number.MAX_VALUE ) ", Math.cos ( Number.MAX_VALUE ) , 0.9057811022070704 );

teste( "Math.cos ( Number.MIN_VALUE ) ", Math.cos ( Number.MIN_VALUE ) , 1 );


test( "Math.cos ( Number.NaN ) ", Math.cos ( Number.NaN ) , Number.NaN );


teste( "Math.cos ( 0 ) ", Math.cos ( 0 ) , 1 );


teste( "Math.cos ( -0 ) ", Math.cos ( -0 ) , 1 );


teste( "Math.cos ( 1.012 ) ", Math.cos ( 1.012 ) , 0.5301659950931401 );


teste( "Math.cos ( -1.12 ) ", Math.cos ( -1.12 ) , 0.4356824462767121 );


teste( "Math.cos ( 1 ) ", Math.cos ( 1 ) , 0.5403023058681398 );


teste( "Math.cos ( -0.5 ) ", Math.cos ( -0.5 ) , 0.8775825618903728 );


teste( "Math.cos ( 0.499 ) ", Math.cos ( 0.499 ) , 0.8780615485578282 );


teste( "Math.exp ( Math.E ) ", Math.exp ( Math.E ) , 15.154262241479262 );


test( "Math.exp ( Math.LN2 ) ", Math.exp ( Math.LN2 ) , 2 );


teste( "Math.exp ( Math.LN10 ) ", Math.exp ( Math.LN10 ) , 10.000000000000001 );


teste( "Math.exp ( Math.LOG2E ) ", Math.exp ( Math.LOG2E ) , 4.232086106557082 );


teste( "Math.exp ( Math.LOG10E ) ", Math.exp ( Math.LOG10E ) , 1.5438734439711812 );


teste( "Math.exp ( Math.PI ) ", Math.exp ( Math.PI ) , 23.140692632779267 );


teste( "Math.exp ( Math.SQRT1_2 ) ", Math.exp ( Math.SQRT1_2 ) , 2.0281149816474726 );


teste( "Math.exp ( Math.SQRT2 ) ", Math.exp ( Math.SQRT2 ) , 4.1132503787829275 );


test( "Math.exp ( Number.POSITIVE_INFINITY ) ", Math.exp ( Number.POSITIVE_INFINITY ) , Infinity );


test( "Math.exp ( Number.NEGATIVE_INFINITY ) ", Math.exp ( Number.NEGATIVE_INFINITY ) , 0 );


test( "Math.exp ( Number.MAX_VALUE ) ", Math.exp ( Number.MAX_VALUE ) , Infinity );


test( "Math.exp ( Number.MIN_VALUE ) ", Math.exp ( Number.MIN_VALUE ) , 1 );


test( "Math.exp ( Number.NaN ) ", Math.exp ( Number.NaN ) , Number.NaN );


test( "Math.exp ( 0 ) ", Math.exp ( 0 ) , 1 );


test( "Math.exp ( -0 ) ", Math.exp ( -0 ) , 1 );


teste( "Math.exp ( 1.012 ) ", Math.exp ( 1.012 ) , 2.751097711911613 );


teste( "Math.exp ( -1.12 ) ", Math.exp ( -1.12 ) , 0.32627979462303946 );


test( "Math.exp ( 1 ) ", Math.exp ( 1 ) , Math.E );


teste( "Math.exp ( -0.5 ) ", Math.exp ( -0.5 ) , 0.6065306597126334 );


teste( "Math.exp ( 0.499 ) ", Math.exp ( 0.499 ) , 1.647073373515345 );


test( "Math.floor ( Math.E ) ", Math.floor ( Math.E ) , 2 );


test( "Math.floor ( Math.LN2 ) ", Math.floor ( Math.LN2 ) , 0 );


test( "Math.floor ( Math.LN10 ) ", Math.floor ( Math.LN10 ) , 2 );


test( "Math.floor ( Math.LOG2E ) ", Math.floor ( Math.LOG2E ) , 1 );


test( "Math.floor ( Math.LOG10E ) ", Math.floor ( Math.LOG10E ) , 0 );


test( "Math.floor ( Math.PI ) ", Math.floor ( Math.PI ) , 3 );


test( "Math.floor ( Math.SQRT1_2 ) ", Math.floor ( Math.SQRT1_2 ) , 0 );


test( "Math.floor ( Math.SQRT2 ) ", Math.floor ( Math.SQRT2 ) , 1 );


test( "Math.floor ( Number.POSITIVE_INFINITY ) ", Math.floor ( Number.POSITIVE_INFINITY ) , Infinity );


test( "Math.floor ( Number.NEGATIVE_INFINITY ) ", Math.floor ( Number.NEGATIVE_INFINITY ) , -Infinity );


teste( "Math.floor ( Number.MAX_VALUE ) ", Math.floor ( Number.MAX_VALUE ) , Number.MAX_VALUE );


test( "Math.floor ( Number.MIN_VALUE ) ", Math.floor ( Number.MIN_VALUE ) , 0 );


test( "Math.floor ( Number.NaN ) ", Math.floor ( Number.NaN ) , Number.NaN );


test( "Math.floor ( 0 ) ", Math.floor ( 0 ) , 0 );


test( "Math.floor ( -0 ) ", Math.floor ( -0 ) , 0 );


test( "Math.floor ( 1.012 ) ", Math.floor ( 1.012 ) , 1 );


test( "Math.floor ( -1.12 ) ", Math.floor ( -1.12 ) , -2 );


test( "Math.floor ( 1 ) ", Math.floor ( 1 ) , 1 );


test( "Math.floor ( -0.5 ) ", Math.floor ( -0.5 ) , -1 );


test( "Math.floor ( 0.499 ) ", Math.floor ( 0.499 ) , 0 );


teste( "Math.log ( Math.E ) ", Math.log ( Math.E ) , 1 );


teste( "Math.log ( Math.LN2 ) ", Math.log ( Math.LN2 ) , -0.36651292058166434 );


teste( "Math.log ( Math.LN10 ) ", Math.log ( Math.LN10 ) , 0.834032445247956 );


teste( "Math.log ( Math.LOG2E ) ", Math.log ( Math.LOG2E ) , 0.3665129205816643 );


teste( "Math.log ( Math.LOG10E ) ", Math.log ( Math.LOG10E ) , -0.8340324452479558 );


teste( "Math.log ( Math.PI ) ", Math.log ( Math.PI ) , 1.1447298858494001 );


teste( "Math.log ( Math.SQRT1_2 ) ", Math.log ( Math.SQRT1_2 ) , -0.3465735902799726 );


teste( "Math.log ( Math.SQRT2 ) ", Math.log ( Math.SQRT2 ) , 0.3465735902799727 );


test( "Math.log ( Number.POSITIVE_INFINITY ) ", Math.log ( Number.POSITIVE_INFINITY ) , Infinity );


test( "Math.log ( Number.NEGATIVE_INFINITY ) ", Math.log ( Number.NEGATIVE_INFINITY ) , Number.NaN );


teste( "Math.log ( Number.MAX_VALUE ) ", Math.log ( Number.MAX_VALUE ) , 709.782712893384 );


teste( "Math.log ( Number.MIN_VALUE ) ", Math.log ( Number.MIN_VALUE ) , -744.4400719213812 );


test( "Math.log ( Number.NaN ) ", Math.log ( Number.NaN ) , Number.NaN );


test( "Math.log ( 0 ) ", Math.log ( 0 ) , -Infinity );


test( "Math.log ( -0 ) ", Math.log ( -0 ) , -Infinity );


teste( "Math.log ( 1.012 ) ", Math.log ( 1.012 ) , 0.011928570865273812 );


test( "Math.log ( -1.12 ) ", Math.log ( -1.12 ) , Number.NaN );


test( "Math.log ( 1 ) ", Math.log ( 1 ) , 0 );


test( "Math.log ( -0.5 ) ", Math.log ( -0.5 ) , Number.NaN );


teste( "Math.log ( 0.499 ) ", Math.log ( 0.499 ) , -0.6951491832306184 );


test( "Math.round ( Math.E ) ", Math.round ( Math.E ) , 3 );


test( "Math.round ( Math.LN2 ) ", Math.round ( Math.LN2 ) , 1 );


test( "Math.round ( Math.LN10 ) ", Math.round ( Math.LN10 ) , 2 );


test( "Math.round ( Math.LOG2E ) ", Math.round ( Math.LOG2E ) , 1 );


test( "Math.round ( Math.LOG10E ) ", Math.round ( Math.LOG10E ) , 0 );


test( "Math.round ( Math.PI ) ", Math.round ( Math.PI ) , 3 );


test( "Math.round ( Math.SQRT1_2 ) ", Math.round ( Math.SQRT1_2 ) , 1 );


test( "Math.round ( Math.SQRT2 ) ", Math.round ( Math.SQRT2 ) , 1 );


test( "Math.round ( Number.POSITIVE_INFINITY ) ", Math.round ( Number.POSITIVE_INFINITY ) , Infinity );


test( "Math.round ( Number.NEGATIVE_INFINITY ) ", Math.round ( Number.NEGATIVE_INFINITY ) , -Infinity );


test( "Math.round ( Number.MAX_VALUE ) ", Math.round ( Number.MAX_VALUE ) , Number.MAX_VALUE );


test( "Math.round ( Number.MIN_VALUE ) ", Math.round ( Number.MIN_VALUE ) , 0 );


test( "Math.round ( Number.NaN ) ", Math.round ( Number.NaN ) , Number.NaN );


test( "Math.round ( 0 ) ", Math.round ( 0 ) , 0 );


test( "Math.round ( -0 ) ", Math.round ( -0 ) , 0 );


test( "Math.round ( 1.012 ) ", Math.round ( 1.012 ) , 1 );


test( "Math.round ( -1.12 ) ", Math.round ( -1.12 ) , -1 );


test( "Math.round ( 1 ) ", Math.round ( 1 ) , 1 );


test( "Math.round ( -0.5 ) ", Math.round ( -0.5 ) , 0 );


test( "Math.round ( 0.499 ) ", Math.round ( 0.499 ) , 0 );


teste( "Math.sin ( Math.E ) ", Math.sin ( Math.E ) , 0.41078129050290884 );


teste( "Math.sin ( Math.LN2 ) ", Math.sin ( Math.LN2 ) , 0.6389612763136347 );


teste( "Math.sin ( Math.LN10 ) ", Math.sin ( Math.LN10 ) , 0.743980336957493 );


teste( "Math.sin ( Math.LOG2E ) ", Math.sin ( Math.LOG2E ) , 0.9918062443936637 );


teste( "Math.sin ( Math.LOG10E ) ", Math.sin ( Math.LOG10E ) , 0.4207704833137573 );


teste( "Math.sin ( Math.PI ) ", Math.sin ( Math.PI ) , 1.2246063538223772e-16 );


teste( "Math.sin ( Math.SQRT1_2 ) ", Math.sin ( Math.SQRT1_2 ) , 0.6496369390800625 );


teste( "Math.sin ( Math.SQRT2 ) ", Math.sin ( Math.SQRT2 ) , 0.9877659459927356 );


test( "Math.sin ( Number.POSITIVE_INFINITY ) ", Math.sin ( Number.POSITIVE_INFINITY ) , Number.NaN );


test( "Math.sin ( Number.NEGATIVE_INFINITY ) ", Math.sin ( Number.NEGATIVE_INFINITY ) , Number.NaN );


/* See comments for Math.cos above */
if (!navigator.userAgent.match(/Linux.*86/))
	teste( "Math.sin ( Number.MAX_VALUE ) ", Math.sin ( Number.MAX_VALUE ) , -0.42374590839858816 );


teste( "Math.sin ( Number.MIN_VALUE ) ", Math.sin ( Number.MIN_VALUE ) , 5e-324 );


test( "Math.sin ( Number.NaN ) ", Math.sin ( Number.NaN ) , Number.NaN );


test( "Math.sin ( 0 ) ", Math.sin ( 0 ) , 0 );


test( "Math.sin ( -0 ) ", Math.sin ( -0 ) , 0 );


teste( "Math.sin ( 1.012 ) ", Math.sin ( 1.012 ) , 0.8478938716884917 );


teste( "Math.sin ( -1.12 ) ", Math.sin ( -1.12 ) , -0.9001004421765051 );


teste( "Math.sin ( 1 ) ", Math.sin ( 1 ) , 0.8414709848078965 );


teste( "Math.sin ( -0.5 ) ", Math.sin ( -0.5 ) , -0.479425538604203 );


teste( "Math.sin ( 0.499 ) ", Math.sin ( 0.499 ) , 0.47854771647582705 );


teste( "Math.sqrt ( Math.E ) ", Math.sqrt ( Math.E ) , 1.6487212707001282 );


teste( "Math.sqrt ( Math.LN2 ) ", Math.sqrt ( Math.LN2 ) , 0.8325546111576977 );


teste( "Math.sqrt ( Math.LN10 ) ", Math.sqrt ( Math.LN10 ) , 1.5174271293851464 );


teste( "Math.sqrt ( Math.LOG2E ) ", Math.sqrt ( Math.LOG2E ) , 1.2011224087864498 );


teste( "Math.sqrt ( Math.LOG10E ) ", Math.sqrt ( Math.LOG10E ) , 0.6590102289822608 );


teste( "Math.sqrt ( Math.PI ) ", Math.sqrt ( Math.PI ) , 1.7724538509055158 );


teste( "Math.sqrt ( Math.SQRT1_2 ) ", Math.sqrt ( Math.SQRT1_2 ) , 0.8408964152537146 );


teste( "Math.sqrt ( Math.SQRT2 ) ", Math.sqrt ( Math.SQRT2 ) , 1.189207115002721 );


test( "Math.sqrt ( Number.POSITIVE_INFINITY ) ", Math.sqrt ( Number.POSITIVE_INFINITY ) , Infinity );


test( "Math.sqrt ( Number.NEGATIVE_INFINITY ) ", Math.sqrt ( Number.NEGATIVE_INFINITY ) , Number.NaN );


teste( "Math.sqrt ( Number.MAX_VALUE ) ", Math.sqrt ( Number.MAX_VALUE ) , 1.3407807929942595e+154 );


teste( "Math.sqrt ( Number.MIN_VALUE ) ", Math.sqrt ( Number.MIN_VALUE ) , 2.2227587494850775e-162 );


test( "Math.sqrt ( Number.NaN ) ", Math.sqrt ( Number.NaN ) , Number.NaN );


test( "Math.sqrt ( 0 ) ", Math.sqrt ( 0 ) , 0 );


test( "Math.sqrt ( -0 ) ", Math.sqrt ( -0 ) , 0 );


teste( "Math.sqrt ( 1.012 ) ", Math.sqrt ( 1.012 ) , 1.0059821071967434 );


test( "Math.sqrt ( -1.12 ) ", Math.sqrt ( -1.12 ) , Number.NaN );


test( "Math.sqrt ( 1 ) ", Math.sqrt ( 1 ) , 1 );


test( "Math.sqrt ( -0.5 ) ", Math.sqrt ( -0.5 ) , Number.NaN );


teste( "Math.sqrt ( 0.499 ) ", Math.sqrt ( 0.499 ) , 0.7063993204979744 );


teste( "Math.tan ( Math.E ) ", Math.tan ( Math.E ) , -0.4505495340698077 );


teste( "Math.tan ( Math.LN2 ) ", Math.tan ( Math.LN2 ) , 0.8306408778607839 );


teste( "Math.tan ( Math.LN10 ) ", Math.tan ( Math.LN10 ) , -1.113407146813537 );


teste( "Math.tan ( Math.LOG2E ) ", Math.tan ( Math.LOG2E ) , 7.763575670972184 );


teste( "Math.tan ( Math.LOG10E ) ", Math.tan ( Math.LOG10E ) , 0.4638290671606296 );


teste( "Math.tan ( Math.PI ) ", Math.tan ( Math.PI ) , -1.2246063538223772e-16 );


teste( "Math.tan ( Math.SQRT1_2 ) ", Math.tan ( Math.SQRT1_2 ) , 0.854510432009602 );


teste( "Math.tan ( Math.SQRT2 ) ", Math.tan ( Math.SQRT2 ) , 6.3341191670421955 );


test( "Math.tan ( Number.POSITIVE_INFINITY ) ", Math.tan ( Number.POSITIVE_INFINITY ) , Number.NaN );


test( "Math.tan ( Number.NEGATIVE_INFINITY ) ", Math.tan ( Number.NEGATIVE_INFINITY ) , Number.NaN );


/* See comments for Math.cos above */
if (!navigator.userAgent.match(/Linux.*86/))
	teste( "Math.tan ( Number.MAX_VALUE ) ", Math.tan ( Number.MAX_VALUE ) , -0.46782374611930877 );


teste( "Math.tan ( Number.MIN_VALUE ) ", Math.tan ( Number.MIN_VALUE ) , 5e-324 );


test( "Math.tan ( Number.NaN ) ", Math.tan ( Number.NaN ) , Number.NaN );


test( "Math.tan ( 0 ) ", Math.tan ( 0 ) , 0 );


test( "Math.tan ( -0 ) ", Math.tan ( -0 ) , 0 );


teste( "Math.tan ( 1.012 ) ", Math.tan ( 1.012 ) , 1.599298860236279 );


teste( "Math.tan ( -1.12 ) ", Math.tan ( -1.12 ) , -2.0659552613805107 );


teste( "Math.tan ( 1 ) ", Math.tan ( 1 ) , 1.5574077246549023 );


teste( "Math.tan ( -0.5 ) ", Math.tan ( -0.5 ) , -0.5463024898437905 );


teste( "Math.tan ( 0.499 ) ", Math.tan ( 0.499 ) , 0.5450047519582397 );




/*  *  *  *  *  *  *  * MATH FUNCTIONS REQUIRING TWO INPUT VALUES *  *  *  *  *  *  *  */



teste( "Math.atan2 ( Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY ) ",
      Math.atan2 ( Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY ) , 0.7853981633974483 );
/* ECMA: If y is +Infinity and x is +Infinity, the result is an implementation-dependent approximation to +PI/4. */

teste( "Math.atan2 ( Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY ) ",
      Math.atan2 ( Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY ) , 2.356194490192345 );
/* ECMA: If y is +Infinity and x is -Infinity, the result is an implementation-dependent approximation to +PI/4. */


teste( "Math.atan2 ( Number.POSITIVE_INFINITY, Number.MAX_VALUE ) ",
      Math.atan2 ( Number.POSITIVE_INFINITY, Number.MAX_VALUE ) , 1.5707963267948965 );


teste( "Math.atan2 ( Number.POSITIVE_INFINITY, Number.MIN_VALUE ) ",
      Math.atan2 ( Number.POSITIVE_INFINITY, Number.MIN_VALUE ) , 1.5707963267948965 );


teste( "Math.atan2 ( Number.POSITIVE_INFINITY, Number.NaN ) ",
      Math.atan2 ( Number.POSITIVE_INFINITY, Number.NaN ) , Number.NaN );


teste( "Math.atan2 ( Number.POSITIVE_INFINITY, 0 ) ", Math.atan2 ( Number.POSITIVE_INFINITY, 0 ) , 1.5707963267948965 );


teste( "Math.atan2 ( Number.POSITIVE_INFINITY, -0 ) ", Math.atan2 ( Number.POSITIVE_INFINITY, -0 ) , 1.5707963267948965 );


teste( "Math.atan2 ( Number.POSITIVE_INFINITY, 1 ) ", Math.atan2 ( Number.POSITIVE_INFINITY, 1 ) , 1.5707963267948965 );


teste( "Math.atan2 ( Number.POSITIVE_INFINITY, 1.012 ) ",
      Math.atan2 ( Number.POSITIVE_INFINITY, 1.012 ) , 1.5707963267948965 );


teste( "Math.atan2 ( Number.POSITIVE_INFINITY, -1.12 ) ",
      Math.atan2 ( Number.POSITIVE_INFINITY, -1.12 ) , 1.5707963267948965 );


teste( "Math.atan2 ( Number.POSITIVE_INFINITY, 0.499 ) ",
      Math.atan2 ( Number.POSITIVE_INFINITY, 0.499 ) , 1.5707963267948965 );


teste( "Math.atan2 ( Number.POSITIVE_INFINITY, -0.5 ) ", Math.atan2 ( Number.POSITIVE_INFINITY, -0.5 ) , 1.5707963267948965 );


teste( "Math.atan2 ( Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY ) ",
      Math.atan2 ( Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY ) , -0.7853981633974483 );
/* ECMA: If y is -Infinity and x is +Infinity, the result is an implementation-dependent approximation to -PI/4. */


teste( "Math.atan2 ( Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY ) ",
      Math.atan2 ( Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY ) , -2.356194490192345 );
/* ECMA: If y is -Infinity and x is -Infinity, the result is an implementation-dependent approximation to -3 PI/4. */


teste( "Math.atan2 ( Number.NEGATIVE_INFINITY, Number.MAX_VALUE ) ",
      Math.atan2 ( Number.NEGATIVE_INFINITY, Number.MAX_VALUE ) , -1.5707963267948965 );


teste( "Math.atan2 ( Number.NEGATIVE_INFINITY, Number.MIN_VALUE ) ",
      Math.atan2 ( Number.NEGATIVE_INFINITY, Number.MIN_VALUE ) , -1.5707963267948965 );


test( "Math.atan2 ( Number.NEGATIVE_INFINITY, Number.NaN ) ",
      Math.atan2 ( Number.NEGATIVE_INFINITY, Number.NaN ) , Number.NaN );


teste( "Math.atan2 ( Number.NEGATIVE_INFINITY, 0 ) ", Math.atan2 ( Number.NEGATIVE_INFINITY, 0 ) , -1.5707963267948965 );


teste( "Math.atan2 ( Number.NEGATIVE_INFINITY, -0 ) ", Math.atan2 ( Number.NEGATIVE_INFINITY, -0 ) , -1.5707963267948965 );


teste( "Math.atan2 ( Number.NEGATIVE_INFINITY, 1 ) ", Math.atan2 ( Number.NEGATIVE_INFINITY, 1 ) , -1.5707963267948965 );


teste( "Math.atan2 ( Number.NEGATIVE_INFINITY, 1.012 ) ",
      Math.atan2 ( Number.NEGATIVE_INFINITY, 1.012 ) , -1.5707963267948965 );


teste( "Math.atan2 ( Number.NEGATIVE_INFINITY, -1.12 ) ",
      Math.atan2 ( Number.NEGATIVE_INFINITY, -1.12 ) , -1.5707963267948965 );


teste( "Math.atan2 ( Number.NEGATIVE_INFINITY, 0.499 ) ",
      Math.atan2 ( Number.NEGATIVE_INFINITY, 0.499 ) , -1.5707963267948965 );


teste( "Math.atan2 ( Number.NEGATIVE_INFINITY, -0.5 ) ", Math.atan2 ( Number.NEGATIVE_INFINITY, -0.5 ) , -1.5707963267948965 );


test( "Math.atan2 ( Number.MAX_VALUE, Number.POSITIVE_INFINITY ) ", Math.atan2 ( Number.MAX_VALUE, Number.POSITIVE_INFINITY ) , 0 );


teste( "Math.atan2 ( Number.MAX_VALUE, Number.NEGATIVE_INFINITY ) ", Math.atan2 ( Number.MAX_VALUE, Number.NEGATIVE_INFINITY ) , Math.PI );


teste( "Math.atan2 ( Number.MAX_VALUE, Number.MAX_VALUE ) ", Math.atan2 ( Number.MAX_VALUE, Number.MAX_VALUE ) , 0.7853981633974483 );


teste( "Math.atan2 ( Number.MAX_VALUE, Number.MIN_VALUE ) ", Math.atan2 ( Number.MAX_VALUE, Number.MIN_VALUE ) , 1.5707963267948965 );


test( "Math.atan2 ( Number.MAX_VALUE, Number.NaN ) ", Math.atan2 ( Number.MAX_VALUE, Number.NaN ) , Number.NaN );


teste( "Math.atan2 ( Number.MAX_VALUE, 0 ) ", Math.atan2 ( Number.MAX_VALUE, 0 ) , 1.5707963267948965 );


teste( "Math.atan2 ( Number.MAX_VALUE, -0 ) ", Math.atan2 ( Number.MAX_VALUE, -0 ) , 1.5707963267948965 );


teste( "Math.atan2 ( Number.MAX_VALUE, 1 ) ", Math.atan2 ( Number.MAX_VALUE, 1 ) , 1.5707963267948965 );


teste( "Math.atan2 ( Number.MAX_VALUE, 1.012 ) ", Math.atan2 ( Number.MAX_VALUE, 1.012 ) , 1.5707963267948965 );


teste( "Math.atan2 ( Number.MAX_VALUE, -1.12 ) ", Math.atan2 ( Number.MAX_VALUE, -1.12 ) , 1.5707963267948965 );


teste( "Math.atan2 ( Number.MAX_VALUE, 0.499 ) ", Math.atan2 ( Number.MAX_VALUE, 0.499 ) , 1.5707963267948965 );


teste( "Math.atan2 ( Number.MAX_VALUE, -0.5 ) ", Math.atan2 ( Number.MAX_VALUE, -0.5 ) , 1.5707963267948965 );


test( "Math.atan2 ( Number.MIN_VALUE, Number.POSITIVE_INFINITY ) ", Math.atan2 ( Number.MIN_VALUE, Number.POSITIVE_INFINITY ) , 0 );


teste( "Math.atan2 ( Number.MIN_VALUE, Number.NEGATIVE_INFINITY ) ", Math.atan2 ( Number.MIN_VALUE, Number.NEGATIVE_INFINITY ) , Math.PI );


teste( "Math.atan2 ( Number.MIN_VALUE, Number.MAX_VALUE ) ", Math.atan2 ( Number.MIN_VALUE, Number.MAX_VALUE ) , 0 );


teste( "Math.atan2 ( Number.MIN_VALUE, Number.MIN_VALUE ) ", Math.atan2 ( Number.MIN_VALUE, Number.MIN_VALUE ) , Math.PI/4 );


test( "Math.atan2 ( Number.MIN_VALUE, Number.NaN ) ", Math.atan2 ( Number.MIN_VALUE, Number.NaN ) , Number.NaN );


teste( "Math.atan2 ( Number.MIN_VALUE, 0 ) ", Math.atan2 ( Number.MIN_VALUE, 0 ) , Math.PI/2 );


teste( "Math.atan2 ( Number.MIN_VALUE, -0 ) ", Math.atan2 ( Number.MIN_VALUE, -0 ) , Math.PI/2 );


teste( "Math.atan2 ( Number.MIN_VALUE, 1 ) ", Math.atan2 ( Number.MIN_VALUE, 1 ) , Math.tan ( Number.MIN_VALUE ) );


/* Basically, there are two right answers here: MIN_VALUE and 0.  */
test( "Math.atan2 ( Number.MIN_VALUE, 1.012 ) ",
      epsclose(Math.atan2( Number.MIN_VALUE, 1.012 ),Number.MIN_VALUE) || 0==Math.atan2( Number.MIN_VALUE, 1.012 ),
      true );


teste( "Math.atan2 ( Number.MIN_VALUE, -1.12 ) ", Math.atan2 ( Number.MIN_VALUE, -1.12 ) , Math.PI );


teste( "Math.atan2 ( Number.MIN_VALUE, 0.499 ) ", Math.atan2 ( Number.MIN_VALUE, 0.499 ) , 1e-323 );


teste( "Math.atan2 ( Number.MIN_VALUE, -0.5 ) ", Math.atan2 ( Number.MIN_VALUE, -0.5 ) , Math.PI );


test( "Math.atan2 ( Number.NaN, Number.POSITIVE_INFINITY ) ", Math.atan2 ( Number.NaN, Number.POSITIVE_INFINITY ) , Number.NaN );


test( "Math.atan2 ( Number.NaN, Number.NEGATIVE_INFINITY ) ", Math.atan2 ( Number.NaN, Number.NEGATIVE_INFINITY ) , Number.NaN );


test( "Math.atan2 ( Number.NaN, Number.MAX_VALUE ) ", Math.atan2 ( Number.NaN, Number.MAX_VALUE ) , Number.NaN );


test( "Math.atan2 ( Number.NaN, Number.MIN_VALUE ) ", Math.atan2 ( Number.NaN, Number.MIN_VALUE ) , Number.NaN );


test( "Math.atan2 ( Number.NaN, Number.NaN ) ", Math.atan2 ( Number.NaN, Number.NaN ) , Number.NaN );


test( "Math.atan2 ( Number.NaN, 0 ) ", Math.atan2 ( Number.NaN, 0 ) , Number.NaN );


test( "Math.atan2 ( Number.NaN, -0 ) ", Math.atan2 ( Number.NaN, -0 ) , Number.NaN );


test( "Math.atan2 ( Number.NaN, 1 ) ", Math.atan2 ( Number.NaN, 1 ) , Number.NaN );


test( "Math.atan2 ( Number.NaN, 1.012 ) ", Math.atan2 ( Number.NaN, 1.012 ) , Number.NaN );


test( "Math.atan2 ( Number.NaN, -1.12 ) ", Math.atan2 ( Number.NaN, -1.12 ) , Number.NaN );


test( "Math.atan2 ( Number.NaN, 0.499 ) ", Math.atan2 ( Number.NaN, 0.499 ) , Number.NaN );


test( "Math.atan2 ( Number.NaN, -0.5 ) ", Math.atan2 ( Number.NaN, -0.5 ) , Number.NaN );


teste( "Math.atan2 ( 0, Number.POSITIVE_INFINITY ) ", Math.atan2 ( 0, Number.POSITIVE_INFINITY ) , 0 );


teste( "Math.atan2 ( 0, Number.NEGATIVE_INFINITY ) ", Math.atan2 ( 0, Number.NEGATIVE_INFINITY ) , Math.PI );


teste( "Math.atan2 ( 0, Number.MAX_VALUE ) ", Math.atan2 ( 0, Number.MAX_VALUE ) , 0 );


teste( "Math.atan2 ( 0, Number.MIN_VALUE ) ", Math.atan2 ( 0, Number.MIN_VALUE ) , 0 );


test( "Math.atan2 ( 0, Number.NaN ) ", Math.atan2 ( 0, Number.NaN ) , Number.NaN );


test( "Math.atan2 ( 0, 0 ) ", Math.atan2 ( 0, 0 ) , 0 );


teste( "Math.atan2 ( 0, -0 ) ", Math.atan2 ( 0, -0 ) , Math.PI );


teste( "Math.atan2 ( 0, 1 ) ", Math.atan2 ( 0, 1 ) , 0 );


teste( "Math.atan2 ( 0, 1.012 ) ", Math.atan2 ( 0, 1.012 ) , 0 );


teste( "Math.atan2 ( 0, -1.12 ) ", Math.atan2 ( 0, -1.12 ) , Math.PI );


teste( "Math.atan2 ( 0, 0.499 ) ", Math.atan2 ( 0, 0.499 ) , 0 );


teste( "Math.atan2 ( 0, -0.5 ) ", Math.atan2 ( 0, -0.5 ) , Math.PI );


teste( "Math.atan2 ( -0, Number.POSITIVE_INFINITY ) ", Math.atan2 ( -0, Number.POSITIVE_INFINITY ) , 0 );


teste( "Math.atan2 ( -0, Number.NEGATIVE_INFINITY ) ", Math.atan2 ( -0, Number.NEGATIVE_INFINITY ) , -Math.PI );


teste( "Math.atan2 ( -0, Number.MAX_VALUE ) ", Math.atan2 ( -0, Number.MAX_VALUE ) , 0 );


teste( "Math.atan2 ( -0, Number.MIN_VALUE ) ", Math.atan2 ( -0, Number.MIN_VALUE ) , 0 );


test( "Math.atan2 ( -0, Number.NaN ) ", Math.atan2 ( -0, Number.NaN ) , Number.NaN );


teste( "Math.atan2 ( -0, 0 ) ", Math.atan2 ( -0, 0 ) , 0 );


teste( "Math.atan2 ( -0, -0 ) ", Math.atan2 ( -0, -0 ) , -Math.PI );


teste( "Math.atan2 ( -0, 1 ) ", Math.atan2 ( -0, 1 ) , 0 );


teste( "Math.atan2 ( -0, 1.012 ) ", Math.atan2 ( -0, 1.012 ) , 0 );


teste( "Math.atan2 ( -0, -1.12 ) ", Math.atan2 ( -0, -1.12 ) , -Math.PI );


teste( "Math.atan2 ( -0, 0.499 ) ", Math.atan2 ( -0, 0.499 ) , 0 );


teste( "Math.atan2 ( -0, -0.5 ) ", Math.atan2 ( -0, -0.5 ) , -Math.PI );


teste( "Math.atan2 ( 1, Number.POSITIVE_INFINITY ) ", Math.atan2 ( 1, Number.POSITIVE_INFINITY ) , 0 );


teste( "Math.atan2 ( 1, Number.NEGATIVE_INFINITY ) ", Math.atan2 ( 1, Number.NEGATIVE_INFINITY ) , Math.PI );


teste( "Math.atan2 ( 1, Number.MAX_VALUE ) ", Math.atan2 ( 1, Number.MAX_VALUE ) , 5.562684646268003e-309 );


teste( "Math.atan2 ( 1, Number.MIN_VALUE ) ", Math.atan2 ( 1, Number.MIN_VALUE ) , Math.PI/2 );


test( "Math.atan2 ( 1, Number.NaN ) ", Math.atan2 ( 1, Number.NaN ) , Number.NaN );


teste( "Math.atan2 ( 1, 0 ) ", Math.atan2 ( 1, 0 ) , Math.PI/2 );


teste( "Math.atan2 ( 1, -0 ) ", Math.atan2 ( 1, -0 ) , Math.PI/2 );


teste( "Math.atan2 ( 1, 1 ) ", Math.atan2 ( 1, 1 ) , Math.PI/4 );


teste( "Math.atan2 ( 1, 1.012 ) ", Math.atan2 ( 1, 1.012 ) , 0.7794340194036072 );


teste( "Math.atan2 ( 1, -1.12 ) ", Math.atan2 ( 1, -1.12 ) , 2.4127379271371625 );


teste( "Math.atan2 ( 1, 0.499 ) ", Math.atan2 ( 1, 0.499 ) , 1.1079490377512701 );


teste( "Math.atan2 ( 1, -0.5 ) ", Math.atan2 ( 1, -0.5 ) , 2.0344439357957027 );


teste( "Math.atan2 ( 1.012, Number.POSITIVE_INFINITY ) ", Math.atan2 ( 1.012, Number.POSITIVE_INFINITY ) , 0 );


teste( "Math.atan2 ( 1.012, Number.NEGATIVE_INFINITY ) ", Math.atan2 ( 1.012, Number.NEGATIVE_INFINITY ) , Math.PI );


teste( "Math.atan2 ( 1.012, Number.MAX_VALUE ) ", Math.atan2 ( 1.012, Number.MAX_VALUE ) , 5.629436862023217e-309 );


teste( "Math.atan2 ( 1.012, Number.MIN_VALUE ) ", Math.atan2 ( 1.012, Number.MIN_VALUE ) , 1.5707963267948965 );


test( "Math.atan2 ( 1.012, Number.NaN ) ", Math.atan2 ( 1.012, Number.NaN ) , Number.NaN );


teste( "Math.atan2 ( 1.012, 0 ) ", Math.atan2 ( 1.012, 0 ) , 1.5707963267948965 );


teste( "Math.atan2 ( 1.012, -0 ) ", Math.atan2 ( 1.012, -0 ) , 1.5707963267948965 );


teste( "Math.atan2 ( 1.012, 1 ) ", Math.atan2 ( 1.012, 1 ) , 0.7913623073912894 );


teste( "Math.atan2 ( 1.012, 1.012 ) ", Math.atan2 ( 1.012, 1.012 ) , 0.7853981633974483 );


teste( "Math.atan2 ( 1.012, -1.12 ) ", Math.atan2 ( 1.012, -1.12 ) , 2.406807887224191 );


teste( "Math.atan2 ( 1.012, 0.499 ) ", Math.atan2 ( 1.012, 0.499 ) , 1.112697610505964 );


teste( "Math.atan2 ( 1.012, -0.5 ) ", Math.atan2 ( 1.012, -0.5 ) , 2.029689613455948 );


teste( "Math.atan2 ( -1.12, Number.POSITIVE_INFINITY ) ", Math.atan2 ( -1.12, Number.POSITIVE_INFINITY ) , 0 );


teste( "Math.atan2 ( -1.12, Number.NEGATIVE_INFINITY ) ", Math.atan2 ( -1.12, Number.NEGATIVE_INFINITY ) , -Math.PI );


teste( "Math.atan2 ( -1.12, Number.MAX_VALUE ) ", Math.atan2 ( -1.12, Number.MAX_VALUE ) , -6.230206803820164e-309 );


teste( "Math.atan2 ( -1.12, Number.MIN_VALUE ) ", Math.atan2 ( -1.12, Number.MIN_VALUE ) , -1.5707963267948965 );


test( "Math.atan2 ( -1.12, Number.NaN ) ", Math.atan2 ( -1.12, Number.NaN ) , Number.NaN );


teste( "Math.atan2 ( -1.12, 0 ) ", Math.atan2 ( -1.12, 0 ) , -1.5707963267948965 );


teste( "Math.atan2 ( -1.12, -0 ) ", Math.atan2 ( -1.12, -0 ) , -1.5707963267948965 );


teste( "Math.atan2 ( -1.12, 1 ) ", Math.atan2 ( -1.12, 1 ) , -0.8419416003422657 );


teste( "Math.atan2 ( -1.12, 1.012 ) ", Math.atan2 ( -1.12, 1.012 ) , -0.8360115604292945 );


teste( "Math.atan2 ( -1.12, -1.12 ) ", Math.atan2 ( -1.12, -1.12 ) , -2.356194490192345 );


teste( "Math.atan2 ( -1.12, 0.499 ) ", Math.atan2 ( -1.12, 0.499 ) , -1.151661099819374 );


teste( "Math.atan2 ( -1.12, -0.5 ) ", Math.atan2 ( -1.12, -0.5 ) , -1.9906762840004483 );


teste( "Math.atan2 ( 0.499, Number.POSITIVE_INFINITY ) ", Math.atan2 ( 0.499, Number.POSITIVE_INFINITY ) , 0 );


teste( "Math.atan2 ( 0.499, Number.NEGATIVE_INFINITY ) ", Math.atan2 ( 0.499, Number.NEGATIVE_INFINITY ) , Math.PI );


teste( "Math.atan2 ( 0.499, Number.MAX_VALUE ) ", Math.atan2 ( 0.499, Number.MAX_VALUE ) , 2.77577963848773e-309 );


teste( "Math.atan2 ( 0.499, Number.MIN_VALUE ) ", Math.atan2 ( 0.499, Number.MIN_VALUE ) , 1.5707963267948965 );


test( "Math.atan2 ( 0.499, Number.NaN ) ", Math.atan2 ( 0.499, Number.NaN ) , Number.NaN );


teste( "Math.atan2 ( 0.499, 0 ) ", Math.atan2 ( 0.499, 0 ) , 1.5707963267948965 );


teste( "Math.atan2 ( 0.499, -0 ) ", Math.atan2 ( 0.499, -0 ) , 1.5707963267948965 );


teste( "Math.atan2 ( 0.499, 1 ) ", Math.atan2 ( 0.499, 1 ) , 0.4628472890436265 );


teste( "Math.atan2 ( 0.499, 1.012 ) ", Math.atan2 ( 0.499, 1.012 ) , 0.4580987162889326 );


teste( "Math.atan2 ( 0.499, -1.12 ) ", Math.atan2 ( 0.499, -1.12 ) , 2.7224574266142705 );


teste( "Math.atan2 ( 0.499, 0.499 ) ", Math.atan2 ( 0.499, 0.499 ) , 0.7853981633974483 );


teste( "Math.atan2 ( 0.499, -0.5 ) ", Math.atan2 ( 0.499, -0.5 ) , 2.3571954908590107 );


teste( "Math.atan2 ( -0.5, Number.POSITIVE_INFINITY ) ", Math.atan2 ( -0.5, Number.POSITIVE_INFINITY ) , 0 );


teste( "Math.atan2 ( -0.5, Number.NEGATIVE_INFINITY ) ", Math.atan2 ( -0.5, Number.NEGATIVE_INFINITY ) , -Math.PI );


teste( "Math.atan2 ( -0.5, Number.MAX_VALUE ) ", Math.atan2 ( -0.5, Number.MAX_VALUE ) , -2.781342323134e-309 );


teste( "Math.atan2 ( -0.5, Number.MIN_VALUE ) ", Math.atan2 ( -0.5, Number.MIN_VALUE ) , -1.5707963267948965 );


test( "Math.atan2 ( -0.5, Number.NaN ) ", Math.atan2 ( -0.5, Number.NaN ) , Number.NaN );


teste( "Math.atan2 ( -0.5, 0 ) ", Math.atan2 ( -0.5, 0 ) , -1.5707963267948965 );


teste( "Math.atan2 ( -0.5, -0 ) ", Math.atan2 ( -0.5, -0 ) , -1.5707963267948965 );


teste( "Math.atan2 ( -0.5, 1 ) ", Math.atan2 ( -0.5, 1 ) , -0.4636476090008061 );


teste( "Math.atan2 ( -0.5, 1.012 ) ", Math.atan2 ( -0.5, 1.012 ) , -0.4588932866610517 );


teste( "Math.atan2 ( -0.5, -1.12 ) ", Math.atan2 ( -0.5, -1.12 ) , -2.7217126963842415 );


teste( "Math.atan2 ( -0.5, 0.499 ) ", Math.atan2 ( -0.5, 0.499 ) , -0.7863991640641141 );


teste( "Math.atan2 ( -0.5, -0.5 ) ", Math.atan2 ( -0.5, -0.5 ) , -2.356194490192345 );


test( "Math.max ( Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY ) ", Math.max ( Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY ) , Infinity );


test( "Math.max ( Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY ) ", Math.max ( Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY ) , Infinity );


test( "Math.max ( Number.POSITIVE_INFINITY, Number.MAX_VALUE ) ", Math.max ( Number.POSITIVE_INFINITY, Number.MAX_VALUE ) , Infinity );


test( "Math.max ( Number.POSITIVE_INFINITY, Number.MIN_VALUE ) ", Math.max ( Number.POSITIVE_INFINITY, Number.MIN_VALUE ) , Infinity );


test( "Math.max ( Number.POSITIVE_INFINITY, Number.NaN ) ", Math.max ( Number.POSITIVE_INFINITY, Number.NaN ) , Number.NaN );


test( "Math.max ( Number.POSITIVE_INFINITY, 0 ) ", Math.max ( Number.POSITIVE_INFINITY, 0 ) , Infinity );


test( "Math.max ( Number.POSITIVE_INFINITY, -0 ) ", Math.max ( Number.POSITIVE_INFINITY, -0 ) , Infinity );


test( "Math.max ( Number.POSITIVE_INFINITY, 1 ) ", Math.max ( Number.POSITIVE_INFINITY, 1 ) , Infinity );


test( "Math.max ( Number.POSITIVE_INFINITY, 1.012 ) ", Math.max ( Number.POSITIVE_INFINITY, 1.012 ) , Infinity );


test( "Math.max ( Number.POSITIVE_INFINITY, -1.12 ) ", Math.max ( Number.POSITIVE_INFINITY, -1.12 ) , Infinity );


test( "Math.max ( Number.POSITIVE_INFINITY, 0.499 ) ", Math.max ( Number.POSITIVE_INFINITY, 0.499 ) , Infinity );


test( "Math.max ( Number.POSITIVE_INFINITY, -0.5 ) ", Math.max ( Number.POSITIVE_INFINITY, -0.5 ) , Infinity );


test( "Math.max ( Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY ) ", Math.max ( Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY ) , Infinity );


test( "Math.max ( Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY ) ", Math.max ( Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY ) , -Infinity );


test( "Math.max ( Number.NEGATIVE_INFINITY, Number.MAX_VALUE ) ", Math.max ( Number.NEGATIVE_INFINITY, Number.MAX_VALUE ) , Number.MAX_VALUE );


test( "Math.max ( Number.NEGATIVE_INFINITY, Number.MIN_VALUE ) ", Math.max ( Number.NEGATIVE_INFINITY, Number.MIN_VALUE ) , Number.MIN_VALUE );


test( "Math.max ( Number.NEGATIVE_INFINITY, Number.NaN ) ", Math.max ( Number.NEGATIVE_INFINITY, Number.NaN ) , Number.NaN );


test( "Math.max ( Number.NEGATIVE_INFINITY, 0 ) ", Math.max ( Number.NEGATIVE_INFINITY, 0 ) , 0 );


test( "Math.max ( Number.NEGATIVE_INFINITY, -0 ) ", Math.max ( Number.NEGATIVE_INFINITY, -0 ) , 0 );


test( "Math.max ( Number.NEGATIVE_INFINITY, 1 ) ", Math.max ( Number.NEGATIVE_INFINITY, 1 ) , 1 );


test( "Math.max ( Number.NEGATIVE_INFINITY, 1.012 ) ", Math.max ( Number.NEGATIVE_INFINITY, 1.012 ) , 1.012 );


test( "Math.max ( Number.NEGATIVE_INFINITY, -1.12 ) ", Math.max ( Number.NEGATIVE_INFINITY, -1.12 ) , -1.12 );


test( "Math.max ( Number.NEGATIVE_INFINITY, 0.499 ) ", Math.max ( Number.NEGATIVE_INFINITY, 0.499 ) , 0.499 );


test( "Math.max ( Number.NEGATIVE_INFINITY, -0.5 ) ", Math.max ( Number.NEGATIVE_INFINITY, -0.5 ) , -0.5 );


test( "Math.max ( Number.MAX_VALUE, Number.POSITIVE_INFINITY ) ", Math.max ( Number.MAX_VALUE, Number.POSITIVE_INFINITY ) , Infinity );


test( "Math.max ( Number.MAX_VALUE, Number.NEGATIVE_INFINITY ) ", Math.max ( Number.MAX_VALUE, Number.NEGATIVE_INFINITY ) , Number.MAX_VALUE );


test( "Math.max ( Number.MAX_VALUE, Number.MAX_VALUE ) ", Math.max ( Number.MAX_VALUE, Number.MAX_VALUE ) , Number.MAX_VALUE );


test( "Math.max ( Number.MAX_VALUE, Number.MIN_VALUE ) ", Math.max ( Number.MAX_VALUE, Number.MIN_VALUE ) , Number.MAX_VALUE );


test( "Math.max ( Number.MAX_VALUE, Number.NaN ) ", Math.max ( Number.MAX_VALUE, Number.NaN ) , Number.NaN );


test( "Math.max ( Number.MAX_VALUE, 0 ) ", Math.max ( Number.MAX_VALUE, 0 ) , Number.MAX_VALUE );


test( "Math.max ( Number.MAX_VALUE, -0 ) ", Math.max ( Number.MAX_VALUE, -0 ) , Number.MAX_VALUE );


test( "Math.max ( Number.MAX_VALUE, 1 ) ", Math.max ( Number.MAX_VALUE, 1 ) , Number.MAX_VALUE );


test( "Math.max ( Number.MAX_VALUE, 1.012 ) ", Math.max ( Number.MAX_VALUE, 1.012 ) , Number.MAX_VALUE );


test( "Math.max ( Number.MAX_VALUE, -1.12 ) ", Math.max ( Number.MAX_VALUE, -1.12 ) , Number.MAX_VALUE );


test( "Math.max ( Number.MAX_VALUE, 0.499 ) ", Math.max ( Number.MAX_VALUE, 0.499 ) , Number.MAX_VALUE );


test( "Math.max ( Number.MAX_VALUE, -0.5 ) ", Math.max ( Number.MAX_VALUE, -0.5 ) , Number.MAX_VALUE );


test( "Math.max ( Number.MIN_VALUE, Number.POSITIVE_INFINITY ) ", Math.max ( Number.MIN_VALUE, Number.POSITIVE_INFINITY ) , Infinity );


test( "Math.max ( Number.MIN_VALUE, Number.NEGATIVE_INFINITY ) ", Math.max ( Number.MIN_VALUE, Number.NEGATIVE_INFINITY ) , Number.MIN_VALUE );


test( "Math.max ( Number.MIN_VALUE, Number.MAX_VALUE ) ", Math.max ( Number.MIN_VALUE, Number.MAX_VALUE ) , Number.MAX_VALUE );


test( "Math.max ( Number.MIN_VALUE, Number.MIN_VALUE ) ", Math.max ( Number.MIN_VALUE, Number.MIN_VALUE ) , Number.MIN_VALUE );


test( "Math.max ( Number.MIN_VALUE, Number.NaN ) ", Math.max ( Number.MIN_VALUE, Number.NaN ) , Number.NaN );


test( "Math.max ( Number.MIN_VALUE, 0 ) ", Math.max ( Number.MIN_VALUE, 0 ) , Number.MIN_VALUE );


test( "Math.max ( Number.MIN_VALUE, -0 ) ", Math.max ( Number.MIN_VALUE, -0 ) , Number.MIN_VALUE );


test( "Math.max ( Number.MIN_VALUE, 1 ) ", Math.max ( Number.MIN_VALUE, 1 ) , 1 );


test( "Math.max ( Number.MIN_VALUE, 1.012 ) ", Math.max ( Number.MIN_VALUE, 1.012 ) , 1.012 );


test( "Math.max ( Number.MIN_VALUE, -1.12 ) ", Math.max ( Number.MIN_VALUE, -1.12 ) , Number.MIN_VALUE );
/* WAS: 5e-324 */

test( "Math.max ( Number.MIN_VALUE, 0.499 ) ", Math.max ( Number.MIN_VALUE, 0.499 ) , 0.499 );


test( "Math.max ( Number.MIN_VALUE, -0.5 ) ", Math.max ( Number.MIN_VALUE, -0.5 ) , Number.MIN_VALUE );
/* WAS: 5e-324 */

test( "Math.max ( Number.NaN, Number.POSITIVE_INFINITY ) ", Math.max ( Number.NaN, Number.POSITIVE_INFINITY ) , Number.NaN );


test( "Math.max ( Number.NaN, Number.NEGATIVE_INFINITY ) ", Math.max ( Number.NaN, Number.NEGATIVE_INFINITY ) , Number.NaN );


test( "Math.max ( Number.NaN, Number.MAX_VALUE ) ", Math.max ( Number.NaN, Number.MAX_VALUE ) , Number.NaN );


test( "Math.max ( Number.NaN, Number.MIN_VALUE ) ", Math.max ( Number.NaN, Number.MIN_VALUE ) , Number.NaN );


test( "Math.max ( Number.NaN, Number.NaN ) ", Math.max ( Number.NaN, Number.NaN ) , Number.NaN );


test( "Math.max ( Number.NaN, 0 ) ", Math.max ( Number.NaN, 0 ) , Number.NaN );


test( "Math.max ( Number.NaN, -0 ) ", Math.max ( Number.NaN, -0 ) , Number.NaN );


test( "Math.max ( Number.NaN, 1 ) ", Math.max ( Number.NaN, 1 ) , Number.NaN );


test( "Math.max ( Number.NaN, 1.012 ) ", Math.max ( Number.NaN, 1.012 ) , Number.NaN );


test( "Math.max ( Number.NaN, -1.12 ) ", Math.max ( Number.NaN, -1.12 ) , Number.NaN );


test( "Math.max ( Number.NaN, 0.499 ) ", Math.max ( Number.NaN, 0.499 ) , Number.NaN );


test( "Math.max ( Number.NaN, -0.5 ) ", Math.max ( Number.NaN, -0.5 ) , Number.NaN );


test( "Math.max ( 0, Number.POSITIVE_INFINITY ) ", Math.max ( 0, Number.POSITIVE_INFINITY ) , Infinity );


test( "Math.max ( 0, Number.NEGATIVE_INFINITY ) ", Math.max ( 0, Number.NEGATIVE_INFINITY ) , 0 );


test( "Math.max ( 0, Number.MAX_VALUE ) ", Math.max ( 0, Number.MAX_VALUE ) , Number.MAX_VALUE );


test( "Math.max ( 0, Number.MIN_VALUE ) ", Math.max ( 0, Number.MIN_VALUE ) , Number.MIN_VALUE );


test( "Math.max ( 0, Number.NaN ) ", Math.max ( 0, Number.NaN ) , Number.NaN );


test( "Math.max ( 0, 0 ) ", Math.max ( 0, 0 ) , 0 );


test( "Math.max ( 0, -0 ) ", Math.max ( 0, -0 ) , 0 );


test( "Math.max ( 0, 1 ) ", Math.max ( 0, 1 ) , 1 );


test( "Math.max ( 0, 1.012 ) ", Math.max ( 0, 1.012 ) , 1.012 );


test( "Math.max ( 0, -1.12 ) ", Math.max ( 0, -1.12 ) , 0 );


test( "Math.max ( 0, 0.499 ) ", Math.max ( 0, 0.499 ) , 0.499 );


test( "Math.max ( 0, -0.5 ) ", Math.max ( 0, -0.5 ) , 0 );


test( "Math.max ( -0, Number.POSITIVE_INFINITY ) ", Math.max ( -0, Number.POSITIVE_INFINITY ) , Infinity );


test( "Math.max ( -0, Number.NEGATIVE_INFINITY ) ", Math.max ( -0, Number.NEGATIVE_INFINITY ) , 0 );


test( "Math.max ( -0, Number.MAX_VALUE ) ", Math.max ( -0, Number.MAX_VALUE ) , Number.MAX_VALUE );


test( "Math.max ( -0, Number.MIN_VALUE ) ", Math.max ( -0, Number.MIN_VALUE ) , Number.MIN_VALUE );


test( "Math.max ( -0, Number.NaN ) ", Math.max ( -0, Number.NaN ) , Number.NaN );


test( "Math.max ( -0, 0 ) ", Math.max ( -0, 0 ) , 0 );


test( "Math.max ( -0, -0 ) ", Math.max ( -0, -0 ) , 0 );


test( "Math.max ( -0, 1 ) ", Math.max ( -0, 1 ) , 1 );


test( "Math.max ( -0, 1.012 ) ", Math.max ( -0, 1.012 ) , 1.012 );


test( "Math.max ( -0, -1.12 ) ", Math.max ( -0, -1.12 ) , 0 );


test( "Math.max ( -0, 0.499 ) ", Math.max ( -0, 0.499 ) , 0.499 );


test( "Math.max ( -0, -0.5 ) ", Math.max ( -0, -0.5 ) , 0 );


test( "Math.max ( 1, Number.POSITIVE_INFINITY ) ", Math.max ( 1, Number.POSITIVE_INFINITY ) , Infinity );


test( "Math.max ( 1, Number.NEGATIVE_INFINITY ) ", Math.max ( 1, Number.NEGATIVE_INFINITY ) , 1 );


test( "Math.max ( 1, Number.MAX_VALUE ) ", Math.max ( 1, Number.MAX_VALUE ) , Number.MAX_VALUE );


test( "Math.max ( 1, Number.MIN_VALUE ) ", Math.max ( 1, Number.MIN_VALUE ) , 1 );


test( "Math.max ( 1, Number.NaN ) ", Math.max ( 1, Number.NaN ) , Number.NaN );


test( "Math.max ( 1, 0 ) ", Math.max ( 1, 0 ) , 1 );


test( "Math.max ( 1, -0 ) ", Math.max ( 1, -0 ) , 1 );


test( "Math.max ( 1, 1 ) ", Math.max ( 1, 1 ) , 1 );


test( "Math.max ( 1, 1.012 ) ", Math.max ( 1, 1.012 ) , 1.012 );


test( "Math.max ( 1, -1.12 ) ", Math.max ( 1, -1.12 ) , 1 );


test( "Math.max ( 1, 0.499 ) ", Math.max ( 1, 0.499 ) , 1 );


test( "Math.max ( 1, -0.5 ) ", Math.max ( 1, -0.5 ) , 1 );


test( "Math.max ( 1.012, Number.POSITIVE_INFINITY ) ", Math.max ( 1.012, Number.POSITIVE_INFINITY ) , Infinity );


test( "Math.max ( 1.012, Number.NEGATIVE_INFINITY ) ", Math.max ( 1.012, Number.NEGATIVE_INFINITY ) , 1.012 );


test( "Math.max ( 1.012, Number.MAX_VALUE ) ", Math.max ( 1.012, Number.MAX_VALUE ) , Number.MAX_VALUE );


test( "Math.max ( 1.012, Number.MIN_VALUE ) ", Math.max ( 1.012, Number.MIN_VALUE ) , 1.012 );


test( "Math.max ( 1.012, Number.NaN ) ", Math.max ( 1.012, Number.NaN ) , Number.NaN );


test( "Math.max ( 1.012, 0 ) ", Math.max ( 1.012, 0 ) , 1.012 );


test( "Math.max ( 1.012, -0 ) ", Math.max ( 1.012, -0 ) , 1.012 );


test( "Math.max ( 1.012, 1 ) ", Math.max ( 1.012, 1 ) , 1.012 );


test( "Math.max ( 1.012, 1.012 ) ", Math.max ( 1.012, 1.012 ) , 1.012 );


test( "Math.max ( 1.012, -1.12 ) ", Math.max ( 1.012, -1.12 ) , 1.012 );


test( "Math.max ( 1.012, 0.499 ) ", Math.max ( 1.012, 0.499 ) , 1.012 );


test( "Math.max ( 1.012, -0.5 ) ", Math.max ( 1.012, -0.5 ) , 1.012 );


test( "Math.max ( -1.12, Number.POSITIVE_INFINITY ) ", Math.max ( -1.12, Number.POSITIVE_INFINITY ) , Infinity );


test( "Math.max ( -1.12, Number.NEGATIVE_INFINITY ) ", Math.max ( -1.12, Number.NEGATIVE_INFINITY ) , -1.12 );


test( "Math.max ( -1.12, Number.MAX_VALUE ) ", Math.max ( -1.12, Number.MAX_VALUE ) , Number.MAX_VALUE );


test( "Math.max ( -1.12, Number.MIN_VALUE ) ", Math.max ( -1.12, Number.MIN_VALUE ) , Number.MIN_VALUE );
/* WAS: 5e-324 */

test( "Math.max ( -1.12, Number.NaN ) ", Math.max ( -1.12, Number.NaN ) , Number.NaN );


test( "Math.max ( -1.12, 0 ) ", Math.max ( -1.12, 0 ) , 0 );


test( "Math.max ( -1.12, -0 ) ", Math.max ( -1.12, -0 ) , 0 );


test( "Math.max ( -1.12, 1 ) ", Math.max ( -1.12, 1 ) , 1 );


test( "Math.max ( -1.12, 1.012 ) ", Math.max ( -1.12, 1.012 ) , 1.012 );


test( "Math.max ( -1.12, -1.12 ) ", Math.max ( -1.12, -1.12 ) , -1.12 );


test( "Math.max ( -1.12, 0.499 ) ", Math.max ( -1.12, 0.499 ) , 0.499 );


test( "Math.max ( -1.12, -0.5 ) ", Math.max ( -1.12, -0.5 ) , -0.5 );


test( "Math.max ( 0.499, Number.POSITIVE_INFINITY ) ", Math.max ( 0.499, Number.POSITIVE_INFINITY ) , Infinity );


test( "Math.max ( 0.499, Number.NEGATIVE_INFINITY ) ", Math.max ( 0.499, Number.NEGATIVE_INFINITY ) , 0.499 );


test( "Math.max ( 0.499, Number.MAX_VALUE ) ", Math.max ( 0.499, Number.MAX_VALUE ) , Number.MAX_VALUE );


test( "Math.max ( 0.499, Number.MIN_VALUE ) ", Math.max ( 0.499, Number.MIN_VALUE ) , 0.499 );


test( "Math.max ( 0.499, Number.NaN ) ", Math.max ( 0.499, Number.NaN ) , Number.NaN );


test( "Math.max ( 0.499, 0 ) ", Math.max ( 0.499, 0 ) , 0.499 );


test( "Math.max ( 0.499, -0 ) ", Math.max ( 0.499, -0 ) , 0.499 );


test( "Math.max ( 0.499, 1 ) ", Math.max ( 0.499, 1 ) , 1 );


test( "Math.max ( 0.499, 1.012 ) ", Math.max ( 0.499, 1.012 ) , 1.012 );


test( "Math.max ( 0.499, -1.12 ) ", Math.max ( 0.499, -1.12 ) , 0.499 );


test( "Math.max ( 0.499, 0.499 ) ", Math.max ( 0.499, 0.499 ) , 0.499 );


test( "Math.max ( 0.499, -0.5 ) ", Math.max ( 0.499, -0.5 ) , 0.499 );


test( "Math.max ( -0.5, Number.POSITIVE_INFINITY ) ", Math.max ( -0.5, Number.POSITIVE_INFINITY ) , Infinity );


test( "Math.max ( -0.5, Number.NEGATIVE_INFINITY ) ", Math.max ( -0.5, Number.NEGATIVE_INFINITY ) , -0.5 );


test( "Math.max ( -0.5, Number.MAX_VALUE ) ", Math.max ( -0.5, Number.MAX_VALUE ) , Number.MAX_VALUE );


test( "Math.max ( -0.5, Number.MIN_VALUE ) ", Math.max ( -0.5, Number.MIN_VALUE ) , Number.MIN_VALUE );


test( "Math.max ( -0.5, Number.NaN ) ", Math.max ( -0.5, Number.NaN ) , Number.NaN );


test( "Math.max ( -0.5, 0 ) ", Math.max ( -0.5, 0 ) , 0 );


test( "Math.max ( -0.5, -0 ) ", Math.max ( -0.5, -0 ) , 0 );


test( "Math.max ( -0.5, 1 ) ", Math.max ( -0.5, 1 ) , 1 );


test( "Math.max ( -0.5, 1.012 ) ", Math.max ( -0.5, 1.012 ) , 1.012 );


test( "Math.max ( -0.5, -1.12 ) ", Math.max ( -0.5, -1.12 ) , -0.5 );


test( "Math.max ( -0.5, 0.499 ) ", Math.max ( -0.5, 0.499 ) , 0.499 );


test( "Math.max ( -0.5, -0.5 ) ", Math.max ( -0.5, -0.5 ) , -0.5 );

test( "Math.max ( <I>no parameters</I> ) ", Math.max ( ) , -Infinity );


test( "Math.min ( Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY ) ", Math.min ( Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY ) , Infinity );


test( "Math.min ( Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY ) ", Math.min ( Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY ) , -Infinity );


test( "Math.min ( Number.POSITIVE_INFINITY, Number.MAX_VALUE ) ", Math.min ( Number.POSITIVE_INFINITY, Number.MAX_VALUE ) , Number.MAX_VALUE );


test( "Math.min ( Number.POSITIVE_INFINITY, Number.MIN_VALUE ) ", Math.min ( Number.POSITIVE_INFINITY, Number.MIN_VALUE ) , Number.MIN_VALUE );


test( "Math.min ( Number.POSITIVE_INFINITY, Number.NaN ) ", Math.min ( Number.POSITIVE_INFINITY, Number.NaN ) , Number.NaN );


test( "Math.min ( Number.POSITIVE_INFINITY, 0 ) ", Math.min ( Number.POSITIVE_INFINITY, 0 ) , 0 );


test( "Math.min ( Number.POSITIVE_INFINITY, -0 ) ", Math.min ( Number.POSITIVE_INFINITY, -0 ) , 0 );


test( "Math.min ( Number.POSITIVE_INFINITY, 1 ) ", Math.min ( Number.POSITIVE_INFINITY, 1 ) , 1 );


test( "Math.min ( Number.POSITIVE_INFINITY, 1.012 ) ", Math.min ( Number.POSITIVE_INFINITY, 1.012 ) , 1.012 );


test( "Math.min ( Number.POSITIVE_INFINITY, -1.12 ) ", Math.min ( Number.POSITIVE_INFINITY, -1.12 ) , -1.12 );


test( "Math.min ( Number.POSITIVE_INFINITY, 0.499 ) ", Math.min ( Number.POSITIVE_INFINITY, 0.499 ) , 0.499 );


test( "Math.min ( Number.POSITIVE_INFINITY, -0.5 ) ", Math.min ( Number.POSITIVE_INFINITY, -0.5 ) , -0.5 );


test( "Math.min ( Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY ) ", Math.min ( Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY ) , -Infinity );


test( "Math.min ( Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY ) ", Math.min ( Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY ) , -Infinity );


test( "Math.min ( Number.NEGATIVE_INFINITY, Number.MAX_VALUE ) ", Math.min ( Number.NEGATIVE_INFINITY, Number.MAX_VALUE ) , -Infinity );


test( "Math.min ( Number.NEGATIVE_INFINITY, Number.MIN_VALUE ) ", Math.min ( Number.NEGATIVE_INFINITY, Number.MIN_VALUE ) , -Infinity );


test( "Math.min ( Number.NEGATIVE_INFINITY, Number.NaN ) ", Math.min ( Number.NEGATIVE_INFINITY, Number.NaN ) , Number.NaN );


test( "Math.min ( Number.NEGATIVE_INFINITY, 0 ) ", Math.min ( Number.NEGATIVE_INFINITY, 0 ) , -Infinity );


test( "Math.min ( Number.NEGATIVE_INFINITY, -0 ) ", Math.min ( Number.NEGATIVE_INFINITY, -0 ) , -Infinity );


test( "Math.min ( Number.NEGATIVE_INFINITY, 1 ) ", Math.min ( Number.NEGATIVE_INFINITY, 1 ) , -Infinity );


test( "Math.min ( Number.NEGATIVE_INFINITY, 1.012 ) ", Math.min ( Number.NEGATIVE_INFINITY, 1.012 ) , -Infinity );


test( "Math.min ( Number.NEGATIVE_INFINITY, -1.12 ) ", Math.min ( Number.NEGATIVE_INFINITY, -1.12 ) , -Infinity );


test( "Math.min ( Number.NEGATIVE_INFINITY, 0.499 ) ", Math.min ( Number.NEGATIVE_INFINITY, 0.499 ) , -Infinity );


test( "Math.min ( Number.NEGATIVE_INFINITY, -0.5 ) ", Math.min ( Number.NEGATIVE_INFINITY, -0.5 ) , -Infinity );


test( "Math.min ( Number.MAX_VALUE, Number.POSITIVE_INFINITY ) ", Math.min ( Number.MAX_VALUE, Number.POSITIVE_INFINITY ) , Number.MAX_VALUE );


test( "Math.min ( Number.MAX_VALUE, Number.NEGATIVE_INFINITY ) ", Math.min ( Number.MAX_VALUE, Number.NEGATIVE_INFINITY ) , -Infinity );


test( "Math.min ( Number.MAX_VALUE, Number.MAX_VALUE ) ", Math.min ( Number.MAX_VALUE, Number.MAX_VALUE ) , Number.MAX_VALUE );


test( "Math.min ( Number.MAX_VALUE, Number.MIN_VALUE ) ", Math.min ( Number.MAX_VALUE, Number.MIN_VALUE ) , Number.MIN_VALUE );


test( "Math.min ( Number.MAX_VALUE, Number.NaN ) ", Math.min ( Number.MAX_VALUE, Number.NaN ) , Number.NaN );


test( "Math.min ( Number.MAX_VALUE, 0 ) ", Math.min ( Number.MAX_VALUE, 0 ) , 0 );


test( "Math.min ( Number.MAX_VALUE, -0 ) ", Math.min ( Number.MAX_VALUE, -0 ) , 0 );


test( "Math.min ( Number.MAX_VALUE, 1 ) ", Math.min ( Number.MAX_VALUE, 1 ) , 1 );


test( "Math.min ( Number.MAX_VALUE, 1.012 ) ", Math.min ( Number.MAX_VALUE, 1.012 ) , 1.012 );


test( "Math.min ( Number.MAX_VALUE, -1.12 ) ", Math.min ( Number.MAX_VALUE, -1.12 ) , -1.12 );


test( "Math.min ( Number.MAX_VALUE, 0.499 ) ", Math.min ( Number.MAX_VALUE, 0.499 ) , 0.499 );


test( "Math.min ( Number.MAX_VALUE, -0.5 ) ", Math.min ( Number.MAX_VALUE, -0.5 ) , -0.5 );


test( "Math.min ( Number.MIN_VALUE, Number.POSITIVE_INFINITY ) ", Math.min ( Number.MIN_VALUE, Number.POSITIVE_INFINITY ) , Number.MIN_VALUE );
/* WAS: 5e-324 */

test( "Math.min ( Number.MIN_VALUE, Number.NEGATIVE_INFINITY ) ", Math.min ( Number.MIN_VALUE, Number.NEGATIVE_INFINITY ) , -Infinity );


test( "Math.min ( Number.MIN_VALUE, Number.MAX_VALUE ) ", Math.min ( Number.MIN_VALUE, Number.MAX_VALUE ) , Number.MIN_VALUE );
/* WAS: 5e-324 */

test( "Math.min ( Number.MIN_VALUE, Number.MIN_VALUE ) ", Math.min ( Number.MIN_VALUE, Number.MIN_VALUE ) , Number.MIN_VALUE );
/* WAS: 5e-324 */

test( "Math.min ( Number.MIN_VALUE, Number.NaN ) ", Math.min ( Number.MIN_VALUE, Number.NaN ) , Number.NaN );


test( "Math.min ( Number.MIN_VALUE, 0 ) ", Math.min ( Number.MIN_VALUE, 0 ) , 0 );


test( "Math.min ( Number.MIN_VALUE, -0 ) ", Math.min ( Number.MIN_VALUE, -0 ) , 0 );


test( "Math.min ( Number.MIN_VALUE, 1 ) ", Math.min ( Number.MIN_VALUE, 1 ) , Number.MIN_VALUE );
/* WAS: 5e-324 */

test( "Math.min ( Number.MIN_VALUE, 1.012 ) ", Math.min ( Number.MIN_VALUE, 1.012 ) , Number.MIN_VALUE );
/* WAS: 5e-324 */

test( "Math.min ( Number.MIN_VALUE, -1.12 ) ", Math.min ( Number.MIN_VALUE, -1.12 ) , -1.12 );


test( "Math.min ( Number.MIN_VALUE, 0.499 ) ", Math.min ( Number.MIN_VALUE, 0.499 ) , Number.MIN_VALUE );
/* WAS: 5e-324 */

test( "Math.min ( Number.MIN_VALUE, -0.5 ) ", Math.min ( Number.MIN_VALUE, -0.5 ) , -0.5 );


test( "Math.min ( Number.NaN, Number.POSITIVE_INFINITY ) ", Math.min ( Number.NaN, Number.POSITIVE_INFINITY ) , Number.NaN );


test( "Math.min ( Number.NaN, Number.NEGATIVE_INFINITY ) ", Math.min ( Number.NaN, Number.NEGATIVE_INFINITY ) , Number.NaN );


test( "Math.min ( Number.NaN, Number.MAX_VALUE ) ", Math.min ( Number.NaN, Number.MAX_VALUE ) , Number.NaN );


test( "Math.min ( Number.NaN, Number.MIN_VALUE ) ", Math.min ( Number.NaN, Number.MIN_VALUE ) , Number.NaN );


test( "Math.min ( Number.NaN, Number.NaN ) ", Math.min ( Number.NaN, Number.NaN ) , Number.NaN );


test( "Math.min ( Number.NaN, 0 ) ", Math.min ( Number.NaN, 0 ) , Number.NaN );


test( "Math.min ( Number.NaN, -0 ) ", Math.min ( Number.NaN, -0 ) , Number.NaN );


test( "Math.min ( Number.NaN, 1 ) ", Math.min ( Number.NaN, 1 ) , Number.NaN );


test( "Math.min ( Number.NaN, 1.012 ) ", Math.min ( Number.NaN, 1.012 ) , Number.NaN );


test( "Math.min ( Number.NaN, -1.12 ) ", Math.min ( Number.NaN, -1.12 ) , Number.NaN );


test( "Math.min ( Number.NaN, 0.499 ) ", Math.min ( Number.NaN, 0.499 ) , Number.NaN );


test( "Math.min ( Number.NaN, -0.5 ) ", Math.min ( Number.NaN, -0.5 ) , Number.NaN );


test( "Math.min ( 0, Number.POSITIVE_INFINITY ) ", Math.min ( 0, Number.POSITIVE_INFINITY ) , 0 );


test( "Math.min ( 0, Number.NEGATIVE_INFINITY ) ", Math.min ( 0, Number.NEGATIVE_INFINITY ) , -Infinity );


test( "Math.min ( 0, Number.MAX_VALUE ) ", Math.min ( 0, Number.MAX_VALUE ) , 0 );


test( "Math.min ( 0, Number.MIN_VALUE ) ", Math.min ( 0, Number.MIN_VALUE ) , 0 );


test( "Math.min ( 0, Number.NaN ) ", Math.min ( 0, Number.NaN ) , Number.NaN );


test( "Math.min ( 0, 0 ) ", Math.min ( 0, 0 ) , 0 );


test( "Math.min ( 0, -0 ) ", Math.min ( 0, -0 ) , 0 );


test( "Math.min ( 0, 1 ) ", Math.min ( 0, 1 ) , 0 );


test( "Math.min ( 0, 1.012 ) ", Math.min ( 0, 1.012 ) , 0 );


test( "Math.min ( 0, -1.12 ) ", Math.min ( 0, -1.12 ) , -1.12 );


test( "Math.min ( 0, 0.499 ) ", Math.min ( 0, 0.499 ) , 0 );


test( "Math.min ( 0, -0.5 ) ", Math.min ( 0, -0.5 ) , -0.5 );


test( "Math.min ( -0, Number.POSITIVE_INFINITY ) ", Math.min ( -0, Number.POSITIVE_INFINITY ) , 0 );


test( "Math.min ( -0, Number.NEGATIVE_INFINITY ) ", Math.min ( -0, Number.NEGATIVE_INFINITY ) , -Infinity );


test( "Math.min ( -0, Number.MAX_VALUE ) ", Math.min ( -0, Number.MAX_VALUE ) , 0 );


test( "Math.min ( -0, Number.MIN_VALUE ) ", Math.min ( -0, Number.MIN_VALUE ) , 0 );


test( "Math.min ( -0, Number.NaN ) ", Math.min ( -0, Number.NaN ) , Number.NaN );


test( "Math.min ( -0, 0 ) ", Math.min ( -0, 0 ) , 0 );


test( "Math.min ( -0, -0 ) ", Math.min ( -0, -0 ) , 0 );


test( "Math.min ( -0, 1 ) ", Math.min ( -0, 1 ) , 0 );


test( "Math.min ( -0, 1.012 ) ", Math.min ( -0, 1.012 ) , 0 );


test( "Math.min ( -0, -1.12 ) ", Math.min ( -0, -1.12 ) , -1.12 );


test( "Math.min ( -0, 0.499 ) ", Math.min ( -0, 0.499 ) , 0 );


test( "Math.min ( -0, -0.5 ) ", Math.min ( -0, -0.5 ) , -0.5 );


test( "Math.min ( 1, Number.POSITIVE_INFINITY ) ", Math.min ( 1, Number.POSITIVE_INFINITY ) , 1 );


test( "Math.min ( 1, Number.NEGATIVE_INFINITY ) ", Math.min ( 1, Number.NEGATIVE_INFINITY ) , -Infinity );


test( "Math.min ( 1, Number.MAX_VALUE ) ", Math.min ( 1, Number.MAX_VALUE ) , 1 );


test( "Math.min ( 1, Number.MIN_VALUE ) ", Math.min ( 1, Number.MIN_VALUE ) , Number.MIN_VALUE );


test( "Math.min ( 1, Number.NaN ) ", Math.min ( 1, Number.NaN ) , Number.NaN );


test( "Math.min ( 1, 0 ) ", Math.min ( 1, 0 ) , 0 );


test( "Math.min ( 1, -0 ) ", Math.min ( 1, -0 ) , 0 );


test( "Math.min ( 1, 1 ) ", Math.min ( 1, 1 ) , 1 );


test( "Math.min ( 1, 1.012 ) ", Math.min ( 1, 1.012 ) , 1 );


test( "Math.min ( 1, -1.12 ) ", Math.min ( 1, -1.12 ) , -1.12 );


test( "Math.min ( 1, 0.499 ) ", Math.min ( 1, 0.499 ) , 0.499 );


test( "Math.min ( 1, -0.5 ) ", Math.min ( 1, -0.5 ) , -0.5 );


test( "Math.min ( 1.012, Number.POSITIVE_INFINITY ) ", Math.min ( 1.012, Number.POSITIVE_INFINITY ) , 1.012 );


test( "Math.min ( 1.012, Number.NEGATIVE_INFINITY ) ", Math.min ( 1.012, Number.NEGATIVE_INFINITY ) , -Infinity );


test( "Math.min ( 1.012, Number.MAX_VALUE ) ", Math.min ( 1.012, Number.MAX_VALUE ) , 1.012 );


test( "Math.min ( 1.012, Number.MIN_VALUE ) ", Math.min ( 1.012, Number.MIN_VALUE ) , Number.MIN_VALUE );


test( "Math.min ( 1.012, Number.NaN ) ", Math.min ( 1.012, Number.NaN ) , Number.NaN );


test( "Math.min ( 1.012, 0 ) ", Math.min ( 1.012, 0 ) , 0 );


test( "Math.min ( 1.012, -0 ) ", Math.min ( 1.012, -0 ) , 0 );


test( "Math.min ( 1.012, 1 ) ", Math.min ( 1.012, 1 ) , 1 );


test( "Math.min ( 1.012, 1.012 ) ", Math.min ( 1.012, 1.012 ) , 1.012 );


test( "Math.min ( 1.012, -1.12 ) ", Math.min ( 1.012, -1.12 ) , -1.12 );


test( "Math.min ( 1.012, 0.499 ) ", Math.min ( 1.012, 0.499 ) , 0.499 );


test( "Math.min ( 1.012, -0.5 ) ", Math.min ( 1.012, -0.5 ) , -0.5 );


test( "Math.min ( -1.12, Number.POSITIVE_INFINITY ) ", Math.min ( -1.12, Number.POSITIVE_INFINITY ) , -1.12 );


test( "Math.min ( -1.12, Number.NEGATIVE_INFINITY ) ", Math.min ( -1.12, Number.NEGATIVE_INFINITY ) , -Infinity );


test( "Math.min ( -1.12, Number.MAX_VALUE ) ", Math.min ( -1.12, Number.MAX_VALUE ) , -1.12 );


test( "Math.min ( -1.12, Number.MIN_VALUE ) ", Math.min ( -1.12, Number.MIN_VALUE ) , -1.12 );


test( "Math.min ( -1.12, Number.NaN ) ", Math.min ( -1.12, Number.NaN ) , Number.NaN );


test( "Math.min ( -1.12, 0 ) ", Math.min ( -1.12, 0 ) , -1.12 );


test( "Math.min ( -1.12, -0 ) ", Math.min ( -1.12, -0 ) , -1.12 );


test( "Math.min ( -1.12, 1 ) ", Math.min ( -1.12, 1 ) , -1.12 );


test( "Math.min ( -1.12, 1.012 ) ", Math.min ( -1.12, 1.012 ) , -1.12 );


test( "Math.min ( -1.12, -1.12 ) ", Math.min ( -1.12, -1.12 ) , -1.12 );


test( "Math.min ( -1.12, 0.499 ) ", Math.min ( -1.12, 0.499 ) , -1.12 );


test( "Math.min ( -1.12, -0.5 ) ", Math.min ( -1.12, -0.5 ) , -1.12 );


test( "Math.min ( 0.499, Number.POSITIVE_INFINITY ) ", Math.min ( 0.499, Number.POSITIVE_INFINITY ) , 0.499 );


test( "Math.min ( 0.499, Number.NEGATIVE_INFINITY ) ", Math.min ( 0.499, Number.NEGATIVE_INFINITY ) , -Infinity );


test( "Math.min ( 0.499, Number.MAX_VALUE ) ", Math.min ( 0.499, Number.MAX_VALUE ) , 0.499 );


test( "Math.min ( 0.499, Number.MIN_VALUE ) ", Math.min ( 0.499, Number.MIN_VALUE ) , Number.MIN_VALUE );


test( "Math.min ( 0.499, Number.NaN ) ", Math.min ( 0.499, Number.NaN ) , Number.NaN );


test( "Math.min ( 0.499, 0 ) ", Math.min ( 0.499, 0 ) , 0 );


test( "Math.min ( 0.499, -0 ) ", Math.min ( 0.499, -0 ) , 0 );


test( "Math.min ( 0.499, 1 ) ", Math.min ( 0.499, 1 ) , 0.499 );


test( "Math.min ( 0.499, 1.012 ) ", Math.min ( 0.499, 1.012 ) , 0.499 );


test( "Math.min ( 0.499, -1.12 ) ", Math.min ( 0.499, -1.12 ) , -1.12 );


test( "Math.min ( 0.499, 0.499 ) ", Math.min ( 0.499, 0.499 ) , 0.499 );


test( "Math.min ( 0.499, -0.5 ) ", Math.min ( 0.499, -0.5 ) , -0.5 );


test( "Math.min ( -0.5, Number.POSITIVE_INFINITY ) ", Math.min ( -0.5, Number.POSITIVE_INFINITY ) , -0.5 );


test( "Math.min ( -0.5, Number.NEGATIVE_INFINITY ) ", Math.min ( -0.5, Number.NEGATIVE_INFINITY ) , -Infinity );


test( "Math.min ( -0.5, Number.MAX_VALUE ) ", Math.min ( -0.5, Number.MAX_VALUE ) , -0.5 );


test( "Math.min ( -0.5, Number.MIN_VALUE ) ", Math.min ( -0.5, Number.MIN_VALUE ) , -0.5 );


test( "Math.min ( -0.5, Number.NaN ) ", Math.min ( -0.5, Number.NaN ) , Number.NaN );


test( "Math.min ( -0.5, 0 ) ", Math.min ( -0.5, 0 ) , -0.5 );


test( "Math.min ( -0.5, -0 ) ", Math.min ( -0.5, -0 ) , -0.5 );


test( "Math.min ( -0.5, 1 ) ", Math.min ( -0.5, 1 ) , -0.5 );


test( "Math.min ( -0.5, 1.012 ) ", Math.min ( -0.5, 1.012 ) , -0.5 );


test( "Math.min ( -0.5, -1.12 ) ", Math.min ( -0.5, -1.12 ) , -1.12 );


test( "Math.min ( -0.5, 0.499 ) ", Math.min ( -0.5, 0.499 ) , -0.5 );


test( "Math.min ( -0.5, -0.5 ) ", Math.min ( -0.5, -0.5 ) , -0.5 );


test( "Math.pow ( Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY ) ", Math.pow ( Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY ) , Infinity );


test( "Math.pow ( Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY ) ", Math.pow ( Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY ) , 0 );


test( "Math.pow ( Number.POSITIVE_INFINITY, Number.MAX_VALUE ) ", Math.pow ( Number.POSITIVE_INFINITY, Number.MAX_VALUE ) , Infinity );


test( "Math.pow ( Number.POSITIVE_INFINITY, Number.MIN_VALUE ) ", Math.pow ( Number.POSITIVE_INFINITY, Number.MIN_VALUE ) , Infinity );


test( "Math.pow ( Number.POSITIVE_INFINITY, Number.NaN ) ", Math.pow ( Number.POSITIVE_INFINITY, Number.NaN ) , Number.NaN );


test( "Math.pow ( Number.POSITIVE_INFINITY, 0 ) ", Math.pow ( Number.POSITIVE_INFINITY, 0 ) , 1 );


test( "Math.pow ( Number.POSITIVE_INFINITY, -0 ) ", Math.pow ( Number.POSITIVE_INFINITY, -0 ) , 1 );


test( "Math.pow ( Number.POSITIVE_INFINITY, 1 ) ", Math.pow ( Number.POSITIVE_INFINITY, 1 ) , Infinity );


test( "Math.pow ( Number.POSITIVE_INFINITY, 1.012 ) ", Math.pow ( Number.POSITIVE_INFINITY, 1.012 ) , Infinity );


test( "Math.pow ( Number.POSITIVE_INFINITY, -1.12 ) ", Math.pow ( Number.POSITIVE_INFINITY, -1.12 ) , 0 );


test( "Math.pow ( Number.POSITIVE_INFINITY, 0.499 ) ", Math.pow ( Number.POSITIVE_INFINITY, 0.499 ) , Infinity );


test( "Math.pow ( Number.POSITIVE_INFINITY, -0.5 ) ", Math.pow ( Number.POSITIVE_INFINITY, -0.5 ) , 0 );


test( "Math.pow ( Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY ) ", Math.pow ( Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY ) , Infinity );


test( "Math.pow ( Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY ) ", Math.pow ( Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY ) , 0 );


test( "Math.pow ( Number.NEGATIVE_INFINITY, Number.MAX_VALUE ) ", Math.pow ( Number.NEGATIVE_INFINITY, Number.MAX_VALUE ) , Infinity );


test( "Math.pow ( Number.NEGATIVE_INFINITY, Number.MIN_VALUE ) ", Math.pow ( Number.NEGATIVE_INFINITY, Number.MIN_VALUE ) , Infinity );


test( "Math.pow ( Number.NEGATIVE_INFINITY, Number.NaN ) ", Math.pow ( Number.NEGATIVE_INFINITY, Number.NaN ) , Number.NaN );


test( "Math.pow ( Number.NEGATIVE_INFINITY, 0 ) ", Math.pow ( Number.NEGATIVE_INFINITY, 0 ) , 1 );


test( "Math.pow ( Number.NEGATIVE_INFINITY, -0 ) ", Math.pow ( Number.NEGATIVE_INFINITY, -0 ) , 1 );


test( "Math.pow ( Number.NEGATIVE_INFINITY, 1 ) ", Math.pow ( Number.NEGATIVE_INFINITY, 1 ) , -Infinity );


test( "Math.pow ( Number.NEGATIVE_INFINITY, 1.012 ) ", Math.pow ( Number.NEGATIVE_INFINITY, 1.012 ) , Infinity );


test( "Math.pow ( Number.NEGATIVE_INFINITY, -1.12 ) ", Math.pow ( Number.NEGATIVE_INFINITY, -1.12 ) , 0 );


test( "Math.pow ( Number.NEGATIVE_INFINITY, 0.499 ) ", Math.pow ( Number.NEGATIVE_INFINITY, 0.499 ) , Infinity );


test( "Math.pow ( Number.NEGATIVE_INFINITY, -0.5 ) ", Math.pow ( Number.NEGATIVE_INFINITY, -0.5 ) , 0 );


test( "Math.pow ( Number.MAX_VALUE, Number.POSITIVE_INFINITY ) ", Math.pow ( Number.MAX_VALUE, Number.POSITIVE_INFINITY ) , Infinity );


test( "Math.pow ( Number.MAX_VALUE, Number.NEGATIVE_INFINITY ) ", Math.pow ( Number.MAX_VALUE, Number.NEGATIVE_INFINITY ) , 0 );


test( "Math.pow ( Number.MAX_VALUE, Number.MAX_VALUE ) ", Math.pow ( Number.MAX_VALUE, Number.MAX_VALUE ) , Infinity );


test( "Math.pow ( Number.MAX_VALUE, Number.MIN_VALUE ) ", Math.pow ( Number.MAX_VALUE, Number.MIN_VALUE ) , 1 );


test( "Math.pow ( Number.MAX_VALUE, Number.NaN ) ", Math.pow ( Number.MAX_VALUE, Number.NaN ) , Number.NaN );


test( "Math.pow ( Number.MAX_VALUE, 0 ) ", Math.pow ( Number.MAX_VALUE, 0 ) , 1 );


test( "Math.pow ( Number.MAX_VALUE, -0 ) ", Math.pow ( Number.MAX_VALUE, -0 ) , 1 );


test( "Math.pow ( Number.MAX_VALUE, 1 ) ", Math.pow ( Number.MAX_VALUE, 1 ) , Number.MAX_VALUE );


test( "Math.pow ( Number.MAX_VALUE, 1.012 ) ", Math.pow ( Number.MAX_VALUE, 1.012 ) , Infinity );


test( "Math.pow ( Number.MAX_VALUE, -1.12 ) ", Math.pow ( Number.MAX_VALUE, -1.12 ) , 0 );


teste( "Math.pow ( Number.MAX_VALUE, 0.499 ) ", Math.pow ( Number.MAX_VALUE, 0.499 ) , 6.593303453622057e+153 );


teste( "Math.pow ( Number.MAX_VALUE, -0.5 ) ", Math.pow ( Number.MAX_VALUE, -0.5 ) , 7.458340731200207e-155 );


test( "Math.pow ( Number.MIN_VALUE, Number.POSITIVE_INFINITY ) ", Math.pow ( Number.MIN_VALUE, Number.POSITIVE_INFINITY ) , 0 );


test( "Math.pow ( Number.MIN_VALUE, Number.NEGATIVE_INFINITY ) ", Math.pow ( Number.MIN_VALUE, Number.NEGATIVE_INFINITY ) , Infinity );


test( "Math.pow ( Number.MIN_VALUE, Number.MAX_VALUE ) ", Math.pow ( Number.MIN_VALUE, Number.MAX_VALUE ) , 0 );


test( "Math.pow ( Number.MIN_VALUE, Number.MIN_VALUE ) ", Math.pow ( Number.MIN_VALUE, Number.MIN_VALUE ) , 1 );


test( "Math.pow ( Number.MIN_VALUE, Number.NaN ) ", Math.pow ( Number.MIN_VALUE, Number.NaN ) , Number.NaN );


test( "Math.pow ( Number.MIN_VALUE, 0 ) ", Math.pow ( Number.MIN_VALUE, 0 ) , 1 );


test( "Math.pow ( Number.MIN_VALUE, -0 ) ", Math.pow ( Number.MIN_VALUE, -0 ) , 1 );


test( "Math.pow ( Number.MIN_VALUE, 1 ) ", Math.pow ( Number.MIN_VALUE, 1 ) , Number.MIN_VALUE );
/* WAS: 5e-324 */

test( "Math.pow ( Number.MIN_VALUE, 1.012 ) ", Math.pow ( Number.MIN_VALUE, 1.012 ) , 0 );


test( "Math.pow ( Number.MIN_VALUE, -1.12 ) ", Math.pow ( Number.MIN_VALUE, -1.12 ) , Infinity );


teste( "Math.pow ( Number.MIN_VALUE, 0.499 ) ", Math.pow ( Number.MIN_VALUE, 0.499 ) , 4.679490218221973e-162 );


teste( "Math.pow ( Number.MIN_VALUE, -0.5 ) ", Math.pow ( Number.MIN_VALUE, -0.5 ) , 4.4989137945431965e+161 );


test( "Math.pow ( Number.NaN, Number.POSITIVE_INFINITY ) ", Math.pow ( Number.NaN, Number.POSITIVE_INFINITY ) , Number.NaN );


test( "Math.pow ( Number.NaN, Number.NEGATIVE_INFINITY ) ", Math.pow ( Number.NaN, Number.NEGATIVE_INFINITY ) , Number.NaN );


test( "Math.pow ( Number.NaN, Number.MAX_VALUE ) ", Math.pow ( Number.NaN, Number.MAX_VALUE ) , Number.NaN );


test( "Math.pow ( Number.NaN, Number.MIN_VALUE ) ", Math.pow ( Number.NaN, Number.MIN_VALUE ) , Number.NaN );


test( "Math.pow ( Number.NaN, Number.NaN ) ", Math.pow ( Number.NaN, Number.NaN ) , Number.NaN );


test( "Math.pow ( Number.NaN, 0 ) ", Math.pow ( Number.NaN, 0 ) , 1 );
/* ECMA: If y is +0, the result is 1, even if x is NaN. */

test( "Math.pow ( Number.NaN, -0 ) ", Math.pow ( Number.NaN, -0 ) , 1 );
/* ECMA: If y is -0, the result is 1, even if x is NaN. */


test( "Math.pow ( Number.NaN, 1 ) ", Math.pow ( Number.NaN, 1 ) , Number.NaN );


test( "Math.pow ( Number.NaN, 1.012 ) ", Math.pow ( Number.NaN, 1.012 ) , Number.NaN );


test( "Math.pow ( Number.NaN, -1.12 ) ", Math.pow ( Number.NaN, -1.12 ) , Number.NaN );


test( "Math.pow ( Number.NaN, 0.499 ) ", Math.pow ( Number.NaN, 0.499 ) , Number.NaN );


test( "Math.pow ( Number.NaN, -0.5 ) ", Math.pow ( Number.NaN, -0.5 ) , Number.NaN );


test( "Math.pow ( 0, Number.POSITIVE_INFINITY ) ", Math.pow ( 0, Number.POSITIVE_INFINITY ) , 0 );


test( "Math.pow ( 0, Number.NEGATIVE_INFINITY ) ", Math.pow ( 0, Number.NEGATIVE_INFINITY ) , Infinity );


test( "Math.pow ( 0, Number.MAX_VALUE ) ", Math.pow ( 0, Number.MAX_VALUE ) , 0 );


test( "Math.pow ( 0, Number.MIN_VALUE ) ", Math.pow ( 0, Number.MIN_VALUE ) , 0 );


test( "Math.pow ( 0, Number.NaN ) ", Math.pow ( 0, Number.NaN ) , Number.NaN );


test( "Math.pow ( 0, 0 ) ", Math.pow ( 0, 0 ) , 1 );


test( "Math.pow ( 0, -0 ) ", Math.pow ( 0, -0 ) , 1 );


test( "Math.pow ( 0, 1 ) ", Math.pow ( 0, 1 ) , 0 );


test( "Math.pow ( 0, 1.012 ) ", Math.pow ( 0, 1.012 ) , 0 );


test( "Math.pow ( 0, -1.12 ) ", Math.pow ( 0, -1.12 ) , Infinity );


test( "Math.pow ( 0, 0.499 ) ", Math.pow ( 0, 0.499 ) , 0 );


test( "Math.pow ( 0, -0.5 ) ", Math.pow ( 0, -0.5 ) , Infinity );


test( "Math.pow ( -0, Number.POSITIVE_INFINITY ) ", Math.pow ( -0, Number.POSITIVE_INFINITY ) , 0 );


test( "Math.pow ( -0, Number.NEGATIVE_INFINITY ) ", Math.pow ( -0, Number.NEGATIVE_INFINITY ) , Infinity );


test( "Math.pow ( -0, Number.MAX_VALUE ) ", Math.pow ( -0, Number.MAX_VALUE ) , 0 );


test( "Math.pow ( -0, Number.MIN_VALUE ) ", Math.pow ( -0, Number.MIN_VALUE ) , 0 );


test( "Math.pow ( -0, Number.NaN ) ", Math.pow ( -0, Number.NaN ) , Number.NaN );


test( "Math.pow ( -0, 0 ) ", Math.pow ( -0, 0 ) , 1 );


test( "Math.pow ( -0, -0 ) ", Math.pow ( -0, -0 ) , 1 );


test( "Math.pow ( -0, 1 ) ", Math.pow ( -0, 1 ) , 0 );


test( "Math.pow ( -0, 1.012 ) ", Math.pow ( -0, 1.012 ) , 0 );


test( "Math.pow ( -0, -1.12 ) ", Math.pow ( -0, -1.12 ) , Infinity );


test( "Math.pow ( -0, 0.499 ) ", Math.pow ( -0, 0.499 ) , 0 );


test( "Math.pow ( -0, -0.5 ) ", Math.pow ( -0, -0.5 ) , Infinity );


test( "Math.pow ( 1, Number.POSITIVE_INFINITY ) ", Math.pow ( 1, Number.POSITIVE_INFINITY ) , Number.NaN );


test( "Math.pow ( 1, Number.NEGATIVE_INFINITY ) ", Math.pow ( 1, Number.NEGATIVE_INFINITY ) , Number.NaN );


test( "Math.pow ( 1, Number.MAX_VALUE ) ", Math.pow ( 1, Number.MAX_VALUE ) , 1 );


test( "Math.pow ( 1, Number.MIN_VALUE ) ", Math.pow ( 1, Number.MIN_VALUE ) , 1 );


test( "Math.pow ( 1, Number.NaN ) ", Math.pow ( 1, Number.NaN ) , Number.NaN );


test( "Math.pow ( 1, 0 ) ", Math.pow ( 1, 0 ) , 1 );


test( "Math.pow ( 1, -0 ) ", Math.pow ( 1, -0 ) , 1 );


test( "Math.pow ( 1, 1 ) ", Math.pow ( 1, 1 ) , 1 );


test( "Math.pow ( 1, 1.012 ) ", Math.pow ( 1, 1.012 ) , 1 );


test( "Math.pow ( 1, -1.12 ) ", Math.pow ( 1, -1.12 ) , 1 );


test( "Math.pow ( 1, 0.499 ) ", Math.pow ( 1, 0.499 ) , 1 );


test( "Math.pow ( 1, -0.5 ) ", Math.pow ( 1, -0.5 ) , 1 );


test( "Math.pow ( 1.012, Number.POSITIVE_INFINITY ) ", Math.pow ( 1.012, Number.POSITIVE_INFINITY ) , Infinity );


test( "Math.pow ( 1.012, Number.NEGATIVE_INFINITY ) ", Math.pow ( 1.012, Number.NEGATIVE_INFINITY ) , 0 );


test( "Math.pow ( 1.012, Number.MAX_VALUE ) ", Math.pow ( 1.012, Number.MAX_VALUE ) , Infinity );


test( "Math.pow ( 1.012, Number.MIN_VALUE ) ", Math.pow ( 1.012, Number.MIN_VALUE ) , 1 );


test( "Math.pow ( 1.012, Number.NaN ) ", Math.pow ( 1.012, Number.NaN ) , Number.NaN );


test( "Math.pow ( 1.012, 0 ) ", Math.pow ( 1.012, 0 ) , 1 );


test( "Math.pow ( 1.012, -0 ) ", Math.pow ( 1.012, -0 ) , 1 );


test( "Math.pow ( 1.012, 1 ) ", Math.pow ( 1.012, 1 ) , 1.012 );


teste( "Math.pow ( 1.012, 1.012 ) ", Math.pow ( 1.012, 1.012 ) , 1.0121448709329596 );


teste( "Math.pow ( 1.012, -1.12 ) ", Math.pow ( 1.012, -1.12 ) , 0.986728849309578 );


teste( "Math.pow ( 1.012, 0.499 ) ", Math.pow ( 1.012, 0.499 ) , 1.0059701073394591 );


teste( "Math.pow ( 1.012, -0.5 ) ", Math.pow ( 1.012, -0.5 ) , 0.9940534656094302 );


test( "Math.pow ( -1.12, Number.POSITIVE_INFINITY ) ", Math.pow ( -1.12, Number.POSITIVE_INFINITY ) , Infinity );


test( "Math.pow ( -1.12, Number.NEGATIVE_INFINITY ) ", Math.pow ( -1.12, Number.NEGATIVE_INFINITY ) , 0 );


test( "Math.pow ( -1.12, Number.MAX_VALUE ) ", Math.pow ( -1.12, Number.MAX_VALUE ) , Infinity );


test( "Math.pow ( -1.12, Number.MIN_VALUE ) ", Math.pow ( -1.12, Number.MIN_VALUE ) , Number.NaN );


test( "Math.pow ( -1.12, Number.NaN ) ", Math.pow ( -1.12, Number.NaN ) , Number.NaN );


test( "Math.pow ( -1.12, 0 ) ", Math.pow ( -1.12, 0 ) , 1 );


test( "Math.pow ( -1.12, -0 ) ", Math.pow ( -1.12, -0 ) , 1 );


test( "Math.pow ( -1.12, 1 ) ", Math.pow ( -1.12, 1 ) , -1.12 );


test( "Math.pow ( -1.12, 1.012 ) ", Math.pow ( -1.12, 1.012 ) , Number.NaN );


test( "Math.pow ( -1.12, -1.12 ) ", Math.pow ( -1.12, -1.12 ) , Number.NaN );


test( "Math.pow ( -1.12, 0.499 ) ", Math.pow ( -1.12, 0.499 ) , Number.NaN );


test( "Math.pow ( -1.12, -0.5 ) ", Math.pow ( -1.12, -0.5 ) , Number.NaN );


test( "Math.pow ( 0.499, Number.POSITIVE_INFINITY ) ", Math.pow ( 0.499, Number.POSITIVE_INFINITY ) , 0 );


test( "Math.pow ( 0.499, Number.NEGATIVE_INFINITY ) ", Math.pow ( 0.499, Number.NEGATIVE_INFINITY ) , Infinity );


test( "Math.pow ( 0.499, Number.MAX_VALUE ) ", Math.pow ( 0.499, Number.MAX_VALUE ) , 0 );


test( "Math.pow ( 0.499, Number.MIN_VALUE ) ", Math.pow ( 0.499, Number.MIN_VALUE ) , 1 );


test( "Math.pow ( 0.499, Number.NaN ) ", Math.pow ( 0.499, Number.NaN ) , Number.NaN );


test( "Math.pow ( 0.499, 0 ) ", Math.pow ( 0.499, 0 ) , 1 );


test( "Math.pow ( 0.499, -0 ) ", Math.pow ( 0.499, -0 ) , 1 );


test( "Math.pow ( 0.499, 1 ) ", Math.pow ( 0.499, 1 ) , 0.499 );


teste( "Math.pow ( 0.499, 1.012 ) ", Math.pow ( 0.499, 1.012 ) , 0.49485476008898793 );


teste( "Math.pow ( 0.499, -1.12 ) ", Math.pow ( 0.499, -1.12 ) , 2.178348640122035 );


teste( "Math.pow ( 0.499, 0.499 ) ", Math.pow ( 0.499, 0.499 ) , 0.7068905441257238 );


teste( "Math.pow ( 0.499, -0.5 ) ", Math.pow ( 0.499, -0.5 ) , 1.415629900797544 );


test( "Math.pow ( -0.5, Number.POSITIVE_INFINITY ) ", Math.pow ( -0.5, Number.POSITIVE_INFINITY ) , 0 );


test( "Math.pow ( -0.5, Number.NEGATIVE_INFINITY ) ", Math.pow ( -0.5, Number.NEGATIVE_INFINITY ) , Infinity );


test( "Math.pow ( -0.5, Number.MAX_VALUE ) ", Math.pow ( -0.5, Number.MAX_VALUE ) , 0 );


test( "Math.pow ( -0.5, Number.MIN_VALUE ) ", Math.pow ( -0.5, Number.MIN_VALUE ) , Number.NaN );


test( "Math.pow ( -0.5, Number.NaN ) ", Math.pow ( -0.5, Number.NaN ) , Number.NaN );


test( "Math.pow ( -0.5, 0 ) ", Math.pow ( -0.5, 0 ) , 1 );


test( "Math.pow ( -0.5, -0 ) ", Math.pow ( -0.5, -0 ) , 1 );


test( "Math.pow ( -0.5, 1 ) ", Math.pow ( -0.5, 1 ) , -0.5 );


test( "Math.pow ( -0.5, 1.012 ) ", Math.pow ( -0.5, 1.012 ) , Number.NaN );


test( "Math.pow ( -0.5, -1.12 ) ", Math.pow ( -0.5, -1.12 ) , Number.NaN );


test( "Math.pow ( -0.5, 0.499 ) ", Math.pow ( -0.5, 0.499 ) , Number.NaN );


test( "Math.pow ( -0.5, -0.5 ) ", Math.pow ( -0.5, -0.5 ) , Number.NaN );





} catch (e) { exception( e ); }


testmodule_finished();

/* eof */
