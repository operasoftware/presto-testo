/**
 * JavaScript
 * Form object, js 1.3.
 *
 * 19.07.2002, haukur@opera.com
 * $Id:
 *
 */
var tprop;

function main( formObject )
{
   try
   {
      var cvs = "$Id";
      testmodule( "The Form object", cvs );

      this.tprop = make_tprop( document.theform );
      tprop( "thetext", "object" );

      this.tprop = make_tprop( formObject );

      testcase( 'Form object properties' );
      testFormProperties( formObject );

      testcase( 'Form object methods' );
      testFormMethods( formObject );

      if( !isMozilla() )
      {
         testcase( 'event handlers' );
         testEventHandlers( formObject );
      }
   }
   catch( e )
   {
      exception( e );
   }

   testmodule_finished();
}

function testFormProperties( form )
{
   tprop( "action", "string" );
   tprop( "elements", "collection" );
   tprop( "encoding", "string" );
   tprop( "length", "number" );
   tprop( "method", "string" );
   tprop( "name", "string" );
   tprop( "target", "string" );

   test( "action", form.action, "http://davis.intern.opera.no/my_repository/js-regression/js_form.htm");
   test( "elements", form.elements, "[object HTMLCollection]");
   test( "length", form.length, 1 );
   test( "method", form.method, "post");
   test( "name", form.name, "theform");
   test( "target", form.target, "http://davis.intern.opera.no");
	
   if( isDefined( form.encoding ) )
   {
      test( "encoding", form.encoding, "multipart/form-data");
      form.encoding = "text/html";
      test( "modified encoding", form.encoding, "text/html");
   }

   form.action = "http://www.slashdot.org/";
   form.method = "get";
   form.name = "newtheform";
   form.target = "http://www.netscape.com";

   test( "modified action", form.action, "http://www.slashdot.org/");
   test( "modified method", form.method, "get");
   test( "modified name", form.name, "newtheform");
   test( "modified target", form.target, "http://www.netscape.com");

   expect_DOM_exception( "Changing a readonly value, form.elements",
                         dom_no_modification_allowed_err,
                         function() { form.elements = "something"; } );
   expect_DOM_exception( "Changing a readonly value, form.length",
                         dom_no_modification_allowed_err,
                         function() { form.length = 0; } );
}

function testFormMethods( form )
{

   tprop( "reset", "function" );
   tprop( "submit", "function" );

   if( is_phase( 2 ) )
   {
      tprop( "handleEvent", "function" );
   }
}

function testEventHandlers( form )
{
   test_spaceagnostic( "onreset", "" + form.onreset, getEventHandlerSource( 0 ) );
   test_spaceagnostic( "onsubmit", "" + form.onsubmit, getEventHandlerSource( 1 ) );
}

