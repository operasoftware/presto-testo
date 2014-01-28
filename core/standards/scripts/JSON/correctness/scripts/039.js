// Copyright 2009 Opera Software.
// This code is released under the BSD license found in the license.txt file.

function test(){  /**  JSON.stringify() must use short escape forms for backslash, backspace, line feed, carriage return, tab */
	/*
	* Spec: 15.12.3 under "Abstract operation: quote"
	*/
	var passed=true;
	var obj={ 'special_characters' : '"\b\f\n\r\t\\' };
	try{
		var str = JSON.stringify(
			obj
		);
	}catch(e){
		passed = false;
	}
	passed=passed && /"special_characters"\s*:\s*"\\"\\b\\f\\n\\r\\t\\\\"/.test(str);
	if(!passed)test.failures=str;
	return passed;
}
