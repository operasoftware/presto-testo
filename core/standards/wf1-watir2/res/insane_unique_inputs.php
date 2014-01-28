<!doctype html>
<meta charset="utf-8" />
<?php

	$total_fields = 0;       # We start count at 0.
	$fields       = array();

	foreach ($_POST as $name => $value) {

		# Is this unique?
		if (in_array($name, $fields)
			or substr($value, 0, 6) != "foobar"
			or substr($value, 6, 2) != sprintf("%02d", $total_fields)) {
			# This will never reach 99 and fail below.
			break;
		}

		$fields[$name] = $value;
		$total_fields++;

	}

	print "Result: ";

	# We won't want to count the submit field.
	if ($total_fields === 100) {
		print "PASS";
	} else {
		print "FAIL";
	}

	print "<hr />";

	print_r($_POST);

?>

