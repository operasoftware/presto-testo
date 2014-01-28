/* -*- mode: java -*- */

var cvs = "$Id: pluginObjectTest.js 19486 2007-10-08 13:12:39Z hallvord $";

testmodule( "JS plugin object test", cvs );

var  no = navigator.plugins.length;

if(no > 0)
{
  l  = navigator.plugins[0]

  testcase( "properties exist" );
  try 
  {
    testProperty( "description", l.description );
    testProperty( "filename", l.filename );
    testProperty( "length", l.length );
    testProperty( "name", l.name );
  }
  catch (e) { exception(e); }

}
else
  show("No plugins installed");

testmodule_finished();
