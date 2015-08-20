/* Tests for DOM 2 HTML 'HTMLLegendElement' object.
*/

var cvs = "$Id: htmllegendelement.js 4838 2006-01-18 05:59:01Z hallvord $";

testmodule ("HTMLLegendElement", cvs);

try {

	var l1 = document.getElementById("legend1");

	testcase( "object" );

	test("class",l1,"[object HTMLLegendElement]");

	testcase( "attribute object class" );

	test("form",l1.form,"[object HTMLFormElement]");

	testcase ("Property defined?");

	tdef ("form", l1.form);
	tdef ("align", l1.align);
	tdef ("accessKey", l1.accessKey);

	testcase ("Default property value");

	test ("form", l1.form, document.forms[0]);
	test ("align", l1.align, "");
     	test ("accessKey", l1.accessKey, "");

	testcase ("Property value, all attributes set");
	
	var l2 = document.getElementById ("legend2");

	test ("form", l2.form, document.forms[0]);
    	test ("align", l2.align, "right");
    	test ("accessKey", l2.accessKey, "M");

	test ("hasAttribute align", l2.hasAttribute("align"), true);
	test ("hasAttribute accessKey", l2.hasAttribute("accessKey"), true);

	testcase ("Changed property value");

	l2.align = "bottom";
	l2.accessKey = "N";

    	test ("form", l2.form, document.forms[0]);
	test ("align", l2.align, "bottom");
	test ("accessKey", l2.accessKey, "N");

	expect_DOM_exception( "form", DOMException.NO_MODIFICATION_ALLOWED_ERR,function(){l2.form = null;} )
	test ("form", l2.form, document.forms[0]);

	// Create new legend
	var newlegend = document.createElement ("legend");
	newlegend.align = "right";
	newlegend.accessKey = "G";
	
	testcase ("Insert new legend element into document using appendChild()");
	var theForm = document.getElementById ("myForm");
	theForm.appendChild (newlegend);

	testcase ("Create new HTMLLegendElement, set and read attributes directly");
    	test ("form", newlegend.form, document.forms[0]);
	if(is_phase(2))
	{
		test ("align", newlegend.align, "right");
		test ("accessKey", newlegend.accessKey, "G");
	}

	// Create second new legend
	var newlegend2 = document.createElement ("legend");
	newlegend2.setAttribute ("align", "right");
	newlegend2.setAttribute ("accessKey", "H");
	
	var theFieldSet2 = document.getElementById ("myFieldSet2");
	theFieldSet2.appendChild (newlegend2);

	if(is_phase(2))
	{
		testcase ("Create new HTMLLegendElement, set and read attributes using DOM access methods");
		test ("align", newlegend2.getAttribute("align"), "right");
		test ("accessKey", newlegend2.getAttribute("accessKey"), "H");
	}

	testcase ("Attribute exists? (using Element.hasAttribute() on first new legend)");
	test ("align", newlegend.hasAttribute("align"), true);
	test ("accessKey", newlegend.hasAttribute("accessKey"), true);

    	testcase ("Attribute exists? (using Element.hasAttribute() on second new legend)");
	test ("align", newlegend2.hasAttribute("align"), true);
	test ("accessKey", newlegend2.hasAttribute("accessKey"), true);

	testcase ("Remove attribute using Element.removeAttribute() on first new legend");
	newlegend.removeAttribute ("align");
	newlegend.removeAttribute ("accessKey");

	// After removal, a new attribute will occur with the default value
	
    	test ("align", newlegend.getAttribute("align"), "");
    	test ("accessKey", newlegend.getAttribute("accessKey"), "");

	testcase ("Remove attribute using Element.removeAttribute() on html attributes");
    	l2.removeAttribute ("align");
	l2.removeAttribute ("accessKey");

	// After removal, a new attribute will occur with the default value
	
    	test ("align", l2.getAttribute("align"), "");
    	test ("accessKey", l2.getAttribute("accessKey"), "");

	var count = 0;
	var legends =  document.getElementsByTagName("legend");
	for (var i = 0; i < legends.length; i++)
	{
		// document.writeln ("<h3>Legend " + count++ + "</h3>");
		for (var j in i)
		{
			document.writeln ("Attribute name : " + j.nodeName);
			document.writeln ("Attribute value : " + j.nodeValue);
		}
	}
	test("Number of legends",legends.length,4);


} catch (e) { exception(e); }

testmodule_finished();

