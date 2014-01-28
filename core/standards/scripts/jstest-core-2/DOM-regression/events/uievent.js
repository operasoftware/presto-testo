/* DOM 2 Events -- UIEvent */

function startUIEvent()
{
  var cvs = "$Id: uievent.js 4838 2006-01-18 05:59:01Z hallvord $";

  testmodule("DOM 2 Events -- UIEvent", cvs);

  try
  {
    testcase("initUIEvent");

    var ev = document.createEvent("UIEvents");
    checkUIEventPropertiesAndFunction(ev);

    ev.initUIEvent("DOMActivate", true, false, window, 4711);

    test("ev.type", ev.type, "DOMActivate");
    test("ev.target", ev.target, null);
    test("ev.currentTarget", ev.currentTarget, null);
    test("ev.eventPhase", ev.eventPhase, Event.CAPTURING_PHASE);
    test("ev.bubbles", ev.bubbles, true);
    test("ev.cancelable", ev.cancelable, false);
    ttrue("ev.timeStamp", (ev.timeStamp - (new Date()).valueOf()) < 50);
    test("ev.view", ev.view, window);
    test("ev.detail", ev.detail, 4711);
  }
  catch (e)
  {
    exception(e);
  }

  testmodule_finished();
}

function checkUIEventPropertiesAndFunction(ev)
{
  var tprop = checkEventPropertiesAndFunction(ev);
  tprop("view", "object");
  tprop("detail", "number");
  tprop("initUIEvent", "function");
  return tprop;
}
