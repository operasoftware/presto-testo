
function init()
{
	sync();
	setInterval(sync_auto, 100);
}

function restart_animation()
{
	document.getElementById('svgElement').setCurrentTime(0);
}

function sync()
{
	var anim_elm = document.getElementById('motion');
	document.getElementById('anim_dur').value = anim_elm.getAttribute('dur');
	document.getElementById('anim_begin').value = anim_elm.getAttribute('begin');
	document.getElementById('anim_fill').value = anim_elm.getAttribute('fill');
	document.getElementById('anim_path').value = anim_elm.getAttribute('path');
}

function sync_auto()
{
	var anim_elm = document.getElementById('motion');
	document.getElementById('anim_current_time').value = anim_elm.getCurrentTime();

	var root = document.getElementById('svgElement');
	document.getElementById('glob_current_time').value = root.getCurrentTime();
}

function set_anim_values()
{
	var anim_elm = document.getElementById('motion');
	anim_elm.setAttribute('dur', document.getElementById('anim_dur').value);
	anim_elm.setAttribute('begin', document.getElementById('anim_begin').value);
	anim_elm.setAttribute('fill', document.getElementById('anim_fill').value);
	anim_elm.setAttribute('path', document.getElementById('anim_path').value);
}

function set_global_anim_values()
{
	var root = document.getElementById('svgElement');
	root.setCurrentTime(document.getElementById('glob_set_current_time').value);
}
