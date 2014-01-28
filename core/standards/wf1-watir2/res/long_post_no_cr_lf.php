<!doctype html>
<meta charset="utf-8" />
<?php

	/*
	 * Certain input elements, such as input password state, does not allow the 
	 * user to send CR or LF in the value attribute.
	 */

	print "Result: ";

	if (isset($_POST["test"]) and strlen($_POST["test"]) == 481859) {
		print "PASS";
	} else {
		print "FAIL";
	}

?>

