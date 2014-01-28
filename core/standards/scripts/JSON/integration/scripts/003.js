// Copyright 2009 Opera Software.
// This code is released under the BSD license found in the license.txt file.

function test(){  /** Stringifying a core ECMAScript object */
	/*
	* Tests integration of the JSON and ECMAScript implementations
	* Note: Math doesn't seem to have enumerable properties so this test doesn't actually test very much..
	*/
	var passed=true;

	var str = JSON.stringify( Math );

	var obj=JSON.parse(
		str
	);

	for( var property in Math ){
		if( ! (typeof ( Math[property] ) in { 'string':1, 'number':1,  'boolean':1, 'object':1 } ) )continue; // JSON.stringify() only includes strings, numbers, booleans and objects
		if( ! Math.hasOwnProperty( property ) ) continue ; // inherited properties not included in JSON output
		if( ! ( ( property in obj ) && /* property is not mirrored in the stringified, then parsed clone object */
		obj[property]==Math[property] /* value is incorrect in clone object */
		) ){
			passed=false;
			test.failures?test.failures.push(property) : test.failures=[property];
		}
	}

	return passed;
}

