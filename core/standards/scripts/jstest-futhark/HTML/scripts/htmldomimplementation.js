/* Tests for DOM 2 Core 'DOMImplementation' object.
*/

var cvs = "$Id: htmldomimplementation.js 10655 2006-12-18 15:47:57Z hallvord $";

testmodule( "HTMLDOMImplementation", cvs );

try {

  testcase( "Function exists" );
  tdef( "implementation", document.implementation );
  tdef( "createHTMLDocument", document.implementation.createHTMLDocument );
  tdef( "hasFeature", document.implementation.hasFeature );

  testcase( "Call function" );
  
  var doc = document.implementation.createHTMLDocument("Test doc");
  test("createHTMLDocument",doc.title,"Test doc");
 
 
  test("window",window.document,document);
  
  //window.document = doc;

} catch (e) { exception(e); }

testmodule_finished();

/* eof */
