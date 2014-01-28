/* Tests for DOM 2 HTML 'HTMLParagraphElement' object.
   Interactive
*/

var cvs = "$Id: htmlparagraphelement_int.js 4838 2006-01-18 05:59:01Z hallvord $";

testmodule( "HTMLParagraphElement interactive", cvs );

try {
	testcase("write align attribute");

	if (is_phase(2))
	{
		var p_elm = document.getElementById('p1');
		p_elm.align = "right";
		conf( "align #1", "Is 'Hello world!' aligned right?" );
		p_elm.align = "center";
		conf( "align #2", "Is 'Hello world!' aligned center?" );
		p_elm.align = "left";
		conf( "align #3", "Is 'Hello world!' aligned left?" );
	}

} catch (e) { exception(e); }

testmodule_finished();

/* eof */
