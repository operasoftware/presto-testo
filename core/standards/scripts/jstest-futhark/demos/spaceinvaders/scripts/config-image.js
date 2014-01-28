/*
  DOM Space Invaders
  by torstein@opera

  Specific variables for the Image version of Space Invaders

  $Id: config-image.js 10655 2006-12-18 15:47:57Z hallvord $
*/

/* General game settings */
var asciiVersion = false;    // true: ASCII version, false: Image version
var topOffset = 150;         // how many pixels from the top the playing area should be.
var mouseSensitivity = 20;   // lower number, the more sensitive
var explosionImageSource = "graphics/explosion.gif";
var explosionImage;
var elementsArray;           // local reference to all elements created with the DOM ( except explosions ).

/* Base settings */
var baseArray;               // holds all the Base objects.
var baseWidth = 4;           // how much protection the ship gets ( units horisontally ).
var baseHeight = 2;          // how much protection the ship gets ( units vertically ). 
var baseId = 0;              // must be assigned a value here, gives unique ids to bases
var baseUnitImageSource = "graphics/base.png";
var baseUnitImage;
var baseUnitImageWidth = 20;
var numberOfBases = 3;

/* Alien settings */
var alienDivArray;           // two dimensional array, holding all DIVs with IMGs of aliens.
var alienId = 0;             // must be assigned a value here, gives unique ids to aliens
var alienImageSource = "graphics/bill_gates.png";
var alienImage;
var alienImageWidth = 50;
var alienImageHeight = 37;
var alienLeftOffset = 100;   // how far from the left edge of screenn is the leftmost alien
var alienSmoothness = 2;     // how many pixels each alien is to be moved each time it's updated.p
var alienVirusIndex = 3;     // what index in the alienBombImageSource is the virus? ( -1 ) if no  
var alienVirusImageSource = "graphics/ms_outlook_small.png";                                      
var alienVirusImageWidth = 10;
var alienVirusImageHeight = 10;
var alienBombImageSourceArray; // for preloading the images, see spaceinvaders-image.js::init().
var alienBombImageWidth = 20;
var alienBombImageHeight = 20;
var alienBombSmoothness = 2;   // how many pixels each bomb is to be moved each time it's updated.
var alienBombImageSource = new Array( "graphics/ie.png",
                                      "graphics/ms_word.png",
                                      "graphics/ms_excel.png",
                                      "graphics/ms_outlook.png",
                                      "graphics/windows.png" );


/* Ship settings */
var ship;
var shipImageSource = "graphics/opera.png";
var shipImage;
var shipImageWidth = 30;
var shipImageHeight = 30;
var shipX = self.screen.availWidth / 2;     // the x coordinate of the ship 
var originalShipY = 430;
var shipY = originalShipY;

/* Misile settings */
var missileImageSourceArray;                // for preloading the images, see spaceinvaders-image.js::init().
var missileImageWidth = 12;
var missileImageHeight = 22;
var missileSpeed = 10;                      // the lower the faster
var missileId = 0;                          // must be assigned a value here, gives unique ids to missiles
var missileSmoothness = 20;                 // how many pixels the missile is to move each time it's updated.
var missileImageSource = new Array( "graphics/note.png", "graphics/w3c.png", "graphics/dom.png", 
                                    "graphics/html.png", "graphics/css.png", "graphics/xml.png",
                                    "graphics/xhtml.png" );

/* Level definitions */
function setLevel( level )
{
   this.missileId = 0;

   switch( level )
   {
   case 1:
      this.alienSpeed = 100;
      this.alienBombSpeed = 100;
      this.alienBombInterval = 4000;
      this.numberOfAllienRows = 2; 
      this.numberOfAliensPerRow = 3; 
      this.alienGoRight = false;
      break;
   case 2:
      this.alienSpeed = 90;
      this.alienBombSpeed = 80;
      this.alienBombInterval = 3000;
      this.numberOfAllienRows = 2;
      this.numberOfAliensPerRow = 4;
      this.alienGoRight = true;
      break;
   case 3:
      this.alienSpeed = 80;
      this.alienBombSpeed = 60;
      this.alienBombInterval = 2000;
      this.numberOfAllienRows = 3;
      this.numberOfAliensPerRow = 5; 
      this.alienGoRight = false;
      break;
   case 4:
      this.alienSpeed = 70;
      this.alienBombSpeed = 40;
      this.alienBombInterval = 1000;
      this.numberOfAllienRows = 4;
      this.numberOfAliensPerRow = 6; 
      this.alienGoRight = true;
      break;
   }

   var s = "";

   /* Assuring there's no insane, contradictory values given. */
   if( missileSmoothness > baseUnitImageWidth )
   {
      s = "Insane values in scripts/config.js!\nYou shouldn't tamper with that file :-)";
      s += "\n\t* The missileSmoothness must have lower value\n\t  than baseUnitImageWidth.";
   }

   if( numberOfBases * baseWidth * baseUnitImageWidth +
       ( numberOfBases * alienBombImageWidth ) > document.body.clientWidth )
   {
     s = "Insane values in scripts/config.js!\nYou shouldn't tamper with that file :-)";
     s += "\n\t* The combination of numberOfBases, baseWidth and baseUnitImageWidth ";
     s += "\n\t  exceeds the available width of the window.\n";
     s += "\n\t  document.body.clientWidth: " + document.body.clientWidth;
     s += "\n\t  numberOfBases: " + numberOfBases;
     s += "\n\t  baseWidth: " + baseWidth;
     s += "\n\t  baseUnitImageWidth: " + baseUnitImageWidth;
     s += "\n\t  alienBombImageWidth: " + alienBombImageWidth;
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






