// Copyright 2009 Opera Software.
// This code is released under the BSD license found in the license.txt file.

function test(){  /**  tests if the toJSON method is defined on Date objects */
	var passed = typeof Date.prototype.toJSON == 'function';
	passed = passed && typeof (new Date()).toJSON == 'function';
	return passed ;
}
