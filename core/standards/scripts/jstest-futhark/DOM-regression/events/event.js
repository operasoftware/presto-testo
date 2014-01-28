/* DOM 2 Events -- Event */

function startEvent()
{ 
  var cvs = "$Id: event.js 22442 2008-01-21 08:02:34Z hallvord $";

  testmodule("DOM 2 Events -- Event", cvs);

  try
  {
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");
    var div3 = document.getElementById("div3");
    var a1 = document.getElementById("a1");
    var a2 = document.getElementById("a2");

    testcase("Event constants");

    var tprop = make_tprop(Event);
    tprop("CAPTURING_PHASE", "number");
    tprop("AT_TARGET", "number");
    tprop("BUBBLING_PHASE", "number");

    test("CAPTURING_PHASE", Event.CAPTURING_PHASE, 1);
    test("AT_TARGET", Event.AT_TARGET, 2);
    test("BUBBLING_PHASE", Event.BUBBLING_PHASE, 3);

    testcase("Properties and functions exists");
    
    checkEventPropertiesAndFunction(event);

    testcase("initEvent");

    var ev = document.createEvent("HTMLEvents");
    ev.initEvent("focus", true, false);

    test("ev.type", ev.type, "focus");
    test("ev.target", ev.target, null);
    test("ev.currentTarget", ev.currentTarget, null);
    test("ev.eventPhase", ev.eventPhase, Event.CAPTURING_PHASE);
    test("ev.bubbles", ev.bubbles, true);
    test("ev.cancelable", ev.cancelable, false);
    ttrue("ev.timeStamp", (ev.timeStamp - (new Date()).valueOf()) < 50);

    testcase("stopPropagation");

    var do_stop = true;
    
    var flags1 = {};
    var div1listener = function (ev) { flags1["div1"] = true; };
    var div2listener = function (ev) { flags1["div2"] = true; if (do_stop) ev.stopPropagation(); };
    var div3listener = function (ev) { flags1["div3"] = true; };

    div1.addEventListener("click", div1listener, false);
    div2.addEventListener("click", div2listener, false);
    div3.addEventListener("click", div3listener, false);

    a1.click();

    ttrue("event seen at div3", "div3" in flags1);
    ttrue("event seen at div2", "div2" in flags1);
    ttrue("event not seen at div1", !("div1" in flags1));

    testcase("preventDefault");

    do_stop = false;
    
    var flags1 = {};
    var div1listener = function (ev) { flags1["div1"] = true; };
    var div2listener = function (ev) { flags1["div2"] = true; ev.preventDefault(); };
    var div3listener = function (ev) { flags1["div3"] = true; };

    div1.addEventListener("click", div1listener, false);
    div2.addEventListener("click", div2listener, false);
    div3.addEventListener("click", div3listener, false);

    a2clicked = function (ev) { clearTimeout(timer); ttrue("default action not performed", false); continueTest(); }
    a2notclicked = function (ev) { clearTimeout(timer); ttrue("default action not performed", true);continueTest(); }

    var timer = setTimeout(a2notclicked, 500);
    a2.click();

    ttrue("event seen at div3", "div3" in flags1);
    ttrue("event seen at div2", "div2" in flags1);
    ttrue("event seen at div1", "div1" in flags1);
  }
  catch (e)
  {
    exception(e);
    testmodule_finished();
  }
}

function continueTest()
{
  testmodule_finished();
}

function checkEventPropertiesAndFunction(ev)
{
  var tprop = make_tprop(ev);
  tprop("type", "string");
  tprop("target", "object");
  tprop("currentTarget", "object");
  tprop("eventPhase", "number");
  tprop("bubbles", "boolean");
  tprop("cancelable", "boolean");
  tprop("timeStamp", "number");
  tprop("stopPropagation", "function");
  tprop("preventDefault", "function");
  tprop("initEvent", "function");
  return tprop;
}
