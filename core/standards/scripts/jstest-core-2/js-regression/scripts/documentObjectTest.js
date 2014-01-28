function main(docObject)
{
   printHeader("Document Object");
   setTestCase("Document Object Properties");

   testProperty("all", docObject.all);
   testProperty("all.tags('body')", docObject.all.tags("body"));
   testProperty("parentWindow", docObject.parentWindow);
   testProperty("children", docObject.children);

   printTail();
}
