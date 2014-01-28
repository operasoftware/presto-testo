var events = [];
window.opera.addEventListener('AfterEvent.dragStart',
function (e)
	{interrupt(e);}
,false);
window.opera.addEventListener('AfterEvent.drag',
function (e)
	{interrupt(e);}
,false);
window.opera.addEventListener('AfterEvent.dragEnter',
function (e)
	{interrupt(e);}
,false);
window.opera.addEventListener('AfterEvent.dragLeave',
function (e)
	{interrupt(e);}
,false);
window.opera.addEventListener('AfterEvent.dragOver',
function (e)
	{interrupt(e);}
,false);
window.opera.addEventListener('AfterEvent.drop',
function (e)
	{interrupt(e);}
,false);
window.opera.addEventListener('AfterEvent.dragEnd',
function (e)
	{interrupt(e);}
,false);
function interrupt(e)
	{var t = e.type;
	if(events.indexOf(t) == -1)
		{alert('Dissmiss this alert and continue drag\nCurrent event: ' + t + '\nPrevious events: ' + events.join(', '));
		events.push(t);}
	}