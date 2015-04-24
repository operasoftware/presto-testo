var offset_angle = 90;
var current_shift = 0;
var shift_inc = 1;
var THRESHOLD = 60;
var segments_added = 0;
var seg_diff = 1;

function DegToRad(degs)
{
    return (degs * Math.PI) / 180;
}

function CreatePath()
{
    var pathelm = document.getElementById("mypath");
    var pathlist = pathelm.pathSegList;

    var move = pathelm.createSVGPathSegMovetoAbs(240 + 30 * Math.cos(DegToRad(offset_angle - 30)),
						 180 + 30 * Math.sin(DegToRad(offset_angle - 30)));
    pathlist.appendItem(move);
    
    var angle = offset_angle;
    for (var i = 0; i < 6; i++)
    {
	var x, y, xcp, ycp;

	x = 240 + 30 * Math.cos(DegToRad(angle + 30));
	y = 180 + 30 * Math.sin(DegToRad(angle + 30));

	xcp = 240 + 120 * Math.cos(DegToRad(angle));
	ycp = 180 + 120 * Math.sin(DegToRad(angle));

	var curve = pathelm.createSVGPathSegCurvetoCubicAbs(x, y,
							    xcp, ycp,
							    xcp, ycp);

	pathlist.appendItem(curve);

	angle += 60;
    }
    
    pathlist.appendItem(pathelm.createSVGPathSegClosePath());
    setTimeout('AdjustPath()', 5000);
}

function AddSegment()
{
    var pathelm = document.getElementById("mypath");
    var pathlist = pathelm.pathSegList;

    var segments = pathlist.numberOfItems - 2; // Not MoveTo and Close
    var angle = offset_angle;
    var inc_angle = 360/(segments+1);
    var shift_v_x, shift_v_y, xcp, ycp;

    var move = pathlist.getItem(0);
    move.x = 240 + 30 * Math.cos(DegToRad(offset_angle - inc_angle/2));
    move.y = 180 + 30 * Math.sin(DegToRad(offset_angle - inc_angle/2));

    for (var i = 0; i < segments; i++)
    {
	var curve = pathlist.getItem(1+i);

	shift_v_x = current_shift * Math.cos(DegToRad(angle + 90));
	shift_v_y = current_shift * Math.sin(DegToRad(angle + 90));

	xcp = 240 + 120 * Math.cos(DegToRad(angle));
	ycp = 180 + 120 * Math.sin(DegToRad(angle));

	curve.x = 240 + 30 * Math.cos(DegToRad(angle + inc_angle/2));
	curve.y = 180 + 30 * Math.sin(DegToRad(angle + inc_angle/2));

	curve.x1 = xcp - shift_v_x;
	curve.y1 = ycp - shift_v_y;

	curve.x2 = xcp + shift_v_x;
	curve.y2 = ycp + shift_v_y;

	angle += inc_angle;
    }

    shift_v_x = current_shift * Math.cos(DegToRad(angle + 90));
    shift_v_y = current_shift * Math.sin(DegToRad(angle + 90));

    xcp = 240 + 120 * Math.cos(DegToRad(angle));
    ycp = 180 + 120 * Math.sin(DegToRad(angle));

    var x = 240 + 30 * Math.cos(DegToRad(angle + inc_angle/2));
    var y = 180 + 30 * Math.sin(DegToRad(angle + inc_angle/2));

    var curve = pathelm.createSVGPathSegCurvetoCubicAbs(x, y,
							xcp - shift_v_x, 
							ycp - shift_v_y,
							xcp + shift_v_x, 
							ycp + shift_v_y);

    pathlist.insertItemBefore(curve, pathlist.numberOfItems-1);
}

function RemoveSegment()
{
    var pathelm = document.getElementById("mypath");
    var pathlist = pathelm.pathSegList;

    var segments = pathlist.numberOfItems - 2; // Not MoveTo and Close
    var angle = offset_angle;
    var inc_angle = 360/(segments-1);
    var shift_v_x, shift_v_y, xcp, ycp;

    var move = pathlist.getItem(0);
    move.x = 240 + 30 * Math.cos(DegToRad(offset_angle - inc_angle/2));
    move.y = 180 + 30 * Math.sin(DegToRad(offset_angle - inc_angle/2));

    for (var i = 0; i < segments-1; i++)
    {
	var curve = pathlist.getItem(1+i);

	shift_v_x = current_shift * Math.cos(DegToRad(angle + 90));
	shift_v_y = current_shift * Math.sin(DegToRad(angle + 90));

	xcp = 240 + 120 * Math.cos(DegToRad(angle));
	ycp = 180 + 120 * Math.sin(DegToRad(angle));

	curve.x = 240 + 30 * Math.cos(DegToRad(angle + inc_angle/2));
	curve.y = 180 + 30 * Math.sin(DegToRad(angle + inc_angle/2));

	curve.x1 = xcp - shift_v_x;
	curve.y1 = ycp - shift_v_y;

	curve.x2 = xcp + shift_v_x;
	curve.y2 = ycp + shift_v_y;

	angle += inc_angle;
    }

    pathlist.removeItem(pathlist.numberOfItems-2);
}

function AdjustPath()
{
    if (seg_diff > 0)
    {
	AddSegment();
    }
    else
    {
	RemoveSegment();
    }

    segments_added += seg_diff;

    if (segments_added > 5)
	seg_diff = -1;
    else if (segments_added <= 0)
	seg_diff = 1;

    setTimeout('AdjustPath()', 5000);
}

function AnimatePath()
{
    var pathelm = document.getElementById("mypath");
    var pathlist = pathelm.pathSegList;

    var segments = pathlist.numberOfItems - 2; // Not MoveTo and Close
    var angle = offset_angle;
    var inc_angle = 360/segments;
    for (var i = 0; i < segments; i++)
    {
	var curve = pathlist.getItem(1+i);

	var shift_v_x, shift_v_y, xcp, ycp;

	shift_v_x = current_shift * Math.cos(DegToRad(angle + 90));
	shift_v_y = current_shift * Math.sin(DegToRad(angle + 90));

	xcp = 240 + 120 * Math.cos(DegToRad(angle));
	ycp = 180 + 120 * Math.sin(DegToRad(angle));

	curve.x1 = xcp - shift_v_x;
	curve.y1 = ycp - shift_v_y;

	curve.x2 = xcp + shift_v_x;
	curve.y2 = ycp + shift_v_y;

	angle += inc_angle;
    }

    current_shift += shift_inc;
    if (current_shift >= THRESHOLD || current_shift < 0)
	shift_inc = -shift_inc;

    setTimeout('AnimatePath();', 50);
}
