// Copyright 2009 Opera Software.
// This code is released under the BSD license found in the license.txt file.

function test(){  /**  Reviver argument to JSON.parse */
	/* Tests how the reviver method is called for each name/value pair in a simple input string */
	var passed;
	var str='', times=0;
	var obj = JSON.parse( '{ "a": "1", "b":"", "c":null }', function( name, value ){
		if(name){
			str+=name+':'+value+'\n';
			times++;
			return value;
		}
		return value;
	} );
	passed = times == 3 &&
		str=='a:1\nb:\nc:null\n' &&
		'a' in obj &&
		'b' in obj &&
		'c' in obj;
	return passed ;
}
