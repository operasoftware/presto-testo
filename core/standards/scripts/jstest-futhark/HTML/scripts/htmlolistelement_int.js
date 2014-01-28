/* Tests for reflow of DOM 2 HTML 'HTMLOListElement' object.

   Interactive version.
*/

var cvs = "$Id: htmlolistelement_int.js 10655 2006-12-18 15:47:57Z hallvord $";

function startHTMLOListElementInteractive()
{
   try {
  	if (is_phase(2))
  	{
  		testcase( "type property is writable" );

	   	var list = document.getElementById('myList');
		test("reflow #1", list.start, 1); // default value

		test("reflow #2", list.type, "");
		conf("reflow #3", "Do the list start with 1?");

		list.type = "a";
		test("reflow #4", list.type, "a");
		test("reflow #1", list.start, 1); // default value
		conf("reflow #5", "Do the list start with a?");

		list.type = "A";
		test("reflow #6", list.type, "A");
		conf("reflow #7", "Do the list start with A?");

		list.type = "i";
		test("reflow #8", list.type, "i");
		conf("reflow #9", "Do the list start with i?");

		list.type = "I";
		test("reflow #10", list.type, "I");
		conf("reflow #11", "Do the list start with I?");

		list.type = "1";
		test("reflow #12", list.type, "1");
		conf("reflow #13", "Do the list start with 1?");

  		testcase( "start property is writable" );

		list.type = "a";
		list.start = 5;
		test("reflow #14", list.type, "a");
		test("reflow #15", list.start, "5");
		conf("reflow #16", "Do the list start with e?");

		list.type = "A";
		list.start = 6;
		test("reflow #17", list.type, "A");
		test("reflow #18", list.start, "6");
		conf("reflow #19", "Do the list start with F?");

		list.type = "i";
		list.start = 7;
		test("reflow #20", list.type, "i");
		test("reflow #21", list.start, "7");
		conf("reflow #22", "Do the list start with vii?");

		list.type = "I";
		list.start = 8;
		test("reflow #23", list.type, "I");
		test("reflow #24", list.start, "8");
		conf("reflow #25", "Do the list start with VIII?");

		list.type = "1";
		list.start = 9;
		test("reflow #26", list.type, "1");
		test("reflow #27", list.start, "9");
		conf("reflow #28", "Do the list start with 9?");

	} 
	else
		alert("HTMLOListElement reflow tests are only for phase 2 implementation");

   } catch (e) { exception(e); }
}
