/* Tests for DOM 2 Core 'HTMLPreElement' object.
   Interactive.
*/

var cvs = "$Id: htmlpreelement_int.js 4838 2006-01-18 05:59:01Z hallvord $";


testmodule( "HTMLPreElement", cvs );

try {

  var p1 = document.getElementById("myPre1");

  testcase( "writeable width" );

  conf("width #1", "Is the line of text displayed on a single line?");
  p1.width = 1;
  conf_expect_failure("width #1", "Is the line of text displayed with one word per line?", 106905);

} catch (e) { exception(e); }

testmodule_finished();

/* eof */
