// Copyright 2009 Opera Software.
// This code is released under the BSD license found in the license.txt file.

function test(){  /**  Stringifying a Boolean */
	var passed= (JSON.stringify( new Boolean(true)))==='true' ;
	return passed ;
}
