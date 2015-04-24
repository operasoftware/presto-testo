function Text(text, fontsize, font, color, coords) {
    this.text = text;
    this.fontsize = fontsize;
    this.font = font;
    this.color = color;
    this.font = font;
    this.coords = coords;
    this.opacityMultiplier = 0;
    this.fading = false;
    
    this.createSVGRef = function(container_id) {
	this.svgref = createText(text, font, fontsize, coords, 
				 color, container_id);
    }

    this.adjustOpacity = function(opacity) {
	this.svgref.setAttributeNS(null, "fill-opacity", opacity);
    this.svgref.setAttributeNS(null, "stroke-opacity", opacity);
	this.opacity = opacity;
    }
    
    this.increaseOpacity = function() {
	this.adjustOpacity(this.opacityMultiplier*0.02);
    }
    
    this.setText = function(text){
        this.text = text;
        this.svgref.firstChild.nodeValue = this.text;
    }

    this.setSize = function(s){
        this.fontsize = s;
        this.svgref.setAttributeNS(null, "font-size", s);
    }
 
    this.redraw = function() {
        this.svgref.firstChild.nodeValue = this.text;
	    this.svgref.setAttributeNS(null, "font-size", this.fontsize);
        this.svgref.setAttributeNS(null, "x", halfXReso + this.coords[0]);
        this.svgref.setAttributeNS(null, "y", halfYReso + this.coords[1]);
        this.svgref.setAttributeNS(null, "fill", this.color);
        this.svgref.setAttributeNS(null, "fill-opacity", this.opacity);
    }
}
    
function starttext_loader(container_id){
    setCanvasColor("black");
    var texts = new Array(
	"Reykjavik Elk",
	"our very first demo",
	"for Assembly Summer '07",
	"the Pastel Penetration",
    "prepare to be penetrated"
    );
    var fontsizes = new Array(60, 30, 40, 60, 30);
    var coords = new Array(
	new Array(-500, 100),
	new Array(-200, -100),
	new Array(-400, 150),
	new Array(-300, 0),
    new Array(1000, 1000),
	new Array(-500, -100)
    ); 
    var font = "Courier";
    var colors = new Array("#2C4D56", "#C3AA72", "#DC7612", "#BD3200", "#2C4D56");
// //<<<<<<< HEAD:textEngine.js
//     var intro = new Text(texts[0], fontsizes[0], font, colors[0], coords[0]);
//     intro.createSVGRef(container_id);
// =======
    var intro = new Text(texts[0], fontsizes[0], font, colors[0], coords[0]);
    var presents = new Text("presents", fontsizes[0], font, colors[0], new Array(110, 100));
    intro.createSVGRef(container_id);
    presents.createSVGRef(container_id);
    var pisvg = showPi(document.getElementById(container_id));
// >>>>>>> c640622bc7c36d7532873c89ebec08d6db592ba8:textEngine.js
    setTimeout(changeText, 3000, intro, texts[1], coords[1], colors[1]);
    setTimeout(changeText, 6000, intro, texts[2], coords[2], colors[2]);
    setTimeout(changeText, 9000, intro, texts[3], coords[3], colors[3]);
    setTimeout(changeText, 12000, intro, texts[4], coords[4], colors[4]);
    setTimeout(changeText, 13000, intro, texts[4], coords[5], colors[4]);
    setTimeout(changeText, 16000, intro, texts[4], coords[4], colors[4]);
    setInterval(shakingText, 50, intro);
    var presInterval = setInterval(shakingText, 50, presents);
    setInterval(shakePi, 50, pisvg);
    setTimeout(clearInterval, 3000, presInterval);
    setTimeout(removeText, 3000, container_id, presents);
    setTimeout(removePi, 3000, container_id, pisvg);
}

function removeText(container_id, t){
    document.getElementById(container_id).removeChild(t.svgref);
}

function changeText(textObj, text, coords, color) {
    textObj.adjustOpacity(0);
    textObj.color = color;
    textObj.text = text;
    textObj.coords = coords;
    textObj.redraw();
    textObj.adjustOpacity(1);
    textObj.redraw();
}

function createText(text, font, fontsize, coords, color, container_id) {
    var container = document.getElementById(container_id);
    var thetext = document.createElementNS(svgNS, "text");
    thetext.setAttributeNS(null, "x", halfXReso+coords[0]);
    thetext.setAttributeNS(null, "y", halfYReso+coords[1]);
    thetext.setAttributeNS(null, "font-family", font);
    thetext.setAttributeNS(null, "font-size", fontsize);
    thetext.setAttributeNS(null, "fill", color);
    var textNode = document.createTextNode(text);
    thetext.appendChild(textNode);
    document.getElementById(container_id).appendChild(thetext);
    return thetext;
}
var fadingIterator = 0;

function animateFadingTexts(texts) {
    texts[fadingIterator].increaseOpacity();
    if(texts[fadingIterator].fading) {
        texts[fadingIterator].opacityMultiplier--;
        if(texts[fadingIterator].opacityMultiplier == 0) { 
            texts[fadingIterator].fading = false; 
	    texts[fadingIterator].redraw()
            fadingIterator++;
            if(fadingIterator == texts.length) { fadingIterator = 0; }
        }
    }
    else {
        texts[fadingIterator].opacityMultiplier++;
        if(texts[fadingIterator].opacityMultiplier == 50) { 
	    texts[fadingIterator].fading = true; 
	}
    }
}

function shakingText(text) {
    // Ensure that texts opacity is full
    //text.adjustOpacity(1.00);
    var old_x = text.coords[0];
    var old_y = text.coords[1];
    text.coords[0] += Math.random()*3*plusOrMinusOne();
    text.coords[1] += Math.random()*3*plusOrMinusOne();
    text.redraw();
    text.coords = new Array(old_x, old_y);
}    

function showPi(kaikki){
    var pi = document.createElementNS(svgNS, "use");
    pi.setAttributeNS(xlinkNS, "href", "#PI");
    pi.setAttributeNS(null, "fill", "#2C4D56");
    pi.setAttributeNS(null, "transform", "translate(630 400) scale(0.15)");
    kaikki.appendChild(pi); 
    return pi;    
}

function shakePi(pi){
    var c = new Array(2);
    c[0] = Math.random()*3*plusOrMinusOne();
    c[1] = Math.random()*3*plusOrMinusOne();
    pi.setAttributeNS(null, "transform", "translate(" +(630+c[0])+" "+ (400+c[1])+") scale(0.15)");
}

function removePi(container_id, pi){
    document.getElementById(container_id).removeChild(pi);
}

function endtext_loader(container_id){
    grid();
    var texts = new Array(
    "greets go to",
    "Sharlin",
    "Dekadence",
    "Asteriskin ja Infån karvanaamat",
    "A-iino & Catana",
    "PENETRATION OVER"
    );
    var fontsizes = new Array(60, 30, 40, 60, 30);
    var coords = new Array(
    new Array(-500, 100),
    new Array(-200, -100),
    new Array(-100, 250),
    new Array(-600, 200),
    new Array(-200, -100),
    new Array(-300, 200)
    );
    var font = "Courier";
    var colors = new Array("#2C4D56", "#C3AA72", "#DC7612", "#BD3200", "#2C4D56", "#DC7612");
    var intro = new Text(texts[0], fontsizes[0], font, colors[0], coords[0]);
    intro.createSVGRef(container_id);
    setTimeout(changeText, 3000, intro, texts[1], coords[1], colors[1]);
    setTimeout(changeText, 6000, intro, texts[2], coords[2], colors[2]);
    setTimeout(changeText, 9000, intro, texts[3], coords[3], colors[3]);
    setTimeout(changeText, 12000, intro, texts[4], coords[4], colors[4]);
    setTimeout(changeText, 15000, intro, texts[5], coords[5], colors[5]);
    var shaking = setInterval(shakingText, 50, intro);
    setTimeout(clearInterval, 20000, shaking);
    setTimeout(stopGrid, 20000);
}

