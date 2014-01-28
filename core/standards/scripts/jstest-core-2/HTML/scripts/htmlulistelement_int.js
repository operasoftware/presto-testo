/* Tests for reflow of DOM 2 HTML 'HTMLUListElement' object.

   Interactive version.
*/

var cvs = "$Id: htmlulistelement_int.js 4838 2006-01-18 05:59:01Z hallvord $";

function startHTMLUListElementInteractiveType()
{
   try {
	testcase( "type property is writable" );

   	var list = document.getElementById('myList');

	test("reflow type #1", list.type, "");
	conf("reflow type #2", "Do you see filled-in circles?");

	list.type = "square";
	test("reflow type #3", list.type, "square");
	conf("reflow disabled #4", "Do you see squares?");

	list.type = "circle";
	test("reflow type #5", list.type, "circle");
	conf("reflow disabled #6", "Do you see circle outlines?");

	list.type = "disc";
	test("reflow type #7", list.type, "disc");
	conf("reflow disabled #8", "Do you see filled-in circles?");
   } catch (e) { exception(e); }
}

