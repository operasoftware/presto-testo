/**
 * JavaScript
 * Style object, js 1.3.
 *
 * 03.07.2001, torstein@opera.com
 * $Id:
 */

function main( win )
{
   try 
   {
      var cvs = "$Id: js_style.js 10655 2006-12-18 15:47:57Z hallvord $";
      testmodule( "The Style object", cvs );
   }
   catch( e )
   {
      exception( e );
   }

   testmodule_finished();
}

