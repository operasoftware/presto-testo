
/**
 * JavaScript
 * Text object interactive part, js 1.3.
 *
 * 03.07.2001, torstein@opera.com
 */

var cvs = "$Id: js_text_int.js 4838 2006-01-18 05:59:01Z hallvord $";

function testSelectMethod()
{
   try 
   {
      document.theform.thetext.select();
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
      document.theform.thetext.blur();
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
      document.theform.thetext.focus();
   }
   catch( e )
   {
      exception( e );
   }
}



