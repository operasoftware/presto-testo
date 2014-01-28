
/*
  DOM Space Invaders
  by torstein@opera

  All figures used in the ASCII version of the game
  are created here.
*/


function getAlien()
{
   var alien = document.createElement( "pre" );
   alien.setAttribute( "class", "alien" );
   alien.appendChild( document.createElement( "br" ) );
   alien.appendChild( document.createTextNode( "/^\\" ) );
   alien.appendChild( document.createElement( "br" ) );
   alien.appendChild( document.createTextNode( " |^|^| " ) );
   alien.appendChild( document.createElement( "br" ) );
   alien.appendChild( document.createTextNode( "/^\\" ) );

   return alien;
}

function getShip()
{
   var ship = document.createElement( "pre" );

   ship.appendChild( document.createElement( "br" ) );
   ship.appendChild( document.createTextNode( "/^\\" ) );
   ship.appendChild( document.createElement( "br" ) );
   ship.appendChild( document.createTextNode( "| _ |" ) );
   ship.appendChild( document.createElement( "br" ) );
   ship.appendChild( document.createTextNode( "< / \\ >" ) );
   ship.appendChild( document.createElement( "br" ) );
   ship.appendChild( document.createTextNode( " ^^^^^ " ) );

   return ship;
}

function getMissile()
{
   var missile = document.createElement( "pre" );
   missile.appendChild( document.createTextNode( "!!" ) );
   missile.setAttribute( "class", "red" );
   return missile;
}

function getAlienBomb()
{
   var alienBomb = document.createElement( "pre" );
   alienBomb.appendChild( document.createTextNode( "@" ) );
   alienBomb.setAttribute( "class", "yellow" );
   return alienBomb;
}

function getExplosion()
{
   var explosion = document.createElement( "pre" );
   
   explosion.appendChild( document.createElement( "br" ) );
   explosion.appendChild( document.createTextNode( "#@#" ) );
   explosion.appendChild( document.createElement( "br" ) );
   explosion.appendChild( document.createTextNode( "#@#@#" ) );
   explosion.appendChild( document.createElement( "br" ) );
   explosion.appendChild( document.createTextNode( "#@#" ) );

   explosion.setAttribute( "class", "red" );

   return explosion;
}

/* Would have been used if using innerHTML ( but we're not ) */
function getAlienHTML() 
{
   return "&nbsp;/^\\<br>|^|^|<br>&nbsp;/^\\";  
} 

function getShipHTML()
{
   return '&nbsp;&nbsp;/^\\<br>&nbsp;|&nbsp;<span class="c">_</span>&nbsp;|<br>\<&nbsp;<span class="c">/&nbsp;\\</span>&nbsp;\><br>&nbsp;<span class="y">^</span><span class="r">^^^</span><span class="y">^</span>';
}

function getExplosionHTML()
{
   return '&nbsp;&nbsp;<span class="r">.<br>&nbsp;#@#<br>#@</span><span class="y">#</span><span class="r">@#<br>&nbsp;#@#<br>&nbsp;&nbsp;"</span>';

}
