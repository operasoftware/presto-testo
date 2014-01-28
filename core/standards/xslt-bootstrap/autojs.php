<?php header('Content-Type: application/xhtml+xml;charset=utf-8');?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>XSLTProcessor() Bootstrap Tests</title>
<script type="application/ecmascript">
<![CDATA[
function xslt(name)
	{var processor = new XSLTProcessor(), result = false, errors = 'none';
	try
		{var xml = (document.implementation.createLSParser(1,null)).parseURI(name);
		processor.importStylesheet(xml);
		var doc = processor.transformToDocument(xml);
		if(doc.documentElement.nodeName == 'result' && doc.documentElement.firstChild.nodeValue.search(/^[\s\n]*PASS[\s\n]*$/) != -1)
			{result = true}
		}
	catch(themAll)
		{errors = themAll}
	document.getElementsByTagName('tt')[0].firstChild.nodeValue = result?"PASS":"FAIL (" + errors + ")";
	try{top.opener.rr(result);}catch(e){}}
]]>
</script>
</head>
<body onload="xslt('<?php print $_GET['tc']?>.xml')">
<p>Test result: <tt>Not Tested (script did not run)</tt></p>
</body>
</html>