/* Tests for DOM 2 Core 'HTMLPreElement' object.
   Interactive.
*/

var cvs = "$Id: htmlpreelement_int.js 10655 2006-12-18 15:47:57Z hallvord $";


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
