<!doctype html>
<meta charset="utf-8" />
<title>Return page</title>
<?php

	$_GET["test"] = stripslashes($_GET["test"]);
	print "<p>You typed: [" . htmlspecialchars($_GET["test"]) . "]</p>";

?>

