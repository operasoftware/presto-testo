/* Functionality and regression tests -- Function objects, interactive */

var cvs = "$Id: function_int.js 10655 2006-12-18 15:47:57Z hallvord $";

testmodule( "Functions and Function objects (interactive)", cvs );

var x;
try {

testcase( "Bug #73513" );

// Problem: function called 'Language' is not handled correctly
// in onclick handler.
// Function must be at global scope.

function Language(x) {  alert( "It works OK now." ); }

testcase( "Bug #51642" );

// Problem: when somebody calls 'home' from the onload handler, window.home
// is picked up rather than this one.
function home() { return 1; }

function onload_handlers()
{ 
  if (home.toString().indexOf("native") != -1) 
    alert( "Bug 51642 is still with us." );
}

} catch (e) { exception(e); }

testmodule_finished();

