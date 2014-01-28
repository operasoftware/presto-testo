/**
 * JavaScript
 * Text object, js 1.3.
 *
 * 03.07.2001, torstein@opera.com
 */
var tprop;
expect(33);
function main( textObject )
{
   try 
   {
      var cvs = "$Id: js_text.js 105103 2011-11-14 13:35:10Z hallvord $";
      testmodule( "The Text object", cvs );

      this.tprop = make_tprop( document.theform );
      tprop( "thetext", "object" );

      this.tprop = make_tprop( textObject );

      testcase( 'Text object properties' );
      testTextProperties( textObject );
 
      testcase( 'Text object methods' );
      testTextMethods( textObject );

      if( !isMozilla() )
      {
         testcase( 'event handlers' );
         testEventHandlers( textObject );
      }
   }
   catch( e )
   {
      exception( e );
   }

   testmodule_finished();
}

function testTextProperties( text )
{
   tprop( "defaultValue", "string" );
   tprop( "form", "object" );
   tprop( "name", "string" );
   tprop( "type", "string" );
   tprop( "value", "string" );
      
   test( "value", text.value, "Text default value" );
   if( text.defaultValue != undefined )
   {
      test( "defaultValue ", text.defaultValue, "Text default value" );
      text.defaultValue = "New default value";
      test( "modified defaultValue", text.defaultValue, "New default value" );
   }
   test( "value after modifying defaultValue", text.value, "New default value" );
   test( "form", text.form, document.theform );
   test( "name", text.name, "thetext" );
   test( "type", text.type, "text" );

   text.value = "New Text value";
   text.name = "New Text name";

   test( "modified value", text.value, "New Text value" );
   test( "modified name", text.name, "New Text name" );

   text.type = "password";
   test( "modified type", text.type, "password" );
   text.type = "text";

   expect_DOM_exception( "Changing a readonly value, text.form",
                         dom_no_modification_allowed_err,
                         function() { text.form = "something"; } );
}

function testTextMethods( text )
{

   tprop( "select", "function" );
   tprop( "blur", "function" );
   tprop( "focus", "function" );

}

function testEventHandlers( text )
{
   test_spaceagnostic( "onblur", "" + text.onblur, getEventHandlerSource( 0 ) );
   test_spaceagnostic( "onchange", "" + text.onchange, getEventHandlerSource( 1 ) );
   test_spaceagnostic( "onfocus", "" + text.onfocus, getEventHandlerSource( 2 ) );
   test_spaceagnostic( "onselect", "" + text.onselect, getEventHandlerSource( 6 ) );
}

