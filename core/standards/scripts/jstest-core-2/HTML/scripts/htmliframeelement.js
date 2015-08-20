/* Tests for DOM 2 HTML 'HTMLFrameElement' object.
*/

var cvs = "$Id: htmliframeelement.js 4838 2006-01-18 05:59:01Z hallvord $";

testmodule( "HTMLIFrameElement", cvs );

try {

  var p1 = document.getElementById("myIFrame");
  var p2 = document.getElementById("myIFrame2");
  var p = p1;

  testcase( "object" );

  test("class",p,"[object HTMLIFrameElement]");

  testcase( "properties exists" );

  tdef("align",p.align);
  tdef("frameBorder",p.frameBorder);
  tdef("longDesc",p.longDesc);
  tdef("marginHeight",p.marginHeight);
  tdef("marginWidth",p.marginWidth);
  tdef("name",p.name);
  tdef("scrolling",p.scrolling);
  tdef("src",p.src);
  tdef("height",p.height);
  tdef("width",p.width);

  tdef("contentDocument",p.contentDocument);

  var p = p1;
  testcase( "default property values" );

  test("align",p.align,"");
  test("frameBorder",p.frameBorder,"1");
  test("longDesc",p.longDesc,"");
  test("marginHeight",p.marginHeight,"");
  test("marginWidth",p.marginWidth,"");
  test("name",p.name,"");
  test("scrolling",p.scrolling,"auto");
  test("src",p.src,"");
  test("width",p.width,"");
  test("height",p.height,"");
  testnot("contentDocument",p.contentDocument,document);

  p = p2;
  testcase( "property values from attributes" );

  test("align",p.align,"right");
  test("frameBorder",p.frameBorder,"0");
  test("longDesc",p.longDesc,get_protocol_and_host() + get_modulepath("HTML","foo.html"));
  test("marginHeight",p.marginHeight,"2");
  test("marginWidth",p.marginWidth,"2");
  test("name",p.name,"f");
  test("scrolling",p.scrolling,"no");
  test("src",p.src,get_protocol_and_host() + get_modulepath("HTML","HTMLIFrameElement2.html"));
  test("width",p.width,"400");
  test("height",p.height,"100");
  testnot("contentDocument",p.contentDocument,document);
  testnot("contentDocument",p.contentDocument,p1.contentDocument);

  p = p1;
  testcase( "properties are writable" );

  p.src = "HTMLIFrameElement3.html";
  test("src",p.src,get_protocol_and_host() + get_modulepath("HTML","HTMLIFrameElement3.html"));

  if(is_phase(2)) // All other attributes currently readonly
  {
  }

  p = p2;
  testcase( "properties are not writeable" );

  expect_DOM_exception( "contentDocument", DOMException.NO_MODIFICATION_ALLOWED_ERR, function(){p.contentDocument = document;})
  testnot("contentDocument",p.contentDocument,document);


} catch (e) { exception(e); }

testmodule_finished();

/* eof */
