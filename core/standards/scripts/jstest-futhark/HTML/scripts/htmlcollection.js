/* Tests for DOM 2 Core 'DOMImplementation' object.
*/

var cvs = "$Id: htmlcollection.js 108182 2012-01-13 12:09:02Z sigbjornf $";


testmodule( "HTMLCollection", cvs );

try {
//  Use images as test of Collection
  var c = document.images;
  var i1 =  document.getElementById ("img1");
  var i2 =  document.getElementById ("img2");

  testcase( "object" );

  test("class",c,"[object HTMLCollection]");

  testcase( "properties exists" );

  tdef("length",c.length);

/*
  testcase( "property types" );

  testinstance("body" ,c.body, HTMLElement); // ???
*/

  testcase( "property values" );

  test("length",c.length,2);

  testcase( "properties are not writeable" );

  expect_readonly_exception( "length", function(){ "use strict"; c.length = 7;})
  test("length",c.length,2);

  testcase( "methods exist" );

  tdef("item",c.item);
  tdef("namedItem",c.namedItem);

  testcase( "methods" );

  var i = c.item(0);
  test("item(0)",i,i1);

  i = c.item(1);
  test("item(1)",i,i2);

  i = c.namedItem("img1");
  test("namedItem(name)",i,i1);

  i = c.namedItem("img2");
  test("namedItem(id)",i,i2);

  test("item equals namedItem",c.item(0),c.namedItem("img1"));
  test("item equals namedItem",c.item(1),c.namedItem("img2"));
  test("[]",c[0],i1);
  test("[]",c[1],i2);
  test("[name]",c["img1"],i1);
  test("[name]",c["img2"],i2);

} catch (e) { exception(e); }

testmodule_finished();

/* eof */
