/* Tests for DOM 2 Core 'DOMImplementation' object.
*/

var cvs = "$Id: htmlmodelement.js 4838 2006-01-18 05:59:01Z hallvord $";


testmodule( "HTMLmodElement", cvs );

try {

  var i1 = document.getElementById("myIns1");
  var i2 = document.getElementById("myIns2");
  var d1 = document.getElementById("myDel1");
  var d2 = document.getElementById("myDel2");
  
  var defcite = "";
  var deftime = "";
 	 
  testcase( "object" );

  test("class",i1,"[object HTMLModElement]");
  
  testcase( "properties exists" );

  tdef("cite",i1.cite);
  tdef("cite",i2.cite);
  tdef("cite",d1.cite);
  tdef("cite",d2.cite);
  tdef("dateTime",i1.dateTime);
  tdef("dateTime",i2.dateTime);
  tdef("dateTime",d1.dateTime);
  tdef("dateTime",d2.dateTime);
 
  testcase( "default property values" );
  
  test("cite",i1.cite,defcite);
  test("cite",d1.cite,defcite);
  test("dateTime",i1.dateTime,deftime);
  test("dateTime",d1.dateTime,deftime);
 

  testcase( "property values from attributes" );
  
  test("cite",i2.cite,"http://opera.com/");
  test("cite",d2.cite,"http://opera.no/");
  test("dateTime",i2.dateTime,"1994-11-05T13:15:30");
  test("dateTime",d2.dateTime,"1993-11-05T13:15:30");
 

  testcase( "properties are writable" );
  
  i2.cite = "http://www.def.org/";
  test("cite",i2.cite,"http://www.def.org/");
  d2.cite = "http://www.daf.org/";
  test("cite",d2.cite,"http://www.daf.org/");
  i2.dateTime = "1999-10-03T22:12:35";
  test("dateTime",i2.dateTime,"1999-10-03T22:12:35");
  d2.dateTime = "1989-11-03T12:12:15";
  test("dateTime",d2.dateTime,"1989-11-03T12:12:15");

} catch (e) { exception(e); }

testmodule_finished();

/* eof */
