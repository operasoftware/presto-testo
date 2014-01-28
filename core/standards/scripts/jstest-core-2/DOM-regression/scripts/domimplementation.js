/* Tests for DOM 2 Core 'DOMImplementation' object.
*/

var cvs = "$Id: domimplementation.js 4838 2006-01-18 05:59:01Z hallvord $";

testmodule( "DOMImplementation", cvs );

try {
  testcase("DOMImplementation hasFeature");
  
  tdef("hasFeature", document.implementation.hasFeature);
  test("hasFeature HTML 2.0", document.implementation.hasFeature("HTML", "2.0"), true);
  test("hasFeature Core 2.0", document.implementation.hasFeature("Core", "2.0"), true);
  test("hasFeature Events 2.0", document.implementation.hasFeature("Events", "2.0"), true);
  test("hasFeature UIEvents 2.0", document.implementation.hasFeature("UIEvents", "2.0"), true);
  test("hasFeature HTMLEvents 2.0", document.implementation.hasFeature("HTMLEvents", "2.0"), true);
  test("hasFeature MutationEvents 2.0", document.implementation.hasFeature("MutationEvents", "2.0"), "MutationEvent" in window);

  test("hasFeature HTML 1.0", document.implementation.hasFeature("HTML", "1.0"), true);
  test("hasFeature XML 1.0", document.implementation.hasFeature("XML", "1.0"), true);
  test("hasFeature XML 2.0", document.implementation.hasFeature("XML", "2.0"), true);
  test("hasFeature Views 2.0", document.implementation.hasFeature("Views", "2.0"), true);
  test("hasFeature StyleSheets 2.0", document.implementation.hasFeature("StyleSheets", "2.0"), false);
  test("hasFeature CSS 2.0", document.implementation.hasFeature("CSS", "2.0"), false);
  test("hasFeature CSS2 2.0", document.implementation.hasFeature("CSS2", "2.0"), false);
  test("hasFeature Range 2.0", document.implementation.hasFeature("Range", "2.0"), "createRange" in document);
  test("hasFeature Traversal 2.0", document.implementation.hasFeature("Traversal", "2.0"), "createNodeIterator" in document);

testcase( "DOMImplementation exists" );

  tdef( "DOMImplementation", document.implementation );

testcase( "hasFeature" );

  x = [ [ "Core",           [ 0, 1 ] ],
	[ "HTML",           [ 1, 1 ] ],
	[ "Events",         [ 0, 1 ] ],
	[ "UIEvents",       [ 0, 1 ] ],
	[ "MouseEvents",    [ 0, 1 ] ],
	[ "MutationEvents", [ 0, ("MutationEvent" in window) ? 1 : 0 ] ],
	[ "HTMLEvents",     [ 0, 1 ] ],
	[ "XML",            [ 1, 1 ] ],
	[ "Views",          [ 0, 1 ] ],
	[ "StyleSheets",    [ 0, 0 ] ],
	[ "CSS",            [ 0, 0 ] ],
	[ "CSS2",           [ 0, 0 ] ],
	[ "Range",          [ 0, ("createRange" in document) ? 1 : 0 ] ],
	[ "Traversal",      [ 0, ("createNodeIterator" in document) ? 1 : 0 ] ] ];

  tdef( "hasFeature #1", document.implementation.hasFeature );

  for ( i=0 ; i < x.length ; i++ )
  {
    test( "hasFeature #" + (i+2) + " DOM1", document.implementation.hasFeature( x[i][0], "1.0" ), Boolean(x[i][1][0]) );
    test( "hasFeature #" + (i+2) + " DOM2", document.implementation.hasFeature( x[i][0], "2.0" ), Boolean(x[i][1][1]) );
  }

  testcase( "createDocumentType" );
  
  var doctype = document.implementation.createDocumentType( "html", "-//W3C//DTD XHTML 1.0 Strict//EN", "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd" );
  tdef( "document type created", doctype );
  test( "DocumentType.name", doctype.name, "html" );
  test( "DocumentType.publidId", doctype.publicId, "-//W3C//DTD XHTML 1.0 Strict//EN" );
  test( "DocuemntType.systemId", doctype.systemId, "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd" );

  testcase( "createDocument" );

  var doc = document.implementation.createDocument( "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd", "html", doctype );
  tdef( "document created", doc );
  test( "Document.doctype", doc.doctype, doctype );
  tdef( "Document.documentElement", doc.documentElement );
  test( "Document.documentElement.namespaceURI", doc.documentElement.namespaceURI, "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd" );
  test( "Document.documentElement.nodeName", doc.documentElement.tagName, "html" );

} catch (e) { exception(e); }

testmodule_finished();

/* eof */
