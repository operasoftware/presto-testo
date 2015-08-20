/** 
* User JS test user script
* hallvord@opera.com
*/

window.isTestUserJSInstalled=true;

/* defineMagic* tests */
opera.defineMagicVariable( 'defMVGetPassed', function(v){return !v;}, null );
opera.defineMagicVariable( 'defMVSetPassed', null, function(v){setterFunctionRan=v;} );

var defineMagicFunctionArgumentsOK=false;
opera.defineMagicFunction( 'defMFPassed', function(a,b,c){
	if(a.toString().indexOf('function defMFPassed')>-1 && b==window && c==1){ 
		defineMagicFunctionArgumentsOK=true; 
	}
	return true;} );

/* tests for events BeforeScript, BeforeExternalScript, AfterScript */

var beforeScriptFunctionRan=false, beforeScriptFunctionArgumentsOK=false,  beforeScriptFunctionWasRemoved=true;
opera.addEventListener( 'BeforeScript', function(e){ 
	beforeScriptFunctionRan=true;
	if(e && e.element){
		if(e.element==document.getElementsByTagName('script')[0] && e.element.text=='/*event listener test script #1*/' ){
			beforeScriptFunctionArgumentsOK=true;
		}else{
			beforeScriptFunctionWasRemoved=false;
		}
	}
	opera.removeEventListener('BeforeScript', arguments.callee, false);
}, false );

var afterScriptFunctionRan=false, afterScriptFunctionArgumentsOK=false,  afterScriptFunctionWasRemoved=true;
opera.addEventListener( 'AfterScript', function(e){ 
	afterScriptFunctionRan=true;
	if(e && e.element){
		if(e.element==document.getElementsByTagName('script')[0] && e.element.text=='/*event listener test script #1*/' ){
			afterScriptFunctionArgumentsOK=true;
		}else{
			afterScriptFunctionWasRemoved=false;
		}
	}
	opera.removeEventListener('AfterScript', arguments.callee, false);
}, false );

var beforeExternalScriptFunctionRan=false, beforeExternalScriptFunctionArgumentsOK=false,  beforeExternalScriptFunctionWasRemoved=true;
opera.addEventListener( 'BeforeExternalScript', function(e){ 
	beforeExternalScriptFunctionRan=true;
	if(e && e.element){
		if(e.element==document.getElementsByTagName('script')[2] && e.element.text=='' ){
			beforeExternalScriptFunctionArgumentsOK=true;
		}else{
			beforeExternalScriptFunctionWasRemoved=false;
		}
	}
	opera.removeEventListener('BeforeExternalScript', arguments.callee, false);
}, false );

/* Event handler for testing rewriting scripts and stopping script execution */

var scriptExecutionStopped=true;
opera.addEventListener('BeforeScript', function(e){

	if( e.element == document.getElementsByTagName('script')[3] ){
		e.element.text='var scriptRewriteSuccessful=true;';
	}else if( e.element == document.getElementsByTagName('script')[4] ){
		e.preventDefault();
	}
	
}, false);

/* Tests BeforeEvent.load, BeforeEventListener.load, AfterEvent.load and AfterEventListener.load */
/* Note: these run on the load events of the external SCRIPT elements */
var beforeEventLoadFired=false, afterEventLoadFired=false, beforeEventListenerLoadFired=false, afterEventListenerLoadFired=false,testJSOnloadWasCancelled=true;
opera.addEventListener( 'BeforeEvent.load', function(){ beforeEventLoadFired=true; }, false );
opera.addEventListener( 'BeforeEventListener.load', function(e){ beforeEventListenerLoadFired=true;
	if(e.listener && e.listener.toString().indexOf('testJSOnloadWasCancelled')>-1){ e.preventDefault(); }
}, false );
opera.addEventListener( 'AfterEvent.load', function(){ afterEventLoadFired=true; }, false );
opera.addEventListener( 'AfterEventListener.load', function(){ afterEventListenerLoadFired=true; }, false );

/* Before/AfterJavascriptURL tests */
var beforeJSUrlListenerRan=false, afterJSUrlListenerRan=false, javascriptURLCancelled=true,javascriptURLRewritten=false;
/* test: event.source read/write, event.returnValue, cancelling event */
opera.addEventListener( 'BeforeJavascriptURL', function(e){
	beforeJSUrlListenerRan=true;
	if(e.source=='var javascriptURLRewritten=false'){
		e.source='var javascriptURLRewritten=true;';
	}else if(e.source=='var javascriptURLCancelled=false;"FAILED to cancel javascript URL"'){
		e.preventDefault();
	}
}, false );

opera.addEventListener( 'AfterJavascriptURL', function(e){
	afterJSUrlListenerRan=true;
	if(e.returnValue=='FAILED to cancel javascript URL return value'){
		e.preventDefault();
	}
}, false );



/* history navigation mode tests */
/* very basic - testing the functionality would require an interactive test case.. */
var sOHNMPassed1=opera.getOverrideHistoryNavigationMode()=='automatic';
opera.setOverrideHistoryNavigationMode('compatible');
var sOHNMPassed2=opera.getOverrideHistoryNavigationMode()=='compatible';


/*
Not tested:
opera.pushXSLTransform
opera.popXSLTransform
*/
