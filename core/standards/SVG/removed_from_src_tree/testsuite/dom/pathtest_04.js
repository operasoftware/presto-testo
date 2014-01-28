
var NS_SVG = "http://www.w3.org/2000/svg";

function RandomInt(max)
{
    return Math.floor(max * Math.random());
}

function init()
{

}

function StrWrap()
{
	this.str = "";
}

function State(_a, _x, _y)
{
	this.angle = _a;
	this.x = _x;
	this.y = _y;
};

State.prototype.copy = function()
{
    var s = new State(angle, x, y);
    return s;
}

State.prototype.set = function(s)
{
    angle = s.angle;
    x = s.x;
    y = s.y;
}

function Param(_ax, _l, _i, _an)
{
	this.dlen = _l;
	this.iterations = _i;
	this.dangle = _an;
	this.axiom = _ax;
};

function RuleSystem()
{
	this.name = "Unnamed";
	this.description = "No description";

	/* obligatory members */
	this.state = 0;
	this.param = 0;

	this.rules = [];

	this.setup_draw = function() {};
	this.finalize_draw = function() {};
};

M_PI = 3.1415;

var pathelm;

function rs_koch_snowflake_1()
{
	var rs = new RuleSystem();
	rs.name = "Koch's snowflake (stroked)";
	rs.description = "A classic! This pattern starts with a triangle and ends with a snowflake.";
	rs.state = new State(- M_PI / 3.0, 0.04, 0.73);

	var axiom = document.getElementById('axiom_edit').value;
	var iterations = document.getElementById('iterations_edit').value;
	var step_length = document.getElementById('step_length_edit').value;
	var angle = document.getElementById('angle_edit').value;
	rs.param = new Param(axiom, step_length, iterations, eval(angle));

	var move_forward = function(path, s, p) { s.x += Math.cos(s.angle) * p.dlen;
											  s.y += Math.sin(s.angle) * p.dlen;
											  path.appendItem(pathelm.createSVGPathSegLinetoAbs(s.x,s.y)); };
	var rotate_pos = function(path, s, p) { s.angle += p.dangle; };
	var rotate_neg = function(path, s, p) { s.angle -= p.dangle; };

	var expand_f = document.getElementById('expand_f_edit').value;

	rs.rules = { "F" : { "expand" : expand_f,
						 "closure" : move_forward },
				 '+' : { "closure" : rotate_pos },
				 '-' : { "closure" : rotate_neg } };
	return rs;
}

function rs_koch_snowflake_2()
{
	var rs = new RuleSystem();
	rs.name = "Koch's snowflake (stroked)";
	rs.description = "This one uses DOM Core";
	rs.state = new State(- M_PI / 3.0, 0.04, 0.73);

	var axiom = document.getElementById('axiom_edit').value;
	var iterations = document.getElementById('iterations_edit').value;
	var step_length = document.getElementById('step_length_edit').value;
	var angle = document.getElementById('angle_edit').value;
	rs.param = new Param(axiom, step_length, iterations, eval(angle));

	var move_forward = function(path, s, p) { s.x += Math.cos(s.angle) * p.dlen;
											  s.y += Math.sin(s.angle) * p.dlen;
											  path.str += " L " + s.x + " " + s.y; };
	var rotate_pos = function(path, s, p) { s.angle += p.dangle; };
	var rotate_neg = function(path, s, p) { s.angle -= p.dangle; };

	var expand_f = document.getElementById('expand_f_edit').value;

	rs.rules = { "F" : { "expand" : expand_f,
						 "closure" : move_forward },
				 '+' : { "closure" : rotate_pos },
				 '-' : { "closure" : rotate_neg } };
	return rs;
}

function expand_string(axiom, rs)
{
	var res = "";
	for(var i=0;i<axiom.length;i++)
	{
		var c = axiom[i];
		if (rs.rules[c])
		{
			var rule = rs.rules[c];
			if (rule["expand"])
			{
				res += rule["expand"];
				continue;
			}
		}

		// default action
		res += c;
	}
	return res;
}

function generate_string(rs)
{
    var res = rs.param.axiom;
    for (var i=0;i<rs.param.iterations;++i)
	{
        res = expand_string(res, rs);
	}
    return res;
}

function generate_path(cmd, path, rs, should_use_dom_core)
{
	var x = rs.state.x;
	var y = rs.state.y;

	if (should_use_dom_core)
	{
		path.str += "M " + x + " " + y + " "; 
	}
	else
	{
		var move_to = pathelm.createSVGPathSegMovetoAbs(x, y);
		path.appendItem(move_to);
	}

    for(var i=0;i<cmd.length;++i)
	{
		var c = cmd[i];
        var rule = rs.rules[c];
        if (rule && rule["closure"])
		{
            rule["closure"](path, rs.state, rs.param, rs.stack);
		}
	}
}

function do_turtle(rs, lst, should_use_dom_core)
{
 	var res = generate_string(rs);
	generate_path(res, lst, rs, should_use_dom_core);
}

function do_test(root)
{
	pathelm = document.getElementById('workpath');

	var should_suspend_redraw = document.getElementById('should_suspend_redraw_toggle').checked;
	var should_use_unsuspend_redraw_all = document.getElementById('should_use_unsuspend_redraw_all_toggle').checked;
	var should_use_normalized = document.getElementById('should_use_normalized_toggle').checked;
	var should_use_dom_core = document.getElementById('should_use_dom_core_toggle').checked;

	var path;
	var timeClear = 0;
	if (!should_use_dom_core)
	{
		var pathseglist;
		if (should_use_normalized && pathelm.normalizedPathSegList)
			pathseglist = pathelm.normalizedPathSegList;
		else if (pathelm.pathSegList)
			pathseglist = pathelm.pathSegList;
		else
		{
			alert("No pathSegList found. Aborting test");
			return;
		}
		path = pathseglist;
		var startClear = new Date();
		path.clear();
		timeClear = (new Date()).getTime() - startClear.getTime();
	}
	else
	{
		path = new StrWrap();
	}

	if (root.forceRedraw)
		root.forceRedraw();

	var start1        = new Date();

	var lock_id = -1;
	if (should_suspend_redraw && root.suspendRedraw && root.unsuspendRedraw)
		lock_id = root.suspendRedraw(30000); // 30 seconds is maximum

	var rs;
	if (should_use_dom_core)
		rs = rs_koch_snowflake_2();
	else
		rs = rs_koch_snowflake_1();

	var start2        = new Date();

	do_turtle(rs, path, should_use_dom_core);

	var start3        = new Date();

	if (should_use_dom_core)
	{
		pathelm.setAttribute("d", path.str);
	}

	var time3 = (new Date()).getTime() - start3.getTime();

	var time2 = (new Date()).getTime() - start2.getTime();

	if (should_suspend_redraw)
	{
		if (!should_use_unsuspend_redraw_all && lock_id != -1)
			root.unsuspendRedraw(lock_id);
		else
			root.unsuspendRedrawAll();
	}

	var time1 = (new Date()).getTime() - start2.getTime();

	if (!should_use_dom_core)
		document.getElementById('pathseg_list_length_info').value = ""+path.numberOfItems;
	else
		document.getElementById('pathseg_list_length_info').value = "?";

	document.getElementById('total_generation_time_info').value = ""+time1+"ms";
	document.getElementById('path_generation_time_info').value = ""+time2+"ms";
	document.getElementById('set_attribute_time_info').value = ""+time3+"ms";
	document.getElementById('clear_path_time_info').value = ""+timeClear+"ms";
}

