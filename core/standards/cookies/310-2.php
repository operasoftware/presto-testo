<?php
$expectedCookies["$310-01"] = "1";

$missingCookie = 0;
foreach ($expectedCookies as $cookie => $value)
 if (!(isset($_COOKIE[$cookie]) && $_COOKIE[$cookie] == $value))
  $missingCookie = 1;
  
header("Cache-Control: no-cache, must-revalidate");
header("Expires: Thu, 01-Jan-1970 00:00:10 GMT");
header('Set-Cookie2: 310-02=1; Version=1;', false);
if ($missingCookie) header ("Location: result.php?result=0&step=1");
else header('Location: 310-3.php');
?>