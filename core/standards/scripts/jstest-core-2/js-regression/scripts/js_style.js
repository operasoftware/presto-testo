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
      var cvs = "$Id: js_style.js 4838 2006-01-18 05:59:01Z hallvord $";
      testmodule( "The Style object", cvs );
   }
   catch( e )
   {
      exception( e );
   }

   testmodule_finished();
}

