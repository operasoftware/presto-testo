// Copyright 2009 Opera Software.
// This code is released under the BSD license found in the license.txt file.

function test(){  /**  tests if the JSON object is defined and contains parse and stringify methods */
	var passed = typeof JSON == 'object';
	passed = passed && typeof JSON.parse == 'function';
	passed = passed && typeof JSON.stringify == 'function';
	return passed ;
}
