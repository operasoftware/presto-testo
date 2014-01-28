/*
  DOM Space Invaders
  by torstein@opera

  This is the common config file,
  used by both the ASCII and Image version of SpaceInvaders
*/

/* The Game */
var space;                               // 42: life, the unvierse and everything.
var planet;                              // the table
var currentLevel = 0;                    // what level we are at, should be 0 here. 
var newLevelTimeout = 3000;              // timeout between levels
var backgroundImages = new Array( "graphics/stitch_in_time.jpg",
                                  "graphics/blue_nova.jpg",
                                  "graphics/red_saturn.jpg",
                                  "graphics/blue_sun.jpg" );

var explosionTimeout = 600;              // should match the length of the explosionSound.
var explosionSoundSource = "sounds/explosion.wav";
var levelFinished = false;               // indicating wheter or not a level is completed/game over.
var livesLeft = 2;                       // total lives
var gamePaused = false;
var soundEffects = false; // if you don't have a plugin for audio/x-wav, you may set this to false.

/* The Aliens */
var alienArray;
var alienSpeed = 550;                     // lower the faster
var alienIntervalId;                      // id for the alien interval
var alienBombX;
var alienBombY;
var alienBombId = 0;                      // must be assigned a value here, gives unique ids to missiles
var alienBombIntervalId;
var alienBombInterval = 1000;
var alienBombSpeed = 500;                 // the lower the faster
var alienBombInSpace = false;             // only have one bomb in the air
var alienGoRight = true;                  // the aliens start going to the right
var numberOfAliensPerRow = 4; 
var numberOfAllienRows = 2;

/* The Ship */
var missileId;
var missileDone = false;


