// Copyright 2009 Opera Software.
// This code is released under the BSD license found in the license.txt file.

function test(){  /**  JSON.stringify() behaviour if replacer() throws */
	/*  Note: test contains unspecified assertation - asserts that stringify() should throw if replacer throws
	*/
	var passed = false;
	try{
		JSON.stringify(
			{"test": "abc"},
			function(){throw 'test';}
		);
	}catch(e){
		passed=true;
	}
	return passed && typeof JSON=='object' ;
}
