/*******************************************************************************
* Copyright (c) 2005 by PD'Programming Inc. http://www.pdmagic.com
* Written by Jeff Rafter
*
* Coords.js is free for both commercial and non-commercial use and
* redistribution, provided that PD'Programming's copyright and disclaimer are
* retained intact.  You are free to modify coords.js for your own use and
* to redistribute coords.js with your modifications, provided that the
* modifications are clearly documented.
*
* This program is distributed in the hope that it will be useful, but
* WITHOUT ANY WARRANTY; without even the implied warranty of
* merchantability or fitness for a particular purpose.  Please use it AT
* YOUR OWN RISK.
*
*******************************************************************************/
var svgRoot = null;
var svgDoc = null;
var svgWindow = null;

var parRegExp = /^\s*(?:defer)?\s*(none|xMinYMin|xMidYMin|xMaxYMin|xMinYMid|xMidYMid|xMaxYMid|xMinYMax|xMidYMax|xMaxYMax)\s*(meet|slice)?\s*$/;
var lengthRegExp = /^\s*([\+\-]?[0-9]+\.?[0-9]*(?:[Ee][\+\-]?[0-9]+)?)(in|cm|mm|px|em|ex|pc|pt|%)?\s*$/;
var spaceOrCommaRegExp = /(?:\s+|(?:\s*,\s*))/;

/// <summary>
/// For each given element, the accumulation of all transformations that have been defined
/// on the given element and all of its ancestors up to and including the element that
/// established the current viewport (usually, the 'svg' element which is the most
/// immediate ancestor to the given element) is called the current transformation matrix
/// or CTM.
/// </summary>
/// <param>element, the starting element for the transform matrix calculation</param>
/// <returns>A matrix representing the mapping of current user coordinates to viewport
/// coordinates.</returns>
function getCTM(element)
{
  var matrix = null;
  var vCTM = null;
  var trans = null;
  // TODO: other elements can establish viewports, not just <svg>!
  if (element.nodeName == "svg")
  {
    vCTM = getViewBoxTransform(element);
    matrix = vCTM;
  }
  else
  {
    trans = getConsolidatedTransform(element);
    if (trans != null)
      matrix = trans;
    else
      matrix = svgRoot.createSVGMatrix();
  }

  var nVE = getNearestViewportElement(element);
  if(nVE != null)
  {
    //TODO: this may return a non-transformable element?
    var par = element.parentNode;
    while(par != null && par != nVE)
    {
      trans = getConsolidatedTransform(par);
      matrix = trans.multiply(matrix);
      par = par.parentNode;
    }
    if (par == nVE)
    {
      vCTM = getViewBoxTransform(nVE);
      matrix = vCTM.multiply(matrix);
    }
  }
  return matrix;
}

/// <summary>
/// For each given element, the accumulation of all transformations that have been defined
/// on the given element and all of its ancestors up to and including the root element.
/// </summary>
/// <param>element, the starting element for the transform matrix calculation</param>
/// <returns>A matrix representing the mapping of current user coordinates to
/// screen coordinates.</returns>
function getScreenCTM(element)
{
  var matrix = null;
  var vCTM = null;
  var trans = null;
  // TODO: other elements can establish viewports, not just <svg>!
  if (element.nodeName == "svg")
  {
    vCTM = getViewBoxTransform(element);
    matrix = vCTM;
  }
  else
  {
    trans = getConsolidatedTransform(element);
    if (trans != null)
      matrix = trans;
    else
      matrix = svgRoot.createSVGMatrix();
  }

  var par = element.parentNode;
  while(par != null && par.nodeType == 1)
  {
    // TODO: other elements can establish viewports, not just <svg>!
    if (par.nodeName == "svg")
    {
      vCTM = getViewBoxTransform(par);
      matrix = vCTM.multiply(matrix);
    }
    else
    {
      trans = getConsolidatedTransform(par);
      matrix = trans.multiply(matrix);
    }
    par = par.parentNode;
  }
  return matrix;
}

/// <summary>
/// For the given element, calculates the implicit viewport rectangle
/// </summary>
/// <param>element, the element that establishes the viewport</param>
/// <returns>An object which contains properties: x, y, width, height,
///   attrX, attrY, attrWidth and attrHeight</returns>
function getViewportViewRect(element)
{
  // Get the width and height from the attributes
  var attrWidth = getLengthValue(element, "width", "100%", 1);
  var attrHeight = getLengthValue(element, "height", "100%", 2);
  var attrX = 0;
  var attrY = 0;
  var x = 0;
  var y = 0;
  var w = 0;
  var h = 0;
  // x and y on the root <svg> have no meaning, otherwise they translate
  if (element != svgRoot) {
    //TODO: check if I need to translate here a priori in the vb transform
    attrX = getLengthValue(element, "x", "0", 1);
    attrY = getLengthValue(element, "y", "0", 2);
  }

  // Apply the viewBox viewport
  var viewBoxAttr = element.getAttribute("viewBox");
  if (viewBoxAttr != null && viewBoxAttr != "")
  {
    // Split the viewBox
    var viewBoxArr = splitSVGNumberList(viewBoxAttr);
    if (viewBoxArr.length == 4) {
      // These could have exponents... for now we skip that case
      // Even though several popular tools produce them
      x = -parseFloat(viewBoxArr[0]) + attrX;
      y = -parseFloat(viewBoxArr[1]) + attrY;
      w = parseFloat(viewBoxArr[2]);
      h = parseFloat(viewBoxArr[3]);
    }
    // Negative values are not permitted for viewbox width or height
    if (w < 0) w = 0;
    if (h < 0) h = 0;
  }
  else
  {
    // This will result in a 1/1 scale.
    w = attrWidth;
    h = attrHeight;
  }
  return {x:x, y:y, width:w, height:h,
    attrX:attrX, attrY:attrY, attrWidth:attrWidth, attrHeight:attrHeight}
}

/// <summary>
/// For the given element, calculates the implicit transform for the viewBox
/// and preserveAspectRatio attributes. For the root &lt;svg&gt; element
/// it will also include implicit transformation for currentScale and
/// currentTranslate
/// </summary>
/// <param>element, the element that contains a viewBox attribute</param>
/// <returns>A matrix representing the viewBox transformation</returns>
function getViewBoxTransform(element) {
  var matrix = svgRoot.createSVGMatrix();
  var vr = getViewportViewRect(element);
  
  if (vr.attrX != 0 || vr.attrY != 0)
    matrix = matrix.translate(vr.attrX, vr.attrY);
  
  var x = vr.x;
  var y = vr.y;
  var w = vr.width;
  var h = vr.height;
  var attrWidth = vr.attrWidth;
  var attrHeight = vr.attrHeight;

  var xRatio = 1;
  var yRatio = 1;

  // No div by zero errors here...
  if (w != 0)
    xRatio = attrWidth / w;
  if (h != 0)
    yRatio = attrHeight / h;

  var parStr = element.getAttribute("preserveAspectRatio");
  var parAlign = 0;
  var parMeetOrSlice = 1;
  
  // If there is an attribute value, check it out
  if (parStr != null && parStr != "") {
    var parArr = parRegExp.exec(parStr);
    if (parArr.length != 2 && parArr.length != 3) {
      // Something was there but I don't know what
      parAlign = -1;
      parMeetOrSlice = -1;
    } else {
      // Handle align
      if (parArr[1] == "none")
        parAlign = 0;
      else if (parArr[1] == "xMinYMin")
        parAlign = 1;
      else if (parArr[1] == "xMidYMin")
        parAlign = 2;
      else if (parArr[1] == "xMaxYMin")
        parAlign = 3;
      else if (parArr[1] == "xMinYMid")
        parAlign = 4;
      else if (parArr[1] == "xMidYMid")
        parAlign = 5;
      else if (parArr[1] == "xMaxYMid")
        parAlign = 6;
      else if (parArr[1] == "xMinYMax")
        parAlign = 7;
      else if (parArr[1] == "xMidYMax")
        parAlign = 8;
      else if (parArr[1] == "xMaxYMax")
        parAlign = 9;
      else
        parAlign = -1;

      // Handle meetOrSlice
      if (parArr.length == 3) {
        if (parArr[2] == "meet")
          parAlign = 1;
        else if (parArr[2] == "slice")
          parAlign = 2;
        else
          parAlign = -1;
      }
    }
  }

  if (parAlign == 0)
  {
    matrix = matrix.scaleNonUniform(xRatio, yRatio);
  }
  else
  {
    // uniform scaling
    if(parMeetOrSlice == 1)
      xRatio = Math.min(xRatio, yRatio);
    else
      xRatio = Math.max(xRatio, yRatio);

    var x_trans = 0;
    var x_diff = attrWidth - (xRatio * w);
    var y_trans = 0;
    var y_diff = attrHeight - (xRatio * h);

    if(parAlign == 8 || parAlign == 5 || parAlign == 2)
    {
      // align to the Middle X
      x_trans = x_diff / 2;
    }
    else if(parAlign == 9 || parAlign == 6 || parAlign == 3)
    {
      // align to the right X
      x_trans = x_diff;
    }

    if(parAlign == 6 || parAlign == 5 || parAlign == 4)
    {
      // align to the middle Y
      y_trans = y_diff / 2;
    }
    else if(parAlign == 9 || parAlign == 8 || parAlign == 7)
    {
      // align to the bottom Y
      y_trans = y_diff;
    }

    matrix = matrix.translate(x_trans, y_trans);
    matrix = matrix.scale(xRatio);
  }
  // Translate for min-x and min-y
  matrix = matrix.translate(x, y);

  // Handle currentSranslate and currentScale
  if (element == svgRoot)
  {
    matrix = matrix.translate(svgRoot.currentTranslate.x, svgRoot.currentTranslate.y);
    matrix = matrix.scale(svgRoot.currentScale);
  }

  return matrix;
}

var Dpi = 96;
var CmPerIn = 2.54;

/// <summary>
/// For the given element, calculates the consolidated transform matrix for the
/// transform attribute. This can be used in getCTM and getScreenCTM.
/// </summary>
/// <param>element, the element that contains the length value</param>
/// <param>attributeName, the name of the length property you are retrieving,
///    e.g. "width".</param>
/// <param>attributeDefault, the default length value, used if the property
///    you are attempting to retrieis not present</param>
/// <param>direction, used for calculating percentages, can be
///    1:horizontal, 2:vertical, or -1:unknown</param>
/// <returns>A float value representing the number of pixels for the length, or 0</returns>
function getLengthValue(element, attributeName, attributeDefault, direction)
{
  var lengthAttr = element.getAttribute(attributeName);
  if (lengthAttr == null || lengthAttr == "")
    lengthAttr = attributeDefault;

  // Parse it
  var lengthArr = lengthRegExp.exec(lengthAttr);

  // Check if it was an invalid length
  if (lengthArr.length != 2 && lengthArr.length != 3)
    return 0;

  var floatValue = parseFloat(lengthArr[1]);
  var unit = lengthArr.length == 3 ? lengthArr[2] : "";

  if ("cm" == unit)
    return floatValue / CmPerIn * Dpi;
  if ("mm" == unit)
    return floatValue / 10 / CmPerIn * Dpi;
  if ("px" == unit)
    return floatValue;
  if ("em" == unit)
    return floatValue; //TODO: Is this right?
  if ("ex" == unit)
    return floatValue; //TODO: Is this right?
  if ("pc" == unit)
    return floatValue / 6 * Dpi;
  if ("pt" == unit)
    return floatValue / 72 * Dpi;
  if ("in" == unit)
    return floatValue * Dpi;
  if ("%" == unit)
  {
    // Percentages
    var w = 0;
    var h = 0;
    if (element == svgRoot)
    {
      if (svgWindow.innerWidth) {
        w = svgWindow.innerWidth;
        h = svgWindow.innerHeight;
      } else if (svgRoot.viewport) {
        var v = svgRoot.viewport;
        w = v.width;
        h = v.height;
      }
    }
    else
    {
      var nVE = getNearestViewportElement(element);
      var nViewBox = getViewportViewRect(nVE);
      w = nViewBox.width;
      h = nViewBox.height;
    }

    if(direction == 1)
    {
      // Horizontal
      return floatValue * w / 100;
    }
    else if (direction == 2)
    {
      // Vertical
      return floatValue * h / 100;
    }
    else
    {
      // Non linear
      return Math.Sqrt(w*w + h*h)/Math.Sqrt(2) * floatValue / 100;
    }
  }
  return floatValue;
}

/// <summary>
/// For the given element, calculates the consolidated transform matrix for the
/// transform attribute. This can be used in getCTM and getScreenCTM.
/// </summary>
/// <param>element, the element that contains the transform</param>
/// <returns>A matrix representing the transform attribute</returns>
function getConsolidatedTransform(element) {
  var transAttr = element.getAttribute("transform");
  var matrix = svgRoot.createSVGMatrix();
  if (transAttr != null && transAttr != "")
  {
    var transListRegExp = /\s*(matrix|translate|scale|rotate|skewX|skewY)\s*\(([^)]+)\)\s*,?/g;
    var transArr = transListRegExp.exec(transAttr);
    while (transArr != null && transArr.length > 1)
    {
      for (i = 1; i < transArr.length-1; i+=2) {
        if (transArr[i+1] == "")
          continue;
        var func = transArr[i];
        var params = splitSVGNumberList(transArr[i+1]);
        if (func == "matrix") {
          if (params.length == 6) {
            var paramMatrix = svgRoot.createSVGMatrix();
            paramMatrix.a = parseFloat(params[0]);
            paramMatrix.b = parseFloat(params[1]);
            paramMatrix.c = parseFloat(params[2]);
            paramMatrix.d = parseFloat(params[3]);
            paramMatrix.e = parseFloat(params[4]);
            paramMatrix.f = parseFloat(params[5]);
            matrix = matrix.multiply(paramMatrix);
          }
        } else if (func == "translate") {
          if (params.length == 1)
            matrix = matrix.translate(parseFloat(params[0]), 0);
          else if (params.length == 2)
            matrix = matrix.translate(parseFloat(params[0]), parseFloat(params[1]));
        } else if (func == "scale") {
          if (params.length == 1)
            matrix = matrix.scale(parseFloat(params[0]));
          else if (params.length == 2)
            matrix = matrix.scaleNonUniform(parseFloat(params[0]), parseFloat(params[1]));
        } else if (func == "rotate") {
          if (params.length == 1)
            matrix = matrix.rotate(parseFloat(params[0]));
          else if (params.length == 3) {
            var cx = parseFloat(params[1]);
            var cy = parseFloat(params[2]);
            matrix = matrix.translate(cx, cy);
            matrix = matrix.rotate(parseFloat(params[0]));
            matrix = matrix.translate(-cx, -cy);
          }
        } else if (func == "skewX") {
          if (params.length == 1)
            matrix = matrix.skewX(parseFloat(params[0]));
        } else if (func == "skewY") {
          if (params.length == 1)
            matrix = matrix.skewY(parseFloat(params[0]));
        }
  		}
  		transArr = transListRegExp.exec(transAttr);
  	}
  }
  return matrix;
}

/// <summary>
/// Finds the nearest viewport for a given element
/// </summary>
/// <param>element, the element you want to search from</param>
/// <returns>The nearest viewport element or null if the element
/// has no viewport (i.e. is the root &lt;svg&gt; element.</returns>
function getNearestViewportElement(element) {
  var parent = element.parentNode;
  while (parent != null && parent.nodeType == 1) {
    //TODO: elements other than <svg> can establish viewports
    if (parent.nodeName == "svg")
      return parent;
    parent = parent.parentNode;
  }
  return null;
}

/// <summary>
/// Splits a list of numbers separated by spaces or commas into an array
/// </summary>
/// <param>numberList, the list of numbers to split</param>
/// <returns>An array of strings containing one item for each item in the list</returns>
function splitSVGNumberList(numberList) {
  // We could use the following, but split is not cross browser compliant
  // return numberList.split(spaceOrCommaRegExp);
  var transListParamsRegExp = /(?:\s*([\+\-]?(?:(?:\d+\.?)|(?:\d*\.))\d*(?:[Ee][\+\-]?\d+)?)\s*,?)/g;
  var resArr = new Array();
  var paramArr = transListParamsRegExp.exec(numberList);
  while (paramArr && paramArr.length != 1) {
    resArr.push(paramArr[1]);
    paramArr = transListParamsRegExp.exec(numberList);
  }
  return resArr;
}
