<!doctype html>
<meta charset="utf-8" />
<title>New line page</title>
<?php

	print "Result: ";

	if (isset($_POST["test"]) and $_POST["test"] == "\n") {
		print "PASS";
	} else {
		print "FAIL";
	}

?>

