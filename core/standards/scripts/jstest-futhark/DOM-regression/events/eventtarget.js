/* DOM 2 Events -- EventTarget */

function startEventTarget()
{
  var cvs = "$Id: eventtarget.js 10655 2006-12-18 15:47:57Z hallvord $";

  testmodule("DOM 2 Events -- EventTarget", cvs);

  try
  {
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");
    var div3 = document.getElementById("div3");
    var a1 = document.getElementById("a1");

    testcase("Properties and functions exists");

    var tprop = make_tprop(div1);
    tprop("addEventListener", "function");
    tprop("removeEventListener", "function");
    tprop("dispatchEvent", "function");

    testcase("addEventListener");

    var flags1 = [];
    var div1listener = function (ev) { flags1.push("div1"); };
    var div2listener = function (ev) { flags1.push("div2"); };
    var div3listener = function (ev) { flags1.push("div3"); };

    div1.addEventListener("click", div1listener, false);
    div2.addEventListener("click", div2listener, true);
    div3.addEventListener("click", div3listener, false);

    a1.click();

    test("event seen at div2 first", flags1[0], "div2");
    test("event seen at div3 second", flags1[1], "div3");
    test("event seen at div1 third", flags1[2], "div1");

    testcase("removeEventListener");

    var flags2 = [];
    var div1listener = function (ev) { flags2.push("div1"); };
    var div2listener = function (ev) { flags2.push("div2"); };
    var div3listener = function (ev) { flags2.push("div3"); };

    div1.addEventListener("click", div1listener, false);
    div2.addEventListener("click", div2listener, true);
    div3.addEventListener("click", div3listener, false);
    div1.removeEventListener("click", div1listener, false);
    div2.removeEventListener("click", div2listener, true);
    div3.removeEventListener("click", div3listener, false);

    a1.click();

    test("event not seen", flags2.length, 0);

    testcase("dispatchEvent");

    var flags3 = {};
    var div1listener = function (ev) { flags3["div1"] = true; };
    var div2listener = function (ev) { flags3["div2"] = true; };
    var div3listener = function (ev) { flags3["div3"] = true; };

    div1.addEventListener("DOMActivate", div1listener, false);
    div2.addEventListener("DOMActivate", div2listener, false);
    div3.addEventListener("DOMActivate", div3listener, false);

    var ev = document.createEvent("UIEvents");
    ev.initUIEvent("DOMActivate", true, true, window, 0);

    div2.dispatchEvent(ev);

    ttrue("event not seen at div3", !("div3" in flags3));
    ttrue("event seen at div2", "div2" in flags3);
    ttrue("event seen at div1", "div1" in flags3);
  }
  catch (e)
  {
    exception(e);
  }

  testmodule_finished();
}
