<!doctype html>
<meta charset="utf-8" />
<title>Multiple GET returns page</title>
<?php

	print "<p>You typed:";

	foreach ($_GET as $value) {
		$value = stripslashes($value);
		print " [" . $value . "]";
	}

	print "</p>";

?>

