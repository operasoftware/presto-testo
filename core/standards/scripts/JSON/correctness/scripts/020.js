// Copyright 2009 Opera Software.
// This code is released under the BSD license found in the license.txt file.

function test(){  /** stringify and getters/setters */
	/*
	*
	*/
	var passed, obj={};
	obj.__defineGetter__('test', function(){return 'hello getter'});

	var str=JSON.stringify(
		obj
	);

	passed=str.indexOf('hello getter')>-1;

	return passed;
}
