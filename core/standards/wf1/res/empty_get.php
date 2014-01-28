<!DOCTYPE html>
<meta charset="utf-8" />
<?php
	print "Result: ";
	if (isset($_GET["test"]) and $_GET["test"] == "") {
		print "PASS";
	} else {
		print "FAIL";
	}
?>

