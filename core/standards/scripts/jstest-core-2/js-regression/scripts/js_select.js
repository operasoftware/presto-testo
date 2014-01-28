/**
 * JavaScript
 * Select object, js 1.3.
 *
 * 10.07.2001, torstein@opera.com
 * $Id:
 *
 */
var tprop;

function main( selectObject )
{
   try 
   {
      var cvs = "$Id: js_select.js 4838 2006-01-18 05:59:01Z hallvord $";
      testmodule( "The Select object", cvs );

      this.tprop = make_tprop( document.theform );
      tprop( "theselect", "object" );

      this.tprop = make_tprop( selectObject );

      testcase( 'Select object properties' );
      testSelectProperties( selectObject );
 
      testcase( 'Select object methods' );
      testSelectMethods( selectObject );

      if( !isMozilla() )
      {
         testcase( 'event handlers' );
         testEventHandlers( selectObject );
      }
   }
   catch( e )
   {
      exception( e );
   }

   testmodule_finished();
}

function testSelectProperties( select )
{
   tprop( "form", "object" );
   tprop( "length", "number" );
   tprop( "name", "string" );
   tprop( "type", "string" );
   tprop( "options", "function" ); 
   tprop( "selectedIndex", "number" );
   tprop( "type", "string" );
   
   test( "form", select.form, document.theform );
   test( "length", select.length, 2 ); 
   test( "name", select.name, "theselect" );

   test( "type", document.theform.theselect.type, "select-one" );
   test( "type", document.theform.theselect2.type, "select-multiple" );

   test( "options toString()", select.options, "[object HTMLOptionsCollection]" );
   test( "options.length", select.options.length, 2 );

   test( "options[ 0 ] toString()", select.options[ 0 ], "[object HTMLOptionElement]" );
   test( "typeof typeof options[ 0 ]", typeof select.options[ 0 ], "object" );
   test( "options[ 0 ].value", select.options[ 0 ].value, "first option value" );
   test( "options[ toobigindex ]", select.options[ 10 ], undefined );

   try
   {
      test( "options( 0 ) toString()", select.options( 0 ), "[object HTMLOptionElement]" );
      test( "typeof typeof options( 0 )", typeof select.options( 0 ), "object" );
      test( "options( 0 ).value", select.options( 0 ).value, "first option value" );
      test( "options( toobigindex )", select.options( 10 ), undefined );
   }
   catch( e )
   {
      exception( e );
   }
   
   test( "selectedIndex", select.selectedIndex, 0 );

   select.selectedIndex = 1;
   test( "selectedIndex", select.selectedIndex, 1 );

   select.selectedIndex = -1;
   test( "setting selectedIndex to -1", select.selectedIndex, -1, 86240 );
   

   /* In ECMAScript, indices are always nonnegative, and negative indices are
      just names, so this is just select.options[ "-1" ], and there is nothing
      special about it.
   expect_DOM_exception( "options[ negativeindex ]",
                         dom_index_size_err,
                         function() { select.options[ -1 ] } );
   */
   expect_DOM_exception( "Changing a readonly value, select.form",
                         dom_no_modification_allowed_err,
                         function() { select.form = "something"; } );
   expect_DOM_exception( "Changing a readonly value, select.options",
                         dom_no_modification_allowed_err,
                         function() { select.options = "something"; } );
   expect_DOM_exception( "Changing a readonly value, select.type",
                         dom_no_modification_allowed_err,
                         function() { select.type = "something"; } );

   select.length = 0;
   select.name = "New Select name";
   
   test( "Modified select.length", select.length, 0 );
   test( "Modified select.name", select.name, "New Select name" );
}

function testSelectMethods( select )
{
   tprop( "blur", "function" );
   tprop( "focus", "function" );
   
   if( is_phase( 2 ) )
   {
      tprop( "handleEvent", "function" );
   }
}

function testEventHandlers( select )
{
   test_spaceagnostic( "onblur", "" + select.onblur, getEventHandlerSource( 0 ) );
   test_spaceagnostic( "onchange", "" + select.onchange, getEventHandlerSource( 1 ) );
   test_spaceagnostic( "onfocus", "" + select.onfocus, getEventHandlerSource( 2 ) );
}

