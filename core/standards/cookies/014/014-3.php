<?php
#Keep setting cookies until the total number of cookies is smaller than the number made

header("Cache-Control: no-cache, must-revalidate");
header("Expires: Thu, 01-Jan-1970 00:00:10 GMT");
if (count($_COOKIE) < $_COOKIE["014-01"]) {
 $expectedCookies["014-20"] = "1";

 $missingCookie = 0;
 foreach ($expectedCookies as $cookie => $value)
  if (!(isset($_COOKIE[$cookie]) && $_COOKIE[$cookie] == $value))
   $missingCookie = 1;
 if (!(isset($_COOKIE["014-01"]))) $missingCookie = 1;
 
 header ("Location: ../result.php?result=".!$missingCookie);
} else {
 header("Location: ../014-1.php?".$_COOKIE["014-01"]);
}
?>