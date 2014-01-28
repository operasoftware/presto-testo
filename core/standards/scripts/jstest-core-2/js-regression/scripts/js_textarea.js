/**
 * JavaScript
 * Textarea object, js 1.3.
 *
 * 03.07.2001, torstein@opera.com
 */
var tprop;

function main( textareaObject )
{
   try 
   {
      var cvs = "$Id: js_textarea.js 4838 2006-01-18 05:59:01Z hallvord $";
      testmodule( "The Textarea object", cvs );

      this.tprop = make_tprop( document.theform );
      tprop( "theta", "object" );

      this.tprop = make_tprop( textareaObject );

      testcase( 'Textarea object properties' );
      testTextareaProperties( textareaObject );
 
      testcase( 'Textarea object methods' );
      testTextareaMethods( textareaObject );

      if( !isMozilla() )
      {
         testcase( 'event handlers' );
         testEventHandlers( textareaObject );
      }
   }
   catch( e )
   {
      exception( e );
   }

   testmodule_finished();
}

function testTextareaProperties( ta )
{
   tprop( "defaultValue", "string" );
   tprop( "form", "object" );
   tprop( "name", "string" );
   tprop( "type", "string" );
   tprop( "value", "string" );

   if( ta.defaultValue != undefined )
   {
      test( "defaultValue ", ta.defaultValue, "Textarea default value" );
      ta.defaultValue = "New default value";
      test( "modified defaultValue", ta.defaultValue, "New default value" );
   }
   
   test( "form", ta.form, document.theform );
   test( "name", ta.name, "theta" );
   test( "type", ta.type, "textarea" );
   test( "value", ta.value, "Textarea default value" );

   ta.name = "New Textarea name";
   ta.value = "New Textarea value";

   test( "modified name", ta.name, "New Textarea name" );
   test( "modified value", ta.value, "New Textarea value" );

   expect_DOM_exception( "Changing read-only value, textarea.form",
                         dom_no_modification_allowed_err,
                         function() { ta.form = "something"; } );
   expect_DOM_exception( "Changing read-only value, textarea.type",
                         dom_no_modification_allowed_err,
                         function() { ta.type = null; } );
}

function testTextareaMethods( ta )
{

   tprop( "select", "function" );
   tprop( "blur", "function" );
   tprop( "focus", "function" );

   if( is_phase( 2 ) )
   {
      tprop( "handleEvent", "function" );
   }
}

function testEventHandlers( ta )
{
   test_spaceagnostic( "onblur", "" + ta.onblur, getEventHandlerSource( 0 ) );
   test_spaceagnostic( "onchange", "" + ta.onchange, getEventHandlerSource( 1 ) );
   test_spaceagnostic( "onfocus", "" + ta.onfocus, getEventHandlerSource( 2 ) );
   test_spaceagnostic( "onkeydown", "" + ta.onkeydown, getEventHandlerSource( 3 ) );
   test_spaceagnostic( "onkeypress", "" + ta.onkeypress, getEventHandlerSource( 4 ) );
   test_spaceagnostic( "onkeyup", "" + ta.onkeyup, getEventHandlerSource( 5 ) );
   test_spaceagnostic( "onselect", "" + ta.onselect, getEventHandlerSource( 6 ) );
}

