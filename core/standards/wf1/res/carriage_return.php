<!doctype html>
<meta charset="utf-8" />
<title>Carriage return page</title>
<?php

	print "Result: ";

	if (isset($_POST["test"]) and $_POST["test"] == "\r") {
		print "PASS";
	} else {
		print "FAIL";
	}

?>

