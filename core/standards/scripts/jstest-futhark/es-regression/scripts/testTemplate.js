/**
 * ECMAScript
 * suggestion for testscript template
 *
 * 24.07.2001, torstein@opera.com
 * $Id: testTemplate.js 43149 2009-03-13 17:38:07Z hallvord $
 */

function main()
{
   try
   {
      var cvs = "$Id: testTemplate.js 43149 2009-03-13 17:38:07Z hallvord $";
      testmodule( "The Test Object", cvs );
      expect(0);//number of tests - update this when tests are added!
      show( '' );

      testcase( 'Test object constructor' );
      testTestObjectConstructor();

      testcase( 'Test object properties' );
      testTestObjectProperties();

      testcase( 'Test object methods' );
      testTestObjectMethods();

      testmodule_finished();
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

