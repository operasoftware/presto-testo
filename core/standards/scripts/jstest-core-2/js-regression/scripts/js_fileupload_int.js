/**
 * JavaScript
 * Fileupload object interactive part, js 1.3.
 *
 * 18.07.2002, haukur@opera.com
 */

var cvs = "$Id: js_fileupload_int.js 4838 2006-01-18 05:59:01Z hallvord $";

function testBlurMethod()
{
   try 
   {
      document.theform.thefile.blur();
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
      document.theform.thefile.focus();
   }
   catch( e )
   {
      exception( e );
   }
}
function testSelectMethod()
{
  try
  {
  	document.theform.thefile.select();
  }
  catch( e )
  {
  	exception(e);
  }
 }
