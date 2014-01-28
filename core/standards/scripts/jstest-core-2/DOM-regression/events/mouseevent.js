/* DOM 2 Events -- MouseEvent */

function startMouseEvent()
{
  var cvs = "$Id: mouseevent.js 4838 2006-01-18 05:59:01Z hallvord $";

  testmodule("DOM 2 Events -- MouseEvent", cvs);

  try
  {
    testcase("initMouseEvent");

    var ev = document.createEvent("MouseEvents");
    checkMouseEventPropertiesAndFunction(ev);

    ev.initMouseEvent("mousemove", true, false, window, 4711, 13, 14, 15, 16, false, true, false, true, 13, document);

    test("ev.type", ev.type, "mousemove");
    test("ev.target", ev.target, null);
    test("ev.currentTarget", ev.currentTarget, null);
    test("ev.eventPhase", ev.eventPhase, Event.CAPTURING_PHASE);
    test("ev.bubbles", ev.bubbles, true);
    test("ev.cancelable", ev.cancelable, false);
    ttrue("ev.timeStamp", (ev.timeStamp - (new Date()).valueOf()) < 50);
    test("ev.view", ev.view, window);
    test("ev.detail", ev.detail, 4711);
    test("ev.screenX", ev.screenX, 13);
    test("ev.screenY", ev.screenY, 14);
    test("ev.clientX", ev.clientX, 15);
    test("ev.clientY", ev.clientY, 16);
    test("ev.ctrlKey", ev.ctrlKey, false);
    test("ev.altKey", ev.altKey, true);
    test("ev.shiftKey", ev.shiftKey, false);
    test("ev.metaKey", ev.metaKey, true);
    test("ev.relatedTarget", ev.relatedTarget, document);
  }
  catch (e)
  {
    exception(e);
  }

  testmodule_finished();
}

function checkMouseEventPropertiesAndFunction(ev)
{
  var tprop = checkUIEventPropertiesAndFunction(ev);
  tprop("screenX", "number");
  tprop("screenY", "number");
  tprop("clientX", "number");
  tprop("clientY", "number");
  tprop("ctrlKey", "boolean");
  tprop("shiftKey", "boolean");
  tprop("altKey", "boolean");
  tprop("metaKey", "boolean");
  tprop("button", "number");
  tprop("relatedTarget", "object");
  tprop("initMouseEvent", "function");
  return tprop;
}
