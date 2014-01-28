/**
 * Change the size of the <textarea> using the resize corner.
 *
 * @param elm The textarea element.
 * @param dx Change in width.
 * @param dy Change in height.
 */
function resize(elm, dx, dy)
{
	var sx = window.screenX;
	var sy = window.screenY;

	var border_left = parseInt(elm.style.borderLeftWidth);
	var border_top = parseInt(elm.style.borderTopWidth);

	if (isNaN(border_left))
		border_left = 0;
	if (isNaN(border_top))
		border_top = 0;

	// The following code calculates a point which is located (-INSET, -INSET)
	// relative to the bottom-right corner of the element. The resize handle
	// should be bound to this corner.

	var INSET = 2;

	var down_x = sx + elm.offsetLeft + elm.clientWidth + border_left - INSET;
	var down_y = sy + elm.offsetTop + elm.clientHeight + border_top - INSET;

	var up_x = down_x + dx;
	var up_y = down_y + dy;

	var BUTTON_LEFT = 1;

	opera.generateMouseDown(down_x, down_y, BUTTON_LEFT);
	opera.generateMouseMove(up_x, up_y);
	opera.generateMouseUp(up_x, up_y, BUTTON_LEFT);
}

function resize_textarea(dx, dy, callback)
{
	if (typeof(callback) == "undefined")
		callback = function(){}

	var STAGE_TIMEOUT = 100; /* ms */
	var textarea = document.querySelector("textarea");

	setTimeout(function(){
		resize(textarea, dx, dy);
		textarea.blur();
		setTimeout(callback, STAGE_TIMEOUT);
	}, STAGE_TIMEOUT);
}
