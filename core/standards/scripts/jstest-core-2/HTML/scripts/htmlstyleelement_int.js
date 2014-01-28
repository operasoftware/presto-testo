/* Tests for reflow of DOM 2 HTML 'HTMLStyleElement' object.

   Interactive version.
*/

var cvs = "$Id: htmlstyleelement_int.js 4838 2006-01-18 05:59:01Z hallvord $";

function startHTMLStyleElementInteractiveDisabled()
{
   try {
  	if (is_phase(2))
  	{
  		testcase( "disabled property is writable" ); // style element is used

	   	var stylesheet_link = document.getElementById('myStyle');

		test("reflow disabled #1", stylesheet_link.disabled, false); // css is initially enabled
		conf("reflow disabled #2", "Is background coloured and header centered with border?");

		stylesheet_link.disabled=true; // css is disabled
		conf("reflow disabled #3", "Is style disabled (has background colour changed)?");

		stylesheet_link.disabled=false; // css is enabled
		conf("reflow disabled #4", "Is background coloured and header centered with border??");

		stylesheet_link.disabled="foo"; // css is disabled by conversion to true
		conf("reflow disabled #5", "Is style disabled (has background colour changed)?");

		stylesheet_link.disabled=0; // css is enabled by conversion to false
		conf("reflow disabled #6", "Is background coloured and header centered with border?");
	} 
	else
		alert("HTMLLinkElement reflow tests are only for phase 2 implementation");

   } catch (e) { exception(e); }
}

function startHTMLStyleElementInteractiveMedia()
{
   try {
  	if (is_phase(2))
  	{
   		testcase( "media property is writable" );

	   	var stylesheet_link = document.getElementById('myStyle');

		stylesheet_link.media = "all";
		test("reflow media #2", document.getElementById('myStyle').media, "all");

		conf("reflow media #3", "Is background coloured and header centered with border?");

		stylesheet_link.media = "print";
		test("reflow media #4", document.getElementById('myStyle').media, "print");

		conf("reflow media #5", "Has the background colour changed?");
	} 
	else
		alert("HTMLLinkElement reflow tests are only for phase 2 implementation");

   } catch (e) { exception(e); }
}

function startHTMLStyleElementInteractiveType()
{
   try {
  	if (is_phase(2))
  	{
  		testcase( "type property is writable" ); // style element is used

	   	var stylesheet_link = document.getElementById('myStyle');

		test("reflow type #1", stylesheet_link.disabled, false); // css is initially enabled
		conf("reflow type #2", "Is background coloured and header centered with border?");

		stylesheet_link.type="text/html"; // css is disabled
		test("reflow type #3", stylesheet_link.type, "text/html" );
		conf_expect_failure("reflow #4", "Is style disabled (has background colour changed)?", 113415);
	} 
	else
		alert("HTMLLinkElement reflow tests are only for phase 2 implementation");

   } catch (e) { exception(e); }
}


