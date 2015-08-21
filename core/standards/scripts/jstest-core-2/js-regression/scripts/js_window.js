/**
 * JavaScript
 * Window object, js 1.3.
 *
 * 03.07.2001, torstein@opera.com
 * $Id:
 */
var tprop;
var newwin;

function main( windowObject )
{
   var cvs = "$Id: js_window.js 4838 2006-01-18 05:59:01Z hallvord $";
   testmodule( "The Window object", cvs );

   try
   {
      this.tprop = make_tprop( windowObject );

      testcase( "Window readable" );
      tdef( 'defined', windowObject );
      test( "self and window are synonymous", self, window );

      test( 'toString', String (window), "[object Window]" );

      test( "typeof", typeof window, "object" );

      testcase( 'Window object constructor' );
      testWindowConstructor( windowObject );

      testcase( 'Window object properties' );
      testWindowProperties( windowObject );
      testWindowToolbars( windowObject, true );
      testWindowObjectSpecificProperties( windowObject );

      testcase( 'Window object methods' );
      testWindowMethods( windowObject );
   }
   catch( e )
   {
      exception( e );
   }
   finally
   {
      if( this.newwin != undefined && !this.newwin.closed )
      {
         this.newwin.close();
      }
   }

   testmodule_finished();
}

function testWindowConstructor( win )
{
   var win_name = "First new window";

   var inner_width  = 200;
   var inner_height = 250;
   var screen_x = 10;
   var screen_y = 20;

   var location = "yes";
   var directories = "yes";
   var menubar = "yes";
   var scrollbars = "yes";
   var status = "yes";
   var toolbar = "yes";

   this.newwin = win.open( "", win_name,
                           "width=" + inner_width + "," +
                           "height=" + inner_height + "," +
                           "left=" + screen_x + "," +
                           "top=" + screen_y + "," +
                           "location=" + location + "," +
                           "directories=" + directories + "," +
                           "menubar=" + menubar + "," +
                           "scrollbars=" + scrollbars + "," +
                           "status=" + status + "," +
                           "toolbar=" + toolbar );

   var winok = newwin !== null && newwin !== undefined;
   test( "window exists", winok, true );
   if( !winok ) return;

   test( "name", newwin.name, win_name );
   test( "innerWidth", newwin.innerWidth, inner_width );
   test( "innerHeight", newwin.innerHeight, inner_height );
   test( "screenX", newwin.screenX, screen_x );
   test( "screenY", newwin.screenY, screen_y );

   if( newwin.locationbar != undefined )
   {
      test( "locationbar", newwin.locationbar.visible, getBoolean( location ) );
   }
   if( newwin.personalbar != undefined )
   {
      test( "personalbar", newwin.personalbar.visible, getBoolean( directories ) );
   }
   if( newwin.menubar != undefined )
   {
      test( "menubar", newwin.menubar.visible, getBoolean( menubar ) );
   }
   if( newwin.scrollbars != undefined )
   {
      test( "scrollbars", newwin.scrollbars.visible, getBoolean( scrollbars ) );
   }
   if( newwin.statusbar != undefined )
   {
      test( "statusbar", newwin.statusbar.visible, getBoolean( status ) );
   }
   if( newwin.toolbarbar != undefined )
   {
      test( "toolbar", newwin.toolbar.visible, getBoolean( toolbar ) );
   }

   newwin.close();
}

function testWindowProperties( win )
{
   tprop( "closed", "boolean" );

   if( is_phase( 2 ) )
   {
      tprop( "crypto", "object" ); // bug #81136
      tprop( "crypto.random", "string" );
      tprop( "crypto.signText", "string" );
      expect_exception( "changing read-only value, win.crypto", Error, function() { win.crypto = null; } );
   }

   tprop( "defaultStatus", "string" );
   tprop( "document", "object" );

   /*
     Doing it the old way, since we don't want a WindowCollection
     instead of a HTMLCollection. ( would otherwise have used tprop() ).

     All other frame specific testing in js_frame.js -torstein
   */
   tdef( "win.document.frames", win.document.frames );
   test( "win.frames toString", String (win.frames), "[object WindowCollection]" );

   if( isMozilla() || isExplorer() )
   {
      test( "typeof win.frames", typeof win.frames, "object" );
   }
   else
   {
      test( "typeof win.frames", typeof win.frames, "function" );
   }

   tprop( "history", "object" );
   tprop( "innerHeight", "number" );
   tprop( "innerWidth", "number" );
   tprop( "outerHeight", "number" );
   tprop( "outerWidth", "number" );
   tprop( "length", "number" );
   tprop( "location", "object" );

   if( is_phase( 2 ) )
   {
      tprop( "offscreenBuffering", "boolean" );
      tprop( "locationbar", "object" ); // The *bar are all undefined, bug #81140
      tprop( "menubar", "object" );
      tprop( "personalbar", "object" );
      tprop( "scrollbars", "object" );
      tprop( "statusbar", "object" );
      tprop( "toolbar", "object" );
   }

   tprop( "name", "string" );
   tprop( "opener", "object" );
   tprop( "pageXOffset", "number" );
   tprop( "pageYOffset", "number" );
   tprop( "parent", "object" );
   tprop( "screenX", "number" );
   tprop( "screenY", "number" );
   tprop( "self", "object" );
   tprop( "top", "object" );
   tprop( "window", "object" );
   tprop( "java", "object" );
   tprop( "Packages", "object" );
   tprop( "event", "object" ); // object according to msdn.microsoft.com

   test( "closed", win.closed, false );

   win.defaultStatus = "";
   test( "defaultStatus", win.defaultStatus, "" );

   win.defaultStatus = "new default status";
   test( "changed defaultStatus", win.defaultStatus, "new default status" );

   try
   {
      test( "typeof window.document", typeof win.document, "object" );
      var org_document = win.document;
      win.document = null;
      test( "setting win.document to null", win.document, null );
      win.document = org_document;
      test( "replacing win.document after setting it to null", win.document, org_document );
   }
   catch( e )
   {
      exception( e, "Replacing the document object of a window object" );
   }

   try
   {
      win.history = null;
      test( "setting win.history to null", win.history, null );
   }
   catch( e )
   {
      exception( e, "Replacing the history object of a window object" );
   }

   win.name = "new name";
   test( "changing win.name", win.name, "new name" );

   if( win.offscreenBuffering != undefined )
   {
      win.offscreenBuffering = true;
      test( "setting offscreenBuffering to true", win.offscreenBuffering, true );
      win.offscreenBuffering = false;
      test( "setting offscreenBuffering to false", win.offscreenBuffering, false );
   }

   test_s( "win.parent", win.parent, self );
   test_s( "self", self, win );

   win.status = "";
   test( "win.status", win.status, "" );
   win.status = "new status";
   test( "change win.status", win.status, "new status" );

   test_s( "win.top", win.top, self );
   test( "win.top toString", String (win.top), "[object Window]" );
   test( "typeof win.top", typeof win.top + "", "object" );

   test( "window", window, self );

}

/**
 * Seperated these tests so they can be used with both the frame and
 * window tests. 'initialState' is the visibility of the different bars
 * on the 'win' object. For the js_window.html test, this will be
 * 'true', whereas it is 'false' for the js_frame.html test
 * ( a frame doesn't have any *bars ).
 */
function testWindowToolbars( win, initialState )
{
   /*
     Toggling the locationbar, personalbar and menubar on and off, so that running the test
     can be run several times in the browser with reloading of the source.
     ( the initial visible test would fail otherwise ).
    */

   if( win.locationbar != undefined )
   {
      test( "win.locationbar toString", win.locationbar + "", "[object BarProp]" );
      test( "win.locationbar.visible", win.locationbar.visible, initialState );

      win.locationbar.visible = !initialState;
      test( "changing win.locationbar.visible", win.locationbar.visible, !initialState );
      win.locationbar.visible = initialState;
      test( "changing win.locationbar.visible", win.locationbar.visible, initialState );
   }

   if( win.menubar != undefined )
   {
      test( "win.menubar toString", win.menubar + "", "[object BarProp]" );
      test( "win.menubar.visible", win.menubar.visible, initialState );

      win.menubar.visible = !initialState;
      test( "changing win.menubar.visible", win.menubar.visible, !initialState );
      win.menubar.visible = initialState;
      test( "changing win.menubar.visible", win.menubar.visible, initialState );
   }

   if( win.personalbar != undefined )
   {
      test( "win.personalbar toString", win.personalbar + "", "[object BarProp]" );
      test( "win.personalbar.visible", win.personalbar.visible, initialState );

      win.personalbar.visible = !initialState;
      test( "changing win.personalbar.visible", win.personalbar.visible, !initialState );
      win.personalbar.visible = initialState;
      test( "changing win.personalbar.visible", win.personalbar.visible, initialState );
   }

   if( win.scrollbars != undefined )
   {
      test( "win.scrollbars toString", win.scrollbars + "", "[object BarProp]" );
      test( "win.scrollbars.visible", win.scrollbars.visible, initialState );

      win.scrollbars.visible = !initialState;
      test( "changing win.scrollbars.visible", win.scrollbars.visible, !initialState );
      win.scrollbars.visible = initialState;
      test( "changing win.scrollbars.visible", win.scrollbars.visible, initialState );
   }

   if( win.statusbar != undefined )
   {
      test( "win.statusbar toString", win.statusbar + "", "[object BarProp]" );
      test( "win.statusbar.visible", win.statusbar.visible, initialState );

      win.statusbar.visible = !initialState;
      test( "changing win.statusbar.visible", win.statusbar.visible, !initialState );
      win.statusbar.visible = initialState;
      test( "changing win.statusbar.visible", win.statusbar.visible, initialState );
   }

   if( win.toolbar != undefined )
   {
      test( "win.toolbar toString", win.toolbar + "", "[object BarProp]" );
      test( "win.toolbar.visible", win.toolbar.visible, initialState );

      win.toolbar.visible = !initialState;
      test( "changing win.toolbar.visible", win.toolbar.visible, !initialState );
      win.toolbar.visible = initialState;
      test( "changing win.toolbar.visible", win.toolbar.visible, initialState );
   }
}

/* Tests that can't be used by the Frame test */
function testWindowObjectSpecificProperties( win )
{
   test( "win.length", win.length, 0 );

   var winlocation = win.location + "";
   winlocation = winlocation.substr( winlocation.lastIndexOf( "/" ) + 1 );
   test( "win.location", winlocation, "js_window.html" );

   if (win.opener)
	test_expect_failure( "win.opener", 85168, win.opener, "[object Window]" );
   else
	test( "win.opener", win.opener, null );
   win.opener = win;
   test( "changing the win.opener", win.opener, win );
}

function testWindowMethods( win )
{
   tprop( "alert", "function" );
   tprop( "back", "function" );
   tprop( "blur", "function" );
   tprop( "captureEvents", "function" );
   tprop( "clearInterval", "function" );
   tprop( "clearTimeout", "function" );
   tprop( "close", "function" );
   tprop( "confirm", "function" );

   if( win.crypto != undefined )
   {
      tprop( "crypto.random", "function" );
      tprop( "crypto.signText", "function" );
   }

   tprop( "disableExternalCapture", "function" );
   tprop( "enableExternalCapture", "function" );
   tprop( "focus", "function" );
   tprop( "forward", "function" );

   if( is_phase( 2 ) )
   {
      tprop( "atob", "function" ); // base-64 en/decoding, #81155
      tprop( "btoa", "function" ); // base-64 en/decoding, #81155
      tprop( "find", "function" );
      tprop( "handleEvent", "function" );
      tprop( "routeEvent", "function" );
      tprop( "setHotKeys", "function" ); // #81142
      tprop( "setResizable", "function" ); // #81143
      tprop( "setZOptions", "function" ); // #81144
   }

   tprop( "home", "function" );
   tprop( "moveBy", "function" );
   tprop( "moveTo", "function" );
   tprop( "open", "function" );
   tprop( "print", "function" );
   tprop( "prompt", "function" );
   tprop( "releaseEvents", "function" );
   tprop( "resizeBy", "function" );
   tprop( "scroll", "function" );
   tprop( "scrollBy", "function" );
   tprop( "scrollTo", "function" );
   tprop( "setInterval", "function" );
   tprop( "setTimeout", "function" );
   tprop( "stop", "function" );

   var oldx = win.screenX;
   var oldy = win.screenY;
   var oldwidth = win.outerWidth;
   var oldheight = win.outerHeight;

   win.moveBy( 10, 5 );
   test( "moveBy", win.screenX, ( oldx + 10 ) );
   test( "moveBy", win.screenY, ( oldy + 5 ) );

   win.moveTo( 20, 30 );
   test( "moveTo, screenX", win.screenX, 20, "81169" );
   test( "moveTo, screenY", win.screenY, 30, "81169" );

   win.resizeBy( 10, 10 );
   test( "resizeBy, outerWidth", win.outerWidth, ( oldwidth + 10 ) );
   test( "resizeBy, outerHeight", win.outerHeight, ( oldheight + 10 ) );

   win.resizeTo( 200, 300 );
   test( "resizeTo, outerWidth", win.outerWidth, 200 );
   test( "resizeTo, outerHeight", win.outerHeight, 300 );

   win.resizeTo( oldwidth, oldheight );
   win.moveTo( oldx, oldy );
}

function getBoolean( s )
{
   if( s == "yes" )
   {
      return true;
   }
   else if( s == "no" )
   {
      return false;
   }
}

