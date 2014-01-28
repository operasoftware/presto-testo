var events = [];
window.opera.addEventListener('BeforeEventListener.dragStart',
function (e)
	{interrupt(e);}
,false);
window.opera.addEventListener('BeforeEventListener.drag',
function (e)
	{interrupt(e);}
,false);
window.opera.addEventListener('BeforeEventListener.dragEnter',
function (e)
	{interrupt(e);}
,false);
window.opera.addEventListener('BeforeEventListener.dragLeave',
function (e)
	{interrupt(e);}
,false);
window.opera.addEventListener('BeforeEventListener.dragOver',
function (e)
	{interrupt(e);}
,false);
window.opera.addEventListener('BeforeEventListener.drop',
function (e)
	{interrupt(e);}
,false);
window.opera.addEventListener('BeforeEventListener.dragEnd',
function (e)
	{interrupt(e);}
,false);
function interrupt(e)
	{var t = e.type;
	if(events.indexOf(t) == -1)
		{alert('Dissmiss this alert and continue drag\nCurrent event: ' + t + '\nPrevious events: ' + events.join(', '));
		events.push(t);}
	}