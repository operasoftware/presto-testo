// Copyright 2009 Opera Software.
// This code is released under the BSD license found in the license.txt file.

function test(){  /**  JSON.stringify() and properties pushed onto an object by Array methods */
	/*
	* Array.prototype.push and several of the other Array methods are generic - they can be used on objects
	* What happens to the generated properties when you stringify?
	*/
	var passed = false;
	var obj={};
	Array.prototype.push.call(obj, 'a');
	Array.prototype.push.call(obj, 'b');
	Array.prototype.push.call(obj, 'c');

	var str = JSON.stringify( obj );

	passed = /"0":"a"/.test(str);
	passed = passed && /"1":"b"/.test(str);
	passed = passed && /"2":"c"/.test(str);
	passed = passed && /"length":3/.test(str);
	if(!passed)test.failures=[str];
	return passed && typeof JSON=='object' ;
}
