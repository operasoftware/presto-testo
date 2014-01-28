
/**
 * JavaScript
 * Document object interactive part, js 1.3.
 *
 * 01.08.2001, torstein@opera.com
 */

var cvs = "$Id: js_document_int.js 10655 2006-12-18 15:47:57Z hallvord $";

function testWriteMethod()
{
   try 
   {
      document.write( "Hello ", "world ", 37 );
   }
   catch( e )
   {
      exception( e );
   }
}

function testWritelnMethod()
{
   try 
   {
      document.writeln( "Hello ", "world ", 37 );
   }
   catch( e )
   {
      exception( e );
   }
}

var openwin;

function testOpenMethod( windowObject )
{
   openwin = windowObject.open( "", "openwin", "width=200,height=400" );
   openwin.document.write( "<h1>I'm now open!</h1>" ); 
   openwin.document.write( "<em>Starting to fetch a big picture...</em>" ); 
   openwin.document.write( '<img src="http://www.coresis.com/penguin/BIG.jpg">' ); 
}

function testStopMethod()
{
   if( openwin != undefined && !openwin.closed )
   {
      openwin.stop();
   }
   else
   {
      alert( "No window was open :-(" );
   }
}

function testCloseMethod()
{
   if( openwin != undefined && !openwin.closed )
   {
      openwin.close();
   }
   else
   {
      alert( "No window was open :-(" );
   }
}

