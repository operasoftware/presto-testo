/**
 * JavaScript
 * History object, js 1.3.
 *
 * 17.07.2001, torstein@opera.com
 * 
 * This test works a lot better on Linux than on Windows.
 * I don't know why, something todo with the creation of new
 * window objects -torstein.
 */
var tprop;
var mywin;

function main( historyObject )
{
   try 
   {
      var cvs = "$Id: js_history.js 4838 2006-01-18 05:59:01Z hallvord $";
      testmodule( "The History object", cvs );

      testcase( "window.history exists" );
      this.tprop = make_tprop( window );
      tprop( "history", "object" ); // object according to msdn, array according to js 1.3

      this.tprop = make_tprop( historyObject );

      testcase( 'History object properties' );
      testHistoryProperties( historyObject );

      testcase( 'History object methods' );
      testHistoryMethods( historyObject );
   }
   catch( e )
   {
      exception( e );
   }
   finally
   {
      if( this.mywin != undefined )
      {
         this.mywin.close();
      }
   }

   testmodule_finished();
}

function testHistoryProperties( hist )
{
   try
   {
      tprop( "current", "string" );
      tprop( "length", "number" );

      if ("next" in hist)
        showfailure("Property: History.next", "the property was removed for privacy/security reasons.");
      if ("previous" in hist)
        showfailure("Property: History.previous", "the property was removed for privacy/security reasons.");

      test( "current", hist.current, get_protocol_and_host() + get_pathname( "js_history.html" ) );
      test( "isNaN( length )", isNaN( hist.length ), false );
   }
   catch( e )
   {
      exception( e, "Browser did not allow reading of current, previous and next properties." );
   }
   
   expect_exception( "changing read-only property, current", Error, function() { hist.current = ""; } );
   expect_exception( "changing read-only property, length", Error, function() { hist.length = 0; } );
}   

/*
  Changed the urls due to security issues.
  Using other pages that I know are in the test suite.
 */
function testHistoryMethods( hist )
{
   tprop( "back", "function" );
   tprop( "forward", "function" );
   tprop( "go", "function" );

   this.mywin = open( "index.html", "mywinname", "width=200,height=400" );
   wait_until( function () { return this.mywin.ready; } );

   if( this.mywin != undefined && this.mywin != null )
   {
      try
      {
         /*
           Mozilla 1.0 throws exception on this now
           
           if( isMozilla() )
           {
              netscape.security.PrivilegeManager.enablePrivilege( "UniversalBrowserRead" );
           }
         */
         test_expect_failure( "history[ 0 ]", 85175, this.mywin.history[ 0 ],
               get_protocol_and_host() + get_pathname( "index.html" ) ); 
         
         test_expect_failure( "history[ 1 ]", 85175, mywin.history[ 1 ],
               get_protocol_and_host() + get_pathname( "index.html" ) );

         mywin.location = get_protocol_and_host() + get_pathname( "js_radio.html" );
	 sleep(1000);
         mywin.history.back();
	 sleep(1000);
         test( "back method and current property", mywin.history.current, get_protocol_and_host() + get_pathname( "index.html" ) );

         mywin.history.forward();
	 sleep(1000);
         test( "forward method and current property", mywin.history.current,
               get_protocol_and_host() + get_pathname( "js_radio.html" ) );
 
         mywin.location = get_protocol_and_host() + get_pathname( "js_radio.html" );
	 sleep(1000);
         mywin.location = get_protocol_and_host() + get_pathname( "js_textarea.html" ); 
	 sleep(1000);
         mywin.location = get_protocol_and_host() + get_pathname( "js_text.html" );
	 sleep(1000);

         test( "current property after setting window.location several times",
               mywin.history.current, get_protocol_and_host() + get_pathname( "js_text.html" ) );

         mywin.history.go( -1 );
	 sleep(1000);
         test( "go( -1 ) method and current property", mywin.history.current,
               get_protocol_and_host() + get_pathname( "js_textarea.html" ) );

         mywin.history.go( 1 );
	 sleep(1000);
         test( "go( 1 ) method and current property", mywin.history.current,
               get_protocol_and_host() + get_pathname( "js_text.html" ) );
      }
      catch( e )
      {
         exception( e, "Browser did not allow reading of current, previous and next properties." );
      }
    }
}   

