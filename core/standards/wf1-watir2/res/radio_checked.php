<!doctype html>
<meta charset="utf-8" />
<title>Return radio button checked</title>
<?php

print "Result: ";

	if (isset($_REQUEST["test"]) and $_REQUEST["test"] == "on") {
		print "PASS";
	} else {
		print "FAIL";
	}

?>

