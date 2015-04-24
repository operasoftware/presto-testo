var helixinterval;
var start, stop, sum = 0, goRound = 0, rotateCounter = 0;
if (location.search.indexOf("reps=") >= 0) rotatesPerRound = parseInt(location.search.substring(location.search.indexOf("reps=")+5).split("&")[0])
else var rotatesPerRound = 100;
if (location.search.indexOf("rounds=") >= 0) rounds = parseInt(location.search.substring(location.search.indexOf("rounds=")+7).split("&")[0])
else var rounds = 5;
var results = [];
var helix_a1 =  new Array(0, 0, 50);
var helix_a2 =  new Array(0, 50, 50);
var helixcolors = new Array(
    "#ff0000","#fd0002","#fb0004","#f90006","#f70008","#f5000a","#f3000c",
    "#f1000e","#ef0010","#ed0012","#eb0014","#e90016","#e70018","#e5001a",
    "#e3001c","#e1001e","#df0020","#dd0022","#db0024","#d90026","#d70028",
    "#d5002a","#d3002c","#d1002e","#cf0030","#cd0032","#cb0034","#c90036",
    "#c70038","#c5003a","#c3003c","#c1003e","#bf0040","#bd0042","#bb0044",
    "#b90046","#b70048","#b5004a","#b3004c","#b1004e","#af0050","#ad0052",
    "#ab0054","#a90056","#a70058","#a5005a","#a3005c","#a1005e","#9f0060",
    "#9d0062","#9b0064","#990066","#970068","#95006a","#93006c","#91006e",
    "#8f0070","#8d0072","#8b0074","#890076","#870078","#85007a","#83007c",
    "#81007e","#7f0080","#7d0082","#7b0084","#790086","#770088","#75008a",
    "#73008c","#71008e","#6f0090","#6d0092","#6b0094","#690096","#670098",
    "#65009a","#63009c","#61009e","#5f00a0","#5d00a2","#5b00a4","#5900a6",
    "#5700a8","#5500aa","#5300ac","#5100ae","#4f00b0","#4d00b2","#4b00b4",
    "#4900b6","#4700b8","#4500ba","#4300bc","#4100be","#3f00c0","#3d00c2",
    "#3b00c4","#3900c6","#3700c8","#3500ca","#3300cc","#3100ce","#2f00d0",
    "#2d00d2","#2b00d4","#2900d6","#2700d8","#2500da","#2300dc","#2100de",
    "#1f00e0","#1d00e2","#1b00e4","#1900e6","#1700e8","#1500ea","#1300ec",
    "#1100ee"
)

var helixcolors2 = new Array(
    "#c3aa72", "#c1a971", "#c0a871", "#bea771", "#bda771", "#bca670", 
    "#baa570", "#b9a570", "#b7a470", "#b6a370", "#b5a36f", "#b3a26f", 
    "#b2a16f", "#b1a16f", "#afa06f", "#ae9f6e", "#ac9f6e", "#ab9e6e", 
    "#aa9d6e", "#a89d6e", "#a79c6d", "#a59b6d", "#a49b6d", "#a39a6d", 
    "#a1996d", "#a0996c", "#9f986c", "#9d976c", "#9c976c", "#9a966b", 
    "#99956b", "#98956b", "#96946b", "#95936b", "#93936a", "#92926a", 
    "#91916a", "#8f916a", "#8e906a", "#8d8f69", "#8b8f69", "#8a8e69", 
    "#888d69", "#878c69", "#868c68", "#848b68", "#838a68", "#818a68", 
    "#808968", "#7f8867", "#7d8867", "#7c8767", "#7b8667", "#798666", 
    "#788566", "#768466", "#758466", "#748366", "#728265", "#718265", 
    "#708165", "#6e8065", "#6d8065", "#6b7f64", "#6a7e64", "#697e64", 
    "#677d64", "#667c64", "#647c63", "#637b63", "#627a63", "#607a63", 
    "#5f7963", "#5e7862", "#5c7862", "#5b7762", "#597662", "#587661", 
    "#577561", "#557461", "#547461", "#527361", "#517260", "#507160", 
    "#4e7160", "#4d7060", "#4c6f60", "#4a6f5f", "#496e5f", "#476d5f", 
    "#466d5f", "#456c5f", "#436b5e", "#426b5e", "#406a5e", "#3f695e", 
    "#3e695e", "#3c685d", "#3b675d", "#3a675d", "#38665d", "#37655c", 
    "#35655c", "#34645c", "#33635c", "#31635c", "#30625b", "#2e615b", 
    "#2d615b", "#2c605b", "#2a5f5b", "#295f5a", "#285e5a", "#265d5a", 
    "#255d5a", "#235c5a", "#225b59", "#215b59", "#1f5a59", "#1e5959");

function helix_loader(element_id) {
	create_helix(120, -325, -225, -50, 50, element_id);
}

var colorchange = false;

function create_helix(lines, x1, x2, z1, z2, element_id, angleDivider) {
    var helix = new Array(lines);

    for (var i=0; i<lines; i++) {
	helix[i] = new Array(2);
	helix[i][0] = new Array(x1, i*helixheight/lines - halfYReso+100, z1);
	helix[i][1] = new Array(x2, i*helixheight/lines - halfYReso+100, z2);
    }
    var rotatepoint1 = new Array((x1+x2)/2, 0, (z1+z2)/2)
    var rotatepoint2 = new Array((x1+x2)/2, 50, (z1+z2)/2)
    for (var i=0; i<helix.length; i++) {
	rotatePathArbit(helix[i], rotatepoint1, 
			rotatepoint2, 2*Math.PI/lines*i);
    }
    createHelixLines(helix, element_id);
    var htCoord = new Array(
	new Array(-50, -50, 0),
	new Array(-50, -30, 0),
	new Array(-50, -10, 0),
	new Array(-50, 10, 0));
    var helixText = new Text(helix[0], 10, 'Courier', 'gray', htCoord[0]);
    helixText.createSVGRef('helixtext');
    helixText.adjustOpacity(1);
    var helixText2 = new Text(helix[1], 10, 'Courier', 'gray', htCoord[1]);
    helixText2.createSVGRef('helixtext');
    helixText2.adjustOpacity(1);
    var helixText3 = new Text(helix[2], 10, 'Courier', 'gray', htCoord[2]);
    helixText3.createSVGRef('helixtext');
    helixText3.adjustOpacity(1);
    var helixText4 = new Text(helix[3], 10, 'Courier', 'gray', htCoord[3]);
    helixText4.createSVGRef('helixtext');
    helixText4.adjustOpacity(1);
    var texts = new Array(helixText, helixText2, helixText3, helixText4);
    setTimeout(changeColors, 2000, helix, element_id);
    rotateHelix(helix, element_id, texts);
}


function changeColor(element_id, i) {
    var container = document.getElementById(element_id);
    var svgRefs = container.getElementsByTagName("path");
    svgRefs[i].setAttributeNS(null, 'stroke', helixcolors2[i]);
}

function changeColors(helix, element_id) {
    colorchange = true;
}

function createHelixLines(helix, element_id, text) {
    for (var i in helix) {
	createNewLine(helix[i], helixcolors[i], element_id);
    }
}
var to_change_next = 0;
function rotateHelix(helix, element, texts) {
    if(!helixcolors2[to_change_next]) to_change_next=0;
    //change the bgcolor
    if(document.getElementById('bg')) document.getElementById('bg').setAttribute("fill", helixcolors2[to_change_next]);	
    if (colorchange) {
	changeColor(element, to_change_next++);
    }
    if (to_change_next >= helixdots) {
	colorchange = false;
    }
    for (var i=0; i<texts.length; i++) {
	texts[i].redraw();
    }
    var temp = helix[0];
    for (var i=1; i<helix.length; i++) {
	helix[i-1][0][0] = helix[i][0][0];
	helix[i-1][1][0] = helix[i][1][0];
	helix[i-1][0][2] = helix[i][0][2];
	helix[i-1][1][2] = helix[i][1][2];
    }
    helix[helix.length-1][0][0] = temp[0][0];
    helix[helix.length-1][0][2] = temp[0][2];
    helix[helix.length-1][1][0] = temp[1][0];
    helix[helix.length-1][1][2] = temp[1][2];
    drawLines(helix, element);
	if(rotateCounter < rotatesPerRound) {
		setTimeout(rotateHelix, 50, helix, element, texts);
		rotateCounter++;
	} else {
		stop = new Date().getTime();
		results[goRound] = stop - start; // Store results
		//alert(results[goRound]);
		goRound++;
		if (goRound < rounds) {
			// Start over
			rotateCounter = 0;
			start = new Date().getTime();
			document.getElementById('status').textContent = 'Round No: ' + (goRound+1);
			rotateHelix(helix, element, texts);
		} else {
			clear();// Clear screen
			// Calculate mean result
			for (var i = 0; i < results.length; i++) {
				sum += results[i];
			}
			var meanResult = Math.round(sum / results.length);
			// Print result
			document.getElementById('status').textContent = 'Average time: ' + meanResult + "ms";
			//send result to Spartan
			try{top.opener.rr(meanResult);}catch(e){}
		}
	}

}

function clear() {
			var helix = document.getElementById('helix');
			var helixtext = document.getElementById('helixtext');
			var canvas = document.getElementsByTagName("svg")[0];
			canvas.removeChild(helix);
			canvas.removeChild(helixtext);
}

function init() {
	document.getElementById('status').textContent = 'Round No: ' + (goRound+1);
	start = new Date().getTime();
	helix_loader('helix');    
}
