// Copyright 2009 Opera Software.
// This code is released under the BSD license found in the license.txt file.

function test(){  /**  JSON and data theft through redefined JS base objects */
	/* This builds on the exploits that enabled JSON data theft in Firefox 2.something
	* http://jeremiahgrossman.blogspot.com/2006/01/advanced-web-attack-techniques-using.html
	* http://directwebremoting.org/blog/joe/2007/03/05/json_is_not_as_safe_as_people_think_it_is.html
	* http://haacked.com/archive/2008/11/20/anatomy-of-a-subtle-json-vulnerability.aspx
	* Those exploits dealt with the case of parsing JSON text as JS directly by including a SCRIPT tag
	* Here is, somewhat far-fetched, a test to check if the JSON parser invokes e.g. Array in a way that enables
	* information theft. Threat model would be if code making a JSON.parse() call could be included in an untrusted page.
	*
	* (Note: whether this is supposed to be safe in the first place depends on whether window.JSON is
	* specified/implemented as a constant object, and whether its "parse" method can be overwritten.
	* If either JSON or JSON.parse itself can be overwritten this test is *irrelevant*.)
	*/
	var passed = false;
	var secrets;
	var originalArray=Array;
	Array = function() {
	  secrets = this;
	};
	try{
		JSON.parse(
			'{ test: [1,2,3] }'
		);
	}catch(e){
		passed=false;
	}
	passed = typeof secrets == 'undefined';
	Array=originalArray;
	return passed && typeof JSON=='object' ;
}
