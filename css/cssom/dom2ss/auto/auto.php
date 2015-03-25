<?php
header('Content-Type: application/xhtml+xml;charset=utf-8');

if (isset($_GET['tc'])) {
	$tc = $_GET['tc'];
	if (strpos($tc, '/') === false && strpos($tc, '.') === false)
		$tc = "$tc.html";
}

?>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>DOM2SS Tests</title>
<script src="/resources/jstestharnessharness.js"></script>
<script type="application/ecmascript"><![CDATA[
function runTC()
	{var doc = document.getElementsByTagName('object')[0].contentDocument, result = false;
	if(doc && doc.getElementsByTagName('p') && doc.getElementsByTagName('p')[0].firstChild && doc.getElementsByTagName('p')[0].firstChild.nodeValue.replace(/(^\s|\s$)/g,'') == 'PASS')
		{result = true}
	report_result(result);}
]]></script>
</head>
<body>
<p><object type="text/html" data="<?php print htmlspecialchars($tc, ENT_COMPAT, 'UTF-8')?>" onload="setTimeout( runTC, 200)">FAIL (TC not loaded)</object></p>
</body>
</html>

