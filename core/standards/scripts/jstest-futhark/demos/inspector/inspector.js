function DomInspector ()
{
  this.moving = false;
  this.highlightOn = DI_highlightOn;
  this.highlightOff = DI_highlightOff;
  this.highlightPhase = -1;
  this.updateInformation = DI_updateInformation;
  
  this.getNextNode = DI_getNextNode;
  this.isAncestorOf = DI_isAncestorOf;
  
  this.skipElement = DI_skipElement;
  this.firstChild = DI_firstChild;
  this.lastChild = DI_lastChild;
  this.nextSibling = DI_nextSibling;
  this.previousSibling = DI_previousSibling;
  this.nextNode = DI_nextNode;
  this.previousNode = DI_previousNode;
  this.parentNode = DI_parentNode;
  this.edit = DI_edit;
  this.deleteNode = DI_deleteNode;
  this.listProperties = DI_listProperties;
  
  this.treeView = DI_treeView;
  this.treeViewRecurse = DI_treeViewRecurse;
  this.elementAttributes = DI_elementAttributes;

  this.eventsView = DI_eventsView;
  
  this.help = DI_help;
  this.selectElement = DI_selectElement;
  
  this.appendChild = DI_appendChild;
  this.appendChildNew = DI_appendChildNew;
  
  this.insertBefore = DI_insertBefore;
  this.insertBeforeNew = DI_insertBeforeNew;
  
  this.deletedElement = null;
  
  this.mainElement = document.createElement ("DIV");
  this.mainElement.style.position = "fixed";
  this.mainElement.style.left = "20px";
  this.mainElement.style.top = "20px";
  this.mainElement.style.borderWidth = "thick";
  this.mainElement.style.borderStyle = "solid";
  this.mainElement.style.borderColor = "black";
  this.mainElement.style.padding = "10px";
  this.mainElement.style.backgroundColor = "white";
  
  var line = document.createElement ("DIV");
  line.style.fontFamily = "sans-serif";
  line.style.fontWeight = "bold";
  line.appendChild (document.createTextNode ("DOM Inspector"));
  this.mainElement.appendChild (line);
  document.body.appendChild (this.mainElement);
  this.updateInformation ();

  this.mainElement.addEventListener ("mousedown", DI_mouseDown, true);
  document.body.addEventListener ("keypress", DI_keypress, true);
  document.body.addEventListener ("mouseup", DI_mouseUp, true);
}

function DI_mouseDown (event)
{
  var di = dom_inspector;
  if (di && event.currentTarget == event.target)
    {
      if (event.currentTarget.allowResize &&
          (event.currentTarget.offsetWidth - event.clientX) < 5 &&
          (event.currentTarget.offsetHeight - event.clientY) < 5)
        di.resizing = true;
      else
        di.moving = true;
      
      document.body.addEventListener ("mousemove", DI_mouseMove, true);
      document.body.movingObject = event.currentTarget;
      
      if (di.resizing && document.body.movingObject.DIWindow)
        {
          document.body.movingObject.DIWindow.explicitWidth = true;
          document.body.movingObject.DIWindow.explicitHeight = true;
        }

      di.movingX = DI_pixelsToNumber (event.currentTarget.style.left);
      di.movingY = DI_pixelsToNumber (event.currentTarget.style.top);
      di.movingW = DI_pixelsToNumber (event.currentTarget.style.width);
      di.movingH = DI_pixelsToNumber (event.currentTarget.style.height);

      if (!di.movingW)
        di.movingW = event.currentTarget.offsetWidth;

      if (!di.movingH)
        di.movingH = event.currentTarget.offsetHeight;
      
      di.movingMouseX = event.screenX;
      di.movingMouseY = event.screenY;

      event.stopPropagation ();
      event.preventDefault ();
    }
}

function DI_mouseUp (event)
{
  var di = dom_inspector;
  if (di && (di.moving || di.resizing))
    {
      di.moving = false;
      di.resizing = false;
      document.body.removeEventListener ("mousemove", DI_mouseMove, true);
      document.body.movingObject = null;
      
      event.stopPropagation ();
      event.preventDefault ();
    }
}

function DI_mouseMove (event)
{
  var di = dom_inspector;
  if (di)
    {
      if (0 || !di.moving && !di.resizing)
        {
          document.body.removeEventListener ("mousemove", DI_mouseMove, true);
          //document.body.movingObject = null;
          
          event.stopPropagation ();
          event.preventDefault ();
        }

      var dx = event.screenX - di.movingMouseX;
      var dy = event.screenY - di.movingMouseY;
      
      var w_before = document.body.movingObject.offsetWidth;
      var h_before = document.body.movingObject.offsetHeight;

      var setting_w = 0, setting_h = 0;
      
      alert1 = dx + ":" + dy;
      alert_before = w_before + ":" + h_before;
      
      if (dx)
        {
          if (di.resizing)
            {
              setting_w = di.movingW + dx;
              document.body.movingObject.style.width = setting_w + "px";
              di.movingW = DI_pixelsToNumber (document.body.movingObject.style.width);
            }
          else
            document.body.movingObject.style.left = (di.movingX + dx) + "px";
        }
      if (dy)
        {
          if (di.resizing)
            {
              setting_h = di.movingH + dy;
              document.body.movingObject.style.height = setting_h + "px";
              di.movingH = DI_pixelsToNumber (document.body.movingObject.style.height);
            }
          else
            {
              document.body.movingObject.style.top = (di.movingY + dy) + "px";
            }
        }

      alert2 = setting_w + ":" + setting_h;
      
      if (di.resizing)
        {
          var w_after = document.body.movingObject.offsetWidth;
          var h_after = document.body.movingObject.offsetHeight;
          
          alert_after = w_after + ":" + h_after;
          
          if (setting_w && (w_before + dx) != w_after)
            setting_w = (setting_w - w_after) + setting_w;
          else
            setting_w = 0;
      
          if (setting_h && (h_before + dy) != h_after)
            setting_h = (setting_h - h_after) + setting_h;
          else
            setting_h = 0;

          //alert (dx + ":" + dy);
          
          di.movingX = DI_pixelsToNumber (document.body.movingObject.style.left);
          di.movingY = DI_pixelsToNumber (document.body.movingObject.style.top);

          if (setting_w)
            {
              document.body.movingObject.style.width = setting_w + "px";
              di.movingW = DI_pixelsToNumber (document.body.movingObject.style.width);
            }

          if (setting_h)
            {
              document.body.movingObject.style.height = setting_h + "px";
              di.movingH = DI_pixelsToNumber (document.body.movingObject.style.height);
            }
        }
      
      di.movingX = DI_pixelsToNumber (document.body.movingObject.style.left);
      di.movingY = DI_pixelsToNumber (document.body.movingObject.style.top);
      
      di.movingMouseX = event.screenX;
      di.movingMouseY = event.screenY;

      var w_final = document.body.movingObject.offsetWidth;
      var h_final = document.body.movingObject.offsetHeight;
          
      alert_final = w_final + ":" + h_final;
      
      //alert (alert1);
      //alert (alert2);
      //alert (setting_w);
      //alert (setting_h);
      
      //alert (alert_before + ", " + alert_after + ", " + alert_final);
    }
}

function DI_pixelsToNumber (str)
{
  return Number (str.replace (/([0-9]+)px/, "$1"));
}

function DI_highlightOn (element)
{
  if (this.highlightElement)
    this.highlightOff ();
  
  if (element.nodeName == "#text")
    {
      var span = document.createElement ("SPAN");
      span.synthetic = true;
      element.parentNode.insertBefore (span, element);
      span.appendChild (element);
    }
  
  this.highlightElement = element;
  this.highlightStopped = false;
  this.updateInformation ();
  DI_highlightPulse ();
}

function DI_highlightOff ()
{
  var element = this.highlightElement;
  
  if (element.nodeName == "#text" && element.parentNode.synthetic)
    {
      var span = element.parentNode;
      span.parentNode.insertBefore (element, span);
      span.parentNode.removeChild (span);
    }
  
  clearTimeout (this.highlightTimeout);
  this.highlightStopped = true;
  DI_highlightPulse ();
}

function DI_highlightPulseAdvanced ()
{
  var di = dom_inspector;
  var element = di.highlightElement;

  if (di.highlightStopped)
    {
      if (element.style)
        {
          if (di.old_borderStyle)
            element.style.setProperty ("border-style", di.old_borderStyle, "");
          else
            {
              element.style.removeProperty ("border-top-style");
              element.style.removeProperty ("border-right-style");
              element.style.removeProperty ("border-bottom-style");
              element.style.removeProperty ("border-left-style");
            }
          
          if (!di.old_borderWidth)
            {
              element.style.removeProperty ("border-top-width");
              element.style.removeProperty ("border-right-width");
              element.style.removeProperty ("border-bottom-width");
              element.style.removeProperty ("border-left-width");
            }
          
          if (!di.old_borderColor)
            {
              element.style.removeProperty ("border-top-color");
              element.style.removeProperty ("border-right-color");
              element.style.removeProperty ("border-bottom-color");
              element.style.removeProperty ("border-left-color");
            }
        }
      
      di.highlightPhase = -1;
      di.highlightElement = null;
    }
  else
    {
      if (!element.style)
        {
          if (element.parentNode.synthetic)
            element = element.parentNode;
          else
            return;
        }
      
      if (di.highlightPhase == -1)
        {
          di.highlightPhase = 0;

          di.old_borderStyle = element.style.getPropertyValue ("border-style");
          di.old_borderWidth = element.style.getPropertyValue ("border-width");
          di.old_borderColor = element.style.getPropertyValue ("border-color");

          element.style.setProperty ("border-style", "solid", "");
          
          if (!di.old_borderWidth)
            element.style.setProperty ("border-width", "thin", "");
        }

      switch (di.highlightPhase)
        {
        case 0:
          element.style.setProperty ("border-color", "#3f0000", "");
          di.highlightPhase = 1;
          di.highlightTimeout = setTimeout (DI_highlightPulse, 100);
          break;
          
        case 1:
          element.style.setProperty ("border-color", "#7f0000", "");
          di.highlightPhase = 2;
          di.highlightTimeout = setTimeout (DI_highlightPulse, 100);
          break;
      
        case 2:
          element.style.setProperty ("border-color", "#af0000", "");
          di.highlightPhase = 3;
          di.highlightTimeout = setTimeout (DI_highlightPulse, 100);
          break;

        case 3:
          element.style.setProperty ("border-color", "#ff0000", "");
          di.highlightPhase = 4;
          di.highlightTimeout = setTimeout (DI_highlightPulse, 100);
          break;

        case 4:
          element.style.setProperty ("border-color", "#af0000", "");
          di.highlightPhase = 5;
          di.highlightTimeout = setTimeout (DI_highlightPulse, 100);
          break;

        case 5:
          element.style.setProperty ("border-color", "#7f0000", "");
          di.highlightPhase = 6;
          di.highlightTimeout = setTimeout (DI_highlightPulse, 100);
          break;

        case 6:
          element.style.setProperty ("border-color", "#3f0000", "");
          di.highlightPhase = 0;
          di.highlightTimeout = setTimeout (DI_highlightPulse, 100);
          break;
        }
    }
}

function DI_highlightPulseSimple ()
{
  var di = dom_inspector;
  var element = di.highlightElement;

  if (di.highlightStopped)
    {
      if (element.style)
        {
          if (di.old_borderStyle)
            element.style.border = di.old_border;
          else
            element.style.border = "";
        }
      
      di.highlightPhase = -1;
      di.highlightElement = null;
    }
  else
    {
      if (!element.style)
        {
          if (element.parentNode.synthetic)
            element = element.parentNode;
          else
            return;
        }
      
      if (di.highlightPhase == -1)
        {
          di.highlightPhase = 0;

          di.old_border = element.style.border;

          element.style.borderStyle = "solid";
          element.style.borderWidth = "thin";
        }

      switch (di.highlightPhase)
        {
        case 0:
          element.style.borderColor = "#3f0000";
          di.highlightPhase = 1;
          di.highlightTimeout = setTimeout (DI_highlightPulse, 400);
          break;
          
        case 1:
          element.style.borderColor = "#7f0000";
          di.highlightPhase = 2;
          di.highlightTimeout = setTimeout (DI_highlightPulse, 400);
          break;
      
        case 2:
          element.style.borderColor = "#af0000";
          di.highlightPhase = 3;
          di.highlightTimeout = setTimeout (DI_highlightPulse, 400);
          break;

        case 3:
          element.style.borderColor = "#ff0000";
          di.highlightPhase = 4;
          di.highlightTimeout = setTimeout (DI_highlightPulse, 400);
          break;

        case 4:
          element.style.borderColor = "#af0000";
          di.highlightPhase = 5;
          di.highlightTimeout = setTimeout (DI_highlightPulse, 400);
          break;

        case 5:
          element.style.borderColor = "#7f0000";
          di.highlightPhase = 6;
          di.highlightTimeout = setTimeout (DI_highlightPulse, 400);
          break;

        case 6:
          element.style.borderColor = "#3f0000";
          di.highlightPhase = 0;
          di.highlightTimeout = setTimeout (DI_highlightPulse, 400);
          break;
        }
    }
}

function DI_skipElement (element)
{
  if (element.nodeName == "#text" && /^\s*$/.test(element.data))
    return true;
  else if (element.nodeName.charAt (0) == "#" && element.nodeName != "#text")
    return true;
  else if (element == this.mainElement)
    return true;
  else if (element.id == "inspector-script")
    return true;
  else if (element.synthetic)
    return true;
  else
    return false;
}

function DI_firstChild ()
{
  var element = this.highlightElement.firstChild;

  while (element && this.skipElement (element))
    element = element.nextSibling;
  
  if (element)
    this.highlightOn (element);
}

function DI_lastChild ()
{
  var element = this.highlightElement.lastChild;

  while (element && this.skipElement (element))
    element = element.previousSibling;
  
  if (element)
    this.highlightOn (element);
}

function DI_nextSibling ()
{
  var element = this.highlightElement;

  if (element == document.body)
    return;
  
  if (element.parentNode.synthetic)
    element = element.parentNode;
  
  element = element.nextSibling;
  
  while (element && this.skipElement (element))
    element = element.nextSibling;
  
  if (element)
    this.highlightOn (element);
}

function DI_previousSibling ()
{
  var element = this.highlightElement;

  if (element == document.body)
    return;
  
  if (element.parentNode.synthetic)
    element = element.parentNode;
  
  element = element.previousSibling;
  
  while (element && this.skipElement (element))
    element = element.previousSibling;
  
  if (element)
    this.highlightOn (element);
}

function DI_getNextNode (element)
{
  if (element.parentNode.synthetic)
    element = element.parentNode;
  
  while (1)
    if (!this.skipElement (element) && element.firstChild)
      if (!this.skipElement (element.firstChild))
        return element.firstChild;
      else
        element = element.firstChild;
    else if (element.nextSibling)
      if (!this.skipElement (element.nextSibling))
        return element.nextSibling;
      else
        element = element.nextSibling;
    else
      {
        element = element.parentNode;
        
        while (element && !element.nextSibling)
          element = element.parentNode;
        
        if (element)
          {
            element = element.nextSibling;
          
            if (!this.skipElement (element))
              return element;
          }
        else
          return null;
      }
}

function DI_isAncestorOf (ancestor, descendent)
{
  while (descendent && descendent != ancestor)
    descendent = descendent.parentNode;

  return descendent == ancestor;
}

function DI_nextNode ()
{
  var element = this.getNextNode (this.highlightElement);

  if (element)
    this.highlightOn (element);
}

function DI_previousNode ()
{
  var element = this.highlightElement;

  if (element.parentNode.synthetic)
    element = element.parentNode;

  while (1)
    if (element.previousSibling)
      {
        element = element.previousSibling;
        
        if (!this.skipElement (element))
          {
            while (!this.skipElement (element) && element.lastChild)
              element = element.lastChild;
        
            if (!this.skipElement (element))
              {
                this.highlightOn (element);
                return;
              }
          }
      }
    else if (element.parentNode && element != document.body)
      {
        this.highlightOn (element.parentNode);
        return;
      }
    else
      return;
}

function DI_parentNode ()
{
  if (this.highlightElement == document.body)
    return;

  var element = this.highlightElement.parentNode;
  while (this.skipElement (element))
    element = element.parentNode;
  
  if (element)
    this.highlightOn (element);
}

function DI_edit ()
{
  if (this.highlightElement.nodeName == "#text")
    {
      var text = prompt ("Text:", this.highlightElement.data);
      this.highlightElement.data = text;
    }
  else
    alert ("EDIT can only be used on text nodes.");
}

function DI_deleteNode ()
{
  if (this.highlightElement != document.body)
    {
      var parent = this.highlightElement.parentNode;
      if (parent.synthetic)
        parent = parent.parentNode;
      
      var element = this.highlightElement.nextSibling;

      while (element && this.skipElement (element))
        element = element.nextSibling;

      this.deletedElement = this.highlightElement;
      this.highlightOff ();
      parent.removeChild (this.deletedElement);
      this.highlightOn (element ? element : parent);
    }
  else
    alert ("DELETE can't delete the BODY element.");
}

function DI_Window (left, top, maxWidth, maxHeight, resize, overflow)
{
  this.container = document.createElement ("DIV");
  this.container.style.position = "fixed";
  this.container.style.left = left ? left + "px" : "20px";
  this.container.style.top = top ? top + "px" : "20px";
  this.maxWidth = maxWidth;
  this.maxHeight = maxHeight;
  this.container.style.overflow = overflow ? overflow : "auto";
  
  this.container.style.borderWidth = "thick";
  this.container.style.borderStyle = "solid";
  this.container.style.borderColor = "black";
  this.container.style.padding = "10px";
  this.container.style.backgroundColor = "white";

  this.container.allowResize = resize;
  this.container.DIWindow = this;
  this.container.addEventListener ("mousedown", DI_mouseDown, true);

  this.content = document.createElement ("DIV");
  this.content.style.position = "relative";
  this.container.appendChild (this.content);
  
  this.addLine = function (child, style, nowrap, paddingLeft)
    {
      var div = document.createElement ("DIV");
      
      switch (style)
        {
        case "bold":
          div.style.fontFamily = "sans-serif";
          div.style.fontWeight = "bold";
          div.style.marginBottom = "10px";
          break;
          
        case "italic":
          div.style.fontFamily = "sans-serif";
          div.style.fontStyle = "italic";
          div.style.marginTop = "5px";
          div.style.marginBottom = "5px";
          break;

        case "monospace":
          div.style.fontFamily = "monospace";
          break;

        case "monospace-green":
          div.style.fontFamily = "monospace";
          div.style.color = "green";
          break;

        default:
          div.style.fontFamily = "sans-serif";
          break;
        }

      if (nowrap)
        div.style.whiteSpace = "nowrap";

      if (paddingLeft)
        div.style.paddingLeft = paddingLeft;
      
      div.appendChild (child);
      this.content.appendChild (div);
      this.maxSize ();
    }

  this.addLineText = function (text, style, nowrap, paddingLeft)
    {
      this.addLine (document.createTextNode (text), style, nowrap, paddingLeft);
      this.maxSize ();
    }

  this.openLine = function (family, nowrap, paddingLeft)
    {
      var div = document.createElement ("DIV");

      if (family)
        div.style.fontFamily = family;
      
      if (nowrap)
        div.style.whiteSpace = "nowrap";

      if (paddingLeft)
        div.style.paddingLeft = paddingLeft;
      
      this.content.appendChild (div);
      this.currentLine = div;
      this.maxSize ();
    }

  this.addText = function (text, style, color)
    {
      var span = document.createElement ("SPAN");
      
      switch (style)
        {
        case "bold":
          span.style.fontWeight = "bold";
          break;
          
        case "italic":
          span.style.fontStyle = "italic";
          break;
        }

      if (color)
        span.style.color = color;

      span.appendChild (document.createTextNode (text));
      this.currentLine.appendChild (span);
      this.maxSize ();
    }

  this.closeLine = function ()
    {
      this.currentLine = null;
      this.maxSize ();
    }

  this.addButton = function (label, callback)
    {
      var button = document.createElement ("DIV");
      button.style.cssFloat = "right";
      button.style.border = "groove medium black";
      button.style.fontFamily = "sans-serif";
      button.style.fontWeight = "bold";
      button.style.marginTop = "10px";
      button.style.marginLeft = "10px";
      button.style.marginBottom = "10px";
      button.style.padding = "5px";
      button.style.cursor = "pointer";
      button.appendChild (document.createTextNode (label));
      button.addEventListener ("click", callback, false);
      this.content.appendChild (button);
      this.maxSize ();
    }

  this.display = function ()
    {
      document.body.appendChild (this.container);
      this.maxSize ();
    }

  this.maxSize = function ()
    {
      if (!this.explicitWidth || !this.explicitHeight)
        {
          var setWidth = false, setHeight = false;
          if (this.container.offsetWidth > this.maxWidth && !this.explicitWidth)
            setWidth = true;
          if (this.container.offsetHeight > this.maxHeight && !this.explicitHeight)
            setHeight = true;
          
          if (setWidth)
            {
              this.container.style.width = this.maxWidth + "px";
              this.explicitWidth = true;
            }
          if (setHeight)
            {
              this.container.style.height = this.maxHeight + "px";
              this.explicitHeight = true;
            }
        }
    }
}

function DI_EventWindow (element, left, top)
{
  this.baseClass = DI_Window;
  this.baseClass (left, top, 600, 400, true, "auto");
  this.container.style.width = 300 + "px";
  this.explicitWidth = true;
  
  this.events = new Array ();
  this.element = element;
  this.element.addEventListener ("mouseover", DI_eventsViewCallback, true);
  this.element.addEventListener ("mouseout", DI_eventsViewCallback, true);
  this.listeners = new Array ();
  this.listeners[0] = "mouseover";
  this.listeners[1] = "mouseout";
  this.element.DIEventWindow = this;
  
  this.container.DIEventWindow = this;
  this.eventsContainer = document.createElement ("DIV");
  this.eventsContainer.style.paddingLeft = "10px";
  
  this.addLineText ("DOM Inspector: Events", "bold");
  this.content.appendChild (this.eventsContainer);
  this.addButton ("Close", DI_closeEventWindowCallback);
  this.addButton ("Clear", DI_clearEventWindowCallback);
  this.display ();

  this.handleEvent = function (event)
    {
      var div = document.createElement ("DIV");
      div.style.paddingBottom = "10px";
      div.DIEvent = DI_copyEvent (event);
      
      var heading = document.createElement ("DIV");
      heading.style.fontWeight = "bold";
      var details = document.createElement ("SPAN");
      details.style.color = "blue";
      details.style.cursor = "pointer";
      details.style.cssFloat = "right";
      details.addEventListener ("click", DI_eventWindowDetails, false);
      details.appendChild (document.createTextNode ("Show details"));
      heading.appendChild (details);
      heading.appendChild (document.createTextNode ("Event: " + event.type));
      div.appendChild (heading);
      
      this.eventsContainer.appendChild (div);
      this.maxSize ();
    }
}

function DI_copyEvent (event)
{
  var newEvent = new Object ();

  newEvent.type = event.type;
  newEvent.eventPhase = event.eventPhase;
  newEvent.bubbles = event.bubbles;
  newEvent.cancelable = event.cancelable;
  newEvent.timeStamp = event.timeStamp;
  newEvent.target = event.target;
  
  if (event.type == "mouseup" ||
      event.type == "mousedown" ||
      event.type == "click" ||
      event.type == "mouseover" ||
      event.type == "mousemove" ||
      event.type == "mouseout")
    {
      newEvent.screenX = event.screenX;
      newEvent.screenY = event.screenY;
      newEvent.clientX = event.clientX;
      newEvent.clientY = event.clientY;
      newEvent.ctrlKey = event.ctrlKey;
      newEvent.shiftKey = event.shiftKey;
      newEvent.altKey = event.altKey;
      newEvent.metaKey = event.metaKey;
      
      if (event.type == "mouseup" ||
          event.type == "mousedown" ||
          event.type == "click")
        {
          newEvent.button = event.button;
          newEvent.type = event.type;
        }
        
      if (event.type == "mouseover" ||
          event.type == "mousemove" ||
          event.type == "mouseout")
        newEvent.relatedTarget = event.relatedTarget;
    }

  return newEvent;
}

function DI_eventWindowDetails (clickEvent)
{
  var element = clickEvent.currentTarget;

  while (element && !element.DIEvent)
    element = element.parentNode;

  if (element)
    if (element.lastChild.DIDetails)
      {
        clickEvent.currentTarget.firstChild.data = "Show details";
        element.removeChild (element.lastChild);
      }
    else
      {
        clickEvent.currentTarget.firstChild.data = "Hide details";
        var event = element.DIEvent;
        
        var div = document.createElement ("DIV");
        div.style.paddingLeft = "10px";
        div.DIDetails = true;
      
        function addEventProperty (container, event, property)
          {
            var propertyDiv = document.createElement ("DIV");
            var propertySpan = document.createElement ("SPAN");

            propertySpan.appendChild (document.createTextNode ("event." + property + " = " + event[property]));
            propertyDiv.appendChild (propertySpan);
            container.appendChild (propertyDiv);
          }
      
        function addEventElementProperty (container, event, property)
          {
            var propertyDiv = document.createElement ("DIV");
            
            var propertySpan1 = document.createElement ("SPAN");
            propertySpan1.appendChild (document.createTextNode ("event." + property + " = "));
            propertyDiv.appendChild (propertySpan1);
            
            var propertySpan2 = document.createElement ("SPAN");
            propertySpan2.style.color = "blue";
            propertySpan2.style.fontWeight = "bold";
            propertySpan2.style.cursor = "pointer";
            propertySpan2.addEventListener ("click", DI_highlightEventElement, false);
            propertySpan2.DIElement = event[property];
            propertySpan2.appendChild (document.createTextNode (event[property]));
            propertyDiv.appendChild (propertySpan2);
            
            container.appendChild (propertyDiv);
          }

        addEventElementProperty (div, event, "target");
        addEventProperty (div, event, "eventPhase");
        addEventProperty (div, event, "bubbles");
        addEventProperty (div, event, "cancelable");
        addEventProperty (div, event, "timeStamp");

        if (event.type == "mouseup" ||
            event.type == "mousedown" ||
            event.type == "click" ||
            event.type == "mouseover" ||
            event.type == "mousemove" ||
            event.type == "mouseout")
          {
            addEventProperty (div, event, "screenX");
            addEventProperty (div, event, "screenY");
            addEventProperty (div, event, "clientX");
            addEventProperty (div, event, "clientY");
            addEventProperty (div, event, "ctrlKey");
            addEventProperty (div, event, "shiftKey");
            addEventProperty (div, event, "altKey");
            addEventProperty (div, event, "metaKey");

            if (event.type == "mouseup" ||
                event.type == "mousedown" ||
                event.type == "click")
              {
                addEventProperty (div, event, "button");
                addEventProperty (div, event, "type");
              }
        
            if (event.type == "mouseover" ||
                event.type == "mousemove" ||
                event.type == "mouseout")
              addEventElementProperty (div, event, "relatedTarget");
          }
        
        element.appendChild (div);
      }
}

function DI_highlightEventElement (event)
{
  var element = event.currentTarget;
  if (element.DIElement)
    dom_inspector.highlightOn (element.DIElement);
}

function DI_eventsView ()
{
  if (this.highlightElement)
    new DI_EventWindow (this.highlightElement, 20, 20);
}

function DI_eventsViewCallback (event)
{
  var eventWindow = event.currentTarget.DIEventWindow;
  if (eventWindow)
    eventWindow.handleEvent (event);
}

function DI_listProperties ()
{
  var container = new DI_Window (20, 20, 600, 400, true, "auto");
  container.addLineText ("DOM Inspector: Property list", "bold");

  for (var property in this.highlightElement)
    container.addLineText (property + " = " + this.highlightElement[property]);
  
  container.addButton ("Close", DI_closeWindowCallback);
  container.display ();
}

function DI_closeWindowCallback (event)
{
  var element = event.currentTarget;
  
  while (element && !element.DIWindow)
    element = element.parentNode;

  if (element)
    document.body.removeChild (element);
}

function DI_closeEventWindowCallback (event)
{
  var element = event.currentTarget;
  while (element && !element.DIEventWindow)
    element = element.parentNode;

  if (element)
    {
      var eventWindow = element.DIEventWindow;

      for (var i = 0; i < eventWindow.listeners.length; ++i)
        element.removeEventListener (eventWindow.listeners[i],
                                     DI_eventsViewCallback,
                                     true);
      
      document.body.removeChild (element);
    }
}

function DI_clearEventWindowCallback (event)
{
  var element = event.currentTarget;
  while (element && !element.DIEventWindow)
    element = element.parentNode;

  var eventsWindow = element.DIEventWindow;
  if (eventsWindow)
    while (eventsWindow.eventsContainer.firstChild)
      eventsWindow.eventsContainer.removeChild (eventsWindow.eventsContainer.firstChild);
}

function DI_help ()
{
  var container = new DI_Window (20, 20, 600, 400, true, "auto");
  container.addLineText ("DOM Inspector: Help", "bold");

  container.addLineText ("CTRL-f: first child");
  container.addLineText ("CTRL-l: last child");
  container.addLineText ("CTRL-n: next sibling");
  container.addLineText ("CTRL-p: previous sibling");
  container.addLineText ("CTRL-N: next node");
  container.addLineText ("CTRL-P: previous node");
  container.addLineText ("CTRL-u: parent node");
  container.addLineText ("CTRL-L: list properties");
  container.addLineText ("CTRL-t: tree view");
  container.addLineText ("CTRL-d: delete node");
  container.addLineText ("CTRL-e: edit node (text nodes only)");
  container.addLineText ("CTRL-a: append child (last deleted node)");
  container.addLineText ("CTRL-A: append new child");
  container.addLineText ("CTRL-i: insert before (last deleted node)");
  container.addLineText ("CTRL-I: insert new before");
  container.addLineText ("CTRL-s: select element");
  container.addLineText ("ESC: remove highligth");
  
  container.addButton ("Close", DI_closeWindowCallback);
  container.display ();
}

function DI_treeView ()
{
  var container = new DI_Window (20, 20, 600, 400, true, "auto");
  container.addLineText ("DOM Inspector: Tree view", "bold");

  var ancestors = 0;
  var parent = this.highlightElement;
  while (parent && parent != document.body)
    {
      parent = parent.parentNode;
      ancestors += 1;
    }
  
  container.addLineText ("Ancestors up to and including BODY element: " + ancestors, "italic");

  var timeBefore = new Date ();
  this.treeViewRecurse (container, this.highlightElement, 0);
  var timeAfter = new Date ();
  
  container.addLineText ("Creation time: " + (timeAfter - timeBefore) + " ms.", "italic");
  
  container.addButton ("Close", DI_closeWindowCallback);
  container.display ();
}

function DI_treeViewRecurse (container, element, indent)
{
  if (element.nodeName.charAt (0) != "#")
    {
      attributes = this.elementAttributes (element);

      container.openLine ("monospace", true, indent + "px");
      container.addText ("<", "normal", "black");
      container.addText (element.nodeName.toLowerCase (), "bold", "purple");
      for (var i = 0; i < attributes.length; ++i)
        {
          container.addText (" " + attributes[i].name + "=", "bold", "black");
          container.addText ("\"" + attributes[i].value + "\"", "normal", "blue");
        }
      container.addText (">", "normal", "black");
      container.closeLine ();
      
      var child = element.firstChild;
      var had_children = 0;
      while (child)
        {
          if (!this.skipElement (child) || child.nodeName == "#comment")
            had_children += this.treeViewRecurse (container, child, indent + 10);

          child = child.nextSibling;
        }
      
      if (had_children)
        {
          container.openLine ("monospace", true, indent + "px");
          container.addText ("</", "normal", "black");
          container.addText (element.nodeName.toLowerCase (), "bold", "purple");
          container.addText (">", "normal", "black");
          container.closeLine ();
        }
      
      return had_children + 1;
    }
  else if (element.nodeName == "#text")
    {
      container.openLine ("monospace", false, indent + "px");
      container.addText (element.data, "normal", "black");
      container.closeLine ();      
      return 1;
    }
  else if (element.nodeName == "#comment")
    {
      container.openLine ("monospace", false, indent + "px");
      container.addText ("<-- " + element.data + " -->", "italic", "green");
      container.closeLine ();
      return 1;
    }
}

function DI_Attribute (name, value)
{
  this.name = name;
  this.value = value;
}

function DI_elementAttributes (element)
{
  var attributes = new Array ();
  
  switch (element.nodeName)
    {
    case "IMG":
      if (element.src)
        attributes[attributes.length] = new DI_Attribute ("src", element.src);
      break;

    case "A":
      if (element.href)
        attributes[attributes.length] = new DI_Attribute ("href", element.href);
      break;

    case "OPTION":
      if (element.value)
        attributes[attributes.length] = new DI_Attribute ("value", element.value);
      break;

    case "SCRIPT":
      if (element.src)
        attributes[attributes.length] = new DI_Attribute ("src", element.src);
      break;

    case "INPUT":
      if (element.type)
        attributes[attributes.length] = new DI_Attribute ("type", element.type);
      if (element.value)
        attributes[attributes.length] = new DI_Attribute ("value", element.value);
      break;
    }

  return attributes;
}

function DI_selectElement ()
{
  document.body.addEventListener ("click", DI_selectClick, true);
  document.body.addEventListener ("mousemove", DI_selectMove, true);
}

function DI_selectClick (event)
{
  document.body.removeEventListener ("click", DI_selectClick, true);
  document.body.removeEventListener ("mousemove", DI_selectMove, true);
  event.stopPropagation ();
  event.preventDefault ();
}

function DI_selectMove (event)
{
  var element = event.target;

  while (element.nodeName.charAt (0) == "#" && element.nodeName != "#text")
    element = element.parentNode;

  var parent = element;
  while (parent && parent != dom_inspector.mainElement)
    parent = parent.parentNode;

  if (parent != dom_inspector.mainElement)
    dom_inspector.highlightOn (element);
  
  event.stopPropagation ();
  event.preventDefault ();
}

function DI_appendChild ()
{
  if (this.deletedElement && this.highlightElement)
    {
      this.highlightElement.appendChild (this.deletedElement);
      this.deletedElement = null;
    }
}

function DI_appendChildNew ()
{
  if (this.highlightElement)
    {
      var tag = prompt ("Tag name (\"DIV\", \"SPAN\", ...; or \"#text\"):");
      if (tag)
        {
          if (tag == "#text")
            {
              var text = prompt ("Text:");
              element = document.createTextNode (text);
            }
          else
            {
              element = document.createElement (tag);
              this.highlightElement.appendChild (element);
              this.highlightOn (element);
            }
        }
    }
  else
    alert ("No highlighted element.");
}

function DI_insertBefore ()
{
  if (this.highlightElement != document.body)
    if (this.deletedElement && this.highlightElement)
      {
        this.highlightElement.parentNode.insertBefore (this.deletedElement, this.highlightElement);
        this.deletedElement = null;
      }
}

function DI_insertBeforeNew ()
{
  if (this.highlightElement != document.body)
    if (this.highlightElement)
      {
        var tag = prompt ("Tag name (\"DIV\", \"SPAN\", ...; or \"#text\"):");
        var element;
        
        if (tag)
          {
            if (tag == "#text")
              {
                var text = prompt ("Text:");
                element = document.createTextNode (text);
              }
            else
              {
                element = document.createElement (tag);
                this.highlightElement.parentNode.insertBefore (element, this.highlightElement);
                this.highlightOn (element);
              }
          }
      }
}

function DI_keypress (event)
{
  var di = dom_inspector;
  var keyCode = event.which;

  if (!(event.ctrlKey || event.altKey || event.metaKey))
    {
      if (event.keyCode == 27)
        di.highlightOff ();
      else
        return;
      
      event.stopPropagation ();
      event.preventDefault ();
    }  	
  if (event.ctrlKey && !(event.altKey || event.metaKey))
    {
      var ch = String.fromCharCode (keyCode);

      if (event.shiftKey)
        ch = ch.toUpperCase ();
      else
        ch = ch.toLowerCase ();

      if (di.highlightElement)
        {
          if (ch == 'f')
            di.firstChild ();
          else if (ch == 'l')
            di.lastChild ();
          else if (ch == 'n')
            di.nextSibling ();
          else if (ch == 'p')
            di.previousSibling ();
          else if (ch == 'N')
            di.nextNode ();
          else if (ch == 'P')
            di.previousNode ();
          else if (ch == 'u')
            di.parentNode ();
          else if (ch == 'e')
            di.edit ();
          else if (ch == 'd')
            di.deleteNode ();
          else if (ch == 'L')
            di.listProperties ();
          else if (ch == 't')
            di.treeView ();
          else if (ch == 'a')
            di.appendChild ();
          else if (ch == 'i')
            di.insertBefore ();
          else if (ch == 'A')
            di.appendChildNew ();
          else if (ch == 'I')
            di.insertBeforeNew ();
          else if (keyCode == 27)
            di.highlightOff ();
          else if (ch == 's')
            di.selectElement ();
          else
            return;
        }
      else if (ch == 's')
        di.selectElement ();
      else
        return;

      event.stopPropagation ();
      event.preventDefault ();
    }
}
  
function DI_updateInformation ()
{
  var container = this.mainElement.firstChild;
  var element = this.highlightElement;
  
  while (container && container.id != "information")
    container = container.nextSibling;

  if (!container)
    {
      container = document.createElement ("DIV");
      container.id = "information";
      container.style.marginTop = "10px";
      this.mainElement.appendChild (container);
    }

  while (container.firstChild)
    container.removeChild (container.firstChild);

  function createLine (text)
    {
      var line = document.createElement ("DIV");
      line.appendChild (document.createTextNode (text));
      return line;
    }

  if (element)
    {
      if (element.nodeName == "#text")
        {
          container.appendChild (createLine ("TextNode"));
          container.appendChild (createLine ("Data: " + element.data));
        }
      else
        {
          container.appendChild (createLine ("Element"));
          container.appendChild (createLine ("Tag: " + element.nodeName));
          if (element.hasAttribute ("id"))
            container.appendChild (createLine ("Id: " + element.id));
          if (element.hasAttribute ("class"))
            container.appendChild (createLine ("Class: " + element.className));
        }
      
      var div = document.createElement ("DIV");
      var a = document.createElement ("A");
      a.href = "javascript:dom_inspector.listProperties ();";
      a.style.color = "blue";
      a.appendChild (document.createTextNode ("List properties"));
      div.appendChild (a);
      container.appendChild (div);
  
      var div = document.createElement ("DIV");
      var a = document.createElement ("A");
      a.href = "javascript:dom_inspector.treeView ();";
      a.style.color = "blue";
      a.appendChild (document.createTextNode ("Tree view"));
      div.appendChild (a);
      container.appendChild (div);
  
      var div = document.createElement ("DIV");
      var a = document.createElement ("A");
      a.href = "javascript:dom_inspector.eventsView ();";
      a.style.color = "blue";
      a.appendChild (document.createTextNode ("Events view"));
      div.appendChild (a);
      container.appendChild (div);
    }
  
  var div = document.createElement ("DIV");
  var a = document.createElement ("A");
  a.href = "javascript:dom_inspector.selectElement ();";
  a.style.color = "blue";
  a.appendChild (document.createTextNode ("Select element"));
  div.style.marginTop = "10px";
  div.appendChild (a);
  container.appendChild (div);
  
  var div = document.createElement ("DIV");
  var a = document.createElement ("A");
  a.href = "javascript:dom_inspector.help ();";
  a.style.color = "blue";
  a.appendChild (document.createTextNode ("Help"));
  div.appendChild (a);
  container.appendChild (div);
}

if (document.body.style.getPropertyValue &&
    document.body.style.setProperty &&
    document.body.style.removeProperty)
  DI_highlightPulse = DI_highlightPulseAdvanced;
else
  DI_highlightPulse = DI_highlightPulseSimple;

var dom_inspector = new DomInspector ();
