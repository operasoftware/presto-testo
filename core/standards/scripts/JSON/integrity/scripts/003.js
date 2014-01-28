// Copyright 2009 Opera Software.
// This code is released under the BSD license found in the license.txt file.

function test(){  /**  JSON and cyclic references */
	/* testhing how JSON implementation throws on stringifying an object with cyclic references
	*/

	//return false; // disable test while checking the test suite against JSON2.js, which goes into a loop on this case..

	var passed = false;
	var obj = { 'prop1': {} };
	obj.prop1.parent = obj;

	try{
		var str = JSON.stringify( obj	);
	}catch(e){
		passed=true;
	}
	return passed ;
}
