/* Tests for DOM 2 HTML 'HTMLOListElement' interface.
*/

var cvs = "$Id: htmlolistelement.js 4838 2006-01-18 05:59:01Z hallvord $";


testmodule( "HTMLOListElement", cvs );

try {

  var e1 = document.getElementById("myList");
  var e2 = document.getElementById("myList2");
   
  testcase( "object" );

  test("class",e1,"[object HTMLOListElement]");

  testcase( "properties exists" );
  
  var e = e1;
  tdef("compact",e.compact);
  tdef("start",e.start);
  tdef("type",e.type);
 
  testcase( "default property values" );
  
  test("compact",e.compact,false);
  test("start",e.start,1);
  test("type",e.type,"");
  

  testcase( "properties exists, attributes in use" );
  
  var e = e2;
  tdef("compact",e.compact);
  tdef("start",e.start);
  tdef("type",e.type);

  
  testcase( "property values, from attributes" );
  
  test("compact",e.compact,true);
  test("start",e.start,4);
  test("type",e.type,"disc");
  

  testcase( "properties are writable" );
  
  e.compact = false;
  test("compact",e.compact,false);

  if(is_phase(2)) // These properies ar currently readonly
  {
    e.start = 5;
    test("start",e.start,5);
    e.type = "circle";
    test("type",e.type,"circle");
  }
  
} catch (e) { exception(e); }

testmodule_finished();

/* eof */
