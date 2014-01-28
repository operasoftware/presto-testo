<!doctype html>
<meta charset="utf-8" />

<?php

	print "<p>Result: ";

	if (preg_match("/multipart\/form-data/", $_SERVER["CONTENT_TYPE"])) {
		print "PASS";
	} else {
		print "FAIL";
	}

	print "</p>\n";

?>

