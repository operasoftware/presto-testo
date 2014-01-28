// Tests that access to other window is actually denied.

var cvs = "$Id: otherwindow1.js 4838 2006-01-18 05:59:01Z hallvord $";

testmodule( "Denied access to contents of other window", cvs );

var w = null;

try {

w = window.open( "http://www.google.com" );

// Test that security violation throws an exception and that the exception has a
// reasonable message attached to it (assumes English error messages).

expect_exception( "Security exception #1", ReferenceError, function (){ w.document.all } );
try { w.document.all }
catch (e)
{
  test( 'Read security error message #1', e.message.indexOf( 'Security error' ), 0 );
  test( 'Read security error message #2', e.message.indexOf( ' read ' ) != -1, true );
}

expect_exception( "Security exception #2", ReferenceError, function (){ w.document.length = 2 } );
try { w.document.length = 2 }
catch (e)
{
  test( 'Write security error message #1', e.message.indexOf( 'Security error' ), 0 );
  test( 'Write security error message #2', e.message.indexOf( ' write ' ) != -1, true );
}

// Test that security is maintained on a number of different properties

// Note, this is a work in progress, these tests are not complete.  Also see
// otherwindow2.js, for the complementary positive checks.

expect_exception( "Security probe #1", ReferenceError, function (){ w.document.location } );
expect_exception( "Security probe #2", ReferenceError, function (){ w.document.location.href } );
try { w.document.location = "http://www.opera.com"; }
catch(e) { showfailure( "Security probe #3", "Got exception:\n " + e ); }
try { w.document.location.href = "http://www.opera.com"; }
catch(e) { showfailure( "Security probe #4", "Got exception:\n " + e ); }


//////

} catch(e) { exception(e); }

if (w != null) w.close();

testmodule_finished();

// eof
