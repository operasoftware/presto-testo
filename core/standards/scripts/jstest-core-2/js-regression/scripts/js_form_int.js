/**
 * JavaScript
 * Form object interactive part, js 1.3.
 *
 * 18.07.2002, haukur@opera.com
 */

var cvs = "$Id: js_form_int.js 4838 2006-01-18 05:59:01Z hallvord $";

function testResetMethod()
{
   try 
   {
      document.theform.reset();
   }
   catch( e )
   {
      exception( e );
   }
}

function testSubmitMethod()
{
   try 
   {
      document.theform.submit();
   }
   catch( e )
   {
      exception( e );
   }
}


