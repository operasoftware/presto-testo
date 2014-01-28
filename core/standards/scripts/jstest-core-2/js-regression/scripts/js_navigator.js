/**
 * JavaScript
 * Navigator object, js 1.3.
 *
 * 11.07.2001, torstein@opera.com
 */
var tprop;

function main( windowObject )
{
   try 
   {
      var cvs = "$Id: js_navigator.js 4838 2006-01-18 05:59:01Z hallvord $";
      testmodule( "The Navigator object", cvs );

      testcase( "Navigator exists" );
      this.tprop = make_tprop( windowObject );
      tprop( "navigator", "object" );

      var navigatorObject = windowObject.navigator;
      this.tprop = make_tprop( navigatorObject );

      testcase( 'Navigator object properties' );
      testNavigatorProperties( navigatorObject );

      testcase( 'Navigator object methods' );
      testNavigatorMethods( navigatorObject );
   }
   catch( e )
   {
      exception( e );
   }

   testmodule_finished();
}

function testNavigatorProperties( navigatorObject )
{
   tprop( "appCodeName", "string" );
   tprop( "appName", "string" );
   tprop( "appVersion", "string" );
   tprop( "language", "string" );
   tprop( "mimeTypes", "object" ); /* Not listed in msdn */
   tprop( "platform", "string" );
   /*
      plugins collection according to msdn,
      but IE 6 doesn't treat it as a collection
   */
   tprop( "plugins", "object" ); 
   tprop( "userAgent", "string" );

   test( "appCodeName", navigatorObject.appCodeName, "Mozilla" );
   
   switch (true)
   {
   case isExplorer():
   case spoofingExplorer():
      test( "appName", navigatorObject.appName, "Microsoft Internet Explorer" );
      break;
   case isMozilla():
   case spoofingNavigator():
      test( "appName", navigatorObject.appName, "Netscape" );
      break;
   case spoofingOpera():
   default:
      test( "appName", navigatorObject.appName, "Opera" );
   }

   var av = navigatorObject.appVersion;
   
   if( av.indexOf( " " ) )
   {
      av = av.substr( 0, av.indexOf( " " ) );
   }

   test( "appVersion", isNaN( av ), false );


   l = navigatorObject.language;

   if( l.indexOf( "-" ) != -1 && l.indexOf( "-" ) > 0 )
   {
      l = l.substr( 0, l.indexOf( "-" ) );
   }
   
   test( "language", l, "en" );

   test( "mimeTypes[ 0 ] toString", navigatorObject.mimeTypes[ 0 ] + "", "[object MimeType]" );
   
   /*
      To make the test run in Mozilla, it returns platform + architecture
      e.g. Linux i686
   */
   var p = navigatorObject.platform;

   if( p.indexOf( " " ) != -1 && p.indexOf( " " ) > 0 )
   {
      p = p.substr( 0, p.indexOf( " " ) );
   }

   test( "platform", p, get_platform() );
   
   test( "plugins toString", navigatorObject.plugins + "", "[object PluginArray]" );
   
   if (navigator.pluginsEnabled())
      test( "plugins[ 0 ] toString", navigatorObject.plugins[ 0 ] + "", "[object Plugin]" );
   else
   {
      test( "plugins[ 0 ] toString", navigatorObject.plugins[ 0 ], undefined );
      test( "plugins.length", navigator.length, undefined );
   }      
   
   if( isMozilla() )
   {
      test( "userAgent", navigatorObject.userAgent.indexOf( "Mozilla" ) != -1 , true );
   }
   else
   {
      test( "userAgent", navigatorObject.userAgent.indexOf( "Opera" ) != -1 , true );
   }

   expect_exception( "changing read-only value, appCodeName", Error, function() { navigatorObject.appCodeName = null; } );
   expect_exception( "changing read-only value, appName", Error, function() { navigatorObject.appName = null; } );
   expect_exception( "changing read-only value, appVersion", Error, function() { navigatorObject.appVersion = null; } );
   expect_exception( "changing read-only value, language", Error, function() { navigatorObject.language = null; } );
   expect_exception_but_expect_failure( "changing read-only value, mimeTypes", 86242, Error, function() { navigatorObject.mimeTypes = null; } );
   expect_exception( "changing read-only value, platform", Error, function() { navigatorObject.platform = null; } );
   expect_exception_but_expect_failure( "changing read-only value, plugins", 86242, Error, function() { navigatorObject.plugins = null; } );
   expect_exception( "changing read-only value, userAgent", Error, function() { navigatorObject.userAgent = null; } );
}


function testNavigatorMethods( navigatorObject )
{
   tprop( "javaEnabled", "function" );

   if( is_phase( 2 ) )
   {
      var another_tprop = make_tprop( navigatorObject.plugins );
      another_tprop( "refresh", "function" );

      tprop( "preference", "function" );
      tprop( "savePreferences", "function" );
   }

   tprop( "taintEnabled", "function" ); // Removed in JavaScript 1.2

   tprop( "pluginsEnabled", "function" ); // Part of fix for bug# 119110
}
