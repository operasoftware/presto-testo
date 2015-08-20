/* Tests for DOM 2 Core 'DOMImplementation' object.
*/


var cvs = "$Id: htmltablerowelement.js 4838 2006-01-18 05:59:01Z hallvord $";


testmodule( "HTMLTableRowElement", cvs );

try {
  var tab1  = document.getElementById("myTable");
  var row1  = document.getElementById("myRow");
  var row2  = document.getElementById("myRow2");

  testcase( "object" );

  test("class",row1,"[object HTMLTableRowElement]");

  testcase( "attribute object class" );

  test("cells",row1.cells,"[object HTMLCollection]");

  testcase( "properties exists" );
  var row = row1;

  tdef("rowIndex",row.rowIndex);
  tdef("sectionRowIndex",row.sectionRowIndex);
  tdef("cells",row.cells);
  tdef("align",row.align);
  tdef("bgColor",row.bgColor);
  test("regression test for bug #112550",row,"[object HTMLTableRowElement]");

  if(is_phase(2))
  {
    tdef("ch",row.ch);
    tdef("chOff",row.chOff);
  }

  tdef("vAlign",row.vAlign);

  testcase( "read property values" );
  row = row1;

  var defalign = "left";
  if(row.dir == "rtl")
    defalign = "right";

  test("rowIndex",row.rowIndex,2);
  test("sectionRowIndex",row.sectionRowIndex,0);
  test("cells",row.cells.length,1);
  test("align",row.align,defalign);
  test("bgColor",row.bgColor,"");

  if(is_phase(2))
  {
    var ch = undefined;
    if(row.lang == "fr") ch = ",";
    if(row.lang == "en") ch = ".";
    //test("ch",row.ch,ch);
    test("ch",row.ch,".");
    test("chOff",row.chOff,"");
  }

  test("vAlign",row.vAlign,"middle");


  testcase( "properties exists, attributes in use" );
  var row = row2;

  tdef("rowIndex",row.rowIndex);
  tdef("sectionRowIndex",row.sectionRowIndex);
  tdef("cells",row.cells);
  tdef("align",row.align);
  tdef("bgColor",row.bgColor);
  if(is_phase(2))
  {
    tdef("ch",row.ch);
    tdef("chOff",row.chOff);
  }
  tdef("vAlign",row.vAlign);

  testcase( "read property values from attributes" );
  row = row2;

  test("rowIndex",row.rowIndex,3);
  test("sectionRowIndex",row.sectionRowIndex,1);
  test("cells",row.cells.length,1);
  test("align",row.align,"right");
  test("bgColor",row.bgColor,"red");
  if(is_phase(2))
  {
    test("ch",row.ch,"-");
    test("chOff",row.chOff,"1");
    test("vAlign",row.vAlign,"top");
  }

  testcase( "properties are writeable" );
  row = row2;

  row.align="center";
  test("align",row.align,"center");
  row.bgColor="blue";
  test("bgColor",row.bgColor,"blue");
  if(is_phase(2))
  {
    row.ch="+";
    test("ch",row.ch,"+");
    row.chOff="2";
    test("chOff",row.chOff,"2");
    row.chOff="3%";
    test("chOff",row.chOff,"3");
  }
  row.vAlign="bottom";
  test("vAlign",row.vAlign,"bottom");

  testcase( "properties are not writeable" );

  var rowIndex = row.rowIndex;
  expect_DOM_exception( "rowIndex", DOMException.NO_MODIFICATION_ALLOWED_ERR, function(){row.rowIndex = 7;} )
  test("rowIndex",row.rowIndex,rowIndex);
  var tri = row.sectionRowIndex;
  expect_DOM_exception( "sectionRowIndex", DOMException.NO_MODIFICATION_ALLOWED_ERR, function(){row.sectionRowIndex = 9;} )
  test("sectionRowIndex",row.sectionRowIndex,tri);
  var cells = row.cells;
  expect_DOM_exception( "cells", DOMException.NO_MODIFICATION_ALLOWED_ERR, function(){row.cells = document.images;} )
  test("cells",row.cells,cells);
	
  testcase( "methods exist" );

  tdef("insertCell",row.insertCell);
  tdef("deleteCell",row.deleteCell);


  testcase( "methods" );

  if(row2.insertCell != undefined)
  {
    var cnew = row2.insertCell(0);
    test("insertCell",cnew,row2.cells[0]);
	cnew = row1.insertCell(0);
    test("insertCell",cnew,row1.cells[0]);
	
    expect_DOM_exception( "insertCell", DOMException.INDEX_SIZE_ERR, function(){row1.insertCell(7)} )

    var cellcount = row2.cells.length;
    cnew = row2.insertCell(-1);
    test("insertCell",row2.cells[cellcount], cnew);
  }
  if(row2.deleteCell != undefined)
  {
    var cell1 = row2.cells[1];
    cells = row2.cells.length;
    row2.deleteCell(0);
    test("deleteCell",row2.cells.length,cells-1);
    test("deleteCell",row2.cells[0],cell1);
	
    expect_DOM_exception( "deleteCell", DOMException.INDEX_SIZE_ERR, function(){row1.deleteCell(7)} )

    cells = row2.cells.length;
    row2.deleteCell(-1);
    test("deleteCell",row2.cells.length,cells-1);
  }

  testcase( "default attribute values" );

  var td = document.getElementsByTagName('TD').item(0);
  tdef("TD colspan #1", td);

  var tdattr = td.getAttributeNode('colspan');
  tdef("TD colspan #2", tdattr);
  test("TD colspan #3", tdattr.specified, false);
  test("TD colspan #4", tdattr.value, 1);

  tdattr = td.getAttributeNode('rowspan');
  tdef("TD rowspan #2", tdattr);
  test("TD rowspan #3", tdattr.specified, false);
  test("TD rowspan #4", tdattr.value, 1);

  var th = document.getElementsByTagName('TH').item(0);
  tdef("TH colspan #1", th);

  var thattr = th.getAttributeNode('colspan');
  tdef("TH colspan #2", thattr);
  test("TH colspan #3", thattr.specified, false);
  test("TH colspan #4", thattr.value, 1);

  thattr = th.getAttributeNode('rowspan');
  tdef("TD rowspan #2", thattr);
  test("TD rowspan #3", thattr.specified, false);
  test("TD rowspan #4", thattr.value, 1);

  th.removeAttributeNode(thattr);

} catch (e) { exception(e); }


testmodule_finished();

/* eof */
