// Copyright 2009 Opera Software.
// This code is released under the BSD license found in the license.txt file.

function test(){  /**  Inside reviver, this refers to result object */
	/*
	* Spec: 15.12.2
	* Note:  the last time reviver is called, name is the empty string,
	* and the this object apparently is the internal "root" object from 15.12.2 point 4a
	*/
	var passed=true;
	var pointer;
	var obj = JSON.parse( '{ "a": "1" }', function(name,value){
		if(!pointer)pointer=this;
		return value;
	} );
	passed = pointer===obj;
	return passed ;
}
