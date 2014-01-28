<!doctype html>
<meta charset="utf-8" />

<?php

	if ($_POST["test"] == "foobar") {
		print "<p>Result: PASS</p>\n";
	} else {
		print "<p>Click the submit button.  You should see the word “PASS” on the following page.</p>\n";
		print "<form method='post'>\n";
		print "\t<input type='hidden' name='test' value='foobar' />\n";
		print "\t<input type='submit' />\n";
		print "</form>\n";
	}

?>

