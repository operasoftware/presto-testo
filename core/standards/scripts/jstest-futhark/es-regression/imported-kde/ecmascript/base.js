// Utility functions for JS test suite
// (c) 2001 Harri Porten <porten@kde.org>

var passed_tests=0;
var failed_tests=0;

function testPassed(msg)
{
  passed_tests++;
//  debug("PASS. " + msg);
}

function testFailed(msg)
{
  failed_tests++;
  document.writeln("FAIL. " + msg + "<BR>");
}

function testsDone()
{
  if (window.opener && window.opener._autorun_updateTestResult)
  {
    window.opener._autorun_updateTestResult(passed_tests, failed_tests, 0);
    if (failed_tests == 0)
      window.close();
    else
      document.writeln( "DONE.  Passed: " + passed_tests + "; Failed: " + failed_tests + "<BR> " );

  }
  else
    document.writeln( "DONE.  Passed: " + passed_tests + "; Failed: " + failed_tests + "<BR> " );
}

function shouldBe(_a, _b)
{
  try {
    var _av = eval(_a);
    var _bv = eval(_b);
  }
  catch (_e)
  {
    testFailed( _a + " should be " + _b + ". Threw exception " + _e.name );
    return;
  }

  if (_av == _bv)
    testPassed(_a + " is " + _b);
  else
    testFailed(_a + " should be " + _b + ". Was " + _av);
}

function shouldBeTrue(_a) { shouldBe(_a, "true"); }

function shouldBeFalse(_a) { shouldBe(_a, "false"); }

function shouldBeUndefined(_a)
{
  var _av = eval(_a);
  if (typeof _av == "undefined")
    testPassed(_a + " is undefined.");
  else
    testFailed(_a + " should be undefined. Was " + _av);
}
