<?php
$expectedCookies["502-1"] = "1";
 
$missingCookie = 0;
foreach ($expectedCookies as $cookie => $value)
 if (!(isset($_COOKIE[$cookie]) && $_COOKIE[$cookie] == $value))
  $missingCookie = 1;

header("Cache-Control: no-cache, must-revalidate");
header("Expires: Thu, 01-Jan-1970 00:00:10 GMT");
if ($missingCookie) header ("Location: result.php?result=0");
?><!DOCTYPE HTML>
<html>  
  <head>    
    <title>Cookie settings</title>  
  </head>  
  <body>  
   <ol>
    <li>Disable cookies</li>
    <li>Enable cookies for this domain</li>
    <li>Click <a href="502-2.php">here</li>
   </ol>
  </body>
</html>