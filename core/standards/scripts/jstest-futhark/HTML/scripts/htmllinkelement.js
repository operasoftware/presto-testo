/* Tests for DOM 2 Core 'DOMImplementation' object.
*/

var cvs = "$Id: htmllinkelement.js 22607 2008-01-25 14:48:14Z hallvord $";


testmodule( "HTMLLinkElement", cvs );

try {

  var e1 = document.getElementById("myLink");
  var e2 = document.getElementById("myLink2");

  testcase( "object" );

  test("class",e1,"[object HTMLLinkElement]");
   
  testcase( "properties exists" );
  
  var e = e1;
  tdef("disabled",e.disabled);
  tdef("charset",e.charset);
  tdef("href",e.href);
  tdef("hreflang",e.hreflang);
  tdef("media",e.media);
  tdef("rel",e.rel);
  tdef("rev",e.rev);
  tdef("target",e.target);
  tdef("type",e.type);
 
  testcase( "property values" );
  
  test("disabled",e.disabled,false);
  test("charset",e.charset,"");
  test("href",e.href,"");
  test("hreflang",e.hreflang,"");
  test("media",e.media,""); 
  test("rel",e.rel,""); 
  test("rev",e.rev,"");
  test("target",e.target,"");
  test("type",e.type,"");
  
  testcase( "properties exists, attributes in use" );

  e = e2;  
  tdef("disabled",e.disabled);
  tdef("charset",e.charset);
  tdef("href",e.href);
  tdef("hreflang",e.hreflang);
  tdef("media",e.media);
  tdef("rel",e.rel);
  tdef("rev",e.rev);
  tdef("target",e.target);
  tdef("type",e.type);
 

  testcase( "property values, attributes in use" );
  
  test("disabled",e.disabled,false);
  test("charset",e.charset,"iso-8859-1");
  test("href",e.href,"http://some.server.com/dir/index.html");
  test("hreflang",e.hreflang,"en-us");
  test("media",e.media,"print");
  test("rel",e.rel,"index");
  test("rev",e.rev,"section");
  test("target",e.target,"_top");
  test("type",e.type,"text/html");
  
  if(is_phase(2)) // These properies ar currently readonly
  {
  testcase( "properties are writable" );
  e.disabled = true
  test("disabled",e.disabled,true);

  expect_DOM_exception( "charset", undefined,
	function(){ e.charset = "iso-8859-2"; } ); // not allowed for link on different server
  // e.charset = "iso-8859-2"
  // test("charset",e.charset,"iso-8859-2"); 

  e.href = "http://some.server.com/dir/style.css"
  test("href",e.href,"http://some.server.com/dir/style.css");
  e.hreflang = "en-uk"
  test("hreflang",e.hreflang,"en-uk");
  e.media = "screen"
  test("media",e.media,"screen");
  e.rel = "stylesheet"
  test("rel",e.rel,"stylesheet");
  e.rev = "start"
  test("rev",e.rev,"start");
  e.target = "alt"
  test("target",e.target,"alt");
  e.type = "text/css"
  test("type",e.type,"text/css");
  }
  
} catch (e) { exception(e); }

testmodule_finished();

/* eof */
