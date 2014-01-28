// Copyright 2009 Opera Software.
// This code is released under the BSD license found in the license.txt file.

function test(){  /** Parsing numbers beyond the normal maximum / minimum value */
	/*
	* Not explicitly covered by the JSON part of the spec, but implied by "Let unfiltered be the result of parsing and evaluating JText as if
	* it was the source text of an ECMAScript program but using JSONString in place of StringLiteral."
	*/
	var passed;
	var str = '{ "very_big_number":1e+400, "very_small_number":1e-400 }';

	var obj=JSON.parse(
		str
	);

	var passed = obj.very_big_number==Number.POSITIVE_INFINITY &&
		obj.very_small_number==0 ;
	return passed;
}
