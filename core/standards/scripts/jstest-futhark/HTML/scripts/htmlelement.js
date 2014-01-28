/* Tests for DOM 2 Core 'DOMImplementation' object.
*/

var cvs = "$Id: htmlelement.js 10655 2006-12-18 15:47:57Z hallvord $";


testmodule( "HTMLElement", cvs );

try {

  var nl = document.getElementsByTagName("address");
  var e1 = nl[0]; 
  var e2 = nl[1]; 

  testcase( "object" );
  
  test("class",e1,"[object HTMLElement]");
   
  testcase( "properties exists, unset attributes" );
  
  tdef("id",e1.id);
  tdef("title",e1.title);
  tdef("className",e1.className);
  tdef("lang",e1.lang);
  tdef("dir",e1.dir);
  if(is_phase(2))
  {
  }

  testcase( "properties exists, set attributes" );

  tdef("id",e2.id);
  tdef("title",e2.title);
  tdef("lang",e2.lang);
  tdef("className",e2.className);
  tdef("dir",e2.dir);
  if(is_phase(2))
  {
  }
  
  testcase( "property values, unset attributes" );
  
  test("id",e1.id,"");
  test("title",e1.title,"");
  test("lang",e1.lang,"");
  test("className",e1.className,"");
  test("dir",e1.dir,"");
  if(is_phase(2))
  {
  }

  testcase( "property values, set attributes" );

  test("id",e2.id,"a2");
  test("title",e2.title,"t2");
  test("lang",e2.lang,"l2");
  test("className",e2.className,"c2");
  test("dir",e2.dir,"ltr");
  if(is_phase(2))
  {
  }
  
  
  testcase( "properties are writable" );

  e2.id = "a3";
  test("id",e2.id,"a3");
  e2.title = "t3";
  test("title",e2.title,"t3");
  e2.lang = "l3";
  test("lang",e2.lang,"l3");
  e2.className = "c3";
  test("className",e2.className,"c3");
  e2.dir = "rtl";
  test("dir",e2.dir,"rtl");
  if(is_phase(2))
  {
  }
  
  
} catch (e) { exception(e); }

testmodule_finished();

/* eof */
