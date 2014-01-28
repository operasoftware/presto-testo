/* Tests for DOM 2 Core 'Element' object. */

var cvs = "$Id: element.js 46533 2009-05-18 16:09:17Z hallvord $";

testmodule( "DOM Element", cvs );

try {

testcase("tagName");
  expect(65);
  var fdiv = document.getElementById('first_div');
  test("tagName #1", fdiv.tagName, "DIV");
  tdef("tagName #2", fdiv.firstChild);
  test("tagName #3", fdiv.firstChild.tagName, "SVG:SVG");
  tdef("tagName #4", fdiv.firstChild.firstChild);
  test("tagName #5", fdiv.firstChild.firstChild.tagName, "HTML:SPAN");

testcase("getAttribute");

  var body_elm = document.getElementById('body-foo');

  test("getAttribute #1", body_elm.getAttribute('bgcolor'), "white");
  test("getAttribute #2", body_elm.getAttribute('ID'), "body-foo");
  test("getAttribute #3", body_elm.getAttribute('jalla'), null);

testcase("setAttribute");

  body_elm.setAttribute('jalla', 'arne');
  body_elm.setAttribute('bgColor', 'gray');

  test("setAttribute #1", body_elm.getAttribute('jalla'), "arne");
  test("setAttribute #2", body_elm.getAttribute('bgcolor'), "gray");

testcase("removeAttribute");

  attr_node1 = body_elm.getAttributeNode('bgcolor');
  attr_node2 = body_elm.getAttributeNode('jalla');

  test("removeAttribute #1", attr_node1.ownerElement, body_elm);
  test("removeAttribute #2", attr_node2.ownerElement, body_elm);

  body_elm.removeAttribute('bgcolor');
  body_elm.removeAttribute('jalla');

  test("removeAttribute #3", body_elm.getAttribute('bgcolor'), null);
  test("removeAttribute #4", body_elm.getAttribute('jalla'), null);
  test("removeAttribute #5", attr_node1.ownerElement, null);
  test("removeAttribute #6", attr_node2.ownerElement, null);

  test("regression test for bug #84317", body_elm.getAttributeNode('bgcolor'), null);
  test("regression test 2 for bug #84317", body_elm.getAttributeNode('jalla'), null);

testcase("getAttributeNode");

  body_elm.setAttribute('bgcolor', 'white');
  body_elm.setAttribute('jalla', 'arne');
  var attr_node1 = body_elm.getAttributeNode('bgColor');
  var attr_node2 = body_elm.getAttributeNode('jalla');
  var attr_node3 = body_elm.getAttributeNode('hei');

  tdef("getAttributeNode #1", attr_node1);
  test("getAttributeNode #2", attr_node1.nodeName, attr_node1.name);
  test("getAttributeNode #3", attr_node1.nodeValue, attr_node1.value);
  test("getAttributeNode #4", attr_node1.name, "bgColor");
  test("getAttributeNode #5", attr_node1.value, "white");
  tdef("getAttributeNode #6", attr_node2);
  test("getAttributeNode #7", attr_node2.nodeName, attr_node2.name);
  test("getAttributeNode #8", attr_node2.nodeValue, attr_node2.value);
  test("getAttributeNode #9", attr_node2.name, "jalla");
  test("getAttributeNode #10", attr_node2.value, "arne");
  test("getAttributeNode #11", attr_node3, null);

testcase("setAttributeNode");

  body_elm.setAttribute('BGCOLOR', 'white');
  var attr_node1 = body_elm.getAttributeNode('bgcolor');
  var new_node = document.createAttribute('bgcolor');
  new_node.value = 'green';

  tdef("setAttributeNode #1", new_node);
  test("setAttributeNode #2", new_node.value, 'green');
  test("setAttributeNode #3", attr_node1.value, 'white');

  body_elm.setAttributeNode(new_node);

  test("setAttributeNode #4", attr_node1.ownerElement, null);
  test("setAttributeNode #5", attr_node1.value, 'white');
  test("setAttributeNode #6", body_elm.getAttribute('bgcolor'), 'green');
  test("setAttributeNode #7", new_node.ownerElement, body_elm);
  test("setAttributeNode #8", new_node.value, 'green');

  body_elm.setAttribute('jalla', 'arne');
  var attr_node1 = body_elm.getAttributeNode('jalla');
  var new_node = document.createAttribute('jalla');
  new_node.value = 'bjarne';

  tdef("setAttributeNode #9", new_node);
  test("setAttributeNode #10", new_node.value, 'bjarne');
  test("setAttributeNode #11", attr_node1.value, 'arne');

  body_elm.setAttributeNode(new_node);

  test("setAttributeNode #12", attr_node1.value, 'arne');
  test("setAttributeNode #13", body_elm.getAttribute('jalla'), 'bjarne');
  test("setAttributeNode #14", new_node.ownerElement, body_elm);
  test("setAttributeNode #15", new_node.value, 'bjarne');

  expect_DOM_exception("setAttributeNode #16", DOMException.INUSE_ATTRIBUTE_ERR,
			function(){fdiv.setAttributeNode(new_node);});

  var testwin =  document.getElementById('xmliframe2').contentWindow;
  if (!testwin)
    showfailure( "Opening secondary window", "Opening window failed." );
  else
  {
    var other_doc_node = testwin.document.createAttribute('bgcolor');
    other_doc_node.value = 'red';
    expect_DOM_exception("setAttributeNode #17", DOMException.WRONG_DOCUMENT_ERR,
                         function(){body_elm.setAttributeNode(other_doc_node);});
    testwin.close();
  }

testcase("removeAttributeNode");

  attr_node1 = body_elm.getAttributeNode('bgcolor');
  attr_node2 = body_elm.getAttributeNode('jalla');

  test("removeAttributeNode #1", attr_node1.ownerElement, body_elm);
  test("removeAttributeNode #2", attr_node2.ownerElement, body_elm);

  body_elm.removeAttributeNode(attr_node1);
  body_elm.removeAttributeNode(attr_node2);

  test("removeAttributeNode #3", body_elm.getAttribute('bgcolor'), null);
  test("removeAttributeNode #4", body_elm.getAttribute('jalla'), null);
  test("removeAttributeNode #5", attr_node1.ownerElement, null);
  test("removeAttributeNode #6", attr_node2.ownerElement, null);

  dummy_node = document.createAttribute('bgcolor');
  expect_DOM_exception("removeAttributeNode #7", DOMException.NOT_FOUND_ERR,
			function(){body_elm.removeAttributeNode(dummy_node);});

testcase("getElementsByTagName");

  divs = document.getElementById('pe').getElementsByTagName('div');
  divcount = divs.length;

  test('Check that getElementsByTagName returns a NodeList', divs.toString(), '[object NodeList]');
  test('Check number of DIV elements', divcount, 3);

testcase("hasAttribute");

  var firstdiv = document.getElementById('first_div');

  ttrue("hasAttribute #1", firstdiv.hasAttribute('Id'));
  ttrue("hasAttribute #2", !firstdiv.hasAttribute('lang'));
  test("hasAttribute #3", firstdiv.hasAttribute('jalla'), false);

  var xmlwin =  document.getElementById('xmliframe').contentWindow;
  if (!xmlwin)
  {
    showfailure( "Opening secondary window", "Opening window failed." );
    testmodule_finished();
  }
  else
  {
    var timeout = 100;
    var attempts = 0;

    function runTests()
    {
      var d = xmlwin.document;
      if (!d || !d.getElementById("last-element"))
        if (++attempts > 5)
          showfailure("loading document", "Loading timed out.");
        else
        {
          showblue("test delayed " + timeout + " milliseconds");
          setTimeout(runTests, timeout);
          timeout += timeout;
          return;
        }
      else
      {
        xmldiv = xmlwin.document.getElementById('div1');
	// halvord@opera.com 2006-12-18: getElementById will only look at "id" attributes for html: namespace elements.
	// fixing the lines below to use getElementsByTagName
        xmltag = xmlwin.document.getElementsByTagName('taggen')[0];
        xmltag2 = xmlwin.document.getElementsByTagName('taggen')[1];
        xmltag3 = xmlwin.document.getElementsByTagName('address')[0];

        tdef("tagName #6", xmldiv);
        tdef("tagName #7", xmltag);
        tdef("tagName #8", xmltag2);
        test("tagName #9", xmldiv.tagName, "html:DIV");
        test("tagName #10", xmltag.tagName, "bogus:taggen");
        test("tagName #11", xmltag2.tagName, "bogus:taggen");
        test("tagName #12", xmltag3.tagName, "address");
      }

      xmlwin.close();
      testmodule_finished();
    }

    runTests();
  }

} catch (e) { exception( e ); }

/* eof */
