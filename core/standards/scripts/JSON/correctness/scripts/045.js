// Copyright 2009 Opera Software.
// This code is released under the BSD license found in the license.txt file.

function test(){  /**  JSON.stringify() whitelist includes dontEnum properties */
	/*
	* Spec: 15.12.3 Abstract operation "JO" algorithm step 5-8
	*/
	var passed;
	var str = JSON.stringify(Math, ["PI"]);
	passed = str&&str.indexOf('PI')>-1?true:false;
	if(!passed)test.failures=['output: '+str];
	return passed;
}
