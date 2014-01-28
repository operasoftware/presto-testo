// Copyright 2009 Opera Software.
// This code is released under the BSD license found in the license.txt file.

function test(){  /** JSON.stringify() escapes control characters in output */
	/*
	* for ranges other than the control chars, see list in https://mail.mozilla.org/pipermail/es-discuss/2009-June/009481.html
	*/
	var passed=true, obj;
	var controlCharacterCodes = [0,1,2,3,4,5,6,7,8,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,127];
	for( var i=0, code; code=controlCharacterCodes[i];i++){
		try{
			obj=JSON.stringify(
				{"test": String.fromCharCode(code)}
			);
			if( obj.test != '\\u00'+(Number(code)).toString(16)  ){
				passed=false;
				test.failures?test.failures.push(code):test.failures=[code];
			}
		}catch(e){
		}
	}
	return passed;
}
