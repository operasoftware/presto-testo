

function writeContentLink(url,params,text)
{
	if (url.indexOf('?') > -1)
	{	
		w('<a class=mwLink href="' +url + '&' + params +'">' + text + '</a>');
	}else{
		w('<a class=mwLink href="' +url + '?' + params +'">' + text + '</a>');
	}
}
function writeFormTag(url)
{
	w('<form name=bcform action="' +url + '" method=get>');
}


function writeNavLink(url,params,text)
{
	if (url.indexOf('?') > -1)
	{	
		w('<a class=mwNavLink href="' +url + '&' + params +'">' + text + '</a>');
	}else{
		w('<a class=mwNavLink href="' +url + '?' + params +'">' + text + '</a>');
	}
}
function GoURL(url,params)
{
	if (url.indexOf('?') > -1)
	{	
		document.location = url + '&' + params;
	}else{
		document.location = url + '?' + params;
	}

}

function w(s)
{
	document.write(s);
}
function wl(s)
{
	document.writeln(s);
}