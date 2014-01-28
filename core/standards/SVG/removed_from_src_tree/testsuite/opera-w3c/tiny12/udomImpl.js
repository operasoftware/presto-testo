function parseXML(data, contextDoc)
{
	var parser = new DOMParser();
	var doc = null;
	try
	{
		doc = parser.parseFromString(data, "text/xml");
	}
	catch(e)
	{
	}
	
	if(!doc)
	{
		return null;
	}
	
	if(contextDoc)
	{
		return contextDoc.adoptNode(doc.documentElement);
	}
	
	return doc;
}

function AsyncURLStatus(callback)
{
	this.callback = callback;

	this.onreadystatechange = function()
	{
		this.success = (this.readyState == 4 && this.status == 200);
		
		if(this.success)
		{
			this.contentType = this.getResponseHeader("Content-Type");
			this.content = this.responseText;
		}
		else
		{
			this.contentType = null;
			this.content = null;
		}
		
		if(this.readyState == 4)
		{
			if(callback)
			{
				if(callback.operationComplete)
				{
					callback.operationComplete(this);
				}
				else
				{
					callback(this);
				}
			}
		}
	}		
}

function getURL(iri, callback)
{
	var req = new XMLHttpRequest();
	var asyncstatus = new AsyncURLStatus(callback);
	req.onreadystatechange = asyncstatus.onreadystatechange;	
	req.open("GET", iri, true);
	req.send();
}

function postURL(iri, d, callback, t, enc)
{
	var req = new XMLHttpRequest();
	var asyncstatus = new AsyncURLStatus(callback);
	req.onreadystatechange = asyncstatus.onreadystatechange;
  
  var contenttype = "text/plain";
  if(t)
  {
    contenttype = t;
  }
  
  if(enc)
    contenttype += ";" + enc;

	req.open("POST", iri, true);
  req.setRequestHeader("Content-Type", contenttype);
	req.send(d);
}
