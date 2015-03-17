<?php
$expectedCookies["206-1"] = "1";
$invalidCookies[] = "206-2";

$invalidFound = 0;
foreach ($invalidCookies as $cookie)
 if (isset($_COOKIE[$cookie]))
  $invalidFound= 1;

$missingCookie = 0;
foreach ($expectedCookies as $cookie => $value)
 if (!(isset($_COOKIE[$cookie]) && $_COOKIE[$cookie] == $value))
  $missingCookie = 1;

header("Cache-Control: no-cache, must-revalidate");
header("Expires: Thu, 01-Jan-1970 00:00:10 GMT");
header ("Location: result.php?result=".!($missingCookie || $invalidFound)."&req=cookie2");
?>