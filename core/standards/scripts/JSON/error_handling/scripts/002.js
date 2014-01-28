// Copyright 2009 Opera Software.
// This code is released under the BSD license found in the license.txt file.

function test(){  /**  Discard JSON input if opening/closing brackets are omitted */
	/* JSON object must be wrapped in { and } or [ and ]
	*/
	var passed = false;
	try{
		JSON.parse(
			'1,2,3'
		);
	}catch(e){
		passed=true;
	}
	return passed && typeof JSON=='object' ;
}
