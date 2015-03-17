<?php
$invalidCookies[] = "203";

$invalidFound = 0;
foreach ($invalidCookies as $cookie)
 if (isset($_COOKIE[$cookie]))
  $invalidFound= 1;

header("Cache-Control: no-cache, must-revalidate");
header("Expires: Thu, 01-Jan-1970 00:00:10 GMT");
header ("Location: result.php?result=".!$invalidFound."&req=cookie2");
?>