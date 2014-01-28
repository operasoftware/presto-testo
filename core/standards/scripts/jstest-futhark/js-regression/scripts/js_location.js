/**
 * JavaScript
 * Location object, js 1.3.
 *
 * 15.07.2001, torstein@opera.com
 */
var tprop;
var mywin;
var testSteps=[];
expect(44);
function main( windowObject )
{
   try 
   {
      var cvs = "$Id: js_location.js 90458 2011-03-21 13:56:32Z hallvord $";
      testmodule( "The Location object", cvs );
      
      /* First, testing original window  */
      var locationObject = windowObject.location;
      this.tprop = make_tprop( locationObject );

      testcase( "Location exists" );
      tdef( "defined", locationObject );

      testcase( "typeof" );
      test( "typeof", typeof locationObject, "object" );

      testcase( 'Location object properties' );
      testLocationProperties( locationObject, windowObject );

      testcase( 'Location object methods' );
      testLocationMethods( locationObject, 1 );
      
      /* Then testing a newly created window object */
      mywin = windowObject.open(get_protocol_and_host() + get_modulepath("regression-lib","empty_helper_file.htm") , "mywindowname", "width=200,height=400" );
      locationObject = mywin.location;

      testSteps.push( function () { if(!mywin.document.URL.match(/empty_helper_file\.htm/))throw 'Not ready for timesliced_testing'; } );

      testSteps.push( function () {
         locationObject.href = get_protocol_and_host() + get_modulepath("regression-lib","empty_helper_file.htm");
         this.tprop = make_tprop( locationObject );
      });
      testSteps.push( function () {
         testcase( "Location exists in new object window" );
         tdef( "defined", locationObject );
      });
      testSteps.push( function () {
         testcase( "typeof location in new window object" );
         test( "typeof", typeof locationObject, "object" );
      });

      try
      {
      testSteps.push( function () {
         testcase( 'Location object properties, new window object' );
      });

/*
	 try {
	     test( "mywin.location.port and locationObject.port: ", 
		   mywin.location.port, locationObject.port );
	 } catch (e) { exception (e); }
*/
         testLocationProperties( locationObject );
      }
      catch( e )
      {
         exception( e );
      }

      testSteps.push( function () {
         testcase( 'Location object methods, new window object' );
      });
      testLocationMethods( locationObject , 2);
   }
   catch( e )
   {
      exception( e );
   }
   testSteps.push( function () {
      if( mywin != undefined )
      {
         mywin.close();
      }
   });

   testSteps.push( function () {
      testmodule_finished();
   });
   serial_timesliced_testing( testSteps, this, [], function(e, iteration){ exception( e, "Unexpected exception during location tests", ' test #'+iteration ); } );

}

function testLocationProperties( locationObject, win )
{
   win=win||mywin; 
   var num = win==self?1:2;
   testSteps.push( function () {
      tdef( "defined #"+num, locationObject );
      test( 'hash #'+num, typeof locationObject["hash"], "string" );
      test( "host #"+num, typeof locationObject["host"], "string" );
      test( "hostname #"+num, typeof locationObject["hostname"], "string" );
      test( "href #"+num,  typeof locationObject["href"], "string" );
      test( "pathname #"+num, typeof locationObject["pathname"], "string" );
      test( "port #"+num, typeof locationObject["port"], "string" );
      test( "protocol #"+num,  typeof locationObject["protocol"], "string" );
      test( "search #"+num, typeof locationObject["search"], "string" );

      test( "hash value #"+num, locationObject.hash, "", locationObject.href );
      test( "host value #"+num, locationObject.host, get_host() );
      test( "hostname value #"+num, locationObject.hostname, get_host() );

      if( win == self ){
         test( "href equal document.URL #"+num, locationObject.href, win.document.URL );
      }else{
          try{
            test( 'reading popup document.URL possible #'+num, typeof win.document.URL, 'string' );
          }catch(e){
            exception(e);
          }
      }

      test( "port value #"+num, locationObject.port, "" );
      test( "search value #"+num, locationObject.search, "" );
      // Some tests go on the original window ( js_location.html ), others on the popup. 
      
      if( locationObject.href.indexOf( "js_location.html" ) != -1 )
      {
         test( "href value  #"+num, locationObject.href, get_protocol_and_host() + get_modulepath( "js-regression", "js_location.html" ) );
         test( "pathname value  #"+num, locationObject.pathname, get_modulepath( "js-regression","js_location.html" ) );

         locationObject.hash = "ananchor";
         test( "Changing the location.hash #"+num, locationObject.hash, "#ananchor" , "hash is not remembered");
      }
      else
      {
         test( "href value  #"+num, locationObject.href, get_protocol_and_host() + get_modulepath("regression-lib","empty_helper_file.htm") );
         test( "pathname value  #"+num, locationObject.pathname, get_modulepath("regression-lib","empty_helper_file.htm") );

         // Not readonly in JS 1.3
         exception_means_failure( "changing the location.host #"+num, Error, function() { locationObject.host = "bugs.opera.com"; } );
         exception_means_failure( "changing the location.hostname #"+num, Error, function() { locationObject.hostname = "bugs.opera.com"; } );
         exception_means_failure( "changing the location.port #"+num, Error, function() { locationObject.port = 80; } );
         exception_means_failure( "changing the location.protocol #"+num, Error, function() { locationObject.protocol = "ftp"; } );
         exception_means_failure( "changing the location.pathname with a different host #"+num, Error,
                           function() { locationObject.pathname = "http://www.w3.org/TR/DOM-Level-2-Core/core.html"; } );

         var jstestDirectory = locationObject.pathname;
         jstestDirectory = jstestDirectory.substring( 0, jstestDirectory.lastIndexOf( "/" ) );
         jstestDirectory = jstestDirectory.substring( 0, jstestDirectory.lastIndexOf( "/" ) );

         exception_means_failure( "changing location.pathname", "82477",
                                   function()
                                   {
                                      locationObject.pathname = jstestDirectory + "/es-regression";
                                   } );

         exception_means_failure( "changing location.search", "82472",
                                   function()
                                   {
                                      locationObject.search = "newseach";
                                   } );
      }

   });
   testSteps.push( function () {
               if( locationObject===mywin.location )locationObject.href = get_protocol_and_host() + get_modulepath( "regression-lib", "empty_helper_file.htm?history=1" );
   });
   
   testSteps.push( function () {      if( locationObject===mywin.location ) if(!mywin.document.URL.match(/empty_helper_file\.htm\?history=1/))throw 'Not ready for timesliced_testing'; } );
   
   testSteps.push( function () {
               if( locationObject===mywin.location )test( "changing href", locationObject.href, get_protocol_and_host() + get_modulepath( "regression-lib", "empty_helper_file.htm?history=1" ) );
   });
}

function testLocationMethods( locationObject, num )
{
   testSteps.push( function () {
      test( "reload #"+num, typeof locationObject["reload"], "function" );
      test( "replace #"+num,  typeof locationObject["replace"], "function" );
   });
}

