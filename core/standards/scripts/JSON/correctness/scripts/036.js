// Copyright 2009 Opera Software.
// This code is released under the BSD license found in the license.txt file.

function test(){  /**  JSON.stringify() replacer argument - array with names that are not in stringified object */
	var obj={
		test:'abc',
		name:'value'
	}
	var str = JSON.stringify(obj, ['foo', 'bar', 1, -1, 0] )  ;

	var passed =  /^\s*\{\s*\}\s*$/.test(str)
	if(!passed)test.failures=str;
	return passed ;
}