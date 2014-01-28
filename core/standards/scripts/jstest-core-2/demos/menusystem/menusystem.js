var MENUTYPE_MAIN = 1;
var MENUTYPE_SUBMENU = 2;
var MENUTYPE_LINK = 3;
var MENUTYPE_SEPARATOR = 4;

var SUBMENU_CLASS = "class_submenu";
var SUBMENU_ITEM_CLASS = "class_submenu_item";
var LINK_CLASS = "class_link";
var SEPARATOR_CLASS = "class_separator";

var MENUHTML_LABELS = 1;
var MENUHTML_SUBMENUS = 2;

var MENUPOS_UNDER = 1;
var MENUPOS_LEFT = 2;
var MENUPOS_RIGHT = 3;

var menu_timeout_id = undefined;
var menu_timeout_length = 500;
var menu_timeout_object = undefined;

function Features ()
{
  // Uses DOM 2 Core+HTML to generate the menu system.
  this.dom2 = false;
  
  // Uses document.write to generate the menu system.
  this.document_write = false;

  // Uses innerHTML and insertAdjacentHTML to generate the menu
  // system.
  this.innerHTML = false;
  
  // Assigns event listeners using EventTarget.addEventListener.
  // Ex: element.addEventListener ("onclick", function, false);
  this.dom2_events = false;

  // Assigns event listeners as JS properties.
  // Ex: element.onclick = function;
  this.js_events = false;

  // Assigns event listeners through HTML attributes.
  // Ex: <element onclick="function ()">
  this.html_events = false;

  // Disables use of event.currentTarget (needed for MSIE).
  this.MSIE_compatible = false;
  
  // Uses EventTarget.dispatchEvent to relay events from one element
  // to another.
  this.dom2_events_relay = false;

  // Uses DocumentEvent.createElement and MouseEvent.initMouseEvent
  // to copy the relayed event if features.dom2_events_relay == true.
  this.dom2_events_copy = false;

  this.verify = featuresVerify;
}

function featuresVerify ()
{
  var count = 0;

  if (this.dom2)
    ++count;
  if (this.document_write)
    ++count;
  if (this.innerHTML)
    ++count;

  if (count != 1)
    alert ("Exactly one of features.dom2, features.document_write and features.innerHTML should be true.");

  count = 0;

  if (this.dom2_events)
    ++count;
  if (this.js_events)
    ++count;
  if (this.html_events)
    ++count;

  if (count != 1)
    alert ("Exactly one of features.dom2_events, features.js_events and features.html_events should be true.");

  if (this.dom2 && this.html_events)
    alert ("Invalid combination: features.dom2 and features.html_events.");

  if (!this.dom2_events_relay && this.dom2_events_copy)
    alert ("Pointless combination: features.dom2_events_copy but not features.dom2_events_relay.");
}

var features = new Features ();

function MenuItem (type)
{
  this._type = type;

  this._id = undefined;
  this.getId = menuGetId;
  this.setId = menuSetId;
  this.findById = menuFindById;

  this._class = undefined;
  this.getClass = menuGetClass;
  this.setClass = menuSetClass;
  
  this._parent = undefined;
  this.getParent = menuGetParent;
  this.setParent = menuSetParent;
  
  if (type == MENUTYPE_MAIN ||
      type == MENUTYPE_SUBMENU)
    {
      this._items = new Array ();
      this.addItem = menuAddItem;

      this._item_class = undefined;
      this.getItemClass = menuGetItemClass;
      this.setItemClass = menuSetItemClass;

      this._focused_item = undefined;
      this.setFocusedItem = menuSetFocusedItem;
      
      if (type == MENUTYPE_MAIN)
        {
          this._container = undefined;
          this.setContainer = menuSetContainer;

          this.generateHTML = menuGenerateMainHTML;
          this.createElements = menuCreateMainElements;
          this.addLabel = menuAddLabelMain;
          
          this.writeContainerHTML = menuWriteContainerHTML;
          this.writeOtherHTML = menuWriteOtherHTML;
          
          this.blur = menuBlurMain;
        }
      else
        {
          this._label = "N/A";
          this.getLabel = menuGetLabel;
          this.setLabel = menuSetLabel;
          
          this.generateHTML = menuGenerateSubmenuHTML;
          this.createElements = menuCreateSubmenuElements;
          this.addLabel = menuAddLabelSubmenu;
          this.setupElement = menuSetupElementSubmenu;
          
          this.getSubmenuElement = menuGetSubmenuElement;

          this.focus = menuFocusSubmenu;
          this.blur = menuBlurSubmenu;

          this._focusFgColor = "white";
          this._focusBgColor = "blue";
          this._blurFgColor = "blue";
          this._blurBgColor = "white";

          this._position = undefined;
          this.getPosition = menuGetPosition;
          this.setPosition = menuSetPosition;
        }
    }
  else if (type == MENUTYPE_LINK)
    {
      this._label = "N/A";
      this.getLabel = menuGetLabel;
      this.setLabel = menuSetLabel;

      this._url = "javascript:alert (\"No url set.\");";
      this.getURL = menuGetURL;
      this.setURL = menuSetURL;
      
      this._target = undefined;
      this.getTarget = menuGetTarget;
      this.setTarget = menuSetTarget;
      
      this.generateHTML = menuGenerateLinkHTML;
      this.createElements = menuCreateLinkElements;
      this.setupElement = menuSetupElementLink;

      this.focus = menuFocusLink;
      this.blur = menuBlurLink;

      this._focusFgColor = "white";
      this._focusBgColor = "blue";
      this._blurFgColor = "blue";
      this._blurBgColor = "white";

      this.getLinkElement = menuGetLinkElement;
    }
  else if (type == MENUTYPE_SEPARATOR)
    this.generateHTML = menuGenerateSeparatorHTML;

  this.getLabelElement = menuGetLabelElement;
  this.updateMaxDepth = menuUpdateMaxDepth;
}

function menuGetId ()
{
  if (this._parent)
    {
      //alert ("Debug getId:\nparent.items.length: " +
      //       this._parent._items.length);
      
      for (var i = 0; i < this._parent._items.length; ++i)
        {
          //alert ("Debug getId:\nparent.items[" + i + "]: " +
          //       this._parent._items[i]);
      
          if (this._parent._items[i] == this)
            return this._parent.getId () + "-" + i;
        }
      
      alert ("Function getId: object not found among parent's items.");
      return;
    }
  else
    {
      if (!this._id)
        {
          alert ("Function getId called on object with no parent and no id.");
          return;
        }
      
      return this._id;
    }
}

function menuSetId (id)
{
  this._id = id;
}

function menuFindById (id)
{
  if (this._id == id)
    return this;
  else if (this._type == MENUTYPE_MAIN ||
           this._type == MENUTYPE_SUBMENU)
    {
      for (var i = 0; i < this._items.length; ++i)
        {
          var item = this._items[i].findById (id);
          if (item)
            return item;
        }
    }

  return undefined;
}

function menuGetClass ()
{
  if (this._class)
    return this._class;
  else if (this._type == MENUTYPE_SUBMENU)
    return SUBMENU_CLASS;
  else if (this._type == MENUTYPE_LINK)
    return LINK_CLASS;
  else if (this._type == MENUTYPE_SEPARATOR)
    return SEPARATOR_CLASS;
}

function menuSetClass (cls)
{
  this._class = cls;
}

function menuGetParent ()
{
  return this._parent;
}

function menuSetParent (parent)
{
  this._parent = parent;
}

function menuGetLabel ()
{
  return this._label;
}

function menuSetLabel (label)
{
  this._label = label;
}

function menuGetURL ()
{
  return this._url;
}

function menuSetURL (url)
{
  this._url = url;
}

function menuGetTarget ()
{
  return this._target;
}

function menuSetTarget (target)
{
  this._target = target;
}

function menuGetPosition ()
{
  return this._position;
}

function menuSetPosition (position)
{
  this._position = position;
}

function menuAddItem (item)
{
  if (this._type != MENUTYPE_MAIN &&
      this._type != MENUTYPE_SUBMENU)
    {
      alert ("Function addItem called on wrong type of object: " +
             this.toString ());
      return;
    }
  
  if (item.type == MENUTYPE_MAIN)
    {
      alert ("Attempted to add main menu as a child.");
      return;
    }
  
  this._items[this._items.length] = item;
  item.setParent (this);
}

function menuGetItemClass ()
{
  if (this._item_class)
    return this._item_class;
  else
    return SUBMENU_ITEM_CLASS;
}

function menuSetItemClass (cls)
{
  this._item_class = cls;
}

function menuSetContainer (container)
{
  if (this._type != MENUTYPE_MAIN)
    {
      alert ("Function setContainer called on wrong type of object: " +
             this.toString ());
      return;
    }
  
  this._container = container;
  
  if (features.innerHTML)
    {
      this._container.innerHTML = this.generateHTML (MENUHTML_LABELS);
      document.body.insertAdjacentHTML ("beforeEnd", this.generateHTML (MENUHTML_SUBMENUS));
    }
  else if (features.dom2)
    this.createElements ();

  for (var i = 0; i < this._items.length; ++i)
    this._items[i].setupElement ();
}

function menuWriteContainerHTML ()
{
  if (features.document_write)
    document.write (this.generateHTML (MENUHTML_LABELS));
}

function menuWriteOtherHTML ()
{
  if (features.document_write)
    document.write (this.generateHTML (MENUHTML_SUBMENUS));
}

function menuGenerateMainHTML (key)
{
  html = "";

  if (key == MENUHTML_LABELS)
    {
      for (var i = 0; i < this._items.length; ++i)
        html += this._items[i].generateHTML (MENUHTML_LABELS);
    }
  else
    {
      this.updateMaxDepth ();
      
      for (var depth = 0; depth < this._maxdepth; ++depth)
        for (var i = 0; i < this._items.length; ++i)
          html += this._items[i].generateHTML (MENUHTML_SUBMENUS, depth);
    }
  
  return html;
}

function menuCreateMainElements ()
{
  for (var i = 0; i < this._items.length; ++i)
    this._items[i].createElements (this);
}

function menuAddLabelMain (label)
{
  this._container.appendChild (label);
}

function menuGenerateSubmenuHTML (key, depth)
{
  html = "";
  
  if (key == MENUHTML_LABELS)
    {
      html += "<span";
      html += " class=\"" + this.getClass () + "\"";
      html += " id=\"label_" + this.getId () + "\"";
      if (features.html_events)
        {
          html += " onmouseover=\"menuMouseoverSubmenu (arguments[0]);\"";
          html += " onmouseout=\"menuMouseoutSubmenu (arguments[0]);\"";
        }
      html += ">";
      html += this.getLabel ();
      html += "</span>";
    }
  else if (key == MENUHTML_SUBMENUS)
    {
      if (!depth)
        {
          html += "<div";
          html += " class=\"" + this.getClass () + "\"";
          html += " id=\"submenu_" + this.getId () + "\"";
          if (features.html_events)
            html += " onmouseout=\"menuMouseoutSubmenu (arguments[0]);\"";
          html += ">";

          for (var i = 0; i < this._items.length; ++i)
            {
              html += "<div";
              html += " class=\"" + this.getItemClass () + "\"";
              if (features.html_events)
                {
                  html += " onmouseover=\"menuMouseEventSubmenuItem (arguments[0]);\"";
                  html += " onmouseout=\"menuMouseEventSubmenuItem (arguments[0]);\"";
                }
              html += ">";
          
              html += this._items[i].generateHTML (MENUHTML_LABELS);
              html += "</div>";
            }
          
          html += "</div>";
        }
      else
        for (var i = 0; i < this._items.length; ++i)
          html += this._items[i].generateHTML (MENUHTML_SUBMENUS, depth - 1);
    }
  
  return html;
}

function menuCreateSubmenuElements ()
{
  var label = document.createElement ("SPAN");
  //alert (label);
  
  label.className = this.getClass ();
  label.id = "label_" + this.getId ();
  label.appendChild (document.createTextNode (this.getLabel ()));
  this._parent.addLabel (label);

  var submenu = document.createElement ("DIV");
  submenu.className = this.getClass ();
  submenu.id = "submenu_" + this.getId ();
  document.body.appendChild (submenu);

  for (var i = 0; i < this._items.length; ++i)
    this._items[i].createElements (this);
}

function menuAddLabelSubmenu (label)
{
  var holder = document.createElement ("DIV");
  holder.className = this.getItemClass ();
  holder.appendChild (label);

  this.getSubmenuElement ().appendChild (holder);
}

function menuGenerateLinkHTML (key)
{
  html = "";
  
  if (key == MENUHTML_LABELS)
    {
      html += "<span";
      html += " class=\"" + this.getClass () + "\"";
      html += " id=\"label_" + this.getId () + "\"";
      if (features.html_events)
        {
          html += " onmouseover=\"menuMouseoverLink (arguments[0]);\"";
          html += " onmouseout=\"menuMouseoutLink (arguments[0]);\"";
          html += " onclick=\"menuClickLink (arguments[0]);\"";
        }
      html += ">";

      html += "<a";
      html += " class=\"" + this.getClass () + "\"";
      html += " id=\"link_" + this.getId () + "\"";
      html += " href=\"" + this.getURL () + "\"";
      html += ">";
      
      html += this.getLabel ();
      html += "</a>";
      html += "</span>";
    }
  
  return html;
}

function menuCreateLinkElements ()
{
  var label = document.createElement ("SPAN");
  //alert (label);
  
  label.className = this.getClass ();
  label.id = "label_" + this.getId ();
  
  var link = document.createElement ("A");
  link.className = this.getClass ();
  link.id = "link_" + this.getId ();
  link.href = this.getURL();
  link.appendChild (document.createTextNode (this.getLabel ()));
  label.appendChild (link);
  
  this._parent.addLabel (label);
}

function menuGenerateSeparatorHTML (key)
{
  html = "";

  if (key == MENUHTML_LABELS)
    {
      html += "<span";
      html += " class=\"" + this.getClass () + "\"";
      html += " id=\"label_" + this.getId () + "\"";
      html += ">";

      html += "<hr";
      html += " class=\"" + this.getClass () + "\"";
      html += " id=\"link_" + this.getId () + "\"";
      html += ">";
      
      html += "</hr>";
      html += "</span>";
    }
  
  return html;
}

function menuGetLabelElement ()
{
  var element = document.getElementById ("label_" + this.getId ());

  if (!element)
    {
      alert ("Function getLabelElement: element not found.");
      return;
    }
  else
    return element;
}

function menuGetSubmenuElement ()
{
  if (this._type != MENUTYPE_SUBMENU)
    {
      alert ("Function getSubmenuElement called on wrong type of object.");
      return;
    }
  
  var element = document.getElementById ("submenu_" + this.getId ());

  if (!element)
    {
      alert ("Function getSubmenuElement: element not found.");
      return;
    }
  else
    return element;
}

function menuGetLinkElement ()
{
  var element = document.getElementById ("link_" + this.getId ());

  if (!element)
    {
      alert ("Function getLinkElement: element not found.");
      return;
    }
  else
    return element;
}

function menuUpdateMaxDepth (depth)
{
  if (depth == undefined)
    {
      if (this._type == MENUTYPE_MAIN ||
          this._type == MENUTYPE_SUBMENU)
        {
          for (var i = 0; i < this._items.length; ++i)
            this._items[i].updateMaxDepth ();

          if (this._parent)
            this._parent.updateMaxDepth (1);
          else if (!this._maxdepth)
            this._maxdepth = 0;
        }
    }
  else
    {
      if (this._parent)
        this._parent.updateMaxDepth (depth + 1);
      else if (!this._maxdepth || depth > this._maxdepth)
        this._maxdepth = depth;
    }
}

function menuOnload ()
{
}

function menuSetupElementSubmenu ()
{
  var label = this.getLabelElement ();
  if (label)
    {
      label.menuObject = this;

      if (features.dom2_events)
        {
          label.addEventListener ("mouseover", menuMouseoverSubmenu, false);
          label.addEventListener ("mouseout", menuMouseoutSubmenu, false);
        }
      else if (features.js_events)
        {
          label.onmouseover = menuMouseoverSubmenu;
          label.onmouseout = menuMouseoutSubmenu;
        }
      
      label.style.color = this._blurFgColor;
      label.style.backgroundColor = this._blurBgColor;
    }
  else
    alert ("Label element not found!");
  
  var submenu = this.getSubmenuElement ();
  if (submenu)
    {
      //submenu.style.visibility = "hidden";
      
      submenu.menuObject = this;
      if (features.dom2_events)
        submenu.addEventListener ("mouseout", menuMouseoutSubmenu, false);
      else if (features.js_events)
        submenu.onmouseout = menuMouseoutSubmenu;
      
      var div = submenu.firstChild;
      while (div)
        {
          if (div.className == this.getItemClass ())
            {
              if (features.dom2_events)
                {
                  div.addEventListener ("mouseover", menuMouseEventSubmenuItem, false);
                  div.addEventListener ("mouseout", menuMouseEventSubmenuItem, false);
                }
              else if (features.js_events)
                {
                  div.onmouseover = menuMouseEventSubmenuItem;
                  div.onmouseout = menuMouseEventSubmenuItem;
                }
            }
          
          div = div.nextSibling;
        }
    }
  
  for (var i = 0; i < this._items.length; ++i)
    this._items[i].setupElement ();
}

function menuSetupElementLink ()
{
  var label = this.getLabelElement ();
  var link = this.getLinkElement ();
  
  if (label && link)
    {
      label.menuObject = this;
      
      if (features.dom2_events)
        {
          label.addEventListener ("mouseover", menuMouseoverLink, false);
          label.addEventListener ("mouseout", menuMouseoutLink, false);
          label.addEventListener ("click", menuClickLink, false);
        }
      else if (features.js_events)
        {
          label.onmouseover = menuMouseoverLink;
          label.onmouseout = menuMouseoutLink;
          label.onclick = menuClickLink;
        }

      label.style.color = this._blurFgColor;
      label.style.backgroundColor = this._blurBgColor;

      link.style.color = "inherit";
      link.style.backgroundColor = "inherit";
    }
}

function menuMouseoverSubmenu (event)
{
  var element = features.MSIE_compatible ? this : event.currentTarget;
  var menuObject = element.menuObject;
  
  if (!menuObject)
    {
      alert ("Function menuMouseoverSubmenu: no menuObject found.");
      return;
    }

  menuObject.focus ();
}

function menuMouseoutSubmenu (event)
{
  var element = features.MSIE_compatible ? this : event.currentTarget;
  var menuObject = element.menuObject;
  
  if (!menuObject)
    {
      alert ("Function menuMouseoutSubmenu: no menuObject found.");
      return;
    }

  var target = features.MSIE_compatible ? event.toElement : event.relatedTarget;
  while (target)
    {
      if (target.menuObject)
        break;
      else if (!target.parentNode)
        {
          object = menuObject;
          
          while (object._parent)
            object = object._parent;
          
          menuStartBlurTimeout (object);
          return;
        }
      else
        target = target.parentNode;
    }
  
  if (element == menuObject.getLabelElement ())
    {
      var submenu = menuObject.getSubmenuElement ();
      if (submenu)
        {
          var relTarget = features.MSIE_compatible ? event.toElement : event.relatedTarget;
          
          while (relTarget)
            if (submenu == relTarget)
              return;
            else
              relTarget = relTarget.parentNode;
          
          menuStartBlurTimeout (menuObject);
        }
    }
  else if (element == menuObject.getSubmenuElement ())
    {
      var relTarget = features.MSIE_compatible ? event.toElement : event.relatedTarget;
      while (relTarget)
        if (element == relTarget)
          return;
        else
          relTarget = relTarget.parentNode;
      
      if (menuObject._focused_item &&
          menuObject._focused_item._type == MENUTYPE_SUBMENU)
        {
          var submenu = menuObject._focused_item.getSubmenuElement ();
          if (submenu)
            {
              var relTarget = features.MSIE_compatible ? event.toElement : event.relatedTarget;
          
              while (relTarget)
                if (submenu == relTarget)
                  return;
                else
                  relTarget = relTarget.parentNode;
            }
        }
      
      menuObject.blur ();
    }
}

function menuMouseoverLink (event)
{
  var element = features.MSIE_compatible ? this : event.currentTarget;
  var menuObject = element.menuObject;

  if (!menuObject)
    {
      alert ("Function menuMouseoverLink: no menuObject found.");
      return;
    }

  menuObject.focus ();
}

function menuMouseoutLink (event)
{
  var element = features.MSIE_compatible ? this : event.currentTarget;
  var menuObject = element.menuObject;
  
  if (!menuObject)
    {
      alert ("Function menuMouseoutLink: no menuObject found.");
      return;
    }

  menuObject.blur ();
}

function menuClickLink (event)
{
  var element = features.MSIE_compatible ? this : event.currentTarget;
  var menuObject = element.menuObject;
  
  if (!menuObject)
    {
      alert ("Function menuClickLink: no menuObject found.");
      return;
    }

  var object = menuObject;
  while (object._parent)
    object = object._parent;

  object.blur ();
}

function menuSetFocusedItem (item)
{
  if (this._focused_item && this._focused_item != item)
    this._focused_item.blur ();
  
  this._focused_item = item;
}

function menuBlurMain ()
{
  if (this._focused_item)
    this._focused_item.blur ();
}

function menuFocusSubmenu ()
{
  menuStopBlurTimeout ();
  
  this._parent.setFocusedItem (this);
  this.setFocusedItem ();

  var label = this.getLabelElement ();
  var submenu = this.getSubmenuElement ();
  if (submenu && label)
    {
      if (this.getPosition () == MENUPOS_UNDER)
        {
          submenu.style.left = absoluteLeft (label);
          submenu.style.top = absoluteTop (label) + label.offsetHeight;
        }
      else if (this.getPosition () == MENUPOS_LEFT)
        {
          submenu.style.left = absoluteLeft (label) + label.offsetWidth;
          submenu.style.top = absoluteTop (label);
        }
      else if (this.getPosition () == MENUPOS_RIGHT)
        {
          submenu.style.left = absoluteLeft (label) - submenu.offsetWidth;
          submenu.style.top = absoluteTop (label);
        }
      
      submenu.style.visibility = "visible";

      label.style.color = this._focusFgColor;
      label.style.backgroundColor = this._focusBgColor;
    }
}

function menuBlurSubmenu ()
{
  if (this._focused_item)
    this._focused_item.blur ();
  
  var submenu = this.getSubmenuElement ();
  if (submenu)
    submenu.style.visibility = "hidden";
  
  var label = this.getLabelElement ();
  if (label)
    {
      label.style.color = this._blurFgColor;
      label.style.backgroundColor = this._blurBgColor;
    }
}

function menuFocusLink ()
{
  menuStopBlurTimeout ();
  
  this._parent.setFocusedItem (this);
  
  var element = this.getLabelElement ();
  if (element)
    {
      element.style.color = this._focusFgColor;
      element.style.backgroundColor = this._focusBgColor;

      if (this._parent._type == MENUTYPE_SUBMENU &&
          element.parentNode.className == this._parent.getItemClass ())
        {
          element.parentNode.style.color = this._focusFgColor;
          element.parentNode.style.backgroundColor = this._focusBgColor;
        }
    }
}

function menuBlurLink ()
{
  var element = this.getLabelElement ();
  if (element)
    {
      element.style.color = this._blurFgColor;
      element.style.backgroundColor = this._blurBgColor;

      if (this._parent._type == MENUTYPE_SUBMENU &&
          element.parentNode.className == this._parent.getItemClass ())
        {
          element.parentNode.style.color = this._blurFgColor;
          element.parentNode.style.backgroundColor = this._blurBgColor;
        }
    }
}

function absoluteLeft (element)
{
  var left = 0;
  
  while (element)
    {
      left += element.offsetLeft;
      element = element.offsetParent;
    }

  return left;
}

function absoluteTop (element)
{
  var top = 0;
  
  while (element)
    {
      top += element.offsetTop;
      element = element.offsetParent;
    }

  return top;
}

function menuMouseEventSubmenuItem (event)
{
  if (features.dom2_events_relay)
    {
      if (event.target == event.currentTarget &&
          event.relTarget != event.target.firstChild)
        {
          if (features.dom2_events_copy)
            {
              var new_event = document.createEvent ("MouseEvents");
              new_event.initMouseEvent (event.type,
                                        event.bubbles, event.cancelable,
                                        event.view, event.detail,
                                        event.screenX, event.screenY,
                                        event.clientX, event.clientY,
                                        event.ctrlKey, event.altKey,
                                        event.shiftKey, event.metaKey,
                                        event.button, event.relatedTarget);
              event.target.firstChild.dispatchEvent (new_event);
            }
          else
            event.target.firstChild.dispatchEvent (event);
        }
    }
}

function menuStartBlurTimeout (object)
{
  menuStopBlurTimeout ();

  menu_timeout_object = object;
  menu_timeout_id = window.setTimeout (menuBlurTimeout, menu_timeout_length);  
}

function menuStopBlurTimeout ()
{
  if (menu_timeout_id != undefined)
    window.clearTimeout (menu_timeout_id);
}

function menuBlurTimeout ()
{
  menu_timeout_object.blur ();
  menu_timeout_id = undefined;
}
