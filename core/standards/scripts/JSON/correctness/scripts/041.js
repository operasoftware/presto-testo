// Copyright 2009 Opera Software.
// This code is released under the BSD license found in the license.txt file.

function test(){  /**  JSON.stringify() should return 'null' for non-finite numbers  */
	/*
	* Spec: 15.12.3 Step 9 of "Abstract operation Str" algorithm
	*/
	var passed, obj=[Number.POSITIVE_INFINITY];
	var str = JSON.stringify(
		obj
	);

	passed = str == '[null]' || /^\s*\[\s*null\s*\]\s*$/.test(str);
	return passed;
}
