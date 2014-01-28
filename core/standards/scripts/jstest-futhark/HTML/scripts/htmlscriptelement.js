/* Tests for DOM 2 HTML 'HTMLScriptElement' object.
*/

var cvs = "$Id: htmlscriptelement.js 24160 2008-03-05 17:18:53Z hallvord $";

testmodule( "HTMLScriptElement", cvs );

var external1_timeout;

try {

  var p1 = document.getElementById("myScript");
  var p2 = document.getElementById("myScript2");
  var p = p1; 

  testcase( "object" );

  test("class",p,"[object HTMLScriptElement]");

  testcase( "properties exists" );

  if(is_phase(2))
  {
    tdef("text",p.text);
    tdef("htmlFor",p.htmlFor);
    tdef("event",p.event);
  }
  tdef("charset",p.charset);
  tdef("defer",p.defer);
  tdef("src",p.src);
  tdef("type",p.type);
  
  var p = p1; 
  testcase( "default property values" );
  
  if(is_phase(2))
  {
    test("text",p.text,"");
    test("htmlFor",p.htmlFor,"");
    test("event",p.event,"");
  }
  test("charset",p.charset,"");
  test("defer",p.defer,false);
  test("src",p.src,"");
  test("type",p.type,"");
  

  p = p2;
  testcase( "property values from attributes" );
  
  if(is_phase(2))
  {
    test("text",p.text,"var a = 1;");
    test("htmlFor",p.htmlFor,"?");
    test("event",p.event,"?");
  }
  test("charset",p.charset,"utf-8");
  test("defer",p.defer,true);
  test("src",p.src,"http://www.opera.no/script/");
  test("type",p.type,"text/javascript");
 
  p = p1;
  testcase( "properties are writable" );
  
  if(is_phase(2)) // All attributes currently readonly
  {
  }

  document.write("<script id='dynamic1'><" + "/script>");
  var dynamic1 = document.getElementById("dynamic1");

  dynamic1.text = "/* nothing */";

  test("text", dynamic1.text, "/* nothing */");

  testcase( "modifying .text" );

  var flag = 1;
  dynamic1.text = "flag = 2;";
  test("flag updated by script", flag, 2);

  dynamic1.text = "document.write('<div id=\"div1\"><" + "/div>')";
  ttrue("DIV #1 written by script", document.getElementById("div1") != null &&
                                    document.getElementById("div1") != undefined);

  document.write("<script id='dynamic2'><" + "/script>");
  var dynamic1 = document.getElementById("dynamic2");

  testcase( "modifiying .src" );

  test("src initial", dynamic2.src, "");
  dynamic2.src = "scripts/htmlscriptelement_external1.js";
  test("src changed", dynamic2.src.substring(dynamic2.src.lastIndexOf("/") + 1), "htmlscriptelement_external1.js");

// code in htmlscriptelement_external1.js will run when this thread is done.
// check for "flag updated by script" moved to end of HTML page
  document.write("<script id='dynamic3'><" + "/script>");
  var dynamic3=document.getElementById('dynamic3');
  dynamic3.src = "scripts/htmlscriptelement_external2.js";
  test("src changed", dynamic3.src.substring(dynamic3.src.lastIndexOf("/") + 1), "htmlscriptelement_external2.js");
// check for "div written by script" also moved to end of test page 

} catch (e) { exception(e); }

/* eof */
