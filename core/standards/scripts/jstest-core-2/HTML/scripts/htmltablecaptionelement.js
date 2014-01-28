/* Tests for DOM 2 HTML 'HTMLTableCaptionElement' object.
*/


var cvs = "$Id: htmltablecaptionelement.js 4838 2006-01-18 05:59:01Z hallvord $";


testmodule( "HTMLTableCaptionElement", cvs );

try {
  var tab1  = document.getElementById("myCaption");
  var tab2  = document.getElementById("myCaption2");
  
  testcase( "object" );

  test("class",tab1,"[object HTMLTableCaptionElement]");
    
  testcase( "properties exists" );
  var tab = tab1;
  
  tdef("align",tab.align);
  
  testcase( "read property values" );
  tab = tab1;
  
  test("align",tab.align,"");
  

  testcase( "properties exists, attributes in use" );
  var tab = tab2;
  
  tdef("align",tab.align);

  testcase( "read property values from attributes" );
  tab = tab2;
  
  test("align",tab.align,"left");

  if(is_phase(2))
  {
    testcase( "properties are writeable" );
    tab = tab2;
  
    tab.align="center";
    test("align",tab.align,"center");
  }

} catch (e) { exception(e); }


testmodule_finished();

/* eof */
