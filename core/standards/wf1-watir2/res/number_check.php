<!doctype html>
<meta charset="utf-8" />
<?php

	print "Result: ";

	if (isset($_REQUEST["test"]) and
		isset($_GET["number"]) and
		$_REQUEST["test"] == $_REQUEST["number"]) {
		print "PASS";
	}	else {
		print "FAIL";
	}

?>

