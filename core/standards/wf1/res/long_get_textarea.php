<!doctype html>
<meta charset="utf-8" />
<?php

	print "Result: ";

	if (isset($_GET["test"]) and strlen($_GET["test"]) == 7790) {
		print "PASS";
	} else {
		print "FAIL";
	}

?>

