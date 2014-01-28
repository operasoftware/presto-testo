/* Tests for DOM 2 Core 'htmlmetaelement' object.
*/

var cvs = "$Id: htmlmetaelement.js 4838 2006-01-18 05:59:01Z hallvord $";


testmodule( "HTMLMetaElement", cvs );

try {

  var e1 = document.getElementById("myMeta");
  var e2 = document.getElementById("myMeta2");
  var e3 = document.getElementById("myMeta3");

  testcase( "object" );

  test("class",e1,"[object HTMLMetaElement]");
      
  testcase( "properties exists" );
  
  var e = e1;
  tdef("content",e.content);
  tdef("httpEquiv",e.httpEquiv);
  tdef("name",e.name);
  if(is_phase(2)) tdef("scheme",e.scheme);
 

  testcase( "property values" );
  
  test("content",e.content,"");
  test_insensitive("httpEquiv",e.httpEquiv,"");
  test("name",e.name,"");
  if(is_phase(2)) test("scheme",e.scheme,"");
  

  testcase( "property values, from attributes" );
  
  e = e2;
  test("content",e.content,"0-8230-2355-9");
  test_insensitive("httpEquiv",e3.httpEquiv,"Expires");
  test("name",e.name,"identifier");
  if(is_phase(2)) test("scheme",e.scheme,"ISBN");
  

  if(is_phase(2)) // These properies ar currently readonly
  {

  testcase( "properties are writable" );
  
  e.content = "test page"
  test("content",e.content,"test page");
  e.httpEquiv = "Expires"
  test_insensitive("httpEquiv",e.httpEquiv,"expires");
  e.name = "description"
  test("name",e.name,"description");
  e.scheme = "DC"
  test("scheme",e.scheme,"DC");
  }
  
} catch (e) { exception(e); }

testmodule_finished();

/* eof */
