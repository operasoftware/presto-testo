// Copyright 2009 Opera Software.
// This code is released under the BSD license found in the license.txt file.

function test(){  /** decimal dot without numbers on the right in JSON source */
	/*
	* "incomplete" decimals like 1. 2. are apparently not allowed, neither corresponding exponential notations like 1.e2
	* Test output per spec per August 24, 2009,
	*/
	var passed=false;
	try{
		var obj=JSON.parse(
			'{"null":0, "final_dot":1., "dot_plus_exponential": 2.e10}'
		);
	}catch(e){
		passed=true;
	}

	return passed && typeof JSON=='object';
}
