<?php
#Set 18 new cookies at a time, keep the counter in 014-01, but don't bother trying more than 10000
header("Cache-Control: no-cache, must-revalidate");
header("Expires: Thu, 01-Jan-1970 00:00:10 GMT");
if (!(isset($_COOKIE["014-01"])) || $_COOKIE["014-01"] > 10000) {
 header("Location: result.php?result=0");
} else {
 $count = $_COOKIE["014-01"];
 header('Set-Cookie: 014-01='.($count+18).'; Path=/;', false);
 for ( $counter = $count+1; $counter <= $count + 18; $counter ++) {
  header('Set-Cookie: 014-'.$counter.'=1;', false);
 }
 header("Location: 014-3.php");
}
?>