// Copyright 2009 Opera Software.
// This code is released under the BSD license found in the license.txt file.

function test(){  /**  JSON.stringify() and the arguments array */
	/*
	* Arguments array is implemented slightly differently across browsers. However, according to ES5 it inherits from Array so
	* in implementations supporting that it should probably also be stringified to one?
	*/
	var passed = false;
	var subtest=function(){ return JSON.stringify(arguments); }
	var str = subtest( 'a', {}, 2.54409, null );
	if( arguments instanceof Array ){
		passed = str=='["a",{},2.54409,null]' || /^\s*\[\s*"a"\s*,\s*\{\}\s*,\s*2\.54409\s*,\s*null\s*\]\s*$/.test(str);
	}else{
		passed = str == '{}'||/^\s*\{\}\s*$/.test(str); // properties of arguments are dontEnum
	}
	if(!passed)test.failures=str;
	return passed && typeof JSON=='object' ;
}
