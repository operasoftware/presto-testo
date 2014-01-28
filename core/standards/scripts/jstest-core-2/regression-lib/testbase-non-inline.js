/* ECMAScript autotest framework.
 *
 * This version is modified to use DOM to report results
 * instead of document.write.  This is needed by some
 * scheduler tests, since document.write only works the
 * way you want it to from inline scripts.
 *
 * It requires a container element to be defined in the
 * document, with the id 'container'.  Results will be
 * added to this element using appendChild.
 *
 * $Id: testbase-non-inline.js 12630 2007-03-08 15:16:44Z hallvord $
 */

var _testmodule_unknown = "*** MODULE UNKNOWN ***";
var _testcase_unknown = "*** CASE UNKNOWN ***";
var _testmodule = _testmodule_unknown;
var _testcase = _testcase_unknown;
var _tests_passed = 0;
var _tests_failed = 0;
var _tests_failed_as_expected = 0;
var _test_msgwin;
var _test_window_opener=(self!=top)?top:window.opener;  // So that tests that change window.opener will autorun
var _test_self=self;			// Ditto for window.self
var _test_isopera=null;         // cached value, initialized by isOpera() below
var _test_isbytecoded=null;     // cached value, initialized by isBytecoded() below
var _test_decompilerRemoved=null; // cached value, initialized by decompilerRemoved() below

/*  we want it to be possible to run the test in an IFRAME. 
_test_window_opener should point to the window object tests should be reported to.
If top.opener exists, we are running in a popup window, else if top != self we are running in IFRAME
*/
if(top.opener){
	_test_window_opener=top.opener;
}else if( top!=self ){
	_test_window_opener=top;
}


/* MSIE 5.0 compatibility definitions */

if (navigator.appName == "Microsoft Internet Explorer" &&
    navigator.userAgent.indexOf("Opera") == -1)
{
   window.undefined = window.undefined;
   if (!window.EvalError)
      window.EvalError = Error;
   if (!window.RangeError)
      window.RangeError = Error;
   if (!window.ReferenceError)
      window.ReferenceError = Error;
   if (!window.SyntaxError)
      window.SyntaxError = Error;
   if (!window.TypeError)
      window.TypeError = Error;
   if (!window.URIError)
      window.URIError = Error;
}

/* End MSIE compatibility definitions */

function show( msg ) 
{
  var container = document.getElementById( "container" );
  var paragraph = document.createElement( "P" );
  container.appendChild( paragraph );
  paragraph.innerHTML = msg;
}

function showpre( msg )
{
  var container = document.getElementById( "container" );
  var pre = document.createElement( "PRE" );
  container.appendChild( pre );
  pre.innerHTML = msg;
}

function showred( msg ) 
{
   show( '<font color=red>' + msg + '</font>' ); 
}

function showblue( msg ) 
{
   show( '<font color=blue>' + msg + '</font>' ); 
}

// info is optional
function test( feature, value, expected, info )
{
   var isok = typeof(value) == "number" && typeof(expected) == "number" && isNaN(value) && isNaN(expected)
      || value == expected;
   if (!isok) {
      _tests_failed++;
      show( "*** FAILED while testing: " + _testcase + ": " + feature );
      showpre( "Got:    " + value + "\n" +
               "Wanted: " + expected + "\n" +
               (info ? "Info:   " + info : "") );
   }
   else
      _tests_passed++;
   return isok;
}

function test_expect_failure( feature, bugno, value, expected, info )
{
   var isok = typeof(value) == "number" && typeof(expected) == "number" && isNaN(value) && isNaN(expected)
      || value == expected;
   if (!isok) {
      _tests_failed_as_expected++;
      show( "*** FAILED while testing: " + _testcase + ": " + feature );
      showblue( "*** Failure is expected; known bug #" + bugno );
      showpre( "Got:    " + value + "\n" +
               "Wanted: " + expected + "\n" +
               (info ? "Info:   " + info : "") );
   }
   else {
      _tests_failed++;
      show( "*** WARNING: a test that was expected to fail (bug) now succeeds." );
      show( "*** " + _testcase + ": " + feature );
      show( "*** Bug #" + bugno );
      show( "" );
   }
}

function test_spaceagnostic_expect_failure( feature, bugno, value, expected, info )
{
   if( info )
      test_spaceagnostic( feature, value, expected, info, bugno );
   else
      test_spaceagnostic( feature, value, expected, " ", bugno );
}

/* bugno is for the test_expect_failure */
function test_spaceagnostic( feature, value, expected, info, bugno )
{
   function isspace( c ) {
      return c == ' ' || c == '\t' || c == '\n' || c == '\r';
   }

   function frontstrip( a ) {
      for ( var i=0 ; i < a.length && isspace(a.charAt(i)) ; i++ )
         ;
      return a.substring(i);
   }

   function endstrip( a ) {
      for ( var i=a.length-1 ; i >= 0 && isspace(a.charAt(i)) ; i-- )
         ;
      return a.substring(0,i+1);
   }

   function midstrip( a ) {
      var i;
      var c = "";
      for ( i=0 ; i < a.length ; i++ )
         if (isspace(a.charAt(i))) {
            c += ' ';
            while (i+1 < a.length && isspace(a.charAt(i+1)))
               i++;
         }
         else if (a.charAt(i) == ',') {
            c += ',';
            while (i+1 < a.length && isspace(a.charAt(i+1)))
               i++;
         }
         else
            c += a.charAt(i);
      return c;
   }

   function strip(a) {
      return frontstrip(endstrip(midstrip(a)));
   }

   if(value != undefined)
   {
      if( bugno )
      {
         test_expect_failure( feature, bugno, value, strip( expected ), info );
      }
      else
      {
         test( feature, strip(value), strip(expected), info );
      }
   }
}

function test_deepish( feature, value, expected, info, process )
{
   function compare( a, b )
      {
         if (a == b)
         {
            return true;
         }
         else if (a instanceof Array && b instanceof Array && a.length == b.length) {
            for ( var i=0 ; i < a.length ; i++ )
            {
               if (!compare( a[i], b[i] ))
                  return false;
            }
            return true;
         }
         else
            return false;
      }
   if (!process(compare(value,expected)))
      test( feature, value, expected, info );
}

function test_deep( feature, value, expected, info )
{
   test_deepish( feature, value, expected, info, function (x) { return x; } );
}

function test_deep_not( feature, value, expected, info )
{
   test_deepish( feature, value, expected, info, function (x) { return !x; } );
}

function testnot( feature, value, expected )
{
   var isok = typeof(value) == "number" && typeof(expected) == "number" && isNaN(value) && isNaN(expected)
      || value == expected;
   if (isok) {
      _tests_failed++;
      show( "*** FAILED while testing: " + _testcase + ": " + feature );
      showpre( "Got:      " + value + "\n" +
               "Unwanted: " + expected);
   }
   else
      _tests_passed++;
}

function ttrue( feature, value )
{
   if (!value) {
      _tests_failed++;
      show( "*** FAILED while testing: " + _testcase + ": " + feature );
      showpre( "Got:    " + value + "\n" +
               "Wanted: true");
   }
   else
      _tests_passed++;
}

function tdef( feature, value )
{
   if (value === undefined) {
      _tests_failed++;
      show( "*** FAILED while testing: " + _testcase + ": " + feature );
      show( "*** Not defined." );
      show( "" );
   }
   else
      _tests_passed++;
}

function tdef_expect_failure( feature, bugno, value )
{
   var isok = value !== undefined;
   if (!isok) {
      _tests_failed_as_expected++;
      show( "*** FAILED while testing: " + _testcase + ": " + feature );
      showblue( "*** Failure is expected; known bug #" + bugno );
      show( "*** Not defined." );
      show( "" );
   }
   else {
      _tests_failed++;
      show( "*** WARNING: a test that was expected to fail (bug) now succeeds." );
      show( "*** " + _testcase + ": " + feature );
      show( "*** Bug #" + bugno );
      show( "" );
   }
}

function conf( feature, msg )
{
   if (!confirm( msg ))
   {
      _tests_failed++;
      show( "*** FAILED while testing: " + _testcase + ": " + feature );
   }
   else
      _tests_passed++;
}

function testinstance( feature, a, b )
{
   if (!(a instanceof b)) {
      _tests_failed++;
      show( "*** FAILED while testing: " + _testcase + ": " + feature );
      show( "*** instanceof failed:" );
      show( "lhs: " + a );
      show( "rhs: " + b );
      show( "" );
   }
   else
      _tests_passed++;
}

function testinstance_expect_failure( feature, bugno, a, b )
{
   if (!(a instanceof b)) {
      _tests_failed_as_expected++;
      show( "*** FAILED while testing: " + _testcase + ": " + feature );
      showblue( "*** Failure is expected; known bug #" + bugno );
      show( "*** instanceof failed:" );
      show( "lhs: " + a );
      show( "rhs: " + b );
      show( "" );
   }
   else
   {
      _tests_failed++;
      show( "*** WARNING: a test that was expected to fail (bug) now succeeds." );
      show( "*** " + _testcase + ": " + feature );
      show( "*** Bug #" + bugno );
      show( "" );
   }
}

function testnotinstance( feature, a, b )
{
   if (a instanceof b) {
      _tests_failed++;
      show( "*** FAILED while testing: " + _testcase + ": " + feature );
      show( "*** instanceof succeeded:" );
      show( "lhs: " + a );
      show( "rhs: " + b );
      show( "" );
   }
   else
      _tests_passed++;
}

function showfailure( feature, explanation )
{
   _tests_failed++;
   show( "*** FAILED while testing: " + _testcase + ": " + feature );
   show( "*** " + explanation );
   show( "" );
}

function showfailure_with_values( feature, got, expected )
{
   _tests_failed++;
   show( "*** FAILED while testing: " + _testcase + ": " + feature );
      showpre( "Got:    " + value + "\n" +
               "Wanted: " + exptected);
}

// Like test, but converts arguments to string before testing.  Useful for
// comparing complex objects that do not have a simple equality test.

function test_s( tc, got, wanted )
{
   test( tc, got.toString(), wanted.toString() );
}

function expect_DOM_exception( desc, num, fn, info )
{
  var ex=false;
  try { fn(); }
  catch (e) 
  {
    ex=true;
    test( desc + ': exception code', e.code, num );
  }
  if (!ex)
    test( desc, 'no exception', 'DOM exception number ' + num, info );
}

function expect_exception( desc, type, fn )
{
   var ex=false;
   try { fn(); }
   catch (e) 
   {
      ex=true;
      testinstance( desc + ': exception', e, type );
   }
   if (!ex)
      test( desc, 'no exception', 'exception of type ' + (new type()).name );
}

function expect_exception_but_expect_failure( desc, bug, type, fn )
{
   var ex=false;
   try { fn(); }
   catch (e) 
   {
      ex=true;
      testinstance( desc + ': exception', e, type );
   }
   test_expect_failure( desc, bug, 'no exception', ex ? 'no exception' : 'exception of type ' + (new type()).name );
}

function expect_exception_value( desc, value, fn )
{
   var ex = false;

   try { fn(); }
   catch (e) 
   {
      ex=true;
      test_deep( desc, e, value );
   }
   if (!ex)
      test( desc, 'no exception', 'exception of type ' + (new type()).name );
}

// Allow some things to happen.  Use sparingly; this is a hack and using
// it masks some bugs.
function surrender_timeslice()
{
   document.write( '<span> </span>' );
}

function epsclose( a, b )
{
   // Return true if difference is very small.
   return Math.abs(1 - (a/b)) < 1.0e-15;
}

// Like test but uses epsclose instead of absolute equality

function test_close( feature, value, expected )
{
   var isok = typeof(value) == "number" && typeof(expected) == "number" && isNaN(value) && isNaN(expected)
      || epsclose(value,expected);
   if (!isok) {
      _tests_failed++;
      show( "*** FAILED while testing: " + _testcase + ": " + feature );
      showpre( "Got:    " + value + "\n" +
               "Wanted: " + expected);
   }
   else
      _tests_passed++;
}

function spoofingExplorer()
{
   return navigator.appName == "Microsoft Internet Explorer";
}

function spoofingNavigator()
{
   return navigator.appName == "Netscape";
}

function spoofingOpera()
{
   return navigator.appName == "Opera";
}

function isMozilla()  // Test whether tests are actually being run *in* Mozilla
{
   return navigator.userAgent.indexOf("Mozilla/5.0") != -1 && 
      navigator.userAgent.indexOf("rv:") != -1 &&
      navigator.userAgent.indexOf("Opera") == -1;
}

function isExplorer()  // Test whether tests are actually being run *in* Explorer
{
   return (navigator.appName == "Microsoft Internet Explorer" &&
           navigator.userAgent.indexOf("Opera") == -1);
}

function isNegativeZero( x )
{
   return x.toString().charAt(0) == "-";
}

function isPositiveZero( x )
{
   return x.toString().charAt(0) != "-";
}

function strip( x )
{
   return x.replace(/^\s+/g,"").replace(/\s+$/g,"");
}

function testmodule( info, cvs )
{
   _testmodule = info;
   showred( "Module: " + info );
   showred( cvs );
   showred( "" );
}

function testcase( info )
{
   _testcase = info;
}

function exception( e, info )
{
   _tests_failed++;
   show( "*** FAILED while testing: " + _testcase + ": exception" );
   if (info)
      show( "*** " + info );
   show( "*** " + e );
   show( "" );
}

function testmodule_finished()
{
   _testmodule = _testmodule_unknown;
   _testcase = _testcase_unknown;

   if (_tests_passed + _tests_failed + _tests_failed_as_expected > 0)
     pass_rate = Math.floor(_tests_passed*100 / (_tests_passed + _tests_failed + _tests_failed_as_expected));
   else
     pass_rate = 100;

   showred( "Passed: " + _tests_passed + 
            ", Failed: " + (_tests_failed + _tests_failed_as_expected) + 
            ", Pass rate: " + pass_rate + "%" );
   if (_tests_failed > 0)
      showred("<b>*** NOTE: " + _tests_failed + " unexpected failures!</b>");

   showred( "Done!" );

    if (_test_window_opener && _test_window_opener._autorun_updateTestResult)
    {
		_test_window_opener._autorun_updateTestResult( _tests_passed, _tests_failed, _tests_failed_as_expected );
		if (_tests_failed == 0) 
			_test_self.close();
		else
			_test_self.blur();
    }
}

function _autorun_inherit_opener()
{
	_test_window_opener = self.opener._test_window_opener;
}

function _autorun_openwin(a,b)
{
    if (_test_window_opener && _test_window_opener._autorun.openwindows)
	{
        _test_window_opener._autorun.openwindows.push(window.open( a,b));
	}
	else
	{
        window.open(a,b);
	}
	
}

// Handy
function setcookie( name, value, domain, path, delta_expiry_s )
{
   function fmt_date( d ) 
      {
         function d2( n ) 
            {
               return (n+100).toString().substring( 1, 3 );
            }
   
         var dayname = 
            ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ][ d.getDay()];
         var monthname =
            [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ][ d.getMonth() ];
         return dayname + ", " 
            + d.getDate() + "-" + monthname + "-" + d.getFullYear() 
            + " " 
            + d2(d.getHours()) + ":" + d2(d.getMinutes()) + ":" +d2(d.getSeconds())
            + " GMT";
      }
   var c;
   var d = new Date();
   if (delta_expiry_s !== false)
      d.setTime( d.getTime() + delta_expiry_s*1000 );
   document.cookie=
      c = name + "=" + value 
      + (domain ? ";Domain=" + domain : "")
      + (path ? ";Path=" + path : "")
      + (delta_expiry_s !== false ? ";Expires=" + fmt_date( d ) : "")
      document.cookie = c;
   return c;
}

/***************************************************
 *
 *     Methods added by torstein@opera.com 
 *
 ***************************************************/

function print( str )
{
   show( str );
}

function setTestCase( tc )
{
   testcase( tc );
}

function printHeader( str, cvs )
{
   testmodule( str, cvs );
}

function printSubTitle( str )
{
   show( '<span class="red" style="font-size: 0.8em;">' + str + '</span>' );
}

function printTail()
{
   testmodule_finished();
}

function supportedProperty( feature, value )
{
   tdef( feature, value );
}
      
function testProperty( feature, value )
{
   tdef( feature, value );
}

function notSupported( str, js_version, bugno )
{
   print( '<div class="notsupported">' );
   print( '   ' + str + ' is not defined in ECMAScript 262, but is listed in JavaScript ' + js_version );
   if (bugno)
      showblue( "*** Failure is expected; known bug #" + bugno );
   print( '</div>' );
   _tests_failed_as_expected++;
}


function printCode( str )
{
   print( '<span class="code">' + str + '</span>' );
}

function methodException( method, msg, error )
{
   print( '<strong>' + method + '</strong> exception' );
   print( msg );
   print( '<pre>' + error + '</pre>' );
}

function copyArray( inputArray )
{
   try 
   {
      var returnArray = new Array( inputArray.length );

      for( var i = 0; i < inputArray.length; i++ ) 
      {
         returnArray[ i ] = inputArray[ i ];
      }

      return returnArray;
   }
   catch( e )
   {
      except( e );
   }
}

/*
   Takes away all whitespace, but leave one space, to
   presevere words
*/
function removeWhiteSpace( s )
{
   /*
      Better: treats whole text as one long string, messus up
      everything in Opera 7, 2072, thus commented out here.

      return s.replace( /\s/sg," " )
   */
   return s.replace( /\s/g," " ) 
}

/*** converts '<' and '>' to HTML entities ***/
function convertTags( str )
{
   var re = /\</gi;
   var re2 = /\>/gi;

   str = str.replace( re, '&lt;' ) ;
   str = str.replace( re2, '&gt;' );

   return str;
}

// Added by tord

function isDefined( feature )
{
   return (feature != undefined);
}

function testOut(condition, feature)
{
   if(!condition)
   {
      show( "*** FAILED while testing: " + _testcase + ": " + feature );
      show( "" );
      _tests_failed++;
   }
   else
      _tests_passed++;
}

function test_insensitive( feature, value, expected, info )
{
   test(feature,
        value.toString().toUpperCase(),expected.toString().toUpperCase(),info);
}

function getEventHandlerSource( n )
{
   if( isExplorer() )
   {
      return "function anonymous() { void(" + n + ") }";
   }
   else
   {
      return "function anonymous(event) { void(" + n + "); }";
   }
}

/* Usage: var tprop = make_tprop( object );
 *
 * This returns a function on 'object' that can be used to test
 * the existence and types of properties on the object.  For
 * example,
 *
 *   var tprop = make_tprop( document );
 *   tprop( 'frames', 'collection' );
 *   tprop( 'title', 'object' );
 */
function make_tprop( d )
{
   return function ( p, t )
      {
         tdef( p + ' #1', d[p] );
         if (d[p] !== undefined)
         {
            if (t == 'collection')
            {
               if (isMozilla() || isExplorer())
                  test( p + ' #2', typeof(d[p]), "object" );
               else
               {
                  test( p + ' #2', typeof(d[p]), "function" );
                  test( p + ' #3', d[p] + "", "[object HTMLCollection]" );
               }
            }
            else
               test( p + ' #2', typeof(d[p]), t );
         }
      }
}

/*  Usage: <textarea onselect="reportEvent( 'onselect' );">

Note: shouldn't actually need the if test and the variable
declaration, but Opera replaces the contents of the window otherwise,
instead of adding the new messages to the window as Mozilla/NS does.

(Lars thinks that sounds like a bug!)
*/
function reportEvent( event )
{
   if( _test_msgwin == undefined )
   {
      _test_msgwin = window.open( '', 'message window', 'width=200,height=400,scrollbars=yes' );
   }

   _test_msgwin.document.write( event + " triggered" + "<br>" );
}

