// Copyright 2009 Opera Software.
// This code is released under the BSD license found in the license.txt file.

function test(){  /**  JSON.stringify() with array, string, number, booleans, null and undefined inputs */
	var passed=true, str;
	var inputs = [ [], 'abc', (new String('abc')), -1, 0x3f, true, false, null, undefined ] ;
	var expected = [ '[]', '"abc"', '"abc"', '-1', '63', 'true', 'false', 'null', undefined ];
	for (var i=0; i<inputs.length; i++){
		str = JSON.stringify( inputs[i] )  ;
		if( ! ( str===expected[i] ) ){
			passed=false;
			test.failures?test.failures.push(inputs[i]+' != '+expected[i]) : test.failures = [inputs[i]+' != '+expected[i]];
		}
	}
	return passed ;
}