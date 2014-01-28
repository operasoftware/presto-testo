// Copyright 2009 Opera Software.
// This code is released under the BSD license found in the license.txt file.

function test(){  /**  JSON.stringify() behaviour if toJSON() throws */
	/*  Note: test contains unspecified assertation - asserts that stringify() should throw if toJSON() throws
	*/
	var passed = false;
	Object.prototype.toJSON = String.prototype.toJSON = function(){throw 'test'};
	try{
		JSON.stringify(
			{"test": "abc"}
		);
	}catch(e){
		passed=true;
	}
	return passed && typeof JSON=='object' ;
}
