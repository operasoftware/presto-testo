/* Tests for DOM 2 HTML 'HTMLFrameElement' object.
*/
/* This test expects to be able to access different frames in the frameset. If code runs immediately ,those may or may not be loaded. Hence we do an onload and a timeout. */
window.onload = function(){
  setTimeout( function(){
    var cvs = "$Id: htmlframeelement.js 111132 2012-02-20 21:45:51Z hallvord $";

    testmodule( "HTMLFrameElement", cvs );

    try {
      expect(28);
      var p1 = parent.document.getElementById("myFrame");
      var p2 = parent.document.getElementById("myFrame2");
      var p = p1;

      testcase( "object" );

      test("frame class",p,"[object HTMLFrameElement]");

      testcase( "properties exists" );

      tdef("frameBorder",p.frameBorder);
      tdef("longDesc",p.longDesc);
      tdef("marginHeight",p.marginHeight);
      tdef("marginWidth",p.marginWidth);
      tdef("name",p.name);
      tdef("noResize",p.noResize);
      tdef("scrolling",p.scrolling);
      tdef("src",p.src);

      tdef("contentDocument 1",p.contentDocument);

      testcase( "default property values" );

      test("frameBorder",p.frameBorder,""); // default value no longer expected, see bug 291905
      test("longDesc",p.longDesc,"");
      test("marginHeight",p.marginHeight,"");
      test("marginWidth",p.marginWidth,"");
      test("name",p.name,"");
      test("scrolling",p.scrolling,"");// default value no longer expected, see bug 291905
      test("src",p.src,"");

      testnot("contentDocument 2",p.contentDocument,document);

      p = p2;
      testcase( "property values from attributes" );

      test("frameBorder",p.frameBorder,"0");
      test("longDesc",p.longDesc,"http://www.opera.com/");
      test("marginHeight",p.marginHeight,"2");
      test("marginWidth",p.marginWidth,"2");
      test("name",p.name,"f");
      test("scrolling",p.scrolling,"yes");
      test("src",p.src,get_protocol_and_host() + get_modulepath("HTML","HTMLFrameElement.html"));
      test("contentDocument 1",p.contentDocument,document);
      testnot("contentDocument 2",p.contentDocument,p1.contentDocument);

      p = p2;
      testcase( "properties are not writeable" );

      expect_readonly_exception( "contentDocument 1", function(){"use strict"; p.contentDocument = "no document";})
      test("contentDocument 2",p.contentDocument,document);

    } catch (e) { exception(e); }

    testmodule_finished();
  }, 200);
}

    /* eof */
