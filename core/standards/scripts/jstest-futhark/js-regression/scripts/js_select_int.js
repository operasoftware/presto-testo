
/**
 * JavaScript
 * Select object interactive part, js 1.3.
 *
 * 09.07.2001, torstein@opera.com
 */

var cvs = "$Id: js_select_int.js 10655 2006-12-18 15:47:57Z hallvord $";

function testBlurMethod()
{
   try 
   {
      document.theform.theselect.blur();
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
      document.theform.theselect.focus();
   }
   catch( e )
   {
      exception( e );
   }
}

function testSelectedIndexProperty()
{
   try 
   {
      alert( "theselect2.selectedIndex: " + document.theform.theselect2.selectedIndex );
   }
   catch( e )
   {
      exception( e );
   }
}



