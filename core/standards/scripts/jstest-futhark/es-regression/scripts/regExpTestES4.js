/* -*- mode: c++; tab-width: 4; c-file-style: "bsd" -*-
 *
 * Copyright (C) 2001-2002 Opera Software ASA.  All rights reserved.
 *
 * ECMAScript 4 extensions to regular expressions
 * Lars Thomas Hansen
 */

var cvs = "$Id: regExpTestES4.js 67433 2010-04-19 15:31:30Z gsneddon $";

function main()
{
   try
   {
      testmodule( "RegExp ECMAScript 4 testsuite", cvs );
      expect(38);//number of tests - update this when tests are added!
      testcase( 'ECMAScript 4 support');               testECMAScript4();

      testmodule_finished();
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
        eval('re_test(/ab(?# comment )c/, "abc", 0, 0, ["abc"]);');
    } catch(e) {}
    
    try {
        eval('re_test(/(?# comment )abc/, "abc", 0, 0, ["abc"]);');
    } catch(e) {}
    
    try {
	eval('re_test(/abc(?# comment )/, "abc", 0, 0, ["abc"]);');
    } catch(e) {}
    
    try {
	eval ('re_test(/ ab # comment\n	| ac\n	# comment/x, "xac", 0, 1, ["ac"]);');
    } catch(e) {}
    
    try {
	eval('re_test(/# more test\n	[# some schtuff here...\n	 a # comment\n	 b # comment\n	 c # comment\n	]+/x, "xxacbcaby", 0, 2, ["acbcab"]);');
    } catch(e) {}
    
    try {
	eval('re_test(/# .***+???$$$ comments can contain all sorts of junk\n	[abc]+/x, "xxacbcaby", 0, 2, ["acbcab"]);');
    } catch(e) {}
    
    try {
	eval('re_test(/abc/y, "01234abc", 5, 5, ["abc"]);');
    } catch(e) {}
    
    try {
	eval('re_test(/abc/y, "012345abc", 5, 0, null);');
    } catch(e) {}
    
    try {
	eval('re_test(/a(?P<fisk>b)c/g, "01abc23", 0, 2, ["abc","b"], null, { fisk: "b" } );');
    } catch(e) {}
    
    try {
	eval('re_test(/a(?P<fisk>b)c(?P=fisk)d/g, "01abcbd23", 0, 2, ["abcbd","b"], null, { fisk: "b" });');
    } catch(e) {}
    
    try {
	eval('re_test(/a(?P<fisk>b)c(?P=fisk)d(?P<fnys>e)/g, "01abcbde23", 0, 2, ["abcbde","b","e"], null, { fisk: "b", fnys: "e" });');
    } catch(e) {}
    
    try {
	eval('test_deep("call regexp", /abc/("xyabcde"), ["abc"] );');
    } catch(e) {}
}

