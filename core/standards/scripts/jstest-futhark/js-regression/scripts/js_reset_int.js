
/**
 * JavaScript
 * Reset object interactive part, js 1.3.
 *
 * 09.07.2001, torstein@opera.com
 * $Id:
 */

var cvs = "$Id: js_reset_int.js 10655 2006-12-18 15:47:57Z hallvord $";

function testClickMethod()
{
   try 
   {
      document.theform.thereset.click();
   }
   catch( e )
   {
      exception( e );
   }
}

function testBlurMethod()
{
   try 
   {
      document.theform.thereset.blur();
   }
   catch( e )
   {
      exception( e );
   }
}

function testFocusMethod()
{
   try 
   {
      document.theform.thereset.focus();
   }
   catch( e )
   {
      exception( e );
   }
}



