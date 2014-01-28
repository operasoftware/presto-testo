// Copyright 2009 Opera Software.
// This code is released under the BSD license found in the license.txt file.

function test(){  /**  JSON.parse() and TAB/newline whitespace in string */
	/* Note: This test tests JSONWhiteSpace.
	see 035 for test of TAB *inside* a JSON string */
	var passed=false;
	var obj = JSON.parse(
		'{ 	"tab-separated"	:	"source text", \r\n 	"with"	:	"newline"	}'
	);
	passed = obj &&  obj['tab-separated'] == 'source text' &&
	obj['with']=='newline';

	return passed ;
}
