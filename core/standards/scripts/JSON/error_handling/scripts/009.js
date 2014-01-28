// Copyright 2009 Opera Software.
// This code is released under the BSD license found in the license.txt file.

function test(){  /**  JSON.stringify() behaviour if toJSON() misbehaves and returns input */
	/*  Note: test contains unspecified assertation - the algorithm as given in the spec per August 2009 would recurse forever between abstract operation JO and abstract operation Str
	* Test asserts that stringify() should work anyway
	*/
	var passed = true;
	Object.prototype.toJSON = String.prototype.toJSON = Array.prototype.toJSON = function(){return this};
	try{
		var str=JSON.stringify(
			{"test": "abc", 'second':[1,2,3], 'third': {'0':1}}
		);
	}catch(e){
		passed=false;
	}
	passed = passed &&
	 str == '{"test":"abc","second":[1,2,3],"third":{"0":1}}' || /^\s*\{\s*"test"\s*:\s*"abc"\s*,\s*"second"\s*:\s*\[\s*1\s*,\s*2\s*,\s*3\s*\]\s*,\s*"third"\s*:\s*\{\s*"0"\s*:\s*1\s*\}\s*\}\s*$/.test(str) ;
	return passed && typeof JSON=='object' ;
}
