/* Tests for DOM 2 HTML 'HTMLButtonElement' object.
*/

var cvs = "$Id: htmlbuttonelement.js 108182 2012-01-13 12:09:02Z sigbjornf $";

testmodule ("HTMLButtonElement", cvs);

try {

	var b1 = document.getElementById("button1");

	testcase( "object" );

	test("class",b1,"[object HTMLButtonElement]");

	testcase( "attribute object class" );

	test("form",b1.form,"[object HTMLFormElement]");

	testcase ("Property defined? (HTML button tag - first button)");

	tdef ("form", b1.form);
	tdef ("accessKey", b1.accessKey);
	tdef ("disabled", b1.disabled);
	tdef ("name", b1.name);
	tdef ("tabIndex", b1.tabIndex);
	tdef ("type", b1.type);
	tdef ("value", b1.value);

	testcase ("Default property value (HTML button tag - first button)");

        test ("form", b1.form, document.forms[0]);
        test ("accessKey", b1.accessKey, "");
        test ("disabled", b1.disabled, false);
        test ("name", b1.name, "");
        test ("tabIndex", b1.tabIndex, 0); // If not defined, the navigation algorithm assumes zero, so zero is a reasonable "default" value.
        test ("type", b1.type, "");// default value no longer expected, see bug 291905
        test ("value", b1.value, "");

	testcase ("Property value, all attributes set (HTML button tag - second button)");

	var b2 = document.getElementById ("button2");

	test ("form", b2.form, document.forms[0]);
        test ("accessKey", b2.accessKey, "H");
        test ("disabled", b2.disabled, false);
        test ("name", b2.name, "button2");
        test ("tabIndex", b2.tabIndex, 1);
        test ("type", b2.type, "button");
        test ("value", b2.value, "Button 2");

        testcase ("Property value, some attributes set (HTML input tag - third button)");

        var b3 = document.getElementById ("button3");

        test ("form", b3.form, document.forms[0]);
        test ("accessKey", b3.accessKey, "");
        test ("disabled", b3.disabled, true);
        test ("name", b3.name, "button3");
        test ("tabIndex", b3.tabIndex, 0);
        test ("type", b3.type, "reset");
        test ("value", b3.value, "Button 3");

	if(is_phase(2)) // These properies ar currently readonly
	{
		testcase ("Changed property value (HTML button tag - second button)");

		b2.accessKey = "J";
		b2.disabled = true;
		b2.name = "newnameButton2";
		b2.tabIndex = 2;
		b2.value = "New Button 2";

        test ("form", b2.form, document.forms[0]);
        test ("accessKey", b2.accessKey, "J");
        test ("disabled", b2.disabled, true);
        test ("name", b2.name, "newnameButton2");
        test ("tabIndex", b2.tabIndex, 2);
        test ("type", b2.type, "button");
        test ("value", b2.value, "New Button 2");

		testcase ("Changed property value (HTML input tag - third button)");

        b3.accessKey = "K";
        b3.disabled = false;
        b3.name = "newnameButton3";
        b3.tabIndex = 0;
        b3.value = "New Button 3";

        test ("form", b3.form, document.forms[0]);
        test ("accessKey", b3.accessKey, "K");
        test ("disabled", b3.disabled, false);
        test ("name", b3.name, "newnameButton3");
        test ("tabIndex", b3.tabIndex, 0);
        test ("type", b3.type, "reset");
        test ("value", b3.value, "New Button 3");
	}

	testcase ("Properties are readonly");

    expect_readonly_exception( "form", function(){ "use strict"; b2.form = document.forms[1];})
    test ("form", b2.form, document.forms[0]);
    try{
	    b2.type = "textarea";
    }catch(e){exception(e);}

    test ("type", b2.type, "textarea");


	// Create first new button
	var newb1 = document.createElement ("button");
	newb1.accessKey = "A";
	newb1.disabled = false;
	newb1.name = "newb1";
	newb1.tabIndex = 2;
	newb1.value = "First new button";

        testcase ("Insert new button element into document using appendChild()");
        var theForm = document.getElementById ("myForm2");
        theForm.appendChild (newb1);

	testcase ("Create new HTMLButtonElement, set and read attributes directly");
        test ("form", newb1.form, document.forms[1]);
        test ("accessKey", newb1.accessKey, "A");
        test ("disabled", newb1.disabled, false);
        test ("name", newb1.name, "newb1");
        test ("tabIndex", newb1.tabIndex, 2);
        test ("type", newb1.type, "");// default value no longer expected, see bug 291905
        test ("value", newb1.value, "First new button");

	// Create second new button
        var newb2 = document.createElement ("button");
	newb2.setAttribute ("accessKey", "C");
	newb2.setAttribute ("disabled", true);
	newb2.setAttribute ("name", "newb2");
	newb2.setAttribute ("tabIndex", 0);
	newb2.setAttribute ("value", "Third new button");

	theForm.appendChild (newb2);

	if(is_phase(2)) // These properies ar currently readonly
	{
		testcase ("Create new HTMLButtonElement, set and read attributes using DOM access methods");
        test ("form", newb2.getAttribute("form"), document.forms[1]);
        test ("accessKey", newb2.getAttribute("accessKey"), "C");
        test ("disabled", newb2.getAttribute("disabled"), "true");
        test ("name", newb2.getAttribute("name"), "newb2");
        test ("tabIndex", newb2.getAttribute("tabIndex"), 0);
        test ("type", newb2.getAttribute("type"), "submit");
        test ("value", newb2.getAttribute("value"), "Third new button");
	}

	testcase ("Attribute exists? (using Element.hasAttribute() on first new button)");
	test ("form", newb1.hasAttribute("form"), false);
	test ("accessKey", newb1.hasAttribute("accessKey"), true);
	test ("disabled", newb1.hasAttribute("disabled"), false);
	test ("name", newb1.hasAttribute("name"), true);
	test ("tabIndex", newb1.hasAttribute("tabIndex"), true);
	test ("type", newb1.hasAttribute("type"), false);// default value no longer expected, see bug 291905
	test ("value", newb1.hasAttribute("value"), true);

        testcase ("Attribute exists? (using Element.hasAttribute() on second new button)");
        test ("form", newb2.hasAttribute("form"), false);
        test ("accessKey", newb2.hasAttribute("accessKey"), true);
        test ("disabled", newb2.hasAttribute("disabled"), true);
        test ("name", newb2.hasAttribute("name"), true);
        test ("tabIndex", newb2.hasAttribute("tabIndex"), true);
        test ("type", newb2.hasAttribute("type"), false);// default value no longer expected, see bug 291905
        test ("value", newb2.hasAttribute("value"), true);

	testcase ("Remove attribute using Element.removeAttribute() on first new button");
	newb1.removeAttribute ("accessKey");
	newb1.removeAttribute ("disabled");
	newb1.removeAttribute ("name");
	newb1.removeAttribute ("tabIndex");
	newb1.removeAttribute ("value");

    // After remove, attributes should have default values

    test ("accessKey", newb1.getAttribute("accessKey"), null);
    test ("disabled", newb1.getAttribute("disabled"), null);
    test ("name", newb1.getAttribute("name"), null);
    test ("tabIndex", newb1.getAttribute("tabIndex"), null);
    test ("type", newb1.getAttribute("type"), null);// default value no longer expected, see bug 291905
    test ("value", newb1.getAttribute("value"), null);

    testcase ("Remove attribute using Element.removeAttribute() on second new button");
        newb2.removeAttribute ("accessKey");
        newb2.removeAttribute ("disabled");
        newb2.removeAttribute ("name");
        newb2.removeAttribute ("tabIndex");
        newb2.removeAttribute ("value");

   // After remove, attributes should have default values

   test ("form", newb2.getAttribute("form"), null);
   test ("accessKey", newb2.getAttribute("accessKey"), null);
   test ("disabled", newb2.getAttribute("disabled"), null);
   test ("name", newb2.getAttribute("name"), null);
   test ("tabIndex", newb2.getAttribute("tabIndex"), null);
   test ("type", newb2.getAttribute("type"), null);// default value no longer expected, see bug 291905
   test ("value", newb2.getAttribute("value"), null);

	testcase ("Enumerate buttons in document");
	var count = 0;
	var buttons =  document.getElementsByTagName("button");
	for (var i = 0; i < buttons.length; i++)
	{
//    		document.writeln ("<h3>Button " + count++ + " " + i.id + "</h3>");
/* Is this meaningful??
	    	for (var j in i)
		    {
				document.writeln ("Attribute name : " + j.nodeName);
				document.writeln ("Attribute value : " + j.nodeValue);
			}
				*/
	}
	test("Number of buttons",buttons.length,4);
	var inputs =  document.getElementsByTagName("input");
	test("Number of inputs",inputs.length,1);

} catch (e) { exception(e); }

testmodule_finished();

