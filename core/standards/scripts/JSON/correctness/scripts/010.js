// Copyright 2009 Opera Software.
// This code is released under the BSD license found in the license.txt file.

﻿function test(){  /**  JSON.stringify() and non-ASCII input */
	/*
	* Currently (september 09) most implementations return unicode-escaped source text in this test, i.e.
	* {"\u65e5\u672c":"\u65e5\u672c\u8a9e","\u4e2d\u56fd":"\u4e2d\u56fd\u8a9e"}
	* However, per the spec this is incorrect
	* Spec: 15.12.3 "Abstract operation Quote" algorithm step 2d
	*/
	var passed;
	var obj = {  '日本': '日本語', '中国': '中国語' };
	var str = JSON.stringify(
		obj
	);
	passed = /\s*"日本"\s*:\s*"日本語"\s*/.test(str) &&
		/\s*"中国"\s*:\s*"中国語"\s*/.test(str);
	if(!passed)test.failures=[str];
	return passed ;
}
