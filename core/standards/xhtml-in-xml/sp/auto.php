<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>XHTML TCs</title>
<script type="application/ecmascript">
function runTC()
	{var doc = document.getElementsByTagName('object')[0].contentDocument, result = false;
	if(doc && doc.getElementById('green') && doc.defaultView.getComputedStyle(doc.getElementById('green'),null).getPropertyValue('color').match(/green|teal|lime|008000|008080|00ff00/))
		{result = true}
	try{top.opener.rr(result);}catch(e){};
	document.getElementsByTagName('tt')[0].firstChild.nodeValue = result?'PASS':'FAIL';}
</script>
<style type="text/css">
object
	{width:100%;
	height:20em;}
</style>
</head>
<body>
<p>Test result: <tt>Not Tested (script did not run)</tt></p>
<p><object type="application/xml" data="<?php print $_GET['tc']?>.xml"  onload="runTC()">FAIL (TC not loaded)</object></p>
</body>
</html>



