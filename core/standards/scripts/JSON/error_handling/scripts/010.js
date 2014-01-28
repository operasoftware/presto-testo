// Copyright 2009 Opera Software.
// This code is released under the BSD license found in the license.txt file.

function test(){  /**  Throw if no argument is passed to JSON.parse() */
	/* IE8/Firefox/Safari behaviour. Test contains somewhat unspecified assertation: asserts that parse() should throw if nothing is passed in
	*/
	var passed = false;
	try{
		JSON.parse(

		);
	}catch(e){
		passed=true;
	}
	return passed && typeof JSON=='object' ;
}
