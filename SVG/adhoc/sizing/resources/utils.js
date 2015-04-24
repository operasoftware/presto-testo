/* -*- Mode: javascript; tab-width: 4; indent-tabs-mode: t; c-basic-offset: 4 -*- */

function TestData(c) {
    for (var p in c)
        this[p] = c[p];

    this.name = dumpObject(c);
    if (!this.name)
        this.name = "(initial values)";
}

TestData.prototype.availableWidth = function() {
	return this.usedContainerWidth() - this.computedMarginLeft() - this.computedMarginRight();
}

TestData.prototype.computedMarginLeft = function() {
	if (this.marginLeftStyle == "auto")
		return 0; // XXX: auto support
	else
		return convertToPx(this.marginLeftStyle); // XXX: percentage values
}

TestData.prototype.computedMarginRight = function() {
	if (this.marginRightStyle == "auto")
		return 0; // XXX: auto support
	else
		return convertToPx(this.marginRightStyle); // XXX: percentage values
}

TestData.prototype.computedWidthIsAuto = function() {
    return (!this.widthAttr &&
            (!this.widthStyle || this.widthStyle == 'auto'));
}

TestData.prototype.computedWidth = function() {
	var widthStyle = this.widthAttr;

	if (this.widthStyle)
		widthStyle = this.widthStyle;

	if (widthStyle)
	{
		// inherit?
		if (widthStyle == 'auto')
			return 'auto';
		else
		{
			if (parseLength(widthStyle).unit != '%' || !this.containerWidthIsSTF())
				return convertToPx(widthStyle, this.usedContainerWidth());
			else
				return 'auto';
		}
	}
	else
		return 'auto';
}

TestData.prototype.computedHeight = function() {
	var heightStyle = this.heightAttr;

	if (this.heightStyle)
		heightStyle = this.heightStyle;

	if (heightStyle)
	{
		// inherit?
		if (heightStyle == 'auto')
			return 'auto';
		else
		{
			if (parseLength(heightStyle).unit != '%' || this.containerHeightIsFixed())
				return convertToPx(heightStyle, this.usedContainerHeight());
			else
				return 'auto';
		}
	}
	else
		return 'auto';
}

TestData.prototype.computedContainerWidthIsAuto = function() {
    return !this.containerWidthStyle || this.containerWidthStyle == "auto";
}

TestData.prototype.containerWidthIsSTF = function() {
    // No shrink-to-fit tests yet
    return false;
}

TestData.prototype.usedContainerWidth = function() {
    if (this.computedContainerWidthIsAuto())
        return OUTER_WIDTH;
    else
        return convertToPx(this.containerWidthStyle, OUTER_WIDTH);
}

TestData.prototype.computedContainerHeightIsAuto = function() {
    return !this.containerHeightStyle || this.containerHeightStyle == "auto";
}

TestData.prototype.containerHeightIsFixed = function() {
    return !this.computedContainerHeightIsAuto();
}

TestData.prototype.usedContainerHeight = function() {
    if (this.computedContainerHeightIsAuto())
        return 0;
    else
        return convertToPx(this.containerHeightStyle, OUTER_HEIGHT);
}

TestData.prototype.intrinsicRatio = function() {
    var w = convertToPx(this.widthAttr);
    var h = convertToPx(this.heightAttr);

    if (w && h)
        return w / h;
    else
    {
        vb = parseViewBox(this.viewBoxAttr);
        if (vb)
            return vb[2] / vb[3];
        else
            return 0;
    }
}

TestData.prototype.intrinsicWidth = function() {
	if (this.widthAttr)
		return convertToPx(this.widthAttr);

    return 0;
}

TestData.prototype.intrinsicHeight = function() {
	if (this.heightAttr)
		return convertToPx(this.heightAttr);

    return 0;
}

TestData.prototype.widthIsPercentage = function() {
    var l = parseLength(this.widthStyle);
    return l && l.unit == '%';
}

TestData.prototype.heightIsPercentage = function() {
    var l = parseLength(this.heightStyle);
    return l && l.unit == '%';
}

TestData.prototype.placeholderDataAttribute = function() {
    if (this.placeholderElement == "object")
        return "data";
    else
        return "src";
}

TestData.prototype.computedPlaceholderWidthIsAuto = function() {
    return (!this.placeholderWidthAttr) &&
		(!this.placeholderWidthStyle || this.placeholderWidthStyle == 'auto');
}

TestData.prototype.usedPlaceholderWidth = function() {
    if (this.computedPlaceholderWidthIsAuto())
        return this.usedContainerWidth();

    else
    {
		var usedWidth;

		if (this.placeholderWidthStyle)
            usedWidth = convertToPx(this.placeholderWidthStyle, this.usedContainerWidth());

		else if (this.placeholderWidthAttr)
            usedWidth = convertToPx(this.placeholderWidthAttr, this.usedContainerWidth());

		return usedWidth;
    }
}

TestData.prototype.usedPlaceholderWidthIsAuto = function() {
    if (this.computedPlaceholderWidthIsAuto())
        return true;

    else if (this.placeholderWidthStyle)
        return parseLength(this.placeholderWidthStyle).unit == '%' && this.containerWidthIsSTF();

    else if (this.placeholderWidthAttr)
        return parseLength(this.placeholderWidthAttr).unit == '%' && this.containerWidthIsSTF();

    else
        /* Shouldn't be reached */

        return undefined;
}

TestData.prototype.computedPlaceholderHeightIsAuto = function() {
    return !this.placeholderHeightAttr &&
		(!this.placeholderHeightStyle || this.placeholderHeightStyle == 'auto');
}

TestData.prototype.usedPlaceholderHeight = function() {
    if (this.computedPlaceholderHeightIsAuto())
        return this.usedContainerHeight();

    else
    {
		var usedHeight;

		if (this.placeholderHeightStyle)
            usedHeight = convertToPx(this.placeholderHeightStyle, this.usedContainerHeight());

		else if (this.placeholderHeightAttr)
            usedHeight = convertToPx(this.placeholderHeightAttr, this.usedContainerHeight());

		return usedHeight;
    }
}

TestData.prototype.usedPlaceholderHeightIsAuto = function() {
    if (this.computedPlaceholderHeightIsAuto())
        return true;

    else if (this.placeholderHeightStyle)
        return parseLength(this.placeholderHeightStyle).unit == '%' && !this.containerHeightIsFixed();

    else if (this.placeholderHeightAttr)
        return parseLength(this.placeholderHeightAttr).unit == '%' && !this.containerHeightIsFixed();

    else
        /* Shouldn't be reached */

        return undefined;
}

var INF = 99999999999;

TestData.prototype.maxWidth = function() {
	if (this.maxWidthStyle)
		return convertToPx(this.maxWidthStyle);
	else
		return INF;
}

TestData.prototype.maxHeight = function() {
	if (this.maxHeightStyle)
		return convertToPx(this.maxHeightStyle);
	else
		return INF;
}

TestData.prototype.minWidth = function() {
	if (this.minWidthStyle)
		return convertToPx(this.minWidthStyle);
	else
		return 0;
}

TestData.prototype.minHeight = function() {
	if (this.minHeightStyle)
		return convertToPx(this.minHeightStyle);
	else
		return 0;
}

function parseViewBox(input) {
    if (!input)
		return null;

    var arr = input.split(' ');
    return arr.map(function(a) { return parseInt(a); });
}

/**
 * Parse a width/height attribute and return a number of pixels (not a
 * string), or null if parsing fails. For percentages to be accepted,
 * percentRef must not be undefined.
 */
function convertToPx(input, percentRef) {

    if (input == null)
		return 0;

    var match = /^([-+]?[0-9]+|[-+]?[0-9]*\.[0-9]+)(em|ex|in|cm|mm|pt|pc|px|%)?$/.exec(input);
    if (!match) {
		return 0;
    }
    var amount = Number(match[1]);
    var unit = match[2];
    if (amount == 0) {
		return 0;
    }
    if (!unit)
		unit = "px";
    if (unit == "%" && percentRef === undefined) {
		return 0;
    }
    return amount * {
		//	em: emPixels,
		//	ex: exPixels,
			in: 72/0.75,
		cm: (1/2.54)*72/0.75,
		mm: (1/25.4)*72/0.75,
		pt: 1/0.75,
		pc: 12/0.75,
		px: 1,
		"%": percentRef/100,
    }[unit];
}

function Length(amount, unit) {
    this.amount = amount;
    this.unit = unit;
}

function parseLength(l) {
    var match = /^([-+]?[0-9]+|[-+]?[0-9]*\.[0-9]+)(em|ex|in|cm|mm|pt|pc|px|%)?$/.exec(l);
    if (!match) {
		return null;
    }
    var amount = Number(match[1]);
    var unit = match[2];
    if (!unit)
		unit = "px";
    return new Length(amount, unit);
}

function dumpObject(obj)
{
    var result = "";

    for (var property in obj)
    {
		var value = obj[property];
		if (typeof value == 'string')
			value = "'" + value + "'";
		else if (value == null)
			value = "null";
		else if (typeof value == 'object')
		{
			if (value instanceof Array)
				value = "[" + value + "]";
			else
				value = "{" + dumpObject(value) + "}";
		}

		if (value != "null")
			result += property + ": " + value + ", ";
    }
    return result;
}

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
            return unescape(pair[1]);
        }
    }

    return undefined;
}


