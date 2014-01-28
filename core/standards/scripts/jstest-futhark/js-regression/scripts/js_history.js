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
expect(11);
function main( historyObject )
{
   try
   {
      var cvs = "$Id: js_history.js 118626 2012-07-03 08:26:40Z olak $";
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
   // some async tests here, testmodule_finished() needs to be called after last timeout
   // testmodule_finished(); 
}

function testHistoryProperties( hist )
{
   try
   {
      /* removed in CORE-42586
	  tprop( "current", "string" );
	  */
      tprop( "length", "number" );

      if ("next" in hist)
        showfailure("Property: History.next", "the property was removed for privacy/security reasons.");
      if ("previous" in hist)
        showfailure("Property: History.previous", "the property was removed for privacy/security reasons.");
	/* removed in CORE-42586
      test( "current", hist.current, get_protocol_and_host() + get_pathname( "js_history.html" ) );
	*/
      test( "isNaN( length )", isNaN( hist.length ), false );
   }
   catch( e )
   {
      exception( e, "Browser did not allow reading of current, previous and next properties." );
   }

   /* removed in CORE-42586
   expect_exception( "changing read-only property, current", Error, function() { hist.current = ""; } );
   expect_exception( "changing read-only property, length", Error, function() { hist.length = 0; } );
   */
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
   var testSteps=[];
   mywin = open( get_protocol_and_host() + get_modulepath("regression-lib","empty_helper_file.htm"), "mywinname", "width=200,height=400" );
   testSteps.push( function () { if(!mywin.ready)throw 'Not ready for timesliced_testing'; } );
   
   if( mywin != undefined && mywin != null )
   {
      try
      {
/*         test_expect_failure( "history[ 0 ]", 85175, mywin.history[ 0 ],
               get_protocol_and_host() + get_pathname( "index.html" ) );

         test_expect_failure( "history[ 1 ]", 85175, mywin.history[ 1 ],
               get_protocol_and_host() + get_pathname( "index.html" ) );
*/
      testSteps.push( function () { mywin.makeHistory(); }); // this should load ?history=1 URL by a simulated link click
      testSteps.push( function () { if(!mywin.document.URL.match(/empty_helper_file\.htm\?history=1/))throw 'Not ready for timesliced_testing'; } );
      testSteps.push( function () { mywin.history.back();} ); // this should go one step back to empty_helper_file.htm 
      testSteps.push( function () { if(!mywin.document.URL.match(/empty_helper_file\.htm$/))throw 'Not ready for timesliced_testing'; } );
	  /*
      testSteps.push( function () {  test( "back method and current property", mywin.history.current, get_protocol_and_host() + get_modulepath("regression-lib", "empty_helper_file.htm" ) ); });
	  */
      testSteps.push( function () { mywin.history.forward(); });
      testSteps.push( function () { if(!mywin.document.URL.match(/empty_helper_file\.htm\?history=1/))throw 'Not ready for timesliced_testing'; } );
      /*
	  testSteps.push( function () { test( "forward method and current property", mywin.history.current,
               get_protocol_and_host() + get_modulepath("regression-lib", "empty_helper_file.htm?history=1" ) ); });
	  */
      testSteps.push( function () { 
         mywin.makeHistory(); // this should load ?history=2
      });
      testSteps.push( function () { if(!mywin.document.URL.match(/empty_helper_file\.htm\?history=2/))throw 'Not ready for timesliced_testing'; } );
      testSteps.push( function () {
         mywin.makeHistory();
      });
      testSteps.push( function () { if(!mywin.document.URL.match(/empty_helper_file\.htm\?history=3/))throw 'Not ready for timesliced_testing'; } );
      testSteps.push( function () {
         mywin.makeHistory();
      });
      testSteps.push( function () { if(!mywin.document.URL.match(/\?history=4$/))throw 'Not ready for timesliced_testing'; } );
      /*
	  testSteps.push( function () {
         test( "current property after setting window.location several times",
               mywin.history.current, get_protocol_and_host() + get_modulepath("regression-lib", "empty_helper_file.htm?history=4" ) );
      });
	  */
      testSteps.push( function () {
         mywin.history.go( -1 ); // should go back to ?history=3
      });
      testSteps.push( function () { if(!mywin.document.URL.match(/\?history=3$/))throw 'Not ready for timesliced_testing'; } );
      /*
	  testSteps.push( function () {
         test( "go( -1 ) method and current property", mywin.history.current,
               get_protocol_and_host() + get_modulepath("regression-lib", "empty_helper_file.htm?history=3" ) );
      });
	  */
      testSteps.push( function () {
         mywin.history.go( 1 ); // goes forward to ?history=4
      });
      testSteps.push( function () { if(!mywin.document.URL.match(/\?history=4$/))throw 'Not ready for timesliced_testing'; } );
      /*
	  testSteps.push( function () {
         test( "go( 1 ) method and current property", mywin.history.current,
               get_protocol_and_host() + get_modulepath("regression-lib", "empty_helper_file.htm?history=4" ) );
      });
	  */
      testSteps.push(testmodule_finished);
      
      testSteps.push( function(){
         if( mywin != undefined )
         {
            mywin.close();
         }
      }
      );
      
         serial_timesliced_testing( testSteps, this, [], function(e, iteration){ exception( e, "Browser did not allow reading of current, previous and next properties.", 'historyObject #'+iteration ); } );
      
      }
      catch( e )
      {
         exception( e, "Browser did not allow reading of current, previous and next properties." );
      }
    }
}
