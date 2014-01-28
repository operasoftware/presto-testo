<!doctype html>
<meta charset="utf-8" />
<?php
	if (isset($_REQUEST["test"]) and
	  isset($_REQUEST["max"]) and
		mb_strlen($_REQUEST["test"]) <= $_REQUEST["max"])	{
		print "Result: PASS";
	}	else {
		print "Result: FAIL";
	}
?>

