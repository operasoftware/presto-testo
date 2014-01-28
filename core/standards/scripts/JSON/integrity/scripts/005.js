// Copyright 2009 Opera Software.
// This code is released under the BSD license found in the license.txt file.

function test(){  /**  JSON.stringify(): Implementations should use only first 10 characters if a long string is passed as the space argument   */
	/*
	* Spec: 15.12.3 Stringify algorithm step 7
	* At the time of writing, implementations either ignore nonsensical values or cap it at a higher limit than 10.
	*/

	var passed = false;
	var obj = { 'prop1': {} };
	var str = JSON.stringify( obj, function(name,value){return value;}, (new Array(5000)).join('a'));
	// test is mainly to guard against hanging and/or crashing. If the implementation doesn't hang, crash, or misbehave memory-wise, it might be considered a pass
	// Note: the space between colon and curly brace matters, mandated  by spec (abstract operation JO step 8.b.iii)
	passed= str.match( /\{\na{10}"prop1": ?\{/ ) ? true : false;
	return passed ;
}

