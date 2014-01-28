
/**
 * JavaScript
 * Submit object interactive part, js 1.3.
 *
 * 09.07.2001, torstein@opera.com
 */

var cvs = "$Id: js_submit_int.js 4838 2006-01-18 05:59:01Z hallvord $";

function testClickMethod()
{
   try 
   {
      document.theform.thesubmit.click();
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
      document.theform.thesubmit.blur();
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
      document.theform.thesubmit.focus();
   }
   catch( e )
   {
      exception( e );
   }
}



