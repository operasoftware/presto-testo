/* Tests for DOM 2 HTML 'HTMLTableCaptionElement' object.
*/


var cvs = "$Id: htmltablecaptionelement_int.js 4838 2006-01-18 05:59:01Z hallvord $";


testmodule( "HTMLTableCaptionElement - interactive test", cvs );

try {
  var tab  = document.getElementById("myCaption");
  
  testcase( "align property is writable" );
  
  tdef("reflow align #1",tab.align);   
  test("reflow align #2",tab.align,"bottom");

  if(is_phase(2))
  {
    conf("reflow align #3", "Is caption localized at bottom of table?");

    tab.align="top";
    test("reflow align #4", tab.align, "top");
    conf("reflow align #5", "Is caption localized at top of table?");

    tab.align="bottom";
    test("reflow align #6", tab.align, "bottom");
    conf("reflow align #7", "Is caption localized at bottom of table?");

    tab.align="left";
    test("reflow align #8", tab.align, "left");
    conf("reflow align #9", "Is caption localized at left side of the table?");

    tab.align="right";
    test("reflow align #10", tab.align, "right");
    conf("reflow align #11", "Is caption localized at right side of table?");

  }

} catch (e) { exception(e); }


testmodule_finished();

/* eof */
