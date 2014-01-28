// Copyright 2009 Opera Software.
// This code is released under the BSD license found in the license.txt file.

function test(){  /** JSONWhiteSpace: disallow VT, FF, NBSP characters */
	/*
	* Spec: 15.12.1.1
	*/
	var exceptionCount=0;
	var strings=[
		'{  "foo" \u000C: "test" }',
		'{ "foo" \u000B: "test" }',
		'{ "foo" \u00A0: "test" }'
	];
	for(var i=0,str;str=strings[i];i++){
		try{
			var obj=JSON.parse(
				str
			);
		}catch(e){
			exceptionCount++;
		}
	}
	return exceptionCount===3 && typeof JSON==='object'; /* typeof to avoid a fake pass if JSON is not supported  */
}
