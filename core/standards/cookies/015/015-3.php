<?php
$expected1 = "015-01=1";
$expected2 = "015-02=1";
$found1 = 0;
$found2 = 0;

$cookies = split("; ", $_SERVER['HTTP_COOKIE']);

foreach ($cookies as $cookie) {
 if ($cookie == $expected1) $found1++;
 if ($cookie == $expected2) $found2++;
}

header("Cache-Control: no-cache, must-revalidate");
header("Expires: Thu, 01-Jan-1970 00:00:10 GMT");
header ("Location: ../result.php?result=".($found1 == 2 && $found2 == 2));
?>