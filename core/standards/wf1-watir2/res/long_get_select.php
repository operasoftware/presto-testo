<!doctype html>
<meta charset="utf-8" />
<?php

	print "Result: ";

	if (isset($_GET["test"]) and strlen($_GET["test"]) == 3439) {
		print "PASS";
	} else {
		print "FAIL";
	}

?>

