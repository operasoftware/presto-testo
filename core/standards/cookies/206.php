<?php
header('Set-Cookie2: 206-1=1; Port="80, 443, 8012"; Version=1; ',false);
header('Set-Cookie2: 206-2=1; Port="25"; Version=1; ',false);
header ("Location: 206-1.php");
?>