<?php
header('Content-Type: application/xhtml+xml;charset=utf-8');

if (isset($_GET['tc'])) {
	$tc = $_GET['tc'];
	if (strpos($tc, '/') === false && strpos($tc, '.') === false)
		$tc = "$tc.xml";
}

?>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>XSLT Bootstrap Tests</title>
<script src="/resources/jstestharnessharness.js"></script>
<script type="application/ecmascript"><![CDATA[
function runTC()
	{var doc = document.getElementsByTagName('object')[0].contentDocument,
	result = (doc && doc.documentElement && doc.documentElement.nodeName == 'result' && doc.documentElement.firstChild && doc.documentElement.firstChild.nodeValue.search(/^[\s\n]*PASS[\s\n]*$/) != -1);
	report_result(result);}
]]></script>
</head>
<body>
<p><object type="application/xslt+xml" data="<?php print htmlspecialchars($tc, ENT_COMPAT, 'UTF-8')?>" onload="runTC()">FAIL (object not loaded)</object></p>
</body>
</html>
