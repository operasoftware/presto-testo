/* Regression tests for Opera's handling of DOM 2 Core documents
 *
 * 2002-04-03 / rune
 */

var cvs = "$Id: document.js 22424 2008-01-18 14:04:59Z hallvord $";

testmodule("Documents", cvs);

try {

   testcase("implementation");

   tdef("document.implementation", document.implementation);
   expect_DOM_exception('Check read-only', DOMException.NO_MODIFICATION_ALLOWED_ERR,
                        function(){ document.implementation="foo"; });

   testcase("documentElement");

   //Additional test added in by Choon 
   tdef("documentElement", document.documentElement);  
   //End additional test

   var x = document.documentElement;
   var y = document.firstChild;

   test('Check if documentElement has tag-name HTML', x.tagName, "HTML");
   test('Check if documentElement is the root node', x, y);
   expect_DOM_exception('Check read-only', DOMException.NO_MODIFICATION_ALLOWED_ERR,
                        function(){ document.documentElement="foo"; });

   testcase("Create elements");

   //Additional test cases added in by Choon
   tdef("createElement", document.createElement);
   var p = document.createElement("p");
   test("Node type", p.nodeType, Node.ELEMENT_NODE);
   //End additional test cases
  
   var new_elm = document.createElement('DiV');

   test('Check if new DIV element has tagName DIV', new_elm.tagName, "DIV");
   test('Check if new DIV element has correct class name', new_elm.toString(), "[object HTMLDivElement]");
   test('Check that DIV element has correct node type', new_elm.nodeType, Node.ELEMENT_NODE);
   expect_DOM_exception('Create element with invalid character in name', DOMException.INVALID_CHARACTER_ERR,
                        function(){document.createElement('<>');});

   testcase("Create DocumentFragment");

   var frag = document.createDocumentFragment();

   testnot('Check if document fragment was created', frag, null);
   test('Check if document fragment has correct class name', frag.toString(), "[object DocumentFragment]");
   test('Check that document fragment has correct node type', frag.nodeType, Node.DOCUMENT_FRAGMENT_NODE);

   testcase("Create Text node");

   //Additional test added in by Choon
   var text = document.createTextNode("Hva heter du?");
   test("Check correct data:", text.data, "Hva heter du?");
   test("Node type", text.nodeType, Node.TEXT_NODE);
   //End additional test added in by Choon
    
   var txtnode = document.createTextNode('Dillemikk');

   testnot('Check if Text node was created', txtnode, null);
   test('Check if Text node has correct data', txtnode.data, 'Dillemikk');

   testcase("getElementsByTagName()");

   divs = document.getElementsByTagName('div');
   divcount = divs.length;
   htmls = document.getElementsByTagName('html');
   htmlcount = htmls.length;

   test('Check that getElementsByTagName returns a NodeList', divs.toString(), '[object NodeList]');
   test('Check number of DIV elements', divcount, 3);
   test('Check number of HTML elements', htmlcount, 1);

   testcase("getElementById()");

   var elm1 = document.getElementById('my_div');
   var elm2 = document.getElementById('notfound');

   test("getElementById('my_div') #1;", elm1.nodeType, Node.ELEMENT_NODE);
   test("getElementById('my_div') #2;", elm1.attributes.getNamedItem('id').value, 'my_div');
   test("getElementById('notfound');", elm2, null);

   testcase("Create Attribute node");

   var attr_node = document.createAttribute('width');

   testnot('Check if attribute node was created', frag, null);
   test('Check if document fragment has correct class name', attr_node.toString(), "[object Attr]");
   test('Check that attribute node has correct node type', attr_node.nodeType, Node.ATTRIBUTE_NODE);
   test('Check that the name is correct', attr_node.name, 'width');
   test('Check that the value is correct', attr_node.value, '');
   test('Check that the ownerElement is correct', attr_node.ownerElement, null);

} catch (e) { exception( e ); }

testmodule_finished();

/* eof */

