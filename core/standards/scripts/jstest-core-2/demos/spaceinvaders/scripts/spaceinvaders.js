/*
  DOM Space Invaders
  by torstein@opera

  This file is used both for the ascii version
  and the version using images, see
  spaceinvaders-ascii.js and spaceinvaders-image.js for
  code speecific to the different versions.

  All figures used reside in ascii.js
  All global variables are in config.js.
  All objects definitions are in objects.js 

  $Id: spaceinvaders.js 4838 2006-01-18 05:59:01Z hallvord $  
*/

/* Method used by both spaceinvaders inits */
function commonInit()
{
   /* To get things working in IE */
   if( isExplorer() )
   {
      window.innerWidth = document.body.clientWidth;

      if( !asciiVersion )
         window.innerHeight = shipY + shipImageHeight; // body.clientHeight woun't do 'cause of DOM
      else
         window.innerWidth = document.body.clientHeight;
   }
      
   if( !document.getElementById( "level" ).lastChild )
      document.getElementById( "level" ).appendChild( document.createTextNode( "" ) );

   if( !document.getElementById( "score" ).lastChild )
      document.getElementById( "score" ).appendChild( document.createTextNode( "[ Score: 0 ]" ) );

   if( !document.getElementById( "lives" ).lastChild )
      document.getElementById( "lives" ).appendChild( document.createTextNode( "" ) );

   document.getElementById( "level" ).lastChild.nodeValue = "[ Level " + currentLevel + " ]";
   document.getElementById( "lives" ).lastChild.nodeValue = "[ Lives left: " + livesLeft + " ]";
   document.body.style.backgroundImage = "url( '" + backgroundImages[ currentLevel - 1 ] + "')";

   if( !isExplorer() )
      window.captureEvents( Event.MOUSEMOVE );

   document.onmousemove = moveShip;
   document.onkeypress = keyHandler;
   document.onclick = fireMissile;

   alienArray = new Array( numberOfAllienRows );

   for( var i = 0; i < alienArray.length; i++ )
   {
      alienArray[ i ] = new Array( numberOfAliensPerRow );

      for( var j = 0; j < alienArray[ i ].length; j++ )
      {
         alienArray[ i ][ j ] = 1;
      }
   }

   levelFinished = false;

   space = document.createElement( "div" );
   space.setAttribute( "id", "space" );
   document.body.appendChild( space ); // add to body
}

function noAliensLeft()
{
   for( var i = 0; i < alienArray.length; i++ )
   {
      for( var j = 0; j < alienArray[ i ].length; j++ )
      {
         if( alienArray[ i ][ j ] == 1 ) return false;
      }
   }

   return true;
}

function increaseScore()
{
   if( levelFinished ) return;
   
   var score = document.getElementById( "score" );

   if( score.lastChild )
   {
      var scoreString = "[ Score: ";
      var indexOfString = score.lastChild.nodeValue.indexOf( scoreString );
      var newscore = parseInt( score.lastChild.nodeValue.substring( indexOfString + scoreString.length ) ) + 1;
      score.lastChild.nodeValue = score.lastChild.nodeValue.substring( 0, indexOfString + scoreString.length ) + newscore + " ]";
   }
   else
   {
      score.appendChild( document.createTextNode( "[ Score: 1 ]" ) );
   }

   if( noAliensLeft() )
   {
      levelFinished = true;

      document.getElementById( "messages" ).appendChild( document.createElement( "h1" ) );
      document.getElementById( "messages" ).lastChild.appendChild( document.createTextNode( "Level " + currentLevel + " cleared!" ) );

      clearInterval( alienIntervalId );
      clearInterval( alienBombIntervalId );

      if( !isExplorer() )
         window.releaseEvents( Event.MOUSEMOVE );

      document.onmousemove = null; // Opera doesn't release the events as "promised" above, NS 4 method, marked red on Wiki.
      window.onclick = null;

      setTimeout( function()
                  {
                     clearScreen(); 
                     main();
                  },
                  newLevelTimeout );
   }
}

/*
  Removes the space from the document body and clears
  the game message
*/
function clearScreen()
{
   document.body.removeChild( document.getElementById( "space" ) );
   document.getElementById( "messages" ).removeChild( document.getElementById( "messages" ).lastChild );
}

/* Handles all key events */
function keyHandler( e )
{
   if( isExplorer() )
      var keyCode = event.keyCode;
   else
      var keyCode = e.which;
   
   var key = String.fromCharCode( keyCode );
   var messages = document.getElementById( "messages" );

   if( key == "y" && levelFinished )
   {
      newGame();
   }
   else if( key == "n" && levelFinished )
   {
      messages.removeChild( document.getElementById( "playAgain" ) );
      document.onkeypress = null;
      document.onclick = null;
   }
   else if( keyCode == 32 && !gamePaused && !levelFinished )
   {
      messages.appendChild( document.createElement( "h2" ) );
      messages.lastChild.appendChild( document.createTextNode( "Game paused, press <SPACE> to resume" ) );
      messages.lastChild.setAttribute( "style", "text-align: center" );

      document.onmousemove = null;
      document.onclick = null;

      gamePaused = true;
   }
   else if( keyCode == 32 && gamePaused && !levelFinished )
   {
      messages.removeChild( messages.lastChild );

      document.onmousemove = moveShip;
      document.onclick = fireMissile;

      gamePaused = false;
   }
}

function newGame()
{
   clearInterval( alienIntervalId ); 
   clearScreen();
   livesLeft--;
   currentLevel--;
   main();
}

function gameOver()
{
   if( levelFinished ) return;

   levelFinished = true;

   var go = document.createElement( "h1" );
   go.appendChild( document.createTextNode( "Game over!" ) );
   go.setAttribute( "id", "gameOver" );
   go.setAttribute( "style", "text-align: center" );
                   
   document.getElementById( "messages" ).appendChild( go );

   if( livesLeft > 0 )
   {
      var playAgain = document.createElement( "h2" );
      playAgain.setAttribute( "id", "playAgain" );
      playAgain.setAttribute( "style", "text-align: center; z-index: 1000;" );
      playAgain.appendChild( document.createTextNode( "Play again? y/n" ) );

      document.getElementById( "space" ).appendChild( playAgain );
   }
   else if( livesLeft == 0 )
   {
      var noLives = document.createElement( "h2" );
      noLives.appendChild( document.createTextNode( "...and you have no lives left." ) );
      noLives.setAttribute( "style", "text-align: center" );

      document.getElementById( "space" ).appendChild( noLives );
      document.onkeypress = null;
   }

   clearInterval( missileId );
   clearInterval( alienBombIntervalId );

   if( !isExplorer() )
      window.releaseEvents( Event.MOUSEMOVE );

   document.onmousemove = null; // Opera doesn't release the events as "promised" above, NS 4, noted on wiki
   document.onclick = null;
}

function main()
{
   if( !checkBrowser() ) return;
   if( !setLevel( ++currentLevel ) ) return;

   if( currentLevel > backgroundImages.length )
   {
      var score = document.getElementById( "score" ).lastChild.nodeValue;      

      document.getElementById( "messages" ).appendChild( document.createElement( "h1" ) );
      document.getElementById( "messages" ).lastChild.appendChild( document.createTextNode( "You're victorious" ) );
      document.getElementById( "messages" ).lastChild.setAttribute( "style", "text-align: center" );
      document.getElementById( "messages" ).appendChild( document.createElement( "h2" ) );
      document.getElementById( "messages" ).lastChild.appendChild( document.createTextNode( "Total score: " + score ) );
      document.getElementById( "messages" ).lastChild.setAttribute( "style", "text-align: center" );

      return;
   }

   var typeWriteString = "Loading level " + currentLevel + "...";
   if( currentLevel == 1 ) typeWriteString = "Welcome to DOM Invaders, " + typeWriteString.toLowerCase();

   typeWrite( typeWriteString, ( newLevelTimeout / typeWriteString.length ) );
} 

function typeWrite( word, speed )
{
   var i = 0;
   loadingText = document.createElement( "h1" );
   loadingText.setAttribute( "id", "loadingText" );
   loadingText.appendChild( document.createTextNode( "" ) );
   document.getElementById( "messages" ).appendChild( loadingText );
      
   iid = setInterval( function()
                      {
                         if( i == word.length )
                         {
                            main2();
                         }

                         loadingText.lastChild.nodeValue += word.charAt( i );
                         i++;
                      },
                      speed );
}
   
function main2()
{
   clearInterval( iid );

   if( document.getElementById( "loadingText" ) )
      document.getElementById( "messages" ).removeChild( document.getElementById( "loadingText" ) );

   init();

   alienIntervalId = setInterval( "updateAliens()", alienSpeed );

   if( asciiVersion )
      alienBombIntervalId = setInterval( "dropNewAlienBomb()", alienBombInterval );
   else
   {
      alienBombIntervalId =
         setInterval( function()
                      {
                         var alienBombX = getAlienBombX();
                         var alienBombY = ( alienBombImageHeight * numberOfAllienRows ) + topOffset + alienBombImageHeight;
                         while( !alienBombX ) alienBombX = getAlienBombX();
                         dropNewAlienBomb( alienBombX, alienBombY, false, false, false );
                      },
                      alienBombInterval );
   }
}

function getExplosionSound()
{
   var explosionSound;
   
   if( isMozillaOrGaleon() )
   {
      explosionSound = document.createElement( "embed" );
      explosionSound.setAttribute( "src", explosionSoundSource );
      explosionSound.setAttribute( "autostart", "true" );
      explosionSound.setAttribute( "loop", "false" );
      explosionSound.setAttribute( "width", "0" );
      explosionSound.setAttribute( "height", "0" );
   }
   else
   {
      explosionSound = document.createElement( "bgsound" );
      explosionSound.setAttribute( "src", explosionSoundSource );
      explosionSound.setAttribute( "loop", "1" );
   }

   return explosionSound;
}

