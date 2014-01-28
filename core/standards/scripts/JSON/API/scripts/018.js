// Copyright 2009 Opera Software.
// This code is released under the BSD license found in the license.txt file.

function test(){  /**  JSON.stringify() replacer argument - function */
	var obj={
		test:'abc',
		name:'value'
	}
	var str = JSON.stringify(obj, function(key,value){ return (key=='name')?undefined:value;} )  ;
	var passed =  !(/"name"\s*:\s*/.test( str )) && (/"test"\s*:\s*/.test(str));
	if(!passed)test.failures=[str];
	return passed ;
}
