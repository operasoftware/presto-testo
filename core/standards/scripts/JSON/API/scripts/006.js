// Copyright 2009 Opera Software.
// This code is released under the BSD license found in the license.txt file.

function test(){  /**  values of JSON [[prototype]], [[class]] and [[extensible]] per spec draft */
	var passed = typeof JSON == 'object';
	passed = passed && typeof JSON.prototype == 'undefined'; // per spec, JSON only has the [[Prototype]] internal property, it's not exposed
	passed = passed && JSON.toString() == '[object JSON]';
	try{
		JSON.test_adding_a_property = 1;
	}catch(e){
		passed = false; // not extensible enough, dear
	}
	return passed ;
}
