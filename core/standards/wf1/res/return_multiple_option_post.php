<!doctype html>
<meta charset="utf-8" />
<title>Multiple POST returns page</title>
<?php

	print "<p>You typed:";
	$test = $_POST['test'];
	if ($test) {
		foreach ($test as $t) {
			print " [" . $t . "]";
		}
	}
	print "</p>";

?>

