function main(docObj)
{
   printHeader("HTML Element");
   setTestCase("HTML Element Properties");

   testProperty("all", docObj.all);
   testProperty("children", docObj.children);

   var para1 = docObj.getElementsByTagName("p")[0];
   testProperty("id", para1.id);
   
   var opera = docObj.getElementsByTagName("img")[0];   
   testProperty("tagName", opera.tagName);
   testProperty("offsetHeight", opera.offsetHeight);
   testProperty("offsetWidth", opera.offsetWidth);   
   testProperty("offsetLeft", opera.offsetLeft);   
   testProperty("offsetParent", opera.offsetParent);   
   testProperty("offsetTop", opera.offsetTop);   
   
   testProperty("className", opera.className);
   test("className", opera.className, "first");
   
   var operaParent = opera.parentElement;
   testProperty("parentElement", operaParent);
   test("parentElement", operaParent.tagName, "BODY");

   var operaAttrib = opera.getAttribute("alt");
   testProperty("getAttribute", operaAttrib);
   test("getAttribute", operaAttrib, "Opera");
   
   var operaTitle = opera.title;
   testProperty("title", operaTitle);
   test("title", operaTitle, "Opera");
   
   opera.removeAttribute("title");
   test("title", opera.title, "");
   
   opera.setAttribute("title", "OperaImage");
   test("title", opera.title, "OperaImage");
	   
   printTail();
}