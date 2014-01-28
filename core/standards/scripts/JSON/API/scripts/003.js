// Copyright 2009 Opera Software.
// This code is released under the BSD license found in the license.txt file.

function test(){  /**  Make sure the toJSON method is not defined on number objects */
	/*
	* Earlier spec defined toJSON() but it has since been removed. The test hence checks that it does *not* exist :-p
	*/
	var passed = typeof Number.prototype.toJSON == 'undefined';
	passed = passed && typeof (new Number(1)).toJSON == 'undefined';
	return passed && typeof JSON=='object' ;
}
