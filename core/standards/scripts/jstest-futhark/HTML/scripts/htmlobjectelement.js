/* Tests for DOM 2 Core 'DOMImplementation' object.
*/

var cvs = "$Id: htmlobjectelement.js 112594 2012-03-21 10:08:03Z jorritv $";

function testGeneral()
{
testmodule( "HTMLObjectElement", cvs );

try {

  var o1 = document.getElementById("myObject1");
  var o2 = document.getElementById("myObject2");
  var o3 = document.getElementById("myObject3");

  var o = o1; 

  testcase( "object" );

  test("class",o,"[object HTMLObjectElement]");
  
  testcase( "properties exists" );

  tdef("code",o.code);
  tdef("align",o.align);
  tdef("archive",o.archive);
  tdef("border",o.border);
  tdef("codeBase",o.codeBase);
  tdef("codeType",o.codeType);
  tdef("data",o.data);
  tdef("height",o.height);
  tdef("hspace",o.hspace);
  tdef("name",o.name);
  tdef("standby",o.standby);
  tdef("tabIndex",o.tabIndex);
  tdef("type",o.type);
  tdef("useMap",o.useMap);
  tdef("vspace",o.vspace);
  tdef("width",o.width);
  if (is_phase(2)) tdef("declare",o.declare);

  var o = o1; 
  testcase( "default property values" );
  
  test("code",o.code,"");
  test("align",o.align,"");
  test("archive",o.archive,"");
  test("border",o.border,"");
  test("codeBase",o.codeBase,"");
  test("codeType",o.codeType,"");
  test("data",o.data,"");
  if (is_phase(2)) test("declare",o.declare,"");
  test("height",o.height,"");
  test("hspace",o.hspace,"");
  test("name",o.name,"");
  test("standby",o.standby,"");
  test("tabIndex",o.tabIndex,-1);
  test("type",o.type,"");
  test("useMap",o.useMap,"");
  test("vspace",o.vspace,"");
  test("width",o.width,"");
 

  testcase( "property values from attributes" );
  
  test("align",o2.align,"right");
  test("archive",o2.archive,"http://www.opera.com/ http://www.opera.no");
  test("border",o3.border,2);
  test("codeBase 1",o2.codeBase,location.href.replace(/\/[^\/]+$/, "/codebaseFolder/"));
  test("codeBase 2",o3.codeBase,location.href.replace(/\/[^\/]+$/, "/codebaseFolder/"));
  test("data",o2.data,location.href.replace(/\/[^\/]+$/, "/codebaseFolder/logo_z.gif"));
  if (is_phase(2)) test("declare",o2.declare,true);
  test("height",o2.height,"50");
  test("hspace",o2.hspace,"5");
  test("name",o2.name,"o");
  test("standby",o2.standby,"loading");
  test("tabIndex",o2.tabIndex,5);
  test("type",o2.type,"image/gif");
  test("useMap",o2.useMap,"#map");
  test("vspace",o2.vspace,"7");
  test("width",o2.width,"90");

  if(is_phase(2))
  {
  o = o1;
  testcase( "properties are writable" );
  
  o.code = "clock.class";
  test("code",o.code,"clock.class");
  o.align = "right";
  test("align",o.align,"right");
  o.archive = "dummy";
  test("archive",o.archive,"dummy");
  o.border = "3";
  test("border",o.border,"3");
  o.codeBase = "codebaseFolder/";
  test("codeBase",o.codeBase,location.href.replace(/\/[^\/]+$/, "/codebaseFolder/"));
  o.codeType = "application/x-java-applet";
  test("codeType",o.codeType,"application/x-java-applet");
  o.data = "logo_z.gif";
  test("data",o.data,"logo_z.gif");
  o.declare = false
  test("declare",o.declare,false);
  o.height = "50";
  test("height",o.height,"50");
  o.hspace = "5";
  test("hspace",o.hspace,"5");
  o.name = "A";
  test("name",o.name,"A");
  o.standby = "loading";
  test("standby",o.standby,"loading");
  o.tabIndex = 5;
  test("tabIndex",o.tabIndex,5);
  o.type = "image/gif";
  test("type",o.type,"image/gif");
  o.useMap = "#map2";
  test("useMap",o.useMap,"#map2");
  o.vspace = "7";
  test("vspace",o.vspace,"7");
  o.width = "90";
  test("width",o.width,"90");
}
} catch (e) { exception(e); }

testmodule_finished();
}

function testApplet()
{
  testmodule( "HTMLObjectElement", cvs );
  
  try 
  {
    var o4 = self.opener.document.getElementById("myObject4");
    var o5 = self.opener.document.getElementById("myObject5");
    var o6 = self.opener.document.getElementById("myObject6");

    testcase("contentDocument");
    tdef("Check if contentDocument is defined", o6.contentDocument);
    /*the funny replace below is a workaround against bug 216962 which is known and not particularly relevant for this test*/
    test("test", o6.contentDocument.getElementById('bodyelm').firstChild.data.replace(/(^\s*|\s*$)/g,''), "Inline frame");

    o = o4;
    testcase( "applet object properties exists" );

    tdef("code",o.code);
    tdef("align",o.align);
    tdef("archive",o.archive);
    tdef("border",o.border);
    tdef("codeBase",o.codeBase);
    tdef("codeType",o.codeType);
    tdef("data",o.data);
    if (is_phase(2)) tdef("declare",o.declare); 
    tdef("height",o.height);
    tdef("hspace",o.hspace);
    tdef("name",o.name);
    tdef("standby",o.standby);
    tdef("tabIndex",o.tabIndex);
    tdef("type",o.type);
    tdef("useMap",o.useMap);
    tdef("vspace",o.vspace);
    tdef("width",o.width);
 
	testcase( "applet object property values from attributes" );
  
    test("code",o.code,"clock.class");
    test("align",o.align,"right");
    test("archive",o.archive,"http://www.opera.com/ http://www.opera.no");
    test("border",o.border,3);
    test("codeType",o.codeType,"application/x-java-applet");
    test("height",o.height,"50");
    test("hspace",o.hspace,"5");
    test("name",o.name,"o4");
    test("standby",o.standby,"loading applet object");
    test("tabIndex",o.tabIndex,5);
    test("vspace",o.vspace,"7");
    test("width",o.width,"100");

    o = o5;
    testcase( "random attributes" ); 
  // Attributes defined by the applet itself. Accessible through liveconnect.
  // Note that if the applet has an attribute with a name that is identical
  // to an attribute of the HTMLAppletElement, ie. "code", the internal
  // attribute takes presedence.

    test("code",o.code,"Helleu");
/*
    test("nummer",o.nummer,0);
*/  
} catch (e) { exception(e); }

  testmodule_finished();

}

function go()
{
    window.open("objectHelper.html","helper");

}




/* eof */
