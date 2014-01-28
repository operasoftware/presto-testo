/* DOM 2 Events -- DocumentEvent */

function startDocumentEvent()
{
  var cvs = "$Id: documentevent.js 25287 2008-04-04 13:25:10Z hallvord $";

  testmodule("DOM 2 Events -- DocumentEvent", cvs);

  try
  {
    testcase("Properties and functions exists");

    var tprop = make_tprop(document);
    tprop("createEvent", "function");

    testcase("createEvent('Events')");

    var ev1 = document.createEvent("HTMLEvents");
    ttrue("result is object #1", ev1 != null && typeof(ev1) == "object");
    test("result is event #1", ev1.toString(), "[object Event]");
    if (ev1)
      checkEventPropertiesAndFunction(ev1);
      
    testcase("createEvent('UIEvents')");

    var ev2 = document.createEvent("UIEvents");
    ttrue("result is object #2", ev2 != null && typeof(ev2) == "object");
    test("result is event #2", ev2.toString(), "[object UIEvent]");
    if (ev2)
      checkUIEventPropertiesAndFunction(ev2);

    testcase("createEvent('MouseEvents')");

    var ev3 = document.createEvent("MouseEvents");
    ttrue("result is object #3", ev3 != null && typeof(ev3) == "object");
    test("result is event #3", ev3.toString(), "[object MouseEvent]");
    if (ev3)
      checkMouseEventPropertiesAndFunction(ev3);

    if (document.implementation.hasFeature("MutationEvents", "2.0"))
    {
        testcase("createEvent('MutationEvents')");

      var ev4 = document.createEvent("MutationEvents");
      ttrue("result is object #4", ev4 != null && typeof(ev4) == "object");
      test("result is event #4", ev4.toString(), "[object MutationEvent]");
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
