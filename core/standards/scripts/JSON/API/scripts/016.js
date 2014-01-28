// Copyright 2009 Opera Software.
// This code is released under the BSD license found in the license.txt file.

function test(){  /**  Custom toJSON() method */
	var obj={
		test: { toJSON: function(){ return true; } }
	}
	var passed=  (JSON.parse(JSON.stringify(obj))).test  === true ;
	return passed ;
}
