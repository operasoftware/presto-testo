function onKeyPressEvent()
{
	var specialKey = "";
	if(window.event.ctrlKey)
	{
		specialKey = "ctrl";
	}
	else if(window.event.altKey)
	{
		specialKey = "alt";
	}
	else if(window.event.shiftKey)
	{
		specialKey = "shift";
	}
	if(specialKey.length > 0)
	{
		document.all.SpecialKey.value = (specialKey + " key pressed!");
	}
	document.all.KeyCode.value = window.event.keyCode;
	window.event.returnValue = true;
}

function onKeyUpEvent()
{
	document.all.SpecialKey.value = "";
	document.all.KeyCode.value = "";
}

function onImgMouseDownEvent()
{
	var x = window.event.clientX;
	var y = window.event.clientY;
	document.all.Position.value = x.toString(10) + ", " + y.toString(10);
	
	var offsetX = window.event.offsetX;
	var offsetY = window.event.offsetY;
	document.all.Offset.value = offsetX.toString(10) + ", " + offsetY.toString(10);
	
	var srcElement = window.event.srcElement;
	document.all.SrcElement.value = srcElement.tagName;
	
	var buttonValue = window.event.button;
	document.all.Button.value = buttonValue;
	
}

function onImgMouseOverEvent()
{
	document.all.FromElement.value = window.event.fromElement.tagName;
}

function onImgMouseOutEvent()
{
	document.all.Offset.value = "";
	document.all.Position.value = "";
	document.all.SrcElement.value = "";
	document.all.Button.value = "";
	document.all.KeyCode.value = "";
	document.all.FromElement.value = "";
}