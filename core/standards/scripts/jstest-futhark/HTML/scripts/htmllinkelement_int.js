/* Tests for reflow of DOM 2 HTML 'HTMLLinkElement' object.

   Interactive version.
*/

var cvs = "$Id: htmllinkelement_int.js 10655 2006-12-18 15:47:57Z hallvord $";

function startHTMLLinkElementInteractiveDisabled()
{
   try {
        testcase( "disabled property is writable" ); // stylesheet link is used

   	var stylesheet_link = document.getElementById('myLinkStylesheet');

	test("reflow disabled #1", stylesheet_link.disabled, false); // css is initially enabled
	conf("reflow disabled #2", "Is the background coloured?");

	stylesheet_link.disabled=true; // css is disabled
	conf("reflow disabled #3", "Has the background colour changed?");

	stylesheet_link.disabled=false; // css is enabled
	conf("reflow disabled #4", "Has the background colour changed to green?");

	stylesheet_link.disabled="foo"; // css is disabled by conversion to true
	conf("reflow disabled #5", "Has the background colour changed?");

	stylesheet_link.disabled=0; // css is enabled by conversion to false
	conf("reflow disabled #6", "Has the background colour changed to green?");

	stylesheet_link.disabled=12345; // css is disabled by conversion to true
	conf("reflow disabled #7", "Has the background colour changed?");
   } catch (e) { exception(e); }
}

function startHTMLLinkElementInteractiveCharsetLocal()
{
   try {
  	testcase( "charset property is writable" ); // next (local file) link is used

	var next_link = document.getElementById('myLinkNext');

	test("reflow charset local #1", next_link.charset, "iso-8859-1");

	next_link.charset = "iso-8859-5";
	test("reflow charset local #2", next_link.charset, "iso-8859-5");	

	conf("reflow charset local #3", "Check if the content of Next link looks better now");
   } catch (e) { exception(e); }
}

function startHTMLLinkElementInteractiveCharsetRemote()
{
   try {
	testcase( "charset property is not writable" ); // contents (server file) link are used

	var contents_link = document.getElementById('myLinkContents');
	test("reflow charset remote #1", contents_link.charset, "iso-8859-1");
	expect_DOM_exception( "reflow charset remote #2", undefined,
		function(){ contents_link.charset = "iso-8859-5"; } );  // not allowed for link on different server
	test("reflow charset remote #3", document.getElementById('myLinkContents').charset, "iso-8859-1");	

	conf("reflow charset remote #4", "Check that the content of Contents link still looks the same");

	testcase( "charset property is not changed" ); // no change and no exception should be thrown

	var stylesheet_link = document.getElementById('myLinkStylesheet');
	test("reflow charset not changed #2", stylesheet_link.charset, ""); // default value
	stylesheet_link.charset = "";
	test("reflow charset not changed #3", stylesheet_link.charset, "");

	var index_link = document.getElementById('myLinkIndex');
	test("reflow charset not changed #4", index_link.charset, "iso-8859-5");
	index_link.charset = "iso-8859-5";
	test("reflow charset not changed #5", index_link.charset, "iso-8859-5");
   } catch (e) { exception(e); }
}

function startHTMLLinkElementInteractiveHref()
{
   try {
	testcase( "href property is writable" ); // index link is used

	var index_link = document.getElementById('myLinkIndex');

	index_link.href = "iso-2022-jp.html";

	test("reflow href #1", index_link.href, get_protocol_and_host() + get_modulepath("HTML","iso-2022-jp.html"));

	conf("reflow href #2", "Check if the content of Index has changed");	

	testcase( "hreflang property is writable" ); // not a reflow test, though

	test("reflow hreflang #1", document.getElementById('myLinkIndex').hreflang, "ru");
	index_link.hreflang = "jp";
	test("reflow hreflang #2", document.getElementById('myLinkIndex').hreflang, "jp");
   } catch (e) { exception(e); }
}

function startHTMLLinkElementInteractiveMedia()
{
   try {
	testcase( "media property is writable" ); // stylesheet link is used

   	var stylesheet_link = document.getElementById('myLinkStylesheet');

	stylesheet_link.disabled=false; // css is enabled
	conf("reflow media #1", "Is the background coloured?");

	stylesheet_link.media = "print";
	test("reflow media #2", document.getElementById('myLinkStylesheet').media, "print");
	conf("reflow media #3", "Has the background colour changed?");
   } catch (e) { exception(e); }
}

function startHTMLLinkElementInteractiveRel()
{
   try {
	testcase( "rel property is writable" ); // index link is used

	var index_link = document.getElementById('myLinkIndex');

	test("reflow rel #1", index_link.href, get_protocol_and_host() + get_modulepath("HTML","iso-2022-jp.html"));

	test("reflow rel #2", document.getElementById('myLinkIndex').rel, "index");
	index_link.rel = "help";
	test("reflow rel #3", document.getElementById('myLinkIndex').rel, "help");		

	conf("reflow rel #4", "Check if the content of Index now has changed to Help");	
   } catch (e) { exception(e); }
}

function startHTMLLinkElementInteractiveRev()
{
   try {
	testcase( "rev property is writable" ); // next link is used

	var next_link = document.getElementById('myLinkNext');

	test("reflow rev #1", document.getElementById('myLinkNext').rev, "prev");
	next_link.rev = "contents";
	test("reflow rel #2", document.getElementById('myLinkNext').rev, "contents");

	conf("reflow rel #4", "Check if the content of Next has changed link back to this site from Previous to Contents");	
   } catch (e) { exception(e); }
}

function startHTMLLinkElementInteractiveType()
{
   try {
	testcase( "type property is writable" ); // stylesheet link is used

   	var stylesheet_link = document.getElementById('myLinkStylesheet');

	conf("reflow type #1", "Is the background coloured?");

	stylesheet_link.type = "text/html";
	test("reflow type #2", document.getElementById('myLinkStylesheet').type, "text/html");
	conf_expect_failure("reflow type #3", "Has the background colour changed?", 113415);
   } catch (e) { exception(e); }
}
