/**
 * JavaScript
 * MimeType object, js 1.3.
 *
 * 15.07.2001, torstein@opera.com
 */
var tprop;

function main( windowObject )
{
   try
   {
      var cvs = "$Id: js_mimetype.js 4838 2006-01-18 05:59:01Z hallvord $";
      testmodule( "The MimeType object", cvs );

      /*
        Testing *all* mimeTypes objects available in the document,
        using both ways of accessing them, through the
        navigator.mimeTypes array and through the
        navigator.plugins array.
      */
      for( var i = 0; i < windowObject.navigator.mimeTypes.length; i++ )
      {
         var mimeTypeObject = windowObject.navigator.mimeTypes[ i ];
         this.tprop = make_tprop( mimeTypeObject );

         testcase( "MimeType exists" );
         tdef( "defined", mimeTypeObject );

         testcase( "toString" );
         test( 'toString',  mimeTypeObject + "", "[object MimeType]" );

         testcase( "typeof" );
         test( "typeof", typeof mimeTypeObject, "object" );

         testcase( 'MimeType object properties' );
         testMimeTypeProperties( mimeTypeObject );
      }

      for( var j = 0; j < windowObject.navigator.plugins.length; j++ )
      {
         for( var k = 0; k < windowObject.navigator.plugins[ j ].length; k++ )
         {
            var mimeTypeObject = windowObject.navigator.plugins[ j ][ k ];
            this.tprop = make_tprop( mimeTypeObject );

            testcase( "MimeType exists" );
            tdef( "defined", mimeTypeObject );

            testcase( "toString" );
            test( 'toString',  mimeTypeObject + "", "[object MimeType]" );

            testcase( "typeof" );
            test( "typeof", typeof mimeTypeObject, "object" );

            testcase( 'MimeType object properties' );
            testMimeTypeProperties( mimeTypeObject );
         }
      }

      testcase( "MimeType object properties" );
      test( "type different from description",
                           navigator.mimeTypes[ 10 ].type == navigator.mimeTypes[ 10 ].description,
			   false );

      testcase( 'Standard way of accessing the mimetype properties' );

      try
      {
         test( "navigator.mimeTypes[\"image/jpeg\"].type", navigator.mimeTypes["image/jpeg"].type, "image/jpeg" );
         test_expect_failure( "navigator.mimeTypes[\"image/jpeg\"].description",
	       86238,
	       navigator.mimeTypes["image/jpeg"].description,
	       "JPEG Image" );
	 var suff = navigator.mimeTypes["image/jpeg"].suffixes;
         test( "navigator.mimeTypes[\"image/jpeg\"].suffixes",
	       suff.indexOf("jpeg") > -1 && suff.indexOf("jpg") > -1 && suff.indexOf("jpe") > -1,
               true );

         if( is_phase( 2 ) )
            test( "navigator.mimeTypes[\"image/jpeg\"].enabledPlugin", navigator.mimeTypes["image/jpeg"].enabledPlugin, null );
      }
      catch( e )
      {
         exception( e );
      }
   }
   catch( e )
   {
      exception( e );
   }

   testmodule_finished();
}

function testMimeTypeProperties( mimeTypeObject )
{
   tprop( "description", "string" );
   tprop( "suffixes", "string" );
   tprop( "type", "string" );

   expect_exception( "changing read-only value, description", Error, function() { mimeTypeObject.description = null; } );
   expect_exception( "changing read-only value, suffixes", Error, function() { mimeTypeObject.suffixes = null; } );
   expect_exception( "changing read-only value, type", Error, function() { mimeTypeObject.type = null; } );

   if( is_phase( 2 ) )
   {
      tprop( "enabledPlugin", "object" );
      expect_exception( "changing read-only value, enabledPlugin", Error, function() { mimeTypeObject.enabledPlugin = null; } );
   }
}

