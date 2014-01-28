/* Tests for DOM 2 Core 'DOMImplementation' object.
*/

var cvs = "$Id: htmlpreelement.js 4838 2006-01-18 05:59:01Z hallvord $";


testmodule( "HTMLPreElement", cvs );

try {

  var p1 = document.getElementById("myPre1");
  var p2 = document.getElementById("myPre2");
  var p  = p1;
   
  var defwidth = 0;
 	 
  testcase( "object" );

  test("class",p,"[object HTMLPreElement]");
  
  testcase( "properties exists" );
  
  tdef("width",p.width);
 
  testcase( "default property values" );
  
  test("width",p.width,defwidth);
 

  p = p2;
  testcase( "property values from attributes" );
  
  test("width",p.width,50);
 

  testcase( "properties are writable" );
  
  p.width = 60;
  test("width",p.width,60);

} catch (e) { exception(e); }

testmodule_finished();

/* eof */
