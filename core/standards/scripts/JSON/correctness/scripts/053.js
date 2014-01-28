// Copyright 2009 Opera Software.
// This code is released under the BSD license found in the license.txt file.

function test(){  /**  JSON.parse() should ignore the second argument if it's not callable */
	/*
	* Spec: 15.12.2 step 4
	*/
	var failures=[];
	try{
		JSON.parse('{}', null);
	}catch(e){
		failures.push(e);
	}
	try{
		JSON.parse('{}', undefined);
	}catch(e){
		failures.push(e);
	}
	try{
		JSON.parse('{}', {});
	}catch(e){
		failures.push(e);
	}
	try{
		JSON.parse('{}', []);
	}catch(e){
		failures.push(e);
	}
	try{
		JSON.parse('{}', Math);
	}catch(e){
		failures.push(e);
	}
	try{
		JSON.parse('{}', 'hello world');
	}catch(e){
		failures.push(e);
	}
	try{
		JSON.parse('{}', 36542);
	}catch(e){
		failures.push(e);
	}
	var passed = failures.length===0;
	if(!passed)test.failures=failures;
	return passed && typeof JSON=='object' ;
}
