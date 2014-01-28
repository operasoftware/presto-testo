// Copyright 2009 Opera Software.
// This code is released under the BSD license found in the license.txt file.

function test(){ /** Returns how many times JSON.stringify() ran on a deep, complex input object during one second */
	/*generating a big object.. */
	var obj =  {};
	for(var i=0,ref=obj;i<100;i++){
		if( !ref['key'+i] )ref['key'+i]={};
		ref['ar']=[];
		ref['ar'][i]=1.443e+5;
		if(i%2)ref['str']=(new Array(100)).join('a');
		if(i%3)ref['bools']=[true, false];
		if(i%5)ref['nothing']=null;
		if(i%5)ref['not_there']=undefined;
		ref.id=i;
		ref=ref['key'+i];
	}
	var count=0, goOn=true;
	var start=(new Date()).getTime();
	do{
		var str=JSON.stringify(obj);
		count++;
		// to avoid turning this into a Date() performance test.. we do a date check only once per 500 loops
		if(count%500==0)goOn=((new Date()).getTime()-start) <1000;
	}while( goOn );
	var time = (new Date()).getTime()-start;
	return 'Got score of '+ 100000*time/count+'. The input was stringified '+count+' times in ' + ((new Date()).getTime()-start) +'ms' ;
}
