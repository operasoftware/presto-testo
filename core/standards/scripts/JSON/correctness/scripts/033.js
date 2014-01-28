// Copyright 2009 Opera Software.
// This code is released under the BSD license found in the license.txt file.

function test(){  /** BOM (zero-width non-breaking space) not legal JSON whitespace, but legal in strings */
	/*
	* Spec: 15.12.1.1
	*/
	var passed=false;
	try{
		var obj=JSON.parse(
			'{\uFEFF"foo"\uFEFF:1}'
		);
	}catch(e){
		passed=true;
	}

	try{
		obj=JSON.parse(
			'{"BOM":"\\uFEFF"}'
		);
	}catch(e){
		passed=false;
	}



	passed = passed &&  obj['BOM'] === String.fromCharCode(0xFEFF);
	return passed;
}
