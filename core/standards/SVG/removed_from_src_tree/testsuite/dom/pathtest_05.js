
NS_XHTML = "http://www.w3.org/1999/xhtml";
NS_SVG = "http://www.w3.org/2000/svg";

function init()
{

}

function path_seg_to_string(path_seg)
{
	var ret = "";

	switch(path_seg.pathSegType)
	{
		case SVGPathSeg.PATHSEG_CLOSEPATH:
			ret += "z";
			break;
		case SVGPathSeg.PATHSEG_MOVETO_ABS:
			ret += "M";
			ret += " " + path_seg.x;
			ret += " " + path_seg.y;
			break;
		case SVGPathSeg.PATHSEG_MOVETO_REL:
			ret += "m";
			ret += " " + path_seg.x;
			ret += " " + path_seg.y;
			break;
		case SVGPathSeg.PATHSEG_LINETO_ABS:
			ret += "L";
			ret += " " + path_seg.x;
			ret += " " + path_seg.y;
			break;
		case SVGPathSeg.PATHSEG_LINETO_REL:
			ret += "l";
			ret += " " + path_seg.x;
			ret += " " + path_seg.y;
			break;
		case SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS:
			ret += "C";
			ret += " " + path_seg.x1;
			ret += " " + path_seg.y1;
			ret += " " + path_seg.x2;
			ret += " " + path_seg.y2;
			ret += " " + path_seg.x;
			ret += " " + path_seg.y;
			break;
		case SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL:
			ret += "c";
			ret += " " + path_seg.x1;
			ret += " " + path_seg.y1;
			ret += " " + path_seg.x2;
			ret += " " + path_seg.y2;
			ret += " " + path_seg.x;
			ret += " " + path_seg.y;
			break;
		case SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS:
			ret += "Q";
			ret += " " + path_seg.x1;
			ret += " " + path_seg.y1;
			ret += " " + path_seg.x;
			ret += " " + path_seg.y;
			break;
		case SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL:
			ret += "q";
			ret += " " + path_seg.x1;
			ret += " " + path_seg.y1;
			ret += " " + path_seg.x;
			ret += " " + path_seg.y;
			break;
		case SVGPathSeg.PATHSEG_ARC_ABS:
			ret += "A";
			ret += " " + path_seg.x;
			ret += " " + path_seg.y;
			ret += " " + path_seg.r1;
			ret += " " + path_seg.r2;
			ret += " " + path_seg.angle;
			ret += " " + path_seg.largeArcFlag;
			ret += " " + path_seg.sweepFlag;
			break;
		case SVGPathSeg.PATHSEG_ARC_REL:
			ret += "a";
			ret += " " + path_seg.x;
			ret += " " + path_seg.y;
			ret += " " + path_seg.r1;
			ret += " " + path_seg.r2;
			ret += " " + path_seg.angle;
			ret += " " + path_seg.largeArcFlag;
			ret += " " + path_seg.sweepFlag;
			break;
		case SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS:
			ret += "H";
			ret += " " + path_seg.x;
			break;
		case SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL:
			ret += "h";
			ret += " " + path_seg.x;
			break;
		case SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS:
			ret += "V";
			ret += " " + path_seg.y;
			break;
		case SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL:
			ret += "V";
			ret += " " + path_seg.y;
			break;
		case SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS:
			ret += "S";
			ret += " " + path_seg.x2;
			ret += " " + path_seg.y2;
			ret += " " + path_seg.x;
			ret += " " + path_seg.y;
			break;
		case SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL:
			ret += "s";
			ret += " " + path_seg.x2;
			ret += " " + path_seg.y2;
			ret += " " + path_seg.x;
			ret += " " + path_seg.y;
			break;
		case SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS:
			ret += "T";
			ret += " " + path_seg.x;
			ret += " " + path_seg.y;
			break;
		case SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL:
			ret += "t";
			ret += " " + path_seg.x;
			ret += " " + path_seg.y;
			break;
	}

	return ret;
}

function RemoveElementListener(i, normalized)
{
	this.i = i;
	this.normalized = normalized;
}

RemoveElementListener.prototype.handleEvent = function(event)
{
	var i = this.i;
	var normalized = this.normalized;

	var pathelm = document.getElementById("workpath");
	var list;
	if (normalized)
		list = pathelm.normalizedPathSegList;
	else
		list = pathelm.pathSegList;
	list.removeItem(i);
	read_lists();
}

function UpdateSegListener(i, normalized, prop)
{
	this.i = i;
	this.normalized = normalized;
	this.prop = prop;
}

UpdateSegListener.prototype.handleEvent = function(event)
{
	var pathelm = document.getElementById("workpath");
	var list = this.normalized ? pathelm.normalizedPathSegList : pathelm.pathSegList ;
	var item = list.getItem(this.i);
	item[this.prop] = event.target.value;
	read_lists();
}

function read_lists()
{
	var form_elm = document.getElementById('norm_path_form');
	while(form_elm.hasChildNodes())
		form_elm.removeChild(form_elm.firstChild);

	var pathelm = document.getElementById("workpath");

	var normalized_list = pathelm.normalizedPathSegList;
	for(var i=0;i<normalized_list.numberOfItems;++i)
	{
		var row_elm = document.createElementNS(NS_XHTML, "tr");
		var data_elm = document.createElementNS(NS_XHTML, "td");
		data_elm.setAttributeNS(null, "colspan", "2");

		var path_seg = normalized_list.getItem(i);

		var path_seg_str = path_seg_to_string(path_seg);

		var x_edit_elm = document.createElementNS(NS_XHTML, "input");
		x_edit_elm.setAttributeNS(null, "size", "8");
		x_edit_elm.value = path_seg.x;
		x_edit_elm.addEventListener("change", new UpdateSegListener(i,true, "x"), false);

		var remove_button_elm = document.createElementNS(NS_XHTML, "input");
		remove_button_elm.setAttributeNS(null, "type", "button");
		remove_button_elm.setAttributeNS(null, "value", "R");
		remove_button_elm.addEventListener("click", new RemoveElementListener(i,true), false);

		data_elm.appendChild(x_edit_elm);
		data_elm.appendChild(remove_button_elm);
		row_elm.appendChild(data_elm);
		form_elm.appendChild(row_elm);
	}

	form_elm = document.getElementById('path_form');
	while(form_elm.hasChildNodes())
		form_elm.removeChild(form_elm.firstChild);

	var list = pathelm.pathSegList;
	for(var i=0;i<list.numberOfItems;++i)
	{
		var row_elm = document.createElementNS(NS_XHTML, "tr");
		var data_elm = document.createElementNS(NS_XHTML, "td");
		data_elm.setAttributeNS(null, "colspan", "2");

		var path_seg = list.getItem(i);

		var path_seg_str = path_seg_to_string(path_seg);

		var x_edit_elm = document.createElementNS(NS_XHTML, "input");
		x_edit_elm.setAttributeNS(null, "size", "8");
		x_edit_elm.value = path_seg.x;
		x_edit_elm.addEventListener("change", new UpdateSegListener(i,true, "x"), false);

		var remove_button_elm = document.createElementNS(NS_XHTML, "input");
		remove_button_elm.setAttributeNS(null, "type", "button");
		remove_button_elm.setAttributeNS(null, "value", "R");
		remove_button_elm.addEventListener("click", new RemoveElementListener(i,false), false);

		data_elm.appendChild(x_edit_elm);
		data_elm.appendChild(remove_button_elm);
		row_elm.appendChild(data_elm);
		form_elm.appendChild(row_elm);
	}

	var string_rep_elm = document.getElementById('string_rep');
	var string_rep = pathelm.getAttributeNS(null, "d");
	string_rep_elm.value= string_rep;
}

function make_flower()
{
	var string_rep = "M 0.908175 0.134131 a 0.1 0.1 1.57075 0 0 0.1 0a 0.1 0.1 1.57075 0 0 -0.1 0a 0.1 0.1 1.57075 0 0 0 -0.1a 0.1 0.1 1.57075 0 0 0 0.1a 0.1 0.1 1.57075 0 0 -0.1 0a 0.1 0.1 1.57075 0 0 0.1 0a 0.1 0.1 1.57075 0 0 0 0.1a 0.1 0.1 1.57075 0 0 0 -0.1";
	
}

function get_selected_list(pathelm)
{
	if (document.getElementById('use_normalized_list_toggle').checked)
		return pathelm.normalizedPathSegList;
	else
		return pathelm.pathSegList;
}

function append_move_to_random()
{
	var pathelm = document.getElementById("workpath");
	var seg = pathelm.createSVGPathSegMovetoAbs(Math.random(1.0), Math.random(1.0));

	var selected_list = get_selected_list(pathelm);
	selected_list.appendItem(seg);
	read_lists();
}

function append_line_to_rel(x, y)
{
	var pathelm = document.getElementById("workpath");
	var seg = pathelm.createSVGPathSegLinetoRel(x*0.1, y*0.1);
	var selected_list = get_selected_list(pathelm);
	selected_list.appendItem(seg);
	read_lists();
}

function append_arc_to_rel(x,y)
{
	var pathelm = document.getElementById("workpath");
	var seg = pathelm.createSVGPathSegArcRel(x*0.1, y*0.1, 0.1, 0.1, 3.1415 / 2.0, 0, 0);
	var selected_list = get_selected_list(pathelm);
	selected_list.appendItem(seg);
	read_lists();
}

function append_seg()
{
	var numunit = document.getElementById('numunit').value;
	var x = document.getElementById('x').value;
	var y = document.getElementById('y').value;
	var x1 = document.getElementById('x1').value;
	var y1 = document.getElementById('y1').value;
	var x2 = document.getElementById('x2').value;
	var y2 = document.getElementById('y2').value;
	var seg;
	var pathelm = document.getElementById("workpath");
	switch(numunit)
	{
		case "PATHSEG_CLOSEPATH":
			seg = pathelm.createSVGPathSegClosePath();
			break;
		case "PATHSEG_MOVETO_ABS":
			seg = pathelm.createSVGPathSegMovetoAbs(x, y);
			break;
		case "PATHSEG_MOVETO_REL":
			seg = pathelm.createSVGPathSegMovetoRel(x, y);
			break;
		case "PATHSEG_LINETO_ABS":
			seg = pathelm.createSVGPathSegLinetoAbs(x, y);
			break;
		case "PATHSEG_LINETO_REL":
			seg = pathelm.createSVGPathSegLinetoRel(x, y);
			break;
		case "PATHSEG_CURVETO_CUBIC_ABS":
			seg = pathelm.createSVGPathSegCurvetoCubicAbs(x, y, x1, y1, x2, y2);
			break;
		case "PATHSEG_CURVETO_CUBIC_REL":
			seg = pathelm.createSVGPathSegCurvetoCubicRel(x, y, x1, y1, x2, y2);
			break;
		case "PATHSEG_CURVETO_QUADRATIC_ABS":
			seg = pathelm.createSVGPathSegCurvetoQuadraticAbs(x, y, x1, y1);
			break;
		case "PATHSEG_CURVETO_QUADRATIC_REL":
			seg = pathelm.createSVGPathSegCurvetoQuadraticRel(x, y, x1, y1);
			break;
/*
		case "PATHSEG_ARC_ABS":
			seg = pathelm.createSVGPathSegArcAbs(x, y);
			break;
		case "PATHSEG_ARC_REL":
			seg = pathelm.createSVGPathSegArcRel(x, y);
			break;
*/
		case "PATHSEG_LINETO_HORIZONTAL_ABS":
			seg = pathelm.createSVGPathSegLinetoHorizontalAbs(x);
			break;
		case "PATHSEG_LINETO_HORIZONTAL_REL":
			seg = pathelm.createSVGPathSegLinetoHorizontalRel(x);
			break;
		case "PATHSEG_LINETO_VERTICAL_ABS":
			seg = pathelm.createSVGPathSegLinetoVerticalAbs(y);
			break;
		case "PATHSEG_LINETO_VERTICAL_REL":
			seg = pathelm.createSVGPathSegLinetoVerticalRel(y);
			break;
		case "PATHSEG_CURVETO_CUBIC_SMOOTH_ABS":
			seg = pathelm.createSVGPathSegCurvetoCubicSmoothAbs(x, y, x2, y2);
			break;
		case "PATHSEG_CURVETO_CUBIC_SMOOTH_REL":
			seg = pathelm.createSVGPathSegCurvetoCubicSmoothRel(x, y, x2, y2);
			break;
		case "PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS":
			seg = pathelm.createSVGPathSegCurvetoQuadraticSmoothAbs(x, y);
			break;
		case "PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL":
			seg = pathelm.createSVGPathSegCurvetoQuadraticSmoothRel(x, y);
			break;
	}

	var selected_list = get_selected_list(pathelm);
	selected_list.appendItem(seg);
	read_lists();
}

function randomize_seg()
{

}

