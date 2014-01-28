// Copyright 2009 Opera Software.
// This code is released under the BSD license found in the license.txt file.

function test(){  /**  JSONEscapeCharacter in JSON source text */
	/*
	* Spec: 15.12.1.1
	*/
	var passed=true;
	var escapeCharacters = ['"', '/', '\\', 'b', 'f', 'n', 'r', 't'];
	for( var i=0,character;character=escapeCharacters[i];i++){
		try{
			JSON.parse(
				'{"test": "\\'+character+'"}'
			);
		}catch(e){
			passed = false;
			test.failures?test.failures.push(character):test.failures=[character];
		}
	}
	return passed;
}
