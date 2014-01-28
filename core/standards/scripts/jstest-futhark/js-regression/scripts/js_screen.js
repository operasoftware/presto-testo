/**
 * JavaScript
 * Screen object, js 1.3.
 *
 * 10.07.2001, torstein@opera.com
 */
var tprop;

function main( screenObject )
{
   try 
   {
      var cvs = "$Id: js_screen.js 10655 2006-12-18 15:47:57Z hallvord $";
      testmodule( "The Screen object", cvs );
      this.tprop = make_tprop( screenObject );

      testcase( "screen exists" );
      tdef( 'defined', screenObject );

      testcase( "toString" );

      if( navigator.userAgent.indexOf( "Opera" ) != -1 )
      {
         test( 'toString',  screenObject, "[object Screen]" );
      }
      else if( isMozilla() )
      {
         test( 'toString',  screenObject, "[object Screen]" );
      }
      else if( isExplorer() )
      {
         test( 'toString',  screenObject, "[object]" );
      }

      testcase( "typeof" );
      test( "typeof", typeof screenObject, "object" );

      testcase( 'Screen object properties' );
      testScreenProperties( screenObject );
   }
   catch( e )
   {
      exception( e );
   }
 
   testmodule_finished();
}

function testScreenProperties( screen )
{
   tprop( "availHeight", "number" );

   if( is_phase( 2 ) )
   {
      tprop( "availLeft", "number" );
      tprop( "availTop", "number" );
   }
   
   tprop( "availWidth", "number" );
   tprop( "colorDepth", "number" );
   tprop( "height", "number" );
   tprop( "pixelDepth", "number" );
   tprop( "width", "number" );

   var myscreen = screen;
   
   /* <by tord> */
   testcase( "Properties read as coherent values" );

   test( "availHeight",myscreen.availHeight, get_avail_height() );
   test( "availWidth",myscreen.availWidth, get_avail_width() );
   test( "colorDepth",myscreen.colorDepth, get_color_depth() );
   test( "height",myscreen.height, get_screen_height() );
   test( "pixelDepth",myscreen.pixelDepth, get_pixel_depth() );
   test( "width",myscreen.width, get_screen_width() );
   /* </by tord> */

   testcase( "Properties are read-only" );
   
   expect_exception( "availHeight", Error, function() { myscreen.availHeight = 42; } );
   expect_exception( "availWidth", Error, function() { myscreen.availWidth = 42; } );
   expect_exception( "colorDepth", Error, function() { myscreen.colorDepth = 42; } );
   expect_exception( "height", Error, function() { myscreen.height = 42; } );
   expect_exception( "pixelDepth", Error, function() { myscreen.pixelDepth = 42; } );
   expect_exception( "width", Error, function() { myscreen.width = 42; } );

   if( is_phase( 2 ) )
   {
      expect_exception( "availLeft", Error, function() { myscreen.availLeft = 42; } );
      expect_exception( "availTop", Error, function() { myscreen.availTop = 42; } );
   }
}


