/* Tests for DOM 2 HTML 'HTMLHRElement' interface.
   Interactive.
*/

var cvs = "$Id: htmlhrelement_int.js 4838 2006-01-18 05:59:01Z hallvord $";


testmodule( "HTMLHRElement", cvs );

try {

  var hr1 = document.getElementById("myHR");

  testcase( "properties writable" );

  conf("initial state", "hr is 100% wide and has size 1?");
  hr1.width = "50%";
  conf("percentage width", "hr is 50% wide?");
  hr1.width = "50";
  conf("percentage width", "hr is 50 pixels wide?");

  hr1.size = "50";
  conf("size", "hr height is 50 pixels?");

  hr1.noShade = "true";
  conf("noShade", "has hr got a solid color?");

  hr1.align = "left";
  conf("align #1", "hr is left aligned?");
  hr1.align = "center";
  conf("align #2", "hr is center aligned?");
  hr1.align = "right";
  conf("align #3", "hr is right aligned?");

} catch (e) { exception(e); }

testmodule_finished();

/* eof */
