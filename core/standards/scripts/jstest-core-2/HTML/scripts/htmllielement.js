/* Tests for DOM 2 HTML 'HTMLLIElement' interface.
*/

var cvs = "$Id: htmllielement.js 4838 2006-01-18 05:59:01Z hallvord $";


testmodule( "HTMLLIElement", cvs );

try {

  var e1 = document.getElementById("myLi");
  var e2 = document.getElementById("myLi2");
   
  testcase( "object" );

  test("class",e1,"[object HTMLLIElement]");

  testcase( "properties exists" );
  
  var e = e1;
  tdef("type",e.type);
  tdef("value",e.value);
 
  testcase( "default property values" );
  
  test("type",e.type,"");
  test("value",e.value,0);
  

  testcase( "properties exists, attributes in use" );
  
  var e = e2;
  tdef("type",e.type);
  tdef("value",e.value);

  
  testcase( "property values, from attributes" );
  
  test("type",e.type,"disc");
  test("value",e.value,5);
  

  if(is_phase(2)) // These properies ar currently readonly
  {

  testcase( "properties are writable" );
  
  e.type = "circle";
  test("type",e.type,"circle");
  e.value = 7;
  test("value",e.value,7);
  }
  
} catch (e) { exception(e); }

testmodule_finished();

/* eof */
