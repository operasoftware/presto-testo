/* -*- mode: c++; tab-width: 4; c-file-style: "bsd" -*-
 *
 * Copyright (C) 2001-2002 Opera Software ASA.  All rights reserved.
 *
 * ECMAScript 4 extensions to regular expressions
 * Lars Thomas Hansen
 */

var cvs = "$Id: regExpTestES4.js,v 1.1.2.3 2006/08/24 10:26:52 lth Exp $";

function main()
{
   try
   {
      printHeader( "RegExp ECMAScript 4 testsuite", cvs );

      setTestCase( 'ECMAScript 4 support');               testECMAScript4();

      printTail();
   }
   catch( e ) { exception( e ); }
}

// Structured comments (?# .... )
// Flag /x : extended regexp, ignore whitespace, linebreak, line comments
// Flag /y : match at lastIndex or not at all
// Regular expression is function which performs "exec"
// Named pattern (?P<id>...) and backref (?P=id) and result.id

function testECMAScript4()
{
    var res;

	try {
		re_test(/ab(?# comment )c/, "abc", 0, 0, ["abc"]);
		re_test(/(?# comment )abc/, "abc", 0, 0, ["abc"]);
		re_test(/abc(?# comment )/, "abc", 0, 0, ["abc"]);
		re_test(/ ab # comment
                | ac
                # comment/x, "xac", 0, 1, ["ac"]);
		re_test(/# more test
                 [# some schtuff here...
                  a # comment
                  b # comment
                  c # comment
                 ]+/x, "xxacbcaby", 0, 2, ["acbcab"]);
		re_test(/# .***+???$$$ comments can contain all sorts of junk
                 [abc]+/x, "xxacbcaby", 0, 2, ["acbcab"]);
		re_test(/abc/y, "01234abc", 5, 5, ["abc"]);
		re_test(/abc/y, "012345abc", 5, 0, null);
		re_test(/a(?P<fisk>b)c/g, "01abc23", 0, 2, ["abc","b"], null, { fisk: "b" } );
		re_test(/a(?P<fisk>b)c(?P=fisk)d/g, "01abcbd23", 0, 2, ["abcbd","b"], null, { fisk: "b" });
		re_test(/a(?P<fisk>b)c(?P=fisk)d(?P<fnys>e)/g, "01abcbde23", 0, 2,
		        ["abcbde","b","e"], null, { fisk: "b", fnys: "e" });
		test_deep("call regexp", /abc/("xyabcde"), ["abc"] );
	}
	catch (e) { exception(e); }
}

