/**
 * JavaScript
 * Checkbox object interactive part, js 1.3.
 *
 * 18.07.2002, haukur@opera.com
 */

var cvs = "$Id: js_checkbox_int.js 4838 2006-01-18 05:59:01Z hallvord $";

function testBlurMethod()
{
   try 
   {
      document.theform.thecheckbox.blur();
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
     document.theform.thecheckbox.click();
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
      document.theform.thecheckbox.focus();
   }
   catch( e )
   {
      exception( e );
   }
}
	



