/* -*- mode: java -*- */

var cvs = "$Id: screenObjectTest.js 19486 2007-10-08 13:12:39Z hallvord $";

testmodule( "JS screen object test", cvs );

testcase( "properties exist" );
var l = screen;
try 
{
    testProperty( "availHeight", l.availHeight );
    testProperty( "availWidth", l.availWidth );
    testProperty( "colorDepth", l.colorDepth );
    testProperty( "height", l.height );
    testProperty( "pixelDepth", l.pixelDepth );
    testProperty( "width", l.width );
}
catch (e) { exception(e); }

testcase( "properties read as coherent values" );

test( "availHeight",l.availHeight, get_avail_height() );
test( "availWidth",l.availWidth, get_avail_width() );
test( "colorDepth",l.colorDepth, get_color_depth() );
test( "height",l.height, get_screen_height() );
test( "pixelDepth",l.pixelDepth, get_pixel_depth() );
test( "width",l.width, get_screen_width() );

testcase( "properties are writeable" );

l.availHeight = a_height = 22;
test( "availHeight",l.availHeight, a_height );
l.availWidth = a_width = 323;
test( "availWidth",l.availWidth, a_width );
l.colorDepth = color_depth = 16;
test( "colorDepth",l.colorDepth, color_depth );
l.height = screen_height = 121;
test( "height",l.height, screen_height );
l.pixelDepth = pixel_depth = 8;
test( "pixelDepth",l.pixelDepth, pixel_depth );
l.width = screen_width = 12;
test( "width",l.width, screen_width );



testmodule_finished();
