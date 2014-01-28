/* Tests for DOM 2 Core 'Element' object. */

var cvs = "$Id: element2.js 4838 2006-01-18 05:59:01Z hallvord $";

testmodule( "DOM Element attribute cases", cvs );

try {

testcase("getAttribute in html");


  var elm1 = document.getElementById('tag1');
  var elm2 = document.getElementById('tag2');
  var elm3 = document.getElementById('tag3');
  var elm4 = document.getElementById('tag4');

  test("html upper/upper case", elm1.getAttribute('ATTR1'), "mytext1");
  test("html lower/upper case", elm1.getAttribute('attr1'), "mytext1"); // html attributes are case insensitive
  test("html lower/lower case", elm2.getAttribute('attr2'), "mytext2"); 
  test("html upper/lower case", elm2.getAttribute('ATTR2'), "mytext2");
  test("street html upper/upper case", elm3.getAttribute('ATTR3'), "mytext3");
  test("street html lower/upper case", elm3.getAttribute('attr3'), "mytext3"); 
  test("street html lower/lower case", elm4.getAttribute('attr4'), "mytext4"); 
  test("street html upper/lower case", elm4.getAttribute('ATTR4'), "mytext4");

  testcase("getAttribute in xml");

  var xmlwin = window.open("xmldoc2.xml");
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
      var doc = xmlwin.document;
      if (!doc || !doc.getElementById('last-element'))
        if (++attempts > 10)
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
        elm1 = doc.getElementById('tag1');
        elm2 = doc.getElementById('tag2');
        elm3 = doc.getElementById('tag3');
        elm4 = doc.getElementById('tag4');

        test("html upper/upper case", elm1.getAttribute('ATTR1'), "mytext1");
        test("html lower/upper case", elm1.getAttribute('attr1'), "");
        test("html lower/lower case", elm2.getAttribute('attr2'), "mytext2"); 
        test("html upper/lower case", elm2.getAttribute('ATTR2'), "");
        test("xml upper/upper case", elm3.getAttribute('ATTR3'), "mytext3");
        test("xml lower/upper case", elm3.getAttribute('attr3'), ""); 
        test("xml lower/lower case", elm4.getAttribute('attr4'), "mytext4"); 
        test("xml upper/lower case", elm4.getAttribute('ATTR4'), "");
      }

      xmlwin.close();
      testmodule_finished();
    }

    runTests();
  }

} catch (e) { exception( e ); }

/* eof */
