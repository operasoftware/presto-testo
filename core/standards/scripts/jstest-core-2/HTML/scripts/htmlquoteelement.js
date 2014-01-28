/* Tests for DOM 2 Core 'DOMImplementation' object.
*/

var cvs = "$Id: htmlquoteelement.js 4838 2006-01-18 05:59:01Z hallvord $";


testmodule( "HTMLQuoteElement", cvs );

try {

  var q1 = document.getElementById("myQ1");
  var q2 = document.getElementById("myQ2");
  var bq1 = document.getElementById("myBlockQuote1");
  var bq2 = document.getElementById("myBlockQuote2");
  
  var defcite=""; 

  testcase( "object" );

  test("class",q1,"[object HTMLQuoteElement]");
  	 
  testcase( "properties exists" );
  
  tdef("cite",q1.cite);
  tdef("cite",bq1.cite);
 
  testcase( "default property values" );
  
  test("cite",q1.cite,defcite);
  test("cite",bq1.cite,defcite);
 

  testcase( "property values from attributes" );
  
  test("cite",q2.cite,"http://www.vg.no/");
  test("cite",bq2.cite,"http://www.w3.org/");
 

  if(is_phase(2))
  {
    testcase( "properties are writable" );
  
    q2.cite = "http://www.opera.no/"; 
    test("cite",q2.cite,"http://www.opera.no/");
    bq2.cite = "http://www.opera.com/";
    test("cite",bq2.cite,"http://www.opera.com/");
  }
} catch (e) { exception(e); }

testmodule_finished();

/* eof */
