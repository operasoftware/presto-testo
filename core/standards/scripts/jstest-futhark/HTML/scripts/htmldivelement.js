/* Tests for DOM 2 Core 'DOMImplementation' object.
*/

var cvs = "$Id: htmldivelement.js 10655 2006-12-18 15:47:57Z hallvord $";


testmodule( "HTMLDivElement", cvs );

try {

  var p1 = document.getElementById("myDiv1");
  var p2 = document.getElementById("myDiv2");
  var p  = p1;
   
  testcase( "object" );

  test("class",p,"[object HTMLDivElement]");

  var defalign = "";
  if(p1.dir == "ltr")
    defalign = "left";
  if(p1.dir == "rtl")
    defalign = "right";
	 
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
