/* Tests for DOM 2 HTML 'HTMLAreaElement' object.
*/

var cvs = "$Id: htmlareaelement.js 4838 2006-01-18 05:59:01Z hallvord $";

function testGeneral()
{
testmodule( "HTMLAreaElement", cvs );

try {

  var p1 = document.getElementById("myArea");
  var p2 = document.getElementById("myArea2");
  var p = p1; 
  testcase( "properties exists" );

  tdef("accessKey",p.accessKey);
  tdef("alt",p.alt);
  tdef("coords",p.coords);
  tdef("href",p.href);
  tdef("noHref",p.noHref);
  tdef("shape",p.shape);
  tdef("tabIndex",p.tabIndex);
  tdef("target",p.target);
  
  var p = p1; 
  testcase( "default property values" );
  
  test("accessKey",p.accessKey,"");
  test("alt",p.alt,"");
  test("coords",p.coords,"");
  test("href",p.href,"");
  test("noHref",p.noHref,false);
  test("shape",p.shape,"rect");
  test("tabIndex",p.tabIndex,0);
  test("target",p.target,"");
  

  p = p2;
  testcase( "property values from attributes" );
  
  test("accessKey",p.accessKey,"a");
  test("alt",p.alt,"area");
  test_spaceagnostic("coords",p.coords,"20,20,20");
  test("href",p.href,"http://www.opera.no/");
  test("noHref",p.noHref,true);
  test("shape",p.shape,"circle");
  test("tabIndex",p.tabIndex,4);
  test("target",p.target,"_top");
 
  p = p1;
  testcase( "properties are writable" );
  
  if(is_phase(2)) // All attributes currently readonly
  {
    var sq1 = document.getElementById("square1");
    var sq2 = document.getElementById("square2");
    var sq3 = document.getElementById("square3");
    var sq4 = document.getElementById("square4");

    sq1.shape = "rect";
    sq2.shape = "rect";
    sq3.shape = "rect";
    sq4.shape = "rect";

    sq1.coords = "0,0,49,49";
    sq2.coords = "50,0,99,49";
    sq3.coords = "0,50,49,99";
    sq4.coords = "50,50,99,99";

    sq1.href = "javascript:go();";
    sq2.href = "javascript:alert('upper-right');";
    sq3.href = "javascript:alert('lower-left');";
    sq4.href = "javascript:alert('lower-right');";

    sq2.accessKey = "y";
    sq2.alt = "Alternative text"
    sq2.noHref = true;
    sq2.tabIndex = 4;
    sq3.target = "_blank"

    /* click the image */
    do_click('square1');
  }

} catch (e) { exception(e); }

testmodule_finished();
}

function testPopup()
{
	testmodule( "HTMLAreaElement", cvs );
	try
	{
		testcase("check written attributes");

		if(is_phase(2))
		{
			var sq1 = window.opener.document.getElementById('square1');
			var sq2 = window.opener.document.getElementById('square2');
			var sq3 = window.opener.document.getElementById('square3');
			var sq4 = window.opener.document.getElementById('square4');

			test("writable href #1", sq1.href, "javascript:go();");
			test("writable href #2", sq2.href, "javascript:alert('upper-right');");
			test("writable href #3", sq3.href, "javascript:alert('lower-left');");
			test("writable href #4", sq4.href, "javascript:alert('lower-right');");
			test("writable href #5", sq1.getAttribute('href'), "javascript:go();");
			test("writable href #6", sq2.getAttribute('href'), "javascript:alert('upper-right');");
			test("writable href #7", sq3.getAttribute('href'), "javascript:alert('lower-left');");
			test("writable href #8", sq4.getAttribute('href'), "javascript:alert('lower-right');");

			test("writable coords #1", sq1.coords, "0,0,49,49");
			test("writable coords #2", sq2.coords, "50,0,99,49");
			test("writable coords #3", sq3.coords, "0,50,49,99");
			test("writable coords #4", sq4.coords, "50,50,99,99");
			test("writable coords #5", sq1.getAttribute('coords'), "0,0,49,49");
			test("writable coords #6", sq2.getAttribute('coords'), "50,0,99,49");
			test("writable coords #7", sq3.getAttribute('coords'), "0,50,49,99");
			test("writable coords #8", sq4.getAttribute('coords'), "50,50,99,99");

			test("writable shape #1", sq1.shape, "rect");
			test("writable shape #2", sq2.shape, "rect");
			test("writable shape #3", sq3.shape, "rect");
			test("writable shape #4", sq4.shape, "rect");
			test("writable shape #5", sq1.getAttribute('shape'), "rect");
			test("writable shape #6", sq2.getAttribute('shape'), "rect");
			test("writable shape #7", sq3.getAttribute('shape'), "rect");
			test("writable shape #8", sq4.getAttribute('shape'), "rect");

			test("writable accesskey #1", sq2.accessKey, "y");
			test("writable accesskey #2", sq2.getAttribute('accessKey'), "y");
			test("writable alt #1", sq2.alt, "Alternative text");
			test("writable alt #2", sq2.getAttribute('alt'), "Alternative text");
			test("writable noHref #1", sq2.noHref, true);
			test("writable noHref #2", sq2.getAttribute('noHref'), "true");
			test("writable tabIndex #1", sq2.tabIndex, 4);
			test("writable tabIndex #2", sq2.getAttribute('tabIndex'), "4");
			test("writable target #1", sq3.target, "_blank");
			test("writable target #2", sq3.getAttribute('target'), "_blank");
		}

	} catch (e) { exception(e); }

	testmodule_finished();
}

function go()
{
	window.open("areaHelper.html", "areaHelper");
}

function do_click(target_id)
{
	var target = document.getElementById(target_id);
	var ev = document.createEvent('MouseEvents');
	ev.initMouseEvent('click', true, false, window, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
	target.dispatchEvent(ev);
}

/* eof */
