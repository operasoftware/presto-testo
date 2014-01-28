// Copyright 2009 Opera Software.
// This code is released under the BSD license found in the license.txt file.

function test(){  /**  JSON numbers do not support octal numbers */
	/* JS implementations allow this for JS code, but it should not be allowed for JSON per the JSON spec
	* comments in https://mail.mozilla.org/pipermail/es-discuss/2009-June/009481.html indicate that this will be standardised
	*
	*/
	var passed;
	try{
		JSON.parse(
			'{"test": 011}'
		)
		passed = false;
	}catch(e){
		passed=true;
	}
	return passed;
}
