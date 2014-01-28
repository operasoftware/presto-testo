/* Tests for DOM 2 HTML 'HTMLMapElement' object.
*/

var cvs = "$Id: htmlmapelement.js 4838 2006-01-18 05:59:01Z hallvord $";

function isCollection(c)
{
  return isDefined(c) && isDefined(c.length) && isDefined(c.item) && isDefined(c.namedItem);
}


testmodule( "HTMLMapElement", cvs );

try {

  var o1 = document.getElementById("myMap");
  var o2 = document.getElementById("myMap2");
  var o = o1; 

  testcase( "object" );

  test("class",o,"[object HTMLMapElement]");
  
  testcase( "attribute object class" );

  test("areas",o.areas,"[object HTMLCollection]");

  testcase( "properties exists" );

  tdef("areas",o.areas);
  tdef("name",o.name);
  
  var o = o1; 
  testcase( "default property values" );
  
  testOut(isCollection(o.areas), "areas is a collection");
  if(isCollection(o.areas)) test("areas",o.areas.length,0);
  test("name",o.name,"");
  

  o = o2;
  testcase( "property values from attributes" );
  
  testOut(isCollection(o.areas), "areas is a collection");
  if(isCollection(o.areas)) 
  {
    test("areas",o.areas.length,2);
    test("areas",o.areas[0].href,"http://www.opera.com/");
    test("areas",o.areas[0].accessKey,"a");
  }
  test("name",o.name,"map");
 
  o = o1;
  testcase( "properties are writable" );
  
  if(is_phase(2)) // All attributes currently readonly
  {
    o.name = "firstMap";
    test("name property", o.name, "firstMap");
    test("name attribute", o.getAttribute("name"), "firstMap");
  }
  
  testcase( "properties are not writeable" );

  var ar = o.areas;
  expect_DOM_exception( "areas", DOMException.NO_MODIFICATION_ALLOWED_ERR, function(){o.areas = document.images;})
  test("areas",o.areas,ar);


} catch (e) { exception(e); }

testmodule_finished();

/* eof */
