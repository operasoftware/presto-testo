// Copyright 2009 Opera Software.
// This code is released under the BSD license found in the license.txt file.

function test(){  /** serializing sparse arrays */
	/*
	*
	*/
	var passed;
	var ar = [];
	ar[3]='test';

	var str=JSON.stringify(
		ar
	);

	passed=/\[\s*null\s*,\s*null\s*,\s*null\s*,"test"\s*\]/.test(str);
	return passed;
}
