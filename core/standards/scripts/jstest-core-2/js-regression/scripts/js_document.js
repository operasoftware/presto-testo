/* Non-interactive tests *ONLY* in this file! */

var cvs = "$Id: js_document.js 4838 2006-01-18 05:59:01Z hallvord $";

testmodule( "JavaScript 1.3 document test", cvs );

testcase( "document exists" );

tdef( 'defined', window.document );

testcase( "tostring" );

test( 'tostring #1', window.document + "", "[object HTMLDocument]" );

testcase( "properties readable" );

var tprop = make_tprop( window.document );

tprop( 'bgColor', 'string' );
tprop( 'fgColor', 'string' );
tprop( 'plugins', 'collection' );



if( is_phase( 2 ) )
{
   tprop( 'alinkColor', 'string' );
   tprop( 'formName', 'object' );
   tprop( 'handleEvent', 'function' );
   tprop( 'height', 'number' );
   tprop( 'linkColor', 'string' );
   tprop( 'routeEvent', 'function' );
   tprop( 'vlinkColor', 'string' );
   tprop( 'width', 'number' );
}

tprop( 'anchors', 'collection' );
tprop( 'applets', 'collection' );
tprop( 'captureEvents', 'function' );
//tprop( 'classes', 'collection' );	// Netscape 4, nobody else supports it
tprop( 'close', 'function' );
//tprop( 'contextual', 'function' );	// Netscape 4, nobody else supports it
tprop( 'cookie', 'string' );
tprop( 'domain', 'string' );
tprop( 'embeds', 'collection' );
tprop( 'forms', 'collection' );
tprop( 'getSelection', 'function' );
//tprop( 'ids', 'object' );		// Netscape 4, nobody else supports it
tprop( 'images', 'collection' );
tprop( 'lastModified', 'string' );
//tprop( 'layers', 'collection' );	// Netscape 4, nobody else supports it
tprop( 'links', 'collection' );
tprop( 'open', 'function' );
tprop( 'referrer', 'string' );
tprop( 'releaseEvents', 'function' );
//tprop( 'tags', 'object' );		// Netscape 4, nobody else supports it
tprop( 'title', 'string' );
tprop( 'URL', 'string' );
tprop( 'write', 'function' );
tprop( 'writeln', 'function' );

testcase( "MSIE properties readable" );
if (!isMozilla())
{
   if( is_phase( 2 ) )
   {
      tprop( 'activeElement', 'object' );
      tprop( 'charset', 'string' );
      tprop( 'defaultCharset', 'string' );
      tprop( 'expando', 'boolean' );
      tprop( 'parentWindow', 'object' );
      tprop( 'readyState', 'string' );
   }
   
   tprop( 'all', 'collection' );
   tprop( 'elementFromPoint', 'function' );
}

testcase( 'forms accessible by name' );

tprop( 'testform1', 'object' );

var colornames =
   { red: "#ff0000", blue: "#0000ff", white: "#ffffff", black: "#000000", yellow: "#ffff00" };

function test_color( desc, res, wanted )
{
   var t = colornames[wanted];
   if (t && res != wanted && res == t )
      wanted = t;
   test( desc, res, wanted );
}

function test_color_expect_failure( desc, bugno, res, wanted )
{
   var t = colornames[wanted];
   if (t && res != wanted && res == t )
      wanted = t;
   test_expect_failure( desc, bugno, res, wanted );
}

if( is_phase( 2 ) )
{
   testcase( 'alinkColor' );
   test_color( 'alinkColor as set', document.alinkColor, 'red' );
   document.alinkColor='blue';
   test_color( 'alinkColor as assigned #1', document.body.aLink, 'blue' );
   document.alinkColor=colornames.yellow;
   test_color( 'alinkColor as assigned #2', document.body.aLink, 'yellow' );
}

testcase( 'bgColor' );
test_color( 'bgColor as set', document.bgColor, 'white', 83722 );
document.bgColor='blue';
test_color( 'bgColor as assigned #1', document.body.bgColor, 'blue', 83721 );
document.bgColor=colornames.red;
test_color( 'bgColor as assigned #2', document.body.bgColor, 'red', 83721 );

testcase( 'anchors' );
test( 'anchors length', document.anchors.length, 4 );
if (document.anchors.length > 0)
{
   test( 'elements are anchors', document.anchors[0].name, "ThisIsMyAnchor" );
   if (!isMozilla())
      test( 'anchors is function', document.anchors(0).name, "ThisIsMyAnchor" );
}
expect_DOM_exception( 'anchors is read-only',
                      dom_no_modification_allowed_err,
                      function () { document.anchors=new Array(); } );

testcase( 'applets' );
test( 'applets length', document.applets.length, 0 );
if (document.applets.length > 0)
{
   test( 'elements are applets', document.applets[0].somePropertyOnTheApplet, "batman!" );
   test( 'search by name', document.applets["myapplet"].somePropertyOnTheApplet, "batman!" );
   if (!isMozilla())
      test( 'applets is function', document.applets(0).somePropertyOnTheApplet, "batman!" );
}
expect_DOM_exception( 'applets is read-only',
                      dom_no_modification_allowed_err,
                      function () { document.applets=new Array(); } );

testcase( 'captureEvents' ); 	// Also see interactive tests
test_expect_failure( 'captureEvents #1', 87447, document.captureEvents ? document.captureEvents.length : -1, 1 );

testcase( 'close' ); 		// Also see interactive tests
test( 'close #1', document.close.length, 0 );

if (get_protocol_and_host().indexOf("file://") == -1)
{
  testcase( 'cookie' );		// Also see interactive tests
  var mycookie = setcookie("fisk","fnys",false,false,false);
  test( 'cookie set? #1', document.cookie, mycookie );
}

testcase( 'domain' );
test( 'domain OK? #1', document.domain, get_host() );
if ((r = document.domain.lastIndexOf('.')) != -1)
{
   document.domain = document.domain.substring(r+1);
}
test( 'domain OK? #2', document.domain, get_host().substring(get_host().lastIndexOf('.')+1) );
expect_exception( "domain is protected from writing with arbitrary data",
                  Error,
                  function() { document.domain = "something"; } );

testcase( 'embeds' );
test( 'embeds length', document.embeds.length, 0 );
if (document.embeds.length > 0)
{
   test( 'elements are embeds', document.embeds[0].somePropertyOnTheEmbed, "embedsman!" );
   test( 'search by name', document.embeds["myembed"].somePropertyOnTheEmbed, "embedsman!" );
   if (!isMozilla())
      test( 'embeds is function', document.embeds(0).somePropertyOnTheEmbed, "embedsman!" );
}
expect_exception( 'embeds is read-only', Error, function () { document.embeds=new Array(); } );
  
testcase( 'fgColor' );
test_color( 'fgColor as set', document.fgColor, 'blue', 83722 );
document.fgColor='white';
test_color( 'fgColor as assigned', document.body.text, 'white', 83721 );
document.fgColor=colornames.yellow;
test_color( 'fgColor as assigned', document.body.text, 'yellow', 83721 );

testcase( 'forms' );
test( 'forms length', document.forms.length, 1 );
if (document.forms.length > 0)
{
   test( 'elements are forms', document.forms[0].name, "testform1" );
   test( 'search by name', document.forms["testform1"].name, "testform1" );
   if (!isMozilla())
      test( 'forms is function', document.forms(0).name, "testform1" );
}
expect_DOM_exception( 'forms is read-only',
                      dom_no_modification_allowed_err,
                      function () { document.forms=new Array(); } );

if( is_phase( 2 ) )
{
   testcase( 'getSelection' );
   if (document.getSelection)
      showfailure( 'getSelection', 'No tests for getSelection' );

   testcase( 'handleEvent' );
   if (document.handleEvent)
      showfailure( 'handleEvent', 'No tests for handleEvent' );

   testcase( 'linkColor' );
   test_color( 'linkColor as set', document.linkColor, 'black' );
   document.linkColor='yellow';
   test_color( 'linkColor as assigned', document.body.link, 'yellow' );
   document.linkColor=colornames.white;
   test_color( 'linkColor as assigned', document.body.link, 'white' );
}


if (is_phase(2))
{
  testcase( 'height' );
  test( 'nonzero, nonnegative', document.height > 0, true );
  // Not listed as read-only in spec but Mozilla throws an error and it is insane
  // to manipulate this.
  expect_exception( 'setting', Error, function () { document.height /= 2; } );
}

testcase( 'images' );
test( 'images length', document.images.length, 3 );
if (document.images.length > 0)
{
   test( 'elements are images', document.images[0].name, "img1" );
   test( 'search by name', document.images["img2"].name, "img2" );
   if (!isMozilla())
      test( 'images is function', document.images(2).name, "img3" );
}
expect_DOM_exception( 'images is read-only',
                      dom_no_modification_allowed_err,
                      function () { document.images=new Array(); } );

testcase( 'lastModified' );
var l = new Date(document.lastModified);
function pad( n ) { if (n < 10) return "0" + n; else return String(n); }
test( 'similar to cvs date?', 
      l.getUTCFullYear() + "/" + pad(l.getUTCMonth()+1) + "/" + pad(l.getUTCDate()),
      (new RegExp("\\d\\d\\d\\d/\\d\\d/\\d\\d")).exec(html_cvs),
      "Be sure to check that the server returns the right value; web.intern.opera.no does not always do that." );
expect_exception( 'lastModified is read-only', Error, function () { document.lastModified = 0; } );

testcase( 'links' );
test( 'links length', document.links.length, 3 );
if (document.links.length > 0)
{
   test( 'elements are links', document.links[1].href, "http://www.opera.com/" );
   if (!isExplorer())  // Barf city
      test( 'search by name', document.links["link3"].href, "http://www.microsoft.com/" );
   if (!isMozilla())
      test( 'links is function', document.links(0).shape, "circle" );
}
expect_DOM_exception( 'links is read-only',
                      dom_no_modification_allowed_err,
                      function () { document.links=new Array(); } );

testcase( 'open' ); 		// Also see interactive tests
test( 'open #1', document.open.length, 0 );

if( is_phase( 2 ) )
{
   testcase( 'plugins' );
   if (document.plugins === undefined)
      showfailure( 'plugins must exist', 'should be empty collection, not undefined' );
   else
   {
      test( 'plugins length', document.plugins.length, 0 );
      if (document.plugins.length > 0)
      {
         test( 'elements are plugins', document.plugins[0].xxx, "http://www.opera.com" );
         test( 'search by name', document.plugins["link3"].xxx, "http://www.microsoft.com" );
         if (!isMozilla())
            test( 'plugins is function', document.plugins(0).xxx, "circle" );
      }
      expect_exception( 'plugins is read-only', Error, function () { document.plugins = null; } );
   }
}

// For referrer, see interactive tests
expect_exception( 'referrer is read-only', Error, function () { document.referrer= null; } );

if( is_phase( 2 ) )
{
   testcase( 'releaseEvents' ); 	// Also see interactive tests
   test( 'releaseEvents #1', document.releaseEvents ? document.releaseEvents.length : -1, 1 );

   testcase( 'routeEvent' ); 	// Also see interactive tests
   test( 'routeEvent #1', document.routeEvent ? document.routeEvent.length : -1, 1 );
}


testcase( 'title' );
test( 'title #1', document.title, "JavaScript 1.3 Document test" );
document.title = "New Document Title";
testcase( 'changing title' );
test( 'title #2', document.title, "New Document Title" );

testcase( 'URL' );
var a = '*' + document.URL + '*';
var b = '*' + get_protocol_and_host() + get_modulepath( "js-regression", "js_document.html" ) + '*';
test( 'URL #1', a + a.length, b + b.length );
expect_DOM_exception( 'URL is read-only',
                      dom_no_modification_allowed_err,
                      function () { document.URL = ""; } );

if( is_phase( 2 ) )
{
   testcase( 'vlinkColor' );
   test_color( 'vlinkColor as set', document.vlinkColor, 'yellow' );
   document.vlinkColor='blue';
   test_color( 'vlinkColor as assigned', document.body.vLink, 'blue' );
   document.vlinkColor=colornames.red;
   test_color( 'vlinkColor as assigned', document.body.vLink, 'red' );

   testcase( 'width' );
   test( 'nonzero, nonnegative', document.width > 0, true );
   // Not listed as read-only in spec but Mozilla throws an error and it is insane
   // to manipulate this.
   expect_exception( 'setting', Error, function () { document.width /= 2; } );
}


testcase( 'write' ); 	// Also see interactive tests
test( 'write #1', document.write.length, 0 );
document.write( '<span id=span1></span>' );
tdef( 'write #2', document.getElementById('span1') );

testcase( 'writeln' ); 	// Also see interactive tests
test( 'writeln #1', document.writeln.length, 0 );
document.write( '<span id=span2></span>' );
tdef( 'writeln #2', document.getElementById('span2') );

// Reset to sane colors
document.fgColor = 'black';
document.bgColor = 'white';
document.linkColor = 'blue';
document.vlinkColor = 'red';

// MSIE thing.  The external representation is chosen to match in Opera but the
// one produced by MSIE is equivalent.

if (!isMozilla())
{
   testcase( 'event handlers' );
   test_spaceagnostic( 'onclick', "" + document.body.onclick, getEventHandlerSource(0) );
   test_spaceagnostic( 'ondblclick', "" + document.body.ondblclick, getEventHandlerSource(1) );
   test_spaceagnostic( 'onkeydown', "" + document.body.onkeydown, getEventHandlerSource(2) );
   test_spaceagnostic( 'onkeypress', "" + document.body.onkeypress, getEventHandlerSource(3) );
   test_spaceagnostic( 'onkeyup', "" + document.body.onkeyup, getEventHandlerSource(4) );
   test_spaceagnostic( 'onmousedown', "" + document.body.onmousedown, getEventHandlerSource(5) );
   test_spaceagnostic( 'onmouseup', "" + document.body.onmouseup, getEventHandlerSource(6) );

   document.body.onclick = function () { void(3); };
   test_spaceagnostic( 'onclick', "" + document.body.onclick, 
                       "function () { void(3); }" );

   // Now with handleEvent we could actually invoke the installed handlers!
}

testmodule_finished();

