// set by each test case
var type = document.title;
var expectedCanPlay;
var expectedToLoad;

// used later
var video1 = document.createElement('video');
var video2 = document.createElement('video');
var ended = false;
var video1Passed = false;
var video2Passed = false;

// set up log and result reporting
var pre = document.createElement('pre');
pre.textContent = 'Running...';

function log(s) {
  if (!ended) {
    ended = true;
    try{top.opener.rr(false, s)}catch(e){}
    pre.textContent = 'FAIL\n\n';
  }
  pre.textContent += s + '\n';
}

// assertion functions
function assertEquals(a, b) {
  try {
    var evaledA = eval(a);
    if (evaledA !== b) {
      log(a+' was "'+evaledA+'", expected "'+b+'"');
    }
  } catch(e) {
    log('Got unexpected exception for '+a+': '+e.message);
  }
}

// test for a pass
function waitForPass() {
  if (!ended) {
    if (video1Passed && video2Passed) {
      ended = true;
      try{top.opener.rr(true, 'Test run was successful')}catch(e){}
      pre.textContent = 'PASS';
    } else {
      setTimeout(waitForPass, 100);
    }
  }
}
setTimeout(waitForPass, 100);

// give up after some time
function giveUp() {
  if (!ended) {
    ended = true;
    log('test timed out');
  }
}
setTimeout(giveUp, 10000);

onload = function() {

  document.body.appendChild(pre);

  // test stuff
  assertEquals('video1.canPlayType("'+type.replace(/"/g,'\\"')+'")', expectedCanPlay);

  video1.src = '/resources/file.php?file=media%2Fxiph%2Ftheora_testsuite%2F320x240.ogg&type='+encodeURIComponent(type)
              +'&status=200%20OK&sleep=0';
  video1.load(); // should be unnecessary

  // video1 can load
  video1.addEventListener('loadedmetadata', function(e) {
    if (!expectedToLoad)
      log('<video src=ogg> with content-type: '+type+' fired loadedmetadata event, expected error');
    else {
      video1Passed = true;
    }
  }, false);
  // or it can throw an error
  video1.addEventListener('error', function(e) {
    if (expectedToLoad)
      log('<video src=ogg> with content-type: '+type+' fired error event, expected to load');
    else {
      video1Passed = true;
    }
  }, false);

  video2.appendChild(document.createElement('source'));
  video2.firstChild.src = '/resources/media/xiph/theora_testsuite/320x240.ogg';
  video2.firstChild.type = type;
  video2.load(); // is necessary per spec atm but might become unnecessary

  // video2 can load
  video2.addEventListener('loadedmetadata', function(e) {
    if (expectedCanPlay == '')
      log('<video><source src=ogg type="'+type.replace(/"/g,'&quot;')+'"> fired loadedmetadata event, expected error');
    else {
      video2Passed = true;
    }
  }, false);
  // or it can throw an error originating from source
  video2.firstChild.addEventListener('error', function(e) {
    if (expectedCanPlay != '')
      log('<video><source src=ogg type="'+type.replace(/"/g,'&quot;')+'"> fired error event, expected to load');
    else {
      video2Passed = true;
    }
  }, false);
  // or an error originating from video
  video2.addEventListener('error', function(e) {
    if (expectedCanPlay != '')
      log('<video><source src=ogg type="'+type.replace(/"/g,'&quot;')+'"> fired error event, expected to load');
    log('the error event was fired on <video>, should be fired on <source> instead');
  }, false);
}
