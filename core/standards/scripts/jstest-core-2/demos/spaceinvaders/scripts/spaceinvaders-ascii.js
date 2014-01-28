/*
  DOM Space Invaders
  by torstein@opera

  This the main file for the ascii version of
  SpaceInvaders. Functions used by both the
  ascii and image version reside in spaceinvaders.js

  Also, see config.js, lib.js, object.js and ascii.js.

*/
var cvs = "$Id: spaceinvaders-ascii.js 4838 2006-01-18 05:59:01Z hallvord $";  

function init()
{
   commonInit();

   /* Need to use tbody to get it to render in IE */
   var table = document.createElement( "table" );
   this.planet = document.createElement( "tbody" );
   planet.setAttribute( "id", "planet" );
   table.appendChild( planet );
   space.appendChild( table );
   
   for( var k = 0; k < dimension; k++ )
   {
      planet.appendChild( document.createElement( "tr" ) );

      for( var l = 0; l < dimension; l++ )
      {
         planet.lastChild.appendChild( document.createElement( "td" ) );
      }
   }

   this.shipX = Math.floor( dimension / 2 );
   this.shipY = dimension - 1;
   updateShip( this.shipX );

   // Final level
   if( currentLevel == backgroundImages.length )
   {
      document.getElementById( "planet" ).style.color = "red";
      document.getElementById( "planet" ).style.fontWeight = "bolder";
   }
}

function updateShip( newshipX )
{
   if( newshipX < 0 )
   {
      newshipX = 0;
   }
   else if( newshipX > ( dimension - 1  ) )
   {
      newshipX = dimension - 1;
   }
   
   var shipCell = planet.childNodes[ planet.childNodes.length - 1 ].childNodes[ shipX ];

   if( shipCell.lastChild )
      shipCell.removeChild( shipCell.lastChild );
   
   planet.childNodes[ planet.childNodes.length - 1 ].childNodes[ newshipX ].appendChild( getShip() );

   this.shipX = newshipX;
}

function moveShip( e )
{
   if( !isExplorer() )
      var screenX = e.screenX;
   else
      var screenX = window.event.clientX;
   
   if( Math.abs( screenX - eventX ) < mouseSensitivity ) return;
   
   if( screenX < ( eventX ) )
   {
      updateShip( shipX - 1 );
   }
   else if( screenX > eventX )
   {
      updateShip( shipX + 1 );
   }

   eventX = screenX;
}

function updateAliens()
{
   if( gamePaused ) return;

   var oldalienX = alienX;
   var oldalienY = alienY;

   if( ( dimension - alienX - alienArray[ 0 ].length == 0 ) )
      alienGoRight = false;
   
   if( ( alienX == 0 && alienGoRight == false ) )
      alienGoRight = true;

   for( var i = 0; i < alienArray.length; i++ )
   {
      for( var j = 0; j < alienArray[ i ].length; j++ )
      {
         if( alienArray[ i ][ j ] == 1 )
         {
            var oldAlienCell = planet.childNodes[ i + oldalienY ].childNodes[ j + oldalienX ];

            if( oldAlienCell.childNodes.length > 0 )
            {
               oldAlienCell.removeChild( oldAlienCell.lastChild );
            }
                  
            if( alienGoRight )
            {
               var nextAlienCell = planet.childNodes[ i + oldalienY ].childNodes[ j + oldalienX + 1 ];
               nextAlienCell.appendChild( getAlien() );
            }
            else
            {
               var previousAlienCell = planet.childNodes[ i + oldalienY ].childNodes[ j + oldalienX - 1 ];
               previousAlienCell.appendChild( getAlien() );
            }
         }
      }
   }

   if( alienGoRight )
      alienX++;
   else
      alienX--;
}

function fireMissile()
{
   if( levelFinished ) return;
   
   missileX = shipX;
   missileY = dimension - 2;
   missileDone = false;
   missileId = setInterval( "missile()", missileSpeed );
}

function missile()
{
   if( levelFinished ) return;

   if( this.missileY < 0 || missileDone )
   {
      missileDone = true;
      return;
   }

   var missileCell = planet.childNodes[ missileY ].childNodes[ missileX ];
   var previousMissileCell = planet.childNodes[ missileY + 1 ].childNodes[ missileX ];

   if( this.missileY != ( dimension - 2  ) && previousMissileCell.lastChild ) // don't remove the ship
   {
      previousMissileCell.removeChild( previousMissileCell.lastChild ); 
   }

   if( missileCell.childNodes.length == 1 )
   {
      if( alienArray[ missileY - alienY ] != undefined )
      {
         missileCell.replaceChild( getExplosion(), missileCell.lastChild );
         document.getElementById( "space" ).style.backgroundImage = "url( '" + explosionBackground + "' )";

         if( soundEffects )
            missileCell.appendChild( getExplosionSound() );

         setTimeout( function()
                     {
                        if( missileCell.lastChild != undefined )
                        {
                           missileCell.removeChild( missileCell.lastChild );

                           if( soundEffects )
                              missileCell.removeChild( missileCell.lastChild );
               
                           document.getElementById( "space" ).style.backgroundImage = "url('')";
                        }
                     },
                     explosionTimeout );
         
         alienArray[ missileY - alienY ][ missileX - alienX ] = 0;
         increaseScore();
      }
      else // removing the previous shot 
      {
         missileCell.removeChild( missileCell.lastChild );
      }

      missileDone = true;
      clearInterval( missileId );
   }
   else if( missileCell != undefined )
   {
      missileCell.appendChild( getMissile() );

      if( missileY == 0 && missileCell.lastChild )
      {
         setTimeout( function()
                     {
                        /* Something things goes a little too fast for Mozila, thus the if */
                        if( missileCell.lastChild )
                           missileCell.removeChild( missileCell.lastChild );
                     },
                     missileSpeed );
      }

   }

   missileY--;
}

function dropNewAlienBomb()
{
   if( levelFinished || gamePaused ) return;

   var bombLevel = currentLevel;
   var alienBomb = new AlienBomb( Math.floor( ( Math.random() * numberOfAliensPerRow ) + alienX ),
                                  alienY + numberOfAllienRows );
   setInterval( function ()
                {
                   if( bombLevel != currentLevel ) return;
                   else
                      dropAlienBomb( alienBomb );
                      
                }, alienBombSpeed );
}

function dropAlienBomb( ab )
{
   if( ab.y == dimension || gamePaused || levelFinished ) return;

   var alienBombCell = planet.childNodes[ ab.y ].childNodes[ ab.x ];
   var previousAlienBombCell = planet.childNodes[ ab.y - 1 ].childNodes[ ab.x ];

   if( ab.y != ( alienY + numberOfAllienRows ) ) // don't remove the alien
   {
      if( previousAlienBombCell.lastChild )
         previousAlienBombCell.removeChild( previousAlienBombCell.lastChild );
   }

   if( ab.x == shipX && ab.y == shipY )
   {
      alienBombCell.replaceChild( getExplosion(), alienBombCell.lastChild );
      
      if( soundEffects )
         alienBombCell.appendChild( getExplosionSound() );
      
      document.getElementById( "space" ).style.backgroundImage = "url( '" + explosionBackground + "')";
      setTimeout( function()
                  {
                     document.getElementById( "space" ).style.backgroundImage = "url( '' )";
                     alienBombCell.removeChild( alienBombCell.lastChild );
                     
                     if( soundEffects )
                        alienBombCell.removeChild( alienBombCell.lastChild );
                  },
                  explosionTimeout );
      gameOver();
   }
   else 
   {
      alienBombCell.appendChild( getAlienBomb() );
   }

   if( ab.y == dimension - 1 )
   {
      setTimeout( function()
                  {
                     if( alienBombCell.lastChild )
                     {
                        alienBombCell.removeChild( alienBombCell.lastChild );
                        alienBombInSpace = false;
                     }
                  },
                  alienBombSpeed );
   }

   ab.y++;
}


