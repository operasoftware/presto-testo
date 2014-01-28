/* Tests for DOM 2 HTML 'HTMLFrameElement' object.
*/

var cvs = "$Id: htmlframesetelement.js 111129 2012-02-20 21:41:50Z hallvord $";

testmodule( "HTMLFrameSetElement", cvs );

try {
  expect(7);
  var p1 = parent.document.getElementById("myFrameSet");
  var p2 = parent.document.getElementById("myFrameSet2");
  var p = p1; 

  testcase( "object" );

  test("frameset class",p,"[object HTMLFrameSetElement]");

  testcase( "properties exists" );

  tdef("cols 1",p.cols);
  tdef("rows 1",p.rows);
  
  var p = p1; 
  testcase( "default property values" );
  
  test_spaceagnostic("cols 2",p.cols,"");
  test_spaceagnostic("rows 2",p.rows,"");

  p = p2;
  testcase( "property values from attributes" );
  
  test_spaceagnostic("cols 3",p.cols,"100,10");
  test_spaceagnostic("rows 3",p.rows,"100,100");
 
  p = p1;
  testcase( "properties are writable" );
  
} catch (e) { exception(e); }

testmodule_finished();

/* eof */
