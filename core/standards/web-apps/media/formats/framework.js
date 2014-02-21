// set by each test case; add more of these when you need them
var expectedWidth;
var expectedHeight;
var expectedDuration;
var expectedPixelAspectRatio;
var expectedDimensionChanges;
var type;

// set later, possibly used in eval
var div;
var video;
var canvas;
var ctx;
var refCanvas;
var refCtx;
var diffCanvas;
var diffCtx;
var pattern;
var loadDate;
var comparePixelsDate;
var pre;
var ended;
var loggedEvents;
var unexpectedEvents;
var GET;
var playingDate;
var worker;

// tolerance variables, might have to be tweaked later
var durationTolerance = 0.3;
var durationChangeTolerance = 0;
var pixelDataTolerance = 1;
var currentTimeChangeTolerance = 0.2;

// some style
var style = document.createElement('style');
style.textContent =  'body { line-height:1 } div { position:absolute; top:8px; right:8px } video, canvas { display:block; margin:0 0 8px auto } pre { position:relative; display:inline; background-color:rgba(255, 255, 255, 0.8) } pre:after { content:""; display:block; margin-top:1em }';
document.documentElement.firstChild.appendChild(style);

// log
pre = document.createElement('pre');
pre.textContent='Running...';

function log(s, event) {
  if (event)
    s += ' ('+event.type+')';
  s += ' ('+(new Date()-loadDate)+'ms)\n';
  if (pre.textContent == 'Running...') {
    pre.textContent = 'FAIL\n'+s;
    ended = true;
    try{top.opener.rr(false, s)}catch(e){}
  } else {
    pre.textContent += s;
  }
}

// do heavy work in a web worker if it's supported
// this will not work in firefox doesn't support structured clones
// but who cares
if (window.Worker) {
  worker = new Worker('/core/standards/web-apps/media/formats/worker.js');
} else { // fall back to old-school
  (function() {
    var script = document.createElement('script');
    script.src = '/core/standards/web-apps/media/formats/helpers.js';
    document.documentElement.firstChild.appendChild(script);
  })();
}

onload = function() {

  loadDate = new Date();

  var expectedCorrectedWidth = expectedWidth;
  var expectedCorrectedHeight = expectedHeight;
  if (expectedPixelAspectRatio) {
    if (expectedPixelAspectRatio > 1) {
      expectedCorrectedWidth = Math.round(expectedWidth*expectedPixelAspectRatio);
    } else if (expectedPixelAspectRatio < 1) {
      expectedCorrectedHeight = Math.round(expectedHeight/expectedPixelAspectRatio);
    }
  }

  var currentDimensionIndex = 0;

  GET = {};
  (function() {
    var components = location.search.substr(1).split('&');
    var name;
    var value;
    var eqPos;
    for (var i = 0; i < components.length; ++i) {
      eqPos = components[i].indexOf('=');
      if (eqPos == -1) {
        name = components[i];
        value = '';
      } else {
        name = components[i].substr(0, eqPos);
        value = components[i].substr(eqPos+1).replace(/\+/g, ' ');
      }
      if (name != '') {
        GET[decodeURIComponent(name)] = decodeURIComponent(value);
      }
    }
  })();

  document.body.replaceChild(pre, document.querySelector('pre'));

  function end() {
    if (ended) return;
    ended = true;
    pre.textContent = 'PASS\n';
    try{top.opener.rr(true)}catch(e){}
  }

  div = document.createElement('div');
  document.body.insertBefore(div, pre);

  video = document.createElement('video');
  video.preload = 'auto';
  video.controls = true;
  if ('loop' in GET)
    video.loop = true;
  video.src = document.title+'?'+(loadDate-0);
  div.appendChild(video);

  if (typeof video.play == 'undefined') {
    log('video not supported');
  }

  canvas = document.createElement('canvas');
  if (expectedWidth) {
    canvas.width = expectedWidth;
    canvas.height = expectedHeight;
  }
  ctx = canvas.getContext('2d');
  div.appendChild(canvas);

  refCanvas = canvas.cloneNode(true);
  refCtx = refCanvas.getContext('2d');
  div.appendChild(refCanvas);

  diffCanvas = canvas.cloneNode(true);
  diffCtx = diffCanvas.getContext('2d');
  div.appendChild(diffCanvas);

  canvas.title = 'Video painted on canvas';
  refCanvas.title = 'Reference image';
  diffCanvas.title = 'Difference between video and reference image';

  function shouldPaintCanvas(event) {
    if (arguments.callee.done)
      return;
    arguments.callee.done = true;
    if (!expectedWidth)
      return;
    try {
      ctx.drawImage(video, 0, 0, expectedWidth, expectedHeight);
      assertEquals('ctx.getImageData(0, 0, 1, 1).data[3]', 255, event);
      eventLog.textContent += 'Video painted on canvas ('+(new Date()-loadDate)+'ms)\n';
    } catch(e) {
      log('ctx.drawImage threw '+e.name+', expected no exception', event);
    }
  }

  function shouldNotPaintCanvas(event) {
    if (!expectedWidth)
      return;
    try {
      ctx.drawImage(video, 0, 0, expectedWidth, expectedHeight);
      assertEquals('ctx.getImageData(0, 0, 1, 1).data[3]', 0, event);
    } catch(e) {
      log('ctx.drawImage threw '+e.name+', expected no exception', event);
    }
  }

  var refImg = new Image();
  var refImgLoaded = false; // work around refImg.complete bug
  refImg.src = document.location.href.replace(/\.html(?:\?.*)?(?:\#.*)?$/, '.png');

  refImg.onload = function() {
    refCtx.drawImage(refImg, 0, 0, expectedWidth, expectedHeight);
    eventLog.textContent += 'Reference image loaded ('+(new Date()-loadDate)+'ms)\n';
    refImgLoaded = true;
    comparePixels();
  }

  function comparePixels() {
    if (arguments.callee.done || !loggedEvents.loadeddata || !refImgLoaded)
      return;
    arguments.callee.done = true;
    comparePixelsDate = new Date();
    var finishedPixelsDate;
    var imageData = ctx.getImageData(0, 0, expectedWidth, expectedHeight);
    var refImageData = refCtx.getImageData(0, 0, expectedWidth, expectedHeight);
    var diffImageData = diffCtx.getImageData(0, 0, expectedWidth, expectedHeight);
    if (worker) {
      worker.postMessage([imageData, refImageData, diffImageData, pixelDataTolerance, expectedWidth]);
      worker.onmessage = function(e) {
        if (typeof e.data == 'string') {
          log(e.data);
        } else {
          diffImageData = e.data;
          diffCtx.putImageData(diffImageData, 0, 0);
          eventLog.textContent += 'Diff image painted; took '+(new Date()-comparePixelsDate)+'ms ('+(new Date()-loadDate)+'ms)\n';        }
      }
    } else {
      diffImageData = processPixels(imageData, refImageData, diffImageData, pixelDataTolerance, expectedWidth);
      diffCtx.putImageData(diffImageData, 0, 0);
      eventLog.textContent += 'Diff image painted; took '+(new Date()-comparePixelsDate)+'ms ('+(new Date()-loadDate)+'ms)\n';
    }
  }

  var eventLog = document.createElement('pre');
  eventLog.textContent = 'Event log:\n';
  document.body.appendChild(eventLog);

  loggedEvents = {};
  var timeouts = {};
  //var wasLoadedDuringProgress = false;

  unexpectedEvents = ['pause','abort','error','emptied','stalled','waiting','seeking','ratechange','volumechange','load','loadend'];
  if (!('loop' in GET))
    unexpectedEvents.push('seeked');

  function logEvent(event, allowMany) {
    if (unexpectedEvents.indexOf(event.type) != -1)
      unexpectedEvent(event)
    else if (!allowMany)
      unexpectedEvents.push(event.type);
    event.date = new Date();
    event.duration = video.duration;
    event.currentTime = video.currentTime;
    loggedEvents[event.type] = event;
    eventLog.textContent += event.type+' ('+(event.date-loadDate)+'ms)\n';
  }

  function unexpectedEvent(event, reason) {
    log('Got unexpected '+event.type+' event'+(reason?'; '+reason:''));
  }

  function assertSeenEvent(s, event) {
    if (!(s in loggedEvents))
      log('Expected to have seen '+s+' event at this point', event);
  }

  function assertNotSeenEventIn(s, time, event) {
    if (loggedEvents[s] && new Date() - loggedEvents[s].date < time)
      log(event.type+' event seen '+(new Date() - loggedEvents[s].date)+'ms since last '+s+' event, expected at least '+time+'ms');
  }

  function assertSeenEventIn(s, time, event) {
    if (loggedEvents[s] && new Date() - loggedEvents[s].date > time)
      log(event.type+' event seen '+(new Date() - loggedEvents[s].date)+'ms since last '+s+' event, expected less than '+time+'ms');
  }

  function expectEventIn(s, time, event) {
    if (timeouts[s])
      clearTimeout(timeouts[s]);
    timeouts[s] = setTimeout(function() {
      if (!loggedEvents[s] || new Date() - loggedEvents[s].date > time)
        log('Expected to have seen '+s+' event within '+time+'ms since last '+event.type+' event');
    }, time)
  }

  function expectNoFurtherEvent(s) {
    if (timeouts[s])
      clearTimeout(timeouts[s]);
    if (unexpectedEvents.indexOf(s) == -1)
      unexpectedEvents.push(s);
  }

  function assertEquals(a, b, event) {
    try {
      var evaledA = eval(a);
      if (evaledA !== b)
        log(a+' was '+evaledA+', expected '+b, event);
    } catch(e) {
      log('Got unexpected exception for '+a+': '+e.message, event);
    }
  }

  function assertNotEquals(a, b, event) {
    try {
      var evaledA = eval(a);
      if (evaledA === b)
        log(a+' was '+evaledA+', expected something else', event);
    } catch(e) {
      log('Got unexpected exception for '+a+': '+e.message, event);
    }
  }

  function assertGreaterThan(a, b, event) {
    try {
      var evaledA = eval(a);
      if (!(evaledA > b))
        log(a+' was '+evaledA+', expected something greater than '+b, event);
    } catch(e) {
      log('Got unexpected exception for '+a+': '+e.message, event);
    }
  }

  function assertLessThan(a, b, event) {
    try {
      var evaledA = eval(a);
      if (!(evaledA < b))
        log(a+' was '+evaledA+', expected something less than '+b, event);
    } catch(e) {
      log('Got unexpected exception for '+a+': '+e.message, event);
    }
  }

  function assertIsNaN(a, event) {
    try {
      var evaledA = eval(a);
      if (evaledA === evaledA)
        log(a+' was '+evaledA+', expected NaN', event);
    } catch(e) {
      log('Got unexpected exception for '+a+': '+e.message, event);
    }
  }

  function assertApproximate(a, b, tolerance, event) {
    try {
      var evaledA = eval(a);
      if (!(Math.abs(evaledA-b) <= tolerance))
        log(a+' was '+evaledA+', expected '+b+'\u00b1'+tolerance, event);
    } catch(e) {
      log('Got unexpected exception for '+a+': '+e.message, event);
    }
  }

  // ****************** expected events, in rough order ******************

  video.addEventListener('loadstart', function(e) {
    expectEventIn('progress', 3000, e);
    assertIsNaN('video.duration', e);
    assertEquals('video.paused', true, e);
    assertEquals('video.currentTime', 0, e);
    assertEquals('video.readyState', 0, e);
    assertEquals('video.networkState', 2, e);
    assertEquals('video.error', null, e);
    assertEquals('video.buffered.length', 0, e);
    shouldNotPaintCanvas(e);
    assertEquals('event.lengthComputable', undefined, e);
    assertEquals('event.loaded', undefined, e);
    assertEquals('event.total', undefined, e);
    logEvent(e);
  }, false);

  video.addEventListener('progress', function(e) {
    if (video.paused == true)
      assertEquals('video.currentTime', 0, e);
    //assertEquals('video.networkState', 2, e); // cannot be guaranteed until http://www.w3.org/Bugs/Public/show_bug.cgi?id=12267 is fixed
    if (video.readyState == 0)
      assertIsNaN('video.duration', e);
    else
      assertApproximate('video.duration', expectedDuration, durationTolerance, e);
    if (!loggedEvents.progress) {
      assertEquals('event.lengthComputable', undefined, e);
      assertEquals('event.loaded', undefined, e);
      assertEquals('event.total', undefined, e);
    }
    var isLastProgressEvent = loggedEvents.progress && new Date() - loggedEvents.progress.date < 150;
    logEvent(e, true);
    if (isLastProgressEvent) {
      expectNoFurtherEvent('progress');
    } else {
      expectEventIn('progress', 3000, e);
    }
  }, false);

  video.addEventListener('timeupdate', function(e) {
    assertEquals('video.paused', false, e);
    if (!loggedEvents.timeupdate)
      assertLessThan('video.currentTime', currentTimeChangeTolerance, e);
    if (playingDate)
      assertApproximate('video.currentTime', (new Date()-playingDate)/1000, 1 + currentTimeChangeTolerance, e); // allow 1000ms error for the event
    if (!playingDate && video.currentTime != 0)
      playingDate = new Date();
    if (expectedDimensionChanges) {
      if (expectedDimensionChanges[currentDimensionIndex] && video.currentTime > expectedDimensionChanges[currentDimensionIndex].time) {
        assertEquals('video.videoWidth', expectedDimensionChanges[currentDimensionIndex].width, e);
        assertEquals('video.videoHeight', expectedDimensionChanges[currentDimensionIndex].height, e);
        assertEquals('getComputedStyle(video,"").width', expectedDimensionChanges[currentDimensionIndex].width+'px', e);
        assertEquals('getComputedStyle(video,"").height', expectedDimensionChanges[currentDimensionIndex].height+'px', e);
        currentDimensionIndex++;
      }
    }
    if (!loggedEvents.timeupdate) {
      assertEquals('event.lengthComputable', undefined, e);
      assertEquals('event.loaded', undefined, e);
      assertEquals('event.total', undefined, e);
    }
    //assertSeenIn('timeupdate', 15, e);
    expectEventIn('timeupdate', 250, e);
    logEvent(e, true);
  }, false);

  video.addEventListener('seeked', function(e) {
    video.loop = false;
    expectEventIn('ended', expectedDuration*1000+50, e);
    assertEquals('event.lengthComputable', undefined, e);
    assertEquals('event.loaded', undefined, e);
    assertEquals('event.total', undefined, e);
    logEvent(e);
    unexpectedEvents.push('seeked');
  }, false);

  video.addEventListener('durationchange', function(e) {
    if (video.paused == true)
      assertEquals('video.currentTime', 0, e);
    if (loggedEvents.durationchange) {
      assertNotEquals('video.duration', loggedEvents.durationchange.duration, e);
      if (loggedEvents.durationchange.duration == loggedEvents.durationchange.duration) // i.e. not NaN
        assertApproximate('video.duration', loggedEvents.durationchange.duration, durationChangeTolerance, e);
    }
    assertApproximate('video.duration', expectedDuration, durationTolerance, e);
    if (!loggedEvents.durationchange) {
      assertEquals('event.lengthComputable', undefined, e);
      assertEquals('event.loaded', undefined, e);
      assertEquals('event.total', undefined, e);
    }
    assertSeenEvent('loadstart', e);
    logEvent(e, true);
  }, false);

  video.addEventListener('loadedmetadata', function(e) {
    assertEquals('video.paused', true, e);
    if (video.paused == true) {
      assertEquals('video.currentTime', 0, e);
    } else {
      // should have proceeded no longer than the time to fire the event
      assertLessThan('video.currentTime', currentTimeChangeTolerance, e);
    }
    if (expectedCorrectedWidth) {
      assertEquals('video.videoWidth', expectedCorrectedWidth, e);
      assertEquals('video.videoHeight', expectedCorrectedHeight, e);
      assertEquals('getComputedStyle(video,"").width', expectedCorrectedWidth+'px', e);
      assertEquals('getComputedStyle(video,"").height', expectedCorrectedHeight+'px', e);
    }
    assertApproximate('video.duration', expectedDuration, durationTolerance, e);
    assertGreaterThan('video.readyState', 0, e);
    assertNotEquals('video.networkState', 0, e);
    assertNotEquals('video.networkState', 3, e);
    if (video.readyState < 2) {
      shouldNotPaintCanvas(e);
    } else {
      shouldPaintCanvas(e);
    }
    assertEquals('event.lengthComputable', undefined, e);
    assertEquals('event.loaded', undefined, e);
    assertEquals('event.total', undefined, e);
    assertSeenEvent('durationchange', e);
    logEvent(e);
  }, false);

  video.addEventListener('loadeddata', function(e) {
    assertEquals('video.paused', true, e);
    if (video.paused == true) {
      assertEquals('video.currentTime', 0, e);
    } else {
      // should have proceeded no longer than the time to fire the event
      assertLessThan('video.currentTime', currentTimeChangeTolerance, e);
    }
    assertGreaterThan('video.readyState', 1, e);
    assertNotEquals('video.networkState', 0, e);
    assertNotEquals('video.networkState', 3, e);
    shouldPaintCanvas(e);
    assertNotEquals('video.canPlayType("'+type+'")', '', e);
    assertEquals('event.lengthComputable', undefined, e);
    assertEquals('event.loaded', undefined, e);
    assertEquals('event.total', undefined, e);
    assertSeenEvent('loadedmetadata', e);
    logEvent(e);
    comparePixels();
  }, false);

  video.addEventListener('canplay', function(e) {
    assertEquals('video.paused', true, e);
    if (video.paused == true)
      assertEquals('video.currentTime', 0, e);
    assertEquals('event.lengthComputable', undefined, e);
    assertEquals('event.loaded', undefined, e);
    assertEquals('event.total', undefined, e);
    assertSeenEvent('loadeddata', e);
    logEvent(e);
  }, false);

  video.addEventListener('canplaythrough', function(e) {
    assertEquals('video.paused', true, e);
    assertEquals('event.lengthComputable', undefined, e);
    assertEquals('event.loaded', undefined, e);
    assertEquals('event.total', undefined, e);
    video.play();
    assertSeenEvent('canplay', e);
    logEvent(e);
  }, false);

  video.addEventListener('play', function(e) {
    assertEquals('video.paused', false, e);
    assertEquals('event.lengthComputable', undefined, e);
    assertEquals('event.loaded', undefined, e);
    assertEquals('event.total', undefined, e);
    assertSeenEvent('canplaythrough', e);
    logEvent(e);
  }, false);

  video.addEventListener('playing', function(e) {
    assertEquals('video.paused', false, e);
    assertEquals('event.lengthComputable', undefined, e);
    assertEquals('event.loaded', undefined, e);
    assertEquals('event.total', undefined, e);
    assertSeenEvent('play', e);
    if (!timeouts.timeupdate)
      expectEventIn('timeupdate', 250, e);
    if ('loop' in GET)
      expectEventIn('seeked', expectedDuration*1000+1000, e);
    else
      expectEventIn('ended', expectedDuration*1000+1000, e);
    logEvent(e);
  }, false);

  video.addEventListener('ended', function(e) {
    assertApproximate('video.duration', expectedDuration, durationTolerance, e);
    assertEquals('video.readyState', 2, e);
    assertEquals('video.networkState', 1, e);
    assertEquals('event.lengthComputable', undefined, e);
    assertEquals('event.loaded', undefined, e);
    assertEquals('event.total', undefined, e);
    assertSeenEvent('timeupdate', e);
    assertSeenEvent('suspend', e);
    if ('loop' in GET)
      assertSeenEvent('seeked', e);
    expectNoFurtherEvent('timeupdate');
    logEvent(e);
    comparePixels();
    end();
  }, false);

  video.addEventListener('suspend', function(e) {
    expectNoFurtherEvent('progress');
    assertEquals('video.networkState', 1, e);
    logEvent(e);
  }, false);

  // ****************** unexpected events ******************

  video.addEventListener('load', function(e) {
    logEvent(e);
  }, false);

  video.addEventListener('loadend', function(e) {
    logEvent(e);
  }, false);

  video.addEventListener('pause', function(e) {
    logEvent(e);
  }, false);

  video.addEventListener('abort', function(e) {
    assertEquals('video.error.code', 1, e);
    assertEquals('video.networkState', 0, e);
    logEvent(e);
  }, false);

  video.addEventListener('error', function(e) {
    // only MEDIA_ERR_DECODE or MEDIA_ERR_SRC_NOT_SUPPORTED
    assertGreaterThan('video.error.code', 2, e);
    assertLessThan('video.error.code', 5, e);
    if (video.error.code == 3) {
      assertEquals('video.networkState', 0);
      expectEventIn('emptied', 50, e);
    } else if (video.error.code == 4) {
      assertEquals('video.networkState', 3);
    }
    assertNotEquals('video.canPlayType("'+type+'")', 'probably', e);
    expectNoFurtherEvent('progress');
    logEvent(e);
  }, false);

  video.addEventListener('emptied', function(e) {
    logEvent(e);
  }, false);

  video.addEventListener('stalled', function(e) {
    assertEquals('video.networkState', 2, e);
    logEvent(e);
  }, false);

  video.addEventListener('waiting', function(e) {
    assertLessThan('video.readyState', 3, e);
    assertEquals('video.paused', false, e);
    // XXX  Either seeking is true, or the current playback position is not contained in any of the ranges in buffered.
    logEvent(e);
  }, false);

  video.addEventListener('seeking', function(e) {
    logEvent(e);
  }, false);

  video.addEventListener('ratechange', function(e) {
    logEvent(e);
  }, false);

  video.addEventListener('volumechange', function(e) {
    logEvent(e);
  }, false);

}
