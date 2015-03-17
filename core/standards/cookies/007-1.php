<?php
header("Cache-Control: no-cache, must-revalidate");
header("Expires: Thu, 01-Jan-1970 00:00:10 GMT");
header ("Location: result.php?result=".(count($_COOKIE) >= 20));
?>