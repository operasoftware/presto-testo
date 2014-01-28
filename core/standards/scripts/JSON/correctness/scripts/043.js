// Copyright 2009 Opera Software.
// This code is released under the BSD license found in the license.txt file.

function test(){  /**  JSON.stringify() ignores replacer white-list when serializing array */
	/*
	* Spec: 15.12.3 abstract operation JA algorithm
	*/
	var passed, obj=[ 'a', 1, {}, [] ];
	var str = JSON.stringify(
		obj, [1,2] /* passing in an array of indexes should include only those indexes from original array - but only works with objects! */
	);

	passed = str == '["a",1,{},[]]' || /^\s*\[\s*"a"\s*,\s*1\s*,\s*\{\}\s*,\s*\[\]\s*\]\s*$/.test(str);
	return passed;
}
