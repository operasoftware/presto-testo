/* DOM 2 Events -- MutationEvent */

function startMutationEvent()
{
  var cvs = "$Id: mutationevent.js 4838 2006-01-18 05:59:01Z hallvord $";

  testmodule("DOM 2 Events -- MutationEvent", cvs);

  try
  {
    testcase("Mutation Event");
    
    if (document.implementation.hasFeature("MutationEvents", "2.0"))
    {
      testcase("MutationEvent constants");

      var tprop = make_tprop(MutationEvent);
      tprop("MODIFICATION", "number");
      tprop("ADDITION", "number");
      tprop("REMOVAL", "number");

      test("MODIFICATION", MutationEvent.MODIFICATION, 1);
      test("ADDITION", MutationEvent.ADDITION, 2);
      test("REMOVAL", MutationEvent.REMOVAL, 3);

      var ev = document.createEvent("MutationEvents");
      checkMutationEventPropertiesAndFunction(ev);

      testcase("initMutationEvent");

      ev.initMutationEvent("DOMAttrModified", true, false, document, "prevValue", "newValue", "attrName", 1);

      test("ev.type", ev.type, "DOMAttrModified");
      test("ev.target", ev.target, null);
      test("ev.currentTarget", ev.currentTarget, null);
      test("ev.eventPhase", ev.eventPhase, Event.CAPTURING_PHASE);
      test("ev.bubbles", ev.bubbles, true);
      test("ev.cancelable", ev.cancelable, false);
      ttrue("ev.timeStamp", (ev.timeStamp - (new Date()).valueOf()) < 50);
      test("ev.relatedNode", ev.relatedNode, document);
      test("ev.prevValue", ev.prevValue, "prevValue");
      test("ev.newValue", ev.newValue, "newValue");
      test("ev.attrName", ev.attrName, "attrName");
      test("ev.attrChange", ev.attrChange, 1);

      var div1 = document.getElementById ("div1");
      var div2 = document.getElementById ("div2");
      var div3 = document.getElementById ("div3");
      var div4 = document.getElementById ("div4");

      testcase("DOMNodeRemoved");

      var noderemoved = false;
      
      function handleDOMNodeRemoved(ev)
      {
        noderemoved = true;
        test("ev.type", ev.type, "DOMNodeRemoved");
        test("ev.target", ev.target, div2);
        test("ev.relatedNode", ev.relatedNode, div1);
      }
      
      document.addEventListener("DOMNodeRemoved", handleDOMNodeRemoved, true);
      div1.removeChild (div2);
      document.removeEventListener("DOMNodeRemoved", handleDOMNodeRemoved, true);

      ttrue("event seen", noderemoved);

      testcase("DOMNodeInserted")

      var nodeinserted = false;
      
      function handleDOMNodeInserted(ev)
      {
        nodeinserted = true;
        test("ev.type", ev.type, "DOMNodeInserted");
        test("ev.target", ev.target, div2);
        test("ev.relatedNode", ev.relatedNode, div1);
      }
      
      document.addEventListener("DOMNodeInserted", handleDOMNodeInserted, true);
      div1.appendChild (div2);
      document.removeEventListener("DOMNodeInserted", handleDOMNodeInserted, true);

      ttrue("event seen", nodeinserted);

      testcase("DOMNodeRemovedFromDocument");

      var noderemovedfromdocument = 0;
      
      function handleDOMNodeRemovedFromDocument(ev)
      {
        ++noderemovedfromdocument;
        test("ev.type", ev.type, "DOMNodeRemovedFromDocument");
        ttrue("ev.target", ev.target == div2 || ev.target == div3);
        test("ev.relatedNode", ev.relatedNode, null);
      }

      document.addEventListener("DOMNodeRemovedFromDocument", handleDOMNodeRemovedFromDocument, true);
      div1.removeChild (div2);
      document.removeEventListener("DOMNodeRemovedFromDocument", handleDOMNodeRemovedFromDocument, true);

      ttrue("event seen", noderemovedfromdocument == 2);

      testcase("DOMNodeInsertedIntoDocument");

      var nodeinsertedintodocument = 0;
      
      function handleDOMNodeInsertedIntoDocument(ev)
      {
        ++nodeinsertedintodocument;
        test("ev.type", ev.type, "DOMNodeInsertedIntoDocument");
        ttrue("ev.target", ev.target == div2 || ev.target == div3);
        test("ev.relatedNode", ev.relatedNode, null);
      }

      document.addEventListener("DOMNodeInsertedIntoDocument", handleDOMNodeInsertedIntoDocument, true);
      div1.appendChild (div2);
      document.removeEventListener("DOMNodeInsertedIntoDocument", handleDOMNodeInsertedIntoDocument, true);

      ttrue("event seen", nodeinsertedintodocument == 2);

      testcase("DOMAttrModified");

      var attrmodified = 0;

      function handleDOMAttrModified(ev)
      {
        test("ev.type", ev.type, "DOMAttrModified");
        test("ev.target", ev.target, div1);
        test("ev.attrName", ev.attrName, "CLASS");

        switch (++attrmodified)
        {
        case 1:
          test("ev.attrChange", ev.attrChange, 2);
          test("ev.prevValue", ev.prevValue, "");
          test("ev.newValue", ev.newValue, "class1");
          break;
          
        case 2:
          test("ev.attrChange", ev.attrChange, 1);
          test("ev.prevValue", ev.prevValue, "class1");
          test("ev.newValue", ev.newValue, "class2");
          break;
        }
      }

      document.addEventListener("DOMAttrModified", handleDOMAttrModified, true);
      div1.className = "class1";
      div1.className = "class2";
      document.removeEventListener("DOMAttrModified", handleDOMAttrModified, true);

      test("event seen", attrmodified, 2);

      testcase("DOMCharacterDataModified");

      var characterdatamodified = false;
      
      function handleDOMCharacterDataModified(ev)
      {
        characterdatamodified = true;
        test("ev.type", ev.type, "DOMCharacterDataModified");
        test("ev.target", ev.target, div4.firstChild);
        test("ev.relatedNode", ev.relatedNode, null);
        test("ev.prevValue", ev.prevValue, "original value");
        test("ev.newValue", ev.newValue, "new value");
      }
      
      document.addEventListener("DOMCharacterDataModified", handleDOMCharacterDataModified, true);
      div4.firstChild.data = "new value";
      document.removeEventListener("DOMCharacterDataModified", handleDOMCharacterDataModified, true);

      ttrue("event seen", characterdatamodified);
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

function checkMutationEventPropertiesAndFunction(ev)
{
  var tprop = checkEventPropertiesAndFunction(ev);
  tprop("relatedNode", "object");
  tprop("prevValue", "string");
  tprop("newValue", "string");
  tprop("attrName", "string");
  tprop("attrChange", "number");
  tprop("initMutationEvent", "function");
  return tprop;
}
