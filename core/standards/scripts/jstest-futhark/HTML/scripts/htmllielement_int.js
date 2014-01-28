/* Tests for reflow of DOM 2 HTML 'HTMLLIElement' object.

   Interactive version.
*/

var cvs = "$Id: htmllielement_int.js 10655 2006-12-18 15:47:57Z hallvord $";

function startHTMLLIElementInteractive()
{
   try {
  	if (is_phase(2))
  	{
  		testcase( "type property is writable" );

	   	var li1 = document.getElementById('LI1');
	   	var li2 = document.getElementById('LI2');
	   	var li3 = document.getElementById('LI3');
		test("reflow #1", li1.type, ""); // default value
		test("reflow #2", li2.type, ""); // default value
		test("reflow #3", li3.type, ""); // default value

		conf("reflow #4", "Do the list contain 1,2,3?");

		li1.type = "a";
		test("reflow #5", li1.type, "a");
		li2.type = "a";
		test("reflow #6", li2.type, "a");
		li3.type = "a";
		test("reflow #7", li3.type, "a");
		conf("reflow #8", "Do the list contain a,b,c?");

		li1.type = "A";
		test("reflow #9", li1.type, "A");
		li2.type = "A";
		test("reflow #10", li2.type, "A");
		li3.type = "A";
		test("reflow #11", li3.type, "A");
		conf("reflow #12", "Do the list contain A,B,C?");

		li1.type = "i";
		test("reflow #13", li1.type, "i");
		li2.type = "i";
		test("reflow #14", li2.type, "i");
		li3.type = "i";
		test("reflow #15", li3.type, "i");
		conf("reflow #16", "Do the list contain i,ii,iii?");

		li1.type = "I";
		test("reflow #17", li1.type, "I");
		li2.type = "I";
		test("reflow #18", li2.type, "I");
		li3.type = "I";
		test("reflow #19", li3.type, "I");
		conf("reflow #20", "Do the list contain I,II,III?");

		li1.type = "1";
		test("reflow #21", li1.type, "1");
		li2.type = "1";
		test("reflow #22", li2.type, "1");
		li3.type = "1";
		test("reflow #23", li3.type, "1");
		conf("reflow #24", "Do the list contain 1,2,3?");

  		testcase( "value property is writable" );

		li1.type = "a";
		li2.type = "a";
		li3.type = "a";
		test("reflow #25", li1.type, "a");
		test("reflow #26", li2.type, "a");
		test("reflow #27", li3.type, "a");
		li1.value = 5;
		test("reflow #28", li1.value, "5");
		li3.value = 8;
		test("reflow #29", li3.value, "8");
		conf("reflow #30", "Do the list contain e,f,h?");

		li1.type = "A";
		li2.type = "A";
		li3.type = "A";
		test("reflow #31", li1.type, "A");
		test("reflow #32", li2.type, "A");
		test("reflow #33", li3.type, "A");
		li1.value = 6;
		test("reflow #34", li1.value, "6");
		li3.value = 9;
		test("reflow #35", li3.value, "9");
		conf("reflow #36", "Do the list contain F,G,I?");

		li1.type = "i";
		li2.type = "i";
		li3.type = "i";
		test("reflow #37", li1.type, "i");
		test("reflow #38", li2.type, "i");
		test("reflow #39", li3.type, "i");
		li1.value = 7;
		test("reflow #40", li1.value, "7");
		li3.value = 10;
		test("reflow #41", li3.value, "10");
		conf("reflow #42", "Do the list contain vii,viii,x?");

		li1.type = "I";
		li2.type = "I";
		li3.type = "I";
		test("reflow #43", li1.type, "I");
		test("reflow #44", li2.type, "I");
		test("reflow #45", li3.type, "I");
		li1.value = 8;
		test("reflow #46", li1.value, "8");
		li3.value = 11;
		test("reflow #47", li3.value, "11");
		conf("reflow #48", "Do the list contain VIII,IX, XI?");

		li1.type = "1";
		li2.type = "1";
		li3.type = "1";
		test("reflow #49", li1.type, "1");
		test("reflow #50", li2.type, "1");
		test("reflow #51", li3.type, "1");
		li1.value = 9;
		test("reflow #52", li1.value, "9");
		li3.value = 12;
		test("reflow #53", li3.value, "12");
		conf("reflow #54", "Do the list contain 9,10,12?");

		li1.type = "a";
		li2.type = "A";
		li3.type = "i";
		test("reflow #55", li1.type, "a");
		test("reflow #56", li2.type, "A");
		test("reflow #57", li3.type, "i");
		li1.value = 10;
		test("reflow #58", li1.value, "10");
		li2.value = 5;
		test("reflow #59", li2.value, "5");
		li3.value = 1;
		test("reflow #60", li3.value, "1");
		conf("reflow #61", "Do the list contain j,E,i?");

	} 
	else
		alert("HTMLLIElement reflow tests are only for phase 2 implementation");

   } catch (e) { exception(e); }
}
