/* Tests for DOM 2 Core 'DOMImplementation' object.
*/


var cvs = "$Id: htmltableelement.js 4838 2006-01-18 05:59:01Z hallvord $";


testmodule( "HTMLTableElement", cvs );

try {
  var tab1  = document.getElementById("myTable");
  var tab2  = document.getElementById("myTable2");
  
  testcase( "object" );

  test("class",tab1,"[object HTMLTableElement]");
  
  testcase( "attribute object class" );

  test("rows",tab1.rows,"[object HTMLCollection]");
  test("tBodies",tab1.tBodies,"[object HTMLCollection]");
  
  testcase( "properties exists" );
  var tab = tab1;
  
  tdef("caption",tab.caption);
  tdef("tHead",tab.tHead);
  tdef("tFoot",tab.tFoot);
  tdef("rows",tab.rows);
  tdef("tBodies",tab.tBodies);
  tdef("align",tab.align);
  tdef("bgColor",tab.bgColor);
  tdef("border",tab.border);
  tdef("cellPadding",tab.cellPadding);
  tdef("cellSpacing",tab.cellSpacing);
  tdef("frame",tab.frame);
  tdef("rules",tab.rules);
  tdef("summary",tab.summary);
  tdef("width",tab.width);
  test("tBodies", tab.tBodies, "[object HTMLCollection]");
  
  testcase( "read property values" );
  tab = tab1;
  
  test("caption",tab.caption,null);
  test("tHead",tab.tHead,null);
  test("tFoot",tab.tFoot,null);
//  test("rows",tab.rows.length,0);
//  test("tBodies",tab.tBodies.length,0);
  test("align",tab.align,"");
  test("bgColor",tab.bgColor,"");
  test("cellPadding",tab.cellPadding,"");
  test("cellSpacing",tab.cellSpacing,"");
  test("frame",tab.frame,"");
  test("rules",tab.rules,"");
  test("summary",tab.summary,"");
  test("width",tab.width,"");
  

  testcase( "properties exists, attributes in use" );
  var tab = tab2;
  
  tdef("caption",tab.caption);
  tdef("tHead",tab.tHead);
  tdef("tFoot",tab.tFoot);
  tdef("rows",tab.rows);
  tdef("tBodies",tab.tBodies);
  tdef("align",tab.align);
  tdef("bgColor",tab.bgColor);
  tdef("border",tab.border);
  tdef("cellPadding",tab.cellPadding);
  tdef("cellSpacing",tab.cellSpacing);
  tdef("frame",tab.frame);
  tdef("rules",tab.rules);
  tdef("summary",tab.summary);
  tdef("width",tab.width);

  testcase( "read property values from attributes" );
  tab = tab2;
  
  if(tab.caption != undefined)
    test("caption",tab.caption.align,"left");
  if(tab.tHead != undefined)
    test("tHead",tab.tHead.rows.length,1);
  if(tab.tFoot != undefined)
    test("tFoot",tab.tFoot.rows.length,1);
  if(tab.rows != undefined)
    test("rows",tab.rows.length,3);
  if(tab.tBodies != undefined)
    test("tBodies",tab.tBodies.length,1);
  test("align",tab.align,"right");
  test("bgColor",tab.bgColor,"red");
  test("cellPadding",tab.cellPadding,"1");
  test("cellSpacing",tab.cellSpacing,"1");
  test("frame",tab.frame,"below");
  test("rules",tab.rules,"rows");
  test("summary",tab.summary,"summary");
  test("width",tab.width,"100%");

  
  testcase( "properties are writeable" );
  tab = tab2;
  
  var newCaption = 	document.createElement ("caption");
  var cap = tab.caption; tab.caption = newCaption;
  test("caption",tab.caption,newCaption);
  tab.caption = cap;
  test("caption",tab.caption,cap);
  
  var newHead = 	document.createElement ("thead");
  var temp = tab.tHead; tab.tHead = newHead;
  test("tHead",tab.tHead,newHead);
  tab.tHead = temp;
  test("tHead",tab.tHead,temp);

  var newFoot = 	document.createElement ("tfoot");
  temp = tab.tFoot; tab.tFoot = newFoot;
  test("tFoot",tab.tFoot,newFoot);
  tab.tFoot = temp;
  test("tFoot",tab.tFoot,temp);

//  tab.align="center";
//  test("align",tab.align,"center");
  tab.bgColor="blue";
  test_insensitive("bgColor",tab.bgColor,"blue");
  tab.cellPadding="3";
  test("cellPadding",tab.cellPadding,"3");
  tab.cellSpacing="4";
  test("cellSpacing",tab.cellSpacing,"4");
  tab.cellPadding="2";
  test("cellPadding",tab.cellPadding,"2");
  tab.cellSpacing="5";
  test("cellSpacing",tab.cellSpacing,"5");
  tab.frame="above";
  test("frame",tab.frame,"above");
  tab.rules="groups";
  test("rules",tab.rules,"groups");
  tab.summary="sum";
  test("summary",tab.summary,"sum");
  tab.width="200";
  test("width",tab.width,"200");
  tab.width="50%";
  test("width",tab.width,"50%");


  testcase( "properties are not writeable" );

  var rows = tab.rows;
  expect_DOM_exception( "rows", DOMException.NO_MODIFICATION_ALLOWED_ERR, function(){tab.rows = null;} )
  test("rows",tab.rows,rows);
  var tB = tab.tBodies;
  expect_DOM_exception( "tBodies", DOMException.NO_MODIFICATION_ALLOWED_ERR, function(){tab.tBodies = null;} )
  test("tBodies",tab.tBodies,tB);

  testcase( "setting illegal values causing exception" );

  var elm = document.createElement('div');
  expect_DOM_exception("set caption", DOMException.HIERARCHY_REQUEST_ERR, function(){tab.caption = elm;});
  expect_DOM_exception("set tHead", DOMException.HIERARCHY_REQUEST_ERR, function(){tab.tHead = elm;});
  expect_DOM_exception("set tFoot", DOMException.HIERARCHY_REQUEST_ERR, function(){tab.tFoot = elm;});

  testcase( "methods exist" );

  tdef("createTHead",tab.createTHead);
  tdef("deleteTHead",tab.deleteTHead);
  tdef("createTFoot",tab.createTFoot);
  tdef("deleteTFoot",tab.deleteTFoot);
  tdef("createCaption",tab.createCaption);
  tdef("deleteCaption",tab.deleteCaption);
  tdef("insertRow",tab.insertRow);
  tdef("deleteRow",tab.deleteRow);


  testcase( "methods" );
 
  if(tab2.createTHead != undefined)
  {
    var thold = tab2.tHead;
    var thnew = tab2.createTHead();  // Should return existing head
    test("createTHead",thnew,thold);
	testnot("createTHead",thnew,null);
	thnew = tab1.createTHead();     // Should create new head
    test("createTHead",thnew,tab1.tHead);
	testnot("createTHead",thnew,null);
  }
  if(tab2.deleteTHead != undefined)
  {
    var trows = tab2.rows.length;
    tab2.deleteTHead();
    test("deleteTHead",tab2.rows.length,trows-1);
    test("deleteTHead",tab2.tHead,null);
  }
  if(tab2.createTFoot != undefined)
  {
    var tfold = tab2.tFoot;
    var tfnew = tab2.createTFoot();
    test("createTFoot",tfnew,tfold);
	testnot("createTFoot",tfnew,null);
	tfnew = tab1.createTFoot();
    test("createTFoot",tfnew,tab1.tFoot);
	testnot("createTFoot",tfnew,null);
  }
  if(tab2.deleteTFoot != undefined)
  {
    trows = tab2.rows.length;
    tab2.deleteTFoot();
    test("deleteTFoot",tab2.rows.length,trows-1);
    test("deleteTFoot",tab2.tFoot,null);
  }
  if(tab2.createCaption != undefined)
  {
    var cold = tab2.caption;
    var cnew = tab2.createCaption();
    test("createCaption",cnew,cold);
	testnot("createCaption",cnew,null);
	cnew = tab1.createCaption();
    test("createCaption",cnew,tab1.caption);
	testnot("createCaption",cnew,null);
  }
  if(tab2.deleteCaption != undefined)
  {
    tab2.deleteCaption();
    test("deleteCaption",tab2.caption,null);
  }
  if(tab2.insertRow != undefined)
  {
    trows = tab2.rows.length;
    var cnew = tab2.insertRow(0);
    test("insertRow",cnew,tab2.rows[0]);
    test("insertRow",tab2.rows.length,trows+1);
    trows = tab1.rows.length;
	cnew = tab1.insertRow(0);
    test("insertRow",cnew,tab1.rows[0]);
    test("insertRow",tab1.rows.length,trows+1);
    trows = tab2.rows.length;
    tab2.insertRow(-1);
    test("insertRow",tab2.rows.length,trows+1);
    trows = tab2.rows.length;
    expect_DOM_exception("insertRow", DOMException.INDEX_SIZE_ERR, function(){tab2.insertRow(-2)});
    expect_DOM_exception("insertRow", DOMException.INDEX_SIZE_ERR, function(){tab2.insertRow(trows+1)});
  }
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
