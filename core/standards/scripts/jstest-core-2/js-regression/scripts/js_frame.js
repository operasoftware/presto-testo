/**
 * JavaScript
 * Frame object, js 1.3.
 *
 * 18.07.2001, torstein@opera.com
 * 
 * This test works in Opera 6.04 for Window and 6.03 for Linux
 * due to bug #82074, it doesn't currently work in Opera 7, i.e.
 * creating a new window, writing source with frames, returns
 * newwin.frames.length = 0
 *
 * -torstein /14.08.2002
 */
var tprop;
var mywin;

/*
  Not using main(), since window.js's main() also is
  available in this test.
*/
function frameMain( windowObject )
{
   try 
   {
      var cvs = "$Id: js_frame.js 4838 2006-01-18 05:59:01Z hallvord $";
      testmodule( "The Frame object", cvs );

      var mywin = windowObject.open( "", "framesetwindow", "width=200,height=400" );
      if (!mywin)
      {
         showfailure( "Opening secondary window", "Opening window failed." );
         testmodule_finished();
      }
      else
      {
         mywin.document.write( '<html>' );
         mywin.document.write( '   <frameset onload="" rows="*,*,*" > ' );
         mywin.document.write( '      <frame name="frameone" src="js_text.html">' );
         mywin.document.write( '      <frame name="frametwo" src="js_textarea.html">' );
         mywin.document.write( '      <frame name="framethree" src="js_submit.html">' );
         mywin.document.write( '   </frameset>' );
         mywin.document.write( '</html>' );
         mywin.document.close();

         var timeout = 100;
         var attempts = 0;

         function runTests()
         {
           if (mywin.frames.length < 3 ||
               !(mywin.frames[0] && mywin.frames[0].document && mywin.frames[0].document.readyState == "complete") ||
               !(mywin.frames[1] && mywin.frames[1].document && mywin.frames[1].document.readyState == "complete") ||
               !(mywin.frames[2] && mywin.frames[2].document && mywin.frames[2].document.readyState == "complete"))
             if (++attempts > 10)
               showfailure("loading document", "Loading timed out.");
             else
             {
               setTimeout(runTests, timeout);
               timeout += timeout;
               return;
             }
           else
           {
              /*
                Doing it the old way, since we don't want a WindowCollection
                instead of a HTMLCollection. ( would otherwise have used tprop() ).
              */
              testcase( "Frames defined" );
              tdef( "mywin.document.frames", mywin.document.frames );
              test( "mywin.frames toString", String (mywin.frames), "[object WindowCollection]" );

              if( isMozilla() || isExplorer() )
              {
                 test( "typeof mywin.frames", typeof mywin.frames, "object" );
              }
              else
              {
                 test( "typeof mywin.frames", typeof mywin.frames, "function" );
              }

              test( "mywin.frames.length", mywin.frames.length, 3, 82074 );

              var frameNames = new Array( "frameone", "frametwo", "framethree" );

              if( mywin.frames.length == 3 )
              {
                 for( var i = 0; i < mywin.frames.length; i++ )
                 {
                    tdef( "frame defined", mywin.frames[ i ] );

                    if( mywin.frames[ i ] != undefined )
                    {
                       test( "mywin.frames[ i ].name", mywin.frames[ i ].name, frameNames[ i ] );
                       this.tprop = make_tprop( mywin.frames[ i ] );

                       testcase( 'Frame object properties' );
                       testFrameProperties( mywin.frames[ i ], windowObject );

                       testcase( 'Frame object methods' );
                       testFrameMethods( mywin.frames[ i ] );
                    }
                 }
              }
           }

           mywin.close();
           testmodule_finished();
         }

         runTests();
      }
   }
   catch( e )
   {
      exception( e );
   }
}

function testFrameProperties( frame, windowObject )
{
   testWindowProperties( frame );
   testWindowToolbars( frame, false );

   var framelocation = frame.location + "";
   framelocation = framelocation.substr( framelocation.lastIndexOf( "/" ) + 1 );

   test( "frame.location not equal to frameset location ", ( framelocation == "js_frame.html" ), false ); 
   test( "frame.opener", frame.opener, windowObject );
   var org_frames = windowObject.frames;
   windowObject.frames = null;
   test( "changing value, win.frames", windowObject.frames, null );
}

function testFrameMethods( frame )
{
   testWindowMethods( frame );
}

function testFrameEventHalders( frame )
{
   testWindowEventHandlers( frame );
}
