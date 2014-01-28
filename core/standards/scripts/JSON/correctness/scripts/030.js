// Copyright 2009 Opera Software.
// This code is released under the BSD license found in the license.txt file.

function test(){  /**  ECMAScript UnicodeEscapeSequence allowed in JSON source text */
	/*
	* Spec: 15.12.1.1
	*/
	var passed=true;
	try{
		var obj=JSON.parse(
			'{"test": "\\u0041\\u0042"}'
		);
	}catch(e){
		passed=false;
	}

	passed = passed && obj.test==='AB';

	return passed;
}
