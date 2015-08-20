/**
 * JavaScript
 * Image object, js 1.3.
 *
 * 16.07.2001, torstein@opera.com
 * $Id:
 *
 */
var tprop;
var imageArray;

function main( imageArray )
{
   try
   {
      var cvs = "$Id: js_image.js 4838 2006-01-18 05:59:01Z hallvord $";
      testmodule( "The Image object", cvs );

      testcase( "document.images exists" );
      this.imageArray = imageArray;
      this.tprop = make_tprop( document );
      tprop( "images", "collection" );
      tprop( "mypicture", "object" );
      test( 'length', imageArray.length, 2 );

      var imageObject = imageArray[ 0 ];
      this.tprop = make_tprop( imageObject );
      testcase( 'Image object properties' );
      testImageProperties( imageObject );

      testcase( 'Image object methods' );
      testImageMethods( imageObject );

      testcase( 'Image object event handlers' );
      testImageEventHandlers( imageObject );

      /* IE5 crashed here */
      try
      {
         testcase( "Empty Image constructor" );
         var newimage = Image();
         newimage.width = 20;
         newimage.height = 2;
         this.tprop = make_tprop( newimage );
         testImageConstructor( newimage );
      }
      catch( e )
      {
         exception( e );
      }

      testcase( "Image constructor with width" );
      var anothernewimage = Image( "20" );
      anothernewimage.height = 2;
      test( "width", anothernewimage.width, 20, "81283" );
      test( "width", anothernewimage.height, 2 );
      this.tprop = make_tprop( anothernewimage );
      testImageConstructor( anothernewimage );

      testcase( "Image constructor with width and height" );
      var yetanothernewimage = Image( "20", "2" );
      test( "width", yetanothernewimage.width, 20, "81283" );
      test( "height", yetanothernewimage.height, 2, "81283" );
      this.tprop = make_tprop( yetanothernewimage );
      testImageConstructor( yetanothernewimage );
   }
   catch( e )
   {
      exception( e );
   }

   testmodule_finished();
}

function testImageConstructor( imageObject )
{
   if( isExplorer() )
   {
      test( 'toString',  imageObject, "[object]" );
   }
   else
   {
      test( 'toString', imageObject, "[object HTMLImageElement]" );
   }

   imageObject.hspace = 2;
   imageObject.vspace = 10;
   imageObject.border = 1;
   imageObject.name = "mypicture";
   imageObject.src = "http://www.opera.com/graphics/logo_z.gif";
   imageObject.lowsrc="http://www.opera.com/graphics/company/gallery/ledergruppe.jpg";
   testImageProperties( imageObject );
   testImageMethods( imageObject );
}

/* Width and height value tests are performed in main() */
function testImageProperties( image )
{
   tprop( "border", "number" );
   tprop( "complete", "boolean" );
   tprop( "height", "number" );
   tprop( "hspace", "number" );
   tprop( "vspace", "number" );

   if( is_phase( 2 ) )
      tprop( "lowsrc", "string" );

   tprop( "name", "string" );

   tprop( "src", "string" );
   tprop( "width", "number" );

   test( "border", image.border, 1 );
   test( "hspace", image.hspace, 2 );
   test( "vspace", image.vspace, 10 );

   if( image.lowsrc != undefined )
   {
      test( "lowsrc", image.lowsrc, "http://www.opera.com/graphics/company/gallery/ledergruppe.jpg" );
   }

   test( "name", image.name, "mypicture" );
   test( "src", image.src, "http://www.opera.com/graphics/logo_z.gif" );

   image.src = "http://www.opera.com/newimage.jpg";
   test( "changing src", image.src, "http://www.opera.com/newimage.jpg" );

   if( image.lowsrc != undefined )
   {
      image.lowsrc = "http://www.opera.com/newlowimage.jpg";
      test( "changing lowsrc", image.lowsrc, "http://www.opera.com/newlowimage.jpg" );
   }

   /* Read-only JS 1.3, not read-only in DOM2-HTML */
   image.border = 2;
   image.width = 1;
   image.height = 1;
   image.hspace = 1;
   image.vspace = 1;
   image.name ="new name";

   test( "changing image.border", image.border, 2 );
   test( "changing image.width", image.width, 1 );
   test( "changing image.height", image.height, 1 );
   test( "changing image.hspace", image.hspace, 1 );
   test( "changing image.vspace", image.vspace, 1 );
   test( "changing image.name", image.name, "new name" );

   expect_exception( "Changing a readonly value, complete", Error, function() { image.complete = true; } ); // Bug #85182 is fixed
}

function testImageMethods( image )
{
   if( is_phase( 2 ) )
   {
      tprop( "handlEvent", "function" );
   }
}

function testImageEventHandlers( image )
{
   test_expect_failure( "onabort", "81290",
                        removeWhiteSpace( "" + image.onabort ),
                        removeWhiteSpace( getEventHandlerSource( 0 ) ) );

   test_spaceagnostic( "onerror", "" + image.onerror, getEventHandlerSource( 1 ) );
   test_spaceagnostic( "onkeydown", "" + image.onkeydown, getEventHandlerSource( 2 ) );
   test_spaceagnostic( "onkeypress", "" + image.onkeypress, getEventHandlerSource( 3 ) );
   test_spaceagnostic( "onkeyup", "" + image.onkeyup, getEventHandlerSource( 4 ) );
   test_spaceagnostic( "onload", "" + image.onload, getEventHandlerSource( 5 ) );
}
