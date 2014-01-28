// Copyright 2009 Opera Software.
// This code is released under the BSD license found in the license.txt file.

function test(){  /**  JSON.parse() behaviour if reviver deletes properties   */
	/*
	* Spec: 15.12.2 "Abstract operation Walk" algorithm 2.b
	*/
	var passed;
	var str = '{ "a":"A", "b":"B", "c":"C" }';
	var counter=0;
	var obj = JSON.parse(
		str, function(key, value){
			counter++;
			if( key == 'a' || key=='b' || key =='c' ){
				delete this.a;
				delete this.b;
				delete this.c;
			}
			return value;
		}
	);
	// the properties were all deleted, but we did run the reviver 4 times because per the spec,
	// the implementation makes a list of keys before it starts calling the reviver
	passed = typeof obj.a ==='undefined' &&
		typeof obj.b ==='undefined' &&
		typeof obj.c ==='undefined' &&
		counter == 4;
	if(!passed)test.failures=['output: '+JSON.stringify(obj)+' - reviver called '+counter+' times'];
	return passed;
}
