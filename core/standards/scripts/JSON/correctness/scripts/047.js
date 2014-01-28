// Copyright 2009 Opera Software.
// This code is released under the BSD license found in the license.txt file.

function test(){  /**  JSON.parse() should not accept multi-line comments in JSON text */
	/*
	* JS comments are not allowed in JSON text. Implementations that rely on eval() would likely fail this test
	*/
	var passed=true;
	try{
		JSON.parse( '{ "a" : 1 /*this is the first property of the object */, "b" : 2 /*and this the second*/ }' );
		passed=false;
	}catch(e){}

	return passed;
}
