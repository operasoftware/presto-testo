/* -*- mode: c++; tab-width: 4; c-file-style: "bsd" -*- 
 *
 * Copyright (C) 2001-2002 Opera Software ASA.  All rights reserved.
 */

// pattern is a regexp or a string
// input is a string
// start is initial match position
// loc is expected location of match
// expected is the expected output array
// flags is an optional string of flags
// names is an optional object mapping submatch symbols to expected values
//
// if pattern is a string and start != 0 then 'g' is added to 
// the flags (unless 'g' is in flags :-)

function re_test( pattern, input, start, loc, expected, flags, names )
{
    var result;

	// Hack, hack, hack.
    function fail()
    {
		var nexpected=new Array();
		if (expected)
			for ( var i=0 ; i < expected.length ; i++ )
				nexpected[i] = (expected[i] === null ? "*NULL*" : expected[i]);
		showfailure_with_values( 'RegExp.exec #1 on ' + re + ' and ' + input, 
								 result + elaborate(result),
								 nexpected + deconstruct() );
    }

	function elaborate(r) {
		if (r == null)
			return "";
		
		var s = "  with properties {";
		var k = 0;
		for ( var n in r ) {
			if (Number(n) != n && n != "input" && n != "index") {
				s = s + "\"" + n + "\" : \"" + r[n] + "\", ";
				++k;
			}
		}
		s += "}";
		return k > 0 ? s : "";
	}

	function deconstruct() {
		if (!names)
			return "";

		var s = "  with names {";
		for ( var n in names )
			s = s + "\"" + n + "\" : \"" + names[n] + "\", ";
		return s + "}";
	}

	function succeed()
	{
		_tests_passed++;
    }

    try 
	{
		var re, dollars;
		if (pattern instanceof RegExp)
			re = pattern;
		else
		{
			if (flags === undefined)
				flags = '';
			if ((start != 0 || loc != -1) && flags.indexOf('g') == -1)
				flags += 'g';
			re = new RegExp(pattern,flags);
		}

		if (start != 0)
			re.lastIndex=start;
		for ( i=1 ; i < 10 ; i++ )
			RegExp["$"+i] = "*FOO*";  // Just to catch errors
		result = re.exec(input);
		dollars = [ RegExp.$1, RegExp.$2, RegExp.$3, RegExp.$4, RegExp.$5,
				    RegExp.$6, RegExp.$7, RegExp.$8, RegExp.$9 ];
		if (expected === null && result === null)
			succeed();
		else if (expected === null || result === null)
			fail();
		else if (expected.length != result.length)
			fail();
		else
		{
			for ( var i=0 ; i < expected.length && expected[i] === result[i] ; i++ )
				;
			if (i < expected.length)
				fail();

			if (names)
				for ( var n in names )
					if (result[n] != names[n])
						fail();

			succeed();
		}

		// Test that the regexp is updated appropriately
		if (re.global && expected !== null)
			test( "RegExp.exec #2 on " + re + ' and ' + input, re.lastIndex, loc+expected[0].length );

		// Test that the result has the required attributes
		if (result !== null)
		{
			test( "RegExp exec #3 on"  + re + ' and ' + input, result.index, loc );
			test( "RegExp exec #4 on"  + re + ' and ' + input, result.input, input );
		}

		// Test that the global $1 .. $9 were set correctly
		if (result !== null)
		{
			// Temporary interpretation of the meaning of $1..$9: these are always strings,
			// and if the match returns undefined for a submatch then the corresponding $n
			// is the empty string.  Need to check that this is compatible.
			for ( i=1 ; i < Math.min(result.length,10) ; i++ )
				test( "RegExp exec #5 ($" + i + ") on"  + re + ' and ' + input, 
					  dollars[i-1], 
					  result[i] ? result[i] : "" );
		}
    }
    catch (e)
    {
		exception(e);
		show( 'Arguments: ' + arguments );
		_tests_failed++;
    }
}

