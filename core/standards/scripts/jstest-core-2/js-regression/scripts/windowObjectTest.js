
/**
 * ECMAScript
 * testing the Window object
 *
 * 09.07.2001, torstein@opera.com
 * $Id: windowObjectTest.js 4838 2006-01-18 05:59:01Z hallvord $
 */

function main( windowObject )
{
   var cvs = "$Id: windowObjectTest.js 4838 2006-01-18 05:59:01Z hallvord $";
   printHeader( "The Window object", cvs );
   print( '' );
   try 
   {
      setTestCase( 'Window object properties' );
      testWindowProperties( windowObject );
      setTestCase( 'Window object properties, subwindow' );
      var win = windowObject.open( "windowHelper.html", "Window property test", null );
	  if(win == null)
	  {
	    print("Window did not open. Please enable popup windows to run this test.");
		return;
	  };
      testWindowProperties(win);
      win.close();
      setTestCase( 'Window object property values' );
      testWindowPropertyValues( windowObject );
      setTestCase( "Properties are writeable" );
      testWindowPropertyWrite( windowObject );
      setTestCase( 'Window object methods' );
      testWindowMethods( windowObject );

   }
   catch( e )
   {
      exception( e );
   }
   printTail();
}

function testWindowProperties( windowObject )
{
   try 
   {
      testProperty( "closed", windowObject.closed );
      testProperty( "defaultStatus", windowObject.defaultStauts );
      testProperty( "status", windowObject.status );
      testProperty( "document", windowObject.document );
      testProperty( "frames[]", windowObject.frames );
      testProperty( "history", windowObject.history );
      testProperty( "innerHeight", windowObject.innerHeight );
      testProperty( "innerWidth", windowObject.innerWidth );
      testProperty( "outerHeight", windowObject.outerHeight );
      testProperty( "outerWidth", windowObject.outerWidth );
      testProperty( "location", windowObject.location );
      testProperty( "locationbar", windowObject.locationbar );
      testProperty( "menubar", windowObject.menubar );
      testProperty( "personalbar", windowObject.personalbar );
      testProperty( "scrollbars", windowObject.scrollbars );
      testProperty( "statusbar", windowObject.statusbar );
      testProperty( "toolbar", windowObject.toolbar );
      testProperty( "name", windowObject.name );
      testProperty( "opener", windowObject.opener );
      testProperty( "pageXOffset", windowObject.pageXOffset );
      testProperty( "pageYOffset", windowObject.pageYOffset );
      testProperty( "parent", windowObject.parent );
      testProperty( "self", windowObject.self );
      testProperty( "top", windowObject.top );
      testProperty( "window", windowObject.window );
      testProperty( "java", windowObject.java );
      testProperty( "Packages", windowObject.Packages );
      testProperty( "event", windowObject.event );
   }
   catch( e )
   {
      exception( e );
   }
}

function testWindowMethods( windowObject )
{
   try 
   {
      windowObject.alert( 'Alert message' );

      a = windowObject.confirm( 'Please press OK' );
      test( 'windowObject.confirm()', a, true );

      a = windowObject.confirm( 'Please press Cancel' );
      test( 'windowObject.confirm()', a, false );

      b = windowObject.prompt( 'Write \'hello\'' );
      test( 'windowObject.prompt()', b, 'hello' );

      b = windowObject.prompt( 'Write \'hello\' again', 'This is not hello' );
      test( 'windowObject.prompt()', b, 'hello' );

      b = windowObject.prompt( 'Please press cancel' );
      test( 'windowObject.prompt()', b, null );		// JS spec does not say.

      win = windowObject.open( "popupwindow.html", "IBM Testsuite", "width=400, height=400, status=0, resizable=0, scrollbars=1, location=1, menubar=1, toolbar=1, directories=1" );
      win.status='Hello there from the statusbar';
      win.blur();
      windowObject.focus();
      windowObject.document.writeln( 'This window should have focus now, after opening the popup' );

   }
   catch( e )
   {
      exception( e );
   }
}

var win_name = "Window property test";
var outer_width  = 200;
var outer_height = 250;
var inner_width  = 100;
var inner_height = 150;
var scroll_x_offset = 10;
var scroll_y_offset = 10;

// Test window properties against features set when opening window
// If test fails, properties or open function may be wrong 

function testWindowPropertyValues( windowObject )
{
  win = windowObject.open( "windowHelper.html", win_name, 
    "innerWidth="+inner_width+", innerHeight="+inner_height );
	
  test( "closed",       win.closed, false );
  test( "defaultStatus",win.defaultStatus, "" ); // Not defined
  test( "document",     win.document.title, "Window Help" );
//  test( "locationbar",  win.locationbar, "" ); // No idea what to expect
//  test( "menubar",      win.menubar, "" ); // No idea what to expect
//  test( "personalbar",  win.personalbar, "" );  // No idea what to expect
//  test( "scrollbars",   win.scrollbars, "" );  // No idea what to expect
//  test( "statusbar",    win.statusbar, "" );  // No idea what to expect
//  test( "toolbar",      win.toolbar, "" );  // No idea what to expect
  test( "name",         win.name, win_name ); 
  test( "opener",       win.opener, windowObject ); 
  test( "parent",       win.parent, win ); 
  test( "self",         win.self, win ); 
  test( "status",       win.status, "" ); 
  test( "top",          win.top, win ); 
  test( "window",       win.window, win ); 

  win.close();
  
  win = windowObject.open( "windowHelper.html", "Window property test", 
    "innerWidth="+inner_width+", innerHeight="+inner_height );
	
  test( "innerWidth",win.innerWidth, inner_width );
  test( "innerHeight",win.innerHeight, inner_height );

  win.scrollTo(scroll_x_offset,scroll_y_offset);
  
  test( "pageXOffset",  win.pageXOffset, scroll_x_offset ); 
  test( "pageYOffset",  win.pageYOffset, scroll_y_offset ); 

  win.close();
  
  win = windowObject.open( "windowHelper.html", "Window property test", 
    "outerWidth="+outer_width+", outerHeight="+outer_height );
	
  test( "outerWidth",win.outerWidth, outer_width );
  test( "outerHeight",win.outerHeight, outer_height );

  win.close();  
}


function testWindowPropertyWrite( windowObject )
{
  win = windowObject.open( "windowHelper.html", win_name, "");
	
  win.defaultStatus = "Default status";
  test( "defaultStatus",win.defaultStatus, "Default status" ); 
  var temp = win.document; win.document = null; test( "document",     win.document, null );
  win.document = temp;                          test( "document",     win.document, temp );
  temp = win.history; win.history = null;       test( "history",      win.history,  null );
  win.history = temp;                           test( "history",      win.history,  temp );
  temp = win.location; win.location = null;     test( "location",     win.location, null );
  win.location = temp;                          test( "location",     win.location, temp );
//  test( "locationbar",  win.locationbar, null ); // No idea what to expect
//  test( "menunbar",     win.menubar, "" );      // No idea what to expect
//  test( "scrollbars",   win.scrollbars, "" );  // No idea what to expect
//  test( "statusbar",    win.statusbar, "" );  // No idea what to expect
//  test( "toolbar",      win.toolbar, "" );   // No idea what to expect
  win.name = win_name = "test_name";
  test( "name",         win.name, win_name ); 
  win.opener = win;
  test( "opener",       win.opener, win ); 
  win.parent = windowObject;
  test( "parent",       win.parent, windowObject ); 
  win.status = "tilstand";
  test( "status",       win.status, "tilstand" ); 
  win.innerWidth = inner_width;
  test( "innerWidth",win.innerWidth, inner_width );
  win.innerHeight = inner_height;
  test( "innerHeight",win.innerHeight, inner_height );
  win.outerWidth = outer_width;
  test( "outerWidth",win.outerWidth, outer_width );
  win.outerHeight = outer_height;
  test( "outerHeight",win.outerHeight, outer_height );

  win.close();
}
