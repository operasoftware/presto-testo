/**
 * JavaScript
 * Option object, js 1.3.
 *
 * 11.07.2001, torstein@opera.com
 * $Id:
 *
 */
var tprop;
var optionsArray;
var fullconstructorused = false;

function main( selectObject )
{
   try
   {
      var cvs = "$Id: js_option.js 22548 2008-01-23 21:29:12Z hallvord $";
      testmodule( "The Option object", cvs );

      testcase( "Option object exists" );
      this.optionsArray = selectObject;
      var optionObject = optionsArray[ 1 ];
      this.tprop = make_tprop( optionObject );

      tdef( 'option defined', optionObject );

      testcase( "toString" );

      if( isExplorer() )
      {
         test( 'toString',  optionObject, "[object]" );
      }
      else
      {
         test( 'toString',  optionObject, "[object HTMLOptionElement]" );
      }

      testcase( "typeof" );
      test( "typeof", typeof optionObject, "object" );

      testcase( 'Option object properties' );
      testOptionProperties( optionObject );

      testcase( 'Option object empty-constructor' );
      var myoption1 = new Option();
      testOptionConstructor( myoption1 );

      testcase( 'Option object constructor' );
      var myoption2 = new Option( "My option text", "Option default value", false, false );
      this.fullconstructorused = true;
      testOptionConstructor( myoption2 );

      testcase( "The Options array" );
      testOptionsArray( selectObject );
   }
   catch( e )
   {
      exception( e );
   }

   testmodule_finished();
}

function testOptionsArray( selectObject )
{
   this.tprop = make_tprop( selectObject );
   tprop( "options", "object" );
   tprop( "length", "number" );

   test( "Options.toString()", selectObject.options.toString(), "[object HTMLOptionsCollection]" );

   selectObject.length = 0;
   test( "modified Options.length", selectObject.length, 0 );
}


function testOptionConstructor( optionObject )
{
   if( isExplorer() )
   {
      test( 'toString',  optionObject, "[object]" );
   }
   else
   {
      test( 'toString',  optionObject, "[object HTMLOptionElement]" );
   }

   if( optionObject.value != "" )
   {
      testOptionProperties( optionObject );
   }

   var oldLength = optionsArray.length;
   this.optionsArray[ optionsArray.length ] = optionObject;

   test( "adding a new option object to Select.options #1", optionsArray.length, ( oldLength + 1 ), "82214" );
   test_s( 'adding a new option object to Select.options #2',  optionsArray[ optionsArray.length - 1 ], optionObject );
}


function testOptionProperties( option )
{
   tprop( "form", "object" ); // DOM2-HTML
   tprop( "defaultSelected", "boolean" );
   tprop( "index", "number" );
   tprop( "selected", "boolean" );
   tprop( "text", "string" );
   tprop( "value", "string" );

   if( is_phase( 2 ) )
   {
      tprop( "length", "number" ); // bug #82454
      expect_exception( "Changing read-only value, option.length", Error, function() { option.length = 0; } );
   }

   test( "defaultSelected", option.defaultSelected, false );
   test( "option.selected", option.selected, false );
   test( "text", option.text, "My option text" );
   test( "value", option.value, "Option default value" );

   option.selected = true;
   option.defaultSelected = true;
   option.value = "New option value";

   if( this.fullconstructorused )
   {
      test_expect_failure( "modified selected", "80987",
                           option.selected, true,
                           "Failure only occurs when creating an option object using the full constructor." );

      this.fullconstructorused = false;
   }
   else
   {
      test( "modified selected", option.selected, true );
   }

   test( "modified defaultSelected", option.defaultSelected, true );
   test( "modified value", option.value, "New option value" );

   // DOM says this is Read/only, but most browsers allow it to be written.  Opera too.
   option.text = "New option text";
   test( "modified text", option.text, "New option text" );

   expect_DOM_exception( "Changing read-only value, option.form",
                         dom_no_modification_allowed_err,
                         function() { option.form = null; } );
   expect_DOM_exception( "Changing read-only value, option.index",
                         dom_no_modification_allowed_err,
                         function() { option.index = 0; } );


   /* Resetting the modified properties */
   option.selected = false;
   option.value = "My option value";
   option.defaultSelected = false;

   /* If the browser has allowed the altering of the option.text, reset it*/
   if( option.text == "New option text")
   {
      option.text = "Option default value";
   }
}


