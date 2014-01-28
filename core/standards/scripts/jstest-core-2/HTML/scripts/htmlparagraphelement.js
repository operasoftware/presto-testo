/* Tests for DOM 2 Core 'DOMImplementation' object.
*/

var cvs = "$Id: htmlparagraphelement.js 4838 2006-01-18 05:59:01Z hallvord $";


testmodule( "HTMLParagraphElement", cvs );

try {

  var p1 = document.getElementById("myPara1");
  var p2 = document.getElementById("myPara2");
  var p  = p1;
   
  var defalign = "";
  if(p1.dir == "ltr")
    defalign = "left";
  if(p1.dir == "rtl")
    defalign = "right";

  testcase( "object" );

  test("class",p,"[object HTMLParagraphElement]");

  testcase( "properties exists" );
  
  tdef("align",p.align);
   
  testcase( "default property values" );
  
  test("align",p.align,defalign);
 

  p = p2;
  testcase( "property values from attributes" );
  
  test("align",p.align,"right");
 

  testcase( "properties are writable" );
  
  p.align = "left";
  test("align",p.align,"left");

} catch (e) { exception(e); }

testmodule_finished();

/* eof */
