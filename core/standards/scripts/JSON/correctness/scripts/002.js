// Copyright 2009 Opera Software.
// This code is released under the BSD license found in the license.txt file.

function test(){  /**  Basic JSON.stringify() test */
	var passed = true;
	var obj = { "test": [1,2,3],  "test2": "value", "test3": 5, 'test4': null, 'test5': true, 'test6': false };
	var str = JSON.stringify(
		obj
	);
	// The order and whitespace of the string is implementation dependant. Hence string comparisons can't be used,
	// and regexp is used instead
	passed = ( typeof(str)=='string' &&
		str.match( /^\s*\{/ ) &&
		str.match( /\}\s*$/ ) &&
		str.match( /"test"\s*:\s*\[\s*1\s*,\s*2\s*,\s*3\s*\]/ ) &&
		str.match( /"test2"\s*:\s*"value"/ ) &&
		str.match( /"test3"\s*:\s*5/ ) &&
		str.match( /"test4"\s*:\s*null/ ) &&
		str.match( /"test5"\s*:\s*true/ ) &&
		str.match( /"test6"\s*:\s*false/ ) ) ? true : false;

	return passed ;
}
