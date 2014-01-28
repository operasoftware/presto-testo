/* Tests for DOM 2 Core 'DocumentFragment' object. */

var cvs = "$Id: fragment.js 25298 2008-04-04 15:52:39Z hallvord $";

testmodule( "DOM DocumentFragment", cvs );

try {

testcase( "Support for creating document fragments" );

  var new_frag = document.createDocumentFragment();

  tdef("New document fragment exists", new_frag);
  test("Document fragment class name", new_frag.toString(), "[object DocumentFragment]");
  test("Document fragment node type", new_frag.nodeType, Node.DOCUMENT_FRAGMENT_NODE);
  test("Document fragment nodeName", new_frag.nodeName, "#document-fragment");
  test("Document fragment nodeValue", new_frag.nodeValue, null);
  test("Document fragment attributes", new_frag.attributes, null);
  
  //Additional test code added in by Choon
  var body = document.getElementsByTagName("body")[0];
  var h1 = document.createElement("h1");
  var h2 = document.createElement("h2");
  var p = document.createElement("p");
  new_frag.appendChild(h1);
  new_frag.appendChild(h2);
  new_frag.appendChild(p);
  test("Document fragment length before append", new_frag.childNodes.length, 3);
  body.appendChild(new_frag);
  test("Document fragment length after append", new_frag.childNodes.length, 0);
  //End of test code added in by Choon
  
} catch (e) { exception( e ); }

testmodule_finished();

/* eof */
