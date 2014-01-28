/* Tests for DOM 2 Core 'DOMImplementation' object.
*/

/*
  Note. Opera w/DOM2 is not able to carry out the test. The html is wrong:
  one select does not contain a required option. Opera probably should be able
  to go on anyway. Both msie and mozilla can. I leave the test as it is.
*/

var cvs = "$Id: htmlselectelement.js 108182 2012-01-13 12:09:02Z sigbjornf $";


testmodule( "HTMLSelectElement", cvs );
expect(76);
try {
  var sel  = document.getElementById("mySelect");
  var form = document.getElementById("myForm");
  var form2 = document.getElementById("myForm2");

  testcase( "object" );

  test("class",sel,"[object HTMLSelectElement]");

  testcase( "attribute object class" );

  test("form",sel.form,"[object HTMLFormElement]");
  test("options",sel.options,"[object HTMLOptionsCollection]");

  testcase( "properties exists" );

  tdef("type",sel.type);
  tdef("selectedIndex",sel.selectedIndex);
  tdef("value",sel.value);
  tdef("length",sel.length);
  tdef("form",sel.form);
  tdef("options",sel.options);
  tdef("name",sel.name);
  if(is_phase(1)) // 2?
  {
    tdef("disabled",sel.disabled);
    tdef("multiple",sel.multiple);
    tdef("size",sel.size);
    tdef("tabIndex",sel.tabIndex);
  }

  testcase( "read property values" );

  test("type",sel.type,"select-one");
  test("selectedIndex",sel.selectedIndex,-1);
  test("value",sel.value,"");
  test("length",sel.length,0);
  test("form",sel.form,form);
  test("options",sel.options.length,0);
  test("name",sel.name,"");
  if(is_phase(1))
  {
    test("disabled",sel.disabled,false);
    test("multiple",sel.multiple,false);
    test("size",sel.size,0);
    test("tabIndex",sel.tabIndex,0);
  }

  sel = document.getElementById("mySelect2");
  testcase( "properties exists, attributes in use" );

  tdef("type",sel.type);
  tdef("selectedIndex",sel.selectedIndex);
  tdef("value",sel.value);
  tdef("length",sel.length);
  tdef("form",sel.form);
  tdef("options",sel.options);
  tdef("disabled",sel.disabled);
  tdef("multiple",sel.multiple);
  tdef("name",sel.name);
  tdef("size",sel.size);
  tdef("tabIndex",sel.tabIndex);
  if(is_phase(2))
  {
  }


  testcase( "read property values from attributes" );

  test("type",sel.type,"select-one");
  test("selectedIndex",sel.selectedIndex,1);
  test("value",sel.value,"her");
  test("length",sel.length,3);
  test("form",sel.form,form);
  test("options",sel.options.length,3);
  test("disabled",sel.disabled,true);
  test("multiple",sel.multiple,false);
  test("name",sel.name,"sel");
  test("size",sel.size,3);
  test("tabIndex",sel.tabIndex,2);


  testcase( "properties are writeable" );

  sel.value = "der";

  test("value #1",sel.value,"der");
  test("selectedIndex #1",sel.selectedIndex,2);
  sel.selectedIndex = 0;
  test("selectedIndex #2",sel.selectedIndex,0);
  sel.selectedIndex = 2;
  test("value #2",sel.value,"der");
  sel.disabled = false;
  test("disabled",sel.disabled,false);
  sel.multiple = false;
  test("multiple #1",sel.multiple,false);
  sel.multiple = true;
  test("multiple #2",sel.multiple,true);
  sel.size = 3;
  test("size",sel.size,3);
  sel.tabIndex = 0;
  test("tabIndex #1",sel.tabIndex,0);
  sel.tabIndex = 1;
  test("tabIndex #2",sel.tabIndex,1);
  sel.name = "sel2";
  test("name",sel.name,"sel2");



  testcase( "properties are not writeable" );

  var sel_type = sel.type;
  expect_readonly_exception( "type", function(){"use strict"; sel.type = "select-multiple";});
  test("type",sel.type,sel_type);
//  sel.length = 4;
//  test("length",sel.length,2);
  expect_readonly_exception( "form", function(){"use strict"; sel.form = form2;});
  test("form",sel.form,form);
  var options = sel.options;
  expect_readonly_exception( "options", function(){"use strict"; sel.options = null;});
  test("options #1",sel.options,options);
  expect_readonly_exception( "options #2 -", function(){"use strict"; sel.options = "feil";});
  test("options #2",sel.options,options);


  testcase( "methods exist" );
  sel  = document.getElementById("mySelect");
  sel2  = document.getElementById("mySelect2");
  opt  = document.createElement ("option");
  cnt  = document.createTextNode("text");
  opt.insertBefore(cnt,null);


  tdef("add",sel.add);
  tdef("remove",sel.remove);
  tdef("blur",sel.blur);
  tdef("focus",sel.focus);

  testcase( "methods" );

  sel2.focus();
  test("focus",test_call(),"call_on");
  sel2.blur();
  test("blur",test_call(),"call_off");

  var l2 = sel2.length;
  var l  = sel.length;

  sel2.add(opt,null);
//  test("add",sel.length,l+1);
  test("add ..",sel2.length,l2+1);

  l2 = sel2.length;
  l  = sel.length;
  sel2.remove(0);
  test("remove",sel.length,l);
  test("remove ..",sel2.length,l2-1);

  testcase( "regression test for bug# 43154");
  var sel3 = document.getElementById("sel3");
  test("value", sel3.value, "elephant");

} catch (e) { exception(e); }

testmodule_finished();

/* eof */
