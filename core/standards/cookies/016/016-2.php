<?php
$expected1 = "016-01=1";
$expected2 = "016-02=1";
$found2 = 0;
$result = 0;

$cookies = split("; ", $_SERVER['HTTP_COOKIE']);

#expected2 must be found before expected1
for ($i = 0; $i < count($cookies); $i++) {
 if ($cookies[$i] == $expected2) $found2 = 1;
 if ($cookies[$i] == $expected1) $result = $found2;
}

header("Cache-Control: no-cache, must-revalidate");
header("Expires: Thu, 01-Jan-1970 00:00:10 GMT");
header ("Location: ../result.php?result=$result");
?>