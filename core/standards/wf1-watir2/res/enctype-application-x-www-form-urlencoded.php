<!doctype html>
<meta charset="utf-8" />

<?php

	print "<p>Result: ";

	if (preg_match("/x-www-form-urlencoded/", $_SERVER["CONTENT_TYPE"])) {
		print "PASS";
	} else {
		print "FAIL";
	}

	print "</p>\n";

?>

