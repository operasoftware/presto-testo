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
<title>XML Events Tests</title>
<script src="/resources/jstestharnessharness.js"></script>
<script type="application/ecmascript"><![CDATA[
function runTC()
	{var doc = document.getElementsByTagName('object')[0].contentDocument, result = false;
	if(doc && doc.getElementsByTagName('pass') && doc.getElementsByTagName('pass')[0].firstChild && doc.getElementsByTagName('pass')[0].firstChild.nodeValue.replace(/(^\s|\s$)/g,'') == 'PASSED')
		{result = true}
	document.getElementsByTagName('tt')[0].firstChild.nodeValue = (result)?'PASS':'FAIL';
	report_result(result);}
]]></script>
</head>
<body>
<p>Test result: <tt>FAIL (JS framework wrapper did not run)</tt></p>
<p style="visibility:hidden"><object type="application/xml" data="<?php print htmlspecialchars($tc, ENT_COMPAT, 'UTF-8')?>" onload="window.setTimeout('runTC()',1)">FAIL (TC not loaded)</object></p>
</body>
</html>



