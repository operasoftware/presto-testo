/* Tests for DOM 2 Core 'DOMImplementation' object.
*/

var cvs = "$Id: htmlhtmlelement.js 10655 2006-12-18 15:47:57Z hallvord $";


testmodule( "HTMLHtmlElement", cvs );

try {

//  var el = document.getElementById("myHtml");
//  var el = document.root;
  var el = document.documentElement;

  testcase( "object" );
  
  test("class",el,"[object HTMLHtmlElement]");
   
  testcase( "properties exists" );
  
  tdef("version",el.version);
 

  testcase( "property values" );
  
  test("version",el.version,"");
  

  testcase( "properties are writable" );
  
  el.version = "pink panter version";
  test("version",el.version,"pink panter version");
  

} catch (e) { exception(e); }

testmodule_finished();

/* eof */
