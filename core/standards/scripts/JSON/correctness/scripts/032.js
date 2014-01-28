// Copyright 2009 Opera Software.
// This code is released under the BSD license found in the license.txt file.

function test(){  /** U+2028 LINE SEPARATOR and U+2029 PARAGRAPH SEPARATOR in JSON strings */
	/*
	* Spec: 15.12.2
	* U+2028 LINE SEPARATOR and U+2029 PARAGRAPH SEPARATOR may appear directly without an escape in JSON strings
	*/
	var passed=true;
	try{
		var obj=JSON.parse(
			'{"LINE SEPARATOR":"'+String.fromCharCode(0x2028)+'", "PARAGRAPH SEPARATOR":"'+String.fromCharCode(0x2029)+'"}'
		);
	}catch(e){
		passed=false;
	}
	passed = passed &&  obj['LINE SEPARATOR'] === '\u2028' && obj['PARAGRAPH SEPARATOR'] === '\u2029';
	return passed;
}
