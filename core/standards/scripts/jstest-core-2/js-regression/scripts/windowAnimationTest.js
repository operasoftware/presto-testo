/**
 * ECMAScript
 * testing the Window object
 *
 * 12.07.2001, torstein@opera.com
 * $Id: windowAnimationTest.js 4838 2006-01-18 05:59:01Z hallvord $
 */

var win;
var wo;
var intervalID;
var x = 0, y = 0;
var w = 50, h = 50;
var dx = 5, dy = 5;
var interval = 100;

function main( windowObject )
{
   try 
   {
      wo = windowObject;

      win = windowObject.open( 'javascript:"<h1>Bounce!</h1>"', "", "width=" + w + ", height=" + h );
      win.moveTo( x, y );

      intervalID = windowObject.setInterval( 'bounce()', interval );
   }
   catch( e )
   {
      exception( e );
   }
}

function bounce()
{
   try 
   {
      if( win.closed )
      {
         wo.clearInterval( intervalID );
         return;
      }

      if( ( x + dx > screen.availWidth - w )  || ( x + dx < 0 ) )
      {
         dx = -dx;
      }

      if( ( y + dy > screen.availHeight - h )  || ( y + dy < 0 ) )
      {
         dy = -dy;
      }

      x += dx;
      y += dy;

      win.moveTo( x, y );
   }
   catch( e )
   {
      exception( e );
   }
}

function stopAnim()
{
   try 
   {
      wo.clearInterval( intervalID );
      win.close();
   }
   catch( e )
   {
      exception( e );
   }
}

