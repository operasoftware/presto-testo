// Copyright 2009 Opera Software.
// This code is released under the BSD license found in the license.txt file.

function test(){  /**  JSON.parse() should not accept single-line comments in JSON text */
	/*
	* JS comments are not allowed in JSON text. Implementations that rely on eval() would likely fail this test
	*/
	var passed=true;
	try{
		JSON.parse( '{ "a" : 1, "b" : 2 } //nice object' );
		passed=false;
	}catch(e){}

	return passed;
}
