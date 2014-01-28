
/**
 * JavaScript
 * Radio object interactive part, js 1.3.
 *
 * 09.07.2001, torstein@opera.com
 */

var cvs = "$Id: js_radio_int.js 10655 2006-12-18 15:47:57Z hallvord $";

function testClickMethod()
{
   try 
   {
      document.theform.theradio.click();
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
      document.theform.theradio.blur();
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
      document.theform.theradio.focus();
   }
   catch( e )
   {
      exception( e );
   }
}



