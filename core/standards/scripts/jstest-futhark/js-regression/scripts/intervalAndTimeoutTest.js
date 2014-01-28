
/**
 * ECMAScript
 * testing the Window object
 *
 * 11.07.2001, torstein@opera.com
 * $Id: intervalAndTimeoutTest.js 19486 2007-10-08 13:12:39Z hallvord $
 */

var windowObject2 = null;
var i = 0;

function clock()
{
   try 
   {
      if( i == 0 )
      {
         print( 'setInterval( \'method()\', interval ) works' );
      }

      var d = new Date();
      var h = d.getHours();
      var m = d.getMinutes();
      var s = d.getSeconds();

      if( m < 10 ) m = "0" + m;
      if( s < 10 ) s = "0" + s;

      var t = h + ":" + m + ":" + s;

      print( 'Updated the clock! update number ' + ++i );
      windowObject2.defaultStatus = t; 
   }
   catch( e )
   {
      exception( e );
   }
}

var j = 0;
var ok = 0;
var ready = 0;

function killClock()
{
   windowObject2.clearInterval( intervalID );
   print( 'Killed clock after it had updated itself ' + i + ' times' );
   print( 'clearInterval( intervalID ) works' );
   print( 'setTimeout( \'method()\', timeout ) works' );

   testTo();
}

function clearto2()
{
   ok = 0;
   print( 'clearTimeout( timeoutID ) doesn\'t work' );
}

function clearto1( timeoutID )
{
   clearTimeout( timeoutID );
   ok = 1;
}

function testTo()
{
   timeoutID = setTimeout( 'clearto2()', 10000 );
   clearto1( timeoutID );

   if( ok == 1 ) 
   {
      print( 'clearTimeout( timeoutID ) worked' );
   }
}

function main2( wo )
{
   windowObject2 = wo;
   intervalID = windowObject2.setInterval( 'clock()', 1000 );

   setTimeout( 'killClock()', 3000 );
}

