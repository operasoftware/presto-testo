// Utility js methods

/**
* Creates clickable svg buttons.
* The array should look something like this: 
*    ("name-of-button", "action-of-button", "name-of-button#2"...).
*
* @param The buttons will be inserted as children of this node
* @param An array of strings describing the buttons
* @param The x coordinate to start at
* @param The y coordinate to start at
*/
function createSVGButtons(buttonroot, buttons, x, y)
{	
	for(var i = 0; i < buttons.length; i+=2)
	{
		var elm = document.createElementNS("http://www.w3.org/2000/svg", "rect");
		var text = document.createElementNS("http://www.w3.org/2000/svg", "text");
		var textnode = document.createTextNode(buttons[i]);
		
		text.setAttribute("x", x + 4);
		text.setAttribute("y", y + 14);
		text.setAttribute("font-size", 9);
		text.setAttribute("pointer-events", "none");
		text.setAttribute("text-rendering", "optimizeLegibility");
		text.appendChild(textnode);
		
		elm.setAttribute("style", "fill:#DDDDDD;stroke:black;");
		elm.setAttribute("fill", "#DDD");
		elm.setAttribute("x", x);
		elm.setAttribute("y", y);
		elm.setAttribute("height", 20);
		elm.setAttribute("onclick", buttons[i+1]);
		
		buttonroot.appendChild(elm);
		buttonroot.appendChild(text);
		
		var len = text.getComputedTextLength();
		if(len > 10)
		{
			elm.setAttribute("width", len + 4);
		}
		else
		{
			elm.setAttribute("width", 120);
		}	
		y += 22;
	}
}
