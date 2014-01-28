<!--
	if ((navigator.platform=='MacPPC')&&(navigator.appVersion.substr(17,8) != "MSIE 5.0")) {document.write('<LINK rel="stylesheet" href="http://i.cnn.net/money/styles/cnnmoney_mac.css" type="text/css">')}
	if (screen.width > 1200)        
	{document.write('<LINK rel="stylesheet" href="http://i.cnn.net/money/styles/cnnmoney.css" type="text/css">')}                
//-->	

// this is for opening pop-up windows
function openWindow (earl,name,widgets) 
{
	var url = earl;
	popupWin = window.open (url,name,widgets);
	popupWin.opener.top.name="opener";
	popupWin.focus();
}


/* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */


var agt		= navigator.userAgent.toLowerCase();
var versInt	= parseInt(navigator.appVersion);
var is_aol	= (agt.indexOf("aol") != -1);


function CNN_goTo( url ) {
	window.location.href = url;
}


function CNN_openPopup( url, name, widgets, openerUrl )
{
	var host = location.hostname;
	var popupWin = window.open( url, name, widgets );
	
	if ( popupWin && popupWin.opener ) {
		if ( openerUrl )
		{
			popupWin.opener.location = openerUrl;
			popupWin.focus();
		}
		popupWin.opener.top.name = "opener";
	}
}


// _____________________________________________________________ WebMonkey code
/*
WM_setCookie(), WM_readCookie(), WM_killCookie()
A set of functions that eases the pain of using cookies.

Source: Webmonkey Code Library
(http://www.hotwired.com/webmonkey/javascript/code_library/)

Author: Nadav Savio
*/

// This next little bit of code tests whether the user accepts cookies.
function WM_browserAcceptsCookies() {
	var WM_acceptsCookies = false;
	if ( document.cookie == '' ) {
		document.cookie = 'WM_acceptsCookies=yes'; // Try to set a cookie.
		if ( document.cookie.indexOf( 'WM_acceptsCookies=yes' ) != -1 ) {
			WM_acceptsCookies = true;
		} // If it succeeds, set variable
	} else { // there was already a cookie
		WM_acceptsCookies = true;
	}
	
	return ( WM_acceptsCookies );
}

function WM_setCookie( name, value, hours, path, domain, secure ) {
	if ( WM_browserAcceptsCookies() ) { // Don't waste your time if the browser doesn't accept cookies.
		var numHours = 0;
		var not_NN2 = ( navigator && navigator.appName
					&& (navigator.appName == 'Netscape')
					&& navigator.appVersion
					&& (parseInt(navigator.appVersion) == 2) ) ? false : true;

		if ( hours && not_NN2 ) { // NN2 cannot handle Dates, so skip this part
			if ( (typeof(hours) == 'string') && Date.parse(hours) ) { // already a Date string
				numHours = hours;
			} else if ( typeof(hours) == 'number' ) { // calculate Date from number of hours
				numHours = ( new Date((new Date()).getTime() + hours*3600000) ).toGMTString();
			}
		}
		
		document.cookie = name + '=' + escape(value) + ((numHours)?(';expires=' + numHours):'') + ((path)?';path=' + path:'') + ((domain)?';domain=' + domain:'') + ((secure && (secure == true))?'; secure':''); // Set the cookie, adding any parameters that were specified.
	}
} // WM_setCookie

function WM_readCookie( name ) {
	if ( document.cookie == '' ) { // there's no cookie, so go no further
	    return false;
	} else { // there is a cookie
	    var firstChar, lastChar;
		var theBigCookie = document.cookie;
		firstChar = theBigCookie.indexOf(name);	// find the start of 'name'
		var NN2Hack = firstChar + name.length;
		if ( (firstChar != -1) && (theBigCookie.charAt(NN2Hack) == '=') ) { // if you found the cookie
			firstChar += name.length + 1; // skip 'name' and '='
			lastChar = theBigCookie.indexOf(';', firstChar); // Find the end of the value string (i.e. the next ';').
			if (lastChar == -1) lastChar = theBigCookie.length;
			return unescape( theBigCookie.substring(firstChar, lastChar) );
		} else { // If there was no cookie of that name, return false.
			return false;
		}
	}	
} // WM_readCookie

function WM_killCookie( name, path, domain ) {
	var theValue = WM_readCookie( name ); // We need the value to kill the cookie
	if ( theValue ) {
		document.cookie = name + '=' + theValue + '; expires=Fri, 13-Apr-1970 00:00:00 GMT' + ((path)?';path=' + path:'') + ((domain)?';domain=' + domain:''); // set an already-expired cookie
	}
} // WM_killCookie


// ______________________________________________________________________ Apple
// Copyright © 2000 by Apple Computer, Inc., All Rights Reserved.

// initialize global variables
var detectableWithVB = false;
var pluginFound = false;


function canDetectPlugins() {
	if ( detectableWithVB || (navigator.plugins && navigator.plugins.length > 0) ) {
		return true;
	}
	return false;
}

function detectFlash() {
	pluginFound = detectPlugin( 'Shockwave', 'Flash' );
	// if not found, try to detect with VisualBasic
	if ( !pluginFound && detectableWithVB ) {
		pluginFound = detectActiveXControl( 'ShockwaveFlash.ShockwaveFlash.1' );
	}
	return pluginFound;
}

function detectDirector() {
	pluginFound = detectPlugin( 'Shockwave', 'Director' );
	// if not found, try to detect with VisualBasic
	if ( !pluginFound && detectableWithVB ) {
		pluginFound = detectActiveXControl( 'SWCtl.SWCtl.1' );
	}
	return pluginFound;
}

function detectQuickTime() {
	pluginFound = detectPlugin( 'QuickTime' );
	// if not found, try to detect with VisualBasic
	if ( !pluginFound && detectableWithVB ) {
		pluginFound = detectQuickTimeActiveXControl();
	}
	return pluginFound;
}

function detectReal() {
	pluginFound = detectPlugin( 'RealPlayer' );
	// if not found, try to detect with VisualBasic
	if ( !pluginFound && detectableWithVB ) {
		pluginFound = ( detectActiveXControl('rmocx.RealPlayer G2 Control') ||
			detectActiveXControl('RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)') ||
			detectActiveXControl('RealVideo.RealVideo(tm) ActiveX Control (32-bit)')
		);
	}
	return pluginFound;
}

function detectRealOne() {
	pluginFound = detectPlugin( 'RealOne Player Version Plugin' ) || detectPlugin( 'RealPlayer Version Plugin' );
	// if not found, try to detect with VisualBasic
	if ( !pluginFound && detectableWithVB ) {
		pluginFound = detectRealOneActiveXControl();
	}
	return pluginFound;
}

function detectWindowsMedia() {
	pluginFound = detectPlugin( 'Windows Media' );
	// if not found, try to detect with VisualBasic
	if ( !pluginFound && detectableWithVB ) {
		pluginFound = detectActiveXControl( 'MediaPlayer.MediaPlayer.1' );
	}
	return pluginFound;
}

function detectPlugin() {
	// allow for multiple checks in a single pass
	var daPlugins = arguments;
	// consider pluginFound to be false until proven true
	var pluginFound = false;
	// if plugins array is there and not fake
	if ( navigator.plugins && navigator.plugins.length > 0 ) {
		var pluginsArrayLength = navigator.plugins.length;
		// for each plugin...
		for ( var pluginsArrayCounter = 0; pluginsArrayCounter < pluginsArrayLength; pluginsArrayCounter++ ) {
			// loop through all desired names and check each against the current plugin name
			var numFound = 0;
			for ( var namesCounter = 0; namesCounter < daPlugins.length; namesCounter++ ) {
				// if desired plugin name is found in either plugin name or description
				if ( (navigator.plugins[pluginsArrayCounter].name.indexOf(daPlugins[namesCounter]) >= 0) ||
					(navigator.plugins[pluginsArrayCounter].description.indexOf(daPlugins[namesCounter]) >= 0) ) {
					// this name was found
					numFound++;
				}
			}
			// now that we have checked all the required names against this one plugin,
			// if the number we found matches the total number provided then we were successful
			if ( numFound == daPlugins.length ) {
				pluginFound = true;
				// if we've found the plugin, we can stop looking through at the rest of the plugins
				break;
			}
		}
	}
	return pluginFound;
} // detectPlugin


// Here we write out the VBScript block for MSIE Windows
if ( (navigator.userAgent.indexOf('MSIE') != -1) && (navigator.userAgent.indexOf('Win') != -1) ) {
	document.writeln( '<script language="VBscript">' );

	document.writeln( '\'do a one-time test for a version of VBScript that can handle this code' );
	document.writeln( 'detectableWithVB = False' );
	document.writeln( 'If ScriptEngineMajorVersion >= 2 then' );
	document.writeln( '  detectableWithVB = True' );
	document.writeln( 'End If' );

	document.writeln( '\'this next function will detect most plugins' );
	document.writeln( 'Function detectActiveXControl( activeXControlName )' );
	document.writeln( '  on error resume next' );
	document.writeln( '  detectActiveXControl = False' );
	document.writeln( '  If detectableWithVB Then' );
	document.writeln( '     detectActiveXControl = IsObject( CreateObject( activeXControlName ) )' );
	document.writeln( '  End If' );
	document.writeln( 'End Function' );

	document.writeln( '\'and the following function handles QuickTime' );
	document.writeln( 'Function detectQuickTimeActiveXControl()' );
	document.writeln( '  on error resume next' );
	document.writeln( '  detectQuickTimeActiveXControl = False' );
	document.writeln( '  If detectableWithVB Then' );
	document.writeln( '    detectQuickTimeActiveXControl = False' );
	document.writeln( '    hasQuickTimeChecker = false' );
	document.writeln( '    Set hasQuickTimeChecker = CreateObject( "QuickTimeCheckObject.QuickTimeCheck.1" )' );
	document.writeln( '    If IsObject( hasQuickTimeChecker ) Then' );
	document.writeln( '      If hasQuickTimeChecker.IsQuickTimeAvailable( 0 ) Then ' );
	document.writeln( '        detectQuickTimeActiveXControl = True' );
	document.writeln( '      End If' );
	document.writeln( '    End If' );
	document.writeln( '  End If' );
	document.writeln( 'End Function' );

	document.writeln( '\'and the following function handles RealOne' );
	document.writeln( 'Function detectRealOneActiveXControl()' );
	document.writeln( '  on error resume next' );
	document.writeln( '  detectRealOneActiveXControl = False' );
	document.writeln( '  If detectableWithVB Then' );
	document.writeln( '    detectRealOneActiveXControl = False' );
	document.writeln( '    hasRealOneVersionPlugin = false' );
	document.writeln( '    Set hasRealOneVersionPlugin = CreateObject( "IERPCtl.IERPCtl.1" )' );
	document.writeln( '    If IsObject( hasRealOneVersionPlugin ) Then' );
	document.writeln( '      If hasRealOneVersionPlugin.RealPlayerVersion Then ' );
	document.writeln( '        detectRealOneActiveXControl = True' );
	document.writeln( '      End If' );
	document.writeln( '    End If' );
	document.writeln( '  End If' );
	document.writeln( 'End Function' );

	document.writeln( '<\/scr' + 'ipt>' );
}


// ________________________________________________________________ LaunchVideo

function LV_getRealOneStatus() {	// returns ('undetermined'|'installed'|'notinstalled'|'using')
	var RealOneInst = "undetermined";

	if ( canDetectPlugins() ) {
		if ( detectRealOne() ) {
			RealOneInst = "installed";
			if ( agt.indexOf( "(r1 " ) != -1 ) {
				RealOneInst = "using";
			}
		} else {
			RealOneInst = "notinstalled";
		}
	}

	return RealOneInst;
}

function LV_getVideoUrl( videoUrlPath, format, realOneStatus ) {
	var fullUrl;
	var premiumUrlPrefix = "http://premium.money.cnn.com/pr/video";
	
	switch( realOneStatus ) {
		case "using":
			fullUrl = premiumUrlPrefix + "/meta" + videoUrlPath + "r1.smil"; 
			break;
		case "installed":
			fullUrl = premiumUrlPrefix + "/meta" + videoUrlPath + "np.smil"; 
			break;
		case "notinstalled":
		default:
			fullUrl = premiumUrlPrefix + videoUrlPath + "exclude.html";
			if ( format == "public" ) {
				fullUrl = "http://premium.money.cnn.com/video" + videoUrlPath + "exclude.html";
			}
			break;
	}
	
	return ( fullUrl );
}

function LaunchVideo( videoPath, videoFormat ) {
	var VIDEO_POPUP_WIDTH = 620;
	var VIDEO_POPUP_HEIGHT = 480;
	var realOneStatus = LV_getRealOneStatus();
	var videoUrl;

	if ( realOneStatus != "using" ) {	// if you're not using RealOne..
		var isSynacor = WM_readCookie( "synacor" );
		if ( is_aol || isSynacor ) {	// if you're using AOL or from Synacor, you're getting the popup
			realOneStatus = "notinstalled";
		} else {	// let's check your cookie
			var playerPref = WM_readCookie( "player" );
			if ( playerPref ) {
				switch ( playerPref.toUpperCase() ) {
					case "REALONE":
					case "REAL":	// if your preference is Real, but it's not installed..
						if ( realOneStatus != "installed" ) {
							realOneStatus = "notinstalled";	// ..you'll get the popup
						}
						break;
					case "WINDOWS MEDIA":
					default:
						realOneStatus = "notinstalled";	// popup window
						break;
				}
			}
		}
	}
		
	videoUrl = LV_getVideoUrl( videoPath, videoFormat, realOneStatus );
	
	if ( videoUrl.indexOf( ".exclude.html" ) > 0 ) {
		CNN_openPopup( videoUrl, '' + VIDEO_POPUP_WIDTH + 'x' + VIDEO_POPUP_HEIGHT, 'width=' + VIDEO_POPUP_WIDTH + ',height=' + VIDEO_POPUP_HEIGHT + ',scrollbars=no,resizable=no' );
	} else {
		top.location.href = videoUrl;
	} 
}

//CSI functions
var cnnCSIs = new Array();
var cnnUseDelayedCSI = 0;
var localUserAgent = navigator.userAgent.toLowerCase();
if((localUserAgent.indexOf('msie')>-1) && (localUserAgent.indexOf('mac')>-1)){cnnUseDelayedCSI = 1;}
 
function cnnAddCSI(id,source,args)
{
 if(!args) { args='';}
 if(cnnUseDelayedCSI)
 {
  var newCSI = new Object();
  newCSI.src = source;
  newCSI.id  = id;
  newCSI.args = args;
  cnnCSIs[cnnCSIs.length]=newCSI;
 }
 else
 {
  var today = new Date();
  var currTime = today.getTime();
  var iframeArgs = '&time='+currTime;
  if(args)
  {
   iframeArgs=iframeArgs+'&'+args;
  }
  var iframeHtmlSrc='<iframe src="'+source+'?domId='+id+iframeArgs+'" name="iframe'+id+'" id="iframe'+id+'" width="0" height="0" align="right" style="visibility:hidden"></iframe>';
  document.write(iframeHtmlSrc);
 }
}
 
function cnnUpdateCSI(html, id)
{
 var htmlContainerObj = document.getElementById( id ) || document.all[ id ];
 if(htmlContainerObj)
 {
  htmlContainerObj.innerHTML = html;
 }
 //force a refresh of the content area
 var htmlContentArea = document.body;
 if(htmlContentArea)
 {
  var previousTopVal = htmlContentArea.style.top || '0px';
  htmlContentArea.style.top = '1px';
  htmlContentArea.style.top = previousTopVal;
 }
}
 
function cnnHandleCSIs()
{
 if(document.body && document.body.innerHTML && cnnUseDelayedCSI)
 {
  var iframeOwner = document.getElementById( 'csiIframe' ) || document.all[ 'csiIframe' ];
  var iframeHtmlSrc = '';
 
  for(var incCounter=0;incCounter<cnnCSIs.length;incCounter++)
  {
   var src = cnnCSIs[incCounter].src;
   var id = cnnCSIs[incCounter].id;
   var today = new Date();
   var currTime = today.getTime();
   var args = '&time='+currTime;
   if(cnnCSIs[incCounter].args)
   {
    args=args+'&'+cnnCSIs[incCounter].args;
   }
   
   iframeHtmlSrc+='<iframe src="'+src+'?domId='+id+args+'" name="iframe'+id+'" id="iframe'+id+'" width="0" height="0" align="right"></iframe>';
  }
  if(iframeOwner)
  {
   iframeOwner.innerHTML=iframeHtmlSrc;
  }
 }
}
 
var cnnEnableCL = true;

//domain fix
var cnnDocDomain = '';
if(location.hostname.indexOf('cnn.com')>0) {cnnDocDomain='cnn.com';}
if(location.hostname.indexOf('turner.com')>0) {if(document.layers){cnnDocDomain='turner.com:'+location.port;}else{cnnDocDomain='turner.com';}}
if(cnnDocDomain) {document.domain = cnnDocDomain;}


// end
