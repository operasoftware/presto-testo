// Copyright 2009 Opera Software.
// This code is released under the BSD license found in the license.txt file.

function test(){  /**  JSON.stringify() whitelist array containing objects with custom toString() method */
	/*
	* This is a corner case test looking at stringification of elements in a whitelist array
	*/
	var passed = false;
	var filterstr = new String("foo");
	filterstr.toString=function(){ return 'myCustomTestString'; }

	var str = JSON.stringify( {'myCustomTestString':'daTest'}, [filterstr] );

	passed = str=='{"myCustomTestString":"daTest"}';
	if(!passed)test.failures=[str];
	return passed && typeof JSON=='object' ;
}
