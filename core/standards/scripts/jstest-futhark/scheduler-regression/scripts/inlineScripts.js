/* Tests for scheduling of inline scripts */

var cvs = "$Id: inlineScripts.js 23402 2008-02-18 12:43:31Z hallvord $";

testmodule ("Scheduler, inline scripts", cvs);

try {

  var flag, flag2, flag3, flag4;

testcase ("Writing DIV element");

  ttrue ("Existance of DIV #1 before document.write",
         document.getElementById ("div1") == null ||
         document.getElementById ("div1") == undefined);
  document.write ("<div id='div1'></div>");
  ttrue ("Existance of DIV #1 after document.write",
         document.getElementById ("div1") != null &&
         document.getElementById ("div1") != undefined);

testcase ("Writing DIV split-up element");

  ttrue ("Existance of DIV #2 before document.write",
         document.getElementById ("div2") == null ||
         document.getElementById ("div2") == undefined);
  document.write ("<div id='div2'>");
  document.write ("</div>");
  tdef ("Existance of DIV #2 after document.write",
        document.getElementById ("div2"));
  ttrue ("Existance of DIV #1 after document.write",
         document.getElementById ("div2") != null &&
         document.getElementById ("div2") != undefined);

testcase ("Writing huge token before DIV element");

  ttrue ("Existance of DIV #3 before document.write",
         document.getElementById ("div3") == null ||
         document.getElementById ("div3") == undefined);
  var str = "..........";
  while (str.length < 36000)
    str += str;
  document.write ("<div></div><!-- " + str + " --><div id='div3'></div>");
  ttrue ("Existance of DIV #3 after document.write",
         document.getElementById ("div3") != null &&
         document.getElementById ("div3") != undefined);

testcase ("Writing simple inline script");

  flag = false;
  document.write ("<script>flag = true;<" + "/script>");
  test ("Flag updated by inline script", flag, true);

testcase ("Writing external inline script");

  flag2 = false;
  document.write ("<script src='scripts/inlineScripts_external.js'><" + "/script>");
  test ("Flag NOT yet updated by inline script", flag2, false); // used to expect true, 
  // fix for bug 163919 changes the order scripts are evaluated in

testcase ("Writing external inline script (split-up)");

  flag3 = false;
  document.write ("<script src='scripts/inlineScripts_external.js'>");
  test ("Flag not updated by inline script before endtag", flag3, false);
  document.write ("<" + "/script>");
  test ("Flag not yet updated by inline script after endtag", flag3, false);

testcase ("Writing inline script writing external inline script");

  flag4 = false;
  document.write ("<script>document.write ('<script src=\"scripts/inlineScripts_external.js\"><' + '/script>');<" + "/script>");
  test ("Flag NOT yet updated by inline script", flag4, false);

} catch (e) { exception (e); }


/* eof */
