
/**
 * JavaScript
 * Radio object interactive part, js 1.3.
 *
 * 09.07.2001, torstein@opera.com
 */

var cvs = "$Id: js_radio_int.js 4838 2006-01-18 05:59:01Z hallvord $";

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



