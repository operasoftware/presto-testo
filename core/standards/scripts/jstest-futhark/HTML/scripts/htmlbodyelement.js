/* Tests for DOM 2 Core 'DOMImplementation' object.
*/

var cvs = "$Id: htmlbodyelement.js 42094 2009-02-26 13:48:54Z hallvord $";


testmodule( "HTMLBodyElement", cvs );

try {

  var b = document.getElementById("myBody");

  testcase( "object" );

  test("class",b,"[object HTMLBodyElement]");

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

  testcase( "property values" );

  test("aLink",b.aLink,"");
  test("background",b.background,"");
  test("bgColor",b.bgColor,"");
  test("link",b.link,"");
  test("text",b.text,"");
  test("vLink",b.vLink,"");


  testcase( "properties are writable" );

  b.aLink = "pink";
  test("aLink",b.aLink,"pink");
  b.background = "image2";
  test("background",b.background,get_protocol_and_host()+get_modulepath("HTML","image2"));  // We might want to reevaluate the expectation
  b.background = get_protocol_and_host()+get_modulepath("HTML","image3");
  test("background written",b.background,get_protocol_and_host()+get_modulepath("HTML","image3"));
  b.bgColor = "grey";
  test_insensitive("bgColor",b.bgColor,"grey");
  b.link = "pink";
  test_insensitive("link",b.link,"pink");
  b.text = "blue";
  test_insensitive("text",b.text,"blue");
  b.vLink = "green";
  test_insensitive("vLink",b.vLink,"green");
  b.vLink = "#800080";
  test("vLink written",b.vLink,"#800080");
  b.bgColor = "#800080";
  test("bgColor written 0",b.bgColor,"#800080");
  b.bgColor = "#737373";
  test("bgColor written 0.5",b.bgColor,"#737373");
  b.bgColor = "#555555";
  test("bgColor written 1",b.bgColor,"#555555");
  b.bgColor = "Purple";
  test_insensitive("bgColor written 2",b.bgColor,"Purple");
  b.bgColor = "Silver";
  test_insensitive("bgColor written 3",b.bgColor,"Silver");
  b.bgColor = "Aqua";
  test_insensitive("bgColor written 4",b.bgColor,"Aqua");


} catch (e) { exception(e); }

testmodule_finished();

/* eof */
