// Copyright 2009 Opera Software.
// This code is released under the BSD license found in the license.txt file.

function test(){  /**  JSON.stringify() replacer returning a date object */
	/*
	* Some return values from replacer will be processed further -
	* Number, String, Booleans are turned into their primitive values.
	* A date object has no enumerable properties and should thus stringify to {}
	* Spec: 15.12.3 abstract operation Str and abstract operation JO
	*/
	var passed = false;
	var str = JSON.stringify( {foo:1}, function(n,v){ if(n=='foo')return new Date(); return v; });

	passed = str=='{"foo":{}}';
	if(!passed)test.failures=[str];
	return passed && typeof JSON=='object' ;
}
