/* Tests for DOM 2 Core 'DOMImplementation' object.
*/

var cvs = "$Id: htmlheadelement.js 10655 2006-12-18 15:47:57Z hallvord $";


testmodule( "HTMLHeadElement", cvs );

try {

  var el = document.getElementById("myHead");

  testcase ( "object" );

  test("class",el,"[object HTMLHeadElement]");
   
  if(is_phase(2))
  {
     testcase( "properties exists" );
  
     tdef("profile",el.profile);
 

    testcase( "property values" );
  
    test("profile",el.profile,"");
  

    testcase( "properties are writable" );
  
    el.profile = "http://www.acme.com/profiles/core";
    test("profile",el.profile,"http://www.acme.com/profiles/core");
  }

} catch (e) { exception(e); }

testmodule_finished();

/* eof */
