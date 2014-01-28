/* Tests for DOM 2 Core 'HTMLFontElement' interface.
*/

var cvs = "$Id: htmlfontelement.js 10655 2006-12-18 15:47:57Z hallvord $";


testmodule( "HTMLFontElement", cvs );

try {

  var e1 = document.getElementById("myF1");
  var e2 = document.getElementById("myF2");
  var p  = e1;
   
  testcase( "object" );

  test("class",p,"[object HTMLFontElement]");

  testcase( "properties exists" );
  
  tdef("color",p.color);
  tdef("face",p.face);
  tdef("size",p.size);
 
  testcase( "default property values" );
  
  test("color",p.color,"");
  test("face",p.face,"");
  test("size",p.size,"");
 

  p = e2;
  testcase( "property values from attributes" );
  
  test("color",p.color,"purple");
  test("face",p.face,"garamond");
  test("size",p.size,"5");
 

  testcase( "properties are writable" );
  
  p.color = "blue";
  test("align",p.color,"blue");
  p.face = "geneva";
  test("face",p.face,"geneva");
  p.size = "2";
  test("size",p.size,"2");

} catch (e) { exception(e); }

testmodule_finished();

/* eof */
