/**
 * JavaScript
 * Password object, js 1.3.
 *
 * 03.07.2001, torstein@opera.com
 * $Id:
 *
 */
var tprop;

function main( passwordObject )
{
   try 
   {
      var cvs = "$Id: js_password.js 4838 2006-01-18 05:59:01Z hallvord $";
      testmodule( "The Password object", cvs );

      testcase( "Password exists" );
      this.tprop = make_tprop( document.theform );
      tprop( "thepassword", "object" );

      this.tprop = make_tprop( passwordObject );

      testcase( 'Password object properties' );
      testPasswordProperties( passwordObject );
 
      testcase( 'Password object methods' );
      testPasswordMethods( passwordObject );

      if( !isMozilla() )
      {
         testcase( 'event handlers' );
         testEventHandlers( passwordObject );
      }
   }
   catch( e )
   {
      exception( e );
   }

   testmodule_finished();
}

function testPasswordProperties( password )
{
   tprop( "defaultValue", "string" );
   tprop( "form", "object" );
   tprop( "name", "string" );
   tprop( "type", "string" );
   tprop( "value", "string" );
   
   test( "defaultValue ", password.defaultValue, "Password default value" );
   test( "form", password.form, document.theform );
   test( "name", password.name, "thepassword" );
   test( "type", password.type, "password" );
   test( "value", password.value, "Password default value" );

   password.value = "New Password value";
   password.defaultValue = "New default value";

   test( "modified value", password.value, "New Password value" );
   test( "modified defaultValue", password.defaultValue, "New default value" );

   password.type = "text";
   test( "modified type", password.type, "text" );
   password.type = "password";

   expect_DOM_exception( "Changing a readonly value, password.form",
                         dom_no_modification_allowed_err,
                         function() { password.form = null; } );
}

function testPasswordMethods( password )
{
   tprop( "select", "function" );
   tprop( "blur", "function" );
   tprop( "focus", "function" );

   if( is_phase( 2 ) )
   {
      tprop( "handleEvent", "function" );
   }
}

function testEventHandlers( password )
{
   test_spaceagnostic( "onblur", "" + password.onblur, getEventHandlerSource( 0 ) );
   test_spaceagnostic( "onfocus", "" + password.onfocus, getEventHandlerSource( 2 ) );
}

