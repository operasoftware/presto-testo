/* Tests for DOM 2 Core 'DOMImplementation' object.
*/


var cvs = "$Id: htmltablecellelement.js 4838 2006-01-18 05:59:01Z hallvord $";


testmodule( "HTMLTableCellElement", cvs );

try {
  var tab1  = document.getElementById("myTable");
  var row   = document.getElementById("myRow");
  var cell1 = document.getElementById("myCell");
  var cell2 = document.getElementById("myCell2");

  testcase( "object" );

  test("class",cell1,"[object HTMLTableCellElement]");

  testcase( "properties exists" );
  var cell = cell1;

  tdef("cellIndex",cell.cellIndex);
  tdef("align",cell.align);
  tdef("axis",cell.axis);
  tdef("bgColor",cell.bgColor);
  tdef("colSpan",cell.colSpan);
  tdef("headers",cell.headers);
  tdef("height",cell.height);
  tdef("noWrap",cell.noWrap);
  tdef("rowSpan",cell.rowSpan);
  tdef("scope",cell.scope);
  tdef("vAlign",cell.vAlign);
  tdef("width",cell.width);
  tdef("abbr",cell.abbr);
  tdef("ch",cell.ch);
  tdef("chOff",cell.chOff);

  testcase( "read property values" );
  cell = cell1;

  test("cellIndex",cell.cellIndex,0);
  test("align",cell.align,"left");
  test("axis",cell.axis,"");
  test("bgColor",cell.bgColor,"");
  test("colSpan",cell.colSpan,1);
  test("headers",cell.headers,"");
  test("height",cell.height,"");
  test("noWrap",cell.noWrap,false);
  test("rowSpan",cell.rowSpan,1);
  test("scope",cell.scope,"");
  test("vAlign",cell.vAlign,"middle");
  test("width",cell.width,"");
  test("abbr",cell.abbr,"");
  var ch = ".";
  if(row.lang == "fr") ch = ",";
  test("ch",row.ch,ch);
  test("chOff",cell.chOff,"");

  testcase( "properties exists, attributes in use" );
  var cell = cell2;

  tdef("cellIndex",cell.cellIndex);
  tdef("align",cell.align);
  tdef("axis",cell.axis);
  tdef("bgColor",cell.bgColor);
  tdef("colSpan",cell.colSpan);
  tdef("headers",cell.headers);
  tdef("height",cell.height);
  tdef("noWrap",cell.noWrap);
  tdef("rowSpan",cell.rowSpan);
  tdef("scope",cell.scope);
  tdef("vAlign",cell.vAlign);
  tdef("width",cell.width);
  tdef("abbr",cell.abbr);
  tdef("ch",cell.ch);
  tdef("chOff",cell.chOff);

  testcase( "read property values from attributes" );
  cell = cell2;

  test("cellIndex",cell.cellIndex,1);
  test("align",cell.align,"right");
  test("axis",cell.axis,"myCell");
  test("bgColor",cell.bgColor,"red");
  test("colSpan",cell.colSpan,2);
  test("headers",cell.headers,"myHead");
  test("height",cell.height,"20");
  test("noWrap",cell.noWrap,true);
  test("rowSpan",cell.rowSpan,2);
  test("scope",cell.scope,"col");
  test("vAlign",cell.vAlign,"top");
  test("width",cell.width,"4%");

  test("abbr",cell.abbr,"kort");
  test("ch",cell.ch,"-");
  test("chOff",cell.chOff,"1");

  testcase( "properties are writeable" );
  cell = cell2;

  cell.align="center";
  test("align",cell.align,"center");
  cell.bgColor="Blue";
  test_insensitive("bgColor",cell.bgColor,"blue");
  cell.bgColor="#00f00f";
  test("bgColor",cell.bgColor,"#00f00f");
  cell.vAlign="bottom";
  test("vAlign",cell.vAlign,"bottom");

  cell.axis="myCell2";
  test("axis",cell.axis,"myCell2");
  cell.colSpan="3";
  test("colSpan",cell.colSpan,3);
  cell.headers="myCell";
  test("headers",cell.headers,"myCell");
  cell.height="300";
  test("height",cell.height,"300");
  cell.noWrap=false;
  test("noWrap",cell.noWrap,false);
  cell.rowSpan=3;
  test("rowSpan",cell.rowSpan,3);
  cell.scope="row";
  test("scope",cell.scope,"row");
  cell.width="50";
  test("width",cell.width,"50");

  cell.abbr="lang";
  test("abbr",cell.abbr,"lang");
  cell.ch="+";
  test("ch",cell.ch,"+");
  cell.chOff="5";
  test("chOff",cell.chOff,"5");

  testcase( "properties are not writeable" );

  var cellIndex = cell.cellIndex;
  expect_DOM_exception( "cellIndex", DOMException.NO_MODIFICATION_ALLOWED_ERR, function(){cell.cellIndex = 7;} )
  test("cellIndex",cell.cellIndex,cellIndex);
	

} catch (e) { exception(e); }


testmodule_finished();

/* eof */
