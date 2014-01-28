/* Tests for DOM 2 Core 'DOMImplementation' object.
*/

var cvs = "$Id: htmlhtmlelement2.js 10655 2006-12-18 15:47:57Z hallvord $";


testmodule( "HTMLHtmlElement", cvs );

try {

//  var el = document.getElementById("myHtml");
//  var el = document.root;
  var el = document.documentElement;
   
  testcase( "properties exists" );
  
  tdef("version",el.version);
 

  testcase( "property values" );
  
//  test_expect_failure("version",-1,el.version,"Mor Godhjertas glade versjon. JA");
  test("version",el.version,"Mor Godhjertas glade versjon. JA");
  
} catch (e) { exception(e); }

testmodule_finished();

/* eof */
