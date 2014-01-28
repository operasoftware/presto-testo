// Copyright 2009 Opera Software.
// This code is released under the BSD license found in the license.txt file.

function test(){  /**  Reviver argument to JSON.parse removes members from result if returning undefined */
	var passed=true;
	var obj = JSON.parse( '{ "a": "1", "b":"" }', function(){} );
	for( var p in obj ){
		passed = false;
	}

	return passed ;
}
