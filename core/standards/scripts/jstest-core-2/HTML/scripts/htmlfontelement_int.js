/* Tests for DOM 2 HTML 'HTMLFontElement' interface.
   Interactive.
*/

var cvs = "$Id: htmlfontelement_int.js 4838 2006-01-18 05:59:01Z hallvord $";


testmodule( "HTMLFontElement", cvs );

try {

  var f1 = document.getElementById("f1");

  testcase( "Properties are writable" );

  conf("initial state", "Is 'Hello world!' red?");
  f1.color = "green";
  conf("change color", "Is 'Hello world!' green?");
  f1.size = "50";
  conf("change size", "Did 'Hello world!' become larger?");
  f1.face = "impact";
  conf("change face", "Did 'Hello world!' font face change to impact?");

} catch (e) { exception(e); }

testmodule_finished();

/* eof */
