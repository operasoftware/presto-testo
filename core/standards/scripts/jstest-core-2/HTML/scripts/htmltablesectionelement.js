/* Tests for DOM 2 Core 'DOMImplementation' object.
*/


var cvs = "$Id: htmltablesectionelement.js 4838 2006-01-18 05:59:01Z hallvord $";


testmodule( "HTMLTableSectionElement", cvs );

try {
  var tab1  = document.getElementById("myTableSection");
  var tab2  = document.getElementById("myTableSection2");
  var tab3  = document.getElementById("myTableSection3");
  var row   = document.getElementById("myRow");
  
  testcase( "object" );

  test("class thead",tab1,"[object HTMLTableSectionElement]");
  test("class tbody",tab2,"[object HTMLTableSectionElement]");
  test("class tfoot",tab3,"[object HTMLTableSectionElement]");

  testcase( "attribute object class" );

  test("rows",tab1.rows,"[object HTMLCollection]"); 
  
  testcase( "properties exists" );
  var tab = tab1;
 /*
  tdef("align",tab.align);
  tdef("vAlign",tab.vAlign);
  tdef("rows",tab.rows);
*/

  testcase( "read default property values" );
  tab = tab1;
  
  test("align",tab.align,"left");
  test("vAlign",tab.vAlign,"middle");
  if(tab.rows != undefined)
  {
    test("rows",tab.rows.length,0);
  }
 
  

  testcase( "properties exists, attributes in use" );
  var tab = tab2;
  
  tdef("align",tab.align);
  tdef("vAlign",tab.vAlign);
  tdef("rows",tab.rows);

  testcase( "read property values from attributes" );
  tab = tab2;
  
  test("align",tab.align,"right");
  test("vAlign",tab.vAlign,"top");
  if(tab.rows != undefined)
  {
    test("rows",tab.rows.length,1);
    test("rows",tab.rows[0],row);
  }
  testcase( "properties are writeable" );
  tab = tab2;
  
  tab.align="center";
  test("align",tab.align,"center");
  tab.vAlign="top";
  test("align",tab.vAlign,"top");


  testcase( "properties are not writeable" );

  var rows = tab.rows;
  expect_DOM_exception( "rows", DOMException.NO_MODIFICATION_ALLOWED_ERR, function(){tab.rows = null;} )
  test("rows",tab.rows,rows);
 
	
  testcase( "methods exist" );

  tdef("insertRow",tab.insertRow);
  tdef("deleteRow",tab.deleteRow);


  testcase( "insertRow" );


  if(tab2.insertRow != undefined)
  {
    trows = tab1.rows.length;
	cnew = tab1.insertRow(0);
    test("insertRow",cnew,tab1.rows[0]);
    test("insertRow",tab1.rows.length,trows+1);
    trows = tab2.rows.length;
    var cnew = tab2.insertRow(1);
    test("insertRow 2",cnew,tab2.rows[1]);
    test("insertRow 2",tab2.rows.length,trows+1);
    trows = tab2.rows.length;
    expect_DOM_exception("insertRow 3", DOMException.INDEX_SIZE_ERR, function(){tab2.insertRow(-2)} )
    expect_DOM_exception("insertRow 4", DOMException.INDEX_SIZE_ERR, function(){tab2.insertRow(trows+1)} )
    tab2.insertRow(-1);
    test("insertRow 5",tab2.rows.length,trows+1);
  }

  testcase( "deleteRow" );

  if(tab2.deleteRow != undefined)
  {
    var old1 = tab2.rows[1];
    trows = tab2.rows.length;
    tab2.deleteRow(0);
    test("deleteRow",tab2.rows.length,trows-1);
    test("deleteRow",tab2.rows[0],old1);
    trows = tab2.rows.length;
    expect_DOM_exception("deleteRow", DOMException.INDEX_SIZE_ERR, function(){tab2.deleteRow(-2)} )
    expect_DOM_exception("deleteRow", DOMException.INDEX_SIZE_ERR, function(){tab2.deleteRow(trows)} )
    tab2.deleteRow(-1);
    test("deleteRow",tab2.rows.length,trows-1);
  }


    
} catch (e) { exception(e); }


testmodule_finished();

/* eof */
