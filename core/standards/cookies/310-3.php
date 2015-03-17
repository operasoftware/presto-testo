<?php
$expectedCookies["310-02"] = "1";

$missingCookie = 0;
foreach ($expectedCookies as $cookie => $value)
 if (!(isset($_COOKIE[$cookie]) && $_COOKIE[$cookie] == $value))
  $missingCookie = 1;
  
$invalidCookies[] = "$310-01";

$invalidFound = 0;
foreach ($invalidCookies as $cookie)
 if (isset($_COOKIE[$cookie]))
  $invalidFound= 1;
  
header("Cache-Control: no-cache, must-revalidate");
header("Expires: Thu, 01-Jan-1970 00:00:10 GMT");
if ($missingCookie) header ("Location: result.php?result=0&step=2");
else if ($invalidFound) header ("Location: result.php?result=0&step=3");
else header('Location: result.php?result=1');
?>