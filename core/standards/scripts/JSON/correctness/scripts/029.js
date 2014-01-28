// Copyright 2009 Opera Software.
// This code is released under the BSD license found in the license.txt file.

function test(){  /**  ECMAScript HexEscapeSequence not allowed in JSON source text */
	/* Throw if parsing source text with HexEscapeSequence
	*/
	var passed=true;
	try{
		var obj=JSON.parse(
			'{"test": "\\x41\\x42"}'
		);
		passed = false;
	}catch(e){
	}
	return passed;
}
