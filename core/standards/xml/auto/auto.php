<?php
header('Content-Type: application/xhtml+xml;charset=utf-8');

if (isset($_GET['tc'])) {
	$tc = $_GET['tc'];
	if (strpos($tc, '/') === false && strpos($tc, '.') === false)
		$tc = "$tc.xml";
}

?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>Reporting XML parsing errors</title>
<script src="/resources/jstestharnessharness.js"></script>
<script type="application/ecmascript"><![CDATA[
function parse()
	{var result = false;
	try
		{(document.implementation.createLSParser(1,null)).parseURI(<?php print json_encode($tc); ?>)}
	catch(e)
		{if(e.code == 81)
			{result = true}
		}
	document.getElementsByTagName('p')[0].firstChild.nodeValue = result?"PASS":"FAIL";
	report_result(result);
	}
]]></script>
</head>
<body onload="parse()">
<p>Testcase did not load or script did not run</p>
</body>
</html>
