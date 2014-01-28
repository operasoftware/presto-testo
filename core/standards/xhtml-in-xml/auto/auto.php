<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>XHTML TCs</title>
<script type="application/ecmascript">
var result = false;
function runTC()
	{var doc = document.getElementsByTagName('object')[0].contentDocument;
	findTarget(doc.documentElement);
	try{top.opener.rr(result);}catch(e){};
	document.getElementsByTagName('tt')[0].firstChild.nodeValue = result?'PASS':'FAIL';}
function findTarget(element)
	{for (var i = element.childNodes.length; i != 0; i--)
		{var child = element.childNodes[i-1];
		if(child.nodeType == 3 && child.nodeValue == 'FAIL' && child.ownerDocument.defaultView.getComputedStyle(element,null).getPropertyValue('content') == '"PASS"')
			{result = true;}
		else
			{if(child.nodeType == 1)
				{findTarget(child)}
			}
		}
	}
</script>
<style type="text/css">
object
	{width:100%;
	height:20em;}
</style>
</head>
<body>
<p>Test result: <tt>Not Tested (script did not run)</tt></p>
<p><object type="application/xml" data="<?php print $_GET['tc']?>.xml" onload="runTC()">FAIL (TC not loaded)</object></p>
</body>
</html>
