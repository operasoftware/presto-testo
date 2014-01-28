// Copyright 2009 Opera Software.
// This code is released under the BSD license found in the license.txt file.

function test(){  /**  Stringifying a String object */
	var passed = JSON.stringify(new String('abc'))==='"abc"';
	return passed ;
}
