// Copyright 2009 Opera Software.
// This code is released under the BSD license found in the license.txt file.

function test(){  /** array is permitted as top-level JSON object */
	/*
	* Spec: 15.12
	*/
	var passed=false;
	var str = '["a", "b", "c"]';
	try{
		var obj=JSON.parse(
			str
		);
	}catch(e){}
	passed = obj instanceof Array &&
		obj.length === 3 &&
		obj[0] === 'a' &&
		obj[1] === 'b' &&
		obj[2] === 'c' &&
		typeof obj[3] === 'undefined' ;
	return passed && typeof JSON==='object'; /* typeof to avoid a fake pass if JSON is not supported  */
}
