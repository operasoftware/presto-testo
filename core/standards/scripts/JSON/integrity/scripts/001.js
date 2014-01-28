// Copyright 2009 Opera Software.
// This code is released under the BSD license found in the license.txt file.

function test(){  /**  'prototype' in JSON source text should not affect environment */
	/* This is a bit far-fetched, but the general idea is that a careless implementation might
	* parse the JSON source text into an Object and let 'prototype' properties actually affect
	* Object.prototype ..
	*/
	var toString = Object.prototype.toString;
	JSON.parse(
		'{ "prototype": { "toString" : "" } }'
	);

	passed = toString == Object.prototype.toString;

	return passed ;
}
