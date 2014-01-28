
/**
 * JavaScript
 * History object interactive part, js 1.3.
 *
 * 17.07.2001, torstein@opera.com
 *   
 * Test works fine in Opera 6.1 for Linux, but not
 * in Opera 6.04 build 1135 for Windows, where
 * the browsewin [window] object does not seem to get a fullworthy
 * history object.
 */

var browsewin;
var reportwin;

var cvs = "$Id: js_history_int.js 10655 2006-12-18 15:47:57Z hallvord $";

function openReportWindow( win )
{
   this.reportwin = win.open( "", "reportwindow", "width=200,height=400,scrollbars=yes" );
}

function openBrowserWindow( win )
{
   this.browsewin = win.open( "index.html", "browsewin",
                              "width=400,height=400,scrollbars=yes,location=yes" );
   
   if( this.browsewin.history.back == undefined )
   {
      report( "<span style=\"color: red;\">The browserwindow does not have a fullworthy history object" );
      report( "therefore, none of the tests will work</span>" );
   }
}

function report( msg )
{
   this.reportwin.document.write( msg + "<br>" );
}

function goBack()
{
   if( this.browsewin.history.back != undefined )
   {
      this.browsewin.history.back();
      getPreviousNextAndCurrent();
   }
   else
   {
      report( "The browserwindow's history object doesn't have back!" );
   }
}

function goForward()
{
   if( this.browsewin.history.forward != undefined )
   {
      this.browsewin.history.forward();
      getPreviousNextAndCurrent();
   }
   else
   {
      report( "The browserwindow's history object doesn't have forward!" );
   }
}

function goBackByIndex()
{
   if( this.browsewin.history.go != undefined )
   {
      this.browsewin.history.go( -1 );
      getPreviousNextAndCurrent();
   }
   else
   {
      report( "The browserwindow's history object doesn't have go()!" );
   }
}

function goForwardByIndex()
{
   if( this.browsewin.history.go != undefined )
   {
      this.browsewin.history.go( 1 );
      getPreviousNextAndCurrent();
   }
   else
   {
      report( "The browserwindow's history object doesn't have go()!" );
   }
}

function getPreviousNextAndCurrent()
{
   try
   {
      if( isDefined( self.netscape ) ) 
      {
         netscape.security.PrivilegeManager.enablePrivilege( "UniversalBrowserRead" );
      }

      report( "current: " + this.browsewin.history.current );
      report( "previous: " + this.browsewin.history.previous );
      report( "next: " + this.browsewin.history.next );
   }
   catch( e )
   {
      report( e + "\nBrowser did not allow reading of current, previous and next properties." );
   }
}
