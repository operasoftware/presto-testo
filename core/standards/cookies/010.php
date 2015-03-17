<?php
#Set max-age, as this will otherwise later mess up all JS=php cookie tests
header('Set-Cookie: 010=1; Httponly; Max-age=1');
header("Location: 010-1.php");
?>