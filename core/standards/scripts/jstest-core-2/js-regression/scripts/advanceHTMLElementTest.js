var toggleFlag = true;

function setChildrenText()
{
	var descendants = document.body.children;
	var childrenString = descendants[0].tagName;
	for(i=1; i<descendants.length; ++i)
	{
		childrenString = childrenString + ", " + descendants[i].tagName;
	}
	document.all.Children.value = childrenString;
	
	var childrenID = descendants[0].id;
	for(i=1; i<descendants.length; ++i)
	{
		var idLength = descendants[i-1].id.length;	
		if(idLength > 0)
		{
			childrenID = childrenID + ", ";
		}
		childrenID = childrenID + descendants[i].id;				
	}
	document.all.ChildrenID.value = childrenID;
}

function onToggle()
{
	var linkTags = document.links;
	var htmlLinkTag, textLinkTag;
	for(i=0; i<linkTags.length; ++i)
	{
		if(linkTags[i].name == "HTMLDirection")
		{
			htmlLinkTag = linkTags[i];
		}
		else if(linkTags[i].name == "TextDirection")
		{
			textLinkTag = linkTags[i];
		}
	}
	
	if(htmlLinkTag.innerText == "Venstre")
	{
		htmlLinkTag.innerHTML = "Høyrer";
		textLinkTag.innerText = "Right";
	}
	else
	{
		htmlLinkTag.innerText = "Venstre";
		textLinkTag.innerText = "Left";
	}
}