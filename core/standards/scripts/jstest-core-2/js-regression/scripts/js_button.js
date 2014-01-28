/**
 * JavaScript
 * Button object, js 1.3.
 *
 * 22.07.2001, haukur@opera.com
 */
var tprop;

function main( buttonObject )
{
   try 
   {
      var cvs = "$Id: js_button.js 4838 2006-01-18 05:59:01Z hallvord $";
      testmodule( "The Button object", cvs );
      
      this.tprop = make_tprop( document.theform );
      tprop( "thebutton", "object" );

      this.tprop = make_tprop( buttonObject );

      testcase( 'Button object properties' );
      testButtonProperties( buttonObject );

      testcase( 'Button object methods' );
      testButtonMethods( buttonObject );

      if( !isMozilla() )
      {
         testcase( 'event handlers' );
         testEventHandlers( buttonObject );
      }
   }
   catch( e )
   {
      exception( e );
   }

   testmodule_finished();

}
      

function testButtonProperties( button )
{
   tprop( "form", "object" );
   tprop( "name", "string" );
   tprop( "type", "string" );
   tprop( "value", "string" );
   
   test( "form", button.form, document.theform );
   test( "name", button.name, "thebutton" );
   test( "type", button.type, "button" );
   test( "value", button.value, "alpha" );

   button.name = "abutton";
   button.type = "text";
   button.value = "beta";

   test( "modified name", button.name, "abutton");
   test( "modified type", button.type, "text");
   test( "modified value", button.value, "beta");

   button.type = "button";
   
   expect_DOM_exception( "Changing a readonly value, button.form",
                         dom_no_modification_allowed_err,
                         function() { button.form = "something"; } );
}

function testButtonMethods( button )
{

   tprop( "blur", "function" );
   tprop( "click", "function" );
   tprop( "focus", "function" );

   if( is_phase( 2 ) )
   {
      tprop( "handleEvent", "function" );
   }
}

function testEventHandlers( button )
{
   test_spaceagnostic( "onblur", "" + button.onblur, getEventHandlerSource( 0 ) );
   test_spaceagnostic( "onclick", "" + button.onclick, getEventHandlerSource( 1 ) );
   test_spaceagnostic( "onfocus", "" + button.onfocus, getEventHandlerSource( 2 ) );
   test_spaceagnostic( "onmousedown", "" + button.onmousedown, getEventHandlerSource( 3 ) );
   test_spaceagnostic( "onmouseup", "" + button.onmouseup, getEventHandlerSource( 4 ) );
}

