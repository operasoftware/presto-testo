/* Tests for DOM 2 Core 'DOMImplementation' object.
*/


var cvs = "$Id: htmlanchorelement.js 4838 2006-01-18 05:59:01Z hallvord $";


testmodule( "HTMLAnchorElement", cvs );

try {
  var form  = document.getElementById("myForm");
  var form2 = document.getElementById("myForm2");
  var inp1  = document.getElementById("myAnchor");
  var inp2  = document.getElementById("myAnchor2");
  
  
  testcase( "properties exists" );
  var inp = inp1;
  
  if(is_phase(1))
  {
    tdef("href",inp.href);
    tdef("name",inp.name);
    tdef("target",inp.target);
    tdef("charset",inp.charset);
    tdef("hreflang",inp.hreflang);
  }
  if(is_phase(2))
  {
    tdef("accessKey",inp.accessKey);
    tdef("coords",inp.coords);
    tdef("rel",inp.rel);
    tdef("rev",inp.rev);
    tdef("shape",inp.shape);
    tdef("tabIndex",inp.tabIndex);
    tdef("type",inp.type);
  }
  
  testcase( "read property values" );
  inp = inp1;
  
  if(is_phase(1))
  {
    test("href",inp.href,"");
    test("name",inp.name,"");
    test("target",inp.target,"");
    test("charset",inp.charset,"");
    test("hreflang",inp.hreflang,"");
  }
  if(is_phase(2))
  {
    test("accessKey",inp.accessKey,"");
    test("coords",inp.coords,"");
    test("rel",inp.rel,"");
    test("rev",inp.rev,"");
    test("shape",inp.shape,"");
    test("tabIndex",inp.tabIndex,0);
    test("type",inp.type,"");
  }

  testcase( "properties exists, attributes in use" );
  var inp = inp2;
  
  if(is_phase(1))
  {
    tdef("href",inp.href);
    tdef("name",inp.name);
    tdef("target",inp.target);
    tdef("charset",inp.charset);
    tdef("hreflang",inp.hreflang);
  }
  if(is_phase(2))
  {
    tdef("accessKey",inp.accessKey);
    tdef("coords",inp.coords);
    tdef("rel",inp.rel);
    tdef("rev",inp.rev);
    tdef("shape",inp.shape);
    tdef("tabIndex",inp.tabIndex);
    tdef("type",inp.type);
  }

  testcase( "read property values from attributes" );
  inp = inp2;
  
  if(is_phase(1))
  {
    test("href",inp.href,get_protocol_and_host() + get_modulepath("HTML","link.html"));
    test("name",inp.name,"navn");
    test("target",inp.target,"_top");
    test("charset",inp.charset,"iso-8859-1");
    test("hreflang",inp.hreflang,"i-navajo");
  }
  if(is_phase(2))
  {
    test("accessKey",inp.accessKey,"U");
    test("coords",inp.coords,"101,102,103");
    test("rel",inp.rel,"Copyright");
    test("rev",inp.rev,"Start");
    test("shape",inp.shape,"circle");
    test("tabIndex",inp.tabIndex,10);
    test("type",inp.type,"multipart/voice-message");
  }

  testcase( "properties are writeable" );
  inp = inp2;
  
  if(is_phase(1))
  {
    inp.href = "ref.html";
    test("href",inp.href,get_protocol_and_host() + get_modulepath("HTML","ref.html"));
    inp.name = "abcd";
    test("name",inp.name,"abcd");
    inp.target = "_parent";
    test("target",inp.target,"_parent");
    inp.charset = "windows-1232";
    test("charset",inp.charset,"windows-1232");
    inp.hreflang = "no";
    test("hreflang",inp.hreflang,"no");
  }
  if(is_phase(2))
  {
    inp.accessKey = "R";
    test("accessKey",inp.accessKey,"R");
    inp.tabIndex = 13;
    test("tabIndex",inp.tabIndex,13); 
    inp.type = "multipart/mixed";
    test("type",inp.type,"multipart/mixed");

    inp.coords = "200,200,400,400";
    test("coords",inp.coords,"200,200,400,400");
    inp.rel = "Copyleft";
    test("rel",inp.rel,"Copyleft");
    inp.rev = "Content";
    test("rev",inp.rev,"Content");
    inp.shape = "rect";
    test("shape",inp.shape,"rect");
  }

  testcase( "properties are not writeable" );

  // No readonly properties    
	
  testcase( "methods exist" );

  if(is_phase(1))
  {
    tdef("blur",inp.blur);
    tdef("focus",inp.focus);
  }

  testcase( "methods" );
  
  if(is_phase(1))
  {
    inp.focus();
    test("focus",test_call(),"call_on");
    inp.blur();
    test("blur",test_call(),"call_off");
  }
    
} catch (e) { exception(e); }


testmodule_finished();

/* eof */
