// Copyright 2009 Opera Software.
// This code is released under the BSD license found in the license.txt file.

function test(){  /**  stringify Number object */
	var passed= JSON.stringify(new Number(15)) === '15' ;
	return passed ;
}
