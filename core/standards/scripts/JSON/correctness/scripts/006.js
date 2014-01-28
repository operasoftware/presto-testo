// Copyright 2009 Opera Software.
// This code is released under the BSD license found in the license.txt file.

function test(){  /**  JSON.stringify() meets NaN and Infinity */
	/* Per spec draft:
	* "NaN and Infinity regardless of sign are represented as the string null."
	*/
	var passed = true;
	var obj = {  'infinity': Math.log(0), 'nan':Math.log(-1) };
	var str = JSON.stringify(
		obj
	);
	passed =  /"infinity"\s*:\s*null/.test(str) &&
		 /"nan"\s*:\s*null/.test(str) ;

	return passed ;
}
