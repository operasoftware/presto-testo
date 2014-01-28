// Copyright 2009 Opera Software.
// This code is released under the BSD license found in the license.txt file.

function test(){  /**  When name strings are duplicated, latter value is used */
	var passed;
	passed = (JSON.parse(
		'{"test": false, "test": true}'
	)).test ;

	return passed;
}
