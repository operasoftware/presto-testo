
var _conf_test_type='ORDER'; // or 'ORDER_AND_PROPERTIES'
var _conf_timeout_delay = top._conf_timeout_delay || 1000;

if( this==top ){
	/* set up the backend feedback stuff */
	var allRegisteredEvents=[];
	var server_report_timeout = null;
	var server_report = function(test_incomplete){
		var passed='no pass cond';
		var logstr='';
		if( top.expected ){
			passed = isArrayEqual( top.expected, allRegisteredEvents ) ? 'pass' : 'fail';
			logstr = ( passed=='pass' ? 'PASSED\n' : 'FAILED\n' );
			/* Fuzzy passes: sometimes an order is un(der)defined and it's OK - either order works for us.
			* We take another stab at the pass check if we have more than one pass condition
			*/
			if(!passed && top.expected2){
				passed = isArrayEqual( top.expected2, allRegisteredEvents ) ? 'pass' : 'fail';
				logstr = ( passed=='pass' ? 'PASSED (on alternate pass condition)\n' : 'FAILED\n' );
			}
		}
		test_incomplete=test_incomplete===true||false;
//		var x = (typeof XMLHttpRequest!='undefined') ?  new XMLHttpRequest() : (typeof ActiveXObject!='undefined') ? new ActiveXObject('Microsoft.XMLHTTP') : null;
//		x.open('POST', './_files/save_data.php', false);
//		x.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//		x.send( 'test='+parseInt(testNameFromUrl(top.location.href), 10)+'&data='+encodeURIComponent(allRegisteredEvents.join('\n'))+'&test_incomplete='+test_incomplete+'&passed_test='+passed );

		logToUI( logstr+'Test done!\n\n'+allRegisteredEvents.join('\n') );
		// Good, old SPARTAN..
		if(passed!='no pass cond'){
			try{top.opener.rr(passed=='pass');}catch(e){}
		}
	}
	var register = function(str ){
		allRegisteredEvents.push(str);
		if(server_report_timeout)clearTimeout(server_report_timeout);
		server_report_timeout=setTimeout( server_report, _conf_timeout_delay );
	}
	var isArrayEqual = function(ar1, ar2){
		if( ar1.length!=ar2.length )return false;
		for( var i=0; i<ar1.length;i++ ){
			if( ar1[i] !== ar2[i]  ) return false;
		}
		return true;
	}
}

function logToUI(str, win){
	win=win||window;
	if(win.document.getElementsByTagName('p').length){
		win.document.getElementsByTagName('p')[0].style.whiteSpace='pre';
		win.document.getElementsByTagName('p')[0].firstChild.data=str;
		// convenience UI: fake a link to next test
		if(document.body.tagName=='BODY' && document.body.lastChild.tagName!='A'){
			document.body.appendChild(document.createElement('a')).href = (location.href.indexOf('_files')>-1?'../':'' ) + (String(parseInt(testNameFromUrl(top.location.href), 10)+1001)).substr(1)+'.html'
			document.body.lastChild.appendChild(document.createTextNode('Next test...'));
			document.body.lastChild.setAttribute('target', '_top');
		}
	}else if(win.frames[0]){
		logToUI(str, win.frames[0]);
	}
}


function load(e, extra_info){
	e=e||window.event; // hello IE
	var target = e.target||e.srcElement; // hello again IE
	var eventDescription=e.type;
	if(extra_info)eventDescription+=' '+extra_info;
	/* what type of object is the target?
	* could be document, window, <iframe> element, <script>, <frame>, <frameset>, <img> etc..
	*
	* we could sort of use instanceof in browsers that support exposed interfaces, but this
	* is less cross-browser reliable.. so let's just say that if it walks like a duck and quacks like a duck..
	*/
	if( _conf_test_type === 'ORDER_AND_PROPERTIES' ){
		eventDescription+=' on '+describeTarget(target)+' with this: '+describeTarget(this);
	}else if( _conf_test_type === 'ORDER' ){
		eventDescription+=' in '+describeTarget(self);
	}
	top.register( eventDescription );
	logToUI(eventDescription);
}

function describeTarget(target){
	var eventDescription='';
	if( ! target ){
		return 'UNDEFINED';
	}else if( 'tagName' in target ){
		/* target is probably a DOM node */
		eventDescription+=target.tagName;
		if(target.id) eventDescription+='#'+target.id;
	}else if( 'URL' in target && 'documentElement' in target ){
		/* we're pretty sure target is some sort of document */
		eventDescription+='document ['+fileNameFromUrl(target.URL)+']';
	}else if( 'location' in target && (target == top || 'frameElement' in target )){
		/* target is a window object */
//		if(target.name){ // window.name bug in Safari makes this unpractical, reflects frameElement.id ?!?
//			eventDescription += 'window ['+target.name+']';
//		}else{
			eventDescription += 'window ['+fileNameFromUrl(target.location.href)+']';
//		}
	}else{
		/* I give up. No idea what this target is.. Possibly buggy something..*/
		eventDescription +'unknown target '+target;
	}
	if( self.frameElement ){
		eventDescription+= ' (in '+ self.frameElement.tagName;
		if(self.frameElement.id )eventDescription+='#'+self.frameElement.id;
		eventDescription+=' ['+fileNameFromUrl(self.location.href)+'])';
	}

	return eventDescription;
}

function fileNameFromUrl(url){ return url.substr(url.lastIndexOf('/')+1); }
function testNameFromUrl(url){ url=fileNameFromUrl(url); return url.substr(0, url.lastIndexOf('.')); }