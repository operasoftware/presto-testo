/*
  DOM Space Invaders
  by torstein@opera

  Variables specific for the ASCII version of Space Invaders

  $Id: config-ascii.js 10655 2006-12-18 15:47:57Z hallvord $
*/

/* Game settings */
var asciiVersion = true;                 // should be true here
var mouseSensitivity = 50;               // lower number, the more sensitive
var eventX = self.screen.availWidth / 2; // the last event x coordinate
var dimension = 4;                       // dimension of grid

/* Alien settings */
var alienX = 1;                          // what x coordinate the left most alien would have ( if he is/were alive ).
var alienY = 0;                          // what y coordinate the left most alien would have ( if he is/were alive ).
var alienBombInterval = 1000;

/* Ship settings */
var shipX = 0;                           // the x coordinate of the ship 
var shipY = dimension - 1;               // the y coordinate of the ship
var missileX;                            // the x coordinate of the current missile
var missileY;                            // the y coordinate of the current missile
var missileSpeed = 100;                  // missile speed, the lower the faster
var explosionBackground = "graphics/red_transparent.png";

/* Level definitions */
function setLevel( level )
{
   switch( level )
   {
   case 1:

      this.alienSpeed = 700;
      this.dimension = 4;
      this.alienBombSpeed = 1500;
      this.alienBombInterval = 2000;
      this.numberOfAllienRows = 1; 
      this.numberOfAliensPerRow = 3; 
      this.alienGoRight = false; 
      this.alienY = 0; 
      this.alienX = 1;
      break;
   case 2:
      this.alienSpeed = 600;
      this.alienBombSpeed = 1300;
      this.alienBombInterval = 2000;
      this.numberOfAllienRows = 2;
      this.numberOfAliensPerRow = 4;
      this.dimension = 6;
      this.alienGoRight = true;
      this.alienY = 0;
      this.alienX = 2;
      break;
   case 3:
      this.alienSpeed = 500;
      this.alienBombSpeed = 1000;
      this.alienBombInterval = 2000;
      this.numberOfAllienRows = 3;
      this.numberOfAliensPerRow = 5; 
      this.dimension = 8;
      this.alienGoRight = false;
      this.alienY = 1;
      this.alienX = 0;
      break;
   case 4:
      this.alienSpeed = 400;
      this.alienBombSpeed = 800;
      this.alienBombInterval = 2000;
      this.numberOfAllienRows = 4;
      this.numberOfAliensPerRow = 6; 
      this.dimension = 9;
      this.alienGoRight = true;
      this.alienY = 1;
      this.alienX = 1;
      break;
   }

   var s = "";

   /* Assuring there's no insane, contradictory values given. */
   if( dimension < ( numberOfAliensPerRow + alienX ) )
   {
      s = "Insane values in scripts/config.js!\nYou shouldn't tamper with that file :-)";
      s += "\n\t*The number of aliens per row plus the x coordinate where the leftmost alien starts";
      s += "cannot exceed the dimension of the grid!";
   }

   if( s.length > 0 ) 
   {
      document.getElementById( "messages" ).appendChild( document.createElement( "h1" ) );
      document.getElementById( "messages" ).lastChild.appendChild( document.createTextNode( "Error!" ) );
      document.getElementById( "messages" ).appendChild( document.createElement( "pre" ) );
      document.getElementById( "messages" ).lastChild.appendChild( document.createTextNode( s ) );

      s = "";

      return false;
   }

   return true;       
}



