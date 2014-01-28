/* Tests for DOM 2 Core 'DOMImplementation' object.
*/

var cvs = "$Id: htmlformelement.js 116001 2012-05-25 13:27:00Z jorritv $";


testmodule( "HTMLFormElement", cvs );

try {

  var f = document.getElementById("myForm");

  testcase( "object" );

  test("class",f,"[object HTMLFormElement]");

  testcase( "attribute object class" );

  test("elements",f.elements,"[object HTMLCollection]");

  testcase( "properties exists" );

  tdef("acceptCharset",f.acceptCharset);
  tdef("action",f.action);
  tdef("elements",f.elements);
  tdef("enctype",f.enctype);
  tdef("length",f.length);
  tdef("method",f.method);
  tdef("name",f.name);
  tdef("target",f.target);

/*
  testcase( "property types" );

  testinstance("acceptCharset" ,f.aLink, HTMLBodyElement); // ???
*/

  testcase( "read property values" );

  test("acceptCharset",f.acceptCharset,"");
  test("action",f.action,"");
  test("enctype",f.enctype,"application/x-www-form-urlencoded");
  test("length",f.length,7);
  test("method",f.method,"get");
  test("name",f.name,"");
  test("target",f.target,"");
  test("elements",f.elements.length,7);


  f = document.getElementById("myForm2");
  testcase( "properties exists, attributes in use" );

  tdef("acceptCharset",f.acceptCharset);
  tdef("action",f.action);
  tdef("elements",f.elements);
  tdef("enctype",f.enctype);
  tdef("length",f.length);
  tdef("method",f.method);
  tdef("name",f.name);
  tdef("target",f.target);


  testcase( "read property values from attributes" );

  test("acceptCharset",f.acceptCharset,"utf-8");
  test("action",f.action,get_protocol_and_host() + get_modulepath("HTML","gogo"));
  test_insensitive("enctype",f.enctype,"multipart/form-data");
  test("length",f.length,1);
  test_insensitive("method",f.method,"post");
  test("name",f.name,"f2");
  test("target",f.target,"");
  test("elements",f.elements.length,1);


  f = document.getElementById("myForm");
  testcase( "properties are writeable" );

  f.acceptCharset = "iso-8859-1";
  f.action  = "doIt";
  var enctype = "multipart/form-data"; f.enctype = enctype;
  f.method  = "post";
  f.name    = "f1";
  f.target  = "t1";

  test("acceptCharset",f.acceptCharset,"iso-8859-1");
  test("action",f.action,get_protocol_and_host() + get_modulepath("HTML","doIt"));
  test_insensitive("enctype",f.enctype,enctype);
  test_insensitive("method",f.method,"post");
  test("name",f.name,"f1");
  test("target",f.target,"t1");

  testcase( "properties are not writeable" );

  expect_readonly_exception( "length", function(){"use strict"; f.length = 3;})
  test("length",f.length,7);
  var el = f.elements;
  expect_readonly_exception( "elements", function(){"use strict"; f.elements = null;})
  test("elements",f.elements, el);
  test("elements[0]",f.elements[0], el[0]);
  expect_readonly_exception( "elements #2", function(){"use strict"; f.elements = "illegal change";})
  test("elements #2",f.elements, el);

  testcase( "methods" );

  /*
  var h1 = document.getElementById("h1")
  val = h1.value; h1.value = "changed";
  f.reset();
  test_expect_failure("reset() 1 hidden input",-1,h1.value, val);
  */

  h = document.getElementById("h2")
  val = h.value; h.value = "changed";
  chk = h.checked; h.checked = true;
  f.reset();
  test("reset() 2 input",h.checked, chk);

  h = document.getElementById("h3")
  val = h.value; h.value = "changed";
  f.reset();
  test("reset() 3 input",h.value, val);

  h = document.getElementById("h4")
  val = h.value; h.value = "changed";
  f.reset();
  test("reset() 4 textarea",h.value, val);

  h = document.getElementById("h5")
  val = h.value; h.value = "pilt";
  f.reset();
  test("reset() 5 select",h.value, val);


  // Needs server to test submit

} catch (e) { exception(e); }

testmodule_finished();

/* eof */
