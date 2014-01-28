/* Tests for DOM 2 HTML 'HTMLUListElement' interface.
*/

var cvs = "$Id: htmlulistelement.js 10655 2006-12-18 15:47:57Z hallvord $";


testmodule( "HTMLUListElement", cvs );

try {

  var e1 = document.getElementById("myList");
  var e2 = document.getElementById("myList2");
   
  testcase( "object" );

  test("class",e1,"[object HTMLUListElement]");

  testcase( "properties exists" );
  
  var e = e1;
  if (is_phase(2)) tdef("compact",e.compact);
  tdef("type",e.type);
 
  testcase( "default property values" );
  
  if (is_phase(2)) test("compact",e.compact,false);
  test("type",e.type,"");
  

  testcase( "properties exists, attributes in use" );
  
  var e = e2;
  if (is_phase(2)) tdef("compact",e.compact);
  tdef("type",e.type);

  
  testcase( "property values, from attributes" );
  
  if (is_phase(2)) test("compact",e.compact,true);
  test("type",e.type,"disc");
  

  testcase( "properties are writable" );
  
  e.compact = false
  test("compact",e.compact,false);

  if(is_phase(2)) // These properies ar currently readonly
  {
    e.type = "circle"
    test("type",e.type,"circle");
  }
  
} catch (e) { exception(e); }

testmodule_finished();

/* eof */
