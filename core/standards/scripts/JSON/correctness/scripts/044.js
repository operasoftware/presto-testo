// Copyright 2009 Opera Software.
// This code is released under the BSD license found in the license.txt file.

function test(){  /**  JSON.stringify() replacer algorithm with non-string/number elements */
	/*
	* Spec: 15.12.3 Stringify algorithm step 4b
	* Note: no browser implementation tested currently passes this test. They all fail differently.
	* Test conforms to Stringify algorithm step 4b as far as I can tell..
	*/
	var passed, obj={ 'a':'pass','1':'pass', 'b':'fail', 'null':'fail', 'c':'fail', '':'fail' };
	var filter=[ new String('a'), new Number(1), { toString:function(){return 'b'}} , null  ];
	filter.c='1';
	var str = JSON.stringify(
		obj,  filter
	);

	passed = str.indexOf('pass') >-1 && str.indexOf('fail')==-1;
	if(!passed)test.failures=['output: '+str];
	return passed;
}
