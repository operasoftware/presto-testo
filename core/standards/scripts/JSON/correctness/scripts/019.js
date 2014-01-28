// Copyright 2009 Opera Software.
// This code is released under the BSD license found in the license.txt file.

function test(){  /**  disallow double quote characters from JSON text */
	/*
	*
	*/
	var passed=false;

	try{
		JSON.parse(
			'["'+String.fromCharCode(34)+'"]'
		);
	}catch(e){
		passed=true;
	}
	return passed;
}
