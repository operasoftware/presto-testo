<!doctype html>
<html>
<head><title>Cookie result</title></head>
<body>
<p><?php
$pass = 0;
if (!isset($_GET["result"])) echo "No query string set. This page is only intended to be used through the testcases.";
else if ($_GET["result"] == 1) echo "PASS";
else echo "FAIL";
?></p>
<script type="text/javascript">try{top.opener.postMessage(document.getElementsByTagName("p")[0].innerHTML == "PASS", '*');}catch(e){}</script>
<p><?php
if (isset($_GET["req"]) && strpos($_GET["req"], "cookie2") !== false) echo "Cookie 2 must be enabled";
?></p>
</body>
</html>