/* Tests for DOM 2 HTML 'HTMLDListElement' interface.
*/

var cvs = "$Id: htmldlistelement.js 10655 2006-12-18 15:47:57Z hallvord $";


testmodule( "HTMLDListElement", cvs );

try {

  var e1 = document.getElementById("myList");
  var e2 = document.getElementById("myList2");
   
  testcase( "object" );

  test("class",e1,"[object HTMLDListElement]");

  testcase( "properties exists" );
  
  var e = e1;
  tdef("compact",e.compact);
 
  testcase( "default property values" );
  
  test("compact",e.compact,false);
  

  testcase( "properties exists, attributes in use" );
  
  var e = e2;
  tdef("compact",e.compact);

  
  testcase( "property values, from attributes" );
  
  test("compact",e.compact,true);
  

  testcase( "properties are writable" );
  
  e.compact = false;
  test("compact",e.compact,false);
  if(is_phase(2)) // These properies ar currently readonly
  {
  }
  
} catch (e) { exception(e); }

testmodule_finished();

/* eof */
