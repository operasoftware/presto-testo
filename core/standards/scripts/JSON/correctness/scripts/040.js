// Copyright 2009 Opera Software.
// This code is released under the BSD license found in the license.txt file.

function test(){  /**  JSON.stringify() and this keyword when inside replacer function */
	/*
	* Spec: 15.12.3 Step 3 of "Abstract operation Str" algorithm
	* (This is a fairly pointless test)
	*/
	var passed, pointer, obj={ 'prop':'val' };
	var str = JSON.stringify(
		obj, function(){ if(!pointer)pointer=this; }
	);

	passed = typeof pointer == 'object';
	return passed;
}
