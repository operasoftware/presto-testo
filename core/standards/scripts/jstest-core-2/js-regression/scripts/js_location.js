/**
 * JavaScript
 * Location object, js 1.3.
 *
 * 15.07.2001, torstein@opera.com
 */
var tprop;
var mywin;

function main( windowObject )
{
   try 
   {
      var cvs = "$Id: js_location.js 4838 2006-01-18 05:59:01Z hallvord $";
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
      testLocationMethods( locationObject );
      
      /* Then testing a newly created window object */
      this.mywin = windowObject.open( "", "mywindowname", "width=200,height=400" );
      sleep(1000);
      locationObject = this.mywin.location;
      locationObject.href = get_protocol_and_host() + get_modulepath("js-regression","index.html");
      sleep(1000);
      this.tprop = make_tprop( locationObject );

      testcase( "Location exists in new object window" );
      tdef( "defined", locationObject );

      testcase( "typeof location in new window object" );
      test( "typeof", typeof locationObject, "object" );

      try
      {
         testcase( 'Location object properties, new window object' );
/*
	 try {
	     test( "mywin.location.port and locationObject.port: ", 
		   this.mywin.location.port, locationObject.port );
	 } catch (e) { exception (e); }
*/
         testLocationProperties( locationObject, this.mywin );
      }
      catch( e )
      {
         exception( e );
      }

      testcase( 'Location object methods, new window object' );
      testLocationMethods( locationObject );
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

function testLocationProperties( locationObject, win )
{
   tdef( "defined", locationObject );
   
   if( locationObject.href != undefined )
   {

      tprop( "hash", "string" );
      tprop( "host", "string" );
      tprop( "hostname", "string" );
      tprop( "href", "string" );
      tprop( "pathname", "string" );
      tprop( "port", "string" );
      tprop( "protocol", "string" );
      tprop( "search", "string" );

      test( "hash", locationObject.hash, "" );
      test( "host", locationObject.host, get_host() );
      test( "hostname", locationObject.hostname, get_host() );

      if( win == self )
         test( "href equal document.URL", locationObject.href, win.document.URL );
      else
         expect_failure_exception( "reading newwin.document.URL", "82487",
                                   function() { win.document.URL; } );

      test( "port", locationObject.port, "" );
      test( "search", locationObject.search, "" );

      // Some tests go on the original window ( js_location.html ), others on the popup. 
      if( locationObject.href.indexOf( "js_location.html" ) != -1 )
      {
         test( "href", locationObject.href, get_protocol_and_host() + get_modulepath( "js-regression", "js_location.html" ) );
         test( "pathname", locationObject.pathname, get_modulepath( "js-regression","js_location.html" ) );

         locationObject.hash = "ananchor";
         test_expect_failure( "Changing the location.hash", 80955, locationObject.hash, "#ananchor" , "hash is not remembered");
      }
      else
      {
         test( "href", locationObject.href, get_protocol_and_host() + get_modulepath( "js-regression", "index.html" ) );
         test( "pathname", locationObject.pathname, get_modulepath( "js-regression", "index.html" ) );

         // Not readonly in JS 1.3
         expect_exception( "changing the location.host", Error, function() { locationObject.host = "bugs.opera.com"; } );
         expect_exception( "changing the location.hostname", Error, function() { locationObject.hostname = "bugs.opera.com"; } );
         expect_exception( "changing the location.port", Error, function() { locationObject.port = 80; } );
         expect_exception( "changing the location.protocol", Error, function() { locationObject.protocol = "ftp"; } );
         expect_exception( "changing the location.pathname with a different host", Error,
                           function() { locationObject.pathname = "http://www.w3.org/TR/DOM-Level-2-Core/core.html"; } );

         var jstestDirectory = locationObject.pathname;
         jstestDirectory = jstestDirectory.substring( 0, jstestDirectory.lastIndexOf( "/" ) );
         jstestDirectory = jstestDirectory.substring( 0, jstestDirectory.lastIndexOf( "/" ) );

         expect_failure_exception( "changing location.pathname", "82477",
                                   function()
                                   {
                                      locationObject.pathname = jstestDirectory + "/es-regression";
                                   } );

         expect_failure_exception( "changing location.search", "82472",
                                   function()
                                   {
                                      locationObject.search = "newseach";
                                   } );

         locationObject.href = get_protocol_and_host() + get_modulepath( "js-regression", "js_text.html" );
         test( "changing href", locationObject.href, get_protocol_and_host() + get_modulepath( "js-regression", "js_text.html" ) );
      }
   }
}

function testLocationMethods( locationObject )
{
   tprop( "reload", "function" );
   tprop( "replace", "function" );
   tprop( "navigate", "function" );
}

