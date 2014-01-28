// Copyright 2009 Opera Software.
// This code is released under the BSD license found in the license.txt file.

function test(){  /**  allow strings, numbers, Booleans, and null as top level JSON text */
	/*
	*
	*/
	var passed=true;
	var values = ['"hello JSON"', 1,-1,true,false,null];
	for( var i=0, value; value=values[i];i++){
		try{
			JSON.parse(
				value
			);
		}catch(e){
			passed = false;
		}
	}
	return passed;
}
