/* Tests for DOM 2 HTML 'HTMLTableColElement' object.
*/


var cvs = "$Id: htmltablecolelement.js 4838 2006-01-18 05:59:01Z hallvord $";


testmodule( "HTMLTableColElement", cvs );

try {
  var tab1  = document.getElementById("myTable");
  var col1  = document.getElementById("myCol");
  var col2  = document.getElementById("myCol2");
  
  testcase( "object" );

  test("class",col1,"[object HTMLTableColElement]");
  
  testcase( "properties exists" );
  var col = col1;
  
  tdef("align",col.align);
  if(is_phase(2))
  {
    tdef("ch",col.ch);
    tdef("chOff",col.chOff);
  }
  tdef("span",col.span);
  tdef("vAlign",col.vAlign);
  tdef("width",col.width);
  
  testcase( "read property values" );
  col = col1;
  
  var defalign = "left";
  if(col.dir == "rtl")
    defalign = "right";

  test("align",col.align,defalign);
  if(is_phase(2))
  {
    var ch = undefined;
    if(col.lang == "fr") ch = ",";
    if(col.lang == "en") ch = ".";
    test("ch",col.ch,ch);
    test("chOff",col.chOff,"");
  }
  test("span",col.span,1);
  test("vAlign",col.vAlign,"middle");
  test("width",col.width,"");
  

  testcase( "read property values from attributes" );
  col = col2;
  
  test("align",col.align,"right");
  if(is_phase(2))
  {
    test("ch",col.ch,"-");
    test("chOff",col.chOff,"1%");
  }
  test("span",col.span,2);
  test("vAlign",col.vAlign,"top");
  test("width",col.width,"50");

  test("regression test for bug #76434 testcase 350", col.attributes.getNamedItem('char').value, "-");
  test("regression test for bug #76434 testcase 352", col.attributes.getNamedItem('charoff').value, "1%");
  test("regression test for bug #76434 testcase 355", col.attributes.getNamedItem('span').value, 2);
  
  testcase( "properties are writeable" );
  col = col2;

  col.align="center";
  test("align",col.align,"center");
  if(is_phase(2))
  {
    col.ch="+";
    test("ch",col.ch,"+");
    col.chOff="2";
    test("chOff",col.chOff,"2");
    col.chOff="3%";
    test("chOff",col.chOff,"3%");
  }
  col.span=3;
  test("span",col.span,3);
  col.vAlign="bottom";
  test("vAlign",col.vAlign,"bottom");
  col.width="20";
  test("width",col.width,"20");

} catch (e) { exception(e); }


testmodule_finished();

/* eof */
