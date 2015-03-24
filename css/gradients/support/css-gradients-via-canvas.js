/* -*- Mode: javaScript; tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2 -*- */
/*
 * CSS Gradients via Canvas (spec syntax) v0.9
 *  Rafal Chlodnicki <rchlodnicki@opera.com>
 *  Magnus Gasslander <mg@opera.com>
 *
 *  This script is heavily modified fork of Weston Ruter's version. Biggest changes
 *  are related to supporting syntax from official spec instead of webkit's.
 *
 * CSS Gradients via Canvas v1.3
 *  by Weston Ruter <http://weston.ruter.net/> @westonruter
 *  Homepage: http://weston.ruter.net/projects/css-gradients-via-canvas/
 *  Latest: http://github.com/westonruter/css-gradients-via-canvas
 *  Copyright (c) 2009: Weston Ruter,
 *                      Shepherd Interactive <http://shepherdinteractive.com/>
 *  License: GPL <http://creativecommons.org/licenses/GPL/2.0/> and
 *           MIT <http://creativecommons.org/licenses/MIT/>
 *
 * Some comments include excerpts from "Introducing CSS Gradients"
 *   <http://webkit.org/blog/175/introducing-css-gradients/>
 */

(function() {
var _debug = false; // set to true to enable debug messages

var config = {
  supportsCanvas   : null,
  enabled          : null,
  createCanvas     : function()
  { //in case a non-native implementation is available, author can override this
    return document.createElement('canvas');
  }
};

// Die for loops, die!
var forEach = Array.forEach || function(object, block, context)
{
  for (var i = 0; i < object.length; i++)
    block.call(context, object[i], i, object);
};

// Remove all comments and whitespace from a string.
function normalizeWhitespace(str)
{
  str = str.replace(/\/\*(.|\s)*?\*\//g, ''); //Remove comments
  str = str.replace(/^\s*\*\//, ''); //Remove trailing comment after closing curly brace
  str = str.replace(/\s+/g, ' ').replace(/^ | $/g, ''); //Trim whitespace
  return str;
}

function dbg(msg)
{
  if (_debug && window.console && console.info)
    console.info(msg);
}

var rad_grad_parser = PEG.buildParser(
'{' +
'  var zero = { "value":0, "unit":"px" };' +
'' +
'  var normalize_pos = function(a1, o1, a2, o2) {' +
'    var tmp;' +
'    if (o1 && !a1 && !a2 &!o2) {' +
'      a1 = "left";' +
'      a2 = "center";' +
'    }' +
'    if (!a1) {' +
'      if (a2 == "left" || a2 == "right")' +
'        a1 = "top";' +
'      else' +
'        a1 = "left";' +
'    }' +
'    if (o1 && !a2 && !o2) {' +
'      o2 = o1;' +
'      o1 = "";' +
'      if (a1 == "top" || a1 == "bottom") {' +
'        a2 = a1;' +
'        a1 = "center";' +
'      }' +
'    }' +
'    if (!a2) {' +
'      if (!o2) {' +
'        a2 = "center";' +
'      } else if (a1 == "top" || a1 == "bottom") {' +
'        a2 = "left";' +
'      } else {' +
'        a2 = "top";' +
'      }' +
'    }' +
'    if (a1 == "top" || a1 == "bottom" || a2 == "left" || a2 == "right") {' +
'      tmp =a1; a1 = a2; a2 = tmp;' +
'      tmp =o1; o1 = o2; o2 = tmp;' +
'    }' +
'    if (a1 == "center") {' +
'      a1 = "left";' +
'      o1 = { "value":50, "unit":"%" };' +
'    }' +
'    if (a2 == "center") {' +
'      a2 = "top";' +
'      o2 = { "value":50, "unit":"%" };' +
'    }' +
'    if (!o1) { o1 = zero; }' +
'    if (!o2) { o2 = zero; }' +
'' +
'    return [{ "anchor":a1, "offset":o1 }, { "anchor":a2, "offset":o2 }];' +
'   };' +
'' +
'  var default_position = normalize_pos("center", "", "", "");' +
'  var default_size = { "implicit" : "farthest-corner" };' +
'  var default_shape_size = { "shape":"ellipse", "size":default_size };' +
'' +
'  var s;' +
'  var p;' +
'}' +
'' +
'start =' +
'g:(s:sizeshape s+ p:position { return [s, p]; } /' +
'   s:sizeshape { return [s]; } /' +
'   p:position { return ["", p]; })' +
'{' +
'  s = g[0]; p = g[1];' +
'  if (!s) { s = default_shape_size; }' +
'  if (!p) { p = default_position; }' +
'  s.position=p;' +
'  return s;' +
'}' +
'' +
'sizeshape =' +
's:(shapethensize / sizethenshape)' +
'!{' +
'  if (s.size.explicit) {' +
'    if (s.size.explicit.length == 1 && s.shape != "circle") {' +
'      return true;' +
'    } else if (s.size.explicit.length == 2 && s.shape != "ellipse") {' +
'      return true;' +
'    }' +
'  }' +
'}' +
'{ return s; }' +
'' +
'' +
'position =' +
'"at" a1:anchor? o1:offset? a2:anchor? o2:offset?' +
'!{ return !a1 && !a2 && !o1 &&!o2; }' +
'!{ return (a1 == "top" || a1 == "bottom") && (a2 == "top" || a2 == "bottom"); }' +
'!{ return (!a1 || a1 == "left" || a1 == "right") && (a2 == "left" || a2 == "right"); }' +
'!{ return a2 == "center" && o2; }' +
'!{ return a1 == "center" && o1 && (a2 || o2); }' +
'{ return normalize_pos(a1, o1, a2, o2); }' +
'' +
'anchor = s+ a:("center" / "left" / "right" / "top" / "bottom") { return a; }' +
'' +
'offset = s+ o:(percentage / length) { return o}' +
'' +
'shapethensize = ' +
'sh:shape si:(s+ s:size { return s; })?' +
'{ return { "shape":sh, "size":si?si:default_size }; }' +
'' +
'sizethenshape =' +
'si:size sh:(s+ s:shape { return s; })?' +
'{' +
'  if (!sh) {' +
'    if (si.explicit && si.explicit.length == 1) {' +
'      sh = "circle";' +
'    } else {' +
'      sh = "ellipse";' +
'    }' +
'  }' +
'  return { "shape":sh,"size":si };' +
'}' +
'' +
'shape = "circle" / "ellipse"' +
'' +
'size =' +
'i:implicit_size { return { "implicit":i }; } /' +
'e:explicit_size { return { "explicit":e }; }' +
'' +
'implicit_size = "closest-side" / "closest-corner" / "farthest-side" / "farthest-corner"' +
'' +
'explicit_size =' +
'(s1:(length / percentage) s+ s2:(length / percentage) { return [s1,s2]; }) /' +
'l:length { return [l]; }' +
'' +
'length =' +
'n:number "px" { return { "value":n, "unit":"px" }; } /' +
'"0" { return zero; }' +
'' +
'percentage =' +
'n:number "%" { return { "value":n, "unit":"%" }; }' +
'' +
'number = a:digit+ "."? b:digit* { return parseFloat(a.join("")+"."+b.join("")); }' +
'' +
'digit = [0-9]' +
'' +
's = " "'
); 

function provideGradientsViaCanvas(evt)
{
  // Detect support for canvas.
  var canvas = config.createCanvas();
  config.supportsCanvas = (canvas.getContext && canvas.toDataURL);
  if (!config.supportsCanvas)
  {
    config.enabled = false;

    console.log('This browser does not support canvas, therefore CSS Gradients via Canvas will not work.');

    return;
  }

  // Parse the stylesheets for CSS Gradients
  var reProperty = /([^}]+){[^}]*?([a-z\-]*(?:background-image|list-style-image|border-image)*)\s*:\s*(((?:repeating-)?(linear|radial))-gradient[^;]+)/g;
  // [1] element selector
  // [2] property
  // [3] value
  var reGradient = /(radial|linear)-gradient\(([^)]*)\)(?=\s*(?:!important\s*)?$|\s*,\s*(?:(-\w+-)?\w+-gradient))/g; // don't look at this regular expression :-)
  // [1] gradient type
  // [2] gradient tokens

  // FIXME: Hmm, this will probably not fail if there is trailing, invalid background.
  forEach(document.styleSheets, function(stylesheet)
  {
    // Only do this for screen media
    var media = stylesheet.media.item ? stylesheet.media.item(0) : stylesheet.media;
    if (media && media != 'screen' && media != 'all')
      return;

    // Ignore stylesheets that have class~=no-css-gradients
    if (stylesheet.ownerNode && stylesheet.ownerNode.className
       && /(^|\s)no-css-gradients(\s|$)/i.test(stylesheet.ownerNode.className))
    {
      return;
    }

    var el = stylesheet[stylesheet.ownerNode ? 'ownerNode' : 'owningElement'];
    var sheetCssText;

    switch(el.nodeName.toLowerCase())
    {
      case 'style':
        sheetCssText = el.innerHTML; //does not work with inline styles because IE doesn't allow you to get the text content of a STYLE element
        break;
    }

    if (!sheetCssText)
      return;

    var ruleMatch, propertyMatch, colorStopMatch;
    while(ruleMatch = reProperty.exec(sheetCssText))
    {
      var selector = normalizeWhitespace(ruleMatch[1]);
      var propertyName = ruleMatch[2];
      var propertyValue = normalizeWhitespace(ruleMatch[3]).toLowerCase().replace(/\s*(,|:|\()\s*/g, '$1');

      // Parse all of the gradients out of the property.
      var gradients = [];
      var properties = [];

      // Split value of property into individual backgrounds.
      var rules = splitCommaOneLevel(propertyValue);

      // Carry onto new array with type of gradient/image and value.
      for (var i = 0; i < rules.length; i++)
      {
        if (rules[i].match(/^((?:repeating-)?(?:linear|radial))-gradient\((.+)\)$/))
        {
          dbg('adding a gradient, type: ' + RegExp.$1 + ' value: ' + RegExp.$2);
          properties.push({type: RegExp.$1, value: RegExp.$2});
        }
        else if (propertyName == 'border-image')
        {
          /* Border-image beast. Extract gradient from rule (will be replaced
             with generated image) and push remainder as an "other" property. */
          if (rules[i].match(/^((?:repeating-)?(?:linear|radial))-gradient\((.+)\)(.+)$/))
            properties.push({type: RegExp.$1, value: RegExp.$2});

          properties.push({type: 'other', value: RegExp.$3});
        }
        else
        {
          dbg('other value: ' + rules[i]);
          properties.push({type: 'other', value: rules[i]});
        }
      }

      // Create gradient object for each property.
      for (var x = 0, property; property = properties[x]; x++)
      {
        // Hack for handling normal images and border-image.
        if (property.type == 'other')
        {
          gradients.push({type: property.type, value: property.value});
          continue;
        }

        /* This is an object holding all kinds of values related to a gradient.
           It holds unparsed strings, parsed values and used values for both
           linear and radial gradients. */

        var gradient = {
          type: property.type
          ,property: propertyName
          ,isBorderImage: propertyName == 'border-image'
/* linear gradient properties */
          ,bgPosition: 'top'
          ,magicCorners: false // enable new behavior of drawing corner to corner gradients per updated spec
          ,angle: undefined
/* radial gradient properties. */
          ,shape: 'ellipse'
          ,size: 'farthest-corner'
          ,radialPositionX: 'center' // horizontal position of a radial gradient as a string (e.g. "right 10px")
          ,radialPositionY: 'center' // vertical position of a radial gradient as a string (e.g. "bottom 10%")
          ,explicitRadialWidth: undefined // explicitly set width of a radial gradient as a string (e.g. 40px)
          ,explicitRadialHeight: undefined  // explicitly set height of a radial gradient as a string (e.g. 40px)
          ,hasExplicitSize: false // true if the explicit sizes are set
          ,verticalScale: 1 // how much to scale the vertical axis to achieve the expected ellipse.
/* values used in the canvas gradient API */
          ,x0: 'center'
          ,y0: 'top'
          ,x1: 'center'
          ,y1: 'bottom'
          ,radius: '0' // used radius for radial gradients
          ,colorStops: []
          ,tokens: splitCommaOneLevel(property.value)
        }

        try
        {
          if (parseGradientTokens(gradient))
            gradients.push(gradient);
        }
        catch(e)
        {
          console.log('Parsing CSS rule failed with error:\n' + e.toString());

          gradients = [];
          properties = [];
          break;
        }
      }

      /* Hackaround. Replace ".test" with ".ref" in selector.
         We don't want css to match .ref element as that could
         cause false PASSes. So we do string replacement here
         to make original selector match ref element. */
      selector = selector.replace(/\.test\b/g, '.ref');
      applyGradients(selector, gradients);
    } // end while(ruleMatch = reProperty.exec(sheetCssText))
  }); // end forEach(document.styleSheets...

  // Success
  config.enabled = true;
} // end function provideGradientsViaCanvas

/**
 * Parse tokens of gradient function.
 *
 * Sets gradient.bgPosition to position keyword if found.
 * Sets gradient.angle to gradient line angle value if found.
 * Sets gradient.colorStops array with unprocessed color stops.
 *
 * @param gradient [in/out] Gradient object containing tokens and that is filled with parsed values.
 * @return true if the gradient was parsed as valid. False if it was invalid.
 */
function parseGradientTokens(gradient)
{
  var reBgPositionAndAngle = /^(?:(to \s*(?:\b(?:top|left|bottom|right)\s*){1,2})|(-?(?:\d+\.?\d*(?:deg|rad|turn|grad)|0)))$/;
  // [1] bg-position
  // [2] angle
  var reColorStop = /^(\S+)\s*(-?\d*\.?\d*(px|%|em)?)?$/;	// A bit loose but it's guaranteed to run only after processing other rules
  // [1] color
  // [2] percentage/length
  // [3] set if percentage value

  var BEGIN = 0
  var POSANDANGLE_DONE = 1, GRADIENTLINE_DONE = 2;
  var RADIALGRADIENT_DONE = 1;
  var state = BEGIN;
  var tokens = gradient.tokens;
  var unsupported_stop_position = false;

  for (var i = 0; i < tokens.length; i++)
  {
    var token = tokens[i];
    var reMatch;

    dbg('parsing token: ' + token + ' state: ' + state);

    if (/radial/.test(gradient.type))
    {
		if (state < RADIALGRADIENT_DONE)
		{
			state = RADIALGRADIENT_DONE;
			try{
				var parsed_grad = rad_grad_parser.parse(token);
				gradient.shape = parsed_grad.shape;
				if (parsed_grad.size.explicit) {
					gradient.hasExplicitSize = true;
					gradient.explicitRadialWidth = parsed_grad.size.explicit[0].value + parsed_grad.size.explicit[0].unit;
					if (gradient.shape == "circle") {
						gradient.explicitRadialHeight = gradient.explicitRadialWidth;
					} else {
						gradient.explicitRadialHeight =  parsed_grad.size.explicit[1].value + parsed_grad.size.explicit[1].unit;
					}
				}
				else {
					gradient.size = parsed_grad.size.implicit;
				}
				gradient.radialPositionX = parsed_grad.position[0].anchor + " " + parsed_grad.position[0].offset.value + parsed_grad.position[0].offset.unit;
				gradient.radialPositionY = parsed_grad.position[1].anchor + " " + parsed_grad.position[1].offset.value + parsed_grad.position[1].offset.unit;
				continue;
			}
			catch(e) {
			}
		}
    }
    else // linear gradient
    {
      if (state < GRADIENTLINE_DONE)
      {
        // look for optional line or angle
        if (reMatch = reBgPositionAndAngle.exec(token))
        {
          var
            bgPosition = undefined
            ,angle = undefined;

          // If both keyword and angle set, drop it.
          if (reMatch[1] && reMatch[2])
            throw {toString: function(){ return 'Invalid gradient line argument!'; }};

          // Store position specified by keywords.
          if (reMatch[1])
          {
            bgPosition = normalizeWhitespace(reMatch[1]);

            // Invert specified directions if "to" keyword was used.
            if (bgPosition.indexOf('to ') === 0)
            {
              // Mark gradient as one requiring to draw per updated spec.
              gradient.magicCorners = true;

              // Remove "to " part.
              bgPosition = bgPosition.substr(3);
            }
          }
          else if (reMatch[2] != undefined)
            angle = normalizeWhitespace(reMatch[2]);

          if (bgPosition != undefined)
            gradient.bgPosition = bgPosition;
          else if (angle != undefined)
          {
            // Always convert to degrees.
            var unit = angle.match(/([a-z]+)/i);
            unit = unit ? unit[1] : 'deg';
            angle = parseFloat(angle);

            switch (unit)
            {
              case 'grad':
                angle = (angle / 400) * 360;
                break;
              case 'rad':
                angle = (angle / (2*Math.PI)) * 360;
                break;
              case 'turn':
                angle = (angle / 1) * 360;
                break;
              default:
                break;
            }

            gradient.angle = 90 - angle;
          }

          state = POSANDANGLE_DONE;
          continue;
        }
      // Neither bgPositionAndAngle nor reShapeAndSize matched so we will look for colorStops from now on
      state = GRADIENTLINE_DONE;
      }
    }

    // A stop is a rule whose first argument is color and second,
    // optional is either percentage or length.
    if (reMatch = reColorStop.exec(token))
    {
      if (!reMatch[1] && !reMatch[2])
        throw {toString: function(){ return 'Color stop without color and position!.'; }}

      var color = undefined,
        stop = undefined,
        unit = undefined;

      if (reMatch[1])
        color = normalizeWhitespace(reMatch[1]);

      if (reMatch[2])
        stop = parseFloat(normalizeWhitespace(reMatch[2]));

      if (reMatch[3])
        unit = normalizeWhitespace(reMatch[3]);
      else if (stop === 0)
        unit = '%';

      dbg('Adding a color stop color: ' + color + ' stop: ' + stop + ' unit: ' + unit);
      gradient.colorStops.push({color:color, value:stop, unit:unit});
    }
    else
    {
      // Only color stops allowed at this point.
      throw {toString: function(){ return 'Expected color stop but didn\'t get one!.'; }}
    }
  }
  return true;
}

/**
 * Converts rgb and hex coded colors to rgba values.
 *
 * @param color[in] The color to convert in hex or rgb format.
 *
 * @return computed rgba value of original color.
 */
function HexToRGBA(color)
{
  if (color.match(/rgba/))
    return color;

  // Get computed color.
  var el = document.createElement('span');
  document.body.appendChild(el);
  el.style.backgroundColor = color;
  var style = window.getComputedStyle(el, null);
  var comp_val = style.getPropertyValue('background-color');

  el.parentNode.removeChild(el);

  if (comp_val == 'transparent')
    return 'transparent';

  if (/rgba/.test(comp_val))
    return comp_val;
  else if (comp_val.match(/rgb\((\d+), (\d+), (\d+)/))
    return 'rgba(' + RegExp.$1 + ',' + RegExp.$2 + ',' + RegExp.$3 + ',1)';

  var rgb = 'rgba(';
  rgb += parseInt(comp_val.substring(1,3),16);
  rgb += ',' + parseInt(comp_val.substring(3,5),16);
  rgb += ',' + parseInt(comp_val.substring(5,7),16);

  rgb += ',0)';

  return rgb;
}

/**
 * Smarter implementation of String.split that splits
 * on one level deep commas (not the ones that are inside functions
 * like linear-gradient or rgb(a)).
 *
 * @param input[in] The string to split
 *
 * @return Array or strings.
 */
function splitCommaOneLevel(input)
{
  var out = [], len = input.length;
  var OPEN_PAR = 0, c;

  for (var i = 0, lastIndex = 0; i < len; i++)
  {
    c = input[i];

    if (c == '(')
      OPEN_PAR++;
    else if (c == ')')
      OPEN_PAR--;
    else if (c == ',' && OPEN_PAR == 0)
    {
      out.push(input.slice(lastIndex, i));
      lastIndex = i+1;
    }

    if (i == len-1)
      out.push(input.slice(lastIndex));
  }

  return out;
}

/**
 * Calculates width of em unit in context of original element.
 *
 * @param elem[in] The element to calculate the width of an em for.
 *
 * @return width of 1em.
 */
function getEmWidth(elem)
{
  /* In Opera, changing styles of select will permanently make it wider,
     even after styles are removed. */
  var tmp_elem = document.createElement('emwidth');
  tmp_elem.setAttribute('style', 'position:absolute; display: block; width: 1em; border: none; padding: 0; margin: 0;');
  elem.parentNode.appendChild(tmp_elem);
  var width = tmp_elem.getClientRects()[0].width;
  tmp_elem.parentNode.removeChild(tmp_elem);

  return width;
}


/**
 * Apply a set of gradients to a given selector.
 *
 * @param selector
 * @param gradients
 */
function applyGradients(selector, gradients)
{
  var selectedElements = document.querySelectorAll(selector);
  if (!selectedElements.length || !gradients.length)
    return;

  // Iterate over all of the selected elements and apply the gradients to each
  forEach(selectedElements, function(el)
  {
    // Only process elements that have "ref" class.
    if (!el.className.match(/\bref\b/))
      return;

    var g = new Gradient(el, gradients);
    g.init();
  });
}

window.addEventListener('load', provideGradientsViaCanvas, false);
window.addEventListener('resize', provideGradientsViaCanvas, false);

var Gradient = function(el, gradients)
{
  var
    em_width,
    computedStyle;

  this.init = function()
  {
    // Provide a function on the selected element for refreshing
    // the CSS gradient. This is also used for the initial paint.
    el.refreshCSSGradient = function()
    {
      var canvas = config.createCanvas();

      // Apply effects of different background properties.
      applyBackgroundProperties(canvas, el);

      var ctx = canvas.getContext('2d');
      var property_values = [];
      var gradient_count = 0, flushed = false;

      // Iterate over the gradients and build them up
      forEach(gradients, function(gradient)
      {
        ++gradient_count;

        // Save property name.
        if (gradient.property && !el.prop)
          el.prop = gradient.property;

        // It's such a hack. Don't ask.
        if (gradient.type == 'other')
        {
          property_values.push(gradient.value);
          return;
        }

        var
          canvasGradient
          ,width = canvas.width
          ,height = canvas.height
          ,gradientLineExceedsBox = false
          ,curctx = ctx;

        gradient.currentColor = computedStyle.color;

        if (/linear/.test(gradient.type))
          calculateGradientLine(gradient, width, height);
        else
          calculateRadialGradient(gradient, width, height);

        if (/linear/.test(gradient.type))
          gradient.normalized_stops = normalizeAndCopyStops(gradient.line_length, gradient.colorStops);
        else
          gradient.normalized_stops = normalizeAndCopyStops(gradient.radius, gradient.colorStops);

        if (calculateMissingStops(gradient))
          gradientLineExceedsBox = true;

        if (/repeating/.test(gradient.type))
        {
          var max_stop = 1;

          if (/radial/.test(gradient.type))
          {
            // don't stop until we reached the farthest corner.
            var distances = calculateCornerDistances(gradient, width, height);

            max_squared_distance = 0;

            for (i = 0; i < distances.length; i++)
            {
              if (distances[i] > max_squared_distance)
                max_squared_distance = distances[i];
            }

            max_distance = Math.sqrt(max_squared_distance);

            max_stop = max_distance / gradient.radius;
          }

          if (calculateRepeatingStops(gradient.normalized_stops, max_stop))
            gradientLineExceedsBox = true;
        }

        /* We need a hack here. Canvas gradients do not support
         coordinates <0 and >1 contrary to css gradients.
         We will convert these coordinates to 0-1 range, draw
         gradient on new, bigger canvas and then copy
         part of gradient to the original canvas. */

        if (gradientLineExceedsBox)
          extendBoxAndAdjustStops(gradient, width, height);

        // Linear gradient
        if(/linear/.test(gradient.type))
        {
          canvasGradient = curctx.createLinearGradient(
            parseCoordinate(gradient.x0, width),
            parseCoordinate(gradient.y0, height),
            parseCoordinate(gradient.x1, width),
            parseCoordinate(gradient.y1, height)
          );
        }
        // Radial gradient
        else
        {
          canvasGradient = curctx.createRadialGradient(
            parseCoordinate(gradient.x0, width),
            parseCoordinate(gradient.y0, height),
            0,
            parseCoordinate(gradient.x0, width),
            parseCoordinate(gradient.y0, height),
            gradient.radius
          );
        }

        // Debug print stops.
        if (_debug && window.opera)
        {
          var x = 0, cs, sarr = [];
          while(cs = gradient.normalized_stops[x++])
            sarr.push(cs.value + ' ' + cs.color)

          dbg('canvas area: ' + gradient.x0 +','+ gradient.y0 + ','+gradient.x1+','+gradient.y1+' width: ' + canvas.width + ' height: ' + canvas.height);

          dbg('Stops: ' + sarr.join('\n'));
        }

        // One color stop should not produce any visible gradient
        if (gradient.normalized_stops.length > 1)
        {
          // Add each of the color stops to the gradient
          forEach(gradient.normalized_stops, function(cs)
          {
            // Canvas does not support currentColor color.
            if (cs.color.toLowerCase() == 'currentcolor')
              cs.color = gradient.currentColor;

            if (cs.value >= 0 && cs.value <= 1)
              canvasGradient.addColorStop(cs.value, cs.color);
            else
              alert('Not adding color stop because cs.value is out of range: ' + cs.value + '\nThis should not happen');
          });

          /* Special handling for case of radial gradient with 0 radius. Should
             produce solid color using color of last stop. */

          if (gradient.type == 'radial' && gradient.radius == 0)
          {
            var last_cs = gradient.normalized_stops[gradient.normalized_stops.length-1];
            ctx.fillStyle = last_cs.color;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
          }
          else
          {
            ctx.save();
            ctx.scale(1, gradient.verticalScale);
            ctx.fillStyle = canvasGradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height / gradient.verticalScale);
            ctx.restore();
          }

          // Add generated to array to be used as a value on background(-image) property.
          property_values.push("url('" + canvas.toDataURL() + "')");

          // Clear canvas before handling next gradient.
          ctx.clearRect(0, 0, width, height);
        }
      }); //end forEach(gradients

      // Apply the gradient to the element.
      if (gradients.length && gradients[0].isBorderImage)
      {
        var prefix = getSupportedBorderImagePrefix(el);
        this.style.setProperty(prefix + el.prop, property_values.join(' '), '');
        // IE10 needs this.
        this.style[prefix + el.prop] = property_values.join(' ');
      }
      else
      {
        this.style.setProperty(el.prop, property_values.join(', '), '');
        // IE10 needs this.
        this.style[el.prop] = property_values.join(', ');
      }
    }

    try {
      el.refreshCSSGradient();
    } catch(e) {
      console.log('Creating canvas gradient threw exception: ' + e);
      // Remove background if drawing failed
      el.style.backgroundImage = 'none';
    }
  }

  /**
   * Various background-* properties can have effect on size of
   * resulting gradient. Need to take them all into account.
   *
   * @param canvas element whose value width/height will be changed if needed.
   */
  var applyBackgroundProperties = function(canvas)
  {
    computedStyle = window.getComputedStyle(el, null);

    // When background-attachment: fixed, gradient should have size of initial containing block
    if (computedStyle.backgroundAttachment == 'fixed')
    {
      el = document.documentElement;
      computedStyle = window.getComputedStyle(el, null);

      canvas.width  = el.clientWidth;
      canvas.height = el.clientHeight;
    }
    else
    {
      // Computed styles don't work on inlines. Note that this requires different
      // implementation of backgroundOrigin switch from the one that getClientRects
      // method uses.
      canvas.width  = parseInt(computedStyle.width);
      canvas.height = parseInt(computedStyle.height);
    }

    if (gradients.length && gradients[0].property == 'list-style-image')
    {
      em_width = getEmWidth(el);
      canvas.width = canvas.height = em_width;
    }

    var bg_origin = computedStyle.backgroundOrigin;

    if (gradients.length && gradients[0].isBorderImage)
      bg_origin = 'border-box';

    switch (bg_origin)
    {
      case 'border-box':
        canvas.width += parseInt(computedStyle.borderLeftWidth) + parseInt(computedStyle.borderRightWidth);
        canvas.height += parseInt(computedStyle.borderTopWidth) + parseInt(computedStyle.borderBottomWidth);
      // fall-through
      case 'padding-box':
        // If box-sizing is border-box then don't add padding
        if (computedStyle.boxSizing == 'border-box')
          break;

        canvas.width += parseInt(computedStyle.paddingLeft) + parseInt(computedStyle.paddingRight);
        canvas.height += parseInt(computedStyle.paddingTop) + parseInt(computedStyle.paddingBottom);
      // fall-through
      case 'content-box':
    }

    // Table row needs to use offset[Height|Width] due to bug CORE-34793.
    if (computedStyle.display == 'inline' || computedStyle.display == 'inline-block'
        || computedStyle.display == 'table-row')
    {
      if (1)
      {
        if (computedStyle.display == 'inline')
        {
          /* With inlines that have line breaks, we have to create gradient
             that has width of all unbroken lines combined and height of one line.
             Approach used here would not work in real world but it's good enough
             for testcases. */
          var el_copy = el.cloneNode(false);
          el_copy.textContent = el.textContent;
          el_copy.style.whiteSpace = 'nowrap';
          el.parentNode.insertBefore(el_copy, el);

          canvas.width = el_copy.offsetWidth;
          canvas.height = el_copy.offsetHeight;

          el_copy.parentNode.removeChild(el_copy);
        }
        else
        {
          canvas.width  = el.offsetWidth;
          canvas.height = el.offsetHeight;
        }
      }
      else
      {
        // getClientRects does not work as expected on transformed elements :(.
        var rect = el.getClientRects()[0];
        canvas.width  = parseInt(rect.width);
        canvas.height = parseInt(rect.height);
      }

      switch (bg_origin)
      {
        case 'content-box':
          canvas.width -= parseInt(computedStyle.paddingLeft) + parseInt(computedStyle.paddingRight);
          canvas.height -= parseInt(computedStyle.paddingTop) + parseInt(computedStyle.paddingBottom);
        // fall-through
        case 'padding-box':
          canvas.width -= parseInt(computedStyle.borderLeftWidth) + parseInt(computedStyle.borderRightWidth);
          canvas.height -= parseInt(computedStyle.borderTopWidth) + parseInt(computedStyle.borderBottomWidth);
        // fall-through
        case 'border-box':
      }
    }

    var new_width = canvas.width, new_height = canvas.height;
    var bg_size = [null, null];

    // Apply background size to the size of gradient as it can change gradient's angle.
    if (computedStyle.backgroundSize != 'auto' && computedStyle.backgroundSize != 'auto auto')
    {
      bg_size = computedStyle.backgroundSize.split(' ');

      if (bg_size.length == 1) // Only width provided.
      {
        // We want array to have two items, no matter the exact value of second.
        bg_size.push(null);

        // If only one value is specified, the other has to be changed proportionally.
        if (bg_size[0].indexOf('%') != -1)
        {
          bg_size[0] = parseInt(bg_size[0])/100;
          new_width = canvas.width * bg_size[0];
          new_height = canvas.height * bg_size[0];
        }
        else if (bg_size[0].indexOf('px') != -1)
        {
          new_width = parseInt(bg_size[0]);
          new_height = canvas.height * (parseInt(bg_size[0]) / canvas.width);
        }
      }
      else if (bg_size.length == 2) // Both width and height.
      {
        var update_width = false;
        var update_height = false;

        if (bg_size[0] == 'auto')
          update_width = true;
        else if (bg_size[0].indexOf('%') != -1)
          new_width = canvas.width * parseFloat(bg_size[0])/100;
        else if (bg_size[0].indexOf('px') != -1)
          new_width = parseInt(bg_size[0]);

        if (bg_size[1] == 'auto')
          update_height = true;
        else if (bg_size[1].indexOf('%') != -1)
          new_height = canvas.height * parseFloat(bg_size[1])/100;
        else if (bg_size[1].indexOf('px') != -1)
          new_height = parseInt(bg_size[1]);

        if (update_width)
          new_width = canvas.width * (new_height / canvas.height);
        if (update_height)
          new_height = canvas.height * (new_width / canvas.width);
      }

    }

    /* "If X != 0 is the width of the image after step one and
       W is the width of the background positioning area,
       then the rounded width X' = W / round(W / X) where
       round() is a function that returns the nearest natural
       number (integer greater than zero). */
    var repeat_val_arr = computedStyle.backgroundRepeat.split(' ');
    if (repeat_val_arr)
    {
      if (repeat_val_arr.length == 1)
        /* We want two array items, no matter what's in there.
           One round value is equivalent to 'round round'. */
        repeat_val_arr.push(repeat_val_arr[0] == 'round' ? 'round' : null);

      for (var i = 0, repeat_val; repeat_val = repeat_val_arr[i]; i++)
      {
        if (repeat_val == 'round')
          if (i == 0) // width
            new_width = canvas.width / Math.round(canvas.width / new_width);
          else
            new_height = canvas.height / Math.round(canvas.height / new_height);
      }

      /* "If 'background-repeat' is 'round' for one direction only
         and if 'background-size' is 'auto' for the other direction,
         then there is a third step: that other direction is scaled
         so that the original aspect ratio is restored." */
      var img_scale_x = new_width / canvas.width;
      var img_scale_y = new_height / canvas.height;

      if (bg_size[1] == 'auto' && repeat_val_arr[0] == 'round' && repeat_val_arr[1] != 'round')
        new_height = canvas.height * img_scale_x;
      if (bg_size[0] == 'auto' && repeat_val_arr[1] == 'round' && repeat_val_arr[0] != 'round')
        new_width = canvas.width * img_scale_y;
    }

    canvas.width = new_width;
    canvas.height = new_height;
  }

  // "A point is a pair of space-separated values. The syntax supports numbers,
  // percentages or the keywords top, bottom, left and right for point values."
  // This converts keywords and percentages into pixel equivalents.
  var parseCoordinate = function(value, max)
  {
    // Convert keywords
    switch (value)
    {
      case 'top':
      case 'left':
        return 0;
      case 'bottom':
      case 'right':
        return max;
      case 'center':
        return max/2;
    }

    // Convert percentage
    if (typeof(value) == 'string' && value.indexOf('%') != -1)
      value = parseFloat(value.substr(0, value.length-1))/100*max;
    // Convert bare number (a pixel value)
    else
      value = parseFloat(value);

    if (isNaN(value))
      throw Error("Unable to parse coordinate: " + value);
    return value;
  }

  /**
   * given a value of the form "right 10%", resolve this to a pixel
   * offset from left.
   *
   * @param value[in] The coordinate value as a string, for example "right 10%"
   * @param width[in] The width of the box to calculate the coordinate for.
   *
   * @return the resolved pixel offset from the left edge
   *
   */
  var resolveHorizontalBackgroundPosition = function(value, width)
  {
    if (value == 'center')
      return width / 2;

    var reNumber = /\d+/;
    var offset = 0;
    var reMatch;

    if (reMatch = reNumber.exec(value))
    {
      if (typeof(value) == 'string' && value.indexOf('%') != -1)
        offset = parseFloat(reMatch) * width / 100;
      else
        offset = parseFloat(reMatch);
    }

    if (/right/.test(value))
      return width - offset;
    else
      return offset;
  }

  /**
   * given a value of the form "bottom 10%", resolve this to a pixel
   * offset from bottom.
   *
   * @param value[in] The coordinate value as a string, for example "bottom 10px"
   * @param height[in] The height of the box to calculate the coordinate for.
   *
   * @return the resolved pixel offset from the top edge
   *
   */
  var resolveVerticalBackgroundPosition = function (value, height)
  {
    if (value == 'center')
      return height / 2;

    var reNumber = /\d+/;
    var offset = 0;
    var reMatch;

    if (reMatch = reNumber.exec(value))
    {
      if (typeof(value) == 'string' && value.indexOf('%') != -1)
        offset = parseFloat(reMatch) * height / 100;
      else
        offset = parseFloat(reMatch);
    }

    if (/bottom/.test(value))
      return height - offset;
    else
      return offset;
  }

  /**
   * Repeats stops according to rules of repeating gradient.
   *
   * Will set gradient.gradientLineExceedsBox property if stops
   * turn out to be positioned outside of background area.
   *
   * @param stops List of user defined stops
   * @param max_stop How far outside the radius we need to go.
   *
   * @return true if the gradient exceeds the box.
   */
  var calculateRepeatingStops = function(stops, max_stop)
  {
    var stopsCount = stops.length, gradientLineExceedsBox;

    // Get range on which stops are spread.
    var range = stops[stopsCount - 1].value - stops[0].value;

    /* If the distance between the first and last color-stops is non-zero, but
    /* is small enough that the implementation knows that the physical
    /* resolution of the output device is insufficient to faithfully render the
    /* gradient, the implementation must find the average color of the gradient
    /* and render the gradient as a solid-color image equal to the average
    /* color. */
    if (!range)
    {
      stops[stops.length - 1].color = calculateAverageColor(stops);
      stops.splice(0, stops.length - 1);
      // We need two stops at least. Both will be identical.
      stops.push(stops[0]);
      return;
    }

    // Always points at original, first stop
    var firstStopPtr = 0;

    // Add stops before first.
    if (stops[0].value > 0)
    {
      var curPos = stops[0].value;
      var stopPtr = stopsCount - 1;

      while (true)
      {
        var cs = stops[firstStopPtr + stopPtr];
        var stop = {value: curPos, color: cs.color};

        stops.unshift(stop);
        firstStopPtr++;

        if (curPos < 0)
          break;

        if (stopPtr)
          curPos -= (cs.value*10 - stops[firstStopPtr + stopPtr - 1].value*10) / 10;

        stopPtr = (stopPtr + stopsCount - 1) % stopsCount;
      }

      if (curPos < 0)
        gradientLineExceedsBox = true;
    }

    // Add stops after last one.
    if (stops[stops.length-1].value < max_stop)
    {
      var curPos = stops[stops.length-1].value;
      var stopPtr = 0;

      while (true)
      {
        var cs = stops[firstStopPtr + stopPtr];
        var stop = {value: curPos, color: cs.color};

        stops.push(stop);

        if (curPos >= max_stop)
          break;

        if (stopPtr < stopsCount - 1)
          curPos += (stops[firstStopPtr + stopPtr + 1].value*10 - stops[firstStopPtr + stopPtr].value*10) / 10;

        stopPtr = (stopPtr + 1) % stopsCount;
      }

      if (curPos > 1)
        gradientLineExceedsBox = true;
    }

    return gradientLineExceedsBox;
  }

  /**
   * Calculates average color from given stops.
   *
   * Should be provided with at least two stops.
   * Assumes that all stops are spread evenly on 0-1 range. That is incorrect
   * as stops can have explicit positions but for our needs current way is enough.
   * For algorithm @see http://dev.w3.org/csswg/css3-images/#find-the-average-color-of-a-gradient
   *
   * @param stops[in] Array of stops.
   *
   * @return The average color.
   */
  var calculateAverageColor = function(stops)
  {
    var stop_count = stops.length;        ///< the count of all stops
    var increment_val = 1 / (stop_count - 1); ///< the distance between each stop (assumes that they have no explicit position)
    var stop_weight = increment_val / 2;  ///< the "weight" of each stop (identical for all stops given that they have no explicit position)
    var averages = [];                    ///< the array of average RGB values, two per processed stop
    var averages_sum = [0, 0, 0, 0];      ///< the final, calculate average color

    // Calculate weighted color values of current and next stop.
    for (var i = 0, stop; stop = stops[i++]; )
    {
      // No need to calculate color values for the last stop.
      if (i == stops.length)
        break;

      var cur_color = splitRGBA(HexToRGBA(stop.color));
      var next_color = splitRGBA(HexToRGBA(stops[i].color));
      // Convert RGBA components into 0-1 range and calculate average color.
      averages.push([cur_color[0]/255*stop_weight, cur_color[1]/255*stop_weight, cur_color[2]/255*stop_weight, cur_color[3]*stop_weight]);
      averages.push([next_color[0]/255*stop_weight, next_color[1]/255*stop_weight, next_color[2]/255*stop_weight, next_color[3]*stop_weight]);
    }

    // Sum averages.
    for (var i = 0, cur_av; cur_av = averages[i++]; )
    {
      averages_sum[0] += cur_av[0];
      averages_sum[1] += cur_av[1];
      averages_sum[2] += cur_av[2];
      averages_sum[3] += cur_av[3];
    }

    // Convert RGB components to the 0-255 range.
    averages_sum[0] = Math.round(averages_sum[0] * 255);
    averages_sum[1] = Math.round(averages_sum[1] * 255);
    averages_sum[2] = Math.round(averages_sum[2] * 255);

    return 'rgba(' + averages_sum.join(',') + ')';
  }

  /**
   * Goes through all stops and converts all non-percentage
   * values to 0-1 value range.
   *
   * @param line_length[in] Length of gradient line.
   * @param stops[in]   Array of original stops.
   *
   * @return    Returns normalized array of stops.
   */
  var normalizeAndCopyStops = function(line_length, stops)
  {
    var normalized_stops = [];

    for (var i = 0, stop; stop = stops[i++]; )
    {
      var cs = {color: stop.color, value: stop.value};

      if (stop.unit == '%') //percentage
        cs.value /= 100;
      else if (stop.unit == 'px' || stop.unit == 'em')
      {
        if (stop.unit == 'em')
        {
          // Calculate em width if used by one of the stops.
          if (!em_width)
            em_width = getEmWidth(el);
          // Convert to pixels.
          cs.value = parseInt(cs.value) * em_width;
        }

        // convert to percentage
        cs.value = parseInt(cs.value) / line_length;
      }

      normalized_stops.push(cs);
    }

    return normalized_stops;
  }

  /**
   * Goes through all color stops and modifies stop values according to spec.
   * That is, when no value defined, value must be average of preceding and
   * following stops. If value is smaller than preceding stop, it must be be
   * made equal to it.
   *
   * @param gradient[in/out] Gradient whose normalized_stops array is to be modified.
   *
   * @return true if it's necessary to extend gradient line due to stops
   * positioned outside the line and false otherwise.
   */
  var calculateMissingStops = function(gradient)
  {
    var stops = gradient.normalized_stops, gradientLineExceedsBox = false;

    if (!stops.length)
      return false;

    var isOutside = function(v) { return v < 0 || v > 1; }

    var
      stop = stops[0]
      ,last_stop_value;

    // If first stop has no value assign 0
    if (stop.value === undefined)
      stop.value = 0;

    // Store value of first stop
    last_stop_value = stop.value;

    if (isOutside(stop.value))
      gradientLineExceedsBox = true;

    // If last stop has no value assign 1
    var last = stops.length - 1;
    if (stops[last].value === undefined)
      stops[last].value = 1;

    // Start from second stop, no need to do anything more for first one
    for (var i = 1; stop = stops[i]; i++)
    {
      // Adjust stop if smaller than previous value
      if (stop.value !== undefined && stop.value < last_stop_value)
        stop.value = last_stop_value;

      // Calculate average between adjacent stops if not provided
      if (stop.value === undefined)
      {
        //stop.value = last_stop_value;

        // Count number of following stops that have no value (+1)
        var j = i - 1, nr_of_stops_without_value = 1;
        while(stops[++j].value === undefined)
          nr_of_stops_without_value++;

        var prev_val = stops[i-1].value;
        // Next stop with value must be equal or bigger to previously known stop with value
        var next_val = stops[j].value > last_stop_value ? stops[j].value : last_stop_value;
        var step = (next_val - prev_val) / nr_of_stops_without_value;

        // Update values with calculated increment step
        j = i - 1;
        while(nr_of_stops_without_value--)
          stops[++j].value = prev_val = prev_val + step;
      }

      if (isOutside(stop.value))
        gradientLineExceedsBox = true;

      last_stop_value = stop.value;
    }

    var newColorStops = [];

    /* Hack premultiplied gradients. No support for adjacent stops from which
    /* one is opaque and one semi-transparent. These will be painted in non-
    /* premultiplied space. */
    for (var i = 0; stop = stops[i]; i++)
    {
      var next_stop = stops[i+1];

      // We can also use this trick when current color
      // is fully transparent rgba value.
      if (stop.color == 'transparent'
          || /rgba\(\d+,\d+,\d+,(0*\.)?0\)/.test(stop.color))
      {
        // If current is transparent and previous wasn't,
        // duplicate previous in current position.
        if (i != 0 && stops[i-1].color != 'transparent')
        {
          // Change alpha to 0.
          var transp = splitRGBA(HexToRGBA(stops[i-1].color));
          transp[3] = 0;

          newColorStops.push({
            value: stop.value,
            color: 'rgba(' + transp.join(',') + ')'
          });
        }

        // I think this is not needed.
        // newColorStops.push(stop);

        // If current is transparent and next isn't,
        // duplicate next in current position.
        if (next_stop && next_stop.color != 'transparent')
        {
          // Change alpha to 0.
          var transp = splitRGBA(HexToRGBA(next_stop.color));
          transp[3] = 0;

          newColorStops.push({
            value: stop.value,
            color: 'rgba(' + transp.join(',') + ')'
          });
        }
      }
      else
        newColorStops.push(stop);
    }

    gradient.normalized_stops = stops = newColorStops;

    return gradientLineExceedsBox;
  }

  /**
   * Finds starting and ending point and length of the gradient line.
   *
   * Sets gradient.x, y, line_length and normalized_angle properties.
   *
   * @param gradient[in/out] The gradient object.
   * @param width[in] width of the gradient box.
   * @param height[in] height of the gradient box.
   */
  var calculateGradientLine = function(gradient, width, height)
  {
    var
      start = {x: 0, y: 0},
      end = {x: 0, y: 0};

    if (gradient.angle == undefined)
    {
      /* Parse background-line argument. */
      var tokens = gradient.bgPosition.split(' ');

      if (tokens.length > 2)
        alert('assert: bgPosition consists of more than two tokens');

      if (tokens.length == 1)
      {
        /* Invert keywords if specified using the "to" keyword. */
        if (gradient.magicCorners)
        {
          var mapping =
            {
              'bottom': 'top',
              'top': 'bottom',
              'left': 'right',
              'right': 'left'
            }

          tokens[0] = mapping[tokens[0]];
        }

        // For single token, we have to lookup mapping of this value to x, y values.
        switch (tokens[0])
        {
          case 'bottom': start = {x:0, y:height}; end = {x:0, y:0}; break;
          case 'right': start = {x:width, y:0}; end = {x:0, y:0}; break;
          case 'top': start = {x:0, y:0}; end = {x:0, y:height}; break;
          case 'left': start = {x:0, y:0}; end = {x:width, y:0}; break;
        }
      }
      else if (tokens.length == 2)
      {
        // Assume that first keyword is horizontal position...
        var h = tokens[0], v = tokens[1];

        // ...and invert if not.
        if (tokens[0] == 'top' || tokens[0] == 'bottom')
        {
          h = tokens[1];
          v = tokens[0];
        }

        if (gradient.magicCorners)
        {
          var angle;

          if (h == 'right' && v == 'bottom')
            angle = Math.atan2(height, width);
          else if (h == 'left' && v == 'top')
            angle = Math.atan2(-height, -width);
          else if (h == 'left' && v == 'bottom')
            angle = Math.atan2(-height, width);
          else if (h == 'right' && v == 'top')
            angle = Math.atan2(height, -width);

          calculateGradientLineStartAndEnd(angle - Math.PI/2, width, height, start, end);
        }
        else // No magic corners.
        {
          // Mapping of opposite directions.
          var pos_opposite =
          {
            top    : 'bottom',
            bottom : 'top',
            left   : 'right',
            right  : 'left',
            center : 'center'
          }

          start = { x: parseCoordinate(h, width), y: parseCoordinate(v, height) };
          end = { x: parseCoordinate(pos_opposite[h], width), y: parseCoordinate(pos_opposite[v], height) };
        }
      }
    }
    else // Angle specified.
    {
      // Convert degrees to radians and calculate.
      calculateGradientLineStartAndEnd(gradient.angle / (180/Math.PI), width, height, start, end);
    }

    var w = end.x - start.x;
    var h = end.y - start.y;
    gradient.line_length = Math.sqrt(Math.pow(w, 2) + Math.pow(h, 2));
    gradient.normalized_angle = Math.atan2(h, w);

    gradient.x0 = start.x;
    gradient.y0 = start.y;
    gradient.x1 = end.x;
    gradient.y1 = end.y;
  }

  /**
   * Calculate gradient line starting and ending points.
   *
   * @param angle[in] The angle in radians to base calculation on.
   * @param width[in] The width of the gradient box
   * @param height[in] The height of gradient box.
   * @param start[in/out] The object that will be set with starting point of the gradient line.
   * @param end[in/out] The object that will be set with ending point of the gradient line.
   */
  var calculateGradientLineStartAndEnd = function(angle, width, height, start, end)
  {
    var
      a_angle,
      b_angle,
      h_diagonal,
      tan,
      corner;

    // Find the distance from the center of the box to any corner.
    h_diagonal = Math.sqrt(Math.pow(width/2, 2) + Math.pow(height/2, 2));

    // Find tangent of angle between half the width
    // and distance from the center of the box to corner.

    // Find corner closest to the gradient line.
    corner = Math.ceil(angle / (Math.PI/2)) % 4;
    // Normalize (make negative angle positive) for switch below.
    if (corner < 0)
      corner += 4;

    switch (corner)
    {
      case 0: // top-left
        tan = Math.atan2(height, -width); break;
      case 1: // bottom-left
        tan = Math.atan2(-height, -width); break;
      case 2: // bottom-right
        tan = Math.atan2(-height, width); break;
      case 3: // top-right
        tan = Math.atan2(height, width); break;
    }

    // Sharp angle between corner line and gradient line.
    a_angle = Math.abs(tan - angle);
    // Second sharp angle.
    b_angle = Math.abs(a_angle - Math.PI/2);
    // Half the length of gradient line (from sine rule).
    var h_gradient_line = Math.sin(b_angle) * h_diagonal;

    // Find point where gradient line ends.
    var x = h_gradient_line * Math.cos(angle);
    var y = h_gradient_line * Math.sin(angle);

    // Start and end point of gradient line.
    start.x = width/2 - x;
    start.y = height/2 + y;
    end.x = width/2 + x;
    end.y = height/2 - y;
  }

  /**
   * Given a gradient with an explicit width and height, resolve this into
   * a radius, a vertical or horizontal scale and offset the position
   * to match the scaling done.
   *
   * @param gradient[in/out] The gradient object to calculate radius, scale and offset for
   * @param gradientWidth[in] The explicitly specified width of the gradient
   * @param gradientHeight[in] The explicitly specified height of the gradient
   */
  var resolveRadiusTransformAndOffset = function (gradient, gradientWidth, gradientHeight)
  {
    gradient.radius = gradientWidth;

    if (gradientWidth != gradientHeight)
    {
      gradient.verticalScale = gradientHeight / gradientWidth;
      gradient.y0 = gradient.y0 / gradient.verticalScale;
    }
  }

  /**
   * Calculate the squared distances of the gradient position to each corner
   * and returns the results in an array
   *
   * @param gradient[in] The gradient information
   * @param width[in] The width of the element with the gradient
   * @param height[in] The height of the element with the gradient
   *
   * @return An array with distances to each corner as [top-left, top-right, bottom-right, bottom-left]
   *
   */
  var calculateCornerDistances = function(gradient, width, height)
  {
    var tl, tr, br, bl;

    var left = gradient.x0;
    var right = (width - gradient.x0);
    var top = gradient.y0;
    var bottom = (height - gradient.y0);

    tl = left * left + top * top;
    tr = right * right + top * top;
    br = right * right + bottom * bottom;
    bl = left * left  + bottom * bottom;

    return [ tl, tr, br, bl ];
  }

  /**
   * Calculate the position and radius of a radial gradient. For elliptical gradients
   * also calculate vertical or horizontal scale as a value >= 1.
   *
   * @param gradient[in/out] The gradient to calculate. Used both for in values and out values
   * @param width[in] Width of the gradient area.
   * @param height[in] Height of the gradient area.
   */
  var calculateRadialGradient = function(gradient, width, height)
  {
    // Resolve positions
    gradient.x0 = resolveHorizontalBackgroundPosition(gradient.radialPositionX, width);
    gradient.y0 = resolveVerticalBackgroundPosition(gradient.radialPositionY, height);

    if (gradient.hasExplicitSize)
    {
      gradientWidth = parseCoordinate(gradient.explicitRadialWidth, width);
      gradientHeight = parseCoordinate(gradient.explicitRadialHeight, height);

      resolveRadiusTransformAndOffset(gradient, gradientWidth, gradientHeight);
    }
    else
    {
      switch (gradient.size)
      {
      case 'closest-side':
        {
          var closest_horizontal, closest_vertical;

          if (gradient.x0 < width / 2)
            closest_horizontal = gradient.x0;
          else
            closest_horizontal = width - gradient.x0;

          if (gradient.y0 < height / 2)
            closest_vertical = gradient.y0;
          else
            closest_vertical = height - gradient.y0;

          if (gradient.shape == 'ellipse')
          {
            gradient.radius = closest_horizontal;
            if (!isNaN(closest_vertical / closest_horizontal))
            {
              gradient.verticalScale = closest_vertical / closest_horizontal;
              gradient.y0 = gradient.y0 / gradient.verticalScale;
            }
          }
          else if (closest_horizontal < closest_vertical)
            gradient.radius = closest_horizontal;
          else
            gradient.radius = closest_vertical;

        }
        break;

      case 'closest-corner':
        {
          var corner_distances = calculateCornerDistances(gradient, width, height);

          var left = gradient.x0;
          var right = width - gradient.x0
          var top = gradient.y0;
          var bottom = height - gradient.y0;

          var horizontal, vertical;
          var shortest_distance;

          if (corner_distances[0] < corner_distances[1] && corner_distances[0] < corner_distances[2] && corner_distances[0] < corner_distances[3])
          {
            // tl
            horizontal = left;
            vertical = top;
            shortest_distance = Math.sqrt(corner_distances[0]);
          }
          else if (corner_distances[1] < corner_distances[2] && corner_distances[1] < corner_distances[3])
          {
            // tr
            horizontal = right;
            vertical = top;
            shortest_distance = Math.sqrt(corner_distances[1]);
          }
          else if (corner_distances[2] < corner_distances[3])
          {
            // br
            horizontal = right;
            vertical = bottom;
            shortest_distance = Math.sqrt(corner_distances[2]);
          }
          else
          {
            // bl
            horizontal = left;
            vertical = bottom;
            shortest_distance = Math.sqrt(corner_distances[3]);
          }

          if (gradient.shape == 'ellipse')
          {
            gradient.radius = Math.sqrt(horizontal * horizontal + horizontal * horizontal);
            if (!isNaN(vertical / horizontal))
            {
              gradient.verticalScale = vertical / horizontal;
              gradient.y0 = gradient.y0 / gradient.verticalScale;
            }
          }
          else
            gradient.radius = shortest_distance;
        }
        break;
      case 'farthest-side':
        {
          var farthest_horizontal, farthest_vertical;

          if (gradient.x0 < width / 2)
            farthest_horizontal = width - gradient.x0;
          else
            farthest_horizontal = gradient.x0;

          if (gradient.y0 < height / 2)
            farthest_vertical = height - gradient.y0;
          else
            farthest_vertical = gradient.y0;

          if (gradient.shape == 'ellipse')
          {
            gradient.radius = farthest_horizontal;
            if (!isNaN(farthest_vertical / farthest_horizontal))
            {
              gradient.verticalScale = farthest_vertical / farthest_horizontal;
              gradient.y0 = gradient.y0 / gradient.verticalScale;
            }
          }
          else if (farthest_vertical > farthest_horizontal)
            gradient.radius = farthest_vertical;
          else
            gradient.radius = farthest_horizontal;
        }
        break;
      case 'farthest-corner':
        {
          var corner_distances = calculateCornerDistances(gradient, width, height);

          var left = gradient.x0;
          var right = width - gradient.x0
          var top = gradient.y0;
          var bottom = height - gradient.y0;

          var horizontal, vertical;
          var farthest_distance;

          if (corner_distances[0] > corner_distances[1] && corner_distances[0] > corner_distances[2] && corner_distances[0] > corner_distances[3])
          {
            // tl
            horizontal = left;
            vertical = top;
            farthest_distance = Math.sqrt(corner_distances[0]);
          }
          else if (corner_distances[1] > corner_distances[2] && corner_distances[1] > corner_distances[3])
          {
            // tr
            horizontal = right;
            vertical = top;
            farthest_distance = Math.sqrt(corner_distances[1]);
          }
          else if (corner_distances[2] > corner_distances[3])
          {
            // br
            horizontal = right;
            vertical = bottom;
            farthest_distance = Math.sqrt(corner_distances[2]);
          }
          else
          {
            // bl
            horizontal = left;
            vertical = bottom;
            farthest_distance = Math.sqrt(corner_distances[3]);
          }

          if (gradient.shape == 'ellipse')
          {
            gradient.radius = Math.sqrt(horizontal * horizontal + horizontal * horizontal);
            if (!isNaN(vertical / horizontal))
            {
              gradient.verticalScale = vertical / horizontal;
              gradient.y0 = gradient.y0 / gradient.verticalScale;
            }
          }
          else
            gradient.radius = farthest_distance;
        }
        break;
      }
    }
  }

  /**
   * Split an rgba string into four number values in an array
   *
   * @param color The color as an rgba string
   *
   * @return The rgba components in an array.
   */
  var splitRGBA = function(color)
  {
    color = normalizeWhitespace(color);
    var reRGBA = /rgba\((\d+),(\d+),(\d+),([\d\.]+)\)/;
    var reMatch;

    var split = [0,0,0,0];

    if (reMatch = reRGBA.exec(color))
    {
      if (reMatch[1])
        split[0] = parseInt(reMatch[1]);

      if (reMatch[2])
        split[1] = parseInt(reMatch[2]);

      if (reMatch[3])
        split[2] = parseInt(reMatch[3]);

      if (reMatch[4])
        split[3] = parseFloat(reMatch[4]);
    }

    return split;
  }

  /**
   * Convert a single color component of a negative stop to the corresponding
   * value as a color stop at position 0.
   *
   * @param neg_color The color as a rgba component of the negative color stop
   * @param neg_value The value of the negative color stop
   * @param high_color The color as an rgba component of the positive color stop
   * @param high_value The value of the positive adjacent color stop
   *
   * @return The color corresponding to the the value at 0.
   */
  var computeZeroColor = function(neg_color, neg_value, high_color, high_value)
  {
    if (neg_value > 0)
    {
      alert('assert: ComputeZeroColor, neg_value must be negative:' + neg_value);
      return 0;
    }

    if (high_value < 0)
    {
      alert('assert: ComputeZeroColor, high value must be positive: ' + high_value);
      return 0;
    }

    var delta = high_value - neg_value;
    var factor = -neg_value / delta;

    col = parseInt(neg_color + (high_color - neg_color) * factor);

    return col;
  }

  /**
   * Canvas gradients does not support negative color stops, so here we convert
   * a negative stop to a corresponding stop at position 0.
   *
   * @param neg_color The color at a negative color stop
   * @param neg_value The negative value of a color stop
   * @param next_color The color at the adjacent positive color stop
   * @param next_value The value of the adjacent positive color stop
   *
   * @return color as a rgba string
   */
  var convertNegativeStopToZeroStop = function(neg_color, neg_value, next_color, next_value)
  {
    if (neg_value > 0)
    {
      alert('assert: convertNegativeColorStop, negative value must be negative: ' + neg_value);
      return next_color;
    }

    if (next_value < 0)
    {
      alert('assert: convertNegativeColorStop, next value must be positive: ' + next_value);
      return next_color;
    }

    var rgba_neg = splitRGBA(HexToRGBA(neg_color));
    var rgba_next = splitRGBA(HexToRGBA(next_color));

    var color = [
      computeZeroColor(rgba_neg[0], neg_value, rgba_next[0], next_value)
      ,computeZeroColor(rgba_neg[1], neg_value, rgba_next[1], next_value)
      ,computeZeroColor(rgba_neg[2], neg_value, rgba_next[2], next_value)
      ,'1'
    ];

    return 'rgba(' + color.join(',') + ')';
  }

  /**
   * Normalizes stops that are positioned outside of painting
   * area by making painting area bigger to accommodate every stop.
   *
   * Modifies gradient.normalized_stops and gradient.x0, y0, x1, y1.
   *
   * @param gradient object.
   * @param old_width original width of gradient box.
   * @param old_height original height of gradient box.
   */
  var extendBoxAndAdjustStops = function(gradient, old_width, old_height)
  {
    var
      colorStops = gradient.normalized_stops,
      stopsCount = colorStops.length;

    var add_before = 0, add_after = 0;

    if (/linear/.test(gradient.type))
    {
      if (stopsCount)
      {
        // Percentage value that gradient should be extended with.

        if (colorStops[0].value < 0)
        {
          add_before = -colorStops[0].value;
          colorStops[0].value = 0;
        }

        if (colorStops[stopsCount-1].value > 1)
          add_after = colorStops[stopsCount-1].value - 1;

        for (var i = 1, cs; cs = colorStops[i]; i++)
        {
          if (cs.value < 0)
            // diff_to_first
            cs.value = add_before + cs.value;
          else
            cs.value = add_before + cs.value;
        }
      }

      var line_length = gradient.line_length;

      // Convert to pixels.
      add_before *= line_length;
      add_after *= line_length;

      // Get pixel length of new line.
      var new_line_length = add_before + line_length + add_after;
      var new_line_ratio = line_length / new_line_length;

      // Spread stops across new line length.
      for (var i = 0, cs; cs = colorStops[i]; i++)
        cs.value = cs.value * new_line_ratio;

      // We need to extend box dimensions to account for new gradient line length.
      var angle_rad = gradient.normalized_angle;
      var start = {
        x: add_before * Math.cos(angle_rad),
        y: add_before * Math.sin(angle_rad)
      }
      var end = {
        x: add_after * Math.cos(angle_rad),
        y: add_after * Math.sin(angle_rad)
      }

      gradient.x0 -= start.x;
      gradient.y0 -= start.y;
      gradient.x1 += end.x;
      gradient.y1 += end.y;
    }
    else
    {
      var new_radius_ratio = 1;

      if (stopsCount && colorStops[stopsCount-1].value > 1)
        new_radius_ratio = colorStops[stopsCount-1].value;

      gradient.radius *= new_radius_ratio;

      var last_negative_stop_index = -1;

      // Spread stops across new radius.
      for (var i = 0, cs; cs = colorStops[i]; i++)
      {
        cs.value = cs.value / new_radius_ratio;

        if (cs.value < 0)
          last_negative_stop_index = i;
      }

      // Convert negative stops to 0 given that any were found.
      if (last_negative_stop_index != -1)
        for (var i = last_negative_stop_index, cs; cs = colorStops[i]; i--)
        {
          if (colorStops[i+1])
            // There is no next stop to take values from. Gradient will be solid color.
            cs.color = convertNegativeStopToZeroStop(cs.color, cs.value, colorStops[i+1].color, colorStops[i+1].value);

          cs.value = 0;
        }
    }
  }

  function getSupportedBorderImagePrefix(elem)
  {
    var prefixes_camel_case = ['O', 'Webkit', 'Moz', 'Ms'];
    var prefixes_dash = ['-o-', '-webkit-', '-moz-', '-ms-'];

    for (var i = 0, prefix; prefix = prefixes_camel_case[i]; i++)
    {
      // We can't use getPropertyValue method with dash-prefix-dash prefixes
      // directly because this method returns empty string even for non-existing
      // properties.
      if (prefix + 'BorderImage' in elem.style)
        return prefixes_dash[i];
    }

    return '';
  }

}
})();
