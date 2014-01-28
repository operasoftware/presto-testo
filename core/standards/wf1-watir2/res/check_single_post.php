<!doctype html>
<meta charset="utf-8" />

<?php

	print "<p>Result: ";

	if ($_POST["test"] == "PASS") {
		print "PASS";
	} else {
		print "FAIL";
	}

	print "</p>\n";

?>

