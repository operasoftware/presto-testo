function ShowCPs()
{
    var pathelm = document.getElementById("mypath");
    var markercont = document.getElementById("markers");

    while (markercont.hasChildNodes())
	markercont.removeChild(markercont.firstChild);

    var pathlist = pathelm.animatedNormalizedPathSegList;
    AnnotatePath(markercont, pathlist);
}

var curr_x = 0;
var curr_y = 0;

function AnnotatePath(container, path)
{
    curr_x = 0;
    curr_y = 0;
    var count = path.numberOfItems;
    for (var i = 0; i < count; ++i)
    {
	var pathseg = path.getItem(i);

	DrawAnnotation(container, pathseg);
    }
}

function DrawMarker(container, psx, psy)
{
    var newelm = document.createElement("rect");
    newelm.setAttribute("x", psx - 2);
    newelm.setAttribute("y", psy - 2);
    newelm.setAttribute("width", 5);
    newelm.setAttribute("height", 5);
    newelm.setAttribute("fill", "blue");

    container.appendChild(newelm);
}

function DrawLine(container, p1x, p1y, p2x, p2y)
{
    var newelm = document.createElementNS("http://www.w3.org/2000/svg", "line");
    newelm.setAttribute("x1", p1x);
    newelm.setAttribute("y1", p1y);

    newelm.setAttribute("x2", p2x);
    newelm.setAttribute("y2", p2y);

    newelm.setAttribute("stroke", "lightblue");

    container.appendChild(newelm);
}

function DrawAnnotation(container, pathseg)
{
    switch (pathseg.pathSegType)
    {
    default:
	return;
    case SVGPathSeg.PATHSEG_MOVETO_ABS:
	DrawMarker(container, pathseg.x, pathseg.y);
	curr_x = pathseg.x;
	curr_y = pathseg.y;
	break;
    case SVGPathSeg.PATHSEG_LINETO_ABS:
	DrawLine(container, curr_x, curr_y, pathseg.x, pathseg.y);
	DrawMarker(container, pathseg.x, pathseg.y);
	curr_x = pathseg.x;
	curr_y = pathseg.y;
	break;
    case SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS:
	DrawLine(container, curr_x, curr_y, pathseg.x1, pathseg.y1);
	DrawLine(container, pathseg.x1, pathseg.y1, pathseg.x2, pathseg.y2);
	DrawLine(container, pathseg.x2, pathseg.y2, pathseg.x, pathseg.y);
	DrawMarker(container, pathseg.x1, pathseg.y1);
	DrawMarker(container, pathseg.x2, pathseg.y2);
	DrawMarker(container, pathseg.x, pathseg.y);
	curr_x = pathseg.x;
	curr_y = pathseg.y;
	break;
    }
}

function ShowPath()
{
    var pathelm = document.getElementById("mypath");

    DisplayPath(pathelm.pathSegList);
    DisplayPath(pathelm.animatedPathSegList);
    DisplayPath(pathelm.normalizedPathSegList);
    DisplayPath(pathelm.animatedNormalizedPathSegList);
}

function DisplayPath(pathlist)
{
    var str = "";
    var count = pathlist.numberOfItems;
    for (var i = 0; i < count; ++i)
    {
	var pathseg = pathlist.getItem(i);

	str += GetString(pathseg);
	str += "\n";
    }
    
    alert(str);
}

function GetString(pathseg)
{
    switch (pathseg.pathSegType)
    {
    default:
	return "invalid";
    case SVGPathSeg.PATHSEG_UNKNOWN: // Oops...
	return "unknown";
    case SVGPathSeg.PATHSEG_CLOSEPATH:
	return "z";
    case SVGPathSeg.PATHSEG_MOVETO_ABS:
	return "M"+pathseg.x+","+pathseg.y;
    case SVGPathSeg.PATHSEG_MOVETO_REL:
	return "m"+pathseg.x+","+pathseg.y;
    case SVGPathSeg.PATHSEG_LINETO_ABS:
	return "L"+pathseg.x+","+pathseg.y;
    case SVGPathSeg.PATHSEG_LINETO_REL:
	return "l"+pathseg.x+","+pathseg.y;
    case SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS:
	return "C"+pathseg.x1+","+pathseg.y1+" "+
	    pathseg.x2+","+pathseg.y2+" "+
	    pathseg.x+","+pathseg.y;
    case SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL:
	return "c"+pathseg.x1+","+pathseg.y1+" "+
	    pathseg.x2+","+pathseg.y2+" "+
	    pathseg.x+","+pathseg.y;
    case SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS:
	return "Q"+pathseg.x1+","+pathseg.y1+" "+
	    pathseg.x+","+pathseg.y;
    case SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL:
	return "q"+pathseg.x1+","+pathseg.y1+" "+
	    pathseg.x+","+pathseg.y;
    case SVGPathSeg.PATHSEG_ARC_ABS:
	return "A"+pathseg.r1+","+pathseg.r2+" "+
	    pathseg.angle+" "+
	    (pathseg.largeArcFlag?1:0)+","+
	    (pathseg.sweepFlag?1:0)+" "+
	    pathseg.x+","+pathseg.y;
    case SVGPathSeg.PATHSEG_ARC_REL:
	return "a"+pathseg.r1+","+pathseg.r2+" "+
	    pathseg.angle+" "+
	    (pathseg.largeArcFlag?1:0)+","+
	    (pathseg.sweepFlag?1:0)+" "+
	    pathseg.x+","+pathseg.y;
    case SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS:
	return "H"+pathseg.x;
    case SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL:
	return "h"+pathseg.x;
    case SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS:
	return "V"+pathseg.y;
    case SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL:
	return "v"+pathseg.y;
    case SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS:
	return "S"+pathseg.x2+","+pathseg.y2+" "+
	    pathseg.x+","+pathseg.y;
    case SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL:
	return "s"+pathseg.x2+","+pathseg.y2+" "+
	    pathseg.x+","+pathseg.y;
    case SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS:
	return "T"+pathseg.x+","+pathseg.y;
    case SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL:
	return "t"+pathseg.x+","+pathseg.y;
    }
}
