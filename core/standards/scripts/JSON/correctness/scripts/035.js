// Copyright 2009 Opera Software.
// This code is released under the BSD license found in the license.txt file.

function test(){  /**  literal tab in JSONString */
	/*
	* Spec: 15.12.1.1
	* Spec grammar seems to insist that anything below U+001F is a "control character"
	* and not allowed to appear literally in JSONString.
	* As JSON grammar isn't meant to change we're stuck with this even if browsers so far aligned on allowing this..
	*/
	var passed=false;
	try{
		JSON.parse(
			'{"test": "	"}'
		);
	}catch(e){
		passed = true;
	}
	return passed;
}
