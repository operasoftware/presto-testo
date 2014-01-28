var events = [];
window.opera.addEventListener('AfterEventListener.dragStart',
function (e)
	{interrupt(e);}
,false);
window.opera.addEventListener('AfterEventListener.drag',
function (e)
	{interrupt(e);}
,false);
window.opera.addEventListener('AfterEventListener.dragEnter',
function (e)
	{interrupt(e);}
,false);
window.opera.addEventListener('AfterEventListener.dragLeave',
function (e)
	{interrupt(e);}
,false);
window.opera.addEventListener('AfterEventListener.dragOver',
function (e)
	{interrupt(e);}
,false);
window.opera.addEventListener('AfterEventListener.drop',
function (e)
	{interrupt(e);}
,false);
window.opera.addEventListener('AfterEventListener.dragEnd',
function (e)
	{interrupt(e);}
,false);
function interrupt(e)
	{var t = e.type;
	if(events.indexOf(t) == -1)
		{alert('Dissmiss this alert and continue drag\nCurrent event: ' + t + '\nPrevious events: ' + events.join(', '));
		events.push(t);}
	}