/*
  DOM Space Invaders
  by torstein@opera

  Here are all the SpaceInvader object definitions.

  $Id: objects.js 4838 2006-01-18 05:59:01Z hallvord $  
*/

function BaseUnit( x, y )
{
   this.div = document.createElement( "div" );
   this.div.style.width = "" + baseUnitImageWidth + "px";
   this.div.style.height = "" + baseUnitImageWidth + "px";
   this.div.style.visibility = "visible";
   this.div.style.top = "" + y + "px";
   this.div.style.left = "" + x + "px";
   this.div.style.position = "absolute";

   this.img = document.createElement( "img" );
   this.img.setAttribute( "src", baseUnitImage.src );
   this.img.setAttribute( "alt", "base" );

   this.div.appendChild( this.img );
   this.x = x;
   this.y = y;

   return this;
}

function Base( x, y )
{
   this.div = document.createElement( "div" );
   this.div.setAttribute( "id", "base-" + ++baseId );
   this.div.style.position = "absolute";
   this.div.style.left = "" + x + "px";
   this.div.style.top = "" + y + "px";

   this.baseUnits = new Array();

   for( var i = 0; i < baseWidth; i++ )
   {
      for( var j = 0; j < baseHeight; j++ )
      {
         var bu = new BaseUnit( i * baseUnitImageWidth, j * baseUnitImageWidth );
         this.div.appendChild( bu.div );
         this.baseUnits.push( bu );
      }
   }

   this.remove =
      function( unit )
      {
         this.div.removeChild( this.baseUnits[ unit ].div );
         this.baseUnits[ unit ] = this.baseUnits[ this.baseUnits.length - 1 ];
         this.baseUnits.pop();
      }

   this.x = x;
   this.y = y;

   return this;
}


function Missile( x, y )
{
   var index = Math.floor( ( Math.random() * missileImageSource.length ) );

   this.img = document.createElement( "img" );
   this.img.setAttribute( "src", missileImageSourceArray[ index ].src );
   this.img.setAttribute( "alt", "missile" );

   this.div = document.createElement( "div" );
   this.div.setAttribute( "id", "missile-" + ++missileId );
   this.div.style.width = "" + missileImageWidth + "px";
   this.div.style.height = "" + missileImageHeight + "px";
   this.div.style.position = "absolute";
   this.div.style.left = "" + x + "px";
   this.div.style.top = "" + y + "px";
   this.div.appendChild( this.img ); 

   this.x = x;
   this.y = y;
   this.width = missileImageWidth;
   this.height = missileImageHeight;
   this.id = "missile-" + missileId;
   this.iid; 

   this.setY =
      function( y )
      {
         this.div.style.top = "" + y + "px";
      };

   space.appendChild( this.div );
   elementsArray.push( this.div );
   return this;
}

/*
   AlienBomb arguments:
   x:     x coordinate
   y:     y coordinate
   bl:    bounce-left
   br:    bounce-right 
   virus: is the bomb to be a virues?
*/
function AlienBomb( x, y, bl, br, virus )
{
   this.x = x;
   this.y = y;

   if( !asciiVersion )
   {
      this.img = document.createElement( "img" );

      if( virus )
      {
         var index = alienVirusIndex;
         this.img.setAttribute( "src", alienVirusImageSource );
      }
      else
      {
         var index = Math.floor( ( Math.random() * alienBombImageSource.length ) );
         this.img.setAttribute( "src", alienBombImageSourceArray[ index ].src );
      }

      this.img.setAttribute( "alt", "Bomb" );

      this.div = document.createElement( "div" );
      this.div.setAttribute( "id", "bomb-" + ++alienBombId );
      this.div.style.width = "" + alienBombImageWidth + "px";
      this.div.style.height = "" + alienBombImageHeight + "px";
      this.div.style.position = "absolute";
      this.div.style.left = "" + x + "px";
      this.div.style.top = "" + y + "px";
      this.div.appendChild( this.img );

      this.id = "bomb-" + alienBombId;
      this.iid;
      this.ie = false; // spooky stuff happens to IE users...
      this.x = x;
      this.y = y;
      this.bounceLeft = bl;
      this.bounceRight = br;

      if( !virus )
      {
         this.bombIndex = index;
         this.width = alienBombImageWidth;
         this.height = alienBombImageHeight;
      }
      else
      {
         this.width = alienVirusImageWidth;
         this.height = alienVirusImageHeight;
      }

      this.setY =
         function( y )
         {
            this.div.style.top = "" + y + "px";
            this.y = y;
         };

      this.setX =
         function( x )
         {
            this.div.style.left = "" + x + "px";
            this.x = x;
         };

      space.appendChild( this.div );
      elementsArray.push( this.div );
   }

   return this;
}
