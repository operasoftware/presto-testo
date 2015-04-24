window.addEventListener('load', beginTest, false); 


var total_loops;
var results = [];
var drawing = false;

/*PRESETS FORMAT: [
  opacity(0..1)      -> [1.0, 0.75],
  gradients(0..2)    -> [0/"fill", 1/"share", 2/"unique"],
  clip(0..1)         -> [true, false],
  translate(0..1)    -> [true, false],
  nodeType(1..10)    -> ["path", "text", "rect", "circle", "ellipse", "line", "image", "use", "polygon", "polyline"],
  filter(1..7)       -> ["feGaussianBlur", "feColorMatrix", "feGaussianBlur", "feTurbulance", "feDisplacementMap", "feImage", "none"],
  objects (0..20)    -> [1, 2, 3, 4, 5, 10, 20, 25, 40, 50, 75, 100, 110, 200, 210, 310, 410, 500, 510, 1000, 10000],
  iterations (0..20) -> [1, 2, 3, 4, 5, 10, 20, 25, 40, 50, 75, 100, 110, 200, 210, 310, 410, 500, 510, 1000, 10000]
]*/
var presets = [/*basic shapes*/
	       [0, 0, 1, 1, 1, 7, 5, 5], [0, 0, 1, 1, 2, 7, 9, 5], [0, 0, 1, 1, 3, 7, 9, 5], [0, 0, 1, 1, 4, 7, 8, 5], [0, 0, 1, 1, 5, 7, 12, 5], 
	       [0, 0, 1, 1, 6, 7, 16, 5], [0, 0, 1, 1, 7, 7, 4, 5], [0, 0, 1, 1, 8, 7, 5, 5], [0, 0, 1, 1, 9, 7, 6, 5], [0, 0, 1, 1, 10, 7, 6, 5],
	       /*filters*/
	       [0, 0, 1, 1, 3, 1, 4, 5], [0, 0, 1, 1, 3, 2, 4, 5], [0, 0, 1, 1, 3, 3, 4, 5], [0, 0, 1, 1, 3, 4, 4, 5], [0, 0, 1, 1, 3, 5, 4, 5], [0, 0, 1, 1, 3, 6, 4, 5],
	       /*opacity=0.75*/
	       [1, 0, 1, 1, 3, 7, 7, 5], 
	       /*gradient=share*/
	       [0, 1, 1, 1, 3, 7, 10, 5], 
	       /*clip=true*/
	       [0, 0, 0, 1, 3, 7, 10, 5],
	       /*translate=true*/
	       [0, 0, 1, 0, 3, 7, 9, 5],
	       /*opacity=0.75&gradient=unique&clip=true&translate=true&filter=feTurbulance*/
	       [1, 2, 0, 0, 3, 4, 5, 5] 
	      ];
var tests = ["shape:path", "shape:text", "shape:rect", "shape:circle", "shape:ellipse", "shape:line", "shape:image", "shape:use", "shape:polygon", "shape:polyline", 
	     "filter:feGaussianBlur(stdDeviation=40)", "filter:feColorMatrix", "filter:feGaussianBlur(stdDeviation=5)", "filter:feTurbulance", "filter:feDisplacementMap", "filter:feImage",
	     "opacity=0.75", "gradient=share", "clip=true", "translate=true", "opacity=0.75&gradient=unique&clip=true&translate=true&filter=feTurbulance"];

function beginTest() {
    ready();
    test(0);
}
function test(round) {
    if (drawing) {
	setTimeout("test("+round+")", 10);
	return;
    }
    else {
	erase();
	drawing = true;
	document.f.r[presets[round][0]].checked = true;
	opa = presets[round][0] ? 0.75 : 1;
	document.f.gr[presets[round][1]].checked = true;
	gra = presets[round][1];
	document.f.clp[presets[round][2]].checked = true;
	clip = presets[round][2] ? false : true;
	document.f.trn[presets[round][3]].checked = true;
	tran = presets[round][3] ? false : true;
	document.f.G.selectedIndex = presets[round][4];
	document.f.FR.selectedIndex = presets[round][5];
	document.f.s.selectedIndex = presets[round][6];
	document.f.iters.selectedIndex = presets[round][7];
	build(document.f.G.value, document.f.s.value);
	if (round < presets.length-1) test(++round);
    }

}

function printResults() {
    var avgTime;
    erase();
    var html = "The results of "+results.length+" timings:<br />";
    var scr = "try{top.opener.rr(";
    for(i = 0; i < results.length; i++){
	// avgTime = Math.round(results[i]/(document.f.s.options[presets[0][6]].value * document.f.iters.options[presets[0][7]].value));
        totTime = results[i]
	scr += totTime;
	if (i+1 < results.length) scr += ",";
	html += (i+1) + ". " + tests[i] + ": Total: " + results[i] + "<br>";// "", Average: " + avgTime + "<br />";
    }
    scr += ");}catch(e){}";
    eval(scr);

    var myDiv = document.createElement('div');
    myDiv.style.position = "absolute";
    myDiv.style.left = 100;
    myDiv.style.top = 100;
    myDiv.style.backgroundColor = "#ffffff";
    myDiv.style.position = "absolute";
    myDiv.innerHTML = html;
    document.body.appendChild(myDiv);
}
