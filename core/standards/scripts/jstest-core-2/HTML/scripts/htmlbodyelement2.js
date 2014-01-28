/* Tests for DOM 2 Core 'DOMImplementation' object.
*/

var cvs = "$Id: htmlbodyelement2.js 4838 2006-01-18 05:59:01Z hallvord $";


testmodule( "HTMLBodyElement w/attributes", cvs );

try {

  var b = document.getElementById("myBody");
   
  testcase( "properties exists" );
  
  tdef("aLink",b.aLink);
  tdef("background",b.background);
  tdef("bgColor",b.bgColor);
  tdef("link",b.link);
  tdef("text",b.text);
  tdef("vLink",b.vLink);

/*
  testcase( "property types" );
  
  testinstance("aLink" ,b.aLink, HTMLBodyElement); // ???
*/
  
  testcase( "property values from attributes" );
  
  test("aLink",b.aLink,"red");
  test("background",b.background,get_protocol_and_host()+get_modulepath("HTML","image"));  // We might want to reevaluate the expectation
  test("bgColor",b.bgColor,"grey");
  test("link",b.link,"green");
  test("text",b.text,"blue");
  test("vLink",b.vLink,"cyan");

  testcase( "properties are writable" );
  
  b.aLink = "pink";
  test("aLink",b.aLink,"pink");
  b.background = "image2";
  test("background",b.background,get_protocol_and_host()+get_modulepath("HTML","image2")); // We might want to reevaluate the expectation
  b.background = get_protocol_and_host()+get_modulepath("HTML","image3");
  test("background",b.background,get_protocol_and_host()+get_modulepath("HTML","image3"));
  b.bgColor = "white";
  test("bgColor",b.bgColor,"white");
  b.bgColor = "#020002";
  test("bgColor",b.bgColor,"#020002");
  b.link = "pink";
  test("link",b.link,"pink");
  b.text = "red";
  test("text",b.text,"red");
  b.vLink = "pink";
  test("vLink",b.vLink,"pink");
  b.vLink = "#ff0fff";
  test("vLink",b.vLink,"#ff0fff");

} catch (e) { exception(e); }

testmodule_finished();

/* eof */
