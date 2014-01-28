/**
 * JavaScript
 * Checkbox object, js 1.3.
 *
 * 10.07.2001, haukur@opera.com
 * $Id:
 *
 *
 */
var tprop;

function main( checkboxObject )
{
   try 
   {
      var cvs = "$Id: js_checkbox.js 4838 2006-01-18 05:59:01Z hallvord $";
      testmodule( "The Checkbox object", cvs );
      
      this.tprop = make_tprop( document.theform );
      tprop( "thecheckbox", "object" );

      this.tprop = make_tprop( checkboxObject );

      testcase( 'Checkbox object properties' );
      testCheckboxProperties( checkboxObject );

      testcase( 'Checkbox object methods' );
      testCheckboxMethods( checkboxObject );

      if( !isMozilla() )
      {
         testcase( 'event handlers' );
         testEventHandlers( checkboxObject );
      }
   }
   catch( e )
   {
      exception( e );
   }

   testmodule_finished();
}
    
function testCheckboxProperties( checkbox )
{
   tprop( "defaultChecked", "boolean" );
   tprop( "checked", "boolean" );
   tprop( "form", "object" );
   tprop( "name", "string" );
   tprop( "type", "string" );
   tprop( "value", "string" );
   
   test( "defaultChecked", checkbox.defaultChecked, true);
   test_s( "checked", checkbox.checked, true);
   test( "form", checkbox.form, document.theform );
   test( "name", checkbox.name, "thecheckbox" );
   test( "type", checkbox.type, "checkbox" );
   test( "value", checkbox.value, "alpha" );

   checkbox.defaultChecked = false;
   checkbox.checked = false;
   checkbox.name = "anewcheckbox";
   checkbox.type = "text";
   checkbox.value = "beta";

   test( "modified defaultChecked", checkbox.defaultChecked, false );
   test( "modified checked", checkbox.checked, false );
   test( "modified name", checkbox.name, "anewcheckbox");
   test( "modified type", checkbox.type, "text");
   test( "modified value", checkbox.value, "beta", 83720);

   checkbox.type = "checkbox";

   expect_DOM_exception( "Changing a readonly value, button.form",
                         dom_no_modification_allowed_err,
                         function() { checkbox.form = "something"; } );
}

function testCheckboxMethods( checkbox )
{

   tprop( "click", "function" );
   tprop( "blur", "function" );
   tprop( "focus", "function" );

   if( is_phase( 2 ) )
   {
      tprop( "handleEvent", "function" );
   }
}

function testEventHandlers( checkbox )
{
   test_spaceagnostic( "onblur", "" + checkbox.onblur, getEventHandlerSource( 0 ) );
   test_spaceagnostic( "onclick", "" + checkbox.onclick, getEventHandlerSource( 1 ) );
   test_spaceagnostic( "onfocus", "" + checkbox.onfocus, getEventHandlerSource( 2 ) );
}

