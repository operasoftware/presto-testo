/* Copyright 2002 Opera Software ASA.  All rights reserved.

   Simple scaffolding for running a batch of noninteractive tests.
   Lars T Hansen

   The scaffold runs the tests and summarizes the pass/fail rates.  Each 
   test is run in a separate window; if the tests did not produce unexpected
   failures, then the test window is closed, otherwise it stays open for 
   inspection.

   This program adds a DIV and a FORM to the end of the BODY of the HTML
   document of the client.

   HOW TO USE

     setup_autorun( programs, [generator] )
       Call this to create the form and initialize the test harness.
       'Programs' is normally an array of HTML file names; the names
       of the individual test to run, and 'generator' is normally NULL.
  
       If 'generator' is supplied, it must be a function of one argument
       that takes a string and returns the name of an HTML file; it
       is called on each element in 'programs' before that test is run.
       It is ok for 'generator' to have internal state: it is always
       called exactly once before each test case, with the data for that
       test case from programs.
  
       Test cases are run in the order they are listed in 'programs'.
  
     autorun_start_hook
       A global variable whose value must be a function.  It is called
       when the user presses the button to start the tests.
  
     autorun_end_hook
       A global variable whose value must be a function.  It is called
       after the last test case has been run.

   ENVIRONMENT

     The scaffolding is set up to run together with the standard Opera
     javascript test harness (testbase.js): when a test page calls
     testmodule_finished, that function will look to see if it is
     running in a window has an opener and if the opener has a function
     called _autorun_updateTestResult.  If so, it calls that function
     with a summary of the test result.  This lets the autorun manage
     the standard test suite.

     A similar hack is in place in the imported KDE test suite; see
     'base.js' in that test suite.

   BUGS

     Uses DOM rather extensively, so will not run in browsers that do
     not have good DOM support.

     Uses innerHTML, so even full DOM support isn't enough.

   */

window.undefined = window.undefined;  /* MSIE compatibility */

var _autorun = { programs: [],
	         openwindows: [],
		 generator: undefined,
	 	 previous_test_finished: true,   // Set by the popped-up windows
		 waiting: 0,                     // Number of waits
		 next_program: 0,                // Next test program to run
	         initialized: false };

var _autorun_form='<form name=testform>\
Windows stay open when tests fail: <input type=checkbox checked name=stayopen><br>\
<input type=button value="Start tests" onclick="_autorun_runtests()"><br><br>\
<table>\
<tr><td>Tests:</td><td><input readonly name=tests type=text value=0></td></tr>\
<tr><td>Passed:</td><td><input readonly name=passed type=text value=0></td></tr>\
<tr><td>Failed (total):</td><td><input readonly name=failed type=text value=0></td></tr>\
<tr><td>Failed (unexpected):</td><td><input readonly name=failed_unexpected type=text value=0></td></tr>\
<tr><td>Pass rate:</td><td><input readonly name=passrate type=text value="0%"></td></tr>\
</table>\
<textarea name=failedtests rows=8 cols=70>\
</textarea>\
<br><br>\
<input type=button value="Close windows" onclick="_autorun_closeall()">\
</form>';

var autorun_start_hook = function () {};
var autorun_end_hook = function () {
  document.testform.failedtests.value += 'Done.\n';
};

function setup_autorun( programs, generator )
{
  _autorun.programs = programs;
  _autorun.generator = generator;
  if (!_autorun.initialized)
  {
    document.body.appendChild( document.createElement("DIV") );
    document.body.lastChild.innerHTML = _autorun_form;
    _autorun.initialized = true;
  }
}

function _autorun_runtests()
{
  autorun_start_hook();
  document.testform.tests.value=0;
  document.testform.passed.value=0;
  document.testform.failed.value=0;
  document.testform.failed_unexpected.value=0;
  document.testform.passrate.value="0%";
  document.testform.failedtests.value = "";
  _autorun.previous_test_finished=true;
  _autorun.openwindows = new Array();
  _autorun.waiting=0;
  _autorun.next_program=0;

  _autorun_runNextTest();
}

function _autorun_runNextTest()
{
  if (!_autorun.previous_test_finished && _autorun.waiting < 120)
  {
    _autorun.waiting++;
    setTimeout( "_autorun_runNextTest()", 500 );
    return;
  }

  if (_autorun.next_program == _autorun.programs.length)
  {
    autorun_end_hook();
    return;
  }

  _autorun.waiting=0;
  _autorun.previous_test_finished=false;
  var file;
  var winname;
  if (!_autorun.generator)
  {
    file = _autorun.programs[_autorun.next_program];
    winname = file;
  }
  else
  {
    file = _autorun.generator( _autorun.programs[_autorun.next_program] );
    winname = file + " (" + _autorun.next_program + ")";
  }
  _autorun.openwindows.push(window.open( file, winname, 'scrollbars=yes' ));
  _autorun.next_program++;
  _autorun_runNextTest();  
}

function _autorun_updateTestResult( passed, failed, failed_as_expected )
{
  document.testform.tests.value = Number(document.testform.tests.value)+passed+failed+failed_as_expected;
  document.testform.passed.value = Number(document.testform.passed.value)+passed;
  document.testform.failed.value = Number(document.testform.failed.value)+failed+failed_as_expected;
  document.testform.failed_unexpected.value = Number(document.testform.failed_unexpected.value)+failed;
  if (document.testform.tests.value != 0)
    document.testform.passrate.value = 
	Math.floor(Number(document.testform.passed.value)*100 / 
	          (Number(document.testform.passed.value) + Number(document.testform.failed.value))) + "%";

  var n=_autorun.programs[_autorun.next_program-1];
  var s=n +
	"                              ".substring(0,30-n.length) + 
	Math.floor(passed*100 / (passed+failed+failed_as_expected)) + 
	"%";
  if (failed > 0)
    s += " (" + failed + " unexpected)";
  document.testform.failedtests.value += s + '\n';
  if (!document.testform.stayopen.checked)
    _autorun.openwindows[_autorun.openwindows.length-1].close();
  _autorun.previous_test_finished=true;
}

function _autorun_closeall()
{
  for ( var i=0 ; i < _autorun.openwindows.length ; i++ )
    if (!_autorun.openwindows[i].closed) _autorun.openwindows[i].close();
}

/* eof */
