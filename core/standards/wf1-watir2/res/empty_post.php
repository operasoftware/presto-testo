<!doctype html>
<meta charset="utf-8" />
<?php
	print "Result: ";
	if (isset($_POST["test"]) and $_POST["test"] == "") {
		print "PASS";
	} else {
		print "FAIL";
	}
?>
