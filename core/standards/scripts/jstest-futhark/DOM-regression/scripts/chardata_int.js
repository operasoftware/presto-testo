/* DOM 2 Core regression tests - Interactive */

var cvs = "$Id: chardata_int.js 10655 2006-12-18 15:47:57Z hallvord $";

/* reflow test */

function startReflowTests()
{
   var the_div = document.getElementById("div-foo");

   the_div.childNodes[0].firstChild.appendData( " DEF" );
   conf( "appendData reflow", "Do the text occur as ABC DEF ?" );

   var tmp = the_div.childNodes[0].firstChild.substringData ( 0, 3 );

   // Note that substringData do not change the original CharacterData object and no reflow is performed.
   the_div.childNodes[0].firstChild.insertData( 7, tmp );
   conf( "insertData reflow", "Do the text occur as ABC DEFABC ?" );
   the_div.childNodes[0].firstChild.deleteData( 7, 3 );
   conf( "deleteData reflow", "Do the text occur as ABC DEF ?" );
   the_div.firstChild.firstChild.replaceData( 4, 3, "GHI" );
   conf( "replaceData reflow", "Do the text occur as ABC GHI ?" );
}
