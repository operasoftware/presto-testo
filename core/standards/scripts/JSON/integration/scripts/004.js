// Copyright 2009 Opera Software.
// This code is released under the BSD license found in the license.txt file.

function test(){  /** Stringifying a core ECMAScript object with custom toJSON() */
	/*
	* Tests integration of the JSON and ECMAScript implementations when adding toJSON() to a native ECMAScript object
	*/
	var passed=true, faildesc;

	Math.toJSON = function(){
		return {
			E:this.E,
			LN2:this.LN2,
			LN10:this.LN10,
			LOG2E:this.LOG2E,
			LOG10E:this.LOG10E,
			PI:this.PI,
			SQRT1_2:this.SQRT1_2,
			SQRT2:this.SQRT2
		};
	};

	var str = JSON.stringify( Math );

	var obj=JSON.parse(
		str
	);

	for( var property in obj ){
		if( typeof obj[property]=='function' )continue;
		if( ! ( obj[property]===Math[property] /* value is incorrect in clone object */
		) ){
			passed=false;
			faildesc = property +' was '+obj[property]+', expected '+Math[property]
			test.failures?test.failures.push(faildesc) : test.failures=[faildesc];
		}
	}

	return passed;
}

