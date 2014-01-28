function rotatePoint(p, a1, a2, angle){
	xOld = p[0];
	yOld = p[1];
	zOld = p[2];
	dx = a2[0] - a1[0];
	dy = a2[1] - a1[1];
	dz = a2[2] - a1[2];
	dv = Math.sqrt(dx*dx + dy*dy + dz*dz);
	a = dx/dv;
	b = dy/dv;
	c = dz/dv;
	
	p[0] = ((a*a + (1 - a*a) * Math.cos(angle)) * xOld + 
	(a*b*(1 - Math.cos(angle)) + c * Math.sin(angle)) * yOld + 
	(a*c*(1 - Math.cos(angle)) - b * Math.sin(angle)) * zOld);
	
	p[1] = ((a*b*(1 - Math.cos(angle)) - c * Math.sin(angle)) * xOld + 
	(b*b + (1 - b*b) * Math.cos(angle)) * yOld + 
	(b*c*(1 - Math.cos(angle)) + a * Math.sin(angle)) * zOld);
	
	p[2] = ((a*c*(1 - Math.cos(angle)) + b * Math.sin(angle)) * xOld + 
	(b*c*(1 - Math.cos(angle)) - a * Math.sin(angle)) * yOld + 
	(c*c + (1 - c*c) * Math.cos(angle)) * zOld);
}

function rotatePath(path, a1, a2, angle){
	for(var i = 0; i < path.length; i++){
		rotatePoint(path[i], a1, a2, angle);
	}
}

function rotatePointArbit(p, a1, a2, angle){
        var ax = a1[0];
        var ay = a1[1];
        var az = a1[2];
        //translate so that rotation axis passes through origo
        translate(p, -ax, -ay, -az);
        translate(a1, -ax, -ay, -az);
        translate(a2, -ax, -ay, -az);
        //rotate
        rotatePoint(p, a1, a2, angle);
        //translate back
        translate(p, ax, ay, az);
        translate(a1, ax, ay, az);
        translate(a2, ax, ay, az);
}

function rotatePathArbit(path, a1, a2, angle){
    var ax = a1[0];
    var ay = a1[1];
    var az = a1[2];
    //translate so that rotation axis passes through origo
    translatePath(path, -ax, -ay, -az);
    translate(a1, -ax, -ay, -az);
    translate(a2, -ax, -ay, -az);
    //rotate
    rotatePath(path, a1, a2, angle);
    //translate back
    translatePath(path, ax, ay, az);
    translate(a1, ax, ay, az);
    translate(a2, ax, ay, az);
}

function scale(p, sx, sy, sz){
	p[0] = p[0] * sx;
	p[1] = p[1] * sy;
	p[2] = p[2] * sz;
}

function scalePath(path, sx, sy, sz){
	for(var i = 0; i < path.length; i++){
		scale(path[i], sx, sy, sz);
	}
}

function translate(p, dx, dy, dz){
    p[0] = p[0] + dx;
    p[1] = p[1] + dy;
    p[2] = p[2] + dz;
}

function translatePath(path, dx, dy, dz){
	for(var i = 0; i < path.length; i++){
		translate(path[i], dx, dy, dz);
	}
}

function xPers(p){
	return p[0]*camDist/(camDist + p[2]) + halfXReso;
}

function yPers(p){
	return p[1]*camDist/(camDist + p[2]) + halfYReso;
}

function clonePoint(p){
	return new Array(p[0], p[1], p[2]);
}

function clonePath(path){
    var newPath = new Array();
    for(var i in path){
	newPath.push(clonePoint(path[i]));
    }
    return newPath;
}
