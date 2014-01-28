/* Tests for DOM 2 Core 'Node' object.

   These tests also run in Mozilla 0.99.
   These tests do not run in MSIE 5.0; I have not yet diagnosed the problem.
*/

var cvs = "$Id: node.js 10654 2006-12-18 15:35:58Z hallvord $";

testmodule( "DOM Node", cvs );

try {

testcase( "Node constructor exists" );

  try {
    tdef( "Node", window.Node );
  } 
  catch (e) { 
    exception( e );
    window.Node = function () { throw( "Do not call me!" ); }
  }

testcase( "Node constants" );

  test( "Node.ELEMENT_NODE", Node.ELEMENT_NODE, 1 );
  test( "Node.ATTRIBUTE_NODE", Node.ATTRIBUTE_NODE, 2 );
  test( "Node.TEXT_NODE", Node.TEXT_NODE, 3 );
  test( "Node.CDATA_SECTION_NODE", Node.CDATA_SECTION_NODE, 4 );
  test( "Node.ENTITY_REFERENCE_NODE", Node.ENTITY_REFERENCE_NODE, 5 );
  test( "Node.ENTITY_NODE", Node.ENTITY_NODE, 6 );
  test( "Node.PROCESSING_INSTRUCTION_NODE", Node.PROCESSING_INSTRUCTION_NODE, 7 );
  test( "Node.COMMENT_NODE", Node.COMMENT_NODE, 8 );
  test( "Node.DOCUMENT_NODE", Node.DOCUMENT_NODE, 9 );
  test( "Node.DOCUMENT_TYPE_NODE", Node.DOCUMENT_TYPE_NODE, 10 );
  test( "Node.DOCUMENT_FRAGMENT_NODE", Node.DOCUMENT_FRAGMENT_NODE, 11 );
  test( "Node.NOTATION_NODE", Node.NOTATION_NODE, 12 );

testcase( "Read-only attributes" );

  the_body = document.getElementById("body-foo");
  the_div = document.getElementById("div-foo");
  the_link = document.getElementById("link-foo");
  the_span = document.getElementById("span-foo");
  the_attr = the_link.getAttributeNode("href");
  var the_frag = document.createDocumentFragment();

  tdef( "r/o attributes #1", the_body );
  tdef( "r/o attributes #2", the_div );
  tdef( "r/o attributes #3", the_link );
  tdef( "r/o attributes #4", the_span );
  tdef( "r/o attributes #5", the_attr );
  tdef( "r/o attributes #6", the_frag);

  test( "nodeType #1", the_link.nodeType, Node.ELEMENT_NODE );
  test( "nodeType #2", the_attr.nodeType, Node.ATTRIBUTE_NODE );
  expect_DOM_exception( "nodeType #3", DOMException.NO_MODIFICATION_ALLOWED_ERR, 
	                function(){ the_link.nodeType=Node.ATTRIBUTE_NODE; } );
  test( "nodeType #4", document.nodeType, Node.DOCUMENT_NODE );
  test( "nodeType #5", the_frag.nodeType, Node.DOCUMENT_FRAGMENT_NODE );
  expect_DOM_exception( "nodeType #6", DOMException.NO_MODIFICATION_ALLOWED_ERR, 
	                function(){ the_frag.nodeType=Node.ATTRIBUTE_NODE; } );

  test( "parentNode #1", the_link.parentNode, the_div );
  test( "parentNode #2", the_div.parentNode, the_body );
  expect_DOM_exception( "parentNode #3", DOMException.NO_MODIFICATION_ALLOWED_ERR, 
	                function(){ the_link.parentNode=the_body; } );
  test( "parentNode #4", the_frag.parentNode, null );
  expect_DOM_exception( "parentNode #5", DOMException.NO_MODIFICATION_ALLOWED_ERR, 
	                function(){ the_frag.parentNode=the_body; } );
  test( "parentNode #6", the_attr.parentNode, null ); // regression test for bug #83652.

  test( "parentElement #1", the_link.parentNode, the_link.parentElement );
  test( "parentElement #2", document.firstChild.parentElement, null );
  expect_DOM_exception( "parentElement #3", DOMException.NO_MODIFICATION_ALLOWED_ERR, 
                        function(){ the_link.parentElement=the_body; } );

  w = the_div.childNodes;
  test( "childNodes #1", w.length, 2 );
  test( "childNodes #2", w.item(0), the_link );
  test( "childNodes #3", w[0], the_link );
  test( "childNodes #4", w.item(1), the_span );
  test( "childNodes #5", w[1], the_span );
  test( "childNodes #6", the_link.childNodes.length, 0 );
  expect_DOM_exception( "childNodes #7", DOMException.NO_MODIFICATION_ALLOWED_ERR, 
	                function(){ the_div.childNodes=new Array(); } );
  if (spoofingExplorer())
  {
    try {
      // MSIE supports these through its general collection interface.
      // Mozilla 0.99 does not support them.
      test( "childNodes #10", w(0), the_link );
      test( "childNodes #11", w(1), the_span );
    }
    catch (e) {
      showfailure( "childNodes #10, #11", "The childNodes collection does not support MSIE function call syntax" );
    }
  }
  w = the_attr.childNodes;
  tdef( "childNodes #8", w );
  test( "childNodes #9", w.length, 0 );

  w = the_span.childNodes;
  tdef( "childNodes #10", w );
  test( "childNodes #11", w.length, 1 );
  var the_text = w.item(0);
  tdef( "r/o attributes #6", the_text );
  test( "parentNode #6", the_text.parentNode, the_span );
  expect_DOM_exception( "parentNode #6", DOMException.NO_MODIFICATION_ALLOWED_ERR, 
	                function(){ the_text.parentNode=the_body; } );

  test( "firstChild #1", the_div.firstChild, the_link );
  test( "firstChild #2", the_link.firstChild, null );
  expect_DOM_exception( "firstChild #3", DOMException.NO_MODIFICATION_ALLOWED_ERR, 
	                function(){ the_link.firstChild=null; } );
  test( "firstChild #4", the_attr.firstChild, null );

  test( "lastChild #1", the_div.lastChild, the_span );
  test( "lastChild #2", the_link.lastChild, null );
  expect_DOM_exception( "lastChild #3", DOMException.NO_MODIFICATION_ALLOWED_ERR, 
	                function(){ the_link.lastChild=null; } );
  test( "lastChild #4", the_attr.lastChild, null );

  test( "previousSibling #1", the_span.previousSibling, the_link );
  test( "previousSibling #2", the_link.previousSibling, null );
  expect_DOM_exception( "previousSibling #3", DOMException.NO_MODIFICATION_ALLOWED_ERR, 
	                function(){ the_link.previousSibling=null; } );
  test( "previousSibling #4", the_attr.previousSibling, null );

  test( "nextSibling #1", the_link.nextSibling, the_span );
  test( "nextSibling #2", the_span.nextSibling, null );
  expect_DOM_exception( "nextSibling #3", DOMException.NO_MODIFICATION_ALLOWED_ERR, 
	                function(){ the_link.nextSibling=null; } );
  test( "nextSibling #4", the_attr.nextSibling, null );

  the_nodemap = the_link.attributes;
  tdef( "attributes #0", the_nodemap );
  test( "attributes #1", the_nodemap, "[object NamedNodeMap]" );
  test( "attributes #2", the_nodemap.length, 3 );
  test( "attributes #3", the_nodemap.item(0).nodeType, Node.ATTRIBUTE_NODE );
  test( "attributes #4", the_nodemap.item(0).name, "ID" );
  test( "attributes #5", the_nodemap.item(0).value, "link-foo" );
  test( "attributes #6", the_nodemap.item(1).nodeType, Node.ATTRIBUTE_NODE );
  test( "attributes #7", the_nodemap.item(1).name, "href" );
  test( "attributes #8", the_nodemap.item(1).value, "http://www.opera.com/" );
  test( "attributes #9", the_nodemap.item(2).nodeType, Node.ATTRIBUTE_NODE );
  test( "attributes #10", the_nodemap.item(2).name, "SHAPE" );
  test( "attributes #11", the_nodemap.item(2).value, "rect" );
  expect_DOM_exception( "attributes #9", DOMException.NO_MODIFICATION_ALLOWED_ERR, 
	                function(){ the_link.attributes=null; } );
  test( "attributes #12", the_attr.attributes, null );
  test( "attributes #13", document.attributes, null );
  test( "attributes #14", the_frag.attributes, null );
  test( "attributes #15", the_text.attributes, null );

  test( "ownerDocument #1", the_link.ownerDocument, document );
  expect_DOM_exception( "ownerDocument #2", DOMException.NO_MODIFICATION_ALLOWED_ERR, 
	                function(){ the_link.ownerDocument=null; } );

  // Opera currently returns "http://www.w3.org/TR/REC-html40"
  // Mozilla returns null. Opera should return null.
  test( "namespaceURI #1", the_link.namespaceURI, null );
  expect_DOM_exception( "namespaceURI #2", DOMException.NO_MODIFICATION_ALLOWED_ERR, 
	                function(){ the_link.namespaceURI=null; } );

  test( "localName #1", the_link.localName, "A" );
  test( "localName #2", the_span.localName, "SPAN" );
  test( "localName #3", the_div.localName, "DIV" );
  test( "localName #4", the_body.localName, "BODY" );
  test( "localName #5", the_attr.localName, "href" );
  expect_DOM_exception( "localName #6", DOMException.NO_MODIFICATION_ALLOWED_ERR, 
	                function(){ the_link.localName=null; } );
  test( "localName #7", the_frag.localName, undefined );
  test( "localName #8", the_text.localName, undefined );

testcase( "nodeName" );

  // No tests generated for CDATASection, Comment, DocumentType, Entity, EntityReference, Notation, ProcessingInstruction
  // Tests are included for Element, Attr, Text, Document, DocumentFragment

  test( "nodeName #1 (element)", the_link.nodeName, "A" );
  expect_DOM_exception( "nodeName #2 (element)", DOMException.NO_MODIFICATION_ALLOWED_ERR, 
	                function(){ the_link.nodeName="foo"; } );
  test( "nodeName #3 (attribute)", the_attr.nodeName, "href" );
  expect_DOM_exception( "nodeName #4 (attribute)", DOMException.NO_MODIFICATION_ALLOWED_ERR, 
	                function(){ the_attr.nodeName="foo"; } );
  test( "nodeName #5 (text)", the_text.nodeName, "#text" );
  expect_DOM_exception( "nodeName #6 (text)", DOMException.NO_MODIFICATION_ALLOWED_ERR, 
	                function(){ the_text.nodeName="foo"; } );
  test( "nodeName #7 (document)", document.nodeName, "#document" );
  expect_DOM_exception( "nodeName #8 (document)", DOMException.NO_MODIFICATION_ALLOWED_ERR, 
	                function(){ document.nodeName="foo"; } );
  test( "nodeName #9 (document fragment)", the_frag.nodeName, "#document-fragment" );
  expect_DOM_exception( "nodeName #10 (document fragment)", DOMException.NO_MODIFICATION_ALLOWED_ERR, 
	                function(){ the_frag.nodeName="foo"; } );

testcase( "Read-write attributes" );

  // Exceptions on write: NO_MODIFICATION_ALLOWED_ERR if read-only node
  // Exceptions on read: DOMSTRING_SIZE_ERR, but cannot be triggered in Opera, we
  //   support strings up to 2^31-1 chars long, longer than available memory
  
  // Exceptions on write: INVALID_CHARACTER_ERR, NO_MODIFICATION_ALLOWED_ERR (if r/o node), NAMESPACE_ERR
  test( "prefix #1", the_link.prefix, null ); 		// FIXME, nees more tests

  // showfailure( "prefix #2", "IMPLEMENTME: Test exceptions on prefix get/set" );

testcase( "nodeValue" );

  var the_comment = document.createComment("A comment!");

  test( "nodeValue #1 (attribute)", the_attr.nodeValue, "http://www.opera.com/" );
  the_attr.nodeValue = "http://web.intern.opera.no";
  test( "nodeValue #2 (attribute)", the_attr.nodeValue, "http://web.intern.opera.no/" );
  test( "nodeValue #3 (attribute)", the_attr.value, "http://web.intern.opera.no/" ); // regression test for bug #83649
  the_attr.nodeValue = "http://www.opera.com";
  test( "nodeValue #4 (attribute)", the_attr.nodeValue, "http://www.opera.com/" );
  test( "nodeValue #5 (element)", the_link.nodeValue, null );
  the_link.nodeValue = "foo";
  test( "nodeValue #6 (element)", the_link.nodeValue, null );
  test( "nodeValue #7 (text)", the_text.nodeValue, "A span!" );
  the_text.nodeValue = "test again";
  test( "nodeValue #8 (text)", the_text.nodeValue, "test again" );
  the_text.nodeValue = "A span!";
  test( "nodeValue #9 (text)", the_text.nodeValue, "A span!" );
  test( "nodeValue #10 (document)", document.nodeValue, null );
  document.nodeValue = "foo";
  test( "nodeValue #11 (document)", document.nodeValue, null );
  test( "nodeValue #12 (document fragment)", the_frag.nodeValue, null);
  the_frag.nodeValue = "foo";
  test( "nodeValue #13 (document fragment)", the_frag.nodeValue, null);
  test( "nodeValue #14 (comment)", the_comment.nodeValue, "A comment!"); // regression test for bug #83656.

testcase( "appendChild" );

  // append the_span to the_frag, and append it back to the_div again
  var the_child = the_frag.appendChild( the_span );
  test( "appendChild #1", the_frag.firstChild, the_child );
  test( "appendChild #2", the_frag.lastChild, the_child );
  test( "appendChild #3", the_frag.lastChild.localName, "SPAN" );

  the_span = the_div.appendChild( the_frag.firstChild );
  tdef( "appendChild #4", the_span );
  test( "appendChild #5", the_span.childNodes.length, 1 );  
  test( "appendChild #6", the_span.childNodes.item(0).nodeValue, "A span!" );
  test( "appendChild #7", the_div.lastChild, the_span );
  test( "appendChild #8", the_div.lastChild.localName, "SPAN" );
  test( "appendChild #9", the_div.childNodes.length, 2 );

  // change the sequence of two elements, the_link and the_span, and change it back again
  var the_child = the_div.appendChild( the_link );

  test( "appendChild #10", the_div.firstChild, the_span );
  test( "appendChild #11", the_div.lastChild, the_child );
  test( "appendChild #12", the_child.parentNode, the_div );
  test( "appendChild #13", the_child.nextSibling, null );
  test( "appendChild #14", the_child.previousSibling, the_span );
  the_link = document.getElementById( "link-foo" );
  tdef( "appendChild #15", the_link );
  test( "appendChild #16", the_link.parentNode, the_div );
  test( "appendChild #17", the_link.nextSibling, null );
  test( "appendChild #18", the_link.previousSibling, the_span );
  w = the_div.childNodes;
  test( "appendChild #19", w.length, 2 );
  test( "appendChild #20", w.item(0), the_span );
  test( "appendChild #21", w.item(1), the_link );
  w = the_link.childNodes;
  tdef( "appendChild #22", w );
  test( "appendChild #23", w.length, 0 );
  test( "appendChild #24", the_div.lastChild, the_link );
  test( "appendChild #25", the_link.localName, "A" );

  the_child = the_div.appendChild( the_span );

  test( "appendChild #26", the_div.firstChild, the_link );
  test( "appendChild #27", the_div.lastChild, the_child );
  test( "appendChild #28", the_child.parentNode, the_div );
  test( "appendChild #29", the_child.nextSibling, null );
  test( "appendChild #30", the_child.previousSibling, the_link );
  the_span = document.getElementById( "span-foo" );
  tdef( "appendChild #31", the_span );
  test( "appendChild #32", the_span.parentNode, the_div );
  test( "appendChild #33", the_span.nextSibling, null );
  test( "appendChild #34", the_span.previousSibling, the_link );
  w = the_div.childNodes;
  test( "appendChild #35", w.length, 2 );
  test( "appendChild #36", w.item(0), the_link );
  test( "appendChild #37", w.item(1), the_span );
  w = the_span.childNodes;
  tdef( "appendChild #38", w );
  test( "appendChild #39", w.length, 1 );
  the_text = w.item(0);
  tdef( "appendChild #40", the_text );
  test( "appendChild #41", the_text.parentNode, the_span );
  test( "appendChild #42", the_div.lastChild, the_span );
  test( "appendChild #43", the_span.localName, "SPAN" );

  // null test
  expect_exception( "null test", Error, function(){ the_child = the_div.appendChild( null );} );

  // test of wrong input parameters
  the_div.appendChild( "test" );
  the_div.appendChild( 1 );
  the_div.appendChild();

  // exception tests
  expect_DOM_exception( "appendChild #44", DOMException.HIERARCHY_REQUEST_ERR, 
	                function(){ the_link.appendChild( the_body ); } );

  expect_DOM_exception( "appendChild #45", DOMException.HIERARCHY_REQUEST_ERR, 
				function(){ the_div.appendChild( the_span.attributes.item(0) ); } );

  expect_DOM_exception( "appendChild #46", DOMException.HIERARCHY_REQUEST_ERR, 
				function(){ the_frag.appendChild( the_span.attributes.item(0) ); } );

  // regression test for bug #83666.
  var addr_node = document.createElement('address');
  var new_elm = document.createElement('div');
  addr_node.appendChild(new_elm);
  test( "appendChild #47", new_elm.parentNode, addr_node );

testcase( "cloneNode" );

  // clone three element nodes
  var clone1 = the_div.cloneNode( false );

  tdef( "cloneNode #1", clone1 );
  tdef( "cloneNode #2", clone1.childNodes );
  test( "cloneNode #3", clone1.childNodes.length, 0 );

  var clone2 = the_link.cloneNode( true );

  tdef( "cloneNode #4", clone2 );
  tdef( "cloneNode #5", clone2.childNodes );
  test( "cloneNode #6", clone2.childNodes.length, 0 );
  test( "cloneNode #7", clone2.localName, "A" );

  var clone3 = the_span.cloneNode( true );

  tdef( "cloneNode #8", clone3 );
  test( "cloneNode #9", clone3.localName, "SPAN" );
  tdef( "cloneNode #10", clone3.childNodes );
  test( "cloneNode #11", clone3.childNodes.length, 1 );
  tdef( "cloneNode #12", clone3.childNodes.item(0) );
  test( "cloneNode #13", clone3.childNodes.item(0).parentNode, clone3 );

  // append two of the clone nodes to the first clone node
  clone2 = clone1.appendChild( clone2 );
  clone3 = clone1.appendChild( clone3 );

  test( "cloneNode #14", clone1.childNodes.length, 2 );
  test( "cloneNode #15", clone1.childNodes.item(0), clone2 );
  test( "cloneNode #16", clone1.childNodes.item(1), clone3 );
  test( "cloneNode #17", clone1.childNodes.item(1).parentNode, clone1 );
  test( "cloneNode #18", clone1.childNodes[1], clone3 );

  // append two of the clone nodes to the empty document fragment
  tdef( "cloneNode #19", the_frag );
  tdef( "cloneNode #20", the_frag.hasChildNodes, false );

  tdef( "cloneNode #21", clone2 );
  tdef( "cloneNode #22", clone2.childNodes );
  test( "cloneNode #23", clone2.childNodes.length, 0 );
  test( "cloneNode #24", clone2.localName, "A" );

  tdef( "cloneNode #25", clone3 );
  test( "cloneNode #26", clone3.localName, "SPAN" );
  tdef( "cloneNode #27", clone3.childNodes );
  test( "cloneNode #28", clone3.childNodes.length, 1 );
  tdef( "cloneNode #29", clone3.childNodes.item(0) );
  test( "cloneNode #30", clone3.childNodes.item(0).parentNode, clone3 );

  clone2 = the_frag.appendChild(clone2);
  clone3 = the_frag.appendChild(clone3);

  tdef( "cloneNode #31", the_frag.hasChildNodes, true );
  test( "cloneNode #32", the_frag.childNodes.length, 2 );
  test( "cloneNode #33", the_frag.childNodes.item(0), clone2 );
  test( "cloneNode #34", the_frag.childNodes.item(1), clone3 );
  test( "cloneNode #36", the_frag.childNodes[1], clone3 );

  // clone the attribute node
  the_clone = the_attr.cloneNode( true );
  tdef( "cloneNode #37", the_clone );
  test( "cloneNode #38", the_clone.nodeType, Node.ATTRIBUTE_NODE );
  test( "cloneNode #39", the_clone.nodeName, "href" );
  test( "cloneNode #40", the_clone.nodeValue, "http://www.opera.com/" );
  test( "cloneNode #41", the_clone.localName, "href" );
  test( "cloneNode #42", the_clone.name, "href" );
  test( "cloneNode #43", the_clone.value, "http://www.opera.com/"  );

  // clone the document fragment node
  the_clone = the_frag.cloneNode( true );
  tdef( "cloneNode #44", the_clone );
  test( "cloneNode #45", the_clone.nodeType, Node.DOCUMENT_FRAGMENT_NODE );
  w = the_clone.childNodes;
  tdef( "cloneNode #46", w );
  test( "cloneNode #47", w.length, 2 );
  test( "cloneNode #48", w.item(0).localName, "A" );
  test( "cloneNode #49", w.item(1).localName, "SPAN" );

  // test of wrong input parameters
  the_div.cloneNode();

testcase( "hasAttributes" );

  test( "hasAttributes #1", the_body.hasAttributes(), true );
  the_nodemap = the_body.attributes;
  tdef( "hasAttributes #2", the_nodemap );
  test( "hasAttributes #3", the_nodemap, "[object NamedNodeMap]" );
  test( "hasAttributes #4", the_nodemap.length, 2 );
  test( "hasAttributes #5", the_nodemap.item(0).nodeType, Node.ATTRIBUTE_NODE );
  test( "hasAttributes #6", the_nodemap.item(0).name, "ID" );
  test( "hasAttributes #7", the_nodemap.item(0).value, "body-foo" );
  test( "hasAttributes #8", the_nodemap.item(1).nodeType, Node.ATTRIBUTE_NODE );
  test( "hasAttributes #9", the_nodemap.item(1).name, "TEXT" );
  test( "hasAttributes #10", the_nodemap.item(1).value, "#000000" );

  test( "hasAttributes #8", the_div.hasAttributes(), true );
  the_nodemap = the_div.attributes;
  tdef( "hasAttributes #9", the_nodemap );
  test( "hasAttributes #10", the_nodemap, "[object NamedNodeMap]" );
  test( "hasAttributes #11", the_nodemap.length, 1 );
  test( "hasAttributes #12", the_nodemap.item(0).nodeType, Node.ATTRIBUTE_NODE );
  test( "hasAttributes #13", the_nodemap.item(0).name, "ID" );
  test( "hasAttributes #14", the_nodemap.item(0).value, "div-foo" );

  test( "hasAttributes #15", the_link.hasAttributes(), true );

  test( "hasAttributes #16", the_span.hasAttributes(), true );
  the_nodemap = the_span.attributes;
  tdef( "hasAttributes #17", the_nodemap );
  test( "hasAttributes #18", the_nodemap, "[object NamedNodeMap]" );
  test( "hasAttributes #19", the_nodemap.length, 1 );
  test( "hasAttributes #20", the_nodemap.item(0).nodeType, Node.ATTRIBUTE_NODE );
  test( "hasAttributes #21", the_nodemap.item(0).name, "ID" );
  test( "hasAttributes #22", the_nodemap.item(0).value, "span-foo" );

  test( "hasAttributes #23", the_attr.hasAttributes(), false );

  test( "hasAttributes #30", the_frag.hasAttributes(), false );

  test( "hasAttributes #31", the_text.hasAttributes(), false );

  // test of wrong input parameter
  the_div.hasAttributes( 1 );

testcase( "hasChildNodes" );

  test( "hasChildNodes #1", the_body.hasChildNodes(), true );

  test( "hasChildNodes #2", the_div.hasChildNodes(), true );
  tdef( "hasChildNodes #3", the_div.childNodes );
  test( "hasChildNodes #4", the_div.childNodes.length, 2 );

  test( "hasChildNodes #5", the_span.hasChildNodes(), true );
  tdef( "hasChildNodes #6", the_span.childNodes );
  test( "hasChildNodes #7", the_span.childNodes.length, 1 );

  test( "hasChildNodes #8", the_frag.hasChildNodes(), true );
  tdef( "hasChildNodes #9", the_frag.childNodes );
  test( "hasChildNodes #10", the_frag.childNodes.length, 2 );

  test( "hasChildNodes #11", the_link.hasChildNodes(), false );
  test( "hasChildNodes #12", the_attr.hasChildNodes(), false );
  test( "hasChildNodes #13", the_text.hasChildNodes(), false );

  // test of wrong input parameter
  the_div.hasChildNodes( 1 );

testcase( "insertBefore" );

  // document fragment: the_clone's two element nodes are switched
  tdef( "insertBefore #1", the_clone.firstChild );
  tdef( "insertBefore #2", the_clone.lastChild );
  test( "insertBefore #3", the_clone.firstChild.localName, "A" );
  test( "insertBefore #4", the_clone.lastChild.localName, "SPAN" );
  var tmp = the_clone.insertBefore( the_clone.lastChild, the_clone.firstChild );
  tdef( "insertBefore #5", the_clone.firstChild );
  tdef( "insertBefore #6", the_clone.lastChild );
  test( "insertBefore #7", the_clone.firstChild.localName, "SPAN" );
  test( "insertBefore #8", the_clone.lastChild.localName, "A" );
  test( "insertBefore #9", the_clone.firstChild.hasChildNodes(), true );
  tdef( "insertBefore #10", the_clone.firstChild.childNodes );
  test( "insertBefore #11", the_clone.firstChild.childNodes.length, 1 );
  tdef( "insertBefore #12", the_clone.lastChild.childNodes );
  test( "insertBefore #13", the_clone.lastChild.childNodes.length, 0 );

  // document fragment: the_clone is inserted into the_frag (both are fragments)
  tmp = the_frag.insertBefore( the_clone, the_frag.lastChild );
  tdef( "insertBefore #14", tmp );
  test( "insertBefore #15", tmp.nodeType, Node.DOCUMENT_FRAGMENT_NODE );
  tdef( "insertBefore #16", the_frag.childNodes );
  test( "insertBefore #17", the_frag.childNodes.length, 4 );
  test( "insertBefore #18", the_frag.childNodes.item(0).localName, "A" );
  test( "insertBefore #19", the_frag.childNodes.item(1).localName, "SPAN" );
  test( "insertBefore #20", the_frag.childNodes.item(2).localName, "A" );
  test( "insertBefore #21", the_frag.childNodes.item(3).localName, "SPAN" );
  test( "insertBefore #22", the_frag.firstChild.hasChildNodes(), false );
  tdef( "insertBefore #23", the_frag.lastChild.childNodes );
  test( "insertBefore #24", the_frag.lastChild.childNodes.length, 1 );

  // document fragment: insert empty document fragment the_clone into non-empty document fragment
  tmp = the_frag.insertBefore( the_clone, the_frag.lastChild );
  tdef( "insertBefore #28", the_clone );
  test( "insertBefore #29", the_clone.nodeType, Node.DOCUMENT_FRAGMENT_NODE );
  test( "insertBefore #30", the_frag.hasChildNodes(), true );
  test( "insertBefore #31", the_frag.childNodes.length, 4 );

  // document element: empty document fragment into document element
  tmp = the_div.insertBefore( the_clone, the_div.lastChild );
  tdef( "insertBefore #32", the_clone );
  test( "insertBefore #33", the_clone.nodeType, Node.DOCUMENT_FRAGMENT_NODE );
  test( "insertBefore #34", the_div.hasChildNodes(), true );
  test( "insertBefore #35", the_div.childNodes.length, 2 );

  // document element: the_div's two element nodes are switched and switched back
  tdef( "insertBefore #36", the_div.firstChild );
  tdef( "insertBefore #37", the_div.lastChild );
  test( "insertBefore #38", the_div.firstChild.localName, "A" );
  test( "insertBefore #39", the_div.lastChild.localName, "SPAN" );
  tmp = the_div.insertBefore( the_div.lastChild, the_div.firstChild );
  tdef( "insertBefore #40", the_div.firstChild );
  tdef( "insertBefore #41", the_div.lastChild );
  test( "insertBefore #42", the_div.firstChild.localName, "SPAN" );
  test( "insertBefore #43", the_div.lastChild.localName, "A" );
  test( "insertBefore #44", the_div.firstChild.hasChildNodes(), true );
  tdef( "insertBefore #45", the_div.lastChild.childNodes );
  test( "insertBefore #46", the_div.lastChild.childNodes.length, 0 );
  tmp = the_div.insertBefore( the_div.lastChild, the_div.firstChild );
  tdef( "insertBefore #47", tmp );
  test( "insertBefore #48", tmp.localName, "A" );

  // document element: the_frag's four elements are inserted into the_div
  tmp = the_div.insertBefore( the_frag, the_div.lastChild );
  tdef( "insertBefore #49", tmp );
  test( "insertBefore #50", tmp.nodeType, Node.DOCUMENT_FRAGMENT_NODE );
  test( "insertBefore #51", tmp.hasChildNodes(), false );
  tdef( "insertBefore #52", the_div.childNodes );
  test( "insertBefore #53", the_div.childNodes.length, 6 );
  test( "insertBefore #54", the_div.childNodes.item(0).localName, "A" );
  test( "insertBefore #55", the_div.childNodes.item(0).hasChildNodes(), false );
  test( "insertBefore #56", the_div.childNodes.item(1).localName, "A" );
  test( "insertBefore #57", the_div.childNodes.item(1).hasChildNodes(), false );
  test( "insertBefore #58", the_div.childNodes.item(2).localName, "SPAN" );
  tdef( "insertBefore #59", the_div.childNodes.item(2).childNodes );
  test( "insertBefore #60", the_div.childNodes.item(2).childNodes.length, 1 );
  test( "insertBefore #61", the_div.childNodes.item(3).localName, "A" );
  test( "insertBefore #62", the_div.childNodes.item(3).hasChildNodes(), false );
  test( "insertBefore #63", the_div.childNodes.item(4).localName, "SPAN" );
  tdef( "insertBefore #64", the_div.childNodes.item(4).childNodes );
  test( "insertBefore #65", the_div.childNodes.item(4).childNodes.length, 1 );
  test( "insertBefore #66", the_div.childNodes.item(5).localName, "SPAN" );
  tdef( "insertBefore #67", the_div.childNodes.item(5).childNodes );
  test( "insertBefore #68", the_div.childNodes.item(5).childNodes.length, 1 );

  // the_frag is empty
  the_div.insertBefore( the_frag.lastChild, the_div.lastChild );
  the_frag.insertBefore( the_frag.firstChild, the_frag.lastChild );

  // test of wrong input parameters
  the_div.insertBefore( "test" ,1 );
  the_div.insertBefore( the_clone );

  // exception tests
  expect_DOM_exception( "insertBefore #69", undefined, 
	                  function(){ the_frag.firstChild.insertBefore( the_frag.lastChild, the_div.lastChild ); } );

  expect_DOM_exception( "insertBefore #70", DOMException.HIERARCHY_REQUEST_ERR, 
	                  function(){ the_div.firstChild.insertBefore( the_div, the_div.lastChild ); } );

  expect_DOM_exception( "insertBefore #71", DOMException.NOT_FOUND_ERR, 
	                  function(){ the_div.childNodes.item(2).insertBefore( the_div.childNodes.item(2).firstChild, the_div.childNodes.item(5).firstChild ); } );

  // now insert two clone elements (with child elements) into the_frag and check exceptions
  the_clone = the_div.cloneNode( true );
  tdef( "insertBefore #72", the_clone.childNodes );
  test( "insertBefore #73", the_clone.childNodes.length, 6 );
  test( "insertBefore #74", the_clone.nodeType, Node.ELEMENT_NODE );
  tdef( "insertBefore #75", the_frag );
  test( "insertBefore #76", the_frag.nodeType, Node.DOCUMENT_FRAGMENT_NODE );
  test( "insertBefore #77", the_frag.hasChildNodes(), false );
  test( "insertBefore #78", the_frag.lastChild, null );
  tmp = the_frag.insertBefore( the_clone.lastChild, the_frag.lastChild );
  tmp = the_frag.insertBefore( the_clone.lastChild, null );
  tdef( "insertBefore #79", the_frag.childNodes );
  test( "insertBefore #80", the_frag.childNodes.length, 2 );

  expect_DOM_exception( "insertBefore #81", DOMException.HIERARCHY_REQUEST_ERR, 
	                  function(){ the_frag.firstChild.insertBefore( the_frag, the_frag.lastChild ); } );

  expect_DOM_exception( "insertBefore #82", DOMException.NOT_FOUND_ERR, 
	                  function(){ the_frag.childNodes.item(0).insertBefore( the_frag.childNodes.item(0).firstChild, the_frag.childNodes.item(1).firstChild ); } );

  expect_DOM_exception( "insertBefore #83", DOMException.NOT_FOUND_ERR, 
	                  function(){ the_div.insertBefore( the_frag.firstChild, the_frag.lastChild ); } );

  expect_DOM_exception( "insertBefore #84", DOMException.NOT_FOUND_ERR, 
	                  function(){ the_div.insertBefore( the_frag.firstChild, the_frag ); } );

  expect_DOM_exception( "insertBefore #85", DOMException.HIERARCHY_REQUEST_ERR,
				function(){ the_div.insertBefore( the_span.attributes.item(0), the_div.attributes.item(0) ); } );

  expect_DOM_exception( "insertBefore #86", DOMException.HIERARCHY_REQUEST_ERR, 
				function(){ the_div.insertBefore( the_span.attributes.item(0), null ); } );

  expect_DOM_exception( "insertBefore #87", DOMException.NOT_FOUND_ERR, 
				function(){ the_div.insertBefore( the_span, the_div.attributes.item(0) ); } );

  expect_DOM_exception( "insertBefore #88", DOMException.HIERARCHY_REQUEST_ERR, 
				function(){ the_frag.insertBefore( the_span.attributes.item(0), null ); } );

testcase( "removeChild" );

  // the inserted document fragment's elements are removed from the_div
  tmp = the_div.removeChild( the_div.childNodes.item(1) );
  tmp = the_div.removeChild( the_div.childNodes.item(1) );
  tmp = the_div.removeChild( the_div.childNodes.item(1) );
  tmp = the_div.removeChild( the_div.childNodes.item(1) );
  test( "removeChild #1", the_div.childNodes.length, 2 );
  test( "removeChild #2", the_div.childNodes.item(0).localName, "A" );
  test( "removeChild #3", the_div.firstChild.hasChildNodes(), false );
  test( "removeChild #4", the_div.childNodes.item(1).localName, "SPAN" );
  tdef( "removeChild #5", the_div.childNodes.item(1).childNodes );
  test( "removeChild #6", the_div.childNodes.item(1).childNodes.length, 1 );
  tdef( "removeChild #7", tmp );
  test( "removeChild #8", tmp.localName, "SPAN" );
  tdef( "removeChild #9", tmp.childNodes );
  test( "removeChild #10", tmp.childNodes.length, 1 );

  // remove element from document fragment
  test( "removeChild #11", the_frag.hasChildNodes(), true );
  test( "removeChild #12", the_frag.childNodes.length, 2 );
  tmp = the_frag.removeChild( the_frag.childNodes.item(1) );
  test( "removeChild #13", the_frag.childNodes.length, 1 );

  // null test
  tmp = the_div.removeChild( null );

  // test of wrong input parameters
  the_div.removeChild( "test" ,1 );
  the_div.removeChild();

  // exception tests
  expect_DOM_exception( "removeChild #14", DOMException.NOT_FOUND_ERR, 
				function(){ the_div.removeChild( the_div.firstChild.attributes.item(0) ); } );

  expect_DOM_exception( "removeChild #15", DOMException.NOT_FOUND_ERR, 
				function(){ the_frag.removeChild( the_frag.firstChild.attributes.item(0) ); } );

  expect_DOM_exception( "removeChild #16", DOMException.NOT_FOUND_ERR, 
				function(){ the_div.removeChild( the_frag ); } );

  expect_DOM_exception( "removeChild #17", DOMException.NOT_FOUND_ERR, 
				function(){ the_span.removeChild( the_div ); } );

testcase( "isSupported" );

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

  tdef( "isSupported #1", document.isSupported );

  for ( i=0 ; i < x.length ; i++ )
  {
    test( "isSupported #" + (i+2) + " DOM1 (" + x[i][0] + ")", document.isSupported( x[i][0], "1.0" ), Boolean(x[i][1][0]) );
    test( "isSupported #" + (i+2) + " DOM2 (" + x[i][0] + ")", document.isSupported( x[i][0], "2.0" ), Boolean(x[i][1][1]) );
  }

  // test of wrong input parameters
  the_div.isSupported( "test" );
  the_div.isSupported();

testcase( "replaceChild" );

  // document fragment: the_frag's element node is replaced by the_clone's first element node
  tdef( "replaceChild #1", the_frag.firstChild );
  tdef( "replaceChild #2", the_clone.firstChild );
  test( "replaceChild #3", the_frag.firstChild.localName, "SPAN" );
  test( "replaceChild #4", the_clone.firstChild.localName, "A" );
  test( "replaceChild #14", the_clone.childNodes.length, 4 );
  tmp = the_frag.replaceChild( the_clone.firstChild, the_frag.firstChild );
  tdef( "replaceChild #5", tmp );
  test( "replaceChild #6", tmp.localName, "SPAN" );
  test( "replaceChild #7", tmp.hasChildNodes(), true );
  tdef( "replaceChild #8", tmp.childNodes );
  test( "replaceChild #9", tmp.childNodes.length, 1 );
  tdef( "replaceChild #10", the_frag.firstChild );
  test( "replaceChild #11", the_frag.firstChild.localName, "A" );
  test( "replaceChild #12", the_frag.firstChild.hasChildNodes(), false );
  tdef( "replaceChild #13", the_clone.childNodes );
  test( "replaceChild #14", the_clone.childNodes.length, 3 );
  test( "replaceChild #15", the_clone.childNodes.item(0).localName, "A" );
  test( "replaceChild #16", the_clone.childNodes.item(1).localName, "SPAN" );
  test( "replaceChild #17", the_clone.childNodes.item(2).localName, "A" );

  // document fragment: element node the_clone's first element is replaced with the_frag
  tmp = the_clone.replaceChild( the_frag, the_clone.firstChild );
  tdef( "replaceChild #18", tmp );
  test( "replaceChild #19", tmp.nodeType, Node.ELEMENT_NODE );
  test( "replaceChild #20", tmp.localName, "A" );
  tdef( "replaceChild #21", the_frag.childNodes );
  test( "replaceChild #22", the_frag.childNodes.length, 0 );
  test( "replaceChild #23", the_clone.childNodes.length, 3 );
  test( "replaceChild #24", the_clone.childNodes.item(0).localName, "A" );
  test( "replaceChild #25", the_clone.childNodes.item(1).localName, "SPAN" );
  test( "replaceChild #26", the_clone.childNodes.item(2).localName, "A" );
  test( "replaceChild #27", the_clone.firstChild.hasChildNodes(), false );

  // null tests
  tmp = the_clone.replaceChild( the_span, null );
  tmp = the_clone.replaceChild( null, the_clone.firstChild );
  tmp = the_clone.replaceChild( the_frag, null );
  tmp = the_frag.replaceChild( the_frag, null );
  tmp = the_frag.replaceChild( null, null );

  test( "replaceChild #28", the_link.hasChildNodes(), false );
  tmp = the_link.replaceChild( the_span.childNodes.firstChild, the_span ); 
  test( "replaceChild #29", the_link.hasChildNodes(), false );

  tdef( "replaceChild #30", the_frag );
  test( "replaceChild #31", the_frag.nodeType, Node.DOCUMENT_FRAGMENT_NODE );
  test( "replaceChild #32", the_frag.hasChildNodes(), false );
  test( "replaceChild #33", the_clone.childNodes.length, 3 );

  // test of wrong input parameters
  the_div.replaceChild();
  the_div.replaceChild( the_clone );
  the_div.replaceChild( 1, "test" );
  the_div.replaceChild( "test", 1 );

  // regression test for bug #83663
  var divelm = document.createElement('DIV');
  divelm.appendChild(document.createTextNode('Original'));
  divelm.replaceChild(document.createTextNode('Replaced'), divelm.firstChild);
  test( "replaceChild #34", divelm.firstChild.nodeValue, "Replaced" );

  // exception tests
  expect_DOM_exception( "replaceChild #35", undefined, 
	                  function(){ the_frag.firstChild.replaceChild( the_div.firstChild, the_frag.firstChild ); } );

  expect_DOM_exception( "replaceChild #36", DOMException.HIERARCHY_REQUEST_ERR, 
	                  function(){ the_div.firstChild.replaceChild( the_div, the_div.lastChild ); } );

  expect_DOM_exception( "replaceChild #37", DOMException.NOT_FOUND_ERR, 
	                  function(){ the_clone.childNodes.item(1).insertBefore( the_clone.childNodes.item(1).childNodes.item(0), the_clone.childNodes.item(1) ); } );

testcase( "normalize" );

  // the_frag is built to a fragmented collection of text nodes
  test( "normalize #1", the_frag.hasChildNodes(), false );
  for ( var i=0 ; i < 5 ; i++ )
  	the_frag.appendChild( the_text.cloneNode( false ) );

  for ( var i=0 ; i < 5 ; i++ )
  {
  	test( "normalize #" + (i*2+2), the_frag.childNodes.item(i).nodeType, Node.TEXT_NODE );
	test( "normalize #" + (i*2+3), the_frag.childNodes.item(i).nodeValue, "A span!" );
  }

  test( "normalize #12", the_frag.hasChildNodes(), true );
  test( "normalize #13", the_frag.childNodes.length, 5 );
  the_frag.normalize();
  test( "normalize #14", the_frag.childNodes.length, 1 );
  test( "normalize #15", the_frag.childNodes.item(0).nodeValue, "A span!A span!A span!A span!A span!" );

  // five more text nodes are added to the_frag, and two of them are emptied

  for ( var i=0 ; i < 5 ; i++ )
  	the_frag.appendChild( the_text.cloneNode( false ) );

  for ( var i=0 ; i < 5 ; i++ )
  {
  	test( "normalize #" + (i*2+16), the_frag.childNodes.item(i+1).nodeType, Node.TEXT_NODE );
	test( "normalize #" + (i*2+16), the_frag.childNodes.item(i+1).nodeValue, "A span!" );
  }
  the_frag.childNodes.item(1).nodeValue = "";
  the_frag.childNodes.item(3).nodeValue = "";
  test( "normalize #26", the_frag.childNodes.length, 6 );
  the_frag.normalize();
  test( "normalize #27", the_frag.childNodes.length, 1 );
  test( "normalize #28", the_frag.childNodes.item(0).nodeValue, "A span!A span!A span!A span!A span!A span!A span!A span!" );

  // test normalize for an element node as well
  the_text = the_span.childNodes.item(0);
  tdef( "normalize #29", the_text );
  test( "normalize #30", the_text.nodeValue, "A span!" );
  test( "normalize #31", the_text.nodeType, Node.TEXT_NODE );
  tmp = the_text.splitText(1);
  test( "normalize #32", the_text.nodeValue, "A" );
  test( "normalize #33", tmp.nodeValue, " span!" );
  test( "normalize #34", the_span.childNodes.length, 2 );
  the_frag.childNodes.item(0).nodeValue = "";
  the_span.appendChild( the_frag.childNodes.item(0) );
  test( "normalize #35", the_span.childNodes.length, 3 );
  test( "normalize #36", the_span.childNodes.item(0).nodeValue, "A" );
  test( "normalize #37", the_span.childNodes.item(1).nodeValue, " span!" );
  test( "normalize #38", the_span.childNodes.item(2).nodeValue, "" );
  the_body.normalize();
  test( "normalize #39", the_span.childNodes.length, 1 );
  test( "normalize #40", the_span.childNodes.item(0).nodeValue, "A span!" );

  // test wrong input parameters
  the_text.normalize("");
  the_text.normalize( the_clone );
  the_text.normalize( 1 );
  the_text.splitText("");

testcase( "MSIE compatibility" );

  if (spoofingExplorer())
  {
    tdef( "all #1", the_div.all );
    test( "all #2", the_div.all.length, 2 );
    test( "all #3", the_div.all.item(0), the_link );
    test( "all #4", the_div.all.item(1), the_span );
    test( "all #5", the_div.all[0], the_link );
    test( "all #6", the_div.all[1], the_span );
    test( "all #7", the_div.all(0), the_link );
    test( "all #8", the_div.all(1), the_span );
    // MSIE online docs imply that 'all' is read-only
    // See comments in DOM_Node::PutName for an explanation of why this test fails
    expect_DOM_exception( "all #9", DOMException.NO_MODIFICATION_ALLOWED_ERR, 
	                  function(){ the_div.all=new Array(); }, 'Expected to fail - see comments in test script.' );

    tdef( "children #1", the_div.children );
    test( "children #2", the_div.children.length, 2 );
    test( "children #3", the_div.children.item(0), the_link );
    test( "children #4", the_div.children.item(1), the_span );
    test( "children #5", the_div.children[0], the_link );
    test( "children #6", the_div.children[1], the_span );
    test( "children #7", the_div.children(0), the_link );
    test( "children #8", the_div.children(1), the_span );
    // MSIE online docs imply that 'children' is read-only
    // See comments in DOM_Node::PutName for an explanation of why this test fails
    expect_DOM_exception( "children #9", DOMException.NO_MODIFICATION_ALLOWED_ERR, 
	                  function(){ the_div.children=new Array(); }, 'Expected to fail - see comments in test script.' );

    tdef( "document #1", the_div.document );
    test( "document #2", the_div.document, the_div.ownerDocument );
    expect_DOM_exception( "document #3", DOMException.NO_MODIFICATION_ALLOWED_ERR, 
	                  function(){ the_link.document=null; } );
  }

  var nsuri_win = window.open('xmldoc.xml', 'node-xml');
  if (!nsuri_win)
  {
    showfailure( "Opening secondary window", "Opening window failed." );
    testmodule_finished();
  }
  else
  {
    var timeout = 100;
    var attempts = 0;

    function runTests()
    {
      var d = nsuri_win.document;
      if (!d || !d.getElementById('taggen3'))
        if (++attempts > 10)
          showfailure("loading document", "Loading timed out.");
        else
        {
          setTimeout(runTests, timeout);
          timeout += timeout;
          return;
        }
      else
      {
        xmldiv = d.getElementById('div1');
        xmltag = d.getElementById('taggen1');
        xmltag2 = d.getElementById('taggen2');
        xmlattr = xmltag.attributes.item(1);
        xmlattr2 = xmltag2.attributes.item(1);

        test( "namespaceURI #2", xmldiv.namespaceURI, 'http://www.w3.org/TR/REC-html40');
        test( "namespaceURI #3", xmltag.namespaceURI, 'http://www.bogus.com/spec');
        test( "namespaceURI #4", xmlattr.nodeName, 'bogus:battr');
        test( "namespaceURI #5", xmlattr.namespaceURI, 'http://www.bogus.com/spec');
        test( "namespaceURI #6", xmlattr2.nodeName, 'HTML:ALIGN');
        test( "namespaceURI #7", xmlattr2.namespaceURI, 'http://www.w3.org/TR/REC-html40');
        test( "namespaceURI #8", xmldiv.nodeName, 'HTML:DIV');
        test( "namespaceURI #9", xmltag.nodeName, 'bogus:taggen');
      }

      nsuri_win.close();
      testmodule_finished();
    }

    runTests();
  }

} catch (e) { exception( e ); }

/* eof */
