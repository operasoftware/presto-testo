// Copyright 2009 Opera Software.
// This code is released under the BSD license found in the license.txt file.

function test(){  /**  JSON.parse() behaviour if reviver throws */
	/*  Note: test contains unspecified assertation - asserts that parse() should throw if reviver throws
	*/
	var passed = false;
	try{
		JSON.parse(
			'{"test": "abc"}',
			function(){throw 'test';}
		);
	}catch(e){
		passed=true;
	}
	return passed && typeof JSON=='object' ;
}
