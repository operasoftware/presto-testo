/**
 * JavaScript
 * Submit object, js 1.3.
 *
 * 03.07.2001, torstein@opera.com
 * $Id:
 *
 */
var tprop;

function main( submitObject )
{
   try 
   {
      var cvs = "$Id: js_submit.js 4838 2006-01-18 05:59:01Z hallvord $";
      testmodule( "The Submit object", cvs );

      this.tprop = make_tprop( document.theform );
      tprop( "thesubmit", "object" );

      this.tprop = make_tprop( submitObject );

      testcase( 'Submit object properties' );
      testSubmitProperties( submitObject );
 
      testcase( 'Submit object methods' );
      testSubmitMethods( submitObject );

      if( !isMozilla() )
      {
         testcase( 'event handlers' );
         testEventHandlers( submitObject );
      }
   }
   catch( e )
   {
      exception( e );
   }

   testmodule_finished();
}

function testSubmitProperties( submit )
{
   tprop( "form", "object" );
   tprop( "name", "string" );
   tprop( "type", "string" );
   tprop( "value", "string" );
   tprop( "defaultValue", "string" ); // DOM2-HTML
   
   test( "form", submit.form, document.theform );
   test( "name", submit.name, "thesubmit" );
   test( "type", submit.type, "submit" );
   test( "value", submit.value, "Submit default value" );

   if( submit.defaultValue != undefined )
   {
      test( "defaultValue", submit.defaultValue, "Submit default value" );
      submit.defaultValue = "New default value";
      test_expect_failure( "modified defaultValue", "81115", submit.defaultValue, "New default value" );
   }

   submit.value = "New Submit value";
   submit.name = "New Submit name";

   test( "modified value", submit.value, "New Submit value" );
   test( "modified name", submit.name, "New Submit name" );

   submit.type = "text";
   test( "modified type", submit.type, "text" );
   submit.type = "submit";

   expect_DOM_exception( "Changing a readonly value, submit.form",
                         dom_no_modification_allowed_err,
                         function() { submit.form = "something"; } );
}

function testSubmitMethods( submit )
{

   tprop( "click", "function" );
   tprop( "blur", "function" );
   tprop( "focus", "function" );

   if( is_phase( 2 ) )
   {
      tprop( "handleEvent", "function" );
   }
}

function testEventHandlers( submit )
{
   test_spaceagnostic( "onblur", "" + submit.onblur, getEventHandlerSource( 0 ) );
   test_spaceagnostic( "onclick", "" + submit.onclick, getEventHandlerSource( 1 ) );
   test_spaceagnostic( "onfocus", "" + submit.onfocus, getEventHandlerSource( 2 ) );
}



   
