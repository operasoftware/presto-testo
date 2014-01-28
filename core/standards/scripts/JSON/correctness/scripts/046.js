// Copyright 2009 Opera Software.
// This code is released under the BSD license found in the license.txt file.

function test(){  /**  JSON.stringify() whitelist with numbers versus object with numbers-in-strings property names */
	/*
	* Spec: 15.12.3
	* Perhaps this test violatest specification (stringify algorithm step 4.b.ii.3)?
	*/
	var passed;
	var str=JSON.stringify( {'1':'a'}, [1] );

	passed = str&&str.indexOf('"a"')>-1?true:false;
	if(!passed)test.failures=['output: '+str];
	return passed;
}
