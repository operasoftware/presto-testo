/* Tests for DOM 2 HTML 'HTMLFieldSetElement' object.
*/

var cvs = "$Id: htmlfieldsetelement.js 108182 2012-01-13 12:09:02Z sigbjornf $";

testmodule ("HTMLFieldSetElement", cvs);

try {

	var f1 = document.getElementById("fieldset1");
	var l1 = document.getElementById("legend1");

	testcase( "object" );

	test("class",f1,"[object HTMLFieldSetElement]");

	testcase( "attribute object class" );

	test("form",f1.form,"[object HTMLFormElement]");

	testcase ("Property defined? (HTML fieldset tag - first fieldset)");

	tdef ("form", f1.form);
	tdef ("form", l1.form);
	tdef ("accessKey", l1.accessKey);
	tdef ("align", l1.align);

	testcase ("Default property value (first fieldset and legend)");

    test ("form", f1.form, document.forms[0]);
    test ("form", l1.form, document.forms[0]);
    test ("accessKey", l1.accessKey, "");
    test ("align", l1.align, "");

	testcase ("Property value, all attributes set (second fieldset and legend)");

	var f2 = document.getElementById ("fieldset2");
	var l2 = document.getElementById("legend2");

    test ("form", f2.form, document.forms[0]);
	test ("form", l2.form, document.forms[0]);
    test ("accessKey", l2.accessKey, "L");
    test ("align", l2.align, "right");


    testcase( "properties are not writeable" );
	expect_readonly_exception( "form", function(){"use strict"; f2.form = document.forms[1];} )
    test ("form", l2.form, document.forms[0]);
	expect_readonly_exception( "form", function(){"use strict"; f2.form = document.forms[1];} )
    test ("form", l2.form, document.forms[0]);

	// Create new fieldset
	var newfieldset = document.createElement ("fieldset");
	// Create new legend
	var newlegend = document.createElement ("legend");
    var theForm = document.getElementById ("myForm");
    theForm.appendChild (newfieldset);
    newfieldset.appendChild (newlegend);


	testcase ("Remove attribute using Element.removeAttribute() on html attributes");
	l2.removeAttribute ("accessKey");
	l2.removeAttribute ("align");

	// After removal, a new attribute will occur with the default value

    test ("accessKey", l2.getAttribute("accessKey"), null);
    test ("align", l2.getAttribute("align"), null);

	var count = 0;
	var fieldsets =  document.getElementsByTagName("fieldset");
	for (var i = 0; i < fieldsets.length; i++)
	{
//		document.writeln ("<h3>FieldSet " + count++ + "</h3>");
		for (var j in i)
		{
			document.writeln ("Attribute name : " + j.nodeName);
			document.writeln ("Attribute value : " + j.nodeValue);
		}
	}
	test("Number of fieldsets",fieldsets.length,3);

	var legends =  document.getElementsByTagName("legend");
	test("Number of legends",legends.length,3);


} catch (e) { exception(e); }

testmodule_finished();

