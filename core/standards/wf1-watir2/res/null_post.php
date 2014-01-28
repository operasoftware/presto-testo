<!doctype html>
<meta charset="utf-8" />
<?php
	print "Result: ";

	if (!isset($_POST["test"]) or $_POST["test"] == "" or $_POST["test"] == "Submit") {
		print "PASS";
	} else {
		print "FAIL";
	}

?>

