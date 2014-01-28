// Copyright 2009 Opera Software.
// This code is released under the BSD license found in the license.txt file.

function test(){  /**  Throw trying to parse an array with elision */
	/* Goes into specification according to https://mail.mozilla.org/pipermail/es-discuss/2009-June/009481.html
	*/
	var passed = false;
	try{
		JSON.parse(
			'[1,2,,4]'
		);
	}catch(e){
		passed=true;
	}
	return passed && typeof JSON=='object' ;
}
