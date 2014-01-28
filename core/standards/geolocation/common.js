// tweak the variables below depending on your browser and your geolocation device
var geoServer="geo.php";

if (geoServer==="") alert("you must set the geoServer variable to the URL of your test geolocation service (see top of common.js)");

var g_timeout_in_seconds = 10;
var g_stress_iterations = 1000;
var geo=window.navigator.geolocation;

var testFinished=false;
var messageEl = $("message");
var instructionsEl = $("instructions");

// NOT USED: inject this test's javascript code
//var testNumberIndex=window.location.href.indexOf('?');
//if (testNumberIndex != -1)
//{
//  var testNumber = window.location.href.substring(testNumberIndex+1);
//  document.getElementsByTagName('title')[0].text='geolocation test '+testNumber;
//  document.getElementById('source').href="t"+testNumber+".js";
//  var testScript = document.createElement("script");
//  testScript.type='text/javascript';
//  testScript.src='t'+testNumber+'.js';
//  message('');
//  document.getElementsByTagName("body")[0].appendChild(testScript);
//}


if (geo==undefined) fail("geolocation API not supported by this browser");

var setup = document.getElementById('setup');
if (setup)
{
	var loc = document.location.href;
	loc = loc.replace(/\/[^\/]+\.html(?:\?.*)*$/, "/geo.php");
	setup.innerHTML = loc;
}


function $(id) { return document.getElementById(id); }
function pass(message,timeoutToClear) {
  if (!testFinished) {
    messageEl.className="pass"; messageEl.innerHTML="PASS"+(message?": "+message:"");
    if (timeoutToClear) clearTimeout(timeoutToClear);
    testFinished=true;
	/* JS framework snippet */
	try {top.opener.rr(true);}catch(e){};
  }
}
function fail(message,timeoutToClear) {
  if (!testFinished) {
    instruction("");
    messageEl.className="fail";
    messageEl.innerHTML="FAIL"+(message?": "+message:"");
    if (timeoutToClear) clearTimeout(timeoutToClear);
    testFinished=true;
	/* JS framework snippet */
	try {top.opener.rr(false);}catch(e){};
  }
}

function maybe(message) {
  if (!testFinished) {
    messageEl.className="maybe"; messageEl.innerHTML=message?message:"";
  }
  testFinished=true;
}

function message(message) {
  if (!testFinished) {
    messageEl.className=""; messageEl.innerHTML=message?message:"";
  }
}
function instruction(message) {
  if (!testFinished) {
    instructionsEl.innerHTML=message?message:"";
  }
}
function askAccept() { instruction("If asked, please grant location access"); }
function askAcceptAndWait() { instruction("If asked, please grant location access within "+g_timeout_in_seconds+" seconds."); }
function askRefuse() { instruction("If asked, please deny location access"); }
function askRefuseAndWait() { instruction("If asked, please deny location access within "+g_timeout_in_seconds+" seconds."); }
function askWait() { instruction("Please do nothing."); }

function waitUntil(command) {
  message("Wait at most "+g_timeout_in_seconds+" seconds.");
  setTimeout(command,g_timeout_in_seconds*1000);
}

function setupDevice(command) {
  // command must be strict JSON
  // the code below works for google geolocation service, and it should be adapted for other location devices

  if (command===undefined) {
    command="?"; // this is to force a GET, as otherwise Opera will use POST is the previous request was POST
  } else {
    command="?"+encodeURIComponent(command);
  }

  var script = document.createElement("script");
  script.type='text/javascript';
  script.src="setup-"+geoServer+command;
  document.getElementsByTagName("body")[0].appendChild(script);
}

function run(fn) {
  try {
    fn();
  } catch(e) { fail("unexpected exception "+e); };
}

function antirun(fn) {
  try {
    fn();
  } catch(e) { pass("expected exception "+e); };
}

var dummyFunction=function(){;};

var unexpectedError = function(e) { fail('An error happened unexpectedly, preventing this test to run: '+errorToString(e)); };
var unexpectedSuccess = function(pos) { fail('A success callback was unexpectedly triggered. FYI, position was: '+positionToString(pos)); };

var positionToString = function(pos) {
  var c=pos.coords;
  return "[lat: "+c.latitude+", lon: "+c.longitude+", acc: "+c.accuracy+"]";
}

var errorToString = function(err) {
  var codeString;
  switch(err.code) {
    case err.UNKNOWN_ERROR: codeString="UNKNOWN_ERROR"; break;
    case err.PERMISSION_DENIED: codeString="PERMISSION_DENIED"; break;
    case err.POSITION_UNAVAILABLE: codeString="POSITION_UNAVAILABLE"; break;
    case err.TIMEOUT: codeString="TIMEOUT"; break;
    default: codeString="undefined error code"; break;
  }
  return "[code: "+codeString+" ("+err.code+"), message: "+(err.message?err.message:"(empty)")+"]";
}
