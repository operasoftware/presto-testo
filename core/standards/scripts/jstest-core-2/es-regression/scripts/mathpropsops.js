/* Tests for Opera's handling of  * Math object | Properties and assignment operators
 * 2001-10-18 hrms
 * 2002-04-03 lth
 *
 * Comments: this test uses these properties of the Math and Number constructors:
 *
 *   Math.E, Math.LN2, Math.LN10, Math.LOG2E, Math.LOG10E, Math.PI, Math.SQRT1_2, Math.SQRT2,
 *   Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.MAX_VALUE, Number.MIN_VALUE, Number.NaN
 *
 * with these operators:
 *
 *   +, -, *, /, %, +=, -=, *=, /=, %=
 *
 * and these 'input values':
 *
 *   0 (zero), 12345 (a positive integer), -12345 (a negative integer), 0x45ae (hex)
 *
 *
 * In most cases, the expected result value is based on the result the
 * same script produces in MSIE 5.0.  When the result in Opera was
 * different, I have tried to find the relevant documentation. For
 * some operations with Number.MIN_VALUE I could not determine what
 * was correct. It seems like IE's MIN_VALUE is a smaller number than
 * Opera's, and IE's value seems closer to the ECMA spec. IE's values
 * are stored in comments on the line following each command. They are
 * labelled WAS:
 *
 * The errors produced by the use of the % operator are verified as errors according to ECMA 262:
 *
 * If the dividend is finite and the divisor is an infinity, the result equals the dividend.
 * If the dividend is a zero and the divisor is finite, the result is the same as the dividend.
 *
 */

var cvs = "$Id: mathpropsops.js 4838 2006-01-18 05:59:01Z hallvord $";

testmodule( "Math object", cvs );

try {

testcase( "Maths properties and assignment operators..." );

n=0;
test( "n=0;<BR>n = 0+Math.E", n = 0+Math.E, 2.718281828459045 );


n=12345;
test( "n=12345;<BR>n = 12345+Math.E", n = 12345+Math.E, 12347.718281828458 );


n=-12345;
test( "n=-12345;<BR>n = -12345+Math.E", n = -12345+Math.E, -12342.281718171541 );


n=0x45ae;
test( "n=0x45ae;<BR>n = 17838+Math.E", n = 17838+Math.E, 17840.71828182846 );


n=0;
test( "n=0;<BR>n = 0-Math.E", n = 0-Math.E, -2.718281828459045 );


n=12345;
test( "n=12345;<BR>n = 12345-Math.E", n = 12345-Math.E, 12342.281718171541 );


n=-12345;
test( "n=-12345;<BR>n = -12345-Math.E", n = -12345-Math.E, -12347.718281828458 );


n=0x45ae;
test( "n=0x45ae;<BR>n = 17838-Math.E", n = 17838-Math.E, 17835.28171817154 );


n=0;
test( "n=0;<BR>n = 0*Math.E", n = 0*Math.E, 0 );


n=12345;
test( "n=12345;<BR>n = 12345*Math.E", n = 12345*Math.E, 33557.189172326914 );


n=-12345;
test( "n=-12345;<BR>n = -12345*Math.E", n = -12345*Math.E, -33557.189172326914 );


n=0x45ae;
test( "n=0x45ae;<BR>n = 17838*Math.E", n = 17838*Math.E, 48488.71125605245 );


n=0;
test( "n=0;<BR>n = 0/Math.E", n = 0/Math.E, 0 );


n=12345;
test( "n=12345;<BR>n = 12345/Math.E", n = 12345/Math.E, 4541.471701261456 );


n=-12345;
test( "n=-12345;<BR>n = -12345/Math.E", n = -12345/Math.E, -4541.471701261456 );


n=0x45ae;
test( "n=0x45ae;<BR>n = 17838/Math.E", n = 17838/Math.E, 6562.233471616189 );


n=0;
test( "n=0;<BR>n = 0%Math.E", n = 0%Math.E, 0 );


n=12345;
test( "n=12345;<BR>n = 12345%Math.E", n = 12345%Math.E, 1.2822169674762427 );


n=-12345;
test( "n=-12345;<BR>n = -12345%Math.E", n = -12345%Math.E, -1.2822169674762427 );


n=0x45ae;
test( "n=0x45ae;<BR>n = 17838%Math.E", n = 17838%Math.E, 0.6346416517461142 );


n=0;
test( "n=0;<BR>n +=Math.E", n +=Math.E, 2.718281828459045 );


n=12345;
test( "n=12345;<BR>n +=Math.E", n +=Math.E, 12347.718281828458 );


n=-12345;
test( "n=-12345;<BR>n +=Math.E", n +=Math.E, -12342.281718171541 );


n=0x45ae;
test( "n=0x45ae;<BR>n +=Math.E", n +=Math.E, 17840.71828182846 );


n=0;
test( "n=0;<BR>n -=Math.E", n -=Math.E, -2.718281828459045 );


n=12345;
test( "n=12345;<BR>n -=Math.E", n -=Math.E, 12342.281718171541 );


n=-12345;
test( "n=-12345;<BR>n -=Math.E", n -=Math.E, -12347.718281828458 );


n=0x45ae;
test( "n=0x45ae;<BR>n -=Math.E", n -=Math.E, 17835.28171817154 );


n=0;
test( "n=0;<BR>n *=Math.E", n *=Math.E, 0 );


n=12345;
test( "n=12345;<BR>n *=Math.E", n *=Math.E, 33557.189172326914 );


n=-12345;
test( "n=-12345;<BR>n *=Math.E", n *=Math.E, -33557.189172326914 );


n=0x45ae;
test( "n=0x45ae;<BR>n *=Math.E", n *=Math.E, 48488.71125605245 );


n=0;
test( "n=0;<BR>n /=Math.E", n /=Math.E, 0 );


n=12345;
test( "n=12345;<BR>n /=Math.E", n /=Math.E, 4541.471701261456 );


n=-12345;
test( "n=-12345;<BR>n /=Math.E", n /=Math.E, -4541.471701261456 );


n=0x45ae;
test( "n=0x45ae;<BR>n /=Math.E", n /=Math.E, 6562.233471616189 );


n=0;
test( "n=0;<BR>n %=Math.E", n %=Math.E, 0 );


n=12345;
test( "n=12345;<BR>n %=Math.E", n %=Math.E, 1.2822169674762427 );


n=-12345;
test( "n=-12345;<BR>n %=Math.E", n %=Math.E, -1.2822169674762427 );


n=0x45ae;
test( "n=0x45ae;<BR>n %=Math.E", n %=Math.E, 0.6346416517461142 );


n=0;
test( "n=0;<BR>n = 0+Math.LN2", n = 0+Math.LN2, 0.6931471805599453 );


n=12345;
test( "n=12345;<BR>n = 12345+Math.LN2", n = 12345+Math.LN2, 12345.69314718056 );


n=-12345;
test( "n=-12345;<BR>n = -12345+Math.LN2", n = -12345+Math.LN2, -12344.30685281944 );


n=0x45ae;
test( "n=0x45ae;<BR>n = 17838+Math.LN2", n = 17838+Math.LN2, 17838.69314718056 );


n=0;
test( "n=0;<BR>n = 0-Math.LN2", n = 0-Math.LN2, -0.6931471805599453 );


n=12345;
test( "n=12345;<BR>n = 12345-Math.LN2", n = 12345-Math.LN2, 12344.30685281944 );


n=-12345;
test( "n=-12345;<BR>n = -12345-Math.LN2", n = -12345-Math.LN2, -12345.69314718056 );


n=0x45ae;
test( "n=0x45ae;<BR>n = 17838-Math.LN2", n = 17838-Math.LN2, 17837.30685281944 );


n=0;
test( "n=0;<BR>n = 0*Math.LN2", n = 0*Math.LN2, 0 );


n=12345;
test( "n=12345;<BR>n = 12345*Math.LN2", n = 12345*Math.LN2, 8556.901944012524 );


n=-12345;
test( "n=-12345;<BR>n = -12345*Math.LN2", n = -12345*Math.LN2, -8556.901944012524 );


n=0x45ae;
test( "n=0x45ae;<BR>n = 17838*Math.LN2", n = 17838*Math.LN2, 12364.359406828303 );


n=0;
test( "n=0;<BR>n = 0/Math.LN2", n = 0/Math.LN2, 0 );


n=12345;
test( "n=12345;<BR>n = 12345/Math.LN2", n = 12345/Math.LN2, 17810.070279774252 );


n=-12345;
test( "n=-12345;<BR>n = -12345/Math.LN2", n = -12345/Math.LN2, -17810.070279774252 );


n=0x45ae;
test( "n=0x45ae;<BR>n = 17838/Math.LN2", n = 17838/Math.LN2, 25734.79413937733 );


n=0;
test( "n=0;<BR>n = 0%Math.LN2", n = 0%Math.LN2, 0 );


n=12345;
test( "n=12345;<BR>n = 12345%Math.LN2", n = 12345%Math.LN2, 0.0487142273744523 );


n=-12345;
test( "n=-12345;<BR>n = -12345%Math.LN2", n = -12345%Math.LN2, -0.0487142273744523 );


n=0x45ae;
test( "n=0x45ae;<BR>n = 17838%Math.LN2", n = 17838%Math.LN2, 0.5504554703680042 );


n=0;
test( "n=0;<BR>n +=Math.LN2", n +=Math.LN2, 0.6931471805599453 );


n=12345;
test( "n=12345;<BR>n +=Math.LN2", n +=Math.LN2, 12345.69314718056 );


n=-12345;
test( "n=-12345;<BR>n +=Math.LN2", n +=Math.LN2, -12344.30685281944 );


n=0x45ae;
test( "n=0x45ae;<BR>n +=Math.LN2", n +=Math.LN2, 17838.69314718056 );


n=0;
test( "n=0;<BR>n -=Math.LN2", n -=Math.LN2, -0.6931471805599453 );


n=12345;
test( "n=12345;<BR>n -=Math.LN2", n -=Math.LN2, 12344.30685281944 );


n=-12345;
test( "n=-12345;<BR>n -=Math.LN2", n -=Math.LN2, -12345.69314718056 );


n=0x45ae;
test( "n=0x45ae;<BR>n -=Math.LN2", n -=Math.LN2, 17837.30685281944 );


n=0;
test( "n=0;<BR>n *=Math.LN2", n *=Math.LN2, 0 );


n=12345;
test( "n=12345;<BR>n *=Math.LN2", n *=Math.LN2, 8556.901944012524 );


n=-12345;
test( "n=-12345;<BR>n *=Math.LN2", n *=Math.LN2, -8556.901944012524 );


n=0x45ae;
test( "n=0x45ae;<BR>n *=Math.LN2", n *=Math.LN2, 12364.359406828303 );


n=0;
test( "n=0;<BR>n /=Math.LN2", n /=Math.LN2, 0 );


n=12345;
test( "n=12345;<BR>n /=Math.LN2", n /=Math.LN2, 17810.070279774252 );


n=-12345;
test( "n=-12345;<BR>n /=Math.LN2", n /=Math.LN2, -17810.070279774252 );


n=0x45ae;
test( "n=0x45ae;<BR>n /=Math.LN2", n /=Math.LN2, 25734.79413937733 );


n=0;
test( "n=0;<BR>n %=Math.LN2", n %=Math.LN2, 0 );


n=12345;
test( "n=12345;<BR>n %=Math.LN2", n %=Math.LN2, 0.0487142273744523 );


n=-12345;
test( "n=-12345;<BR>n %=Math.LN2", n %=Math.LN2, -0.0487142273744523 );


n=0x45ae;
test( "n=0x45ae;<BR>n %=Math.LN2", n %=Math.LN2, 0.5504554703680042 );


n=0;
test( "n=0;<BR>n = 0+Math.LN10", n = 0+Math.LN10, 2.302585092994046 );


n=12345;
test( "n=12345;<BR>n = 12345+Math.LN10", n = 12345+Math.LN10, 12347.302585092993 );


n=-12345;
test( "n=-12345;<BR>n = -12345+Math.LN10", n = -12345+Math.LN10, -12342.697414907006 );


n=0x45ae;
test( "n=0x45ae;<BR>n = 17838+Math.LN10", n = 17838+Math.LN10, 17840.302585092995 );


n=0;
test( "n=0;<BR>n = 0-Math.LN10", n = 0-Math.LN10, -2.302585092994046 );


n=12345;
test( "n=12345;<BR>n = 12345-Math.LN10", n = 12345-Math.LN10, 12342.697414907006 );


n=-12345;
test( "n=-12345;<BR>n = -12345-Math.LN10", n = -12345-Math.LN10, -12347.302585092993 );


n=0x45ae;
test( "n=0x45ae;<BR>n = 17838-Math.LN10", n = 17838-Math.LN10, 17835.697414907004 );


n=0;
test( "n=0;<BR>n = 0*Math.LN10", n = 0*Math.LN10, 0 );


n=12345;
test( "n=12345;<BR>n = 12345*Math.LN10", n = 12345*Math.LN10, 28425.4129730115 );


n=-12345;
test( "n=-12345;<BR>n = -12345*Math.LN10", n = -12345*Math.LN10, -28425.4129730115 );


n=0x45ae;
test( "n=0x45ae;<BR>n = 17838*Math.LN10", n = 17838*Math.LN10, 41073.51288882779 );


n=0;
test( "n=0;<BR>n = 0/Math.LN10", n = 0/Math.LN10, 0 );


n=12345;
test( "n=12345;<BR>n = 12345/Math.LN10", n = 12345/Math.LN10, 5361.365379095643 );


n=-12345;
test( "n=-12345;<BR>n = -12345/Math.LN10", n = -12345/Math.LN10, -5361.365379095643 );


n=0x45ae;
test( "n=0x45ae;<BR>n = 17838/Math.LN10", n = 17838/Math.LN10, 7746.944968190205 );


n=0;
test( "n=0;<BR>n = 0%Math.LN10", n = 0%Math.LN10, 0 );


n=12345;
test( "n=12345;<BR>n = 12345%Math.LN10", n = 12345%Math.LN10, 0.8413164589199242 );


n=-12345;
test( "n=-12345;<BR>n = -12345%Math.LN10", n = -12345%Math.LN10, -0.8413164589199242 );


n=0x45ae;
test( "n=0x45ae;<BR>n = 17838%Math.LN10", n = 17838%Math.LN10, 2.17586966812045 );


n=0;
test( "n=0;<BR>n +=Math.LN10", n +=Math.LN10, 2.302585092994046 );


n=12345;
test( "n=12345;<BR>n +=Math.LN10", n +=Math.LN10, 12347.302585092993 );


n=-12345;
test( "n=-12345;<BR>n +=Math.LN10", n +=Math.LN10, -12342.697414907006 );


n=0x45ae;
test( "n=0x45ae;<BR>n +=Math.LN10", n +=Math.LN10, 17840.302585092995 );


n=0;
test( "n=0;<BR>n -=Math.LN10", n -=Math.LN10, -2.302585092994046 );


n=12345;
test( "n=12345;<BR>n -=Math.LN10", n -=Math.LN10, 12342.697414907006 );


n=-12345;
test( "n=-12345;<BR>n -=Math.LN10", n -=Math.LN10, -12347.302585092993 );


n=0x45ae;
test( "n=0x45ae;<BR>n -=Math.LN10", n -=Math.LN10, 17835.697414907004 );


n=0;
test( "n=0;<BR>n *=Math.LN10", n *=Math.LN10, 0 );


n=12345;
test( "n=12345;<BR>n *=Math.LN10", n *=Math.LN10, 28425.4129730115 );


n=-12345;
test( "n=-12345;<BR>n *=Math.LN10", n *=Math.LN10, -28425.4129730115 );


n=0x45ae;
test( "n=0x45ae;<BR>n *=Math.LN10", n *=Math.LN10, 41073.51288882779 );


n=0;
test( "n=0;<BR>n /=Math.LN10", n /=Math.LN10, 0 );


n=12345;
test( "n=12345;<BR>n /=Math.LN10", n /=Math.LN10, 5361.365379095643 );


n=-12345;
test( "n=-12345;<BR>n /=Math.LN10", n /=Math.LN10, -5361.365379095643 );


n=0x45ae;
test( "n=0x45ae;<BR>n /=Math.LN10", n /=Math.LN10, 7746.944968190205 );


n=0;
test( "n=0;<BR>n %=Math.LN10", n %=Math.LN10, 0 );


n=12345;
test( "n=12345;<BR>n %=Math.LN10", n %=Math.LN10, 0.8413164589199242 );


n=-12345;
test( "n=-12345;<BR>n %=Math.LN10", n %=Math.LN10, -0.8413164589199242 );


n=0x45ae;
test( "n=0x45ae;<BR>n %=Math.LN10", n %=Math.LN10, 2.17586966812045 );


n=0;
test( "n=0;<BR>n = 0+Math.LOG2E", n = 0+Math.LOG2E, 1.4426950408889633 );


n=12345;
test( "n=12345;<BR>n = 12345+Math.LOG2E", n = 12345+Math.LOG2E, 12346.442695040888 );


n=-12345;
test( "n=-12345;<BR>n = -12345+Math.LOG2E", n = -12345+Math.LOG2E, -12343.557304959111 );


n=0x45ae;
test( "n=0x45ae;<BR>n = 17838+Math.LOG2E", n = 17838+Math.LOG2E, 17839.44269504089 );


n=0;
test( "n=0;<BR>n = 0-Math.LOG2E", n = 0-Math.LOG2E, -1.4426950408889633 );


n=12345;
test( "n=12345;<BR>n = 12345-Math.LOG2E", n = 12345-Math.LOG2E, 12343.557304959111 );


n=-12345;
test( "n=-12345;<BR>n = -12345-Math.LOG2E", n = -12345-Math.LOG2E, -12346.442695040888 );


n=0x45ae;
test( "n=0x45ae;<BR>n = 17838-Math.LOG2E", n = 17838-Math.LOG2E, 17836.55730495911 );


n=0;
test( "n=0;<BR>n = 0*Math.LOG2E", n = 0*Math.LOG2E, 0 );


n=12345;
test( "n=12345;<BR>n = 12345*Math.LOG2E", n = 12345*Math.LOG2E, 17810.070279774252 );


n=-12345;
test( "n=-12345;<BR>n = -12345*Math.LOG2E", n = -12345*Math.LOG2E, -17810.070279774252 );


n=0x45ae;
test( "n=0x45ae;<BR>n = 17838*Math.LOG2E", n = 17838*Math.LOG2E, 25734.79413937733 );


n=0;
test( "n=0;<BR>n = 0/Math.LOG2E", n = 0/Math.LOG2E, 0 );


n=12345;
test( "n=12345;<BR>n = 12345/Math.LOG2E", n = 12345/Math.LOG2E, 8556.901944012524 );


n=-12345;
test( "n=-12345;<BR>n = -12345/Math.LOG2E", n = -12345/Math.LOG2E, -8556.901944012524 );


n=0x45ae;
test( "n=0x45ae;<BR>n = 17838/Math.LOG2E", n = 17838/Math.LOG2E, 12364.359406828305 );


n=0;
test( "n=0;<BR>n = 0%Math.LOG2E", n = 0%Math.LOG2E, 0 );


n=12345;
test( "n=12345;<BR>n = 12345%Math.LOG2E", n = 12345%Math.LOG2E, 1.3012301540292607 );


n=-12345;
test( "n=-12345;<BR>n = -12345%Math.LOG2E", n = -12345%Math.LOG2E, -1.3012301540292607 );


n=0x45ae;
test( "n=0x45ae;<BR>n = 17838%Math.LOG2E", n = 17838%Math.LOG2E, 0.5185144488566831 );


n=0;
test( "n=0;<BR>n +=Math.LOG2E", n +=Math.LOG2E, 1.4426950408889633 );


n=12345;
test( "n=12345;<BR>n +=Math.LOG2E", n +=Math.LOG2E, 12346.442695040888 );


n=-12345;
test( "n=-12345;<BR>n +=Math.LOG2E", n +=Math.LOG2E, -12343.557304959111 );


n=0x45ae;
test( "n=0x45ae;<BR>n +=Math.LOG2E", n +=Math.LOG2E, 17839.44269504089 );


n=0;
test( "n=0;<BR>n -=Math.LOG2E", n -=Math.LOG2E, -1.4426950408889633 );


n=12345;
test( "n=12345;<BR>n -=Math.LOG2E", n -=Math.LOG2E, 12343.557304959111 );


n=-12345;
test( "n=-12345;<BR>n -=Math.LOG2E", n -=Math.LOG2E, -12346.442695040888 );


n=0x45ae;
test( "n=0x45ae;<BR>n -=Math.LOG2E", n -=Math.LOG2E, 17836.55730495911 );


n=0;
test( "n=0;<BR>n *=Math.LOG2E", n *=Math.LOG2E, 0 );


n=12345;
test( "n=12345;<BR>n *=Math.LOG2E", n *=Math.LOG2E, 17810.070279774252 );


n=-12345;
test( "n=-12345;<BR>n *=Math.LOG2E", n *=Math.LOG2E, -17810.070279774252 );


n=0x45ae;
test( "n=0x45ae;<BR>n *=Math.LOG2E", n *=Math.LOG2E, 25734.79413937733 );


n=0;
test( "n=0;<BR>n /=Math.LOG2E", n /=Math.LOG2E, 0 );


n=12345;
test( "n=12345;<BR>n /=Math.LOG2E", n /=Math.LOG2E, 8556.901944012524 );


n=-12345;
test( "n=-12345;<BR>n /=Math.LOG2E", n /=Math.LOG2E, -8556.901944012524 );


n=0x45ae;
test( "n=0x45ae;<BR>n /=Math.LOG2E", n /=Math.LOG2E, 12364.359406828305 );


n=0;
test( "n=0;<BR>n %=Math.LOG2E", n %=Math.LOG2E, 0 );


n=12345;
test( "n=12345;<BR>n %=Math.LOG2E", n %=Math.LOG2E, 1.3012301540292607 );


n=-12345;
test( "n=-12345;<BR>n %=Math.LOG2E", n %=Math.LOG2E, -1.3012301540292607 );


n=0x45ae;
test( "n=0x45ae;<BR>n %=Math.LOG2E", n %=Math.LOG2E, 0.5185144488566831 );


n=0;
test( "n=0;<BR>n = 0+Math.LOG10E", n = 0+Math.LOG10E, 0.4342944819032518 );


n=12345;
test( "n=12345;<BR>n = 12345+Math.LOG10E", n = 12345+Math.LOG10E, 12345.434294481903 );


n=-12345;
test( "n=-12345;<BR>n = -12345+Math.LOG10E", n = -12345+Math.LOG10E, -12344.565705518096 );


n=0x45ae;
test( "n=0x45ae;<BR>n = 17838+Math.LOG10E", n = 17838+Math.LOG10E, 17838.434294481903 );


n=0;
test( "n=0;<BR>n = 0-Math.LOG10E", n = 0-Math.LOG10E, -0.4342944819032518 );


n=12345;
test( "n=12345;<BR>n = 12345-Math.LOG10E", n = 12345-Math.LOG10E, 12344.565705518096 );


n=-12345;
test( "n=-12345;<BR>n = -12345-Math.LOG10E", n = -12345-Math.LOG10E, -12345.434294481903 );


n=0x45ae;
test( "n=0x45ae;<BR>n = 17838-Math.LOG10E", n = 17838-Math.LOG10E, 17837.565705518096 );


n=0;
test( "n=0;<BR>n = 0*Math.LOG10E", n = 0*Math.LOG10E, 0 );


n=12345;
test( "n=12345;<BR>n = 12345*Math.LOG10E", n = 12345*Math.LOG10E, 5361.365379095644 );


n=-12345;
test( "n=-12345;<BR>n = -12345*Math.LOG10E", n = -12345*Math.LOG10E, -5361.365379095644 );


n=0x45ae;
test( "n=0x45ae;<BR>n = 17838*Math.LOG10E", n = 17838*Math.LOG10E, 7746.944968190206 );


n=0;
test( "n=0;<BR>n = 0/Math.LOG10E", n = 0/Math.LOG10E, 0 );


n=12345;
test( "n=12345;<BR>n = 12345/Math.LOG10E", n = 12345/Math.LOG10E, 28425.412973011494 );


n=-12345;
test( "n=-12345;<BR>n = -12345/Math.LOG10E", n = -12345/Math.LOG10E, -28425.412973011494 );


n=0x45ae;
test( "n=0x45ae;<BR>n = 17838/Math.LOG10E", n = 17838/Math.LOG10E, 41073.51288882779 );


n=0;
test( "n=0;<BR>n = 0%Math.LOG10E", n = 0%Math.LOG10E, 0 );


n=12345;
test( "n=12345;<BR>n = 12345%Math.LOG10E", n = 12345%Math.LOG10E, 0.17935190006711121 );


n=-12345;
test( "n=-12345;<BR>n = -12345%Math.LOG10E", n = -12345%Math.LOG10E, -0.17935190006711121 );


n=0x45ae;
test( "n=0x45ae;<BR>n = 17838%Math.LOG10E", n = 17838%Math.LOG10E, 0.222744787738134 );


n=0;
test( "n=0;<BR>n +=Math.LOG10E", n +=Math.LOG10E, 0.4342944819032518 );


n=12345;
test( "n=12345;<BR>n +=Math.LOG10E", n +=Math.LOG10E, 12345.434294481903 );


n=-12345;
test( "n=-12345;<BR>n +=Math.LOG10E", n +=Math.LOG10E, -12344.565705518096 );


n=0x45ae;
test( "n=0x45ae;<BR>n +=Math.LOG10E", n +=Math.LOG10E, 17838.434294481903 );


n=0;
test( "n=0;<BR>n -=Math.LOG10E", n -=Math.LOG10E, -0.4342944819032518 );


n=12345;
test( "n=12345;<BR>n -=Math.LOG10E", n -=Math.LOG10E, 12344.565705518096 );


n=-12345;
test( "n=-12345;<BR>n -=Math.LOG10E", n -=Math.LOG10E, -12345.434294481903 );


n=0x45ae;
test( "n=0x45ae;<BR>n -=Math.LOG10E", n -=Math.LOG10E, 17837.565705518096 );


n=0;
test( "n=0;<BR>n *=Math.LOG10E", n *=Math.LOG10E, 0 );


n=12345;
test( "n=12345;<BR>n *=Math.LOG10E", n *=Math.LOG10E, 5361.365379095644 );


n=-12345;
test( "n=-12345;<BR>n *=Math.LOG10E", n *=Math.LOG10E, -5361.365379095644 );


n=0x45ae;
test( "n=0x45ae;<BR>n *=Math.LOG10E", n *=Math.LOG10E, 7746.944968190206 );


n=0;
test( "n=0;<BR>n /=Math.LOG10E", n /=Math.LOG10E, 0 );


n=12345;
test( "n=12345;<BR>n /=Math.LOG10E", n /=Math.LOG10E, 28425.412973011494 );


n=-12345;
test( "n=-12345;<BR>n /=Math.LOG10E", n /=Math.LOG10E, -28425.412973011494 );


n=0x45ae;
test( "n=0x45ae;<BR>n /=Math.LOG10E", n /=Math.LOG10E, 41073.51288882779 );


n=0;
test( "n=0;<BR>n %=Math.LOG10E", n %=Math.LOG10E, 0 );


n=12345;
test( "n=12345;<BR>n %=Math.LOG10E", n %=Math.LOG10E, 0.17935190006711121 );


n=-12345;
test( "n=-12345;<BR>n %=Math.LOG10E", n %=Math.LOG10E, -0.17935190006711121 );


n=0x45ae;
test( "n=0x45ae;<BR>n %=Math.LOG10E", n %=Math.LOG10E, 0.222744787738134 );


n=0;
test( "n=0;<BR>n = 0+Math.PI", n = 0+Math.PI, 3.141592653589793 );


n=12345;
test( "n=12345;<BR>n = 12345+Math.PI", n = 12345+Math.PI, 12348.14159265359 );


n=-12345;
test( "n=-12345;<BR>n = -12345+Math.PI", n = -12345+Math.PI, -12341.85840734641 );


n=0x45ae;
test( "n=0x45ae;<BR>n = 17838+Math.PI", n = 17838+Math.PI, 17841.14159265359 );


n=0;
test( "n=0;<BR>n = 0-Math.PI", n = 0-Math.PI, -3.141592653589793 );


n=12345;
test( "n=12345;<BR>n = 12345-Math.PI", n = 12345-Math.PI, 12341.85840734641 );


n=-12345;
test( "n=-12345;<BR>n = -12345-Math.PI", n = -12345-Math.PI, -12348.14159265359 );


n=0x45ae;
test( "n=0x45ae;<BR>n = 17838-Math.PI", n = 17838-Math.PI, 17834.85840734641 );


n=0;
test( "n=0;<BR>n = 0*Math.PI", n = 0*Math.PI, 0 );


n=12345;
test( "n=12345;<BR>n = 12345*Math.PI", n = 12345*Math.PI, 38782.961308565995 );


n=-12345;
test( "n=-12345;<BR>n = -12345*Math.PI", n = -12345*Math.PI, -38782.961308565995 );


n=0x45ae;
test( "n=0x45ae;<BR>n = 17838*Math.PI", n = 17838*Math.PI, 56039.729754734726 );


n=0;
test( "n=0;<BR>n = 0/Math.PI", n = 0/Math.PI, 0 );


n=12345;
test( "n=12345;<BR>n = 12345/Math.PI", n = 12345/Math.PI, 3929.535544938896 );


n=-12345;
test( "n=-12345;<BR>n = -12345/Math.PI", n = -12345/Math.PI, -3929.535544938896 );


n=0x45ae;
test( "n=0x45ae;<BR>n = 17838/Math.PI", n = 17838/Math.PI, 5678.011749746458 );


n=0;
test( "n=0;<BR>n = 0%Math.PI", n = 0%Math.PI, 0 );


n=12345;
test( "n=12345;<BR>n = 12345%Math.PI", n = 12345%Math.PI, 1.6824640457028472 );


n=-12345;
test( "n=-12345;<BR>n = -12345%Math.PI", n = -12345%Math.PI, -1.6824640457028472 );


n=0x45ae;
test( "n=0x45ae;<BR>n = 17838%Math.PI", n = 17838%Math.PI, 0.036912917154687364 );


n=0;
test( "n=0;<BR>n +=Math.PI", n +=Math.PI, 3.141592653589793 );


n=12345;
test( "n=12345;<BR>n +=Math.PI", n +=Math.PI, 12348.14159265359 );


n=-12345;
test( "n=-12345;<BR>n +=Math.PI", n +=Math.PI, -12341.85840734641 );


n=0x45ae;
test( "n=0x45ae;<BR>n +=Math.PI", n +=Math.PI, 17841.14159265359 );


n=0;
test( "n=0;<BR>n -=Math.PI", n -=Math.PI, -3.141592653589793 );


n=12345;
test( "n=12345;<BR>n -=Math.PI", n -=Math.PI, 12341.85840734641 );


n=-12345;
test( "n=-12345;<BR>n -=Math.PI", n -=Math.PI, -12348.14159265359 );


n=0x45ae;
test( "n=0x45ae;<BR>n -=Math.PI", n -=Math.PI, 17834.85840734641 );


n=0;
test( "n=0;<BR>n *=Math.PI", n *=Math.PI, 0 );


n=12345;
test( "n=12345;<BR>n *=Math.PI", n *=Math.PI, 38782.961308565995 );


n=-12345;
test( "n=-12345;<BR>n *=Math.PI", n *=Math.PI, -38782.961308565995 );


n=0x45ae;
test( "n=0x45ae;<BR>n *=Math.PI", n *=Math.PI, 56039.729754734726 );


n=0;
test( "n=0;<BR>n /=Math.PI", n /=Math.PI, 0 );


n=12345;
test( "n=12345;<BR>n /=Math.PI", n /=Math.PI, 3929.535544938896 );


n=-12345;
test( "n=-12345;<BR>n /=Math.PI", n /=Math.PI, -3929.535544938896 );


n=0x45ae;
test( "n=0x45ae;<BR>n /=Math.PI", n /=Math.PI, 5678.011749746458 );


n=0;
test( "n=0;<BR>n %=Math.PI", n %=Math.PI, 0 );


n=12345;
test( "n=12345;<BR>n %=Math.PI", n %=Math.PI, 1.6824640457028472 );


n=-12345;
test( "n=-12345;<BR>n %=Math.PI", n %=Math.PI, -1.6824640457028472 );


n=0x45ae;
test( "n=0x45ae;<BR>n %=Math.PI", n %=Math.PI, 0.036912917154687364 );


n=0;
test( "n=0;<BR>n = 0+Math.SQRT1_2", n = 0+Math.SQRT1_2, 0.7071067811865476 );


n=12345;
test( "n=12345;<BR>n = 12345+Math.SQRT1_2", n = 12345+Math.SQRT1_2, 12345.707106781186 );


n=-12345;
test( "n=-12345;<BR>n = -12345+Math.SQRT1_2", n = -12345+Math.SQRT1_2, -12344.292893218813 );


n=0x45ae;
test( "n=0x45ae;<BR>n = 17838+Math.SQRT1_2", n = 17838+Math.SQRT1_2, 17838.707106781185 );


n=0;
test( "n=0;<BR>n = 0-Math.SQRT1_2", n = 0-Math.SQRT1_2, -0.7071067811865476 );


n=12345;
test( "n=12345;<BR>n = 12345-Math.SQRT1_2", n = 12345-Math.SQRT1_2, 12344.292893218813 );


n=-12345;
test( "n=-12345;<BR>n = -12345-Math.SQRT1_2", n = -12345-Math.SQRT1_2, -12345.707106781186 );


n=0x45ae;
test( "n=0x45ae;<BR>n = 17838-Math.SQRT1_2", n = 17838-Math.SQRT1_2, 17837.292893218815 );


n=0;
test( "n=0;<BR>n = 0*Math.SQRT1_2", n = 0*Math.SQRT1_2, 0 );


n=12345;
test( "n=12345;<BR>n = 12345*Math.SQRT1_2", n = 12345*Math.SQRT1_2, 8729.23321374793 );


n=-12345;
test( "n=-12345;<BR>n = -12345*Math.SQRT1_2", n = -12345*Math.SQRT1_2, -8729.23321374793 );


n=0x45ae;
test( "n=0x45ae;<BR>n = 17838*Math.SQRT1_2", n = 17838*Math.SQRT1_2, 12613.370762805636 );


n=0;
test( "n=0;<BR>n = 0/Math.SQRT1_2", n = 0/Math.SQRT1_2, 0 );


n=12345;
test( "n=12345;<BR>n = 12345/Math.SQRT1_2", n = 12345/Math.SQRT1_2, 17458.466427495856 );


n=-12345;
test( "n=-12345;<BR>n = -12345/Math.SQRT1_2", n = -12345/Math.SQRT1_2, -17458.466427495856 );


n=0x45ae;
test( "n=0x45ae;<BR>n = 17838/Math.SQRT1_2", n = 17838/Math.SQRT1_2, 25226.74152561127 );


n=0;
test( "n=0;<BR>n = 0%Math.SQRT1_2", n = 0%Math.SQRT1_2, 0 );


n=12345;
test( "n=12345;<BR>n = 12345%Math.SQRT1_2", n = 12345%Math.SQRT1_2, 0.32981404525247515 );


n=-12345;
test( "n=-12345;<BR>n = -12345%Math.SQRT1_2", n = -12345%Math.SQRT1_2, -0.32981404525247515 );


n=0x45ae;
test( "n=0x45ae;<BR>n = 17838%Math.SQRT1_2", n = 17838%Math.SQRT1_2, 0.5243377881509301 );


n=0;
test( "n=0;<BR>n +=Math.SQRT1_2", n +=Math.SQRT1_2, 0.7071067811865476 );


n=12345;
test( "n=12345;<BR>n +=Math.SQRT1_2", n +=Math.SQRT1_2, 12345.707106781186 );


n=-12345;
test( "n=-12345;<BR>n +=Math.SQRT1_2", n +=Math.SQRT1_2, -12344.292893218813 );


n=0x45ae;
test( "n=0x45ae;<BR>n +=Math.SQRT1_2", n +=Math.SQRT1_2, 17838.707106781185 );


n=0;
test( "n=0;<BR>n -=Math.SQRT1_2", n -=Math.SQRT1_2, -0.7071067811865476 );


n=12345;
test( "n=12345;<BR>n -=Math.SQRT1_2", n -=Math.SQRT1_2, 12344.292893218813 );


n=-12345;
test( "n=-12345;<BR>n -=Math.SQRT1_2", n -=Math.SQRT1_2, -12345.707106781186 );


n=0x45ae;
test( "n=0x45ae;<BR>n -=Math.SQRT1_2", n -=Math.SQRT1_2, 17837.292893218815 );


n=0;
test( "n=0;<BR>n *=Math.SQRT1_2", n *=Math.SQRT1_2, 0 );


n=12345;
test( "n=12345;<BR>n *=Math.SQRT1_2", n *=Math.SQRT1_2, 8729.23321374793 );


n=-12345;
test( "n=-12345;<BR>n *=Math.SQRT1_2", n *=Math.SQRT1_2, -8729.23321374793 );


n=0x45ae;
test( "n=0x45ae;<BR>n *=Math.SQRT1_2", n *=Math.SQRT1_2, 12613.370762805636 );


n=0;
test( "n=0;<BR>n /=Math.SQRT1_2", n /=Math.SQRT1_2, 0 );


n=12345;
test( "n=12345;<BR>n /=Math.SQRT1_2", n /=Math.SQRT1_2, 17458.466427495856 );


n=-12345;
test( "n=-12345;<BR>n /=Math.SQRT1_2", n /=Math.SQRT1_2, -17458.466427495856 );


n=0x45ae;
test( "n=0x45ae;<BR>n /=Math.SQRT1_2", n /=Math.SQRT1_2, 25226.74152561127 );


n=0;
test( "n=0;<BR>n %=Math.SQRT1_2", n %=Math.SQRT1_2, 0 );


n=12345;
test( "n=12345;<BR>n %=Math.SQRT1_2", n %=Math.SQRT1_2, 0.32981404525247515 );


n=-12345;
test( "n=-12345;<BR>n %=Math.SQRT1_2", n %=Math.SQRT1_2, -0.32981404525247515 );


n=0x45ae;
test( "n=0x45ae;<BR>n %=Math.SQRT1_2", n %=Math.SQRT1_2, 0.5243377881509301 );


n=0;
test( "n=0;<BR>n = 0+Math.SQRT2", n = 0+Math.SQRT2, 1.4142135623730951 );


n=12345;
test( "n=12345;<BR>n = 12345+Math.SQRT2", n = 12345+Math.SQRT2, 12346.414213562373 );


n=-12345;
test( "n=-12345;<BR>n = -12345+Math.SQRT2", n = -12345+Math.SQRT2, -12343.585786437626 );


n=0x45ae;
test( "n=0x45ae;<BR>n = 17838+Math.SQRT2", n = 17838+Math.SQRT2, 17839.414213562373 );


n=0;
test( "n=0;<BR>n = 0-Math.SQRT2", n = 0-Math.SQRT2, -1.4142135623730951 );


n=12345;
test( "n=12345;<BR>n = 12345-Math.SQRT2", n = 12345-Math.SQRT2, 12343.585786437626 );


n=-12345;
test( "n=-12345;<BR>n = -12345-Math.SQRT2", n = -12345-Math.SQRT2, -12346.414213562373 );


n=0x45ae;
test( "n=0x45ae;<BR>n = 17838-Math.SQRT2", n = 17838-Math.SQRT2, 17836.585786437626 );


n=0;
test( "n=0;<BR>n = 0*Math.SQRT2", n = 0*Math.SQRT2, 0 );


n=12345;
test( "n=12345;<BR>n = 12345*Math.SQRT2", n = 12345*Math.SQRT2, 17458.46642749586 );


n=-12345;
test( "n=-12345;<BR>n = -12345*Math.SQRT2", n = -12345*Math.SQRT2, -17458.46642749586 );


n=0x45ae;
test( "n=0x45ae;<BR>n = 17838*Math.SQRT2", n = 17838*Math.SQRT2, 25226.741525611272 );


n=0;
test( "n=0;<BR>n = 0/Math.SQRT2", n = 0/Math.SQRT2, 0 );


n=12345;
test( "n=12345;<BR>n = 12345/Math.SQRT2", n = 12345/Math.SQRT2, 8729.233213747928 );


n=-12345;
test( "n=-12345;<BR>n = -12345/Math.SQRT2", n = -12345/Math.SQRT2, -8729.233213747928 );


n=0x45ae;
test( "n=0x45ae;<BR>n = 17838/Math.SQRT2", n = 17838/Math.SQRT2, 12613.370762805634 );


n=0;
test( "n=0;<BR>n = 0%Math.SQRT2", n = 0%Math.SQRT2, 0 );


n=12345;
test( "n=12345;<BR>n = 12345%Math.SQRT2", n = 12345%Math.SQRT2, 0.32981404525247515 );


n=-12345;
test( "n=-12345;<BR>n = -12345%Math.SQRT2", n = -12345%Math.SQRT2, -0.32981404525247515 );


n=0x45ae;
test( "n=0x45ae;<BR>n = 17838%Math.SQRT2", n = 17838%Math.SQRT2, 0.5243377881509301 );


n=0;
test( "n=0;<BR>n +=Math.SQRT2", n +=Math.SQRT2, 1.4142135623730951 );


n=12345;
test( "n=12345;<BR>n +=Math.SQRT2", n +=Math.SQRT2, 12346.414213562373 );


n=-12345;
test( "n=-12345;<BR>n +=Math.SQRT2", n +=Math.SQRT2, -12343.585786437626 );


n=0x45ae;
test( "n=0x45ae;<BR>n +=Math.SQRT2", n +=Math.SQRT2, 17839.414213562373 );


n=0;
test( "n=0;<BR>n -=Math.SQRT2", n -=Math.SQRT2, -1.4142135623730951 );


n=12345;
test( "n=12345;<BR>n -=Math.SQRT2", n -=Math.SQRT2, 12343.585786437626 );


n=-12345;
test( "n=-12345;<BR>n -=Math.SQRT2", n -=Math.SQRT2, -12346.414213562373 );


n=0x45ae;
test( "n=0x45ae;<BR>n -=Math.SQRT2", n -=Math.SQRT2, 17836.585786437626 );


n=0;
test( "n=0;<BR>n *=Math.SQRT2", n *=Math.SQRT2, 0 );


n=12345;
test( "n=12345;<BR>n *=Math.SQRT2", n *=Math.SQRT2, 17458.46642749586 );


n=-12345;
test( "n=-12345;<BR>n *=Math.SQRT2", n *=Math.SQRT2, -17458.46642749586 );


n=0x45ae;
test( "n=0x45ae;<BR>n *=Math.SQRT2", n *=Math.SQRT2, 25226.741525611272 );


n=0;
test( "n=0;<BR>n /=Math.SQRT2", n /=Math.SQRT2, 0 );


n=12345;
test( "n=12345;<BR>n /=Math.SQRT2", n /=Math.SQRT2, 8729.233213747928 );


n=-12345;
test( "n=-12345;<BR>n /=Math.SQRT2", n /=Math.SQRT2, -8729.233213747928 );


n=0x45ae;
test( "n=0x45ae;<BR>n /=Math.SQRT2", n /=Math.SQRT2, 12613.370762805634 );


n=0;
test( "n=0;<BR>n %=Math.SQRT2", n %=Math.SQRT2, 0 );


n=12345;
test( "n=12345;<BR>n %=Math.SQRT2", n %=Math.SQRT2, 0.32981404525247515 );


n=-12345;
test( "n=-12345;<BR>n %=Math.SQRT2", n %=Math.SQRT2, -0.32981404525247515 );


n=0x45ae;
test( "n=0x45ae;<BR>n %=Math.SQRT2", n %=Math.SQRT2, 0.5243377881509301 );


n=0;
test( "n=0;<BR>n = 0+Number.POSITIVE_INFINITY", n = 0+Number.POSITIVE_INFINITY, Infinity );


n=12345;
test( "n=12345;<BR>n = 12345+Number.POSITIVE_INFINITY", n = 12345+Number.POSITIVE_INFINITY, Infinity );


n=-12345;
test( "n=-12345;<BR>n = -12345+Number.POSITIVE_INFINITY", n = -12345+Number.POSITIVE_INFINITY, Infinity );


n=0x45ae;
test( "n=0x45ae;<BR>n = 17838+Number.POSITIVE_INFINITY", n = 17838+Number.POSITIVE_INFINITY, Infinity );


n=0;
test( "n=0;<BR>n = 0-Number.POSITIVE_INFINITY", n = 0-Number.POSITIVE_INFINITY, -Infinity );


n=12345;
test( "n=12345;<BR>n = 12345-Number.POSITIVE_INFINITY", n = 12345-Number.POSITIVE_INFINITY, -Infinity );


n=-12345;
test( "n=-12345;<BR>n = -12345-Number.POSITIVE_INFINITY", n = -12345-Number.POSITIVE_INFINITY, -Infinity );


n=0x45ae;
test( "n=0x45ae;<BR>n = 17838-Number.POSITIVE_INFINITY", n = 17838-Number.POSITIVE_INFINITY, -Infinity );


n=0;
test( "n=0;<BR>n = 0*Number.POSITIVE_INFINITY", n = 0*Number.POSITIVE_INFINITY, Number.NaN );


n=12345;
test( "n=12345;<BR>n = 12345*Number.POSITIVE_INFINITY", n = 12345*Number.POSITIVE_INFINITY, Infinity );


n=-12345;
test( "n=-12345;<BR>n = -12345*Number.POSITIVE_INFINITY", n = -12345*Number.POSITIVE_INFINITY, -Infinity );


n=0x45ae;
test( "n=0x45ae;<BR>n = 17838*Number.POSITIVE_INFINITY", n = 17838*Number.POSITIVE_INFINITY, Infinity );


n=0;
test( "n=0;<BR>n = 0/Number.POSITIVE_INFINITY", n = 0/Number.POSITIVE_INFINITY, 0 );


n=12345;
test( "n=12345;<BR>n = 12345/Number.POSITIVE_INFINITY", n = 12345/Number.POSITIVE_INFINITY, 0 );


n=-12345;
test( "n=-12345;<BR>n = -12345/Number.POSITIVE_INFINITY", n = -12345/Number.POSITIVE_INFINITY, 0 );


n=0x45ae;
test( "n=0x45ae;<BR>n = 17838/Number.POSITIVE_INFINITY", n = 17838/Number.POSITIVE_INFINITY, 0 );


n=0;
test( "n=0;<BR>n = 0%Number.POSITIVE_INFINITY", n = 0%Number.POSITIVE_INFINITY, 0 );
/* ECMA spec:
* If the dividend is finite and the divisor is an infinity, the result equals the dividend.
* If the dividend is a zero and the divisor is finite, the result is the same as the dividend.
*/

n=12345;
test( "n=12345;<BR>n = 12345%Number.POSITIVE_INFINITY", n = 12345%Number.POSITIVE_INFINITY, 12345 );


n=-12345;
test( "n=-12345;<BR>n = -12345%Number.POSITIVE_INFINITY", n = -12345%Number.POSITIVE_INFINITY, -12345 );


n=0x45ae;
test( "n=0x45ae;<BR>n = 17838%Number.POSITIVE_INFINITY", n = 17838%Number.POSITIVE_INFINITY, 17838 );


n=0;
test( "n=0;<BR>n +=Number.POSITIVE_INFINITY", n +=Number.POSITIVE_INFINITY, Infinity );


n=12345;
test( "n=12345;<BR>n +=Number.POSITIVE_INFINITY", n +=Number.POSITIVE_INFINITY, Infinity );


n=-12345;
test( "n=-12345;<BR>n +=Number.POSITIVE_INFINITY", n +=Number.POSITIVE_INFINITY, Infinity );


n=0x45ae;
test( "n=0x45ae;<BR>n +=Number.POSITIVE_INFINITY", n +=Number.POSITIVE_INFINITY, Infinity );


n=0;
test( "n=0;<BR>n -=Number.POSITIVE_INFINITY", n -=Number.POSITIVE_INFINITY, -Infinity );


n=12345;
test( "n=12345;<BR>n -=Number.POSITIVE_INFINITY", n -=Number.POSITIVE_INFINITY, -Infinity );


n=-12345;
test( "n=-12345;<BR>n -=Number.POSITIVE_INFINITY", n -=Number.POSITIVE_INFINITY, -Infinity );


n=0x45ae;
test( "n=0x45ae;<BR>n -=Number.POSITIVE_INFINITY", n -=Number.POSITIVE_INFINITY, -Infinity );


n=0;
test( "n=0;<BR>n *=Number.POSITIVE_INFINITY", n *=Number.POSITIVE_INFINITY, Number.NaN );


n=12345;
test( "n=12345;<BR>n *=Number.POSITIVE_INFINITY", n *=Number.POSITIVE_INFINITY, Infinity );


n=-12345;
test( "n=-12345;<BR>n *=Number.POSITIVE_INFINITY", n *=Number.POSITIVE_INFINITY, -Infinity );


n=0x45ae;
test( "n=0x45ae;<BR>n *=Number.POSITIVE_INFINITY", n *=Number.POSITIVE_INFINITY, Infinity );


n=0;
test( "n=0;<BR>n /=Number.POSITIVE_INFINITY", n /=Number.POSITIVE_INFINITY, 0 );


n=12345;
test( "n=12345;<BR>n /=Number.POSITIVE_INFINITY", n /=Number.POSITIVE_INFINITY, 0 );


n=-12345;
test( "n=-12345;<BR>n /=Number.POSITIVE_INFINITY", n /=Number.POSITIVE_INFINITY, 0 );


n=0x45ae;
test( "n=0x45ae;<BR>n /=Number.POSITIVE_INFINITY", n /=Number.POSITIVE_INFINITY, 0 );


n=0;
test( "n=0;<BR>n %=Number.POSITIVE_INFINITY", n %=Number.POSITIVE_INFINITY, 0 );


n=12345;
test( "n=12345;<BR>n %=Number.POSITIVE_INFINITY", n %=Number.POSITIVE_INFINITY, 12345 );


n=-12345;
test( "n=-12345;<BR>n %=Number.POSITIVE_INFINITY", n %=Number.POSITIVE_INFINITY, -12345 );


n=0x45ae;
test( "n=0x45ae;<BR>n %=Number.POSITIVE_INFINITY", n %=Number.POSITIVE_INFINITY, 17838 );


n=0;
test( "n=0;<BR>n = 0+Number.NEGATIVE_INFINITY", n = 0+Number.NEGATIVE_INFINITY, -Infinity );


n=12345;
test( "n=12345;<BR>n = 12345+Number.NEGATIVE_INFINITY", n = 12345+Number.NEGATIVE_INFINITY, -Infinity );


n=-12345;
test( "n=-12345;<BR>n = -12345+Number.NEGATIVE_INFINITY", n = -12345+Number.NEGATIVE_INFINITY, -Infinity );


n=0x45ae;
test( "n=0x45ae;<BR>n = 17838+Number.NEGATIVE_INFINITY", n = 17838+Number.NEGATIVE_INFINITY, -Infinity );


n=0;
test( "n=0;<BR>n = 0-Number.NEGATIVE_INFINITY", n = 0-Number.NEGATIVE_INFINITY, Infinity );


n=12345;
test( "n=12345;<BR>n = 12345-Number.NEGATIVE_INFINITY", n = 12345-Number.NEGATIVE_INFINITY, Infinity );


n=-12345;
test( "n=-12345;<BR>n = -12345-Number.NEGATIVE_INFINITY", n = -12345-Number.NEGATIVE_INFINITY, Infinity );


n=0x45ae;
test( "n=0x45ae;<BR>n = 17838-Number.NEGATIVE_INFINITY", n = 17838-Number.NEGATIVE_INFINITY, Infinity );


n=0;
test( "n=0;<BR>n = 0*Number.NEGATIVE_INFINITY", n = 0*Number.NEGATIVE_INFINITY, Number.NaN );


n=12345;
test( "n=12345;<BR>n = 12345*Number.NEGATIVE_INFINITY", n = 12345*Number.NEGATIVE_INFINITY, -Infinity );


n=-12345;
test( "n=-12345;<BR>n = -12345*Number.NEGATIVE_INFINITY", n = -12345*Number.NEGATIVE_INFINITY, Infinity );


n=0x45ae;
test( "n=0x45ae;<BR>n = 17838*Number.NEGATIVE_INFINITY", n = 17838*Number.NEGATIVE_INFINITY, -Infinity );


n=0;
test( "n=0;<BR>n = 0/Number.NEGATIVE_INFINITY", n = 0/Number.NEGATIVE_INFINITY, 0 );


n=12345;
test( "n=12345;<BR>n = 12345/Number.NEGATIVE_INFINITY", n = 12345/Number.NEGATIVE_INFINITY, 0 );


n=-12345;
test( "n=-12345;<BR>n = -12345/Number.NEGATIVE_INFINITY", n = -12345/Number.NEGATIVE_INFINITY, 0 );


n=0x45ae;
test( "n=0x45ae;<BR>n = 17838/Number.NEGATIVE_INFINITY", n = 17838/Number.NEGATIVE_INFINITY, 0 );


n=0;
test( "n=0;<BR>n = 0%Number.NEGATIVE_INFINITY", n = 0%Number.NEGATIVE_INFINITY, 0 );


n=12345;
test( "n=12345;<BR>n = 12345%Number.NEGATIVE_INFINITY", n = 12345%Number.NEGATIVE_INFINITY, 12345 );


n=-12345;
test( "n=-12345;<BR>n = -12345%Number.NEGATIVE_INFINITY", n = -12345%Number.NEGATIVE_INFINITY, -12345 );


n=0x45ae;
test( "n=0x45ae;<BR>n = 17838%Number.NEGATIVE_INFINITY", n = 17838%Number.NEGATIVE_INFINITY, 17838 );


n=0;
test( "n=0;<BR>n +=Number.NEGATIVE_INFINITY", n +=Number.NEGATIVE_INFINITY, -Infinity );


n=12345;
test( "n=12345;<BR>n +=Number.NEGATIVE_INFINITY", n +=Number.NEGATIVE_INFINITY, -Infinity );


n=-12345;
test( "n=-12345;<BR>n +=Number.NEGATIVE_INFINITY", n +=Number.NEGATIVE_INFINITY, -Infinity );


n=0x45ae;
test( "n=0x45ae;<BR>n +=Number.NEGATIVE_INFINITY", n +=Number.NEGATIVE_INFINITY, -Infinity );


n=0;
test( "n=0;<BR>n -=Number.NEGATIVE_INFINITY", n -=Number.NEGATIVE_INFINITY, Infinity );


n=12345;
test( "n=12345;<BR>n -=Number.NEGATIVE_INFINITY", n -=Number.NEGATIVE_INFINITY, Infinity );


n=-12345;
test( "n=-12345;<BR>n -=Number.NEGATIVE_INFINITY", n -=Number.NEGATIVE_INFINITY, Infinity );


n=0x45ae;
test( "n=0x45ae;<BR>n -=Number.NEGATIVE_INFINITY", n -=Number.NEGATIVE_INFINITY, Infinity );


n=0;
test( "n=0;<BR>n *=Number.NEGATIVE_INFINITY", n *=Number.NEGATIVE_INFINITY, Number.NaN );


n=12345;
test( "n=12345;<BR>n *=Number.NEGATIVE_INFINITY", n *=Number.NEGATIVE_INFINITY, -Infinity );


n=-12345;
test( "n=-12345;<BR>n *=Number.NEGATIVE_INFINITY", n *=Number.NEGATIVE_INFINITY, Infinity );


n=0x45ae;
test( "n=0x45ae;<BR>n *=Number.NEGATIVE_INFINITY", n *=Number.NEGATIVE_INFINITY, -Infinity );


n=0;
test( "n=0;<BR>n /=Number.NEGATIVE_INFINITY", n /=Number.NEGATIVE_INFINITY, 0 );


n=12345;
test( "n=12345;<BR>n /=Number.NEGATIVE_INFINITY", n /=Number.NEGATIVE_INFINITY, 0 );


n=-12345;
test( "n=-12345;<BR>n /=Number.NEGATIVE_INFINITY", n /=Number.NEGATIVE_INFINITY, 0 );


n=0x45ae;
test( "n=0x45ae;<BR>n /=Number.NEGATIVE_INFINITY", n /=Number.NEGATIVE_INFINITY, 0 );


n=0;
test( "n=0;<BR>n %=Number.NEGATIVE_INFINITY", n %=Number.NEGATIVE_INFINITY, 0 );


n=12345;
test( "n=12345;<BR>n %=Number.NEGATIVE_INFINITY", n %=Number.NEGATIVE_INFINITY, 12345 );


n=-12345;
test( "n=-12345;<BR>n %=Number.NEGATIVE_INFINITY", n %=Number.NEGATIVE_INFINITY, -12345 );


n=0x45ae;
test( "n=0x45ae;<BR>n %=Number.NEGATIVE_INFINITY", n %=Number.NEGATIVE_INFINITY, 17838 );


n=0;
test( "n=0;<BR>n = 0+Number.MAX_VALUE", n = 0+Number.MAX_VALUE, 1.7976931348623157e+308 );


n=12345;
test( "n=12345;<BR>n = 12345+Number.MAX_VALUE", n = 12345+Number.MAX_VALUE, 1.7976931348623157e+308 );


n=-12345;
test( "n=-12345;<BR>n = -12345+Number.MAX_VALUE", n = -12345+Number.MAX_VALUE, 1.7976931348623157e+308 );


n=0x45ae;
test( "n=0x45ae;<BR>n = 17838+Number.MAX_VALUE", n = 17838+Number.MAX_VALUE, 1.7976931348623157e+308 );


n=0;
test( "n=0;<BR>n = 0-Number.MAX_VALUE", n = 0-Number.MAX_VALUE, -1.7976931348623157e+308 );


n=12345;
test( "n=12345;<BR>n = 12345-Number.MAX_VALUE", n = 12345-Number.MAX_VALUE, -1.7976931348623157e+308 );


n=-12345;
test( "n=-12345;<BR>n = -12345-Number.MAX_VALUE", n = -12345-Number.MAX_VALUE, -1.7976931348623157e+308 );


n=0x45ae;
test( "n=0x45ae;<BR>n = 17838-Number.MAX_VALUE", n = 17838-Number.MAX_VALUE, -1.7976931348623157e+308 );


n=0;
test( "n=0;<BR>n = 0*Number.MAX_VALUE", n = 0*Number.MAX_VALUE, 0 );


n=12345;
test( "n=12345;<BR>n = 12345*Number.MAX_VALUE", n = 12345*Number.MAX_VALUE, Infinity );


n=-12345;
test( "n=-12345;<BR>n = -12345*Number.MAX_VALUE", n = -12345*Number.MAX_VALUE, -Infinity );


n=0x45ae;
test( "n=0x45ae;<BR>n = 17838*Number.MAX_VALUE", n = 17838*Number.MAX_VALUE, Infinity );


n=0;
test( "n=0;<BR>n = 0/Number.MAX_VALUE", n = 0/Number.MAX_VALUE, 0 );


n=12345;
test( "n=12345;<BR>n = 12345/Number.MAX_VALUE", n = 12345/Number.MAX_VALUE, 6.867134195817851e-305 );


n=-12345;
test( "n=-12345;<BR>n = -12345/Number.MAX_VALUE", n = -12345/Number.MAX_VALUE, -6.867134195817851e-305 );


n=0x45ae;
test( "n=0x45ae;<BR>n = 17838/Number.MAX_VALUE", n = 17838/Number.MAX_VALUE, 9.922716872012866e-305 );


n=0;
test( "n=0;<BR>n = 0%Number.MAX_VALUE", n = 0%Number.MAX_VALUE, 0 );


n=12345;
test( "n=12345;<BR>n = 12345%Number.MAX_VALUE", n = 12345%Number.MAX_VALUE, 12345 );


n=-12345;
test( "n=-12345;<BR>n = -12345%Number.MAX_VALUE", n = -12345%Number.MAX_VALUE, -12345 );


n=0x45ae;
test( "n=0x45ae;<BR>n = 17838%Number.MAX_VALUE", n = 17838%Number.MAX_VALUE, 17838 );


n=0;
test( "n=0;<BR>n +=Number.MAX_VALUE", n +=Number.MAX_VALUE, 1.7976931348623157e+308 );


n=12345;
test( "n=12345;<BR>n +=Number.MAX_VALUE", n +=Number.MAX_VALUE, 1.7976931348623157e+308 );


n=-12345;
test( "n=-12345;<BR>n +=Number.MAX_VALUE", n +=Number.MAX_VALUE, 1.7976931348623157e+308 );


n=0x45ae;
test( "n=0x45ae;<BR>n +=Number.MAX_VALUE", n +=Number.MAX_VALUE, 1.7976931348623157e+308 );


n=0;
test( "n=0;<BR>n -=Number.MAX_VALUE", n -=Number.MAX_VALUE, -1.7976931348623157e+308 );


n=12345;
test( "n=12345;<BR>n -=Number.MAX_VALUE", n -=Number.MAX_VALUE, -1.7976931348623157e+308 );


n=-12345;
test( "n=-12345;<BR>n -=Number.MAX_VALUE", n -=Number.MAX_VALUE, -1.7976931348623157e+308 );


n=0x45ae;
test( "n=0x45ae;<BR>n -=Number.MAX_VALUE", n -=Number.MAX_VALUE, -1.7976931348623157e+308 );


n=0;
test( "n=0;<BR>n *=Number.MAX_VALUE", n *=Number.MAX_VALUE, 0 );


n=12345;
test( "n=12345;<BR>n *=Number.MAX_VALUE", n *=Number.MAX_VALUE, Infinity );


n=-12345;
test( "n=-12345;<BR>n *=Number.MAX_VALUE", n *=Number.MAX_VALUE, -Infinity );


n=0x45ae;
test( "n=0x45ae;<BR>n *=Number.MAX_VALUE", n *=Number.MAX_VALUE, Infinity );


n=0;
test( "n=0;<BR>n /=Number.MAX_VALUE", n /=Number.MAX_VALUE, 0 );


n=12345;
test( "n=12345;<BR>n /=Number.MAX_VALUE", n /=Number.MAX_VALUE, 6.867134195817851e-305 );


n=-12345;
test( "n=-12345;<BR>n /=Number.MAX_VALUE", n /=Number.MAX_VALUE, -6.867134195817851e-305 );


n=0x45ae;
test( "n=0x45ae;<BR>n /=Number.MAX_VALUE", n /=Number.MAX_VALUE, 9.922716872012866e-305 );


n=0;
test( "n=0;<BR>n %=Number.MAX_VALUE", n %=Number.MAX_VALUE, 0 );


n=12345;
test( "n=12345;<BR>n %=Number.MAX_VALUE", n %=Number.MAX_VALUE, 12345 );


n=-12345;
test( "n=-12345;<BR>n %=Number.MAX_VALUE", n %=Number.MAX_VALUE, -12345 );


n=0x45ae;
test( "n=0x45ae;<BR>n %=Number.MAX_VALUE", n %=Number.MAX_VALUE, 17838 );


n=0;
test( "n=0;<BR>n = 0+Number.MIN_VALUE", n = 0+Number.MIN_VALUE, 5e-324 );

n=12345;
test( "n=12345;<BR>n = 12345+Number.MIN_VALUE", n = 12345+Number.MIN_VALUE, 12345 );


n=-12345;
test( "n=-12345;<BR>n = -12345+Number.MIN_VALUE", n = -12345+Number.MIN_VALUE, -12345 );


n=0x45ae;
test( "n=0x45ae;<BR>n = 17838+Number.MIN_VALUE", n = 17838+Number.MIN_VALUE, 17838 );


n=0;
test( "n=0;<BR>n = 0-Number.MIN_VALUE", n = 0-Number.MIN_VALUE, -5e-324 );

n=12345;
test( "n=12345;<BR>n = 12345-Number.MIN_VALUE", n = 12345-Number.MIN_VALUE, 12345 );


n=-12345;
test( "n=-12345;<BR>n = -12345-Number.MIN_VALUE", n = -12345-Number.MIN_VALUE, -12345 );


n=0x45ae;
test( "n=0x45ae;<BR>n = 17838-Number.MIN_VALUE", n = 17838-Number.MIN_VALUE, 17838 );


n=0;
test( "n=0;<BR>n = 0*Number.MIN_VALUE", n = 0*Number.MIN_VALUE, 0 );


n=12345;
test( "n=12345;<BR>n = 12345*Number.MIN_VALUE", n = 12345*Number.MIN_VALUE, 6.099e-320 );

n=-12345;
test( "n=-12345;<BR>n = -12345*Number.MIN_VALUE", n = -12345*Number.MIN_VALUE, -6.099e-320 );

n=0x45ae;
test( "n=0x45ae;<BR>n = 17838*Number.MIN_VALUE", n = 17838*Number.MIN_VALUE, 8.813e-320 );

n=0;
test( "n=0;<BR>n = 0/Number.MIN_VALUE", n = 0/Number.MIN_VALUE, 0 );


n=12345;
test( "n=12345;<BR>n = 12345/Number.MIN_VALUE", n = 12345/Number.MIN_VALUE, Infinity );


n=-12345;
test( "n=-12345;<BR>n = -12345/Number.MIN_VALUE", n = -12345/Number.MIN_VALUE, -Infinity );


n=0x45ae;
test( "n=0x45ae;<BR>n = 17838/Number.MIN_VALUE", n = 17838/Number.MIN_VALUE, Infinity );


n=0;
test( "n=0;<BR>n = 0%Number.MIN_VALUE", n = 0%Number.MIN_VALUE, 0 );


n=12345;
test( "n=12345;<BR>n = 12345%Number.MIN_VALUE", n = 12345%Number.MIN_VALUE, 0 );


n=-12345;
test( "n=-12345;<BR>n = -12345%Number.MIN_VALUE", n = -12345%Number.MIN_VALUE, 0 );


n=0x45ae;
test( "n=0x45ae;<BR>n = 17838%Number.MIN_VALUE", n = 17838%Number.MIN_VALUE, 0 );


n=0;
test( "n=0;<BR>n +=Number.MIN_VALUE", n +=Number.MIN_VALUE, 5e-324 );

n=12345;
test( "n=12345;<BR>n +=Number.MIN_VALUE", n +=Number.MIN_VALUE, 12345 );


n=-12345;
test( "n=-12345;<BR>n +=Number.MIN_VALUE", n +=Number.MIN_VALUE, -12345 );


n=0x45ae;
test( "n=0x45ae;<BR>n +=Number.MIN_VALUE", n +=Number.MIN_VALUE, 17838 );


n=0;
test( "n=0;<BR>n -=Number.MIN_VALUE", n -=Number.MIN_VALUE, -5e-324 );

n=12345;
test( "n=12345;<BR>n -=Number.MIN_VALUE", n -=Number.MIN_VALUE, 12345 );


n=-12345;
test( "n=-12345;<BR>n -=Number.MIN_VALUE", n -=Number.MIN_VALUE, -12345 );


n=0x45ae;
test( "n=0x45ae;<BR>n -=Number.MIN_VALUE", n -=Number.MIN_VALUE, 17838 );


n=0;
test( "n=0;<BR>n *=Number.MIN_VALUE", n *=Number.MIN_VALUE, 0 );


n=12345;
test( "n=12345;<BR>n *=Number.MIN_VALUE", n *=Number.MIN_VALUE, 6.099e-320 );

n=-12345;
test( "n=-12345;<BR>n *=Number.MIN_VALUE", n *=Number.MIN_VALUE, -6.099e-320 );

n=0x45ae;
test( "n=0x45ae;<BR>n *=Number.MIN_VALUE", n *=Number.MIN_VALUE, 8.813e-320 );

n=0;
test( "n=0;<BR>n /=Number.MIN_VALUE", n /=Number.MIN_VALUE, 0 );


n=12345;
test( "n=12345;<BR>n /=Number.MIN_VALUE", n /=Number.MIN_VALUE, Infinity );


n=-12345;
test( "n=-12345;<BR>n /=Number.MIN_VALUE", n /=Number.MIN_VALUE, -Infinity );


n=0x45ae;
test( "n=0x45ae;<BR>n /=Number.MIN_VALUE", n /=Number.MIN_VALUE, Infinity );


n=0;
test( "n=0;<BR>n %=Number.MIN_VALUE", n %=Number.MIN_VALUE, 0 );


n=12345;
test( "n=12345;<BR>n %=Number.MIN_VALUE", n %=Number.MIN_VALUE, 0 );


n=-12345;
test( "n=-12345;<BR>n %=Number.MIN_VALUE", n %=Number.MIN_VALUE, 0 );


n=0x45ae;
test( "n=0x45ae;<BR>n %=Number.MIN_VALUE", n %=Number.MIN_VALUE, 0 );


n=0;
test( "n=0;<BR>n = 0+Number.NaN", n = 0+Number.NaN, Number.NaN );


n=12345;
test( "n=12345;<BR>n = 12345+Number.NaN", n = 12345+Number.NaN, Number.NaN );


n=-12345;
test( "n=-12345;<BR>n = -12345+Number.NaN", n = -12345+Number.NaN, Number.NaN );


n=0x45ae;
test( "n=0x45ae;<BR>n = 17838+Number.NaN", n = 17838+Number.NaN, Number.NaN );


n=0;
test( "n=0;<BR>n = 0-Number.NaN", n = 0-Number.NaN, Number.NaN );


n=12345;
test( "n=12345;<BR>n = 12345-Number.NaN", n = 12345-Number.NaN, Number.NaN );


n=-12345;
test( "n=-12345;<BR>n = -12345-Number.NaN", n = -12345-Number.NaN, Number.NaN );


n=0x45ae;
test( "n=0x45ae;<BR>n = 17838-Number.NaN", n = 17838-Number.NaN, Number.NaN );


n=0;
test( "n=0;<BR>n = 0*Number.NaN", n = 0*Number.NaN, Number.NaN );


n=12345;
test( "n=12345;<BR>n = 12345*Number.NaN", n = 12345*Number.NaN, Number.NaN );


n=-12345;
test( "n=-12345;<BR>n = -12345*Number.NaN", n = -12345*Number.NaN, Number.NaN );


n=0x45ae;
test( "n=0x45ae;<BR>n = 17838*Number.NaN", n = 17838*Number.NaN, Number.NaN );


n=0;
test( "n=0;<BR>n = 0/Number.NaN", n = 0/Number.NaN, Number.NaN );


n=12345;
test( "n=12345;<BR>n = 12345/Number.NaN", n = 12345/Number.NaN, Number.NaN );


n=-12345;
test( "n=-12345;<BR>n = -12345/Number.NaN", n = -12345/Number.NaN, Number.NaN );


n=0x45ae;
test( "n=0x45ae;<BR>n = 17838/Number.NaN", n = 17838/Number.NaN, Number.NaN );


n=0;
test( "n=0;<BR>n = 0%Number.NaN", n = 0%Number.NaN, Number.NaN );


n=12345;
test( "n=12345;<BR>n = 12345%Number.NaN", n = 12345%Number.NaN, Number.NaN );


n=-12345;
test( "n=-12345;<BR>n = -12345%Number.NaN", n = -12345%Number.NaN, Number.NaN );


n=0x45ae;
test( "n=0x45ae;<BR>n = 17838%Number.NaN", n = 17838%Number.NaN, Number.NaN );


n=0;
test( "n=0;<BR>n +=Number.NaN", n +=Number.NaN, Number.NaN );


n=12345;
test( "n=12345;<BR>n +=Number.NaN", n +=Number.NaN, Number.NaN );


n=-12345;
test( "n=-12345;<BR>n +=Number.NaN", n +=Number.NaN, Number.NaN );


n=0x45ae;
test( "n=0x45ae;<BR>n +=Number.NaN", n +=Number.NaN, Number.NaN );


n=0;
test( "n=0;<BR>n -=Number.NaN", n -=Number.NaN, Number.NaN );


n=12345;
test( "n=12345;<BR>n -=Number.NaN", n -=Number.NaN, Number.NaN );


n=-12345;
test( "n=-12345;<BR>n -=Number.NaN", n -=Number.NaN, Number.NaN );


n=0x45ae;
test( "n=0x45ae;<BR>n -=Number.NaN", n -=Number.NaN, Number.NaN );


n=0;
test( "n=0;<BR>n *=Number.NaN", n *=Number.NaN, Number.NaN );


n=12345;
test( "n=12345;<BR>n *=Number.NaN", n *=Number.NaN, Number.NaN );


n=-12345;
test( "n=-12345;<BR>n *=Number.NaN", n *=Number.NaN, Number.NaN );


n=0x45ae;
test( "n=0x45ae;<BR>n *=Number.NaN", n *=Number.NaN, Number.NaN );


n=0;
test( "n=0;<BR>n /=Number.NaN", n /=Number.NaN, Number.NaN );


n=12345;
test( "n=12345;<BR>n /=Number.NaN", n /=Number.NaN, Number.NaN );


n=-12345;
test( "n=-12345;<BR>n /=Number.NaN", n /=Number.NaN, Number.NaN );


n=0x45ae;
test( "n=0x45ae;<BR>n /=Number.NaN", n /=Number.NaN, Number.NaN );


n=0;
test( "n=0;<BR>n %=Number.NaN", n %=Number.NaN, Number.NaN );


n=12345;
test( "n=12345;<BR>n %=Number.NaN", n %=Number.NaN, Number.NaN );


n=-12345;
test( "n=-12345;<BR>n %=Number.NaN", n %=Number.NaN, Number.NaN );


n=0x45ae;
test( "n=0x45ae;<BR>n %=Number.NaN", n %=Number.NaN, Number.NaN );


} catch (e) { exception( e ); }


testmodule_finished();

/* eof */
