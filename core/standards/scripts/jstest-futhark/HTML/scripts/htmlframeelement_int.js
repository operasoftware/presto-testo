/* Tests for DOM 2 HTML 'HTMLFrameElement' object.
*/

var cvs = "$Id: htmlframeelement_int.js 108182 2012-01-13 12:09:02Z sigbjornf $";

testmodule( "HTMLFrameElement interactive test", cvs );

try {

  var p = parent.document.getElementById("myFrame2");
  var p2 = parent.document.getElementById("myFrame3");
  testcase( "properties exists" );

  tdef("frameBorder",p.frameBorder);
  tdef("longDesc",p.longDesc);
  tdef("marginHeight",p.marginHeight);
  tdef("marginWidth",p.marginWidth);
  tdef("name",p.name);
  tdef("noResize",p.noResize);
  tdef("scrolling",p.scrolling);
  tdef("src",p.src);
  tdef("contentDocument",p.contentDocument);

  testcase( "readable attribute values" );

  test("frameBorder",p.frameBorder,"0");
  test("longDesc",p.longDesc,"http://www.opera.com/");
  test("marginHeight",p.marginHeight,"2");
  test("marginWidth",p.marginWidth,"2");
  test("name",p.name,"f");
  test("noresize",p.noResize,true);
  test("scrolling",p.scrolling,"yes");
  test("src",p.src,get_protocol_and_host() + get_modulepath("HTML","HTMLFrameElement2_int.html"));

  testcase( "properties are writable" );

  if(is_phase(2))
  {
	p.frameBorder = "1";
	test("reflow #1", p.frameBorder, "1");

	p.longDesc = "http://www.opera.com/support/";
	test("reflow #3", p.longDesc, "http://www.opera.com/support/");

  	p.marginHeight = "100";
	test("reflow #4", p.marginHeight, "100");
	conf("reflow #4 conf", "Is the marginHeight of the upper-right frame 100 pixels?");

  	p.marginWidth = "100";
	test("reflow #5", p.marginWidth, "100");
	conf("reflow #5 conf", "Is the marginWidth of the upper-right frame 100 pixels?");

  	p.name = "test";
	test("reflow #6", p.name, "test");

	p.noResize = false;
	test("reflow #7", p.noResize, false);

	conf("scrolling #1", "Does the top-right frame have scrollbars?");
  	p.scrolling = "no";
	test("reflow #8", p.scrolling, "no");
	conf("scrolling #2", "Was the scrollbars removed from the top-right frame?");

	p2.src = "iframe.html";
	conf("frame src", "Does the bottom-left frame say 'Inline frame'?");

	p2.name = "newName";
	window.open("iframe2.html", "newName");
	conf("frame name", "Does the bottom-left frame say 'New inline frame'?");
  }

  expect_readonly_exception( "contentDocument", function(){"use strict"; p.contentDocument = "no document";})
  test("contentDocument",p.contentDocument,document);

} catch (e) { exception(e); }

testmodule_finished();

/* eof */
