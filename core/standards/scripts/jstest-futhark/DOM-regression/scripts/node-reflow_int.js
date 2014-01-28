/* Tests for reflow of DOM 2 Core 'Node' object.

   Interactive version.
*/

var cvs = "$Id: node-reflow_int.js 10655 2006-12-18 15:47:57Z hallvord $";

function startNodeReflowInteractiveTests()
{

   try {

      the_div = document.getElementById("div-foo");
      var kidNumber = the_div.childNodes.length;

      for (var i = kidNumber - 1; i >= 0; i--)
      {
         var c = the_div.removeChild( the_div.childNodes[i] );
         the_div.appendChild( c );
      }
 
      conf( "reflow #1" , "Do the elements occur as C B A ?" );

      the_div.insertBefore( the_div.childNodes[2], the_div.childNodes[1] );
      conf( "reflow #2", "Do the elements occur as C A B ?" );

      the_div.replaceChild( the_div.childNodes[2], the_div.childNodes[1] );

      for (var i = the_div.childNodes.length - 1; i >= 0; i--)
      {
         var c = the_div.removeChild( the_div.childNodes[i] );
         the_div.appendChild( c );
      }

      conf( "reflow #3", "Do the elements occur as B C ?" );

      var the_text = document.createTextNode("ADD");
      the_div.appendChild( the_text );

      conf( "reflow #9", "Do the elements occur as B C ADD?" );
      the_div.lastChild.splitText( 1 );
      conf( "reflow #12", "Do the elements occur as B C ADD?" );

      the_div.normalize();

      conf( "reflow #14", "Do the elements occur as B C ADD?" );

   } catch (e) { exception( e ); }
}
   /* eof */
