// Copyright 2009 Opera Software.
// This code is released under the BSD license found in the license.txt file.

function test(){  /**  JSON.stringify() should ignore named properties of arrays */

	var passed;
	var array = new Array('a','b','c');
	array.testPropertyThatShouldBeIgnored = 1;
	var str = JSON.stringify( {ar:array} );
	passed =  str.indexOf('testPropertyThatShouldBeIgnored') == -1;

	return passed ;
}
