// Copyright 2009 Opera Software.
// This code is released under the BSD license found in the license.txt file.

function test(){  /**  JSON.stringify() and large integers */
	var obj={"largest non-double":2147483647, "smallest non-double": -2147483648, "the time - a double":1278339272556}
	obj[16777215]='#ffffff in decimal, now as property name';
	var str=JSON.stringify(obj);
	var passed = str.indexOf( '16777215' ) >-1 &&
		str.indexOf( '2147483647' ) >-1 &&
		str.indexOf( '-2147483648' ) >-1 &&
		str.indexOf( '16777215' ) >-1 &&
		str.indexOf( '1278339272556' ) >-1 ; /* the last one is double internally but is expected to stringify fine.. */
	return passed;
}