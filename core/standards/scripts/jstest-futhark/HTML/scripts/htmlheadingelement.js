/* Tests for DOM 2 Core 'HTMLHeadingElement' interface.
*/

var cvs = "$Id: htmlheadingelement.js 10655 2006-12-18 15:47:57Z hallvord $";


testmodule( "HTMLHeadingElement", cvs );

try {

  var e1 = document.getElementById("myHead1");
  var e2 = document.getElementById("myHead2");
  var p  = e1;
   
  var defalign = "";
  if(p.dir == "ltr")
    defalign = "left";
  if(p.dir == "rtl")
    defalign = "right";
	 
  testcase( "object" );

  test("class",p,"[object HTMLHeadingElement]");
  
  testcase( "properties exists" );
  
  tdef("align",p.align);
 
  testcase( "default property values" );
  
  test("align",p.align,defalign);
 

  p = e2;
  testcase( "property values from attributes" );
  
  test("align",p.align,"right");
 

  testcase( "properties are writable" );
  
  p.align = "left";
  test("align",p.align,"left");

} catch (e) { exception(e); }

testmodule_finished();

/* eof */
