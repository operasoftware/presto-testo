// Copyright 2009 Opera Software.
// This code is released under the BSD license found in the license.txt file.

function test(){  /**  JSON.parse() and array-like objects */
	var obj=JSON.parse(
		'{"0":"a", "1":"b", "2":"c", "length":3}'
	);
	var keys=[];
	for( var prop in obj )keys.push(prop);
	var passed = keys.length==4;
	passed = passed && obj[0]=='a';
	passed = passed && obj[1]=='b';
	passed = passed && obj[2]=='c';
	passed = passed && obj.length=='3';
	obj[3]='d';
	passed = passed && obj.length=='3';
	return passed;
}