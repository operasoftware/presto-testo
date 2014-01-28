/* Tests for DOM 2 HTML 'Title' object.
*/

var cvs = "$Id: htmltitleelement.js 4838 2006-01-18 05:59:01Z hallvord $";


testmodule( "HTMLTitleElement", cvs );

try {

  var e1 = document.getElementById("myTitle");

  testcase( "object" );

  test("class",e1,"[object HTMLTitleElement]");
   
  testcase( "properties exists" );
  
  var e = e1;
  tdef("text",e.text);
 

  testcase( "property values" );
  
  test("text",e.text,"DOM 2 HTML TitleElement");
  

  if(is_phase(2)) // These properies ar currently readonly
  {

  testcase( "properties are writable" );
  
  e.text = "Alternative title"
  test("text",e.text,"Alternative title");

  e.removeChild(e.firstChild);
  test("text is empty", e.text, "");

  e.text = "New title";
  test("text is ", e.text, "New title");
  }
  
} catch (e) { exception(e); }

testmodule_finished();

/* eof */
