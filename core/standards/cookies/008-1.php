<?php
$expectedCookies["008"] = "1";

$missingCookie = 0;
foreach ($expectedCookies as $cookie => $value)
 if (!(isset($_COOKIE[$cookie]) && $_COOKIE[$cookie] == $value))
  $missingCookie = 1;

header("Cache-Control: no-cache, must-revalidate");
header("Expires: Thu, 01-Jan-1970 00:00:10 GMT");
header('Set-Cookie: 008=2;');
if ($missingCookie) header ("Location: result.php?result=0");
else header ("Location: 008-2.php");
?>