<!doctype html>
<meta charset="utf-8" />
<?php

	/*
	 * Certain input elements, such as input password state, does not allow the 
	 * user to send CR or LF in the value attribute.
	 */

	print "Result: ";

	if (isset($_GET["test"]) and strlen($_GET["test"]) == 7659) {
		print "PASS";
	} else {
		print "FAIL";
	}

?>

