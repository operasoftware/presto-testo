<!doctype html>
<meta charset="utf-8" />
<?php
	print "Result: ";
	if (isset($_POST["test"]) and strlen($_POST["test"]) == 484095) {
		//string is actually 482977, but value from strlen is 484095 (482977+1118) since \r\n are counted seperately
		print "PASS";
	} else {
		print "FAIL";
	}

?>

