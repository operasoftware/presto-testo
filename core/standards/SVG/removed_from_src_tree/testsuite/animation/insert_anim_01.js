
var svgNS = "http://www.w3.org/2000/svg";

function startAnimation(id)
{
	document.getElementById(id).beginElement();
}

function insert_anim(elm)
{
	var animateElement = document.createElementNS(svgNS,"animate");
	animateElement.setAttributeNS(null,"attributeName","stroke-dashoffset");
	animateElement.setAttributeNS(null,"from",100);
	animateElement.setAttributeNS(null,"to",0);
	animateElement.setAttributeNS(null,"dur","10s");
	animateElement.setAttributeNS(null,"fill","freeze");
	animateElement.setAttributeNS(null,"id","anim");
	animateElement.setAttributeNS(null,"begin","indefinite");
	elm.appendChild(animateElement);
	window.setTimeout("startAnimation('anim')",500);
}

function do_test()
{
	insert_anim(document.getElementById('mypath'));
}


