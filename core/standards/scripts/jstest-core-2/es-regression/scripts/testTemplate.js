/**
 * ECMAScript
 * suggestion for testscript template
 *
 * 24.07.2001, torstein@opera.com
 * $Id: testTemplate.js 4838 2006-01-18 05:59:01Z hallvord $
 */

function main()
{
   try 
   {
      var cvs = "$Id: testTemplate.js 4838 2006-01-18 05:59:01Z hallvord $";
      printHeader( "The Test Object", cvs );
      print( '' );

      setTestCase( 'Test object constructor' );
      testTestObjectConstructor();

      setTestCase( 'Test object properties' );
      testTestObjectProperties();

      setTestCase( 'Test object methods' );
      testTestObjectMethods();

      printTail();
   }
   catch( e )
   {
      exception( e );
   }

}

function testTestObjectConstructor()
{
   try 
   {

   }
   catch( e )
   {
      exception( e );
   }
}

function testTestObjectProperties()
{
   try 
   {

   }
   catch( e )
   {
      exception( e );
   }
}

function testTestObjectMethods()
{
   try 
   {

   }
   catch( e )
   {
      exception( e );
   }
}

