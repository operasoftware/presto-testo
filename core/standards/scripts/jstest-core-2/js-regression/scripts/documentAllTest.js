function main()
{
	printHeader( "Testing NS/IE - proprietary objects and methods." );
	testDocumentAll();
	testDocumentAllByTagName();
	testDocumentAllByArrayUsingName();
   	printTail();
}

function listTags(tagList)
{
	for(i=0;i<tagList.length;++i)
	{
		document.write(tagList[i].tagName + " ");
	}
	document.write(". There are a total of " + tagList.length + " tags");
	document.write("<br><br>");
}

function testDocumentAll()
{
   	setTestCase( "Document all test" );	
	print("Using the all property");
	listTags(document.all);
}



function testDocumentAllByTagName()
{
	print("Accessing HTML elements using tagName property");
	setTestCase("Accessing document all property using name");
	document.write(document.all.tags("BODy")[0].tagName);
	document.write("<br><br>");
}

function testDocumentAllByArrayUsingName()
{
	print("Accessing HTML elements by array using name");
	setTestCase("Accessing document all array using name");
	document.write(document.all);	
}