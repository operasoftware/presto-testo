
/**
 * JavaScript
 * Image object interactive part, js 1.3.
 *
 * 03.07.2001, torstein@opera.com
 */

var cvs = "$Id: js_image_int.js 4838 2006-01-18 05:59:01Z hallvord $";

function imageSwapNormal()
{
   if( document.images[ 0 ].src.indexOf( "linux" ) == -1 )
   {
      document.images[ 0 ].src = "http://www.opera.com/banners/linux/600/ol600_01mic.png";

   }
   else
   {
      document.images[ 0 ].src = "http://www.opera.com/graphics/logo_z.gif";
   }
}

function imageSwapCached()
{
   if( document.images[ 0 ].src.indexOf( "linux" ) == -1 )
   {
      var img = new Image();
      img.src = "http://www.opera.com/banners/linux/600/ol600_01mic.png";
   }
   else
   {
      var img = new Image();
      img.src = "http://www.opera.com/graphics/logo_z.gif";
   }

   document.images[ 0 ].src = img.src;
}

