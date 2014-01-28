// Copyright 2009 Opera Software.
// This code is released under the BSD license found in the license.txt file.

function test(){  /**  Basic JSON parse test */
	var passed = true;
	var obj = JSON.parse(
		'{ "test": [1,2,3],  "test2": "value", "test3": 5 }'
	);
	passed = typeof(obj.test)=='object' &&
		obj.test.length==3 &&
		obj.test[0]==1 &&
		obj.test[1]==2 &&
		obj.test[2]==3 &&
		obj.test2==='value' &&
		obj.test3===5;

	return passed ;
}
