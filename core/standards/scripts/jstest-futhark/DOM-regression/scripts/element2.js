/* Tests for DOM 2 Core 'Element' object. */

var cvs = "$Id: element2.js 46212 2009-05-13 10:32:56Z hallvord $";

testmodule( "DOM Element attribute cases", cvs );

try {
expect(16);
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
        elm3 = doc.getElementsByTagName('BLOKK')[0];
        elm4 = doc.getElementsByTagName('BLOKK')[1];

        test("html upper/upper case", elm1.getAttribute('ATTR1'), "mytext1");
        test("html lower/upper case attr1", elm1.getAttribute('attr1'), null);
        test("html lower/lower case", elm2.getAttribute('attr2'), "mytext2");
        test("html upper/lower case ATTR2", elm2.getAttribute('ATTR2'), null);
        test("xml upper/upper case", elm3.getAttribute('ATTR3'), "mytext3");
        test("xml lower/upper case attr3", elm3.getAttribute('attr3'), null);
        test("xml lower/lower case attr4", elm4.getAttribute('attr4'), "mytext4");
        test("xml upper/lower case ATTR4", elm4.getAttribute('ATTR4'), null);
      }

      xmlwin.close();
      testmodule_finished();
    }

    runTests();
  }

} catch (e) { exception( e ); }

/* eof */
