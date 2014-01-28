// Copyright 2009 Opera Software.
// This code is released under the BSD license found in the license.txt file.

function test(){  /**  control characters not allowed in JSON source text */
	/* Throw if parsing source text with unescaped control characters
	* comments in https://mail.mozilla.org/pipermail/es-discuss/2009-June/009481.html indicate that this will be standardised
	*/
	var passed=true;
	var controlCharacterCodes = [0,1,2,3,4,5,6,7,8,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,127];
	for( var i=0, code; code=controlCharacterCodes[i];i++){
		try{
			JSON.parse(
				'{"test": "'+String.fromCharCode(code)+'"}'
			);
			passed = false;
			test.failures?test.failures.push(code):test.failures=[code];
		}catch(e){
		}
	}
	return passed;
}
