/* Tests for DOM 2 Core 'DOMImplementation' object.
*/


var cvs = "$Id: htmltextareaelement.js 4838 2006-01-18 05:59:01Z hallvord $";


testmodule( "HTMLTextAreaElement", cvs );

try {
  var form  = document.getElementById("myForm");
  var form2 = document.getElementById("myForm2");
  var inp1  = document.getElementById("myTextArea");
  var inp2  = document.getElementById("myTextArea2");
  
  testcase( "object" );

  test("class",inp1,"[object HTMLTextAreaElement]");
  
  testcase( "attribute object class" );

  test("form",inp1.form,"[object HTMLFormElement]");
    
  testcase( "properties exists" );
  var inp = inp1;
  
  tdef("defaultValue",inp.defaultValue);
  tdef("form",inp.form);
  tdef("accessKey",inp.accessKey);
  tdef("cols",inp.cols);
  tdef("disabled",inp.disabled);
  tdef("name",inp.name);
  tdef("readOnly",inp.readOnly);
  tdef("rows",inp.rows);
  tdef("tabIndex",inp.tabIndex);
  tdef("type",inp.type);
  tdef("value",inp.value);
  
  testcase( "read property values" );
  inp = inp1;
  
  test("defaultValue",inp.defaultValue,"");
  test("form",inp.form,form);
  test("accessKey",inp.accessKey,"");
  // This is unpredictable.
  //test("cols",inp.cols,-1);
  test("disabled",inp.disabled,false);
  test("name",inp.name,"");
  test("readOnly",inp.readOnly,false);
  // This is unpredictable.
  //test("rows",inp.rows,-1);
  test("tabIndex",inp.tabIndex,0);
  test("type",inp.type,"textarea");
  test("value",inp.value,"");
  

  testcase( "properties exists, attributes in use" );
  var inp = inp2;
  
  tdef("defaultValue",inp.defaultValue);
  tdef("form",inp.form);
  tdef("accessKey",inp.accessKey);
  tdef("cols",inp.cols);
  tdef("disabled",inp.disabled);
  tdef("name",inp.name);
  tdef("readOnly",inp.readOnly);
  tdef("rows",inp.rows);
  tdef("tabIndex",inp.tabIndex);
  tdef("type",inp.type);
  tdef("value",inp.value);

  testcase( "read property values from attributes" );
  inp = inp2;
  
  test("defaultValue",inp.defaultValue,"verdi");
  test("form",inp.form,form);
  test("accessKey",inp.accessKey,"U");
  test("cols",inp.cols,15);
  test("disabled",inp.disabled,true);
  test("name",inp.name,"navn");
  test("readOnly",inp.readOnly,true);
  test("rows",inp.rows,2);
  test("tabIndex",inp.tabIndex,10);
  test("type",inp.type,"textarea");
  test("value",inp.value,"verdi");

  testcase( "properties are writeable" );
  inp = inp2;
  
  inp.defaultValue = "endring";
  test("defaultValue",inp.defaultValue,"endring");
  inp.accessKey = "R";
  test("accessKey",inp.accessKey,"R");
  inp.cols = 17;
  test("cols",inp.cols,17);
  inp.disabled = false;
  test("disabled",inp.disabled,false);
  inp.name = "abcd";
  test("name",inp.name,"abcd");
  inp.readOnly = false;
  test("readOnly",inp.readOnly,false);
  inp.rows = 1;
  test("rows",inp.rows,1);
  inp.tabIndex = 13;
  test("tabIndex",inp.tabIndex,13);
  inp.value = "verdi2";
  test("value",inp.value,"verdi2");


  testcase( "properties are not writeable" );

  expect_DOM_exception( "form", DOMException.NO_MODIFICATION_ALLOWED_ERR, function(){inp.form = null;} )
  test("form",inp.form,form);
  var t = inp.type; expect_DOM_exception( "type", DOMException.NO_MODIFICATION_ALLOWED_ERR, function(){inp.type = "illegal";} )
  test("type",inp.type,t);
    
	
  testcase( "methods exist" );

  tdef("blur",inp.blur);
  tdef("focus",inp.focus);
  tdef("select",inp.select);


  testcase( "methods" );
  
  inp.focus();
  test("focus",test_call(),"call_on");
  inp.blur();
  test("blur",test_call(),"call_off");

  forget_call();
  inp2.select();
  test("select",test_call(),"call_on");
    
} catch (e) { exception(e); }


testmodule_finished();

/* eof */
