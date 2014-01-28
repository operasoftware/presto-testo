// Copyright 2009 Opera Software.
// This code is released under the BSD license found in the license.txt file.

function test(){  /**  Reviver argument to JSON.parse called with the final output */
	/* Tests how the reviver method is called with the actual result object - no name - at the end */
	var passed;
	var str='', times=0;
	var obj = JSON.parse( '{ "a": "1", "b":"", "c":null }', function( name, value ){
		if(! name){
			passed = value.a==1 && value.b=='' && value.c==null
			times++;
			return value;
		}
		return value;
	} );
	passed = passed==true && times == 1 &&
		'a' in obj &&
		'b' in obj &&
		'c' in obj;
	return passed ;
}
