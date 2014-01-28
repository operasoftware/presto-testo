/* Tests for DOM 2 Core 'DOMImplementation' object.
*/

var cvs = "$Id: htmldocument.js 4838 2006-01-18 05:59:01Z hallvord $";

function isCollection(c)
{
  return isDefined(c.length) && isDefined(c.item) && isDefined(c.namedItem);
}

document.writeln("<pre>");  
document.write("Text1: AB"); document.writeln("CD");
document.writeln("Text2: EF"); document.writeln("GH");
document.writeln("</pre>");  

testmodule( "HTMLDocument", cvs );

try {
  var i = document;

  testcase( "object" );

  test("class",i,"[object HTMLDocument]");
  
  testcase( "attribute object class" );

  test("body",i.body,"[object HTMLBodyElement]");
  test("images",i.images,"[object HTMLCollection]");
  test("applets",i.applets,"[object HTMLCollection]");
  test("links",i.links,"[object HTMLCollection]");
  test("forms",i.forms,"[object HTMLCollection]");
  test("anchors",i.anchors,"[object HTMLCollection]");

  testcase( "properties exists" );
  
  tdef("title",i.title);
  tdef("referrer",i.referrer);
  tdef("domain",i.domain);
  tdef("URL",i.URL);
  tdef("body",i.body);
  tdef("images",i.images);
  tdef("applets",i.applets);
  tdef("links",i.links);
  tdef("forms",i.forms);
  tdef("anchors",i.anchors);
  tdef("cookie",i.cookie);
  
/*
  testcase( "property types" );
  
  testinstance("body" ,i.body, HTMLElement); // ???
*/

  testcase( "property values" );
  
  test("title",i.title,doc_title);
  if (get_protocol_and_host().substring(0, 5) == "file:")
    test("referrer",i.referrer,"");
  else if (i.referrer.substr(-10,10) == "index.html")
    test("referrer",i.referrer,get_protocol_and_host() + get_modulepath("DOM-regression","index.html"));
  else
    test("referrer",i.referrer,get_protocol_and_host() + get_modulepath("HTML","HTML-all.html"));
  test("domain",i.domain,get_host());
  test("URL",i.URL,get_protocol_and_host() + get_modulepath("HTML","HTMLDocument.html"));
  test("body",i.body,document.getElementById("myBody"));
  testOut(isCollection(i.images), "images is a collection");
  testOut(isCollection(i.applets),"applets is a collection");
  testOut(isCollection(i.links),  "links is a collection");
  testOut(isCollection(i.forms),  "forms is a collection");
  testOut(isCollection(i.anchors),"anchors is a collection");
  
  // test("cookie",i.cookie,"a=b"); // Must figure out a way to test cookies

  var f = document.getElementsByTagName("form");
  var inp = document.getElementsByTagName("input");
  var im = document.getElementsByName("i1");

  testcase( "document dynamic properties exists" );
  
  tdef("form",document.myForm1n);
  tdef("form",document.myForm2n);

  tdef("image",document.i1);
 
  testcase( "document dynamic property values" );
  
  test("form",document.myForm1n,f[0]);
 
  test("image",document.i1,im[0]);

  testcase( "free dynamic properties exists" );
  
  tdef("form 1",myForm1n);
  tdef("form 1",myForm1i);
  tdef("image 1",i1);
  tdef("div 1",myDiv);

  tdef("form 2",myForm2n);
  tdef("form 2",myForm2i);
  tdef("image 2",i2);
  tdef("p  2",myP);
 
  testcase( "free dynamic property values" );
  
  test("form",myForm1n,f[0]);
  test("form",myForm1i,f[0]);
  test("image",i1,im[0]);
  test("div 2",myDiv,document.getElementById('myDiv'));

  test("form 2",myForm2n,f[1]);
  test("form 2",myForm2i,f[1]);
  test("image 2",i2,document.getElementById('i2'));
  test("p 2",myP,document.getElementById('myP'));

  testcase( "local dynamic properties exists" );
  
  tdef("input",myForm1n.myInput1n);
  tdef("input 2",myForm2n.myInput2n);

  testcase( "local dynamic property values" );
  
  test("input",myForm1n.myInput1n,inp[0]);
  test("input 2",myForm2n.myInput2n,inp[1]);
  
  testcase( "properies are writable" );

  i.title = "Changed title";
  test("title",i.title,"Changed title");
  i.title = doc_title;
  test("title",i.title,doc_title);

  i.cookie = "c1=v1";
  test("cookie",i.cookie,"c1=v1");

  testcase( "getElementsByName" );

  var nl = i.getElementsByName("e2");
  testOut(isCollection(nl),"getElementsByName returns a collection");
  test("getElementsByName()[0]",nl[0],document.getElementById("p2"));
  test("getElementsByName()[1]",nl[1],document.getElementById("s2"));

  var doc_body = i.body; 

/*
  testcase( "properies are writable, body" );

  var other_body = document.createElement("body");
  
  i.body = other_body;
  test("body",i.body,other_body);
  i.body = doc_body;
  test("body",i.body,doc_body);
*/

  testcase( "methods exist" );
 
  tdef("open",i.open);
  tdef("close",i.close);
  tdef("write",i.write);
  tdef("writeln",i.writeln);
  tdef("getElementsByName",i.getElementsByName);

  testcase( "test methods" );
  
  // open, close, write, writeln missing
  
  // conf() tests moved to htmldocument_int.js

  
} catch (e) { exception(e); }

testmodule_finished();

/* eof */
