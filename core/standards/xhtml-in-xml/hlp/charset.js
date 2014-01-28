function start()
	{var v = 'aeiouyæøå';
	document.getElementsByTagName('tt')[0].firstChild.nodeValue = (v.charCodeAt(2)==105 && v.charCodeAt(6)==230 && v.charCodeAt(7)==248 && v.charCodeAt(8)==229)?'PASS':'FAIL';}
