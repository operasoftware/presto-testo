/**
 * JavaScript
 * Window object - Interactive version, js 1.3.
 *
 * 05.07.2001, torstein@opera.com
 *
 *  FIXME: routeEvent, captureEvent, handleEvent
 */

var cvs="$Id: js_window_int.js 10655 2006-12-18 15:47:57Z hallvord $";

function moveWindow( win )
{
   win.moveTo( win.screenX + 100, win.screenY + 100 );
}

function resizeWindow( win, resizeWidth )
{
   if( resizeWidth )
   {
      win.outerWidth = win.outerWidth + 10;
   }
   else
   {
      win.outerHeight = win.outerHeight - 10;
   }
}

function unloadDocument( win )
{
   win.history.go( -1 );
}

function triggError()
{
   nonExistingMethodCall();
}

function getPageXOffset( win )
{
   alert( "pageXOffset: " + win.pageXOffset );
}

function getPageYOffset( win )
{
   alert( "pageYOffset: " + win.pageYOffset );
}

function testCaptureEvents( win )
{
   var newwin = win.open( "" );
   newwin.document.write( '<html onfocus="reportEvent( "click" )"><frameset>' );
   newwin.document.write( '<frame src="http://www.linux.com/">' );
   newwin.document.write( '<frame src="http://www.opera.com/">' );
   newwin.document.write( '<frame src="http://www.gnu.org/software/emacs/">' );
   newwin.document.write( '</frameset></html>' );
   newwin.document.close();

   if( win.netscape != undefined )
   {
      if( win.netscape.security != undefined )
      {
         win.netscape.security.PrivilegeManager.enablePrivilege( "UniversalBrowserWrite" ); 
      }
      
      win.enableExternalCapture();
      win.captureEvents( Event.CLICK );
   }
   else
   {
      win.alert( "win.netscape is undefined, therefore neither of enableExternalCapture()" +
                 " disableExternalCapture() or captureEvents() will work." );
   }
}

function testFind( win )
{
   tprop = make_tprop( win.document );

   var newwin = win.open( "", "mywindow", "width=150,height=50" );
   newwin.document.write( '<html><body>' );
   newwin.document.write( '<p>Hello world!</p>' );
   newwin.document.write( '</body></html>' );
   newwin.document.close();

   if( newwin.find != undefined )
   {
      newwin.find( "world" );
   }
   else
   {
      alert( "find() is not supported" );
   }
}

function testFocus( win )
{
   var newwin1 = win.open( "", "win1", "width=150,height=100" );
   newwin1.document.write( "<strong>I should have the focus!</strong>" );
   var newwin2 = win.open( "", "win2", "width=150,height=100" );
   newwin1.focus();
}

function testPrompt( win )
{
   var answer = win.prompt( 'Write something', 'Default text is optional' );
   alert( "The prompt returned: " + answer );  
}

function testScroll( win )
{
   var newwin = win.open( "", "scrollwindow", "height=100,width=200" );
   var htmlstring = '<html><body><div style="width: 200; height: 200; color: red; background-color: cyan;">';
   htmlstring += 'I am 200x200 pixels, but you should not see me</div>';
   htmlstring += '<div style="width: 300; height: 300; color: white; background-color: red;">';
   htmlstring += 'I should be the first you see ( I am 300x300 )</body></html>';
   newwin.document.write( htmlstring );
   newwin.document.close();
   newwin.scroll( 0, 200 );
   
   var anotherwin = win.open( "", "anotherscrollwindow", "height=100,width=100" );
   var htmlstring = '<html><body><div style="width: 200; height: 200; color: red; background-color: cyan;">';
   htmlstring += 'I am 200x200 pixels, You should see my lower right corner in your top left.</div>';
   htmlstring += '<div style="width: 300; height: 300; color: white; background-color: red;">';
   htmlstring += 'I am 300x300</body></html>';
   anotherwin.document.write( htmlstring );
   anotherwin.document.close();
   anotherwin.scroll( 200, 200 );
} 

function testScrollTo( win )
{
   var newwin = win.open( "", "scrollTowindow", "height=100,width=200" );
   var htmlstring = '<html><body><div style="width: 200; height: 200; color: red; background-color: cyan;">';
   htmlstring += 'I am 200x200 pixels, but you should not see me</div>';
   htmlstring += '<div style="width: 300; height: 300; color: white; background-color: red;">';
   htmlstring += 'I should be the first you see ( I am 300x300 )</body></html>';
   newwin.document.write( htmlstring );
   newwin.document.close();
   newwin.scrollTo( 0, 200 );
   
   var anotherwin = win.open( "", "anotherscrollTowindow", "height=100,width=100" );
   var htmlstring = '<html><body><div style="width: 200; height: 200; color: red; background-color: cyan;">';
   htmlstring += 'I am 200x200 pixels, You should see my lower right corner in your top left.</div>';
   htmlstring += '<div style="width: 300; height: 300; color: white; background-color: red;">';
   htmlstring += 'I am 300x300</body></html>';
   anotherwin.document.write( htmlstring );
   anotherwin.document.close();
   anotherwin.scrollTo( 200, 200 );
} 

function testScrollBy( win )
{
   var htmlstring = '<html><body><div style="width: 200; height: 200; color: red; background-color: cyan;">';
   htmlstring += 'I am 200x200 pixels.</div>';
   htmlstring += '<div style="width: 300; height: 300; color: white; background-color: red;">';
   htmlstring += 'I am 300x300, you should see my lower left corner.</body></html>';

   var newwin = win.open( "", "scrollTowindow", "height=100,width=200,scrollbars=yes" );
   newwin.document.write( htmlstring );
   newwin.document.close();
   newwin.scrollTo( 0, 200 );
   newwin.scrollBy( 0, 300 );

   var htmlstring = '<html><body><div style="width: 200; height: 200; color: red; background-color: cyan;">';
   htmlstring += 'I am 200x200 pixels. You should see my lower right in your top left.</div>';
   htmlstring += '<div style="width: 300; height: 300; color: white; background-color: red;">';
   htmlstring += 'I am 300x300</body></html>';

   var anotherwin = win.open( "", "anotherscrollTowindow", "height=100,width=100,scrollbars=yes" );
   anotherwin.document.write( htmlstring );
   anotherwin.document.close();
   anotherwin.scrollBy( 200, 200 );
}

function testSetHotKeys( win )
{
   var newwin = win.open( "", "hotekyswindow" );
   alert( "sethotkeys: " + newwin.setHotKeys + "\n" +
          "setresizable: " + newwin.setResizable + "\n" +
          "setzoptions: " + newwin.setZOptions + "\n" ); 
}

/*
  Need for the stop() test in js_window_int.html

  siID = "setIntervalID"
  stID = "setTimeoutID"

  etc.
*/
var newwin;
var anotherwin;
var siID_1;
var siID_2;
var stID_1;
var stID_2;
var i = 0;


function testSetIntervalLambda( win ) 
{
   newwin = win.open( "", "intervalwindow", "scrollbars=yes,height=400,width=200" );
   siID_1 = win.setInterval( function( a, b )
                             {
                                newwin.document.write( "Old " + a + " had a " + b + "<br>" );
                             },
                             200,
                             "McDonald",
                             "farm"
                             );
}

function testSetIntervalNormal( win ) 
{
   anotherwin = win.open( "", "anotherintervalwindow", "scrollbars=yes,height=400,width=220" );
   siID_2 = win.setInterval( 'doSomething( anotherwin )', 60 );
} 

function doSomething( win )
{
   win.document.write( "I've been called " + ( ++i ) + " times<br>" );
}

function doSomethingElse( win )
{
   var d = new Date();
   win.document.write( "I was called at " + d.toString() );
}

function clearIntervalLambda( win )
{
   newwin.clearInterval( siID_1 );
   newwin.close();
}

function clearIntervalNormal( win )
{
   anotherwin.clearInterval( siID_2 );
   anotherwin = null;
   anotherwin.close();
}

function testSetTimeoutLambda( win )
{
   var d = new Date();
   
   newwin = win.open( "", "timeoutwindow", "scrollbars=yes,height=400,width=200" );
   newwin.document.write( "<h3>Timeout is 4 seconds</h3>" );
   newwin.document.write( "Started at " + d.toString() + "<br>");

   stID_1 = win.setTimeout( function( a, b )
                            {
                               da = new Date();
                               newwin.document.write( "Called at " + da.toString() + "<br>" );
                               newwin.document.write( "arg 1: " + a + "<br>" );
                               newwin.document.write( "arg 2: " + b + "<br>" );
                            },
                            4000,
                            "the first argument",
                            "the second argument"
                          );
}

function testSetTimeoutNormal( win )
{
   var d = new Date();

   anotherwin = win.open( "", "anothertimeoutwindow", "scrollbars=yes,height=400,width=200" );
   anotherwin.document.write( "<h2>Timeout is 3 seconds</h2>" );
   anotherwin.document.write( "Started at " + d.toString() + "<br>");
   stID_2 = win.setTimeout( "doSomethingElse( anotherwin )", 3000 );
}

function clearTimeoutLambda( win )
{
   newwin.clearTimeout( stID_1 );
   newwin.close();
}

function clearTimeoutNormal( win )
{
   anotherwin.clearTimeout( stID_2 );
   anotherwin.close();
}


function testStop( win )
{
   newwin = win.open( "", "stopwindow", "scrollbars=yes" );
   newwin.document.write( '<body><body><a href="javascript:self.stop();">STOP ME! </a><hr>' );
   newwin.document.write( '<script type="text/javascript">while( true ) { document.write( "hello world!" ); }' );
   newwin.document.write( '</script></body></html>' ); 
   newwin.document.close();
}

function test( win )
{
   win.setTimeout( "alert()", 500 );
}
