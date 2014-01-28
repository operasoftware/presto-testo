// Copyright 2009 Opera Software.
// This code is released under the BSD license found in the license.txt file.

function test(){  /**  JSON.stringify() handling undefined and functions in objects */
	/* Per spec draft:
	* "In objects an unrepresentable value causes the property to be excluded from stringification."
	*/
	var passed;
	var obj = {  'undef': undefined, 'func' : function(){} };
	var str = JSON.stringify(
		obj
	);
	passed =  /\{\s*\}/.test(str) ;

	return passed ;
}
