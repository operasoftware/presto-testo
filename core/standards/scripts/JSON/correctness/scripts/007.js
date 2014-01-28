// Copyright 2009 Opera Software.
// This code is released under the BSD license found in the license.txt file.

function test(){  /**  JSON.stringify() handling undefined and functions in arrays */
	/* Per spec draft:
	* "In arrays these values are represented as the string null"
	*/
	var passed;
	var obj = {  'ar': [ 1,undefined,function(){},2 ] };
	var str = JSON.stringify(
		obj
	);
	passed = /"ar"\s*:\s*\[\s*1\s*,\s*null\s*,\s*null\s*,\s*2/.test(str)  ;
	if(!passed)test.failures=[str];
	return passed ;
}
