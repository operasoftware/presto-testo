/* Tests for DOM 2 HTML 'HTMLFrameElement' object.
*/

var cvs = "$Id: htmlframeelement.js 4838 2006-01-18 05:59:01Z hallvord $";

testmodule( "HTMLFrameElement", cvs );

try {

  var p1 = parent.document.getElementById("myFrame");
  var p2 = parent.document.getElementById("myFrame2");
  var p = p1; 

  testcase( "object" );

  test("class",p,"[object HTMLFrameElement]");

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
  
  if(is_phase(7)) // These two are undefined in html
  {
    tdef("height",p.height);
    tdef("width",p.width);
  }

  tdef("contentDocument",p.contentDocument);
  
  var p = p1; 
  testcase( "default property values" );
  
  test("frameBorder",p.frameBorder,"1");
  test("longDesc",p.longDesc,"");
  test("marginHeight",p.marginHeight,"");
  test("marginWidth",p.marginWidth,"");
  test("name",p.name,"");
  test("scrolling",p.scrolling,"auto");
  test("src",p.src,"");
  
  if(is_phase(7)) // These two are undefined in html
  {
    test("width",p.width,"");
    test("height",p.height,"");
  }  
  testnot("contentDocument",p.contentDocument,document);

  p = p2;
  testcase( "property values from attributes" );
  
  test("frameBorder",p.frameBorder,"0");
  test("longDesc",p.longDesc,"http://www.opera.com/");
  test("marginHeight",p.marginHeight,"2");
  test("marginWidth",p.marginWidth,"2");
  test("name",p.name,"f");
  test("scrolling",p.scrolling,"yes");
  test("src",p.src,get_protocol_and_host() + get_modulepath("HTML","HTMLFrameElement.html"));
  test("contentDocument",p.contentDocument,document);
  testnot("contentDocument",p.contentDocument,p1.contentDocument);
 
  p = p1;
  testcase( "properties are writable" );
  
  if(is_phase(2)) // All attributes currently readonly
  {
  }

  p = p2;
  testcase( "properties are not writeable" );

  expect_DOM_exception( "contentDocument", DOMException.NO_MODIFICATION_ALLOWED_ERR, function(){p.contentDocument = "no document";})
  test("contentDocument",p.contentDocument,document);
  
} catch (e) { exception(e); }

testmodule_finished();

/* eof */
