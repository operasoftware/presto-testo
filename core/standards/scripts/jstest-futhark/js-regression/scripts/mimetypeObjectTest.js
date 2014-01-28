/* -*- mode: java -*- */

var cvs = "$Id: mimetypeObjectTest.js 19486 2007-10-08 13:12:39Z hallvord $";

testmodule( "JS mimetype object test", cvs );

var  no = navigator.mimeTypes.length;

if(no > 0)
{
  l  = navigator.mimeTypes[0];

  testcase( "properties exist" );
  try 
  {
    testProperty( "description", l.description );
    testProperty( "type", l.type );
    testProperty( "suffixes", l.suffixes );
    testProperty( "enabledPlugin", l.enabledPlugin );
  }
  catch (e) { exception(e); }

}
else
  show("No mimetypes installed");

testmodule_finished();
