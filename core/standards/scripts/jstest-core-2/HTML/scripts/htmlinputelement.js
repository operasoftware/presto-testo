/* Tests for DOM 2 Core 'DOMImplementation' object.
*/


var cvs = "$Id: htmlinputelement.js 4838 2006-01-18 05:59:01Z hallvord $";


testmodule( "HTMLInputElement", cvs );

try {
  var form  = document.getElementById("myForm");
  var form2 = document.getElementById("myForm2");
  var inp1  = document.getElementById("myInput");
  var inp2  = document.getElementById("myInput2");
  var inp3  = document.getElementById("myInput3");
  var inp4  = document.getElementById("myInput4");

  testcase( "object" );

  test("class",inp1,"[object HTMLInputElement]");

  testcase( "attribute object class" );

  test("form",inp1.form,"[object HTMLFormElement]");

  testcase( "properties exists" );
  var inp = inp1;

  tdef("defaultValue",inp.defaultValue);
  tdef("defaultChecked",inp.defaultChecked);
  tdef("form",inp.form);
  tdef("accept",inp.accept);
  tdef("accessKey",inp.accessKey);
  tdef("align",inp.align);
  tdef("alt",inp.alt);
  tdef("checked",inp.checked);
  tdef("disabled",inp.disabled);
  tdef("maxLength",inp.maxLength);
  tdef("name",inp.name);
  tdef("readOnly",inp.readOnly);
  tdef("size",inp.size);
  tdef("src",inp.src);
  tdef("tabIndex",inp.tabIndex);
  tdef("type",inp.type);
  tdef("useMap",inp.useMap);
  tdef("value",inp.value);

  testcase( "read property values" );
  inp = inp1;

  test("defaultValue",inp.defaultValue,"");
  test("defaultChecked",inp.defaultChecked,false);
  test("form",inp.form,form);
  test("accept",inp.accept,"");
  test("accessKey",inp.accessKey,"");
  test("align",inp.align,"");
  test("alt",inp.alt,"");
  test("checked",inp.checked,false);
  test("disabled",inp.disabled,false);
  test("maxLength",inp.maxLength,-1); // Actual default is an unlimited number
  test("name",inp.name,"");
  test("readOnly",inp.readOnly,false);
  // The size of this input is quite unpredictable.
  //test("size",inp.size,-1);
  test("src",inp.src,"");
  test("tabIndex",inp.tabIndex,0); // If not defined, the navigation algorithm assumes zero, so zero is a reasonable "default" value.
  test("type",inp.type,"text");
  test("useMap",inp.useMap,"");
  test("value",inp.value,"");


  testcase( "properties exists, attributes in use" );
  var inp = inp2;

  tdef("defaultValue",inp.defaultValue);
  tdef("defaultChecked",inp.defaultChecked);
  tdef("form",inp.form);
  tdef("accept",inp.accept);
  tdef("accessKey",inp.accessKey);
  tdef("align",inp.align);
  tdef("alt",inp.alt);
  tdef("checked",inp.checked);
  tdef("disabled",inp.disabled);
  tdef("maxLength",inp.maxLength);
  tdef("name",inp.name);
  tdef("readOnly",inp.readOnly);
  tdef("size",inp.size);
  tdef("src",inp.src);
  tdef("tabIndex",inp.tabIndex);
  tdef("type",inp.type);
  tdef("useMap",inp.useMap);
  tdef("value",inp.value);

  testcase( "read property values from attributes" );
  inp = inp2;

  test("defaultValue",inp.defaultValue,"verdi");
  test("defaultChecked",inp.defaultChecked,false);
  test("form",inp.form,form);
  test("accept",inp.accept,"text/plain");
  test("accessKey",inp.accessKey,"U");
  test("align",inp.align,"center");
  test("alt",inp.alt,"abcd");
  test("checked",inp.checked,false);
  ttrue("checked",inp3.checked);
  test("disabled",inp.disabled,true);
  test("maxLength",inp.maxLength,10);
  test("name",inp.name,"navn");
  test("readOnly",inp.readOnly,true);
  test("size",inp.size,5);
  test("size",inp3.size,32);
  test("src",inp.src,"");
  test("src",inp4.src,get_protocol_and_host() + get_modulepath("graphics","operalogo_100x105.gif"));
  test("tabIndex",inp3.tabIndex,10);
  test("type",inp.type,"text");
  test("type",inp3.type,"checkbox");
  test("type",inp4.type,"image");
  test("useMap",inp4.useMap,get_protocol_and_host() + get_modulepath("HTML", "myMap"));
  test("value",inp.value,"verdi");
  test("value",inp3.value,"verdi2");

  testcase( "properties are writeable" );
  inp = inp2;

  inp.defaultValue = "endring";
  test("defaultValue",inp.defaultValue,"endring");
  inp3.defaultChecked = false;
  test("defaultChecked",inp.defaultChecked,false);
  inp.accept = "text/html";
  test("accept",inp.accept,"text/html");
  inp.accessKey = "r";
  test("accessKey",inp.accessKey,"r");
  inp.align = "right";
  test("align",inp.align,"right");
  inp.alt = "defg";
  test("alt",inp.alt,"defg");
  inp.checked = false;
  test("checked",inp.checked,false);
  inp3.checked = false;
  test("checked",inp3.checked,false);
  inp.disabled = false;
  test("disabled",inp.disabled,false);
  inp.maxLength = 13;
  test("maxLength",inp.maxLength,13);
  inp.name = "felt";
  test("name",inp.name,"felt");
  inp.readOnly = false;
  test("readOnly",inp.readOnly,false);
  inp.size = 7;
  test("size",inp.size,7);
  inp3.size = 45;
  test("size",inp3.size,45);
  inp.src = "operalogo_100x100.gif";
  test("src",inp.src,get_protocol_and_host() + get_modulepath("HTML","operalogo_100x100.gif"));
  inp4.src = "operalogo_100x100.gif";
  test("src",inp4.src,get_protocol_and_host() + get_modulepath("HTML","operalogo_100x100.gif"));
  inp3.tabIndex = 11;
  test("tabIndex",inp3.tabIndex,11);
  inp.type = "radio";
  test("type",inp.type,"radio");
  inp.type = "checkbox";
  test("type",inp.type,"checkbox");
  inp.type = "password";
  test("type",inp.type,"password");
  inp.type = "reset";
  test("type",inp.type,"reset");
  inp4.useMap = "theMap";
  test("useMap",inp4.useMap,get_protocol_and_host() + get_modulepath("HTML","theMap"));
  inp.value = "verdi3";
  test("value",inp.value,"verdi3");
  inp3.value = "verdi4";
  test("value",inp3.value,"verdi4");


  testcase( "properties are not writeable" );

  expect_DOM_exception( "form", DOMException.NO_MODIFICATION_ALLOWED_ERR, function(){inp.form = null;} )
  test("form",inp.form,form);

	
  testcase( "methods exist" );

  tdef("blur",inp.blur);
  tdef("click",inp.click);
  tdef("focus",inp.focus);
  tdef("select",inp.select);


  testcase( "methods" );

  inp3.focus();
  test("focus()",test_call(),"call_on");
  inp3.blur();
  test("blur()",test_call(),"call_off");

  var stat = inp3.checked;
  inp3.click();
  test("click()",!inp3.checked,stat);

  forget_call();
  inp2.select();
  test("select()",test_call(),"call_on");

} catch (e) { exception(e); }


testmodule_finished();

/* eof */
