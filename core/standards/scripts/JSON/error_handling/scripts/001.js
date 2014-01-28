// Copyright 2009 Opera Software.
// This code is released under the BSD license found in the license.txt file.

function test(){  /**  Discard JSON input if property names are un-quoted */
	/* In normal JS object literals, property names may be un-quoted. Not in JSON.
	*/
	var passed = false;
	try{
		JSON.parse(
			'{ test: "" }'
		);
	}catch(e){
		passed=true;
	}
	return passed && typeof JSON=='object' ;
}
