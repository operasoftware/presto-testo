// Copyright 2009 Opera Software.
// This code is released under the BSD license found in the license.txt file.

function test(){  /**  JSON.parse() behaviour if reviver modifies result object */
	/*
	* Spec: 15.12.2
	*
	* Note:  the last time reviver is called, name is the empty string,
	* and the this object apparently is the internal "root" object from 15.12.2 point 4a
	* Test contains a somewhat underspecified assertation: it asserts that such behaviour will not make the implementation loop,
	* spec does not cover this case
	*/
	var passed=false;
	var obj = JSON.parse( '{ "a": "1" }', function(name,value){
		this['_revivertest_'+name]=value;
		return value;
	} );
	passed = obj.a==1 &&
		obj['_revivertest_a']==1;
	return passed ;
}
