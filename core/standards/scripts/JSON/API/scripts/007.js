// Copyright 2009 Opera Software.
// This code is released under the BSD license found in the license.txt file.

function test(){  /**  JSON object is not a constructor */
	var passed = typeof JSON == 'object';
	if(passed){
		try{
			var testJSONIsNotAConstructor = new JSON;// should throw an exception
			passed=false;
		}catch(e){
			passed = e instanceof TypeError;
		}
	}
	return passed ;
}
