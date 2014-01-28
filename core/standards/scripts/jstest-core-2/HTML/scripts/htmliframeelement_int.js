/* Tests for DOM 2 HTML 'HTMLFrameElement' object.
*/

var cvs = "$Id: htmliframeelement_int.js 4838 2006-01-18 05:59:01Z hallvord $";

testmodule( "HTMLIFrameElement interactive", cvs );

try {

  var p = document.getElementById("myIFrame");
  testcase( "properties exists" );

  tdef("align",p.align);
  tdef("frameBorder",p.frameBorder);
  tdef("scrolling",p.scrolling);
  tdef("src",p.src);
  tdef("height",p.height);
  tdef("width",p.width);
  tdef("longDesc",p.longDesc);
  tdef("marginHeight",p.marginHeight);
  tdef("marginWidth",p.marginWidth);
  tdef("name",p.name);
  
  tdef("contentDocument",p.contentDocument);
  
  testcase( "property values" );
  
  test("align",p.align,"right");
  test("frameBorder",p.frameBorder,"1");
  test("longDesc",p.longDesc,"");
  test("marginHeight",p.marginHeight,"");
  test("marginWidth",p.marginWidth,"");
  test("name",p.name,"");
  test("scrolling",p.scrolling,"yes");
  test("src",p.src,get_protocol_and_host() + get_modulepath("HTML","iframe.html"));
  test("width",p.width,"500");
  test("height",p.height,"500");
  testnot("contentDocument",p.contentDocument,document);

  testcase( "properties are writable" );
  
  if(is_phase(2))
  {
	conf("reflow #1", "Inline frame has scrollbars?");
	p.scrolling = "auto";
  	test("reflow #2",p.scrolling,"auto");
	conf("reflow #3", "Inline frame has no scrollbars?");

	p.scrolling = "yes";
  	test("reflow #4",p.scrolling,"yes");
	conf("reflow #5", "Inline frame has scrollbars?");

	p.scrolling = "no";
  	test("reflow #6",p.scrolling,"no");
	conf("reflow #7", "Inline frame has no scrollbars?");

	p.scrolling = "yes";
  	test("reflow #8",p.scrolling,"yes");
	conf("reflow #9", "Inline frame has scrollbars?");

	conf("reflow #10", "Inline frame's border is set?");
	p.frameBorder = "0";
  	test("reflow #11",p.frameBorder,"0");
	conf("reflow #12", "Inline frame's border is not set?");
	p.frameBorder = "1";
  	test("reflow #13",p.frameBorder,"1");
	conf("reflow #14", "Inline frame's border is set?");

	p.height = "100";
	p.width = "100";
  	test("reflow #15",p.width,"100");
  	test("reflow #16",p.height,"100");
	conf("reflow #17", "Inline frame height and width has changed?");
	p.height = "500";
	p.width = "500";
  	test("reflow #18",p.width,"500");
  	test("reflow #19",p.height,"500");
	conf("reflow #20", "Inline frame height and width has changed?");

	conf("reflow #21", "Inline frame is right aligned?");
	p.align = "left";
  	test("reflow #22",p.align,"left");
	conf("reflow #23", "Inline frame is left aligned?");
	p.align = "right";
  	test("reflow #24",p.align,"right");
	conf("reflow #25", "Inline frame is right aligned?");

	conf("reflow #26", "marginHeight and marginWidth has default settings?");
	p.marginHeight = 200;
	p.marginWidth = 200;
	conf("reflow #27", "Do you see any change in marginWidth and marginHeight?");

	p.src = "iframe2.html";
	conf("Change iframe src", "Is a new document saying 'New inline frame' loaded into the iframe?");

	p.name = "newName";
	window.open("iframe.html", "newName");
	conf("Change iframe name", "Is the old document saying 'Inline frame' loaded back into the iframe?");
  }
  
} catch (e) { exception(e); }

testmodule_finished();

/* eof */
