
/**
 * JavaScript
 * Option object interactive part, js 1.3.
 *
 * 15.07.2001, torstein@opera.com
 */

var mywin;
var cvs = "$Id: js_option_int.js 4838 2006-01-18 05:59:01Z hallvord $";

function openReportWindow( win )
{
   this.mywin = win.open( "", "reportwindow", "width=200,height=400,scrollbars=yes" ) ;
}

function report( msg )
{
   this.mywin.document.write( msg + "<br>" );
}

function addOption( win, text, selected )
{
   var anotherOption = new Option( text + " option text", text + " option value", false, selected );
   var optionsArray = win.document.theform.theselect;

   optionsArray[ optionsArray.length ] = anotherOption;
   report( "Added " + text + " option" );
}

function removeOption( win )
{
   var optionsArray = win.document.theform.theselect;

   if( optionsArray.length > 0 )
   {
      optionsArray[ optionsArray.length - 1 ] = null;
      report( "Removed the last option in the list" );
   }
   else
   {
      report( "No more options left in list" );
   }
}

function selectOption( win, index )
{
   var optionsArray = win.document.theform.theselect;

   if( index < optionsArray.length )
   {
      optionsArray.selectedIndex = index;
      report( "Selecting index number " + index );
   }
   else 
   {
      report( "Index number " + index + " doesn't exist." );
   }
}

function changeValue( win )
{
   var optionsArray = win.document.theform.theselect;

   if( optionsArray.length > 0 )
   {
      optionsArray[ 0 ].text = "New option text";
      report( "Changed text on item number one" );
   }
   else
   {
      report( "There's no options in the select box." );
   }
}
