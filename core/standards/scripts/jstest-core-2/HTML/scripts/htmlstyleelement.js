/* Tests for DOM 2 HTML 'HTMLStyleElement' object.
*/

var cvs = "$Id: htmlstyleelement.js 4838 2006-01-18 05:59:01Z hallvord $";

testmodule( "HTMLStyleElement", cvs );

try {
  var e1 = document.getElementById("myStyle");
  var e2 = document.getElementById("myStyle2");

  testcase( "object" );

  test("class",e1,"[object HTMLStyleElement]");

  testcase( "properties exists" );
  
  var e = e1;
  tdef("disabled",e.disabled);
  tdef("media",e.media);
  tdef("type",e.type);
 

  testcase( "property values" );
  
  test("disabled",e.disabled,false);
  test("media",e.media,"screen"); // default value
  test("type",e.type,"");
  

  testcase( "properties exists, attributes in use" );
  
  var e = e2;
  tdef("disabled",e.disabled);
  tdef("media",e.media);
  tdef("type",e.type);

  testcase( "property values, from attributes" );
  
  test("disabled",e.disabled,false);
  test("media",e.media,"print");
  test("type",e.type,"text/css");
  

  if(is_phase(2)) // These properies ar currently readonly
  {

  testcase( "properties are writable" );
  
  e.disabled = true
  test("disabled",e.disabled,true);
  e.media = "screen"
  test("media",e.media,"screen");
  e.type = "text/kgb"
  test("type",e.type,"text/kgb");
  }
} catch (e) { exception(e); }

testmodule_finished();

/* eof */
