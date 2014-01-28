/*
  DOM Space Invaders
  by torstein@opera

  Functions that are not strictly SpaceInvadreish.
  $Id: lib.js 4838 2006-01-18 05:59:01Z hallvord $
*/

/* Taken from jstest/regression-lib/testbase.js */
function isExplorer()  
{
   return ( navigator.appName == "Microsoft Internet Explorer" &&
            navigator.userAgent.indexOf( "Opera" ) == -1 );
}

function isMozillaOrGaleon()
{
   return ( ( navigator.userAgent.indexOf( "Mozilla/5.0" ) != -1 && 
              navigator.userAgent.indexOf( "rv:" ) != -1 &&
              navigator.userAgent.indexOf( "Opera" ) == -1 ) ||
            navigator.userAgent.indexOf( "Galeon" ) != -1 );
}

function isOpera()
{
   return ( navigator.userAgent.indexOf( "Opera" ) != -1 );
}

/*
  Check for audio/x-wav plugin and no IExplorer 5 
  Tests if the user has said that he/she wants soundEffects
  Note that IE has navigator.plugins.length == 0.
*/
function checkBrowser()
{

   if( soundEffects ) 
   {
      soundEffects = false;

      for( var i = 0; i < navigator.plugins.length; i++ )
      {
         mimeTypes = navigator.plugins[ i ];
         
         for( var j = 0; j < mimeTypes.length; j++ )
         {
            if( mimeTypes[ j ].type == "audio/wav" ||
                mimeTypes[ j ].type == "audio/x-wav" )
            {
               soundEffects = true;
            }
         }
      }
   }

   if( navigator.userAgent.indexOf( "Opera" ) == -1 &&
       navigator.userAgent.indexOf( "MSIE 5" ) != -1 &&
       navigator.userAgent.indexOf( "MSIE 5.5" ) == -1 )
   {
      s = "Your browser just isn't good enough to run this game.";
      s += " What you need is a fast, reliable, standards compliant browser";
      s += " with real ECMAScript, JavaScript, and DOM support.";
      s += " Go to this page to get the best browser experience."; 
      
      var sorry = document.createElement( "div" );
      sorry.appendChild( document.createElement( "h1" ) );
      sorry.lastChild.appendChild( document.createTextNode( "Sorry" ) );
      sorry.appendChild( document.createElement( "p" ) );
      sorry.lastChild.appendChild( document.createTextNode( s ) );
      sorry.appendChild( document.createElement( "a" ) );
      sorry.lastChild.setAttribute( "href", "http://www.opera.com/download/" );
      sorry.lastChild.appendChild( document.createTextNode( "www.opera.com" ) );
      document.body.appendChild( sorry );

      return false;
   }

   return true;
}


if( !isExplorer() )
{
   var js_setTimeout = setTimeout;                                                  
   var timeoutIds = new Array(); 

   timeoutIds.remove =                                                                
      function( elt )                                                                    
      { 
         for( var i = 0; i < timeoutIds.length; i++ ) 
         { 
            if( timeoutIds[ i ] == elt )
            { 
               timeoutIds[ i ] = timeoutIds[ timeoutIds.length - 1 ]; 
               timeoutIds.pop();
            }
         }
      };

   // hack by lth
   setTimeout =
      function( userfun, ms )                                                          
      {                                                                                 
         if( typeof( userfun ) == "function" )                                            
         {                                                                             
            var fn =
               function ()
               {
                  userfun();
                  timeoutIds.remove( fn );
               };
      
            timeoutIds.push( fn );                                                            
            return js_setTimeout( fn, ms );                                               
         }                                                                             
         else 
         {
            js_setTimeout( userfun, ms );
         }
      };
} 


function getElementsArray()
{
   var ea = new Array();
   
   ea.remove =
      function( e )
      {
         for( var i = 0; i < ea.length; i++ )
         {
            if( ea[ i ].id == e.id )

            {
               space.removeChild( ea[ i ] );
               clearInterval( e.iid );
               ea[ i ] = ea[ ea.length - 1 ];
               ea.pop();
            }
         }
      };

   return ea;
}


