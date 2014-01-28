/**
 * JavaScript
 * Fileupload object, js 1.3.
 *
 * 03.07.2002, haukur@opera.com
 * $Id:
 *
 */
var tprop;

function main( fileuploadObject )
{
   try 
   {
      var cvs = "$Id: js_fileupload.js 4838 2006-01-18 05:59:01Z hallvord $";
      testmodule( "The FileUpload object", cvs );
      
      this.tprop = make_tprop( document.theform );
      tprop( "thefile", "object" );

      this.tprop = make_tprop( fileuploadObject );

      testcase( 'FileUpload object properties' );
      testFileUploadProperties( fileuploadObject );

      testcase( 'FileUpload object methods' );
      testFileUploadMethods( fileuploadObject );

      if( !isMozilla() )
      {
         testcase( 'event handlers' );
         testEventHandlers( fileuploadObject );
      }
   }
   catch( e )
   {
      exception( e );
   }

   testmodule_finished();
}
    
function testFileUploadProperties( file )
{
   tprop( "form", "object" );
   tprop( "name", "string" );
   tprop( "type", "string" );
   tprop( "value", "string" );
   
   test( "form", file.form, document.theform );
   test( "name", file.name, "thefile" );
   test( "type", file.type, "file" );
   test( "value", file.value, "File default value" );

   file.value = "New FileUpload value";
   file.name = "afile";
   file.type = "text";

   test_expect_failure( "modified value", 0, file.value, "New FileUpload value", "feature not implemented for security reasons" );
   test( "modified name", file.name, "afile" );
   test( "modified type", file.type, "text" );

   file.type = "file";

   expect_DOM_exception( "Changing a readonly value, button.form",
                         dom_no_modification_allowed_err,
                         function() { file.form = "something"; } );
}

function testFileUploadMethods( file )
{

   tprop( "select", "function" );
   tprop( "blur", "function" );
   tprop( "focus", "function" );

   if( is_phase( 2 ) )
   {
      tprop( "handleEvent", "function" );
   }
}

function testEventHandlers( file )
{
   test_spaceagnostic( "onblur", "" + file.onblur, getEventHandlerSource( 0 ) );
   test_spaceagnostic( "onchange", "" + file.onchange, getEventHandlerSource( 1 ) );
   test_spaceagnostic( "onfocus", "" + file.onfocus, getEventHandlerSource( 2 ) );
}

