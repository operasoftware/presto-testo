/* -*- mode: c++; tab-width: 4; c-file-style: "bsd" -*- 
 *
 * Copyright (C) 2001-2002 Opera Software ASA.  All rights reserved.
 *
 * Testing the RegExp object in various ways, including regressions. 
 * Torstein Krause Johansen, Lars Thomas Hansen
 *
 * FIXME: would like to add more test cases on non-greedy matching, it's not 
 * being tested well 
 */

var cvs = "$Id: regExpTest.js 12979 2007-03-28 00:31:48Z hallvord $";

function main()
{
   try 
   {
      printHeader( "RegExp testsuite", cvs );

      setTestCase( 'Regexp creation' );                   testCreation();
      setTestCase( 'Miscellaneous regular expressions' ); testRegExps();
      setTestCase( 'Regexp regression testing' );         testRegression();

      printTail();
   }
   catch( e ) { exception( e ); }
}

function testCreation()
{
    var n=0;

    function testre( re ) {
		test( 'Creation #' + (++n), (re instanceof RegExp), true );
    }

    try 
	{
		// Does it drool?
		testre( new RegExp( "" ) );
		testre( /a/ );
		testre( new RegExp("a") );
		testre( /a|b/ );
		testre( new RegExp("a|b") );
		testre( /a|/ );
		testre( /|b/ );
		testre( new RegExp("|b") );
		testre( new RegExp("a|") );
		testre( /^[a-z]$/ );
		testre( new RegExp("^[a-z]$") );
		testre( /^[a-z-0]$/ );              // that is, a-z and - and 0
		testre( new RegExp("^[a-z-0]$") );

		var re;
        // Constructor
		re = /abra/;
		  test( "Constructor #1", new RegExp( re ).ignoreCase, false );
		  expect_exception( "Constructor #2", TypeError, function () { return new RegExp( re, "im" ) } );
          test_deep( "Constructor #3", (new RegExp( true, "i" )).exec( 'ABRATRUECADABRA' ), [ "TRUE" ] );
		  tdef( "Constructor #4", RegExp.prototype.constructor );
		  tdef( "Constructor #5", RegExp.prototype );
		  test( "Constructor #6", RegExp.prototype.constructor.length, 2 );
		  tdef( "Constructor #7", RegExp.prototype.exec );
		  tdef( "Constructor #8", RegExp.prototype.test );
		  tdef( "Constructor #9", RegExp.prototype.toString );
		  tdef( "Constructor #10", re.exec );
		  tdef( "Constructor #11", re.test );
		  tdef( "Constructor #12", re.toString );
		  test( "Constructor #13", new RegExp(new String("abra")).toString(), "/abra/" );
		  test( "Constructor #13", new RegExp(new String("abra"), new String("gi")).toString(), "/abra/gi" );

		// Compile
		re=/abra/;
		  test( "Compile #1", re.compile(), re );
		  test( "Compile #2", re.compile("zappa"), re );
		  test_deep( "Compile #3", re.exec("frankzappa"), ["zappa"] );
		  test( "Compile #4", re.compile(new String("moon")), re );
		  test_deep( "Compile #5", re.exec("moonunit"), ["moon"] );
		  test( "Compile #6", re.compile(new Boolean(true)), re );
		  test_deep( "Compile #7", re.exec("it is the true story"), ["true"] );
		  
		// Flags?
		re = /abra/g; 
          test( "Flags #1", re.global, true );
          test( "Flags #2", re.multiline, false );
          test( "Flags #3", re.ignoreCase, false );

		re = /abra/mi; 
          test( "Flags #4", re.global, false );
          test( "Flags #5", re.multiline, true );
          test( "Flags #6", re.ignoreCase, true );

		expect_exception( "Flags #7", SyntaxError, function () { eval( "/abra/gmig" ); } );
		expect_exception( "Flags #8", SyntaxError, function () { eval( "/abra/w" ); } );

		re = /abra/mi; 
		  test( "Source #1", re.source, "abra" );     // Flags order is g,i,m
		  test( "Source #2", re.toString(), "/abra/im" );

		re = /abra/mi; 
		  test( "lastIndex #1", re.lastIndex, 0 );

  	    var e = new Array();
		for ( var p in re )
			e[e.length] = p; 
		test( "enumeration across regex #1", e.length, 0 );  // ECMA-3 §15: attributes default to DontEnum

		if (! (isBytecoded() || decompilerRemoved() ))
		{
			test_spaceagnostic( 'Decompiling regex', (function () { /test[a-z]*$/im; }).toString(),
								'function () { /test[a-z]*$/im; }' );
		}
    }
    catch (e) { exception(e) }
}

function testRegExps()
{
   var woodpeckers = "ivory-billed\ndowny\nhairy\nacorn\nyellow-bellied sapsucker\nnorthern flicker\npileated\n";

   try 
   {
	   // Does it drool?
       re_test("a",new String("a"),0,0,["a"]);
       re_test("1",new Number(10),0,0,["1"]);
       re_test("ru",new Boolean(true),0,1,["ru"]);

	   // Serious stuff
       re_test("a","",0,-1,null);
       re_test("a","a",0,0,["a"]);
       re_test("a","bbbbbbb",0,-1,null);
       re_test("a","bbbbabb",0,4,["a"]);
       re_test("(?:a)","a",0,0,["a"]);
       re_test("(?:a)","bbbbabb",0,4,["a"]);
       re_test("(?:a)","bbbbbbb",0,-1,null);
       re_test("(?:ab(?:c|d|f))","123abcabdabf456",4,6,["abd"]);
       re_test("(?:ab(?:c|d|f))+","123abcabdabf456",4,6,["abdabf"]);
       re_test("a*bc","aaaaaaabcjunk",0,0,["aaaaaaabc"]);
       re_test("a*bc","xyzaaaaaaabcjunk",0,3,["aaaaaaabc"]);
       re_test("a?bc","xyzaaaaaaabcjunk",0,9,["abc"]);
       re_test("a{3}bc","xabcyzaaaaaaabcjunk",0,10,["aaabc"]);
       re_test("a{3,}bc","xabcyzaaaaaaabcjunk",0,6,["aaaaaaabc"]);
       re_test("a{3,5}aa","xabcyzaaaaaaabcjunk",0,6,["aaaaaaa"]);
       re_test("a{3,5}?aa","xabcyzaaaaaaabcjunk",0,6,["aaaaa"]);
       re_test("^abc","abcabc",0,0,["abc"]);
       re_test("^abc","abcabc",1,-1,null);
       re_test("^abc","abd\nabc",0,4,["abc"],'m');
       re_test("abc$","abcabc",0,3,["abc"]);
       re_test("abc$","abcabd",0,-1,null);
       re_test("abc$","abc\nabd",0,0,["abc"],'m');
       re_test("[a-zA-Z][a-zA-Z0-9]+\\B.f","123abcabdabg456 foo",4,-1,null);
       re_test("[a-zA-Z][a-zA-Z0-9]+\\B.f","123abcabdabf456 foo",4,4,["bcabdabf"]);
       re_test("[a-zA-Z][a-zA-Z0-9]+\\B.f","123abcabdabg456afoo",4,4,["bcabdabg456af"]);
       re_test("[a-zA-Z][a-zA-Z0-9]+\\b.f","123abcabdabg456 foo",4,4,["bcabdabg456 f"]);
       re_test("[a-zA-Z][a-zA-Z0-9]+\\b.f","123abcabdabg456afoo",4,-1,null);
       re_test("[a-k]+","ABC",0,0,["ABC"],'i');
       re_test("ø","ø",0,0,["ø"],'i');	// o-slash
       re_test("ø","Ø",0,0,["Ø"],'i');	// o-slash
       re_test("ø","Ø",0,0,null);	    // o-slash
       re_test("ñ","Ñ",0,0,["Ñ"],'i');	// tilde-n
       re_test("(?:\\d+)?do\\d+(?=.*,)\\w+","do100xyzzy=10,20",0,0,["do100xyzzy"]);
       re_test("(?:\\d+)?do\\d+(?=.*,)\\w+","do100xyzzy=10.20",0,-1,null);
       re_test("(?:\\d+)?do\\d+\\w+=\\d+,\\d+","do100xyzzy=10,20",0,0,["do100xyzzy=10,20"]);
       re_test("(?:\\d+)?do\\d+(?!.*,)\\w+","do100xyzzy=10.20",0,0,["do100xyzzy"]);
       re_test("(?:\\d+)?do\\d+(?!.*,)\\w+","do100xyzzy=10,20",0,-1,null);
       re_test("(?:\\d+)?do\\d+(?=.*\\.)\\w+","do100xyzzy=10.20",0,0,["do100xyzzy"]);

       re_test("(a*)","aaaaaaa",0,0,["aaaaaaa", "aaaaaaa"] );
       re_test("((a)|(ab))((c)|(bc))", "abc",0,0,["abc","a","a",,"bc",,"bc"]);
       re_test("(a{3})\\1","aaaaaaaa",0,0,["aaaaaa","aaa"]);
       re_test("(.*?)a(?!(a+)b\\2c)\\2(.*)","baaabaac",0,0,["baaabaac","ba",,"abaac"]);

	   re_test("(?:\\d+)?","do100xyzzy=10,20",0,0,[""]);
	   re_test("\\w?","@@@x",0,0,[""]);
	   re_test("ba+c", "baaac",0,0,["baaac"]);

       re_test( /bilbo/gi, "Bilbo, Gandalf", 0, 0, ["Bilbo"] );
       re_test( /(bilbo|pipin)/gi, "Bilbo, Gandalf, Aragorn, Pipin, Munti", 0, 0, ["Bilbo","Bilbo"] );
       re_test( /(bilbo|pipin)/gi, "Bilbo, Gandalf, Aragorn, Pipin, Munti", 2, 25, ["Pipin","Pipin"] );
       re_test( /((bilbo)|(pipin))/gi, "Bilbo, Gandalf, Aragorn, Pipin, Munti", 
	            2, 25, ["Pipin","Pipin",,"Pipin"] );
       re_test( /(\s*the\s*first)/gi, "   The first Bilbo, Gandalf, Aragorn, Pipin, Munti", 
	            0, 0, ["   The first", "   The first"] );
       re_test( /\s*([A-Z][aeiouy]\w)\d+/gi, "Dig2, diig, dug2, dow12", 0, 0, ["Dig2", "Dig"] );
       re_test( /\s+([A-Z][aeiouy]\w)\d+/gi, "Dig2, diig, dug2, dow12", 0, 11, [" dug2", "dug"] );
       re_test( /\w*(\d+\.[2-3]{1,3})/g, "d2.3 hello233 d2.332", 0, 0, [ "d2.3", "2.3" ] );
       re_test( /\w*(\d+\.[2-3]{1,3})/g, "d2.3 hello233 d2.332", 3, 14, [ "d2.332", "2.332" ] );
       re_test( /q(a|b)*q/, "xxqababqyy", 0, 2, ["qababq", "b"] );
       re_test( /(a(.|[^d])c)*/, "adcaxc", 0, 0, ["adcaxc", "axc", "x"] );
	   re_test( /((reg)+exp)/, "My regexp string", 0, 3, ["regexp","regexp","reg"] );
	   re_test( /((reg){0,2}?exp)/, "My regexp string", 0, 3, ["regexp","regexp","reg"] );

	   // Backtracking tests
	   re_test( /(ba)*bar/, "babababar", 0, 0, ["babababar", "ba"] );
	   re_test( /((ba)*(bar)*)bara/, "babababarbarbara", 0, 0, ["babababarbarbara","babababarbar","ba","bar"] );
	   re_test( /(.+)\1/, "XAXBXCXDXEXFXGXHXIXJXKX", 0, -1, null );
	   re_test( /(.+)\1/, "X=X=X=X=X=X=X==X=X=X=X", 0, 0, ["X=X=X=X=X=X=","X=X=X="] );
	   re_test( /((.)*)*X/, "==", 0, -1, null );

	   // Silly, but I found a bug with these
	   // Unary divide by 3 with remainder
	   re_test( /(.+)\1\1(.+)/, "XXXXXXXXXXX", 0, 0, ["XXXXXXXXXXX","XXX","XX"] );
	   // Unary divisible by 2, 3, 5, or 7?
	   re_test( /(^(.+)\2$)|(^(.+)\4\4$)|(^(.+)\6\6\6\6$)|(^(.+)\8\8\8\8\8\8$)/, 
	            "XXXXXXXXXXX", 0, 0, null );  // 11 is prime
	   re_test( /(^(.+)\2$)|(^(.+)\4\4$)|(^(.+)\6\6\6\6$)|(^(.+)\8\8\8\8\8\8$)/, 
	            "XXXXXXXXXXXXXXX", 0, 0, ["XXXXXXXXXXXXXXX",,,"XXXXXXXXXXXXXXX","XXXXX",,,,,] );  // 15 is 3*5

	   // Misc regressions and strange stuff
       re_test( /[d]$/mg, woodpeckers, 0, 11, ["d"] );
       re_test( /[d]$/g, woodpeckers, 0, -1, null );
       re_test( /\w*[d]$/gm, woodpeckers, 0, 6, ["billed"] );
       re_test( /[a-z-]*[d]$/gm, woodpeckers, 0, 0, ["ivory-billed"] );

	   /* Octal escapes: extension to ECMAScript or possibly defined in ECMAScript 2;
		* supported by Netscape.
	    *
		* Following paragraphs copied from Netscape ECMA-2 test suite:
		*
		*   If n is exactly 1 octal digit other than "0" and the octal value of n is
		*   less than or equal to the number of parenthesised subexpressions in the
		*   pattern, then \n is a backreference; otherwise \n is an octal value. For
		*   example, in the pattern "(.)\1", "\1" is a backreference. By contrast, in
		*   the pattern ".\1", "\1" is an octal value.
		*
		*   If n is [8-9], and the decimal value of n is less than or equal to the
		*   number of parenthesised subexpressions in the pattern, then \n is a
		*   backreference; otherwise \n is the literal character n. For example, in
		*   the pattern "(.)(.)(.)(.)(.)(.)(.)(.)\8", "\8" is a backreference. By
		*   contrast, in the pattern ".\8", "\8" is the character "8".
		*
		*   If the first digit is [0-3], the octal value may be 1, 2, or 3 digit long.
		*   For example, "\11" and "\011" both match "\t", while "\0111" matches "\t1".
		*   If the first digit is [4-7], the octal value may be 1 or 2 digits long.
		*   For example, "\44" matches "$", while "\444" matches"$4".
		*
		* Commentary on those: by the ECMAScript 3 standard, \11 is clearly a decimal
		* escape (denoting a decimal escape) and it seems unreasonable to interpret it
		* as an octal number.  Similarly, \8 has a reasonable interpretation as \x08
		* and \44 is not the same as \044 but rather the same as \x2C.
		*/
	   re_test( new RegExp( "\\061" ), "321", 0,2,["1"] );
	   re_test( /\061/, "321", 0,2,["1"] );
	   re_test( /.\1/, "A\x01",0,0,["A\x01"] );
	   re_test( /.\8/, "A8B\x08",0,2,["B\x08"] );

	   // Following test cases pilfered from Netscape ECMA-2 test suite but modified
	   re_test( /(.)(.)(.)(.)(.)(.)(.)(.)\8/, "aabbccaaabbbccc", 
	            0, 0, ["aabbccaaa", "a", "a", "b", "b", "c", "c", "a", "a"] );
	   re_test( /.......\8/, "aabbccaaa\x087654321", 0, 2, ["bbccaaa\x08"] );
	   re_test( /\9/, "\t12", 0, 0, ["\t"] );
	   re_test( /\011/, "\t12", 0, 0, ["\t"] );
	   re_test( /\0111/, "\t12", 0, 0, ["\t1"] );
	   re_test( /\44/, "123,456", 0, 3, [","] );
	   re_test( /\444/, "123,456", 0, 3, [",4"] );

	   // Regression test: the dash at the end of the set following what could be the start
	   // of a range.  It's not entirely clear to me that ECMA-262 sanctions this, but
	   // it's in the Netscape test suite.  Test pilfered from the Netscape ECMA-2 test suite.
       re_test( /[\D]{1,5}[\ -][\d]/gi, "ABRACADABRA-AB 7", 0, 9, ["RA-AB 7"] );

	   // Regression test from a bug report (that we did not fail in Opera7 but it's a nice expression,
	   // note the - at the end of the charset and many other finesses)
       var filter=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
	   test( "email address match #1", filter.test("lth-3@blackrabbit.cs.uoregon.edu"), true );
	   test( "email address match #2", filter.test("info-andrew+@andrew.cmu.edu"), false );  // Page author loses
	   test( "email address match #3", filter.test("lth@opera"), false );

       if (!isExplorer())  // IE barfs on these regexes
       {
		   re_test( "([0-9]+(?:\.[0-9]+)?).*?([0-9]+(?:\.[0-9]+)?)", 
					"12.24 dollars for 35 fish? Are you crazy?!", 0, 0, 
					[ "12.24 dollars for 35", "12.24", "35" ], "g" );
		   re_test( "([0-9]+(?:\.[0-9]+)?).*([0-9]+(?:\.[0-9]+)?)", 
					"12.24 dollars for 35 fish? Are you crazy?!", 0, 0, 
					[ "12.24 dollars for 35", "12.24", "5" ], "g" );
	   }

       /*** Implementation-directed tests, please do not remove these */
       // Tests when RE_Store overflows one segment
       re_test("[a-zA-Z][a-zA-Z0-9]+\\B.f|"+
			   "[a-zA-Z][a-zA-Z0-9]+\\B.f|"+
			   "[a-zA-Z][a-zA-Z0-9]+\\B.f|"+
			   "[a-zA-Z][a-zA-Z0-9]+\\B.f|"+
			   "[a-zA-Z][a-zA-Z0-9]+\\B.f",
	       "123abcabdabg456 foo",4,-1,null);
       // Tests the capture store management, esp in debug mode (with small store segments)
       re_test("(((a)(a)(a)(a)(a)(a)(a)(a)(a))|"+
			   "((a)(a)(a)(a)(a)(a)(a)(a)(a)(a))|"+
			   "((a)(a)(a)(a)(a)(a)(a)(a)(a)(a)(a)))|c", 
	       "aaaaabaaabaaaaabaabaaaabaaabbaaaaabaaaaab",0,0,null);
       /*** End implementation-directed tests */

   }
   catch( e )
   {
      exception( e );
   }
}

function testRegression()
{
	var subset_regexp = "abc".match(/(a)(b)(c)/).length == 1;

    try 
	{
		testcase( "Regression #48389 - conversion of non-string objects to string in RegExp.exec");
		if (! (isBytecoded() || decompilerRemoved() ))
		{
			function MyClass() {}
			var re = /function (\w)/;
			var x = re.exec( MyClass );
			test( "first letter of function name", RegExp.$1, "M" );

			function MyClass() {}
			var re = /function (\w)/;
			var x = re.test( MyClass );
			test( "first letter of function name", x, true );
		}

		testcase( "Regression #48097 - RegExp.replace() returns garbage" );
		var ws_exp = new RegExp("^a*|b*$", "g");  // Note, same as "(^a*)|(b*$)", not "^(a*|b*)$"
		var str    = "foo";
		var newstr = str.replace(ws_exp, '');
		test( "replacing empty matches with nothing", newstr, str );

		// Related tests
		test( "replacing first match", "1a2a3a".replace( /a/, "b" ), "1b2a3a" );
		test( "replacing all matches", "1a2a3a".replace( /a/g, "b" ), "1b2b3b" );

		testcase( "Another regression" );
		test( "test #1", /(<)|(>)/.test("this contains no brockets"), false );
		test( "test #2", /(<)|(>)/.test("this contains one brocket, namely '<'"), true );

		testcase( "Regression #78830 - regex literal can't contain escaped slash (lexer bug)" );
		try {
			test( "literal with slash #1", eval( "/abra\\/cadabra/.test('fabra/cadabrag')" ), true );
			test( "literal with slash #2", eval( "var re = /Gecko\\/(\d+)/; true;" ), true );
		}
		catch (e)
		{
			showfailure( "Exception" );
		}

		testcase( "Regression #59684 - give an interpretation to some illegal but unambiguous regexes" );
		try {
			// The first one of these is illegal; the construction \w-_ is not a valid ClassRange
			// and that's its only interpretation.  I've kept the second one because the first
			// fix I implemented to allow the first one broke the second one :-)
			test( "Technically illegal regex #1", typeof eval("/[\\w-_%~]+.htm[l]?$/"), "object" );
			test( "Technically illegal regex #2", typeof eval("/([\\/|\\\\])[\\w_~-]+[\\/|\\\\][\\w.]*$/"), "object" );
		}
		catch (e) { exception(e); }

		testcase( "Regression (no bts#) - crashes due to choicepoint-stack storage mgmt bug" );
		try 
		{
            // 99 'a's is the minimum in the current implementation, where the choicepoint stack segment
			// size is 100.  This test must change if the implementation changes that size; a comment
			// to that effect is in the code.
			/a*b*c$/.exec("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabd");
		}
		catch (e) { exception(e); }

		testcase( "Regression (no bts#) - interpretation of String.prototype.match on empty match." );
		test( "Empty match always advances lastIndex", 
			  "abra( cadabra (".match(/\bw*\s*(?=\()/g).length, 
			  2 );

		/* Bug #95703

           The regex /<[a-z]+(?:\s+[^>]*?)?>/ parses (correctly) as:

		   (AND (AND (AND (CHARS/CS "<") 
		                  (REPEAT (CLASS [(RANGE a z)]) 1 INFTY T 0 0))
			          (REPEAT (AND (REPEAT (CLASS [(SET {spaces})]) 1 INFTY T 0 0)
					               (REPEAT (NOT-CLASS [(SINGLETON >)]) 0 INFTY F 0 0))
						      0 1 T 0 0))
			     (CHARS/CS ">"))

		    The problem is in the match: Remove the last '?' in the regex 
		    and the regex will match "<html x>", or remove "x" in the input 
		    and it matches also, but the regex as it is should match the input 
		    as it is.

		    The problem is that the repeat matcher for (?: ...)? sends
		    an empty continuation to the matcher for (?: ...),
		    but that is wrong: the matcher for [^>]*? needs to have
		    a continuation that actually tries to match the right
		    context, to know whether it can stop looking for a match.
		*/
		testcase( "Regression (bug #95703) -- nested lazy match must see end of pattern" );
		re_test( /<[a-z]+(?:\s+[^>]*?)?>/, '<html x>', 0, 0, ['<html x>'] );

		/* Bug 101101 */
		try {
			testcase( "Regression (bug #101101) -- unescaped ] should be allowed in regex" );
			test( "Remove bracket-delimited substring", "this [is] a test".replace(new RegExp("\\[.*]"), ""), "this  a test" );
			test( "Remove brace-delimited substring", "this {is} a test".replace(new RegExp("\\{.*}"), ""), "this  a test" );
	    }
	    catch(e) { exception(e); }

		/* Bug 136775 */
		test( "Regression (#136775) -- case-insensitive match when uppercase appears in pattern, #1",
		      /A/i.test('a'), true );
		test( "Regression (#136775) -- case-insensitive match when uppercase appears in pattern, #2",
		      /A*B/i.test('aaAaaaAb'), true );

		/* Bug 140187 */
	    test( "Regression (#140187) -- value returned from replacer function is not converted to string",
              "abab".replace(/./g, function (c) { return {a:1,b:2}[c]; }),
              "1212" );

		/* Unrecorded bug from Morten: '\xA0' was converted to 0xFFA0, not 0x00A0,
		   on systems with signed char.  So a regex matching \s against 0x00A0
		   would fail. */
		testcase( "Regression -- sign-extended char \\xA0 would not match 0xA0 with \s" );
		var re = /this\sis/g;
		test( "Non-breaking space mark", (re.exec( "hey! this\u00A0is a test" ), re.lastIndex), 12 );

		/* Bug 145076 */

		// global variables
		testcase( "Regression -- Replacing a match by a string also matching" );
		depth=0;
		testVar='success';
		template = 'There should be \'success\' written here: ##rec_test()## \n(and not something else).';

		function rec_test() {
			var template2 = ' ##testVar## ';
			return replacing(template2);
		}

		function replacing(template) { 
			return template.replace(/##([^#]*)##/gi, 
			                        function(str, p1, p2) { 
				                       if (++depth > 5) 
										   throw "Too deep!"; 
									   return eval(p1); 
			                        } );
		}

		test( "Use of eval in replacer function with a recursive-like pattern (bug 145076)",
			  replacing(template),
			  'There should be \'success\' written here:  success  \n(and not something else).' );

		/* Bugs 120949, 135402, 141775: optimized repeat matcher engine problems */

		testcase( "Optimized repeat matcher problems" );

		test( "#120949", ("mushaaraf").match(/(a.?)*af/g), "aaraf" );

		var str="DVD-Jon wins new legal victory\n: Norway's most famous computer whiz got an early Christmas present on Monday. An appeals court in Oslo upheld Jon Lech Johansen's earlier acquittal on all counts of alleged copyright violations.";

		if (!subset_regexp)
			test( "#135402", (/a.*n.*a.*l.*s.*e.*x/i).exec(str), null );

		if (!subset_regexp)
			test( "#141775", /([\.]+[a-zA-Z0-9\-]+)+[a-zA-Z0-9]$/.test('opera.com'), true );

		/* Regression in the new matcher engine (reported by bratell):
		   the capture store GC would reclaim some nodes that were live, due
		   to missing anchoring during Unbind(), thus creating circular lists.
		   Opera would hang trying to create the final results array. */

		if (!subset_regexp)
		{
			var x = eval("/(([a-zA-Z]([a-zA-Z0-9+-.])*):((((\\/\\/(((((%[0-9A-Fa-f]{2})|[a-zA-Z0-9\\-_.!~*'();:&=+$,])*@)?((((([a-zA-Z0-9]|([a-zA-Z0-9][a-zA-Z0-9\\-]*[a-zA-Z0-9]))\\.)*([a-zA-Z]|([a-zA-Z][a-zA-Z0-9\\-]*[a-zA-Z0-9]))\\.?)|(\\d+\\.\\d+\\.\\d+\\.\\d+))(:\\d*)?))?|((%[0-9A-Fa-f]{2})|[a-zA-Z0-9\\-_.!~*'()$,;:@&=+])+)(\\/((([a-zA-Z0-9\\-_.!~*'():@&=+$,]|(%[0-9A-Fa-f]{2}))*(;(([a-zA-Z0-9\\-_.!~*'():@&=+$,]|(%[0-9A-Fa-f]{2}))*))*)(\\/(([a-zA-Z0-9\\-_.!~*'():@&=+$,]|(%[0-9A-Fa-f]{2}))*(;(([a-zA-Z0-9\\-_.!~*'():@&=+$,]|(%[0-9A-Fa-f]{2}))*))*))*))?)|(\\/((([a-zA-Z0-9\\-_.!~*'():@&=+$,]|(%[0-9A-Fa-f]{2}))*(;(([a-zA-Z0-9\\-_.!~*'():@&=+$,]|(%[0-9A-Fa-f]{2}))*))*)(\\/(([a-zA-Z0-9\\-_.!~*'():@&=+$,]|(%[0-9A-Fa-f]{2}))*(;(([a-zA-Z0-9\\-_.!~*'():@&=+$,]|(%[0-9A-Fa-f]{2}))*))*))*)))(\\?(([a-zA-Z0-9\\-_.!~*'();\\/?:@&=+$,]|(%[0-9A-Fa-f]{2}))*))?)|(((%[0-9A-Fa-f]{2})|[a-zA-Z0-9\\-_.!~*'();?:@&=+$,])([a-zA-Z0-9\\-_.!~*'();\\/?:@&=+$,]|(%[0-9A-Fa-f]{2}))*)))$/");
			var y = "http://www.opera.com/";
			test( "Massive capture array regression", y.match(x).length, 68 );
		}

		/* Bug 157631: compatible fallback processing for bogus \u and \x backslash 
	       sequences */

	    var res="";
		try{
			r=/\u001g/;
			m=r.exec('u001g');
		}catch(e){ res=e; }

	    test( "Compatible fallback for bad \\u sequence", m, "u001g", 157631 );

	    var res="";
		try{
			r=/\x1g/;
			m=r.exec('x1g');
		}catch(e){ res=e; }

	    test( "Compatible fallback for bad \\x sequence", m, "x1g", 157631 );


        test( "Compatible fallback for bad $n sequence in replace string", 
              "D_Month=200509".replace(/(D_Month=)[0-9][0-9][0-9][0-9][0-9][0-9]/, "$1200506"),
              "D_Month=200506" );

        test( "Compatible fallback for bad $n sequence in replace string", 
              "D_Month=200509".replace(/(D_Month=)[0-9][0-9][0-9][0-9][0-9][0-9]/, "$8"),
              "$8" );

		try {
			// Bug 223084: these are unproblematic but the parsing of
			// ECMAScript 4 regular expressions was initially broken.
			var r;
			eval("r = / +/");
			eval("r = / */");
			eval("r = / ?/");
			eval("r = / {1,2}/");
			eval("r = / $/");
		}
		catch (e) { exception(e); }

    } catch (e) { exception(e); }
}
