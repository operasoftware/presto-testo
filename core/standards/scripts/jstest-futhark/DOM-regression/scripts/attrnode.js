/* Regression tests for Opera's handling of DOM 2 Core attribute nodes
 *
 * 2002-03-25 / lth
 */

var cvs = "$Id: attrnode.js 22616 2008-01-25 16:13:20Z hallvord $";

testmodule( "Attribute nodes", cvs );

var x, y;
var bodyelt = document.getElementsByTagName("body")[0];
var linkfoo;

try {

   x = document.getElementById("link-foo").getAttributeNode("id");
   x2 = document.getElementById("link-foo").getAttributeNode("id");
   y = document.getElementById("link-foo").getAttributeNode("href");
   z = document.getElementById("link-foo").getAttributeNode("name");
   w = document.getElementById("link-foo").getAttributeNode("title");
   v = document.getElementById("link-foo").getAttributeNode("shape");

   //New tests added in by Choon
   testcase( "Accessing the attributes array");
   linkfoo = document.getElementById("link-foo").attributes;

   tdef("Attributes array", linkfoo);
   tdef("Attribute ID", x);
   tdef("Attribute HREF", y);
   test("Attribute name", z, null);
   test("Attribute title", w, null);
   tdef("Attribute shape", v);

   for(var i=0; i<linkfoo.length; ++i)
   {
      tdef("Attributes name property #"+i, linkfoo[i].name);
      tdef("Attributes value property #"+i, linkfoo[i].value);
      tdef("Attributes ownerElement property #"+i, linkfoo[i].ownerElement);
      tdef("Attributes specified property #"+i, linkfoo[i].specified);
   }

   test("Testing id attribute name 0", linkfoo[0].name, "id");
   test("Testing id attribute name 1", linkfoo[1].name, "href");
   test("Testing id attribute value 0", linkfoo[0].value, "link-foo");
   test("Testing id attribute value 1", linkfoo[1].value, "http://www.opera.com/");

   var linkfoo1 = linkfoo[0];
   var linkfoo2 = linkfoo[0];
   test("Getting the same attribute value twice returns the same value", linkfoo1 == linkfoo2, true);

   //End new tests

   testcase( "Node identity" );

   test( 'getting node twice gets same node', x == x2, true );

   testcase( "Reading properties" );

   test( 'name is correct', x.name, "id" );
   test( 'value is correct', x.value, "link-foo" );
   test( 'ownerelement is correct', x.ownerElement, document.getElementById("link-foo") );
   test( 'specified#1', x.specified, true );
   if(v){ // support for default attributes dropped
	test( 'specified#2', v.specified, false );
	test( 'default name is correct', v.name, "shape" );
	test( 'default value is correct', v.value, "rect" );
}
   testcase( "Setting the attributes of the attribute node" );

   x.value = "flabbergasted";
   testnot( 'set value#1', x.value, "link-foo" );
   test( 'set value#2', x.value, "flabbergasted" );
   try {
      test( 'search for new ID', document.getElementById("flabbergasted").getAttributeNode("id"), x );

   } catch (e) { exception(e); }

   testcase( "Failing to set the attributes of the attribute node" );

   expect_DOM_exception( 'set ownerElement#1', DOMException.NO_MODIFICATION_ALLOWED_ERR,
                         function(){x.ownerElement=bodyelt;} );
   expect_DOM_exception( 'set name#1', DOMException.NO_MODIFICATION_ALLOWED_ERR,
                         function(){x.name="foo";} );
   expect_DOM_exception( 'set specified#1', DOMException.NO_MODIFICATION_ALLOWED_ERR,
                         function(){x.specified=true;} );

} catch (e) { exception( e ); }

testmodule_finished();

/* eof */

