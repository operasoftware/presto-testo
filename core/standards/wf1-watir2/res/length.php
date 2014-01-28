<!doctype html>
<meta charset="utf-8" />
<title>String length</title>
<?php
	print isset($_REQUEST["test"]) ? strlen($_REQUEST["test"]) : "FAIL (not set)";
?>

