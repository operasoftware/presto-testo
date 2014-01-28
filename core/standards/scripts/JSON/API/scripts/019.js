// Copyright 2009 Opera Software.
// This code is released under the BSD license found in the license.txt file.

function test(){  /**  JSON.stringify() space argument - tab */
	var obj={
		test:'abc',
		name:'value'
	}
	var str = JSON.stringify(obj, function(key,value){ return value;}, '\t' )  ;
	var passed =  (/\t"name"\s*:\s*/.test( str )) && (/\t"test"\s*:\s*/.test(str));
	return passed ;
}
