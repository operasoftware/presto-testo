/**
 * JavaScript
 * Sun object, js 1.3.
 *
 * 03.07.2001, torstein@opera.com
 * $Id: js_sun.js 4838 2006-01-18 05:59:01Z hallvord $
 *
 */
var tprop;

function main( windowObject )
{
   try 
   {
      var cvs = "$Id: js_sun.js 4838 2006-01-18 05:59:01Z hallvord $";
      testmodule( "The Sun object", cvs );
   }
   catch( e )
   {
      exception( e );
   }

   testmodule_finished();
}

