if (!opener) {
  opener = window;
}

function TestsuiteRunner(testCases, callbacks, prefs) {
  var thisArg = this;

  // All supported events
  this.events = {
    'BeforeTestRun':[],
    'BeforeTest':[],
    'OnTestLoad':[],
    'OnTestTimeout':[], /* typically a stalled test  */
    'OnTestResult':[],
    'AfterTestRun':[]
  };

  this.defaultActions = {
    'OnTestResult':this.nextTest,
    'OnTestTimeout':this.nextTest
  };

  //This relies on one TestsuiteRunner per window
  window.rr = function(result, message) {
    thisArg.handleEvents('OnTestResult', {result: result,
                                          message: message
                                         });
  };

  this.testCases = testCases;
  this.prefs = prefs?pref:{};

  /* some default prefs.. */
  this.prefs.timeout = this.prefs.timeout || 1000; /* a default timeout value */

  this.currentTestCaseIndex = -1;

  this.timeout_id = null;

  this.startTime=0;
  this.lastTestStartTime=0;

  //register simple callbacks
  for (p in callbacks) {
    if (callbacks.hasOwnProperty(p)) {
      this.addEventListener(p, callbacks[p]);
    }
  }

  //Add a load event listener
  document.addEventListener('load',
                            function (e) {
                              if(e.target==thisArg.testIframe) {
                                thisArg.handleEvents('OnTestLoad');
                              }
	                    }, true);
}

TestsuiteRunner.prototype.startTestRun = function() {
  this.handleEvents('BeforeTestRun');
  this.startTime = (new Date()).getTime();
  this.nextTest();
};

TestsuiteRunner.prototype.endTestRun = function() {
  this.testIframe.parentNode.removeChild(this.testIframe);
  this.clearTimeOut();
  this.handleEvents('AfterTestRun');
};

TestsuiteRunner.prototype.nextTest = function() {
  this.currentTestCaseIndex++;

  if(this.currentTestCaseIndex >= this.testCases.length) {
    this.endTestRun();
    return;
    }

  var url = this.testCases[this.currentTestCaseIndex];
  this.replaceIframe();

  this.lastTestStartTime=(new Date()).getTime();
  this.testIframe.src = url;
  this.timeoutHandler(); /* set a timeout to launch next test if stuck */
};

TestsuiteRunner.prototype.addEventListener = function(type, eventHandler) {
  // registers event listener
  if(! this.events[type]) {
    throw 'Unknown event type: ' + type;
  }
  this.events[type].push(eventHandler);
};

TestsuiteRunner.prototype.handleEvents = function(type, eventObjectExtra) {
    // run event listener(s) and return results
    if(!this.events[type]) throw 'Unknown event type: '+type;

    /* Event object may have the following properties, depending on event:
      .url,
      .timeElapsed (time since test loading was initiated.
                    OnTestLoad and OnTestResult only)
      .result (OnTestResult only)
    */

  var url = this.testCases[this.currentTestCaseIndex];
  var eventObject = new TestEventObject(url, eventObjectExtra);

  if (type=='OnTestLoad' || type == 'OnTestResult') {
    eventObject.timeElapsed= ((new Date()).getTime() -
                              this.lastTestStartTime);
  }

  var thisArg = this;

    /* calling the event listener(s) */
  for(var i=this.events[type].length-1; i>=0; i--) {
    /* event listeners are run in "most recently added first" order  */
    /* In event handlers, the this object is the test runner */
    this.events[type][i].call(this, eventObject);
  }


  if(this.defaultActions[type] && !eventObject._defaultPrevented) {
    setTimeout(function() {
                 thisArg.defaultActions[type].call(thisArg);
               }, 10);
  };

  /* Some events have meaningful return values.
   * They can modify event object properties*/
  return eventObject;
};

  /* a handful of utility functions */
TestsuiteRunner.prototype.timeoutHandler = function() {
  this.clearTimeOut();
  var thisArg = this;
  this.timeout_id = setTimeout(function() {
			       thisArg.handleEvents('OnTestTimeout');
                               },
			       this.prefs.timeout);
};

TestsuiteRunner.prototype.clearTimeOut = function() {
  if(this.timeout_id) {
    clearTimeout(this.timeout_id);
  };
  this.timeout_id = null;
};

TestsuiteRunner.prototype.replaceIframe = function() {
  if(this.testIframe) {
    this.testIframe.parentNode.removeChild(this.testIframe);
  }
  this.testIframe=document.body.appendChild(
  document.createElement('iframe'));
};

TestsuiteRunner.prototype.appendResultElement = function(n, v) {
  var input = top.document.createElement('input');
  input.type='hidden';
  input.name = n ; // test URL and/or description
  input.value = v;
  try{top.document.forms[0].appendChild(input);}catch(e) {}
};

TestsuiteRunner.prototype.toString = function() {
  return '[Test suite runner object, '+ this.testCases.length+' tests]';
};

var TestEventObject = function(url, eventObjectExtra) {
  this._defaultPrevented=false;
  this.url = url;
  for(var prop in eventObjectExtra) {
    this[prop]=eventObjectExtra[prop];
  }
};
TestEventObject.prototype.preventDefault = function() {
  this._defaultPrevented=true;
};

/* end of new improved runner */
