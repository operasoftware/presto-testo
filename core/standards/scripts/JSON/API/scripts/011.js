// Copyright 2009 Opera Software.
// This code is released under the BSD license found in the license.txt file.

function test(){  /**  Return value of reviver argument to JSON.parse changes data */
	var passed=true;
	var obj = JSON.parse( '{ "a": "1", "b":"" }', function(name,value){if(name)return 'cd';else return value;} );
	for( var p in obj ){
		if(obj[p]!='cd'){
			passed = false;
			test.failures?test.failures.push(p+' not "cd"'):test.failures=[p+' not "cd"'];
		}
	}

	return passed ;
}
