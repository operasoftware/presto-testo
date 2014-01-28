/* Tests for DOM 2 Core 'HTMLParam' object.
*/

var cvs = "$Id: htmlparamelement.js 22607 2008-01-25 14:48:14Z hallvord $";


function testParam()
{
  testmodule( "HTMLParamElement", cvs );

  try
  {
    var p1 = self.opener.document.getElementById("myParam");
	var p2 = self.opener.document.getElementById("myParam2");
	var p3 = self.opener.document.getElementById("myParam3");
	var p4 = self.opener.document.getElementById("myParam4");

    var p = p1;

    testcase( "object" );

    test("class",p,"[object HTMLParamElement]");

    testcase( "param object properties exists" );

    tdef("name",p.name);
    tdef("type",p.type);
    tdef("value",p.value);
    tdef("name",p.valueType);

    p = p1;
	testcase( "param object property values from default" );

    test("name",p.name,"");
    test("type",p.type,"");
    test("value",p.value,"");
    test("valueType",p.valueType,"");// default value no longer expected, see bug 291905

    p = p2;
	testcase( "param object property values from attributes" );

    test("name",p.name,"image");
    test("type",p.type,"image/jpeg");
    test("value",p.value,"silmaril.jpg");
    test("valueType",p.valueType,"ref");

    p = p3;
    test("name",p.name,"col");
    test("value",p.value,"red");

    if (is_phase(2))
    {
        p = p4;
        testcase("writeable properties");
        p.name = "button";
        p.value = "yes.gif";
        p.valueType = "ref";
        p.type = "image/gif";

        test("read written name property", p.name, "button");
        test("read written value property", p.value, "yes.gif");
        test("read written valueType property", p.valueType, "ref");
        test("read written type property", p.type, "image/gif");

        test("read written name attribute", p.getAttribute("name"), "button");
        test("read written value attribute", p.getAttribute("value"), "yes.gif");
        test("read written valueType attribute", p.getAttribute("valuetype"), "ref");
        test("read written type attribute", p.getAttribute("type"), "image/gif");
    }
}
 catch (e) { exception(e); }

  testmodule_finished();

}

function go()
{
    window.open("paramHelper.html","helper");

}




/* eof */
