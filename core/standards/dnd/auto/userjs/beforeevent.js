var events = [];
window.opera.addEventListener('BeforeEvent.dragStart',
function (e)
	{interrupt(e);}
,false);
window.opera.addEventListener('BeforeEvent.drag',
function (e)
	{interrupt(e);}
,false);
window.opera.addEventListener('BeforeEvent.dragEnter',
function (e)
	{interrupt(e);}
,false);
window.opera.addEventListener('BeforeEvent.dragLeave',
function (e)
	{interrupt(e);}
,false);
window.opera.addEventListener('BeforeEvent.dragOver',
function (e)
	{interrupt(e);}
,false);
window.opera.addEventListener('BeforeEvent.drop',
function (e)
	{interrupt(e);}
,false);
window.opera.addEventListener('BeforeEvent.dragEnd',
function (e)
	{interrupt(e);}
,false);
function interrupt(e)
	{var t = e.type;
	if(events.indexOf(t) == -1)
		{alert('Dissmiss this alert and continue drag\nCurrent event: ' + t + '\nPrevious events: ' + events.join(', '));
		events.push(t);}
	}