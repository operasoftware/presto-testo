// JavaScript for YAST
// Copyright (c) 2005, Jeff Schiller
// http://www.codedread.com/

// TO DO:
// 1) Optimize this, use JavaScript objects to encapsulate a block, 
//    its orientation and its position and use only one function to 
//    the drawing/undrawing of any block.
// 2) Do server-based high scores with XMLHttpRequest
// 
// ===========================================
// CONSTANTS
// ===========================================
var buttons = [ "startbut",
                "pausebut",
                "helpbut"
                ];
var displayableElements = [
                            "buttonspanel",
                            "gamescreen",
                            "gameinfo"
                            ];
// I have to give acknowledgments to Alex Fritze at
// http://www.croczilla.com/svg/samples/svgtetris/svgtetris.svg
// for this very sensible idea...
// (I was going to put it all in SVG and then use rotations!)
var gBlocks = [
                [ [[0,0],[0,1],[1,0],[1,1]] ],
                [ [[0,0],[0,1],[0,2],[0,3]], [[0,0],[1,0],[2,0],[3,0]] ],
                [ [[0,0],[1,0],[0,1],[0,2]], [[0,0],[1,0],[2,0],[2,1]], [[1,0],[1,1],[1,2],[0,2]], [[0,0],[0,1],[1,1],[2,1]] ],
                [ [[1,1],[1,0],[0,0],[1,2]], [[1,1],[2,1],[2,0],[0,1]], [[0,1],[0,2],[1,2],[0,0]], [[1,0],[0,0],[0,1],[2,0]] ],
                [ [[1,1],[0,1],[1,0],[2,1]], [[0,1],[0,0],[1,1],[0,2]], [[1,0],[0,0],[1,1],[2,0]], [[1,1],[1,2],[0,1],[1,0]] ],
                [ [[0,0],[0,1],[1,1],[1,2]], [[1,0],[2,0],[1,1],[0,1]] ],
                [ [[1,1],[1,0],[0,1],[0,2]], [[1,1],[2,1],[1,0],[0,0]] ]
                ];
var gsBlockColors = [ "green", "red", "blueviolet", "olive", 
                        "blue", "mediumseagreen", "maroon", "black" ];
var gSVGNS = "http://www.w3.org/2000/svg";
var gXLINKNS = "http://www.w3.org/1999/xlink";
var WIDTH=320;
var HEIGHT=500
var BLOCKSIZE=20;
var NUMCOLS = (WIDTH/BLOCKSIZE)-2;
var NUMROWS = (HEIGHT/BLOCKSIZE)-1;
var DROPTIMER = 25;
var ROWSTOCLEAR = 10;
var VERSION = "0.1";

var KEY_LEFT = 37;
var KEY_RIGHT = 39;
var KEY_DOWN = 40;
var KEY_UP = 38;
var KEY_SPACE = 32;
var KEY_P = 80;
var KEY_Q = 81;
var KEY_S = 83;
// ===========================================

// ===========================================
// Global Variables
// ===========================================
var gHelpOn = false;
var gPaused = true;

// these should one day be made into an object
var gCurrentBlockNum = -1;
var gCurrentBlockOrient = 0;
var gCurrentBlockTop = 0;
var gCurrentBlockLeft = 0;
var gNextBlockNum = -1;
var gNextBlockOrient = 0;
var gDropTimer = 0;
var gsPressedButtonBkgnd = "url(#pressedbuttonbkgnd)";
var gsActiveButtonBkgnd = "url(#activebuttonbkgnd)";
var gsInactiveButtonBkgnd = "url(#inactivebuttonbkgnd)";
var gLevel = 1;
var gRowsLeft = ROWSTOCLEAR;

// this tracks every square G element in the grid
var gGrid = new Array(NUMROWS);
var gNextBlock = new Array(4);

// total number of blocks created (set to -1
// so the first block doesn't count until it is 
// dropped)
var gTotalBlocks = -1;
// ===========================================

function inspect(obj) {
    var str = new Array();
    for(element in obj) { str[str.length] = element; }
    str.sort();
    alert(obj + ":" + str.join(' '));
}

// Aqua buttons with animation
function highlightButton(evt) 
{
    if(evt && evt.currentTarget)
        evt.currentTarget.setAttribute("fill", gsPressedButtonBkgnd);
}

function unhighlightButton(evt) 
{
    if(evt && evt.currentTarget)
        evt.currentTarget.setAttribute("fill", gsActiveButtonBkgnd);
}

function setButtonActive(button, bActive) {
    if(!button) { return; }
    // class=active_button
    if(bActive) {
        button.setAttribute("enabled", "true");
        button.setAttribute("fill", gsActiveButtonBkgnd);
        button.setAttribute("opacity", "1.0");
        button.setAttribute("cursor", "pointer");
        button.addEventListener("mousedown", highlightButton, false);
        button.addEventListener("mouseup", unhighlightButton, false);
    }
    // class=inactive_button
    else {
        button.setAttribute("enabled", "false");
        button.setAttribute("fill", gsInactiveButtonBkgnd);
        button.setAttribute("opacity", "0.5");
        button.setAttribute("cursor", "default");
        button.removeEventListener("mousedown", highlightButton, false);
        button.removeEventListener("mouseup", unhighlightButton, false);
    }
}

function unsetSquare(x,y,grid)
{
    var g = grid[y][x];
    while(g.hasChildNodes()) {
        g.removeChild(g.firstChild);
    }
}
function setSquare(x,y,color,grid)
{
    var block = document.createElementNS(gSVGNS, "use");
    block.setAttributeNS(gXLINKNS, "href", "#block");
    block.setAttribute("fill", color);

    grid[ y ][ x ].appendChild(block);
}

function doesBlockCollide(arr, left, top) 
{
    for(var pt = 0; pt < 4; ++pt) {
        if( arr[pt][1]+top >= NUMROWS ||                            // if we've reached the bottom
            arr[pt][0]+left < 0 || arr[pt][0]+left >= NUMCOLS ||    // or gone over the sides
            gGrid[ arr[pt][1]+top ][ arr[pt][0]+left ].hasChildNodes()) // or collided with another brick
        { 
            return true; 
        }
    }
    return false;
}

function undrawBlock(left, top, blocknum, blockorient, grid)
{
    if(blocknum==-1) { return; }
    
    for(var pt = 0; pt < 4; ++pt) {
        unsetSquare(left + gBlocks[blocknum][blockorient][pt][0],
                    top + gBlocks[blocknum][blockorient][pt][1],
                    grid);
    }    
}

function drawBlock(left, top, blocknum, blockorient, grid)
{
    if(blocknum==-1) { return; }
    
    for(var pt = 0; pt < 4; ++pt) {
        setSquare(left + gBlocks[blocknum][blockorient][pt][0],
                    top + gBlocks[blocknum][blockorient][pt][1],
                    gsBlockColors[blocknum],
                    grid);
    }    
}

function undrawCurrentBlock() 
{
    undrawBlock(gCurrentBlockLeft, gCurrentBlockTop, gCurrentBlockNum, gCurrentBlockOrient, gGrid);
}

function drawCurrentBlock() 
{
    drawBlock(gCurrentBlockLeft, gCurrentBlockTop, gCurrentBlockNum, gCurrentBlockOrient, gGrid);
}

function undrawNextBlock() 
{
    undrawBlock(0, 0, gNextBlockNum, gNextBlockOrient, gNextBlock);
}
function drawNextBlock() 
{
    drawBlock(0, 0, gNextBlockNum, gNextBlockOrient, gNextBlock);
}

function createBlock()
{
    var blocknum = Math.floor(Math.random()*gBlocks.length);
    
    var maxorientation = gBlocks[blocknum].length;
    var orientation = Math.floor(Math.random()*maxorientation);
    
    undrawNextBlock();
    
    gCurrentBlockNum = gNextBlockNum;
    gCurrentBlockOrient = gNextBlockOrient;
    gCurrentBlockTop = 0;
    gCurrentBlockLeft = NUMCOLS/2 - 2;
    
    gNextBlockNum = blocknum;
    gNextBlockOrient = orientation;
    
    ++gTotalBlocks;
    //if(gTotalBlocks % 10 == 0) { --DROPTIMER; if(DROPTIMER < 0) { DROPTIMER = 0; } }

    var bCollide = doesBlockCollide(gBlocks[gCurrentBlockNum][gCurrentBlockOrient], gCurrentBlockLeft, gCurrentBlockTop);
    
    drawNextBlock();
    drawCurrentBlock();
   
    return !bCollide;
}

function restartGame() {
    for(var row = 0; row < NUMROWS; ++row) {
        for(var col = 0; col < NUMCOLS; ++col) {
            unsetSquare(col,row,gGrid);
        }
    }

    for(var row = 0; row < 4; ++row) {
        for(var col = 0; col < 4; ++col) {
            unsetSquare(col,row,gNextBlock);
        }
    }
    
    var textele = document.getElementById("score");
    if(textele) {
        textele.firstChild.nodeValue = 0;
    }
    
    gDropTimer = DROPTIMER;
    gLevel = 1;
    gRowsLeft = ROWSTOCLEAR;
    var rowsleft = document.getElementById("rowsleft");
    if(rowsleft) {
        // update num rows left text ...
        rowsleft.firstChild.nodeValue = "" + gRowsLeft;
    }
    
    gNextBlockNum = Math.floor(Math.random()*gBlocks.length);
    gNextBlockOrient = Math.floor(Math.random()*gBlocks[gNextBlockNum].length);
}

function dropBlock()
{
    undrawCurrentBlock();
    if(doesBlockCollide(gBlocks[gCurrentBlockNum][gCurrentBlockOrient],gCurrentBlockLeft,gCurrentBlockTop+1)) {
        drawCurrentBlock();
        return true;
    }
    else {
        ++gCurrentBlockTop;
        drawCurrentBlock();
    }
    return false;
}

function startLevel(levnum) {
    var leveltext = document.getElementById("leveltext");
    if(leveltext) {
        // update level text...
        leveltext.firstChild.nodeValue = "Level: " + levnum;
    }
    
    gRowsLeft = ROWSTOCLEAR;
    var rowsleft = document.getElementById("rowsleft");
    if(rowsleft) {
        // update num rows left text ...
        rowsleft.firstChild.nodeValue = "" + gRowsLeft;
    }    

    for(var row = 0; row < 4; ++row) {
        for(var col = 0; col < 4; ++col) {
            unsetSquare(col,row,gNextBlock);
        }
    }

    for(var row = 0; row < NUMROWS; ++row) {
        for(var col = 0; col < NUMCOLS; ++col) {
            unsetSquare(col,row,gGrid);
        }
    }
    
    // now randomly set a bunch of blocks
    var numblockstolay = (levnum-1)*4;
    while(numblockstolay) {
        var x = Math.floor(Math.random()*NUMCOLS);
        var y = NUMROWS - 1 - Math.floor(Math.random()*levnum);
        setSquare(x,y,gsBlockColors[gsBlockColors.length-1],gGrid);
        
        --numblockstolay;
    }
}

function doRowCheck()
{
    var numRows = 0;
    // start from the bottom up, when we get to a row where no squares 
    // had any children, then we are done
    
    for(var y = NUMROWS-1; y >=0; --y) {
        var bAnyOccupied = false;
        var bAnyMissing = false;
        
        for(var x = 0; x < NUMCOLS; ++x) {
            if(gGrid[y][x].hasChildNodes()) {
                bAnyOccupied = true;
            }
            else {
                bAnyMissing = true;
            }
        } // done one row
        
        if(!bAnyOccupied) { break; }
        
        if(!bAnyMissing) {
            ++numRows;
            
            // row to be deleted and all rows pushed down
            // start y-loop again, pushing all row contents down by one
            for(var newy = y; newy >= 0; --newy) {
                var bStopPushing = true;
                
                for(var x = 0; x < NUMCOLS; ++x) {
                    // if square above is occupied then 
                    if(gGrid[newy-1][x].hasChildNodes()) {
                        bStopPushing = false;
                        // if this square is occupied, replaceChild
                        if(gGrid[newy][x].hasChildNodes()) {
                            gGrid[newy][x].replaceChild(gGrid[newy-1][x].removeChild(gGrid[newy-1][x].firstChild), 
                                                        gGrid[newy][x].firstChild);
                        }
                        else {
                            gGrid[newy][x].appendChild(gGrid[newy-1][x].removeChild(gGrid[newy-1][x].firstChild));
                        }
                    }
                    else {
                        // if square is occupied, then removeChild
                        if(gGrid[newy][x].hasChildNodes()) {
                            gGrid[newy][x].removeChild(gGrid[newy][x].firstChild);
                        }
                    }
                } // for x
                if(bStopPushing) { 
                    break;
                }
                
            } // for newy
            ++y; // increment y back so we check the row that was moved down
        } // if none were missing, we had to remove at least one row
    } // for y
    
    // update score and possibly advance level
    if(numRows > 0) {
    
        gRowsLeft -= numRows;
        var rowsleft = document.getElementById("rowsleft");
        if(rowsleft) {
            // update num rows left text ...
            rowsleft.firstChild.nodeValue = "" + gRowsLeft;
        }
        
        var delta = 25;
        while(numRows > 1) { delta <<= 1; --numRows;}
        delta *= gLevel;
        var textele = document.getElementById("score");
        if(textele) {
            // update score...
            var score = parseInt(textele.firstChild.nodeValue) + delta;
            textele.firstChild.nodeValue = score+"";
        }

        if(gRowsLeft <= 0) {
            ++gLevel;
            --DROPTIMER;
            startLevel(gLevel);
        }
    }
    
}

function gameTick()
{
    if(gPaused) { return; }

    if(gCurrentBlockNum == -1) {
        gDropTimer = DROPTIMER;
        
        // check for any complete rows and remove them
        doRowCheck();
        
        if(!createBlock()) {
            pauseClick();
            alert("Game over!");
            restartGame();
        }
    }
    else if(gDropTimer == 0) {
        gDropTimer = DROPTIMER;
        // process drop of block
        if(dropBlock()) {
            gCurrentBlockNum = -1;
        }
    }
    else {
        --gDropTimer;
    }
}

function helpoff(evt) {
    gHelpOn = false;
    var helpscreen = document.getElementById("helpscreen");
    if(helpscreen) {
        helpscreen.setAttribute("display", "none");
        helpscreen.removeEventListener("click", helpoff, false);
    }
}
    
function helpClick(evt) {
    var butt = evt.currentTarget;
    if(butt && butt.getAttribute("enabled") == "true" && !gHelpOn) {
        // pause game
        pauseClick(evt);
        gHelpOn = true;
        
        var helpscreen = document.getElementById("helpscreen");
        if(helpscreen) {
            helpscreen.setAttribute("display", "inline");
            helpscreen.addEventListener("click", helpoff, false);
        }
    }
}

function pauseClick(evt) {
    if(gHelpOn) { return; }
    
    var butt = document.getElementById("pausebut");
    if(butt) { setButtonActive(butt,false); }
    
    butt = document.getElementById("startbut");
    if(butt) { setButtonActive(butt, true); }
        
    gPaused = true;
}

function startClick(evt) {
    if(gHelpOn) { return; }

    var butt = document.getElementById("startbut");
    if(butt) { setButtonActive(butt, false); }
    
    butt = document.getElementById("pausebut");
    if(butt) { setButtonActive(butt, true); }
        
    gPaused = false;
}

function toggleEffect(evt) 
{
    if(evt && evt.currentTarget) {
        var effectName = evt.currentTarget.getAttribute("id");
        var check = document.getElementById(effectName + "_check");
        if(check) {
            var bEnable = !(check.getAttribute("display") == "inline");
            check.setAttribute("display", (bEnable ? "inline" : "none"));
            switch(effectName) {
                case "effect_gradback":
                    var canvas = document.getElementById("canvas")
                    if(canvas) {
                        canvas.setAttribute("fill", (bEnable ? "url(#bkgnd)" : "#008"));
                    }
                    break;
                case "effect_aquabutt":
                    if(bEnable) {
                        gsPressedButtonBkgnd = "url(#pressedbuttonbkgnd)";
                        gsActiveButtonBkgnd = "url(#activebuttonbkgnd)";
                        gsInactiveButtonBkgnd = "url(#inactivebuttonbkgnd)";
                    }
                    else {
                        gsPressedButtonBkgnd = "#a70";
                        gsActiveButtonBkgnd = "#a00";
                        gsInactiveButtonBkgnd = "#aaa";
                    }
                    for(var butt = 0; butt < buttons.length; ++butt) {
                        var buttonuser = document.getElementById(buttons[butt] + "_use");
                        if(buttonuser) {
                            buttonuser.setAttributeNS(gXLINKNS, "href", 
                                    (bEnable ? "#button" : "#vanilla_button"));
                            if(buttonuser.parentNode) {
                                var button = buttonuser.parentNode;
                                var bActive = button.getAttribute("enabled");
                                setButtonActive(button, (bActive=="true"));
                            }
                        }
                    }
                    break;
                default:
                    alert("Unknown effect");
                    break;
            }
        }
    }
}

function initializeButtons() {
    var button = null;
    
    // Start button
    if( (button = document.getElementById("startbut")) ) {
        setButtonActive(button, true);
        button.addEventListener("click", startClick, false);
    }

    // Pause button
    if( (button = document.getElementById("pausebut")) ) {
        setButtonActive(button, false);
        button.addEventListener("click", pauseClick, false);
    }
    
    // Help button
    if( (button = document.getElementById("helpbut")) ) {
        setButtonActive(button, true);
        button.addEventListener("click", helpClick, false);
    }

    // Effects 
    if( (button = document.getElementById("effect_gradback")) ) {
        button.addEventListener("click", toggleEffect, false);
    }
    if( (button = document.getElementById("effect_aquabutt")) ) {
        button.addEventListener("click", toggleEffect, false);
    }
    
    // hide "Please Wait" message
    var msg = document.getElementById("message");
    if(msg) {
        msg.setAttribute("display", "none");
    }
}

function initializeGameboard() {
    var gamescreen = document.getElementById("gamescreen");
    if(!gamescreen) { return; }
    
    gamescreen.setAttribute("transform", "translate(240,80)");
    
    // create border
    var border = document.getElementById("gameborder");
    if(border) {
        var block = null;
        var sBorderColor = "#666";
        for(var row=0; row < NUMROWS+1; ++row) {
            block = document.createElementNS(gSVGNS, "use");
            if(block) {
                block.setAttributeNS(gXLINKNS, "href", "#matteblock");
                block.setAttribute("fill", sBorderColor);
                block.setAttribute("transform", "translate(1," + (1+row*BLOCKSIZE) + ")");
                border.appendChild(block);
            }
            block = document.createElementNS(gSVGNS, "use");
            if(block) {
                block.setAttributeNS(gXLINKNS, "href", "#matteblock");
                block.setAttribute("fill", sBorderColor);
                block.setAttribute("transform", "translate(" + (WIDTH-BLOCKSIZE) + "," 
                                    + (1+row*BLOCKSIZE) + ")");
                border.appendChild(block);
            }
        }
        for(var col = 0; col < NUMCOLS+2; ++col) {
            block = document.createElementNS(gSVGNS, "use");
            if(block) {
                block.setAttributeNS(gXLINKNS, "href", "#matteblock");
                block.setAttribute("fill", sBorderColor);
                block.setAttribute("transform", "translate(" + (col*BLOCKSIZE+1) + "," 
                                    + (HEIGHT-BLOCKSIZE) + ")");
                border.appendChild(block);
            }
        }
    }
    else {
        alert("Could not find border group");
    }
    
    // create grid
    var gamegrid = document.getElementById("gamegrid");
    if(gamegrid) {
        for(var row = 0; row < NUMROWS; ++row) {
            var rowg = document.createElementNS(gSVGNS, "g");
            rowg.setAttribute("transform", "translate("+BLOCKSIZE+","+(row*BLOCKSIZE)+")");
            
            gGrid[row] = new Array(NUMCOLS);
            for(var col = 0; col < NUMCOLS; ++col) {
                var squareg = document.createElementNS(gSVGNS, "g");
                squareg.setAttribute("transform", "translate("+(col*BLOCKSIZE)+")");
                squareg.setAttribute("width", ""+BLOCKSIZE);
                squareg.setAttribute("height", ""+BLOCKSIZE);
                
                gGrid[row][col] = rowg.appendChild(squareg);
            }            
            gamegrid.appendChild(rowg);
        }
    }
    
    // create next block (4x4)
    var nextblok = document.getElementById("nextblok");
    if(nextblok) {
        for(var row = 0; row < 4; ++row) {
            var rowg = document.createElementNS(gSVGNS, "g");
            rowg.setAttribute("transform", "translate("+BLOCKSIZE+","+(row*BLOCKSIZE)+")");
            
            gNextBlock[row] = new Array(4);
            for(var col = 0; col < 4; ++col) {
                var squareg = document.createElementNS(gSVGNS, "g");
                squareg.setAttribute("transform", "translate("+(col*BLOCKSIZE)+")");
                squareg.setAttribute("width", ""+BLOCKSIZE);
                squareg.setAttribute("height", ""+BLOCKSIZE);
                
                gNextBlock[row][col] = rowg.appendChild(squareg);
            }
            nextblok.appendChild(rowg);
        }
    }
}

function displayAll() {
    var ele = null;
    var num = 0;
    
    // display elements
    for(num = 0; num < displayableElements.length; ++num) {
        if( (ele = document.getElementById(displayableElements[num])) ) { 
            ele.setAttribute("display", "inline");
        }
    }
}

function getKey(evt)
{
    if(gPaused || (gCurrentBlockNum == -1)) { return; }

    evt.preventDefault();
    switch(evt.keyCode) {
    case KEY_LEFT:
        undrawCurrentBlock();
        if(!doesBlockCollide(gBlocks[gCurrentBlockNum][gCurrentBlockOrient],gCurrentBlockLeft-1,gCurrentBlockTop)) {
            --gCurrentBlockLeft;
        }
        drawCurrentBlock();
        break;
    case KEY_RIGHT:
        undrawCurrentBlock();
        if(!doesBlockCollide(gBlocks[gCurrentBlockNum][gCurrentBlockOrient],gCurrentBlockLeft+1,gCurrentBlockTop)) {
            ++gCurrentBlockLeft;
        }
        drawCurrentBlock();
        break;
    case KEY_UP:
        undrawCurrentBlock();
        rotateCurrentBlock(true);
        if(doesBlockCollide(gBlocks[gCurrentBlockNum][gCurrentBlockOrient],gCurrentBlockLeft,gCurrentBlockTop)) {
            rotateCurrentBlock(true);
        }
        drawCurrentBlock();
        break;
    case KEY_DOWN:
        gDropTimer = 0;
        break;
        
    case KEY_SPACE:
        // this drops the current block down as fast as possible
        while(!dropBlock()) {}
        gCurrentBlockNum = -1;
        break;
        
    case KEY_S:
        startClick();
        break;
        
    case KEY_P:
    case KEY_Q:
        pauseClick();
        break;
    }
}

function rotateCurrentBlock(bClockwise) {
    if(gCurrentBlockNum == -1) { return; }
    if(bClockwise) {
        ++gCurrentBlockOrient;
        if(gCurrentBlockOrient >= gBlocks[gCurrentBlockNum].length) {
            gCurrentBlockOrient = 0;
        }
    }
    else {
        --gCurrentBlockOrient;
        if(gCurrentBlockOrient < 0) {
            gCurrentBlockOrient = gBlocks[gCurrentBlockNum].length-1;
        }
    }
}

function init() {
    initializeButtons();
    initializeGameboard();
    
    restartGame();

    // now we're all ready, display everything
    // display all in one fell swoop
    displayAll();

    var svg = document.getElementById("svgsvg");
    if(svg) {
        svg.setAttribute("cursor", "default");
        svg.addEventListener("keydown", getKey, false);
    }

    setInterval("gameTick()", 10);
}
