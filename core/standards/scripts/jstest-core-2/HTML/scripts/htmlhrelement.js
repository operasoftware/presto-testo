/* Tests for DOM 2 Core 'HTMLHRElement' interface.
*/

var cvs = "$Id: htmlhrelement.js 4838 2006-01-18 05:59:01Z hallvord $";


testmodule( "HTMLHRElement", cvs );

try {

  var e1 = document.getElementById("myHR");
  var e2 = document.getElementById("myHR2");
  var p  = e1;
   
  testcase( "object" );

  test("class",p,"[object HTMLHRElement]");
 
  testcase( "properties exists" );
  
  tdef("align",p.align);
  tdef("noShade",p.noShade);
  tdef("size",p.size);
  tdef("width",p.width);
 
  testcase( "default property values" );
  
  test("align",p.align,"");
  test("noShade",p.noShade,false);
  test("size",p.size,"");
  test("width",p.width,"");
 

  p = e2;
  testcase( "property values from attributes" );
  
  test("align",p.align,"right");
  test("noShade",p.noShade,true);
  test("size",p.size,"2");
  test("width",p.width,"200");
 

  testcase( "properties are writable" );
  
  p.align = "left";
  test("align",p.align,"left");
  p.noShade = false;
  test("noShade",p.noShade,false);
  p.noShade = true;
  test("noShade",p.noShade,true);
  p.size = "3";
  test("size",p.size,"3");
  p.width = "300";
  test("width",p.width,"300");

} catch (e) { exception(e); }

testmodule_finished();

/* eof */
