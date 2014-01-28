// Copyright 2009 Opera Software.
// This code is released under the BSD license found in the license.txt file.

function test(){  /**  JSON.stringify(): Implementations should cap the "space" argument at max 10 when a number is passed in   */
	/*
	* Spec: 15.12.3 Stringify algorithm step 6
	* At the time of writing, implementations either ignore nonsensical values or cap it at a higher limit than 10.
	*/

	var passed = false;
	var obj = { 'prop1': {}, 'prop2': { 'ar':[1,2,3,{ 'a':['a','b','c'], d:{ e:{ f:{ g:[0,1,2,3,4,5,6,7] } } } }] } };
	var str = JSON.stringify( obj, function(name,value){return value;}, Number.MAX_VALUE );
	// test is mainly to guard against hanging and/or crashing. If the implementation doesn't hang, crash, or misbehave memory-wise, it might be considered a pass
	// Note: the space between colon and curly brace matters, mandated  by spec (abstract operation JO step 8.b.iii)
	passed= str.match( /\{\n {10}"prop1": ?\{\}/ ) ? true : false;
	return passed ;
}
