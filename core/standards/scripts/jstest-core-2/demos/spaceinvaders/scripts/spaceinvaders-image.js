/*
  DOM Space Invaders
  by torstein@opera

  This the main file for the image version of
  SpaceInvaders. Functions used by both the
  ascii and image version reside in spaceinvaders.js

  Also, see config.js, object.js, lib.js and ascii.js.

*/
var cvs = "$Id: spaceinvaders-image.js 4838 2006-01-18 05:59:01Z hallvord $";

function init()
{
   commonInit();
   elementsArray = getElementsArray();
   
   /* Preloading images */
   var img;
   alienBombImageSourceArray = new Array();

   for( var k = 0; k < alienBombImageSource.length; k++ )
   {
      img = new Image();
      img.src = alienBombImageSource[ k ];
      alienBombImageSourceArray.push( img );
   }

   missileImageSourceArray = new Array();

   for( var l = 0; l < missileImageSource.length; l++ )
   {
      img = new Image();
      img.src = missileImageSource[ l ];
      missileImageSourceArray.push( img );
   }

   baseUnitImage = new Image();
   baseUnitImage.src = baseUnitImageSource;

   explosionImage = new Image();
   explosionImage.src = explosionImageSource;

   shipImage = new Image();
   shipImage.src = shipImageSource;
   shipY = originalShipY;

   alienImage = new Image();
   alienImage.src = alienImageSource;

   /* Creating aliens */
   var div;
   var img;
   var alienRow;
   
   alienDivArray = new Array();
   
   for( var i = 0; i < alienArray.length; i++ )
   {
      alienRow = new Array();
      
      for( var j = 0; j < alienArray[ i ].length; j++ )
      {
         div = document.createElement( "div" );
         img = document.createElement( "img" );

         img.setAttribute( "src", alienImage.src );
         img.setAttribute( "alt", "An alien" );

         div.setAttribute( "class", "alien" );
         div.style.width = "" + alienImageWidth + "px";
         div.style.height = "" + alienImageHeight + "px";
         div.style.position = "absolute";
         div.style.visibility = "hidden";
         div.appendChild( img );

         space.appendChild( div );
         alienRow.push( div );
      }

      alienDivArray.push( alienRow );
   }

   img = document.createElement( "img" );
   img.setAttribute( "src", shipImage.src );
   img.setAttribute( "alt", "The ship" );

   div = document.createElement( "div" );
   div.setAttribute( "class", "ship" );
   div.setAttribute( "id", "ship" );
   div.style.width = "" + shipImageWidth + "px";
   div.style.height = "" + shipImageHeight + "px";
   div.style.position = "absolute";
   div.style.top = "" + shipY;
   div.style.left = "" + shipY;
   div.appendChild( img );

   space.appendChild( div );
   elementsArray.push( div );

   ship = div;

   /* Creating bases */
   baseArray = new Array();
   var b;
   
   for( var m = 0; m < numberOfBases; m++ )
   {
      b = new Base(  ( m * ( document.body.clientWidth / numberOfBases ) ) + alienBombImageWidth,
                     shipY - ( baseHeight * baseUnitImageWidth ) - alienBombImageHeight );

      space.appendChild( b.div );
      baseArray.push( b );
   }

}

function moveShip( e )
{
   if( isMozillaOrGaleon() )
   {
      var newX = e.pageX;
      
      if( e.shiftKey )
         var newY = e.pageY;
   }
   else if( isOpera() )
   {
      var newX = e.x;

      if( e.shiftKey )
         var newY = e.y;
   }
   else if( isExplorer() )
   {
      var newX = event.clientX;

      if( event.shiftKey )
         var newY = event.clientY;
   }

   if( newX >= window.innerWidth - shipImageWidth )
      newX -= shipImageWidth;

   if( Math.abs( newX - shipX ) < mouseSensitivity ) return;

   if( newY ) 
      shipY = newY;

   if( newX > ( shipImageWidth / 2 ) )
      newX = newX - ( shipImageWidth / 2 );

   ship.style.left = "" + newX + "px";
   ship.style.top = "" + shipY + "px";
   
   shipX = newX;
}

function updateAliens()
{
   if( gamePaused ) return;

   if( alienLeftOffset == 0 )
      alienGoRight = true;
   else if( alienLeftOffset >= ( window.innerWidth
                                 - 10 // to avoid scrollbars in Moz.
                                 - ( numberOfAliensPerRow * alienImageWidth ) ) )
   {
      alienGoRight = false;
   }
      
   for( var i = 0; i < alienArray.length; i++ )
   {
      for( var j = 0; j < alienArray[ i ].length; j++ )
      {
         if( alienArray[ i ][ j ] == 1 )
         {
            var div = alienDivArray[ i ][ j ];
            div.style.top = "" + ( ( alienImageHeight * i ) + topOffset ) + "px";
            div.style.left = "" + ( alienLeftOffset + ( j * alienImageWidth ) ) + "px";
            div.style.visibility = "visible";
         }
      }
   }

   if( alienGoRight )
      alienLeftOffset += alienSmoothness;
   else
      alienLeftOffset -= alienSmoothness;
}

/* Returns the x coordinate of a random alien that is alive. */
function getAlienBombX()
{
   var index = Math.floor( Math.random() * numberOfAliensPerRow );

   for( var i = 0; i < numberOfAllienRows; i++ )
   {
      if( alienArray[ i ][ index ] == 1 )
      {
         var div = alienDivArray[ i ][ index ];
         return parseInt( div.style.left.substr( 0, div.style.top.indexOf( "px" ) ) ) + ( alienImageWidth / 2 );
      }
   }
}

function getAlienBombY()
{
   return ( alienBombImageHeight * numberOfAllienRows ) + topOffset + alienBombImageHeight;
}

/*
   dropNew AlienBomb arguments:
   x:     x coordinate
   y:     y coordinate
   bl:    bounce-left
   br:    bounce-right 
   virus: is the bomb to be a virues?
*/
function dropNewAlienBomb( x, y, bl, br, virus )
{
   if( gamePaused ) return;
   
   var alienBombLevel = currentLevel;
   var alienBombX = getAlienBombX();
   var alienBombY = getAlienBombY();
   var alienBomb = new AlienBomb( x, y, bl, br, virus );

   alienBomb.iid =
      setInterval( function()
                   {
                      if( gamePaused ) return;

                      if( levelFinished || ( alienBombLevel != currentLevel )
                          ||
                          // -10 to avoid scrollbars in Moz.
                          ( alienBomb.y + alienBombImageHeight ) >= ( window.innerHeight - 10 ) 
                          ||
                          ( alienBomb.y == 0 && alienBomb.ie )
                          ||
                          ( alienBomb.x >= ( window.innerWidth - 10 ) )
                          ||
                          ( alienBomb.x < 0 ) )
                      {
                         elementsArray.remove( alienBomb );
                         return;
                      }

                      hitBase( alienBomb );

                      if( ( ( alienBomb.x == shipX )
                            ||
                            ( ( alienBomb.x > shipX )
                              &&
                              ( shipX + shipImageWidth > alienBomb.x ) )
                            ||
                            ( ( alienBomb.x < shipX )
                              &&
                              ( alienBomb.x + alienBomb.width > shipX ) ) )
                          &&
                          ( ( alienBomb.y + alienBomb.height >= shipY )
                            &&
                            ( alienBomb.y + alienBombImageHeight <= shipY + shipImageHeight ) ) )
                      {
                         if( !isExplorer() )
                         {
                            ship.lastChild.setAttribute( "src", explosionImage.src );                  

                            if( soundEffects )
                               ship.appendChild( getExplosionSound() );

                            setTimeout( function()
                            {
                               elementsArray.remove( ship );
                            },
                                        explosionTimeout );

                            elementsArray.remove( alienBomb );
                            gameOver();
                         }
                         else
                         {
                            alienBomb.ie = true;

                            if( ( alienBomb.x - shipX - alienBombSmoothness ) >
                                ( shipX + shipImageWidth ) - ( alienBomb.x + alienBomb.width ) )
                            {
                               alienBomb.bounceRight = true;
                            }
                            else if( ( alienBomb.x - shipX + alienBombSmoothness ) <
                                     ( shipX + shipImageWidth ) - ( alienBomb.x + alienBomb.width ) )
                            {
                               alienBomb.bounceLeft = true;
                            }
                         }
                      }

                      if( !alienBomb.ie )
                      {
                         alienBomb.setY( alienBomb.y += alienBombSmoothness );

                         if( alienBomb.bounceRight )
                         {
                            alienBomb.setX( alienBomb.x -= alienBombSmoothness );
                         }
                         else if( alienBomb.bounceLeft )
                         {
                            alienBomb.setX( alienBomb.x += alienBombSmoothness );
                         }

                         if( alienBomb.bombIndex == alienVirusIndex )
                         {
                            elementsArray.remove( alienBomb );
                            dropNewAlienBomb( alienBomb.x, alienBomb.y, true, false, true );
                            dropNewAlienBomb( alienBomb.x, alienBomb.y, false, true, true );
                         }
                      }
                      else
                      {
                         killAlien( alienBomb );
                         alienBomb.setY( alienBomb.y -= alienBombSmoothness );

                         if( alienBomb.bounceRight )
                         {
                            alienBomb.setX( alienBomb.x += alienBombSmoothness );
                         }
                         else if( alienBomb.bounceLeft )
                         {
                            alienBomb.setX( alienBomb.x -= alienBombSmoothness );
                         }
                      }
                   },
                   alienBombSpeed );
}

function killAlien( missile )
{
   for( var i = 0; i < alienArray.length; i++ )
   {
      for( var j = 0; j < alienArray[ i ].length; j++ )
      {
         if( alienArray[ i ][ j ] == 1 )
         {
            div = alienDivArray[ i ][ j ];
            var alienX = parseInt( div.style.left.substr( 0, div.style.top.indexOf( "px" ) ) );
            var alienY = parseInt( div.style.top.substr( 0, div.style.top.indexOf( "px" ) ) );
                     
            if( ( missile.x == alienX ||
                  ( missile.x > alienX && ( missile.x < ( alienX + alienImageWidth ) ) ) )
                &&
                ( missile.y == alienY || 
                  ( missile.y > alienY && ( missile.y < ( alienY + alienImageHeight ) ) ) ) )
            {
               alienArray[ i ][ j ] = 0;

               div.lastChild.setAttribute( "src", explosionImage.src );
               div.lastChild.setAttribute( "alt", "explosion" );
               div.setAttribute( "id", "explosion" );

               if( soundEffects )
                  div.appendChild( getExplosionSound() );
                        
               setTimeout( function()
                           {
                              space.removeChild( document.getElementById( "explosion" ) );
                              elementsArray.remove( div );
                           }, explosionTimeout );

               elementsArray.remove( missile );
               increaseScore();
            }
         }
      }
   }
}

function fireMissile()
{
   var missileLevel = currentLevel;
   var missile = new Missile( shipX + ( shipImageWidth / 2 ),
                              shipY - shipImageHeight );

   missile.iid = setInterval( function()
                              {
                                 if( gamePaused ) return;

                                 if( levelFinished || missileLevel != currentLevel || missile.y < 1 )
                                 {
                                    elementsArray.remove( missile );
                                    return;
                                 }

                                 if( !hitBase( missile ) )
                                 {
                                    missile.setY( missile.y -= missileSmoothness );
                                    killAlien( missile );
                                 }
                              },
                              missileSpeed );
}

/* Shot can either be a bomb or a missile */
function hitBase( shot )
{
   var bu;

   for( var i = 0; i < baseArray.length; i++ )
   {
      for( var j = 0; j < baseArray[ i ].baseUnits.length; j++ )
      {
         bu = baseArray[ i ].baseUnits[ j ];

         if( ( ( shot.x == ( bu.x + baseArray[ i ].x ) )
               ||
               ( ( shot.x + shot.width > ( bu.x + baseArray[ i ].x ) )
                 &&
                 ( shot.x < ( bu.x + baseArray[ i ].x ) + baseUnitImageWidth ) ) )
             &&
             ( ( shot.y == ( bu.y + baseArray[ i ].y ) )
               ||
               ( ( shot.y < ( bu.y + baseArray[ i ].y ) )
                 &&
                 ( shot.y > ( bu.y + baseArray[ i ].y ) - baseUnitImageWidth ) ) ) )
         {
            baseArray[ i ].remove( j );
            elementsArray.remove( shot );
            return true;
         }
      }
   }

   return false;
}
