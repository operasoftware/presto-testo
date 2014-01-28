/* Tests for DOM 2 HTML 'HTMLFrameElement' object.
*/

var cvs = "$Id: htmliframeelement3.js 4838 2006-01-18 05:59:01Z hallvord $";

testmodule( "HTMLIFrameElement", cvs );

try {

  var p = parent.document.getElementById("myIFrame");
  testcase( "properties exists" );

  tdef("contentDocument",p.contentDocument);
  
  testcase( "property values from html" );
  test("contentDocument",p.contentDocument,document);
  
  testcase( "properties are not writeable" );

  expect_DOM_exception( "contentDocument", DOMException.NO_MODIFICATION_ALLOWED_ERR, function(){p.contentDocument = "no document";})
  test("contentDocument",p.contentDocument,document);

} catch (e) { exception(e); }

testmodule_finished();

/* eof */
