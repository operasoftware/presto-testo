// Copyright 2009 Opera Software.
// This code is released under the BSD license found in the license.txt file.

function test(){  /**  JSON numbers do not allow hex notation */
	/* JS implementations allow this for JS code, but it should not be allowed for JSON per the JSON spec
	*/
	var passed = false;
	try{
		JSON.parse(
			'{"test": 0x01}'
		);
	}catch(e){
		passed=true;
	}
	return passed && typeof JSON=='object' ;
}
