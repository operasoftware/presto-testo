function drawClosedPath(svgRef, path){
    var result = "M ";
    for(var i = 0; i < path.length; i++){
        result = result + xPers(path[i]) + " " + yPers(path[i]);
        if(i != path.length -1) {result = result + " L ";}
    }
    result = result + " z";
    svgRef.setAttributeNS(null, "d", result);
}

function drawOpenPath(svgRef, path){
    var result = "M ";
    for(var i = 0; i < path.length; i++){
        result = result + xPers(path[i]) + " " + yPers(path[i]);
        if(i != path.length -1) {result = result + " L ";}
    }
    svgRef.setAttributeNS(null, "d", result);
}

function drawSimpleLine(svgRef, line){
    var result = "M " + xPers(line[0]) + " " + yPers(line[0]) + " L " +
	xPers(line[1]) + " " + yPers(line[1]);
    svgRef.setAttributeNS(null, "d", result);
}

function drawPolys(polys, container_id){
    var container = document.getElementById(container_id);
    var svgRefs = container.getElementsByTagName("path");
    for(var i in polys){
        if(polys[i].visible){
            if(polys[i].changed){
                polys[i].changed = false;
                svgRefs[i].setAttributeNS(null, "fill-opacity", 1);
                svgRefs[i].setAttributeNS(null, "stroke-opacity", 1);
            }
            drawClosedPath(svgRefs[i], polys[i].points);
        }
        else{
            if(polys[i].changed){
                polys[i].changed = false;
                svgRefs[i].setAttributeNS(null, "fill-opacity", 0);
                svgRefs[i].setAttributeNS(null, "stroke-opacity", 0);
            }
        }
    }
}

function drawLines(lines, element) {
    var container = document.getElementById(element);
    var svgRefs = container.getElementsByTagName("path");
    for (var i in lines) {
            drawSimpleLine(svgRefs[i], lines[i]);
    }
}

function drawBoid(svgRef, boid){
    var angle = Math.asin(boid.yDir)*180/Math.PI;
    if(boid.xDir < 0) {
        if(boid.yDir > 0) angle += 90;
        else angle -= 90;
    }
    svgRef.setAttributeNS(null, 
			   "transform", 
               "translate(" + (boid.xPos-15)  + " " + (boid.yPos-15)  + ") " 
                );
}

function cubeNormal(cube) {
    surface = new Array(cube[0], cube[1], cube[2], cube[3]);
    return surfaceNormal(surface);
}
   
function surfaceNormal(surface) {
    var vect1 = createVector(surface[0], surface[1]);
    var vect2 = createVector(surface[0], surface[3]);
    return new Array(
    (vect1[1]*vect2[2] - vect1[2]*vect2[1]),
    (vect1[2]*vect2[0] - vect1[0]*vect2[2]),
    (vect1[0]*vect2[1] - vect1[1]*vect2[0])
    );
}

function createNewPath(path, stroke, fill, container_id) {
    var new_path = document.createElementNS(svgNS, "path");
    new_path.setAttributeNS(null, "stroke", stroke);
    new_path.setAttributeNS(null, "fill", fill);
    new_path.setAttributeNS(null, "stroke-width", "1");
    document.getElementById(container_id).appendChild(new_path);
    return new_path;
}

function createNewLine(line, stroke, element_id) {
    var new_line = document.createElementNS(svgNS, "path");
    if (stroke == null) {
        stroke = "black";
    }
    drawSimpleLine(new_line, line);
    new_line.setAttributeNS(null, "stroke", stroke);
    new_line.setAttributeNS(null, "stroke-width", "1");
    document.getElementById(element_id).appendChild(new_line);
}

function createNewEllipse(cx, cy, rx, ry){
    var svgNS = "http://www.w3.org/2000/svg";
    var new_ellipse = document.createElementNS(svgNS, "ellipse");
    new_ellipse.setAttributeNS(null, "cx", cx);
    new_ellipse.setAttributeNS(null, "cy", cy);
    new_ellipse.setAttributeNS(null, "rx", rx);
    new_ellipse.setAttributeNS(null, "ry", ry);
    document.getElementById("kaikki").appendChild(new_ellipse);
}

