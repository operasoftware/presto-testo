/* Tests for DOM 2 HTML 'HTMLFrameElement' object.
*/

var cvs = "$Id: htmlframesetelement_int.js 4838 2006-01-18 05:59:01Z hallvord $";

testmodule( "HTMLFrameSetElement - interactive test", cvs );

try {

  var p = parent.document.getElementById("myFrameSet");
  testcase( "properties exists" );

  tdef("cols",p.cols);
  tdef("rows",p.rows);
  
  testcase( "property values from attributes" );
  
  test_spaceagnostic("cols",p.cols,"1,1");
  test_spaceagnostic("rows",p.rows,"1,1");
 
  testcase( "properties are writable" );
  
  if(is_phase(2)) 
  {
	conf("reflow #1", "Do you see four frames?");
	p.cols="5,2";
	p.rows="2,5";
	conf_expect_failure("reflow #2", "Do you see any change?", 113393);
  }

} catch (e) { exception(e); }

testmodule_finished();

/* eof */