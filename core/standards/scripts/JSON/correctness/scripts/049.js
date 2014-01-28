// Copyright 2009 Opera Software.
// This code is released under the BSD license found in the license.txt file.

function test(){  /**  JSON.stringify() with regexp */
	/*
	* Spec: 15.12.3
	*/
	var passed;
	var str = JSON.stringify(
		/$/
	);

	passed = str == '{}' ;
	if(!passed)test.failures=['output: '+str];
	return passed;
}
