/* -*- mode: c++; tab-width: 4 -*-
 *
 * Copyright 1995-2002 Opera Software ANS
 *
 * ECMAScript autotest framework.
 * $Id: testbase.js 76960 2010-08-23 13:49:42Z anderso $
 *
 * Fixme: this is a bit out of control now.
 */

document.writeln("<script type=\"text/javascript\" src=\"../testconfig.js\" > </script>");

var _test_ID = "$Id: testbase.js 76960 2010-08-23 13:49:42Z anderso $"

var _testmodule_unknown = "*** MODULE UNKNOWN ***";
var _testcase_unknown = "*** CASE UNKNOWN ***";
var _testmodule = _testmodule_unknown;
var _testcase = _testcase_unknown;
var _tests_passed = 0;
var _tests_failed = 0;
var _tests_failed_as_expected = 0;
var _test_msgwin = null;
var _test_window_opener=window.opener;  // So that tests that change window.opener will autorun
var _test_self=self;			// Ditto for window.self
var _test_isopera=null;         // cached value, initialized by isOpera() below
var _test_isbytecoded=null;     // cached value, initialized by isBytecoded() below
var _test_decompilerRemoved=null; // cached value, initialized by decompilerRemoved() below
var _all_test_results={}; // Will keep track of all results

/*  we want it to be possible to run the test in an IFRAME.
_test_window_opener should point to the window object tests should be reported to.
If top.opener exists, we are running in a popup window, else if top != self we are running in IFRAME
*/
if(top.opener){
	_test_window_opener=top.opener;
}else if( top!=self ){
	_test_window_opener=top;
}


/*
   Not all versions of Opera has the
   DOMException object, thus the variables below.
   0 is from EventException, 1-15 are from DOMException.
*/
var dom_unspecified_event_type_err = 0;
var dom_index_size_err = 1;
var dom_domstring_size_err = 2;
var dom_hierarchy_request_err = 3;
var dom_wrong_document_err = 4;
var dom_invalid_character_err = 5;
var dom_no_data_allowed_err = 6;
var dom_no_modification_allowed_err = 7;
var dom_not_found_err = 8;
var dom_not_supported_err = 9;
var dom_inuse_attribute_err = 10;
var dom_invalid_state_err = 11;
var dom_syntax_err = 12;
var dom_invalid_modification_err = 13;
var dom_namespace_err = 14;
var dom_invalid_access_err = 15;

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
    document.writeln( msg + '<br>' );
}

function showgreen( msg )
{
	show( '<font color=green>' + msg + '</font>' );
}

function showred( msg )
{
	show( '<font color=red>' + msg + '</font>' );
}

function showblue( msg )
{
    show( '<font color=blue>' + msg + '</font>' );
}

function registerResult( feature, passed, value, expected, info ){
	/**
	* Called from test* functions to
		- update global variables listing tests and results
		- write result to page if required
		- write INPUT if required (SPARTAN mode)
	*/

	_all_test_results[  _testcase +': '+feature  ] = passed; // Stores result

	// updates passed / failed counts
	if( ! passed ){
		_tests_failed++;
	}else{
		_tests_passed++;
	}
	// Show result in page. If "prettyprint", list all results..
	if($$mode=='PRETTYPRINT')
	{
		outputResult((passed?'pass':'fail'), "", feature, value, expected, info, "");
	}
	else if ($$mode == 'ART') // if in SPARTAN, just add INPUT elements..
	{
		// replace double quotes in testcase name because they can close attribute prematurely
		document.writeln('<input name="jstests[]" value="'+ (_testcase + ": " + feature).replace(/"/g,"'") +'">');
	}else if( !passed ) // otherwise report failures only ("developer mode")
	{
		show( "*** FAILED while testing: " + _testcase + ": " + feature );
		show( '<pre>Got:    ' + value );
		show( 'Wanted: ' + expected );
		if (info)
			show( 'Info:   ' + info );
		show( '</pre>' );
	}

}

// info is optional
function test( feature, value, expected, info )
{
    var isok = typeof(value) == "number" && typeof(expected) == "number" && isNaN(value) && isNaN(expected)
		|| value == expected;

    registerResult( feature, isok, value, expected, info );

    return isok;
}

function test_expect_failure( feature, bugno, value, expected, info )
{
    var isok = typeof(value) == "number" && typeof(expected) == "number" && isNaN(value) && isNaN(expected)
		|| value == expected;

    registerResult( feature, isok, value, expected, info+' bug '+bugno );

}

function test_spaceagnostic( feature, value, expected, info )
{
    if(value != undefined)
		test( feature, removeWhiteSpace(value), removeWhiteSpace(expected), info );
}

function test_deepish( feature, value, expected, info, process )
{
    function compare( a, b ) {
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

    registerResult( feature, isok, value, expected, '' );

}

function ttrue( feature, value )
{
    registerResult( feature, value, value, true, '' );
}

function tdef( feature, value, info )
{
    registerResult( feature, ! (value===undefined) , value, ' [expected to be defined]', info);

}

function tdef_expect_failure( feature, bugno, value )
{
    tdef(feature, value, 'bug #'+bugno);
}

function conf( feature, msg, info )
{
    var isok=confirm( msg );
    registerResult( feature, isok, isok, '[expected OK from tester]', info );

}

function conf_expect_failure( feature, msg, bugno )
{
    conf(feature, msg, 'bug #'+bugno);

}

function testinstance( feature, a, b, info)
{
    var isok=a instanceof b?true:false;
    registerResult( feature, isok, isok, true, info );

}

function testinstance_expect_failure( feature, bugno, a, b )
{
    testinstance( feature, a, b, 'bug #'+bugno );
}

function testnotinstance( feature, a, b, info )
{
    var isok = ! (a instanceof b) ;
    registerResult( feature, isok, isok, true, info);
}

function showfailure( feature, explanation )
{
   registerResult( feature, false, '', '', explanation );
}

function showfailure_with_values( feature, got, expected )
{
   registerResult( feature, false, got, expected, '' );
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

function expect_DOM_exception_failure( desc, bugNo, num, fn, info )
{
    var ex=false;
    try { fn(); }
    catch (e)
    {
		ex=true;
		test_expect_failure( desc + ': exception code', bugNo, e.code, num );
    }
    if (!ex)
		test_expect_failure( desc, bugNo, 'no exception', 'DOM exception number ' + num, info );
}

/*
   Just like expect_failure(), except that it takes a function, fn,
   as its third argument instead of a value.

   usage:
   expect_failure_exception( "we shouldn't get an exception here", "82200",
                             function()
                             {
                                var foo = "bar";
                                return foo;
                             },
                             "bar" );
*/
function expect_failure_exception( desc, bugno, fn )
{
    var isok=false;
    try
    {
		value = fn();
		isok=true;
    }
    catch( e )
    {
    }
    registerResult( desc, isok, isok, true, 'bug #'+bugno );
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
    registerResult( feature, isok, value, expected, '' );
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
		!window.opera;
}

function isExplorer()  // Test whether tests are actually being run *in* Explorer
{
    return navigator.appName == "Microsoft Internet Explorer" && !window.opera;
}

function isOpera( version_at_least )
{
    if (_test_isopera === null)
    {
        if (!window.opera)
			_test_isopera = false;
		else
		if (version_at_least)
		{
			// userAgent contains substring "Opera xx.yy", which is the most reliable way of
			// getting the version number; navigator.appVersion returns something completely
			// strange.
			_test_isopera = (version_at_least <= parseFloat( navigator.userAgent.substring( navigator.userAgent.indexOf("Opera") + 6 ) ));
		}
		else
			return _test_isopera = true;
	}
	return _test_isopera;
}

// Returns true if the decompiler returns [bytecode ...] for a compiled function
// body; reduces noise during test suite running.
function isBytecoded()
{
	if (_test_isbytecoded === null)
	{
		if (isOpera())
		{
			var f = (function(){return 37;}).toString();
			/* The trick: in a release build, the bytecode instructions are not shown,
			   so "return" should not be visible at all, and in a debug build, the
			   instructions are disassembled all-uppercase, so it should say "RETURN".
			   Furthermore the string "return" does not occur as literal or variable
			   name.  Finally, in a non-bytecoded build the string "return" must be
			   present (unless decompilation is disabled, in which case, refine this!). */
			_test_isbytecoded = (f.indexOf("[bytecode") != -1 && f.indexOf("return") == -1) ||
	  			                (f.indexOf("FUNCTION") != -1 && f.indexOf("NOP") != -1);
		}
		else
			_test_isbytecoded = false;
	}
	return _test_isbytecoded;
}

// Returns true if the decompiler returns text containing [ECMAScript code] for
// a compiled function body; reduced noise during test suite running.
function decompilerRemoved()
{
	if (_test_decompilerRemoved === null)
	{
		if (isOpera())
		{
			var f = (function(){return 37;}).toString();
			_test_decompilerRemoved = (f.toLowerCase().indexOf( "ecmascript code]" ) != -1);
		}
		else
			_test_decompilerRemoved = false;
	}
	return _test_decompilerRemoved;
}

function isNegativeZero( x )
{
    // This is wrong, see 9.8.1:
    // return x.toString().charAt(0) == "-";

    // This is right, but ... complicated
    return x == 0.0 && Math.atan2 ( x, Number.NEGATIVE_INFINITY ) == -Math.PI;
}

function isPositiveZero( x )
{
    // This is wrong, see 9.8.1:
    //return x.toString().charAt(0) != "-";

    // This is right, but ... complicated
    return x == 0.0 && Math.atan2 ( x, Number.NEGATIVE_INFINITY ) == Math.PI;
}

function strip( x )
{
    return x.replace(/^\s+/g,"").replace(/\s+$/g,"");
}

function testmodule( info, cvs )
{
    _testmodule = info;
    showgreen( "Module: " + info );
    showgreen( cvs );
	showgreen( "Result: <font id='testsuite_results' color=green></font>" );
    showgreen( "" );
	if ($$mode == 'ART'){
		
		//===================================================================
		// JSPOSTPORT LOCALHOST FIX   				     anderso
		//
		// All js-calls to localhost must be configurable regarding portnumber.
		// Url-parameter 'jspostport=' is read from url, this is required to run js tests in parallell.
		//
		//===================================================================
		var jspostport	= 80;
		if( typeof top!='undefined' && top.location && top.location.search.match(/jspostport=(\w*)/) ){ jspostport=RegExp.$1; }

		document.writeln('<form action="http://localhost:' + jspostport + '/" method="post">');
	}
}

function testcase( info )
{
    _testcase = info;
}

function exception( e, info )
{
    registerResult( '', false, '', '[UNEXPECTED EXCEPTION]', info );
    _tests_failed++;
}

function testmodule_finished()
{
    _testmodule = _testmodule_unknown;
    _testcase = _testcase_unknown;

    if (_tests_passed + _tests_failed + _tests_failed_as_expected > 0)
      pass_rate = Math.floor(_tests_passed*100 / (_tests_passed + _tests_failed + _tests_failed_as_expected));
    else
      pass_rate = 100;

    showgreen( "Passed: " + _tests_passed +
			   ", Failed: " + (_tests_failed + _tests_failed_as_expected) +
  	           ", Pass rate: " + pass_rate + "%" );
    if (_tests_failed > 0)
		showred("<b>*** NOTE: " + _tests_failed + " unexpected failure" + (_tests_failed > 1 ? "s" : "") + "!</b>");

    showgreen( "Done!" );

	var result = document.getElementById('testsuite_results');
	if (result)
	{
		result.innerHTML = "<b>Passed: " + _tests_passed + ", Unexpected failures: " + _tests_failed + "</b>";
	if (_tests_failed > 0)
		result.color = 'red';
	}
    if (_test_window_opener && _test_window_opener._autorun_updateTestResult)
    {
		_test_window_opener._autorun_updateTestResult( _tests_passed, _tests_failed, _tests_failed_as_expected, _all_test_results );
		if (_tests_failed == 0)
			_test_self.close();
		else
			_test_self.blur();
    }

	if ($$mode == 'ART')
	{
		document.forms[0].submit();
	}
	else if ($$mode == 'PRETTYPRINT')
	{
		// Add style link
		if( document.createElement && document.getElementsByTagName && document.getElementsByTagName('head').length )
		{
			var lnk = document.createElement('link');
			lnk.setAttribute('href', '../regression-lib/testsuite.css');
			lnk.setAttribute('rel', 'stylesheet');
			document.getElementsByTagName('head')[0].appendChild(lnk);
		}
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


/* When using this, remember that cookies cannot be set on pages loaded
   from file: URLs, so you must test through a webserver.
   */
function setcookie( name, value, domain, path, delta_expiry_s )
{
    function fmt_date( d ) {
		function d2( n ) {
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
    c = name + "=" + value +
		(domain ? ";Domain=" + domain : "") +
		(path ? ";Path=" + path : "") +
		(delta_expiry_s !== false ? ";Expires=" + fmt_date( d ) : "") ;
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
    registerResult(str, false, '', '', str + ' is not defined in ECMAScript 262, but is listed in JavaScript ' + js_version );
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
			if( inputArray[ i ] )
				returnArray[ i ] = inputArray[ i ];

		}

		return returnArray;
    }
    catch( e )
    {
		except( e );
    }
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
		if ($$mode == 'ART')
			document.writeln('<input name="jstests[]" value="'+ (_testcase + ": " + feature).replace(/"/g,"'") +'">');
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
    if(decompilerRemoved()){
	return '[ecmascript code]' ; /* correct as of May 2007. Hallvord */
    }else{
	    if( isExplorer() )
	    {
			return "function anonymous() { void(" + n + ") }";
	    }
	    else
	    {
		return 'function(event){void('+n+');}';

	    }
    }
}

/* Usage: var tprop = make_tprop( object );
 *
 * This returns a function on 'object' that can be used to test
 * the existence and types of properties on the object.  For
 * example,
 *
 *   var tprop = make_tprop( document );
 *   tprop( 'frames', 'collection' );     // [object HTMLCollection]
 *   tprop( 'fisk', 'elementarray' );     // [object ElementArray]
 *   tprop( 'zapp', 'optionarray'         // [object OptionArray]
 *   tprop( 'title', 'object' );
 *   tprop( 'title', 'object', 89666, 99000 );  // bug number 89666 if not defined, 99000 otherwise
 */
function make_tprop( d )
{
    return function ( p, t, info1, info2 ) {
		function testit( a, b, c ) {
			if (info2 !== undefined)
				test_expect_failure( a, info2, b, c );
			else
				test( a, b, c );
		}

		function tdefit( a, b ) {
			if (info1 !== undefined)
				tdef_expect_failure( a, info1, b );
			else
				tdef( a, b );
		}

		tdefit( p + ' #1', d[p] );
		if (d[p] !== undefined)
		{
			if (t == 'collection' || t == 'elementarray' || t == 'optionarray')
			{
				if (isMozilla() || isExplorer())
					testit( p + ' #2', typeof(d[p]), "object" );
				else
				{
					testit( p + ' #2', typeof(d[p]), "function" );
					if (t == 'elementarray')
						testit( p + ' #3', d[p] + "", "[object ElementArray]" );
					else if (t == 'optionarray')
						testit( p + ' #3', d[p] + "", "[object OptionArray]" );
					else
						testit( p + ' #3', d[p] + "", "[object HTMLCollection]" );
				}
			}
			else
				testit( p + ' #2', typeof(d[p]), t );
		}
	}
}

/*  Usage: <textarea onselect="reportEvent( 'onselect' );">

Note: shouldn't actually need the if test and the variable
declaration, but Opera replaces the contents of the window otherwise,
instead of adding the new messages to the window as Mozilla/NS does.

(Lars thinks that sounds like a bug!)
*/
var _eventno = 0;

function reportEvent( event )
{
    if (isExplorer()) // Doesn't work in MSIE 5  --lars
		return;

    if( !_test_msgwin )
    {
		_test_msgwin = window.open( '', 'message window', 'width=200,height=400,scrollbars=yes' );
    }

	var ev = ++_eventno + ': ' + event + " triggered";
//    alert( ev );
	_test_msgwin.document.writeln( "<p>" + ev + "</p>");
}

/* This is probably OK but not right for Opera
function removeWhiteSpace(s)
{
  return s.replace( /\s+/g, " " ).replace( /^\s+|\s+$/g, "" );
}
*/

/* This is more complicated but known to work many places */

function removeWhiteSpace(s)
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
				c += ''; /* used to add a space. not as agnostic as you might prefer in some cases,
				               and caused bogus failures in es-regression/operators.html. Hallvord */
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

    return midstrip(endstrip(frontstrip(s)));
}

// Functions that are useful when dealing with multiple windows.

// Spin for some milliseconds.
function sleep( ms )
{
    if (!isOpera())
    {
		alert( "Waiting.  Press OK." );
		return;
    }
    var now = new Date();
    do {
		for ( var i=0 ; i < 1000 ; i++ )
			;
    } while ( (new Date().getTime() - now.getTime()) < ms );
}

// Spin until predicate() returns true.
function wait_until( predicate )
{
    if (!isOpera())
    {
		while (!predicate())
			alert( "Waiting.  Press OK." );
    }
    else
    {
		while (!predicate())
			;
    }
}

var window_can_open = false;

function init_test_window_open()
{
    win = window.open();
	win.close();
	window_can_open = true;
}

// These two functions must be called from separate scripts

function exit_test_window_open()
{
  	if(!window_can_open)
	  show("Popup windows must be enabled to run these tests.");
}


// start prettyprint (stolen from Brian)

/* Default output globals */
var _OutFormat ="table";      // Output format for test results
var _TestCount = 0;           // Previous test number.
var _TestHeadWritten = false; // Test to see if testhead must be (re)written
var resultDoc = document;     // Where to output test results
var debugDoc = document; 	   // Where to output debug code
var oStart, oSep, oEnd;       // output line syntax. Typically variant of "<tr><td>", "</td><td>" and "</td></tr>"


function entify(s) {return s.replace(/</g,"&lt;");} // Ad hoc to escape '<', later maybe more

function makeText(text, elt, textClass){ // Make element with class, default element 'p', default class 'info'
	if (!textClass) textClass = "info";
	if (!elt) elt = "p";
	return "<" + elt + ' class="' + textClass + '">' + text + "</" + elt + ">";
}

function makeWarning(warnText, warnElt){ // creates warningString. Convenience function
	return makeText(warnText, warnElt, "warning");
}

function outCode(code){resultDoc.writeln(code);}             // prints arbitrary code
function debugCode(code){debugDoc.writeln(code);}            // prints arbitrary code to debug window
function outCodeBr(code){resultDoc.writeln(code, "<br />");} // plus <br />

function outLine()
{
    //Prints a formatted line
	var line;

    // var line = arguments.join(oSep); Only supported in Opera 7
	line = arguments[0];
	for (var i = 1; i < arguments.length-1; i++)
		line += oSep + arguments[i];

	resultDoc.writeln(oStart, line, oEnd);
}

function outputResult(status, format, feature, value, expected, info)
{
	/* Outputs test results depending on global parameter _OutFormat
	   status: Test result. Currently one of 'pass' | 'fail'
	   format: Not currently used
	   feature: Feature description
	   value: Evaluated test return value
	   expected: Expected test return value
	   info: Extra info

	*/

	if (!_TestHeadWritten) outputTestHead();

	_TestCount++;
	info = (info ? info : "&#160;");
	oStart = '<tr id="test-' + _TestCount + '" class="' + status + '"><td>';
	oSep = "</td><td>";
	oEnd = "</td></tr>";
	var testNumber = "Test&#160;" + _TestCount;

	outLine(testNumber,feature,value,expected,status,info);

}

function outputTestHead() { //Write table head unless already written
    outCode('<form name=rsltform>Results:<br><input type=text name=outresult size=40></form>\n' +
        '<table class="testresults" border="1" cellspacing="0" cellpadding="3">');

    oStart = "<tr><th ";
	oSep = "</th><th ";
	oEnd = "</th></tr>";
    outLine('class="testno">Test #','class="feature">Feature', 'class="return">Value', 'class="expect">Expected', 'class="ok">Result', 'class="rem">Remarks')
    _TestHeadWritten = true;
}

function outputFinish(){ // Close the current section
	if (_OutFormat="table")
	{
		resultDoc.writeln("</table>");
	}
	_TestHeadWritten = false; // Any further tests must write a new test head
}

// end prettyprint

/* eof */
