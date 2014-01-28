// Copyright 2009 Opera Software.
// This code is released under the BSD license found in the license.txt file.

function test(){  /**  Single quotes not allowed as string delimiters */
	/* Goes into specification according to https://mail.mozilla.org/pipermail/es-discuss/2009-June/009481.html
	*/
	var passed = false;
	try{
		JSON.parse(
			"{'test':1}"
		);
	}catch(e){
		passed=true;
	}
	return passed && typeof JSON=='object' ;
}
