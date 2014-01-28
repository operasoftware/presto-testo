/* Tests for DOM 2 Core 'DOMImplementation' object.
*/

var cvs = "$Id: htmlbrelement.js 10655 2006-12-18 15:47:57Z hallvord $";


testmodule( "HTMLBrElement", cvs );

try {

  var b1 = document.getElementById("myBr1");
  var b2 = document.getElementById("myBr2");
  var b  = b1;

  testcase( "object" );

  test("class",b,"[object HTMLBRElement]");

  var defclear = "";
 	 
  testcase( "properties exists" );
  
  tdef("clear",b.clear);
     
  testcase( "default property values" );
  
  test("clear",b.clear,defclear);
 

  b = b2;
  testcase( "property values from attributes" );
  
  test("clear",b.clear,"right");
 

  testcase( "properties are writable" );
  
  b.clear = "all";
  test("clear",b.clear,"all");

  if (is_phase(2))
  {
    var span_elm = document.getElementById('sp1');
    var br_elm = document.getElementById('myBr3');
    var img_elm = document.getElementById('img1');

    var less = (span_elm.offsetTop < (img_elm.offsetTop + img_elm.offsetHeight));
    ttrue("clear #1", less);

    br_elm.clear = "right";
    test("clear #2", span_elm.offsetTop, img_elm.offsetTop + img_elm.offsetHeight);
  }

} catch (e) { exception(e); }

testmodule_finished();

/* eof */
