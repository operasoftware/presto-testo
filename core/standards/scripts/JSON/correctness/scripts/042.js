// Copyright 2009 Opera Software.
// This code is released under the BSD license found in the license.txt file.

function test(){  /**  JSON.stringify() behaviour when replacer function returns various object types */
	/*
	* Spec: 15.12.3 Abstract operation "Str" algorithm step 4
	*/
	var passed, obj=[ 'a', 1, {}, [] ];
	var str = JSON.stringify(
		obj, function(name, value){
			if(typeof value == 'string' )return new String(value)
			if(typeof value == 'number' )return new Number(value)
			if(typeof value == 'object' )return new Object(value)
		}
	);

	passed = str == '["a",1,{},[]]' || /^\s*\[\s*"a"\s*,\s*1\s*,\s*\{\}\s*,\s*\[\]\s*\]$/.test(str);
	if(!passed)test.failures=['output: '+str];
	return passed;
}
