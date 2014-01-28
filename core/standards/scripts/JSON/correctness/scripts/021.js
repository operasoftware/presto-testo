// Copyright 2009 Opera Software.
// This code is released under the BSD license found in the license.txt file.

function test(){  /** stringify and getters/setters with whitelist replacer */
	/*
	*
	*/
	var passed, obj={};
	obj.__defineGetter__('test', function(){return 'hello getter'});
	obj['bar']='not a getter';

	var str=JSON.stringify(
		obj, ['test']
	);

	passed=str.indexOf('hello getter')>-1 && str.indexOf('not a getter')==-1;

	return passed;
}
