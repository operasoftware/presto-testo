/*
Common methods for JSON tests
*/

function report( passed ){
	var log=document.getElementsByTagName('p')[0].firstChild;
	if( passed === false || passed === true ){
		log.data = (passed) ? 'PASSED' : 'FAILED' ;
		if(!passed && test.failures)log.data+= ' - details: '+test.failures;
		try{top.opener.rr(passed);}catch(e){}
	}else{
		log.data = passed ;
		// if this is a performance test we report the first number in the output string
		if(location.href.match( /\/performance\// ))try{top.opener.rr(passed.match(/\d+\.?\d+/));}catch(e){}
	}
}
