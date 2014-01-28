/**
 * JavaScript
 * Applet object, js 1.3.
 *
 * 03.07.2002, haukur@opera.com
 */
var tprop;

function main( appletObject )
{
   try
   {
      var cvs = "$Id";
      testmodule( "The Applet object", cvs );
      testcase( 'Applet object' );
      this.tprop = make_tprop( appletObject.ownerDocument );
      tprop( "theapplet", "object" );

      this.tprop = make_tprop( appletObject );

      testcase( 'Applet object properties' );
      testAppletProperties( appletObject );

      testcase( 'Applet object methods' );
      testAppletMethods( appletObject );
   }
   catch( e )
   {
      exception( e );
   }

   testmodule_finished();
}
function testAppletProperties( applet )
{
   tdef( 'init method', applet["init"] );

   //test( "maxMe", applet.maxMe, 666 );
   test( "width", applet.width, 500 );
   test( "height", applet.height, 200 );

   applet.maxMe = 777 ;

   test( "modified number", applet.maxMe, 777);

}

function testAppletMethods( applet )
{
	test( 'calling method defined by applet', applet.getAppletInfo(), 'Author: Patrick Chan\nVersion 1.3' );
}

function go()
{
   window.open("appletHelper.html"+location.search,"helper");

}


