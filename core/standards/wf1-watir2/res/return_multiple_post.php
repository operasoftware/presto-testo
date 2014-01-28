<!doctype html>
<meta charset="utf-8" />
<title>Multiple POST returns page</title>
<?php

	print "<p>You typed:";

	foreach ($_POST as $value) {
		$value = stripslashes($value);
		print " [" . $value . "]";
	}

	print "</p>";

?>

