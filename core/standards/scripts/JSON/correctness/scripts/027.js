// Copyright 2009 Opera Software.
// This code is released under the BSD license found in the license.txt file.

function test(){  /** JSONWhiteSpace: disallow double-width space characters */
	/*
	* Spec: 15.12.1.1
	* Hiragana double-width space is considered white-space by many JS implementations, but not allowed as JSONWhiteSpace
	*/
	var passed=false;
	var str = '{'+String.fromCharCode(12288)+'"foo"'+String.fromCharCode(12288)+':'+String.fromCharCode(12288)+'"test"'+String.fromCharCode(12288)+'}';
	try{
		var obj=JSON.parse(
			str
		);
	}catch(e){
		passed=true;
	}
	return passed && typeof JSON==='object'; /* typeof to avoid a fake pass if JSON is not supported  */
}
