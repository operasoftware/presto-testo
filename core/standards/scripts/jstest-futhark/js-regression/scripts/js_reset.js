/**
 * JavaScript
 * Reset object, js 1.3.
 *
 * 10.07.2001, torstein@opera.com
 * $Id:
 *
 */
var tprop;

function main( resetObject )
{
   try 
   {
      var cvs = "$Id: js_reset.js 10655 2006-12-18 15:47:57Z hallvord $";
      testmodule( "The Reset object", cvs );

      this.tprop = make_tprop( document.theform );
      tprop( "thereset", "object" );

      this.tprop = make_tprop( resetObject );

      testcase( 'Reset object properties' );
      testResetProperties( resetObject );
 
      testcase( 'Reset object methods' );
      testResetMethods( resetObject );

      if( !isMozilla() )
      {
         testcase( 'event handlers' );
         testEventHandlers( resetObject );
      }
   }
   catch( e )
   {
      exception( e );
   }

   testmodule_finished();
}

function testResetProperties( reset )
{
   tprop( "form", "object" );
   tprop( "name", "string" );
   tprop( "type", "string" );
   tprop( "value", "string" );
   
   test( "form", reset.form, document.theform );
   test( "name", reset.name, "thereset" );
   test( "type", reset.type, "reset" );
   test( "value", reset.value, "Reset default value" );

   reset.value = "New Reset value";
   reset.name = "New Reset name"

   test( "modified value", reset.value, "New Reset value" );
   test( "modified name", reset.name, "New Reset name" );

   reset.type = "text";
   test( "modified type", reset.type, "text" );
   reset.type = "reset";

   expect_DOM_exception( "Changing a readonly value, reset.form",
                         dom_no_modification_allowed_err,
                         function() { reset.form = "something"; } );
}

function testResetMethods( reset )
{

   tprop( "click", "function" );
   tprop( "blur", "function" );
   tprop( "focus", "function" );

   if( is_phase( 2 ) )
   {
      tprop( "handleEvent", "function" );
   }
}

function testEventHandlers( reset )
{
   test_spaceagnostic( "onblur", "" + reset.onblur, getEventHandlerSource( 0 ) );
   test_spaceagnostic( "onfocus", "" + reset.onfocus, getEventHandlerSource( 2 ) );
   test_spaceagnostic( "onclick", "" + reset.onclick, getEventHandlerSource( 6 ) );
}

