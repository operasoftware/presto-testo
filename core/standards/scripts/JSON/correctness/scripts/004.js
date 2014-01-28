// Copyright 2009 Opera Software.
// This code is released under the BSD license found in the license.txt file.

function test(){  /**  JSON arrays become ES arrays */
	var passed, ar;
	ar = (JSON.parse(
		'{"test": [0,1,2,3]}'
	)).test ;

	passed = typeof ar=='object' &&
		ar.constructor == Array &&
		ar.length == 4 ;
	for( var i = 0 ; typeof ar[i] !='undefined' ; i++)
		passed = passed && ar[i] === i;

	return passed;
}
