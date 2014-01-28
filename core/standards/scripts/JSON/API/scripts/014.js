// Copyright 2009 Opera Software.
// This code is released under the BSD license found in the license.txt file.

function test(){  /**  Return value of Date.toJSON() */
	/* The Date API has poor support for time zones.
	* To avoid the initial date value being relative to the time zone of the computer,
	* we must parse a date *string* that includes time zone information
	*
	* Milliseconds are optional, test accepts return value both with and without ms
	*/
	var passed= /2009-01-04T15:21:34(\.\d\d\d|)Z/.test( (new Date('Sun Jan 04 2009 15:21:34 GMT+0000')).toJSON() ) ;
	return passed ;
}
