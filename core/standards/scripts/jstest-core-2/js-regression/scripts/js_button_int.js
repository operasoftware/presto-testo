/**
 * JavaScript
 * Button object interactive part, js 1.3.
 *
 * 18.07.2002, haukur@opera.com
 */

var cvs = "$Id: js_button_int.js 4838 2006-01-18 05:59:01Z hallvord $";

function testFocusMethod()
{
   try 
   {
      document.theform.thebutton.focus();
   }
   catch( e )
   {
      exception( e );
   }
}
function testClickMethod()
{
  try
  {
  	document.theform.thebutton.click();
  }
  catch( e )
  {
  	exception(e);
  }
 }
	

function testBlurMethod()
{
   try 
   {
      document.theform.thebutton.blur();
   }
   catch( e )
   {
      exception( e );
   }
}

