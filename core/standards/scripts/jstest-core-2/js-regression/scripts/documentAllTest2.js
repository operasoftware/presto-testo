/* Tests for DOM 2 Core 'DOMImplementation' object.
*/

var cvs = "$Id: documentAllTest2.js 4838 2006-01-18 05:59:01Z hallvord $";

function isCollection(c)
{
  return isDefined(c.length) && isDefined(c.item) && isDefined(c.namedItem);
}


testmodule( "document.all", cvs );

try 
{
  testcase( "init" );

  inputs = document.getElementsByTagName("input");
  div_en = document.getElementById("div1");

  testcase( "collections extracted from document.all" );

  testOut(isCollection(document.all), "all is a collection");
  testOut(isCollection(document.all.id1), "all with multiple identical ids is a collection");
  
  testOut(isCollection(document.all.name1), "all with multiple identical names is a collection");
  testOut(isCollection(document.all["id1"]), "all[] with multiple identical ids is a collection");
  testOut(isCollection(document.all["name1"]), "all[] with multiple identical names is a collection");

  test("document.all.id1.length",document.all.id1.length,2);
  test("document.all.name1.length",document.all.name1.length,2);
  test("document.all['id1'].length",document.all["id1"].length,2);
  test("document.all['name1'].length",document.all["name1"].length,2);

  testcase( "elements fetched from subcollections of document.all" );

  test("document.all.id1[0]",document.all.id1[0],inputs[0]);
  test("document.all.id1[1]",document.all.id1[1],inputs[2]);
  test("document.all.name1[0]",document.all.name1[0],inputs[3]);
  test("document.all.name1[1]",document.all.name1[1],inputs[5]);

  test("document.all['id1'][0]",document.all['id1'][0],inputs[0]);
  test("document.all['id1'][1]",document.all['id1'][1],inputs[2]);
  test("document.all['name1'][0]",document.all['name1'][0],inputs[3]);
  test("document.all['name1'][1]",document.all['name1'][1],inputs[5]);

  testcase( "elements fetched from document.all" );

  testOut(!isCollection(document.all.id2), "all with uniqe id is not a collection");
  testOut(!isCollection(document.all.name2), "all with uniqe name is not a collection");
  testOut(!isCollection(document.all["id2"]), "all[] with uniqe id is not a collection");
  testOut(!isCollection(document.all["name2"]), "all[] with uniqe name is not a collection");

  test("document.all.id2",document.all.id2,inputs[1]);
  test("document.all.name2",document.all.name2,inputs[4]);
  test("document.all['id2']",document.all['id2'],inputs[1]);
  test("document.all['name2']",document.all["name2"],inputs[4]);
  
  testOut(!isCollection(document.all.div1), "all with uniqe div.id is not a collection");
  test("document.all['div1']",document.all["div1"],div_en);
 
  testcase( "traverse subcollections of document.all" );

  meny_u = document.all("Menu");

  test("document.all('Menu').length",meny_u.length,6);

  test("meny_u[0].className",meny_u[0].className, "id_upper"  );
  test("meny_u[1].className",meny_u[1].className, "id_lower"  );
  test("meny_u[2].className",meny_u[2].className, "id_upper_form"  );
  test("meny_u[3].className",meny_u[3].className, "id_lower_form"  );
  test("meny_u[4].className",meny_u[4].className, "nm_upper_form"  );
  test("meny_u[5].className",meny_u[5].className, "nm_lower_form"  );
    
  testcase( "properies are writable" );

 

 

  testcase( "test methods" );
  



  
} catch (e) { exception(e); }

testmodule_finished();

/* eof */
