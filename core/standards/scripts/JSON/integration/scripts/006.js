// Copyright 2009 Opera Software.
// This code is released under the BSD license found in the license.txt file.

function test(){  /**  JSON.stringify() and the arguments array - with replacer whitelist */
	/*
	* Arguments array is implemented slightly differently across browsers. However, according to ES5 it inherits from Array so
	* in implementations supporting that it should probably also be stringified to one?
	*/
	var passed = false;
	var subtest=function(){ return JSON.stringify(arguments, ['0', 'length']); }
	var str = subtest( 'a', {}, 2.54409, null );
	if( arguments instanceof Array ){
		// replacer whitelist isn't applied to arrays. Behave as if it wasn't there..
		passed = str=='["a",{},2.54409,null]' || /^\s*\[\s*"a"\s*,\s*\{\}\s*,\s*2\.54409\s*,\s*null\s*\]\s*$/.test(str);
	}else{
		passed = str == '{"0":"a","length":4}'||/^\s*\{\s*"0"\s*:\s*"a"\s*,\s*"length"\s*:\s*4\s*\}\s*$/.test(str);
	}
	if(!passed)test.failures=str;
	return passed && typeof JSON=='object' ;
}
