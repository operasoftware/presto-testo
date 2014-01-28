/**
 * JavaScript
 * Sun object, js 1.3.
 *
 * 03.07.2001, torstein@opera.com
 * $Id: js_sun.js 46203 2009-05-13 09:48:38Z hallvord $
 *
 */
var tprop;

function main( windowObject )
{
   try
   {
      var cvs = "$Id: js_sun.js 46203 2009-05-13 09:48:38Z hallvord $";
      testmodule( "The Sun object", cvs );
      tdef('object is defined',windowObject.sun)
   }
   catch( e )
   {
      exception( e );
   }

   testmodule_finished();
}

