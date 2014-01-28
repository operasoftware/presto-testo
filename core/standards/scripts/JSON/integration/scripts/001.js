// Copyright 2009 Opera Software.
// This code is released under the BSD license found in the license.txt file.

function test(){  /** Stringifying window.location */
	/*
	* Tests integration of the JSON and DOM (DOMWindow) implementations
	*/
	var passed=true;

	if( ! ('location' in this) ) return 'N/A (test requires window.location)';

	var str = JSON.stringify( this.location );

	var obj=JSON.parse(
		str
	);

	for( var property in this.location ){
		if( ! (typeof ( this.location[property] ) in { 'string':1, 'number':1 } ) ) continue; // JSON.stringify() only includes strings and numbers
		if( ! ( ( property in obj ) && /* property is not mirrored in the stringified, then parsed clone object */
		obj[property]==this.location[property] && /* value is incorrect in clone object */
		(new RegExp( '"'+property+'"\s*:\s*"'+this.location[property]+'"', '' )).test(str) /* property:value incorrect in stringify output */
		) ){
			passed=false;
			test.failures?test.failures.push(property) : test.failures=[property];
		}
	}

	return passed;
}
