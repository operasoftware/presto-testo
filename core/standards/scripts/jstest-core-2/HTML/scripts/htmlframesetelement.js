/* Tests for DOM 2 HTML 'HTMLFrameElement' object.
*/

var cvs = "$Id: htmlframesetelement.js 4838 2006-01-18 05:59:01Z hallvord $";

testmodule( "HTMLFrameSetElement", cvs );

try {

  var p1 = parent.document.getElementById("myFrameSet");
  var p2 = parent.document.getElementById("myFrameSet2");
  var p = p1; 

  testcase( "object" );

  test("class",p,"[object HTMLFrameSetElement]");

  testcase( "properties exists" );

  tdef("cols",p.cols);
  tdef("rows",p.rows);
  
  var p = p1; 
  testcase( "default property values" );
  
  test_spaceagnostic("cols",p.cols,"");
  test_spaceagnostic("rows",p.rows,"");

  p = p2;
  testcase( "property values from attributes" );
  
  test_spaceagnostic("cols",p.cols,"100,10");
  test_spaceagnostic("rows",p.rows,"100,100");
 
  p = p1;
  testcase( "properties are writable" );
  
  if(is_phase(2)) // All attributes currently readonly
  {
  }

} catch (e) { exception(e); }

testmodule_finished();

/* eof */
