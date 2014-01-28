// Copyright 2009 Opera Software.
// This code is released under the BSD license found in the license.txt file.

function test(){  /**  JSON.stringify() should ignore replacer argument if not array/function */
	/*
	* Spec: 15.12.3 step 4
	*/
	var passed;
	try{
		var str = JSON.stringify( {}, null ) ;
		var str = JSON.stringify( {}, undefined ) ;
		var str = JSON.stringify( {}, "hello JSON" ) ;
		var str = JSON.stringify( {}, 50012 ) ;
		passed=true;
	}catch(e){
		passed=false;
	}
	return passed ;
}