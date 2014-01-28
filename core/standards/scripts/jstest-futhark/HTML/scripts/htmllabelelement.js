/* Tests for DOM 2 HTML 'HTMLLabelElement' object.
*/

var cvs = "$Id: htmllabelelement.js 108182 2012-01-13 12:09:02Z sigbjornf $";

function testGeneral()
{
testmodule ("HTMLLabelElement", cvs);

try {

	var l1 = document.getElementById("label1");

	testcase( "object" );

	test("class",l1,"[object HTMLLabelElement]");

	testcase( "attribute object class" );

	test("form",l1.form,"[object HTMLFormElement]");

	testcase ("Property defined? (HTML label tag - first label)");

	tdef ("form", l1.form);
	tdef ("accessKey", l1.accessKey);
	tdef ("htmlFor", l1.htmlFor);

	testcase ("Default property value (HTML label tag - first label)");

    test ("form", l1.form, document.forms[0]);
    test ("accessKey", l1.accessKey, "");
    test ("htmlFor", l1.htmlFor, "");

	testcase ("Property value, all attributes set (HTML label tag - second label)");

	var l2 = document.getElementById ("label2");

	test ("form", l2.form, document.forms[0]);
    test ("accessKey", l2.accessKey, "M");
    test ("htmlFor", l2.htmlFor, "inp1");

//		test ("accessKey", l2.hasAttribute("accessKey"), true);

	testcase ("Changed property value (HTML label tag - second label)");

	l2.accessKey = "N";
	l2.htmlFor = "inp2";

    test ("form", l2.form, document.forms[0]);
    test ("accessKey", l2.accessKey, "N");
    test ("htmlFor", l2.htmlFor, "inp2");

    expect_readonly_exception( "form", function(){"use strict"; l2.form = null;} )
    test ("form", l2.form, document.forms[0]);

	// Create new label
	var newlabel = document.createElement ("label");
	if(is_phase(2)) // All properties are currently readonly
	{
		newlabel.accessKey = "G";
		newlabel.htmlFor = "inp3";
	}

    testcase ("Insert new label element into document using appendChild()");
    var theForm = document.getElementById ("myForm2");
    theForm.appendChild (newlabel);

	testcase ("Create new HTMLLabelElement, set and read attributes directly");
    test ("form", newlabel.form, document.forms[1]);
	if(is_phase(2)) // All properties are currently readonly
	{
	    test ("accessKey", newlabel.accessKey, "G");
		test ("htmlFor", newlabel.htmlFor, "inp3");
	}

	// Create second new label
	var newlabel2 = document.createElement ("label");
	if(is_phase(2)) // All properties are currently readonly
	{
		newlabel2.setAttribute ("accessKey", "H");
		newlabel2.setAttribute ("for", "inp3");
	}

	var theDiv = document.getElementById ("myDiv");
	theDiv.appendChild (newlabel2);

	if(is_phase(2)) // All properties are currently readonly
	{
		testcase ("Create new HTMLLabelElement, set and read attributes using DOM access methods");
		test ("accessKey", newlabel2.getAttribute("accessKey"), "H");
		test ("htmlFor", newlabel2.getAttribute("htmlFor"), "inp3");
	}
	testcase ("Attribute exists? (using Element.hasAttribute() on first new label)");

    testcase ("Attribute exists? (using Element.hasAttribute() on second new label)");


	testcase ("Remove attribute using Element.removeAttribute() on first new label");
	newlabel.removeAttribute ("accessKey");
    newlabel.removeAttribute ("for");

	// After removal, a new attribute will occur with the default value
	// (but accesskey and for are defined as #IMPLIED, i.e. no defaults
	// so we return null for non-existing attributes)

    test ("accessKey", newlabel.getAttribute("accessKey"), null);
    test ("htmlFor", newlabel.getAttribute("htmlFor"), null);
    test ("for", newlabel.getAttribute("for"), null);

	testcase ("Remove attribute using Element.removeAttribute() on html attributes");
	l2.removeAttribute ("accessKey");
    l2.removeAttribute ("for");
//  l2.removeAttribute ("htmlFor");


    test ("accessKey", l2.getAttribute("accessKey"), null);
    test ("htmlFor", l2.getAttribute("htmlFor"), null);
    test ("for", l2.getAttribute("for"), null);

	var labels =  document.getElementsByTagName("label");
	test("Number of labels",labels.length,5);


} catch (e) { exception(e); }

testmodule_finished();
}
