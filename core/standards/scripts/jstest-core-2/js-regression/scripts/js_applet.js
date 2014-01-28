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
      
      this.tprop = make_tprop( document.theapplet );
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
   tprop( "maxMe", "number" );
   
   test( "maxMe", applet.maxMe, 666 );

   document.theapplet.maxMe = 777 ;

   test( "modified number", theapplet.maxMe, 777);

}

function testAppletMethods( applet )
{
}

function go()
{
   window.open("appletHelper.html","helper");

}


