/* Tests for DOM 2 Core 'DOMImplementation' object.
*/


var cvs = "$Id: htmloptionelement.js 108182 2012-01-13 12:09:02Z sigbjornf $";


testmodule( "HTMLOptionElement", cvs );

try {
  var sel   = document.getElementById("mySelect");
  var form  = document.getElementById("myForm");
  var form2 = document.getElementById("myForm2");
  var opt   = document.getElementById("myOption");
  opt2 = document.getElementById("myOption2");

  testcase( "object" );

  test("class",opt,"[object HTMLOptionElement]");

  testcase( "attribute object class" );

  test("form",opt.form,"[object HTMLFormElement]");

  testcase( "properties exists" );

  tdef("form",opt.form);
  tdef("defaultSelected",opt.defaultSelected);
  tdef("text",opt.text);
  tdef("index",opt.index);
  tdef("disabled",opt.disabled);
  tdef("label",opt.label);
  tdef("selected",opt.selected);
  tdef("value",opt.value);

  testcase( "read property values" );

  test("form",opt.form,form);
  test("defaultSelected",opt.defaultSelected,false);
  test("text",opt.text,"");
  test("index",opt.index,0);
  test("disabled",opt.disabled,false);
  test("label",opt.label,"");
  test("selected",opt.selected,true);
  test("value",opt.value,"");


  testcase( "properties exists, attributes in use" );

  tdef("form",opt2.form);
  tdef("defaultSelected",opt2.defaultSelected);
  tdef("text",opt2.text);
  tdef("index",opt2.index);
  tdef("disabled",opt2.disabled);
  tdef("label",opt2.label);
  tdef("selected",opt2.selected);
  tdef("value",opt2.value);

  testcase( "read property values from attributes" );

  test("form",opt2.form,form);
  test("defaultSelected",opt2.defaultSelected,true);
  test("text",opt2.text,"der");
  test("index",opt2.index,1);
  test("disabled",opt2.disabled,true);
  test("label",opt2.label,"l");
  test("selected",opt2.selected,false); /* <option selected disabled> - make up your mind, hey */
  test("value",opt2.value,"her");

  testcase( "properties are writeable" );

  opt.defaultSelected = true;
  test("defaultSelected",opt.defaultSelected,true);
  opt.disabled = true;
  test("disabled",opt.disabled,true);
  opt.label = "m";
  test("label",opt.label,"m");
  opt.selected = true;
  test("selected",opt.selected,true);
  opt.value = "audhumbla";
  test("value",opt.value,"audhumbla");

testcase( "properties are not writeable" );

expect_readonly_exception( "form", function(){"use strict"; opt.form = null;} )
test("form",opt.form,form);
/* text: DOM2 says modification isn't allowed, but people probably assume it
is okay to change it. */
//var t = opt2.text;
//expect_readonly_exception( "text", function(){"use strict"; opt2.text = "avvik";} )
//test("text",opt2.text,t);
var i = opt.index;
expect_readonly_exception( "index", function(){"use strict"; opt.index = 3;} )
test("index",opt.index,i);





} catch (e) { exception(e); }


testmodule_finished();

/* eof */
