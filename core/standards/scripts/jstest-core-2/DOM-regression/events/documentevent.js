/* DOM 2 Events -- DocumentEvent */

function startDocumentEvent()
{
  var cvs = "$Id: documentevent.js 4838 2006-01-18 05:59:01Z hallvord $";

  testmodule("DOM 2 Events -- DocumentEvent", cvs);

  try
  {
    testcase("Properties and functions exists");

    var tprop = make_tprop(document);
    tprop("createEvent", "function");

    testcase("createEvent('Events')");

    var ev1 = document.createEvent("HTMLEvents");
    ttrue("result is object", ev1 != null && typeof(ev1) == "object");
    test("result is event", ev1.toString(), "[object Event]");
    if (ev1)
      checkEventPropertiesAndFunction(ev1);

    var ev2 = document.createEvent("UIEvents");
    ttrue("result is object", ev2 != null && typeof(ev2) == "object");
    test("result is event", ev2.toString(), "[object UIEvent]");
    if (ev2)
      checkUIEventPropertiesAndFunction(ev2);

    var ev3 = document.createEvent("MouseEvents");
    ttrue("result is object", ev3 != null && typeof(ev3) == "object");
    test("result is event", ev3.toString(), "[object MouseEvent]");
    if (ev3)
      checkMouseEventPropertiesAndFunction(ev3);

    if (document.implementation.hasFeature("MutationEvents", "2.0"))
    {
      var ev4 = document.createEvent("MutationEvents");
      ttrue("result is object", ev4 != null && typeof(ev4) == "object");
      test("result is event", ev4.toString(), "[object MutationEvent]");
      if (ev4)
        checkMutationEventPropertiesAndFunction(ev4);
    }
    else
      showblue("Mutation Events not supported.");
  }
  catch (e)
  {
    exception(e);
  }

  testmodule_finished();
}
