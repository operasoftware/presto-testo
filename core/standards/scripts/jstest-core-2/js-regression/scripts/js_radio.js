/**
 * JavaScript
 * Radio object, js 1.3.
 *
 * 10.07.2001, torstein@opera.com
 * $Id:
 *
 */
var tprop;

function main( radioObject )
{
   try
   {
      var cvs = "$Id: js_radio.js 4838 2006-01-18 05:59:01Z hallvord $";
      testmodule( "The Radio object", cvs );

      this.tprop = make_tprop( document.theform );
      tprop( "theradio", "object" );

      this.tprop = make_tprop( radioObject );

      testcase( 'Radio object properties' );
      testRadioProperties( radioObject );

      testcase( 'Radio object methods' );
      testRadioMethods( radioObject );

      if( !isMozilla() )
      {
         testcase( 'event handlers' );
         testEventHandlers( radioObject );
      }
   }
   catch( e )
   {
      exception( e );
   }

   testmodule_finished();
}

function testRadioProperties( radio )
{
   tprop( "checked", "boolean" );
   tprop( "defaultChecked", "boolean" );
   tprop( "form", "object" );
   tprop( "name", "string" );
   tprop( "type", "string" );
   tprop( "value", "string" );

   test( "defaultChecked", radio.defaultChecked, false );
   test( "checked", radio.checked, false );
   test( "form", radio.form, document.theform );
   test( "name", radio.name, "theradio" );
   test( "type", radio.type, "radio" );
   test( "value", radio.value, "Radio default value" );

   radio.value = "New Radio value";
   radio.checked = true;
   radio.defaultChecked = true;

   test( "modified defaultChecked", radio.defaultChecked, true );
   test_s( "modified checked", radio.checked, true );
   test( "modified value", radio.value, "New Radio value" );

   radio.defaultChecked = false;
   radio.form.reset();
   test( "checked after a form.reset() call", radio.checked, false );

   radio.type = "text";
   test( "modified type", radio.type, "text" );
   radio.type = "radio";

   expect_DOM_exception( "Changing a readonly value, radio.form",
                         dom_no_modification_allowed_err,
                         function() { radio.form = "something"; } );
}

function testRadioMethods( radio )
{

   tprop( "click", "function" );
   tprop( "blur", "function" );
   tprop( "focus", "function" );

   if( is_phase( 2 ) )
   {
      tprop( "handleEvent", "function" );
   }
}

function testEventHandlers( radio )
{
   test_spaceagnostic( "onblur", "" + radio.onblur, getEventHandlerSource( 0 ) );
   test_spaceagnostic( "onfocus", "" + radio.onfocus, getEventHandlerSource( 2 ) );
   test_spaceagnostic( "onclick", "" + radio.onclick, getEventHandlerSource( 6 ) );
}

