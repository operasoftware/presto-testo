<!doctype html>
<meta charset="utf-8" />
<title>Return page</title>
<?php

	$_POST["test"] = stripslashes($_POST["test"]);
	print "<p>You typed: [" . htmlspecialchars($_POST["test"]) . "]</p>";

?>

