<?php
$expected1 = "201=1";
$expected2 = '$Path="/"';

$cookies = split("; ", stripslashes($_SERVER['HTTP_COOKIE']));
$result = 0;

for ($i = 0; $i < count($cookies); $i++) {
 if ($cookies[$i] == $expected1 && $cookies[$i+1] == $expected2) $result = 1;
}

header("Cache-Control: no-cache, must-revalidate");
header("Expires: Thu, 01-Jan-1970 00:00:10 GMT");
header ("Location: result.php?result=".$result."&req=cookie2");
?>