/* Tests for DOM 2 Core 'NodeList' object. */

var cvs = "$Id: nodelist.js 10655 2006-12-18 15:47:57Z hallvord $";

testmodule( "DOM NodeList", cvs );

try {

testcase("Get document nodes as NodeList");

  var children = document.childNodes;

  tdef("document.childNodes exists", children);
  test("NodeList class name", children.toString(), "[object NodeList]");

testcase("length property");

  test("NodeList length property", children.length, 1);
  expect_DOM_exception('Check read-only', DOMException.NO_MODIFICATION_ALLOWED_ERR,
	                function(){ children.length=42; });

testcase("item() method");

  tdef("First child of DocumentNode exists", children.item(0));
  test("Negative index as parameter to item()", children.item(-17), null);
  test("Out-of-range index", children.item(17), null);
  test("First child of DocumentNode nodeType", children.item(0).nodeType, Node.ELEMENT_NODE);

testcase("alternative index accessors");

  test("array syntax", children[0], children.item(0));
  test("call syntax", children(0), children.item(0));

} catch (e) { exception( e ); }

testmodule_finished();

/* eof */
