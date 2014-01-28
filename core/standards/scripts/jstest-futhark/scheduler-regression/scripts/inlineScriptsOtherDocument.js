/* Tests for scheduling of inline scripts written to other document */

var cvs = "$Id: inlineScriptsOtherDocument.js 10655 2006-12-18 15:47:57Z hallvord $";

function runTest ()
{
  testmodule ("Scheduler, inline scripts, other document", cvs);

  try {

    var flag;
    var iframe1 = document.getElementById ("iframe1");
    iframe1.contentDocument.open ();
    iframe1_doc = iframe1.contentDocument;

  testcase ("Writing DIV element");

    test ("Existance of DIV #1 before document.write",
          iframe1_doc.getElementById ("div1"), undefined);
    iframe1_doc.write ("<div id='div1'></div>");
    tdef ("Existance of DIV #1 after document.write",
          iframe1_doc.getElementById ("div1"));

  testcase ("Writing DIV split-up element");

    test ("Existance of DIV #2 before document.write",
          iframe1_doc.getElementById ("div2"), undefined);
    iframe1_doc.write ("<div id='div2'>");
    iframe1_doc.write ("</div>");
    tdef ("Existance of DIV #2 after document.write",
          iframe1_doc.getElementById ("div2"));

  testcase ("Writing huge token before DIV element");

    test ("Existance of DIV #3 before document.write",
          iframe1_doc.getElementById ("div3"), undefined);
    var str = "..........";
    while (str.length < 36000)
      str += str;
    iframe1_doc.write ("<div></div><!-- " + str + " --><div id='div3'></div>");
    tdef ("Existance of DIV #3 after document.write",
          iframe1_doc.getElementById ("div3"));

  testcase ("Writing simple inline script");

    iframe1_doc.flag = false;
    iframe1_doc.write ("<script>document.flag = true;<" + "/script>");
    test ("Flag updated by inline script", iframe1_doc.flag, true);

  testcase ("Writing external inline script");

    iframe1_doc.flag = false;
    iframe1_doc.write ("<script src='scripts/inlineScriptsOtherDocument_external.js'><" + "/script>");
    test ("Flag updated by inline script", iframe1_doc.flag, true);

  testcase ("Writing inline script writing external inline script");

    iframe1_doc.flag = false;
    iframe1_doc.write ("<script>document.write ('<script src=\"scripts/inlineScriptsOtherDocument_external.js\"><' + '/script>');<" + "/script>");
    test ("Flag updated by inline script", iframe1_doc.flag, true);

    iframe1_doc.close ();

  } catch (e) { exception (e); }

  testmodule_finished ();
}

/* eof */
