/* Tests for DOM 2 HTML 'HTMLLegendElement' object.
*/

var cvs = "$Id: htmllegendelement_int.js 10655 2006-12-18 15:47:57Z hallvord $";

testmodule ("HTMLLegendElement Interactive test", cvs);

try {

	var l2 = document.getElementById ("legend2");

	test ("form", l2.form, document.forms[0]);
    	test ("align", l2.align, "left");
    	test ("accessKey", l2.accessKey, "M");

	if(is_phase(2))
	{
		testcase ("Changed property value");

		conf("reflow align #1", "Is Gender title positioned to the left?");

		l2.align = "right";
		l2.accessKey = "N";

	    	test ("form", l2.form, document.forms[0]);
		test ("align", l2.align, "right");
		test ("accessKey", l2.accessKey, "N");

		conf_expect_failure("reflow align #2", "Is Gender title positioned to the right?", 113385);
	}

} catch (e) { exception(e); }

testmodule_finished();

