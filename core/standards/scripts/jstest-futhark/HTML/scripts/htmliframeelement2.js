/* Tests for DOM 2 HTML 'HTMLFrameElement' object.
*/

var cvs = "$Id: htmliframeelement2.js 108182 2012-01-13 12:09:02Z sigbjornf $";

testmodule( "HTMLIFrameElement", cvs );

try {

  var p = parent.document.getElementById("myIFrame2");

  testcase( "properties exists" );
  tdef("contentDocument",p.contentDocument);

  testcase( "property values from html" );
  test("contentDocument",p.contentDocument,document);

  testcase( "properties are not writeable" );

  expect_readonly_exception( "contentDocument", function(){"use strict"; p.contentDocument = "no document";})
  test("contentDocument",p.contentDocument,document);


} catch (e) { exception(e); }

testmodule_finished();

/* eof */
