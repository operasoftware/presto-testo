
/**
 * JavaScript
 * Password object interactive part, js 1.3.
 *
 * 11.07.2001, torstein@opera.com
 */

var cvs = "$Id: js_password_int.js 4838 2006-01-18 05:59:01Z hallvord $";

function testBlurMethod()
{
   try 
   {
      document.theform.thepassword.blur();
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
      document.theform.thepassword.focus();
   }
   catch( e )
   {
      exception( e );
   }
}



