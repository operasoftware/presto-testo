/* Tests for DOM 2 HTML 'HTMLHeadingElement' object.
   Interactive
*/

var cvs = "$Id: htmlheadingelement_int.js 10655 2006-12-18 15:47:57Z hallvord $";

testmodule( "HTMLDivElement interactive", cvs );

try {
	testcase("write align attribute");

	if (is_phase(2))
	{
		var h2_elm = document.getElementById('h1');
		h2_elm.align = "right";
		conf( "align #1", "Is 'Hello world!' aligned right?" );
		h2_elm.align = "center";
		conf( "align #2", "Is 'Hello world!' aligned center?" );
		h2_elm.align = "left";
		conf( "align #3", "Is 'Hello world!' aligned left?" );
	}

} catch (e) { exception(e); }

testmodule_finished();

/* eof */
